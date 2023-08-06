"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-134232b5"],{

/***/ 43332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ CharacterClassifier; },
/* harmony export */   q: function() { return /* binding */ CharacterSet; }
/* harmony export */ });
/* harmony import */ var _base_common_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87636);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A fast character classifier that uses a compact array for ASCII values.
 */
class CharacterClassifier {
    constructor(_defaultValue) {
        const defaultValue = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_0__/* .toUint8 */ .K)(_defaultValue);
        this._defaultValue = defaultValue;
        this._asciiMap = CharacterClassifier._createAsciiMap(defaultValue);
        this._map = new Map();
    }
    static _createAsciiMap(defaultValue) {
        const asciiMap = new Uint8Array(256);
        asciiMap.fill(defaultValue);
        return asciiMap;
    }
    set(charCode, _value) {
        const value = (0,_base_common_uint_js__WEBPACK_IMPORTED_MODULE_0__/* .toUint8 */ .K)(_value);
        if (charCode >= 0 && charCode < 256) {
            this._asciiMap[charCode] = value;
        }
        else {
            this._map.set(charCode, value);
        }
    }
    get(charCode) {
        if (charCode >= 0 && charCode < 256) {
            return this._asciiMap[charCode];
        }
        else {
            return (this._map.get(charCode) || this._defaultValue);
        }
    }
    clear() {
        this._asciiMap.fill(this._defaultValue);
        this._map.clear();
    }
}
class CharacterSet {
    constructor() {
        this._actual = new CharacterClassifier(0 /* Boolean.False */);
    }
    add(charCode) {
        this._actual.set(charCode, 1 /* Boolean.True */);
    }
    has(charCode) {
        return (this._actual.get(charCode) === 1 /* Boolean.True */);
    }
    clear() {
        return this._actual.clear();
    }
}


/***/ }),

/***/ 21773:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ CursorColumns; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A column in a position is the gap between two adjacent characters. The methods here
 * work with a concept called "visible column". A visible column is a very rough approximation
 * of the horizontal screen position of a column. For example, using a tab size of 4:
 * ```txt
 * |<TAB>|<TAB>|T|ext
 * |     |     | \---- column = 4, visible column = 9
 * |     |     \------ column = 3, visible column = 8
 * |     \------------ column = 2, visible column = 4
 * \------------------ column = 1, visible column = 0
 * ```
 *
 * **NOTE**: Visual columns do not work well for RTL text or variable-width fonts or characters.
 *
 * **NOTE**: These methods work and make sense both on the model and on the view model.
 */
class CursorColumns {
    static _nextVisibleColumn(codePoint, visibleColumn, tabSize) {
        if (codePoint === 9 /* CharCode.Tab */) {
            return CursorColumns.nextRenderTabStop(visibleColumn, tabSize);
        }
        if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isFullWidthCharacter */ .K7(codePoint) || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isEmojiImprecise */ .C8(codePoint)) {
            return visibleColumn + 2;
        }
        return visibleColumn + 1;
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    static visibleColumnFromColumn(lineContent, column, tabSize) {
        const textLen = Math.min(column - 1, lineContent.length);
        const text = lineContent.substring(0, textLen);
        const iterator = new _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .GraphemeIterator */ .W1(text);
        let result = 0;
        while (!iterator.eol()) {
            const codePoint = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getNextCodePoint */ .ZH(text, textLen, iterator.offset);
            iterator.nextGraphemeLength();
            result = this._nextVisibleColumn(codePoint, result, tabSize);
        }
        return result;
    }
    /**
     * Returns a column from a visible column.
     * @see {@link CursorColumns}
     */
    static columnFromVisibleColumn(lineContent, visibleColumn, tabSize) {
        if (visibleColumn <= 0) {
            return 1;
        }
        const lineContentLength = lineContent.length;
        const iterator = new _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .GraphemeIterator */ .W1(lineContent);
        let beforeVisibleColumn = 0;
        let beforeColumn = 1;
        while (!iterator.eol()) {
            const codePoint = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getNextCodePoint */ .ZH(lineContent, lineContentLength, iterator.offset);
            iterator.nextGraphemeLength();
            const afterVisibleColumn = this._nextVisibleColumn(codePoint, beforeVisibleColumn, tabSize);
            const afterColumn = iterator.offset + 1;
            if (afterVisibleColumn >= visibleColumn) {
                const beforeDelta = visibleColumn - beforeVisibleColumn;
                const afterDelta = afterVisibleColumn - visibleColumn;
                if (afterDelta < beforeDelta) {
                    return afterColumn;
                }
                else {
                    return beforeColumn;
                }
            }
            beforeVisibleColumn = afterVisibleColumn;
            beforeColumn = afterColumn;
        }
        // walked the entire string
        return lineContentLength + 1;
    }
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static nextRenderTabStop(visibleColumn, tabSize) {
        return visibleColumn + tabSize - visibleColumn % tabSize;
    }
    /**
     * ATTENTION: This works with 0-based columns (as oposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static nextIndentTabStop(visibleColumn, indentSize) {
        return visibleColumn + indentSize - visibleColumn % indentSize;
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static prevRenderTabStop(column, tabSize) {
        return Math.max(0, column - 1 - (column - 1) % tabSize);
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static prevIndentTabStop(column, indentSize) {
        return Math.max(0, column - 1 - (column - 1) % indentSize);
    }
}


/***/ }),

/***/ 87306:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ EditOperation; }
/* harmony export */ });
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class EditOperation {
    static insert(position, text) {
        return {
            range: new _range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(position.lineNumber, position.column, position.lineNumber, position.column),
            text: text,
            forceMoveMarkers: true
        };
    }
    static delete(range) {
        return {
            range: range,
            text: null
        };
    }
    static replace(range, text) {
        return {
            range: range,
            text: text
        };
    }
    static replaceMove(range, text) {
        return {
            range: range,
            text: text,
            forceMoveMarkers: true
        };
    }
}


/***/ }),

/***/ 66050:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bj: function() { return /* binding */ editorDimmedLineNumber; },
/* harmony export */   CE: function() { return /* binding */ editorBracketHighlightingForeground3; },
/* harmony export */   DS: function() { return /* binding */ editorBracketPairGuideBackground3; },
/* harmony export */   HV: function() { return /* binding */ editorBracketPairGuideActiveBackground5; },
/* harmony export */   Jn: function() { return /* binding */ editorBracketPairGuideBackground5; },
/* harmony export */   Kh: function() { return /* binding */ editorLineHighlight; },
/* harmony export */   L7: function() { return /* binding */ editorBracketPairGuideActiveBackground4; },
/* harmony export */   Mm: function() { return /* binding */ editorLineHighlightBorder; },
/* harmony export */   Qb: function() { return /* binding */ editorBracketPairGuideActiveBackground1; },
/* harmony export */   Re: function() { return /* binding */ overviewRulerWarning; },
/* harmony export */   To: function() { return /* binding */ editorBracketPairGuideActiveBackground3; },
/* harmony export */   UP: function() { return /* binding */ editorBracketHighlightingForeground4; },
/* harmony export */   Vs: function() { return /* binding */ editorBracketHighlightingForeground2; },
/* harmony export */   YF: function() { return /* binding */ editorBracketPairGuideBackground6; },
/* harmony export */   Ym: function() { return /* binding */ editorActiveIndentGuides; },
/* harmony export */   dI: function() { return /* binding */ editorWhitespaces; },
/* harmony export */   eS: function() { return /* binding */ overviewRulerInfo; },
/* harmony export */   e_: function() { return /* binding */ editorOverviewRulerBackground; },
/* harmony export */   f9: function() { return /* binding */ editorBracketPairGuideActiveBackground6; },
/* harmony export */   fY: function() { return /* binding */ editorCursorBackground; },
/* harmony export */   hw: function() { return /* binding */ editorLineNumbers; },
/* harmony export */   lK: function() { return /* binding */ overviewRulerError; },
/* harmony export */   lS: function() { return /* binding */ editorBracketPairGuideBackground4; },
/* harmony export */   m$: function() { return /* binding */ editorBracketPairGuideBackground2; },
/* harmony export */   m1: function() { return /* binding */ editorBracketHighlightingForeground6; },
/* harmony export */   m3: function() { return /* binding */ editorBracketPairGuideActiveBackground2; },
/* harmony export */   m9: function() { return /* binding */ overviewRulerRangeHighlight; },
/* harmony export */   n0: function() { return /* binding */ editorCursorForeground; },
/* harmony export */   oV: function() { return /* binding */ editorBracketPairGuideBackground1; },
/* harmony export */   r0: function() { return /* binding */ editorBracketHighlightingForeground5; },
/* harmony export */   tR: function() { return /* binding */ editorIndentGuides; },
/* harmony export */   ts: function() { return /* binding */ editorBracketHighlightingUnexpectedBracketForeground; },
/* harmony export */   zJ: function() { return /* binding */ editorBracketHighlightingForeground1; },
/* harmony export */   zu: function() { return /* binding */ editorUnnecessaryCodeOpacity; },
/* harmony export */   zw: function() { return /* binding */ editorOverviewRulerBorder; }
/* harmony export */ });
/* unused harmony exports editorRangeHighlight, editorRangeHighlightBorder, editorSymbolHighlight, editorSymbolHighlightBorder, editorActiveLineNumber, editorRuler, editorCodeLensForeground, editorBracketMatchBackground, editorBracketMatchBorder, editorGutter, editorUnnecessaryCodeBorder, ghostTextBorder, ghostTextForeground, ghostTextBackground, editorUnicodeHighlightBorder, editorUnicodeHighlightBackground */
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2157);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3561);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31754);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




/**
 * Definition of the editor colors
 */
const editorLineHighlight = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.lineHighlightBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineHighlight', 'Background color for the highlight of line at the cursor position.'));
const editorLineHighlightBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.lineHighlightBorder', { dark: '#282828', light: '#eeeeee', hcDark: '#f38518', hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .contrastBorder */ .lRK }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineHighlightBorderBox', 'Background color for the border around the line at the cursor position.'));
const editorRangeHighlight = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.rangeHighlightBackground', { dark: '#ffffff0b', light: '#fdff0033', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('rangeHighlight', 'Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorRangeHighlightBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.rangeHighlightBorder', { dark: null, light: null, hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1 }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('rangeHighlightBorder', 'Background color of the border around highlighted ranges.'), true);
const editorSymbolHighlight = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.symbolHighlightBackground', { dark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorFindMatchHighlight */ .MUv, light: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorFindMatchHighlight */ .MUv, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('symbolHighlight', 'Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorSymbolHighlightBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editor.symbolHighlightBorder', { dark: null, light: null, hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1 }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('symbolHighlightBorder', 'Background color of the border around highlighted symbols.'), true);
const editorCursorForeground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorCursor.foreground', { dark: '#AEAFAD', light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('caret', 'Color of the editor cursor.'));
const editorCursorBackground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorCursor.background', null, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorCursorBackground', 'The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.'));
const editorWhitespaces = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorWhitespace.foreground', { dark: '#e3e4e229', light: '#33333333', hcDark: '#e3e4e229', hcLight: '#CCCCCC' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorWhitespaces', 'Color of whitespace characters in the editor.'));
const editorIndentGuides = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background', { dark: editorWhitespaces, light: editorWhitespaces, hcDark: editorWhitespaces, hcLight: editorWhitespaces }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides', 'Color of the editor indentation guides.'));
const editorActiveIndentGuides = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground', { dark: editorWhitespaces, light: editorWhitespaces, hcDark: editorWhitespaces, hcLight: editorWhitespaces }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide', 'Color of the active editor indentation guides.'));
const editorLineNumbers = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorLineNumber.foreground', { dark: '#858585', light: '#237893', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorLineNumbers', 'Color of editor line numbers.'));
const deprecatedEditorActiveLineNumber = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorActiveLineNumber.foreground', { dark: '#c6c6c6', light: '#0B216F', hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .activeContrastBorder */ .xL1 }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveLineNumber', 'Color of editor active line number'), false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('deprecatedEditorActiveLineNumber', 'Id is deprecated. Use \'editorLineNumber.activeForeground\' instead.'));
const editorActiveLineNumber = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorLineNumber.activeForeground', { dark: deprecatedEditorActiveLineNumber, light: deprecatedEditorActiveLineNumber, hcDark: deprecatedEditorActiveLineNumber, hcLight: deprecatedEditorActiveLineNumber }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveLineNumber', 'Color of editor active line number'));
const editorDimmedLineNumber = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorLineNumber.dimmedForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorDimmedLineNumber', 'Color of the final editor line when editor.renderFinalNewline is set to dimmed.'));
const editorRuler = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorRuler.foreground', { dark: '#5A5A5A', light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.lightgrey, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorRuler', 'Color of the editor rulers.'));
const editorCodeLensForeground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorCodeLens.foreground', { dark: '#999999', light: '#919191', hcDark: '#999999', hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorCodeLensForeground', 'Foreground color of editor CodeLens'));
const editorBracketMatchBackground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketMatch.background', { dark: '#0064001a', light: '#0064001a', hcDark: '#0064001a', hcLight: '#0000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketMatchBackground', 'Background color behind matching brackets'));
const editorBracketMatchBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketMatch.border', { dark: '#888', light: '#B9B9B9', hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .contrastBorder */ .lRK, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .contrastBorder */ .lRK }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketMatchBorder', 'Color for matching brackets boxes'));
const editorOverviewRulerBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.border', { dark: '#7f7f7f4d', light: '#7f7f7f4d', hcDark: '#7f7f7f4d', hcLight: '#666666' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorOverviewRulerBorder', 'Color of the overview ruler border.'));
const editorOverviewRulerBackground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.background', null, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorOverviewRulerBackground', 'Background color of the editor overview ruler.'));
const editorGutter = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorGutter.background', { dark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBackground */ .cvW, light: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBackground */ .cvW, hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBackground */ .cvW, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBackground */ .cvW }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorGutter', 'Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.'));
const editorUnnecessaryCodeBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorUnnecessaryCode.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#fff').transparent(0.8), hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .contrastBorder */ .lRK }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unnecessaryCodeBorder', 'Border color of unnecessary (unused) source code in the editor.'));
const editorUnnecessaryCodeOpacity = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorUnnecessaryCode.opacity', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000a'), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0007'), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unnecessaryCodeOpacity', 'Opacity of unnecessary (unused) source code in the editor. For example, "#000000c0" will render the code with 75% opacity. For high contrast themes, use the  \'editorUnnecessaryCode.border\' theme color to underline unnecessary code instead of fading it out.'));
const ghostTextBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorGhostText.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#fff').transparent(0.8), hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#292929').transparent(0.8) }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorGhostTextBorder', 'Border color of ghost text in the editor.'));
const ghostTextForeground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorGhostText.foreground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#ffffff56'), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0007'), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorGhostTextForeground', 'Foreground color of the ghost text in the editor.'));
const ghostTextBackground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorGhostText.background', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorGhostTextBackground', 'Background color of the ghost text in the editor.'));
const rulerRangeDefault = new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(0, 122, 204, 0.6));
const overviewRulerRangeHighlight = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.rangeHighlightForeground', { dark: rulerRangeDefault, light: rulerRangeDefault, hcDark: rulerRangeDefault, hcLight: rulerRangeDefault }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('overviewRulerRangeHighlight', 'Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerError = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.errorForeground', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.7)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.7)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 50, 50, 1)), hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('overviewRuleError', 'Overview ruler marker color for errors.'));
const overviewRulerWarning = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.warningForeground', { dark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorWarningForeground */ .uoC, light: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorWarningForeground */ .uoC, hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorWarningBorder */ .pW3, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorWarningBorder */ .pW3 }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('overviewRuleWarning', 'Overview ruler marker color for warnings.'));
const overviewRulerInfo = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorOverviewRuler.infoForeground', { dark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorInfoForeground */ .c63, light: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorInfoForeground */ .c63, hcDark: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorInfoBorder */ .T83, hcLight: _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorInfoBorder */ .T83 }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('overviewRuleInfo', 'Overview ruler marker color for infos.'));
const editorBracketHighlightingForeground1 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground1', { dark: '#FFD700', light: '#0431FAFF', hcDark: '#FFD700', hcLight: '#0431FAFF' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground1', 'Foreground color of brackets (1). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground2 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground2', { dark: '#DA70D6', light: '#319331FF', hcDark: '#DA70D6', hcLight: '#319331FF' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground2', 'Foreground color of brackets (2). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground3 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground3', { dark: '#179FFF', light: '#7B3814FF', hcDark: '#87CEFA', hcLight: '#7B3814FF' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground3', 'Foreground color of brackets (3). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground4 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground4', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground4', 'Foreground color of brackets (4). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground5 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground5', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground5', 'Foreground color of brackets (5). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingForeground6 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.foreground6', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightForeground6', 'Foreground color of brackets (6). Requires enabling bracket pair colorization.'));
const editorBracketHighlightingUnexpectedBracketForeground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketHighlight.unexpectedBracket.foreground', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.8)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.8)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 50, 50, 1)), hcLight: '' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketHighlightUnexpectedBracketForeground', 'Foreground color of unexpected brackets.'));
const editorBracketPairGuideBackground1 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background1', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background1', 'Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground2 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background2', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background2', 'Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground3 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background3', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background3', 'Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground4 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background4', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background4', 'Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground5 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background5', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background5', 'Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.'));
const editorBracketPairGuideBackground6 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.background6', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.background6', 'Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground1 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground1', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground1', 'Background color of active bracket pair guides (1). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground2 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground2', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground2', 'Background color of active bracket pair guides (2). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground3 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground3', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground3', 'Background color of active bracket pair guides (3). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground4 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground4', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground4', 'Background color of active bracket pair guides (4). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground5 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground5', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground5', 'Background color of active bracket pair guides (5). Requires enabling bracket pair guides.'));
const editorBracketPairGuideActiveBackground6 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorBracketPairGuide.activeBackground6', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorBracketPairGuide.activeBackground6', 'Background color of active bracket pair guides (6). Requires enabling bracket pair guides.'));
const editorUnicodeHighlightBorder = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorUnicodeHighlight.border', { dark: '#BD9B03', light: '#CEA33D', hcDark: '#ff0000', hcLight: '#CEA33D' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorUnicodeHighlight.border', 'Border color used to highlight unicode characters.'));
const editorUnicodeHighlightBackground = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorUnicodeHighlight.background', { dark: '#bd9b0326', light: '#cea33d14', hcDark: '#00000000', hcLight: '#cea33d14' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorUnicodeHighlight.background', 'Background color used to highlight unicode characters.'));
// contains all color rules that used to defined in editor/browser/widget/editor.css
(0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .registerThemingParticipant */ .Ic)((theme, collector) => {
    const background = theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBackground */ .cvW);
    const lineHighlight = theme.getColor(editorLineHighlight);
    const imeBackground = (lineHighlight && !lineHighlight.isTransparent() ? lineHighlight : background);
    if (imeBackground) {
        collector.addRule(`.monaco-editor .inputarea.ime-input { background-color: ${imeBackground}; }`);
    }
});


/***/ }),

/***/ 11380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ countEOL; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function countEOL(text) {
    let eolCount = 0;
    let firstLineLength = 0;
    let lastLineStart = 0;
    let eol = 0 /* StringEOL.Unknown */;
    for (let i = 0, len = text.length; i < len; i++) {
        const chr = text.charCodeAt(i);
        if (chr === 13 /* CharCode.CarriageReturn */) {
            if (eolCount === 0) {
                firstLineLength = i;
            }
            eolCount++;
            if (i + 1 < len && text.charCodeAt(i + 1) === 10 /* CharCode.LineFeed */) {
                // \r\n... case
                eol |= 2 /* StringEOL.CRLF */;
                i++; // skip \n
            }
            else {
                // \r... case
                eol |= 3 /* StringEOL.Invalid */;
            }
            lastLineStart = i + 1;
        }
        else if (chr === 10 /* CharCode.LineFeed */) {
            // \n... case
            eol |= 1 /* StringEOL.LF */;
            if (eolCount === 0) {
                firstLineLength = i;
            }
            eolCount++;
            lastLineStart = i + 1;
        }
    }
    if (eolCount === 0) {
        firstLineLength = text.length;
    }
    return [eolCount, firstLineLength, text.length - lastLineStart, eol];
}


/***/ }),

/***/ 20392:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ normalizeIndentation; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21773);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function _normalizeIndentationFromWhitespace(str, indentSize, insertSpaces) {
    let spacesCnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '\t') {
            spacesCnt = _cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.nextIndentTabStop(spacesCnt, indentSize);
        }
        else {
            spacesCnt++;
        }
    }
    let result = '';
    if (!insertSpaces) {
        const tabsCnt = Math.floor(spacesCnt / indentSize);
        spacesCnt = spacesCnt % indentSize;
        for (let i = 0; i < tabsCnt; i++) {
            result += '\t';
        }
    }
    for (let i = 0; i < spacesCnt; i++) {
        result += ' ';
    }
    return result;
}
function normalizeIndentation(str, indentSize, insertSpaces) {
    let firstNonWhitespaceIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .firstNonWhitespaceIndex */ .LC(str);
    if (firstNonWhitespaceIndex === -1) {
        firstNonWhitespaceIndex = str.length;
    }
    return _normalizeIndentationFromWhitespace(str.substring(0, firstNonWhitespaceIndex), indentSize, insertSpaces) + str.substring(firstNonWhitespaceIndex);
}


/***/ }),

/***/ 47599:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ LineRange; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A range of lines (1-based).
 */
class LineRange {
    static fromRange(range) {
        return new LineRange(range.startLineNumber, range.endLineNumber);
    }
    /**
     * @param lineRanges An array of sorted line ranges.
     */
    static joinMany(lineRanges) {
        if (lineRanges.length === 0) {
            return [];
        }
        let result = lineRanges[0];
        for (let i = 1; i < lineRanges.length; i++) {
            result = this.join(result, lineRanges[i]);
        }
        return result;
    }
    /**
     * @param lineRanges1 Must be sorted.
     * @param lineRanges2 Must be sorted.
     */
    static join(lineRanges1, lineRanges2) {
        if (lineRanges1.length === 0) {
            return lineRanges2;
        }
        if (lineRanges2.length === 0) {
            return lineRanges1;
        }
        const result = [];
        let i1 = 0;
        let i2 = 0;
        let current = null;
        while (i1 < lineRanges1.length || i2 < lineRanges2.length) {
            let next = null;
            if (i1 < lineRanges1.length && i2 < lineRanges2.length) {
                const lineRange1 = lineRanges1[i1];
                const lineRange2 = lineRanges2[i2];
                if (lineRange1.startLineNumber < lineRange2.startLineNumber) {
                    next = lineRange1;
                    i1++;
                }
                else {
                    next = lineRange2;
                    i2++;
                }
            }
            else if (i1 < lineRanges1.length) {
                next = lineRanges1[i1];
                i1++;
            }
            else {
                next = lineRanges2[i2];
                i2++;
            }
            if (current === null) {
                current = next;
            }
            else {
                if (current.endLineNumberExclusive >= next.startLineNumber) {
                    // merge
                    current = new LineRange(current.startLineNumber, Math.max(current.endLineNumberExclusive, next.endLineNumberExclusive));
                }
                else {
                    // push
                    result.push(current);
                    current = next;
                }
            }
        }
        if (current !== null) {
            result.push(current);
        }
        return result;
    }
    static ofLength(startLineNumber, length) {
        return new LineRange(startLineNumber, startLineNumber + length);
    }
    constructor(startLineNumber, endLineNumberExclusive) {
        if (startLineNumber > endLineNumberExclusive) {
            throw new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BugIndicatingError */ .he(`startLineNumber ${startLineNumber} cannot be after endLineNumberExclusive ${endLineNumberExclusive}`);
        }
        this.startLineNumber = startLineNumber;
        this.endLineNumberExclusive = endLineNumberExclusive;
    }
    /**
     * Indicates if this line range contains the given line number.
     */
    contains(lineNumber) {
        return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
    }
    /**
     * Indicates if this line range is empty.
     */
    get isEmpty() {
        return this.startLineNumber === this.endLineNumberExclusive;
    }
    /**
     * Moves this line range by the given offset of line numbers.
     */
    delta(offset) {
        return new LineRange(this.startLineNumber + offset, this.endLineNumberExclusive + offset);
    }
    /**
     * The number of lines this line range spans.
     */
    get length() {
        return this.endLineNumberExclusive - this.startLineNumber;
    }
    /**
     * Creates a line range that combines this and the given line range.
     */
    join(other) {
        return new LineRange(Math.min(this.startLineNumber, other.startLineNumber), Math.max(this.endLineNumberExclusive, other.endLineNumberExclusive));
    }
    toString() {
        return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
    }
    /**
     * The resulting range is empty if the ranges do not intersect, but touch.
     * If the ranges don't even touch, the result is undefined.
     */
    intersect(other) {
        const startLineNumber = Math.max(this.startLineNumber, other.startLineNumber);
        const endLineNumberExclusive = Math.min(this.endLineNumberExclusive, other.endLineNumberExclusive);
        if (startLineNumber <= endLineNumberExclusive) {
            return new LineRange(startLineNumber, endLineNumberExclusive);
        }
        return undefined;
    }
    intersectsStrict(other) {
        return this.startLineNumber < other.endLineNumberExclusive && other.startLineNumber < this.endLineNumberExclusive;
    }
    overlapOrTouch(other) {
        return this.startLineNumber <= other.endLineNumberExclusive && other.startLineNumber <= this.endLineNumberExclusive;
    }
    equals(b) {
        return this.startLineNumber === b.startLineNumber && this.endLineNumberExclusive === b.endLineNumberExclusive;
    }
    toInclusiveRange() {
        if (this.isEmpty) {
            return null;
        }
        return new _range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
    }
    toExclusiveRange() {
        return new _range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
    }
}


/***/ }),

/***/ 3039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ OffsetRange; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range of offsets (0-based).
*/
class OffsetRange {
    static addRange(range, sortedRanges) {
        let i = 0;
        while (i < sortedRanges.length && sortedRanges[i].endExclusive < range.start) {
            i++;
        }
        let j = i;
        while (j < sortedRanges.length && sortedRanges[j].start <= range.endExclusive) {
            j++;
        }
        if (i === j) {
            sortedRanges.splice(i, 0, range);
        }
        else {
            const start = Math.min(range.start, sortedRanges[i].start);
            const end = Math.max(range.endExclusive, sortedRanges[j - 1].endExclusive);
            sortedRanges.splice(i, j - i, new OffsetRange(start, end));
        }
    }
    static tryCreate(start, endExclusive) {
        if (start > endExclusive) {
            return undefined;
        }
        return new OffsetRange(start, endExclusive);
    }
    constructor(start, endExclusive) {
        this.start = start;
        this.endExclusive = endExclusive;
        if (start > endExclusive) {
            throw new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BugIndicatingError */ .he(`Invalid range: ${this.toString()}`);
        }
    }
    get isEmpty() {
        return this.start === this.endExclusive;
    }
    delta(offset) {
        return new OffsetRange(this.start + offset, this.endExclusive + offset);
    }
    get length() {
        return this.endExclusive - this.start;
    }
    toString() {
        return `[${this.start}, ${this.endExclusive})`;
    }
    equals(other) {
        return this.start === other.start && this.endExclusive === other.endExclusive;
    }
    containsRange(other) {
        return this.start <= other.start && other.endExclusive <= this.endExclusive;
    }
    /**
     * for all numbers n: range1.contains(n) or range2.contains(n) => range1.join(range2).contains(n)
     * The joined range is the smallest range that contains both ranges.
     */
    join(other) {
        return new OffsetRange(Math.min(this.start, other.start), Math.max(this.endExclusive, other.endExclusive));
    }
    /**
     * for all numbers n: range1.contains(n) and range2.contains(n) <=> range1.intersect(range2).contains(n)
     *
     * The resulting range is empty if the ranges do not intersect, but touch.
     * If the ranges don't even touch, the result is undefined.
     */
    intersect(other) {
        const start = Math.max(this.start, other.start);
        const end = Math.min(this.endExclusive, other.endExclusive);
        if (start <= end) {
            return new OffsetRange(start, end);
        }
        return undefined;
    }
}


/***/ }),

/***/ 13372:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ Position; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A position in the editor.
 */
class Position {
    constructor(lineNumber, column) {
        this.lineNumber = lineNumber;
        this.column = column;
    }
    /**
     * Create a new position from this position.
     *
     * @param newLineNumber new line number
     * @param newColumn new column
     */
    with(newLineNumber = this.lineNumber, newColumn = this.column) {
        if (newLineNumber === this.lineNumber && newColumn === this.column) {
            return this;
        }
        else {
            return new Position(newLineNumber, newColumn);
        }
    }
    /**
     * Derive a new position from this position.
     *
     * @param deltaLineNumber line number delta
     * @param deltaColumn column delta
     */
    delta(deltaLineNumber = 0, deltaColumn = 0) {
        return this.with(this.lineNumber + deltaLineNumber, this.column + deltaColumn);
    }
    /**
     * Test if this position equals other position
     */
    equals(other) {
        return Position.equals(this, other);
    }
    /**
     * Test if position `a` equals position `b`
     */
    static equals(a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.lineNumber === b.lineNumber &&
            a.column === b.column);
    }
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be false.
     */
    isBefore(other) {
        return Position.isBefore(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be false.
     */
    static isBefore(a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column < b.column;
    }
    /**
     * Test if this position is before other position.
     * If the two positions are equal, the result will be true.
     */
    isBeforeOrEqual(other) {
        return Position.isBeforeOrEqual(this, other);
    }
    /**
     * Test if position `a` is before position `b`.
     * If the two positions are equal, the result will be true.
     */
    static isBeforeOrEqual(a, b) {
        if (a.lineNumber < b.lineNumber) {
            return true;
        }
        if (b.lineNumber < a.lineNumber) {
            return false;
        }
        return a.column <= b.column;
    }
    /**
     * A function that compares positions, useful for sorting
     */
    static compare(a, b) {
        const aLineNumber = a.lineNumber | 0;
        const bLineNumber = b.lineNumber | 0;
        if (aLineNumber === bLineNumber) {
            const aColumn = a.column | 0;
            const bColumn = b.column | 0;
            return aColumn - bColumn;
        }
        return aLineNumber - bLineNumber;
    }
    /**
     * Clone this position.
     */
    clone() {
        return new Position(this.lineNumber, this.column);
    }
    /**
     * Convert to a human-readable representation.
     */
    toString() {
        return '(' + this.lineNumber + ',' + this.column + ')';
    }
    // ---
    /**
     * Create a `Position` from an `IPosition`.
     */
    static lift(pos) {
        return new Position(pos.lineNumber, pos.column);
    }
    /**
     * Test if `obj` is an `IPosition`.
     */
    static isIPosition(obj) {
        return (obj
            && (typeof obj.lineNumber === 'number')
            && (typeof obj.column === 'number'));
    }
}


/***/ }),

/***/ 76584:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ Range; }
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13372);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A range in the editor. (startLineNumber,startColumn) is <= (endLineNumber,endColumn)
 */
class Range {
    constructor(startLineNumber, startColumn, endLineNumber, endColumn) {
        if ((startLineNumber > endLineNumber) || (startLineNumber === endLineNumber && startColumn > endColumn)) {
            this.startLineNumber = endLineNumber;
            this.startColumn = endColumn;
            this.endLineNumber = startLineNumber;
            this.endColumn = startColumn;
        }
        else {
            this.startLineNumber = startLineNumber;
            this.startColumn = startColumn;
            this.endLineNumber = endLineNumber;
            this.endColumn = endColumn;
        }
    }
    /**
     * Test if this range is empty.
     */
    isEmpty() {
        return Range.isEmpty(this);
    }
    /**
     * Test if `range` is empty.
     */
    static isEmpty(range) {
        return (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn);
    }
    /**
     * Test if position is in this range. If the position is at the edges, will return true.
     */
    containsPosition(position) {
        return Range.containsPosition(this, position);
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return true.
     */
    static containsPosition(range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
            return false;
        }
        return true;
    }
    /**
     * Test if `position` is in `range`. If the position is at the edges, will return false.
     * @internal
     */
    static strictContainsPosition(range, position) {
        if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
            return false;
        }
        if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
            return false;
        }
        if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
            return false;
        }
        return true;
    }
    /**
     * Test if range is in this range. If the range is equal to this range, will return true.
     */
    containsRange(range) {
        return Range.containsRange(this, range);
    }
    /**
     * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
     */
    static containsRange(range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
            return false;
        }
        return true;
    }
    /**
     * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
     */
    strictContainsRange(range) {
        return Range.strictContainsRange(this, range);
    }
    /**
     * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
     */
    static strictContainsRange(range, otherRange) {
        if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
            return false;
        }
        if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
            return false;
        }
        if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
            return false;
        }
        return true;
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    plusRange(range) {
        return Range.plusRange(this, range);
    }
    /**
     * A reunion of the two ranges.
     * The smallest position will be used as the start point, and the largest one as the end point.
     */
    static plusRange(a, b) {
        let startLineNumber;
        let startColumn;
        let endLineNumber;
        let endColumn;
        if (b.startLineNumber < a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = b.startColumn;
        }
        else if (b.startLineNumber === a.startLineNumber) {
            startLineNumber = b.startLineNumber;
            startColumn = Math.min(b.startColumn, a.startColumn);
        }
        else {
            startLineNumber = a.startLineNumber;
            startColumn = a.startColumn;
        }
        if (b.endLineNumber > a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = b.endColumn;
        }
        else if (b.endLineNumber === a.endLineNumber) {
            endLineNumber = b.endLineNumber;
            endColumn = Math.max(b.endColumn, a.endColumn);
        }
        else {
            endLineNumber = a.endLineNumber;
            endColumn = a.endColumn;
        }
        return new Range(startLineNumber, startColumn, endLineNumber, endColumn);
    }
    /**
     * A intersection of the two ranges.
     */
    intersectRanges(range) {
        return Range.intersectRanges(this, range);
    }
    /**
     * A intersection of the two ranges.
     */
    static intersectRanges(a, b) {
        let resultStartLineNumber = a.startLineNumber;
        let resultStartColumn = a.startColumn;
        let resultEndLineNumber = a.endLineNumber;
        let resultEndColumn = a.endColumn;
        const otherStartLineNumber = b.startLineNumber;
        const otherStartColumn = b.startColumn;
        const otherEndLineNumber = b.endLineNumber;
        const otherEndColumn = b.endColumn;
        if (resultStartLineNumber < otherStartLineNumber) {
            resultStartLineNumber = otherStartLineNumber;
            resultStartColumn = otherStartColumn;
        }
        else if (resultStartLineNumber === otherStartLineNumber) {
            resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
        }
        if (resultEndLineNumber > otherEndLineNumber) {
            resultEndLineNumber = otherEndLineNumber;
            resultEndColumn = otherEndColumn;
        }
        else if (resultEndLineNumber === otherEndLineNumber) {
            resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
        }
        // Check if selection is now empty
        if (resultStartLineNumber > resultEndLineNumber) {
            return null;
        }
        if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
            return null;
        }
        return new Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
    }
    /**
     * Test if this range equals other.
     */
    equalsRange(other) {
        return Range.equalsRange(this, other);
    }
    /**
     * Test if range `a` equals `b`.
     */
    static equalsRange(a, b) {
        if (!a && !b) {
            return true;
        }
        return (!!a &&
            !!b &&
            a.startLineNumber === b.startLineNumber &&
            a.startColumn === b.startColumn &&
            a.endLineNumber === b.endLineNumber &&
            a.endColumn === b.endColumn);
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    getEndPosition() {
        return Range.getEndPosition(this);
    }
    /**
     * Return the end position (which will be after or equal to the start position)
     */
    static getEndPosition(range) {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__/* .Position */ .L(range.endLineNumber, range.endColumn);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    getStartPosition() {
        return Range.getStartPosition(this);
    }
    /**
     * Return the start position (which will be before or equal to the end position)
     */
    static getStartPosition(range) {
        return new _position_js__WEBPACK_IMPORTED_MODULE_0__/* .Position */ .L(range.startLineNumber, range.startColumn);
    }
    /**
     * Transform to a user presentable string representation.
     */
    toString() {
        return '[' + this.startLineNumber + ',' + this.startColumn + ' -> ' + this.endLineNumber + ',' + this.endColumn + ']';
    }
    /**
     * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
     */
    setEndPosition(endLineNumber, endColumn) {
        return new Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
    }
    /**
     * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
     */
    setStartPosition(startLineNumber, startColumn) {
        return new Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
    }
    /**
     * Create a new empty range using this range's start position.
     */
    collapseToStart() {
        return Range.collapseToStart(this);
    }
    /**
     * Create a new empty range using this range's start position.
     */
    static collapseToStart(range) {
        return new Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
    }
    /**
     * Create a new empty range using this range's end position.
     */
    collapseToEnd() {
        return Range.collapseToEnd(this);
    }
    /**
     * Create a new empty range using this range's end position.
     */
    static collapseToEnd(range) {
        return new Range(range.endLineNumber, range.endColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Moves the range by the given amount of lines.
     */
    delta(lineCount) {
        return new Range(this.startLineNumber + lineCount, this.startColumn, this.endLineNumber + lineCount, this.endColumn);
    }
    // ---
    static fromPositions(start, end = start) {
        return new Range(start.lineNumber, start.column, end.lineNumber, end.column);
    }
    static lift(range) {
        if (!range) {
            return null;
        }
        return new Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
    }
    /**
     * Test if `obj` is an `IRange`.
     */
    static isIRange(obj) {
        return (obj
            && (typeof obj.startLineNumber === 'number')
            && (typeof obj.startColumn === 'number')
            && (typeof obj.endLineNumber === 'number')
            && (typeof obj.endColumn === 'number'));
    }
    /**
     * Test if the two ranges are touching in any way.
     */
    static areIntersectingOrTouching(a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    }
    /**
     * Test if the two ranges are intersecting. If the ranges are touching it returns true.
     */
    static areIntersecting(a, b) {
        // Check if `a` is before `b`
        if (a.endLineNumber < b.startLineNumber || (a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn)) {
            return false;
        }
        // Check if `b` is before `a`
        if (b.endLineNumber < a.startLineNumber || (b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn)) {
            return false;
        }
        // These ranges must intersect
        return true;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the startPosition and then on the endPosition
     */
    static compareRangesUsingStarts(a, b) {
        if (a && b) {
            const aStartLineNumber = a.startLineNumber | 0;
            const bStartLineNumber = b.startLineNumber | 0;
            if (aStartLineNumber === bStartLineNumber) {
                const aStartColumn = a.startColumn | 0;
                const bStartColumn = b.startColumn | 0;
                if (aStartColumn === bStartColumn) {
                    const aEndLineNumber = a.endLineNumber | 0;
                    const bEndLineNumber = b.endLineNumber | 0;
                    if (aEndLineNumber === bEndLineNumber) {
                        const aEndColumn = a.endColumn | 0;
                        const bEndColumn = b.endColumn | 0;
                        return aEndColumn - bEndColumn;
                    }
                    return aEndLineNumber - bEndLineNumber;
                }
                return aStartColumn - bStartColumn;
            }
            return aStartLineNumber - bStartLineNumber;
        }
        const aExists = (a ? 1 : 0);
        const bExists = (b ? 1 : 0);
        return aExists - bExists;
    }
    /**
     * A function that compares ranges, useful for sorting ranges
     * It will first compare ranges on the endPosition and then on the startPosition
     */
    static compareRangesUsingEnds(a, b) {
        if (a.endLineNumber === b.endLineNumber) {
            if (a.endColumn === b.endColumn) {
                if (a.startLineNumber === b.startLineNumber) {
                    return a.startColumn - b.startColumn;
                }
                return a.startLineNumber - b.startLineNumber;
            }
            return a.endColumn - b.endColumn;
        }
        return a.endLineNumber - b.endLineNumber;
    }
    /**
     * Test if the range spans multiple lines.
     */
    static spansMultipleLines(range) {
        return range.endLineNumber > range.startLineNumber;
    }
    toJSON() {
        return this;
    }
}


/***/ }),

/***/ 54319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ RGBA8; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * A very VM friendly rgba datastructure.
 * Please don't touch unless you take a look at the IR.
 */
class RGBA8 {
    constructor(r, g, b, a) {
        this._rgba8Brand = undefined;
        this.r = RGBA8._clamp(r);
        this.g = RGBA8._clamp(g);
        this.b = RGBA8._clamp(b);
        this.a = RGBA8._clamp(a);
    }
    equals(other) {
        return (this.r === other.r
            && this.g === other.g
            && this.b === other.b
            && this.a === other.a);
    }
    static _clamp(c) {
        if (c < 0) {
            return 0;
        }
        if (c > 255) {
            return 255;
        }
        return c | 0;
    }
}
RGBA8.Empty = new RGBA8(0, 0, 0, 0);


/***/ }),

/***/ 74980:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ Selection; }
/* harmony export */ });
/* harmony import */ var _position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13372);
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * A selection in the editor.
 * The selection is a range that has an orientation.
 */
class Selection extends _range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e {
    constructor(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn) {
        super(selectionStartLineNumber, selectionStartColumn, positionLineNumber, positionColumn);
        this.selectionStartLineNumber = selectionStartLineNumber;
        this.selectionStartColumn = selectionStartColumn;
        this.positionLineNumber = positionLineNumber;
        this.positionColumn = positionColumn;
    }
    /**
     * Transform to a human-readable representation.
     */
    toString() {
        return '[' + this.selectionStartLineNumber + ',' + this.selectionStartColumn + ' -> ' + this.positionLineNumber + ',' + this.positionColumn + ']';
    }
    /**
     * Test if equals other selection.
     */
    equalsSelection(other) {
        return (Selection.selectionsEqual(this, other));
    }
    /**
     * Test if the two selections are equal.
     */
    static selectionsEqual(a, b) {
        return (a.selectionStartLineNumber === b.selectionStartLineNumber &&
            a.selectionStartColumn === b.selectionStartColumn &&
            a.positionLineNumber === b.positionLineNumber &&
            a.positionColumn === b.positionColumn);
    }
    /**
     * Get directions (LTR or RTL).
     */
    getDirection() {
        if (this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn) {
            return 0 /* SelectionDirection.LTR */;
        }
        return 1 /* SelectionDirection.RTL */;
    }
    /**
     * Create a new selection with a different `positionLineNumber` and `positionColumn`.
     */
    setEndPosition(endLineNumber, endColumn) {
        if (this.getDirection() === 0 /* SelectionDirection.LTR */) {
            return new Selection(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, this.startLineNumber, this.startColumn);
    }
    /**
     * Get the position at `positionLineNumber` and `positionColumn`.
     */
    getPosition() {
        return new _position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(this.positionLineNumber, this.positionColumn);
    }
    /**
     * Get the position at the start of the selection.
    */
    getSelectionStart() {
        return new _position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(this.selectionStartLineNumber, this.selectionStartColumn);
    }
    /**
     * Create a new selection with a different `selectionStartLineNumber` and `selectionStartColumn`.
     */
    setStartPosition(startLineNumber, startColumn) {
        if (this.getDirection() === 0 /* SelectionDirection.LTR */) {
            return new Selection(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
        }
        return new Selection(this.endLineNumber, this.endColumn, startLineNumber, startColumn);
    }
    // ----
    /**
     * Create a `Selection` from one or two positions
     */
    static fromPositions(start, end = start) {
        return new Selection(start.lineNumber, start.column, end.lineNumber, end.column);
    }
    /**
     * Creates a `Selection` from a range, given a direction.
     */
    static fromRange(range, direction) {
        if (direction === 0 /* SelectionDirection.LTR */) {
            return new Selection(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
        }
        else {
            return new Selection(range.endLineNumber, range.endColumn, range.startLineNumber, range.startColumn);
        }
    }
    /**
     * Create a `Selection` from an `ISelection`.
     */
    static liftSelection(sel) {
        return new Selection(sel.selectionStartLineNumber, sel.selectionStartColumn, sel.positionLineNumber, sel.positionColumn);
    }
    /**
     * `a` equals `b`.
     */
    static selectionsArrEqual(a, b) {
        if (a && !b || !a && b) {
            return false;
        }
        if (!a && !b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0, len = a.length; i < len; i++) {
            if (!this.selectionsEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    /**
     * Test if `obj` is an `ISelection`.
     */
    static isISelection(obj) {
        return (obj
            && (typeof obj.selectionStartLineNumber === 'number')
            && (typeof obj.selectionStartColumn === 'number')
            && (typeof obj.positionLineNumber === 'number')
            && (typeof obj.positionColumn === 'number'));
    }
    /**
     * Create with a direction.
     */
    static createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, direction) {
        if (direction === 0 /* SelectionDirection.LTR */) {
            return new Selection(startLineNumber, startColumn, endLineNumber, endColumn);
        }
        return new Selection(endLineNumber, endColumn, startLineNumber, startColumn);
    }
}


/***/ }),

/***/ 28103:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HT: function() { return /* binding */ StringBuilder; },
/* harmony export */   kH: function() { return /* binding */ decodeUTF16LE; },
/* harmony export */   oe: function() { return /* binding */ getPlatformTextDecoder; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94057);
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59654);
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

/***/ 73983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ compressConsecutiveTextChanges; },
/* harmony export */   q: function() { return /* binding */ TextChange; }
/* harmony export */ });
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59654);
/* harmony import */ var _stringBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28103);
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

/***/ 20347:
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

/***/ 80238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ getMapForWordSeparators; }
/* harmony export */ });
/* unused harmony export WordCharacterClassifier */
/* harmony import */ var _characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43332);
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

/***/ 81814:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Af: function() { return /* binding */ DEFAULT_WORD_REGEXP; },
/* harmony export */   eq: function() { return /* binding */ ensureValidWordDefinition; },
/* harmony export */   t2: function() { return /* binding */ getWordAtText; },
/* harmony export */   vu: function() { return /* binding */ USUAL_WORD_SEPARATORS; }
/* harmony export */ });
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64202);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41558);
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