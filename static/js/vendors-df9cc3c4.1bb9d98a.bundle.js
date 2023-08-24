"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-df9cc3c4"],{

/***/ 13600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .rename-box {\n\tz-index: 100;\n\tcolor: inherit;\n\tborder-radius: 4px;\n}\n\n.monaco-editor .rename-box.preview {\n\tpadding: 4px 4px 0 4px;\n}\n\n.monaco-editor .rename-box .rename-input {\n\tpadding: 3px;\n\tborder-radius: 2px;\n}\n\n.monaco-editor .rename-box .rename-label {\n\tdisplay: none;\n\topacity: .8;\n}\n\n.monaco-editor .rename-box.preview .rename-label {\n\tdisplay: inherit;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 74169:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ AbstractEditorCommandsQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_iconLabels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83123);
/* harmony import */ var _platform_quickinput_browser_commandsQuickAccess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24031);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class AbstractEditorCommandsQuickAccessProvider extends _platform_quickinput_browser_commandsQuickAccess_js__WEBPACK_IMPORTED_MODULE_1__/* .AbstractCommandsQuickAccessProvider */ .Z {
    constructor(options, instantiationService, keybindingService, commandService, telemetryService, dialogService) {
        super(options, instantiationService, keybindingService, commandService, telemetryService, dialogService);
    }
    getCodeEditorCommandPicks() {
        const activeTextEditorControl = this.activeTextEditorControl;
        if (!activeTextEditorControl) {
            return [];
        }
        const editorCommandPicks = [];
        for (const editorAction of activeTextEditorControl.getSupportedActions()) {
            editorCommandPicks.push({
                commandId: editorAction.id,
                commandAlias: editorAction.alias,
                label: (0,_base_common_iconLabels_js__WEBPACK_IMPORTED_MODULE_0__/* .stripIcons */ .x$)(editorAction.label) || editorAction.id,
            });
        }
        return editorCommandPicks;
    }
}


/***/ }),

/***/ 7466:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ AbstractEditorNavigationQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_functional_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58360);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89356);
/* harmony import */ var _browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46561);
/* harmony import */ var _common_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7783);
/* harmony import */ var _common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79402);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26236);
/* harmony import */ var _base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39194);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








/**
 * A reusable quick access provider for the editor with support
 * for adding decorations for navigating in the currently active file
 * (for example "Go to line", "Go to symbol").
 */
class AbstractEditorNavigationQuickAccessProvider {
    constructor(options) {
        this.options = options;
        //#endregion
        //#region Decorations Utils
        this.rangeHighlightDecorationId = undefined;
    }
    //#region Provider methods
    provide(picker, token) {
        var _a;
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        // Apply options if any
        picker.canAcceptInBackground = !!((_a = this.options) === null || _a === void 0 ? void 0 : _a.canAcceptInBackground);
        // Disable filtering & sorting, we control the results
        picker.matchOnLabel = picker.matchOnDescription = picker.matchOnDetail = picker.sortByLabel = false;
        // Provide based on current active editor
        const pickerDisposable = disposables.add(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .MutableDisposable */ .XK());
        pickerDisposable.value = this.doProvide(picker, token);
        // Re-create whenever the active editor changes
        disposables.add(this.onDidActiveTextEditorControlChange(() => {
            // Clear old
            pickerDisposable.value = undefined;
            // Add new
            pickerDisposable.value = this.doProvide(picker, token);
        }));
        return disposables;
    }
    doProvide(picker, token) {
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        // With text control
        const editor = this.activeTextEditorControl;
        if (editor && this.canProvideWithTextEditor(editor)) {
            const context = { editor };
            // Restore any view state if this picker was closed
            // without actually going to a line
            const codeEditor = (0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__/* .getCodeEditor */ .Pi)(editor);
            if (codeEditor) {
                // Remember view state and update it when the cursor position
                // changes even later because it could be that the user has
                // configured quick access to remain open when focus is lost and
                // we always want to restore the current location.
                let lastKnownEditorViewState = (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .withNullAsUndefined */ .f6)(editor.saveViewState());
                disposables.add(codeEditor.onDidChangeCursorPosition(() => {
                    lastKnownEditorViewState = (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .withNullAsUndefined */ .f6)(editor.saveViewState());
                }));
                context.restoreViewState = () => {
                    if (lastKnownEditorViewState && editor === this.activeTextEditorControl) {
                        editor.restoreViewState(lastKnownEditorViewState);
                    }
                };
                disposables.add((0,_base_common_functional_js__WEBPACK_IMPORTED_MODULE_7__/* .once */ .I)(token.onCancellationRequested)(() => { var _a; return (_a = context.restoreViewState) === null || _a === void 0 ? void 0 : _a.call(context); }));
            }
            // Clean up decorations on dispose
            disposables.add((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .toDisposable */ .OF)(() => this.clearDecorations(editor)));
            // Ask subclass for entries
            disposables.add(this.provideWithTextEditor(context, picker, token));
        }
        // Without text control
        else {
            disposables.add(this.provideWithoutTextEditor(picker, token));
        }
        return disposables;
    }
    /**
     * Subclasses to implement if they can operate on the text editor.
     */
    canProvideWithTextEditor(editor) {
        return true;
    }
    gotoLocation({ editor }, options) {
        editor.setSelection(options.range);
        editor.revealRangeInCenter(options.range, 0 /* ScrollType.Smooth */);
        if (!options.preserveFocus) {
            editor.focus();
        }
        const model = editor.getModel();
        if (model && 'getLineContent' in model) {
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_5__/* .status */ .i7)(`${model.getLineContent(options.range.startLineNumber)}`);
        }
    }
    getModel(editor) {
        var _a;
        return (0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__/* .isDiffEditor */ .QI)(editor) ?
            (_a = editor.getModel()) === null || _a === void 0 ? void 0 : _a.modified :
            editor.getModel();
    }
    addDecorations(editor, range) {
        editor.changeDecorations(changeAccessor => {
            // Reset old decorations if any
            const deleteDecorations = [];
            if (this.rangeHighlightDecorationId) {
                deleteDecorations.push(this.rangeHighlightDecorationId.overviewRulerDecorationId);
                deleteDecorations.push(this.rangeHighlightDecorationId.rangeHighlightId);
                this.rangeHighlightDecorationId = undefined;
            }
            // Add new decorations for the range
            const newDecorations = [
                // highlight the entire line on the range
                {
                    range,
                    options: {
                        description: 'quick-access-range-highlight',
                        className: 'rangeHighlight',
                        isWholeLine: true
                    }
                },
                // also add overview ruler highlight
                {
                    range,
                    options: {
                        description: 'quick-access-range-highlight-overview',
                        overviewRuler: {
                            color: (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_4__/* .themeColorFromId */ .EN)(_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .overviewRulerRangeHighlight */ .m9),
                            position: _common_model_js__WEBPACK_IMPORTED_MODULE_2__/* .OverviewRulerLane */ .sh.Full
                        }
                    }
                }
            ];
            const [rangeHighlightId, overviewRulerDecorationId] = changeAccessor.deltaDecorations(deleteDecorations, newDecorations);
            this.rangeHighlightDecorationId = { rangeHighlightId, overviewRulerDecorationId };
        });
    }
    clearDecorations(editor) {
        const rangeHighlightDecorationId = this.rangeHighlightDecorationId;
        if (rangeHighlightDecorationId) {
            editor.changeDecorations(changeAccessor => {
                changeAccessor.deltaDecorations([
                    rangeHighlightDecorationId.overviewRulerDecorationId,
                    rangeHighlightDecorationId.rangeHighlightId
                ], []);
            });
            this.rangeHighlightDecorationId = undefined;
        }
    }
}


/***/ }),

/***/ 77014:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ AbstractGotoLineQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46561);
/* harmony import */ var _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7466);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80757);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class AbstractGotoLineQuickAccessProvider extends _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_2__/* .AbstractEditorNavigationQuickAccessProvider */ .X {
    constructor() {
        super({ canAcceptInBackground: true });
    }
    provideWithoutTextEditor(picker) {
        const label = (0,_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC)('cannotRunGotoLine', "Open a text editor first to go to a line.");
        picker.items = [{ label }];
        picker.ariaLabel = label;
        return _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT.None;
    }
    provideWithTextEditor(context, picker, token) {
        const editor = context.editor;
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        // Goto line once picked
        disposables.add(picker.onDidAccept(event => {
            const [item] = picker.selectedItems;
            if (item) {
                if (!this.isValidLineNumber(editor, item.lineNumber)) {
                    return;
                }
                this.gotoLocation(context, { range: this.toRange(item.lineNumber, item.column), keyMods: picker.keyMods, preserveFocus: event.inBackground });
                if (!event.inBackground) {
                    picker.hide();
                }
            }
        }));
        // React to picker changes
        const updatePickerAndEditor = () => {
            const position = this.parsePosition(editor, picker.value.trim().substr(AbstractGotoLineQuickAccessProvider.PREFIX.length));
            const label = this.getPickLabel(editor, position.lineNumber, position.column);
            // Picker
            picker.items = [{
                    lineNumber: position.lineNumber,
                    column: position.column,
                    label
                }];
            // ARIA Label
            picker.ariaLabel = label;
            // Clear decorations for invalid range
            if (!this.isValidLineNumber(editor, position.lineNumber)) {
                this.clearDecorations(editor);
                return;
            }
            // Reveal
            const range = this.toRange(position.lineNumber, position.column);
            editor.revealRangeInCenter(range, 0 /* ScrollType.Smooth */);
            // Decorate
            this.addDecorations(editor, range);
        };
        updatePickerAndEditor();
        disposables.add(picker.onDidChangeValue(() => updatePickerAndEditor()));
        // Adjust line number visibility as needed
        const codeEditor = (0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__/* .getCodeEditor */ .Pi)(editor);
        if (codeEditor) {
            const options = codeEditor.getOptions();
            const lineNumbers = options.get(66 /* EditorOption.lineNumbers */);
            if (lineNumbers.renderType === 2 /* RenderLineNumbersType.Relative */) {
                codeEditor.updateOptions({ lineNumbers: 'on' });
                disposables.add((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .toDisposable */ .OF)(() => codeEditor.updateOptions({ lineNumbers: 'relative' })));
            }
        }
        return disposables;
    }
    toRange(lineNumber = 1, column = 1) {
        return {
            startLineNumber: lineNumber,
            startColumn: column,
            endLineNumber: lineNumber,
            endColumn: column
        };
    }
    parsePosition(editor, value) {
        // Support line-col formats of `line,col`, `line:col`, `line#col`
        const numbers = value.split(/,|:|#/).map(part => parseInt(part, 10)).filter(part => !isNaN(part));
        const endLine = this.lineCount(editor) + 1;
        return {
            lineNumber: numbers[0] > 0 ? numbers[0] : endLine + numbers[0],
            column: numbers[1]
        };
    }
    getPickLabel(editor, lineNumber, column) {
        // Location valid: indicate this as picker label
        if (this.isValidLineNumber(editor, lineNumber)) {
            if (this.isValidColumn(editor, lineNumber, column)) {
                return (0,_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC)('gotoLineColumnLabel', "Go to line {0} and character {1}.", lineNumber, column);
            }
            return (0,_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC)('gotoLineLabel', "Go to line {0}.", lineNumber);
        }
        // Location invalid: show generic label
        const position = editor.getPosition() || { lineNumber: 1, column: 1 };
        const lineCount = this.lineCount(editor);
        if (lineCount > 1) {
            return (0,_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC)('gotoLineLabelEmptyWithLimit', "Current Line: {0}, Character: {1}. Type a line number between 1 and {2} to navigate to.", position.lineNumber, position.column, lineCount);
        }
        return (0,_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC)('gotoLineLabelEmpty', "Current Line: {0}, Character: {1}. Type a line number to navigate to.", position.lineNumber, position.column);
    }
    isValidLineNumber(editor, lineNumber) {
        if (!lineNumber || typeof lineNumber !== 'number') {
            return false;
        }
        return lineNumber > 0 && lineNumber <= this.lineCount(editor);
    }
    isValidColumn(editor, lineNumber, column) {
        if (!column || typeof column !== 'number') {
            return false;
        }
        const model = this.getModel(editor);
        if (!model) {
            return false;
        }
        const positionCandidate = { lineNumber, column };
        return model.validatePosition(positionCandidate).equals(positionCandidate);
    }
    lineCount(editor) {
        var _a, _b;
        return (_b = (_a = this.getModel(editor)) === null || _a === void 0 ? void 0 : _a.getLineCount()) !== null && _b !== void 0 ? _b : 0;
    }
}
AbstractGotoLineQuickAccessProvider.PREFIX = ':';


/***/ }),

/***/ 54832:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ AbstractGotoSymbolQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69058);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98764);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13113);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50077);
/* harmony import */ var _base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44673);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26794);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70625);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3981);
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34882);
/* harmony import */ var _documentSymbols_browser_outlineModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36857);
/* harmony import */ var _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7466);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80757);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6216);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25850);
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














let AbstractGotoSymbolQuickAccessProvider = class AbstractGotoSymbolQuickAccessProvider extends _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_9__/* .AbstractEditorNavigationQuickAccessProvider */ .X {
    constructor(_languageFeaturesService, _outlineModelService, options = Object.create(null)) {
        super(options);
        this._languageFeaturesService = _languageFeaturesService;
        this._outlineModelService = _outlineModelService;
        this.options = options;
        this.options.canAcceptInBackground = true;
    }
    provideWithoutTextEditor(picker) {
        this.provideLabelPick(picker, (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('cannotRunGotoSymbolWithoutEditor', "To go to a symbol, first open a text editor with symbol information."));
        return _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .Disposable */ .JT.None;
    }
    provideWithTextEditor(context, picker, token) {
        const editor = context.editor;
        const model = this.getModel(editor);
        if (!model) {
            return _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .Disposable */ .JT.None;
        }
        // Provide symbols from model if available in registry
        if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
            return this.doProvideWithEditorSymbols(context, model, picker, token);
        }
        // Otherwise show an entry for a model without registry
        // But give a chance to resolve the symbols at a later
        // point if possible
        return this.doProvideWithoutEditorSymbols(context, model, picker, token);
    }
    doProvideWithoutEditorSymbols(context, model, picker, token) {
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .DisposableStore */ .SL();
        // Generic pick for not having any symbol information
        this.provideLabelPick(picker, (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('cannotRunGotoSymbolWithoutSymbolProvider', "The active text editor does not provide symbol information."));
        // Wait for changes to the registry and see if eventually
        // we do get symbols. This can happen if the picker is opened
        // very early after the model has loaded but before the
        // language registry is ready.
        // https://github.com/microsoft/vscode/issues/70607
        (() => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.waitForLanguageSymbolRegistry(model, disposables);
            if (!result || token.isCancellationRequested) {
                return;
            }
            disposables.add(this.doProvideWithEditorSymbols(context, model, picker, token));
        }))();
        return disposables;
    }
    provideLabelPick(picker, label) {
        picker.items = [{ label, index: 0, kind: 14 /* SymbolKind.String */ }];
        picker.ariaLabel = label;
    }
    waitForLanguageSymbolRegistry(model, disposables) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
                return true;
            }
            const symbolProviderRegistryPromise = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .DeferredPromise */ .CR();
            // Resolve promise when registry knows model
            const symbolProviderListener = disposables.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => {
                if (this._languageFeaturesService.documentSymbolProvider.has(model)) {
                    symbolProviderListener.dispose();
                    symbolProviderRegistryPromise.complete(true);
                }
            }));
            // Resolve promise when we get disposed too
            disposables.add((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .toDisposable */ .OF)(() => symbolProviderRegistryPromise.complete(false)));
            return symbolProviderRegistryPromise.p;
        });
    }
    doProvideWithEditorSymbols(context, model, picker, token) {
        var _a;
        const editor = context.editor;
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .DisposableStore */ .SL();
        // Goto symbol once picked
        disposables.add(picker.onDidAccept(event => {
            const [item] = picker.selectedItems;
            if (item && item.range) {
                this.gotoLocation(context, { range: item.range.selection, keyMods: picker.keyMods, preserveFocus: event.inBackground });
                if (!event.inBackground) {
                    picker.hide();
                }
            }
        }));
        // Goto symbol side by side if enabled
        disposables.add(picker.onDidTriggerItemButton(({ item }) => {
            if (item && item.range) {
                this.gotoLocation(context, { range: item.range.selection, keyMods: picker.keyMods, forceSideBySide: true });
                picker.hide();
            }
        }));
        // Resolve symbols from document once and reuse this
        // request for all filtering and typing then on
        const symbolsPromise = this.getDocumentSymbols(model, token);
        // Set initial picks and update on type
        let picksCts = undefined;
        const updatePickerItems = (positionToEnclose) => __awaiter(this, void 0, void 0, function* () {
            // Cancel any previous ask for picks and busy
            picksCts === null || picksCts === void 0 ? void 0 : picksCts.dispose(true);
            picker.busy = false;
            // Create new cancellation source for this run
            picksCts = new _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationTokenSource */ .A(token);
            // Collect symbol picks
            picker.busy = true;
            try {
                const query = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .prepareQuery */ .AO)(picker.value.substr(AbstractGotoSymbolQuickAccessProvider.PREFIX.length).trim());
                const items = yield this.doGetSymbolPicks(symbolsPromise, query, undefined, picksCts.token);
                if (token.isCancellationRequested) {
                    return;
                }
                if (items.length > 0) {
                    picker.items = items;
                    if (positionToEnclose && query.original.length === 0) {
                        const candidate = (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_12__/* .findLast */ .dF)(items, item => Boolean(item.type !== 'separator' && item.range && _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.containsPosition(item.range.decoration, positionToEnclose)));
                        if (candidate) {
                            picker.activeItems = [candidate];
                        }
                    }
                }
                else {
                    if (query.original.length > 0) {
                        this.provideLabelPick(picker, (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('noMatchingSymbolResults', "No matching editor symbols"));
                    }
                    else {
                        this.provideLabelPick(picker, (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('noSymbolResults', "No editor symbols"));
                    }
                }
            }
            finally {
                if (!token.isCancellationRequested) {
                    picker.busy = false;
                }
            }
        });
        disposables.add(picker.onDidChangeValue(() => updatePickerItems(undefined)));
        updatePickerItems((_a = editor.getSelection()) === null || _a === void 0 ? void 0 : _a.getPosition());
        // Reveal and decorate when active item changes
        disposables.add(picker.onDidChangeActive(() => {
            const [item] = picker.activeItems;
            if (item && item.range) {
                // Reveal
                editor.revealRangeInCenter(item.range.selection, 0 /* ScrollType.Smooth */);
                // Decorate
                this.addDecorations(editor, item.range.decoration);
            }
        }));
        return disposables;
    }
    doGetSymbolPicks(symbolsPromise, query, options, token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const symbols = yield symbolsPromise;
            if (token.isCancellationRequested) {
                return [];
            }
            const filterBySymbolKind = query.original.indexOf(AbstractGotoSymbolQuickAccessProvider.SCOPE_PREFIX) === 0;
            const filterPos = filterBySymbolKind ? 1 : 0;
            // Split between symbol and container query
            let symbolQuery;
            let containerQuery;
            if (query.values && query.values.length > 1) {
                symbolQuery = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .pieceToQuery */ .Ic)(query.values[0]); // symbol: only match on first part
                containerQuery = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .pieceToQuery */ .Ic)(query.values.slice(1)); // container: match on all but first parts
            }
            else {
                symbolQuery = query;
            }
            // Convert to symbol picks and apply filtering
            let buttons;
            const openSideBySideDirection = (_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.openSideBySideDirection) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (openSideBySideDirection) {
                buttons = [{
                        iconClass: openSideBySideDirection === 'right' ? _base_common_themables_js__WEBPACK_IMPORTED_MODULE_3__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__/* .Codicon */ .l.splitHorizontal) : _base_common_themables_js__WEBPACK_IMPORTED_MODULE_3__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__/* .Codicon */ .l.splitVertical),
                        tooltip: openSideBySideDirection === 'right' ? (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('openToSide', "Open to the Side") : (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('openToBottom', "Open to the Bottom")
                    }];
            }
            const filteredSymbolPicks = [];
            for (let index = 0; index < symbols.length; index++) {
                const symbol = symbols[index];
                const symbolLabel = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_6__/* .trim */ .fy)(symbol.name);
                const symbolLabelWithIcon = `$(${_common_languages_js__WEBPACK_IMPORTED_MODULE_7__/* .SymbolKinds */ .uZ.toIcon(symbol.kind).id}) ${symbolLabel}`;
                const symbolLabelIconOffset = symbolLabelWithIcon.length - symbolLabel.length;
                let containerLabel = symbol.containerName;
                if (options === null || options === void 0 ? void 0 : options.extraContainerLabel) {
                    if (containerLabel) {
                        containerLabel = `${options.extraContainerLabel} • ${containerLabel}`;
                    }
                    else {
                        containerLabel = options.extraContainerLabel;
                    }
                }
                let symbolScore = undefined;
                let symbolMatches = undefined;
                let containerScore = undefined;
                let containerMatches = undefined;
                if (query.original.length > filterPos) {
                    // First: try to score on the entire query, it is possible that
                    // the symbol matches perfectly (e.g. searching for "change log"
                    // can be a match on a markdown symbol "change log"). In that
                    // case we want to skip the container query altogether.
                    let skipContainerQuery = false;
                    if (symbolQuery !== query) {
                        [symbolScore, symbolMatches] = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .scoreFuzzy2 */ .mt)(symbolLabelWithIcon, Object.assign(Object.assign({}, query), { values: undefined /* disable multi-query support */ }), filterPos, symbolLabelIconOffset);
                        if (typeof symbolScore === 'number') {
                            skipContainerQuery = true; // since we consumed the query, skip any container matching
                        }
                    }
                    // Otherwise: score on the symbol query and match on the container later
                    if (typeof symbolScore !== 'number') {
                        [symbolScore, symbolMatches] = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .scoreFuzzy2 */ .mt)(symbolLabelWithIcon, symbolQuery, filterPos, symbolLabelIconOffset);
                        if (typeof symbolScore !== 'number') {
                            continue;
                        }
                    }
                    // Score by container if specified
                    if (!skipContainerQuery && containerQuery) {
                        if (containerLabel && containerQuery.original.length > 0) {
                            [containerScore, containerMatches] = (0,_base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__/* .scoreFuzzy2 */ .mt)(containerLabel, containerQuery);
                        }
                        if (typeof containerScore !== 'number') {
                            continue;
                        }
                        if (typeof symbolScore === 'number') {
                            symbolScore += containerScore; // boost symbolScore by containerScore
                        }
                    }
                }
                const deprecated = symbol.tags && symbol.tags.indexOf(1 /* SymbolTag.Deprecated */) >= 0;
                filteredSymbolPicks.push({
                    index,
                    kind: symbol.kind,
                    score: symbolScore,
                    label: symbolLabelWithIcon,
                    ariaLabel: (0,_common_languages_js__WEBPACK_IMPORTED_MODULE_7__/* .getAriaLabelForSymbol */ .R4)(symbol.name, symbol.kind),
                    description: containerLabel,
                    highlights: deprecated ? undefined : {
                        label: symbolMatches,
                        description: containerMatches
                    },
                    range: {
                        selection: _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.collapseToStart(symbol.selectionRange),
                        decoration: symbol.range
                    },
                    strikethrough: deprecated,
                    buttons
                });
            }
            // Sort by score
            const sortedFilteredSymbolPicks = filteredSymbolPicks.sort((symbolA, symbolB) => filterBySymbolKind ?
                this.compareByKindAndScore(symbolA, symbolB) :
                this.compareByScore(symbolA, symbolB));
            // Add separator for types
            // - @  only total number of symbols
            // - @: grouped by symbol kind
            let symbolPicks = [];
            if (filterBySymbolKind) {
                let lastSymbolKind = undefined;
                let lastSeparator = undefined;
                let lastSymbolKindCounter = 0;
                function updateLastSeparatorLabel() {
                    if (lastSeparator && typeof lastSymbolKind === 'number' && lastSymbolKindCounter > 0) {
                        lastSeparator.label = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_6__/* .format */ .WU)(NLS_SYMBOL_KIND_CACHE[lastSymbolKind] || FALLBACK_NLS_SYMBOL_KIND, lastSymbolKindCounter);
                    }
                }
                for (const symbolPick of sortedFilteredSymbolPicks) {
                    // Found new kind
                    if (lastSymbolKind !== symbolPick.kind) {
                        // Update last separator with number of symbols we found for kind
                        updateLastSeparatorLabel();
                        lastSymbolKind = symbolPick.kind;
                        lastSymbolKindCounter = 1;
                        // Add new separator for new kind
                        lastSeparator = { type: 'separator' };
                        symbolPicks.push(lastSeparator);
                    }
                    // Existing kind, keep counting
                    else {
                        lastSymbolKindCounter++;
                    }
                    // Add to final result
                    symbolPicks.push(symbolPick);
                }
                // Update last separator with number of symbols we found for kind
                updateLastSeparatorLabel();
            }
            else if (sortedFilteredSymbolPicks.length > 0) {
                symbolPicks = [
                    { label: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('symbols', "symbols ({0})", filteredSymbolPicks.length), type: 'separator' },
                    ...sortedFilteredSymbolPicks
                ];
            }
            return symbolPicks;
        });
    }
    compareByScore(symbolA, symbolB) {
        if (typeof symbolA.score !== 'number' && typeof symbolB.score === 'number') {
            return 1;
        }
        else if (typeof symbolA.score === 'number' && typeof symbolB.score !== 'number') {
            return -1;
        }
        if (typeof symbolA.score === 'number' && typeof symbolB.score === 'number') {
            if (symbolA.score > symbolB.score) {
                return -1;
            }
            else if (symbolA.score < symbolB.score) {
                return 1;
            }
        }
        if (symbolA.index < symbolB.index) {
            return -1;
        }
        else if (symbolA.index > symbolB.index) {
            return 1;
        }
        return 0;
    }
    compareByKindAndScore(symbolA, symbolB) {
        const kindA = NLS_SYMBOL_KIND_CACHE[symbolA.kind] || FALLBACK_NLS_SYMBOL_KIND;
        const kindB = NLS_SYMBOL_KIND_CACHE[symbolB.kind] || FALLBACK_NLS_SYMBOL_KIND;
        // Sort by type first if scoped search
        const result = kindA.localeCompare(kindB);
        if (result === 0) {
            return this.compareByScore(symbolA, symbolB);
        }
        return result;
    }
    getDocumentSymbols(document, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = yield this._outlineModelService.getOrCreate(document, token);
            return token.isCancellationRequested ? [] : model.asListOfDocumentSymbols();
        });
    }
};
AbstractGotoSymbolQuickAccessProvider.PREFIX = '@';
AbstractGotoSymbolQuickAccessProvider.SCOPE_PREFIX = ':';
AbstractGotoSymbolQuickAccessProvider.PREFIX_BY_CATEGORY = `${AbstractGotoSymbolQuickAccessProvider.PREFIX}${AbstractGotoSymbolQuickAccessProvider.SCOPE_PREFIX}`;
AbstractGotoSymbolQuickAccessProvider = __decorate([
    __param(0, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__/* .ILanguageFeaturesService */ .p),
    __param(1, _documentSymbols_browser_outlineModel_js__WEBPACK_IMPORTED_MODULE_8__/* .IOutlineModelService */ .Je)
], AbstractGotoSymbolQuickAccessProvider);

// #region NLS Helpers
const FALLBACK_NLS_SYMBOL_KIND = (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('property', "properties ({0})");
const NLS_SYMBOL_KIND_CACHE = {
    [5 /* SymbolKind.Method */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('method', "methods ({0})"),
    [11 /* SymbolKind.Function */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('function', "functions ({0})"),
    [8 /* SymbolKind.Constructor */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('_constructor', "constructors ({0})"),
    [12 /* SymbolKind.Variable */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('variable', "variables ({0})"),
    [4 /* SymbolKind.Class */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('class', "classes ({0})"),
    [22 /* SymbolKind.Struct */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('struct', "structs ({0})"),
    [23 /* SymbolKind.Event */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('event', "events ({0})"),
    [24 /* SymbolKind.Operator */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('operator', "operators ({0})"),
    [10 /* SymbolKind.Interface */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('interface', "interfaces ({0})"),
    [2 /* SymbolKind.Namespace */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('namespace', "namespaces ({0})"),
    [3 /* SymbolKind.Package */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('package', "packages ({0})"),
    [25 /* SymbolKind.TypeParameter */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('typeParameter', "type parameters ({0})"),
    [1 /* SymbolKind.Module */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('modules', "modules ({0})"),
    [6 /* SymbolKind.Property */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('property', "properties ({0})"),
    [9 /* SymbolKind.Enum */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('enum', "enumerations ({0})"),
    [21 /* SymbolKind.EnumMember */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('enumMember', "enumeration members ({0})"),
    [14 /* SymbolKind.String */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('string', "strings ({0})"),
    [0 /* SymbolKind.File */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('file', "files ({0})"),
    [17 /* SymbolKind.Array */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('array', "arrays ({0})"),
    [15 /* SymbolKind.Number */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('number', "numbers ({0})"),
    [16 /* SymbolKind.Boolean */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('boolean', "booleans ({0})"),
    [18 /* SymbolKind.Object */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('object', "objects ({0})"),
    [19 /* SymbolKind.Key */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('key', "keys ({0})"),
    [7 /* SymbolKind.Field */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('field', "fields ({0})"),
    [13 /* SymbolKind.Constant */]: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('constant', "constants ({0})")
};
//#endregion


/***/ }),

/***/ 21996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ReadOnlyMessageController */
/* harmony import */ var _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52610);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79959);
/* harmony import */ var _message_browser_messageController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79905);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80757);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class ReadOnlyMessageController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(editor) {
        super();
        this.editor = editor;
        this._register(this.editor.onDidAttemptReadOnlyEdit(() => this._onDidAttemptReadOnlyEdit()));
    }
    _onDidAttemptReadOnlyEdit() {
        const messageController = _message_browser_messageController_js__WEBPACK_IMPORTED_MODULE_3__/* .MessageController */ .O.get(this.editor);
        if (messageController && this.editor.hasModel()) {
            let message = this.editor.getOptions().get(90 /* EditorOption.readOnlyMessage */);
            if (!message) {
                if (this.editor.isSimpleWidget) {
                    message = new _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkdownString */ .W5(_nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editor.simple.readonly', "Cannot edit in read-only input"));
                }
                else {
                    message = new _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkdownString */ .W5(_nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editor.readonly', "Cannot edit in read-only editor"));
                }
            }
            messageController.showMessage(message, this.editor.getPosition());
        }
    }
}
ReadOnlyMessageController.ID = 'editor.contrib.readOnlyMessageController';
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorContribution */ ._K)(ReadOnlyMessageController.ID, ReadOnlyMessageController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);


/***/ }),

/***/ 13560:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: RenameAction, rename

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(39194);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(92378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js + 1 modules
var editorState = __webpack_require__(42901);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService.js
var bulkEditService = __webpack_require__(43372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js
var codeEditorService = __webpack_require__(41886);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js
var textResourceConfiguration = __webpack_require__(84706);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js + 1 modules
var messageController = __webpack_require__(79905);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js
var configurationRegistry = __webpack_require__(97772);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/log/common/log.js
var log = __webpack_require__(56950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(70760);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js
var progress = __webpack_require__(32561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(16324);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.css
var renameInputField = __webpack_require__(13600);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(renameInputField/* default */.Z, options);




       /* harmony default export */ var browser_renameInputField = (renameInputField/* default */.Z && renameInputField/* default */.Z.locals ? renameInputField/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(13748);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(26236);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.js
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








const CONTEXT_RENAME_INPUT_VISIBLE = new contextkey/* RawContextKey */.uy('renameInputVisible', false, (0,nls/* localize */.NC)('renameInputVisible', "Whether the rename input widget is visible"));
let RenameInputField = class RenameInputField {
    constructor(_editor, _acceptKeybindings, _themeService, _keybindingService, contextKeyService) {
        this._editor = _editor;
        this._acceptKeybindings = _acceptKeybindings;
        this._themeService = _themeService;
        this._keybindingService = _keybindingService;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this.allowEditorOverflow = true;
        this._visibleContextKey = CONTEXT_RENAME_INPUT_VISIBLE.bindTo(contextKeyService);
        this._editor.addContentWidget(this);
        this._disposables.add(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(49 /* EditorOption.fontInfo */)) {
                this._updateFont();
            }
        }));
        this._disposables.add(_themeService.onDidColorThemeChange(this._updateStyles, this));
    }
    dispose() {
        this._disposables.dispose();
        this._editor.removeContentWidget(this);
    }
    getId() {
        return '__renameInputWidget';
    }
    getDomNode() {
        if (!this._domNode) {
            this._domNode = document.createElement('div');
            this._domNode.className = 'monaco-editor rename-box';
            this._input = document.createElement('input');
            this._input.className = 'rename-input';
            this._input.type = 'text';
            this._input.setAttribute('aria-label', (0,nls/* localize */.NC)('renameAriaLabel', "Rename input. Type new name and press Enter to commit."));
            this._domNode.appendChild(this._input);
            this._label = document.createElement('div');
            this._label.className = 'rename-label';
            this._domNode.appendChild(this._label);
            this._updateFont();
            this._updateStyles(this._themeService.getColorTheme());
        }
        return this._domNode;
    }
    _updateStyles(theme) {
        var _a, _b, _c, _d;
        if (!this._input || !this._domNode) {
            return;
        }
        const widgetShadowColor = theme.getColor(colorRegistry/* widgetShadow */.rh);
        const widgetBorderColor = theme.getColor(colorRegistry/* widgetBorder */.A42);
        this._domNode.style.backgroundColor = String((_a = theme.getColor(colorRegistry/* editorWidgetBackground */.D0T)) !== null && _a !== void 0 ? _a : '');
        this._domNode.style.boxShadow = widgetShadowColor ? ` 0 0 8px 2px ${widgetShadowColor}` : '';
        this._domNode.style.border = widgetBorderColor ? `1px solid ${widgetBorderColor}` : '';
        this._domNode.style.color = String((_b = theme.getColor(colorRegistry/* inputForeground */.zJb)) !== null && _b !== void 0 ? _b : '');
        this._input.style.backgroundColor = String((_c = theme.getColor(colorRegistry/* inputBackground */.sEe)) !== null && _c !== void 0 ? _c : '');
        // this._input.style.color = String(theme.getColor(inputForeground) ?? '');
        const border = theme.getColor(colorRegistry/* inputBorder */.dt_);
        this._input.style.borderWidth = border ? '1px' : '0px';
        this._input.style.borderStyle = border ? 'solid' : 'none';
        this._input.style.borderColor = (_d = border === null || border === void 0 ? void 0 : border.toString()) !== null && _d !== void 0 ? _d : 'none';
    }
    _updateFont() {
        if (!this._input || !this._label) {
            return;
        }
        const fontInfo = this._editor.getOption(49 /* EditorOption.fontInfo */);
        this._input.style.fontFamily = fontInfo.fontFamily;
        this._input.style.fontWeight = fontInfo.fontWeight;
        this._input.style.fontSize = `${fontInfo.fontSize}px`;
        this._label.style.fontSize = `${fontInfo.fontSize * 0.8}px`;
    }
    getPosition() {
        if (!this._visible) {
            return null;
        }
        return {
            position: this._position,
            preference: [2 /* ContentWidgetPositionPreference.BELOW */, 1 /* ContentWidgetPositionPreference.ABOVE */]
        };
    }
    beforeRender() {
        var _a, _b;
        const [accept, preview] = this._acceptKeybindings;
        this._label.innerText = (0,nls/* localize */.NC)({ key: 'label', comment: ['placeholders are keybindings, e.g "F2 to Rename, Shift+F2 to Preview"'] }, "{0} to Rename, {1} to Preview", (_a = this._keybindingService.lookupKeybinding(accept)) === null || _a === void 0 ? void 0 : _a.getLabel(), (_b = this._keybindingService.lookupKeybinding(preview)) === null || _b === void 0 ? void 0 : _b.getLabel());
        return null;
    }
    afterRender(position) {
        if (!position) {
            // cancel rename when input widget isn't rendered anymore
            this.cancelInput(true);
        }
    }
    acceptInput(wantsPreview) {
        var _a;
        (_a = this._currentAcceptInput) === null || _a === void 0 ? void 0 : _a.call(this, wantsPreview);
    }
    cancelInput(focusEditor) {
        var _a;
        (_a = this._currentCancelInput) === null || _a === void 0 ? void 0 : _a.call(this, focusEditor);
    }
    getInput(where, value, selectionStart, selectionEnd, supportPreview, token) {
        this._domNode.classList.toggle('preview', supportPreview);
        this._position = new position/* Position */.L(where.startLineNumber, where.startColumn);
        this._input.value = value;
        this._input.setAttribute('selectionStart', selectionStart.toString());
        this._input.setAttribute('selectionEnd', selectionEnd.toString());
        this._input.size = Math.max((where.endColumn - where.startColumn) * 1.1, 20);
        const disposeOnDone = new lifecycle/* DisposableStore */.SL();
        return new Promise(resolve => {
            this._currentCancelInput = (focusEditor) => {
                this._currentAcceptInput = undefined;
                this._currentCancelInput = undefined;
                resolve(focusEditor);
                return true;
            };
            this._currentAcceptInput = (wantsPreview) => {
                if (this._input.value.trim().length === 0 || this._input.value === value) {
                    // empty or whitespace only or not changed
                    this.cancelInput(true);
                    return;
                }
                this._currentAcceptInput = undefined;
                this._currentCancelInput = undefined;
                resolve({
                    newName: this._input.value,
                    wantsPreview: supportPreview && wantsPreview
                });
            };
            disposeOnDone.add(token.onCancellationRequested(() => this.cancelInput(true)));
            disposeOnDone.add(this._editor.onDidBlurEditorWidget(() => this.cancelInput(!document.hasFocus())));
            this._show();
        }).finally(() => {
            disposeOnDone.dispose();
            this._hide();
        });
    }
    _show() {
        this._editor.revealLineInCenterIfOutsideViewport(this._position.lineNumber, 0 /* ScrollType.Smooth */);
        this._visible = true;
        this._visibleContextKey.set(true);
        this._editor.layoutContentWidget(this);
        setTimeout(() => {
            this._input.focus();
            this._input.setSelectionRange(parseInt(this._input.getAttribute('selectionStart')), parseInt(this._input.getAttribute('selectionEnd')));
        }, 100);
    }
    _hide() {
        this._visible = false;
        this._visibleContextKey.reset();
        this._editor.layoutContentWidget(this);
    }
};
RenameInputField = __decorate([
    __param(2, themeService/* IThemeService */.XE),
    __param(3, keybinding/* IKeybindingService */.d),
    __param(4, contextkey/* IContextKeyService */.i6)
], RenameInputField);


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var rename_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rename_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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


























class RenameSkeleton {
    constructor(model, position, registry) {
        this.model = model;
        this.position = position;
        this._providerRenameIdx = 0;
        this._providers = registry.ordered(model);
    }
    hasProvider() {
        return this._providers.length > 0;
    }
    resolveRenameLocation(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const rejects = [];
            for (this._providerRenameIdx = 0; this._providerRenameIdx < this._providers.length; this._providerRenameIdx++) {
                const provider = this._providers[this._providerRenameIdx];
                if (!provider.resolveRenameLocation) {
                    break;
                }
                const res = yield provider.resolveRenameLocation(this.model, this.position, token);
                if (!res) {
                    continue;
                }
                if (res.rejectReason) {
                    rejects.push(res.rejectReason);
                    continue;
                }
                return res;
            }
            const word = this.model.getWordAtPosition(this.position);
            if (!word) {
                return {
                    range: range/* Range */.e.fromPositions(this.position),
                    text: '',
                    rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
                };
            }
            return {
                range: new range/* Range */.e(this.position.lineNumber, word.startColumn, this.position.lineNumber, word.endColumn),
                text: word.word,
                rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
            };
        });
    }
    provideRenameEdits(newName, token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._provideRenameEdits(newName, this._providerRenameIdx, [], token);
        });
    }
    _provideRenameEdits(newName, i, rejects, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this._providers[i];
            if (!provider) {
                return {
                    edits: [],
                    rejectReason: rejects.join('\n')
                };
            }
            const result = yield provider.provideRenameEdits(this.model, this.position, newName, token);
            if (!result) {
                return this._provideRenameEdits(newName, i + 1, rejects.concat(nls/* localize */.NC('no result', "No result.")), token);
            }
            else if (result.rejectReason) {
                return this._provideRenameEdits(newName, i + 1, rejects.concat(result.rejectReason), token);
            }
            return result;
        });
    }
}
function rename(registry, model, position, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        const skeleton = new RenameSkeleton(model, position, registry);
        const loc = yield skeleton.resolveRenameLocation(cancellation/* CancellationToken */.T.None);
        if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
            return { edits: [], rejectReason: loc.rejectReason };
        }
        return skeleton.provideRenameEdits(newName, cancellation/* CancellationToken */.T.None);
    });
}
// ---  register actions and commands
let RenameController = class RenameController {
    static get(editor) {
        return editor.getContribution(RenameController.ID);
    }
    constructor(editor, _instaService, _notificationService, _bulkEditService, _progressService, _logService, _configService, _languageFeaturesService) {
        this.editor = editor;
        this._instaService = _instaService;
        this._notificationService = _notificationService;
        this._bulkEditService = _bulkEditService;
        this._progressService = _progressService;
        this._logService = _logService;
        this._configService = _configService;
        this._languageFeaturesService = _languageFeaturesService;
        this._disposableStore = new lifecycle/* DisposableStore */.SL();
        this._cts = new cancellation/* CancellationTokenSource */.A();
        this._renameInputField = this._disposableStore.add(this._instaService.createInstance(RenameInputField, this.editor, ['acceptRenameInput', 'acceptRenameInputWithPreview']));
    }
    dispose() {
        this._disposableStore.dispose();
        this._cts.dispose(true);
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            // set up cancellation token to prevent reentrant rename, this
            // is the parent to the resolve- and rename-tokens
            this._cts.dispose(true);
            this._cts = new cancellation/* CancellationTokenSource */.A();
            if (!this.editor.hasModel()) {
                return undefined;
            }
            const position = this.editor.getPosition();
            const skeleton = new RenameSkeleton(this.editor.getModel(), position, this._languageFeaturesService.renameProvider);
            if (!skeleton.hasProvider()) {
                return undefined;
            }
            // part 1 - resolve rename location
            const cts1 = new editorState/* EditorStateCancellationTokenSource */.Dl(this.editor, 4 /* CodeEditorStateFlag.Position */ | 1 /* CodeEditorStateFlag.Value */, undefined, this._cts.token);
            let loc;
            try {
                const resolveLocationOperation = skeleton.resolveRenameLocation(cts1.token);
                this._progressService.showWhile(resolveLocationOperation, 250);
                loc = yield resolveLocationOperation;
            }
            catch (e) {
                (_a = messageController/* MessageController */.O.get(this.editor)) === null || _a === void 0 ? void 0 : _a.showMessage(e || nls/* localize */.NC('resolveRenameLocationFailed', "An unknown error occurred while resolving rename location"), position);
                return undefined;
            }
            finally {
                cts1.dispose();
            }
            if (!loc) {
                return undefined;
            }
            if (loc.rejectReason) {
                (_b = messageController/* MessageController */.O.get(this.editor)) === null || _b === void 0 ? void 0 : _b.showMessage(loc.rejectReason, position);
                return undefined;
            }
            if (cts1.token.isCancellationRequested) {
                return undefined;
            }
            // part 2 - do rename at location
            const cts2 = new editorState/* EditorStateCancellationTokenSource */.Dl(this.editor, 4 /* CodeEditorStateFlag.Position */ | 1 /* CodeEditorStateFlag.Value */, loc.range, this._cts.token);
            const selection = this.editor.getSelection();
            let selectionStart = 0;
            let selectionEnd = loc.text.length;
            if (!range/* Range */.e.isEmpty(selection) && !range/* Range */.e.spansMultipleLines(selection) && range/* Range */.e.containsRange(loc.range, selection)) {
                selectionStart = Math.max(0, selection.startColumn - loc.range.startColumn);
                selectionEnd = Math.min(loc.range.endColumn, selection.endColumn) - loc.range.startColumn;
            }
            const supportPreview = this._bulkEditService.hasPreviewHandler() && this._configService.getValue(this.editor.getModel().uri, 'editor.rename.enablePreview');
            const inputFieldResult = yield this._renameInputField.getInput(loc.range, loc.text, selectionStart, selectionEnd, supportPreview, cts2.token);
            // no result, only hint to focus the editor or not
            if (typeof inputFieldResult === 'boolean') {
                if (inputFieldResult) {
                    this.editor.focus();
                }
                cts2.dispose();
                return undefined;
            }
            this.editor.focus();
            const renameOperation = (0,common_async/* raceCancellation */.eP)(skeleton.provideRenameEdits(inputFieldResult.newName, cts2.token), cts2.token).then((renameResult) => __awaiter(this, void 0, void 0, function* () {
                if (!renameResult || !this.editor.hasModel()) {
                    return;
                }
                if (renameResult.rejectReason) {
                    this._notificationService.info(renameResult.rejectReason);
                    return;
                }
                // collapse selection to active end
                this.editor.setSelection(range/* Range */.e.fromPositions(this.editor.getSelection().getPosition()));
                this._bulkEditService.apply(renameResult, {
                    editor: this.editor,
                    showPreview: inputFieldResult.wantsPreview,
                    label: nls/* localize */.NC('label', "Renaming '{0}' to '{1}'", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                    code: 'undoredo.rename',
                    quotableLabel: nls/* localize */.NC('quotableLabel', "Renaming {0} to {1}", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                    respectAutoSaveConfig: true
                }).then(result => {
                    if (result.ariaSummary) {
                        (0,aria/* alert */.Z9)(nls/* localize */.NC('aria', "Successfully renamed '{0}' to '{1}'. Summary: {2}", loc.text, inputFieldResult.newName, result.ariaSummary));
                    }
                }).catch(err => {
                    this._notificationService.error(nls/* localize */.NC('rename.failedApply', "Rename failed to apply edits"));
                    this._logService.error(err);
                });
            }), err => {
                this._notificationService.error(nls/* localize */.NC('rename.failed', "Rename failed to compute edits"));
                this._logService.error(err);
            }).finally(() => {
                cts2.dispose();
            });
            this._progressService.showWhile(renameOperation, 250);
            return renameOperation;
        });
    }
    acceptRenameInput(wantsPreview) {
        this._renameInputField.acceptInput(wantsPreview);
    }
    cancelRenameInput() {
        this._renameInputField.cancelInput(true);
    }
};
RenameController.ID = 'editor.contrib.renameController';
RenameController = rename_decorate([
    rename_param(1, instantiation/* IInstantiationService */.TG),
    rename_param(2, notification/* INotificationService */.lT),
    rename_param(3, bulkEditService/* IBulkEditService */.vu),
    rename_param(4, progress/* IEditorProgressService */.ek),
    rename_param(5, log/* ILogService */.VZ),
    rename_param(6, textResourceConfiguration/* ITextResourceConfigurationService */.V),
    rename_param(7, languageFeatures/* ILanguageFeaturesService */.p)
], RenameController);
// ---- action implementation
class RenameAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.rename',
            label: nls/* localize */.NC('rename.label', "Rename Symbol"),
            alias: 'Rename Symbol',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasRenameProvider),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 60 /* KeyCode.F2 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.1
            }
        });
    }
    runCommand(accessor, args) {
        const editorService = accessor.get(codeEditorService/* ICodeEditorService */.$);
        const [uri, pos] = Array.isArray(args) && args || [undefined, undefined];
        if (common_uri/* URI */.o.isUri(uri) && position/* Position */.L.isIPosition(pos)) {
            return editorService.openCodeEditor({ resource: uri }, editorService.getActiveCodeEditor()).then(editor => {
                if (!editor) {
                    return;
                }
                editor.setPosition(pos);
                editor.invokeWithinContext(accessor => {
                    this.reportTelemetry(accessor, editor);
                    return this.run(accessor, editor);
                });
            }, errors/* onUnexpectedError */.dL);
        }
        return super.runCommand(accessor, args);
    }
    run(accessor, editor) {
        const controller = RenameController.get(editor);
        if (controller) {
            return controller.run();
        }
        return Promise.resolve();
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(RenameController.ID, RenameController, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(RenameAction);
const RenameCommand = editorExtensions/* EditorCommand */._l.bindToContribution(RenameController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'acceptRenameInput',
    precondition: CONTEXT_RENAME_INPUT_VISIBLE,
    handler: x => x.acceptRenameInput(false),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.not('isComposing')),
        primary: 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'acceptRenameInputWithPreview',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(CONTEXT_RENAME_INPUT_VISIBLE, contextkey/* ContextKeyExpr */.Ao.has('config.editor.rename.enablePreview')),
    handler: x => x.acceptRenameInput(true),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.not('isComposing')),
        primary: 1024 /* KeyMod.Shift */ + 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'cancelRenameInput',
    precondition: CONTEXT_RENAME_INPUT_VISIBLE,
    handler: x => x.cancelRenameInput(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
// ---- api bridge command
(0,editorExtensions/* registerModelAndPositionCommand */.sb)('_executeDocumentRenameProvider', function (accessor, model, position, ...args) {
    const [newName] = args;
    (0,types/* assertType */.p_)(typeof newName === 'string');
    const { renameProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    return rename(renameProvider, model, position, newName);
});
(0,editorExtensions/* registerModelAndPositionCommand */.sb)('_executePrepareRename', function (accessor, model, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const { renameProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
        const skeleton = new RenameSkeleton(model, position, renameProvider);
        const loc = yield skeleton.resolveRenameLocation(cancellation/* CancellationToken */.T.None);
        if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
            throw new Error(loc.rejectReason);
        }
        return loc;
    });
});
//todo@jrieken use editor options world
platform/* Registry */.B.as(configurationRegistry/* Extensions */.IP.Configuration).registerConfiguration({
    id: 'editor',
    properties: {
        'editor.rename.enablePreview': {
            scope: 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            description: nls/* localize */.NC('enablePreview', "Enable/disable the ability to preview changes before renaming"),
            default: true,
            type: 'boolean'
        }
    }
});


/***/ })

}]);