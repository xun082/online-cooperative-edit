"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-381b041e"],{

/***/ 27752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .rendered-markdown kbd {\n\tbackground-color: var(--vscode-keybindingLabel-background);\n\tcolor: var(--vscode-keybindingLabel-foreground);\n\tborder-style: solid;\n\tborder-width: 1px;\n\tborder-radius: 3px;\n\tborder-color: var(--vscode-keybindingLabel-border);\n\tborder-bottom-color: var(--vscode-keybindingLabel-bottomBorder);\n\tbox-shadow: inset 0 -1px 0 var(--vscode-widget-shadow);\n\tvertical-align: middle;\n\tpadding: 1px 3px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 33072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .monaco-editor-overlaymessage {\n\tpadding-bottom: 8px;\n\tz-index: 10000;\n}\n\n.monaco-editor .monaco-editor-overlaymessage.below {\n\tpadding-bottom: 0;\n\tpadding-top: 8px;\n\tz-index: 10000;\n}\n\n@keyframes fadeIn {\n\tfrom { opacity: 0; }\n\tto { opacity: 1; }\n}\n.monaco-editor .monaco-editor-overlaymessage.fadeIn {\n\tanimation: fadeIn 150ms ease-out;\n}\n\n@keyframes fadeOut {\n\tfrom { opacity: 1; }\n\tto { opacity: 0; }\n}\n.monaco-editor .monaco-editor-overlaymessage.fadeOut {\n\tanimation: fadeOut 100ms ease-out;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .message {\n\tpadding: 2px 4px;\n\tcolor: var(--vscode-editorHoverWidget-foreground);\n\tbackground-color: var(--vscode-editorHoverWidget-background);\n\tborder: 1px solid var(--vscode-inputValidation-infoBorder);\n\tborder-radius: 3px;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .message p {\n\tmargin-block: 0px;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .message a {\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-editor .monaco-editor-overlaymessage .message a:hover {\n\tcolor: var(--vscode-textLink-activeForeground);\n}\n\n.monaco-editor.hc-black .monaco-editor-overlaymessage .message,\n.monaco-editor.hc-light .monaco-editor-overlaymessage .message {\n\tborder-width: 2px;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .anchor {\n\twidth: 0 !important;\n\theight: 0 !important;\n\tborder-color: transparent;\n\tborder-style: solid;\n\tz-index: 1000;\n\tborder-width: 8px;\n\tposition: absolute;\n\tleft: 2px;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .anchor.top {\n\tborder-bottom-color: var(--vscode-inputValidation-infoBorder);\n}\n\n.monaco-editor .monaco-editor-overlaymessage .anchor.below {\n\tborder-top-color: var(--vscode-inputValidation-infoBorder);\n}\n\n.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,\n.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {\n\tdisplay: none;\n}\n\n.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {\n\tdisplay: inherit;\n\ttop: -8px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 12944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .parameter-hints-widget {\n\t/* Must be higher than the sash's z-index and terminal canvases but lower than the suggest widget */\n\tz-index: 39;\n\tdisplay: flex;\n\tflex-direction: column;\n\tline-height: 1.5em;\n\tcursor: default;\n\tcolor: var(--vscode-editorHoverWidget-foreground);\n\tbackground-color: var(--vscode-editorHoverWidget-background);\n\tborder: 1px solid var(--vscode-editorHoverWidget-border);\n}\n\n.hc-black .monaco-editor .parameter-hints-widget,\n.hc-light .monaco-editor .parameter-hints-widget {\n\tborder-width: 2px;\n}\n\n.monaco-editor .parameter-hints-widget > .phwrapper {\n\tmax-width: 440px;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.monaco-editor .parameter-hints-widget.multiple {\n\tmin-height: 3.3em;\n\tpadding: 0;\n}\n\n.monaco-editor .parameter-hints-widget.multiple .body::before {\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 100%;\n\tposition: absolute;\n\topacity: 0.5;\n\tborder-left: 1px solid var(--vscode-editorHoverWidget-border);\n}\n\n.monaco-editor .parameter-hints-widget p,\n.monaco-editor .parameter-hints-widget ul {\n\tmargin: 8px 0;\n}\n\n.monaco-editor .parameter-hints-widget .monaco-scrollable-element,\n.monaco-editor .parameter-hints-widget .body {\n\tdisplay: flex;\n\tflex: 1;\n\tflex-direction: column;\n\tmin-height: 100%;\n}\n\n.monaco-editor .parameter-hints-widget .signature {\n\tpadding: 4px 5px;\n\tposition: relative;\n}\n\n.monaco-editor .parameter-hints-widget .signature.has-docs::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\twidth: 100%;\n\tpadding-top: 4px;\n\topacity: 0.5;\n\tborder-bottom: 1px solid var(--vscode-editorHoverWidget-border);\n}\n\n.monaco-editor .parameter-hints-widget .docs {\n\tpadding: 0 10px 0 5px;\n\twhite-space: pre-wrap;\n}\n\n.monaco-editor .parameter-hints-widget .docs.empty {\n\tdisplay: none;\n}\n\n.monaco-editor .parameter-hints-widget .docs a {\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-editor .parameter-hints-widget .docs a:hover {\n\tcolor: var(--vscode-textLink-activeForeground);\n\tcursor: pointer;\n}\n\n.monaco-editor .parameter-hints-widget .docs .markdown-docs {\n\twhite-space: initial;\n}\n\n.monaco-editor .parameter-hints-widget .docs code {\n\tfont-family: var(--monaco-monospace-font);\n\tborder-radius: 3px;\n\tpadding: 0 0.4em;\n\tbackground-color: var(--vscode-textCodeBlock-background);\n}\n\n.monaco-editor .parameter-hints-widget .docs .monaco-tokenized-source,\n.monaco-editor .parameter-hints-widget .docs .code {\n\twhite-space: pre-wrap;\n}\n\n.monaco-editor .parameter-hints-widget .controls {\n\tdisplay: none;\n\tflex-direction: column;\n\talign-items: center;\n\tmin-width: 22px;\n\tjustify-content: flex-end;\n}\n\n.monaco-editor .parameter-hints-widget.multiple .controls {\n\tdisplay: flex;\n\tpadding: 0 2px;\n}\n\n.monaco-editor .parameter-hints-widget.multiple .button {\n\twidth: 16px;\n\theight: 16px;\n\tbackground-repeat: no-repeat;\n\tcursor: pointer;\n}\n\n.monaco-editor .parameter-hints-widget .button.previous {\n\tbottom: 24px;\n}\n\n.monaco-editor .parameter-hints-widget .overloads {\n\ttext-align: center;\n\theight: 12px;\n\tline-height: 12px;\n\tfont-family: var(--monaco-monospace-font);\n}\n\n.monaco-editor .parameter-hints-widget .signature .parameter.active {\n\tcolor: var(--vscode-editorHoverWidget-highlightForeground);\n\tfont-weight: bold;\n}\n\n.monaco-editor .parameter-hints-widget .documentation-parameter > .parameter {\n\tfont-weight: bold;\n\tmargin-right: 0.5em;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 29165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .peekview-widget .head {\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: nowrap;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title {\n\tdisplay: flex;\n\talign-items: baseline;\n\tfont-size: 13px;\n\tmargin-left: 20px;\n\tmin-width: 0;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title.clickable {\n\tcursor: pointer;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .dirname:not(:empty) {\n\tfont-size: 0.9em;\n\tmargin-left: 0.5em;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .meta {\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .dirname {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .filename {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .meta:not(:empty)::before {\n\tcontent: '-';\n\tpadding: 0 0.3em;\n}\n\n.monaco-editor .peekview-widget .head .peekview-actions {\n\tflex: 1;\n\ttext-align: right;\n\tpadding-right: 2px;\n}\n\n.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar {\n\tdisplay: inline-block;\n}\n\n.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar,\n.monaco-editor .peekview-widget .head .peekview-actions > .monaco-action-bar > .actions-container {\n\theight: 100%;\n}\n\n.monaco-editor .peekview-widget > .body {\n\tborder-top: 1px solid;\n\tposition: relative;\n}\n\n.monaco-editor .peekview-widget .head .peekview-title .codicon {\n\tmargin-right: 4px;\n\talign-self: center;\n}\n\n.monaco-editor .peekview-widget .monaco-list .monaco-list-row.focused .codicon {\n\tcolor: inherit !important;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 90166:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79959);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class LongLinesHelper extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(_editor) {
        super();
        this._editor = _editor;
        this._register(this._editor.onMouseDown((e) => {
            const stopRenderingLineAfter = this._editor.getOption(115 /* EditorOption.stopRenderingLineAfter */);
            if (stopRenderingLineAfter >= 0 && e.target.type === 6 /* MouseTargetType.CONTENT_TEXT */ && e.target.position.column >= stopRenderingLineAfter) {
                this._editor.updateOptions({
                    stopRenderingLineAfter: -1
                });
            }
        }));
    }
}
LongLinesHelper.ID = 'editor.contrib.longLinesHelper';
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorContribution */ ._K)(LongLinesHelper.ID, LongLinesHelper, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);


/***/ }),

/***/ 35032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: function() { return /* binding */ MarkdownRenderer; },
  N: function() { return /* binding */ openLinkFromMarkdown; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js
var markdownRenderer = __webpack_require__(52405);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/trustedTypes.js
var trustedTypes = __webpack_require__(68069);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/renderedMarkdown.css
var renderedMarkdown = __webpack_require__(27752);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/renderedMarkdown.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(renderedMarkdown/* default */.Z, options);




       /* harmony default export */ var browser_renderedMarkdown = (renderedMarkdown/* default */.Z && renderedMarkdown/* default */.Z.locals ? renderedMarkdown/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js
var domFontInfo = __webpack_require__(93887);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(57164);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(67984);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/textToHtmlTokenizer.js
var textToHtmlTokenizer = __webpack_require__(42397);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(43759);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











/**
 * Markdown renderer that can render codeblocks with the editor mechanics. This
 * renderer should always be preferred.
 */
let MarkdownRenderer = class MarkdownRenderer {
    constructor(_options, _languageService, _openerService) {
        this._options = _options;
        this._languageService = _languageService;
        this._openerService = _openerService;
        this._onDidRenderAsync = new common_event/* Emitter */.Q5();
        this.onDidRenderAsync = this._onDidRenderAsync.event;
    }
    dispose() {
        this._onDidRenderAsync.dispose();
    }
    render(markdown, options, markedOptions) {
        if (!markdown) {
            const element = document.createElement('span');
            return { element, dispose: () => { } };
        }
        const disposables = new lifecycle/* DisposableStore */.SL();
        const rendered = disposables.add((0,markdownRenderer/* renderMarkdown */.ap)(markdown, Object.assign(Object.assign({}, this._getRenderOptions(markdown, disposables)), options), markedOptions));
        rendered.element.classList.add('rendered-markdown');
        return {
            element: rendered.element,
            dispose: () => disposables.dispose()
        };
    }
    _getRenderOptions(markdown, disposables) {
        return {
            codeBlockRenderer: (languageAlias, value) => __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                // In markdown,
                // it is possible that we stumble upon language aliases (e.g.js instead of javascript)
                // it is possible no alias is given in which case we fall back to the current editor lang
                let languageId;
                if (languageAlias) {
                    languageId = this._languageService.getLanguageIdByLanguageName(languageAlias);
                }
                else if (this._options.editor) {
                    languageId = (_a = this._options.editor.getModel()) === null || _a === void 0 ? void 0 : _a.getLanguageId();
                }
                if (!languageId) {
                    languageId = modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd;
                }
                const html = yield (0,textToHtmlTokenizer/* tokenizeToString */.C2)(this._languageService, value, languageId);
                const element = document.createElement('span');
                element.innerHTML = ((_c = (_b = MarkdownRenderer._ttpTokenizer) === null || _b === void 0 ? void 0 : _b.createHTML(html)) !== null && _c !== void 0 ? _c : html);
                // use "good" font
                if (this._options.editor) {
                    const fontInfo = this._options.editor.getOption(49 /* EditorOption.fontInfo */);
                    (0,domFontInfo/* applyFontInfo */.N)(element, fontInfo);
                }
                else if (this._options.codeBlockFontFamily) {
                    element.style.fontFamily = this._options.codeBlockFontFamily;
                }
                if (this._options.codeBlockFontSize !== undefined) {
                    element.style.fontSize = this._options.codeBlockFontSize;
                }
                return element;
            }),
            asyncRenderCallback: () => this._onDidRenderAsync.fire(),
            actionHandler: {
                callback: (link) => openLinkFromMarkdown(this._openerService, link, markdown.isTrusted),
                disposables: disposables
            }
        };
    }
};
MarkdownRenderer._ttpTokenizer = (0,trustedTypes/* createTrustedTypesPolicy */.Z)('tokenizeToString', {
    createHTML(html) {
        return html;
    }
});
MarkdownRenderer = __decorate([
    __param(1, language/* ILanguageService */.O),
    __param(2, common_opener/* IOpenerService */.v4)
], MarkdownRenderer);

function openLinkFromMarkdown(openerService, link, isTrusted) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield openerService.open(link, {
                fromUserGesture: true,
                allowContributedOpeners: true,
                allowCommands: toAllowCommandsOption(isTrusted),
            });
        }
        catch (e) {
            (0,errors/* onUnexpectedError */.dL)(e);
            return false;
        }
    });
}
function toAllowCommandsOption(isTrusted) {
    if (isTrusted === true) {
        return true; // Allow all commands
    }
    if (isTrusted && Array.isArray(isTrusted.enabledCommands)) {
        return isTrusted.enabledCommands; // Allow subset of commands
    }
    return false; // Block commands
}


/***/ }),

/***/ 79905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: function() { return /* binding */ MessageController; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js
var markdownRenderer = __webpack_require__(52405);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(39194);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(52610);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.css
var messageController = __webpack_require__(33072);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(messageController/* default */.Z, options);




       /* harmony default export */ var browser_messageController = (messageController/* default */.Z && messageController/* default */.Z.locals ? messageController/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js + 1 modules
var browser_markdownRenderer = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(43759);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













let MessageController = class MessageController {
    static get(editor) {
        return editor.getContribution(MessageController.ID);
    }
    constructor(editor, contextKeyService, _openerService) {
        this._openerService = _openerService;
        this._messageWidget = new lifecycle/* MutableDisposable */.XK();
        this._messageListeners = new lifecycle/* DisposableStore */.SL();
        this._mouseOverMessage = false;
        this._editor = editor;
        this._visible = MessageController.MESSAGE_VISIBLE.bindTo(contextKeyService);
    }
    dispose() {
        var _a;
        (_a = this._message) === null || _a === void 0 ? void 0 : _a.dispose();
        this._messageListeners.dispose();
        this._messageWidget.dispose();
        this._visible.reset();
    }
    showMessage(message, position) {
        (0,aria/* alert */.Z9)((0,htmlContent/* isMarkdownString */.Fr)(message) ? message.value : message);
        this._visible.set(true);
        this._messageWidget.clear();
        this._messageListeners.clear();
        this._message = (0,htmlContent/* isMarkdownString */.Fr)(message) ? (0,markdownRenderer/* renderMarkdown */.ap)(message, {
            actionHandler: {
                callback: (url) => (0,browser_markdownRenderer/* openLinkFromMarkdown */.N)(this._openerService, url, (0,htmlContent/* isMarkdownString */.Fr)(message) ? message.isTrusted : undefined),
                disposables: this._messageListeners
            },
        }) : undefined;
        this._messageWidget.value = new MessageWidget(this._editor, position, typeof message === 'string' ? message : this._message.element);
        // close on blur (debounced to allow to tab into the message), cursor, model change, dispose
        this._messageListeners.add(common_event/* Event */.ju.debounce(this._editor.onDidBlurEditorText, (last, event) => event, 0)(() => {
            if (this._mouseOverMessage) {
                return; // override when mouse over message
            }
            if (this._messageWidget.value && dom/* isAncestor */.jg(document.activeElement, this._messageWidget.value.getDomNode())) {
                return; // override when focus is inside the message
            }
            this.closeMessage();
        }));
        this._messageListeners.add(this._editor.onDidChangeCursorPosition(() => this.closeMessage()));
        this._messageListeners.add(this._editor.onDidDispose(() => this.closeMessage()));
        this._messageListeners.add(this._editor.onDidChangeModel(() => this.closeMessage()));
        this._messageListeners.add(dom/* addDisposableListener */.nm(this._messageWidget.value.getDomNode(), dom/* EventType */.tw.MOUSE_ENTER, () => this._mouseOverMessage = true, true));
        this._messageListeners.add(dom/* addDisposableListener */.nm(this._messageWidget.value.getDomNode(), dom/* EventType */.tw.MOUSE_LEAVE, () => this._mouseOverMessage = false, true));
        // close on mouse move
        let bounds;
        this._messageListeners.add(this._editor.onMouseMove(e => {
            // outside the text area
            if (!e.target.position) {
                return;
            }
            if (!bounds) {
                // define bounding box around position and first mouse occurance
                bounds = new range/* Range */.e(position.lineNumber - 3, 1, e.target.position.lineNumber + 3, 1);
            }
            else if (!bounds.containsPosition(e.target.position)) {
                // check if position is still in bounds
                this.closeMessage();
            }
        }));
    }
    closeMessage() {
        this._visible.reset();
        this._messageListeners.clear();
        if (this._messageWidget.value) {
            this._messageListeners.add(MessageWidget.fadeOut(this._messageWidget.value));
        }
    }
};
MessageController.ID = 'editor.contrib.messageController';
MessageController.MESSAGE_VISIBLE = new contextkey/* RawContextKey */.uy('messageVisible', false, nls/* localize */.NC('messageVisible', 'Whether the editor is currently showing an inline message'));
MessageController = __decorate([
    __param(1, contextkey/* IContextKeyService */.i6),
    __param(2, common_opener/* IOpenerService */.v4)
], MessageController);

const MessageCommand = editorExtensions/* EditorCommand */._l.bindToContribution(MessageController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new MessageCommand({
    id: 'leaveEditorMessage',
    precondition: MessageController.MESSAGE_VISIBLE,
    handler: c => c.closeMessage(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        primary: 9 /* KeyCode.Escape */
    }
}));
class MessageWidget {
    static fadeOut(messageWidget) {
        const dispose = () => {
            messageWidget.dispose();
            clearTimeout(handle);
            messageWidget.getDomNode().removeEventListener('animationend', dispose);
        };
        const handle = setTimeout(dispose, 110);
        messageWidget.getDomNode().addEventListener('animationend', dispose);
        messageWidget.getDomNode().classList.add('fadeOut');
        return { dispose };
    }
    constructor(editor, { lineNumber, column }, text) {
        // Editor.IContentWidget.allowEditorOverflow
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this._editor = editor;
        this._editor.revealLinesInCenterIfOutsideViewport(lineNumber, lineNumber, 0 /* ScrollType.Smooth */);
        this._position = { lineNumber, column };
        this._domNode = document.createElement('div');
        this._domNode.classList.add('monaco-editor-overlaymessage');
        this._domNode.style.marginLeft = '-6px';
        const anchorTop = document.createElement('div');
        anchorTop.classList.add('anchor', 'top');
        this._domNode.appendChild(anchorTop);
        const message = document.createElement('div');
        if (typeof text === 'string') {
            message.classList.add('message');
            message.textContent = text;
        }
        else {
            text.classList.add('message');
            message.appendChild(text);
        }
        this._domNode.appendChild(message);
        const anchorBottom = document.createElement('div');
        anchorBottom.classList.add('anchor', 'below');
        this._domNode.appendChild(anchorBottom);
        this._editor.addContentWidget(this);
        this._domNode.classList.add('fadeIn');
    }
    dispose() {
        this._editor.removeContentWidget(this);
    }
    getId() {
        return 'messageoverlay';
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            position: this._position,
            preference: [
                1 /* ContentWidgetPositionPreference.ABOVE */,
                2 /* ContentWidgetPositionPreference.BELOW */,
            ],
            positionAffinity: 1 /* PositionAffinity.Right */,
        };
    }
    afterRender(position) {
        this._domNode.classList.toggle('below', position === 2 /* ContentWidgetPositionPreference.BELOW */);
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(MessageController.ID, MessageController, 4 /* EditorContributionInstantiation.Lazy */);


/***/ }),

/***/ 84971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports InsertCursorAbove, InsertCursorBelow, MultiCursorSessionResult, MultiCursorSession, MultiCursorSelectionController, MultiCursorSelectionControllerAction, AddSelectionToNextFindMatchAction, AddSelectionToPreviousFindMatchAction, MoveSelectionToNextFindMatchAction, MoveSelectionToPreviousFindMatchAction, SelectHighlightsAction, CompatChangeAll, SelectionHighlighter, FocusNextCursor, FocusPreviousCursor */
/* harmony import */ var _base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39194);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69058);
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95286);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79959);
/* harmony import */ var _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31445);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3981);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2257);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57584);
/* harmony import */ var _find_browser_findController_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41964);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80757);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47619);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78658);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6216);
/* harmony import */ var _wordHighlighter_browser_highlightDecorations_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18133);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
















function announceCursorChange(previousCursorState, cursorState) {
    const cursorDiff = cursorState.filter(cs => !previousCursorState.find(pcs => pcs.equals(cs)));
    if (cursorDiff.length >= 1) {
        const cursorPositions = cursorDiff.map(cs => `line ${cs.viewState.position.lineNumber} column ${cs.viewState.position.column}`).join(', ');
        const msg = cursorDiff.length === 1 ? _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('cursorAdded', "Cursor added: {0}", cursorPositions) : _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('cursorsAdded', "Cursors added: {0}", cursorPositions);
        (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__/* .status */ .i7)(msg);
    }
}
class InsertCursorAbove extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.insertCursorAbove',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.insertAbove', "Add Cursor Above"),
            alias: 'Add Cursor Above',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                linux: {
                    primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                    secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */]
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miInsertCursorAbove', comment: ['&& denotes a mnemonic'] }, "&&Add Cursor Above"),
                order: 2
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        let useLogicalLine = true;
        if (args && args.logicalLine === false) {
            useLogicalLine = false;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = viewModel.getCursorStates();
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .CursorMoveCommands */ .P.addCursorUp(viewModel, previousCursorState, useLogicalLine));
        viewModel.revealTopMostCursor(args.source);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorBelow extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.insertCursorBelow',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.insertBelow', "Add Cursor Below"),
            alias: 'Add Cursor Below',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                linux: {
                    primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                    secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */]
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miInsertCursorBelow', comment: ['&& denotes a mnemonic'] }, "A&&dd Cursor Below"),
                order: 3
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        let useLogicalLine = true;
        if (args && args.logicalLine === false) {
            useLogicalLine = false;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = viewModel.getCursorStates();
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .CursorMoveCommands */ .P.addCursorDown(viewModel, previousCursorState, useLogicalLine));
        viewModel.revealBottomMostCursor(args.source);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtEndOfEachLineSelected extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.insertCursorAtEndOfEachLineSelected',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.insertAtEndOfEachLineSelected', "Add Cursors to Line Ends"),
            alias: 'Add Cursors to Line Ends',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 39 /* KeyCode.KeyI */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miInsertCursorAtEndOfEachLineSelected', comment: ['&& denotes a mnemonic'] }, "Add C&&ursors to Line Ends"),
                order: 4
            }
        });
    }
    getCursorsForSelection(selection, model, result) {
        if (selection.isEmpty()) {
            return;
        }
        for (let i = selection.startLineNumber; i < selection.endLineNumber; i++) {
            const currentLineMaxColumn = model.getLineMaxColumn(i);
            result.push(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(i, currentLineMaxColumn, i, currentLineMaxColumn));
        }
        if (selection.endColumn > 1) {
            result.push(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn));
        }
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        const selections = editor.getSelections();
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        const newSelections = [];
        selections.forEach((sel) => this.getCursorsForSelection(sel, model, newSelections));
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtEndOfLineSelected extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.addCursorsToBottom',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.addCursorsToBottom', "Add Cursors To Bottom"),
            alias: 'Add Cursors To Bottom',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        const lineCount = editor.getModel().getLineCount();
        const newSelections = [];
        for (let i = selections[0].startLineNumber; i <= lineCount; i++) {
            newSelections.push(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(i, selections[0].startColumn, i, selections[0].endColumn));
        }
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class InsertCursorAtTopOfLineSelected extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.addCursorsToTop',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.addCursorsToTop', "Add Cursors To Top"),
            alias: 'Add Cursors To Top',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        const newSelections = [];
        for (let i = selections[0].startLineNumber; i >= 1; i--) {
            newSelections.push(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(i, selections[0].startColumn, i, selections[0].endColumn));
        }
        const viewModel = editor._getViewModel();
        const previousCursorState = viewModel.getCursorStates();
        if (newSelections.length > 0) {
            editor.setSelections(newSelections);
        }
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class MultiCursorSessionResult {
    constructor(selections, revealRange, revealScrollType) {
        this.selections = selections;
        this.revealRange = revealRange;
        this.revealScrollType = revealScrollType;
    }
}
class MultiCursorSession {
    static create(editor, findController) {
        if (!editor.hasModel()) {
            return null;
        }
        const findState = findController.getState();
        // Find widget owns entirely what we search for if:
        //  - focus is not in the editor (i.e. it is in the find widget)
        //  - and the search widget is visible
        //  - and the search string is non-empty
        if (!editor.hasTextFocus() && findState.isRevealed && findState.searchString.length > 0) {
            // Find widget owns what is searched for
            return new MultiCursorSession(editor, findController, false, findState.searchString, findState.wholeWord, findState.matchCase, null);
        }
        // Otherwise, the selection gives the search text, and the find widget gives the search settings
        // The exception is the find state disassociation case: when beginning with a single, collapsed selection
        let isDisconnectedFromFindController = false;
        let wholeWord;
        let matchCase;
        const selections = editor.getSelections();
        if (selections.length === 1 && selections[0].isEmpty()) {
            isDisconnectedFromFindController = true;
            wholeWord = true;
            matchCase = true;
        }
        else {
            wholeWord = findState.wholeWord;
            matchCase = findState.matchCase;
        }
        // Selection owns what is searched for
        const s = editor.getSelection();
        let searchText;
        let currentMatch = null;
        if (s.isEmpty()) {
            // selection is empty => expand to current word
            const word = editor.getConfiguredWordAtPosition(s.getStartPosition());
            if (!word) {
                return null;
            }
            searchText = word.word;
            currentMatch = new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(s.startLineNumber, word.startColumn, s.startLineNumber, word.endColumn);
        }
        else {
            searchText = editor.getModel().getValueInRange(s).replace(/\r\n/g, '\n');
        }
        return new MultiCursorSession(editor, findController, isDisconnectedFromFindController, searchText, wholeWord, matchCase, currentMatch);
    }
    constructor(_editor, findController, isDisconnectedFromFindController, searchText, wholeWord, matchCase, currentMatch) {
        this._editor = _editor;
        this.findController = findController;
        this.isDisconnectedFromFindController = isDisconnectedFromFindController;
        this.searchText = searchText;
        this.wholeWord = wholeWord;
        this.matchCase = matchCase;
        this.currentMatch = currentMatch;
    }
    addSelectionToNextFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const nextMatch = this._getNextMatch();
        if (!nextMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.concat(nextMatch), nextMatch, 0 /* ScrollType.Smooth */);
    }
    moveSelectionToNextFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const nextMatch = this._getNextMatch();
        if (!nextMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.slice(0, allSelections.length - 1).concat(nextMatch), nextMatch, 0 /* ScrollType.Smooth */);
    }
    _getNextMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        if (this.currentMatch) {
            const result = this.currentMatch;
            this.currentMatch = null;
            return result;
        }
        this.findController.highlightFindOptions();
        const allSelections = this._editor.getSelections();
        const lastAddedSelection = allSelections[allSelections.length - 1];
        const nextMatch = this._editor.getModel().findNextMatch(this.searchText, lastAddedSelection.getEndPosition(), false, this.matchCase, this.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false);
        if (!nextMatch) {
            return null;
        }
        return new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(nextMatch.range.startLineNumber, nextMatch.range.startColumn, nextMatch.range.endLineNumber, nextMatch.range.endColumn);
    }
    addSelectionToPreviousFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const previousMatch = this._getPreviousMatch();
        if (!previousMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.concat(previousMatch), previousMatch, 0 /* ScrollType.Smooth */);
    }
    moveSelectionToPreviousFindMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        const previousMatch = this._getPreviousMatch();
        if (!previousMatch) {
            return null;
        }
        const allSelections = this._editor.getSelections();
        return new MultiCursorSessionResult(allSelections.slice(0, allSelections.length - 1).concat(previousMatch), previousMatch, 0 /* ScrollType.Smooth */);
    }
    _getPreviousMatch() {
        if (!this._editor.hasModel()) {
            return null;
        }
        if (this.currentMatch) {
            const result = this.currentMatch;
            this.currentMatch = null;
            return result;
        }
        this.findController.highlightFindOptions();
        const allSelections = this._editor.getSelections();
        const lastAddedSelection = allSelections[allSelections.length - 1];
        const previousMatch = this._editor.getModel().findPreviousMatch(this.searchText, lastAddedSelection.getStartPosition(), false, this.matchCase, this.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false);
        if (!previousMatch) {
            return null;
        }
        return new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(previousMatch.range.startLineNumber, previousMatch.range.startColumn, previousMatch.range.endLineNumber, previousMatch.range.endColumn);
    }
    selectAll(searchScope) {
        if (!this._editor.hasModel()) {
            return [];
        }
        this.findController.highlightFindOptions();
        const editorModel = this._editor.getModel();
        if (searchScope) {
            return editorModel.findMatches(this.searchText, searchScope, false, this.matchCase, this.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        }
        return editorModel.findMatches(this.searchText, true, false, this.matchCase, this.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
    }
}
class MultiCursorSelectionController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    static get(editor) {
        return editor.getContribution(MultiCursorSelectionController.ID);
    }
    constructor(editor) {
        super();
        this._sessionDispose = this._register(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .DisposableStore */ .SL());
        this._editor = editor;
        this._ignoreSelectionChange = false;
        this._session = null;
    }
    dispose() {
        this._endSession();
        super.dispose();
    }
    _beginSessionIfNeeded(findController) {
        if (!this._session) {
            // Create a new session
            const session = MultiCursorSession.create(this._editor, findController);
            if (!session) {
                return;
            }
            this._session = session;
            const newState = { searchString: this._session.searchText };
            if (this._session.isDisconnectedFromFindController) {
                newState.wholeWordOverride = 1 /* FindOptionOverride.True */;
                newState.matchCaseOverride = 1 /* FindOptionOverride.True */;
                newState.isRegexOverride = 2 /* FindOptionOverride.False */;
            }
            findController.getState().change(newState, false);
            this._sessionDispose.add(this._editor.onDidChangeCursorSelection((e) => {
                if (this._ignoreSelectionChange) {
                    return;
                }
                this._endSession();
            }));
            this._sessionDispose.add(this._editor.onDidBlurEditorText(() => {
                this._endSession();
            }));
            this._sessionDispose.add(findController.getState().onFindReplaceStateChange((e) => {
                if (e.matchCase || e.wholeWord) {
                    this._endSession();
                }
            }));
        }
    }
    _endSession() {
        this._sessionDispose.clear();
        if (this._session && this._session.isDisconnectedFromFindController) {
            const newState = {
                wholeWordOverride: 0 /* FindOptionOverride.NotSet */,
                matchCaseOverride: 0 /* FindOptionOverride.NotSet */,
                isRegexOverride: 0 /* FindOptionOverride.NotSet */,
            };
            this._session.findController.getState().change(newState, false);
        }
        this._session = null;
    }
    _setSelections(selections) {
        this._ignoreSelectionChange = true;
        this._editor.setSelections(selections);
        this._ignoreSelectionChange = false;
    }
    _expandEmptyToWord(model, selection) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const word = this._editor.getConfiguredWordAtPosition(selection.getStartPosition());
        if (!word) {
            return selection;
        }
        return new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(selection.startLineNumber, word.startColumn, selection.startLineNumber, word.endColumn);
    }
    _applySessionResult(result) {
        if (!result) {
            return;
        }
        this._setSelections(result.selections);
        if (result.revealRange) {
            this._editor.revealRangeInCenterIfOutsideViewport(result.revealRange, result.revealScrollType);
        }
    }
    getSession(findController) {
        return this._session;
    }
    addSelectionToNextFindMatch(findController) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (!this._session) {
            // If there are multiple cursors, handle the case where they do not all select the same text.
            const allSelections = this._editor.getSelections();
            if (allSelections.length > 1) {
                const findState = findController.getState();
                const matchCase = findState.matchCase;
                const selectionsContainSameText = modelRangesContainSameText(this._editor.getModel(), allSelections, matchCase);
                if (!selectionsContainSameText) {
                    const model = this._editor.getModel();
                    const resultingSelections = [];
                    for (let i = 0, len = allSelections.length; i < len; i++) {
                        resultingSelections[i] = this._expandEmptyToWord(model, allSelections[i]);
                    }
                    this._editor.setSelections(resultingSelections);
                    return;
                }
            }
        }
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.addSelectionToNextFindMatch());
        }
    }
    addSelectionToPreviousFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.addSelectionToPreviousFindMatch());
        }
    }
    moveSelectionToNextFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.moveSelectionToNextFindMatch());
        }
    }
    moveSelectionToPreviousFindMatch(findController) {
        this._beginSessionIfNeeded(findController);
        if (this._session) {
            this._applySessionResult(this._session.moveSelectionToPreviousFindMatch());
        }
    }
    selectAll(findController) {
        if (!this._editor.hasModel()) {
            return;
        }
        let matches = null;
        const findState = findController.getState();
        // Special case: find widget owns entirely what we search for if:
        // - focus is not in the editor (i.e. it is in the find widget)
        // - and the search widget is visible
        // - and the search string is non-empty
        // - and we're searching for a regex
        if (findState.isRevealed && findState.searchString.length > 0 && findState.isRegex) {
            const editorModel = this._editor.getModel();
            if (findState.searchScope) {
                matches = editorModel.findMatches(findState.searchString, findState.searchScope, findState.isRegex, findState.matchCase, findState.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
            }
            else {
                matches = editorModel.findMatches(findState.searchString, true, findState.isRegex, findState.matchCase, findState.wholeWord ? this._editor.getOption(128 /* EditorOption.wordSeparators */) : null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
            }
        }
        else {
            this._beginSessionIfNeeded(findController);
            if (!this._session) {
                return;
            }
            matches = this._session.selectAll(findState.searchScope);
        }
        if (matches.length > 0) {
            const editorSelection = this._editor.getSelection();
            // Have the primary cursor remain the one where the action was invoked
            for (let i = 0, len = matches.length; i < len; i++) {
                const match = matches[i];
                const intersection = match.range.intersectRanges(editorSelection);
                if (intersection) {
                    // bingo!
                    matches[i] = matches[0];
                    matches[0] = match;
                    break;
                }
            }
            this._setSelections(matches.map(m => new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_14__/* .Selection */ .Y(m.range.startLineNumber, m.range.startColumn, m.range.endLineNumber, m.range.endColumn)));
        }
    }
}
MultiCursorSelectionController.ID = 'editor.contrib.multiCursorController';
class MultiCursorSelectionControllerAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    run(accessor, editor) {
        const multiCursorController = MultiCursorSelectionController.get(editor);
        if (!multiCursorController) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel) {
            const previousCursorState = viewModel.getCursorStates();
            const findController = _find_browser_findController_js__WEBPACK_IMPORTED_MODULE_7__/* .CommonFindController */ .pR.get(editor);
            if (findController) {
                this._run(multiCursorController, findController);
            }
            else {
                const newFindController = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_13__/* .IInstantiationService */ .TG).createInstance(_find_browser_findController_js__WEBPACK_IMPORTED_MODULE_7__/* .CommonFindController */ .pR, editor);
                this._run(multiCursorController, newFindController);
                newFindController.dispose();
            }
            announceCursorChange(previousCursorState, viewModel.getCursorStates());
        }
    }
}
class AddSelectionToNextFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.addSelectionToNextFindMatch',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('addSelectionToNextFindMatch', "Add Selection To Next Find Match"),
            alias: 'Add Selection To Next Find Match',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 34 /* KeyCode.KeyD */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miAddSelectionToNextFindMatch', comment: ['&& denotes a mnemonic'] }, "Add &&Next Occurrence"),
                order: 5
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.addSelectionToNextFindMatch(findController);
    }
}
class AddSelectionToPreviousFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.addSelectionToPreviousFindMatch',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('addSelectionToPreviousFindMatch', "Add Selection To Previous Find Match"),
            alias: 'Add Selection To Previous Find Match',
            precondition: undefined,
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miAddSelectionToPreviousFindMatch', comment: ['&& denotes a mnemonic'] }, "Add P&&revious Occurrence"),
                order: 6
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.addSelectionToPreviousFindMatch(findController);
    }
}
class MoveSelectionToNextFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.moveSelectionToNextFindMatch',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('moveSelectionToNextFindMatch', "Move Last Selection To Next Find Match"),
            alias: 'Move Last Selection To Next Find Match',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.focus,
                primary: (0,_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_2__/* .KeyChord */ .gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 34 /* KeyCode.KeyD */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.moveSelectionToNextFindMatch(findController);
    }
}
class MoveSelectionToPreviousFindMatchAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.moveSelectionToPreviousFindMatch',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('moveSelectionToPreviousFindMatch', "Move Last Selection To Previous Find Match"),
            alias: 'Move Last Selection To Previous Find Match',
            precondition: undefined
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.moveSelectionToPreviousFindMatch(findController);
    }
}
class SelectHighlightsAction extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.selectHighlights',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('selectAllOccurrencesOfFindMatch', "Select All Occurrences of Find Match"),
            alias: 'Select All Occurrences of Find Match',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 42 /* KeyCode.KeyL */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH.MenubarSelectionMenu,
                group: '3_multi',
                title: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC({ key: 'miSelectHighlights', comment: ['&& denotes a mnemonic'] }, "Select All &&Occurrences"),
                order: 7
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.selectAll(findController);
    }
}
class CompatChangeAll extends MultiCursorSelectionControllerAction {
    constructor() {
        super({
            id: 'editor.action.changeAll',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('changeAll.label', "Change All Occurrences"),
            alias: 'Change All Occurrences',
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_10__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.writable, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.editorTextFocus),
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_6__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 60 /* KeyCode.F2 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.2
            }
        });
    }
    _run(multiCursorController, findController) {
        multiCursorController.selectAll(findController);
    }
}
class SelectionHighlighterState {
    constructor(_model, _searchText, _matchCase, _wordSeparators, prevState) {
        this._model = _model;
        this._searchText = _searchText;
        this._matchCase = _matchCase;
        this._wordSeparators = _wordSeparators;
        this._modelVersionId = this._model.getVersionId();
        this._cachedFindMatches = null;
        if (prevState
            && this._model === prevState._model
            && this._searchText === prevState._searchText
            && this._matchCase === prevState._matchCase
            && this._wordSeparators === prevState._wordSeparators
            && this._modelVersionId === prevState._modelVersionId) {
            this._cachedFindMatches = prevState._cachedFindMatches;
        }
    }
    findMatches() {
        if (this._cachedFindMatches === null) {
            this._cachedFindMatches = this._model.findMatches(this._searchText, true, false, this._matchCase, this._wordSeparators, false).map(m => m.range);
            this._cachedFindMatches.sort(_common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e.compareRangesUsingStarts);
        }
        return this._cachedFindMatches;
    }
}
let SelectionHighlighter = class SelectionHighlighter extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(editor, _languageFeaturesService) {
        super();
        this._languageFeaturesService = _languageFeaturesService;
        this.editor = editor;
        this._isEnabled = editor.getOption(106 /* EditorOption.selectionHighlight */);
        this._decorations = editor.createDecorationsCollection();
        this.updateSoon = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_1__/* .RunOnceScheduler */ .pY(() => this._update(), 300));
        this.state = null;
        this._register(editor.onDidChangeConfiguration((e) => {
            this._isEnabled = editor.getOption(106 /* EditorOption.selectionHighlight */);
        }));
        this._register(editor.onDidChangeCursorSelection((e) => {
            if (!this._isEnabled) {
                // Early exit if nothing needs to be done!
                // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
                return;
            }
            if (e.selection.isEmpty()) {
                if (e.reason === 3 /* CursorChangeReason.Explicit */) {
                    if (this.state) {
                        // no longer valid
                        this._setState(null);
                    }
                    this.updateSoon.schedule();
                }
                else {
                    this._setState(null);
                }
            }
            else {
                this._update();
            }
        }));
        this._register(editor.onDidChangeModel((e) => {
            this._setState(null);
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            if (this._isEnabled) {
                this.updateSoon.schedule();
            }
        }));
        const findController = _find_browser_findController_js__WEBPACK_IMPORTED_MODULE_7__/* .CommonFindController */ .pR.get(editor);
        if (findController) {
            this._register(findController.getState().onFindReplaceStateChange((e) => {
                this._update();
            }));
        }
        this.updateSoon.schedule();
    }
    _update() {
        this._setState(SelectionHighlighter._createState(this.state, this._isEnabled, this.editor));
    }
    static _createState(oldState, isEnabled, editor) {
        if (!isEnabled) {
            return null;
        }
        if (!editor.hasModel()) {
            return null;
        }
        const s = editor.getSelection();
        if (s.startLineNumber !== s.endLineNumber) {
            // multiline forbidden for perf reasons
            return null;
        }
        const multiCursorController = MultiCursorSelectionController.get(editor);
        if (!multiCursorController) {
            return null;
        }
        const findController = _find_browser_findController_js__WEBPACK_IMPORTED_MODULE_7__/* .CommonFindController */ .pR.get(editor);
        if (!findController) {
            return null;
        }
        let r = multiCursorController.getSession(findController);
        if (!r) {
            const allSelections = editor.getSelections();
            if (allSelections.length > 1) {
                const findState = findController.getState();
                const matchCase = findState.matchCase;
                const selectionsContainSameText = modelRangesContainSameText(editor.getModel(), allSelections, matchCase);
                if (!selectionsContainSameText) {
                    return null;
                }
            }
            r = MultiCursorSession.create(editor, findController);
        }
        if (!r) {
            return null;
        }
        if (r.currentMatch) {
            // This is an empty selection
            // Do not interfere with semantic word highlighting in the no selection case
            return null;
        }
        if (/^[ \t]+$/.test(r.searchText)) {
            // whitespace only selection
            return null;
        }
        if (r.searchText.length > 200) {
            // very long selection
            return null;
        }
        // TODO: better handling of this case
        const findState = findController.getState();
        const caseSensitive = findState.matchCase;
        // Return early if the find widget shows the exact same matches
        if (findState.isRevealed) {
            let findStateSearchString = findState.searchString;
            if (!caseSensitive) {
                findStateSearchString = findStateSearchString.toLowerCase();
            }
            let mySearchString = r.searchText;
            if (!caseSensitive) {
                mySearchString = mySearchString.toLowerCase();
            }
            if (findStateSearchString === mySearchString && r.matchCase === findState.matchCase && r.wholeWord === findState.wholeWord && !findState.isRegex) {
                return null;
            }
        }
        return new SelectionHighlighterState(editor.getModel(), r.searchText, r.matchCase, r.wholeWord ? editor.getOption(128 /* EditorOption.wordSeparators */) : null, oldState);
    }
    _setState(newState) {
        this.state = newState;
        if (!this.state) {
            this._decorations.clear();
            return;
        }
        if (!this.editor.hasModel()) {
            return;
        }
        const model = this.editor.getModel();
        if (model.isTooLargeForTokenization()) {
            // the file is too large, so searching word under cursor in the whole document would be blocking the UI.
            return;
        }
        const allMatches = this.state.findMatches();
        const selections = this.editor.getSelections();
        selections.sort(_common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e.compareRangesUsingStarts);
        // do not overlap with selection (issue #64 and #512)
        const matches = [];
        for (let i = 0, j = 0, len = allMatches.length, lenJ = selections.length; i < len;) {
            const match = allMatches[i];
            if (j >= lenJ) {
                // finished all editor selections
                matches.push(match);
                i++;
            }
            else {
                const cmp = _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e.compareRangesUsingStarts(match, selections[j]);
                if (cmp < 0) {
                    // match is before sel
                    if (selections[j].isEmpty() || !_common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e.areIntersecting(match, selections[j])) {
                        matches.push(match);
                    }
                    i++;
                }
                else if (cmp > 0) {
                    // sel is before match
                    j++;
                }
                else {
                    // sel is equal to match
                    i++;
                    j++;
                }
            }
        }
        const hasSemanticHighlights = this._languageFeaturesService.documentHighlightProvider.has(model) && this.editor.getOption(79 /* EditorOption.occurrencesHighlight */);
        const decorations = matches.map(r => {
            return {
                range: r,
                options: (0,_wordHighlighter_browser_highlightDecorations_js__WEBPACK_IMPORTED_MODULE_12__/* .getSelectionHighlightDecorationOptions */ .w)(hasSemanticHighlights)
            };
        });
        this._decorations.set(decorations);
    }
    dispose() {
        this._setState(null);
        super.dispose();
    }
};
SelectionHighlighter.ID = 'editor.contrib.selectionHighlighter';
SelectionHighlighter = __decorate([
    __param(1, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__/* .ILanguageFeaturesService */ .p)
], SelectionHighlighter);

function modelRangesContainSameText(model, ranges, matchCase) {
    const selectedText = getValueInRange(model, ranges[0], !matchCase);
    for (let i = 1, len = ranges.length; i < len; i++) {
        const range = ranges[i];
        if (range.isEmpty()) {
            return false;
        }
        const thisSelectedText = getValueInRange(model, range, !matchCase);
        if (selectedText !== thisSelectedText) {
            return false;
        }
    }
    return true;
}
function getValueInRange(model, range, toLowerCase) {
    const text = model.getValueInRange(range);
    return (toLowerCase ? text.toLowerCase() : text);
}
class FocusNextCursor extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.focusNextCursor',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.focusNextCursor', "Focus Next Cursor"),
            description: {
                description: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.focusNextCursor.description', "Focuses the next cursor"),
                args: [],
            },
            alias: 'Focus Next Cursor',
            precondition: undefined
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = Array.from(viewModel.getCursorStates());
        const firstCursor = previousCursorState.shift();
        if (!firstCursor) {
            return;
        }
        previousCursorState.push(firstCursor);
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, previousCursorState);
        viewModel.revealPrimaryCursor(args.source, true);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
class FocusPreviousCursor extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.focusPreviousCursor',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.focusPreviousCursor', "Focus Previous Cursor"),
            description: {
                description: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('mutlicursor.focusPreviousCursor.description', "Focuses the previous cursor"),
                args: [],
            },
            alias: 'Focus Previous Cursor',
            precondition: undefined
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const viewModel = editor._getViewModel();
        if (viewModel.cursorConfig.readOnly) {
            return;
        }
        viewModel.model.pushStackElement();
        const previousCursorState = Array.from(viewModel.getCursorStates());
        const firstCursor = previousCursorState.pop();
        if (!firstCursor) {
            return;
        }
        previousCursorState.unshift(firstCursor);
        viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, previousCursorState);
        viewModel.revealPrimaryCursor(args.source, true);
        announceCursorChange(previousCursorState, viewModel.getCursorStates());
    }
}
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorContribution */ ._K)(MultiCursorSelectionController.ID, MultiCursorSelectionController, 4 /* EditorContributionInstantiation.Lazy */);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorContribution */ ._K)(SelectionHighlighter.ID, SelectionHighlighter, 1 /* EditorContributionInstantiation.AfterFirstRender */);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(InsertCursorAbove);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(InsertCursorBelow);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(InsertCursorAtEndOfEachLineSelected);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(AddSelectionToNextFindMatchAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(AddSelectionToPreviousFindMatchAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(MoveSelectionToNextFindMatchAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(MoveSelectionToPreviousFindMatchAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(SelectHighlightsAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(CompatChangeAll);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(InsertCursorAtEndOfLineSelected);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(InsertCursorAtTopOfLineSelected);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(FocusNextCursor);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorAction */ .Qr)(FocusPreviousCursor);


/***/ }),

/***/ 34957:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: ParameterHintsController, TriggerParameterHintsAction

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lazy.js
var lazy = __webpack_require__(41769);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js
var characterClassifier = __webpack_require__(71887);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(92378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js
var resolverService = __webpack_require__(31744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(38389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/provideSignatureHelp.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const Context = {
    Visible: new contextkey/* RawContextKey */.uy('parameterHintsVisible', false),
    MultipleSignatures: new contextkey/* RawContextKey */.uy('parameterHintsMultipleSignatures', false),
};
function provideSignatureHelp(registry, model, position, context, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const supports = registry.ordered(model);
        for (const support of supports) {
            try {
                const result = yield support.provideSignatureHelp(model, position, token, context);
                if (result) {
                    return result;
                }
            }
            catch (err) {
                (0,errors/* onUnexpectedExternalError */.Cp)(err);
            }
        }
        return undefined;
    });
}
commands/* CommandsRegistry */.P.registerCommand('_executeSignatureHelpProvider', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri, position, triggerCharacter] = args;
    (0,types/* assertType */.p_)(common_uri/* URI */.o.isUri(uri));
    (0,types/* assertType */.p_)(core_position/* Position */.L.isIPosition(position));
    (0,types/* assertType */.p_)(typeof triggerCharacter === 'string' || !triggerCharacter);
    const languageFeaturesService = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    const ref = yield accessor.get(resolverService/* ITextModelService */.S).createModelReference(uri);
    try {
        const result = yield provideSignatureHelp(languageFeaturesService.signatureHelpProvider, ref.object.textEditorModel, core_position/* Position */.L.lift(position), {
            triggerKind: languages/* SignatureHelpTriggerKind */.WW.Invoke,
            isRetrigger: false,
            triggerCharacter,
        }, cancellation/* CancellationToken */.T.None);
        if (!result) {
            return undefined;
        }
        setTimeout(() => result.dispose(), 0);
        return result.value;
    }
    finally {
        ref.dispose();
    }
}));

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHintsModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var parameterHintsModel_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







var ParameterHintState;
(function (ParameterHintState) {
    ParameterHintState.Default = { type: 0 /* Type.Default */ };
    class Pending {
        constructor(request, previouslyActiveHints) {
            this.request = request;
            this.previouslyActiveHints = previouslyActiveHints;
            this.type = 2 /* Type.Pending */;
        }
    }
    ParameterHintState.Pending = Pending;
    class Active {
        constructor(hints) {
            this.hints = hints;
            this.type = 1 /* Type.Active */;
        }
    }
    ParameterHintState.Active = Active;
})(ParameterHintState || (ParameterHintState = {}));
class ParameterHintsModel extends lifecycle/* Disposable */.JT {
    constructor(editor, providers, delay = ParameterHintsModel.DEFAULT_DELAY) {
        super();
        this._onChangedHints = this._register(new common_event/* Emitter */.Q5());
        this.onChangedHints = this._onChangedHints.event;
        this.triggerOnType = false;
        this._state = ParameterHintState.Default;
        this._pendingTriggers = [];
        this._lastSignatureHelpResult = this._register(new lifecycle/* MutableDisposable */.XK());
        this.triggerChars = new characterClassifier/* CharacterSet */.q();
        this.retriggerChars = new characterClassifier/* CharacterSet */.q();
        this.triggerId = 0;
        this.editor = editor;
        this.providers = providers;
        this.throttledDelayer = new common_async/* Delayer */.vp(delay);
        this._register(this.editor.onDidBlurEditorWidget(() => this.cancel()));
        this._register(this.editor.onDidChangeConfiguration(() => this.onEditorConfigurationChange()));
        this._register(this.editor.onDidChangeModel(e => this.onModelChanged()));
        this._register(this.editor.onDidChangeModelLanguage(_ => this.onModelChanged()));
        this._register(this.editor.onDidChangeCursorSelection(e => this.onCursorChange(e)));
        this._register(this.editor.onDidChangeModelContent(e => this.onModelContentChange()));
        this._register(this.providers.onDidChange(this.onModelChanged, this));
        this._register(this.editor.onDidType(text => this.onDidType(text)));
        this.onEditorConfigurationChange();
        this.onModelChanged();
    }
    get state() { return this._state; }
    set state(value) {
        if (this._state.type === 2 /* ParameterHintState.Type.Pending */) {
            this._state.request.cancel();
        }
        this._state = value;
    }
    cancel(silent = false) {
        this.state = ParameterHintState.Default;
        this.throttledDelayer.cancel();
        if (!silent) {
            this._onChangedHints.fire(undefined);
        }
    }
    trigger(context, delay) {
        const model = this.editor.getModel();
        if (!model || !this.providers.has(model)) {
            return;
        }
        const triggerId = ++this.triggerId;
        this._pendingTriggers.push(context);
        this.throttledDelayer.trigger(() => {
            return this.doTrigger(triggerId);
        }, delay)
            .catch(errors/* onUnexpectedError */.dL);
    }
    next() {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        const length = this.state.hints.signatures.length;
        const activeSignature = this.state.hints.activeSignature;
        const last = (activeSignature % length) === (length - 1);
        const cycle = this.editor.getOption(84 /* EditorOption.parameterHints */).cycle;
        // If there is only one signature, or we're on last signature of list
        if ((length < 2 || last) && !cycle) {
            this.cancel();
            return;
        }
        this.updateActiveSignature(last && cycle ? 0 : activeSignature + 1);
    }
    previous() {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        const length = this.state.hints.signatures.length;
        const activeSignature = this.state.hints.activeSignature;
        const first = activeSignature === 0;
        const cycle = this.editor.getOption(84 /* EditorOption.parameterHints */).cycle;
        // If there is only one signature, or we're on first signature of list
        if ((length < 2 || first) && !cycle) {
            this.cancel();
            return;
        }
        this.updateActiveSignature(first && cycle ? length - 1 : activeSignature - 1);
    }
    updateActiveSignature(activeSignature) {
        if (this.state.type !== 1 /* ParameterHintState.Type.Active */) {
            return;
        }
        this.state = new ParameterHintState.Active(Object.assign(Object.assign({}, this.state.hints), { activeSignature }));
        this._onChangedHints.fire(this.state.hints);
    }
    doTrigger(triggerId) {
        return parameterHintsModel_awaiter(this, void 0, void 0, function* () {
            const isRetrigger = this.state.type === 1 /* ParameterHintState.Type.Active */ || this.state.type === 2 /* ParameterHintState.Type.Pending */;
            const activeSignatureHelp = this.getLastActiveHints();
            this.cancel(true);
            if (this._pendingTriggers.length === 0) {
                return false;
            }
            const context = this._pendingTriggers.reduce(mergeTriggerContexts);
            this._pendingTriggers = [];
            const triggerContext = {
                triggerKind: context.triggerKind,
                triggerCharacter: context.triggerCharacter,
                isRetrigger: isRetrigger,
                activeSignatureHelp: activeSignatureHelp
            };
            if (!this.editor.hasModel()) {
                return false;
            }
            const model = this.editor.getModel();
            const position = this.editor.getPosition();
            this.state = new ParameterHintState.Pending((0,common_async/* createCancelablePromise */.PG)(token => provideSignatureHelp(this.providers, model, position, triggerContext, token)), activeSignatureHelp);
            try {
                const result = yield this.state.request;
                // Check that we are still resolving the correct signature help
                if (triggerId !== this.triggerId) {
                    result === null || result === void 0 ? void 0 : result.dispose();
                    return false;
                }
                if (!result || !result.value.signatures || result.value.signatures.length === 0) {
                    result === null || result === void 0 ? void 0 : result.dispose();
                    this._lastSignatureHelpResult.clear();
                    this.cancel();
                    return false;
                }
                else {
                    this.state = new ParameterHintState.Active(result.value);
                    this._lastSignatureHelpResult.value = result;
                    this._onChangedHints.fire(this.state.hints);
                    return true;
                }
            }
            catch (error) {
                if (triggerId === this.triggerId) {
                    this.state = ParameterHintState.Default;
                }
                (0,errors/* onUnexpectedError */.dL)(error);
                return false;
            }
        });
    }
    getLastActiveHints() {
        switch (this.state.type) {
            case 1 /* ParameterHintState.Type.Active */: return this.state.hints;
            case 2 /* ParameterHintState.Type.Pending */: return this.state.previouslyActiveHints;
            default: return undefined;
        }
    }
    get isTriggered() {
        return this.state.type === 1 /* ParameterHintState.Type.Active */
            || this.state.type === 2 /* ParameterHintState.Type.Pending */
            || this.throttledDelayer.isTriggered();
    }
    onModelChanged() {
        this.cancel();
        this.triggerChars.clear();
        this.retriggerChars.clear();
        const model = this.editor.getModel();
        if (!model) {
            return;
        }
        for (const support of this.providers.ordered(model)) {
            for (const ch of support.signatureHelpTriggerCharacters || []) {
                if (ch.length) {
                    const charCode = ch.charCodeAt(0);
                    this.triggerChars.add(charCode);
                    // All trigger characters are also considered retrigger characters
                    this.retriggerChars.add(charCode);
                }
            }
            for (const ch of support.signatureHelpRetriggerCharacters || []) {
                if (ch.length) {
                    this.retriggerChars.add(ch.charCodeAt(0));
                }
            }
        }
    }
    onDidType(text) {
        if (!this.triggerOnType) {
            return;
        }
        const lastCharIndex = text.length - 1;
        const triggerCharCode = text.charCodeAt(lastCharIndex);
        if (this.triggerChars.has(triggerCharCode) || this.isTriggered && this.retriggerChars.has(triggerCharCode)) {
            this.trigger({
                triggerKind: languages/* SignatureHelpTriggerKind */.WW.TriggerCharacter,
                triggerCharacter: text.charAt(lastCharIndex),
            });
        }
    }
    onCursorChange(e) {
        if (e.source === 'mouse') {
            this.cancel();
        }
        else if (this.isTriggered) {
            this.trigger({ triggerKind: languages/* SignatureHelpTriggerKind */.WW.ContentChange });
        }
    }
    onModelContentChange() {
        if (this.isTriggered) {
            this.trigger({ triggerKind: languages/* SignatureHelpTriggerKind */.WW.ContentChange });
        }
    }
    onEditorConfigurationChange() {
        this.triggerOnType = this.editor.getOption(84 /* EditorOption.parameterHints */).enabled;
        if (!this.triggerOnType) {
            this.cancel();
        }
    }
    dispose() {
        this.cancel(true);
        super.dispose();
    }
}
ParameterHintsModel.DEFAULT_DELAY = 120; // ms
function mergeTriggerContexts(previous, current) {
    switch (current.triggerKind) {
        case languages/* SignatureHelpTriggerKind */.WW.Invoke:
            // Invoke overrides previous triggers.
            return current;
        case languages/* SignatureHelpTriggerKind */.WW.ContentChange:
            // Ignore content changes triggers
            return previous;
        case languages/* SignatureHelpTriggerKind */.WW.TriggerCharacter:
        default:
            return current;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(39194);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.css
var parameterHints = __webpack_require__(12944);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(parameterHints/* default */.Z, options);




       /* harmony default export */ var browser_parameterHints = (parameterHints/* default */.Z && parameterHints/* default */.Z.locals ? parameterHints/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(57164);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js + 1 modules
var markdownRenderer = __webpack_require__(35032);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(43759);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(85519);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHintsWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


















const $ = dom.$;
const parameterHintsNextIcon = (0,iconRegistry/* registerIcon */.q5)('parameter-hints-next', codicons/* Codicon */.l.chevronDown, nls/* localize */.NC('parameterHintsNextIcon', 'Icon for show next parameter hint.'));
const parameterHintsPreviousIcon = (0,iconRegistry/* registerIcon */.q5)('parameter-hints-previous', codicons/* Codicon */.l.chevronUp, nls/* localize */.NC('parameterHintsPreviousIcon', 'Icon for show previous parameter hint.'));
let ParameterHintsWidget = class ParameterHintsWidget extends lifecycle/* Disposable */.JT {
    constructor(editor, model, contextKeyService, openerService, languageService) {
        super();
        this.editor = editor;
        this.model = model;
        this.renderDisposeables = this._register(new lifecycle/* DisposableStore */.SL());
        this.visible = false;
        this.announcedLabel = null;
        // Editor.IContentWidget.allowEditorOverflow
        this.allowEditorOverflow = true;
        this.markdownRenderer = this._register(new markdownRenderer/* MarkdownRenderer */.$({ editor }, languageService, openerService));
        this.keyVisible = Context.Visible.bindTo(contextKeyService);
        this.keyMultipleSignatures = Context.MultipleSignatures.bindTo(contextKeyService);
    }
    createParameterHintDOMNodes() {
        const element = $('.editor-widget.parameter-hints-widget');
        const wrapper = dom/* append */.R3(element, $('.phwrapper'));
        wrapper.tabIndex = -1;
        const controls = dom/* append */.R3(wrapper, $('.controls'));
        const previous = dom/* append */.R3(controls, $('.button' + themables/* ThemeIcon */.k.asCSSSelector(parameterHintsPreviousIcon)));
        const overloads = dom/* append */.R3(controls, $('.overloads'));
        const next = dom/* append */.R3(controls, $('.button' + themables/* ThemeIcon */.k.asCSSSelector(parameterHintsNextIcon)));
        this._register(dom/* addDisposableListener */.nm(previous, 'click', e => {
            dom/* EventHelper */.zB.stop(e);
            this.previous();
        }));
        this._register(dom/* addDisposableListener */.nm(next, 'click', e => {
            dom/* EventHelper */.zB.stop(e);
            this.next();
        }));
        const body = $('.body');
        const scrollbar = new scrollableElement/* DomScrollableElement */.s$(body, {
            alwaysConsumeMouseWheel: true,
        });
        this._register(scrollbar);
        wrapper.appendChild(scrollbar.getDomNode());
        const signature = dom/* append */.R3(body, $('.signature'));
        const docs = dom/* append */.R3(body, $('.docs'));
        element.style.userSelect = 'text';
        this.domNodes = {
            element,
            signature,
            overloads,
            docs,
            scrollbar,
        };
        this.editor.addContentWidget(this);
        this.hide();
        this._register(this.editor.onDidChangeCursorSelection(e => {
            if (this.visible) {
                this.editor.layoutContentWidget(this);
            }
        }));
        const updateFont = () => {
            if (!this.domNodes) {
                return;
            }
            const fontInfo = this.editor.getOption(49 /* EditorOption.fontInfo */);
            this.domNodes.element.style.fontSize = `${fontInfo.fontSize}px`;
            this.domNodes.element.style.lineHeight = `${fontInfo.lineHeight / fontInfo.fontSize}`;
        };
        updateFont();
        this._register(common_event/* Event */.ju.chain(this.editor.onDidChangeConfiguration.bind(this.editor))
            .filter(e => e.hasChanged(49 /* EditorOption.fontInfo */))
            .on(updateFont, null));
        this._register(this.editor.onDidLayoutChange(e => this.updateMaxHeight()));
        this.updateMaxHeight();
    }
    show() {
        if (this.visible) {
            return;
        }
        if (!this.domNodes) {
            this.createParameterHintDOMNodes();
        }
        this.keyVisible.set(true);
        this.visible = true;
        setTimeout(() => {
            var _a;
            (_a = this.domNodes) === null || _a === void 0 ? void 0 : _a.element.classList.add('visible');
        }, 100);
        this.editor.layoutContentWidget(this);
    }
    hide() {
        var _a;
        this.renderDisposeables.clear();
        if (!this.visible) {
            return;
        }
        this.keyVisible.reset();
        this.visible = false;
        this.announcedLabel = null;
        (_a = this.domNodes) === null || _a === void 0 ? void 0 : _a.element.classList.remove('visible');
        this.editor.layoutContentWidget(this);
    }
    getPosition() {
        if (this.visible) {
            return {
                position: this.editor.getPosition(),
                preference: [1 /* ContentWidgetPositionPreference.ABOVE */, 2 /* ContentWidgetPositionPreference.BELOW */]
            };
        }
        return null;
    }
    render(hints) {
        var _a;
        this.renderDisposeables.clear();
        if (!this.domNodes) {
            return;
        }
        const multiple = hints.signatures.length > 1;
        this.domNodes.element.classList.toggle('multiple', multiple);
        this.keyMultipleSignatures.set(multiple);
        this.domNodes.signature.innerText = '';
        this.domNodes.docs.innerText = '';
        const signature = hints.signatures[hints.activeSignature];
        if (!signature) {
            return;
        }
        const code = dom/* append */.R3(this.domNodes.signature, $('.code'));
        const fontInfo = this.editor.getOption(49 /* EditorOption.fontInfo */);
        code.style.fontSize = `${fontInfo.fontSize}px`;
        code.style.fontFamily = fontInfo.fontFamily;
        const hasParameters = signature.parameters.length > 0;
        const activeParameterIndex = (_a = signature.activeParameter) !== null && _a !== void 0 ? _a : hints.activeParameter;
        if (!hasParameters) {
            const label = dom/* append */.R3(code, $('span'));
            label.textContent = signature.label;
        }
        else {
            this.renderParameters(code, signature, activeParameterIndex);
        }
        const activeParameter = signature.parameters[activeParameterIndex];
        if (activeParameter === null || activeParameter === void 0 ? void 0 : activeParameter.documentation) {
            const documentation = $('span.documentation');
            if (typeof activeParameter.documentation === 'string') {
                documentation.textContent = activeParameter.documentation;
            }
            else {
                const renderedContents = this.renderMarkdownDocs(activeParameter.documentation);
                documentation.appendChild(renderedContents.element);
            }
            dom/* append */.R3(this.domNodes.docs, $('p', {}, documentation));
        }
        if (signature.documentation === undefined) {
            /** no op */
        }
        else if (typeof signature.documentation === 'string') {
            dom/* append */.R3(this.domNodes.docs, $('p', {}, signature.documentation));
        }
        else {
            const renderedContents = this.renderMarkdownDocs(signature.documentation);
            dom/* append */.R3(this.domNodes.docs, renderedContents.element);
        }
        const hasDocs = this.hasDocs(signature, activeParameter);
        this.domNodes.signature.classList.toggle('has-docs', hasDocs);
        this.domNodes.docs.classList.toggle('empty', !hasDocs);
        this.domNodes.overloads.textContent =
            String(hints.activeSignature + 1).padStart(hints.signatures.length.toString().length, '0') + '/' + hints.signatures.length;
        if (activeParameter) {
            let labelToAnnounce = '';
            const param = signature.parameters[activeParameterIndex];
            if (Array.isArray(param.label)) {
                labelToAnnounce = signature.label.substring(param.label[0], param.label[1]);
            }
            else {
                labelToAnnounce = param.label;
            }
            if (param.documentation) {
                labelToAnnounce += typeof param.documentation === 'string' ? `, ${param.documentation}` : `, ${param.documentation.value}`;
            }
            if (signature.documentation) {
                labelToAnnounce += typeof signature.documentation === 'string' ? `, ${signature.documentation}` : `, ${signature.documentation.value}`;
            }
            // Select method gets called on every user type while parameter hints are visible.
            // We do not want to spam the user with same announcements, so we only announce if the current parameter changed.
            if (this.announcedLabel !== labelToAnnounce) {
                aria/* alert */.Z9(nls/* localize */.NC('hint', "{0}, hint", labelToAnnounce));
                this.announcedLabel = labelToAnnounce;
            }
        }
        this.editor.layoutContentWidget(this);
        this.domNodes.scrollbar.scanDomNode();
    }
    renderMarkdownDocs(markdown) {
        const renderedContents = this.renderDisposeables.add(this.markdownRenderer.render(markdown, {
            asyncRenderCallback: () => {
                var _a;
                (_a = this.domNodes) === null || _a === void 0 ? void 0 : _a.scrollbar.scanDomNode();
            }
        }));
        renderedContents.element.classList.add('markdown-docs');
        return renderedContents;
    }
    hasDocs(signature, activeParameter) {
        if (activeParameter && typeof activeParameter.documentation === 'string' && (0,types/* assertIsDefined */.cW)(activeParameter.documentation).length > 0) {
            return true;
        }
        if (activeParameter && typeof activeParameter.documentation === 'object' && (0,types/* assertIsDefined */.cW)(activeParameter.documentation).value.length > 0) {
            return true;
        }
        if (signature.documentation && typeof signature.documentation === 'string' && (0,types/* assertIsDefined */.cW)(signature.documentation).length > 0) {
            return true;
        }
        if (signature.documentation && typeof signature.documentation === 'object' && (0,types/* assertIsDefined */.cW)(signature.documentation.value).length > 0) {
            return true;
        }
        return false;
    }
    renderParameters(parent, signature, activeParameterIndex) {
        const [start, end] = this.getParameterLabelOffsets(signature, activeParameterIndex);
        const beforeSpan = document.createElement('span');
        beforeSpan.textContent = signature.label.substring(0, start);
        const paramSpan = document.createElement('span');
        paramSpan.textContent = signature.label.substring(start, end);
        paramSpan.className = 'parameter active';
        const afterSpan = document.createElement('span');
        afterSpan.textContent = signature.label.substring(end);
        dom/* append */.R3(parent, beforeSpan, paramSpan, afterSpan);
    }
    getParameterLabelOffsets(signature, paramIdx) {
        const param = signature.parameters[paramIdx];
        if (!param) {
            return [0, 0];
        }
        else if (Array.isArray(param.label)) {
            return param.label;
        }
        else if (!param.label.length) {
            return [0, 0];
        }
        else {
            const regex = new RegExp(`(\\W|^)${(0,strings/* escapeRegExpCharacters */.ec)(param.label)}(?=\\W|$)`, 'g');
            regex.test(signature.label);
            const idx = regex.lastIndex - param.label.length;
            return idx >= 0
                ? [idx, regex.lastIndex]
                : [0, 0];
        }
    }
    next() {
        this.editor.focus();
        this.model.next();
    }
    previous() {
        this.editor.focus();
        this.model.previous();
    }
    getDomNode() {
        if (!this.domNodes) {
            this.createParameterHintDOMNodes();
        }
        return this.domNodes.element;
    }
    getId() {
        return ParameterHintsWidget.ID;
    }
    updateMaxHeight() {
        if (!this.domNodes) {
            return;
        }
        const height = Math.max(this.editor.getLayoutInfo().height / 4, 250);
        const maxHeight = `${height}px`;
        this.domNodes.element.style.maxHeight = maxHeight;
        const wrapper = this.domNodes.element.getElementsByClassName('phwrapper');
        if (wrapper.length) {
            wrapper[0].style.maxHeight = maxHeight;
        }
    }
};
ParameterHintsWidget.ID = 'editor.widget.parameterHintsWidget';
ParameterHintsWidget = __decorate([
    __param(2, contextkey/* IContextKeyService */.i6),
    __param(3, common_opener/* IOpenerService */.v4),
    __param(4, language/* ILanguageService */.O)
], ParameterHintsWidget);

(0,colorRegistry/* registerColor */.P6G)('editorHoverWidget.highlightForeground', { dark: colorRegistry/* listHighlightForeground */.Gwp, light: colorRegistry/* listHighlightForeground */.Gwp, hcDark: colorRegistry/* listHighlightForeground */.Gwp, hcLight: colorRegistry/* listHighlightForeground */.Gwp }, nls/* localize */.NC('editorHoverWidgetHighlightForeground', 'Foreground color of the active item in the parameter hint.'));

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var parameterHints_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var parameterHints_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












let ParameterHintsController = class ParameterHintsController extends lifecycle/* Disposable */.JT {
    static get(editor) {
        return editor.getContribution(ParameterHintsController.ID);
    }
    constructor(editor, instantiationService, languageFeaturesService) {
        super();
        this.editor = editor;
        this.model = this._register(new ParameterHintsModel(editor, languageFeaturesService.signatureHelpProvider));
        this._register(this.model.onChangedHints(newParameterHints => {
            var _a;
            if (newParameterHints) {
                this.widget.value.show();
                this.widget.value.render(newParameterHints);
            }
            else {
                (_a = this.widget.rawValue) === null || _a === void 0 ? void 0 : _a.hide();
            }
        }));
        this.widget = new lazy/* Lazy */.o(() => this._register(instantiationService.createInstance(ParameterHintsWidget, this.editor, this.model)));
    }
    cancel() {
        this.model.cancel();
    }
    previous() {
        var _a;
        (_a = this.widget.rawValue) === null || _a === void 0 ? void 0 : _a.previous();
    }
    next() {
        var _a;
        (_a = this.widget.rawValue) === null || _a === void 0 ? void 0 : _a.next();
    }
    trigger(context) {
        this.model.trigger(context, 0);
    }
};
ParameterHintsController.ID = 'editor.controller.parameterHints';
ParameterHintsController = parameterHints_decorate([
    parameterHints_param(1, instantiation/* IInstantiationService */.TG),
    parameterHints_param(2, languageFeatures/* ILanguageFeaturesService */.p)
], ParameterHintsController);

class TriggerParameterHintsAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.triggerParameterHints',
            label: nls/* localize */.NC('parameterHints.trigger.label', "Trigger Parameter Hints"),
            alias: 'Trigger Parameter Hints',
            precondition: editorContextKeys/* EditorContextKeys */.u.hasSignatureHelpProvider,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 10 /* KeyCode.Space */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ParameterHintsController.get(editor);
        controller === null || controller === void 0 ? void 0 : controller.trigger({
            triggerKind: languages/* SignatureHelpTriggerKind */.WW.Invoke
        });
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(ParameterHintsController.ID, ParameterHintsController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,editorExtensions/* registerEditorAction */.Qr)(TriggerParameterHintsAction);
const weight = 100 /* KeybindingWeight.EditorContrib */ + 75;
const ParameterHintsCommand = editorExtensions/* EditorCommand */._l.bindToContribution(ParameterHintsController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new ParameterHintsCommand({
    id: 'closeParameterHints',
    precondition: Context.Visible,
    handler: x => x.cancel(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new ParameterHintsCommand({
    id: 'showPrevParameterHint',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(Context.Visible, Context.MultipleSignatures),
    handler: x => x.previous(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 16 /* KeyCode.UpArrow */,
        secondary: [512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */],
        mac: { primary: 16 /* KeyCode.UpArrow */, secondary: [512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */, 256 /* KeyMod.WinCtrl */ | 46 /* KeyCode.KeyP */] }
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new ParameterHintsCommand({
    id: 'showNextParameterHint',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(Context.Visible, Context.MultipleSignatures),
    handler: x => x.next(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 18 /* KeyCode.DownArrow */,
        secondary: [512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */],
        mac: { primary: 18 /* KeyCode.DownArrow */, secondary: [512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */, 256 /* KeyMod.WinCtrl */ | 44 /* KeyCode.KeyN */] }
    }
}));


/***/ }),

/***/ 82146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Fw: function() { return /* binding */ IPeekViewService; },
  Jy: function() { return /* binding */ PeekContext; },
  vk: function() { return /* binding */ PeekViewWidget; },
  rc: function() { return /* binding */ getOuterEditor; },
  SC: function() { return /* binding */ peekViewBorder; },
  M8: function() { return /* binding */ peekViewResultsBackground; },
  KY: function() { return /* binding */ peekViewTitleBackground; },
  IH: function() { return /* binding */ peekViewTitleForeground; },
  R7: function() { return /* binding */ peekViewTitleInfoForeground; }
});

// UNUSED EXPORTS: peekViewEditorBackground, peekViewEditorGutterBackground, peekViewEditorMatchHighlight, peekViewEditorMatchHighlightBorder, peekViewEditorStickyScrollBackground, peekViewResultsFileForeground, peekViewResultsMatchForeground, peekViewResultsMatchHighlight, peekViewResultsSelectionBackground, peekViewResultsSelectionForeground

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(31768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var actions = __webpack_require__(25541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(4186);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/objects.js
var objects = __webpack_require__(19525);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/media/peekViewWidget.css
var peekViewWidget = __webpack_require__(29165);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/media/peekViewWidget.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(peekViewWidget/* default */.Z, options);




       /* harmony default export */ var media_peekViewWidget = (peekViewWidget/* default */.Z && peekViewWidget/* default */.Z.locals ? peekViewWidget/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js
var codeEditorService = __webpack_require__(41886);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget.js
var embeddedCodeEditorWidget = __webpack_require__(13511);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/zoneWidget/browser/zoneWidget.js + 1 modules
var zoneWidget = __webpack_require__(67617);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js + 2 modules
var menuEntryActionViewItem = __webpack_require__(80681);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js
var extensions = __webpack_require__(54659);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



















const IPeekViewService = (0,instantiation/* createDecorator */.yh)('IPeekViewService');
(0,extensions/* registerSingleton */.z)(IPeekViewService, class {
    constructor() {
        this._widgets = new Map();
    }
    addExclusiveWidget(editor, widget) {
        const existing = this._widgets.get(editor);
        if (existing) {
            existing.listener.dispose();
            existing.widget.dispose();
        }
        const remove = () => {
            const data = this._widgets.get(editor);
            if (data && data.widget === widget) {
                data.listener.dispose();
                this._widgets.delete(editor);
            }
        };
        this._widgets.set(editor, { widget, listener: widget.onDidClose(remove) });
    }
}, 1 /* InstantiationType.Delayed */);
var PeekContext;
(function (PeekContext) {
    PeekContext.inPeekEditor = new contextkey/* RawContextKey */.uy('inReferenceSearchEditor', true, nls/* localize */.NC('inReferenceSearchEditor', "Whether the current code editor is embedded inside peek"));
    PeekContext.notInPeekEditor = PeekContext.inPeekEditor.toNegated();
})(PeekContext || (PeekContext = {}));
let PeekContextController = class PeekContextController {
    constructor(editor, contextKeyService) {
        if (editor instanceof embeddedCodeEditorWidget/* EmbeddedCodeEditorWidget */.H) {
            PeekContext.inPeekEditor.bindTo(contextKeyService);
        }
    }
    dispose() { }
};
PeekContextController.ID = 'editor.contrib.referenceController';
PeekContextController = __decorate([
    __param(1, contextkey/* IContextKeyService */.i6)
], PeekContextController);
(0,editorExtensions/* registerEditorContribution */._K)(PeekContextController.ID, PeekContextController, 0 /* EditorContributionInstantiation.Eager */); // eager because it needs to define a context key
function getOuterEditor(accessor) {
    const editor = accessor.get(codeEditorService/* ICodeEditorService */.$).getFocusedCodeEditor();
    if (editor instanceof embeddedCodeEditorWidget/* EmbeddedCodeEditorWidget */.H) {
        return editor.getParentEditor();
    }
    return editor;
}
const defaultOptions = {
    headerBackgroundColor: color/* Color */.Il.white,
    primaryHeadingColor: color/* Color */.Il.fromHex('#333333'),
    secondaryHeadingColor: color/* Color */.Il.fromHex('#6c6c6cb3')
};
let PeekViewWidget = class PeekViewWidget extends zoneWidget/* ZoneWidget */.I {
    constructor(editor, options, instantiationService) {
        super(editor, options);
        this.instantiationService = instantiationService;
        this._onDidClose = new common_event/* Emitter */.Q5();
        this.onDidClose = this._onDidClose.event;
        objects/* mixin */.jB(this.options, defaultOptions, false);
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = true; // prevent consumers who dispose on onDidClose from looping
            super.dispose();
            this._onDidClose.fire(this);
        }
    }
    style(styles) {
        const options = this.options;
        if (styles.headerBackgroundColor) {
            options.headerBackgroundColor = styles.headerBackgroundColor;
        }
        if (styles.primaryHeadingColor) {
            options.primaryHeadingColor = styles.primaryHeadingColor;
        }
        if (styles.secondaryHeadingColor) {
            options.secondaryHeadingColor = styles.secondaryHeadingColor;
        }
        super.style(styles);
    }
    _applyStyles() {
        super._applyStyles();
        const options = this.options;
        if (this._headElement && options.headerBackgroundColor) {
            this._headElement.style.backgroundColor = options.headerBackgroundColor.toString();
        }
        if (this._primaryHeading && options.primaryHeadingColor) {
            this._primaryHeading.style.color = options.primaryHeadingColor.toString();
        }
        if (this._secondaryHeading && options.secondaryHeadingColor) {
            this._secondaryHeading.style.color = options.secondaryHeadingColor.toString();
        }
        if (this._bodyElement && options.frameColor) {
            this._bodyElement.style.borderColor = options.frameColor.toString();
        }
    }
    _fillContainer(container) {
        this.setCssClass('peekview-widget');
        this._headElement = dom.$('.head');
        this._bodyElement = dom.$('.body');
        this._fillHead(this._headElement);
        this._fillBody(this._bodyElement);
        container.appendChild(this._headElement);
        container.appendChild(this._bodyElement);
    }
    _fillHead(container, noCloseAction) {
        this._titleElement = dom.$('.peekview-title');
        if (this.options.supportOnTitleClick) {
            this._titleElement.classList.add('clickable');
            dom/* addStandardDisposableListener */.mu(this._titleElement, 'click', event => this._onTitleClick(event));
        }
        dom/* append */.R3(this._headElement, this._titleElement);
        this._fillTitleIcon(this._titleElement);
        this._primaryHeading = dom.$('span.filename');
        this._secondaryHeading = dom.$('span.dirname');
        this._metaHeading = dom.$('span.meta');
        dom/* append */.R3(this._titleElement, this._primaryHeading, this._secondaryHeading, this._metaHeading);
        const actionsContainer = dom.$('.peekview-actions');
        dom/* append */.R3(this._headElement, actionsContainer);
        const actionBarOptions = this._getActionBarOptions();
        this._actionbarWidget = new actionbar/* ActionBar */.o(actionsContainer, actionBarOptions);
        this._disposables.add(this._actionbarWidget);
        if (!noCloseAction) {
            this._actionbarWidget.push(new actions/* Action */.aU('peekview.close', nls/* localize */.NC('label.close', "Close"), themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.close), true, () => {
                this.dispose();
                return Promise.resolve();
            }), { label: false, icon: true });
        }
    }
    _fillTitleIcon(container) {
    }
    _getActionBarOptions() {
        return {
            actionViewItemProvider: menuEntryActionViewItem/* createActionViewItem */.Id.bind(undefined, this.instantiationService),
            orientation: 0 /* ActionsOrientation.HORIZONTAL */
        };
    }
    _onTitleClick(event) {
        // implement me if supportOnTitleClick option is set
    }
    setTitle(primaryHeading, secondaryHeading) {
        if (this._primaryHeading && this._secondaryHeading) {
            this._primaryHeading.innerText = primaryHeading;
            this._primaryHeading.setAttribute('title', primaryHeading);
            if (secondaryHeading) {
                this._secondaryHeading.innerText = secondaryHeading;
            }
            else {
                dom/* clearNode */.PO(this._secondaryHeading);
            }
        }
    }
    setMetaTitle(value) {
        if (this._metaHeading) {
            if (value) {
                this._metaHeading.innerText = value;
                dom/* show */.$Z(this._metaHeading);
            }
            else {
                dom/* hide */.Cp(this._metaHeading);
            }
        }
    }
    _doLayout(heightInPixel, widthInPixel) {
        if (!this._isShowing && heightInPixel < 0) {
            // Looks like the view zone got folded away!
            this.dispose();
            return;
        }
        const headHeight = Math.ceil(this.editor.getOption(65 /* EditorOption.lineHeight */) * 1.2);
        const bodyHeight = Math.round(heightInPixel - (headHeight + 2 /* the border-top/bottom width*/));
        this._doLayoutHead(headHeight, widthInPixel);
        this._doLayoutBody(bodyHeight, widthInPixel);
    }
    _doLayoutHead(heightInPixel, widthInPixel) {
        if (this._headElement) {
            this._headElement.style.height = `${heightInPixel}px`;
            this._headElement.style.lineHeight = this._headElement.style.height;
        }
    }
    _doLayoutBody(heightInPixel, widthInPixel) {
        if (this._bodyElement) {
            this._bodyElement.style.height = `${heightInPixel}px`;
        }
    }
};
PeekViewWidget = __decorate([
    __param(2, instantiation/* IInstantiationService */.TG)
], PeekViewWidget);

const peekViewTitleBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewTitle.background', { dark: '#252526', light: '#F3F3F3', hcDark: color/* Color */.Il.black, hcLight: color/* Color */.Il.white }, nls/* localize */.NC('peekViewTitleBackground', 'Background color of the peek view title area.'));
const peekViewTitleForeground = (0,colorRegistry/* registerColor */.P6G)('peekViewTitleLabel.foreground', { dark: color/* Color */.Il.white, light: color/* Color */.Il.black, hcDark: color/* Color */.Il.white, hcLight: colorRegistry/* editorForeground */.NOs }, nls/* localize */.NC('peekViewTitleForeground', 'Color of the peek view title.'));
const peekViewTitleInfoForeground = (0,colorRegistry/* registerColor */.P6G)('peekViewTitleDescription.foreground', { dark: '#ccccccb3', light: '#616161', hcDark: '#FFFFFF99', hcLight: '#292929' }, nls/* localize */.NC('peekViewTitleInfoForeground', 'Color of the peek view title info.'));
const peekViewBorder = (0,colorRegistry/* registerColor */.P6G)('peekView.border', { dark: colorRegistry/* editorInfoForeground */.c63, light: colorRegistry/* editorInfoForeground */.c63, hcDark: colorRegistry/* contrastBorder */.lRK, hcLight: colorRegistry/* contrastBorder */.lRK }, nls/* localize */.NC('peekViewBorder', 'Color of the peek view borders and arrow.'));
const peekViewResultsBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.background', { dark: '#252526', light: '#F3F3F3', hcDark: color/* Color */.Il.black, hcLight: color/* Color */.Il.white }, nls/* localize */.NC('peekViewResultsBackground', 'Background color of the peek view result list.'));
const peekViewResultsMatchForeground = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.lineForeground', { dark: '#bbbbbb', light: '#646465', hcDark: color/* Color */.Il.white, hcLight: colorRegistry/* editorForeground */.NOs }, nls/* localize */.NC('peekViewResultsMatchForeground', 'Foreground color for line nodes in the peek view result list.'));
const peekViewResultsFileForeground = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.fileForeground', { dark: color/* Color */.Il.white, light: '#1E1E1E', hcDark: color/* Color */.Il.white, hcLight: colorRegistry/* editorForeground */.NOs }, nls/* localize */.NC('peekViewResultsFileForeground', 'Foreground color for file nodes in the peek view result list.'));
const peekViewResultsSelectionBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.selectionBackground', { dark: '#3399ff33', light: '#3399ff33', hcDark: null, hcLight: null }, nls/* localize */.NC('peekViewResultsSelectionBackground', 'Background color of the selected entry in the peek view result list.'));
const peekViewResultsSelectionForeground = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.selectionForeground', { dark: color/* Color */.Il.white, light: '#6C6C6C', hcDark: color/* Color */.Il.white, hcLight: colorRegistry/* editorForeground */.NOs }, nls/* localize */.NC('peekViewResultsSelectionForeground', 'Foreground color of the selected entry in the peek view result list.'));
const peekViewEditorBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewEditor.background', { dark: '#001F33', light: '#F2F8FC', hcDark: color/* Color */.Il.black, hcLight: color/* Color */.Il.white }, nls/* localize */.NC('peekViewEditorBackground', 'Background color of the peek view editor.'));
const peekViewEditorGutterBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewEditorGutter.background', { dark: peekViewEditorBackground, light: peekViewEditorBackground, hcDark: peekViewEditorBackground, hcLight: peekViewEditorBackground }, nls/* localize */.NC('peekViewEditorGutterBackground', 'Background color of the gutter in the peek view editor.'));
const peekViewEditorStickyScrollBackground = (0,colorRegistry/* registerColor */.P6G)('peekViewEditorStickyScroll.background', { dark: peekViewEditorBackground, light: peekViewEditorBackground, hcDark: peekViewEditorBackground, hcLight: peekViewEditorBackground }, nls/* localize */.NC('peekViewEditorStickScrollBackground', 'Background color of sticky scroll in the peek view editor.'));
const peekViewResultsMatchHighlight = (0,colorRegistry/* registerColor */.P6G)('peekViewResult.matchHighlightBackground', { dark: '#ea5c004d', light: '#ea5c004d', hcDark: null, hcLight: null }, nls/* localize */.NC('peekViewResultsMatchHighlight', 'Match highlight color in the peek view result list.'));
const peekViewEditorMatchHighlight = (0,colorRegistry/* registerColor */.P6G)('peekViewEditor.matchHighlightBackground', { dark: '#ff8f0099', light: '#f5d802de', hcDark: null, hcLight: null }, nls/* localize */.NC('peekViewEditorMatchHighlight', 'Match highlight color in the peek view editor.'));
const peekViewEditorMatchHighlightBorder = (0,colorRegistry/* registerColor */.P6G)('peekViewEditor.matchHighlightBorder', { dark: null, light: null, hcDark: colorRegistry/* activeContrastBorder */.xL1, hcLight: colorRegistry/* activeContrastBorder */.xL1 }, nls/* localize */.NC('peekViewEditorMatchHighlightBorder', 'Match highlight border in the peek view editor.'));


/***/ })

}]);