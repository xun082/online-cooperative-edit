"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-73460f5e"],{

/***/ 95155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ registerLanguage; }
/* harmony export */ });
/* unused harmony export loadLanguage */
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29210);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


// src/basic-languages/_.contribution.ts
var languageDefinitions = {};
var lazyLanguageLoaders = {};
var LazyLanguageLoader = class {
  static getOrCreate(languageId) {
    if (!lazyLanguageLoaders[languageId]) {
      lazyLanguageLoaders[languageId] = new LazyLanguageLoader(languageId);
    }
    return lazyLanguageLoaders[languageId];
  }
  _languageId;
  _loadingTriggered;
  _lazyLoadPromise;
  _lazyLoadPromiseResolve;
  _lazyLoadPromiseReject;
  constructor(languageId) {
    this._languageId = languageId;
    this._loadingTriggered = false;
    this._lazyLoadPromise = new Promise((resolve, reject) => {
      this._lazyLoadPromiseResolve = resolve;
      this._lazyLoadPromiseReject = reject;
    });
  }
  load() {
    if (!this._loadingTriggered) {
      this._loadingTriggered = true;
      languageDefinitions[this._languageId].loader().then((mod) => this._lazyLoadPromiseResolve(mod), (err) => this._lazyLoadPromiseReject(err));
    }
    return this._lazyLoadPromise;
  }
};
async function loadLanguage(languageId) {
  await LazyLanguageLoader.getOrCreate(languageId).load();
  const model = monaco_editor_core_exports.editor.createModel("", languageId);
  model.dispose();
}
function registerLanguage(def) {
  const languageId = def.id;
  languageDefinitions[languageId] = def;
  monaco_editor_core_exports.languages.register(def);
  const lazyLanguageLoader = LazyLanguageLoader.getOrCreate(languageId);
  monaco_editor_core_exports.languages.registerTokensProviderFactory(languageId, {
    create: async () => {
      const mod = await lazyLanguageLoader.load();
      return mod.language;
    }
  });
  monaco_editor_core_exports.languages.onLanguageEncountered(languageId, async () => {
    const mod = await lazyLanguageLoader.load();
    monaco_editor_core_exports.languages.setLanguageConfiguration(languageId, mod.conf);
  });
}



/***/ }),

/***/ 63809:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/abap/abap.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "abap",
  extensions: [".abap"],
  aliases: ["abap", "ABAP"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-b7b2b1d6"), __webpack_require__.e("vendors-b40a25ea"), __webpack_require__.e("vendors-ccd6c5d7"), __webpack_require__.e("vendors-9738eacb"), __webpack_require__.e("vendors-5a62b1df"), __webpack_require__.e("vendors-e61bdb27"), __webpack_require__.e("vendors-ba75db03"), __webpack_require__.e("vendors-4ced94fb"), __webpack_require__.e("vendors-a5ed5821"), __webpack_require__.e("vendors-9c7ffab4"), __webpack_require__.e("vendors-95877811"), __webpack_require__.e("vendors-1549583d"), __webpack_require__.e("vendors-da9fd9dc"), __webpack_require__.e("vendors-5d32fd03"), __webpack_require__.e("vendors-a85cb6ae"), __webpack_require__.e("vendors-fc509239"), __webpack_require__.e("vendors-73460f5e"), __webpack_require__.e("vendors-b6c13333"), __webpack_require__.e("vendors-ef3a5c7f"), __webpack_require__.e("vendors-cd700261"), __webpack_require__.e("vendors-e79dc056"), __webpack_require__.e("vendors-3e0f38bf"), __webpack_require__.e("vendors-d99f4572"), __webpack_require__.e("vendors-368790d8"), __webpack_require__.e("vendors-ae7d5aa0"), __webpack_require__.e("vendors-ec59e91d"), __webpack_require__.e("vendors-1bfb811a"), __webpack_require__.e("vendors-6db446cf"), __webpack_require__.e("vendors-cb7193af"), __webpack_require__.e("vendors-715a3b8f"), __webpack_require__.e("vendors-06fdea35"), __webpack_require__.e("vendors-7001ec42"), __webpack_require__.e("vendors-fe97e044"), __webpack_require__.e("vendors-b57f1964"), __webpack_require__.e("vendors-3b5ea4b6"), __webpack_require__.e("vendors-2447ffdc"), __webpack_require__.e("vendors-9b105835"), __webpack_require__.e("vendors-f0f55b6e"), __webpack_require__.e("vendors-f315c23d"), __webpack_require__.e("vendors-a0125ed2"), __webpack_require__.e("vendors-448d6272"), __webpack_require__.e("vendors-47d52b41"), __webpack_require__.e("vendors-f721481f"), __webpack_require__.e("vendors-e3950c1c"), __webpack_require__.e("vendors-895354f2"), __webpack_require__.e("vendors-3ae6908a"), __webpack_require__.e("vendors-70a5a7f4"), __webpack_require__.e("vendors-0cabaaf9"), __webpack_require__.e("vendors-30e3dbd1"), __webpack_require__.e("vendors-b2a563c8"), __webpack_require__.e("vendors-8b033358"), __webpack_require__.e("vendors-acb218f4"), __webpack_require__.e("vendors-47179a4d"), __webpack_require__.e("vendors-430670c2"), __webpack_require__.e("vendors-038bd9aa"), __webpack_require__.e("vendors-1e527f35"), __webpack_require__.e("vendors-ad38c252"), __webpack_require__.e("vendors-03916b97"), __webpack_require__.e("vendors-075f49fe"), __webpack_require__.e("vendors-de9c6e90"), __webpack_require__.e("vendors-b21f9708"), __webpack_require__.e("vendors-dc654834"), __webpack_require__.e("vendors-cd3dd8d1"), __webpack_require__.e("vendors-300f7c40"), __webpack_require__.e("vendors-a6884c26"), __webpack_require__.e("vendors-f7c8b42e"), __webpack_require__.e("vendors-26f07415"), __webpack_require__.e("vendors-98e77c49"), __webpack_require__.e("vendors-3742ad55"), __webpack_require__.e("vendors-93db0f2c"), __webpack_require__.e("vendors-381b041e"), __webpack_require__.e("vendors-df9cc3c4"), __webpack_require__.e("vendors-b681ebd8"), __webpack_require__.e("vendors-69e4b8b2"), __webpack_require__.e("vendors-87bf3211"), __webpack_require__.e("vendors-eaba0428"), __webpack_require__.e("vendors-1a5e034c"), __webpack_require__.e("vendors-d32b9835"), __webpack_require__.e("vendors-32f17a4e"), __webpack_require__.e("vendors-e2a95dbb"), __webpack_require__.e("vendors-e32a9e17"), __webpack_require__.e("vendors-daa0f32f"), __webpack_require__.e("vendors-427fae6d"), __webpack_require__.e("vendors-de94d2f0"), __webpack_require__.e("vendors-0b0d4d0d"), __webpack_require__.e("vendors-36c80399"), __webpack_require__.e("vendors-4470bc07"), __webpack_require__.e("vendors-304852f1"), __webpack_require__.e("vendors-226cce73"), __webpack_require__.e("vendors-4c0e5143"), __webpack_require__.e("vendors-e7710145"), __webpack_require__.e("vendors-4e404c3e"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a")]).then(__webpack_require__.bind(__webpack_require__, 5319));
    }
  }
});


/***/ }),

/***/ 5319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/abap/abap.ts
var conf = {
  comments: {
    lineComment: "*"
  },
  brackets: [
    ["[", "]"],
    ["(", ")"]
  ]
};
var language = {
  defaultToken: "invalid",
  ignoreCase: true,
  tokenPostfix: ".abap",
  keywords: [
    "abap-source",
    "abbreviated",
    "abstract",
    "accept",
    "accepting",
    "according",
    "activation",
    "actual",
    "add",
    "add-corresponding",
    "adjacent",
    "after",
    "alias",
    "aliases",
    "align",
    "all",
    "allocate",
    "alpha",
    "analysis",
    "analyzer",
    "and",
    "append",
    "appendage",
    "appending",
    "application",
    "archive",
    "area",
    "arithmetic",
    "as",
    "ascending",
    "aspect",
    "assert",
    "assign",
    "assigned",
    "assigning",
    "association",
    "asynchronous",
    "at",
    "attributes",
    "authority",
    "authority-check",
    "avg",
    "back",
    "background",
    "backup",
    "backward",
    "badi",
    "base",
    "before",
    "begin",
    "between",
    "big",
    "binary",
    "bintohex",
    "bit",
    "black",
    "blank",
    "blanks",
    "blob",
    "block",
    "blocks",
    "blue",
    "bound",
    "boundaries",
    "bounds",
    "boxed",
    "break-point",
    "buffer",
    "by",
    "bypassing",
    "byte",
    "byte-order",
    "call",
    "calling",
    "case",
    "cast",
    "casting",
    "catch",
    "center",
    "centered",
    "chain",
    "chain-input",
    "chain-request",
    "change",
    "changing",
    "channels",
    "character",
    "char-to-hex",
    "check",
    "checkbox",
    "ci_",
    "circular",
    "class",
    "class-coding",
    "class-data",
    "class-events",
    "class-methods",
    "class-pool",
    "cleanup",
    "clear",
    "client",
    "clob",
    "clock",
    "close",
    "coalesce",
    "code",
    "coding",
    "col_background",
    "col_group",
    "col_heading",
    "col_key",
    "col_negative",
    "col_normal",
    "col_positive",
    "col_total",
    "collect",
    "color",
    "column",
    "columns",
    "comment",
    "comments",
    "commit",
    "common",
    "communication",
    "comparing",
    "component",
    "components",
    "compression",
    "compute",
    "concat",
    "concat_with_space",
    "concatenate",
    "cond",
    "condense",
    "condition",
    "connect",
    "connection",
    "constants",
    "context",
    "contexts",
    "continue",
    "control",
    "controls",
    "conv",
    "conversion",
    "convert",
    "copies",
    "copy",
    "corresponding",
    "country",
    "cover",
    "cpi",
    "create",
    "creating",
    "critical",
    "currency",
    "currency_conversion",
    "current",
    "cursor",
    "cursor-selection",
    "customer",
    "customer-function",
    "dangerous",
    "data",
    "database",
    "datainfo",
    "dataset",
    "date",
    "dats_add_days",
    "dats_add_months",
    "dats_days_between",
    "dats_is_valid",
    "daylight",
    "dd/mm/yy",
    "dd/mm/yyyy",
    "ddmmyy",
    "deallocate",
    "decimal_shift",
    "decimals",
    "declarations",
    "deep",
    "default",
    "deferred",
    "define",
    "defining",
    "definition",
    "delete",
    "deleting",
    "demand",
    "department",
    "descending",
    "describe",
    "destination",
    "detail",
    "dialog",
    "directory",
    "disconnect",
    "display",
    "display-mode",
    "distinct",
    "divide",
    "divide-corresponding",
    "division",
    "do",
    "dummy",
    "duplicate",
    "duplicates",
    "duration",
    "during",
    "dynamic",
    "dynpro",
    "edit",
    "editor-call",
    "else",
    "elseif",
    "empty",
    "enabled",
    "enabling",
    "encoding",
    "end",
    "endat",
    "endcase",
    "endcatch",
    "endchain",
    "endclass",
    "enddo",
    "endenhancement",
    "end-enhancement-section",
    "endexec",
    "endform",
    "endfunction",
    "endian",
    "endif",
    "ending",
    "endinterface",
    "end-lines",
    "endloop",
    "endmethod",
    "endmodule",
    "end-of-definition",
    "end-of-editing",
    "end-of-file",
    "end-of-page",
    "end-of-selection",
    "endon",
    "endprovide",
    "endselect",
    "end-test-injection",
    "end-test-seam",
    "endtry",
    "endwhile",
    "endwith",
    "engineering",
    "enhancement",
    "enhancement-point",
    "enhancements",
    "enhancement-section",
    "entries",
    "entry",
    "enum",
    "environment",
    "equiv",
    "errormessage",
    "errors",
    "escaping",
    "event",
    "events",
    "exact",
    "except",
    "exception",
    "exceptions",
    "exception-table",
    "exclude",
    "excluding",
    "exec",
    "execute",
    "exists",
    "exit",
    "exit-command",
    "expand",
    "expanding",
    "expiration",
    "explicit",
    "exponent",
    "export",
    "exporting",
    "extend",
    "extended",
    "extension",
    "extract",
    "fail",
    "fetch",
    "field",
    "field-groups",
    "fields",
    "field-symbol",
    "field-symbols",
    "file",
    "filter",
    "filters",
    "filter-table",
    "final",
    "find",
    "first",
    "first-line",
    "fixed-point",
    "fkeq",
    "fkge",
    "flush",
    "font",
    "for",
    "form",
    "format",
    "forward",
    "found",
    "frame",
    "frames",
    "free",
    "friends",
    "from",
    "function",
    "functionality",
    "function-pool",
    "further",
    "gaps",
    "generate",
    "get",
    "giving",
    "gkeq",
    "gkge",
    "global",
    "grant",
    "green",
    "group",
    "groups",
    "handle",
    "handler",
    "harmless",
    "hashed",
    "having",
    "hdb",
    "header",
    "headers",
    "heading",
    "head-lines",
    "help-id",
    "help-request",
    "hextobin",
    "hide",
    "high",
    "hint",
    "hold",
    "hotspot",
    "icon",
    "id",
    "identification",
    "identifier",
    "ids",
    "if",
    "ignore",
    "ignoring",
    "immediately",
    "implementation",
    "implementations",
    "implemented",
    "implicit",
    "import",
    "importing",
    "in",
    "inactive",
    "incl",
    "include",
    "includes",
    "including",
    "increment",
    "index",
    "index-line",
    "infotypes",
    "inheriting",
    "init",
    "initial",
    "initialization",
    "inner",
    "inout",
    "input",
    "insert",
    "instance",
    "instances",
    "instr",
    "intensified",
    "interface",
    "interface-pool",
    "interfaces",
    "internal",
    "intervals",
    "into",
    "inverse",
    "inverted-date",
    "is",
    "iso",
    "job",
    "join",
    "keep",
    "keeping",
    "kernel",
    "key",
    "keys",
    "keywords",
    "kind",
    "language",
    "last",
    "late",
    "layout",
    "leading",
    "leave",
    "left",
    "left-justified",
    "leftplus",
    "leftspace",
    "legacy",
    "length",
    "let",
    "level",
    "levels",
    "like",
    "line",
    "lines",
    "line-count",
    "linefeed",
    "line-selection",
    "line-size",
    "list",
    "listbox",
    "list-processing",
    "little",
    "llang",
    "load",
    "load-of-program",
    "lob",
    "local",
    "locale",
    "locator",
    "logfile",
    "logical",
    "log-point",
    "long",
    "loop",
    "low",
    "lower",
    "lpad",
    "lpi",
    "ltrim",
    "mail",
    "main",
    "major-id",
    "mapping",
    "margin",
    "mark",
    "mask",
    "match",
    "matchcode",
    "max",
    "maximum",
    "medium",
    "members",
    "memory",
    "mesh",
    "message",
    "message-id",
    "messages",
    "messaging",
    "method",
    "methods",
    "min",
    "minimum",
    "minor-id",
    "mm/dd/yy",
    "mm/dd/yyyy",
    "mmddyy",
    "mode",
    "modif",
    "modifier",
    "modify",
    "module",
    "move",
    "move-corresponding",
    "multiply",
    "multiply-corresponding",
    "name",
    "nametab",
    "native",
    "nested",
    "nesting",
    "new",
    "new-line",
    "new-page",
    "new-section",
    "next",
    "no",
    "no-display",
    "no-extension",
    "no-gap",
    "no-gaps",
    "no-grouping",
    "no-heading",
    "no-scrolling",
    "no-sign",
    "no-title",
    "no-topofpage",
    "no-zero",
    "node",
    "nodes",
    "non-unicode",
    "non-unique",
    "not",
    "null",
    "number",
    "object",
    "objects",
    "obligatory",
    "occurrence",
    "occurrences",
    "occurs",
    "of",
    "off",
    "offset",
    "ole",
    "on",
    "only",
    "open",
    "option",
    "optional",
    "options",
    "or",
    "order",
    "other",
    "others",
    "out",
    "outer",
    "output",
    "output-length",
    "overflow",
    "overlay",
    "pack",
    "package",
    "pad",
    "padding",
    "page",
    "pages",
    "parameter",
    "parameters",
    "parameter-table",
    "part",
    "partially",
    "pattern",
    "percentage",
    "perform",
    "performing",
    "person",
    "pf1",
    "pf10",
    "pf11",
    "pf12",
    "pf13",
    "pf14",
    "pf15",
    "pf2",
    "pf3",
    "pf4",
    "pf5",
    "pf6",
    "pf7",
    "pf8",
    "pf9",
    "pf-status",
    "pink",
    "places",
    "pool",
    "pos_high",
    "pos_low",
    "position",
    "pragmas",
    "precompiled",
    "preferred",
    "preserving",
    "primary",
    "print",
    "print-control",
    "priority",
    "private",
    "procedure",
    "process",
    "program",
    "property",
    "protected",
    "provide",
    "public",
    "push",
    "pushbutton",
    "put",
    "queue-only",
    "quickinfo",
    "radiobutton",
    "raise",
    "raising",
    "range",
    "ranges",
    "read",
    "reader",
    "read-only",
    "receive",
    "received",
    "receiver",
    "receiving",
    "red",
    "redefinition",
    "reduce",
    "reduced",
    "ref",
    "reference",
    "refresh",
    "regex",
    "reject",
    "remote",
    "renaming",
    "replace",
    "replacement",
    "replacing",
    "report",
    "request",
    "requested",
    "reserve",
    "reset",
    "resolution",
    "respecting",
    "responsible",
    "result",
    "results",
    "resumable",
    "resume",
    "retry",
    "return",
    "returncode",
    "returning",
    "returns",
    "right",
    "right-justified",
    "rightplus",
    "rightspace",
    "risk",
    "rmc_communication_failure",
    "rmc_invalid_status",
    "rmc_system_failure",
    "role",
    "rollback",
    "rows",
    "rpad",
    "rtrim",
    "run",
    "sap",
    "sap-spool",
    "saving",
    "scale_preserving",
    "scale_preserving_scientific",
    "scan",
    "scientific",
    "scientific_with_leading_zero",
    "scroll",
    "scroll-boundary",
    "scrolling",
    "search",
    "secondary",
    "seconds",
    "section",
    "select",
    "selection",
    "selections",
    "selection-screen",
    "selection-set",
    "selection-sets",
    "selection-table",
    "select-options",
    "send",
    "separate",
    "separated",
    "set",
    "shared",
    "shift",
    "short",
    "shortdump-id",
    "sign_as_postfix",
    "single",
    "size",
    "skip",
    "skipping",
    "smart",
    "some",
    "sort",
    "sortable",
    "sorted",
    "source",
    "specified",
    "split",
    "spool",
    "spots",
    "sql",
    "sqlscript",
    "stable",
    "stamp",
    "standard",
    "starting",
    "start-of-editing",
    "start-of-selection",
    "state",
    "statement",
    "statements",
    "static",
    "statics",
    "statusinfo",
    "step-loop",
    "stop",
    "structure",
    "structures",
    "style",
    "subkey",
    "submatches",
    "submit",
    "subroutine",
    "subscreen",
    "subtract",
    "subtract-corresponding",
    "suffix",
    "sum",
    "summary",
    "summing",
    "supplied",
    "supply",
    "suppress",
    "switch",
    "switchstates",
    "symbol",
    "syncpoints",
    "syntax",
    "syntax-check",
    "syntax-trace",
    "system-call",
    "system-exceptions",
    "system-exit",
    "tab",
    "tabbed",
    "table",
    "tables",
    "tableview",
    "tabstrip",
    "target",
    "task",
    "tasks",
    "test",
    "testing",
    "test-injection",
    "test-seam",
    "text",
    "textpool",
    "then",
    "throw",
    "time",
    "times",
    "timestamp",
    "timezone",
    "tims_is_valid",
    "title",
    "titlebar",
    "title-lines",
    "to",
    "tokenization",
    "tokens",
    "top-lines",
    "top-of-page",
    "trace-file",
    "trace-table",
    "trailing",
    "transaction",
    "transfer",
    "transformation",
    "translate",
    "transporting",
    "trmac",
    "truncate",
    "truncation",
    "try",
    "tstmp_add_seconds",
    "tstmp_current_utctimestamp",
    "tstmp_is_valid",
    "tstmp_seconds_between",
    "type",
    "type-pool",
    "type-pools",
    "types",
    "uline",
    "unassign",
    "under",
    "unicode",
    "union",
    "unique",
    "unit_conversion",
    "unix",
    "unpack",
    "until",
    "unwind",
    "up",
    "update",
    "upper",
    "user",
    "user-command",
    "using",
    "utf-8",
    "valid",
    "value",
    "value-request",
    "values",
    "vary",
    "varying",
    "verification-message",
    "version",
    "via",
    "view",
    "visible",
    "wait",
    "warning",
    "when",
    "whenever",
    "where",
    "while",
    "width",
    "window",
    "windows",
    "with",
    "with-heading",
    "without",
    "with-title",
    "word",
    "work",
    "write",
    "writer",
    "xml",
    "xsd",
    "yellow",
    "yes",
    "yymmdd",
    "zero",
    "zone",
    "abap_system_timezone",
    "abap_user_timezone",
    "access",
    "action",
    "adabas",
    "adjust_numbers",
    "allow_precision_loss",
    "allowed",
    "amdp",
    "applicationuser",
    "as_geo_json",
    "as400",
    "associations",
    "balance",
    "behavior",
    "breakup",
    "bulk",
    "cds",
    "cds_client",
    "check_before_save",
    "child",
    "clients",
    "corr",
    "corr_spearman",
    "cross",
    "cycles",
    "datn_add_days",
    "datn_add_months",
    "datn_days_between",
    "dats_from_datn",
    "dats_tims_to_tstmp",
    "dats_to_datn",
    "db2",
    "db6",
    "ddl",
    "dense_rank",
    "depth",
    "deterministic",
    "discarding",
    "entities",
    "entity",
    "error",
    "failed",
    "finalize",
    "first_value",
    "fltp_to_dec",
    "following",
    "fractional",
    "full",
    "graph",
    "grouping",
    "hierarchy",
    "hierarchy_ancestors",
    "hierarchy_ancestors_aggregate",
    "hierarchy_descendants",
    "hierarchy_descendants_aggregate",
    "hierarchy_siblings",
    "incremental",
    "indicators",
    "lag",
    "last_value",
    "lead",
    "leaves",
    "like_regexpr",
    "link",
    "locale_sap",
    "lock",
    "locks",
    "many",
    "mapped",
    "matched",
    "measures",
    "median",
    "mssqlnt",
    "multiple",
    "nodetype",
    "ntile",
    "nulls",
    "occurrences_regexpr",
    "one",
    "operations",
    "oracle",
    "orphans",
    "over",
    "parent",
    "parents",
    "partition",
    "pcre",
    "period",
    "pfcg_mapping",
    "preceding",
    "privileged",
    "product",
    "projection",
    "rank",
    "redirected",
    "replace_regexpr",
    "reported",
    "response",
    "responses",
    "root",
    "row",
    "row_number",
    "sap_system_date",
    "save",
    "schema",
    "session",
    "sets",
    "shortdump",
    "siblings",
    "spantree",
    "start",
    "stddev",
    "string_agg",
    "subtotal",
    "sybase",
    "tims_from_timn",
    "tims_to_timn",
    "to_blob",
    "to_clob",
    "total",
    "trace-entry",
    "tstmp_to_dats",
    "tstmp_to_dst",
    "tstmp_to_tims",
    "tstmpl_from_utcl",
    "tstmpl_to_utcl",
    "unbounded",
    "utcl_add_seconds",
    "utcl_current",
    "utcl_seconds_between",
    "uuid",
    "var",
    "verbatim"
  ],
  builtinFunctions: [
    "abs",
    "acos",
    "asin",
    "atan",
    "bit-set",
    "boolc",
    "boolx",
    "ceil",
    "char_off",
    "charlen",
    "cmax",
    "cmin",
    "concat_lines_of",
    "contains",
    "contains_any_not_of",
    "contains_any_of",
    "cos",
    "cosh",
    "count",
    "count_any_not_of",
    "count_any_of",
    "dbmaxlen",
    "distance",
    "escape",
    "exp",
    "find_any_not_of",
    "find_any_of",
    "find_end",
    "floor",
    "frac",
    "from_mixed",
    "ipow",
    "line_exists",
    "line_index",
    "log",
    "log10",
    "matches",
    "nmax",
    "nmin",
    "numofchar",
    "repeat",
    "rescale",
    "reverse",
    "round",
    "segment",
    "shift_left",
    "shift_right",
    "sign",
    "sin",
    "sinh",
    "sqrt",
    "strlen",
    "substring",
    "substring_after",
    "substring_before",
    "substring_from",
    "substring_to",
    "tan",
    "tanh",
    "to_lower",
    "to_mixed",
    "to_upper",
    "trunc",
    "utclong_add",
    "utclong_current",
    "utclong_diff",
    "xsdbool",
    "xstrlen"
  ],
  typeKeywords: [
    "b",
    "c",
    "d",
    "decfloat16",
    "decfloat34",
    "f",
    "i",
    "int8",
    "n",
    "p",
    "s",
    "string",
    "t",
    "utclong",
    "x",
    "xstring",
    "any",
    "clike",
    "csequence",
    "decfloat",
    "numeric",
    "simple",
    "xsequence",
    "accp",
    "char",
    "clnt",
    "cuky",
    "curr",
    "datn",
    "dats",
    "d16d",
    "d16n",
    "d16r",
    "d34d",
    "d34n",
    "d34r",
    "dec",
    "df16_dec",
    "df16_raw",
    "df34_dec",
    "df34_raw",
    "fltp",
    "geom_ewkb",
    "int1",
    "int2",
    "int4",
    "lang",
    "lchr",
    "lraw",
    "numc",
    "quan",
    "raw",
    "rawstring",
    "sstring",
    "timn",
    "tims",
    "unit",
    "utcl",
    "df16_scl",
    "df34_scl",
    "prec",
    "varc",
    "abap_bool",
    "abap_false",
    "abap_true",
    "abap_undefined",
    "me",
    "screen",
    "space",
    "super",
    "sy",
    "syst",
    "table_line",
    "*sys*"
  ],
  builtinMethods: ["class_constructor", "constructor"],
  derivedTypes: [
    "%CID",
    "%CID_REF",
    "%CONTROL",
    "%DATA",
    "%ELEMENT",
    "%FAIL",
    "%KEY",
    "%MSG",
    "%PARAM",
    "%PID",
    "%PID_ASSOC",
    "%PID_PARENT",
    "%_HINTS"
  ],
  cdsLanguage: [
    "@AbapAnnotation",
    "@AbapCatalog",
    "@AccessControl",
    "@API",
    "@ClientDependent",
    "@ClientHandling",
    "@CompatibilityContract",
    "@DataAging",
    "@EndUserText",
    "@Environment",
    "@LanguageDependency",
    "@MappingRole",
    "@Metadata",
    "@MetadataExtension",
    "@ObjectModel",
    "@Scope",
    "@Semantics",
    "$EXTENSION",
    "$SELF"
  ],
  selectors: ["->", "->*", "=>", "~", "~*"],
  operators: [
    " +",
    " -",
    "/",
    "*",
    "**",
    "div",
    "mod",
    "=",
    "#",
    "@",
    "+=",
    "-=",
    "*=",
    "/=",
    "**=",
    "&&=",
    "?=",
    "&",
    "&&",
    "bit-and",
    "bit-not",
    "bit-or",
    "bit-xor",
    "m",
    "o",
    "z",
    "<",
    " >",
    "<=",
    ">=",
    "<>",
    "><",
    "=<",
    "=>",
    "bt",
    "byte-ca",
    "byte-cn",
    "byte-co",
    "byte-cs",
    "byte-na",
    "byte-ns",
    "ca",
    "cn",
    "co",
    "cp",
    "cs",
    "eq",
    "ge",
    "gt",
    "le",
    "lt",
    "na",
    "nb",
    "ne",
    "np",
    "ns",
    "*/",
    "*:",
    "--",
    "/*",
    "//"
  ],
  symbols: /[=><!~?&+\-*\/\^%#@]+/,
  tokenizer: {
    root: [
      [
        /[a-z_\/$%@]([\w\/$%]|-(?!>))*/,
        {
          cases: {
            "@typeKeywords": "type",
            "@keywords": "keyword",
            "@cdsLanguage": "annotation",
            "@derivedTypes": "type",
            "@builtinFunctions": "type",
            "@builtinMethods": "type",
            "@operators": "key",
            "@default": "identifier"
          }
        }
      ],
      [/<[\w]+>/, "identifier"],
      [/##[\w|_]+/, "comment"],
      { include: "@whitespace" },
      [/[:,.]/, "delimiter"],
      [/[{}()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@selectors": "tag",
            "@operators": "key",
            "@default": ""
          }
        }
      ],
      [/'/, { token: "string", bracket: "@open", next: "@stringquote" }],
      [/`/, { token: "string", bracket: "@open", next: "@stringping" }],
      [/\|/, { token: "string", bracket: "@open", next: "@stringtemplate" }],
      [/\d+/, "number"]
    ],
    stringtemplate: [
      [/[^\\\|]+/, "string"],
      [/\\\|/, "string"],
      [/\|/, { token: "string", bracket: "@close", next: "@pop" }]
    ],
    stringping: [
      [/[^\\`]+/, "string"],
      [/`/, { token: "string", bracket: "@close", next: "@pop" }]
    ],
    stringquote: [
      [/[^\\']+/, "string"],
      [/'/, { token: "string", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/^\*.*$/, "comment"],
      [/\".*$/, "comment"]
    ]
  }
};



/***/ }),

/***/ 74387:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/apex/apex.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "apex",
  extensions: [".cls"],
  aliases: ["Apex", "apex"],
  mimetypes: ["text/x-apex-source", "text/x-apex"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-b7b2b1d6"), __webpack_require__.e("vendors-b40a25ea"), __webpack_require__.e("vendors-ccd6c5d7"), __webpack_require__.e("vendors-9738eacb"), __webpack_require__.e("vendors-5a62b1df"), __webpack_require__.e("vendors-e61bdb27"), __webpack_require__.e("vendors-ba75db03"), __webpack_require__.e("vendors-4ced94fb"), __webpack_require__.e("vendors-a5ed5821"), __webpack_require__.e("vendors-9c7ffab4"), __webpack_require__.e("vendors-95877811"), __webpack_require__.e("vendors-1549583d"), __webpack_require__.e("vendors-da9fd9dc"), __webpack_require__.e("vendors-5d32fd03"), __webpack_require__.e("vendors-a85cb6ae"), __webpack_require__.e("vendors-fc509239"), __webpack_require__.e("vendors-73460f5e"), __webpack_require__.e("vendors-b6c13333"), __webpack_require__.e("vendors-ef3a5c7f"), __webpack_require__.e("vendors-cd700261"), __webpack_require__.e("vendors-e79dc056"), __webpack_require__.e("vendors-3e0f38bf"), __webpack_require__.e("vendors-d99f4572"), __webpack_require__.e("vendors-368790d8"), __webpack_require__.e("vendors-ae7d5aa0"), __webpack_require__.e("vendors-ec59e91d"), __webpack_require__.e("vendors-1bfb811a"), __webpack_require__.e("vendors-6db446cf"), __webpack_require__.e("vendors-cb7193af"), __webpack_require__.e("vendors-715a3b8f"), __webpack_require__.e("vendors-06fdea35"), __webpack_require__.e("vendors-7001ec42"), __webpack_require__.e("vendors-fe97e044"), __webpack_require__.e("vendors-b57f1964"), __webpack_require__.e("vendors-3b5ea4b6"), __webpack_require__.e("vendors-2447ffdc"), __webpack_require__.e("vendors-9b105835"), __webpack_require__.e("vendors-f0f55b6e"), __webpack_require__.e("vendors-f315c23d"), __webpack_require__.e("vendors-a0125ed2"), __webpack_require__.e("vendors-448d6272"), __webpack_require__.e("vendors-47d52b41"), __webpack_require__.e("vendors-f721481f"), __webpack_require__.e("vendors-e3950c1c"), __webpack_require__.e("vendors-895354f2"), __webpack_require__.e("vendors-3ae6908a"), __webpack_require__.e("vendors-70a5a7f4"), __webpack_require__.e("vendors-0cabaaf9"), __webpack_require__.e("vendors-30e3dbd1"), __webpack_require__.e("vendors-b2a563c8"), __webpack_require__.e("vendors-8b033358"), __webpack_require__.e("vendors-acb218f4"), __webpack_require__.e("vendors-47179a4d"), __webpack_require__.e("vendors-430670c2"), __webpack_require__.e("vendors-038bd9aa"), __webpack_require__.e("vendors-1e527f35"), __webpack_require__.e("vendors-ad38c252"), __webpack_require__.e("vendors-03916b97"), __webpack_require__.e("vendors-075f49fe"), __webpack_require__.e("vendors-de9c6e90"), __webpack_require__.e("vendors-b21f9708"), __webpack_require__.e("vendors-dc654834"), __webpack_require__.e("vendors-cd3dd8d1"), __webpack_require__.e("vendors-300f7c40"), __webpack_require__.e("vendors-a6884c26"), __webpack_require__.e("vendors-f7c8b42e"), __webpack_require__.e("vendors-26f07415"), __webpack_require__.e("vendors-98e77c49"), __webpack_require__.e("vendors-3742ad55"), __webpack_require__.e("vendors-93db0f2c"), __webpack_require__.e("vendors-381b041e"), __webpack_require__.e("vendors-df9cc3c4"), __webpack_require__.e("vendors-b681ebd8"), __webpack_require__.e("vendors-69e4b8b2"), __webpack_require__.e("vendors-87bf3211"), __webpack_require__.e("vendors-eaba0428"), __webpack_require__.e("vendors-1a5e034c"), __webpack_require__.e("vendors-d32b9835"), __webpack_require__.e("vendors-32f17a4e"), __webpack_require__.e("vendors-e2a95dbb"), __webpack_require__.e("vendors-e32a9e17"), __webpack_require__.e("vendors-daa0f32f"), __webpack_require__.e("vendors-427fae6d"), __webpack_require__.e("vendors-de94d2f0"), __webpack_require__.e("vendors-0b0d4d0d"), __webpack_require__.e("vendors-36c80399"), __webpack_require__.e("vendors-4470bc07"), __webpack_require__.e("vendors-304852f1"), __webpack_require__.e("vendors-226cce73"), __webpack_require__.e("vendors-4c0e5143"), __webpack_require__.e("vendors-e7710145"), __webpack_require__.e("vendors-4e404c3e"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a")]).then(__webpack_require__.bind(__webpack_require__, 83346));
    }
  }
});


/***/ }),

/***/ 83346:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/apex/apex.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "<", close: ">" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
      end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
    }
  }
};
var keywords = [
  "abstract",
  "activate",
  "and",
  "any",
  "array",
  "as",
  "asc",
  "assert",
  "autonomous",
  "begin",
  "bigdecimal",
  "blob",
  "boolean",
  "break",
  "bulk",
  "by",
  "case",
  "cast",
  "catch",
  "char",
  "class",
  "collect",
  "commit",
  "const",
  "continue",
  "convertcurrency",
  "decimal",
  "default",
  "delete",
  "desc",
  "do",
  "double",
  "else",
  "end",
  "enum",
  "exception",
  "exit",
  "export",
  "extends",
  "false",
  "final",
  "finally",
  "float",
  "for",
  "from",
  "future",
  "get",
  "global",
  "goto",
  "group",
  "having",
  "hint",
  "if",
  "implements",
  "import",
  "in",
  "inner",
  "insert",
  "instanceof",
  "int",
  "interface",
  "into",
  "join",
  "last_90_days",
  "last_month",
  "last_n_days",
  "last_week",
  "like",
  "limit",
  "list",
  "long",
  "loop",
  "map",
  "merge",
  "native",
  "new",
  "next_90_days",
  "next_month",
  "next_n_days",
  "next_week",
  "not",
  "null",
  "nulls",
  "number",
  "object",
  "of",
  "on",
  "or",
  "outer",
  "override",
  "package",
  "parallel",
  "pragma",
  "private",
  "protected",
  "public",
  "retrieve",
  "return",
  "returning",
  "rollback",
  "savepoint",
  "search",
  "select",
  "set",
  "short",
  "sort",
  "stat",
  "static",
  "strictfp",
  "super",
  "switch",
  "synchronized",
  "system",
  "testmethod",
  "then",
  "this",
  "this_month",
  "this_week",
  "throw",
  "throws",
  "today",
  "tolabel",
  "tomorrow",
  "transaction",
  "transient",
  "trigger",
  "true",
  "try",
  "type",
  "undelete",
  "update",
  "upsert",
  "using",
  "virtual",
  "void",
  "volatile",
  "webservice",
  "when",
  "where",
  "while",
  "yesterday"
];
var uppercaseFirstLetter = (lowercase) => lowercase.charAt(0).toUpperCase() + lowercase.substr(1);
var keywordsWithCaseVariations = [];
keywords.forEach((lowercase) => {
  keywordsWithCaseVariations.push(lowercase);
  keywordsWithCaseVariations.push(lowercase.toUpperCase());
  keywordsWithCaseVariations.push(uppercaseFirstLetter(lowercase));
});
var language = {
  defaultToken: "",
  tokenPostfix: ".apex",
  keywords: keywordsWithCaseVariations,
  operators: [
    "=",
    ">",
    "<",
    "!",
    "~",
    "?",
    ":",
    "==",
    "<=",
    ">=",
    "!=",
    "&&",
    "||",
    "++",
    "--",
    "+",
    "-",
    "*",
    "/",
    "&",
    "|",
    "^",
    "%",
    "<<",
    ">>",
    ">>>",
    "+=",
    "-=",
    "*=",
    "/=",
    "&=",
    "|=",
    "^=",
    "%=",
    "<<=",
    ">>=",
    ">>>="
  ],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  digits: /\d+(_+\d+)*/,
  octaldigits: /[0-7]+(_+[0-7]+)*/,
  binarydigits: /[0-1]+(_+[0-1]+)*/,
  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
  tokenizer: {
    root: [
      [
        /[a-z_$][\w$]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": "identifier"
          }
        }
      ],
      [
        /[A-Z][\w\$]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": "type.identifier"
          }
        }
      ],
      { include: "@whitespace" },
      [/[{}()\[\]]/, "@brackets"],
      [/[<>](?!@symbols)/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "delimiter",
            "@default": ""
          }
        }
      ],
      [/@\s*[a-zA-Z_\$][\w\$]*/, "annotation"],
      [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, "number.float"],
      [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, "number.float"],
      [/(@digits)[fFdD]/, "number.float"],
      [/(@digits)[lL]?/, "number"],
      [/[;,.]/, "delimiter"],
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/"/, "string", '@string."'],
      [/'/, "string", "@string.'"],
      [/'[^\\']'/, "string"],
      [/(')(@escapes)(')/, ["string", "string.escape", "string"]],
      [/'/, "string.invalid"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/\/\*\*(?!\/)/, "comment.doc", "@apexdoc"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\*\//, "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    apexdoc: [
      [/[^\/*]+/, "comment.doc"],
      [/\*\//, "comment.doc", "@pop"],
      [/[\/*]/, "comment.doc"]
    ],
    string: [
      [/[^\\"']+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ]
    ]
  }
};



/***/ }),

/***/ 39080:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/azcli/azcli.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "azcli",
  extensions: [".azcli"],
  aliases: ["Azure CLI", "azcli"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-b7b2b1d6"), __webpack_require__.e("vendors-b40a25ea"), __webpack_require__.e("vendors-ccd6c5d7"), __webpack_require__.e("vendors-9738eacb"), __webpack_require__.e("vendors-5a62b1df"), __webpack_require__.e("vendors-e61bdb27"), __webpack_require__.e("vendors-ba75db03"), __webpack_require__.e("vendors-4ced94fb"), __webpack_require__.e("vendors-a5ed5821"), __webpack_require__.e("vendors-9c7ffab4"), __webpack_require__.e("vendors-95877811"), __webpack_require__.e("vendors-1549583d"), __webpack_require__.e("vendors-da9fd9dc"), __webpack_require__.e("vendors-5d32fd03"), __webpack_require__.e("vendors-a85cb6ae"), __webpack_require__.e("vendors-fc509239"), __webpack_require__.e("vendors-73460f5e"), __webpack_require__.e("vendors-b6c13333"), __webpack_require__.e("vendors-ef3a5c7f"), __webpack_require__.e("vendors-cd700261"), __webpack_require__.e("vendors-e79dc056"), __webpack_require__.e("vendors-3e0f38bf"), __webpack_require__.e("vendors-d99f4572"), __webpack_require__.e("vendors-368790d8"), __webpack_require__.e("vendors-ae7d5aa0"), __webpack_require__.e("vendors-ec59e91d"), __webpack_require__.e("vendors-1bfb811a"), __webpack_require__.e("vendors-6db446cf"), __webpack_require__.e("vendors-cb7193af"), __webpack_require__.e("vendors-715a3b8f"), __webpack_require__.e("vendors-06fdea35"), __webpack_require__.e("vendors-7001ec42"), __webpack_require__.e("vendors-fe97e044"), __webpack_require__.e("vendors-b57f1964"), __webpack_require__.e("vendors-3b5ea4b6"), __webpack_require__.e("vendors-2447ffdc"), __webpack_require__.e("vendors-9b105835"), __webpack_require__.e("vendors-f0f55b6e"), __webpack_require__.e("vendors-f315c23d"), __webpack_require__.e("vendors-a0125ed2"), __webpack_require__.e("vendors-448d6272"), __webpack_require__.e("vendors-47d52b41"), __webpack_require__.e("vendors-f721481f"), __webpack_require__.e("vendors-e3950c1c"), __webpack_require__.e("vendors-895354f2"), __webpack_require__.e("vendors-3ae6908a"), __webpack_require__.e("vendors-70a5a7f4"), __webpack_require__.e("vendors-0cabaaf9"), __webpack_require__.e("vendors-30e3dbd1"), __webpack_require__.e("vendors-b2a563c8"), __webpack_require__.e("vendors-8b033358"), __webpack_require__.e("vendors-acb218f4"), __webpack_require__.e("vendors-47179a4d"), __webpack_require__.e("vendors-430670c2"), __webpack_require__.e("vendors-038bd9aa"), __webpack_require__.e("vendors-1e527f35"), __webpack_require__.e("vendors-ad38c252"), __webpack_require__.e("vendors-03916b97"), __webpack_require__.e("vendors-075f49fe"), __webpack_require__.e("vendors-de9c6e90"), __webpack_require__.e("vendors-b21f9708"), __webpack_require__.e("vendors-dc654834"), __webpack_require__.e("vendors-cd3dd8d1"), __webpack_require__.e("vendors-300f7c40"), __webpack_require__.e("vendors-a6884c26"), __webpack_require__.e("vendors-f7c8b42e"), __webpack_require__.e("vendors-26f07415"), __webpack_require__.e("vendors-98e77c49"), __webpack_require__.e("vendors-3742ad55"), __webpack_require__.e("vendors-93db0f2c"), __webpack_require__.e("vendors-381b041e"), __webpack_require__.e("vendors-df9cc3c4"), __webpack_require__.e("vendors-b681ebd8"), __webpack_require__.e("vendors-69e4b8b2"), __webpack_require__.e("vendors-87bf3211"), __webpack_require__.e("vendors-eaba0428"), __webpack_require__.e("vendors-1a5e034c"), __webpack_require__.e("vendors-d32b9835"), __webpack_require__.e("vendors-32f17a4e"), __webpack_require__.e("vendors-e2a95dbb"), __webpack_require__.e("vendors-e32a9e17"), __webpack_require__.e("vendors-daa0f32f"), __webpack_require__.e("vendors-427fae6d"), __webpack_require__.e("vendors-de94d2f0"), __webpack_require__.e("vendors-0b0d4d0d"), __webpack_require__.e("vendors-36c80399"), __webpack_require__.e("vendors-4470bc07"), __webpack_require__.e("vendors-304852f1"), __webpack_require__.e("vendors-226cce73"), __webpack_require__.e("vendors-4c0e5143"), __webpack_require__.e("vendors-e7710145"), __webpack_require__.e("vendors-4e404c3e"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a")]).then(__webpack_require__.bind(__webpack_require__, 22299));
    }
  }
});


/***/ }),

/***/ 22299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/azcli/azcli.ts
var conf = {
  comments: {
    lineComment: "#"
  }
};
var language = {
  defaultToken: "keyword",
  ignoreCase: true,
  tokenPostfix: ".azcli",
  str: /[^#\s]/,
  tokenizer: {
    root: [
      { include: "@comment" },
      [
        /\s-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ],
      [
        /^-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ]
    ],
    type: [
      { include: "@comment" },
      [
        /-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": "key.identifier"
          }
        }
      ],
      [
        /@str+\s*/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ]
    ],
    comment: [
      [
        /#.*$/,
        {
          cases: {
            "@eos": { token: "comment", next: "@popall" }
          }
        }
      ]
    ]
  }
};



/***/ }),

/***/ 73211:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95155);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/bat/bat.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "bat",
  extensions: [".bat", ".cmd"],
  aliases: ["Batch", "bat"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-b7b2b1d6"), __webpack_require__.e("vendors-b40a25ea"), __webpack_require__.e("vendors-ccd6c5d7"), __webpack_require__.e("vendors-9738eacb"), __webpack_require__.e("vendors-5a62b1df"), __webpack_require__.e("vendors-e61bdb27"), __webpack_require__.e("vendors-ba75db03"), __webpack_require__.e("vendors-4ced94fb"), __webpack_require__.e("vendors-a5ed5821"), __webpack_require__.e("vendors-9c7ffab4"), __webpack_require__.e("vendors-95877811"), __webpack_require__.e("vendors-1549583d"), __webpack_require__.e("vendors-da9fd9dc"), __webpack_require__.e("vendors-5d32fd03"), __webpack_require__.e("vendors-a85cb6ae"), __webpack_require__.e("vendors-fc509239"), __webpack_require__.e("vendors-73460f5e"), __webpack_require__.e("vendors-b6c13333"), __webpack_require__.e("vendors-ef3a5c7f"), __webpack_require__.e("vendors-cd700261"), __webpack_require__.e("vendors-e79dc056"), __webpack_require__.e("vendors-3e0f38bf"), __webpack_require__.e("vendors-d99f4572"), __webpack_require__.e("vendors-368790d8"), __webpack_require__.e("vendors-ae7d5aa0"), __webpack_require__.e("vendors-ec59e91d"), __webpack_require__.e("vendors-1bfb811a"), __webpack_require__.e("vendors-6db446cf"), __webpack_require__.e("vendors-cb7193af"), __webpack_require__.e("vendors-715a3b8f"), __webpack_require__.e("vendors-06fdea35"), __webpack_require__.e("vendors-7001ec42"), __webpack_require__.e("vendors-fe97e044"), __webpack_require__.e("vendors-b57f1964"), __webpack_require__.e("vendors-3b5ea4b6"), __webpack_require__.e("vendors-2447ffdc"), __webpack_require__.e("vendors-9b105835"), __webpack_require__.e("vendors-f0f55b6e"), __webpack_require__.e("vendors-f315c23d"), __webpack_require__.e("vendors-a0125ed2"), __webpack_require__.e("vendors-448d6272"), __webpack_require__.e("vendors-47d52b41"), __webpack_require__.e("vendors-f721481f"), __webpack_require__.e("vendors-e3950c1c"), __webpack_require__.e("vendors-895354f2"), __webpack_require__.e("vendors-3ae6908a"), __webpack_require__.e("vendors-70a5a7f4"), __webpack_require__.e("vendors-0cabaaf9"), __webpack_require__.e("vendors-30e3dbd1"), __webpack_require__.e("vendors-b2a563c8"), __webpack_require__.e("vendors-8b033358"), __webpack_require__.e("vendors-acb218f4"), __webpack_require__.e("vendors-47179a4d"), __webpack_require__.e("vendors-430670c2"), __webpack_require__.e("vendors-038bd9aa"), __webpack_require__.e("vendors-1e527f35"), __webpack_require__.e("vendors-ad38c252"), __webpack_require__.e("vendors-03916b97"), __webpack_require__.e("vendors-075f49fe"), __webpack_require__.e("vendors-de9c6e90"), __webpack_require__.e("vendors-b21f9708"), __webpack_require__.e("vendors-dc654834"), __webpack_require__.e("vendors-cd3dd8d1"), __webpack_require__.e("vendors-300f7c40"), __webpack_require__.e("vendors-a6884c26"), __webpack_require__.e("vendors-f7c8b42e"), __webpack_require__.e("vendors-26f07415"), __webpack_require__.e("vendors-98e77c49"), __webpack_require__.e("vendors-3742ad55"), __webpack_require__.e("vendors-93db0f2c"), __webpack_require__.e("vendors-381b041e"), __webpack_require__.e("vendors-df9cc3c4"), __webpack_require__.e("vendors-b681ebd8"), __webpack_require__.e("vendors-69e4b8b2"), __webpack_require__.e("vendors-87bf3211"), __webpack_require__.e("vendors-eaba0428"), __webpack_require__.e("vendors-1a5e034c"), __webpack_require__.e("vendors-d32b9835"), __webpack_require__.e("vendors-32f17a4e"), __webpack_require__.e("vendors-e2a95dbb"), __webpack_require__.e("vendors-e32a9e17"), __webpack_require__.e("vendors-daa0f32f"), __webpack_require__.e("vendors-427fae6d"), __webpack_require__.e("vendors-de94d2f0"), __webpack_require__.e("vendors-0b0d4d0d"), __webpack_require__.e("vendors-36c80399"), __webpack_require__.e("vendors-4470bc07"), __webpack_require__.e("vendors-304852f1"), __webpack_require__.e("vendors-226cce73"), __webpack_require__.e("vendors-4c0e5143"), __webpack_require__.e("vendors-e7710145"), __webpack_require__.e("vendors-4e404c3e"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a")]).then(__webpack_require__.bind(__webpack_require__, 16996));
    }
  }
});


/***/ }),

/***/ 16996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/bat/bat.ts
var conf = {
  comments: {
    lineComment: "REM"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  surroundingPairs: [
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*(::\\s*|REM\\s+)#region"),
      end: new RegExp("^\\s*(::\\s*|REM\\s+)#endregion")
    }
  }
};
var language = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".bat",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: /call|defined|echo|errorlevel|exist|for|goto|if|pause|set|shift|start|title|not|pushd|popd/,
  symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [/^(\s*)(rem(?:\s.*|))$/, ["", "comment"]],
      [/(\@?)(@keywords)(?!\w)/, [{ token: "keyword" }, { token: "keyword.$2" }]],
      [/[ \t\r\n]+/, ""],
      [/setlocal(?!\w)/, "keyword.tag-setlocal"],
      [/endlocal(?!\w)/, "keyword.tag-setlocal"],
      [/[a-zA-Z_]\w*/, ""],
      [/:\w*/, "metatag"],
      [/%[^%]+%/, "variable"],
      [/%%[\w]+(?!\w)/, "variable"],
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, "delimiter"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/"/, "string", '@string."'],
      [/'/, "string", "@string.'"]
    ],
    string: [
      [
        /[^\\"'%]+/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/%[\w ]+%/, "variable"],
      [/%%[\w]+(?!\w)/, "variable"],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/$/, "string", "@popall"]
    ]
  }
};



/***/ })

}]);