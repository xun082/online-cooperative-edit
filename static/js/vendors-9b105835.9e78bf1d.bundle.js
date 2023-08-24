"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-9b105835"],{

/***/ 3228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n/* ---------- DiffEditor ---------- */\n\n.monaco-diff-editor .diffOverview {\n\tz-index: 9;\n}\n\n.monaco-diff-editor .diffOverview .diffViewport {\n\tz-index: 10;\n}\n\n/* colors not externalized: using transparancy on background */\n.monaco-diff-editor.vs\t\t\t.diffOverview { background: rgba(0, 0, 0, 0.03); }\n.monaco-diff-editor.vs-dark\t\t.diffOverview { background: rgba(255, 255, 255, 0.01); }\n\n.monaco-scrollable-element.modified-in-monaco-diff-editor.vs\t\t.scrollbar { background: rgba(0,0,0,0); }\n.monaco-scrollable-element.modified-in-monaco-diff-editor.vs-dark\t.scrollbar { background: rgba(0,0,0,0); }\n.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-black\t.scrollbar { background: none; }\n.monaco-scrollable-element.modified-in-monaco-diff-editor.hc-light\t.scrollbar { background: none; }\n\n.monaco-scrollable-element.modified-in-monaco-diff-editor .slider {\n\tz-index: 10;\n}\n.modified-in-monaco-diff-editor\t\t\t\t.slider.active { background: rgba(171, 171, 171, .4); }\n.modified-in-monaco-diff-editor.hc-black\t.slider.active { background: none; }\n.modified-in-monaco-diff-editor.hc-light\t.slider.active { background: none; }\n\n/* ---------- Diff ---------- */\n\n.monaco-editor .insert-sign,\n.monaco-diff-editor .insert-sign,\n.monaco-editor .delete-sign,\n.monaco-diff-editor .delete-sign {\n\tfont-size: 11px !important;\n\topacity: 0.7 !important;\n\tdisplay: flex !important;\n\talign-items: center;\n}\n.monaco-editor.hc-black .insert-sign,\n.monaco-diff-editor.hc-black .insert-sign,\n.monaco-editor.hc-black .delete-sign,\n.monaco-diff-editor.hc-black .delete-sign,\n.monaco-editor.hc-light .insert-sign,\n.monaco-diff-editor.hc-light .insert-sign,\n.monaco-editor.hc-light .delete-sign,\n.monaco-diff-editor.hc-light .delete-sign {\n\topacity: 1;\n}\n\n.monaco-editor .inline-deleted-margin-view-zone {\n\ttext-align: right;\n}\n.monaco-editor .inline-added-margin-view-zone {\n\ttext-align: right;\n}\n\n.monaco-editor .arrow-revert-change {\n\tz-index: 10;\n\tposition: absolute;\n}\n\n.monaco-editor .arrow-revert-change:hover {\n\tcursor: pointer;\n}\n\n/* ---------- Inline Diff ---------- */\n\n.monaco-editor .view-zones .view-lines .view-line span {\n\tdisplay: inline-block;\n}\n\n.monaco-editor .margin-view-zones .lightbulb-glyph:hover {\n\tcursor: pointer;\n}\n\n.monaco-editor .char-insert, .monaco-diff-editor .char-insert {\n\tbackground-color: var(--vscode-diffEditor-insertedTextBackground);\n}\n\n.monaco-editor .line-insert, .monaco-diff-editor .line-insert {\n\tbackground-color: var(--vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);\n}\n\n.monaco-editor .line-insert,\n.monaco-editor .char-insert {\n\tbox-sizing: border-box;\n\tborder: 1px solid var(--vscode-diffEditor-insertedTextBorder);\n}\n.monaco-editor.hc-black .line-insert, .monaco-editor.hc-light .line-insert,\n.monaco-editor.hc-black .char-insert, .monaco-editor.hc-light .char-insert {\n\tborder-style: dashed;\n}\n\n.monaco-editor .line-delete,\n.monaco-editor .char-delete {\n\tbox-sizing: border-box;\n\tborder: 1px solid var(--vscode-diffEditor-removedTextBorder);\n}\n.monaco-editor.hc-black .line-delete, .monaco-editor.hc-light .line-delete,\n.monaco-editor.hc-black .char-delete, .monaco-editor.hc-light .char-delete {\n\tborder-style: dashed;\n}\n\n.monaco-editor .inline-added-margin-view-zone,\n.monaco-editor .gutter-insert, .monaco-diff-editor .gutter-insert {\n\tbackground-color: var(--vscode-diffEditorGutter-insertedLineBackground, --vscode-diffEditor-insertedLineBackground, --vscode-diffEditor-insertedTextBackground);\n}\n\n.monaco-editor .char-delete, .monaco-diff-editor .char-delete {\n\tbackground-color: var(--vscode-diffEditor-removedTextBackground);\n}\n\n.monaco-editor .line-delete, .monaco-diff-editor .line-delete {\n\tbackground-color: var(--vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);\n}\n\n.monaco-editor .inline-deleted-margin-view-zone,\n.monaco-editor .gutter-delete, .monaco-diff-editor .gutter-delete {\n\tbackground-color: var(--vscode-diffEditorGutter-removedLineBackground, --vscode-diffEditor-removedLineBackground, --vscode-diffEditor-removedTextBackground);\n}\n\n.monaco-diff-editor.side-by-side .editor.modified {\n\tbox-shadow: -6px 0 5px -5px var(--vscode-scrollbar-shadow);\n\tborder-left: 1px solid var(--vscode-diffEditor-border);\n}\n\n.monaco-diff-editor .diffViewport {\n\tbackground: var(--vscode-scrollbarSlider-background);\n}\n\n.monaco-diff-editor .diffViewport:hover {\n\tbackground: var(--vscode-scrollbarSlider-hoverBackground);\n}\n\n.monaco-diff-editor .diffViewport:active {\n\tbackground: var(--vscode-scrollbarSlider-activeBackground);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 92046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-diff-editor .diff-review-line-number {\n\ttext-align: right;\n\tdisplay: inline-block;\n\tcolor: var(--vscode-editorLineNumber-foreground);\n}\n\n.monaco-diff-editor .diff-review {\n\tposition: absolute;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\tz-index: 99;\n}\n\n.monaco-diff-editor .diff-review-summary {\n\tpadding-left: 10px;\n}\n\n.monaco-diff-editor .diff-review-shadow {\n\tposition: absolute;\n\tbox-shadow: var(--vscode-scrollbar-shadow) 0 -6px 6px -6px inset;\n}\n\n.monaco-diff-editor .diff-review-row {\n\twhite-space: pre;\n}\n\n.monaco-diff-editor .diff-review-table {\n\tdisplay: table;\n\tmin-width: 100%;\n}\n\n.monaco-diff-editor .diff-review-row {\n\tdisplay: table-row;\n\twidth: 100%;\n}\n\n.monaco-diff-editor .diff-review-spacer {\n\tdisplay: inline-block;\n\twidth: 10px;\n\tvertical-align: middle;\n}\n\n.monaco-diff-editor .diff-review-spacer > .codicon {\n\tfont-size: 9px !important;\n}\n\n.monaco-diff-editor .diff-review-actions {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: 10px;\n\ttop: 2px;\n\tz-index: 100;\n}\n\n.monaco-diff-editor .diff-review-actions .action-label {\n\twidth: 16px;\n\theight: 16px;\n\tmargin: 2px 0;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 62806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* -------------------- IE10 remove auto clear button -------------------- */\n\n::-ms-clear {\n\tdisplay: none;\n}\n\n/* All widgets */\n/* I am not a big fan of this rule */\n.monaco-editor .editor-widget input {\n\tcolor: inherit;\n}\n\n/* -------------------- Editor -------------------- */\n\n.monaco-editor {\n\tposition: relative;\n\toverflow: visible;\n\t-webkit-text-size-adjust: 100%;\n\tcolor: var(--vscode-editor-foreground);\n\tbackground-color: var(--vscode-editor-background);\n}\n.monaco-editor-background {\n\tbackground-color: var(--vscode-editor-background);\n}\n.monaco-editor .rangeHighlight {\n\tbackground-color: var(--vscode-editor-rangeHighlightBackground);\n\tbox-sizing: border-box;\n\tborder: 1px solid var(--vscode-editor-rangeHighlightBorder);\n}\n.monaco-editor.hc-black .rangeHighlight, .monaco-editor.hc-light .rangeHighlight {\n\tborder-style: dotted;\n}\n.monaco-editor .symbolHighlight {\n\tbackground-color: var(--vscode-editor-symbolHighlightBackground);\n\tbox-sizing: border-box;\n\tborder: 1px solid var(--vscode-editor-symbolHighlightBorder);\n}\n.monaco-editor.hc-black .symbolHighlight, .monaco-editor.hc-light .symbolHighlight {\n\tborder-style: dotted;\n}\n\n/* -------------------- Misc -------------------- */\n\n.monaco-editor .overflow-guard {\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.monaco-editor .view-overlays {\n\tposition: absolute;\n\ttop: 0;\n}\n\n/*\n.monaco-editor .auto-closed-character {\n\topacity: 0.3;\n}\n*/\n\n\n.monaco-editor .squiggly-error {\n\tborder-bottom: 4px double var(--vscode-editorError-border);\n}\n.monaco-editor .squiggly-error::before {\n\tdisplay: block;\n\tcontent: '';\n\twidth: 100%;\n\theight: 100%;\n\tbackground: var(--vscode-editorError-background);\n}\n.monaco-editor .squiggly-warning {\n\tborder-bottom: 4px double var(--vscode-editorWarning-border);\n}\n.monaco-editor .squiggly-warning::before {\n\tdisplay: block;\n\tcontent: '';\n\twidth: 100%;\n\theight: 100%;\n\tbackground: var(--vscode-editorWarning-background);\n}\n.monaco-editor .squiggly-info {\n\tborder-bottom: 4px double var(--vscode-editorInfo-border);\n}\n.monaco-editor .squiggly-info::before {\n\tdisplay: block;\n\tcontent: '';\n\twidth: 100%;\n\theight: 100%;\n\tbackground: var(--vscode-editorInfo-background);\n}\n.monaco-editor .squiggly-hint {\n\tborder-bottom: 2px dotted var(--vscode-editorHint-border);\n}\n.monaco-editor.showUnused .squiggly-unnecessary {\n\tborder-bottom: 2px dashed var(--vscode-editorUnnecessaryCode-border);\n}\n.monaco-editor.showDeprecated .squiggly-inline-deprecated {\n\ttext-decoration: line-through;\n\ttext-decoration-color: var(--vscode-editor-foreground, inherit);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 13511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ EmbeddedCodeEditorWidget; }
/* harmony export */ });
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19525);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41886);
/* harmony import */ var _codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41728);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38389);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78658);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73830);
/* harmony import */ var _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70760);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26236);
/* harmony import */ var _platform_accessibility_common_accessibility_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25919);
/* harmony import */ var _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30766);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6216);
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











let EmbeddedCodeEditorWidget = class EmbeddedCodeEditorWidget extends _codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .CodeEditorWidget */ .Gm {
    constructor(domElement, options, codeEditorWidgetOptions, parentEditor, instantiationService, codeEditorService, commandService, contextKeyService, themeService, notificationService, accessibilityService, languageConfigurationService, languageFeaturesService) {
        super(domElement, Object.assign(Object.assign({}, parentEditor.getRawOptions()), { overflowWidgetsDomNode: parentEditor.getOverflowWidgetsDomNode() }), codeEditorWidgetOptions, instantiationService, codeEditorService, commandService, contextKeyService, themeService, notificationService, accessibilityService, languageConfigurationService, languageFeaturesService);
        this._parentEditor = parentEditor;
        this._overwriteOptions = options;
        // Overwrite parent's options
        super.updateOptions(this._overwriteOptions);
        this._register(parentEditor.onDidChangeConfiguration((e) => this._onParentConfigurationChanged(e)));
    }
    getParentEditor() {
        return this._parentEditor;
    }
    _onParentConfigurationChanged(e) {
        super.updateOptions(this._parentEditor.getRawOptions());
        super.updateOptions(this._overwriteOptions);
    }
    updateOptions(newOptions) {
        _base_common_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .mixin */ .jB(this._overwriteOptions, newOptions, true);
        super.updateOptions(this._overwriteOptions);
    }
};
EmbeddedCodeEditorWidget = __decorate([
    __param(4, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_5__/* .IInstantiationService */ .TG),
    __param(5, _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_1__/* .ICodeEditorService */ .$),
    __param(6, _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_3__/* .ICommandService */ .H),
    __param(7, _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_4__/* .IContextKeyService */ .i6),
    __param(8, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_7__/* .IThemeService */ .XE),
    __param(9, _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_6__/* .INotificationService */ .lT),
    __param(10, _platform_accessibility_common_accessibility_js__WEBPACK_IMPORTED_MODULE_8__/* .IAccessibilityService */ .F),
    __param(11, _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageConfigurationService */ .c_),
    __param(12, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_10__/* .ILanguageFeaturesService */ .p)
], EmbeddedCodeEditorWidget);



/***/ }),

/***/ 43130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: function() { return /* binding */ InlineDiffMargin; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80757);
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56704);
/* harmony import */ var _base_common_actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25541);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26794);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3981);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13113);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50077);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48593);
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








class InlineDiffMargin extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    get visibility() {
        return this._visibility;
    }
    set visibility(_visibility) {
        if (this._visibility !== _visibility) {
            this._visibility = _visibility;
            if (_visibility) {
                this._diffActions.style.visibility = 'visible';
            }
            else {
                this._diffActions.style.visibility = 'hidden';
            }
        }
    }
    constructor(_viewZoneId, _marginDomNode, editor, diff, _contextMenuService, _clipboardService) {
        super();
        this._viewZoneId = _viewZoneId;
        this._marginDomNode = _marginDomNode;
        this.editor = editor;
        this.diff = diff;
        this._contextMenuService = _contextMenuService;
        this._clipboardService = _clipboardService;
        this._visibility = false;
        // make sure the diff margin shows above overlay.
        this._marginDomNode.style.zIndex = '10';
        this._diffActions = document.createElement('div');
        this._diffActions.className = _base_common_themables_js__WEBPACK_IMPORTED_MODULE_5__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_4__/* .Codicon */ .l.lightBulb) + ' lightbulb-glyph';
        this._diffActions.style.position = 'absolute';
        const lineHeight = editor.getOption(65 /* EditorOption.lineHeight */);
        const lineFeed = editor.getModel().getEOL();
        this._diffActions.style.right = '0px';
        this._diffActions.style.visibility = 'hidden';
        this._diffActions.style.height = `${lineHeight}px`;
        this._diffActions.style.lineHeight = `${lineHeight}px`;
        this._marginDomNode.appendChild(this._diffActions);
        const actions = [];
        const isDeletion = diff.modifiedEndLineNumber === 0;
        // default action
        actions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU('diff.clipboard.copyDeletedContent', isDeletion
            ? (diff.originalEndLineNumber > diff.modifiedStartLineNumber
                ? _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyDeletedLinesContent.label', "Copy deleted lines")
                : _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyDeletedLinesContent.single.label', "Copy deleted line"))
            : (diff.originalEndLineNumber > diff.modifiedStartLineNumber
                ? _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyChangedLinesContent.label', "Copy changed lines")
                : _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyChangedLinesContent.single.label', "Copy changed line")), undefined, true, () => __awaiter(this, void 0, void 0, function* () {
            const range = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(diff.originalStartLineNumber, 1, diff.originalEndLineNumber + 1, 1);
            const deletedText = diff.originalModel.getValueInRange(range);
            yield this._clipboardService.writeText(deletedText);
        })));
        let currentLineNumberOffset = 0;
        let copyLineAction = undefined;
        if (diff.originalEndLineNumber > diff.modifiedStartLineNumber) {
            copyLineAction = new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU('diff.clipboard.copyDeletedLineContent', isDeletion
                ? _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyDeletedLineContent.label', "Copy deleted line ({0})", diff.originalStartLineNumber)
                : _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyChangedLineContent.label', "Copy changed line ({0})", diff.originalStartLineNumber), undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                const lineContent = diff.originalModel.getLineContent(diff.originalStartLineNumber + currentLineNumberOffset);
                if (lineContent === '') {
                    // empty line
                    const eof = diff.originalModel.getEndOfLineSequence();
                    yield this._clipboardService.writeText(eof === 0 /* EndOfLineSequence.LF */ ? '\n' : '\r\n');
                }
                else {
                    yield this._clipboardService.writeText(lineContent);
                }
            }));
            actions.push(copyLineAction);
        }
        const readOnly = editor.getOption(89 /* EditorOption.readOnly */);
        if (!readOnly) {
            actions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .aU('diff.inline.revertChange', _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.inline.revertChange.label', "Revert this change"), undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                const range = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(diff.originalStartLineNumber, 1, diff.originalEndLineNumber, diff.originalModel.getLineMaxColumn(diff.originalEndLineNumber));
                const deletedText = diff.originalModel.getValueInRange(range);
                if (diff.modifiedEndLineNumber === 0) {
                    // deletion only
                    const column = editor.getModel().getLineMaxColumn(diff.modifiedStartLineNumber);
                    editor.executeEdits('diffEditor', [
                        {
                            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(diff.modifiedStartLineNumber, column, diff.modifiedStartLineNumber, column),
                            text: lineFeed + deletedText
                        }
                    ]);
                }
                else {
                    const column = editor.getModel().getLineMaxColumn(diff.modifiedEndLineNumber);
                    editor.executeEdits('diffEditor', [
                        {
                            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(diff.modifiedStartLineNumber, 1, diff.modifiedEndLineNumber, column),
                            text: deletedText
                        }
                    ]);
                }
            })));
        }
        const useShadowDOM = editor.getOption(125 /* EditorOption.useShadowDOM */) && !_base_common_platform_js__WEBPACK_IMPORTED_MODULE_6__/* .isIOS */ .gn; // Do not use shadow dom on IOS #122035
        const showContextMenu = (x, y) => {
            var _a;
            this._contextMenuService.showContextMenu({
                domForShadowRoot: useShadowDOM ? (_a = editor.getDomNode()) !== null && _a !== void 0 ? _a : undefined : undefined,
                getAnchor: () => {
                    return {
                        x,
                        y
                    };
                },
                getActions: () => {
                    if (copyLineAction) {
                        copyLineAction.label =
                            isDeletion
                                ? _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyDeletedLineContent.label', "Copy deleted line ({0})", diff.originalStartLineNumber + currentLineNumberOffset)
                                : _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('diff.clipboard.copyChangedLineContent.label', "Copy changed line ({0})", diff.originalStartLineNumber + currentLineNumberOffset);
                    }
                    return actions;
                },
                autoSelectFirstItem: true
            });
        };
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .addStandardDisposableListener */ .mu(this._diffActions, 'mousedown', e => {
            const { top, height } = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .getDomNodePagePosition */ .i(this._diffActions);
            const pad = Math.floor(lineHeight / 3);
            e.preventDefault();
            showContextMenu(e.posx, top + height + pad);
        }));
        this._register(editor.onMouseMove((e) => {
            if (e.target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || e.target.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
                const viewZoneId = e.target.detail.viewZoneId;
                if (viewZoneId === this._viewZoneId) {
                    this.visibility = true;
                    currentLineNumberOffset = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, lineHeight);
                }
                else {
                    this.visibility = false;
                }
            }
            else {
                this.visibility = false;
            }
        }));
        this._register(editor.onMouseDown((e) => {
            if (!e.event.rightButton) {
                return;
            }
            if (e.target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || e.target.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
                const viewZoneId = e.target.detail.viewZoneId;
                if (viewZoneId === this._viewZoneId) {
                    e.event.preventDefault();
                    currentLineNumberOffset = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, lineHeight);
                    showContextMenu(e.event.posx, e.event.posy + lineHeight);
                }
            }
        }));
    }
    _updateLightBulbPosition(marginDomNode, y, lineHeight) {
        const { top } = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .getDomNodePagePosition */ .i(marginDomNode);
        const offset = y - top;
        const lineNumberOffset = Math.floor(offset / lineHeight);
        const newTop = lineNumberOffset * lineHeight;
        this._diffActions.style.top = `${newTop}px`;
        if (this.diff.viewLineCounts) {
            let acc = 0;
            for (let i = 0; i < this.diff.viewLineCounts.length; i++) {
                acc += this.diff.viewLineCounts[i];
                if (lineNumberOffset < acc) {
                    return i;
                }
            }
        }
        return lineNumberOffset;
    }
}


/***/ }),

/***/ 3173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ WorkerBasedDocumentDiffProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99264);
/* harmony import */ var _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23706);
/* harmony import */ var _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13761);
/* harmony import */ var _common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14433);
/* harmony import */ var _platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62482);
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






let WorkerBasedDocumentDiffProvider = class WorkerBasedDocumentDiffProvider {
    constructor(options, editorWorkerService, telemetryService) {
        this.editorWorkerService = editorWorkerService;
        this.telemetryService = telemetryService;
        this.onDidChangeEventEmitter = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChange = this.onDidChangeEventEmitter.event;
        this.diffAlgorithm = 'advanced';
        this.diffAlgorithmOnDidChangeSubscription = undefined;
        this.setOptions(options);
    }
    dispose() {
        var _a;
        (_a = this.diffAlgorithmOnDidChangeSubscription) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    computeDiff(original, modified, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.diffAlgorithm !== 'string') {
                return this.diffAlgorithm.computeDiff(original, modified, options);
            }
            // This significantly speeds up the case when the original file is empty
            if (original.getLineCount() === 1 && original.getLineMaxColumn(1) === 1) {
                return {
                    changes: [
                        new _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_3__/* .LineRangeMapping */ .f0(new _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_2__/* .LineRange */ .z(1, 2), new _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_2__/* .LineRange */ .z(1, modified.getLineCount() + 1), [
                            new _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_3__/* .RangeMapping */ .iy(original.getFullModelRange(), modified.getFullModelRange())
                        ])
                    ],
                    identical: false,
                    quitEarly: false,
                    moves: [],
                };
            }
            const uriKey = JSON.stringify([original.uri.toString(), modified.uri.toString()]);
            const context = JSON.stringify([original.id, modified.id, original.getAlternativeVersionId(), modified.getAlternativeVersionId(), JSON.stringify(options)]);
            const c = WorkerBasedDocumentDiffProvider.diffCache.get(uriKey);
            if (c && c.context === context) {
                return c.result;
            }
            const sw = _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_1__/* .StopWatch */ .G.create();
            const result = yield this.editorWorkerService.computeDiff(original.uri, modified.uri, options, this.diffAlgorithm);
            const timeMs = sw.elapsed();
            this.telemetryService.publicLog2('diffEditor.computeDiff', {
                timeMs,
                timedOut: (_a = result === null || result === void 0 ? void 0 : result.quitEarly) !== null && _a !== void 0 ? _a : true,
            });
            if (!result) {
                throw new Error('no diff result available');
            }
            // max 10 items in cache
            if (WorkerBasedDocumentDiffProvider.diffCache.size > 10) {
                WorkerBasedDocumentDiffProvider.diffCache.delete(WorkerBasedDocumentDiffProvider.diffCache.keys().next().value);
            }
            WorkerBasedDocumentDiffProvider.diffCache.set(uriKey, { result, context });
            return result;
        });
    }
    setOptions(newOptions) {
        var _a;
        let didChange = false;
        if (newOptions.diffAlgorithm) {
            if (this.diffAlgorithm !== newOptions.diffAlgorithm) {
                (_a = this.diffAlgorithmOnDidChangeSubscription) === null || _a === void 0 ? void 0 : _a.dispose();
                this.diffAlgorithmOnDidChangeSubscription = undefined;
                this.diffAlgorithm = newOptions.diffAlgorithm;
                if (typeof newOptions.diffAlgorithm !== 'string') {
                    this.diffAlgorithmOnDidChangeSubscription = newOptions.diffAlgorithm.onDidChange(() => this.onDidChangeEventEmitter.fire());
                }
                didChange = true;
            }
        }
        if (didChange) {
            this.onDidChangeEventEmitter.fire();
        }
    }
};
WorkerBasedDocumentDiffProvider.diffCache = new Map();
WorkerBasedDocumentDiffProvider = __decorate([
    __param(1, _common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_4__/* .IEditorWorkerService */ .p),
    __param(2, _platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_5__/* .ITelemetryService */ .b)
], WorkerBasedDocumentDiffProvider);



/***/ }),

/***/ 50615:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53072);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32298);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27976);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85147);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80566);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89396);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffEditor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3228);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffEditor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffEditor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffEditor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffEditor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 80909:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53072);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32298);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27976);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85147);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80566);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89396);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffReview_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92046);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffReview_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffReview_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffReview_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_diffReview_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ }),

/***/ 39756:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53072);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32298);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27976);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85147);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80566);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89396);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62806);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_editor_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);