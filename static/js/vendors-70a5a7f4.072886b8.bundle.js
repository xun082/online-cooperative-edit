"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-70a5a7f4"],{

/***/ 79219:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gD: function() { return /* binding */ ModelLineProjectionData; }
/* harmony export */ });
/* unused harmony exports InjectedText, OutputPosition */
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14299);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65201);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7783);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * *input*:
 * ```
 * xxxxxxxxxxxxxxxxxxxxxxxxxxx
 * ```
 *
 * -> Applying injections `[i...i]`, *inputWithInjections*:
 * ```
 * xxxxxx[iiiiiiiiii]xxxxxxxxxxxxxxxxx[ii]xxxx
 * ```
 *
 * -> breaking at offsets `|` in `xxxxxx[iiiiiii|iii]xxxxxxxxxxx|xxxxxx[ii]xxxx|`:
 * ```
 * xxxxxx[iiiiiii
 * iii]xxxxxxxxxxx
 * xxxxxx[ii]xxxx
 * ```
 *
 * -> applying wrappedTextIndentLength, *output*:
 * ```
 * xxxxxx[iiiiiii
 *    iii]xxxxxxxxxxx
 *    xxxxxx[ii]xxxx
 * ```
 */
class ModelLineProjectionData {
    constructor(injectionOffsets, 
    /**
     * `injectionOptions.length` must equal `injectionOffsets.length`
     */
    injectionOptions, 
    /**
     * Refers to offsets after applying injections to the source.
     * The last break offset indicates the length of the source after applying injections.
     */
    breakOffsets, 
    /**
     * Refers to offsets after applying injections
     */
    breakOffsetsVisibleColumn, wrappedTextIndentLength) {
        this.injectionOffsets = injectionOffsets;
        this.injectionOptions = injectionOptions;
        this.breakOffsets = breakOffsets;
        this.breakOffsetsVisibleColumn = breakOffsetsVisibleColumn;
        this.wrappedTextIndentLength = wrappedTextIndentLength;
    }
    getOutputLineCount() {
        return this.breakOffsets.length;
    }
    getMinOutputOffset(outputLineIndex) {
        if (outputLineIndex > 0) {
            return this.wrappedTextIndentLength;
        }
        return 0;
    }
    getLineLength(outputLineIndex) {
        // These offsets refer to model text with injected text.
        const startOffset = outputLineIndex > 0 ? this.breakOffsets[outputLineIndex - 1] : 0;
        const endOffset = this.breakOffsets[outputLineIndex];
        let lineLength = endOffset - startOffset;
        if (outputLineIndex > 0) {
            lineLength += this.wrappedTextIndentLength;
        }
        return lineLength;
    }
    getMaxOutputOffset(outputLineIndex) {
        return this.getLineLength(outputLineIndex);
    }
    translateToInputOffset(outputLineIndex, outputOffset) {
        if (outputLineIndex > 0) {
            outputOffset = Math.max(0, outputOffset - this.wrappedTextIndentLength);
        }
        const offsetInInputWithInjection = outputLineIndex === 0 ? outputOffset : this.breakOffsets[outputLineIndex - 1] + outputOffset;
        let offsetInInput = offsetInInputWithInjection;
        if (this.injectionOffsets !== null) {
            for (let i = 0; i < this.injectionOffsets.length; i++) {
                if (offsetInInput > this.injectionOffsets[i]) {
                    if (offsetInInput < this.injectionOffsets[i] + this.injectionOptions[i].content.length) {
                        // `inputOffset` is within injected text
                        offsetInInput = this.injectionOffsets[i];
                    }
                    else {
                        offsetInInput -= this.injectionOptions[i].content.length;
                    }
                }
                else {
                    break;
                }
            }
        }
        return offsetInInput;
    }
    translateToOutputPosition(inputOffset, affinity = 2 /* PositionAffinity.None */) {
        let inputOffsetInInputWithInjection = inputOffset;
        if (this.injectionOffsets !== null) {
            for (let i = 0; i < this.injectionOffsets.length; i++) {
                if (inputOffset < this.injectionOffsets[i]) {
                    break;
                }
                if (affinity !== 1 /* PositionAffinity.Right */ && inputOffset === this.injectionOffsets[i]) {
                    break;
                }
                inputOffsetInInputWithInjection += this.injectionOptions[i].content.length;
            }
        }
        return this.offsetInInputWithInjectionsToOutputPosition(inputOffsetInInputWithInjection, affinity);
    }
    offsetInInputWithInjectionsToOutputPosition(offsetInInputWithInjections, affinity = 2 /* PositionAffinity.None */) {
        let low = 0;
        let high = this.breakOffsets.length - 1;
        let mid = 0;
        let midStart = 0;
        while (low <= high) {
            mid = low + ((high - low) / 2) | 0;
            const midStop = this.breakOffsets[mid];
            midStart = mid > 0 ? this.breakOffsets[mid - 1] : 0;
            if (affinity === 0 /* PositionAffinity.Left */) {
                if (offsetInInputWithInjections <= midStart) {
                    high = mid - 1;
                }
                else if (offsetInInputWithInjections > midStop) {
                    low = mid + 1;
                }
                else {
                    break;
                }
            }
            else {
                if (offsetInInputWithInjections < midStart) {
                    high = mid - 1;
                }
                else if (offsetInInputWithInjections >= midStop) {
                    low = mid + 1;
                }
                else {
                    break;
                }
            }
        }
        let outputOffset = offsetInInputWithInjections - midStart;
        if (mid > 0) {
            outputOffset += this.wrappedTextIndentLength;
        }
        return new OutputPosition(mid, outputOffset);
    }
    normalizeOutputPosition(outputLineIndex, outputOffset, affinity) {
        if (this.injectionOffsets !== null) {
            const offsetInInputWithInjections = this.outputPositionToOffsetInInputWithInjections(outputLineIndex, outputOffset);
            const normalizedOffsetInUnwrappedLine = this.normalizeOffsetInInputWithInjectionsAroundInjections(offsetInInputWithInjections, affinity);
            if (normalizedOffsetInUnwrappedLine !== offsetInInputWithInjections) {
                // injected text caused a change
                return this.offsetInInputWithInjectionsToOutputPosition(normalizedOffsetInUnwrappedLine, affinity);
            }
        }
        if (affinity === 0 /* PositionAffinity.Left */) {
            if (outputLineIndex > 0 && outputOffset === this.getMinOutputOffset(outputLineIndex)) {
                return new OutputPosition(outputLineIndex - 1, this.getMaxOutputOffset(outputLineIndex - 1));
            }
        }
        else if (affinity === 1 /* PositionAffinity.Right */) {
            const maxOutputLineIndex = this.getOutputLineCount() - 1;
            if (outputLineIndex < maxOutputLineIndex && outputOffset === this.getMaxOutputOffset(outputLineIndex)) {
                return new OutputPosition(outputLineIndex + 1, this.getMinOutputOffset(outputLineIndex + 1));
            }
        }
        return new OutputPosition(outputLineIndex, outputOffset);
    }
    outputPositionToOffsetInInputWithInjections(outputLineIndex, outputOffset) {
        if (outputLineIndex > 0) {
            outputOffset = Math.max(0, outputOffset - this.wrappedTextIndentLength);
        }
        const result = (outputLineIndex > 0 ? this.breakOffsets[outputLineIndex - 1] : 0) + outputOffset;
        return result;
    }
    normalizeOffsetInInputWithInjectionsAroundInjections(offsetInInputWithInjections, affinity) {
        const injectedText = this.getInjectedTextAtOffset(offsetInInputWithInjections);
        if (!injectedText) {
            return offsetInInputWithInjections;
        }
        if (affinity === 2 /* PositionAffinity.None */) {
            if (offsetInInputWithInjections === injectedText.offsetInInputWithInjections + injectedText.length
                && hasRightCursorStop(this.injectionOptions[injectedText.injectedTextIndex].cursorStops)) {
                return injectedText.offsetInInputWithInjections + injectedText.length;
            }
            else {
                let result = injectedText.offsetInInputWithInjections;
                if (hasLeftCursorStop(this.injectionOptions[injectedText.injectedTextIndex].cursorStops)) {
                    return result;
                }
                let index = injectedText.injectedTextIndex - 1;
                while (index >= 0 && this.injectionOffsets[index] === this.injectionOffsets[injectedText.injectedTextIndex]) {
                    if (hasRightCursorStop(this.injectionOptions[index].cursorStops)) {
                        break;
                    }
                    result -= this.injectionOptions[index].content.length;
                    if (hasLeftCursorStop(this.injectionOptions[index].cursorStops)) {
                        break;
                    }
                    index--;
                }
                return result;
            }
        }
        else if (affinity === 1 /* PositionAffinity.Right */ || affinity === 4 /* PositionAffinity.RightOfInjectedText */) {
            let result = injectedText.offsetInInputWithInjections + injectedText.length;
            let index = injectedText.injectedTextIndex;
            // traverse all injected text that touch each other
            while (index + 1 < this.injectionOffsets.length && this.injectionOffsets[index + 1] === this.injectionOffsets[index]) {
                result += this.injectionOptions[index + 1].content.length;
                index++;
            }
            return result;
        }
        else if (affinity === 0 /* PositionAffinity.Left */ || affinity === 3 /* PositionAffinity.LeftOfInjectedText */) {
            // affinity is left
            let result = injectedText.offsetInInputWithInjections;
            let index = injectedText.injectedTextIndex;
            // traverse all injected text that touch each other
            while (index - 1 >= 0 && this.injectionOffsets[index - 1] === this.injectionOffsets[index]) {
                result -= this.injectionOptions[index - 1].content.length;
                index--;
            }
            return result;
        }
        (0,_base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__/* .assertNever */ .vE)(affinity);
    }
    getInjectedText(outputLineIndex, outputOffset) {
        const offset = this.outputPositionToOffsetInInputWithInjections(outputLineIndex, outputOffset);
        const injectedText = this.getInjectedTextAtOffset(offset);
        if (!injectedText) {
            return null;
        }
        return {
            options: this.injectionOptions[injectedText.injectedTextIndex]
        };
    }
    getInjectedTextAtOffset(offsetInInputWithInjections) {
        const injectionOffsets = this.injectionOffsets;
        const injectionOptions = this.injectionOptions;
        if (injectionOffsets !== null) {
            let totalInjectedTextLengthBefore = 0;
            for (let i = 0; i < injectionOffsets.length; i++) {
                const length = injectionOptions[i].content.length;
                const injectedTextStartOffsetInInputWithInjections = injectionOffsets[i] + totalInjectedTextLengthBefore;
                const injectedTextEndOffsetInInputWithInjections = injectionOffsets[i] + totalInjectedTextLengthBefore + length;
                if (injectedTextStartOffsetInInputWithInjections > offsetInInputWithInjections) {
                    // Injected text starts later.
                    break; // All later injected texts have an even larger offset.
                }
                if (offsetInInputWithInjections <= injectedTextEndOffsetInInputWithInjections) {
                    // Injected text ends after or with the given position (but also starts with or before it).
                    return {
                        injectedTextIndex: i,
                        offsetInInputWithInjections: injectedTextStartOffsetInInputWithInjections,
                        length
                    };
                }
                totalInjectedTextLengthBefore += length;
            }
        }
        return undefined;
    }
}
function hasRightCursorStop(cursorStop) {
    if (cursorStop === null || cursorStop === undefined) {
        return true;
    }
    return cursorStop === _model_js__WEBPACK_IMPORTED_MODULE_1__/* .InjectedTextCursorStops */ .RM.Right || cursorStop === _model_js__WEBPACK_IMPORTED_MODULE_1__/* .InjectedTextCursorStops */ .RM.Both;
}
function hasLeftCursorStop(cursorStop) {
    if (cursorStop === null || cursorStop === undefined) {
        return true;
    }
    return cursorStop === _model_js__WEBPACK_IMPORTED_MODULE_1__/* .InjectedTextCursorStops */ .RM.Left || cursorStop === _model_js__WEBPACK_IMPORTED_MODULE_1__/* .InjectedTextCursorStops */ .RM.Both;
}
class InjectedText {
    constructor(options) {
        this.options = options;
    }
}
class OutputPosition {
    constructor(outputLineIndex, outputOffset) {
        this.outputLineIndex = outputLineIndex;
        this.outputOffset = outputOffset;
    }
    toString() {
        return `${this.outputLineIndex}:${this.outputOffset}`;
    }
    toPosition(baseLineNumber) {
        return new _core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(baseLineNumber + this.outputLineIndex, this.outputOffset + 1);
    }
}


/***/ }),

/***/ 12517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q: function() { return /* binding */ BracketPairsTextModelPart; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports.js
var supports = __webpack_require__(85377);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/richEditBrackets.js
var richEditBrackets = __webpack_require__(80644);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/textModelBracketPairs.js
var textModelBracketPairs = __webpack_require__(76007);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js
var beforeEditPositionMapper = __webpack_require__(34393);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/brackets.js
var brackets = __webpack_require__(72417);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/length.js
var bracketPairsTree_length = __webpack_require__(97973);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.js + 2 modules
var parser = __webpack_require__(974);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/smallImmutableSet.js
var smallImmutableSet = __webpack_require__(25401);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/tokenizer.js
var bracketPairsTree_tokenizer = __webpack_require__(32834);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js
var combineTextEditInfos = __webpack_require__(27172);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/bracketPairsTree.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/











class BracketPairsTree extends lifecycle/* Disposable */.JT {
    didLanguageChange(languageId) {
        return this.brackets.didLanguageChange(languageId);
    }
    constructor(textModel, getLanguageConfiguration) {
        super();
        this.textModel = textModel;
        this.getLanguageConfiguration = getLanguageConfiguration;
        this.didChangeEmitter = new common_event/* Emitter */.Q5();
        this.denseKeyProvider = new smallImmutableSet/* DenseKeyProvider */.FE();
        this.brackets = new brackets/* LanguageAgnosticBracketTokens */.Z(this.denseKeyProvider, this.getLanguageConfiguration);
        this.onDidChange = this.didChangeEmitter.event;
        this.queuedTextEditsForInitialAstWithoutTokens = [];
        this.queuedTextEdits = [];
        if (!textModel.tokenization.hasTokens) {
            const brackets = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId());
            const tokenizer = new bracketPairsTree_tokenizer/* FastTokenizer */.g(this.textModel.getValue(), brackets);
            this.initialAstWithoutTokens = (0,parser/* parseDocument */.w)(tokenizer, [], undefined, true);
            this.astWithTokens = this.initialAstWithoutTokens;
        }
        else if (textModel.tokenization.backgroundTokenizationState === 2 /* BackgroundTokenizationState.Completed */) {
            // Skip the initial ast, as there is no flickering.
            // Directly create the tree with token information.
            this.initialAstWithoutTokens = undefined;
            this.astWithTokens = this.parseDocumentFromTextBuffer([], undefined, false);
        }
        else {
            // We missed some token changes already, so we cannot use the fast tokenizer + delta increments
            this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], undefined, true);
            this.astWithTokens = this.initialAstWithoutTokens;
        }
    }
    //#region TextModel events
    handleDidChangeBackgroundTokenizationState() {
        if (this.textModel.tokenization.backgroundTokenizationState === 2 /* BackgroundTokenizationState.Completed */) {
            const wasUndefined = this.initialAstWithoutTokens === undefined;
            // Clear the initial tree as we can use the tree with token information now.
            this.initialAstWithoutTokens = undefined;
            if (!wasUndefined) {
                this.didChangeEmitter.fire();
            }
        }
    }
    handleDidChangeTokens({ ranges }) {
        const edits = ranges.map(r => new beforeEditPositionMapper/* TextEditInfo */.Q((0,bracketPairsTree_length/* toLength */.Hg)(r.fromLineNumber - 1, 0), (0,bracketPairsTree_length/* toLength */.Hg)(r.toLineNumber, 0), (0,bracketPairsTree_length/* toLength */.Hg)(r.toLineNumber - r.fromLineNumber + 1, 0)));
        this.handleEdits(edits, true);
        if (!this.initialAstWithoutTokens) {
            this.didChangeEmitter.fire();
        }
    }
    handleContentChanged(change) {
        const edits = beforeEditPositionMapper/* TextEditInfo */.Q.fromModelContentChanges(change.changes);
        this.handleEdits(edits, false);
    }
    handleEdits(edits, tokenChange) {
        // Lazily queue the edits and only apply them when the tree is accessed.
        const result = (0,combineTextEditInfos/* combineTextEditInfos */.o)(this.queuedTextEdits, edits);
        this.queuedTextEdits = result;
        if (this.initialAstWithoutTokens && !tokenChange) {
            this.queuedTextEditsForInitialAstWithoutTokens = (0,combineTextEditInfos/* combineTextEditInfos */.o)(this.queuedTextEditsForInitialAstWithoutTokens, edits);
        }
    }
    //#endregion
    flushQueue() {
        if (this.queuedTextEdits.length > 0) {
            this.astWithTokens = this.parseDocumentFromTextBuffer(this.queuedTextEdits, this.astWithTokens, false);
            this.queuedTextEdits = [];
        }
        if (this.queuedTextEditsForInitialAstWithoutTokens.length > 0) {
            if (this.initialAstWithoutTokens) {
                this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer(this.queuedTextEditsForInitialAstWithoutTokens, this.initialAstWithoutTokens, false);
            }
            this.queuedTextEditsForInitialAstWithoutTokens = [];
        }
    }
    /**
     * @pure (only if isPure = true)
    */
    parseDocumentFromTextBuffer(edits, previousAst, immutable) {
        // Is much faster if `isPure = false`.
        const isPure = false;
        const previousAstClone = isPure ? previousAst === null || previousAst === void 0 ? void 0 : previousAst.deepClone() : previousAst;
        const tokenizer = new bracketPairsTree_tokenizer/* TextBufferTokenizer */.xH(this.textModel, this.brackets);
        const result = (0,parser/* parseDocument */.w)(tokenizer, edits, previousAstClone, immutable);
        return result;
    }
    getBracketsInRange(range, onlyColorizedBrackets) {
        this.flushQueue();
        const startOffset = (0,bracketPairsTree_length/* toLength */.Hg)(range.startLineNumber - 1, range.startColumn - 1);
        const endOffset = (0,bracketPairsTree_length/* toLength */.Hg)(range.endLineNumber - 1, range.endColumn - 1);
        return new arrays/* CallbackIterable */.W$(cb => {
            const node = this.initialAstWithoutTokens || this.astWithTokens;
            collectBrackets(node, bracketPairsTree_length/* lengthZero */.xl, node.length, startOffset, endOffset, cb, 0, 0, new Map(), onlyColorizedBrackets);
        });
    }
    getBracketPairsInRange(range, includeMinIndentation) {
        this.flushQueue();
        const startLength = (0,bracketPairsTree_length/* positionToLength */.PZ)(range.getStartPosition());
        const endLength = (0,bracketPairsTree_length/* positionToLength */.PZ)(range.getEndPosition());
        return new arrays/* CallbackIterable */.W$(cb => {
            const node = this.initialAstWithoutTokens || this.astWithTokens;
            const context = new CollectBracketPairsContext(cb, includeMinIndentation, this.textModel);
            collectBracketPairs(node, bracketPairsTree_length/* lengthZero */.xl, node.length, startLength, endLength, context, 0, new Map());
        });
    }
    getFirstBracketAfter(position) {
        this.flushQueue();
        const node = this.initialAstWithoutTokens || this.astWithTokens;
        return getFirstBracketAfter(node, bracketPairsTree_length/* lengthZero */.xl, node.length, (0,bracketPairsTree_length/* positionToLength */.PZ)(position));
    }
    getFirstBracketBefore(position) {
        this.flushQueue();
        const node = this.initialAstWithoutTokens || this.astWithTokens;
        return getFirstBracketBefore(node, bracketPairsTree_length/* lengthZero */.xl, node.length, (0,bracketPairsTree_length/* positionToLength */.PZ)(position));
    }
}
function getFirstBracketBefore(node, nodeOffsetStart, nodeOffsetEnd, position) {
    if (node.kind === 4 /* AstNodeKind.List */ || node.kind === 2 /* AstNodeKind.Pair */) {
        const lengths = [];
        for (const child of node.children) {
            nodeOffsetEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, child.length);
            lengths.push({ nodeOffsetStart, nodeOffsetEnd });
            nodeOffsetStart = nodeOffsetEnd;
        }
        for (let i = lengths.length - 1; i >= 0; i--) {
            const { nodeOffsetStart, nodeOffsetEnd } = lengths[i];
            if ((0,bracketPairsTree_length/* lengthLessThan */.VR)(nodeOffsetStart, position)) {
                const result = getFirstBracketBefore(node.children[i], nodeOffsetStart, nodeOffsetEnd, position);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    else if (node.kind === 3 /* AstNodeKind.UnexpectedClosingBracket */) {
        return null;
    }
    else if (node.kind === 1 /* AstNodeKind.Bracket */) {
        const range = (0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, nodeOffsetEnd);
        return {
            bracketInfo: node.bracketInfo,
            range
        };
    }
    return null;
}
function getFirstBracketAfter(node, nodeOffsetStart, nodeOffsetEnd, position) {
    if (node.kind === 4 /* AstNodeKind.List */ || node.kind === 2 /* AstNodeKind.Pair */) {
        for (const child of node.children) {
            nodeOffsetEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, child.length);
            if ((0,bracketPairsTree_length/* lengthLessThan */.VR)(position, nodeOffsetEnd)) {
                const result = getFirstBracketAfter(child, nodeOffsetStart, nodeOffsetEnd, position);
                if (result) {
                    return result;
                }
            }
            nodeOffsetStart = nodeOffsetEnd;
        }
        return null;
    }
    else if (node.kind === 3 /* AstNodeKind.UnexpectedClosingBracket */) {
        return null;
    }
    else if (node.kind === 1 /* AstNodeKind.Bracket */) {
        const range = (0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, nodeOffsetEnd);
        return {
            bracketInfo: node.bracketInfo,
            range
        };
    }
    return null;
}
function collectBrackets(node, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, push, level, nestingLevelOfEqualBracketType, levelPerBracketType, onlyColorizedBrackets, parentPairIsIncomplete = false) {
    if (level > 200) {
        return true;
    }
    whileLoop: while (true) {
        switch (node.kind) {
            case 4 /* AstNodeKind.List */: {
                const childCount = node.childrenLength;
                for (let i = 0; i < childCount; i++) {
                    const child = node.getChild(i);
                    if (!child) {
                        continue;
                    }
                    nodeOffsetEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, child.length);
                    if ((0,bracketPairsTree_length/* lengthLessThanEqual */.By)(nodeOffsetStart, endOffset) &&
                        (0,bracketPairsTree_length/* lengthGreaterThanEqual */.Zq)(nodeOffsetEnd, startOffset)) {
                        const childEndsAfterEnd = (0,bracketPairsTree_length/* lengthGreaterThanEqual */.Zq)(nodeOffsetEnd, endOffset);
                        if (childEndsAfterEnd) {
                            // No child after this child in the requested window, don't recurse
                            node = child;
                            continue whileLoop;
                        }
                        const shouldContinue = collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, push, level, 0, levelPerBracketType, onlyColorizedBrackets);
                        if (!shouldContinue) {
                            return false;
                        }
                    }
                    nodeOffsetStart = nodeOffsetEnd;
                }
                return true;
            }
            case 2 /* AstNodeKind.Pair */: {
                const colorize = !onlyColorizedBrackets || !node.closingBracket || node.closingBracket.bracketInfo.closesColorized(node.openingBracket.bracketInfo);
                let levelPerBracket = 0;
                if (levelPerBracketType) {
                    let existing = levelPerBracketType.get(node.openingBracket.text);
                    if (existing === undefined) {
                        existing = 0;
                    }
                    levelPerBracket = existing;
                    if (colorize) {
                        existing++;
                        levelPerBracketType.set(node.openingBracket.text, existing);
                    }
                }
                const childCount = node.childrenLength;
                for (let i = 0; i < childCount; i++) {
                    const child = node.getChild(i);
                    if (!child) {
                        continue;
                    }
                    nodeOffsetEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, child.length);
                    if ((0,bracketPairsTree_length/* lengthLessThanEqual */.By)(nodeOffsetStart, endOffset) &&
                        (0,bracketPairsTree_length/* lengthGreaterThanEqual */.Zq)(nodeOffsetEnd, startOffset)) {
                        const childEndsAfterEnd = (0,bracketPairsTree_length/* lengthGreaterThanEqual */.Zq)(nodeOffsetEnd, endOffset);
                        if (childEndsAfterEnd && child.kind !== 1 /* AstNodeKind.Bracket */) {
                            // No child after this child in the requested window, don't recurse
                            // Don't do this for brackets because of unclosed/unopened brackets
                            node = child;
                            if (colorize) {
                                level++;
                                nestingLevelOfEqualBracketType = levelPerBracket + 1;
                            }
                            else {
                                nestingLevelOfEqualBracketType = levelPerBracket;
                            }
                            continue whileLoop;
                        }
                        if (colorize || child.kind !== 1 /* AstNodeKind.Bracket */ || !node.closingBracket) {
                            const shouldContinue = collectBrackets(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, push, colorize ? level + 1 : level, colorize ? levelPerBracket + 1 : levelPerBracket, levelPerBracketType, onlyColorizedBrackets, !node.closingBracket);
                            if (!shouldContinue) {
                                return false;
                            }
                        }
                    }
                    nodeOffsetStart = nodeOffsetEnd;
                }
                levelPerBracketType === null || levelPerBracketType === void 0 ? void 0 : levelPerBracketType.set(node.openingBracket.text, levelPerBracket);
                return true;
            }
            case 3 /* AstNodeKind.UnexpectedClosingBracket */: {
                const range = (0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, nodeOffsetEnd);
                return push(new textModelBracketPairs/* BracketInfo */.M$(range, level - 1, 0, true));
            }
            case 1 /* AstNodeKind.Bracket */: {
                const range = (0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, nodeOffsetEnd);
                return push(new textModelBracketPairs/* BracketInfo */.M$(range, level - 1, nestingLevelOfEqualBracketType - 1, parentPairIsIncomplete));
            }
            case 0 /* AstNodeKind.Text */:
                return true;
        }
    }
}
class CollectBracketPairsContext {
    constructor(push, includeMinIndentation, textModel) {
        this.push = push;
        this.includeMinIndentation = includeMinIndentation;
        this.textModel = textModel;
    }
}
function collectBracketPairs(node, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, context, level, levelPerBracketType) {
    var _a;
    if (level > 200) {
        return true;
    }
    let shouldContinue = true;
    if (node.kind === 2 /* AstNodeKind.Pair */) {
        let levelPerBracket = 0;
        if (levelPerBracketType) {
            let existing = levelPerBracketType.get(node.openingBracket.text);
            if (existing === undefined) {
                existing = 0;
            }
            levelPerBracket = existing;
            existing++;
            levelPerBracketType.set(node.openingBracket.text, existing);
        }
        const openingBracketEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, node.openingBracket.length);
        let minIndentation = -1;
        if (context.includeMinIndentation) {
            minIndentation = node.computeMinIndentation(nodeOffsetStart, context.textModel);
        }
        shouldContinue = context.push(new textModelBracketPairs/* BracketPairWithMinIndentationInfo */.YA((0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, nodeOffsetEnd), (0,bracketPairsTree_length/* lengthsToRange */.Qw)(nodeOffsetStart, openingBracketEnd), node.closingBracket
            ? (0,bracketPairsTree_length/* lengthsToRange */.Qw)((0,bracketPairsTree_length/* lengthAdd */.Ii)(openingBracketEnd, ((_a = node.child) === null || _a === void 0 ? void 0 : _a.length) || bracketPairsTree_length/* lengthZero */.xl), nodeOffsetEnd)
            : undefined, level, levelPerBracket, node, minIndentation));
        nodeOffsetStart = openingBracketEnd;
        if (shouldContinue && node.child) {
            const child = node.child;
            nodeOffsetEnd = (0,bracketPairsTree_length/* lengthAdd */.Ii)(nodeOffsetStart, child.length);
            if ((0,bracketPairsTree_length/* lengthLessThanEqual */.By)(nodeOffsetStart, endOffset) &&
                (0,bracketPairsTree_length/* lengthGreaterThanEqual */.Zq)(nodeOffsetEnd, startOffset)) {
                shouldContinue = collectBracketPairs(child, nodeOffsetStart, nodeOffsetEnd, startOffset, endOffset, context, level + 1, levelPerBracketType);
                if (!shouldContinue) {
                    return false;
                }
            }
        }
        levelPerBracketType === null || levelPerBracketType === void 0 ? void 0 : levelPerBracketType.set(node.openingBracket.text, levelPerBracket);
    }
    else {
        let curOffset = nodeOffsetStart;
        for (const child of node.children) {
            const childOffset = curOffset;
            curOffset = (0,bracketPairsTree_length/* lengthAdd */.Ii)(curOffset, child.length);
            if ((0,bracketPairsTree_length/* lengthLessThanEqual */.By)(childOffset, endOffset) &&
                (0,bracketPairsTree_length/* lengthLessThanEqual */.By)(startOffset, curOffset)) {
                shouldContinue = collectBracketPairs(child, childOffset, curOffset, startOffset, endOffset, context, level, levelPerBracketType);
                if (!shouldContinue) {
                    return false;
                }
            }
        }
    }
    return shouldContinue;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsImpl.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







class BracketPairsTextModelPart extends lifecycle/* Disposable */.JT {
    get canBuildAST() {
        const maxSupportedDocumentLength = /* max lines */ 50000 * /* average column count */ 100;
        return this.textModel.getValueLength() <= maxSupportedDocumentLength;
    }
    constructor(textModel, languageConfigurationService) {
        super();
        this.textModel = textModel;
        this.languageConfigurationService = languageConfigurationService;
        this.bracketPairsTree = this._register(new lifecycle/* MutableDisposable */.XK());
        this.onDidChangeEmitter = new common_event/* Emitter */.Q5();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.bracketsRequested = false;
        this._register(this.languageConfigurationService.onDidChange(e => {
            var _a;
            if (!e.languageId || ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.didLanguageChange(e.languageId))) {
                this.bracketPairsTree.clear();
                this.updateBracketPairsTree();
            }
        }));
    }
    //#region TextModel events
    handleDidChangeOptions(e) {
        this.bracketPairsTree.clear();
        this.updateBracketPairsTree();
    }
    handleDidChangeLanguage(e) {
        this.bracketPairsTree.clear();
        this.updateBracketPairsTree();
    }
    handleDidChangeContent(change) {
        var _a;
        (_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.handleContentChanged(change);
    }
    handleDidChangeBackgroundTokenizationState() {
        var _a;
        (_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.handleDidChangeBackgroundTokenizationState();
    }
    handleDidChangeTokens(e) {
        var _a;
        (_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.handleDidChangeTokens(e);
    }
    //#endregion
    updateBracketPairsTree() {
        if (this.bracketsRequested && this.canBuildAST) {
            if (!this.bracketPairsTree.value) {
                const store = new lifecycle/* DisposableStore */.SL();
                this.bracketPairsTree.value = createDisposableRef(store.add(new BracketPairsTree(this.textModel, (languageId) => {
                    return this.languageConfigurationService.getLanguageConfiguration(languageId);
                })), store);
                store.add(this.bracketPairsTree.value.object.onDidChange(e => this.onDidChangeEmitter.fire(e)));
                this.onDidChangeEmitter.fire();
            }
        }
        else {
            if (this.bracketPairsTree.value) {
                this.bracketPairsTree.clear();
                // Important: Don't call fire if there was no change!
                this.onDidChangeEmitter.fire();
            }
        }
    }
    /**
     * Returns all bracket pairs that intersect the given range.
     * The result is sorted by the start position.
    */
    getBracketPairsInRange(range) {
        var _a;
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.getBracketPairsInRange(range, false)) || arrays/* CallbackIterable */.W$.empty;
    }
    getBracketPairsInRangeWithMinIndentation(range) {
        var _a;
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.getBracketPairsInRange(range, true)) || arrays/* CallbackIterable */.W$.empty;
    }
    getBracketsInRange(range, onlyColorizedBrackets = false) {
        var _a;
        this.bracketsRequested = true;
        this.updateBracketPairsTree();
        return ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.getBracketsInRange(range, onlyColorizedBrackets)) || arrays/* CallbackIterable */.W$.empty;
    }
    findMatchingBracketUp(_bracket, _position, maxDuration) {
        const position = this.textModel.validatePosition(_position);
        const languageId = this.textModel.getLanguageIdAtPosition(position.lineNumber, position.column);
        if (this.canBuildAST) {
            const closingBracketInfo = this.languageConfigurationService
                .getLanguageConfiguration(languageId)
                .bracketsNew.getClosingBracketInfo(_bracket);
            if (!closingBracketInfo) {
                return null;
            }
            const bracketPair = this.getBracketPairsInRange(core_range/* Range */.e.fromPositions(_position, _position)).findLast((b) => closingBracketInfo.closes(b.openingBracketInfo));
            if (bracketPair) {
                return bracketPair.openingBracketRange;
            }
            return null;
        }
        else {
            // Fallback to old bracket matching code:
            const bracket = _bracket.toLowerCase();
            const bracketsSupport = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
            if (!bracketsSupport) {
                return null;
            }
            const data = bracketsSupport.textIsBracket[bracket];
            if (!data) {
                return null;
            }
            return stripBracketSearchCanceled(this._findMatchingBracketUp(data, position, createTimeBasedContinueBracketSearchPredicate(maxDuration)));
        }
    }
    matchBracket(position, maxDuration) {
        if (this.canBuildAST) {
            const bracketPair = this.getBracketPairsInRange(core_range/* Range */.e.fromPositions(position, position)).filter((item) => item.closingBracketRange !== undefined &&
                (item.openingBracketRange.containsPosition(position) ||
                    item.closingBracketRange.containsPosition(position))).findLastMaxBy((0,arrays/* compareBy */.tT)((item) => item.openingBracketRange.containsPosition(position)
                ? item.openingBracketRange
                : item.closingBracketRange, core_range/* Range */.e.compareRangesUsingStarts));
            if (bracketPair) {
                return [bracketPair.openingBracketRange, bracketPair.closingBracketRange];
            }
            return null;
        }
        else {
            // Fallback to old bracket matching code:
            const continueSearchPredicate = createTimeBasedContinueBracketSearchPredicate(maxDuration);
            return this._matchBracket(this.textModel.validatePosition(position), continueSearchPredicate);
        }
    }
    _establishBracketSearchOffsets(position, lineTokens, modeBrackets, tokenIndex) {
        const tokenCount = lineTokens.getCount();
        const currentLanguageId = lineTokens.getLanguageId(tokenIndex);
        // limit search to not go before `maxBracketLength`
        let searchStartOffset = Math.max(0, position.column - 1 - modeBrackets.maxBracketLength);
        for (let i = tokenIndex - 1; i >= 0; i--) {
            const tokenEndOffset = lineTokens.getEndOffset(i);
            if (tokenEndOffset <= searchStartOffset) {
                break;
            }
            if ((0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(i)) || lineTokens.getLanguageId(i) !== currentLanguageId) {
                searchStartOffset = tokenEndOffset;
                break;
            }
        }
        // limit search to not go after `maxBracketLength`
        let searchEndOffset = Math.min(lineTokens.getLineContent().length, position.column - 1 + modeBrackets.maxBracketLength);
        for (let i = tokenIndex + 1; i < tokenCount; i++) {
            const tokenStartOffset = lineTokens.getStartOffset(i);
            if (tokenStartOffset >= searchEndOffset) {
                break;
            }
            if ((0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(i)) || lineTokens.getLanguageId(i) !== currentLanguageId) {
                searchEndOffset = tokenStartOffset;
                break;
            }
        }
        return { searchStartOffset, searchEndOffset };
    }
    _matchBracket(position, continueSearchPredicate) {
        const lineNumber = position.lineNumber;
        const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
        const lineText = this.textModel.getLineContent(lineNumber);
        const tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
        if (tokenIndex < 0) {
            return null;
        }
        const currentModeBrackets = this.languageConfigurationService.getLanguageConfiguration(lineTokens.getLanguageId(tokenIndex)).brackets;
        // check that the token is not to be ignored
        if (currentModeBrackets && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex))) {
            let { searchStartOffset, searchEndOffset } = this._establishBracketSearchOffsets(position, lineTokens, currentModeBrackets, tokenIndex);
            // it might be the case that [currentTokenStart -> currentTokenEnd] contains multiple brackets
            // `bestResult` will contain the most right-side result
            let bestResult = null;
            while (true) {
                const foundBracket = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(currentModeBrackets.forwardRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (!foundBracket) {
                    // there are no more brackets in this text
                    break;
                }
                // check that we didn't hit a bracket too far away from position
                if (foundBracket.startColumn <= position.column && position.column <= foundBracket.endColumn) {
                    const foundBracketText = lineText.substring(foundBracket.startColumn - 1, foundBracket.endColumn - 1).toLowerCase();
                    const r = this._matchFoundBracket(foundBracket, currentModeBrackets.textIsBracket[foundBracketText], currentModeBrackets.textIsOpenBracket[foundBracketText], continueSearchPredicate);
                    if (r) {
                        if (r instanceof BracketSearchCanceled) {
                            return null;
                        }
                        bestResult = r;
                    }
                }
                searchStartOffset = foundBracket.endColumn - 1;
            }
            if (bestResult) {
                return bestResult;
            }
        }
        // If position is in between two tokens, try also looking in the previous token
        if (tokenIndex > 0 && lineTokens.getStartOffset(tokenIndex) === position.column - 1) {
            const prevTokenIndex = tokenIndex - 1;
            const prevModeBrackets = this.languageConfigurationService.getLanguageConfiguration(lineTokens.getLanguageId(prevTokenIndex)).brackets;
            // check that previous token is not to be ignored
            if (prevModeBrackets && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(prevTokenIndex))) {
                const { searchStartOffset, searchEndOffset } = this._establishBracketSearchOffsets(position, lineTokens, prevModeBrackets, prevTokenIndex);
                const foundBracket = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(prevModeBrackets.reversedRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                // check that we didn't hit a bracket too far away from position
                if (foundBracket && foundBracket.startColumn <= position.column && position.column <= foundBracket.endColumn) {
                    const foundBracketText = lineText.substring(foundBracket.startColumn - 1, foundBracket.endColumn - 1).toLowerCase();
                    const r = this._matchFoundBracket(foundBracket, prevModeBrackets.textIsBracket[foundBracketText], prevModeBrackets.textIsOpenBracket[foundBracketText], continueSearchPredicate);
                    if (r) {
                        if (r instanceof BracketSearchCanceled) {
                            return null;
                        }
                        return r;
                    }
                }
            }
        }
        return null;
    }
    _matchFoundBracket(foundBracket, data, isOpen, continueSearchPredicate) {
        if (!data) {
            return null;
        }
        const matched = (isOpen
            ? this._findMatchingBracketDown(data, foundBracket.getEndPosition(), continueSearchPredicate)
            : this._findMatchingBracketUp(data, foundBracket.getStartPosition(), continueSearchPredicate));
        if (!matched) {
            return null;
        }
        if (matched instanceof BracketSearchCanceled) {
            return matched;
        }
        return [foundBracket, matched];
    }
    _findMatchingBracketUp(bracket, position, continueSearchPredicate) {
        // console.log('_findMatchingBracketUp: ', 'bracket: ', JSON.stringify(bracket), 'startPosition: ', String(position));
        const languageId = bracket.languageId;
        const reversedBracketRegex = bracket.reversedRegex;
        let count = -1;
        let totalCallCount = 0;
        const searchPrevMatchingBracketInRange = (lineNumber, lineText, searchStartOffset, searchEndOffset) => {
            while (true) {
                if (continueSearchPredicate && (++totalCallCount) % 100 === 0 && !continueSearchPredicate()) {
                    return BracketSearchCanceled.INSTANCE;
                }
                const r = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(reversedBracketRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (!r) {
                    break;
                }
                const hitText = lineText.substring(r.startColumn - 1, r.endColumn - 1).toLowerCase();
                if (bracket.isOpen(hitText)) {
                    count++;
                }
                else if (bracket.isClose(hitText)) {
                    count--;
                }
                if (count === 0) {
                    return r;
                }
                searchEndOffset = r.startColumn - 1;
            }
            return null;
        };
        for (let lineNumber = position.lineNumber; lineNumber >= 1; lineNumber--) {
            const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
            const tokenCount = lineTokens.getCount();
            const lineText = this.textModel.getLineContent(lineNumber);
            let tokenIndex = tokenCount - 1;
            let searchStartOffset = lineText.length;
            let searchEndOffset = lineText.length;
            if (lineNumber === position.lineNumber) {
                tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
                searchStartOffset = position.column - 1;
                searchEndOffset = position.column - 1;
            }
            let prevSearchInToken = true;
            for (; tokenIndex >= 0; tokenIndex--) {
                const searchInToken = (lineTokens.getLanguageId(tokenIndex) === languageId && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex)));
                if (searchInToken) {
                    // this token should be searched
                    if (prevSearchInToken) {
                        // the previous token should be searched, simply extend searchStartOffset
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                    }
                    else {
                        // the previous token should not be searched
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                }
                else {
                    // this token should not be searched
                    if (prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = searchPrevMatchingBracketInRange(lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return r;
                        }
                    }
                }
                prevSearchInToken = searchInToken;
            }
            if (prevSearchInToken && searchStartOffset !== searchEndOffset) {
                const r = searchPrevMatchingBracketInRange(lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (r) {
                    return r;
                }
            }
        }
        return null;
    }
    _findMatchingBracketDown(bracket, position, continueSearchPredicate) {
        // console.log('_findMatchingBracketDown: ', 'bracket: ', JSON.stringify(bracket), 'startPosition: ', String(position));
        const languageId = bracket.languageId;
        const bracketRegex = bracket.forwardRegex;
        let count = 1;
        let totalCallCount = 0;
        const searchNextMatchingBracketInRange = (lineNumber, lineText, searchStartOffset, searchEndOffset) => {
            while (true) {
                if (continueSearchPredicate && (++totalCallCount) % 100 === 0 && !continueSearchPredicate()) {
                    return BracketSearchCanceled.INSTANCE;
                }
                const r = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(bracketRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (!r) {
                    break;
                }
                const hitText = lineText.substring(r.startColumn - 1, r.endColumn - 1).toLowerCase();
                if (bracket.isOpen(hitText)) {
                    count++;
                }
                else if (bracket.isClose(hitText)) {
                    count--;
                }
                if (count === 0) {
                    return r;
                }
                searchStartOffset = r.endColumn - 1;
            }
            return null;
        };
        const lineCount = this.textModel.getLineCount();
        for (let lineNumber = position.lineNumber; lineNumber <= lineCount; lineNumber++) {
            const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
            const tokenCount = lineTokens.getCount();
            const lineText = this.textModel.getLineContent(lineNumber);
            let tokenIndex = 0;
            let searchStartOffset = 0;
            let searchEndOffset = 0;
            if (lineNumber === position.lineNumber) {
                tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
                searchStartOffset = position.column - 1;
                searchEndOffset = position.column - 1;
            }
            let prevSearchInToken = true;
            for (; tokenIndex < tokenCount; tokenIndex++) {
                const searchInToken = (lineTokens.getLanguageId(tokenIndex) === languageId && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex)));
                if (searchInToken) {
                    // this token should be searched
                    if (prevSearchInToken) {
                        // the previous token should be searched, simply extend searchEndOffset
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                    else {
                        // the previous token should not be searched
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                }
                else {
                    // this token should not be searched
                    if (prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = searchNextMatchingBracketInRange(lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return r;
                        }
                    }
                }
                prevSearchInToken = searchInToken;
            }
            if (prevSearchInToken && searchStartOffset !== searchEndOffset) {
                const r = searchNextMatchingBracketInRange(lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (r) {
                    return r;
                }
            }
        }
        return null;
    }
    findPrevBracket(_position) {
        var _a;
        const position = this.textModel.validatePosition(_position);
        if (this.canBuildAST) {
            this.bracketsRequested = true;
            this.updateBracketPairsTree();
            return ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.getFirstBracketBefore(position)) || null;
        }
        let languageId = null;
        let modeBrackets = null;
        let bracketConfig = null;
        for (let lineNumber = position.lineNumber; lineNumber >= 1; lineNumber--) {
            const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
            const tokenCount = lineTokens.getCount();
            const lineText = this.textModel.getLineContent(lineNumber);
            let tokenIndex = tokenCount - 1;
            let searchStartOffset = lineText.length;
            let searchEndOffset = lineText.length;
            if (lineNumber === position.lineNumber) {
                tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
                searchStartOffset = position.column - 1;
                searchEndOffset = position.column - 1;
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    bracketConfig = this.languageConfigurationService.getLanguageConfiguration(languageId).bracketsNew;
                }
            }
            let prevSearchInToken = true;
            for (; tokenIndex >= 0; tokenIndex--) {
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    // language id change!
                    if (modeBrackets && bracketConfig && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(modeBrackets.reversedRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return this._toFoundBracket(bracketConfig, r);
                        }
                        prevSearchInToken = false;
                    }
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    bracketConfig = this.languageConfigurationService.getLanguageConfiguration(languageId).bracketsNew;
                }
                const searchInToken = (!!modeBrackets && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex)));
                if (searchInToken) {
                    // this token should be searched
                    if (prevSearchInToken) {
                        // the previous token should be searched, simply extend searchStartOffset
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                    }
                    else {
                        // the previous token should not be searched
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                }
                else {
                    // this token should not be searched
                    if (bracketConfig && modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(modeBrackets.reversedRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return this._toFoundBracket(bracketConfig, r);
                        }
                    }
                }
                prevSearchInToken = searchInToken;
            }
            if (bracketConfig && modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                const r = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(modeBrackets.reversedRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (r) {
                    return this._toFoundBracket(bracketConfig, r);
                }
            }
        }
        return null;
    }
    findNextBracket(_position) {
        var _a;
        const position = this.textModel.validatePosition(_position);
        if (this.canBuildAST) {
            this.bracketsRequested = true;
            this.updateBracketPairsTree();
            return ((_a = this.bracketPairsTree.value) === null || _a === void 0 ? void 0 : _a.object.getFirstBracketAfter(position)) || null;
        }
        const lineCount = this.textModel.getLineCount();
        let languageId = null;
        let modeBrackets = null;
        let bracketConfig = null;
        for (let lineNumber = position.lineNumber; lineNumber <= lineCount; lineNumber++) {
            const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
            const tokenCount = lineTokens.getCount();
            const lineText = this.textModel.getLineContent(lineNumber);
            let tokenIndex = 0;
            let searchStartOffset = 0;
            let searchEndOffset = 0;
            if (lineNumber === position.lineNumber) {
                tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
                searchStartOffset = position.column - 1;
                searchEndOffset = position.column - 1;
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    bracketConfig = this.languageConfigurationService.getLanguageConfiguration(languageId).bracketsNew;
                }
            }
            let prevSearchInToken = true;
            for (; tokenIndex < tokenCount; tokenIndex++) {
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    // language id change!
                    if (bracketConfig && modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(modeBrackets.forwardRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return this._toFoundBracket(bracketConfig, r);
                        }
                        prevSearchInToken = false;
                    }
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    bracketConfig = this.languageConfigurationService.getLanguageConfiguration(languageId).bracketsNew;
                }
                const searchInToken = (!!modeBrackets && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex)));
                if (searchInToken) {
                    // this token should be searched
                    if (prevSearchInToken) {
                        // the previous token should be searched, simply extend searchEndOffset
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                    else {
                        // the previous token should not be searched
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                }
                else {
                    // this token should not be searched
                    if (bracketConfig && modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(modeBrackets.forwardRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return this._toFoundBracket(bracketConfig, r);
                        }
                    }
                }
                prevSearchInToken = searchInToken;
            }
            if (bracketConfig && modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                const r = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(modeBrackets.forwardRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (r) {
                    return this._toFoundBracket(bracketConfig, r);
                }
            }
        }
        return null;
    }
    findEnclosingBrackets(_position, maxDuration) {
        const position = this.textModel.validatePosition(_position);
        if (this.canBuildAST) {
            const range = core_range/* Range */.e.fromPositions(position);
            const bracketPair = this.getBracketPairsInRange(core_range/* Range */.e.fromPositions(position, position)).findLast((item) => item.closingBracketRange !== undefined && item.range.strictContainsRange(range));
            if (bracketPair) {
                return [bracketPair.openingBracketRange, bracketPair.closingBracketRange];
            }
            return null;
        }
        const continueSearchPredicate = createTimeBasedContinueBracketSearchPredicate(maxDuration);
        const lineCount = this.textModel.getLineCount();
        const savedCounts = new Map();
        let counts = [];
        const resetCounts = (languageId, modeBrackets) => {
            if (!savedCounts.has(languageId)) {
                const tmp = [];
                for (let i = 0, len = modeBrackets ? modeBrackets.brackets.length : 0; i < len; i++) {
                    tmp[i] = 0;
                }
                savedCounts.set(languageId, tmp);
            }
            counts = savedCounts.get(languageId);
        };
        let totalCallCount = 0;
        const searchInRange = (modeBrackets, lineNumber, lineText, searchStartOffset, searchEndOffset) => {
            while (true) {
                if (continueSearchPredicate && (++totalCallCount) % 100 === 0 && !continueSearchPredicate()) {
                    return BracketSearchCanceled.INSTANCE;
                }
                const r = richEditBrackets/* BracketsUtils */.Vr.findNextBracketInRange(modeBrackets.forwardRegex, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (!r) {
                    break;
                }
                const hitText = lineText.substring(r.startColumn - 1, r.endColumn - 1).toLowerCase();
                const bracket = modeBrackets.textIsBracket[hitText];
                if (bracket) {
                    if (bracket.isOpen(hitText)) {
                        counts[bracket.index]++;
                    }
                    else if (bracket.isClose(hitText)) {
                        counts[bracket.index]--;
                    }
                    if (counts[bracket.index] === -1) {
                        return this._matchFoundBracket(r, bracket, false, continueSearchPredicate);
                    }
                }
                searchStartOffset = r.endColumn - 1;
            }
            return null;
        };
        let languageId = null;
        let modeBrackets = null;
        for (let lineNumber = position.lineNumber; lineNumber <= lineCount; lineNumber++) {
            const lineTokens = this.textModel.tokenization.getLineTokens(lineNumber);
            const tokenCount = lineTokens.getCount();
            const lineText = this.textModel.getLineContent(lineNumber);
            let tokenIndex = 0;
            let searchStartOffset = 0;
            let searchEndOffset = 0;
            if (lineNumber === position.lineNumber) {
                tokenIndex = lineTokens.findTokenIndexAtOffset(position.column - 1);
                searchStartOffset = position.column - 1;
                searchEndOffset = position.column - 1;
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    resetCounts(languageId, modeBrackets);
                }
            }
            let prevSearchInToken = true;
            for (; tokenIndex < tokenCount; tokenIndex++) {
                const tokenLanguageId = lineTokens.getLanguageId(tokenIndex);
                if (languageId !== tokenLanguageId) {
                    // language id change!
                    if (modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = searchInRange(modeBrackets, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return stripBracketSearchCanceled(r);
                        }
                        prevSearchInToken = false;
                    }
                    languageId = tokenLanguageId;
                    modeBrackets = this.languageConfigurationService.getLanguageConfiguration(languageId).brackets;
                    resetCounts(languageId, modeBrackets);
                }
                const searchInToken = (!!modeBrackets && !(0,supports/* ignoreBracketsInToken */.Bu)(lineTokens.getStandardTokenType(tokenIndex)));
                if (searchInToken) {
                    // this token should be searched
                    if (prevSearchInToken) {
                        // the previous token should be searched, simply extend searchEndOffset
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                    else {
                        // the previous token should not be searched
                        searchStartOffset = lineTokens.getStartOffset(tokenIndex);
                        searchEndOffset = lineTokens.getEndOffset(tokenIndex);
                    }
                }
                else {
                    // this token should not be searched
                    if (modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                        const r = searchInRange(modeBrackets, lineNumber, lineText, searchStartOffset, searchEndOffset);
                        if (r) {
                            return stripBracketSearchCanceled(r);
                        }
                    }
                }
                prevSearchInToken = searchInToken;
            }
            if (modeBrackets && prevSearchInToken && searchStartOffset !== searchEndOffset) {
                const r = searchInRange(modeBrackets, lineNumber, lineText, searchStartOffset, searchEndOffset);
                if (r) {
                    return stripBracketSearchCanceled(r);
                }
            }
        }
        return null;
    }
    _toFoundBracket(bracketConfig, r) {
        if (!r) {
            return null;
        }
        let text = this.textModel.getValueInRange(r);
        text = text.toLowerCase();
        const bracketInfo = bracketConfig.getBracketInfo(text);
        if (!bracketInfo) {
            return null;
        }
        return {
            range: r,
            bracketInfo
        };
    }
}
function createDisposableRef(object, disposable) {
    return {
        object,
        dispose: () => disposable === null || disposable === void 0 ? void 0 : disposable.dispose(),
    };
}
function createTimeBasedContinueBracketSearchPredicate(maxDuration) {
    if (typeof maxDuration === 'undefined') {
        return () => true;
    }
    else {
        const startTime = Date.now();
        return () => {
            return (Date.now() - startTime <= maxDuration);
        };
    }
}
class BracketSearchCanceled {
    constructor() {
        this._searchCanceledBrand = undefined;
    }
}
BracketSearchCanceled.INSTANCE = new BracketSearchCanceled();
function stripBracketSearchCanceled(result) {
    if (result instanceof BracketSearchCanceled) {
        return null;
    }
    return result;
}


/***/ }),

/***/ 56091:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BH: function() { return /* binding */ TextAstNode; },
/* harmony export */   Dm: function() { return /* binding */ InvalidBracketAstNode; },
/* harmony export */   Kd: function() { return /* binding */ PairAstNode; },
/* harmony export */   Y0: function() { return /* binding */ ListAstNode; },
/* harmony export */   n2: function() { return /* binding */ BracketAstNode; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25702);
/* harmony import */ var _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7218);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97973);
/* harmony import */ var _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25401);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




/**
 * The base implementation for all AST nodes.
*/
class BaseAstNode {
    /**
     * The length of the entire node, which should equal the sum of lengths of all children.
    */
    get length() {
        return this._length;
    }
    constructor(length) {
        this._length = length;
    }
}
/**
 * Represents a bracket pair including its child (e.g. `{ ... }`).
 * Might be unclosed.
 * Immutable, if all children are immutable.
*/
class PairAstNode extends BaseAstNode {
    static create(openingBracket, child, closingBracket) {
        let length = openingBracket.length;
        if (child) {
            length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(length, child.length);
        }
        if (closingBracket) {
            length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(length, closingBracket.length);
        }
        return new PairAstNode(length, openingBracket, child, closingBracket, child ? child.missingOpeningBracketIds : _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty());
    }
    get kind() {
        return 2 /* AstNodeKind.Pair */;
    }
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 3;
    }
    getChild(idx) {
        switch (idx) {
            case 0: return this.openingBracket;
            case 1: return this.child;
            case 2: return this.closingBracket;
        }
        throw new Error('Invalid child index');
    }
    /**
     * Avoid using this property, it allocates an array!
    */
    get children() {
        const result = [];
        result.push(this.openingBracket);
        if (this.child) {
            result.push(this.child);
        }
        if (this.closingBracket) {
            result.push(this.closingBracket);
        }
        return result;
    }
    constructor(length, openingBracket, child, closingBracket, missingOpeningBracketIds) {
        super(length);
        this.openingBracket = openingBracket;
        this.child = child;
        this.closingBracket = closingBracket;
        this.missingOpeningBracketIds = missingOpeningBracketIds;
    }
    canBeReused(openBracketIds) {
        if (this.closingBracket === null) {
            // Unclosed pair ast nodes only
            // end at the end of the document
            // or when a parent node is closed.
            // This could be improved:
            // Only return false if some next token is neither "undefined" nor a bracket that closes a parent.
            return false;
        }
        if (openBracketIds.intersects(this.missingOpeningBracketIds)) {
            return false;
        }
        return true;
    }
    deepClone() {
        return new PairAstNode(this.length, this.openingBracket.deepClone(), this.child && this.child.deepClone(), this.closingBracket && this.closingBracket.deepClone(), this.missingOpeningBracketIds);
    }
    computeMinIndentation(offset, textModel) {
        return this.child ? this.child.computeMinIndentation((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(offset, this.openingBracket.length), textModel) : Number.MAX_SAFE_INTEGER;
    }
}
class ListAstNode extends BaseAstNode {
    /**
     * This method uses more memory-efficient list nodes that can only store 2 or 3 children.
    */
    static create23(item1, item2, item3, immutable = false) {
        let length = item1.length;
        let missingBracketIds = item1.missingOpeningBracketIds;
        if (item1.listHeight !== item2.listHeight) {
            throw new Error('Invalid list heights');
        }
        length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(length, item2.length);
        missingBracketIds = missingBracketIds.merge(item2.missingOpeningBracketIds);
        if (item3) {
            if (item1.listHeight !== item3.listHeight) {
                throw new Error('Invalid list heights');
            }
            length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(length, item3.length);
            missingBracketIds = missingBracketIds.merge(item3.missingOpeningBracketIds);
        }
        return immutable
            ? new Immutable23ListAstNode(length, item1.listHeight + 1, item1, item2, item3, missingBracketIds)
            : new TwoThreeListAstNode(length, item1.listHeight + 1, item1, item2, item3, missingBracketIds);
    }
    static getEmpty() {
        return new ImmutableArrayListAstNode(_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl, 0, [], _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty());
    }
    get kind() {
        return 4 /* AstNodeKind.List */;
    }
    get missingOpeningBracketIds() {
        return this._missingOpeningBracketIds;
    }
    /**
     * Use ListAstNode.create.
    */
    constructor(length, listHeight, _missingOpeningBracketIds) {
        super(length);
        this.listHeight = listHeight;
        this._missingOpeningBracketIds = _missingOpeningBracketIds;
        this.cachedMinIndentation = -1;
    }
    throwIfImmutable() {
        // NOOP
    }
    makeLastElementMutable() {
        this.throwIfImmutable();
        const childCount = this.childrenLength;
        if (childCount === 0) {
            return undefined;
        }
        const lastChild = this.getChild(childCount - 1);
        const mutable = lastChild.kind === 4 /* AstNodeKind.List */ ? lastChild.toMutable() : lastChild;
        if (lastChild !== mutable) {
            this.setChild(childCount - 1, mutable);
        }
        return mutable;
    }
    makeFirstElementMutable() {
        this.throwIfImmutable();
        const childCount = this.childrenLength;
        if (childCount === 0) {
            return undefined;
        }
        const firstChild = this.getChild(0);
        const mutable = firstChild.kind === 4 /* AstNodeKind.List */ ? firstChild.toMutable() : firstChild;
        if (firstChild !== mutable) {
            this.setChild(0, mutable);
        }
        return mutable;
    }
    canBeReused(openBracketIds) {
        if (openBracketIds.intersects(this.missingOpeningBracketIds)) {
            return false;
        }
        if (this.childrenLength === 0) {
            // Don't reuse empty lists.
            return false;
        }
        let lastChild = this;
        while (lastChild.kind === 4 /* AstNodeKind.List */) {
            const lastLength = lastChild.childrenLength;
            if (lastLength === 0) {
                // Empty lists should never be contained in other lists.
                throw new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BugIndicatingError */ .he();
            }
            lastChild = lastChild.getChild(lastLength - 1);
        }
        return lastChild.canBeReused(openBracketIds);
    }
    handleChildrenChanged() {
        this.throwIfImmutable();
        const count = this.childrenLength;
        let length = this.getChild(0).length;
        let unopenedBrackets = this.getChild(0).missingOpeningBracketIds;
        for (let i = 1; i < count; i++) {
            const child = this.getChild(i);
            length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(length, child.length);
            unopenedBrackets = unopenedBrackets.merge(child.missingOpeningBracketIds);
        }
        this._length = length;
        this._missingOpeningBracketIds = unopenedBrackets;
        this.cachedMinIndentation = -1;
    }
    computeMinIndentation(offset, textModel) {
        if (this.cachedMinIndentation !== -1) {
            return this.cachedMinIndentation;
        }
        let minIndentation = Number.MAX_SAFE_INTEGER;
        let childOffset = offset;
        for (let i = 0; i < this.childrenLength; i++) {
            const child = this.getChild(i);
            if (child) {
                minIndentation = Math.min(minIndentation, child.computeMinIndentation(childOffset, textModel));
                childOffset = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(childOffset, child.length);
            }
        }
        this.cachedMinIndentation = minIndentation;
        return minIndentation;
    }
}
class TwoThreeListAstNode extends ListAstNode {
    get childrenLength() {
        return this._item3 !== null ? 3 : 2;
    }
    getChild(idx) {
        switch (idx) {
            case 0: return this._item1;
            case 1: return this._item2;
            case 2: return this._item3;
        }
        throw new Error('Invalid child index');
    }
    setChild(idx, node) {
        switch (idx) {
            case 0:
                this._item1 = node;
                return;
            case 1:
                this._item2 = node;
                return;
            case 2:
                this._item3 = node;
                return;
        }
        throw new Error('Invalid child index');
    }
    get children() {
        return this._item3 ? [this._item1, this._item2, this._item3] : [this._item1, this._item2];
    }
    get item1() {
        return this._item1;
    }
    get item2() {
        return this._item2;
    }
    get item3() {
        return this._item3;
    }
    constructor(length, listHeight, _item1, _item2, _item3, missingOpeningBracketIds) {
        super(length, listHeight, missingOpeningBracketIds);
        this._item1 = _item1;
        this._item2 = _item2;
        this._item3 = _item3;
    }
    deepClone() {
        return new TwoThreeListAstNode(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3 ? this._item3.deepClone() : null, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(node) {
        if (this._item3) {
            throw new Error('Cannot append to a full (2,3) tree node');
        }
        this.throwIfImmutable();
        this._item3 = node;
        this.handleChildrenChanged();
    }
    unappendChild() {
        if (!this._item3) {
            throw new Error('Cannot remove from a non-full (2,3) tree node');
        }
        this.throwIfImmutable();
        const result = this._item3;
        this._item3 = null;
        this.handleChildrenChanged();
        return result;
    }
    prependChildOfSameHeight(node) {
        if (this._item3) {
            throw new Error('Cannot prepend to a full (2,3) tree node');
        }
        this.throwIfImmutable();
        this._item3 = this._item2;
        this._item2 = this._item1;
        this._item1 = node;
        this.handleChildrenChanged();
    }
    unprependChild() {
        if (!this._item3) {
            throw new Error('Cannot remove from a non-full (2,3) tree node');
        }
        this.throwIfImmutable();
        const result = this._item1;
        this._item1 = this._item2;
        this._item2 = this._item3;
        this._item3 = null;
        this.handleChildrenChanged();
        return result;
    }
    toMutable() {
        return this;
    }
}
/**
 * Immutable, if all children are immutable.
*/
class Immutable23ListAstNode extends TwoThreeListAstNode {
    toMutable() {
        return new TwoThreeListAstNode(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error('this instance is immutable');
    }
}
/**
 * For debugging.
*/
class ArrayListAstNode extends ListAstNode {
    get childrenLength() {
        return this._children.length;
    }
    getChild(idx) {
        return this._children[idx];
    }
    setChild(idx, child) {
        this._children[idx] = child;
    }
    get children() {
        return this._children;
    }
    constructor(length, listHeight, _children, missingOpeningBracketIds) {
        super(length, listHeight, missingOpeningBracketIds);
        this._children = _children;
    }
    deepClone() {
        const children = new Array(this._children.length);
        for (let i = 0; i < this._children.length; i++) {
            children[i] = this._children[i].deepClone();
        }
        return new ArrayListAstNode(this.length, this.listHeight, children, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(node) {
        this.throwIfImmutable();
        this._children.push(node);
        this.handleChildrenChanged();
    }
    unappendChild() {
        this.throwIfImmutable();
        const item = this._children.pop();
        this.handleChildrenChanged();
        return item;
    }
    prependChildOfSameHeight(node) {
        this.throwIfImmutable();
        this._children.unshift(node);
        this.handleChildrenChanged();
    }
    unprependChild() {
        this.throwIfImmutable();
        const item = this._children.shift();
        this.handleChildrenChanged();
        return item;
    }
    toMutable() {
        return this;
    }
}
/**
 * Immutable, if all children are immutable.
*/
class ImmutableArrayListAstNode extends ArrayListAstNode {
    toMutable() {
        return new ArrayListAstNode(this.length, this.listHeight, [...this.children], this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
        throw new Error('this instance is immutable');
    }
}
const emptyArray = [];
class ImmutableLeafAstNode extends BaseAstNode {
    get listHeight() {
        return 0;
    }
    get childrenLength() {
        return 0;
    }
    getChild(idx) {
        return null;
    }
    get children() {
        return emptyArray;
    }
    deepClone() {
        return this;
    }
}
class TextAstNode extends ImmutableLeafAstNode {
    get kind() {
        return 0 /* AstNodeKind.Text */;
    }
    get missingOpeningBracketIds() {
        return _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty();
    }
    canBeReused(_openedBracketIds) {
        return true;
    }
    computeMinIndentation(offset, textModel) {
        const start = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthToObj */ .Hw)(offset);
        // Text ast nodes don't have partial indentation (ensured by the tokenizer).
        // Thus, if this text node does not start at column 0, the first line cannot have any indentation at all.
        const startLineNumber = (start.columnCount === 0 ? start.lineCount : start.lineCount + 1) + 1;
        const endLineNumber = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthGetLineCount */ .W9)((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(offset, this.length)) + 1;
        let result = Number.MAX_SAFE_INTEGER;
        for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
            const firstNonWsColumn = textModel.getLineFirstNonWhitespaceColumn(lineNumber);
            const lineContent = textModel.getLineContent(lineNumber);
            if (firstNonWsColumn === 0) {
                continue;
            }
            const visibleColumn = _core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_1__/* .CursorColumns */ .i.visibleColumnFromColumn(lineContent, firstNonWsColumn, textModel.getOptions().tabSize);
            result = Math.min(result, visibleColumn);
        }
        return result;
    }
}
class BracketAstNode extends ImmutableLeafAstNode {
    static create(length, bracketInfo, bracketIds) {
        const node = new BracketAstNode(length, bracketInfo, bracketIds);
        return node;
    }
    get kind() {
        return 1 /* AstNodeKind.Bracket */;
    }
    get missingOpeningBracketIds() {
        return _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty();
    }
    constructor(length, bracketInfo, 
    /**
     * In case of a opening bracket, this is the id of the opening bracket.
     * In case of a closing bracket, this contains the ids of all opening brackets it can close.
    */
    bracketIds) {
        super(length);
        this.bracketInfo = bracketInfo;
        this.bracketIds = bracketIds;
    }
    get text() {
        return this.bracketInfo.bracketText;
    }
    get languageId() {
        return this.bracketInfo.languageId;
    }
    canBeReused(_openedBracketIds) {
        // These nodes could be reused,
        // but not in a general way.
        // Their parent may be reused.
        return false;
    }
    computeMinIndentation(offset, textModel) {
        return Number.MAX_SAFE_INTEGER;
    }
}
class InvalidBracketAstNode extends ImmutableLeafAstNode {
    get kind() {
        return 3 /* AstNodeKind.UnexpectedClosingBracket */;
    }
    constructor(closingBrackets, length) {
        super(length);
        this.missingOpeningBracketIds = closingBrackets;
    }
    canBeReused(openedBracketIds) {
        return !openedBracketIds.intersects(this.missingOpeningBracketIds);
    }
    computeMinIndentation(offset, textModel) {
        return Number.MAX_SAFE_INTEGER;
    }
}


/***/ }),

/***/ 34393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ TextEditInfo; },
/* harmony export */   Y: function() { return /* binding */ BeforeEditPositionMapper; }
/* harmony export */ });
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3981);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97973);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class TextEditInfo {
    static fromModelContentChanges(changes) {
        // Must be sorted in ascending order
        const edits = changes.map(c => {
            const range = _core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.lift(c.range);
            return new TextEditInfo((0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .positionToLength */ .PZ)(range.getStartPosition()), (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .positionToLength */ .PZ)(range.getEndPosition()), (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthOfString */ .oR)(c.text));
        }).reverse();
        return edits;
    }
    constructor(startOffset, endOffset, newLength) {
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.newLength = newLength;
    }
    toString() {
        return `[${(0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(this.startOffset)}...${(0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(this.endOffset)}) -> ${(0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(this.newLength)}`;
    }
}
class BeforeEditPositionMapper {
    /**
     * @param edits Must be sorted by offset in ascending order.
    */
    constructor(edits) {
        this.nextEditIdx = 0;
        this.deltaOldToNewLineCount = 0;
        this.deltaOldToNewColumnCount = 0;
        this.deltaLineIdxInOld = -1;
        this.edits = edits.map(edit => TextEditInfoCache.from(edit));
    }
    /**
     * @param offset Must be equal to or greater than the last offset this method has been called with.
    */
    getOffsetBeforeChange(offset) {
        this.adjustNextEdit(offset);
        return this.translateCurToOld(offset);
    }
    /**
     * @param offset Must be equal to or greater than the last offset this method has been called with.
     * Returns null if there is no edit anymore.
    */
    getDistanceToNextChange(offset) {
        this.adjustNextEdit(offset);
        const nextEdit = this.edits[this.nextEditIdx];
        const nextChangeOffset = nextEdit ? this.translateOldToCur(nextEdit.offsetObj) : null;
        if (nextChangeOffset === null) {
            return null;
        }
        return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthDiffNonNegative */ .BE)(offset, nextChangeOffset);
    }
    translateOldToCur(oldOffsetObj) {
        if (oldOffsetObj.lineCount === this.deltaLineIdxInOld) {
            return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .toLength */ .Hg)(oldOffsetObj.lineCount + this.deltaOldToNewLineCount, oldOffsetObj.columnCount + this.deltaOldToNewColumnCount);
        }
        else {
            return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .toLength */ .Hg)(oldOffsetObj.lineCount + this.deltaOldToNewLineCount, oldOffsetObj.columnCount);
        }
    }
    translateCurToOld(newOffset) {
        const offsetObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(newOffset);
        if (offsetObj.lineCount - this.deltaOldToNewLineCount === this.deltaLineIdxInOld) {
            return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .toLength */ .Hg)(offsetObj.lineCount - this.deltaOldToNewLineCount, offsetObj.columnCount - this.deltaOldToNewColumnCount);
        }
        else {
            return (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .toLength */ .Hg)(offsetObj.lineCount - this.deltaOldToNewLineCount, offsetObj.columnCount);
        }
    }
    adjustNextEdit(offset) {
        while (this.nextEditIdx < this.edits.length) {
            const nextEdit = this.edits[this.nextEditIdx];
            // After applying the edit, what is its end offset (considering all previous edits)?
            const nextEditEndOffsetInCur = this.translateOldToCur(nextEdit.endOffsetAfterObj);
            if ((0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthLessThanEqual */ .By)(nextEditEndOffsetInCur, offset)) {
                // We are after the edit, skip it
                this.nextEditIdx++;
                const nextEditEndOffsetInCurObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(nextEditEndOffsetInCur);
                // Before applying the edit, what is its end offset (considering all previous edits)?
                const nextEditEndOffsetBeforeInCurObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(this.translateOldToCur(nextEdit.endOffsetBeforeObj));
                const lineDelta = nextEditEndOffsetInCurObj.lineCount - nextEditEndOffsetBeforeInCurObj.lineCount;
                this.deltaOldToNewLineCount += lineDelta;
                const previousColumnDelta = this.deltaLineIdxInOld === nextEdit.endOffsetBeforeObj.lineCount ? this.deltaOldToNewColumnCount : 0;
                const columnDelta = nextEditEndOffsetInCurObj.columnCount - nextEditEndOffsetBeforeInCurObj.columnCount;
                this.deltaOldToNewColumnCount = previousColumnDelta + columnDelta;
                this.deltaLineIdxInOld = nextEdit.endOffsetBeforeObj.lineCount;
            }
            else {
                // We are in or before the edit.
                break;
            }
        }
    }
}
class TextEditInfoCache {
    static from(edit) {
        return new TextEditInfoCache(edit.startOffset, edit.endOffset, edit.newLength);
    }
    constructor(startOffset, endOffset, textLength) {
        this.endOffsetBeforeObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(endOffset);
        this.endOffsetAfterObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)((0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthAdd */ .Ii)(startOffset, textLength));
        this.offsetObj = (0,_length_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToObj */ .Hw)(startOffset);
    }
}


/***/ }),

/***/ 72417:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ LanguageAgnosticBracketTokens; }
/* harmony export */ });
/* unused harmony export BracketTokens */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _ast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56091);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97973);
/* harmony import */ var _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25401);
/* harmony import */ var _tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32834);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class BracketTokens {
    static createFromLanguage(configuration, denseKeyProvider) {
        function getId(bracketInfo) {
            return denseKeyProvider.getKey(`${bracketInfo.languageId}:::${bracketInfo.bracketText}`);
        }
        const map = new Map();
        for (const openingBracket of configuration.bracketsNew.openingBrackets) {
            const length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, openingBracket.bracketText.length);
            const openingTextId = getId(openingBracket);
            const bracketIds = _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty().add(openingTextId, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .identityKeyProvider */ .Qw);
            map.set(openingBracket.bracketText, new _tokenizer_js__WEBPACK_IMPORTED_MODULE_4__/* .Token */ .WU(length, 1 /* TokenKind.OpeningBracket */, openingTextId, bracketIds, _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .BracketAstNode */ .n2.create(length, openingBracket, bracketIds)));
        }
        for (const closingBracket of configuration.bracketsNew.closingBrackets) {
            const length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, closingBracket.bracketText.length);
            let bracketIds = _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty();
            const closingBrackets = closingBracket.getOpeningBrackets();
            for (const bracket of closingBrackets) {
                bracketIds = bracketIds.add(getId(bracket), _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .identityKeyProvider */ .Qw);
            }
            map.set(closingBracket.bracketText, new _tokenizer_js__WEBPACK_IMPORTED_MODULE_4__/* .Token */ .WU(length, 2 /* TokenKind.ClosingBracket */, getId(closingBrackets[0]), bracketIds, _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .BracketAstNode */ .n2.create(length, closingBracket, bracketIds)));
        }
        return new BracketTokens(map);
    }
    constructor(map) {
        this.map = map;
        this.hasRegExp = false;
        this._regExpGlobal = null;
    }
    getRegExpStr() {
        if (this.isEmpty) {
            return null;
        }
        else {
            const keys = [...this.map.keys()];
            keys.sort();
            keys.reverse();
            return keys.map(k => prepareBracketForRegExp(k)).join('|');
        }
    }
    /**
     * Returns null if there is no such regexp (because there are no brackets).
    */
    get regExpGlobal() {
        if (!this.hasRegExp) {
            const regExpStr = this.getRegExpStr();
            this._regExpGlobal = regExpStr ? new RegExp(regExpStr, 'gi') : null;
            this.hasRegExp = true;
        }
        return this._regExpGlobal;
    }
    getToken(value) {
        return this.map.get(value.toLowerCase());
    }
    findClosingTokenText(openingBracketIds) {
        for (const [closingText, info] of this.map) {
            if (info.kind === 2 /* TokenKind.ClosingBracket */ && info.bracketIds.intersects(openingBracketIds)) {
                return closingText;
            }
        }
        return undefined;
    }
    get isEmpty() {
        return this.map.size === 0;
    }
}
function prepareBracketForRegExp(str) {
    let escaped = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExpCharacters */ .ec)(str);
    // These bracket pair delimiters start or end with letters
    // see https://github.com/microsoft/vscode/issues/132162 https://github.com/microsoft/vscode/issues/150440
    if (/^[\w ]+/.test(str)) {
        escaped = `\\b${escaped}`;
    }
    if (/[\w ]+$/.test(str)) {
        escaped = `${escaped}\\b`;
    }
    return escaped;
}
class LanguageAgnosticBracketTokens {
    constructor(denseKeyProvider, getLanguageConfiguration) {
        this.denseKeyProvider = denseKeyProvider;
        this.getLanguageConfiguration = getLanguageConfiguration;
        this.languageIdToBracketTokens = new Map();
    }
    didLanguageChange(languageId) {
        // Report a change whenever the language configuration updates.
        return this.languageIdToBracketTokens.has(languageId);
    }
    getSingleLanguageBracketTokens(languageId) {
        let singleLanguageBracketTokens = this.languageIdToBracketTokens.get(languageId);
        if (!singleLanguageBracketTokens) {
            singleLanguageBracketTokens = BracketTokens.createFromLanguage(this.getLanguageConfiguration(languageId), this.denseKeyProvider);
            this.languageIdToBracketTokens.set(languageId, singleLanguageBracketTokens);
        }
        return singleLanguageBracketTokens;
    }
}


/***/ }),

/***/ 27172:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ combineTextEditInfos; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _beforeEditPositionMapper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34393);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97973);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function combineTextEditInfos(textEditInfoFirst, textEditInfoSecond) {
    if (textEditInfoFirst.length === 0) {
        return textEditInfoSecond;
    }
    if (textEditInfoSecond.length === 0) {
        return textEditInfoFirst;
    }
    // s0: State before any edits
    const s0ToS1Map = new _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .ArrayQueue */ .H9(toLengthMapping(textEditInfoFirst));
    // s1: State after first edit, but before second edit
    const s1ToS2Map = toLengthMapping(textEditInfoSecond);
    s1ToS2Map.push({ modified: false, lengthBefore: undefined, lengthAfter: undefined }); // Copy everything from old to new
    // s2: State after both edits
    let curItem = s0ToS1Map.dequeue();
    /**
     * @param s1Length Use undefined for length "infinity"
     */
    function nextS0ToS1MapWithS1LengthOf(s1Length) {
        if (s1Length === undefined) {
            const arr = s0ToS1Map.takeWhile(v => true) || [];
            if (curItem) {
                arr.unshift(curItem);
            }
            return arr;
        }
        const result = [];
        while (curItem && !(0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthIsZero */ .xd)(s1Length)) {
            const [item, remainingItem] = curItem.splitAt(s1Length);
            result.push(item);
            s1Length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthDiffNonNegative */ .BE)(item.lengthAfter, s1Length);
            curItem = remainingItem !== null && remainingItem !== void 0 ? remainingItem : s0ToS1Map.dequeue();
        }
        if (!(0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthIsZero */ .xd)(s1Length)) {
            result.push(new LengthMapping(false, s1Length, s1Length));
        }
        return result;
    }
    const result = [];
    function pushEdit(startOffset, endOffset, newLength) {
        if (result.length > 0 && (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthEquals */ .rM)(result[result.length - 1].endOffset, startOffset)) {
            const lastResult = result[result.length - 1];
            result[result.length - 1] = new _beforeEditPositionMapper_js__WEBPACK_IMPORTED_MODULE_1__/* .TextEditInfo */ .Q(lastResult.startOffset, endOffset, (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(lastResult.newLength, newLength));
        }
        else {
            result.push({ startOffset, endOffset, newLength });
        }
    }
    let s0offset = _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl;
    for (const s1ToS2 of s1ToS2Map) {
        const s0ToS1Map = nextS0ToS1MapWithS1LengthOf(s1ToS2.lengthBefore);
        if (s1ToS2.modified) {
            const s0Length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .sumLengths */ .tQ)(s0ToS1Map, s => s.lengthBefore);
            const s0EndOffset = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(s0offset, s0Length);
            pushEdit(s0offset, s0EndOffset, s1ToS2.lengthAfter);
            s0offset = s0EndOffset;
        }
        else {
            for (const s1 of s0ToS1Map) {
                const s0startOffset = s0offset;
                s0offset = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(s0offset, s1.lengthBefore);
                if (s1.modified) {
                    pushEdit(s0startOffset, s0offset, s1.lengthAfter);
                }
            }
        }
    }
    return result;
}
class LengthMapping {
    constructor(
    /**
     * If false, length before and length after equal.
     */
    modified, lengthBefore, lengthAfter) {
        this.modified = modified;
        this.lengthBefore = lengthBefore;
        this.lengthAfter = lengthAfter;
    }
    splitAt(lengthAfter) {
        const remainingLengthAfter = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthDiffNonNegative */ .BE)(lengthAfter, this.lengthAfter);
        if ((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthEquals */ .rM)(remainingLengthAfter, _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl)) {
            return [this, undefined];
        }
        else if (this.modified) {
            return [
                new LengthMapping(this.modified, this.lengthBefore, lengthAfter),
                new LengthMapping(this.modified, _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl, remainingLengthAfter)
            ];
        }
        else {
            return [
                new LengthMapping(this.modified, lengthAfter, lengthAfter),
                new LengthMapping(this.modified, remainingLengthAfter, remainingLengthAfter)
            ];
        }
    }
    toString() {
        return `${this.modified ? 'M' : 'U'}:${(0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthToObj */ .Hw)(this.lengthBefore)} -> ${(0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthToObj */ .Hw)(this.lengthAfter)}`;
    }
}
function toLengthMapping(textEditInfos) {
    const result = [];
    let lastOffset = _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl;
    for (const textEditInfo of textEditInfos) {
        const spaceLength = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthDiffNonNegative */ .BE)(lastOffset, textEditInfo.startOffset);
        if (!(0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthIsZero */ .xd)(spaceLength)) {
            result.push(new LengthMapping(false, spaceLength, spaceLength));
        }
        const lengthBefore = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthDiffNonNegative */ .BE)(textEditInfo.startOffset, textEditInfo.endOffset);
        result.push(new LengthMapping(true, lengthBefore, textEditInfo.newLength));
        lastOffset = textEditInfo.endOffset;
    }
    return result;
}


/***/ }),

/***/ 97973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BE: function() { return /* binding */ lengthDiffNonNegative; },
/* harmony export */   By: function() { return /* binding */ lengthLessThanEqual; },
/* harmony export */   F_: function() { return /* binding */ lengthGetColumnCountIfZeroLineCount; },
/* harmony export */   Hg: function() { return /* binding */ toLength; },
/* harmony export */   Hw: function() { return /* binding */ lengthToObj; },
/* harmony export */   Ii: function() { return /* binding */ lengthAdd; },
/* harmony export */   PZ: function() { return /* binding */ positionToLength; },
/* harmony export */   Qw: function() { return /* binding */ lengthsToRange; },
/* harmony export */   Uv: function() { return /* binding */ lengthOfRange; },
/* harmony export */   VR: function() { return /* binding */ lengthLessThan; },
/* harmony export */   W9: function() { return /* binding */ lengthGetLineCount; },
/* harmony export */   Zq: function() { return /* binding */ lengthGreaterThanEqual; },
/* harmony export */   av: function() { return /* binding */ lengthDiff; },
/* harmony export */   bP: function() { return /* binding */ lengthToPosition; },
/* harmony export */   oR: function() { return /* binding */ lengthOfString; },
/* harmony export */   rM: function() { return /* binding */ lengthEquals; },
/* harmony export */   tQ: function() { return /* binding */ sumLengths; },
/* harmony export */   xd: function() { return /* binding */ lengthIsZero; },
/* harmony export */   xl: function() { return /* binding */ lengthZero; }
/* harmony export */ });
/* unused harmony export LengthObj */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * Represents a non-negative length in terms of line and column count.
 * Prefer using {@link Length} for performance reasons.
*/
class LengthObj {
    constructor(lineCount, columnCount) {
        this.lineCount = lineCount;
        this.columnCount = columnCount;
    }
    toLength() {
        return toLength(this.lineCount, this.columnCount);
    }
    toString() {
        return `${this.lineCount},${this.columnCount}`;
    }
}
LengthObj.zero = new LengthObj(0, 0);
/**
 * The end must be greater than or equal to the start.
*/
function lengthDiff(startLineCount, startColumnCount, endLineCount, endColumnCount) {
    return (startLineCount !== endLineCount)
        ? toLength(endLineCount - startLineCount, endColumnCount)
        : toLength(0, endColumnCount - startColumnCount);
}
const lengthZero = 0;
function lengthIsZero(length) {
    return length === 0;
}
/*
 * We have 52 bits available in a JS number.
 * We use the upper 26 bits to store the line and the lower 26 bits to store the column.
 */
///*
const factor = Math.pow(2, 26);
/*/
const factor = 1000000;
// */
function toLength(lineCount, columnCount) {
    // llllllllllllllllllllllllllcccccccccccccccccccccccccc (52 bits)
    //       line count (26 bits)    column count (26 bits)
    // If there is no overflow (all values/sums below 2^26 = 67108864),
    // we have `toLength(lns1, cols1) + toLength(lns2, cols2) = toLength(lns1 + lns2, cols1 + cols2)`.
    return (lineCount * factor + columnCount);
}
function lengthToObj(length) {
    const l = length;
    const lineCount = Math.floor(l / factor);
    const columnCount = l - lineCount * factor;
    return new LengthObj(lineCount, columnCount);
}
function lengthGetLineCount(length) {
    return Math.floor(length / factor);
}
/**
 * Returns the amount of columns of the given length, assuming that it does not span any line.
*/
function lengthGetColumnCountIfZeroLineCount(length) {
    return length;
}
function lengthAdd(l1, l2) {
    let r = l1 + l2;
    if (l2 >= factor) {
        r = r - (l1 % factor);
    }
    return r;
}
function sumLengths(items, lengthFn) {
    return items.reduce((a, b) => lengthAdd(a, lengthFn(b)), lengthZero);
}
function lengthEquals(length1, length2) {
    return length1 === length2;
}
/**
 * Returns a non negative length `result` such that `lengthAdd(length1, result) = length2`, or zero if such length does not exist.
 */
function lengthDiffNonNegative(length1, length2) {
    const l1 = length1;
    const l2 = length2;
    const diff = l2 - l1;
    if (diff <= 0) {
        // line-count of length1 is higher than line-count of length2
        // or they are equal and column-count of length1 is higher than column-count of length2
        return lengthZero;
    }
    const lineCount1 = Math.floor(l1 / factor);
    const lineCount2 = Math.floor(l2 / factor);
    const colCount2 = l2 - lineCount2 * factor;
    if (lineCount1 === lineCount2) {
        const colCount1 = l1 - lineCount1 * factor;
        return toLength(0, colCount2 - colCount1);
    }
    else {
        return toLength(lineCount2 - lineCount1, colCount2);
    }
}
function lengthLessThan(length1, length2) {
    // First, compare line counts, then column counts.
    return length1 < length2;
}
function lengthLessThanEqual(length1, length2) {
    return length1 <= length2;
}
function lengthGreaterThanEqual(length1, length2) {
    return length1 >= length2;
}
function lengthToPosition(length) {
    const l = length;
    const lineCount = Math.floor(l / factor);
    const colCount = l - lineCount * factor;
    return new _core_position_js__WEBPACK_IMPORTED_MODULE_1__/* .Position */ .L(lineCount + 1, colCount + 1);
}
function positionToLength(position) {
    return toLength(position.lineNumber - 1, position.column - 1);
}
function lengthsToRange(lengthStart, lengthEnd) {
    const l = lengthStart;
    const lineCount = Math.floor(l / factor);
    const colCount = l - lineCount * factor;
    const l2 = lengthEnd;
    const lineCount2 = Math.floor(l2 / factor);
    const colCount2 = l2 - lineCount2 * factor;
    return new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineCount + 1, colCount + 1, lineCount2 + 1, colCount2 + 1);
}
function lengthOfRange(range) {
    if (range.startLineNumber === range.endLineNumber) {
        return new LengthObj(0, range.endColumn - range.startColumn);
    }
    else {
        return new LengthObj(range.endLineNumber - range.startLineNumber, range.endColumn - 1);
    }
}
function lengthOfString(str) {
    const lines = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .splitLines */ .uq)(str);
    return toLength(lines.length - 1, lines[lines.length - 1].length);
}


/***/ }),

/***/ 974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w: function() { return /* binding */ parseDocument; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/ast.js
var ast = __webpack_require__(56091);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js
var beforeEditPositionMapper = __webpack_require__(34393);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/smallImmutableSet.js
var smallImmutableSet = __webpack_require__(25401);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/length.js
var bracketPairsTree_length = __webpack_require__(97973);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/concat23Trees.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Concatenates a list of (2,3) AstNode's into a single (2,3) AstNode.
 * This mutates the items of the input array!
 * If all items have the same height, this method has runtime O(items.length).
 * Otherwise, it has runtime O(items.length * max(log(items.length), items.max(i => i.height))).
*/
function concat23Trees(items) {
    if (items.length === 0) {
        return null;
    }
    if (items.length === 1) {
        return items[0];
    }
    let i = 0;
    /**
     * Reads nodes of same height and concatenates them to a single node.
    */
    function readNode() {
        if (i >= items.length) {
            return null;
        }
        const start = i;
        const height = items[start].listHeight;
        i++;
        while (i < items.length && items[i].listHeight === height) {
            i++;
        }
        if (i - start >= 2) {
            return concat23TreesOfSameHeight(start === 0 && i === items.length ? items : items.slice(start, i), false);
        }
        else {
            return items[start];
        }
    }
    // The items might not have the same height.
    // We merge all items by using a binary concat operator.
    let first = readNode(); // There must be a first item
    let second = readNode();
    if (!second) {
        return first;
    }
    for (let item = readNode(); item; item = readNode()) {
        // Prefer concatenating smaller trees, as the runtime of concat depends on the tree height.
        if (heightDiff(first, second) <= heightDiff(second, item)) {
            first = concat(first, second);
            second = item;
        }
        else {
            second = concat(second, item);
        }
    }
    const result = concat(first, second);
    return result;
}
function concat23TreesOfSameHeight(items, createImmutableLists = false) {
    if (items.length === 0) {
        return null;
    }
    if (items.length === 1) {
        return items[0];
    }
    let length = items.length;
    // All trees have same height, just create parent nodes.
    while (length > 3) {
        const newLength = length >> 1;
        for (let i = 0; i < newLength; i++) {
            const j = i << 1;
            items[i] = ast/* ListAstNode */.Y0.create23(items[j], items[j + 1], j + 3 === length ? items[j + 2] : null, createImmutableLists);
        }
        length = newLength;
    }
    return ast/* ListAstNode */.Y0.create23(items[0], items[1], length >= 3 ? items[2] : null, createImmutableLists);
}
function heightDiff(node1, node2) {
    return Math.abs(node1.listHeight - node2.listHeight);
}
function concat(node1, node2) {
    if (node1.listHeight === node2.listHeight) {
        return ast/* ListAstNode */.Y0.create23(node1, node2, null, false);
    }
    else if (node1.listHeight > node2.listHeight) {
        // node1 is the tree we want to insert into
        return append(node1, node2);
    }
    else {
        return prepend(node2, node1);
    }
}
/**
 * Appends the given node to the end of this (2,3) tree.
 * Returns the new root.
*/
function append(list, nodeToAppend) {
    list = list.toMutable();
    let curNode = list;
    const parents = [];
    let nodeToAppendOfCorrectHeight;
    while (true) {
        // assert nodeToInsert.listHeight <= curNode.listHeight
        if (nodeToAppend.listHeight === curNode.listHeight) {
            nodeToAppendOfCorrectHeight = nodeToAppend;
            break;
        }
        // assert 0 <= nodeToInsert.listHeight < curNode.listHeight
        if (curNode.kind !== 4 /* AstNodeKind.List */) {
            throw new Error('unexpected');
        }
        parents.push(curNode);
        // assert 2 <= curNode.childrenLength <= 3
        curNode = curNode.makeLastElementMutable();
    }
    // assert nodeToAppendOfCorrectHeight!.listHeight === curNode.listHeight
    for (let i = parents.length - 1; i >= 0; i--) {
        const parent = parents[i];
        if (nodeToAppendOfCorrectHeight) {
            // Can we take the element?
            if (parent.childrenLength >= 3) {
                // assert parent.childrenLength === 3 && parent.listHeight === nodeToAppendOfCorrectHeight.listHeight + 1
                // we need to split to maintain (2,3)-tree property.
                // Send the third element + the new element to the parent.
                nodeToAppendOfCorrectHeight = ast/* ListAstNode */.Y0.create23(parent.unappendChild(), nodeToAppendOfCorrectHeight, null, false);
            }
            else {
                parent.appendChildOfSameHeight(nodeToAppendOfCorrectHeight);
                nodeToAppendOfCorrectHeight = undefined;
            }
        }
        else {
            parent.handleChildrenChanged();
        }
    }
    if (nodeToAppendOfCorrectHeight) {
        return ast/* ListAstNode */.Y0.create23(list, nodeToAppendOfCorrectHeight, null, false);
    }
    else {
        return list;
    }
}
/**
 * Prepends the given node to the end of this (2,3) tree.
 * Returns the new root.
*/
function prepend(list, nodeToAppend) {
    list = list.toMutable();
    let curNode = list;
    const parents = [];
    // assert nodeToInsert.listHeight <= curNode.listHeight
    while (nodeToAppend.listHeight !== curNode.listHeight) {
        // assert 0 <= nodeToInsert.listHeight < curNode.listHeight
        if (curNode.kind !== 4 /* AstNodeKind.List */) {
            throw new Error('unexpected');
        }
        parents.push(curNode);
        // assert 2 <= curNode.childrenFast.length <= 3
        curNode = curNode.makeFirstElementMutable();
    }
    let nodeToPrependOfCorrectHeight = nodeToAppend;
    // assert nodeToAppendOfCorrectHeight!.listHeight === curNode.listHeight
    for (let i = parents.length - 1; i >= 0; i--) {
        const parent = parents[i];
        if (nodeToPrependOfCorrectHeight) {
            // Can we take the element?
            if (parent.childrenLength >= 3) {
                // assert parent.childrenLength === 3 && parent.listHeight === nodeToAppendOfCorrectHeight.listHeight + 1
                // we need to split to maintain (2,3)-tree property.
                // Send the third element + the new element to the parent.
                nodeToPrependOfCorrectHeight = ast/* ListAstNode */.Y0.create23(nodeToPrependOfCorrectHeight, parent.unprependChild(), null, false);
            }
            else {
                parent.prependChildOfSameHeight(nodeToPrependOfCorrectHeight);
                nodeToPrependOfCorrectHeight = undefined;
            }
        }
        else {
            parent.handleChildrenChanged();
        }
    }
    if (nodeToPrependOfCorrectHeight) {
        return ast/* ListAstNode */.Y0.create23(nodeToPrependOfCorrectHeight, list, null, false);
    }
    else {
        return list;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/nodeReader.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Allows to efficiently find a longest child at a given offset in a fixed node.
 * The requested offsets must increase monotonously.
*/
class NodeReader {
    constructor(node) {
        this.lastOffset = bracketPairsTree_length/* lengthZero */.xl;
        this.nextNodes = [node];
        this.offsets = [bracketPairsTree_length/* lengthZero */.xl];
        this.idxs = [];
    }
    /**
     * Returns the longest node at `offset` that satisfies the predicate.
     * @param offset must be greater than or equal to the last offset this method has been called with!
    */
    readLongestNodeAt(offset, predicate) {
        if ((0,bracketPairsTree_length/* lengthLessThan */.VR)(offset, this.lastOffset)) {
            throw new Error('Invalid offset');
        }
        this.lastOffset = offset;
        // Find the longest node of all those that are closest to the current offset.
        while (true) {
            const curNode = lastOrUndefined(this.nextNodes);
            if (!curNode) {
                return undefined;
            }
            const curNodeOffset = lastOrUndefined(this.offsets);
            if ((0,bracketPairsTree_length/* lengthLessThan */.VR)(offset, curNodeOffset)) {
                // The next best node is not here yet.
                // The reader must advance before a cached node is hit.
                return undefined;
            }
            if ((0,bracketPairsTree_length/* lengthLessThan */.VR)(curNodeOffset, offset)) {
                // The reader is ahead of the current node.
                if ((0,bracketPairsTree_length/* lengthAdd */.Ii)(curNodeOffset, curNode.length) <= offset) {
                    // The reader is after the end of the current node.
                    this.nextNodeAfterCurrent();
                }
                else {
                    // The reader is somewhere in the current node.
                    const nextChildIdx = getNextChildIdx(curNode);
                    if (nextChildIdx !== -1) {
                        // Go to the first child and repeat.
                        this.nextNodes.push(curNode.getChild(nextChildIdx));
                        this.offsets.push(curNodeOffset);
                        this.idxs.push(nextChildIdx);
                    }
                    else {
                        // We don't have children
                        this.nextNodeAfterCurrent();
                    }
                }
            }
            else {
                // readerOffsetBeforeChange === curNodeOffset
                if (predicate(curNode)) {
                    this.nextNodeAfterCurrent();
                    return curNode;
                }
                else {
                    const nextChildIdx = getNextChildIdx(curNode);
                    // look for shorter node
                    if (nextChildIdx === -1) {
                        // There is no shorter node.
                        this.nextNodeAfterCurrent();
                        return undefined;
                    }
                    else {
                        // Descend into first child & repeat.
                        this.nextNodes.push(curNode.getChild(nextChildIdx));
                        this.offsets.push(curNodeOffset);
                        this.idxs.push(nextChildIdx);
                    }
                }
            }
        }
    }
    // Navigates to the longest node that continues after the current node.
    nextNodeAfterCurrent() {
        while (true) {
            const currentOffset = lastOrUndefined(this.offsets);
            const currentNode = lastOrUndefined(this.nextNodes);
            this.nextNodes.pop();
            this.offsets.pop();
            if (this.idxs.length === 0) {
                // We just popped the root node, there is no next node.
                break;
            }
            // Parent is not undefined, because idxs is not empty
            const parent = lastOrUndefined(this.nextNodes);
            const nextChildIdx = getNextChildIdx(parent, this.idxs[this.idxs.length - 1]);
            if (nextChildIdx !== -1) {
                this.nextNodes.push(parent.getChild(nextChildIdx));
                this.offsets.push((0,bracketPairsTree_length/* lengthAdd */.Ii)(currentOffset, currentNode.length));
                this.idxs[this.idxs.length - 1] = nextChildIdx;
                break;
            }
            else {
                this.idxs.pop();
            }
            // We fully consumed the parent.
            // Current node is now parent, so call nextNodeAfterCurrent again
        }
    }
}
function getNextChildIdx(node, curIdx = -1) {
    while (true) {
        curIdx++;
        if (curIdx >= node.childrenLength) {
            return -1;
        }
        if (node.getChild(curIdx)) {
            return curIdx;
        }
    }
}
function lastOrUndefined(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/parser.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






/**
 * Non incrementally built ASTs are immutable.
*/
function parseDocument(tokenizer, edits, oldNode, createImmutableLists) {
    const parser = new Parser(tokenizer, edits, oldNode, createImmutableLists);
    return parser.parseDocument();
}
/**
 * Non incrementally built ASTs are immutable.
*/
class Parser {
    constructor(tokenizer, edits, oldNode, createImmutableLists) {
        this.tokenizer = tokenizer;
        this.createImmutableLists = createImmutableLists;
        this._itemsConstructed = 0;
        this._itemsFromCache = 0;
        if (oldNode && createImmutableLists) {
            throw new Error('Not supported');
        }
        this.oldNodeReader = oldNode ? new NodeReader(oldNode) : undefined;
        this.positionMapper = new beforeEditPositionMapper/* BeforeEditPositionMapper */.Y(edits);
    }
    parseDocument() {
        this._itemsConstructed = 0;
        this._itemsFromCache = 0;
        let result = this.parseList(smallImmutableSet/* SmallImmutableSet */.tS.getEmpty(), 0);
        if (!result) {
            result = ast/* ListAstNode */.Y0.getEmpty();
        }
        return result;
    }
    parseList(openedBracketIds, level) {
        const items = [];
        while (true) {
            let child = this.tryReadChildFromCache(openedBracketIds);
            if (!child) {
                const token = this.tokenizer.peek();
                if (!token ||
                    (token.kind === 2 /* TokenKind.ClosingBracket */ &&
                        token.bracketIds.intersects(openedBracketIds))) {
                    break;
                }
                child = this.parseChild(openedBracketIds, level + 1);
            }
            if (child.kind === 4 /* AstNodeKind.List */ && child.childrenLength === 0) {
                continue;
            }
            items.push(child);
        }
        // When there is no oldNodeReader, all items are created from scratch and must have the same height.
        const result = this.oldNodeReader ? concat23Trees(items) : concat23TreesOfSameHeight(items, this.createImmutableLists);
        return result;
    }
    tryReadChildFromCache(openedBracketIds) {
        if (this.oldNodeReader) {
            const maxCacheableLength = this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
            if (maxCacheableLength === null || !(0,bracketPairsTree_length/* lengthIsZero */.xd)(maxCacheableLength)) {
                const cachedNode = this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset), curNode => {
                    // The edit could extend the ending token, thus we cannot re-use nodes that touch the edit.
                    // If there is no edit anymore, we can re-use the node in any case.
                    if (maxCacheableLength !== null && !(0,bracketPairsTree_length/* lengthLessThan */.VR)(curNode.length, maxCacheableLength)) {
                        // Either the node contains edited text or touches edited text.
                        // In the latter case, brackets might have been extended (`end` -> `ending`), so even touching nodes cannot be reused.
                        return false;
                    }
                    const canBeReused = curNode.canBeReused(openedBracketIds);
                    return canBeReused;
                });
                if (cachedNode) {
                    this._itemsFromCache++;
                    this.tokenizer.skip(cachedNode.length);
                    return cachedNode;
                }
            }
        }
        return undefined;
    }
    parseChild(openedBracketIds, level) {
        this._itemsConstructed++;
        const token = this.tokenizer.read();
        switch (token.kind) {
            case 2 /* TokenKind.ClosingBracket */:
                return new ast/* InvalidBracketAstNode */.Dm(token.bracketIds, token.length);
            case 0 /* TokenKind.Text */:
                return token.astNode;
            case 1 /* TokenKind.OpeningBracket */: {
                if (level > 300) {
                    // To prevent stack overflows
                    return new ast/* TextAstNode */.BH(token.length);
                }
                const set = openedBracketIds.merge(token.bracketIds);
                const child = this.parseList(set, level + 1);
                const nextToken = this.tokenizer.peek();
                if (nextToken &&
                    nextToken.kind === 2 /* TokenKind.ClosingBracket */ &&
                    (nextToken.bracketId === token.bracketId || nextToken.bracketIds.intersects(token.bracketIds))) {
                    this.tokenizer.read();
                    return ast/* PairAstNode */.Kd.create(token.astNode, child, nextToken.astNode);
                }
                else {
                    return ast/* PairAstNode */.Kd.create(token.astNode, child, null);
                }
            }
            default:
                throw new Error('unexpected');
        }
    }
}


/***/ }),

/***/ 25401:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FE: function() { return /* binding */ DenseKeyProvider; },
/* harmony export */   Qw: function() { return /* binding */ identityKeyProvider; },
/* harmony export */   tS: function() { return /* binding */ SmallImmutableSet; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const emptyArr = [];
/**
 * Represents an immutable set that works best for a small number of elements (less than 32).
 * It uses bits to encode element membership efficiently.
*/
class SmallImmutableSet {
    static create(items, additionalItems) {
        if (items <= 128 && additionalItems.length === 0) {
            // We create a cache of 128=2^7 elements to cover all sets with up to 7 (dense) elements.
            let cached = SmallImmutableSet.cache[items];
            if (!cached) {
                cached = new SmallImmutableSet(items, additionalItems);
                SmallImmutableSet.cache[items] = cached;
            }
            return cached;
        }
        return new SmallImmutableSet(items, additionalItems);
    }
    static getEmpty() {
        return this.empty;
    }
    constructor(items, additionalItems) {
        this.items = items;
        this.additionalItems = additionalItems;
    }
    add(value, keyProvider) {
        const key = keyProvider.getKey(value);
        let idx = key >> 5; // divided by 32
        if (idx === 0) {
            // fast path
            const newItem = (1 << key) | this.items;
            if (newItem === this.items) {
                return this;
            }
            return SmallImmutableSet.create(newItem, this.additionalItems);
        }
        idx--;
        const newItems = this.additionalItems.slice(0);
        while (newItems.length < idx) {
            newItems.push(0);
        }
        newItems[idx] |= 1 << (key & 31);
        return SmallImmutableSet.create(this.items, newItems);
    }
    merge(other) {
        const merged = this.items | other.items;
        if (this.additionalItems === emptyArr && other.additionalItems === emptyArr) {
            // fast path
            if (merged === this.items) {
                return this;
            }
            if (merged === other.items) {
                return other;
            }
            return SmallImmutableSet.create(merged, emptyArr);
        }
        // This can be optimized, but it's not a common case
        const newItems = [];
        for (let i = 0; i < Math.max(this.additionalItems.length, other.additionalItems.length); i++) {
            const item1 = this.additionalItems[i] || 0;
            const item2 = other.additionalItems[i] || 0;
            newItems.push(item1 | item2);
        }
        return SmallImmutableSet.create(merged, newItems);
    }
    intersects(other) {
        if ((this.items & other.items) !== 0) {
            return true;
        }
        for (let i = 0; i < Math.min(this.additionalItems.length, other.additionalItems.length); i++) {
            if ((this.additionalItems[i] & other.additionalItems[i]) !== 0) {
                return true;
            }
        }
        return false;
    }
}
SmallImmutableSet.cache = new Array(129);
SmallImmutableSet.empty = SmallImmutableSet.create(0, emptyArr);
const identityKeyProvider = {
    getKey(value) {
        return value;
    }
};
/**
 * Assigns values a unique incrementing key.
*/
class DenseKeyProvider {
    constructor() {
        this.items = new Map();
    }
    getKey(value) {
        let existing = this.items.get(value);
        if (existing === undefined) {
            existing = this.items.size;
            this.items.set(value, existing);
        }
        return existing;
    }
}


/***/ }),

/***/ 32834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WU: function() { return /* binding */ Token; },
/* harmony export */   g: function() { return /* binding */ FastTokenizer; },
/* harmony export */   xH: function() { return /* binding */ TextBufferTokenizer; }
/* harmony export */ });
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25702);
/* harmony import */ var _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23124);
/* harmony import */ var _ast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56091);
/* harmony import */ var _length_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97973);
/* harmony import */ var _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25401);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class Token {
    constructor(length, kind, 
    /**
     * If this token is an opening bracket, this is the id of the opening bracket.
     * If this token is a closing bracket, this is the id of the first opening bracket that is closed by this bracket.
     * Otherwise, it is -1.
     */
    bracketId, 
    /**
     * If this token is an opening bracket, this just contains `bracketId`.
     * If this token is a closing bracket, this lists all opening bracket ids, that it closes.
     * Otherwise, it is empty.
     */
    bracketIds, astNode) {
        this.length = length;
        this.kind = kind;
        this.bracketId = bracketId;
        this.bracketIds = bracketIds;
        this.astNode = astNode;
    }
}
class TextBufferTokenizer {
    constructor(textModel, bracketTokens) {
        this.textModel = textModel;
        this.bracketTokens = bracketTokens;
        this.reader = new NonPeekableTextBufferTokenizer(this.textModel, this.bracketTokens);
        this._offset = _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl;
        this.didPeek = false;
        this.peeked = null;
        this.textBufferLineCount = textModel.getLineCount();
        this.textBufferLastLineLength = textModel.getLineLength(this.textBufferLineCount);
    }
    get offset() {
        return this._offset;
    }
    get length() {
        return (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(this.textBufferLineCount - 1, this.textBufferLastLineLength);
    }
    skip(length) {
        this.didPeek = false;
        this._offset = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(this._offset, length);
        const obj = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthToObj */ .Hw)(this._offset);
        this.reader.setPosition(obj.lineCount, obj.columnCount);
    }
    read() {
        let token;
        if (this.peeked) {
            this.didPeek = false;
            token = this.peeked;
        }
        else {
            token = this.reader.read();
        }
        if (token) {
            this._offset = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthAdd */ .Ii)(this._offset, token.length);
        }
        return token;
    }
    peek() {
        if (!this.didPeek) {
            this.peeked = this.reader.read();
            this.didPeek = true;
        }
        return this.peeked;
    }
}
/**
 * Does not support peek.
*/
class NonPeekableTextBufferTokenizer {
    constructor(textModel, bracketTokens) {
        this.textModel = textModel;
        this.bracketTokens = bracketTokens;
        this.lineIdx = 0;
        this.line = null;
        this.lineCharOffset = 0;
        this.lineTokens = null;
        this.lineTokenOffset = 0;
        /** Must be a zero line token. The end of the document cannot be peeked. */
        this.peekedToken = null;
        this.textBufferLineCount = textModel.getLineCount();
        this.textBufferLastLineLength = textModel.getLineLength(this.textBufferLineCount);
    }
    setPosition(lineIdx, column) {
        // We must not jump into a token!
        if (lineIdx === this.lineIdx) {
            this.lineCharOffset = column;
            if (this.line !== null) {
                this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
            }
        }
        else {
            this.lineIdx = lineIdx;
            this.lineCharOffset = column;
            this.line = null;
        }
        this.peekedToken = null;
    }
    read() {
        if (this.peekedToken) {
            const token = this.peekedToken;
            this.peekedToken = null;
            this.lineCharOffset += (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthGetColumnCountIfZeroLineCount */ .F_)(token.length);
            return token;
        }
        if (this.lineIdx > this.textBufferLineCount - 1 || (this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength)) {
            // We are after the end
            return null;
        }
        if (this.line === null) {
            this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1);
            this.line = this.lineTokens.getLineContent();
            this.lineTokenOffset = this.lineCharOffset === 0 ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset);
        }
        const startLineIdx = this.lineIdx;
        const startLineCharOffset = this.lineCharOffset;
        // limits the length of text tokens.
        // If text tokens get too long, incremental updates will be slow
        let lengthHeuristic = 0;
        while (true) {
            const lineTokens = this.lineTokens;
            const tokenCount = lineTokens.getCount();
            let peekedBracketToken = null;
            if (this.lineTokenOffset < tokenCount) {
                const tokenMetadata = lineTokens.getMetadata(this.lineTokenOffset);
                while (this.lineTokenOffset + 1 < tokenCount && tokenMetadata === lineTokens.getMetadata(this.lineTokenOffset + 1)) {
                    // Skip tokens that are identical.
                    // Sometimes, (bracket) identifiers are split up into multiple tokens.
                    this.lineTokenOffset++;
                }
                const isOther = _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_4__/* .TokenMetadata */ .N.getTokenType(tokenMetadata) === 0 /* StandardTokenType.Other */;
                const containsBracketType = _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_4__/* .TokenMetadata */ .N.containsBalancedBrackets(tokenMetadata);
                const endOffset = lineTokens.getEndOffset(this.lineTokenOffset);
                // Is there a bracket token next? Only consume text.
                if (containsBracketType && isOther && this.lineCharOffset < endOffset) {
                    const languageId = lineTokens.getLanguageId(this.lineTokenOffset);
                    const text = this.line.substring(this.lineCharOffset, endOffset);
                    const brackets = this.bracketTokens.getSingleLanguageBracketTokens(languageId);
                    const regexp = brackets.regExpGlobal;
                    if (regexp) {
                        regexp.lastIndex = 0;
                        const match = regexp.exec(text);
                        if (match) {
                            peekedBracketToken = brackets.getToken(match[0]);
                            if (peekedBracketToken) {
                                // Consume leading text of the token
                                this.lineCharOffset += match.index;
                            }
                        }
                    }
                }
                lengthHeuristic += endOffset - this.lineCharOffset;
                if (peekedBracketToken) {
                    // Don't skip the entire token, as a single token could contain multiple brackets.
                    if (startLineIdx !== this.lineIdx || startLineCharOffset !== this.lineCharOffset) {
                        // There is text before the bracket
                        this.peekedToken = peekedBracketToken;
                        break;
                    }
                    else {
                        // Consume the peeked token
                        this.lineCharOffset += (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthGetColumnCountIfZeroLineCount */ .F_)(peekedBracketToken.length);
                        return peekedBracketToken;
                    }
                }
                else {
                    // Skip the entire token, as the token contains no brackets at all.
                    this.lineTokenOffset++;
                    this.lineCharOffset = endOffset;
                }
            }
            else {
                if (this.lineIdx === this.textBufferLineCount - 1) {
                    break;
                }
                this.lineIdx++;
                this.lineTokens = this.textModel.tokenization.getLineTokens(this.lineIdx + 1);
                this.lineTokenOffset = 0;
                this.line = this.lineTokens.getLineContent();
                this.lineCharOffset = 0;
                lengthHeuristic += 33; // max 1000/33 = 30 lines
                // This limits the amount of work to recompute min-indentation
                if (lengthHeuristic > 1000) {
                    // only break (automatically) at the end of line.
                    break;
                }
            }
            if (lengthHeuristic > 1500) {
                // Eventually break regardless of the line length so that
                // very long lines do not cause bad performance.
                // This effective limits max indentation to 500, as
                // indentation is not computed across multiple text nodes.
                break;
            }
        }
        // If a token contains some proper indentation, it also contains \n{INDENTATION+}(?!{INDENTATION}),
        // unless the line is too long.
        // Thus, the min indentation of the document is the minimum min indentation of every text node.
        const length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthDiff */ .av)(startLineIdx, startLineCharOffset, this.lineIdx, this.lineCharOffset);
        return new Token(length, 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH(length));
    }
}
class FastTokenizer {
    constructor(text, brackets) {
        this.text = text;
        this._offset = _length_js__WEBPACK_IMPORTED_MODULE_2__/* .lengthZero */ .xl;
        this.idx = 0;
        const regExpStr = brackets.getRegExpStr();
        const regexp = regExpStr ? new RegExp(regExpStr + '|\n', 'gi') : null;
        const tokens = [];
        let match;
        let curLineCount = 0;
        let lastLineBreakOffset = 0;
        let lastTokenEndOffset = 0;
        let lastTokenEndLine = 0;
        const smallTextTokens0Line = [];
        for (let i = 0; i < 60; i++) {
            smallTextTokens0Line.push(new Token((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, i), 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, i))));
        }
        const smallTextTokens1Line = [];
        for (let i = 0; i < 60; i++) {
            smallTextTokens1Line.push(new Token((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(1, i), 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH((0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(1, i))));
        }
        if (regexp) {
            regexp.lastIndex = 0;
            // If a token contains indentation, it also contains \n{INDENTATION+}(?!{INDENTATION})
            while ((match = regexp.exec(text)) !== null) {
                const curOffset = match.index;
                const value = match[0];
                if (value === '\n') {
                    curLineCount++;
                    lastLineBreakOffset = curOffset + 1;
                }
                else {
                    if (lastTokenEndOffset !== curOffset) {
                        let token;
                        if (lastTokenEndLine === curLineCount) {
                            const colCount = curOffset - lastTokenEndOffset;
                            if (colCount < smallTextTokens0Line.length) {
                                token = smallTextTokens0Line[colCount];
                            }
                            else {
                                const length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, colCount);
                                token = new Token(length, 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH(length));
                            }
                        }
                        else {
                            const lineCount = curLineCount - lastTokenEndLine;
                            const colCount = curOffset - lastLineBreakOffset;
                            if (lineCount === 1 && colCount < smallTextTokens1Line.length) {
                                token = smallTextTokens1Line[colCount];
                            }
                            else {
                                const length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(lineCount, colCount);
                                token = new Token(length, 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH(length));
                            }
                        }
                        tokens.push(token);
                    }
                    // value is matched by regexp, so the token must exist
                    tokens.push(brackets.getToken(value));
                    lastTokenEndOffset = curOffset + value.length;
                    lastTokenEndLine = curLineCount;
                }
            }
        }
        const offset = text.length;
        if (lastTokenEndOffset !== offset) {
            const length = (lastTokenEndLine === curLineCount)
                ? (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(0, offset - lastTokenEndOffset)
                : (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(curLineCount - lastTokenEndLine, offset - lastLineBreakOffset);
            tokens.push(new Token(length, 0 /* TokenKind.Text */, -1, _smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .SmallImmutableSet */ .tS.getEmpty(), new _ast_js__WEBPACK_IMPORTED_MODULE_1__/* .TextAstNode */ .BH(length)));
        }
        this.length = (0,_length_js__WEBPACK_IMPORTED_MODULE_2__/* .toLength */ .Hg)(curLineCount, offset - lastLineBreakOffset);
        this.tokens = tokens;
    }
    get offset() {
        return this._offset;
    }
    read() {
        return this.tokens[this.idx++] || null;
    }
    peek() {
        return this.tokens[this.idx] || null;
    }
    skip(length) {
        throw new _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .NotSupportedError */ .B8();
    }
}


/***/ }),

/***/ 2253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ ColorizedBracketPairsDecorationProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3981);
/* harmony import */ var _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79402);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26236);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class ColorizedBracketPairsDecorationProvider extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(textModel) {
        super();
        this.textModel = textModel;
        this.colorProvider = new ColorProvider();
        this.onDidChangeEmitter = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.colorizationOptions = textModel.getOptions().bracketPairColorizationOptions;
        this._register(textModel.bracketPairs.onDidChange(e => {
            this.onDidChangeEmitter.fire();
        }));
    }
    //#region TextModel events
    handleDidChangeOptions(e) {
        this.colorizationOptions = this.textModel.getOptions().bracketPairColorizationOptions;
    }
    //#endregion
    getDecorationsInRange(range, ownerId, filterOutValidation, onlyMinimapDecorations) {
        if (onlyMinimapDecorations) {
            // Bracket pair colorization decorations are not rendered in the minimap
            return [];
        }
        if (ownerId === undefined) {
            return [];
        }
        if (!this.colorizationOptions.enabled) {
            return [];
        }
        const result = this.textModel.bracketPairs.getBracketsInRange(range, true).map(bracket => ({
            id: `bracket${bracket.range.toString()}-${bracket.nestingLevel}`,
            options: {
                description: 'BracketPairColorization',
                inlineClassName: this.colorProvider.getInlineClassName(bracket, this.colorizationOptions.independentColorPoolPerBracketType),
            },
            ownerId: 0,
            range: bracket.range,
        })).toArray();
        return result;
    }
    getAllDecorations(ownerId, filterOutValidation) {
        if (ownerId === undefined) {
            return [];
        }
        if (!this.colorizationOptions.enabled) {
            return [];
        }
        return this.getDecorationsInRange(new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(1, 1, this.textModel.getLineCount(), 1), ownerId, filterOutValidation);
    }
}
class ColorProvider {
    constructor() {
        this.unexpectedClosingBracketClassName = 'unexpected-closing-bracket';
    }
    getInlineClassName(bracket, independentColorPoolPerBracketType) {
        if (bracket.isInvalid) {
            return this.unexpectedClosingBracketClassName;
        }
        return this.getInlineClassNameOfLevel(independentColorPoolPerBracketType ? bracket.nestingLevelOfEqualBracketType : bracket.nestingLevel);
    }
    getInlineClassNameOfLevel(level) {
        // To support a dynamic amount of colors up to 6 colors,
        // we use a number that is a lcm of all numbers from 1 to 6.
        return `bracket-highlighting-${level % 30}`;
    }
}
(0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .registerThemingParticipant */ .Ic)((theme, collector) => {
    const colors = [
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground1 */ .zJ,
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground2 */ .Vs,
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground3 */ .CE,
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground4 */ .UP,
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground5 */ .r0,
        _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingForeground6 */ .m1
    ];
    const colorProvider = new ColorProvider();
    collector.addRule(`.monaco-editor .${colorProvider.unexpectedClosingBracketClassName} { color: ${theme.getColor(_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .editorBracketHighlightingUnexpectedBracketForeground */ .ts)}; }`);
    const colorValues = colors
        .map(c => theme.getColor(c))
        .filter((c) => !!c)
        .filter(c => !c.isTransparent());
    for (let level = 0; level < 30; level++) {
        const color = colorValues[level % colorValues.length];
        collector.addRule(`.monaco-editor .${colorProvider.getInlineClassNameOfLevel(level)} { color: ${color}; }`);
    }
});


/***/ }),

/***/ 66534:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ fixBracketsInLine; }
/* harmony export */ });
/* harmony import */ var _bracketPairsTree_brackets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72417);
/* harmony import */ var _bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97973);
/* harmony import */ var _bracketPairsTree_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(974);
/* harmony import */ var _bracketPairsTree_smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25401);
/* harmony import */ var _bracketPairsTree_tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32834);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





function fixBracketsInLine(tokens, languageConfigurationService) {
    const denseKeyProvider = new _bracketPairsTree_smallImmutableSet_js__WEBPACK_IMPORTED_MODULE_3__/* .DenseKeyProvider */ .FE();
    const bracketTokens = new _bracketPairsTree_brackets_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageAgnosticBracketTokens */ .Z(denseKeyProvider, (languageId) => languageConfigurationService.getLanguageConfiguration(languageId));
    const tokenizer = new _bracketPairsTree_tokenizer_js__WEBPACK_IMPORTED_MODULE_4__/* .TextBufferTokenizer */ .xH(new StaticTokenizerSource([tokens]), bracketTokens);
    const node = (0,_bracketPairsTree_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parseDocument */ .w)(tokenizer, [], undefined, true);
    let str = '';
    const line = tokens.getLineContent();
    function processNode(node, offset) {
        if (node.kind === 2 /* AstNodeKind.Pair */) {
            processNode(node.openingBracket, offset);
            offset = (0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthAdd */ .Ii)(offset, node.openingBracket.length);
            if (node.child) {
                processNode(node.child, offset);
                offset = (0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthAdd */ .Ii)(offset, node.child.length);
            }
            if (node.closingBracket) {
                processNode(node.closingBracket, offset);
                offset = (0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthAdd */ .Ii)(offset, node.closingBracket.length);
            }
            else {
                const singleLangBracketTokens = bracketTokens.getSingleLanguageBracketTokens(node.openingBracket.languageId);
                const closingTokenText = singleLangBracketTokens.findClosingTokenText(node.openingBracket.bracketIds);
                str += closingTokenText;
            }
        }
        else if (node.kind === 3 /* AstNodeKind.UnexpectedClosingBracket */) {
            // remove the bracket
        }
        else if (node.kind === 0 /* AstNodeKind.Text */ || node.kind === 1 /* AstNodeKind.Bracket */) {
            str += line.substring((0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthGetColumnCountIfZeroLineCount */ .F_)(offset), (0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthGetColumnCountIfZeroLineCount */ .F_)((0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthAdd */ .Ii)(offset, node.length)));
        }
        else if (node.kind === 4 /* AstNodeKind.List */) {
            for (const child of node.children) {
                processNode(child, offset);
                offset = (0,_bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthAdd */ .Ii)(offset, child.length);
            }
        }
    }
    processNode(node, _bracketPairsTree_length_js__WEBPACK_IMPORTED_MODULE_1__/* .lengthZero */ .xl);
    return str;
}
class StaticTokenizerSource {
    constructor(lines) {
        this.lines = lines;
        this.tokenization = {
            getLineTokens: (lineNumber) => {
                return this.lines[lineNumber - 1];
            }
        };
    }
    getLineCount() {
        return this.lines.length;
    }
    getLineLength(lineNumber) {
        return this.lines[lineNumber - 1].getLineContent().length;
    }
}


/***/ })

}]);