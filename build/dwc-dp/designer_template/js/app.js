(function () {
  // -----------------------------
  // Configuration
  // -----------------------------
  const DESIGNER_DATA_GLOBAL = "DWC_DP_DESIGNER_DATA";

  const FETCH_TIMEOUT_MS    = 20000;
  const FETCH_CONCURRENCY   = 6;
  const FIELD_MIN_CHARS     = 3;
  const URL_TABLES_PARAM    = "tables";
  const URL_STATE_PARAM     = "state";
  const PACKING_FACTOR_DEFAULT = 0.5;

  // -----------------------------
  // DOM helpers
  // -----------------------------
  function $(selector) {
    return document.querySelector(selector);
  }

  function createEl(tagName, attrs, ...children) {
    const node = document.createElement(tagName);
    attrs = attrs || {};

    for (const key of Object.keys(attrs)) {
      const value = attrs[key];
      if (key === "class") {
        node.className = value;
      } else if (key === "text") {
        node.textContent = value;
      } else if (key.startsWith("on") && typeof value === "function") {
        node.addEventListener(key.slice(2), value);
      } else {
        node.setAttribute(key, value);
      }
    }

    for (const child of children) {
      if (typeof child === "string") {
        node.appendChild(document.createTextNode(child));
      } else if (child) {
        node.appendChild(child);
      }
    }

    return node;
  }

  // -----------------------------
  // Modal
  // -----------------------------
  const backdrop      = $("#backdrop");
  const modalTitle    = $("#modalTitle");
  const modalContent  = $("#modalContent");
  const modalCloseBtn = $("#modalCloseBtn");

  function openModal() {
    backdrop.style.display = "flex";
  }

  function closeModal() {
    backdrop.style.display = "none";
  }

  modalCloseBtn.addEventListener("click", closeModal);

  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) { closeModal(); }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeModal(); }
  });

  // -----------------------------
  // State
  // -----------------------------
  const schemas                = new Map();
  const tableMeta              = new Map();
  const dependsOnRequired      = new Map();
  const dependsOnAnyForeignKey = new Map();
  const transitiveDeps         = new Map();
  const maxDepth               = new Map();
  const tableType              = new Map();
  const enabled                = new Map();
  const checked                = new Map();
  const selectedFieldsByTable  = new Map();
  const expandedTables         = new Set();

  let fieldIndex  = [];
  let fieldLookup = new Map();
  let loadErrors  = [];
  let dwcDpProfileId = null;
  let dwcDpVersion   = null;
  let modelLoaded    = false;
  let loadedModel    = null;
  let initialSelectionStateFromUrl = null;

  function ensureFieldSet(tableName) {
    if (!selectedFieldsByTable.has(tableName)) {
      selectedFieldsByTable.set(tableName, new Set());
    }
    return selectedFieldsByTable.get(tableName);
  }

  function isFieldSelected(tableName, fieldName) {
    return ensureFieldSet(tableName).has(fieldName);
  }

  function setFieldSelected(tableName, fieldName, isSelected) {
    const fieldSet = ensureFieldSet(tableName);
    if (isSelected) { fieldSet.add(fieldName); } else { fieldSet.delete(fieldName); }
  }

  function clearSelectedFields(tableName) {
    ensureFieldSet(tableName).clear();
  }

  function isRequiredField(tableName, fieldName) {
    const schemaObj = schemas.get(tableName);
    if (!schemaObj) { return false; }
    const field = (schemaObj.fields || []).find(function (f) { return f.name === fieldName; });
    return !!(field && field.constraints && field.constraints.required === true);
  }

  function selectRequiredFields(tableName) {
    const schemaObj = schemas.get(tableName);
    if (!schemaObj) { return; }
    (schemaObj.fields || []).forEach(function (f) {
      if (f.constraints && f.constraints.required === true) {
        setFieldSelected(tableName, f.name, true);
      }
    });
  }

  function selectTable(tableName) {
    checked.set(tableName, true);
    selectRequiredFields(tableName);
  }

  function deselectTable(tableName) {
    checked.set(tableName, false);
    clearSelectedFields(tableName);
  }

  function countSelectedFields() {
    let total = 0;
    selectedFieldsByTable.forEach(function (fieldSet) { total += fieldSet.size; });
    return total;
  }

  // -----------------------------
  // Network helpers
  // -----------------------------
  function fetchJSONWithTimeout(url, timeoutMs) {
    const controller = new AbortController();
    const timerId = setTimeout(function () { controller.abort(); }, timeoutMs);

    return fetch(url, { cache: "no-store", signal: controller.signal })
      .then(function (response) {
        clearTimeout(timerId);
        if (!response.ok) { throw new Error("Fetch failed " + response.status + ": " + url); }
        return response.json();
      });
  }

  function mapWithConcurrency(items, concurrency, mapper, onProgress) {
    let index    = 0;
    let inFlight = 0;
    const results = [];

    return new Promise(function (resolve) {
      function launchNext() {
        while (inFlight < concurrency && index < items.length) {
          (function (item, itemIndex) {
            inFlight += 1;

            Promise.resolve()
              .then(function () { return mapper(item, itemIndex); })
              .then(function (value) { results[itemIndex] = { ok: true, value }; })
              .catch(function (err)  { results[itemIndex] = { ok: false, error: err }; })
              .finally(function () {
                inFlight -= 1;
                index    += 1;
                if (typeof onProgress === "function") { onProgress(index, items.length); }
                if (index >= items.length && inFlight === 0) { resolve(results); return; }
                launchNext();
              });
          })(items[index], index);
        }
      }
      launchNext();
    });
  }

  // -----------------------------
  // Model helpers
  // -----------------------------
  function titleFor(tableName) {
    const meta = tableMeta.get(tableName);
    return (meta && meta.title) ? meta.title : tableName;
  }

  function isRequiredFK(schemaObj, fk) {
    const fkFields    = Array.isArray(fk.fields) ? fk.fields : [fk.fields];
    const fieldByName = new Map();
    (schemaObj.fields || []).forEach(function (f) { fieldByName.set(f.name, f); });

    for (const fieldName of fkFields) {
      const field    = fieldByName.get(fieldName);
      const required = !!(field && field.constraints && field.constraints.required === true);
      if (!required) { return false; }
    }
    return true;
  }

  // Classifies a table as one of: Entity, Dependent, Relationship, Join
  //   Entity      — no required foreign-key parents
  //   Dependent   — exactly one required parent, has non-PK/non-FK payload fields
  //   Relationship — two or more required parents, has non-PK/non-FK payload fields
  //   Join        — two or more required parents, no payload fields (pure junction)
  function computeTableType(schemaObj) {
    const tableName   = schemaObj.name;
    const primaryKey  = schemaObj.primaryKey;
    const foreignKeys = schemaObj.foreignKeys || [];

    const requiredParents = [];
    const fkFieldNames    = new Set();

    foreignKeys.forEach(function (fk) {
      const ref = fk && fk.reference ? fk.reference.resource : "";
      if (!ref || ref === tableName) { return; }
      if (isRequiredFK(schemaObj, fk)) { requiredParents.push(ref); }
    });

    foreignKeys.forEach(function (fk) {
      (Array.isArray(fk.fields) ? fk.fields : [fk.fields]).forEach(function (n) { fkFieldNames.add(n); });
    });

    const pkValues = Array.isArray(primaryKey) ? primaryKey : (primaryKey ? [primaryKey] : []);
    const nonPkNonFkFields = (schemaObj.fields || [])
      .map(function (f) { return f.name; })
      .filter(function (n) { return pkValues.indexOf(n) === -1 && !fkFieldNames.has(n); });

    const numReqParents = requiredParents.length;

    if (numReqParents === 0)                                          { return "Entity"; }
    if (numReqParents === 1)                                          { return "Dependent"; }
    if (numReqParents >= 2 && nonPkNonFkFields.length === 0)         { return "Join"; }
    /* numReqParents >= 2 && nonPkNonFkFields.length > 0 */           return "Relationship";
  }

  function buildTableTypes() {
    tableType.clear();
    schemas.forEach(function (schemaObj, tableName) {
      tableType.set(tableName, computeTableType(schemaObj));
    });
  }

  function buildDirectRequiredDependencies() {
    schemas.forEach(function (schemaObj, tableName) {
      dependsOnRequired.set(tableName, new Set());
      enabled.set(tableName, true);
      checked.set(tableName, false);
    });

    schemas.forEach(function (schemaObj, tableName) {
      (schemaObj.foreignKeys || []).forEach(function (fk) {
        const ref = fk && fk.reference ? fk.reference.resource : "";
        if (!ref || ref === tableName) { return; }
        if (isRequiredFK(schemaObj, fk)) { dependsOnRequired.get(tableName).add(ref); }
      });
    });
  }

  function buildAllForeignKeyDependencies() {
    dependsOnAnyForeignKey.clear();
    schemas.forEach(function (schemaObj, tableName) {
      dependsOnAnyForeignKey.set(tableName, new Set());
      (schemaObj.foreignKeys || []).forEach(function (fk) {
        const ref = fk && fk.reference ? fk.reference.resource : "";
        if (!ref || ref === tableName) { return; }
        dependsOnAnyForeignKey.get(tableName).add(ref);
      });
    });
  }

  function computeTransitiveDependencies() {
    transitiveDeps.clear();
    schemas.forEach(function (_s, tableName) {
      const closure = new Set();
      const stack   = Array.from(dependsOnRequired.get(tableName) || []);
      const visited = new Set();

      while (stack.length > 0) {
        const current = stack.pop();
        if (!current || visited.has(current)) { continue; }
        visited.add(current);
        closure.add(current);
        (dependsOnRequired.get(current) || new Set()).forEach(function (p) {
          if (!visited.has(p)) { stack.push(p); }
        });
      }
      transitiveDeps.set(tableName, closure);
    });
  }

  function computeMaximumDepth() {
    maxDepth.clear();
    const visiting = new Set();

    function dfs(tableName) {
      if (maxDepth.has(tableName))  { return maxDepth.get(tableName); }
      if (visiting.has(tableName))  { return 0; }
      visiting.add(tableName);

      const deps = dependsOnRequired.get(tableName) || new Set();
      let depthValue = 0;
      if (deps.size > 0) {
        let best = 0;
        deps.forEach(function (dep) { best = Math.max(best, dfs(dep)); });
        depthValue = 1 + best;
      }

      visiting.delete(tableName);
      maxDepth.set(tableName, depthValue);
      return depthValue;
    }

    schemas.forEach(function (_s, tableName) { dfs(tableName); });
  }

  function recomputeEnabledState() {
    let changed = true;
    let guard   = 0;

    while (changed && guard < 50) {
      changed = false;
      guard  += 1;

      dependsOnRequired.forEach(function (deps, tableName) {
        let shouldEnable = true;
        deps.forEach(function (dep) { if (!checked.get(dep)) { shouldEnable = false; } });

        if (enabled.get(tableName) !== shouldEnable) { enabled.set(tableName, shouldEnable); changed = true; }
        if (!shouldEnable && checked.get(tableName)) { deselectTable(tableName); changed = true; }
      });
    }
  }

  function requiresText(tableName) {
    const deps = transitiveDeps.get(tableName);
    if (!deps || deps.size === 0) { return ""; }
    const titles = Array.from(deps).map(function (d) { return titleFor(d); });
    titles.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    return " (requires " + titles.join(", ") + ")";
  }

  // -----------------------------
  // Modal content helpers
  // -----------------------------
  function arrayify(value) {
    if (Array.isArray(value))           { return value; }
    if (value == null || value === "")  { return []; }
    return [value];
  }

  function fkPhrase(fk) {
    return fk.relationship || fk.predicate || fk.predicateLabel || fk.title || fk.description || fk.comments || "";
  }

  function isWeakPrimaryKeyField(schemaObj, fieldName) {
    return arrayify(schemaObj.weakPrimaryKey).indexOf(fieldName) !== -1;
  }


  function allRelationshipKeys(schemaObj) {
    const normal = (schemaObj.foreignKeys || []).map(function (fk) {
      const copy = Object.assign({}, fk);
      copy._keyKind = "foreignKey";
      return copy;
    });

    const weak = (schemaObj.weakForeignKeys || []).map(function (fk) {
      const copy = Object.assign({}, fk);
      copy._keyKind = "weakForeignKey";
      return copy;
    });

    return normal.concat(weak);
  }

  function showInfo(tableName) {
    const schemaObj = schemas.get(tableName);
    const meta      = tableMeta.get(tableName);
    if (!schemaObj) { return; }

    modalTitle.textContent = (meta && meta.title) ? meta.title : tableName;

    const directDeps = Array.from(dependsOnRequired.get(tableName) || []).map(function (d) { return titleFor(d) + " (" + d + ")"; });
    const allDeps    = Array.from(transitiveDeps.get(tableName) || []).map(function (d) { return titleFor(d) + " (" + d + ")"; });


    modalContent.innerHTML = "";

    function addKV(label, value) {
      if (value == null || value === "") { return; }
      modalContent.appendChild(createEl("div", { class: "kv" },
        createEl("span", { class: "k", text: label + ": " }),
        createEl("span", { text: String(value) })
      ));
    }

    addKV("Description", schemaObj.description || "");
    if (schemaObj.notes) { addKV("Usage notes", schemaObj.notes); }
    if (schemaObj.examples) {
      modalContent.appendChild(createEl("div", { class: "kv" },
        createEl("span", { class: "k", text: "Examples: " }),
        createEl("span", { class: "mono", text: schemaObj.examples })
      ));
    }
    addKV("Table type", tableType.get(tableName) || "Unknown");
    addKV("Max required dependency depth", String(maxDepth.get(tableName) || 0));
    addKV("Direct required dependencies", directDeps.length ? directDeps.join(", ") : "None");
    addKV("All required dependencies (transitive)", allDeps.length ? allDeps.join(", ") : "None");

    // Local "Selected and required fields only" checkbox — mirrors the one in Generate outputs
    const localReqCb = createEl("input", { type: "checkbox", id: "detailsSelectedRequiredOnly" });
    localReqCb.checked = !!(dpSelectedRequiredOnlyCheckbox && dpSelectedRequiredOnlyCheckbox.checked);
    localReqCb.addEventListener("change", function () {
      if (dpSelectedRequiredOnlyCheckbox) { dpSelectedRequiredOnlyCheckbox.checked = localReqCb.checked; }
      updateDesignSummary();
      refreshDerivedOutputs();
    });

    const copyHeaderBtn = createEl("button", {
      class: "btn", type: "button",
      onclick: function () {
        const csvHeader = buildCsvHeaderContent(tableName, localReqCb.checked);
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(csvHeader)
            .then(function () { showEphemeralFeedback(copyHeaderBtn, "CSV header copied for " + titleFor(tableName) + "."); })
            .catch(function () {});
        }
      }
    }, "Copy CSV header");

    const fieldsControls = createEl(
      "div", { style: "margin: 8px 0 10px 0; display: flex; gap: 8px; flex-wrap: wrap; align-items: center;" },
      createEl("button", { class: "btn", type: "button", onclick: function () {
        (schemaObj.fields || []).forEach(function (f) { setFieldSelected(tableName, f.name, true); });
        updateDesignSummary(); renderFieldResults(); showInfo(tableName);
      }}, "Select all"),
      createEl("button", { class: "btn", type: "button", onclick: function () {
        (schemaObj.fields || []).forEach(function (f) {
          const isReqLocked = !!(f.constraints && f.constraints.required === true) && !!checked.get(tableName);
          if (!isReqLocked) { setFieldSelected(tableName, f.name, false); }
        });
        updateDesignSummary(); renderFieldResults(); showInfo(tableName);
      }}, "Unselect all"),
      copyHeaderBtn,
      createEl("label", { style: "display:inline-flex; align-items:center; gap:6px; font-size:12px; margin-left:4px;" },
        localReqCb,
        createEl("span", { text: "Selected fields only" })
      )
    );

    const thead = createEl("thead", {},
      createEl("tr", {},
        createEl("th", { text: "Field" }),
        createEl("th", { text: "Key type" }),
        createEl("th", { text: "Predicate" }),
        createEl("th", { text: "References" }),
        createEl("th", { text: "Required" })
      )
    );

    const tbody = createEl("tbody");
    (schemaObj.fields || []).forEach(function (fieldObj) {
      const isRequired  = !!(fieldObj.constraints && fieldObj.constraints.required === true);
      const isPk        = arrayify(schemaObj.primaryKey).indexOf(fieldObj.name) !== -1;
      const isWeakPk    = isWeakPrimaryKeyField(schemaObj, fieldObj.name);

      const fkEntries = allRelationshipKeys(schemaObj)
        .filter(function (fk) { return arrayify(fk.fields).indexOf(fieldObj.name) !== -1; })
        .map(function (fk) {
          const refFields   = arrayify(fk.reference ? fk.reference.fields : []);
          let refResource   = fk.reference ? fk.reference.resource : "";
          if (!refResource) { refResource = schemaObj.name || "?"; }
          const fkFields    = arrayify(fk.fields);
          const idx         = fkFields.indexOf(fieldObj.name);
          return {
            keyType:   fk._keyKind === "weakForeignKey" ? "weak foreign key" : "foreign key",
            predicate: fkPhrase(fk),
            ref:       refResource + "." + (refFields[idx] || refFields[0] || "?")
          };
        });

      const keyTypes   = (isPk ? ["primary key"] : [])
        .concat(isWeakPk ? ["weak primary key"] : [])
        .concat(fkEntries.map(function (e) { return e.keyType; }));
      const predicates = fkEntries.map(function (e) { return e.predicate; });
      const refs       = fkEntries.map(function (e) { return e.ref; });

      const cb = createEl("input", { type: "checkbox" });
      cb.checked = isFieldSelected(tableName, fieldObj.name);
      const isReqField = !!(fieldObj.constraints && fieldObj.constraints.required === true);
      if (isReqField && checked.get(tableName)) {
        cb.disabled = true;
      } else {
        cb.addEventListener("change", function () {
          setFieldSelected(tableName, fieldObj.name, cb.checked);
          updateDesignSummary(); renderFieldResults();
        });
      }

      function linesCell(lines, useMono) {
        const td = createEl("td");
        lines.forEach(function (line, i) {
          if (i > 0) { td.appendChild(document.createElement("br")); }
          td.appendChild(useMono
            ? createEl("span", { class: "mono", text: line })
            : document.createTextNode(line)
          );
        });
        return td;
      }

      const fieldCell = createEl("td", {},
        createEl("label", { style: "display:inline-flex; align-items:center; gap:6px; cursor:pointer;" },
          cb,
          createEl("span", { class: "mono", text: fieldObj.name })
        )
      );

      const tr = createEl("tr");
      tr.appendChild(fieldCell);
      tr.appendChild(linesCell(keyTypes, false));
      tr.appendChild(linesCell(predicates, false));
      tr.appendChild(linesCell(refs, true));
      tr.appendChild(createEl("td", { text: isRequired ? "required" : "" }));
      tbody.appendChild(tr);
    });

    const fieldsTable = createEl("table", { class: "fields-table" }, thead, tbody);

    modalContent.appendChild(createEl("details", { open: true },
      createEl("summary", { text: "Fields (" + (schemaObj.fields || []).length + ")" }),
      createEl("div", {}, fieldsControls, fieldsTable)
    ));
    openModal();
  }

  // -----------------------------
  // Graph
  // -----------------------------
  const graphPanel             = document.getElementById("graphPanel");
  const graphStatus            = document.getElementById("graphStatus");
  const graphCyEl              = document.getElementById("graphCy");
  const btnFitGraph                 = document.getElementById("btnFitGraph");
  const btnToggleEnabledTables      = document.getElementById("btnToggleEnabledTables");
  const inputShowWeakForeignKeys    = document.getElementById("inputShowWeakForeignKeys");

  let graphCy                  = null;
  let graphFocal               = null;
  let graphShowEnabledTables   = false;
  let graphShowWeakForeignKeys = false;
  let currentPackingFactor   = PACKING_FACTOR_DEFAULT;
  let graphPreviousNodeCount = 0;

  function circleLayout() {
    return { name: "circle", spacingFactor: currentPackingFactor, padding: 30, fit: false, animate: false };
  }

  function categoriesOf(tableName) {
    const cats = ["agent", "assertion", "identifier", "media", "protocol", "reference", "provenance", "usage-policy"];
    const name = String(tableName || "").toLowerCase();
    return cats.filter(function (c) { return name.indexOf(c) !== -1; });
  }

  function buildGraphElements() {
    const visibleTables = new Set();
    const elements      = [];

    schemas.forEach(function (_s, tableName) {
      if (checked.get(tableName)) {
        visibleTables.add(tableName);
      } else if (graphShowEnabledTables && enabled.get(tableName)) {
        visibleTables.add(tableName);
      }
    });

    Array.from(visibleTables).forEach(function (tableName) {
      const categories = categoriesOf(tableName);
      elements.push({
        group: "nodes",
        data: {
          id: tableName,
          label: tableName,
          state: checked.get(tableName) ? "selected" : "enabled",
          focal: graphFocal === tableName ? "true" : "false",
          categories,
          category: categories.length === 1 ? categories[0] : null
        }
      });
    });

    schemas.forEach(function (schemaObj, tableName) {
      allRelationshipKeys(schemaObj).forEach(function (fk, idx) {
        if (fk._keyKind === "weakForeignKey" && !graphShowWeakForeignKeys) { return; }

        let ref = fk && fk.reference ? fk.reference.resource : "";
        if (!ref) { ref = tableName; }
        if (!visibleTables.has(tableName) || !visibleTables.has(ref)) { return; }

        const fkFields  = Array.isArray(fk.fields) ? fk.fields : [fk.fields];
        const refFields = Array.isArray(fk.reference && fk.reference.fields ? fk.reference.fields : [])
          ? fk.reference.fields : [fk.reference ? fk.reference.fields : ""];
        const keyType   = fk._keyKind === "weakForeignKey" ? "weakForeignKey" : "foreignKey";
        const label     = fk.relationship || fk.predicate || fk.predicateLabel || "relates to";

        elements.push({
          group: "edges",
          data: {
            id: tableName + "__" + ref + "__" + idx,
            source: tableName, target: ref, label,
            source_field: fkFields.join(", "),
            target_field: refFields.join(", "),
            key_type: keyType,
            edge_state: (checked.get(tableName) && checked.get(ref)) ? "selected" : "enabled"
          }
        });
      });
    });

    return elements;
  }

  // Fit the viewport to all visible nodes without changing their positions.
  function fitGraph() {
    if (!graphCy) { return; }
    graphCy.resize();
    graphCy.fit(graphCy.elements(), 30);
  }

  // Re-run the circle layout and fit — used only on initial render and when the node set changes.
  function relayoutGraph() {
    if (!graphCy) { return; }
    const nodeCount = graphCy.nodes().length;
    graphCy.resize();
    graphCy.layout(circleLayout()).run();
    graphCy.fit(graphCy.elements(), 30);

    if (graphFocal && graphCy.getElementById(graphFocal).length > 0) {
      graphCy.animate({
        fit: { eles: graphCy.getElementById(graphFocal).closedNeighborhood(), padding: 40 },
        duration: 250
      });
    }
  }

  function showEdgeInfo(edgeData) {
    modalTitle.textContent = "Relationship";
    modalContent.innerHTML = "";
    modalContent.appendChild(createEl("div", { class: "kv" },
      createEl("span", { class: "k", text: "Description: " }),
      createEl("span", { text: (edgeData.source || "") + " " + (edgeData.label || "relates to") + " " + (edgeData.target || "") })
    ));
    modalContent.appendChild(createEl("div", { class: "kv" },
      createEl("span", { class: "k", text: "Fields: " }),
      createEl("span", { class: "mono", text: (edgeData.source_field || "?") + " -> " + (edgeData.target_field || "?") })
    ));
    modalContent.appendChild(createEl("div", { class: "kv" },
      createEl("span", { class: "k", text: "Constraint: " }),
      createEl("span", { text: edgeData.key_type === "weakForeignKey" ? "Weak foreign key" : "Foreign key" })
    ));
    openModal();
  }

  function renderGraph() {
    if (!modelLoaded || !graphPanel || !graphCyEl || typeof cytoscape === "undefined") { return; }

    const elements        = buildGraphElements();
    const visibleNodeCount = elements.filter(function (el) { return el.group === "nodes"; }).length;

    if (btnToggleEnabledTables) {
      btnToggleEnabledTables.textContent = graphShowEnabledTables ? "Hide enabled tables" : "Show enabled tables";
    }

    if (visibleNodeCount === 0) {
      graphStatus.textContent = "Select tables to populate the graph.";
      if (graphCy) { graphCy.elements().remove(); }
      return;
    }

    graphPanel.style.display = "block";
    const weakFkStatus = graphShowWeakForeignKeys
      ? " Weak foreign keys are shown."
      : " Weak foreign keys are hidden.";
    graphStatus.textContent = (
      graphShowEnabledTables
        ? "Showing selected and enabled tables. Left-click a node or edge to view details. Right-click an enabled table to select it, or right-click a selected table to deselect it and clear any selected fields within it."
        : "Showing selected tables only. Left-click a node or edge to view details. Click \u201cShow enabled tables\u201d to reveal currently enabled tables."
    ) + weakFkStatus;

    if (!graphCy) {
      graphCy = cytoscape({
        container: graphCyEl,
        elements,
        layout: { name: "preset" },
        style: [
          { selector: "node", style: { label: "data(id)", "text-valign": "center", color: "#fff", "background-color": "#666" } },
          { selector: "node[category = \"agent\"]",        style: { "background-color": "#8B0000" } },
          { selector: "node[category = \"assertion\"]",    style: { "background-color": "#2E8B57" } },
          { selector: "node[category = \"identifier\"]",   style: { "background-color": "#8B4513" } },
          { selector: "node[category = \"media\"]",        style: { "background-color": "#00688B" } },
          { selector: "node[category = \"protocol\"]",     style: { "background-color": "#8B6914" } },
          { selector: "node[category = \"reference\"]",    style: { "background-color": "#6B238E" } },
          { selector: "node[category = \"provenance\"]",   style: { "background-color": "#556B2F" } },
          { selector: "node[category = \"usage-policy\"]", style: { "background-color": "#8B2252" } },
          { selector: "edge", style: { width: 1, "curve-style": "bezier", "target-arrow-shape": "triangle", label: "data(label)", "text-margin-y": -10, "line-style": "solid", "line-color": "#000", "target-arrow-color": "#000", color: "#000", "font-size": 10 } },
          { selector: "edge[key_type = \"weakForeignKey\"]", style: { "line-style": "dashed", "line-dash-pattern": [8, 4], "line-color": "#000", "target-arrow-color": "#000", opacity: 0.8 } },
          { selector: "node[state = \"enabled\"]",  style: { opacity: 0.65, color: "#888" } },
          { selector: "node[state = \"selected\"]", style: { color: "#000", "border-width": 8, "border-color": "#888" } },
          { selector: "edge[edge_state = \"enabled\"]",  style: { opacity: 0.45 } },
          { selector: "edge[edge_state = \"selected\"]", style: { opacity: 1 } }
        ]
      });

      let cxtTapFired = false;

      // On macOS, Ctrl+click fires as a regular tap rather than cxttap.
      // Intercept it at the DOM level before Cytoscape processes it.
      graphCyEl.addEventListener("mousedown", function (e) {
        if (!e.ctrlKey) { return; }
        e.preventDefault();
        e.stopPropagation();
        cxtTapFired = true;

        const rect    = graphCyEl.getBoundingClientRect();
        const pos     = graphCy.renderer().projectIntoViewport(e.clientX, e.clientY);
        const hitNode = graphCy.nodes().filter(function (n) {
          const rp = n.renderedPosition();
          const r  = n.renderedOuterWidth() / 2;
          const dx = rp.x - (e.clientX - rect.left);
          const dy = rp.y - (e.clientY - rect.top);
          return Math.sqrt(dx * dx + dy * dy) <= r;
        });

        if (hitNode.length > 0) {
          const target = hitNode[0].id();
          if (checked.get(target)) { deselectTable(target); }
          else if (enabled.get(target)) { selectTable(target); }
          renderUI();
        }
      }, true);

      graphCy.on("tap", "node", function (evt) {
        if (cxtTapFired) { cxtTapFired = false; return; }
        graphFocal = evt.target.id();
        renderGraph();
        showInfo(graphFocal);
      });

      graphCy.on("cxttap", "node", function (evt) {
        cxtTapFired = true;
        const target = evt.target.id();
        if (checked.get(target)) { deselectTable(target); }
        else if (enabled.get(target)) { selectTable(target); }
        renderUI();
      });

      graphCy.on("taphold", "node", function (evt) {
        cxtTapFired = true;
        const target = evt.target.id();
        if (checked.get(target)) { deselectTable(target); }
        else if (enabled.get(target)) { selectTable(target); }
        renderUI();
      });

      graphCy.on("tap", "edge", function (evt) { showEdgeInfo(evt.target.data()); });

    } else {
      graphCy.elements().remove();
      graphCy.add(elements);
      graphCy.layout(circleLayout()).run();
    }

    if (visibleNodeCount !== graphPreviousNodeCount) {
      graphPreviousNodeCount = visibleNodeCount;
      relayoutGraph();
    } else {
      fitGraph();
    }
  }

  if (btnFitGraph)            { btnFitGraph.addEventListener("click", fitGraph); }
  if (btnToggleEnabledTables) {
    btnToggleEnabledTables.addEventListener("click", function () {
      graphShowEnabledTables = !graphShowEnabledTables;
      renderGraph();
    });
  }

  if (inputShowWeakForeignKeys) {
    inputShowWeakForeignKeys.checked = false;
    inputShowWeakForeignKeys.addEventListener("change", function () {
      graphShowWeakForeignKeys = inputShowWeakForeignKeys.checked;
      renderGraph();
    });
  }

  const inputPackingFactor = document.getElementById("inputPackingFactor");

  function syncPackingFactor() {
    if (!inputPackingFactor) { return false; }
    const val = parseFloat(inputPackingFactor.value);
    if (!isNaN(val) && val > 0) {
      currentPackingFactor = val;
      return true;
    }
    return false;
  }

  if (inputPackingFactor) {
    inputPackingFactor.addEventListener("change", function () {
      if (syncPackingFactor()) { relayoutGraph(); }
    });
  }

  // -----------------------------
  // Table selection UI
  // -----------------------------
  function renderPanel(panelTitle, tableNames, withActions, withClear) {
    withClear = withClear === true;

    const enabledCount = tableNames.filter(function (t) { return enabled.get(t); }).length;
    const checkedCount = tableNames.filter(function (t) { return checked.get(t); }).length;

    const headLeft = createEl("div", {},
      createEl("h2", { text: panelTitle }),
      createEl("div", { class: "meta" },
        createEl("span", { class: "pill", text: "Total: " + tableNames.length }),
        createEl("span", { class: "pill", text: "Enabled: " + enabledCount + "/" + tableNames.length }),
        createEl("span", { class: "pill", text: "Selected: " + checkedCount + "/" + tableNames.length })
      )
    );

    const actions = createEl("div", { class: "actions" });

    if (withActions) {
      actions.appendChild(createEl("button", { class: "btn", type: "button", onclick: function () {
        tableNames.forEach(function (t) { if (enabled.get(t)) { selectTable(t); } });
        renderUI();
      }}, "Select all (enabled)"));

      if (withClear) {
        actions.appendChild(createEl("button", { class: "btn", type: "button", onclick: function () {
          tableNames.forEach(function (t) { deselectTable(t); });
          renderUI(); resetMappingOrderPanel(); resetDatapackagePanel();
        }}, "Clear all"));
      }
    }

    const panel = createEl("section", { class: "panel" },
      createEl("div", { class: "panel-head" }, headLeft, actions)
    );

    tableNames.forEach(function (tableName) {
      const cb = createEl("input", { type: "checkbox" });
      cb.checked  = !!checked.get(tableName);
      cb.disabled = !enabled.get(tableName);
      cb.addEventListener("change", function () {
        if (cb.checked) { selectTable(tableName); } else { deselectTable(tableName); }
        renderUI();
      });

      const label = createEl("label", {},
        cb,
        createEl("span", { class: "title",    text: titleFor(tableName) }),
        createEl("span", { class: "requires", text: requiresText(tableName) })
      );
      const detailsBtn = createEl("button", { type: "button", class: "info", title: "Show table details", onclick: function () { showInfo(tableName); } }, "Details");

      panel.appendChild(createEl("div", { class: enabled.get(tableName) ? "row" : "row disabled" }, label, detailsBtn));
    });

    return panel;
  }

  function renderUI() {
    recomputeEnabledState();

    const app = $("#app");
    app.className = "";
    app.innerHTML = "";

    const col1 = []; const col2 = []; const col3 = [];

    schemas.forEach(function (_s, tableName) {
      const deps  = dependsOnRequired.get(tableName);
      const depth = maxDepth.get(tableName) || 0;
      if (!deps || deps.size === 0) { col1.push(tableName); }
      else if (depth === 1)         { col2.push(tableName); }
      else if (depth >= 2)          { col3.push(tableName); }
      else                          { col2.push(tableName); }
    });

    function byTitle(a, b) { return titleFor(a).toLowerCase().localeCompare(titleFor(b).toLowerCase()); }
    col1.sort(byTitle); col2.sort(byTitle); col3.sort(byTitle);

    const columns = createEl("div", { class: "cols" });
    columns.appendChild(renderPanel("Tables with no required dependencies", col1, true, true));
    columns.appendChild(renderPanel("Tables with one level of direct required dependency", col2, true, false));
    columns.appendChild(renderPanel("Tables with two or more levels of direct required dependency", col3, true, false));
    app.appendChild(columns);

    updateDesignSummary();
    renderFieldResults();
    renderGraph();
    refreshDerivedOutputs();

    if (loadErrors.length > 0) {
      app.appendChild(createEl("div", { class: "panel" },
        createEl("h2", { text: "Load warnings" }),
        createEl("div", { class: "small error", text: "Some schemas failed to load. They are omitted from the UI." }),
        createEl("div", { class: "mono", text: loadErrors.join("\n") })
      ));
    }
  }

  function renderLoading(progressText) {
    const app    = $("#app");
    app.className  = "loading";
    app.textContent = progressText;
  }

  // -----------------------------
  // Design summary
  // -----------------------------
  function updateDesignSummary() {
    let tablesSelected = 0;
    let tablesEnabled  = 0;
    checked.forEach(function (isChecked) { if (isChecked) { tablesSelected += 1; } });
    enabled.forEach(function (isEnabled) { if (isEnabled) { tablesEnabled  += 1; } });

    const fieldsSelected = countSelectedFields();
    const filterMode     = (dpSelectedRequiredOnlyCheckbox && dpSelectedRequiredOnlyCheckbox.checked)
      ? "Selected fields"
      : "All fields";
    const textNode = document.getElementById("designSummaryText");
    if (textNode) {
      textNode.textContent = "Tables selected: " + tablesSelected + "  Fields selected: " + fieldsSelected + "  Tables enabled: " + tablesEnabled + "  Filter: " + filterMode;
    }
  }

  // -----------------------------
  // Output: datapackage.json
  // -----------------------------
  const dpPanel                        = $("#dpPanel");
  const dpText                         = $("#dpText");
  const dpStatus                       = $("#dpStatus");
  const btnCopyDp                      = $("#btnCopyDp");
  const btnDownloadDp                  = $("#btnDownloadDp");
  const dpSelectedRequiredOnlyCheckbox = $("#dpSelectedRequiredOnly");

  let lastGeneratedDp = "";

  if (dpSelectedRequiredOnlyCheckbox) {
    dpSelectedRequiredOnlyCheckbox.addEventListener("change", function () {
      updateDesignSummary();
      refreshDerivedOutputs();
    });
  }

  function getSelectedTables() {
    const selected = [];
    checked.forEach(function (isChecked, tableName) { if (isChecked) { selected.push(tableName); } });
    selected.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    return selected;
  }

  function getOutputSchemaObject(tableName, selectedRequiredOnly) {
    const schemaObj = schemas.get(tableName);
    if (!schemaObj) { return null; }
    const schemaClone = JSON.parse(JSON.stringify(schemaObj));
    if (!selectedRequiredOnly) { return schemaClone; }

    const requiredFieldNames = new Set();
    const allowedFieldNames  = new Set();
    const pkValues = Array.isArray(schemaClone.primaryKey)
      ? schemaClone.primaryKey.slice()
      : (schemaClone.primaryKey ? [schemaClone.primaryKey] : []);

    pkValues.forEach(function (n) { requiredFieldNames.add(n); });
    arrayify(schemaClone.weakPrimaryKey).forEach(function (n) { requiredFieldNames.add(n); });
    (schemaClone.fields || []).forEach(function (f) {
      if (f && f.constraints && f.constraints.required === true) { requiredFieldNames.add(f.name); }
    });
    ensureFieldSet(tableName).forEach(function (n) { allowedFieldNames.add(n); });
    requiredFieldNames.forEach(function (n) { allowedFieldNames.add(n); });

    schemaClone.fields = (schemaClone.fields || []).filter(function (f) { return allowedFieldNames.has(f.name); });
    schemaClone.foreignKeys = (schemaClone.foreignKeys || []).filter(function (fk) {
      return (Array.isArray(fk.fields) ? fk.fields : [fk.fields]).every(function (n) { return allowedFieldNames.has(n); });
    });
    schemaClone.weakForeignKeys = (schemaClone.weakForeignKeys || []).filter(function (fk) {
      return (Array.isArray(fk.fields) ? fk.fields : [fk.fields]).every(function (n) { return allowedFieldNames.has(n); });
    });

    if (Array.isArray(schemaClone.primaryKey)) {
      schemaClone.primaryKey = schemaClone.primaryKey.filter(function (n) { return allowedFieldNames.has(n); });
      if (schemaClone.primaryKey.length === 0) { delete schemaClone.primaryKey; }
    } else if (schemaClone.primaryKey && !allowedFieldNames.has(schemaClone.primaryKey)) {
      delete schemaClone.primaryKey;
    }

    if (Array.isArray(schemaClone.weakPrimaryKey)) {
      schemaClone.weakPrimaryKey = schemaClone.weakPrimaryKey.filter(function (n) { return allowedFieldNames.has(n); });
      if (schemaClone.weakPrimaryKey.length === 0) { delete schemaClone.weakPrimaryKey; }
    } else if (schemaClone.weakPrimaryKey && !allowedFieldNames.has(schemaClone.weakPrimaryKey)) {
      delete schemaClone.weakPrimaryKey;
    }
    return schemaClone;
  }

  function buildDatapackageObject(selectedTables, selectedRequiredOnly) {
    const resources = [];
    selectedTables.forEach(function (tableName) {
      resources.push({
        name: tableName, path: tableName + ".csv",
        profile: "tabular-data-resource", format: "csv", mediatype: "text/csv",
        schema: getOutputSchemaObject(tableName, selectedRequiredOnly)
      });
    });
    return {
      profile: dwcDpProfileId,
      created: new Date().toISOString(),
      version: dwcDpVersion,
      resources
    };
  }

  function csvEscape(value) {
    let s = String(value == null ? "" : value);
    if (s.indexOf('"') !== -1) { s = s.replace(/"/g, '""'); }
    if (s.indexOf(",") !== -1 || s.indexOf("\n") !== -1 || s.indexOf("\r") !== -1 || s.indexOf('"') !== -1) {
      s = '"' + s + '"';
    }
    return s;
  }

  function buildCsvHeaderContent(tableName, selectedRequiredOnly) {
    const schemaObj = getOutputSchemaObject(tableName, selectedRequiredOnly);
    if (!schemaObj) { return ""; }
    return (schemaObj.fields || []).map(function (f) { return csvEscape(f.name || ""); }).join(",") + "\n";
  }

  function setDpButtonsEnabled(can) {
    btnCopyDp.disabled    = !can;
    btnDownloadDp.disabled = !can;
  }

  function generateDatapackage() {
    const selectedTables      = getSelectedTables();
    const selectedRequiredOnly = !!(dpSelectedRequiredOnlyCheckbox && dpSelectedRequiredOnlyCheckbox.checked);

    if (selectedTables.length === 0) {
      dpText.value = ""; dpStatus.textContent = "Select at least one table to see a live preview.";
      lastGeneratedDp = ""; setDpButtonsEnabled(false); return;
    }

    const dpJson = JSON.stringify(buildDatapackageObject(selectedTables, selectedRequiredOnly), null, 2);
    lastGeneratedDp = dpJson;
    dpText.value    = dpJson;
    dpStatus.textContent = selectedRequiredOnly
      ? "Generated datapackage.json for " + selectedTables.length + " table(s) using selected and required fields only."
      : "Generated datapackage.json for " + selectedTables.length + " table(s).";
    setDpButtonsEnabled(true);
    updateDesignSummary();
  }

  function copyDatapackageToClipboard() {
    if (!lastGeneratedDp) { return; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(lastGeneratedDp)
        .then(function () { showEphemeralFeedback(btnCopyDp, "Copied datapackage.json to clipboard."); dpStatus.textContent = "Copied datapackage.json to clipboard."; })
        .catch(function (err) { dpStatus.textContent = "Copy failed: " + String(err); });
      return;
    }
    dpText.focus(); dpText.select();
    try { document.execCommand("copy"); showEphemeralFeedback(btnCopyDp, "Copied datapackage.json to clipboard."); dpStatus.textContent = "Copied datapackage.json to clipboard."; }
    catch (e) { dpStatus.textContent = "Copy failed."; }
  }

  function downloadDatapackage() {
    if (!lastGeneratedDp) { return; }
    if (typeof JSZip === "undefined") { dpStatus.textContent = "Bundle download is unavailable because JSZip did not load."; return; }

    const selectedTables      = getSelectedTables();
    const selectedRequiredOnly = !!(dpSelectedRequiredOnlyCheckbox && dpSelectedRequiredOnlyCheckbox.checked);
    const zip                 = new JSZip();
    zip.file("datapackage.json", JSON.stringify(buildDatapackageObject(selectedTables, selectedRequiredOnly), null, 2));
    selectedTables.forEach(function (t) { zip.file(t + ".csv", buildCsvHeaderContent(t, selectedRequiredOnly)); });

    zip.generateAsync({ type: "blob" })
      .then(function (blob) {
        const url = URL.createObjectURL(blob);
        const a   = document.createElement("a");
        a.href = url; a.download = "dwc-dp-package.zip";
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        URL.revokeObjectURL(url);
        dpStatus.textContent = selectedRequiredOnly
          ? "Downloaded bundle with datapackage.json and " + selectedTables.length + " CSV header file(s) using selected and required fields only."
          : "Downloaded bundle with datapackage.json and " + selectedTables.length + " CSV header file(s).";
      })
      .catch(function (err) { dpStatus.textContent = "Bundle download failed: " + String(err); });
  }

  function resetDatapackagePanel() {
    lastGeneratedDp = "";
    if (dpText)        { dpText.value = ""; }
    if (dpStatus)      { dpStatus.textContent = "Select at least one table to see a live preview."; }
    if (btnCopyDp)     { btnCopyDp.disabled = true; }
    if (btnDownloadDp) { btnDownloadDp.disabled = true; }
  }

  if (btnCopyDp)     { btnCopyDp.addEventListener("click", copyDatapackageToClipboard); }
  if (btnDownloadDp) { btnDownloadDp.addEventListener("click", downloadDatapackage); }

  // -----------------------------
  // Output: recommended mapping order
  // -----------------------------
  const orderPanel  = document.getElementById("orderPanel");
  const orderText   = document.getElementById("orderText");
  const orderStatus = document.getElementById("orderStatus");
  const btnCopyOrder = document.getElementById("btnCopyOrder");

  let lastGeneratedOrder = "";

  function generateMappingOrder() {
    const selected = getSelectedTables();
    if (selected.length === 0) {
      lastGeneratedOrder = ""; orderText.value = "";
      orderStatus.textContent = "Select at least one table to see a live preview.";
      btnCopyOrder.disabled = true; return;
    }

    const inDegree = {};
    const adj      = {};
    selected.forEach(function (t) { inDegree[t] = 0; adj[t] = []; });
    selected.forEach(function (t) {
      (dependsOnAnyForeignKey.get(t) || new Set()).forEach(function (dep) {
        if (selected.indexOf(dep) === -1) { return; }
        adj[dep].push(t); inDegree[t] += 1;
      });
    });

    function compareTables(a, b) {
      const ta = titleFor(a).toLowerCase(); const tb = titleFor(b).toLowerCase();
      if (ta < tb) { return -1; } if (ta > tb) { return 1; }
      return a.toLowerCase().localeCompare(b.toLowerCase());
    }

    const queue = []; const order = [];
    selected.forEach(function (t) { if (inDegree[t] === 0) { queue.push(t); } });
    queue.sort(compareTables);

    while (queue.length > 0) {
      const current = queue.shift();
      order.push(current);
      adj[current].forEach(function (neighbor) {
        inDegree[neighbor] -= 1;
        if (inDegree[neighbor] === 0) { queue.push(neighbor); queue.sort(compareTables); }
      });
    }

    if (order.length !== selected.length) {
      lastGeneratedOrder = ""; orderText.value = "";
      orderStatus.textContent = "Cycle detected in foreign-key dependencies among the selected tables. Cannot compute strict mapping order.";
      btnCopyOrder.disabled = true; return;
    }

    lastGeneratedOrder      = order.join("\n");
    orderText.value         = lastGeneratedOrder;
    orderStatus.textContent = "Generated mapping order for " + order.length + " table(s).";
    btnCopyOrder.disabled   = false;
  }

  function copyMappingOrder() {
    if (!lastGeneratedOrder) { return; }
    navigator.clipboard.writeText(lastGeneratedOrder)
      .then(function () { showEphemeralFeedback(btnCopyOrder, "Copied mapping order to clipboard."); orderStatus.textContent = "Copied mapping order to clipboard."; })
      .catch(function () { orderStatus.textContent = "Copy failed."; });
  }

  function resetMappingOrderPanel() {
    lastGeneratedOrder = "";
    if (orderText)    { orderText.value = ""; }
    if (orderStatus)  { orderStatus.textContent = "Select at least one table to see a live preview."; }
    if (btnCopyOrder) { btnCopyOrder.disabled = true; }
  }

  function refreshDerivedOutputs() { generateMappingOrder(); generateDatapackage(); }

  if (btnCopyOrder) { btnCopyOrder.addEventListener("click", copyMappingOrder); }

  // -----------------------------
  // Ephemeral feedback tooltip
  // -----------------------------
  let ephemeralFeedbackTimer = null;
  let ephemeralFeedbackNode  = null;

  function showEphemeralFeedback(anchorEl, message) {
    if (!anchorEl) { return; }
    if (ephemeralFeedbackTimer) { clearTimeout(ephemeralFeedbackTimer); ephemeralFeedbackTimer = null; }
    if (ephemeralFeedbackNode && ephemeralFeedbackNode.parentNode) {
      ephemeralFeedbackNode.parentNode.removeChild(ephemeralFeedbackNode);
      ephemeralFeedbackNode = null;
    }

    const rect      = anchorEl.getBoundingClientRect();
    const alignRight = anchorEl.textContent && anchorEl.textContent.trim() === "Enable";
    const pad       = 12;

    ephemeralFeedbackNode             = document.createElement("div");
    ephemeralFeedbackNode.className   = "ephemeral-feedback";
    ephemeralFeedbackNode.textContent = message;
    ephemeralFeedbackNode.style.visibility = "hidden";
    ephemeralFeedbackNode.style.left  = "0px";
    ephemeralFeedbackNode.style.top   = "0px";
    ephemeralFeedbackNode.style.transform = "none";
    document.body.appendChild(ephemeralFeedbackNode);

    const width  = ephemeralFeedbackNode.offsetWidth  || 220;
    const height = ephemeralFeedbackNode.offsetHeight || 30;
    let left     = alignRight ? rect.right - width : rect.left + (rect.width / 2) - (width / 2);

    if (left < pad)                             { left = pad; }
    if (left + width > window.innerWidth - pad) { left = window.innerWidth - pad - width; }
    let top = rect.top - height - 8;
    if (top < pad) { top = rect.bottom + 8; }

    ephemeralFeedbackNode.style.left       = left + "px";
    ephemeralFeedbackNode.style.top        = top  + "px";
    ephemeralFeedbackNode.style.visibility = "visible";

    ephemeralFeedbackTimer = setTimeout(function () {
      if (ephemeralFeedbackNode && ephemeralFeedbackNode.parentNode) {
        ephemeralFeedbackNode.parentNode.removeChild(ephemeralFeedbackNode);
      }
      ephemeralFeedbackNode = null; ephemeralFeedbackTimer = null;
    }, 1800);
  }

  // -----------------------------
  // Reset workspace
  // -----------------------------
  function resetWorkspace() {
    checked.forEach(function (_, k) { deselectTable(k); });
    expandedTables.clear();
    if (fieldQueryInput)                { fieldQueryInput.value = ""; }
    if (includeFieldMetadataCheckbox)   { includeFieldMetadataCheckbox.checked = false; }
    if (dpSelectedRequiredOnlyCheckbox) { dpSelectedRequiredOnlyCheckbox.checked = false; }
    resetMappingOrderPanel();
    resetDatapackagePanel();
    renderUI();
    renderFieldResults();
    updateDesignSummary();
    updateUrlFromState();

    const btnClear = document.getElementById("btnResetWorkspace");
    if (btnClear) { showEphemeralFeedback(btnClear, "All selected tables and fields have been deselected."); }
  }

  const btnResetWorkspace = document.getElementById("btnResetWorkspace");
  if (btnResetWorkspace) { btnResetWorkspace.addEventListener("click", resetWorkspace); }

  // -----------------------------
  // Field search
  // -----------------------------
  const fieldQueryInput              = document.getElementById("fieldQuery");
  const btnClearFieldQuery           = document.getElementById("btnClearFieldQuery");
  const includeFieldMetadataCheckbox = document.getElementById("includeFieldMetadata");
  const fieldResultsDiv              = document.getElementById("fieldResults");
  const fieldGuidanceDiv             = document.getElementById("fieldGuidance");
  const btnCopyLink                  = document.getElementById("btnCopyLink");

  let fieldSearchTimer = null;

  function terminalSegment(uri) {
    if (!uri) { return ""; }
    const s = String(uri); const i = s.lastIndexOf("/");
    return i === -1 ? s : s.slice(i + 1);
  }

  function buildFieldIndex() {
    fieldIndex  = [];
    fieldLookup = new Map();

    schemas.forEach(function (schemaObj, tableName) {
      const fields = schemaObj.fields || [];
      const tbl    = new Map();

      fields.forEach(function (f) {
        const name     = f.name || "";
        const isv      = (f["dcterms:isVersionOf"] || f.isVersionOf || "");
        const isvToken = terminalSegment(isv);
        tbl.set(name, f);
        fieldIndex.push({
          tableName, tableTitle: titleFor(tableName),
          fieldName: name, isVersionOf: isv, isVersionOfToken: isvToken,
          description: f.description || "", notes: f.notes || "", examples: f.examples || ""
        });
      });

      fieldLookup.set(tableName, tbl);
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text == null ? "" : String(text);
    return div.innerHTML;
  }

  function highlightToken(token, queryLower) {
    const t = token || ""; const idx = t.toLowerCase().indexOf(queryLower);
    if (idx === -1) { return escapeHtml(t); }
    return escapeHtml(t.slice(0, idx)) + '<span class="matchmark">' + escapeHtml(t.slice(idx, idx + queryLower.length)) + "</span>" + escapeHtml(t.slice(idx + queryLower.length));
  }

  function matchRank(token, queryLower) {
    const tl = (token || "").toLowerCase();
    if (tl === queryLower)             { return 0; }
    if (tl.startsWith(queryLower))     { return 1; }
    if (tl.indexOf(queryLower) !== -1) { return 2; }
    return 999;
  }

  function rankedMatch(text, queryLower, baseRank) {
    const r = matchRank(text, queryLower);
    return r === 999 ? 999 : baseRank + r;
  }

  function bestEntryRank(entry, queryLower, includeMetadata) {
    const ranks = [
      rankedMatch(entry.fieldName || "",        queryLower, 0),
      rankedMatch(entry.isVersionOfToken || "", queryLower, 3)
    ];
    if (includeMetadata) {
      ranks.push(rankedMatch(entry.description || "", queryLower, 6));
      ranks.push(rankedMatch(entry.notes || "",    queryLower, 9));
      ranks.push(rankedMatch(entry.examples || "",    queryLower, 12));
    }
    return Math.min(...ranks);
  }

  function textExcerpt(text, queryLower) {
    const raw = text || ""; if (!raw) { return ""; }
    const lower = raw.toLowerCase(); const idx = lower.indexOf(queryLower);
    if (idx === -1) { return raw.length <= 180 ? raw : raw.slice(0, 177) + "..."; }
    const start = Math.max(0, idx - 50); const end = Math.min(raw.length, idx + queryLower.length + 90);
    let excerpt = raw.slice(start, end);
    if (start > 0)        { excerpt = "..." + excerpt; }
    if (end < raw.length) { excerpt = excerpt + "..."; }
    return excerpt;
  }

  function setFieldGuidance(matchCount, message) {
    if (!fieldGuidanceDiv) { return; }
    fieldGuidanceDiv.textContent = String(matchCount) + " matches: " + message;
  }

  function showFieldInfo(tableName, fieldName) {
    const tbl       = fieldLookup.get(tableName);
    const fieldObj  = tbl ? tbl.get(fieldName) : null;
    const schemaObj = schemas.get(tableName);
    if (!fieldObj || !schemaObj) { return; }

    modalTitle.textContent = fieldName + " \u2014 " + titleFor(tableName) + " (" + tableName + ")";
    modalContent.innerHTML = "";

    function addKV(label, value) {
      if (value == null || value === "") { return; }
      modalContent.appendChild(createEl("div", { class: "kv" },
        createEl("span", { class: "k", text: label + ": " }),
        createEl("span", { text: String(value) })
      ));
    }

    addKV("Field",       fieldObj.name || fieldName);
    addKV("Title",       fieldObj.title || "");
    addKV("Description", fieldObj.description || "");
    addKV("Type",        fieldObj.type || "");
    if (fieldObj["dcterms:isVersionOf"] || fieldObj.isVersionOf) {
      addKV("isVersionOf", fieldObj["dcterms:isVersionOf"] || fieldObj.isVersionOf);
    }
    if (fieldObj.constraints) { addKV("Constraints", JSON.stringify(fieldObj.constraints)); }
    if (fieldObj.examples)    { addKV("Examples", fieldObj.examples); }
    if (fieldObj.notes)    { addKV("Usage notes", fieldObj.notes); }
    openModal();
  }

  function checkTableWithRequiredDependencies(tableName) {
    const all = new Set(transitiveDeps.get(tableName) || new Set());
    all.add(tableName);
    all.forEach(function (t) { selectTable(t); });
    renderUI();
  }

  function renderFieldResults() {
    if (!fieldResultsDiv) { return; }

    const q               = fieldQueryInput ? fieldQueryInput.value.trim() : "";
    const qLower          = q.toLowerCase();
    const includeMetadata = !!(includeFieldMetadataCheckbox && includeFieldMetadataCheckbox.checked);

    if (q.length < FIELD_MIN_CHARS) {
      setFieldGuidance(0, "Type at least " + FIELD_MIN_CHARS + " characters to search.");
      fieldResultsDiv.innerHTML = ""; return;
    }

    const matches = [];
    fieldIndex.forEach(function (entry) {
      const rank = bestEntryRank(entry, qLower, includeMetadata);
      if (rank === 999) { return; }
      const isVersionOfRank    = rankedMatch(entry.isVersionOfToken || "", qLower, 3);
      const matchedIsVersionOf = isVersionOfRank !== 999 && isVersionOfRank === rank;
      matches.push({
        rank, tableName: entry.tableName, tableTitle: entry.tableTitle,
        fieldName: entry.fieldName, isVersionOf: entry.isVersionOf,
        isVersionOfToken: entry.isVersionOfToken, isVersionOfMatch: matchedIsVersionOf,
        description: entry.description || "", notes: entry.notes || "", examples: entry.examples || ""
      });
    });

    matches.sort(function (a, b) {
      if (a.rank !== b.rank) { return a.rank - b.rank; }
      const at = (a.tableTitle || a.tableName || "").toLowerCase();
      const bt = (b.tableTitle || b.tableName || "").toLowerCase();
      if (at < bt) { return -1; } if (at > bt) { return 1; }
      const af = (a.fieldName || "").toLowerCase(); const bf = (b.fieldName || "").toLowerCase();
      if (af < bf) { return -1; } if (af > bf) { return 1; }
      return 0;
    });

    if (matches.length === 0) { setFieldGuidance(0, "No matches."); fieldResultsDiv.innerHTML = ""; return; }

    setFieldGuidance(matches.length, "Showing all results.");

    const container = document.createElement("div");

    matches.forEach(function (m) {
      const card     = document.createElement("div"); card.className = "field-result-card";
      const head     = document.createElement("div"); head.className = "field-result-head";
      const left     = document.createElement("div"); left.className = "field-result-left";
      const topline  = document.createElement("div"); topline.className = "field-result-topline";

      const tableLabel = document.createElement("span"); tableLabel.className = "title"; tableLabel.textContent = m.tableTitle;
      const fieldLabel = document.createElement("span"); fieldLabel.className = "mono";  fieldLabel.innerHTML  = highlightToken(m.fieldName, qLower);
      topline.appendChild(tableLabel); topline.appendChild(fieldLabel);

      if (m.isVersionOf && m.isVersionOfToken) {
        const badge = document.createElement("span"); badge.className = "badge";
        badge.innerHTML = m.isVersionOfMatch
          ? "isVersionOf " + highlightToken(m.isVersionOfToken, qLower)
          : "isVersionOf " + escapeHtml(m.isVersionOfToken);
        topline.appendChild(badge);
      }

      left.appendChild(topline);

      const metaWrap = document.createElement("div"); metaWrap.className = "field-result-meta";
      [["Definition", m.description], ["Usage notes", m.notes], ["Examples", m.examples]].forEach(function (pair) {
        const row   = document.createElement("div"); row.className = "field-result-meta-row";
        const label = document.createElement("span"); label.className = "field-result-meta-label"; label.textContent = pair[0] + ": ";
        const value = document.createElement("span"); value.innerHTML = highlightToken(textExcerpt(pair[1], qLower), qLower);
        row.appendChild(label); row.appendChild(value); metaWrap.appendChild(row);
      });
      left.appendChild(metaWrap);

      const right = document.createElement("div");
      right.style.display = "inline-flex"; right.style.gap = "8px"; right.style.alignItems = "center";

      const infoBtn = document.createElement("button");
      infoBtn.type = "button"; infoBtn.className = "info"; infoBtn.title = "Show field details"; infoBtn.textContent = "i";
      infoBtn.addEventListener("click", function () { showFieldInfo(m.tableName, m.fieldName); });

      const enableBtn = document.createElement("button");
      enableBtn.type = "button";

      if (isFieldSelected(m.tableName, m.fieldName)) {
        const isReqLocked = isRequiredField(m.tableName, m.fieldName) && !!checked.get(m.tableName);
        if (isReqLocked) {
          enableBtn.className   = "btn btn-enabled";
          enableBtn.textContent = "Required";
          enableBtn.disabled    = true;
        } else {
          enableBtn.className   = "btn btn-enabled";
          enableBtn.textContent = "Deselect";
          enableBtn.addEventListener("click", function (ev) {
            setFieldSelected(m.tableName, m.fieldName, false);
            updateDesignSummary();
            showEphemeralFeedback(ev.currentTarget, "Deselected " + m.fieldName + " in " + m.tableTitle + ".");
            renderFieldResults();
          });
        }
      } else {
        enableBtn.className   = "btn";
        enableBtn.textContent = "Select";
        enableBtn.addEventListener("click", function (ev) {
          setFieldSelected(m.tableName, m.fieldName, true);
          updateDesignSummary();
          showEphemeralFeedback(ev.currentTarget, "Selected " + m.fieldName + " in " + m.tableTitle + ".");
          checkTableWithRequiredDependencies(m.tableName);
          renderFieldResults();
        });
      }

      right.appendChild(infoBtn); right.appendChild(enableBtn);
      head.appendChild(left); head.appendChild(right);
      card.appendChild(head); container.appendChild(card);
    });

    fieldResultsDiv.innerHTML = "";
    const scrollWrap = document.createElement("div"); scrollWrap.className = "field-results-scroll";
    scrollWrap.appendChild(container); fieldResultsDiv.appendChild(scrollWrap);
  }

  function scheduleFieldSearch() {
    if (fieldSearchTimer) { clearTimeout(fieldSearchTimer); }
    fieldSearchTimer = setTimeout(renderFieldResults, 180);
  }

  if (fieldQueryInput)    { fieldQueryInput.addEventListener("input", scheduleFieldSearch); }
  if (btnClearFieldQuery) { btnClearFieldQuery.addEventListener("click", function () {
    if (fieldQueryInput) {
      fieldQueryInput.value = "";
      renderFieldResults();
      fieldQueryInput.focus();
    }
  }); }
  if (includeFieldMetadataCheckbox) { includeFieldMetadataCheckbox.addEventListener("change", renderFieldResults); }

  const btnFieldSearchInfo = document.getElementById("btnFieldSearchInfo");
  if (btnFieldSearchInfo) {
    btnFieldSearchInfo.addEventListener("click", function () {
      modalTitle.textContent = "About field search";
      modalContent.innerHTML = "";
      modalContent.appendChild(createEl("p", { text: "Type to search for field names. Check the box below to also include definitions, usage notes, and examples in your search. Results will allow you to select individual fields. Selecting a field will also select the table it is in. Use the '/' keyboard shortcut to begin a new search." }));
      openModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && activeTag !== "INPUT" && activeTag !== "TEXTAREA") {
      e.preventDefault();
      if (fieldQueryInput) {
        fieldQueryInput.value = "";
        renderFieldResults();
        fieldQueryInput.focus();
      }
    }
    if (e.key === "Escape" && fieldQueryInput === document.activeElement) {
      fieldQueryInput.value = ""; renderFieldResults();
    }
  });

  // -----------------------------
  // Deep link support
  // -----------------------------
  function bytesToBase64Url(bytes) {
    let binary = "";
    for (let i = 0; i < bytes.length; i += 1) { binary += String.fromCharCode(bytes[i]); }
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  function base64UrlToBytes(base64url) {
    let padded = base64url.replace(/-/g, "+").replace(/_/g, "/");
    while ((padded.length % 4) !== 0) { padded += "="; }
    const binary = atob(padded);
    const bytes  = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) { bytes[i] = binary.charCodeAt(i); }
    return bytes;
  }

  async function encodeStateParam(stateObj) {
    const bytes = new TextEncoder().encode(JSON.stringify(stateObj));
    if (typeof CompressionStream !== "undefined") {
      const compressed = new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"));
      const ab         = await new Response(compressed).arrayBuffer();
      return "gz." + bytesToBase64Url(new Uint8Array(ab));
    }
    return "js." + bytesToBase64Url(bytes);
  }

  async function decodeStateParam(stateParam) {
    if (!stateParam || typeof stateParam !== "string") { return null; }
    const prefix  = stateParam.slice(0, 3);
    const payload = stateParam.slice(3);

    if (prefix === "gz.") {
      if (typeof DecompressionStream === "undefined") { throw new Error("This browser cannot decode compressed shared links."); }
      const bytes  = base64UrlToBytes(payload);
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
      return JSON.parse(new TextDecoder().decode(new Uint8Array(await new Response(stream).arrayBuffer())));
    }
    if (prefix === "js.") {
      return JSON.parse(new TextDecoder().decode(base64UrlToBytes(payload)));
    }
    throw new Error("Unrecognized shared-link state format.");
  }

  async function parseSelectionStateFromUrl() {
    const params   = new URLSearchParams(window.location.search);
    const rawState = params.get(URL_STATE_PARAM);
    if (rawState) { return decodeStateParam(rawState); }
    const rawTables = params.get(URL_TABLES_PARAM);
    if (!rawTables) { return null; }
    const list = rawTables.split(",").map(function (s) { return s.trim(); }).filter(function (s) { return s.length > 0; });
    return list.length === 0 ? null : { tables: list, fields: {} };
  }

  function serializeCheckedTables() {
    const list = [];
    checked.forEach(function (isChecked, tableName) { if (isChecked) { list.push(tableName); } });
    list.sort(); return list;
  }

  function serializeExplicitSelectedFields() {
    const out = {};
    selectedFieldsByTable.forEach(function (fieldSet, tableName) {
      const list = Array.from(fieldSet || []); list.sort();
      if (list.length > 0) { out[tableName] = list; }
    });
    return out;
  }

  function updateUrlFromState() {
    const list   = serializeCheckedTables();
    const params = new URLSearchParams(window.location.search);
    params.delete(URL_STATE_PARAM);
    if (list.length === 0) { params.delete(URL_TABLES_PARAM); } else { params.set(URL_TABLES_PARAM, list.join(",")); }
    let url = window.location.pathname;
    if ([...params.keys()].length > 0) { url += "?" + params.toString(); }
    url += window.location.hash || "";
    window.history.replaceState({}, "", url);
  }

  function applySelectionStateFromUrl() {
    if (!initialSelectionStateFromUrl) { return; }

    // Restore packing factor if present
    const savedPacking = initialSelectionStateFromUrl.packingFactor;
    if (typeof savedPacking === "number" && savedPacking > 0) {
      currentPackingFactor = savedPacking;
      if (inputPackingFactor) { inputPackingFactor.value = String(savedPacking); }
    }

    let requestedTables  = Array.isArray(initialSelectionStateFromUrl.tables) ? initialSelectionStateFromUrl.tables.slice() : [];
    const requestedFields = initialSelectionStateFromUrl.fields || {};
    const unknownTables  = []; const unknownFields = []; const knownTables = [];
    const toCheck = new Set(); const addedPrereqs = new Set(); const lines = [];

    Object.keys(requestedFields).forEach(function (t) { if (requestedTables.indexOf(t) === -1) { requestedTables.push(t); } });
    requestedTables.forEach(function (t) { if (!schemas.has(t)) { unknownTables.push(t); } else { knownTables.push(t); } });

    try {
      knownTables.forEach(function (t) {
        (transitiveDeps.get(t) || new Set()).forEach(function (d) {
          toCheck.add(d); if (knownTables.indexOf(d) === -1) { addedPrereqs.add(d); }
        });
        toCheck.add(t);
      });
    } catch (e) {
      showLinkNotice(["Could not apply the selection from the link due to an unexpected dependency error.", "The selection was not applied. You can still select tables manually."]);
      initialSelectionStateFromUrl = null; return;
    }

    toCheck.forEach(function (t) { selectTable(t); });

    Object.keys(requestedFields).forEach(function (tableName) {
      if (!schemas.has(tableName)) { return; }
      const tbl = fieldLookup.get(tableName) || new Map();
      requestedFields[tableName].forEach(function (fieldName) {
        if (tbl.has(fieldName)) { setFieldSelected(tableName, fieldName, true); }
        else { unknownFields.push(tableName + "." + fieldName); }
      });
    });

    renderUI();

    if (unknownTables.length > 0)  { lines.push("Skipped tables not present in the current model: " + unknownTables.join(", ")); }
    if (unknownFields.length > 0)  { lines.push("Skipped fields not present in the current model: " + unknownFields.join(", ")); }
    if (addedPrereqs.size > 0)     { lines.push("Added required prerequisite tables: " + Array.from(addedPrereqs).sort().join(", ")); }
    if (lines.length > 0)          { showLinkNotice(lines); }

    initialSelectionStateFromUrl = null;
  }

  async function copyShareLink() {
    const encodedState = await encodeStateParam({
      tables: serializeCheckedTables(),
      fields: serializeExplicitSelectedFields(),
      packingFactor: currentPackingFactor
    });
    const params       = new URLSearchParams(window.location.search);
    params.delete(URL_TABLES_PARAM); params.set(URL_STATE_PARAM, encodedState);
    let url = window.location.pathname;
    if ([...params.keys()].length > 0) { url += "?" + params.toString(); }
    url += window.location.hash || "";
    navigator.clipboard.writeText(window.location.origin ? (window.location.origin + url) : url)
      .then(function () { if (btnCopyLink) { showEphemeralFeedback(btnCopyLink, "Copied link to clipboard."); } })
      .catch(function () {});
  }

  function showLinkNotice(lines) {
    const box  = document.getElementById("linkNotice");
    const text = document.getElementById("linkNoticeText");
    const btn  = document.getElementById("btnDismissLinkNotice");
    if (!box || !text) { return; }
    text.innerHTML = lines.map(function (s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }).join("<br>");
    box.style.display = "block";
    if (btn && !btn.__wired) {
      btn.__wired = true;
      btn.addEventListener("click", function () { box.style.display = "none"; });
    }
  }

  if (btnCopyLink) { btnCopyLink.addEventListener("click", copyShareLink); }

  // -----------------------------
  // Tab system
  // -----------------------------
  function mountSelectTables(hostId) {
    const host  = document.getElementById(hostId);
    const shell = document.getElementById("selectTablesShell");
    if (!host || !shell) { return; }
    host.appendChild(shell);
  }

  function activateTab(tabId) {
    document.querySelectorAll(".tabpanel").forEach(function (p) { p.classList.remove("active"); });
    document.querySelectorAll(".tabbtn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
    });

    if      (tabId === "fieldTab")  { mountSelectTables("fieldTab"); }
    else if (tabId === "graphTab")  { mountSelectTables("graphTab"); }
    else if (tabId === "outputTab") { mountSelectTables("outputTab"); }

    document.getElementById(tabId).classList.add("active");

    if (tabId === "graphTab") {
      requestAnimationFrame(function () { renderGraph(); relayoutGraph(); });
    }
  }

  function initTabs() {
    document.querySelectorAll(".tabbtn").forEach(function (btn) {
      btn.addEventListener("click", function () { activateTab(btn.getAttribute("data-tab")); });
    });

    const fieldFinder     = document.getElementById("fieldFinder");
    const graphPanelNode  = document.getElementById("graphPanel");
    const outputDualNode  = document.getElementById("outputDual");
    const selectTablesShell = document.getElementById("selectTablesShell");
    const parking         = document.getElementById("tabParking");

    if (fieldFinder)    { document.getElementById("fieldTab").appendChild(fieldFinder); }
    if (graphPanelNode) { document.getElementById("graphTab").appendChild(graphPanelNode); }
    if (outputDualNode) { document.getElementById("outputTab").appendChild(outputDualNode); }
    if (parking && selectTablesShell) { parking.appendChild(selectTablesShell); }

    activateTab("fieldTab");
  }

  // -----------------------------
  // Loader / derived model building
  // -----------------------------
  async function loadDesignerModel() {
    const data = window[DESIGNER_DATA_GLOBAL];

    if (!data || typeof data !== "object") {
      throw new Error(
        "Designer data was not loaded. Verify that data.js is present beside index.html."
      );
    }

    if (!data.dwcDpVersion) {
      throw new Error("Designer data is missing 'dwcDpVersion'.");
    }
    if (!data.profileIdentifier) {
      throw new Error("Designer data is missing 'profileIdentifier'.");
    }
    if (!data.profile || typeof data.profile !== "object") {
      throw new Error("Designer data is missing the DwC-DP profile.");
    }
    if (!data.schemas || typeof data.schemas !== "object") {
      throw new Error("Designer data is missing table schemas.");
    }

    dwcDpVersion = data.dwcDpVersion;
    dwcDpProfileId = data.profileIdentifier;

    if (data.profile.version !== dwcDpVersion) {
      throw new Error(
        "Designer data version (" + dwcDpVersion +
        ") does not match the embedded DwC-DP profile version (" +
        (data.profile.version || "missing") + ")."
      );
    }

    const headerVersion = document.getElementById("headerVersion");
    if (headerVersion) {
      headerVersion.textContent = "Version: " + dwcDpVersion;
    }

    const tableNames = (
      data.profile &&
      data.profile.$defs &&
      data.profile.$defs["dwc-dp-resource-names"] &&
      data.profile.$defs["dwc-dp-resource-names"].enum
    ) || [];

    if (!Array.isArray(tableNames) || tableNames.length === 0) {
      throw new Error("Could not find $defs.dwc-dp-resource-names.enum in embedded profile JSON.");
    }

    tableMeta.clear();
    schemas.clear();

    for (const tableName of tableNames) {
      const schemaObj = data.schemas[tableName];
      if (!schemaObj) {
        throw new Error("Designer data is missing table schema '" + tableName + "'.");
      }
      schemas.set(tableName, schemaObj);
      tableMeta.set(tableName, {
        name: schemaObj.name || tableName,
        title: schemaObj.title || schemaObj.name || tableName
      });
    }

    return { profile: data.profile, tableNames };
  }

  function buildDesignerDerivedModel() {
    fieldIndex  = []; fieldLookup = new Map();
    dependsOnRequired.clear(); dependsOnAnyForeignKey.clear();
    transitiveDeps.clear(); maxDepth.clear(); tableType.clear(); enabled.clear();

    const tableNames = Array.from(schemas.keys()).sort(function (a, b) { return a.localeCompare(b); });
    tableNames.forEach(function (name) { if (!checked.has(name)) { checked.set(name, false); } });

    buildDirectRequiredDependencies();
    buildAllForeignKeyDependencies();
    computeTransitiveDependencies();
    computeMaximumDepth();
    buildTableTypes();
    buildFieldIndex();

    modelLoaded = true;
    loadedModel = { tableNames };
    return loadedModel;
  }

  // -----------------------------
  // Boot
  // -----------------------------
  function main() {
    initTabs();
    renderLoading("Loading DwC-DP Designer data…");

    parseSelectionStateFromUrl()
      .then(function (parsedState) {
        initialSelectionStateFromUrl = parsedState;
        return loadDesignerModel();
      })
      .then(function () {
        buildDesignerDerivedModel();
        applySelectionStateFromUrl();
        renderFieldResults();
        renderUI();
        if (orderPanel) { orderPanel.style.display = "block"; }
        if (dpPanel)    { dpPanel.style.display    = "block"; }
        if (dpStatus)   { dpStatus.textContent     = "Select at least one table to see a live preview."; }
      })
      .catch(function (err) {
        const app     = $("#app");
        app.className = "panel";
        app.innerHTML = "";
        app.appendChild(createEl("div", { class: "error", text: String(err) }));
        app.appendChild(createEl("div", { class: "small", text: "If this fails, verify that data.js is present beside designer/index.html and was generated by process_dwcdp.py." }));
        if (loadErrors.length > 0) { app.appendChild(createEl("div", { class: "mono", text: loadErrors.join("\n") })); }
      });
  }

  main();
})();
