"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-0a1c08da"],{

/***/ 96963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ AbstractEditorCommandsQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_iconLabels_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49357);
/* harmony import */ var _platform_quickinput_browser_commandsQuickAccess_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45080);
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

/***/ 73278:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ AbstractEditorNavigationQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_functional_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9429);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28935);
/* harmony import */ var _browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87016);
/* harmony import */ var _common_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11754);
/* harmony import */ var _common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66050);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31754);
/* harmony import */ var _base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70385);
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
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_5__/* .alert */ .Z9)(`${model.getLineContent(options.range.startLineNumber)}`);
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

/***/ 60374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ AbstractGotoLineQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87016);
/* harmony import */ var _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73278);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23330);
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
            const lineNumbers = options.get(65 /* EditorOption.lineNumbers */);
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

/***/ 82210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ AbstractGotoSymbolQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29811);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14162);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51446);
/* harmony import */ var _base_common_fuzzyScorer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54077);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79027);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23607);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76584);
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58606);
/* harmony import */ var _documentSymbols_browser_outlineModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42883);
/* harmony import */ var _editorNavigationQuickAccess_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73278);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23330);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58431);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33899);
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
                    ariaLabel: symbolLabel,
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

/***/ 66485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadOnlyMessageController: function() { return /* binding */ ReadOnlyMessageController; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91213);
/* harmony import */ var _message_browser_messageController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16958);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23330);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class ReadOnlyMessageController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(editor) {
        super();
        this.editor = editor;
        this._register(this.editor.onDidAttemptReadOnlyEdit(() => this._onDidAttemptReadOnlyEdit()));
    }
    _onDidAttemptReadOnlyEdit() {
        const messageController = _message_browser_messageController_js__WEBPACK_IMPORTED_MODULE_2__/* .MessageController */ .O.get(this.editor);
        if (messageController && this.editor.hasModel()) {
            if (this.editor.isSimpleWidget) {
                messageController.showMessage(_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC('editor.simple.readonly', "Cannot edit in read-only input"), this.editor.getPosition());
            }
            else {
                messageController.showMessage(_nls_js__WEBPACK_IMPORTED_MODULE_3__/* .localize */ .NC('editor.readonly', "Cannot edit in read-only editor"), this.editor.getPosition());
            }
        }
    }
}
ReadOnlyMessageController.ID = 'editor.contrib.readOnlyMessageController';
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorContribution */ ._K)(ReadOnlyMessageController.ID, ReadOnlyMessageController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);


/***/ })

}]);