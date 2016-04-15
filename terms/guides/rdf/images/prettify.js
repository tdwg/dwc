(function() {
/*
 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
window.PR_SHOULD_USE_CONTINUATION=!0;window.PR_TAB_WIDTH=8;window.PR_normalizedHtml=void 0;window.PR=void 0;window.prettyPrintOne=void 0;window.prettyPrint=void 0;window._pr_isIE6=function(){var z=navigator&&navigator.userAgent&&navigator.userAgent.match(/\bMSIE ([678])\./),z=z?+z[1]:!1;window._pr_isIE6=function(){return z};return z};
(function(){function z(a){return a.replace(G,"&amp;").replace(H,"&lt;").replace(I,"&gt;")}function D(a,b,m){switch(a.nodeType){case 1:var n=a.tagName.toLowerCase();b.push("<",n);var h=a.attributes,r=h.length;if(r){if(m){for(var w=[],f=r;0<=--f;)w[f]=h[f];w.sort(function(a,b){return a.name<b.name?-1:a.name===b.name?0:1});h=w}for(f=0;f<r;++f)w=h[f],w.specified&&b.push(" ",w.name.toLowerCase(),'="',w.value.replace(G,"&amp;").replace(H,"&lt;").replace(I,"&gt;").replace(O,"&quot;"),'"')}b.push(">");for(h=
a.firstChild;h;h=h.nextSibling)D(h,b,m);!a.firstChild&&/^(?:br|link|img)$/.test(n)||b.push("</",n,">");break;case 3:case 4:b.push(z(a.nodeValue))}}function J(a){function b(a){if("\\"!==a.charAt(0))return a.charCodeAt(0);switch(a.charAt(1)){case "b":return 8;case "t":return 9;case "n":return 10;case "v":return 11;case "f":return 12;case "r":return 13;case "u":case "x":return parseInt(a.substring(2),16)||a.charCodeAt(1);case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":return parseInt(a.substring(1),
8);default:return a.charCodeAt(1)}}function m(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if("\\"===a||"-"===a||"["===a||"]"===a)a="\\"+a;return a}function n(a){var l=a.substring(1,a.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));a=[];for(var c=[],f="^"===l[0],e=f?1:0,p=l.length;e<p;++e){var k=l[e];switch(k){case "\\B":case "\\b":case "\\D":case "\\d":case "\\S":case "\\s":case "\\W":case "\\w":a.push(k);
continue}var k=b(k),d;e+2<p&&"-"===l[e+1]?(d=b(l[e+2]),e+=2):d=k;c.push([k,d]);65>d||122<k||(65>d||90<k||c.push([Math.max(65,k)|32,Math.min(d,90)|32]),97>d||122<k||c.push([Math.max(97,k)&-33,Math.min(d,122)&-33]))}c.sort(function(a,c){return a[0]-c[0]||c[1]-a[1]});l=[];k=[NaN,NaN];for(e=0;e<c.length;++e)p=c[e],p[0]<=k[1]+1?k[1]=Math.max(k[1],p[1]):l.push(k=p);c=["["];f&&c.push("^");c.push.apply(c,a);for(e=0;e<l.length;++e)p=l[e],c.push(m(p[0])),p[1]>p[0]&&(p[1]+1>p[0]&&c.push("-"),c.push(m(p[1])));
c.push("]");return c.join("")}function h(a){for(var b=a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),c=b.length,d=[],e=0,f=0;e<c;++e){var k=b[e];"("===k?++f:"\\"===k.charAt(0)&&(k=+k.substring(1))&&k<=f&&(d[k]=-1)}for(e=1;e<d.length;++e)-1===d[e]&&(d[e]=++r);for(f=e=0;e<c;++e)k=b[e],"("===k?(++f,void 0===d[f]&&(b[e]="(?:")):"\\"===k.charAt(0)&&(k=+k.substring(1))&&
k<=f&&(b[e]="\\"+d[f]);for(f=e=0;e<c;++e)"^"===b[e]&&"^"!==b[e+1]&&(b[e]="");if(a.ignoreCase&&w)for(e=0;e<c;++e)k=b[e],a=k.charAt(0),2<=k.length&&"["===a?b[e]=n(k):"\\"!==a&&(b[e]=k.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return b.join("")}for(var r=0,w=!1,f=!1,u=0,d=a.length;u<d;++u){var x=a[u];if(x.ignoreCase)f=!0;else if(/[a-z]/i.test(x.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){w=!0;f=!1;break}}for(var t=[],u=0,d=a.length;u<
d;++u){x=a[u];if(x.global||x.multiline)throw Error(""+x);t.push("(?:"+h(x)+")")}return new RegExp(t.join("|"),f?"gi":"g")}function P(a){var b=0;return function(m){for(var n=null,h=0,r=0,w=m.length;r<w;++r){var f=m.charAt(r);switch(f){case "\t":n||(n=[]);n.push(m.substring(h,r));h=a-b%a;for(b+=h;0<=h;h-=16)n.push("                ".substring(0,h));h=r+1;break;case "\n":b=0;break;default:++b}}if(!n)return m;n.push(m.substring(h));return n.join("")}}function E(a,b,m,n){b&&(a={source:b,basePos:a},m(a),
n.push.apply(n,a.decorations))}function A(a,b){var m={},n;(function(){for(var h=a.concat(b),f=[],r={},d=0,x=h.length;d<x;++d){var t=h[d],v=t[3];if(v)for(var l=v.length;0<=--l;)m[v.charAt(l)]=t;t=t[1];v=""+t;r.hasOwnProperty(v)||(f.push(t),r[v]=null)}f.push(/[\0-\uffff]/);n=J(f)})();var h=b.length,r=function(a){for(var f=a.source,u=a.basePos,d=[u,"pln"],x=0,f=f.match(n)||[],t={},v=0,l=f.length;v<l;++v){var c=f[v],q=t[c],e=void 0,p;if("string"===typeof q)p=!1;else{var k=m[c.charAt(0)];if(k)e=c.match(k[1]),
q=k[0];else{for(p=0;p<h;++p)if(k=b[p],e=c.match(k[1])){q=k[0];break}e||(q="pln")}!(p=5<=q.length&&"lang-"===q.substring(0,5))||e&&"string"===typeof e[1]||(p=!1,q="src");p||(t[c]=q)}k=x;x+=c.length;if(p){p=e[1];var B=c.indexOf(p),g=B+p.length;e[2]&&(g=c.length-e[2].length,B=g-p.length);q=q.substring(5);E(u+k,c.substring(0,B),r,d);E(u+k+B,p,L(q,p),d);E(u+k+g,c.substring(g),r,d)}else d.push(u+k,q)}a.decorations=d};return r}function y(a){var b=[],m=[];a.tripleQuotedStrings?b.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?b.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&m.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var n=a.hashComments;n&&(a.cStyleComments?(1<n?b.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),m.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])):b.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(m.push(["com",/^\/\/[^\r\n]*/,null]),m.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));a.regexLiterals&&m.push(["lang-regex",new RegExp("^"+Q+"(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);a=a.keywords.replace(/^\s+|\s+$/g,"");a.length&&m.push(["kwd",new RegExp("^(?:"+a.replace(/\s+/g,"|")+
")\\b"),null]);b.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);m.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^@?[A-Z]+[a-z][A-Za-z_$@0-9]*/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pun",/^.[^\s\w\.$@\'\"\`\/\#]*/,null]);return A(b,m)}function R(a){function b(a){if(a>u){d&&d!==x&&(f.push("</span>"),d=null);!d&&x&&(d=x,f.push('<span class="',d,'">'));var b=z(l(m.substring(u,a))).replace(k?q:
c,"$1&#160;");k=p.test(b);f.push(b.replace(e,y));u=a}}var m=a.source,n=a.extractedTags,h=a.decorations,r=a.numberLines,w=a.sourceNode,f=[],u=0,d=null,x=null,t=0,v=0,l=P(window.PR_TAB_WIDTH),c=/([\r\n ]) /g,q=/(^| ) /gm,e=/\r\n?|\n/g,p=/[ \r\n]$/,k=!0,g=window._pr_isIE6(),w=g?w&&"PRE"===w.tagName?6===g?"&#160;\r\n":7===g?"&#160;<br />\r":8===g?"&#160;<br />":"&#160;\r":"&#160;<br />":"<br />",y;if(r){for(var K=[],g=0;10>g;++g)K[g]=w+'</li><li class="L'+g+'">';var A="number"===typeof r?r-1:0;f.push('<ol class="linenums"><li class="L',
A%10,'"');A&&f.push(' value="',A+1,'"');f.push(">");y=function(){var a=K[++A%10];return d?"</span>"+a+'<span class="'+d+'">':a}}else y=w;for(;;)if(w=t<n.length?v<h.length?n[t]<=h[v]:!0:!1)b(n[t]),d&&(f.push("</span>"),d=null),f.push(n[t+1]),t+=2;else if(v<h.length)b(h[v]),x=h[v+1],v+=2;else break;b(m.length);d&&f.push("</span>");r&&f.push("</li></ol>");a.prettyPrintedHtml=f.join("")}function g(a,b){for(var m=b.length;0<=--m;){var n=b[m];C.hasOwnProperty(n)?"console"in window&&console.warn("cannot override language handler %s",
n):C[n]=a}}function L(a,b){a&&C.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code");return C[a]}function M(a){var b=a.sourceCodeHtml,m=a.langExtension;a.prettyPrintedHtml=b;try{var n,h=b.match(S),b=[],r=0,g=[];if(h)for(var f=0,u=h.length;f<u;++f){var d=h[f];if(1<d.length&&"<"===d.charAt(0)){if(!T.test(d))if(U.test(d))b.push(d.substring(9,d.length-3)),r+=d.length-12;else if(V.test(d))b.push("\n"),++r;else if(0<=d.indexOf("nocode")&&d.replace(/\s(\w+)\s*=\s*(?:\"([^\"]*)\"|'([^\']*)'|(\S+))/g,
' $1="$2$3$4"').match(/[cC][lL][aA][sS][sS]=\"[^\"]*\bnocode\b/)){var x=d.match(N)[2],t=1,v;v=f+1;a:for(;v<u;++v){var l=h[v].match(N);if(l&&l[2]===x)if("/"===l[1]){if(0===--t)break a}else++t}v<u?(g.push(r,h.slice(f,v+1).join("")),f=v):g.push(r,d)}else g.push(r,d)}else{var c;var t=d,q=t.indexOf("&");if(0>q)c=t;else{for(--q;0<=(q=t.indexOf("&#",q+1));){var e=t.indexOf(";",q);if(0<=e){var p=t.substring(q+3,e),k=10;p&&"x"===p.charAt(0)&&(p=p.substring(1),k=16);var y=parseInt(p,k);isNaN(y)||(t=t.substring(0,
q)+String.fromCharCode(y)+t.substring(e+1))}}c=t.replace(W,"<").replace(X,">").replace(Y,"'").replace(Z,'"').replace(aa," ").replace(ba,"&")}b.push(c);r+=c.length}}n={source:b.join(""),tags:g};var A=n.source;a.source=A;a.basePos=0;a.extractedTags=n.tags;L(m,A)(a);R(a)}catch(z){"console"in window&&console.log(z&&z.stack?z.stack:z)}}function ca(a,b,m){a={sourceCodeHtml:a,langExtension:b,numberLines:m};M(a);return a.prettyPrintedHtml}function da(a){function b(){for(var m=window.PR_SHOULD_USE_CONTINUATION?
f.now()+250:Infinity;u<n.length&&f.now()<m;u++){var h=n[u];if(h.className&&0<=h.className.indexOf("prettyprint")){var g=h.className.match(/\blang-(\w+)\b/);g&&(g=g[1]);for(var l=!1,c=h.parentNode;c;c=c.parentNode)if(("pre"===c.tagName||"code"===c.tagName||"xmp"===c.tagName)&&c.className&&0<=c.className.indexOf("prettyprint")){l=!0;break}if(!l){c=h;null===F&&(l=document.createElement("PRE"),l.appendChild(document.createTextNode('<!DOCTYPE foo PUBLIC "foo bar">\n<foo />')),F=!/</.test(l.innerHTML));
if(F)if(l=c.innerHTML,"XMP"===c.tagName)l=z(l);else{if("PRE"!==c.tagName&&ea.test(l)){var q="";c.currentStyle?q=c.currentStyle.whiteSpace:window.getComputedStyle&&(q=window.getComputedStyle(c,null).whiteSpace);c=!q||"pre"===q}else c=!0;c||(l=l.replace(/(<br\s*\/?>)[\r\n]+/g,"$1").replace(/(?:[\r\n]+[ \t]*)+/g," "))}else{l=[];for(c=c.firstChild;c;c=c.nextSibling)D(c,l);l=l.join("")}l=l.replace(/(?:\r\n?|\n)$/,"");c=h.className.match(/\blinenums\b(?::(\d+))?/);d={sourceCodeHtml:l,langExtension:g,sourceNode:h,
numberLines:c?c[1]&&c[1].length?+c[1]:!0:!1};M(d);if(h=d.prettyPrintedHtml)if(g=d.sourceNode,"XMP"===g.tagName){l=document.createElement("PRE");for(c=0;c<g.attributes.length;++c)if(q=g.attributes[c],q.specified){var e=q.name.toLowerCase();"class"===e?l.className=q.value:l.setAttribute(q.name,q.value)}l.innerHTML=h;g.parentNode.replaceChild(l,g)}else g.innerHTML=h}}}u<n.length?setTimeout(b,250):a&&a()}for(var m=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],
n=[],h=0;h<m.length;++h)for(var g=0,w=m[h].length;g<w;++g)n.push(m[h][g]);var m=null,f=Date;f.now||(f={now:function(){return(new Date).getTime()}});var u=0,d;b()}var Q=function(){for(var a="! != !== # % %= & && &&= &= ( * *= += , -= -> / /= : :: ; < << <<= <= = == === > >= >> >>= >>> >>>= ? @ [ ^ ^= ^^ ^^= { | |= || ||= ~ break case continue delete do else finally instanceof return throw try typeof".split(" "),b="(?:^^|[+-]",g=0;g<a.length;++g)b+="|"+a[g].replace(/([^=<>:&a-z])/g,"\\$1");return b+=
")\\s*"}(),G=/&/g,H=/</g,I=/>/g,O=/\"/g,W=/&lt;/g,X=/&gt;/g,Y=/&apos;/g,Z=/&quot;/g,ba=/&amp;/g,aa=/&nbsp;/g,ea=/[\r\n]/g,F=null,S=RegExp("[^<]+|\x3c!--[\\s\\S]*?--\x3e|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>|</?[a-zA-Z](?:[^>\"']|'[^']*'|\"[^\"]*\")*>|<","g"),T=/^<\!--/,U=/^<!\[CDATA\[/,V=/^<br\b/i,N=/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/,fa=y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END break continue do else for if return while case done elif esac eval fi function in local set then until ",
hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),C={};g(fa,["default-code"]);g(A([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));
g(A([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),
["in.tag"]);g(A([],[["atv",/^[\s\S]+/]]),["uq.val"]);g(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof alignof align_union asm axiom bool concept concept_map const_cast constexpr decltype dynamic_cast explicit export friend inline late_check mutable namespace nullptr reinterpret_cast static_assert static_cast template typeid typename using virtual wchar_t where ",
hashComments:!0,cStyleComments:!0}),"c cc cpp cxx cyc m".split(" "));g(y({keywords:"null true false"}),["json"]);g(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient as base by checked decimal delegate descending dynamic event fixed foreach from group implicit in interface internal into is lock object out override orderby params partial readonly ref sbyte sealed stackalloc string select uint ulong unchecked unsafe ushort var ",
hashComments:!0,cStyleComments:!0,verbatimStrings:!0}),["cs"]);g(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof abstract boolean byte extends final finally implements import instanceof null native package strictfp super synchronized throws transient ",
cStyleComments:!0}),["java"]);g(y({keywords:"break continue do else for if return while case done elif esac eval fi function in local set then until ",hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);g(y({keywords:"break continue do else for if return while and as assert class def del elif except exec finally from global import in is lambda nonlocal not or pass print raise try with yield False True None ",hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]);g(y({keywords:"caller delete die do dump elsif eval exit foreach for goto if import last local my next no our print package redo require sub undef unless until use wantarray while BEGIN END ",
hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);g(y({keywords:"break continue do else for if return while alias and begin case class def defined elsif end ensure false in module next nil not or redo rescue retry self super then true undef unless until when yield BEGIN END ",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);g(y({keywords:"break continue do else for if return while auto case char const default double enum extern float goto int long register short signed sizeof static struct switch typedef union unsigned void volatile catch class delete false import new operator private protected public this throw true try typeof debugger eval export function get null set undefined var with Infinity NaN ",
cStyleComments:!0,regexLiterals:!0}),["js"]);g(y({keywords:"all and by catch class else extends false finally for if in is isnt loop new no not null of off on or return super then true try unless until when while yes ",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);g(A([],[["str",/^[\s\S]+/]]),["regex"]);window.PR_normalizedHtml=D;window.prettyPrintOne=ca;window.prettyPrint=da;window.PR={combinePrefixPatterns:J,createSimpleLexer:A,registerLangHandler:g,
sourceDecorator:y,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();/*
 Copyright (C) 2009 Onno Hommes.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_COMMENT,/^#[^\r\n]*/,null,"#"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:ADS|AD|AUG|BZF|BZMF|CAE|CAF|CA|CCS|COM|CS|DAS|DCA|DCOM|DCS|DDOUBL|DIM|DOUBLE|DTCB|DTCF|DV|DXCH|EDRUPT|EXTEND|INCR|INDEX|NDX|INHINT|LXCH|MASK|MSK|MP|MSU|NOOP|OVSK|QXCH|RAND|READ|RELINT|RESUME|RETURN|ROR|RXOR|SQUARE|SU|TCR|TCAA|OVSK|TCF|TC|TS|WAND|WOR|WRITE|XCH|XLQ|XXALQ|ZL|ZQ|ADD|ADZ|SUB|SUZ|MPY|MPR|MPZ|DVP|COM|ABS|CLA|CLZ|LDQ|STO|STQ|ALS|LLS|LRS|TRA|TSQ|TMI|TOV|AXT|TIX|DLY|INP|OUT)\s/,
null],[PR.PR_TYPE,/^(?:-?GENADR|=MINUS|2BCADR|VN|BOF|MM|-?2CADR|-?[1-6]DNADR|ADRES|BBCON|[SE]?BANK\=?|BLOCK|BNKSUM|E?CADR|COUNT\*?|2?DEC\*?|-?DNCHAN|-?DNPTR|EQUALS|ERASE|MEMORY|2?OCT|REMADR|SETLOC|SUBRO|ORG|BSS|BES|SYN|EQU|DEFINE|END)\s/,null],[PR.PR_LITERAL,/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[PR.PR_PLAIN,/^-*(?:[!-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0()\"\\\';]+/]]),["apollo","agc","aea"]);/*
 Copyright (C) 2011 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^[\(\{\[]+/,null,"([{"],["clo",/^[\)\}\]]+/,null,")]}"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/,
null],[PR.PR_TYPE,/^:[0-9a-zA-Z\-]+/]]),["clj"]);/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[ \t\r\n\f]+/,null," \t\r\n\f"]],[[PR.PR_STRING,/^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/,null],[PR.PR_STRING,/^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/,null],["lang-css-str",/^url\(([^\)\"\']*)\)/i],[PR.PR_KEYWORD,/^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i,null],["lang-css-kw",/^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i],[PR.PR_COMMENT,/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],
[PR.PR_COMMENT,/^(?:\x3c!--|--\x3e)/],[PR.PR_LITERAL,/^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i],[PR.PR_LITERAL,/^#(?:[0-9a-f]{3}){1,2}/i],[PR.PR_PLAIN,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i],[PR.PR_PUNCTUATION,/^[^\s\w\'\"]+/]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_KEYWORD,/^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[[PR.PR_STRING,/^[^\)\"\']+/]]),["css-str"]);/*
 Copyright (C) 2010 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_PLAIN,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],[PR.PR_PLAIN,/^(?:[^\/\"\']|\/(?![\/\*]))+/i]]),["go"]);/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\x0B\x0C\r ]+/,null,"\t\n\x0B\f\r "],[PR.PR_STRING,/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],[PR.PR_STRING,/^\'(?:[^\'\\\n\x0C\r]|\\[^&])\'?/,null,"'"],[PR.PR_LITERAL,/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[[PR.PR_COMMENT,/^(?:(?:--+(?:[^\r\n\x0C]*)?)|(?:\{-(?:[^-]|-+[^-\}])*-\}))/],[PR.PR_KEYWORD,/^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\']|$)/,
null],[PR.PR_PLAIN,/^(?:[A-Z][\w\']*\.)*[a-zA-Z][\w\']*/],[PR.PR_PUNCTUATION,/^[^\t\n\x0B\x0C\r a-zA-Z0-9\'\"]+/]]),["hs"]);/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^\(+/,null,"("],["clo",/^\)+/,null,")"],[PR.PR_COMMENT,/^;[^\r\n]*/,null,";"],[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[[PR.PR_KEYWORD,/^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,
null],[PR.PR_LITERAL,/^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],[PR.PR_LITERAL,/^\'(?:-*(?:\w|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?)?/],[PR.PR_PLAIN,/^-*(?:[a-z_]|\\[\x21-\x7e])(?:[\w-]*|\\[\x21-\x7e])[=!?]?/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0()\"\\\';]+/]]),["cl","el","lisp","scm"]);/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])*(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^--(?:\[(=*)\[[\s\S]*?(?:\]\1\]|$)|[^\r\n]*)/],[PR.PR_STRING,/^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],[PR.PR_KEYWORD,/^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],
[PR.PR_PLAIN,/^[a-z_]\w*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]]),["lua"]);/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_COMMENT,/^#(?:if[\t\n\r \xA0]+(?:[a-z_$][\w\']*|``[^\r\n\t`]*(?:``|$))|else|endif|light)/i,null,"#"],[PR.PR_STRING,/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])(?:\'|$))/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:\/\/[^\r\n]*|\(\*[\s\S]*?\*\))/],[PR.PR_KEYWORD,/^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/],
[PR.PR_LITERAL,/^[+\-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^(?:[a-z_][\w']*[!?#]?|``[^\r\n\t`]*(?:``|$))/i],[PR.PR_PUNCTUATION,/^[^\t\n\r \xA0\"\'\w]+/]]),["fs","ml"]);/*
 Copyright (C) 2006 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.sourceDecorator({keywords:"bool bytes default double enum extend extensions false fixed32 fixed64 float group import int32 int64 max message option optional package repeated required returns rpc service sfixed32 sfixed64 sint32 sint64 string syntax to true uint32 uint64",cStyleComments:!0}),["proto"]);/*
 Copyright (C) 2010 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:"(?:(?:""(?:""?(?!")|[^\\"]|\\.)*"{0,3})|(?:[^"\r\n\\]|\\.)*"?))/,null,'"'],[PR.PR_LITERAL,/^`(?:[^\r\n\\`]|\\.)*`?/,null,"`"],[PR.PR_PUNCTUATION,/^[!#%&()*+,\-:;<=>?@\[\\\]^{|}~]+/,null,"!#%&()*+,-:;<=>?@[\\]^{|}~"]],[[PR.PR_STRING,/^'(?:[^\r\n\\']|\\(?:'|[^\r\n']+))'/],[PR.PR_LITERAL,/^'[a-zA-Z_$][\w$]*(?!['$\w])/],[PR.PR_KEYWORD,/^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\b/],
[PR.PR_LITERAL,/^(?:true|false|null|this)\b/],[PR.PR_LITERAL,/^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\.[0-9]+)?(?:E[+\-]?[0-9]+)?F?|L?))|\\.[0-9]+(?:E[+\-]?[0-9]+)?F?)/i],[PR.PR_TYPE,/^[$_]*[A-Z][_$A-Z0-9]*[a-z][\w$]*/],[PR.PR_PLAIN,/^[$a-zA-Z_][\w$]*/],[PR.PR_COMMENT,/^\/(?:\/.*|\*(?:\/|\**[^*/])*(?:\*+\/?)?)/],[PR.PR_PUNCTUATION,/^(?:\.+|\/)/]]),["scala"]);/*
 Copyright (C) 2008 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],[PR.PR_STRING,/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[[PR.PR_COMMENT,/^(?:--[^\r\n]*|\/\*[\s\S]*?(?:\*\/|$))/],[PR.PR_KEYWORD,/^(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|NATIONAL|NOCHECK|NONCLUSTERED|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PERCENT|PLAN|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNION|UNIQUE|UPDATE|UPDATETEXT|USE|USER|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WRITETEXT)(?=[^\w-]|$)/i,
null],[PR.PR_LITERAL,/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],[PR.PR_PLAIN,/^[a-z_][\w-]*/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["sql"]);/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0\u2028\u2029]+/,null,"\t\n\r \u00a0\u2028\u2029"],[PR.PR_STRING,/^(?:[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})(?:[\"\u201C\u201D]c|$)|[\"\u201C\u201D](?:[^\"\u201C\u201D]|[\"\u201C\u201D]{2})*(?:[\"\u201C\u201D]|$))/i,null,'"\u201c\u201d'],[PR.PR_COMMENT,/^[\'\u2018\u2019][^\r\n\u2028\u2029]*/,null,"'\u2018\u2019"]],[[PR.PR_KEYWORD,/^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\b/i,
null],[PR.PR_COMMENT,/^REM[^\r\n\u2028\u2029]*/i],[PR.PR_LITERAL,/^(?:True\b|False\b|Nothing\b|\d+(?:E[+\-]?\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\d*\.\d+(?:E[+\-]?\d+)?[FRD]?|#\s+(?:\d+[\-\/]\d+[\-\/]\d+(?:\s+\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)?|\d+:\d+(?::\d+)?(\s*(?:AM|PM))?)\s+#)/i],[PR.PR_PLAIN,/^(?:(?:[a-z]|_\w)\w*|\[(?:[a-z]|_\w)\w*\])/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \"\'\[\]\xA0\u2018\u2019\u201C\u201D\u2028\u2029]+/],[PR.PR_PUNCTUATION,/^(?:\[|\])/]]),["vb","vbs"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"]],[[PR.PR_STRING,/^(?:[BOX]?"(?:[^\"]|"")*"|'.')/i],[PR.PR_COMMENT,/^--[^\r\n]*/],[PR.PR_KEYWORD,/^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\w-]|$)/i,
null],[PR.PR_TYPE,/^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\w-]|$)/i,null],[PR.PR_TYPE,/^\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\w-]|$)/i,null],[PR.PR_LITERAL,/^\d+(?:_\d+)*(?:#[\w\\.]+#(?:[+\-]?\d+(?:_\d+)*)?|(?:\.\d+(?:_\d+)*)?(?:E[+\-]?\d+(?:_\d+)*)?)/i],
[PR.PR_PLAIN,/^(?:[a-z]\w*|\\[^\\]*\\)/i],[PR.PR_PUNCTUATION,/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0\-\"\']*/]]),["vhdl","vhd"]);/*
 Copyright (C) 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PLAIN,/^[\t \xA0a-gi-z0-9]+/,null,"\t \u00a0abcdefgijklmnopqrstuvwxyz0123456789"],[PR.PR_PUNCTUATION,/^[=*~\^\[\]]+/,null,"=*~^[]"]],[["lang-wiki.meta",/(?:^^|\r\n?|\n)(#[a-z]+)\b/],[PR.PR_LITERAL,/^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\b/],["lang-",/^\{\{\{([\s\S]+?)\}\}\}/],["lang-",/^`([^\r\n`]+)`/],[PR.PR_STRING,/^https?:\/\/[^\/?#\s]*(?:\/[^?#\s]*)?(?:\?[^#\s]*)?(?:#\S*)?/i],[PR.PR_PLAIN,/^(?:\r\n|[\s\S])[^#=*~^A-Zh\{`\[\r\n]*/]]),["wiki"]);
PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_KEYWORD,/^#[a-z]+/i,null,"#"]],[]),["wiki.meta"]);PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_PUNCTUATION,/^[:|>?]+/,null,":|>?"],[PR.PR_DECLARATION,/^%(?:YAML|TAG)[^#\r\n]+/,null,"%"],[PR.PR_TYPE,/^[&]\S+/,null,"&"],[PR.PR_TYPE,/^!\S*/,null,"!"],[PR.PR_STRING,/^"(?:[^\\"]|\\.)*(?:"|$)/,null,'"'],[PR.PR_STRING,/^'(?:[^']|'')*(?:'|$)/,null,"'"],[PR.PR_COMMENT,/^#[^\r\n]*/,null,"#"],[PR.PR_PLAIN,/^\s+/,null," \t\r\n"]],[[PR.PR_DECLARATION,/^(?:---|\.\.\.)(?:[\r\n]|$)/],[PR.PR_PUNCTUATION,/^-/],[PR.PR_KEYWORD,/^\w+:[ \r\n]/],[PR.PR_PLAIN,/^\w+/]]),
["yaml","yml"]);
})();
