"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-430670c2"],{

/***/ 71813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ TokenizationRegistry; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
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


class TokenizationRegistry {
    constructor() {
        this._tokenizationSupports = new Map();
        this._factories = new Map();
        this._onDidChange = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChange = this._onDidChange.event;
        this._colorMap = null;
    }
    handleChange(languageIds) {
        this._onDidChange.fire({
            changedLanguages: languageIds,
            changedColorMap: false
        });
    }
    register(languageId, support) {
        this._tokenizationSupports.set(languageId, support);
        this.handleChange([languageId]);
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            if (this._tokenizationSupports.get(languageId) !== support) {
                return;
            }
            this._tokenizationSupports.delete(languageId);
            this.handleChange([languageId]);
        });
    }
    get(languageId) {
        return this._tokenizationSupports.get(languageId) || null;
    }
    registerFactory(languageId, factory) {
        var _a;
        (_a = this._factories.get(languageId)) === null || _a === void 0 ? void 0 : _a.dispose();
        const myData = new TokenizationSupportFactoryData(this, languageId, factory);
        this._factories.set(languageId, myData);
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            const v = this._factories.get(languageId);
            if (!v || v !== myData) {
                return;
            }
            this._factories.delete(languageId);
            v.dispose();
        });
    }
    getOrCreate(languageId) {
        return __awaiter(this, void 0, void 0, function* () {
            // check first if the support is already set
            const tokenizationSupport = this.get(languageId);
            if (tokenizationSupport) {
                return tokenizationSupport;
            }
            const factory = this._factories.get(languageId);
            if (!factory || factory.isResolved) {
                // no factory or factory.resolve already finished
                return null;
            }
            yield factory.resolve();
            return this.get(languageId);
        });
    }
    isResolved(languageId) {
        const tokenizationSupport = this.get(languageId);
        if (tokenizationSupport) {
            return true;
        }
        const factory = this._factories.get(languageId);
        if (!factory || factory.isResolved) {
            return true;
        }
        return false;
    }
    setColorMap(colorMap) {
        this._colorMap = colorMap;
        this._onDidChange.fire({
            changedLanguages: Array.from(this._tokenizationSupports.keys()),
            changedColorMap: true
        });
    }
    getColorMap() {
        return this._colorMap;
    }
    getDefaultBackground() {
        if (this._colorMap && this._colorMap.length > 2 /* ColorId.DefaultBackground */) {
            return this._colorMap[2 /* ColorId.DefaultBackground */];
        }
        return null;
    }
}
class TokenizationSupportFactoryData extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    get isResolved() {
        return this._isResolved;
    }
    constructor(_registry, _languageId, _factory) {
        super();
        this._registry = _registry;
        this._languageId = _languageId;
        this._factory = _factory;
        this._isDisposed = false;
        this._resolvePromise = null;
        this._isResolved = false;
    }
    dispose() {
        this._isDisposed = true;
        super.dispose();
    }
    resolve() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._resolvePromise) {
                this._resolvePromise = this._create();
            }
            return this._resolvePromise;
        });
    }
    _create() {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this._factory.tokenizationSupport;
            this._isResolved = true;
            if (value && !this._isDisposed) {
                this._register(this._registry.register(this._languageId, value));
            }
        });
    }
}


/***/ }),

/***/ 85570:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: function() { return /* binding */ ContiguousMultilineTokensBuilder; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousMultilineTokens.js
/**
 * Represents contiguous tokens over a contiguous range of lines.
 */
class ContiguousMultilineTokens {
    /**
     * (Inclusive) start line number for these tokens.
     */
    get startLineNumber() {
        return this._startLineNumber;
    }
    /**
     * (Inclusive) end line number for these tokens.
     */
    get endLineNumber() {
        return this._startLineNumber + this._tokens.length - 1;
    }
    constructor(startLineNumber, tokens) {
        this._startLineNumber = startLineNumber;
        this._tokens = tokens;
    }
    /**
     * @see {@link _tokens}
     */
    getLineTokens(lineNumber) {
        return this._tokens[lineNumber - this._startLineNumber];
    }
    appendLineTokens(lineTokens) {
        this._tokens.push(lineTokens);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousMultilineTokensBuilder.js

class ContiguousMultilineTokensBuilder {
    constructor() {
        this._tokens = [];
    }
    add(lineNumber, lineTokens) {
        if (this._tokens.length > 0) {
            const last = this._tokens[this._tokens.length - 1];
            if (last.endLineNumber + 1 === lineNumber) {
                // append
                last.appendLineTokens(lineTokens);
                return;
            }
        }
        this._tokens.push(new ContiguousMultilineTokens(lineNumber, [lineTokens]));
    }
    finalize() {
        return this._tokens;
    }
}


/***/ }),

/***/ 69659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: function() { return /* binding */ ContiguousTokensStore; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/lineTokens.js
var tokens_lineTokens = __webpack_require__(15792);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousTokensEditing.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const EMPTY_LINE_TOKENS = (new Uint32Array(0)).buffer;
class ContiguousTokensEditing {
    static deleteBeginning(lineTokens, toChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        return ContiguousTokensEditing.delete(lineTokens, 0, toChIndex);
    }
    static deleteEnding(lineTokens, fromChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const lineTextLength = tokens[tokens.length - 2];
        return ContiguousTokensEditing.delete(lineTokens, fromChIndex, lineTextLength);
    }
    static delete(lineTokens, fromChIndex, toChIndex) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS || fromChIndex === toChIndex) {
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const tokensCount = (tokens.length >>> 1);
        // special case: deleting everything
        if (fromChIndex === 0 && tokens[tokens.length - 2] === toChIndex) {
            return EMPTY_LINE_TOKENS;
        }
        const fromTokenIndex = tokens_lineTokens/* LineTokens */.A.findIndexInTokensArray(tokens, fromChIndex);
        const fromTokenStartOffset = (fromTokenIndex > 0 ? tokens[(fromTokenIndex - 1) << 1] : 0);
        const fromTokenEndOffset = tokens[fromTokenIndex << 1];
        if (toChIndex < fromTokenEndOffset) {
            // the delete range is inside a single token
            const delta = (toChIndex - fromChIndex);
            for (let i = fromTokenIndex; i < tokensCount; i++) {
                tokens[i << 1] -= delta;
            }
            return lineTokens;
        }
        let dest;
        let lastEnd;
        if (fromTokenStartOffset !== fromChIndex) {
            tokens[fromTokenIndex << 1] = fromChIndex;
            dest = ((fromTokenIndex + 1) << 1);
            lastEnd = fromChIndex;
        }
        else {
            dest = (fromTokenIndex << 1);
            lastEnd = fromTokenStartOffset;
        }
        const delta = (toChIndex - fromChIndex);
        for (let tokenIndex = fromTokenIndex + 1; tokenIndex < tokensCount; tokenIndex++) {
            const tokenEndOffset = tokens[tokenIndex << 1] - delta;
            if (tokenEndOffset > lastEnd) {
                tokens[dest++] = tokenEndOffset;
                tokens[dest++] = tokens[(tokenIndex << 1) + 1];
                lastEnd = tokenEndOffset;
            }
        }
        if (dest === tokens.length) {
            // nothing to trim
            return lineTokens;
        }
        const tmp = new Uint32Array(dest);
        tmp.set(tokens.subarray(0, dest), 0);
        return tmp.buffer;
    }
    static append(lineTokens, _otherTokens) {
        if (_otherTokens === EMPTY_LINE_TOKENS) {
            return lineTokens;
        }
        if (lineTokens === EMPTY_LINE_TOKENS) {
            return _otherTokens;
        }
        if (lineTokens === null) {
            return lineTokens;
        }
        if (_otherTokens === null) {
            // cannot determine combined line length...
            return null;
        }
        const myTokens = toUint32Array(lineTokens);
        const otherTokens = toUint32Array(_otherTokens);
        const otherTokensCount = (otherTokens.length >>> 1);
        const result = new Uint32Array(myTokens.length + otherTokens.length);
        result.set(myTokens, 0);
        let dest = myTokens.length;
        const delta = myTokens[myTokens.length - 2];
        for (let i = 0; i < otherTokensCount; i++) {
            result[dest++] = otherTokens[(i << 1)] + delta;
            result[dest++] = otherTokens[(i << 1) + 1];
        }
        return result.buffer;
    }
    static insert(lineTokens, chIndex, textLength) {
        if (lineTokens === null || lineTokens === EMPTY_LINE_TOKENS) {
            // nothing to do
            return lineTokens;
        }
        const tokens = toUint32Array(lineTokens);
        const tokensCount = (tokens.length >>> 1);
        let fromTokenIndex = tokens_lineTokens/* LineTokens */.A.findIndexInTokensArray(tokens, chIndex);
        if (fromTokenIndex > 0) {
            const fromTokenStartOffset = tokens[(fromTokenIndex - 1) << 1];
            if (fromTokenStartOffset === chIndex) {
                fromTokenIndex--;
            }
        }
        for (let tokenIndex = fromTokenIndex; tokenIndex < tokensCount; tokenIndex++) {
            tokens[tokenIndex << 1] += textLength;
        }
        return lineTokens;
    }
}
function toUint32Array(arr) {
    if (arr instanceof Uint32Array) {
        return arr;
    }
    else {
        return new Uint32Array(arr);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/encodedTokenAttributes.js
var encodedTokenAttributes = __webpack_require__(23124);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/contiguousTokensStore.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * Represents contiguous tokens in a text model.
 */
class ContiguousTokensStore {
    constructor(languageIdCodec) {
        this._lineTokens = [];
        this._len = 0;
        this._languageIdCodec = languageIdCodec;
    }
    flush() {
        this._lineTokens = [];
        this._len = 0;
    }
    get hasTokens() {
        return this._lineTokens.length > 0;
    }
    getTokens(topLevelLanguageId, lineIndex, lineText) {
        let rawLineTokens = null;
        if (lineIndex < this._len) {
            rawLineTokens = this._lineTokens[lineIndex];
        }
        if (rawLineTokens !== null && rawLineTokens !== EMPTY_LINE_TOKENS) {
            return new tokens_lineTokens/* LineTokens */.A(toUint32Array(rawLineTokens), lineText, this._languageIdCodec);
        }
        const lineTokens = new Uint32Array(2);
        lineTokens[0] = lineText.length;
        lineTokens[1] = getDefaultMetadata(this._languageIdCodec.encodeLanguageId(topLevelLanguageId));
        return new tokens_lineTokens/* LineTokens */.A(lineTokens, lineText, this._languageIdCodec);
    }
    static _massageTokens(topLevelLanguageId, lineTextLength, _tokens) {
        const tokens = _tokens ? toUint32Array(_tokens) : null;
        if (lineTextLength === 0) {
            let hasDifferentLanguageId = false;
            if (tokens && tokens.length > 1) {
                hasDifferentLanguageId = (encodedTokenAttributes/* TokenMetadata */.N.getLanguageId(tokens[1]) !== topLevelLanguageId);
            }
            if (!hasDifferentLanguageId) {
                return EMPTY_LINE_TOKENS;
            }
        }
        if (!tokens || tokens.length === 0) {
            const tokens = new Uint32Array(2);
            tokens[0] = lineTextLength;
            tokens[1] = getDefaultMetadata(topLevelLanguageId);
            return tokens.buffer;
        }
        // Ensure the last token covers the end of the text
        tokens[tokens.length - 2] = lineTextLength;
        if (tokens.byteOffset === 0 && tokens.byteLength === tokens.buffer.byteLength) {
            // Store directly the ArrayBuffer pointer to save an object
            return tokens.buffer;
        }
        return tokens;
    }
    _ensureLine(lineIndex) {
        while (lineIndex >= this._len) {
            this._lineTokens[this._len] = null;
            this._len++;
        }
    }
    _deleteLines(start, deleteCount) {
        if (deleteCount === 0) {
            return;
        }
        if (start + deleteCount > this._len) {
            deleteCount = this._len - start;
        }
        this._lineTokens.splice(start, deleteCount);
        this._len -= deleteCount;
    }
    _insertLines(insertIndex, insertCount) {
        if (insertCount === 0) {
            return;
        }
        const lineTokens = [];
        for (let i = 0; i < insertCount; i++) {
            lineTokens[i] = null;
        }
        this._lineTokens = arrays/* arrayInsert */.Zv(this._lineTokens, insertIndex, lineTokens);
        this._len += insertCount;
    }
    setTokens(topLevelLanguageId, lineIndex, lineTextLength, _tokens, checkEquality) {
        const tokens = ContiguousTokensStore._massageTokens(this._languageIdCodec.encodeLanguageId(topLevelLanguageId), lineTextLength, _tokens);
        this._ensureLine(lineIndex);
        const oldTokens = this._lineTokens[lineIndex];
        this._lineTokens[lineIndex] = tokens;
        if (checkEquality) {
            return !ContiguousTokensStore._equals(oldTokens, tokens);
        }
        return false;
    }
    static _equals(_a, _b) {
        if (!_a || !_b) {
            return !_a && !_b;
        }
        const a = toUint32Array(_a);
        const b = toUint32Array(_b);
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0, len = a.length; i < len; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
    //#region Editing
    acceptEdit(range, eolCount, firstLineLength) {
        this._acceptDeleteRange(range);
        this._acceptInsertText(new position/* Position */.L(range.startLineNumber, range.startColumn), eolCount, firstLineLength);
    }
    _acceptDeleteRange(range) {
        const firstLineIndex = range.startLineNumber - 1;
        if (firstLineIndex >= this._len) {
            return;
        }
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                // Nothing to delete
                return;
            }
            this._lineTokens[firstLineIndex] = ContiguousTokensEditing.delete(this._lineTokens[firstLineIndex], range.startColumn - 1, range.endColumn - 1);
            return;
        }
        this._lineTokens[firstLineIndex] = ContiguousTokensEditing.deleteEnding(this._lineTokens[firstLineIndex], range.startColumn - 1);
        const lastLineIndex = range.endLineNumber - 1;
        let lastLineTokens = null;
        if (lastLineIndex < this._len) {
            lastLineTokens = ContiguousTokensEditing.deleteBeginning(this._lineTokens[lastLineIndex], range.endColumn - 1);
        }
        // Take remaining text on last line and append it to remaining text on first line
        this._lineTokens[firstLineIndex] = ContiguousTokensEditing.append(this._lineTokens[firstLineIndex], lastLineTokens);
        // Delete middle lines
        this._deleteLines(range.startLineNumber, range.endLineNumber - range.startLineNumber);
    }
    _acceptInsertText(position, eolCount, firstLineLength) {
        if (eolCount === 0 && firstLineLength === 0) {
            // Nothing to insert
            return;
        }
        const lineIndex = position.lineNumber - 1;
        if (lineIndex >= this._len) {
            return;
        }
        if (eolCount === 0) {
            // Inserting text on one line
            this._lineTokens[lineIndex] = ContiguousTokensEditing.insert(this._lineTokens[lineIndex], position.column - 1, firstLineLength);
            return;
        }
        this._lineTokens[lineIndex] = ContiguousTokensEditing.deleteEnding(this._lineTokens[lineIndex], position.column - 1);
        this._lineTokens[lineIndex] = ContiguousTokensEditing.insert(this._lineTokens[lineIndex], position.column - 1, firstLineLength);
        this._insertLines(position.lineNumber, eolCount);
    }
    //#endregion
    setMultilineTokens(tokens, textModel) {
        if (tokens.length === 0) {
            return { changes: [] };
        }
        const ranges = [];
        for (let i = 0, len = tokens.length; i < len; i++) {
            const element = tokens[i];
            let minChangedLineNumber = 0;
            let maxChangedLineNumber = 0;
            let hasChange = false;
            for (let lineNumber = element.startLineNumber; lineNumber <= element.endLineNumber; lineNumber++) {
                if (hasChange) {
                    this.setTokens(textModel.getLanguageId(), lineNumber - 1, textModel.getLineLength(lineNumber), element.getLineTokens(lineNumber), false);
                    maxChangedLineNumber = lineNumber;
                }
                else {
                    const lineHasChange = this.setTokens(textModel.getLanguageId(), lineNumber - 1, textModel.getLineLength(lineNumber), element.getLineTokens(lineNumber), true);
                    if (lineHasChange) {
                        hasChange = true;
                        minChangedLineNumber = lineNumber;
                        maxChangedLineNumber = lineNumber;
                    }
                }
            }
            if (hasChange) {
                ranges.push({ fromLineNumber: minChangedLineNumber, toLineNumber: maxChangedLineNumber, });
            }
        }
        return { changes: ranges };
    }
}
function getDefaultMetadata(topLevelLanguageId) {
    return ((topLevelLanguageId << 0 /* MetadataConsts.LANGUAGEID_OFFSET */)
        | (0 /* StandardTokenType.Other */ << 8 /* MetadataConsts.TOKEN_TYPE_OFFSET */)
        | (0 /* FontStyle.None */ << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
        | (1 /* ColorId.DefaultForeground */ << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
        | (2 /* ColorId.DefaultBackground */ << 24 /* MetadataConsts.BACKGROUND_OFFSET */)
        // If there is no grammar, we just take a guess and try to match brackets.
        | (1024 /* MetadataConsts.BALANCED_BRACKETS_MASK */)) >>> 0;
}


/***/ }),

/***/ 15792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ LineTokens; }
/* harmony export */ });
/* harmony import */ var _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23124);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class LineTokens {
    static createEmpty(lineContent, decoder) {
        const defaultMetadata = LineTokens.defaultTokenMetadata;
        const tokens = new Uint32Array(2);
        tokens[0] = lineContent.length;
        tokens[1] = defaultMetadata;
        return new LineTokens(tokens, lineContent, decoder);
    }
    constructor(tokens, text, decoder) {
        this._lineTokensBrand = undefined;
        this._tokens = tokens;
        this._tokensCount = (this._tokens.length >>> 1);
        this._text = text;
        this._languageIdCodec = decoder;
    }
    equals(other) {
        if (other instanceof LineTokens) {
            return this.slicedEquals(other, 0, this._tokensCount);
        }
        return false;
    }
    slicedEquals(other, sliceFromTokenIndex, sliceTokenCount) {
        if (this._text !== other._text) {
            return false;
        }
        if (this._tokensCount !== other._tokensCount) {
            return false;
        }
        const from = (sliceFromTokenIndex << 1);
        const to = from + (sliceTokenCount << 1);
        for (let i = from; i < to; i++) {
            if (this._tokens[i] !== other._tokens[i]) {
                return false;
            }
        }
        return true;
    }
    getLineContent() {
        return this._text;
    }
    getCount() {
        return this._tokensCount;
    }
    getStartOffset(tokenIndex) {
        if (tokenIndex > 0) {
            return this._tokens[(tokenIndex - 1) << 1];
        }
        return 0;
    }
    getMetadata(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return metadata;
    }
    getLanguageId(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        const languageId = _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getLanguageId(metadata);
        return this._languageIdCodec.decodeLanguageId(languageId);
    }
    getStandardTokenType(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getTokenType(metadata);
    }
    getForeground(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getForeground(metadata);
    }
    getClassName(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getClassNameFromMetadata(metadata);
    }
    getInlineStyle(tokenIndex, colorMap) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getInlineStyleFromMetadata(metadata, colorMap);
    }
    getPresentation(tokenIndex) {
        const metadata = this._tokens[(tokenIndex << 1) + 1];
        return _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenMetadata */ .N.getPresentationFromMetadata(metadata);
    }
    getEndOffset(tokenIndex) {
        return this._tokens[tokenIndex << 1];
    }
    /**
     * Find the token containing offset `offset`.
     * @param offset The search offset
     * @return The index of the token containing the offset.
     */
    findTokenIndexAtOffset(offset) {
        return LineTokens.findIndexInTokensArray(this._tokens, offset);
    }
    inflate() {
        return this;
    }
    sliceAndInflate(startOffset, endOffset, deltaOffset) {
        return new SliceLineTokens(this, startOffset, endOffset, deltaOffset);
    }
    static convertToEndOffset(tokens, lineTextLength) {
        const tokenCount = (tokens.length >>> 1);
        const lastTokenIndex = tokenCount - 1;
        for (let tokenIndex = 0; tokenIndex < lastTokenIndex; tokenIndex++) {
            tokens[tokenIndex << 1] = tokens[(tokenIndex + 1) << 1];
        }
        tokens[lastTokenIndex << 1] = lineTextLength;
    }
    static findIndexInTokensArray(tokens, desiredIndex) {
        if (tokens.length <= 2) {
            return 0;
        }
        let low = 0;
        let high = (tokens.length >>> 1) - 1;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            const endOffset = tokens[(mid << 1)];
            if (endOffset === desiredIndex) {
                return mid + 1;
            }
            else if (endOffset < desiredIndex) {
                low = mid + 1;
            }
            else if (endOffset > desiredIndex) {
                high = mid;
            }
        }
        return low;
    }
    /**
     * @pure
     * @param insertTokens Must be sorted by offset.
    */
    withInserted(insertTokens) {
        if (insertTokens.length === 0) {
            return this;
        }
        let nextOriginalTokenIdx = 0;
        let nextInsertTokenIdx = 0;
        let text = '';
        const newTokens = new Array();
        let originalEndOffset = 0;
        while (true) {
            const nextOriginalTokenEndOffset = nextOriginalTokenIdx < this._tokensCount ? this._tokens[nextOriginalTokenIdx << 1] : -1;
            const nextInsertToken = nextInsertTokenIdx < insertTokens.length ? insertTokens[nextInsertTokenIdx] : null;
            if (nextOriginalTokenEndOffset !== -1 && (nextInsertToken === null || nextOriginalTokenEndOffset <= nextInsertToken.offset)) {
                // original token ends before next insert token
                text += this._text.substring(originalEndOffset, nextOriginalTokenEndOffset);
                const metadata = this._tokens[(nextOriginalTokenIdx << 1) + 1];
                newTokens.push(text.length, metadata);
                nextOriginalTokenIdx++;
                originalEndOffset = nextOriginalTokenEndOffset;
            }
            else if (nextInsertToken) {
                if (nextInsertToken.offset > originalEndOffset) {
                    // insert token is in the middle of the next token.
                    text += this._text.substring(originalEndOffset, nextInsertToken.offset);
                    const metadata = this._tokens[(nextOriginalTokenIdx << 1) + 1];
                    newTokens.push(text.length, metadata);
                    originalEndOffset = nextInsertToken.offset;
                }
                text += nextInsertToken.text;
                newTokens.push(text.length, nextInsertToken.tokenMetadata);
                nextInsertTokenIdx++;
            }
            else {
                break;
            }
        }
        return new LineTokens(new Uint32Array(newTokens), text, this._languageIdCodec);
    }
}
LineTokens.defaultTokenMetadata = ((0 /* FontStyle.None */ << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
    | (1 /* ColorId.DefaultForeground */ << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
    | (2 /* ColorId.DefaultBackground */ << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
class SliceLineTokens {
    constructor(source, startOffset, endOffset, deltaOffset) {
        this._source = source;
        this._startOffset = startOffset;
        this._endOffset = endOffset;
        this._deltaOffset = deltaOffset;
        this._firstTokenIndex = source.findTokenIndexAtOffset(startOffset);
        this._tokensCount = 0;
        for (let i = this._firstTokenIndex, len = source.getCount(); i < len; i++) {
            const tokenStartOffset = source.getStartOffset(i);
            if (tokenStartOffset >= endOffset) {
                break;
            }
            this._tokensCount++;
        }
    }
    getMetadata(tokenIndex) {
        return this._source.getMetadata(this._firstTokenIndex + tokenIndex);
    }
    getLanguageId(tokenIndex) {
        return this._source.getLanguageId(this._firstTokenIndex + tokenIndex);
    }
    getLineContent() {
        return this._source.getLineContent().substring(this._startOffset, this._endOffset);
    }
    equals(other) {
        if (other instanceof SliceLineTokens) {
            return (this._startOffset === other._startOffset
                && this._endOffset === other._endOffset
                && this._deltaOffset === other._deltaOffset
                && this._source.slicedEquals(other._source, this._firstTokenIndex, this._tokensCount));
        }
        return false;
    }
    getCount() {
        return this._tokensCount;
    }
    getForeground(tokenIndex) {
        return this._source.getForeground(this._firstTokenIndex + tokenIndex);
    }
    getEndOffset(tokenIndex) {
        const tokenEndOffset = this._source.getEndOffset(this._firstTokenIndex + tokenIndex);
        return Math.min(this._endOffset, tokenEndOffset) - this._startOffset + this._deltaOffset;
    }
    getClassName(tokenIndex) {
        return this._source.getClassName(this._firstTokenIndex + tokenIndex);
    }
    getInlineStyle(tokenIndex, colorMap) {
        return this._source.getInlineStyle(this._firstTokenIndex + tokenIndex, colorMap);
    }
    getPresentation(tokenIndex) {
        return this._source.getPresentation(this._firstTokenIndex + tokenIndex);
    }
    findTokenIndexAtOffset(offset) {
        return this._source.findTokenIndexAtOffset(offset + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
    }
}


/***/ }),

/***/ 59794:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ SparseMultilineTokens; }
/* harmony export */ });
/* unused harmony export SparseLineTokens */
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/* harmony import */ var _core_eolCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25099);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * Represents sparse tokens over a contiguous range of lines.
 */
class SparseMultilineTokens {
    static create(startLineNumber, tokens) {
        return new SparseMultilineTokens(startLineNumber, new SparseMultilineTokensStorage(tokens));
    }
    /**
     * (Inclusive) start line number for these tokens.
     */
    get startLineNumber() {
        return this._startLineNumber;
    }
    /**
     * (Inclusive) end line number for these tokens.
     */
    get endLineNumber() {
        return this._endLineNumber;
    }
    constructor(startLineNumber, tokens) {
        this._startLineNumber = startLineNumber;
        this._tokens = tokens;
        this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    toString() {
        return this._tokens.toString(this._startLineNumber);
    }
    _updateEndLineNumber() {
        this._endLineNumber = this._startLineNumber + this._tokens.getMaxDeltaLine();
    }
    isEmpty() {
        return this._tokens.isEmpty();
    }
    getLineTokens(lineNumber) {
        if (this._startLineNumber <= lineNumber && lineNumber <= this._endLineNumber) {
            return this._tokens.getLineTokens(lineNumber - this._startLineNumber);
        }
        return null;
    }
    getRange() {
        const deltaRange = this._tokens.getRange();
        if (!deltaRange) {
            return deltaRange;
        }
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(this._startLineNumber + deltaRange.startLineNumber, deltaRange.startColumn, this._startLineNumber + deltaRange.endLineNumber, deltaRange.endColumn);
    }
    removeTokens(range) {
        const startLineIndex = range.startLineNumber - this._startLineNumber;
        const endLineIndex = range.endLineNumber - this._startLineNumber;
        this._startLineNumber += this._tokens.removeTokens(startLineIndex, range.startColumn - 1, endLineIndex, range.endColumn - 1);
        this._updateEndLineNumber();
    }
    split(range) {
        // split tokens to two:
        // a) all the tokens before `range`
        // b) all the tokens after `range`
        const startLineIndex = range.startLineNumber - this._startLineNumber;
        const endLineIndex = range.endLineNumber - this._startLineNumber;
        const [a, b, bDeltaLine] = this._tokens.split(startLineIndex, range.startColumn - 1, endLineIndex, range.endColumn - 1);
        return [new SparseMultilineTokens(this._startLineNumber, a), new SparseMultilineTokens(this._startLineNumber + bDeltaLine, b)];
    }
    applyEdit(range, text) {
        const [eolCount, firstLineLength, lastLineLength] = (0,_core_eolCounter_js__WEBPACK_IMPORTED_MODULE_1__/* .countEOL */ .Q)(text);
        this.acceptEdit(range, eolCount, firstLineLength, lastLineLength, text.length > 0 ? text.charCodeAt(0) : 0 /* CharCode.Null */);
    }
    acceptEdit(range, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        this._acceptDeleteRange(range);
        this._acceptInsertText(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(range.startLineNumber, range.startColumn), eolCount, firstLineLength, lastLineLength, firstCharCode);
        this._updateEndLineNumber();
    }
    _acceptDeleteRange(range) {
        if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
            // Nothing to delete
            return;
        }
        const firstLineIndex = range.startLineNumber - this._startLineNumber;
        const lastLineIndex = range.endLineNumber - this._startLineNumber;
        if (lastLineIndex < 0) {
            // this deletion occurs entirely before this block, so we only need to adjust line numbers
            const deletedLinesCount = lastLineIndex - firstLineIndex;
            this._startLineNumber -= deletedLinesCount;
            return;
        }
        const tokenMaxDeltaLine = this._tokens.getMaxDeltaLine();
        if (firstLineIndex >= tokenMaxDeltaLine + 1) {
            // this deletion occurs entirely after this block, so there is nothing to do
            return;
        }
        if (firstLineIndex < 0 && lastLineIndex >= tokenMaxDeltaLine + 1) {
            // this deletion completely encompasses this block
            this._startLineNumber = 0;
            this._tokens.clear();
            return;
        }
        if (firstLineIndex < 0) {
            const deletedBefore = -firstLineIndex;
            this._startLineNumber -= deletedBefore;
            this._tokens.acceptDeleteRange(range.startColumn - 1, 0, 0, lastLineIndex, range.endColumn - 1);
        }
        else {
            this._tokens.acceptDeleteRange(0, firstLineIndex, range.startColumn - 1, lastLineIndex, range.endColumn - 1);
        }
    }
    _acceptInsertText(position, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        if (eolCount === 0 && firstLineLength === 0) {
            // Nothing to insert
            return;
        }
        const lineIndex = position.lineNumber - this._startLineNumber;
        if (lineIndex < 0) {
            // this insertion occurs before this block, so we only need to adjust line numbers
            this._startLineNumber += eolCount;
            return;
        }
        const tokenMaxDeltaLine = this._tokens.getMaxDeltaLine();
        if (lineIndex >= tokenMaxDeltaLine + 1) {
            // this insertion occurs after this block, so there is nothing to do
            return;
        }
        this._tokens.acceptInsertText(lineIndex, position.column - 1, eolCount, firstLineLength, lastLineLength, firstCharCode);
    }
}
class SparseMultilineTokensStorage {
    constructor(tokens) {
        this._tokens = tokens;
        this._tokenCount = tokens.length / 4;
    }
    toString(startLineNumber) {
        const pieces = [];
        for (let i = 0; i < this._tokenCount; i++) {
            pieces.push(`(${this._getDeltaLine(i) + startLineNumber},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
        }
        return `[${pieces.join(',')}]`;
    }
    getMaxDeltaLine() {
        const tokenCount = this._getTokenCount();
        if (tokenCount === 0) {
            return -1;
        }
        return this._getDeltaLine(tokenCount - 1);
    }
    getRange() {
        const tokenCount = this._getTokenCount();
        if (tokenCount === 0) {
            return null;
        }
        const startChar = this._getStartCharacter(0);
        const maxDeltaLine = this._getDeltaLine(tokenCount - 1);
        const endChar = this._getEndCharacter(tokenCount - 1);
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(0, startChar + 1, maxDeltaLine, endChar + 1);
    }
    _getTokenCount() {
        return this._tokenCount;
    }
    _getDeltaLine(tokenIndex) {
        return this._tokens[4 * tokenIndex];
    }
    _getStartCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 1];
    }
    _getEndCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 2];
    }
    isEmpty() {
        return (this._getTokenCount() === 0);
    }
    getLineTokens(deltaLine) {
        let low = 0;
        let high = this._getTokenCount() - 1;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            const midDeltaLine = this._getDeltaLine(mid);
            if (midDeltaLine < deltaLine) {
                low = mid + 1;
            }
            else if (midDeltaLine > deltaLine) {
                high = mid - 1;
            }
            else {
                let min = mid;
                while (min > low && this._getDeltaLine(min - 1) === deltaLine) {
                    min--;
                }
                let max = mid;
                while (max < high && this._getDeltaLine(max + 1) === deltaLine) {
                    max++;
                }
                return new SparseLineTokens(this._tokens.subarray(4 * min, 4 * max + 4));
            }
        }
        if (this._getDeltaLine(low) === deltaLine) {
            return new SparseLineTokens(this._tokens.subarray(4 * low, 4 * low + 4));
        }
        return null;
    }
    clear() {
        this._tokenCount = 0;
    }
    removeTokens(startDeltaLine, startChar, endDeltaLine, endChar) {
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        let newTokenCount = 0;
        let hasDeletedTokens = false;
        let firstDeltaLine = 0;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            const tokenDeltaLine = tokens[srcOffset];
            const tokenStartCharacter = tokens[srcOffset + 1];
            const tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if ((tokenDeltaLine > startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter >= startChar))
                && (tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter <= endChar))) {
                hasDeletedTokens = true;
            }
            else {
                if (newTokenCount === 0) {
                    firstDeltaLine = tokenDeltaLine;
                }
                if (hasDeletedTokens) {
                    // must move the token to the left
                    const destOffset = 4 * newTokenCount;
                    tokens[destOffset] = tokenDeltaLine - firstDeltaLine;
                    tokens[destOffset + 1] = tokenStartCharacter;
                    tokens[destOffset + 2] = tokenEndCharacter;
                    tokens[destOffset + 3] = tokenMetadata;
                }
                newTokenCount++;
            }
        }
        this._tokenCount = newTokenCount;
        return firstDeltaLine;
    }
    split(startDeltaLine, startChar, endDeltaLine, endChar) {
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        const aTokens = [];
        const bTokens = [];
        let destTokens = aTokens;
        let destOffset = 0;
        let destFirstDeltaLine = 0;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            const tokenDeltaLine = tokens[srcOffset];
            const tokenStartCharacter = tokens[srcOffset + 1];
            const tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if ((tokenDeltaLine > startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter >= startChar))) {
                if ((tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter <= endChar))) {
                    // this token is touching the range
                    continue;
                }
                else {
                    // this token is after the range
                    if (destTokens !== bTokens) {
                        // this token is the first token after the range
                        destTokens = bTokens;
                        destOffset = 0;
                        destFirstDeltaLine = tokenDeltaLine;
                    }
                }
            }
            destTokens[destOffset++] = tokenDeltaLine - destFirstDeltaLine;
            destTokens[destOffset++] = tokenStartCharacter;
            destTokens[destOffset++] = tokenEndCharacter;
            destTokens[destOffset++] = tokenMetadata;
        }
        return [new SparseMultilineTokensStorage(new Uint32Array(aTokens)), new SparseMultilineTokensStorage(new Uint32Array(bTokens)), destFirstDeltaLine];
    }
    acceptDeleteRange(horizontalShiftForFirstLineTokens, startDeltaLine, startCharacter, endDeltaLine, endCharacter) {
        // This is a bit complex, here are the cases I used to think about this:
        //
        // 1. The token starts before the deletion range
        // 1a. The token is completely before the deletion range
        //               -----------
        //                          xxxxxxxxxxx
        // 1b. The token starts before, the deletion range ends after the token
        //               -----------
        //                      xxxxxxxxxxx
        // 1c. The token starts before, the deletion range ends precisely with the token
        //               ---------------
        //                      xxxxxxxx
        // 1d. The token starts before, the deletion range is inside the token
        //               ---------------
        //                    xxxxx
        //
        // 2. The token starts at the same position with the deletion range
        // 2a. The token starts at the same position, and ends inside the deletion range
        //               -------
        //               xxxxxxxxxxx
        // 2b. The token starts at the same position, and ends at the same position as the deletion range
        //               ----------
        //               xxxxxxxxxx
        // 2c. The token starts at the same position, and ends after the deletion range
        //               -------------
        //               xxxxxxx
        //
        // 3. The token starts inside the deletion range
        // 3a. The token is inside the deletion range
        //                -------
        //             xxxxxxxxxxxxx
        // 3b. The token starts inside the deletion range, and ends at the same position as the deletion range
        //                ----------
        //             xxxxxxxxxxxxx
        // 3c. The token starts inside the deletion range, and ends after the deletion range
        //                ------------
        //             xxxxxxxxxxx
        //
        // 4. The token starts after the deletion range
        //                  -----------
        //          xxxxxxxx
        //
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        const deletedLineCount = (endDeltaLine - startDeltaLine);
        let newTokenCount = 0;
        let hasDeletedTokens = false;
        for (let i = 0; i < tokenCount; i++) {
            const srcOffset = 4 * i;
            let tokenDeltaLine = tokens[srcOffset];
            let tokenStartCharacter = tokens[srcOffset + 1];
            let tokenEndCharacter = tokens[srcOffset + 2];
            const tokenMetadata = tokens[srcOffset + 3];
            if (tokenDeltaLine < startDeltaLine || (tokenDeltaLine === startDeltaLine && tokenEndCharacter <= startCharacter)) {
                // 1a. The token is completely before the deletion range
                // => nothing to do
                newTokenCount++;
                continue;
            }
            else if (tokenDeltaLine === startDeltaLine && tokenStartCharacter < startCharacter) {
                // 1b, 1c, 1d
                // => the token survives, but it needs to shrink
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 1d. The token starts before, the deletion range is inside the token
                    // => the token shrinks by the deletion character count
                    tokenEndCharacter -= (endCharacter - startCharacter);
                }
                else {
                    // 1b. The token starts before, the deletion range ends after the token
                    // 1c. The token starts before, the deletion range ends precisely with the token
                    // => the token shrinks its ending to the deletion start
                    tokenEndCharacter = startCharacter;
                }
            }
            else if (tokenDeltaLine === startDeltaLine && tokenStartCharacter === startCharacter) {
                // 2a, 2b, 2c
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 2c. The token starts at the same position, and ends after the deletion range
                    // => the token shrinks by the deletion character count
                    tokenEndCharacter -= (endCharacter - startCharacter);
                }
                else {
                    // 2a. The token starts at the same position, and ends inside the deletion range
                    // 2b. The token starts at the same position, and ends at the same position as the deletion range
                    // => the token is deleted
                    hasDeletedTokens = true;
                    continue;
                }
            }
            else if (tokenDeltaLine < endDeltaLine || (tokenDeltaLine === endDeltaLine && tokenStartCharacter < endCharacter)) {
                // 3a, 3b, 3c
                if (tokenDeltaLine === endDeltaLine && tokenEndCharacter > endCharacter) {
                    // 3c. The token starts inside the deletion range, and ends after the deletion range
                    // => the token moves to continue right after the deletion
                    tokenDeltaLine = startDeltaLine;
                    tokenStartCharacter = startCharacter;
                    tokenEndCharacter = tokenStartCharacter + (tokenEndCharacter - endCharacter);
                }
                else {
                    // 3a. The token is inside the deletion range
                    // 3b. The token starts inside the deletion range, and ends at the same position as the deletion range
                    // => the token is deleted
                    hasDeletedTokens = true;
                    continue;
                }
            }
            else if (tokenDeltaLine > endDeltaLine) {
                // 4. (partial) The token starts after the deletion range, on a line below...
                if (deletedLineCount === 0 && !hasDeletedTokens) {
                    // early stop, there is no need to walk all the tokens and do nothing...
                    newTokenCount = tokenCount;
                    break;
                }
                tokenDeltaLine -= deletedLineCount;
            }
            else if (tokenDeltaLine === endDeltaLine && tokenStartCharacter >= endCharacter) {
                // 4. (continued) The token starts after the deletion range, on the last line where a deletion occurs
                if (horizontalShiftForFirstLineTokens && tokenDeltaLine === 0) {
                    tokenStartCharacter += horizontalShiftForFirstLineTokens;
                    tokenEndCharacter += horizontalShiftForFirstLineTokens;
                }
                tokenDeltaLine -= deletedLineCount;
                tokenStartCharacter -= (endCharacter - startCharacter);
                tokenEndCharacter -= (endCharacter - startCharacter);
            }
            else {
                throw new Error(`Not possible!`);
            }
            const destOffset = 4 * newTokenCount;
            tokens[destOffset] = tokenDeltaLine;
            tokens[destOffset + 1] = tokenStartCharacter;
            tokens[destOffset + 2] = tokenEndCharacter;
            tokens[destOffset + 3] = tokenMetadata;
            newTokenCount++;
        }
        this._tokenCount = newTokenCount;
    }
    acceptInsertText(deltaLine, character, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        // Here are the cases I used to think about this:
        //
        // 1. The token is completely before the insertion point
        //            -----------   |
        // 2. The token ends precisely at the insertion point
        //            -----------|
        // 3. The token contains the insertion point
        //            -----|------
        // 4. The token starts precisely at the insertion point
        //            |-----------
        // 5. The token is completely after the insertion point
        //            |   -----------
        //
        const isInsertingPreciselyOneWordCharacter = (eolCount === 0
            && firstLineLength === 1
            && ((firstCharCode >= 48 /* CharCode.Digit0 */ && firstCharCode <= 57 /* CharCode.Digit9 */)
                || (firstCharCode >= 65 /* CharCode.A */ && firstCharCode <= 90 /* CharCode.Z */)
                || (firstCharCode >= 97 /* CharCode.a */ && firstCharCode <= 122 /* CharCode.z */)));
        const tokens = this._tokens;
        const tokenCount = this._tokenCount;
        for (let i = 0; i < tokenCount; i++) {
            const offset = 4 * i;
            let tokenDeltaLine = tokens[offset];
            let tokenStartCharacter = tokens[offset + 1];
            let tokenEndCharacter = tokens[offset + 2];
            if (tokenDeltaLine < deltaLine || (tokenDeltaLine === deltaLine && tokenEndCharacter < character)) {
                // 1. The token is completely before the insertion point
                // => nothing to do
                continue;
            }
            else if (tokenDeltaLine === deltaLine && tokenEndCharacter === character) {
                // 2. The token ends precisely at the insertion point
                // => expand the end character only if inserting precisely one character that is a word character
                if (isInsertingPreciselyOneWordCharacter) {
                    tokenEndCharacter += 1;
                }
                else {
                    continue;
                }
            }
            else if (tokenDeltaLine === deltaLine && tokenStartCharacter < character && character < tokenEndCharacter) {
                // 3. The token contains the insertion point
                if (eolCount === 0) {
                    // => just expand the end character
                    tokenEndCharacter += firstLineLength;
                }
                else {
                    // => cut off the token
                    tokenEndCharacter = character;
                }
            }
            else {
                // 4. or 5.
                if (tokenDeltaLine === deltaLine && tokenStartCharacter === character) {
                    // 4. The token starts precisely at the insertion point
                    // => grow the token (by keeping its start constant) only if inserting precisely one character that is a word character
                    // => otherwise behave as in case 5.
                    if (isInsertingPreciselyOneWordCharacter) {
                        continue;
                    }
                }
                // => the token must move and keep its size constant
                if (tokenDeltaLine === deltaLine) {
                    tokenDeltaLine += eolCount;
                    // this token is on the line where the insertion is taking place
                    if (eolCount === 0) {
                        tokenStartCharacter += firstLineLength;
                        tokenEndCharacter += firstLineLength;
                    }
                    else {
                        const tokenLength = tokenEndCharacter - tokenStartCharacter;
                        tokenStartCharacter = lastLineLength + (tokenStartCharacter - character);
                        tokenEndCharacter = tokenStartCharacter + tokenLength;
                    }
                }
                else {
                    tokenDeltaLine += eolCount;
                }
            }
            tokens[offset] = tokenDeltaLine;
            tokens[offset + 1] = tokenStartCharacter;
            tokens[offset + 2] = tokenEndCharacter;
        }
    }
}
class SparseLineTokens {
    constructor(tokens) {
        this._tokens = tokens;
    }
    getCount() {
        return this._tokens.length / 4;
    }
    getStartCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 1];
    }
    getEndCharacter(tokenIndex) {
        return this._tokens[4 * tokenIndex + 2];
    }
    getMetadata(tokenIndex) {
        return this._tokens[4 * tokenIndex + 3];
    }
}


/***/ }),

/***/ 6117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ SparseTokensStore; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _lineTokens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15792);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Represents sparse tokens in a text model.
 */
class SparseTokensStore {
    constructor(languageIdCodec) {
        this._pieces = [];
        this._isComplete = false;
        this._languageIdCodec = languageIdCodec;
    }
    flush() {
        this._pieces = [];
        this._isComplete = false;
    }
    isEmpty() {
        return (this._pieces.length === 0);
    }
    set(pieces, isComplete) {
        this._pieces = pieces || [];
        this._isComplete = isComplete;
    }
    setPartial(_range, pieces) {
        // console.log(`setPartial ${_range} ${pieces.map(p => p.toString()).join(', ')}`);
        let range = _range;
        if (pieces.length > 0) {
            const _firstRange = pieces[0].getRange();
            const _lastRange = pieces[pieces.length - 1].getRange();
            if (!_firstRange || !_lastRange) {
                return _range;
            }
            range = _range.plusRange(_firstRange).plusRange(_lastRange);
        }
        let insertPosition = null;
        for (let i = 0, len = this._pieces.length; i < len; i++) {
            const piece = this._pieces[i];
            if (piece.endLineNumber < range.startLineNumber) {
                // this piece is before the range
                continue;
            }
            if (piece.startLineNumber > range.endLineNumber) {
                // this piece is after the range, so mark the spot before this piece
                // as a good insertion position and stop looping
                insertPosition = insertPosition || { index: i };
                break;
            }
            // this piece might intersect with the range
            piece.removeTokens(range);
            if (piece.isEmpty()) {
                // remove the piece if it became empty
                this._pieces.splice(i, 1);
                i--;
                len--;
                continue;
            }
            if (piece.endLineNumber < range.startLineNumber) {
                // after removal, this piece is before the range
                continue;
            }
            if (piece.startLineNumber > range.endLineNumber) {
                // after removal, this piece is after the range
                insertPosition = insertPosition || { index: i };
                continue;
            }
            // after removal, this piece contains the range
            const [a, b] = piece.split(range);
            if (a.isEmpty()) {
                // this piece is actually after the range
                insertPosition = insertPosition || { index: i };
                continue;
            }
            if (b.isEmpty()) {
                // this piece is actually before the range
                continue;
            }
            this._pieces.splice(i, 1, a, b);
            i++;
            len++;
            insertPosition = insertPosition || { index: i };
        }
        insertPosition = insertPosition || { index: this._pieces.length };
        if (pieces.length > 0) {
            this._pieces = _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .arrayInsert */ .Zv(this._pieces, insertPosition.index, pieces);
        }
        // console.log(`I HAVE ${this._pieces.length} pieces`);
        // console.log(`${this._pieces.map(p => p.toString()).join('\n')}`);
        return range;
    }
    isComplete() {
        return this._isComplete;
    }
    addSparseTokens(lineNumber, aTokens) {
        if (aTokens.getLineContent().length === 0) {
            // Don't do anything for empty lines
            return aTokens;
        }
        const pieces = this._pieces;
        if (pieces.length === 0) {
            return aTokens;
        }
        const pieceIndex = SparseTokensStore._findFirstPieceWithLine(pieces, lineNumber);
        const bTokens = pieces[pieceIndex].getLineTokens(lineNumber);
        if (!bTokens) {
            return aTokens;
        }
        const aLen = aTokens.getCount();
        const bLen = bTokens.getCount();
        let aIndex = 0;
        const result = [];
        let resultLen = 0;
        let lastEndOffset = 0;
        const emitToken = (endOffset, metadata) => {
            if (endOffset === lastEndOffset) {
                return;
            }
            lastEndOffset = endOffset;
            result[resultLen++] = endOffset;
            result[resultLen++] = metadata;
        };
        for (let bIndex = 0; bIndex < bLen; bIndex++) {
            const bStartCharacter = bTokens.getStartCharacter(bIndex);
            const bEndCharacter = bTokens.getEndCharacter(bIndex);
            const bMetadata = bTokens.getMetadata(bIndex);
            const bMask = (((bMetadata & 1 /* MetadataConsts.SEMANTIC_USE_ITALIC */) ? 2048 /* MetadataConsts.ITALIC_MASK */ : 0)
                | ((bMetadata & 2 /* MetadataConsts.SEMANTIC_USE_BOLD */) ? 4096 /* MetadataConsts.BOLD_MASK */ : 0)
                | ((bMetadata & 4 /* MetadataConsts.SEMANTIC_USE_UNDERLINE */) ? 8192 /* MetadataConsts.UNDERLINE_MASK */ : 0)
                | ((bMetadata & 8 /* MetadataConsts.SEMANTIC_USE_STRIKETHROUGH */) ? 16384 /* MetadataConsts.STRIKETHROUGH_MASK */ : 0)
                | ((bMetadata & 16 /* MetadataConsts.SEMANTIC_USE_FOREGROUND */) ? 16744448 /* MetadataConsts.FOREGROUND_MASK */ : 0)
                | ((bMetadata & 32 /* MetadataConsts.SEMANTIC_USE_BACKGROUND */) ? 4278190080 /* MetadataConsts.BACKGROUND_MASK */ : 0)) >>> 0;
            const aMask = (~bMask) >>> 0;
            // push any token from `a` that is before `b`
            while (aIndex < aLen && aTokens.getEndOffset(aIndex) <= bStartCharacter) {
                emitToken(aTokens.getEndOffset(aIndex), aTokens.getMetadata(aIndex));
                aIndex++;
            }
            // push the token from `a` if it intersects the token from `b`
            if (aIndex < aLen && aTokens.getStartOffset(aIndex) < bStartCharacter) {
                emitToken(bStartCharacter, aTokens.getMetadata(aIndex));
            }
            // skip any tokens from `a` that are contained inside `b`
            while (aIndex < aLen && aTokens.getEndOffset(aIndex) < bEndCharacter) {
                emitToken(aTokens.getEndOffset(aIndex), (aTokens.getMetadata(aIndex) & aMask) | (bMetadata & bMask));
                aIndex++;
            }
            if (aIndex < aLen) {
                emitToken(bEndCharacter, (aTokens.getMetadata(aIndex) & aMask) | (bMetadata & bMask));
                if (aTokens.getEndOffset(aIndex) === bEndCharacter) {
                    // `a` ends exactly at the same spot as `b`!
                    aIndex++;
                }
            }
            else {
                const aMergeIndex = Math.min(Math.max(0, aIndex - 1), aLen - 1);
                // push the token from `b`
                emitToken(bEndCharacter, (aTokens.getMetadata(aMergeIndex) & aMask) | (bMetadata & bMask));
            }
        }
        // push the remaining tokens from `a`
        while (aIndex < aLen) {
            emitToken(aTokens.getEndOffset(aIndex), aTokens.getMetadata(aIndex));
            aIndex++;
        }
        return new _lineTokens_js__WEBPACK_IMPORTED_MODULE_1__/* .LineTokens */ .A(new Uint32Array(result), aTokens.getLineContent(), this._languageIdCodec);
    }
    static _findFirstPieceWithLine(pieces, lineNumber) {
        let low = 0;
        let high = pieces.length - 1;
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2);
            if (pieces[mid].endLineNumber < lineNumber) {
                low = mid + 1;
            }
            else if (pieces[mid].startLineNumber > lineNumber) {
                high = mid - 1;
            }
            else {
                while (mid > low && pieces[mid - 1].startLineNumber <= lineNumber && lineNumber <= pieces[mid - 1].endLineNumber) {
                    mid--;
                }
                return mid;
            }
        }
        return low;
    }
    acceptEdit(range, eolCount, firstLineLength, lastLineLength, firstCharCode) {
        for (const piece of this._pieces) {
            piece.acceptEdit(range, eolCount, firstLineLength, lastLineLength, firstCharCode);
        }
    }
}


/***/ })

}]);