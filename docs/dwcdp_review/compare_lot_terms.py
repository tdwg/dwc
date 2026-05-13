#!/usr/bin/env python3
"""Compare two Darwin Core-style List of Terms markdown files.

The script parses the HTML term metadata tables in Section 4 of each file,
compares metadata values by term name and metadata element, and writes a
markdown report containing only changed values.

Usage:
    python compare_lot_terms.py --new index.md --old 2025-07-10.md
    python compare_lot_terms.py --new index.md --old 2025-07-10.md --out changes.md
"""

from __future__ import annotations

import argparse
import html
import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple

TermMap = Dict[str, Dict[str, str]]


TERM_HEADING_RE = re.compile(
    r"<th\b[^>]*>\s*(?:<a\b[^>]*>\s*</a>\s*)?Term Name\s+(.+?)\s*</th>",
    re.IGNORECASE | re.DOTALL,
)
ROW_RE = re.compile(r"<tr\b[^>]*>(.*?)</tr>", re.IGNORECASE | re.DOTALL)
CELL_RE = re.compile(r"<td\b[^>]*>(.*?)</td>", re.IGNORECASE | re.DOTALL)
TAG_RE = re.compile(r"<[^>]+>")
WHITESPACE_RE = re.compile(r"\s+")
EXCLUDED_METADATA_ELEMENTS = {
    "executive committee decision",
    "modified",
    "term version iri",
}

def html_cell_to_text(value: str) -> str:
    """Convert a simple HTML table cell to plain text for comparison/reporting."""
    # For generated List of Terms tables, link text duplicates href text. Keeping
    # the rendered text gives stable comparisons without embedding HTML in output.
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.IGNORECASE)
    value = TAG_RE.sub("", value)
    value = html.unescape(value)
    value = WHITESPACE_RE.sub(" ", value).strip()
    return value


def canonicalize(value: str) -> str:
    """Normalize insignificant whitespace before comparison."""
    return WHITESPACE_RE.sub(" ", value).strip()


def parse_terms(markdown_text: str) -> TermMap:
    """Parse term metadata tables from a List of Terms markdown document."""
    terms: TermMap = {}

    for table_match in re.finditer(r"<table\b.*?</table>", markdown_text, re.IGNORECASE | re.DOTALL):
        table_html = table_match.group(0)
        heading_match = TERM_HEADING_RE.search(table_html)
        if not heading_match:
            continue

        term_name = html_cell_to_text(heading_match.group(1))
        if not term_name:
            continue

        metadata: Dict[str, str] = {}
        for row_match in ROW_RE.finditer(table_html):
            cells = CELL_RE.findall(row_match.group(1))
            if len(cells) != 2:
                continue
            key = html_cell_to_text(cells[0])
            value = html_cell_to_text(cells[1])
            if key:
                metadata[key] = value

        terms[term_name] = metadata

    return terms


def markdown_escape(value: str) -> str:
    """Escape content enough to keep a markdown pipe table valid."""
    if value == "":
        return ""
    value = value.replace("\\", "\\\\")
    value = value.replace("|", "\\|")
    value = value.replace("\r\n", "<br>").replace("\n", "<br>")
    return value


def compare_terms(new_terms: TermMap, old_terms: TermMap) -> List[Tuple[str, str, str, str]]:
    """Return rows: term_name, metadata_element, new_value, old_value."""
    rows: List[Tuple[str, str, str, str]] = []

    all_term_names = sorted(set(new_terms) | set(old_terms), key=str.casefold)
    for term_name in all_term_names:
        if term_name not in old_terms:
            rows.append((term_name, "term_status", "added", ""))
            continue
        if term_name not in new_terms:
            rows.append((term_name, "term_status", "", "removed"))
            continue

        new_metadata = new_terms[term_name]
        old_metadata = old_terms[term_name]
        all_metadata_elements = sorted(
            set(new_metadata) | set(old_metadata),
            key=str.casefold
        )

        for element in all_metadata_elements:
            if canonicalize(element).casefold() in EXCLUDED_METADATA_ELEMENTS:
                continue

            new_value = new_metadata.get(element, "")
            old_value = old_metadata.get(element, "")

            if canonicalize(new_value) != canonicalize(old_value):
                rows.append((term_name, element, new_value, old_value))

    rows.sort(key=lambda r: (r[0].casefold(), r[1].casefold()))

    return rows


def write_report(rows: List[Tuple[str, str, str, str]], output_path: Path, new_path: Path, old_path: Path) -> None:
    lines = [
        "# Changed terms report",
        "",
        f"New file: `{new_path}`",
        f"Old file: `{old_path}`",
        "",
        f"Changed rows: {len(rows)}",
        "",
        "| term_name | metadata_element | new_value | old_value |",
        "| --- | --- | --- | --- |",
    ]

    for term_name, element, new_value, old_value in rows:
        lines.append(
            "| "
            + " | ".join(
                markdown_escape(x) for x in (term_name, element, new_value, old_value)
            )
            + " |"
        )

    output_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Compare two List of Terms markdown files and report changed term metadata."
    )
    parser.add_argument("--new", required=True, help="Path to the newer List of Terms markdown file.")
    parser.add_argument("--old", required=True, help="Path to the older List of Terms markdown file.")
    parser.add_argument(
        "--out",
        default="changed_terms.md",
        help="Path for the markdown report. Default: changed_terms.md",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    new_path = Path(args.new)
    old_path = Path(args.old)
    output_path = Path(args.out)

    if not new_path.is_file():
        print(f"ERROR: new file not found: {new_path}", file=sys.stderr)
        return 2
    if not old_path.is_file():
        print(f"ERROR: old file not found: {old_path}", file=sys.stderr)
        return 2

    new_terms = parse_terms(new_path.read_text(encoding="utf-8"))
    old_terms = parse_terms(old_path.read_text(encoding="utf-8"))

    if not new_terms:
        print(f"ERROR: no term metadata tables found in new file: {new_path}", file=sys.stderr)
        return 1
    if not old_terms:
        print(f"ERROR: no term metadata tables found in old file: {old_path}", file=sys.stderr)
        return 1

    rows = compare_terms(new_terms, old_terms)
    write_report(rows, output_path, new_path, old_path)

    print(f"Parsed {len(new_terms)} terms from new file.")
    print(f"Parsed {len(old_terms)} terms from old file.")
    print(f"Wrote {len(rows)} changed rows to {output_path}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
