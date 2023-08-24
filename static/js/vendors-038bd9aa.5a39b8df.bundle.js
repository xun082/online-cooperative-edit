"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-038bd9aa"],{

/***/ 82699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ ViewEventHandler; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ViewEventHandler extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor() {
        super();
        this._shouldRender = true;
    }
    shouldRender() {
        return this._shouldRender;
    }
    forceShouldRender() {
        this._shouldRender = true;
    }
    setShouldRender() {
        this._shouldRender = true;
    }
    onDidRender() {
        this._shouldRender = false;
    }
    // --- begin event handlers
    onCompositionStart(e) {
        return false;
    }
    onCompositionEnd(e) {
        return false;
    }
    onConfigurationChanged(e) {
        return false;
    }
    onCursorStateChanged(e) {
        return false;
    }
    onDecorationsChanged(e) {
        return false;
    }
    onFlushed(e) {
        return false;
    }
    onFocusChanged(e) {
        return false;
    }
    onLanguageConfigurationChanged(e) {
        return false;
    }
    onLineMappingChanged(e) {
        return false;
    }
    onLinesChanged(e) {
        return false;
    }
    onLinesDeleted(e) {
        return false;
    }
    onLinesInserted(e) {
        return false;
    }
    onRevealRangeRequest(e) {
        return false;
    }
    onScrollChanged(e) {
        return false;
    }
    onThemeChanged(e) {
        return false;
    }
    onTokensChanged(e) {
        return false;
    }
    onTokensColorsChanged(e) {
        return false;
    }
    onZonesChanged(e) {
        return false;
    }
    // --- end event handlers
    handleEvents(events) {
        let shouldRender = false;
        for (let i = 0, len = events.length; i < len; i++) {
            const e = events[i];
            switch (e.type) {
                case 0 /* viewEvents.ViewEventType.ViewCompositionStart */:
                    if (this.onCompositionStart(e)) {
                        shouldRender = true;
                    }
                    break;
                case 1 /* viewEvents.ViewEventType.ViewCompositionEnd */:
                    if (this.onCompositionEnd(e)) {
                        shouldRender = true;
                    }
                    break;
                case 2 /* viewEvents.ViewEventType.ViewConfigurationChanged */:
                    if (this.onConfigurationChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 3 /* viewEvents.ViewEventType.ViewCursorStateChanged */:
                    if (this.onCursorStateChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 4 /* viewEvents.ViewEventType.ViewDecorationsChanged */:
                    if (this.onDecorationsChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 5 /* viewEvents.ViewEventType.ViewFlushed */:
                    if (this.onFlushed(e)) {
                        shouldRender = true;
                    }
                    break;
                case 6 /* viewEvents.ViewEventType.ViewFocusChanged */:
                    if (this.onFocusChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 7 /* viewEvents.ViewEventType.ViewLanguageConfigurationChanged */:
                    if (this.onLanguageConfigurationChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 8 /* viewEvents.ViewEventType.ViewLineMappingChanged */:
                    if (this.onLineMappingChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 9 /* viewEvents.ViewEventType.ViewLinesChanged */:
                    if (this.onLinesChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 10 /* viewEvents.ViewEventType.ViewLinesDeleted */:
                    if (this.onLinesDeleted(e)) {
                        shouldRender = true;
                    }
                    break;
                case 11 /* viewEvents.ViewEventType.ViewLinesInserted */:
                    if (this.onLinesInserted(e)) {
                        shouldRender = true;
                    }
                    break;
                case 12 /* viewEvents.ViewEventType.ViewRevealRangeRequest */:
                    if (this.onRevealRangeRequest(e)) {
                        shouldRender = true;
                    }
                    break;
                case 13 /* viewEvents.ViewEventType.ViewScrollChanged */:
                    if (this.onScrollChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 15 /* viewEvents.ViewEventType.ViewTokensChanged */:
                    if (this.onTokensChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 14 /* viewEvents.ViewEventType.ViewThemeChanged */:
                    if (this.onThemeChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 16 /* viewEvents.ViewEventType.ViewTokensColorsChanged */:
                    if (this.onTokensColorsChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                case 17 /* viewEvents.ViewEventType.ViewZonesChanged */:
                    if (this.onZonesChanged(e)) {
                        shouldRender = true;
                    }
                    break;
                default:
                    console.info('View received unknown event: ');
                    console.info(e);
            }
        }
        if (shouldRender) {
            this._shouldRender = true;
        }
    }
}


/***/ }),

/***/ 18187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: function() { return /* binding */ ViewScrollChangedEvent; },
/* harmony export */   CL: function() { return /* binding */ ViewFlushedEvent; },
/* harmony export */   H9: function() { return /* binding */ ViewTokensChangedEvent; },
/* harmony export */   Hf: function() { return /* binding */ ViewThemeChangedEvent; },
/* harmony export */   IN: function() { return /* binding */ ViewCompositionEndEvent; },
/* harmony export */   Ic: function() { return /* binding */ ViewZonesChangedEvent; },
/* harmony export */   JP: function() { return /* binding */ ViewCompositionStartEvent; },
/* harmony export */   K9: function() { return /* binding */ ViewLinesInsertedEvent; },
/* harmony export */   Qb: function() { return /* binding */ ViewRevealRangeRequestEvent; },
/* harmony export */   SJ: function() { return /* binding */ ViewFocusChangedEvent; },
/* harmony export */   _0: function() { return /* binding */ ViewLanguageConfigurationEvent; },
/* harmony export */   d8: function() { return /* binding */ ViewLineMappingChangedEvent; },
/* harmony export */   e$: function() { return /* binding */ ViewCursorStateChangedEvent; },
/* harmony export */   il: function() { return /* binding */ ViewLinesChangedEvent; },
/* harmony export */   uc: function() { return /* binding */ ViewTokensColorsChangedEvent; },
/* harmony export */   vA: function() { return /* binding */ ViewDecorationsChangedEvent; },
/* harmony export */   vk: function() { return /* binding */ ViewLinesDeletedEvent; },
/* harmony export */   x4: function() { return /* binding */ ViewConfigurationChangedEvent; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewCompositionStartEvent {
    constructor() {
        this.type = 0 /* ViewEventType.ViewCompositionStart */;
    }
}
class ViewCompositionEndEvent {
    constructor() {
        this.type = 1 /* ViewEventType.ViewCompositionEnd */;
    }
}
class ViewConfigurationChangedEvent {
    constructor(source) {
        this.type = 2 /* ViewEventType.ViewConfigurationChanged */;
        this._source = source;
    }
    hasChanged(id) {
        return this._source.hasChanged(id);
    }
}
class ViewCursorStateChangedEvent {
    constructor(selections, modelSelections, reason) {
        this.selections = selections;
        this.modelSelections = modelSelections;
        this.reason = reason;
        this.type = 3 /* ViewEventType.ViewCursorStateChanged */;
    }
}
class ViewDecorationsChangedEvent {
    constructor(source) {
        this.type = 4 /* ViewEventType.ViewDecorationsChanged */;
        if (source) {
            this.affectsMinimap = source.affectsMinimap;
            this.affectsOverviewRuler = source.affectsOverviewRuler;
            this.affectsGlyphMargin = source.affectsGlyphMargin;
        }
        else {
            this.affectsMinimap = true;
            this.affectsOverviewRuler = true;
            this.affectsGlyphMargin = true;
        }
    }
}
class ViewFlushedEvent {
    constructor() {
        this.type = 5 /* ViewEventType.ViewFlushed */;
        // Nothing to do
    }
}
class ViewFocusChangedEvent {
    constructor(isFocused) {
        this.type = 6 /* ViewEventType.ViewFocusChanged */;
        this.isFocused = isFocused;
    }
}
class ViewLanguageConfigurationEvent {
    constructor() {
        this.type = 7 /* ViewEventType.ViewLanguageConfigurationChanged */;
    }
}
class ViewLineMappingChangedEvent {
    constructor() {
        this.type = 8 /* ViewEventType.ViewLineMappingChanged */;
        // Nothing to do
    }
}
class ViewLinesChangedEvent {
    constructor(
    /**
     * The first line that has changed.
     */
    fromLineNumber, 
    /**
     * The number of lines that have changed.
     */
    count) {
        this.fromLineNumber = fromLineNumber;
        this.count = count;
        this.type = 9 /* ViewEventType.ViewLinesChanged */;
    }
}
class ViewLinesDeletedEvent {
    constructor(fromLineNumber, toLineNumber) {
        this.type = 10 /* ViewEventType.ViewLinesDeleted */;
        this.fromLineNumber = fromLineNumber;
        this.toLineNumber = toLineNumber;
    }
}
class ViewLinesInsertedEvent {
    constructor(fromLineNumber, toLineNumber) {
        this.type = 11 /* ViewEventType.ViewLinesInserted */;
        this.fromLineNumber = fromLineNumber;
        this.toLineNumber = toLineNumber;
    }
}
class ViewRevealRangeRequestEvent {
    constructor(
    /**
     * Source of the call that caused the event.
     */
    source, 
    /**
     * Reduce the revealing to a minimum (e.g. avoid scrolling if the bounding box is visible and near the viewport edge).
     */
    minimalReveal, 
    /**
     * Range to be reavealed.
     */
    range, 
    /**
     * Selections to be revealed.
     */
    selections, 
    /**
     * The vertical reveal strategy.
     */
    verticalType, 
    /**
     * If true: there should be a horizontal & vertical revealing.
     * If false: there should be just a vertical revealing.
     */
    revealHorizontal, 
    /**
     * The scroll type.
     */
    scrollType) {
        this.source = source;
        this.minimalReveal = minimalReveal;
        this.range = range;
        this.selections = selections;
        this.verticalType = verticalType;
        this.revealHorizontal = revealHorizontal;
        this.scrollType = scrollType;
        this.type = 12 /* ViewEventType.ViewRevealRangeRequest */;
    }
}
class ViewScrollChangedEvent {
    constructor(source) {
        this.type = 13 /* ViewEventType.ViewScrollChanged */;
        this.scrollWidth = source.scrollWidth;
        this.scrollLeft = source.scrollLeft;
        this.scrollHeight = source.scrollHeight;
        this.scrollTop = source.scrollTop;
        this.scrollWidthChanged = source.scrollWidthChanged;
        this.scrollLeftChanged = source.scrollLeftChanged;
        this.scrollHeightChanged = source.scrollHeightChanged;
        this.scrollTopChanged = source.scrollTopChanged;
    }
}
class ViewThemeChangedEvent {
    constructor(theme) {
        this.theme = theme;
        this.type = 14 /* ViewEventType.ViewThemeChanged */;
    }
}
class ViewTokensChangedEvent {
    constructor(ranges) {
        this.type = 15 /* ViewEventType.ViewTokensChanged */;
        this.ranges = ranges;
    }
}
class ViewTokensColorsChangedEvent {
    constructor() {
        this.type = 16 /* ViewEventType.ViewTokensColorsChanged */;
        // Nothing to do
    }
}
class ViewZonesChangedEvent {
    constructor() {
        this.type = 17 /* ViewEventType.ViewZonesChanged */;
        // Nothing to do
    }
}


/***/ }),

/***/ 35900:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kp: function() { return /* binding */ LineDecoration; },
/* harmony export */   k: function() { return /* binding */ LineDecorationsNormalizer; }
/* harmony export */ });
/* unused harmony export DecorationSegment */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class LineDecoration {
    constructor(startColumn, endColumn, className, type) {
        this.startColumn = startColumn;
        this.endColumn = endColumn;
        this.className = className;
        this.type = type;
        this._lineDecorationBrand = undefined;
    }
    static _equals(a, b) {
        return (a.startColumn === b.startColumn
            && a.endColumn === b.endColumn
            && a.className === b.className
            && a.type === b.type);
    }
    static equalsArr(a, b) {
        const aLen = a.length;
        const bLen = b.length;
        if (aLen !== bLen) {
            return false;
        }
        for (let i = 0; i < aLen; i++) {
            if (!LineDecoration._equals(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    static extractWrapped(arr, startOffset, endOffset) {
        if (arr.length === 0) {
            return arr;
        }
        const startColumn = startOffset + 1;
        const endColumn = endOffset + 1;
        const lineLength = endOffset - startOffset;
        const r = [];
        let rLength = 0;
        for (const dec of arr) {
            if (dec.endColumn <= startColumn || dec.startColumn >= endColumn) {
                continue;
            }
            r[rLength++] = new LineDecoration(Math.max(1, dec.startColumn - startColumn + 1), Math.min(lineLength + 1, dec.endColumn - startColumn + 1), dec.className, dec.type);
        }
        return r;
    }
    static filter(lineDecorations, lineNumber, minLineColumn, maxLineColumn) {
        if (lineDecorations.length === 0) {
            return [];
        }
        const result = [];
        let resultLen = 0;
        for (let i = 0, len = lineDecorations.length; i < len; i++) {
            const d = lineDecorations[i];
            const range = d.range;
            if (range.endLineNumber < lineNumber || range.startLineNumber > lineNumber) {
                // Ignore decorations that sit outside this line
                continue;
            }
            if (range.isEmpty() && (d.type === 0 /* InlineDecorationType.Regular */ || d.type === 3 /* InlineDecorationType.RegularAffectingLetterSpacing */)) {
                // Ignore empty range decorations
                continue;
            }
            const startColumn = (range.startLineNumber === lineNumber ? range.startColumn : minLineColumn);
            const endColumn = (range.endLineNumber === lineNumber ? range.endColumn : maxLineColumn);
            result[resultLen++] = new LineDecoration(startColumn, endColumn, d.inlineClassName, d.type);
        }
        return result;
    }
    static _typeCompare(a, b) {
        const ORDER = [2, 0, 1, 3];
        return ORDER[a] - ORDER[b];
    }
    static compare(a, b) {
        if (a.startColumn !== b.startColumn) {
            return a.startColumn - b.startColumn;
        }
        if (a.endColumn !== b.endColumn) {
            return a.endColumn - b.endColumn;
        }
        const typeCmp = LineDecoration._typeCompare(a.type, b.type);
        if (typeCmp !== 0) {
            return typeCmp;
        }
        if (a.className !== b.className) {
            return a.className < b.className ? -1 : 1;
        }
        return 0;
    }
}
class DecorationSegment {
    constructor(startOffset, endOffset, className, metadata) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.className = className;
        this.metadata = metadata;
    }
}
class Stack {
    constructor() {
        this.stopOffsets = [];
        this.classNames = [];
        this.metadata = [];
        this.count = 0;
    }
    static _metadata(metadata) {
        let result = 0;
        for (let i = 0, len = metadata.length; i < len; i++) {
            result |= metadata[i];
        }
        return result;
    }
    consumeLowerThan(maxStopOffset, nextStartOffset, result) {
        while (this.count > 0 && this.stopOffsets[0] < maxStopOffset) {
            let i = 0;
            // Take all equal stopping offsets
            while (i + 1 < this.count && this.stopOffsets[i] === this.stopOffsets[i + 1]) {
                i++;
            }
            // Basically we are consuming the first i + 1 elements of the stack
            result.push(new DecorationSegment(nextStartOffset, this.stopOffsets[i], this.classNames.join(' '), Stack._metadata(this.metadata)));
            nextStartOffset = this.stopOffsets[i] + 1;
            // Consume them
            this.stopOffsets.splice(0, i + 1);
            this.classNames.splice(0, i + 1);
            this.metadata.splice(0, i + 1);
            this.count -= (i + 1);
        }
        if (this.count > 0 && nextStartOffset < maxStopOffset) {
            result.push(new DecorationSegment(nextStartOffset, maxStopOffset - 1, this.classNames.join(' '), Stack._metadata(this.metadata)));
            nextStartOffset = maxStopOffset;
        }
        return nextStartOffset;
    }
    insert(stopOffset, className, metadata) {
        if (this.count === 0 || this.stopOffsets[this.count - 1] <= stopOffset) {
            // Insert at the end
            this.stopOffsets.push(stopOffset);
            this.classNames.push(className);
            this.metadata.push(metadata);
        }
        else {
            // Find the insertion position for `stopOffset`
            for (let i = 0; i < this.count; i++) {
                if (this.stopOffsets[i] >= stopOffset) {
                    this.stopOffsets.splice(i, 0, stopOffset);
                    this.classNames.splice(i, 0, className);
                    this.metadata.splice(i, 0, metadata);
                    break;
                }
            }
        }
        this.count++;
        return;
    }
}
class LineDecorationsNormalizer {
    /**
     * Normalize line decorations. Overlapping decorations will generate multiple segments
     */
    static normalize(lineContent, lineDecorations) {
        if (lineDecorations.length === 0) {
            return [];
        }
        const result = [];
        const stack = new Stack();
        let nextStartOffset = 0;
        for (let i = 0, len = lineDecorations.length; i < len; i++) {
            const d = lineDecorations[i];
            let startColumn = d.startColumn;
            let endColumn = d.endColumn;
            const className = d.className;
            const metadata = (d.type === 1 /* InlineDecorationType.Before */
                ? 2 /* LinePartMetadata.PSEUDO_BEFORE */
                : d.type === 2 /* InlineDecorationType.After */
                    ? 4 /* LinePartMetadata.PSEUDO_AFTER */
                    : 0);
            // If the position would end up in the middle of a high-low surrogate pair, we move it to before the pair
            if (startColumn > 1) {
                const charCodeBefore = lineContent.charCodeAt(startColumn - 2);
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCodeBefore)) {
                    startColumn--;
                }
            }
            if (endColumn > 1) {
                const charCodeBefore = lineContent.charCodeAt(endColumn - 2);
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCodeBefore)) {
                    endColumn--;
                }
            }
            const currentStartOffset = startColumn - 1;
            const currentEndOffset = endColumn - 2;
            nextStartOffset = stack.consumeLowerThan(currentStartOffset, nextStartOffset, result);
            if (stack.count === 0) {
                nextStartOffset = currentStartOffset;
            }
            stack.insert(currentEndOffset, className, metadata);
        }
        stack.consumeLowerThan(1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, nextStartOffset, result);
        return result;
    }
}


/***/ }),

/***/ 2762:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: function() { return /* binding */ ViewLayout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/scrollable.js
var scrollable = __webpack_require__(22687);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/linesLayout.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class PendingChanges {
    constructor() {
        this._hasPending = false;
        this._inserts = [];
        this._changes = [];
        this._removes = [];
    }
    insert(x) {
        this._hasPending = true;
        this._inserts.push(x);
    }
    change(x) {
        this._hasPending = true;
        this._changes.push(x);
    }
    remove(x) {
        this._hasPending = true;
        this._removes.push(x);
    }
    mustCommit() {
        return this._hasPending;
    }
    commit(linesLayout) {
        if (!this._hasPending) {
            return;
        }
        const inserts = this._inserts;
        const changes = this._changes;
        const removes = this._removes;
        this._hasPending = false;
        this._inserts = [];
        this._changes = [];
        this._removes = [];
        linesLayout._commitPendingChanges(inserts, changes, removes);
    }
}
class EditorWhitespace {
    constructor(id, afterLineNumber, ordinal, height, minWidth) {
        this.id = id;
        this.afterLineNumber = afterLineNumber;
        this.ordinal = ordinal;
        this.height = height;
        this.minWidth = minWidth;
        this.prefixSum = 0;
    }
}
/**
 * Layouting of objects that take vertical space (by having a height) and push down other objects.
 *
 * These objects are basically either text (lines) or spaces between those lines (whitespaces).
 * This provides commodity operations for working with lines that contain whitespace that pushes lines lower (vertically).
 */
class LinesLayout {
    constructor(lineCount, lineHeight, paddingTop, paddingBottom) {
        this._instanceId = strings/* singleLetterHash */.PJ(++LinesLayout.INSTANCE_COUNT);
        this._pendingChanges = new PendingChanges();
        this._lastWhitespaceId = 0;
        this._arr = [];
        this._prefixSumValidIndex = -1;
        this._minWidth = -1; /* marker for not being computed */
        this._lineCount = lineCount;
        this._lineHeight = lineHeight;
        this._paddingTop = paddingTop;
        this._paddingBottom = paddingBottom;
    }
    /**
     * Find the insertion index for a new value inside a sorted array of values.
     * If the value is already present in the sorted array, the insertion index will be after the already existing value.
     */
    static findInsertionIndex(arr, afterLineNumber, ordinal) {
        let low = 0;
        let high = arr.length;
        while (low < high) {
            const mid = ((low + high) >>> 1);
            if (afterLineNumber === arr[mid].afterLineNumber) {
                if (ordinal < arr[mid].ordinal) {
                    high = mid;
                }
                else {
                    low = mid + 1;
                }
            }
            else if (afterLineNumber < arr[mid].afterLineNumber) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        return low;
    }
    /**
     * Change the height of a line in pixels.
     */
    setLineHeight(lineHeight) {
        this._checkPendingChanges();
        this._lineHeight = lineHeight;
    }
    /**
     * Changes the padding used to calculate vertical offsets.
     */
    setPadding(paddingTop, paddingBottom) {
        this._paddingTop = paddingTop;
        this._paddingBottom = paddingBottom;
    }
    /**
     * Set the number of lines.
     *
     * @param lineCount New number of lines.
     */
    onFlushed(lineCount) {
        this._checkPendingChanges();
        this._lineCount = lineCount;
    }
    changeWhitespace(callback) {
        let hadAChange = false;
        try {
            const accessor = {
                insertWhitespace: (afterLineNumber, ordinal, heightInPx, minWidth) => {
                    hadAChange = true;
                    afterLineNumber = afterLineNumber | 0;
                    ordinal = ordinal | 0;
                    heightInPx = heightInPx | 0;
                    minWidth = minWidth | 0;
                    const id = this._instanceId + (++this._lastWhitespaceId);
                    this._pendingChanges.insert(new EditorWhitespace(id, afterLineNumber, ordinal, heightInPx, minWidth));
                    return id;
                },
                changeOneWhitespace: (id, newAfterLineNumber, newHeight) => {
                    hadAChange = true;
                    newAfterLineNumber = newAfterLineNumber | 0;
                    newHeight = newHeight | 0;
                    this._pendingChanges.change({ id, newAfterLineNumber, newHeight });
                },
                removeWhitespace: (id) => {
                    hadAChange = true;
                    this._pendingChanges.remove({ id });
                }
            };
            callback(accessor);
        }
        finally {
            this._pendingChanges.commit(this);
        }
        return hadAChange;
    }
    _commitPendingChanges(inserts, changes, removes) {
        if (inserts.length > 0 || removes.length > 0) {
            this._minWidth = -1; /* marker for not being computed */
        }
        if (inserts.length + changes.length + removes.length <= 1) {
            // when only one thing happened, handle it "delicately"
            for (const insert of inserts) {
                this._insertWhitespace(insert);
            }
            for (const change of changes) {
                this._changeOneWhitespace(change.id, change.newAfterLineNumber, change.newHeight);
            }
            for (const remove of removes) {
                const index = this._findWhitespaceIndex(remove.id);
                if (index === -1) {
                    continue;
                }
                this._removeWhitespace(index);
            }
            return;
        }
        // simply rebuild the entire datastructure
        const toRemove = new Set();
        for (const remove of removes) {
            toRemove.add(remove.id);
        }
        const toChange = new Map();
        for (const change of changes) {
            toChange.set(change.id, change);
        }
        const applyRemoveAndChange = (whitespaces) => {
            const result = [];
            for (const whitespace of whitespaces) {
                if (toRemove.has(whitespace.id)) {
                    continue;
                }
                if (toChange.has(whitespace.id)) {
                    const change = toChange.get(whitespace.id);
                    whitespace.afterLineNumber = change.newAfterLineNumber;
                    whitespace.height = change.newHeight;
                }
                result.push(whitespace);
            }
            return result;
        };
        const result = applyRemoveAndChange(this._arr).concat(applyRemoveAndChange(inserts));
        result.sort((a, b) => {
            if (a.afterLineNumber === b.afterLineNumber) {
                return a.ordinal - b.ordinal;
            }
            return a.afterLineNumber - b.afterLineNumber;
        });
        this._arr = result;
        this._prefixSumValidIndex = -1;
    }
    _checkPendingChanges() {
        if (this._pendingChanges.mustCommit()) {
            this._pendingChanges.commit(this);
        }
    }
    _insertWhitespace(whitespace) {
        const insertIndex = LinesLayout.findInsertionIndex(this._arr, whitespace.afterLineNumber, whitespace.ordinal);
        this._arr.splice(insertIndex, 0, whitespace);
        this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, insertIndex - 1);
    }
    _findWhitespaceIndex(id) {
        const arr = this._arr;
        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                return i;
            }
        }
        return -1;
    }
    _changeOneWhitespace(id, newAfterLineNumber, newHeight) {
        const index = this._findWhitespaceIndex(id);
        if (index === -1) {
            return;
        }
        if (this._arr[index].height !== newHeight) {
            this._arr[index].height = newHeight;
            this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, index - 1);
        }
        if (this._arr[index].afterLineNumber !== newAfterLineNumber) {
            // `afterLineNumber` changed for this whitespace
            // Record old whitespace
            const whitespace = this._arr[index];
            // Since changing `afterLineNumber` can trigger a reordering, we're gonna remove this whitespace
            this._removeWhitespace(index);
            whitespace.afterLineNumber = newAfterLineNumber;
            // And add it again
            this._insertWhitespace(whitespace);
        }
    }
    _removeWhitespace(removeIndex) {
        this._arr.splice(removeIndex, 1);
        this._prefixSumValidIndex = Math.min(this._prefixSumValidIndex, removeIndex - 1);
    }
    /**
     * Notify the layouter that lines have been deleted (a continuous zone of lines).
     *
     * @param fromLineNumber The line number at which the deletion started, inclusive
     * @param toLineNumber The line number at which the deletion ended, inclusive
     */
    onLinesDeleted(fromLineNumber, toLineNumber) {
        this._checkPendingChanges();
        fromLineNumber = fromLineNumber | 0;
        toLineNumber = toLineNumber | 0;
        this._lineCount -= (toLineNumber - fromLineNumber + 1);
        for (let i = 0, len = this._arr.length; i < len; i++) {
            const afterLineNumber = this._arr[i].afterLineNumber;
            if (fromLineNumber <= afterLineNumber && afterLineNumber <= toLineNumber) {
                // The line this whitespace was after has been deleted
                //  => move whitespace to before first deleted line
                this._arr[i].afterLineNumber = fromLineNumber - 1;
            }
            else if (afterLineNumber > toLineNumber) {
                // The line this whitespace was after has been moved up
                //  => move whitespace up
                this._arr[i].afterLineNumber -= (toLineNumber - fromLineNumber + 1);
            }
        }
    }
    /**
     * Notify the layouter that lines have been inserted (a continuous zone of lines).
     *
     * @param fromLineNumber The line number at which the insertion started, inclusive
     * @param toLineNumber The line number at which the insertion ended, inclusive.
     */
    onLinesInserted(fromLineNumber, toLineNumber) {
        this._checkPendingChanges();
        fromLineNumber = fromLineNumber | 0;
        toLineNumber = toLineNumber | 0;
        this._lineCount += (toLineNumber - fromLineNumber + 1);
        for (let i = 0, len = this._arr.length; i < len; i++) {
            const afterLineNumber = this._arr[i].afterLineNumber;
            if (fromLineNumber <= afterLineNumber) {
                this._arr[i].afterLineNumber += (toLineNumber - fromLineNumber + 1);
            }
        }
    }
    /**
     * Get the sum of all the whitespaces.
     */
    getWhitespacesTotalHeight() {
        this._checkPendingChanges();
        if (this._arr.length === 0) {
            return 0;
        }
        return this.getWhitespacesAccumulatedHeight(this._arr.length - 1);
    }
    /**
     * Return the sum of the heights of the whitespaces at [0..index].
     * This includes the whitespace at `index`.
     *
     * @param index The index of the whitespace.
     * @return The sum of the heights of all whitespaces before the one at `index`, including the one at `index`.
     */
    getWhitespacesAccumulatedHeight(index) {
        this._checkPendingChanges();
        index = index | 0;
        let startIndex = Math.max(0, this._prefixSumValidIndex + 1);
        if (startIndex === 0) {
            this._arr[0].prefixSum = this._arr[0].height;
            startIndex++;
        }
        for (let i = startIndex; i <= index; i++) {
            this._arr[i].prefixSum = this._arr[i - 1].prefixSum + this._arr[i].height;
        }
        this._prefixSumValidIndex = Math.max(this._prefixSumValidIndex, index);
        return this._arr[index].prefixSum;
    }
    /**
     * Get the sum of heights for all objects.
     *
     * @return The sum of heights for all objects.
     */
    getLinesTotalHeight() {
        this._checkPendingChanges();
        const linesHeight = this._lineHeight * this._lineCount;
        const whitespacesHeight = this.getWhitespacesTotalHeight();
        return linesHeight + whitespacesHeight + this._paddingTop + this._paddingBottom;
    }
    /**
     * Returns the accumulated height of whitespaces before the given line number.
     *
     * @param lineNumber The line number
     */
    getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber) {
        this._checkPendingChanges();
        lineNumber = lineNumber | 0;
        const lastWhitespaceBeforeLineNumber = this._findLastWhitespaceBeforeLineNumber(lineNumber);
        if (lastWhitespaceBeforeLineNumber === -1) {
            return 0;
        }
        return this.getWhitespacesAccumulatedHeight(lastWhitespaceBeforeLineNumber);
    }
    _findLastWhitespaceBeforeLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        // Find the whitespace before line number
        const arr = this._arr;
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            const delta = (high - low) | 0;
            const halfDelta = (delta / 2) | 0;
            const mid = (low + halfDelta) | 0;
            if (arr[mid].afterLineNumber < lineNumber) {
                if (mid + 1 >= arr.length || arr[mid + 1].afterLineNumber >= lineNumber) {
                    return mid;
                }
                else {
                    low = (mid + 1) | 0;
                }
            }
            else {
                high = (mid - 1) | 0;
            }
        }
        return -1;
    }
    _findFirstWhitespaceAfterLineNumber(lineNumber) {
        lineNumber = lineNumber | 0;
        const lastWhitespaceBeforeLineNumber = this._findLastWhitespaceBeforeLineNumber(lineNumber);
        const firstWhitespaceAfterLineNumber = lastWhitespaceBeforeLineNumber + 1;
        if (firstWhitespaceAfterLineNumber < this._arr.length) {
            return firstWhitespaceAfterLineNumber;
        }
        return -1;
    }
    /**
     * Find the index of the first whitespace which has `afterLineNumber` >= `lineNumber`.
     * @return The index of the first whitespace with `afterLineNumber` >= `lineNumber` or -1 if no whitespace is found.
     */
    getFirstWhitespaceIndexAfterLineNumber(lineNumber) {
        this._checkPendingChanges();
        lineNumber = lineNumber | 0;
        return this._findFirstWhitespaceAfterLineNumber(lineNumber);
    }
    /**
     * Get the vertical offset (the sum of heights for all objects above) a certain line number.
     *
     * @param lineNumber The line number
     * @return The sum of heights for all objects above `lineNumber`.
     */
    getVerticalOffsetForLineNumber(lineNumber, includeViewZones = false) {
        this._checkPendingChanges();
        lineNumber = lineNumber | 0;
        let previousLinesHeight;
        if (lineNumber > 1) {
            previousLinesHeight = this._lineHeight * (lineNumber - 1);
        }
        else {
            previousLinesHeight = 0;
        }
        const previousWhitespacesHeight = this.getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber - (includeViewZones ? 1 : 0));
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    /**
     * Get the vertical offset (the sum of heights for all objects above) a certain line number.
     *
     * @param lineNumber The line number
     * @return The sum of heights for all objects above `lineNumber`.
     */
    getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones = false) {
        this._checkPendingChanges();
        lineNumber = lineNumber | 0;
        const previousLinesHeight = this._lineHeight * lineNumber;
        const previousWhitespacesHeight = this.getWhitespaceAccumulatedHeightBeforeLineNumber(lineNumber + (includeViewZones ? 1 : 0));
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    /**
     * The maximum min width for all whitespaces.
     */
    getWhitespaceMinWidth() {
        this._checkPendingChanges();
        if (this._minWidth === -1) {
            let minWidth = 0;
            for (let i = 0, len = this._arr.length; i < len; i++) {
                minWidth = Math.max(minWidth, this._arr[i].minWidth);
            }
            this._minWidth = minWidth;
        }
        return this._minWidth;
    }
    /**
     * Check if `verticalOffset` is below all lines.
     */
    isAfterLines(verticalOffset) {
        this._checkPendingChanges();
        const totalHeight = this.getLinesTotalHeight();
        return verticalOffset > totalHeight;
    }
    isInTopPadding(verticalOffset) {
        if (this._paddingTop === 0) {
            return false;
        }
        this._checkPendingChanges();
        return (verticalOffset < this._paddingTop);
    }
    isInBottomPadding(verticalOffset) {
        if (this._paddingBottom === 0) {
            return false;
        }
        this._checkPendingChanges();
        const totalHeight = this.getLinesTotalHeight();
        return (verticalOffset >= totalHeight - this._paddingBottom);
    }
    /**
     * Find the first line number that is at or after vertical offset `verticalOffset`.
     * i.e. if getVerticalOffsetForLine(line) is x and getVerticalOffsetForLine(line + 1) is y, then
     * getLineNumberAtOrAfterVerticalOffset(i) = line, x <= i < y.
     *
     * @param verticalOffset The vertical offset to search at.
     * @return The line number at or after vertical offset `verticalOffset`.
     */
    getLineNumberAtOrAfterVerticalOffset(verticalOffset) {
        this._checkPendingChanges();
        verticalOffset = verticalOffset | 0;
        if (verticalOffset < 0) {
            return 1;
        }
        const linesCount = this._lineCount | 0;
        const lineHeight = this._lineHeight;
        let minLineNumber = 1;
        let maxLineNumber = linesCount;
        while (minLineNumber < maxLineNumber) {
            const midLineNumber = ((minLineNumber + maxLineNumber) / 2) | 0;
            const midLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(midLineNumber) | 0;
            if (verticalOffset >= midLineNumberVerticalOffset + lineHeight) {
                // vertical offset is after mid line number
                minLineNumber = midLineNumber + 1;
            }
            else if (verticalOffset >= midLineNumberVerticalOffset) {
                // Hit
                return midLineNumber;
            }
            else {
                // vertical offset is before mid line number, but mid line number could still be what we're searching for
                maxLineNumber = midLineNumber;
            }
        }
        if (minLineNumber > linesCount) {
            return linesCount;
        }
        return minLineNumber;
    }
    /**
     * Get all the lines and their relative vertical offsets that are positioned between `verticalOffset1` and `verticalOffset2`.
     *
     * @param verticalOffset1 The beginning of the viewport.
     * @param verticalOffset2 The end of the viewport.
     * @return A structure describing the lines positioned between `verticalOffset1` and `verticalOffset2`.
     */
    getLinesViewportData(verticalOffset1, verticalOffset2) {
        this._checkPendingChanges();
        verticalOffset1 = verticalOffset1 | 0;
        verticalOffset2 = verticalOffset2 | 0;
        const lineHeight = this._lineHeight;
        // Find first line number
        // We don't live in a perfect world, so the line number might start before or after verticalOffset1
        const startLineNumber = this.getLineNumberAtOrAfterVerticalOffset(verticalOffset1) | 0;
        const startLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(startLineNumber) | 0;
        let endLineNumber = this._lineCount | 0;
        // Also keep track of what whitespace we've got
        let whitespaceIndex = this.getFirstWhitespaceIndexAfterLineNumber(startLineNumber) | 0;
        const whitespaceCount = this.getWhitespacesCount() | 0;
        let currentWhitespaceHeight;
        let currentWhitespaceAfterLineNumber;
        if (whitespaceIndex === -1) {
            whitespaceIndex = whitespaceCount;
            currentWhitespaceAfterLineNumber = endLineNumber + 1;
            currentWhitespaceHeight = 0;
        }
        else {
            currentWhitespaceAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex) | 0;
            currentWhitespaceHeight = this.getHeightForWhitespaceIndex(whitespaceIndex) | 0;
        }
        let currentVerticalOffset = startLineNumberVerticalOffset;
        let currentLineRelativeOffset = currentVerticalOffset;
        // IE (all versions) cannot handle units above about 1,533,908 px, so every 500k pixels bring numbers down
        const STEP_SIZE = 500000;
        let bigNumbersDelta = 0;
        if (startLineNumberVerticalOffset >= STEP_SIZE) {
            // Compute a delta that guarantees that lines are positioned at `lineHeight` increments
            bigNumbersDelta = Math.floor(startLineNumberVerticalOffset / STEP_SIZE) * STEP_SIZE;
            bigNumbersDelta = Math.floor(bigNumbersDelta / lineHeight) * lineHeight;
            currentLineRelativeOffset -= bigNumbersDelta;
        }
        const linesOffsets = [];
        const verticalCenter = verticalOffset1 + (verticalOffset2 - verticalOffset1) / 2;
        let centeredLineNumber = -1;
        // Figure out how far the lines go
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            if (centeredLineNumber === -1) {
                const currentLineTop = currentVerticalOffset;
                const currentLineBottom = currentVerticalOffset + lineHeight;
                if ((currentLineTop <= verticalCenter && verticalCenter < currentLineBottom) || currentLineTop > verticalCenter) {
                    centeredLineNumber = lineNumber;
                }
            }
            // Count current line height in the vertical offsets
            currentVerticalOffset += lineHeight;
            linesOffsets[lineNumber - startLineNumber] = currentLineRelativeOffset;
            // Next line starts immediately after this one
            currentLineRelativeOffset += lineHeight;
            while (currentWhitespaceAfterLineNumber === lineNumber) {
                // Push down next line with the height of the current whitespace
                currentLineRelativeOffset += currentWhitespaceHeight;
                // Count current whitespace in the vertical offsets
                currentVerticalOffset += currentWhitespaceHeight;
                whitespaceIndex++;
                if (whitespaceIndex >= whitespaceCount) {
                    currentWhitespaceAfterLineNumber = endLineNumber + 1;
                }
                else {
                    currentWhitespaceAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex) | 0;
                    currentWhitespaceHeight = this.getHeightForWhitespaceIndex(whitespaceIndex) | 0;
                }
            }
            if (currentVerticalOffset >= verticalOffset2) {
                // We have covered the entire viewport area, time to stop
                endLineNumber = lineNumber;
                break;
            }
        }
        if (centeredLineNumber === -1) {
            centeredLineNumber = endLineNumber;
        }
        const endLineNumberVerticalOffset = this.getVerticalOffsetForLineNumber(endLineNumber) | 0;
        let completelyVisibleStartLineNumber = startLineNumber;
        let completelyVisibleEndLineNumber = endLineNumber;
        if (completelyVisibleStartLineNumber < completelyVisibleEndLineNumber) {
            if (startLineNumberVerticalOffset < verticalOffset1) {
                completelyVisibleStartLineNumber++;
            }
        }
        if (completelyVisibleStartLineNumber < completelyVisibleEndLineNumber) {
            if (endLineNumberVerticalOffset + lineHeight > verticalOffset2) {
                completelyVisibleEndLineNumber--;
            }
        }
        return {
            bigNumbersDelta: bigNumbersDelta,
            startLineNumber: startLineNumber,
            endLineNumber: endLineNumber,
            relativeVerticalOffset: linesOffsets,
            centeredLineNumber: centeredLineNumber,
            completelyVisibleStartLineNumber: completelyVisibleStartLineNumber,
            completelyVisibleEndLineNumber: completelyVisibleEndLineNumber
        };
    }
    getVerticalOffsetForWhitespaceIndex(whitespaceIndex) {
        this._checkPendingChanges();
        whitespaceIndex = whitespaceIndex | 0;
        const afterLineNumber = this.getAfterLineNumberForWhitespaceIndex(whitespaceIndex);
        let previousLinesHeight;
        if (afterLineNumber >= 1) {
            previousLinesHeight = this._lineHeight * afterLineNumber;
        }
        else {
            previousLinesHeight = 0;
        }
        let previousWhitespacesHeight;
        if (whitespaceIndex > 0) {
            previousWhitespacesHeight = this.getWhitespacesAccumulatedHeight(whitespaceIndex - 1);
        }
        else {
            previousWhitespacesHeight = 0;
        }
        return previousLinesHeight + previousWhitespacesHeight + this._paddingTop;
    }
    getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset) {
        this._checkPendingChanges();
        verticalOffset = verticalOffset | 0;
        let minWhitespaceIndex = 0;
        let maxWhitespaceIndex = this.getWhitespacesCount() - 1;
        if (maxWhitespaceIndex < 0) {
            return -1;
        }
        // Special case: nothing to be found
        const maxWhitespaceVerticalOffset = this.getVerticalOffsetForWhitespaceIndex(maxWhitespaceIndex);
        const maxWhitespaceHeight = this.getHeightForWhitespaceIndex(maxWhitespaceIndex);
        if (verticalOffset >= maxWhitespaceVerticalOffset + maxWhitespaceHeight) {
            return -1;
        }
        while (minWhitespaceIndex < maxWhitespaceIndex) {
            const midWhitespaceIndex = Math.floor((minWhitespaceIndex + maxWhitespaceIndex) / 2);
            const midWhitespaceVerticalOffset = this.getVerticalOffsetForWhitespaceIndex(midWhitespaceIndex);
            const midWhitespaceHeight = this.getHeightForWhitespaceIndex(midWhitespaceIndex);
            if (verticalOffset >= midWhitespaceVerticalOffset + midWhitespaceHeight) {
                // vertical offset is after whitespace
                minWhitespaceIndex = midWhitespaceIndex + 1;
            }
            else if (verticalOffset >= midWhitespaceVerticalOffset) {
                // Hit
                return midWhitespaceIndex;
            }
            else {
                // vertical offset is before whitespace, but midWhitespaceIndex might still be what we're searching for
                maxWhitespaceIndex = midWhitespaceIndex;
            }
        }
        return minWhitespaceIndex;
    }
    /**
     * Get exactly the whitespace that is layouted at `verticalOffset`.
     *
     * @param verticalOffset The vertical offset.
     * @return Precisely the whitespace that is layouted at `verticaloffset` or null.
     */
    getWhitespaceAtVerticalOffset(verticalOffset) {
        this._checkPendingChanges();
        verticalOffset = verticalOffset | 0;
        const candidateIndex = this.getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset);
        if (candidateIndex < 0) {
            return null;
        }
        if (candidateIndex >= this.getWhitespacesCount()) {
            return null;
        }
        const candidateTop = this.getVerticalOffsetForWhitespaceIndex(candidateIndex);
        if (candidateTop > verticalOffset) {
            return null;
        }
        const candidateHeight = this.getHeightForWhitespaceIndex(candidateIndex);
        const candidateId = this.getIdForWhitespaceIndex(candidateIndex);
        const candidateAfterLineNumber = this.getAfterLineNumberForWhitespaceIndex(candidateIndex);
        return {
            id: candidateId,
            afterLineNumber: candidateAfterLineNumber,
            verticalOffset: candidateTop,
            height: candidateHeight
        };
    }
    /**
     * Get a list of whitespaces that are positioned between `verticalOffset1` and `verticalOffset2`.
     *
     * @param verticalOffset1 The beginning of the viewport.
     * @param verticalOffset2 The end of the viewport.
     * @return An array with all the whitespaces in the viewport. If no whitespace is in viewport, the array is empty.
     */
    getWhitespaceViewportData(verticalOffset1, verticalOffset2) {
        this._checkPendingChanges();
        verticalOffset1 = verticalOffset1 | 0;
        verticalOffset2 = verticalOffset2 | 0;
        const startIndex = this.getWhitespaceIndexAtOrAfterVerticallOffset(verticalOffset1);
        const endIndex = this.getWhitespacesCount() - 1;
        if (startIndex < 0) {
            return [];
        }
        const result = [];
        for (let i = startIndex; i <= endIndex; i++) {
            const top = this.getVerticalOffsetForWhitespaceIndex(i);
            const height = this.getHeightForWhitespaceIndex(i);
            if (top >= verticalOffset2) {
                break;
            }
            result.push({
                id: this.getIdForWhitespaceIndex(i),
                afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(i),
                verticalOffset: top,
                height: height
            });
        }
        return result;
    }
    /**
     * Get all whitespaces.
     */
    getWhitespaces() {
        this._checkPendingChanges();
        return this._arr.slice(0);
    }
    /**
     * The number of whitespaces.
     */
    getWhitespacesCount() {
        this._checkPendingChanges();
        return this._arr.length;
    }
    /**
     * Get the `id` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `id` of whitespace at `index`.
     */
    getIdForWhitespaceIndex(index) {
        this._checkPendingChanges();
        index = index | 0;
        return this._arr[index].id;
    }
    /**
     * Get the `afterLineNumber` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `afterLineNumber` of whitespace at `index`.
     */
    getAfterLineNumberForWhitespaceIndex(index) {
        this._checkPendingChanges();
        index = index | 0;
        return this._arr[index].afterLineNumber;
    }
    /**
     * Get the `height` for whitespace at index `index`.
     *
     * @param index The index of the whitespace.
     * @return `height` of whitespace at `index`.
     */
    getHeightForWhitespaceIndex(index) {
        this._checkPendingChanges();
        index = index | 0;
        return this._arr[index].height;
    }
}
LinesLayout.INSTANCE_COUNT = 0;

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel.js
var viewModel = __webpack_require__(1975);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModelEventDispatcher.js
var viewModelEventDispatcher = __webpack_require__(98908);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLayout.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const SMOOTH_SCROLLING_TIME = 125;
class EditorScrollDimensions {
    constructor(width, contentWidth, height, contentHeight) {
        width = width | 0;
        contentWidth = contentWidth | 0;
        height = height | 0;
        contentHeight = contentHeight | 0;
        if (width < 0) {
            width = 0;
        }
        if (contentWidth < 0) {
            contentWidth = 0;
        }
        if (height < 0) {
            height = 0;
        }
        if (contentHeight < 0) {
            contentHeight = 0;
        }
        this.width = width;
        this.contentWidth = contentWidth;
        this.scrollWidth = Math.max(width, contentWidth);
        this.height = height;
        this.contentHeight = contentHeight;
        this.scrollHeight = Math.max(height, contentHeight);
    }
    equals(other) {
        return (this.width === other.width
            && this.contentWidth === other.contentWidth
            && this.height === other.height
            && this.contentHeight === other.contentHeight);
    }
}
class EditorScrollable extends lifecycle/* Disposable */.JT {
    constructor(smoothScrollDuration, scheduleAtNextAnimationFrame) {
        super();
        this._onDidContentSizeChange = this._register(new common_event/* Emitter */.Q5());
        this.onDidContentSizeChange = this._onDidContentSizeChange.event;
        this._dimensions = new EditorScrollDimensions(0, 0, 0, 0);
        this._scrollable = this._register(new scrollable/* Scrollable */.Rm({
            forceIntegerValues: true,
            smoothScrollDuration,
            scheduleAtNextAnimationFrame
        }));
        this.onDidScroll = this._scrollable.onScroll;
    }
    getScrollable() {
        return this._scrollable;
    }
    setSmoothScrollDuration(smoothScrollDuration) {
        this._scrollable.setSmoothScrollDuration(smoothScrollDuration);
    }
    validateScrollPosition(scrollPosition) {
        return this._scrollable.validateScrollPosition(scrollPosition);
    }
    getScrollDimensions() {
        return this._dimensions;
    }
    setScrollDimensions(dimensions) {
        if (this._dimensions.equals(dimensions)) {
            return;
        }
        const oldDimensions = this._dimensions;
        this._dimensions = dimensions;
        this._scrollable.setScrollDimensions({
            width: dimensions.width,
            scrollWidth: dimensions.scrollWidth,
            height: dimensions.height,
            scrollHeight: dimensions.scrollHeight
        }, true);
        const contentWidthChanged = (oldDimensions.contentWidth !== dimensions.contentWidth);
        const contentHeightChanged = (oldDimensions.contentHeight !== dimensions.contentHeight);
        if (contentWidthChanged || contentHeightChanged) {
            this._onDidContentSizeChange.fire(new viewModelEventDispatcher/* ContentSizeChangedEvent */.zf(oldDimensions.contentWidth, oldDimensions.contentHeight, dimensions.contentWidth, dimensions.contentHeight));
        }
    }
    getFutureScrollPosition() {
        return this._scrollable.getFutureScrollPosition();
    }
    getCurrentScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    setScrollPositionNow(update) {
        this._scrollable.setScrollPositionNow(update);
    }
    setScrollPositionSmooth(update) {
        this._scrollable.setScrollPositionSmooth(update);
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
}
class ViewLayout extends lifecycle/* Disposable */.JT {
    constructor(configuration, lineCount, scheduleAtNextAnimationFrame) {
        super();
        this._configuration = configuration;
        const options = this._configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        const padding = options.get(82 /* EditorOption.padding */);
        this._linesLayout = new LinesLayout(lineCount, options.get(65 /* EditorOption.lineHeight */), padding.top, padding.bottom);
        this._scrollable = this._register(new EditorScrollable(0, scheduleAtNextAnimationFrame));
        this._configureSmoothScrollDuration();
        this._scrollable.setScrollDimensions(new EditorScrollDimensions(layoutInfo.contentWidth, 0, layoutInfo.height, 0));
        this.onDidScroll = this._scrollable.onDidScroll;
        this.onDidContentSizeChange = this._scrollable.onDidContentSizeChange;
        this._updateHeight();
    }
    dispose() {
        super.dispose();
    }
    getScrollable() {
        return this._scrollable.getScrollable();
    }
    onHeightMaybeChanged() {
        this._updateHeight();
    }
    _configureSmoothScrollDuration() {
        this._scrollable.setSmoothScrollDuration(this._configuration.options.get(112 /* EditorOption.smoothScrolling */) ? SMOOTH_SCROLLING_TIME : 0);
    }
    // ---- begin view event handlers
    onConfigurationChanged(e) {
        const options = this._configuration.options;
        if (e.hasChanged(65 /* EditorOption.lineHeight */)) {
            this._linesLayout.setLineHeight(options.get(65 /* EditorOption.lineHeight */));
        }
        if (e.hasChanged(82 /* EditorOption.padding */)) {
            const padding = options.get(82 /* EditorOption.padding */);
            this._linesLayout.setPadding(padding.top, padding.bottom);
        }
        if (e.hasChanged(142 /* EditorOption.layoutInfo */)) {
            const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
            const width = layoutInfo.contentWidth;
            const height = layoutInfo.height;
            const scrollDimensions = this._scrollable.getScrollDimensions();
            const contentWidth = scrollDimensions.contentWidth;
            this._scrollable.setScrollDimensions(new EditorScrollDimensions(width, scrollDimensions.contentWidth, height, this._getContentHeight(width, height, contentWidth)));
        }
        else {
            this._updateHeight();
        }
        if (e.hasChanged(112 /* EditorOption.smoothScrolling */)) {
            this._configureSmoothScrollDuration();
        }
    }
    onFlushed(lineCount) {
        this._linesLayout.onFlushed(lineCount);
    }
    onLinesDeleted(fromLineNumber, toLineNumber) {
        this._linesLayout.onLinesDeleted(fromLineNumber, toLineNumber);
    }
    onLinesInserted(fromLineNumber, toLineNumber) {
        this._linesLayout.onLinesInserted(fromLineNumber, toLineNumber);
    }
    // ---- end view event handlers
    _getHorizontalScrollbarHeight(width, scrollWidth) {
        const options = this._configuration.options;
        const scrollbar = options.get(101 /* EditorOption.scrollbar */);
        if (scrollbar.horizontal === 2 /* ScrollbarVisibility.Hidden */) {
            // horizontal scrollbar not visible
            return 0;
        }
        if (width >= scrollWidth) {
            // horizontal scrollbar not visible
            return 0;
        }
        return scrollbar.horizontalScrollbarSize;
    }
    _getContentHeight(width, height, contentWidth) {
        const options = this._configuration.options;
        let result = this._linesLayout.getLinesTotalHeight();
        if (options.get(103 /* EditorOption.scrollBeyondLastLine */)) {
            result += Math.max(0, height - options.get(65 /* EditorOption.lineHeight */) - options.get(82 /* EditorOption.padding */).bottom);
        }
        else {
            result += this._getHorizontalScrollbarHeight(width, contentWidth);
        }
        return result;
    }
    _updateHeight() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        const width = scrollDimensions.width;
        const height = scrollDimensions.height;
        const contentWidth = scrollDimensions.contentWidth;
        this._scrollable.setScrollDimensions(new EditorScrollDimensions(width, scrollDimensions.contentWidth, height, this._getContentHeight(width, height, contentWidth)));
    }
    // ---- Layouting logic
    getCurrentViewport() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        const currentScrollPosition = this._scrollable.getCurrentScrollPosition();
        return new viewModel/* Viewport */.l_(currentScrollPosition.scrollTop, currentScrollPosition.scrollLeft, scrollDimensions.width, scrollDimensions.height);
    }
    getFutureViewport() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        const currentScrollPosition = this._scrollable.getFutureScrollPosition();
        return new viewModel/* Viewport */.l_(currentScrollPosition.scrollTop, currentScrollPosition.scrollLeft, scrollDimensions.width, scrollDimensions.height);
    }
    _computeContentWidth(maxLineWidth) {
        const options = this._configuration.options;
        const wrappingInfo = options.get(143 /* EditorOption.wrappingInfo */);
        const fontInfo = options.get(49 /* EditorOption.fontInfo */);
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        if (wrappingInfo.isViewportWrapping) {
            const minimap = options.get(71 /* EditorOption.minimap */);
            if (maxLineWidth > layoutInfo.contentWidth + fontInfo.typicalHalfwidthCharacterWidth) {
                // This is a case where viewport wrapping is on, but the line extends above the viewport
                if (minimap.enabled && minimap.side === 'right') {
                    // We need to accomodate the scrollbar width
                    return maxLineWidth + layoutInfo.verticalScrollbarWidth;
                }
            }
            return maxLineWidth;
        }
        else {
            const extraHorizontalSpace = options.get(102 /* EditorOption.scrollBeyondLastColumn */) * fontInfo.typicalHalfwidthCharacterWidth;
            const whitespaceMinWidth = this._linesLayout.getWhitespaceMinWidth();
            return Math.max(maxLineWidth + extraHorizontalSpace + layoutInfo.verticalScrollbarWidth, whitespaceMinWidth);
        }
    }
    setMaxLineWidth(maxLineWidth) {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        // const newScrollWidth = ;
        this._scrollable.setScrollDimensions(new EditorScrollDimensions(scrollDimensions.width, this._computeContentWidth(maxLineWidth), scrollDimensions.height, scrollDimensions.contentHeight));
        // The height might depend on the fact that there is a horizontal scrollbar or not
        this._updateHeight();
    }
    // ---- view state
    saveState() {
        const currentScrollPosition = this._scrollable.getFutureScrollPosition();
        const scrollTop = currentScrollPosition.scrollTop;
        const firstLineNumberInViewport = this._linesLayout.getLineNumberAtOrAfterVerticalOffset(scrollTop);
        const whitespaceAboveFirstLine = this._linesLayout.getWhitespaceAccumulatedHeightBeforeLineNumber(firstLineNumberInViewport);
        return {
            scrollTop: scrollTop,
            scrollTopWithoutViewZones: scrollTop - whitespaceAboveFirstLine,
            scrollLeft: currentScrollPosition.scrollLeft
        };
    }
    // ----
    changeWhitespace(callback) {
        const hadAChange = this._linesLayout.changeWhitespace(callback);
        if (hadAChange) {
            this.onHeightMaybeChanged();
        }
        return hadAChange;
    }
    getVerticalOffsetForLineNumber(lineNumber, includeViewZones = false) {
        return this._linesLayout.getVerticalOffsetForLineNumber(lineNumber, includeViewZones);
    }
    getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones = false) {
        return this._linesLayout.getVerticalOffsetAfterLineNumber(lineNumber, includeViewZones);
    }
    isAfterLines(verticalOffset) {
        return this._linesLayout.isAfterLines(verticalOffset);
    }
    isInTopPadding(verticalOffset) {
        return this._linesLayout.isInTopPadding(verticalOffset);
    }
    isInBottomPadding(verticalOffset) {
        return this._linesLayout.isInBottomPadding(verticalOffset);
    }
    getLineNumberAtVerticalOffset(verticalOffset) {
        return this._linesLayout.getLineNumberAtOrAfterVerticalOffset(verticalOffset);
    }
    getWhitespaceAtVerticalOffset(verticalOffset) {
        return this._linesLayout.getWhitespaceAtVerticalOffset(verticalOffset);
    }
    getLinesViewportData() {
        const visibleBox = this.getCurrentViewport();
        return this._linesLayout.getLinesViewportData(visibleBox.top, visibleBox.top + visibleBox.height);
    }
    getLinesViewportDataAtScrollTop(scrollTop) {
        // do some minimal validations on scrollTop
        const scrollDimensions = this._scrollable.getScrollDimensions();
        if (scrollTop + scrollDimensions.height > scrollDimensions.scrollHeight) {
            scrollTop = scrollDimensions.scrollHeight - scrollDimensions.height;
        }
        if (scrollTop < 0) {
            scrollTop = 0;
        }
        return this._linesLayout.getLinesViewportData(scrollTop, scrollTop + scrollDimensions.height);
    }
    getWhitespaceViewportData() {
        const visibleBox = this.getCurrentViewport();
        return this._linesLayout.getWhitespaceViewportData(visibleBox.top, visibleBox.top + visibleBox.height);
    }
    getWhitespaces() {
        return this._linesLayout.getWhitespaces();
    }
    // ----
    getContentWidth() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        return scrollDimensions.contentWidth;
    }
    getScrollWidth() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        return scrollDimensions.scrollWidth;
    }
    getContentHeight() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        return scrollDimensions.contentHeight;
    }
    getScrollHeight() {
        const scrollDimensions = this._scrollable.getScrollDimensions();
        return scrollDimensions.scrollHeight;
    }
    getCurrentScrollLeft() {
        const currentScrollPosition = this._scrollable.getCurrentScrollPosition();
        return currentScrollPosition.scrollLeft;
    }
    getCurrentScrollTop() {
        const currentScrollPosition = this._scrollable.getCurrentScrollPosition();
        return currentScrollPosition.scrollTop;
    }
    validateScrollPosition(scrollPosition) {
        return this._scrollable.validateScrollPosition(scrollPosition);
    }
    setScrollPosition(position, type) {
        if (type === 1 /* ScrollType.Immediate */) {
            this._scrollable.setScrollPositionNow(position);
        }
        else {
            this._scrollable.setScrollPositionSmooth(position);
        }
    }
    hasPendingScrollAnimation() {
        return this._scrollable.hasPendingScrollAnimation();
    }
    deltaScrollNow(deltaScrollLeft, deltaScrollTop) {
        const currentScrollPosition = this._scrollable.getCurrentScrollPosition();
        this._scrollable.setScrollPositionNow({
            scrollLeft: currentScrollPosition.scrollLeft + deltaScrollLeft,
            scrollTop: currentScrollPosition.scrollTop + deltaScrollTop
        });
    }
}


/***/ }),

/***/ 60533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Nd: function() { return /* binding */ DomPosition; },
  zG: function() { return /* binding */ LineRange; },
  IJ: function() { return /* binding */ RenderLineInput; },
  d1: function() { return /* binding */ renderViewLine; },
  tF: function() { return /* binding */ renderViewLine2; }
});

// UNUSED EXPORTS: CharacterMapping, RenderLineOutput, RenderLineOutput2

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder.js
var stringBuilder = __webpack_require__(63156);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations.js
var viewLayout_lineDecorations = __webpack_require__(35900);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/linePart.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class LinePart {
    constructor(
    /**
     * last char index of this token (not inclusive).
     */
    endIndex, type, metadata, containsRTL) {
        this.endIndex = endIndex;
        this.type = type;
        this.metadata = metadata;
        this.containsRTL = containsRTL;
        this._linePartBrand = undefined;
    }
    isWhitespace() {
        return (this.metadata & 1 /* LinePartMetadata.IS_WHITESPACE_MASK */ ? true : false);
    }
    isPseudoAfter() {
        return (this.metadata & 4 /* LinePartMetadata.PSEUDO_AFTER_MASK */ ? true : false);
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class LineRange {
    constructor(startIndex, endIndex) {
        this.startOffset = startIndex;
        this.endOffset = endIndex;
    }
    equals(otherLineRange) {
        return this.startOffset === otherLineRange.startOffset
            && this.endOffset === otherLineRange.endOffset;
    }
}
class RenderLineInput {
    constructor(useMonospaceOptimizations, canUseHalfwidthRightwardsArrow, lineContent, continuesWithWrappedLine, isBasicASCII, containsRTL, fauxIndentLength, lineTokens, lineDecorations, tabSize, startVisibleColumn, spaceWidth, middotWidth, wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, selectionsOnLine) {
        this.useMonospaceOptimizations = useMonospaceOptimizations;
        this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
        this.lineContent = lineContent;
        this.continuesWithWrappedLine = continuesWithWrappedLine;
        this.isBasicASCII = isBasicASCII;
        this.containsRTL = containsRTL;
        this.fauxIndentLength = fauxIndentLength;
        this.lineTokens = lineTokens;
        this.lineDecorations = lineDecorations.sort(viewLayout_lineDecorations/* LineDecoration */.Kp.compare);
        this.tabSize = tabSize;
        this.startVisibleColumn = startVisibleColumn;
        this.spaceWidth = spaceWidth;
        this.stopRenderingLineAfter = stopRenderingLineAfter;
        this.renderWhitespace = (renderWhitespace === 'all'
            ? 4 /* RenderWhitespace.All */
            : renderWhitespace === 'boundary'
                ? 1 /* RenderWhitespace.Boundary */
                : renderWhitespace === 'selection'
                    ? 2 /* RenderWhitespace.Selection */
                    : renderWhitespace === 'trailing'
                        ? 3 /* RenderWhitespace.Trailing */
                        : 0 /* RenderWhitespace.None */);
        this.renderControlCharacters = renderControlCharacters;
        this.fontLigatures = fontLigatures;
        this.selectionsOnLine = selectionsOnLine && selectionsOnLine.sort((a, b) => a.startOffset < b.startOffset ? -1 : 1);
        const wsmiddotDiff = Math.abs(wsmiddotWidth - spaceWidth);
        const middotDiff = Math.abs(middotWidth - spaceWidth);
        if (wsmiddotDiff < middotDiff) {
            this.renderSpaceWidth = wsmiddotWidth;
            this.renderSpaceCharCode = 0x2E31; // U+2E31 - WORD SEPARATOR MIDDLE DOT
        }
        else {
            this.renderSpaceWidth = middotWidth;
            this.renderSpaceCharCode = 0xB7; // U+00B7 - MIDDLE DOT
        }
    }
    sameSelection(otherSelections) {
        if (this.selectionsOnLine === null) {
            return otherSelections === null;
        }
        if (otherSelections === null) {
            return false;
        }
        if (otherSelections.length !== this.selectionsOnLine.length) {
            return false;
        }
        for (let i = 0; i < this.selectionsOnLine.length; i++) {
            if (!this.selectionsOnLine[i].equals(otherSelections[i])) {
                return false;
            }
        }
        return true;
    }
    equals(other) {
        return (this.useMonospaceOptimizations === other.useMonospaceOptimizations
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.lineContent === other.lineContent
            && this.continuesWithWrappedLine === other.continuesWithWrappedLine
            && this.isBasicASCII === other.isBasicASCII
            && this.containsRTL === other.containsRTL
            && this.fauxIndentLength === other.fauxIndentLength
            && this.tabSize === other.tabSize
            && this.startVisibleColumn === other.startVisibleColumn
            && this.spaceWidth === other.spaceWidth
            && this.renderSpaceWidth === other.renderSpaceWidth
            && this.renderSpaceCharCode === other.renderSpaceCharCode
            && this.stopRenderingLineAfter === other.stopRenderingLineAfter
            && this.renderWhitespace === other.renderWhitespace
            && this.renderControlCharacters === other.renderControlCharacters
            && this.fontLigatures === other.fontLigatures
            && viewLayout_lineDecorations/* LineDecoration */.Kp.equalsArr(this.lineDecorations, other.lineDecorations)
            && this.lineTokens.equals(other.lineTokens)
            && this.sameSelection(other.selectionsOnLine));
    }
}
class DomPosition {
    constructor(partIndex, charIndex) {
        this.partIndex = partIndex;
        this.charIndex = charIndex;
    }
}
/**
 * Provides a both direction mapping between a line's character and its rendered position.
 */
class CharacterMapping {
    static getPartIndex(partData) {
        return (partData & 4294901760 /* CharacterMappingConstants.PART_INDEX_MASK */) >>> 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */;
    }
    static getCharIndex(partData) {
        return (partData & 65535 /* CharacterMappingConstants.CHAR_INDEX_MASK */) >>> 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */;
    }
    constructor(length, partCount) {
        this.length = length;
        this._data = new Uint32Array(this.length);
        this._horizontalOffset = new Uint32Array(this.length);
    }
    setColumnInfo(column, partIndex, charIndex, horizontalOffset) {
        const partData = ((partIndex << 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */)
            | (charIndex << 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */)) >>> 0;
        this._data[column - 1] = partData;
        this._horizontalOffset[column - 1] = horizontalOffset;
    }
    getHorizontalOffset(column) {
        if (this._horizontalOffset.length === 0) {
            // No characters on this line
            return 0;
        }
        return this._horizontalOffset[column - 1];
    }
    charOffsetToPartData(charOffset) {
        if (this.length === 0) {
            return 0;
        }
        if (charOffset < 0) {
            return this._data[0];
        }
        if (charOffset >= this.length) {
            return this._data[this.length - 1];
        }
        return this._data[charOffset];
    }
    getDomPosition(column) {
        const partData = this.charOffsetToPartData(column - 1);
        const partIndex = CharacterMapping.getPartIndex(partData);
        const charIndex = CharacterMapping.getCharIndex(partData);
        return new DomPosition(partIndex, charIndex);
    }
    getColumn(domPosition, partLength) {
        const charOffset = this.partDataToCharOffset(domPosition.partIndex, partLength, domPosition.charIndex);
        return charOffset + 1;
    }
    partDataToCharOffset(partIndex, partLength, charIndex) {
        if (this.length === 0) {
            return 0;
        }
        const searchEntry = ((partIndex << 16 /* CharacterMappingConstants.PART_INDEX_OFFSET */)
            | (charIndex << 0 /* CharacterMappingConstants.CHAR_INDEX_OFFSET */)) >>> 0;
        let min = 0;
        let max = this.length - 1;
        while (min + 1 < max) {
            const mid = ((min + max) >>> 1);
            const midEntry = this._data[mid];
            if (midEntry === searchEntry) {
                return mid;
            }
            else if (midEntry > searchEntry) {
                max = mid;
            }
            else {
                min = mid;
            }
        }
        if (min === max) {
            return min;
        }
        const minEntry = this._data[min];
        const maxEntry = this._data[max];
        if (minEntry === searchEntry) {
            return min;
        }
        if (maxEntry === searchEntry) {
            return max;
        }
        const minPartIndex = CharacterMapping.getPartIndex(minEntry);
        const minCharIndex = CharacterMapping.getCharIndex(minEntry);
        const maxPartIndex = CharacterMapping.getPartIndex(maxEntry);
        let maxCharIndex;
        if (minPartIndex !== maxPartIndex) {
            // sitting between parts
            maxCharIndex = partLength;
        }
        else {
            maxCharIndex = CharacterMapping.getCharIndex(maxEntry);
        }
        const minEntryDistance = charIndex - minCharIndex;
        const maxEntryDistance = maxCharIndex - charIndex;
        if (minEntryDistance <= maxEntryDistance) {
            return min;
        }
        return max;
    }
}
class RenderLineOutput {
    constructor(characterMapping, containsRTL, containsForeignElements) {
        this._renderLineOutputBrand = undefined;
        this.characterMapping = characterMapping;
        this.containsRTL = containsRTL;
        this.containsForeignElements = containsForeignElements;
    }
}
function renderViewLine(input, sb) {
    if (input.lineContent.length === 0) {
        if (input.lineDecorations.length > 0) {
            // This line is empty, but it contains inline decorations
            sb.appendString(`<span>`);
            let beforeCount = 0;
            let afterCount = 0;
            let containsForeignElements = 0 /* ForeignElementType.None */;
            for (const lineDecoration of input.lineDecorations) {
                if (lineDecoration.type === 1 /* InlineDecorationType.Before */ || lineDecoration.type === 2 /* InlineDecorationType.After */) {
                    sb.appendString(`<span class="`);
                    sb.appendString(lineDecoration.className);
                    sb.appendString(`"></span>`);
                    if (lineDecoration.type === 1 /* InlineDecorationType.Before */) {
                        containsForeignElements |= 1 /* ForeignElementType.Before */;
                        beforeCount++;
                    }
                    if (lineDecoration.type === 2 /* InlineDecorationType.After */) {
                        containsForeignElements |= 2 /* ForeignElementType.After */;
                        afterCount++;
                    }
                }
            }
            sb.appendString(`</span>`);
            const characterMapping = new CharacterMapping(1, beforeCount + afterCount);
            characterMapping.setColumnInfo(1, beforeCount, 0, 0);
            return new RenderLineOutput(characterMapping, false, containsForeignElements);
        }
        // completely empty line
        sb.appendString('<span><span></span></span>');
        return new RenderLineOutput(new CharacterMapping(0, 0), false, 0 /* ForeignElementType.None */);
    }
    return _renderLine(resolveRenderLineInput(input), sb);
}
class RenderLineOutput2 {
    constructor(characterMapping, html, containsRTL, containsForeignElements) {
        this.characterMapping = characterMapping;
        this.html = html;
        this.containsRTL = containsRTL;
        this.containsForeignElements = containsForeignElements;
    }
}
function renderViewLine2(input) {
    const sb = new stringBuilder/* StringBuilder */.HT(10000);
    const out = renderViewLine(input, sb);
    return new RenderLineOutput2(out.characterMapping, sb.build(), out.containsRTL, out.containsForeignElements);
}
class ResolvedRenderLineInput {
    constructor(fontIsMonospace, canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, parts, containsForeignElements, fauxIndentLength, tabSize, startVisibleColumn, containsRTL, spaceWidth, renderSpaceCharCode, renderWhitespace, renderControlCharacters) {
        this.fontIsMonospace = fontIsMonospace;
        this.canUseHalfwidthRightwardsArrow = canUseHalfwidthRightwardsArrow;
        this.lineContent = lineContent;
        this.len = len;
        this.isOverflowing = isOverflowing;
        this.overflowingCharCount = overflowingCharCount;
        this.parts = parts;
        this.containsForeignElements = containsForeignElements;
        this.fauxIndentLength = fauxIndentLength;
        this.tabSize = tabSize;
        this.startVisibleColumn = startVisibleColumn;
        this.containsRTL = containsRTL;
        this.spaceWidth = spaceWidth;
        this.renderSpaceCharCode = renderSpaceCharCode;
        this.renderWhitespace = renderWhitespace;
        this.renderControlCharacters = renderControlCharacters;
        //
    }
}
function resolveRenderLineInput(input) {
    const lineContent = input.lineContent;
    let isOverflowing;
    let overflowingCharCount;
    let len;
    if (input.stopRenderingLineAfter !== -1 && input.stopRenderingLineAfter < lineContent.length) {
        isOverflowing = true;
        overflowingCharCount = lineContent.length - input.stopRenderingLineAfter;
        len = input.stopRenderingLineAfter;
    }
    else {
        isOverflowing = false;
        overflowingCharCount = 0;
        len = lineContent.length;
    }
    let tokens = transformAndRemoveOverflowing(lineContent, input.containsRTL, input.lineTokens, input.fauxIndentLength, len);
    if (input.renderControlCharacters && !input.isBasicASCII) {
        // Calling `extractControlCharacters` before adding (possibly empty) line parts
        // for inline decorations. `extractControlCharacters` removes empty line parts.
        tokens = extractControlCharacters(lineContent, tokens);
    }
    if (input.renderWhitespace === 4 /* RenderWhitespace.All */ ||
        input.renderWhitespace === 1 /* RenderWhitespace.Boundary */ ||
        (input.renderWhitespace === 2 /* RenderWhitespace.Selection */ && !!input.selectionsOnLine) ||
        (input.renderWhitespace === 3 /* RenderWhitespace.Trailing */ && !input.continuesWithWrappedLine)) {
        tokens = _applyRenderWhitespace(input, lineContent, len, tokens);
    }
    let containsForeignElements = 0 /* ForeignElementType.None */;
    if (input.lineDecorations.length > 0) {
        for (let i = 0, len = input.lineDecorations.length; i < len; i++) {
            const lineDecoration = input.lineDecorations[i];
            if (lineDecoration.type === 3 /* InlineDecorationType.RegularAffectingLetterSpacing */) {
                // Pretend there are foreign elements... although not 100% accurate.
                containsForeignElements |= 1 /* ForeignElementType.Before */;
            }
            else if (lineDecoration.type === 1 /* InlineDecorationType.Before */) {
                containsForeignElements |= 1 /* ForeignElementType.Before */;
            }
            else if (lineDecoration.type === 2 /* InlineDecorationType.After */) {
                containsForeignElements |= 2 /* ForeignElementType.After */;
            }
        }
        tokens = _applyInlineDecorations(lineContent, len, tokens, input.lineDecorations);
    }
    if (!input.containsRTL) {
        // We can never split RTL text, as it ruins the rendering
        tokens = splitLargeTokens(lineContent, tokens, !input.isBasicASCII || input.fontLigatures);
    }
    return new ResolvedRenderLineInput(input.useMonospaceOptimizations, input.canUseHalfwidthRightwardsArrow, lineContent, len, isOverflowing, overflowingCharCount, tokens, containsForeignElements, input.fauxIndentLength, input.tabSize, input.startVisibleColumn, input.containsRTL, input.spaceWidth, input.renderSpaceCharCode, input.renderWhitespace, input.renderControlCharacters);
}
/**
 * In the rendering phase, characters are always looped until token.endIndex.
 * Ensure that all tokens end before `len` and the last one ends precisely at `len`.
 */
function transformAndRemoveOverflowing(lineContent, lineContainsRTL, tokens, fauxIndentLength, len) {
    const result = [];
    let resultLen = 0;
    // The faux indent part of the line should have no token type
    if (fauxIndentLength > 0) {
        result[resultLen++] = new LinePart(fauxIndentLength, '', 0, false);
    }
    let startOffset = fauxIndentLength;
    for (let tokenIndex = 0, tokensLen = tokens.getCount(); tokenIndex < tokensLen; tokenIndex++) {
        const endIndex = tokens.getEndOffset(tokenIndex);
        if (endIndex <= fauxIndentLength) {
            // The faux indent part of the line should have no token type
            continue;
        }
        const type = tokens.getClassName(tokenIndex);
        if (endIndex >= len) {
            const tokenContainsRTL = (lineContainsRTL ? strings/* containsRTL */.Ut(lineContent.substring(startOffset, len)) : false);
            result[resultLen++] = new LinePart(len, type, 0, tokenContainsRTL);
            break;
        }
        const tokenContainsRTL = (lineContainsRTL ? strings/* containsRTL */.Ut(lineContent.substring(startOffset, endIndex)) : false);
        result[resultLen++] = new LinePart(endIndex, type, 0, tokenContainsRTL);
        startOffset = endIndex;
    }
    return result;
}
/**
 * See https://github.com/microsoft/vscode/issues/6885.
 * It appears that having very large spans causes very slow reading of character positions.
 * So here we try to avoid that.
 */
function splitLargeTokens(lineContent, tokens, onlyAtSpaces) {
    let lastTokenEndIndex = 0;
    const result = [];
    let resultLen = 0;
    if (onlyAtSpaces) {
        // Split only at spaces => we need to walk each character
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i];
            const tokenEndIndex = token.endIndex;
            if (lastTokenEndIndex + 50 /* Constants.LongToken */ < tokenEndIndex) {
                const tokenType = token.type;
                const tokenMetadata = token.metadata;
                const tokenContainsRTL = token.containsRTL;
                let lastSpaceOffset = -1;
                let currTokenStart = lastTokenEndIndex;
                for (let j = lastTokenEndIndex; j < tokenEndIndex; j++) {
                    if (lineContent.charCodeAt(j) === 32 /* CharCode.Space */) {
                        lastSpaceOffset = j;
                    }
                    if (lastSpaceOffset !== -1 && j - currTokenStart >= 50 /* Constants.LongToken */) {
                        // Split at `lastSpaceOffset` + 1
                        result[resultLen++] = new LinePart(lastSpaceOffset + 1, tokenType, tokenMetadata, tokenContainsRTL);
                        currTokenStart = lastSpaceOffset + 1;
                        lastSpaceOffset = -1;
                    }
                }
                if (currTokenStart !== tokenEndIndex) {
                    result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
                }
            }
            else {
                result[resultLen++] = token;
            }
            lastTokenEndIndex = tokenEndIndex;
        }
    }
    else {
        // Split anywhere => we don't need to walk each character
        for (let i = 0, len = tokens.length; i < len; i++) {
            const token = tokens[i];
            const tokenEndIndex = token.endIndex;
            const diff = (tokenEndIndex - lastTokenEndIndex);
            if (diff > 50 /* Constants.LongToken */) {
                const tokenType = token.type;
                const tokenMetadata = token.metadata;
                const tokenContainsRTL = token.containsRTL;
                const piecesCount = Math.ceil(diff / 50 /* Constants.LongToken */);
                for (let j = 1; j < piecesCount; j++) {
                    const pieceEndIndex = lastTokenEndIndex + (j * 50 /* Constants.LongToken */);
                    result[resultLen++] = new LinePart(pieceEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
                }
                result[resultLen++] = new LinePart(tokenEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
            }
            else {
                result[resultLen++] = token;
            }
            lastTokenEndIndex = tokenEndIndex;
        }
    }
    return result;
}
function isControlCharacter(charCode) {
    if (charCode < 32) {
        return (charCode !== 9 /* CharCode.Tab */);
    }
    if (charCode === 127) {
        // DEL
        return true;
    }
    if ((charCode >= 0x202A && charCode <= 0x202E)
        || (charCode >= 0x2066 && charCode <= 0x2069)
        || (charCode >= 0x200E && charCode <= 0x200F)
        || charCode === 0x061C) {
        // Unicode Directional Formatting Characters
        // LRE	U+202A	LEFT-TO-RIGHT EMBEDDING
        // RLE	U+202B	RIGHT-TO-LEFT EMBEDDING
        // PDF	U+202C	POP DIRECTIONAL FORMATTING
        // LRO	U+202D	LEFT-TO-RIGHT OVERRIDE
        // RLO	U+202E	RIGHT-TO-LEFT OVERRIDE
        // LRI	U+2066	LEFT-TO-RIGHT ISOLATE
        // RLI	U+2067	RIGHT-TO-LEFT ISOLATE
        // FSI	U+2068	FIRST STRONG ISOLATE
        // PDI	U+2069	POP DIRECTIONAL ISOLATE
        // LRM	U+200E	LEFT-TO-RIGHT MARK
        // RLM	U+200F	RIGHT-TO-LEFT MARK
        // ALM	U+061C	ARABIC LETTER MARK
        return true;
    }
    return false;
}
function extractControlCharacters(lineContent, tokens) {
    const result = [];
    let lastLinePart = new LinePart(0, '', 0, false);
    let charOffset = 0;
    for (const token of tokens) {
        const tokenEndIndex = token.endIndex;
        for (; charOffset < tokenEndIndex; charOffset++) {
            const charCode = lineContent.charCodeAt(charOffset);
            if (isControlCharacter(charCode)) {
                if (charOffset > lastLinePart.endIndex) {
                    // emit previous part if it has text
                    lastLinePart = new LinePart(charOffset, token.type, token.metadata, token.containsRTL);
                    result.push(lastLinePart);
                }
                lastLinePart = new LinePart(charOffset + 1, 'mtkcontrol', token.metadata, false);
                result.push(lastLinePart);
            }
        }
        if (charOffset > lastLinePart.endIndex) {
            // emit previous part if it has text
            lastLinePart = new LinePart(tokenEndIndex, token.type, token.metadata, token.containsRTL);
            result.push(lastLinePart);
        }
    }
    return result;
}
/**
 * Whitespace is rendered by "replacing" tokens with a special-purpose `mtkw` type that is later recognized in the rendering phase.
 * Moreover, a token is created for every visual indent because on some fonts the glyphs used for rendering whitespace (&rarr; or &middot;) do not have the same width as &nbsp;.
 * The rendering phase will generate `style="width:..."` for these tokens.
 */
function _applyRenderWhitespace(input, lineContent, len, tokens) {
    const continuesWithWrappedLine = input.continuesWithWrappedLine;
    const fauxIndentLength = input.fauxIndentLength;
    const tabSize = input.tabSize;
    const startVisibleColumn = input.startVisibleColumn;
    const useMonospaceOptimizations = input.useMonospaceOptimizations;
    const selections = input.selectionsOnLine;
    const onlyBoundary = (input.renderWhitespace === 1 /* RenderWhitespace.Boundary */);
    const onlyTrailing = (input.renderWhitespace === 3 /* RenderWhitespace.Trailing */);
    const generateLinePartForEachWhitespace = (input.renderSpaceWidth !== input.spaceWidth);
    const result = [];
    let resultLen = 0;
    let tokenIndex = 0;
    let tokenType = tokens[tokenIndex].type;
    let tokenContainsRTL = tokens[tokenIndex].containsRTL;
    let tokenEndIndex = tokens[tokenIndex].endIndex;
    const tokensLength = tokens.length;
    let lineIsEmptyOrWhitespace = false;
    let firstNonWhitespaceIndex = strings/* firstNonWhitespaceIndex */.LC(lineContent);
    let lastNonWhitespaceIndex;
    if (firstNonWhitespaceIndex === -1) {
        lineIsEmptyOrWhitespace = true;
        firstNonWhitespaceIndex = len;
        lastNonWhitespaceIndex = len;
    }
    else {
        lastNonWhitespaceIndex = strings/* lastNonWhitespaceIndex */.ow(lineContent);
    }
    let wasInWhitespace = false;
    let currentSelectionIndex = 0;
    let currentSelection = selections && selections[currentSelectionIndex];
    let tmpIndent = startVisibleColumn % tabSize;
    for (let charIndex = fauxIndentLength; charIndex < len; charIndex++) {
        const chCode = lineContent.charCodeAt(charIndex);
        if (currentSelection && charIndex >= currentSelection.endOffset) {
            currentSelectionIndex++;
            currentSelection = selections && selections[currentSelectionIndex];
        }
        let isInWhitespace;
        if (charIndex < firstNonWhitespaceIndex || charIndex > lastNonWhitespaceIndex) {
            // in leading or trailing whitespace
            isInWhitespace = true;
        }
        else if (chCode === 9 /* CharCode.Tab */) {
            // a tab character is rendered both in all and boundary cases
            isInWhitespace = true;
        }
        else if (chCode === 32 /* CharCode.Space */) {
            // hit a space character
            if (onlyBoundary) {
                // rendering only boundary whitespace
                if (wasInWhitespace) {
                    isInWhitespace = true;
                }
                else {
                    const nextChCode = (charIndex + 1 < len ? lineContent.charCodeAt(charIndex + 1) : 0 /* CharCode.Null */);
                    isInWhitespace = (nextChCode === 32 /* CharCode.Space */ || nextChCode === 9 /* CharCode.Tab */);
                }
            }
            else {
                isInWhitespace = true;
            }
        }
        else {
            isInWhitespace = false;
        }
        // If rendering whitespace on selection, check that the charIndex falls within a selection
        if (isInWhitespace && selections) {
            isInWhitespace = !!currentSelection && currentSelection.startOffset <= charIndex && currentSelection.endOffset > charIndex;
        }
        // If rendering only trailing whitespace, check that the charIndex points to trailing whitespace.
        if (isInWhitespace && onlyTrailing) {
            isInWhitespace = lineIsEmptyOrWhitespace || charIndex > lastNonWhitespaceIndex;
        }
        if (isInWhitespace && tokenContainsRTL) {
            // If the token contains RTL text, breaking it up into multiple line parts
            // to render whitespace might affect the browser's bidi layout.
            //
            // We render whitespace in such tokens only if the whitespace
            // is the leading or the trailing whitespace of the line,
            // which doesn't affect the browser's bidi layout.
            if (charIndex >= firstNonWhitespaceIndex && charIndex <= lastNonWhitespaceIndex) {
                isInWhitespace = false;
            }
        }
        if (wasInWhitespace) {
            // was in whitespace token
            if (!isInWhitespace || (!useMonospaceOptimizations && tmpIndent >= tabSize)) {
                // leaving whitespace token or entering a new indent
                if (generateLinePartForEachWhitespace) {
                    const lastEndIndex = (resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength);
                    for (let i = lastEndIndex + 1; i <= charIndex; i++) {
                        result[resultLen++] = new LinePart(i, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
                    }
                }
                else {
                    result[resultLen++] = new LinePart(charIndex, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
                }
                tmpIndent = tmpIndent % tabSize;
            }
        }
        else {
            // was in regular token
            if (charIndex === tokenEndIndex || (isInWhitespace && charIndex > fauxIndentLength)) {
                result[resultLen++] = new LinePart(charIndex, tokenType, 0, tokenContainsRTL);
                tmpIndent = tmpIndent % tabSize;
            }
        }
        if (chCode === 9 /* CharCode.Tab */) {
            tmpIndent = tabSize;
        }
        else if (strings/* isFullWidthCharacter */.K7(chCode)) {
            tmpIndent += 2;
        }
        else {
            tmpIndent++;
        }
        wasInWhitespace = isInWhitespace;
        while (charIndex === tokenEndIndex) {
            tokenIndex++;
            if (tokenIndex < tokensLength) {
                tokenType = tokens[tokenIndex].type;
                tokenContainsRTL = tokens[tokenIndex].containsRTL;
                tokenEndIndex = tokens[tokenIndex].endIndex;
            }
            else {
                break;
            }
        }
    }
    let generateWhitespace = false;
    if (wasInWhitespace) {
        // was in whitespace token
        if (continuesWithWrappedLine && onlyBoundary) {
            const lastCharCode = (len > 0 ? lineContent.charCodeAt(len - 1) : 0 /* CharCode.Null */);
            const prevCharCode = (len > 1 ? lineContent.charCodeAt(len - 2) : 0 /* CharCode.Null */);
            const isSingleTrailingSpace = (lastCharCode === 32 /* CharCode.Space */ && (prevCharCode !== 32 /* CharCode.Space */ && prevCharCode !== 9 /* CharCode.Tab */));
            if (!isSingleTrailingSpace) {
                generateWhitespace = true;
            }
        }
        else {
            generateWhitespace = true;
        }
    }
    if (generateWhitespace) {
        if (generateLinePartForEachWhitespace) {
            const lastEndIndex = (resultLen > 0 ? result[resultLen - 1].endIndex : fauxIndentLength);
            for (let i = lastEndIndex + 1; i <= len; i++) {
                result[resultLen++] = new LinePart(i, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
            }
        }
        else {
            result[resultLen++] = new LinePart(len, 'mtkw', 1 /* LinePartMetadata.IS_WHITESPACE */, false);
        }
    }
    else {
        result[resultLen++] = new LinePart(len, tokenType, 0, tokenContainsRTL);
    }
    return result;
}
/**
 * Inline decorations are "merged" on top of tokens.
 * Special care must be taken when multiple inline decorations are at play and they overlap.
 */
function _applyInlineDecorations(lineContent, len, tokens, _lineDecorations) {
    _lineDecorations.sort(viewLayout_lineDecorations/* LineDecoration */.Kp.compare);
    const lineDecorations = viewLayout_lineDecorations/* LineDecorationsNormalizer */.k.normalize(lineContent, _lineDecorations);
    const lineDecorationsLen = lineDecorations.length;
    let lineDecorationIndex = 0;
    const result = [];
    let resultLen = 0;
    let lastResultEndIndex = 0;
    for (let tokenIndex = 0, len = tokens.length; tokenIndex < len; tokenIndex++) {
        const token = tokens[tokenIndex];
        const tokenEndIndex = token.endIndex;
        const tokenType = token.type;
        const tokenMetadata = token.metadata;
        const tokenContainsRTL = token.containsRTL;
        while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset < tokenEndIndex) {
            const lineDecoration = lineDecorations[lineDecorationIndex];
            if (lineDecoration.startOffset > lastResultEndIndex) {
                lastResultEndIndex = lineDecoration.startOffset;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
            }
            if (lineDecoration.endOffset + 1 <= tokenEndIndex) {
                // This line decoration ends before this token ends
                lastResultEndIndex = lineDecoration.endOffset + 1;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + ' ' + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
                lineDecorationIndex++;
            }
            else {
                // This line decoration continues on to the next token
                lastResultEndIndex = tokenEndIndex;
                result[resultLen++] = new LinePart(lastResultEndIndex, tokenType + ' ' + lineDecoration.className, tokenMetadata | lineDecoration.metadata, tokenContainsRTL);
                break;
            }
        }
        if (tokenEndIndex > lastResultEndIndex) {
            lastResultEndIndex = tokenEndIndex;
            result[resultLen++] = new LinePart(lastResultEndIndex, tokenType, tokenMetadata, tokenContainsRTL);
        }
    }
    const lastTokenEndIndex = tokens[tokens.length - 1].endIndex;
    if (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
        while (lineDecorationIndex < lineDecorationsLen && lineDecorations[lineDecorationIndex].startOffset === lastTokenEndIndex) {
            const lineDecoration = lineDecorations[lineDecorationIndex];
            result[resultLen++] = new LinePart(lastResultEndIndex, lineDecoration.className, lineDecoration.metadata, false);
            lineDecorationIndex++;
        }
    }
    return result;
}
/**
 * This function is on purpose not split up into multiple functions to allow runtime type inference (i.e. performance reasons).
 * Notice how all the needed data is fully resolved and passed in (i.e. no other calls).
 */
function _renderLine(input, sb) {
    const fontIsMonospace = input.fontIsMonospace;
    const canUseHalfwidthRightwardsArrow = input.canUseHalfwidthRightwardsArrow;
    const containsForeignElements = input.containsForeignElements;
    const lineContent = input.lineContent;
    const len = input.len;
    const isOverflowing = input.isOverflowing;
    const overflowingCharCount = input.overflowingCharCount;
    const parts = input.parts;
    const fauxIndentLength = input.fauxIndentLength;
    const tabSize = input.tabSize;
    const startVisibleColumn = input.startVisibleColumn;
    const containsRTL = input.containsRTL;
    const spaceWidth = input.spaceWidth;
    const renderSpaceCharCode = input.renderSpaceCharCode;
    const renderWhitespace = input.renderWhitespace;
    const renderControlCharacters = input.renderControlCharacters;
    const characterMapping = new CharacterMapping(len + 1, parts.length);
    let lastCharacterMappingDefined = false;
    let charIndex = 0;
    let visibleColumn = startVisibleColumn;
    let charOffsetInPart = 0; // the character offset in the current part
    let charHorizontalOffset = 0; // the character horizontal position in terms of chars relative to line start
    let partDisplacement = 0;
    if (containsRTL) {
        sb.appendString('<span dir="ltr">');
    }
    else {
        sb.appendString('<span>');
    }
    for (let partIndex = 0, tokensLen = parts.length; partIndex < tokensLen; partIndex++) {
        const part = parts[partIndex];
        const partEndIndex = part.endIndex;
        const partType = part.type;
        const partContainsRTL = part.containsRTL;
        const partRendersWhitespace = (renderWhitespace !== 0 /* RenderWhitespace.None */ && part.isWhitespace());
        const partRendersWhitespaceWithWidth = partRendersWhitespace && !fontIsMonospace && (partType === 'mtkw' /*only whitespace*/ || !containsForeignElements);
        const partIsEmptyAndHasPseudoAfter = (charIndex === partEndIndex && part.isPseudoAfter());
        charOffsetInPart = 0;
        sb.appendString('<span ');
        if (partContainsRTL) {
            sb.appendString('style="unicode-bidi:isolate" ');
        }
        sb.appendString('class="');
        sb.appendString(partRendersWhitespaceWithWidth ? 'mtkz' : partType);
        sb.appendASCIICharCode(34 /* CharCode.DoubleQuote */);
        if (partRendersWhitespace) {
            let partWidth = 0;
            {
                let _charIndex = charIndex;
                let _visibleColumn = visibleColumn;
                for (; _charIndex < partEndIndex; _charIndex++) {
                    const charCode = lineContent.charCodeAt(_charIndex);
                    const charWidth = (charCode === 9 /* CharCode.Tab */ ? (tabSize - (_visibleColumn % tabSize)) : 1) | 0;
                    partWidth += charWidth;
                    if (_charIndex >= fauxIndentLength) {
                        _visibleColumn += charWidth;
                    }
                }
            }
            if (partRendersWhitespaceWithWidth) {
                sb.appendString(' style="width:');
                sb.appendString(String(spaceWidth * partWidth));
                sb.appendString('px"');
            }
            sb.appendASCIICharCode(62 /* CharCode.GreaterThan */);
            for (; charIndex < partEndIndex; charIndex++) {
                characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
                partDisplacement = 0;
                const charCode = lineContent.charCodeAt(charIndex);
                let producedCharacters;
                let charWidth;
                if (charCode === 9 /* CharCode.Tab */) {
                    producedCharacters = (tabSize - (visibleColumn % tabSize)) | 0;
                    charWidth = producedCharacters;
                    if (!canUseHalfwidthRightwardsArrow || charWidth > 1) {
                        sb.appendCharCode(0x2192); // RIGHTWARDS ARROW
                    }
                    else {
                        sb.appendCharCode(0xFFEB); // HALFWIDTH RIGHTWARDS ARROW
                    }
                    for (let space = 2; space <= charWidth; space++) {
                        sb.appendCharCode(0xA0); // &nbsp;
                    }
                }
                else { // must be CharCode.Space
                    producedCharacters = 2;
                    charWidth = 1;
                    sb.appendCharCode(renderSpaceCharCode); // &middot; or word separator middle dot
                    sb.appendCharCode(0x200C); // ZERO WIDTH NON-JOINER
                }
                charOffsetInPart += producedCharacters;
                charHorizontalOffset += charWidth;
                if (charIndex >= fauxIndentLength) {
                    visibleColumn += charWidth;
                }
            }
        }
        else {
            sb.appendASCIICharCode(62 /* CharCode.GreaterThan */);
            for (; charIndex < partEndIndex; charIndex++) {
                characterMapping.setColumnInfo(charIndex + 1, partIndex - partDisplacement, charOffsetInPart, charHorizontalOffset);
                partDisplacement = 0;
                const charCode = lineContent.charCodeAt(charIndex);
                let producedCharacters = 1;
                let charWidth = 1;
                switch (charCode) {
                    case 9 /* CharCode.Tab */:
                        producedCharacters = (tabSize - (visibleColumn % tabSize));
                        charWidth = producedCharacters;
                        for (let space = 1; space <= producedCharacters; space++) {
                            sb.appendCharCode(0xA0); // &nbsp;
                        }
                        break;
                    case 32 /* CharCode.Space */:
                        sb.appendCharCode(0xA0); // &nbsp;
                        break;
                    case 60 /* CharCode.LessThan */:
                        sb.appendString('&lt;');
                        break;
                    case 62 /* CharCode.GreaterThan */:
                        sb.appendString('&gt;');
                        break;
                    case 38 /* CharCode.Ampersand */:
                        sb.appendString('&amp;');
                        break;
                    case 0 /* CharCode.Null */:
                        if (renderControlCharacters) {
                            // See https://unicode-table.com/en/blocks/control-pictures/
                            sb.appendCharCode(9216);
                        }
                        else {
                            sb.appendString('&#00;');
                        }
                        break;
                    case 65279 /* CharCode.UTF8_BOM */:
                    case 8232 /* CharCode.LINE_SEPARATOR */:
                    case 8233 /* CharCode.PARAGRAPH_SEPARATOR */:
                    case 133 /* CharCode.NEXT_LINE */:
                        sb.appendCharCode(0xFFFD);
                        break;
                    default:
                        if (strings/* isFullWidthCharacter */.K7(charCode)) {
                            charWidth++;
                        }
                        // See https://unicode-table.com/en/blocks/control-pictures/
                        if (renderControlCharacters && charCode < 32) {
                            sb.appendCharCode(9216 + charCode);
                        }
                        else if (renderControlCharacters && charCode === 127) {
                            // DEL
                            sb.appendCharCode(9249);
                        }
                        else if (renderControlCharacters && isControlCharacter(charCode)) {
                            sb.appendString('[U+');
                            sb.appendString(to4CharHex(charCode));
                            sb.appendString(']');
                            producedCharacters = 8;
                            charWidth = producedCharacters;
                        }
                        else {
                            sb.appendCharCode(charCode);
                        }
                }
                charOffsetInPart += producedCharacters;
                charHorizontalOffset += charWidth;
                if (charIndex >= fauxIndentLength) {
                    visibleColumn += charWidth;
                }
            }
        }
        if (partIsEmptyAndHasPseudoAfter) {
            partDisplacement++;
        }
        else {
            partDisplacement = 0;
        }
        if (charIndex >= len && !lastCharacterMappingDefined && part.isPseudoAfter()) {
            lastCharacterMappingDefined = true;
            characterMapping.setColumnInfo(charIndex + 1, partIndex, charOffsetInPart, charHorizontalOffset);
        }
        sb.appendString('</span>');
    }
    if (!lastCharacterMappingDefined) {
        // When getting client rects for the last character, we will position the
        // text range at the end of the span, insteaf of at the beginning of next span
        characterMapping.setColumnInfo(len + 1, parts.length - 1, charOffsetInPart, charHorizontalOffset);
    }
    if (isOverflowing) {
        sb.appendString('<span class="mtkoverflow">');
        sb.appendString(nls/* localize */.NC('showMore', "Show more ({0})", renderOverflowingCharCount(overflowingCharCount)));
        sb.appendString('</span>');
    }
    sb.appendString('</span>');
    return new RenderLineOutput(characterMapping, containsRTL, containsForeignElements);
}
function to4CharHex(n) {
    return n.toString(16).toUpperCase().padStart(4, '0');
}
function renderOverflowingCharCount(n) {
    if (n < 1024) {
        return nls/* localize */.NC('overflow.chars', "{0} chars", n);
    }
    if (n < 1024 * 1024) {
        return `${(n / 1024).toFixed(1)} KB`;
    }
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
}


/***/ }),

/***/ 62155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ ViewportData; }
/* harmony export */ });
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Contains all data needed to render at a specific viewport.
 */
class ViewportData {
    constructor(selections, partialData, whitespaceViewportData, model) {
        this.selections = selections;
        this.startLineNumber = partialData.startLineNumber | 0;
        this.endLineNumber = partialData.endLineNumber | 0;
        this.relativeVerticalOffset = partialData.relativeVerticalOffset;
        this.bigNumbersDelta = partialData.bigNumbersDelta | 0;
        this.whitespaceViewportData = whitespaceViewportData;
        this._model = model;
        this.visibleRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(partialData.startLineNumber, this._model.getLineMinColumn(partialData.startLineNumber), partialData.endLineNumber, this._model.getLineMaxColumn(partialData.endLineNumber));
    }
    getViewLineRenderingData(lineNumber) {
        return this._model.getViewportViewLineRenderingData(this.visibleRange, lineNumber);
    }
    getDecorationsInViewport() {
        return this._model.getDecorationsInViewport(this.visibleRange);
    }
}


/***/ }),

/***/ 98908:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $X: function() { return /* binding */ ModelTokensChangedEvent; },
/* harmony export */   H6: function() { return /* binding */ CursorStateChangedEvent; },
/* harmony export */   Ic: function() { return /* binding */ ViewZonesChangedEvent; },
/* harmony export */   Ki: function() { return /* binding */ ReadOnlyEditAttemptEvent; },
/* harmony export */   P2: function() { return /* binding */ ModelContentChangedEvent; },
/* harmony export */   Pb: function() { return /* binding */ ModelDecorationsChangedEvent; },
/* harmony export */   Pt: function() { return /* binding */ ScrollChangedEvent; },
/* harmony export */   Sh: function() { return /* binding */ HiddenAreasChangedEvent; },
/* harmony export */   ZX: function() { return /* binding */ ModelLanguageChangedEvent; },
/* harmony export */   Zw: function() { return /* binding */ FocusChangedEvent; },
/* harmony export */   iH: function() { return /* binding */ ModelLanguageConfigurationChangedEvent; },
/* harmony export */   nu: function() { return /* binding */ ViewModelEventDispatcher; },
/* harmony export */   q2: function() { return /* binding */ ModelOptionsChangedEvent; },
/* harmony export */   zf: function() { return /* binding */ ContentSizeChangedEvent; }
/* harmony export */ });
/* unused harmony export ViewModelEventsCollector */
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class ViewModelEventDispatcher extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor() {
        super();
        this._onEvent = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onEvent = this._onEvent.event;
        this._eventHandlers = [];
        this._viewEventQueue = null;
        this._isConsumingViewEventQueue = false;
        this._collector = null;
        this._collectorCnt = 0;
        this._outgoingEvents = [];
    }
    emitOutgoingEvent(e) {
        this._addOutgoingEvent(e);
        this._emitOutgoingEvents();
    }
    _addOutgoingEvent(e) {
        for (let i = 0, len = this._outgoingEvents.length; i < len; i++) {
            const mergeResult = (this._outgoingEvents[i].kind === e.kind ? this._outgoingEvents[i].attemptToMerge(e) : null);
            if (mergeResult) {
                this._outgoingEvents[i] = mergeResult;
                return;
            }
        }
        // not merged
        this._outgoingEvents.push(e);
    }
    _emitOutgoingEvents() {
        while (this._outgoingEvents.length > 0) {
            if (this._collector || this._isConsumingViewEventQueue) {
                // right now collecting or emitting view events, so let's postpone emitting
                return;
            }
            const event = this._outgoingEvents.shift();
            if (event.isNoOp()) {
                continue;
            }
            this._onEvent.fire(event);
        }
    }
    addViewEventHandler(eventHandler) {
        for (let i = 0, len = this._eventHandlers.length; i < len; i++) {
            if (this._eventHandlers[i] === eventHandler) {
                console.warn('Detected duplicate listener in ViewEventDispatcher', eventHandler);
            }
        }
        this._eventHandlers.push(eventHandler);
    }
    removeViewEventHandler(eventHandler) {
        for (let i = 0; i < this._eventHandlers.length; i++) {
            if (this._eventHandlers[i] === eventHandler) {
                this._eventHandlers.splice(i, 1);
                break;
            }
        }
    }
    beginEmitViewEvents() {
        this._collectorCnt++;
        if (this._collectorCnt === 1) {
            this._collector = new ViewModelEventsCollector();
        }
        return this._collector;
    }
    endEmitViewEvents() {
        this._collectorCnt--;
        if (this._collectorCnt === 0) {
            const outgoingEvents = this._collector.outgoingEvents;
            const viewEvents = this._collector.viewEvents;
            this._collector = null;
            for (const outgoingEvent of outgoingEvents) {
                this._addOutgoingEvent(outgoingEvent);
            }
            if (viewEvents.length > 0) {
                this._emitMany(viewEvents);
            }
        }
        this._emitOutgoingEvents();
    }
    emitSingleViewEvent(event) {
        try {
            const eventsCollector = this.beginEmitViewEvents();
            eventsCollector.emitViewEvent(event);
        }
        finally {
            this.endEmitViewEvents();
        }
    }
    _emitMany(events) {
        if (this._viewEventQueue) {
            this._viewEventQueue = this._viewEventQueue.concat(events);
        }
        else {
            this._viewEventQueue = events;
        }
        if (!this._isConsumingViewEventQueue) {
            this._consumeViewEventQueue();
        }
    }
    _consumeViewEventQueue() {
        try {
            this._isConsumingViewEventQueue = true;
            this._doConsumeQueue();
        }
        finally {
            this._isConsumingViewEventQueue = false;
        }
    }
    _doConsumeQueue() {
        while (this._viewEventQueue) {
            // Empty event queue, as events might come in while sending these off
            const events = this._viewEventQueue;
            this._viewEventQueue = null;
            // Use a clone of the event handlers list, as they might remove themselves
            const eventHandlers = this._eventHandlers.slice(0);
            for (const eventHandler of eventHandlers) {
                eventHandler.handleEvents(events);
            }
        }
    }
}
class ViewModelEventsCollector {
    constructor() {
        this.viewEvents = [];
        this.outgoingEvents = [];
    }
    emitViewEvent(event) {
        this.viewEvents.push(event);
    }
    emitOutgoingEvent(e) {
        this.outgoingEvents.push(e);
    }
}
class ContentSizeChangedEvent {
    constructor(oldContentWidth, oldContentHeight, contentWidth, contentHeight) {
        this.kind = 0 /* OutgoingViewModelEventKind.ContentSizeChanged */;
        this._oldContentWidth = oldContentWidth;
        this._oldContentHeight = oldContentHeight;
        this.contentWidth = contentWidth;
        this.contentHeight = contentHeight;
        this.contentWidthChanged = (this._oldContentWidth !== this.contentWidth);
        this.contentHeightChanged = (this._oldContentHeight !== this.contentHeight);
    }
    isNoOp() {
        return (!this.contentWidthChanged && !this.contentHeightChanged);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new ContentSizeChangedEvent(this._oldContentWidth, this._oldContentHeight, other.contentWidth, other.contentHeight);
    }
}
class FocusChangedEvent {
    constructor(oldHasFocus, hasFocus) {
        this.kind = 1 /* OutgoingViewModelEventKind.FocusChanged */;
        this.oldHasFocus = oldHasFocus;
        this.hasFocus = hasFocus;
    }
    isNoOp() {
        return (this.oldHasFocus === this.hasFocus);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new FocusChangedEvent(this.oldHasFocus, other.hasFocus);
    }
}
class ScrollChangedEvent {
    constructor(oldScrollWidth, oldScrollLeft, oldScrollHeight, oldScrollTop, scrollWidth, scrollLeft, scrollHeight, scrollTop) {
        this.kind = 2 /* OutgoingViewModelEventKind.ScrollChanged */;
        this._oldScrollWidth = oldScrollWidth;
        this._oldScrollLeft = oldScrollLeft;
        this._oldScrollHeight = oldScrollHeight;
        this._oldScrollTop = oldScrollTop;
        this.scrollWidth = scrollWidth;
        this.scrollLeft = scrollLeft;
        this.scrollHeight = scrollHeight;
        this.scrollTop = scrollTop;
        this.scrollWidthChanged = (this._oldScrollWidth !== this.scrollWidth);
        this.scrollLeftChanged = (this._oldScrollLeft !== this.scrollLeft);
        this.scrollHeightChanged = (this._oldScrollHeight !== this.scrollHeight);
        this.scrollTopChanged = (this._oldScrollTop !== this.scrollTop);
    }
    isNoOp() {
        return (!this.scrollWidthChanged && !this.scrollLeftChanged && !this.scrollHeightChanged && !this.scrollTopChanged);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new ScrollChangedEvent(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, other.scrollWidth, other.scrollLeft, other.scrollHeight, other.scrollTop);
    }
}
class ViewZonesChangedEvent {
    constructor() {
        this.kind = 3 /* OutgoingViewModelEventKind.ViewZonesChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class HiddenAreasChangedEvent {
    constructor() {
        this.kind = 4 /* OutgoingViewModelEventKind.HiddenAreasChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class CursorStateChangedEvent {
    constructor(oldSelections, selections, oldModelVersionId, modelVersionId, source, reason, reachedMaxCursorCount) {
        this.kind = 6 /* OutgoingViewModelEventKind.CursorStateChanged */;
        this.oldSelections = oldSelections;
        this.selections = selections;
        this.oldModelVersionId = oldModelVersionId;
        this.modelVersionId = modelVersionId;
        this.source = source;
        this.reason = reason;
        this.reachedMaxCursorCount = reachedMaxCursorCount;
    }
    static _selectionsAreEqual(a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        const aLen = a.length;
        const bLen = b.length;
        if (aLen !== bLen) {
            return false;
        }
        for (let i = 0; i < aLen; i++) {
            if (!a[i].equalsSelection(b[i])) {
                return false;
            }
        }
        return true;
    }
    isNoOp() {
        return (CursorStateChangedEvent._selectionsAreEqual(this.oldSelections, this.selections)
            && this.oldModelVersionId === this.modelVersionId);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new CursorStateChangedEvent(this.oldSelections, other.selections, this.oldModelVersionId, other.modelVersionId, other.source, other.reason, this.reachedMaxCursorCount || other.reachedMaxCursorCount);
    }
}
class ReadOnlyEditAttemptEvent {
    constructor() {
        this.kind = 5 /* OutgoingViewModelEventKind.ReadOnlyEditAttempt */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class ModelDecorationsChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 7 /* OutgoingViewModelEventKind.ModelDecorationsChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelLanguageChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 8 /* OutgoingViewModelEventKind.ModelLanguageChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelLanguageConfigurationChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 9 /* OutgoingViewModelEventKind.ModelLanguageConfigurationChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelContentChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 10 /* OutgoingViewModelEventKind.ModelContentChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelOptionsChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 11 /* OutgoingViewModelEventKind.ModelOptionsChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelTokensChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 12 /* OutgoingViewModelEventKind.ModelTokensChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}


/***/ })

}]);