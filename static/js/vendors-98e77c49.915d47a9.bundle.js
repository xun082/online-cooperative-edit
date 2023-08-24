"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-98e77c49"],{

/***/ 51245:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: AbstractCaseAction, AbstractDeleteAllToBoundaryAction, AbstractSortLinesAction, CamelCaseAction, DeleteAllLeftAction, DeleteAllRightAction, DeleteDuplicateLinesAction, DeleteLinesAction, DuplicateSelectionAction, IndentLinesAction, InsertLineAfterAction, InsertLineBeforeAction, JoinLinesAction, KebabCaseAction, LowerCaseAction, SnakeCaseAction, SortLinesAscendingAction, SortLinesDescendingAction, TitleCaseAction, TransposeAction, TrimTrailingWhitespaceAction, UpperCaseAction

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js
var keyCodes = __webpack_require__(95286);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js
var coreCommands = __webpack_require__(50102);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand.js
var replaceCommand = __webpack_require__(46871);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/commands/trimTrailingWhitespaceCommand.js
var trimTrailingWhitespaceCommand = __webpack_require__(75322);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/cursor/cursorTypeOperations.js
var cursorTypeOperations = __webpack_require__(4478);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(54499);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var core_selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/copyLinesCommand.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class CopyLinesCommand {
    constructor(selection, isCopyingDown, noop) {
        this._selection = selection;
        this._isCopyingDown = isCopyingDown;
        this._noop = noop || false;
        this._selectionDirection = 0 /* SelectionDirection.LTR */;
        this._selectionId = null;
        this._startLineNumberDelta = 0;
        this._endLineNumberDelta = 0;
    }
    getEditOperations(model, builder) {
        let s = this._selection;
        this._startLineNumberDelta = 0;
        this._endLineNumberDelta = 0;
        if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
            this._endLineNumberDelta = 1;
            s = s.setEndPosition(s.endLineNumber - 1, model.getLineMaxColumn(s.endLineNumber - 1));
        }
        const sourceLines = [];
        for (let i = s.startLineNumber; i <= s.endLineNumber; i++) {
            sourceLines.push(model.getLineContent(i));
        }
        const sourceText = sourceLines.join('\n');
        if (sourceText === '') {
            // Duplicating empty line
            if (this._isCopyingDown) {
                this._startLineNumberDelta++;
                this._endLineNumberDelta++;
            }
        }
        if (this._noop) {
            builder.addEditOperation(new core_range/* Range */.e(s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber + 1, 1), s.endLineNumber === model.getLineCount() ? '' : '\n');
        }
        else {
            if (!this._isCopyingDown) {
                builder.addEditOperation(new core_range/* Range */.e(s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber, model.getLineMaxColumn(s.endLineNumber)), '\n' + sourceText);
            }
            else {
                builder.addEditOperation(new core_range/* Range */.e(s.startLineNumber, 1, s.startLineNumber, 1), sourceText + '\n');
            }
        }
        this._selectionId = builder.trackSelection(s);
        this._selectionDirection = this._selection.getDirection();
    }
    computeCursorState(model, helper) {
        let result = helper.getTrackedSelection(this._selectionId);
        if (this._startLineNumberDelta !== 0 || this._endLineNumberDelta !== 0) {
            let startLineNumber = result.startLineNumber;
            let startColumn = result.startColumn;
            let endLineNumber = result.endLineNumber;
            let endColumn = result.endColumn;
            if (this._startLineNumberDelta !== 0) {
                startLineNumber = startLineNumber + this._startLineNumberDelta;
                startColumn = 1;
            }
            if (this._endLineNumberDelta !== 0) {
                endLineNumber = endLineNumber + this._endLineNumberDelta;
                endColumn = 1;
            }
            result = core_selection/* Selection */.Y.createWithDirection(startLineNumber, startColumn, endLineNumber, endColumn, this._selectionDirection);
        }
        return result;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/commands/shiftCommand.js
var shiftCommand = __webpack_require__(69239);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfiguration.js
var languageConfiguration = __webpack_require__(4275);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js + 5 modules
var languageConfigurationRegistry = __webpack_require__(30766);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentUtils.js
var indentUtils = __webpack_require__(6244);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/autoIndent.js
var autoIndent = __webpack_require__(47302);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/enterAction.js
var enterAction = __webpack_require__(9635);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/moveLinesCommand.js
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









let MoveLinesCommand = class MoveLinesCommand {
    constructor(selection, isMovingDown, autoIndent, _languageConfigurationService) {
        this._languageConfigurationService = _languageConfigurationService;
        this._selection = selection;
        this._isMovingDown = isMovingDown;
        this._autoIndent = autoIndent;
        this._selectionId = null;
        this._moveEndLineSelectionShrink = false;
    }
    getEditOperations(model, builder) {
        const modelLineCount = model.getLineCount();
        if (this._isMovingDown && this._selection.endLineNumber === modelLineCount) {
            this._selectionId = builder.trackSelection(this._selection);
            return;
        }
        if (!this._isMovingDown && this._selection.startLineNumber === 1) {
            this._selectionId = builder.trackSelection(this._selection);
            return;
        }
        this._moveEndPositionDown = false;
        let s = this._selection;
        if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
            this._moveEndPositionDown = true;
            s = s.setEndPosition(s.endLineNumber - 1, model.getLineMaxColumn(s.endLineNumber - 1));
        }
        const { tabSize, indentSize, insertSpaces } = model.getOptions();
        const indentConverter = this.buildIndentConverter(tabSize, indentSize, insertSpaces);
        const virtualModel = {
            tokenization: {
                getLineTokens: (lineNumber) => {
                    return model.tokenization.getLineTokens(lineNumber);
                },
                getLanguageId: () => {
                    return model.getLanguageId();
                },
                getLanguageIdAtPosition: (lineNumber, column) => {
                    return model.getLanguageIdAtPosition(lineNumber, column);
                },
            },
            getLineContent: null,
        };
        if (s.startLineNumber === s.endLineNumber && model.getLineMaxColumn(s.startLineNumber) === 1) {
            // Current line is empty
            const lineNumber = s.startLineNumber;
            const otherLineNumber = (this._isMovingDown ? lineNumber + 1 : lineNumber - 1);
            if (model.getLineMaxColumn(otherLineNumber) === 1) {
                // Other line number is empty too, so no editing is needed
                // Add a no-op to force running by the model
                builder.addEditOperation(new core_range/* Range */.e(1, 1, 1, 1), null);
            }
            else {
                // Type content from other line number on line number
                builder.addEditOperation(new core_range/* Range */.e(lineNumber, 1, lineNumber, 1), model.getLineContent(otherLineNumber));
                // Remove content from other line number
                builder.addEditOperation(new core_range/* Range */.e(otherLineNumber, 1, otherLineNumber, model.getLineMaxColumn(otherLineNumber)), null);
            }
            // Track selection at the other line number
            s = new core_selection/* Selection */.Y(otherLineNumber, 1, otherLineNumber, 1);
        }
        else {
            let movingLineNumber;
            let movingLineText;
            if (this._isMovingDown) {
                movingLineNumber = s.endLineNumber + 1;
                movingLineText = model.getLineContent(movingLineNumber);
                // Delete line that needs to be moved
                builder.addEditOperation(new core_range/* Range */.e(movingLineNumber - 1, model.getLineMaxColumn(movingLineNumber - 1), movingLineNumber, model.getLineMaxColumn(movingLineNumber)), null);
                let insertingText = movingLineText;
                if (this.shouldAutoIndent(model, s)) {
                    const movingLineMatchResult = this.matchEnterRule(model, indentConverter, tabSize, movingLineNumber, s.startLineNumber - 1);
                    // if s.startLineNumber - 1 matches onEnter rule, we still honor that.
                    if (movingLineMatchResult !== null) {
                        const oldIndentation = strings/* getLeadingWhitespace */.V8(model.getLineContent(movingLineNumber));
                        const newSpaceCnt = movingLineMatchResult + indentUtils/* getSpaceCnt */.Y(oldIndentation, tabSize);
                        const newIndentation = indentUtils/* generateIndent */.J(newSpaceCnt, tabSize, insertSpaces);
                        insertingText = newIndentation + this.trimLeft(movingLineText);
                    }
                    else {
                        // no enter rule matches, let's check indentatin rules then.
                        virtualModel.getLineContent = (lineNumber) => {
                            if (lineNumber === s.startLineNumber) {
                                return model.getLineContent(movingLineNumber);
                            }
                            else {
                                return model.getLineContent(lineNumber);
                            }
                        };
                        const indentOfMovingLine = (0,autoIndent/* getGoodIndentForLine */.n8)(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(movingLineNumber, 1), s.startLineNumber, indentConverter, this._languageConfigurationService);
                        if (indentOfMovingLine !== null) {
                            const oldIndentation = strings/* getLeadingWhitespace */.V8(model.getLineContent(movingLineNumber));
                            const newSpaceCnt = indentUtils/* getSpaceCnt */.Y(indentOfMovingLine, tabSize);
                            const oldSpaceCnt = indentUtils/* getSpaceCnt */.Y(oldIndentation, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const newIndentation = indentUtils/* generateIndent */.J(newSpaceCnt, tabSize, insertSpaces);
                                insertingText = newIndentation + this.trimLeft(movingLineText);
                            }
                        }
                    }
                    // add edit operations for moving line first to make sure it's executed after we make indentation change
                    // to s.startLineNumber
                    builder.addEditOperation(new core_range/* Range */.e(s.startLineNumber, 1, s.startLineNumber, 1), insertingText + '\n');
                    const ret = this.matchEnterRuleMovingDown(model, indentConverter, tabSize, s.startLineNumber, movingLineNumber, insertingText);
                    // check if the line being moved before matches onEnter rules, if so let's adjust the indentation by onEnter rules.
                    if (ret !== null) {
                        if (ret !== 0) {
                            this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, ret);
                        }
                    }
                    else {
                        // it doesn't match onEnter rules, let's check indentation rules then.
                        virtualModel.getLineContent = (lineNumber) => {
                            if (lineNumber === s.startLineNumber) {
                                return insertingText;
                            }
                            else if (lineNumber >= s.startLineNumber + 1 && lineNumber <= s.endLineNumber + 1) {
                                return model.getLineContent(lineNumber - 1);
                            }
                            else {
                                return model.getLineContent(lineNumber);
                            }
                        };
                        const newIndentatOfMovingBlock = (0,autoIndent/* getGoodIndentForLine */.n8)(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(movingLineNumber, 1), s.startLineNumber + 1, indentConverter, this._languageConfigurationService);
                        if (newIndentatOfMovingBlock !== null) {
                            const oldIndentation = strings/* getLeadingWhitespace */.V8(model.getLineContent(s.startLineNumber));
                            const newSpaceCnt = indentUtils/* getSpaceCnt */.Y(newIndentatOfMovingBlock, tabSize);
                            const oldSpaceCnt = indentUtils/* getSpaceCnt */.Y(oldIndentation, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const spaceCntOffset = newSpaceCnt - oldSpaceCnt;
                                this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, spaceCntOffset);
                            }
                        }
                    }
                }
                else {
                    // Insert line that needs to be moved before
                    builder.addEditOperation(new core_range/* Range */.e(s.startLineNumber, 1, s.startLineNumber, 1), insertingText + '\n');
                }
            }
            else {
                movingLineNumber = s.startLineNumber - 1;
                movingLineText = model.getLineContent(movingLineNumber);
                // Delete line that needs to be moved
                builder.addEditOperation(new core_range/* Range */.e(movingLineNumber, 1, movingLineNumber + 1, 1), null);
                // Insert line that needs to be moved after
                builder.addEditOperation(new core_range/* Range */.e(s.endLineNumber, model.getLineMaxColumn(s.endLineNumber), s.endLineNumber, model.getLineMaxColumn(s.endLineNumber)), '\n' + movingLineText);
                if (this.shouldAutoIndent(model, s)) {
                    virtualModel.getLineContent = (lineNumber) => {
                        if (lineNumber === movingLineNumber) {
                            return model.getLineContent(s.startLineNumber);
                        }
                        else {
                            return model.getLineContent(lineNumber);
                        }
                    };
                    const ret = this.matchEnterRule(model, indentConverter, tabSize, s.startLineNumber, s.startLineNumber - 2);
                    // check if s.startLineNumber - 2 matches onEnter rules, if so adjust the moving block by onEnter rules.
                    if (ret !== null) {
                        if (ret !== 0) {
                            this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, ret);
                        }
                    }
                    else {
                        // it doesn't match any onEnter rule, let's check indentation rules then.
                        const indentOfFirstLine = (0,autoIndent/* getGoodIndentForLine */.n8)(this._autoIndent, virtualModel, model.getLanguageIdAtPosition(s.startLineNumber, 1), movingLineNumber, indentConverter, this._languageConfigurationService);
                        if (indentOfFirstLine !== null) {
                            // adjust the indentation of the moving block
                            const oldIndent = strings/* getLeadingWhitespace */.V8(model.getLineContent(s.startLineNumber));
                            const newSpaceCnt = indentUtils/* getSpaceCnt */.Y(indentOfFirstLine, tabSize);
                            const oldSpaceCnt = indentUtils/* getSpaceCnt */.Y(oldIndent, tabSize);
                            if (newSpaceCnt !== oldSpaceCnt) {
                                const spaceCntOffset = newSpaceCnt - oldSpaceCnt;
                                this.getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, spaceCntOffset);
                            }
                        }
                    }
                }
            }
        }
        this._selectionId = builder.trackSelection(s);
    }
    buildIndentConverter(tabSize, indentSize, insertSpaces) {
        return {
            shiftIndent: (indentation) => {
                return shiftCommand/* ShiftCommand */.U.shiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            },
            unshiftIndent: (indentation) => {
                return shiftCommand/* ShiftCommand */.U.unshiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            }
        };
    }
    parseEnterResult(model, indentConverter, tabSize, line, enter) {
        if (enter) {
            let enterPrefix = enter.indentation;
            if (enter.indentAction === languageConfiguration/* IndentAction */.wU.None) {
                enterPrefix = enter.indentation + enter.appendText;
            }
            else if (enter.indentAction === languageConfiguration/* IndentAction */.wU.Indent) {
                enterPrefix = enter.indentation + enter.appendText;
            }
            else if (enter.indentAction === languageConfiguration/* IndentAction */.wU.IndentOutdent) {
                enterPrefix = enter.indentation;
            }
            else if (enter.indentAction === languageConfiguration/* IndentAction */.wU.Outdent) {
                enterPrefix = indentConverter.unshiftIndent(enter.indentation) + enter.appendText;
            }
            const movingLineText = model.getLineContent(line);
            if (this.trimLeft(movingLineText).indexOf(this.trimLeft(enterPrefix)) >= 0) {
                const oldIndentation = strings/* getLeadingWhitespace */.V8(model.getLineContent(line));
                let newIndentation = strings/* getLeadingWhitespace */.V8(enterPrefix);
                const indentMetadataOfMovelingLine = (0,autoIndent/* getIndentMetadata */.tI)(model, line, this._languageConfigurationService);
                if (indentMetadataOfMovelingLine !== null && indentMetadataOfMovelingLine & 2 /* IndentConsts.DECREASE_MASK */) {
                    newIndentation = indentConverter.unshiftIndent(newIndentation);
                }
                const newSpaceCnt = indentUtils/* getSpaceCnt */.Y(newIndentation, tabSize);
                const oldSpaceCnt = indentUtils/* getSpaceCnt */.Y(oldIndentation, tabSize);
                return newSpaceCnt - oldSpaceCnt;
            }
        }
        return null;
    }
    /**
     *
     * @param model
     * @param indentConverter
     * @param tabSize
     * @param line the line moving down
     * @param futureAboveLineNumber the line which will be at the `line` position
     * @param futureAboveLineText
     */
    matchEnterRuleMovingDown(model, indentConverter, tabSize, line, futureAboveLineNumber, futureAboveLineText) {
        if (strings/* lastNonWhitespaceIndex */.ow(futureAboveLineText) >= 0) {
            // break
            const maxColumn = model.getLineMaxColumn(futureAboveLineNumber);
            const enter = (0,enterAction/* getEnterAction */.A)(this._autoIndent, model, new core_range/* Range */.e(futureAboveLineNumber, maxColumn, futureAboveLineNumber, maxColumn), this._languageConfigurationService);
            return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
        }
        else {
            // go upwards, starting from `line - 1`
            let validPrecedingLine = line - 1;
            while (validPrecedingLine >= 1) {
                const lineContent = model.getLineContent(validPrecedingLine);
                const nonWhitespaceIdx = strings/* lastNonWhitespaceIndex */.ow(lineContent);
                if (nonWhitespaceIdx >= 0) {
                    break;
                }
                validPrecedingLine--;
            }
            if (validPrecedingLine < 1 || line > model.getLineCount()) {
                return null;
            }
            const maxColumn = model.getLineMaxColumn(validPrecedingLine);
            const enter = (0,enterAction/* getEnterAction */.A)(this._autoIndent, model, new core_range/* Range */.e(validPrecedingLine, maxColumn, validPrecedingLine, maxColumn), this._languageConfigurationService);
            return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
        }
    }
    matchEnterRule(model, indentConverter, tabSize, line, oneLineAbove, previousLineText) {
        let validPrecedingLine = oneLineAbove;
        while (validPrecedingLine >= 1) {
            // ship empty lines as empty lines just inherit indentation
            let lineContent;
            if (validPrecedingLine === oneLineAbove && previousLineText !== undefined) {
                lineContent = previousLineText;
            }
            else {
                lineContent = model.getLineContent(validPrecedingLine);
            }
            const nonWhitespaceIdx = strings/* lastNonWhitespaceIndex */.ow(lineContent);
            if (nonWhitespaceIdx >= 0) {
                break;
            }
            validPrecedingLine--;
        }
        if (validPrecedingLine < 1 || line > model.getLineCount()) {
            return null;
        }
        const maxColumn = model.getLineMaxColumn(validPrecedingLine);
        const enter = (0,enterAction/* getEnterAction */.A)(this._autoIndent, model, new core_range/* Range */.e(validPrecedingLine, maxColumn, validPrecedingLine, maxColumn), this._languageConfigurationService);
        return this.parseEnterResult(model, indentConverter, tabSize, line, enter);
    }
    trimLeft(str) {
        return str.replace(/^\s+/, '');
    }
    shouldAutoIndent(model, selection) {
        if (this._autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
            return false;
        }
        // if it's not easy to tokenize, we stop auto indent.
        if (!model.tokenization.isCheapToTokenize(selection.startLineNumber)) {
            return false;
        }
        const languageAtSelectionStart = model.getLanguageIdAtPosition(selection.startLineNumber, 1);
        const languageAtSelectionEnd = model.getLanguageIdAtPosition(selection.endLineNumber, 1);
        if (languageAtSelectionStart !== languageAtSelectionEnd) {
            return false;
        }
        if (this._languageConfigurationService.getLanguageConfiguration(languageAtSelectionStart).indentRulesSupport === null) {
            return false;
        }
        return true;
    }
    getIndentEditsOfMovingBlock(model, builder, s, tabSize, insertSpaces, offset) {
        for (let i = s.startLineNumber; i <= s.endLineNumber; i++) {
            const lineContent = model.getLineContent(i);
            const originalIndent = strings/* getLeadingWhitespace */.V8(lineContent);
            const originalSpacesCnt = indentUtils/* getSpaceCnt */.Y(originalIndent, tabSize);
            const newSpacesCnt = originalSpacesCnt + offset;
            const newIndent = indentUtils/* generateIndent */.J(newSpacesCnt, tabSize, insertSpaces);
            if (newIndent !== originalIndent) {
                builder.addEditOperation(new core_range/* Range */.e(i, 1, i, originalIndent.length + 1), newIndent);
                if (i === s.endLineNumber && s.endColumn <= originalIndent.length + 1 && newIndent === '') {
                    // as users select part of the original indent white spaces
                    // when we adjust the indentation of endLine, we should adjust the cursor position as well.
                    this._moveEndLineSelectionShrink = true;
                }
            }
        }
    }
    computeCursorState(model, helper) {
        let result = helper.getTrackedSelection(this._selectionId);
        if (this._moveEndPositionDown) {
            result = result.setEndPosition(result.endLineNumber + 1, 1);
        }
        if (this._moveEndLineSelectionShrink && result.startLineNumber < result.endLineNumber) {
            result = result.setEndPosition(result.endLineNumber, 2);
        }
        return result;
    }
};
MoveLinesCommand = __decorate([
    __param(3, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], MoveLinesCommand);


;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/sortLinesCommand.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class SortLinesCommand {
    static getCollator() {
        if (!SortLinesCommand._COLLATOR) {
            SortLinesCommand._COLLATOR = new Intl.Collator();
        }
        return SortLinesCommand._COLLATOR;
    }
    constructor(selection, descending) {
        this.selection = selection;
        this.descending = descending;
        this.selectionId = null;
    }
    getEditOperations(model, builder) {
        const op = sortLines(model, this.selection, this.descending);
        if (op) {
            builder.addEditOperation(op.range, op.text);
        }
        this.selectionId = builder.trackSelection(this.selection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this.selectionId);
    }
    static canRun(model, selection, descending) {
        if (model === null) {
            return false;
        }
        const data = getSortData(model, selection, descending);
        if (!data) {
            return false;
        }
        for (let i = 0, len = data.before.length; i < len; i++) {
            if (data.before[i] !== data.after[i]) {
                return true;
            }
        }
        return false;
    }
}
SortLinesCommand._COLLATOR = null;
function getSortData(model, selection, descending) {
    const startLineNumber = selection.startLineNumber;
    let endLineNumber = selection.endLineNumber;
    if (selection.endColumn === 1) {
        endLineNumber--;
    }
    // Nothing to sort if user didn't select anything.
    if (startLineNumber >= endLineNumber) {
        return null;
    }
    const linesToSort = [];
    // Get the contents of the selection to be sorted.
    for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
        linesToSort.push(model.getLineContent(lineNumber));
    }
    let sorted = linesToSort.slice(0);
    sorted.sort(SortLinesCommand.getCollator().compare);
    // If descending, reverse the order.
    if (descending === true) {
        sorted = sorted.reverse();
    }
    return {
        startLineNumber: startLineNumber,
        endLineNumber: endLineNumber,
        before: linesToSort,
        after: sorted
    };
}
/**
 * Generate commands for sorting lines on a model.
 */
function sortLines(model, selection, descending) {
    const data = getSortData(model, selection, descending);
    if (!data) {
        return null;
    }
    return editOperation/* EditOperation */.h.replace(new core_range/* Range */.e(data.startLineNumber, 1, data.endLineNumber, model.getLineMaxColumn(data.endLineNumber)), data.after.join('\n'));
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(47619);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

















// copy lines
class AbstractCopyLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor(down, opts) {
        super(opts);
        this.down = down;
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections().map((selection, index) => ({ selection, index, ignore: false }));
        selections.sort((a, b) => core_range/* Range */.e.compareRangesUsingStarts(a.selection, b.selection));
        // Remove selections that would result in copying the same line
        let prev = selections[0];
        for (let i = 1; i < selections.length; i++) {
            const curr = selections[i];
            if (prev.selection.endLineNumber === curr.selection.startLineNumber) {
                // these two selections would copy the same line
                if (prev.index < curr.index) {
                    // prev wins
                    curr.ignore = true;
                }
                else {
                    // curr wins
                    prev.ignore = true;
                    prev = curr;
                }
            }
        }
        const commands = [];
        for (const selection of selections) {
            commands.push(new CopyLinesCommand(selection.selection, this.down, selection.ignore));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class CopyLinesUpAction extends AbstractCopyLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.copyLinesUpAction',
            label: nls/* localize */.NC('lines.copyUp', "Copy Line Up"),
            alias: 'Copy Line Up',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 16 /* KeyCode.UpArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '2_line',
                title: nls/* localize */.NC({ key: 'miCopyLinesUp', comment: ['&& denotes a mnemonic'] }, "&&Copy Line Up"),
                order: 1
            }
        });
    }
}
class CopyLinesDownAction extends AbstractCopyLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.copyLinesDownAction',
            label: nls/* localize */.NC('lines.copyDown', "Copy Line Down"),
            alias: 'Copy Line Down',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 1024 /* KeyMod.Shift */ | 18 /* KeyCode.DownArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '2_line',
                title: nls/* localize */.NC({ key: 'miCopyLinesDown', comment: ['&& denotes a mnemonic'] }, "Co&&py Line Down"),
                order: 2
            }
        });
    }
}
class DuplicateSelectionAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.duplicateSelection',
            label: nls/* localize */.NC('duplicateSelection', "Duplicate Selection"),
            alias: 'Duplicate Selection',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '2_line',
                title: nls/* localize */.NC({ key: 'miDuplicateSelection', comment: ['&& denotes a mnemonic'] }, "&&Duplicate Selection"),
                order: 5
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const commands = [];
        const selections = editor.getSelections();
        const model = editor.getModel();
        for (const selection of selections) {
            if (selection.isEmpty()) {
                commands.push(new CopyLinesCommand(selection, true));
            }
            else {
                const insertSelection = new core_selection/* Selection */.Y(selection.endLineNumber, selection.endColumn, selection.endLineNumber, selection.endColumn);
                commands.push(new replaceCommand/* ReplaceCommandThatSelectsText */.OY(insertSelection, model.getValueInRange(selection)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
// move lines
class AbstractMoveLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor(down, opts) {
        super(opts);
        this.down = down;
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(languageConfigurationRegistry/* ILanguageConfigurationService */.c_);
        const commands = [];
        const selections = editor.getSelections() || [];
        const autoIndent = editor.getOption(11 /* EditorOption.autoIndent */);
        for (const selection of selections) {
            commands.push(new MoveLinesCommand(selection, this.down, autoIndent, languageConfigurationService));
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class MoveLinesUpAction extends AbstractMoveLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.moveLinesUpAction',
            label: nls/* localize */.NC('lines.moveUp', "Move Line Up"),
            alias: 'Move Line Up',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */,
                linux: { primary: 512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '2_line',
                title: nls/* localize */.NC({ key: 'miMoveLinesUp', comment: ['&& denotes a mnemonic'] }, "Mo&&ve Line Up"),
                order: 3
            }
        });
    }
}
class MoveLinesDownAction extends AbstractMoveLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.moveLinesDownAction',
            label: nls/* localize */.NC('lines.moveDown', "Move Line Down"),
            alias: 'Move Line Down',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */,
                linux: { primary: 512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '2_line',
                title: nls/* localize */.NC({ key: 'miMoveLinesDown', comment: ['&& denotes a mnemonic'] }, "Move &&Line Down"),
                order: 4
            }
        });
    }
}
class AbstractSortLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor(descending, opts) {
        super(opts);
        this.descending = descending;
    }
    run(_accessor, editor) {
        const selections = editor.getSelections() || [];
        for (const selection of selections) {
            if (!SortLinesCommand.canRun(editor.getModel(), selection, this.descending)) {
                return;
            }
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            commands[i] = new SortLinesCommand(selections[i], this.descending);
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class SortLinesAscendingAction extends AbstractSortLinesAction {
    constructor() {
        super(false, {
            id: 'editor.action.sortLinesAscending',
            label: nls/* localize */.NC('lines.sortAscending', "Sort Lines Ascending"),
            alias: 'Sort Lines Ascending',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
}
class SortLinesDescendingAction extends AbstractSortLinesAction {
    constructor() {
        super(true, {
            id: 'editor.action.sortLinesDescending',
            label: nls/* localize */.NC('lines.sortDescending', "Sort Lines Descending"),
            alias: 'Sort Lines Descending',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
}
class DeleteDuplicateLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.removeDuplicateLines',
            label: nls/* localize */.NC('lines.deleteDuplicates', "Delete Duplicate Lines"),
            alias: 'Delete Duplicate Lines',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let linesDeleted = 0;
        for (const selection of editor.getSelections()) {
            const uniqueLines = new Set();
            const lines = [];
            for (let i = selection.startLineNumber; i <= selection.endLineNumber; i++) {
                const line = model.getLineContent(i);
                if (uniqueLines.has(line)) {
                    continue;
                }
                lines.push(line);
                uniqueLines.add(line);
            }
            const selectionToReplace = new core_selection/* Selection */.Y(selection.startLineNumber, 1, selection.endLineNumber, model.getLineMaxColumn(selection.endLineNumber));
            const adjustedSelectionStart = selection.startLineNumber - linesDeleted;
            const finalSelection = new core_selection/* Selection */.Y(adjustedSelectionStart, 1, adjustedSelectionStart + lines.length - 1, lines[lines.length - 1].length);
            edits.push(editOperation/* EditOperation */.h.replace(selectionToReplace, lines.join('\n')));
            endCursorState.push(finalSelection);
            linesDeleted += (selection.endLineNumber - selection.startLineNumber + 1) - lines.length;
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class TrimTrailingWhitespaceAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: TrimTrailingWhitespaceAction.ID,
            label: nls/* localize */.NC('lines.trimTrailingWhitespace', "Trim Trailing Whitespace"),
            alias: 'Trim Trailing Whitespace',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 54 /* KeyCode.KeyX */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor, args) {
        let cursors = [];
        if (args.reason === 'auto-save') {
            // See https://github.com/editorconfig/editorconfig-vscode/issues/47
            // It is very convenient for the editor config extension to invoke this action.
            // So, if we get a reason:'auto-save' passed in, let's preserve cursor positions.
            cursors = (editor.getSelections() || []).map(s => new position/* Position */.L(s.positionLineNumber, s.positionColumn));
        }
        const selection = editor.getSelection();
        if (selection === null) {
            return;
        }
        const command = new trimTrailingWhitespaceCommand/* TrimTrailingWhitespaceCommand */.V(selection, cursors);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [command]);
        editor.pushUndoStop();
    }
}
TrimTrailingWhitespaceAction.ID = 'editor.action.trimTrailingWhitespace';
class DeleteLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.deleteLines',
            label: nls/* localize */.NC('lines.delete', "Delete Line"),
            alias: 'Delete Line',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 41 /* KeyCode.KeyK */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const ops = this._getLinesToRemove(editor);
        const model = editor.getModel();
        if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
            // Model is empty
            return;
        }
        let linesDeleted = 0;
        const edits = [];
        const cursorState = [];
        for (let i = 0, len = ops.length; i < len; i++) {
            const op = ops[i];
            let startLineNumber = op.startLineNumber;
            let endLineNumber = op.endLineNumber;
            let startColumn = 1;
            let endColumn = model.getLineMaxColumn(endLineNumber);
            if (endLineNumber < model.getLineCount()) {
                endLineNumber += 1;
                endColumn = 1;
            }
            else if (startLineNumber > 1) {
                startLineNumber -= 1;
                startColumn = model.getLineMaxColumn(startLineNumber);
            }
            edits.push(editOperation/* EditOperation */.h.replace(new core_selection/* Selection */.Y(startLineNumber, startColumn, endLineNumber, endColumn), ''));
            cursorState.push(new core_selection/* Selection */.Y(startLineNumber - linesDeleted, op.positionColumn, startLineNumber - linesDeleted, op.positionColumn));
            linesDeleted += (op.endLineNumber - op.startLineNumber + 1);
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, cursorState);
        editor.pushUndoStop();
    }
    _getLinesToRemove(editor) {
        // Construct delete operations
        const operations = editor.getSelections().map((s) => {
            let endLineNumber = s.endLineNumber;
            if (s.startLineNumber < s.endLineNumber && s.endColumn === 1) {
                endLineNumber -= 1;
            }
            return {
                startLineNumber: s.startLineNumber,
                selectionStartColumn: s.selectionStartColumn,
                endLineNumber: endLineNumber,
                positionColumn: s.positionColumn
            };
        });
        // Sort delete operations
        operations.sort((a, b) => {
            if (a.startLineNumber === b.startLineNumber) {
                return a.endLineNumber - b.endLineNumber;
            }
            return a.startLineNumber - b.startLineNumber;
        });
        // Merge delete operations which are adjacent or overlapping
        const mergedOperations = [];
        let previousOperation = operations[0];
        for (let i = 1; i < operations.length; i++) {
            if (previousOperation.endLineNumber + 1 >= operations[i].startLineNumber) {
                // Merge current operations into the previous one
                previousOperation.endLineNumber = operations[i].endLineNumber;
            }
            else {
                // Push previous operation
                mergedOperations.push(previousOperation);
                previousOperation = operations[i];
            }
        }
        // Push the last operation
        mergedOperations.push(previousOperation);
        return mergedOperations;
    }
}
class IndentLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.indentLines',
            label: nls/* localize */.NC('lines.indent', "Indent Line"),
            alias: 'Indent Line',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 94 /* KeyCode.BracketRight */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, cursorTypeOperations/* TypeOperations */.u6.indent(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
        editor.pushUndoStop();
    }
}
class OutdentLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.outdentLines',
            label: nls/* localize */.NC('lines.outdent', "Outdent Line"),
            alias: 'Outdent Line',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 92 /* KeyCode.BracketLeft */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        coreCommands/* CoreEditingCommands */.wk.Outdent.runEditorCommand(_accessor, editor, null);
    }
}
class InsertLineBeforeAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.insertLineBefore',
            label: nls/* localize */.NC('lines.insertBefore', "Insert Line Above"),
            alias: 'Insert Line Above',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 3 /* KeyCode.Enter */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, cursorTypeOperations/* TypeOperations */.u6.lineInsertBefore(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class InsertLineAfterAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.insertLineAfter',
            label: nls/* localize */.NC('lines.insertAfter', "Insert Line Below"),
            alias: 'Insert Line Below',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 3 /* KeyCode.Enter */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        const viewModel = editor._getViewModel();
        if (!viewModel) {
            return;
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, cursorTypeOperations/* TypeOperations */.u6.lineInsertAfter(viewModel.cursorConfig, editor.getModel(), editor.getSelections()));
    }
}
class AbstractDeleteAllToBoundaryAction extends editorExtensions/* EditorAction */.R6 {
    run(_accessor, editor) {
        if (!editor.hasModel()) {
            return;
        }
        const primaryCursor = editor.getSelection();
        const rangesToDelete = this._getRangesToDelete(editor);
        // merge overlapping selections
        const effectiveRanges = [];
        for (let i = 0, count = rangesToDelete.length - 1; i < count; i++) {
            const range = rangesToDelete[i];
            const nextRange = rangesToDelete[i + 1];
            if (core_range/* Range */.e.intersectRanges(range, nextRange) === null) {
                effectiveRanges.push(range);
            }
            else {
                rangesToDelete[i + 1] = core_range/* Range */.e.plusRange(range, nextRange);
            }
        }
        effectiveRanges.push(rangesToDelete[rangesToDelete.length - 1]);
        const endCursorState = this._getEndCursorState(primaryCursor, effectiveRanges);
        const edits = effectiveRanges.map(range => {
            return editOperation/* EditOperation */.h.replace(range, '');
        });
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class DeleteAllLeftAction extends AbstractDeleteAllToBoundaryAction {
    constructor() {
        super({
            id: 'deleteAllLeft',
            label: nls/* localize */.NC('lines.deleteAllLeft', "Delete All Left"),
            alias: 'Delete All Left',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 0,
                mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1 /* KeyCode.Backspace */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        let deletedLines = 0;
        rangesToDelete.forEach(range => {
            let endCursor;
            if (range.endColumn === 1 && deletedLines > 0) {
                const newStartLine = range.startLineNumber - deletedLines;
                endCursor = new core_selection/* Selection */.Y(newStartLine, range.startColumn, newStartLine, range.startColumn);
            }
            else {
                endCursor = new core_selection/* Selection */.Y(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
            }
            deletedLines += range.endLineNumber - range.startLineNumber;
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            }
            else {
                endCursorState.push(endCursor);
            }
        });
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        let rangesToDelete = selections;
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        rangesToDelete.sort(core_range/* Range */.e.compareRangesUsingStarts);
        rangesToDelete = rangesToDelete.map(selection => {
            if (selection.isEmpty()) {
                if (selection.startColumn === 1) {
                    const deleteFromLine = Math.max(1, selection.startLineNumber - 1);
                    const deleteFromColumn = selection.startLineNumber === 1 ? 1 : model.getLineContent(deleteFromLine).length + 1;
                    return new core_range/* Range */.e(deleteFromLine, deleteFromColumn, selection.startLineNumber, 1);
                }
                else {
                    return new core_range/* Range */.e(selection.startLineNumber, 1, selection.startLineNumber, selection.startColumn);
                }
            }
            else {
                return new core_range/* Range */.e(selection.startLineNumber, 1, selection.endLineNumber, selection.endColumn);
            }
        });
        return rangesToDelete;
    }
}
class DeleteAllRightAction extends AbstractDeleteAllToBoundaryAction {
    constructor() {
        super({
            id: 'deleteAllRight',
            label: nls/* localize */.NC('lines.deleteAllRight', "Delete All Right"),
            alias: 'Delete All Right',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.textInputFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 41 /* KeyCode.KeyK */, secondary: [2048 /* KeyMod.CtrlCmd */ | 20 /* KeyCode.Delete */] },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _getEndCursorState(primaryCursor, rangesToDelete) {
        let endPrimaryCursor = null;
        const endCursorState = [];
        for (let i = 0, len = rangesToDelete.length, offset = 0; i < len; i++) {
            const range = rangesToDelete[i];
            const endCursor = new core_selection/* Selection */.Y(range.startLineNumber - offset, range.startColumn, range.startLineNumber - offset, range.startColumn);
            if (range.intersectRanges(primaryCursor)) {
                endPrimaryCursor = endCursor;
            }
            else {
                endCursorState.push(endCursor);
            }
        }
        if (endPrimaryCursor) {
            endCursorState.unshift(endPrimaryCursor);
        }
        return endCursorState;
    }
    _getRangesToDelete(editor) {
        const model = editor.getModel();
        if (model === null) {
            return [];
        }
        const selections = editor.getSelections();
        if (selections === null) {
            return [];
        }
        const rangesToDelete = selections.map((sel) => {
            if (sel.isEmpty()) {
                const maxColumn = model.getLineMaxColumn(sel.startLineNumber);
                if (sel.startColumn === maxColumn) {
                    return new core_range/* Range */.e(sel.startLineNumber, sel.startColumn, sel.startLineNumber + 1, 1);
                }
                else {
                    return new core_range/* Range */.e(sel.startLineNumber, sel.startColumn, sel.startLineNumber, maxColumn);
                }
            }
            return sel;
        });
        rangesToDelete.sort(core_range/* Range */.e.compareRangesUsingStarts);
        return rangesToDelete;
    }
}
class JoinLinesAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.joinLines',
            label: nls/* localize */.NC('lines.joinLines', "Join Lines"),
            alias: 'Join Lines',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 0,
                mac: { primary: 256 /* KeyMod.WinCtrl */ | 40 /* KeyCode.KeyJ */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        let primaryCursor = editor.getSelection();
        if (primaryCursor === null) {
            return;
        }
        selections.sort(core_range/* Range */.e.compareRangesUsingStarts);
        const reducedSelections = [];
        const lastSelection = selections.reduce((previousValue, currentValue) => {
            if (previousValue.isEmpty()) {
                if (previousValue.endLineNumber === currentValue.startLineNumber) {
                    if (primaryCursor.equalsSelection(previousValue)) {
                        primaryCursor = currentValue;
                    }
                    return currentValue;
                }
                if (currentValue.startLineNumber > previousValue.endLineNumber + 1) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                }
                else {
                    return new core_selection/* Selection */.Y(previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            }
            else {
                if (currentValue.startLineNumber > previousValue.endLineNumber) {
                    reducedSelections.push(previousValue);
                    return currentValue;
                }
                else {
                    return new core_selection/* Selection */.Y(previousValue.startLineNumber, previousValue.startColumn, currentValue.endLineNumber, currentValue.endColumn);
                }
            }
        });
        reducedSelections.push(lastSelection);
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const edits = [];
        const endCursorState = [];
        let endPrimaryCursor = primaryCursor;
        let lineOffset = 0;
        for (let i = 0, len = reducedSelections.length; i < len; i++) {
            const selection = reducedSelections[i];
            const startLineNumber = selection.startLineNumber;
            const startColumn = 1;
            let columnDeltaOffset = 0;
            let endLineNumber, endColumn;
            const selectionEndPositionOffset = model.getLineContent(selection.endLineNumber).length - selection.endColumn;
            if (selection.isEmpty() || selection.startLineNumber === selection.endLineNumber) {
                const position = selection.getStartPosition();
                if (position.lineNumber < model.getLineCount()) {
                    endLineNumber = startLineNumber + 1;
                    endColumn = model.getLineMaxColumn(endLineNumber);
                }
                else {
                    endLineNumber = position.lineNumber;
                    endColumn = model.getLineMaxColumn(position.lineNumber);
                }
            }
            else {
                endLineNumber = selection.endLineNumber;
                endColumn = model.getLineMaxColumn(endLineNumber);
            }
            let trimmedLinesContent = model.getLineContent(startLineNumber);
            for (let i = startLineNumber + 1; i <= endLineNumber; i++) {
                const lineText = model.getLineContent(i);
                const firstNonWhitespaceIdx = model.getLineFirstNonWhitespaceColumn(i);
                if (firstNonWhitespaceIdx >= 1) {
                    let insertSpace = true;
                    if (trimmedLinesContent === '') {
                        insertSpace = false;
                    }
                    if (insertSpace && (trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === ' ' ||
                        trimmedLinesContent.charAt(trimmedLinesContent.length - 1) === '\t')) {
                        insertSpace = false;
                        trimmedLinesContent = trimmedLinesContent.replace(/[\s\uFEFF\xA0]+$/g, ' ');
                    }
                    const lineTextWithoutIndent = lineText.substr(firstNonWhitespaceIdx - 1);
                    trimmedLinesContent += (insertSpace ? ' ' : '') + lineTextWithoutIndent;
                    if (insertSpace) {
                        columnDeltaOffset = lineTextWithoutIndent.length + 1;
                    }
                    else {
                        columnDeltaOffset = lineTextWithoutIndent.length;
                    }
                }
                else {
                    columnDeltaOffset = 0;
                }
            }
            const deleteSelection = new core_range/* Range */.e(startLineNumber, startColumn, endLineNumber, endColumn);
            if (!deleteSelection.isEmpty()) {
                let resultSelection;
                if (selection.isEmpty()) {
                    edits.push(editOperation/* EditOperation */.h.replace(deleteSelection, trimmedLinesContent));
                    resultSelection = new core_selection/* Selection */.Y(deleteSelection.startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1, startLineNumber - lineOffset, trimmedLinesContent.length - columnDeltaOffset + 1);
                }
                else {
                    if (selection.startLineNumber === selection.endLineNumber) {
                        edits.push(editOperation/* EditOperation */.h.replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new core_selection/* Selection */.Y(selection.startLineNumber - lineOffset, selection.startColumn, selection.endLineNumber - lineOffset, selection.endColumn);
                    }
                    else {
                        edits.push(editOperation/* EditOperation */.h.replace(deleteSelection, trimmedLinesContent));
                        resultSelection = new core_selection/* Selection */.Y(selection.startLineNumber - lineOffset, selection.startColumn, selection.startLineNumber - lineOffset, trimmedLinesContent.length - selectionEndPositionOffset);
                    }
                }
                if (core_range/* Range */.e.intersectRanges(deleteSelection, primaryCursor) !== null) {
                    endPrimaryCursor = resultSelection;
                }
                else {
                    endCursorState.push(resultSelection);
                }
            }
            lineOffset += deleteSelection.endLineNumber - deleteSelection.startLineNumber;
        }
        endCursorState.unshift(endPrimaryCursor);
        editor.pushUndoStop();
        editor.executeEdits(this.id, edits, endCursorState);
        editor.pushUndoStop();
    }
}
class TransposeAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.transpose',
            label: nls/* localize */.NC('editor.transpose', "Transpose characters around the cursor"),
            alias: 'Transpose characters around the cursor',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const commands = [];
        for (let i = 0, len = selections.length; i < len; i++) {
            const selection = selections[i];
            if (!selection.isEmpty()) {
                continue;
            }
            const cursor = selection.getStartPosition();
            const maxColumn = model.getLineMaxColumn(cursor.lineNumber);
            if (cursor.column >= maxColumn) {
                if (cursor.lineNumber === model.getLineCount()) {
                    continue;
                }
                // The cursor is at the end of current line and current line is not empty
                // then we transpose the character before the cursor and the line break if there is any following line.
                const deleteSelection = new core_range/* Range */.e(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new replaceCommand/* ReplaceCommand */.T4(new core_selection/* Selection */.Y(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber + 1, 1), chars));
            }
            else {
                const deleteSelection = new core_range/* Range */.e(cursor.lineNumber, Math.max(1, cursor.column - 1), cursor.lineNumber, cursor.column + 1);
                const chars = model.getValueInRange(deleteSelection).split('').reverse().join('');
                commands.push(new replaceCommand/* ReplaceCommandThatPreservesSelection */.hP(deleteSelection, chars, new core_selection/* Selection */.Y(cursor.lineNumber, cursor.column + 1, cursor.lineNumber, cursor.column + 1)));
            }
        }
        editor.pushUndoStop();
        editor.executeCommands(this.id, commands);
        editor.pushUndoStop();
    }
}
class AbstractCaseAction extends editorExtensions/* EditorAction */.R6 {
    run(_accessor, editor) {
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const model = editor.getModel();
        if (model === null) {
            return;
        }
        const wordSeparators = editor.getOption(128 /* EditorOption.wordSeparators */);
        const textEdits = [];
        for (const selection of selections) {
            if (selection.isEmpty()) {
                const cursor = selection.getStartPosition();
                const word = editor.getConfiguredWordAtPosition(cursor);
                if (!word) {
                    continue;
                }
                const wordRange = new core_range/* Range */.e(cursor.lineNumber, word.startColumn, cursor.lineNumber, word.endColumn);
                const text = model.getValueInRange(wordRange);
                textEdits.push(editOperation/* EditOperation */.h.replace(wordRange, this._modifyText(text, wordSeparators)));
            }
            else {
                const text = model.getValueInRange(selection);
                textEdits.push(editOperation/* EditOperation */.h.replace(selection, this._modifyText(text, wordSeparators)));
            }
        }
        editor.pushUndoStop();
        editor.executeEdits(this.id, textEdits);
        editor.pushUndoStop();
    }
}
class UpperCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToUppercase',
            label: nls/* localize */.NC('editor.transformToUppercase', "Transform to Uppercase"),
            alias: 'Transform to Uppercase',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleUpperCase();
    }
}
class LowerCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToLowercase',
            label: nls/* localize */.NC('editor.transformToLowercase', "Transform to Lowercase"),
            alias: 'Transform to Lowercase',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, wordSeparators) {
        return text.toLocaleLowerCase();
    }
}
class BackwardsCompatibleRegExp {
    constructor(_pattern, _flags) {
        this._pattern = _pattern;
        this._flags = _flags;
        this._actual = null;
        this._evaluated = false;
    }
    get() {
        if (!this._evaluated) {
            this._evaluated = true;
            try {
                this._actual = new RegExp(this._pattern, this._flags);
            }
            catch (err) {
                // this browser does not support this regular expression
            }
        }
        return this._actual;
    }
    isSupported() {
        return (this.get() !== null);
    }
}
class TitleCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToTitlecase',
            label: nls/* localize */.NC('editor.transformToTitlecase', "Transform to Title Case"),
            alias: 'Transform to Title Case',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, wordSeparators) {
        const titleBoundary = TitleCaseAction.titleBoundary.get();
        if (!titleBoundary) {
            // cannot support this
            return text;
        }
        return text
            .toLocaleLowerCase()
            .replace(titleBoundary, (b) => b.toLocaleUpperCase());
    }
}
TitleCaseAction.titleBoundary = new BackwardsCompatibleRegExp('(^|[^\\p{L}\\p{N}\']|((^|\\P{L})\'))\\p{L}', 'gmu');
class SnakeCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToSnakecase',
            label: nls/* localize */.NC('editor.transformToSnakecase', "Transform to Snake Case"),
            alias: 'Transform to Snake Case',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, wordSeparators) {
        const caseBoundary = SnakeCaseAction.caseBoundary.get();
        const singleLetters = SnakeCaseAction.singleLetters.get();
        if (!caseBoundary || !singleLetters) {
            // cannot support this
            return text;
        }
        return (text
            .replace(caseBoundary, '$1_$2')
            .replace(singleLetters, '$1_$2$3')
            .toLocaleLowerCase());
    }
}
SnakeCaseAction.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu');
SnakeCaseAction.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})', 'gmu');
class CamelCaseAction extends AbstractCaseAction {
    constructor() {
        super({
            id: 'editor.action.transformToCamelcase',
            label: nls/* localize */.NC('editor.transformToCamelcase', "Transform to Camel Case"),
            alias: 'Transform to Camel Case',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, wordSeparators) {
        const wordBoundary = CamelCaseAction.wordBoundary.get();
        if (!wordBoundary) {
            // cannot support this
            return text;
        }
        const words = text.split(wordBoundary);
        const firstWord = words.shift();
        return firstWord + words.map((word) => word.substring(0, 1).toLocaleUpperCase() + word.substring(1))
            .join('');
    }
}
CamelCaseAction.wordBoundary = new BackwardsCompatibleRegExp('[_\\s-]', 'gm');
class KebabCaseAction extends AbstractCaseAction {
    static isSupported() {
        const areAllRegexpsSupported = [
            this.caseBoundary,
            this.singleLetters,
            this.underscoreBoundary,
        ].every((regexp) => regexp.isSupported());
        return areAllRegexpsSupported;
    }
    constructor() {
        super({
            id: 'editor.action.transformToKebabcase',
            label: nls/* localize */.NC('editor.transformToKebabcase', 'Transform to Kebab Case'),
            alias: 'Transform to Kebab Case',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable
        });
    }
    _modifyText(text, _) {
        const caseBoundary = KebabCaseAction.caseBoundary.get();
        const singleLetters = KebabCaseAction.singleLetters.get();
        const underscoreBoundary = KebabCaseAction.underscoreBoundary.get();
        if (!caseBoundary || !singleLetters || !underscoreBoundary) {
            // one or more regexps aren't supported
            return text;
        }
        return text
            .replace(underscoreBoundary, '$1-$3')
            .replace(caseBoundary, '$1-$2')
            .replace(singleLetters, '$1-$2')
            .toLocaleLowerCase();
    }
}
KebabCaseAction.caseBoundary = new BackwardsCompatibleRegExp('(\\p{Ll})(\\p{Lu})', 'gmu');
KebabCaseAction.singleLetters = new BackwardsCompatibleRegExp('(\\p{Lu}|\\p{N})(\\p{Lu}\\p{Ll})', 'gmu');
KebabCaseAction.underscoreBoundary = new BackwardsCompatibleRegExp('(\\S)(_)(\\S)', 'gm');
(0,editorExtensions/* registerEditorAction */.Qr)(CopyLinesUpAction);
(0,editorExtensions/* registerEditorAction */.Qr)(CopyLinesDownAction);
(0,editorExtensions/* registerEditorAction */.Qr)(DuplicateSelectionAction);
(0,editorExtensions/* registerEditorAction */.Qr)(MoveLinesUpAction);
(0,editorExtensions/* registerEditorAction */.Qr)(MoveLinesDownAction);
(0,editorExtensions/* registerEditorAction */.Qr)(SortLinesAscendingAction);
(0,editorExtensions/* registerEditorAction */.Qr)(SortLinesDescendingAction);
(0,editorExtensions/* registerEditorAction */.Qr)(DeleteDuplicateLinesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(TrimTrailingWhitespaceAction);
(0,editorExtensions/* registerEditorAction */.Qr)(DeleteLinesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(IndentLinesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(OutdentLinesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(InsertLineBeforeAction);
(0,editorExtensions/* registerEditorAction */.Qr)(InsertLineAfterAction);
(0,editorExtensions/* registerEditorAction */.Qr)(DeleteAllLeftAction);
(0,editorExtensions/* registerEditorAction */.Qr)(DeleteAllRightAction);
(0,editorExtensions/* registerEditorAction */.Qr)(JoinLinesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(TransposeAction);
(0,editorExtensions/* registerEditorAction */.Qr)(UpperCaseAction);
(0,editorExtensions/* registerEditorAction */.Qr)(LowerCaseAction);
if (SnakeCaseAction.caseBoundary.isSupported() && SnakeCaseAction.singleLetters.isSupported()) {
    (0,editorExtensions/* registerEditorAction */.Qr)(SnakeCaseAction);
}
if (CamelCaseAction.wordBoundary.isSupported()) {
    (0,editorExtensions/* registerEditorAction */.Qr)(CamelCaseAction);
}
if (TitleCaseAction.titleBoundary.isSupported()) {
    (0,editorExtensions/* registerEditorAction */.Qr)(TitleCaseAction);
}
if (KebabCaseAction.isSupported()) {
    (0,editorExtensions/* registerEditorAction */.Qr)(KebabCaseAction);
}


/***/ })

}]);