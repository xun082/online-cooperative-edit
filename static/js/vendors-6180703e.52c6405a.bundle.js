"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-6180703e"],{

/***/ 20321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/markdown/markdown.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "markdown",
  extensions: [".md", ".markdown", ".mdown", ".mkdn", ".mkd", ".mdwn", ".mdtxt", ".mdtext"],
  aliases: ["Markdown", "markdown"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 12418));
    }
  }
});


/***/ }),

/***/ 12418:
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

// src/basic-languages/markdown/markdown.ts
var conf = {
  comments: {
    blockComment: ["<!--", "-->"]
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
  tokenPostfix: ".md",
  control: /[\\`*_\[\]{}()#+\-\.!]/,
  noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
  escapes: /\\(?:@control)/,
  jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
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
  tokenizer: {
    root: [
      [/^\s*\|/, "@rematch", "@table_header"],
      [/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/, ["white", "keyword", "keyword", "keyword"]],
      [/^\s*(=+|\-+)\s*$/, "keyword"],
      [/^\s*((\*[ ]?)+)\s*$/, "meta.separator"],
      [/^\s*>+/, "comment"],
      [/^\s*([\*\-+:]|\d+\.)\s/, "keyword"],
      [/^(\t|[ ]{4})[^ ].*$/, "string"],
      [/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/, { token: "string", next: "@codeblock" }],
      [
        /^\s*```\s*((?:\w|[\/\-#])+).*$/,
        { token: "string", next: "@codeblockgh", nextEmbedded: "$1" }
      ],
      [/^\s*```\s*$/, { token: "string", next: "@codeblock" }],
      { include: "@linecontent" }
    ],
    table_header: [
      { include: "@table_common" },
      [/[^\|]+/, "keyword.table.header"]
    ],
    table_body: [{ include: "@table_common" }, { include: "@linecontent" }],
    table_common: [
      [/\s*[\-:]+\s*/, { token: "keyword", switchTo: "table_body" }],
      [/^\s*\|/, "keyword.table.left"],
      [/^\s*[^\|]/, "@rematch", "@pop"],
      [/^\s*$/, "@rematch", "@pop"],
      [
        /\|/,
        {
          cases: {
            "@eos": "keyword.table.right",
            "@default": "keyword.table.middle"
          }
        }
      ]
    ],
    codeblock: [
      [/^\s*~~~\s*$/, { token: "string", next: "@pop" }],
      [/^\s*```\s*$/, { token: "string", next: "@pop" }],
      [/.*$/, "variable.source"]
    ],
    codeblockgh: [
      [/```\s*$/, { token: "string", next: "@pop", nextEmbedded: "@pop" }],
      [/[^`]+/, "variable.source"]
    ],
    linecontent: [
      [/&\w+;/, "string.escape"],
      [/@escapes/, "escape"],
      [/\b__([^\\_]|@escapes|_(?!_))+__\b/, "strong"],
      [/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/, "strong"],
      [/\b_[^_]+_\b/, "emphasis"],
      [/\*([^\\*]|@escapes)+\*/, "emphasis"],
      [/`([^\\`]|@escapes)+`/, "variable"],
      [/\{+[^}]+\}+/, "string.target"],
      [/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/, ["string.link", "", "string.link"]],
      [/(!?\[)((?:[^\]\\]|@escapes)*)(\])/, "string.link"],
      { include: "html" }
    ],
    html: [
      [/<(\w+)\/>/, "tag"],
      [
        /<(\w+)(\-|\w)*/,
        {
          cases: {
            "@empty": { token: "tag", next: "@tag.$1" },
            "@default": { token: "tag", next: "@tag.$1" }
          }
        }
      ],
      [/<\/(\w+)(\-|\w)*\s*>/, { token: "tag" }],
      [/<!--/, "comment", "@comment"]
    ],
    comment: [
      [/[^<\-]+/, "comment.content"],
      [/-->/, "comment", "@pop"],
      [/<!--/, "comment.content.invalid"],
      [/[<\-]/, "comment.content"]
    ],
    tag: [
      [/[ \t\r\n]+/, "white"],
      [
        /(type)(\s*=\s*)(")([^"]+)(")/,
        [
          "attribute.name.html",
          "delimiter.html",
          "string.html",
          { token: "string.html", switchTo: "@tag.$S2.$4" },
          "string.html"
        ]
      ],
      [
        /(type)(\s*=\s*)(')([^']+)(')/,
        [
          "attribute.name.html",
          "delimiter.html",
          "string.html",
          { token: "string.html", switchTo: "@tag.$S2.$4" },
          "string.html"
        ]
      ],
      [/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/, ["attribute.name.html", "delimiter.html", "string.html"]],
      [/\w+/, "attribute.name.html"],
      [/\/>/, "tag", "@pop"],
      [
        />/,
        {
          cases: {
            "$S2==style": {
              token: "tag",
              switchTo: "embeddedStyle",
              nextEmbedded: "text/css"
            },
            "$S2==script": {
              cases: {
                $S3: {
                  token: "tag",
                  switchTo: "embeddedScript",
                  nextEmbedded: "$S3"
                },
                "@default": {
                  token: "tag",
                  switchTo: "embeddedScript",
                  nextEmbedded: "text/javascript"
                }
              }
            },
            "@default": { token: "tag", next: "@pop" }
          }
        }
      ]
    ],
    embeddedStyle: [
      [/[^<]+/, ""],
      [/<\/style\s*>/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }],
      [/</, ""]
    ],
    embeddedScript: [
      [/[^<]+/, ""],
      [/<\/script\s*>/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }],
      [/</, ""]
    ]
  }
};



/***/ }),

/***/ 78157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mips/mips.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "mips",
  extensions: [".s"],
  aliases: ["MIPS", "MIPS-V"],
  mimetypes: ["text/x-mips", "text/mips", "text/plaintext"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 45290));
    }
  }
});


/***/ }),

/***/ 45290:
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

// src/basic-languages/mips/mips.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    blockComment: ["###", "###"],
    lineComment: "#"
  },
  folding: {
    markers: {
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
var language = {
  defaultToken: "",
  ignoreCase: false,
  tokenPostfix: ".mips",
  regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
  keywords: [
    ".data",
    ".text",
    "syscall",
    "trap",
    "add",
    "addu",
    "addi",
    "addiu",
    "and",
    "andi",
    "div",
    "divu",
    "mult",
    "multu",
    "nor",
    "or",
    "ori",
    "sll",
    "slv",
    "sra",
    "srav",
    "srl",
    "srlv",
    "sub",
    "subu",
    "xor",
    "xori",
    "lhi",
    "lho",
    "lhi",
    "llo",
    "slt",
    "slti",
    "sltu",
    "sltiu",
    "beq",
    "bgtz",
    "blez",
    "bne",
    "j",
    "jal",
    "jalr",
    "jr",
    "lb",
    "lbu",
    "lh",
    "lhu",
    "lw",
    "li",
    "la",
    "sb",
    "sh",
    "sw",
    "mfhi",
    "mflo",
    "mthi",
    "mtlo",
    "move"
  ],
  symbols: /[\.,\:]+/,
  escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [/\$[a-zA-Z_]\w*/, "variable.predefined"],
      [
        /[.a-zA-Z_]\w*/,
        {
          cases: {
            this: "variable.predefined",
            "@keywords": { token: "keyword.$0" },
            "@default": ""
          }
        }
      ],
      [/[ \t\r\n]+/, ""],
      [/#.*$/, "comment"],
      ["///", { token: "regexp", next: "@hereregexp" }],
      [/^(\s*)(@regEx)/, ["", "regexp"]],
      [/(\,)(\s*)(@regEx)/, ["delimiter", "", "regexp"]],
      [/(\:)(\s*)(@regEx)/, ["delimiter", "", "regexp"]],
      [/@symbols/, "delimiter"],
      [/\d+[eE]([\-+]?\d+)?/, "number.float"],
      [/\d+\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/0[0-7]+(?!\d)/, "number.octal"],
      [/\d+/, "number"],
      [/[,.]/, "delimiter"],
      [/"""/, "string", '@herestring."""'],
      [/'''/, "string", "@herestring.'''"],
      [
        /"/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: '@string."' }
          }
        }
      ],
      [
        /'/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: "@string.'" }
          }
        }
      ]
    ],
    string: [
      [/[^"'\#\\]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\./, "string.escape.invalid"],
      [/\./, "string.escape.invalid"],
      [
        /#{/,
        {
          cases: {
            '$S2=="': {
              token: "string",
              next: "root.interpolatedstring"
            },
            "@default": "string"
          }
        }
      ],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/#/, "string"]
    ],
    herestring: [
      [
        /("""|''')/,
        {
          cases: {
            "$1==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/[^#\\'"]+/, "string"],
      [/['"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\./, "string.escape.invalid"],
      [/#{/, { token: "string.quote", next: "root.interpolatedstring" }],
      [/#/, "string"]
    ],
    comment: [
      [/[^#]+/, "comment"],
      [/#/, "comment"]
    ],
    hereregexp: [
      [/[^\\\/#]+/, "regexp"],
      [/\\./, "regexp"],
      [/#.*$/, "comment"],
      ["///[igm]*", { token: "regexp", next: "@pop" }],
      [/\//, "regexp"]
    ]
  }
};



/***/ }),

/***/ 90194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/msdax/msdax.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "msdax",
  extensions: [".dax", ".msdax"],
  aliases: ["DAX", "MSDAX"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 67852));
    }
  }
});


/***/ }),

/***/ 67852:
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

// src/basic-languages/msdax/msdax.ts
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["[", "]"],
    ["(", ")"],
    ["{", "}"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "'", close: "'", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] },
    { open: "{", close: "}", notIn: ["string", "comment"] }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".msdax",
  ignoreCase: true,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "{", close: "}", token: "delimiter.brackets" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: [
    "VAR",
    "RETURN",
    "NOT",
    "EVALUATE",
    "DATATABLE",
    "ORDER",
    "BY",
    "START",
    "AT",
    "DEFINE",
    "MEASURE",
    "ASC",
    "DESC",
    "IN",
    "BOOLEAN",
    "DOUBLE",
    "INTEGER",
    "DATETIME",
    "CURRENCY",
    "STRING"
  ],
  functions: [
    "CLOSINGBALANCEMONTH",
    "CLOSINGBALANCEQUARTER",
    "CLOSINGBALANCEYEAR",
    "DATEADD",
    "DATESBETWEEN",
    "DATESINPERIOD",
    "DATESMTD",
    "DATESQTD",
    "DATESYTD",
    "ENDOFMONTH",
    "ENDOFQUARTER",
    "ENDOFYEAR",
    "FIRSTDATE",
    "FIRSTNONBLANK",
    "LASTDATE",
    "LASTNONBLANK",
    "NEXTDAY",
    "NEXTMONTH",
    "NEXTQUARTER",
    "NEXTYEAR",
    "OPENINGBALANCEMONTH",
    "OPENINGBALANCEQUARTER",
    "OPENINGBALANCEYEAR",
    "PARALLELPERIOD",
    "PREVIOUSDAY",
    "PREVIOUSMONTH",
    "PREVIOUSQUARTER",
    "PREVIOUSYEAR",
    "SAMEPERIODLASTYEAR",
    "STARTOFMONTH",
    "STARTOFQUARTER",
    "STARTOFYEAR",
    "TOTALMTD",
    "TOTALQTD",
    "TOTALYTD",
    "ADDCOLUMNS",
    "ADDMISSINGITEMS",
    "ALL",
    "ALLEXCEPT",
    "ALLNOBLANKROW",
    "ALLSELECTED",
    "CALCULATE",
    "CALCULATETABLE",
    "CALENDAR",
    "CALENDARAUTO",
    "CROSSFILTER",
    "CROSSJOIN",
    "CURRENTGROUP",
    "DATATABLE",
    "DETAILROWS",
    "DISTINCT",
    "EARLIER",
    "EARLIEST",
    "EXCEPT",
    "FILTER",
    "FILTERS",
    "GENERATE",
    "GENERATEALL",
    "GROUPBY",
    "IGNORE",
    "INTERSECT",
    "ISONORAFTER",
    "KEEPFILTERS",
    "LOOKUPVALUE",
    "NATURALINNERJOIN",
    "NATURALLEFTOUTERJOIN",
    "RELATED",
    "RELATEDTABLE",
    "ROLLUP",
    "ROLLUPADDISSUBTOTAL",
    "ROLLUPGROUP",
    "ROLLUPISSUBTOTAL",
    "ROW",
    "SAMPLE",
    "SELECTCOLUMNS",
    "SUBSTITUTEWITHINDEX",
    "SUMMARIZE",
    "SUMMARIZECOLUMNS",
    "TOPN",
    "TREATAS",
    "UNION",
    "USERELATIONSHIP",
    "VALUES",
    "SUM",
    "SUMX",
    "PATH",
    "PATHCONTAINS",
    "PATHITEM",
    "PATHITEMREVERSE",
    "PATHLENGTH",
    "AVERAGE",
    "AVERAGEA",
    "AVERAGEX",
    "COUNT",
    "COUNTA",
    "COUNTAX",
    "COUNTBLANK",
    "COUNTROWS",
    "COUNTX",
    "DISTINCTCOUNT",
    "DIVIDE",
    "GEOMEAN",
    "GEOMEANX",
    "MAX",
    "MAXA",
    "MAXX",
    "MEDIAN",
    "MEDIANX",
    "MIN",
    "MINA",
    "MINX",
    "PERCENTILE.EXC",
    "PERCENTILE.INC",
    "PERCENTILEX.EXC",
    "PERCENTILEX.INC",
    "PRODUCT",
    "PRODUCTX",
    "RANK.EQ",
    "RANKX",
    "STDEV.P",
    "STDEV.S",
    "STDEVX.P",
    "STDEVX.S",
    "VAR.P",
    "VAR.S",
    "VARX.P",
    "VARX.S",
    "XIRR",
    "XNPV",
    "DATE",
    "DATEDIFF",
    "DATEVALUE",
    "DAY",
    "EDATE",
    "EOMONTH",
    "HOUR",
    "MINUTE",
    "MONTH",
    "NOW",
    "SECOND",
    "TIME",
    "TIMEVALUE",
    "TODAY",
    "WEEKDAY",
    "WEEKNUM",
    "YEAR",
    "YEARFRAC",
    "CONTAINS",
    "CONTAINSROW",
    "CUSTOMDATA",
    "ERROR",
    "HASONEFILTER",
    "HASONEVALUE",
    "ISBLANK",
    "ISCROSSFILTERED",
    "ISEMPTY",
    "ISERROR",
    "ISEVEN",
    "ISFILTERED",
    "ISLOGICAL",
    "ISNONTEXT",
    "ISNUMBER",
    "ISODD",
    "ISSUBTOTAL",
    "ISTEXT",
    "USERNAME",
    "USERPRINCIPALNAME",
    "AND",
    "FALSE",
    "IF",
    "IFERROR",
    "NOT",
    "OR",
    "SWITCH",
    "TRUE",
    "ABS",
    "ACOS",
    "ACOSH",
    "ACOT",
    "ACOTH",
    "ASIN",
    "ASINH",
    "ATAN",
    "ATANH",
    "BETA.DIST",
    "BETA.INV",
    "CEILING",
    "CHISQ.DIST",
    "CHISQ.DIST.RT",
    "CHISQ.INV",
    "CHISQ.INV.RT",
    "COMBIN",
    "COMBINA",
    "CONFIDENCE.NORM",
    "CONFIDENCE.T",
    "COS",
    "COSH",
    "COT",
    "COTH",
    "CURRENCY",
    "DEGREES",
    "EVEN",
    "EXP",
    "EXPON.DIST",
    "FACT",
    "FLOOR",
    "GCD",
    "INT",
    "ISO.CEILING",
    "LCM",
    "LN",
    "LOG",
    "LOG10",
    "MOD",
    "MROUND",
    "ODD",
    "PERMUT",
    "PI",
    "POISSON.DIST",
    "POWER",
    "QUOTIENT",
    "RADIANS",
    "RAND",
    "RANDBETWEEN",
    "ROUND",
    "ROUNDDOWN",
    "ROUNDUP",
    "SIGN",
    "SIN",
    "SINH",
    "SQRT",
    "SQRTPI",
    "TAN",
    "TANH",
    "TRUNC",
    "BLANK",
    "CONCATENATE",
    "CONCATENATEX",
    "EXACT",
    "FIND",
    "FIXED",
    "FORMAT",
    "LEFT",
    "LEN",
    "LOWER",
    "MID",
    "REPLACE",
    "REPT",
    "RIGHT",
    "SEARCH",
    "SUBSTITUTE",
    "TRIM",
    "UNICHAR",
    "UNICODE",
    "UPPER",
    "VALUE"
  ],
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      [/[;,.]/, "delimiter"],
      [/[({})]/, "@brackets"],
      [
        /[a-z_][a-zA-Z0-9_]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@functions": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/\/\/+.*/, "comment"],
      [/\/\*/, { token: "comment.quote", next: "@comment" }]
    ],
    comment: [
      [/[^*/]+/, "comment"],
      [/\*\//, { token: "comment.quote", next: "@pop" }],
      [/./, "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, "number"]
    ],
    strings: [
      [/N"/, { token: "string", next: "@string" }],
      [/"/, { token: "string", next: "@string" }]
    ],
    string: [
      [/[^"]+/, "string"],
      [/""/, "string"],
      [/"/, { token: "string", next: "@pop" }]
    ],
    complexIdentifiers: [
      [/\[/, { token: "identifier.quote", next: "@bracketedIdentifier" }],
      [/'/, { token: "identifier.quote", next: "@quotedIdentifier" }]
    ],
    bracketedIdentifier: [
      [/[^\]]+/, "identifier"],
      [/]]/, "identifier"],
      [/]/, { token: "identifier.quote", next: "@pop" }]
    ],
    quotedIdentifier: [
      [/[^']+/, "identifier"],
      [/''/, "identifier"],
      [/'/, { token: "identifier.quote", next: "@pop" }]
    ]
  }
};



/***/ }),

/***/ 43117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mysql/mysql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "mysql",
  extensions: [],
  aliases: ["MySQL", "mysql"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 33409));
    }
  }
});


/***/ }),

/***/ 33409:
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

// src/basic-languages/mysql/mysql.ts
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
    "ACCESSIBLE",
    "ADD",
    "ALL",
    "ALTER",
    "ANALYZE",
    "AND",
    "AS",
    "ASC",
    "ASENSITIVE",
    "BEFORE",
    "BETWEEN",
    "BIGINT",
    "BINARY",
    "BLOB",
    "BOTH",
    "BY",
    "CALL",
    "CASCADE",
    "CASE",
    "CHANGE",
    "CHAR",
    "CHARACTER",
    "CHECK",
    "COLLATE",
    "COLUMN",
    "CONDITION",
    "CONSTRAINT",
    "CONTINUE",
    "CONVERT",
    "CREATE",
    "CROSS",
    "CUBE",
    "CUME_DIST",
    "CURRENT_DATE",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "CURRENT_USER",
    "CURSOR",
    "DATABASE",
    "DATABASES",
    "DAY_HOUR",
    "DAY_MICROSECOND",
    "DAY_MINUTE",
    "DAY_SECOND",
    "DEC",
    "DECIMAL",
    "DECLARE",
    "DEFAULT",
    "DELAYED",
    "DELETE",
    "DENSE_RANK",
    "DESC",
    "DESCRIBE",
    "DETERMINISTIC",
    "DISTINCT",
    "DISTINCTROW",
    "DIV",
    "DOUBLE",
    "DROP",
    "DUAL",
    "EACH",
    "ELSE",
    "ELSEIF",
    "EMPTY",
    "ENCLOSED",
    "ESCAPED",
    "EXCEPT",
    "EXISTS",
    "EXIT",
    "EXPLAIN",
    "FALSE",
    "FETCH",
    "FIRST_VALUE",
    "FLOAT",
    "FLOAT4",
    "FLOAT8",
    "FOR",
    "FORCE",
    "FOREIGN",
    "FROM",
    "FULLTEXT",
    "FUNCTION",
    "GENERATED",
    "GET",
    "GRANT",
    "GROUP",
    "GROUPING",
    "GROUPS",
    "HAVING",
    "HIGH_PRIORITY",
    "HOUR_MICROSECOND",
    "HOUR_MINUTE",
    "HOUR_SECOND",
    "IF",
    "IGNORE",
    "IN",
    "INDEX",
    "INFILE",
    "INNER",
    "INOUT",
    "INSENSITIVE",
    "INSERT",
    "INT",
    "INT1",
    "INT2",
    "INT3",
    "INT4",
    "INT8",
    "INTEGER",
    "INTERVAL",
    "INTO",
    "IO_AFTER_GTIDS",
    "IO_BEFORE_GTIDS",
    "IS",
    "ITERATE",
    "JOIN",
    "JSON_TABLE",
    "KEY",
    "KEYS",
    "KILL",
    "LAG",
    "LAST_VALUE",
    "LATERAL",
    "LEAD",
    "LEADING",
    "LEAVE",
    "LEFT",
    "LIKE",
    "LIMIT",
    "LINEAR",
    "LINES",
    "LOAD",
    "LOCALTIME",
    "LOCALTIMESTAMP",
    "LOCK",
    "LONG",
    "LONGBLOB",
    "LONGTEXT",
    "LOOP",
    "LOW_PRIORITY",
    "MASTER_BIND",
    "MASTER_SSL_VERIFY_SERVER_CERT",
    "MATCH",
    "MAXVALUE",
    "MEDIUMBLOB",
    "MEDIUMINT",
    "MEDIUMTEXT",
    "MIDDLEINT",
    "MINUTE_MICROSECOND",
    "MINUTE_SECOND",
    "MOD",
    "MODIFIES",
    "NATURAL",
    "NOT",
    "NO_WRITE_TO_BINLOG",
    "NTH_VALUE",
    "NTILE",
    "NULL",
    "NUMERIC",
    "OF",
    "ON",
    "OPTIMIZE",
    "OPTIMIZER_COSTS",
    "OPTION",
    "OPTIONALLY",
    "OR",
    "ORDER",
    "OUT",
    "OUTER",
    "OUTFILE",
    "OVER",
    "PARTITION",
    "PERCENT_RANK",
    "PRECISION",
    "PRIMARY",
    "PROCEDURE",
    "PURGE",
    "RANGE",
    "RANK",
    "READ",
    "READS",
    "READ_WRITE",
    "REAL",
    "RECURSIVE",
    "REFERENCES",
    "REGEXP",
    "RELEASE",
    "RENAME",
    "REPEAT",
    "REPLACE",
    "REQUIRE",
    "RESIGNAL",
    "RESTRICT",
    "RETURN",
    "REVOKE",
    "RIGHT",
    "RLIKE",
    "ROW",
    "ROWS",
    "ROW_NUMBER",
    "SCHEMA",
    "SCHEMAS",
    "SECOND_MICROSECOND",
    "SELECT",
    "SENSITIVE",
    "SEPARATOR",
    "SET",
    "SHOW",
    "SIGNAL",
    "SMALLINT",
    "SPATIAL",
    "SPECIFIC",
    "SQL",
    "SQLEXCEPTION",
    "SQLSTATE",
    "SQLWARNING",
    "SQL_BIG_RESULT",
    "SQL_CALC_FOUND_ROWS",
    "SQL_SMALL_RESULT",
    "SSL",
    "STARTING",
    "STORED",
    "STRAIGHT_JOIN",
    "SYSTEM",
    "TABLE",
    "TERMINATED",
    "THEN",
    "TINYBLOB",
    "TINYINT",
    "TINYTEXT",
    "TO",
    "TRAILING",
    "TRIGGER",
    "TRUE",
    "UNDO",
    "UNION",
    "UNIQUE",
    "UNLOCK",
    "UNSIGNED",
    "UPDATE",
    "USAGE",
    "USE",
    "USING",
    "UTC_DATE",
    "UTC_TIME",
    "UTC_TIMESTAMP",
    "VALUES",
    "VARBINARY",
    "VARCHAR",
    "VARCHARACTER",
    "VARYING",
    "VIRTUAL",
    "WHEN",
    "WHERE",
    "WHILE",
    "WINDOW",
    "WITH",
    "WRITE",
    "XOR",
    "YEAR_MONTH",
    "ZEROFILL"
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
    "ABS",
    "ACOS",
    "ADDDATE",
    "ADDTIME",
    "AES_DECRYPT",
    "AES_ENCRYPT",
    "ANY_VALUE",
    "Area",
    "AsBinary",
    "AsWKB",
    "ASCII",
    "ASIN",
    "AsText",
    "AsWKT",
    "ASYMMETRIC_DECRYPT",
    "ASYMMETRIC_DERIVE",
    "ASYMMETRIC_ENCRYPT",
    "ASYMMETRIC_SIGN",
    "ASYMMETRIC_VERIFY",
    "ATAN",
    "ATAN2",
    "ATAN",
    "AVG",
    "BENCHMARK",
    "BIN",
    "BIT_AND",
    "BIT_COUNT",
    "BIT_LENGTH",
    "BIT_OR",
    "BIT_XOR",
    "Buffer",
    "CAST",
    "CEIL",
    "CEILING",
    "Centroid",
    "CHAR",
    "CHAR_LENGTH",
    "CHARACTER_LENGTH",
    "CHARSET",
    "COALESCE",
    "COERCIBILITY",
    "COLLATION",
    "COMPRESS",
    "CONCAT",
    "CONCAT_WS",
    "CONNECTION_ID",
    "Contains",
    "CONV",
    "CONVERT",
    "CONVERT_TZ",
    "ConvexHull",
    "COS",
    "COT",
    "COUNT",
    "CRC32",
    "CREATE_ASYMMETRIC_PRIV_KEY",
    "CREATE_ASYMMETRIC_PUB_KEY",
    "CREATE_DH_PARAMETERS",
    "CREATE_DIGEST",
    "Crosses",
    "CUME_DIST",
    "CURDATE",
    "CURRENT_DATE",
    "CURRENT_ROLE",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "CURRENT_USER",
    "CURTIME",
    "DATABASE",
    "DATE",
    "DATE_ADD",
    "DATE_FORMAT",
    "DATE_SUB",
    "DATEDIFF",
    "DAY",
    "DAYNAME",
    "DAYOFMONTH",
    "DAYOFWEEK",
    "DAYOFYEAR",
    "DECODE",
    "DEFAULT",
    "DEGREES",
    "DES_DECRYPT",
    "DES_ENCRYPT",
    "DENSE_RANK",
    "Dimension",
    "Disjoint",
    "Distance",
    "ELT",
    "ENCODE",
    "ENCRYPT",
    "EndPoint",
    "Envelope",
    "Equals",
    "EXP",
    "EXPORT_SET",
    "ExteriorRing",
    "EXTRACT",
    "ExtractValue",
    "FIELD",
    "FIND_IN_SET",
    "FIRST_VALUE",
    "FLOOR",
    "FORMAT",
    "FORMAT_BYTES",
    "FORMAT_PICO_TIME",
    "FOUND_ROWS",
    "FROM_BASE64",
    "FROM_DAYS",
    "FROM_UNIXTIME",
    "GEN_RANGE",
    "GEN_RND_EMAIL",
    "GEN_RND_PAN",
    "GEN_RND_SSN",
    "GEN_RND_US_PHONE",
    "GeomCollection",
    "GeomCollFromText",
    "GeometryCollectionFromText",
    "GeomCollFromWKB",
    "GeometryCollectionFromWKB",
    "GeometryCollection",
    "GeometryN",
    "GeometryType",
    "GeomFromText",
    "GeometryFromText",
    "GeomFromWKB",
    "GeometryFromWKB",
    "GET_FORMAT",
    "GET_LOCK",
    "GLength",
    "GREATEST",
    "GROUP_CONCAT",
    "GROUPING",
    "GTID_SUBSET",
    "GTID_SUBTRACT",
    "HEX",
    "HOUR",
    "ICU_VERSION",
    "IF",
    "IFNULL",
    "INET_ATON",
    "INET_NTOA",
    "INET6_ATON",
    "INET6_NTOA",
    "INSERT",
    "INSTR",
    "InteriorRingN",
    "Intersects",
    "INTERVAL",
    "IS_FREE_LOCK",
    "IS_IPV4",
    "IS_IPV4_COMPAT",
    "IS_IPV4_MAPPED",
    "IS_IPV6",
    "IS_USED_LOCK",
    "IS_UUID",
    "IsClosed",
    "IsEmpty",
    "ISNULL",
    "IsSimple",
    "JSON_APPEND",
    "JSON_ARRAY",
    "JSON_ARRAY_APPEND",
    "JSON_ARRAY_INSERT",
    "JSON_ARRAYAGG",
    "JSON_CONTAINS",
    "JSON_CONTAINS_PATH",
    "JSON_DEPTH",
    "JSON_EXTRACT",
    "JSON_INSERT",
    "JSON_KEYS",
    "JSON_LENGTH",
    "JSON_MERGE",
    "JSON_MERGE_PATCH",
    "JSON_MERGE_PRESERVE",
    "JSON_OBJECT",
    "JSON_OBJECTAGG",
    "JSON_OVERLAPS",
    "JSON_PRETTY",
    "JSON_QUOTE",
    "JSON_REMOVE",
    "JSON_REPLACE",
    "JSON_SCHEMA_VALID",
    "JSON_SCHEMA_VALIDATION_REPORT",
    "JSON_SEARCH",
    "JSON_SET",
    "JSON_STORAGE_FREE",
    "JSON_STORAGE_SIZE",
    "JSON_TABLE",
    "JSON_TYPE",
    "JSON_UNQUOTE",
    "JSON_VALID",
    "LAG",
    "LAST_DAY",
    "LAST_INSERT_ID",
    "LAST_VALUE",
    "LCASE",
    "LEAD",
    "LEAST",
    "LEFT",
    "LENGTH",
    "LineFromText",
    "LineStringFromText",
    "LineFromWKB",
    "LineStringFromWKB",
    "LineString",
    "LN",
    "LOAD_FILE",
    "LOCALTIME",
    "LOCALTIMESTAMP",
    "LOCATE",
    "LOG",
    "LOG10",
    "LOG2",
    "LOWER",
    "LPAD",
    "LTRIM",
    "MAKE_SET",
    "MAKEDATE",
    "MAKETIME",
    "MASK_INNER",
    "MASK_OUTER",
    "MASK_PAN",
    "MASK_PAN_RELAXED",
    "MASK_SSN",
    "MASTER_POS_WAIT",
    "MAX",
    "MBRContains",
    "MBRCoveredBy",
    "MBRCovers",
    "MBRDisjoint",
    "MBREqual",
    "MBREquals",
    "MBRIntersects",
    "MBROverlaps",
    "MBRTouches",
    "MBRWithin",
    "MD5",
    "MEMBER OF",
    "MICROSECOND",
    "MID",
    "MIN",
    "MINUTE",
    "MLineFromText",
    "MultiLineStringFromText",
    "MLineFromWKB",
    "MultiLineStringFromWKB",
    "MOD",
    "MONTH",
    "MONTHNAME",
    "MPointFromText",
    "MultiPointFromText",
    "MPointFromWKB",
    "MultiPointFromWKB",
    "MPolyFromText",
    "MultiPolygonFromText",
    "MPolyFromWKB",
    "MultiPolygonFromWKB",
    "MultiLineString",
    "MultiPoint",
    "MultiPolygon",
    "NAME_CONST",
    "NOT IN",
    "NOW",
    "NTH_VALUE",
    "NTILE",
    "NULLIF",
    "NumGeometries",
    "NumInteriorRings",
    "NumPoints",
    "OCT",
    "OCTET_LENGTH",
    "OLD_PASSWORD",
    "ORD",
    "Overlaps",
    "PASSWORD",
    "PERCENT_RANK",
    "PERIOD_ADD",
    "PERIOD_DIFF",
    "PI",
    "Point",
    "PointFromText",
    "PointFromWKB",
    "PointN",
    "PolyFromText",
    "PolygonFromText",
    "PolyFromWKB",
    "PolygonFromWKB",
    "Polygon",
    "POSITION",
    "POW",
    "POWER",
    "PS_CURRENT_THREAD_ID",
    "PS_THREAD_ID",
    "PROCEDURE ANALYSE",
    "QUARTER",
    "QUOTE",
    "RADIANS",
    "RAND",
    "RANDOM_BYTES",
    "RANK",
    "REGEXP_INSTR",
    "REGEXP_LIKE",
    "REGEXP_REPLACE",
    "REGEXP_REPLACE",
    "RELEASE_ALL_LOCKS",
    "RELEASE_LOCK",
    "REPEAT",
    "REPLACE",
    "REVERSE",
    "RIGHT",
    "ROLES_GRAPHML",
    "ROUND",
    "ROW_COUNT",
    "ROW_NUMBER",
    "RPAD",
    "RTRIM",
    "SCHEMA",
    "SEC_TO_TIME",
    "SECOND",
    "SESSION_USER",
    "SHA1",
    "SHA",
    "SHA2",
    "SIGN",
    "SIN",
    "SLEEP",
    "SOUNDEX",
    "SOURCE_POS_WAIT",
    "SPACE",
    "SQRT",
    "SRID",
    "ST_Area",
    "ST_AsBinary",
    "ST_AsWKB",
    "ST_AsGeoJSON",
    "ST_AsText",
    "ST_AsWKT",
    "ST_Buffer",
    "ST_Buffer_Strategy",
    "ST_Centroid",
    "ST_Collect",
    "ST_Contains",
    "ST_ConvexHull",
    "ST_Crosses",
    "ST_Difference",
    "ST_Dimension",
    "ST_Disjoint",
    "ST_Distance",
    "ST_Distance_Sphere",
    "ST_EndPoint",
    "ST_Envelope",
    "ST_Equals",
    "ST_ExteriorRing",
    "ST_FrechetDistance",
    "ST_GeoHash",
    "ST_GeomCollFromText",
    "ST_GeometryCollectionFromText",
    "ST_GeomCollFromTxt",
    "ST_GeomCollFromWKB",
    "ST_GeometryCollectionFromWKB",
    "ST_GeometryN",
    "ST_GeometryType",
    "ST_GeomFromGeoJSON",
    "ST_GeomFromText",
    "ST_GeometryFromText",
    "ST_GeomFromWKB",
    "ST_GeometryFromWKB",
    "ST_HausdorffDistance",
    "ST_InteriorRingN",
    "ST_Intersection",
    "ST_Intersects",
    "ST_IsClosed",
    "ST_IsEmpty",
    "ST_IsSimple",
    "ST_IsValid",
    "ST_LatFromGeoHash",
    "ST_Length",
    "ST_LineFromText",
    "ST_LineStringFromText",
    "ST_LineFromWKB",
    "ST_LineStringFromWKB",
    "ST_LineInterpolatePoint",
    "ST_LineInterpolatePoints",
    "ST_LongFromGeoHash",
    "ST_Longitude",
    "ST_MakeEnvelope",
    "ST_MLineFromText",
    "ST_MultiLineStringFromText",
    "ST_MLineFromWKB",
    "ST_MultiLineStringFromWKB",
    "ST_MPointFromText",
    "ST_MultiPointFromText",
    "ST_MPointFromWKB",
    "ST_MultiPointFromWKB",
    "ST_MPolyFromText",
    "ST_MultiPolygonFromText",
    "ST_MPolyFromWKB",
    "ST_MultiPolygonFromWKB",
    "ST_NumGeometries",
    "ST_NumInteriorRing",
    "ST_NumInteriorRings",
    "ST_NumPoints",
    "ST_Overlaps",
    "ST_PointAtDistance",
    "ST_PointFromGeoHash",
    "ST_PointFromText",
    "ST_PointFromWKB",
    "ST_PointN",
    "ST_PolyFromText",
    "ST_PolygonFromText",
    "ST_PolyFromWKB",
    "ST_PolygonFromWKB",
    "ST_Simplify",
    "ST_SRID",
    "ST_StartPoint",
    "ST_SwapXY",
    "ST_SymDifference",
    "ST_Touches",
    "ST_Transform",
    "ST_Union",
    "ST_Validate",
    "ST_Within",
    "ST_X",
    "ST_Y",
    "StartPoint",
    "STATEMENT_DIGEST",
    "STATEMENT_DIGEST_TEXT",
    "STD",
    "STDDEV",
    "STDDEV_POP",
    "STDDEV_SAMP",
    "STR_TO_DATE",
    "STRCMP",
    "SUBDATE",
    "SUBSTR",
    "SUBSTRING",
    "SUBSTRING_INDEX",
    "SUBTIME",
    "SUM",
    "SYSDATE",
    "SYSTEM_USER",
    "TAN",
    "TIME",
    "TIME_FORMAT",
    "TIME_TO_SEC",
    "TIMEDIFF",
    "TIMESTAMP",
    "TIMESTAMPADD",
    "TIMESTAMPDIFF",
    "TO_BASE64",
    "TO_DAYS",
    "TO_SECONDS",
    "Touches",
    "TRIM",
    "TRUNCATE",
    "UCASE",
    "UNCOMPRESS",
    "UNCOMPRESSED_LENGTH",
    "UNHEX",
    "UNIX_TIMESTAMP",
    "UpdateXML",
    "UPPER",
    "USER",
    "UTC_DATE",
    "UTC_TIME",
    "UTC_TIMESTAMP",
    "UUID",
    "UUID_SHORT",
    "UUID_TO_BIN",
    "VALIDATE_PASSWORD_STRENGTH",
    "VALUES",
    "VAR_POP",
    "VAR_SAMP",
    "VARIANCE",
    "VERSION",
    "WAIT_FOR_EXECUTED_GTID_SET",
    "WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS",
    "WEEK",
    "WEEKDAY",
    "WEEKOFYEAR",
    "WEIGHT_STRING",
    "Within",
    "X",
    "Y",
    "YEAR",
    "YEARWEEK"
  ],
  builtinVariables: [],
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      { include: "@scopes" },
      [/[;,.]/, "delimiter"],
      [/[()]/, "@brackets"],
      [
        /[\w@]+/,
        {
          cases: {
            "@operators": "operator",
            "@builtinVariables": "predefined",
            "@builtinFunctions": "predefined",
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/--+.*/, "comment"],
      [/#+.*/, "comment"],
      [/\/\*/, { token: "comment.quote", next: "@comment" }]
    ],
    comment: [
      [/[^*/]+/, "comment"],
      [/\*\//, { token: "comment.quote", next: "@pop" }],
      [/./, "comment"]
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
      [/\\'/, "string"],
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }]
    ],
    stringDouble: [
      [/[^"]+/, "string.double"],
      [/""/, "string.double"],
      [/"/, { token: "string.double", next: "@pop" }]
    ],
    complexIdentifiers: [[/`/, { token: "identifier.quote", next: "@quotedIdentifier" }]],
    quotedIdentifier: [
      [/[^`]+/, "identifier"],
      [/``/, "identifier"],
      [/`/, { token: "identifier.quote", next: "@pop" }]
    ],
    scopes: []
  }
};



/***/ }),

/***/ 17047:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/objective-c/objective-c.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "objective-c",
  extensions: [".m"],
  aliases: ["Objective-C"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 36436));
    }
  }
});


/***/ }),

/***/ 36436:
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

// src/basic-languages/objective-c/objective-c.ts
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
  tokenPostfix: ".objective-c",
  keywords: [
    "#import",
    "#include",
    "#define",
    "#else",
    "#endif",
    "#if",
    "#ifdef",
    "#ifndef",
    "#ident",
    "#undef",
    "@class",
    "@defs",
    "@dynamic",
    "@encode",
    "@end",
    "@implementation",
    "@interface",
    "@package",
    "@private",
    "@protected",
    "@property",
    "@protocol",
    "@public",
    "@selector",
    "@synthesize",
    "__declspec",
    "assign",
    "auto",
    "BOOL",
    "break",
    "bycopy",
    "byref",
    "case",
    "char",
    "Class",
    "const",
    "copy",
    "continue",
    "default",
    "do",
    "double",
    "else",
    "enum",
    "extern",
    "FALSE",
    "false",
    "float",
    "for",
    "goto",
    "if",
    "in",
    "int",
    "id",
    "inout",
    "IMP",
    "long",
    "nil",
    "nonatomic",
    "NULL",
    "oneway",
    "out",
    "private",
    "public",
    "protected",
    "readwrite",
    "readonly",
    "register",
    "return",
    "SEL",
    "self",
    "short",
    "signed",
    "sizeof",
    "static",
    "struct",
    "super",
    "switch",
    "typedef",
    "TRUE",
    "true",
    "union",
    "unsigned",
    "volatile",
    "void",
    "while"
  ],
  decpart: /\d(_?\d)*/,
  decimal: /0|@decpart/,
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      [/[,:;]/, "delimiter"],
      [/[{}\[\]()<>]/, "@brackets"],
      [
        /[a-zA-Z@#]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ],
      [/[<>=\\+\\-\\*\\/\\^\\|\\~,]|and\\b|or\\b|not\\b]/, "operator"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      ["\\/\\*", "comment", "@comment"],
      ["\\/\\/+.*", "comment"]
    ],
    comment: [
      ["\\*\\/", "comment", "@pop"],
      [".", "comment"]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*(_?[0-9a-fA-F])*/, "number.hex"],
      [
        /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)[fF]*/,
        {
          cases: {
            "(\\d)*": "number",
            $0: "number.float"
          }
        }
      ]
    ],
    strings: [
      [/'$/, "string.escape", "@popall"],
      [/'/, "string.escape", "@stringBody"],
      [/"$/, "string.escape", "@popall"],
      [/"/, "string.escape", "@dblStringBody"]
    ],
    stringBody: [
      [/[^\\']+$/, "string", "@popall"],
      [/[^\\']+/, "string"],
      [/\\./, "string"],
      [/'/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ],
    dblStringBody: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string"],
      [/"/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ]
  }
};



/***/ }),

/***/ 22617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pascal/pascal.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "pascal",
  extensions: [".pas", ".p", ".pp"],
  aliases: ["Pascal", "pas"],
  mimetypes: ["text/x-pascal-source", "text/x-pascal"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 19768));
    }
  }
});


/***/ }),

/***/ 19768:
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

// src/basic-languages/pascal/pascal.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    lineComment: "//",
    blockComment: ["{", "}"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*\\{\\$REGION(\\s\\'.*\\')?\\}"),
      end: new RegExp("^\\s*\\{\\$ENDREGION\\}")
    }
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pascal",
  ignoreCase: true,
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  keywords: [
    "absolute",
    "abstract",
    "all",
    "and_then",
    "array",
    "as",
    "asm",
    "attribute",
    "begin",
    "bindable",
    "case",
    "class",
    "const",
    "contains",
    "default",
    "div",
    "else",
    "end",
    "except",
    "exports",
    "external",
    "far",
    "file",
    "finalization",
    "finally",
    "forward",
    "generic",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "index",
    "inherited",
    "initialization",
    "interrupt",
    "is",
    "label",
    "library",
    "mod",
    "module",
    "name",
    "near",
    "not",
    "object",
    "of",
    "on",
    "only",
    "operator",
    "or_else",
    "otherwise",
    "override",
    "package",
    "packed",
    "pow",
    "private",
    "program",
    "protected",
    "public",
    "published",
    "interface",
    "implementation",
    "qualified",
    "read",
    "record",
    "resident",
    "requires",
    "resourcestring",
    "restricted",
    "segment",
    "set",
    "shl",
    "shr",
    "specialize",
    "stored",
    "strict",
    "then",
    "threadvar",
    "to",
    "try",
    "type",
    "unit",
    "uses",
    "var",
    "view",
    "virtual",
    "dynamic",
    "overload",
    "reintroduce",
    "with",
    "write",
    "xor",
    "true",
    "false",
    "procedure",
    "function",
    "constructor",
    "destructor",
    "property",
    "break",
    "continue",
    "exit",
    "abort",
    "while",
    "do",
    "for",
    "raise",
    "repeat",
    "until"
  ],
  typeKeywords: [
    "boolean",
    "double",
    "byte",
    "integer",
    "shortint",
    "char",
    "longint",
    "float",
    "string"
  ],
  operators: [
    "=",
    ">",
    "<",
    "<=",
    ">=",
    "<>",
    ":",
    ":=",
    "and",
    "or",
    "+",
    "-",
    "*",
    "/",
    "@",
    "&",
    "^",
    "%"
  ],
  symbols: /[=><:@\^&|+\-*\/\^%]+/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_][\w]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": "identifier"
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
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\$[0-9a-fA-F]{1,16}/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/'/, "string", "@string"],
      [/'[^\\']'/, "string"],
      [/'/, "string.invalid"],
      [/\#\d+/, "string"]
    ],
    comment: [
      [/[^\*\}]+/, "comment"],
      [/\}/, "comment", "@pop"],
      [/[\{]/, "comment"]
    ],
    string: [
      [/[^\\']+/, "string"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\{/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ]
  }
};



/***/ }),

/***/ 71891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pascaligo/pascaligo.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "pascaligo",
  extensions: [".ligo"],
  aliases: ["Pascaligo", "ligo"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 83000));
    }
  }
});


/***/ }),

/***/ 83000:
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

// src/basic-languages/pascaligo/pascaligo.ts
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["(*", "*)"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: "'", close: "'" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pascaligo",
  ignoreCase: true,
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  keywords: [
    "begin",
    "block",
    "case",
    "const",
    "else",
    "end",
    "fail",
    "for",
    "from",
    "function",
    "if",
    "is",
    "nil",
    "of",
    "remove",
    "return",
    "skip",
    "then",
    "type",
    "var",
    "while",
    "with",
    "option",
    "None",
    "transaction"
  ],
  typeKeywords: [
    "bool",
    "int",
    "list",
    "map",
    "nat",
    "record",
    "string",
    "unit",
    "address",
    "map",
    "mtz",
    "xtz"
  ],
  operators: [
    "=",
    ">",
    "<",
    "<=",
    ">=",
    "<>",
    ":",
    ":=",
    "and",
    "mod",
    "or",
    "+",
    "-",
    "*",
    "/",
    "@",
    "&",
    "^",
    "%"
  ],
  symbols: /[=><:@\^&|+\-*\/\^%]+/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_][\w]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": "identifier"
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
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\$[0-9a-fA-F]{1,16}/, "number.hex"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/'([^'\\]|\\.)*$/, "string.invalid"],
      [/'/, "string", "@string"],
      [/'[^\\']'/, "string"],
      [/'/, "string.invalid"],
      [/\#\d+/, "string"]
    ],
    comment: [
      [/[^\(\*]+/, "comment"],
      [/\*\)/, "comment", "@pop"],
      [/\(\*/, "comment"]
    ],
    string: [
      [/[^\\']+/, "string"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\(\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ]
  }
};



/***/ }),

/***/ 16864:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/perl/perl.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "perl",
  extensions: [".pl", ".pm"],
  aliases: ["Perl", "pl"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 18650));
    }
  }
});


/***/ }),

/***/ 18650:
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

// src/basic-languages/perl/perl.ts
var conf = {
  comments: {
    lineComment: "#"
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
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" },
    { open: "`", close: "`" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".perl",
  brackets: [
    { token: "delimiter.bracket", open: "{", close: "}" },
    { token: "delimiter.parenthesis", open: "(", close: ")" },
    { token: "delimiter.square", open: "[", close: "]" }
  ],
  keywords: [
    "__DATA__",
    "else",
    "lock",
    "__END__",
    "elsif",
    "lt",
    "__FILE__",
    "eq",
    "__LINE__",
    "exp",
    "ne",
    "sub",
    "__PACKAGE__",
    "for",
    "no",
    "and",
    "foreach",
    "or",
    "unless",
    "cmp",
    "ge",
    "package",
    "until",
    "continue",
    "gt",
    "while",
    "CORE",
    "if",
    "xor",
    "do",
    "le",
    "__DIE__",
    "__WARN__"
  ],
  builtinFunctions: [
    "-A",
    "END",
    "length",
    "setpgrp",
    "-B",
    "endgrent",
    "link",
    "setpriority",
    "-b",
    "endhostent",
    "listen",
    "setprotoent",
    "-C",
    "endnetent",
    "local",
    "setpwent",
    "-c",
    "endprotoent",
    "localtime",
    "setservent",
    "-d",
    "endpwent",
    "log",
    "setsockopt",
    "-e",
    "endservent",
    "lstat",
    "shift",
    "-f",
    "eof",
    "map",
    "shmctl",
    "-g",
    "eval",
    "mkdir",
    "shmget",
    "-k",
    "exec",
    "msgctl",
    "shmread",
    "-l",
    "exists",
    "msgget",
    "shmwrite",
    "-M",
    "exit",
    "msgrcv",
    "shutdown",
    "-O",
    "fcntl",
    "msgsnd",
    "sin",
    "-o",
    "fileno",
    "my",
    "sleep",
    "-p",
    "flock",
    "next",
    "socket",
    "-r",
    "fork",
    "not",
    "socketpair",
    "-R",
    "format",
    "oct",
    "sort",
    "-S",
    "formline",
    "open",
    "splice",
    "-s",
    "getc",
    "opendir",
    "split",
    "-T",
    "getgrent",
    "ord",
    "sprintf",
    "-t",
    "getgrgid",
    "our",
    "sqrt",
    "-u",
    "getgrnam",
    "pack",
    "srand",
    "-w",
    "gethostbyaddr",
    "pipe",
    "stat",
    "-W",
    "gethostbyname",
    "pop",
    "state",
    "-X",
    "gethostent",
    "pos",
    "study",
    "-x",
    "getlogin",
    "print",
    "substr",
    "-z",
    "getnetbyaddr",
    "printf",
    "symlink",
    "abs",
    "getnetbyname",
    "prototype",
    "syscall",
    "accept",
    "getnetent",
    "push",
    "sysopen",
    "alarm",
    "getpeername",
    "quotemeta",
    "sysread",
    "atan2",
    "getpgrp",
    "rand",
    "sysseek",
    "AUTOLOAD",
    "getppid",
    "read",
    "system",
    "BEGIN",
    "getpriority",
    "readdir",
    "syswrite",
    "bind",
    "getprotobyname",
    "readline",
    "tell",
    "binmode",
    "getprotobynumber",
    "readlink",
    "telldir",
    "bless",
    "getprotoent",
    "readpipe",
    "tie",
    "break",
    "getpwent",
    "recv",
    "tied",
    "caller",
    "getpwnam",
    "redo",
    "time",
    "chdir",
    "getpwuid",
    "ref",
    "times",
    "CHECK",
    "getservbyname",
    "rename",
    "truncate",
    "chmod",
    "getservbyport",
    "require",
    "uc",
    "chomp",
    "getservent",
    "reset",
    "ucfirst",
    "chop",
    "getsockname",
    "return",
    "umask",
    "chown",
    "getsockopt",
    "reverse",
    "undef",
    "chr",
    "glob",
    "rewinddir",
    "UNITCHECK",
    "chroot",
    "gmtime",
    "rindex",
    "unlink",
    "close",
    "goto",
    "rmdir",
    "unpack",
    "closedir",
    "grep",
    "say",
    "unshift",
    "connect",
    "hex",
    "scalar",
    "untie",
    "cos",
    "index",
    "seek",
    "use",
    "crypt",
    "INIT",
    "seekdir",
    "utime",
    "dbmclose",
    "int",
    "select",
    "values",
    "dbmopen",
    "ioctl",
    "semctl",
    "vec",
    "defined",
    "join",
    "semget",
    "wait",
    "delete",
    "keys",
    "semop",
    "waitpid",
    "DESTROY",
    "kill",
    "send",
    "wantarray",
    "die",
    "last",
    "setgrent",
    "warn",
    "dump",
    "lc",
    "sethostent",
    "write",
    "each",
    "lcfirst",
    "setnetent"
  ],
  builtinFileHandlers: ["ARGV", "STDERR", "STDOUT", "ARGVOUT", "STDIN", "ENV"],
  builtinVariables: [
    "$!",
    "$^RE_TRIE_MAXBUF",
    "$LAST_REGEXP_CODE_RESULT",
    '$"',
    "$^S",
    "$LIST_SEPARATOR",
    "$#",
    "$^T",
    "$MATCH",
    "$$",
    "$^TAINT",
    "$MULTILINE_MATCHING",
    "$%",
    "$^UNICODE",
    "$NR",
    "$&",
    "$^UTF8LOCALE",
    "$OFMT",
    "$'",
    "$^V",
    "$OFS",
    "$(",
    "$^W",
    "$ORS",
    "$)",
    "$^WARNING_BITS",
    "$OS_ERROR",
    "$*",
    "$^WIDE_SYSTEM_CALLS",
    "$OSNAME",
    "$+",
    "$^X",
    "$OUTPUT_AUTO_FLUSH",
    "$,",
    "$_",
    "$OUTPUT_FIELD_SEPARATOR",
    "$-",
    "$`",
    "$OUTPUT_RECORD_SEPARATOR",
    "$.",
    "$a",
    "$PERL_VERSION",
    "$/",
    "$ACCUMULATOR",
    "$PERLDB",
    "$0",
    "$ARG",
    "$PID",
    "$:",
    "$ARGV",
    "$POSTMATCH",
    "$;",
    "$b",
    "$PREMATCH",
    "$<",
    "$BASETIME",
    "$PROCESS_ID",
    "$=",
    "$CHILD_ERROR",
    "$PROGRAM_NAME",
    "$>",
    "$COMPILING",
    "$REAL_GROUP_ID",
    "$?",
    "$DEBUGGING",
    "$REAL_USER_ID",
    "$@",
    "$EFFECTIVE_GROUP_ID",
    "$RS",
    "$[",
    "$EFFECTIVE_USER_ID",
    "$SUBSCRIPT_SEPARATOR",
    "$\\",
    "$EGID",
    "$SUBSEP",
    "$]",
    "$ERRNO",
    "$SYSTEM_FD_MAX",
    "$^",
    "$EUID",
    "$UID",
    "$^A",
    "$EVAL_ERROR",
    "$WARNING",
    "$^C",
    "$EXCEPTIONS_BEING_CAUGHT",
    "$|",
    "$^CHILD_ERROR_NATIVE",
    "$EXECUTABLE_NAME",
    "$~",
    "$^D",
    "$EXTENDED_OS_ERROR",
    "%!",
    "$^E",
    "$FORMAT_FORMFEED",
    "%^H",
    "$^ENCODING",
    "$FORMAT_LINE_BREAK_CHARACTERS",
    "%ENV",
    "$^F",
    "$FORMAT_LINES_LEFT",
    "%INC",
    "$^H",
    "$FORMAT_LINES_PER_PAGE",
    "%OVERLOAD",
    "$^I",
    "$FORMAT_NAME",
    "%SIG",
    "$^L",
    "$FORMAT_PAGE_NUMBER",
    "@+",
    "$^M",
    "$FORMAT_TOP_NAME",
    "@-",
    "$^N",
    "$GID",
    "@_",
    "$^O",
    "$INPLACE_EDIT",
    "@ARGV",
    "$^OPEN",
    "$INPUT_LINE_NUMBER",
    "@INC",
    "$^P",
    "$INPUT_RECORD_SEPARATOR",
    "@LAST_MATCH_START",
    "$^R",
    "$LAST_MATCH_END",
    "$^RE_DEBUG_FLAGS",
    "$LAST_PAREN_MATCH"
  ],
  symbols: /[:+\-\^*$&%@=<>!?|\/~\.]/,
  quoteLikeOps: ["qr", "m", "s", "q", "qq", "qx", "qw", "tr", "y"],
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [
        /[a-zA-Z\-_][\w\-_]*/,
        {
          cases: {
            "@keywords": "keyword",
            "@builtinFunctions": "type.identifier",
            "@builtinFileHandlers": "variable.predefined",
            "@quoteLikeOps": {
              token: "@rematch",
              next: "quotedConstructs"
            },
            "@default": ""
          }
        }
      ],
      [
        /[\$@%][*@#?\+\-\$!\w\\\^><~:;\.]+/,
        {
          cases: {
            "@builtinVariables": "variable.predefined",
            "@default": "variable"
          }
        }
      ],
      { include: "@strings" },
      { include: "@dblStrings" },
      { include: "@perldoc" },
      { include: "@heredoc" },
      [/[{}\[\]()]/, "@brackets"],
      [/[\/](?:(?:\[(?:\\]|[^\]])+\])|(?:\\\/|[^\]\/]))*[\/]\w*\s*(?=[).,;]|$)/, "regexp"],
      [/@symbols/, "operators"],
      { include: "@numbers" },
      [/[,;]/, "delimiter"]
    ],
    whitespace: [
      [/\s+/, "white"],
      [/(^#!.*$)/, "metatag"],
      [/(^#.*$)/, "comment"]
    ],
    numbers: [
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+/, "number"]
    ],
    strings: [[/'/, "string", "@stringBody"]],
    stringBody: [
      [/'/, "string", "@popall"],
      [/\\'/, "string.escape"],
      [/./, "string"]
    ],
    dblStrings: [[/"/, "string", "@dblStringBody"]],
    dblStringBody: [
      [/"/, "string", "@popall"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      { include: "@variables" },
      [/./, "string"]
    ],
    quotedConstructs: [
      [/(q|qw|tr|y)\s*\(/, { token: "string.delim", switchTo: "@qstring.(.)" }],
      [/(q|qw|tr|y)\s*\[/, { token: "string.delim", switchTo: "@qstring.[.]" }],
      [/(q|qw|tr|y)\s*\{/, { token: "string.delim", switchTo: "@qstring.{.}" }],
      [/(q|qw|tr|y)\s*</, { token: "string.delim", switchTo: "@qstring.<.>" }],
      [/(q|qw|tr|y)#/, { token: "string.delim", switchTo: "@qstring.#.#" }],
      [/(q|qw|tr|y)\s*([^A-Za-z0-9#\s])/, { token: "string.delim", switchTo: "@qstring.$2.$2" }],
      [/(q|qw|tr|y)\s+(\w)/, { token: "string.delim", switchTo: "@qstring.$2.$2" }],
      [/(qr|m|s)\s*\(/, { token: "regexp.delim", switchTo: "@qregexp.(.)" }],
      [/(qr|m|s)\s*\[/, { token: "regexp.delim", switchTo: "@qregexp.[.]" }],
      [/(qr|m|s)\s*\{/, { token: "regexp.delim", switchTo: "@qregexp.{.}" }],
      [/(qr|m|s)\s*</, { token: "regexp.delim", switchTo: "@qregexp.<.>" }],
      [/(qr|m|s)#/, { token: "regexp.delim", switchTo: "@qregexp.#.#" }],
      [/(qr|m|s)\s*([^A-Za-z0-9_#\s])/, { token: "regexp.delim", switchTo: "@qregexp.$2.$2" }],
      [/(qr|m|s)\s+(\w)/, { token: "regexp.delim", switchTo: "@qregexp.$2.$2" }],
      [/(qq|qx)\s*\(/, { token: "string.delim", switchTo: "@qqstring.(.)" }],
      [/(qq|qx)\s*\[/, { token: "string.delim", switchTo: "@qqstring.[.]" }],
      [/(qq|qx)\s*\{/, { token: "string.delim", switchTo: "@qqstring.{.}" }],
      [/(qq|qx)\s*</, { token: "string.delim", switchTo: "@qqstring.<.>" }],
      [/(qq|qx)#/, { token: "string.delim", switchTo: "@qqstring.#.#" }],
      [/(qq|qx)\s*([^A-Za-z0-9#\s])/, { token: "string.delim", switchTo: "@qqstring.$2.$2" }],
      [/(qq|qx)\s+(\w)/, { token: "string.delim", switchTo: "@qqstring.$2.$2" }]
    ],
    qstring: [
      [/\\./, "string.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S3": { token: "string.delim", next: "@pop" },
            "$#==$S2": { token: "string.delim", next: "@push" },
            "@default": "string"
          }
        }
      ]
    ],
    qregexp: [
      { include: "@variables" },
      [/\\./, "regexp.escape"],
      [
        /./,
        {
          cases: {
            "$#==$S3": {
              token: "regexp.delim",
              next: "@regexpModifiers"
            },
            "$#==$S2": { token: "regexp.delim", next: "@push" },
            "@default": "regexp"
          }
        }
      ]
    ],
    regexpModifiers: [[/[msixpodualngcer]+/, { token: "regexp.modifier", next: "@popall" }]],
    qqstring: [{ include: "@variables" }, { include: "@qstring" }],
    heredoc: [
      [/<<\s*['"`]?([\w\-]+)['"`]?/, { token: "string.heredoc.delimiter", next: "@heredocBody.$1" }]
    ],
    heredocBody: [
      [
        /^([\w\-]+)$/,
        {
          cases: {
            "$1==$S2": [
              {
                token: "string.heredoc.delimiter",
                next: "@popall"
              }
            ],
            "@default": "string.heredoc"
          }
        }
      ],
      [/./, "string.heredoc"]
    ],
    perldoc: [[/^=\w/, "comment.doc", "@perldocBody"]],
    perldocBody: [
      [/^=cut\b/, "type.identifier", "@popall"],
      [/./, "comment.doc"]
    ],
    variables: [
      [/\$\w+/, "variable"],
      [/@\w+/, "variable"],
      [/%\w+/, "variable"]
    ]
  }
};



/***/ }),

/***/ 86270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pgsql/pgsql.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "pgsql",
  extensions: [],
  aliases: ["PostgreSQL", "postgres", "pg", "postgre"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 99589));
    }
  }
});


/***/ }),

/***/ 99589:
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

// src/basic-languages/pgsql/pgsql.ts
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
    "ALL",
    "ANALYSE",
    "ANALYZE",
    "AND",
    "ANY",
    "ARRAY",
    "AS",
    "ASC",
    "ASYMMETRIC",
    "AUTHORIZATION",
    "BINARY",
    "BOTH",
    "CASE",
    "CAST",
    "CHECK",
    "COLLATE",
    "COLLATION",
    "COLUMN",
    "CONCURRENTLY",
    "CONSTRAINT",
    "CREATE",
    "CROSS",
    "CURRENT_CATALOG",
    "CURRENT_DATE",
    "CURRENT_ROLE",
    "CURRENT_SCHEMA",
    "CURRENT_TIME",
    "CURRENT_TIMESTAMP",
    "CURRENT_USER",
    "DEFAULT",
    "DEFERRABLE",
    "DESC",
    "DISTINCT",
    "DO",
    "ELSE",
    "END",
    "EXCEPT",
    "FALSE",
    "FETCH",
    "FOR",
    "FOREIGN",
    "FREEZE",
    "FROM",
    "FULL",
    "GRANT",
    "GROUP",
    "HAVING",
    "ILIKE",
    "IN",
    "INITIALLY",
    "INNER",
    "INTERSECT",
    "INTO",
    "IS",
    "ISNULL",
    "JOIN",
    "LATERAL",
    "LEADING",
    "LEFT",
    "LIKE",
    "LIMIT",
    "LOCALTIME",
    "LOCALTIMESTAMP",
    "NATURAL",
    "NOT",
    "NOTNULL",
    "NULL",
    "OFFSET",
    "ON",
    "ONLY",
    "OR",
    "ORDER",
    "OUTER",
    "OVERLAPS",
    "PLACING",
    "PRIMARY",
    "REFERENCES",
    "RETURNING",
    "RIGHT",
    "SELECT",
    "SESSION_USER",
    "SIMILAR",
    "SOME",
    "SYMMETRIC",
    "TABLE",
    "TABLESAMPLE",
    "THEN",
    "TO",
    "TRAILING",
    "TRUE",
    "UNION",
    "UNIQUE",
    "USER",
    "USING",
    "VARIADIC",
    "VERBOSE",
    "WHEN",
    "WHERE",
    "WINDOW",
    "WITH"
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
    "abbrev",
    "abs",
    "acldefault",
    "aclexplode",
    "acos",
    "acosd",
    "acosh",
    "age",
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
    "ascii",
    "asin",
    "asind",
    "asinh",
    "atan",
    "atan2",
    "atan2d",
    "atand",
    "atanh",
    "avg",
    "bit",
    "bit_and",
    "bit_count",
    "bit_length",
    "bit_or",
    "bit_xor",
    "bool_and",
    "bool_or",
    "bound_box",
    "box",
    "brin_desummarize_range",
    "brin_summarize_new_values",
    "brin_summarize_range",
    "broadcast",
    "btrim",
    "cardinality",
    "cbrt",
    "ceil",
    "ceiling",
    "center",
    "char_length",
    "character_length",
    "chr",
    "circle",
    "clock_timestamp",
    "coalesce",
    "col_description",
    "concat",
    "concat_ws",
    "convert",
    "convert_from",
    "convert_to",
    "corr",
    "cos",
    "cosd",
    "cosh",
    "cot",
    "cotd",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "current_catalog",
    "current_database",
    "current_date",
    "current_query",
    "current_role",
    "current_schema",
    "current_schemas",
    "current_setting",
    "current_time",
    "current_timestamp",
    "current_user",
    "currval",
    "cursor_to_xml",
    "cursor_to_xmlschema",
    "date_bin",
    "date_part",
    "date_trunc",
    "database_to_xml",
    "database_to_xml_and_xmlschema",
    "database_to_xmlschema",
    "decode",
    "degrees",
    "dense_rank",
    "diagonal",
    "diameter",
    "div",
    "encode",
    "enum_first",
    "enum_last",
    "enum_range",
    "every",
    "exp",
    "extract",
    "factorial",
    "family",
    "first_value",
    "floor",
    "format",
    "format_type",
    "gcd",
    "gen_random_uuid",
    "generate_series",
    "generate_subscripts",
    "get_bit",
    "get_byte",
    "get_current_ts_config",
    "gin_clean_pending_list",
    "greatest",
    "grouping",
    "has_any_column_privilege",
    "has_column_privilege",
    "has_database_privilege",
    "has_foreign_data_wrapper_privilege",
    "has_function_privilege",
    "has_language_privilege",
    "has_schema_privilege",
    "has_sequence_privilege",
    "has_server_privilege",
    "has_table_privilege",
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
    "initcap",
    "isclosed",
    "isempty",
    "isfinite",
    "isopen",
    "json_agg",
    "json_array_elements",
    "json_array_elements_text",
    "json_array_length",
    "json_build_array",
    "json_build_object",
    "json_each",
    "json_each_text",
    "json_extract_path",
    "json_extract_path_text",
    "json_object",
    "json_object_agg",
    "json_object_keys",
    "json_populate_record",
    "json_populate_recordset",
    "json_strip_nulls",
    "json_to_record",
    "json_to_recordset",
    "json_to_tsvector",
    "json_typeof",
    "jsonb_agg",
    "jsonb_array_elements",
    "jsonb_array_elements_text",
    "jsonb_array_length",
    "jsonb_build_array",
    "jsonb_build_object",
    "jsonb_each",
    "jsonb_each_text",
    "jsonb_extract_path",
    "jsonb_extract_path_text",
    "jsonb_insert",
    "jsonb_object",
    "jsonb_object_agg",
    "jsonb_object_keys",
    "jsonb_path_exists",
    "jsonb_path_match",
    "jsonb_path_query",
    "jsonb_path_query_array",
    "jsonb_path_exists_tz",
    "jsonb_path_query_first",
    "jsonb_path_query_array_tz",
    "jsonb_path_query_first_tz",
    "jsonb_path_query_tz",
    "jsonb_path_match_tz",
    "jsonb_populate_record",
    "jsonb_populate_recordset",
    "jsonb_pretty",
    "jsonb_set",
    "jsonb_set_lax",
    "jsonb_strip_nulls",
    "jsonb_to_record",
    "jsonb_to_recordset",
    "jsonb_to_tsvector",
    "jsonb_typeof",
    "justify_days",
    "justify_hours",
    "justify_interval",
    "lag",
    "last_value",
    "lastval",
    "lcm",
    "lead",
    "least",
    "left",
    "length",
    "line",
    "ln",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "lower_inc",
    "lower_inf",
    "lpad",
    "lseg",
    "ltrim",
    "macaddr8_set7bit",
    "make_date",
    "make_interval",
    "make_time",
    "make_timestamp",
    "make_timestamptz",
    "makeaclitem",
    "masklen",
    "max",
    "md5",
    "min",
    "min_scale",
    "mod",
    "mode",
    "multirange",
    "netmask",
    "network",
    "nextval",
    "normalize",
    "now",
    "npoints",
    "nth_value",
    "ntile",
    "nullif",
    "num_nonnulls",
    "num_nulls",
    "numnode",
    "obj_description",
    "octet_length",
    "overlay",
    "parse_ident",
    "path",
    "pclose",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "pg_advisory_lock",
    "pg_advisory_lock_shared",
    "pg_advisory_unlock",
    "pg_advisory_unlock_all",
    "pg_advisory_unlock_shared",
    "pg_advisory_xact_lock",
    "pg_advisory_xact_lock_shared",
    "pg_backend_pid",
    "pg_backup_start_time",
    "pg_blocking_pids",
    "pg_cancel_backend",
    "pg_client_encoding",
    "pg_collation_actual_version",
    "pg_collation_is_visible",
    "pg_column_compression",
    "pg_column_size",
    "pg_conf_load_time",
    "pg_control_checkpoint",
    "pg_control_init",
    "pg_control_recovery",
    "pg_control_system",
    "pg_conversion_is_visible",
    "pg_copy_logical_replication_slot",
    "pg_copy_physical_replication_slot",
    "pg_create_logical_replication_slot",
    "pg_create_physical_replication_slot",
    "pg_create_restore_point",
    "pg_current_logfile",
    "pg_current_snapshot",
    "pg_current_wal_flush_lsn",
    "pg_current_wal_insert_lsn",
    "pg_current_wal_lsn",
    "pg_current_xact_id",
    "pg_current_xact_id_if_assigned",
    "pg_current_xlog_flush_location",
    "pg_current_xlog_insert_location",
    "pg_current_xlog_location",
    "pg_database_size",
    "pg_describe_object",
    "pg_drop_replication_slot",
    "pg_event_trigger_ddl_commands",
    "pg_event_trigger_dropped_objects",
    "pg_event_trigger_table_rewrite_oid",
    "pg_event_trigger_table_rewrite_reason",
    "pg_export_snapshot",
    "pg_filenode_relation",
    "pg_function_is_visible",
    "pg_get_catalog_foreign_keys",
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
    "pg_get_statisticsobjdef",
    "pg_get_triggerdef",
    "pg_get_userbyid",
    "pg_get_viewdef",
    "pg_get_wal_replay_pause_state",
    "pg_has_role",
    "pg_identify_object",
    "pg_identify_object_as_address",
    "pg_import_system_collations",
    "pg_index_column_has_property",
    "pg_index_has_property",
    "pg_indexam_has_property",
    "pg_indexes_size",
    "pg_is_in_backup",
    "pg_is_in_recovery",
    "pg_is_other_temp_schema",
    "pg_is_wal_replay_paused",
    "pg_is_xlog_replay_paused",
    "pg_jit_available",
    "pg_last_committed_xact",
    "pg_last_wal_receive_lsn",
    "pg_last_wal_replay_lsn",
    "pg_last_xact_replay_timestamp",
    "pg_last_xlog_receive_location",
    "pg_last_xlog_replay_location",
    "pg_listening_channels",
    "pg_log_backend_memory_contexts",
    "pg_logical_emit_message",
    "pg_logical_slot_get_binary_changes",
    "pg_logical_slot_get_changes",
    "pg_logical_slot_peek_binary_changes",
    "pg_logical_slot_peek_changes",
    "pg_ls_archive_statusdir",
    "pg_ls_dir",
    "pg_ls_logdir",
    "pg_ls_tmpdir",
    "pg_ls_waldir",
    "pg_mcv_list_items",
    "pg_my_temp_schema",
    "pg_notification_queue_usage",
    "pg_opclass_is_visible",
    "pg_operator_is_visible",
    "pg_opfamily_is_visible",
    "pg_options_to_table",
    "pg_partition_ancestors",
    "pg_partition_root",
    "pg_partition_tree",
    "pg_postmaster_start_time",
    "pg_promote",
    "pg_read_binary_file",
    "pg_read_file",
    "pg_relation_filenode",
    "pg_relation_filepath",
    "pg_relation_size",
    "pg_reload_conf",
    "pg_replication_origin_advance",
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
    "pg_replication_slot_advance",
    "pg_rotate_logfile",
    "pg_safe_snapshot_blocking_pids",
    "pg_size_bytes",
    "pg_size_pretty",
    "pg_sleep",
    "pg_sleep_for",
    "pg_sleep_until",
    "pg_snapshot_xip",
    "pg_snapshot_xmax",
    "pg_snapshot_xmin",
    "pg_start_backup",
    "pg_stat_file",
    "pg_statistics_obj_is_visible",
    "pg_stop_backup",
    "pg_switch_wal",
    "pg_switch_xlog",
    "pg_table_is_visible",
    "pg_table_size",
    "pg_tablespace_databases",
    "pg_tablespace_location",
    "pg_tablespace_size",
    "pg_terminate_backend",
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
    "pg_visible_in_snapshot",
    "pg_wal_lsn_diff",
    "pg_wal_replay_pause",
    "pg_wal_replay_resume",
    "pg_walfile_name",
    "pg_walfile_name_offset",
    "pg_xact_commit_timestamp",
    "pg_xact_commit_timestamp_origin",
    "pg_xact_status",
    "pg_xlog_location_diff",
    "pg_xlog_replay_pause",
    "pg_xlog_replay_resume",
    "pg_xlogfile_name",
    "pg_xlogfile_name_offset",
    "phraseto_tsquery",
    "pi",
    "plainto_tsquery",
    "point",
    "polygon",
    "popen",
    "position",
    "power",
    "pqserverversion",
    "query_to_xml",
    "query_to_xml_and_xmlschema",
    "query_to_xmlschema",
    "querytree",
    "quote_ident",
    "quote_literal",
    "quote_nullable",
    "radians",
    "radius",
    "random",
    "range_agg",
    "range_intersect_agg",
    "range_merge",
    "rank",
    "regexp_count",
    "regexp_instr",
    "regexp_like",
    "regexp_match",
    "regexp_matches",
    "regexp_replace",
    "regexp_split_to_array",
    "regexp_split_to_table",
    "regexp_substr",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "repeat",
    "replace",
    "reverse",
    "right",
    "round",
    "row_number",
    "row_security_active",
    "row_to_json",
    "rpad",
    "rtrim",
    "scale",
    "schema_to_xml",
    "schema_to_xml_and_xmlschema",
    "schema_to_xmlschema",
    "session_user",
    "set_bit",
    "set_byte",
    "set_config",
    "set_masklen",
    "setseed",
    "setval",
    "setweight",
    "sha224",
    "sha256",
    "sha384",
    "sha512",
    "shobj_description",
    "sign",
    "sin",
    "sind",
    "sinh",
    "slope",
    "split_part",
    "sprintf",
    "sqrt",
    "starts_with",
    "statement_timestamp",
    "stddev",
    "stddev_pop",
    "stddev_samp",
    "string_agg",
    "string_to_array",
    "string_to_table",
    "strip",
    "strpos",
    "substr",
    "substring",
    "sum",
    "suppress_redundant_updates_trigger",
    "table_to_xml",
    "table_to_xml_and_xmlschema",
    "table_to_xmlschema",
    "tan",
    "tand",
    "tanh",
    "text",
    "timeofday",
    "timezone",
    "to_ascii",
    "to_char",
    "to_date",
    "to_hex",
    "to_json",
    "to_number",
    "to_regclass",
    "to_regcollation",
    "to_regnamespace",
    "to_regoper",
    "to_regoperator",
    "to_regproc",
    "to_regprocedure",
    "to_regrole",
    "to_regtype",
    "to_timestamp",
    "to_tsquery",
    "to_tsvector",
    "transaction_timestamp",
    "translate",
    "trim",
    "trim_array",
    "trim_scale",
    "trunc",
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
    "txid_current_if_assigned",
    "txid_current_snapshot",
    "txid_snapshot_xip",
    "txid_snapshot_xmax",
    "txid_snapshot_xmin",
    "txid_status",
    "txid_visible_in_snapshot",
    "unistr",
    "unnest",
    "upper",
    "upper_inc",
    "upper_inf",
    "user",
    "var_pop",
    "var_samp",
    "variance",
    "version",
    "websearch_to_tsquery",
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
            "@operators": "operator",
            "@builtinVariables": "predefined",
            "@builtinFunctions": "predefined",
            "@keywords": "keyword",
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

/***/ 68445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/php/php.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "php",
  extensions: [".php", ".php4", ".php5", ".phtml", ".ctp"],
  aliases: ["PHP", "php"],
  mimetypes: ["application/x-php"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 7362));
    }
  }
});


/***/ }),

/***/ 7362:
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

// src/basic-languages/php/php.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
    { open: "{", close: "}", notIn: ["string"] },
    { open: "[", close: "]", notIn: ["string"] },
    { open: "(", close: ")", notIn: ["string"] },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  folding: {
    markers: {
      start: new RegExp("^\\s*(#|//)region\\b"),
      end: new RegExp("^\\s*(#|//)endregion\\b")
    }
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: "",
  tokenizer: {
    root: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.root" }],
      [/<!DOCTYPE/, "metatag.html", "@doctype"],
      [/<!--/, "comment.html", "@comment"],
      [/(<)(\w+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<)(script)/, ["delimiter.html", { token: "tag.html", next: "@script" }]],
      [/(<)(style)/, ["delimiter.html", { token: "tag.html", next: "@style" }]],
      [/(<)([:\w]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/(<\/)(\w+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/</, "delimiter.html"],
      [/[^<]+/]
    ],
    doctype: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.comment" }],
      [/[^>]+/, "metatag.content.html"],
      [/>/, "metatag.html", "@pop"]
    ],
    comment: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.comment" }],
      [/-->/, "comment.html", "@pop"],
      [/[^-]+/, "comment.content.html"],
      [/./, "comment.content.html"]
    ],
    otherTag: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.otherTag" }],
      [/\/?>/, "delimiter.html", "@pop"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/]
    ],
    script: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.script" }],
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.scriptAfterType"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.scriptAfterTypeEquals"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.scriptWithCustomType.$S2"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInEmbeddedState.scriptEmbedded.$S2",
          nextEmbedded: "@pop"
        }
      ],
      [/<\/script/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
    ],
    style: [
      [/<\?((php)|=)?/, { token: "@rematch", switchTo: "@phpInSimpleState.style" }],
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.styleAfterType"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.styleAfterTypeEquals"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInSimpleState.styleWithCustomType.$S2"
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
        /<\?((php)|=)?/,
        {
          token: "@rematch",
          switchTo: "@phpInEmbeddedState.styleEmbedded.$S2",
          nextEmbedded: "@pop"
        }
      ],
      [/<\/style/, { token: "@rematch", next: "@pop", nextEmbedded: "@pop" }]
    ],
    phpInSimpleState: [
      [/<\?((php)|=)?/, "metatag.php"],
      [/\?>/, { token: "metatag.php", switchTo: "@$S2.$S3" }],
      { include: "phpRoot" }
    ],
    phpInEmbeddedState: [
      [/<\?((php)|=)?/, "metatag.php"],
      [
        /\?>/,
        {
          token: "metatag.php",
          switchTo: "@$S2.$S3",
          nextEmbedded: "$S3"
        }
      ],
      { include: "phpRoot" }
    ],
    phpRoot: [
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@phpKeywords": { token: "keyword.php" },
            "@phpCompileTimeConstants": { token: "constant.php" },
            "@default": "identifier.php"
          }
        }
      ],
      [
        /[$a-zA-Z_]\w*/,
        {
          cases: {
            "@phpPreDefinedVariables": {
              token: "variable.predefined.php"
            },
            "@default": "variable.php"
          }
        }
      ],
      [/[{}]/, "delimiter.bracket.php"],
      [/[\[\]]/, "delimiter.array.php"],
      [/[()]/, "delimiter.parenthesis.php"],
      [/[ \t\r\n]+/],
      [/(#|\/\/)$/, "comment.php"],
      [/(#|\/\/)/, "comment.php", "@phpLineComment"],
      [/\/\*/, "comment.php", "@phpComment"],
      [/"/, "string.php", "@phpDoubleQuoteString"],
      [/'/, "string.php", "@phpSingleQuoteString"],
      [/[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/, "delimiter.php"],
      [/\d*\d+[eE]([\-+]?\d+)?/, "number.float.php"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float.php"],
      [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, "number.hex.php"],
      [/0[0-7']*[0-7]/, "number.octal.php"],
      [/0[bB][0-1']*[0-1]/, "number.binary.php"],
      [/\d[\d']*/, "number.php"],
      [/\d/, "number.php"]
    ],
    phpComment: [
      [/\*\//, "comment.php", "@pop"],
      [/[^*]+/, "comment.php"],
      [/./, "comment.php"]
    ],
    phpLineComment: [
      [/\?>/, { token: "@rematch", next: "@pop" }],
      [/.$/, "comment.php", "@pop"],
      [/[^?]+$/, "comment.php", "@pop"],
      [/[^?]+/, "comment.php"],
      [/./, "comment.php"]
    ],
    phpDoubleQuoteString: [
      [/[^\\"]+/, "string.php"],
      [/@escapes/, "string.escape.php"],
      [/\\./, "string.escape.invalid.php"],
      [/"/, "string.php", "@pop"]
    ],
    phpSingleQuoteString: [
      [/[^\\']+/, "string.php"],
      [/@escapes/, "string.escape.php"],
      [/\\./, "string.escape.invalid.php"],
      [/'/, "string.php", "@pop"]
    ]
  },
  phpKeywords: [
    "abstract",
    "and",
    "array",
    "as",
    "break",
    "callable",
    "case",
    "catch",
    "cfunction",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "else",
    "elseif",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "extends",
    "false",
    "final",
    "for",
    "foreach",
    "function",
    "global",
    "goto",
    "if",
    "implements",
    "interface",
    "instanceof",
    "insteadof",
    "namespace",
    "new",
    "null",
    "object",
    "old_function",
    "or",
    "private",
    "protected",
    "public",
    "resource",
    "static",
    "switch",
    "throw",
    "trait",
    "try",
    "true",
    "use",
    "var",
    "while",
    "xor",
    "die",
    "echo",
    "empty",
    "exit",
    "eval",
    "include",
    "include_once",
    "isset",
    "list",
    "require",
    "require_once",
    "return",
    "print",
    "unset",
    "yield",
    "__construct"
  ],
  phpCompileTimeConstants: [
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__LINE__",
    "__NAMESPACE__",
    "__METHOD__",
    "__FUNCTION__",
    "__TRAIT__"
  ],
  phpPreDefinedVariables: [
    "$GLOBALS",
    "$_SERVER",
    "$_GET",
    "$_POST",
    "$_FILES",
    "$_REQUEST",
    "$_SESSION",
    "$_ENV",
    "$_COOKIE",
    "$php_errormsg",
    "$HTTP_RAW_POST_DATA",
    "$http_response_header",
    "$argc",
    "$argv"
  ],
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};



/***/ }),

/***/ 57367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pla/pla.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "pla",
  extensions: [".pla"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 58211));
    }
  }
});


/***/ }),

/***/ 58211:
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

// src/basic-languages/pla/pla.ts
var conf = {
  comments: {
    lineComment: "#"
  },
  brackets: [
    ["[", "]"],
    ["<", ">"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "[", close: "]" },
    { open: "<", close: ">" },
    { open: "(", close: ")" }
  ],
  surroundingPairs: [
    { open: "[", close: "]" },
    { open: "<", close: ">" },
    { open: "(", close: ")" }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pla",
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "<", close: ">", token: "delimiter.angle" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  keywords: [
    ".i",
    ".o",
    ".mv",
    ".ilb",
    ".ob",
    ".label",
    ".type",
    ".phase",
    ".pair",
    ".symbolic",
    ".symbolic-output",
    ".kiss",
    ".p",
    ".e",
    ".end"
  ],
  comment: /#.*$/,
  identifier: /[a-zA-Z]+[a-zA-Z0-9_\-]*/,
  plaContent: /[01\-~\|]+/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [/@comment/, "comment"],
      [
        /\.([a-zA-Z_\-]+)/,
        {
          cases: {
            "@eos": { token: "keyword.$1" },
            "@keywords": {
              cases: {
                ".type": { token: "keyword.$1", next: "@type" },
                "@default": { token: "keyword.$1", next: "@keywordArg" }
              }
            },
            "@default": { token: "keyword.$1" }
          }
        }
      ],
      [/@identifier/, "identifier"],
      [/@plaContent/, "string"]
    ],
    whitespace: [[/[ \t\r\n]+/, ""]],
    type: [{ include: "@whitespace" }, [/\w+/, { token: "type", next: "@pop" }]],
    keywordArg: [
      [
        /[ \t\r\n]+/,
        {
          cases: {
            "@eos": { token: "", next: "@pop" },
            "@default": ""
          }
        }
      ],
      [/@comment/, "comment", "@pop"],
      [
        /[<>()\[\]]/,
        {
          cases: {
            "@eos": { token: "@brackets", next: "@pop" },
            "@default": "@brackets"
          }
        }
      ],
      [
        /\-?\d+/,
        {
          cases: {
            "@eos": { token: "number", next: "@pop" },
            "@default": "number"
          }
        }
      ],
      [
        /@identifier/,
        {
          cases: {
            "@eos": { token: "identifier", next: "@pop" },
            "@default": "identifier"
          }
        }
      ],
      [
        /[;=]/,
        {
          cases: {
            "@eos": { token: "delimiter", next: "@pop" },
            "@default": "delimiter"
          }
        }
      ]
    ]
  }
};



/***/ }),

/***/ 22974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/postiats/postiats.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "postiats",
  extensions: [".dats", ".sats", ".hats"],
  aliases: ["ATS", "ATS/Postiats"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 73420));
    }
  }
});


/***/ }),

/***/ 73420:
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

// src/basic-languages/postiats/postiats.ts
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["(*", "*)"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "{", close: "}", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] }
  ]
};
var language = {
  tokenPostfix: ".pats",
  defaultToken: "invalid",
  keywords: [
    "abstype",
    "abst0ype",
    "absprop",
    "absview",
    "absvtype",
    "absviewtype",
    "absvt0ype",
    "absviewt0ype",
    "as",
    "and",
    "assume",
    "begin",
    "classdec",
    "datasort",
    "datatype",
    "dataprop",
    "dataview",
    "datavtype",
    "dataviewtype",
    "do",
    "end",
    "extern",
    "extype",
    "extvar",
    "exception",
    "fn",
    "fnx",
    "fun",
    "prfn",
    "prfun",
    "praxi",
    "castfn",
    "if",
    "then",
    "else",
    "ifcase",
    "in",
    "infix",
    "infixl",
    "infixr",
    "prefix",
    "postfix",
    "implmnt",
    "implement",
    "primplmnt",
    "primplement",
    "import",
    "let",
    "local",
    "macdef",
    "macrodef",
    "nonfix",
    "symelim",
    "symintr",
    "overload",
    "of",
    "op",
    "rec",
    "sif",
    "scase",
    "sortdef",
    "sta",
    "stacst",
    "stadef",
    "static",
    "staload",
    "dynload",
    "try",
    "tkindef",
    "typedef",
    "propdef",
    "viewdef",
    "vtypedef",
    "viewtypedef",
    "prval",
    "var",
    "prvar",
    "when",
    "where",
    "with",
    "withtype",
    "withprop",
    "withview",
    "withvtype",
    "withviewtype"
  ],
  keywords_dlr: [
    "$delay",
    "$ldelay",
    "$arrpsz",
    "$arrptrsize",
    "$d2ctype",
    "$effmask",
    "$effmask_ntm",
    "$effmask_exn",
    "$effmask_ref",
    "$effmask_wrt",
    "$effmask_all",
    "$extern",
    "$extkind",
    "$extype",
    "$extype_struct",
    "$extval",
    "$extfcall",
    "$extmcall",
    "$literal",
    "$myfilename",
    "$mylocation",
    "$myfunction",
    "$lst",
    "$lst_t",
    "$lst_vt",
    "$list",
    "$list_t",
    "$list_vt",
    "$rec",
    "$rec_t",
    "$rec_vt",
    "$record",
    "$record_t",
    "$record_vt",
    "$tup",
    "$tup_t",
    "$tup_vt",
    "$tuple",
    "$tuple_t",
    "$tuple_vt",
    "$break",
    "$continue",
    "$raise",
    "$showtype",
    "$vcopyenv_v",
    "$vcopyenv_vt",
    "$tempenver",
    "$solver_assert",
    "$solver_verify"
  ],
  keywords_srp: [
    "#if",
    "#ifdef",
    "#ifndef",
    "#then",
    "#elif",
    "#elifdef",
    "#elifndef",
    "#else",
    "#endif",
    "#error",
    "#prerr",
    "#print",
    "#assert",
    "#undef",
    "#define",
    "#include",
    "#require",
    "#pragma",
    "#codegen2",
    "#codegen3"
  ],
  irregular_keyword_list: [
    "val+",
    "val-",
    "val",
    "case+",
    "case-",
    "case",
    "addr@",
    "addr",
    "fold@",
    "free@",
    "fix@",
    "fix",
    "lam@",
    "lam",
    "llam@",
    "llam",
    "viewt@ype+",
    "viewt@ype-",
    "viewt@ype",
    "viewtype+",
    "viewtype-",
    "viewtype",
    "view+",
    "view-",
    "view@",
    "view",
    "type+",
    "type-",
    "type",
    "vtype+",
    "vtype-",
    "vtype",
    "vt@ype+",
    "vt@ype-",
    "vt@ype",
    "viewt@ype+",
    "viewt@ype-",
    "viewt@ype",
    "viewtype+",
    "viewtype-",
    "viewtype",
    "prop+",
    "prop-",
    "prop",
    "type+",
    "type-",
    "type",
    "t@ype",
    "t@ype+",
    "t@ype-",
    "abst@ype",
    "abstype",
    "absviewt@ype",
    "absvt@ype",
    "for*",
    "for",
    "while*",
    "while"
  ],
  keywords_types: [
    "bool",
    "double",
    "byte",
    "int",
    "short",
    "char",
    "void",
    "unit",
    "long",
    "float",
    "string",
    "strptr"
  ],
  keywords_effects: [
    "0",
    "fun",
    "clo",
    "prf",
    "funclo",
    "cloptr",
    "cloref",
    "ref",
    "ntm",
    "1"
  ],
  operators: [
    "@",
    "!",
    "|",
    "`",
    ":",
    "$",
    ".",
    "=",
    "#",
    "~",
    "..",
    "...",
    "=>",
    "=<>",
    "=/=>",
    "=>>",
    "=/=>>",
    "<",
    ">",
    "><",
    ".<",
    ">.",
    ".<>.",
    "->",
    "-<>"
  ],
  brackets: [
    { open: ",(", close: ")", token: "delimiter.parenthesis" },
    { open: "`(", close: ")", token: "delimiter.parenthesis" },
    { open: "%(", close: ")", token: "delimiter.parenthesis" },
    { open: "'(", close: ")", token: "delimiter.parenthesis" },
    { open: "'{", close: "}", token: "delimiter.parenthesis" },
    { open: "@(", close: ")", token: "delimiter.parenthesis" },
    { open: "@{", close: "}", token: "delimiter.brace" },
    { open: "@[", close: "]", token: "delimiter.square" },
    { open: "#[", close: "]", token: "delimiter.square" },
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  IDENTFST: /[a-zA-Z_]/,
  IDENTRST: /[a-zA-Z0-9_'$]/,
  symbolic: /[%&+-./:=@~`^|*!$#?<>]/,
  digit: /[0-9]/,
  digitseq0: /@digit*/,
  xdigit: /[0-9A-Za-z]/,
  xdigitseq0: /@xdigit*/,
  INTSP: /[lLuU]/,
  FLOATSP: /[fFlL]/,
  fexponent: /[eE][+-]?[0-9]+/,
  fexponent_bin: /[pP][+-]?[0-9]+/,
  deciexp: /\.[0-9]*@fexponent?/,
  hexiexp: /\.[0-9a-zA-Z]*@fexponent_bin?/,
  irregular_keywords: /val[+-]?|case[+-]?|addr\@?|fold\@|free\@|fix\@?|lam\@?|llam\@?|prop[+-]?|type[+-]?|view[+-@]?|viewt@?ype[+-]?|t@?ype[+-]?|v(iew)?t@?ype[+-]?|abst@?ype|absv(iew)?t@?ype|for\*?|while\*?/,
  ESCHAR: /[ntvbrfa\\\?'"\(\[\{]/,
  start: "root",
  tokenizer: {
    root: [
      { regex: /[ \t\r\n]+/, action: { token: "" } },
      { regex: /\(\*\)/, action: { token: "invalid" } },
      {
        regex: /\(\*/,
        action: { token: "comment", next: "lexing_COMMENT_block_ml" }
      },
      {
        regex: /\(/,
        action: "@brackets"
      },
      {
        regex: /\)/,
        action: "@brackets"
      },
      {
        regex: /\[/,
        action: "@brackets"
      },
      {
        regex: /\]/,
        action: "@brackets"
      },
      {
        regex: /\{/,
        action: "@brackets"
      },
      {
        regex: /\}/,
        action: "@brackets"
      },
      {
        regex: /,\(/,
        action: "@brackets"
      },
      { regex: /,/, action: { token: "delimiter.comma" } },
      { regex: /;/, action: { token: "delimiter.semicolon" } },
      {
        regex: /@\(/,
        action: "@brackets"
      },
      {
        regex: /@\[/,
        action: "@brackets"
      },
      {
        regex: /@\{/,
        action: "@brackets"
      },
      {
        regex: /:</,
        action: { token: "keyword", next: "@lexing_EFFECT_commaseq0" }
      },
      { regex: /\.@symbolic+/, action: { token: "identifier.sym" } },
      {
        regex: /\.@digit*@fexponent@FLOATSP*/,
        action: { token: "number.float" }
      },
      { regex: /\.@digit+/, action: { token: "number.float" } },
      {
        regex: /\$@IDENTFST@IDENTRST*/,
        action: {
          cases: {
            "@keywords_dlr": { token: "keyword.dlr" },
            "@default": { token: "namespace" }
          }
        }
      },
      {
        regex: /\#@IDENTFST@IDENTRST*/,
        action: {
          cases: {
            "@keywords_srp": { token: "keyword.srp" },
            "@default": { token: "identifier" }
          }
        }
      },
      { regex: /%\(/, action: { token: "delimiter.parenthesis" } },
      {
        regex: /^%{(#|\^|\$)?/,
        action: {
          token: "keyword",
          next: "@lexing_EXTCODE",
          nextEmbedded: "text/javascript"
        }
      },
      { regex: /^%}/, action: { token: "keyword" } },
      { regex: /'\(/, action: { token: "delimiter.parenthesis" } },
      { regex: /'\[/, action: { token: "delimiter.bracket" } },
      { regex: /'\{/, action: { token: "delimiter.brace" } },
      [/(')(\\@ESCHAR|\\[xX]@xdigit+|\\@digit+)(')/, ["string", "string.escape", "string"]],
      [/'[^\\']'/, "string"],
      [/"/, "string.quote", "@lexing_DQUOTE"],
      {
        regex: /`\(/,
        action: "@brackets"
      },
      { regex: /\\/, action: { token: "punctuation" } },
      {
        regex: /@irregular_keywords(?!@IDENTRST)/,
        action: { token: "keyword" }
      },
      {
        regex: /@IDENTFST@IDENTRST*[<!\[]?/,
        action: {
          cases: {
            "@keywords": { token: "keyword" },
            "@keywords_types": { token: "type" },
            "@default": { token: "identifier" }
          }
        }
      },
      {
        regex: /\/\/\/\//,
        action: { token: "comment", next: "@lexing_COMMENT_rest" }
      },
      { regex: /\/\/.*$/, action: { token: "comment" } },
      {
        regex: /\/\*/,
        action: { token: "comment", next: "@lexing_COMMENT_block_c" }
      },
      {
        regex: /-<|=</,
        action: { token: "keyword", next: "@lexing_EFFECT_commaseq0" }
      },
      {
        regex: /@symbolic+/,
        action: {
          cases: {
            "@operators": "keyword",
            "@default": "operator"
          }
        }
      },
      {
        regex: /0[xX]@xdigit+(@hexiexp|@fexponent_bin)@FLOATSP*/,
        action: { token: "number.float" }
      },
      { regex: /0[xX]@xdigit+@INTSP*/, action: { token: "number.hex" } },
      {
        regex: /0[0-7]+(?![0-9])@INTSP*/,
        action: { token: "number.octal" }
      },
      {
        regex: /@digit+(@fexponent|@deciexp)@FLOATSP*/,
        action: { token: "number.float" }
      },
      {
        regex: /@digit@digitseq0@INTSP*/,
        action: { token: "number.decimal" }
      },
      { regex: /@digit+@INTSP*/, action: { token: "number" } }
    ],
    lexing_COMMENT_block_ml: [
      [/[^\(\*]+/, "comment"],
      [/\(\*/, "comment", "@push"],
      [/\(\*/, "comment.invalid"],
      [/\*\)/, "comment", "@pop"],
      [/\*/, "comment"]
    ],
    lexing_COMMENT_block_c: [
      [/[^\/*]+/, "comment"],
      [/\*\//, "comment", "@pop"],
      [/[\/*]/, "comment"]
    ],
    lexing_COMMENT_rest: [
      [/$/, "comment", "@pop"],
      [/.*/, "comment"]
    ],
    lexing_EFFECT_commaseq0: [
      {
        regex: /@IDENTFST@IDENTRST+|@digit+/,
        action: {
          cases: {
            "@keywords_effects": { token: "type.effect" },
            "@default": { token: "identifier" }
          }
        }
      },
      { regex: /,/, action: { token: "punctuation" } },
      { regex: />/, action: { token: "@rematch", next: "@pop" } }
    ],
    lexing_EXTCODE: [
      {
        regex: /^%}/,
        action: {
          token: "@rematch",
          next: "@pop",
          nextEmbedded: "@pop"
        }
      },
      { regex: /[^%]+/, action: "" }
    ],
    lexing_DQUOTE: [
      { regex: /"/, action: { token: "string.quote", next: "@pop" } },
      {
        regex: /(\{\$)(@IDENTFST@IDENTRST*)(\})/,
        action: [{ token: "string.escape" }, { token: "identifier" }, { token: "string.escape" }]
      },
      { regex: /\\$/, action: { token: "string.escape" } },
      {
        regex: /\\(@ESCHAR|[xX]@xdigit+|@digit+)/,
        action: { token: "string.escape" }
      },
      { regex: /[^\\"]+/, action: { token: "string" } }
    ]
  }
};



/***/ }),

/***/ 76112:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/powerquery/powerquery.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "powerquery",
  extensions: [".pq", ".pqm"],
  aliases: ["PQ", "M", "Power Query", "Power Query M"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 26523));
    }
  }
});


/***/ }),

/***/ 26523:
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

// src/basic-languages/powerquery/powerquery.ts
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["[", "]"],
    ["(", ")"],
    ["{", "}"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment", "identifier"] },
    { open: "[", close: "]", notIn: ["string", "comment", "identifier"] },
    { open: "(", close: ")", notIn: ["string", "comment", "identifier"] },
    { open: "{", close: "}", notIn: ["string", "comment", "identifier"] }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pq",
  ignoreCase: false,
  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "{", close: "}", token: "delimiter.brackets" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  operatorKeywords: ["and", "not", "or"],
  keywords: [
    "as",
    "each",
    "else",
    "error",
    "false",
    "if",
    "in",
    "is",
    "let",
    "meta",
    "otherwise",
    "section",
    "shared",
    "then",
    "true",
    "try",
    "type"
  ],
  constructors: ["#binary", "#date", "#datetime", "#datetimezone", "#duration", "#table", "#time"],
  constants: ["#infinity", "#nan", "#sections", "#shared"],
  typeKeywords: [
    "action",
    "any",
    "anynonnull",
    "none",
    "null",
    "logical",
    "number",
    "time",
    "date",
    "datetime",
    "datetimezone",
    "duration",
    "text",
    "binary",
    "list",
    "record",
    "table",
    "function"
  ],
  builtinFunctions: [
    "Access.Database",
    "Action.Return",
    "Action.Sequence",
    "Action.Try",
    "ActiveDirectory.Domains",
    "AdoDotNet.DataSource",
    "AdoDotNet.Query",
    "AdobeAnalytics.Cubes",
    "AnalysisServices.Database",
    "AnalysisServices.Databases",
    "AzureStorage.BlobContents",
    "AzureStorage.Blobs",
    "AzureStorage.Tables",
    "Binary.Buffer",
    "Binary.Combine",
    "Binary.Compress",
    "Binary.Decompress",
    "Binary.End",
    "Binary.From",
    "Binary.FromList",
    "Binary.FromText",
    "Binary.InferContentType",
    "Binary.Length",
    "Binary.ToList",
    "Binary.ToText",
    "BinaryFormat.7BitEncodedSignedInteger",
    "BinaryFormat.7BitEncodedUnsignedInteger",
    "BinaryFormat.Binary",
    "BinaryFormat.Byte",
    "BinaryFormat.ByteOrder",
    "BinaryFormat.Choice",
    "BinaryFormat.Decimal",
    "BinaryFormat.Double",
    "BinaryFormat.Group",
    "BinaryFormat.Length",
    "BinaryFormat.List",
    "BinaryFormat.Null",
    "BinaryFormat.Record",
    "BinaryFormat.SignedInteger16",
    "BinaryFormat.SignedInteger32",
    "BinaryFormat.SignedInteger64",
    "BinaryFormat.Single",
    "BinaryFormat.Text",
    "BinaryFormat.Transform",
    "BinaryFormat.UnsignedInteger16",
    "BinaryFormat.UnsignedInteger32",
    "BinaryFormat.UnsignedInteger64",
    "Byte.From",
    "Character.FromNumber",
    "Character.ToNumber",
    "Combiner.CombineTextByDelimiter",
    "Combiner.CombineTextByEachDelimiter",
    "Combiner.CombineTextByLengths",
    "Combiner.CombineTextByPositions",
    "Combiner.CombineTextByRanges",
    "Comparer.Equals",
    "Comparer.FromCulture",
    "Comparer.Ordinal",
    "Comparer.OrdinalIgnoreCase",
    "Csv.Document",
    "Cube.AddAndExpandDimensionColumn",
    "Cube.AddMeasureColumn",
    "Cube.ApplyParameter",
    "Cube.AttributeMemberId",
    "Cube.AttributeMemberProperty",
    "Cube.CollapseAndRemoveColumns",
    "Cube.Dimensions",
    "Cube.DisplayFolders",
    "Cube.Measures",
    "Cube.Parameters",
    "Cube.Properties",
    "Cube.PropertyKey",
    "Cube.ReplaceDimensions",
    "Cube.Transform",
    "Currency.From",
    "DB2.Database",
    "Date.AddDays",
    "Date.AddMonths",
    "Date.AddQuarters",
    "Date.AddWeeks",
    "Date.AddYears",
    "Date.Day",
    "Date.DayOfWeek",
    "Date.DayOfWeekName",
    "Date.DayOfYear",
    "Date.DaysInMonth",
    "Date.EndOfDay",
    "Date.EndOfMonth",
    "Date.EndOfQuarter",
    "Date.EndOfWeek",
    "Date.EndOfYear",
    "Date.From",
    "Date.FromText",
    "Date.IsInCurrentDay",
    "Date.IsInCurrentMonth",
    "Date.IsInCurrentQuarter",
    "Date.IsInCurrentWeek",
    "Date.IsInCurrentYear",
    "Date.IsInNextDay",
    "Date.IsInNextMonth",
    "Date.IsInNextNDays",
    "Date.IsInNextNMonths",
    "Date.IsInNextNQuarters",
    "Date.IsInNextNWeeks",
    "Date.IsInNextNYears",
    "Date.IsInNextQuarter",
    "Date.IsInNextWeek",
    "Date.IsInNextYear",
    "Date.IsInPreviousDay",
    "Date.IsInPreviousMonth",
    "Date.IsInPreviousNDays",
    "Date.IsInPreviousNMonths",
    "Date.IsInPreviousNQuarters",
    "Date.IsInPreviousNWeeks",
    "Date.IsInPreviousNYears",
    "Date.IsInPreviousQuarter",
    "Date.IsInPreviousWeek",
    "Date.IsInPreviousYear",
    "Date.IsInYearToDate",
    "Date.IsLeapYear",
    "Date.Month",
    "Date.MonthName",
    "Date.QuarterOfYear",
    "Date.StartOfDay",
    "Date.StartOfMonth",
    "Date.StartOfQuarter",
    "Date.StartOfWeek",
    "Date.StartOfYear",
    "Date.ToRecord",
    "Date.ToText",
    "Date.WeekOfMonth",
    "Date.WeekOfYear",
    "Date.Year",
    "DateTime.AddZone",
    "DateTime.Date",
    "DateTime.FixedLocalNow",
    "DateTime.From",
    "DateTime.FromFileTime",
    "DateTime.FromText",
    "DateTime.IsInCurrentHour",
    "DateTime.IsInCurrentMinute",
    "DateTime.IsInCurrentSecond",
    "DateTime.IsInNextHour",
    "DateTime.IsInNextMinute",
    "DateTime.IsInNextNHours",
    "DateTime.IsInNextNMinutes",
    "DateTime.IsInNextNSeconds",
    "DateTime.IsInNextSecond",
    "DateTime.IsInPreviousHour",
    "DateTime.IsInPreviousMinute",
    "DateTime.IsInPreviousNHours",
    "DateTime.IsInPreviousNMinutes",
    "DateTime.IsInPreviousNSeconds",
    "DateTime.IsInPreviousSecond",
    "DateTime.LocalNow",
    "DateTime.Time",
    "DateTime.ToRecord",
    "DateTime.ToText",
    "DateTimeZone.FixedLocalNow",
    "DateTimeZone.FixedUtcNow",
    "DateTimeZone.From",
    "DateTimeZone.FromFileTime",
    "DateTimeZone.FromText",
    "DateTimeZone.LocalNow",
    "DateTimeZone.RemoveZone",
    "DateTimeZone.SwitchZone",
    "DateTimeZone.ToLocal",
    "DateTimeZone.ToRecord",
    "DateTimeZone.ToText",
    "DateTimeZone.ToUtc",
    "DateTimeZone.UtcNow",
    "DateTimeZone.ZoneHours",
    "DateTimeZone.ZoneMinutes",
    "Decimal.From",
    "Diagnostics.ActivityId",
    "Diagnostics.Trace",
    "DirectQueryCapabilities.From",
    "Double.From",
    "Duration.Days",
    "Duration.From",
    "Duration.FromText",
    "Duration.Hours",
    "Duration.Minutes",
    "Duration.Seconds",
    "Duration.ToRecord",
    "Duration.ToText",
    "Duration.TotalDays",
    "Duration.TotalHours",
    "Duration.TotalMinutes",
    "Duration.TotalSeconds",
    "Embedded.Value",
    "Error.Record",
    "Excel.CurrentWorkbook",
    "Excel.Workbook",
    "Exchange.Contents",
    "Expression.Constant",
    "Expression.Evaluate",
    "Expression.Identifier",
    "Facebook.Graph",
    "File.Contents",
    "Folder.Contents",
    "Folder.Files",
    "Function.From",
    "Function.Invoke",
    "Function.InvokeAfter",
    "Function.IsDataSource",
    "GoogleAnalytics.Accounts",
    "Guid.From",
    "HdInsight.Containers",
    "HdInsight.Contents",
    "HdInsight.Files",
    "Hdfs.Contents",
    "Hdfs.Files",
    "Informix.Database",
    "Int16.From",
    "Int32.From",
    "Int64.From",
    "Int8.From",
    "ItemExpression.From",
    "Json.Document",
    "Json.FromValue",
    "Lines.FromBinary",
    "Lines.FromText",
    "Lines.ToBinary",
    "Lines.ToText",
    "List.Accumulate",
    "List.AllTrue",
    "List.Alternate",
    "List.AnyTrue",
    "List.Average",
    "List.Buffer",
    "List.Combine",
    "List.Contains",
    "List.ContainsAll",
    "List.ContainsAny",
    "List.Count",
    "List.Covariance",
    "List.DateTimeZones",
    "List.DateTimes",
    "List.Dates",
    "List.Difference",
    "List.Distinct",
    "List.Durations",
    "List.FindText",
    "List.First",
    "List.FirstN",
    "List.Generate",
    "List.InsertRange",
    "List.Intersect",
    "List.IsDistinct",
    "List.IsEmpty",
    "List.Last",
    "List.LastN",
    "List.MatchesAll",
    "List.MatchesAny",
    "List.Max",
    "List.MaxN",
    "List.Median",
    "List.Min",
    "List.MinN",
    "List.Mode",
    "List.Modes",
    "List.NonNullCount",
    "List.Numbers",
    "List.PositionOf",
    "List.PositionOfAny",
    "List.Positions",
    "List.Product",
    "List.Random",
    "List.Range",
    "List.RemoveFirstN",
    "List.RemoveItems",
    "List.RemoveLastN",
    "List.RemoveMatchingItems",
    "List.RemoveNulls",
    "List.RemoveRange",
    "List.Repeat",
    "List.ReplaceMatchingItems",
    "List.ReplaceRange",
    "List.ReplaceValue",
    "List.Reverse",
    "List.Select",
    "List.Single",
    "List.SingleOrDefault",
    "List.Skip",
    "List.Sort",
    "List.StandardDeviation",
    "List.Sum",
    "List.Times",
    "List.Transform",
    "List.TransformMany",
    "List.Union",
    "List.Zip",
    "Logical.From",
    "Logical.FromText",
    "Logical.ToText",
    "MQ.Queue",
    "MySQL.Database",
    "Number.Abs",
    "Number.Acos",
    "Number.Asin",
    "Number.Atan",
    "Number.Atan2",
    "Number.BitwiseAnd",
    "Number.BitwiseNot",
    "Number.BitwiseOr",
    "Number.BitwiseShiftLeft",
    "Number.BitwiseShiftRight",
    "Number.BitwiseXor",
    "Number.Combinations",
    "Number.Cos",
    "Number.Cosh",
    "Number.Exp",
    "Number.Factorial",
    "Number.From",
    "Number.FromText",
    "Number.IntegerDivide",
    "Number.IsEven",
    "Number.IsNaN",
    "Number.IsOdd",
    "Number.Ln",
    "Number.Log",
    "Number.Log10",
    "Number.Mod",
    "Number.Permutations",
    "Number.Power",
    "Number.Random",
    "Number.RandomBetween",
    "Number.Round",
    "Number.RoundAwayFromZero",
    "Number.RoundDown",
    "Number.RoundTowardZero",
    "Number.RoundUp",
    "Number.Sign",
    "Number.Sin",
    "Number.Sinh",
    "Number.Sqrt",
    "Number.Tan",
    "Number.Tanh",
    "Number.ToText",
    "OData.Feed",
    "Odbc.DataSource",
    "Odbc.Query",
    "OleDb.DataSource",
    "OleDb.Query",
    "Oracle.Database",
    "Percentage.From",
    "PostgreSQL.Database",
    "RData.FromBinary",
    "Record.AddField",
    "Record.Combine",
    "Record.Field",
    "Record.FieldCount",
    "Record.FieldNames",
    "Record.FieldOrDefault",
    "Record.FieldValues",
    "Record.FromList",
    "Record.FromTable",
    "Record.HasFields",
    "Record.RemoveFields",
    "Record.RenameFields",
    "Record.ReorderFields",
    "Record.SelectFields",
    "Record.ToList",
    "Record.ToTable",
    "Record.TransformFields",
    "Replacer.ReplaceText",
    "Replacer.ReplaceValue",
    "RowExpression.Column",
    "RowExpression.From",
    "Salesforce.Data",
    "Salesforce.Reports",
    "SapBusinessWarehouse.Cubes",
    "SapHana.Database",
    "SharePoint.Contents",
    "SharePoint.Files",
    "SharePoint.Tables",
    "Single.From",
    "Soda.Feed",
    "Splitter.SplitByNothing",
    "Splitter.SplitTextByAnyDelimiter",
    "Splitter.SplitTextByDelimiter",
    "Splitter.SplitTextByEachDelimiter",
    "Splitter.SplitTextByLengths",
    "Splitter.SplitTextByPositions",
    "Splitter.SplitTextByRanges",
    "Splitter.SplitTextByRepeatedLengths",
    "Splitter.SplitTextByWhitespace",
    "Sql.Database",
    "Sql.Databases",
    "SqlExpression.SchemaFrom",
    "SqlExpression.ToExpression",
    "Sybase.Database",
    "Table.AddColumn",
    "Table.AddIndexColumn",
    "Table.AddJoinColumn",
    "Table.AddKey",
    "Table.AggregateTableColumn",
    "Table.AlternateRows",
    "Table.Buffer",
    "Table.Column",
    "Table.ColumnCount",
    "Table.ColumnNames",
    "Table.ColumnsOfType",
    "Table.Combine",
    "Table.CombineColumns",
    "Table.Contains",
    "Table.ContainsAll",
    "Table.ContainsAny",
    "Table.DemoteHeaders",
    "Table.Distinct",
    "Table.DuplicateColumn",
    "Table.ExpandListColumn",
    "Table.ExpandRecordColumn",
    "Table.ExpandTableColumn",
    "Table.FillDown",
    "Table.FillUp",
    "Table.FilterWithDataTable",
    "Table.FindText",
    "Table.First",
    "Table.FirstN",
    "Table.FirstValue",
    "Table.FromColumns",
    "Table.FromList",
    "Table.FromPartitions",
    "Table.FromRecords",
    "Table.FromRows",
    "Table.FromValue",
    "Table.Group",
    "Table.HasColumns",
    "Table.InsertRows",
    "Table.IsDistinct",
    "Table.IsEmpty",
    "Table.Join",
    "Table.Keys",
    "Table.Last",
    "Table.LastN",
    "Table.MatchesAllRows",
    "Table.MatchesAnyRows",
    "Table.Max",
    "Table.MaxN",
    "Table.Min",
    "Table.MinN",
    "Table.NestedJoin",
    "Table.Partition",
    "Table.PartitionValues",
    "Table.Pivot",
    "Table.PositionOf",
    "Table.PositionOfAny",
    "Table.PrefixColumns",
    "Table.Profile",
    "Table.PromoteHeaders",
    "Table.Range",
    "Table.RemoveColumns",
    "Table.RemoveFirstN",
    "Table.RemoveLastN",
    "Table.RemoveMatchingRows",
    "Table.RemoveRows",
    "Table.RemoveRowsWithErrors",
    "Table.RenameColumns",
    "Table.ReorderColumns",
    "Table.Repeat",
    "Table.ReplaceErrorValues",
    "Table.ReplaceKeys",
    "Table.ReplaceMatchingRows",
    "Table.ReplaceRelationshipIdentity",
    "Table.ReplaceRows",
    "Table.ReplaceValue",
    "Table.ReverseRows",
    "Table.RowCount",
    "Table.Schema",
    "Table.SelectColumns",
    "Table.SelectRows",
    "Table.SelectRowsWithErrors",
    "Table.SingleRow",
    "Table.Skip",
    "Table.Sort",
    "Table.SplitColumn",
    "Table.ToColumns",
    "Table.ToList",
    "Table.ToRecords",
    "Table.ToRows",
    "Table.TransformColumnNames",
    "Table.TransformColumnTypes",
    "Table.TransformColumns",
    "Table.TransformRows",
    "Table.Transpose",
    "Table.Unpivot",
    "Table.UnpivotOtherColumns",
    "Table.View",
    "Table.ViewFunction",
    "TableAction.DeleteRows",
    "TableAction.InsertRows",
    "TableAction.UpdateRows",
    "Tables.GetRelationships",
    "Teradata.Database",
    "Text.AfterDelimiter",
    "Text.At",
    "Text.BeforeDelimiter",
    "Text.BetweenDelimiters",
    "Text.Clean",
    "Text.Combine",
    "Text.Contains",
    "Text.End",
    "Text.EndsWith",
    "Text.Format",
    "Text.From",
    "Text.FromBinary",
    "Text.Insert",
    "Text.Length",
    "Text.Lower",
    "Text.Middle",
    "Text.NewGuid",
    "Text.PadEnd",
    "Text.PadStart",
    "Text.PositionOf",
    "Text.PositionOfAny",
    "Text.Proper",
    "Text.Range",
    "Text.Remove",
    "Text.RemoveRange",
    "Text.Repeat",
    "Text.Replace",
    "Text.ReplaceRange",
    "Text.Select",
    "Text.Split",
    "Text.SplitAny",
    "Text.Start",
    "Text.StartsWith",
    "Text.ToBinary",
    "Text.ToList",
    "Text.Trim",
    "Text.TrimEnd",
    "Text.TrimStart",
    "Text.Upper",
    "Time.EndOfHour",
    "Time.From",
    "Time.FromText",
    "Time.Hour",
    "Time.Minute",
    "Time.Second",
    "Time.StartOfHour",
    "Time.ToRecord",
    "Time.ToText",
    "Type.AddTableKey",
    "Type.ClosedRecord",
    "Type.Facets",
    "Type.ForFunction",
    "Type.ForRecord",
    "Type.FunctionParameters",
    "Type.FunctionRequiredParameters",
    "Type.FunctionReturn",
    "Type.Is",
    "Type.IsNullable",
    "Type.IsOpenRecord",
    "Type.ListItem",
    "Type.NonNullable",
    "Type.OpenRecord",
    "Type.RecordFields",
    "Type.ReplaceFacets",
    "Type.ReplaceTableKeys",
    "Type.TableColumn",
    "Type.TableKeys",
    "Type.TableRow",
    "Type.TableSchema",
    "Type.Union",
    "Uri.BuildQueryString",
    "Uri.Combine",
    "Uri.EscapeDataString",
    "Uri.Parts",
    "Value.Add",
    "Value.As",
    "Value.Compare",
    "Value.Divide",
    "Value.Equals",
    "Value.Firewall",
    "Value.FromText",
    "Value.Is",
    "Value.Metadata",
    "Value.Multiply",
    "Value.NativeQuery",
    "Value.NullableEquals",
    "Value.RemoveMetadata",
    "Value.ReplaceMetadata",
    "Value.ReplaceType",
    "Value.Subtract",
    "Value.Type",
    "ValueAction.NativeStatement",
    "ValueAction.Replace",
    "Variable.Value",
    "Web.Contents",
    "Web.Page",
    "WebAction.Request",
    "Xml.Document",
    "Xml.Tables"
  ],
  builtinConstants: [
    "BinaryEncoding.Base64",
    "BinaryEncoding.Hex",
    "BinaryOccurrence.Optional",
    "BinaryOccurrence.Repeating",
    "BinaryOccurrence.Required",
    "ByteOrder.BigEndian",
    "ByteOrder.LittleEndian",
    "Compression.Deflate",
    "Compression.GZip",
    "CsvStyle.QuoteAfterDelimiter",
    "CsvStyle.QuoteAlways",
    "Culture.Current",
    "Day.Friday",
    "Day.Monday",
    "Day.Saturday",
    "Day.Sunday",
    "Day.Thursday",
    "Day.Tuesday",
    "Day.Wednesday",
    "ExtraValues.Error",
    "ExtraValues.Ignore",
    "ExtraValues.List",
    "GroupKind.Global",
    "GroupKind.Local",
    "JoinAlgorithm.Dynamic",
    "JoinAlgorithm.LeftHash",
    "JoinAlgorithm.LeftIndex",
    "JoinAlgorithm.PairwiseHash",
    "JoinAlgorithm.RightHash",
    "JoinAlgorithm.RightIndex",
    "JoinAlgorithm.SortMerge",
    "JoinKind.FullOuter",
    "JoinKind.Inner",
    "JoinKind.LeftAnti",
    "JoinKind.LeftOuter",
    "JoinKind.RightAnti",
    "JoinKind.RightOuter",
    "JoinSide.Left",
    "JoinSide.Right",
    "MissingField.Error",
    "MissingField.Ignore",
    "MissingField.UseNull",
    "Number.E",
    "Number.Epsilon",
    "Number.NaN",
    "Number.NegativeInfinity",
    "Number.PI",
    "Number.PositiveInfinity",
    "Occurrence.All",
    "Occurrence.First",
    "Occurrence.Last",
    "Occurrence.Optional",
    "Occurrence.Repeating",
    "Occurrence.Required",
    "Order.Ascending",
    "Order.Descending",
    "Precision.Decimal",
    "Precision.Double",
    "QuoteStyle.Csv",
    "QuoteStyle.None",
    "RelativePosition.FromEnd",
    "RelativePosition.FromStart",
    "RoundingMode.AwayFromZero",
    "RoundingMode.Down",
    "RoundingMode.ToEven",
    "RoundingMode.TowardZero",
    "RoundingMode.Up",
    "SapHanaDistribution.All",
    "SapHanaDistribution.Connection",
    "SapHanaDistribution.Off",
    "SapHanaDistribution.Statement",
    "SapHanaRangeOperator.Equals",
    "SapHanaRangeOperator.GreaterThan",
    "SapHanaRangeOperator.GreaterThanOrEquals",
    "SapHanaRangeOperator.LessThan",
    "SapHanaRangeOperator.LessThanOrEquals",
    "SapHanaRangeOperator.NotEquals",
    "TextEncoding.Ascii",
    "TextEncoding.BigEndianUnicode",
    "TextEncoding.Unicode",
    "TextEncoding.Utf16",
    "TextEncoding.Utf8",
    "TextEncoding.Windows",
    "TraceLevel.Critical",
    "TraceLevel.Error",
    "TraceLevel.Information",
    "TraceLevel.Verbose",
    "TraceLevel.Warning",
    "WebMethod.Delete",
    "WebMethod.Get",
    "WebMethod.Head",
    "WebMethod.Patch",
    "WebMethod.Post",
    "WebMethod.Put"
  ],
  builtinTypes: [
    "Action.Type",
    "Any.Type",
    "Binary.Type",
    "BinaryEncoding.Type",
    "BinaryOccurrence.Type",
    "Byte.Type",
    "ByteOrder.Type",
    "Character.Type",
    "Compression.Type",
    "CsvStyle.Type",
    "Currency.Type",
    "Date.Type",
    "DateTime.Type",
    "DateTimeZone.Type",
    "Day.Type",
    "Decimal.Type",
    "Double.Type",
    "Duration.Type",
    "ExtraValues.Type",
    "Function.Type",
    "GroupKind.Type",
    "Guid.Type",
    "Int16.Type",
    "Int32.Type",
    "Int64.Type",
    "Int8.Type",
    "JoinAlgorithm.Type",
    "JoinKind.Type",
    "JoinSide.Type",
    "List.Type",
    "Logical.Type",
    "MissingField.Type",
    "None.Type",
    "Null.Type",
    "Number.Type",
    "Occurrence.Type",
    "Order.Type",
    "Password.Type",
    "Percentage.Type",
    "Precision.Type",
    "QuoteStyle.Type",
    "Record.Type",
    "RelativePosition.Type",
    "RoundingMode.Type",
    "SapHanaDistribution.Type",
    "SapHanaRangeOperator.Type",
    "Single.Type",
    "Table.Type",
    "Text.Type",
    "TextEncoding.Type",
    "Time.Type",
    "TraceLevel.Type",
    "Type.Type",
    "Uri.Type",
    "WebMethod.Type"
  ],
  tokenizer: {
    root: [
      [/#"[\w \.]+"/, "identifier.quote"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/\d+([eE][\-+]?\d+)?/, "number"],
      [
        /(#?[a-z]+)\b/,
        {
          cases: {
            "@typeKeywords": "type",
            "@keywords": "keyword",
            "@constants": "constant",
            "@constructors": "constructor",
            "@operatorKeywords": "operators",
            "@default": "identifier"
          }
        }
      ],
      [
        /\b([A-Z][a-zA-Z0-9]+\.Type)\b/,
        {
          cases: {
            "@builtinTypes": "type",
            "@default": "identifier"
          }
        }
      ],
      [
        /\b([A-Z][a-zA-Z0-9]+\.[A-Z][a-zA-Z0-9]+)\b/,
        {
          cases: {
            "@builtinFunctions": "keyword.function",
            "@builtinConstants": "constant",
            "@default": "identifier"
          }
        }
      ],
      [/\b([a-zA-Z_][\w\.]*)\b/, "identifier"],
      { include: "@whitespace" },
      { include: "@comments" },
      { include: "@strings" },
      [/[{}()\[\]]/, "@brackets"],
      [/([=\+<>\-\*&@\?\/!])|([<>]=)|(<>)|(=>)|(\.\.\.)|(\.\.)/, "operators"],
      [/[,;]/, "delimiter"]
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      ["\\/\\*", "comment", "@comment"],
      ["\\/\\/+.*", "comment"]
    ],
    comment: [
      ["\\*\\/", "comment", "@pop"],
      [".", "comment"]
    ],
    strings: [['"', "string", "@string"]],
    string: [
      ['""', "string.escape"],
      ['"', "string", "@pop"],
      [".", "string"]
    ]
  }
};



/***/ }),

/***/ 3186:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/powershell/powershell.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "powershell",
  extensions: [".ps1", ".psm1", ".psd1"],
  aliases: ["PowerShell", "powershell", "ps", "ps1"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 84759));
    }
  }
});


/***/ }),

/***/ 84759:
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

// src/basic-languages/powershell/powershell.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    lineComment: "#",
    blockComment: ["<#", "#>"]
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
    { open: '"', close: '"', notIn: ["string"] },
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
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
var language = {
  defaultToken: "",
  ignoreCase: true,
  tokenPostfix: ".ps1",
  brackets: [
    { token: "delimiter.curly", open: "{", close: "}" },
    { token: "delimiter.square", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" }
  ],
  keywords: [
    "begin",
    "break",
    "catch",
    "class",
    "continue",
    "data",
    "define",
    "do",
    "dynamicparam",
    "else",
    "elseif",
    "end",
    "exit",
    "filter",
    "finally",
    "for",
    "foreach",
    "from",
    "function",
    "if",
    "in",
    "param",
    "process",
    "return",
    "switch",
    "throw",
    "trap",
    "try",
    "until",
    "using",
    "var",
    "while",
    "workflow",
    "parallel",
    "sequence",
    "inlinescript",
    "configuration"
  ],
  helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,
  symbols: /[=><!~?&%|+\-*\/\^;\.,]+/,
  escapes: /`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_][\w-]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": ""
          }
        }
      ],
      [/[ \t\r\n]+/, ""],
      [/^:\w*/, "metatag"],
      [
        /\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,
        "variable"
      ],
      [/<#/, "comment", "@comment"],
      [/#.*$/, "comment"],
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, "delimiter"],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],
      [/\d+?/, "number"],
      [/[;,.]/, "delimiter"],
      [/\@"/, "string", '@herestring."'],
      [/\@'/, "string", "@herestring.'"],
      [
        /"/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: '@string."' }
          }
        }
      ],
      [
        /'/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: "@string.'" }
          }
        }
      ]
    ],
    string: [
      [
        /[^"'\$`]+/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ],
      [
        /@escapes/,
        {
          cases: {
            "@eos": { token: "string.escape", next: "@popall" },
            "@default": "string.escape"
          }
        }
      ],
      [
        /`./,
        {
          cases: {
            "@eos": {
              token: "string.escape.invalid",
              next: "@popall"
            },
            "@default": "string.escape.invalid"
          }
        }
      ],
      [
        /\$[\w]+$/,
        {
          cases: {
            '$S2=="': { token: "variable", next: "@popall" },
            "@default": { token: "string", next: "@popall" }
          }
        }
      ],
      [
        /\$[\w]+/,
        {
          cases: {
            '$S2=="': "variable",
            "@default": "string"
          }
        }
      ],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": {
              cases: {
                "@eos": { token: "string", next: "@popall" },
                "@default": "string"
              }
            }
          }
        }
      ]
    ],
    herestring: [
      [
        /^\s*(["'])@/,
        {
          cases: {
            "$1==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/[^\$`]+/, "string"],
      [/@escapes/, "string.escape"],
      [/`./, "string.escape.invalid"],
      [
        /\$[\w]+/,
        {
          cases: {
            '$S2=="': "variable",
            "@default": "string"
          }
        }
      ]
    ],
    comment: [
      [/[^#\.]+/, "comment"],
      [/#>/, "comment", "@pop"],
      [/(\.)(@helpKeywords)(?!\w)/, { token: "comment.keyword.$2" }],
      [/[\.#]/, "comment"]
    ]
  }
};



/***/ }),

/***/ 7736:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/protobuf/protobuf.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "proto",
  extensions: [".proto"],
  aliases: ["protobuf", "Protocol Buffers"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 96978));
    }
  }
});


/***/ }),

/***/ 96978:
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

// src/basic-languages/protobuf/protobuf.ts
var namedLiterals = ["true", "false"];
var conf = {
  comments: {
    lineComment: "//",
    blockComment: ["/*", "*/"]
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["<", ">"]
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: "<", close: ">" },
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string"] }
  ],
  autoCloseBefore: ".,=}])>' \n	",
  indentationRules: {
    increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
    decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".proto",
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
    { open: "<", close: ">", token: "delimiter.angle" }
  ],
  symbols: /[=><!~?:&|+\-*/^%]+/,
  keywords: [
    "syntax",
    "import",
    "weak",
    "public",
    "package",
    "option",
    "repeated",
    "oneof",
    "map",
    "reserved",
    "to",
    "max",
    "enum",
    "message",
    "service",
    "rpc",
    "stream",
    "returns",
    "package",
    "optional",
    "true",
    "false"
  ],
  builtinTypes: [
    "double",
    "float",
    "int32",
    "int64",
    "uint32",
    "uint64",
    "sint32",
    "sint64",
    "fixed32",
    "fixed64",
    "sfixed32",
    "sfixed64",
    "bool",
    "string",
    "bytes"
  ],
  operators: ["=", "+", "-"],
  namedLiterals,
  escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
  identifier: /[a-zA-Z]\w*/,
  fullIdentifier: /@identifier(?:\s*\.\s*@identifier)*/,
  optionName: /(?:@identifier|\(\s*@fullIdentifier\s*\))(?:\s*\.\s*@identifier)*/,
  messageName: /@identifier/,
  enumName: /@identifier/,
  messageType: /\.?\s*(?:@identifier\s*\.\s*)*@messageName/,
  enumType: /\.?\s*(?:@identifier\s*\.\s*)*@enumName/,
  floatLit: /[0-9]+\s*\.\s*[0-9]*(?:@exponent)?|[0-9]+@exponent|\.[0-9]+(?:@exponent)?/,
  exponent: /[eE]\s*[+-]?\s*[0-9]+/,
  boolLit: /true\b|false\b/,
  decimalLit: /[1-9][0-9]*/,
  octalLit: /0[0-7]*/,
  hexLit: /0[xX][0-9a-fA-F]+/,
  type: /double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes|@messageType|@enumType/,
  keyType: /int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string/,
  tokenizer: {
    root: [
      { include: "@whitespace" },
      [/syntax/, "keyword"],
      [/=/, "operators"],
      [/;/, "delimiter"],
      [
        /(")(proto3)(")/,
        ["string.quote", "string", { token: "string.quote", switchTo: "@topLevel.proto3" }]
      ],
      [
        /(")(proto2)(")/,
        ["string.quote", "string", { token: "string.quote", switchTo: "@topLevel.proto2" }]
      ],
      [
        /.*?/,
        { token: "", switchTo: "@topLevel.proto2" }
      ]
    ],
    topLevel: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/[;.]/, "delimiter"],
      [
        /@fullIdentifier/,
        {
          cases: {
            option: { token: "keyword", next: "@option.$S2" },
            enum: { token: "keyword", next: "@enumDecl.$S2" },
            message: { token: "keyword", next: "@messageDecl.$S2" },
            service: { token: "keyword", next: "@serviceDecl.$S2" },
            extend: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@extendDecl.$S2" }
              }
            },
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ]
    ],
    enumDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@enumBody.$S2" }]
    ],
    enumBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/;/, "delimiter"],
      [/option\b/, "keyword", "@option.$S2"],
      [/@identifier/, "identifier"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    messageDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@messageBody.$S2" }]
    ],
    messageBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/=/, "operators"],
      [/;/, "delimiter"],
      [
        "(map)(s*)(<)",
        ["keyword", "white", { token: "@brackets", bracket: "@open", next: "@map.$S2" }]
      ],
      [
        /@identifier/,
        {
          cases: {
            option: { token: "keyword", next: "@option.$S2" },
            enum: { token: "keyword", next: "@enumDecl.$S2" },
            message: { token: "keyword", next: "@messageDecl.$S2" },
            oneof: { token: "keyword", next: "@oneofDecl.$S2" },
            extensions: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@reserved.$S2" }
              }
            },
            reserved: { token: "keyword", next: "@reserved.$S2" },
            "(?:repeated|optional)": { token: "keyword", next: "@field.$S2" },
            required: {
              cases: {
                "$S2==proto2": { token: "keyword", next: "@field.$S2" }
              }
            },
            "$S2==proto3": { token: "@rematch", next: "@field.$S2" }
          }
        }
      ],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    extendDecl: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@extendBody.$S2" }]
    ],
    extendBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/(?:repeated|optional|required)/, "keyword", "@field.$S2"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    options: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator"],
      [/\]/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    option: [
      { include: "@whitespace" },
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator", "@pop"]
    ],
    oneofDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@oneofBody.$S2" }]
    ],
    oneofBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/(@identifier)(\s*)(=)/, ["identifier", "white", "delimiter"]],
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    reserved: [
      { include: "@whitespace" },
      [/,/, "delimiter"],
      [/;/, "delimiter", "@pop"],
      { include: "@constant" },
      [/to\b|max\b/, "keyword"]
    ],
    map: [
      { include: "@whitespace" },
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ],
      [/,/, "delimiter"],
      [/>/, { token: "@brackets", bracket: "@close", switchTo: "identifier" }]
    ],
    field: [
      { include: "@whitespace" },
      [
        "group",
        {
          cases: {
            "$S2==proto2": { token: "keyword", switchTo: "@groupDecl.$S2" }
          }
        }
      ],
      [/(@identifier)(\s*)(=)/, ["identifier", "white", { token: "delimiter", next: "@pop" }]],
      [
        /@fullIdentifier|\./,
        {
          cases: {
            "@builtinTypes": "keyword",
            "@default": "type.identifier"
          }
        }
      ]
    ],
    groupDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      ["=", "operator"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@messageBody.$S2" }],
      { include: "@constant" }
    ],
    type: [
      { include: "@whitespace" },
      [/@identifier/, "type.identifier", "@pop"],
      [/./, "delimiter"]
    ],
    identifier: [{ include: "@whitespace" }, [/@identifier/, "identifier", "@pop"]],
    serviceDecl: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/{/, { token: "@brackets", bracket: "@open", switchTo: "@serviceBody.$S2" }]
    ],
    serviceBody: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      [/option\b/, "keyword", "@option.$S2"],
      [/rpc\b/, "keyword", "@rpc.$S2"],
      [/\[/, { token: "@brackets", bracket: "@open", next: "@options.$S2" }],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ],
    rpc: [
      { include: "@whitespace" },
      [/@identifier/, "identifier"],
      [/\(/, { token: "@brackets", bracket: "@open", switchTo: "@request.$S2" }],
      [/{/, { token: "@brackets", bracket: "@open", next: "@methodOptions.$S2" }],
      [/;/, "delimiter", "@pop"]
    ],
    request: [
      { include: "@whitespace" },
      [
        /@messageType/,
        {
          cases: {
            stream: { token: "keyword", next: "@type.$S2" },
            "@default": "type.identifier"
          }
        }
      ],
      [/\)/, { token: "@brackets", bracket: "@close", switchTo: "@returns.$S2" }]
    ],
    returns: [
      { include: "@whitespace" },
      [/returns\b/, "keyword"],
      [/\(/, { token: "@brackets", bracket: "@open", switchTo: "@response.$S2" }]
    ],
    response: [
      { include: "@whitespace" },
      [
        /@messageType/,
        {
          cases: {
            stream: { token: "keyword", next: "@type.$S2" },
            "@default": "type.identifier"
          }
        }
      ],
      [/\)/, { token: "@brackets", bracket: "@close", switchTo: "@rpc.$S2" }]
    ],
    methodOptions: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/;/, "delimiter"],
      ["option", "keyword"],
      [/@optionName/, "annotation"],
      [/[()]/, "annotation.brackets"],
      [/=/, "operator"],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
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
    stringSingle: [
      [/[^\\']+/, "string"],
      [/@escapes/, "string.escape"],
      [/\\./, "string.escape.invalid"],
      [/'/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    constant: [
      ["@boolLit", "keyword.constant"],
      ["@hexLit", "number.hex"],
      ["@octalLit", "number.octal"],
      ["@decimalLit", "number"],
      ["@floatLit", "number.float"],
      [/("([^"\\]|\\.)*|'([^'\\]|\\.)*)$/, "string.invalid"],
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
      [/'/, { token: "string.quote", bracket: "@open", next: "@stringSingle" }],
      [/{/, { token: "@brackets", bracket: "@open", next: "@prototext" }],
      [/identifier/, "identifier"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/\/\*/, "comment", "@comment"],
      [/\/\/.*$/, "comment"]
    ],
    prototext: [
      { include: "@whitespace" },
      { include: "@constant" },
      [/@identifier/, "identifier"],
      [/[:;]/, "delimiter"],
      [/}/, { token: "@brackets", bracket: "@close", next: "@pop" }]
    ]
  }
};



/***/ }),

/***/ 44759:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/pug/pug.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "pug",
  extensions: [".jade", ".pug"],
  aliases: ["Pug", "Jade", "jade"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 76598));
    }
  }
});


/***/ }),

/***/ 76598:
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

// src/basic-languages/pug/pug.ts
var conf = {
  comments: {
    lineComment: "//"
  },
  brackets: [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ["string", "comment"] },
    { open: "'", close: "'", notIn: ["string", "comment"] },
    { open: "{", close: "}", notIn: ["string", "comment"] },
    { open: "[", close: "]", notIn: ["string", "comment"] },
    { open: "(", close: ")", notIn: ["string", "comment"] }
  ],
  folding: {
    offSide: true
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".pug",
  ignoreCase: true,
  brackets: [
    { token: "delimiter.curly", open: "{", close: "}" },
    { token: "delimiter.array", open: "[", close: "]" },
    { token: "delimiter.parenthesis", open: "(", close: ")" }
  ],
  keywords: [
    "append",
    "block",
    "case",
    "default",
    "doctype",
    "each",
    "else",
    "extends",
    "for",
    "if",
    "in",
    "include",
    "mixin",
    "typeof",
    "unless",
    "var",
    "when"
  ],
  tags: [
    "a",
    "abbr",
    "acronym",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "command",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "keygen",
    "kbd",
    "label",
    "li",
    "link",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "tracks",
    "tt",
    "u",
    "ul",
    "video",
    "wbr"
  ],
  symbols: /[\+\-\*\%\&\|\!\=\/\.\,\:]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [
        /^(\s*)([a-zA-Z_-][\w-]*)/,
        {
          cases: {
            "$2@tags": {
              cases: {
                "@eos": ["", "tag"],
                "@default": ["", { token: "tag", next: "@tag.$1" }]
              }
            },
            "$2@keywords": ["", { token: "keyword.$2" }],
            "@default": ["", ""]
          }
        }
      ],
      [
        /^(\s*)(#[a-zA-Z_-][\w-]*)/,
        {
          cases: {
            "@eos": ["", "tag.id"],
            "@default": ["", { token: "tag.id", next: "@tag.$1" }]
          }
        }
      ],
      [
        /^(\s*)(\.[a-zA-Z_-][\w-]*)/,
        {
          cases: {
            "@eos": ["", "tag.class"],
            "@default": ["", { token: "tag.class", next: "@tag.$1" }]
          }
        }
      ],
      [/^(\s*)(\|.*)$/, ""],
      { include: "@whitespace" },
      [
        /[a-zA-Z_$][\w$]*/,
        {
          cases: {
            "@keywords": { token: "keyword.$0" },
            "@default": ""
          }
        }
      ],
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, "delimiter"],
      [/\d+\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\d+/, "number"],
      [/"/, "string", '@string."'],
      [/'/, "string", "@string.'"]
    ],
    tag: [
      [/(\.)(\s*$)/, [{ token: "delimiter", next: "@blockText.$S2." }, ""]],
      [/\s+/, { token: "", next: "@simpleText" }],
      [
        /#[a-zA-Z_-][\w-]*/,
        {
          cases: {
            "@eos": { token: "tag.id", next: "@pop" },
            "@default": "tag.id"
          }
        }
      ],
      [
        /\.[a-zA-Z_-][\w-]*/,
        {
          cases: {
            "@eos": { token: "tag.class", next: "@pop" },
            "@default": "tag.class"
          }
        }
      ],
      [/\(/, { token: "delimiter.parenthesis", next: "@attributeList" }]
    ],
    simpleText: [
      [/[^#]+$/, { token: "", next: "@popall" }],
      [/[^#]+/, { token: "" }],
      [
        /(#{)([^}]*)(})/,
        {
          cases: {
            "@eos": [
              "interpolation.delimiter",
              "interpolation",
              {
                token: "interpolation.delimiter",
                next: "@popall"
              }
            ],
            "@default": ["interpolation.delimiter", "interpolation", "interpolation.delimiter"]
          }
        }
      ],
      [/#$/, { token: "", next: "@popall" }],
      [/#/, ""]
    ],
    attributeList: [
      [/\s+/, ""],
      [
        /(\w+)(\s*=\s*)("|')/,
        ["attribute.name", "delimiter", { token: "attribute.value", next: "@value.$3" }]
      ],
      [/\w+/, "attribute.name"],
      [
        /,/,
        {
          cases: {
            "@eos": {
              token: "attribute.delimiter",
              next: "@popall"
            },
            "@default": "attribute.delimiter"
          }
        }
      ],
      [/\)$/, { token: "delimiter.parenthesis", next: "@popall" }],
      [/\)/, { token: "delimiter.parenthesis", next: "@pop" }]
    ],
    whitespace: [
      [/^(\s*)(\/\/.*)$/, { token: "comment", next: "@blockText.$1.comment" }],
      [/[ \t\r\n]+/, ""],
      [/<!--/, { token: "comment", next: "@comment" }]
    ],
    blockText: [
      [
        /^\s+.*$/,
        {
          cases: {
            "($S2\\s+.*$)": { token: "$S3" },
            "@default": { token: "@rematch", next: "@popall" }
          }
        }
      ],
      [/./, { token: "@rematch", next: "@popall" }]
    ],
    comment: [
      [/[^<\-]+/, "comment.content"],
      [/-->/, { token: "comment", next: "@pop" }],
      [/<!--/, "comment.content.invalid"],
      [/[<\-]/, "comment.content"]
    ],
    string: [
      [
        /[^\\"'#]+/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ],
      [
        /@escapes/,
        {
          cases: {
            "@eos": { token: "string.escape", next: "@popall" },
            "@default": "string.escape"
          }
        }
      ],
      [
        /\\./,
        {
          cases: {
            "@eos": {
              token: "string.escape.invalid",
              next: "@popall"
            },
            "@default": "string.escape.invalid"
          }
        }
      ],
      [/(#{)([^}]*)(})/, ["interpolation.delimiter", "interpolation", "interpolation.delimiter"]],
      [/#/, "string"],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": { token: "string" }
          }
        }
      ]
    ],
    value: [
      [
        /[^\\"']+/,
        {
          cases: {
            "@eos": { token: "attribute.value", next: "@popall" },
            "@default": "attribute.value"
          }
        }
      ],
      [
        /\\./,
        {
          cases: {
            "@eos": { token: "attribute.value", next: "@popall" },
            "@default": "attribute.value"
          }
        }
      ],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "attribute.value", next: "@pop" },
            "@default": { token: "attribute.value" }
          }
        }
      ]
    ]
  }
};



/***/ }),

/***/ 57738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/python/python.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "python",
  extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
  aliases: ["Python", "py"],
  firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 27752));
    }
  }
});


/***/ }),

/***/ 27752:
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


// src/basic-languages/python/python.ts
var conf = {
  comments: {
    lineComment: "#",
    blockComment: ["'''", "'''"]
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
    { open: '"', close: '"', notIn: ["string"] },
    { open: "'", close: "'", notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  onEnterRules: [
    {
      beforeText: new RegExp("^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async|match|case).*?:\\s*$"),
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }
    }
  ],
  folding: {
    offSide: true,
    markers: {
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
var language = {
  defaultToken: "",
  tokenPostfix: ".python",
  keywords: [
    "False",
    "None",
    "True",
    "_",
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "exec",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal",
    "not",
    "or",
    "pass",
    "print",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield",
    "int",
    "float",
    "long",
    "complex",
    "hex",
    "abs",
    "all",
    "any",
    "apply",
    "basestring",
    "bin",
    "bool",
    "buffer",
    "bytearray",
    "callable",
    "chr",
    "classmethod",
    "cmp",
    "coerce",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "execfile",
    "file",
    "filter",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "id",
    "input",
    "intern",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "locals",
    "list",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "reversed",
    "range",
    "raw_input",
    "reduce",
    "reload",
    "repr",
    "reversed",
    "round",
    "self",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "unichr",
    "unicode",
    "vars",
    "xrange",
    "zip",
    "__dict__",
    "__methods__",
    "__members__",
    "__class__",
    "__bases__",
    "__name__",
    "__mro__",
    "__subclasses__",
    "__init__",
    "__import__"
  ],
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  tokenizer: {
    root: [
      { include: "@whitespace" },
      { include: "@numbers" },
      { include: "@strings" },
      [/[,:;]/, "delimiter"],
      [/[{}\[\]()]/, "@brackets"],
      [/@[a-zA-Z_]\w*/, "tag"],
      [
        /[a-zA-Z_]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@default": "identifier"
          }
        }
      ]
    ],
    whitespace: [
      [/\s+/, "white"],
      [/(^#.*$)/, "comment"],
      [/'''/, "string", "@endDocString"],
      [/"""/, "string", "@endDblDocString"]
    ],
    endDocString: [
      [/[^']+/, "string"],
      [/\\'/, "string"],
      [/'''/, "string", "@popall"],
      [/'/, "string"]
    ],
    endDblDocString: [
      [/[^"]+/, "string"],
      [/\\"/, "string"],
      [/"""/, "string", "@popall"],
      [/"/, "string"]
    ],
    numbers: [
      [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, "number.hex"],
      [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, "number"]
    ],
    strings: [
      [/'$/, "string.escape", "@popall"],
      [/'/, "string.escape", "@stringBody"],
      [/"$/, "string.escape", "@popall"],
      [/"/, "string.escape", "@dblStringBody"]
    ],
    stringBody: [
      [/[^\\']+$/, "string", "@popall"],
      [/[^\\']+/, "string"],
      [/\\./, "string"],
      [/'/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ],
    dblStringBody: [
      [/[^\\"]+$/, "string", "@popall"],
      [/[^\\"]+/, "string"],
      [/\\./, "string"],
      [/"/, "string.escape", "@popall"],
      [/\\$/, "string"]
    ]
  }
};



/***/ }),

/***/ 80821:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/qsharp/qsharp.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "qsharp",
  extensions: [".qs"],
  aliases: ["Q#", "qsharp"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 69229));
    }
  }
});


/***/ }),

/***/ 69229:
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

// src/basic-languages/qsharp/qsharp.ts
var conf = {
  comments: {
    lineComment: "//"
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
    { open: '"', close: '"', notIn: ["string", "comment"] }
  ],
  surroundingPairs: [
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ]
};
var language = {
  keywords: [
    "namespace",
    "open",
    "as",
    "operation",
    "function",
    "body",
    "adjoint",
    "newtype",
    "controlled",
    "if",
    "elif",
    "else",
    "repeat",
    "until",
    "fixup",
    "for",
    "in",
    "while",
    "return",
    "fail",
    "within",
    "apply",
    "Adjoint",
    "Controlled",
    "Adj",
    "Ctl",
    "is",
    "self",
    "auto",
    "distribute",
    "invert",
    "intrinsic",
    "let",
    "set",
    "w/",
    "new",
    "not",
    "and",
    "or",
    "use",
    "borrow",
    "using",
    "borrowing",
    "mutable",
    "internal"
  ],
  typeKeywords: [
    "Unit",
    "Int",
    "BigInt",
    "Double",
    "Bool",
    "String",
    "Qubit",
    "Result",
    "Pauli",
    "Range"
  ],
  invalidKeywords: [
    "abstract",
    "base",
    "bool",
    "break",
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
    "enum",
    "event",
    "explicit",
    "extern",
    "finally",
    "fixed",
    "float",
    "foreach",
    "goto",
    "implicit",
    "int",
    "interface",
    "lock",
    "long",
    "null",
    "object",
    "operator",
    "out",
    "override",
    "params",
    "private",
    "protected",
    "public",
    "readonly",
    "ref",
    "sbyte",
    "sealed",
    "short",
    "sizeof",
    "stackalloc",
    "static",
    "string",
    "struct",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "unit",
    "ulong",
    "unchecked",
    "unsafe",
    "ushort",
    "virtual",
    "void",
    "volatile"
  ],
  constants: ["true", "false", "PauliI", "PauliX", "PauliY", "PauliZ", "One", "Zero"],
  builtin: [
    "X",
    "Y",
    "Z",
    "H",
    "HY",
    "S",
    "T",
    "SWAP",
    "CNOT",
    "CCNOT",
    "MultiX",
    "R",
    "RFrac",
    "Rx",
    "Ry",
    "Rz",
    "R1",
    "R1Frac",
    "Exp",
    "ExpFrac",
    "Measure",
    "M",
    "MultiM",
    "Message",
    "Length",
    "Assert",
    "AssertProb",
    "AssertEqual"
  ],
  operators: [
    "and=",
    "<-",
    "->",
    "*",
    "*=",
    "@",
    "!",
    "^",
    "^=",
    ":",
    "::",
    "..",
    "==",
    "...",
    "=",
    "=>",
    ">",
    ">=",
    "<",
    "<=",
    "-",
    "-=",
    "!=",
    "or=",
    "%",
    "%=",
    "|",
    "+",
    "+=",
    "?",
    "/",
    "/=",
    "&&&",
    "&&&=",
    "^^^",
    "^^^=",
    ">>>",
    ">>>=",
    "<<<",
    "<<<=",
    "|||",
    "|||=",
    "~~~",
    "_",
    "w/",
    "w/="
  ],
  namespaceFollows: ["namespace", "open"],
  symbols: /[=><!~?:&|+\-*\/\^%@._]+/,
  escapes: /\\[\s\S]/,
  tokenizer: {
    root: [
      [
        /[a-zA-Z_$][\w$]*/,
        {
          cases: {
            "@namespaceFollows": {
              token: "keyword.$0",
              next: "@namespace"
            },
            "@typeKeywords": "type",
            "@keywords": "keyword",
            "@constants": "constant",
            "@builtin": "keyword",
            "@invalidKeywords": "invalid",
            "@default": "identifier"
          }
        }
      ],
      { include: "@whitespace" },
      [/[{}()\[\]]/, "@brackets"],
      [/@symbols/, { cases: { "@operators": "operator", "@default": "" } }],
      [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/\d+/, "number"],
      [/[;,.]/, "delimiter"],
      [/"/, { token: "string.quote", bracket: "@open", next: "@string" }]
    ],
    string: [
      [/[^\\"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
    ],
    namespace: [
      { include: "@whitespace" },
      [/[A-Za-z]\w*/, "namespace"],
      [/[\.=]/, "delimiter"],
      ["", "", "@pop"]
    ],
    whitespace: [
      [/[ \t\r\n]+/, "white"],
      [/(\/\/).*/, "comment"]
    ]
  }
};



/***/ }),

/***/ 41996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contribution_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96586);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/r/r.contribution.ts

(0,_contribution_js__WEBPACK_IMPORTED_MODULE_0__/* .registerLanguage */ .H)({
  id: "r",
  extensions: [".r", ".rhistory", ".rmd", ".rprofile", ".rt"],
  aliases: ["R", "r"],
  loader: () => {
    if (false) {} else {
      return Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae")]).then(__webpack_require__.bind(__webpack_require__, 56628));
    }
  }
});


/***/ }),

/***/ 56628:
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

// src/basic-languages/r/r.ts
var conf = {
  comments: {
    lineComment: "#"
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
    { open: "{", close: "}" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".r",
  roxygen: [
    "@alias",
    "@aliases",
    "@assignee",
    "@author",
    "@backref",
    "@callGraph",
    "@callGraphDepth",
    "@callGraphPrimitives",
    "@concept",
    "@describeIn",
    "@description",
    "@details",
    "@docType",
    "@encoding",
    "@evalNamespace",
    "@evalRd",
    "@example",
    "@examples",
    "@export",
    "@exportClass",
    "@exportMethod",
    "@exportPattern",
    "@family",
    "@field",
    "@formals",
    "@format",
    "@import",
    "@importClassesFrom",
    "@importFrom",
    "@importMethodsFrom",
    "@include",
    "@inherit",
    "@inheritDotParams",
    "@inheritParams",
    "@inheritSection",
    "@keywords",
    "@md",
    "@method",
    "@name",
    "@noMd",
    "@noRd",
    "@note",
    "@param",
    "@rawNamespace",
    "@rawRd",
    "@rdname",
    "@references",
    "@return",
    "@S3method",
    "@section",
    "@seealso",
    "@setClass",
    "@slot",
    "@source",
    "@template",
    "@templateVar",
    "@title",
    "@TODO",
    "@usage",
    "@useDynLib"
  ],
  constants: [
    "NULL",
    "FALSE",
    "TRUE",
    "NA",
    "Inf",
    "NaN",
    "NA_integer_",
    "NA_real_",
    "NA_complex_",
    "NA_character_",
    "T",
    "F",
    "LETTERS",
    "letters",
    "month.abb",
    "month.name",
    "pi",
    "R.version.string"
  ],
  keywords: [
    "break",
    "next",
    "return",
    "if",
    "else",
    "for",
    "in",
    "repeat",
    "while",
    "array",
    "category",
    "character",
    "complex",
    "double",
    "function",
    "integer",
    "list",
    "logical",
    "matrix",
    "numeric",
    "vector",
    "data.frame",
    "factor",
    "library",
    "require",
    "attach",
    "detach",
    "source"
  ],
  special: ["\\n", "\\r", "\\t", "\\b", "\\a", "\\f", "\\v", "\\'", '\\"', "\\\\"],
  brackets: [
    { open: "{", close: "}", token: "delimiter.curly" },
    { open: "[", close: "]", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" }
  ],
  tokenizer: {
    root: [
      { include: "@numbers" },
      { include: "@strings" },
      [/[{}\[\]()]/, "@brackets"],
      { include: "@operators" },
      [/#'$/, "comment.doc"],
      [/#'/, "comment.doc", "@roxygen"],
      [/(^#.*$)/, "comment"],
      [/\s+/, "white"],
      [/[,:;]/, "delimiter"],
      [/@[a-zA-Z]\w*/, "tag"],
      [
        /[a-zA-Z]\w*/,
        {
          cases: {
            "@keywords": "keyword",
            "@constants": "constant",
            "@default": "identifier"
          }
        }
      ]
    ],
    roxygen: [
      [
        /@\w+/,
        {
          cases: {
            "@roxygen": "tag",
            "@eos": { token: "comment.doc", next: "@pop" },
            "@default": "comment.doc"
          }
        }
      ],
      [
        /\s+/,
        {
          cases: {
            "@eos": { token: "comment.doc", next: "@pop" },
            "@default": "comment.doc"
          }
        }
      ],
      [/.*/, { token: "comment.doc", next: "@pop" }]
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/-?(\d*\.)?\d+([eE][+\-]?\d+)?/, "number"]
    ],
    operators: [
      [/<{1,2}-/, "operator"],
      [/->{1,2}/, "operator"],
      [/%[^%\s]+%/, "operator"],
      [/\*\*/, "operator"],
      [/%%/, "operator"],
      [/&&/, "operator"],
      [/\|\|/, "operator"],
      [/<</, "operator"],
      [/>>/, "operator"],
      [/[-+=&|!<>^~*/:$]/, "operator"]
    ],
    strings: [
      [/'/, "string.escape", "@stringBody"],
      [/"/, "string.escape", "@dblStringBody"]
    ],
    stringBody: [
      [
        /\\./,
        {
          cases: {
            "@special": "string",
            "@default": "error-token"
          }
        }
      ],
      [/'/, "string.escape", "@popall"],
      [/./, "string"]
    ],
    dblStringBody: [
      [
        /\\./,
        {
          cases: {
            "@special": "string",
            "@default": "error-token"
          }
        }
      ],
      [/"/, "string.escape", "@popall"],
      [/./, "string"]
    ]
  }
};



/***/ })

}]);