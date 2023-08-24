"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-f0f55b6e"],{

/***/ 46871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OY: function() { return /* binding */ ReplaceCommandThatSelectsText; },
/* harmony export */   Sj: function() { return /* binding */ ReplaceCommandWithoutChangingPosition; },
/* harmony export */   T4: function() { return /* binding */ ReplaceCommand; },
/* harmony export */   Uo: function() { return /* binding */ ReplaceCommandWithOffsetCursorState; },
/* harmony export */   hP: function() { return /* binding */ ReplaceCommandThatPreservesSelection; }
/* harmony export */ });
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2257);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ReplaceCommand {
    constructor(range, text, insertsAutoWhitespace = false) {
        this._range = range;
        this._text = text;
        this.insertsAutoWhitespace = insertsAutoWhitespace;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const srcRange = inverseEditOperations[0].range;
        return _core_selection_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y.fromPositions(srcRange.getEndPosition());
    }
}
class ReplaceCommandThatSelectsText {
    constructor(range, text) {
        this._range = range;
        this._text = text;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const srcRange = inverseEditOperations[0].range;
        return _core_selection_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y.fromRange(srcRange, 0 /* SelectionDirection.LTR */);
    }
}
class ReplaceCommandWithoutChangingPosition {
    constructor(range, text, insertsAutoWhitespace = false) {
        this._range = range;
        this._text = text;
        this.insertsAutoWhitespace = insertsAutoWhitespace;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const srcRange = inverseEditOperations[0].range;
        return _core_selection_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y.fromPositions(srcRange.getStartPosition());
    }
}
class ReplaceCommandWithOffsetCursorState {
    constructor(range, text, lineNumberDeltaOffset, columnDeltaOffset, insertsAutoWhitespace = false) {
        this._range = range;
        this._text = text;
        this._columnDeltaOffset = columnDeltaOffset;
        this._lineNumberDeltaOffset = lineNumberDeltaOffset;
        this.insertsAutoWhitespace = insertsAutoWhitespace;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const srcRange = inverseEditOperations[0].range;
        return _core_selection_js__WEBPACK_IMPORTED_MODULE_0__/* .Selection */ .Y.fromPositions(srcRange.getEndPosition().delta(this._lineNumberDeltaOffset, this._columnDeltaOffset));
    }
}
class ReplaceCommandThatPreservesSelection {
    constructor(editRange, text, initialSelection, forceMoveMarkers = false) {
        this._range = editRange;
        this._text = text;
        this._initialSelection = initialSelection;
        this._forceMoveMarkers = forceMoveMarkers;
        this._selectionId = null;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._range, this._text, this._forceMoveMarkers);
        this._selectionId = builder.trackSelection(this._initialSelection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this._selectionId);
    }
}


/***/ }),

/***/ 69239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ ShiftCommand; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7218);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3981);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2257);
/* harmony import */ var _languages_enterAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9635);
/* harmony import */ var _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30766);
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






const repeatCache = Object.create(null);
function cachedStringRepeat(str, count) {
    if (count <= 0) {
        return '';
    }
    if (!repeatCache[str]) {
        repeatCache[str] = ['', str];
    }
    const cache = repeatCache[str];
    for (let i = cache.length; i <= count; i++) {
        cache[i] = cache[i - 1] + str;
    }
    return cache[count];
}
let ShiftCommand = class ShiftCommand {
    static unshiftIndent(line, column, tabSize, indentSize, insertSpaces) {
        // Determine the visible column where the content starts
        const contentStartVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(line, column, tabSize);
        if (insertSpaces) {
            const indent = cachedStringRepeat(' ', indentSize);
            const desiredTabStop = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.prevIndentTabStop(contentStartVisibleColumn, indentSize);
            const indentCount = desiredTabStop / indentSize; // will be an integer
            return cachedStringRepeat(indent, indentCount);
        }
        else {
            const indent = '\t';
            const desiredTabStop = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.prevRenderTabStop(contentStartVisibleColumn, tabSize);
            const indentCount = desiredTabStop / tabSize; // will be an integer
            return cachedStringRepeat(indent, indentCount);
        }
    }
    static shiftIndent(line, column, tabSize, indentSize, insertSpaces) {
        // Determine the visible column where the content starts
        const contentStartVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(line, column, tabSize);
        if (insertSpaces) {
            const indent = cachedStringRepeat(' ', indentSize);
            const desiredTabStop = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.nextIndentTabStop(contentStartVisibleColumn, indentSize);
            const indentCount = desiredTabStop / indentSize; // will be an integer
            return cachedStringRepeat(indent, indentCount);
        }
        else {
            const indent = '\t';
            const desiredTabStop = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.nextRenderTabStop(contentStartVisibleColumn, tabSize);
            const indentCount = desiredTabStop / tabSize; // will be an integer
            return cachedStringRepeat(indent, indentCount);
        }
    }
    constructor(range, opts, _languageConfigurationService) {
        this._languageConfigurationService = _languageConfigurationService;
        this._opts = opts;
        this._selection = range;
        this._selectionId = null;
        this._useLastEditRangeForCursorEndPosition = false;
        this._selectionStartColumnStaysPut = false;
    }
    _addEditOperation(builder, range, text) {
        if (this._useLastEditRangeForCursorEndPosition) {
            builder.addTrackedEditOperation(range, text);
        }
        else {
            builder.addEditOperation(range, text);
        }
    }
    getEditOperations(model, builder) {
        const startLine = this._selection.startLineNumber;
        let endLine = this._selection.endLineNumber;
        if (this._selection.endColumn === 1 && startLine !== endLine) {
            endLine = endLine - 1;
        }
        const { tabSize, indentSize, insertSpaces } = this._opts;
        const shouldIndentEmptyLines = (startLine === endLine);
        if (this._opts.useTabStops) {
            // if indenting or outdenting on a whitespace only line
            if (this._selection.isEmpty()) {
                if (/^\s*$/.test(model.getLineContent(startLine))) {
                    this._useLastEditRangeForCursorEndPosition = true;
                }
            }
            // keep track of previous line's "miss-alignment"
            let previousLineExtraSpaces = 0, extraSpaces = 0;
            for (let lineNumber = startLine; lineNumber <= endLine; lineNumber++, previousLineExtraSpaces = extraSpaces) {
                extraSpaces = 0;
                const lineText = model.getLineContent(lineNumber);
                let indentationEndIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .firstNonWhitespaceIndex */ .LC(lineText);
                if (this._opts.isUnshift && (lineText.length === 0 || indentationEndIndex === 0)) {
                    // empty line or line with no leading whitespace => nothing to do
                    continue;
                }
                if (!shouldIndentEmptyLines && !this._opts.isUnshift && lineText.length === 0) {
                    // do not indent empty lines => nothing to do
                    continue;
                }
                if (indentationEndIndex === -1) {
                    // the entire line is whitespace
                    indentationEndIndex = lineText.length;
                }
                if (lineNumber > 1) {
                    const contentStartVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(lineText, indentationEndIndex + 1, tabSize);
                    if (contentStartVisibleColumn % indentSize !== 0) {
                        // The current line is "miss-aligned", so let's see if this is expected...
                        // This can only happen when it has trailing commas in the indent
                        if (model.tokenization.isCheapToTokenize(lineNumber - 1)) {
                            const enterAction = (0,_languages_enterAction_js__WEBPACK_IMPORTED_MODULE_2__/* .getEnterAction */ .A)(this._opts.autoIndent, model, new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber - 1, model.getLineMaxColumn(lineNumber - 1), lineNumber - 1, model.getLineMaxColumn(lineNumber - 1)), this._languageConfigurationService);
                            if (enterAction) {
                                extraSpaces = previousLineExtraSpaces;
                                if (enterAction.appendText) {
                                    for (let j = 0, lenJ = enterAction.appendText.length; j < lenJ && extraSpaces < indentSize; j++) {
                                        if (enterAction.appendText.charCodeAt(j) === 32 /* CharCode.Space */) {
                                            extraSpaces++;
                                        }
                                        else {
                                            break;
                                        }
                                    }
                                }
                                if (enterAction.removeText) {
                                    extraSpaces = Math.max(0, extraSpaces - enterAction.removeText);
                                }
                                // Act as if `prefixSpaces` is not part of the indentation
                                for (let j = 0; j < extraSpaces; j++) {
                                    if (indentationEndIndex === 0 || lineText.charCodeAt(indentationEndIndex - 1) !== 32 /* CharCode.Space */) {
                                        break;
                                    }
                                    indentationEndIndex--;
                                }
                            }
                        }
                    }
                }
                if (this._opts.isUnshift && indentationEndIndex === 0) {
                    // line with no leading whitespace => nothing to do
                    continue;
                }
                let desiredIndent;
                if (this._opts.isUnshift) {
                    desiredIndent = ShiftCommand.unshiftIndent(lineText, indentationEndIndex + 1, tabSize, indentSize, insertSpaces);
                }
                else {
                    desiredIndent = ShiftCommand.shiftIndent(lineText, indentationEndIndex + 1, tabSize, indentSize, insertSpaces);
                }
                this._addEditOperation(builder, new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber, 1, lineNumber, indentationEndIndex + 1), desiredIndent);
                if (lineNumber === startLine && !this._selection.isEmpty()) {
                    // Force the startColumn to stay put because we're inserting after it
                    this._selectionStartColumnStaysPut = (this._selection.startColumn <= indentationEndIndex + 1);
                }
            }
        }
        else {
            // if indenting or outdenting on a whitespace only line
            if (!this._opts.isUnshift && this._selection.isEmpty() && model.getLineLength(startLine) === 0) {
                this._useLastEditRangeForCursorEndPosition = true;
            }
            const oneIndent = (insertSpaces ? cachedStringRepeat(' ', indentSize) : '\t');
            for (let lineNumber = startLine; lineNumber <= endLine; lineNumber++) {
                const lineText = model.getLineContent(lineNumber);
                let indentationEndIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .firstNonWhitespaceIndex */ .LC(lineText);
                if (this._opts.isUnshift && (lineText.length === 0 || indentationEndIndex === 0)) {
                    // empty line or line with no leading whitespace => nothing to do
                    continue;
                }
                if (!shouldIndentEmptyLines && !this._opts.isUnshift && lineText.length === 0) {
                    // do not indent empty lines => nothing to do
                    continue;
                }
                if (indentationEndIndex === -1) {
                    // the entire line is whitespace
                    indentationEndIndex = lineText.length;
                }
                if (this._opts.isUnshift && indentationEndIndex === 0) {
                    // line with no leading whitespace => nothing to do
                    continue;
                }
                if (this._opts.isUnshift) {
                    indentationEndIndex = Math.min(indentationEndIndex, indentSize);
                    for (let i = 0; i < indentationEndIndex; i++) {
                        const chr = lineText.charCodeAt(i);
                        if (chr === 9 /* CharCode.Tab */) {
                            indentationEndIndex = i + 1;
                            break;
                        }
                    }
                    this._addEditOperation(builder, new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber, 1, lineNumber, indentationEndIndex + 1), '');
                }
                else {
                    this._addEditOperation(builder, new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber, 1, lineNumber, 1), oneIndent);
                    if (lineNumber === startLine && !this._selection.isEmpty()) {
                        // Force the startColumn to stay put because we're inserting after it
                        this._selectionStartColumnStaysPut = (this._selection.startColumn === 1);
                    }
                }
            }
        }
        this._selectionId = builder.trackSelection(this._selection);
    }
    computeCursorState(model, helper) {
        if (this._useLastEditRangeForCursorEndPosition) {
            const lastOp = helper.getInverseEditOperations()[0];
            return new _core_selection_js__WEBPACK_IMPORTED_MODULE_5__/* .Selection */ .Y(lastOp.range.endLineNumber, lastOp.range.endColumn, lastOp.range.endLineNumber, lastOp.range.endColumn);
        }
        const result = helper.getTrackedSelection(this._selectionId);
        if (this._selectionStartColumnStaysPut) {
            // The selection start should not move
            const initialStartColumn = this._selection.startColumn;
            const resultStartColumn = result.startColumn;
            if (resultStartColumn <= initialStartColumn) {
                return result;
            }
            if (result.getDirection() === 0 /* SelectionDirection.LTR */) {
                return new _core_selection_js__WEBPACK_IMPORTED_MODULE_5__/* .Selection */ .Y(result.startLineNumber, initialStartColumn, result.endLineNumber, result.endColumn);
            }
            return new _core_selection_js__WEBPACK_IMPORTED_MODULE_5__/* .Selection */ .Y(result.endLineNumber, result.endColumn, result.startLineNumber, initialStartColumn);
        }
        return result;
    }
};
ShiftCommand = __decorate([
    __param(2, _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .ILanguageConfigurationService */ .c_)
], ShiftCommand);



/***/ }),

/***/ 58334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ SurroundSelectionCommand; },
/* harmony export */   K: function() { return /* binding */ CompositionSurroundSelectionCommand; }
/* harmony export */ });
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3981);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2257);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class SurroundSelectionCommand {
    constructor(range, charBeforeSelection, charAfterSelection) {
        this._range = range;
        this._charBeforeSelection = charBeforeSelection;
        this._charAfterSelection = charAfterSelection;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection);
        builder.addTrackedEditOperation(new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const firstOperationRange = inverseEditOperations[0].range;
        const secondOperationRange = inverseEditOperations[1].range;
        return new _core_selection_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y(firstOperationRange.endLineNumber, firstOperationRange.endColumn, secondOperationRange.endLineNumber, secondOperationRange.endColumn - this._charAfterSelection.length);
    }
}
/**
 * A surround selection command that runs after composition finished.
 */
class CompositionSurroundSelectionCommand {
    constructor(_position, _text, _charAfter) {
        this._position = _position;
        this._text = _text;
        this._charAfter = _charAfter;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(new _core_range_js__WEBPACK_IMPORTED_MODULE_0__/* .Range */ .e(this._position.lineNumber, this._position.column, this._position.lineNumber, this._position.column), this._text + this._charAfter);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const opRange = inverseEditOperations[0].range;
        return new _core_selection_js__WEBPACK_IMPORTED_MODULE_1__/* .Selection */ .Y(opRange.endLineNumber, opRange.startColumn, opRange.endLineNumber, opRange.endColumn - this._charAfter.length);
    }
}


/***/ }),

/***/ 75322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ TrimTrailingWhitespaceCommand; }
/* harmony export */ });
/* unused harmony export trimTrailingWhitespace */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_editOperation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54499);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class TrimTrailingWhitespaceCommand {
    constructor(selection, cursors) {
        this._selection = selection;
        this._cursors = cursors;
        this._selectionId = null;
    }
    getEditOperations(model, builder) {
        const ops = trimTrailingWhitespace(model, this._cursors);
        for (let i = 0, len = ops.length; i < len; i++) {
            const op = ops[i];
            builder.addEditOperation(op.range, op.text);
        }
        this._selectionId = builder.trackSelection(this._selection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this._selectionId);
    }
}
/**
 * Generate commands for trimming trailing whitespace on a model and ignore lines on which cursors are sitting.
 */
function trimTrailingWhitespace(model, cursors) {
    // Sort cursors ascending
    cursors.sort((a, b) => {
        if (a.lineNumber === b.lineNumber) {
            return a.column - b.column;
        }
        return a.lineNumber - b.lineNumber;
    });
    // Reduce multiple cursors on the same line and only keep the last one on the line
    for (let i = cursors.length - 2; i >= 0; i--) {
        if (cursors[i].lineNumber === cursors[i + 1].lineNumber) {
            // Remove cursor at `i`
            cursors.splice(i, 1);
        }
    }
    const r = [];
    let rLen = 0;
    let cursorIndex = 0;
    const cursorLen = cursors.length;
    for (let lineNumber = 1, lineCount = model.getLineCount(); lineNumber <= lineCount; lineNumber++) {
        const lineContent = model.getLineContent(lineNumber);
        const maxLineColumn = lineContent.length + 1;
        let minEditColumn = 0;
        if (cursorIndex < cursorLen && cursors[cursorIndex].lineNumber === lineNumber) {
            minEditColumn = cursors[cursorIndex].column;
            cursorIndex++;
            if (minEditColumn === maxLineColumn) {
                // The cursor is at the end of the line => no edits for sure on this line
                continue;
            }
        }
        if (lineContent.length === 0) {
            continue;
        }
        const lastNonWhitespaceIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .lastNonWhitespaceIndex */ .ow(lineContent);
        let fromColumn = 0;
        if (lastNonWhitespaceIndex === -1) {
            // Entire line is whitespace
            fromColumn = 1;
        }
        else if (lastNonWhitespaceIndex !== lineContent.length - 1) {
            // There is trailing whitespace
            fromColumn = lastNonWhitespaceIndex + 2;
        }
        else {
            // There is no trailing whitespace
            continue;
        }
        fromColumn = Math.max(minEditColumn, fromColumn);
        r[rLen++] = _core_editOperation_js__WEBPACK_IMPORTED_MODULE_1__/* .EditOperation */ .h.delete(new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineNumber, fromColumn, lineNumber, maxLineColumn));
    }
    return r;
}


/***/ })

}]);