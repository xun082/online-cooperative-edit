"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3a53ca05"],{

/***/ 88116:
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
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29811);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50847);
/* harmony import */ var _base_common_filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90256);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61111);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28935);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56946);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13372);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76584);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7699);
/* harmony import */ var _snippet_browser_snippetParser_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24947);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23330);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3145);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(77783);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81043);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58431);
/* harmony import */ var _platform_history_browser_contextScopedHistoryWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64658);
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
            this._isResolved = true;
        }
    }
    // ---- resolving
    get isResolved() {
        return !!this._isResolved;
    }
    resolve(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._resolveCache) {
                const sub = token.onCancellationRequested(() => {
                    this._resolveCache = undefined;
                    this._isResolved = false;
                });
                this._resolveCache = Promise.resolve(this.provider.resolveCompletionItem(this.completion, token)).then(value => {
                    Object.assign(this.completion, value);
                    this._isResolved = true;
                    sub.dispose();
                }, err => {
                    if ((0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .isCancellationError */ .n2)(err)) {
                        // the IPC queue will reject the request with the
                        // cancellation error -> reset cached
                        this._resolveCache = undefined;
                        this._isResolved = false;
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
        const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G(true);
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
            const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G(true);
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
                    const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_4__/* .StopWatch */ .G(true);
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

/***/ 57730:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SuggestController: function() { return /* binding */ SuggestController; },
  TriggerSuggestAction: function() { return /* binding */ TriggerSuggestAction; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(70385);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/keybindings.js
var keybindings = __webpack_require__(17873);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js
var stopwatch = __webpack_require__(61111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(49427);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(87306);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js
var snippetController2 = __webpack_require__(55809);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetParser.js
var snippetParser = __webpack_require__(24947);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestMemory.js
var suggestMemory = __webpack_require__(57163);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/wordContextKey.js
var wordContextKey = __webpack_require__(54797);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/log/common/log.js
var log = __webpack_require__(28876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggest.js
var suggest = __webpack_require__(88116);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestAlternatives.js
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

let SuggestAlternatives = class SuggestAlternatives {
    constructor(_editor, contextKeyService) {
        this._editor = _editor;
        this._index = 0;
        this._ckOtherSuggestions = SuggestAlternatives.OtherSuggestions.bindTo(contextKeyService);
    }
    dispose() {
        this.reset();
    }
    reset() {
        var _a;
        this._ckOtherSuggestions.reset();
        (_a = this._listener) === null || _a === void 0 ? void 0 : _a.dispose();
        this._model = undefined;
        this._acceptNext = undefined;
        this._ignore = false;
    }
    set({ model, index }, acceptNext) {
        // no suggestions -> nothing to do
        if (model.items.length === 0) {
            this.reset();
            return;
        }
        // no alternative suggestions -> nothing to do
        const nextIndex = SuggestAlternatives._moveIndex(true, model, index);
        if (nextIndex === index) {
            this.reset();
            return;
        }
        this._acceptNext = acceptNext;
        this._model = model;
        this._index = index;
        this._listener = this._editor.onDidChangeCursorPosition(() => {
            if (!this._ignore) {
                this.reset();
            }
        });
        this._ckOtherSuggestions.set(true);
    }
    static _moveIndex(fwd, model, index) {
        let newIndex = index;
        for (let rounds = model.items.length; rounds > 0; rounds--) {
            newIndex = (newIndex + model.items.length + (fwd ? +1 : -1)) % model.items.length;
            if (newIndex === index) {
                break;
            }
            if (!model.items[newIndex].completion.additionalTextEdits) {
                break;
            }
        }
        return newIndex;
    }
    next() {
        this._move(true);
    }
    prev() {
        this._move(false);
    }
    _move(fwd) {
        if (!this._model) {
            // nothing to reason about
            return;
        }
        try {
            this._ignore = true;
            this._index = SuggestAlternatives._moveIndex(fwd, this._model, this._index);
            this._acceptNext({ index: this._index, item: this._model.items[this._index], model: this._model });
        }
        finally {
            this._ignore = false;
        }
    }
};
SuggestAlternatives.OtherSuggestions = new contextkey/* RawContextKey */.uy('hasOtherSuggestions', false);
SuggestAlternatives = __decorate([
    __param(1, contextkey/* IContextKeyService */.i6)
], SuggestAlternatives);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js
var characterClassifier = __webpack_require__(43332);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestCommitCharacters.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class CommitCharacterController {
    constructor(editor, widget, model, accept) {
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._disposables.add(model.onDidSuggest(e => {
            if (e.completionModel.items.length === 0) {
                this.reset();
            }
        }));
        this._disposables.add(model.onDidCancel(e => {
            this.reset();
        }));
        this._disposables.add(widget.onDidShow(() => this._onItem(widget.getFocusedItem())));
        this._disposables.add(widget.onDidFocus(this._onItem, this));
        this._disposables.add(widget.onDidHide(this.reset, this));
        this._disposables.add(editor.onWillType(text => {
            if (this._active && !widget.isFrozen() && model.state !== 0 /* State.Idle */) {
                const ch = text.charCodeAt(text.length - 1);
                if (this._active.acceptCharacters.has(ch) && editor.getOption(0 /* EditorOption.acceptSuggestionOnCommitCharacter */)) {
                    accept(this._active.item);
                }
            }
        }));
    }
    _onItem(selected) {
        if (!selected || !(0,arrays/* isNonEmptyArray */.Of)(selected.item.completion.commitCharacters)) {
            // no item or no commit characters
            this.reset();
            return;
        }
        if (this._active && this._active.item.item === selected.item) {
            // still the same item
            return;
        }
        // keep item and its commit characters
        const acceptCharacters = new characterClassifier/* CharacterSet */.q();
        for (const ch of selected.item.completion.commitCharacters) {
            if (ch.length > 0) {
                acceptCharacters.add(ch.charCodeAt(0));
            }
        }
        this._active = { acceptCharacters, item: selected };
    }
    reset() {
        this._active = undefined;
    }
    dispose() {
        this._disposables.dispose();
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(74980);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorker.js
var editorWorker = __webpack_require__(15130);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/wordDistance.js
var browser_wordDistance = __webpack_require__(4421);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js
var clipboardService = __webpack_require__(90764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js
var telemetry = __webpack_require__(72209);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/completionModel.js
var completionModel = __webpack_require__(67432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(90256);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletionContextKeys.js
var inlineCompletionContextKeys = __webpack_require__(53714);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestModel_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestModel_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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





















class LineContext {
    static shouldAutoTrigger(editor) {
        if (!editor.hasModel()) {
            return false;
        }
        const model = editor.getModel();
        const pos = editor.getPosition();
        model.tokenization.tokenizeIfCheap(pos.lineNumber);
        const word = model.getWordAtPosition(pos);
        if (!word) {
            return false;
        }
        if (word.endColumn !== pos.column &&
            word.startColumn + 1 !== pos.column /* after typing a single character before a word */) {
            return false;
        }
        if (!isNaN(Number(word.word))) {
            return false;
        }
        return true;
    }
    constructor(model, position, triggerOptions) {
        this.leadingLineContent = model.getLineContent(position.lineNumber).substr(0, position.column - 1);
        this.leadingWord = model.getWordUntilPosition(position);
        this.lineNumber = position.lineNumber;
        this.column = position.column;
        this.triggerOptions = triggerOptions;
    }
}
function canShowQuickSuggest(editor, contextKeyService, configurationService) {
    if (!Boolean(contextKeyService.getContextKeyValue(inlineCompletionContextKeys/* InlineCompletionContextKeys */.f.inlineSuggestionVisible.key))) {
        // Allow if there is no inline suggestion.
        return true;
    }
    const suppressSuggestions = contextKeyService.getContextKeyValue(inlineCompletionContextKeys/* InlineCompletionContextKeys */.f.suppressSuggestions.key);
    if (suppressSuggestions !== undefined) {
        return !suppressSuggestions;
    }
    return !editor.getOption(60 /* EditorOption.inlineSuggest */).suppressSuggestions;
}
function canShowSuggestOnTriggerCharacters(editor, contextKeyService, configurationService) {
    if (!Boolean(contextKeyService.getContextKeyValue('inlineSuggestionVisible'))) {
        // Allow if there is no inline suggestion.
        return true;
    }
    const suppressSuggestions = contextKeyService.getContextKeyValue(inlineCompletionContextKeys/* InlineCompletionContextKeys */.f.suppressSuggestions.key);
    if (suppressSuggestions !== undefined) {
        return !suppressSuggestions;
    }
    return !editor.getOption(60 /* EditorOption.inlineSuggest */).suppressSuggestions;
}
let SuggestModel = class SuggestModel {
    constructor(_editor, _editorWorkerService, _clipboardService, _telemetryService, _logService, _contextKeyService, _configurationService, _languageFeaturesService) {
        this._editor = _editor;
        this._editorWorkerService = _editorWorkerService;
        this._clipboardService = _clipboardService;
        this._telemetryService = _telemetryService;
        this._logService = _logService;
        this._contextKeyService = _contextKeyService;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._toDispose = new lifecycle/* DisposableStore */.SL();
        this._triggerCharacterListener = new lifecycle/* DisposableStore */.SL();
        this._triggerQuickSuggest = new common_async/* TimeoutTimer */._F();
        this._triggerState = undefined;
        this._completionDisposables = new lifecycle/* DisposableStore */.SL();
        this._onDidCancel = new common_event/* Emitter */.Q5();
        this._onDidTrigger = new common_event/* Emitter */.Q5();
        this._onDidSuggest = new common_event/* Emitter */.Q5();
        this.onDidCancel = this._onDidCancel.event;
        this.onDidTrigger = this._onDidTrigger.event;
        this.onDidSuggest = this._onDidSuggest.event;
        this._telemetryGate = 0;
        this._currentSelection = this._editor.getSelection() || new selection/* Selection */.Y(1, 1, 1, 1);
        // wire up various listeners
        this._toDispose.add(this._editor.onDidChangeModel(() => {
            this._updateTriggerCharacters();
            this.cancel();
        }));
        this._toDispose.add(this._editor.onDidChangeModelLanguage(() => {
            this._updateTriggerCharacters();
            this.cancel();
        }));
        this._toDispose.add(this._editor.onDidChangeConfiguration(() => {
            this._updateTriggerCharacters();
        }));
        this._toDispose.add(this._languageFeaturesService.completionProvider.onDidChange(() => {
            this._updateTriggerCharacters();
            this._updateActiveSuggestSession();
        }));
        let editorIsComposing = false;
        this._toDispose.add(this._editor.onDidCompositionStart(() => {
            editorIsComposing = true;
        }));
        this._toDispose.add(this._editor.onDidCompositionEnd(() => {
            editorIsComposing = false;
            this._onCompositionEnd();
        }));
        this._toDispose.add(this._editor.onDidChangeCursorSelection(e => {
            // only trigger suggest when the editor isn't composing a character
            if (!editorIsComposing) {
                this._onCursorChange(e);
            }
        }));
        this._toDispose.add(this._editor.onDidChangeModelContent(() => {
            // only filter completions when the editor isn't composing a character
            // allow-any-unicode-next-line
            // e.g. ¨ + u makes ü but just ¨ cannot be used for filtering
            if (!editorIsComposing && this._triggerState !== undefined) {
                this._refilterCompletionItems();
            }
        }));
        this._updateTriggerCharacters();
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this._triggerCharacterListener);
        (0,lifecycle/* dispose */.B9)([this._onDidCancel, this._onDidSuggest, this._onDidTrigger, this._triggerQuickSuggest]);
        this._toDispose.dispose();
        this._completionDisposables.dispose();
        this.cancel();
    }
    _updateTriggerCharacters() {
        this._triggerCharacterListener.clear();
        if (this._editor.getOption(88 /* EditorOption.readOnly */)
            || !this._editor.hasModel()
            || !this._editor.getOption(117 /* EditorOption.suggestOnTriggerCharacters */)) {
            return;
        }
        const supportsByTriggerCharacter = new Map();
        for (const support of this._languageFeaturesService.completionProvider.all(this._editor.getModel())) {
            for (const ch of support.triggerCharacters || []) {
                let set = supportsByTriggerCharacter.get(ch);
                if (!set) {
                    set = new Set();
                    set.add((0,suggest/* getSnippetSuggestSupport */.ZJ)());
                    supportsByTriggerCharacter.set(ch, set);
                }
                set.add(support);
            }
        }
        const checkTriggerCharacter = (text) => {
            var _a;
            if (!canShowSuggestOnTriggerCharacters(this._editor, this._contextKeyService, this._configurationService)) {
                return;
            }
            if (LineContext.shouldAutoTrigger(this._editor)) {
                // don't trigger by trigger characters when this is a case for quick suggest
                return;
            }
            if (!text) {
                // came here from the compositionEnd-event
                const position = this._editor.getPosition();
                const model = this._editor.getModel();
                text = model.getLineContent(position.lineNumber).substr(0, position.column - 1);
            }
            let lastChar = '';
            if ((0,strings/* isLowSurrogate */.YK)(text.charCodeAt(text.length - 1))) {
                if ((0,strings/* isHighSurrogate */.ZG)(text.charCodeAt(text.length - 2))) {
                    lastChar = text.substr(text.length - 2);
                }
            }
            else {
                lastChar = text.charAt(text.length - 1);
            }
            const supports = supportsByTriggerCharacter.get(lastChar);
            if (supports) {
                // keep existing items that where not computed by the
                // supports/providers that want to trigger now
                const providerItemsToReuse = new Map();
                if (this._completionModel) {
                    for (const [provider, items] of this._completionModel.getItemsByProvider()) {
                        if (!supports.has(provider)) {
                            providerItemsToReuse.set(provider, items);
                        }
                    }
                }
                this.trigger({
                    auto: true,
                    triggerKind: 1 /* CompletionTriggerKind.TriggerCharacter */,
                    triggerCharacter: lastChar,
                    retrigger: Boolean(this._completionModel),
                    clipboardText: (_a = this._completionModel) === null || _a === void 0 ? void 0 : _a.clipboardText,
                    completionOptions: { providerFilter: supports, providerItemsToReuse }
                });
            }
        };
        this._triggerCharacterListener.add(this._editor.onDidType(checkTriggerCharacter));
        this._triggerCharacterListener.add(this._editor.onDidCompositionEnd(() => checkTriggerCharacter()));
    }
    // --- trigger/retrigger/cancel suggest
    get state() {
        if (!this._triggerState) {
            return 0 /* State.Idle */;
        }
        else if (!this._triggerState.auto) {
            return 1 /* State.Manual */;
        }
        else {
            return 2 /* State.Auto */;
        }
    }
    cancel(retrigger = false) {
        var _a;
        if (this._triggerState !== undefined) {
            this._triggerQuickSuggest.cancel();
            (_a = this._requestToken) === null || _a === void 0 ? void 0 : _a.cancel();
            this._requestToken = undefined;
            this._triggerState = undefined;
            this._completionModel = undefined;
            this._context = undefined;
            this._onDidCancel.fire({ retrigger });
        }
    }
    clear() {
        this._completionDisposables.clear();
    }
    _updateActiveSuggestSession() {
        if (this._triggerState !== undefined) {
            if (!this._editor.hasModel() || !this._languageFeaturesService.completionProvider.has(this._editor.getModel())) {
                this.cancel();
            }
            else {
                this.trigger({ auto: this._triggerState.auto, retrigger: true });
            }
        }
    }
    _onCursorChange(e) {
        if (!this._editor.hasModel()) {
            return;
        }
        const prevSelection = this._currentSelection;
        this._currentSelection = this._editor.getSelection();
        if (!e.selection.isEmpty()
            || (e.reason !== 0 /* CursorChangeReason.NotSet */ && e.reason !== 3 /* CursorChangeReason.Explicit */)
            || (e.source !== 'keyboard' && e.source !== 'deleteLeft')) {
            // Early exit if nothing needs to be done!
            // Leave some form of early exit check here if you wish to continue being a cursor position change listener ;)
            this.cancel();
            return;
        }
        if (this._triggerState === undefined && e.reason === 0 /* CursorChangeReason.NotSet */) {
            if (prevSelection.containsRange(this._currentSelection) || prevSelection.getEndPosition().isBeforeOrEqual(this._currentSelection.getPosition())) {
                // cursor did move RIGHT due to typing -> trigger quick suggest
                this._doTriggerQuickSuggest();
            }
        }
        else if (this._triggerState !== undefined && e.reason === 3 /* CursorChangeReason.Explicit */) {
            // suggest is active and something like cursor keys are used to move
            // the cursor. this means we can refilter at the new position
            this._refilterCompletionItems();
        }
    }
    _onCompositionEnd() {
        // trigger or refilter when composition ends
        if (this._triggerState === undefined) {
            this._doTriggerQuickSuggest();
        }
        else {
            this._refilterCompletionItems();
        }
    }
    _doTriggerQuickSuggest() {
        var _a;
        if (suggest/* QuickSuggestionsOptions */.tG.isAllOff(this._editor.getOption(86 /* EditorOption.quickSuggestions */))) {
            // not enabled
            return;
        }
        if (this._editor.getOption(114 /* EditorOption.suggest */).snippetsPreventQuickSuggestions && ((_a = snippetController2.SnippetController2.get(this._editor)) === null || _a === void 0 ? void 0 : _a.isInSnippet())) {
            // no quick suggestion when in snippet mode
            return;
        }
        this.cancel();
        this._triggerQuickSuggest.cancelAndSet(() => {
            if (this._triggerState !== undefined) {
                return;
            }
            if (!LineContext.shouldAutoTrigger(this._editor)) {
                return;
            }
            if (!this._editor.hasModel() || !this._editor.hasWidgetFocus()) {
                return;
            }
            const model = this._editor.getModel();
            const pos = this._editor.getPosition();
            // validate enabled now
            const config = this._editor.getOption(86 /* EditorOption.quickSuggestions */);
            if (suggest/* QuickSuggestionsOptions */.tG.isAllOff(config)) {
                return;
            }
            if (!suggest/* QuickSuggestionsOptions */.tG.isAllOn(config)) {
                // Check the type of the token that triggered this
                model.tokenization.tokenizeIfCheap(pos.lineNumber);
                const lineTokens = model.tokenization.getLineTokens(pos.lineNumber);
                const tokenType = lineTokens.getStandardTokenType(lineTokens.findTokenIndexAtOffset(Math.max(pos.column - 1 - 1, 0)));
                if (suggest/* QuickSuggestionsOptions */.tG.valueFor(config, tokenType) !== 'on') {
                    return;
                }
            }
            if (!canShowQuickSuggest(this._editor, this._contextKeyService, this._configurationService)) {
                // do not trigger quick suggestions if inline suggestions are shown
                return;
            }
            if (!this._languageFeaturesService.completionProvider.has(model)) {
                return;
            }
            // we made it till here -> trigger now
            this.trigger({ auto: true });
        }, this._editor.getOption(87 /* EditorOption.quickSuggestionsDelay */));
    }
    _refilterCompletionItems() {
        (0,types/* assertType */.p_)(this._editor.hasModel());
        (0,types/* assertType */.p_)(this._triggerState !== undefined);
        const model = this._editor.getModel();
        const position = this._editor.getPosition();
        const ctx = new LineContext(model, position, Object.assign(Object.assign({}, this._triggerState), { refilter: true }));
        this._onNewContext(ctx);
    }
    trigger(options) {
        var _a, _b, _c, _d, _e, _f;
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        const ctx = new LineContext(model, this._editor.getPosition(), options);
        // Cancel previous requests, change state & update UI
        this.cancel(options.retrigger);
        this._triggerState = options;
        this._onDidTrigger.fire({ auto: options.auto, shy: (_a = options.shy) !== null && _a !== void 0 ? _a : false, position: this._editor.getPosition() });
        // Capture context when request was sent
        this._context = ctx;
        // Build context for request
        let suggestCtx = { triggerKind: (_b = options.triggerKind) !== null && _b !== void 0 ? _b : 0 /* CompletionTriggerKind.Invoke */ };
        if (options.triggerCharacter) {
            suggestCtx = {
                triggerKind: 1 /* CompletionTriggerKind.TriggerCharacter */,
                triggerCharacter: options.triggerCharacter
            };
        }
        this._requestToken = new cancellation/* CancellationTokenSource */.A();
        // kind filter and snippet sort rules
        const snippetSuggestions = this._editor.getOption(108 /* EditorOption.snippetSuggestions */);
        let snippetSortOrder = 1 /* SnippetSortOrder.Inline */;
        switch (snippetSuggestions) {
            case 'top':
                snippetSortOrder = 0 /* SnippetSortOrder.Top */;
                break;
            // 	↓ that's the default anyways...
            // case 'inline':
            // 	snippetSortOrder = SnippetSortOrder.Inline;
            // 	break;
            case 'bottom':
                snippetSortOrder = 2 /* SnippetSortOrder.Bottom */;
                break;
        }
        const { itemKind: itemKindFilter, showDeprecated } = SuggestModel._createSuggestFilter(this._editor);
        const completionOptions = new suggest/* CompletionOptions */.A9(snippetSortOrder, (_d = (_c = options.completionOptions) === null || _c === void 0 ? void 0 : _c.kindFilter) !== null && _d !== void 0 ? _d : itemKindFilter, (_e = options.completionOptions) === null || _e === void 0 ? void 0 : _e.providerFilter, (_f = options.completionOptions) === null || _f === void 0 ? void 0 : _f.providerItemsToReuse, showDeprecated);
        const wordDistance = browser_wordDistance/* WordDistance */.K.create(this._editorWorkerService, this._editor);
        const completions = (0,suggest/* provideSuggestionItems */.kL)(this._languageFeaturesService.completionProvider, model, this._editor.getPosition(), completionOptions, suggestCtx, this._requestToken.token);
        Promise.all([completions, wordDistance]).then(([completions, wordDistance]) => __awaiter(this, void 0, void 0, function* () {
            var _g;
            (_g = this._requestToken) === null || _g === void 0 ? void 0 : _g.dispose();
            if (!this._editor.hasModel()) {
                return;
            }
            let clipboardText = options === null || options === void 0 ? void 0 : options.clipboardText;
            if (!clipboardText && completions.needsClipboard) {
                clipboardText = yield this._clipboardService.readText();
            }
            if (this._triggerState === undefined) {
                return;
            }
            const model = this._editor.getModel();
            // const items = completions.items;
            // if (existing) {
            // 	const cmpFn = getSuggestionComparator(snippetSortOrder);
            // 	items = items.concat(existing.items).sort(cmpFn);
            // }
            const ctx = new LineContext(model, this._editor.getPosition(), options);
            const fuzzySearchOptions = Object.assign(Object.assign({}, filters/* FuzzyScoreOptions */.mX.default), { firstMatchCanBeWeak: !this._editor.getOption(114 /* EditorOption.suggest */).matchOnWordStartOnly });
            this._completionModel = new completionModel/* CompletionModel */._(completions.items, this._context.column, {
                leadingLineContent: ctx.leadingLineContent,
                characterCountDelta: ctx.column - this._context.column
            }, wordDistance, this._editor.getOption(114 /* EditorOption.suggest */), this._editor.getOption(108 /* EditorOption.snippetSuggestions */), fuzzySearchOptions, clipboardText);
            // store containers so that they can be disposed later
            this._completionDisposables.add(completions.disposable);
            this._onNewContext(ctx);
            // finally report telemetry about durations
            this._reportDurationsTelemetry(completions.durations);
        })).catch(errors/* onUnexpectedError */.dL);
    }
    _reportDurationsTelemetry(durations) {
        if (this._telemetryGate++ % 230 !== 0) {
            return;
        }
        setTimeout(() => {
            this._telemetryService.publicLog2('suggest.durations.json', { data: JSON.stringify(durations) });
            this._logService.debug('suggest.durations.json', durations);
        });
    }
    static _createSuggestFilter(editor) {
        // kind filter and snippet sort rules
        const result = new Set();
        // snippet setting
        const snippetSuggestions = editor.getOption(108 /* EditorOption.snippetSuggestions */);
        if (snippetSuggestions === 'none') {
            result.add(27 /* CompletionItemKind.Snippet */);
        }
        // type setting
        const suggestOptions = editor.getOption(114 /* EditorOption.suggest */);
        if (!suggestOptions.showMethods) {
            result.add(0 /* CompletionItemKind.Method */);
        }
        if (!suggestOptions.showFunctions) {
            result.add(1 /* CompletionItemKind.Function */);
        }
        if (!suggestOptions.showConstructors) {
            result.add(2 /* CompletionItemKind.Constructor */);
        }
        if (!suggestOptions.showFields) {
            result.add(3 /* CompletionItemKind.Field */);
        }
        if (!suggestOptions.showVariables) {
            result.add(4 /* CompletionItemKind.Variable */);
        }
        if (!suggestOptions.showClasses) {
            result.add(5 /* CompletionItemKind.Class */);
        }
        if (!suggestOptions.showStructs) {
            result.add(6 /* CompletionItemKind.Struct */);
        }
        if (!suggestOptions.showInterfaces) {
            result.add(7 /* CompletionItemKind.Interface */);
        }
        if (!suggestOptions.showModules) {
            result.add(8 /* CompletionItemKind.Module */);
        }
        if (!suggestOptions.showProperties) {
            result.add(9 /* CompletionItemKind.Property */);
        }
        if (!suggestOptions.showEvents) {
            result.add(10 /* CompletionItemKind.Event */);
        }
        if (!suggestOptions.showOperators) {
            result.add(11 /* CompletionItemKind.Operator */);
        }
        if (!suggestOptions.showUnits) {
            result.add(12 /* CompletionItemKind.Unit */);
        }
        if (!suggestOptions.showValues) {
            result.add(13 /* CompletionItemKind.Value */);
        }
        if (!suggestOptions.showConstants) {
            result.add(14 /* CompletionItemKind.Constant */);
        }
        if (!suggestOptions.showEnums) {
            result.add(15 /* CompletionItemKind.Enum */);
        }
        if (!suggestOptions.showEnumMembers) {
            result.add(16 /* CompletionItemKind.EnumMember */);
        }
        if (!suggestOptions.showKeywords) {
            result.add(17 /* CompletionItemKind.Keyword */);
        }
        if (!suggestOptions.showWords) {
            result.add(18 /* CompletionItemKind.Text */);
        }
        if (!suggestOptions.showColors) {
            result.add(19 /* CompletionItemKind.Color */);
        }
        if (!suggestOptions.showFiles) {
            result.add(20 /* CompletionItemKind.File */);
        }
        if (!suggestOptions.showReferences) {
            result.add(21 /* CompletionItemKind.Reference */);
        }
        if (!suggestOptions.showColors) {
            result.add(22 /* CompletionItemKind.Customcolor */);
        }
        if (!suggestOptions.showFolders) {
            result.add(23 /* CompletionItemKind.Folder */);
        }
        if (!suggestOptions.showTypeParameters) {
            result.add(24 /* CompletionItemKind.TypeParameter */);
        }
        if (!suggestOptions.showSnippets) {
            result.add(27 /* CompletionItemKind.Snippet */);
        }
        if (!suggestOptions.showUsers) {
            result.add(25 /* CompletionItemKind.User */);
        }
        if (!suggestOptions.showIssues) {
            result.add(26 /* CompletionItemKind.Issue */);
        }
        return { itemKind: result, showDeprecated: suggestOptions.showDeprecated };
    }
    _onNewContext(ctx) {
        if (!this._context) {
            // happens when 24x7 IntelliSense is enabled and still in its delay
            return;
        }
        if (ctx.lineNumber !== this._context.lineNumber) {
            // e.g. happens when pressing Enter while IntelliSense is computed
            this.cancel();
            return;
        }
        if ((0,strings/* getLeadingWhitespace */.V8)(ctx.leadingLineContent) !== (0,strings/* getLeadingWhitespace */.V8)(this._context.leadingLineContent)) {
            // cancel IntelliSense when line start changes
            // happens when the current word gets outdented
            this.cancel();
            return;
        }
        if (ctx.column < this._context.column) {
            // typed -> moved cursor LEFT -> retrigger if still on a word
            if (ctx.leadingWord.word) {
                this.trigger({ auto: this._context.triggerOptions.auto, retrigger: true });
            }
            else {
                this.cancel();
            }
            return;
        }
        if (!this._completionModel) {
            // happens when IntelliSense is not yet computed
            return;
        }
        if (ctx.leadingWord.word.length !== 0 && ctx.leadingWord.startColumn > this._context.leadingWord.startColumn) {
            // started a new word while IntelliSense shows -> retrigger but reuse all items that we currently have
            const shouldAutoTrigger = LineContext.shouldAutoTrigger(this._editor);
            if (shouldAutoTrigger && this._context) {
                // shouldAutoTrigger forces tokenization, which can cause pending cursor change events to be emitted, which can cause
                // suggestions to be cancelled, which causes `this._context` to be undefined
                const map = this._completionModel.getItemsByProvider();
                this.trigger({
                    auto: this._context.triggerOptions.auto,
                    retrigger: true,
                    clipboardText: this._completionModel.clipboardText,
                    completionOptions: { providerItemsToReuse: map }
                });
            }
            return;
        }
        if (ctx.column > this._context.column && this._completionModel.getIncompleteProvider().size > 0 && ctx.leadingWord.word.length !== 0) {
            // typed -> moved cursor RIGHT & incomple model & still on a word -> retrigger
            const providerItemsToReuse = new Map();
            const providerFilter = new Set();
            for (const [provider, items] of this._completionModel.getItemsByProvider()) {
                if (items.length > 0 && items[0].container.incomplete) {
                    providerFilter.add(provider);
                }
                else {
                    providerItemsToReuse.set(provider, items);
                }
            }
            this.trigger({
                auto: this._context.triggerOptions.auto,
                triggerKind: 2 /* CompletionTriggerKind.TriggerForIncompleteCompletions */,
                retrigger: true,
                clipboardText: this._completionModel.clipboardText,
                completionOptions: { providerFilter, providerItemsToReuse }
            });
        }
        else {
            // typed -> moved cursor RIGHT -> update UI
            const oldLineContext = this._completionModel.lineContext;
            let isFrozen = false;
            this._completionModel.lineContext = {
                leadingLineContent: ctx.leadingLineContent,
                characterCountDelta: ctx.column - this._context.column
            };
            if (this._completionModel.items.length === 0) {
                const shouldAutoTrigger = LineContext.shouldAutoTrigger(this._editor);
                if (!this._context) {
                    // shouldAutoTrigger forces tokenization, which can cause pending cursor change events to be emitted, which can cause
                    // suggestions to be cancelled, which causes `this._context` to be undefined
                    this.cancel();
                    return;
                }
                if (shouldAutoTrigger && this._context.leadingWord.endColumn < ctx.leadingWord.startColumn) {
                    // retrigger when heading into a new word
                    this.trigger({ auto: this._context.triggerOptions.auto, retrigger: true });
                    return;
                }
                if (!this._context.triggerOptions.auto) {
                    // freeze when IntelliSense was manually requested
                    this._completionModel.lineContext = oldLineContext;
                    isFrozen = this._completionModel.items.length > 0;
                    if (isFrozen && ctx.leadingWord.word.length === 0) {
                        // there were results before but now there aren't
                        // and also we are not on a word anymore -> cancel
                        this.cancel();
                        return;
                    }
                }
                else {
                    // nothing left
                    this.cancel();
                    return;
                }
            }
            this._onDidSuggest.fire({
                completionModel: this._completionModel,
                triggerOptions: ctx.triggerOptions,
                isFrozen,
            });
        }
    }
};
SuggestModel = suggestModel_decorate([
    suggestModel_param(1, editorWorker/* IEditorWorkerService */.p),
    suggestModel_param(2, clipboardService/* IClipboardService */.p),
    suggestModel_param(3, telemetry/* ITelemetryService */.b),
    suggestModel_param(4, log/* ILogService */.VZ),
    suggestModel_param(5, contextkey/* IContextKeyService */.i6),
    suggestModel_param(6, configuration/* IConfigurationService */.Ui),
    suggestModel_param(7, languageFeatures/* ILanguageFeaturesService */.p)
], SuggestModel);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestOvertypingCapturer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class OvertypingCapturer {
    constructor(editor, suggestModel) {
        this._disposables = new lifecycle/* DisposableStore */.SL();
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js + 2 modules
var codiconStyles = __webpack_require__(53481);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js + 2 modules
var listWidget = __webpack_require__(75952);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/numbers.js
var numbers = __webpack_require__(17511);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/media/suggest.css
var media_suggest = __webpack_require__(57333);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget.js
var embeddedCodeEditorWidget = __webpack_require__(44815);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(96653);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js + 2 modules
var menuEntryActionViewItem = __webpack_require__(69163);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(3145);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetStatus.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestWidgetStatus_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestWidgetStatus_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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
SuggestWidgetStatus = suggestWidgetStatus_decorate([
    suggestWidgetStatus_param(2, instantiation/* IInstantiationService */.TG),
    suggestWidgetStatus_param(3, actions/* IMenuService */.co),
    suggestWidgetStatus_param(4, contextkey/* IContextKeyService */.i6)
], SuggestWidgetStatus);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/symbolIcons/browser/symbolIcons.js + 1 modules
var symbolIcons = __webpack_require__(90966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js
var storage = __webpack_require__(81358);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/theme.js
var common_theme = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/resizable/resizable.js
var resizable = __webpack_require__(75770);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 7 modules
var scrollableElement = __webpack_require__(47049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(4950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js + 1 modules
var markdownRenderer = __webpack_require__(99881);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetDetails.js
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
            if (e.hasChanged(48 /* EditorOption.fontInfo */)) {
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
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        const fontFamily = fontInfo.getMassagedFontFamily();
        const fontSize = options.get(115 /* EditorOption.suggestFontSize */) || fontInfo.fontSize;
        const lineHeight = options.get(116 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight;
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
        const lineHeight = this._editor.getOption(116 /* EditorOption.suggestLineHeight */) || this._editor.getOption(48 /* EditorOption.fontInfo */).lineHeight;
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js + 1 modules
var iconLabel_iconLabel = __webpack_require__(27659);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(58606);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/getIconClasses.js
var getIconClasses = __webpack_require__(41717);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/model.js
var model = __webpack_require__(76774);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(21608);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/files/common/files.js
var files = __webpack_require__(68868);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(95153);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidgetRenderer.js
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
            const fontInfo = options.get(48 /* EditorOption.fontInfo */);
            const fontFamily = fontInfo.getMassagedFontFamily();
            const fontFeatureSettings = fontInfo.fontFeatureSettings;
            const fontSize = options.get(115 /* EditorOption.suggestFontSize */) || fontInfo.fontSize;
            const lineHeight = options.get(116 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight;
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
            if (e.hasChanged(48 /* EditorOption.fontInfo */) || e.hasChanged(115 /* EditorOption.suggestFontSize */) || e.hasChanged(116 /* EditorOption.suggestLineHeight */)) {
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
        if (this._editor.getOption(114 /* EditorOption.suggest */).showInlineDetails) {
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js
var defaultStyles = __webpack_require__(89408);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidget.js
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
var suggestWidget_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
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
        const applyIconStyle = () => this.element.domNode.classList.toggle('no-icons', !this.editor.getOption(114 /* EditorOption.suggest */).showIcons);
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
                            label = nls/* localize */.NC('label.full', '{0}{1}, {2}', label, detail, description);
                        }
                        else if (detail) {
                            label = nls/* localize */.NC('label.detail', '{0}{1}', label, detail);
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
        this._status = instantiationService.createInstance(SuggestWidgetStatus, this.element.domNode, suggest/* suggestWidgetStatusbarMenu */.GI);
        const applyStatusBarStyle = () => this.element.domNode.classList.toggle('with-status-bar', this.editor.getOption(114 /* EditorOption.suggest */).showStatusBar);
        applyStatusBarStyle();
        this._disposables.add(_themeService.onDidColorThemeChange(t => this._onThemeChange(t)));
        this._onThemeChange(_themeService.getColorTheme());
        this._disposables.add(this._list.onMouseDown(e => this._onListMouseDownOrTap(e)));
        this._disposables.add(this._list.onTap(e => this._onListMouseDownOrTap(e)));
        this._disposables.add(this._list.onDidChangeSelection(e => this._onListSelection(e)));
        this._disposables.add(this._list.onDidChangeFocus(e => this._onListFocus(e)));
        this._disposables.add(this.editor.onDidChangeCursorSelection(() => this._onCursorSelectionChanged()));
        this._disposables.add(this.editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(114 /* EditorOption.suggest */)) {
                applyStatusBarStyle();
                applyIconStyle();
            }
        }));
        this._ctxSuggestWidgetVisible = suggest/* Context */._y.Visible.bindTo(_contextKeyService);
        this._ctxSuggestWidgetDetailsVisible = suggest/* Context */._y.DetailsVisible.bindTo(_contextKeyService);
        this._ctxSuggestWidgetMultipleSuggestions = suggest/* Context */._y.MultipleSuggestions.bindTo(_contextKeyService);
        this._ctxSuggestWidgetHasFocusedSuggestion = suggest/* Context */._y.HasFocusedSuggestion.bindTo(_contextKeyService);
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
            this._currentSuggestionDetails = (0,common_async/* createCancelablePromise */.PG)((token) => suggestWidget_awaiter(this, void 0, void 0, function* () {
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
        const fontInfo = this.editor.getOption(48 /* EditorOption.fontInfo */);
        const itemHeight = (0,numbers/* clamp */.uZ)(this.editor.getOption(116 /* EditorOption.suggestLineHeight */) || fontInfo.lineHeight, 8, 1000);
        const statusBarHeight = !this.editor.getOption(114 /* EditorOption.suggest */).showStatusBar || this._state === 2 /* State.Empty */ || this._state === 1 /* State.Loading */ ? 0 : itemHeight;
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(8506);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/hash.js
var hash = __webpack_require__(54805);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var suggestController_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var suggestController_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



































// sticky suggest widget which doesn't disappear on focus out and such
const _sticky = false;
class LineSuffix {
    constructor(_model, _position) {
        this._model = _model;
        this._position = _position;
        // spy on what's happening right of the cursor. two cases:
        // 1. end of line -> check that it's still end of line
        // 2. mid of line -> add a marker and compute the delta
        const maxColumn = _model.getLineMaxColumn(_position.lineNumber);
        if (maxColumn !== _position.column) {
            const offset = _model.getOffsetAt(_position);
            const end = _model.getPositionAt(offset + 1);
            this._marker = _model.deltaDecorations([], [{
                    range: range/* Range */.e.fromPositions(_position, end),
                    options: { description: 'suggest-line-suffix', stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */ }
                }]);
        }
    }
    dispose() {
        if (this._marker && !this._model.isDisposed()) {
            this._model.deltaDecorations(this._marker, []);
        }
    }
    delta(position) {
        if (this._model.isDisposed() || this._position.lineNumber !== position.lineNumber) {
            // bail out early if things seems fishy
            return 0;
        }
        // read the marker (in case suggest was triggered at line end) or compare
        // the cursor to the line end.
        if (this._marker) {
            const range = this._model.getDecorationRange(this._marker[0]);
            const end = this._model.getOffsetAt(range.getStartPosition());
            return end - this._model.getOffsetAt(position);
        }
        else {
            return this._model.getLineMaxColumn(position.lineNumber) - position.column;
        }
    }
}
let SuggestController = class SuggestController {
    static get(editor) {
        return editor.getContribution(SuggestController.ID);
    }
    constructor(editor, _memoryService, _commandService, _contextKeyService, _instantiationService, _logService, _telemetryService) {
        this._memoryService = _memoryService;
        this._commandService = _commandService;
        this._contextKeyService = _contextKeyService;
        this._instantiationService = _instantiationService;
        this._logService = _logService;
        this._telemetryService = _telemetryService;
        this._lineSuffix = new lifecycle/* MutableDisposable */.XK();
        this._toDispose = new lifecycle/* DisposableStore */.SL();
        this._selectors = new PriorityRegistry(s => s.priority);
        this._telemetryGate = 0;
        this.editor = editor;
        this.model = _instantiationService.createInstance(SuggestModel, this.editor);
        // default selector
        this._selectors.register({
            priority: 0,
            select: (model, pos, items) => this._memoryService.select(model, pos, items)
        });
        // context key: update insert/replace mode
        const ctxInsertMode = suggest/* Context */._y.InsertMode.bindTo(_contextKeyService);
        ctxInsertMode.set(editor.getOption(114 /* EditorOption.suggest */).insertMode);
        this.model.onDidTrigger(() => ctxInsertMode.set(editor.getOption(114 /* EditorOption.suggest */).insertMode));
        this.widget = this._toDispose.add(new common_async/* IdleValue */.Ue(() => {
            const widget = this._instantiationService.createInstance(SuggestWidget, this.editor);
            this._toDispose.add(widget);
            this._toDispose.add(widget.onDidSelect(item => this._insertSuggestion(item, 0 /* InsertFlags.None */), this));
            // Wire up logic to accept a suggestion on certain characters
            const commitCharacterController = new CommitCharacterController(this.editor, widget, this.model, item => this._insertSuggestion(item, 2 /* InsertFlags.NoAfterUndoStop */));
            this._toDispose.add(commitCharacterController);
            // Wire up makes text edit context key
            const ctxMakesTextEdit = suggest/* Context */._y.MakesTextEdit.bindTo(this._contextKeyService);
            const ctxHasInsertAndReplace = suggest/* Context */._y.HasInsertAndReplaceRange.bindTo(this._contextKeyService);
            const ctxCanResolve = suggest/* Context */._y.CanResolve.bindTo(this._contextKeyService);
            this._toDispose.add((0,lifecycle/* toDisposable */.OF)(() => {
                ctxMakesTextEdit.reset();
                ctxHasInsertAndReplace.reset();
                ctxCanResolve.reset();
            }));
            this._toDispose.add(widget.onDidFocus(({ item }) => {
                // (ctx: makesTextEdit)
                const position = this.editor.getPosition();
                const startColumn = item.editStart.column;
                const endColumn = position.column;
                let value = true;
                if (this.editor.getOption(1 /* EditorOption.acceptSuggestionOnEnter */) === 'smart'
                    && this.model.state === 2 /* State.Auto */
                    && !item.completion.additionalTextEdits
                    && !(item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */)
                    && endColumn - startColumn === item.completion.insertText.length) {
                    const oldText = this.editor.getModel().getValueInRange({
                        startLineNumber: position.lineNumber,
                        startColumn,
                        endLineNumber: position.lineNumber,
                        endColumn
                    });
                    value = oldText !== item.completion.insertText;
                }
                ctxMakesTextEdit.set(value);
                // (ctx: hasInsertAndReplaceRange)
                ctxHasInsertAndReplace.set(!core_position/* Position */.L.equals(item.editInsertEnd, item.editReplaceEnd));
                // (ctx: canResolve)
                ctxCanResolve.set(Boolean(item.provider.resolveCompletionItem) || Boolean(item.completion.documentation) || item.completion.detail !== item.completion.label);
            }));
            this._toDispose.add(widget.onDetailsKeyDown(e => {
                // cmd + c on macOS, ctrl + c on Win / Linux
                if (e.toKeyCodeChord().equals(new keybindings/* KeyCodeChord */.$M(true, false, false, false, 33 /* KeyCode.KeyC */)) ||
                    (platform/* isMacintosh */.dz && e.toKeyCodeChord().equals(new keybindings/* KeyCodeChord */.$M(false, false, false, true, 33 /* KeyCode.KeyC */)))) {
                    e.stopPropagation();
                    return;
                }
                if (!e.toKeyCodeChord().isModifierKey()) {
                    this.editor.focus();
                }
            }));
            return widget;
        }));
        // Wire up text overtyping capture
        this._overtypingCapturer = this._toDispose.add(new common_async/* IdleValue */.Ue(() => {
            return this._toDispose.add(new OvertypingCapturer(this.editor, this.model));
        }));
        this._alternatives = this._toDispose.add(new common_async/* IdleValue */.Ue(() => {
            return this._toDispose.add(new SuggestAlternatives(this.editor, this._contextKeyService));
        }));
        this._toDispose.add(_instantiationService.createInstance(wordContextKey/* WordContextKey */.p, editor));
        this._toDispose.add(this.model.onDidTrigger(e => {
            this.widget.value.showTriggered(e.auto, e.shy ? 250 : 50);
            this._lineSuffix.value = new LineSuffix(this.editor.getModel(), e.position);
        }));
        this._toDispose.add(this.model.onDidSuggest(e => {
            if (e.triggerOptions.shy) {
                return;
            }
            let index = -1;
            for (const selector of this._selectors.itemsOrderedByPriorityDesc) {
                index = selector.select(this.editor.getModel(), this.editor.getPosition(), e.completionModel.items);
                if (index !== -1) {
                    break;
                }
            }
            if (index === -1) {
                index = 0;
            }
            let noFocus = false;
            if (e.triggerOptions.auto) {
                // don't "focus" item when configured to do
                const options = this.editor.getOption(114 /* EditorOption.suggest */);
                if (options.selectionMode === 'never' || options.selectionMode === 'always') {
                    // simple: always or never
                    noFocus = options.selectionMode === 'never';
                }
                else if (options.selectionMode === 'whenTriggerCharacter') {
                    // on with trigger character
                    noFocus = e.triggerOptions.triggerKind !== 1 /* CompletionTriggerKind.TriggerCharacter */;
                }
                else if (options.selectionMode === 'whenQuickSuggestion') {
                    // without trigger character or when refiltering
                    noFocus = e.triggerOptions.triggerKind === 1 /* CompletionTriggerKind.TriggerCharacter */ && !e.triggerOptions.refilter;
                }
            }
            this.widget.value.showSuggestions(e.completionModel, index, e.isFrozen, e.triggerOptions.auto, noFocus);
        }));
        this._toDispose.add(this.model.onDidCancel(e => {
            if (!e.retrigger) {
                this.widget.value.hideWidget();
            }
        }));
        this._toDispose.add(this.editor.onDidBlurEditorWidget(() => {
            if (!_sticky) {
                this.model.cancel();
                this.model.clear();
            }
        }));
        // Manage the acceptSuggestionsOnEnter context key
        const acceptSuggestionsOnEnter = suggest/* Context */._y.AcceptSuggestionsOnEnter.bindTo(_contextKeyService);
        const updateFromConfig = () => {
            const acceptSuggestionOnEnter = this.editor.getOption(1 /* EditorOption.acceptSuggestionOnEnter */);
            acceptSuggestionsOnEnter.set(acceptSuggestionOnEnter === 'on' || acceptSuggestionOnEnter === 'smart');
        };
        this._toDispose.add(this.editor.onDidChangeConfiguration(() => updateFromConfig()));
        updateFromConfig();
    }
    dispose() {
        this._alternatives.dispose();
        this._toDispose.dispose();
        this.widget.dispose();
        this.model.dispose();
        this._lineSuffix.dispose();
    }
    _insertSuggestion(event, flags) {
        if (!event || !event.item) {
            this._alternatives.value.reset();
            this.model.cancel();
            this.model.clear();
            return;
        }
        if (!this.editor.hasModel()) {
            return;
        }
        const snippetController = snippetController2.SnippetController2.get(this.editor);
        if (!snippetController) {
            return;
        }
        const model = this.editor.getModel();
        const modelVersionNow = model.getAlternativeVersionId();
        const { item } = event;
        //
        const tasks = [];
        const cts = new cancellation/* CancellationTokenSource */.A();
        // pushing undo stops *before* additional text edits and
        // *after* the main edit
        if (!(flags & 1 /* InsertFlags.NoBeforeUndoStop */)) {
            this.editor.pushUndoStop();
        }
        // compute overwrite[Before|After] deltas BEFORE applying extra edits
        const info = this.getOverwriteInfo(item, Boolean(flags & 8 /* InsertFlags.AlternativeOverwriteConfig */));
        // keep item in memory
        this._memoryService.memorize(model, this.editor.getPosition(), item);
        if (Array.isArray(item.completion.additionalTextEdits)) {
            // cancel -> stops all listening and closes widget
            this.model.cancel();
            // sync additional edits
            const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this.editor);
            this.editor.executeEdits('suggestController.additionalTextEdits.sync', item.completion.additionalTextEdits.map(edit => editOperation/* EditOperation */.h.replaceMove(range/* Range */.e.lift(edit.range), edit.text)));
            scrollState.restoreRelativeVerticalPositionOfCursor(this.editor);
        }
        else if (!item.isResolved) {
            // async additional edits
            const sw = new stopwatch/* StopWatch */.G(true);
            let position;
            const docListener = model.onDidChangeContent(e => {
                if (e.isFlush) {
                    cts.cancel();
                    docListener.dispose();
                    return;
                }
                for (const change of e.changes) {
                    const thisPosition = range/* Range */.e.getEndPosition(change.range);
                    if (!position || core_position/* Position */.L.isBefore(thisPosition, position)) {
                        position = thisPosition;
                    }
                }
            });
            const oldFlags = flags;
            flags |= 2 /* InsertFlags.NoAfterUndoStop */;
            let didType = false;
            const typeListener = this.editor.onWillType(() => {
                typeListener.dispose();
                didType = true;
                if (!(oldFlags & 2 /* InsertFlags.NoAfterUndoStop */)) {
                    this.editor.pushUndoStop();
                }
            });
            tasks.push(item.resolve(cts.token).then(() => {
                if (!item.completion.additionalTextEdits || cts.token.isCancellationRequested) {
                    return false;
                }
                if (position && item.completion.additionalTextEdits.some(edit => core_position/* Position */.L.isBefore(position, range/* Range */.e.getStartPosition(edit.range)))) {
                    return false;
                }
                if (didType) {
                    this.editor.pushUndoStop();
                }
                const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this.editor);
                this.editor.executeEdits('suggestController.additionalTextEdits.async', item.completion.additionalTextEdits.map(edit => editOperation/* EditOperation */.h.replaceMove(range/* Range */.e.lift(edit.range), edit.text)));
                scrollState.restoreRelativeVerticalPositionOfCursor(this.editor);
                if (didType || !(oldFlags & 2 /* InsertFlags.NoAfterUndoStop */)) {
                    this.editor.pushUndoStop();
                }
                return true;
            }).then(applied => {
                this._logService.trace('[suggest] async resolving of edits DONE (ms, applied?)', sw.elapsed(), applied);
                docListener.dispose();
                typeListener.dispose();
            }));
        }
        let { insertText } = item.completion;
        if (!(item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */)) {
            insertText = snippetParser/* SnippetParser */.Yj.escape(insertText);
        }
        // cancel -> stops all listening and closes widget
        this.model.cancel();
        snippetController.insert(insertText, {
            overwriteBefore: info.overwriteBefore,
            overwriteAfter: info.overwriteAfter,
            undoStopBefore: false,
            undoStopAfter: false,
            adjustWhitespace: !(item.completion.insertTextRules & 1 /* CompletionItemInsertTextRule.KeepWhitespace */),
            clipboardText: event.model.clipboardText,
            overtypingCapturer: this._overtypingCapturer.value
        });
        if (!(flags & 2 /* InsertFlags.NoAfterUndoStop */)) {
            this.editor.pushUndoStop();
        }
        if (item.completion.command) {
            if (item.completion.command.id === TriggerSuggestAction.id) {
                // retigger
                this.model.trigger({ auto: true, retrigger: true });
            }
            else {
                // exec command, done
                tasks.push(this._commandService.executeCommand(item.completion.command.id, ...(item.completion.command.arguments ? [...item.completion.command.arguments] : [])).catch(e => {
                    if (item.completion.extensionId) {
                        (0,errors/* onUnexpectedExternalError */.Cp)(e);
                    }
                    else {
                        (0,errors/* onUnexpectedError */.dL)(e);
                    }
                }));
            }
        }
        if (flags & 4 /* InsertFlags.KeepAlternativeSuggestions */) {
            this._alternatives.value.set(event, next => {
                // cancel resolving of additional edits
                cts.cancel();
                // this is not so pretty. when inserting the 'next'
                // suggestion we undo until we are at the state at
                // which we were before inserting the previous suggestion...
                while (model.canUndo()) {
                    if (modelVersionNow !== model.getAlternativeVersionId()) {
                        model.undo();
                    }
                    this._insertSuggestion(next, 1 /* InsertFlags.NoBeforeUndoStop */ | 2 /* InsertFlags.NoAfterUndoStop */ | (flags & 8 /* InsertFlags.AlternativeOverwriteConfig */ ? 8 /* InsertFlags.AlternativeOverwriteConfig */ : 0));
                    break;
                }
            });
        }
        this._alertCompletionItem(item);
        // clear only now - after all tasks are done
        Promise.all(tasks).finally(() => {
            this._reportSuggestionAcceptedTelemetry(item, model, event);
            this.model.clear();
            cts.dispose();
        });
    }
    _reportSuggestionAcceptedTelemetry(item, model, acceptedSuggestion) {
        var _a;
        if (this._telemetryGate++ % 100 !== 0) {
            return;
        }
        // _debugDisplayName looks like `vscode.css-language-features(/-:)`, where the last bit is the trigger chars
        // normalize it to just the extension ID and lowercase
        const providerId = item.extensionId ? item.extensionId.value : ((_a = acceptedSuggestion.item.provider._debugDisplayName) !== null && _a !== void 0 ? _a : 'unknown').split('(', 1)[0].toLowerCase();
        this._telemetryService.publicLog2('suggest.acceptedSuggestion', {
            providerId,
            kind: item.completion.kind,
            basenameHash: (0,hash/* hash */.vp)((0,resources/* basename */.EZ)(model.uri)).toString(16),
            languageId: model.getLanguageId(),
            fileExtension: (0,resources/* extname */.DZ)(model.uri),
        });
    }
    getOverwriteInfo(item, toggleMode) {
        (0,types/* assertType */.p_)(this.editor.hasModel());
        let replace = this.editor.getOption(114 /* EditorOption.suggest */).insertMode === 'replace';
        if (toggleMode) {
            replace = !replace;
        }
        const overwriteBefore = item.position.column - item.editStart.column;
        const overwriteAfter = (replace ? item.editReplaceEnd.column : item.editInsertEnd.column) - item.position.column;
        const columnDelta = this.editor.getPosition().column - item.position.column;
        const suffixDelta = this._lineSuffix.value ? this._lineSuffix.value.delta(this.editor.getPosition()) : 0;
        return {
            overwriteBefore: overwriteBefore + columnDelta,
            overwriteAfter: overwriteAfter + suffixDelta
        };
    }
    _alertCompletionItem(item) {
        if ((0,arrays/* isNonEmptyArray */.Of)(item.completion.additionalTextEdits)) {
            const msg = nls/* localize */.NC('aria.alert.snippet', "Accepting '{0}' made {1} additional edits", item.textLabel, item.completion.additionalTextEdits.length);
            (0,aria/* alert */.Z9)(msg);
        }
    }
    triggerSuggest(onlyFrom, auto, noFilter) {
        if (this.editor.hasModel()) {
            this.model.trigger({
                auto: auto !== null && auto !== void 0 ? auto : false,
                completionOptions: { providerFilter: onlyFrom, kindFilter: noFilter ? new Set() : undefined }
            });
            this.editor.revealPosition(this.editor.getPosition(), 0 /* ScrollType.Smooth */);
            this.editor.focus();
        }
    }
    triggerSuggestAndAcceptBest(arg) {
        if (!this.editor.hasModel()) {
            return;
        }
        const positionNow = this.editor.getPosition();
        const fallback = () => {
            if (positionNow.equals(this.editor.getPosition())) {
                this._commandService.executeCommand(arg.fallback);
            }
        };
        const makesTextEdit = (item) => {
            if (item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */ || item.completion.additionalTextEdits) {
                // snippet, other editor -> makes edit
                return true;
            }
            const position = this.editor.getPosition();
            const startColumn = item.editStart.column;
            const endColumn = position.column;
            if (endColumn - startColumn !== item.completion.insertText.length) {
                // unequal lengths -> makes edit
                return true;
            }
            const textNow = this.editor.getModel().getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn,
                endLineNumber: position.lineNumber,
                endColumn
            });
            // unequal text -> makes edit
            return textNow !== item.completion.insertText;
        };
        common_event/* Event */.ju.once(this.model.onDidTrigger)(_ => {
            // wait for trigger because only then the cancel-event is trustworthy
            const listener = [];
            common_event/* Event */.ju.any(this.model.onDidTrigger, this.model.onDidCancel)(() => {
                // retrigger or cancel -> try to type default text
                (0,lifecycle/* dispose */.B9)(listener);
                fallback();
            }, undefined, listener);
            this.model.onDidSuggest(({ completionModel }) => {
                (0,lifecycle/* dispose */.B9)(listener);
                if (completionModel.items.length === 0) {
                    fallback();
                    return;
                }
                const index = this._memoryService.select(this.editor.getModel(), this.editor.getPosition(), completionModel.items);
                const item = completionModel.items[index];
                if (!makesTextEdit(item)) {
                    fallback();
                    return;
                }
                this.editor.pushUndoStop();
                this._insertSuggestion({ index, item, model: completionModel }, 4 /* InsertFlags.KeepAlternativeSuggestions */ | 1 /* InsertFlags.NoBeforeUndoStop */ | 2 /* InsertFlags.NoAfterUndoStop */);
            }, undefined, listener);
        });
        this.model.trigger({ auto: false, shy: true });
        this.editor.revealPosition(positionNow, 0 /* ScrollType.Smooth */);
        this.editor.focus();
    }
    acceptSelectedSuggestion(keepAlternativeSuggestions, alternativeOverwriteConfig) {
        const item = this.widget.value.getFocusedItem();
        let flags = 0;
        if (keepAlternativeSuggestions) {
            flags |= 4 /* InsertFlags.KeepAlternativeSuggestions */;
        }
        if (alternativeOverwriteConfig) {
            flags |= 8 /* InsertFlags.AlternativeOverwriteConfig */;
        }
        this._insertSuggestion(item, flags);
    }
    acceptNextSuggestion() {
        this._alternatives.value.next();
    }
    acceptPrevSuggestion() {
        this._alternatives.value.prev();
    }
    cancelSuggestWidget() {
        this.model.cancel();
        this.model.clear();
        this.widget.value.hideWidget();
    }
    focusSuggestion() {
        this.widget.value.focusSelected();
    }
    selectNextSuggestion() {
        this.widget.value.selectNext();
    }
    selectNextPageSuggestion() {
        this.widget.value.selectNextPage();
    }
    selectLastSuggestion() {
        this.widget.value.selectLast();
    }
    selectPrevSuggestion() {
        this.widget.value.selectPrevious();
    }
    selectPrevPageSuggestion() {
        this.widget.value.selectPreviousPage();
    }
    selectFirstSuggestion() {
        this.widget.value.selectFirst();
    }
    toggleSuggestionDetails() {
        this.widget.value.toggleDetails();
    }
    toggleExplainMode() {
        this.widget.value.toggleExplainMode();
    }
    toggleSuggestionFocus() {
        this.widget.value.toggleDetailsFocus();
    }
    resetWidgetSize() {
        this.widget.value.resetPersistedSize();
    }
    forceRenderingAbove() {
        this.widget.value.forceRenderingAbove();
    }
    stopForceRenderingAbove() {
        if (!this.widget.isInitialized) {
            // This method has no effect if the widget is not initialized yet.
            return;
        }
        this.widget.value.stopForceRenderingAbove();
    }
    registerSelector(selector) {
        return this._selectors.register(selector);
    }
};
SuggestController.ID = 'editor.contrib.suggestController';
SuggestController = suggestController_decorate([
    suggestController_param(1, suggestMemory/* ISuggestMemoryService */.Fh),
    suggestController_param(2, commands/* ICommandService */.H),
    suggestController_param(3, contextkey/* IContextKeyService */.i6),
    suggestController_param(4, instantiation/* IInstantiationService */.TG),
    suggestController_param(5, log/* ILogService */.VZ),
    suggestController_param(6, telemetry/* ITelemetryService */.b)
], SuggestController);
class PriorityRegistry {
    constructor(prioritySelector) {
        this.prioritySelector = prioritySelector;
        this._items = new Array();
    }
    register(value) {
        if (this._items.indexOf(value) !== -1) {
            throw new Error('Value is already registered');
        }
        this._items.push(value);
        this._items.sort((s1, s2) => this.prioritySelector(s2) - this.prioritySelector(s1));
        return {
            dispose: () => {
                const idx = this._items.indexOf(value);
                if (idx >= 0) {
                    this._items.splice(idx, 1);
                }
            }
        };
    }
    get itemsOrderedByPriorityDesc() {
        return this._items;
    }
}
class TriggerSuggestAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: TriggerSuggestAction.id,
            label: nls/* localize */.NC('suggest.trigger.label', "Trigger Suggest"),
            alias: 'Trigger Suggest',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasCompletionItemProvider, suggest/* Context */._y.Visible.toNegated()),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 10 /* KeyCode.Space */,
                secondary: [2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */],
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 10 /* KeyCode.Space */, secondary: [512 /* KeyMod.Alt */ | 9 /* KeyCode.Escape */, 2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */] },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor, args) {
        const controller = SuggestController.get(editor);
        if (!controller) {
            return;
        }
        let auto;
        if (args && typeof args === 'object') {
            if (args.auto === true) {
                auto = true;
            }
        }
        controller.triggerSuggest(undefined, auto, undefined);
    }
}
TriggerSuggestAction.id = 'editor.action.triggerSuggest';
(0,editorExtensions/* registerEditorContribution */._K)(SuggestController.ID, SuggestController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,editorExtensions/* registerEditorAction */.Qr)(TriggerSuggestAction);
const weight = 100 /* KeybindingWeight.EditorContrib */ + 90;
const SuggestCommand = editorExtensions/* EditorCommand */._l.bindToContribution(SuggestController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'acceptSelectedSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, suggest/* Context */._y.HasFocusedSuggestion),
    handler(x) {
        x.acceptSelectedSuggestion(true, false);
    },
    kbOpts: [{
            // normal tab
            primary: 2 /* KeyCode.Tab */,
            kbExpr: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, editorContextKeys/* EditorContextKeys */.u.textInputFocus),
            weight,
        }, {
            // accept on enter has special rules
            primary: 3 /* KeyCode.Enter */,
            kbExpr: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, editorContextKeys/* EditorContextKeys */.u.textInputFocus, suggest/* Context */._y.AcceptSuggestionsOnEnter, suggest/* Context */._y.MakesTextEdit),
            weight,
        }],
    menuOpts: [{
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            title: nls/* localize */.NC('accept.insert', "Insert"),
            group: 'left',
            order: 1,
            when: suggest/* Context */._y.HasInsertAndReplaceRange.toNegated()
        }, {
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            title: nls/* localize */.NC('accept.insert', "Insert"),
            group: 'left',
            order: 1,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.HasInsertAndReplaceRange, suggest/* Context */._y.InsertMode.isEqualTo('insert'))
        }, {
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            title: nls/* localize */.NC('accept.replace', "Replace"),
            group: 'left',
            order: 1,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.HasInsertAndReplaceRange, suggest/* Context */._y.InsertMode.isEqualTo('replace'))
        }]
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'acceptAlternativeSelectedSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, editorContextKeys/* EditorContextKeys */.u.textInputFocus, suggest/* Context */._y.HasFocusedSuggestion),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 1024 /* KeyMod.Shift */ | 3 /* KeyCode.Enter */,
        secondary: [1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */],
    },
    handler(x) {
        x.acceptSelectedSuggestion(false, true);
    },
    menuOpts: [{
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            group: 'left',
            order: 2,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.HasInsertAndReplaceRange, suggest/* Context */._y.InsertMode.isEqualTo('insert')),
            title: nls/* localize */.NC('accept.replace', "Replace")
        }, {
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            group: 'left',
            order: 2,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.HasInsertAndReplaceRange, suggest/* Context */._y.InsertMode.isEqualTo('replace')),
            title: nls/* localize */.NC('accept.insert', "Insert")
        }]
}));
// continue to support the old command
commands/* CommandsRegistry */.P.registerCommandAlias('acceptSelectedSuggestionOnEnter', 'acceptSelectedSuggestion');
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'hideSuggestWidget',
    precondition: suggest/* Context */._y.Visible,
    handler: x => x.cancelSuggestWidget(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectNextSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectNextSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 18 /* KeyCode.DownArrow */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */],
        mac: { primary: 18 /* KeyCode.DownArrow */, secondary: [2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */, 256 /* KeyMod.WinCtrl */ | 44 /* KeyCode.KeyN */] }
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectNextPageSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectNextPageSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 12 /* KeyCode.PageDown */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 12 /* KeyCode.PageDown */]
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectLastSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectLastSuggestion()
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectPrevSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectPrevSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 16 /* KeyCode.UpArrow */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */],
        mac: { primary: 16 /* KeyCode.UpArrow */, secondary: [2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */, 256 /* KeyMod.WinCtrl */ | 46 /* KeyCode.KeyP */] }
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectPrevPageSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectPrevPageSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 11 /* KeyCode.PageUp */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 11 /* KeyCode.PageUp */]
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'selectFirstSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, contextkey/* ContextKeyExpr */.Ao.or(suggest/* Context */._y.MultipleSuggestions, suggest/* Context */._y.HasFocusedSuggestion.negate())),
    handler: c => c.selectFirstSuggestion()
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'focusSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, suggest/* Context */._y.HasFocusedSuggestion.negate()),
    handler: x => x.focusSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 10 /* KeyCode.Space */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */],
        mac: { primary: 256 /* KeyMod.WinCtrl */ | 10 /* KeyCode.Space */, secondary: [2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */] }
    },
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'focusAndAcceptSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, suggest/* Context */._y.HasFocusedSuggestion.negate()),
    handler: c => {
        c.focusSuggestion();
        c.acceptSelectedSuggestion(true, false);
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'toggleSuggestionDetails',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.Visible, suggest/* Context */._y.HasFocusedSuggestion),
    handler: x => x.toggleSuggestionDetails(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 10 /* KeyCode.Space */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */],
        mac: { primary: 256 /* KeyMod.WinCtrl */ | 10 /* KeyCode.Space */, secondary: [2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */] }
    },
    menuOpts: [{
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            group: 'right',
            order: 1,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.DetailsVisible, suggest/* Context */._y.CanResolve),
            title: nls/* localize */.NC('detail.more', "show less")
        }, {
            menuId: suggest/* suggestWidgetStatusbarMenu */.GI,
            group: 'right',
            order: 1,
            when: contextkey/* ContextKeyExpr */.Ao.and(suggest/* Context */._y.DetailsVisible.toNegated(), suggest/* Context */._y.CanResolve),
            title: nls/* localize */.NC('detail.less', "show more")
        }]
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'toggleExplainMode',
    precondition: suggest/* Context */._y.Visible,
    handler: x => x.toggleExplainMode(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */,
        primary: 2048 /* KeyMod.CtrlCmd */ | 90 /* KeyCode.Slash */,
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'toggleSuggestionFocus',
    precondition: suggest/* Context */._y.Visible,
    handler: x => x.toggleSuggestionFocus(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 10 /* KeyCode.Space */,
        mac: { primary: 256 /* KeyMod.WinCtrl */ | 512 /* KeyMod.Alt */ | 10 /* KeyCode.Space */ }
    }
}));
//#region tab completions
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'insertBestCompletion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), wordContextKey/* WordContextKey */.p.AtEnd, suggest/* Context */._y.Visible.toNegated(), SuggestAlternatives.OtherSuggestions.toNegated(), snippetController2.SnippetController2.InSnippetMode.toNegated()),
    handler: (x, arg) => {
        x.triggerSuggestAndAcceptBest((0,types/* isObject */.Kn)(arg) ? Object.assign({ fallback: 'tab' }, arg) : { fallback: 'tab' });
    },
    kbOpts: {
        weight,
        primary: 2 /* KeyCode.Tab */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'insertNextSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), SuggestAlternatives.OtherSuggestions, suggest/* Context */._y.Visible.toNegated(), snippetController2.SnippetController2.InSnippetMode.toNegated()),
    handler: x => x.acceptNextSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 2 /* KeyCode.Tab */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'insertPrevSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), SuggestAlternatives.OtherSuggestions, suggest/* Context */._y.Visible.toNegated(), snippetController2.SnippetController2.InSnippetMode.toNegated()),
    handler: x => x.acceptPrevSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */
    }
}));
(0,editorExtensions/* registerEditorAction */.Qr)(class extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.resetSuggestSize',
            label: nls/* localize */.NC('suggest.reset.label', "Reset Suggest Widget Size"),
            alias: 'Reset Suggest Widget Size',
            precondition: undefined
        });
    }
    run(_accessor, editor) {
        var _a;
        (_a = SuggestController.get(editor)) === null || _a === void 0 ? void 0 : _a.resetWidgetSize();
    }
});


/***/ }),

/***/ 58615:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestInlineCompletions: function() { return /* binding */ SuggestInlineCompletions; }
/* harmony export */ });
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29811);
/* harmony import */ var _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90256);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64202);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91213);
/* harmony import */ var _browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74312);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76584);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58431);
/* harmony import */ var _completionModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67432);
/* harmony import */ var _suggest_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88116);
/* harmony import */ var _suggestMemory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57163);
/* harmony import */ var _wordDistance_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4421);
/* harmony import */ var _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90764);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(38048);
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














class SuggestInlineCompletion {
    constructor(range, insertText, filterText, additionalTextEdits, command, completion) {
        this.range = range;
        this.insertText = insertText;
        this.filterText = filterText;
        this.additionalTextEdits = additionalTextEdits;
        this.command = command;
        this.completion = completion;
    }
}
let InlineCompletionResults = class InlineCompletionResults extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .RefCountedDisposable */ .L6 {
    constructor(model, line, word, completionModel, completions, _suggestMemoryService) {
        super(completions.disposable);
        this.model = model;
        this.line = line;
        this.word = word;
        this.completionModel = completionModel;
        this._suggestMemoryService = _suggestMemoryService;
    }
    canBeReused(model, line, word) {
        return this.model === model // same model
            && this.line === line
            && this.word.word.length > 0
            && this.word.startColumn === word.startColumn && this.word.endColumn < word.endColumn // same word
            && this.completionModel.getIncompleteProvider().size === 0; // no incomplete results
    }
    get items() {
        var _a;
        const result = [];
        // Split items by preselected index. This ensures the memory-selected item shows first and that better/worst
        // ranked items are before/after
        const { items } = this.completionModel;
        const selectedIndex = this._suggestMemoryService.select(this.model, { lineNumber: this.line, column: this.word.endColumn + this.completionModel.lineContext.characterCountDelta }, items);
        const first = _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.slice(items, selectedIndex);
        const second = _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.slice(items, 0, selectedIndex);
        let resolveCount = 5;
        for (const item of _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.concat(first, second)) {
            if (item.score === _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .FuzzyScore */ .CL.Default) {
                // skip items that have no overlap
                continue;
            }
            const range = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e(item.editStart.lineNumber, item.editStart.column, item.editInsertEnd.lineNumber, item.editInsertEnd.column + this.completionModel.lineContext.characterCountDelta // end PLUS character delta
            );
            const insertText = item.completion.insertTextRules && (item.completion.insertTextRules & 4 /* CompletionItemInsertTextRule.InsertAsSnippet */)
                ? { snippet: item.completion.insertText }
                : item.completion.insertText;
            result.push(new SuggestInlineCompletion(range, insertText, (_a = item.filterTextLow) !== null && _a !== void 0 ? _a : item.labelLow, item.completion.additionalTextEdits, item.completion.command, item));
            // resolve the first N suggestions eagerly
            if (resolveCount-- >= 0) {
                item.resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None);
            }
        }
        return result;
    }
};
InlineCompletionResults = __decorate([
    __param(5, _suggestMemory_js__WEBPACK_IMPORTED_MODULE_9__/* .ISuggestMemoryService */ .Fh)
], InlineCompletionResults);
let SuggestInlineCompletions = class SuggestInlineCompletions {
    constructor(_getEditorOption, _languageFeatureService, _clipboardService, _suggestMemoryService) {
        this._getEditorOption = _getEditorOption;
        this._languageFeatureService = _languageFeatureService;
        this._clipboardService = _clipboardService;
        this._suggestMemoryService = _suggestMemoryService;
    }
    provideInlineCompletions(model, position, context, token) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (context.selectedSuggestionInfo) {
                return;
            }
            const config = this._getEditorOption(86 /* EditorOption.quickSuggestions */, model);
            if (_suggest_js__WEBPACK_IMPORTED_MODULE_8__/* .QuickSuggestionsOptions */ .tG.isAllOff(config)) {
                // quick suggest is off (for this model/language)
                return;
            }
            model.tokenization.tokenizeIfCheap(position.lineNumber);
            const lineTokens = model.tokenization.getLineTokens(position.lineNumber);
            const tokenType = lineTokens.getStandardTokenType(lineTokens.findTokenIndexAtOffset(Math.max(position.column - 1 - 1, 0)));
            if (_suggest_js__WEBPACK_IMPORTED_MODULE_8__/* .QuickSuggestionsOptions */ .tG.valueFor(config, tokenType) !== 'inline') {
                // quick suggest is off (for this token)
                return undefined;
            }
            // We consider non-empty leading words and trigger characters. The latter only
            // when no word is being typed (word characters superseed trigger characters)
            let wordInfo = model.getWordAtPosition(position);
            let triggerCharacterInfo;
            if (!(wordInfo === null || wordInfo === void 0 ? void 0 : wordInfo.word)) {
                triggerCharacterInfo = this._getTriggerCharacterInfo(model, position);
            }
            if (!(wordInfo === null || wordInfo === void 0 ? void 0 : wordInfo.word) && !triggerCharacterInfo) {
                // not at word, not a trigger character
                return;
            }
            // ensure that we have word information and that we are at the end of a word
            // otherwise we stop because we don't want to do quick suggestions inside words
            if (!wordInfo) {
                wordInfo = model.getWordUntilPosition(position);
            }
            if (wordInfo.endColumn !== position.column) {
                return;
            }
            let result;
            const leadingLineContents = model.getValueInRange(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e(position.lineNumber, 1, position.lineNumber, position.column));
            if (!triggerCharacterInfo && ((_a = this._lastResult) === null || _a === void 0 ? void 0 : _a.canBeReused(model, position.lineNumber, wordInfo))) {
                // reuse a previous result iff possible, only a refilter is needed
                // TODO@jrieken this can be improved further and only incomplete results can be updated
                // console.log(`REUSE with ${wordInfo.word}`);
                const newLineContext = new _completionModel_js__WEBPACK_IMPORTED_MODULE_7__/* .LineContext */ .t(leadingLineContents, position.column - this._lastResult.word.endColumn);
                this._lastResult.completionModel.lineContext = newLineContext;
                this._lastResult.acquire();
                result = this._lastResult;
            }
            else {
                // refesh model is required
                const completions = yield (0,_suggest_js__WEBPACK_IMPORTED_MODULE_8__/* .provideSuggestionItems */ .kL)(this._languageFeatureService.completionProvider, model, position, new _suggest_js__WEBPACK_IMPORTED_MODULE_8__/* .CompletionOptions */ .A9(undefined, undefined, triggerCharacterInfo === null || triggerCharacterInfo === void 0 ? void 0 : triggerCharacterInfo.providers), triggerCharacterInfo && { triggerKind: 1 /* CompletionTriggerKind.TriggerCharacter */, triggerCharacter: triggerCharacterInfo.ch }, token);
                let clipboardText;
                if (completions.needsClipboard) {
                    clipboardText = yield this._clipboardService.readText();
                }
                const completionModel = new _completionModel_js__WEBPACK_IMPORTED_MODULE_7__/* .CompletionModel */ ._(completions.items, position.column, new _completionModel_js__WEBPACK_IMPORTED_MODULE_7__/* .LineContext */ .t(leadingLineContents, 0), _wordDistance_js__WEBPACK_IMPORTED_MODULE_10__/* .WordDistance */ .K.None, this._getEditorOption(114 /* EditorOption.suggest */, model), this._getEditorOption(108 /* EditorOption.snippetSuggestions */, model), { boostFullMatch: false, firstMatchCanBeWeak: false }, clipboardText);
                result = new InlineCompletionResults(model, position.lineNumber, wordInfo, completionModel, completions, this._suggestMemoryService);
            }
            this._lastResult = result;
            return result;
        });
    }
    handleItemDidShow(_completions, item) {
        item.completion.resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None);
    }
    freeInlineCompletions(result) {
        result.release();
    }
    _getTriggerCharacterInfo(model, position) {
        var _a;
        const ch = model.getValueInRange(_common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.fromPositions({ lineNumber: position.lineNumber, column: position.column - 1 }, position));
        const providers = new Set();
        for (const provider of this._languageFeatureService.completionProvider.all(model)) {
            if ((_a = provider.triggerCharacters) === null || _a === void 0 ? void 0 : _a.includes(ch)) {
                providers.add(provider);
            }
        }
        if (providers.size === 0) {
            return undefined;
        }
        return { providers, ch };
    }
};
SuggestInlineCompletions = __decorate([
    __param(1, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p),
    __param(2, _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_11__/* .IClipboardService */ .p),
    __param(3, _suggestMemory_js__WEBPACK_IMPORTED_MODULE_9__/* .ISuggestMemoryService */ .Fh)
], SuggestInlineCompletions);
let EditorContribution = class EditorContribution {
    constructor(_editor, languageFeatureService, editorService, instaService) {
        // HACK - way to contribute something only once
        if (++EditorContribution._counter === 1) {
            const provider = instaService.createInstance(SuggestInlineCompletions, (id, model) => {
                var _a;
                // HACK - reuse the editor options world outside from a "normal" contribution
                const editor = (_a = editorService.listCodeEditors().find(editor => editor.getModel() === model)) !== null && _a !== void 0 ? _a : _editor;
                return editor.getOption(id);
            });
            EditorContribution._disposable = languageFeatureService.inlineCompletionsProvider.register('*', provider);
        }
    }
    dispose() {
        var _a;
        if (--EditorContribution._counter === 0) {
            (_a = EditorContribution._disposable) === null || _a === void 0 ? void 0 : _a.dispose();
            EditorContribution._disposable = undefined;
        }
    }
};
EditorContribution._counter = 0;
EditorContribution = __decorate([
    __param(1, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p),
    __param(2, _browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_5__/* .ICodeEditorService */ .$),
    __param(3, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_12__/* .IInstantiationService */ .TG)
], EditorContribution);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__/* .registerEditorContribution */ ._K)('suggest.inlineCompletionsProvider', EditorContribution, 0 /* EditorContributionInstantiation.Eager */); // eager because the contribution is used as a way to ONCE access a service to which a provider is registered


/***/ }),

/***/ 57163:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fh: function() { return /* binding */ ISuggestMemoryService; }
/* harmony export */ });
/* unused harmony exports Memory, NoMemory, LRUMemory, PrefixMemory, SuggestMemoryService */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17795);
/* harmony import */ var _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12590);
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58606);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33022);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9546);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38048);
/* harmony import */ var _platform_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81358);
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









class Memory {
    constructor(name) {
        this.name = name;
    }
    select(model, pos, items) {
        if (items.length === 0) {
            return 0;
        }
        const topScore = items[0].score[0];
        for (let i = 0; i < items.length; i++) {
            const { score, completion: suggestion } = items[i];
            if (score[0] !== topScore) {
                // stop when leaving the group of top matches
                break;
            }
            if (suggestion.preselect) {
                // stop when seeing an auto-select-item
                return i;
            }
        }
        return 0;
    }
}
class NoMemory extends Memory {
    constructor() {
        super('first');
    }
    memorize(model, pos, item) {
        // no-op
    }
    toJSON() {
        return undefined;
    }
    fromJSON() {
        //
    }
}
class LRUMemory extends Memory {
    constructor() {
        super('recentlyUsed');
        this._cache = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_2__/* .LRUCache */ .z6(300, 0.66);
        this._seq = 0;
    }
    memorize(model, pos, item) {
        const key = `${model.getLanguageId()}/${item.textLabel}`;
        this._cache.set(key, {
            touch: this._seq++,
            type: item.completion.kind,
            insertText: item.completion.insertText
        });
    }
    select(model, pos, items) {
        if (items.length === 0) {
            return 0;
        }
        const lineSuffix = model.getLineContent(pos.lineNumber).substr(pos.column - 10, pos.column - 1);
        if (/\s$/.test(lineSuffix)) {
            return super.select(model, pos, items);
        }
        const topScore = items[0].score[0];
        let indexPreselect = -1;
        let indexRecency = -1;
        let seq = -1;
        for (let i = 0; i < items.length; i++) {
            if (items[i].score[0] !== topScore) {
                // consider only top items
                break;
            }
            const key = `${model.getLanguageId()}/${items[i].textLabel}`;
            const item = this._cache.peek(key);
            if (item && item.touch > seq && item.type === items[i].completion.kind && item.insertText === items[i].completion.insertText) {
                seq = item.touch;
                indexRecency = i;
            }
            if (items[i].completion.preselect && indexPreselect === -1) {
                // stop when seeing an auto-select-item
                return indexPreselect = i;
            }
        }
        if (indexRecency !== -1) {
            return indexRecency;
        }
        else if (indexPreselect !== -1) {
            return indexPreselect;
        }
        else {
            return 0;
        }
    }
    toJSON() {
        return this._cache.toJSON();
    }
    fromJSON(data) {
        this._cache.clear();
        const seq = 0;
        for (const [key, value] of data) {
            value.touch = seq;
            value.type = typeof value.type === 'number' ? value.type : _common_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .CompletionItemKinds */ .gX.fromString(value.type);
            this._cache.set(key, value);
        }
        this._seq = this._cache.size;
    }
}
class PrefixMemory extends Memory {
    constructor() {
        super('recentlyUsedByPrefix');
        this._trie = _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_3__/* .TernarySearchTree */ .Id.forStrings();
        this._seq = 0;
    }
    memorize(model, pos, item) {
        const { word } = model.getWordUntilPosition(pos);
        const key = `${model.getLanguageId()}/${word}`;
        this._trie.set(key, {
            type: item.completion.kind,
            insertText: item.completion.insertText,
            touch: this._seq++
        });
    }
    select(model, pos, items) {
        const { word } = model.getWordUntilPosition(pos);
        if (!word) {
            return super.select(model, pos, items);
        }
        const key = `${model.getLanguageId()}/${word}`;
        let item = this._trie.get(key);
        if (!item) {
            item = this._trie.findSubstr(key);
        }
        if (item) {
            for (let i = 0; i < items.length; i++) {
                const { kind, insertText } = items[i].completion;
                if (kind === item.type && insertText === item.insertText) {
                    return i;
                }
            }
        }
        return super.select(model, pos, items);
    }
    toJSON() {
        const entries = [];
        this._trie.forEach((value, key) => entries.push([key, value]));
        // sort by last recently used (touch), then
        // take the top 200 item and normalize their
        // touch
        entries
            .sort((a, b) => -(a[1].touch - b[1].touch))
            .forEach((value, i) => value[1].touch = i);
        return entries.slice(0, 200);
    }
    fromJSON(data) {
        this._trie.clear();
        if (data.length > 0) {
            this._seq = data[0][1].touch + 1;
            for (const [key, value] of data) {
                value.type = typeof value.type === 'number' ? value.type : _common_languages_js__WEBPACK_IMPORTED_MODULE_4__/* .CompletionItemKinds */ .gX.fromString(value.type);
                this._trie.set(key, value);
            }
        }
    }
}
let SuggestMemoryService = class SuggestMemoryService {
    constructor(_storageService, _configService) {
        this._storageService = _storageService;
        this._configService = _configService;
        this._disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .DisposableStore */ .SL();
        this._persistSoon = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => this._saveState(), 500);
        this._disposables.add(_storageService.onWillSaveState(e => {
            if (e.reason === _platform_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_7__/* .WillSaveStateReason */ .fk.SHUTDOWN) {
                this._saveState();
            }
        }));
    }
    dispose() {
        this._disposables.dispose();
        this._persistSoon.dispose();
    }
    memorize(model, pos, item) {
        this._withStrategy(model, pos).memorize(model, pos, item);
        this._persistSoon.schedule();
    }
    select(model, pos, items) {
        return this._withStrategy(model, pos).select(model, pos, items);
    }
    _withStrategy(model, pos) {
        var _a;
        const mode = this._configService.getValue('editor.suggestSelection', {
            overrideIdentifier: model.getLanguageIdAtPosition(pos.lineNumber, pos.column),
            resource: model.uri
        });
        if (((_a = this._strategy) === null || _a === void 0 ? void 0 : _a.name) !== mode) {
            this._saveState();
            const ctor = SuggestMemoryService._strategyCtors.get(mode) || NoMemory;
            this._strategy = new ctor();
            try {
                const share = this._configService.getValue('editor.suggest.shareSuggestSelections');
                const scope = share ? 0 /* StorageScope.PROFILE */ : 1 /* StorageScope.WORKSPACE */;
                const raw = this._storageService.get(`${SuggestMemoryService._storagePrefix}/${mode}`, scope);
                if (raw) {
                    this._strategy.fromJSON(JSON.parse(raw));
                }
            }
            catch (e) {
                // things can go wrong with JSON...
            }
        }
        return this._strategy;
    }
    _saveState() {
        if (this._strategy) {
            const share = this._configService.getValue('editor.suggest.shareSuggestSelections');
            const scope = share ? 0 /* StorageScope.PROFILE */ : 1 /* StorageScope.WORKSPACE */;
            const raw = JSON.stringify(this._strategy);
            this._storageService.store(`${SuggestMemoryService._storagePrefix}/${this._strategy.name}`, raw, scope, 1 /* StorageTarget.MACHINE */);
        }
    }
};
SuggestMemoryService._strategyCtors = new Map([
    ['recentlyUsedByPrefix', PrefixMemory],
    ['recentlyUsed', LRUMemory],
    ['first', NoMemory]
]);
SuggestMemoryService._storagePrefix = 'suggest/memories';
SuggestMemoryService = __decorate([
    __param(0, _platform_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_7__/* .IStorageService */ .Uy),
    __param(1, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_5__/* .IConfigurationService */ .Ui)
], SuggestMemoryService);
const ISuggestMemoryService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_6__/* .createDecorator */ .yh)('ISuggestMemories');
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_8__/* .registerSingleton */ .z)(ISuggestMemoryService, SuggestMemoryService, 1 /* InstantiationType.Delayed */);


/***/ })

}]);