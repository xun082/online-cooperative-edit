"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-1a5e034c"],{

/***/ 78228:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: function() { return /* binding */ SuggestController; }
});

// UNUSED EXPORTS: TriggerSuggestAction

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(39194);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/keybindings.js
var keybindings = __webpack_require__(75762);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js
var stopwatch = __webpack_require__(99264);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(52522);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(54499);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js
var snippetController2 = __webpack_require__(810);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetParser.js
var snippetParser = __webpack_require__(97970);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestMemory.js
var suggestMemory = __webpack_require__(88309);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/wordContextKey.js
var wordContextKey = __webpack_require__(79991);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(38389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/log/common/log.js
var log = __webpack_require__(56950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggest.js
var suggest = __webpack_require__(29562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestAlternatives.js
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


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/characterClassifier.js
var characterClassifier = __webpack_require__(71887);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestCommitCharacters.js
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorker.js
var editorWorker = __webpack_require__(14433);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/wordDistance.js
var browser_wordDistance = __webpack_require__(2891);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js
var clipboardService = __webpack_require__(71966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(99779);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js
var telemetry = __webpack_require__(62482);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/completionModel.js
var completionModel = __webpack_require__(37151);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(35092);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletionContextKeys.js
var inlineCompletionContextKeys = __webpack_require__(44940);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/environment/common/environment.js
var environment = __webpack_require__(37419);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestModel.js
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
    return !editor.getOption(61 /* EditorOption.inlineSuggest */).suppressSuggestions;
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
    return !editor.getOption(61 /* EditorOption.inlineSuggest */).suppressSuggestions;
}
let SuggestModel = class SuggestModel {
    constructor(_editor, _editorWorkerService, _clipboardService, _telemetryService, _logService, _contextKeyService, _configurationService, _languageFeaturesService, _envService) {
        this._editor = _editor;
        this._editorWorkerService = _editorWorkerService;
        this._clipboardService = _clipboardService;
        this._telemetryService = _telemetryService;
        this._logService = _logService;
        this._contextKeyService = _contextKeyService;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._envService = _envService;
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
        if (this._editor.getOption(89 /* EditorOption.readOnly */)
            || !this._editor.hasModel()
            || !this._editor.getOption(119 /* EditorOption.suggestOnTriggerCharacters */)) {
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
        if (suggest/* QuickSuggestionsOptions */.tG.isAllOff(this._editor.getOption(87 /* EditorOption.quickSuggestions */))) {
            // not enabled
            return;
        }
        if (this._editor.getOption(116 /* EditorOption.suggest */).snippetsPreventQuickSuggestions && ((_a = snippetController2/* SnippetController2 */.f.get(this._editor)) === null || _a === void 0 ? void 0 : _a.isInSnippet())) {
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
            const config = this._editor.getOption(87 /* EditorOption.quickSuggestions */);
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
        }, this._editor.getOption(88 /* EditorOption.quickSuggestionsDelay */));
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
        const snippetSuggestions = this._editor.getOption(110 /* EditorOption.snippetSuggestions */);
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
            const fuzzySearchOptions = Object.assign(Object.assign({}, filters/* FuzzyScoreOptions */.mX.default), { firstMatchCanBeWeak: !this._editor.getOption(116 /* EditorOption.suggest */).matchOnWordStartOnly });
            this._completionModel = new completionModel/* CompletionModel */._(completions.items, this._context.column, {
                leadingLineContent: ctx.leadingLineContent,
                characterCountDelta: ctx.column - this._context.column
            }, wordDistance, this._editor.getOption(116 /* EditorOption.suggest */), this._editor.getOption(110 /* EditorOption.snippetSuggestions */), fuzzySearchOptions, clipboardText);
            // store containers so that they can be disposed later
            this._completionDisposables.add(completions.disposable);
            this._onNewContext(ctx);
            // finally report telemetry about durations
            this._reportDurationsTelemetry(completions.durations);
            // report invalid completions by source
            if (!this._envService.isBuilt || this._envService.isExtensionDevelopment) {
                for (const item of completions.items) {
                    if (item.isInvalid) {
                        this._logService.warn(`[suggest] did IGNORE invalid completion item from ${item.provider._debugDisplayName}`, item.completion);
                    }
                }
            }
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
        const snippetSuggestions = editor.getOption(110 /* EditorOption.snippetSuggestions */);
        if (snippetSuggestions === 'none') {
            result.add(27 /* CompletionItemKind.Snippet */);
        }
        // type setting
        const suggestOptions = editor.getOption(116 /* EditorOption.suggest */);
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
    suggestModel_param(7, languageFeatures/* ILanguageFeaturesService */.p),
    suggestModel_param(8, environment/* IEnvironmentService */.Y)
], SuggestModel);


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestOvertypingCapturer.js
var suggestOvertypingCapturer = __webpack_require__(74701);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestWidget.js + 3 modules
var suggestWidget = __webpack_require__(74744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(85493);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/hash.js
var hash = __webpack_require__(8289);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js
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
        this.editor = editor;
        this.model = _instantiationService.createInstance(SuggestModel, this.editor);
        // default selector
        this._selectors.register({
            priority: 0,
            select: (model, pos, items) => this._memoryService.select(model, pos, items)
        });
        // context key: update insert/replace mode
        const ctxInsertMode = suggest/* Context */._y.InsertMode.bindTo(_contextKeyService);
        ctxInsertMode.set(editor.getOption(116 /* EditorOption.suggest */).insertMode);
        this.model.onDidTrigger(() => ctxInsertMode.set(editor.getOption(116 /* EditorOption.suggest */).insertMode));
        this.widget = this._toDispose.add(new common_async/* IdleValue */.Ue(() => {
            const widget = this._instantiationService.createInstance(suggestWidget/* SuggestWidget */.XZ, this.editor);
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
            return this._toDispose.add(new suggestOvertypingCapturer/* OvertypingCapturer */.K(this.editor, this.model));
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
                const options = this.editor.getOption(116 /* EditorOption.suggest */);
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
        const snippetController = snippetController2/* SnippetController2 */.f.get(this.editor);
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
        const isResolved = item.isResolved;
        // telemetry data points: duration of command execution, info about async additional edits (-1=n/a, -2=none, 1=success, 0=failed)
        let _commandExectionDuration = -1;
        let _additionalEditsAppliedAsync = -1;
        if (Array.isArray(item.completion.additionalTextEdits)) {
            // cancel -> stops all listening and closes widget
            this.model.cancel();
            // sync additional edits
            const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this.editor);
            this.editor.executeEdits('suggestController.additionalTextEdits.sync', item.completion.additionalTextEdits.map(edit => editOperation/* EditOperation */.h.replaceMove(range/* Range */.e.lift(edit.range), edit.text)));
            scrollState.restoreRelativeVerticalPositionOfCursor(this.editor);
        }
        else if (!isResolved) {
            // async additional edits
            const sw = new stopwatch/* StopWatch */.G();
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
                    return undefined;
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
                _additionalEditsAppliedAsync = applied === true ? 1 : applied === false ? 0 : -2;
            }).finally(() => {
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
                const sw = new stopwatch/* StopWatch */.G();
                tasks.push(this._commandService.executeCommand(item.completion.command.id, ...(item.completion.command.arguments ? [...item.completion.command.arguments] : [])).catch(e => {
                    if (item.completion.extensionId) {
                        (0,errors/* onUnexpectedExternalError */.Cp)(e);
                    }
                    else {
                        (0,errors/* onUnexpectedError */.dL)(e);
                    }
                }).finally(() => {
                    _commandExectionDuration = sw.elapsed();
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
            this._reportSuggestionAcceptedTelemetry(item, model, isResolved, _commandExectionDuration, _additionalEditsAppliedAsync);
            this.model.clear();
            cts.dispose();
        });
    }
    _reportSuggestionAcceptedTelemetry(item, model, itemResolved, commandExectionDuration, additionalEditsAppliedAsync) {
        var _a, _b, _c;
        if (Math.floor(Math.random() * 100) === 0) {
            // throttle telemetry event because accepting completions happens a lot
            return;
        }
        this._telemetryService.publicLog2('suggest.acceptedSuggestion', {
            extensionId: (_b = (_a = item.extensionId) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 'unknown',
            providerId: (_c = item.provider._debugDisplayName) !== null && _c !== void 0 ? _c : 'unknown',
            kind: item.completion.kind,
            basenameHash: (0,hash/* hash */.vp)((0,resources/* basename */.EZ)(model.uri)).toString(16),
            languageId: model.getLanguageId(),
            fileExtension: (0,resources/* extname */.DZ)(model.uri),
            resolveInfo: !item.provider.resolveCompletionItem ? -1 : itemResolved ? 1 : 0,
            resolveDuration: item.resolveDuration,
            commandDuration: commandExectionDuration,
            additionalEditsAsync: additionalEditsAppliedAsync
        });
    }
    getOverwriteInfo(item, toggleMode) {
        (0,types/* assertType */.p_)(this.editor.hasModel());
        let replace = this.editor.getOption(116 /* EditorOption.suggest */).insertMode === 'replace';
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
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), wordContextKey/* WordContextKey */.p.AtEnd, suggest/* Context */._y.Visible.toNegated(), SuggestAlternatives.OtherSuggestions.toNegated(), snippetController2/* SnippetController2 */.f.InSnippetMode.toNegated()),
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
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), SuggestAlternatives.OtherSuggestions, suggest/* Context */._y.Visible.toNegated(), snippetController2/* SnippetController2 */.f.InSnippetMode.toNegated()),
    handler: x => x.acceptNextSuggestion(),
    kbOpts: {
        weight: weight,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
        primary: 2 /* KeyCode.Tab */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new SuggestCommand({
    id: 'insertPrevSuggestion',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.textInputFocus, contextkey/* ContextKeyExpr */.Ao.equals('config.editor.tabCompletion', 'on'), SuggestAlternatives.OtherSuggestions, suggest/* Context */._y.Visible.toNegated(), snippetController2/* SnippetController2 */.f.InSnippetMode.toNegated()),
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

/***/ 89532:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SuggestInlineCompletions */
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98764);
/* harmony import */ var _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35092);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25134);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79959);
/* harmony import */ var _browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41886);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3981);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
/* harmony import */ var _completionModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37151);
/* harmony import */ var _suggest_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29562);
/* harmony import */ var _suggestMemory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88309);
/* harmony import */ var _wordDistance_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2891);
/* harmony import */ var _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71966);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(73830);
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
            const config = this._getEditorOption(87 /* EditorOption.quickSuggestions */, model);
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
                const completionModel = new _completionModel_js__WEBPACK_IMPORTED_MODULE_7__/* .CompletionModel */ ._(completions.items, position.column, new _completionModel_js__WEBPACK_IMPORTED_MODULE_7__/* .LineContext */ .t(leadingLineContents, 0), _wordDistance_js__WEBPACK_IMPORTED_MODULE_10__/* .WordDistance */ .K.None, this._getEditorOption(116 /* EditorOption.suggest */, model), this._getEditorOption(110 /* EditorOption.snippetSuggestions */, model), { boostFullMatch: false, firstMatchCanBeWeak: false }, clipboardText);
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

/***/ 88309:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fh: function() { return /* binding */ ISuggestMemoryService; }
/* harmony export */ });
/* unused harmony exports Memory, NoMemory, LRUMemory, PrefixMemory, SuggestMemoryService */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69058);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54495);
/* harmony import */ var _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17417);
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34882);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99779);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54659);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73830);
/* harmony import */ var _platform_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43516);
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