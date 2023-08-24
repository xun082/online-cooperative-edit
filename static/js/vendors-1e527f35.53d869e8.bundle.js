"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-1e527f35"],{

/***/ 1975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $l: function() { return /* binding */ ViewModelDecoration; },
/* harmony export */   $t: function() { return /* binding */ InlineDecoration; },
/* harmony export */   IP: function() { return /* binding */ ViewLineData; },
/* harmony export */   SQ: function() { return /* binding */ OverviewRulerDecorationsGroup; },
/* harmony export */   Wx: function() { return /* binding */ SingleLineInlineDecoration; },
/* harmony export */   l_: function() { return /* binding */ Viewport; },
/* harmony export */   ud: function() { return /* binding */ MinimapLinesRenderingData; },
/* harmony export */   wA: function() { return /* binding */ ViewLineRenderingData; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class Viewport {
    constructor(top, left, width, height) {
        this._viewportBrand = undefined;
        this.top = top | 0;
        this.left = left | 0;
        this.width = width | 0;
        this.height = height | 0;
    }
}
class MinimapLinesRenderingData {
    constructor(tabSize, data) {
        this.tabSize = tabSize;
        this.data = data;
    }
}
class ViewLineData {
    constructor(content, continuesWithWrappedLine, minColumn, maxColumn, startVisibleColumn, tokens, inlineDecorations) {
        this._viewLineDataBrand = undefined;
        this.content = content;
        this.continuesWithWrappedLine = continuesWithWrappedLine;
        this.minColumn = minColumn;
        this.maxColumn = maxColumn;
        this.startVisibleColumn = startVisibleColumn;
        this.tokens = tokens;
        this.inlineDecorations = inlineDecorations;
    }
}
class ViewLineRenderingData {
    constructor(minColumn, maxColumn, content, continuesWithWrappedLine, mightContainRTL, mightContainNonBasicASCII, tokens, inlineDecorations, tabSize, startVisibleColumn) {
        this.minColumn = minColumn;
        this.maxColumn = maxColumn;
        this.content = content;
        this.continuesWithWrappedLine = continuesWithWrappedLine;
        this.isBasicASCII = ViewLineRenderingData.isBasicASCII(content, mightContainNonBasicASCII);
        this.containsRTL = ViewLineRenderingData.containsRTL(content, this.isBasicASCII, mightContainRTL);
        this.tokens = tokens;
        this.inlineDecorations = inlineDecorations;
        this.tabSize = tabSize;
        this.startVisibleColumn = startVisibleColumn;
    }
    static isBasicASCII(lineContent, mightContainNonBasicASCII) {
        if (mightContainNonBasicASCII) {
            return _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isBasicASCII */ .$i(lineContent);
        }
        return true;
    }
    static containsRTL(lineContent, isBasicASCII, mightContainRTL) {
        if (!isBasicASCII && mightContainRTL) {
            return _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .containsRTL */ .Ut(lineContent);
        }
        return false;
    }
}
class InlineDecoration {
    constructor(range, inlineClassName, type) {
        this.range = range;
        this.inlineClassName = inlineClassName;
        this.type = type;
    }
}
class SingleLineInlineDecoration {
    constructor(startOffset, endOffset, inlineClassName, inlineClassNameAffectsLetterSpacing) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.inlineClassName = inlineClassName;
        this.inlineClassNameAffectsLetterSpacing = inlineClassNameAffectsLetterSpacing;
    }
    toInlineDecoration(lineNumber) {
        return new InlineDecoration(new _core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(lineNumber, this.startOffset + 1, lineNumber, this.endOffset + 1), this.inlineClassName, this.inlineClassNameAffectsLetterSpacing ? 3 /* InlineDecorationType.RegularAffectingLetterSpacing */ : 0 /* InlineDecorationType.Regular */);
    }
}
class ViewModelDecoration {
    constructor(range, options) {
        this._viewModelDecorationBrand = undefined;
        this.range = range;
        this.options = options;
    }
}
class OverviewRulerDecorationsGroup {
    constructor(color, zIndex, 
    /**
     * Decorations are encoded in a number array using the following scheme:
     *  - 3*i = lane
     *  - 3*i+1 = startLineNumber
     *  - 3*i+2 = endLineNumber
     */
    data) {
        this.color = color;
        this.zIndex = zIndex;
        this.data = data;
    }
    static cmp(a, b) {
        if (a.zIndex === b.zIndex) {
            if (a.color < b.color) {
                return -1;
            }
            if (a.color > b.color) {
                return 1;
            }
            return 0;
        }
        return a.zIndex - b.zIndex;
    }
}


/***/ }),

/***/ 79777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ MinimapTokensColorTracker; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _core_rgba_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9808);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34882);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class MinimapTokensColorTracker extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    static getInstance() {
        if (!this._INSTANCE) {
            this._INSTANCE = (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .markAsSingleton */ .dk)(new MinimapTokensColorTracker());
        }
        return this._INSTANCE;
    }
    constructor() {
        super();
        this._onDidChange = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChange = this._onDidChange.event;
        this._updateColorMap();
        this._register(_languages_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenizationRegistry */ .RW.onDidChange(e => {
            if (e.changedColorMap) {
                this._updateColorMap();
            }
        }));
    }
    _updateColorMap() {
        const colorMap = _languages_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenizationRegistry */ .RW.getColorMap();
        if (!colorMap) {
            this._colors = [_core_rgba_js__WEBPACK_IMPORTED_MODULE_2__/* .RGBA8 */ .h.Empty];
            this._backgroundIsLight = true;
            return;
        }
        this._colors = [_core_rgba_js__WEBPACK_IMPORTED_MODULE_2__/* .RGBA8 */ .h.Empty];
        for (let colorId = 1; colorId < colorMap.length; colorId++) {
            const source = colorMap[colorId].rgba;
            // Use a VM friendly data-type
            this._colors[colorId] = new _core_rgba_js__WEBPACK_IMPORTED_MODULE_2__/* .RGBA8 */ .h(source.r, source.g, source.b, Math.round(source.a * 255));
        }
        const backgroundLuminosity = colorMap[2 /* ColorId.DefaultBackground */].getRelativeLuminance();
        this._backgroundIsLight = backgroundLuminosity >= 0.5;
        this._onDidChange.fire(undefined);
    }
    getColor(colorId) {
        if (colorId < 1 || colorId >= this._colors.length) {
            // background color (basically invisible)
            colorId = 2 /* ColorId.DefaultBackground */;
        }
        return this._colors[colorId];
    }
    backgroundIsLight() {
        return this._backgroundIsLight;
    }
}
MinimapTokensColorTracker._INSTANCE = null;


/***/ }),

/***/ 46443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ MonospaceLineBreaksComputerFactory; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71887);
/* harmony import */ var _textModelEvents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40114);
/* harmony import */ var _modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79219);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class MonospaceLineBreaksComputerFactory {
    static create(options) {
        return new MonospaceLineBreaksComputerFactory(options.get(131 /* EditorOption.wordWrapBreakBeforeCharacters */), options.get(130 /* EditorOption.wordWrapBreakAfterCharacters */));
    }
    constructor(breakBeforeChars, breakAfterChars) {
        this.classifier = new WrappingCharacterClassifier(breakBeforeChars, breakAfterChars);
    }
    createLineBreaksComputer(fontInfo, tabSize, wrappingColumn, wrappingIndent, wordBreak) {
        const requests = [];
        const injectedTexts = [];
        const previousBreakingData = [];
        return {
            addRequest: (lineText, injectedText, previousLineBreakData) => {
                requests.push(lineText);
                injectedTexts.push(injectedText);
                previousBreakingData.push(previousLineBreakData);
            },
            finalize: () => {
                const columnsForFullWidthChar = fontInfo.typicalFullwidthCharacterWidth / fontInfo.typicalHalfwidthCharacterWidth;
                const result = [];
                for (let i = 0, len = requests.length; i < len; i++) {
                    const injectedText = injectedTexts[i];
                    const previousLineBreakData = previousBreakingData[i];
                    if (previousLineBreakData && !previousLineBreakData.injectionOptions && !injectedText) {
                        result[i] = createLineBreaksFromPreviousLineBreaks(this.classifier, previousLineBreakData, requests[i], tabSize, wrappingColumn, columnsForFullWidthChar, wrappingIndent, wordBreak);
                    }
                    else {
                        result[i] = createLineBreaks(this.classifier, requests[i], injectedText, tabSize, wrappingColumn, columnsForFullWidthChar, wrappingIndent, wordBreak);
                    }
                }
                arrPool1.length = 0;
                arrPool2.length = 0;
                return result;
            }
        };
    }
}
class WrappingCharacterClassifier extends _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_2__/* .CharacterClassifier */ .N {
    constructor(BREAK_BEFORE, BREAK_AFTER) {
        super(0 /* CharacterClass.NONE */);
        for (let i = 0; i < BREAK_BEFORE.length; i++) {
            this.set(BREAK_BEFORE.charCodeAt(i), 1 /* CharacterClass.BREAK_BEFORE */);
        }
        for (let i = 0; i < BREAK_AFTER.length; i++) {
            this.set(BREAK_AFTER.charCodeAt(i), 2 /* CharacterClass.BREAK_AFTER */);
        }
    }
    get(charCode) {
        if (charCode >= 0 && charCode < 256) {
            return this._asciiMap[charCode];
        }
        else {
            // Initialize CharacterClass.BREAK_IDEOGRAPHIC for these Unicode ranges:
            // 1. CJK Unified Ideographs (0x4E00 -- 0x9FFF)
            // 2. CJK Unified Ideographs Extension A (0x3400 -- 0x4DBF)
            // 3. Hiragana and Katakana (0x3040 -- 0x30FF)
            if ((charCode >= 0x3040 && charCode <= 0x30FF)
                || (charCode >= 0x3400 && charCode <= 0x4DBF)
                || (charCode >= 0x4E00 && charCode <= 0x9FFF)) {
                return 3 /* CharacterClass.BREAK_IDEOGRAPHIC */;
            }
            return (this._map.get(charCode) || this._defaultValue);
        }
    }
}
let arrPool1 = [];
let arrPool2 = [];
function createLineBreaksFromPreviousLineBreaks(classifier, previousBreakingData, lineText, tabSize, firstLineBreakColumn, columnsForFullWidthChar, wrappingIndent, wordBreak) {
    if (firstLineBreakColumn === -1) {
        return null;
    }
    const len = lineText.length;
    if (len <= 1) {
        return null;
    }
    const isKeepAll = (wordBreak === 'keepAll');
    const prevBreakingOffsets = previousBreakingData.breakOffsets;
    const prevBreakingOffsetsVisibleColumn = previousBreakingData.breakOffsetsVisibleColumn;
    const wrappedTextIndentLength = computeWrappedTextIndentLength(lineText, tabSize, firstLineBreakColumn, columnsForFullWidthChar, wrappingIndent);
    const wrappedLineBreakColumn = firstLineBreakColumn - wrappedTextIndentLength;
    const breakingOffsets = arrPool1;
    const breakingOffsetsVisibleColumn = arrPool2;
    let breakingOffsetsCount = 0;
    let lastBreakingOffset = 0;
    let lastBreakingOffsetVisibleColumn = 0;
    let breakingColumn = firstLineBreakColumn;
    const prevLen = prevBreakingOffsets.length;
    let prevIndex = 0;
    if (prevIndex >= 0) {
        let bestDistance = Math.abs(prevBreakingOffsetsVisibleColumn[prevIndex] - breakingColumn);
        while (prevIndex + 1 < prevLen) {
            const distance = Math.abs(prevBreakingOffsetsVisibleColumn[prevIndex + 1] - breakingColumn);
            if (distance >= bestDistance) {
                break;
            }
            bestDistance = distance;
            prevIndex++;
        }
    }
    while (prevIndex < prevLen) {
        // Allow for prevIndex to be -1 (for the case where we hit a tab when walking backwards from the first break)
        let prevBreakOffset = prevIndex < 0 ? 0 : prevBreakingOffsets[prevIndex];
        let prevBreakOffsetVisibleColumn = prevIndex < 0 ? 0 : prevBreakingOffsetsVisibleColumn[prevIndex];
        if (lastBreakingOffset > prevBreakOffset) {
            prevBreakOffset = lastBreakingOffset;
            prevBreakOffsetVisibleColumn = lastBreakingOffsetVisibleColumn;
        }
        let breakOffset = 0;
        let breakOffsetVisibleColumn = 0;
        let forcedBreakOffset = 0;
        let forcedBreakOffsetVisibleColumn = 0;
        // initially, we search as much as possible to the right (if it fits)
        if (prevBreakOffsetVisibleColumn <= breakingColumn) {
            let visibleColumn = prevBreakOffsetVisibleColumn;
            let prevCharCode = prevBreakOffset === 0 ? 0 /* CharCode.Null */ : lineText.charCodeAt(prevBreakOffset - 1);
            let prevCharCodeClass = prevBreakOffset === 0 ? 0 /* CharacterClass.NONE */ : classifier.get(prevCharCode);
            let entireLineFits = true;
            for (let i = prevBreakOffset; i < len; i++) {
                const charStartOffset = i;
                const charCode = lineText.charCodeAt(i);
                let charCodeClass;
                let charWidth;
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCode)) {
                    // A surrogate pair must always be considered as a single unit, so it is never to be broken
                    i++;
                    charCodeClass = 0 /* CharacterClass.NONE */;
                    charWidth = 2;
                }
                else {
                    charCodeClass = classifier.get(charCode);
                    charWidth = computeCharWidth(charCode, visibleColumn, tabSize, columnsForFullWidthChar);
                }
                if (charStartOffset > lastBreakingOffset && canBreak(prevCharCode, prevCharCodeClass, charCode, charCodeClass, isKeepAll)) {
                    breakOffset = charStartOffset;
                    breakOffsetVisibleColumn = visibleColumn;
                }
                visibleColumn += charWidth;
                // check if adding character at `i` will go over the breaking column
                if (visibleColumn > breakingColumn) {
                    // We need to break at least before character at `i`:
                    if (charStartOffset > lastBreakingOffset) {
                        forcedBreakOffset = charStartOffset;
                        forcedBreakOffsetVisibleColumn = visibleColumn - charWidth;
                    }
                    else {
                        // we need to advance at least by one character
                        forcedBreakOffset = i + 1;
                        forcedBreakOffsetVisibleColumn = visibleColumn;
                    }
                    if (visibleColumn - breakOffsetVisibleColumn > wrappedLineBreakColumn) {
                        // Cannot break at `breakOffset` => reset it if it was set
                        breakOffset = 0;
                    }
                    entireLineFits = false;
                    break;
                }
                prevCharCode = charCode;
                prevCharCodeClass = charCodeClass;
            }
            if (entireLineFits) {
                // there is no more need to break => stop the outer loop!
                if (breakingOffsetsCount > 0) {
                    // Add last segment, no need to assign to `lastBreakingOffset` and `lastBreakingOffsetVisibleColumn`
                    breakingOffsets[breakingOffsetsCount] = prevBreakingOffsets[prevBreakingOffsets.length - 1];
                    breakingOffsetsVisibleColumn[breakingOffsetsCount] = prevBreakingOffsetsVisibleColumn[prevBreakingOffsets.length - 1];
                    breakingOffsetsCount++;
                }
                break;
            }
        }
        if (breakOffset === 0) {
            // must search left
            let visibleColumn = prevBreakOffsetVisibleColumn;
            let charCode = lineText.charCodeAt(prevBreakOffset);
            let charCodeClass = classifier.get(charCode);
            let hitATabCharacter = false;
            for (let i = prevBreakOffset - 1; i >= lastBreakingOffset; i--) {
                const charStartOffset = i + 1;
                const prevCharCode = lineText.charCodeAt(i);
                if (prevCharCode === 9 /* CharCode.Tab */) {
                    // cannot determine the width of a tab when going backwards, so we must go forwards
                    hitATabCharacter = true;
                    break;
                }
                let prevCharCodeClass;
                let prevCharWidth;
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isLowSurrogate */ .YK(prevCharCode)) {
                    // A surrogate pair must always be considered as a single unit, so it is never to be broken
                    i--;
                    prevCharCodeClass = 0 /* CharacterClass.NONE */;
                    prevCharWidth = 2;
                }
                else {
                    prevCharCodeClass = classifier.get(prevCharCode);
                    prevCharWidth = (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isFullWidthCharacter */ .K7(prevCharCode) ? columnsForFullWidthChar : 1);
                }
                if (visibleColumn <= breakingColumn) {
                    if (forcedBreakOffset === 0) {
                        forcedBreakOffset = charStartOffset;
                        forcedBreakOffsetVisibleColumn = visibleColumn;
                    }
                    if (visibleColumn <= breakingColumn - wrappedLineBreakColumn) {
                        // went too far!
                        break;
                    }
                    if (canBreak(prevCharCode, prevCharCodeClass, charCode, charCodeClass, isKeepAll)) {
                        breakOffset = charStartOffset;
                        breakOffsetVisibleColumn = visibleColumn;
                        break;
                    }
                }
                visibleColumn -= prevCharWidth;
                charCode = prevCharCode;
                charCodeClass = prevCharCodeClass;
            }
            if (breakOffset !== 0) {
                const remainingWidthOfNextLine = wrappedLineBreakColumn - (forcedBreakOffsetVisibleColumn - breakOffsetVisibleColumn);
                if (remainingWidthOfNextLine <= tabSize) {
                    const charCodeAtForcedBreakOffset = lineText.charCodeAt(forcedBreakOffset);
                    let charWidth;
                    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCodeAtForcedBreakOffset)) {
                        // A surrogate pair must always be considered as a single unit, so it is never to be broken
                        charWidth = 2;
                    }
                    else {
                        charWidth = computeCharWidth(charCodeAtForcedBreakOffset, forcedBreakOffsetVisibleColumn, tabSize, columnsForFullWidthChar);
                    }
                    if (remainingWidthOfNextLine - charWidth < 0) {
                        // it is not worth it to break at breakOffset, it just introduces an extra needless line!
                        breakOffset = 0;
                    }
                }
            }
            if (hitATabCharacter) {
                // cannot determine the width of a tab when going backwards, so we must go forwards from the previous break
                prevIndex--;
                continue;
            }
        }
        if (breakOffset === 0) {
            // Could not find a good breaking point
            breakOffset = forcedBreakOffset;
            breakOffsetVisibleColumn = forcedBreakOffsetVisibleColumn;
        }
        if (breakOffset <= lastBreakingOffset) {
            // Make sure that we are advancing (at least one character)
            const charCode = lineText.charCodeAt(lastBreakingOffset);
            if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCode)) {
                // A surrogate pair must always be considered as a single unit, so it is never to be broken
                breakOffset = lastBreakingOffset + 2;
                breakOffsetVisibleColumn = lastBreakingOffsetVisibleColumn + 2;
            }
            else {
                breakOffset = lastBreakingOffset + 1;
                breakOffsetVisibleColumn = lastBreakingOffsetVisibleColumn + computeCharWidth(charCode, lastBreakingOffsetVisibleColumn, tabSize, columnsForFullWidthChar);
            }
        }
        lastBreakingOffset = breakOffset;
        breakingOffsets[breakingOffsetsCount] = breakOffset;
        lastBreakingOffsetVisibleColumn = breakOffsetVisibleColumn;
        breakingOffsetsVisibleColumn[breakingOffsetsCount] = breakOffsetVisibleColumn;
        breakingOffsetsCount++;
        breakingColumn = breakOffsetVisibleColumn + wrappedLineBreakColumn;
        while (prevIndex < 0 || (prevIndex < prevLen && prevBreakingOffsetsVisibleColumn[prevIndex] < breakOffsetVisibleColumn)) {
            prevIndex++;
        }
        let bestDistance = Math.abs(prevBreakingOffsetsVisibleColumn[prevIndex] - breakingColumn);
        while (prevIndex + 1 < prevLen) {
            const distance = Math.abs(prevBreakingOffsetsVisibleColumn[prevIndex + 1] - breakingColumn);
            if (distance >= bestDistance) {
                break;
            }
            bestDistance = distance;
            prevIndex++;
        }
    }
    if (breakingOffsetsCount === 0) {
        return null;
    }
    // Doing here some object reuse which ends up helping a huge deal with GC pauses!
    breakingOffsets.length = breakingOffsetsCount;
    breakingOffsetsVisibleColumn.length = breakingOffsetsCount;
    arrPool1 = previousBreakingData.breakOffsets;
    arrPool2 = previousBreakingData.breakOffsetsVisibleColumn;
    previousBreakingData.breakOffsets = breakingOffsets;
    previousBreakingData.breakOffsetsVisibleColumn = breakingOffsetsVisibleColumn;
    previousBreakingData.wrappedTextIndentLength = wrappedTextIndentLength;
    return previousBreakingData;
}
function createLineBreaks(classifier, _lineText, injectedTexts, tabSize, firstLineBreakColumn, columnsForFullWidthChar, wrappingIndent, wordBreak) {
    const lineText = _textModelEvents_js__WEBPACK_IMPORTED_MODULE_3__/* .LineInjectedText */ .gk.applyInjectedText(_lineText, injectedTexts);
    let injectionOptions;
    let injectionOffsets;
    if (injectedTexts && injectedTexts.length > 0) {
        injectionOptions = injectedTexts.map(t => t.options);
        injectionOffsets = injectedTexts.map(text => text.column - 1);
    }
    else {
        injectionOptions = null;
        injectionOffsets = null;
    }
    if (firstLineBreakColumn === -1) {
        if (!injectionOptions) {
            return null;
        }
        // creating a `LineBreakData` with an invalid `breakOffsetsVisibleColumn` is OK
        // because `breakOffsetsVisibleColumn` will never be used because it contains injected text
        return new _modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_1__/* .ModelLineProjectionData */ .gD(injectionOffsets, injectionOptions, [lineText.length], [], 0);
    }
    const len = lineText.length;
    if (len <= 1) {
        if (!injectionOptions) {
            return null;
        }
        // creating a `LineBreakData` with an invalid `breakOffsetsVisibleColumn` is OK
        // because `breakOffsetsVisibleColumn` will never be used because it contains injected text
        return new _modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_1__/* .ModelLineProjectionData */ .gD(injectionOffsets, injectionOptions, [lineText.length], [], 0);
    }
    const isKeepAll = (wordBreak === 'keepAll');
    const wrappedTextIndentLength = computeWrappedTextIndentLength(lineText, tabSize, firstLineBreakColumn, columnsForFullWidthChar, wrappingIndent);
    const wrappedLineBreakColumn = firstLineBreakColumn - wrappedTextIndentLength;
    const breakingOffsets = [];
    const breakingOffsetsVisibleColumn = [];
    let breakingOffsetsCount = 0;
    let breakOffset = 0;
    let breakOffsetVisibleColumn = 0;
    let breakingColumn = firstLineBreakColumn;
    let prevCharCode = lineText.charCodeAt(0);
    let prevCharCodeClass = classifier.get(prevCharCode);
    let visibleColumn = computeCharWidth(prevCharCode, 0, tabSize, columnsForFullWidthChar);
    let startOffset = 1;
    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(prevCharCode)) {
        // A surrogate pair must always be considered as a single unit, so it is never to be broken
        visibleColumn += 1;
        prevCharCode = lineText.charCodeAt(1);
        prevCharCodeClass = classifier.get(prevCharCode);
        startOffset++;
    }
    for (let i = startOffset; i < len; i++) {
        const charStartOffset = i;
        const charCode = lineText.charCodeAt(i);
        let charCodeClass;
        let charWidth;
        if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isHighSurrogate */ .ZG(charCode)) {
            // A surrogate pair must always be considered as a single unit, so it is never to be broken
            i++;
            charCodeClass = 0 /* CharacterClass.NONE */;
            charWidth = 2;
        }
        else {
            charCodeClass = classifier.get(charCode);
            charWidth = computeCharWidth(charCode, visibleColumn, tabSize, columnsForFullWidthChar);
        }
        if (canBreak(prevCharCode, prevCharCodeClass, charCode, charCodeClass, isKeepAll)) {
            breakOffset = charStartOffset;
            breakOffsetVisibleColumn = visibleColumn;
        }
        visibleColumn += charWidth;
        // check if adding character at `i` will go over the breaking column
        if (visibleColumn > breakingColumn) {
            // We need to break at least before character at `i`:
            if (breakOffset === 0 || visibleColumn - breakOffsetVisibleColumn > wrappedLineBreakColumn) {
                // Cannot break at `breakOffset`, must break at `i`
                breakOffset = charStartOffset;
                breakOffsetVisibleColumn = visibleColumn - charWidth;
            }
            breakingOffsets[breakingOffsetsCount] = breakOffset;
            breakingOffsetsVisibleColumn[breakingOffsetsCount] = breakOffsetVisibleColumn;
            breakingOffsetsCount++;
            breakingColumn = breakOffsetVisibleColumn + wrappedLineBreakColumn;
            breakOffset = 0;
        }
        prevCharCode = charCode;
        prevCharCodeClass = charCodeClass;
    }
    if (breakingOffsetsCount === 0 && (!injectedTexts || injectedTexts.length === 0)) {
        return null;
    }
    // Add last segment
    breakingOffsets[breakingOffsetsCount] = len;
    breakingOffsetsVisibleColumn[breakingOffsetsCount] = visibleColumn;
    return new _modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_1__/* .ModelLineProjectionData */ .gD(injectionOffsets, injectionOptions, breakingOffsets, breakingOffsetsVisibleColumn, wrappedTextIndentLength);
}
function computeCharWidth(charCode, visibleColumn, tabSize, columnsForFullWidthChar) {
    if (charCode === 9 /* CharCode.Tab */) {
        return (tabSize - (visibleColumn % tabSize));
    }
    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isFullWidthCharacter */ .K7(charCode)) {
        return columnsForFullWidthChar;
    }
    if (charCode < 32) {
        // when using `editor.renderControlCharacters`, the substitutions are often wide
        return columnsForFullWidthChar;
    }
    return 1;
}
function tabCharacterWidth(visibleColumn, tabSize) {
    return (tabSize - (visibleColumn % tabSize));
}
/**
 * Kinsoku Shori : Don't break after a leading character, like an open bracket
 * Kinsoku Shori : Don't break before a trailing character, like a period
 */
function canBreak(prevCharCode, prevCharCodeClass, charCode, charCodeClass, isKeepAll) {
    return (charCode !== 32 /* CharCode.Space */
        && ((prevCharCodeClass === 2 /* CharacterClass.BREAK_AFTER */ && charCodeClass !== 2 /* CharacterClass.BREAK_AFTER */) // break at the end of multiple BREAK_AFTER
            || (prevCharCodeClass !== 1 /* CharacterClass.BREAK_BEFORE */ && charCodeClass === 1 /* CharacterClass.BREAK_BEFORE */) // break at the start of multiple BREAK_BEFORE
            || (!isKeepAll && prevCharCodeClass === 3 /* CharacterClass.BREAK_IDEOGRAPHIC */ && charCodeClass !== 2 /* CharacterClass.BREAK_AFTER */)
            || (!isKeepAll && charCodeClass === 3 /* CharacterClass.BREAK_IDEOGRAPHIC */ && prevCharCodeClass !== 1 /* CharacterClass.BREAK_BEFORE */)));
}
function computeWrappedTextIndentLength(lineText, tabSize, firstLineBreakColumn, columnsForFullWidthChar, wrappingIndent) {
    let wrappedTextIndentLength = 0;
    if (wrappingIndent !== 0 /* WrappingIndent.None */) {
        const firstNonWhitespaceIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .firstNonWhitespaceIndex */ .LC(lineText);
        if (firstNonWhitespaceIndex !== -1) {
            // Track existing indent
            for (let i = 0; i < firstNonWhitespaceIndex; i++) {
                const charWidth = (lineText.charCodeAt(i) === 9 /* CharCode.Tab */ ? tabCharacterWidth(wrappedTextIndentLength, tabSize) : 1);
                wrappedTextIndentLength += charWidth;
            }
            // Increase indent of continuation lines, if desired
            const numberOfAdditionalTabs = (wrappingIndent === 3 /* WrappingIndent.DeepIndent */ ? 2 : wrappingIndent === 2 /* WrappingIndent.Indent */ ? 1 : 0);
            for (let i = 0; i < numberOfAdditionalTabs; i++) {
                const charWidth = tabCharacterWidth(wrappedTextIndentLength, tabSize);
                wrappedTextIndentLength += charWidth;
            }
            // Force sticking to beginning of line if no character would fit except for the indentation
            if (wrappedTextIndentLength + columnsForFullWidthChar > firstLineBreakColumn) {
                wrappedTextIndentLength = 0;
            }
        }
    }
    return wrappedTextIndentLength;
}


/***/ }),

/***/ 71895:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EY: function() { return /* binding */ OverviewRulerZone; },
/* harmony export */   Tj: function() { return /* binding */ OverviewZoneManager; }
/* harmony export */ });
/* unused harmony export ColorZone */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ColorZone {
    constructor(from, to, colorId) {
        this._colorZoneBrand = undefined;
        this.from = from | 0;
        this.to = to | 0;
        this.colorId = colorId | 0;
    }
    static compare(a, b) {
        if (a.colorId === b.colorId) {
            if (a.from === b.from) {
                return a.to - b.to;
            }
            return a.from - b.from;
        }
        return a.colorId - b.colorId;
    }
}
/**
 * A zone in the overview ruler
 */
class OverviewRulerZone {
    constructor(startLineNumber, endLineNumber, heightInLines, color) {
        this._overviewRulerZoneBrand = undefined;
        this.startLineNumber = startLineNumber;
        this.endLineNumber = endLineNumber;
        this.heightInLines = heightInLines;
        this.color = color;
        this._colorZone = null;
    }
    static compare(a, b) {
        if (a.color === b.color) {
            if (a.startLineNumber === b.startLineNumber) {
                if (a.heightInLines === b.heightInLines) {
                    return a.endLineNumber - b.endLineNumber;
                }
                return a.heightInLines - b.heightInLines;
            }
            return a.startLineNumber - b.startLineNumber;
        }
        return a.color < b.color ? -1 : 1;
    }
    setColorZone(colorZone) {
        this._colorZone = colorZone;
    }
    getColorZones() {
        return this._colorZone;
    }
}
class OverviewZoneManager {
    constructor(getVerticalOffsetForLine) {
        this._getVerticalOffsetForLine = getVerticalOffsetForLine;
        this._zones = [];
        this._colorZonesInvalid = false;
        this._lineHeight = 0;
        this._domWidth = 0;
        this._domHeight = 0;
        this._outerHeight = 0;
        this._pixelRatio = 1;
        this._lastAssignedId = 0;
        this._color2Id = Object.create(null);
        this._id2Color = [];
    }
    getId2Color() {
        return this._id2Color;
    }
    setZones(newZones) {
        this._zones = newZones;
        this._zones.sort(OverviewRulerZone.compare);
    }
    setLineHeight(lineHeight) {
        if (this._lineHeight === lineHeight) {
            return false;
        }
        this._lineHeight = lineHeight;
        this._colorZonesInvalid = true;
        return true;
    }
    setPixelRatio(pixelRatio) {
        this._pixelRatio = pixelRatio;
        this._colorZonesInvalid = true;
    }
    getDOMWidth() {
        return this._domWidth;
    }
    getCanvasWidth() {
        return this._domWidth * this._pixelRatio;
    }
    setDOMWidth(width) {
        if (this._domWidth === width) {
            return false;
        }
        this._domWidth = width;
        this._colorZonesInvalid = true;
        return true;
    }
    getDOMHeight() {
        return this._domHeight;
    }
    getCanvasHeight() {
        return this._domHeight * this._pixelRatio;
    }
    setDOMHeight(height) {
        if (this._domHeight === height) {
            return false;
        }
        this._domHeight = height;
        this._colorZonesInvalid = true;
        return true;
    }
    getOuterHeight() {
        return this._outerHeight;
    }
    setOuterHeight(outerHeight) {
        if (this._outerHeight === outerHeight) {
            return false;
        }
        this._outerHeight = outerHeight;
        this._colorZonesInvalid = true;
        return true;
    }
    resolveColorZones() {
        const colorZonesInvalid = this._colorZonesInvalid;
        const lineHeight = Math.floor(this._lineHeight);
        const totalHeight = Math.floor(this.getCanvasHeight());
        const outerHeight = Math.floor(this._outerHeight);
        const heightRatio = totalHeight / outerHeight;
        const halfMinimumHeight = Math.floor(4 /* Constants.MINIMUM_HEIGHT */ * this._pixelRatio / 2);
        const allColorZones = [];
        for (let i = 0, len = this._zones.length; i < len; i++) {
            const zone = this._zones[i];
            if (!colorZonesInvalid) {
                const colorZone = zone.getColorZones();
                if (colorZone) {
                    allColorZones.push(colorZone);
                    continue;
                }
            }
            const offset1 = this._getVerticalOffsetForLine(zone.startLineNumber);
            const offset2 = (zone.heightInLines === 0
                ? this._getVerticalOffsetForLine(zone.endLineNumber) + lineHeight
                : offset1 + zone.heightInLines * lineHeight);
            const y1 = Math.floor(heightRatio * offset1);
            const y2 = Math.floor(heightRatio * offset2);
            let ycenter = Math.floor((y1 + y2) / 2);
            let halfHeight = (y2 - ycenter);
            if (halfHeight < halfMinimumHeight) {
                halfHeight = halfMinimumHeight;
            }
            if (ycenter - halfHeight < 0) {
                ycenter = halfHeight;
            }
            if (ycenter + halfHeight > totalHeight) {
                ycenter = totalHeight - halfHeight;
            }
            const color = zone.color;
            let colorId = this._color2Id[color];
            if (!colorId) {
                colorId = (++this._lastAssignedId);
                this._color2Id[color] = colorId;
                this._id2Color[colorId] = color;
            }
            const colorZone = new ColorZone(ycenter - halfHeight, ycenter + halfHeight, colorId);
            zone.setColorZone(colorZone);
            allColorZones.push(colorZone);
        }
        this._colorZonesInvalid = false;
        allColorZones.sort(ColorZone.compare);
        return allColorZones;
    }
}


/***/ }),

/***/ 80659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ ViewContext; }
/* harmony export */ });
/* harmony import */ var _editorTheme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68923);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ViewContext {
    constructor(configuration, theme, model) {
        this.configuration = configuration;
        this.theme = new _editorTheme_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorTheme */ .b(theme);
        this.viewModel = model;
        this.viewLayout = model.viewLayout;
    }
    addEventHandler(eventHandler) {
        this.viewModel.addViewEventHandler(eventHandler);
    }
    removeEventHandler(eventHandler) {
        this.viewModel.removeViewEventHandler(eventHandler);
    }
}


/***/ }),

/***/ 66375:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $t: function() { return /* binding */ isModelDecorationInComment; },
/* harmony export */   CU: function() { return /* binding */ ViewModelDecorations; },
/* harmony export */   Fd: function() { return /* binding */ isModelDecorationVisible; },
/* harmony export */   zg: function() { return /* binding */ isModelDecorationInString; }
/* harmony export */ });
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3981);
/* harmony import */ var _viewModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1975);
/* harmony import */ var _config_editorOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58908);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class ViewModelDecorations {
    constructor(editorId, model, configuration, linesCollection, coordinatesConverter) {
        this.editorId = editorId;
        this.model = model;
        this.configuration = configuration;
        this._linesCollection = linesCollection;
        this._coordinatesConverter = coordinatesConverter;
        this._decorationsCache = Object.create(null);
        this._cachedModelDecorationsResolver = null;
        this._cachedModelDecorationsResolverViewRange = null;
    }
    _clearCachedModelDecorationsResolver() {
        this._cachedModelDecorationsResolver = null;
        this._cachedModelDecorationsResolverViewRange = null;
    }
    dispose() {
        this._decorationsCache = Object.create(null);
        this._clearCachedModelDecorationsResolver();
    }
    reset() {
        this._decorationsCache = Object.create(null);
        this._clearCachedModelDecorationsResolver();
    }
    onModelDecorationsChanged() {
        this._decorationsCache = Object.create(null);
        this._clearCachedModelDecorationsResolver();
    }
    onLineMappingChanged() {
        this._decorationsCache = Object.create(null);
        this._clearCachedModelDecorationsResolver();
    }
    _getOrCreateViewModelDecoration(modelDecoration) {
        const id = modelDecoration.id;
        let r = this._decorationsCache[id];
        if (!r) {
            const modelRange = modelDecoration.range;
            const options = modelDecoration.options;
            let viewRange;
            if (options.isWholeLine) {
                const start = this._coordinatesConverter.convertModelPositionToViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(modelRange.startLineNumber, 1), 0 /* PositionAffinity.Left */, false, true);
                const end = this._coordinatesConverter.convertModelPositionToViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(modelRange.endLineNumber, this.model.getLineMaxColumn(modelRange.endLineNumber)), 1 /* PositionAffinity.Right */);
                viewRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(start.lineNumber, start.column, end.lineNumber, end.column);
            }
            else {
                // For backwards compatibility reasons, we want injected text before any decoration.
                // Thus, move decorations to the right.
                viewRange = this._coordinatesConverter.convertModelRangeToViewRange(modelRange, 1 /* PositionAffinity.Right */);
            }
            r = new _viewModel_js__WEBPACK_IMPORTED_MODULE_0__/* .ViewModelDecoration */ .$l(viewRange, options);
            this._decorationsCache[id] = r;
        }
        return r;
    }
    getMinimapDecorationsInRange(range) {
        return this._getDecorationsInRange(range, true, false).decorations;
    }
    getDecorationsViewportData(viewRange) {
        let cacheIsValid = (this._cachedModelDecorationsResolver !== null);
        cacheIsValid = cacheIsValid && (viewRange.equalsRange(this._cachedModelDecorationsResolverViewRange));
        if (!cacheIsValid) {
            this._cachedModelDecorationsResolver = this._getDecorationsInRange(viewRange, false, false);
            this._cachedModelDecorationsResolverViewRange = viewRange;
        }
        return this._cachedModelDecorationsResolver;
    }
    getInlineDecorationsOnLine(lineNumber, onlyMinimapDecorations = false, onlyMarginDecorations = false) {
        const range = new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, this._linesCollection.getViewLineMinColumn(lineNumber), lineNumber, this._linesCollection.getViewLineMaxColumn(lineNumber));
        return this._getDecorationsInRange(range, onlyMinimapDecorations, onlyMarginDecorations).inlineDecorations[0];
    }
    _getDecorationsInRange(viewRange, onlyMinimapDecorations, onlyMarginDecorations) {
        const modelDecorations = this._linesCollection.getDecorationsInRange(viewRange, this.editorId, (0,_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .filterValidationDecorations */ .$J)(this.configuration.options), onlyMinimapDecorations, onlyMarginDecorations);
        const startLineNumber = viewRange.startLineNumber;
        const endLineNumber = viewRange.endLineNumber;
        const decorationsInViewport = [];
        let decorationsInViewportLen = 0;
        const inlineDecorations = [];
        for (let j = startLineNumber; j <= endLineNumber; j++) {
            inlineDecorations[j - startLineNumber] = [];
        }
        for (let i = 0, len = modelDecorations.length; i < len; i++) {
            const modelDecoration = modelDecorations[i];
            const decorationOptions = modelDecoration.options;
            if (!isModelDecorationVisible(this.model, modelDecoration)) {
                continue;
            }
            const viewModelDecoration = this._getOrCreateViewModelDecoration(modelDecoration);
            const viewRange = viewModelDecoration.range;
            decorationsInViewport[decorationsInViewportLen++] = viewModelDecoration;
            if (decorationOptions.inlineClassName) {
                const inlineDecoration = new _viewModel_js__WEBPACK_IMPORTED_MODULE_0__/* .InlineDecoration */ .$t(viewRange, decorationOptions.inlineClassName, decorationOptions.inlineClassNameAffectsLetterSpacing ? 3 /* InlineDecorationType.RegularAffectingLetterSpacing */ : 0 /* InlineDecorationType.Regular */);
                const intersectedStartLineNumber = Math.max(startLineNumber, viewRange.startLineNumber);
                const intersectedEndLineNumber = Math.min(endLineNumber, viewRange.endLineNumber);
                for (let j = intersectedStartLineNumber; j <= intersectedEndLineNumber; j++) {
                    inlineDecorations[j - startLineNumber].push(inlineDecoration);
                }
            }
            if (decorationOptions.beforeContentClassName) {
                if (startLineNumber <= viewRange.startLineNumber && viewRange.startLineNumber <= endLineNumber) {
                    const inlineDecoration = new _viewModel_js__WEBPACK_IMPORTED_MODULE_0__/* .InlineDecoration */ .$t(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(viewRange.startLineNumber, viewRange.startColumn, viewRange.startLineNumber, viewRange.startColumn), decorationOptions.beforeContentClassName, 1 /* InlineDecorationType.Before */);
                    inlineDecorations[viewRange.startLineNumber - startLineNumber].push(inlineDecoration);
                }
            }
            if (decorationOptions.afterContentClassName) {
                if (startLineNumber <= viewRange.endLineNumber && viewRange.endLineNumber <= endLineNumber) {
                    const inlineDecoration = new _viewModel_js__WEBPACK_IMPORTED_MODULE_0__/* .InlineDecoration */ .$t(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(viewRange.endLineNumber, viewRange.endColumn, viewRange.endLineNumber, viewRange.endColumn), decorationOptions.afterContentClassName, 2 /* InlineDecorationType.After */);
                    inlineDecorations[viewRange.endLineNumber - startLineNumber].push(inlineDecoration);
                }
            }
        }
        return {
            decorations: decorationsInViewport,
            inlineDecorations: inlineDecorations
        };
    }
}
function isModelDecorationVisible(model, decoration) {
    if (decoration.options.hideInCommentTokens && isModelDecorationInComment(model, decoration)) {
        return false;
    }
    if (decoration.options.hideInStringTokens && isModelDecorationInString(model, decoration)) {
        return false;
    }
    return true;
}
function isModelDecorationInComment(model, decoration) {
    return testTokensInRange(model, decoration.range, (tokenType) => tokenType === 1 /* StandardTokenType.Comment */);
}
function isModelDecorationInString(model, decoration) {
    return testTokensInRange(model, decoration.range, (tokenType) => tokenType === 2 /* StandardTokenType.String */);
}
/**
 * Calls the callback for every token that intersects the range.
 * If the callback returns `false`, iteration stops and `false` is returned.
 * Otherwise, `true` is returned.
 */
function testTokensInRange(model, range, callback) {
    for (let lineNumber = range.startLineNumber; lineNumber <= range.endLineNumber; lineNumber++) {
        const lineTokens = model.tokenization.getLineTokens(lineNumber);
        const isFirstLine = lineNumber === range.startLineNumber;
        const isEndLine = lineNumber === range.endLineNumber;
        let tokenIdx = isFirstLine ? lineTokens.findTokenIndexAtOffset(range.startColumn - 1) : 0;
        while (tokenIdx < lineTokens.getCount()) {
            if (isEndLine) {
                const startOffset = lineTokens.getStartOffset(tokenIdx);
                if (startOffset > range.endColumn - 1) {
                    break;
                }
            }
            const callbackResult = callback(lineTokens.getStandardTokenType(tokenIdx));
            if (!callbackResult) {
                return false;
            }
            tokenIdx++;
        }
    }
    return true;
}


/***/ }),

/***/ 6079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: function() { return /* binding */ ViewModel; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(4186);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursor.js
var cursor = __webpack_require__(15233);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/cursorCommon.js
var cursorCommon = __webpack_require__(78203);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/textModelEvents.js
var textModelEvents = __webpack_require__(40114);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(67984);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/textToHtmlTokenizer.js
var textToHtmlTokenizer = __webpack_require__(42397);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewEvents.js
var viewEvents = __webpack_require__(18187);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLayout.js + 1 modules
var viewLayout = __webpack_require__(2762);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/minimapTokensColorTracker.js
var minimapTokensColorTracker = __webpack_require__(79777);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel.js
var viewModel = __webpack_require__(1975);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelDecorations.js
var viewModelDecorations = __webpack_require__(66375);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModelEventDispatcher.js
var viewModelEventDispatcher = __webpack_require__(98908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/textModelGuides.js
var textModelGuides = __webpack_require__(62071);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js
var textModel = __webpack_require__(95792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/lineTokens.js
var lineTokens = __webpack_require__(15792);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/modelLineProjection.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function createModelLineProjection(lineBreakData, isVisible) {
    if (lineBreakData === null) {
        // No mapping needed
        if (isVisible) {
            return IdentityModelLineProjection.INSTANCE;
        }
        return HiddenModelLineProjection.INSTANCE;
    }
    else {
        return new ModelLineProjection(lineBreakData, isVisible);
    }
}
/**
 * This projection is used to
 * * wrap model lines
 * * inject text
 */
class ModelLineProjection {
    constructor(lineBreakData, isVisible) {
        this._projectionData = lineBreakData;
        this._isVisible = isVisible;
    }
    isVisible() {
        return this._isVisible;
    }
    setVisible(isVisible) {
        this._isVisible = isVisible;
        return this;
    }
    getProjectionData() {
        return this._projectionData;
    }
    getViewLineCount() {
        if (!this._isVisible) {
            return 0;
        }
        return this._projectionData.getOutputLineCount();
    }
    getViewLineContent(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        const startOffsetInInputWithInjections = outputLineIndex > 0 ? this._projectionData.breakOffsets[outputLineIndex - 1] : 0;
        const endOffsetInInputWithInjections = this._projectionData.breakOffsets[outputLineIndex];
        let r;
        if (this._projectionData.injectionOffsets !== null) {
            const injectedTexts = this._projectionData.injectionOffsets.map((offset, idx) => new textModelEvents/* LineInjectedText */.gk(0, 0, offset + 1, this._projectionData.injectionOptions[idx], 0));
            const lineWithInjections = textModelEvents/* LineInjectedText */.gk.applyInjectedText(model.getLineContent(modelLineNumber), injectedTexts);
            r = lineWithInjections.substring(startOffsetInInputWithInjections, endOffsetInInputWithInjections);
        }
        else {
            r = model.getValueInRange({
                startLineNumber: modelLineNumber,
                startColumn: startOffsetInInputWithInjections + 1,
                endLineNumber: modelLineNumber,
                endColumn: endOffsetInInputWithInjections + 1
            });
        }
        if (outputLineIndex > 0) {
            r = spaces(this._projectionData.wrappedTextIndentLength) + r;
        }
        return r;
    }
    getViewLineLength(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getLineLength(outputLineIndex);
    }
    getViewLineMinColumn(_model, _modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getMinOutputOffset(outputLineIndex) + 1;
    }
    getViewLineMaxColumn(model, modelLineNumber, outputLineIndex) {
        this._assertVisible();
        return this._projectionData.getMaxOutputOffset(outputLineIndex) + 1;
    }
    /**
     * Try using {@link getViewLinesData} instead.
    */
    getViewLineData(model, modelLineNumber, outputLineIndex) {
        const arr = new Array();
        this.getViewLinesData(model, modelLineNumber, outputLineIndex, 1, 0, [true], arr);
        return arr[0];
    }
    getViewLinesData(model, modelLineNumber, outputLineIdx, lineCount, globalStartIndex, needed, result) {
        this._assertVisible();
        const lineBreakData = this._projectionData;
        const injectionOffsets = lineBreakData.injectionOffsets;
        const injectionOptions = lineBreakData.injectionOptions;
        let inlineDecorationsPerOutputLine = null;
        if (injectionOffsets) {
            inlineDecorationsPerOutputLine = [];
            let totalInjectedTextLengthBefore = 0;
            let currentInjectedOffset = 0;
            for (let outputLineIndex = 0; outputLineIndex < lineBreakData.getOutputLineCount(); outputLineIndex++) {
                const inlineDecorations = new Array();
                inlineDecorationsPerOutputLine[outputLineIndex] = inlineDecorations;
                const lineStartOffsetInInputWithInjections = outputLineIndex > 0 ? lineBreakData.breakOffsets[outputLineIndex - 1] : 0;
                const lineEndOffsetInInputWithInjections = lineBreakData.breakOffsets[outputLineIndex];
                while (currentInjectedOffset < injectionOffsets.length) {
                    const length = injectionOptions[currentInjectedOffset].content.length;
                    const injectedTextStartOffsetInInputWithInjections = injectionOffsets[currentInjectedOffset] + totalInjectedTextLengthBefore;
                    const injectedTextEndOffsetInInputWithInjections = injectedTextStartOffsetInInputWithInjections + length;
                    if (injectedTextStartOffsetInInputWithInjections > lineEndOffsetInInputWithInjections) {
                        // Injected text only starts in later wrapped lines.
                        break;
                    }
                    if (lineStartOffsetInInputWithInjections < injectedTextEndOffsetInInputWithInjections) {
                        // Injected text ends after or in this line (but also starts in or before this line).
                        const options = injectionOptions[currentInjectedOffset];
                        if (options.inlineClassName) {
                            const offset = (outputLineIndex > 0 ? lineBreakData.wrappedTextIndentLength : 0);
                            const start = offset + Math.max(injectedTextStartOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, 0);
                            const end = offset + Math.min(injectedTextEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections, lineEndOffsetInInputWithInjections - lineStartOffsetInInputWithInjections);
                            if (start !== end) {
                                inlineDecorations.push(new viewModel/* SingleLineInlineDecoration */.Wx(start, end, options.inlineClassName, options.inlineClassNameAffectsLetterSpacing));
                            }
                        }
                    }
                    if (injectedTextEndOffsetInInputWithInjections <= lineEndOffsetInInputWithInjections) {
                        totalInjectedTextLengthBefore += length;
                        currentInjectedOffset++;
                    }
                    else {
                        // injected text breaks into next line, process it again
                        break;
                    }
                }
            }
        }
        let lineWithInjections;
        if (injectionOffsets) {
            lineWithInjections = model.tokenization.getLineTokens(modelLineNumber).withInserted(injectionOffsets.map((offset, idx) => ({
                offset,
                text: injectionOptions[idx].content,
                tokenMetadata: lineTokens/* LineTokens */.A.defaultTokenMetadata
            })));
        }
        else {
            lineWithInjections = model.tokenization.getLineTokens(modelLineNumber);
        }
        for (let outputLineIndex = outputLineIdx; outputLineIndex < outputLineIdx + lineCount; outputLineIndex++) {
            const globalIndex = globalStartIndex + outputLineIndex - outputLineIdx;
            if (!needed[globalIndex]) {
                result[globalIndex] = null;
                continue;
            }
            result[globalIndex] = this._getViewLineData(lineWithInjections, inlineDecorationsPerOutputLine ? inlineDecorationsPerOutputLine[outputLineIndex] : null, outputLineIndex);
        }
    }
    _getViewLineData(lineWithInjections, inlineDecorations, outputLineIndex) {
        this._assertVisible();
        const lineBreakData = this._projectionData;
        const deltaStartIndex = (outputLineIndex > 0 ? lineBreakData.wrappedTextIndentLength : 0);
        const lineStartOffsetInInputWithInjections = outputLineIndex > 0 ? lineBreakData.breakOffsets[outputLineIndex - 1] : 0;
        const lineEndOffsetInInputWithInjections = lineBreakData.breakOffsets[outputLineIndex];
        const tokens = lineWithInjections.sliceAndInflate(lineStartOffsetInInputWithInjections, lineEndOffsetInInputWithInjections, deltaStartIndex);
        let lineContent = tokens.getLineContent();
        if (outputLineIndex > 0) {
            lineContent = spaces(lineBreakData.wrappedTextIndentLength) + lineContent;
        }
        const minColumn = this._projectionData.getMinOutputOffset(outputLineIndex) + 1;
        const maxColumn = lineContent.length + 1;
        const continuesWithWrappedLine = (outputLineIndex + 1 < this.getViewLineCount());
        const startVisibleColumn = (outputLineIndex === 0 ? 0 : lineBreakData.breakOffsetsVisibleColumn[outputLineIndex - 1]);
        return new viewModel/* ViewLineData */.IP(lineContent, continuesWithWrappedLine, minColumn, maxColumn, startVisibleColumn, tokens, inlineDecorations);
    }
    getModelColumnOfViewPosition(outputLineIndex, outputColumn) {
        this._assertVisible();
        return this._projectionData.translateToInputOffset(outputLineIndex, outputColumn - 1) + 1;
    }
    getViewPositionOfModelPosition(deltaLineNumber, inputColumn, affinity = 2 /* PositionAffinity.None */) {
        this._assertVisible();
        const r = this._projectionData.translateToOutputPosition(inputColumn - 1, affinity);
        return r.toPosition(deltaLineNumber);
    }
    getViewLineNumberOfModelPosition(deltaLineNumber, inputColumn) {
        this._assertVisible();
        const r = this._projectionData.translateToOutputPosition(inputColumn - 1);
        return deltaLineNumber + r.outputLineIndex;
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        const baseViewLineNumber = outputPosition.lineNumber - outputLineIndex;
        const normalizedOutputPosition = this._projectionData.normalizeOutputPosition(outputLineIndex, outputPosition.column - 1, affinity);
        const result = normalizedOutputPosition.toPosition(baseViewLineNumber);
        return result;
    }
    getInjectedTextAt(outputLineIndex, outputColumn) {
        return this._projectionData.getInjectedText(outputLineIndex, outputColumn - 1);
    }
    _assertVisible() {
        if (!this._isVisible) {
            throw new Error('Not supported');
        }
    }
}
/**
 * This projection does not change the model line.
*/
class IdentityModelLineProjection {
    constructor() { }
    isVisible() {
        return true;
    }
    setVisible(isVisible) {
        if (isVisible) {
            return this;
        }
        return HiddenModelLineProjection.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 1;
    }
    getViewLineContent(model, modelLineNumber, _outputLineIndex) {
        return model.getLineContent(modelLineNumber);
    }
    getViewLineLength(model, modelLineNumber, _outputLineIndex) {
        return model.getLineLength(modelLineNumber);
    }
    getViewLineMinColumn(model, modelLineNumber, _outputLineIndex) {
        return model.getLineMinColumn(modelLineNumber);
    }
    getViewLineMaxColumn(model, modelLineNumber, _outputLineIndex) {
        return model.getLineMaxColumn(modelLineNumber);
    }
    getViewLineData(model, modelLineNumber, _outputLineIndex) {
        const lineTokens = model.tokenization.getLineTokens(modelLineNumber);
        const lineContent = lineTokens.getLineContent();
        return new viewModel/* ViewLineData */.IP(lineContent, false, 1, lineContent.length + 1, 0, lineTokens.inflate(), null);
    }
    getViewLinesData(model, modelLineNumber, _fromOuputLineIndex, _toOutputLineIndex, globalStartIndex, needed, result) {
        if (!needed[globalStartIndex]) {
            result[globalStartIndex] = null;
            return;
        }
        result[globalStartIndex] = this.getViewLineData(model, modelLineNumber, 0);
    }
    getModelColumnOfViewPosition(_outputLineIndex, outputColumn) {
        return outputColumn;
    }
    getViewPositionOfModelPosition(deltaLineNumber, inputColumn) {
        return new core_position/* Position */.L(deltaLineNumber, inputColumn);
    }
    getViewLineNumberOfModelPosition(deltaLineNumber, _inputColumn) {
        return deltaLineNumber;
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        return outputPosition;
    }
    getInjectedTextAt(_outputLineIndex, _outputColumn) {
        return null;
    }
}
IdentityModelLineProjection.INSTANCE = new IdentityModelLineProjection();
/**
 * This projection hides the model line.
 */
class HiddenModelLineProjection {
    constructor() { }
    isVisible() {
        return false;
    }
    setVisible(isVisible) {
        if (!isVisible) {
            return this;
        }
        return IdentityModelLineProjection.INSTANCE;
    }
    getProjectionData() {
        return null;
    }
    getViewLineCount() {
        return 0;
    }
    getViewLineContent(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineLength(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineMinColumn(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineMaxColumn(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLineData(_model, _modelLineNumber, _outputLineIndex) {
        throw new Error('Not supported');
    }
    getViewLinesData(_model, _modelLineNumber, _fromOuputLineIndex, _toOutputLineIndex, _globalStartIndex, _needed, _result) {
        throw new Error('Not supported');
    }
    getModelColumnOfViewPosition(_outputLineIndex, _outputColumn) {
        throw new Error('Not supported');
    }
    getViewPositionOfModelPosition(_deltaLineNumber, _inputColumn) {
        throw new Error('Not supported');
    }
    getViewLineNumberOfModelPosition(_deltaLineNumber, _inputColumn) {
        throw new Error('Not supported');
    }
    normalizePosition(outputLineIndex, outputPosition, affinity) {
        throw new Error('Not supported');
    }
    getInjectedTextAt(_outputLineIndex, _outputColumn) {
        throw new Error('Not supported');
    }
}
HiddenModelLineProjection.INSTANCE = new HiddenModelLineProjection();
const _spaces = [''];
function spaces(count) {
    if (count >= _spaces.length) {
        for (let i = 1; i <= count; i++) {
            _spaces[i] = _makeSpaces(i);
        }
    }
    return _spaces[count];
}
function _makeSpaces(count) {
    return new Array(count + 1).join(' ');
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/prefixSumComputer.js
var prefixSumComputer = __webpack_require__(95259);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelLines.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










class ViewModelLinesFromProjectedModel {
    constructor(editorId, model, domLineBreaksComputerFactory, monospaceLineBreaksComputerFactory, fontInfo, tabSize, wrappingStrategy, wrappingColumn, wrappingIndent, wordBreak) {
        this._editorId = editorId;
        this.model = model;
        this._validModelVersionId = -1;
        this._domLineBreaksComputerFactory = domLineBreaksComputerFactory;
        this._monospaceLineBreaksComputerFactory = monospaceLineBreaksComputerFactory;
        this.fontInfo = fontInfo;
        this.tabSize = tabSize;
        this.wrappingStrategy = wrappingStrategy;
        this.wrappingColumn = wrappingColumn;
        this.wrappingIndent = wrappingIndent;
        this.wordBreak = wordBreak;
        this._constructLines(/*resetHiddenAreas*/ true, null);
    }
    dispose() {
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
    }
    createCoordinatesConverter() {
        return new CoordinatesConverter(this);
    }
    _constructLines(resetHiddenAreas, previousLineBreaks) {
        this.modelLineProjections = [];
        if (resetHiddenAreas) {
            this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, []);
        }
        const linesContent = this.model.getLinesContent();
        const injectedTextDecorations = this.model.getInjectedTextDecorations(this._editorId);
        const lineCount = linesContent.length;
        const lineBreaksComputer = this.createLineBreaksComputer();
        const injectedTextQueue = new arrays/* ArrayQueue */.H9(textModelEvents/* LineInjectedText */.gk.fromDecorations(injectedTextDecorations));
        for (let i = 0; i < lineCount; i++) {
            const lineInjectedText = injectedTextQueue.takeWhile(t => t.lineNumber === i + 1);
            lineBreaksComputer.addRequest(linesContent[i], lineInjectedText, previousLineBreaks ? previousLineBreaks[i] : null);
        }
        const linesBreaks = lineBreaksComputer.finalize();
        const values = [];
        const hiddenAreas = this.hiddenAreasDecorationIds.map((areaId) => this.model.getDecorationRange(areaId)).sort(core_range/* Range */.e.compareRangesUsingStarts);
        let hiddenAreaStart = 1, hiddenAreaEnd = 0;
        let hiddenAreaIdx = -1;
        let nextLineNumberToUpdateHiddenArea = (hiddenAreaIdx + 1 < hiddenAreas.length) ? hiddenAreaEnd + 1 : lineCount + 2;
        for (let i = 0; i < lineCount; i++) {
            const lineNumber = i + 1;
            if (lineNumber === nextLineNumberToUpdateHiddenArea) {
                hiddenAreaIdx++;
                hiddenAreaStart = hiddenAreas[hiddenAreaIdx].startLineNumber;
                hiddenAreaEnd = hiddenAreas[hiddenAreaIdx].endLineNumber;
                nextLineNumberToUpdateHiddenArea = (hiddenAreaIdx + 1 < hiddenAreas.length) ? hiddenAreaEnd + 1 : lineCount + 2;
            }
            const isInHiddenArea = (lineNumber >= hiddenAreaStart && lineNumber <= hiddenAreaEnd);
            const line = createModelLineProjection(linesBreaks[i], !isInHiddenArea);
            values[i] = line.getViewLineCount();
            this.modelLineProjections[i] = line;
        }
        this._validModelVersionId = this.model.getVersionId();
        this.projectedModelLineLineCounts = new prefixSumComputer/* ConstantTimePrefixSumComputer */.Ck(values);
    }
    getHiddenAreas() {
        return this.hiddenAreasDecorationIds.map((decId) => this.model.getDecorationRange(decId));
    }
    setHiddenAreas(_ranges) {
        const validatedRanges = _ranges.map(r => this.model.validateRange(r));
        const newRanges = normalizeLineRanges(validatedRanges);
        // TODO@Martin: Please stop calling this method on each model change!
        // This checks if there really was a change
        const oldRanges = this.hiddenAreasDecorationIds.map((areaId) => this.model.getDecorationRange(areaId)).sort(core_range/* Range */.e.compareRangesUsingStarts);
        if (newRanges.length === oldRanges.length) {
            let hasDifference = false;
            for (let i = 0; i < newRanges.length; i++) {
                if (!newRanges[i].equalsRange(oldRanges[i])) {
                    hasDifference = true;
                    break;
                }
            }
            if (!hasDifference) {
                return false;
            }
        }
        const newDecorations = newRanges.map((r) => ({
            range: r,
            options: textModel/* ModelDecorationOptions */.qx.EMPTY,
        }));
        this.hiddenAreasDecorationIds = this.model.deltaDecorations(this.hiddenAreasDecorationIds, newDecorations);
        const hiddenAreas = newRanges;
        let hiddenAreaStart = 1, hiddenAreaEnd = 0;
        let hiddenAreaIdx = -1;
        let nextLineNumberToUpdateHiddenArea = (hiddenAreaIdx + 1 < hiddenAreas.length) ? hiddenAreaEnd + 1 : this.modelLineProjections.length + 2;
        let hasVisibleLine = false;
        for (let i = 0; i < this.modelLineProjections.length; i++) {
            const lineNumber = i + 1;
            if (lineNumber === nextLineNumberToUpdateHiddenArea) {
                hiddenAreaIdx++;
                hiddenAreaStart = hiddenAreas[hiddenAreaIdx].startLineNumber;
                hiddenAreaEnd = hiddenAreas[hiddenAreaIdx].endLineNumber;
                nextLineNumberToUpdateHiddenArea = (hiddenAreaIdx + 1 < hiddenAreas.length) ? hiddenAreaEnd + 1 : this.modelLineProjections.length + 2;
            }
            let lineChanged = false;
            if (lineNumber >= hiddenAreaStart && lineNumber <= hiddenAreaEnd) {
                // Line should be hidden
                if (this.modelLineProjections[i].isVisible()) {
                    this.modelLineProjections[i] = this.modelLineProjections[i].setVisible(false);
                    lineChanged = true;
                }
            }
            else {
                hasVisibleLine = true;
                // Line should be visible
                if (!this.modelLineProjections[i].isVisible()) {
                    this.modelLineProjections[i] = this.modelLineProjections[i].setVisible(true);
                    lineChanged = true;
                }
            }
            if (lineChanged) {
                const newOutputLineCount = this.modelLineProjections[i].getViewLineCount();
                this.projectedModelLineLineCounts.setValue(i, newOutputLineCount);
            }
        }
        if (!hasVisibleLine) {
            // Cannot have everything be hidden => reveal everything!
            this.setHiddenAreas([]);
        }
        return true;
    }
    modelPositionIsVisible(modelLineNumber, _modelColumn) {
        if (modelLineNumber < 1 || modelLineNumber > this.modelLineProjections.length) {
            // invalid arguments
            return false;
        }
        return this.modelLineProjections[modelLineNumber - 1].isVisible();
    }
    getModelLineViewLineCount(modelLineNumber) {
        if (modelLineNumber < 1 || modelLineNumber > this.modelLineProjections.length) {
            // invalid arguments
            return 1;
        }
        return this.modelLineProjections[modelLineNumber - 1].getViewLineCount();
    }
    setTabSize(newTabSize) {
        if (this.tabSize === newTabSize) {
            return false;
        }
        this.tabSize = newTabSize;
        this._constructLines(/*resetHiddenAreas*/ false, null);
        return true;
    }
    setWrappingSettings(fontInfo, wrappingStrategy, wrappingColumn, wrappingIndent, wordBreak) {
        const equalFontInfo = this.fontInfo.equals(fontInfo);
        const equalWrappingStrategy = (this.wrappingStrategy === wrappingStrategy);
        const equalWrappingColumn = (this.wrappingColumn === wrappingColumn);
        const equalWrappingIndent = (this.wrappingIndent === wrappingIndent);
        const equalWordBreak = (this.wordBreak === wordBreak);
        if (equalFontInfo && equalWrappingStrategy && equalWrappingColumn && equalWrappingIndent && equalWordBreak) {
            return false;
        }
        const onlyWrappingColumnChanged = (equalFontInfo && equalWrappingStrategy && !equalWrappingColumn && equalWrappingIndent && equalWordBreak);
        this.fontInfo = fontInfo;
        this.wrappingStrategy = wrappingStrategy;
        this.wrappingColumn = wrappingColumn;
        this.wrappingIndent = wrappingIndent;
        this.wordBreak = wordBreak;
        let previousLineBreaks = null;
        if (onlyWrappingColumnChanged) {
            previousLineBreaks = [];
            for (let i = 0, len = this.modelLineProjections.length; i < len; i++) {
                previousLineBreaks[i] = this.modelLineProjections[i].getProjectionData();
            }
        }
        this._constructLines(/*resetHiddenAreas*/ false, previousLineBreaks);
        return true;
    }
    createLineBreaksComputer() {
        const lineBreaksComputerFactory = (this.wrappingStrategy === 'advanced'
            ? this._domLineBreaksComputerFactory
            : this._monospaceLineBreaksComputerFactory);
        return lineBreaksComputerFactory.createLineBreaksComputer(this.fontInfo, this.tabSize, this.wrappingColumn, this.wrappingIndent, this.wordBreak);
    }
    onModelFlushed() {
        this._constructLines(/*resetHiddenAreas*/ true, null);
    }
    onModelLinesDeleted(versionId, fromLineNumber, toLineNumber) {
        if (!versionId || versionId <= this._validModelVersionId) {
            // Here we check for versionId in case the lines were reconstructed in the meantime.
            // We don't want to apply stale change events on top of a newer read model state.
            return null;
        }
        const outputFromLineNumber = (fromLineNumber === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(fromLineNumber - 1) + 1);
        const outputToLineNumber = this.projectedModelLineLineCounts.getPrefixSum(toLineNumber);
        this.modelLineProjections.splice(fromLineNumber - 1, toLineNumber - fromLineNumber + 1);
        this.projectedModelLineLineCounts.removeValues(fromLineNumber - 1, toLineNumber - fromLineNumber + 1);
        return new viewEvents/* ViewLinesDeletedEvent */.vk(outputFromLineNumber, outputToLineNumber);
    }
    onModelLinesInserted(versionId, fromLineNumber, _toLineNumber, lineBreaks) {
        if (!versionId || versionId <= this._validModelVersionId) {
            // Here we check for versionId in case the lines were reconstructed in the meantime.
            // We don't want to apply stale change events on top of a newer read model state.
            return null;
        }
        // cannot use this.getHiddenAreas() because those decorations have already seen the effect of this model change
        const isInHiddenArea = (fromLineNumber > 2 && !this.modelLineProjections[fromLineNumber - 2].isVisible());
        const outputFromLineNumber = (fromLineNumber === 1 ? 1 : this.projectedModelLineLineCounts.getPrefixSum(fromLineNumber - 1) + 1);
        let totalOutputLineCount = 0;
        const insertLines = [];
        const insertPrefixSumValues = [];
        for (let i = 0, len = lineBreaks.length; i < len; i++) {
            const line = createModelLineProjection(lineBreaks[i], !isInHiddenArea);
            insertLines.push(line);
            const outputLineCount = line.getViewLineCount();
            totalOutputLineCount += outputLineCount;
            insertPrefixSumValues[i] = outputLineCount;
        }
        // TODO@Alex: use arrays.arrayInsert
        this.modelLineProjections =
            this.modelLineProjections.slice(0, fromLineNumber - 1)
                .concat(insertLines)
                .concat(this.modelLineProjections.slice(fromLineNumber - 1));
        this.projectedModelLineLineCounts.insertValues(fromLineNumber - 1, insertPrefixSumValues);
        return new viewEvents/* ViewLinesInsertedEvent */.K9(outputFromLineNumber, outputFromLineNumber + totalOutputLineCount - 1);
    }
    onModelLineChanged(versionId, lineNumber, lineBreakData) {
        if (versionId !== null && versionId <= this._validModelVersionId) {
            // Here we check for versionId in case the lines were reconstructed in the meantime.
            // We don't want to apply stale change events on top of a newer read model state.
            return [false, null, null, null];
        }
        const lineIndex = lineNumber - 1;
        const oldOutputLineCount = this.modelLineProjections[lineIndex].getViewLineCount();
        const isVisible = this.modelLineProjections[lineIndex].isVisible();
        const line = createModelLineProjection(lineBreakData, isVisible);
        this.modelLineProjections[lineIndex] = line;
        const newOutputLineCount = this.modelLineProjections[lineIndex].getViewLineCount();
        let lineMappingChanged = false;
        let changeFrom = 0;
        let changeTo = -1;
        let insertFrom = 0;
        let insertTo = -1;
        let deleteFrom = 0;
        let deleteTo = -1;
        if (oldOutputLineCount > newOutputLineCount) {
            changeFrom = this.projectedModelLineLineCounts.getPrefixSum(lineNumber - 1) + 1;
            changeTo = changeFrom + newOutputLineCount - 1;
            deleteFrom = changeTo + 1;
            deleteTo = deleteFrom + (oldOutputLineCount - newOutputLineCount) - 1;
            lineMappingChanged = true;
        }
        else if (oldOutputLineCount < newOutputLineCount) {
            changeFrom = this.projectedModelLineLineCounts.getPrefixSum(lineNumber - 1) + 1;
            changeTo = changeFrom + oldOutputLineCount - 1;
            insertFrom = changeTo + 1;
            insertTo = insertFrom + (newOutputLineCount - oldOutputLineCount) - 1;
            lineMappingChanged = true;
        }
        else {
            changeFrom = this.projectedModelLineLineCounts.getPrefixSum(lineNumber - 1) + 1;
            changeTo = changeFrom + newOutputLineCount - 1;
        }
        this.projectedModelLineLineCounts.setValue(lineIndex, newOutputLineCount);
        const viewLinesChangedEvent = (changeFrom <= changeTo ? new viewEvents/* ViewLinesChangedEvent */.il(changeFrom, changeTo - changeFrom + 1) : null);
        const viewLinesInsertedEvent = (insertFrom <= insertTo ? new viewEvents/* ViewLinesInsertedEvent */.K9(insertFrom, insertTo) : null);
        const viewLinesDeletedEvent = (deleteFrom <= deleteTo ? new viewEvents/* ViewLinesDeletedEvent */.vk(deleteFrom, deleteTo) : null);
        return [lineMappingChanged, viewLinesChangedEvent, viewLinesInsertedEvent, viewLinesDeletedEvent];
    }
    acceptVersionId(versionId) {
        this._validModelVersionId = versionId;
        if (this.modelLineProjections.length === 1 && !this.modelLineProjections[0].isVisible()) {
            // At least one line must be visible => reset hidden areas
            this.setHiddenAreas([]);
        }
    }
    getViewLineCount() {
        return this.projectedModelLineLineCounts.getTotalSum();
    }
    _toValidViewLineNumber(viewLineNumber) {
        if (viewLineNumber < 1) {
            return 1;
        }
        const viewLineCount = this.getViewLineCount();
        if (viewLineNumber > viewLineCount) {
            return viewLineCount;
        }
        return viewLineNumber | 0;
    }
    getActiveIndentGuide(viewLineNumber, minLineNumber, maxLineNumber) {
        viewLineNumber = this._toValidViewLineNumber(viewLineNumber);
        minLineNumber = this._toValidViewLineNumber(minLineNumber);
        maxLineNumber = this._toValidViewLineNumber(maxLineNumber);
        const modelPosition = this.convertViewPositionToModelPosition(viewLineNumber, this.getViewLineMinColumn(viewLineNumber));
        const modelMinPosition = this.convertViewPositionToModelPosition(minLineNumber, this.getViewLineMinColumn(minLineNumber));
        const modelMaxPosition = this.convertViewPositionToModelPosition(maxLineNumber, this.getViewLineMinColumn(maxLineNumber));
        const result = this.model.guides.getActiveIndentGuide(modelPosition.lineNumber, modelMinPosition.lineNumber, modelMaxPosition.lineNumber);
        const viewStartPosition = this.convertModelPositionToViewPosition(result.startLineNumber, 1);
        const viewEndPosition = this.convertModelPositionToViewPosition(result.endLineNumber, this.model.getLineMaxColumn(result.endLineNumber));
        return {
            startLineNumber: viewStartPosition.lineNumber,
            endLineNumber: viewEndPosition.lineNumber,
            indent: result.indent
        };
    }
    // #region ViewLineInfo
    getViewLineInfo(viewLineNumber) {
        viewLineNumber = this._toValidViewLineNumber(viewLineNumber);
        const r = this.projectedModelLineLineCounts.getIndexOf(viewLineNumber - 1);
        const lineIndex = r.index;
        const remainder = r.remainder;
        return new ViewLineInfo(lineIndex + 1, remainder);
    }
    getMinColumnOfViewLine(viewLineInfo) {
        return this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewLineMinColumn(this.model, viewLineInfo.modelLineNumber, viewLineInfo.modelLineWrappedLineIdx);
    }
    getMaxColumnOfViewLine(viewLineInfo) {
        return this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewLineMaxColumn(this.model, viewLineInfo.modelLineNumber, viewLineInfo.modelLineWrappedLineIdx);
    }
    getModelStartPositionOfViewLine(viewLineInfo) {
        const line = this.modelLineProjections[viewLineInfo.modelLineNumber - 1];
        const minViewColumn = line.getViewLineMinColumn(this.model, viewLineInfo.modelLineNumber, viewLineInfo.modelLineWrappedLineIdx);
        const column = line.getModelColumnOfViewPosition(viewLineInfo.modelLineWrappedLineIdx, minViewColumn);
        return new core_position/* Position */.L(viewLineInfo.modelLineNumber, column);
    }
    getModelEndPositionOfViewLine(viewLineInfo) {
        const line = this.modelLineProjections[viewLineInfo.modelLineNumber - 1];
        const maxViewColumn = line.getViewLineMaxColumn(this.model, viewLineInfo.modelLineNumber, viewLineInfo.modelLineWrappedLineIdx);
        const column = line.getModelColumnOfViewPosition(viewLineInfo.modelLineWrappedLineIdx, maxViewColumn);
        return new core_position/* Position */.L(viewLineInfo.modelLineNumber, column);
    }
    getViewLineInfosGroupedByModelRanges(viewStartLineNumber, viewEndLineNumber) {
        const startViewLine = this.getViewLineInfo(viewStartLineNumber);
        const endViewLine = this.getViewLineInfo(viewEndLineNumber);
        const result = new Array();
        let lastVisibleModelPos = this.getModelStartPositionOfViewLine(startViewLine);
        let viewLines = new Array();
        for (let curModelLine = startViewLine.modelLineNumber; curModelLine <= endViewLine.modelLineNumber; curModelLine++) {
            const line = this.modelLineProjections[curModelLine - 1];
            if (line.isVisible()) {
                const startOffset = curModelLine === startViewLine.modelLineNumber
                    ? startViewLine.modelLineWrappedLineIdx
                    : 0;
                const endOffset = curModelLine === endViewLine.modelLineNumber
                    ? endViewLine.modelLineWrappedLineIdx + 1
                    : line.getViewLineCount();
                for (let i = startOffset; i < endOffset; i++) {
                    viewLines.push(new ViewLineInfo(curModelLine, i));
                }
            }
            if (!line.isVisible() && lastVisibleModelPos) {
                const lastVisibleModelPos2 = new core_position/* Position */.L(curModelLine - 1, this.model.getLineMaxColumn(curModelLine - 1) + 1);
                const modelRange = core_range/* Range */.e.fromPositions(lastVisibleModelPos, lastVisibleModelPos2);
                result.push(new ViewLineInfoGroupedByModelRange(modelRange, viewLines));
                viewLines = [];
                lastVisibleModelPos = null;
            }
            else if (line.isVisible() && !lastVisibleModelPos) {
                lastVisibleModelPos = new core_position/* Position */.L(curModelLine, 1);
            }
        }
        if (lastVisibleModelPos) {
            const modelRange = core_range/* Range */.e.fromPositions(lastVisibleModelPos, this.getModelEndPositionOfViewLine(endViewLine));
            result.push(new ViewLineInfoGroupedByModelRange(modelRange, viewLines));
        }
        return result;
    }
    // #endregion
    getViewLinesBracketGuides(viewStartLineNumber, viewEndLineNumber, activeViewPosition, options) {
        const modelActivePosition = activeViewPosition ? this.convertViewPositionToModelPosition(activeViewPosition.lineNumber, activeViewPosition.column) : null;
        const resultPerViewLine = [];
        for (const group of this.getViewLineInfosGroupedByModelRanges(viewStartLineNumber, viewEndLineNumber)) {
            const modelRangeStartLineNumber = group.modelRange.startLineNumber;
            const bracketGuidesPerModelLine = this.model.guides.getLinesBracketGuides(modelRangeStartLineNumber, group.modelRange.endLineNumber, modelActivePosition, options);
            for (const viewLineInfo of group.viewLines) {
                const bracketGuides = bracketGuidesPerModelLine[viewLineInfo.modelLineNumber - modelRangeStartLineNumber];
                // visibleColumns stay as they are (this is a bug and needs to be fixed, but it is not a regression)
                // model-columns must be converted to view-model columns.
                const result = bracketGuides.map(g => {
                    if (g.forWrappedLinesAfterColumn !== -1) {
                        const p = this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewPositionOfModelPosition(0, g.forWrappedLinesAfterColumn);
                        if (p.lineNumber >= viewLineInfo.modelLineWrappedLineIdx) {
                            return undefined;
                        }
                    }
                    if (g.forWrappedLinesBeforeOrAtColumn !== -1) {
                        const p = this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewPositionOfModelPosition(0, g.forWrappedLinesBeforeOrAtColumn);
                        if (p.lineNumber < viewLineInfo.modelLineWrappedLineIdx) {
                            return undefined;
                        }
                    }
                    if (!g.horizontalLine) {
                        return g;
                    }
                    let column = -1;
                    if (g.column !== -1) {
                        const p = this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewPositionOfModelPosition(0, g.column);
                        if (p.lineNumber === viewLineInfo.modelLineWrappedLineIdx) {
                            column = p.column;
                        }
                        else if (p.lineNumber < viewLineInfo.modelLineWrappedLineIdx) {
                            column = this.getMinColumnOfViewLine(viewLineInfo);
                        }
                        else if (p.lineNumber > viewLineInfo.modelLineWrappedLineIdx) {
                            return undefined;
                        }
                    }
                    const viewPosition = this.convertModelPositionToViewPosition(viewLineInfo.modelLineNumber, g.horizontalLine.endColumn);
                    const p = this.modelLineProjections[viewLineInfo.modelLineNumber - 1].getViewPositionOfModelPosition(0, g.horizontalLine.endColumn);
                    if (p.lineNumber === viewLineInfo.modelLineWrappedLineIdx) {
                        return new textModelGuides/* IndentGuide */.UO(g.visibleColumn, column, g.className, new textModelGuides/* IndentGuideHorizontalLine */.vW(g.horizontalLine.top, viewPosition.column), -1, -1);
                    }
                    else if (p.lineNumber < viewLineInfo.modelLineWrappedLineIdx) {
                        return undefined;
                    }
                    else {
                        if (g.visibleColumn !== -1) {
                            // Don't repeat horizontal lines that use visibleColumn for unrelated lines.
                            return undefined;
                        }
                        return new textModelGuides/* IndentGuide */.UO(g.visibleColumn, column, g.className, new textModelGuides/* IndentGuideHorizontalLine */.vW(g.horizontalLine.top, this.getMaxColumnOfViewLine(viewLineInfo)), -1, -1);
                    }
                });
                resultPerViewLine.push(result.filter((r) => !!r));
            }
        }
        return resultPerViewLine;
    }
    getViewLinesIndentGuides(viewStartLineNumber, viewEndLineNumber) {
        // TODO: Use the same code as in `getViewLinesBracketGuides`.
        // Future TODO: Merge with `getViewLinesBracketGuides`.
        // However, this requires more refactoring of indent guides.
        viewStartLineNumber = this._toValidViewLineNumber(viewStartLineNumber);
        viewEndLineNumber = this._toValidViewLineNumber(viewEndLineNumber);
        const modelStart = this.convertViewPositionToModelPosition(viewStartLineNumber, this.getViewLineMinColumn(viewStartLineNumber));
        const modelEnd = this.convertViewPositionToModelPosition(viewEndLineNumber, this.getViewLineMaxColumn(viewEndLineNumber));
        let result = [];
        const resultRepeatCount = [];
        const resultRepeatOption = [];
        const modelStartLineIndex = modelStart.lineNumber - 1;
        const modelEndLineIndex = modelEnd.lineNumber - 1;
        let reqStart = null;
        for (let modelLineIndex = modelStartLineIndex; modelLineIndex <= modelEndLineIndex; modelLineIndex++) {
            const line = this.modelLineProjections[modelLineIndex];
            if (line.isVisible()) {
                const viewLineStartIndex = line.getViewLineNumberOfModelPosition(0, modelLineIndex === modelStartLineIndex ? modelStart.column : 1);
                const viewLineEndIndex = line.getViewLineNumberOfModelPosition(0, this.model.getLineMaxColumn(modelLineIndex + 1));
                const count = viewLineEndIndex - viewLineStartIndex + 1;
                let option = 0 /* IndentGuideRepeatOption.BlockNone */;
                if (count > 1 && line.getViewLineMinColumn(this.model, modelLineIndex + 1, viewLineEndIndex) === 1) {
                    // wrapped lines should block indent guides
                    option = (viewLineStartIndex === 0 ? 1 /* IndentGuideRepeatOption.BlockSubsequent */ : 2 /* IndentGuideRepeatOption.BlockAll */);
                }
                resultRepeatCount.push(count);
                resultRepeatOption.push(option);
                // merge into previous request
                if (reqStart === null) {
                    reqStart = new core_position/* Position */.L(modelLineIndex + 1, 0);
                }
            }
            else {
                // hit invisible line => flush request
                if (reqStart !== null) {
                    result = result.concat(this.model.guides.getLinesIndentGuides(reqStart.lineNumber, modelLineIndex));
                    reqStart = null;
                }
            }
        }
        if (reqStart !== null) {
            result = result.concat(this.model.guides.getLinesIndentGuides(reqStart.lineNumber, modelEnd.lineNumber));
            reqStart = null;
        }
        const viewLineCount = viewEndLineNumber - viewStartLineNumber + 1;
        const viewIndents = new Array(viewLineCount);
        let currIndex = 0;
        for (let i = 0, len = result.length; i < len; i++) {
            let value = result[i];
            const count = Math.min(viewLineCount - currIndex, resultRepeatCount[i]);
            const option = resultRepeatOption[i];
            let blockAtIndex;
            if (option === 2 /* IndentGuideRepeatOption.BlockAll */) {
                blockAtIndex = 0;
            }
            else if (option === 1 /* IndentGuideRepeatOption.BlockSubsequent */) {
                blockAtIndex = 1;
            }
            else {
                blockAtIndex = count;
            }
            for (let j = 0; j < count; j++) {
                if (j === blockAtIndex) {
                    value = 0;
                }
                viewIndents[currIndex++] = value;
            }
        }
        return viewIndents;
    }
    getViewLineContent(viewLineNumber) {
        const info = this.getViewLineInfo(viewLineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getViewLineContent(this.model, info.modelLineNumber, info.modelLineWrappedLineIdx);
    }
    getViewLineLength(viewLineNumber) {
        const info = this.getViewLineInfo(viewLineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getViewLineLength(this.model, info.modelLineNumber, info.modelLineWrappedLineIdx);
    }
    getViewLineMinColumn(viewLineNumber) {
        const info = this.getViewLineInfo(viewLineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getViewLineMinColumn(this.model, info.modelLineNumber, info.modelLineWrappedLineIdx);
    }
    getViewLineMaxColumn(viewLineNumber) {
        const info = this.getViewLineInfo(viewLineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getViewLineMaxColumn(this.model, info.modelLineNumber, info.modelLineWrappedLineIdx);
    }
    getViewLineData(viewLineNumber) {
        const info = this.getViewLineInfo(viewLineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getViewLineData(this.model, info.modelLineNumber, info.modelLineWrappedLineIdx);
    }
    getViewLinesData(viewStartLineNumber, viewEndLineNumber, needed) {
        viewStartLineNumber = this._toValidViewLineNumber(viewStartLineNumber);
        viewEndLineNumber = this._toValidViewLineNumber(viewEndLineNumber);
        const start = this.projectedModelLineLineCounts.getIndexOf(viewStartLineNumber - 1);
        let viewLineNumber = viewStartLineNumber;
        const startModelLineIndex = start.index;
        const startRemainder = start.remainder;
        const result = [];
        for (let modelLineIndex = startModelLineIndex, len = this.model.getLineCount(); modelLineIndex < len; modelLineIndex++) {
            const line = this.modelLineProjections[modelLineIndex];
            if (!line.isVisible()) {
                continue;
            }
            const fromViewLineIndex = (modelLineIndex === startModelLineIndex ? startRemainder : 0);
            let remainingViewLineCount = line.getViewLineCount() - fromViewLineIndex;
            let lastLine = false;
            if (viewLineNumber + remainingViewLineCount > viewEndLineNumber) {
                lastLine = true;
                remainingViewLineCount = viewEndLineNumber - viewLineNumber + 1;
            }
            line.getViewLinesData(this.model, modelLineIndex + 1, fromViewLineIndex, remainingViewLineCount, viewLineNumber - viewStartLineNumber, needed, result);
            viewLineNumber += remainingViewLineCount;
            if (lastLine) {
                break;
            }
        }
        return result;
    }
    validateViewPosition(viewLineNumber, viewColumn, expectedModelPosition) {
        viewLineNumber = this._toValidViewLineNumber(viewLineNumber);
        const r = this.projectedModelLineLineCounts.getIndexOf(viewLineNumber - 1);
        const lineIndex = r.index;
        const remainder = r.remainder;
        const line = this.modelLineProjections[lineIndex];
        const minColumn = line.getViewLineMinColumn(this.model, lineIndex + 1, remainder);
        const maxColumn = line.getViewLineMaxColumn(this.model, lineIndex + 1, remainder);
        if (viewColumn < minColumn) {
            viewColumn = minColumn;
        }
        if (viewColumn > maxColumn) {
            viewColumn = maxColumn;
        }
        const computedModelColumn = line.getModelColumnOfViewPosition(remainder, viewColumn);
        const computedModelPosition = this.model.validatePosition(new core_position/* Position */.L(lineIndex + 1, computedModelColumn));
        if (computedModelPosition.equals(expectedModelPosition)) {
            return new core_position/* Position */.L(viewLineNumber, viewColumn);
        }
        return this.convertModelPositionToViewPosition(expectedModelPosition.lineNumber, expectedModelPosition.column);
    }
    validateViewRange(viewRange, expectedModelRange) {
        const validViewStart = this.validateViewPosition(viewRange.startLineNumber, viewRange.startColumn, expectedModelRange.getStartPosition());
        const validViewEnd = this.validateViewPosition(viewRange.endLineNumber, viewRange.endColumn, expectedModelRange.getEndPosition());
        return new core_range/* Range */.e(validViewStart.lineNumber, validViewStart.column, validViewEnd.lineNumber, validViewEnd.column);
    }
    convertViewPositionToModelPosition(viewLineNumber, viewColumn) {
        const info = this.getViewLineInfo(viewLineNumber);
        const inputColumn = this.modelLineProjections[info.modelLineNumber - 1].getModelColumnOfViewPosition(info.modelLineWrappedLineIdx, viewColumn);
        // console.log('out -> in ' + viewLineNumber + ',' + viewColumn + ' ===> ' + (lineIndex+1) + ',' + inputColumn);
        return this.model.validatePosition(new core_position/* Position */.L(info.modelLineNumber, inputColumn));
    }
    convertViewRangeToModelRange(viewRange) {
        const start = this.convertViewPositionToModelPosition(viewRange.startLineNumber, viewRange.startColumn);
        const end = this.convertViewPositionToModelPosition(viewRange.endLineNumber, viewRange.endColumn);
        return new core_range/* Range */.e(start.lineNumber, start.column, end.lineNumber, end.column);
    }
    convertModelPositionToViewPosition(_modelLineNumber, _modelColumn, affinity = 2 /* PositionAffinity.None */, allowZeroLineNumber = false, belowHiddenRanges = false) {
        const validPosition = this.model.validatePosition(new core_position/* Position */.L(_modelLineNumber, _modelColumn));
        const inputLineNumber = validPosition.lineNumber;
        const inputColumn = validPosition.column;
        let lineIndex = inputLineNumber - 1, lineIndexChanged = false;
        if (belowHiddenRanges) {
            while (lineIndex < this.modelLineProjections.length && !this.modelLineProjections[lineIndex].isVisible()) {
                lineIndex++;
                lineIndexChanged = true;
            }
        }
        else {
            while (lineIndex > 0 && !this.modelLineProjections[lineIndex].isVisible()) {
                lineIndex--;
                lineIndexChanged = true;
            }
        }
        if (lineIndex === 0 && !this.modelLineProjections[lineIndex].isVisible()) {
            // Could not reach a real line
            // console.log('in -> out ' + inputLineNumber + ',' + inputColumn + ' ===> ' + 1 + ',' + 1);
            // TODO@alexdima@hediet this isn't soo pretty
            return new core_position/* Position */.L(allowZeroLineNumber ? 0 : 1, 1);
        }
        const deltaLineNumber = 1 + this.projectedModelLineLineCounts.getPrefixSum(lineIndex);
        let r;
        if (lineIndexChanged) {
            if (belowHiddenRanges) {
                r = this.modelLineProjections[lineIndex].getViewPositionOfModelPosition(deltaLineNumber, 1, affinity);
            }
            else {
                r = this.modelLineProjections[lineIndex].getViewPositionOfModelPosition(deltaLineNumber, this.model.getLineMaxColumn(lineIndex + 1), affinity);
            }
        }
        else {
            r = this.modelLineProjections[inputLineNumber - 1].getViewPositionOfModelPosition(deltaLineNumber, inputColumn, affinity);
        }
        // console.log('in -> out ' + inputLineNumber + ',' + inputColumn + ' ===> ' + r.lineNumber + ',' + r);
        return r;
    }
    /**
     * @param affinity The affinity in case of an empty range. Has no effect for non-empty ranges.
    */
    convertModelRangeToViewRange(modelRange, affinity = 0 /* PositionAffinity.Left */) {
        if (modelRange.isEmpty()) {
            const start = this.convertModelPositionToViewPosition(modelRange.startLineNumber, modelRange.startColumn, affinity);
            return core_range/* Range */.e.fromPositions(start);
        }
        else {
            const start = this.convertModelPositionToViewPosition(modelRange.startLineNumber, modelRange.startColumn, 1 /* PositionAffinity.Right */);
            const end = this.convertModelPositionToViewPosition(modelRange.endLineNumber, modelRange.endColumn, 0 /* PositionAffinity.Left */);
            return new core_range/* Range */.e(start.lineNumber, start.column, end.lineNumber, end.column);
        }
    }
    getViewLineNumberOfModelPosition(modelLineNumber, modelColumn) {
        let lineIndex = modelLineNumber - 1;
        if (this.modelLineProjections[lineIndex].isVisible()) {
            // this model line is visible
            const deltaLineNumber = 1 + this.projectedModelLineLineCounts.getPrefixSum(lineIndex);
            return this.modelLineProjections[lineIndex].getViewLineNumberOfModelPosition(deltaLineNumber, modelColumn);
        }
        // this model line is not visible
        while (lineIndex > 0 && !this.modelLineProjections[lineIndex].isVisible()) {
            lineIndex--;
        }
        if (lineIndex === 0 && !this.modelLineProjections[lineIndex].isVisible()) {
            // Could not reach a real line
            return 1;
        }
        const deltaLineNumber = 1 + this.projectedModelLineLineCounts.getPrefixSum(lineIndex);
        return this.modelLineProjections[lineIndex].getViewLineNumberOfModelPosition(deltaLineNumber, this.model.getLineMaxColumn(lineIndex + 1));
    }
    getDecorationsInRange(range, ownerId, filterOutValidation, onlyMinimapDecorations, onlyMarginDecorations) {
        const modelStart = this.convertViewPositionToModelPosition(range.startLineNumber, range.startColumn);
        const modelEnd = this.convertViewPositionToModelPosition(range.endLineNumber, range.endColumn);
        if (modelEnd.lineNumber - modelStart.lineNumber <= range.endLineNumber - range.startLineNumber) {
            // most likely there are no hidden lines => fast path
            // fetch decorations from column 1 to cover the case of wrapped lines that have whole line decorations at column 1
            return this.model.getDecorationsInRange(new core_range/* Range */.e(modelStart.lineNumber, 1, modelEnd.lineNumber, modelEnd.column), ownerId, filterOutValidation, onlyMinimapDecorations, onlyMarginDecorations);
        }
        let result = [];
        const modelStartLineIndex = modelStart.lineNumber - 1;
        const modelEndLineIndex = modelEnd.lineNumber - 1;
        let reqStart = null;
        for (let modelLineIndex = modelStartLineIndex; modelLineIndex <= modelEndLineIndex; modelLineIndex++) {
            const line = this.modelLineProjections[modelLineIndex];
            if (line.isVisible()) {
                // merge into previous request
                if (reqStart === null) {
                    reqStart = new core_position/* Position */.L(modelLineIndex + 1, modelLineIndex === modelStartLineIndex ? modelStart.column : 1);
                }
            }
            else {
                // hit invisible line => flush request
                if (reqStart !== null) {
                    const maxLineColumn = this.model.getLineMaxColumn(modelLineIndex);
                    result = result.concat(this.model.getDecorationsInRange(new core_range/* Range */.e(reqStart.lineNumber, reqStart.column, modelLineIndex, maxLineColumn), ownerId, filterOutValidation, onlyMinimapDecorations));
                    reqStart = null;
                }
            }
        }
        if (reqStart !== null) {
            result = result.concat(this.model.getDecorationsInRange(new core_range/* Range */.e(reqStart.lineNumber, reqStart.column, modelEnd.lineNumber, modelEnd.column), ownerId, filterOutValidation, onlyMinimapDecorations));
            reqStart = null;
        }
        result.sort((a, b) => {
            const res = core_range/* Range */.e.compareRangesUsingStarts(a.range, b.range);
            if (res === 0) {
                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            }
            return res;
        });
        // Eliminate duplicate decorations that might have intersected our visible ranges multiple times
        const finalResult = [];
        let finalResultLen = 0;
        let prevDecId = null;
        for (const dec of result) {
            const decId = dec.id;
            if (prevDecId === decId) {
                // skip
                continue;
            }
            prevDecId = decId;
            finalResult[finalResultLen++] = dec;
        }
        return finalResult;
    }
    getInjectedTextAt(position) {
        const info = this.getViewLineInfo(position.lineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].getInjectedTextAt(info.modelLineWrappedLineIdx, position.column);
    }
    normalizePosition(position, affinity) {
        const info = this.getViewLineInfo(position.lineNumber);
        return this.modelLineProjections[info.modelLineNumber - 1].normalizePosition(info.modelLineWrappedLineIdx, position, affinity);
    }
    getLineIndentColumn(lineNumber) {
        const info = this.getViewLineInfo(lineNumber);
        if (info.modelLineWrappedLineIdx === 0) {
            return this.model.getLineIndentColumn(info.modelLineNumber);
        }
        // wrapped lines have no indentation.
        // We deliberately don't handle the case that indentation is wrapped
        // to avoid two view lines reporting indentation for the very same model line.
        return 0;
    }
}
/**
 * Overlapping unsorted ranges:
 * [   )      [ )       [  )
 *    [    )      [       )
 * ->
 * Non overlapping sorted ranges:
 * [       )  [ ) [        )
 *
 * Note: This function only considers line information! Columns are ignored.
*/
function normalizeLineRanges(ranges) {
    if (ranges.length === 0) {
        return [];
    }
    const sortedRanges = ranges.slice();
    sortedRanges.sort(core_range/* Range */.e.compareRangesUsingStarts);
    const result = [];
    let currentRangeStart = sortedRanges[0].startLineNumber;
    let currentRangeEnd = sortedRanges[0].endLineNumber;
    for (let i = 1, len = sortedRanges.length; i < len; i++) {
        const range = sortedRanges[i];
        if (range.startLineNumber > currentRangeEnd + 1) {
            result.push(new core_range/* Range */.e(currentRangeStart, 1, currentRangeEnd, 1));
            currentRangeStart = range.startLineNumber;
            currentRangeEnd = range.endLineNumber;
        }
        else if (range.endLineNumber > currentRangeEnd) {
            currentRangeEnd = range.endLineNumber;
        }
    }
    result.push(new core_range/* Range */.e(currentRangeStart, 1, currentRangeEnd, 1));
    return result;
}
/**
 * Represents a view line. Can be used to efficiently query more information about it.
 */
class ViewLineInfo {
    constructor(modelLineNumber, modelLineWrappedLineIdx) {
        this.modelLineNumber = modelLineNumber;
        this.modelLineWrappedLineIdx = modelLineWrappedLineIdx;
    }
}
/**
 * A list of view lines that have a contiguous span in the model.
*/
class ViewLineInfoGroupedByModelRange {
    constructor(modelRange, viewLines) {
        this.modelRange = modelRange;
        this.viewLines = viewLines;
    }
}
class CoordinatesConverter {
    constructor(lines) {
        this._lines = lines;
    }
    // View -> Model conversion and related methods
    convertViewPositionToModelPosition(viewPosition) {
        return this._lines.convertViewPositionToModelPosition(viewPosition.lineNumber, viewPosition.column);
    }
    convertViewRangeToModelRange(viewRange) {
        return this._lines.convertViewRangeToModelRange(viewRange);
    }
    validateViewPosition(viewPosition, expectedModelPosition) {
        return this._lines.validateViewPosition(viewPosition.lineNumber, viewPosition.column, expectedModelPosition);
    }
    validateViewRange(viewRange, expectedModelRange) {
        return this._lines.validateViewRange(viewRange, expectedModelRange);
    }
    // Model -> View conversion and related methods
    convertModelPositionToViewPosition(modelPosition, affinity, allowZero, belowHiddenRanges) {
        return this._lines.convertModelPositionToViewPosition(modelPosition.lineNumber, modelPosition.column, affinity, allowZero, belowHiddenRanges);
    }
    convertModelRangeToViewRange(modelRange, affinity) {
        return this._lines.convertModelRangeToViewRange(modelRange, affinity);
    }
    modelPositionIsVisible(modelPosition) {
        return this._lines.modelPositionIsVisible(modelPosition.lineNumber, modelPosition.column);
    }
    getModelLineViewLineCount(modelLineNumber) {
        return this._lines.getModelLineViewLineCount(modelLineNumber);
    }
    getViewLineNumberOfModelPosition(modelLineNumber, modelColumn) {
        return this._lines.getViewLineNumberOfModelPosition(modelLineNumber, modelColumn);
    }
}
class ViewModelLinesFromModelAsIs {
    constructor(model) {
        this.model = model;
    }
    dispose() {
    }
    createCoordinatesConverter() {
        return new IdentityCoordinatesConverter(this);
    }
    getHiddenAreas() {
        return [];
    }
    setHiddenAreas(_ranges) {
        return false;
    }
    setTabSize(_newTabSize) {
        return false;
    }
    setWrappingSettings(_fontInfo, _wrappingStrategy, _wrappingColumn, _wrappingIndent) {
        return false;
    }
    createLineBreaksComputer() {
        const result = [];
        return {
            addRequest: (lineText, injectedText, previousLineBreakData) => {
                result.push(null);
            },
            finalize: () => {
                return result;
            }
        };
    }
    onModelFlushed() {
    }
    onModelLinesDeleted(_versionId, fromLineNumber, toLineNumber) {
        return new viewEvents/* ViewLinesDeletedEvent */.vk(fromLineNumber, toLineNumber);
    }
    onModelLinesInserted(_versionId, fromLineNumber, toLineNumber, lineBreaks) {
        return new viewEvents/* ViewLinesInsertedEvent */.K9(fromLineNumber, toLineNumber);
    }
    onModelLineChanged(_versionId, lineNumber, lineBreakData) {
        return [false, new viewEvents/* ViewLinesChangedEvent */.il(lineNumber, 1), null, null];
    }
    acceptVersionId(_versionId) {
    }
    getViewLineCount() {
        return this.model.getLineCount();
    }
    getActiveIndentGuide(viewLineNumber, _minLineNumber, _maxLineNumber) {
        return {
            startLineNumber: viewLineNumber,
            endLineNumber: viewLineNumber,
            indent: 0
        };
    }
    getViewLinesBracketGuides(startLineNumber, endLineNumber, activePosition) {
        return new Array(endLineNumber - startLineNumber + 1).fill([]);
    }
    getViewLinesIndentGuides(viewStartLineNumber, viewEndLineNumber) {
        const viewLineCount = viewEndLineNumber - viewStartLineNumber + 1;
        const result = new Array(viewLineCount);
        for (let i = 0; i < viewLineCount; i++) {
            result[i] = 0;
        }
        return result;
    }
    getViewLineContent(viewLineNumber) {
        return this.model.getLineContent(viewLineNumber);
    }
    getViewLineLength(viewLineNumber) {
        return this.model.getLineLength(viewLineNumber);
    }
    getViewLineMinColumn(viewLineNumber) {
        return this.model.getLineMinColumn(viewLineNumber);
    }
    getViewLineMaxColumn(viewLineNumber) {
        return this.model.getLineMaxColumn(viewLineNumber);
    }
    getViewLineData(viewLineNumber) {
        const lineTokens = this.model.tokenization.getLineTokens(viewLineNumber);
        const lineContent = lineTokens.getLineContent();
        return new viewModel/* ViewLineData */.IP(lineContent, false, 1, lineContent.length + 1, 0, lineTokens.inflate(), null);
    }
    getViewLinesData(viewStartLineNumber, viewEndLineNumber, needed) {
        const lineCount = this.model.getLineCount();
        viewStartLineNumber = Math.min(Math.max(1, viewStartLineNumber), lineCount);
        viewEndLineNumber = Math.min(Math.max(1, viewEndLineNumber), lineCount);
        const result = [];
        for (let lineNumber = viewStartLineNumber; lineNumber <= viewEndLineNumber; lineNumber++) {
            const idx = lineNumber - viewStartLineNumber;
            result[idx] = needed[idx] ? this.getViewLineData(lineNumber) : null;
        }
        return result;
    }
    getDecorationsInRange(range, ownerId, filterOutValidation, onlyMinimapDecorations, onlyMarginDecorations) {
        return this.model.getDecorationsInRange(range, ownerId, filterOutValidation, onlyMinimapDecorations, onlyMarginDecorations);
    }
    normalizePosition(position, affinity) {
        return this.model.normalizePosition(position, affinity);
    }
    getLineIndentColumn(lineNumber) {
        return this.model.getLineIndentColumn(lineNumber);
    }
    getInjectedTextAt(position) {
        // Identity lines collection does not support injected text.
        return null;
    }
}
class IdentityCoordinatesConverter {
    constructor(lines) {
        this._lines = lines;
    }
    _validPosition(pos) {
        return this._lines.model.validatePosition(pos);
    }
    _validRange(range) {
        return this._lines.model.validateRange(range);
    }
    // View -> Model conversion and related methods
    convertViewPositionToModelPosition(viewPosition) {
        return this._validPosition(viewPosition);
    }
    convertViewRangeToModelRange(viewRange) {
        return this._validRange(viewRange);
    }
    validateViewPosition(_viewPosition, expectedModelPosition) {
        return this._validPosition(expectedModelPosition);
    }
    validateViewRange(_viewRange, expectedModelRange) {
        return this._validRange(expectedModelRange);
    }
    // Model -> View conversion and related methods
    convertModelPositionToViewPosition(modelPosition) {
        return this._validPosition(modelPosition);
    }
    convertModelRangeToViewRange(modelRange) {
        return this._validRange(modelRange);
    }
    modelPositionIsVisible(modelPosition) {
        const lineCount = this._lines.model.getLineCount();
        if (modelPosition.lineNumber < 1 || modelPosition.lineNumber > lineCount) {
            // invalid arguments
            return false;
        }
        return true;
    }
    getModelLineViewLineCount(modelLineNumber) {
        return 1;
    }
    getViewLineNumberOfModelPosition(modelLineNumber, modelColumn) {
        return modelLineNumber;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/viewModelImpl.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






















const USE_IDENTITY_LINES_COLLECTION = true;
class ViewModel extends lifecycle/* Disposable */.JT {
    constructor(editorId, configuration, model, domLineBreaksComputerFactory, monospaceLineBreaksComputerFactory, scheduleAtNextAnimationFrame, languageConfigurationService, _themeService, _attachedView) {
        super();
        this.languageConfigurationService = languageConfigurationService;
        this._themeService = _themeService;
        this._attachedView = _attachedView;
        this.hiddenAreasModel = new HiddenAreasModel();
        this.previousHiddenAreas = [];
        this._editorId = editorId;
        this._configuration = configuration;
        this.model = model;
        this._eventDispatcher = new viewModelEventDispatcher/* ViewModelEventDispatcher */.nu();
        this.onEvent = this._eventDispatcher.onEvent;
        this.cursorConfig = new cursorCommon/* CursorConfiguration */.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService);
        this._updateConfigurationViewLineCount = this._register(new common_async/* RunOnceScheduler */.pY(() => this._updateConfigurationViewLineCountNow(), 0));
        this._hasFocus = false;
        this._viewportStart = ViewportStart.create(this.model);
        if (USE_IDENTITY_LINES_COLLECTION && this.model.isTooLargeForTokenization()) {
            this._lines = new ViewModelLinesFromModelAsIs(this.model);
        }
        else {
            const options = this._configuration.options;
            const fontInfo = options.get(49 /* EditorOption.fontInfo */);
            const wrappingStrategy = options.get(136 /* EditorOption.wrappingStrategy */);
            const wrappingInfo = options.get(143 /* EditorOption.wrappingInfo */);
            const wrappingIndent = options.get(135 /* EditorOption.wrappingIndent */);
            const wordBreak = options.get(127 /* EditorOption.wordBreak */);
            this._lines = new ViewModelLinesFromProjectedModel(this._editorId, this.model, domLineBreaksComputerFactory, monospaceLineBreaksComputerFactory, fontInfo, this.model.getOptions().tabSize, wrappingStrategy, wrappingInfo.wrappingColumn, wrappingIndent, wordBreak);
        }
        this.coordinatesConverter = this._lines.createCoordinatesConverter();
        this._cursor = this._register(new cursor/* CursorsController */.U(model, this, this.coordinatesConverter, this.cursorConfig));
        this.viewLayout = this._register(new viewLayout/* ViewLayout */.L(this._configuration, this.getLineCount(), scheduleAtNextAnimationFrame));
        this._register(this.viewLayout.onDidScroll((e) => {
            if (e.scrollTopChanged) {
                this._handleVisibleLinesChanged();
            }
            if (e.scrollTopChanged) {
                this._viewportStart.invalidate();
            }
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewScrollChangedEvent */.Ay(e));
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ScrollChangedEvent */.Pt(e.oldScrollWidth, e.oldScrollLeft, e.oldScrollHeight, e.oldScrollTop, e.scrollWidth, e.scrollLeft, e.scrollHeight, e.scrollTop));
        }));
        this._register(this.viewLayout.onDidContentSizeChange((e) => {
            this._eventDispatcher.emitOutgoingEvent(e);
        }));
        this._decorations = new viewModelDecorations/* ViewModelDecorations */.CU(this._editorId, this.model, this._configuration, this._lines, this.coordinatesConverter);
        this._registerModelEvents();
        this._register(this._configuration.onDidChangeFast((e) => {
            try {
                const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
                this._onConfigurationChanged(eventsCollector, e);
            }
            finally {
                this._eventDispatcher.endEmitViewEvents();
            }
        }));
        this._register(minimapTokensColorTracker/* MinimapTokensColorTracker */.E.getInstance().onDidChange(() => {
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewTokensColorsChangedEvent */.uc());
        }));
        this._register(this._themeService.onDidColorThemeChange((theme) => {
            this._invalidateDecorationsColorCache();
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewThemeChangedEvent */.Hf(theme));
        }));
        this._updateConfigurationViewLineCountNow();
    }
    dispose() {
        // First remove listeners, as disposing the lines might end up sending
        // model decoration changed events ... and we no longer care about them ...
        super.dispose();
        this._decorations.dispose();
        this._lines.dispose();
        this._viewportStart.dispose();
        this._eventDispatcher.dispose();
    }
    createLineBreaksComputer() {
        return this._lines.createLineBreaksComputer();
    }
    addViewEventHandler(eventHandler) {
        this._eventDispatcher.addViewEventHandler(eventHandler);
    }
    removeViewEventHandler(eventHandler) {
        this._eventDispatcher.removeViewEventHandler(eventHandler);
    }
    _updateConfigurationViewLineCountNow() {
        this._configuration.setViewLineCount(this._lines.getViewLineCount());
    }
    getModelVisibleRanges() {
        const linesViewportData = this.viewLayout.getLinesViewportData();
        const viewVisibleRange = new core_range/* Range */.e(linesViewportData.startLineNumber, this.getLineMinColumn(linesViewportData.startLineNumber), linesViewportData.endLineNumber, this.getLineMaxColumn(linesViewportData.endLineNumber));
        const modelVisibleRanges = this._toModelVisibleRanges(viewVisibleRange);
        return modelVisibleRanges;
    }
    visibleLinesStabilized() {
        const modelVisibleRanges = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(modelVisibleRanges, true);
    }
    _handleVisibleLinesChanged() {
        const modelVisibleRanges = this.getModelVisibleRanges();
        this._attachedView.setVisibleLines(modelVisibleRanges, false);
    }
    setHasFocus(hasFocus) {
        this._hasFocus = hasFocus;
        this._cursor.setHasFocus(hasFocus);
        this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewFocusChangedEvent */.SJ(hasFocus));
        this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* FocusChangedEvent */.Zw(!hasFocus, hasFocus));
    }
    onCompositionStart() {
        this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewCompositionStartEvent */.JP());
    }
    onCompositionEnd() {
        this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewCompositionEndEvent */.IN());
    }
    _captureStableViewport() {
        // We might need to restore the current start view range, so save it (if available)
        // But only if the scroll position is not at the top of the file
        if (this._viewportStart.isValid && this.viewLayout.getCurrentScrollTop() > 0) {
            const previousViewportStartViewPosition = new core_position/* Position */.L(this._viewportStart.viewLineNumber, this.getLineMinColumn(this._viewportStart.viewLineNumber));
            const previousViewportStartModelPosition = this.coordinatesConverter.convertViewPositionToModelPosition(previousViewportStartViewPosition);
            return new StableViewport(previousViewportStartModelPosition, this._viewportStart.startLineDelta);
        }
        return new StableViewport(null, 0);
    }
    _onConfigurationChanged(eventsCollector, e) {
        const stableViewport = this._captureStableViewport();
        const options = this._configuration.options;
        const fontInfo = options.get(49 /* EditorOption.fontInfo */);
        const wrappingStrategy = options.get(136 /* EditorOption.wrappingStrategy */);
        const wrappingInfo = options.get(143 /* EditorOption.wrappingInfo */);
        const wrappingIndent = options.get(135 /* EditorOption.wrappingIndent */);
        const wordBreak = options.get(127 /* EditorOption.wordBreak */);
        if (this._lines.setWrappingSettings(fontInfo, wrappingStrategy, wrappingInfo.wrappingColumn, wrappingIndent, wordBreak)) {
            eventsCollector.emitViewEvent(new viewEvents/* ViewFlushedEvent */.CL());
            eventsCollector.emitViewEvent(new viewEvents/* ViewLineMappingChangedEvent */.d8());
            eventsCollector.emitViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(null));
            this._cursor.onLineMappingChanged(eventsCollector);
            this._decorations.onLineMappingChanged();
            this.viewLayout.onFlushed(this.getLineCount());
            this._updateConfigurationViewLineCount.schedule();
        }
        if (e.hasChanged(89 /* EditorOption.readOnly */)) {
            // Must read again all decorations due to readOnly filtering
            this._decorations.reset();
            eventsCollector.emitViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(null));
        }
        eventsCollector.emitViewEvent(new viewEvents/* ViewConfigurationChangedEvent */.x4(e));
        this.viewLayout.onConfigurationChanged(e);
        stableViewport.recoverViewportStart(this.coordinatesConverter, this.viewLayout);
        if (cursorCommon/* CursorConfiguration */.LM.shouldRecreate(e)) {
            this.cursorConfig = new cursorCommon/* CursorConfiguration */.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService);
            this._cursor.updateConfiguration(this.cursorConfig);
        }
    }
    _registerModelEvents() {
        this._register(this.model.onDidChangeContentOrInjectedText((e) => {
            try {
                const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
                let hadOtherModelChange = false;
                let hadModelLineChangeThatChangedLineMapping = false;
                const changes = (e instanceof textModelEvents/* InternalModelContentChangeEvent */.fV ? e.rawContentChangedEvent.changes : e.changes);
                const versionId = (e instanceof textModelEvents/* InternalModelContentChangeEvent */.fV ? e.rawContentChangedEvent.versionId : null);
                // Do a first pass to compute line mappings, and a second pass to actually interpret them
                const lineBreaksComputer = this._lines.createLineBreaksComputer();
                for (const change of changes) {
                    switch (change.changeType) {
                        case 4 /* textModelEvents.RawContentChangedType.LinesInserted */: {
                            for (let lineIdx = 0; lineIdx < change.detail.length; lineIdx++) {
                                const line = change.detail[lineIdx];
                                let injectedText = change.injectedTexts[lineIdx];
                                if (injectedText) {
                                    injectedText = injectedText.filter(element => (!element.ownerId || element.ownerId === this._editorId));
                                }
                                lineBreaksComputer.addRequest(line, injectedText, null);
                            }
                            break;
                        }
                        case 2 /* textModelEvents.RawContentChangedType.LineChanged */: {
                            let injectedText = null;
                            if (change.injectedText) {
                                injectedText = change.injectedText.filter(element => (!element.ownerId || element.ownerId === this._editorId));
                            }
                            lineBreaksComputer.addRequest(change.detail, injectedText, null);
                            break;
                        }
                    }
                }
                const lineBreaks = lineBreaksComputer.finalize();
                const lineBreakQueue = new arrays/* ArrayQueue */.H9(lineBreaks);
                for (const change of changes) {
                    switch (change.changeType) {
                        case 1 /* textModelEvents.RawContentChangedType.Flush */: {
                            this._lines.onModelFlushed();
                            eventsCollector.emitViewEvent(new viewEvents/* ViewFlushedEvent */.CL());
                            this._decorations.reset();
                            this.viewLayout.onFlushed(this.getLineCount());
                            hadOtherModelChange = true;
                            break;
                        }
                        case 3 /* textModelEvents.RawContentChangedType.LinesDeleted */: {
                            const linesDeletedEvent = this._lines.onModelLinesDeleted(versionId, change.fromLineNumber, change.toLineNumber);
                            if (linesDeletedEvent !== null) {
                                eventsCollector.emitViewEvent(linesDeletedEvent);
                                this.viewLayout.onLinesDeleted(linesDeletedEvent.fromLineNumber, linesDeletedEvent.toLineNumber);
                            }
                            hadOtherModelChange = true;
                            break;
                        }
                        case 4 /* textModelEvents.RawContentChangedType.LinesInserted */: {
                            const insertedLineBreaks = lineBreakQueue.takeCount(change.detail.length);
                            const linesInsertedEvent = this._lines.onModelLinesInserted(versionId, change.fromLineNumber, change.toLineNumber, insertedLineBreaks);
                            if (linesInsertedEvent !== null) {
                                eventsCollector.emitViewEvent(linesInsertedEvent);
                                this.viewLayout.onLinesInserted(linesInsertedEvent.fromLineNumber, linesInsertedEvent.toLineNumber);
                            }
                            hadOtherModelChange = true;
                            break;
                        }
                        case 2 /* textModelEvents.RawContentChangedType.LineChanged */: {
                            const changedLineBreakData = lineBreakQueue.dequeue();
                            const [lineMappingChanged, linesChangedEvent, linesInsertedEvent, linesDeletedEvent] = this._lines.onModelLineChanged(versionId, change.lineNumber, changedLineBreakData);
                            hadModelLineChangeThatChangedLineMapping = lineMappingChanged;
                            if (linesChangedEvent) {
                                eventsCollector.emitViewEvent(linesChangedEvent);
                            }
                            if (linesInsertedEvent) {
                                eventsCollector.emitViewEvent(linesInsertedEvent);
                                this.viewLayout.onLinesInserted(linesInsertedEvent.fromLineNumber, linesInsertedEvent.toLineNumber);
                            }
                            if (linesDeletedEvent) {
                                eventsCollector.emitViewEvent(linesDeletedEvent);
                                this.viewLayout.onLinesDeleted(linesDeletedEvent.fromLineNumber, linesDeletedEvent.toLineNumber);
                            }
                            break;
                        }
                        case 5 /* textModelEvents.RawContentChangedType.EOLChanged */: {
                            // Nothing to do. The new version will be accepted below
                            break;
                        }
                    }
                }
                if (versionId !== null) {
                    this._lines.acceptVersionId(versionId);
                }
                this.viewLayout.onHeightMaybeChanged();
                if (!hadOtherModelChange && hadModelLineChangeThatChangedLineMapping) {
                    eventsCollector.emitViewEvent(new viewEvents/* ViewLineMappingChangedEvent */.d8());
                    eventsCollector.emitViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(null));
                    this._cursor.onLineMappingChanged(eventsCollector);
                    this._decorations.onLineMappingChanged();
                }
            }
            finally {
                this._eventDispatcher.endEmitViewEvents();
            }
            // Update the configuration and reset the centered view line
            const viewportStartWasValid = this._viewportStart.isValid;
            this._viewportStart.invalidate();
            this._configuration.setModelLineCount(this.model.getLineCount());
            this._updateConfigurationViewLineCountNow();
            // Recover viewport
            if (!this._hasFocus && this.model.getAttachedEditorCount() >= 2 && viewportStartWasValid) {
                const modelRange = this.model._getTrackedRange(this._viewportStart.modelTrackedRange);
                if (modelRange) {
                    const viewPosition = this.coordinatesConverter.convertModelPositionToViewPosition(modelRange.getStartPosition());
                    const viewPositionTop = this.viewLayout.getVerticalOffsetForLineNumber(viewPosition.lineNumber);
                    this.viewLayout.setScrollPosition({ scrollTop: viewPositionTop + this._viewportStart.startLineDelta }, 1 /* ScrollType.Immediate */);
                }
            }
            try {
                const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
                if (e instanceof textModelEvents/* InternalModelContentChangeEvent */.fV) {
                    eventsCollector.emitOutgoingEvent(new viewModelEventDispatcher/* ModelContentChangedEvent */.P2(e.contentChangedEvent));
                }
                this._cursor.onModelContentChanged(eventsCollector, e);
            }
            finally {
                this._eventDispatcher.endEmitViewEvents();
            }
            this._handleVisibleLinesChanged();
        }));
        this._register(this.model.onDidChangeTokens((e) => {
            const viewRanges = [];
            for (let j = 0, lenJ = e.ranges.length; j < lenJ; j++) {
                const modelRange = e.ranges[j];
                const viewStartLineNumber = this.coordinatesConverter.convertModelPositionToViewPosition(new core_position/* Position */.L(modelRange.fromLineNumber, 1)).lineNumber;
                const viewEndLineNumber = this.coordinatesConverter.convertModelPositionToViewPosition(new core_position/* Position */.L(modelRange.toLineNumber, this.model.getLineMaxColumn(modelRange.toLineNumber))).lineNumber;
                viewRanges[j] = {
                    fromLineNumber: viewStartLineNumber,
                    toLineNumber: viewEndLineNumber
                };
            }
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewTokensChangedEvent */.H9(viewRanges));
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ModelTokensChangedEvent */.$X(e));
        }));
        this._register(this.model.onDidChangeLanguageConfiguration((e) => {
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewLanguageConfigurationEvent */._0());
            this.cursorConfig = new cursorCommon/* CursorConfiguration */.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService);
            this._cursor.updateConfiguration(this.cursorConfig);
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ModelLanguageConfigurationChangedEvent */.iH(e));
        }));
        this._register(this.model.onDidChangeLanguage((e) => {
            this.cursorConfig = new cursorCommon/* CursorConfiguration */.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService);
            this._cursor.updateConfiguration(this.cursorConfig);
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ModelLanguageChangedEvent */.ZX(e));
        }));
        this._register(this.model.onDidChangeOptions((e) => {
            // A tab size change causes a line mapping changed event => all view parts will repaint OK, no further event needed here
            if (this._lines.setTabSize(this.model.getOptions().tabSize)) {
                try {
                    const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
                    eventsCollector.emitViewEvent(new viewEvents/* ViewFlushedEvent */.CL());
                    eventsCollector.emitViewEvent(new viewEvents/* ViewLineMappingChangedEvent */.d8());
                    eventsCollector.emitViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(null));
                    this._cursor.onLineMappingChanged(eventsCollector);
                    this._decorations.onLineMappingChanged();
                    this.viewLayout.onFlushed(this.getLineCount());
                }
                finally {
                    this._eventDispatcher.endEmitViewEvents();
                }
                this._updateConfigurationViewLineCount.schedule();
            }
            this.cursorConfig = new cursorCommon/* CursorConfiguration */.LM(this.model.getLanguageId(), this.model.getOptions(), this._configuration, this.languageConfigurationService);
            this._cursor.updateConfiguration(this.cursorConfig);
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ModelOptionsChangedEvent */.q2(e));
        }));
        this._register(this.model.onDidChangeDecorations((e) => {
            this._decorations.onModelDecorationsChanged();
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(e));
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ModelDecorationsChangedEvent */.Pb(e));
        }));
    }
    setHiddenAreas(ranges, source) {
        this.hiddenAreasModel.setHiddenAreas(source, ranges);
        const mergedRanges = this.hiddenAreasModel.getMergedRanges();
        if (mergedRanges === this.previousHiddenAreas) {
            return;
        }
        this.previousHiddenAreas = mergedRanges;
        const stableViewport = this._captureStableViewport();
        let lineMappingChanged = false;
        try {
            const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
            lineMappingChanged = this._lines.setHiddenAreas(mergedRanges);
            if (lineMappingChanged) {
                eventsCollector.emitViewEvent(new viewEvents/* ViewFlushedEvent */.CL());
                eventsCollector.emitViewEvent(new viewEvents/* ViewLineMappingChangedEvent */.d8());
                eventsCollector.emitViewEvent(new viewEvents/* ViewDecorationsChangedEvent */.vA(null));
                this._cursor.onLineMappingChanged(eventsCollector);
                this._decorations.onLineMappingChanged();
                this.viewLayout.onFlushed(this.getLineCount());
                this.viewLayout.onHeightMaybeChanged();
            }
            stableViewport.recoverViewportStart(this.coordinatesConverter, this.viewLayout);
        }
        finally {
            this._eventDispatcher.endEmitViewEvents();
        }
        this._updateConfigurationViewLineCount.schedule();
        if (lineMappingChanged) {
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* HiddenAreasChangedEvent */.Sh());
        }
    }
    getVisibleRangesPlusViewportAboveBelow() {
        const layoutInfo = this._configuration.options.get(142 /* EditorOption.layoutInfo */);
        const lineHeight = this._configuration.options.get(65 /* EditorOption.lineHeight */);
        const linesAround = Math.max(20, Math.round(layoutInfo.height / lineHeight));
        const partialData = this.viewLayout.getLinesViewportData();
        const startViewLineNumber = Math.max(1, partialData.completelyVisibleStartLineNumber - linesAround);
        const endViewLineNumber = Math.min(this.getLineCount(), partialData.completelyVisibleEndLineNumber + linesAround);
        return this._toModelVisibleRanges(new core_range/* Range */.e(startViewLineNumber, this.getLineMinColumn(startViewLineNumber), endViewLineNumber, this.getLineMaxColumn(endViewLineNumber)));
    }
    getVisibleRanges() {
        const visibleViewRange = this.getCompletelyVisibleViewRange();
        return this._toModelVisibleRanges(visibleViewRange);
    }
    getHiddenAreas() {
        return this._lines.getHiddenAreas();
    }
    _toModelVisibleRanges(visibleViewRange) {
        const visibleRange = this.coordinatesConverter.convertViewRangeToModelRange(visibleViewRange);
        const hiddenAreas = this._lines.getHiddenAreas();
        if (hiddenAreas.length === 0) {
            return [visibleRange];
        }
        const result = [];
        let resultLen = 0;
        let startLineNumber = visibleRange.startLineNumber;
        let startColumn = visibleRange.startColumn;
        const endLineNumber = visibleRange.endLineNumber;
        const endColumn = visibleRange.endColumn;
        for (let i = 0, len = hiddenAreas.length; i < len; i++) {
            const hiddenStartLineNumber = hiddenAreas[i].startLineNumber;
            const hiddenEndLineNumber = hiddenAreas[i].endLineNumber;
            if (hiddenEndLineNumber < startLineNumber) {
                continue;
            }
            if (hiddenStartLineNumber > endLineNumber) {
                continue;
            }
            if (startLineNumber < hiddenStartLineNumber) {
                result[resultLen++] = new core_range/* Range */.e(startLineNumber, startColumn, hiddenStartLineNumber - 1, this.model.getLineMaxColumn(hiddenStartLineNumber - 1));
            }
            startLineNumber = hiddenEndLineNumber + 1;
            startColumn = 1;
        }
        if (startLineNumber < endLineNumber || (startLineNumber === endLineNumber && startColumn < endColumn)) {
            result[resultLen++] = new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        return result;
    }
    getCompletelyVisibleViewRange() {
        const partialData = this.viewLayout.getLinesViewportData();
        const startViewLineNumber = partialData.completelyVisibleStartLineNumber;
        const endViewLineNumber = partialData.completelyVisibleEndLineNumber;
        return new core_range/* Range */.e(startViewLineNumber, this.getLineMinColumn(startViewLineNumber), endViewLineNumber, this.getLineMaxColumn(endViewLineNumber));
    }
    getCompletelyVisibleViewRangeAtScrollTop(scrollTop) {
        const partialData = this.viewLayout.getLinesViewportDataAtScrollTop(scrollTop);
        const startViewLineNumber = partialData.completelyVisibleStartLineNumber;
        const endViewLineNumber = partialData.completelyVisibleEndLineNumber;
        return new core_range/* Range */.e(startViewLineNumber, this.getLineMinColumn(startViewLineNumber), endViewLineNumber, this.getLineMaxColumn(endViewLineNumber));
    }
    saveState() {
        const compatViewState = this.viewLayout.saveState();
        const scrollTop = compatViewState.scrollTop;
        const firstViewLineNumber = this.viewLayout.getLineNumberAtVerticalOffset(scrollTop);
        const firstPosition = this.coordinatesConverter.convertViewPositionToModelPosition(new core_position/* Position */.L(firstViewLineNumber, this.getLineMinColumn(firstViewLineNumber)));
        const firstPositionDeltaTop = this.viewLayout.getVerticalOffsetForLineNumber(firstViewLineNumber) - scrollTop;
        return {
            scrollLeft: compatViewState.scrollLeft,
            firstPosition: firstPosition,
            firstPositionDeltaTop: firstPositionDeltaTop
        };
    }
    reduceRestoreState(state) {
        if (typeof state.firstPosition === 'undefined') {
            // This is a view state serialized by an older version
            return this._reduceRestoreStateCompatibility(state);
        }
        const modelPosition = this.model.validatePosition(state.firstPosition);
        const viewPosition = this.coordinatesConverter.convertModelPositionToViewPosition(modelPosition);
        const scrollTop = this.viewLayout.getVerticalOffsetForLineNumber(viewPosition.lineNumber) - state.firstPositionDeltaTop;
        return {
            scrollLeft: state.scrollLeft,
            scrollTop: scrollTop
        };
    }
    _reduceRestoreStateCompatibility(state) {
        return {
            scrollLeft: state.scrollLeft,
            scrollTop: state.scrollTopWithoutViewZones
        };
    }
    getTabSize() {
        return this.model.getOptions().tabSize;
    }
    getLineCount() {
        return this._lines.getViewLineCount();
    }
    /**
     * Gives a hint that a lot of requests are about to come in for these line numbers.
     */
    setViewport(startLineNumber, endLineNumber, centeredLineNumber) {
        this._viewportStart.update(this, startLineNumber);
    }
    getActiveIndentGuide(lineNumber, minLineNumber, maxLineNumber) {
        return this._lines.getActiveIndentGuide(lineNumber, minLineNumber, maxLineNumber);
    }
    getLinesIndentGuides(startLineNumber, endLineNumber) {
        return this._lines.getViewLinesIndentGuides(startLineNumber, endLineNumber);
    }
    getBracketGuidesInRangeByLine(startLineNumber, endLineNumber, activePosition, options) {
        return this._lines.getViewLinesBracketGuides(startLineNumber, endLineNumber, activePosition, options);
    }
    getLineContent(lineNumber) {
        return this._lines.getViewLineContent(lineNumber);
    }
    getLineLength(lineNumber) {
        return this._lines.getViewLineLength(lineNumber);
    }
    getLineMinColumn(lineNumber) {
        return this._lines.getViewLineMinColumn(lineNumber);
    }
    getLineMaxColumn(lineNumber) {
        return this._lines.getViewLineMaxColumn(lineNumber);
    }
    getLineFirstNonWhitespaceColumn(lineNumber) {
        const result = strings/* firstNonWhitespaceIndex */.LC(this.getLineContent(lineNumber));
        if (result === -1) {
            return 0;
        }
        return result + 1;
    }
    getLineLastNonWhitespaceColumn(lineNumber) {
        const result = strings/* lastNonWhitespaceIndex */.ow(this.getLineContent(lineNumber));
        if (result === -1) {
            return 0;
        }
        return result + 2;
    }
    getMinimapDecorationsInRange(range) {
        return this._decorations.getMinimapDecorationsInRange(range);
    }
    getDecorationsInViewport(visibleRange) {
        return this._decorations.getDecorationsViewportData(visibleRange).decorations;
    }
    getInjectedTextAt(viewPosition) {
        return this._lines.getInjectedTextAt(viewPosition);
    }
    getViewportViewLineRenderingData(visibleRange, lineNumber) {
        const allInlineDecorations = this._decorations.getDecorationsViewportData(visibleRange).inlineDecorations;
        const inlineDecorations = allInlineDecorations[lineNumber - visibleRange.startLineNumber];
        return this._getViewLineRenderingData(lineNumber, inlineDecorations);
    }
    getViewLineRenderingData(lineNumber) {
        const inlineDecorations = this._decorations.getInlineDecorationsOnLine(lineNumber);
        return this._getViewLineRenderingData(lineNumber, inlineDecorations);
    }
    _getViewLineRenderingData(lineNumber, inlineDecorations) {
        const mightContainRTL = this.model.mightContainRTL();
        const mightContainNonBasicASCII = this.model.mightContainNonBasicASCII();
        const tabSize = this.getTabSize();
        const lineData = this._lines.getViewLineData(lineNumber);
        if (lineData.inlineDecorations) {
            inlineDecorations = [
                ...inlineDecorations,
                ...lineData.inlineDecorations.map(d => d.toInlineDecoration(lineNumber))
            ];
        }
        return new viewModel/* ViewLineRenderingData */.wA(lineData.minColumn, lineData.maxColumn, lineData.content, lineData.continuesWithWrappedLine, mightContainRTL, mightContainNonBasicASCII, lineData.tokens, inlineDecorations, tabSize, lineData.startVisibleColumn);
    }
    getViewLineData(lineNumber) {
        return this._lines.getViewLineData(lineNumber);
    }
    getMinimapLinesRenderingData(startLineNumber, endLineNumber, needed) {
        const result = this._lines.getViewLinesData(startLineNumber, endLineNumber, needed);
        return new viewModel/* MinimapLinesRenderingData */.ud(this.getTabSize(), result);
    }
    getAllOverviewRulerDecorations(theme) {
        const decorations = this.model.getOverviewRulerDecorations(this._editorId, (0,editorOptions/* filterValidationDecorations */.$J)(this._configuration.options));
        const result = new OverviewRulerDecorations();
        for (const decoration of decorations) {
            const decorationOptions = decoration.options;
            const opts = decorationOptions.overviewRuler;
            if (!opts) {
                continue;
            }
            const lane = opts.position;
            if (lane === 0) {
                continue;
            }
            const color = opts.getColor(theme.value);
            const viewStartLineNumber = this.coordinatesConverter.getViewLineNumberOfModelPosition(decoration.range.startLineNumber, decoration.range.startColumn);
            const viewEndLineNumber = this.coordinatesConverter.getViewLineNumberOfModelPosition(decoration.range.endLineNumber, decoration.range.endColumn);
            result.accept(color, decorationOptions.zIndex, viewStartLineNumber, viewEndLineNumber, lane);
        }
        return result.asArray;
    }
    _invalidateDecorationsColorCache() {
        const decorations = this.model.getOverviewRulerDecorations();
        for (const decoration of decorations) {
            const opts1 = decoration.options.overviewRuler;
            opts1 === null || opts1 === void 0 ? void 0 : opts1.invalidateCachedColor();
            const opts2 = decoration.options.minimap;
            opts2 === null || opts2 === void 0 ? void 0 : opts2.invalidateCachedColor();
        }
    }
    getValueInRange(range, eol) {
        const modelRange = this.coordinatesConverter.convertViewRangeToModelRange(range);
        return this.model.getValueInRange(modelRange, eol);
    }
    getValueLengthInRange(range, eol) {
        const modelRange = this.coordinatesConverter.convertViewRangeToModelRange(range);
        return this.model.getValueLengthInRange(modelRange, eol);
    }
    modifyPosition(position, offset) {
        const modelPosition = this.coordinatesConverter.convertViewPositionToModelPosition(position);
        return this.model.modifyPosition(modelPosition, offset);
    }
    deduceModelPositionRelativeToViewPosition(viewAnchorPosition, deltaOffset, lineFeedCnt) {
        const modelAnchor = this.coordinatesConverter.convertViewPositionToModelPosition(viewAnchorPosition);
        if (this.model.getEOL().length === 2) {
            // This model uses CRLF, so the delta must take that into account
            if (deltaOffset < 0) {
                deltaOffset -= lineFeedCnt;
            }
            else {
                deltaOffset += lineFeedCnt;
            }
        }
        const modelAnchorOffset = this.model.getOffsetAt(modelAnchor);
        const resultOffset = modelAnchorOffset + deltaOffset;
        return this.model.getPositionAt(resultOffset);
    }
    getPlainTextToCopy(modelRanges, emptySelectionClipboard, forceCRLF) {
        const newLineCharacter = forceCRLF ? '\r\n' : this.model.getEOL();
        modelRanges = modelRanges.slice(0);
        modelRanges.sort(core_range/* Range */.e.compareRangesUsingStarts);
        let hasEmptyRange = false;
        let hasNonEmptyRange = false;
        for (const range of modelRanges) {
            if (range.isEmpty()) {
                hasEmptyRange = true;
            }
            else {
                hasNonEmptyRange = true;
            }
        }
        if (!hasNonEmptyRange) {
            // all ranges are empty
            if (!emptySelectionClipboard) {
                return '';
            }
            const modelLineNumbers = modelRanges.map((r) => r.startLineNumber);
            let result = '';
            for (let i = 0; i < modelLineNumbers.length; i++) {
                if (i > 0 && modelLineNumbers[i - 1] === modelLineNumbers[i]) {
                    continue;
                }
                result += this.model.getLineContent(modelLineNumbers[i]) + newLineCharacter;
            }
            return result;
        }
        if (hasEmptyRange && emptySelectionClipboard) {
            // mixed empty selections and non-empty selections
            const result = [];
            let prevModelLineNumber = 0;
            for (const modelRange of modelRanges) {
                const modelLineNumber = modelRange.startLineNumber;
                if (modelRange.isEmpty()) {
                    if (modelLineNumber !== prevModelLineNumber) {
                        result.push(this.model.getLineContent(modelLineNumber));
                    }
                }
                else {
                    result.push(this.model.getValueInRange(modelRange, forceCRLF ? 2 /* EndOfLinePreference.CRLF */ : 0 /* EndOfLinePreference.TextDefined */));
                }
                prevModelLineNumber = modelLineNumber;
            }
            return result.length === 1 ? result[0] : result;
        }
        const result = [];
        for (const modelRange of modelRanges) {
            if (!modelRange.isEmpty()) {
                result.push(this.model.getValueInRange(modelRange, forceCRLF ? 2 /* EndOfLinePreference.CRLF */ : 0 /* EndOfLinePreference.TextDefined */));
            }
        }
        return result.length === 1 ? result[0] : result;
    }
    getRichTextToCopy(modelRanges, emptySelectionClipboard) {
        const languageId = this.model.getLanguageId();
        if (languageId === modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd) {
            return null;
        }
        if (modelRanges.length !== 1) {
            // no multiple selection support at this time
            return null;
        }
        let range = modelRanges[0];
        if (range.isEmpty()) {
            if (!emptySelectionClipboard) {
                // nothing to copy
                return null;
            }
            const lineNumber = range.startLineNumber;
            range = new core_range/* Range */.e(lineNumber, this.model.getLineMinColumn(lineNumber), lineNumber, this.model.getLineMaxColumn(lineNumber));
        }
        const fontInfo = this._configuration.options.get(49 /* EditorOption.fontInfo */);
        const colorMap = this._getColorMap();
        const hasBadChars = (/[:;\\\/<>]/.test(fontInfo.fontFamily));
        const useDefaultFontFamily = (hasBadChars || fontInfo.fontFamily === editorOptions/* EDITOR_FONT_DEFAULTS */.hL.fontFamily);
        let fontFamily;
        if (useDefaultFontFamily) {
            fontFamily = editorOptions/* EDITOR_FONT_DEFAULTS */.hL.fontFamily;
        }
        else {
            fontFamily = fontInfo.fontFamily;
            fontFamily = fontFamily.replace(/"/g, '\'');
            const hasQuotesOrIsList = /[,']/.test(fontFamily);
            if (!hasQuotesOrIsList) {
                const needsQuotes = /[+ ]/.test(fontFamily);
                if (needsQuotes) {
                    fontFamily = `'${fontFamily}'`;
                }
            }
            fontFamily = `${fontFamily}, ${editorOptions/* EDITOR_FONT_DEFAULTS */.hL.fontFamily}`;
        }
        return {
            mode: languageId,
            html: (`<div style="`
                + `color: ${colorMap[1 /* ColorId.DefaultForeground */]};`
                + `background-color: ${colorMap[2 /* ColorId.DefaultBackground */]};`
                + `font-family: ${fontFamily};`
                + `font-weight: ${fontInfo.fontWeight};`
                + `font-size: ${fontInfo.fontSize}px;`
                + `line-height: ${fontInfo.lineHeight}px;`
                + `white-space: pre;`
                + `">`
                + this._getHTMLToCopy(range, colorMap)
                + '</div>')
        };
    }
    _getHTMLToCopy(modelRange, colorMap) {
        const startLineNumber = modelRange.startLineNumber;
        const startColumn = modelRange.startColumn;
        const endLineNumber = modelRange.endLineNumber;
        const endColumn = modelRange.endColumn;
        const tabSize = this.getTabSize();
        let result = '';
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const lineTokens = this.model.tokenization.getLineTokens(lineNumber);
            const lineContent = lineTokens.getLineContent();
            const startOffset = (lineNumber === startLineNumber ? startColumn - 1 : 0);
            const endOffset = (lineNumber === endLineNumber ? endColumn - 1 : lineContent.length);
            if (lineContent === '') {
                result += '<br>';
            }
            else {
                result += (0,textToHtmlTokenizer/* tokenizeLineToHTML */.Fq)(lineContent, lineTokens.inflate(), colorMap, startOffset, endOffset, tabSize, platform/* isWindows */.ED);
            }
        }
        return result;
    }
    _getColorMap() {
        const colorMap = languages/* TokenizationRegistry */.RW.getColorMap();
        const result = ['#000000'];
        if (colorMap) {
            for (let i = 1, len = colorMap.length; i < len; i++) {
                result[i] = color/* Color */.Il.Format.CSS.formatHex(colorMap[i]);
            }
        }
        return result;
    }
    //#region cursor operations
    getPrimaryCursorState() {
        return this._cursor.getPrimaryCursorState();
    }
    getLastAddedCursorIndex() {
        return this._cursor.getLastAddedCursorIndex();
    }
    getCursorStates() {
        return this._cursor.getCursorStates();
    }
    setCursorStates(source, reason, states) {
        return this._withViewEventsCollector(eventsCollector => this._cursor.setStates(eventsCollector, source, reason, states));
    }
    getCursorColumnSelectData() {
        return this._cursor.getCursorColumnSelectData();
    }
    getCursorAutoClosedCharacters() {
        return this._cursor.getAutoClosedCharacters();
    }
    setCursorColumnSelectData(columnSelectData) {
        this._cursor.setCursorColumnSelectData(columnSelectData);
    }
    getPrevEditOperationType() {
        return this._cursor.getPrevEditOperationType();
    }
    setPrevEditOperationType(type) {
        this._cursor.setPrevEditOperationType(type);
    }
    getSelection() {
        return this._cursor.getSelection();
    }
    getSelections() {
        return this._cursor.getSelections();
    }
    getPosition() {
        return this._cursor.getPrimaryCursorState().modelState.position;
    }
    setSelections(source, selections, reason = 0 /* CursorChangeReason.NotSet */) {
        this._withViewEventsCollector(eventsCollector => this._cursor.setSelections(eventsCollector, source, selections, reason));
    }
    saveCursorState() {
        return this._cursor.saveState();
    }
    restoreCursorState(states) {
        this._withViewEventsCollector(eventsCollector => this._cursor.restoreState(eventsCollector, states));
    }
    _executeCursorEdit(callback) {
        if (this._cursor.context.cursorConfig.readOnly) {
            // we cannot edit when read only...
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ReadOnlyEditAttemptEvent */.Ki());
            return;
        }
        this._withViewEventsCollector(callback);
    }
    executeEdits(source, edits, cursorStateComputer) {
        this._executeCursorEdit(eventsCollector => this._cursor.executeEdits(eventsCollector, source, edits, cursorStateComputer));
    }
    startComposition() {
        this._executeCursorEdit(eventsCollector => this._cursor.startComposition(eventsCollector));
    }
    endComposition(source) {
        this._executeCursorEdit(eventsCollector => this._cursor.endComposition(eventsCollector, source));
    }
    type(text, source) {
        this._executeCursorEdit(eventsCollector => this._cursor.type(eventsCollector, text, source));
    }
    compositionType(text, replacePrevCharCnt, replaceNextCharCnt, positionDelta, source) {
        this._executeCursorEdit(eventsCollector => this._cursor.compositionType(eventsCollector, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta, source));
    }
    paste(text, pasteOnNewLine, multicursorText, source) {
        this._executeCursorEdit(eventsCollector => this._cursor.paste(eventsCollector, text, pasteOnNewLine, multicursorText, source));
    }
    cut(source) {
        this._executeCursorEdit(eventsCollector => this._cursor.cut(eventsCollector, source));
    }
    executeCommand(command, source) {
        this._executeCursorEdit(eventsCollector => this._cursor.executeCommand(eventsCollector, command, source));
    }
    executeCommands(commands, source) {
        this._executeCursorEdit(eventsCollector => this._cursor.executeCommands(eventsCollector, commands, source));
    }
    revealPrimaryCursor(source, revealHorizontal, minimalReveal = false) {
        this._withViewEventsCollector(eventsCollector => this._cursor.revealPrimary(eventsCollector, source, minimalReveal, 0 /* viewEvents.VerticalRevealType.Simple */, revealHorizontal, 0 /* ScrollType.Smooth */));
    }
    revealTopMostCursor(source) {
        const viewPosition = this._cursor.getTopMostViewPosition();
        const viewRange = new core_range/* Range */.e(viewPosition.lineNumber, viewPosition.column, viewPosition.lineNumber, viewPosition.column);
        this._withViewEventsCollector(eventsCollector => eventsCollector.emitViewEvent(new viewEvents/* ViewRevealRangeRequestEvent */.Qb(source, false, viewRange, null, 0 /* viewEvents.VerticalRevealType.Simple */, true, 0 /* ScrollType.Smooth */)));
    }
    revealBottomMostCursor(source) {
        const viewPosition = this._cursor.getBottomMostViewPosition();
        const viewRange = new core_range/* Range */.e(viewPosition.lineNumber, viewPosition.column, viewPosition.lineNumber, viewPosition.column);
        this._withViewEventsCollector(eventsCollector => eventsCollector.emitViewEvent(new viewEvents/* ViewRevealRangeRequestEvent */.Qb(source, false, viewRange, null, 0 /* viewEvents.VerticalRevealType.Simple */, true, 0 /* ScrollType.Smooth */)));
    }
    revealRange(source, revealHorizontal, viewRange, verticalType, scrollType) {
        this._withViewEventsCollector(eventsCollector => eventsCollector.emitViewEvent(new viewEvents/* ViewRevealRangeRequestEvent */.Qb(source, false, viewRange, null, verticalType, revealHorizontal, scrollType)));
    }
    //#endregion
    //#region viewLayout
    changeWhitespace(callback) {
        const hadAChange = this.viewLayout.changeWhitespace(callback);
        if (hadAChange) {
            this._eventDispatcher.emitSingleViewEvent(new viewEvents/* ViewZonesChangedEvent */.Ic());
            this._eventDispatcher.emitOutgoingEvent(new viewModelEventDispatcher/* ViewZonesChangedEvent */.Ic());
        }
    }
    //#endregion
    _withViewEventsCollector(callback) {
        try {
            const eventsCollector = this._eventDispatcher.beginEmitViewEvents();
            return callback(eventsCollector);
        }
        finally {
            this._eventDispatcher.endEmitViewEvents();
        }
    }
    normalizePosition(position, affinity) {
        return this._lines.normalizePosition(position, affinity);
    }
    /**
     * Gets the column at which indentation stops at a given line.
     * @internal
    */
    getLineIndentColumn(lineNumber) {
        return this._lines.getLineIndentColumn(lineNumber);
    }
}
class ViewportStart {
    static create(model) {
        const viewportStartLineTrackedRange = model._setTrackedRange(null, new core_range/* Range */.e(1, 1, 1, 1), 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */);
        return new ViewportStart(model, 1, false, viewportStartLineTrackedRange, 0);
    }
    get viewLineNumber() {
        return this._viewLineNumber;
    }
    get isValid() {
        return this._isValid;
    }
    get modelTrackedRange() {
        return this._modelTrackedRange;
    }
    get startLineDelta() {
        return this._startLineDelta;
    }
    constructor(_model, _viewLineNumber, _isValid, _modelTrackedRange, _startLineDelta) {
        this._model = _model;
        this._viewLineNumber = _viewLineNumber;
        this._isValid = _isValid;
        this._modelTrackedRange = _modelTrackedRange;
        this._startLineDelta = _startLineDelta;
    }
    dispose() {
        this._model._setTrackedRange(this._modelTrackedRange, null, 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */);
    }
    update(viewModel, startLineNumber) {
        const position = viewModel.coordinatesConverter.convertViewPositionToModelPosition(new core_position/* Position */.L(startLineNumber, viewModel.getLineMinColumn(startLineNumber)));
        const viewportStartLineTrackedRange = viewModel.model._setTrackedRange(this._modelTrackedRange, new core_range/* Range */.e(position.lineNumber, position.column, position.lineNumber, position.column), 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */);
        const viewportStartLineTop = viewModel.viewLayout.getVerticalOffsetForLineNumber(startLineNumber);
        const scrollTop = viewModel.viewLayout.getCurrentScrollTop();
        this._viewLineNumber = startLineNumber;
        this._isValid = true;
        this._modelTrackedRange = viewportStartLineTrackedRange;
        this._startLineDelta = scrollTop - viewportStartLineTop;
    }
    invalidate() {
        this._isValid = false;
    }
}
class OverviewRulerDecorations {
    constructor() {
        this._asMap = Object.create(null);
        this.asArray = [];
    }
    accept(color, zIndex, startLineNumber, endLineNumber, lane) {
        const prevGroup = this._asMap[color];
        if (prevGroup) {
            const prevData = prevGroup.data;
            const prevLane = prevData[prevData.length - 3];
            const prevEndLineNumber = prevData[prevData.length - 1];
            if (prevLane === lane && prevEndLineNumber + 1 >= startLineNumber) {
                // merge into prev
                if (endLineNumber > prevEndLineNumber) {
                    prevData[prevData.length - 1] = endLineNumber;
                }
                return;
            }
            // push
            prevData.push(lane, startLineNumber, endLineNumber);
        }
        else {
            const group = new viewModel/* OverviewRulerDecorationsGroup */.SQ(color, zIndex, [lane, startLineNumber, endLineNumber]);
            this._asMap[color] = group;
            this.asArray.push(group);
        }
    }
}
class HiddenAreasModel {
    constructor() {
        this.hiddenAreas = new Map();
        this.shouldRecompute = false;
        this.ranges = [];
    }
    setHiddenAreas(source, ranges) {
        const existing = this.hiddenAreas.get(source);
        if (existing && rangeArraysEqual(existing, ranges)) {
            return;
        }
        this.hiddenAreas.set(source, ranges);
        this.shouldRecompute = true;
    }
    /**
     * The returned array is immutable.
    */
    getMergedRanges() {
        if (!this.shouldRecompute) {
            return this.ranges;
        }
        this.shouldRecompute = false;
        const newRanges = Array.from(this.hiddenAreas.values()).reduce((r, hiddenAreas) => mergeLineRangeArray(r, hiddenAreas), []);
        if (rangeArraysEqual(this.ranges, newRanges)) {
            return this.ranges;
        }
        this.ranges = newRanges;
        return this.ranges;
    }
}
function mergeLineRangeArray(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        const item1 = arr1[i];
        const item2 = arr2[j];
        if (item1.endLineNumber < item2.startLineNumber - 1) {
            result.push(arr1[i++]);
        }
        else if (item2.endLineNumber < item1.startLineNumber - 1) {
            result.push(arr2[j++]);
        }
        else {
            const startLineNumber = Math.min(item1.startLineNumber, item2.startLineNumber);
            const endLineNumber = Math.max(item1.endLineNumber, item2.endLineNumber);
            result.push(new core_range/* Range */.e(startLineNumber, 1, endLineNumber, 1));
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i++]);
    }
    while (j < arr2.length) {
        result.push(arr2[j++]);
    }
    return result;
}
function rangeArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (!arr1[i].equalsRange(arr2[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Maintain a stable viewport by trying to keep the first line in the viewport constant.
 */
class StableViewport {
    constructor(viewportStartModelPosition, startLineDelta) {
        this.viewportStartModelPosition = viewportStartModelPosition;
        this.startLineDelta = startLineDelta;
    }
    recoverViewportStart(coordinatesConverter, viewLayout) {
        if (!this.viewportStartModelPosition) {
            return;
        }
        const viewPosition = coordinatesConverter.convertModelPositionToViewPosition(this.viewportStartModelPosition);
        const viewPositionTop = viewLayout.getVerticalOffsetForLineNumber(viewPosition.lineNumber);
        viewLayout.setScrollPosition({ scrollTop: viewPositionTop + this.startLineDelta }, 1 /* ScrollType.Immediate */);
    }
}


/***/ })

}]);