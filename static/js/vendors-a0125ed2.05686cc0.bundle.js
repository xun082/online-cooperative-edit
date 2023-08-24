"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-a0125ed2"],{

/***/ 71887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ CharacterClassifier; },
/* harmony export */   q: function() { return /* binding */ CharacterSet; }
/* harmony export */ });
/* harmony import */ var _base_common_uint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99854);
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

/***/ 7218:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ CursorColumns; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
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
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
     * @see {@link CursorColumns}
     */
    static nextRenderTabStop(visibleColumn, tabSize) {
        return visibleColumn + tabSize - visibleColumn % tabSize;
    }
    /**
     * ATTENTION: This works with 0-based columns (as opposed to the regular 1-based columns)
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

/***/ 54499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ EditOperation; }
/* harmony export */ });
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
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

/***/ 79402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bj: function() { return /* binding */ editorDimmedLineNumber; },
/* harmony export */   CE: function() { return /* binding */ editorBracketHighlightingForeground3; },
/* harmony export */   DS: function() { return /* binding */ editorBracketPairGuideBackground3; },
/* harmony export */   HV: function() { return /* binding */ editorBracketPairGuideActiveBackground5; },
/* harmony export */   H_: function() { return /* binding */ editorIndentGuide3; },
/* harmony export */   Jn: function() { return /* binding */ editorBracketPairGuideBackground5; },
/* harmony export */   Kh: function() { return /* binding */ editorLineHighlight; },
/* harmony export */   L7: function() { return /* binding */ editorBracketPairGuideActiveBackground4; },
/* harmony export */   Mm: function() { return /* binding */ editorLineHighlightBorder; },
/* harmony export */   N8: function() { return /* binding */ editorActiveIndentGuide4; },
/* harmony export */   Qb: function() { return /* binding */ editorBracketPairGuideActiveBackground1; },
/* harmony export */   Re: function() { return /* binding */ overviewRulerWarning; },
/* harmony export */   Tf: function() { return /* binding */ editorIndentGuide2; },
/* harmony export */   To: function() { return /* binding */ editorBracketPairGuideActiveBackground3; },
/* harmony export */   UP: function() { return /* binding */ editorBracketHighlightingForeground4; },
/* harmony export */   Vs: function() { return /* binding */ editorBracketHighlightingForeground2; },
/* harmony export */   Xy: function() { return /* binding */ editorActiveIndentGuide2; },
/* harmony export */   YF: function() { return /* binding */ editorBracketPairGuideBackground6; },
/* harmony export */   cK: function() { return /* binding */ editorActiveIndentGuide3; },
/* harmony export */   dI: function() { return /* binding */ editorWhitespaces; },
/* harmony export */   e9: function() { return /* binding */ editorIndentGuide6; },
/* harmony export */   eS: function() { return /* binding */ overviewRulerInfo; },
/* harmony export */   e_: function() { return /* binding */ editorOverviewRulerBackground; },
/* harmony export */   f9: function() { return /* binding */ editorBracketPairGuideActiveBackground6; },
/* harmony export */   fY: function() { return /* binding */ editorCursorBackground; },
/* harmony export */   gS: function() { return /* binding */ editorIndentGuide1; },
/* harmony export */   h1: function() { return /* binding */ editorIndentGuide4; },
/* harmony export */   hw: function() { return /* binding */ editorLineNumbers; },
/* harmony export */   lK: function() { return /* binding */ overviewRulerError; },
/* harmony export */   lS: function() { return /* binding */ editorBracketPairGuideBackground4; },
/* harmony export */   ll: function() { return /* binding */ editorActiveIndentGuide6; },
/* harmony export */   m$: function() { return /* binding */ editorBracketPairGuideBackground2; },
/* harmony export */   m1: function() { return /* binding */ editorBracketHighlightingForeground6; },
/* harmony export */   m3: function() { return /* binding */ editorBracketPairGuideActiveBackground2; },
/* harmony export */   m9: function() { return /* binding */ overviewRulerRangeHighlight; },
/* harmony export */   n0: function() { return /* binding */ editorCursorForeground; },
/* harmony export */   oV: function() { return /* binding */ editorBracketPairGuideBackground1; },
/* harmony export */   qe: function() { return /* binding */ editorActiveIndentGuide1; },
/* harmony export */   r0: function() { return /* binding */ editorBracketHighlightingForeground5; },
/* harmony export */   ts: function() { return /* binding */ editorBracketHighlightingUnexpectedBracketForeground; },
/* harmony export */   vP: function() { return /* binding */ editorIndentGuide5; },
/* harmony export */   zJ: function() { return /* binding */ editorBracketHighlightingForeground1; },
/* harmony export */   zd: function() { return /* binding */ editorActiveIndentGuide5; },
/* harmony export */   zu: function() { return /* binding */ editorUnnecessaryCodeOpacity; },
/* harmony export */   zw: function() { return /* binding */ editorOverviewRulerBorder; }
/* harmony export */ });
/* unused harmony exports editorRangeHighlight, editorRangeHighlightBorder, editorSymbolHighlight, editorSymbolHighlightBorder, deprecatedEditorIndentGuides, deprecatedEditorActiveIndentGuides, editorActiveLineNumber, editorRuler, editorCodeLensForeground, editorBracketMatchBackground, editorBracketMatchBorder, editorGutter, editorUnnecessaryCodeBorder, ghostTextBorder, ghostTextForeground, ghostTextBackground, editorUnicodeHighlightBorder, editorUnicodeHighlightBackground */
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80757);
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4186);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9732);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26236);
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
const editorLineNumbers = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorLineNumber.foreground', { dark: '#858585', light: '#237893', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorLineNumbers', 'Color of editor line numbers.'));
const deprecatedEditorIndentGuides = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background', { dark: editorWhitespaces, light: editorWhitespaces, hcDark: editorWhitespaces, hcLight: editorWhitespaces }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides', 'Color of the editor indentation guides.'), false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('deprecatedEditorIndentGuides', '\'editorIndentGuide.background\' is deprecated. Use \'editorIndentGuide.background1\' instead.'));
const deprecatedEditorActiveIndentGuides = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground', { dark: editorWhitespaces, light: editorWhitespaces, hcDark: editorWhitespaces, hcLight: editorWhitespaces }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide', 'Color of the active editor indentation guides.'), false, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('deprecatedEditorActiveIndentGuide', '\'editorIndentGuide.activeBackground\' is deprecated. Use \'editorIndentGuide.activeBackground1\' instead.'));
const editorIndentGuide1 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background1', { dark: deprecatedEditorIndentGuides, light: deprecatedEditorIndentGuides, hcDark: deprecatedEditorIndentGuides, hcLight: deprecatedEditorIndentGuides }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides1', 'Color of the editor indentation guides (1).'));
const editorIndentGuide2 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background2', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides2', 'Color of the editor indentation guides (2).'));
const editorIndentGuide3 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background3', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides3', 'Color of the editor indentation guides (3).'));
const editorIndentGuide4 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background4', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides4', 'Color of the editor indentation guides (4).'));
const editorIndentGuide5 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background5', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides5', 'Color of the editor indentation guides (5).'));
const editorIndentGuide6 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.background6', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorIndentGuides6', 'Color of the editor indentation guides (6).'));
const editorActiveIndentGuide1 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground1', { dark: deprecatedEditorActiveIndentGuides, light: deprecatedEditorActiveIndentGuides, hcDark: deprecatedEditorActiveIndentGuides, hcLight: deprecatedEditorActiveIndentGuides }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide1', 'Color of the active editor indentation guides (1).'));
const editorActiveIndentGuide2 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground2', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide2', 'Color of the active editor indentation guides (2).'));
const editorActiveIndentGuide3 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground3', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide3', 'Color of the active editor indentation guides (3).'));
const editorActiveIndentGuide4 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground4', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide4', 'Color of the active editor indentation guides (4).'));
const editorActiveIndentGuide5 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground5', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide5', 'Color of the active editor indentation guides (5).'));
const editorActiveIndentGuide6 = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .registerColor */ .P6G)('editorIndentGuide.activeBackground6', { dark: '#00000000', light: '#00000000', hcDark: '#00000000', hcLight: '#00000000' }, _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorActiveIndentGuide6', 'Color of the active editor indentation guides (6).'));
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

/***/ 25099:
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

/***/ 28558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ normalizeIndentation; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7218);
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

/***/ 23706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ LineRange; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25702);
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3981);
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
    static subtract(a, b) {
        if (!b) {
            return [a];
        }
        if (a.startLineNumber < b.startLineNumber && b.endLineNumberExclusive < a.endLineNumberExclusive) {
            return [
                new LineRange(a.startLineNumber, b.startLineNumber),
                new LineRange(b.endLineNumberExclusive, a.endLineNumberExclusive)
            ];
        }
        else if (b.startLineNumber <= a.startLineNumber && a.endLineNumberExclusive <= b.endLineNumberExclusive) {
            return [];
        }
        else if (b.endLineNumberExclusive < a.endLineNumberExclusive) {
            return [new LineRange(Math.max(b.endLineNumberExclusive, a.startLineNumber), a.endLineNumberExclusive)];
        }
        else {
            return [new LineRange(a.startLineNumber, Math.min(b.startLineNumber, a.endLineNumberExclusive))];
        }
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
    /**
     * @internal
     */
    static deserialize(lineRange) {
        return new LineRange(lineRange[0], lineRange[1]);
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
    mapToLineArray(f) {
        const result = [];
        for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
            result.push(f(lineNumber));
        }
        return result;
    }
    forEach(f) {
        for (let lineNumber = this.startLineNumber; lineNumber < this.endLineNumberExclusive; lineNumber++) {
            f(lineNumber);
        }
    }
    /**
     * @internal
     */
    serialize() {
        return [this.startLineNumber, this.endLineNumberExclusive];
    }
    includes(lineNumber) {
        return this.startLineNumber <= lineNumber && lineNumber < this.endLineNumberExclusive;
    }
}


/***/ }),

/***/ 90342:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ OffsetRange; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25702);
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
    contains(offset) {
        return this.start <= offset && offset < this.endExclusive;
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


/***/ })

}]);