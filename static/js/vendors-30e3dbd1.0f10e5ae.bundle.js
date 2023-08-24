"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-30e3dbd1"],{

/***/ 33633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ MirrorTextModel; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65201);
/* harmony import */ var _prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95259);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class MirrorTextModel {
    constructor(uri, lines, eol, versionId) {
        this._uri = uri;
        this._lines = lines;
        this._eol = eol;
        this._versionId = versionId;
        this._lineStarts = null;
        this._cachedTextValue = null;
    }
    dispose() {
        this._lines.length = 0;
    }
    get version() {
        return this._versionId;
    }
    getText() {
        if (this._cachedTextValue === null) {
            this._cachedTextValue = this._lines.join(this._eol);
        }
        return this._cachedTextValue;
    }
    onEvents(e) {
        if (e.eol && e.eol !== this._eol) {
            this._eol = e.eol;
            this._lineStarts = null;
        }
        // Update my lines
        const changes = e.changes;
        for (const change of changes) {
            this._acceptDeleteRange(change.range);
            this._acceptInsertText(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(change.range.startLineNumber, change.range.startColumn), change.text);
        }
        this._versionId = e.versionId;
        this._cachedTextValue = null;
    }
    _ensureLineStarts() {
        if (!this._lineStarts) {
            const eolLength = this._eol.length;
            const linesLength = this._lines.length;
            const lineStartValues = new Uint32Array(linesLength);
            for (let i = 0; i < linesLength; i++) {
                lineStartValues[i] = this._lines[i].length + eolLength;
            }
            this._lineStarts = new _prefixSumComputer_js__WEBPACK_IMPORTED_MODULE_1__/* .PrefixSumComputer */ .oQ(lineStartValues);
        }
    }
    /**
     * All changes to a line's text go through this method
     */
    _setLineText(lineIndex, newValue) {
        this._lines[lineIndex] = newValue;
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.setValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
        }
    }
    _acceptDeleteRange(range) {
        if (range.startLineNumber === range.endLineNumber) {
            if (range.startColumn === range.endColumn) {
                // Nothing to delete
                return;
            }
            // Delete text on the affected line
            this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
                + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
            return;
        }
        // Take remaining text on last line and append it to remaining text on first line
        this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1)
            + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
        // Delete middle lines
        this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
        }
    }
    _acceptInsertText(position, insertText) {
        if (insertText.length === 0) {
            // Nothing to insert
            return;
        }
        const insertLines = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .splitLines */ .uq)(insertText);
        if (insertLines.length === 1) {
            // Inserting text on one line
            this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
                + insertLines[0]
                + this._lines[position.lineNumber - 1].substring(position.column - 1));
            return;
        }
        // Append overflowing text from first line to the end of text to insert
        insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
        // Delete overflowing text from first line and insert text on first line
        this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1)
            + insertLines[0]);
        // Insert new lines & store lengths
        const newLengths = new Uint32Array(insertLines.length - 1);
        for (let i = 1; i < insertLines.length; i++) {
            this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
            newLengths[i - 1] = insertLines[i].length + this._eol.length;
        }
        if (this._lineStarts) {
            // update prefix sum
            this._lineStarts.insertValues(position.lineNumber, newLengths);
        }
    }
}


/***/ }),

/***/ 1605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nD: function() { return /* binding */ PieceTreeBase; },
  Lv: function() { return /* binding */ StringBuffer; },
  Nr: function() { return /* binding */ createLineStarts; },
  Xp: function() { return /* binding */ createLineStartsFast; }
});

// UNUSED EXPORTS: Piece

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(7783);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TreeNode {
    constructor(piece, color) {
        this.piece = piece;
        this.color = color;
        this.size_left = 0;
        this.lf_left = 0;
        this.parent = this;
        this.left = this;
        this.right = this;
    }
    next() {
        if (this.right !== SENTINEL) {
            return leftest(this.right);
        }
        let node = this;
        while (node.parent !== SENTINEL) {
            if (node.parent.left === node) {
                break;
            }
            node = node.parent;
        }
        if (node.parent === SENTINEL) {
            return SENTINEL;
        }
        else {
            return node.parent;
        }
    }
    prev() {
        if (this.left !== SENTINEL) {
            return righttest(this.left);
        }
        let node = this;
        while (node.parent !== SENTINEL) {
            if (node.parent.right === node) {
                break;
            }
            node = node.parent;
        }
        if (node.parent === SENTINEL) {
            return SENTINEL;
        }
        else {
            return node.parent;
        }
    }
    detach() {
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}
const SENTINEL = new TreeNode(null, 0 /* NodeColor.Black */);
SENTINEL.parent = SENTINEL;
SENTINEL.left = SENTINEL;
SENTINEL.right = SENTINEL;
SENTINEL.color = 0 /* NodeColor.Black */;
function leftest(node) {
    while (node.left !== SENTINEL) {
        node = node.left;
    }
    return node;
}
function righttest(node) {
    while (node.right !== SENTINEL) {
        node = node.right;
    }
    return node;
}
function calculateSize(node) {
    if (node === SENTINEL) {
        return 0;
    }
    return node.size_left + node.piece.length + calculateSize(node.right);
}
function calculateLF(node) {
    if (node === SENTINEL) {
        return 0;
    }
    return node.lf_left + node.piece.lineFeedCnt + calculateLF(node.right);
}
function resetSentinel() {
    SENTINEL.parent = SENTINEL;
}
function leftRotate(tree, x) {
    const y = x.right;
    // fix size_left
    y.size_left += x.size_left + (x.piece ? x.piece.length : 0);
    y.lf_left += x.lf_left + (x.piece ? x.piece.lineFeedCnt : 0);
    x.right = y.left;
    if (y.left !== SENTINEL) {
        y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === SENTINEL) {
        tree.root = y;
    }
    else if (x.parent.left === x) {
        x.parent.left = y;
    }
    else {
        x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
}
function rightRotate(tree, y) {
    const x = y.left;
    y.left = x.right;
    if (x.right !== SENTINEL) {
        x.right.parent = y;
    }
    x.parent = y.parent;
    // fix size_left
    y.size_left -= x.size_left + (x.piece ? x.piece.length : 0);
    y.lf_left -= x.lf_left + (x.piece ? x.piece.lineFeedCnt : 0);
    if (y.parent === SENTINEL) {
        tree.root = x;
    }
    else if (y === y.parent.right) {
        y.parent.right = x;
    }
    else {
        y.parent.left = x;
    }
    x.right = y;
    y.parent = x;
}
function rbDelete(tree, z) {
    let x;
    let y;
    if (z.left === SENTINEL) {
        y = z;
        x = y.right;
    }
    else if (z.right === SENTINEL) {
        y = z;
        x = y.left;
    }
    else {
        y = leftest(z.right);
        x = y.right;
    }
    if (y === tree.root) {
        tree.root = x;
        // if x is null, we are removing the only node
        x.color = 0 /* NodeColor.Black */;
        z.detach();
        resetSentinel();
        tree.root.parent = SENTINEL;
        return;
    }
    const yWasRed = (y.color === 1 /* NodeColor.Red */);
    if (y === y.parent.left) {
        y.parent.left = x;
    }
    else {
        y.parent.right = x;
    }
    if (y === z) {
        x.parent = y.parent;
        recomputeTreeMetadata(tree, x);
    }
    else {
        if (y.parent === z) {
            x.parent = y;
        }
        else {
            x.parent = y.parent;
        }
        // as we make changes to x's hierarchy, update size_left of subtree first
        recomputeTreeMetadata(tree, x);
        y.left = z.left;
        y.right = z.right;
        y.parent = z.parent;
        y.color = z.color;
        if (z === tree.root) {
            tree.root = y;
        }
        else {
            if (z === z.parent.left) {
                z.parent.left = y;
            }
            else {
                z.parent.right = y;
            }
        }
        if (y.left !== SENTINEL) {
            y.left.parent = y;
        }
        if (y.right !== SENTINEL) {
            y.right.parent = y;
        }
        // update metadata
        // we replace z with y, so in this sub tree, the length change is z.item.length
        y.size_left = z.size_left;
        y.lf_left = z.lf_left;
        recomputeTreeMetadata(tree, y);
    }
    z.detach();
    if (x.parent.left === x) {
        const newSizeLeft = calculateSize(x);
        const newLFLeft = calculateLF(x);
        if (newSizeLeft !== x.parent.size_left || newLFLeft !== x.parent.lf_left) {
            const delta = newSizeLeft - x.parent.size_left;
            const lf_delta = newLFLeft - x.parent.lf_left;
            x.parent.size_left = newSizeLeft;
            x.parent.lf_left = newLFLeft;
            updateTreeMetadata(tree, x.parent, delta, lf_delta);
        }
    }
    recomputeTreeMetadata(tree, x.parent);
    if (yWasRed) {
        resetSentinel();
        return;
    }
    // RB-DELETE-FIXUP
    let w;
    while (x !== tree.root && x.color === 0 /* NodeColor.Black */) {
        if (x === x.parent.left) {
            w = x.parent.right;
            if (w.color === 1 /* NodeColor.Red */) {
                w.color = 0 /* NodeColor.Black */;
                x.parent.color = 1 /* NodeColor.Red */;
                leftRotate(tree, x.parent);
                w = x.parent.right;
            }
            if (w.left.color === 0 /* NodeColor.Black */ && w.right.color === 0 /* NodeColor.Black */) {
                w.color = 1 /* NodeColor.Red */;
                x = x.parent;
            }
            else {
                if (w.right.color === 0 /* NodeColor.Black */) {
                    w.left.color = 0 /* NodeColor.Black */;
                    w.color = 1 /* NodeColor.Red */;
                    rightRotate(tree, w);
                    w = x.parent.right;
                }
                w.color = x.parent.color;
                x.parent.color = 0 /* NodeColor.Black */;
                w.right.color = 0 /* NodeColor.Black */;
                leftRotate(tree, x.parent);
                x = tree.root;
            }
        }
        else {
            w = x.parent.left;
            if (w.color === 1 /* NodeColor.Red */) {
                w.color = 0 /* NodeColor.Black */;
                x.parent.color = 1 /* NodeColor.Red */;
                rightRotate(tree, x.parent);
                w = x.parent.left;
            }
            if (w.left.color === 0 /* NodeColor.Black */ && w.right.color === 0 /* NodeColor.Black */) {
                w.color = 1 /* NodeColor.Red */;
                x = x.parent;
            }
            else {
                if (w.left.color === 0 /* NodeColor.Black */) {
                    w.right.color = 0 /* NodeColor.Black */;
                    w.color = 1 /* NodeColor.Red */;
                    leftRotate(tree, w);
                    w = x.parent.left;
                }
                w.color = x.parent.color;
                x.parent.color = 0 /* NodeColor.Black */;
                w.left.color = 0 /* NodeColor.Black */;
                rightRotate(tree, x.parent);
                x = tree.root;
            }
        }
    }
    x.color = 0 /* NodeColor.Black */;
    resetSentinel();
}
function fixInsert(tree, x) {
    recomputeTreeMetadata(tree, x);
    while (x !== tree.root && x.parent.color === 1 /* NodeColor.Red */) {
        if (x.parent === x.parent.parent.left) {
            const y = x.parent.parent.right;
            if (y.color === 1 /* NodeColor.Red */) {
                x.parent.color = 0 /* NodeColor.Black */;
                y.color = 0 /* NodeColor.Black */;
                x.parent.parent.color = 1 /* NodeColor.Red */;
                x = x.parent.parent;
            }
            else {
                if (x === x.parent.right) {
                    x = x.parent;
                    leftRotate(tree, x);
                }
                x.parent.color = 0 /* NodeColor.Black */;
                x.parent.parent.color = 1 /* NodeColor.Red */;
                rightRotate(tree, x.parent.parent);
            }
        }
        else {
            const y = x.parent.parent.left;
            if (y.color === 1 /* NodeColor.Red */) {
                x.parent.color = 0 /* NodeColor.Black */;
                y.color = 0 /* NodeColor.Black */;
                x.parent.parent.color = 1 /* NodeColor.Red */;
                x = x.parent.parent;
            }
            else {
                if (x === x.parent.left) {
                    x = x.parent;
                    rightRotate(tree, x);
                }
                x.parent.color = 0 /* NodeColor.Black */;
                x.parent.parent.color = 1 /* NodeColor.Red */;
                leftRotate(tree, x.parent.parent);
            }
        }
    }
    tree.root.color = 0 /* NodeColor.Black */;
}
function updateTreeMetadata(tree, x, delta, lineFeedCntDelta) {
    // node length change or line feed count change
    while (x !== tree.root && x !== SENTINEL) {
        if (x.parent.left === x) {
            x.parent.size_left += delta;
            x.parent.lf_left += lineFeedCntDelta;
        }
        x = x.parent;
    }
}
function recomputeTreeMetadata(tree, x) {
    let delta = 0;
    let lf_delta = 0;
    if (x === tree.root) {
        return;
    }
    // go upwards till the node whose left subtree is changed.
    while (x !== tree.root && x === x.parent.right) {
        x = x.parent;
    }
    if (x === tree.root) {
        // well, it means we add a node to the end (inorder)
        return;
    }
    // x is the node whose right subtree is changed.
    x = x.parent;
    delta = calculateSize(x.left) - x.size_left;
    lf_delta = calculateLF(x.left) - x.lf_left;
    x.size_left += delta;
    x.lf_left += lf_delta;
    // go upwards till root. O(logN)
    while (x !== tree.root && (delta !== 0 || lf_delta !== 0)) {
        if (x.parent.left === x) {
            x.parent.size_left += delta;
            x.parent.lf_left += lf_delta;
        }
        x = x.parent;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js
var textModelSearch = __webpack_require__(55814);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





// const lfRegex = new RegExp(/\r\n|\r|\n/g);
const AverageBufferSize = 65535;
function createUintArray(arr) {
    let r;
    if (arr[arr.length - 1] < 65536) {
        r = new Uint16Array(arr.length);
    }
    else {
        r = new Uint32Array(arr.length);
    }
    r.set(arr, 0);
    return r;
}
class LineStarts {
    constructor(lineStarts, cr, lf, crlf, isBasicASCII) {
        this.lineStarts = lineStarts;
        this.cr = cr;
        this.lf = lf;
        this.crlf = crlf;
        this.isBasicASCII = isBasicASCII;
    }
}
function createLineStartsFast(str, readonly = true) {
    const r = [0];
    let rLength = 1;
    for (let i = 0, len = str.length; i < len; i++) {
        const chr = str.charCodeAt(i);
        if (chr === 13 /* CharCode.CarriageReturn */) {
            if (i + 1 < len && str.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                // \r\n... case
                r[rLength++] = i + 2;
                i++; // skip \n
            }
            else {
                // \r... case
                r[rLength++] = i + 1;
            }
        }
        else if (chr === 10 /* CharCode.LineFeed */) {
            r[rLength++] = i + 1;
        }
    }
    if (readonly) {
        return createUintArray(r);
    }
    else {
        return r;
    }
}
function createLineStarts(r, str) {
    r.length = 0;
    r[0] = 0;
    let rLength = 1;
    let cr = 0, lf = 0, crlf = 0;
    let isBasicASCII = true;
    for (let i = 0, len = str.length; i < len; i++) {
        const chr = str.charCodeAt(i);
        if (chr === 13 /* CharCode.CarriageReturn */) {
            if (i + 1 < len && str.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                // \r\n... case
                crlf++;
                r[rLength++] = i + 2;
                i++; // skip \n
            }
            else {
                cr++;
                // \r... case
                r[rLength++] = i + 1;
            }
        }
        else if (chr === 10 /* CharCode.LineFeed */) {
            lf++;
            r[rLength++] = i + 1;
        }
        else {
            if (isBasicASCII) {
                if (chr !== 9 /* CharCode.Tab */ && (chr < 32 || chr > 126)) {
                    isBasicASCII = false;
                }
            }
        }
    }
    const result = new LineStarts(createUintArray(r), cr, lf, crlf, isBasicASCII);
    r.length = 0;
    return result;
}
class Piece {
    constructor(bufferIndex, start, end, lineFeedCnt, length) {
        this.bufferIndex = bufferIndex;
        this.start = start;
        this.end = end;
        this.lineFeedCnt = lineFeedCnt;
        this.length = length;
    }
}
class StringBuffer {
    constructor(buffer, lineStarts) {
        this.buffer = buffer;
        this.lineStarts = lineStarts;
    }
}
/**
 * Readonly snapshot for piece tree.
 * In a real multiple thread environment, to make snapshot reading always work correctly, we need to
 * 1. Make TreeNode.piece immutable, then reading and writing can run in parallel.
 * 2. TreeNode/Buffers normalization should not happen during snapshot reading.
 */
class PieceTreeSnapshot {
    constructor(tree, BOM) {
        this._pieces = [];
        this._tree = tree;
        this._BOM = BOM;
        this._index = 0;
        if (tree.root !== SENTINEL) {
            tree.iterate(tree.root, node => {
                if (node !== SENTINEL) {
                    this._pieces.push(node.piece);
                }
                return true;
            });
        }
    }
    read() {
        if (this._pieces.length === 0) {
            if (this._index === 0) {
                this._index++;
                return this._BOM;
            }
            else {
                return null;
            }
        }
        if (this._index > this._pieces.length - 1) {
            return null;
        }
        if (this._index === 0) {
            return this._BOM + this._tree.getPieceContent(this._pieces[this._index++]);
        }
        return this._tree.getPieceContent(this._pieces[this._index++]);
    }
}
class PieceTreeSearchCache {
    constructor(limit) {
        this._limit = limit;
        this._cache = [];
    }
    get(offset) {
        for (let i = this._cache.length - 1; i >= 0; i--) {
            const nodePos = this._cache[i];
            if (nodePos.nodeStartOffset <= offset && nodePos.nodeStartOffset + nodePos.node.piece.length >= offset) {
                return nodePos;
            }
        }
        return null;
    }
    get2(lineNumber) {
        for (let i = this._cache.length - 1; i >= 0; i--) {
            const nodePos = this._cache[i];
            if (nodePos.nodeStartLineNumber && nodePos.nodeStartLineNumber < lineNumber && nodePos.nodeStartLineNumber + nodePos.node.piece.lineFeedCnt >= lineNumber) {
                return nodePos;
            }
        }
        return null;
    }
    set(nodePosition) {
        if (this._cache.length >= this._limit) {
            this._cache.shift();
        }
        this._cache.push(nodePosition);
    }
    validate(offset) {
        let hasInvalidVal = false;
        const tmp = this._cache;
        for (let i = 0; i < tmp.length; i++) {
            const nodePos = tmp[i];
            if (nodePos.node.parent === null || nodePos.nodeStartOffset >= offset) {
                tmp[i] = null;
                hasInvalidVal = true;
                continue;
            }
        }
        if (hasInvalidVal) {
            const newArr = [];
            for (const entry of tmp) {
                if (entry !== null) {
                    newArr.push(entry);
                }
            }
            this._cache = newArr;
        }
    }
}
class PieceTreeBase {
    constructor(chunks, eol, eolNormalized) {
        this.create(chunks, eol, eolNormalized);
    }
    create(chunks, eol, eolNormalized) {
        this._buffers = [
            new StringBuffer('', [0])
        ];
        this._lastChangeBufferPos = { line: 0, column: 0 };
        this.root = SENTINEL;
        this._lineCnt = 1;
        this._length = 0;
        this._EOL = eol;
        this._EOLLength = eol.length;
        this._EOLNormalized = eolNormalized;
        let lastNode = null;
        for (let i = 0, len = chunks.length; i < len; i++) {
            if (chunks[i].buffer.length > 0) {
                if (!chunks[i].lineStarts) {
                    chunks[i].lineStarts = createLineStartsFast(chunks[i].buffer);
                }
                const piece = new Piece(i + 1, { line: 0, column: 0 }, { line: chunks[i].lineStarts.length - 1, column: chunks[i].buffer.length - chunks[i].lineStarts[chunks[i].lineStarts.length - 1] }, chunks[i].lineStarts.length - 1, chunks[i].buffer.length);
                this._buffers.push(chunks[i]);
                lastNode = this.rbInsertRight(lastNode, piece);
            }
        }
        this._searchCache = new PieceTreeSearchCache(1);
        this._lastVisitedLine = { lineNumber: 0, value: '' };
        this.computeBufferMetadata();
    }
    normalizeEOL(eol) {
        const averageBufferSize = AverageBufferSize;
        const min = averageBufferSize - Math.floor(averageBufferSize / 3);
        const max = min * 2;
        let tempChunk = '';
        let tempChunkLen = 0;
        const chunks = [];
        this.iterate(this.root, node => {
            const str = this.getNodeContent(node);
            const len = str.length;
            if (tempChunkLen <= min || tempChunkLen + len < max) {
                tempChunk += str;
                tempChunkLen += len;
                return true;
            }
            // flush anyways
            const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
            chunks.push(new StringBuffer(text, createLineStartsFast(text)));
            tempChunk = str;
            tempChunkLen = len;
            return true;
        });
        if (tempChunkLen > 0) {
            const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
            chunks.push(new StringBuffer(text, createLineStartsFast(text)));
        }
        this.create(chunks, eol, true);
    }
    // #region Buffer API
    getEOL() {
        return this._EOL;
    }
    setEOL(newEOL) {
        this._EOL = newEOL;
        this._EOLLength = this._EOL.length;
        this.normalizeEOL(newEOL);
    }
    createSnapshot(BOM) {
        return new PieceTreeSnapshot(this, BOM);
    }
    getOffsetAt(lineNumber, column) {
        let leftLen = 0; // inorder
        let x = this.root;
        while (x !== SENTINEL) {
            if (x.left !== SENTINEL && x.lf_left + 1 >= lineNumber) {
                x = x.left;
            }
            else if (x.lf_left + x.piece.lineFeedCnt + 1 >= lineNumber) {
                leftLen += x.size_left;
                // lineNumber >= 2
                const accumualtedValInCurrentIndex = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                return leftLen += accumualtedValInCurrentIndex + column - 1;
            }
            else {
                lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                leftLen += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        return leftLen;
    }
    getPositionAt(offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        let x = this.root;
        let lfCnt = 0;
        const originalOffset = offset;
        while (x !== SENTINEL) {
            if (x.size_left !== 0 && x.size_left >= offset) {
                x = x.left;
            }
            else if (x.size_left + x.piece.length >= offset) {
                const out = this.getIndexOf(x, offset - x.size_left);
                lfCnt += x.lf_left + out.index;
                if (out.index === 0) {
                    const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
                    const column = originalOffset - lineStartOffset;
                    return new position/* Position */.L(lfCnt + 1, column + 1);
                }
                return new position/* Position */.L(lfCnt + 1, out.remainder + 1);
            }
            else {
                offset -= x.size_left + x.piece.length;
                lfCnt += x.lf_left + x.piece.lineFeedCnt;
                if (x.right === SENTINEL) {
                    // last node
                    const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
                    const column = originalOffset - offset - lineStartOffset;
                    return new position/* Position */.L(lfCnt + 1, column + 1);
                }
                else {
                    x = x.right;
                }
            }
        }
        return new position/* Position */.L(1, 1);
    }
    getValueInRange(range, eol) {
        if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
            return '';
        }
        const startPosition = this.nodeAt2(range.startLineNumber, range.startColumn);
        const endPosition = this.nodeAt2(range.endLineNumber, range.endColumn);
        const value = this.getValueInRange2(startPosition, endPosition);
        if (eol) {
            if (eol !== this._EOL || !this._EOLNormalized) {
                return value.replace(/\r\n|\r|\n/g, eol);
            }
            if (eol === this.getEOL() && this._EOLNormalized) {
                if (eol === '\r\n') {
                }
                return value;
            }
            return value.replace(/\r\n|\r|\n/g, eol);
        }
        return value;
    }
    getValueInRange2(startPosition, endPosition) {
        if (startPosition.node === endPosition.node) {
            const node = startPosition.node;
            const buffer = this._buffers[node.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
            return buffer.substring(startOffset + startPosition.remainder, startOffset + endPosition.remainder);
        }
        let x = startPosition.node;
        const buffer = this._buffers[x.piece.bufferIndex].buffer;
        const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
        let ret = buffer.substring(startOffset + startPosition.remainder, startOffset + x.piece.length);
        x = x.next();
        while (x !== SENTINEL) {
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
            if (x === endPosition.node) {
                ret += buffer.substring(startOffset, startOffset + endPosition.remainder);
                break;
            }
            else {
                ret += buffer.substr(startOffset, x.piece.length);
            }
            x = x.next();
        }
        return ret;
    }
    getLinesContent() {
        const lines = [];
        let linesLength = 0;
        let currentLine = '';
        let danglingCR = false;
        this.iterate(this.root, node => {
            if (node === SENTINEL) {
                return true;
            }
            const piece = node.piece;
            let pieceLength = piece.length;
            if (pieceLength === 0) {
                return true;
            }
            const buffer = this._buffers[piece.bufferIndex].buffer;
            const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
            const pieceStartLine = piece.start.line;
            const pieceEndLine = piece.end.line;
            let pieceStartOffset = lineStarts[pieceStartLine] + piece.start.column;
            if (danglingCR) {
                if (buffer.charCodeAt(pieceStartOffset) === 10 /* CharCode.LineFeed */) {
                    // pretend the \n was in the previous piece..
                    pieceStartOffset++;
                    pieceLength--;
                }
                lines[linesLength++] = currentLine;
                currentLine = '';
                danglingCR = false;
                if (pieceLength === 0) {
                    return true;
                }
            }
            if (pieceStartLine === pieceEndLine) {
                // this piece has no new lines
                if (!this._EOLNormalized && buffer.charCodeAt(pieceStartOffset + pieceLength - 1) === 13 /* CharCode.CarriageReturn */) {
                    danglingCR = true;
                    currentLine += buffer.substr(pieceStartOffset, pieceLength - 1);
                }
                else {
                    currentLine += buffer.substr(pieceStartOffset, pieceLength);
                }
                return true;
            }
            // add the text before the first line start in this piece
            currentLine += (this._EOLNormalized
                ? buffer.substring(pieceStartOffset, Math.max(pieceStartOffset, lineStarts[pieceStartLine + 1] - this._EOLLength))
                : buffer.substring(pieceStartOffset, lineStarts[pieceStartLine + 1]).replace(/(\r\n|\r|\n)$/, ''));
            lines[linesLength++] = currentLine;
            for (let line = pieceStartLine + 1; line < pieceEndLine; line++) {
                currentLine = (this._EOLNormalized
                    ? buffer.substring(lineStarts[line], lineStarts[line + 1] - this._EOLLength)
                    : buffer.substring(lineStarts[line], lineStarts[line + 1]).replace(/(\r\n|\r|\n)$/, ''));
                lines[linesLength++] = currentLine;
            }
            if (!this._EOLNormalized && buffer.charCodeAt(lineStarts[pieceEndLine] + piece.end.column - 1) === 13 /* CharCode.CarriageReturn */) {
                danglingCR = true;
                if (piece.end.column === 0) {
                    // The last line ended with a \r, let's undo the push, it will be pushed by next iteration
                    linesLength--;
                }
                else {
                    currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column - 1);
                }
            }
            else {
                currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column);
            }
            return true;
        });
        if (danglingCR) {
            lines[linesLength++] = currentLine;
            currentLine = '';
        }
        lines[linesLength++] = currentLine;
        return lines;
    }
    getLength() {
        return this._length;
    }
    getLineCount() {
        return this._lineCnt;
    }
    getLineContent(lineNumber) {
        if (this._lastVisitedLine.lineNumber === lineNumber) {
            return this._lastVisitedLine.value;
        }
        this._lastVisitedLine.lineNumber = lineNumber;
        if (lineNumber === this._lineCnt) {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber);
        }
        else if (this._EOLNormalized) {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber, this._EOLLength);
        }
        else {
            this._lastVisitedLine.value = this.getLineRawContent(lineNumber).replace(/(\r\n|\r|\n)$/, '');
        }
        return this._lastVisitedLine.value;
    }
    _getCharCode(nodePos) {
        if (nodePos.remainder === nodePos.node.piece.length) {
            // the char we want to fetch is at the head of next node.
            const matchingNode = nodePos.node.next();
            if (!matchingNode) {
                return 0;
            }
            const buffer = this._buffers[matchingNode.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(matchingNode.piece.bufferIndex, matchingNode.piece.start);
            return buffer.buffer.charCodeAt(startOffset);
        }
        else {
            const buffer = this._buffers[nodePos.node.piece.bufferIndex];
            const startOffset = this.offsetInBuffer(nodePos.node.piece.bufferIndex, nodePos.node.piece.start);
            const targetOffset = startOffset + nodePos.remainder;
            return buffer.buffer.charCodeAt(targetOffset);
        }
    }
    getLineCharCode(lineNumber, index) {
        const nodePos = this.nodeAt2(lineNumber, index + 1);
        return this._getCharCode(nodePos);
    }
    getLineLength(lineNumber) {
        if (lineNumber === this.getLineCount()) {
            const startOffset = this.getOffsetAt(lineNumber, 1);
            return this.getLength() - startOffset;
        }
        return this.getOffsetAt(lineNumber + 1, 1) - this.getOffsetAt(lineNumber, 1) - this._EOLLength;
    }
    findMatchesInNode(node, searcher, startLineNumber, startColumn, startCursor, endCursor, searchData, captureMatches, limitResultCount, resultLen, result) {
        const buffer = this._buffers[node.piece.bufferIndex];
        const startOffsetInBuffer = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
        const start = this.offsetInBuffer(node.piece.bufferIndex, startCursor);
        const end = this.offsetInBuffer(node.piece.bufferIndex, endCursor);
        let m;
        // Reset regex to search from the beginning
        const ret = { line: 0, column: 0 };
        let searchText;
        let offsetInBuffer;
        if (searcher._wordSeparators) {
            searchText = buffer.buffer.substring(start, end);
            offsetInBuffer = (offset) => offset + start;
            searcher.reset(0);
        }
        else {
            searchText = buffer.buffer;
            offsetInBuffer = (offset) => offset;
            searcher.reset(start);
        }
        do {
            m = searcher.next(searchText);
            if (m) {
                if (offsetInBuffer(m.index) >= end) {
                    return resultLen;
                }
                this.positionInBuffer(node, offsetInBuffer(m.index) - startOffsetInBuffer, ret);
                const lineFeedCnt = this.getLineFeedCnt(node.piece.bufferIndex, startCursor, ret);
                const retStartColumn = ret.line === startCursor.line ? ret.column - startCursor.column + startColumn : ret.column + 1;
                const retEndColumn = retStartColumn + m[0].length;
                result[resultLen++] = (0,textModelSearch/* createFindMatch */.iE)(new range/* Range */.e(startLineNumber + lineFeedCnt, retStartColumn, startLineNumber + lineFeedCnt, retEndColumn), m, captureMatches);
                if (offsetInBuffer(m.index) + m[0].length >= end) {
                    return resultLen;
                }
                if (resultLen >= limitResultCount) {
                    return resultLen;
                }
            }
        } while (m);
        return resultLen;
    }
    findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
        const result = [];
        let resultLen = 0;
        const searcher = new textModelSearch/* Searcher */.sz(searchData.wordSeparators, searchData.regex);
        let startPosition = this.nodeAt2(searchRange.startLineNumber, searchRange.startColumn);
        if (startPosition === null) {
            return [];
        }
        const endPosition = this.nodeAt2(searchRange.endLineNumber, searchRange.endColumn);
        if (endPosition === null) {
            return [];
        }
        let start = this.positionInBuffer(startPosition.node, startPosition.remainder);
        const end = this.positionInBuffer(endPosition.node, endPosition.remainder);
        if (startPosition.node === endPosition.node) {
            this.findMatchesInNode(startPosition.node, searcher, searchRange.startLineNumber, searchRange.startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
            return result;
        }
        let startLineNumber = searchRange.startLineNumber;
        let currentNode = startPosition.node;
        while (currentNode !== endPosition.node) {
            const lineBreakCnt = this.getLineFeedCnt(currentNode.piece.bufferIndex, start, currentNode.piece.end);
            if (lineBreakCnt >= 1) {
                // last line break position
                const lineStarts = this._buffers[currentNode.piece.bufferIndex].lineStarts;
                const startOffsetInBuffer = this.offsetInBuffer(currentNode.piece.bufferIndex, currentNode.piece.start);
                const nextLineStartOffset = lineStarts[start.line + lineBreakCnt];
                const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
                resultLen = this.findMatchesInNode(currentNode, searcher, startLineNumber, startColumn, start, this.positionInBuffer(currentNode, nextLineStartOffset - startOffsetInBuffer), searchData, captureMatches, limitResultCount, resultLen, result);
                if (resultLen >= limitResultCount) {
                    return result;
                }
                startLineNumber += lineBreakCnt;
            }
            const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
            // search for the remaining content
            if (startLineNumber === searchRange.endLineNumber) {
                const text = this.getLineContent(startLineNumber).substring(startColumn, searchRange.endColumn - 1);
                resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
                return result;
            }
            resultLen = this._findMatchesInLine(searchData, searcher, this.getLineContent(startLineNumber).substr(startColumn), startLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
            if (resultLen >= limitResultCount) {
                return result;
            }
            startLineNumber++;
            startPosition = this.nodeAt2(startLineNumber, 1);
            currentNode = startPosition.node;
            start = this.positionInBuffer(startPosition.node, startPosition.remainder);
        }
        if (startLineNumber === searchRange.endLineNumber) {
            const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
            const text = this.getLineContent(startLineNumber).substring(startColumn, searchRange.endColumn - 1);
            resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn, resultLen, result, captureMatches, limitResultCount);
            return result;
        }
        const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
        resultLen = this.findMatchesInNode(endPosition.node, searcher, startLineNumber, startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
        return result;
    }
    _findMatchesInLine(searchData, searcher, text, lineNumber, deltaOffset, resultLen, result, captureMatches, limitResultCount) {
        const wordSeparators = searchData.wordSeparators;
        if (!captureMatches && searchData.simpleSearch) {
            const searchString = searchData.simpleSearch;
            const searchStringLen = searchString.length;
            const textLength = text.length;
            let lastMatchIndex = -searchStringLen;
            while ((lastMatchIndex = text.indexOf(searchString, lastMatchIndex + searchStringLen)) !== -1) {
                if (!wordSeparators || (0,textModelSearch/* isValidMatch */.cM)(wordSeparators, text, textLength, lastMatchIndex, searchStringLen)) {
                    result[resultLen++] = new model/* FindMatch */.tk(new range/* Range */.e(lineNumber, lastMatchIndex + 1 + deltaOffset, lineNumber, lastMatchIndex + 1 + searchStringLen + deltaOffset), null);
                    if (resultLen >= limitResultCount) {
                        return resultLen;
                    }
                }
            }
            return resultLen;
        }
        let m;
        // Reset regex to search from the beginning
        searcher.reset(0);
        do {
            m = searcher.next(text);
            if (m) {
                result[resultLen++] = (0,textModelSearch/* createFindMatch */.iE)(new range/* Range */.e(lineNumber, m.index + 1 + deltaOffset, lineNumber, m.index + 1 + m[0].length + deltaOffset), m, captureMatches);
                if (resultLen >= limitResultCount) {
                    return resultLen;
                }
            }
        } while (m);
        return resultLen;
    }
    // #endregion
    // #region Piece Table
    insert(offset, value, eolNormalized = false) {
        this._EOLNormalized = this._EOLNormalized && eolNormalized;
        this._lastVisitedLine.lineNumber = 0;
        this._lastVisitedLine.value = '';
        if (this.root !== SENTINEL) {
            const { node, remainder, nodeStartOffset } = this.nodeAt(offset);
            const piece = node.piece;
            const bufferIndex = piece.bufferIndex;
            const insertPosInBuffer = this.positionInBuffer(node, remainder);
            if (node.piece.bufferIndex === 0 &&
                piece.end.line === this._lastChangeBufferPos.line &&
                piece.end.column === this._lastChangeBufferPos.column &&
                (nodeStartOffset + piece.length === offset) &&
                value.length < AverageBufferSize) {
                // changed buffer
                this.appendToNode(node, value);
                this.computeBufferMetadata();
                return;
            }
            if (nodeStartOffset === offset) {
                this.insertContentToNodeLeft(value, node);
                this._searchCache.validate(offset);
            }
            else if (nodeStartOffset + node.piece.length > offset) {
                // we are inserting into the middle of a node.
                const nodesToDel = [];
                let newRightPiece = new Piece(piece.bufferIndex, insertPosInBuffer, piece.end, this.getLineFeedCnt(piece.bufferIndex, insertPosInBuffer, piece.end), this.offsetInBuffer(bufferIndex, piece.end) - this.offsetInBuffer(bufferIndex, insertPosInBuffer));
                if (this.shouldCheckCRLF() && this.endWithCR(value)) {
                    const headOfRight = this.nodeCharCodeAt(node, remainder);
                    if (headOfRight === 10 /** \n */) {
                        const newStart = { line: newRightPiece.start.line + 1, column: 0 };
                        newRightPiece = new Piece(newRightPiece.bufferIndex, newStart, newRightPiece.end, this.getLineFeedCnt(newRightPiece.bufferIndex, newStart, newRightPiece.end), newRightPiece.length - 1);
                        value += '\n';
                    }
                }
                // reuse node for content before insertion point.
                if (this.shouldCheckCRLF() && this.startWithLF(value)) {
                    const tailOfLeft = this.nodeCharCodeAt(node, remainder - 1);
                    if (tailOfLeft === 13 /** \r */) {
                        const previousPos = this.positionInBuffer(node, remainder - 1);
                        this.deleteNodeTail(node, previousPos);
                        value = '\r' + value;
                        if (node.piece.length === 0) {
                            nodesToDel.push(node);
                        }
                    }
                    else {
                        this.deleteNodeTail(node, insertPosInBuffer);
                    }
                }
                else {
                    this.deleteNodeTail(node, insertPosInBuffer);
                }
                const newPieces = this.createNewPieces(value);
                if (newRightPiece.length > 0) {
                    this.rbInsertRight(node, newRightPiece);
                }
                let tmpNode = node;
                for (let k = 0; k < newPieces.length; k++) {
                    tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
                }
                this.deleteNodes(nodesToDel);
            }
            else {
                this.insertContentToNodeRight(value, node);
            }
        }
        else {
            // insert new node
            const pieces = this.createNewPieces(value);
            let node = this.rbInsertLeft(null, pieces[0]);
            for (let k = 1; k < pieces.length; k++) {
                node = this.rbInsertRight(node, pieces[k]);
            }
        }
        // todo, this is too brutal. Total line feed count should be updated the same way as lf_left.
        this.computeBufferMetadata();
    }
    delete(offset, cnt) {
        this._lastVisitedLine.lineNumber = 0;
        this._lastVisitedLine.value = '';
        if (cnt <= 0 || this.root === SENTINEL) {
            return;
        }
        const startPosition = this.nodeAt(offset);
        const endPosition = this.nodeAt(offset + cnt);
        const startNode = startPosition.node;
        const endNode = endPosition.node;
        if (startNode === endNode) {
            const startSplitPosInBuffer = this.positionInBuffer(startNode, startPosition.remainder);
            const endSplitPosInBuffer = this.positionInBuffer(startNode, endPosition.remainder);
            if (startPosition.nodeStartOffset === offset) {
                if (cnt === startNode.piece.length) { // delete node
                    const next = startNode.next();
                    rbDelete(this, startNode);
                    this.validateCRLFWithPrevNode(next);
                    this.computeBufferMetadata();
                    return;
                }
                this.deleteNodeHead(startNode, endSplitPosInBuffer);
                this._searchCache.validate(offset);
                this.validateCRLFWithPrevNode(startNode);
                this.computeBufferMetadata();
                return;
            }
            if (startPosition.nodeStartOffset + startNode.piece.length === offset + cnt) {
                this.deleteNodeTail(startNode, startSplitPosInBuffer);
                this.validateCRLFWithNextNode(startNode);
                this.computeBufferMetadata();
                return;
            }
            // delete content in the middle, this node will be splitted to nodes
            this.shrinkNode(startNode, startSplitPosInBuffer, endSplitPosInBuffer);
            this.computeBufferMetadata();
            return;
        }
        const nodesToDel = [];
        const startSplitPosInBuffer = this.positionInBuffer(startNode, startPosition.remainder);
        this.deleteNodeTail(startNode, startSplitPosInBuffer);
        this._searchCache.validate(offset);
        if (startNode.piece.length === 0) {
            nodesToDel.push(startNode);
        }
        // update last touched node
        const endSplitPosInBuffer = this.positionInBuffer(endNode, endPosition.remainder);
        this.deleteNodeHead(endNode, endSplitPosInBuffer);
        if (endNode.piece.length === 0) {
            nodesToDel.push(endNode);
        }
        // delete nodes in between
        const secondNode = startNode.next();
        for (let node = secondNode; node !== SENTINEL && node !== endNode; node = node.next()) {
            nodesToDel.push(node);
        }
        const prev = startNode.piece.length === 0 ? startNode.prev() : startNode;
        this.deleteNodes(nodesToDel);
        this.validateCRLFWithNextNode(prev);
        this.computeBufferMetadata();
    }
    insertContentToNodeLeft(value, node) {
        // we are inserting content to the beginning of node
        const nodesToDel = [];
        if (this.shouldCheckCRLF() && this.endWithCR(value) && this.startWithLF(node)) {
            // move `\n` to new node.
            const piece = node.piece;
            const newStart = { line: piece.start.line + 1, column: 0 };
            const nPiece = new Piece(piece.bufferIndex, newStart, piece.end, this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end), piece.length - 1);
            node.piece = nPiece;
            value += '\n';
            updateTreeMetadata(this, node, -1, -1);
            if (node.piece.length === 0) {
                nodesToDel.push(node);
            }
        }
        const newPieces = this.createNewPieces(value);
        let newNode = this.rbInsertLeft(node, newPieces[newPieces.length - 1]);
        for (let k = newPieces.length - 2; k >= 0; k--) {
            newNode = this.rbInsertLeft(newNode, newPieces[k]);
        }
        this.validateCRLFWithPrevNode(newNode);
        this.deleteNodes(nodesToDel);
    }
    insertContentToNodeRight(value, node) {
        // we are inserting to the right of this node.
        if (this.adjustCarriageReturnFromNext(value, node)) {
            // move \n to the new node.
            value += '\n';
        }
        const newPieces = this.createNewPieces(value);
        const newNode = this.rbInsertRight(node, newPieces[0]);
        let tmpNode = newNode;
        for (let k = 1; k < newPieces.length; k++) {
            tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
        }
        this.validateCRLFWithPrevNode(newNode);
    }
    positionInBuffer(node, remainder, ret) {
        const piece = node.piece;
        const bufferIndex = node.piece.bufferIndex;
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        const startOffset = lineStarts[piece.start.line] + piece.start.column;
        const offset = startOffset + remainder;
        // binary search offset between startOffset and endOffset
        let low = piece.start.line;
        let high = piece.end.line;
        let mid = 0;
        let midStop = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStart = lineStarts[mid];
            if (mid === high) {
                break;
            }
            midStop = lineStarts[mid + 1];
            if (offset < midStart) {
                high = mid - 1;
            }
            else if (offset >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        if (ret) {
            ret.line = mid;
            ret.column = offset - midStart;
            return null;
        }
        return {
            line: mid,
            column: offset - midStart
        };
    }
    getLineFeedCnt(bufferIndex, start, end) {
        // we don't need to worry about start: abc\r|\n, or abc|\r, or abc|\n, or abc|\r\n doesn't change the fact that, there is one line break after start.
        // now let's take care of end: abc\r|\n, if end is in between \r and \n, we need to add line feed count by 1
        if (end.column === 0) {
            return end.line - start.line;
        }
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        if (end.line === lineStarts.length - 1) { // it means, there is no \n after end, otherwise, there will be one more lineStart.
            return end.line - start.line;
        }
        const nextLineStartOffset = lineStarts[end.line + 1];
        const endOffset = lineStarts[end.line] + end.column;
        if (nextLineStartOffset > endOffset + 1) { // there are more than 1 character after end, which means it can't be \n
            return end.line - start.line;
        }
        // endOffset + 1 === nextLineStartOffset
        // character at endOffset is \n, so we check the character before first
        // if character at endOffset is \r, end.column is 0 and we can't get here.
        const previousCharOffset = endOffset - 1; // end.column > 0 so it's okay.
        const buffer = this._buffers[bufferIndex].buffer;
        if (buffer.charCodeAt(previousCharOffset) === 13) {
            return end.line - start.line + 1;
        }
        else {
            return end.line - start.line;
        }
    }
    offsetInBuffer(bufferIndex, cursor) {
        const lineStarts = this._buffers[bufferIndex].lineStarts;
        return lineStarts[cursor.line] + cursor.column;
    }
    deleteNodes(nodes) {
        for (let i = 0; i < nodes.length; i++) {
            rbDelete(this, nodes[i]);
        }
    }
    createNewPieces(text) {
        if (text.length > AverageBufferSize) {
            // the content is large, operations like substring, charCode becomes slow
            // so here we split it into smaller chunks, just like what we did for CR/LF normalization
            const newPieces = [];
            while (text.length > AverageBufferSize) {
                const lastChar = text.charCodeAt(AverageBufferSize - 1);
                let splitText;
                if (lastChar === 13 /* CharCode.CarriageReturn */ || (lastChar >= 0xD800 && lastChar <= 0xDBFF)) {
                    // last character is \r or a high surrogate => keep it back
                    splitText = text.substring(0, AverageBufferSize - 1);
                    text = text.substring(AverageBufferSize - 1);
                }
                else {
                    splitText = text.substring(0, AverageBufferSize);
                    text = text.substring(AverageBufferSize);
                }
                const lineStarts = createLineStartsFast(splitText);
                newPieces.push(new Piece(this._buffers.length, /* buffer index */ { line: 0, column: 0 }, { line: lineStarts.length - 1, column: splitText.length - lineStarts[lineStarts.length - 1] }, lineStarts.length - 1, splitText.length));
                this._buffers.push(new StringBuffer(splitText, lineStarts));
            }
            const lineStarts = createLineStartsFast(text);
            newPieces.push(new Piece(this._buffers.length, /* buffer index */ { line: 0, column: 0 }, { line: lineStarts.length - 1, column: text.length - lineStarts[lineStarts.length - 1] }, lineStarts.length - 1, text.length));
            this._buffers.push(new StringBuffer(text, lineStarts));
            return newPieces;
        }
        let startOffset = this._buffers[0].buffer.length;
        const lineStarts = createLineStartsFast(text, false);
        let start = this._lastChangeBufferPos;
        if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === startOffset
            && startOffset !== 0
            && this.startWithLF(text)
            && this.endWithCR(this._buffers[0].buffer) // todo, we can check this._lastChangeBufferPos's column as it's the last one
        ) {
            this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line, column: this._lastChangeBufferPos.column + 1 };
            start = this._lastChangeBufferPos;
            for (let i = 0; i < lineStarts.length; i++) {
                lineStarts[i] += startOffset + 1;
            }
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
            this._buffers[0].buffer += '_' + text;
            startOffset += 1;
        }
        else {
            if (startOffset !== 0) {
                for (let i = 0; i < lineStarts.length; i++) {
                    lineStarts[i] += startOffset;
                }
            }
            this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
            this._buffers[0].buffer += text;
        }
        const endOffset = this._buffers[0].buffer.length;
        const endIndex = this._buffers[0].lineStarts.length - 1;
        const endColumn = endOffset - this._buffers[0].lineStarts[endIndex];
        const endPos = { line: endIndex, column: endColumn };
        const newPiece = new Piece(0, /** todo@peng */ start, endPos, this.getLineFeedCnt(0, start, endPos), endOffset - startOffset);
        this._lastChangeBufferPos = endPos;
        return [newPiece];
    }
    getLineRawContent(lineNumber, endOffset = 0) {
        let x = this.root;
        let ret = '';
        const cache = this._searchCache.get2(lineNumber);
        if (cache) {
            x = cache.node;
            const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber - 1);
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
            if (cache.nodeStartLineNumber + x.piece.lineFeedCnt === lineNumber) {
                ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
            }
            else {
                const accumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber);
                return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
            }
        }
        else {
            let nodeStartOffset = 0;
            const originalLineNumber = lineNumber;
            while (x !== SENTINEL) {
                if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
                    x = x.left;
                }
                else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
                    const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                    const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
                    const buffer = this._buffers[x.piece.bufferIndex].buffer;
                    const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                    nodeStartOffset += x.size_left;
                    this._searchCache.set({
                        node: x,
                        nodeStartOffset,
                        nodeStartLineNumber: originalLineNumber - (lineNumber - 1 - x.lf_left)
                    });
                    return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
                }
                else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
                    const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                    const buffer = this._buffers[x.piece.bufferIndex].buffer;
                    const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                    ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
                    break;
                }
                else {
                    lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                    nodeStartOffset += x.size_left + x.piece.length;
                    x = x.right;
                }
            }
        }
        // search in order, to find the node contains end column
        x = x.next();
        while (x !== SENTINEL) {
            const buffer = this._buffers[x.piece.bufferIndex].buffer;
            if (x.piece.lineFeedCnt > 0) {
                const accumulatedValue = this.getAccumulatedValue(x, 0);
                const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                ret += buffer.substring(startOffset, startOffset + accumulatedValue - endOffset);
                return ret;
            }
            else {
                const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
                ret += buffer.substr(startOffset, x.piece.length);
            }
            x = x.next();
        }
        return ret;
    }
    computeBufferMetadata() {
        let x = this.root;
        let lfCnt = 1;
        let len = 0;
        while (x !== SENTINEL) {
            lfCnt += x.lf_left + x.piece.lineFeedCnt;
            len += x.size_left + x.piece.length;
            x = x.right;
        }
        this._lineCnt = lfCnt;
        this._length = len;
        this._searchCache.validate(this._length);
    }
    // #region node operations
    getIndexOf(node, accumulatedValue) {
        const piece = node.piece;
        const pos = this.positionInBuffer(node, accumulatedValue);
        const lineCnt = pos.line - piece.start.line;
        if (this.offsetInBuffer(piece.bufferIndex, piece.end) - this.offsetInBuffer(piece.bufferIndex, piece.start) === accumulatedValue) {
            // we are checking the end of this node, so a CRLF check is necessary.
            const realLineCnt = this.getLineFeedCnt(node.piece.bufferIndex, piece.start, pos);
            if (realLineCnt !== lineCnt) {
                // aha yes, CRLF
                return { index: realLineCnt, remainder: 0 };
            }
        }
        return { index: lineCnt, remainder: pos.column };
    }
    getAccumulatedValue(node, index) {
        if (index < 0) {
            return 0;
        }
        const piece = node.piece;
        const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
        const expectedLineStartIndex = piece.start.line + index + 1;
        if (expectedLineStartIndex > piece.end.line) {
            return lineStarts[piece.end.line] + piece.end.column - lineStarts[piece.start.line] - piece.start.column;
        }
        else {
            return lineStarts[expectedLineStartIndex] - lineStarts[piece.start.line] - piece.start.column;
        }
    }
    deleteNodeTail(node, pos) {
        const piece = node.piece;
        const originalLFCnt = piece.lineFeedCnt;
        const originalEndOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const newEnd = pos;
        const newEndOffset = this.offsetInBuffer(piece.bufferIndex, newEnd);
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
        const lf_delta = newLineFeedCnt - originalLFCnt;
        const size_delta = newEndOffset - originalEndOffset;
        const newLength = piece.length + size_delta;
        node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, size_delta, lf_delta);
    }
    deleteNodeHead(node, pos) {
        const piece = node.piece;
        const originalLFCnt = piece.lineFeedCnt;
        const originalStartOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const newStart = pos;
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
        const newStartOffset = this.offsetInBuffer(piece.bufferIndex, newStart);
        const lf_delta = newLineFeedCnt - originalLFCnt;
        const size_delta = originalStartOffset - newStartOffset;
        const newLength = piece.length + size_delta;
        node.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, size_delta, lf_delta);
    }
    shrinkNode(node, start, end) {
        const piece = node.piece;
        const originalStartPos = piece.start;
        const originalEndPos = piece.end;
        // old piece, originalStartPos, start
        const oldLength = piece.length;
        const oldLFCnt = piece.lineFeedCnt;
        const newEnd = start;
        const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
        const newLength = this.offsetInBuffer(piece.bufferIndex, start) - this.offsetInBuffer(piece.bufferIndex, originalStartPos);
        node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
        updateTreeMetadata(this, node, newLength - oldLength, newLineFeedCnt - oldLFCnt);
        // new right piece, end, originalEndPos
        const newPiece = new Piece(piece.bufferIndex, end, originalEndPos, this.getLineFeedCnt(piece.bufferIndex, end, originalEndPos), this.offsetInBuffer(piece.bufferIndex, originalEndPos) - this.offsetInBuffer(piece.bufferIndex, end));
        const newNode = this.rbInsertRight(node, newPiece);
        this.validateCRLFWithPrevNode(newNode);
    }
    appendToNode(node, value) {
        if (this.adjustCarriageReturnFromNext(value, node)) {
            value += '\n';
        }
        const hitCRLF = this.shouldCheckCRLF() && this.startWithLF(value) && this.endWithCR(node);
        const startOffset = this._buffers[0].buffer.length;
        this._buffers[0].buffer += value;
        const lineStarts = createLineStartsFast(value, false);
        for (let i = 0; i < lineStarts.length; i++) {
            lineStarts[i] += startOffset;
        }
        if (hitCRLF) {
            const prevStartOffset = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
            this._buffers[0].lineStarts.pop();
            // _lastChangeBufferPos is already wrong
            this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line - 1, column: startOffset - prevStartOffset };
        }
        this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
        const endIndex = this._buffers[0].lineStarts.length - 1;
        const endColumn = this._buffers[0].buffer.length - this._buffers[0].lineStarts[endIndex];
        const newEnd = { line: endIndex, column: endColumn };
        const newLength = node.piece.length + value.length;
        const oldLineFeedCnt = node.piece.lineFeedCnt;
        const newLineFeedCnt = this.getLineFeedCnt(0, node.piece.start, newEnd);
        const lf_delta = newLineFeedCnt - oldLineFeedCnt;
        node.piece = new Piece(node.piece.bufferIndex, node.piece.start, newEnd, newLineFeedCnt, newLength);
        this._lastChangeBufferPos = newEnd;
        updateTreeMetadata(this, node, value.length, lf_delta);
    }
    nodeAt(offset) {
        let x = this.root;
        const cache = this._searchCache.get(offset);
        if (cache) {
            return {
                node: cache.node,
                nodeStartOffset: cache.nodeStartOffset,
                remainder: offset - cache.nodeStartOffset
            };
        }
        let nodeStartOffset = 0;
        while (x !== SENTINEL) {
            if (x.size_left > offset) {
                x = x.left;
            }
            else if (x.size_left + x.piece.length >= offset) {
                nodeStartOffset += x.size_left;
                const ret = {
                    node: x,
                    remainder: offset - x.size_left,
                    nodeStartOffset
                };
                this._searchCache.set(ret);
                return ret;
            }
            else {
                offset -= x.size_left + x.piece.length;
                nodeStartOffset += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        return null;
    }
    nodeAt2(lineNumber, column) {
        let x = this.root;
        let nodeStartOffset = 0;
        while (x !== SENTINEL) {
            if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
                x = x.left;
            }
            else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
                const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
                nodeStartOffset += x.size_left;
                return {
                    node: x,
                    remainder: Math.min(prevAccumualtedValue + column - 1, accumulatedValue),
                    nodeStartOffset
                };
            }
            else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
                const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
                if (prevAccumualtedValue + column - 1 <= x.piece.length) {
                    return {
                        node: x,
                        remainder: prevAccumualtedValue + column - 1,
                        nodeStartOffset
                    };
                }
                else {
                    column -= x.piece.length - prevAccumualtedValue;
                    break;
                }
            }
            else {
                lineNumber -= x.lf_left + x.piece.lineFeedCnt;
                nodeStartOffset += x.size_left + x.piece.length;
                x = x.right;
            }
        }
        // search in order, to find the node contains position.column
        x = x.next();
        while (x !== SENTINEL) {
            if (x.piece.lineFeedCnt > 0) {
                const accumulatedValue = this.getAccumulatedValue(x, 0);
                const nodeStartOffset = this.offsetOfNode(x);
                return {
                    node: x,
                    remainder: Math.min(column - 1, accumulatedValue),
                    nodeStartOffset
                };
            }
            else {
                if (x.piece.length >= column - 1) {
                    const nodeStartOffset = this.offsetOfNode(x);
                    return {
                        node: x,
                        remainder: column - 1,
                        nodeStartOffset
                    };
                }
                else {
                    column -= x.piece.length;
                }
            }
            x = x.next();
        }
        return null;
    }
    nodeCharCodeAt(node, offset) {
        if (node.piece.lineFeedCnt < 1) {
            return -1;
        }
        const buffer = this._buffers[node.piece.bufferIndex];
        const newOffset = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start) + offset;
        return buffer.buffer.charCodeAt(newOffset);
    }
    offsetOfNode(node) {
        if (!node) {
            return 0;
        }
        let pos = node.size_left;
        while (node !== this.root) {
            if (node.parent.right === node) {
                pos += node.parent.size_left + node.parent.piece.length;
            }
            node = node.parent;
        }
        return pos;
    }
    // #endregion
    // #region CRLF
    shouldCheckCRLF() {
        return !(this._EOLNormalized && this._EOL === '\n');
    }
    startWithLF(val) {
        if (typeof val === 'string') {
            return val.charCodeAt(0) === 10;
        }
        if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
            return false;
        }
        const piece = val.piece;
        const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
        const line = piece.start.line;
        const startOffset = lineStarts[line] + piece.start.column;
        if (line === lineStarts.length - 1) {
            // last line, so there is no line feed at the end of this line
            return false;
        }
        const nextLineOffset = lineStarts[line + 1];
        if (nextLineOffset > startOffset + 1) {
            return false;
        }
        return this._buffers[piece.bufferIndex].buffer.charCodeAt(startOffset) === 10;
    }
    endWithCR(val) {
        if (typeof val === 'string') {
            return val.charCodeAt(val.length - 1) === 13;
        }
        if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
            return false;
        }
        return this.nodeCharCodeAt(val, val.piece.length - 1) === 13;
    }
    validateCRLFWithPrevNode(nextNode) {
        if (this.shouldCheckCRLF() && this.startWithLF(nextNode)) {
            const node = nextNode.prev();
            if (this.endWithCR(node)) {
                this.fixCRLF(node, nextNode);
            }
        }
    }
    validateCRLFWithNextNode(node) {
        if (this.shouldCheckCRLF() && this.endWithCR(node)) {
            const nextNode = node.next();
            if (this.startWithLF(nextNode)) {
                this.fixCRLF(node, nextNode);
            }
        }
    }
    fixCRLF(prev, next) {
        const nodesToDel = [];
        // update node
        const lineStarts = this._buffers[prev.piece.bufferIndex].lineStarts;
        let newEnd;
        if (prev.piece.end.column === 0) {
            // it means, last line ends with \r, not \r\n
            newEnd = { line: prev.piece.end.line - 1, column: lineStarts[prev.piece.end.line] - lineStarts[prev.piece.end.line - 1] - 1 };
        }
        else {
            // \r\n
            newEnd = { line: prev.piece.end.line, column: prev.piece.end.column - 1 };
        }
        const prevNewLength = prev.piece.length - 1;
        const prevNewLFCnt = prev.piece.lineFeedCnt - 1;
        prev.piece = new Piece(prev.piece.bufferIndex, prev.piece.start, newEnd, prevNewLFCnt, prevNewLength);
        updateTreeMetadata(this, prev, -1, -1);
        if (prev.piece.length === 0) {
            nodesToDel.push(prev);
        }
        // update nextNode
        const newStart = { line: next.piece.start.line + 1, column: 0 };
        const newLength = next.piece.length - 1;
        const newLineFeedCnt = this.getLineFeedCnt(next.piece.bufferIndex, newStart, next.piece.end);
        next.piece = new Piece(next.piece.bufferIndex, newStart, next.piece.end, newLineFeedCnt, newLength);
        updateTreeMetadata(this, next, -1, -1);
        if (next.piece.length === 0) {
            nodesToDel.push(next);
        }
        // create new piece which contains \r\n
        const pieces = this.createNewPieces('\r\n');
        this.rbInsertRight(prev, pieces[0]);
        // delete empty nodes
        for (let i = 0; i < nodesToDel.length; i++) {
            rbDelete(this, nodesToDel[i]);
        }
    }
    adjustCarriageReturnFromNext(value, node) {
        if (this.shouldCheckCRLF() && this.endWithCR(value)) {
            const nextNode = node.next();
            if (this.startWithLF(nextNode)) {
                // move `\n` forward
                value += '\n';
                if (nextNode.piece.length === 1) {
                    rbDelete(this, nextNode);
                }
                else {
                    const piece = nextNode.piece;
                    const newStart = { line: piece.start.line + 1, column: 0 };
                    const newLength = piece.length - 1;
                    const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
                    nextNode.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
                    updateTreeMetadata(this, nextNode, -1, -1);
                }
                return true;
            }
        }
        return false;
    }
    // #endregion
    // #endregion
    // #region Tree operations
    iterate(node, callback) {
        if (node === SENTINEL) {
            return callback(SENTINEL);
        }
        const leftRet = this.iterate(node.left, callback);
        if (!leftRet) {
            return leftRet;
        }
        return callback(node) && this.iterate(node.right, callback);
    }
    getNodeContent(node) {
        if (node === SENTINEL) {
            return '';
        }
        const buffer = this._buffers[node.piece.bufferIndex];
        const piece = node.piece;
        const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const currentContent = buffer.buffer.substring(startOffset, endOffset);
        return currentContent;
    }
    getPieceContent(piece) {
        const buffer = this._buffers[piece.bufferIndex];
        const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
        const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
        const currentContent = buffer.buffer.substring(startOffset, endOffset);
        return currentContent;
    }
    /**
     *      node              node
     *     /  \              /  \
     *    a   b    <----   a    b
     *                         /
     *                        z
     */
    rbInsertRight(node, p) {
        const z = new TreeNode(p, 1 /* NodeColor.Red */);
        z.left = SENTINEL;
        z.right = SENTINEL;
        z.parent = SENTINEL;
        z.size_left = 0;
        z.lf_left = 0;
        const x = this.root;
        if (x === SENTINEL) {
            this.root = z;
            z.color = 0 /* NodeColor.Black */;
        }
        else if (node.right === SENTINEL) {
            node.right = z;
            z.parent = node;
        }
        else {
            const nextNode = leftest(node.right);
            nextNode.left = z;
            z.parent = nextNode;
        }
        fixInsert(this, z);
        return z;
    }
    /**
     *      node              node
     *     /  \              /  \
     *    a   b     ---->   a    b
     *                       \
     *                        z
     */
    rbInsertLeft(node, p) {
        const z = new TreeNode(p, 1 /* NodeColor.Red */);
        z.left = SENTINEL;
        z.right = SENTINEL;
        z.parent = SENTINEL;
        z.size_left = 0;
        z.lf_left = 0;
        if (this.root === SENTINEL) {
            this.root = z;
            z.color = 0 /* NodeColor.Black */;
        }
        else if (node.left === SENTINEL) {
            node.left = z;
            z.parent = node;
        }
        else {
            const prevNode = righttest(node.left); // a
            prevNode.right = z;
            z.parent = prevNode;
        }
        fixInsert(this, z);
        return z;
    }
}


/***/ }),

/***/ 18360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ PieceTreeTextBuffer; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70625);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3981);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7783);
/* harmony import */ var _pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1605);
/* harmony import */ var _core_eolCounter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25099);
/* harmony import */ var _core_textChange_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98433);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26794);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








class PieceTreeTextBuffer extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_5__/* .Disposable */ .JT {
    constructor(chunks, BOM, eol, containsRTL, containsUnusualLineTerminators, isBasicASCII, eolNormalized) {
        super();
        this._onDidChangeContent = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this._BOM = BOM;
        this._mightContainNonBasicASCII = !isBasicASCII;
        this._mightContainRTL = containsRTL;
        this._mightContainUnusualLineTerminators = containsUnusualLineTerminators;
        this._pieceTree = new _pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_3__/* .PieceTreeBase */ .nD(chunks, eol, eolNormalized);
    }
    mightContainRTL() {
        return this._mightContainRTL;
    }
    mightContainUnusualLineTerminators() {
        return this._mightContainUnusualLineTerminators;
    }
    resetMightContainUnusualLineTerminators() {
        this._mightContainUnusualLineTerminators = false;
    }
    mightContainNonBasicASCII() {
        return this._mightContainNonBasicASCII;
    }
    getBOM() {
        return this._BOM;
    }
    getEOL() {
        return this._pieceTree.getEOL();
    }
    createSnapshot(preserveBOM) {
        return this._pieceTree.createSnapshot(preserveBOM ? this._BOM : '');
    }
    getOffsetAt(lineNumber, column) {
        return this._pieceTree.getOffsetAt(lineNumber, column);
    }
    getPositionAt(offset) {
        return this._pieceTree.getPositionAt(offset);
    }
    getRangeAt(start, length) {
        const end = start + length;
        const startPosition = this.getPositionAt(start);
        const endPosition = this.getPositionAt(end);
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
    }
    getValueInRange(range, eol = 0 /* EndOfLinePreference.TextDefined */) {
        if (range.isEmpty()) {
            return '';
        }
        const lineEnding = this._getEndOfLine(eol);
        return this._pieceTree.getValueInRange(range, lineEnding);
    }
    getValueLengthInRange(range, eol = 0 /* EndOfLinePreference.TextDefined */) {
        if (range.isEmpty()) {
            return 0;
        }
        if (range.startLineNumber === range.endLineNumber) {
            return (range.endColumn - range.startColumn);
        }
        const startOffset = this.getOffsetAt(range.startLineNumber, range.startColumn);
        const endOffset = this.getOffsetAt(range.endLineNumber, range.endColumn);
        // offsets use the text EOL, so we need to compensate for length differences
        // if the requested EOL doesn't match the text EOL
        let eolOffsetCompensation = 0;
        const desiredEOL = this._getEndOfLine(eol);
        const actualEOL = this.getEOL();
        if (desiredEOL.length !== actualEOL.length) {
            const delta = desiredEOL.length - actualEOL.length;
            const eolCount = range.endLineNumber - range.startLineNumber;
            eolOffsetCompensation = delta * eolCount;
        }
        return endOffset - startOffset + eolOffsetCompensation;
    }
    getCharacterCountInRange(range, eol = 0 /* EndOfLinePreference.TextDefined */) {
        if (this._mightContainNonBasicASCII) {
            // we must count by iterating
            let result = 0;
            const fromLineNumber = range.startLineNumber;
            const toLineNumber = range.endLineNumber;
            for (let lineNumber = fromLineNumber; lineNumber <= toLineNumber; lineNumber++) {
                const lineContent = this.getLineContent(lineNumber);
                const fromOffset = (lineNumber === fromLineNumber ? range.startColumn - 1 : 0);
                const toOffset = (lineNumber === toLineNumber ? range.endColumn - 1 : lineContent.length);
                for (let offset = fromOffset; offset < toOffset; offset++) {
                    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isHighSurrogate */ .ZG(lineContent.charCodeAt(offset))) {
                        result = result + 1;
                        offset = offset + 1;
                    }
                    else {
                        result = result + 1;
                    }
                }
            }
            result += this._getEndOfLine(eol).length * (toLineNumber - fromLineNumber);
            return result;
        }
        return this.getValueLengthInRange(range, eol);
    }
    getLength() {
        return this._pieceTree.getLength();
    }
    getLineCount() {
        return this._pieceTree.getLineCount();
    }
    getLinesContent() {
        return this._pieceTree.getLinesContent();
    }
    getLineContent(lineNumber) {
        return this._pieceTree.getLineContent(lineNumber);
    }
    getLineCharCode(lineNumber, index) {
        return this._pieceTree.getLineCharCode(lineNumber, index);
    }
    getLineLength(lineNumber) {
        return this._pieceTree.getLineLength(lineNumber);
    }
    getLineFirstNonWhitespaceColumn(lineNumber) {
        const result = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .firstNonWhitespaceIndex */ .LC(this.getLineContent(lineNumber));
        if (result === -1) {
            return 0;
        }
        return result + 1;
    }
    getLineLastNonWhitespaceColumn(lineNumber) {
        const result = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .lastNonWhitespaceIndex */ .ow(this.getLineContent(lineNumber));
        if (result === -1) {
            return 0;
        }
        return result + 2;
    }
    _getEndOfLine(eol) {
        switch (eol) {
            case 1 /* EndOfLinePreference.LF */:
                return '\n';
            case 2 /* EndOfLinePreference.CRLF */:
                return '\r\n';
            case 0 /* EndOfLinePreference.TextDefined */:
                return this.getEOL();
            default:
                throw new Error('Unknown EOL preference');
        }
    }
    setEOL(newEOL) {
        this._pieceTree.setEOL(newEOL);
    }
    applyEdits(rawOperations, recordTrimAutoWhitespace, computeUndoEdits) {
        let mightContainRTL = this._mightContainRTL;
        let mightContainUnusualLineTerminators = this._mightContainUnusualLineTerminators;
        let mightContainNonBasicASCII = this._mightContainNonBasicASCII;
        let canReduceOperations = true;
        let operations = [];
        for (let i = 0; i < rawOperations.length; i++) {
            const op = rawOperations[i];
            if (canReduceOperations && op._isTracked) {
                canReduceOperations = false;
            }
            const validatedRange = op.range;
            if (op.text) {
                let textMightContainNonBasicASCII = true;
                if (!mightContainNonBasicASCII) {
                    textMightContainNonBasicASCII = !_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isBasicASCII */ .$i(op.text);
                    mightContainNonBasicASCII = textMightContainNonBasicASCII;
                }
                if (!mightContainRTL && textMightContainNonBasicASCII) {
                    // check if the new inserted text contains RTL
                    mightContainRTL = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .containsRTL */ .Ut(op.text);
                }
                if (!mightContainUnusualLineTerminators && textMightContainNonBasicASCII) {
                    // check if the new inserted text contains unusual line terminators
                    mightContainUnusualLineTerminators = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .containsUnusualLineTerminators */ .ab(op.text);
                }
            }
            let validText = '';
            let eolCount = 0;
            let firstLineLength = 0;
            let lastLineLength = 0;
            if (op.text) {
                let strEOL;
                [eolCount, firstLineLength, lastLineLength, strEOL] = (0,_core_eolCounter_js__WEBPACK_IMPORTED_MODULE_7__/* .countEOL */ .Q)(op.text);
                const bufferEOL = this.getEOL();
                const expectedStrEOL = (bufferEOL === '\r\n' ? 2 /* StringEOL.CRLF */ : 1 /* StringEOL.LF */);
                if (strEOL === 0 /* StringEOL.Unknown */ || strEOL === expectedStrEOL) {
                    validText = op.text;
                }
                else {
                    validText = op.text.replace(/\r\n|\r|\n/g, bufferEOL);
                }
            }
            operations[i] = {
                sortIndex: i,
                identifier: op.identifier || null,
                range: validatedRange,
                rangeOffset: this.getOffsetAt(validatedRange.startLineNumber, validatedRange.startColumn),
                rangeLength: this.getValueLengthInRange(validatedRange),
                text: validText,
                eolCount: eolCount,
                firstLineLength: firstLineLength,
                lastLineLength: lastLineLength,
                forceMoveMarkers: Boolean(op.forceMoveMarkers),
                isAutoWhitespaceEdit: op.isAutoWhitespaceEdit || false
            };
        }
        // Sort operations ascending
        operations.sort(PieceTreeTextBuffer._sortOpsAscending);
        let hasTouchingRanges = false;
        for (let i = 0, count = operations.length - 1; i < count; i++) {
            const rangeEnd = operations[i].range.getEndPosition();
            const nextRangeStart = operations[i + 1].range.getStartPosition();
            if (nextRangeStart.isBeforeOrEqual(rangeEnd)) {
                if (nextRangeStart.isBefore(rangeEnd)) {
                    // overlapping ranges
                    throw new Error('Overlapping ranges are not allowed!');
                }
                hasTouchingRanges = true;
            }
        }
        if (canReduceOperations) {
            operations = this._reduceOperations(operations);
        }
        // Delta encode operations
        const reverseRanges = (computeUndoEdits || recordTrimAutoWhitespace ? PieceTreeTextBuffer._getInverseEditRanges(operations) : []);
        const newTrimAutoWhitespaceCandidates = [];
        if (recordTrimAutoWhitespace) {
            for (let i = 0; i < operations.length; i++) {
                const op = operations[i];
                const reverseRange = reverseRanges[i];
                if (op.isAutoWhitespaceEdit && op.range.isEmpty()) {
                    // Record already the future line numbers that might be auto whitespace removal candidates on next edit
                    for (let lineNumber = reverseRange.startLineNumber; lineNumber <= reverseRange.endLineNumber; lineNumber++) {
                        let currentLineContent = '';
                        if (lineNumber === reverseRange.startLineNumber) {
                            currentLineContent = this.getLineContent(op.range.startLineNumber);
                            if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .firstNonWhitespaceIndex */ .LC(currentLineContent) !== -1) {
                                continue;
                            }
                        }
                        newTrimAutoWhitespaceCandidates.push({ lineNumber: lineNumber, oldContent: currentLineContent });
                    }
                }
            }
        }
        let reverseOperations = null;
        if (computeUndoEdits) {
            let reverseRangeDeltaOffset = 0;
            reverseOperations = [];
            for (let i = 0; i < operations.length; i++) {
                const op = operations[i];
                const reverseRange = reverseRanges[i];
                const bufferText = this.getValueInRange(op.range);
                const reverseRangeOffset = op.rangeOffset + reverseRangeDeltaOffset;
                reverseRangeDeltaOffset += (op.text.length - bufferText.length);
                reverseOperations[i] = {
                    sortIndex: op.sortIndex,
                    identifier: op.identifier,
                    range: reverseRange,
                    text: bufferText,
                    textChange: new _core_textChange_js__WEBPACK_IMPORTED_MODULE_4__/* .TextChange */ .q(op.rangeOffset, bufferText, reverseRangeOffset, op.text)
                };
            }
            // Can only sort reverse operations when the order is not significant
            if (!hasTouchingRanges) {
                reverseOperations.sort((a, b) => a.sortIndex - b.sortIndex);
            }
        }
        this._mightContainRTL = mightContainRTL;
        this._mightContainUnusualLineTerminators = mightContainUnusualLineTerminators;
        this._mightContainNonBasicASCII = mightContainNonBasicASCII;
        const contentChanges = this._doApplyEdits(operations);
        let trimAutoWhitespaceLineNumbers = null;
        if (recordTrimAutoWhitespace && newTrimAutoWhitespaceCandidates.length > 0) {
            // sort line numbers auto whitespace removal candidates for next edit descending
            newTrimAutoWhitespaceCandidates.sort((a, b) => b.lineNumber - a.lineNumber);
            trimAutoWhitespaceLineNumbers = [];
            for (let i = 0, len = newTrimAutoWhitespaceCandidates.length; i < len; i++) {
                const lineNumber = newTrimAutoWhitespaceCandidates[i].lineNumber;
                if (i > 0 && newTrimAutoWhitespaceCandidates[i - 1].lineNumber === lineNumber) {
                    // Do not have the same line number twice
                    continue;
                }
                const prevContent = newTrimAutoWhitespaceCandidates[i].oldContent;
                const lineContent = this.getLineContent(lineNumber);
                if (lineContent.length === 0 || lineContent === prevContent || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .firstNonWhitespaceIndex */ .LC(lineContent) !== -1) {
                    continue;
                }
                trimAutoWhitespaceLineNumbers.push(lineNumber);
            }
        }
        this._onDidChangeContent.fire();
        return new _model_js__WEBPACK_IMPORTED_MODULE_2__/* .ApplyEditsResult */ .je(reverseOperations, contentChanges, trimAutoWhitespaceLineNumbers);
    }
    /**
     * Transform operations such that they represent the same logic edit,
     * but that they also do not cause OOM crashes.
     */
    _reduceOperations(operations) {
        if (operations.length < 1000) {
            // We know from empirical testing that a thousand edits work fine regardless of their shape.
            return operations;
        }
        // At one point, due to how events are emitted and how each operation is handled,
        // some operations can trigger a high amount of temporary string allocations,
        // that will immediately get edited again.
        // e.g. a formatter inserting ridiculous ammounts of \n on a model with a single line
        // Therefore, the strategy is to collapse all the operations into a huge single edit operation
        return [this._toSingleEditOperation(operations)];
    }
    _toSingleEditOperation(operations) {
        let forceMoveMarkers = false;
        const firstEditRange = operations[0].range;
        const lastEditRange = operations[operations.length - 1].range;
        const entireEditRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(firstEditRange.startLineNumber, firstEditRange.startColumn, lastEditRange.endLineNumber, lastEditRange.endColumn);
        let lastEndLineNumber = firstEditRange.startLineNumber;
        let lastEndColumn = firstEditRange.startColumn;
        const result = [];
        for (let i = 0, len = operations.length; i < len; i++) {
            const operation = operations[i];
            const range = operation.range;
            forceMoveMarkers = forceMoveMarkers || operation.forceMoveMarkers;
            // (1) -- Push old text
            result.push(this.getValueInRange(new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(lastEndLineNumber, lastEndColumn, range.startLineNumber, range.startColumn)));
            // (2) -- Push new text
            if (operation.text.length > 0) {
                result.push(operation.text);
            }
            lastEndLineNumber = range.endLineNumber;
            lastEndColumn = range.endColumn;
        }
        const text = result.join('');
        const [eolCount, firstLineLength, lastLineLength] = (0,_core_eolCounter_js__WEBPACK_IMPORTED_MODULE_7__/* .countEOL */ .Q)(text);
        return {
            sortIndex: 0,
            identifier: operations[0].identifier,
            range: entireEditRange,
            rangeOffset: this.getOffsetAt(entireEditRange.startLineNumber, entireEditRange.startColumn),
            rangeLength: this.getValueLengthInRange(entireEditRange, 0 /* EndOfLinePreference.TextDefined */),
            text: text,
            eolCount: eolCount,
            firstLineLength: firstLineLength,
            lastLineLength: lastLineLength,
            forceMoveMarkers: forceMoveMarkers,
            isAutoWhitespaceEdit: false
        };
    }
    _doApplyEdits(operations) {
        operations.sort(PieceTreeTextBuffer._sortOpsDescending);
        const contentChanges = [];
        // operations are from bottom to top
        for (let i = 0; i < operations.length; i++) {
            const op = operations[i];
            const startLineNumber = op.range.startLineNumber;
            const startColumn = op.range.startColumn;
            const endLineNumber = op.range.endLineNumber;
            const endColumn = op.range.endColumn;
            if (startLineNumber === endLineNumber && startColumn === endColumn && op.text.length === 0) {
                // no-op
                continue;
            }
            if (op.text) {
                // replacement
                this._pieceTree.delete(op.rangeOffset, op.rangeLength);
                this._pieceTree.insert(op.rangeOffset, op.text, true);
            }
            else {
                // deletion
                this._pieceTree.delete(op.rangeOffset, op.rangeLength);
            }
            const contentChangeRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(startLineNumber, startColumn, endLineNumber, endColumn);
            contentChanges.push({
                range: contentChangeRange,
                rangeLength: op.rangeLength,
                text: op.text,
                rangeOffset: op.rangeOffset,
                forceMoveMarkers: op.forceMoveMarkers
            });
        }
        return contentChanges;
    }
    findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
        return this._pieceTree.findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount);
    }
    /**
     * Assumes `operations` are validated and sorted ascending
     */
    static _getInverseEditRanges(operations) {
        const result = [];
        let prevOpEndLineNumber = 0;
        let prevOpEndColumn = 0;
        let prevOp = null;
        for (let i = 0, len = operations.length; i < len; i++) {
            const op = operations[i];
            let startLineNumber;
            let startColumn;
            if (prevOp) {
                if (prevOp.range.endLineNumber === op.range.startLineNumber) {
                    startLineNumber = prevOpEndLineNumber;
                    startColumn = prevOpEndColumn + (op.range.startColumn - prevOp.range.endColumn);
                }
                else {
                    startLineNumber = prevOpEndLineNumber + (op.range.startLineNumber - prevOp.range.endLineNumber);
                    startColumn = op.range.startColumn;
                }
            }
            else {
                startLineNumber = op.range.startLineNumber;
                startColumn = op.range.startColumn;
            }
            let resultRange;
            if (op.text.length > 0) {
                // the operation inserts something
                const lineCount = op.eolCount + 1;
                if (lineCount === 1) {
                    // single line insert
                    resultRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(startLineNumber, startColumn, startLineNumber, startColumn + op.firstLineLength);
                }
                else {
                    // multi line insert
                    resultRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(startLineNumber, startColumn, startLineNumber + lineCount - 1, op.lastLineLength + 1);
                }
            }
            else {
                // There is nothing to insert
                resultRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(startLineNumber, startColumn, startLineNumber, startColumn);
            }
            prevOpEndLineNumber = resultRange.endLineNumber;
            prevOpEndColumn = resultRange.endColumn;
            result.push(resultRange);
            prevOp = op;
        }
        return result;
    }
    static _sortOpsAscending(a, b) {
        const r = _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e.compareRangesUsingEnds(a.range, b.range);
        if (r === 0) {
            return a.sortIndex - b.sortIndex;
        }
        return r;
    }
    static _sortOpsDescending(a, b) {
        const r = _core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e.compareRangesUsingEnds(a.range, b.range);
        if (r === 0) {
            return b.sortIndex - a.sortIndex;
        }
        return -r;
    }
}


/***/ }),

/***/ 27306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: function() { return /* binding */ PieceTreeTextBufferBuilder; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1605);
/* harmony import */ var _pieceTreeTextBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18360);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class PieceTreeTextBufferFactory {
    constructor(_chunks, _bom, _cr, _lf, _crlf, _containsRTL, _containsUnusualLineTerminators, _isBasicASCII, _normalizeEOL) {
        this._chunks = _chunks;
        this._bom = _bom;
        this._cr = _cr;
        this._lf = _lf;
        this._crlf = _crlf;
        this._containsRTL = _containsRTL;
        this._containsUnusualLineTerminators = _containsUnusualLineTerminators;
        this._isBasicASCII = _isBasicASCII;
        this._normalizeEOL = _normalizeEOL;
    }
    _getEOL(defaultEOL) {
        const totalEOLCount = this._cr + this._lf + this._crlf;
        const totalCRCount = this._cr + this._crlf;
        if (totalEOLCount === 0) {
            // This is an empty file or a file with precisely one line
            return (defaultEOL === 1 /* DefaultEndOfLine.LF */ ? '\n' : '\r\n');
        }
        if (totalCRCount > totalEOLCount / 2) {
            // More than half of the file contains \r\n ending lines
            return '\r\n';
        }
        // At least one line more ends in \n
        return '\n';
    }
    create(defaultEOL) {
        const eol = this._getEOL(defaultEOL);
        const chunks = this._chunks;
        if (this._normalizeEOL &&
            ((eol === '\r\n' && (this._cr > 0 || this._lf > 0))
                || (eol === '\n' && (this._cr > 0 || this._crlf > 0)))) {
            // Normalize pieces
            for (let i = 0, len = chunks.length; i < len; i++) {
                const str = chunks[i].buffer.replace(/\r\n|\r|\n/g, eol);
                const newLineStart = (0,_pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__/* .createLineStartsFast */ .Xp)(str);
                chunks[i] = new _pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__/* .StringBuffer */ .Lv(str, newLineStart);
            }
        }
        const textBuffer = new _pieceTreeTextBuffer_js__WEBPACK_IMPORTED_MODULE_2__/* .PieceTreeTextBuffer */ .A(chunks, this._bom, eol, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
        return { textBuffer: textBuffer, disposable: textBuffer };
    }
}
class PieceTreeTextBufferBuilder {
    constructor() {
        this.chunks = [];
        this.BOM = '';
        this._hasPreviousChar = false;
        this._previousChar = 0;
        this._tmpLineStarts = [];
        this.cr = 0;
        this.lf = 0;
        this.crlf = 0;
        this.containsRTL = false;
        this.containsUnusualLineTerminators = false;
        this.isBasicASCII = true;
    }
    acceptChunk(chunk) {
        if (chunk.length === 0) {
            return;
        }
        if (this.chunks.length === 0) {
            if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .startsWithUTF8BOM */ .uS(chunk)) {
                this.BOM = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .UTF8_BOM_CHARACTER */ .c1;
                chunk = chunk.substr(1);
            }
        }
        const lastChar = chunk.charCodeAt(chunk.length - 1);
        if (lastChar === 13 /* CharCode.CarriageReturn */ || (lastChar >= 0xD800 && lastChar <= 0xDBFF)) {
            // last character is \r or a high surrogate => keep it back
            this._acceptChunk1(chunk.substr(0, chunk.length - 1), false);
            this._hasPreviousChar = true;
            this._previousChar = lastChar;
        }
        else {
            this._acceptChunk1(chunk, false);
            this._hasPreviousChar = false;
            this._previousChar = lastChar;
        }
    }
    _acceptChunk1(chunk, allowEmptyStrings) {
        if (!allowEmptyStrings && chunk.length === 0) {
            // Nothing to do
            return;
        }
        if (this._hasPreviousChar) {
            this._acceptChunk2(String.fromCharCode(this._previousChar) + chunk);
        }
        else {
            this._acceptChunk2(chunk);
        }
    }
    _acceptChunk2(chunk) {
        const lineStarts = (0,_pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__/* .createLineStarts */ .Nr)(this._tmpLineStarts, chunk);
        this.chunks.push(new _pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__/* .StringBuffer */ .Lv(chunk, lineStarts.lineStarts));
        this.cr += lineStarts.cr;
        this.lf += lineStarts.lf;
        this.crlf += lineStarts.crlf;
        if (!lineStarts.isBasicASCII) {
            // this chunk contains non basic ASCII characters
            this.isBasicASCII = false;
            if (!this.containsRTL) {
                this.containsRTL = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .containsRTL */ .Ut(chunk);
            }
            if (!this.containsUnusualLineTerminators) {
                this.containsUnusualLineTerminators = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .containsUnusualLineTerminators */ .ab(chunk);
            }
        }
    }
    finish(normalizeEOL = true) {
        this._finish();
        return new PieceTreeTextBufferFactory(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, normalizeEOL);
    }
    _finish() {
        if (this.chunks.length === 0) {
            this._acceptChunk1('', true);
        }
        if (this._hasPreviousChar) {
            this._hasPreviousChar = false;
            // recreate last chunk
            const lastChunk = this.chunks[this.chunks.length - 1];
            lastChunk.buffer += String.fromCharCode(this._previousChar);
            const newLineStarts = (0,_pieceTreeBase_js__WEBPACK_IMPORTED_MODULE_1__/* .createLineStartsFast */ .Xp)(lastChunk.buffer);
            lastChunk.lineStarts = newLineStarts;
            if (this._previousChar === 13 /* CharCode.CarriageReturn */) {
                this.cr++;
            }
        }
    }
}


/***/ }),

/***/ 95259:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ck: function() { return /* binding */ ConstantTimePrefixSumComputer; },
/* harmony export */   oQ: function() { return /* binding */ PrefixSumComputer; }
/* harmony export */ });
/* unused harmony export PrefixSumIndexOfResult */
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99854);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class PrefixSumComputer {
    constructor(values) {
        this.values = values;
        this.prefixSum = new Uint32Array(values.length);
        this.prefixSumValidIndex = new Int32Array(1);
        this.prefixSumValidIndex[0] = -1;
    }
    insertValues(insertIndex, insertValues) {
        insertIndex = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(insertIndex);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        const insertValuesLen = insertValues.length;
        if (insertValuesLen === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length + insertValuesLen);
        this.values.set(oldValues.subarray(0, insertIndex), 0);
        this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
        this.values.set(insertValues, insertIndex);
        if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = insertIndex - 1;
        }
        this.prefixSum = new Uint32Array(this.values.length);
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    setValue(index, value) {
        index = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(index);
        value = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(value);
        if (this.values[index] === value) {
            return false;
        }
        this.values[index] = value;
        if (index - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = index - 1;
        }
        return true;
    }
    removeValues(startIndex, count) {
        startIndex = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(startIndex);
        count = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(count);
        const oldValues = this.values;
        const oldPrefixSum = this.prefixSum;
        if (startIndex >= oldValues.length) {
            return false;
        }
        const maxCount = oldValues.length - startIndex;
        if (count >= maxCount) {
            count = maxCount;
        }
        if (count === 0) {
            return false;
        }
        this.values = new Uint32Array(oldValues.length - count);
        this.values.set(oldValues.subarray(0, startIndex), 0);
        this.values.set(oldValues.subarray(startIndex + count), startIndex);
        this.prefixSum = new Uint32Array(this.values.length);
        if (startIndex - 1 < this.prefixSumValidIndex[0]) {
            this.prefixSumValidIndex[0] = startIndex - 1;
        }
        if (this.prefixSumValidIndex[0] >= 0) {
            this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
        }
        return true;
    }
    getTotalSum() {
        if (this.values.length === 0) {
            return 0;
        }
        return this._getPrefixSum(this.values.length - 1);
    }
    /**
     * Returns the sum of the first `index + 1` many items.
     * @returns `SUM(0 <= j <= index, values[j])`.
     */
    getPrefixSum(index) {
        if (index < 0) {
            return 0;
        }
        index = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_1__/* .toUint32 */ .A)(index);
        return this._getPrefixSum(index);
    }
    _getPrefixSum(index) {
        if (index <= this.prefixSumValidIndex[0]) {
            return this.prefixSum[index];
        }
        let startIndex = this.prefixSumValidIndex[0] + 1;
        if (startIndex === 0) {
            this.prefixSum[0] = this.values[0];
            startIndex++;
        }
        if (index >= this.values.length) {
            index = this.values.length - 1;
        }
        for (let i = startIndex; i <= index; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
        }
        this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
        return this.prefixSum[index];
    }
    getIndexOf(sum) {
        sum = Math.floor(sum);
        // Compute all sums (to get a fully valid prefixSum)
        this.getTotalSum();
        let low = 0;
        let high = this.values.length - 1;
        let mid = 0;
        let midStop = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            midStop = this.prefixSum[mid];
            midStart = midStop - this.values[mid];
            if (sum < midStart) {
                high = mid - 1;
            }
            else if (sum >= midStop) {
                low = mid + 1;
            }
            else {
                break;
            }
        }
        return new PrefixSumIndexOfResult(mid, sum - midStart);
    }
}
/**
 * {@link getIndexOf} has an amortized runtime complexity of O(1).
 *
 * ({@link PrefixSumComputer.getIndexOf} is just  O(log n))
*/
class ConstantTimePrefixSumComputer {
    constructor(values) {
        this._values = values;
        this._isValid = false;
        this._validEndIndex = -1;
        this._prefixSum = [];
        this._indexBySum = [];
    }
    /**
     * @returns SUM(0 <= j < values.length, values[j])
     */
    getTotalSum() {
        this._ensureValid();
        return this._indexBySum.length;
    }
    /**
     * Returns the sum of the first `count` many items.
     * @returns `SUM(0 <= j < count, values[j])`.
     */
    getPrefixSum(count) {
        this._ensureValid();
        if (count === 0) {
            return 0;
        }
        return this._prefixSum[count - 1];
    }
    /**
     * @returns `result`, such that `getPrefixSum(result.index) + result.remainder = sum`
     */
    getIndexOf(sum) {
        this._ensureValid();
        const idx = this._indexBySum[sum];
        const viewLinesAbove = idx > 0 ? this._prefixSum[idx - 1] : 0;
        return new PrefixSumIndexOfResult(idx, sum - viewLinesAbove);
    }
    removeValues(start, deleteCount) {
        this._values.splice(start, deleteCount);
        this._invalidate(start);
    }
    insertValues(insertIndex, insertArr) {
        this._values = (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .arrayInsert */ .Zv)(this._values, insertIndex, insertArr);
        this._invalidate(insertIndex);
    }
    _invalidate(index) {
        this._isValid = false;
        this._validEndIndex = Math.min(this._validEndIndex, index - 1);
    }
    _ensureValid() {
        if (this._isValid) {
            return;
        }
        for (let i = this._validEndIndex + 1, len = this._values.length; i < len; i++) {
            const value = this._values[i];
            const sumAbove = i > 0 ? this._prefixSum[i - 1] : 0;
            this._prefixSum[i] = sumAbove + value;
            for (let j = 0; j < value; j++) {
                this._indexBySum[sumAbove + j] = i;
            }
        }
        // trim things
        this._prefixSum.length = this._values.length;
        this._indexBySum.length = this._prefixSum[this._prefixSum.length - 1];
        // mark as valid
        this._isValid = true;
        this._validEndIndex = this._values.length - 1;
    }
    setValue(index, value) {
        if (this._values[index] === value) {
            // no change
            return;
        }
        this._values[index] = value;
        this._invalidate(index);
    }
}
class PrefixSumIndexOfResult {
    constructor(index, remainder) {
        this.index = index;
        this.remainder = remainder;
        this._prefixSumIndexOfResultBrand = undefined;
        this.index = index;
        this.remainder = remainder;
    }
}


/***/ })

}]);