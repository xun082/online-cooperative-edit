"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-d32b9835"],{

/***/ 29562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A9: function() { return /* binding */ CompletionOptions; },
/* harmony export */   GI: function() { return /* binding */ suggestWidgetStatusbarMenu; },
/* harmony export */   ZJ: function() { return /* binding */ getSnippetSuggestSupport; },
/* harmony export */   _y: function() { return /* binding */ Context; },
/* harmony export */   i5: function() { return /* binding */ showSimpleSuggestions; },
/* harmony export */   kL: function() { return /* binding */ provideSuggestionItems; },
/* harmony export */   tG: function() { return /* binding */ QuickSuggestionsOptions; }
/* harmony export */ });
/* unused harmony exports CompletionItem, CompletionItemModel, getSuggestionComparator */
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98764);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25702);
/* harmony import */ var _base_common_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35092);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26794);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99264);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89356);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92378);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65201);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3981);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31744);
/* harmony import */ var _snippet_browser_snippetParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97970);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80757);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47619);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38389);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78658);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6216);
/* harmony import */ var _platform_history_browser_contextScopedHistoryWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89743);
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
    Visible: _platform_history_browser_contextScopedHistoryWidget_js__WEBPACK_IMPORTED_MODULE_13__/* .historyNavigationVisible */ .iX,
    HasFocusedSuggestion: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestWidgetHasFocusedSuggestion', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestWidgetHasSelection', "Whether any suggestion is focused")),
    DetailsVisible: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestWidgetDetailsVisible', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestWidgetDetailsVisible', "Whether suggestion details are visible")),
    MultipleSuggestions: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestWidgetMultipleSuggestions', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestWidgetMultipleSuggestions', "Whether there are multiple suggestions to pick from")),
    MakesTextEdit: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestionMakesTextEdit', true, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestionMakesTextEdit', "Whether inserting the current suggestion yields in a change or has everything already been typed")),
    AcceptSuggestionsOnEnter: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('acceptSuggestionOnEnter', true, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('acceptSuggestionOnEnter', "Whether suggestions are inserted when pressing Enter")),
    HasInsertAndReplaceRange: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestionHasInsertAndReplaceRange', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestionHasInsertAndReplaceRange', "Whether the current suggestion has insert and replace behaviour")),
    InsertMode: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestionInsertMode', undefined, { type: 'string', description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestionInsertMode', "Whether the default behaviour is to insert or replace") }),
    CanResolve: new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .RawContextKey */ .uy('suggestionCanResolve', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC)('suggestionCanResolve', "Whether the current suggestion supports to resolve further details")),
};
const suggestWidgetStatusbarMenu = new _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .MenuId */ .eH('suggestWidgetStatusBar');
class CompletionItem {
    constructor(position, completion, container, provider) {
        var _a;
        this.position = position;
        this.completion = completion;
        this.container = container;
        this.provider = provider;
        // validation
        this.isInvalid = false;
        // sorting, filtering
        this.score = _base_common_filters_js__WEBPACK_IMPORTED_MODULE_2__/* .FuzzyScore */ .CL.Default;
        this.distance = 0;
        this.textLabel = typeof completion.label === 'string'
            ? completion.label
            : (_a = completion.label) === null || _a === void 0 ? void 0 : _a.label;
        // ensure lower-variants (perf)
        this.labelLow = this.textLabel.toLowerCase();
        // validate label
        this.isInvalid = !this.textLabel;
        this.sortTextLow = completion.sortText && completion.sortText.toLowerCase();
        this.filterTextLow = completion.filterText && completion.filterText.toLowerCase();
        this.extensionId = completion.extensionId;
        // normalize ranges
        if (_common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e.isIRange(completion.range)) {
            this.editStart = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.startLineNumber, completion.range.startColumn);
            this.editInsertEnd = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.endLineNumber, completion.range.endColumn);
            this.editReplaceEnd = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.endLineNumber, completion.range.endColumn);
            // validate range
            this.isInvalid = this.isInvalid
                || _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e.spansMultipleLines(completion.range) || completion.range.startLineNumber !== position.lineNumber;
        }
        else {
            this.editStart = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.insert.startLineNumber, completion.range.insert.startColumn);
            this.editInsertEnd = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.insert.endLineNumber, completion.range.insert.endColumn);
            this.editReplaceEnd = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L(completion.range.replace.endLineNumber, completion.range.replace.endColumn);
            // validate ranges
            this.isInvalid = this.isInvalid
                || _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e.spansMultipleLines(completion.range.insert) || _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e.spansMultipleLines(completion.range.replace)
                || completion.range.insert.startLineNumber !== position.lineNumber || completion.range.replace.startLineNumber !== position.lineNumber
                || completion.range.insert.startColumn !== completion.range.replace.startColumn;
        }
        // create the suggestion resolver
        if (typeof provider.resolveCompletionItem !== 'function') {
            this._resolveCache = Promise.resolve();
            this._resolveDuration = 0;
        }
    }
    // ---- resolving
    get isResolved() {
        return this._resolveDuration !== undefined;
    }
    get resolveDuration() {
        return this._resolveDuration !== undefined ? this._resolveDuration : -1;
    }
    resolve(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._resolveCache) {
                const sub = token.onCancellationRequested(() => {
                    this._resolveCache = undefined;
                    this._resolveDuration = undefined;
                });
                const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G(true);
                this._resolveCache = Promise.resolve(this.provider.resolveCompletionItem(this.completion, token)).then(value => {
                    Object.assign(this.completion, value);
                    this._resolveDuration = sw.elapsed();
                    sub.dispose();
                }, err => {
                    if ((0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .isCancellationError */ .n2)(err)) {
                        // the IPC queue will reject the request with the
                        // cancellation error -> reset cached
                        this._resolveCache = undefined;
                        this._resolveDuration = undefined;
                    }
                });
            }
            return this._resolveCache;
        });
    }
}
class CompletionOptions {
    constructor(snippetSortOrder = 2 /* SnippetSortOrder.Bottom */, kindFilter = new Set(), providerFilter = new Set(), providerItemsToReuse = new Map(), showDeprecated = true) {
        this.snippetSortOrder = snippetSortOrder;
        this.kindFilter = kindFilter;
        this.providerFilter = providerFilter;
        this.providerItemsToReuse = providerItemsToReuse;
        this.showDeprecated = showDeprecated;
    }
}
CompletionOptions.default = new CompletionOptions();
let _snippetSuggestSupport;
function getSnippetSuggestSupport() {
    return _snippetSuggestSupport;
}
class CompletionItemModel {
    constructor(items, needsClipboard, durations, disposable) {
        this.items = items;
        this.needsClipboard = needsClipboard;
        this.durations = durations;
        this.disposable = disposable;
    }
}
function provideSuggestionItems(registry, model, position, options = CompletionOptions.default, context = { triggerKind: 0 /* languages.CompletionTriggerKind.Invoke */ }, token = _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None) {
    return __awaiter(this, void 0, void 0, function* () {
        const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G();
        position = position.clone();
        const word = model.getWordAtPosition(position);
        const defaultReplaceRange = word ? new _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn) : _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__/* .Range */ .e.fromPositions(position);
        const defaultRange = { replace: defaultReplaceRange, insert: defaultReplaceRange.setEndPosition(position.lineNumber, position.column) };
        const result = [];
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .DisposableStore */ .SL();
        const durations = [];
        let needsClipboard = false;
        const onCompletionList = (provider, container, sw) => {
            var _a, _b, _c;
            let didAddResult = false;
            if (!container) {
                return didAddResult;
            }
            for (const suggestion of container.suggestions) {
                if (!options.kindFilter.has(suggestion.kind)) {
                    // skip if not showing deprecated suggestions
                    if (!options.showDeprecated && ((_a = suggestion === null || suggestion === void 0 ? void 0 : suggestion.tags) === null || _a === void 0 ? void 0 : _a.includes(1 /* languages.CompletionItemTag.Deprecated */))) {
                        continue;
                    }
                    // fill in default range when missing
                    if (!suggestion.range) {
                        suggestion.range = defaultRange;
                    }
                    // fill in default sortText when missing
                    if (!suggestion.sortText) {
                        suggestion.sortText = typeof suggestion.label === 'string' ? suggestion.label : suggestion.label.label;
                    }
                    if (!needsClipboard && suggestion.insertTextRules && suggestion.insertTextRules & 4 /* languages.CompletionItemInsertTextRule.InsertAsSnippet */) {
                        needsClipboard = _snippet_browser_snippetParser_js__WEBPACK_IMPORTED_MODULE_7__/* .SnippetParser */ .Yj.guessNeedsClipboard(suggestion.insertText);
                    }
                    result.push(new CompletionItem(position, suggestion, container, provider));
                    didAddResult = true;
                }
            }
            if ((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .isDisposable */ .Wf)(container)) {
                disposables.add(container);
            }
            durations.push({
                providerName: (_b = provider._debugDisplayName) !== null && _b !== void 0 ? _b : 'unknown_provider', elapsedProvider: (_c = container.duration) !== null && _c !== void 0 ? _c : -1, elapsedOverall: sw.elapsed()
            });
            return didAddResult;
        };
        // ask for snippets in parallel to asking "real" providers. Only do something if configured to
        // do so - no snippet filter, no special-providers-only request
        const snippetCompletions = (() => __awaiter(this, void 0, void 0, function* () {
            if (!_snippetSuggestSupport || options.kindFilter.has(27 /* languages.CompletionItemKind.Snippet */)) {
                return;
            }
            // we have items from a previous session that we can reuse
            const reuseItems = options.providerItemsToReuse.get(_snippetSuggestSupport);
            if (reuseItems) {
                reuseItems.forEach(item => result.push(item));
                return;
            }
            if (options.providerFilter.size > 0 && !options.providerFilter.has(_snippetSuggestSupport)) {
                return;
            }
            const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G();
            const list = yield _snippetSuggestSupport.provideCompletionItems(model, position, context, token);
            onCompletionList(_snippetSuggestSupport, list, sw);
        }))();
        // add suggestions from contributed providers - providers are ordered in groups of
        // equal score and once a group produces a result the process stops
        // get provider groups, always add snippet suggestion provider
        for (const providerGroup of registry.orderedGroups(model)) {
            // for each support in the group ask for suggestions
            let didAddResult = false;
            yield Promise.all(providerGroup.map((provider) => __awaiter(this, void 0, void 0, function* () {
                // we have items from a previous session that we can reuse
                if (options.providerItemsToReuse.has(provider)) {
                    const items = options.providerItemsToReuse.get(provider);
                    items.forEach(item => result.push(item));
                    didAddResult = didAddResult || items.length > 0;
                    return;
                }
                // check if this provider is filtered out
                if (options.providerFilter.size > 0 && !options.providerFilter.has(provider)) {
                    return;
                }
                try {
                    const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G();
                    const list = yield provider.provideCompletionItems(model, position, context, token);
                    didAddResult = onCompletionList(provider, list, sw) || didAddResult;
                }
                catch (err) {
                    (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .onUnexpectedExternalError */ .Cp)(err);
                }
            })));
            if (didAddResult || token.isCancellationRequested) {
                break;
            }
        }
        yield snippetCompletions;
        if (token.isCancellationRequested) {
            disposables.dispose();
            return Promise.reject(new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
        }
        return new CompletionItemModel(result.sort(getSuggestionComparator(options.snippetSortOrder)), needsClipboard, { entries: durations, elapsed: sw.elapsed() }, disposables);
    });
}
function defaultComparator(a, b) {
    // check with 'sortText'
    if (a.sortTextLow && b.sortTextLow) {
        if (a.sortTextLow < b.sortTextLow) {
            return -1;
        }
        else if (a.sortTextLow > b.sortTextLow) {
            return 1;
        }
    }
    // check with 'label'
    if (a.textLabel < b.textLabel) {
        return -1;
    }
    else if (a.textLabel > b.textLabel) {
        return 1;
    }
    // check with 'type'
    return a.completion.kind - b.completion.kind;
}
function snippetUpComparator(a, b) {
    if (a.completion.kind !== b.completion.kind) {
        if (a.completion.kind === 27 /* languages.CompletionItemKind.Snippet */) {
            return -1;
        }
        else if (b.completion.kind === 27 /* languages.CompletionItemKind.Snippet */) {
            return 1;
        }
    }
    return defaultComparator(a, b);
}
function snippetDownComparator(a, b) {
    if (a.completion.kind !== b.completion.kind) {
        if (a.completion.kind === 27 /* languages.CompletionItemKind.Snippet */) {
            return 1;
        }
        else if (b.completion.kind === 27 /* languages.CompletionItemKind.Snippet */) {
            return -1;
        }
    }
    return defaultComparator(a, b);
}
const _snippetComparators = new Map();
_snippetComparators.set(0 /* SnippetSortOrder.Top */, snippetUpComparator);
_snippetComparators.set(2 /* SnippetSortOrder.Bottom */, snippetDownComparator);
_snippetComparators.set(1 /* SnippetSortOrder.Inline */, defaultComparator);
function getSuggestionComparator(snippetConfig) {
    return _snippetComparators.get(snippetConfig);
}
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__/* .CommandsRegistry */ .P.registerCommand('_executeCompletionItemProvider', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri, position, triggerCharacter, maxItemsToResolve] = args;
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_16__/* .assertType */ .p_)(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__/* .URI */ .o.isUri(uri));
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_16__/* .assertType */ .p_)(_common_core_position_js__WEBPACK_IMPORTED_MODULE_15__/* .Position */ .L.isIPosition(position));
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_16__/* .assertType */ .p_)(typeof triggerCharacter === 'string' || !triggerCharacter);
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_16__/* .assertType */ .p_)(typeof maxItemsToResolve === 'number' || !maxItemsToResolve);
    const { completionProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_12__/* .ILanguageFeaturesService */ .p);
    const ref = yield accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_6__/* .ITextModelService */ .S).createModelReference(uri);
    try {
        const result = {
            incomplete: false,
            suggestions: []
        };
        const resolving = [];
        const actualPosition = ref.object.textEditorModel.validatePosition(position);
        const completions = yield provideSuggestionItems(completionProvider, ref.object.textEditorModel, actualPosition, undefined, { triggerCharacter: triggerCharacter !== null && triggerCharacter !== void 0 ? triggerCharacter : undefined, triggerKind: triggerCharacter ? 1 /* languages.CompletionTriggerKind.TriggerCharacter */ : 0 /* languages.CompletionTriggerKind.Invoke */ });
        for (const item of completions.items) {
            if (resolving.length < (maxItemsToResolve !== null && maxItemsToResolve !== void 0 ? maxItemsToResolve : 0)) {
                resolving.push(item.resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None));
            }
            result.incomplete = result.incomplete || item.container.incomplete;
            result.suggestions.push(item.completion);
        }
        try {
            yield Promise.all(resolving);
            return result;
        }
        finally {
            setTimeout(() => completions.disposable.dispose(), 100);
        }
    }
    finally {
        ref.dispose();
    }
}));
function showSimpleSuggestions(editor, provider) {
    var _a;
    (_a = editor.getContribution('editor.contrib.suggestController')) === null || _a === void 0 ? void 0 : _a.triggerSuggest(new Set().add(provider), undefined, true);
}
class QuickSuggestionsOptions {
    static isAllOff(config) {
        return config.other === 'off' && config.comments === 'off' && config.strings === 'off';
    }
    static isAllOn(config) {
        return config.other === 'on' && config.comments === 'on' && config.strings === 'on';
    }
    static valueFor(config, tokenType) {
        switch (tokenType) {
            case 1 /* StandardTokenType.Comment */: return config.comments;
            case 2 /* StandardTokenType.String */: return config.strings;
            default: return config.other;
        }
    }
}


/***/ }),

/***/ 74701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ OvertypingCapturer; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class OvertypingCapturer {
    constructor(editor, suggestModel) {
        this._disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        this._lastOvertyped = [];
        this._locked = false;
        this._disposables.add(editor.onWillType(() => {
            if (this._locked || !editor.hasModel()) {
                return;
            }
            const selections = editor.getSelections();
            const selectionsLength = selections.length;
            // Check if it will overtype any selections
            let willOvertype = false;
            for (let i = 0; i < selectionsLength; i++) {
                if (!selections[i].isEmpty()) {
                    willOvertype = true;
                    break;
                }
            }
            if (!willOvertype) {
                if (this._lastOvertyped.length !== 0) {
                    this._lastOvertyped.length = 0;
                }
                return;
            }
            this._lastOvertyped = [];
            const model = editor.getModel();
            for (let i = 0; i < selectionsLength; i++) {
                const selection = selections[i];
                // Check for overtyping capturer restrictions
                if (model.getValueLengthInRange(selection) > OvertypingCapturer._maxSelectionLength) {
                    return;
                }
                this._lastOvertyped[i] = { value: model.getValueInRange(selection), multiline: selection.startLineNumber !== selection.endLineNumber };
            }
        }));
        this._disposables.add(suggestModel.onDidTrigger(e => {
            this._locked = true;
        }));
        this._disposables.add(suggestModel.onDidCancel(e => {
            this._locked = false;
        }));
    }
    getLastOvertypedInfo(idx) {
        if (idx >= 0 && idx < this._lastOvertyped.length) {
            return this._lastOvertyped[idx];
        }
        return undefined;
    }
    dispose() {
        this._disposables.dispose();
    }
}
OvertypingCapturer._maxSelectionLength = 51200;


/***/ }),

/***/ 74744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XZ: function() { return /* binding */ SuggestWidget; }
});

// UNUSED EXPORTS: SuggestContentWidget, editorSuggestWidgetSelectedBackground

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js + 2 modules
var codiconStyles = __webpack_require__(2378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js + 2 modules
var listWidget = __webpack_require__(54530);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/numbers.js
var numbers = __webpack_require__(20484);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/media/suggest.css
var suggest = __webpack_require__(52772);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget.js
var embeddedCodeEditorWidget = __webpack_require__(13511);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(31768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js + 2 modules
var menuEntryActionViewItem = __webpack_require__(80681);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(47619);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetStatus.js
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








class StatusBarViewItem extends menuEntryActionViewItem/* MenuEntryActionViewItem */.Mm {
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            this.label.textContent = (0,nls/* localize */.NC)({ key: 'content', comment: ['A label', 'A keybinding'] }, '{0} ({1})', this._action.label, StatusBarViewItem.symbolPrintEnter(kb));
        }
    }
    static symbolPrintEnter(kb) {
        var _a;
        return (_a = kb.getLabel()) === null || _a === void 0 ? void 0 : _a.replace(/\benter\b/gi, '\u23CE');
    }
}
let SuggestWidgetStatus = class SuggestWidgetStatus {
    constructor(container, _menuId, instantiationService, _menuService, _contextKeyService) {
        this._menuId = _menuId;
        this._menuService = _menuService;
        this._contextKeyService = _contextKeyService;
        this._menuDisposables = new lifecycle/* DisposableStore */.SL();
        this.element = dom/* append */.R3(container, dom.$('.suggest-status-bar'));
        const actionViewItemProvider = (action => {
            return action instanceof actions/* MenuItemAction */.U8 ? instantiationService.createInstance(StatusBarViewItem, action, undefined) : undefined;
        });
        this._leftActions = new actionbar/* ActionBar */.o(this.element, { actionViewItemProvider });
        this._rightActions = new actionbar/* ActionBar */.o(this.element, { actionViewItemProvider });
        this._leftActions.domNode.classList.add('left');
        this._rightActions.domNode.classList.add('right');
    }
    dispose() {
        this._menuDisposables.dispose();
        this.element.remove();
    }
    show() {
        const menu = this._menuService.createMenu(this._menuId, this._contextKeyService);
        const renderMenu = () => {
            const left = [];
            const right = [];
            for (const [group, actions] of menu.getActions()) {
                if (group === 'left') {
                    left.push(...actions);
                }
                else {
                    right.push(...actions);
                }
            }
            this._leftActions.clear();
            this._leftActions.push(left);
            this._rightActions.clear();
            this._rightActions.push(right);
        };
        this._menuDisposables.add(menu.onDidChange(() => renderMenu()));
        this._menuDisposables.add(menu);
    }
    hide() {
        this._menuDisposables.clear();
    }
};
SuggestWidgetStatus = __decorate([
    __param(2, instantiation/* IInstantiationService */.TG),
    __param(3, actions/* IMenuService */.co),
    __param(4, contextkey/* IContextKeyService */.i6)
], SuggestWidgetStatus);


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/symbolIcons/browser/symbolIcons.js + 1 modules
var symbolIcons = __webpack_require__(57761);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js
var storage = __webpack_require__(43516);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/theme.js
var common_theme = __webpack_require__(10086);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(26236);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/resizable/resizable.js
var resizable = __webpack_require__(80871);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggest.js
var browser_suggest = __webpack_require__(29562);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(52610);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js + 1 modules
var markdownRenderer = __webpack_require__(35032);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetDetails.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestWidgetDetails_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestWidgetDetails_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











function canExpandCompletionItem(item) {
    return !!item && Boolean(item.completion.documentation || item.completion.detail && item.completion.detail !== item.completion.label);
}
let SuggestDetailsWidget = class SuggestDetailsWidget {
    constructor(_editor, instaService) {
        this._editor = _editor;
        this._onDidClose = new common_event/* Emitter */.Q5();
        this.onDidClose = this._onDidClose.event;
        this._onDidChangeContents = new common_event/* Emitter */.Q5();
        this.onDidChangeContents = this._onDidChangeContents.event;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._renderDisposeable = new lifecycle/* DisposableStore */.SL();
        this._borderWidth = 1;
        this._size = new dom/* Dimension */.Ro(330, 0);
        this.domNode = dom.$('.suggest-details');
        this.domNode.classList.add('no-docs');
        this._markdownRenderer = instaService.createInstance(markdownRenderer/* MarkdownRenderer */.$, { editor: _editor });
        this._body = dom.$('.body');
        this._scrollbar = new scrollableElement/* DomScrollableElement */.s$(this._body, {
            alwaysConsumeMouseWheel: true,
        });
        dom/* append */.R3(this.domNode, this._scrollbar.getDomNode());
        this._disposables.add(this._scrollbar);
        this._header = dom/* append */.R3(this._body, dom.$('.header'));
        this._close = dom/* append */.R3(this._header, dom.$('span' + themables/* ThemeIcon */.k.asCSSSelector(codicons/* Codicon */.l.close)));
        this._close.title = nls/* localize */.NC('details.close', "Close");
        this._type = dom/* append */.R3(this._header, dom.$('p.type'));
        this._docs = dom/* append */.R3(this._body, dom.$('p.docs'));
        this._configureFont();
        this._disposables.add(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(49 /* EditorOption.fontInfo */)) {
                this._configureFont();
            }
        }));
    }
    dispose() {
        this._disposables.dispose();
        this._renderDisposeable.dispose();
    }
    _configureFont() {
        const options = this._editor.getOptions();
        const fontInfo = options.get(49 /* EditorOption.fontInfo */);
        const fontFamily = fontInfo.getMassagedFontFamily();
        const fontSize = options.get(117 /* EditorOption.suggestFontSize */) || fontInfo.fontSize;
        const lineHeight = options.get(118 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight;
        const fontWeight = fontInfo.fontWeight;
        const fontSizePx = `${fontSize}px`;
        const lineHeightPx = `${lineHeight}px`;
        this.domNode.style.fontSize = fontSizePx;
        this.domNode.style.lineHeight = `${lineHeight / fontSize}`;
        this.domNode.style.fontWeight = fontWeight;
        this.domNode.style.fontFeatureSettings = fontInfo.fontFeatureSettings;
        this._type.style.fontFamily = fontFamily;
        this._close.style.height = lineHeightPx;
        this._close.style.width = lineHeightPx;
    }
    getLayoutInfo() {
        const lineHeight = this._editor.getOption(118 /* EditorOption.suggestLineHeight */) || this._editor.getOption(49 /* EditorOption.fontInfo */).lineHeight;
        const borderWidth = this._borderWidth;
        const borderHeight = borderWidth * 2;
        return {
            lineHeight,
            borderWidth,
            borderHeight,
            verticalPadding: 22,
            horizontalPadding: 14
        };
    }
    renderLoading() {
        this._type.textContent = nls/* localize */.NC('loading', "Loading...");
        this._docs.textContent = '';
        this.domNode.classList.remove('no-docs', 'no-type');
        this.layout(this.size.width, this.getLayoutInfo().lineHeight * 2);
        this._onDidChangeContents.fire(this);
    }
    renderItem(item, explainMode) {
        var _a, _b;
        this._renderDisposeable.clear();
        let { detail, documentation } = item.completion;
        if (explainMode) {
            let md = '';
            md += `score: ${item.score[0]}\n`;
            md += `prefix: ${(_a = item.word) !== null && _a !== void 0 ? _a : '(no prefix)'}\n`;
            md += `word: ${item.completion.filterText ? item.completion.filterText + ' (filterText)' : item.textLabel}\n`;
            md += `distance: ${item.distance} (localityBonus-setting)\n`;
            md += `index: ${item.idx}, based on ${item.completion.sortText && `sortText: "${item.completion.sortText}"` || 'label'}\n`;
            md += `commit_chars: ${(_b = item.completion.commitCharacters) === null || _b === void 0 ? void 0 : _b.join('')}\n`;
            documentation = new htmlContent/* MarkdownString */.W5().appendCodeblock('empty', md);
            detail = `Provider: ${item.provider._debugDisplayName}`;
        }
        if (!explainMode && !canExpandCompletionItem(item)) {
            this.clearContents();
            return;
        }
        this.domNode.classList.remove('no-docs', 'no-type');
        // --- details
        if (detail) {
            const cappedDetail = detail.length > 100000 ? `${detail.substr(0, 100000)}…` : detail;
            this._type.textContent = cappedDetail;
            this._type.title = cappedDetail;
            dom/* show */.$Z(this._type);
            this._type.classList.toggle('auto-wrap', !/\r?\n^\s+/gmi.test(cappedDetail));
        }
        else {
            dom/* clearNode */.PO(this._type);
            this._type.title = '';
            dom/* hide */.Cp(this._type);
            this.domNode.classList.add('no-type');
        }
        // --- documentation
        dom/* clearNode */.PO(this._docs);
        if (typeof documentation === 'string') {
            this._docs.classList.remove('markdown-docs');
            this._docs.textContent = documentation;
        }
        else if (documentation) {
            this._docs.classList.add('markdown-docs');
            dom/* clearNode */.PO(this._docs);
            const renderedContents = this._markdownRenderer.render(documentation);
            this._docs.appendChild(renderedContents.element);
            this._renderDisposeable.add(renderedContents);
            this._renderDisposeable.add(this._markdownRenderer.onDidRenderAsync(() => {
                this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight);
                this._onDidChangeContents.fire(this);
            }));
        }
        this.domNode.style.userSelect = 'text';
        this.domNode.tabIndex = -1;
        this._close.onmousedown = e => {
            e.preventDefault();
            e.stopPropagation();
        };
        this._close.onclick = e => {
            e.preventDefault();
            e.stopPropagation();
            this._onDidClose.fire();
        };
        this._body.scrollTop = 0;
        this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight);
        this._onDidChangeContents.fire(this);
    }
    clearContents() {
        this.domNode.classList.add('no-docs');
        this._type.textContent = '';
        this._docs.textContent = '';
    }
    get size() {
        return this._size;
    }
    layout(width, height) {
        const newSize = new dom/* Dimension */.Ro(width, height);
        if (!dom/* Dimension */.Ro.equals(newSize, this._size)) {
            this._size = newSize;
            dom/* size */.dp(this.domNode, width, height);
        }
        this._scrollbar.scanDomNode();
    }
    scrollDown(much = 8) {
        this._body.scrollTop += much;
    }
    scrollUp(much = 8) {
        this._body.scrollTop -= much;
    }
    scrollTop() {
        this._body.scrollTop = 0;
    }
    scrollBottom() {
        this._body.scrollTop = this._body.scrollHeight;
    }
    pageDown() {
        this.scrollDown(80);
    }
    pageUp() {
        this.scrollUp(80);
    }
    set borderWidth(width) {
        this._borderWidth = width;
    }
    get borderWidth() {
        return this._borderWidth;
    }
};
SuggestDetailsWidget = suggestWidgetDetails_decorate([
    suggestWidgetDetails_param(1, instantiation/* IInstantiationService */.TG)
], SuggestDetailsWidget);

class SuggestDetailsOverlay {
    constructor(widget, _editor) {
        this.widget = widget;
        this._editor = _editor;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._added = false;
        this._preferAlignAtTop = true;
        this._resizable = new resizable/* ResizableHTMLElement */.f();
        this._resizable.domNode.classList.add('suggest-details-container');
        this._resizable.domNode.appendChild(widget.domNode);
        this._resizable.enableSashes(false, true, true, false);
        let topLeftNow;
        let sizeNow;
        let deltaTop = 0;
        let deltaLeft = 0;
        this._disposables.add(this._resizable.onDidWillResize(() => {
            topLeftNow = this._topLeft;
            sizeNow = this._resizable.size;
        }));
        this._disposables.add(this._resizable.onDidResize(e => {
            if (topLeftNow && sizeNow) {
                this.widget.layout(e.dimension.width, e.dimension.height);
                let updateTopLeft = false;
                if (e.west) {
                    deltaLeft = sizeNow.width - e.dimension.width;
                    updateTopLeft = true;
                }
                if (e.north) {
                    deltaTop = sizeNow.height - e.dimension.height;
                    updateTopLeft = true;
                }
                if (updateTopLeft) {
                    this._applyTopLeft({
                        top: topLeftNow.top + deltaTop,
                        left: topLeftNow.left + deltaLeft,
                    });
                }
            }
            if (e.done) {
                topLeftNow = undefined;
                sizeNow = undefined;
                deltaTop = 0;
                deltaLeft = 0;
                this._userSize = e.dimension;
            }
        }));
        this._disposables.add(this.widget.onDidChangeContents(() => {
            var _a;
            if (this._anchorBox) {
                this._placeAtAnchor(this._anchorBox, (_a = this._userSize) !== null && _a !== void 0 ? _a : this.widget.size, this._preferAlignAtTop);
            }
        }));
    }
    dispose() {
        this._resizable.dispose();
        this._disposables.dispose();
        this.hide();
    }
    getId() {
        return 'suggest.details';
    }
    getDomNode() {
        return this._resizable.domNode;
    }
    getPosition() {
        return null;
    }
    show() {
        if (!this._added) {
            this._editor.addOverlayWidget(this);
            this.getDomNode().style.position = 'fixed';
            this._added = true;
        }
    }
    hide(sessionEnded = false) {
        this._resizable.clearSashHoverState();
        if (this._added) {
            this._editor.removeOverlayWidget(this);
            this._added = false;
            this._anchorBox = undefined;
            this._topLeft = undefined;
        }
        if (sessionEnded) {
            this._userSize = undefined;
            this.widget.clearContents();
        }
    }
    placeAtAnchor(anchor, preferAlignAtTop) {
        var _a;
        const anchorBox = anchor.getBoundingClientRect();
        this._anchorBox = anchorBox;
        this._preferAlignAtTop = preferAlignAtTop;
        this._placeAtAnchor(this._anchorBox, (_a = this._userSize) !== null && _a !== void 0 ? _a : this.widget.size, preferAlignAtTop);
    }
    _placeAtAnchor(anchorBox, size, preferAlignAtTop) {
        var _a;
        const bodyBox = dom/* getClientArea */.D6(document.body);
        const info = this.widget.getLayoutInfo();
        const defaultMinSize = new dom/* Dimension */.Ro(220, 2 * info.lineHeight);
        const defaultTop = anchorBox.top;
        // EAST
        const eastPlacement = (function () {
            const width = bodyBox.width - (anchorBox.left + anchorBox.width + info.borderWidth + info.horizontalPadding);
            const left = -info.borderWidth + anchorBox.left + anchorBox.width;
            const maxSizeTop = new dom/* Dimension */.Ro(width, bodyBox.height - anchorBox.top - info.borderHeight - info.verticalPadding);
            const maxSizeBottom = maxSizeTop.with(undefined, anchorBox.top + anchorBox.height - info.borderHeight - info.verticalPadding);
            return { top: defaultTop, left, fit: width - size.width, maxSizeTop, maxSizeBottom, minSize: defaultMinSize.with(Math.min(width, defaultMinSize.width)) };
        })();
        // WEST
        const westPlacement = (function () {
            const width = anchorBox.left - info.borderWidth - info.horizontalPadding;
            const left = Math.max(info.horizontalPadding, anchorBox.left - size.width - info.borderWidth);
            const maxSizeTop = new dom/* Dimension */.Ro(width, bodyBox.height - anchorBox.top - info.borderHeight - info.verticalPadding);
            const maxSizeBottom = maxSizeTop.with(undefined, anchorBox.top + anchorBox.height - info.borderHeight - info.verticalPadding);
            return { top: defaultTop, left, fit: width - size.width, maxSizeTop, maxSizeBottom, minSize: defaultMinSize.with(Math.min(width, defaultMinSize.width)) };
        })();
        // SOUTH
        const southPacement = (function () {
            const left = anchorBox.left;
            const top = -info.borderWidth + anchorBox.top + anchorBox.height;
            const maxSizeBottom = new dom/* Dimension */.Ro(anchorBox.width - info.borderHeight, bodyBox.height - anchorBox.top - anchorBox.height - info.verticalPadding);
            return { top, left, fit: maxSizeBottom.height - size.height, maxSizeBottom, maxSizeTop: maxSizeBottom, minSize: defaultMinSize.with(maxSizeBottom.width) };
        })();
        // take first placement that fits or the first with "least bad" fit
        const placements = [eastPlacement, westPlacement, southPacement];
        const placement = (_a = placements.find(p => p.fit >= 0)) !== null && _a !== void 0 ? _a : placements.sort((a, b) => b.fit - a.fit)[0];
        // top/bottom placement
        const bottom = anchorBox.top + anchorBox.height - info.borderHeight;
        let alignAtTop;
        let height = size.height;
        const maxHeight = Math.max(placement.maxSizeTop.height, placement.maxSizeBottom.height);
        if (height > maxHeight) {
            height = maxHeight;
        }
        let maxSize;
        if (preferAlignAtTop) {
            if (height <= placement.maxSizeTop.height) {
                alignAtTop = true;
                maxSize = placement.maxSizeTop;
            }
            else {
                alignAtTop = false;
                maxSize = placement.maxSizeBottom;
            }
        }
        else {
            if (height <= placement.maxSizeBottom.height) {
                alignAtTop = false;
                maxSize = placement.maxSizeBottom;
            }
            else {
                alignAtTop = true;
                maxSize = placement.maxSizeTop;
            }
        }
        this._applyTopLeft({ left: placement.left, top: alignAtTop ? placement.top : bottom - height });
        this.getDomNode().style.position = 'fixed';
        this._resizable.enableSashes(!alignAtTop, placement === eastPlacement, alignAtTop, placement !== eastPlacement);
        this._resizable.minSize = placement.minSize;
        this._resizable.maxSize = maxSize;
        this._resizable.layout(height, Math.min(maxSize.width, size.width));
        this.widget.layout(this._resizable.size.width, this._resizable.size.height);
    }
    _applyTopLeft(topLeft) {
        this._topLeft = topLeft;
        this.getDomNode().style.left = `${this._topLeft.left}px`;
        this.getDomNode().style.top = `${this._topLeft.top}px`;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js + 1 modules
var iconLabel_iconLabel = __webpack_require__(4797);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(35092);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(92378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js
var getIconClasses = __webpack_require__(46262);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/model.js
var model = __webpack_require__(52266);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(57164);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/files/common/files.js
var files = __webpack_require__(32725);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(85519);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetRenderer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestWidgetRenderer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestWidgetRenderer_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;

















function getAriaId(index) {
    return `suggest-aria-id:${index}`;
}
const suggestMoreInfoIcon = (0,iconRegistry/* registerIcon */.q5)('suggest-more-info', codicons/* Codicon */.l.chevronRight, nls/* localize */.NC('suggestMoreInfoIcon', 'Icon for more information in the suggest widget.'));
const _completionItemColor = new (_a = class ColorExtractor {
        extract(item, out) {
            if (item.textLabel.match(ColorExtractor._regexStrict)) {
                out[0] = item.textLabel;
                return true;
            }
            if (item.completion.detail && item.completion.detail.match(ColorExtractor._regexStrict)) {
                out[0] = item.completion.detail;
                return true;
            }
            if (typeof item.completion.documentation === 'string') {
                const match = ColorExtractor._regexRelaxed.exec(item.completion.documentation);
                if (match && (match.index === 0 || match.index + match[0].length === item.completion.documentation.length)) {
                    out[0] = match[0];
                    return true;
                }
            }
            return false;
        }
    },
    _a._regexRelaxed = /(#([\da-fA-F]{3}){1,2}|(rgb|hsl)a\(\s*(\d{1,3}%?\s*,\s*){3}(1|0?\.\d+)\)|(rgb|hsl)\(\s*\d{1,3}%?(\s*,\s*\d{1,3}%?){2}\s*\))/,
    _a._regexStrict = new RegExp(`^${_a._regexRelaxed.source}$`, 'i'),
    _a);
let ItemRenderer = class ItemRenderer {
    constructor(_editor, _modelService, _languageService, _themeService) {
        this._editor = _editor;
        this._modelService = _modelService;
        this._languageService = _languageService;
        this._themeService = _themeService;
        this._onDidToggleDetails = new common_event/* Emitter */.Q5();
        this.onDidToggleDetails = this._onDidToggleDetails.event;
        this.templateId = 'suggestion';
    }
    dispose() {
        this._onDidToggleDetails.dispose();
    }
    renderTemplate(container) {
        const disposables = new lifecycle/* DisposableStore */.SL();
        const root = container;
        root.classList.add('show-file-icons');
        const icon = (0,dom/* append */.R3)(container, (0,dom.$)('.icon'));
        const colorspan = (0,dom/* append */.R3)(icon, (0,dom.$)('span.colorspan'));
        const text = (0,dom/* append */.R3)(container, (0,dom.$)('.contents'));
        const main = (0,dom/* append */.R3)(text, (0,dom.$)('.main'));
        const iconContainer = (0,dom/* append */.R3)(main, (0,dom.$)('.icon-label.codicon'));
        const left = (0,dom/* append */.R3)(main, (0,dom.$)('span.left'));
        const right = (0,dom/* append */.R3)(main, (0,dom.$)('span.right'));
        const iconLabel = new iconLabel_iconLabel/* IconLabel */.g(left, { supportHighlights: true, supportIcons: true });
        disposables.add(iconLabel);
        const parametersLabel = (0,dom/* append */.R3)(left, (0,dom.$)('span.signature-label'));
        const qualifierLabel = (0,dom/* append */.R3)(left, (0,dom.$)('span.qualifier-label'));
        const detailsLabel = (0,dom/* append */.R3)(right, (0,dom.$)('span.details-label'));
        const readMore = (0,dom/* append */.R3)(right, (0,dom.$)('span.readMore' + themables/* ThemeIcon */.k.asCSSSelector(suggestMoreInfoIcon)));
        readMore.title = nls/* localize */.NC('readMore', "Read More");
        const configureFont = () => {
            const options = this._editor.getOptions();
            const fontInfo = options.get(49 /* EditorOption.fontInfo */);
            const fontFamily = fontInfo.getMassagedFontFamily();
            const fontFeatureSettings = fontInfo.fontFeatureSettings;
            const fontSize = options.get(117 /* EditorOption.suggestFontSize */) || fontInfo.fontSize;
            const lineHeight = options.get(118 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight;
            const fontWeight = fontInfo.fontWeight;
            const letterSpacing = fontInfo.letterSpacing;
            const fontSizePx = `${fontSize}px`;
            const lineHeightPx = `${lineHeight}px`;
            const letterSpacingPx = `${letterSpacing}px`;
            root.style.fontSize = fontSizePx;
            root.style.fontWeight = fontWeight;
            root.style.letterSpacing = letterSpacingPx;
            main.style.fontFamily = fontFamily;
            main.style.fontFeatureSettings = fontFeatureSettings;
            main.style.lineHeight = lineHeightPx;
            icon.style.height = lineHeightPx;
            icon.style.width = lineHeightPx;
            readMore.style.height = lineHeightPx;
            readMore.style.width = lineHeightPx;
        };
        configureFont();
        disposables.add(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(49 /* EditorOption.fontInfo */) || e.hasChanged(117 /* EditorOption.suggestFontSize */) || e.hasChanged(118 /* EditorOption.suggestLineHeight */)) {
                configureFont();
            }
        }));
        return { root, left, right, icon, colorspan, iconLabel, iconContainer, parametersLabel, qualifierLabel, detailsLabel, readMore, disposables };
    }
    renderElement(element, index, data) {
        const { completion } = element;
        data.root.id = getAriaId(index);
        data.colorspan.style.backgroundColor = '';
        const labelOptions = {
            labelEscapeNewLines: true,
            matches: (0,filters/* createMatches */.mB)(element.score)
        };
        const color = [];
        if (completion.kind === 19 /* CompletionItemKind.Color */ && _completionItemColor.extract(element, color)) {
            // special logic for 'color' completion items
            data.icon.className = 'icon customcolor';
            data.iconContainer.className = 'icon hide';
            data.colorspan.style.backgroundColor = color[0];
        }
        else if (completion.kind === 20 /* CompletionItemKind.File */ && this._themeService.getFileIconTheme().hasFileIcons) {
            // special logic for 'file' completion items
            data.icon.className = 'icon hide';
            data.iconContainer.className = 'icon hide';
            const labelClasses = (0,getIconClasses/* getIconClasses */.r)(this._modelService, this._languageService, uri/* URI */.o.from({ scheme: 'fake', path: element.textLabel }), files/* FileKind */.R.FILE);
            const detailClasses = (0,getIconClasses/* getIconClasses */.r)(this._modelService, this._languageService, uri/* URI */.o.from({ scheme: 'fake', path: completion.detail }), files/* FileKind */.R.FILE);
            labelOptions.extraClasses = labelClasses.length > detailClasses.length ? labelClasses : detailClasses;
        }
        else if (completion.kind === 23 /* CompletionItemKind.Folder */ && this._themeService.getFileIconTheme().hasFolderIcons) {
            // special logic for 'folder' completion items
            data.icon.className = 'icon hide';
            data.iconContainer.className = 'icon hide';
            labelOptions.extraClasses = [
                (0,getIconClasses/* getIconClasses */.r)(this._modelService, this._languageService, uri/* URI */.o.from({ scheme: 'fake', path: element.textLabel }), files/* FileKind */.R.FOLDER),
                (0,getIconClasses/* getIconClasses */.r)(this._modelService, this._languageService, uri/* URI */.o.from({ scheme: 'fake', path: completion.detail }), files/* FileKind */.R.FOLDER)
            ].flat();
        }
        else {
            // normal icon
            data.icon.className = 'icon hide';
            data.iconContainer.className = '';
            data.iconContainer.classList.add('suggest-icon', ...themables/* ThemeIcon */.k.asClassNameArray(languages/* CompletionItemKinds */.gX.toIcon(completion.kind)));
        }
        if (completion.tags && completion.tags.indexOf(1 /* CompletionItemTag.Deprecated */) >= 0) {
            labelOptions.extraClasses = (labelOptions.extraClasses || []).concat(['deprecated']);
            labelOptions.matches = [];
        }
        data.iconLabel.setLabel(element.textLabel, undefined, labelOptions);
        if (typeof completion.label === 'string') {
            data.parametersLabel.textContent = '';
            data.detailsLabel.textContent = stripNewLines(completion.detail || '');
            data.root.classList.add('string-label');
        }
        else {
            data.parametersLabel.textContent = stripNewLines(completion.label.detail || '');
            data.detailsLabel.textContent = stripNewLines(completion.label.description || '');
            data.root.classList.remove('string-label');
        }
        if (this._editor.getOption(116 /* EditorOption.suggest */).showInlineDetails) {
            (0,dom/* show */.$Z)(data.detailsLabel);
        }
        else {
            (0,dom/* hide */.Cp)(data.detailsLabel);
        }
        if (canExpandCompletionItem(element)) {
            data.right.classList.add('can-expand-details');
            (0,dom/* show */.$Z)(data.readMore);
            data.readMore.onmousedown = e => {
                e.stopPropagation();
                e.preventDefault();
            };
            data.readMore.onclick = e => {
                e.stopPropagation();
                e.preventDefault();
                this._onDidToggleDetails.fire();
            };
        }
        else {
            data.right.classList.remove('can-expand-details');
            (0,dom/* hide */.Cp)(data.readMore);
            data.readMore.onmousedown = null;
            data.readMore.onclick = null;
        }
    }
    disposeTemplate(templateData) {
        templateData.disposables.dispose();
    }
};
ItemRenderer = suggestWidgetRenderer_decorate([
    suggestWidgetRenderer_param(1, model/* IModelService */.q),
    suggestWidgetRenderer_param(2, language/* ILanguageService */.O),
    suggestWidgetRenderer_param(3, themeService/* IThemeService */.XE)
], ItemRenderer);

function stripNewLines(str) {
    return str.replace(/\r\n|\r|\n/g, '');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js
var defaultStyles = __webpack_require__(18379);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestWidget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestWidget_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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

 // The codicon symbol styles are defined here and must be loaded










 // The codicon symbol colors are defined here and must be loaded to get colors












/**
 * Suggest widget colors
 */
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.background', { dark: colorRegistry/* editorWidgetBackground */.D0T, light: colorRegistry/* editorWidgetBackground */.D0T, hcDark: colorRegistry/* editorWidgetBackground */.D0T, hcLight: colorRegistry/* editorWidgetBackground */.D0T }, nls/* localize */.NC('editorSuggestWidgetBackground', 'Background color of the suggest widget.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.border', { dark: colorRegistry/* editorWidgetBorder */.D1_, light: colorRegistry/* editorWidgetBorder */.D1_, hcDark: colorRegistry/* editorWidgetBorder */.D1_, hcLight: colorRegistry/* editorWidgetBorder */.D1_ }, nls/* localize */.NC('editorSuggestWidgetBorder', 'Border color of the suggest widget.'));
const editorSuggestWidgetForeground = (0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.foreground', { dark: colorRegistry/* editorForeground */.NOs, light: colorRegistry/* editorForeground */.NOs, hcDark: colorRegistry/* editorForeground */.NOs, hcLight: colorRegistry/* editorForeground */.NOs }, nls/* localize */.NC('editorSuggestWidgetForeground', 'Foreground color of the suggest widget.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.selectedForeground', { dark: colorRegistry/* quickInputListFocusForeground */.NPS, light: colorRegistry/* quickInputListFocusForeground */.NPS, hcDark: colorRegistry/* quickInputListFocusForeground */.NPS, hcLight: colorRegistry/* quickInputListFocusForeground */.NPS }, nls/* localize */.NC('editorSuggestWidgetSelectedForeground', 'Foreground color of the selected entry in the suggest widget.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.selectedIconForeground', { dark: colorRegistry/* quickInputListFocusIconForeground */.cbQ, light: colorRegistry/* quickInputListFocusIconForeground */.cbQ, hcDark: colorRegistry/* quickInputListFocusIconForeground */.cbQ, hcLight: colorRegistry/* quickInputListFocusIconForeground */.cbQ }, nls/* localize */.NC('editorSuggestWidgetSelectedIconForeground', 'Icon foreground color of the selected entry in the suggest widget.'));
const editorSuggestWidgetSelectedBackground = (0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.selectedBackground', { dark: colorRegistry/* quickInputListFocusBackground */.Vqd, light: colorRegistry/* quickInputListFocusBackground */.Vqd, hcDark: colorRegistry/* quickInputListFocusBackground */.Vqd, hcLight: colorRegistry/* quickInputListFocusBackground */.Vqd }, nls/* localize */.NC('editorSuggestWidgetSelectedBackground', 'Background color of the selected entry in the suggest widget.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.highlightForeground', { dark: colorRegistry/* listHighlightForeground */.Gwp, light: colorRegistry/* listHighlightForeground */.Gwp, hcDark: colorRegistry/* listHighlightForeground */.Gwp, hcLight: colorRegistry/* listHighlightForeground */.Gwp }, nls/* localize */.NC('editorSuggestWidgetHighlightForeground', 'Color of the match highlights in the suggest widget.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidget.focusHighlightForeground', { dark: colorRegistry/* listFocusHighlightForeground */.PX0, light: colorRegistry/* listFocusHighlightForeground */.PX0, hcDark: colorRegistry/* listFocusHighlightForeground */.PX0, hcLight: colorRegistry/* listFocusHighlightForeground */.PX0 }, nls/* localize */.NC('editorSuggestWidgetFocusHighlightForeground', 'Color of the match highlights in the suggest widget when an item is focused.'));
(0,colorRegistry/* registerColor */.P6G)('editorSuggestWidgetStatus.foreground', { dark: (0,colorRegistry/* transparent */.ZnX)(editorSuggestWidgetForeground, .5), light: (0,colorRegistry/* transparent */.ZnX)(editorSuggestWidgetForeground, .5), hcDark: (0,colorRegistry/* transparent */.ZnX)(editorSuggestWidgetForeground, .5), hcLight: (0,colorRegistry/* transparent */.ZnX)(editorSuggestWidgetForeground, .5) }, nls/* localize */.NC('editorSuggestWidgetStatusForeground', 'Foreground color of the suggest widget status.'));
class PersistedWidgetSize {
    constructor(_service, editor) {
        this._service = _service;
        this._key = `suggestWidget.size/${editor.getEditorType()}/${editor instanceof embeddedCodeEditorWidget/* EmbeddedCodeEditorWidget */.H}`;
    }
    restore() {
        var _a;
        const raw = (_a = this._service.get(this._key, 0 /* StorageScope.PROFILE */)) !== null && _a !== void 0 ? _a : '';
        try {
            const obj = JSON.parse(raw);
            if (dom/* Dimension */.Ro.is(obj)) {
                return dom/* Dimension */.Ro.lift(obj);
            }
        }
        catch (_b) {
            // ignore
        }
        return undefined;
    }
    store(size) {
        this._service.store(this._key, JSON.stringify(size), 0 /* StorageScope.PROFILE */, 1 /* StorageTarget.MACHINE */);
    }
    reset() {
        this._service.remove(this._key, 0 /* StorageScope.PROFILE */);
    }
}
let SuggestWidget = class SuggestWidget {
    constructor(editor, _storageService, _contextKeyService, _themeService, instantiationService) {
        this.editor = editor;
        this._storageService = _storageService;
        this._state = 0 /* State.Hidden */;
        this._isAuto = false;
        this._pendingLayout = new lifecycle/* MutableDisposable */.XK();
        this._pendingShowDetails = new lifecycle/* MutableDisposable */.XK();
        this._ignoreFocusEvents = false;
        this._forceRenderingAbove = false;
        this._explainMode = false;
        this._showTimeout = new common_async/* TimeoutTimer */._F();
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._onDidSelect = new common_event/* PauseableEmitter */.K3();
        this._onDidFocus = new common_event/* PauseableEmitter */.K3();
        this._onDidHide = new common_event/* Emitter */.Q5();
        this._onDidShow = new common_event/* Emitter */.Q5();
        this.onDidSelect = this._onDidSelect.event;
        this.onDidFocus = this._onDidFocus.event;
        this.onDidHide = this._onDidHide.event;
        this.onDidShow = this._onDidShow.event;
        this._onDetailsKeydown = new common_event/* Emitter */.Q5();
        this.onDetailsKeyDown = this._onDetailsKeydown.event;
        this.element = new resizable/* ResizableHTMLElement */.f();
        this.element.domNode.classList.add('editor-widget', 'suggest-widget');
        this._contentWidget = new SuggestContentWidget(this, editor);
        this._persistedSize = new PersistedWidgetSize(_storageService, editor);
        class ResizeState {
            constructor(persistedSize, currentSize, persistHeight = false, persistWidth = false) {
                this.persistedSize = persistedSize;
                this.currentSize = currentSize;
                this.persistHeight = persistHeight;
                this.persistWidth = persistWidth;
            }
        }
        let state;
        this._disposables.add(this.element.onDidWillResize(() => {
            this._contentWidget.lockPreference();
            state = new ResizeState(this._persistedSize.restore(), this.element.size);
        }));
        this._disposables.add(this.element.onDidResize(e => {
            var _a, _b, _c, _d;
            this._resize(e.dimension.width, e.dimension.height);
            if (state) {
                state.persistHeight = state.persistHeight || !!e.north || !!e.south;
                state.persistWidth = state.persistWidth || !!e.east || !!e.west;
            }
            if (!e.done) {
                return;
            }
            if (state) {
                // only store width or height value that have changed and also
                // only store changes that are above a certain threshold
                const { itemHeight, defaultSize } = this.getLayoutInfo();
                const threshold = Math.round(itemHeight / 2);
                let { width, height } = this.element.size;
                if (!state.persistHeight || Math.abs(state.currentSize.height - height) <= threshold) {
                    height = (_b = (_a = state.persistedSize) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : defaultSize.height;
                }
                if (!state.persistWidth || Math.abs(state.currentSize.width - width) <= threshold) {
                    width = (_d = (_c = state.persistedSize) === null || _c === void 0 ? void 0 : _c.width) !== null && _d !== void 0 ? _d : defaultSize.width;
                }
                this._persistedSize.store(new dom/* Dimension */.Ro(width, height));
            }
            // reset working state
            this._contentWidget.unlockPreference();
            state = undefined;
        }));
        this._messageElement = dom/* append */.R3(this.element.domNode, dom.$('.message'));
        this._listElement = dom/* append */.R3(this.element.domNode, dom.$('.tree'));
        const details = instantiationService.createInstance(SuggestDetailsWidget, this.editor);
        details.onDidClose(this.toggleDetails, this, this._disposables);
        this._details = new SuggestDetailsOverlay(details, this.editor);
        const applyIconStyle = () => this.element.domNode.classList.toggle('no-icons', !this.editor.getOption(116 /* EditorOption.suggest */).showIcons);
        applyIconStyle();
        const renderer = instantiationService.createInstance(ItemRenderer, this.editor);
        this._disposables.add(renderer);
        this._disposables.add(renderer.onDidToggleDetails(() => this.toggleDetails()));
        this._list = new listWidget/* List */.aV('SuggestWidget', this._listElement, {
            getHeight: (_element) => this.getLayoutInfo().itemHeight,
            getTemplateId: (_element) => 'suggestion'
        }, [renderer], {
            alwaysConsumeMouseWheel: true,
            useShadows: false,
            mouseSupport: false,
            multipleSelectionSupport: false,
            accessibilityProvider: {
                getRole: () => 'option',
                getWidgetAriaLabel: () => nls/* localize */.NC('suggest', "Suggest"),
                getWidgetRole: () => 'listbox',
                getAriaLabel: (item) => {
                    let label = item.textLabel;
                    if (typeof item.completion.label !== 'string') {
                        const { detail, description } = item.completion.label;
                        if (detail && description) {
                            label = nls/* localize */.NC('label.full', '{0} {1}, {2}', label, detail, description);
                        }
                        else if (detail) {
                            label = nls/* localize */.NC('label.detail', '{0} {1}', label, detail);
                        }
                        else if (description) {
                            label = nls/* localize */.NC('label.desc', '{0}, {1}', label, description);
                        }
                    }
                    if (!item.isResolved || !this._isDetailsVisible()) {
                        return label;
                    }
                    const { documentation, detail } = item.completion;
                    const docs = strings/* format */.WU('{0}{1}', detail || '', documentation ? (typeof documentation === 'string' ? documentation : documentation.value) : '');
                    return nls/* localize */.NC('ariaCurrenttSuggestionReadDetails', "{0}, docs: {1}", label, docs);
                },
            }
        });
        this._list.style((0,defaultStyles/* getListStyles */.TU)({
            listInactiveFocusBackground: editorSuggestWidgetSelectedBackground,
            listInactiveFocusOutline: colorRegistry/* activeContrastBorder */.xL1
        }));
        this._status = instantiationService.createInstance(SuggestWidgetStatus, this.element.domNode, browser_suggest/* suggestWidgetStatusbarMenu */.GI);
        const applyStatusBarStyle = () => this.element.domNode.classList.toggle('with-status-bar', this.editor.getOption(116 /* EditorOption.suggest */).showStatusBar);
        applyStatusBarStyle();
        this._disposables.add(_themeService.onDidColorThemeChange(t => this._onThemeChange(t)));
        this._onThemeChange(_themeService.getColorTheme());
        this._disposables.add(this._list.onMouseDown(e => this._onListMouseDownOrTap(e)));
        this._disposables.add(this._list.onTap(e => this._onListMouseDownOrTap(e)));
        this._disposables.add(this._list.onDidChangeSelection(e => this._onListSelection(e)));
        this._disposables.add(this._list.onDidChangeFocus(e => this._onListFocus(e)));
        this._disposables.add(this.editor.onDidChangeCursorSelection(() => this._onCursorSelectionChanged()));
        this._disposables.add(this.editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(116 /* EditorOption.suggest */)) {
                applyStatusBarStyle();
                applyIconStyle();
            }
        }));
        this._ctxSuggestWidgetVisible = browser_suggest/* Context */._y.Visible.bindTo(_contextKeyService);
        this._ctxSuggestWidgetDetailsVisible = browser_suggest/* Context */._y.DetailsVisible.bindTo(_contextKeyService);
        this._ctxSuggestWidgetMultipleSuggestions = browser_suggest/* Context */._y.MultipleSuggestions.bindTo(_contextKeyService);
        this._ctxSuggestWidgetHasFocusedSuggestion = browser_suggest/* Context */._y.HasFocusedSuggestion.bindTo(_contextKeyService);
        this._disposables.add(dom/* addStandardDisposableListener */.mu(this._details.widget.domNode, 'keydown', e => {
            this._onDetailsKeydown.fire(e);
        }));
        this._disposables.add(this.editor.onMouseDown((e) => this._onEditorMouseDown(e)));
    }
    dispose() {
        var _a;
        this._details.widget.dispose();
        this._details.dispose();
        this._list.dispose();
        this._status.dispose();
        this._disposables.dispose();
        (_a = this._loadingTimeout) === null || _a === void 0 ? void 0 : _a.dispose();
        this._pendingLayout.dispose();
        this._pendingShowDetails.dispose();
        this._showTimeout.dispose();
        this._contentWidget.dispose();
        this.element.dispose();
    }
    _onEditorMouseDown(mouseEvent) {
        if (this._details.widget.domNode.contains(mouseEvent.target.element)) {
            // Clicking inside details
            this._details.widget.domNode.focus();
        }
        else {
            // Clicking outside details and inside suggest
            if (this.element.domNode.contains(mouseEvent.target.element)) {
                this.editor.focus();
            }
        }
    }
    _onCursorSelectionChanged() {
        if (this._state !== 0 /* State.Hidden */) {
            this._contentWidget.layout();
        }
    }
    _onListMouseDownOrTap(e) {
        if (typeof e.element === 'undefined' || typeof e.index === 'undefined') {
            return;
        }
        // prevent stealing browser focus from the editor
        e.browserEvent.preventDefault();
        e.browserEvent.stopPropagation();
        this._select(e.element, e.index);
    }
    _onListSelection(e) {
        if (e.elements.length) {
            this._select(e.elements[0], e.indexes[0]);
        }
    }
    _select(item, index) {
        const completionModel = this._completionModel;
        if (completionModel) {
            this._onDidSelect.fire({ item, index, model: completionModel });
            this.editor.focus();
        }
    }
    _onThemeChange(theme) {
        this._details.widget.borderWidth = (0,common_theme/* isHighContrast */.c3)(theme.type) ? 2 : 1;
    }
    _onListFocus(e) {
        var _a;
        if (this._ignoreFocusEvents) {
            return;
        }
        if (!e.elements.length) {
            if (this._currentSuggestionDetails) {
                this._currentSuggestionDetails.cancel();
                this._currentSuggestionDetails = undefined;
                this._focusedItem = undefined;
            }
            this.editor.setAriaOptions({ activeDescendant: undefined });
            this._ctxSuggestWidgetHasFocusedSuggestion.set(false);
            return;
        }
        if (!this._completionModel) {
            return;
        }
        this._ctxSuggestWidgetHasFocusedSuggestion.set(true);
        const item = e.elements[0];
        const index = e.indexes[0];
        if (item !== this._focusedItem) {
            (_a = this._currentSuggestionDetails) === null || _a === void 0 ? void 0 : _a.cancel();
            this._currentSuggestionDetails = undefined;
            this._focusedItem = item;
            this._list.reveal(index);
            this._currentSuggestionDetails = (0,common_async/* createCancelablePromise */.PG)((token) => __awaiter(this, void 0, void 0, function* () {
                const loading = (0,common_async/* disposableTimeout */.Vg)(() => {
                    if (this._isDetailsVisible()) {
                        this.showDetails(true);
                    }
                }, 250);
                const sub = token.onCancellationRequested(() => loading.dispose());
                const result = yield item.resolve(token);
                loading.dispose();
                sub.dispose();
                return result;
            }));
            this._currentSuggestionDetails.then(() => {
                if (index >= this._list.length || item !== this._list.element(index)) {
                    return;
                }
                // item can have extra information, so re-render
                this._ignoreFocusEvents = true;
                this._list.splice(index, 1, [item]);
                this._list.setFocus([index]);
                this._ignoreFocusEvents = false;
                if (this._isDetailsVisible()) {
                    this.showDetails(false);
                }
                else {
                    this.element.domNode.classList.remove('docs-side');
                }
                this.editor.setAriaOptions({ activeDescendant: getAriaId(index) });
            }).catch(errors/* onUnexpectedError */.dL);
        }
        // emit an event
        this._onDidFocus.fire({ item, index, model: this._completionModel });
    }
    _setState(state) {
        if (this._state === state) {
            return;
        }
        this._state = state;
        this.element.domNode.classList.toggle('frozen', state === 4 /* State.Frozen */);
        this.element.domNode.classList.remove('message');
        switch (state) {
            case 0 /* State.Hidden */:
                dom/* hide */.Cp(this._messageElement, this._listElement, this._status.element);
                this._details.hide(true);
                this._status.hide();
                this._contentWidget.hide();
                this._ctxSuggestWidgetVisible.reset();
                this._ctxSuggestWidgetMultipleSuggestions.reset();
                this._ctxSuggestWidgetHasFocusedSuggestion.reset();
                this._showTimeout.cancel();
                this.element.domNode.classList.remove('visible');
                this._list.splice(0, this._list.length);
                this._focusedItem = undefined;
                this._cappedHeight = undefined;
                this._explainMode = false;
                break;
            case 1 /* State.Loading */:
                this.element.domNode.classList.add('message');
                this._messageElement.textContent = SuggestWidget.LOADING_MESSAGE;
                dom/* hide */.Cp(this._listElement, this._status.element);
                dom/* show */.$Z(this._messageElement);
                this._details.hide();
                this._show();
                this._focusedItem = undefined;
                break;
            case 2 /* State.Empty */:
                this.element.domNode.classList.add('message');
                this._messageElement.textContent = SuggestWidget.NO_SUGGESTIONS_MESSAGE;
                dom/* hide */.Cp(this._listElement, this._status.element);
                dom/* show */.$Z(this._messageElement);
                this._details.hide();
                this._show();
                this._focusedItem = undefined;
                break;
            case 3 /* State.Open */:
                dom/* hide */.Cp(this._messageElement);
                dom/* show */.$Z(this._listElement, this._status.element);
                this._show();
                break;
            case 4 /* State.Frozen */:
                dom/* hide */.Cp(this._messageElement);
                dom/* show */.$Z(this._listElement, this._status.element);
                this._show();
                break;
            case 5 /* State.Details */:
                dom/* hide */.Cp(this._messageElement);
                dom/* show */.$Z(this._listElement, this._status.element);
                this._details.show();
                this._show();
                break;
        }
    }
    _show() {
        this._status.show();
        this._contentWidget.show();
        this._layout(this._persistedSize.restore());
        this._ctxSuggestWidgetVisible.set(true);
        this._showTimeout.cancelAndSet(() => {
            this.element.domNode.classList.add('visible');
            this._onDidShow.fire(this);
        }, 100);
    }
    showTriggered(auto, delay) {
        if (this._state !== 0 /* State.Hidden */) {
            return;
        }
        this._contentWidget.setPosition(this.editor.getPosition());
        this._isAuto = !!auto;
        if (!this._isAuto) {
            this._loadingTimeout = (0,common_async/* disposableTimeout */.Vg)(() => this._setState(1 /* State.Loading */), delay);
        }
    }
    showSuggestions(completionModel, selectionIndex, isFrozen, isAuto, noFocus) {
        var _a, _b;
        this._contentWidget.setPosition(this.editor.getPosition());
        (_a = this._loadingTimeout) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this._currentSuggestionDetails) === null || _b === void 0 ? void 0 : _b.cancel();
        this._currentSuggestionDetails = undefined;
        if (this._completionModel !== completionModel) {
            this._completionModel = completionModel;
        }
        if (isFrozen && this._state !== 2 /* State.Empty */ && this._state !== 0 /* State.Hidden */) {
            this._setState(4 /* State.Frozen */);
            return;
        }
        const visibleCount = this._completionModel.items.length;
        const isEmpty = visibleCount === 0;
        this._ctxSuggestWidgetMultipleSuggestions.set(visibleCount > 1);
        if (isEmpty) {
            this._setState(isAuto ? 0 /* State.Hidden */ : 2 /* State.Empty */);
            this._completionModel = undefined;
            return;
        }
        this._focusedItem = undefined;
        // calling list.splice triggers focus event which this widget forwards. That can lead to
        // suggestions being cancelled and the widget being cleared (and hidden). All this happens
        // before revealing and focusing is done which means revealing and focusing will fail when
        // they get run.
        this._onDidFocus.pause();
        this._onDidSelect.pause();
        try {
            this._list.splice(0, this._list.length, this._completionModel.items);
            this._setState(isFrozen ? 4 /* State.Frozen */ : 3 /* State.Open */);
            this._list.reveal(selectionIndex, 0);
            this._list.setFocus(noFocus ? [] : [selectionIndex]);
        }
        finally {
            this._onDidFocus.resume();
            this._onDidSelect.resume();
        }
        this._pendingLayout.value = dom/* runAtThisOrScheduleAtNextAnimationFrame */.lI(() => {
            this._pendingLayout.clear();
            this._layout(this.element.size);
            // Reset focus border
            this._details.widget.domNode.classList.remove('focused');
        });
    }
    focusSelected() {
        if (this._list.length > 0) {
            this._list.setFocus([0]);
        }
    }
    selectNextPage() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 5 /* State.Details */:
                this._details.widget.pageDown();
                return true;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusNextPage();
                return true;
        }
    }
    selectNext() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusNext(1, true);
                return true;
        }
    }
    selectLast() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 5 /* State.Details */:
                this._details.widget.scrollBottom();
                return true;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusLast();
                return true;
        }
    }
    selectPreviousPage() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 5 /* State.Details */:
                this._details.widget.pageUp();
                return true;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusPreviousPage();
                return true;
        }
    }
    selectPrevious() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusPrevious(1, true);
                return false;
        }
    }
    selectFirst() {
        switch (this._state) {
            case 0 /* State.Hidden */:
                return false;
            case 5 /* State.Details */:
                this._details.widget.scrollTop();
                return true;
            case 1 /* State.Loading */:
                return !this._isAuto;
            default:
                this._list.focusFirst();
                return true;
        }
    }
    getFocusedItem() {
        if (this._state !== 0 /* State.Hidden */
            && this._state !== 2 /* State.Empty */
            && this._state !== 1 /* State.Loading */
            && this._completionModel
            && this._list.getFocus().length > 0) {
            return {
                item: this._list.getFocusedElements()[0],
                index: this._list.getFocus()[0],
                model: this._completionModel
            };
        }
        return undefined;
    }
    toggleDetailsFocus() {
        if (this._state === 5 /* State.Details */) {
            this._setState(3 /* State.Open */);
            this._details.widget.domNode.classList.remove('focused');
        }
        else if (this._state === 3 /* State.Open */ && this._isDetailsVisible()) {
            this._setState(5 /* State.Details */);
            this._details.widget.domNode.classList.add('focused');
        }
    }
    toggleDetails() {
        if (this._isDetailsVisible()) {
            // hide details widget
            this._pendingShowDetails.clear();
            this._ctxSuggestWidgetDetailsVisible.set(false);
            this._setDetailsVisible(false);
            this._details.hide();
            this.element.domNode.classList.remove('shows-details');
        }
        else if ((canExpandCompletionItem(this._list.getFocusedElements()[0]) || this._explainMode) && (this._state === 3 /* State.Open */ || this._state === 5 /* State.Details */ || this._state === 4 /* State.Frozen */)) {
            // show details widget (iff possible)
            this._ctxSuggestWidgetDetailsVisible.set(true);
            this._setDetailsVisible(true);
            this.showDetails(false);
        }
    }
    showDetails(loading) {
        this._pendingShowDetails.value = dom/* runAtThisOrScheduleAtNextAnimationFrame */.lI(() => {
            this._pendingShowDetails.clear();
            this._details.show();
            if (loading) {
                this._details.widget.renderLoading();
            }
            else {
                this._details.widget.renderItem(this._list.getFocusedElements()[0], this._explainMode);
            }
            this._positionDetails();
            this.editor.focus();
            this.element.domNode.classList.add('shows-details');
        });
    }
    toggleExplainMode() {
        if (this._list.getFocusedElements()[0]) {
            this._explainMode = !this._explainMode;
            if (!this._isDetailsVisible()) {
                this.toggleDetails();
            }
            else {
                this.showDetails(false);
            }
        }
    }
    resetPersistedSize() {
        this._persistedSize.reset();
    }
    hideWidget() {
        var _a;
        this._pendingLayout.clear();
        this._pendingShowDetails.clear();
        (_a = this._loadingTimeout) === null || _a === void 0 ? void 0 : _a.dispose();
        this._setState(0 /* State.Hidden */);
        this._onDidHide.fire(this);
        this.element.clearSashHoverState();
        // ensure that a reasonable widget height is persisted so that
        // accidential "resize-to-single-items" cases aren't happening
        const dim = this._persistedSize.restore();
        const minPersistedHeight = Math.ceil(this.getLayoutInfo().itemHeight * 4.3);
        if (dim && dim.height < minPersistedHeight) {
            this._persistedSize.store(dim.with(undefined, minPersistedHeight));
        }
    }
    isFrozen() {
        return this._state === 4 /* State.Frozen */;
    }
    _afterRender(position) {
        if (position === null) {
            if (this._isDetailsVisible()) {
                this._details.hide(); //todo@jrieken soft-hide
            }
            return;
        }
        if (this._state === 2 /* State.Empty */ || this._state === 1 /* State.Loading */) {
            // no special positioning when widget isn't showing list
            return;
        }
        if (this._isDetailsVisible()) {
            this._details.show();
        }
        this._positionDetails();
    }
    _layout(size) {
        var _a, _b, _c;
        if (!this.editor.hasModel()) {
            return;
        }
        if (!this.editor.getDomNode()) {
            // happens when running tests
            return;
        }
        const bodyBox = dom/* getClientArea */.D6(document.body);
        const info = this.getLayoutInfo();
        if (!size) {
            size = info.defaultSize;
        }
        let height = size.height;
        let width = size.width;
        // status bar
        this._status.element.style.height = `${info.itemHeight}px`;
        if (this._state === 2 /* State.Empty */ || this._state === 1 /* State.Loading */) {
            // showing a message only
            height = info.itemHeight + info.borderHeight;
            width = info.defaultSize.width / 2;
            this.element.enableSashes(false, false, false, false);
            this.element.minSize = this.element.maxSize = new dom/* Dimension */.Ro(width, height);
            this._contentWidget.setPreference(2 /* ContentWidgetPositionPreference.BELOW */);
        }
        else {
            // showing items
            // width math
            const maxWidth = bodyBox.width - info.borderHeight - 2 * info.horizontalPadding;
            if (width > maxWidth) {
                width = maxWidth;
            }
            const preferredWidth = this._completionModel ? this._completionModel.stats.pLabelLen * info.typicalHalfwidthCharacterWidth : width;
            // height math
            const fullHeight = info.statusBarHeight + this._list.contentHeight + info.borderHeight;
            const minHeight = info.itemHeight + info.statusBarHeight;
            const editorBox = dom/* getDomNodePagePosition */.i(this.editor.getDomNode());
            const cursorBox = this.editor.getScrolledVisiblePosition(this.editor.getPosition());
            const cursorBottom = editorBox.top + cursorBox.top + cursorBox.height;
            const maxHeightBelow = Math.min(bodyBox.height - cursorBottom - info.verticalPadding, fullHeight);
            const availableSpaceAbove = editorBox.top + cursorBox.top - info.verticalPadding;
            const maxHeightAbove = Math.min(availableSpaceAbove, fullHeight);
            let maxHeight = Math.min(Math.max(maxHeightAbove, maxHeightBelow) + info.borderHeight, fullHeight);
            if (height === ((_a = this._cappedHeight) === null || _a === void 0 ? void 0 : _a.capped)) {
                // Restore the old (wanted) height when the current
                // height is capped to fit
                height = this._cappedHeight.wanted;
            }
            if (height < minHeight) {
                height = minHeight;
            }
            if (height > maxHeight) {
                height = maxHeight;
            }
            const forceRenderingAboveRequiredSpace = 150;
            if (height > maxHeightBelow || (this._forceRenderingAbove && availableSpaceAbove > forceRenderingAboveRequiredSpace)) {
                this._contentWidget.setPreference(1 /* ContentWidgetPositionPreference.ABOVE */);
                this.element.enableSashes(true, true, false, false);
                maxHeight = maxHeightAbove;
            }
            else {
                this._contentWidget.setPreference(2 /* ContentWidgetPositionPreference.BELOW */);
                this.element.enableSashes(false, true, true, false);
                maxHeight = maxHeightBelow;
            }
            this.element.preferredSize = new dom/* Dimension */.Ro(preferredWidth, info.defaultSize.height);
            this.element.maxSize = new dom/* Dimension */.Ro(maxWidth, maxHeight);
            this.element.minSize = new dom/* Dimension */.Ro(220, minHeight);
            // Know when the height was capped to fit and remember
            // the wanted height for later. This is required when going
            // left to widen suggestions.
            this._cappedHeight = height === fullHeight
                ? { wanted: (_c = (_b = this._cappedHeight) === null || _b === void 0 ? void 0 : _b.wanted) !== null && _c !== void 0 ? _c : size.height, capped: height }
                : undefined;
        }
        this._resize(width, height);
    }
    _resize(width, height) {
        const { width: maxWidth, height: maxHeight } = this.element.maxSize;
        width = Math.min(maxWidth, width);
        height = Math.min(maxHeight, height);
        const { statusBarHeight } = this.getLayoutInfo();
        this._list.layout(height - statusBarHeight, width);
        this._listElement.style.height = `${height - statusBarHeight}px`;
        this.element.layout(height, width);
        this._contentWidget.layout();
        this._positionDetails();
    }
    _positionDetails() {
        var _a;
        if (this._isDetailsVisible()) {
            this._details.placeAtAnchor(this.element.domNode, ((_a = this._contentWidget.getPosition()) === null || _a === void 0 ? void 0 : _a.preference[0]) === 2 /* ContentWidgetPositionPreference.BELOW */);
        }
    }
    getLayoutInfo() {
        const fontInfo = this.editor.getOption(49 /* EditorOption.fontInfo */);
        const itemHeight = (0,numbers/* clamp */.uZ)(this.editor.getOption(118 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight, 8, 1000);
        const statusBarHeight = !this.editor.getOption(116 /* EditorOption.suggest */).showStatusBar || this._state === 2 /* State.Empty */ || this._state === 1 /* State.Loading */ ? 0 : itemHeight;
        const borderWidth = this._details.widget.borderWidth;
        const borderHeight = 2 * borderWidth;
        return {
            itemHeight,
            statusBarHeight,
            borderWidth,
            borderHeight,
            typicalHalfwidthCharacterWidth: fontInfo.typicalHalfwidthCharacterWidth,
            verticalPadding: 22,
            horizontalPadding: 14,
            defaultSize: new dom/* Dimension */.Ro(430, statusBarHeight + 12 * itemHeight + borderHeight)
        };
    }
    _isDetailsVisible() {
        return this._storageService.getBoolean('expandSuggestionDocs', 0 /* StorageScope.PROFILE */, false);
    }
    _setDetailsVisible(value) {
        this._storageService.store('expandSuggestionDocs', value, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
    }
    forceRenderingAbove() {
        if (!this._forceRenderingAbove) {
            this._forceRenderingAbove = true;
            this._layout(this._persistedSize.restore());
        }
    }
    stopForceRenderingAbove() {
        this._forceRenderingAbove = false;
    }
};
SuggestWidget.LOADING_MESSAGE = nls/* localize */.NC('suggestWidget.loading', "Loading...");
SuggestWidget.NO_SUGGESTIONS_MESSAGE = nls/* localize */.NC('suggestWidget.noSuggestions', "No suggestions.");
SuggestWidget = suggestWidget_decorate([
    suggestWidget_param(1, storage/* IStorageService */.Uy),
    suggestWidget_param(2, contextkey/* IContextKeyService */.i6),
    suggestWidget_param(3, themeService/* IThemeService */.XE),
    suggestWidget_param(4, instantiation/* IInstantiationService */.TG)
], SuggestWidget);

class SuggestContentWidget {
    constructor(_widget, _editor) {
        this._widget = _widget;
        this._editor = _editor;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this._preferenceLocked = false;
        this._added = false;
        this._hidden = false;
    }
    dispose() {
        if (this._added) {
            this._added = false;
            this._editor.removeContentWidget(this);
        }
    }
    getId() {
        return 'editor.widget.suggestWidget';
    }
    getDomNode() {
        return this._widget.element.domNode;
    }
    show() {
        this._hidden = false;
        if (!this._added) {
            this._added = true;
            this._editor.addContentWidget(this);
        }
    }
    hide() {
        if (!this._hidden) {
            this._hidden = true;
            this.layout();
        }
    }
    layout() {
        this._editor.layoutContentWidget(this);
    }
    getPosition() {
        if (this._hidden || !this._position || !this._preference) {
            return null;
        }
        return {
            position: this._position,
            preference: [this._preference]
        };
    }
    beforeRender() {
        const { height, width } = this._widget.element.size;
        const { borderWidth, horizontalPadding } = this._widget.getLayoutInfo();
        return new dom/* Dimension */.Ro(width + 2 * borderWidth + horizontalPadding, height + 2 * borderWidth);
    }
    afterRender(position) {
        this._widget._afterRender(position);
    }
    setPreference(preference) {
        if (!this._preferenceLocked) {
            this._preference = preference;
        }
    }
    lockPreference() {
        this._preferenceLocked = true;
    }
    unlockPreference() {
        this._preferenceLocked = false;
    }
    setPosition(position) {
        this._position = position;
    }
}


/***/ })

}]);