"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-8167d328"],{

/***/ 68273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LM: function() { return /* binding */ CursorConfiguration; },
/* harmony export */   LN: function() { return /* binding */ isQuote; },
/* harmony export */   Tp: function() { return /* binding */ EditOperationResult; },
/* harmony export */   Vi: function() { return /* binding */ CursorState; },
/* harmony export */   rS: function() { return /* binding */ SingleCursorState; }
/* harmony export */ });
/* unused harmony exports PartialModelCursorState, PartialViewCursorState */
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76584);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74980);
/* harmony import */ var _languages_supports_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46429);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21773);
/* harmony import */ var _core_indentation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20392);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const autoCloseAlways = () => true;
const autoCloseNever = () => false;
const autoCloseBeforeWhitespace = (chr) => (chr === ' ' || chr === '\t');
class CursorConfiguration {
    static shouldRecreate(e) {
        return (e.hasChanged(140 /* EditorOption.layoutInfo */)
            || e.hasChanged(126 /* EditorOption.wordSeparators */)
            || e.hasChanged(35 /* EditorOption.emptySelectionClipboard */)
            || e.hasChanged(74 /* EditorOption.multiCursorMergeOverlapping */)
            || e.hasChanged(76 /* EditorOption.multiCursorPaste */)
            || e.hasChanged(77 /* EditorOption.multiCursorLimit */)
            || e.hasChanged(5 /* EditorOption.autoClosingBrackets */)
            || e.hasChanged(9 /* EditorOption.autoClosingQuotes */)
            || e.hasChanged(7 /* EditorOption.autoClosingDelete */)
            || e.hasChanged(8 /* EditorOption.autoClosingOvertype */)
            || e.hasChanged(12 /* EditorOption.autoSurround */)
            || e.hasChanged(124 /* EditorOption.useTabStops */)
            || e.hasChanged(48 /* EditorOption.fontInfo */)
            || e.hasChanged(88 /* EditorOption.readOnly */));
    }
    constructor(languageId, modelOptions, configuration, languageConfigurationService) {
        this.languageConfigurationService = languageConfigurationService;
        this._cursorMoveConfigurationBrand = undefined;
        this._languageId = languageId;
        const options = configuration.options;
        const layoutInfo = options.get(140 /* EditorOption.layoutInfo */);
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        this.readOnly = options.get(88 /* EditorOption.readOnly */);
        this.tabSize = modelOptions.tabSize;
        this.indentSize = modelOptions.indentSize;
        this.insertSpaces = modelOptions.insertSpaces;
        this.stickyTabStops = options.get(112 /* EditorOption.stickyTabStops */);
        this.lineHeight = fontInfo.lineHeight;
        this.typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        this.pageSize = Math.max(1, Math.floor(layoutInfo.height / this.lineHeight) - 2);
        this.useTabStops = options.get(124 /* EditorOption.useTabStops */);
        this.wordSeparators = options.get(126 /* EditorOption.wordSeparators */);
        this.emptySelectionClipboard = options.get(35 /* EditorOption.emptySelectionClipboard */);
        this.copyWithSyntaxHighlighting = options.get(23 /* EditorOption.copyWithSyntaxHighlighting */);
        this.multiCursorMergeOverlapping = options.get(74 /* EditorOption.multiCursorMergeOverlapping */);
        this.multiCursorPaste = options.get(76 /* EditorOption.multiCursorPaste */);
        this.multiCursorLimit = options.get(77 /* EditorOption.multiCursorLimit */);
        this.autoClosingBrackets = options.get(5 /* EditorOption.autoClosingBrackets */);
        this.autoClosingQuotes = options.get(9 /* EditorOption.autoClosingQuotes */);
        this.autoClosingDelete = options.get(7 /* EditorOption.autoClosingDelete */);
        this.autoClosingOvertype = options.get(8 /* EditorOption.autoClosingOvertype */);
        this.autoSurround = options.get(12 /* EditorOption.autoSurround */);
        this.autoIndent = options.get(10 /* EditorOption.autoIndent */);
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

/***/ 1304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ AtomicTabMoveOperations; }
/* harmony export */ });
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21773);
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

/***/ 87796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ CursorCollection; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68273);
/* harmony import */ var _oneCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47238);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76584);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74980);
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

/***/ 83141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ ColumnSelection; }
/* harmony export */ });
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68273);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76584);
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

/***/ 77161:
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


/***/ }),

/***/ 11819:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ DeleteOperations; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2056);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68273);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21773);
/* harmony import */ var _cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88751);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76584);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13372);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







class DeleteOperations {
    static deleteRight(prevEditOperationType, config, model, selections) {
        const commands = [];
        let shouldPushStackElementBefore = (prevEditOperationType !== 3 /* EditOperationType.DeletingRight */);
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            let deleteSelection = selection;
            if (deleteSelection.isEmpty()) {
                const position = selection.getPosition();
                const rightOfPosition = _cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_3__/* .MoveOperations */ .o.right(config, model, position);
                deleteSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(rightOfPosition.lineNumber, rightOfPosition.column, position.lineNumber, position.column);
            }
            if (deleteSelection.isEmpty()) {
                // Probably at end of file => ignore
                commands[i] = null;
                continue;
            }
            if (deleteSelection.startLineNumber !== deleteSelection.endLineNumber) {
                shouldPushStackElementBefore = true;
            }
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceCommand */ .T4(deleteSelection, '');
        }
        return [shouldPushStackElementBefore, commands];
    }
    static isAutoClosingPairDelete(autoClosingDelete, autoClosingBrackets, autoClosingQuotes, autoClosingPairsOpen, model, selections, autoClosedCharacters) {
        if (autoClosingBrackets === 'never' && autoClosingQuotes === 'never') {
            return false;
        }
        if (autoClosingDelete === 'never') {
            return false;
        }
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            const position = selection.getPosition();
            if (!selection.isEmpty()) {
                return false;
            }
            const lineText = model.getLineContent(position.lineNumber);
            if (position.column < 2 || position.column >= lineText.length + 1) {
                return false;
            }
            const character = lineText.charAt(position.column - 2);
            const autoClosingPairCandidates = autoClosingPairsOpen.get(character);
            if (!autoClosingPairCandidates) {
                return false;
            }
            if ((0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__/* .isQuote */ .LN)(character)) {
                if (autoClosingQuotes === 'never') {
                    return false;
                }
            }
            else {
                if (autoClosingBrackets === 'never') {
                    return false;
                }
            }
            const afterCharacter = lineText.charAt(position.column - 1);
            let foundAutoClosingPair = false;
            for (const autoClosingPairCandidate of autoClosingPairCandidates) {
                if (autoClosingPairCandidate.open === character && autoClosingPairCandidate.close === afterCharacter) {
                    foundAutoClosingPair = true;
                }
            }
            if (!foundAutoClosingPair) {
                return false;
            }
            // Must delete the pair only if it was automatically inserted by the editor
            if (autoClosingDelete === 'auto') {
                let found = false;
                for (let j = 0, lenJ = autoClosedCharacters.length; j < lenJ; j++) {
                    const autoClosedCharacter = autoClosedCharacters[j];
                    if (position.lineNumber === autoClosedCharacter.startLineNumber && position.column === autoClosedCharacter.startColumn) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            }
        }
        return true;
    }
    static _runAutoClosingPairDelete(config, model, selections) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const position = selections[i].getPosition();
            const deleteSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(position.lineNumber, position.column - 1, position.lineNumber, position.column + 1);
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceCommand */ .T4(deleteSelection, '');
        }
        return [true, commands];
    }
    static deleteLeft(prevEditOperationType, config, model, selections, autoClosedCharacters) {
        if (this.isAutoClosingPairDelete(config.autoClosingDelete, config.autoClosingBrackets, config.autoClosingQuotes, config.autoClosingPairs.autoClosingPairsOpenByEnd, model, selections, autoClosedCharacters)) {
            return this._runAutoClosingPairDelete(config, model, selections);
        }
        const commands = [];
        let shouldPushStackElementBefore = (prevEditOperationType !== 2 /* EditOperationType.DeletingLeft */);
        for (let i = 0, len = selections.length; i < len; i++) {
            const deleteRange = DeleteOperations.getDeleteRange(selections[i], model, config);
            // Ignore empty delete ranges, as they have no effect
            // They happen if the cursor is at the beginning of the file.
            if (deleteRange.isEmpty()) {
                commands[i] = null;
                continue;
            }
            if (deleteRange.startLineNumber !== deleteRange.endLineNumber) {
                shouldPushStackElementBefore = true;
            }
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceCommand */ .T4(deleteRange, '');
        }
        return [shouldPushStackElementBefore, commands];
    }
    static getDeleteRange(selection, model, config) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const position = selection.getPosition();
        // Unintend when using tab stops and cursor is within indentation
        if (config.useTabStops && position.column > 1) {
            const lineContent = model.getLineContent(position.lineNumber);
            const firstNonWhitespaceIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .firstNonWhitespaceIndex */ .LC(lineContent);
            const lastIndentationColumn = (firstNonWhitespaceIndex === -1
                ? /* entire string is whitespace */ lineContent.length + 1
                : firstNonWhitespaceIndex + 1);
            if (position.column <= lastIndentationColumn) {
                const fromVisibleColumn = config.visibleColumnFromColumn(model, position);
                const toVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_2__/* .CursorColumns */ .i.prevIndentTabStop(fromVisibleColumn, config.indentSize);
                const toColumn = config.columnFromVisibleColumn(model, position.lineNumber, toVisibleColumn);
                return new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(position.lineNumber, toColumn, position.lineNumber, position.column);
            }
        }
        return _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e.fromPositions(DeleteOperations.getPositionAfterDeleteLeft(position, model), position);
    }
    static getPositionAfterDeleteLeft(position, model) {
        if (position.column > 1) {
            // Convert 1-based columns to 0-based offsets and back.
            const idx = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeftDeleteOffset */ .oH(position.column - 1, model.getLineContent(position.lineNumber));
            return position.with(undefined, idx + 1);
        }
        else if (position.lineNumber > 1) {
            const newLine = position.lineNumber - 1;
            return new _core_position_js__WEBPACK_IMPORTED_MODULE_6__/* .Position */ .L(newLine, model.getLineMaxColumn(newLine));
        }
        else {
            return position;
        }
    }
    static cut(config, model, selections) {
        const commands = [];
        let lastCutRange = null;
        selections.sort((a, b) => _core_position_js__WEBPACK_IMPORTED_MODULE_6__/* .Position */ .L.compare(a.getStartPosition(), b.getEndPosition()));
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (selection.isEmpty()) {
                if (config.emptySelectionClipboard) {
                    // This is a full line cut
                    const position = selection.getPosition();
                    let startLineNumber, startColumn, endLineNumber, endColumn;
                    if (position.lineNumber < model.getLineCount()) {
                        // Cutting a line in the middle of the model
                        startLineNumber = position.lineNumber;
                        startColumn = 1;
                        endLineNumber = position.lineNumber + 1;
                        endColumn = 1;
                    }
                    else if (position.lineNumber > 1 && (lastCutRange === null || lastCutRange === void 0 ? void 0 : lastCutRange.endLineNumber) !== position.lineNumber) {
                        // Cutting the last line & there are more than 1 lines in the model & a previous cut operation does not touch the current cut operation
                        startLineNumber = position.lineNumber - 1;
                        startColumn = model.getLineMaxColumn(position.lineNumber - 1);
                        endLineNumber = position.lineNumber;
                        endColumn = model.getLineMaxColumn(position.lineNumber);
                    }
                    else {
                        // Cutting the single line that the model contains
                        startLineNumber = position.lineNumber;
                        startColumn = 1;
                        endLineNumber = position.lineNumber;
                        endColumn = model.getLineMaxColumn(position.lineNumber);
                    }
                    const deleteSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(startLineNumber, startColumn, endLineNumber, endColumn);
                    lastCutRange = deleteSelection;
                    if (!deleteSelection.isEmpty()) {
                        commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceCommand */ .T4(deleteSelection, '');
                    }
                    else {
                        commands[i] = null;
                    }
                }
                else {
                    // Cannot cut empty selection
                    commands[i] = null;
                }
            }
            else {
                commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_5__/* .ReplaceCommand */ .T4(selection, '');
            }
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, commands, {
            shouldPushStackElementBefore: true,
            shouldPushStackElementAfter: true
        });
    }
}


/***/ }),

/***/ 77364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ CursorMove; },
/* harmony export */   P: function() { return /* binding */ CursorMoveCommands; }
/* harmony export */ });
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28935);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68273);
/* harmony import */ var _cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88751);
/* harmony import */ var _cursorWordOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23156);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class CursorMoveCommands {
    static addCursorDown(viewModel, cursors, useLogicalLine) {
        const result = [];
        let resultLen = 0;
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[resultLen++] = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi(cursor.modelState, cursor.viewState);
            if (useLogicalLine) {
                result[resultLen++] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.translateDown(viewModel.cursorConfig, viewModel.model, cursor.modelState));
            }
            else {
                result[resultLen++] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.translateDown(viewModel.cursorConfig, viewModel, cursor.viewState));
            }
        }
        return result;
    }
    static addCursorUp(viewModel, cursors, useLogicalLine) {
        const result = [];
        let resultLen = 0;
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[resultLen++] = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi(cursor.modelState, cursor.viewState);
            if (useLogicalLine) {
                result[resultLen++] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.translateUp(viewModel.cursorConfig, viewModel.model, cursor.modelState));
            }
            else {
                result[resultLen++] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.translateUp(viewModel.cursorConfig, viewModel, cursor.viewState));
            }
        }
        return result;
    }
    static moveToBeginningOfLine(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = this._moveToLineStart(viewModel, cursor, inSelectionMode);
        }
        return result;
    }
    static _moveToLineStart(viewModel, cursor, inSelectionMode) {
        const currentViewStateColumn = cursor.viewState.position.column;
        const currentModelStateColumn = cursor.modelState.position.column;
        const isFirstLineOfWrappedLine = currentViewStateColumn === currentModelStateColumn;
        const currentViewStatelineNumber = cursor.viewState.position.lineNumber;
        const firstNonBlankColumn = viewModel.getLineFirstNonWhitespaceColumn(currentViewStatelineNumber);
        const isBeginningOfViewLine = currentViewStateColumn === firstNonBlankColumn;
        if (!isFirstLineOfWrappedLine && !isBeginningOfViewLine) {
            return this._moveToLineStartByView(viewModel, cursor, inSelectionMode);
        }
        else {
            return this._moveToLineStartByModel(viewModel, cursor, inSelectionMode);
        }
    }
    static _moveToLineStartByView(viewModel, cursor, inSelectionMode) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToBeginningOfLine(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode));
    }
    static _moveToLineStartByModel(viewModel, cursor, inSelectionMode) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToBeginningOfLine(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode));
    }
    static moveToEndOfLine(viewModel, cursors, inSelectionMode, sticky) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = this._moveToLineEnd(viewModel, cursor, inSelectionMode, sticky);
        }
        return result;
    }
    static _moveToLineEnd(viewModel, cursor, inSelectionMode, sticky) {
        const viewStatePosition = cursor.viewState.position;
        const viewModelMaxColumn = viewModel.getLineMaxColumn(viewStatePosition.lineNumber);
        const isEndOfViewLine = viewStatePosition.column === viewModelMaxColumn;
        const modelStatePosition = cursor.modelState.position;
        const modelMaxColumn = viewModel.model.getLineMaxColumn(modelStatePosition.lineNumber);
        const isEndLineOfWrappedLine = viewModelMaxColumn - viewStatePosition.column === modelMaxColumn - modelStatePosition.column;
        if (isEndOfViewLine || isEndLineOfWrappedLine) {
            return this._moveToLineEndByModel(viewModel, cursor, inSelectionMode, sticky);
        }
        else {
            return this._moveToLineEndByView(viewModel, cursor, inSelectionMode, sticky);
        }
    }
    static _moveToLineEndByView(viewModel, cursor, inSelectionMode, sticky) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToEndOfLine(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, sticky));
    }
    static _moveToLineEndByModel(viewModel, cursor, inSelectionMode, sticky) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToEndOfLine(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode, sticky));
    }
    static expandLineSelection(viewModel, cursors) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const startLineNumber = cursor.modelState.selection.startLineNumber;
            const lineCount = viewModel.model.getLineCount();
            let endLineNumber = cursor.modelState.selection.endLineNumber;
            let endColumn;
            if (endLineNumber === lineCount) {
                endColumn = viewModel.model.getLineMaxColumn(lineCount);
            }
            else {
                endLineNumber++;
                endColumn = 1;
            }
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(startLineNumber, 1, startLineNumber, 1), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(endLineNumber, endColumn), 0));
        }
        return result;
    }
    static moveToBeginningOfBuffer(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToBeginningOfBuffer(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode));
        }
        return result;
    }
    static moveToEndOfBuffer(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToEndOfBuffer(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode));
        }
        return result;
    }
    static selectAll(viewModel, cursor) {
        const lineCount = viewModel.model.getLineCount();
        const maxColumn = viewModel.model.getLineMaxColumn(lineCount);
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(1, 1, 1, 1), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineCount, maxColumn), 0));
    }
    static line(viewModel, cursor, inSelectionMode, _position, _viewPosition) {
        const position = viewModel.model.validatePosition(_position);
        const viewPosition = (_viewPosition
            ? viewModel.coordinatesConverter.validateViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(_viewPosition.lineNumber, _viewPosition.column), position)
            : viewModel.coordinatesConverter.convertModelPositionToViewPosition(position));
        if (!inSelectionMode) {
            // Entering line selection for the first time
            const lineCount = viewModel.model.getLineCount();
            let selectToLineNumber = position.lineNumber + 1;
            let selectToColumn = 1;
            if (selectToLineNumber > lineCount) {
                selectToLineNumber = lineCount;
                selectToColumn = viewModel.model.getLineMaxColumn(selectToLineNumber);
            }
            return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(position.lineNumber, 1, selectToLineNumber, selectToColumn), 2 /* SelectionStartKind.Line */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(selectToLineNumber, selectToColumn), 0));
        }
        // Continuing line selection
        const enteringLineNumber = cursor.modelState.selectionStart.getStartPosition().lineNumber;
        if (position.lineNumber < enteringLineNumber) {
            return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(cursor.viewState.move(true, viewPosition.lineNumber, 1, 0));
        }
        else if (position.lineNumber > enteringLineNumber) {
            const lineCount = viewModel.getLineCount();
            let selectToViewLineNumber = viewPosition.lineNumber + 1;
            let selectToViewColumn = 1;
            if (selectToViewLineNumber > lineCount) {
                selectToViewLineNumber = lineCount;
                selectToViewColumn = viewModel.getLineMaxColumn(selectToViewLineNumber);
            }
            return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(cursor.viewState.move(true, selectToViewLineNumber, selectToViewColumn, 0));
        }
        else {
            const endPositionOfSelectionStart = cursor.modelState.selectionStart.getEndPosition();
            return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(cursor.modelState.move(true, endPositionOfSelectionStart.lineNumber, endPositionOfSelectionStart.column, 0));
        }
    }
    static word(viewModel, cursor, inSelectionMode, _position) {
        const position = viewModel.model.validatePosition(_position);
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorWordOperations_js__WEBPACK_IMPORTED_MODULE_2__/* .WordOperations */ .w.word(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode, position));
    }
    static cancelSelection(viewModel, cursor) {
        if (!cursor.modelState.hasSelection()) {
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi(cursor.modelState, cursor.viewState);
        }
        const lineNumber = cursor.viewState.position.lineNumber;
        const column = cursor.viewState.position.column;
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e(lineNumber, column, lineNumber, column), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column), 0));
    }
    static moveTo(viewModel, cursor, inSelectionMode, _position, _viewPosition) {
        if (inSelectionMode) {
            if (cursor.modelState.selectionStartKind === 1 /* SelectionStartKind.Word */) {
                return this.word(viewModel, cursor, inSelectionMode, _position);
            }
            if (cursor.modelState.selectionStartKind === 2 /* SelectionStartKind.Line */) {
                return this.line(viewModel, cursor, inSelectionMode, _position, _viewPosition);
            }
        }
        const position = viewModel.model.validatePosition(_position);
        const viewPosition = (_viewPosition
            ? viewModel.coordinatesConverter.validateViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(_viewPosition.lineNumber, _viewPosition.column), position)
            : viewModel.coordinatesConverter.convertModelPositionToViewPosition(position));
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(cursor.viewState.move(inSelectionMode, viewPosition.lineNumber, viewPosition.column, 0));
    }
    static simpleMove(viewModel, cursors, direction, inSelectionMode, value, unit) {
        switch (direction) {
            case 0 /* CursorMove.Direction.Left */: {
                if (unit === 4 /* CursorMove.Unit.HalfLine */) {
                    // Move left by half the current line length
                    return this._moveHalfLineLeft(viewModel, cursors, inSelectionMode);
                }
                else {
                    // Move left by `moveParams.value` columns
                    return this._moveLeft(viewModel, cursors, inSelectionMode, value);
                }
            }
            case 1 /* CursorMove.Direction.Right */: {
                if (unit === 4 /* CursorMove.Unit.HalfLine */) {
                    // Move right by half the current line length
                    return this._moveHalfLineRight(viewModel, cursors, inSelectionMode);
                }
                else {
                    // Move right by `moveParams.value` columns
                    return this._moveRight(viewModel, cursors, inSelectionMode, value);
                }
            }
            case 2 /* CursorMove.Direction.Up */: {
                if (unit === 2 /* CursorMove.Unit.WrappedLine */) {
                    // Move up by view lines
                    return this._moveUpByViewLines(viewModel, cursors, inSelectionMode, value);
                }
                else {
                    // Move up by model lines
                    return this._moveUpByModelLines(viewModel, cursors, inSelectionMode, value);
                }
            }
            case 3 /* CursorMove.Direction.Down */: {
                if (unit === 2 /* CursorMove.Unit.WrappedLine */) {
                    // Move down by view lines
                    return this._moveDownByViewLines(viewModel, cursors, inSelectionMode, value);
                }
                else {
                    // Move down by model lines
                    return this._moveDownByModelLines(viewModel, cursors, inSelectionMode, value);
                }
            }
            case 4 /* CursorMove.Direction.PrevBlankLine */: {
                if (unit === 2 /* CursorMove.Unit.WrappedLine */) {
                    return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToPrevBlankLine(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode)));
                }
                else {
                    return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToPrevBlankLine(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode)));
                }
            }
            case 5 /* CursorMove.Direction.NextBlankLine */: {
                if (unit === 2 /* CursorMove.Unit.WrappedLine */) {
                    return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToNextBlankLine(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode)));
                }
                else {
                    return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveToNextBlankLine(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode)));
                }
            }
            case 6 /* CursorMove.Direction.WrappedLineStart */: {
                // Move to the beginning of the current view line
                return this._moveToViewMinColumn(viewModel, cursors, inSelectionMode);
            }
            case 7 /* CursorMove.Direction.WrappedLineFirstNonWhitespaceCharacter */: {
                // Move to the first non-whitespace column of the current view line
                return this._moveToViewFirstNonWhitespaceColumn(viewModel, cursors, inSelectionMode);
            }
            case 8 /* CursorMove.Direction.WrappedLineColumnCenter */: {
                // Move to the "center" of the current view line
                return this._moveToViewCenterColumn(viewModel, cursors, inSelectionMode);
            }
            case 9 /* CursorMove.Direction.WrappedLineEnd */: {
                // Move to the end of the current view line
                return this._moveToViewMaxColumn(viewModel, cursors, inSelectionMode);
            }
            case 10 /* CursorMove.Direction.WrappedLineLastNonWhitespaceCharacter */: {
                // Move to the last non-whitespace column of the current view line
                return this._moveToViewLastNonWhitespaceColumn(viewModel, cursors, inSelectionMode);
            }
            default:
                return null;
        }
    }
    static viewportMove(viewModel, cursors, direction, inSelectionMode, value) {
        const visibleViewRange = viewModel.getCompletelyVisibleViewRange();
        const visibleModelRange = viewModel.coordinatesConverter.convertViewRangeToModelRange(visibleViewRange);
        switch (direction) {
            case 11 /* CursorMove.Direction.ViewPortTop */: {
                // Move to the nth line start in the viewport (from the top)
                const modelLineNumber = this._firstLineNumberInRange(viewModel.model, visibleModelRange, value);
                const modelColumn = viewModel.model.getLineFirstNonWhitespaceColumn(modelLineNumber);
                return [this._moveToModelPosition(viewModel, cursors[0], inSelectionMode, modelLineNumber, modelColumn)];
            }
            case 13 /* CursorMove.Direction.ViewPortBottom */: {
                // Move to the nth line start in the viewport (from the bottom)
                const modelLineNumber = this._lastLineNumberInRange(viewModel.model, visibleModelRange, value);
                const modelColumn = viewModel.model.getLineFirstNonWhitespaceColumn(modelLineNumber);
                return [this._moveToModelPosition(viewModel, cursors[0], inSelectionMode, modelLineNumber, modelColumn)];
            }
            case 12 /* CursorMove.Direction.ViewPortCenter */: {
                // Move to the line start in the viewport center
                const modelLineNumber = Math.round((visibleModelRange.startLineNumber + visibleModelRange.endLineNumber) / 2);
                const modelColumn = viewModel.model.getLineFirstNonWhitespaceColumn(modelLineNumber);
                return [this._moveToModelPosition(viewModel, cursors[0], inSelectionMode, modelLineNumber, modelColumn)];
            }
            case 14 /* CursorMove.Direction.ViewPortIfOutside */: {
                // Move to a position inside the viewport
                const result = [];
                for (let i = 0, len = cursors.length; i < len; i++) {
                    const cursor = cursors[i];
                    result[i] = this.findPositionInViewportIfOutside(viewModel, cursor, visibleViewRange, inSelectionMode);
                }
                return result;
            }
            default:
                return null;
        }
    }
    static findPositionInViewportIfOutside(viewModel, cursor, visibleViewRange, inSelectionMode) {
        const viewLineNumber = cursor.viewState.position.lineNumber;
        if (visibleViewRange.startLineNumber <= viewLineNumber && viewLineNumber <= visibleViewRange.endLineNumber - 1) {
            // Nothing to do, cursor is in viewport
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi(cursor.modelState, cursor.viewState);
        }
        else {
            let newViewLineNumber;
            if (viewLineNumber > visibleViewRange.endLineNumber - 1) {
                newViewLineNumber = visibleViewRange.endLineNumber - 1;
            }
            else if (viewLineNumber < visibleViewRange.startLineNumber) {
                newViewLineNumber = visibleViewRange.startLineNumber;
            }
            else {
                newViewLineNumber = viewLineNumber;
            }
            const position = _cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.vertical(viewModel.cursorConfig, viewModel, viewLineNumber, cursor.viewState.position.column, cursor.viewState.leftoverVisibleColumns, newViewLineNumber, false);
            return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(cursor.viewState.move(inSelectionMode, position.lineNumber, position.column, position.leftoverVisibleColumns));
        }
    }
    /**
     * Find the nth line start included in the range (from the start).
     */
    static _firstLineNumberInRange(model, range, count) {
        let startLineNumber = range.startLineNumber;
        if (range.startColumn !== model.getLineMinColumn(startLineNumber)) {
            // Move on to the second line if the first line start is not included in the range
            startLineNumber++;
        }
        return Math.min(range.endLineNumber, startLineNumber + count - 1);
    }
    /**
     * Find the nth line start included in the range (from the end).
     */
    static _lastLineNumberInRange(model, range, count) {
        let startLineNumber = range.startLineNumber;
        if (range.startColumn !== model.getLineMinColumn(startLineNumber)) {
            // Move on to the second line if the first line start is not included in the range
            startLineNumber++;
        }
        return Math.max(startLineNumber, range.endLineNumber - count + 1);
    }
    static _moveLeft(viewModel, cursors, inSelectionMode, noOfColumns) {
        return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveLeft(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, noOfColumns)));
    }
    static _moveHalfLineLeft(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const halfLine = Math.round(viewModel.getLineContent(viewLineNumber).length / 2);
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveLeft(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, halfLine));
        }
        return result;
    }
    static _moveRight(viewModel, cursors, inSelectionMode, noOfColumns) {
        return cursors.map(cursor => _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveRight(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, noOfColumns)));
    }
    static _moveHalfLineRight(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const halfLine = Math.round(viewModel.getLineContent(viewLineNumber).length / 2);
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveRight(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, halfLine));
        }
        return result;
    }
    static _moveDownByViewLines(viewModel, cursors, inSelectionMode, linesCount) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveDown(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, linesCount));
        }
        return result;
    }
    static _moveDownByModelLines(viewModel, cursors, inSelectionMode, linesCount) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveDown(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode, linesCount));
        }
        return result;
    }
    static _moveUpByViewLines(viewModel, cursors, inSelectionMode, linesCount) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveUp(viewModel.cursorConfig, viewModel, cursor.viewState, inSelectionMode, linesCount));
        }
        return result;
    }
    static _moveUpByModelLines(viewModel, cursors, inSelectionMode, linesCount) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            result[i] = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(_cursorMoveOperations_js__WEBPACK_IMPORTED_MODULE_1__/* .MoveOperations */ .o.moveUp(viewModel.cursorConfig, viewModel.model, cursor.modelState, inSelectionMode, linesCount));
        }
        return result;
    }
    static _moveToViewPosition(viewModel, cursor, inSelectionMode, toViewLineNumber, toViewColumn) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromViewState(cursor.viewState.move(inSelectionMode, toViewLineNumber, toViewColumn, 0));
    }
    static _moveToModelPosition(viewModel, cursor, inSelectionMode, toModelLineNumber, toModelColumn) {
        return _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi.fromModelState(cursor.modelState.move(inSelectionMode, toModelLineNumber, toModelColumn, 0));
    }
    static _moveToViewMinColumn(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const viewColumn = viewModel.getLineMinColumn(viewLineNumber);
            result[i] = this._moveToViewPosition(viewModel, cursor, inSelectionMode, viewLineNumber, viewColumn);
        }
        return result;
    }
    static _moveToViewFirstNonWhitespaceColumn(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const viewColumn = viewModel.getLineFirstNonWhitespaceColumn(viewLineNumber);
            result[i] = this._moveToViewPosition(viewModel, cursor, inSelectionMode, viewLineNumber, viewColumn);
        }
        return result;
    }
    static _moveToViewCenterColumn(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const viewColumn = Math.round((viewModel.getLineMaxColumn(viewLineNumber) + viewModel.getLineMinColumn(viewLineNumber)) / 2);
            result[i] = this._moveToViewPosition(viewModel, cursor, inSelectionMode, viewLineNumber, viewColumn);
        }
        return result;
    }
    static _moveToViewMaxColumn(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const viewColumn = viewModel.getLineMaxColumn(viewLineNumber);
            result[i] = this._moveToViewPosition(viewModel, cursor, inSelectionMode, viewLineNumber, viewColumn);
        }
        return result;
    }
    static _moveToViewLastNonWhitespaceColumn(viewModel, cursors, inSelectionMode) {
        const result = [];
        for (let i = 0, len = cursors.length; i < len; i++) {
            const cursor = cursors[i];
            const viewLineNumber = cursor.viewState.position.lineNumber;
            const viewColumn = viewModel.getLineLastNonWhitespaceColumn(viewLineNumber);
            result[i] = this._moveToViewPosition(viewModel, cursor, inSelectionMode, viewLineNumber, viewColumn);
        }
        return result;
    }
}
var CursorMove;
(function (CursorMove) {
    const isCursorMoveArgs = function (arg) {
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isObject */ .Kn(arg)) {
            return false;
        }
        const cursorMoveArg = arg;
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isString */ .HD(cursorMoveArg.to)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isUndefined */ .o8(cursorMoveArg.select) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isBoolean */ .jn(cursorMoveArg.select)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isUndefined */ .o8(cursorMoveArg.by) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isString */ .HD(cursorMoveArg.by)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isUndefined */ .o8(cursorMoveArg.value) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .isNumber */ .hj(cursorMoveArg.value)) {
            return false;
        }
        return true;
    };
    CursorMove.description = {
        description: 'Move cursor to a logical position in the view',
        args: [
            {
                name: 'Cursor move argument object',
                description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory logical position value providing where to move the cursor.
						\`\`\`
						'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
						'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
						'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
						'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'character', 'halfLine'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'select': If 'true' makes the selection. Default is 'false'.
				`,
                constraint: isCursorMoveArgs,
                schema: {
                    'type': 'object',
                    'required': ['to'],
                    'properties': {
                        'to': {
                            'type': 'string',
                            'enum': ['left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine', 'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter', 'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter', 'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside']
                        },
                        'by': {
                            'type': 'string',
                            'enum': ['line', 'wrappedLine', 'character', 'halfLine']
                        },
                        'value': {
                            'type': 'number',
                            'default': 1
                        },
                        'select': {
                            'type': 'boolean',
                            'default': false
                        }
                    }
                }
            }
        ]
    };
    /**
     * Positions in the view for cursor move command.
     */
    CursorMove.RawDirection = {
        Left: 'left',
        Right: 'right',
        Up: 'up',
        Down: 'down',
        PrevBlankLine: 'prevBlankLine',
        NextBlankLine: 'nextBlankLine',
        WrappedLineStart: 'wrappedLineStart',
        WrappedLineFirstNonWhitespaceCharacter: 'wrappedLineFirstNonWhitespaceCharacter',
        WrappedLineColumnCenter: 'wrappedLineColumnCenter',
        WrappedLineEnd: 'wrappedLineEnd',
        WrappedLineLastNonWhitespaceCharacter: 'wrappedLineLastNonWhitespaceCharacter',
        ViewPortTop: 'viewPortTop',
        ViewPortCenter: 'viewPortCenter',
        ViewPortBottom: 'viewPortBottom',
        ViewPortIfOutside: 'viewPortIfOutside'
    };
    /**
     * Units for Cursor move 'by' argument
     */
    CursorMove.RawUnit = {
        Line: 'line',
        WrappedLine: 'wrappedLine',
        Character: 'character',
        HalfLine: 'halfLine'
    };
    function parse(args) {
        if (!args.to) {
            // illegal arguments
            return null;
        }
        let direction;
        switch (args.to) {
            case CursorMove.RawDirection.Left:
                direction = 0 /* Direction.Left */;
                break;
            case CursorMove.RawDirection.Right:
                direction = 1 /* Direction.Right */;
                break;
            case CursorMove.RawDirection.Up:
                direction = 2 /* Direction.Up */;
                break;
            case CursorMove.RawDirection.Down:
                direction = 3 /* Direction.Down */;
                break;
            case CursorMove.RawDirection.PrevBlankLine:
                direction = 4 /* Direction.PrevBlankLine */;
                break;
            case CursorMove.RawDirection.NextBlankLine:
                direction = 5 /* Direction.NextBlankLine */;
                break;
            case CursorMove.RawDirection.WrappedLineStart:
                direction = 6 /* Direction.WrappedLineStart */;
                break;
            case CursorMove.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
                direction = 7 /* Direction.WrappedLineFirstNonWhitespaceCharacter */;
                break;
            case CursorMove.RawDirection.WrappedLineColumnCenter:
                direction = 8 /* Direction.WrappedLineColumnCenter */;
                break;
            case CursorMove.RawDirection.WrappedLineEnd:
                direction = 9 /* Direction.WrappedLineEnd */;
                break;
            case CursorMove.RawDirection.WrappedLineLastNonWhitespaceCharacter:
                direction = 10 /* Direction.WrappedLineLastNonWhitespaceCharacter */;
                break;
            case CursorMove.RawDirection.ViewPortTop:
                direction = 11 /* Direction.ViewPortTop */;
                break;
            case CursorMove.RawDirection.ViewPortBottom:
                direction = 13 /* Direction.ViewPortBottom */;
                break;
            case CursorMove.RawDirection.ViewPortCenter:
                direction = 12 /* Direction.ViewPortCenter */;
                break;
            case CursorMove.RawDirection.ViewPortIfOutside:
                direction = 14 /* Direction.ViewPortIfOutside */;
                break;
            default:
                // illegal arguments
                return null;
        }
        let unit = 0 /* Unit.None */;
        switch (args.by) {
            case CursorMove.RawUnit.Line:
                unit = 1 /* Unit.Line */;
                break;
            case CursorMove.RawUnit.WrappedLine:
                unit = 2 /* Unit.WrappedLine */;
                break;
            case CursorMove.RawUnit.Character:
                unit = 3 /* Unit.Character */;
                break;
            case CursorMove.RawUnit.HalfLine:
                unit = 4 /* Unit.HalfLine */;
                break;
        }
        return {
            direction: direction,
            unit: unit,
            select: (!!args.select),
            value: (args.value || 1)
        };
    }
    CursorMove.parse = parse;
})(CursorMove || (CursorMove = {}));


/***/ }),

/***/ 88751:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ MoveOperations; }
/* harmony export */ });
/* unused harmony export CursorPosition */
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68273);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21773);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76584);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23607);
/* harmony import */ var _cursorAtomicMoveOperations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1304);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class CursorPosition {
    constructor(lineNumber, column, leftoverVisibleColumns) {
        this._cursorPositionBrand = undefined;
        this.lineNumber = lineNumber;
        this.column = column;
        this.leftoverVisibleColumns = leftoverVisibleColumns;
    }
}
class MoveOperations {
    static leftPosition(model, position) {
        if (position.column > model.getLineMinColumn(position.lineNumber)) {
            return position.delta(undefined, -_base_common_strings_js__WEBPACK_IMPORTED_MODULE_2__/* .prevCharLength */ .HO(model.getLineContent(position.lineNumber), position.column - 1));
        }
        else if (position.lineNumber > 1) {
            const newLineNumber = position.lineNumber - 1;
            return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(newLineNumber, model.getLineMaxColumn(newLineNumber));
        }
        else {
            return position;
        }
    }
    static leftPositionAtomicSoftTabs(model, position, tabSize) {
        if (position.column <= model.getLineIndentColumn(position.lineNumber)) {
            const minColumn = model.getLineMinColumn(position.lineNumber);
            const lineContent = model.getLineContent(position.lineNumber);
            const newPosition = _cursorAtomicMoveOperations_js__WEBPACK_IMPORTED_MODULE_3__/* .AtomicTabMoveOperations */ .l.atomicPosition(lineContent, position.column - 1, tabSize, 0 /* Direction.Left */);
            if (newPosition !== -1 && newPosition + 1 >= minColumn) {
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(position.lineNumber, newPosition + 1);
            }
        }
        return this.leftPosition(model, position);
    }
    static left(config, model, position) {
        const pos = config.stickyTabStops
            ? MoveOperations.leftPositionAtomicSoftTabs(model, position, config.tabSize)
            : MoveOperations.leftPosition(model, position);
        return new CursorPosition(pos.lineNumber, pos.column, 0);
    }
    /**
     * @param noOfColumns Must be either `1`
     * or `Math.round(viewModel.getLineContent(viewLineNumber).length / 2)` (for half lines).
    */
    static moveLeft(config, model, cursor, inSelectionMode, noOfColumns) {
        let lineNumber, column;
        if (cursor.hasSelection() && !inSelectionMode) {
            // If the user has a selection and does not want to extend it,
            // put the cursor at the beginning of the selection.
            lineNumber = cursor.selection.startLineNumber;
            column = cursor.selection.startColumn;
        }
        else {
            // This has no effect if noOfColumns === 1.
            // It is ok to do so in the half-line scenario.
            const pos = cursor.position.delta(undefined, -(noOfColumns - 1));
            // We clip the position before normalization, as normalization is not defined
            // for possibly negative columns.
            const normalizedPos = model.normalizePosition(MoveOperations.clipPositionColumn(pos, model), 0 /* PositionAffinity.Left */);
            const p = MoveOperations.left(config, model, normalizedPos);
            lineNumber = p.lineNumber;
            column = p.column;
        }
        return cursor.move(inSelectionMode, lineNumber, column, 0);
    }
    /**
     * Adjusts the column so that it is within min/max of the line.
    */
    static clipPositionColumn(position, model) {
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(position.lineNumber, MoveOperations.clipRange(position.column, model.getLineMinColumn(position.lineNumber), model.getLineMaxColumn(position.lineNumber)));
    }
    static clipRange(value, min, max) {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value;
    }
    static rightPosition(model, lineNumber, column) {
        if (column < model.getLineMaxColumn(lineNumber)) {
            column = column + _base_common_strings_js__WEBPACK_IMPORTED_MODULE_2__/* .nextCharLength */ .vH(model.getLineContent(lineNumber), column - 1);
        }
        else if (lineNumber < model.getLineCount()) {
            lineNumber = lineNumber + 1;
            column = model.getLineMinColumn(lineNumber);
        }
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
    }
    static rightPositionAtomicSoftTabs(model, lineNumber, column, tabSize, indentSize) {
        if (column < model.getLineIndentColumn(lineNumber)) {
            const lineContent = model.getLineContent(lineNumber);
            const newPosition = _cursorAtomicMoveOperations_js__WEBPACK_IMPORTED_MODULE_3__/* .AtomicTabMoveOperations */ .l.atomicPosition(lineContent, column - 1, tabSize, 1 /* Direction.Right */);
            if (newPosition !== -1) {
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, newPosition + 1);
            }
        }
        return this.rightPosition(model, lineNumber, column);
    }
    static right(config, model, position) {
        const pos = config.stickyTabStops
            ? MoveOperations.rightPositionAtomicSoftTabs(model, position.lineNumber, position.column, config.tabSize, config.indentSize)
            : MoveOperations.rightPosition(model, position.lineNumber, position.column);
        return new CursorPosition(pos.lineNumber, pos.column, 0);
    }
    static moveRight(config, model, cursor, inSelectionMode, noOfColumns) {
        let lineNumber, column;
        if (cursor.hasSelection() && !inSelectionMode) {
            // If we are in selection mode, move right without selection cancels selection and puts cursor at the end of the selection
            lineNumber = cursor.selection.endLineNumber;
            column = cursor.selection.endColumn;
        }
        else {
            const pos = cursor.position.delta(undefined, noOfColumns - 1);
            const normalizedPos = model.normalizePosition(MoveOperations.clipPositionColumn(pos, model), 1 /* PositionAffinity.Right */);
            const r = MoveOperations.right(config, model, normalizedPos);
            lineNumber = r.lineNumber;
            column = r.column;
        }
        return cursor.move(inSelectionMode, lineNumber, column, 0);
    }
    static vertical(config, model, lineNumber, column, leftoverVisibleColumns, newLineNumber, allowMoveOnEdgeLine, normalizationAffinity) {
        const currentVisibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(model.getLineContent(lineNumber), column, config.tabSize) + leftoverVisibleColumns;
        const lineCount = model.getLineCount();
        const wasOnFirstPosition = (lineNumber === 1 && column === 1);
        const wasOnLastPosition = (lineNumber === lineCount && column === model.getLineMaxColumn(lineNumber));
        const wasAtEdgePosition = (newLineNumber < lineNumber ? wasOnFirstPosition : wasOnLastPosition);
        lineNumber = newLineNumber;
        if (lineNumber < 1) {
            lineNumber = 1;
            if (allowMoveOnEdgeLine) {
                column = model.getLineMinColumn(lineNumber);
            }
            else {
                column = Math.min(model.getLineMaxColumn(lineNumber), column);
            }
        }
        else if (lineNumber > lineCount) {
            lineNumber = lineCount;
            if (allowMoveOnEdgeLine) {
                column = model.getLineMaxColumn(lineNumber);
            }
            else {
                column = Math.min(model.getLineMaxColumn(lineNumber), column);
            }
        }
        else {
            column = config.columnFromVisibleColumn(model, lineNumber, currentVisibleColumn);
        }
        if (wasAtEdgePosition) {
            leftoverVisibleColumns = 0;
        }
        else {
            leftoverVisibleColumns = currentVisibleColumn - _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(model.getLineContent(lineNumber), column, config.tabSize);
        }
        if (normalizationAffinity !== undefined) {
            const position = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            const newPosition = model.normalizePosition(position, normalizationAffinity);
            leftoverVisibleColumns = leftoverVisibleColumns + (column - newPosition.column);
            lineNumber = newPosition.lineNumber;
            column = newPosition.column;
        }
        return new CursorPosition(lineNumber, column, leftoverVisibleColumns);
    }
    static down(config, model, lineNumber, column, leftoverVisibleColumns, count, allowMoveOnLastLine) {
        return this.vertical(config, model, lineNumber, column, leftoverVisibleColumns, lineNumber + count, allowMoveOnLastLine, 4 /* PositionAffinity.RightOfInjectedText */);
    }
    static moveDown(config, model, cursor, inSelectionMode, linesCount) {
        let lineNumber, column;
        if (cursor.hasSelection() && !inSelectionMode) {
            // If we are in selection mode, move down acts relative to the end of selection
            lineNumber = cursor.selection.endLineNumber;
            column = cursor.selection.endColumn;
        }
        else {
            lineNumber = cursor.position.lineNumber;
            column = cursor.position.column;
        }
        const r = MoveOperations.down(config, model, lineNumber, column, cursor.leftoverVisibleColumns, linesCount, true);
        return cursor.move(inSelectionMode, r.lineNumber, r.column, r.leftoverVisibleColumns);
    }
    static translateDown(config, model, cursor) {
        const selection = cursor.selection;
        const selectionStart = MoveOperations.down(config, model, selection.selectionStartLineNumber, selection.selectionStartColumn, cursor.selectionStartLeftoverVisibleColumns, 1, false);
        const position = MoveOperations.down(config, model, selection.positionLineNumber, selection.positionColumn, cursor.leftoverVisibleColumns, 1, false);
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(selectionStart.lineNumber, selectionStart.column, selectionStart.lineNumber, selectionStart.column), 0 /* SelectionStartKind.Simple */, selectionStart.leftoverVisibleColumns, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(position.lineNumber, position.column), position.leftoverVisibleColumns);
    }
    static up(config, model, lineNumber, column, leftoverVisibleColumns, count, allowMoveOnFirstLine) {
        return this.vertical(config, model, lineNumber, column, leftoverVisibleColumns, lineNumber - count, allowMoveOnFirstLine, 3 /* PositionAffinity.LeftOfInjectedText */);
    }
    static moveUp(config, model, cursor, inSelectionMode, linesCount) {
        let lineNumber, column;
        if (cursor.hasSelection() && !inSelectionMode) {
            // If we are in selection mode, move up acts relative to the beginning of selection
            lineNumber = cursor.selection.startLineNumber;
            column = cursor.selection.startColumn;
        }
        else {
            lineNumber = cursor.position.lineNumber;
            column = cursor.position.column;
        }
        const r = MoveOperations.up(config, model, lineNumber, column, cursor.leftoverVisibleColumns, linesCount, true);
        return cursor.move(inSelectionMode, r.lineNumber, r.column, r.leftoverVisibleColumns);
    }
    static translateUp(config, model, cursor) {
        const selection = cursor.selection;
        const selectionStart = MoveOperations.up(config, model, selection.selectionStartLineNumber, selection.selectionStartColumn, cursor.selectionStartLeftoverVisibleColumns, 1, false);
        const position = MoveOperations.up(config, model, selection.positionLineNumber, selection.positionColumn, cursor.leftoverVisibleColumns, 1, false);
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(selectionStart.lineNumber, selectionStart.column, selectionStart.lineNumber, selectionStart.column), 0 /* SelectionStartKind.Simple */, selectionStart.leftoverVisibleColumns, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(position.lineNumber, position.column), position.leftoverVisibleColumns);
    }
    static _isBlankLine(model, lineNumber) {
        if (model.getLineFirstNonWhitespaceColumn(lineNumber) === 0) {
            // empty or contains only whitespace
            return true;
        }
        return false;
    }
    static moveToPrevBlankLine(config, model, cursor, inSelectionMode) {
        let lineNumber = cursor.position.lineNumber;
        // If our current line is blank, move to the previous non-blank line
        while (lineNumber > 1 && this._isBlankLine(model, lineNumber)) {
            lineNumber--;
        }
        // Find the previous blank line
        while (lineNumber > 1 && !this._isBlankLine(model, lineNumber)) {
            lineNumber--;
        }
        return cursor.move(inSelectionMode, lineNumber, model.getLineMinColumn(lineNumber), 0);
    }
    static moveToNextBlankLine(config, model, cursor, inSelectionMode) {
        const lineCount = model.getLineCount();
        let lineNumber = cursor.position.lineNumber;
        // If our current line is blank, move to the next non-blank line
        while (lineNumber < lineCount && this._isBlankLine(model, lineNumber)) {
            lineNumber++;
        }
        // Find the next blank line
        while (lineNumber < lineCount && !this._isBlankLine(model, lineNumber)) {
            lineNumber++;
        }
        return cursor.move(inSelectionMode, lineNumber, model.getLineMinColumn(lineNumber), 0);
    }
    static moveToBeginningOfLine(config, model, cursor, inSelectionMode) {
        const lineNumber = cursor.position.lineNumber;
        const minColumn = model.getLineMinColumn(lineNumber);
        const firstNonBlankColumn = model.getLineFirstNonWhitespaceColumn(lineNumber) || minColumn;
        let column;
        const relevantColumnNumber = cursor.position.column;
        if (relevantColumnNumber === firstNonBlankColumn) {
            column = minColumn;
        }
        else {
            column = firstNonBlankColumn;
        }
        return cursor.move(inSelectionMode, lineNumber, column, 0);
    }
    static moveToEndOfLine(config, model, cursor, inSelectionMode, sticky) {
        const lineNumber = cursor.position.lineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        return cursor.move(inSelectionMode, lineNumber, maxColumn, sticky ? 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */ - maxColumn : 0);
    }
    static moveToBeginningOfBuffer(config, model, cursor, inSelectionMode) {
        return cursor.move(inSelectionMode, 1, 1, 0);
    }
    static moveToEndOfBuffer(config, model, cursor, inSelectionMode) {
        const lastLineNumber = model.getLineCount();
        const lastColumn = model.getLineMaxColumn(lastLineNumber);
        return cursor.move(inSelectionMode, lastLineNumber, lastColumn, 0);
    }
}


/***/ }),

/***/ 99007:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nu: function() { return /* binding */ CompositionOutcome; },
/* harmony export */   g_: function() { return /* binding */ TypeWithAutoClosingCommand; },
/* harmony export */   u6: function() { return /* binding */ TypeOperations; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23607);
/* harmony import */ var _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2056);
/* harmony import */ var _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24618);
/* harmony import */ var _commands_surroundSelectionCommand_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5155);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68273);
/* harmony import */ var _core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80238);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76584);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13372);
/* harmony import */ var _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79287);
/* harmony import */ var _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11296);
/* harmony import */ var _languages_supports_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46429);
/* harmony import */ var _languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55542);
/* harmony import */ var _languages_enterAction_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65033);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/














class TypeOperations {
    static indent(config, model, selections) {
        if (model === null || selections === null) {
            return [];
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__/* .ShiftCommand */ .U(selections[i], {
                isUnshift: false,
                tabSize: config.tabSize,
                indentSize: config.indentSize,
                insertSpaces: config.insertSpaces,
                useTabStops: config.useTabStops,
                autoIndent: config.autoIndent
            }, config.languageConfigurationService);
        }
        return commands;
    }
    static outdent(config, model, selections) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__/* .ShiftCommand */ .U(selections[i], {
                isUnshift: true,
                tabSize: config.tabSize,
                indentSize: config.indentSize,
                insertSpaces: config.insertSpaces,
                useTabStops: config.useTabStops,
                autoIndent: config.autoIndent
            }, config.languageConfigurationService);
        }
        return commands;
    }
    static shiftIndent(config, indentation, count) {
        count = count || 1;
        return _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__/* .ShiftCommand */ .U.shiftIndent(indentation, indentation.length + count, config.tabSize, config.indentSize, config.insertSpaces);
    }
    static unshiftIndent(config, indentation, count) {
        count = count || 1;
        return _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__/* .ShiftCommand */ .U.unshiftIndent(indentation, indentation.length + count, config.tabSize, config.indentSize, config.insertSpaces);
    }
    static _distributedPaste(config, model, selections, text) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(selections[i], text[i]);
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, commands, {
            shouldPushStackElementBefore: true,
            shouldPushStackElementAfter: true
        });
    }
    static _simplePaste(config, model, selections, text, pasteOnNewLine) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            const position = selection.getPosition();
            if (pasteOnNewLine && !selection.isEmpty()) {
                pasteOnNewLine = false;
            }
            if (pasteOnNewLine && text.indexOf('\n') !== text.length - 1) {
                pasteOnNewLine = false;
            }
            if (pasteOnNewLine) {
                // Paste entire line at the beginning of line
                const typeSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(position.lineNumber, 1, position.lineNumber, 1);
                commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandThatPreservesSelection */ .hP(typeSelection, text, selection, true);
            }
            else {
                commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(selection, text);
            }
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, commands, {
            shouldPushStackElementBefore: true,
            shouldPushStackElementAfter: true
        });
    }
    static _distributePasteToCursors(config, selections, text, pasteOnNewLine, multicursorText) {
        if (pasteOnNewLine) {
            return null;
        }
        if (selections.length === 1) {
            return null;
        }
        if (multicursorText && multicursorText.length === selections.length) {
            return multicursorText;
        }
        if (config.multiCursorPaste === 'spread') {
            // Try to spread the pasted text in case the line count matches the cursor count
            // Remove trailing \n if present
            if (text.charCodeAt(text.length - 1) === 10 /* CharCode.LineFeed */) {
                text = text.substr(0, text.length - 1);
            }
            // Remove trailing \r if present
            if (text.charCodeAt(text.length - 1) === 13 /* CharCode.CarriageReturn */) {
                text = text.substr(0, text.length - 1);
            }
            const lines = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .splitLines */ .uq(text);
            if (lines.length === selections.length) {
                return lines;
            }
        }
        return null;
    }
    static paste(config, model, selections, text, pasteOnNewLine, multicursorText) {
        const distributedPaste = this._distributePasteToCursors(config, selections, text, pasteOnNewLine, multicursorText);
        if (distributedPaste) {
            selections = selections.sort(_core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e.compareRangesUsingStarts);
            return this._distributedPaste(config, model, selections, distributedPaste);
        }
        else {
            return this._simplePaste(config, model, selections, text, pasteOnNewLine);
        }
    }
    static _goodIndentForLine(config, model, lineNumber) {
        let action = null;
        let indentation = '';
        const expectedIndentAction = (0,_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_7__/* .getInheritIndentForLine */ .r7)(config.autoIndent, model, lineNumber, false, config.languageConfigurationService);
        if (expectedIndentAction) {
            action = expectedIndentAction.action;
            indentation = expectedIndentAction.indentation;
        }
        else if (lineNumber > 1) {
            let lastLineNumber;
            for (lastLineNumber = lineNumber - 1; lastLineNumber >= 1; lastLineNumber--) {
                const lineText = model.getLineContent(lastLineNumber);
                const nonWhitespaceIdx = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .lastNonWhitespaceIndex */ .ow(lineText);
                if (nonWhitespaceIdx >= 0) {
                    break;
                }
            }
            if (lastLineNumber < 1) {
                // No previous line with content found
                return null;
            }
            const maxColumn = model.getLineMaxColumn(lastLineNumber);
            const expectedEnterAction = (0,_languages_enterAction_js__WEBPACK_IMPORTED_MODULE_8__/* .getEnterAction */ .A)(config.autoIndent, model, new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(lastLineNumber, maxColumn, lastLineNumber, maxColumn), config.languageConfigurationService);
            if (expectedEnterAction) {
                indentation = expectedEnterAction.indentation + expectedEnterAction.appendText;
            }
        }
        if (action) {
            if (action === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.Indent) {
                indentation = TypeOperations.shiftIndent(config, indentation);
            }
            if (action === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.Outdent) {
                indentation = TypeOperations.unshiftIndent(config, indentation);
            }
            indentation = config.normalizeIndentation(indentation);
        }
        if (!indentation) {
            return null;
        }
        return indentation;
    }
    static _replaceJumpToNextIndent(config, model, selection, insertsAutoWhitespace) {
        let typeText = '';
        const position = selection.getStartPosition();
        if (config.insertSpaces) {
            const visibleColumnFromColumn = config.visibleColumnFromColumn(model, position);
            const indentSize = config.indentSize;
            const spacesCnt = indentSize - (visibleColumnFromColumn % indentSize);
            for (let i = 0; i < spacesCnt; i++) {
                typeText += ' ';
            }
        }
        else {
            typeText = '\t';
        }
        return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(selection, typeText, insertsAutoWhitespace);
    }
    static tab(config, model, selections) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (selection.isEmpty()) {
                const lineText = model.getLineContent(selection.startLineNumber);
                if (/^\s*$/.test(lineText) && model.tokenization.isCheapToTokenize(selection.startLineNumber)) {
                    let goodIndent = this._goodIndentForLine(config, model, selection.startLineNumber);
                    goodIndent = goodIndent || '\t';
                    const possibleTypeText = config.normalizeIndentation(goodIndent);
                    if (!lineText.startsWith(possibleTypeText)) {
                        commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(selection.startLineNumber, 1, selection.startLineNumber, lineText.length + 1), possibleTypeText, true);
                        continue;
                    }
                }
                commands[i] = this._replaceJumpToNextIndent(config, model, selection, true);
            }
            else {
                if (selection.startLineNumber === selection.endLineNumber) {
                    const lineMaxColumn = model.getLineMaxColumn(selection.startLineNumber);
                    if (selection.startColumn !== 1 || selection.endColumn !== lineMaxColumn) {
                        // This is a single line selection that is not the entire line
                        commands[i] = this._replaceJumpToNextIndent(config, model, selection, false);
                        continue;
                    }
                }
                commands[i] = new _commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_2__/* .ShiftCommand */ .U(selection, {
                    isUnshift: false,
                    tabSize: config.tabSize,
                    indentSize: config.indentSize,
                    insertSpaces: config.insertSpaces,
                    useTabStops: config.useTabStops,
                    autoIndent: config.autoIndent
                }, config.languageConfigurationService);
            }
        }
        return commands;
    }
    static compositionType(prevEditOperationType, config, model, selections, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta) {
        const commands = selections.map(selection => this._compositionType(model, selection, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta));
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
            shouldPushStackElementBefore: shouldPushStackElementBetween(prevEditOperationType, 4 /* EditOperationType.TypingOther */),
            shouldPushStackElementAfter: false
        });
    }
    static _compositionType(model, selection, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta) {
        if (!selection.isEmpty()) {
            // looks like https://github.com/microsoft/vscode/issues/2773
            // where a cursor operation occurred before a canceled composition
            // => ignore composition
            return null;
        }
        const pos = selection.getPosition();
        const startColumn = Math.max(1, pos.column - replacePrevCharCnt);
        const endColumn = Math.min(model.getLineMaxColumn(pos.lineNumber), pos.column + replaceNextCharCnt);
        const range = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(pos.lineNumber, startColumn, pos.lineNumber, endColumn);
        const oldText = model.getValueInRange(range);
        if (oldText === text && positionDelta === 0) {
            // => ignore composition that doesn't do anything
            return null;
        }
        return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithOffsetCursorState */ .Uo(range, text, 0, positionDelta);
    }
    static _typeCommand(range, text, keepPosition) {
        if (keepPosition) {
            return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithoutChangingPosition */ .Sj(range, text, true);
        }
        else {
            return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(range, text, true);
        }
    }
    static _enter(config, model, keepPosition, range) {
        if (config.autoIndent === 0 /* EditorAutoIndentStrategy.None */) {
            return TypeOperations._typeCommand(range, '\n', keepPosition);
        }
        if (!model.tokenization.isCheapToTokenize(range.getStartPosition().lineNumber) || config.autoIndent === 1 /* EditorAutoIndentStrategy.Keep */) {
            const lineText = model.getLineContent(range.startLineNumber);
            const indentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(lineText).substring(0, range.startColumn - 1);
            return TypeOperations._typeCommand(range, '\n' + config.normalizeIndentation(indentation), keepPosition);
        }
        const r = (0,_languages_enterAction_js__WEBPACK_IMPORTED_MODULE_8__/* .getEnterAction */ .A)(config.autoIndent, model, range, config.languageConfigurationService);
        if (r) {
            if (r.indentAction === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.None) {
                // Nothing special
                return TypeOperations._typeCommand(range, '\n' + config.normalizeIndentation(r.indentation + r.appendText), keepPosition);
            }
            else if (r.indentAction === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.Indent) {
                // Indent once
                return TypeOperations._typeCommand(range, '\n' + config.normalizeIndentation(r.indentation + r.appendText), keepPosition);
            }
            else if (r.indentAction === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.IndentOutdent) {
                // Ultra special
                const normalIndent = config.normalizeIndentation(r.indentation);
                const increasedIndent = config.normalizeIndentation(r.indentation + r.appendText);
                const typeText = '\n' + increasedIndent + '\n' + normalIndent;
                if (keepPosition) {
                    return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithoutChangingPosition */ .Sj(range, typeText, true);
                }
                else {
                    return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithOffsetCursorState */ .Uo(range, typeText, -1, increasedIndent.length - normalIndent.length, true);
                }
            }
            else if (r.indentAction === _languages_languageConfiguration_js__WEBPACK_IMPORTED_MODULE_5__/* .IndentAction */ .wU.Outdent) {
                const actualIndentation = TypeOperations.unshiftIndent(config, r.indentation);
                return TypeOperations._typeCommand(range, '\n' + config.normalizeIndentation(actualIndentation + r.appendText), keepPosition);
            }
        }
        const lineText = model.getLineContent(range.startLineNumber);
        const indentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(lineText).substring(0, range.startColumn - 1);
        if (config.autoIndent >= 4 /* EditorAutoIndentStrategy.Full */) {
            const ir = (0,_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_7__/* .getIndentForEnter */ .UF)(config.autoIndent, model, range, {
                unshiftIndent: (indent) => {
                    return TypeOperations.unshiftIndent(config, indent);
                },
                shiftIndent: (indent) => {
                    return TypeOperations.shiftIndent(config, indent);
                },
                normalizeIndentation: (indent) => {
                    return config.normalizeIndentation(indent);
                }
            }, config.languageConfigurationService);
            if (ir) {
                let oldEndViewColumn = config.visibleColumnFromColumn(model, range.getEndPosition());
                const oldEndColumn = range.endColumn;
                const newLineContent = model.getLineContent(range.endLineNumber);
                const firstNonWhitespace = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .firstNonWhitespaceIndex */ .LC(newLineContent);
                if (firstNonWhitespace >= 0) {
                    range = range.setEndPosition(range.endLineNumber, Math.max(range.endColumn, firstNonWhitespace + 1));
                }
                else {
                    range = range.setEndPosition(range.endLineNumber, model.getLineMaxColumn(range.endLineNumber));
                }
                if (keepPosition) {
                    return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithoutChangingPosition */ .Sj(range, '\n' + config.normalizeIndentation(ir.afterEnter), true);
                }
                else {
                    let offset = 0;
                    if (oldEndColumn <= firstNonWhitespace + 1) {
                        if (!config.insertSpaces) {
                            oldEndViewColumn = Math.ceil(oldEndViewColumn / config.indentSize);
                        }
                        offset = Math.min(oldEndViewColumn + 1 - config.normalizeIndentation(ir.afterEnter).length - 1, 0);
                    }
                    return new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithOffsetCursorState */ .Uo(range, '\n' + config.normalizeIndentation(ir.afterEnter), 0, offset, true);
                }
            }
        }
        return TypeOperations._typeCommand(range, '\n' + config.normalizeIndentation(indentation), keepPosition);
    }
    static _isAutoIndentType(config, model, selections) {
        if (config.autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
            return false;
        }
        for (let i = 0, len = selections.length; i < len; i++) {
            if (!model.tokenization.isCheapToTokenize(selections[i].getEndPosition().lineNumber)) {
                return false;
            }
        }
        return true;
    }
    static _runAutoIndentType(config, model, range, ch) {
        const currentIndentation = (0,_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_6__/* .getIndentationAtPosition */ .u0)(model, range.startLineNumber, range.startColumn);
        const actualIndentation = (0,_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_7__/* .getIndentActionForType */ .$9)(config.autoIndent, model, range, ch, {
            shiftIndent: (indentation) => {
                return TypeOperations.shiftIndent(config, indentation);
            },
            unshiftIndent: (indentation) => {
                return TypeOperations.unshiftIndent(config, indentation);
            },
        }, config.languageConfigurationService);
        if (actualIndentation === null) {
            return null;
        }
        if (actualIndentation !== config.normalizeIndentation(currentIndentation)) {
            const firstNonWhitespace = model.getLineFirstNonWhitespaceColumn(range.startLineNumber);
            if (firstNonWhitespace === 0) {
                return TypeOperations._typeCommand(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(range.startLineNumber, 1, range.endLineNumber, range.endColumn), config.normalizeIndentation(actualIndentation) + ch, false);
            }
            else {
                return TypeOperations._typeCommand(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(range.startLineNumber, 1, range.endLineNumber, range.endColumn), config.normalizeIndentation(actualIndentation) +
                    model.getLineContent(range.startLineNumber).substring(firstNonWhitespace - 1, range.startColumn - 1) + ch, false);
            }
        }
        return null;
    }
    static _isAutoClosingOvertype(config, model, selections, autoClosedCharacters, ch) {
        if (config.autoClosingOvertype === 'never') {
            return false;
        }
        if (!config.autoClosingPairs.autoClosingPairsCloseSingleChar.has(ch)) {
            return false;
        }
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (!selection.isEmpty()) {
                return false;
            }
            const position = selection.getPosition();
            const lineText = model.getLineContent(position.lineNumber);
            const afterCharacter = lineText.charAt(position.column - 1);
            if (afterCharacter !== ch) {
                return false;
            }
            // Do not over-type quotes after a backslash
            const chIsQuote = (0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(ch);
            const beforeCharacter = position.column > 2 ? lineText.charCodeAt(position.column - 2) : 0 /* CharCode.Null */;
            if (beforeCharacter === 92 /* CharCode.Backslash */ && chIsQuote) {
                return false;
            }
            // Must over-type a closing character typed by the editor
            if (config.autoClosingOvertype === 'auto') {
                let found = false;
                for (let j = 0, lenJ = autoClosedCharacters.length; j < lenJ; j++) {
                    const autoClosedCharacter = autoClosedCharacters[j];
                    if (position.lineNumber === autoClosedCharacter.startLineNumber && position.column === autoClosedCharacter.startColumn) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            }
        }
        return true;
    }
    static _runAutoClosingOvertype(prevEditOperationType, config, model, selections, ch) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            const position = selection.getPosition();
            const typeSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(position.lineNumber, position.column, position.lineNumber, position.column + 1);
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(typeSelection, ch);
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
            shouldPushStackElementBefore: shouldPushStackElementBetween(prevEditOperationType, 4 /* EditOperationType.TypingOther */),
            shouldPushStackElementAfter: false
        });
    }
    static _isBeforeClosingBrace(config, lineAfter) {
        // If the start of lineAfter can be interpretted as both a starting or ending brace, default to returning false
        const nextChar = lineAfter.charAt(0);
        const potentialStartingBraces = config.autoClosingPairs.autoClosingPairsOpenByStart.get(nextChar) || [];
        const potentialClosingBraces = config.autoClosingPairs.autoClosingPairsCloseByStart.get(nextChar) || [];
        const isBeforeStartingBrace = potentialStartingBraces.some(x => lineAfter.startsWith(x.open));
        const isBeforeClosingBrace = potentialClosingBraces.some(x => lineAfter.startsWith(x.close));
        return !isBeforeStartingBrace && isBeforeClosingBrace;
    }
    /**
     * Determine if typing `ch` at all `positions` in the `model` results in an
     * auto closing open sequence being typed.
     *
     * Auto closing open sequences can consist of multiple characters, which
     * can lead to ambiguities. In such a case, the longest auto-closing open
     * sequence is returned.
     */
    static _findAutoClosingPairOpen(config, model, positions, ch) {
        const candidates = config.autoClosingPairs.autoClosingPairsOpenByEnd.get(ch);
        if (!candidates) {
            return null;
        }
        // Determine which auto-closing pair it is
        let result = null;
        for (const candidate of candidates) {
            if (result === null || candidate.open.length > result.open.length) {
                let candidateIsMatch = true;
                for (const position of positions) {
                    const relevantText = model.getValueInRange(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(position.lineNumber, position.column - candidate.open.length + 1, position.lineNumber, position.column));
                    if (relevantText + ch !== candidate.open) {
                        candidateIsMatch = false;
                        break;
                    }
                }
                if (candidateIsMatch) {
                    result = candidate;
                }
            }
        }
        return result;
    }
    /**
     * Find another auto-closing pair that is contained by the one passed in.
     *
     * e.g. when having [(,)] and [(*,*)] as auto-closing pairs
     * this method will find [(,)] as a containment pair for [(*,*)]
     */
    static _findContainedAutoClosingPair(config, pair) {
        if (pair.open.length <= 1) {
            return null;
        }
        const lastChar = pair.close.charAt(pair.close.length - 1);
        // get candidates with the same last character as close
        const candidates = config.autoClosingPairs.autoClosingPairsCloseByEnd.get(lastChar) || [];
        let result = null;
        for (const candidate of candidates) {
            if (candidate.open !== pair.open && pair.open.includes(candidate.open) && pair.close.endsWith(candidate.close)) {
                if (!result || candidate.open.length > result.open.length) {
                    result = candidate;
                }
            }
        }
        return result;
    }
    static _getAutoClosingPairClose(config, model, selections, ch, chIsAlreadyTyped) {
        const chIsQuote = (0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(ch);
        const autoCloseConfig = (chIsQuote ? config.autoClosingQuotes : config.autoClosingBrackets);
        const shouldAutoCloseBefore = (chIsQuote ? config.shouldAutoCloseBefore.quote : config.shouldAutoCloseBefore.bracket);
        if (autoCloseConfig === 'never') {
            return null;
        }
        for (const selection of selections) {
            if (!selection.isEmpty()) {
                return null;
            }
        }
        // This method is called both when typing (regularly) and when composition ends
        // This means that we need to work with a text buffer where sometimes `ch` is not
        // there (it is being typed right now) or with a text buffer where `ch` has already been typed
        //
        // In order to avoid adding checks for `chIsAlreadyTyped` in all places, we will work
        // with two conceptual positions, the position before `ch` and the position after `ch`
        //
        const positions = selections.map((s) => {
            const position = s.getPosition();
            if (chIsAlreadyTyped) {
                return { lineNumber: position.lineNumber, beforeColumn: position.column - ch.length, afterColumn: position.column };
            }
            else {
                return { lineNumber: position.lineNumber, beforeColumn: position.column, afterColumn: position.column };
            }
        });
        // Find the longest auto-closing open pair in case of multiple ending in `ch`
        // e.g. when having [f","] and [","], it picks [f","] if the character before is f
        const pair = this._findAutoClosingPairOpen(config, model, positions.map(p => new _core_position_js__WEBPACK_IMPORTED_MODULE_11__/* .Position */ .L(p.lineNumber, p.beforeColumn)), ch);
        if (!pair) {
            return null;
        }
        // Sometimes, it is possible to have two auto-closing pairs that have a containment relationship
        // e.g. when having [(,)] and [(*,*)]
        // - when typing (, the resulting state is (|)
        // - when typing *, the desired resulting state is (*|*), not (*|*))
        const containedPair = this._findContainedAutoClosingPair(config, pair);
        const containedPairClose = containedPair ? containedPair.close : '';
        let isContainedPairPresent = true;
        for (const position of positions) {
            const { lineNumber, beforeColumn, afterColumn } = position;
            const lineText = model.getLineContent(lineNumber);
            const lineBefore = lineText.substring(0, beforeColumn - 1);
            const lineAfter = lineText.substring(afterColumn - 1);
            if (!lineAfter.startsWith(containedPairClose)) {
                isContainedPairPresent = false;
            }
            // Only consider auto closing the pair if an allowed character follows or if another autoclosed pair closing brace follows
            if (lineAfter.length > 0) {
                const characterAfter = lineAfter.charAt(0);
                const isBeforeCloseBrace = TypeOperations._isBeforeClosingBrace(config, lineAfter);
                if (!isBeforeCloseBrace && !shouldAutoCloseBefore(characterAfter)) {
                    return null;
                }
            }
            // Do not auto-close ' or " after a word character
            if (pair.open.length === 1 && (ch === '\'' || ch === '"') && autoCloseConfig !== 'always') {
                const wordSeparators = (0,_core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_4__/* .getMapForWordSeparators */ .u)(config.wordSeparators);
                if (lineBefore.length > 0) {
                    const characterBefore = lineBefore.charCodeAt(lineBefore.length - 1);
                    if (wordSeparators.get(characterBefore) === 0 /* WordCharacterClass.Regular */) {
                        return null;
                    }
                }
            }
            if (!model.tokenization.isCheapToTokenize(lineNumber)) {
                // Do not force tokenization
                return null;
            }
            model.tokenization.forceTokenization(lineNumber);
            const lineTokens = model.tokenization.getLineTokens(lineNumber);
            const scopedLineTokens = (0,_languages_supports_js__WEBPACK_IMPORTED_MODULE_12__/* .createScopedLineTokens */ .wH)(lineTokens, beforeColumn - 1);
            if (!pair.shouldAutoClose(scopedLineTokens, beforeColumn - scopedLineTokens.firstCharOffset)) {
                return null;
            }
            // Typing for example a quote could either start a new string, in which case auto-closing is desirable
            // or it could end a previously started string, in which case auto-closing is not desirable
            //
            // In certain cases, it is really not possible to look at the previous token to determine
            // what would happen. That's why we do something really unusual, we pretend to type a different
            // character and ask the tokenizer what the outcome of doing that is: after typing a neutral
            // character, are we in a string (i.e. the quote would most likely end a string) or not?
            //
            const neutralCharacter = pair.findNeutralCharacter();
            if (neutralCharacter) {
                const tokenType = model.tokenization.getTokenTypeIfInsertingCharacter(lineNumber, beforeColumn, neutralCharacter);
                if (!pair.isOK(tokenType)) {
                    return null;
                }
            }
        }
        if (isContainedPairPresent) {
            return pair.close.substring(0, pair.close.length - containedPairClose.length);
        }
        else {
            return pair.close;
        }
    }
    static _runAutoClosingOpenCharType(prevEditOperationType, config, model, selections, ch, chIsAlreadyTyped, autoClosingPairClose) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            commands[i] = new TypeWithAutoClosingCommand(selection, ch, !chIsAlreadyTyped, autoClosingPairClose);
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
            shouldPushStackElementBefore: true,
            shouldPushStackElementAfter: false
        });
    }
    static _shouldSurroundChar(config, ch) {
        if ((0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(ch)) {
            return (config.autoSurround === 'quotes' || config.autoSurround === 'languageDefined');
        }
        else {
            // Character is a bracket
            return (config.autoSurround === 'brackets' || config.autoSurround === 'languageDefined');
        }
    }
    static _isSurroundSelectionType(config, model, selections, ch) {
        if (!TypeOperations._shouldSurroundChar(config, ch) || !config.surroundingPairs.hasOwnProperty(ch)) {
            return false;
        }
        const isTypingAQuoteCharacter = (0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(ch);
        for (const selection of selections) {
            if (selection.isEmpty()) {
                return false;
            }
            let selectionContainsOnlyWhitespace = true;
            for (let lineNumber = selection.startLineNumber; lineNumber <= selection.endLineNumber; lineNumber++) {
                const lineText = model.getLineContent(lineNumber);
                const startIndex = (lineNumber === selection.startLineNumber ? selection.startColumn - 1 : 0);
                const endIndex = (lineNumber === selection.endLineNumber ? selection.endColumn - 1 : lineText.length);
                const selectedText = lineText.substring(startIndex, endIndex);
                if (/[^ \t]/.test(selectedText)) {
                    // this selected text contains something other than whitespace
                    selectionContainsOnlyWhitespace = false;
                    break;
                }
            }
            if (selectionContainsOnlyWhitespace) {
                return false;
            }
            if (isTypingAQuoteCharacter && selection.startLineNumber === selection.endLineNumber && selection.startColumn + 1 === selection.endColumn) {
                const selectionText = model.getValueInRange(selection);
                if ((0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(selectionText)) {
                    // Typing a quote character on top of another quote character
                    // => disable surround selection type
                    return false;
                }
            }
        }
        return true;
    }
    static _runSurroundSelectionType(prevEditOperationType, config, model, selections, ch) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            const closeCharacter = config.surroundingPairs[ch];
            commands[i] = new _commands_surroundSelectionCommand_js__WEBPACK_IMPORTED_MODULE_13__/* .SurroundSelectionCommand */ .F(selection, ch, closeCharacter);
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, commands, {
            shouldPushStackElementBefore: true,
            shouldPushStackElementAfter: true
        });
    }
    static _isTypeInterceptorElectricChar(config, model, selections) {
        if (selections.length === 1 && model.tokenization.isCheapToTokenize(selections[0].getEndPosition().lineNumber)) {
            return true;
        }
        return false;
    }
    static _typeInterceptorElectricChar(prevEditOperationType, config, model, selection, ch) {
        if (!config.electricChars.hasOwnProperty(ch) || !selection.isEmpty()) {
            return null;
        }
        const position = selection.getPosition();
        model.tokenization.forceTokenization(position.lineNumber);
        const lineTokens = model.tokenization.getLineTokens(position.lineNumber);
        let electricAction;
        try {
            electricAction = config.onElectricCharacter(ch, lineTokens, position.column);
        }
        catch (e) {
            (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(e);
            return null;
        }
        if (!electricAction) {
            return null;
        }
        if (electricAction.matchOpenBracket) {
            const endColumn = (lineTokens.getLineContent() + ch).lastIndexOf(electricAction.matchOpenBracket) + 1;
            const match = model.bracketPairs.findMatchingBracketUp(electricAction.matchOpenBracket, {
                lineNumber: position.lineNumber,
                column: endColumn
            }, 500 /* give at most 500ms to compute */);
            if (match) {
                if (match.startLineNumber === position.lineNumber) {
                    // matched something on the same line => no change in indentation
                    return null;
                }
                const matchLine = model.getLineContent(match.startLineNumber);
                const matchLineIndentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(matchLine);
                const newIndentation = config.normalizeIndentation(matchLineIndentation);
                const lineText = model.getLineContent(position.lineNumber);
                const lineFirstNonBlankColumn = model.getLineFirstNonWhitespaceColumn(position.lineNumber) || position.column;
                const prefix = lineText.substring(lineFirstNonBlankColumn - 1, position.column - 1);
                const typeText = newIndentation + prefix + ch;
                const typeSelection = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(position.lineNumber, 1, position.lineNumber, position.column);
                const command = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(typeSelection, typeText);
                return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(getTypingOperation(typeText, prevEditOperationType), [command], {
                    shouldPushStackElementBefore: false,
                    shouldPushStackElementAfter: true
                });
            }
        }
        return null;
    }
    /**
     * This is very similar with typing, but the character is already in the text buffer!
     */
    static compositionEndWithInterceptors(prevEditOperationType, config, model, compositions, selections, autoClosedCharacters) {
        if (!compositions) {
            // could not deduce what the composition did
            return null;
        }
        let insertedText = null;
        for (const composition of compositions) {
            if (insertedText === null) {
                insertedText = composition.insertedText;
            }
            else if (insertedText !== composition.insertedText) {
                // not all selections agree on what was typed
                return null;
            }
        }
        if (!insertedText || insertedText.length !== 1) {
            // we're only interested in the case where a single character was inserted
            return null;
        }
        const ch = insertedText;
        let hasDeletion = false;
        for (const composition of compositions) {
            if (composition.deletedText.length !== 0) {
                hasDeletion = true;
                break;
            }
        }
        if (hasDeletion) {
            // Check if this could have been a surround selection
            if (!TypeOperations._shouldSurroundChar(config, ch) || !config.surroundingPairs.hasOwnProperty(ch)) {
                return null;
            }
            const isTypingAQuoteCharacter = (0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(ch);
            for (const composition of compositions) {
                if (composition.deletedSelectionStart !== 0 || composition.deletedSelectionEnd !== composition.deletedText.length) {
                    // more text was deleted than was selected, so this could not have been a surround selection
                    return null;
                }
                if (/^[ \t]+$/.test(composition.deletedText)) {
                    // deleted text was only whitespace
                    return null;
                }
                if (isTypingAQuoteCharacter && (0,_cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isQuote */ .LN)(composition.deletedText)) {
                    // deleted text was a quote
                    return null;
                }
            }
            const positions = [];
            for (const selection of selections) {
                if (!selection.isEmpty()) {
                    return null;
                }
                positions.push(selection.getPosition());
            }
            if (positions.length !== compositions.length) {
                return null;
            }
            const commands = [];
            for (let i = 0, len = positions.length; i < len; i++) {
                commands.push(new _commands_surroundSelectionCommand_js__WEBPACK_IMPORTED_MODULE_13__/* .CompositionSurroundSelectionCommand */ .K(positions[i], compositions[i].deletedText, config.surroundingPairs[ch]));
            }
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
                shouldPushStackElementBefore: true,
                shouldPushStackElementAfter: false
            });
        }
        if (this._isAutoClosingOvertype(config, model, selections, autoClosedCharacters, ch)) {
            // Unfortunately, the close character is at this point "doubled", so we need to delete it...
            const commands = selections.map(s => new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(s.positionLineNumber, s.positionColumn, s.positionLineNumber, s.positionColumn + 1), '', false));
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
                shouldPushStackElementBefore: true,
                shouldPushStackElementAfter: false
            });
        }
        const autoClosingPairClose = this._getAutoClosingPairClose(config, model, selections, ch, true);
        if (autoClosingPairClose !== null) {
            return this._runAutoClosingOpenCharType(prevEditOperationType, config, model, selections, ch, true, autoClosingPairClose);
        }
        return null;
    }
    static typeWithInterceptors(isDoingComposition, prevEditOperationType, config, model, selections, autoClosedCharacters, ch) {
        if (!isDoingComposition && ch === '\n') {
            const commands = [];
            for (let i = 0, len = selections.length; i < len; i++) {
                commands[i] = TypeOperations._enter(config, model, false, selections[i]);
            }
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
                shouldPushStackElementBefore: true,
                shouldPushStackElementAfter: false,
            });
        }
        if (!isDoingComposition && this._isAutoIndentType(config, model, selections)) {
            const commands = [];
            let autoIndentFails = false;
            for (let i = 0, len = selections.length; i < len; i++) {
                commands[i] = this._runAutoIndentType(config, model, selections[i], ch);
                if (!commands[i]) {
                    autoIndentFails = true;
                    break;
                }
            }
            if (!autoIndentFails) {
                return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(4 /* EditOperationType.TypingOther */, commands, {
                    shouldPushStackElementBefore: true,
                    shouldPushStackElementAfter: false,
                });
            }
        }
        if (this._isAutoClosingOvertype(config, model, selections, autoClosedCharacters, ch)) {
            return this._runAutoClosingOvertype(prevEditOperationType, config, model, selections, ch);
        }
        if (!isDoingComposition) {
            const autoClosingPairClose = this._getAutoClosingPairClose(config, model, selections, ch, false);
            if (autoClosingPairClose) {
                return this._runAutoClosingOpenCharType(prevEditOperationType, config, model, selections, ch, false, autoClosingPairClose);
            }
        }
        if (!isDoingComposition && this._isSurroundSelectionType(config, model, selections, ch)) {
            return this._runSurroundSelectionType(prevEditOperationType, config, model, selections, ch);
        }
        // Electric characters make sense only when dealing with a single cursor,
        // as multiple cursors typing brackets for example would interfer with bracket matching
        if (!isDoingComposition && this._isTypeInterceptorElectricChar(config, model, selections)) {
            const r = this._typeInterceptorElectricChar(prevEditOperationType, config, model, selections[0], ch);
            if (r) {
                return r;
            }
        }
        // A simple character type
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(selections[i], ch);
        }
        const opType = getTypingOperation(ch, prevEditOperationType);
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(opType, commands, {
            shouldPushStackElementBefore: shouldPushStackElementBetween(prevEditOperationType, opType),
            shouldPushStackElementAfter: false
        });
    }
    static typeWithoutInterceptors(prevEditOperationType, config, model, selections, str) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommand */ .T4(selections[i], str);
        }
        const opType = getTypingOperation(str, prevEditOperationType);
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(opType, commands, {
            shouldPushStackElementBefore: shouldPushStackElementBetween(prevEditOperationType, opType),
            shouldPushStackElementAfter: false
        });
    }
    static lineInsertBefore(config, model, selections) {
        if (model === null || selections === null) {
            return [];
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            let lineNumber = selections[i].positionLineNumber;
            if (lineNumber === 1) {
                commands[i] = new _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithoutChangingPosition */ .Sj(new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(1, 1, 1, 1), '\n');
            }
            else {
                lineNumber--;
                const column = model.getLineMaxColumn(lineNumber);
                commands[i] = this._enter(config, model, false, new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(lineNumber, column, lineNumber, column));
            }
        }
        return commands;
    }
    static lineInsertAfter(config, model, selections) {
        if (model === null || selections === null) {
            return [];
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const lineNumber = selections[i].positionLineNumber;
            const column = model.getLineMaxColumn(lineNumber);
            commands[i] = this._enter(config, model, false, new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(lineNumber, column, lineNumber, column));
        }
        return commands;
    }
    static lineBreakInsert(config, model, selections) {
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = this._enter(config, model, true, selections[i]);
        }
        return commands;
    }
}
class TypeWithAutoClosingCommand extends _commands_replaceCommand_js__WEBPACK_IMPORTED_MODULE_9__/* .ReplaceCommandWithOffsetCursorState */ .Uo {
    constructor(selection, openCharacter, insertOpenCharacter, closeCharacter) {
        super(selection, (insertOpenCharacter ? openCharacter : '') + closeCharacter, 0, -closeCharacter.length);
        this._openCharacter = openCharacter;
        this._closeCharacter = closeCharacter;
        this.closeCharacterRange = null;
        this.enclosingRange = null;
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const range = inverseEditOperations[0].range;
        this.closeCharacterRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(range.startLineNumber, range.endColumn - this._closeCharacter.length, range.endLineNumber, range.endColumn);
        this.enclosingRange = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(range.startLineNumber, range.endColumn - this._openCharacter.length - this._closeCharacter.length, range.endLineNumber, range.endColumn);
        return super.computeCursorState(model, helper);
    }
}
class CompositionOutcome {
    constructor(deletedText, deletedSelectionStart, deletedSelectionEnd, insertedText, insertedSelectionStart, insertedSelectionEnd) {
        this.deletedText = deletedText;
        this.deletedSelectionStart = deletedSelectionStart;
        this.deletedSelectionEnd = deletedSelectionEnd;
        this.insertedText = insertedText;
        this.insertedSelectionStart = insertedSelectionStart;
        this.insertedSelectionEnd = insertedSelectionEnd;
    }
}
function getTypingOperation(typedText, previousTypingOperation) {
    if (typedText === ' ') {
        return previousTypingOperation === 5 /* EditOperationType.TypingFirstSpace */
            || previousTypingOperation === 6 /* EditOperationType.TypingConsecutiveSpace */
            ? 6 /* EditOperationType.TypingConsecutiveSpace */
            : 5 /* EditOperationType.TypingFirstSpace */;
    }
    return 4 /* EditOperationType.TypingOther */;
}
function shouldPushStackElementBetween(previousTypingOperation, typingOperation) {
    if (isTypingOperation(previousTypingOperation) && !isTypingOperation(typingOperation)) {
        // Always set an undo stop before non-type operations
        return true;
    }
    if (previousTypingOperation === 5 /* EditOperationType.TypingFirstSpace */) {
        // `abc |d`: No undo stop
        // `abc  |d`: Undo stop
        return false;
    }
    // Insert undo stop between different operation types
    return normalizeOperationType(previousTypingOperation) !== normalizeOperationType(typingOperation);
}
function normalizeOperationType(type) {
    return (type === 6 /* EditOperationType.TypingConsecutiveSpace */ || type === 5 /* EditOperationType.TypingFirstSpace */)
        ? 'space'
        : type;
}
function isTypingOperation(type) {
    return type === 4 /* EditOperationType.TypingOther */
        || type === 5 /* EditOperationType.TypingFirstSpace */
        || type === 6 /* EditOperationType.TypingConsecutiveSpace */;
}


/***/ }),

/***/ 23156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ WordPartOperations; },
/* harmony export */   w: function() { return /* binding */ WordOperations; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68273);
/* harmony import */ var _cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11819);
/* harmony import */ var _core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80238);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class WordOperations {
    static _createWord(lineContent, wordType, nextCharClass, start, end) {
        // console.log('WORD ==> ' + start + ' => ' + end + ':::: <<<' + lineContent.substring(start, end) + '>>>');
        return { start: start, end: end, wordType: wordType, nextCharClass: nextCharClass };
    }
    static _findPreviousWordOnLine(wordSeparators, model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        return this._doFindPreviousWordOnLine(lineContent, wordSeparators, position);
    }
    static _doFindPreviousWordOnLine(lineContent, wordSeparators, position) {
        let wordType = 0 /* WordType.None */;
        for (let chIndex = position.column - 2; chIndex >= 0; chIndex--) {
            const chCode = lineContent.charCodeAt(chIndex);
            const chClass = wordSeparators.get(chCode);
            if (chClass === 0 /* WordCharacterClass.Regular */) {
                if (wordType === 2 /* WordType.Separator */) {
                    return this._createWord(lineContent, wordType, chClass, chIndex + 1, this._findEndOfWord(lineContent, wordSeparators, wordType, chIndex + 1));
                }
                wordType = 1 /* WordType.Regular */;
            }
            else if (chClass === 2 /* WordCharacterClass.WordSeparator */) {
                if (wordType === 1 /* WordType.Regular */) {
                    return this._createWord(lineContent, wordType, chClass, chIndex + 1, this._findEndOfWord(lineContent, wordSeparators, wordType, chIndex + 1));
                }
                wordType = 2 /* WordType.Separator */;
            }
            else if (chClass === 1 /* WordCharacterClass.Whitespace */) {
                if (wordType !== 0 /* WordType.None */) {
                    return this._createWord(lineContent, wordType, chClass, chIndex + 1, this._findEndOfWord(lineContent, wordSeparators, wordType, chIndex + 1));
                }
            }
        }
        if (wordType !== 0 /* WordType.None */) {
            return this._createWord(lineContent, wordType, 1 /* WordCharacterClass.Whitespace */, 0, this._findEndOfWord(lineContent, wordSeparators, wordType, 0));
        }
        return null;
    }
    static _findEndOfWord(lineContent, wordSeparators, wordType, startIndex) {
        const len = lineContent.length;
        for (let chIndex = startIndex; chIndex < len; chIndex++) {
            const chCode = lineContent.charCodeAt(chIndex);
            const chClass = wordSeparators.get(chCode);
            if (chClass === 1 /* WordCharacterClass.Whitespace */) {
                return chIndex;
            }
            if (wordType === 1 /* WordType.Regular */ && chClass === 2 /* WordCharacterClass.WordSeparator */) {
                return chIndex;
            }
            if (wordType === 2 /* WordType.Separator */ && chClass === 0 /* WordCharacterClass.Regular */) {
                return chIndex;
            }
        }
        return len;
    }
    static _findNextWordOnLine(wordSeparators, model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        return this._doFindNextWordOnLine(lineContent, wordSeparators, position);
    }
    static _doFindNextWordOnLine(lineContent, wordSeparators, position) {
        let wordType = 0 /* WordType.None */;
        const len = lineContent.length;
        for (let chIndex = position.column - 1; chIndex < len; chIndex++) {
            const chCode = lineContent.charCodeAt(chIndex);
            const chClass = wordSeparators.get(chCode);
            if (chClass === 0 /* WordCharacterClass.Regular */) {
                if (wordType === 2 /* WordType.Separator */) {
                    return this._createWord(lineContent, wordType, chClass, this._findStartOfWord(lineContent, wordSeparators, wordType, chIndex - 1), chIndex);
                }
                wordType = 1 /* WordType.Regular */;
            }
            else if (chClass === 2 /* WordCharacterClass.WordSeparator */) {
                if (wordType === 1 /* WordType.Regular */) {
                    return this._createWord(lineContent, wordType, chClass, this._findStartOfWord(lineContent, wordSeparators, wordType, chIndex - 1), chIndex);
                }
                wordType = 2 /* WordType.Separator */;
            }
            else if (chClass === 1 /* WordCharacterClass.Whitespace */) {
                if (wordType !== 0 /* WordType.None */) {
                    return this._createWord(lineContent, wordType, chClass, this._findStartOfWord(lineContent, wordSeparators, wordType, chIndex - 1), chIndex);
                }
            }
        }
        if (wordType !== 0 /* WordType.None */) {
            return this._createWord(lineContent, wordType, 1 /* WordCharacterClass.Whitespace */, this._findStartOfWord(lineContent, wordSeparators, wordType, len - 1), len);
        }
        return null;
    }
    static _findStartOfWord(lineContent, wordSeparators, wordType, startIndex) {
        for (let chIndex = startIndex; chIndex >= 0; chIndex--) {
            const chCode = lineContent.charCodeAt(chIndex);
            const chClass = wordSeparators.get(chCode);
            if (chClass === 1 /* WordCharacterClass.Whitespace */) {
                return chIndex + 1;
            }
            if (wordType === 1 /* WordType.Regular */ && chClass === 2 /* WordCharacterClass.WordSeparator */) {
                return chIndex + 1;
            }
            if (wordType === 2 /* WordType.Separator */ && chClass === 0 /* WordCharacterClass.Regular */) {
                return chIndex + 1;
            }
        }
        return 0;
    }
    static moveWordLeft(wordSeparators, model, position, wordNavigationType) {
        let lineNumber = position.lineNumber;
        let column = position.column;
        if (column === 1) {
            if (lineNumber > 1) {
                lineNumber = lineNumber - 1;
                column = model.getLineMaxColumn(lineNumber);
            }
        }
        let prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column));
        if (wordNavigationType === 0 /* WordNavigationType.WordStart */) {
            return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine ? prevWordOnLine.start + 1 : 1);
        }
        if (wordNavigationType === 1 /* WordNavigationType.WordStartFast */) {
            if (prevWordOnLine
                && prevWordOnLine.wordType === 2 /* WordType.Separator */
                && prevWordOnLine.end - prevWordOnLine.start === 1
                && prevWordOnLine.nextCharClass === 0 /* WordCharacterClass.Regular */) {
                // Skip over a word made up of one single separator and followed by a regular character
                prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine.start + 1));
            }
            return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine ? prevWordOnLine.start + 1 : 1);
        }
        if (wordNavigationType === 3 /* WordNavigationType.WordAccessibility */) {
            while (prevWordOnLine
                && prevWordOnLine.wordType === 2 /* WordType.Separator */) {
                // Skip over words made up of only separators
                prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine.start + 1));
            }
            return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine ? prevWordOnLine.start + 1 : 1);
        }
        // We are stopping at the ending of words
        if (prevWordOnLine && column <= prevWordOnLine.end + 1) {
            prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine.start + 1));
        }
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine ? prevWordOnLine.end + 1 : 1);
    }
    static _moveWordPartLeft(model, position) {
        const lineNumber = position.lineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        if (position.column === 1) {
            return (lineNumber > 1 ? new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber - 1, model.getLineMaxColumn(lineNumber - 1)) : position);
        }
        const lineContent = model.getLineContent(lineNumber);
        for (let column = position.column - 1; column > 1; column--) {
            const left = lineContent.charCodeAt(column - 2);
            const right = lineContent.charCodeAt(column - 1);
            if (left === 95 /* CharCode.Underline */ && right !== 95 /* CharCode.Underline */) {
                // snake_case_variables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if (left === 45 /* CharCode.Dash */ && right !== 45 /* CharCode.Dash */) {
                // kebab-case-variables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if ((_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isLowerAsciiLetter */ .mK(left) || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isAsciiDigit */ .T5(left)) && _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(right)) {
                // camelCaseVariables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(left) && _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(right)) {
                // thisIsACamelCaseWithOneLetterWords
                if (column + 1 < maxColumn) {
                    const rightRight = lineContent.charCodeAt(column);
                    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isLowerAsciiLetter */ .mK(rightRight) || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isAsciiDigit */ .T5(rightRight)) {
                        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
                    }
                }
            }
        }
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, 1);
    }
    static moveWordRight(wordSeparators, model, position, wordNavigationType) {
        let lineNumber = position.lineNumber;
        let column = position.column;
        let movedDown = false;
        if (column === model.getLineMaxColumn(lineNumber)) {
            if (lineNumber < model.getLineCount()) {
                movedDown = true;
                lineNumber = lineNumber + 1;
                column = 1;
            }
        }
        let nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column));
        if (wordNavigationType === 2 /* WordNavigationType.WordEnd */) {
            if (nextWordOnLine && nextWordOnLine.wordType === 2 /* WordType.Separator */) {
                if (nextWordOnLine.end - nextWordOnLine.start === 1 && nextWordOnLine.nextCharClass === 0 /* WordCharacterClass.Regular */) {
                    // Skip over a word made up of one single separator and followed by a regular character
                    nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, nextWordOnLine.end + 1));
                }
            }
            if (nextWordOnLine) {
                column = nextWordOnLine.end + 1;
            }
            else {
                column = model.getLineMaxColumn(lineNumber);
            }
        }
        else if (wordNavigationType === 3 /* WordNavigationType.WordAccessibility */) {
            if (movedDown) {
                // If we move to the next line, pretend that the cursor is right before the first character.
                // This is needed when the first word starts right at the first character - and in order not to miss it,
                // we need to start before.
                column = 0;
            }
            while (nextWordOnLine
                && (nextWordOnLine.wordType === 2 /* WordType.Separator */
                    || nextWordOnLine.start + 1 <= column)) {
                // Skip over a word made up of one single separator
                // Also skip over word if it begins before current cursor position to ascertain we're moving forward at least 1 character.
                nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, nextWordOnLine.end + 1));
            }
            if (nextWordOnLine) {
                column = nextWordOnLine.start + 1;
            }
            else {
                column = model.getLineMaxColumn(lineNumber);
            }
        }
        else {
            if (nextWordOnLine && !movedDown && column >= nextWordOnLine.start + 1) {
                nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, nextWordOnLine.end + 1));
            }
            if (nextWordOnLine) {
                column = nextWordOnLine.start + 1;
            }
            else {
                column = model.getLineMaxColumn(lineNumber);
            }
        }
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
    }
    static _moveWordPartRight(model, position) {
        const lineNumber = position.lineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        if (position.column === maxColumn) {
            return (lineNumber < model.getLineCount() ? new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber + 1, 1) : position);
        }
        const lineContent = model.getLineContent(lineNumber);
        for (let column = position.column + 1; column < maxColumn; column++) {
            const left = lineContent.charCodeAt(column - 2);
            const right = lineContent.charCodeAt(column - 1);
            if (left !== 95 /* CharCode.Underline */ && right === 95 /* CharCode.Underline */) {
                // snake_case_variables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if (left !== 45 /* CharCode.Dash */ && right === 45 /* CharCode.Dash */) {
                // kebab-case-variables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if ((_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isLowerAsciiLetter */ .mK(left) || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isAsciiDigit */ .T5(left)) && _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(right)) {
                // camelCaseVariables
                return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            }
            if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(left) && _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isUpperAsciiLetter */ .df(right)) {
                // thisIsACamelCaseWithOneLetterWords
                if (column + 1 < maxColumn) {
                    const rightRight = lineContent.charCodeAt(column);
                    if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isLowerAsciiLetter */ .mK(rightRight) || _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .isAsciiDigit */ .T5(rightRight)) {
                        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
                    }
                }
            }
        }
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, maxColumn);
    }
    static _deleteWordLeftWhitespace(model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        const startIndex = position.column - 2;
        const lastNonWhitespace = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .lastNonWhitespaceIndex */ .ow(lineContent, startIndex);
        if (lastNonWhitespace + 1 < startIndex) {
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, lastNonWhitespace + 2, position.lineNumber, position.column);
        }
        return null;
    }
    static deleteWordLeft(ctx, wordNavigationType) {
        const wordSeparators = ctx.wordSeparators;
        const model = ctx.model;
        const selection = ctx.selection;
        const whitespaceHeuristics = ctx.whitespaceHeuristics;
        if (!selection.isEmpty()) {
            return selection;
        }
        if (_cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_2__/* .DeleteOperations */ .A.isAutoClosingPairDelete(ctx.autoClosingDelete, ctx.autoClosingBrackets, ctx.autoClosingQuotes, ctx.autoClosingPairs.autoClosingPairsOpenByEnd, ctx.model, [ctx.selection], ctx.autoClosedCharacters)) {
            const position = ctx.selection.getPosition();
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, position.column - 1, position.lineNumber, position.column + 1);
        }
        const position = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(selection.positionLineNumber, selection.positionColumn);
        let lineNumber = position.lineNumber;
        let column = position.column;
        if (lineNumber === 1 && column === 1) {
            // Ignore deleting at beginning of file
            return null;
        }
        if (whitespaceHeuristics) {
            const r = this._deleteWordLeftWhitespace(model, position);
            if (r) {
                return r;
            }
        }
        let prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, position);
        if (wordNavigationType === 0 /* WordNavigationType.WordStart */) {
            if (prevWordOnLine) {
                column = prevWordOnLine.start + 1;
            }
            else {
                if (column > 1) {
                    column = 1;
                }
                else {
                    lineNumber--;
                    column = model.getLineMaxColumn(lineNumber);
                }
            }
        }
        else {
            if (prevWordOnLine && column <= prevWordOnLine.end + 1) {
                prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, prevWordOnLine.start + 1));
            }
            if (prevWordOnLine) {
                column = prevWordOnLine.end + 1;
            }
            else {
                if (column > 1) {
                    column = 1;
                }
                else {
                    lineNumber--;
                    column = model.getLineMaxColumn(lineNumber);
                }
            }
        }
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(lineNumber, column, position.lineNumber, position.column);
    }
    static deleteInsideWord(wordSeparators, model, selection) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const position = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(selection.positionLineNumber, selection.positionColumn);
        const r = this._deleteInsideWordWhitespace(model, position);
        if (r) {
            return r;
        }
        return this._deleteInsideWordDetermineDeleteRange(wordSeparators, model, position);
    }
    static _charAtIsWhitespace(str, index) {
        const charCode = str.charCodeAt(index);
        return (charCode === 32 /* CharCode.Space */ || charCode === 9 /* CharCode.Tab */);
    }
    static _deleteInsideWordWhitespace(model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        const lineContentLength = lineContent.length;
        if (lineContentLength === 0) {
            // empty line
            return null;
        }
        let leftIndex = Math.max(position.column - 2, 0);
        if (!this._charAtIsWhitespace(lineContent, leftIndex)) {
            // touches a non-whitespace character to the left
            return null;
        }
        let rightIndex = Math.min(position.column - 1, lineContentLength - 1);
        if (!this._charAtIsWhitespace(lineContent, rightIndex)) {
            // touches a non-whitespace character to the right
            return null;
        }
        // walk over whitespace to the left
        while (leftIndex > 0 && this._charAtIsWhitespace(lineContent, leftIndex - 1)) {
            leftIndex--;
        }
        // walk over whitespace to the right
        while (rightIndex + 1 < lineContentLength && this._charAtIsWhitespace(lineContent, rightIndex + 1)) {
            rightIndex++;
        }
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, leftIndex + 1, position.lineNumber, rightIndex + 2);
    }
    static _deleteInsideWordDetermineDeleteRange(wordSeparators, model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        const lineLength = lineContent.length;
        if (lineLength === 0) {
            // empty line
            if (position.lineNumber > 1) {
                return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber - 1, model.getLineMaxColumn(position.lineNumber - 1), position.lineNumber, 1);
            }
            else {
                if (position.lineNumber < model.getLineCount()) {
                    return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, 1, position.lineNumber + 1, 1);
                }
                else {
                    // empty model
                    return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, 1, position.lineNumber, 1);
                }
            }
        }
        const touchesWord = (word) => {
            return (word.start + 1 <= position.column && position.column <= word.end + 1);
        };
        const createRangeWithPosition = (startColumn, endColumn) => {
            startColumn = Math.min(startColumn, position.column);
            endColumn = Math.max(endColumn, position.column);
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, startColumn, position.lineNumber, endColumn);
        };
        const deleteWordAndAdjacentWhitespace = (word) => {
            let startColumn = word.start + 1;
            let endColumn = word.end + 1;
            let expandedToTheRight = false;
            while (endColumn - 1 < lineLength && this._charAtIsWhitespace(lineContent, endColumn - 1)) {
                expandedToTheRight = true;
                endColumn++;
            }
            if (!expandedToTheRight) {
                while (startColumn > 1 && this._charAtIsWhitespace(lineContent, startColumn - 2)) {
                    startColumn--;
                }
            }
            return createRangeWithPosition(startColumn, endColumn);
        };
        const prevWordOnLine = WordOperations._findPreviousWordOnLine(wordSeparators, model, position);
        if (prevWordOnLine && touchesWord(prevWordOnLine)) {
            return deleteWordAndAdjacentWhitespace(prevWordOnLine);
        }
        const nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, position);
        if (nextWordOnLine && touchesWord(nextWordOnLine)) {
            return deleteWordAndAdjacentWhitespace(nextWordOnLine);
        }
        if (prevWordOnLine && nextWordOnLine) {
            return createRangeWithPosition(prevWordOnLine.end + 1, nextWordOnLine.start + 1);
        }
        if (prevWordOnLine) {
            return createRangeWithPosition(prevWordOnLine.start + 1, prevWordOnLine.end + 1);
        }
        if (nextWordOnLine) {
            return createRangeWithPosition(nextWordOnLine.start + 1, nextWordOnLine.end + 1);
        }
        return createRangeWithPosition(1, lineLength + 1);
    }
    static _deleteWordPartLeft(model, selection) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const pos = selection.getPosition();
        const toPosition = WordOperations._moveWordPartLeft(model, pos);
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(pos.lineNumber, pos.column, toPosition.lineNumber, toPosition.column);
    }
    static _findFirstNonWhitespaceChar(str, startIndex) {
        const len = str.length;
        for (let chIndex = startIndex; chIndex < len; chIndex++) {
            const ch = str.charAt(chIndex);
            if (ch !== ' ' && ch !== '\t') {
                return chIndex;
            }
        }
        return len;
    }
    static _deleteWordRightWhitespace(model, position) {
        const lineContent = model.getLineContent(position.lineNumber);
        const startIndex = position.column - 1;
        const firstNonWhitespace = this._findFirstNonWhitespaceChar(lineContent, startIndex);
        if (startIndex + 1 < firstNonWhitespace) {
            // bingo
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, position.column, position.lineNumber, firstNonWhitespace + 1);
        }
        return null;
    }
    static deleteWordRight(ctx, wordNavigationType) {
        const wordSeparators = ctx.wordSeparators;
        const model = ctx.model;
        const selection = ctx.selection;
        const whitespaceHeuristics = ctx.whitespaceHeuristics;
        if (!selection.isEmpty()) {
            return selection;
        }
        const position = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(selection.positionLineNumber, selection.positionColumn);
        let lineNumber = position.lineNumber;
        let column = position.column;
        const lineCount = model.getLineCount();
        const maxColumn = model.getLineMaxColumn(lineNumber);
        if (lineNumber === lineCount && column === maxColumn) {
            // Ignore deleting at end of file
            return null;
        }
        if (whitespaceHeuristics) {
            const r = this._deleteWordRightWhitespace(model, position);
            if (r) {
                return r;
            }
        }
        let nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, position);
        if (wordNavigationType === 2 /* WordNavigationType.WordEnd */) {
            if (nextWordOnLine) {
                column = nextWordOnLine.end + 1;
            }
            else {
                if (column < maxColumn || lineNumber === lineCount) {
                    column = maxColumn;
                }
                else {
                    lineNumber++;
                    nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, 1));
                    if (nextWordOnLine) {
                        column = nextWordOnLine.start + 1;
                    }
                    else {
                        column = model.getLineMaxColumn(lineNumber);
                    }
                }
            }
        }
        else {
            if (nextWordOnLine && column >= nextWordOnLine.start + 1) {
                nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, nextWordOnLine.end + 1));
            }
            if (nextWordOnLine) {
                column = nextWordOnLine.start + 1;
            }
            else {
                if (column < maxColumn || lineNumber === lineCount) {
                    column = maxColumn;
                }
                else {
                    lineNumber++;
                    nextWordOnLine = WordOperations._findNextWordOnLine(wordSeparators, model, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, 1));
                    if (nextWordOnLine) {
                        column = nextWordOnLine.start + 1;
                    }
                    else {
                        column = model.getLineMaxColumn(lineNumber);
                    }
                }
            }
        }
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(lineNumber, column, position.lineNumber, position.column);
    }
    static _deleteWordPartRight(model, selection) {
        if (!selection.isEmpty()) {
            return selection;
        }
        const pos = selection.getPosition();
        const toPosition = WordOperations._moveWordPartRight(model, pos);
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(pos.lineNumber, pos.column, toPosition.lineNumber, toPosition.column);
    }
    static _createWordAtPosition(model, lineNumber, word) {
        const range = new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(lineNumber, word.start + 1, lineNumber, word.end + 1);
        return {
            word: model.getValueInRange(range),
            startColumn: range.startColumn,
            endColumn: range.endColumn
        };
    }
    static getWordAtPosition(model, _wordSeparators, position) {
        const wordSeparators = (0,_core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_3__/* .getMapForWordSeparators */ .u)(_wordSeparators);
        const prevWord = WordOperations._findPreviousWordOnLine(wordSeparators, model, position);
        if (prevWord && prevWord.wordType === 1 /* WordType.Regular */ && prevWord.start <= position.column - 1 && position.column - 1 <= prevWord.end) {
            return WordOperations._createWordAtPosition(model, position.lineNumber, prevWord);
        }
        const nextWord = WordOperations._findNextWordOnLine(wordSeparators, model, position);
        if (nextWord && nextWord.wordType === 1 /* WordType.Regular */ && nextWord.start <= position.column - 1 && position.column - 1 <= nextWord.end) {
            return WordOperations._createWordAtPosition(model, position.lineNumber, nextWord);
        }
        return null;
    }
    static word(config, model, cursor, inSelectionMode, position) {
        const wordSeparators = (0,_core_wordCharacterClassifier_js__WEBPACK_IMPORTED_MODULE_3__/* .getMapForWordSeparators */ .u)(config.wordSeparators);
        const prevWord = WordOperations._findPreviousWordOnLine(wordSeparators, model, position);
        const nextWord = WordOperations._findNextWordOnLine(wordSeparators, model, position);
        if (!inSelectionMode) {
            // Entering word selection for the first time
            let startColumn;
            let endColumn;
            if (prevWord && prevWord.wordType === 1 /* WordType.Regular */ && prevWord.start <= position.column - 1 && position.column - 1 <= prevWord.end) {
                // isTouchingPrevWord
                startColumn = prevWord.start + 1;
                endColumn = prevWord.end + 1;
            }
            else if (nextWord && nextWord.wordType === 1 /* WordType.Regular */ && nextWord.start <= position.column - 1 && position.column - 1 <= nextWord.end) {
                // isTouchingNextWord
                startColumn = nextWord.start + 1;
                endColumn = nextWord.end + 1;
            }
            else {
                if (prevWord) {
                    startColumn = prevWord.end + 1;
                }
                else {
                    startColumn = 1;
                }
                if (nextWord) {
                    endColumn = nextWord.start + 1;
                }
                else {
                    endColumn = model.getLineMaxColumn(position.lineNumber);
                }
            }
            return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_1__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e(position.lineNumber, startColumn, position.lineNumber, endColumn), 1 /* SelectionStartKind.Word */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(position.lineNumber, endColumn), 0);
        }
        let startColumn;
        let endColumn;
        if (prevWord && prevWord.wordType === 1 /* WordType.Regular */ && prevWord.start < position.column - 1 && position.column - 1 < prevWord.end) {
            // isInsidePrevWord
            startColumn = prevWord.start + 1;
            endColumn = prevWord.end + 1;
        }
        else if (nextWord && nextWord.wordType === 1 /* WordType.Regular */ && nextWord.start < position.column - 1 && position.column - 1 < nextWord.end) {
            // isInsideNextWord
            startColumn = nextWord.start + 1;
            endColumn = nextWord.end + 1;
        }
        else {
            startColumn = position.column;
            endColumn = position.column;
        }
        const lineNumber = position.lineNumber;
        let column;
        if (cursor.selectionStart.containsPosition(position)) {
            column = cursor.selectionStart.endColumn;
        }
        else if (position.isBeforeOrEqual(cursor.selectionStart.getStartPosition())) {
            column = startColumn;
            const possiblePosition = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            if (cursor.selectionStart.containsPosition(possiblePosition)) {
                column = cursor.selectionStart.endColumn;
            }
        }
        else {
            column = endColumn;
            const possiblePosition = new _core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L(lineNumber, column);
            if (cursor.selectionStart.containsPosition(possiblePosition)) {
                column = cursor.selectionStart.startColumn;
            }
        }
        return cursor.move(true, lineNumber, column, 0);
    }
}
class WordPartOperations extends WordOperations {
    static deleteWordPartLeft(ctx) {
        const candidates = enforceDefined([
            WordOperations.deleteWordLeft(ctx, 0 /* WordNavigationType.WordStart */),
            WordOperations.deleteWordLeft(ctx, 2 /* WordNavigationType.WordEnd */),
            WordOperations._deleteWordPartLeft(ctx.model, ctx.selection)
        ]);
        candidates.sort(_core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e.compareRangesUsingEnds);
        return candidates[2];
    }
    static deleteWordPartRight(ctx) {
        const candidates = enforceDefined([
            WordOperations.deleteWordRight(ctx, 0 /* WordNavigationType.WordStart */),
            WordOperations.deleteWordRight(ctx, 2 /* WordNavigationType.WordEnd */),
            WordOperations._deleteWordPartRight(ctx.model, ctx.selection)
        ]);
        candidates.sort(_core_range_js__WEBPACK_IMPORTED_MODULE_5__/* .Range */ .e.compareRangesUsingStarts);
        return candidates[0];
    }
    static moveWordPartLeft(wordSeparators, model, position) {
        const candidates = enforceDefined([
            WordOperations.moveWordLeft(wordSeparators, model, position, 0 /* WordNavigationType.WordStart */),
            WordOperations.moveWordLeft(wordSeparators, model, position, 2 /* WordNavigationType.WordEnd */),
            WordOperations._moveWordPartLeft(model, position)
        ]);
        candidates.sort(_core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L.compare);
        return candidates[2];
    }
    static moveWordPartRight(wordSeparators, model, position) {
        const candidates = enforceDefined([
            WordOperations.moveWordRight(wordSeparators, model, position, 0 /* WordNavigationType.WordStart */),
            WordOperations.moveWordRight(wordSeparators, model, position, 2 /* WordNavigationType.WordEnd */),
            WordOperations._moveWordPartRight(model, position)
        ]);
        candidates.sort(_core_position_js__WEBPACK_IMPORTED_MODULE_4__/* .Position */ .L.compare);
        return candidates[0];
    }
}
function enforceDefined(arr) {
    return arr.filter(el => Boolean(el));
}


/***/ })

}]);