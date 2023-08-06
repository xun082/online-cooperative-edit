"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-75d96dab"],{

/***/ 68642:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreEditingCommands: function() { return /* binding */ CoreEditingCommands; },
/* harmony export */   CoreEditorCommand: function() { return /* binding */ CoreEditorCommand; },
/* harmony export */   CoreNavigationCommands: function() { return /* binding */ CoreNavigationCommands; },
/* harmony export */   EditorScroll_: function() { return /* binding */ EditorScroll_; },
/* harmony export */   RevealLine_: function() { return /* binding */ RevealLine_; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47975);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28935);
/* harmony import */ var _base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70385);
/* harmony import */ var _editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91213);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74312);
/* harmony import */ var _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83141);
/* harmony import */ var _common_cursorCommon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68273);
/* harmony import */ var _common_cursor_cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11819);
/* harmony import */ var _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77364);
/* harmony import */ var _common_cursor_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99007);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13372);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76584);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94872);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81043);
/* harmony import */ var _platform_keybinding_common_keybindingsRegistry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31151);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
















const CORE_WEIGHT = 0 /* KeybindingWeight.EditorCore */;
class CoreEditorCommand extends _editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .EditorCommand */ ._l {
    runEditorCommand(accessor, editor, args) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            // the editor has no view => has no cursors
            return;
        }
        this.runCoreEditorCommand(viewModel, args || {});
    }
}
var EditorScroll_;
(function (EditorScroll_) {
    const isEditorScrollArgs = function (arg) {
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isObject */ .Kn(arg)) {
            return false;
        }
        const scrollArg = arg;
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .HD(scrollArg.to)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isUndefined */ .o8(scrollArg.by) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .HD(scrollArg.by)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isUndefined */ .o8(scrollArg.value) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isNumber */ .hj(scrollArg.value)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isUndefined */ .o8(scrollArg.revealCursor) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isBoolean */ .jn(scrollArg.revealCursor)) {
            return false;
        }
        return true;
    };
    EditorScroll_.description = {
        description: 'Scroll editor in the given direction',
        args: [
            {
                name: 'Editor scroll argument object',
                description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory direction value.
						\`\`\`
						'up', 'down'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'page', 'halfPage', 'editor'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'revealCursor': If 'true' reveals the cursor if it is outside view port.
				`,
                constraint: isEditorScrollArgs,
                schema: {
                    'type': 'object',
                    'required': ['to'],
                    'properties': {
                        'to': {
                            'type': 'string',
                            'enum': ['up', 'down']
                        },
                        'by': {
                            'type': 'string',
                            'enum': ['line', 'wrappedLine', 'page', 'halfPage', 'editor']
                        },
                        'value': {
                            'type': 'number',
                            'default': 1
                        },
                        'revealCursor': {
                            'type': 'boolean',
                        }
                    }
                }
            }
        ]
    };
    /**
     * Directions in the view for editor scroll command.
     */
    EditorScroll_.RawDirection = {
        Up: 'up',
        Right: 'right',
        Down: 'down',
        Left: 'left'
    };
    /**
     * Units for editor scroll 'by' argument
     */
    EditorScroll_.RawUnit = {
        Line: 'line',
        WrappedLine: 'wrappedLine',
        Page: 'page',
        HalfPage: 'halfPage',
        Editor: 'editor',
        Column: 'column'
    };
    function parse(args) {
        let direction;
        switch (args.to) {
            case EditorScroll_.RawDirection.Up:
                direction = 1 /* Direction.Up */;
                break;
            case EditorScroll_.RawDirection.Right:
                direction = 2 /* Direction.Right */;
                break;
            case EditorScroll_.RawDirection.Down:
                direction = 3 /* Direction.Down */;
                break;
            case EditorScroll_.RawDirection.Left:
                direction = 4 /* Direction.Left */;
                break;
            default:
                // Illegal arguments
                return null;
        }
        let unit;
        switch (args.by) {
            case EditorScroll_.RawUnit.Line:
                unit = 1 /* Unit.Line */;
                break;
            case EditorScroll_.RawUnit.WrappedLine:
                unit = 2 /* Unit.WrappedLine */;
                break;
            case EditorScroll_.RawUnit.Page:
                unit = 3 /* Unit.Page */;
                break;
            case EditorScroll_.RawUnit.HalfPage:
                unit = 4 /* Unit.HalfPage */;
                break;
            case EditorScroll_.RawUnit.Editor:
                unit = 5 /* Unit.Editor */;
                break;
            case EditorScroll_.RawUnit.Column:
                unit = 6 /* Unit.Column */;
                break;
            default:
                unit = 2 /* Unit.WrappedLine */;
        }
        const value = Math.floor(args.value || 1);
        const revealCursor = !!args.revealCursor;
        return {
            direction: direction,
            unit: unit,
            value: value,
            revealCursor: revealCursor,
            select: (!!args.select)
        };
    }
    EditorScroll_.parse = parse;
})(EditorScroll_ || (EditorScroll_ = {}));
var RevealLine_;
(function (RevealLine_) {
    const isRevealLineArgs = function (arg) {
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isObject */ .Kn(arg)) {
            return false;
        }
        const reveaLineArg = arg;
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isNumber */ .hj(reveaLineArg.lineNumber) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .HD(reveaLineArg.lineNumber)) {
            return false;
        }
        if (!_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isUndefined */ .o8(reveaLineArg.at) && !_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .isString */ .HD(reveaLineArg.at)) {
            return false;
        }
        return true;
    };
    RevealLine_.description = {
        description: 'Reveal the given line at the given logical position',
        args: [
            {
                name: 'Reveal line argument object',
                description: `Property-value pairs that can be passed through this argument:
					* 'lineNumber': A mandatory line number value.
					* 'at': Logical position at which line has to be revealed.
						\`\`\`
						'top', 'center', 'bottom'
						\`\`\`
				`,
                constraint: isRevealLineArgs,
                schema: {
                    'type': 'object',
                    'required': ['lineNumber'],
                    'properties': {
                        'lineNumber': {
                            'type': ['number', 'string'],
                        },
                        'at': {
                            'type': 'string',
                            'enum': ['top', 'center', 'bottom']
                        }
                    }
                }
            }
        ]
    };
    /**
     * Values for reveal line 'at' argument
     */
    RevealLine_.RawAtArgument = {
        Top: 'top',
        Center: 'center',
        Bottom: 'bottom'
    };
})(RevealLine_ || (RevealLine_ = {}));
class EditorOrNativeTextInputCommand {
    constructor(target) {
        // 1. handle case when focus is in editor.
        target.addImplementation(10000, 'code-editor', (accessor, args) => {
            // Only if editor text focus (i.e. not if editor has widget focus).
            const focusedEditor = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__/* .ICodeEditorService */ .$).getFocusedCodeEditor();
            if (focusedEditor && focusedEditor.hasTextFocus()) {
                return this._runEditorCommand(accessor, focusedEditor, args);
            }
            return false;
        });
        // 2. handle case when focus is in some other `input` / `textarea`.
        target.addImplementation(1000, 'generic-dom-input-textarea', (accessor, args) => {
            // Only if focused on an element that allows for entering text
            const activeElement = document.activeElement;
            if (activeElement && ['input', 'textarea'].indexOf(activeElement.tagName.toLowerCase()) >= 0) {
                this.runDOMCommand();
                return true;
            }
            return false;
        });
        // 3. (default) handle case when focus is somewhere else.
        target.addImplementation(0, 'generic-dom', (accessor, args) => {
            // Redirecting to active editor
            const activeEditor = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__/* .ICodeEditorService */ .$).getActiveCodeEditor();
            if (activeEditor) {
                activeEditor.focus();
                return this._runEditorCommand(accessor, activeEditor, args);
            }
            return false;
        });
    }
    _runEditorCommand(accessor, editor, args) {
        const result = this.runEditorCommand(accessor, editor, args);
        if (result) {
            return result;
        }
        return true;
    }
}
var CoreNavigationCommands;
(function (CoreNavigationCommands) {
    class BaseMoveToCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            const cursorStateChanged = viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveTo(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position, args.viewPosition)
            ]);
            if (cursorStateChanged && args.revealType !== 2 /* NavigationCommandRevealType.None */) {
                viewModel.revealPrimaryCursor(args.source, true, true);
            }
        }
    }
    CoreNavigationCommands.MoveTo = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new BaseMoveToCommand({
        id: '_moveTo',
        inSelectionMode: false,
        precondition: undefined
    }));
    CoreNavigationCommands.MoveToSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new BaseMoveToCommand({
        id: '_moveToSelect',
        inSelectionMode: true,
        precondition: undefined
    }));
    class ColumnSelectCommand extends CoreEditorCommand {
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            const result = this._getColumnSelectResult(viewModel, viewModel.getPrimaryCursorState(), viewModel.getCursorColumnSelectData(), args);
            if (result === null) {
                // invalid arguments
                return;
            }
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, result.viewStates.map((viewState) => _common_cursorCommon_js__WEBPACK_IMPORTED_MODULE_6__/* .CursorState */ .Vi.fromViewState(viewState)));
            viewModel.setCursorColumnSelectData({
                isReal: true,
                fromViewLineNumber: result.fromLineNumber,
                fromViewVisualColumn: result.fromVisualColumn,
                toViewLineNumber: result.toLineNumber,
                toViewVisualColumn: result.toVisualColumn
            });
            if (result.reversed) {
                viewModel.revealTopMostCursor(args.source);
            }
            else {
                viewModel.revealBottomMostCursor(args.source);
            }
        }
    }
    CoreNavigationCommands.ColumnSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends ColumnSelectCommand {
        constructor() {
            super({
                id: 'columnSelect',
                precondition: undefined
            });
        }
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            if (typeof args.position === 'undefined' || typeof args.viewPosition === 'undefined' || typeof args.mouseColumn === 'undefined') {
                return null;
            }
            // validate `args`
            const validatedPosition = viewModel.model.validatePosition(args.position);
            const validatedViewPosition = viewModel.coordinatesConverter.validateViewPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L(args.viewPosition.lineNumber, args.viewPosition.column), validatedPosition);
            const fromViewLineNumber = args.doColumnSelect ? prevColumnSelectData.fromViewLineNumber : validatedViewPosition.lineNumber;
            const fromViewVisualColumn = args.doColumnSelect ? prevColumnSelectData.fromViewVisualColumn : args.mouseColumn - 1;
            return _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__/* .ColumnSelection */ .U.columnSelect(viewModel.cursorConfig, viewModel, fromViewLineNumber, fromViewVisualColumn, validatedViewPosition.lineNumber, args.mouseColumn - 1);
        }
    });
    CoreNavigationCommands.CursorColumnSelectLeft = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends ColumnSelectCommand {
        constructor() {
            super({
                id: 'cursorColumnSelectLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 15 /* KeyCode.LeftArrow */,
                    linux: { primary: 0 }
                }
            });
        }
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__/* .ColumnSelection */ .U.columnSelectLeft(viewModel.cursorConfig, viewModel, prevColumnSelectData);
        }
    });
    CoreNavigationCommands.CursorColumnSelectRight = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends ColumnSelectCommand {
        constructor() {
            super({
                id: 'cursorColumnSelectRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 17 /* KeyCode.RightArrow */,
                    linux: { primary: 0 }
                }
            });
        }
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__/* .ColumnSelection */ .U.columnSelectRight(viewModel.cursorConfig, viewModel, prevColumnSelectData);
        }
    });
    class ColumnSelectUpCommand extends ColumnSelectCommand {
        constructor(opts) {
            super(opts);
            this._isPaged = opts.isPaged;
        }
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__/* .ColumnSelection */ .U.columnSelectUp(viewModel.cursorConfig, viewModel, prevColumnSelectData, this._isPaged);
        }
    }
    CoreNavigationCommands.CursorColumnSelectUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new ColumnSelectUpCommand({
        isPaged: false,
        id: 'cursorColumnSelectUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
            linux: { primary: 0 }
        }
    }));
    CoreNavigationCommands.CursorColumnSelectPageUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new ColumnSelectUpCommand({
        isPaged: true,
        id: 'cursorColumnSelectPageUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 11 /* KeyCode.PageUp */,
            linux: { primary: 0 }
        }
    }));
    class ColumnSelectDownCommand extends ColumnSelectCommand {
        constructor(opts) {
            super(opts);
            this._isPaged = opts.isPaged;
        }
        _getColumnSelectResult(viewModel, primary, prevColumnSelectData, args) {
            return _common_cursor_cursorColumnSelection_js__WEBPACK_IMPORTED_MODULE_5__/* .ColumnSelection */ .U.columnSelectDown(viewModel.cursorConfig, viewModel, prevColumnSelectData, this._isPaged);
        }
    }
    CoreNavigationCommands.CursorColumnSelectDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new ColumnSelectDownCommand({
        isPaged: false,
        id: 'cursorColumnSelectDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
            linux: { primary: 0 }
        }
    }));
    CoreNavigationCommands.CursorColumnSelectPageDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new ColumnSelectDownCommand({
        isPaged: true,
        id: 'cursorColumnSelectPageDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 12 /* KeyCode.PageDown */,
            linux: { primary: 0 }
        }
    }));
    class CursorMoveImpl extends CoreEditorCommand {
        constructor() {
            super({
                id: 'cursorMove',
                precondition: undefined,
                description: _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMove */ .N.description
            });
        }
        runCoreEditorCommand(viewModel, args) {
            const parsed = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMove */ .N.parse(args);
            if (!parsed) {
                // illegal arguments
                return;
            }
            this._runCursorMove(viewModel, args.source, parsed);
        }
        _runCursorMove(viewModel, source, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(source, 3 /* CursorChangeReason.Explicit */, CursorMoveImpl._move(viewModel, viewModel.getCursorStates(), args));
            viewModel.revealPrimaryCursor(source, true);
        }
        static _move(viewModel, cursors, args) {
            const inSelectionMode = args.select;
            const value = args.value;
            switch (args.direction) {
                case 0 /* CursorMove_.Direction.Left */:
                case 1 /* CursorMove_.Direction.Right */:
                case 2 /* CursorMove_.Direction.Up */:
                case 3 /* CursorMove_.Direction.Down */:
                case 4 /* CursorMove_.Direction.PrevBlankLine */:
                case 5 /* CursorMove_.Direction.NextBlankLine */:
                case 6 /* CursorMove_.Direction.WrappedLineStart */:
                case 7 /* CursorMove_.Direction.WrappedLineFirstNonWhitespaceCharacter */:
                case 8 /* CursorMove_.Direction.WrappedLineColumnCenter */:
                case 9 /* CursorMove_.Direction.WrappedLineEnd */:
                case 10 /* CursorMove_.Direction.WrappedLineLastNonWhitespaceCharacter */:
                    return _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.simpleMove(viewModel, cursors, args.direction, inSelectionMode, value, args.unit);
                case 11 /* CursorMove_.Direction.ViewPortTop */:
                case 13 /* CursorMove_.Direction.ViewPortBottom */:
                case 12 /* CursorMove_.Direction.ViewPortCenter */:
                case 14 /* CursorMove_.Direction.ViewPortIfOutside */:
                    return _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.viewportMove(viewModel, cursors, args.direction, inSelectionMode, value);
                default:
                    return null;
            }
        }
    }
    CoreNavigationCommands.CursorMoveImpl = CursorMoveImpl;
    CoreNavigationCommands.CursorMove = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveImpl());
    class CursorMoveBasedCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._staticArgs = opts.args;
        }
        runCoreEditorCommand(viewModel, dynamicArgs) {
            let args = this._staticArgs;
            if (this._staticArgs.value === -1 /* Constants.PAGE_SIZE_MARKER */) {
                // -1 is a marker for page size
                args = {
                    direction: this._staticArgs.direction,
                    unit: this._staticArgs.unit,
                    select: this._staticArgs.select,
                    value: dynamicArgs.pageSize || viewModel.cursorConfig.pageSize
                };
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(dynamicArgs.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.simpleMove(viewModel, viewModel.getCursorStates(), args.direction, args.select, args.value, args.unit));
            viewModel.revealPrimaryCursor(dynamicArgs.source, true);
        }
    }
    CoreNavigationCommands.CursorLeft = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 0 /* CursorMove_.Direction.Left */,
            unit: 0 /* CursorMove_.Unit.None */,
            select: false,
            value: 1
        },
        id: 'cursorLeft',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 15 /* KeyCode.LeftArrow */,
            mac: { primary: 15 /* KeyCode.LeftArrow */, secondary: [256 /* KeyMod.WinCtrl */ | 32 /* KeyCode.KeyB */] }
        }
    }));
    CoreNavigationCommands.CursorLeftSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 0 /* CursorMove_.Direction.Left */,
            unit: 0 /* CursorMove_.Unit.None */,
            select: true,
            value: 1
        },
        id: 'cursorLeftSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */
        }
    }));
    CoreNavigationCommands.CursorRight = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 1 /* CursorMove_.Direction.Right */,
            unit: 0 /* CursorMove_.Unit.None */,
            select: false,
            value: 1
        },
        id: 'cursorRight',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 17 /* KeyCode.RightArrow */,
            mac: { primary: 17 /* KeyCode.RightArrow */, secondary: [256 /* KeyMod.WinCtrl */ | 36 /* KeyCode.KeyF */] }
        }
    }));
    CoreNavigationCommands.CursorRightSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 1 /* CursorMove_.Direction.Right */,
            unit: 0 /* CursorMove_.Unit.None */,
            select: true,
            value: 1
        },
        id: 'cursorRightSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */
        }
    }));
    CoreNavigationCommands.CursorUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: false,
            value: 1
        },
        id: 'cursorUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 16 /* KeyCode.UpArrow */,
            mac: { primary: 16 /* KeyCode.UpArrow */, secondary: [256 /* KeyMod.WinCtrl */ | 46 /* KeyCode.KeyP */] }
        }
    }));
    CoreNavigationCommands.CursorUpSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: true,
            value: 1
        },
        id: 'cursorUpSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */,
            secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */],
            mac: { primary: 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */ },
            linux: { primary: 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */ }
        }
    }));
    CoreNavigationCommands.CursorPageUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: false,
            value: -1 /* Constants.PAGE_SIZE_MARKER */
        },
        id: 'cursorPageUp',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 11 /* KeyCode.PageUp */
        }
    }));
    CoreNavigationCommands.CursorPageUpSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 2 /* CursorMove_.Direction.Up */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: true,
            value: -1 /* Constants.PAGE_SIZE_MARKER */
        },
        id: 'cursorPageUpSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 11 /* KeyCode.PageUp */
        }
    }));
    CoreNavigationCommands.CursorDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: false,
            value: 1
        },
        id: 'cursorDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 18 /* KeyCode.DownArrow */,
            mac: { primary: 18 /* KeyCode.DownArrow */, secondary: [256 /* KeyMod.WinCtrl */ | 44 /* KeyCode.KeyN */] }
        }
    }));
    CoreNavigationCommands.CursorDownSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: true,
            value: 1
        },
        id: 'cursorDownSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */,
            secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */],
            mac: { primary: 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */ },
            linux: { primary: 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */ }
        }
    }));
    CoreNavigationCommands.CursorPageDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: false,
            value: -1 /* Constants.PAGE_SIZE_MARKER */
        },
        id: 'cursorPageDown',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 12 /* KeyCode.PageDown */
        }
    }));
    CoreNavigationCommands.CursorPageDownSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new CursorMoveBasedCommand({
        args: {
            direction: 3 /* CursorMove_.Direction.Down */,
            unit: 2 /* CursorMove_.Unit.WrappedLine */,
            select: true,
            value: -1 /* Constants.PAGE_SIZE_MARKER */
        },
        id: 'cursorPageDownSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 12 /* KeyCode.PageDown */
        }
    }));
    CoreNavigationCommands.CreateCursor = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'createCursor',
                precondition: undefined
            });
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            let newState;
            if (args.wholeLine) {
                newState = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.line(viewModel, viewModel.getPrimaryCursorState(), false, args.position, args.viewPosition);
            }
            else {
                newState = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveTo(viewModel, viewModel.getPrimaryCursorState(), false, args.position, args.viewPosition);
            }
            const states = viewModel.getCursorStates();
            // Check if we should remove a cursor (sort of like a toggle)
            if (states.length > 1) {
                const newModelPosition = (newState.modelState ? newState.modelState.position : null);
                const newViewPosition = (newState.viewState ? newState.viewState.position : null);
                for (let i = 0, len = states.length; i < len; i++) {
                    const state = states[i];
                    if (newModelPosition && !state.modelState.selection.containsPosition(newModelPosition)) {
                        continue;
                    }
                    if (newViewPosition && !state.viewState.selection.containsPosition(newViewPosition)) {
                        continue;
                    }
                    // => Remove the cursor
                    states.splice(i, 1);
                    viewModel.model.pushStackElement();
                    viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, states);
                    return;
                }
            }
            // => Add the new cursor
            states.push(newState);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, states);
        }
    });
    CoreNavigationCommands.LastCursorMoveToSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: '_lastCursorMoveToSelect',
                precondition: undefined
            });
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            newStates[lastAddedCursorIndex] = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveTo(viewModel, states[lastAddedCursorIndex], true, args.position, args.viewPosition);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, newStates);
        }
    });
    class HomeCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveToBeginningOfLine(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealPrimaryCursor(args.source, true);
        }
    }
    CoreNavigationCommands.CursorHome = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new HomeCommand({
        inSelectionMode: false,
        id: 'cursorHome',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 14 /* KeyCode.Home */,
            mac: { primary: 14 /* KeyCode.Home */, secondary: [2048 /* KeyMod.CtrlCmd */ | 15 /* KeyCode.LeftArrow */] }
        }
    }));
    CoreNavigationCommands.CursorHomeSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new HomeCommand({
        inSelectionMode: true,
        id: 'cursorHomeSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 14 /* KeyCode.Home */,
            mac: { primary: 1024 /* KeyMod.Shift */ | 14 /* KeyCode.Home */, secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */] }
        }
    }));
    class LineStartCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, this._exec(viewModel.getCursorStates()));
            viewModel.revealPrimaryCursor(args.source, true);
        }
        _exec(cursors) {
            const result = [];
            for (let i = 0, len = cursors.length; i < len; i++) {
                const cursor = cursors[i];
                const lineNumber = cursor.modelState.position.lineNumber;
                result[i] = _common_cursorCommon_js__WEBPACK_IMPORTED_MODULE_6__/* .CursorState */ .Vi.fromModelState(cursor.modelState.move(this._inSelectionMode, lineNumber, 1, 0));
            }
            return result;
        }
    }
    CoreNavigationCommands.CursorLineStart = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineStartCommand({
        inSelectionMode: false,
        id: 'cursorLineStart',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 0,
            mac: { primary: 256 /* KeyMod.WinCtrl */ | 31 /* KeyCode.KeyA */ }
        }
    }));
    CoreNavigationCommands.CursorLineStartSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineStartCommand({
        inSelectionMode: true,
        id: 'cursorLineStartSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 0,
            mac: { primary: 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 31 /* KeyCode.KeyA */ }
        }
    }));
    class EndCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveToEndOfLine(viewModel, viewModel.getCursorStates(), this._inSelectionMode, args.sticky || false));
            viewModel.revealPrimaryCursor(args.source, true);
        }
    }
    CoreNavigationCommands.CursorEnd = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new EndCommand({
        inSelectionMode: false,
        id: 'cursorEnd',
        precondition: undefined,
        kbOpts: {
            args: { sticky: false },
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 13 /* KeyCode.End */,
            mac: { primary: 13 /* KeyCode.End */, secondary: [2048 /* KeyMod.CtrlCmd */ | 17 /* KeyCode.RightArrow */] }
        },
        description: {
            description: `Go to End`,
            args: [{
                    name: 'args',
                    schema: {
                        type: 'object',
                        properties: {
                            'sticky': {
                                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('stickydesc', "Stick to the end even when going to longer lines"),
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }]
        }
    }));
    CoreNavigationCommands.CursorEndSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new EndCommand({
        inSelectionMode: true,
        id: 'cursorEndSelect',
        precondition: undefined,
        kbOpts: {
            args: { sticky: false },
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 1024 /* KeyMod.Shift */ | 13 /* KeyCode.End */,
            mac: { primary: 1024 /* KeyMod.Shift */ | 13 /* KeyCode.End */, secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */] }
        },
        description: {
            description: `Select to End`,
            args: [{
                    name: 'args',
                    schema: {
                        type: 'object',
                        properties: {
                            'sticky': {
                                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('stickydesc', "Stick to the end even when going to longer lines"),
                                type: 'boolean',
                                default: false
                            }
                        }
                    }
                }]
        }
    }));
    class LineEndCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, this._exec(viewModel, viewModel.getCursorStates()));
            viewModel.revealPrimaryCursor(args.source, true);
        }
        _exec(viewModel, cursors) {
            const result = [];
            for (let i = 0, len = cursors.length; i < len; i++) {
                const cursor = cursors[i];
                const lineNumber = cursor.modelState.position.lineNumber;
                const maxColumn = viewModel.model.getLineMaxColumn(lineNumber);
                result[i] = _common_cursorCommon_js__WEBPACK_IMPORTED_MODULE_6__/* .CursorState */ .Vi.fromModelState(cursor.modelState.move(this._inSelectionMode, lineNumber, maxColumn, 0));
            }
            return result;
        }
    }
    CoreNavigationCommands.CursorLineEnd = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineEndCommand({
        inSelectionMode: false,
        id: 'cursorLineEnd',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 0,
            mac: { primary: 256 /* KeyMod.WinCtrl */ | 35 /* KeyCode.KeyE */ }
        }
    }));
    CoreNavigationCommands.CursorLineEndSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineEndCommand({
        inSelectionMode: true,
        id: 'cursorLineEndSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 0,
            mac: { primary: 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 35 /* KeyCode.KeyE */ }
        }
    }));
    class TopCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveToBeginningOfBuffer(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealPrimaryCursor(args.source, true);
        }
    }
    CoreNavigationCommands.CursorTop = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new TopCommand({
        inSelectionMode: false,
        id: 'cursorTop',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 14 /* KeyCode.Home */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */ }
        }
    }));
    CoreNavigationCommands.CursorTopSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new TopCommand({
        inSelectionMode: true,
        id: 'cursorTopSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 14 /* KeyCode.Home */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */ }
        }
    }));
    class BottomCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.moveToEndOfBuffer(viewModel, viewModel.getCursorStates(), this._inSelectionMode));
            viewModel.revealPrimaryCursor(args.source, true);
        }
    }
    CoreNavigationCommands.CursorBottom = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new BottomCommand({
        inSelectionMode: false,
        id: 'cursorBottom',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 13 /* KeyCode.End */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */ }
        }
    }));
    CoreNavigationCommands.CursorBottomSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new BottomCommand({
        inSelectionMode: true,
        id: 'cursorBottomSelect',
        precondition: undefined,
        kbOpts: {
            weight: CORE_WEIGHT,
            kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
            primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 13 /* KeyCode.End */,
            mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */ }
        }
    }));
    class EditorScrollImpl extends CoreEditorCommand {
        constructor() {
            super({
                id: 'editorScroll',
                precondition: undefined,
                description: EditorScroll_.description
            });
        }
        determineScrollMethod(args) {
            const horizontalUnits = [6 /* EditorScroll_.Unit.Column */];
            const verticalUnits = [
                1 /* EditorScroll_.Unit.Line */,
                2 /* EditorScroll_.Unit.WrappedLine */,
                3 /* EditorScroll_.Unit.Page */,
                4 /* EditorScroll_.Unit.HalfPage */,
                5 /* EditorScroll_.Unit.Editor */,
                6 /* EditorScroll_.Unit.Column */
            ];
            const horizontalDirections = [4 /* EditorScroll_.Direction.Left */, 2 /* EditorScroll_.Direction.Right */];
            const verticalDirections = [1 /* EditorScroll_.Direction.Up */, 3 /* EditorScroll_.Direction.Down */];
            if (horizontalUnits.includes(args.unit) && horizontalDirections.includes(args.direction)) {
                return this._runHorizontalEditorScroll.bind(this);
            }
            if (verticalUnits.includes(args.unit) && verticalDirections.includes(args.direction)) {
                return this._runVerticalEditorScroll.bind(this);
            }
            return null;
        }
        runCoreEditorCommand(viewModel, args) {
            const parsed = EditorScroll_.parse(args);
            if (!parsed) {
                // illegal arguments
                return;
            }
            const runEditorScroll = this.determineScrollMethod(parsed);
            if (!runEditorScroll) {
                // Incompatible unit and direction
                return;
            }
            runEditorScroll(viewModel, args.source, parsed);
        }
        _runVerticalEditorScroll(viewModel, source, args) {
            const desiredScrollTop = this._computeDesiredScrollTop(viewModel, args);
            if (args.revealCursor) {
                // must ensure cursor is in new visible range
                const desiredVisibleViewRange = viewModel.getCompletelyVisibleViewRangeAtScrollTop(desiredScrollTop);
                viewModel.setCursorStates(source, 3 /* CursorChangeReason.Explicit */, [
                    _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.findPositionInViewportIfOutside(viewModel, viewModel.getPrimaryCursorState(), desiredVisibleViewRange, args.select)
                ]);
            }
            viewModel.viewLayout.setScrollPosition({ scrollTop: desiredScrollTop }, 0 /* ScrollType.Smooth */);
        }
        _computeDesiredScrollTop(viewModel, args) {
            if (args.unit === 1 /* EditorScroll_.Unit.Line */) {
                // scrolling by model lines
                const futureViewport = viewModel.viewLayout.getFutureViewport();
                const visibleViewRange = viewModel.getCompletelyVisibleViewRangeAtScrollTop(futureViewport.top);
                const visibleModelRange = viewModel.coordinatesConverter.convertViewRangeToModelRange(visibleViewRange);
                let desiredTopModelLineNumber;
                if (args.direction === 1 /* EditorScroll_.Direction.Up */) {
                    // must go x model lines up
                    desiredTopModelLineNumber = Math.max(1, visibleModelRange.startLineNumber - args.value);
                }
                else {
                    // must go x model lines down
                    desiredTopModelLineNumber = Math.min(viewModel.model.getLineCount(), visibleModelRange.startLineNumber + args.value);
                }
                const viewPosition = viewModel.coordinatesConverter.convertModelPositionToViewPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L(desiredTopModelLineNumber, 1));
                return viewModel.viewLayout.getVerticalOffsetForLineNumber(viewPosition.lineNumber);
            }
            if (args.unit === 5 /* EditorScroll_.Unit.Editor */) {
                let desiredTopModelLineNumber = 0;
                if (args.direction === 3 /* EditorScroll_.Direction.Down */) {
                    desiredTopModelLineNumber = viewModel.model.getLineCount() - viewModel.cursorConfig.pageSize;
                }
                return viewModel.viewLayout.getVerticalOffsetForLineNumber(desiredTopModelLineNumber);
            }
            let noOfLines;
            if (args.unit === 3 /* EditorScroll_.Unit.Page */) {
                noOfLines = viewModel.cursorConfig.pageSize * args.value;
            }
            else if (args.unit === 4 /* EditorScroll_.Unit.HalfPage */) {
                noOfLines = Math.round(viewModel.cursorConfig.pageSize / 2) * args.value;
            }
            else {
                noOfLines = args.value;
            }
            const deltaLines = (args.direction === 1 /* EditorScroll_.Direction.Up */ ? -1 : 1) * noOfLines;
            return viewModel.viewLayout.getCurrentScrollTop() + deltaLines * viewModel.cursorConfig.lineHeight;
        }
        _runHorizontalEditorScroll(viewModel, source, args) {
            const desiredScrollLeft = this._computeDesiredScrollLeft(viewModel, args);
            viewModel.viewLayout.setScrollPosition({ scrollLeft: desiredScrollLeft }, 0 /* ScrollType.Smooth */);
        }
        _computeDesiredScrollLeft(viewModel, args) {
            const deltaColumns = (args.direction === 4 /* EditorScroll_.Direction.Left */ ? -1 : 1) * args.value;
            return viewModel.viewLayout.getCurrentScrollLeft() + deltaColumns * viewModel.cursorConfig.typicalHalfwidthCharacterWidth;
        }
    }
    CoreNavigationCommands.EditorScrollImpl = EditorScrollImpl;
    CoreNavigationCommands.EditorScroll = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new EditorScrollImpl());
    CoreNavigationCommands.ScrollLineUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollLineUp',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */,
                    mac: { primary: 256 /* KeyMod.WinCtrl */ | 11 /* KeyCode.PageUp */ }
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollPageUp = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollPageUp',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 11 /* KeyCode.PageUp */,
                    win: { primary: 512 /* KeyMod.Alt */ | 11 /* KeyCode.PageUp */ },
                    linux: { primary: 512 /* KeyMod.Alt */ | 11 /* KeyCode.PageUp */ }
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollEditorTop = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollEditorTop',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Up,
                by: EditorScroll_.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollLineDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollLineDown',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */,
                    mac: { primary: 256 /* KeyMod.WinCtrl */ | 12 /* KeyCode.PageDown */ }
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.WrappedLine,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollPageDown = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollPageDown',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 2048 /* KeyMod.CtrlCmd */ | 12 /* KeyCode.PageDown */,
                    win: { primary: 512 /* KeyMod.Alt */ | 12 /* KeyCode.PageDown */ },
                    linux: { primary: 512 /* KeyMod.Alt */ | 12 /* KeyCode.PageDown */ }
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.Page,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollEditorBottom = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollEditorBottom',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Down,
                by: EditorScroll_.RawUnit.Editor,
                value: 1,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollLeft = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Left,
                by: EditorScroll_.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    CoreNavigationCommands.ScrollRight = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'scrollRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            CoreNavigationCommands.EditorScroll.runCoreEditorCommand(viewModel, {
                to: EditorScroll_.RawDirection.Right,
                by: EditorScroll_.RawUnit.Column,
                value: 2,
                revealCursor: false,
                select: false,
                source: args.source
            });
        }
    });
    class WordCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.word(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position)
            ]);
            if (args.revealType !== 2 /* NavigationCommandRevealType.None */) {
                viewModel.revealPrimaryCursor(args.source, true, true);
            }
        }
    }
    CoreNavigationCommands.WordSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new WordCommand({
        inSelectionMode: false,
        id: '_wordSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.WordSelectDrag = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new WordCommand({
        inSelectionMode: true,
        id: '_wordSelectDrag',
        precondition: undefined
    }));
    CoreNavigationCommands.LastCursorWordSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'lastCursorWordSelect',
                precondition: undefined
            });
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            const lastAddedState = states[lastAddedCursorIndex];
            newStates[lastAddedCursorIndex] = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.word(viewModel, lastAddedState, lastAddedState.modelState.hasSelection(), args.position);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, newStates);
        }
    });
    class LineCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.line(viewModel, viewModel.getPrimaryCursorState(), this._inSelectionMode, args.position, args.viewPosition)
            ]);
            if (args.revealType !== 2 /* NavigationCommandRevealType.None */) {
                viewModel.revealPrimaryCursor(args.source, false, true);
            }
        }
    }
    CoreNavigationCommands.LineSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineCommand({
        inSelectionMode: false,
        id: '_lineSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.LineSelectDrag = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LineCommand({
        inSelectionMode: true,
        id: '_lineSelectDrag',
        precondition: undefined
    }));
    class LastCursorLineCommand extends CoreEditorCommand {
        constructor(opts) {
            super(opts);
            this._inSelectionMode = opts.inSelectionMode;
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.position) {
                return;
            }
            const lastAddedCursorIndex = viewModel.getLastAddedCursorIndex();
            const states = viewModel.getCursorStates();
            const newStates = states.slice(0);
            newStates[lastAddedCursorIndex] = _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.line(viewModel, states[lastAddedCursorIndex], this._inSelectionMode, args.position, args.viewPosition);
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, newStates);
        }
    }
    CoreNavigationCommands.LastCursorLineSelect = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LastCursorLineCommand({
        inSelectionMode: false,
        id: 'lastCursorLineSelect',
        precondition: undefined
    }));
    CoreNavigationCommands.LastCursorLineSelectDrag = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new LastCursorLineCommand({
        inSelectionMode: true,
        id: 'lastCursorLineSelectDrag',
        precondition: undefined
    }));
    CoreNavigationCommands.CancelSelection = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'cancelSelection',
                precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.hasNonEmptySelection,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 9 /* KeyCode.Escape */,
                    secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.cancelSelection(viewModel, viewModel.getPrimaryCursorState())
            ]);
            viewModel.revealPrimaryCursor(args.source, true);
        }
    });
    CoreNavigationCommands.RemoveSecondaryCursors = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'removeSecondaryCursors',
                precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.hasMultipleSelections,
                kbOpts: {
                    weight: CORE_WEIGHT + 1,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 9 /* KeyCode.Escape */,
                    secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
                }
            });
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                viewModel.getPrimaryCursorState()
            ]);
            viewModel.revealPrimaryCursor(args.source, true);
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_2__/* .status */ .i7)(_nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('removedCursor', "Removed secondary cursors"));
        }
    });
    CoreNavigationCommands.RevealLine = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'revealLine',
                precondition: undefined,
                description: RevealLine_.description
            });
        }
        runCoreEditorCommand(viewModel, args) {
            const revealLineArg = args;
            const lineNumberArg = revealLineArg.lineNumber || 0;
            let lineNumber = typeof lineNumberArg === 'number' ? (lineNumberArg + 1) : (parseInt(lineNumberArg) + 1);
            if (lineNumber < 1) {
                lineNumber = 1;
            }
            const lineCount = viewModel.model.getLineCount();
            if (lineNumber > lineCount) {
                lineNumber = lineCount;
            }
            const range = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e(lineNumber, 1, lineNumber, viewModel.model.getLineMaxColumn(lineNumber));
            let revealAt = 0 /* VerticalRevealType.Simple */;
            if (revealLineArg.at) {
                switch (revealLineArg.at) {
                    case RevealLine_.RawAtArgument.Top:
                        revealAt = 3 /* VerticalRevealType.Top */;
                        break;
                    case RevealLine_.RawAtArgument.Center:
                        revealAt = 1 /* VerticalRevealType.Center */;
                        break;
                    case RevealLine_.RawAtArgument.Bottom:
                        revealAt = 4 /* VerticalRevealType.Bottom */;
                        break;
                    default:
                        break;
                }
            }
            const viewRange = viewModel.coordinatesConverter.convertModelRangeToViewRange(range);
            viewModel.revealRange(args.source, false, viewRange, revealAt, 0 /* ScrollType.Smooth */);
        }
    });
    CoreNavigationCommands.SelectAll = new class extends EditorOrNativeTextInputCommand {
        constructor() {
            super(_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .SelectAllCommand */ .Sq);
        }
        runDOMCommand() {
            if (_base_browser_browser_js__WEBPACK_IMPORTED_MODULE_1__.isFirefox) {
                document.activeElement.focus();
                document.activeElement.select();
            }
            document.execCommand('selectAll');
        }
        runEditorCommand(accessor, editor, args) {
            const viewModel = editor._getViewModel();
            if (!viewModel) {
                // the editor has no view => has no cursors
                return;
            }
            this.runCoreEditorCommand(viewModel, args);
        }
        runCoreEditorCommand(viewModel, args) {
            viewModel.model.pushStackElement();
            viewModel.setCursorStates('keyboard', 3 /* CursorChangeReason.Explicit */, [
                _common_cursor_cursorMoveCommands_js__WEBPACK_IMPORTED_MODULE_8__/* .CursorMoveCommands */ .P.selectAll(viewModel, viewModel.getPrimaryCursorState())
            ]);
        }
    }();
    CoreNavigationCommands.SetSelection = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditorCommand {
        constructor() {
            super({
                id: 'setSelection',
                precondition: undefined
            });
        }
        runCoreEditorCommand(viewModel, args) {
            if (!args.selection) {
                return;
            }
            viewModel.model.pushStackElement();
            viewModel.setCursorStates(args.source, 3 /* CursorChangeReason.Explicit */, [
                _common_cursorCommon_js__WEBPACK_IMPORTED_MODULE_6__/* .CursorState */ .Vi.fromModelSelection(args.selection)
            ]);
        }
    });
})(CoreNavigationCommands || (CoreNavigationCommands = {}));
const columnSelectionCondition = _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.columnSelection);
function registerColumnSelection(id, keybinding) {
    _platform_keybinding_common_keybindingsRegistry_js__WEBPACK_IMPORTED_MODULE_12__/* .KeybindingsRegistry */ .W.registerKeybindingRule({
        id: id,
        primary: keybinding,
        when: columnSelectionCondition,
        weight: CORE_WEIGHT + 1
    });
}
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectLeft.id, 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */);
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectRight.id, 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */);
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectUp.id, 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */);
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectPageUp.id, 1024 /* KeyMod.Shift */ | 11 /* KeyCode.PageUp */);
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectDown.id, 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */);
registerColumnSelection(CoreNavigationCommands.CursorColumnSelectPageDown.id, 1024 /* KeyMod.Shift */ | 12 /* KeyCode.PageDown */);
function registerCommand(command) {
    command.register();
    return command;
}
var CoreEditingCommands;
(function (CoreEditingCommands) {
    class CoreEditingCommand extends _editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .EditorCommand */ ._l {
        runEditorCommand(accessor, editor, args) {
            const viewModel = editor._getViewModel();
            if (!viewModel) {
                // the editor has no view => has no cursors
                return;
            }
            this.runCoreEditingCommand(editor, viewModel, args || {});
        }
    }
    CoreEditingCommands.CoreEditingCommand = CoreEditingCommand;
    CoreEditingCommands.LineBreakInsert = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditingCommand {
        constructor() {
            super({
                id: 'lineBreakInsert',
                precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 0,
                    mac: { primary: 256 /* KeyMod.WinCtrl */ | 45 /* KeyCode.KeyO */ }
                }
            });
        }
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, _common_cursor_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_9__/* .TypeOperations */ .u6.lineBreakInsert(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map(s => s.modelState.selection)));
        }
    });
    CoreEditingCommands.Outdent = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditingCommand {
        constructor() {
            super({
                id: 'outdent',
                precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.editorTextFocus, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.tabDoesNotMoveFocus),
                    primary: 1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */
                }
            });
        }
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, _common_cursor_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_9__/* .TypeOperations */ .u6.outdent(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map(s => s.modelState.selection)));
            editor.pushUndoStop();
        }
    });
    CoreEditingCommands.Tab = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditingCommand {
        constructor() {
            super({
                id: 'tab',
                precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.writable,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_11__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.editorTextFocus, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.tabDoesNotMoveFocus),
                    primary: 2 /* KeyCode.Tab */
                }
            });
        }
        runCoreEditingCommand(editor, viewModel, args) {
            editor.pushUndoStop();
            editor.executeCommands(this.id, _common_cursor_cursorTypeOperations_js__WEBPACK_IMPORTED_MODULE_9__/* .TypeOperations */ .u6.tab(viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map(s => s.modelState.selection)));
            editor.pushUndoStop();
        }
    });
    CoreEditingCommands.DeleteLeft = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditingCommand {
        constructor() {
            super({
                id: 'deleteLeft',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 1 /* KeyCode.Backspace */,
                    secondary: [1024 /* KeyMod.Shift */ | 1 /* KeyCode.Backspace */],
                    mac: { primary: 1 /* KeyCode.Backspace */, secondary: [1024 /* KeyMod.Shift */ | 1 /* KeyCode.Backspace */, 256 /* KeyMod.WinCtrl */ | 38 /* KeyCode.KeyH */, 256 /* KeyMod.WinCtrl */ | 1 /* KeyCode.Backspace */] }
                }
            });
        }
        runCoreEditingCommand(editor, viewModel, args) {
            const [shouldPushStackElementBefore, commands] = _common_cursor_cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_7__/* .DeleteOperations */ .A.deleteLeft(viewModel.getPrevEditOperationType(), viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map(s => s.modelState.selection), viewModel.getCursorAutoClosedCharacters());
            if (shouldPushStackElementBefore) {
                editor.pushUndoStop();
            }
            editor.executeCommands(this.id, commands);
            viewModel.setPrevEditOperationType(2 /* EditOperationType.DeletingLeft */);
        }
    });
    CoreEditingCommands.DeleteRight = (0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerEditorCommand */ .fK)(new class extends CoreEditingCommand {
        constructor() {
            super({
                id: 'deleteRight',
                precondition: undefined,
                kbOpts: {
                    weight: CORE_WEIGHT,
                    kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorContextKeys */ .u.textInputFocus,
                    primary: 20 /* KeyCode.Delete */,
                    mac: { primary: 20 /* KeyCode.Delete */, secondary: [256 /* KeyMod.WinCtrl */ | 34 /* KeyCode.KeyD */, 256 /* KeyMod.WinCtrl */ | 20 /* KeyCode.Delete */] }
                }
            });
        }
        runCoreEditingCommand(editor, viewModel, args) {
            const [shouldPushStackElementBefore, commands] = _common_cursor_cursorDeleteOperations_js__WEBPACK_IMPORTED_MODULE_7__/* .DeleteOperations */ .A.deleteRight(viewModel.getPrevEditOperationType(), viewModel.cursorConfig, viewModel.model, viewModel.getCursorStates().map(s => s.modelState.selection));
            if (shouldPushStackElementBefore) {
                editor.pushUndoStop();
            }
            editor.executeCommands(this.id, commands);
            viewModel.setPrevEditOperationType(3 /* EditOperationType.DeletingRight */);
        }
    });
    CoreEditingCommands.Undo = new class extends EditorOrNativeTextInputCommand {
        constructor() {
            super(_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .UndoCommand */ .n_);
        }
        runDOMCommand() {
            document.execCommand('undo');
        }
        runEditorCommand(accessor, editor, args) {
            if (!editor.hasModel() || editor.getOption(88 /* EditorOption.readOnly */) === true) {
                return;
            }
            return editor.getModel().undo();
        }
    }();
    CoreEditingCommands.Redo = new class extends EditorOrNativeTextInputCommand {
        constructor() {
            super(_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .RedoCommand */ .kz);
        }
        runDOMCommand() {
            document.execCommand('redo');
        }
        runEditorCommand(accessor, editor, args) {
            if (!editor.hasModel() || editor.getOption(88 /* EditorOption.readOnly */) === true) {
                return;
            }
            return editor.getModel().redo();
        }
    }();
})(CoreEditingCommands || (CoreEditingCommands = {}));
/**
 * A command that will invoke a command on the focused editor.
 */
class EditorHandlerCommand extends _editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .Command */ .mY {
    constructor(id, handlerId, description) {
        super({
            id: id,
            precondition: undefined,
            description: description
        });
        this._handlerId = handlerId;
    }
    runCommand(accessor, args) {
        const editor = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_4__/* .ICodeEditorService */ .$).getFocusedCodeEditor();
        if (!editor) {
            return;
        }
        editor.trigger('keyboard', this._handlerId, args);
    }
}
function registerOverwritableCommand(handlerId, description) {
    registerCommand(new EditorHandlerCommand('default:' + handlerId, handlerId));
    registerCommand(new EditorHandlerCommand(handlerId, handlerId, description));
}
registerOverwritableCommand("type" /* Handler.Type */, {
    description: `Type`,
    args: [{
            name: 'args',
            schema: {
                'type': 'object',
                'required': ['text'],
                'properties': {
                    'text': {
                        'type': 'string'
                    }
                },
            }
        }]
});
registerOverwritableCommand("replacePreviousChar" /* Handler.ReplacePreviousChar */);
registerOverwritableCommand("compositionType" /* Handler.CompositionType */);
registerOverwritableCommand("compositionStart" /* Handler.CompositionStart */);
registerOverwritableCommand("compositionEnd" /* Handler.CompositionEnd */);
registerOverwritableCommand("paste" /* Handler.Paste */);
registerOverwritableCommand("cut" /* Handler.Cut */);


/***/ })

}]);