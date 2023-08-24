"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-47d52b41"],{

/***/ 63156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HT: function() { return /* binding */ StringBuilder; },
/* harmony export */   kH: function() { return /* binding */ decodeUTF16LE; },
/* harmony export */   oe: function() { return /* binding */ getPlatformTextDecoder; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48593);
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27216);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



let _utf16LE_TextDecoder;
function getUTF16LE_TextDecoder() {
    if (!_utf16LE_TextDecoder) {
        _utf16LE_TextDecoder = new TextDecoder('UTF-16LE');
    }
    return _utf16LE_TextDecoder;
}
let _utf16BE_TextDecoder;
function getUTF16BE_TextDecoder() {
    if (!_utf16BE_TextDecoder) {
        _utf16BE_TextDecoder = new TextDecoder('UTF-16BE');
    }
    return _utf16BE_TextDecoder;
}
let _platformTextDecoder;
function getPlatformTextDecoder() {
    if (!_platformTextDecoder) {
        _platformTextDecoder = _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLittleEndian */ .r() ? getUTF16LE_TextDecoder() : getUTF16BE_TextDecoder();
    }
    return _platformTextDecoder;
}
function decodeUTF16LE(source, offset, len) {
    const view = new Uint16Array(source.buffer, offset, len);
    if (len > 0 && (view[0] === 0xFEFF || view[0] === 0xFFFE)) {
        // UTF16 sometimes starts with a BOM https://de.wikipedia.org/wiki/Byte_Order_Mark
        // It looks like TextDecoder.decode will eat up a leading BOM (0xFEFF or 0xFFFE)
        // We don't want that behavior because we know the string is UTF16LE and the BOM should be maintained
        // So we use the manual decoder
        return compatDecodeUTF16LE(source, offset, len);
    }
    return getUTF16LE_TextDecoder().decode(view);
}
function compatDecodeUTF16LE(source, offset, len) {
    const result = [];
    let resultLen = 0;
    for (let i = 0; i < len; i++) {
        const charCode = _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_2__/* .readUInt16LE */ .mP(source, offset);
        offset += 2;
        result[resultLen++] = String.fromCharCode(charCode);
    }
    return result.join('');
}
class StringBuilder {
    constructor(capacity) {
        this._capacity = capacity | 0;
        this._buffer = new Uint16Array(this._capacity);
        this._completedStrings = null;
        this._bufferLength = 0;
    }
    reset() {
        this._completedStrings = null;
        this._bufferLength = 0;
    }
    build() {
        if (this._completedStrings !== null) {
            this._flushBuffer();
            return this._completedStrings.join('');
        }
        return this._buildBuffer();
    }
    _buildBuffer() {
        if (this._bufferLength === 0) {
            return '';
        }
        const view = new Uint16Array(this._buffer.buffer, 0, this._bufferLength);
        return getPlatformTextDecoder().decode(view);
    }
    _flushBuffer() {
        const bufferString = this._buildBuffer();
        this._bufferLength = 0;
        if (this._completedStrings === null) {
            this._completedStrings = [bufferString];
        }
        else {
            this._completedStrings[this._completedStrings.length] = bufferString;
        }
    }
    /**
     * Append a char code (<2^16)
     */
    appendCharCode(charCode) {
        const remainingSpace = this._capacity - this._bufferLength;
        if (remainingSpace <= 1) {
            if (remainingSpace === 0 || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCode)) {
                this._flushBuffer();
            }
        }
        this._buffer[this._bufferLength++] = charCode;
    }
    /**
     * Append an ASCII char code (<2^8)
     */
    appendASCIICharCode(charCode) {
        if (this._bufferLength === this._capacity) {
            // buffer is full
            this._flushBuffer();
        }
        this._buffer[this._bufferLength++] = charCode;
    }
    appendString(str) {
        const strLen = str.length;
        if (this._bufferLength + strLen >= this._capacity) {
            // This string does not fit in the remaining buffer space
            this._flushBuffer();
            this._completedStrings[this._completedStrings.length] = str;
            return;
        }
        for (let i = 0; i < strLen; i++) {
            this._buffer[this._bufferLength++] = str.charCodeAt(i);
        }
    }
}


/***/ }),

/***/ 98433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ compressConsecutiveTextChanges; },
/* harmony export */   q: function() { return /* binding */ TextChange; }
/* harmony export */ });
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27216);
/* harmony import */ var _stringBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63156);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function escapeNewLine(str) {
    return (str
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r'));
}
class TextChange {
    get oldLength() {
        return this.oldText.length;
    }
    get oldEnd() {
        return this.oldPosition + this.oldText.length;
    }
    get newLength() {
        return this.newText.length;
    }
    get newEnd() {
        return this.newPosition + this.newText.length;
    }
    constructor(oldPosition, oldText, newPosition, newText) {
        this.oldPosition = oldPosition;
        this.oldText = oldText;
        this.newPosition = newPosition;
        this.newText = newText;
    }
    toString() {
        if (this.oldText.length === 0) {
            return `(insert@${this.oldPosition} "${escapeNewLine(this.newText)}")`;
        }
        if (this.newText.length === 0) {
            return `(delete@${this.oldPosition} "${escapeNewLine(this.oldText)}")`;
        }
        return `(replace@${this.oldPosition} "${escapeNewLine(this.oldText)}" with "${escapeNewLine(this.newText)}")`;
    }
    static _writeStringSize(str) {
        return (4 + 2 * str.length);
    }
    static _writeString(b, str, offset) {
        const len = str.length;
        _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .writeUInt32BE */ .T4(b, len, offset);
        offset += 4;
        for (let i = 0; i < len; i++) {
            _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .writeUInt16LE */ .oq(b, str.charCodeAt(i), offset);
            offset += 2;
        }
        return offset;
    }
    static _readString(b, offset) {
        const len = _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .readUInt32BE */ .Ag(b, offset);
        offset += 4;
        return (0,_stringBuilder_js__WEBPACK_IMPORTED_MODULE_1__/* .decodeUTF16LE */ .kH)(b, offset, len);
    }
    writeSize() {
        return (+4 // oldPosition
            + 4 // newPosition
            + TextChange._writeStringSize(this.oldText)
            + TextChange._writeStringSize(this.newText));
    }
    write(b, offset) {
        _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .writeUInt32BE */ .T4(b, this.oldPosition, offset);
        offset += 4;
        _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .writeUInt32BE */ .T4(b, this.newPosition, offset);
        offset += 4;
        offset = TextChange._writeString(b, this.oldText, offset);
        offset = TextChange._writeString(b, this.newText, offset);
        return offset;
    }
    static read(b, offset, dest) {
        const oldPosition = _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .readUInt32BE */ .Ag(b, offset);
        offset += 4;
        const newPosition = _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .readUInt32BE */ .Ag(b, offset);
        offset += 4;
        const oldText = TextChange._readString(b, offset);
        offset += TextChange._writeStringSize(oldText);
        const newText = TextChange._readString(b, offset);
        offset += TextChange._writeStringSize(newText);
        dest.push(new TextChange(oldPosition, oldText, newPosition, newText));
        return offset;
    }
}
function compressConsecutiveTextChanges(prevEdits, currEdits) {
    if (prevEdits === null || prevEdits.length === 0) {
        return currEdits;
    }
    const compressor = new TextChangeCompressor(prevEdits, currEdits);
    return compressor.compress();
}
class TextChangeCompressor {
    constructor(prevEdits, currEdits) {
        this._prevEdits = prevEdits;
        this._currEdits = currEdits;
        this._result = [];
        this._resultLen = 0;
        this._prevLen = this._prevEdits.length;
        this._prevDeltaOffset = 0;
        this._currLen = this._currEdits.length;
        this._currDeltaOffset = 0;
    }
    compress() {
        let prevIndex = 0;
        let currIndex = 0;
        let prevEdit = this._getPrev(prevIndex);
        let currEdit = this._getCurr(currIndex);
        while (prevIndex < this._prevLen || currIndex < this._currLen) {
            if (prevEdit === null) {
                this._acceptCurr(currEdit);
                currEdit = this._getCurr(++currIndex);
                continue;
            }
            if (currEdit === null) {
                this._acceptPrev(prevEdit);
                prevEdit = this._getPrev(++prevIndex);
                continue;
            }
            if (currEdit.oldEnd <= prevEdit.newPosition) {
                this._acceptCurr(currEdit);
                currEdit = this._getCurr(++currIndex);
                continue;
            }
            if (prevEdit.newEnd <= currEdit.oldPosition) {
                this._acceptPrev(prevEdit);
                prevEdit = this._getPrev(++prevIndex);
                continue;
            }
            if (currEdit.oldPosition < prevEdit.newPosition) {
                const [e1, e2] = TextChangeCompressor._splitCurr(currEdit, prevEdit.newPosition - currEdit.oldPosition);
                this._acceptCurr(e1);
                currEdit = e2;
                continue;
            }
            if (prevEdit.newPosition < currEdit.oldPosition) {
                const [e1, e2] = TextChangeCompressor._splitPrev(prevEdit, currEdit.oldPosition - prevEdit.newPosition);
                this._acceptPrev(e1);
                prevEdit = e2;
                continue;
            }
            // At this point, currEdit.oldPosition === prevEdit.newPosition
            let mergePrev;
            let mergeCurr;
            if (currEdit.oldEnd === prevEdit.newEnd) {
                mergePrev = prevEdit;
                mergeCurr = currEdit;
                prevEdit = this._getPrev(++prevIndex);
                currEdit = this._getCurr(++currIndex);
            }
            else if (currEdit.oldEnd < prevEdit.newEnd) {
                const [e1, e2] = TextChangeCompressor._splitPrev(prevEdit, currEdit.oldLength);
                mergePrev = e1;
                mergeCurr = currEdit;
                prevEdit = e2;
                currEdit = this._getCurr(++currIndex);
            }
            else {
                const [e1, e2] = TextChangeCompressor._splitCurr(currEdit, prevEdit.newLength);
                mergePrev = prevEdit;
                mergeCurr = e1;
                prevEdit = this._getPrev(++prevIndex);
                currEdit = e2;
            }
            this._result[this._resultLen++] = new TextChange(mergePrev.oldPosition, mergePrev.oldText, mergeCurr.newPosition, mergeCurr.newText);
            this._prevDeltaOffset += mergePrev.newLength - mergePrev.oldLength;
            this._currDeltaOffset += mergeCurr.newLength - mergeCurr.oldLength;
        }
        const merged = TextChangeCompressor._merge(this._result);
        const cleaned = TextChangeCompressor._removeNoOps(merged);
        return cleaned;
    }
    _acceptCurr(currEdit) {
        this._result[this._resultLen++] = TextChangeCompressor._rebaseCurr(this._prevDeltaOffset, currEdit);
        this._currDeltaOffset += currEdit.newLength - currEdit.oldLength;
    }
    _getCurr(currIndex) {
        return (currIndex < this._currLen ? this._currEdits[currIndex] : null);
    }
    _acceptPrev(prevEdit) {
        this._result[this._resultLen++] = TextChangeCompressor._rebasePrev(this._currDeltaOffset, prevEdit);
        this._prevDeltaOffset += prevEdit.newLength - prevEdit.oldLength;
    }
    _getPrev(prevIndex) {
        return (prevIndex < this._prevLen ? this._prevEdits[prevIndex] : null);
    }
    static _rebaseCurr(prevDeltaOffset, currEdit) {
        return new TextChange(currEdit.oldPosition - prevDeltaOffset, currEdit.oldText, currEdit.newPosition, currEdit.newText);
    }
    static _rebasePrev(currDeltaOffset, prevEdit) {
        return new TextChange(prevEdit.oldPosition, prevEdit.oldText, prevEdit.newPosition + currDeltaOffset, prevEdit.newText);
    }
    static _splitPrev(edit, offset) {
        const preText = edit.newText.substr(0, offset);
        const postText = edit.newText.substr(offset);
        return [
            new TextChange(edit.oldPosition, edit.oldText, edit.newPosition, preText),
            new TextChange(edit.oldEnd, '', edit.newPosition + offset, postText)
        ];
    }
    static _splitCurr(edit, offset) {
        const preText = edit.oldText.substr(0, offset);
        const postText = edit.oldText.substr(offset);
        return [
            new TextChange(edit.oldPosition, preText, edit.newPosition, edit.newText),
            new TextChange(edit.oldPosition + offset, postText, edit.newEnd, '')
        ];
    }
    static _merge(edits) {
        if (edits.length === 0) {
            return edits;
        }
        const result = [];
        let resultLen = 0;
        let prev = edits[0];
        for (let i = 1; i < edits.length; i++) {
            const curr = edits[i];
            if (prev.oldEnd === curr.oldPosition) {
                // Merge into `prev`
                prev = new TextChange(prev.oldPosition, prev.oldText + curr.oldText, prev.newPosition, prev.newText + curr.newText);
            }
            else {
                result[resultLen++] = prev;
                prev = curr;
            }
        }
        result[resultLen++] = prev;
        return result;
    }
    static _removeNoOps(edits) {
        if (edits.length === 0) {
            return edits;
        }
        const result = [];
        let resultLen = 0;
        for (let i = 0; i < edits.length; i++) {
            const edit = edits[i];
            if (edit.oldText === edit.newText) {
                continue;
            }
            result[resultLen++] = edit;
        }
        return result;
    }
}


/***/ }),

/***/ 43848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ EDITOR_MODEL_DEFAULTS; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const EDITOR_MODEL_DEFAULTS = {
    tabSize: 4,
    indentSize: 4,
    insertSpaces: true,
    detectIndentation: true,
    trimAutoWhitespace: true,
    largeFileOptimizations: true,
    bracketPairColorizationOptions: {
        enabled: true,
        independentColorPoolPerBracketType: false,
    },
};


/***/ }),

/***/ 5927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ getMapForWordSeparators; }
/* harmony export */ });
/* unused harmony export WordCharacterClassifier */
/* harmony import */ var _characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71887);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class WordCharacterClassifier extends _characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__/* .CharacterClassifier */ .N {
    constructor(wordSeparators) {
        super(0 /* WordCharacterClass.Regular */);
        for (let i = 0, len = wordSeparators.length; i < len; i++) {
            this.set(wordSeparators.charCodeAt(i), 2 /* WordCharacterClass.WordSeparator */);
        }
        this.set(32 /* CharCode.Space */, 1 /* WordCharacterClass.Whitespace */);
        this.set(9 /* CharCode.Tab */, 1 /* WordCharacterClass.Whitespace */);
    }
}
function once(computeFn) {
    const cache = {}; // TODO@Alex unbounded cache
    return (input) => {
        if (!cache.hasOwnProperty(input)) {
            cache[input] = computeFn(input);
        }
        return cache[input];
    };
}
const getMapForWordSeparators = once((input) => new WordCharacterClassifier(input));


/***/ }),

/***/ 22380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Af: function() { return /* binding */ DEFAULT_WORD_REGEXP; },
/* harmony export */   eq: function() { return /* binding */ ensureValidWordDefinition; },
/* harmony export */   t2: function() { return /* binding */ getWordAtText; },
/* harmony export */   vu: function() { return /* binding */ USUAL_WORD_SEPARATORS; }
/* harmony export */ });
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25134);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29644);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const USUAL_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:\'",.<>/?';
/**
 * Create a word definition regular expression based on default word separators.
 * Optionally provide allowed separators that should be included in words.
 *
 * The default would look like this:
 * /(-?\d*\.\d\w*)|([^\`\~\!\@\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
 */
function createWordRegExp(allowInWords = '') {
    let source = '(-?\\d*\\.\\d\\w*)|([^';
    for (const sep of USUAL_WORD_SEPARATORS) {
        if (allowInWords.indexOf(sep) >= 0) {
            continue;
        }
        source += '\\' + sep;
    }
    source += '\\s]+)';
    return new RegExp(source, 'g');
}
// catches numbers (including floating numbers) in the first group, and alphanum in the second
const DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
    let result = DEFAULT_WORD_REGEXP;
    if (wordDefinition && (wordDefinition instanceof RegExp)) {
        if (!wordDefinition.global) {
            let flags = 'g';
            if (wordDefinition.ignoreCase) {
                flags += 'i';
            }
            if (wordDefinition.multiline) {
                flags += 'm';
            }
            if (wordDefinition.unicode) {
                flags += 'u';
            }
            result = new RegExp(wordDefinition.source, flags);
        }
        else {
            result = wordDefinition;
        }
    }
    result.lastIndex = 0;
    return result;
}
const _defaultConfig = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_1__/* .LinkedList */ .S();
_defaultConfig.unshift({
    maxLen: 1000,
    windowSize: 15,
    timeBudget: 150
});
function getWordAtText(column, wordDefinition, text, textOffset, config) {
    if (!config) {
        config = _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_0__/* .Iterable */ .$.first(_defaultConfig);
    }
    if (text.length > config.maxLen) {
        // don't throw strings that long at the regexp
        // but use a sub-string in which a word must occur
        let start = column - config.maxLen / 2;
        if (start < 0) {
            start = 0;
        }
        else {
            textOffset += start;
        }
        text = text.substring(start, column + config.maxLen / 2);
        return getWordAtText(column, wordDefinition, text, textOffset, config);
    }
    const t1 = Date.now();
    const pos = column - 1 - textOffset;
    let prevRegexIndex = -1;
    let match = null;
    for (let i = 1;; i++) {
        // check time budget
        if (Date.now() - t1 >= config.timeBudget) {
            break;
        }
        // reset the index at which the regexp should start matching, also know where it
        // should stop so that subsequent search don't repeat previous searches
        const regexIndex = pos - config.windowSize * i;
        wordDefinition.lastIndex = Math.max(0, regexIndex);
        const thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);
        if (!thisMatch && match) {
            // stop: we have something
            break;
        }
        match = thisMatch;
        // stop: searched at start
        if (regexIndex <= 0) {
            break;
        }
        prevRegexIndex = regexIndex;
    }
    if (match) {
        const result = {
            word: match[0],
            startColumn: textOffset + 1 + match.index,
            endColumn: textOffset + 1 + match.index + match[0].length
        };
        wordDefinition.lastIndex = 0;
        return result;
    }
    return null;
}
function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
    let match;
    while (match = wordDefinition.exec(text)) {
        const matchIndex = match.index || 0;
        if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
            return match;
        }
        else if (stopPos > 0 && matchIndex > stopPos) {
            return null;
        }
    }
    return null;
}


/***/ })

}]);