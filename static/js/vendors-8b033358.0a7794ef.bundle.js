"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-8b033358"],{

/***/ 18922:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ TokenizationTextModelPart; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69058);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25702);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26794);
/* harmony import */ var _core_eolCounter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(25099);
/* harmony import */ var _core_lineRange_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23706);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65201);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22380);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34882);
/* harmony import */ var _textModelPart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32119);
/* harmony import */ var _textModelTokens_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15853);
/* harmony import */ var _tokens_contiguousMultilineTokensBuilder_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(85570);
/* harmony import */ var _tokens_contiguousTokensStore_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69659);
/* harmony import */ var _tokens_sparseTokensStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6117);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/















class TokenizationTextModelPart extends _textModelPart_js__WEBPACK_IMPORTED_MODULE_8__/* .TextModelPart */ .U {
    constructor(_languageService, _languageConfigurationService, _textModel, _bracketPairsTextModelPart, _languageId, _attachedViews) {
        super();
        this._languageService = _languageService;
        this._languageConfigurationService = _languageConfigurationService;
        this._textModel = _textModel;
        this._bracketPairsTextModelPart = _bracketPairsTextModelPart;
        this._languageId = _languageId;
        this._attachedViews = _attachedViews;
        this._semanticTokens = new _tokens_sparseTokensStore_js__WEBPACK_IMPORTED_MODULE_11__/* .SparseTokensStore */ .u(this._languageService.languageIdCodec);
        this._onDidChangeLanguage = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5());
        this.onDidChangeLanguage = this._onDidChangeLanguage.event;
        this._onDidChangeLanguageConfiguration = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5());
        this.onDidChangeLanguageConfiguration = this._onDidChangeLanguageConfiguration.event;
        this._onDidChangeTokens = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5());
        this.onDidChangeTokens = this._onDidChangeTokens.event;
        this.grammarTokens = this._register(new GrammarTokens(this._languageService.languageIdCodec, this._textModel, () => this._languageId, this._attachedViews));
        this._register(this._languageConfigurationService.onDidChange(e => {
            if (e.affects(this._languageId)) {
                this._onDidChangeLanguageConfiguration.fire({});
            }
        }));
        this._register(this.grammarTokens.onDidChangeTokens(e => {
            this._emitModelTokensChangedEvent(e);
        }));
        this._register(this.grammarTokens.onDidChangeBackgroundTokenizationState(e => {
            this._bracketPairsTextModelPart.handleDidChangeBackgroundTokenizationState();
        }));
    }
    handleDidChangeContent(e) {
        if (e.isFlush) {
            this._semanticTokens.flush();
        }
        else if (!e.isEolChange) { // We don't have to do anything on an EOL change
            for (const c of e.changes) {
                const [eolCount, firstLineLength, lastLineLength] = (0,_core_eolCounter_js__WEBPACK_IMPORTED_MODULE_12__/* .countEOL */ .Q)(c.text);
                this._semanticTokens.acceptEdit(c.range, eolCount, firstLineLength, lastLineLength, c.text.length > 0 ? c.text.charCodeAt(0) : 0 /* CharCode.Null */);
            }
        }
        this.grammarTokens.handleDidChangeContent(e);
    }
    handleDidChangeAttached() {
        this.grammarTokens.handleDidChangeAttached();
    }
    /**
     * Includes grammar and semantic tokens.
     */
    getLineTokens(lineNumber) {
        this.validateLineNumber(lineNumber);
        const syntacticTokens = this.grammarTokens.getLineTokens(lineNumber);
        return this._semanticTokens.addSparseTokens(lineNumber, syntacticTokens);
    }
    _emitModelTokensChangedEvent(e) {
        if (!this._textModel._isDisposing()) {
            this._bracketPairsTextModelPart.handleDidChangeTokens(e);
            this._onDidChangeTokens.fire(e);
        }
    }
    // #region Grammar Tokens
    validateLineNumber(lineNumber) {
        if (lineNumber < 1 || lineNumber > this._textModel.getLineCount()) {
            throw new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .BugIndicatingError */ .he('Illegal value for lineNumber');
        }
    }
    get hasTokens() {
        return this.grammarTokens.hasTokens;
    }
    resetTokenization() {
        this.grammarTokens.resetTokenization();
    }
    get backgroundTokenizationState() {
        return this.grammarTokens.backgroundTokenizationState;
    }
    forceTokenization(lineNumber) {
        this.validateLineNumber(lineNumber);
        this.grammarTokens.forceTokenization(lineNumber);
    }
    isCheapToTokenize(lineNumber) {
        this.validateLineNumber(lineNumber);
        return this.grammarTokens.isCheapToTokenize(lineNumber);
    }
    tokenizeIfCheap(lineNumber) {
        this.validateLineNumber(lineNumber);
        this.grammarTokens.tokenizeIfCheap(lineNumber);
    }
    getTokenTypeIfInsertingCharacter(lineNumber, column, character) {
        return this.grammarTokens.getTokenTypeIfInsertingCharacter(lineNumber, column, character);
    }
    tokenizeLineWithEdit(position, length, newText) {
        return this.grammarTokens.tokenizeLineWithEdit(position, length, newText);
    }
    // #endregion
    // #region Semantic Tokens
    setSemanticTokens(tokens, isComplete) {
        this._semanticTokens.set(tokens, isComplete);
        this._emitModelTokensChangedEvent({
            semanticTokensApplied: tokens !== null,
            ranges: [{ fromLineNumber: 1, toLineNumber: this._textModel.getLineCount() }],
        });
    }
    hasCompleteSemanticTokens() {
        return this._semanticTokens.isComplete();
    }
    hasSomeSemanticTokens() {
        return !this._semanticTokens.isEmpty();
    }
    setPartialSemanticTokens(range, tokens) {
        if (this.hasCompleteSemanticTokens()) {
            return;
        }
        const changedRange = this._textModel.validateRange(this._semanticTokens.setPartial(range, tokens));
        this._emitModelTokensChangedEvent({
            semanticTokensApplied: true,
            ranges: [
                {
                    fromLineNumber: changedRange.startLineNumber,
                    toLineNumber: changedRange.endLineNumber,
                },
            ],
        });
    }
    // #endregion
    // #region Utility Methods
    getWordAtPosition(_position) {
        this.assertNotDisposed();
        const position = this._textModel.validatePosition(_position);
        const lineContent = this._textModel.getLineContent(position.lineNumber);
        const lineTokens = this.getLineTokens(position.lineNumber);
        const tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
        // (1). First try checking right biased word
        const [rbStartOffset, rbEndOffset] = TokenizationTextModelPart._findLanguageBoundaries(lineTokens, tokenIndex);
        const rightBiasedWord = (0,_core_wordHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .getWordAtText */ .t2)(position.column, this.getLanguageConfiguration(lineTokens.getLanguageId(tokenIndex)).getWordDefinition(), lineContent.substring(rbStartOffset, rbEndOffset), rbStartOffset);
        // Make sure the result touches the original passed in position
        if (rightBiasedWord &&
            rightBiasedWord.startColumn <= _position.column &&
            _position.column <= rightBiasedWord.endColumn) {
            return rightBiasedWord;
        }
        // (2). Else, if we were at a language boundary, check the left biased word
        if (tokenIndex > 0 && rbStartOffset === position.column - 1) {
            // edge case, where `position` sits between two tokens belonging to two different languages
            const [lbStartOffset, lbEndOffset] = TokenizationTextModelPart._findLanguageBoundaries(lineTokens, tokenIndex - 1);
            const leftBiasedWord = (0,_core_wordHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .getWordAtText */ .t2)(position.column, this.getLanguageConfiguration(lineTokens.getLanguageId(tokenIndex - 1)).getWordDefinition(), lineContent.substring(lbStartOffset, lbEndOffset), lbStartOffset);
            // Make sure the result touches the original passed in position
            if (leftBiasedWord &&
                leftBiasedWord.startColumn <= _position.column &&
                _position.column <= leftBiasedWord.endColumn) {
                return leftBiasedWord;
            }
        }
        return null;
    }
    getLanguageConfiguration(languageId) {
        return this._languageConfigurationService.getLanguageConfiguration(languageId);
    }
    static _findLanguageBoundaries(lineTokens, tokenIndex) {
        const languageId = lineTokens.getLanguageId(tokenIndex);
        // go left until a different language is hit
        let startOffset = 0;
        for (let i = tokenIndex; i >= 0 && lineTokens.getLanguageId(i) === languageId; i--) {
            startOffset = lineTokens.getStartOffset(i);
        }
        // go right until a different language is hit
        let endOffset = lineTokens.getLineContent().length;
        for (let i = tokenIndex, tokenCount = lineTokens.getCount(); i < tokenCount && lineTokens.getLanguageId(i) === languageId; i++) {
            endOffset = lineTokens.getEndOffset(i);
        }
        return [startOffset, endOffset];
    }
    getWordUntilPosition(position) {
        const wordAtPosition = this.getWordAtPosition(position);
        if (!wordAtPosition) {
            return { word: '', startColumn: position.column, endColumn: position.column, };
        }
        return {
            word: wordAtPosition.word.substr(0, position.column - wordAtPosition.startColumn),
            startColumn: wordAtPosition.startColumn,
            endColumn: position.column,
        };
    }
    // #endregion
    // #region Language Id handling
    getLanguageId() {
        return this._languageId;
    }
    getLanguageIdAtPosition(lineNumber, column) {
        const position = this._textModel.validatePosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_13__/* .Position */ .L(lineNumber, column));
        const lineTokens = this.getLineTokens(position.lineNumber);
        return lineTokens.getLanguageId(lineTokens.findTokenIndexAtOffset(position.column - 1));
    }
    setLanguageId(languageId, source = 'api') {
        if (this._languageId === languageId) {
            // There's nothing to do
            return;
        }
        const e = {
            oldLanguage: this._languageId,
            newLanguage: languageId,
            source
        };
        this._languageId = languageId;
        this._bracketPairsTextModelPart.handleDidChangeLanguage(e);
        this.grammarTokens.resetTokenization();
        this._onDidChangeLanguage.fire(e);
        this._onDidChangeLanguageConfiguration.fire({});
    }
}
class GrammarTokens extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .Disposable */ .JT {
    get backgroundTokenizationState() {
        return this._backgroundTokenizationState;
    }
    constructor(_languageIdCodec, _textModel, getLanguageId, attachedViews) {
        super();
        this._languageIdCodec = _languageIdCodec;
        this._textModel = _textModel;
        this.getLanguageId = getLanguageId;
        this._tokenizer = null;
        this._defaultBackgroundTokenizer = null;
        this._backgroundTokenizer = this._register(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .MutableDisposable */ .XK());
        this._tokens = new _tokens_contiguousTokensStore_js__WEBPACK_IMPORTED_MODULE_10__/* .ContiguousTokensStore */ .l(this._languageIdCodec);
        this._debugBackgroundTokenizer = this._register(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .MutableDisposable */ .XK());
        this._backgroundTokenizationState = 1 /* BackgroundTokenizationState.InProgress */;
        this._onDidChangeBackgroundTokenizationState = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5());
        /** @internal, should not be exposed by the text model! */
        this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event;
        this._onDidChangeTokens = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5());
        /** @internal, should not be exposed by the text model! */
        this.onDidChangeTokens = this._onDidChangeTokens.event;
        this._attachedViewStates = this._register(new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableMap */ .b2());
        this._register(_languages_js__WEBPACK_IMPORTED_MODULE_7__/* .TokenizationRegistry */ .RW.onDidChange((e) => {
            const languageId = this.getLanguageId();
            if (e.changedLanguages.indexOf(languageId) === -1) {
                return;
            }
            this.resetTokenization();
        }));
        this.resetTokenization();
        this._register(attachedViews.onDidChangeVisibleRanges(({ view, state }) => {
            if (state) {
                let existing = this._attachedViewStates.get(view);
                if (!existing) {
                    existing = new AttachedViewHandler(() => this.refreshRanges(existing.lineRanges));
                    this._attachedViewStates.set(view, existing);
                }
                existing.handleStateChange(state);
            }
            else {
                this._attachedViewStates.deleteAndDispose(view);
            }
        }));
    }
    resetTokenization(fireTokenChangeEvent = true) {
        var _a;
        this._tokens.flush();
        (_a = this._debugBackgroundTokens) === null || _a === void 0 ? void 0 : _a.flush();
        if (this._debugBackgroundStates) {
            this._debugBackgroundStates = new _textModelTokens_js__WEBPACK_IMPORTED_MODULE_9__/* .TrackingTokenizationStateStore */ .qN(this._textModel.getLineCount());
        }
        if (fireTokenChangeEvent) {
            this._onDidChangeTokens.fire({
                semanticTokensApplied: false,
                ranges: [
                    {
                        fromLineNumber: 1,
                        toLineNumber: this._textModel.getLineCount(),
                    },
                ],
            });
        }
        const initializeTokenization = () => {
            if (this._textModel.isTooLargeForTokenization()) {
                return [null, null];
            }
            const tokenizationSupport = _languages_js__WEBPACK_IMPORTED_MODULE_7__/* .TokenizationRegistry */ .RW.get(this.getLanguageId());
            if (!tokenizationSupport) {
                return [null, null];
            }
            let initialState;
            try {
                initialState = tokenizationSupport.getInitialState();
            }
            catch (e) {
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .onUnexpectedError */ .dL)(e);
                return [null, null];
            }
            return [tokenizationSupport, initialState];
        };
        const [tokenizationSupport, initialState] = initializeTokenization();
        if (tokenizationSupport && initialState) {
            this._tokenizer = new _textModelTokens_js__WEBPACK_IMPORTED_MODULE_9__/* .TokenizerWithStateStoreAndTextModel */ .Nc(this._textModel.getLineCount(), tokenizationSupport, this._textModel, this._languageIdCodec);
        }
        else {
            this._tokenizer = null;
        }
        this._backgroundTokenizer.clear();
        this._defaultBackgroundTokenizer = null;
        if (this._tokenizer) {
            const b = {
                setTokens: (tokens) => {
                    this.setTokens(tokens);
                },
                backgroundTokenizationFinished: () => {
                    if (this._backgroundTokenizationState === 2 /* BackgroundTokenizationState.Completed */) {
                        // We already did a full tokenization and don't go back to progressing.
                        return;
                    }
                    const newState = 2 /* BackgroundTokenizationState.Completed */;
                    this._backgroundTokenizationState = newState;
                    this._onDidChangeBackgroundTokenizationState.fire();
                },
                setEndState: (lineNumber, state) => {
                    var _a;
                    if (!this._tokenizer) {
                        return;
                    }
                    const firstInvalidEndStateLineNumber = this._tokenizer.store.getFirstInvalidEndStateLineNumber();
                    // Don't accept states for definitely valid states, the renderer is ahead of the worker!
                    if (firstInvalidEndStateLineNumber !== null && lineNumber >= firstInvalidEndStateLineNumber) {
                        (_a = this._tokenizer) === null || _a === void 0 ? void 0 : _a.store.setEndState(lineNumber, state);
                    }
                },
            };
            if (tokenizationSupport && tokenizationSupport.createBackgroundTokenizer && !tokenizationSupport.backgroundTokenizerShouldOnlyVerifyTokens) {
                this._backgroundTokenizer.value = tokenizationSupport.createBackgroundTokenizer(this._textModel, b);
            }
            if (!this._backgroundTokenizer.value) {
                this._backgroundTokenizer.value = this._defaultBackgroundTokenizer =
                    new _textModelTokens_js__WEBPACK_IMPORTED_MODULE_9__/* .DefaultBackgroundTokenizer */ .AX(this._tokenizer, b);
                this._defaultBackgroundTokenizer.handleChanges();
            }
            if ((tokenizationSupport === null || tokenizationSupport === void 0 ? void 0 : tokenizationSupport.backgroundTokenizerShouldOnlyVerifyTokens) && tokenizationSupport.createBackgroundTokenizer) {
                this._debugBackgroundTokens = new _tokens_contiguousTokensStore_js__WEBPACK_IMPORTED_MODULE_10__/* .ContiguousTokensStore */ .l(this._languageIdCodec);
                this._debugBackgroundStates = new _textModelTokens_js__WEBPACK_IMPORTED_MODULE_9__/* .TrackingTokenizationStateStore */ .qN(this._textModel.getLineCount());
                this._debugBackgroundTokenizer.clear();
                this._debugBackgroundTokenizer.value = tokenizationSupport.createBackgroundTokenizer(this._textModel, {
                    setTokens: (tokens) => {
                        var _a;
                        (_a = this._debugBackgroundTokens) === null || _a === void 0 ? void 0 : _a.setMultilineTokens(tokens, this._textModel);
                    },
                    backgroundTokenizationFinished() {
                        // NO OP
                    },
                    setEndState: (lineNumber, state) => {
                        var _a;
                        (_a = this._debugBackgroundStates) === null || _a === void 0 ? void 0 : _a.setEndState(lineNumber, state);
                    },
                });
            }
            else {
                this._debugBackgroundTokens = undefined;
                this._debugBackgroundStates = undefined;
                this._debugBackgroundTokenizer.value = undefined;
            }
        }
        this.refreshAllVisibleLineTokens();
    }
    handleDidChangeAttached() {
        var _a;
        (_a = this._defaultBackgroundTokenizer) === null || _a === void 0 ? void 0 : _a.handleChanges();
    }
    handleDidChangeContent(e) {
        var _a, _b, _c;
        if (e.isFlush) {
            // Don't fire the event, as the view might not have got the text change event yet
            this.resetTokenization(false);
        }
        else if (!e.isEolChange) { // We don't have to do anything on an EOL change
            for (const c of e.changes) {
                const [eolCount, firstLineLength] = (0,_core_eolCounter_js__WEBPACK_IMPORTED_MODULE_12__/* .countEOL */ .Q)(c.text);
                this._tokens.acceptEdit(c.range, eolCount, firstLineLength);
                (_a = this._debugBackgroundTokens) === null || _a === void 0 ? void 0 : _a.acceptEdit(c.range, eolCount, firstLineLength);
            }
            (_b = this._debugBackgroundStates) === null || _b === void 0 ? void 0 : _b.acceptChanges(e.changes);
            if (this._tokenizer) {
                this._tokenizer.store.acceptChanges(e.changes);
            }
            (_c = this._defaultBackgroundTokenizer) === null || _c === void 0 ? void 0 : _c.handleChanges();
        }
    }
    setTokens(tokens) {
        const { changes } = this._tokens.setMultilineTokens(tokens, this._textModel);
        if (changes.length > 0) {
            this._onDidChangeTokens.fire({ semanticTokensApplied: false, ranges: changes, });
        }
        return { changes: changes };
    }
    refreshAllVisibleLineTokens() {
        const ranges = _core_lineRange_js__WEBPACK_IMPORTED_MODULE_5__/* .LineRange */ .z.joinMany([...this._attachedViewStates].map(([_, s]) => s.lineRanges));
        this.refreshRanges(ranges);
    }
    refreshRanges(ranges) {
        for (const range of ranges) {
            this.refreshRange(range.startLineNumber, range.endLineNumberExclusive - 1);
        }
    }
    refreshRange(startLineNumber, endLineNumber) {
        var _a, _b;
        if (!this._tokenizer) {
            return;
        }
        startLineNumber = Math.max(1, Math.min(this._textModel.getLineCount(), startLineNumber));
        endLineNumber = Math.min(this._textModel.getLineCount(), endLineNumber);
        const builder = new _tokens_contiguousMultilineTokensBuilder_js__WEBPACK_IMPORTED_MODULE_14__/* .ContiguousMultilineTokensBuilder */ .N();
        const { heuristicTokens } = this._tokenizer.tokenizeHeuristically(builder, startLineNumber, endLineNumber);
        const changedTokens = this.setTokens(builder.finalize());
        if (heuristicTokens) {
            // We overrode tokens with heuristically computed ones.
            // Because old states might get reused (thus stopping invalidation),
            // we have to explicitly request the tokens for the changed ranges again.
            for (const c of changedTokens.changes) {
                (_a = this._backgroundTokenizer.value) === null || _a === void 0 ? void 0 : _a.requestTokens(c.fromLineNumber, c.toLineNumber + 1);
            }
        }
        (_b = this._defaultBackgroundTokenizer) === null || _b === void 0 ? void 0 : _b.checkFinished();
    }
    forceTokenization(lineNumber) {
        var _a, _b;
        const builder = new _tokens_contiguousMultilineTokensBuilder_js__WEBPACK_IMPORTED_MODULE_14__/* .ContiguousMultilineTokensBuilder */ .N();
        (_a = this._tokenizer) === null || _a === void 0 ? void 0 : _a.updateTokensUntilLine(builder, lineNumber);
        this.setTokens(builder.finalize());
        (_b = this._defaultBackgroundTokenizer) === null || _b === void 0 ? void 0 : _b.checkFinished();
    }
    isCheapToTokenize(lineNumber) {
        if (!this._tokenizer) {
            return true;
        }
        return this._tokenizer.isCheapToTokenize(lineNumber);
    }
    tokenizeIfCheap(lineNumber) {
        if (this.isCheapToTokenize(lineNumber)) {
            this.forceTokenization(lineNumber);
        }
    }
    getLineTokens(lineNumber) {
        var _a;
        const lineText = this._textModel.getLineContent(lineNumber);
        const result = this._tokens.getTokens(this._textModel.getLanguageId(), lineNumber - 1, lineText);
        if (this._debugBackgroundTokens && this._debugBackgroundStates && this._tokenizer) {
            if (this._debugBackgroundStates.getFirstInvalidEndStateLineNumberOrMax() > lineNumber && this._tokenizer.store.getFirstInvalidEndStateLineNumberOrMax() > lineNumber) {
                const backgroundResult = this._debugBackgroundTokens.getTokens(this._textModel.getLanguageId(), lineNumber - 1, lineText);
                if (!result.equals(backgroundResult) && ((_a = this._debugBackgroundTokenizer.value) === null || _a === void 0 ? void 0 : _a.reportMismatchingTokens)) {
                    this._debugBackgroundTokenizer.value.reportMismatchingTokens(lineNumber);
                }
            }
        }
        return result;
    }
    getTokenTypeIfInsertingCharacter(lineNumber, column, character) {
        if (!this._tokenizer) {
            return 0 /* StandardTokenType.Other */;
        }
        const position = this._textModel.validatePosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_13__/* .Position */ .L(lineNumber, column));
        this.forceTokenization(position.lineNumber);
        return this._tokenizer.getTokenTypeIfInsertingCharacter(position, character);
    }
    tokenizeLineWithEdit(position, length, newText) {
        if (!this._tokenizer) {
            return null;
        }
        const validatedPosition = this._textModel.validatePosition(position);
        this.forceTokenization(validatedPosition.lineNumber);
        return this._tokenizer.tokenizeLineWithEdit(validatedPosition, length, newText);
    }
    get hasTokens() {
        return this._tokens.hasTokens;
    }
}
class AttachedViewHandler extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .Disposable */ .JT {
    get lineRanges() { return this._lineRanges; }
    constructor(_refreshTokens) {
        super();
        this._refreshTokens = _refreshTokens;
        this.runner = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_1__/* .RunOnceScheduler */ .pY(() => this.update(), 50));
        this._computedLineRanges = [];
        this._lineRanges = [];
    }
    update() {
        if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS)(this._computedLineRanges, this._lineRanges, (a, b) => a.equals(b))) {
            return;
        }
        this._computedLineRanges = this._lineRanges;
        this._refreshTokens();
    }
    handleStateChange(state) {
        this._lineRanges = state.visibleLineRanges;
        if (state.stabilized) {
            this.runner.cancel();
            this.update();
        }
        else {
            this.runner.schedule();
        }
    }
}


/***/ }),

/***/ 47752:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ computeIndentLevel; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Returns:
 *  - -1 => the line consists of whitespace
 *  - otherwise => the indent level is returned value
 */
function computeIndentLevel(line, tabSize) {
    let indent = 0;
    let i = 0;
    const len = line.length;
    while (i < len) {
        const chCode = line.charCodeAt(i);
        if (chCode === 32 /* CharCode.Space */) {
            indent++;
        }
        else if (chCode === 9 /* CharCode.Tab */) {
            indent = indent - indent % tabSize + tabSize;
        }
        else {
            break;
        }
        i++;
    }
    if (i === len) {
        return -1; // line only consists of whitespace
    }
    return indent;
}


/***/ })

}]);