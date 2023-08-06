"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-17bae64e"],{

/***/ 83065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ CursorsController; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23607);
/* harmony import */ var _cursorCollection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87796);
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68273);
/* harmony import */ var _cursorContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77161);
/* harmony import */ var _cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11819);
/* harmony import */ var _cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99007);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76584);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74980);
/* harmony import */ var _textModelEvents_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(67033);
/* harmony import */ var _viewEvents_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86493);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79027);
/* harmony import */ var _viewModelEventDispatcher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1913);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/













class CursorsController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_6__/* .Disposable */ .JT {
    constructor(model, viewModel, coordinatesConverter, cursorConfig) {
        super();
        this._model = model;
        this._knownModelVersionId = this._model.getVersionId();
        this._viewModel = viewModel;
        this._coordinatesConverter = coordinatesConverter;
        this.context = new _cursorContext_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorContext */ .z(this._model, this._viewModel, this._coordinatesConverter, cursorConfig);
        this._cursors = new _cursorCollection_js__WEBPACK_IMPORTED_MODULE_2__/* .CursorCollection */ .s(this.context);
        this._hasFocus = false;
        this._isHandling = false;
        this._compositionState = null;
        this._columnSelectData = null;
        this._autoClosedActions = [];
        this._prevEditOperationType = 0 /* EditOperationType.Other */;
    }
    dispose() {
        this._cursors.dispose();
        this._autoClosedActions = (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_6__/* .dispose */ .B9)(this._autoClosedActions);
        super.dispose();
    }
    updateConfiguration(cursorConfig) {
        this.context = new _cursorContext_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorContext */ .z(this._model, this._viewModel, this._coordinatesConverter, cursorConfig);
        this._cursors.updateContext(this.context);
    }
    onLineMappingChanged(eventsCollector) {
        if (this._knownModelVersionId !== this._model.getVersionId()) {
            // There are model change events that I didn't yet receive.
            //
            // This can happen when editing the model, and the view model receives the change events first,
            // and the view model emits line mapping changed events, all before the cursor gets a chance to
            // recover from markers.
            //
            // The model change listener above will be called soon and we'll ensure a valid cursor state there.
            return;
        }
        // Ensure valid state
        this.setStates(eventsCollector, 'viewModel', 0 /* CursorChangeReason.NotSet */, this.getCursorStates());
    }
    setHasFocus(hasFocus) {
        this._hasFocus = hasFocus;
    }
    _validateAutoClosedActions() {
        if (this._autoClosedActions.length > 0) {
            const selections = this._cursors.getSelections();
            for (let i = 0; i < this._autoClosedActions.length; i++) {
                const autoClosedAction = this._autoClosedActions[i];
                if (!autoClosedAction.isValid(selections)) {
                    autoClosedAction.dispose();
                    this._autoClosedActions.splice(i, 1);
                    i--;
                }
            }
        }
    }
    // ------ some getters/setters
    getPrimaryCursorState() {
        return this._cursors.getPrimaryCursor();
    }
    getLastAddedCursorIndex() {
        return this._cursors.getLastAddedCursorIndex();
    }
    getCursorStates() {
        return this._cursors.getAll();
    }
    setStates(eventsCollector, source, reason, states) {
        let reachedMaxCursorCount = false;
        const multiCursorLimit = this.context.cursorConfig.multiCursorLimit;
        if (states !== null && states.length > multiCursorLimit) {
            states = states.slice(0, multiCursorLimit);
            reachedMaxCursorCount = true;
        }
        const oldState = CursorModelState.from(this._model, this);
        this._cursors.setStates(states);
        this._cursors.normalize();
        this._columnSelectData = null;
        this._validateAutoClosedActions();
        return this._emitStateChangedIfNecessary(eventsCollector, source, reason, oldState, reachedMaxCursorCount);
    }
    setCursorColumnSelectData(columnSelectData) {
        this._columnSelectData = columnSelectData;
    }
    revealPrimary(eventsCollector, source, minimalReveal, verticalType, revealHorizontal, scrollType) {
        const viewPositions = this._cursors.getViewPositions();
        let revealViewRange = null;
        let revealViewSelections = null;
        if (viewPositions.length > 1) {
            revealViewSelections = this._cursors.getViewSelections();
        }
        else {
            revealViewRange = _core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.fromPositions(viewPositions[0], viewPositions[0]);
        }
        eventsCollector.emitViewEvent(new _viewEvents_js__WEBPACK_IMPORTED_MODULE_10__/* .ViewRevealRangeRequestEvent */ .Qb(source, minimalReveal, revealViewRange, revealViewSelections, verticalType, revealHorizontal, scrollType));
    }
    saveState() {
        const result = [];
        const selections = this._cursors.getSelections();
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            result.push({
                inSelectionMode: !selection.isEmpty(),
                selectionStart: {
                    lineNumber: selection.selectionStartLineNumber,
                    column: selection.selectionStartColumn,
                },
                position: {
                    lineNumber: selection.positionLineNumber,
                    column: selection.positionColumn,
                }
            });
        }
        return result;
    }
    restoreState(eventsCollector, states) {
        const desiredSelections = [];
        for (let i = 0, len = states.length; i < len; i++) {
            const state = states[i];
            let positionLineNumber = 1;
            let positionColumn = 1;
            // Avoid missing properties on the literal
            if (state.position && state.position.lineNumber) {
                positionLineNumber = state.position.lineNumber;
            }
            if (state.position && state.position.column) {
                positionColumn = state.position.column;
            }
            let selectionStartLineNumber = positionLineNumber;
            let selectionStartColumn = positionColumn;
            // Avoid missing properties on the literal
            if (state.selectionStart && state.selectionStart.lineNumber) {
                selectionStartLineNumber = state.selectionStart.lineNumber;
            }
            if (state.selectionStart && state.selectionStart.column) {
                selectionStartColumn = state.selectionStart.column;
            }
            desiredSelections.push({
                selectionStartLineNumber: selectionStartLineNumber,
                selectionStartColumn: selectionStartColumn,
                positionLineNumber: positionLineNumber,
                positionColumn: positionColumn
            });
        }
        this.setStates(eventsCollector, 'restoreState', 0 /* CursorChangeReason.NotSet */, _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .CursorState */ .Vi.fromModelSelections(desiredSelections));
        this.revealPrimary(eventsCollector, 'restoreState', false, 0 /* VerticalRevealType.Simple */, true, 1 /* editorCommon.ScrollType.Immediate */);
    }
    onModelContentChanged(eventsCollector, event) {
        if (event instanceof _textModelEvents_js__WEBPACK_IMPORTED_MODULE_11__/* .ModelInjectedTextChangedEvent */ .D8) {
            // If injected texts change, the view positions of all cursors need to be updated.
            if (this._isHandling) {
                // The view positions will be updated when handling finishes
                return;
            }
            // setStates might remove markers, which could trigger a decoration change.
            // If there are injected text decorations for that line, `onModelContentChanged` is emitted again
            // and an endless recursion happens.
            // _isHandling prevents that.
            this._isHandling = true;
            try {
                this.setStates(eventsCollector, 'modelChange', 0 /* CursorChangeReason.NotSet */, this.getCursorStates());
            }
            finally {
                this._isHandling = false;
            }
        }
        else {
            const e = event.rawContentChangedEvent;
            this._knownModelVersionId = e.versionId;
            if (this._isHandling) {
                return;
            }
            const hadFlushEvent = e.containsEvent(1 /* RawContentChangedType.Flush */);
            this._prevEditOperationType = 0 /* EditOperationType.Other */;
            if (hadFlushEvent) {
                // a model.setValue() was called
                this._cursors.dispose();
                this._cursors = new _cursorCollection_js__WEBPACK_IMPORTED_MODULE_2__/* .CursorCollection */ .s(this.context);
                this._validateAutoClosedActions();
                this._emitStateChangedIfNecessary(eventsCollector, 'model', 1 /* CursorChangeReason.ContentFlush */, null, false);
            }
            else {
                if (this._hasFocus && e.resultingSelection && e.resultingSelection.length > 0) {
                    const cursorState = _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .CursorState */ .Vi.fromModelSelections(e.resultingSelection);
                    if (this.setStates(eventsCollector, 'modelChange', e.isUndoing ? 5 /* CursorChangeReason.Undo */ : e.isRedoing ? 6 /* CursorChangeReason.Redo */ : 2 /* CursorChangeReason.RecoverFromMarkers */, cursorState)) {
                        this.revealPrimary(eventsCollector, 'modelChange', false, 0 /* VerticalRevealType.Simple */, true, 0 /* editorCommon.ScrollType.Smooth */);
                    }
                }
                else {
                    const selectionsFromMarkers = this._cursors.readSelectionFromMarkers();
                    this.setStates(eventsCollector, 'modelChange', 2 /* CursorChangeReason.RecoverFromMarkers */, _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .CursorState */ .Vi.fromModelSelections(selectionsFromMarkers));
                }
            }
        }
    }
    getSelection() {
        return this._cursors.getPrimaryCursor().modelState.selection;
    }
    getTopMostViewPosition() {
        return this._cursors.getTopMostViewPosition();
    }
    getBottomMostViewPosition() {
        return this._cursors.getBottomMostViewPosition();
    }
    getCursorColumnSelectData() {
        if (this._columnSelectData) {
            return this._columnSelectData;
        }
        const primaryCursor = this._cursors.getPrimaryCursor();
        const viewSelectionStart = primaryCursor.viewState.selectionStart.getStartPosition();
        const viewPosition = primaryCursor.viewState.position;
        return {
            isReal: false,
            fromViewLineNumber: viewSelectionStart.lineNumber,
            fromViewVisualColumn: this.context.cursorConfig.visibleColumnFromColumn(this._viewModel, viewSelectionStart),
            toViewLineNumber: viewPosition.lineNumber,
            toViewVisualColumn: this.context.cursorConfig.visibleColumnFromColumn(this._viewModel, viewPosition),
        };
    }
    getSelections() {
        return this._cursors.getSelections();
    }
    setSelections(eventsCollector, source, selections, reason) {
        this.setStates(eventsCollector, source, reason, _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .CursorState */ .Vi.fromModelSelections(selections));
    }
    getPrevEditOperationType() {
        return this._prevEditOperationType;
    }
    setPrevEditOperationType(type) {
        this._prevEditOperationType = type;
    }
    // ------ auxiliary handling logic
    _pushAutoClosedAction(autoClosedCharactersRanges, autoClosedEnclosingRanges) {
        const autoClosedCharactersDeltaDecorations = [];
        const autoClosedEnclosingDeltaDecorations = [];
        for (let i = 0, len = autoClosedCharactersRanges.length; i < len; i++) {
            autoClosedCharactersDeltaDecorations.push({
                range: autoClosedCharactersRanges[i],
                options: {
                    description: 'auto-closed-character',
                    inlineClassName: 'auto-closed-character',
                    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
                }
            });
            autoClosedEnclosingDeltaDecorations.push({
                range: autoClosedEnclosingRanges[i],
                options: {
                    description: 'auto-closed-enclosing',
                    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
                }
            });
        }
        const autoClosedCharactersDecorations = this._model.deltaDecorations([], autoClosedCharactersDeltaDecorations);
        const autoClosedEnclosingDecorations = this._model.deltaDecorations([], autoClosedEnclosingDeltaDecorations);
        this._autoClosedActions.push(new AutoClosedAction(this._model, autoClosedCharactersDecorations, autoClosedEnclosingDecorations));
    }
    _executeEditOperation(opResult) {
        if (!opResult) {
            // Nothing to execute
            return;
        }
        if (opResult.shouldPushStackElementBefore) {
            this._model.pushStackElement();
        }
        const result = CommandExecutor.executeCommands(this._model, this._cursors.getSelections(), opResult.commands);
        if (result) {
            // The commands were applied correctly
            this._interpretCommandResult(result);
            // Check for auto-closing closed characters
            const autoClosedCharactersRanges = [];
            const autoClosedEnclosingRanges = [];
            for (let i = 0; i < opResult.commands.length; i++) {
                const command = opResult.commands[i];
                if (command instanceof _cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeWithAutoClosingCommand */ .g_ && command.enclosingRange && command.closeCharacterRange) {
                    autoClosedCharactersRanges.push(command.closeCharacterRange);
                    autoClosedEnclosingRanges.push(command.enclosingRange);
                }
            }
            if (autoClosedCharactersRanges.length > 0) {
                this._pushAutoClosedAction(autoClosedCharactersRanges, autoClosedEnclosingRanges);
            }
            this._prevEditOperationType = opResult.type;
        }
        if (opResult.shouldPushStackElementAfter) {
            this._model.pushStackElement();
        }
    }
    _interpretCommandResult(cursorState) {
        if (!cursorState || cursorState.length === 0) {
            cursorState = this._cursors.readSelectionFromMarkers();
        }
        this._columnSelectData = null;
        this._cursors.setSelections(cursorState);
        this._cursors.normalize();
    }
    // -----------------------------------------------------------------------------------------------------------
    // ----- emitting events
    _emitStateChangedIfNecessary(eventsCollector, source, reason, oldState, reachedMaxCursorCount) {
        const newState = CursorModelState.from(this._model, this);
        if (newState.equals(oldState)) {
            return false;
        }
        const selections = this._cursors.getSelections();
        const viewSelections = this._cursors.getViewSelections();
        // Let the view get the event first.
        eventsCollector.emitViewEvent(new _viewEvents_js__WEBPACK_IMPORTED_MODULE_10__/* .ViewCursorStateChangedEvent */ .e$(viewSelections, selections, reason));
        // Only after the view has been notified, let the rest of the world know...
        if (!oldState
            || oldState.cursorState.length !== newState.cursorState.length
            || newState.cursorState.some((newCursorState, i) => !newCursorState.modelState.equals(oldState.cursorState[i].modelState))) {
            const oldSelections = oldState ? oldState.cursorState.map(s => s.modelState.selection) : null;
            const oldModelVersionId = oldState ? oldState.modelVersionId : 0;
            eventsCollector.emitOutgoingEvent(new _viewModelEventDispatcher_js__WEBPACK_IMPORTED_MODULE_7__/* .CursorStateChangedEvent */ .H6(oldSelections, selections, oldModelVersionId, newState.modelVersionId, source || 'keyboard', reason, reachedMaxCursorCount));
        }
        return true;
    }
    // -----------------------------------------------------------------------------------------------------------
    // ----- handlers beyond this point
    _findAutoClosingPairs(edits) {
        if (!edits.length) {
            return null;
        }
        const indices = [];
        for (let i = 0, len = edits.length; i < len; i++) {
            const edit = edits[i];
            if (!edit.text || edit.text.indexOf('\n') >= 0) {
                return null;
            }
            const m = edit.text.match(/([)\]}>'"`])([^)\]}>'"`]*)$/);
            if (!m) {
                return null;
            }
            const closeChar = m[1];
            const autoClosingPairsCandidates = this.context.cursorConfig.autoClosingPairs.autoClosingPairsCloseSingleChar.get(closeChar);
            if (!autoClosingPairsCandidates || autoClosingPairsCandidates.length !== 1) {
                return null;
            }
            const openChar = autoClosingPairsCandidates[0].open;
            const closeCharIndex = edit.text.length - m[2].length - 1;
            const openCharIndex = edit.text.lastIndexOf(openChar, closeCharIndex - 1);
            if (openCharIndex === -1) {
                return null;
            }
            indices.push([openCharIndex, closeCharIndex]);
        }
        return indices;
    }
    executeEdits(eventsCollector, source, edits, cursorStateComputer) {
        let autoClosingIndices = null;
        if (source === 'snippet') {
            autoClosingIndices = this._findAutoClosingPairs(edits);
        }
        if (autoClosingIndices) {
            edits[0]._isTracked = true;
        }
        const autoClosedCharactersRanges = [];
        const autoClosedEnclosingRanges = [];
        const selections = this._model.pushEditOperations(this.getSelections(), edits, (undoEdits) => {
            if (autoClosingIndices) {
                for (let i = 0, len = autoClosingIndices.length; i < len; i++) {
                    const [openCharInnerIndex, closeCharInnerIndex] = autoClosingIndices[i];
                    const undoEdit = undoEdits[i];
                    const lineNumber = undoEdit.range.startLineNumber;
                    const openCharIndex = undoEdit.range.startColumn - 1 + openCharInnerIndex;
                    const closeCharIndex = undoEdit.range.startColumn - 1 + closeCharInnerIndex;
                    autoClosedCharactersRanges.push(new _core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e(lineNumber, closeCharIndex + 1, lineNumber, closeCharIndex + 2));
                    autoClosedEnclosingRanges.push(new _core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e(lineNumber, openCharIndex + 1, lineNumber, closeCharIndex + 2));
                }
            }
            const selections = cursorStateComputer(undoEdits);
            if (selections) {
                // Don't recover the selection from markers because
                // we know what it should be.
                this._isHandling = true;
            }
            return selections;
        });
        if (selections) {
            this._isHandling = false;
            this.setSelections(eventsCollector, source, selections, 0 /* CursorChangeReason.NotSet */);
        }
        if (autoClosedCharactersRanges.length > 0) {
            this._pushAutoClosedAction(autoClosedCharactersRanges, autoClosedEnclosingRanges);
        }
    }
    _executeEdit(callback, eventsCollector, source, cursorChangeReason = 0 /* CursorChangeReason.NotSet */) {
        if (this.context.cursorConfig.readOnly) {
            // we cannot edit when read only...
            return;
        }
        const oldState = CursorModelState.from(this._model, this);
        this._cursors.stopTrackingSelections();
        this._isHandling = true;
        try {
            this._cursors.ensureValidState();
            callback();
        }
        catch (err) {
            (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(err);
        }
        this._isHandling = false;
        this._cursors.startTrackingSelections();
        this._validateAutoClosedActions();
        if (this._emitStateChangedIfNecessary(eventsCollector, source, cursorChangeReason, oldState, false)) {
            this.revealPrimary(eventsCollector, source, false, 0 /* VerticalRevealType.Simple */, true, 0 /* editorCommon.ScrollType.Smooth */);
        }
    }
    getAutoClosedCharacters() {
        return AutoClosedAction.getAllAutoClosedCharacters(this._autoClosedActions);
    }
    startComposition(eventsCollector) {
        this._compositionState = new CompositionState(this._model, this.getSelections());
    }
    endComposition(eventsCollector, source) {
        const compositionOutcome = this._compositionState ? this._compositionState.deduceOutcome(this._model, this.getSelections()) : null;
        this._compositionState = null;
        this._executeEdit(() => {
            if (source === 'keyboard') {
                // composition finishes, let's check if we need to auto complete if necessary.
                this._executeEditOperation(_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeOperations */ .u6.compositionEndWithInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, compositionOutcome, this.getSelections(), this.getAutoClosedCharacters()));
            }
        }, eventsCollector, source);
    }
    type(eventsCollector, text, source) {
        this._executeEdit(() => {
            if (source === 'keyboard') {
                // If this event is coming straight from the keyboard, look for electric characters and enter
                const len = text.length;
                let offset = 0;
                while (offset < len) {
                    const charLength = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .nextCharLength */ .vH(text, offset);
                    const chr = text.substr(offset, charLength);
                    // Here we must interpret each typed character individually
                    this._executeEditOperation(_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeOperations */ .u6.typeWithInterceptors(!!this._compositionState, this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), this.getAutoClosedCharacters(), chr));
                    offset += charLength;
                }
            }
            else {
                this._executeEditOperation(_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeOperations */ .u6.typeWithoutInterceptors(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), text));
            }
        }, eventsCollector, source);
    }
    compositionType(eventsCollector, text, replacePrevCharCnt, replaceNextCharCnt, positionDelta, source) {
        if (text.length === 0 && replacePrevCharCnt === 0 && replaceNextCharCnt === 0) {
            // this edit is a no-op
            if (positionDelta !== 0) {
                // but it still wants to move the cursor
                const newSelections = this.getSelections().map(selection => {
                    const position = selection.getPosition();
                    return new _core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y(position.lineNumber, position.column + positionDelta, position.lineNumber, position.column + positionDelta);
                });
                this.setSelections(eventsCollector, source, newSelections, 0 /* CursorChangeReason.NotSet */);
            }
            return;
        }
        this._executeEdit(() => {
            this._executeEditOperation(_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeOperations */ .u6.compositionType(this._prevEditOperationType, this.context.cursorConfig, this._model, this.getSelections(), text, replacePrevCharCnt, replaceNextCharCnt, positionDelta));
        }, eventsCollector, source);
    }
    paste(eventsCollector, text, pasteOnNewLine, multicursorText, source) {
        this._executeEdit(() => {
            this._executeEditOperation(_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .TypeOperations */ .u6.paste(this.context.cursorConfig, this._model, this.getSelections(), text, pasteOnNewLine, multicursorText || []));
        }, eventsCollector, source, 4 /* CursorChangeReason.Paste */);
    }
    cut(eventsCollector, source) {
        this._executeEdit(() => {
            this._executeEditOperation(_cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_4__/* .DeleteOperations */ .A.cut(this.context.cursorConfig, this._model, this.getSelections()));
        }, eventsCollector, source);
    }
    executeCommand(eventsCollector, command, source) {
        this._executeEdit(() => {
            this._cursors.killSecondaryCursors();
            this._executeEditOperation(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, [command], {
                shouldPushStackElementBefore: false,
                shouldPushStackElementAfter: false
            }));
        }, eventsCollector, source);
    }
    executeCommands(eventsCollector, commands, source) {
        this._executeEdit(() => {
            this._executeEditOperation(new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .EditOperationResult */ .Tp(0 /* EditOperationType.Other */, commands, {
                shouldPushStackElementBefore: false,
                shouldPushStackElementAfter: false
            }));
        }, eventsCollector, source);
    }
}
/**
 * A snapshot of the cursor and the model state
 */
class CursorModelState {
    static from(model, cursor) {
        return new CursorModelState(model.getVersionId(), cursor.getCursorStates());
    }
    constructor(modelVersionId, cursorState) {
        this.modelVersionId = modelVersionId;
        this.cursorState = cursorState;
    }
    equals(other) {
        if (!other) {
            return false;
        }
        if (this.modelVersionId !== other.modelVersionId) {
            return false;
        }
        if (this.cursorState.length !== other.cursorState.length) {
            return false;
        }
        for (let i = 0, len = this.cursorState.length; i < len; i++) {
            if (!this.cursorState[i].equals(other.cursorState[i])) {
                return false;
            }
        }
        return true;
    }
}
class AutoClosedAction {
    static getAllAutoClosedCharacters(autoClosedActions) {
        let autoClosedCharacters = [];
        for (const autoClosedAction of autoClosedActions) {
            autoClosedCharacters = autoClosedCharacters.concat(autoClosedAction.getAutoClosedCharactersRanges());
        }
        return autoClosedCharacters;
    }
    constructor(model, autoClosedCharactersDecorations, autoClosedEnclosingDecorations) {
        this._model = model;
        this._autoClosedCharactersDecorations = autoClosedCharactersDecorations;
        this._autoClosedEnclosingDecorations = autoClosedEnclosingDecorations;
    }
    dispose() {
        this._autoClosedCharactersDecorations = this._model.deltaDecorations(this._autoClosedCharactersDecorations, []);
        this._autoClosedEnclosingDecorations = this._model.deltaDecorations(this._autoClosedEnclosingDecorations, []);
    }
    getAutoClosedCharactersRanges() {
        const result = [];
        for (let i = 0; i < this._autoClosedCharactersDecorations.length; i++) {
            const decorationRange = this._model.getDecorationRange(this._autoClosedCharactersDecorations[i]);
            if (decorationRange) {
                result.push(decorationRange);
            }
        }
        return result;
    }
    isValid(selections) {
        const enclosingRanges = [];
        for (let i = 0; i < this._autoClosedEnclosingDecorations.length; i++) {
            const decorationRange = this._model.getDecorationRange(this._autoClosedEnclosingDecorations[i]);
            if (decorationRange) {
                enclosingRanges.push(decorationRange);
                if (decorationRange.startLineNumber !== decorationRange.endLineNumber) {
                    // Stop tracking if the range becomes multiline...
                    return false;
                }
            }
        }
        enclosingRanges.sort(_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.compareRangesUsingStarts);
        selections.sort(_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.compareRangesUsingStarts);
        for (let i = 0; i < selections.length; i++) {
            if (i >= enclosingRanges.length) {
                return false;
            }
            if (!enclosingRanges[i].strictContainsRange(selections[i])) {
                return false;
            }
        }
        return true;
    }
}
class CommandExecutor {
    static executeCommands(model, selectionsBefore, commands) {
        const ctx = {
            model: model,
            selectionsBefore: selectionsBefore,
            trackedRanges: [],
            trackedRangesDirection: []
        };
        const result = this._innerExecuteCommands(ctx, commands);
        for (let i = 0, len = ctx.trackedRanges.length; i < len; i++) {
            ctx.model._setTrackedRange(ctx.trackedRanges[i], null, 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */);
        }
        return result;
    }
    static _innerExecuteCommands(ctx, commands) {
        if (this._arrayIsEmpty(commands)) {
            return null;
        }
        const commandsData = this._getEditOperations(ctx, commands);
        if (commandsData.operations.length === 0) {
            return null;
        }
        const rawOperations = commandsData.operations;
        const loserCursorsMap = this._getLoserCursorMap(rawOperations);
        if (loserCursorsMap.hasOwnProperty('0')) {
            // These commands are very messed up
            console.warn('Ignoring commands');
            return null;
        }
        // Remove operations belonging to losing cursors
        const filteredOperations = [];
        for (let i = 0, len = rawOperations.length; i < len; i++) {
            if (!loserCursorsMap.hasOwnProperty(rawOperations[i].identifier.major.toString())) {
                filteredOperations.push(rawOperations[i]);
            }
        }
        // TODO@Alex: find a better way to do this.
        // give the hint that edit operations are tracked to the model
        if (commandsData.hadTrackedEditOperation && filteredOperations.length > 0) {
            filteredOperations[0]._isTracked = true;
        }
        let selectionsAfter = ctx.model.pushEditOperations(ctx.selectionsBefore, filteredOperations, (inverseEditOperations) => {
            const groupedInverseEditOperations = [];
            for (let i = 0; i < ctx.selectionsBefore.length; i++) {
                groupedInverseEditOperations[i] = [];
            }
            for (const op of inverseEditOperations) {
                if (!op.identifier) {
                    // perhaps auto whitespace trim edits
                    continue;
                }
                groupedInverseEditOperations[op.identifier.major].push(op);
            }
            const minorBasedSorter = (a, b) => {
                return a.identifier.minor - b.identifier.minor;
            };
            const cursorSelections = [];
            for (let i = 0; i < ctx.selectionsBefore.length; i++) {
                if (groupedInverseEditOperations[i].length > 0) {
                    groupedInverseEditOperations[i].sort(minorBasedSorter);
                    cursorSelections[i] = commands[i].computeCursorState(ctx.model, {
                        getInverseEditOperations: () => {
                            return groupedInverseEditOperations[i];
                        },
                        getTrackedSelection: (id) => {
                            const idx = parseInt(id, 10);
                            const range = ctx.model._getTrackedRange(ctx.trackedRanges[idx]);
                            if (ctx.trackedRangesDirection[idx] === 0 /* SelectionDirection.LTR */) {
                                return new _core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
                            }
                            return new _core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y(range.endLineNumber, range.endColumn, range.startLineNumber, range.startColumn);
                        }
                    });
                }
                else {
                    cursorSelections[i] = ctx.selectionsBefore[i];
                }
            }
            return cursorSelections;
        });
        if (!selectionsAfter) {
            selectionsAfter = ctx.selectionsBefore;
        }
        // Extract losing cursors
        const losingCursors = [];
        for (const losingCursorIndex in loserCursorsMap) {
            if (loserCursorsMap.hasOwnProperty(losingCursorIndex)) {
                losingCursors.push(parseInt(losingCursorIndex, 10));
            }
        }
        // Sort losing cursors descending
        losingCursors.sort((a, b) => {
            return b - a;
        });
        // Remove losing cursors
        for (const losingCursor of losingCursors) {
            selectionsAfter.splice(losingCursor, 1);
        }
        return selectionsAfter;
    }
    static _arrayIsEmpty(commands) {
        for (let i = 0, len = commands.length; i < len; i++) {
            if (commands[i]) {
                return false;
            }
        }
        return true;
    }
    static _getEditOperations(ctx, commands) {
        let operations = [];
        let hadTrackedEditOperation = false;
        for (let i = 0, len = commands.length; i < len; i++) {
            const command = commands[i];
            if (command) {
                const r = this._getEditOperationsFromCommand(ctx, i, command);
                operations = operations.concat(r.operations);
                hadTrackedEditOperation = hadTrackedEditOperation || r.hadTrackedEditOperation;
            }
        }
        return {
            operations: operations,
            hadTrackedEditOperation: hadTrackedEditOperation
        };
    }
    static _getEditOperationsFromCommand(ctx, majorIdentifier, command) {
        // This method acts as a transaction, if the command fails
        // everything it has done is ignored
        const operations = [];
        let operationMinor = 0;
        const addEditOperation = (range, text, forceMoveMarkers = false) => {
            if (_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.isEmpty(range) && text === '') {
                // This command wants to add a no-op => no thank you
                return;
            }
            operations.push({
                identifier: {
                    major: majorIdentifier,
                    minor: operationMinor++
                },
                range: range,
                text: text,
                forceMoveMarkers: forceMoveMarkers,
                isAutoWhitespaceEdit: command.insertsAutoWhitespace
            });
        };
        let hadTrackedEditOperation = false;
        const addTrackedEditOperation = (selection, text, forceMoveMarkers) => {
            hadTrackedEditOperation = true;
            addEditOperation(selection, text, forceMoveMarkers);
        };
        const trackSelection = (_selection, trackPreviousOnEmpty) => {
            const selection = _core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y.liftSelection(_selection);
            let stickiness;
            if (selection.isEmpty()) {
                if (typeof trackPreviousOnEmpty === 'boolean') {
                    if (trackPreviousOnEmpty) {
                        stickiness = 2 /* TrackedRangeStickiness.GrowsOnlyWhenTypingBefore */;
                    }
                    else {
                        stickiness = 3 /* TrackedRangeStickiness.GrowsOnlyWhenTypingAfter */;
                    }
                }
                else {
                    // Try to lock it with surrounding text
                    const maxLineColumn = ctx.model.getLineMaxColumn(selection.startLineNumber);
                    if (selection.startColumn === maxLineColumn) {
                        stickiness = 2 /* TrackedRangeStickiness.GrowsOnlyWhenTypingBefore */;
                    }
                    else {
                        stickiness = 3 /* TrackedRangeStickiness.GrowsOnlyWhenTypingAfter */;
                    }
                }
            }
            else {
                stickiness = 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */;
            }
            const l = ctx.trackedRanges.length;
            const id = ctx.model._setTrackedRange(null, selection, stickiness);
            ctx.trackedRanges[l] = id;
            ctx.trackedRangesDirection[l] = selection.getDirection();
            return l.toString();
        };
        const editOperationBuilder = {
            addEditOperation: addEditOperation,
            addTrackedEditOperation: addTrackedEditOperation,
            trackSelection: trackSelection
        };
        try {
            command.getEditOperations(ctx.model, editOperationBuilder);
        }
        catch (e) {
            // TODO@Alex use notification service if this should be user facing
            // e.friendlyMessage = nls.localize('corrupt.commands', "Unexpected exception while executing command.");
            (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(e);
            return {
                operations: [],
                hadTrackedEditOperation: false
            };
        }
        return {
            operations: operations,
            hadTrackedEditOperation: hadTrackedEditOperation
        };
    }
    static _getLoserCursorMap(operations) {
        // This is destructive on the array
        operations = operations.slice(0);
        // Sort operations with last one first
        operations.sort((a, b) => {
            // Note the minus!
            return -(_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.compareRangesUsingEnds(a.range, b.range));
        });
        // Operations can not overlap!
        const loserCursorsMap = {};
        for (let i = 1; i < operations.length; i++) {
            const previousOp = operations[i - 1];
            const currentOp = operations[i];
            if (_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.getStartPosition(previousOp.range).isBefore(_core_range_js__WEBPACK_IMPORTED_MODULE_9__/* .Range */ .e.getEndPosition(currentOp.range))) {
                let loserMajor;
                if (previousOp.identifier.major > currentOp.identifier.major) {
                    // previousOp loses the battle
                    loserMajor = previousOp.identifier.major;
                }
                else {
                    loserMajor = currentOp.identifier.major;
                }
                loserCursorsMap[loserMajor.toString()] = true;
                for (let j = 0; j < operations.length; j++) {
                    if (operations[j].identifier.major === loserMajor) {
                        operations.splice(j, 1);
                        if (j < i) {
                            i--;
                        }
                        j--;
                    }
                }
                if (i > 0) {
                    i--;
                }
            }
        }
        return loserCursorsMap;
    }
}
class CompositionLineState {
    constructor(text, startSelection, endSelection) {
        this.text = text;
        this.startSelection = startSelection;
        this.endSelection = endSelection;
    }
}
class CompositionState {
    static _capture(textModel, selections) {
        const result = [];
        for (const selection of selections) {
            if (selection.startLineNumber !== selection.endLineNumber) {
                return null;
            }
            result.push(new CompositionLineState(textModel.getLineContent(selection.startLineNumber), selection.startColumn - 1, selection.endColumn - 1));
        }
        return result;
    }
    constructor(textModel, selections) {
        this._original = CompositionState._capture(textModel, selections);
    }
    /**
     * Returns the inserted text during this composition.
     * If the composition resulted in existing text being changed (i.e. not a pure insertion) it returns null.
     */
    deduceOutcome(textModel, selections) {
        if (!this._original) {
            return null;
        }
        const current = CompositionState._capture(textModel, selections);
        if (!current) {
            return null;
        }
        if (this._original.length !== current.length) {
            return null;
        }
        const result = [];
        for (let i = 0, len = this._original.length; i < len; i++) {
            result.push(CompositionState._deduceOutcome(this._original[i], current[i]));
        }
        return result;
    }
    static _deduceOutcome(original, current) {
        const commonPrefix = Math.min(original.startSelection, current.startSelection, _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .commonPrefixLength */ .Mh(original.text, current.text));
        const commonSuffix = Math.min(original.text.length - original.endSelection, current.text.length - current.endSelection, _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .commonSuffixLength */ .P1(original.text, current.text));
        const deletedText = original.text.substring(commonPrefix, original.text.length - commonSuffix);
        const insertedText = current.text.substring(commonPrefix, current.text.length - commonSuffix);
        return new _cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .CompositionOutcome */ .Nu(deletedText, original.startSelection - commonPrefix, original.endSelection - commonPrefix, insertedText, current.startSelection - commonPrefix, current.endSelection - commonPrefix);
    }
}


/***/ }),

/***/ 47238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ Cursor; }
/* harmony export */ });
/* harmony import */ var _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68273);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76584);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74980);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




/**
 * Represents a single cursor.
*/
class Cursor {
    constructor(context) {
        this._selTrackedRange = null;
        this._trackSelection = true;
        this._setState(context, new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(1, 1, 1, 1), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(1, 1), 0), new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(new _core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(1, 1, 1, 1), 0 /* SelectionStartKind.Simple */, 0, new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(1, 1), 0));
    }
    dispose(context) {
        this._removeTrackedRange(context);
    }
    startTrackingSelection(context) {
        this._trackSelection = true;
        this._updateTrackedRange(context);
    }
    stopTrackingSelection(context) {
        this._trackSelection = false;
        this._removeTrackedRange(context);
    }
    _updateTrackedRange(context) {
        if (!this._trackSelection) {
            // don't track the selection
            return;
        }
        this._selTrackedRange = context.model._setTrackedRange(this._selTrackedRange, this.modelState.selection, 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */);
    }
    _removeTrackedRange(context) {
        this._selTrackedRange = context.model._setTrackedRange(this._selTrackedRange, null, 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */);
    }
    asCursorState() {
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .CursorState */ .Vi(this.modelState, this.viewState);
    }
    readSelectionFromMarkers(context) {
        const range = context.model._getTrackedRange(this._selTrackedRange);
        if (this.modelState.selection.isEmpty() && !range.isEmpty()) {
            // Avoid selecting text when recovering from markers
            return _core_selection_js__WEBPACK_IMPORTED_MODULE_3__/* .Selection */ .Y.fromRange(range.collapseToEnd(), this.modelState.selection.getDirection());
        }
        return _core_selection_js__WEBPACK_IMPORTED_MODULE_3__/* .Selection */ .Y.fromRange(range, this.modelState.selection.getDirection());
    }
    ensureValidState(context) {
        this._setState(context, this.modelState, this.viewState);
    }
    setState(context, modelState, viewState) {
        this._setState(context, modelState, viewState);
    }
    static _validatePositionWithCache(viewModel, position, cacheInput, cacheOutput) {
        if (position.equals(cacheInput)) {
            return cacheOutput;
        }
        return viewModel.normalizePosition(position, 2 /* PositionAffinity.None */);
    }
    static _validateViewState(viewModel, viewState) {
        const position = viewState.position;
        const sStartPosition = viewState.selectionStart.getStartPosition();
        const sEndPosition = viewState.selectionStart.getEndPosition();
        const validPosition = viewModel.normalizePosition(position, 2 /* PositionAffinity.None */);
        const validSStartPosition = this._validatePositionWithCache(viewModel, sStartPosition, position, validPosition);
        const validSEndPosition = this._validatePositionWithCache(viewModel, sEndPosition, sStartPosition, validSStartPosition);
        if (position.equals(validPosition) && sStartPosition.equals(validSStartPosition) && sEndPosition.equals(validSEndPosition)) {
            // fast path: the state is valid
            return viewState;
        }
        return new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(validSStartPosition, validSEndPosition), viewState.selectionStartKind, viewState.selectionStartLeftoverVisibleColumns + sStartPosition.column - validSStartPosition.column, validPosition, viewState.leftoverVisibleColumns + position.column - validPosition.column);
    }
    _setState(context, modelState, viewState) {
        if (viewState) {
            viewState = Cursor._validateViewState(context.viewModel, viewState);
        }
        if (!modelState) {
            if (!viewState) {
                return;
            }
            // We only have the view state => compute the model state
            const selectionStart = context.model.validateRange(context.coordinatesConverter.convertViewRangeToModelRange(viewState.selectionStart));
            const position = context.model.validatePosition(context.coordinatesConverter.convertViewPositionToModelPosition(viewState.position));
            modelState = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(selectionStart, viewState.selectionStartKind, viewState.selectionStartLeftoverVisibleColumns, position, viewState.leftoverVisibleColumns);
        }
        else {
            // Validate new model state
            const selectionStart = context.model.validateRange(modelState.selectionStart);
            const selectionStartLeftoverVisibleColumns = modelState.selectionStart.equalsRange(selectionStart) ? modelState.selectionStartLeftoverVisibleColumns : 0;
            const position = context.model.validatePosition(modelState.position);
            const leftoverVisibleColumns = modelState.position.equals(position) ? modelState.leftoverVisibleColumns : 0;
            modelState = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(selectionStart, modelState.selectionStartKind, selectionStartLeftoverVisibleColumns, position, leftoverVisibleColumns);
        }
        if (!viewState) {
            // We only have the model state => compute the view state
            const viewSelectionStart1 = context.coordinatesConverter.convertModelPositionToViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(modelState.selectionStart.startLineNumber, modelState.selectionStart.startColumn));
            const viewSelectionStart2 = context.coordinatesConverter.convertModelPositionToViewPosition(new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(modelState.selectionStart.endLineNumber, modelState.selectionStart.endColumn));
            const viewSelectionStart = new _core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(viewSelectionStart1.lineNumber, viewSelectionStart1.column, viewSelectionStart2.lineNumber, viewSelectionStart2.column);
            const viewPosition = context.coordinatesConverter.convertModelPositionToViewPosition(modelState.position);
            viewState = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(viewSelectionStart, modelState.selectionStartKind, modelState.selectionStartLeftoverVisibleColumns, viewPosition, modelState.leftoverVisibleColumns);
        }
        else {
            // Validate new view state
            const viewSelectionStart = context.coordinatesConverter.validateViewRange(viewState.selectionStart, modelState.selectionStart);
            const viewPosition = context.coordinatesConverter.validateViewPosition(viewState.position, modelState.position);
            viewState = new _cursorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .SingleCursorState */ .rS(viewSelectionStart, modelState.selectionStartKind, modelState.selectionStartLeftoverVisibleColumns, viewPosition, modelState.leftoverVisibleColumns);
        }
        this.modelState = modelState;
        this.viewState = viewState;
        this._updateTrackedRange(context);
    }
}


/***/ })

}]);