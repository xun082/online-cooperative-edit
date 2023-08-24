"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-895354f2"],{

/***/ 13761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qy: function() { return /* binding */ SimpleLineRangeMapping; },
/* harmony export */   f0: function() { return /* binding */ LineRangeMapping; },
/* harmony export */   hZ: function() { return /* binding */ LinesDiff; },
/* harmony export */   iy: function() { return /* binding */ RangeMapping; },
/* harmony export */   y0: function() { return /* binding */ MovedText; }
/* harmony export */ });
/* harmony import */ var _core_lineRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23706);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class LinesDiff {
    constructor(changes, 
    /**
     * Sorted by original line ranges.
     * The original line ranges and the modified line ranges must be disjoint (but can be touching).
     */
    moves, 
    /**
     * Indicates if the time out was reached.
     * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
     */
    hitTimeout) {
        this.changes = changes;
        this.moves = moves;
        this.hitTimeout = hitTimeout;
    }
}
/**
 * Maps a line range in the original text model to a line range in the modified text model.
 */
class LineRangeMapping {
    static inverse(mapping, originalLineCount, modifiedLineCount) {
        const result = [];
        let lastOriginalEndLineNumber = 1;
        let lastModifiedEndLineNumber = 1;
        for (const m of mapping) {
            const r = new LineRangeMapping(new _core_lineRange_js__WEBPACK_IMPORTED_MODULE_0__/* .LineRange */ .z(lastOriginalEndLineNumber, m.originalRange.startLineNumber), new _core_lineRange_js__WEBPACK_IMPORTED_MODULE_0__/* .LineRange */ .z(lastModifiedEndLineNumber, m.modifiedRange.startLineNumber), undefined);
            if (!r.modifiedRange.isEmpty) {
                result.push(r);
            }
            lastOriginalEndLineNumber = m.originalRange.endLineNumberExclusive;
            lastModifiedEndLineNumber = m.modifiedRange.endLineNumberExclusive;
        }
        const r = new LineRangeMapping(new _core_lineRange_js__WEBPACK_IMPORTED_MODULE_0__/* .LineRange */ .z(lastOriginalEndLineNumber, originalLineCount + 1), new _core_lineRange_js__WEBPACK_IMPORTED_MODULE_0__/* .LineRange */ .z(lastModifiedEndLineNumber, modifiedLineCount + 1), undefined);
        if (!r.modifiedRange.isEmpty) {
            result.push(r);
        }
        return result;
    }
    constructor(originalRange, modifiedRange, innerChanges) {
        this.originalRange = originalRange;
        this.modifiedRange = modifiedRange;
        this.innerChanges = innerChanges;
    }
    toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    get changedLineCount() {
        return Math.max(this.originalRange.length, this.modifiedRange.length);
    }
    flip() {
        var _a;
        return new LineRangeMapping(this.modifiedRange, this.originalRange, (_a = this.innerChanges) === null || _a === void 0 ? void 0 : _a.map(c => c.flip()));
    }
}
/**
 * Maps a range in the original text model to a range in the modified text model.
 */
class RangeMapping {
    constructor(originalRange, modifiedRange) {
        this.originalRange = originalRange;
        this.modifiedRange = modifiedRange;
    }
    toString() {
        return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
    }
    flip() {
        return new RangeMapping(this.modifiedRange, this.originalRange);
    }
}
// TODO@hediet: Make LineRangeMapping extend from this!
class SimpleLineRangeMapping {
    constructor(original, modified) {
        this.original = original;
        this.modified = modified;
    }
    toString() {
        return `{${this.original.toString()}->${this.modified.toString()}}`;
    }
    flip() {
        return new SimpleLineRangeMapping(this.modified, this.original);
    }
}
class MovedText {
    constructor(lineRangeMapping, changes) {
        this.lineRangeMapping = lineRangeMapping;
        this.changes = changes;
    }
    flip() {
        return new MovedText(this.lineRangeMapping.flip(), this.changes.map(c => c.flip()));
    }
}


/***/ }),

/***/ 33376:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: function() { return /* binding */ linesDiffComputers; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/diff/diff.js + 1 modules
var diff = __webpack_require__(4673);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/linesDiffComputer.js
var linesDiffComputer = __webpack_require__(13761);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/assert.js
var assert = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/lineRange.js
var lineRange = __webpack_require__(23706);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/smartLinesDiffComputer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const MINIMUM_MATCHING_CHARACTER_LENGTH = 3;
class SmartLinesDiffComputer {
    computeDiff(originalLines, modifiedLines, options) {
        var _a;
        const diffComputer = new DiffComputer(originalLines, modifiedLines, {
            maxComputationTime: options.maxComputationTimeMs,
            shouldIgnoreTrimWhitespace: options.ignoreTrimWhitespace,
            shouldComputeCharChanges: true,
            shouldMakePrettyDiff: true,
            shouldPostProcessCharChanges: true,
        });
        const result = diffComputer.computeDiff();
        const changes = [];
        let lastChange = null;
        for (const c of result.changes) {
            let originalRange;
            if (c.originalEndLineNumber === 0) {
                // Insertion
                originalRange = new lineRange/* LineRange */.z(c.originalStartLineNumber + 1, c.originalStartLineNumber + 1);
            }
            else {
                originalRange = new lineRange/* LineRange */.z(c.originalStartLineNumber, c.originalEndLineNumber + 1);
            }
            let modifiedRange;
            if (c.modifiedEndLineNumber === 0) {
                // Deletion
                modifiedRange = new lineRange/* LineRange */.z(c.modifiedStartLineNumber + 1, c.modifiedStartLineNumber + 1);
            }
            else {
                modifiedRange = new lineRange/* LineRange */.z(c.modifiedStartLineNumber, c.modifiedEndLineNumber + 1);
            }
            let change = new linesDiffComputer/* LineRangeMapping */.f0(originalRange, modifiedRange, (_a = c.charChanges) === null || _a === void 0 ? void 0 : _a.map(c => new linesDiffComputer/* RangeMapping */.iy(new range/* Range */.e(c.originalStartLineNumber, c.originalStartColumn, c.originalEndLineNumber, c.originalEndColumn), new range/* Range */.e(c.modifiedStartLineNumber, c.modifiedStartColumn, c.modifiedEndLineNumber, c.modifiedEndColumn))));
            if (lastChange) {
                if (lastChange.modifiedRange.endLineNumberExclusive === change.modifiedRange.startLineNumber
                    || lastChange.originalRange.endLineNumberExclusive === change.originalRange.startLineNumber) {
                    // join touching diffs. Probably moving diffs up/down in the algorithm causes touching diffs.
                    change = new linesDiffComputer/* LineRangeMapping */.f0(lastChange.originalRange.join(change.originalRange), lastChange.modifiedRange.join(change.modifiedRange), lastChange.innerChanges && change.innerChanges ?
                        lastChange.innerChanges.concat(change.innerChanges) : undefined);
                    changes.pop();
                }
            }
            changes.push(change);
            lastChange = change;
        }
        (0,assert/* assertFn */.eZ)(() => {
            return (0,assert/* checkAdjacentItems */.DM)(changes, (m1, m2) => m2.originalRange.startLineNumber - m1.originalRange.endLineNumberExclusive === m2.modifiedRange.startLineNumber - m1.modifiedRange.endLineNumberExclusive &&
                // There has to be an unchanged line in between (otherwise both diffs should have been joined)
                m1.originalRange.endLineNumberExclusive < m2.originalRange.startLineNumber &&
                m1.modifiedRange.endLineNumberExclusive < m2.modifiedRange.startLineNumber);
        });
        return new linesDiffComputer/* LinesDiff */.hZ(changes, [], result.quitEarly);
    }
}
function computeDiff(originalSequence, modifiedSequence, continueProcessingPredicate, pretty) {
    const diffAlgo = new diff/* LcsDiff */.Hs(originalSequence, modifiedSequence, continueProcessingPredicate);
    return diffAlgo.ComputeDiff(pretty);
}
class LineSequence {
    constructor(lines) {
        const startColumns = [];
        const endColumns = [];
        for (let i = 0, length = lines.length; i < length; i++) {
            startColumns[i] = getFirstNonBlankColumn(lines[i], 1);
            endColumns[i] = getLastNonBlankColumn(lines[i], 1);
        }
        this.lines = lines;
        this._startColumns = startColumns;
        this._endColumns = endColumns;
    }
    getElements() {
        const elements = [];
        for (let i = 0, len = this.lines.length; i < len; i++) {
            elements[i] = this.lines[i].substring(this._startColumns[i] - 1, this._endColumns[i] - 1);
        }
        return elements;
    }
    getStrictElement(index) {
        return this.lines[index];
    }
    getStartLineNumber(i) {
        return i + 1;
    }
    getEndLineNumber(i) {
        return i + 1;
    }
    createCharSequence(shouldIgnoreTrimWhitespace, startIndex, endIndex) {
        const charCodes = [];
        const lineNumbers = [];
        const columns = [];
        let len = 0;
        for (let index = startIndex; index <= endIndex; index++) {
            const lineContent = this.lines[index];
            const startColumn = (shouldIgnoreTrimWhitespace ? this._startColumns[index] : 1);
            const endColumn = (shouldIgnoreTrimWhitespace ? this._endColumns[index] : lineContent.length + 1);
            for (let col = startColumn; col < endColumn; col++) {
                charCodes[len] = lineContent.charCodeAt(col - 1);
                lineNumbers[len] = index + 1;
                columns[len] = col;
                len++;
            }
            if (!shouldIgnoreTrimWhitespace && index < endIndex) {
                // Add \n if trim whitespace is not ignored
                charCodes[len] = 10 /* CharCode.LineFeed */;
                lineNumbers[len] = index + 1;
                columns[len] = lineContent.length + 1;
                len++;
            }
        }
        return new CharSequence(charCodes, lineNumbers, columns);
    }
}
class CharSequence {
    constructor(charCodes, lineNumbers, columns) {
        this._charCodes = charCodes;
        this._lineNumbers = lineNumbers;
        this._columns = columns;
    }
    toString() {
        return ('[' + this._charCodes.map((s, idx) => (s === 10 /* CharCode.LineFeed */ ? '\\n' : String.fromCharCode(s)) + `-(${this._lineNumbers[idx]},${this._columns[idx]})`).join(', ') + ']');
    }
    _assertIndex(index, arr) {
        if (index < 0 || index >= arr.length) {
            throw new Error(`Illegal index`);
        }
    }
    getElements() {
        return this._charCodes;
    }
    getStartLineNumber(i) {
        if (i > 0 && i === this._lineNumbers.length) {
            // the start line number of the element after the last element
            // is the end line number of the last element
            return this.getEndLineNumber(i - 1);
        }
        this._assertIndex(i, this._lineNumbers);
        return this._lineNumbers[i];
    }
    getEndLineNumber(i) {
        if (i === -1) {
            // the end line number of the element before the first element
            // is the start line number of the first element
            return this.getStartLineNumber(i + 1);
        }
        this._assertIndex(i, this._lineNumbers);
        if (this._charCodes[i] === 10 /* CharCode.LineFeed */) {
            return this._lineNumbers[i] + 1;
        }
        return this._lineNumbers[i];
    }
    getStartColumn(i) {
        if (i > 0 && i === this._columns.length) {
            // the start column of the element after the last element
            // is the end column of the last element
            return this.getEndColumn(i - 1);
        }
        this._assertIndex(i, this._columns);
        return this._columns[i];
    }
    getEndColumn(i) {
        if (i === -1) {
            // the end column of the element before the first element
            // is the start column of the first element
            return this.getStartColumn(i + 1);
        }
        this._assertIndex(i, this._columns);
        if (this._charCodes[i] === 10 /* CharCode.LineFeed */) {
            return 1;
        }
        return this._columns[i] + 1;
    }
}
class CharChange {
    constructor(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalStartColumn = originalStartColumn;
        this.originalEndLineNumber = originalEndLineNumber;
        this.originalEndColumn = originalEndColumn;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedStartColumn = modifiedStartColumn;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.modifiedEndColumn = modifiedEndColumn;
    }
    static createFromDiffChange(diffChange, originalCharSequence, modifiedCharSequence) {
        const originalStartLineNumber = originalCharSequence.getStartLineNumber(diffChange.originalStart);
        const originalStartColumn = originalCharSequence.getStartColumn(diffChange.originalStart);
        const originalEndLineNumber = originalCharSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        const originalEndColumn = originalCharSequence.getEndColumn(diffChange.originalStart + diffChange.originalLength - 1);
        const modifiedStartLineNumber = modifiedCharSequence.getStartLineNumber(diffChange.modifiedStart);
        const modifiedStartColumn = modifiedCharSequence.getStartColumn(diffChange.modifiedStart);
        const modifiedEndLineNumber = modifiedCharSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        const modifiedEndColumn = modifiedCharSequence.getEndColumn(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        return new CharChange(originalStartLineNumber, originalStartColumn, originalEndLineNumber, originalEndColumn, modifiedStartLineNumber, modifiedStartColumn, modifiedEndLineNumber, modifiedEndColumn);
    }
}
function postProcessCharChanges(rawChanges) {
    if (rawChanges.length <= 1) {
        return rawChanges;
    }
    const result = [rawChanges[0]];
    let prevChange = result[0];
    for (let i = 1, len = rawChanges.length; i < len; i++) {
        const currChange = rawChanges[i];
        const originalMatchingLength = currChange.originalStart - (prevChange.originalStart + prevChange.originalLength);
        const modifiedMatchingLength = currChange.modifiedStart - (prevChange.modifiedStart + prevChange.modifiedLength);
        // Both of the above should be equal, but the continueProcessingPredicate may prevent this from being true
        const matchingLength = Math.min(originalMatchingLength, modifiedMatchingLength);
        if (matchingLength < MINIMUM_MATCHING_CHARACTER_LENGTH) {
            // Merge the current change into the previous one
            prevChange.originalLength = (currChange.originalStart + currChange.originalLength) - prevChange.originalStart;
            prevChange.modifiedLength = (currChange.modifiedStart + currChange.modifiedLength) - prevChange.modifiedStart;
        }
        else {
            // Add the current change
            result.push(currChange);
            prevChange = currChange;
        }
    }
    return result;
}
class LineChange {
    constructor(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges) {
        this.originalStartLineNumber = originalStartLineNumber;
        this.originalEndLineNumber = originalEndLineNumber;
        this.modifiedStartLineNumber = modifiedStartLineNumber;
        this.modifiedEndLineNumber = modifiedEndLineNumber;
        this.charChanges = charChanges;
    }
    static createFromDiffResult(shouldIgnoreTrimWhitespace, diffChange, originalLineSequence, modifiedLineSequence, continueCharDiff, shouldComputeCharChanges, shouldPostProcessCharChanges) {
        let originalStartLineNumber;
        let originalEndLineNumber;
        let modifiedStartLineNumber;
        let modifiedEndLineNumber;
        let charChanges = undefined;
        if (diffChange.originalLength === 0) {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart) - 1;
            originalEndLineNumber = 0;
        }
        else {
            originalStartLineNumber = originalLineSequence.getStartLineNumber(diffChange.originalStart);
            originalEndLineNumber = originalLineSequence.getEndLineNumber(diffChange.originalStart + diffChange.originalLength - 1);
        }
        if (diffChange.modifiedLength === 0) {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart) - 1;
            modifiedEndLineNumber = 0;
        }
        else {
            modifiedStartLineNumber = modifiedLineSequence.getStartLineNumber(diffChange.modifiedStart);
            modifiedEndLineNumber = modifiedLineSequence.getEndLineNumber(diffChange.modifiedStart + diffChange.modifiedLength - 1);
        }
        if (shouldComputeCharChanges && diffChange.originalLength > 0 && diffChange.originalLength < 20 && diffChange.modifiedLength > 0 && diffChange.modifiedLength < 20 && continueCharDiff()) {
            // Compute character changes for diff chunks of at most 20 lines...
            const originalCharSequence = originalLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.originalStart, diffChange.originalStart + diffChange.originalLength - 1);
            const modifiedCharSequence = modifiedLineSequence.createCharSequence(shouldIgnoreTrimWhitespace, diffChange.modifiedStart, diffChange.modifiedStart + diffChange.modifiedLength - 1);
            if (originalCharSequence.getElements().length > 0 && modifiedCharSequence.getElements().length > 0) {
                let rawChanges = computeDiff(originalCharSequence, modifiedCharSequence, continueCharDiff, true).changes;
                if (shouldPostProcessCharChanges) {
                    rawChanges = postProcessCharChanges(rawChanges);
                }
                charChanges = [];
                for (let i = 0, length = rawChanges.length; i < length; i++) {
                    charChanges.push(CharChange.createFromDiffChange(rawChanges[i], originalCharSequence, modifiedCharSequence));
                }
            }
        }
        return new LineChange(originalStartLineNumber, originalEndLineNumber, modifiedStartLineNumber, modifiedEndLineNumber, charChanges);
    }
}
class DiffComputer {
    constructor(originalLines, modifiedLines, opts) {
        this.shouldComputeCharChanges = opts.shouldComputeCharChanges;
        this.shouldPostProcessCharChanges = opts.shouldPostProcessCharChanges;
        this.shouldIgnoreTrimWhitespace = opts.shouldIgnoreTrimWhitespace;
        this.shouldMakePrettyDiff = opts.shouldMakePrettyDiff;
        this.originalLines = originalLines;
        this.modifiedLines = modifiedLines;
        this.original = new LineSequence(originalLines);
        this.modified = new LineSequence(modifiedLines);
        this.continueLineDiff = createContinueProcessingPredicate(opts.maxComputationTime);
        this.continueCharDiff = createContinueProcessingPredicate(opts.maxComputationTime === 0 ? 0 : Math.min(opts.maxComputationTime, 5000)); // never run after 5s for character changes...
    }
    computeDiff() {
        if (this.original.lines.length === 1 && this.original.lines[0].length === 0) {
            // empty original => fast path
            if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
                return {
                    quitEarly: false,
                    changes: []
                };
            }
            return {
                quitEarly: false,
                changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: 1,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: this.modified.lines.length,
                        charChanges: undefined
                    }]
            };
        }
        if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) {
            // empty modified => fast path
            return {
                quitEarly: false,
                changes: [{
                        originalStartLineNumber: 1,
                        originalEndLineNumber: this.original.lines.length,
                        modifiedStartLineNumber: 1,
                        modifiedEndLineNumber: 1,
                        charChanges: undefined
                    }]
            };
        }
        const diffResult = computeDiff(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff);
        const rawChanges = diffResult.changes;
        const quitEarly = diffResult.quitEarly;
        // The diff is always computed with ignoring trim whitespace
        // This ensures we get the prettiest diff
        if (this.shouldIgnoreTrimWhitespace) {
            const lineChanges = [];
            for (let i = 0, length = rawChanges.length; i < length; i++) {
                lineChanges.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, rawChanges[i], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
            }
            return {
                quitEarly: quitEarly,
                changes: lineChanges
            };
        }
        // Need to post-process and introduce changes where the trim whitespace is different
        // Note that we are looping starting at -1 to also cover the lines before the first change
        const result = [];
        let originalLineIndex = 0;
        let modifiedLineIndex = 0;
        for (let i = -1 /* !!!! */, len = rawChanges.length; i < len; i++) {
            const nextChange = (i + 1 < len ? rawChanges[i + 1] : null);
            const originalStop = (nextChange ? nextChange.originalStart : this.originalLines.length);
            const modifiedStop = (nextChange ? nextChange.modifiedStart : this.modifiedLines.length);
            while (originalLineIndex < originalStop && modifiedLineIndex < modifiedStop) {
                const originalLine = this.originalLines[originalLineIndex];
                const modifiedLine = this.modifiedLines[modifiedLineIndex];
                if (originalLine !== modifiedLine) {
                    // These lines differ only in trim whitespace
                    // Check the leading whitespace
                    {
                        let originalStartColumn = getFirstNonBlankColumn(originalLine, 1);
                        let modifiedStartColumn = getFirstNonBlankColumn(modifiedLine, 1);
                        while (originalStartColumn > 1 && modifiedStartColumn > 1) {
                            const originalChar = originalLine.charCodeAt(originalStartColumn - 2);
                            const modifiedChar = modifiedLine.charCodeAt(modifiedStartColumn - 2);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalStartColumn--;
                            modifiedStartColumn--;
                        }
                        if (originalStartColumn > 1 || modifiedStartColumn > 1) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, 1, originalStartColumn, modifiedLineIndex + 1, 1, modifiedStartColumn);
                        }
                    }
                    // Check the trailing whitespace
                    {
                        let originalEndColumn = getLastNonBlankColumn(originalLine, 1);
                        let modifiedEndColumn = getLastNonBlankColumn(modifiedLine, 1);
                        const originalMaxColumn = originalLine.length + 1;
                        const modifiedMaxColumn = modifiedLine.length + 1;
                        while (originalEndColumn < originalMaxColumn && modifiedEndColumn < modifiedMaxColumn) {
                            const originalChar = originalLine.charCodeAt(originalEndColumn - 1);
                            const modifiedChar = originalLine.charCodeAt(modifiedEndColumn - 1);
                            if (originalChar !== modifiedChar) {
                                break;
                            }
                            originalEndColumn++;
                            modifiedEndColumn++;
                        }
                        if (originalEndColumn < originalMaxColumn || modifiedEndColumn < modifiedMaxColumn) {
                            this._pushTrimWhitespaceCharChange(result, originalLineIndex + 1, originalEndColumn, originalMaxColumn, modifiedLineIndex + 1, modifiedEndColumn, modifiedMaxColumn);
                        }
                    }
                }
                originalLineIndex++;
                modifiedLineIndex++;
            }
            if (nextChange) {
                // Emit the actual change
                result.push(LineChange.createFromDiffResult(this.shouldIgnoreTrimWhitespace, nextChange, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
                originalLineIndex += nextChange.originalLength;
                modifiedLineIndex += nextChange.modifiedLength;
            }
        }
        return {
            quitEarly: quitEarly,
            changes: result
        };
    }
    _pushTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        if (this._mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn)) {
            // Merged into previous
            return;
        }
        let charChanges = undefined;
        if (this.shouldComputeCharChanges) {
            charChanges = [new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn)];
        }
        result.push(new LineChange(originalLineNumber, originalLineNumber, modifiedLineNumber, modifiedLineNumber, charChanges));
    }
    _mergeTrimWhitespaceCharChange(result, originalLineNumber, originalStartColumn, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedEndColumn) {
        const len = result.length;
        if (len === 0) {
            return false;
        }
        const prevChange = result[len - 1];
        if (prevChange.originalEndLineNumber === 0 || prevChange.modifiedEndLineNumber === 0) {
            // Don't merge with inserts/deletes
            return false;
        }
        if (prevChange.originalEndLineNumber === originalLineNumber && prevChange.modifiedEndLineNumber === modifiedLineNumber) {
            if (this.shouldComputeCharChanges && prevChange.charChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        if (prevChange.originalEndLineNumber + 1 === originalLineNumber && prevChange.modifiedEndLineNumber + 1 === modifiedLineNumber) {
            prevChange.originalEndLineNumber = originalLineNumber;
            prevChange.modifiedEndLineNumber = modifiedLineNumber;
            if (this.shouldComputeCharChanges && prevChange.charChanges) {
                prevChange.charChanges.push(new CharChange(originalLineNumber, originalStartColumn, originalLineNumber, originalEndColumn, modifiedLineNumber, modifiedStartColumn, modifiedLineNumber, modifiedEndColumn));
            }
            return true;
        }
        return false;
    }
}
function getFirstNonBlankColumn(txt, defaultValue) {
    const r = strings/* firstNonWhitespaceIndex */.LC(txt);
    if (r === -1) {
        return defaultValue;
    }
    return r + 1;
}
function getLastNonBlankColumn(txt, defaultValue) {
    const r = strings/* lastNonWhitespaceIndex */.ow(txt);
    if (r === -1) {
        return defaultValue;
    }
    return r + 2;
}
function createContinueProcessingPredicate(maximumRuntime) {
    if (maximumRuntime === 0) {
        return () => true;
    }
    const startTime = Date.now();
    return () => {
        return Date.now() - startTime < maximumRuntime;
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/standardLinesDiffComputer.js + 5 modules
var standardLinesDiffComputer = __webpack_require__(34841);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/linesDiffComputers.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const linesDiffComputers = {
    getLegacy: () => new SmartLinesDiffComputer(),
    getAdvanced: () => new standardLinesDiffComputer/* StandardLinesDiffComputer */.Uc(),
};


/***/ }),

/***/ 34841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Uc: function() { return /* binding */ StandardLinesDiffComputer; },
  v: function() { return /* binding */ lineRangeMappingFromRangeMappings; }
});

// UNUSED EXPORTS: LineSequence, LinesSliceCharSequence, getLineRangeMapping

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/assert.js
var assert = __webpack_require__(14299);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/lineRange.js
var lineRange = __webpack_require__(23706);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/offsetRange.js
var offsetRange = __webpack_require__(90342);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/algorithms/diffAlgorithm.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class DiffAlgorithmResult {
    static trivial(seq1, seq2) {
        return new DiffAlgorithmResult([new SequenceDiff(new offsetRange/* OffsetRange */.q(0, seq1.length), new offsetRange/* OffsetRange */.q(0, seq2.length))], false);
    }
    static trivialTimedOut(seq1, seq2) {
        return new DiffAlgorithmResult([new SequenceDiff(new offsetRange/* OffsetRange */.q(0, seq1.length), new offsetRange/* OffsetRange */.q(0, seq2.length))], true);
    }
    constructor(diffs, 
    /**
     * Indicates if the time out was reached.
     * In that case, the diffs might be an approximation and the user should be asked to rerun the diff with more time.
     */
    hitTimeout) {
        this.diffs = diffs;
        this.hitTimeout = hitTimeout;
    }
}
class SequenceDiff {
    constructor(seq1Range, seq2Range) {
        this.seq1Range = seq1Range;
        this.seq2Range = seq2Range;
    }
    reverse() {
        return new SequenceDiff(this.seq2Range, this.seq1Range);
    }
    toString() {
        return `${this.seq1Range} <-> ${this.seq2Range}`;
    }
    join(other) {
        return new SequenceDiff(this.seq1Range.join(other.seq1Range), this.seq2Range.join(other.seq2Range));
    }
    delta(offset) {
        if (offset === 0) {
            return this;
        }
        return new SequenceDiff(this.seq1Range.delta(offset), this.seq2Range.delta(offset));
    }
}
class InfiniteTimeout {
    isValid() {
        return true;
    }
}
InfiniteTimeout.instance = new InfiniteTimeout();
class DateTimeout {
    constructor(timeout) {
        this.timeout = timeout;
        this.startTime = Date.now();
        this.valid = true;
        if (timeout <= 0) {
            throw new errors/* BugIndicatingError */.he('timeout must be positive');
        }
    }
    // Recommendation: Set a log-point `{this.disable()}` in the body
    isValid() {
        const valid = Date.now() - this.startTime < this.timeout;
        if (!valid && this.valid) {
            this.valid = false; // timeout reached
            // eslint-disable-next-line no-debugger
            debugger; // WARNING: Most likely debugging caused the timeout. Call `this.disable()` to continue without timing out.
        }
        return this.valid;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/algorithms/utils.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Array2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.array = [];
        this.array = new Array(width * height);
    }
    get(x, y) {
        return this.array[x + y * this.width];
    }
    set(x, y, value) {
        this.array[x + y * this.width] = value;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/algorithms/dynamicProgrammingDiffing.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * A O(MN) diffing algorithm that supports a score function.
 * The algorithm can be improved by processing the 2d array diagonally.
*/
class DynamicProgrammingDiffing {
    compute(sequence1, sequence2, timeout = InfiniteTimeout.instance, equalityScore) {
        if (sequence1.length === 0 || sequence2.length === 0) {
            return DiffAlgorithmResult.trivial(sequence1, sequence2);
        }
        /**
         * lcsLengths.get(i, j): Length of the longest common subsequence of sequence1.substring(0, i + 1) and sequence2.substring(0, j + 1).
         */
        const lcsLengths = new Array2D(sequence1.length, sequence2.length);
        const directions = new Array2D(sequence1.length, sequence2.length);
        const lengths = new Array2D(sequence1.length, sequence2.length);
        // ==== Initializing lcsLengths ====
        for (let s1 = 0; s1 < sequence1.length; s1++) {
            for (let s2 = 0; s2 < sequence2.length; s2++) {
                if (!timeout.isValid()) {
                    return DiffAlgorithmResult.trivialTimedOut(sequence1, sequence2);
                }
                const horizontalLen = s1 === 0 ? 0 : lcsLengths.get(s1 - 1, s2);
                const verticalLen = s2 === 0 ? 0 : lcsLengths.get(s1, s2 - 1);
                let extendedSeqScore;
                if (sequence1.getElement(s1) === sequence2.getElement(s2)) {
                    if (s1 === 0 || s2 === 0) {
                        extendedSeqScore = 0;
                    }
                    else {
                        extendedSeqScore = lcsLengths.get(s1 - 1, s2 - 1);
                    }
                    if (s1 > 0 && s2 > 0 && directions.get(s1 - 1, s2 - 1) === 3) {
                        // Prefer consecutive diagonals
                        extendedSeqScore += lengths.get(s1 - 1, s2 - 1);
                    }
                    extendedSeqScore += (equalityScore ? equalityScore(s1, s2) : 1);
                }
                else {
                    extendedSeqScore = -1;
                }
                const newValue = Math.max(horizontalLen, verticalLen, extendedSeqScore);
                if (newValue === extendedSeqScore) {
                    // Prefer diagonals
                    const prevLen = s1 > 0 && s2 > 0 ? lengths.get(s1 - 1, s2 - 1) : 0;
                    lengths.set(s1, s2, prevLen + 1);
                    directions.set(s1, s2, 3);
                }
                else if (newValue === horizontalLen) {
                    lengths.set(s1, s2, 0);
                    directions.set(s1, s2, 1);
                }
                else if (newValue === verticalLen) {
                    lengths.set(s1, s2, 0);
                    directions.set(s1, s2, 2);
                }
                lcsLengths.set(s1, s2, newValue);
            }
        }
        // ==== Backtracking ====
        const result = [];
        let lastAligningPosS1 = sequence1.length;
        let lastAligningPosS2 = sequence2.length;
        function reportDecreasingAligningPositions(s1, s2) {
            if (s1 + 1 !== lastAligningPosS1 || s2 + 1 !== lastAligningPosS2) {
                result.push(new SequenceDiff(new offsetRange/* OffsetRange */.q(s1 + 1, lastAligningPosS1), new offsetRange/* OffsetRange */.q(s2 + 1, lastAligningPosS2)));
            }
            lastAligningPosS1 = s1;
            lastAligningPosS2 = s2;
        }
        let s1 = sequence1.length - 1;
        let s2 = sequence2.length - 1;
        while (s1 >= 0 && s2 >= 0) {
            if (directions.get(s1, s2) === 3) {
                reportDecreasingAligningPositions(s1, s2);
                s1--;
                s2--;
            }
            else {
                if (directions.get(s1, s2) === 1) {
                    s1--;
                }
                else {
                    s2--;
                }
            }
        }
        reportDecreasingAligningPositions(-1, -1);
        result.reverse();
        return new DiffAlgorithmResult(result, false);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/algorithms/joinSequenceDiffs.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function optimizeSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    let result = sequenceDiffs;
    result = joinSequenceDiffs(sequence1, sequence2, result);
    result = shiftSequenceDiffs(sequence1, sequence2, result);
    return result;
}
function smoothenSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    const result = [];
    for (const s of sequenceDiffs) {
        const last = result[result.length - 1];
        if (!last) {
            result.push(s);
            continue;
        }
        if (s.seq1Range.start - last.seq1Range.endExclusive <= 2 || s.seq2Range.start - last.seq2Range.endExclusive <= 2) {
            result[result.length - 1] = new SequenceDiff(last.seq1Range.join(s.seq1Range), last.seq2Range.join(s.seq2Range));
        }
        else {
            result.push(s);
        }
    }
    return result;
}
function removeRandomMatches(sequence1, sequence2, sequenceDiffs) {
    let diffs = sequenceDiffs;
    if (diffs.length === 0) {
        return diffs;
    }
    let counter = 0;
    let shouldRepeat;
    do {
        shouldRepeat = false;
        const result = [
            diffs[0]
        ];
        for (let i = 1; i < diffs.length; i++) {
            const cur = diffs[i];
            const lastResult = result[result.length - 1];
            function shouldJoinDiffs(before, after) {
                const unchangedRange = new offsetRange/* OffsetRange */.q(lastResult.seq1Range.endExclusive, cur.seq1Range.start);
                const unchangedLineCount = sequence1.countLinesIn(unchangedRange);
                if (unchangedLineCount > 5 || unchangedRange.length > 500) {
                    return false;
                }
                const unchangedText = sequence1.getText(unchangedRange).trim();
                if (unchangedText.length > 20 || unchangedText.split(/\r\n|\r|\n/).length > 1) {
                    return false;
                }
                const beforeLineCount1 = sequence1.countLinesIn(before.seq1Range);
                const beforeSeq1Length = before.seq1Range.length;
                const beforeLineCount2 = sequence2.countLinesIn(before.seq2Range);
                const beforeSeq2Length = before.seq2Range.length;
                const afterLineCount1 = sequence1.countLinesIn(after.seq1Range);
                const afterSeq1Length = after.seq1Range.length;
                const afterLineCount2 = sequence2.countLinesIn(after.seq2Range);
                const afterSeq2Length = after.seq2Range.length;
                // TODO: Maybe a neural net can be used to derive the result from these numbers
                const max = 2 * 40 + 50;
                function cap(v) {
                    return Math.min(v, max);
                }
                if (Math.pow(Math.pow(cap(beforeLineCount1 * 40 + beforeSeq1Length), 1.5) + Math.pow(cap(beforeLineCount2 * 40 + beforeSeq2Length), 1.5), 1.5)
                    + Math.pow(Math.pow(cap(afterLineCount1 * 40 + afterSeq1Length), 1.5) + Math.pow(cap(afterLineCount2 * 40 + afterSeq2Length), 1.5), 1.5) > (Math.pow((Math.pow(max, 1.5)), 1.5)) * 1.3) {
                    return true;
                }
                return false;
            }
            const shouldJoin = shouldJoinDiffs(lastResult, cur);
            if (shouldJoin) {
                shouldRepeat = true;
                result[result.length - 1] = result[result.length - 1].join(cur);
            }
            else {
                result.push(cur);
            }
        }
        diffs = result;
    } while (counter++ < 10 && shouldRepeat);
    return diffs;
}
/**
 * This function fixes issues like this:
 * ```
 * import { Baz, Bar } from "foo";
 * ```
 * <->
 * ```
 * import { Baz, Bar, Foo } from "foo";
 * ```
 * Computed diff: [ {Add "," after Bar}, {Add "Foo " after space} }
 * Improved diff: [{Add ", Foo" after Bar}]
 */
function joinSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    if (sequenceDiffs.length === 0) {
        return sequenceDiffs;
    }
    const result = [];
    result.push(sequenceDiffs[0]);
    // First move them all to the left as much as possible and join them if possible
    for (let i = 1; i < sequenceDiffs.length; i++) {
        const prevResult = result[result.length - 1];
        let cur = sequenceDiffs[i];
        if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
            const length = cur.seq1Range.start - prevResult.seq1Range.endExclusive;
            let d;
            for (d = 1; d <= length; d++) {
                if (sequence1.getElement(cur.seq1Range.start - d) !== sequence1.getElement(cur.seq1Range.endExclusive - d) ||
                    sequence2.getElement(cur.seq2Range.start - d) !== sequence2.getElement(cur.seq2Range.endExclusive - d)) {
                    break;
                }
            }
            d--;
            if (d === length) {
                // Merge previous and current diff
                result[result.length - 1] = new SequenceDiff(new offsetRange/* OffsetRange */.q(prevResult.seq1Range.start, cur.seq1Range.endExclusive - length), new offsetRange/* OffsetRange */.q(prevResult.seq2Range.start, cur.seq2Range.endExclusive - length));
                continue;
            }
            cur = cur.delta(-d);
        }
        result.push(cur);
    }
    const result2 = [];
    // Then move them all to the right and join them again if possible
    for (let i = 0; i < result.length - 1; i++) {
        const nextResult = result[i + 1];
        let cur = result[i];
        if (cur.seq1Range.isEmpty || cur.seq2Range.isEmpty) {
            const length = nextResult.seq1Range.start - cur.seq1Range.endExclusive;
            let d;
            for (d = 0; d < length; d++) {
                if (sequence1.getElement(cur.seq1Range.start + d) !== sequence1.getElement(cur.seq1Range.endExclusive + d) ||
                    sequence2.getElement(cur.seq2Range.start + d) !== sequence2.getElement(cur.seq2Range.endExclusive + d)) {
                    break;
                }
            }
            if (d === length) {
                // Merge previous and current diff, write to result!
                result[i + 1] = new SequenceDiff(new offsetRange/* OffsetRange */.q(cur.seq1Range.start + length, nextResult.seq1Range.endExclusive), new offsetRange/* OffsetRange */.q(cur.seq2Range.start + length, nextResult.seq2Range.endExclusive));
                continue;
            }
            if (d > 0) {
                cur = cur.delta(d);
            }
        }
        result2.push(cur);
    }
    if (result.length > 0) {
        result2.push(result[result.length - 1]);
    }
    return result2;
}
// align character level diffs at whitespace characters
// import { IBar } from "foo";
// import { I[Arr, I]Bar } from "foo";
// ->
// import { [IArr, ]IBar } from "foo";
// import { ITransaction, observableValue, transaction } from 'vs/base/common/observable';
// import { ITransaction, observable[FromEvent, observable]Value, transaction } from 'vs/base/common/observable';
// ->
// import { ITransaction, [observableFromEvent, ]observableValue, transaction } from 'vs/base/common/observable';
// collectBrackets(level + 1, levelPerBracketType);
// collectBrackets(level + 1, levelPerBracket[ + 1, levelPerBracket]Type);
// ->
// collectBrackets(level + 1, [levelPerBracket + 1, ]levelPerBracketType);
function shiftSequenceDiffs(sequence1, sequence2, sequenceDiffs) {
    if (!sequence1.getBoundaryScore || !sequence2.getBoundaryScore) {
        return sequenceDiffs;
    }
    for (let i = 0; i < sequenceDiffs.length; i++) {
        const prevDiff = (i > 0 ? sequenceDiffs[i - 1] : undefined);
        const diff = sequenceDiffs[i];
        const nextDiff = (i + 1 < sequenceDiffs.length ? sequenceDiffs[i + 1] : undefined);
        const seq1ValidRange = new offsetRange/* OffsetRange */.q(prevDiff ? prevDiff.seq1Range.start + 1 : 0, nextDiff ? nextDiff.seq1Range.endExclusive - 1 : sequence1.length);
        const seq2ValidRange = new offsetRange/* OffsetRange */.q(prevDiff ? prevDiff.seq2Range.start + 1 : 0, nextDiff ? nextDiff.seq2Range.endExclusive - 1 : sequence2.length);
        if (diff.seq1Range.isEmpty) {
            sequenceDiffs[i] = shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange);
        }
        else if (diff.seq2Range.isEmpty) {
            sequenceDiffs[i] = shiftDiffToBetterPosition(diff.reverse(), sequence2, sequence1, seq2ValidRange, seq1ValidRange).reverse();
        }
    }
    return sequenceDiffs;
}
function shiftDiffToBetterPosition(diff, sequence1, sequence2, seq1ValidRange, seq2ValidRange) {
    const maxShiftLimit = 100; // To prevent performance issues
    // don't touch previous or next!
    let deltaBefore = 1;
    while (diff.seq1Range.start - deltaBefore >= seq1ValidRange.start &&
        diff.seq2Range.start - deltaBefore >= seq2ValidRange.start &&
        sequence2.getElement(diff.seq2Range.start - deltaBefore) ===
            sequence2.getElement(diff.seq2Range.endExclusive - deltaBefore) && deltaBefore < maxShiftLimit) {
        deltaBefore++;
    }
    deltaBefore--;
    let deltaAfter = 0;
    while (diff.seq1Range.start + deltaAfter < seq1ValidRange.endExclusive &&
        diff.seq2Range.endExclusive + deltaAfter < seq2ValidRange.endExclusive &&
        sequence2.getElement(diff.seq2Range.start + deltaAfter) ===
            sequence2.getElement(diff.seq2Range.endExclusive + deltaAfter) && deltaAfter < maxShiftLimit) {
        deltaAfter++;
    }
    if (deltaBefore === 0 && deltaAfter === 0) {
        return diff;
    }
    // Visualize `[sequence1.text, diff.seq1Range.start + deltaAfter]`
    // and `[sequence2.text, diff.seq2Range.start + deltaAfter, diff.seq2Range.endExclusive + deltaAfter]`
    let bestDelta = 0;
    let bestScore = -1;
    // find best scored delta
    for (let delta = -deltaBefore; delta <= deltaAfter; delta++) {
        const seq2OffsetStart = diff.seq2Range.start + delta;
        const seq2OffsetEndExclusive = diff.seq2Range.endExclusive + delta;
        const seq1Offset = diff.seq1Range.start + delta;
        const score = sequence1.getBoundaryScore(seq1Offset) + sequence2.getBoundaryScore(seq2OffsetStart) + sequence2.getBoundaryScore(seq2OffsetEndExclusive);
        if (score > bestScore) {
            bestScore = score;
            bestDelta = delta;
        }
    }
    return diff.delta(bestDelta);
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/algorithms/myersDiffAlgorithm.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * An O(ND) diff algorithm that has a quadratic space worst-case complexity.
*/
class MyersDiffAlgorithm {
    compute(seq1, seq2, timeout = InfiniteTimeout.instance) {
        // These are common special cases.
        // The early return improves performance dramatically.
        if (seq1.length === 0 || seq2.length === 0) {
            return DiffAlgorithmResult.trivial(seq1, seq2);
        }
        function getXAfterSnake(x, y) {
            while (x < seq1.length && y < seq2.length && seq1.getElement(x) === seq2.getElement(y)) {
                x++;
                y++;
            }
            return x;
        }
        let d = 0;
        // V[k]: X value of longest d-line that ends in diagonal k.
        // d-line: path from (0,0) to (x,y) that uses exactly d non-diagonals.
        // diagonal k: Set of points (x,y) with x-y = k.
        const V = new FastInt32Array();
        V.set(0, getXAfterSnake(0, 0));
        const paths = new FastArrayNegativeIndices();
        paths.set(0, V.get(0) === 0 ? null : new SnakePath(null, 0, 0, V.get(0)));
        let k = 0;
        loop: while (true) {
            d++;
            if (!timeout.isValid()) {
                return DiffAlgorithmResult.trivialTimedOut(seq1, seq2);
            }
            // The paper has `for (k = -d; k <= d; k += 2)`, but we can ignore diagonals that cannot influence the result.
            const lowerBound = -Math.min(d, seq2.length + (d % 2));
            const upperBound = Math.min(d, seq1.length + (d % 2));
            for (k = lowerBound; k <= upperBound; k += 2) {
                // We can use the X values of (d-1)-lines to compute X value of the longest d-lines.
                const maxXofDLineTop = k === upperBound ? -1 : V.get(k + 1); // We take a vertical non-diagonal (add a symbol in seq1)
                const maxXofDLineLeft = k === lowerBound ? -1 : V.get(k - 1) + 1; // We take a horizontal non-diagonal (+1 x) (delete a symbol in seq1)
                const x = Math.min(Math.max(maxXofDLineTop, maxXofDLineLeft), seq1.length);
                const y = x - k;
                if (x > seq1.length || y > seq2.length) {
                    // This diagonal is irrelevant for the result.
                    // TODO: Don't pay the cost for this in the next iteration.
                    continue;
                }
                const newMaxX = getXAfterSnake(x, y);
                V.set(k, newMaxX);
                const lastPath = x === maxXofDLineTop ? paths.get(k + 1) : paths.get(k - 1);
                paths.set(k, newMaxX !== x ? new SnakePath(lastPath, x, y, newMaxX - x) : lastPath);
                if (V.get(k) === seq1.length && V.get(k) - k === seq2.length) {
                    break loop;
                }
            }
        }
        let path = paths.get(k);
        const result = [];
        let lastAligningPosS1 = seq1.length;
        let lastAligningPosS2 = seq2.length;
        while (true) {
            const endX = path ? path.x + path.length : 0;
            const endY = path ? path.y + path.length : 0;
            if (endX !== lastAligningPosS1 || endY !== lastAligningPosS2) {
                result.push(new SequenceDiff(new offsetRange/* OffsetRange */.q(endX, lastAligningPosS1), new offsetRange/* OffsetRange */.q(endY, lastAligningPosS2)));
            }
            if (!path) {
                break;
            }
            lastAligningPosS1 = path.x;
            lastAligningPosS2 = path.y;
            path = path.prev;
        }
        result.reverse();
        return new DiffAlgorithmResult(result, false);
    }
}
class SnakePath {
    constructor(prev, x, y, length) {
        this.prev = prev;
        this.x = x;
        this.y = y;
        this.length = length;
    }
}
/**
 * An array that supports fast negative indices.
*/
class FastInt32Array {
    constructor() {
        this.positiveArr = new Int32Array(10);
        this.negativeArr = new Int32Array(10);
    }
    get(idx) {
        if (idx < 0) {
            idx = -idx - 1;
            return this.negativeArr[idx];
        }
        else {
            return this.positiveArr[idx];
        }
    }
    set(idx, value) {
        if (idx < 0) {
            idx = -idx - 1;
            if (idx >= this.negativeArr.length) {
                const arr = this.negativeArr;
                this.negativeArr = new Int32Array(arr.length * 2);
                this.negativeArr.set(arr);
            }
            this.negativeArr[idx] = value;
        }
        else {
            if (idx >= this.positiveArr.length) {
                const arr = this.positiveArr;
                this.positiveArr = new Int32Array(arr.length * 2);
                this.positiveArr.set(arr);
            }
            this.positiveArr[idx] = value;
        }
    }
}
/**
 * An array that supports fast negative indices.
*/
class FastArrayNegativeIndices {
    constructor() {
        this.positiveArr = [];
        this.negativeArr = [];
    }
    get(idx) {
        if (idx < 0) {
            idx = -idx - 1;
            return this.negativeArr[idx];
        }
        else {
            return this.positiveArr[idx];
        }
    }
    set(idx, value) {
        if (idx < 0) {
            idx = -idx - 1;
            this.negativeArr[idx] = value;
        }
        else {
            this.positiveArr[idx] = value;
        }
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/linesDiffComputer.js
var linesDiffComputer = __webpack_require__(13761);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/standardLinesDiffComputer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










class StandardLinesDiffComputer {
    constructor() {
        this.dynamicProgrammingDiffing = new DynamicProgrammingDiffing();
        this.myersDiffingAlgorithm = new MyersDiffAlgorithm();
    }
    computeDiff(originalLines, modifiedLines, options) {
        if (originalLines.length === 1 && originalLines[0].length === 0 || modifiedLines.length === 1 && modifiedLines[0].length === 0) {
            return {
                changes: [
                    new linesDiffComputer/* LineRangeMapping */.f0(new lineRange/* LineRange */.z(1, originalLines.length + 1), new lineRange/* LineRange */.z(1, modifiedLines.length + 1), [
                        new linesDiffComputer/* RangeMapping */.iy(new core_range/* Range */.e(1, 1, originalLines.length, originalLines[0].length + 1), new core_range/* Range */.e(1, 1, modifiedLines.length, modifiedLines[0].length + 1))
                    ])
                ],
                hitTimeout: false,
                moves: [],
            };
        }
        const timeout = options.maxComputationTimeMs === 0 ? InfiniteTimeout.instance : new DateTimeout(options.maxComputationTimeMs);
        const considerWhitespaceChanges = !options.ignoreTrimWhitespace;
        const perfectHashes = new Map();
        function getOrCreateHash(text) {
            let hash = perfectHashes.get(text);
            if (hash === undefined) {
                hash = perfectHashes.size;
                perfectHashes.set(text, hash);
            }
            return hash;
        }
        const srcDocLines = originalLines.map((l) => getOrCreateHash(l.trim()));
        const tgtDocLines = modifiedLines.map((l) => getOrCreateHash(l.trim()));
        const sequence1 = new LineSequence(srcDocLines, originalLines);
        const sequence2 = new LineSequence(tgtDocLines, modifiedLines);
        const lineAlignmentResult = (() => {
            if (sequence1.length + sequence2.length < 1500) {
                // Use the improved algorithm for small files
                return this.dynamicProgrammingDiffing.compute(sequence1, sequence2, timeout, (offset1, offset2) => originalLines[offset1] === modifiedLines[offset2]
                    ? modifiedLines[offset2].length === 0
                        ? 0.1
                        : 1 + Math.log(1 + modifiedLines[offset2].length)
                    : 0.99);
            }
            return this.myersDiffingAlgorithm.compute(sequence1, sequence2);
        })();
        let lineAlignments = lineAlignmentResult.diffs;
        let hitTimeout = lineAlignmentResult.hitTimeout;
        lineAlignments = optimizeSequenceDiffs(sequence1, sequence2, lineAlignments);
        const alignments = [];
        const scanForWhitespaceChanges = (equalLinesCount) => {
            if (!considerWhitespaceChanges) {
                return;
            }
            for (let i = 0; i < equalLinesCount; i++) {
                const seq1Offset = seq1LastStart + i;
                const seq2Offset = seq2LastStart + i;
                if (originalLines[seq1Offset] !== modifiedLines[seq2Offset]) {
                    // This is because of whitespace changes, diff these lines
                    const characterDiffs = this.refineDiff(originalLines, modifiedLines, new SequenceDiff(new offsetRange/* OffsetRange */.q(seq1Offset, seq1Offset + 1), new offsetRange/* OffsetRange */.q(seq2Offset, seq2Offset + 1)), timeout, considerWhitespaceChanges);
                    for (const a of characterDiffs.mappings) {
                        alignments.push(a);
                    }
                    if (characterDiffs.hitTimeout) {
                        hitTimeout = true;
                    }
                }
            }
        };
        let seq1LastStart = 0;
        let seq2LastStart = 0;
        for (const diff of lineAlignments) {
            (0,assert/* assertFn */.eZ)(() => diff.seq1Range.start - seq1LastStart === diff.seq2Range.start - seq2LastStart);
            const equalLinesCount = diff.seq1Range.start - seq1LastStart;
            scanForWhitespaceChanges(equalLinesCount);
            seq1LastStart = diff.seq1Range.endExclusive;
            seq2LastStart = diff.seq2Range.endExclusive;
            const characterDiffs = this.refineDiff(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges);
            if (characterDiffs.hitTimeout) {
                hitTimeout = true;
            }
            for (const a of characterDiffs.mappings) {
                alignments.push(a);
            }
        }
        scanForWhitespaceChanges(originalLines.length - seq1LastStart);
        const changes = lineRangeMappingFromRangeMappings(alignments, originalLines, modifiedLines);
        const moves = [];
        if (options.computeMoves) {
            const deletions = changes
                .filter(c => c.modifiedRange.isEmpty && c.originalRange.length >= 3)
                .map(d => new LineRangeFragment(d.originalRange, originalLines));
            const insertions = new Set(changes
                .filter(c => c.originalRange.isEmpty && c.modifiedRange.length >= 3)
                .map(d => new LineRangeFragment(d.modifiedRange, modifiedLines)));
            for (const deletion of deletions) {
                let highestSimilarity = -1;
                let best;
                for (const insertion of insertions) {
                    const similarity = deletion.computeSimilarity(insertion);
                    if (similarity > highestSimilarity) {
                        highestSimilarity = similarity;
                        best = insertion;
                    }
                }
                if (highestSimilarity > 0.90 && best) {
                    const moveChanges = this.refineDiff(originalLines, modifiedLines, new SequenceDiff(new offsetRange/* OffsetRange */.q(deletion.range.startLineNumber - 1, deletion.range.endLineNumberExclusive - 1), new offsetRange/* OffsetRange */.q(best.range.startLineNumber - 1, best.range.endLineNumberExclusive - 1)), timeout, considerWhitespaceChanges);
                    const mappings = lineRangeMappingFromRangeMappings(moveChanges.mappings, originalLines, modifiedLines, true);
                    insertions.delete(best);
                    moves.push(new linesDiffComputer/* MovedText */.y0(new linesDiffComputer/* SimpleLineRangeMapping */.Qy(deletion.range, best.range), mappings));
                }
            }
        }
        // Make sure all ranges are valid
        (0,assert/* assertFn */.eZ)(() => {
            function validatePosition(pos, lines) {
                if (pos.lineNumber < 1 || pos.lineNumber > lines.length) {
                    return false;
                }
                const line = lines[pos.lineNumber - 1];
                if (pos.column < 1 || pos.column > line.length + 1) {
                    return false;
                }
                return true;
            }
            function validateRange(range, lines) {
                if (range.startLineNumber < 1 || range.startLineNumber > lines.length + 1) {
                    return false;
                }
                if (range.endLineNumberExclusive < 1 || range.endLineNumberExclusive > lines.length + 1) {
                    return false;
                }
                return true;
            }
            for (const c of changes) {
                if (!c.innerChanges) {
                    return false;
                }
                for (const ic of c.innerChanges) {
                    const valid = validatePosition(ic.modifiedRange.getStartPosition(), modifiedLines) && validatePosition(ic.modifiedRange.getEndPosition(), modifiedLines) &&
                        validatePosition(ic.originalRange.getStartPosition(), originalLines) && validatePosition(ic.originalRange.getEndPosition(), originalLines);
                    if (!valid) {
                        return false;
                    }
                }
                if (!validateRange(c.modifiedRange, modifiedLines) || !validateRange(c.originalRange, originalLines)) {
                    return false;
                }
            }
            return true;
        });
        return new linesDiffComputer/* LinesDiff */.hZ(changes, moves, hitTimeout);
    }
    refineDiff(originalLines, modifiedLines, diff, timeout, considerWhitespaceChanges) {
        const slice1 = new LinesSliceCharSequence(originalLines, diff.seq1Range, considerWhitespaceChanges);
        const slice2 = new LinesSliceCharSequence(modifiedLines, diff.seq2Range, considerWhitespaceChanges);
        const diffResult = slice1.length + slice2.length < 500
            ? this.dynamicProgrammingDiffing.compute(slice1, slice2, timeout)
            : this.myersDiffingAlgorithm.compute(slice1, slice2, timeout);
        let diffs = diffResult.diffs;
        diffs = optimizeSequenceDiffs(slice1, slice2, diffs);
        diffs = coverFullWords(slice1, slice2, diffs);
        diffs = smoothenSequenceDiffs(slice1, slice2, diffs);
        diffs = removeRandomMatches(slice1, slice2, diffs);
        const result = diffs.map((d) => new linesDiffComputer/* RangeMapping */.iy(slice1.translateRange(d.seq1Range), slice2.translateRange(d.seq2Range)));
        // Assert: result applied on original should be the same as diff applied to original
        return {
            mappings: result,
            hitTimeout: diffResult.hitTimeout,
        };
    }
}
function coverFullWords(sequence1, sequence2, sequenceDiffs) {
    const additional = [];
    let lastModifiedWord = undefined;
    function maybePushWordToAdditional() {
        if (!lastModifiedWord) {
            return;
        }
        const originalLength1 = lastModifiedWord.s1Range.length - lastModifiedWord.deleted;
        const originalLength2 = lastModifiedWord.s2Range.length - lastModifiedWord.added;
        if (originalLength1 !== originalLength2) {
            // TODO figure out why this happens
        }
        if (Math.max(lastModifiedWord.deleted, lastModifiedWord.added) + (lastModifiedWord.count - 1) > originalLength1) {
            additional.push(new SequenceDiff(lastModifiedWord.s1Range, lastModifiedWord.s2Range));
        }
        lastModifiedWord = undefined;
    }
    for (const s of sequenceDiffs) {
        function processWord(s1Range, s2Range) {
            var _a, _b, _c, _d;
            if (!lastModifiedWord || !lastModifiedWord.s1Range.containsRange(s1Range) || !lastModifiedWord.s2Range.containsRange(s2Range)) {
                if (lastModifiedWord && !(lastModifiedWord.s1Range.endExclusive < s1Range.start && lastModifiedWord.s2Range.endExclusive < s2Range.start)) {
                    const s1Added = offsetRange/* OffsetRange */.q.tryCreate(lastModifiedWord.s1Range.endExclusive, s1Range.start);
                    const s2Added = offsetRange/* OffsetRange */.q.tryCreate(lastModifiedWord.s2Range.endExclusive, s2Range.start);
                    lastModifiedWord.deleted += (_a = s1Added === null || s1Added === void 0 ? void 0 : s1Added.length) !== null && _a !== void 0 ? _a : 0;
                    lastModifiedWord.added += (_b = s2Added === null || s2Added === void 0 ? void 0 : s2Added.length) !== null && _b !== void 0 ? _b : 0;
                    lastModifiedWord.s1Range = lastModifiedWord.s1Range.join(s1Range);
                    lastModifiedWord.s2Range = lastModifiedWord.s2Range.join(s2Range);
                }
                else {
                    maybePushWordToAdditional();
                    lastModifiedWord = { added: 0, deleted: 0, count: 0, s1Range: s1Range, s2Range: s2Range };
                }
            }
            const changedS1 = s1Range.intersect(s.seq1Range);
            const changedS2 = s2Range.intersect(s.seq2Range);
            lastModifiedWord.count++;
            lastModifiedWord.deleted += (_c = changedS1 === null || changedS1 === void 0 ? void 0 : changedS1.length) !== null && _c !== void 0 ? _c : 0;
            lastModifiedWord.added += (_d = changedS2 === null || changedS2 === void 0 ? void 0 : changedS2.length) !== null && _d !== void 0 ? _d : 0;
        }
        const w1Before = sequence1.findWordContaining(s.seq1Range.start - 1);
        const w2Before = sequence2.findWordContaining(s.seq2Range.start - 1);
        const w1After = sequence1.findWordContaining(s.seq1Range.endExclusive);
        const w2After = sequence2.findWordContaining(s.seq2Range.endExclusive);
        if (w1Before && w1After && w2Before && w2After && w1Before.equals(w1After) && w2Before.equals(w2After)) {
            processWord(w1Before, w2Before);
        }
        else {
            if (w1Before && w2Before) {
                processWord(w1Before, w2Before);
            }
            if (w1After && w2After) {
                processWord(w1After, w2After);
            }
        }
    }
    maybePushWordToAdditional();
    const merged = mergeSequenceDiffs(sequenceDiffs, additional);
    return merged;
}
function mergeSequenceDiffs(sequenceDiffs1, sequenceDiffs2) {
    const result = [];
    while (sequenceDiffs1.length > 0 || sequenceDiffs2.length > 0) {
        const sd1 = sequenceDiffs1[0];
        const sd2 = sequenceDiffs2[0];
        let next;
        if (sd1 && (!sd2 || sd1.seq1Range.start < sd2.seq1Range.start)) {
            next = sequenceDiffs1.shift();
        }
        else {
            next = sequenceDiffs2.shift();
        }
        if (result.length > 0 && result[result.length - 1].seq1Range.endExclusive >= next.seq1Range.start) {
            result[result.length - 1] = result[result.length - 1].join(next);
        }
        else {
            result.push(next);
        }
    }
    return result;
}
function lineRangeMappingFromRangeMappings(alignments, originalLines, modifiedLines, dontAssertStartLine = false) {
    const changes = [];
    for (const g of group(alignments.map(a => getLineRangeMapping(a, originalLines, modifiedLines)), (a1, a2) => a1.originalRange.overlapOrTouch(a2.originalRange)
        || a1.modifiedRange.overlapOrTouch(a2.modifiedRange))) {
        const first = g[0];
        const last = g[g.length - 1];
        changes.push(new linesDiffComputer/* LineRangeMapping */.f0(first.originalRange.join(last.originalRange), first.modifiedRange.join(last.modifiedRange), g.map(a => a.innerChanges[0])));
    }
    (0,assert/* assertFn */.eZ)(() => {
        if (!dontAssertStartLine) {
            if (changes.length > 0 && changes[0].originalRange.startLineNumber !== changes[0].modifiedRange.startLineNumber) {
                return false;
            }
        }
        return (0,assert/* checkAdjacentItems */.DM)(changes, (m1, m2) => m2.originalRange.startLineNumber - m1.originalRange.endLineNumberExclusive === m2.modifiedRange.startLineNumber - m1.modifiedRange.endLineNumberExclusive &&
            // There has to be an unchanged line in between (otherwise both diffs should have been joined)
            m1.originalRange.endLineNumberExclusive < m2.originalRange.startLineNumber &&
            m1.modifiedRange.endLineNumberExclusive < m2.modifiedRange.startLineNumber);
    });
    return changes;
}
function getLineRangeMapping(rangeMapping, originalLines, modifiedLines) {
    let lineStartDelta = 0;
    let lineEndDelta = 0;
    // rangeMapping describes the edit that replaces `rangeMapping.originalRange` with `newText := getText(modifiedLines, rangeMapping.modifiedRange)`.
    // original: ]xxx \n <- this line is not modified
    // modified: ]xx  \n
    if (rangeMapping.modifiedRange.endColumn === 1 && rangeMapping.originalRange.endColumn === 1
        && rangeMapping.originalRange.startLineNumber + lineStartDelta <= rangeMapping.originalRange.endLineNumber
        && rangeMapping.modifiedRange.startLineNumber + lineStartDelta <= rangeMapping.modifiedRange.endLineNumber) {
        // We can only do this if the range is not empty yet
        lineEndDelta = -1;
    }
    // original: xxx[ \n <- this line is not modified
    // modified: xxx[ \n
    if (rangeMapping.modifiedRange.startColumn - 1 >= modifiedLines[rangeMapping.modifiedRange.startLineNumber - 1].length
        && rangeMapping.originalRange.startColumn - 1 >= originalLines[rangeMapping.originalRange.startLineNumber - 1].length
        && rangeMapping.originalRange.startLineNumber <= rangeMapping.originalRange.endLineNumber + lineEndDelta
        && rangeMapping.modifiedRange.startLineNumber <= rangeMapping.modifiedRange.endLineNumber + lineEndDelta) {
        // We can only do this if the range is not empty yet
        lineStartDelta = 1;
    }
    const originalLineRange = new lineRange/* LineRange */.z(rangeMapping.originalRange.startLineNumber + lineStartDelta, rangeMapping.originalRange.endLineNumber + 1 + lineEndDelta);
    const modifiedLineRange = new lineRange/* LineRange */.z(rangeMapping.modifiedRange.startLineNumber + lineStartDelta, rangeMapping.modifiedRange.endLineNumber + 1 + lineEndDelta);
    return new linesDiffComputer/* LineRangeMapping */.f0(originalLineRange, modifiedLineRange, [rangeMapping]);
}
function* group(items, shouldBeGrouped) {
    let currentGroup;
    let last;
    for (const item of items) {
        if (last !== undefined && shouldBeGrouped(last, item)) {
            currentGroup.push(item);
        }
        else {
            if (currentGroup) {
                yield currentGroup;
            }
            currentGroup = [item];
        }
        last = item;
    }
    if (currentGroup) {
        yield currentGroup;
    }
}
class LineSequence {
    constructor(trimmedHash, lines) {
        this.trimmedHash = trimmedHash;
        this.lines = lines;
    }
    getElement(offset) {
        return this.trimmedHash[offset];
    }
    get length() {
        return this.trimmedHash.length;
    }
    getBoundaryScore(length) {
        const indentationBefore = length === 0 ? 0 : getIndentation(this.lines[length - 1]);
        const indentationAfter = length === this.lines.length ? 0 : getIndentation(this.lines[length]);
        return 1000 - (indentationBefore + indentationAfter);
    }
}
function getIndentation(str) {
    let i = 0;
    while (i < str.length && (str.charCodeAt(i) === 32 /* CharCode.Space */ || str.charCodeAt(i) === 9 /* CharCode.Tab */)) {
        i++;
    }
    return i;
}
class LinesSliceCharSequence {
    constructor(lines, lineRange, considerWhitespaceChanges) {
        // This slice has to have lineRange.length many \n! (otherwise diffing against an empty slice will be problematic)
        // (Unless it covers the entire document, in that case the other slice also has to cover the entire document ands it's okay)
        this.lines = lines;
        this.considerWhitespaceChanges = considerWhitespaceChanges;
        this.elements = [];
        this.firstCharOffsetByLineMinusOne = [];
        // To account for trimming
        this.offsetByLine = [];
        // If the slice covers the end, but does not start at the beginning, we include just the \n of the previous line.
        let trimFirstLineFully = false;
        if (lineRange.start > 0 && lineRange.endExclusive >= lines.length) {
            lineRange = new offsetRange/* OffsetRange */.q(lineRange.start - 1, lineRange.endExclusive);
            trimFirstLineFully = true;
        }
        this.lineRange = lineRange;
        for (let i = this.lineRange.start; i < this.lineRange.endExclusive; i++) {
            let line = lines[i];
            let offset = 0;
            if (trimFirstLineFully) {
                offset = line.length;
                line = '';
                trimFirstLineFully = false;
            }
            else if (!considerWhitespaceChanges) {
                const trimmedStartLine = line.trimStart();
                offset = line.length - trimmedStartLine.length;
                line = trimmedStartLine.trimEnd();
            }
            this.offsetByLine.push(offset);
            for (let i = 0; i < line.length; i++) {
                this.elements.push(line.charCodeAt(i));
            }
            // Don't add an \n that does not exist in the document.
            if (i < lines.length - 1) {
                this.elements.push('\n'.charCodeAt(0));
                this.firstCharOffsetByLineMinusOne[i - this.lineRange.start] = this.elements.length;
            }
        }
        // To account for the last line
        this.offsetByLine.push(0);
    }
    toString() {
        return `Slice: "${this.text}"`;
    }
    get text() {
        return this.getText(new offsetRange/* OffsetRange */.q(0, this.length));
    }
    getText(range) {
        return this.elements.slice(range.start, range.endExclusive).map(e => String.fromCharCode(e)).join('');
    }
    getElement(offset) {
        return this.elements[offset];
    }
    get length() {
        return this.elements.length;
    }
    getBoundaryScore(length) {
        //   a   b   c   ,           d   e   f
        // 11  0   0   12  15  6   13  0   0   11
        const prevCategory = getCategory(length > 0 ? this.elements[length - 1] : -1);
        const nextCategory = getCategory(length < this.elements.length ? this.elements[length] : -1);
        if (prevCategory === 6 /* CharBoundaryCategory.LineBreakCR */ && nextCategory === 7 /* CharBoundaryCategory.LineBreakLF */) {
            // don't break between \r and \n
            return 0;
        }
        let score = 0;
        if (prevCategory !== nextCategory) {
            score += 10;
            if (nextCategory === 1 /* CharBoundaryCategory.WordUpper */) {
                score += 1;
            }
        }
        score += getCategoryBoundaryScore(prevCategory);
        score += getCategoryBoundaryScore(nextCategory);
        return score;
    }
    translateOffset(offset) {
        // find smallest i, so that lineBreakOffsets[i] <= offset using binary search
        if (this.lineRange.isEmpty) {
            return new position/* Position */.L(this.lineRange.start + 1, 1);
        }
        let i = 0;
        let j = this.firstCharOffsetByLineMinusOne.length;
        while (i < j) {
            const k = Math.floor((i + j) / 2);
            if (this.firstCharOffsetByLineMinusOne[k] > offset) {
                j = k;
            }
            else {
                i = k + 1;
            }
        }
        const offsetOfFirstCharInLine = i === 0 ? 0 : this.firstCharOffsetByLineMinusOne[i - 1];
        return new position/* Position */.L(this.lineRange.start + i + 1, offset - offsetOfFirstCharInLine + 1 + this.offsetByLine[i]);
    }
    translateRange(range) {
        return core_range/* Range */.e.fromPositions(this.translateOffset(range.start), this.translateOffset(range.endExclusive));
    }
    /**
     * Finds the word that contains the character at the given offset
     */
    findWordContaining(offset) {
        if (offset < 0 || offset >= this.elements.length) {
            return undefined;
        }
        if (!isWordChar(this.elements[offset])) {
            return undefined;
        }
        // find start
        let start = offset;
        while (start > 0 && isWordChar(this.elements[start - 1])) {
            start--;
        }
        // find end
        let end = offset;
        while (end < this.elements.length && isWordChar(this.elements[end])) {
            end++;
        }
        return new offsetRange/* OffsetRange */.q(start, end);
    }
    countLinesIn(range) {
        return this.translateOffset(range.endExclusive).lineNumber - this.translateOffset(range.start).lineNumber;
    }
}
function isWordChar(charCode) {
    return charCode >= 97 /* CharCode.a */ && charCode <= 122 /* CharCode.z */
        || charCode >= 65 /* CharCode.A */ && charCode <= 90 /* CharCode.Z */
        || charCode >= 48 /* CharCode.Digit0 */ && charCode <= 57 /* CharCode.Digit9 */;
}
const score = {
    [0 /* CharBoundaryCategory.WordLower */]: 0,
    [1 /* CharBoundaryCategory.WordUpper */]: 0,
    [2 /* CharBoundaryCategory.WordNumber */]: 0,
    [3 /* CharBoundaryCategory.End */]: 10,
    [4 /* CharBoundaryCategory.Other */]: 2,
    [5 /* CharBoundaryCategory.Space */]: 3,
    [6 /* CharBoundaryCategory.LineBreakCR */]: 10,
    [7 /* CharBoundaryCategory.LineBreakLF */]: 10,
};
function getCategoryBoundaryScore(category) {
    return score[category];
}
function getCategory(charCode) {
    if (charCode === 10 /* CharCode.LineFeed */) {
        return 7 /* CharBoundaryCategory.LineBreakLF */;
    }
    else if (charCode === 13 /* CharCode.CarriageReturn */) {
        return 6 /* CharBoundaryCategory.LineBreakCR */;
    }
    else if (isSpace(charCode)) {
        return 5 /* CharBoundaryCategory.Space */;
    }
    else if (charCode >= 97 /* CharCode.a */ && charCode <= 122 /* CharCode.z */) {
        return 0 /* CharBoundaryCategory.WordLower */;
    }
    else if (charCode >= 65 /* CharCode.A */ && charCode <= 90 /* CharCode.Z */) {
        return 1 /* CharBoundaryCategory.WordUpper */;
    }
    else if (charCode >= 48 /* CharCode.Digit0 */ && charCode <= 57 /* CharCode.Digit9 */) {
        return 2 /* CharBoundaryCategory.WordNumber */;
    }
    else if (charCode === -1) {
        return 3 /* CharBoundaryCategory.End */;
    }
    else {
        return 4 /* CharBoundaryCategory.Other */;
    }
}
function isSpace(charCode) {
    return charCode === 32 /* CharCode.Space */ || charCode === 9 /* CharCode.Tab */;
}
const chrKeys = new Map();
function getKey(chr) {
    let key = chrKeys.get(chr);
    if (key === undefined) {
        key = chrKeys.size;
        chrKeys.set(chr, key);
    }
    return key;
}
class LineRangeFragment {
    constructor(range, lines) {
        this.range = range;
        this.lines = lines;
        this.histogram = [];
        let counter = 0;
        for (let i = range.startLineNumber - 1; i < range.endLineNumberExclusive - 1; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                counter++;
                const chr = line[j];
                const key = getKey(chr);
                this.histogram[key] = (this.histogram[key] || 0) + 1;
            }
            counter++;
            const key = getKey('\n');
            this.histogram[key] = (this.histogram[key] || 0) + 1;
        }
        this.totalCount = counter;
    }
    computeSimilarity(other) {
        var _a, _b;
        let sumDifferences = 0;
        const maxLength = Math.max(this.histogram.length, other.histogram.length);
        for (let i = 0; i < maxLength; i++) {
            sumDifferences += Math.abs(((_a = this.histogram[i]) !== null && _a !== void 0 ? _a : 0) - ((_b = other.histogram[i]) !== null && _b !== void 0 ? _b : 0));
        }
        return 1 - (sumDifferences / (this.totalCount + other.totalCount));
    }
}


/***/ }),

/***/ 57362:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ InternalEditorAction; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class InternalEditorAction {
    constructor(id, label, alias, precondition, run, contextKeyService) {
        this.id = id;
        this.label = label;
        this.alias = alias;
        this._precondition = precondition;
        this._run = run;
        this._contextKeyService = contextKeyService;
    }
    isSupported() {
        return this._contextKeyService.contextMatchesRules(this._precondition);
    }
    run(args) {
        if (!this.isSupported()) {
            return Promise.resolve(undefined);
        }
        return this._run(args);
    }
}


/***/ }),

/***/ 96341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ EditorType; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The type of the `IEditor`.
 */
const EditorType = {
    ICodeEditor: 'vs.editor.ICodeEditor',
    IDiffEditor: 'vs.editor.IDiffEditor'
};


/***/ }),

/***/ 57584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ EditorContextKeys; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80757);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78658);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var EditorContextKeys;
(function (EditorContextKeys) {
    EditorContextKeys.editorSimpleInput = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorSimpleInput', false, true);
    /**
     * A context key that is set when the editor's text has focus (cursor is blinking).
     * Is false when focus is in simple editor widgets (repl input, scm commit input).
     */
    EditorContextKeys.editorTextFocus = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorTextFocus', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorTextFocus', "Whether the editor text has focus (cursor is blinking)"));
    /**
     * A context key that is set when the editor's text or an editor's widget has focus.
     */
    EditorContextKeys.focus = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorFocus', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorFocus', "Whether the editor or an editor widget has focus (e.g. focus is in the find widget)"));
    /**
     * A context key that is set when any editor input has focus (regular editor, repl input...).
     */
    EditorContextKeys.textInputFocus = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('textInputFocus', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('textInputFocus', "Whether an editor or a rich text input has focus (cursor is blinking)"));
    EditorContextKeys.readOnly = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorReadonly', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorReadonly', "Whether the editor is read-only"));
    EditorContextKeys.inDiffEditor = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('inDiffEditor', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inDiffEditor', "Whether the context is a diff editor"));
    EditorContextKeys.isEmbeddedDiffEditor = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('isEmbeddedDiffEditor', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('isEmbeddedDiffEditor', "Whether the context is an embedded diff editor"));
    EditorContextKeys.accessibleDiffViewerVisible = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('accessibleDiffViewerVisible', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibleDiffViewerVisible', "Whether the accessible diff viewer is visible"));
    EditorContextKeys.columnSelection = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorColumnSelection', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorColumnSelection', "Whether `editor.columnSelection` is enabled"));
    EditorContextKeys.writable = EditorContextKeys.readOnly.toNegated();
    EditorContextKeys.hasNonEmptySelection = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasSelection', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasSelection', "Whether the editor has text selected"));
    EditorContextKeys.hasOnlyEmptySelection = EditorContextKeys.hasNonEmptySelection.toNegated();
    EditorContextKeys.hasMultipleSelections = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasMultipleSelections', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasMultipleSelections', "Whether the editor has multiple selections"));
    EditorContextKeys.hasSingleSelection = EditorContextKeys.hasMultipleSelections.toNegated();
    EditorContextKeys.tabMovesFocus = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorTabMovesFocus', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorTabMovesFocus', "Whether `Tab` will move focus out of the editor"));
    EditorContextKeys.tabDoesNotMoveFocus = EditorContextKeys.tabMovesFocus.toNegated();
    EditorContextKeys.isInWalkThroughSnippet = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('isInEmbeddedEditor', false, true);
    EditorContextKeys.canUndo = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('canUndo', false, true);
    EditorContextKeys.canRedo = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('canRedo', false, true);
    EditorContextKeys.hoverVisible = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHoverVisible', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHoverVisible', "Whether the editor hover is visible"));
    EditorContextKeys.hoverFocused = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHoverFocused', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHoverFocused', "Whether the editor hover is focused"));
    EditorContextKeys.stickyScrollFocused = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('stickyScrollFocused', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('stickyScrollFocused', "Whether the sticky scroll is focused"));
    EditorContextKeys.stickyScrollVisible = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('stickyScrollVisible', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('stickyScrollVisible', "Whether the sticky scroll is visible"));
    EditorContextKeys.standaloneColorPickerVisible = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('standaloneColorPickerVisible', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('standaloneColorPickerVisible', "Whether the standalone color picker is visible"));
    EditorContextKeys.standaloneColorPickerFocused = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('standaloneColorPickerFocused', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('standaloneColorPickerFocused', "Whether the standalone color picker is focused"));
    /**
     * A context key that is set when an editor is part of a larger editor, like notebooks or
     * (future) a diff editor
     */
    EditorContextKeys.inCompositeEditor = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('inCompositeEditor', undefined, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inCompositeEditor', "Whether the editor is part of a larger editor (e.g. notebooks)"));
    EditorContextKeys.notInCompositeEditor = EditorContextKeys.inCompositeEditor.toNegated();
    // -- mode context keys
    EditorContextKeys.languageId = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorLangId', '', _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorLangId', "The language identifier of the editor"));
    EditorContextKeys.hasCompletionItemProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasCompletionItemProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasCompletionItemProvider', "Whether the editor has a completion item provider"));
    EditorContextKeys.hasCodeActionsProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasCodeActionsProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasCodeActionsProvider', "Whether the editor has a code actions provider"));
    EditorContextKeys.hasCodeLensProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasCodeLensProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasCodeLensProvider', "Whether the editor has a code lens provider"));
    EditorContextKeys.hasDefinitionProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDefinitionProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDefinitionProvider', "Whether the editor has a definition provider"));
    EditorContextKeys.hasDeclarationProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDeclarationProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDeclarationProvider', "Whether the editor has a declaration provider"));
    EditorContextKeys.hasImplementationProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasImplementationProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasImplementationProvider', "Whether the editor has an implementation provider"));
    EditorContextKeys.hasTypeDefinitionProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasTypeDefinitionProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasTypeDefinitionProvider', "Whether the editor has a type definition provider"));
    EditorContextKeys.hasHoverProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasHoverProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasHoverProvider', "Whether the editor has a hover provider"));
    EditorContextKeys.hasDocumentHighlightProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDocumentHighlightProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDocumentHighlightProvider', "Whether the editor has a document highlight provider"));
    EditorContextKeys.hasDocumentSymbolProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDocumentSymbolProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDocumentSymbolProvider', "Whether the editor has a document symbol provider"));
    EditorContextKeys.hasReferenceProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasReferenceProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasReferenceProvider', "Whether the editor has a reference provider"));
    EditorContextKeys.hasRenameProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasRenameProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasRenameProvider', "Whether the editor has a rename provider"));
    EditorContextKeys.hasSignatureHelpProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasSignatureHelpProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasSignatureHelpProvider', "Whether the editor has a signature help provider"));
    EditorContextKeys.hasInlayHintsProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasInlayHintsProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasInlayHintsProvider', "Whether the editor has an inline hints provider"));
    // -- mode context keys: formatting
    EditorContextKeys.hasDocumentFormattingProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDocumentFormattingProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDocumentFormattingProvider', "Whether the editor has a document formatting provider"));
    EditorContextKeys.hasDocumentSelectionFormattingProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasDocumentSelectionFormattingProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasDocumentSelectionFormattingProvider', "Whether the editor has a document selection formatting provider"));
    EditorContextKeys.hasMultipleDocumentFormattingProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasMultipleDocumentFormattingProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasMultipleDocumentFormattingProvider', "Whether the editor has multiple document formatting providers"));
    EditorContextKeys.hasMultipleDocumentSelectionFormattingProvider = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_1__/* .RawContextKey */ .uy('editorHasMultipleDocumentSelectionFormattingProvider', false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorHasMultipleDocumentSelectionFormattingProvider', "Whether the editor has multiple document selection formatting providers"));
})(EditorContextKeys || (EditorContextKeys = {}));


/***/ }),

/***/ 56249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ getEditorFeatures; },
/* harmony export */   y: function() { return /* binding */ registerEditorFeature; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const editorFeatures = [];
/**
 * Registers an editor feature. Editor features will be instantiated only once, as soon as
 * the first code editor is instantiated.
 */
function registerEditorFeature(ctor) {
    editorFeatures.push(ctor);
}
function getEditorFeatures() {
    return editorFeatures.slice(0);
}


/***/ }),

/***/ 68923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ EditorTheme; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditorTheme {
    get type() {
        return this._theme.type;
    }
    get value() {
        return this._theme;
    }
    constructor(theme) {
        this._theme = theme;
    }
    update(theme) {
        this._theme = theme;
    }
    getColor(color) {
        return this._theme.getColor(color);
    }
}


/***/ })

}]);