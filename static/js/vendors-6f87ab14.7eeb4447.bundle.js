"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-6f87ab14"],{

/***/ 96422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HS: function() { return /* binding */ ModelDecorationInjectedTextOptions; },
  qx: function() { return /* binding */ ModelDecorationOptions; },
  yO: function() { return /* binding */ TextModel; }
});

// UNUSED EXPORTS: AttachedViews, ModelDecorationGlyphMarginOptions, ModelDecorationMinimapOptions, ModelDecorationOverviewRulerOptions, createTextBuffer, createTextBufferFactory, createTextBufferFactoryFromSnapshot

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var common_color = __webpack_require__(2157);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/eolCounter.js
var eolCounter = __webpack_require__(11380);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/indentation.js
var indentation = __webpack_require__(20392);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(74980);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/textModelDefaults.js
var textModelDefaults = __webpack_require__(20347);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(21608);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js + 5 modules
var languageConfigurationRegistry = __webpack_require__(11296);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(11754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsImpl.js + 2 modules
var bracketPairsImpl = __webpack_require__(12813);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/colorizedBracketPairsDecorationProvider.js
var colorizedBracketPairsDecorationProvider = __webpack_require__(5561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/editStack.js
var editStack = __webpack_require__(65479);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/guidesTextModelPart.js
var guidesTextModelPart = __webpack_require__(47645);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/indentationGuesser.js
var indentationGuesser = __webpack_require__(39440);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/intervalTree.js
var intervalTree = __webpack_require__(62701);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer.js
var pieceTreeTextBuffer = __webpack_require__(59195);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js
var pieceTreeTextBufferBuilder = __webpack_require__(44225);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js
var textModelSearch = __webpack_require__(17768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/lineRange.js
var lineRange = __webpack_require__(47599);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js
var wordHelper = __webpack_require__(81814);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(58606);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModelPart.js
var textModelPart = __webpack_require__(44199);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js
var stopwatch = __webpack_require__(61111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/offsetRange.js
var offsetRange = __webpack_require__(3039);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/nullTokenize.js
var nullTokenize = __webpack_require__(973);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/fixedArray.js
var fixedArray = __webpack_require__(20275);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousMultilineTokensBuilder.js + 1 modules
var contiguousMultilineTokensBuilder = __webpack_require__(3904);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/lineTokens.js
var tokens_lineTokens = __webpack_require__(15834);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModelTokens.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/











class TokenizerWithStateStore {
    constructor(lineCount, tokenizationSupport) {
        this.tokenizationSupport = tokenizationSupport;
        this.initialState = this.tokenizationSupport.getInitialState();
        this.store = new TrackingTokenizationStateStore(lineCount);
    }
    getStartState(lineNumber) {
        if (lineNumber === 1) {
            return this.initialState;
        }
        return this.store.getEndState(lineNumber - 1);
    }
}
class TokenizerWithStateStoreAndTextModel extends TokenizerWithStateStore {
    constructor(lineCount, tokenizationSupport, _textModel, _languageIdCodec) {
        super(lineCount, tokenizationSupport);
        this._textModel = _textModel;
        this._languageIdCodec = _languageIdCodec;
    }
    updateTokensUntilLine(builder, lineNumber) {
        const languageId = this._textModel.getLanguageId();
        while (true) {
            const nextLineNumber = this.store.getFirstInvalidEndStateLineNumber();
            if (!nextLineNumber || nextLineNumber > lineNumber) {
                break;
            }
            const text = this._textModel.getLineContent(nextLineNumber);
            const lineStartState = this.getStartState(nextLineNumber);
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, lineStartState);
            builder.add(nextLineNumber, r.tokens);
            this.store.setEndState(nextLineNumber, r.endState);
        }
    }
    /** assumes state is up to date */
    getTokenTypeIfInsertingCharacter(position, character) {
        // TODO@hediet: use tokenizeLineWithEdit
        const lineStartState = this.getStartState(position.lineNumber);
        if (!lineStartState) {
            return 0 /* StandardTokenType.Other */;
        }
        const languageId = this._textModel.getLanguageId();
        const lineContent = this._textModel.getLineContent(position.lineNumber);
        // Create the text as if `character` was inserted
        const text = (lineContent.substring(0, position.column - 1)
            + character
            + lineContent.substring(position.column - 1));
        const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, lineStartState);
        const lineTokens = new tokens_lineTokens/* LineTokens */.A(r.tokens, text, this._languageIdCodec);
        if (lineTokens.getCount() === 0) {
            return 0 /* StandardTokenType.Other */;
        }
        const tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
        return lineTokens.getStandardTokenType(tokenIndex);
    }
    /** assumes state is up to date */
    tokenizeLineWithEdit(position, length, newText) {
        const lineNumber = position.lineNumber;
        const column = position.column;
        const lineStartState = this.getStartState(lineNumber);
        if (!lineStartState) {
            return null;
        }
        const curLineContent = this._textModel.getLineContent(lineNumber);
        const newLineContent = curLineContent.substring(0, column - 1)
            + newText + curLineContent.substring(column - 1 + length);
        const languageId = this._textModel.getLanguageIdAtPosition(lineNumber, 0);
        const result = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, newLineContent, true, lineStartState);
        const lineTokens = new tokens_lineTokens/* LineTokens */.A(result.tokens, newLineContent, this._languageIdCodec);
        return lineTokens;
    }
    isCheapToTokenize(lineNumber) {
        const firstInvalidLineNumber = this.store.getFirstInvalidEndStateLineNumberOrMax();
        if (lineNumber < firstInvalidLineNumber) {
            return true;
        }
        if (lineNumber === firstInvalidLineNumber
            && this._textModel.getLineLength(lineNumber) < 2048 /* Constants.CHEAP_TOKENIZATION_LENGTH_LIMIT */) {
            return true;
        }
        return false;
    }
    /**
     * The result is not cached.
     */
    tokenizeHeuristically(builder, startLineNumber, endLineNumber) {
        if (endLineNumber <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
            // nothing to do
            return { heuristicTokens: false };
        }
        if (startLineNumber <= this.store.getFirstInvalidEndStateLineNumberOrMax()) {
            // tokenization has reached the viewport start...
            this.updateTokensUntilLine(builder, endLineNumber);
            return { heuristicTokens: false };
        }
        let state = this.guessStartState(startLineNumber);
        const languageId = this._textModel.getLanguageId();
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const text = this._textModel.getLineContent(lineNumber);
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, text, true, state);
            builder.add(lineNumber, r.tokens);
            state = r.endState;
        }
        return { heuristicTokens: true };
    }
    guessStartState(lineNumber) {
        let nonWhitespaceColumn = this._textModel.getLineFirstNonWhitespaceColumn(lineNumber);
        const likelyRelevantLines = [];
        let initialState = null;
        for (let i = lineNumber - 1; nonWhitespaceColumn > 1 && i >= 1; i--) {
            const newNonWhitespaceIndex = this._textModel.getLineFirstNonWhitespaceColumn(i);
            // Ignore lines full of whitespace
            if (newNonWhitespaceIndex === 0) {
                continue;
            }
            if (newNonWhitespaceIndex < nonWhitespaceColumn) {
                likelyRelevantLines.push(this._textModel.getLineContent(i));
                nonWhitespaceColumn = newNonWhitespaceIndex;
                initialState = this.getStartState(i);
                if (initialState) {
                    break;
                }
            }
        }
        if (!initialState) {
            initialState = this.tokenizationSupport.getInitialState();
        }
        likelyRelevantLines.reverse();
        const languageId = this._textModel.getLanguageId();
        let state = initialState;
        for (const line of likelyRelevantLines) {
            const r = safeTokenize(this._languageIdCodec, languageId, this.tokenizationSupport, line, false, state);
            state = r.endState;
        }
        return state;
    }
}
class TrackingTokenizationStateStore {
    constructor(lineCount) {
        this.lineCount = lineCount;
        this.tokenizationStateStore = new TokenizationStateStore();
        this._invalidEndStatesLineNumbers = new RangePriorityQueueImpl();
        this._invalidEndStatesLineNumbers.addRange(new offsetRange/* OffsetRange */.q(1, lineCount + 1));
    }
    getEndState(lineNumber) {
        return this.tokenizationStateStore.getEndState(lineNumber);
    }
    setEndState(lineNumber, state) {
        while (true) {
            const min = this._invalidEndStatesLineNumbers.min;
            if (min !== null && min <= lineNumber) {
                this._invalidEndStatesLineNumbers.removeMin();
            }
            else {
                break;
            }
        }
        const r = this.tokenizationStateStore.setEndState(lineNumber, state);
        if (r && lineNumber < this.lineCount) {
            // because the state changed, we cannot trust the next state anymore and have to invalidate it.
            this._invalidEndStatesLineNumbers.addRange(new offsetRange/* OffsetRange */.q(lineNumber + 1, lineNumber + 2));
        }
        return r;
    }
    acceptChange(range, newLineCount) {
        this.lineCount += newLineCount - range.length;
        this.tokenizationStateStore.acceptChange(range, newLineCount);
        this._invalidEndStatesLineNumbers.addRangeAndResize(new offsetRange/* OffsetRange */.q(range.startLineNumber, range.endLineNumberExclusive), newLineCount);
    }
    acceptChanges(changes) {
        for (const c of changes) {
            const [eolCount] = (0,eolCounter/* countEOL */.Q)(c.text);
            this.acceptChange(new lineRange/* LineRange */.z(c.range.startLineNumber, c.range.endLineNumber + 1), eolCount + 1);
        }
    }
    invalidateEndStateRange(range) {
        this._invalidEndStatesLineNumbers.addRange(new offsetRange/* OffsetRange */.q(range.startLineNumber, range.endLineNumberExclusive));
    }
    getFirstInvalidEndStateLineNumber() {
        return this._invalidEndStatesLineNumbers.min;
    }
    getFirstInvalidEndStateLineNumberOrMax() {
        return this._invalidEndStatesLineNumbers.min || Number.MAX_SAFE_INTEGER;
    }
    isTokenizationComplete() {
        return this._invalidEndStatesLineNumbers.min === null;
    }
}
class TokenizationStateStore {
    constructor() {
        this._lineEndStates = new fixedArray/* FixedArray */.v(null);
    }
    getEndState(lineNumber) {
        return this._lineEndStates.get(lineNumber);
    }
    setEndState(lineNumber, state) {
        const oldState = this._lineEndStates.get(lineNumber);
        if (oldState && oldState.equals(state)) {
            return false;
        }
        this._lineEndStates.set(lineNumber, state);
        return true;
    }
    acceptChange(range, newLineCount) {
        let length = range.length;
        if (newLineCount > 0 && length > 0) {
            // Keep the last state, even though it is unrelated.
            // But if the new state happens to agree with this last state, then we know we can stop tokenizing.
            length--;
            newLineCount--;
        }
        this._lineEndStates.replace(range.startLineNumber, length, newLineCount);
    }
}
class RangePriorityQueueImpl {
    constructor() {
        this._ranges = [];
    }
    get min() {
        if (this._ranges.length === 0) {
            return null;
        }
        return this._ranges[0].start;
    }
    removeMin() {
        if (this._ranges.length === 0) {
            return null;
        }
        const range = this._ranges[0];
        if (range.start + 1 === range.endExclusive) {
            this._ranges.shift();
        }
        else {
            this._ranges[0] = new offsetRange/* OffsetRange */.q(range.start + 1, range.endExclusive);
        }
        return range.start;
    }
    addRange(range) {
        offsetRange/* OffsetRange */.q.addRange(range, this._ranges);
    }
    addRangeAndResize(range, newLength) {
        let idxFirstMightBeIntersecting = 0;
        while (!(idxFirstMightBeIntersecting >= this._ranges.length || range.start <= this._ranges[idxFirstMightBeIntersecting].endExclusive)) {
            idxFirstMightBeIntersecting++;
        }
        let idxFirstIsAfter = idxFirstMightBeIntersecting;
        while (!(idxFirstIsAfter >= this._ranges.length || range.endExclusive < this._ranges[idxFirstIsAfter].start)) {
            idxFirstIsAfter++;
        }
        const delta = newLength - range.length;
        for (let i = idxFirstIsAfter; i < this._ranges.length; i++) {
            this._ranges[i] = this._ranges[i].delta(delta);
        }
        if (idxFirstMightBeIntersecting === idxFirstIsAfter) {
            const newRange = new offsetRange/* OffsetRange */.q(range.start, range.start + newLength);
            if (!newRange.isEmpty) {
                this._ranges.splice(idxFirstMightBeIntersecting, 0, newRange);
            }
        }
        else {
            const start = Math.min(range.start, this._ranges[idxFirstMightBeIntersecting].start);
            const endEx = Math.max(range.endExclusive, this._ranges[idxFirstIsAfter - 1].endExclusive);
            const newRange = new offsetRange/* OffsetRange */.q(start, endEx + delta);
            if (!newRange.isEmpty) {
                this._ranges.splice(idxFirstMightBeIntersecting, idxFirstIsAfter - idxFirstMightBeIntersecting, newRange);
            }
            else {
                this._ranges.splice(idxFirstMightBeIntersecting, idxFirstIsAfter - idxFirstMightBeIntersecting);
            }
        }
    }
    toString() {
        return this._ranges.map(r => r.toString()).join(' + ');
    }
}
function safeTokenize(languageIdCodec, languageId, tokenizationSupport, text, hasEOL, state) {
    let r = null;
    if (tokenizationSupport) {
        try {
            r = tokenizationSupport.tokenizeEncoded(text, hasEOL, state.clone());
        }
        catch (e) {
            (0,errors/* onUnexpectedError */.dL)(e);
        }
    }
    if (!r) {
        r = (0,nullTokenize/* nullTokenizeEncoded */.Dy)(languageIdCodec.encodeLanguageId(languageId), state);
    }
    tokens_lineTokens/* LineTokens */.A.convertToEndOffset(r.tokens, text.length);
    return r;
}
class DefaultBackgroundTokenizer {
    constructor(_tokenizerWithStateStore, _backgroundTokenStore) {
        this._tokenizerWithStateStore = _tokenizerWithStateStore;
        this._backgroundTokenStore = _backgroundTokenStore;
        this._isDisposed = false;
        this._isScheduled = false;
    }
    dispose() {
        this._isDisposed = true;
    }
    handleChanges() {
        this._beginBackgroundTokenization();
    }
    _beginBackgroundTokenization() {
        if (this._isScheduled || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize()) {
            return;
        }
        this._isScheduled = true;
        (0,common_async/* runWhenIdle */.To)((deadline) => {
            this._isScheduled = false;
            this._backgroundTokenizeWithDeadline(deadline);
        });
    }
    /**
     * Tokenize until the deadline occurs, but try to yield every 1-2ms.
     */
    _backgroundTokenizeWithDeadline(deadline) {
        // Read the time remaining from the `deadline` immediately because it is unclear
        // if the `deadline` object will be valid after execution leaves this function.
        const endTime = Date.now() + deadline.timeRemaining();
        const execute = () => {
            if (this._isDisposed || !this._tokenizerWithStateStore._textModel.isAttachedToEditor() || !this._hasLinesToTokenize()) {
                // disposed in the meantime or detached or finished
                return;
            }
            this._backgroundTokenizeForAtLeast1ms();
            if (Date.now() < endTime) {
                // There is still time before reaching the deadline, so yield to the browser and then
                // continue execution
                (0,platform/* setTimeout0 */.fn)(execute);
            }
            else {
                // The deadline has been reached, so schedule a new idle callback if necessary
                this._beginBackgroundTokenization();
            }
        };
        execute();
    }
    /**
     * Tokenize for at least 1ms.
     */
    _backgroundTokenizeForAtLeast1ms() {
        const lineCount = this._tokenizerWithStateStore._textModel.getLineCount();
        const builder = new contiguousMultilineTokensBuilder/* ContiguousMultilineTokensBuilder */.N();
        const sw = stopwatch/* StopWatch */.G.create(false);
        do {
            if (sw.elapsed() > 1) {
                // the comparison is intentionally > 1 and not >= 1 to ensure that
                // a full millisecond has elapsed, given how microseconds are rounded
                // to milliseconds
                break;
            }
            const tokenizedLineNumber = this._tokenizeOneInvalidLine(builder);
            if (tokenizedLineNumber >= lineCount) {
                break;
            }
        } while (this._hasLinesToTokenize());
        this._backgroundTokenStore.setTokens(builder.finalize());
        this.checkFinished();
    }
    _hasLinesToTokenize() {
        if (!this._tokenizerWithStateStore) {
            return false;
        }
        return !this._tokenizerWithStateStore.store.isTokenizationComplete();
    }
    _tokenizeOneInvalidLine(builder) {
        if (!this._tokenizerWithStateStore || !this._hasLinesToTokenize()) {
            return this._tokenizerWithStateStore._textModel.getLineCount() + 1;
        }
        const lineNumber = this._tokenizerWithStateStore.store.getFirstInvalidEndStateLineNumber();
        this._tokenizerWithStateStore.updateTokensUntilLine(builder, lineNumber);
        return lineNumber;
    }
    checkFinished() {
        if (this._isDisposed) {
            return;
        }
        if (this._tokenizerWithStateStore.store.isTokenizationComplete()) {
            this._backgroundTokenStore.backgroundTokenizationFinished();
        }
    }
    requestTokens(startLineNumber, endLineNumberExclusive) {
        this._tokenizerWithStateStore.store.invalidateEndStateRange(new lineRange/* LineRange */.z(startLineNumber, endLineNumberExclusive));
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousTokensStore.js + 1 modules
var contiguousTokensStore = __webpack_require__(29286);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/sparseTokensStore.js
var sparseTokensStore = __webpack_require__(35576);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/tokenizationTextModelPart.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/















class TokenizationTextModelPart extends textModelPart/* TextModelPart */.U {
    constructor(_languageService, _languageConfigurationService, _textModel, _bracketPairsTextModelPart, _languageId, _attachedViews) {
        super();
        this._languageService = _languageService;
        this._languageConfigurationService = _languageConfigurationService;
        this._textModel = _textModel;
        this._bracketPairsTextModelPart = _bracketPairsTextModelPart;
        this._languageId = _languageId;
        this._attachedViews = _attachedViews;
        this._semanticTokens = new sparseTokensStore/* SparseTokensStore */.u(this._languageService.languageIdCodec);
        this._onDidChangeLanguage = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeLanguage = this._onDidChangeLanguage.event;
        this._onDidChangeLanguageConfiguration = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeLanguageConfiguration = this._onDidChangeLanguageConfiguration.event;
        this._onDidChangeTokens = this._register(new common_event/* Emitter */.Q5());
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
                const [eolCount, firstLineLength, lastLineLength] = (0,eolCounter/* countEOL */.Q)(c.text);
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
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
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
        const rightBiasedWord = (0,wordHelper/* getWordAtText */.t2)(position.column, this.getLanguageConfiguration(lineTokens.getLanguageId(tokenIndex)).getWordDefinition(), lineContent.substring(rbStartOffset, rbEndOffset), rbStartOffset);
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
            const leftBiasedWord = (0,wordHelper/* getWordAtText */.t2)(position.column, this.getLanguageConfiguration(lineTokens.getLanguageId(tokenIndex - 1)).getWordDefinition(), lineContent.substring(lbStartOffset, lbEndOffset), lbStartOffset);
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
        const position = this._textModel.validatePosition(new core_position/* Position */.L(lineNumber, column));
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
class GrammarTokens extends lifecycle/* Disposable */.JT {
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
        this._backgroundTokenizer = this._register(new lifecycle/* MutableDisposable */.XK());
        this._tokens = new contiguousTokensStore/* ContiguousTokensStore */.l(this._languageIdCodec);
        this._debugBackgroundTokenizer = this._register(new lifecycle/* MutableDisposable */.XK());
        this._backgroundTokenizationState = 1 /* BackgroundTokenizationState.InProgress */;
        this._onDidChangeBackgroundTokenizationState = this._register(new common_event/* Emitter */.Q5());
        /** @internal, should not be exposed by the text model! */
        this.onDidChangeBackgroundTokenizationState = this._onDidChangeBackgroundTokenizationState.event;
        this._onDidChangeTokens = this._register(new common_event/* Emitter */.Q5());
        /** @internal, should not be exposed by the text model! */
        this.onDidChangeTokens = this._onDidChangeTokens.event;
        this._attachedViewStates = this._register(new lifecycle/* DisposableMap */.b2());
        this._register(languages/* TokenizationRegistry */.RW.onDidChange((e) => {
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
            this._debugBackgroundStates = new TrackingTokenizationStateStore(this._textModel.getLineCount());
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
            const tokenizationSupport = languages/* TokenizationRegistry */.RW.get(this.getLanguageId());
            if (!tokenizationSupport) {
                return [null, null];
            }
            let initialState;
            try {
                initialState = tokenizationSupport.getInitialState();
            }
            catch (e) {
                (0,errors/* onUnexpectedError */.dL)(e);
                return [null, null];
            }
            return [tokenizationSupport, initialState];
        };
        const [tokenizationSupport, initialState] = initializeTokenization();
        if (tokenizationSupport && initialState) {
            this._tokenizer = new TokenizerWithStateStoreAndTextModel(this._textModel.getLineCount(), tokenizationSupport, this._textModel, this._languageIdCodec);
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
                    var _a, _b, _c;
                    if (!state) {
                        throw new errors/* BugIndicatingError */.he();
                    }
                    const firstInvalidEndStateLineNumber = (_b = (_a = this._tokenizer) === null || _a === void 0 ? void 0 : _a.store.getFirstInvalidEndStateLineNumber()) !== null && _b !== void 0 ? _b : undefined;
                    if (firstInvalidEndStateLineNumber !== undefined && lineNumber >= firstInvalidEndStateLineNumber) {
                        // Don't accept states for definitely valid states
                        (_c = this._tokenizer) === null || _c === void 0 ? void 0 : _c.store.setEndState(lineNumber, state);
                    }
                },
            };
            if (tokenizationSupport && tokenizationSupport.createBackgroundTokenizer && !tokenizationSupport.backgroundTokenizerShouldOnlyVerifyTokens) {
                this._backgroundTokenizer.value = tokenizationSupport.createBackgroundTokenizer(this._textModel, b);
            }
            if (!this._backgroundTokenizer.value) {
                this._backgroundTokenizer.value = this._defaultBackgroundTokenizer =
                    new DefaultBackgroundTokenizer(this._tokenizer, b);
                this._defaultBackgroundTokenizer.handleChanges();
            }
            if ((tokenizationSupport === null || tokenizationSupport === void 0 ? void 0 : tokenizationSupport.backgroundTokenizerShouldOnlyVerifyTokens) && tokenizationSupport.createBackgroundTokenizer) {
                this._debugBackgroundTokens = new contiguousTokensStore/* ContiguousTokensStore */.l(this._languageIdCodec);
                this._debugBackgroundStates = new TrackingTokenizationStateStore(this._textModel.getLineCount());
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
                const [eolCount, firstLineLength] = (0,eolCounter/* countEOL */.Q)(c.text);
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
        const ranges = lineRange/* LineRange */.z.joinMany([...this._attachedViewStates].map(([_, s]) => s.lineRanges));
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
        const builder = new contiguousMultilineTokensBuilder/* ContiguousMultilineTokensBuilder */.N();
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
        const builder = new contiguousMultilineTokensBuilder/* ContiguousMultilineTokensBuilder */.N();
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
        const position = this._textModel.validatePosition(new core_position/* Position */.L(lineNumber, column));
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
class AttachedViewHandler extends lifecycle/* Disposable */.JT {
    get lineRanges() { return this._lineRanges; }
    constructor(_refreshTokens) {
        super();
        this._refreshTokens = _refreshTokens;
        this.runner = this._register(new common_async/* RunOnceScheduler */.pY(() => this.update(), 50));
        this._computedLineRanges = [];
        this._lineRanges = [];
    }
    update() {
        if ((0,arrays/* equals */.fS)(this._computedLineRanges, this._lineRanges)) {
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/textModelEvents.js
var textModelEvents = __webpack_require__(67033);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/undoRedo/common/undoRedo.js
var undoRedo = __webpack_require__(18988);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js
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





























function createTextBufferFactory(text) {
    const builder = new pieceTreeTextBufferBuilder/* PieceTreeTextBufferBuilder */.M();
    builder.acceptChunk(text);
    return builder.finish();
}
function createTextBufferFactoryFromSnapshot(snapshot) {
    const builder = new pieceTreeTextBufferBuilder/* PieceTreeTextBufferBuilder */.M();
    let chunk;
    while (typeof (chunk = snapshot.read()) === 'string') {
        builder.acceptChunk(chunk);
    }
    return builder.finish();
}
function createTextBuffer(value, defaultEOL) {
    let factory;
    if (typeof value === 'string') {
        factory = createTextBufferFactory(value);
    }
    else if (model/* isITextSnapshot */.Hf(value)) {
        factory = createTextBufferFactoryFromSnapshot(value);
    }
    else {
        factory = value;
    }
    return factory.create(defaultEOL);
}
let MODEL_ID = 0;
const LIMIT_FIND_COUNT = 999;
const LONG_LINE_BOUNDARY = 10000;
class TextModelSnapshot {
    constructor(source) {
        this._source = source;
        this._eos = false;
    }
    read() {
        if (this._eos) {
            return null;
        }
        const result = [];
        let resultCnt = 0;
        let resultLength = 0;
        do {
            const tmp = this._source.read();
            if (tmp === null) {
                // end-of-stream
                this._eos = true;
                if (resultCnt === 0) {
                    return null;
                }
                else {
                    return result.join('');
                }
            }
            if (tmp.length > 0) {
                result[resultCnt++] = tmp;
                resultLength += tmp.length;
            }
            if (resultLength >= 64 * 1024) {
                return result.join('');
            }
        } while (true);
    }
}
const invalidFunc = () => { throw new Error(`Invalid change accessor`); };
let TextModel = class TextModel extends lifecycle/* Disposable */.JT {
    static resolveOptions(textBuffer, options) {
        if (options.detectIndentation) {
            const guessedIndentation = (0,indentationGuesser/* guessIndentation */.L)(textBuffer, options.tabSize, options.insertSpaces);
            return new model/* TextModelResolvedOptions */.dJ({
                tabSize: guessedIndentation.tabSize,
                indentSize: 'tabSize',
                insertSpaces: guessedIndentation.insertSpaces,
                trimAutoWhitespace: options.trimAutoWhitespace,
                defaultEOL: options.defaultEOL,
                bracketPairColorizationOptions: options.bracketPairColorizationOptions,
            });
        }
        return new model/* TextModelResolvedOptions */.dJ(options);
    }
    get onDidChangeLanguage() { return this._tokenizationTextModelPart.onDidChangeLanguage; }
    get onDidChangeLanguageConfiguration() { return this._tokenizationTextModelPart.onDidChangeLanguageConfiguration; }
    get onDidChangeTokens() { return this._tokenizationTextModelPart.onDidChangeTokens; }
    onDidChangeContent(listener) {
        return this._eventEmitter.slowEvent((e) => listener(e.contentChangedEvent));
    }
    onDidChangeContentOrInjectedText(listener) {
        return (0,lifecycle/* combinedDisposable */.F8)(this._eventEmitter.fastEvent(e => listener(e)), this._onDidChangeInjectedText.event(e => listener(e)));
    }
    _isDisposing() { return this.__isDisposing; }
    get tokenization() { return this._tokenizationTextModelPart; }
    get bracketPairs() { return this._bracketPairs; }
    get guides() { return this._guidesTextModelPart; }
    constructor(source, languageIdOrSelection, creationOptions, associatedResource = null, _undoRedoService, _languageService, _languageConfigurationService) {
        super();
        this._undoRedoService = _undoRedoService;
        this._languageService = _languageService;
        this._languageConfigurationService = _languageConfigurationService;
        //#region Events
        this._onWillDispose = this._register(new common_event/* Emitter */.Q5());
        this.onWillDispose = this._onWillDispose.event;
        this._onDidChangeDecorations = this._register(new DidChangeDecorationsEmitter(affectedInjectedTextLines => this.handleBeforeFireDecorationsChangedEvent(affectedInjectedTextLines)));
        this.onDidChangeDecorations = this._onDidChangeDecorations.event;
        this._onDidChangeOptions = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeOptions = this._onDidChangeOptions.event;
        this._onDidChangeAttached = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeAttached = this._onDidChangeAttached.event;
        this._onDidChangeInjectedText = this._register(new common_event/* Emitter */.Q5());
        this._eventEmitter = this._register(new DidChangeContentEmitter());
        this._languageSelectionListener = this._register(new lifecycle/* MutableDisposable */.XK());
        this._deltaDecorationCallCnt = 0;
        this._attachedViews = new AttachedViews();
        // Generate a new unique model id
        MODEL_ID++;
        this.id = '$model' + MODEL_ID;
        this.isForSimpleWidget = creationOptions.isForSimpleWidget;
        if (typeof associatedResource === 'undefined' || associatedResource === null) {
            this._associatedResource = uri/* URI */.o.parse('inmemory://model/' + MODEL_ID);
        }
        else {
            this._associatedResource = associatedResource;
        }
        this._attachedEditorCount = 0;
        const { textBuffer, disposable } = createTextBuffer(source, creationOptions.defaultEOL);
        this._buffer = textBuffer;
        this._bufferDisposable = disposable;
        this._options = TextModel.resolveOptions(this._buffer, creationOptions);
        const languageId = (typeof languageIdOrSelection === 'string' ? languageIdOrSelection : languageIdOrSelection.languageId);
        if (typeof languageIdOrSelection !== 'string') {
            this._languageSelectionListener.value = languageIdOrSelection.onDidChange(() => this._setLanguage(languageIdOrSelection.languageId));
        }
        this._bracketPairs = this._register(new bracketPairsImpl/* BracketPairsTextModelPart */.Q(this, this._languageConfigurationService));
        this._guidesTextModelPart = this._register(new guidesTextModelPart/* GuidesTextModelPart */.l(this, this._languageConfigurationService));
        this._decorationProvider = this._register(new colorizedBracketPairsDecorationProvider/* ColorizedBracketPairsDecorationProvider */.z(this));
        this._tokenizationTextModelPart = new TokenizationTextModelPart(this._languageService, this._languageConfigurationService, this, this._bracketPairs, languageId, this._attachedViews);
        const bufferLineCount = this._buffer.getLineCount();
        const bufferTextLength = this._buffer.getValueLengthInRange(new core_range/* Range */.e(1, 1, bufferLineCount, this._buffer.getLineLength(bufferLineCount) + 1), 0 /* model.EndOfLinePreference.TextDefined */);
        // !!! Make a decision in the ctor and permanently respect this decision !!!
        // If a model is too large at construction time, it will never get tokenized,
        // under no circumstances.
        if (creationOptions.largeFileOptimizations) {
            this._isTooLargeForTokenization = ((bufferTextLength > TextModel.LARGE_FILE_SIZE_THRESHOLD)
                || (bufferLineCount > TextModel.LARGE_FILE_LINE_COUNT_THRESHOLD));
        }
        else {
            this._isTooLargeForTokenization = false;
        }
        this._isTooLargeForSyncing = (bufferTextLength > TextModel._MODEL_SYNC_LIMIT);
        this._versionId = 1;
        this._alternativeVersionId = 1;
        this._initialUndoRedoSnapshot = null;
        this._isDisposed = false;
        this.__isDisposing = false;
        this._instanceId = strings/* singleLetterHash */.PJ(MODEL_ID);
        this._lastDecorationId = 0;
        this._decorations = Object.create(null);
        this._decorationsTree = new DecorationsTrees();
        this._commandManager = new editStack/* EditStack */.NL(this, this._undoRedoService);
        this._isUndoing = false;
        this._isRedoing = false;
        this._trimAutoWhitespaceLines = null;
        this._register(this._decorationProvider.onDidChange(() => {
            this._onDidChangeDecorations.beginDeferredEmit();
            this._onDidChangeDecorations.fire();
            this._onDidChangeDecorations.endDeferredEmit();
        }));
        this._languageService.requestRichLanguageFeatures(languageId);
    }
    dispose() {
        this.__isDisposing = true;
        this._onWillDispose.fire();
        this._tokenizationTextModelPart.dispose();
        this._isDisposed = true;
        super.dispose();
        this._bufferDisposable.dispose();
        this.__isDisposing = false;
        // Manually release reference to previous text buffer to avoid large leaks
        // in case someone leaks a TextModel reference
        const emptyDisposedTextBuffer = new pieceTreeTextBuffer/* PieceTreeTextBuffer */.A([], '', '\n', false, false, true, true);
        emptyDisposedTextBuffer.dispose();
        this._buffer = emptyDisposedTextBuffer;
        this._bufferDisposable = lifecycle/* Disposable */.JT.None;
    }
    _assertNotDisposed() {
        if (this._isDisposed) {
            throw new Error('Model is disposed!');
        }
    }
    _emitContentChangedEvent(rawChange, change) {
        if (this.__isDisposing) {
            // Do not confuse listeners by emitting any event after disposing
            return;
        }
        this._tokenizationTextModelPart.handleDidChangeContent(change);
        this._bracketPairs.handleDidChangeContent(change);
        this._eventEmitter.fire(new textModelEvents/* InternalModelContentChangeEvent */.fV(rawChange, change));
    }
    setValue(value) {
        this._assertNotDisposed();
        if (value === null || value === undefined) {
            throw (0,errors/* illegalArgument */.b1)();
        }
        const { textBuffer, disposable } = createTextBuffer(value, this._options.defaultEOL);
        this._setValueFromTextBuffer(textBuffer, disposable);
    }
    _createContentChanged2(range, rangeOffset, rangeLength, text, isUndoing, isRedoing, isFlush, isEolChange) {
        return {
            changes: [{
                    range: range,
                    rangeOffset: rangeOffset,
                    rangeLength: rangeLength,
                    text: text,
                }],
            eol: this._buffer.getEOL(),
            isEolChange: isEolChange,
            versionId: this.getVersionId(),
            isUndoing: isUndoing,
            isRedoing: isRedoing,
            isFlush: isFlush
        };
    }
    _setValueFromTextBuffer(textBuffer, textBufferDisposable) {
        this._assertNotDisposed();
        const oldFullModelRange = this.getFullModelRange();
        const oldModelValueLength = this.getValueLengthInRange(oldFullModelRange);
        const endLineNumber = this.getLineCount();
        const endColumn = this.getLineMaxColumn(endLineNumber);
        this._buffer = textBuffer;
        this._bufferDisposable.dispose();
        this._bufferDisposable = textBufferDisposable;
        this._increaseVersionId();
        // Destroy all my decorations
        this._decorations = Object.create(null);
        this._decorationsTree = new DecorationsTrees();
        // Destroy my edit history and settings
        this._commandManager.clear();
        this._trimAutoWhitespaceLines = null;
        this._emitContentChangedEvent(new textModelEvents/* ModelRawContentChangedEvent */.dQ([
            new textModelEvents/* ModelRawFlush */.Jx()
        ], this._versionId, false, false), this._createContentChanged2(new core_range/* Range */.e(1, 1, endLineNumber, endColumn), 0, oldModelValueLength, this.getValue(), false, false, true, false));
    }
    setEOL(eol) {
        this._assertNotDisposed();
        const newEOL = (eol === 1 /* model.EndOfLineSequence.CRLF */ ? '\r\n' : '\n');
        if (this._buffer.getEOL() === newEOL) {
            // Nothing to do
            return;
        }
        const oldFullModelRange = this.getFullModelRange();
        const oldModelValueLength = this.getValueLengthInRange(oldFullModelRange);
        const endLineNumber = this.getLineCount();
        const endColumn = this.getLineMaxColumn(endLineNumber);
        this._onBeforeEOLChange();
        this._buffer.setEOL(newEOL);
        this._increaseVersionId();
        this._onAfterEOLChange();
        this._emitContentChangedEvent(new textModelEvents/* ModelRawContentChangedEvent */.dQ([
            new textModelEvents/* ModelRawEOLChanged */.CZ()
        ], this._versionId, false, false), this._createContentChanged2(new core_range/* Range */.e(1, 1, endLineNumber, endColumn), 0, oldModelValueLength, this.getValue(), false, false, false, true));
    }
    _onBeforeEOLChange() {
        // Ensure all decorations get their `range` set.
        this._decorationsTree.ensureAllNodesHaveRanges(this);
    }
    _onAfterEOLChange() {
        // Transform back `range` to offsets
        const versionId = this.getVersionId();
        const allDecorations = this._decorationsTree.collectNodesPostOrder();
        for (let i = 0, len = allDecorations.length; i < len; i++) {
            const node = allDecorations[i];
            const range = node.range; // the range is defined due to `_onBeforeEOLChange`
            const delta = node.cachedAbsoluteStart - node.start;
            const startOffset = this._buffer.getOffsetAt(range.startLineNumber, range.startColumn);
            const endOffset = this._buffer.getOffsetAt(range.endLineNumber, range.endColumn);
            node.cachedAbsoluteStart = startOffset;
            node.cachedAbsoluteEnd = endOffset;
            node.cachedVersionId = versionId;
            node.start = startOffset - delta;
            node.end = endOffset - delta;
            (0,intervalTree/* recomputeMaxEnd */.sR)(node);
        }
    }
    onBeforeAttached() {
        this._attachedEditorCount++;
        if (this._attachedEditorCount === 1) {
            this._tokenizationTextModelPart.handleDidChangeAttached();
            this._onDidChangeAttached.fire(undefined);
        }
        return this._attachedViews.attachView();
    }
    onBeforeDetached(view) {
        this._attachedEditorCount--;
        if (this._attachedEditorCount === 0) {
            this._tokenizationTextModelPart.handleDidChangeAttached();
            this._onDidChangeAttached.fire(undefined);
        }
        this._attachedViews.detachView(view);
    }
    isAttachedToEditor() {
        return this._attachedEditorCount > 0;
    }
    getAttachedEditorCount() {
        return this._attachedEditorCount;
    }
    isTooLargeForSyncing() {
        return this._isTooLargeForSyncing;
    }
    isTooLargeForTokenization() {
        return this._isTooLargeForTokenization;
    }
    isDisposed() {
        return this._isDisposed;
    }
    isDominatedByLongLines() {
        this._assertNotDisposed();
        if (this.isTooLargeForTokenization()) {
            // Cannot word wrap huge files anyways, so it doesn't really matter
            return false;
        }
        let smallLineCharCount = 0;
        let longLineCharCount = 0;
        const lineCount = this._buffer.getLineCount();
        for (let lineNumber = 1; lineNumber <= lineCount; lineNumber++) {
            const lineLength = this._buffer.getLineLength(lineNumber);
            if (lineLength >= LONG_LINE_BOUNDARY) {
                longLineCharCount += lineLength;
            }
            else {
                smallLineCharCount += lineLength;
            }
        }
        return (longLineCharCount > smallLineCharCount);
    }
    get uri() {
        return this._associatedResource;
    }
    //#region Options
    getOptions() {
        this._assertNotDisposed();
        return this._options;
    }
    getFormattingOptions() {
        return {
            tabSize: this._options.indentSize,
            insertSpaces: this._options.insertSpaces
        };
    }
    updateOptions(_newOpts) {
        this._assertNotDisposed();
        const tabSize = (typeof _newOpts.tabSize !== 'undefined') ? _newOpts.tabSize : this._options.tabSize;
        const indentSize = (typeof _newOpts.indentSize !== 'undefined') ? _newOpts.indentSize : this._options.originalIndentSize;
        const insertSpaces = (typeof _newOpts.insertSpaces !== 'undefined') ? _newOpts.insertSpaces : this._options.insertSpaces;
        const trimAutoWhitespace = (typeof _newOpts.trimAutoWhitespace !== 'undefined') ? _newOpts.trimAutoWhitespace : this._options.trimAutoWhitespace;
        const bracketPairColorizationOptions = (typeof _newOpts.bracketColorizationOptions !== 'undefined') ? _newOpts.bracketColorizationOptions : this._options.bracketPairColorizationOptions;
        const newOpts = new model/* TextModelResolvedOptions */.dJ({
            tabSize: tabSize,
            indentSize: indentSize,
            insertSpaces: insertSpaces,
            defaultEOL: this._options.defaultEOL,
            trimAutoWhitespace: trimAutoWhitespace,
            bracketPairColorizationOptions,
        });
        if (this._options.equals(newOpts)) {
            return;
        }
        const e = this._options.createChangeEvent(newOpts);
        this._options = newOpts;
        this._bracketPairs.handleDidChangeOptions(e);
        this._decorationProvider.handleDidChangeOptions(e);
        this._onDidChangeOptions.fire(e);
    }
    detectIndentation(defaultInsertSpaces, defaultTabSize) {
        this._assertNotDisposed();
        const guessedIndentation = (0,indentationGuesser/* guessIndentation */.L)(this._buffer, defaultTabSize, defaultInsertSpaces);
        this.updateOptions({
            insertSpaces: guessedIndentation.insertSpaces,
            tabSize: guessedIndentation.tabSize,
            indentSize: guessedIndentation.tabSize, // TODO@Alex: guess indentSize independent of tabSize
        });
    }
    normalizeIndentation(str) {
        this._assertNotDisposed();
        return (0,indentation/* normalizeIndentation */.x)(str, this._options.indentSize, this._options.insertSpaces);
    }
    //#endregion
    //#region Reading
    getVersionId() {
        this._assertNotDisposed();
        return this._versionId;
    }
    mightContainRTL() {
        return this._buffer.mightContainRTL();
    }
    mightContainUnusualLineTerminators() {
        return this._buffer.mightContainUnusualLineTerminators();
    }
    removeUnusualLineTerminators(selections = null) {
        const matches = this.findMatches(strings/* UNUSUAL_LINE_TERMINATORS */.Qe.source, false, true, false, null, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        this._buffer.resetMightContainUnusualLineTerminators();
        this.pushEditOperations(selections, matches.map(m => ({ range: m.range, text: null })), () => null);
    }
    mightContainNonBasicASCII() {
        return this._buffer.mightContainNonBasicASCII();
    }
    getAlternativeVersionId() {
        this._assertNotDisposed();
        return this._alternativeVersionId;
    }
    getInitialUndoRedoSnapshot() {
        this._assertNotDisposed();
        return this._initialUndoRedoSnapshot;
    }
    getOffsetAt(rawPosition) {
        this._assertNotDisposed();
        const position = this._validatePosition(rawPosition.lineNumber, rawPosition.column, 0 /* StringOffsetValidationType.Relaxed */);
        return this._buffer.getOffsetAt(position.lineNumber, position.column);
    }
    getPositionAt(rawOffset) {
        this._assertNotDisposed();
        const offset = (Math.min(this._buffer.getLength(), Math.max(0, rawOffset)));
        return this._buffer.getPositionAt(offset);
    }
    _increaseVersionId() {
        this._versionId = this._versionId + 1;
        this._alternativeVersionId = this._versionId;
    }
    _overwriteVersionId(versionId) {
        this._versionId = versionId;
    }
    _overwriteAlternativeVersionId(newAlternativeVersionId) {
        this._alternativeVersionId = newAlternativeVersionId;
    }
    _overwriteInitialUndoRedoSnapshot(newInitialUndoRedoSnapshot) {
        this._initialUndoRedoSnapshot = newInitialUndoRedoSnapshot;
    }
    getValue(eol, preserveBOM = false) {
        this._assertNotDisposed();
        const fullModelRange = this.getFullModelRange();
        const fullModelValue = this.getValueInRange(fullModelRange, eol);
        if (preserveBOM) {
            return this._buffer.getBOM() + fullModelValue;
        }
        return fullModelValue;
    }
    createSnapshot(preserveBOM = false) {
        return new TextModelSnapshot(this._buffer.createSnapshot(preserveBOM));
    }
    getValueLength(eol, preserveBOM = false) {
        this._assertNotDisposed();
        const fullModelRange = this.getFullModelRange();
        const fullModelValue = this.getValueLengthInRange(fullModelRange, eol);
        if (preserveBOM) {
            return this._buffer.getBOM().length + fullModelValue;
        }
        return fullModelValue;
    }
    getValueInRange(rawRange, eol = 0 /* model.EndOfLinePreference.TextDefined */) {
        this._assertNotDisposed();
        return this._buffer.getValueInRange(this.validateRange(rawRange), eol);
    }
    getValueLengthInRange(rawRange, eol = 0 /* model.EndOfLinePreference.TextDefined */) {
        this._assertNotDisposed();
        return this._buffer.getValueLengthInRange(this.validateRange(rawRange), eol);
    }
    getCharacterCountInRange(rawRange, eol = 0 /* model.EndOfLinePreference.TextDefined */) {
        this._assertNotDisposed();
        return this._buffer.getCharacterCountInRange(this.validateRange(rawRange), eol);
    }
    getLineCount() {
        this._assertNotDisposed();
        return this._buffer.getLineCount();
    }
    getLineContent(lineNumber) {
        this._assertNotDisposed();
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
        }
        return this._buffer.getLineContent(lineNumber);
    }
    getLineLength(lineNumber) {
        this._assertNotDisposed();
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
        }
        return this._buffer.getLineLength(lineNumber);
    }
    getLinesContent() {
        this._assertNotDisposed();
        return this._buffer.getLinesContent();
    }
    getEOL() {
        this._assertNotDisposed();
        return this._buffer.getEOL();
    }
    getEndOfLineSequence() {
        this._assertNotDisposed();
        return (this._buffer.getEOL() === '\n'
            ? 0 /* model.EndOfLineSequence.LF */
            : 1 /* model.EndOfLineSequence.CRLF */);
    }
    getLineMinColumn(lineNumber) {
        this._assertNotDisposed();
        return 1;
    }
    getLineMaxColumn(lineNumber) {
        this._assertNotDisposed();
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
        }
        return this._buffer.getLineLength(lineNumber) + 1;
    }
    getLineFirstNonWhitespaceColumn(lineNumber) {
        this._assertNotDisposed();
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
        }
        return this._buffer.getLineFirstNonWhitespaceColumn(lineNumber);
    }
    getLineLastNonWhitespaceColumn(lineNumber) {
        this._assertNotDisposed();
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            throw new errors/* BugIndicatingError */.he('Illegal value for lineNumber');
        }
        return this._buffer.getLineLastNonWhitespaceColumn(lineNumber);
    }
    /**
     * Validates `range` is within buffer bounds, but allows it to sit in between surrogate pairs, etc.
     * Will try to not allocate if possible.
     */
    _validateRangeRelaxedNoAllocations(range) {
        const linesCount = this._buffer.getLineCount();
        const initialStartLineNumber = range.startLineNumber;
        const initialStartColumn = range.startColumn;
        let startLineNumber = Math.floor((typeof initialStartLineNumber === 'number' && !isNaN(initialStartLineNumber)) ? initialStartLineNumber : 1);
        let startColumn = Math.floor((typeof initialStartColumn === 'number' && !isNaN(initialStartColumn)) ? initialStartColumn : 1);
        if (startLineNumber < 1) {
            startLineNumber = 1;
            startColumn = 1;
        }
        else if (startLineNumber > linesCount) {
            startLineNumber = linesCount;
            startColumn = this.getLineMaxColumn(startLineNumber);
        }
        else {
            if (startColumn <= 1) {
                startColumn = 1;
            }
            else {
                const maxColumn = this.getLineMaxColumn(startLineNumber);
                if (startColumn >= maxColumn) {
                    startColumn = maxColumn;
                }
            }
        }
        const initialEndLineNumber = range.endLineNumber;
        const initialEndColumn = range.endColumn;
        let endLineNumber = Math.floor((typeof initialEndLineNumber === 'number' && !isNaN(initialEndLineNumber)) ? initialEndLineNumber : 1);
        let endColumn = Math.floor((typeof initialEndColumn === 'number' && !isNaN(initialEndColumn)) ? initialEndColumn : 1);
        if (endLineNumber < 1) {
            endLineNumber = 1;
            endColumn = 1;
        }
        else if (endLineNumber > linesCount) {
            endLineNumber = linesCount;
            endColumn = this.getLineMaxColumn(endLineNumber);
        }
        else {
            if (endColumn <= 1) {
                endColumn = 1;
            }
            else {
                const maxColumn = this.getLineMaxColumn(endLineNumber);
                if (endColumn >= maxColumn) {
                    endColumn = maxColumn;
                }
            }
        }
        if (initialStartLineNumber === startLineNumber
            && initialStartColumn === startColumn
            && initialEndLineNumber === endLineNumber
            && initialEndColumn === endColumn
            && range instanceof core_range/* Range */.e
            && !(range instanceof selection/* Selection */.Y)) {
            return range;
        }
        return new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn);
    }
    _isValidPosition(lineNumber, column, validationType) {
        if (typeof lineNumber !== 'number' || typeof column !== 'number') {
            return false;
        }
        if (isNaN(lineNumber) || isNaN(column)) {
            return false;
        }
        if (lineNumber < 1 || column < 1) {
            return false;
        }
        if ((lineNumber | 0) !== lineNumber || (column | 0) !== column) {
            return false;
        }
        const lineCount = this._buffer.getLineCount();
        if (lineNumber > lineCount) {
            return false;
        }
        if (column === 1) {
            return true;
        }
        const maxColumn = this.getLineMaxColumn(lineNumber);
        if (column > maxColumn) {
            return false;
        }
        if (validationType === 1 /* StringOffsetValidationType.SurrogatePairs */) {
            // !!At this point, column > 1
            const charCodeBefore = this._buffer.getLineCharCode(lineNumber, column - 2);
            if (strings/* isHighSurrogate */.ZG(charCodeBefore)) {
                return false;
            }
        }
        return true;
    }
    _validatePosition(_lineNumber, _column, validationType) {
        const lineNumber = Math.floor((typeof _lineNumber === 'number' && !isNaN(_lineNumber)) ? _lineNumber : 1);
        const column = Math.floor((typeof _column === 'number' && !isNaN(_column)) ? _column : 1);
        const lineCount = this._buffer.getLineCount();
        if (lineNumber < 1) {
            return new core_position/* Position */.L(1, 1);
        }
        if (lineNumber > lineCount) {
            return new core_position/* Position */.L(lineCount, this.getLineMaxColumn(lineCount));
        }
        if (column <= 1) {
            return new core_position/* Position */.L(lineNumber, 1);
        }
        const maxColumn = this.getLineMaxColumn(lineNumber);
        if (column >= maxColumn) {
            return new core_position/* Position */.L(lineNumber, maxColumn);
        }
        if (validationType === 1 /* StringOffsetValidationType.SurrogatePairs */) {
            // If the position would end up in the middle of a high-low surrogate pair,
            // we move it to before the pair
            // !!At this point, column > 1
            const charCodeBefore = this._buffer.getLineCharCode(lineNumber, column - 2);
            if (strings/* isHighSurrogate */.ZG(charCodeBefore)) {
                return new core_position/* Position */.L(lineNumber, column - 1);
            }
        }
        return new core_position/* Position */.L(lineNumber, column);
    }
    validatePosition(position) {
        const validationType = 1 /* StringOffsetValidationType.SurrogatePairs */;
        this._assertNotDisposed();
        // Avoid object allocation and cover most likely case
        if (position instanceof core_position/* Position */.L) {
            if (this._isValidPosition(position.lineNumber, position.column, validationType)) {
                return position;
            }
        }
        return this._validatePosition(position.lineNumber, position.column, validationType);
    }
    _isValidRange(range, validationType) {
        const startLineNumber = range.startLineNumber;
        const startColumn = range.startColumn;
        const endLineNumber = range.endLineNumber;
        const endColumn = range.endColumn;
        if (!this._isValidPosition(startLineNumber, startColumn, 0 /* StringOffsetValidationType.Relaxed */)) {
            return false;
        }
        if (!this._isValidPosition(endLineNumber, endColumn, 0 /* StringOffsetValidationType.Relaxed */)) {
            return false;
        }
        if (validationType === 1 /* StringOffsetValidationType.SurrogatePairs */) {
            const charCodeBeforeStart = (startColumn > 1 ? this._buffer.getLineCharCode(startLineNumber, startColumn - 2) : 0);
            const charCodeBeforeEnd = (endColumn > 1 && endColumn <= this._buffer.getLineLength(endLineNumber) ? this._buffer.getLineCharCode(endLineNumber, endColumn - 2) : 0);
            const startInsideSurrogatePair = strings/* isHighSurrogate */.ZG(charCodeBeforeStart);
            const endInsideSurrogatePair = strings/* isHighSurrogate */.ZG(charCodeBeforeEnd);
            if (!startInsideSurrogatePair && !endInsideSurrogatePair) {
                return true;
            }
            return false;
        }
        return true;
    }
    validateRange(_range) {
        const validationType = 1 /* StringOffsetValidationType.SurrogatePairs */;
        this._assertNotDisposed();
        // Avoid object allocation and cover most likely case
        if ((_range instanceof core_range/* Range */.e) && !(_range instanceof selection/* Selection */.Y)) {
            if (this._isValidRange(_range, validationType)) {
                return _range;
            }
        }
        const start = this._validatePosition(_range.startLineNumber, _range.startColumn, 0 /* StringOffsetValidationType.Relaxed */);
        const end = this._validatePosition(_range.endLineNumber, _range.endColumn, 0 /* StringOffsetValidationType.Relaxed */);
        const startLineNumber = start.lineNumber;
        const startColumn = start.column;
        const endLineNumber = end.lineNumber;
        const endColumn = end.column;
        if (validationType === 1 /* StringOffsetValidationType.SurrogatePairs */) {
            const charCodeBeforeStart = (startColumn > 1 ? this._buffer.getLineCharCode(startLineNumber, startColumn - 2) : 0);
            const charCodeBeforeEnd = (endColumn > 1 && endColumn <= this._buffer.getLineLength(endLineNumber) ? this._buffer.getLineCharCode(endLineNumber, endColumn - 2) : 0);
            const startInsideSurrogatePair = strings/* isHighSurrogate */.ZG(charCodeBeforeStart);
            const endInsideSurrogatePair = strings/* isHighSurrogate */.ZG(charCodeBeforeEnd);
            if (!startInsideSurrogatePair && !endInsideSurrogatePair) {
                return new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn);
            }
            if (startLineNumber === endLineNumber && startColumn === endColumn) {
                // do not expand a collapsed range, simply move it to a valid location
                return new core_range/* Range */.e(startLineNumber, startColumn - 1, endLineNumber, endColumn - 1);
            }
            if (startInsideSurrogatePair && endInsideSurrogatePair) {
                // expand range at both ends
                return new core_range/* Range */.e(startLineNumber, startColumn - 1, endLineNumber, endColumn + 1);
            }
            if (startInsideSurrogatePair) {
                // only expand range at the start
                return new core_range/* Range */.e(startLineNumber, startColumn - 1, endLineNumber, endColumn);
            }
            // only expand range at the end
            return new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn + 1);
        }
        return new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn);
    }
    modifyPosition(rawPosition, offset) {
        this._assertNotDisposed();
        const candidate = this.getOffsetAt(rawPosition) + offset;
        return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, candidate)));
    }
    getFullModelRange() {
        this._assertNotDisposed();
        const lineCount = this.getLineCount();
        return new core_range/* Range */.e(1, 1, lineCount, this.getLineMaxColumn(lineCount));
    }
    findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
        return this._buffer.findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount);
    }
    findMatches(searchString, rawSearchScope, isRegex, matchCase, wordSeparators, captureMatches, limitResultCount = LIMIT_FIND_COUNT) {
        this._assertNotDisposed();
        let searchRanges = null;
        if (rawSearchScope !== null) {
            if (!Array.isArray(rawSearchScope)) {
                rawSearchScope = [rawSearchScope];
            }
            if (rawSearchScope.every((searchScope) => core_range/* Range */.e.isIRange(searchScope))) {
                searchRanges = rawSearchScope.map((searchScope) => this.validateRange(searchScope));
            }
        }
        if (searchRanges === null) {
            searchRanges = [this.getFullModelRange()];
        }
        searchRanges = searchRanges.sort((d1, d2) => d1.startLineNumber - d2.startLineNumber || d1.startColumn - d2.startColumn);
        const uniqueSearchRanges = [];
        uniqueSearchRanges.push(searchRanges.reduce((prev, curr) => {
            if (core_range/* Range */.e.areIntersecting(prev, curr)) {
                return prev.plusRange(curr);
            }
            uniqueSearchRanges.push(prev);
            return curr;
        }));
        let matchMapper;
        if (!isRegex && searchString.indexOf('\n') < 0) {
            // not regex, not multi line
            const searchParams = new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators);
            const searchData = searchParams.parseSearchRequest();
            if (!searchData) {
                return [];
            }
            matchMapper = (searchRange) => this.findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount);
        }
        else {
            matchMapper = (searchRange) => textModelSearch/* TextModelSearch */.pM.findMatches(this, new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators), searchRange, captureMatches, limitResultCount);
        }
        return uniqueSearchRanges.map(matchMapper).reduce((arr, matches) => arr.concat(matches), []);
    }
    findNextMatch(searchString, rawSearchStart, isRegex, matchCase, wordSeparators, captureMatches) {
        this._assertNotDisposed();
        const searchStart = this.validatePosition(rawSearchStart);
        if (!isRegex && searchString.indexOf('\n') < 0) {
            const searchParams = new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators);
            const searchData = searchParams.parseSearchRequest();
            if (!searchData) {
                return null;
            }
            const lineCount = this.getLineCount();
            let searchRange = new core_range/* Range */.e(searchStart.lineNumber, searchStart.column, lineCount, this.getLineMaxColumn(lineCount));
            let ret = this.findMatchesLineByLine(searchRange, searchData, captureMatches, 1);
            textModelSearch/* TextModelSearch */.pM.findNextMatch(this, new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators), searchStart, captureMatches);
            if (ret.length > 0) {
                return ret[0];
            }
            searchRange = new core_range/* Range */.e(1, 1, searchStart.lineNumber, this.getLineMaxColumn(searchStart.lineNumber));
            ret = this.findMatchesLineByLine(searchRange, searchData, captureMatches, 1);
            if (ret.length > 0) {
                return ret[0];
            }
            return null;
        }
        return textModelSearch/* TextModelSearch */.pM.findNextMatch(this, new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators), searchStart, captureMatches);
    }
    findPreviousMatch(searchString, rawSearchStart, isRegex, matchCase, wordSeparators, captureMatches) {
        this._assertNotDisposed();
        const searchStart = this.validatePosition(rawSearchStart);
        return textModelSearch/* TextModelSearch */.pM.findPreviousMatch(this, new textModelSearch/* SearchParams */.bc(searchString, isRegex, matchCase, wordSeparators), searchStart, captureMatches);
    }
    //#endregion
    //#region Editing
    pushStackElement() {
        this._commandManager.pushStackElement();
    }
    popStackElement() {
        this._commandManager.popStackElement();
    }
    pushEOL(eol) {
        const currentEOL = (this.getEOL() === '\n' ? 0 /* model.EndOfLineSequence.LF */ : 1 /* model.EndOfLineSequence.CRLF */);
        if (currentEOL === eol) {
            return;
        }
        try {
            this._onDidChangeDecorations.beginDeferredEmit();
            this._eventEmitter.beginDeferredEmit();
            if (this._initialUndoRedoSnapshot === null) {
                this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri);
            }
            this._commandManager.pushEOL(eol);
        }
        finally {
            this._eventEmitter.endDeferredEmit();
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _validateEditOperation(rawOperation) {
        if (rawOperation instanceof model/* ValidAnnotatedEditOperation */.Qi) {
            return rawOperation;
        }
        return new model/* ValidAnnotatedEditOperation */.Qi(rawOperation.identifier || null, this.validateRange(rawOperation.range), rawOperation.text, rawOperation.forceMoveMarkers || false, rawOperation.isAutoWhitespaceEdit || false, rawOperation._isTracked || false);
    }
    _validateEditOperations(rawOperations) {
        const result = [];
        for (let i = 0, len = rawOperations.length; i < len; i++) {
            result[i] = this._validateEditOperation(rawOperations[i]);
        }
        return result;
    }
    pushEditOperations(beforeCursorState, editOperations, cursorStateComputer, group) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit();
            this._eventEmitter.beginDeferredEmit();
            return this._pushEditOperations(beforeCursorState, this._validateEditOperations(editOperations), cursorStateComputer, group);
        }
        finally {
            this._eventEmitter.endDeferredEmit();
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _pushEditOperations(beforeCursorState, editOperations, cursorStateComputer, group) {
        if (this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) {
            // Go through each saved line number and insert a trim whitespace edit
            // if it is safe to do so (no conflicts with other edits).
            const incomingEdits = editOperations.map((op) => {
                return {
                    range: this.validateRange(op.range),
                    text: op.text
                };
            });
            // Sometimes, auto-formatters change ranges automatically which can cause undesired auto whitespace trimming near the cursor
            // We'll use the following heuristic: if the edits occur near the cursor, then it's ok to trim auto whitespace
            let editsAreNearCursors = true;
            if (beforeCursorState) {
                for (let i = 0, len = beforeCursorState.length; i < len; i++) {
                    const sel = beforeCursorState[i];
                    let foundEditNearSel = false;
                    for (let j = 0, lenJ = incomingEdits.length; j < lenJ; j++) {
                        const editRange = incomingEdits[j].range;
                        const selIsAbove = editRange.startLineNumber > sel.endLineNumber;
                        const selIsBelow = sel.startLineNumber > editRange.endLineNumber;
                        if (!selIsAbove && !selIsBelow) {
                            foundEditNearSel = true;
                            break;
                        }
                    }
                    if (!foundEditNearSel) {
                        editsAreNearCursors = false;
                        break;
                    }
                }
            }
            if (editsAreNearCursors) {
                for (let i = 0, len = this._trimAutoWhitespaceLines.length; i < len; i++) {
                    const trimLineNumber = this._trimAutoWhitespaceLines[i];
                    const maxLineColumn = this.getLineMaxColumn(trimLineNumber);
                    let allowTrimLine = true;
                    for (let j = 0, lenJ = incomingEdits.length; j < lenJ; j++) {
                        const editRange = incomingEdits[j].range;
                        const editText = incomingEdits[j].text;
                        if (trimLineNumber < editRange.startLineNumber || trimLineNumber > editRange.endLineNumber) {
                            // `trimLine` is completely outside this edit
                            continue;
                        }
                        // At this point:
                        //   editRange.startLineNumber <= trimLine <= editRange.endLineNumber
                        if (trimLineNumber === editRange.startLineNumber && editRange.startColumn === maxLineColumn
                            && editRange.isEmpty() && editText && editText.length > 0 && editText.charAt(0) === '\n') {
                            // This edit inserts a new line (and maybe other text) after `trimLine`
                            continue;
                        }
                        if (trimLineNumber === editRange.startLineNumber && editRange.startColumn === 1
                            && editRange.isEmpty() && editText && editText.length > 0 && editText.charAt(editText.length - 1) === '\n') {
                            // This edit inserts a new line (and maybe other text) before `trimLine`
                            continue;
                        }
                        // Looks like we can't trim this line as it would interfere with an incoming edit
                        allowTrimLine = false;
                        break;
                    }
                    if (allowTrimLine) {
                        const trimRange = new core_range/* Range */.e(trimLineNumber, 1, trimLineNumber, maxLineColumn);
                        editOperations.push(new model/* ValidAnnotatedEditOperation */.Qi(null, trimRange, null, false, false, false));
                    }
                }
            }
            this._trimAutoWhitespaceLines = null;
        }
        if (this._initialUndoRedoSnapshot === null) {
            this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri);
        }
        return this._commandManager.pushEditOperation(beforeCursorState, editOperations, cursorStateComputer, group);
    }
    _applyUndo(changes, eol, resultingAlternativeVersionId, resultingSelection) {
        const edits = changes.map((change) => {
            const rangeStart = this.getPositionAt(change.newPosition);
            const rangeEnd = this.getPositionAt(change.newEnd);
            return {
                range: new core_range/* Range */.e(rangeStart.lineNumber, rangeStart.column, rangeEnd.lineNumber, rangeEnd.column),
                text: change.oldText
            };
        });
        this._applyUndoRedoEdits(edits, eol, true, false, resultingAlternativeVersionId, resultingSelection);
    }
    _applyRedo(changes, eol, resultingAlternativeVersionId, resultingSelection) {
        const edits = changes.map((change) => {
            const rangeStart = this.getPositionAt(change.oldPosition);
            const rangeEnd = this.getPositionAt(change.oldEnd);
            return {
                range: new core_range/* Range */.e(rangeStart.lineNumber, rangeStart.column, rangeEnd.lineNumber, rangeEnd.column),
                text: change.newText
            };
        });
        this._applyUndoRedoEdits(edits, eol, false, true, resultingAlternativeVersionId, resultingSelection);
    }
    _applyUndoRedoEdits(edits, eol, isUndoing, isRedoing, resultingAlternativeVersionId, resultingSelection) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit();
            this._eventEmitter.beginDeferredEmit();
            this._isUndoing = isUndoing;
            this._isRedoing = isRedoing;
            this.applyEdits(edits, false);
            this.setEOL(eol);
            this._overwriteAlternativeVersionId(resultingAlternativeVersionId);
        }
        finally {
            this._isUndoing = false;
            this._isRedoing = false;
            this._eventEmitter.endDeferredEmit(resultingSelection);
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    applyEdits(rawOperations, computeUndoEdits = false) {
        try {
            this._onDidChangeDecorations.beginDeferredEmit();
            this._eventEmitter.beginDeferredEmit();
            const operations = this._validateEditOperations(rawOperations);
            return this._doApplyEdits(operations, computeUndoEdits);
        }
        finally {
            this._eventEmitter.endDeferredEmit();
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _doApplyEdits(rawOperations, computeUndoEdits) {
        const oldLineCount = this._buffer.getLineCount();
        const result = this._buffer.applyEdits(rawOperations, this._options.trimAutoWhitespace, computeUndoEdits);
        const newLineCount = this._buffer.getLineCount();
        const contentChanges = result.changes;
        this._trimAutoWhitespaceLines = result.trimAutoWhitespaceLineNumbers;
        if (contentChanges.length !== 0) {
            // We do a first pass to update decorations
            // because we want to read decorations in the second pass
            // where we will emit content change events
            // and we want to read the final decorations
            for (let i = 0, len = contentChanges.length; i < len; i++) {
                const change = contentChanges[i];
                this._decorationsTree.acceptReplace(change.rangeOffset, change.rangeLength, change.text.length, change.forceMoveMarkers);
            }
            const rawContentChanges = [];
            this._increaseVersionId();
            let lineCount = oldLineCount;
            for (let i = 0, len = contentChanges.length; i < len; i++) {
                const change = contentChanges[i];
                const [eolCount] = (0,eolCounter/* countEOL */.Q)(change.text);
                this._onDidChangeDecorations.fire();
                const startLineNumber = change.range.startLineNumber;
                const endLineNumber = change.range.endLineNumber;
                const deletingLinesCnt = endLineNumber - startLineNumber;
                const insertingLinesCnt = eolCount;
                const editingLinesCnt = Math.min(deletingLinesCnt, insertingLinesCnt);
                const changeLineCountDelta = (insertingLinesCnt - deletingLinesCnt);
                const currentEditStartLineNumber = newLineCount - lineCount - changeLineCountDelta + startLineNumber;
                const firstEditLineNumber = currentEditStartLineNumber;
                const lastInsertedLineNumber = currentEditStartLineNumber + insertingLinesCnt;
                const decorationsWithInjectedTextInEditedRange = this._decorationsTree.getInjectedTextInInterval(this, this.getOffsetAt(new core_position/* Position */.L(firstEditLineNumber, 1)), this.getOffsetAt(new core_position/* Position */.L(lastInsertedLineNumber, this.getLineMaxColumn(lastInsertedLineNumber))), 0);
                const injectedTextInEditedRange = textModelEvents/* LineInjectedText */.gk.fromDecorations(decorationsWithInjectedTextInEditedRange);
                const injectedTextInEditedRangeQueue = new arrays/* ArrayQueue */.H9(injectedTextInEditedRange);
                for (let j = editingLinesCnt; j >= 0; j--) {
                    const editLineNumber = startLineNumber + j;
                    const currentEditLineNumber = currentEditStartLineNumber + j;
                    injectedTextInEditedRangeQueue.takeFromEndWhile(r => r.lineNumber > currentEditLineNumber);
                    const decorationsInCurrentLine = injectedTextInEditedRangeQueue.takeFromEndWhile(r => r.lineNumber === currentEditLineNumber);
                    rawContentChanges.push(new textModelEvents/* ModelRawLineChanged */.rU(editLineNumber, this.getLineContent(currentEditLineNumber), decorationsInCurrentLine));
                }
                if (editingLinesCnt < deletingLinesCnt) {
                    // Must delete some lines
                    const spliceStartLineNumber = startLineNumber + editingLinesCnt;
                    rawContentChanges.push(new textModelEvents/* ModelRawLinesDeleted */.lN(spliceStartLineNumber + 1, endLineNumber));
                }
                if (editingLinesCnt < insertingLinesCnt) {
                    const injectedTextInEditedRangeQueue = new arrays/* ArrayQueue */.H9(injectedTextInEditedRange);
                    // Must insert some lines
                    const spliceLineNumber = startLineNumber + editingLinesCnt;
                    const cnt = insertingLinesCnt - editingLinesCnt;
                    const fromLineNumber = newLineCount - lineCount - cnt + spliceLineNumber + 1;
                    const injectedTexts = [];
                    const newLines = [];
                    for (let i = 0; i < cnt; i++) {
                        const lineNumber = fromLineNumber + i;
                        newLines[i] = this.getLineContent(lineNumber);
                        injectedTextInEditedRangeQueue.takeWhile(r => r.lineNumber < lineNumber);
                        injectedTexts[i] = injectedTextInEditedRangeQueue.takeWhile(r => r.lineNumber === lineNumber);
                    }
                    rawContentChanges.push(new textModelEvents/* ModelRawLinesInserted */.Tx(spliceLineNumber + 1, startLineNumber + insertingLinesCnt, newLines, injectedTexts));
                }
                lineCount += changeLineCountDelta;
            }
            this._emitContentChangedEvent(new textModelEvents/* ModelRawContentChangedEvent */.dQ(rawContentChanges, this.getVersionId(), this._isUndoing, this._isRedoing), {
                changes: contentChanges,
                eol: this._buffer.getEOL(),
                isEolChange: false,
                versionId: this.getVersionId(),
                isUndoing: this._isUndoing,
                isRedoing: this._isRedoing,
                isFlush: false
            });
        }
        return (result.reverseEdits === null ? undefined : result.reverseEdits);
    }
    undo() {
        return this._undoRedoService.undo(this.uri);
    }
    canUndo() {
        return this._undoRedoService.canUndo(this.uri);
    }
    redo() {
        return this._undoRedoService.redo(this.uri);
    }
    canRedo() {
        return this._undoRedoService.canRedo(this.uri);
    }
    //#endregion
    //#region Decorations
    handleBeforeFireDecorationsChangedEvent(affectedInjectedTextLines) {
        // This is called before the decoration changed event is fired.
        if (affectedInjectedTextLines === null || affectedInjectedTextLines.size === 0) {
            return;
        }
        const affectedLines = Array.from(affectedInjectedTextLines);
        const lineChangeEvents = affectedLines.map(lineNumber => new textModelEvents/* ModelRawLineChanged */.rU(lineNumber, this.getLineContent(lineNumber), this._getInjectedTextInLine(lineNumber)));
        this._onDidChangeInjectedText.fire(new textModelEvents/* ModelInjectedTextChangedEvent */.D8(lineChangeEvents));
    }
    changeDecorations(callback, ownerId = 0) {
        this._assertNotDisposed();
        try {
            this._onDidChangeDecorations.beginDeferredEmit();
            return this._changeDecorations(ownerId, callback);
        }
        finally {
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    _changeDecorations(ownerId, callback) {
        const changeAccessor = {
            addDecoration: (range, options) => {
                return this._deltaDecorationsImpl(ownerId, [], [{ range: range, options: options }])[0];
            },
            changeDecoration: (id, newRange) => {
                this._changeDecorationImpl(id, newRange);
            },
            changeDecorationOptions: (id, options) => {
                this._changeDecorationOptionsImpl(id, _normalizeOptions(options));
            },
            removeDecoration: (id) => {
                this._deltaDecorationsImpl(ownerId, [id], []);
            },
            deltaDecorations: (oldDecorations, newDecorations) => {
                if (oldDecorations.length === 0 && newDecorations.length === 0) {
                    // nothing to do
                    return [];
                }
                return this._deltaDecorationsImpl(ownerId, oldDecorations, newDecorations);
            }
        };
        let result = null;
        try {
            result = callback(changeAccessor);
        }
        catch (e) {
            (0,errors/* onUnexpectedError */.dL)(e);
        }
        // Invalidate change accessor
        changeAccessor.addDecoration = invalidFunc;
        changeAccessor.changeDecoration = invalidFunc;
        changeAccessor.changeDecorationOptions = invalidFunc;
        changeAccessor.removeDecoration = invalidFunc;
        changeAccessor.deltaDecorations = invalidFunc;
        return result;
    }
    deltaDecorations(oldDecorations, newDecorations, ownerId = 0) {
        this._assertNotDisposed();
        if (!oldDecorations) {
            oldDecorations = [];
        }
        if (oldDecorations.length === 0 && newDecorations.length === 0) {
            // nothing to do
            return [];
        }
        try {
            this._deltaDecorationCallCnt++;
            if (this._deltaDecorationCallCnt > 1) {
                console.warn(`Invoking deltaDecorations recursively could lead to leaking decorations.`);
                (0,errors/* onUnexpectedError */.dL)(new Error(`Invoking deltaDecorations recursively could lead to leaking decorations.`));
            }
            this._onDidChangeDecorations.beginDeferredEmit();
            return this._deltaDecorationsImpl(ownerId, oldDecorations, newDecorations);
        }
        finally {
            this._onDidChangeDecorations.endDeferredEmit();
            this._deltaDecorationCallCnt--;
        }
    }
    _getTrackedRange(id) {
        return this.getDecorationRange(id);
    }
    _setTrackedRange(id, newRange, newStickiness) {
        const node = (id ? this._decorations[id] : null);
        if (!node) {
            if (!newRange) {
                // node doesn't exist, the request is to delete => nothing to do
                return null;
            }
            // node doesn't exist, the request is to set => add the tracked range
            return this._deltaDecorationsImpl(0, [], [{ range: newRange, options: TRACKED_RANGE_OPTIONS[newStickiness] }], true)[0];
        }
        if (!newRange) {
            // node exists, the request is to delete => delete node
            this._decorationsTree.delete(node);
            delete this._decorations[node.id];
            return null;
        }
        // node exists, the request is to set => change the tracked range and its options
        const range = this._validateRangeRelaxedNoAllocations(newRange);
        const startOffset = this._buffer.getOffsetAt(range.startLineNumber, range.startColumn);
        const endOffset = this._buffer.getOffsetAt(range.endLineNumber, range.endColumn);
        this._decorationsTree.delete(node);
        node.reset(this.getVersionId(), startOffset, endOffset, range);
        node.setOptions(TRACKED_RANGE_OPTIONS[newStickiness]);
        this._decorationsTree.insert(node);
        return node.id;
    }
    removeAllDecorationsWithOwnerId(ownerId) {
        if (this._isDisposed) {
            return;
        }
        const nodes = this._decorationsTree.collectNodesFromOwner(ownerId);
        for (let i = 0, len = nodes.length; i < len; i++) {
            const node = nodes[i];
            this._decorationsTree.delete(node);
            delete this._decorations[node.id];
        }
    }
    getDecorationOptions(decorationId) {
        const node = this._decorations[decorationId];
        if (!node) {
            return null;
        }
        return node.options;
    }
    getDecorationRange(decorationId) {
        const node = this._decorations[decorationId];
        if (!node) {
            return null;
        }
        return this._decorationsTree.getNodeRange(this, node);
    }
    getLineDecorations(lineNumber, ownerId = 0, filterOutValidation = false) {
        if (lineNumber < 1 || lineNumber > this.getLineCount()) {
            return [];
        }
        return this.getLinesDecorations(lineNumber, lineNumber, ownerId, filterOutValidation);
    }
    getLinesDecorations(_startLineNumber, _endLineNumber, ownerId = 0, filterOutValidation = false, onlyMarginDecorations = false) {
        const lineCount = this.getLineCount();
        const startLineNumber = Math.min(lineCount, Math.max(1, _startLineNumber));
        const endLineNumber = Math.min(lineCount, Math.max(1, _endLineNumber));
        const endColumn = this.getLineMaxColumn(endLineNumber);
        const range = new core_range/* Range */.e(startLineNumber, 1, endLineNumber, endColumn);
        const decorations = this._getDecorationsInRange(range, ownerId, filterOutValidation, onlyMarginDecorations);
        (0,arrays/* pushMany */.vA)(decorations, this._decorationProvider.getDecorationsInRange(range, ownerId, filterOutValidation));
        return decorations;
    }
    getDecorationsInRange(range, ownerId = 0, filterOutValidation = false, onlyMinimapDecorations = false, onlyMarginDecorations = false) {
        const validatedRange = this.validateRange(range);
        const decorations = this._getDecorationsInRange(validatedRange, ownerId, filterOutValidation, onlyMarginDecorations);
        (0,arrays/* pushMany */.vA)(decorations, this._decorationProvider.getDecorationsInRange(validatedRange, ownerId, filterOutValidation, onlyMinimapDecorations));
        return decorations;
    }
    getOverviewRulerDecorations(ownerId = 0, filterOutValidation = false) {
        return this._decorationsTree.getAll(this, ownerId, filterOutValidation, true, false);
    }
    getInjectedTextDecorations(ownerId = 0) {
        return this._decorationsTree.getAllInjectedText(this, ownerId);
    }
    _getInjectedTextInLine(lineNumber) {
        const startOffset = this._buffer.getOffsetAt(lineNumber, 1);
        const endOffset = startOffset + this._buffer.getLineLength(lineNumber);
        const result = this._decorationsTree.getInjectedTextInInterval(this, startOffset, endOffset, 0);
        return textModelEvents/* LineInjectedText */.gk.fromDecorations(result).filter(t => t.lineNumber === lineNumber);
    }
    getAllDecorations(ownerId = 0, filterOutValidation = false) {
        let result = this._decorationsTree.getAll(this, ownerId, filterOutValidation, false, false);
        result = result.concat(this._decorationProvider.getAllDecorations(ownerId, filterOutValidation));
        return result;
    }
    getAllMarginDecorations(ownerId = 0) {
        return this._decorationsTree.getAll(this, ownerId, false, false, true);
    }
    _getDecorationsInRange(filterRange, filterOwnerId, filterOutValidation, onlyMarginDecorations) {
        const startOffset = this._buffer.getOffsetAt(filterRange.startLineNumber, filterRange.startColumn);
        const endOffset = this._buffer.getOffsetAt(filterRange.endLineNumber, filterRange.endColumn);
        return this._decorationsTree.getAllInInterval(this, startOffset, endOffset, filterOwnerId, filterOutValidation, onlyMarginDecorations);
    }
    getRangeAt(start, end) {
        return this._buffer.getRangeAt(start, end - start);
    }
    _changeDecorationImpl(decorationId, _range) {
        const node = this._decorations[decorationId];
        if (!node) {
            return;
        }
        if (node.options.after) {
            const oldRange = this.getDecorationRange(decorationId);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(oldRange.endLineNumber);
        }
        if (node.options.before) {
            const oldRange = this.getDecorationRange(decorationId);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(oldRange.startLineNumber);
        }
        const range = this._validateRangeRelaxedNoAllocations(_range);
        const startOffset = this._buffer.getOffsetAt(range.startLineNumber, range.startColumn);
        const endOffset = this._buffer.getOffsetAt(range.endLineNumber, range.endColumn);
        this._decorationsTree.delete(node);
        node.reset(this.getVersionId(), startOffset, endOffset, range);
        this._decorationsTree.insert(node);
        this._onDidChangeDecorations.checkAffectedAndFire(node.options);
        if (node.options.after) {
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(range.endLineNumber);
        }
        if (node.options.before) {
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(range.startLineNumber);
        }
    }
    _changeDecorationOptionsImpl(decorationId, options) {
        const node = this._decorations[decorationId];
        if (!node) {
            return;
        }
        const nodeWasInOverviewRuler = (node.options.overviewRuler && node.options.overviewRuler.color ? true : false);
        const nodeIsInOverviewRuler = (options.overviewRuler && options.overviewRuler.color ? true : false);
        this._onDidChangeDecorations.checkAffectedAndFire(node.options);
        this._onDidChangeDecorations.checkAffectedAndFire(options);
        if (node.options.after || options.after) {
            const nodeRange = this._decorationsTree.getNodeRange(this, node);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(nodeRange.endLineNumber);
        }
        if (node.options.before || options.before) {
            const nodeRange = this._decorationsTree.getNodeRange(this, node);
            this._onDidChangeDecorations.recordLineAffectedByInjectedText(nodeRange.startLineNumber);
        }
        if (nodeWasInOverviewRuler !== nodeIsInOverviewRuler) {
            // Delete + Insert due to an overview ruler status change
            this._decorationsTree.delete(node);
            node.setOptions(options);
            this._decorationsTree.insert(node);
        }
        else {
            node.setOptions(options);
        }
    }
    _deltaDecorationsImpl(ownerId, oldDecorationsIds, newDecorations, suppressEvents = false) {
        const versionId = this.getVersionId();
        const oldDecorationsLen = oldDecorationsIds.length;
        let oldDecorationIndex = 0;
        const newDecorationsLen = newDecorations.length;
        let newDecorationIndex = 0;
        this._onDidChangeDecorations.beginDeferredEmit();
        try {
            const result = new Array(newDecorationsLen);
            while (oldDecorationIndex < oldDecorationsLen || newDecorationIndex < newDecorationsLen) {
                let node = null;
                if (oldDecorationIndex < oldDecorationsLen) {
                    // (1) get ourselves an old node
                    do {
                        node = this._decorations[oldDecorationsIds[oldDecorationIndex++]];
                    } while (!node && oldDecorationIndex < oldDecorationsLen);
                    // (2) remove the node from the tree (if it exists)
                    if (node) {
                        if (node.options.after) {
                            const nodeRange = this._decorationsTree.getNodeRange(this, node);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(nodeRange.endLineNumber);
                        }
                        if (node.options.before) {
                            const nodeRange = this._decorationsTree.getNodeRange(this, node);
                            this._onDidChangeDecorations.recordLineAffectedByInjectedText(nodeRange.startLineNumber);
                        }
                        this._decorationsTree.delete(node);
                        if (!suppressEvents) {
                            this._onDidChangeDecorations.checkAffectedAndFire(node.options);
                        }
                    }
                }
                if (newDecorationIndex < newDecorationsLen) {
                    // (3) create a new node if necessary
                    if (!node) {
                        const internalDecorationId = (++this._lastDecorationId);
                        const decorationId = `${this._instanceId};${internalDecorationId}`;
                        node = new intervalTree/* IntervalNode */.fL(decorationId, 0, 0);
                        this._decorations[decorationId] = node;
                    }
                    // (4) initialize node
                    const newDecoration = newDecorations[newDecorationIndex];
                    const range = this._validateRangeRelaxedNoAllocations(newDecoration.range);
                    const options = _normalizeOptions(newDecoration.options);
                    const startOffset = this._buffer.getOffsetAt(range.startLineNumber, range.startColumn);
                    const endOffset = this._buffer.getOffsetAt(range.endLineNumber, range.endColumn);
                    node.ownerId = ownerId;
                    node.reset(versionId, startOffset, endOffset, range);
                    node.setOptions(options);
                    if (node.options.after) {
                        this._onDidChangeDecorations.recordLineAffectedByInjectedText(range.endLineNumber);
                    }
                    if (node.options.before) {
                        this._onDidChangeDecorations.recordLineAffectedByInjectedText(range.startLineNumber);
                    }
                    if (!suppressEvents) {
                        this._onDidChangeDecorations.checkAffectedAndFire(options);
                    }
                    this._decorationsTree.insert(node);
                    result[newDecorationIndex] = node.id;
                    newDecorationIndex++;
                }
                else {
                    if (node) {
                        delete this._decorations[node.id];
                    }
                }
            }
            return result;
        }
        finally {
            this._onDidChangeDecorations.endDeferredEmit();
        }
    }
    //#endregion
    //#region Tokenization
    // TODO move them to the tokenization part.
    getLanguageId() {
        return this.tokenization.getLanguageId();
    }
    setLanguage(languageIdOrSelection, source) {
        if (typeof languageIdOrSelection === 'string') {
            this._languageSelectionListener.clear();
            this._setLanguage(languageIdOrSelection, source);
        }
        else {
            this._languageSelectionListener.value = languageIdOrSelection.onDidChange(() => this._setLanguage(languageIdOrSelection.languageId, source));
            this._setLanguage(languageIdOrSelection.languageId, source);
        }
    }
    _setLanguage(languageId, source) {
        this.tokenization.setLanguageId(languageId, source);
        this._languageService.requestRichLanguageFeatures(languageId);
    }
    getLanguageIdAtPosition(lineNumber, column) {
        return this.tokenization.getLanguageIdAtPosition(lineNumber, column);
    }
    getWordAtPosition(position) {
        return this._tokenizationTextModelPart.getWordAtPosition(position);
    }
    getWordUntilPosition(position) {
        return this._tokenizationTextModelPart.getWordUntilPosition(position);
    }
    //#endregion
    normalizePosition(position, affinity) {
        return position;
    }
    /**
     * Gets the column at which indentation stops at a given line.
     * @internal
    */
    getLineIndentColumn(lineNumber) {
        // Columns start with 1.
        return indentOfLine(this.getLineContent(lineNumber)) + 1;
    }
};
TextModel._MODEL_SYNC_LIMIT = 50 * 1024 * 1024; // 50 MB,  // used in tests
TextModel.LARGE_FILE_SIZE_THRESHOLD = 20 * 1024 * 1024; // 20 MB;
TextModel.LARGE_FILE_LINE_COUNT_THRESHOLD = 300 * 1000; // 300K lines
TextModel.DEFAULT_CREATION_OPTIONS = {
    isForSimpleWidget: false,
    tabSize: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.tabSize,
    indentSize: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.indentSize,
    insertSpaces: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.insertSpaces,
    detectIndentation: false,
    defaultEOL: 1 /* model.DefaultEndOfLine.LF */,
    trimAutoWhitespace: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.trimAutoWhitespace,
    largeFileOptimizations: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.largeFileOptimizations,
    bracketPairColorizationOptions: textModelDefaults/* EDITOR_MODEL_DEFAULTS */.D.bracketPairColorizationOptions,
};
TextModel = __decorate([
    __param(4, undoRedo/* IUndoRedoService */.tJ),
    __param(5, language/* ILanguageService */.O),
    __param(6, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], TextModel);
function indentOfLine(line) {
    let indent = 0;
    for (const c of line) {
        if (c === ' ' || c === '\t') {
            indent++;
        }
        else {
            break;
        }
    }
    return indent;
}
//#region Decorations
function isNodeInOverviewRuler(node) {
    return (node.options.overviewRuler && node.options.overviewRuler.color ? true : false);
}
function isNodeInjectedText(node) {
    return !!node.options.after || !!node.options.before;
}
class DecorationsTrees {
    constructor() {
        this._decorationsTree0 = new intervalTree/* IntervalTree */.IF();
        this._decorationsTree1 = new intervalTree/* IntervalTree */.IF();
        this._injectedTextDecorationsTree = new intervalTree/* IntervalTree */.IF();
    }
    ensureAllNodesHaveRanges(host) {
        this.getAll(host, 0, false, false, false);
    }
    _ensureNodesHaveRanges(host, nodes) {
        for (const node of nodes) {
            if (node.range === null) {
                node.range = host.getRangeAt(node.cachedAbsoluteStart, node.cachedAbsoluteEnd);
            }
        }
        return nodes;
    }
    getAllInInterval(host, start, end, filterOwnerId, filterOutValidation, onlyMarginDecorations) {
        const versionId = host.getVersionId();
        const result = this._intervalSearch(start, end, filterOwnerId, filterOutValidation, versionId, onlyMarginDecorations);
        return this._ensureNodesHaveRanges(host, result);
    }
    _intervalSearch(start, end, filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations) {
        const r0 = this._decorationsTree0.intervalSearch(start, end, filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
        const r1 = this._decorationsTree1.intervalSearch(start, end, filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
        const r2 = this._injectedTextDecorationsTree.intervalSearch(start, end, filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
        return r0.concat(r1).concat(r2);
    }
    getInjectedTextInInterval(host, start, end, filterOwnerId) {
        const versionId = host.getVersionId();
        const result = this._injectedTextDecorationsTree.intervalSearch(start, end, filterOwnerId, false, versionId, false);
        return this._ensureNodesHaveRanges(host, result).filter((i) => i.options.showIfCollapsed || !i.range.isEmpty());
    }
    getAllInjectedText(host, filterOwnerId) {
        const versionId = host.getVersionId();
        const result = this._injectedTextDecorationsTree.search(filterOwnerId, false, versionId, false);
        return this._ensureNodesHaveRanges(host, result).filter((i) => i.options.showIfCollapsed || !i.range.isEmpty());
    }
    getAll(host, filterOwnerId, filterOutValidation, overviewRulerOnly, onlyMarginDecorations) {
        const versionId = host.getVersionId();
        const result = this._search(filterOwnerId, filterOutValidation, overviewRulerOnly, versionId, onlyMarginDecorations);
        return this._ensureNodesHaveRanges(host, result);
    }
    _search(filterOwnerId, filterOutValidation, overviewRulerOnly, cachedVersionId, onlyMarginDecorations) {
        if (overviewRulerOnly) {
            return this._decorationsTree1.search(filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
        }
        else {
            const r0 = this._decorationsTree0.search(filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
            const r1 = this._decorationsTree1.search(filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
            const r2 = this._injectedTextDecorationsTree.search(filterOwnerId, filterOutValidation, cachedVersionId, onlyMarginDecorations);
            return r0.concat(r1).concat(r2);
        }
    }
    collectNodesFromOwner(ownerId) {
        const r0 = this._decorationsTree0.collectNodesFromOwner(ownerId);
        const r1 = this._decorationsTree1.collectNodesFromOwner(ownerId);
        const r2 = this._injectedTextDecorationsTree.collectNodesFromOwner(ownerId);
        return r0.concat(r1).concat(r2);
    }
    collectNodesPostOrder() {
        const r0 = this._decorationsTree0.collectNodesPostOrder();
        const r1 = this._decorationsTree1.collectNodesPostOrder();
        const r2 = this._injectedTextDecorationsTree.collectNodesPostOrder();
        return r0.concat(r1).concat(r2);
    }
    insert(node) {
        if (isNodeInjectedText(node)) {
            this._injectedTextDecorationsTree.insert(node);
        }
        else if (isNodeInOverviewRuler(node)) {
            this._decorationsTree1.insert(node);
        }
        else {
            this._decorationsTree0.insert(node);
        }
    }
    delete(node) {
        if (isNodeInjectedText(node)) {
            this._injectedTextDecorationsTree.delete(node);
        }
        else if (isNodeInOverviewRuler(node)) {
            this._decorationsTree1.delete(node);
        }
        else {
            this._decorationsTree0.delete(node);
        }
    }
    getNodeRange(host, node) {
        const versionId = host.getVersionId();
        if (node.cachedVersionId !== versionId) {
            this._resolveNode(node, versionId);
        }
        if (node.range === null) {
            node.range = host.getRangeAt(node.cachedAbsoluteStart, node.cachedAbsoluteEnd);
        }
        return node.range;
    }
    _resolveNode(node, cachedVersionId) {
        if (isNodeInjectedText(node)) {
            this._injectedTextDecorationsTree.resolveNode(node, cachedVersionId);
        }
        else if (isNodeInOverviewRuler(node)) {
            this._decorationsTree1.resolveNode(node, cachedVersionId);
        }
        else {
            this._decorationsTree0.resolveNode(node, cachedVersionId);
        }
    }
    acceptReplace(offset, length, textLength, forceMoveMarkers) {
        this._decorationsTree0.acceptReplace(offset, length, textLength, forceMoveMarkers);
        this._decorationsTree1.acceptReplace(offset, length, textLength, forceMoveMarkers);
        this._injectedTextDecorationsTree.acceptReplace(offset, length, textLength, forceMoveMarkers);
    }
}
function cleanClassName(className) {
    return className.replace(/[^a-z0-9\-_]/gi, ' ');
}
class DecorationOptions {
    constructor(options) {
        this.color = options.color || '';
        this.darkColor = options.darkColor || '';
    }
}
class ModelDecorationOverviewRulerOptions extends DecorationOptions {
    constructor(options) {
        super(options);
        this._resolvedColor = null;
        this.position = (typeof options.position === 'number' ? options.position : model/* OverviewRulerLane */.sh.Center);
    }
    getColor(theme) {
        if (!this._resolvedColor) {
            if (theme.type !== 'light' && this.darkColor) {
                this._resolvedColor = this._resolveColor(this.darkColor, theme);
            }
            else {
                this._resolvedColor = this._resolveColor(this.color, theme);
            }
        }
        return this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = null;
    }
    _resolveColor(color, theme) {
        if (typeof color === 'string') {
            return color;
        }
        const c = color ? theme.getColor(color.id) : null;
        if (!c) {
            return '';
        }
        return c.toString();
    }
}
class ModelDecorationGlyphMarginOptions {
    constructor(options) {
        var _a;
        this.position = (_a = options === null || options === void 0 ? void 0 : options.position) !== null && _a !== void 0 ? _a : model/* GlyphMarginLane */.U.Left;
    }
}
class ModelDecorationMinimapOptions extends DecorationOptions {
    constructor(options) {
        super(options);
        this.position = options.position;
    }
    getColor(theme) {
        if (!this._resolvedColor) {
            if (theme.type !== 'light' && this.darkColor) {
                this._resolvedColor = this._resolveColor(this.darkColor, theme);
            }
            else {
                this._resolvedColor = this._resolveColor(this.color, theme);
            }
        }
        return this._resolvedColor;
    }
    invalidateCachedColor() {
        this._resolvedColor = undefined;
    }
    _resolveColor(color, theme) {
        if (typeof color === 'string') {
            return common_color/* Color */.Il.fromHex(color);
        }
        return theme.getColor(color.id);
    }
}
class ModelDecorationInjectedTextOptions {
    static from(options) {
        if (options instanceof ModelDecorationInjectedTextOptions) {
            return options;
        }
        return new ModelDecorationInjectedTextOptions(options);
    }
    constructor(options) {
        this.content = options.content || '';
        this.inlineClassName = options.inlineClassName || null;
        this.inlineClassNameAffectsLetterSpacing = options.inlineClassNameAffectsLetterSpacing || false;
        this.attachedData = options.attachedData || null;
        this.cursorStops = options.cursorStops || null;
    }
}
class ModelDecorationOptions {
    static register(options) {
        return new ModelDecorationOptions(options);
    }
    static createDynamic(options) {
        return new ModelDecorationOptions(options);
    }
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.description = options.description;
        this.blockClassName = options.blockClassName ? cleanClassName(options.blockClassName) : null;
        this.blockDoesNotCollapse = (_a = options.blockDoesNotCollapse) !== null && _a !== void 0 ? _a : null;
        this.blockIsAfterEnd = (_b = options.blockIsAfterEnd) !== null && _b !== void 0 ? _b : null;
        this.blockPadding = (_c = options.blockPadding) !== null && _c !== void 0 ? _c : null;
        this.stickiness = options.stickiness || 0 /* model.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */;
        this.zIndex = options.zIndex || 0;
        this.className = options.className ? cleanClassName(options.className) : null;
        this.hoverMessage = options.hoverMessage || null;
        this.glyphMarginHoverMessage = options.glyphMarginHoverMessage || null;
        this.isWholeLine = options.isWholeLine || false;
        this.showIfCollapsed = options.showIfCollapsed || false;
        this.collapseOnReplaceEdit = options.collapseOnReplaceEdit || false;
        this.overviewRuler = options.overviewRuler ? new ModelDecorationOverviewRulerOptions(options.overviewRuler) : null;
        this.minimap = options.minimap ? new ModelDecorationMinimapOptions(options.minimap) : null;
        this.glyphMargin = options.glyphMarginClassName ? new ModelDecorationGlyphMarginOptions(options.glyphMargin) : null;
        this.glyphMarginClassName = options.glyphMarginClassName ? cleanClassName(options.glyphMarginClassName) : null;
        this.linesDecorationsClassName = options.linesDecorationsClassName ? cleanClassName(options.linesDecorationsClassName) : null;
        this.firstLineDecorationClassName = options.firstLineDecorationClassName ? cleanClassName(options.firstLineDecorationClassName) : null;
        this.marginClassName = options.marginClassName ? cleanClassName(options.marginClassName) : null;
        this.inlineClassName = options.inlineClassName ? cleanClassName(options.inlineClassName) : null;
        this.inlineClassNameAffectsLetterSpacing = options.inlineClassNameAffectsLetterSpacing || false;
        this.beforeContentClassName = options.beforeContentClassName ? cleanClassName(options.beforeContentClassName) : null;
        this.afterContentClassName = options.afterContentClassName ? cleanClassName(options.afterContentClassName) : null;
        this.after = options.after ? ModelDecorationInjectedTextOptions.from(options.after) : null;
        this.before = options.before ? ModelDecorationInjectedTextOptions.from(options.before) : null;
        this.hideInCommentTokens = (_d = options.hideInCommentTokens) !== null && _d !== void 0 ? _d : false;
        this.hideInStringTokens = (_e = options.hideInStringTokens) !== null && _e !== void 0 ? _e : false;
    }
}
ModelDecorationOptions.EMPTY = ModelDecorationOptions.register({ description: 'empty' });
/**
 * The order carefully matches the values of the enum.
 */
const TRACKED_RANGE_OPTIONS = [
    ModelDecorationOptions.register({ description: 'tracked-range-always-grows-when-typing-at-edges', stickiness: 0 /* model.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */ }),
    ModelDecorationOptions.register({ description: 'tracked-range-never-grows-when-typing-at-edges', stickiness: 1 /* model.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */ }),
    ModelDecorationOptions.register({ description: 'tracked-range-grows-only-when-typing-before', stickiness: 2 /* model.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore */ }),
    ModelDecorationOptions.register({ description: 'tracked-range-grows-only-when-typing-after', stickiness: 3 /* model.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter */ }),
];
function _normalizeOptions(options) {
    if (options instanceof ModelDecorationOptions) {
        return options;
    }
    return ModelDecorationOptions.createDynamic(options);
}
class DidChangeDecorationsEmitter extends lifecycle/* Disposable */.JT {
    constructor(handleBeforeFire) {
        super();
        this.handleBeforeFire = handleBeforeFire;
        this._actual = this._register(new common_event/* Emitter */.Q5());
        this.event = this._actual.event;
        this._affectedInjectedTextLines = null;
        this._deferredCnt = 0;
        this._shouldFireDeferred = false;
        this._affectsMinimap = false;
        this._affectsOverviewRuler = false;
        this._affectsGlyphMargin = false;
    }
    beginDeferredEmit() {
        this._deferredCnt++;
    }
    endDeferredEmit() {
        var _a;
        this._deferredCnt--;
        if (this._deferredCnt === 0) {
            if (this._shouldFireDeferred) {
                this.doFire();
            }
            (_a = this._affectedInjectedTextLines) === null || _a === void 0 ? void 0 : _a.clear();
            this._affectedInjectedTextLines = null;
        }
    }
    recordLineAffectedByInjectedText(lineNumber) {
        if (!this._affectedInjectedTextLines) {
            this._affectedInjectedTextLines = new Set();
        }
        this._affectedInjectedTextLines.add(lineNumber);
    }
    checkAffectedAndFire(options) {
        if (!this._affectsMinimap) {
            this._affectsMinimap = options.minimap && options.minimap.position ? true : false;
        }
        if (!this._affectsOverviewRuler) {
            this._affectsOverviewRuler = options.overviewRuler && options.overviewRuler.color ? true : false;
        }
        if (!this._affectsGlyphMargin) {
            this._affectsGlyphMargin = options.glyphMarginClassName ? true : false;
        }
        this.tryFire();
    }
    fire() {
        this._affectsMinimap = true;
        this._affectsOverviewRuler = true;
        this._affectsGlyphMargin = true;
        this.tryFire();
    }
    tryFire() {
        if (this._deferredCnt === 0) {
            this.doFire();
        }
        else {
            this._shouldFireDeferred = true;
        }
    }
    doFire() {
        this.handleBeforeFire(this._affectedInjectedTextLines);
        const event = {
            affectsMinimap: this._affectsMinimap,
            affectsOverviewRuler: this._affectsOverviewRuler,
            affectsGlyphMargin: this._affectsGlyphMargin
        };
        this._shouldFireDeferred = false;
        this._affectsMinimap = false;
        this._affectsOverviewRuler = false;
        this._affectsGlyphMargin = false;
        this._actual.fire(event);
    }
}
//#endregion
class DidChangeContentEmitter extends lifecycle/* Disposable */.JT {
    constructor() {
        super();
        /**
         * Both `fastEvent` and `slowEvent` work the same way and contain the same events, but first we invoke `fastEvent` and then `slowEvent`.
         */
        this._fastEmitter = this._register(new common_event/* Emitter */.Q5());
        this.fastEvent = this._fastEmitter.event;
        this._slowEmitter = this._register(new common_event/* Emitter */.Q5());
        this.slowEvent = this._slowEmitter.event;
        this._deferredCnt = 0;
        this._deferredEvent = null;
    }
    beginDeferredEmit() {
        this._deferredCnt++;
    }
    endDeferredEmit(resultingSelection = null) {
        this._deferredCnt--;
        if (this._deferredCnt === 0) {
            if (this._deferredEvent !== null) {
                this._deferredEvent.rawContentChangedEvent.resultingSelection = resultingSelection;
                const e = this._deferredEvent;
                this._deferredEvent = null;
                this._fastEmitter.fire(e);
                this._slowEmitter.fire(e);
            }
        }
    }
    fire(e) {
        if (this._deferredCnt > 0) {
            if (this._deferredEvent) {
                this._deferredEvent = this._deferredEvent.merge(e);
            }
            else {
                this._deferredEvent = e;
            }
            return;
        }
        this._fastEmitter.fire(e);
        this._slowEmitter.fire(e);
    }
}
/**
 * @internal
 */
class AttachedViews {
    constructor() {
        this._onDidChangeVisibleRanges = new common_event/* Emitter */.Q5();
        this.onDidChangeVisibleRanges = this._onDidChangeVisibleRanges.event;
        this._views = new Set();
    }
    attachView() {
        const view = new AttachedViewImpl((state) => {
            this._onDidChangeVisibleRanges.fire({ view, state });
        });
        this._views.add(view);
        return view;
    }
    detachView(view) {
        this._views.delete(view);
        this._onDidChangeVisibleRanges.fire({ view, state: undefined });
    }
}
class AttachedViewImpl {
    constructor(handleStateChange) {
        this.handleStateChange = handleStateChange;
    }
    setVisibleLines(visibleLines, stabilized) {
        const visibleLineRanges = visibleLines.map((line) => new lineRange/* LineRange */.z(line.startLineNumber, line.endLineNumber + 1));
        this.handleStateChange({ visibleLineRanges, stabilized });
    }
}


/***/ }),

/***/ 44199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ TextModelPart; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class TextModelPart extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor() {
        super(...arguments);
        this._isDisposed = false;
    }
    dispose() {
        super.dispose();
        this._isDisposed = true;
    }
    assertNotDisposed() {
        if (this._isDisposed) {
            throw new Error('TextModelPart is disposed!');
        }
    }
}


/***/ }),

/***/ 17768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bc: function() { return /* binding */ SearchParams; },
/* harmony export */   cM: function() { return /* binding */ isValidMatch; },
/* harmony export */   iE: function() { return /* binding */ createFindMatch; },
/* harmony export */   pM: function() { return /* binding */ TextModelSearch; },
/* harmony export */   sz: function() { return /* binding */ Searcher; }
/* harmony export */ });
/* unused harmony export isMultilineRegexSource */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80238);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76584);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11754);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





const LIMIT_FIND_COUNT = 999;
class SearchParams {
    constructor(searchString, isRegex, matchCase, wordSeparators) {
        this.searchString = searchString;
        this.isRegex = isRegex;
        this.matchCase = matchCase;
        this.wordSeparators = wordSeparators;
    }
    parseSearchRequest() {
        if (this.searchString === '') {
            return null;
        }
        // Try to create a RegExp out of the params
        let multiline;
        if (this.isRegex) {
            multiline = isMultilineRegexSource(this.searchString);
        }
        else {
            multiline = (this.searchString.indexOf('\n') >= 0);
        }
        let regex = null;
        try {
            regex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .createRegExp */ .GF(this.searchString, this.isRegex, {
                matchCase: this.matchCase,
                wholeWord: false,
                multiline: multiline,
                global: true,
                unicode: true
            });
        }
        catch (err) {
            return null;
        }
        if (!regex) {
            return null;
        }
        let canUseSimpleSearch = (!this.isRegex && !multiline);
        if (canUseSimpleSearch && this.searchString.toLowerCase() !== this.searchString.toUpperCase()) {
            // casing might make a difference
            canUseSimpleSearch = this.matchCase;
        }
        return new _model_js__WEBPACK_IMPORTED_MODULE_2__/* .SearchData */ .Tx(regex, this.wordSeparators ? (0,_core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_1__/* .getMapForWordSeparators */ .u)(this.wordSeparators) : null, canUseSimpleSearch ? this.searchString : null);
    }
}
function isMultilineRegexSource(searchString) {
    if (!searchString || searchString.length === 0) {
        return false;
    }
    for (let i = 0, len = searchString.length; i < len; i++) {
        const chCode = searchString.charCodeAt(i);
        if (chCode === 10 /* CharCode.LineFeed */) {
            return true;
        }
        if (chCode === 92 /* CharCode.Backslash */) {
            // move to next char
            i++;
            if (i >= len) {
                // string ends with a \
                break;
            }
            const nextChCode = searchString.charCodeAt(i);
            if (nextChCode === 110 /* CharCode.n */ || nextChCode === 114 /* CharCode.r */ || nextChCode === 87 /* CharCode.W */) {
                return true;
            }
        }
    }
    return false;
}
function createFindMatch(range, rawMatches, captureMatches) {
    if (!captureMatches) {
        return new _model_js__WEBPACK_IMPORTED_MODULE_2__/* .FindMatch */ .tk(range, null);
    }
    const matches = [];
    for (let i = 0, len = rawMatches.length; i < len; i++) {
        matches[i] = rawMatches[i];
    }
    return new _model_js__WEBPACK_IMPORTED_MODULE_2__/* .FindMatch */ .tk(range, matches);
}
class LineFeedCounter {
    constructor(text) {
        const lineFeedsOffsets = [];
        let lineFeedsOffsetsLen = 0;
        for (let i = 0, textLen = text.length; i < textLen; i++) {
            if (text.charCodeAt(i) === 10 /* CharCode.LineFeed */) {
                lineFeedsOffsets[lineFeedsOffsetsLen++] = i;
            }
        }
        this._lineFeedsOffsets = lineFeedsOffsets;
    }
    findLineFeedCountBeforeOffset(offset) {
        const lineFeedsOffsets = this._lineFeedsOffsets;
        let min = 0;
        let max = lineFeedsOffsets.length - 1;
        if (max === -1) {
            // no line feeds
            return 0;
        }
        if (offset <= lineFeedsOffsets[0]) {
            // before first line feed
            return 0;
        }
        while (min < max) {
            const mid = min + ((max - min) / 2 >> 0);
            if (lineFeedsOffsets[mid] >= offset) {
                max = mid - 1;
            }
            else {
                if (lineFeedsOffsets[mid + 1] >= offset) {
                    // bingo!
                    min = mid;
                    max = mid;
                }
                else {
                    min = mid + 1;
                }
            }
        }
        return min + 1;
    }
}
class TextModelSearch {
    static findMatches(model, searchParams, searchRange, captureMatches, limitResultCount) {
        const searchData = searchParams.parseSearchRequest();
        if (!searchData) {
            return [];
        }
        if (searchData.regex.multiline) {
            return this._doFindMatchesMultiline(model, searchRange, new Searcher(searchData.wordSeparators, searchData.regex), captureMatches, limitResultCount);
        }
        return this._doFindMatchesLineByLine(model, searchRange, searchData, captureMatches, limitResultCount);
    }
    /**
     * Multiline search always executes on the lines concatenated with \n.
     * We must therefore compensate for the count of \n in case the model is CRLF
     */
    static _getMultilineMatchRange(model, deltaOffset, text, lfCounter, matchIndex, match0) {
        let startOffset;
        let lineFeedCountBeforeMatch = 0;
        if (lfCounter) {
            lineFeedCountBeforeMatch = lfCounter.findLineFeedCountBeforeOffset(matchIndex);
            startOffset = deltaOffset + matchIndex + lineFeedCountBeforeMatch /* add as many \r as there were \n */;
        }
        else {
            startOffset = deltaOffset + matchIndex;
        }
        let endOffset;
        if (lfCounter) {
            const lineFeedCountBeforeEndOfMatch = lfCounter.findLineFeedCountBeforeOffset(matchIndex + match0.length);
            const lineFeedCountInMatch = lineFeedCountBeforeEndOfMatch - lineFeedCountBeforeMatch;
            endOffset = startOffset + match0.length + lineFeedCountInMatch /* add as many \r as there were \n */;
        }
        else {
            endOffset = startOffset + match0.length;
        }
        const startPosition = model.getPositionAt(startOffset);
        const endPosition = model.getPositionAt(endOffset);
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
    }
    static _doFindMatchesMultiline(model, searchRange, searcher, captureMatches, limitResultCount) {
        const deltaOffset = model.getOffsetAt(searchRange.getStartPosition());
        // We always execute multiline search over the lines joined with \n
        // This makes it that \n will match the EOL for both CRLF and LF models
        // We compensate for offset errors in `_getMultilineMatchRange`
        const text = model.getValueInRange(searchRange, 1 /* EndOfLinePreference.LF */);
        const lfCounter = (model.getEOL() === '\r\n' ? new LineFeedCounter(text) : null);
        const result = [];
        let counter = 0;
        let m;
        searcher.reset(0);
        while ((m = searcher.next(text))) {
            result[counter++] = createFindMatch(this._getMultilineMatchRange(model, deltaOffset, text, lfCounter, m.index, m[0]), m, captureMatches);
            if (counter >= limitResultCount) {
                return result;
            }
        }
        return result;
    }
    static _doFindMatchesLineByLine(model, searchRange, searchData, captureMatches, limitResultCount) {
        const result = [];
        let resultLen = 0;
        // Early case for a search range that starts & stops on the same line number
        if (searchRange.startLineNumber === searchRange.endLineNumber) {
            const text = model.getLineContent(searchRange.startLineNumber).substring(searchRange.startColumn - 1, searchRange.endColumn - 1);
            resultLen = this._findMatchesInLine(searchData, text, searchRange.startLineNumber, searchRange.startColumn - 1, resultLen, result, captureMatches, limitResultCount);
            return result;
        }
        // Collect results from first line
        const text = model.getLineContent(searchRange.startLineNumber).substring(searchRange.startColumn - 1);
        resultLen = this._findMatchesInLine(searchData, text, searchRange.startLineNumber, searchRange.startColumn - 1, resultLen, result, captureMatches, limitResultCount);
        // Collect results from middle lines
        for (let lineNumber = searchRange.startLineNumber + 1; lineNumber < searchRange.endLineNumber && resultLen < limitResultCount; lineNumber++) {
            resultLen = this._findMatchesInLine(searchData, model.getLineContent(lineNumber), lineNumber, 0, resultLen, result, captureMatches, limitResultCount);
        }
        // Collect results from last line
        if (resultLen < limitResultCount) {
            const text = model.getLineContent(searchRange.endLineNumber).substring(0, searchRange.endColumn - 1);
            resultLen = this._findMatchesInLine(searchData, text, searchRange.endLineNumber, 0, resultLen, result, captureMatches, limitResultCount);
        }
        return result;
    }
    static _findMatchesInLine(searchData, text, lineNumber, deltaOffset, resultLen, result, captureMatches, limitResultCount) {
        const wordSeparators = searchData.wordSeparators;
        if (!captureMatches && searchData.simpleSearch) {
            const searchString = searchData.simpleSearch;
            const searchStringLen = searchString.length;
            const textLength = text.length;
            let lastMatchIndex = -searchStringLen;
            while ((lastMatchIndex = text.indexOf(searchString, lastMatchIndex + searchStringLen)) !== -1) {
                if (!wordSeparators || isValidMatch(wordSeparators, text, textLength, lastMatchIndex, searchStringLen)) {
                    result[resultLen++] = new _model_js__WEBPACK_IMPORTED_MODULE_2__/* .FindMatch */ .tk(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, lastMatchIndex + 1 + deltaOffset, lineNumber, lastMatchIndex + 1 + searchStringLen + deltaOffset), null);
                    if (resultLen >= limitResultCount) {
                        return resultLen;
                    }
                }
            }
            return resultLen;
        }
        const searcher = new Searcher(searchData.wordSeparators, searchData.regex);
        let m;
        // Reset regex to search from the beginning
        searcher.reset(0);
        do {
            m = searcher.next(text);
            if (m) {
                result[resultLen++] = createFindMatch(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, m.index + 1 + deltaOffset, lineNumber, m.index + 1 + m[0].length + deltaOffset), m, captureMatches);
                if (resultLen >= limitResultCount) {
                    return resultLen;
                }
            }
        } while (m);
        return resultLen;
    }
    static findNextMatch(model, searchParams, searchStart, captureMatches) {
        const searchData = searchParams.parseSearchRequest();
        if (!searchData) {
            return null;
        }
        const searcher = new Searcher(searchData.wordSeparators, searchData.regex);
        if (searchData.regex.multiline) {
            return this._doFindNextMatchMultiline(model, searchStart, searcher, captureMatches);
        }
        return this._doFindNextMatchLineByLine(model, searchStart, searcher, captureMatches);
    }
    static _doFindNextMatchMultiline(model, searchStart, searcher, captureMatches) {
        const searchTextStart = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(searchStart.lineNumber, 1);
        const deltaOffset = model.getOffsetAt(searchTextStart);
        const lineCount = model.getLineCount();
        // We always execute multiline search over the lines joined with \n
        // This makes it that \n will match the EOL for both CRLF and LF models
        // We compensate for offset errors in `_getMultilineMatchRange`
        const text = model.getValueInRange(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(searchTextStart.lineNumber, searchTextStart.column, lineCount, model.getLineMaxColumn(lineCount)), 1 /* EndOfLinePreference.LF */);
        const lfCounter = (model.getEOL() === '\r\n' ? new LineFeedCounter(text) : null);
        searcher.reset(searchStart.column - 1);
        const m = searcher.next(text);
        if (m) {
            return createFindMatch(this._getMultilineMatchRange(model, deltaOffset, text, lfCounter, m.index, m[0]), m, captureMatches);
        }
        if (searchStart.lineNumber !== 1 || searchStart.column !== 1) {
            // Try again from the top
            return this._doFindNextMatchMultiline(model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(1, 1), searcher, captureMatches);
        }
        return null;
    }
    static _doFindNextMatchLineByLine(model, searchStart, searcher, captureMatches) {
        const lineCount = model.getLineCount();
        const startLineNumber = searchStart.lineNumber;
        // Look in first line
        const text = model.getLineContent(startLineNumber);
        const r = this._findFirstMatchInLine(searcher, text, startLineNumber, searchStart.column, captureMatches);
        if (r) {
            return r;
        }
        for (let i = 1; i <= lineCount; i++) {
            const lineIndex = (startLineNumber + i - 1) % lineCount;
            const text = model.getLineContent(lineIndex + 1);
            const r = this._findFirstMatchInLine(searcher, text, lineIndex + 1, 1, captureMatches);
            if (r) {
                return r;
            }
        }
        return null;
    }
    static _findFirstMatchInLine(searcher, text, lineNumber, fromColumn, captureMatches) {
        // Set regex to search from column
        searcher.reset(fromColumn - 1);
        const m = searcher.next(text);
        if (m) {
            return createFindMatch(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, m.index + 1, lineNumber, m.index + 1 + m[0].length), m, captureMatches);
        }
        return null;
    }
    static findPreviousMatch(model, searchParams, searchStart, captureMatches) {
        const searchData = searchParams.parseSearchRequest();
        if (!searchData) {
            return null;
        }
        const searcher = new Searcher(searchData.wordSeparators, searchData.regex);
        if (searchData.regex.multiline) {
            return this._doFindPreviousMatchMultiline(model, searchStart, searcher, captureMatches);
        }
        return this._doFindPreviousMatchLineByLine(model, searchStart, searcher, captureMatches);
    }
    static _doFindPreviousMatchMultiline(model, searchStart, searcher, captureMatches) {
        const matches = this._doFindMatchesMultiline(model, new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(1, 1, searchStart.lineNumber, searchStart.column), searcher, captureMatches, 10 * LIMIT_FIND_COUNT);
        if (matches.length > 0) {
            return matches[matches.length - 1];
        }
        const lineCount = model.getLineCount();
        if (searchStart.lineNumber !== lineCount || searchStart.column !== model.getLineMaxColumn(lineCount)) {
            // Try again with all content
            return this._doFindPreviousMatchMultiline(model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineCount, model.getLineMaxColumn(lineCount)), searcher, captureMatches);
        }
        return null;
    }
    static _doFindPreviousMatchLineByLine(model, searchStart, searcher, captureMatches) {
        const lineCount = model.getLineCount();
        const startLineNumber = searchStart.lineNumber;
        // Look in first line
        const text = model.getLineContent(startLineNumber).substring(0, searchStart.column - 1);
        const r = this._findLastMatchInLine(searcher, text, startLineNumber, captureMatches);
        if (r) {
            return r;
        }
        for (let i = 1; i <= lineCount; i++) {
            const lineIndex = (lineCount + startLineNumber - i - 1) % lineCount;
            const text = model.getLineContent(lineIndex + 1);
            const r = this._findLastMatchInLine(searcher, text, lineIndex + 1, captureMatches);
            if (r) {
                return r;
            }
        }
        return null;
    }
    static _findLastMatchInLine(searcher, text, lineNumber, captureMatches) {
        let bestResult = null;
        let m;
        searcher.reset(0);
        while ((m = searcher.next(text))) {
            bestResult = createFindMatch(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, m.index + 1, lineNumber, m.index + 1 + m[0].length), m, captureMatches);
        }
        return bestResult;
    }
}
function leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    if (matchStartIndex === 0) {
        // Match starts at start of string
        return true;
    }
    const charBefore = text.charCodeAt(matchStartIndex - 1);
    if (wordSeparators.get(charBefore) !== 0 /* WordCharacterClass.Regular */) {
        // The character before the match is a word separator
        return true;
    }
    if (charBefore === 13 /* CharCode.CarriageReturn */ || charBefore === 10 /* CharCode.LineFeed */) {
        // The character before the match is line break or carriage return.
        return true;
    }
    if (matchLength > 0) {
        const firstCharInMatch = text.charCodeAt(matchStartIndex);
        if (wordSeparators.get(firstCharInMatch) !== 0 /* WordCharacterClass.Regular */) {
            // The first character inside the match is a word separator
            return true;
        }
    }
    return false;
}
function rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    if (matchStartIndex + matchLength === textLength) {
        // Match ends at end of string
        return true;
    }
    const charAfter = text.charCodeAt(matchStartIndex + matchLength);
    if (wordSeparators.get(charAfter) !== 0 /* WordCharacterClass.Regular */) {
        // The character after the match is a word separator
        return true;
    }
    if (charAfter === 13 /* CharCode.CarriageReturn */ || charAfter === 10 /* CharCode.LineFeed */) {
        // The character after the match is line break or carriage return.
        return true;
    }
    if (matchLength > 0) {
        const lastCharInMatch = text.charCodeAt(matchStartIndex + matchLength - 1);
        if (wordSeparators.get(lastCharInMatch) !== 0 /* WordCharacterClass.Regular */) {
            // The last character in the match is a word separator
            return true;
        }
    }
    return false;
}
function isValidMatch(wordSeparators, text, textLength, matchStartIndex, matchLength) {
    return (leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength)
        && rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength));
}
class Searcher {
    constructor(wordSeparators, searchRegex) {
        this._wordSeparators = wordSeparators;
        this._searchRegex = searchRegex;
        this._prevMatchStartIndex = -1;
        this._prevMatchLength = 0;
    }
    reset(lastIndex) {
        this._searchRegex.lastIndex = lastIndex;
        this._prevMatchStartIndex = -1;
        this._prevMatchLength = 0;
    }
    next(text) {
        const textLength = text.length;
        let m;
        do {
            if (this._prevMatchStartIndex + this._prevMatchLength === textLength) {
                // Reached the end of the line
                return null;
            }
            m = this._searchRegex.exec(text);
            if (!m) {
                return null;
            }
            const matchStartIndex = m.index;
            const matchLength = m[0].length;
            if (matchStartIndex === this._prevMatchStartIndex && matchLength === this._prevMatchLength) {
                if (matchLength === 0) {
                    // the search result is an empty string and won't advance `regex.lastIndex`, so `regex.exec` will stuck here
                    // we attempt to recover from that by advancing by two if surrogate pair found and by one otherwise
                    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getNextCodePoint */ .ZH(text, textLength, this._searchRegex.lastIndex) > 0xFFFF) {
                        this._searchRegex.lastIndex += 2;
                    }
                    else {
                        this._searchRegex.lastIndex += 1;
                    }
                    continue;
                }
                // Exit early if the regex matches the same range twice
                return null;
            }
            this._prevMatchStartIndex = matchStartIndex;
            this._prevMatchLength = matchLength;
            if (!this._wordSeparators || isValidMatch(this._wordSeparators, text, textLength, matchStartIndex, matchLength)) {
                return m;
            }
        } while (m);
        return null;
    }
}


/***/ }),

/***/ 64299:
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