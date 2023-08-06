"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3de3c236"],{

/***/ 64097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .lightBulbWidget {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.monaco-editor .lightBulbWidget:hover{\n\tcursor: pointer;\n}\n\n.monaco-editor .lightBulbWidget.codicon-light-bulb {\n\tcolor: var(--vscode-editorLightBulb-foreground);\n}\n\n.monaco-editor .lightBulbWidget.codicon-lightbulb-autofix {\n\tcolor: var(--vscode-editorLightBulbAutoFix-foreground, var(--vscode-editorLightBulb-foreground));\n}\n\n.monaco-editor .lightBulbWidget:before {\n\tposition: relative;\n\tz-index: 2;\n}\n\n.monaco-editor .lightBulbWidget:after {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tcontent: '';\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\topacity: 0.3;\n\tbackground-color: var(--vscode-editor-background);\n\tz-index: 1;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 24429:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyAction: function() { return /* binding */ CopyAction; },
/* harmony export */   CutAction: function() { return /* binding */ CutAction; },
/* harmony export */   PasteAction: function() { return /* binding */ PasteAction; }
/* harmony export */ });
/* harmony import */ var _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47975);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94057);
/* harmony import */ var _browser_controller_textAreaInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33481);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91213);
/* harmony import */ var _browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74312);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94872);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23330);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3145);
/* harmony import */ var _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90764);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81043);
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










const CLIPBOARD_CONTEXT_MENU_GROUP = '9_cutcopypaste';
const supportsCut = (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isNative */ .tY || document.queryCommandSupported('cut'));
const supportsCopy = (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isNative */ .tY || document.queryCommandSupported('copy'));
// Firefox only supports navigator.clipboard.readText() in browser extensions.
// See https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText#Browser_compatibility
// When loading over http, navigator.clipboard can be undefined. See https://github.com/microsoft/monaco-editor/issues/2313
const supportsPaste = (typeof navigator.clipboard === 'undefined' || _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__.isFirefox) ? document.queryCommandSupported('paste') : true;
function registerCommand(command) {
    command.register();
    return command;
}
const CutAction = supportsCut ? registerCommand(new _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .MultiCommand */ .AJ({
    id: 'editor.action.clipboardCutAction',
    precondition: undefined,
    kbOpts: (
    // Do not bind cut keybindings in the browser,
    // since browsers do that for us and it avoids security prompts
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isNative */ .tY ? {
        primary: 2048 /* KeyMod.CtrlCmd */ | 54 /* KeyCode.KeyX */,
        win: { primary: 2048 /* KeyMod.CtrlCmd */ | 54 /* KeyCode.KeyX */, secondary: [1024 /* KeyMod.Shift */ | 20 /* KeyCode.Delete */] },
        weight: 100 /* KeybindingWeight.EditorContrib */
    } : undefined),
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.MenubarEditMenu,
            group: '2_ccp',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC({ key: 'miCut', comment: ['&& denotes a mnemonic'] }, "Cu&&t"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.cutLabel', "Cut"),
            when: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.writable,
            order: 1,
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.cutLabel', "Cut"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.SimpleEditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.cutLabel', "Cut"),
            when: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.writable,
            order: 1,
        }]
})) : undefined;
const CopyAction = supportsCopy ? registerCommand(new _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .MultiCommand */ .AJ({
    id: 'editor.action.clipboardCopyAction',
    precondition: undefined,
    kbOpts: (
    // Do not bind copy keybindings in the browser,
    // since browsers do that for us and it avoids security prompts
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isNative */ .tY ? {
        primary: 2048 /* KeyMod.CtrlCmd */ | 33 /* KeyCode.KeyC */,
        win: { primary: 2048 /* KeyMod.CtrlCmd */ | 33 /* KeyCode.KeyC */, secondary: [2048 /* KeyMod.CtrlCmd */ | 19 /* KeyCode.Insert */] },
        weight: 100 /* KeybindingWeight.EditorContrib */
    } : undefined),
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.MenubarEditMenu,
            group: '2_ccp',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC({ key: 'miCopy', comment: ['&& denotes a mnemonic'] }, "&&Copy"),
            order: 2
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.copyLabel', "Copy"),
            order: 2,
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.copyLabel', "Copy"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.SimpleEditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.copyLabel', "Copy"),
            order: 2,
        }]
})) : undefined;
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.MenubarEditMenu, { submenu: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.MenubarCopy, title: { value: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('copy as', "Copy As"), original: 'Copy As', }, group: '2_ccp', order: 3 });
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext, { submenu: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContextCopy, title: { value: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('copy as', "Copy As"), original: 'Copy As', }, group: CLIPBOARD_CONTEXT_MENU_GROUP, order: 3 });
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext, { submenu: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContextShare, title: { value: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('share', "Share"), original: 'Share', }, group: '11_share', order: -1, when: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .ContextKeyExpr */ .Ao.and(_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .ContextKeyExpr */ .Ao.notEquals('resourceScheme', 'output'), _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.editorTextFocus) });
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorTitleContext, { submenu: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorTitleContextShare, title: { value: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('share', "Share"), original: 'Share', }, group: '11_share', order: -1 });
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.ExplorerContext, { submenu: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.ExplorerContextShare, title: { value: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('share', "Share"), original: 'Share', }, group: '11_share', order: -1 });
const PasteAction = supportsPaste ? registerCommand(new _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .MultiCommand */ .AJ({
    id: 'editor.action.clipboardPasteAction',
    precondition: undefined,
    kbOpts: (
    // Do not bind paste keybindings in the browser,
    // since browsers do that for us and it avoids security prompts
    _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isNative */ .tY ? {
        primary: 2048 /* KeyMod.CtrlCmd */ | 52 /* KeyCode.KeyV */,
        win: { primary: 2048 /* KeyMod.CtrlCmd */ | 52 /* KeyCode.KeyV */, secondary: [1024 /* KeyMod.Shift */ | 19 /* KeyCode.Insert */] },
        linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 52 /* KeyCode.KeyV */, secondary: [1024 /* KeyMod.Shift */ | 19 /* KeyCode.Insert */] },
        weight: 100 /* KeybindingWeight.EditorContrib */
    } : undefined),
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.MenubarEditMenu,
            group: '2_ccp',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC({ key: 'miPaste', comment: ['&& denotes a mnemonic'] }, "&&Paste"),
            order: 4
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.pasteLabel', "Paste"),
            when: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.writable,
            order: 4,
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.pasteLabel', "Paste"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.SimpleEditorContext,
            group: CLIPBOARD_CONTEXT_MENU_GROUP,
            title: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.pasteLabel', "Paste"),
            when: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.writable,
            order: 4,
        }]
})) : undefined;
class ExecCommandCopyWithSyntaxHighlightingAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.clipboardCopyWithSyntaxHighlightingAction',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC('actions.clipboard.copyWithSyntaxHighlightingLabel', "Copy With Syntax Highlighting"),
            alias: 'Copy With Syntax Highlighting',
            precondition: undefined,
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorContextKeys */ .u.textInputFocus,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const emptySelectionClipboard = editor.getOption(35 /* EditorOption.emptySelectionClipboard */);
        if (!emptySelectionClipboard && editor.getSelection().isEmpty()) {
            return;
        }
        _browser_controller_textAreaInput_js__WEBPACK_IMPORTED_MODULE_2__/* .CopyOptions */ .RA.forceCopyWithSyntaxHighlighting = true;
        editor.focus();
        document.execCommand('copy');
        _browser_controller_textAreaInput_js__WEBPACK_IMPORTED_MODULE_2__/* .CopyOptions */ .RA.forceCopyWithSyntaxHighlighting = false;
    }
}
function registerExecCommandImpl(target, browserCommand) {
    if (!target) {
        return;
    }
    // 1. handle case when focus is in editor.
    target.addImplementation(10000, 'code-editor', (accessor, args) => {
        // Only if editor text focus (i.e. not if editor has widget focus).
        const focusedEditor = accessor.get(_browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__/* .ICodeEditorService */ .$).getFocusedCodeEditor();
        if (focusedEditor && focusedEditor.hasTextFocus()) {
            // Do not execute if there is no selection and empty selection clipboard is off
            const emptySelectionClipboard = focusedEditor.getOption(35 /* EditorOption.emptySelectionClipboard */);
            const selection = focusedEditor.getSelection();
            if (selection && selection.isEmpty() && !emptySelectionClipboard) {
                return true;
            }
            document.execCommand(browserCommand);
            return true;
        }
        return false;
    });
    // 2. (default) handle case when focus is somewhere else.
    target.addImplementation(0, 'generic-dom', (accessor, args) => {
        document.execCommand(browserCommand);
        return true;
    });
}
registerExecCommandImpl(CutAction, 'cut');
registerExecCommandImpl(CopyAction, 'copy');
if (PasteAction) {
    // 1. Paste: handle case when focus is in editor.
    PasteAction.addImplementation(10000, 'code-editor', (accessor, args) => {
        const codeEditorService = accessor.get(_browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__/* .ICodeEditorService */ .$);
        const clipboardService = accessor.get(_platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_8__/* .IClipboardService */ .p);
        // Only if editor text focus (i.e. not if editor has widget focus).
        const focusedEditor = codeEditorService.getFocusedCodeEditor();
        if (focusedEditor && focusedEditor.hasTextFocus()) {
            const result = document.execCommand('paste');
            // Use the clipboard service if document.execCommand('paste') was not successful
            if (!result && _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isWeb */ .$L) {
                return (() => __awaiter(void 0, void 0, void 0, function* () {
                    const clipboardText = yield clipboardService.readText();
                    if (clipboardText !== '') {
                        const metadata = _browser_controller_textAreaInput_js__WEBPACK_IMPORTED_MODULE_2__/* .InMemoryClipboardMetadataManager */ .Nl.INSTANCE.get(clipboardText);
                        let pasteOnNewLine = false;
                        let multicursorText = null;
                        let mode = null;
                        if (metadata) {
                            pasteOnNewLine = (focusedEditor.getOption(35 /* EditorOption.emptySelectionClipboard */) && !!metadata.isFromEmptySelection);
                            multicursorText = (typeof metadata.multicursorText !== 'undefined' ? metadata.multicursorText : null);
                            mode = metadata.mode;
                        }
                        focusedEditor.trigger('keyboard', "paste" /* Handler.Paste */, {
                            text: clipboardText,
                            pasteOnNewLine,
                            multicursorText,
                            mode
                        });
                    }
                }))();
            }
            return true;
        }
        return false;
    });
    // 2. Paste: (default) handle case when focus is somewhere else.
    PasteAction.addImplementation(0, 'generic-dom', (accessor, args) => {
        document.execCommand('paste');
        return true;
    });
}
if (supportsCopy) {
    (0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorAction */ .Qr)(ExecCommandCopyWithSyntaxHighlightingAction);
}


/***/ }),

/***/ 68081:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bb: function() { return /* binding */ refactorCommandId; },
/* harmony export */   LR: function() { return /* binding */ applyCodeAction; },
/* harmony export */   MN: function() { return /* binding */ sourceActionCommandId; },
/* harmony export */   RB: function() { return /* binding */ codeActionCommandId; },
/* harmony export */   TM: function() { return /* binding */ fixAllCommandId; },
/* harmony export */   UX: function() { return /* binding */ ApplyCodeActionReason; },
/* harmony export */   aI: function() { return /* binding */ getCodeActions; },
/* harmony export */   cz: function() { return /* binding */ quickFixCommandId; },
/* harmony export */   pZ: function() { return /* binding */ autoFixCommandId; },
/* harmony export */   uH: function() { return /* binding */ organizeImportsCommandId; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29811);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50847);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56946);
/* harmony import */ var _browser_services_bulkEditService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24581);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76584);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74980);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58431);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76774);
/* harmony import */ var _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1930);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23330);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77783);
/* harmony import */ var _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99938);
/* harmony import */ var _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99871);
/* harmony import */ var _platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72209);
/* harmony import */ var _common_types_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18019);
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

















const codeActionCommandId = 'editor.action.codeAction';
const quickFixCommandId = 'editor.action.quickFix';
const autoFixCommandId = 'editor.action.autoFix';
const refactorCommandId = 'editor.action.refactor';
const sourceActionCommandId = 'editor.action.sourceAction';
const organizeImportsCommandId = 'editor.action.organizeImports';
const fixAllCommandId = 'editor.action.fixAll';
class ManagedCodeActionSet extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    static codeActionsPreferredComparator(a, b) {
        if (a.isPreferred && !b.isPreferred) {
            return -1;
        }
        else if (!a.isPreferred && b.isPreferred) {
            return 1;
        }
        else {
            return 0;
        }
    }
    static codeActionsComparator({ action: a }, { action: b }) {
        if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .Of)(a.diagnostics)) {
            return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .Of)(b.diagnostics) ? ManagedCodeActionSet.codeActionsPreferredComparator(a, b) : -1;
        }
        else if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .Of)(b.diagnostics)) {
            return 1;
        }
        else {
            return ManagedCodeActionSet.codeActionsPreferredComparator(a, b); // both have no diagnostics
        }
    }
    constructor(actions, documentation, disposables) {
        super();
        this.documentation = documentation;
        this._register(disposables);
        this.allActions = [...actions].sort(ManagedCodeActionSet.codeActionsComparator);
        this.validActions = this.allActions.filter(({ action }) => !action.disabled);
    }
    get hasAutoFix() {
        return this.validActions.some(({ action: fix }) => !!fix.kind && _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN.QuickFix.contains(new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN(fix.kind)) && !!fix.isPreferred);
    }
}
const emptyCodeActionsResponse = { actions: [], documentation: undefined };
function getCodeActions(registry, model, rangeOrSelection, trigger, progress, token) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const filter = trigger.filter || {};
        const codeActionContext = {
            only: (_a = filter.include) === null || _a === void 0 ? void 0 : _a.value,
            trigger: trigger.type,
        };
        const cts = new _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_8__/* .TextModelCancellationTokenSource */ .YQ(model, token);
        const providers = getCodeActionProviders(registry, model, filter);
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .DisposableStore */ .SL();
        const promises = providers.map((provider) => __awaiter(this, void 0, void 0, function* () {
            try {
                progress.report(provider);
                const providedCodeActions = yield provider.provideCodeActions(model, rangeOrSelection, codeActionContext, cts.token);
                if (providedCodeActions) {
                    disposables.add(providedCodeActions);
                }
                if (cts.token.isCancellationRequested) {
                    return emptyCodeActionsResponse;
                }
                const filteredActions = ((providedCodeActions === null || providedCodeActions === void 0 ? void 0 : providedCodeActions.actions) || []).filter(action => action && (0,_common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .filtersAction */ .Yl)(filter, action));
                const documentation = getDocumentationFromProvider(provider, filteredActions, filter.include);
                return {
                    actions: filteredActions.map(action => new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionItem */ .bA(action, provider)),
                    documentation
                };
            }
            catch (err) {
                if ((0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .isCancellationError */ .n2)(err)) {
                    throw err;
                }
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .onUnexpectedExternalError */ .Cp)(err);
                return emptyCodeActionsResponse;
            }
        }));
        const listener = registry.onDidChange(() => {
            const newProviders = registry.all(model);
            if (!(0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS)(newProviders, providers)) {
                cts.cancel();
            }
        });
        try {
            const actions = yield Promise.all(promises);
            const allActions = actions.map(x => x.actions).flat();
            const allDocumentation = [
                ...(0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .coalesce */ .kX)(actions.map(x => x.documentation)),
                ...getAdditionalDocumentationForShowingActions(registry, model, trigger, allActions)
            ];
            return new ManagedCodeActionSet(allActions, allDocumentation, disposables);
        }
        finally {
            listener.dispose();
            cts.dispose();
        }
    });
}
function getCodeActionProviders(registry, model, filter) {
    return registry.all(model)
        // Don't include providers that we know will not return code actions of interest
        .filter(provider => {
        if (!provider.providedCodeActionKinds) {
            // We don't know what type of actions this provider will return.
            return true;
        }
        return provider.providedCodeActionKinds.some(kind => (0,_common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .mayIncludeActionsOfKind */ .EU)(filter, new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN(kind)));
    });
}
function* getAdditionalDocumentationForShowingActions(registry, model, trigger, actionsToShow) {
    var _a, _b, _c;
    if (model && actionsToShow.length) {
        for (const provider of registry.all(model)) {
            if (provider._getAdditionalMenuItems) {
                yield* (_a = provider._getAdditionalMenuItems) === null || _a === void 0 ? void 0 : _a.call(provider, { trigger: trigger.type, only: (_c = (_b = trigger.filter) === null || _b === void 0 ? void 0 : _b.include) === null || _c === void 0 ? void 0 : _c.value }, actionsToShow.map(item => item.action));
            }
        }
    }
}
function getDocumentationFromProvider(provider, providedCodeActions, only) {
    if (!provider.documentation) {
        return undefined;
    }
    const documentation = provider.documentation.map(entry => ({ kind: new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN(entry.kind), command: entry.command }));
    if (only) {
        let currentBest;
        for (const entry of documentation) {
            if (entry.kind.contains(only)) {
                if (!currentBest) {
                    currentBest = entry;
                }
                else {
                    // Take best match
                    if (currentBest.kind.contains(entry.kind)) {
                        currentBest = entry;
                    }
                }
            }
        }
        if (currentBest) {
            return currentBest === null || currentBest === void 0 ? void 0 : currentBest.command;
        }
    }
    // Otherwise, check to see if any of the provided actions match.
    for (const action of providedCodeActions) {
        if (!action.kind) {
            continue;
        }
        for (const entry of documentation) {
            if (entry.kind.contains(new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN(action.kind))) {
                return entry.command;
            }
        }
    }
    return undefined;
}
var ApplyCodeActionReason;
(function (ApplyCodeActionReason) {
    ApplyCodeActionReason["OnSave"] = "onSave";
    ApplyCodeActionReason["FromProblemsView"] = "fromProblemsView";
    ApplyCodeActionReason["FromCodeActions"] = "fromCodeActions";
})(ApplyCodeActionReason || (ApplyCodeActionReason = {}));
function applyCodeAction(accessor, item, codeActionReason, options, token = _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const bulkEditService = accessor.get(_browser_services_bulkEditService_js__WEBPACK_IMPORTED_MODULE_5__/* .IBulkEditService */ .vu);
        const commandService = accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__/* .ICommandService */ .H);
        const telemetryService = accessor.get(_platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_13__/* .ITelemetryService */ .b);
        const notificationService = accessor.get(_platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_11__/* .INotificationService */ .lT);
        telemetryService.publicLog2('codeAction.applyCodeAction', {
            codeActionTitle: item.action.title,
            codeActionKind: item.action.kind,
            codeActionIsPreferred: !!item.action.isPreferred,
            reason: codeActionReason,
        });
        yield item.resolve(token);
        if (token.isCancellationRequested) {
            return;
        }
        if ((_a = item.action.edit) === null || _a === void 0 ? void 0 : _a.edits.length) {
            const result = yield bulkEditService.apply(item.action.edit, {
                editor: options === null || options === void 0 ? void 0 : options.editor,
                label: item.action.title,
                quotableLabel: item.action.title,
                code: 'undoredo.codeAction',
                respectAutoSaveConfig: codeActionReason !== ApplyCodeActionReason.OnSave,
                showPreview: options === null || options === void 0 ? void 0 : options.preview,
            });
            if (!result.isApplied) {
                return;
            }
        }
        if (item.action.command) {
            try {
                yield commandService.executeCommand(item.action.command.id, ...(item.action.command.arguments || []));
            }
            catch (err) {
                const message = asMessage(err);
                notificationService.error(typeof message === 'string'
                    ? message
                    : _nls_js__WEBPACK_IMPORTED_MODULE_9__/* .localize */ .NC('applyCodeActionFailed', "An unknown error occurred while applying the code action"));
            }
        }
    });
}
function asMessage(err) {
    if (typeof err === 'string') {
        return err;
    }
    else if (err instanceof Error && typeof err.message === 'string') {
        return err.message;
    }
    else {
        return undefined;
    }
}
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__/* .CommandsRegistry */ .P.registerCommand('_executeCodeActionProvider', function (accessor, resource, rangeOrSelection, kind, itemResolveCount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(resource instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__/* .URI */ .o)) {
            throw (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .illegalArgument */ .b1)();
        }
        const { codeActionProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p);
        const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_7__/* .IModelService */ .q).getModel(resource);
        if (!model) {
            throw (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .illegalArgument */ .b1)();
        }
        const validatedRangeOrSelection = _common_core_selection_js__WEBPACK_IMPORTED_MODULE_15__/* .Selection */ .Y.isISelection(rangeOrSelection)
            ? _common_core_selection_js__WEBPACK_IMPORTED_MODULE_15__/* .Selection */ .Y.liftSelection(rangeOrSelection)
            : _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.isIRange(rangeOrSelection)
                ? model.validateRange(rangeOrSelection)
                : undefined;
        if (!validatedRangeOrSelection) {
            throw (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .illegalArgument */ .b1)();
        }
        const include = typeof kind === 'string' ? new _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionKind */ .yN(kind) : undefined;
        const codeActionSet = yield getCodeActions(codeActionProvider, model, validatedRangeOrSelection, { type: 1 /* languages.CodeActionTriggerType.Invoke */, triggerAction: _common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .CodeActionTriggerSource */ .aQ.Default, filter: { includeSourceActions: true, include } }, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_12__/* .Progress */ .Ex.None, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None);
        const resolving = [];
        const resolveCount = Math.min(codeActionSet.validActions.length, typeof itemResolveCount === 'number' ? itemResolveCount : 0);
        for (let i = 0; i < resolveCount; i++) {
            resolving.push(codeActionSet.validActions[i].resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None));
        }
        try {
            yield Promise.all(resolving);
            return codeActionSet.validActions.map(item => item.action);
        }
        finally {
            setTimeout(() => codeActionSet.dispose(), 100);
        }
    });
});


/***/ }),

/***/ 86598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorConfigurationSchema.js
var editorConfigurationSchema = __webpack_require__(55302);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeAction.js
var codeAction = __webpack_require__(68081);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/common/types.js
var types = __webpack_require__(18019);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionController.js + 2 modules
var codeActionController = __webpack_require__(80855);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionModel.js
var codeActionModel = __webpack_require__(60936);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionCommands.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









function contextKeyForSupportedActions(kind) {
    return contextkey/* ContextKeyExpr */.Ao.regex(codeActionModel/* SUPPORTED_CODE_ACTIONS */.fj.keys()[0], new RegExp('(\\s|^)' + (0,strings/* escapeRegExpCharacters */.ec)(kind.value) + '\\b'));
}
const argsSchema = {
    type: 'object',
    defaultSnippets: [{ body: { kind: '' } }],
    properties: {
        'kind': {
            type: 'string',
            description: nls/* localize */.NC('args.schema.kind', "Kind of the code action to run."),
        },
        'apply': {
            type: 'string',
            description: nls/* localize */.NC('args.schema.apply', "Controls when the returned actions are applied."),
            default: "ifSingle" /* CodeActionAutoApply.IfSingle */,
            enum: ["first" /* CodeActionAutoApply.First */, "ifSingle" /* CodeActionAutoApply.IfSingle */, "never" /* CodeActionAutoApply.Never */],
            enumDescriptions: [
                nls/* localize */.NC('args.schema.apply.first', "Always apply the first returned code action."),
                nls/* localize */.NC('args.schema.apply.ifSingle', "Apply the first returned code action if it is the only one."),
                nls/* localize */.NC('args.schema.apply.never', "Do not apply the returned code actions."),
            ]
        },
        'preferred': {
            type: 'boolean',
            default: false,
            description: nls/* localize */.NC('args.schema.preferred', "Controls if only preferred code actions should be returned."),
        }
    }
};
function triggerCodeActionsForEditorSelection(editor, notAvailableMessage, filter, autoApply, triggerAction = types/* CodeActionTriggerSource */.aQ.Default) {
    if (editor.hasModel()) {
        const controller = codeActionController/* CodeActionController */.G.get(editor);
        controller === null || controller === void 0 ? void 0 : controller.manualTriggerAtCurrentPosition(notAvailableMessage, triggerAction, filter, autoApply);
    }
}
class QuickFixAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* quickFixCommandId */.cz,
            label: nls/* localize */.NC('quickfix.trigger.label', "Quick Fix..."),
            alias: 'Quick Fix...',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasCodeActionsProvider),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 89 /* KeyCode.Period */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, nls/* localize */.NC('editor.action.quickFix.noneMessage', "No code actions available"), undefined, undefined, types/* CodeActionTriggerSource */.aQ.QuickFix);
    }
}
class CodeActionCommand extends editorExtensions/* EditorCommand */._l {
    constructor() {
        super({
            id: codeAction/* codeActionCommandId */.RB,
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasCodeActionsProvider),
            description: {
                description: 'Trigger a code action',
                args: [{ name: 'args', schema: argsSchema, }]
            }
        });
    }
    runEditorCommand(_accessor, editor, userArgs) {
        const args = types/* CodeActionCommandArgs */.wZ.fromUser(userArgs, {
            kind: types/* CodeActionKind */.yN.Empty,
            apply: "ifSingle" /* CodeActionAutoApply.IfSingle */,
        });
        return triggerCodeActionsForEditorSelection(editor, typeof (userArgs === null || userArgs === void 0 ? void 0 : userArgs.kind) === 'string'
            ? args.preferred
                ? nls/* localize */.NC('editor.action.codeAction.noneMessage.preferred.kind', "No preferred code actions for '{0}' available", userArgs.kind)
                : nls/* localize */.NC('editor.action.codeAction.noneMessage.kind', "No code actions for '{0}' available", userArgs.kind)
            : args.preferred
                ? nls/* localize */.NC('editor.action.codeAction.noneMessage.preferred', "No preferred code actions available")
                : nls/* localize */.NC('editor.action.codeAction.noneMessage', "No code actions available"), {
            include: args.kind,
            includeSourceActions: true,
            onlyIncludePreferredActions: args.preferred,
        }, args.apply);
    }
}
class RefactorAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* refactorCommandId */.Bb,
            label: nls/* localize */.NC('refactor.label', "Refactor..."),
            alias: 'Refactor...',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasCodeActionsProvider),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 48 /* KeyCode.KeyR */,
                mac: {
                    primary: 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 48 /* KeyCode.KeyR */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 2,
                when: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, contextKeyForSupportedActions(types/* CodeActionKind */.yN.Refactor)),
            },
            description: {
                description: 'Refactor...',
                args: [{ name: 'args', schema: argsSchema }]
            }
        });
    }
    run(_accessor, editor, userArgs) {
        const args = types/* CodeActionCommandArgs */.wZ.fromUser(userArgs, {
            kind: types/* CodeActionKind */.yN.Refactor,
            apply: "never" /* CodeActionAutoApply.Never */
        });
        return triggerCodeActionsForEditorSelection(editor, typeof (userArgs === null || userArgs === void 0 ? void 0 : userArgs.kind) === 'string'
            ? args.preferred
                ? nls/* localize */.NC('editor.action.refactor.noneMessage.preferred.kind', "No preferred refactorings for '{0}' available", userArgs.kind)
                : nls/* localize */.NC('editor.action.refactor.noneMessage.kind', "No refactorings for '{0}' available", userArgs.kind)
            : args.preferred
                ? nls/* localize */.NC('editor.action.refactor.noneMessage.preferred', "No preferred refactorings available")
                : nls/* localize */.NC('editor.action.refactor.noneMessage', "No refactorings available"), {
            include: types/* CodeActionKind */.yN.Refactor.contains(args.kind) ? args.kind : types/* CodeActionKind */.yN.None,
            onlyIncludePreferredActions: args.preferred
        }, args.apply, types/* CodeActionTriggerSource */.aQ.Refactor);
    }
}
class SourceAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* sourceActionCommandId */.MN,
            label: nls/* localize */.NC('source.label', "Source Action..."),
            alias: 'Source Action...',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasCodeActionsProvider),
            contextMenuOpts: {
                group: '1_modification',
                order: 2.1,
                when: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, contextKeyForSupportedActions(types/* CodeActionKind */.yN.Source)),
            },
            description: {
                description: 'Source Action...',
                args: [{ name: 'args', schema: argsSchema }]
            }
        });
    }
    run(_accessor, editor, userArgs) {
        const args = types/* CodeActionCommandArgs */.wZ.fromUser(userArgs, {
            kind: types/* CodeActionKind */.yN.Source,
            apply: "never" /* CodeActionAutoApply.Never */
        });
        return triggerCodeActionsForEditorSelection(editor, typeof (userArgs === null || userArgs === void 0 ? void 0 : userArgs.kind) === 'string'
            ? args.preferred
                ? nls/* localize */.NC('editor.action.source.noneMessage.preferred.kind', "No preferred source actions for '{0}' available", userArgs.kind)
                : nls/* localize */.NC('editor.action.source.noneMessage.kind', "No source actions for '{0}' available", userArgs.kind)
            : args.preferred
                ? nls/* localize */.NC('editor.action.source.noneMessage.preferred', "No preferred source actions available")
                : nls/* localize */.NC('editor.action.source.noneMessage', "No source actions available"), {
            include: types/* CodeActionKind */.yN.Source.contains(args.kind) ? args.kind : types/* CodeActionKind */.yN.None,
            includeSourceActions: true,
            onlyIncludePreferredActions: args.preferred,
        }, args.apply, types/* CodeActionTriggerSource */.aQ.SourceAction);
    }
}
class OrganizeImportsAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* organizeImportsCommandId */.uH,
            label: nls/* localize */.NC('organizeImports.label', "Organize Imports"),
            alias: 'Organize Imports',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, contextKeyForSupportedActions(types/* CodeActionKind */.yN.SourceOrganizeImports)),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 45 /* KeyCode.KeyO */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, nls/* localize */.NC('editor.action.organize.noneMessage', "No organize imports action available"), { include: types/* CodeActionKind */.yN.SourceOrganizeImports, includeSourceActions: true }, "ifSingle" /* CodeActionAutoApply.IfSingle */, types/* CodeActionTriggerSource */.aQ.OrganizeImports);
    }
}
class FixAllAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* fixAllCommandId */.TM,
            label: nls/* localize */.NC('fixAll.label', "Fix All"),
            alias: 'Fix All',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, contextKeyForSupportedActions(types/* CodeActionKind */.yN.SourceFixAll))
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, nls/* localize */.NC('fixAll.noneMessage', "No fix all action available"), { include: types/* CodeActionKind */.yN.SourceFixAll, includeSourceActions: true }, "ifSingle" /* CodeActionAutoApply.IfSingle */, types/* CodeActionTriggerSource */.aQ.FixAll);
    }
}
class AutoFixAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: codeAction/* autoFixCommandId */.pZ,
            label: nls/* localize */.NC('autoFix.label', "Auto Fix..."),
            alias: 'Auto Fix...',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, contextKeyForSupportedActions(types/* CodeActionKind */.yN.QuickFix)),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 89 /* KeyCode.Period */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 89 /* KeyCode.Period */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        return triggerCodeActionsForEditorSelection(editor, nls/* localize */.NC('editor.action.autoFix.noneMessage', "No auto fixes available"), {
            include: types/* CodeActionKind */.yN.QuickFix,
            onlyIncludePreferredActions: true
        }, "ifSingle" /* CodeActionAutoApply.IfSingle */, types/* CodeActionTriggerSource */.aQ.AutoFix);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.js + 1 modules
var lightBulbWidget = __webpack_require__(53628);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js
var configurationRegistry = __webpack_require__(85118);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(72015);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








(0,editorExtensions/* registerEditorContribution */._K)(codeActionController/* CodeActionController */.G.ID, codeActionController/* CodeActionController */.G, 3 /* EditorContributionInstantiation.Eventually */);
(0,editorExtensions/* registerEditorContribution */._K)(lightBulbWidget/* LightBulbWidget */.f.ID, lightBulbWidget/* LightBulbWidget */.f, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(QuickFixAction);
(0,editorExtensions/* registerEditorAction */.Qr)(RefactorAction);
(0,editorExtensions/* registerEditorAction */.Qr)(SourceAction);
(0,editorExtensions/* registerEditorAction */.Qr)(OrganizeImportsAction);
(0,editorExtensions/* registerEditorAction */.Qr)(AutoFixAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FixAllAction);
(0,editorExtensions/* registerEditorCommand */.fK)(new CodeActionCommand());
platform/* Registry */.B.as(configurationRegistry/* Extensions */.IP.Configuration).registerConfiguration(Object.assign(Object.assign({}, editorConfigurationSchema/* editorConfigurationBaseNode */.wk), { properties: {
        'editor.codeActionWidget.showHeaders': {
            type: 'boolean',
            scope: 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            description: nls/* localize */.NC('showCodeActionHeaders', "Enable/disable showing group headers in the Code Action menu."),
            default: true,
        },
    } }));


/***/ }),

/***/ 80855:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: function() { return /* binding */ CodeActionController; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lazy.js
var lazy = __webpack_require__(92831);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeAction.js
var codeAction = __webpack_require__(68081);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/common/types.js
var types = __webpack_require__(18019);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionKeybindingResolver.js
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




let CodeActionKeybindingResolver = class CodeActionKeybindingResolver {
    constructor(keybindingService) {
        this.keybindingService = keybindingService;
    }
    getResolver() {
        // Lazy since we may not actually ever read the value
        const allCodeActionBindings = new lazy/* Lazy */.o(() => this.keybindingService.getKeybindings()
            .filter(item => CodeActionKeybindingResolver.codeActionCommands.indexOf(item.command) >= 0)
            .filter(item => item.resolvedKeybinding)
            .map((item) => {
            // Special case these commands since they come built-in with VS Code and don't use 'commandArgs'
            let commandArgs = item.commandArgs;
            if (item.command === codeAction/* organizeImportsCommandId */.uH) {
                commandArgs = { kind: types/* CodeActionKind */.yN.SourceOrganizeImports.value };
            }
            else if (item.command === codeAction/* fixAllCommandId */.TM) {
                commandArgs = { kind: types/* CodeActionKind */.yN.SourceFixAll.value };
            }
            return Object.assign({ resolvedKeybinding: item.resolvedKeybinding }, types/* CodeActionCommandArgs */.wZ.fromUser(commandArgs, {
                kind: types/* CodeActionKind */.yN.None,
                apply: "never" /* CodeActionAutoApply.Never */
            }));
        }));
        return (action) => {
            if (action.kind) {
                const binding = this.bestKeybindingForCodeAction(action, allCodeActionBindings.value);
                return binding === null || binding === void 0 ? void 0 : binding.resolvedKeybinding;
            }
            return undefined;
        };
    }
    bestKeybindingForCodeAction(action, candidates) {
        if (!action.kind) {
            return undefined;
        }
        const kind = new types/* CodeActionKind */.yN(action.kind);
        return candidates
            .filter(candidate => candidate.kind.contains(kind))
            .filter(candidate => {
            if (candidate.preferred) {
                // If the candidate keybinding only applies to preferred actions, the this action must also be preferred
                return action.isPreferred;
            }
            return true;
        })
            .reduceRight((currentBest, candidate) => {
            if (!currentBest) {
                return candidate;
            }
            // Select the more specific binding
            return currentBest.kind.contains(candidate.kind) ? candidate : currentBest;
        }, undefined);
    }
};
CodeActionKeybindingResolver.codeActionCommands = [
    codeAction/* refactorCommandId */.Bb,
    codeAction/* codeActionCommandId */.RB,
    codeAction/* sourceActionCommandId */.MN,
    codeAction/* organizeImportsCommandId */.uH,
    codeAction/* fixAllCommandId */.TM
];
CodeActionKeybindingResolver = __decorate([
    __param(0, keybinding/* IKeybindingService */.d)
], CodeActionKeybindingResolver);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js + 2 modules
var codiconStyles = __webpack_require__(53481);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/symbolIcons/browser/symbolIcons.js + 1 modules
var symbolIcons = __webpack_require__(90966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionMenu.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
 // The codicon symbol styles are defined here and must be loaded


 // The codicon symbol colors are defined here and must be loaded to get colors

const uncategorizedCodeActionGroup = Object.freeze({ kind: types/* CodeActionKind */.yN.Empty, title: (0,nls/* localize */.NC)('codeAction.widget.id.more', 'More Actions...') });
const codeActionGroups = Object.freeze([
    { kind: types/* CodeActionKind */.yN.QuickFix, title: (0,nls/* localize */.NC)('codeAction.widget.id.quickfix', 'Quick Fix...') },
    { kind: types/* CodeActionKind */.yN.RefactorExtract, title: (0,nls/* localize */.NC)('codeAction.widget.id.extract', 'Extract...'), icon: codicons/* Codicon */.l.wrench },
    { kind: types/* CodeActionKind */.yN.RefactorInline, title: (0,nls/* localize */.NC)('codeAction.widget.id.inline', 'Inline...'), icon: codicons/* Codicon */.l.wrench },
    { kind: types/* CodeActionKind */.yN.RefactorRewrite, title: (0,nls/* localize */.NC)('codeAction.widget.id.convert', 'Rewrite...'), icon: codicons/* Codicon */.l.wrench },
    { kind: types/* CodeActionKind */.yN.RefactorMove, title: (0,nls/* localize */.NC)('codeAction.widget.id.move', 'Move...'), icon: codicons/* Codicon */.l.wrench },
    { kind: types/* CodeActionKind */.yN.SurroundWith, title: (0,nls/* localize */.NC)('codeAction.widget.id.surround', 'Surround With...'), icon: codicons/* Codicon */.l.symbolSnippet },
    { kind: types/* CodeActionKind */.yN.Source, title: (0,nls/* localize */.NC)('codeAction.widget.id.source', 'Source Action...'), icon: codicons/* Codicon */.l.symbolFile },
    uncategorizedCodeActionGroup,
]);
function toMenuItems(inputCodeActions, showHeaders, keybindingResolver) {
    if (!showHeaders) {
        return inputCodeActions.map((action) => {
            return {
                kind: "action" /* ActionListItemKind.Action */,
                item: action,
                group: uncategorizedCodeActionGroup,
                disabled: !!action.action.disabled,
                label: action.action.disabled || action.action.title
            };
        });
    }
    // Group code actions
    const menuEntries = codeActionGroups.map(group => ({ group, actions: [] }));
    for (const action of inputCodeActions) {
        const kind = action.action.kind ? new types/* CodeActionKind */.yN(action.action.kind) : types/* CodeActionKind */.yN.None;
        for (const menuEntry of menuEntries) {
            if (menuEntry.group.kind.contains(kind)) {
                menuEntry.actions.push(action);
                break;
            }
        }
    }
    const allMenuItems = [];
    for (const menuEntry of menuEntries) {
        if (menuEntry.actions.length) {
            allMenuItems.push({ kind: "header" /* ActionListItemKind.Header */, group: menuEntry.group });
            for (const action of menuEntry.actions) {
                allMenuItems.push({
                    kind: "action" /* ActionListItemKind.Action */,
                    item: action,
                    group: menuEntry.group,
                    label: action.action.title,
                    disabled: !!action.action.disabled,
                    keybinding: keybindingResolver(action.action),
                });
            }
        }
    }
    return allMenuItems;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.js + 1 modules
var lightBulbWidget = __webpack_require__(53628);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js + 1 modules
var messageController = __webpack_require__(16958);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actionWidget/browser/actionWidget.js + 2 modules
var actionWidget = __webpack_require__(81697);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js
var markers = __webpack_require__(74591);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js
var progress = __webpack_require__(99871);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionModel.js
var codeActionModel = __webpack_require__(60936);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionController.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var codeActionController_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var codeActionController_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CodeActionController_disposed;





















let CodeActionController = class CodeActionController extends lifecycle/* Disposable */.JT {
    static get(editor) {
        return editor.getContribution(CodeActionController.ID);
    }
    constructor(editor, markerService, contextKeyService, instantiationService, languageFeaturesService, progressService, _commandService, _configurationService, _actionWidgetService, _instantiationService) {
        super();
        this._commandService = _commandService;
        this._configurationService = _configurationService;
        this._actionWidgetService = _actionWidgetService;
        this._instantiationService = _instantiationService;
        this._activeCodeActions = this._register(new lifecycle/* MutableDisposable */.XK());
        this._showDisabled = false;
        _CodeActionController_disposed.set(this, false);
        this._editor = editor;
        this._model = this._register(new codeActionModel/* CodeActionModel */.Jt(this._editor, languageFeaturesService.codeActionProvider, markerService, contextKeyService, progressService));
        this._register(this._model.onDidChangeState(newState => this.update(newState)));
        this._lightBulbWidget = new lazy/* Lazy */.o(() => {
            const widget = this._editor.getContribution(lightBulbWidget/* LightBulbWidget */.f.ID);
            if (widget) {
                this._register(widget.onClick(e => this.showCodeActionList(e.actions, e, { includeDisabledActions: false, fromLightbulb: true })));
            }
            return widget;
        });
        this._resolver = instantiationService.createInstance(CodeActionKeybindingResolver);
        this._register(this._editor.onDidLayoutChange(() => this._actionWidgetService.hide()));
    }
    dispose() {
        __classPrivateFieldSet(this, _CodeActionController_disposed, true, "f");
        super.dispose();
    }
    showCodeActions(_trigger, actions, at) {
        return this.showCodeActionList(actions, at, { includeDisabledActions: false, fromLightbulb: false });
    }
    manualTriggerAtCurrentPosition(notAvailableMessage, triggerAction, filter, autoApply) {
        var _a;
        if (!this._editor.hasModel()) {
            return;
        }
        (_a = messageController/* MessageController */.O.get(this._editor)) === null || _a === void 0 ? void 0 : _a.closeMessage();
        const triggerPosition = this._editor.getPosition();
        this._trigger({ type: 1 /* CodeActionTriggerType.Invoke */, triggerAction, filter, autoApply, context: { notAvailableMessage, position: triggerPosition } });
    }
    _trigger(trigger) {
        return this._model.trigger(trigger);
    }
    _applyCodeAction(action, retrigger, preview) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._instantiationService.invokeFunction(codeAction/* applyCodeAction */.LR, action, codeAction/* ApplyCodeActionReason */.UX.FromCodeActions, { preview, editor: this._editor });
            }
            finally {
                if (retrigger) {
                    this._trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: types/* CodeActionTriggerSource */.aQ.QuickFix, filter: {} });
                }
            }
        });
    }
    update(newState) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function* () {
            if (newState.type !== 1 /* CodeActionsState.Type.Triggered */) {
                (_a = this._lightBulbWidget.rawValue) === null || _a === void 0 ? void 0 : _a.hide();
                return;
            }
            let actions;
            try {
                actions = yield newState.actions;
            }
            catch (e) {
                (0,errors/* onUnexpectedError */.dL)(e);
                return;
            }
            if (__classPrivateFieldGet(this, _CodeActionController_disposed, "f")) {
                return;
            }
            (_b = this._lightBulbWidget.value) === null || _b === void 0 ? void 0 : _b.update(actions, newState.trigger, newState.position);
            if (newState.trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
                if ((_c = newState.trigger.filter) === null || _c === void 0 ? void 0 : _c.include) { // Triggered for specific scope
                    // Check to see if we want to auto apply.
                    const validActionToApply = this.tryGetValidActionToApply(newState.trigger, actions);
                    if (validActionToApply) {
                        try {
                            (_d = this._lightBulbWidget.value) === null || _d === void 0 ? void 0 : _d.hide();
                            yield this._applyCodeAction(validActionToApply, false, false);
                        }
                        finally {
                            actions.dispose();
                        }
                        return;
                    }
                    // Check to see if there is an action that we would have applied were it not invalid
                    if (newState.trigger.context) {
                        const invalidAction = this.getInvalidActionThatWouldHaveBeenApplied(newState.trigger, actions);
                        if (invalidAction && invalidAction.action.disabled) {
                            (_e = messageController/* MessageController */.O.get(this._editor)) === null || _e === void 0 ? void 0 : _e.showMessage(invalidAction.action.disabled, newState.trigger.context.position);
                            actions.dispose();
                            return;
                        }
                    }
                }
                const includeDisabledActions = !!((_f = newState.trigger.filter) === null || _f === void 0 ? void 0 : _f.include);
                if (newState.trigger.context) {
                    if (!actions.allActions.length || !includeDisabledActions && !actions.validActions.length) {
                        (_g = messageController/* MessageController */.O.get(this._editor)) === null || _g === void 0 ? void 0 : _g.showMessage(newState.trigger.context.notAvailableMessage, newState.trigger.context.position);
                        this._activeCodeActions.value = actions;
                        actions.dispose();
                        return;
                    }
                }
                this._activeCodeActions.value = actions;
                this.showCodeActionList(actions, this.toCoords(newState.position), { includeDisabledActions, fromLightbulb: false });
            }
            else {
                // auto magically triggered
                if (this._actionWidgetService.isVisible) {
                    // TODO: Figure out if we should update the showing menu?
                    actions.dispose();
                }
                else {
                    this._activeCodeActions.value = actions;
                }
            }
        });
    }
    getInvalidActionThatWouldHaveBeenApplied(trigger, actions) {
        if (!actions.allActions.length) {
            return undefined;
        }
        if ((trigger.autoApply === "first" /* CodeActionAutoApply.First */ && actions.validActions.length === 0)
            || (trigger.autoApply === "ifSingle" /* CodeActionAutoApply.IfSingle */ && actions.allActions.length === 1)) {
            return actions.allActions.find(({ action }) => action.disabled);
        }
        return undefined;
    }
    tryGetValidActionToApply(trigger, actions) {
        if (!actions.validActions.length) {
            return undefined;
        }
        if ((trigger.autoApply === "first" /* CodeActionAutoApply.First */ && actions.validActions.length > 0)
            || (trigger.autoApply === "ifSingle" /* CodeActionAutoApply.IfSingle */ && actions.validActions.length === 1)) {
            return actions.validActions[0];
        }
        return undefined;
    }
    showCodeActionList(actions, at, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const editorDom = this._editor.getDomNode();
            if (!editorDom) {
                return;
            }
            const actionsToShow = options.includeDisabledActions && (this._showDisabled || actions.validActions.length === 0) ? actions.allActions : actions.validActions;
            if (!actionsToShow.length) {
                return;
            }
            const anchor = position/* Position */.L.isIPosition(at) ? this.toCoords(at) : at;
            const delegate = {
                onSelect: (action, preview) => __awaiter(this, void 0, void 0, function* () {
                    this._applyCodeAction(action, /* retrigger */ true, !!preview);
                    this._actionWidgetService.hide();
                }),
                onHide: () => {
                    var _a;
                    (_a = this._editor) === null || _a === void 0 ? void 0 : _a.focus();
                }
            };
            this._actionWidgetService.show('codeActionWidget', true, toMenuItems(actionsToShow, this._shouldShowHeaders(), this._resolver.getResolver()), delegate, anchor, editorDom, this._getActionBarActions(actions, at, options));
        });
    }
    toCoords(position) {
        if (!this._editor.hasModel()) {
            return { x: 0, y: 0 };
        }
        this._editor.revealPosition(position, 1 /* ScrollType.Immediate */);
        this._editor.render();
        // Translate to absolute editor position
        const cursorCoords = this._editor.getScrolledVisiblePosition(position);
        const editorCoords = (0,dom/* getDomNodePagePosition */.i)(this._editor.getDomNode());
        const x = editorCoords.left + cursorCoords.left;
        const y = editorCoords.top + cursorCoords.top + cursorCoords.height;
        return { x, y };
    }
    _shouldShowHeaders() {
        var _a;
        const model = (_a = this._editor) === null || _a === void 0 ? void 0 : _a.getModel();
        return this._configurationService.getValue('editor.codeActionWidget.showHeaders', { resource: model === null || model === void 0 ? void 0 : model.uri });
    }
    _getActionBarActions(actions, at, options) {
        if (options.fromLightbulb) {
            return [];
        }
        const resultActions = actions.documentation.map((command) => {
            var _a;
            return ({
                id: command.id,
                label: command.title,
                tooltip: (_a = command.tooltip) !== null && _a !== void 0 ? _a : '',
                class: undefined,
                enabled: true,
                run: () => { var _a; return this._commandService.executeCommand(command.id, ...((_a = command.arguments) !== null && _a !== void 0 ? _a : [])); },
            });
        });
        if (options.includeDisabledActions && actions.validActions.length > 0 && actions.allActions.length !== actions.validActions.length) {
            resultActions.push(this._showDisabled ? {
                id: 'hideMoreActions',
                label: (0,nls/* localize */.NC)('hideMoreActions', 'Hide Disabled'),
                enabled: true,
                tooltip: '',
                class: undefined,
                run: () => {
                    this._showDisabled = false;
                    return this.showCodeActionList(actions, at, options);
                }
            } : {
                id: 'showMoreActions',
                label: (0,nls/* localize */.NC)('showMoreActions', 'Show Disabled'),
                enabled: true,
                tooltip: '',
                class: undefined,
                run: () => {
                    this._showDisabled = true;
                    return this.showCodeActionList(actions, at, options);
                }
            });
        }
        return resultActions;
    }
};
_CodeActionController_disposed = new WeakMap();
CodeActionController.ID = 'editor.contrib.codeActionController';
CodeActionController = codeActionController_decorate([
    codeActionController_param(1, markers/* IMarkerService */.lT),
    codeActionController_param(2, contextkey/* IContextKeyService */.i6),
    codeActionController_param(3, instantiation/* IInstantiationService */.TG),
    codeActionController_param(4, languageFeatures/* ILanguageFeaturesService */.p),
    codeActionController_param(5, progress/* IEditorProgressService */.ek),
    codeActionController_param(6, commands/* ICommandService */.H),
    codeActionController_param(7, configuration/* IConfigurationService */.Ui),
    codeActionController_param(8, actionWidget/* IActionWidgetService */.v),
    codeActionController_param(9, instantiation/* IInstantiationService */.TG)
], CodeActionController);


/***/ }),

/***/ 60936:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jt: function() { return /* binding */ CodeActionModel; },
/* harmony export */   fj: function() { return /* binding */ SUPPORTED_CODE_ACTIONS; }
/* harmony export */ });
/* unused harmony export CodeActionsState */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50847);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _base_common_resources_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8506);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81043);
/* harmony import */ var _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99871);
/* harmony import */ var _common_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18019);
/* harmony import */ var _codeAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68081);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _CodeActionModel_isDisposed;









const SUPPORTED_CODE_ACTIONS = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__/* .RawContextKey */ .uy('supportedCodeAction', '');
class CodeActionOracle extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(_editor, _markerService, _signalChange, _delay = 250) {
        super();
        this._editor = _editor;
        this._markerService = _markerService;
        this._signalChange = _signalChange;
        this._delay = _delay;
        this._autoTriggerTimer = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .TimeoutTimer */ ._F());
        this._register(this._markerService.onMarkerChanged(e => this._onMarkerChanges(e)));
        this._register(this._editor.onDidChangeCursorPosition(() => this._tryAutoTrigger()));
    }
    trigger(trigger) {
        const selection = this._getRangeOfSelectionUnlessWhitespaceEnclosed(trigger);
        this._signalChange(selection ? { trigger, selection } : undefined);
    }
    _onMarkerChanges(resources) {
        const model = this._editor.getModel();
        if (model && resources.some(resource => (0,_base_common_resources_js__WEBPACK_IMPORTED_MODULE_4__/* .isEqual */ .Xy)(resource, model.uri))) {
            this._tryAutoTrigger();
        }
    }
    _tryAutoTrigger() {
        this._autoTriggerTimer.cancelAndSet(() => {
            this.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: _common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .CodeActionTriggerSource */ .aQ.Default });
        }, this._delay);
    }
    _getRangeOfSelectionUnlessWhitespaceEnclosed(trigger) {
        if (!this._editor.hasModel()) {
            return undefined;
        }
        const model = this._editor.getModel();
        const selection = this._editor.getSelection();
        if (selection.isEmpty() && trigger.type === 2 /* CodeActionTriggerType.Auto */) {
            const { lineNumber, column } = selection.getPosition();
            const line = model.getLineContent(lineNumber);
            if (line.length === 0) {
                // empty line
                return undefined;
            }
            else if (column === 1) {
                // look only right
                if (/\s/.test(line[0])) {
                    return undefined;
                }
            }
            else if (column === model.getLineMaxColumn(lineNumber)) {
                // look only left
                if (/\s/.test(line[line.length - 1])) {
                    return undefined;
                }
            }
            else {
                // look left and right
                if (/\s/.test(line[column - 2]) && /\s/.test(line[column - 1])) {
                    return undefined;
                }
            }
        }
        return selection;
    }
}
var CodeActionsState;
(function (CodeActionsState) {
    CodeActionsState.Empty = { type: 0 /* Type.Empty */ };
    class Triggered {
        constructor(trigger, position, _cancellablePromise) {
            this.trigger = trigger;
            this.position = position;
            this._cancellablePromise = _cancellablePromise;
            this.type = 1 /* Type.Triggered */;
            this.actions = _cancellablePromise.catch((e) => {
                if ((0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .isCancellationError */ .n2)(e)) {
                    return emptyCodeActionSet;
                }
                throw e;
            });
        }
        cancel() {
            this._cancellablePromise.cancel();
        }
    }
    CodeActionsState.Triggered = Triggered;
})(CodeActionsState || (CodeActionsState = {}));
const emptyCodeActionSet = Object.freeze({
    allActions: [],
    validActions: [],
    dispose: () => { },
    documentation: [],
    hasAutoFix: false
});
class CodeActionModel extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(_editor, _registry, _markerService, contextKeyService, _progressService) {
        super();
        this._editor = _editor;
        this._registry = _registry;
        this._markerService = _markerService;
        this._progressService = _progressService;
        this._codeActionOracle = this._register(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .MutableDisposable */ .XK());
        this._state = CodeActionsState.Empty;
        this._onDidChangeState = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5());
        this.onDidChangeState = this._onDidChangeState.event;
        _CodeActionModel_isDisposed.set(this, false);
        this._supportedCodeActions = SUPPORTED_CODE_ACTIONS.bindTo(contextKeyService);
        this._register(this._editor.onDidChangeModel(() => this._update()));
        this._register(this._editor.onDidChangeModelLanguage(() => this._update()));
        this._register(this._registry.onDidChange(() => this._update()));
        this._update();
    }
    dispose() {
        if (__classPrivateFieldGet(this, _CodeActionModel_isDisposed, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _CodeActionModel_isDisposed, true, "f");
        super.dispose();
        this.setState(CodeActionsState.Empty, true);
    }
    _update() {
        if (__classPrivateFieldGet(this, _CodeActionModel_isDisposed, "f")) {
            return;
        }
        this._codeActionOracle.value = undefined;
        this.setState(CodeActionsState.Empty);
        const model = this._editor.getModel();
        if (model
            && this._registry.has(model)
            && !this._editor.getOption(88 /* EditorOption.readOnly */)) {
            const supportedActions = this._registry.all(model).flatMap(provider => { var _a; return (_a = provider.providedCodeActionKinds) !== null && _a !== void 0 ? _a : []; });
            this._supportedCodeActions.set(supportedActions.join(' '));
            this._codeActionOracle.value = new CodeActionOracle(this._editor, this._markerService, trigger => {
                var _a;
                if (!trigger) {
                    this.setState(CodeActionsState.Empty);
                    return;
                }
                const actions = (0,_base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .createCancelablePromise */ .PG)(token => (0,_codeAction_js__WEBPACK_IMPORTED_MODULE_8__/* .getCodeActions */ .aI)(this._registry, model, trigger.selection, trigger.trigger, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_6__/* .Progress */ .Ex.None, token));
                if (trigger.trigger.type === 1 /* CodeActionTriggerType.Invoke */) {
                    (_a = this._progressService) === null || _a === void 0 ? void 0 : _a.showWhile(actions, 250);
                }
                this.setState(new CodeActionsState.Triggered(trigger.trigger, trigger.selection.getStartPosition(), actions));
            }, undefined);
            this._codeActionOracle.value.trigger({ type: 2 /* CodeActionTriggerType.Auto */, triggerAction: _common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .CodeActionTriggerSource */ .aQ.Default });
        }
        else {
            this._supportedCodeActions.reset();
        }
    }
    trigger(trigger) {
        var _a;
        (_a = this._codeActionOracle.value) === null || _a === void 0 ? void 0 : _a.trigger(trigger);
    }
    setState(newState, skipNotify) {
        if (newState === this._state) {
            return;
        }
        // Cancel old request
        if (this._state.type === 1 /* CodeActionsState.Type.Triggered */) {
            this._state.cancel();
        }
        this._state = newState;
        if (!skipNotify && !__classPrivateFieldGet(this, _CodeActionModel_isDisposed, "f")) {
            this._onDidChangeState.fire(newState);
        }
    }
}
_CodeActionModel_isDisposed = new WeakMap();


/***/ }),

/***/ 53628:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: function() { return /* binding */ LightBulbWidget; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(58122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(79873);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(67152);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77044);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(21114);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(11542);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(70204);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.css
var lightBulbWidget = __webpack_require__(64097);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(lightBulbWidget/* default */.Z, options);




       /* harmony default export */ var browser_lightBulbWidget = (lightBulbWidget/* default */.Z && lightBulbWidget/* default */.Z.locals ? lightBulbWidget/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/utils.js
var utils = __webpack_require__(64299);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeAction.js
var codeAction = __webpack_require__(68081);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/lightBulbWidget.js
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












var LightBulbState;
(function (LightBulbState) {
    LightBulbState.Hidden = { type: 0 /* Type.Hidden */ };
    class Showing {
        constructor(actions, trigger, editorPosition, widgetPosition) {
            this.actions = actions;
            this.trigger = trigger;
            this.editorPosition = editorPosition;
            this.widgetPosition = widgetPosition;
            this.type = 1 /* Type.Showing */;
        }
    }
    LightBulbState.Showing = Showing;
})(LightBulbState || (LightBulbState = {}));
let LightBulbWidget = class LightBulbWidget extends lifecycle/* Disposable */.JT {
    constructor(_editor, keybindingService) {
        super();
        this._editor = _editor;
        this._onClick = this._register(new common_event/* Emitter */.Q5());
        this.onClick = this._onClick.event;
        this._state = LightBulbState.Hidden;
        this._domNode = dom.$('div.lightBulbWidget');
        this._register(touch/* Gesture */.o.ignoreTarget(this._domNode));
        this._editor.addContentWidget(this);
        this._register(this._editor.onDidChangeModelContent(_ => {
            // cancel when the line in question has been removed
            const editorModel = this._editor.getModel();
            if (this.state.type !== 1 /* LightBulbState.Type.Showing */ || !editorModel || this.state.editorPosition.lineNumber >= editorModel.getLineCount()) {
                this.hide();
            }
        }));
        this._register(dom/* addStandardDisposableGenericMouseDownListener */.GQ(this._domNode, e => {
            if (this.state.type !== 1 /* LightBulbState.Type.Showing */) {
                return;
            }
            // Make sure that focus / cursor location is not lost when clicking widget icon
            this._editor.focus();
            e.preventDefault();
            // a bit of extra work to make sure the menu
            // doesn't cover the line-text
            const { top, height } = dom/* getDomNodePagePosition */.i(this._domNode);
            const lineHeight = this._editor.getOption(64 /* EditorOption.lineHeight */);
            let pad = Math.floor(lineHeight / 3);
            if (this.state.widgetPosition.position !== null && this.state.widgetPosition.position.lineNumber < this.state.editorPosition.lineNumber) {
                pad += lineHeight;
            }
            this._onClick.fire({
                x: e.posx,
                y: top + height + pad,
                actions: this.state.actions,
                trigger: this.state.trigger,
            });
        }));
        this._register(dom/* addDisposableListener */.nm(this._domNode, 'mouseenter', (e) => {
            if ((e.buttons & 1) !== 1) {
                return;
            }
            // mouse enters lightbulb while the primary/left button
            // is being pressed -> hide the lightbulb
            this.hide();
        }));
        this._register(this._editor.onDidChangeConfiguration(e => {
            // hide when told to do so
            if (e.hasChanged(62 /* EditorOption.lightbulb */) && !this._editor.getOption(62 /* EditorOption.lightbulb */).enabled) {
                this.hide();
            }
        }));
        this._register(common_event/* Event */.ju.runAndSubscribe(keybindingService.onDidUpdateKeybindings, () => {
            var _a, _b;
            this._preferredKbLabel = (0,types/* withNullAsUndefined */.f6)((_a = keybindingService.lookupKeybinding(codeAction/* autoFixCommandId */.pZ)) === null || _a === void 0 ? void 0 : _a.getLabel());
            this._quickFixKbLabel = (0,types/* withNullAsUndefined */.f6)((_b = keybindingService.lookupKeybinding(codeAction/* quickFixCommandId */.cz)) === null || _b === void 0 ? void 0 : _b.getLabel());
            this._updateLightBulbTitleAndIcon();
        }));
    }
    dispose() {
        super.dispose();
        this._editor.removeContentWidget(this);
    }
    getId() {
        return 'LightBulbWidget';
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._state.type === 1 /* LightBulbState.Type.Showing */ ? this._state.widgetPosition : null;
    }
    update(actions, trigger, atPosition) {
        if (actions.validActions.length <= 0) {
            return this.hide();
        }
        const options = this._editor.getOptions();
        if (!options.get(62 /* EditorOption.lightbulb */).enabled) {
            return this.hide();
        }
        const model = this._editor.getModel();
        if (!model) {
            return this.hide();
        }
        const { lineNumber, column } = model.validatePosition(atPosition);
        const tabSize = model.getOptions().tabSize;
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        const lineContent = model.getLineContent(lineNumber);
        const indent = (0,utils/* computeIndentLevel */.q)(lineContent, tabSize);
        const lineHasSpace = fontInfo.spaceWidth * indent > 22;
        const isFolded = (lineNumber) => {
            return lineNumber > 2 && this._editor.getTopForLineNumber(lineNumber) === this._editor.getTopForLineNumber(lineNumber - 1);
        };
        let effectiveLineNumber = lineNumber;
        if (!lineHasSpace) {
            if (lineNumber > 1 && !isFolded(lineNumber - 1)) {
                effectiveLineNumber -= 1;
            }
            else if (!isFolded(lineNumber + 1)) {
                effectiveLineNumber += 1;
            }
            else if (column * fontInfo.spaceWidth < 22) {
                // cannot show lightbulb above/below and showing
                // it inline would overlay the cursor...
                return this.hide();
            }
        }
        this.state = new LightBulbState.Showing(actions, trigger, atPosition, {
            position: { lineNumber: effectiveLineNumber, column: 1 },
            preference: LightBulbWidget._posPref
        });
        this._editor.layoutContentWidget(this);
    }
    hide() {
        if (this.state === LightBulbState.Hidden) {
            return;
        }
        this.state = LightBulbState.Hidden;
        this._editor.layoutContentWidget(this);
    }
    get state() { return this._state; }
    set state(value) {
        this._state = value;
        this._updateLightBulbTitleAndIcon();
    }
    _updateLightBulbTitleAndIcon() {
        if (this.state.type === 1 /* LightBulbState.Type.Showing */ && this.state.actions.hasAutoFix) {
            // update icon
            this._domNode.classList.remove(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.lightBulb));
            this._domNode.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.lightbulbAutofix));
            if (this._preferredKbLabel) {
                this.title = nls/* localize */.NC('preferredcodeActionWithKb', "Show Code Actions. Preferred Quick Fix Available ({0})", this._preferredKbLabel);
                return;
            }
        }
        // update icon
        this._domNode.classList.remove(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.lightbulbAutofix));
        this._domNode.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.lightBulb));
        if (this._quickFixKbLabel) {
            this.title = nls/* localize */.NC('codeActionWithKb', "Show Code Actions ({0})", this._quickFixKbLabel);
        }
        else {
            this.title = nls/* localize */.NC('codeAction', "Show Code Actions");
        }
    }
    set title(value) {
        this._domNode.title = value;
    }
};
LightBulbWidget.ID = 'editor.contrib.lightbulbWidget';
LightBulbWidget._posPref = [0 /* ContentWidgetPositionPreference.EXACT */];
LightBulbWidget = __decorate([
    __param(1, keybinding/* IKeybindingService */.d)
], LightBulbWidget);


/***/ }),

/***/ 18019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EU: function() { return /* binding */ mayIncludeActionsOfKind; },
/* harmony export */   Yl: function() { return /* binding */ filtersAction; },
/* harmony export */   aQ: function() { return /* binding */ CodeActionTriggerSource; },
/* harmony export */   bA: function() { return /* binding */ CodeActionItem; },
/* harmony export */   wZ: function() { return /* binding */ CodeActionCommandArgs; },
/* harmony export */   yN: function() { return /* binding */ CodeActionKind; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
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

class CodeActionKind {
    constructor(value) {
        this.value = value;
    }
    equals(other) {
        return this.value === other.value;
    }
    contains(other) {
        return this.equals(other) || this.value === '' || other.value.startsWith(this.value + CodeActionKind.sep);
    }
    intersects(other) {
        return this.contains(other) || other.contains(this);
    }
    append(part) {
        return new CodeActionKind(this.value + CodeActionKind.sep + part);
    }
}
CodeActionKind.sep = '.';
CodeActionKind.None = new CodeActionKind('@@none@@'); // Special code action that contains nothing
CodeActionKind.Empty = new CodeActionKind('');
CodeActionKind.QuickFix = new CodeActionKind('quickfix');
CodeActionKind.Refactor = new CodeActionKind('refactor');
CodeActionKind.RefactorExtract = CodeActionKind.Refactor.append('extract');
CodeActionKind.RefactorInline = CodeActionKind.Refactor.append('inline');
CodeActionKind.RefactorMove = CodeActionKind.Refactor.append('move');
CodeActionKind.RefactorRewrite = CodeActionKind.Refactor.append('rewrite');
CodeActionKind.Source = new CodeActionKind('source');
CodeActionKind.SourceOrganizeImports = CodeActionKind.Source.append('organizeImports');
CodeActionKind.SourceFixAll = CodeActionKind.Source.append('fixAll');
CodeActionKind.SurroundWith = CodeActionKind.Refactor.append('surround');
var CodeActionTriggerSource;
(function (CodeActionTriggerSource) {
    CodeActionTriggerSource["Refactor"] = "refactor";
    CodeActionTriggerSource["RefactorPreview"] = "refactor preview";
    CodeActionTriggerSource["Lightbulb"] = "lightbulb";
    CodeActionTriggerSource["Default"] = "other (default)";
    CodeActionTriggerSource["SourceAction"] = "source action";
    CodeActionTriggerSource["QuickFix"] = "quick fix action";
    CodeActionTriggerSource["FixAll"] = "fix all";
    CodeActionTriggerSource["OrganizeImports"] = "organize imports";
    CodeActionTriggerSource["AutoFix"] = "auto fix";
    CodeActionTriggerSource["QuickFixHover"] = "quick fix hover window";
    CodeActionTriggerSource["OnSave"] = "save participants";
    CodeActionTriggerSource["ProblemsView"] = "problems view";
})(CodeActionTriggerSource || (CodeActionTriggerSource = {}));
function mayIncludeActionsOfKind(filter, providedKind) {
    // A provided kind may be a subset or superset of our filtered kind.
    if (filter.include && !filter.include.intersects(providedKind)) {
        return false;
    }
    if (filter.excludes) {
        if (filter.excludes.some(exclude => excludesAction(providedKind, exclude, filter.include))) {
            return false;
        }
    }
    // Don't return source actions unless they are explicitly requested
    if (!filter.includeSourceActions && CodeActionKind.Source.contains(providedKind)) {
        return false;
    }
    return true;
}
function filtersAction(filter, action) {
    const actionKind = action.kind ? new CodeActionKind(action.kind) : undefined;
    // Filter out actions by kind
    if (filter.include) {
        if (!actionKind || !filter.include.contains(actionKind)) {
            return false;
        }
    }
    if (filter.excludes) {
        if (actionKind && filter.excludes.some(exclude => excludesAction(actionKind, exclude, filter.include))) {
            return false;
        }
    }
    // Don't return source actions unless they are explicitly requested
    if (!filter.includeSourceActions) {
        if (actionKind && CodeActionKind.Source.contains(actionKind)) {
            return false;
        }
    }
    if (filter.onlyIncludePreferredActions) {
        if (!action.isPreferred) {
            return false;
        }
    }
    return true;
}
function excludesAction(providedKind, exclude, include) {
    if (!exclude.contains(providedKind)) {
        return false;
    }
    if (include && exclude.contains(include)) {
        // The include is more specific, don't filter out
        return false;
    }
    return true;
}
class CodeActionCommandArgs {
    static fromUser(arg, defaults) {
        if (!arg || typeof arg !== 'object') {
            return new CodeActionCommandArgs(defaults.kind, defaults.apply, false);
        }
        return new CodeActionCommandArgs(CodeActionCommandArgs.getKindFromUser(arg, defaults.kind), CodeActionCommandArgs.getApplyFromUser(arg, defaults.apply), CodeActionCommandArgs.getPreferredUser(arg));
    }
    static getApplyFromUser(arg, defaultAutoApply) {
        switch (typeof arg.apply === 'string' ? arg.apply.toLowerCase() : '') {
            case 'first': return "first" /* CodeActionAutoApply.First */;
            case 'never': return "never" /* CodeActionAutoApply.Never */;
            case 'ifsingle': return "ifSingle" /* CodeActionAutoApply.IfSingle */;
            default: return defaultAutoApply;
        }
    }
    static getKindFromUser(arg, defaultKind) {
        return typeof arg.kind === 'string'
            ? new CodeActionKind(arg.kind)
            : defaultKind;
    }
    static getPreferredUser(arg) {
        return typeof arg.preferred === 'boolean'
            ? arg.preferred
            : false;
    }
    constructor(kind, apply, preferred) {
        this.kind = kind;
        this.apply = apply;
        this.preferred = preferred;
    }
}
class CodeActionItem {
    constructor(action, provider) {
        this.action = action;
        this.provider = provider;
    }
    resolve(token) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (((_a = this.provider) === null || _a === void 0 ? void 0 : _a.resolveCodeAction) && !this.action.edit) {
                let action;
                try {
                    action = yield this.provider.resolveCodeAction(this.action, token);
                }
                catch (err) {
                    (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedExternalError */ .Cp)(err);
                }
                if (action) {
                    this.action.edit = action.edit;
                }
            }
            return this;
        });
    }
}


/***/ })

}]);