"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-7b1eb68b"],{

/***/ 66020:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/razor/razor.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "razor",
  extensions: [".cshtml"],
  aliases: ["Razor", "razor"],
  mimetypes: ["text/x-cshtml"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 83094));
    }
  }
});


/***/ }),

/***/ 83094:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15846);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
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


// src/basic-languages/razor/razor.ts
var EMPTY_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
  comments: {
    blockComment: ["<!--", "-->"]
  },
  brackets: [
    ["<!--", "-->"],
    ["<", ">"],
    ["{", "}"],
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
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "<", close: ">" }
  ],
  onEnterRules: [
    {
      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      afterText: /^<\/(\w[\w\d]*)\s*>$/i,
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
      }
    },
    {
      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }
    }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: "",
  tokenizer: {
    root: [
      [/@@@@/],
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.root" }],
      [/<!DOCTYPE/, "metatag.html", "@doctype"],
      [/<!--/, "comment.html", "@comment"],
      [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<)(script)/, ["delimiter.html", { token: "tag.html", next: "@script" }]],
      [/(<)(style)/, ["delimiter.html", { token: "tag.html", next: "@style" }]],
      [/(<)([:\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/(<\/)([\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/</, "delimiter.html"],
      [/[ \t\r\n]+/],
      [/[^<@]+/]
    ],
    doctype: [
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }],
      [/[^>]+/, "metatag.content.html"],
      [/>/, "metatag.html", "@pop"]
    ],
    comment: [
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.comment" }],
      [/-->/, "comment.html", "@pop"],
      [/[^-]+/, "comment.content.html"],
      [/./, "comment.content.html"]
    ],
    otherTag: [
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.otherTag" }],
      [/\/?>/, "delimiter.html", "@pop"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/]
    ],
    script: [
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.script" }],
      [/type/, "attribute.name", "@scriptAfterType"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@scriptEmbedded.text/javascript",
          nextEmbedded: "text/javascript"
        }
      ],
      [/[ \t\r\n]+/],
      [
        /(<\/)(script\s*)(>)/,
        ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
      ]
    ],
    scriptAfterType: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.scriptAfterType"
        }
      ],
      [/=/, "delimiter", "@scriptAfterTypeEquals"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@scriptEmbedded.text/javascript",
          nextEmbedded: "text/javascript"
        }
      ],
      [/[ \t\r\n]+/],
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    scriptAfterTypeEquals: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.scriptAfterTypeEquals"
        }
      ],
      [
        /"([^"]*)"/,
        {
          token: "attribute.value",
          switchTo: "@scriptWithCustomType.$1"
        }
      ],
      [
        /'([^']*)'/,
        {
          token: "attribute.value",
          switchTo: "@scriptWithCustomType.$1"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@scriptEmbedded.text/javascript",
          nextEmbedded: "text/javascript"
        }
      ],
      [/[ \t\r\n]+/],
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    scriptWithCustomType: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.scriptWithCustomType.$S2"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@scriptEmbedded.$S2",
          nextEmbedded: "$S2"
        }
      ],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/],
      [/<\/script\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    scriptEmbedded: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInEmbeddedState.scriptEmbedded.$S2",
          nextEmbedded: "@pop"
        }
      ],
      [/<\/script/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
    ],
    style: [
      [/@[^@]/, { token: "@rematch", switchTo: "@razorInSimpleState.style" }],
      [/type/, "attribute.name", "@styleAfterType"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@styleEmbedded.text/css",
          nextEmbedded: "text/css"
        }
      ],
      [/[ \t\r\n]+/],
      [
        /(<\/)(style\s*)(>)/,
        ["delimiter.html", "tag.html", { token: "delimiter.html", next: "@pop" }]
      ]
    ],
    styleAfterType: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.styleAfterType"
        }
      ],
      [/=/, "delimiter", "@styleAfterTypeEquals"],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@styleEmbedded.text/css",
          nextEmbedded: "text/css"
        }
      ],
      [/[ \t\r\n]+/],
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    styleAfterTypeEquals: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.styleAfterTypeEquals"
        }
      ],
      [
        /"([^"]*)"/,
        {
          token: "attribute.value",
          switchTo: "@styleWithCustomType.$1"
        }
      ],
      [
        /'([^']*)'/,
        {
          token: "attribute.value",
          switchTo: "@styleWithCustomType.$1"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@styleEmbedded.text/css",
          nextEmbedded: "text/css"
        }
      ],
      [/[ \t\r\n]+/],
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    styleWithCustomType: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInSimpleState.styleWithCustomType.$S2"
        }
      ],
      [
        />/,
        {
          token: "delimiter.html",
          next: "@styleEmbedded.$S2",
          nextEmbedded: "$S2"
        }
      ],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/],
      [/<\/style\s*>/, { token: "@rematch", next: "@pop" }]
    ],
    styleEmbedded: [
      [
        /@[^@]/,
        {
          token: "@rematch",
          switchTo: "@razorInEmbeddedState.styleEmbedded.$S2",
          nextEmbedded: "@pop"
        }
      ],
      [/<\/style/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
    ],
    razorInSimpleState: [
      [/@\*/, "comment.cs", "@razorBlockCommentTopLevel"],
      [/@[{(]/, "metatag.cs", "@razorRootTopLevel"],
      [/(@)(\s*[\w]+)/, ["metatag.cs", { token: "identifier.cs", switchTo: "@$S2.$S3" }]],
      [/[})]/, { token: "metatag.cs", switchTo: "@$S2.$S3" }],
      [/\*@/, { token: "comment.cs", switchTo: "@$S2.$S3" }]
    ],
    razorInEmbeddedState: [
      [/@\*/, "comment.cs", "@razorBlockCommentTopLevel"],
      [/@[{(]/, "metatag.cs", "@razorRootTopLevel"],
      [
        /(@)(\s*[\w]+)/,
        [
          "metatag.cs",
          {
            token: "identifier.cs",
            switchTo: "@$S2.$S3",
            nextEmbedded: "$S3"
          }
        ]
      ],
      [
        /[})]/,
        {
          token: "metatag.cs",
          switchTo: "@$S2.$S3",
          nextEmbedded: "$S3"
        }
      ],
      [
        /\*@/,
        {
          token: "comment.cs",
          switchTo: "@$S2.$S3",
          nextEmbedded: "$S3"
        }
      ]
    ],
    razorBlockCommentTopLevel: [
      [/\*@/, "@rematch", "@pop"],
      [/[^*]+/, "comment.cs"],
      [/./, "comment.cs"]
    ],
    razorBlockComment: [
      [/\*@/, "comment.cs", "@pop"],
      [/[^*]+/, "comment.cs"],
      [/./, "comment.cs"]
    ],
    razorRootTopLevel: [
      [/\{/, "delimiter.bracket.cs", "@razorRoot"],
      [/\(/, "delimiter.parenthesis.cs", "@razorRoot"],
      [/[})]/, "@rematch", "@pop"],
      { include: "razorCommon" }
    ],
    razorRoot: [
      [/\{/, "delimiter.bracket.cs", "@razorRoot"],
      [/\(/, "delimiter.parenthesis.cs", "@razorRoot"],
      [/\}/, "delimiter.bracket.cs", "@pop"],
      [/\)/, "delimiter.parenthesis.cs", "@pop"],
      { include: "razorCommon" }
    ],
    razorCommon: [
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@razorKeywords": { token: "keyword.cs" },
            "@default": "identifier.cs"
          }
        }
      ],
      [/[\[\]]/, "delimiter.array.cs"],
      [/[ \t\r\n]+/],
      [/\/\/.*$/, "comment.cs"],
      [/@\*/, "comment.cs", "@razorBlockComment"],
      [/"([^"]*)"/, "string.cs"],
      [/'([^']*)'/, "string.cs"],
      [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<)([\w\-]+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<\/)([\w\-]+)(>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/, "delimiter.cs"],
      [/\d*\d+[eE]([\-+]?\d+)?/, "number.float.cs"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float.cs"],
      [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, "number.hex.cs"],
      [/0[0-7']*[0-7]/, "number.octal.cs"],
      [/0[bB][0-1']*[0-1]/, "number.binary.cs"],
      [/\d[\d']*/, "number.cs"],
      [/\d/, "number.cs"]
    ]
  },
  razorKeywords: [
    "abstract",
    "as",
    "async",
    "await",
    "base",
    "bool",
    "break",
    "by",
    "byte",
    "case",
    "catch",
    "char",
    "checked",
    "class",
    "const",
    "continue",
    "decimal",
    "default",
    "delegate",
    "do",
    "double",
    "descending",
    "explicit",
    "event",
    "extern",
    "else",
    "enum",
    "false",
    "finally",
    "fixed",
    "float",
    "for",
    "foreach",
    "from",
    "goto",
    "group",
    "if",
    "implicit",
    "in",
    "int",
    "interface",
    "internal",
    "into",
    "is",
    "lock",
    "long",
    "nameof",
    "new",
    "null",
    "namespace",
    "object",
    "operator",
    "out",
    "override",
    "orderby",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "ref",
    "return",
    "switch",
    "struct",
    "sbyte",
    "sealed",
    "short",
    "sizeof",
    "stackalloc",
    "static",
    "string",
    "select",
    "this",
    "throw",
    "true",
    "try",
    "typeof",
    "uint",
    "ulong",
    "unchecked",
    "unsafe",
    "ushort",
    "using",
    "var",
    "virtual",
    "volatile",
    "void",
    "when",
    "while",
    "where",
    "yield",
    "model",
    "inject"
  ],
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};



/***/ }),

/***/ 93151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redis/redis.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "redis",
  extensions: [".redis"],
  aliases: ["redis"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 2659));
    }
  }
});


/***/ }),

/***/ 2659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redis/redis.ts
var conf = {
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
    { open: "'", close: "'" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".redis",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: [
    "APPEND",
    "AUTH",
    "BGREWRITEAOF",
    "BGSAVE",
    "BITCOUNT",
    "BITFIELD",
    "BITOP",
    "BITPOS",
    "BLPOP",
    "BRPOP",
    "BRPOPLPUSH",
    "CLIENT",
    "KILL",
    "LIST",
    "GETNAME",
    "PAUSE",
    "REPLY",
    "SETNAME",
    "CLUSTER",
    "ADDSLOTS",
    "COUNT-FAILURE-REPORTS",
    "COUNTKEYSINSLOT",
    "DELSLOTS",
    "FAILOVER",
    "FORGET",
    "GETKEYSINSLOT",
    "INFO",
    "KEYSLOT",
    "MEET",
    "NODES",
    "REPLICATE",
    "RESET",
    "SAVECONFIG",
    "SET-CONFIG-EPOCH",
    "SETSLOT",
    "SLAVES",
    "SLOTS",
    "COMMAND",
    "COUNT",
    "GETKEYS",
    "CONFIG",
    "GET",
    "REWRITE",
    "SET",
    "RESETSTAT",
    "DBSIZE",
    "DEBUG",
    "OBJECT",
    "SEGFAULT",
    "DECR",
    "DECRBY",
    "DEL",
    "DISCARD",
    "DUMP",
    "ECHO",
    "EVAL",
    "EVALSHA",
    "EXEC",
    "EXISTS",
    "EXPIRE",
    "EXPIREAT",
    "FLUSHALL",
    "FLUSHDB",
    "GEOADD",
    "GEOHASH",
    "GEOPOS",
    "GEODIST",
    "GEORADIUS",
    "GEORADIUSBYMEMBER",
    "GETBIT",
    "GETRANGE",
    "GETSET",
    "HDEL",
    "HEXISTS",
    "HGET",
    "HGETALL",
    "HINCRBY",
    "HINCRBYFLOAT",
    "HKEYS",
    "HLEN",
    "HMGET",
    "HMSET",
    "HSET",
    "HSETNX",
    "HSTRLEN",
    "HVALS",
    "INCR",
    "INCRBY",
    "INCRBYFLOAT",
    "KEYS",
    "LASTSAVE",
    "LINDEX",
    "LINSERT",
    "LLEN",
    "LPOP",
    "LPUSH",
    "LPUSHX",
    "LRANGE",
    "LREM",
    "LSET",
    "LTRIM",
    "MGET",
    "MIGRATE",
    "MONITOR",
    "MOVE",
    "MSET",
    "MSETNX",
    "MULTI",
    "PERSIST",
    "PEXPIRE",
    "PEXPIREAT",
    "PFADD",
    "PFCOUNT",
    "PFMERGE",
    "PING",
    "PSETEX",
    "PSUBSCRIBE",
    "PUBSUB",
    "PTTL",
    "PUBLISH",
    "PUNSUBSCRIBE",
    "QUIT",
    "RANDOMKEY",
    "READONLY",
    "READWRITE",
    "RENAME",
    "RENAMENX",
    "RESTORE",
    "ROLE",
    "RPOP",
    "RPOPLPUSH",
    "RPUSH",
    "RPUSHX",
    "SADD",
    "SAVE",
    "SCARD",
    "SCRIPT",
    "FLUSH",
    "LOAD",
    "SDIFF",
    "SDIFFSTORE",
    "SELECT",
    "SETBIT",
    "SETEX",
    "SETNX",
    "SETRANGE",
    "SHUTDOWN",
    "SINTER",
    "SINTERSTORE",
    "SISMEMBER",
    "SLAVEOF",
    "SLOWLOG",
    "SMEMBERS",
    "SMOVE",
    "SORT",
    "SPOP",
    "SRANDMEMBER",
    "SREM",
    "STRLEN",
    "SUBSCRIBE",
    "SUNION",
    "SUNIONSTORE",
    "SWAPDB",
    "SYNC",
    "TIME",
    "TOUCH",
    "TTL",
    "TYPE",
    "UNSUBSCRIBE",
    "UNLINK",
    "UNWATCH",
    "WAIT",
    "WATCH",
    "ZADD",
    "ZCARD",
    "ZCOUNT",
    "ZINCRBY",
    "ZINTERSTORE",
    "ZLEXCOUNT",
    "ZRANGE",
    "ZRANGEBYLEX",
    "ZREVRANGEBYLEX",
    "ZRANGEBYSCORE",
    "ZRANK",
    "ZREM",
    "ZREMRANGEBYLEX",
    "ZREMRANGEBYRANK",
    "ZREMRANGEBYSCORE",
    "ZREVRANGE",
    "ZREVRANGEBYSCORE",
    "ZREVRANK",
    "ZSCORE",
    "ZUNIONSTORE",
    "SCAN",
    "SSCAN",
    "HSCAN",
    "ZSCAN"
  ],
  operators: [],
  builtinFunctions: [],
  builtinVariables: [],
  pseudoColumns: [],
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@pseudoColumns" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@scopes" },
      [/[;,.]/, "delimiter"],
      [/[()]/, "@brackets"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@operators": "operator",
            "@builtinVariables": "predefined",
            "@builtinFunctions": "predefined",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    pseudoColumns: [
      [
        /[$][A-Za-z_][\w@#$]*/,
        {
          cases: {
            "@pseudoColumns": "predefined",
            "@default": "identifier"
          }
        }
      ]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [
      [/'/, { token: "string", next: "@string" }],
      [/"/, { token: "string.double", next: "@stringDouble" }]
    ],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    stringDouble: [
      [/[^"]+/, "string.double"],
      [/""/, "string.double"],
      [/"/, { token: "string.double", next: "@pop" }]
    ],
    scopes: []
  }
};



/***/ }),

/***/ 99110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redshift/redshift.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "redshift",
  extensions: [],
  aliases: ["Redshift", "redshift"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 18789));
    }
  }
});


/***/ }),

/***/ 18789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/redshift/redshift.ts
var conf = {
  comments: {
    lineComment: "--",
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
    { open: "'", close: "'" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".sql",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: [
    "AES128",
    "AES256",
    "ALL",
    "ALLOWOVERWRITE",
    "ANALYSE",
    "ANALYZE",
    "AND",
    "ANY",
    "ARRAY",
    "AS",
    "ASC",
    "AUTHORIZATION",
    "AZ64",
    "BACKUP",
    "BETWEEN",
    "BINARY",
    "BLANKSASNULL",
    "BOTH",
    "BYTEDICT",
    "BZIP2",
    "CASE",
    "CAST",
    "CHECK",
    "COLLATE",
    "COLUMN",
    "CONSTRAINT",
    "CREATE",
    "CREDENTIALS",
    "CROSS",
    "CURRENT_DATE",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "CURRENT_USER",
    "CURRENT_USER_ID",
    "DEFAULT",
    "DEFERRABLE",
    "DEFLATE",
    "DEFRAG",
    "DELTA",
    "DELTA32K",
    "DESC",
    "DISABLE",
    "DISTINCT",
    "DO",
    "ELSE",
    "EMPTYASNULL",
    "ENABLE",
    "ENCODE",
    "ENCRYPT",
    "ENCRYPTION",
    "END",
    "EXCEPT",
    "EXPLICIT",
    "FALSE",
    "FOR",
    "FOREIGN",
    "FREEZE",
    "FROM",
    "FULL",
    "GLOBALDICT256",
    "GLOBALDICT64K",
    "GRANT",
    "GROUP",
    "GZIP",
    "HAVING",
    "IDENTITY",
    "IGNORE",
    "ILIKE",
    "IN",
    "INITIALLY",
    "INNER",
    "INTERSECT",
    "INTO",
    "IS",
    "ISNULL",
    "JOIN",
    "LANGUAGE",
    "LEADING",
    "LEFT",
    "LIKE",
    "LIMIT",
    "LOCALTIME",
    "LOCALTIMESTAMP",
    "LUN",
    "LUNS",
    "LZO",
    "LZOP",
    "MINUS",
    "MOSTLY16",
    "MOSTLY32",
    "MOSTLY8",
    "NATURAL",
    "NEW",
    "NOT",
    "NOTNULL",
    "NULL",
    "NULLS",
    "OFF",
    "OFFLINE",
    "OFFSET",
    "OID",
    "OLD",
    "ON",
    "ONLY",
    "OPEN",
    "OR",
    "ORDER",
    "OUTER",
    "OVERLAPS",
    "PARALLEL",
    "PARTITION",
    "PERCENT",
    "PERMISSIONS",
    "PLACING",
    "PRIMARY",
    "RAW",
    "READRATIO",
    "RECOVER",
    "REFERENCES",
    "RESPECT",
    "REJECTLOG",
    "RESORT",
    "RESTORE",
    "RIGHT",
    "SELECT",
    "SESSION_USER",
    "SIMILAR",
    "SNAPSHOT",
    "SOME",
    "SYSDATE",
    "SYSTEM",
    "TABLE",
    "TAG",
    "TDES",
    "TEXT255",
    "TEXT32K",
    "THEN",
    "TIMESTAMP",
    "TO",
    "TOP",
    "TRAILING",
    "TRUE",
    "TRUNCATECOLUMNS",
    "UNION",
    "UNIQUE",
    "USER",
    "USING",
    "VERBOSE",
    "WALLET",
    "WHEN",
    "WHERE",
    "WITH",
    "WITHOUT"
  ],
  operators: [
    "AND",
    "BETWEEN",
    "IN",
    "LIKE",
    "NOT",
    "OR",
    "IS",
    "NULL",
    "INTERSECT",
    "UNION",
    "INNER",
    "JOIN",
    "LEFT",
    "OUTER",
    "RIGHT"
  ],
  builtinFunctions: [
    "current_schema",
    "current_schemas",
    "has_database_privilege",
    "has_schema_privilege",
    "has_table_privilege",
    "age",
    "current_time",
    "current_timestamp",
    "localtime",
    "isfinite",
    "now",
    "ascii",
    "get_bit",
    "get_byte",
    "set_bit",
    "set_byte",
    "to_ascii",
    "approximate percentile_disc",
    "avg",
    "count",
    "listagg",
    "max",
    "median",
    "min",
    "percentile_cont",
    "stddev_samp",
    "stddev_pop",
    "sum",
    "var_samp",
    "var_pop",
    "bit_and",
    "bit_or",
    "bool_and",
    "bool_or",
    "cume_dist",
    "first_value",
    "lag",
    "last_value",
    "lead",
    "nth_value",
    "ratio_to_report",
    "dense_rank",
    "ntile",
    "percent_rank",
    "rank",
    "row_number",
    "case",
    "coalesce",
    "decode",
    "greatest",
    "least",
    "nvl",
    "nvl2",
    "nullif",
    "add_months",
    "at time zone",
    "convert_timezone",
    "current_date",
    "date_cmp",
    "date_cmp_timestamp",
    "date_cmp_timestamptz",
    "date_part_year",
    "dateadd",
    "datediff",
    "date_part",
    "date_trunc",
    "extract",
    "getdate",
    "interval_cmp",
    "last_day",
    "months_between",
    "next_day",
    "sysdate",
    "timeofday",
    "timestamp_cmp",
    "timestamp_cmp_date",
    "timestamp_cmp_timestamptz",
    "timestamptz_cmp",
    "timestamptz_cmp_date",
    "timestamptz_cmp_timestamp",
    "timezone",
    "to_timestamp",
    "trunc",
    "abs",
    "acos",
    "asin",
    "atan",
    "atan2",
    "cbrt",
    "ceil",
    "ceiling",
    "checksum",
    "cos",
    "cot",
    "degrees",
    "dexp",
    "dlog1",
    "dlog10",
    "exp",
    "floor",
    "ln",
    "log",
    "mod",
    "pi",
    "power",
    "radians",
    "random",
    "round",
    "sin",
    "sign",
    "sqrt",
    "tan",
    "to_hex",
    "bpcharcmp",
    "btrim",
    "bttext_pattern_cmp",
    "char_length",
    "character_length",
    "charindex",
    "chr",
    "concat",
    "crc32",
    "func_sha1",
    "initcap",
    "left and rights",
    "len",
    "length",
    "lower",
    "lpad and rpads",
    "ltrim",
    "md5",
    "octet_length",
    "position",
    "quote_ident",
    "quote_literal",
    "regexp_count",
    "regexp_instr",
    "regexp_replace",
    "regexp_substr",
    "repeat",
    "replace",
    "replicate",
    "reverse",
    "rtrim",
    "split_part",
    "strpos",
    "strtol",
    "substring",
    "textlen",
    "translate",
    "trim",
    "upper",
    "cast",
    "convert",
    "to_char",
    "to_date",
    "to_number",
    "json_array_length",
    "json_extract_array_element_text",
    "json_extract_path_text",
    "current_setting",
    "pg_cancel_backend",
    "pg_terminate_backend",
    "set_config",
    "current_database",
    "current_user",
    "current_user_id",
    "pg_backend_pid",
    "pg_last_copy_count",
    "pg_last_copy_id",
    "pg_last_query_id",
    "pg_last_unload_count",
    "session_user",
    "slice_num",
    "user",
    "version",
    "abbrev",
    "acosd",
    "any",
    "area",
    "array_agg",
    "array_append",
    "array_cat",
    "array_dims",
    "array_fill",
    "array_length",
    "array_lower",
    "array_ndims",
    "array_position",
    "array_positions",
    "array_prepend",
    "array_remove",
    "array_replace",
    "array_to_json",
    "array_to_string",
    "array_to_tsvector",
    "array_upper",
    "asind",
    "atan2d",
    "atand",
    "bit",
    "bit_length",
    "bound_box",
    "box",
    "brin_summarize_new_values",
    "broadcast",
    "cardinality",
    "center",
    "circle",
    "clock_timestamp",
    "col_description",
    "concat_ws",
    "convert_from",
    "convert_to",
    "corr",
    "cosd",
    "cotd",
    "covar_pop",
    "covar_samp",
    "current_catalog",
    "current_query",
    "current_role",
    "currval",
    "cursor_to_xml",
    "diameter",
    "div",
    "encode",
    "enum_first",
    "enum_last",
    "enum_range",
    "every",
    "family",
    "format",
    "format_type",
    "generate_series",
    "generate_subscripts",
    "get_current_ts_config",
    "gin_clean_pending_list",
    "grouping",
    "has_any_column_privilege",
    "has_column_privilege",
    "has_foreign_data_wrapper_privilege",
    "has_function_privilege",
    "has_language_privilege",
    "has_sequence_privilege",
    "has_server_privilege",
    "has_tablespace_privilege",
    "has_type_privilege",
    "height",
    "host",
    "hostmask",
    "inet_client_addr",
    "inet_client_port",
    "inet_merge",
    "inet_same_family",
    "inet_server_addr",
    "inet_server_port",
    "isclosed",
    "isempty",
    "isopen",
    "json_agg",
    "json_object",
    "json_object_agg",
    "json_populate_record",
    "json_populate_recordset",
    "json_to_record",
    "json_to_recordset",
    "jsonb_agg",
    "jsonb_object_agg",
    "justify_days",
    "justify_hours",
    "justify_interval",
    "lastval",
    "left",
    "line",
    "localtimestamp",
    "lower_inc",
    "lower_inf",
    "lpad",
    "lseg",
    "make_date",
    "make_interval",
    "make_time",
    "make_timestamp",
    "make_timestamptz",
    "masklen",
    "mode",
    "netmask",
    "network",
    "nextval",
    "npoints",
    "num_nonnulls",
    "num_nulls",
    "numnode",
    "obj_description",
    "overlay",
    "parse_ident",
    "path",
    "pclose",
    "percentile_disc",
    "pg_advisory_lock",
    "pg_advisory_lock_shared",
    "pg_advisory_unlock",
    "pg_advisory_unlock_all",
    "pg_advisory_unlock_shared",
    "pg_advisory_xact_lock",
    "pg_advisory_xact_lock_shared",
    "pg_backup_start_time",
    "pg_blocking_pids",
    "pg_client_encoding",
    "pg_collation_is_visible",
    "pg_column_size",
    "pg_conf_load_time",
    "pg_control_checkpoint",
    "pg_control_init",
    "pg_control_recovery",
    "pg_control_system",
    "pg_conversion_is_visible",
    "pg_create_logical_replication_slot",
    "pg_create_physical_replication_slot",
    "pg_create_restore_point",
    "pg_current_xlog_flush_location",
    "pg_current_xlog_insert_location",
    "pg_current_xlog_location",
    "pg_database_size",
    "pg_describe_object",
    "pg_drop_replication_slot",
    "pg_export_snapshot",
    "pg_filenode_relation",
    "pg_function_is_visible",
    "pg_get_constraintdef",
    "pg_get_expr",
    "pg_get_function_arguments",
    "pg_get_function_identity_arguments",
    "pg_get_function_result",
    "pg_get_functiondef",
    "pg_get_indexdef",
    "pg_get_keywords",
    "pg_get_object_address",
    "pg_get_owned_sequence",
    "pg_get_ruledef",
    "pg_get_serial_sequence",
    "pg_get_triggerdef",
    "pg_get_userbyid",
    "pg_get_viewdef",
    "pg_has_role",
    "pg_identify_object",
    "pg_identify_object_as_address",
    "pg_index_column_has_property",
    "pg_index_has_property",
    "pg_indexam_has_property",
    "pg_indexes_size",
    "pg_is_in_backup",
    "pg_is_in_recovery",
    "pg_is_other_temp_schema",
    "pg_is_xlog_replay_paused",
    "pg_last_committed_xact",
    "pg_last_xact_replay_timestamp",
    "pg_last_xlog_receive_location",
    "pg_last_xlog_replay_location",
    "pg_listening_channels",
    "pg_logical_emit_message",
    "pg_logical_slot_get_binary_changes",
    "pg_logical_slot_get_changes",
    "pg_logical_slot_peek_binary_changes",
    "pg_logical_slot_peek_changes",
    "pg_ls_dir",
    "pg_my_temp_schema",
    "pg_notification_queue_usage",
    "pg_opclass_is_visible",
    "pg_operator_is_visible",
    "pg_opfamily_is_visible",
    "pg_options_to_table",
    "pg_postmaster_start_time",
    "pg_read_binary_file",
    "pg_read_file",
    "pg_relation_filenode",
    "pg_relation_filepath",
    "pg_relation_size",
    "pg_reload_conf",
    "pg_replication_origin_create",
    "pg_replication_origin_drop",
    "pg_replication_origin_oid",
    "pg_replication_origin_progress",
    "pg_replication_origin_session_is_setup",
    "pg_replication_origin_session_progress",
    "pg_replication_origin_session_reset",
    "pg_replication_origin_session_setup",
    "pg_replication_origin_xact_reset",
    "pg_replication_origin_xact_setup",
    "pg_rotate_logfile",
    "pg_size_bytes",
    "pg_size_pretty",
    "pg_sleep",
    "pg_sleep_for",
    "pg_sleep_until",
    "pg_start_backup",
    "pg_stat_file",
    "pg_stop_backup",
    "pg_switch_xlog",
    "pg_table_is_visible",
    "pg_table_size",
    "pg_tablespace_databases",
    "pg_tablespace_location",
    "pg_tablespace_size",
    "pg_total_relation_size",
    "pg_trigger_depth",
    "pg_try_advisory_lock",
    "pg_try_advisory_lock_shared",
    "pg_try_advisory_xact_lock",
    "pg_try_advisory_xact_lock_shared",
    "pg_ts_config_is_visible",
    "pg_ts_dict_is_visible",
    "pg_ts_parser_is_visible",
    "pg_ts_template_is_visible",
    "pg_type_is_visible",
    "pg_typeof",
    "pg_xact_commit_timestamp",
    "pg_xlog_location_diff",
    "pg_xlog_replay_pause",
    "pg_xlog_replay_resume",
    "pg_xlogfile_name",
    "pg_xlogfile_name_offset",
    "phraseto_tsquery",
    "plainto_tsquery",
    "point",
    "polygon",
    "popen",
    "pqserverversion",
    "query_to_xml",
    "querytree",
    "quote_nullable",
    "radius",
    "range_merge",
    "regexp_matches",
    "regexp_split_to_array",
    "regexp_split_to_table",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "right",
    "row_security_active",
    "row_to_json",
    "rpad",
    "scale",
    "set_masklen",
    "setseed",
    "setval",
    "setweight",
    "shobj_description",
    "sind",
    "sprintf",
    "statement_timestamp",
    "stddev",
    "string_agg",
    "string_to_array",
    "strip",
    "substr",
    "table_to_xml",
    "table_to_xml_and_xmlschema",
    "tand",
    "text",
    "to_json",
    "to_regclass",
    "to_regnamespace",
    "to_regoper",
    "to_regoperator",
    "to_regproc",
    "to_regprocedure",
    "to_regrole",
    "to_regtype",
    "to_tsquery",
    "to_tsvector",
    "transaction_timestamp",
    "ts_debug",
    "ts_delete",
    "ts_filter",
    "ts_headline",
    "ts_lexize",
    "ts_parse",
    "ts_rank",
    "ts_rank_cd",
    "ts_rewrite",
    "ts_stat",
    "ts_token_type",
    "tsquery_phrase",
    "tsvector_to_array",
    "tsvector_update_trigger",
    "tsvector_update_trigger_column",
    "txid_current",
    "txid_current_snapshot",
    "txid_snapshot_xip",
    "txid_snapshot_xmax",
    "txid_snapshot_xmin",
    "txid_visible_in_snapshot",
    "unnest",
    "upper_inc",
    "upper_inf",
    "variance",
    "width",
    "width_bucket",
    "xml_is_well_formed",
    "xml_is_well_formed_content",
    "xml_is_well_formed_document",
    "xmlagg",
    "xmlcomment",
    "xmlconcat",
    "xmlelement",
    "xmlexists",
    "xmlforest",
    "xmlparse",
    "xmlpi",
    "xmlroot",
    "xmlserialize",
    "xpath",
    "xpath_exists"
  ],
  builtinVariables: [],
  pseudoColumns: [],
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@pseudoColumns" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      { include: "@scopes" },
      [/[;,.]/, "delimiter"],
      [/[()]/, "@brackets"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@keywords": "keyword",
            "@operators": "operator",
            "@builtinVariables": "predefined",
            "@builtinFunctions": "predefined",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/--+.*/, "comment"],
      [/\/\*/, { token: "comment.quote", next: "@comment" }]
    ],
    comment: [
      [/[^*/]+/, "comment"],
      [/\*\//, { token: "comment.quote", next: "@pop" }],
      [/./, "comment"]
    ],
    pseudoColumns: [
      [
        /[$][A-Za-z_][\w@#$]*/,
        {
          cases: {
            "@pseudoColumns": "predefined",
            "@default": "identifier"
          }
        }
      ]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [[/'/, { token: "string", next: "@string" }]],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    complexIdentifiers: [[/"/, { token: "identifier.quote", next: "@quotedIdentifier" }]],
    quotedIdentifier: [
      [/[^"]+/, "identifier"],
      [/""/, "identifier"],
      [/"/, { token: "identifier.quote", next: "@pop" }]
    ],
    scopes: []
  }
};



/***/ }),

/***/ 87215:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/restructuredtext/restructuredtext.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "restructuredtext",
  extensions: [".rst"],
  aliases: ["reStructuredText", "restructuredtext"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 56863));
    }
  }
});


/***/ }),

/***/ 56863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/restructuredtext/restructuredtext.ts
var conf = {
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">", notIn: ["string"] }
  ],
  surroundingPairs: [
    { open: "(", close: ")" },
    { open: "[", close: "]" },
    { open: "`", close: "`" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
      end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
    }
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".rst",
  control: /[\\`*_\[\]{}()#+\-\.!]/,
  escapes: /\\(?:@control)/,
  empty: [
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "link",
    "meta",
    "param"
  ],
  alphanumerics: /[A-Za-z0-9]/,
  simpleRefNameWithoutBq: /(?:@alphanumerics[-_+:.]*@alphanumerics)+|(?:@alphanumerics+)/,
  simpleRefName: /(?:`@phrase`|@simpleRefNameWithoutBq)/,
  phrase: /@simpleRefNameWithoutBq(?:\s@simpleRefNameWithoutBq)*/,
  citationName: /[A-Za-z][A-Za-z0-9-_.]*/,
  blockLiteralStart: /(?:[!"#$%&'()*+,-./:;<=>?@\[\]^_`{|}~]|[\s])/,
  precedingChars: /(?:[ -:/'"<([{])/,
  followingChars: /(?:[ -.,:;!?/'")\]}>]|$)/,
  punctuation: /(=|-|~|`|#|"|\^|\+|\*|:|\.|'|_|\+)/,
  tokenizer: {
    root: [
      [/^(@punctuation{3,}$){1,1}?/, "keyword"],
      [/^\s*([\*\-+‣•]|[a-zA-Z0-9]+\.|\([a-zA-Z0-9]+\)|[a-zA-Z0-9]+\))\s/, "keyword"],
      [/([ ]::)\s*$/, "keyword", "@blankLineOfLiteralBlocks"],
      [/(::)\s*$/, "keyword", "@blankLineOfLiteralBlocks"],
      { include: "@tables" },
      { include: "@explicitMarkupBlocks" },
      { include: "@inlineMarkup" }
    ],
    explicitMarkupBlocks: [
      { include: "@citations" },
      { include: "@footnotes" },
      [
        /^(\.\.\s)(@simpleRefName)(::\s)(.*)$/,
        [{ token: "", next: "subsequentLines" }, "keyword", "", ""]
      ],
      [
        /^(\.\.)(\s+)(_)(@simpleRefName)(:)(\s+)(.*)/,
        [{ token: "", next: "hyperlinks" }, "", "", "string.link", "", "", "string.link"]
      ],
      [
        /^((?:(?:\.\.)(?:\s+))?)(__)(:)(\s+)(.*)/,
        [{ token: "", next: "subsequentLines" }, "", "", "", "string.link"]
      ],
      [/^(__\s+)(.+)/, ["", "string.link"]],
      [
        /^(\.\.)( \|)([^| ]+[^|]*[^| ]*)(\| )(@simpleRefName)(:: .*)/,
        [{ token: "", next: "subsequentLines" }, "", "string.link", "", "keyword", ""],
        "@rawBlocks"
      ],
      [/(\|)([^| ]+[^|]*[^| ]*)(\|_{0,2})/, ["", "string.link", ""]],
      [/^(\.\.)([ ].*)$/, [{ token: "", next: "@comments" }, "comment"]]
    ],
    inlineMarkup: [
      { include: "@citationsReference" },
      { include: "@footnotesReference" },
      [/(@simpleRefName)(_{1,2})/, ["string.link", ""]],
      [/(`)([^<`]+\s+)(<)(.*)(>)(`)(_)/, ["", "string.link", "", "string.link", "", "", ""]],
      [/\*\*([^\\*]|\*(?!\*))+\*\*/, "strong"],
      [/\*[^*]+\*/, "emphasis"],
      [/(``)((?:[^`]|\`(?!`))+)(``)/, ["", "keyword", ""]],
      [/(__\s+)(.+)/, ["", "keyword"]],
      [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, ["", "keyword", "", "", ""]],
      [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, ["", "", "", "keyword", ""]],
      [/(`)([^`]+)(`)/, ""],
      [/(_`)(@phrase)(`)/, ["", "string.link", ""]]
    ],
    citations: [
      [
        /^(\.\.\s+\[)((?:@citationName))(\]\s+)(.*)/,
        [{ token: "", next: "@subsequentLines" }, "string.link", "", ""]
      ]
    ],
    citationsReference: [[/(\[)(@citationName)(\]_)/, ["", "string.link", ""]]],
    footnotes: [
      [
        /^(\.\.\s+\[)((?:[0-9]+))(\]\s+.*)/,
        [{ token: "", next: "@subsequentLines" }, "string.link", ""]
      ],
      [
        /^(\.\.\s+\[)((?:#@simpleRefName?))(\]\s+)(.*)/,
        [{ token: "", next: "@subsequentLines" }, "string.link", "", ""]
      ],
      [
        /^(\.\.\s+\[)((?:\*))(\]\s+)(.*)/,
        [{ token: "", next: "@subsequentLines" }, "string.link", "", ""]
      ]
    ],
    footnotesReference: [
      [/(\[)([0-9]+)(\])(_)/, ["", "string.link", "", ""]],
      [/(\[)(#@simpleRefName?)(\])(_)/, ["", "string.link", "", ""]],
      [/(\[)(\*)(\])(_)/, ["", "string.link", "", ""]]
    ],
    blankLineOfLiteralBlocks: [
      [/^$/, "", "@subsequentLinesOfLiteralBlocks"],
      [/^.*$/, "", "@pop"]
    ],
    subsequentLinesOfLiteralBlocks: [
      [/(@blockLiteralStart+)(.*)/, ["keyword", ""]],
      [/^(?!blockLiteralStart)/, "", "@popall"]
    ],
    subsequentLines: [
      [/^[\s]+.*/, ""],
      [/^(?!\s)/, "", "@pop"]
    ],
    hyperlinks: [
      [/^[\s]+.*/, "string.link"],
      [/^(?!\s)/, "", "@pop"]
    ],
    comments: [
      [/^[\s]+.*/, "comment"],
      [/^(?!\s)/, "", "@pop"]
    ],
    tables: [
      [/\+-[+-]+/, "keyword"],
      [/\+=[+=]+/, "keyword"]
    ]
  }
};



/***/ }),

/***/ 76214:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/ruby/ruby.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "ruby",
  extensions: [".rb", ".rbx", ".rjs", ".gemspec", ".pp"],
  filenames: ["rakefile", "Gemfile"],
  aliases: ["Ruby", "rb"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 29210));
    }
  }
});


/***/ }),

/***/ 29210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/ruby/ruby.ts
var conf = {
  comments: {
    lineComment: "#",
    blockComment: ["=begin", "=end"]
  },
  brackets: [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
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
    { open: "'", close: "'" }
  ],
  indentationRules: {
    increaseIndentPattern: new RegExp(`^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|("|'|/).*\\4)*(#.*)?$`),
    decreaseIndentPattern: new RegExp("^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)")
  }
};
var language = {
  tokenPostfix: ".ruby",
  keywords: [
    "__LINE__",
    "__ENCODING__",
    "__FILE__",
    "BEGIN",
    "END",
    "alias",
    "and",
    "begin",
    "break",
    "case",
    "class",
    "def",
    "defined?",
    "do",
    "else",
    "elsif",
    "end",
    "ensure",
    "for",
    "false",
    "if",
    "in",
    "module",
    "next",
    "nil",
    "not",
    "or",
    "redo",
    "rescue",
    "retry",
    "return",
    "self",
    "super",
    "then",
    "true",
    "undef",
    "unless",
    "until",
    "when",
    "while",
    "yield"
  ],
  keywordops: ["::", "..", "...", "?", ":", "=>"],
  builtins: [
    "require",
    "public",
    "private",
    "include",
    "extend",
    "attr_reader",
    "protected",
    "private_class_method",
    "protected_class_method",
    "new"
  ],
  declarations: [
    "module",
    "class",
    "def",
    "case",
    "do",
    "begin",
    "for",
    "if",
    "while",
    "until",
    "unless"
  ],
  linedecls: ["def", "case", "do", "begin", "for", "if", "while", "until", "unless"],
  operators: [
    "^",
    "&",
    "|",
    "<=>",
    "==",
    "===",
    "!~",
    "=~",
    ">",
    ">=",
    "<",
    "<=",
    "<<",
    ">>",
    "+",
    "-",
    "*",
    "/",
    "%",
    "**",
    "~",
    "+@",
    "-@",
    "[]",
    "[]=",
    "`",
    "+=",
    "-=",
    "*=",
    "**=",
    "/=",
    "^=",
    "%=",
    "<<=",
    ">>=",
    "&=",
    "&&=",
    "||=",
    "|="
  ],
  brackets: [
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" }
  ],
  symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
  escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
  escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
  decpart: /\d(_?\d)*/,
  decimal: /0|@decpart/,
  delim: /[^a-zA-Z0-9\s\n\r]/,
  heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
  regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
  regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
  tokenizer: {
    root: [
      [
        /^(\s*)([a-z_]\w*[!?=]?)/,
        [
          "white",
          {
            cases: {
              "for|until|while": {
                token: "keyword.$2",
                next: "@dodecl.$2"
              },
              "@declarations": {
                token: "keyword.$2",
                next: "@root.$2"
              },
              end: { token: "keyword.$S2", next: "@pop" },
              "@keywords": "keyword",
              "@builtins": "predefined",
              "@default": "identifier"
            }
          }
        ]
      ],
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            "if|unless|while|until": {
              token: "keyword.$0x",
              next: "@modifier.$0x"
            },
            for: { token: "keyword.$2", next: "@dodecl.$2" },
            "@linedecls": { token: "keyword.$0", next: "@root.$0" },
            end: { token: "keyword.$S2", next: "@pop" },
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      [/[A-Z][\w]*[!?=]?/, "constructor.identifier"],
      [/\$[\w]*/, "global.constant"],
      [/@[\w]*/, "namespace.instance.identifier"],
      [/@@@[\w]*/, "namespace.class.identifier"],
      [/<<[-~](@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      [/[ \t\r\n]+<<(@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      [/^<<(@heredelim).*/, { token: "string.heredoc.delimiter", next: "@heredoc.$1" }],
      { include: "@whitespace" },
      [/"/, { token: "string.d.delim", next: '@dstring.d."' }],
      [/'/, { token: "string.sq.delim", next: "@sstring.sq" }],
      [/%([rsqxwW]|Q?)/, { token: "@rematch", next: "pstring" }],
      [/`/, { token: "string.x.delim", next: "@dstring.x.`" }],
      [/:(\w|[$@])\w*[!?=]?/, "string.s"],
      [/:"/, { token: "string.s.delim", next: '@dstring.s."' }],
      [/:'/, { token: "string.s.delim", next: "@sstring.s" }],
      [/\/(?=(\\\/|[^\/\n])+\/)/, { token: "regexp.delim", next: "@regexp" }],
      [/[{}()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@keywordops": "keyword",
            "@operators": "operator",
            "@default": ""
          }
        }
      ],
      [/[;,]/, "delimiter"],
      [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, "number.hex"],
      [/0[_oO][0-7](_?[0-7])*/, "number.octal"],
      [/0[bB][01](_?[01])*/, "number.binary"],
      [/0[dD]@decpart/, "number"],
      [
        /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/,
        {
          cases: {
            $1: "number.float",
            "@default": "number"
          }
        }
      ]
    ],
    dodecl: [
      [/^/, { token: "", switchTo: "@root.$S2" }],
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            end: { token: "keyword.$S2", next: "@pop" },
            do: { token: "keyword", switchTo: "@root.$S2" },
            "@linedecls": {
              token: "@rematch",
              switchTo: "@root.$S2"
            },
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      { include: "@root" }
    ],
    modifier: [
      [/^/, "", "@pop"],
      [
        /[a-z_]\w*[!?=]?/,
        {
          cases: {
            end: { token: "keyword.$S2", next: "@pop" },
            "then|else|elsif|do": {
              token: "keyword",
              switchTo: "@root.$S2"
            },
            "@linedecls": {
              token: "@rematch",
              switchTo: "@root.$S2"
            },
            "@keywords": "keyword",
            "@builtins": "predefined",
            "@default": "identifier"
          }
        }
      ],
      { include: "@root" }
    ],
    sstring: [
      [/[^\\']+/, "string.$S2"],
      [/\\\\|\\'|\\$/, "string.$S2.escape"],
      [/\\./, "string.$S2.invalid"],
      [/'/, { token: "string.$S2.delim", next: "@pop" }]
    ],
    dstring: [
      [/[^\\`"#]+/, "string.$S2"],
      [/#/, "string.$S2.escape", "@interpolated"],
      [/\\$/, "string.$S2.escape"],
      [/@escapes/, "string.$S2.escape"],
      [/\\./, "string.$S2.escape.invalid"],
      [
        /[`"]/,
        {
          cases: {
            "$#==$S3": { token: "string.$S2.delim", next: "@pop" },
            "@default": "string.$S2"
          }
        }
      ]
    ],
    heredoc: [
      [
        /^(\s*)(@heredelim)$/,
        {
          cases: {
            "$2==$S2": ["string.heredoc", { token: "string.heredoc.delimiter", next: "@pop" }],
            "@default": ["string.heredoc", "string.heredoc"]
          }
        }
      ],
      [/.*/, "string.heredoc"]
    ],
    interpolated: [
      [/\$\w*/, "global.constant", "@pop"],
      [/@\w*/, "namespace.class.identifier", "@pop"],
      [/@@@\w*/, "namespace.instance.identifier", "@pop"],
      [
        /[{]/,
        {
          token: "string.escape.curly",
          switchTo: "@interpolated_compound"
        }
      ],
      ["", "", "@pop"]
    ],
    interpolated_compound: [
      [/[}]/, { token: "string.escape.curly", next: "@pop" }],
      { include: "@root" }
    ],
    pregexp: [
      { include: "@whitespace" },
      [
        /[^\(\{\[\\]/,
        {
          cases: {
            "$#==$S3": { token: "regexp.delim", next: "@pop" },
            "$#==$S2": { token: "regexp.delim", next: "@push" },
            "~[)}\\]]": "@brackets.regexp.escape.control",
            "~@regexpctl": "regexp.escape.control",
            "@default": "regexp"
          }
        }
      ],
      { include: "@regexcontrol" }
    ],
    regexp: [
      { include: "@regexcontrol" },
      [/[^\\\/]/, "regexp"],
      ["/[ixmp]*", { token: "regexp.delim" }, "@pop"]
    ],
    regexcontrol: [
      [
        /(\{)(\d+(?:,\d*)?)(\})/,
        [
          "@brackets.regexp.escape.control",
          "regexp.escape.control",
          "@brackets.regexp.escape.control"
        ]
      ],
      [
        /(\[)(\^?)/,
        ["@brackets.regexp.escape.control", { token: "regexp.escape.control", next: "@regexrange" }]
      ],
      [/(\()(\?[:=!])/, ["@brackets.regexp.escape.control", "regexp.escape.control"]],
      [/\(\?#/, { token: "regexp.escape.control", next: "@regexpcomment" }],
      [/[()]/, "@brackets.regexp.escape.control"],
      [/@regexpctl/, "regexp.escape.control"],
      [/\\$/, "regexp.escape"],
      [/@regexpesc/, "regexp.escape"],
      [/\\\./, "regexp.invalid"],
      [/#/, "regexp.escape", "@interpolated"]
    ],
    regexrange: [
      [/-/, "regexp.escape.control"],
      [/\^/, "regexp.invalid"],
      [/\\$/, "regexp.escape"],
      [/@regexpesc/, "regexp.escape"],
      [/[^\]]/, "regexp"],
      [/\]/, "@brackets.regexp.escape.control", "@pop"]
    ],
    regexpcomment: [
      [/[^)]+/, "comment"],
      [/\)/, { token: "regexp.escape.control", next: "@pop" }]
    ],
    pstring: [
      [/%([qws])\(/, { token: "string.$1.delim", switchTo: "@qstring.$1.(.)" }],
      [/%([qws])\[/, { token: "string.$1.delim", switchTo: "@qstring.$1.[.]" }],
      [/%([qws])\{/, { token: "string.$1.delim", switchTo: "@qstring.$1.{.}" }],
      [/%([qws])</, { token: "string.$1.delim", switchTo: "@qstring.$1.<.>" }],
      [/%([qws])(@delim)/, { token: "string.$1.delim", switchTo: "@qstring.$1.$2.$2" }],
      [/%r\(/, { token: "regexp.delim", switchTo: "@pregexp.(.)" }],
      [/%r\[/, { token: "regexp.delim", switchTo: "@pregexp.[.]" }],
      [/%r\{/, { token: "regexp.delim", switchTo: "@pregexp.{.}" }],
      [/%r</, { token: "regexp.delim", switchTo: "@pregexp.<.>" }],
      [/%r(@delim)/, { token: "regexp.delim", switchTo: "@pregexp.$1.$1" }],
      [/%(x|W|Q?)\(/, { token: "string.$1.delim", switchTo: "@qqstring.$1.(.)" }],
      [/%(x|W|Q?)\[/, { token: "string.$1.delim", switchTo: "@qqstring.$1.[.]" }],
      [/%(x|W|Q?)\{/, { token: "string.$1.delim", switchTo: "@qqstring.$1.{.}" }],
      [/%(x|W|Q?)</, { token: "string.$1.delim", switchTo: "@qqstring.$1.<.>" }],
      [/%(x|W|Q?)(@delim)/, { token: "string.$1.delim", switchTo: "@qqstring.$1.$2.$2" }],
      [/%([rqwsxW]|Q?)./, { token: "invalid", next: "@pop" }],
      [/./, { token: "invalid", next: "@pop" }]
    ],
    qstring: [
      [/\\$/, "string.$S2.escape"],
      [/\\./, "string.$S2.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S4": { token: "string.$S2.delim", next: "@pop" },
            "$#==$S3": { token: "string.$S2.delim", next: "@push" },
            "@default": "string.$S2"
          }
        }
      ]
    ],
    qqstring: [[/#/, "string.$S2.escape", "@interpolated"], { include: "@qstring" }],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/^\s*=begin\b/, "comment", "@comment"],
      [/#.*$/, "comment"]
    ],
    comment: [
      [/[^=]+/, "comment"],
      [/^\s*=begin\b/, "comment.invalid"],
      [/^\s*=end\b.*/, "comment", "@pop"],
      [/[=]/, "comment"]
    ]
  }
};



/***/ }),

/***/ 68280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/rust/rust.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "rust",
  extensions: [".rs", ".rlib"],
  aliases: ["Rust", "rust"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 17039));
    }
  }
});


/***/ }),

/***/ 17039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/rust/rust.ts
var conf = {
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
    { open: "[", close: "]" },
    { open: "{", close: "}" },
    { open: "(", close: ")" },
    { open: '"', close: '"', notIn: ["string"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*#pragma\\s+region\\b"),
      end: new RegExp("^\\s*#pragma\\s+endregion\\b")
    }
  }
};
var language = {
  tokenPostfix: ".rust",
  defaultToken: "invalid",
  keywords: [
    "as",
    "async",
    "await",
    "box",
    "break",
    "const",
    "continue",
    "crate",
    "dyn",
    "else",
    "enum",
    "extern",
    "false",
    "fn",
    "for",
    "if",
    "impl",
    "in",
    "let",
    "loop",
    "match",
    "mod",
    "move",
    "mut",
    "pub",
    "ref",
    "return",
    "self",
    "static",
    "struct",
    "super",
    "trait",
    "true",
    "try",
    "type",
    "unsafe",
    "use",
    "where",
    "while",
    "catch",
    "default",
    "union",
    "static",
    "abstract",
    "alignof",
    "become",
    "do",
    "final",
    "macro",
    "offsetof",
    "override",
    "priv",
    "proc",
    "pure",
    "sizeof",
    "typeof",
    "unsized",
    "virtual",
    "yield"
  ],
  typeKeywords: [
    "Self",
    "m32",
    "m64",
    "m128",
    "f80",
    "f16",
    "f128",
    "int",
    "uint",
    "float",
    "char",
    "bool",
    "u8",
    "u16",
    "u32",
    "u64",
    "f32",
    "f64",
    "i8",
    "i16",
    "i32",
    "i64",
    "str",
    "Option",
    "Either",
    "c_float",
    "c_double",
    "c_void",
    "FILE",
    "fpos_t",
    "DIR",
    "dirent",
    "c_char",
    "c_schar",
    "c_uchar",
    "c_short",
    "c_ushort",
    "c_int",
    "c_uint",
    "c_long",
    "c_ulong",
    "size_t",
    "ptrdiff_t",
    "clock_t",
    "time_t",
    "c_longlong",
    "c_ulonglong",
    "intptr_t",
    "uintptr_t",
    "off_t",
    "dev_t",
    "ino_t",
    "pid_t",
    "mode_t",
    "ssize_t"
  ],
  constants: ["true", "false", "Some", "None", "Left", "Right", "Ok", "Err"],
  supportConstants: [
    "EXIT_FAILURE",
    "EXIT_SUCCESS",
    "RAND_MAX",
    "EOF",
    "SEEK_SET",
    "SEEK_CUR",
    "SEEK_END",
    "_IOFBF",
    "_IONBF",
    "_IOLBF",
    "BUFSIZ",
    "FOPEN_MAX",
    "FILENAME_MAX",
    "L_tmpnam",
    "TMP_MAX",
    "O_RDONLY",
    "O_WRONLY",
    "O_RDWR",
    "O_APPEND",
    "O_CREAT",
    "O_EXCL",
    "O_TRUNC",
    "S_IFIFO",
    "S_IFCHR",
    "S_IFBLK",
    "S_IFDIR",
    "S_IFREG",
    "S_IFMT",
    "S_IEXEC",
    "S_IWRITE",
    "S_IREAD",
    "S_IRWXU",
    "S_IXUSR",
    "S_IWUSR",
    "S_IRUSR",
    "F_OK",
    "R_OK",
    "W_OK",
    "X_OK",
    "STDIN_FILENO",
    "STDOUT_FILENO",
    "STDERR_FILENO"
  ],
  supportMacros: [
    "format!",
    "print!",
    "println!",
    "panic!",
    "format_args!",
    "unreachable!",
    "write!",
    "writeln!"
  ],
  operators: [
    "!",
    "!=",
    "%",
    "%=",
    "&",
    "&=",
    "&&",
    "*",
    "*=",
    "+",
    "+=",
    "-",
    "-=",
    "->",
    ".",
    "..",
    "...",
    "/",
    "/=",
    ":",
    ";",
    "<<",
    "<<=",
    "<",
    "<=",
    "=",
    "==",
    "=>",
    ">",
    ">=",
    ">>",
    ">>=",
    "@",
    "^",
    "^=",
    "|",
    "|=",
    "||",
    "_",
    "?",
    "#"
  ],
  escapes: /\\([nrt0\"''\\]|x\h{2}|u\{\h{1,6}\})/,
  delimiters: /[,]/,
  symbols: /[\#\!\%\&\*\+\-\.\/\:\;\<\=\>\@\^\|_\?]+/,
  intSuffixes: /[iu](8|16|32|64|128|size)/,
  floatSuffixes: /f(32|64)/,
  tokenizer: {
    root: [
      [/r(#*)"/, { token: "string.quote", bracket: "@open", next: "@stringraw.$1" }],
      [
        /[a-zA-Z][a-zA-Z0-9_]*!?|_[a-zA-Z0-9_]+/,
        {
          cases: {
            "@typeKeywords": "keyword.type",
            "@keywords": "keyword",
            "@supportConstants": "keyword",
            "@supportMacros": "keyword",
            "@constants": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/\$/, "identifier"],
      [/'[a-zA-Z_][a-zA-Z0-9_]*(?=[^\'])/, "identifier"],
      [/'(\S|@escapes)'/, "string.byteliteral"],
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
      { include: "@numbers" },
      { include: "@whitespace" },
      [
        /@delimiters/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "delimiter"
          }
        }
      ],
      [/[{}()\[\]<>]/, "@brackets"],
      [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\/\*/, "comment", "@push"],
      ["\\*/", "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    stringraw: [
      [/[^"#]+/, { token: "string" }],
      [
        /"(#*)/,
        {
          cases: {
            "$1==$S2": { token: "string.quote", bracket: "@close", next: "@pop" },
            "@default": { token: "string" }
          }
        }
      ],
      [/["#]/, { token: "string" }]
    ],
    numbers: [
      [/(0o[0-7_]+)(@intSuffixes)?/, { token: "number" }],
      [/(0b[0-1_]+)(@intSuffixes)?/, { token: "number" }],
      [/[\d][\d_]*(\.[\d][\d_]*)?[eE][+-][\d_]+(@floatSuffixes)?/, { token: "number" }],
      [/\b(\d\.?[\d_]*)(@floatSuffixes)?\b/, { token: "number" }],
      [/(0x[\da-fA-F]+)_?(@intSuffixes)?/, { token: "number" }],
      [/[\d][\d_]*(@intSuffixes?)?/, { token: "number" }]
    ]
  }
};



/***/ }),

/***/ 36090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sb/sb.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "sb",
  extensions: [".sb"],
  aliases: ["Small Basic", "sb"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 86038));
    }
  }
});


/***/ }),

/***/ 86038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/sb/sb.ts
var conf = {
  comments: {
    lineComment: "'"
  },
  brackets: [
    ["(", ")"],
    ["[", "]"],
    ["If", "EndIf"],
    ["While", "EndWhile"],
    ["For", "EndFor"],
    ["Sub", "EndSub"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".sb",
  ignoreCase: true,
  brackets: [
    { token: "delimiter.array", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "keyword.tag-if", open: "If", close: "EndIf" },
    { token: "keyword.tag-while", open: "While", close: "EndWhile" },
    { token: "keyword.tag-for", open: "For", close: "EndFor" },
    { token: "keyword.tag-sub", open: "Sub", close: "EndSub" }
  ],
  keywords: [
    "Else",
    "ElseIf",
    "EndFor",
    "EndIf",
    "EndSub",
    "EndWhile",
    "For",
    "Goto",
    "If",
    "Step",
    "Sub",
    "Then",
    "To",
    "While"
  ],
  tagwords: ["If", "Sub", "While", "For"],
  operators: [">", "<", "<>", "<=", ">=", "And", "Or", "+", "-", "*", "/", "="],
  identifier: /[a-zA-Z_][\w]*/,
  symbols: /[=><:+\-*\/%\.,]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [/(@identifier)(?=[.])/, "type"],
      [
        /@identifier/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@operators": "operator",
            "@default": "variable.name"
          }
        }
      ],
      [
        /([.])(@identifier)/,
        {
          cases: {
            $2: ["delimiter", "type.member"],
            "@default": ""
          }
        }
      ],
      [/\d*\.\d+/, "number.float"],
      [/\d+/, "number"],
      [/[()\[\]]/, "@brackets"],
      [
        /@symbols/,
        {
          cases: {
            "@operators": "operator",
            "@default": "delimiter"
          }
        }
      ],
      [/"([^"\\]|\\.)*$/, "string.invalid"],
      [/"/, "string", "@string"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, ""],
      [/(\').*$/, "comment"]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"C?/, "string", "@pop"]
    ]
  }
};



/***/ }),

/***/ 4228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scala/scala.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "scala",
  extensions: [".scala", ".sc", ".sbt"],
  aliases: ["Scala", "scala", "SBT", "Sbt", "sbt", "Dotty", "dotty"],
  mimetypes: ["text/x-scala-source", "text/x-scala", "text/x-sbt", "text/x-dotty"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 45742));
    }
  }
});


/***/ }),

/***/ 45742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scala/scala.ts
var conf = {
  wordPattern: /(unary_[@~!#%^&*()\-=+\\|:<>\/?]+)|([a-zA-Z_$][\w$]*?_=)|(`[^`]+`)|([a-zA-Z_$][\w$]*)/g,
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
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
      end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
    }
  }
};
var language = {
  tokenPostfix: ".scala",
  keywords: [
    "asInstanceOf",
    "catch",
    "class",
    "classOf",
    "def",
    "do",
    "else",
    "extends",
    "finally",
    "for",
    "foreach",
    "forSome",
    "if",
    "import",
    "isInstanceOf",
    "macro",
    "match",
    "new",
    "object",
    "package",
    "return",
    "throw",
    "trait",
    "try",
    "type",
    "until",
    "val",
    "var",
    "while",
    "with",
    "yield",
    "given",
    "enum",
    "then"
  ],
  softKeywords: ["as", "export", "extension", "end", "derives", "on"],
  constants: ["true", "false", "null", "this", "super"],
  modifiers: [
    "abstract",
    "final",
    "implicit",
    "lazy",
    "override",
    "private",
    "protected",
    "sealed"
  ],
  softModifiers: ["inline", "opaque", "open", "transparent", "using"],
  name: /(?:[a-z_$][\w$]*|`[^`]+`)/,
  type: /(?:[A-Z][\w$]*)/,
  symbols: /[=><!~?:&|+\-*\/^\\%@#]+/,
  digits: /\d+(_+\d+)*/,
  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
  escapes: /\\(?:[btnfr\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  fstring_conv: /[bBhHsScCdoxXeEfgGaAt]|[Tn](?:[HIklMSLNpzZsQ]|[BbhAaCYyjmde]|[RTrDFC])/,
  tokenizer: {
    root: [
      [/\braw"""/, { token: "string.quote", bracket: "@open", next: "@rawstringt" }],
      [/\braw"/, { token: "string.quote", bracket: "@open", next: "@rawstring" }],
      [/\bs"""/, { token: "string.quote", bracket: "@open", next: "@sstringt" }],
      [/\bs"/, { token: "string.quote", bracket: "@open", next: "@sstring" }],
      [/\bf""""/, { token: "string.quote", bracket: "@open", next: "@fstringt" }],
      [/\bf"/, { token: "string.quote", bracket: "@open", next: "@fstring" }],
      [/"""/, { token: "string.quote", bracket: "@open", next: "@stringt" }],
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
      [/(@digits)[eE]([\-+]?(@digits))?[fFdD]?/, "number.float", "@allowMethod"],
      [/(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/, "number.float", "@allowMethod"],
      [/0[xX](@hexdigits)[Ll]?/, "number.hex", "@allowMethod"],
      [/(@digits)[fFdD]/, "number.float", "@allowMethod"],
      [/(@digits)[lL]?/, "number", "@allowMethod"],
      [/\b_\*/, "key"],
      [/\b(_)\b/, "keyword", "@allowMethod"],
      [/\bimport\b/, "keyword", "@import"],
      [/\b(case)([ \t]+)(class)\b/, ["keyword.modifier", "white", "keyword"]],
      [/\bcase\b/, "keyword", "@case"],
      [/\bva[lr]\b/, "keyword", "@vardef"],
      [
        /\b(def)([ \t]+)((?:unary_)?@symbols|@name(?:_=)|@name)/,
        ["keyword", "white", "identifier"]
      ],
      [/@name(?=[ \t]*:(?!:))/, "variable"],
      [/(\.)(@name|@symbols)/, ["operator", { token: "@rematch", next: "@allowMethod" }]],
      [/([{(])(\s*)(@name(?=\s*=>))/, ["@brackets", "white", "variable"]],
      [
        /@name/,
        {
          cases: {
            "@keywords": "keyword",
            "@softKeywords": "keyword",
            "@modifiers": "keyword.modifier",
            "@softModifiers": "keyword.modifier",
            "@constants": {
              token: "constant",
              next: "@allowMethod"
            },
            "@default": {
              token: "identifier",
              next: "@allowMethod"
            }
          }
        }
      ],
      [/@type/, "type", "@allowMethod"],
      { include: "@whitespace" },
      [/@[a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*)*/, "annotation"],
      [/[{(]/, "@brackets"],
      [/[})]/, "@brackets", "@allowMethod"],
      [/\[/, "operator.square"],
      [/](?!\s*(?:va[rl]|def|type)\b)/, "operator.square", "@allowMethod"],
      [/]/, "operator.square"],
      [/([=-]>|<-|>:|<:|:>|<%)(?=[\s\w()[\]{},\."'`])/, "keyword"],
      [/@symbols/, "operator"],
      [/[;,\.]/, "delimiter"],
      [/'[a-zA-Z$][\w$]*(?!')/, "attribute.name"],
      [/'[^\\']'/, "string", "@allowMethod"],
      [/(')(@escapes)(')/, ["string", "string.escape", { token: "string", next: "@allowMethod" }]],
      [/'/, "string.invalid"]
    ],
    import: [
      [/;/, "delimiter", "@pop"],
      [/^|$/, "", "@pop"],
      [/[ \t]+/, "white"],
      [/[\n\r]+/, "white", "@pop"],
      [/\/\*/, "comment", "@comment"],
      [/@name|@type/, "type"],
      [/[(){}]/, "@brackets"],
      [/[[\]]/, "operator.square"],
      [/[\.,]/, "delimiter"]
    ],
    allowMethod: [
      [/^|$/, "", "@pop"],
      [/[ \t]+/, "white"],
      [/[\n\r]+/, "white", "@pop"],
      [/\/\*/, "comment", "@comment"],
      [/(?==>[\s\w([{])/, "keyword", "@pop"],
      [
        /(@name|@symbols)(?=[ \t]*[[({"'`]|[ \t]+(?:[+-]?\.?\d|\w))/,
        {
          cases: {
            "@keywords": { token: "keyword", next: "@pop" },
            "->|<-|>:|<:|<%": { token: "keyword", next: "@pop" },
            "@default": { token: "@rematch", next: "@pop" }
          }
        }
      ],
      ["", "", "@pop"]
    ],
    comment: [
      [/[^\/*]+/, "comment"],
      [/\/\*/, "comment", "@push"],
      [/\*\//, "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    case: [
      [/\b_\*/, "key"],
      [/\b(_|true|false|null|this|super)\b/, "keyword", "@allowMethod"],
      [/\bif\b|=>/, "keyword", "@pop"],
      [/`[^`]+`/, "identifier", "@allowMethod"],
      [/@name/, "variable", "@allowMethod"],
      [/:::?|\||@(?![a-z_$])/, "keyword"],
      { include: "@root" }
    ],
    vardef: [
      [/\b_\*/, "key"],
      [/\b(_|true|false|null|this|super)\b/, "keyword"],
      [/@name/, "variable"],
      [/:::?|\||@(?![a-z_$])/, "keyword"],
      [/=|:(?!:)/, "operator", "@pop"],
      [/$/, "white", "@pop"],
      { include: "@root" }
    ],
    string: [
      [/[^\\"\n\r]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [
        /"/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ]
    ],
    stringt: [
      [/[^\\"\n\r]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/"(?=""")/, "string"],
      [
        /"""/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/"/, "string"]
    ],
    fstring: [
      [/@escapes/, "string.escape"],
      [
        /"/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/\$\$/, "string"],
      [/(\$)([a-z_]\w*)/, ["operator", "identifier"]],
      [/\$\{/, "operator", "@interp"],
      [/%%/, "string"],
      [
        /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
        ["metatag", "keyword.modifier", "number", "metatag"]
      ],
      [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ["metatag", "number", "metatag"]],
      [/(%)([\-#+ 0,(])(@fstring_conv)/, ["metatag", "keyword.modifier", "metatag"]],
      [/(%)(@fstring_conv)/, ["metatag", "metatag"]],
      [/./, "string"]
    ],
    fstringt: [
      [/@escapes/, "string.escape"],
      [/"(?=""")/, "string"],
      [
        /"""/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/\$\$/, "string"],
      [/(\$)([a-z_]\w*)/, ["operator", "identifier"]],
      [/\$\{/, "operator", "@interp"],
      [/%%/, "string"],
      [
        /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
        ["metatag", "keyword.modifier", "number", "metatag"]
      ],
      [/(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/, ["metatag", "number", "metatag"]],
      [/(%)([\-#+ 0,(])(@fstring_conv)/, ["metatag", "keyword.modifier", "metatag"]],
      [/(%)(@fstring_conv)/, ["metatag", "metatag"]],
      [/./, "string"]
    ],
    sstring: [
      [/@escapes/, "string.escape"],
      [
        /"/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/\$\$/, "string"],
      [/(\$)([a-z_]\w*)/, ["operator", "identifier"]],
      [/\$\{/, "operator", "@interp"],
      [/./, "string"]
    ],
    sstringt: [
      [/@escapes/, "string.escape"],
      [/"(?=""")/, "string"],
      [
        /"""/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/\$\$/, "string"],
      [/(\$)([a-z_]\w*)/, ["operator", "identifier"]],
      [/\$\{/, "operator", "@interp"],
      [/./, "string"]
    ],
    interp: [[/{/, "operator", "@push"], [/}/, "operator", "@pop"], { include: "@root" }],
    rawstring: [
      [/[^"]/, "string"],
      [
        /"/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ]
    ],
    rawstringt: [
      [/[^"]/, "string"],
      [/"(?=""")/, "string"],
      [
        /"""/,
        {
          token: "string.quote",
          bracket: "@close",
          switchTo: "@allowMethod"
        }
      ],
      [/"/, "string"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ]
  }
};



/***/ }),

/***/ 80729:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scheme/scheme.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "scheme",
  extensions: [".scm", ".ss", ".sch", ".rkt"],
  aliases: ["scheme", "Scheme"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 28974));
    }
  }
});


/***/ }),

/***/ 28974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scheme/scheme.ts
var conf = {
  comments: {
    lineComment: ";",
    blockComment: ["#|", "|#"]
  },
  brackets: [
    ["(", ")"],
    ["{", "}"],
    ["[", "]"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ]
};
var language = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".scheme",
  brackets: [
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" }
  ],
  keywords: [
    "case",
    "do",
    "let",
    "loop",
    "if",
    "else",
    "when",
    "cons",
    "car",
    "cdr",
    "cond",
    "lambda",
    "lambda*",
    "syntax-rules",
    "format",
    "set!",
    "quote",
    "eval",
    "append",
    "list",
    "list?",
    "member?",
    "load"
  ],
  constants: ["#t", "#f"],
  operators: ["eq?", "eqv?", "equal?", "and", "or", "not", "null?"],
  tokenizer: {
    root: [
      [/#[xXoObB][0-9a-fA-F]+/, "number.hex"],
      [/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/, "number.float"],
      [
        /(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,
        ["keyword", "white", "variable"]
      ],
      { include: "@whitespace" },
      { include: "@strings" },
      [
        /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@constants": "constant",
            "@operators": "operators",
            "@default": "identifier"
          }
        }
      ]
    ],
    comment: [
      [/[^\|#]+/, "comment"],
      [/#\|/, "comment", "@push"],
      [/\|#/, "comment", "@pop"],
      [/[\|#]/, "comment"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/#\|/, "comment", "@comment"],
      [/;.*$/, "comment"]
    ],
    strings: [
      [/"$/, "string", "@popall"],
      [/"(?=.)/, "string", "@multiLineString"]
    ],
    multiLineString: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string.escape"],
      [/"/, "string", "@popall"],
      [/\\$/, "string"]
    ]
  }
};



/***/ }),

/***/ 57099:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scss/scss.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "scss",
  extensions: [".scss"],
  aliases: ["Sass", "sass", "scss"],
  mimetypes: ["text/x-scss", "text/scss"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 64712));
    }
  }
});


/***/ }),

/***/ 64712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: function() { return /* binding */ conf; },
/* harmony export */   language: function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/scss/scss.ts
var conf = {
  wordPattern: /(#?-?\d*\.\d\w*%?)|([@$#!.:]?[\w-?]+%?)|[@#!.]/g,
  comments: {
    blockComment: ["/*", "*/"],
    lineComment: "//"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
      end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
    }
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".scss",
  ws: "[ 	\n\r\f]*",
  identifier: "-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  tokenizer: {
    root: [{ include: "@selector" }],
    selector: [
      { include: "@comments" },
      { include: "@import" },
      { include: "@variabledeclaration" },
      { include: "@warndebug" },
      ["[@](include)", { token: "keyword", next: "@includedeclaration" }],
      [
        "[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",
        { token: "keyword", next: "@keyframedeclaration" }
      ],
      ["[@](page|content|font-face|-moz-document)", { token: "keyword" }],
      ["[@](charset|namespace)", { token: "keyword", next: "@declarationbody" }],
      ["[@](function)", { token: "keyword", next: "@functiondeclaration" }],
      ["[@](mixin)", { token: "keyword", next: "@mixindeclaration" }],
      ["url(\\-prefix)?\\(", { token: "meta", next: "@urldeclaration" }],
      { include: "@controlstatement" },
      { include: "@selectorname" },
      ["[&\\*]", "tag"],
      ["[>\\+,]", "delimiter"],
      ["\\[", { token: "delimiter.bracket", next: "@selectorattribute" }],
      ["{", { token: "delimiter.curly", next: "@selectorbody" }]
    ],
    selectorbody: [
      ["[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))", "attribute.name", "@rulevalue"],
      { include: "@selector" },
      ["[@](extend)", { token: "keyword", next: "@extendbody" }],
      ["[@](return)", { token: "keyword", next: "@declarationbody" }],
      ["}", { token: "delimiter.curly", next: "@pop" }]
    ],
    selectorname: [
      ["#{", { token: "meta", next: "@variableinterpolation" }],
      ["(\\.|#(?=[^{])|%|(@identifier)|:)+", "tag"]
    ],
    selectorattribute: [{ include: "@term" }, ["]", { token: "delimiter.bracket", next: "@pop" }]],
    term: [
      { include: "@comments" },
      ["url(\\-prefix)?\\(", { token: "meta", next: "@urldeclaration" }],
      { include: "@functioninvocation" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@variablereference" },
      ["(and\\b|or\\b|not\\b)", "operator"],
      { include: "@name" },
      ["([<>=\\+\\-\\*\\/\\^\\|\\~,])", "operator"],
      [",", "delimiter"],
      ["!default", "literal"],
      ["\\(", { token: "delimiter.parenthesis", next: "@parenthizedterm" }]
    ],
    rulevalue: [
      { include: "@term" },
      ["!important", "literal"],
      [";", "delimiter", "@pop"],
      ["{", { token: "delimiter.curly", switchTo: "@nestedproperty" }],
      ["(?=})", { token: "", next: "@pop" }]
    ],
    nestedproperty: [
      ["[*_]?@identifier@ws:", "attribute.name", "@rulevalue"],
      { include: "@comments" },
      ["}", { token: "delimiter.curly", next: "@pop" }]
    ],
    warndebug: [["[@](warn|debug)", { token: "keyword", next: "@declarationbody" }]],
    import: [["[@](import)", { token: "keyword", next: "@declarationbody" }]],
    variabledeclaration: [
      ["\\$@identifier@ws:", "variable.decl", "@declarationbody"]
    ],
    urldeclaration: [
      { include: "@strings" },
      ["[^)\r\n]+", "string"],
      ["\\)", { token: "meta", next: "@pop" }]
    ],
    parenthizedterm: [
      { include: "@term" },
      ["\\)", { token: "delimiter.parenthesis", next: "@pop" }]
    ],
    declarationbody: [
      { include: "@term" },
      [";", "delimiter", "@pop"],
      ["(?=})", { token: "", next: "@pop" }]
    ],
    extendbody: [
      { include: "@selectorname" },
      ["!optional", "literal"],
      [";", "delimiter", "@pop"],
      ["(?=})", { token: "", next: "@pop" }]
    ],
    variablereference: [
      ["\\$@identifier", "variable.ref"],
      ["\\.\\.\\.", "operator"],
      ["#{", { token: "meta", next: "@variableinterpolation" }]
    ],
    variableinterpolation: [
      { include: "@variablereference" },
      ["}", { token: "meta", next: "@pop" }]
    ],
    comments: [
      ["\\/\\*", "comment", "@comment"],
      ["\\/\\/+.*", "comment"]
    ],
    comment: [
      ["\\*\\/", "comment", "@pop"],
      [".", "comment"]
    ],
    name: [["@identifier", "attribute.value"]],
    numbers: [
      ["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?", { token: "number", next: "@units" }],
      ["#[0-9a-fA-F_]+(?!\\w)", "number.hex"]
    ],
    units: [
      [
        "(em|ex|ch|rem|fr|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?",
        "number",
        "@pop"
      ]
    ],
    functiondeclaration: [
      ["@identifier@ws\\(", { token: "meta", next: "@parameterdeclaration" }],
      ["{", { token: "delimiter.curly", switchTo: "@functionbody" }]
    ],
    mixindeclaration: [
      ["@identifier@ws\\(", { token: "meta", next: "@parameterdeclaration" }],
      ["@identifier", "meta"],
      ["{", { token: "delimiter.curly", switchTo: "@selectorbody" }]
    ],
    parameterdeclaration: [
      ["\\$@identifier@ws:", "variable.decl"],
      ["\\.\\.\\.", "operator"],
      [",", "delimiter"],
      { include: "@term" },
      ["\\)", { token: "meta", next: "@pop" }]
    ],
    includedeclaration: [
      { include: "@functioninvocation" },
      ["@identifier", "meta"],
      [";", "delimiter", "@pop"],
      ["(?=})", { token: "", next: "@pop" }],
      ["{", { token: "delimiter.curly", switchTo: "@selectorbody" }]
    ],
    keyframedeclaration: [
      ["@identifier", "meta"],
      ["{", { token: "delimiter.curly", switchTo: "@keyframebody" }]
    ],
    keyframebody: [
      { include: "@term" },
      ["{", { token: "delimiter.curly", next: "@selectorbody" }],
      ["}", { token: "delimiter.curly", next: "@pop" }]
    ],
    controlstatement: [
      [
        "[@](if|else|for|while|each|media)",
        { token: "keyword.flow", next: "@controlstatementdeclaration" }
      ]
    ],
    controlstatementdeclaration: [
      ["(in|from|through|if|to)\\b", { token: "keyword.flow" }],
      { include: "@term" },
      ["{", { token: "delimiter.curly", switchTo: "@selectorbody" }]
    ],
    functionbody: [
      ["[@](return)", { token: "keyword" }],
      { include: "@variabledeclaration" },
      { include: "@term" },
      { include: "@controlstatement" },
      [";", "delimiter"],
      ["}", { token: "delimiter.curly", next: "@pop" }]
    ],
    functioninvocation: [["@identifier\\(", { token: "meta", next: "@functionarguments" }]],
    functionarguments: [
      ["\\$@identifier@ws:", "attribute.name"],
      ["[,]", "delimiter"],
      { include: "@term" },
      ["\\)", { token: "meta", next: "@pop" }]
    ],
    strings: [
      ['~?"', { token: "string.delimiter", next: "@stringenddoublequote" }],
      ["~?'", { token: "string.delimiter", next: "@stringendquote" }]
    ],
    stringenddoublequote: [
      ["\\\\.", "string"],
      ['"', { token: "string.delimiter", next: "@pop" }],
      [".", "string"]
    ],
    stringendquote: [
      ["\\\\.", "string"],
      ["'", { token: "string.delimiter", next: "@pop" }],
      [".", "string"]
    ]
  }
};



/***/ })

}]);