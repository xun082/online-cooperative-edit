"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-f721481f"],{

/***/ 78203:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LM: function() { return /* binding */ CursorConfiguration; },
/* harmony export */   LN: function() { return /* binding */ isQuote; },
/* harmony export */   Tp: function() { return /* binding */ EditOperationResult; },
/* harmony export */   Vi: function() { return /* binding */ CursorState; },
/* harmony export */   rS: function() { return /* binding */ SingleCursorState; }
/* harmony export */ });
/* unused harmony exports PartialModelCursorState, PartialViewCursorState */
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3981);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2257);
/* harmony import */ var _languages_supports_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85377);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7218);
/* harmony import */ var _core_indentation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28558);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const autoCloseAlways = () => true;
const autoCloseNever = () => false;
const autoCloseBeforeWhitespace = (chr) => (chr === ' ' || chr === '\t');
class CursorConfiguration {
    static shouldRecreate(e) {
        return (e.hasChanged(142 /* EditorOption.layoutInfo */)
            || e.hasChanged(128 /* EditorOption.wordSeparators */)
            || e.hasChanged(36 /* EditorOption.emptySelectionClipboard */)
            || e.hasChanged(75 /* EditorOption.multiCursorMergeOverlapping */)
            || e.hasChanged(77 /* EditorOption.multiCursorPaste */)
            || e.hasChanged(78 /* EditorOption.multiCursorLimit */)
            || e.hasChanged(6 /* EditorOption.autoClosingBrackets */)
            || e.hasChanged(10 /* EditorOption.autoClosingQuotes */)
            || e.hasChanged(8 /* EditorOption.autoClosingDelete */)
            || e.hasChanged(9 /* EditorOption.autoClosingOvertype */)
            || e.hasChanged(13 /* EditorOption.autoSurround */)
            || e.hasChanged(126 /* EditorOption.useTabStops */)
            || e.hasChanged(49 /* EditorOption.fontInfo */)
            || e.hasChanged(89 /* EditorOption.readOnly */));
    }
    constructor(languageId, modelOptions, configuration, languageConfigurationService) {
        this.languageConfigurationService = languageConfigurationService;
        this._cursorMoveConfigurationBrand = undefined;
        this._languageId = languageId;
        const options = configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        const fontInfo = options.get(49 /* EditorOption.fontInfo */);
        this.readOnly = options.get(89 /* EditorOption.readOnly */);
        this.tabSize = modelOptions.tabSize;
        this.indentSize = modelOptions.indentSize;
        this.insertSpaces = modelOptions.insertSpaces;
        this.stickyTabStops = options.get(114 /* EditorOption.stickyTabStops */);
        this.lineHeight = fontInfo.lineHeight;
        this.typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        this.pageSize = Math.max(1, Math.floor(layoutInfo.height / this.lineHeight) - 2);
        this.useTabStops = options.get(126 /* EditorOption.useTabStops */);
        this.wordSeparators = options.get(128 /* EditorOption.wordSeparators */);
        this.emptySelectionClipboard = options.get(36 /* EditorOption.emptySelectionClipboard */);
        this.copyWithSyntaxHighlighting = options.get(24 /* EditorOption.copyWithSyntaxHighlighting */);
        this.multiCursorMergeOverlapping = options.get(75 /* EditorOption.multiCursorMergeOverlapping */);
        this.multiCursorPaste = options.get(77 /* EditorOption.multiCursorPaste */);
        this.multiCursorLimit = options.get(78 /* EditorOption.multiCursorLimit */);
        this.autoClosingBrackets = options.get(6 /* EditorOption.autoClosingBrackets */);
        this.autoClosingQuotes = options.get(10 /* EditorOption.autoClosingQuotes */);
        this.autoClosingDelete = options.get(8 /* EditorOption.autoClosingDelete */);
        this.autoClosingOvertype = options.get(9 /* EditorOption.autoClosingOvertype */);
        this.autoSurround = options.get(13 /* EditorOption.autoSurround */);
        this.autoIndent = options.get(11 /* EditorOption.autoIndent */);
        this.surroundingPairs = {};
        this._electricChars = null;
        this.shouldAutoCloseBefore = {
            quote: this._getShouldAutoClose(languageId, this.autoClosingQuotes, true),
            bracket: this._getShouldAutoClose(languageId, this.autoClosingBrackets, false)
        };
        this.autoClosingPairs = this.languageConfigurationService.getLanguageConfiguration(languageId).getAutoClosingPairs();
        const surroundingPairs = this.languageConfigurationService.getLanguageConfiguration(languageId).getSurroundingPairs();
        if (surroundingPairs) {
            for (const pair of surroundingPairs) {
                this.surroundingPairs[pair.open] = pair.close;
            }
        }
    }
    get electricChars() {
        var _a;
        if (!this._electricChars) {
            this._electricChars = {};
            const electricChars = (_a = this.languageConfigurationService.getLanguageConfiguration(this._languageId).electricCharacter) === null || _a === void 0 ? void 0 : _a.getElectricCharacters();
            if (electricChars) {
                for (const char of electricChars) {
                    this._electricChars[char] = true;
                }
            }
        }
        return this._electricChars;
    }
    /**
     * Should return opening bracket type to match indentation with
     */
    onElectricCharacter(character, context, column) {
        const scopedLineTokens = (0,_languages_supports_js__WEBPACK_IMPORTED_MODULE_2__/* .createScopedLineTokens */ .wH)(context, column - 1);
        const electricCharacterSupport = this.languageConfigurationService.getLanguageConfiguration(scopedLineTokens.languageId).electricCharacter;
        if (!electricCharacterSupport) {
            return null;
        }
        return electricCharacterSupport.onElectricCharacter(character, scopedLineTokens, column - scopedLineTokens.firstCharOffset);
    }
    normalizeIndentation(str) {
        return (0,_core_indentation_js__WEBPACK_IMPORTED_MODULE_1__/* .normalizeIndentation */ .x)(str, this.indentSize, this.insertSpaces);
    }
    _getShouldAutoClose(languageId, autoCloseConfig, forQuotes) {
        switch (autoCloseConfig) {
            case 'beforeWhitespace':
                return autoCloseBeforeWhitespace;
            case 'languageDefined':
                return this._getLanguageDefinedShouldAutoClose(languageId, forQuotes);
            case 'always':
                return autoCloseAlways;
            case 'never':
                return autoCloseNever;
        }
    }
    _getLanguageDefinedShouldAutoClose(languageId, forQuotes) {
        const autoCloseBeforeSet = this.languageConfigurationService.getLanguageConfiguration(languageId).getAutoCloseBeforeSet(forQuotes);
        return c => autoCloseBeforeSet.indexOf(c) !== -1;
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    visibleColumnFromColumn(model, position) {
        return _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.visibleColumnFromColumn(model.getLineContent(position.lineNumber), position.column, this.tabSize);
    }
    /**
     * Returns a visible column from a column.
     * @see {@link CursorColumns}
     */
    columnFromVisibleColumn(model, lineNumber, visibleColumn) {
        const result = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.columnFromVisibleColumn(model.getLineContent(lineNumber), visibleColumn, this.tabSize);
        const minColumn = model.getLineMinColumn(lineNumber);
        if (result < minColumn) {
            return minColumn;
        }
        const maxColumn = model.getLineMaxColumn(lineNumber);
        if (result > maxColumn) {
            return maxColumn;
        }
        return result;
    }
}
class CursorState {
    static fromModelState(modelState) {
        return new PartialModelCursorState(modelState);
    }
    static fromViewState(viewState) {
        return new PartialViewCursorState(viewState);
    }
    static fromModelSelection(modelSelection) {
        const selection = _core_selection_js__WEBPACK_IMPORTED_MODULE_3__/* .Selection */ .Y.liftSelection(modelSelection);
        const modelState = new SingleCursorState(_core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e.fromPositions(selection.getSelectionStart()), 0 /* SelectionStartKind.Simple */, 0, selection.getPosition(), 0);
        return CursorState.fromModelState(modelState);
    }
    static fromModelSelections(modelSelections) {
        const states = [];
        for (let i = 0, len = modelSelections.length; i < len; i++) {
            states[i] = this.fromModelSelection(modelSelections[i]);
        }
        return states;
    }
    constructor(modelState, viewState) {
        this._cursorStateBrand = undefined;
        this.modelState = modelState;
        this.viewState = viewState;
    }
    equals(other) {
        return (this.viewState.equals(other.viewState) && this.modelState.equals(other.modelState));
    }
}
class PartialModelCursorState {
    constructor(modelState) {
        this.modelState = modelState;
        this.viewState = null;
    }
}
class PartialViewCursorState {
    constructor(viewState) {
        this.modelState = null;
        this.viewState = viewState;
    }
}
/**
 * Represents the cursor state on either the model or on the view model.
 */
class SingleCursorState {
    constructor(selectionStart, selectionStartKind, selectionStartLeftoverVisibleColumns, position, leftoverVisibleColumns) {
        this.selectionStart = selectionStart;
        this.selectionStartKind = selectionStartKind;
        this.selectionStartLeftoverVisibleColumns = selectionStartLeftoverVisibleColumns;
        this.position = position;
        this.leftoverVisibleColumns = leftoverVisibleColumns;
        this._singleCursorStateBrand = undefined;
        this.selection = SingleCursorState._computeSelection(this.selectionStart, this.position);
    }
    equals(other) {
        return (this.selectionStartLeftoverVisibleColumns === other.selectionStartLeftoverVisibleColumns
            && this.leftoverVisibleColumns === other.leftoverVisibleColumns
            && this.selectionStartKind === other.selectionStartKind
            && this.position.equals(other.position)
            && this.selectionStart.equalsRange(other.selectionStart));
    }
    hasSelection() {
        return (!this.selection.isEmpty() || !this.selectionStart.isEmpty());
    }
    move(inSelectionMode, lineNumber, column, leftoverVisibleColumns) {
        if (inSelectionMode) {
            // move just position
            return new SingleCursorState(this.selectionStart, this.selectionStartKind, this.selectionStartLeftoverVisibleColumns, new _core_position_js__WEBPACK_IMPORTED_MODULE_5__/* .Position */ .L(lineNumber, column), leftoverVisibleColumns);
        }
        else {
            // move everything
            return new SingleCursorState(new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber, column, lineNumber, column), 0 /* SelectionStartKind.Simple */, leftoverVisibleColumns, new _core_position_js__WEBPACK_IMPORTED_MODULE_5__/* .Position */ .L(lineNumber, column), leftoverVisibleColumns);
        }
    }
    static _computeSelection(selectionStart, position) {
        if (selectionStart.isEmpty() || !position.isBeforeOrEqual(selectionStart.getStartPosition())) {
            return _core_selection_js__WEBPACK_IMPORTED_MODULE_3__/* .Selection */ .Y.fromPositions(selectionStart.getStartPosition(), position);
        }
        else {
            return _core_selection_js__WEBPACK_IMPORTED_MODULE_3__/* .Selection */ .Y.fromPositions(selectionStart.getEndPosition(), position);
        }
    }
}
class EditOperationResult {
    constructor(type, commands, opts) {
        this._editOperationResultBrand = undefined;
        this.type = type;
        this.commands = commands;
        this.shouldPushStackElementBefore = opts.shouldPushStackElementBefore;
        this.shouldPushStackElementAfter = opts.shouldPushStackElementAfter;
    }
}
function isQuote(ch) {
    return (ch === '\'' || ch === '"' || ch === '`');
}


/***/ }),

/***/ 48275:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ AtomicTabMoveOperations; }
/* harmony export */ });
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7218);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class AtomicTabMoveOperations {
    /**
     * Get the visible column at the position. If we get to a non-whitespace character first
     * or past the end of string then return -1.
     *
     * **Note** `position` and the return value are 0-based.
     */
    static whitespaceVisibleColumn(lineContent, position, tabSize) {
        const lineLength = lineContent.length;
        let visibleColumn = 0;
        let prevTabStopPosition = -1;
        let prevTabStopVisibleColumn = -1;
        for (let i = 0; i < lineLength; i++) {
            if (i === position) {
                return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
            }
            if (visibleColumn % tabSize === 0) {
                prevTabStopPosition = i;
                prevTabStopVisibleColumn = visibleColumn;
            }
            const chCode = lineContent.charCodeAt(i);
            switch (chCode) {
                case 32 /* CharCode.Space */:
                    visibleColumn += 1;
                    break;
                case 9 /* CharCode.Tab */:
                    // Skip to the next multiple of tabSize.
                    visibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.nextRenderTabStop(visibleColumn, tabSize);
                    break;
                default:
                    return [-1, -1, -1];
            }
        }
        if (position === lineLength) {
            return [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn];
        }
        return [-1, -1, -1];
    }
    /**
     * Return the position that should result from a move left, right or to the
     * nearest tab, if atomic tabs are enabled. Left and right are used for the
     * arrow key movements, nearest is used for mouse selection. It returns
     * -1 if atomic tabs are not relevant and you should fall back to normal
     * behaviour.
     *
     * **Note**: `position` and the return value are 0-based.
     */
    static atomicPosition(lineContent, position, tabSize, direction) {
        const lineLength = lineContent.length;
        // Get the 0-based visible column corresponding to the position, or return
        // -1 if it is not in the initial whitespace.
        const [prevTabStopPosition, prevTabStopVisibleColumn, visibleColumn] = AtomicTabMoveOperations.whitespaceVisibleColumn(lineContent, position, tabSize);
        if (visibleColumn === -1) {
            return -1;
        }
        // Is the output left or right of the current position. The case for nearest
        // where it is the same as the current position is handled in the switch.
        let left;
        switch (direction) {
            case 0 /* Direction.Left */:
                left = true;
                break;
            case 1 /* Direction.Right */:
                left = false;
                break;
            case 2 /* Direction.Nearest */:
                // The code below assumes the output position is either left or right
                // of the input position. If it is the same, return immediately.
                if (visibleColumn % tabSize === 0) {
                    return position;
                }
                // Go to the nearest indentation.
                left = visibleColumn % tabSize <= (tabSize / 2);
                break;
        }
        // If going left, we can just use the info about the last tab stop position and
        // last tab stop visible column that we computed in the first walk over the whitespace.
        if (left) {
            if (prevTabStopPosition === -1) {
                return -1;
            }
            // If the direction is left, we need to keep scanning right to ensure
            // that targetVisibleColumn + tabSize is before non-whitespace.
            // This is so that when we press left at the end of a partial
            // indentation it only goes one character. For example '      foo' with
            // tabSize 4, should jump from position 6 to position 5, not 4.
            let currentVisibleColumn = prevTabStopVisibleColumn;
            for (let i = prevTabStopPosition; i < lineLength; ++i) {
                if (currentVisibleColumn === prevTabStopVisibleColumn + tabSize) {
                    // It is a full indentation.
                    return prevTabStopPosition;
                }
                const chCode = lineContent.charCodeAt(i);
                switch (chCode) {
                    case 32 /* CharCode.Space */:
                        currentVisibleColumn += 1;
                        break;
                    case 9 /* CharCode.Tab */:
                        currentVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.nextRenderTabStop(currentVisibleColumn, tabSize);
                        break;
                    default:
                        return -1;
                }
            }
            if (currentVisibleColumn === prevTabStopVisibleColumn + tabSize) {
                return prevTabStopPosition;
            }
            // It must have been a partial indentation.
            return -1;
        }
        // We are going right.
        const targetVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.nextRenderTabStop(visibleColumn, tabSize);
        // We can just continue from where whitespaceVisibleColumn got to.
        let currentVisibleColumn = visibleColumn;
        for (let i = position; i < lineLength; i++) {
            if (currentVisibleColumn === targetVisibleColumn) {
                return i;
            }
            const chCode = lineContent.charCodeAt(i);
            switch (chCode) {
                case 32 /* CharCode.Space */:
                    currentVisibleColumn += 1;
                    break;
                case 9 /* CharCode.Tab */:
                    currentVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorColumns */ .i.nextRenderTabStop(currentVisibleColumn, tabSize);
                    break;
                default:
                    return -1;
            }
        }
        // This condition handles when the target column is at the end of the line.
        if (currentVisibleColumn === targetVisibleColumn) {
            return lineLength;
        }
        return -1;
    }
}


/***/ }),

/***/ 32484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ CursorCollection; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78203);
/* harmony import */ var _oneCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17254);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3981);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2257);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class CursorCollection {
    constructor(context) {
        this.context = context;
        this.cursors = [new _oneCursor_js__WEBPACK_IMPORTED_MODULE_2__/* .Cursor */ .C(context)];
        this.lastAddedCursorIndex = 0;
    }
    dispose() {
        for (const cursor of this.cursors) {
            cursor.dispose(this.context);
        }
    }
    startTrackingSelections() {
        for (const cursor of this.cursors) {
            cursor.startTrackingSelection(this.context);
        }
    }
    stopTrackingSelections() {
        for (const cursor of this.cursors) {
            cursor.stopTrackingSelection(this.context);
        }
    }
    updateContext(context) {
        this.context = context;
    }
    ensureValidState() {
        for (const cursor of this.cursors) {
            cursor.ensureValidState(this.context);
        }
    }
    readSelectionFromMarkers() {
        return this.cursors.map(c => c.readSelectionFromMarkers(this.context));
    }
    getAll() {
        return this.cursors.map(c => c.asCursorState());
    }
    getViewPositions() {
        return this.cursors.map(c => c.viewState.position);
    }
    getTopMostViewPosition() {
        return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .findMinBy */ .VJ)(this.cursors, (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .compareBy */ .tT)(c => c.viewState.position, _core_position_js__WEBPACK_IMPORTED_MODULE_3__/* .Position */ .L.compare)).viewState.position;
    }
    getBottomMostViewPosition() {
        return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .findLastMaxBy */ .jV)(this.cursors, (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .compareBy */ .tT)(c => c.viewState.position, _core_position_js__WEBPACK_IMPORTED_MODULE_3__/* .Position */ .L.compare)).viewState.position;
    }
    getSelections() {
        return this.cursors.map(c => c.modelState.selection);
    }
    getViewSelections() {
        return this.cursors.map(c => c.viewState.selection);
    }
    setSelections(selections) {
        this.setStates(_cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorState */ .Vi.fromModelSelections(selections));
    }
    getPrimaryCursor() {
        return this.cursors[0].asCursorState();
    }
    setStates(states) {
        if (states === null) {
            return;
        }
        this.cursors[0].setState(this.context, states[0].modelState, states[0].viewState);
        this._setSecondaryStates(states.slice(1));
    }
    /**
     * Creates or disposes secondary cursors as necessary to match the number of `secondarySelections`.
     */
    _setSecondaryStates(secondaryStates) {
        const secondaryCursorsLength = this.cursors.length - 1;
        const secondaryStatesLength = secondaryStates.length;
        if (secondaryCursorsLength < secondaryStatesLength) {
            const createCnt = secondaryStatesLength - secondaryCursorsLength;
            for (let i = 0; i < createCnt; i++) {
                this._addSecondaryCursor();
            }
        }
        else if (secondaryCursorsLength > secondaryStatesLength) {
            const removeCnt = secondaryCursorsLength - secondaryStatesLength;
            for (let i = 0; i < removeCnt; i++) {
                this._removeSecondaryCursor(this.cursors.length - 2);
            }
        }
        for (let i = 0; i < secondaryStatesLength; i++) {
            this.cursors[i + 1].setState(this.context, secondaryStates[i].modelState, secondaryStates[i].viewState);
        }
    }
    killSecondaryCursors() {
        this._setSecondaryStates([]);
    }
    _addSecondaryCursor() {
        this.cursors.push(new _oneCursor_js__WEBPACK_IMPORTED_MODULE_2__/* .Cursor */ .C(this.context));
        this.lastAddedCursorIndex = this.cursors.length - 1;
    }
    getLastAddedCursorIndex() {
        if (this.cursors.length === 1 || this.lastAddedCursorIndex === 0) {
            return 0;
        }
        return this.lastAddedCursorIndex;
    }
    _removeSecondaryCursor(removeIndex) {
        if (this.lastAddedCursorIndex >= removeIndex + 1) {
            this.lastAddedCursorIndex--;
        }
        this.cursors[removeIndex + 1].dispose(this.context);
        this.cursors.splice(removeIndex + 1, 1);
    }
    normalize() {
        if (this.cursors.length === 1) {
            return;
        }
        const cursors = this.cursors.slice(0);
        const sortedCursors = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            sortedCursors.push({
                index: i,
                selection: cursors[i].modelState.selection,
            });
        }
        sortedCursors.sort((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .compareBy */ .tT)(s => s.selection, _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e.compareRangesUsingStarts));
        for (let sortedCursorIndex = 0; sortedCursorIndex < sortedCursors.length - 1; sortedCursorIndex++) {
            const current = sortedCursors[sortedCursorIndex];
            const next = sortedCursors[sortedCursorIndex + 1];
            const currentSelection = current.selection;
            const nextSelection = next.selection;
            if (!this.context.cursorConfig.multiCursorMergeOverlapping) {
                continue;
            }
            let shouldMergeCursors;
            if (nextSelection.isEmpty() || currentSelection.isEmpty()) {
                // Merge touching cursors if one of them is collapsed
                shouldMergeCursors = nextSelection.getStartPosition().isBeforeOrEqual(currentSelection.getEndPosition());
            }
            else {
                // Merge only overlapping cursors (i.e. allow touching ranges)
                shouldMergeCursors = nextSelection.getStartPosition().isBefore(currentSelection.getEndPosition());
            }
            if (shouldMergeCursors) {
                const winnerSortedCursorIndex = current.index < next.index ? sortedCursorIndex : sortedCursorIndex + 1;
                const looserSortedCursorIndex = current.index < next.index ? sortedCursorIndex + 1 : sortedCursorIndex;
                const looserIndex = sortedCursors[looserSortedCursorIndex].index;
                const winnerIndex = sortedCursors[winnerSortedCursorIndex].index;
                const looserSelection = sortedCursors[looserSortedCursorIndex].selection;
                const winnerSelection = sortedCursors[winnerSortedCursorIndex].selection;
                if (!looserSelection.equalsSelection(winnerSelection)) {
                    const resultingRange = looserSelection.plusRange(winnerSelection);
                    const looserSelectionIsLTR = (looserSelection.selectionStartLineNumber === looserSelection.startLineNumber && looserSelection.selectionStartColumn === looserSelection.startColumn);
                    const winnerSelectionIsLTR = (winnerSelection.selectionStartLineNumber === winnerSelection.startLineNumber && winnerSelection.selectionStartColumn === winnerSelection.startColumn);
                    // Give more importance to the last added cursor (think Ctrl-dragging + hitting another cursor)
                    let resultingSelectionIsLTR;
                    if (looserIndex === this.lastAddedCursorIndex) {
                        resultingSelectionIsLTR = looserSelectionIsLTR;
                        this.lastAddedCursorIndex = winnerIndex;
                    }
                    else {
                        // Winner takes it all
                        resultingSelectionIsLTR = winnerSelectionIsLTR;
                    }
                    let resultingSelection;
                    if (resultingSelectionIsLTR) {
                        resultingSelection = new _core_selection_js__WEBPACK_IMPORTED_MODULE_5__/* .Selection */ .Y(resultingRange.startLineNumber, resultingRange.startColumn, resultingRange.endLineNumber, resultingRange.endColumn);
                    }
                    else {
                        resultingSelection = new _core_selection_js__WEBPACK_IMPORTED_MODULE_5__/* .Selection */ .Y(resultingRange.endLineNumber, resultingRange.endColumn, resultingRange.startLineNumber, resultingRange.startColumn);
                    }
                    sortedCursors[winnerSortedCursorIndex].selection = resultingSelection;
                    const resultingState = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorState */ .Vi.fromModelSelection(resultingSelection);
                    cursors[winnerIndex].setState(this.context, resultingState.modelState, resultingState.viewState);
                }
                for (const sortedCursor of sortedCursors) {
                    if (sortedCursor.index > looserIndex) {
                        sortedCursor.index--;
                    }
                }
                cursors.splice(looserIndex, 1);
                sortedCursors.splice(looserSortedCursorIndex, 1);
                this._removeSecondaryCursor(looserIndex - 1);
                sortedCursorIndex--;
            }
        }
    }
}


/***/ }),

/***/ 87841:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ ColumnSelection; }
/* harmony export */ });
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78203);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class ColumnSelection {
    static columnSelect(config, model, fromLineNumber, fromVisibleColumn, toLineNumber, toVisibleColumn) {
        const lineCount = Math.abs(toLineNumber - fromLineNumber) + 1;
        const reversed = (fromLineNumber > toLineNumber);
        const isRTL = (fromVisibleColumn > toVisibleColumn);
        const isLTR = (fromVisibleColumn < toVisibleColumn);
        const result = [];
        // console.log(`fromVisibleColumn: ${fromVisibleColumn}, toVisibleColumn: ${toVisibleColumn}`);
        for (let i = 0; i < lineCount; i++) {
            const lineNumber = fromLineNumber + (reversed ? -i : i);
            const startColumn = config.columnFromVisibleColumn(model, lineNumber, fromVisibleColumn);
            const endColumn = config.columnFromVisibleColumn(model, lineNumber, toVisibleColumn);
            const visibleStartColumn = config.visibleColumnFromColumn(model, new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineNumber, startColumn));
            const visibleEndColumn = config.visibleColumnFromColumn(model, new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineNumber, endColumn));
            // console.log(`lineNumber: ${lineNumber}: visibleStartColumn: ${visibleStartColumn}, visibleEndColumn: ${visibleEndColumn}`);
            if (isLTR) {
                if (visibleStartColumn > toVisibleColumn) {
                    continue;
                }
                if (visibleEndColumn < fromVisibleColumn) {
                    continue;
                }
            }
            if (isRTL) {
                if (visibleEndColumn > fromVisibleColumn) {
                    continue;
                }
                if (visibleStartColumn < toVisibleColumn) {
                    continue;
                }
            }
            result.push(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineNumber, startColumn, lineNumber, startColumn), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineNumber, endColumn), 0));
        }
        if (result.length === 0) {
            // We are after all the lines, so add cursor at the end of each line
            for (let i = 0; i < lineCount; i++) {
                const lineNumber = fromLineNumber + (reversed ? -i : i);
                const maxColumn = model.getLineMaxColumn(lineNumber);
                result.push(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineNumber, maxColumn, lineNumber, maxColumn), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineNumber, maxColumn), 0));
            }
        }
        return {
            viewStates: result,
            reversed: reversed,
            fromLineNumber: fromLineNumber,
            fromVisualColumn: fromVisibleColumn,
            toLineNumber: toLineNumber,
            toVisualColumn: toVisibleColumn
        };
    }
    static columnSelectLeft(config, model, prevColumnSelectData) {
        let toViewVisualColumn = prevColumnSelectData.toViewVisualColumn;
        if (toViewVisualColumn > 0) {
            toViewVisualColumn--;
        }
        return ColumnSelection.columnSelect(config, model, prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.fromViewVisualColumn, prevColumnSelectData.toViewLineNumber, toViewVisualColumn);
    }
    static columnSelectRight(config, model, prevColumnSelectData) {
        let maxVisualViewColumn = 0;
        const minViewLineNumber = Math.min(prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.toViewLineNumber);
        const maxViewLineNumber = Math.max(prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.toViewLineNumber);
        for (let lineNumber = minViewLineNumber; lineNumber <= maxViewLineNumber; lineNumber++) {
            const lineMaxViewColumn = model.getLineMaxColumn(lineNumber);
            const lineMaxVisualViewColumn = config.visibleColumnFromColumn(model, new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineNumber, lineMaxViewColumn));
            maxVisualViewColumn = Math.max(maxVisualViewColumn, lineMaxVisualViewColumn);
        }
        let toViewVisualColumn = prevColumnSelectData.toViewVisualColumn;
        if (toViewVisualColumn < maxVisualViewColumn) {
            toViewVisualColumn++;
        }
        return this.columnSelect(config, model, prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.fromViewVisualColumn, prevColumnSelectData.toViewLineNumber, toViewVisualColumn);
    }
    static columnSelectUp(config, model, prevColumnSelectData, isPaged) {
        const linesCount = isPaged ? config.pageSize : 1;
        const toViewLineNumber = Math.max(1, prevColumnSelectData.toViewLineNumber - linesCount);
        return this.columnSelect(config, model, prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.fromViewVisualColumn, toViewLineNumber, prevColumnSelectData.toViewVisualColumn);
    }
    static columnSelectDown(config, model, prevColumnSelectData, isPaged) {
        const linesCount = isPaged ? config.pageSize : 1;
        const toViewLineNumber = Math.min(model.getLineCount(), prevColumnSelectData.toViewLineNumber + linesCount);
        return this.columnSelect(config, model, prevColumnSelectData.fromViewLineNumber, prevColumnSelectData.fromViewVisualColumn, toViewLineNumber, prevColumnSelectData.toViewVisualColumn);
    }
}


/***/ }),

/***/ 277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ CursorContext; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CursorContext {
    constructor(model, viewModel, coordinatesConverter, cursorConfig) {
        this._cursorContextBrand = undefined;
        this.model = model;
        this.viewModel = viewModel;
        this.coordinatesConverter = coordinatesConverter;
        this.cursorConfig = cursorConfig;
    }
}


/***/ })

}]);