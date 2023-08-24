"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-fe97e044"],{

/***/ 64697:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: function() { return /* binding */ DiffEditorWidget2; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/observable.js + 1 modules
var observable = __webpack_require__(1495);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/observableImpl/autorun.js
var autorun = __webpack_require__(58936);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/observableImpl/base.js
var base = __webpack_require__(7385);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/observableImpl/derived.js
var derived = __webpack_require__(42070);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/style.css
var style = __webpack_require__(41351);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js
var codeEditorService = __webpack_require__(41886);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js + 1 modules
var codeEditorWidget = __webpack_require__(41728);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(52610);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js
var textModel = __webpack_require__(95792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(85519);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/decorations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const diffInsertIcon = (0,iconRegistry/* registerIcon */.q5)('diff-insert', codicons/* Codicon */.l.add, (0,nls/* localize */.NC)('diffInsertIcon', 'Line decoration for inserts in the diff editor.'));
const diffRemoveIcon = (0,iconRegistry/* registerIcon */.q5)('diff-remove', codicons/* Codicon */.l.remove, (0,nls/* localize */.NC)('diffRemoveIcon', 'Line decoration for removals in the diff editor.'));
const diffLineAddDecorationBackgroundWithIndicator = textModel/* ModelDecorationOptions */.qx.register({
    className: 'line-insert',
    description: 'line-insert',
    isWholeLine: true,
    linesDecorationsClassName: 'insert-sign ' + themables/* ThemeIcon */.k.asClassName(diffInsertIcon),
    marginClassName: 'gutter-insert',
});
const diffLineDeleteDecorationBackgroundWithIndicator = textModel/* ModelDecorationOptions */.qx.register({
    className: 'line-delete',
    description: 'line-delete',
    isWholeLine: true,
    linesDecorationsClassName: 'delete-sign ' + themables/* ThemeIcon */.k.asClassName(diffRemoveIcon),
    marginClassName: 'gutter-delete',
});
const diffLineAddDecorationBackground = textModel/* ModelDecorationOptions */.qx.register({
    className: 'line-insert',
    description: 'line-insert',
    isWholeLine: true,
    marginClassName: 'gutter-insert',
});
const diffLineDeleteDecorationBackground = textModel/* ModelDecorationOptions */.qx.register({
    className: 'line-delete',
    description: 'line-delete',
    isWholeLine: true,
    marginClassName: 'gutter-delete',
});
const diffAddDecoration = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-insert',
    description: 'char-insert',
    shouldFillLineOnLineBreak: true,
});
const diffWholeLineAddDecoration = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-insert',
    description: 'char-insert',
    isWholeLine: true,
});
const diffAddDecorationEmpty = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-insert diff-range-empty',
    description: 'char-insert diff-range-empty',
});
const diffDeleteDecoration = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-delete',
    description: 'char-delete',
    shouldFillLineOnLineBreak: true,
});
const diffWholeLineDeleteDecoration = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-delete',
    description: 'char-delete',
    isWholeLine: true,
});
const diffDeleteDecorationEmpty = textModel/* ModelDecorationOptions */.qx.register({
    className: 'char-delete diff-range-empty',
    description: 'char-delete diff-range-empty',
});
const arrowRevertChange = textModel/* ModelDecorationOptions */.qx.register({
    description: 'diff-editor-arrow-revert-change',
    glyphMarginHoverMessage: new htmlContent/* MarkdownString */.W5(undefined, { isTrusted: true, supportThemeIcons: true })
        .appendMarkdown((0,nls/* localize */.NC)('revertChangeHoverMessage', 'Click to revert change')),
    glyphMarginClassName: 'arrow-revert-change ' + themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.arrowRight),
    zIndex: 10001,
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/movedBlocksLines.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class MovedBlocksLinesPart extends lifecycle/* Disposable */.JT {
    constructor(_rootElement, _diffModel, _originalEditorLayoutInfo, _modifiedEditorLayoutInfo, _editors) {
        super();
        this._rootElement = _rootElement;
        this._diffModel = _diffModel;
        this._originalEditorLayoutInfo = _originalEditorLayoutInfo;
        this._modifiedEditorLayoutInfo = _modifiedEditorLayoutInfo;
        this._editors = _editors;
        const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        element.setAttribute('class', 'moved-blocks-lines');
        this._rootElement.appendChild(element);
        this._register((0,observable/* autorun */.EH)('update', (reader) => {
            const info = this._originalEditorLayoutInfo.read(reader);
            const info2 = this._modifiedEditorLayoutInfo.read(reader);
            if (!info || !info2) {
                return;
            }
            element.style.left = `${info.width - info.verticalScrollbarWidth}px`;
            element.style.height = `${info.height}px`;
            element.style.width = `${info.verticalScrollbarWidth + info.contentLeft - MovedBlocksLinesPart.movedCodeBlockPadding}px`;
        }));
        const originalScrollTop = (0,observable/* observableFromEvent */.rD)(this._editors.original.onDidScrollChange, () => this._editors.original.getScrollTop());
        const modifiedScrollTop = (0,observable/* observableFromEvent */.rD)(this._editors.modified.onDidScrollChange, () => this._editors.modified.getScrollTop());
        const viewZonesChanged = (0,observable/* observableSignalFromEvent */.aq)('onDidChangeViewZones', this._editors.modified.onDidChangeViewZones);
        this._register((0,observable/* autorun */.EH)('update', (reader) => {
            var _a, _b;
            element.replaceChildren();
            viewZonesChanged.read(reader);
            const info = this._originalEditorLayoutInfo.read(reader);
            const info2 = this._modifiedEditorLayoutInfo.read(reader);
            if (!info || !info2) {
                return;
            }
            const width = info.verticalScrollbarWidth + info.contentLeft - MovedBlocksLinesPart.movedCodeBlockPadding;
            const moves = (_b = (_a = this._diffModel.read(reader)) === null || _a === void 0 ? void 0 : _a.diff.read(reader)) === null || _b === void 0 ? void 0 : _b.movedTexts;
            if (!moves) {
                return;
            }
            let idx = 0;
            for (const m of moves) {
                function computeLineStart(range, editor) {
                    const t1 = editor.getTopForLineNumber(range.startLineNumber);
                    const t2 = editor.getTopForLineNumber(range.endLineNumberExclusive);
                    return (t1 + t2) / 2;
                }
                const start = computeLineStart(m.lineRangeMapping.original, this._editors.original);
                const startOffset = originalScrollTop.read(reader);
                const end = computeLineStart(m.lineRangeMapping.modified, this._editors.modified);
                const endOffset = modifiedScrollTop.read(reader);
                const top = start - startOffset;
                const bottom = end - endOffset;
                const center = (width / 2) - moves.length * 5 + idx * 10;
                idx++;
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', `M ${0} ${top} L ${center} ${top} L ${center} ${bottom} L ${width} ${bottom}`);
                path.setAttribute('fill', 'none');
                element.appendChild(path);
            }
        }));
    }
}
MovedBlocksLinesPart.movedCodeBlockPadding = 4;

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/utils.js
var utils = __webpack_require__(49153);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/lineRange.js
var lineRange = __webpack_require__(23706);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorDecorations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









class DiffEditorDecorations extends lifecycle/* Disposable */.JT {
    constructor(_editors, _diffModel, _options) {
        super();
        this._editors = _editors;
        this._diffModel = _diffModel;
        this._options = _options;
        this._decorations = (0,observable/* derived */.nK)('decorations', (reader) => {
            var _a;
            const diff = (_a = this._diffModel.read(reader)) === null || _a === void 0 ? void 0 : _a.diff.read(reader);
            if (!diff) {
                return null;
            }
            const currentMove = this._diffModel.read(reader).syncedMovedTexts.read(reader);
            const renderIndicators = this._options.renderIndicators.read(reader);
            const showEmptyDecorations = this._options.showEmptyDecorations.read(reader);
            const originalDecorations = [];
            const modifiedDecorations = [];
            for (const m of diff.mappings) {
                const fullRangeOriginal = lineRange/* LineRange */.z.subtract(m.lineRangeMapping.originalRange, currentMove === null || currentMove === void 0 ? void 0 : currentMove.lineRangeMapping.original)
                    .map(i => i.toInclusiveRange()).filter(types/* isDefined */.$K);
                for (const range of fullRangeOriginal) {
                    originalDecorations.push({ range, options: renderIndicators ? diffLineDeleteDecorationBackgroundWithIndicator : diffLineDeleteDecorationBackground });
                }
                const fullRangeModified = lineRange/* LineRange */.z.subtract(m.lineRangeMapping.modifiedRange, currentMove === null || currentMove === void 0 ? void 0 : currentMove.lineRangeMapping.modified)
                    .map(i => i.toInclusiveRange()).filter(types/* isDefined */.$K);
                for (const range of fullRangeModified) {
                    modifiedDecorations.push({ range, options: renderIndicators ? diffLineAddDecorationBackgroundWithIndicator : diffLineAddDecorationBackground });
                }
                if (m.lineRangeMapping.modifiedRange.isEmpty || m.lineRangeMapping.originalRange.isEmpty) {
                    for (const range of fullRangeOriginal) {
                        originalDecorations.push({ range, options: diffWholeLineDeleteDecoration });
                    }
                    for (const range of fullRangeModified) {
                        modifiedDecorations.push({ range, options: diffWholeLineAddDecoration });
                    }
                }
                else {
                    for (const i of m.lineRangeMapping.innerChanges || []) {
                        if (currentMove
                            && (currentMove.lineRangeMapping.original.intersect(new lineRange/* LineRange */.z(i.originalRange.startLineNumber, i.originalRange.endLineNumber))
                                || currentMove.lineRangeMapping.modified.intersect(new lineRange/* LineRange */.z(i.modifiedRange.startLineNumber, i.modifiedRange.endLineNumber)))) {
                            continue;
                        }
                        // Don't show empty markers outside the line range
                        if (m.lineRangeMapping.originalRange.contains(i.originalRange.startLineNumber)) {
                            originalDecorations.push({ range: i.originalRange, options: (i.originalRange.isEmpty() && showEmptyDecorations) ? diffDeleteDecorationEmpty : diffDeleteDecoration });
                        }
                        if (m.lineRangeMapping.modifiedRange.contains(i.modifiedRange.startLineNumber)) {
                            modifiedDecorations.push({ range: i.modifiedRange, options: (i.modifiedRange.isEmpty() && showEmptyDecorations) ? diffAddDecorationEmpty : diffAddDecoration });
                        }
                    }
                }
                if (!m.lineRangeMapping.modifiedRange.isEmpty && this._options.shouldRenderRevertArrows.read(reader) && !currentMove) {
                    modifiedDecorations.push({ range: range/* Range */.e.fromPositions(new position/* Position */.L(m.lineRangeMapping.modifiedRange.startLineNumber, 1)), options: arrowRevertChange });
                }
            }
            if (currentMove) {
                for (const m of currentMove.changes) {
                    const fullRangeOriginal = m.originalRange.toInclusiveRange();
                    if (fullRangeOriginal) {
                        originalDecorations.push({ range: fullRangeOriginal, options: renderIndicators ? diffLineDeleteDecorationBackgroundWithIndicator : diffLineDeleteDecorationBackground });
                    }
                    const fullRangeModified = m.modifiedRange.toInclusiveRange();
                    if (fullRangeModified) {
                        modifiedDecorations.push({ range: fullRangeModified, options: renderIndicators ? diffLineAddDecorationBackgroundWithIndicator : diffLineAddDecorationBackground });
                    }
                    for (const i of m.innerChanges || []) {
                        originalDecorations.push({ range: i.originalRange, options: diffDeleteDecoration });
                        modifiedDecorations.push({ range: i.modifiedRange, options: diffAddDecoration });
                    }
                }
            }
            for (const m of diff.movedTexts) {
                originalDecorations.push({
                    range: m.lineRangeMapping.original.toInclusiveRange(), options: {
                        description: 'moved',
                        blockClassName: 'movedOriginal',
                        blockPadding: [MovedBlocksLinesPart.movedCodeBlockPadding, 0, MovedBlocksLinesPart.movedCodeBlockPadding, MovedBlocksLinesPart.movedCodeBlockPadding],
                    }
                });
                modifiedDecorations.push({
                    range: m.lineRangeMapping.modified.toInclusiveRange(), options: {
                        description: 'moved',
                        blockClassName: 'movedModified',
                        blockPadding: [4, 0, 4, 4],
                    }
                });
            }
            return { originalDecorations, modifiedDecorations };
        });
        this._register((0,utils/* applyObservableDecorations */.RP)(this._editors.original, this._decorations.map(d => (d === null || d === void 0 ? void 0 : d.originalDecorations) || [])));
        this._register((0,utils/* applyObservableDecorations */.RP)(this._editors.modified, this._decorations.map(d => (d === null || d === void 0 ? void 0 : d.modifiedDecorations) || [])));
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js + 1 modules
var sash = __webpack_require__(4025);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorSash.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class DiffEditorSash extends lifecycle/* Disposable */.JT {
    constructor(_options, _domNode, _dimensions) {
        super();
        this._options = _options;
        this._domNode = _domNode;
        this._dimensions = _dimensions;
        this._sashRatio = (0,observable/* observableValue */.uh)('sashRatio', undefined);
        this.sashLeft = (0,observable/* derived */.nK)('sashLeft', reader => {
            var _a;
            const ratio = (_a = this._sashRatio.read(reader)) !== null && _a !== void 0 ? _a : this._options.splitViewDefaultRatio.read(reader);
            return this._computeSashLeft(ratio, reader);
        });
        this._sash = this._register(new sash/* Sash */.g(this._domNode, {
            getVerticalSashTop: (_sash) => 0,
            getVerticalSashLeft: (_sash) => this.sashLeft.get(),
            getVerticalSashHeight: (_sash) => this._dimensions.height.get(),
        }, { orientation: 0 /* Orientation.VERTICAL */ }));
        this._startSashPosition = undefined;
        this._register(this._sash.onDidStart(() => {
            this._startSashPosition = this.sashLeft.get();
        }));
        this._register(this._sash.onDidChange((e) => {
            const contentWidth = this._dimensions.width.get();
            const sashPosition = this._computeSashLeft((this._startSashPosition + (e.currentX - e.startX)) / contentWidth, undefined);
            this._sashRatio.set(sashPosition / contentWidth, undefined);
        }));
        this._register(this._sash.onDidEnd(() => this._sash.layout()));
        this._register(this._sash.onDidReset(() => this._sashRatio.set(undefined, undefined)));
        this._register((0,observable/* autorun */.EH)('update sash layout', (reader) => {
            const enabled = this._options.enableSplitViewResizing.read(reader);
            this._sash.state = enabled ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
            this.sashLeft.read(reader);
            this._sash.layout();
        }));
    }
    setBoundarySashes(sashes) {
        this._sash.orthogonalEndSash = sashes.bottom;
    }
    _computeSashLeft(desiredRatio, reader) {
        const contentWidth = this._dimensions.width.read(reader);
        const midPoint = Math.floor(this._options.splitViewDefaultRatio.read(reader) * contentWidth);
        const sashLeft = this._options.enableSplitViewResizing.read(reader) ? Math.floor(desiredRatio * contentWidth) : midPoint;
        const MINIMUM_EDITOR_WIDTH = 100;
        if (contentWidth <= MINIMUM_EDITOR_WIDTH * 2) {
            return midPoint;
        }
        if (sashLeft < MINIMUM_EDITOR_WIDTH) {
            return MINIMUM_EDITOR_WIDTH;
        }
        if (sashLeft > contentWidth - MINIMUM_EDITOR_WIDTH) {
            return contentWidth - MINIMUM_EDITOR_WIDTH;
        }
        return sashLeft;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js
var domFontInfo = __webpack_require__(93887);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(52522);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/linesDiffComputer.js
var linesDiffComputer = __webpack_require__(13761);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/diff/standardLinesDiffComputer.js + 5 modules
var standardLinesDiffComputer = __webpack_require__(34841);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/beforeEditPositionMapper.js
var beforeEditPositionMapper = __webpack_require__(34393);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/combineTextEditInfos.js
var combineTextEditInfos = __webpack_require__(27172);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/bracketPairsTextModelPart/bracketPairsTree/length.js
var bracketPairsTree_length = __webpack_require__(97973);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorViewModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












class DiffEditorViewModel extends lifecycle/* Disposable */.JT {
    constructor(model, _options, documentDiffProvider) {
        super();
        this.model = model;
        this._options = _options;
        this._isDiffUpToDate = (0,observable/* observableValue */.uh)('isDiffUpToDate', false);
        this.isDiffUpToDate = this._isDiffUpToDate;
        this._diff = (0,observable/* observableValue */.uh)('diff', undefined);
        this.diff = this._diff;
        this._unchangedRegions = (0,observable/* observableValue */.uh)('unchangedRegion', { regions: [], originalDecorationIds: [], modifiedDecorationIds: [] });
        this.unchangedRegions = (0,observable/* derived */.nK)('unchangedRegions', r => {
            if (this._options.collapseUnchangedRegions.read(r)) {
                return this._unchangedRegions.read(r).regions;
            }
            else {
                // Reset state
                (0,observable/* transaction */.PS)(tx => {
                    for (const r of this._unchangedRegions.get().regions) {
                        r.setState(0, 0, tx);
                    }
                });
                return [];
            }
        });
        this.syncedMovedTexts = (0,observable/* observableValue */.uh)('syncedMovedText', undefined);
        const contentChangedSignal = (0,observable/* observableSignal */.GN)('contentChangedSignal');
        const debouncer = this._register(new common_async/* RunOnceScheduler */.pY(() => contentChangedSignal.trigger(undefined), 200));
        const updateUnchangedRegions = (result, tx) => {
            const newUnchangedRegions = UnchangedRegion.fromDiffs(result.changes, model.original.getLineCount(), model.modified.getLineCount());
            // Transfer state from cur state
            const lastUnchangedRegions = this._unchangedRegions.get();
            const lastUnchangedRegionsOrigRanges = lastUnchangedRegions.originalDecorationIds
                .map(id => model.original.getDecorationRange(id))
                .filter(r => !!r)
                .map(r => lineRange/* LineRange */.z.fromRange(r));
            const lastUnchangedRegionsModRanges = lastUnchangedRegions.modifiedDecorationIds
                .map(id => model.modified.getDecorationRange(id))
                .filter(r => !!r)
                .map(r => lineRange/* LineRange */.z.fromRange(r));
            const originalDecorationIds = model.original.deltaDecorations(lastUnchangedRegions.originalDecorationIds, newUnchangedRegions.map(r => ({ range: r.originalRange.toInclusiveRange(), options: { description: 'unchanged' } })));
            const modifiedDecorationIds = model.modified.deltaDecorations(lastUnchangedRegions.modifiedDecorationIds, newUnchangedRegions.map(r => ({ range: r.modifiedRange.toInclusiveRange(), options: { description: 'unchanged' } })));
            for (const r of newUnchangedRegions) {
                for (let i = 0; i < lastUnchangedRegions.regions.length; i++) {
                    if (r.originalRange.intersectsStrict(lastUnchangedRegionsOrigRanges[i])
                        && r.modifiedRange.intersectsStrict(lastUnchangedRegionsModRanges[i])) {
                        r.setHiddenModifiedRange(lastUnchangedRegions.regions[i].getHiddenModifiedRange(undefined), tx);
                        break;
                    }
                }
            }
            this._unchangedRegions.set({
                regions: newUnchangedRegions,
                originalDecorationIds,
                modifiedDecorationIds
            }, tx);
        };
        this._register(model.modified.onDidChangeContent((e) => {
            const diff = this._diff.get();
            if (!diff) {
                return;
            }
            const textEdits = beforeEditPositionMapper/* TextEditInfo */.Q.fromModelContentChanges(e.changes);
            const result = applyModifiedEdits(this._lastDiff, textEdits, model.original, model.modified);
            if (result) {
                this._lastDiff = result;
                (0,observable/* transaction */.PS)(tx => {
                    this._diff.set(DiffState.fromDiffResult(this._lastDiff), tx);
                    updateUnchangedRegions(result, tx);
                    const currentSyncedMovedText = this.syncedMovedTexts.get();
                    this.syncedMovedTexts.set(currentSyncedMovedText ? this._lastDiff.moves.find(m => m.lineRangeMapping.modified.intersect(currentSyncedMovedText.lineRangeMapping.modified)) : undefined, tx);
                });
            }
            debouncer.schedule();
        }));
        this._register(model.original.onDidChangeContent((e) => {
            const diff = this._diff.get();
            if (!diff) {
                return;
            }
            const textEdits = beforeEditPositionMapper/* TextEditInfo */.Q.fromModelContentChanges(e.changes);
            const result = applyOriginalEdits(this._lastDiff, textEdits, model.original, model.modified);
            if (result) {
                this._lastDiff = result;
                (0,observable/* transaction */.PS)(tx => {
                    this._diff.set(DiffState.fromDiffResult(this._lastDiff), tx);
                    updateUnchangedRegions(result, tx);
                    const currentSyncedMovedText = this.syncedMovedTexts.get();
                    this.syncedMovedTexts.set(currentSyncedMovedText ? this._lastDiff.moves.find(m => m.lineRangeMapping.modified.intersect(currentSyncedMovedText.lineRangeMapping.modified)) : undefined, tx);
                });
            }
            debouncer.schedule();
        }));
        const documentDiffProviderOptionChanged = (0,observable/* observableSignalFromEvent */.aq)('documentDiffProviderOptionChanged', documentDiffProvider.onDidChange);
        this._register((0,autorun/* autorunWithStore2 */.b2)('compute diff', (reader, store) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            debouncer.cancel();
            contentChangedSignal.read(reader);
            documentDiffProviderOptionChanged.read(reader);
            this._isDiffUpToDate.set(false, undefined);
            let originalTextEditInfos = [];
            store.add(model.original.onDidChangeContent((e) => {
                const edits = beforeEditPositionMapper/* TextEditInfo */.Q.fromModelContentChanges(e.changes);
                originalTextEditInfos = (0,combineTextEditInfos/* combineTextEditInfos */.o)(originalTextEditInfos, edits);
            }));
            let modifiedTextEditInfos = [];
            store.add(model.modified.onDidChangeContent((e) => {
                const edits = beforeEditPositionMapper/* TextEditInfo */.Q.fromModelContentChanges(e.changes);
                modifiedTextEditInfos = (0,combineTextEditInfos/* combineTextEditInfos */.o)(modifiedTextEditInfos, edits);
            }));
            let result = yield documentDiffProvider.computeDiff(model.original, model.modified, {
                ignoreTrimWhitespace: this._options.ignoreTrimWhitespace.read(reader),
                maxComputationTimeMs: this._options.maxComputationTimeMs.read(reader),
                computeMoves: this._options.showMoves.read(reader),
            });
            result = (_a = applyOriginalEdits(result, originalTextEditInfos, model.original, model.modified)) !== null && _a !== void 0 ? _a : result;
            result = (_b = applyModifiedEdits(result, modifiedTextEditInfos, model.original, model.modified)) !== null && _b !== void 0 ? _b : result;
            (0,observable/* transaction */.PS)(tx => {
                updateUnchangedRegions(result, tx);
                this._lastDiff = result;
                const state = DiffState.fromDiffResult(result);
                this._diff.set(state, tx);
                this._isDiffUpToDate.set(true, tx);
                const currentSyncedMovedText = this.syncedMovedTexts.get();
                this.syncedMovedTexts.set(currentSyncedMovedText ? this._lastDiff.moves.find(m => m.lineRangeMapping.modified.intersect(currentSyncedMovedText.lineRangeMapping.modified)) : undefined, tx);
            });
        })));
    }
    ensureModifiedLineIsVisible(lineNumber, tx) {
        var _a;
        if (((_a = this.diff.get()) === null || _a === void 0 ? void 0 : _a.mappings.length) === 0) {
            return;
        }
        const unchangedRegions = this._unchangedRegions.get().regions;
        for (const r of unchangedRegions) {
            if (r.getHiddenModifiedRange(undefined).contains(lineNumber)) {
                r.showAll(tx); // TODO only unhide what is needed
                return;
            }
        }
    }
    ensureOriginalLineIsVisible(lineNumber, tx) {
        var _a;
        if (((_a = this.diff.get()) === null || _a === void 0 ? void 0 : _a.mappings.length) === 0) {
            return;
        }
        const unchangedRegions = this._unchangedRegions.get().regions;
        for (const r of unchangedRegions) {
            if (r.getHiddenOriginalRange(undefined).contains(lineNumber)) {
                r.showAll(tx); // TODO only unhide what is needed
                return;
            }
        }
    }
    waitForDiff() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0,observable/* waitForState */.F_)(this.isDiffUpToDate, s => s);
        });
    }
    serializeState() {
        const regions = this._unchangedRegions.get();
        return {
            collapsedRegions: regions.regions.map(r => ({ range: r.getHiddenModifiedRange(undefined).serialize() }))
        };
    }
    restoreSerializedState(state) {
        const ranges = state.collapsedRegions.map(r => lineRange/* LineRange */.z.deserialize(r.range));
        const regions = this._unchangedRegions.get();
        (0,observable/* transaction */.PS)(tx => {
            for (const r of regions.regions) {
                for (const range of ranges) {
                    if (r.modifiedRange.intersect(range)) {
                        r.setHiddenModifiedRange(range, tx);
                        break;
                    }
                }
            }
        });
    }
}
class DiffState {
    static fromDiffResult(result) {
        return new DiffState(result.changes.map(c => new DiffMapping(c)), result.moves || [], result.identical, result.quitEarly);
    }
    constructor(mappings, movedTexts, identical, quitEarly) {
        this.mappings = mappings;
        this.movedTexts = movedTexts;
        this.identical = identical;
        this.quitEarly = quitEarly;
    }
}
class DiffMapping {
    constructor(lineRangeMapping) {
        this.lineRangeMapping = lineRangeMapping;
        /*
        readonly movedTo: MovedText | undefined,
        readonly movedFrom: MovedText | undefined,

        if (movedTo) {
            assertFn(() =>
                movedTo.lineRangeMapping.modifiedRange.equals(lineRangeMapping.modifiedRange)
                && lineRangeMapping.originalRange.isEmpty
                && !movedFrom
            );
        } else if (movedFrom) {
            assertFn(() =>
                movedFrom.lineRangeMapping.originalRange.equals(lineRangeMapping.originalRange)
                && lineRangeMapping.modifiedRange.isEmpty
                && !movedTo
            );
        }
        */
    }
}
class UnchangedRegion {
    static fromDiffs(changes, originalLineCount, modifiedLineCount) {
        const inversedMappings = linesDiffComputer/* LineRangeMapping */.f0.inverse(changes, originalLineCount, modifiedLineCount);
        const result = [];
        const minHiddenLineCount = 3;
        const minContext = 3;
        for (const mapping of inversedMappings) {
            let origStart = mapping.originalRange.startLineNumber;
            let modStart = mapping.modifiedRange.startLineNumber;
            let length = mapping.originalRange.length;
            const atStart = origStart === 1 && modStart === 1;
            const atEnd = origStart + length === originalLineCount + 1 && modStart + length === modifiedLineCount + 1;
            if ((atStart || atEnd) && length > minContext + minHiddenLineCount) {
                if (atStart && !atEnd) {
                    length -= minContext;
                }
                if (atEnd && !atStart) {
                    origStart += minContext;
                    modStart += minContext;
                    length -= minContext;
                }
                result.push(new UnchangedRegion(origStart, modStart, length, 0, 0));
            }
            else if (length > minContext * 2 + minHiddenLineCount) {
                origStart += minContext;
                modStart += minContext;
                length -= minContext * 2;
                result.push(new UnchangedRegion(origStart, modStart, length, 0, 0));
            }
        }
        return result;
    }
    get originalRange() {
        return lineRange/* LineRange */.z.ofLength(this.originalLineNumber, this.lineCount);
    }
    get modifiedRange() {
        return lineRange/* LineRange */.z.ofLength(this.modifiedLineNumber, this.lineCount);
    }
    constructor(originalLineNumber, modifiedLineNumber, lineCount, visibleLineCountTop, visibleLineCountBottom) {
        this.originalLineNumber = originalLineNumber;
        this.modifiedLineNumber = modifiedLineNumber;
        this.lineCount = lineCount;
        this._visibleLineCountTop = (0,observable/* observableValue */.uh)('visibleLineCountTop', 0);
        this.visibleLineCountTop = this._visibleLineCountTop;
        this._visibleLineCountBottom = (0,observable/* observableValue */.uh)('visibleLineCountBottom', 0);
        this.visibleLineCountBottom = this._visibleLineCountBottom;
        this._shouldHideControls = (0,observable/* derived */.nK)('isVisible', reader => this.visibleLineCountTop.read(reader) + this.visibleLineCountBottom.read(reader) === this.lineCount && !this.isDragged.read(reader));
        this.isDragged = (0,observable/* observableValue */.uh)('isDragged', false);
        this._visibleLineCountTop.set(visibleLineCountTop, undefined);
        this._visibleLineCountBottom.set(visibleLineCountBottom, undefined);
    }
    shouldHideControls(reader) {
        return this._shouldHideControls.read(reader);
    }
    getHiddenOriginalRange(reader) {
        return lineRange/* LineRange */.z.ofLength(this.originalLineNumber + this._visibleLineCountTop.read(reader), this.lineCount - this._visibleLineCountTop.read(reader) - this._visibleLineCountBottom.read(reader));
    }
    getHiddenModifiedRange(reader) {
        return lineRange/* LineRange */.z.ofLength(this.modifiedLineNumber + this._visibleLineCountTop.read(reader), this.lineCount - this._visibleLineCountTop.read(reader) - this._visibleLineCountBottom.read(reader));
    }
    setHiddenModifiedRange(range, tx) {
        const visibleLineCountTop = range.startLineNumber - this.modifiedLineNumber;
        const visibleLineCountBottom = (this.modifiedLineNumber + this.lineCount) - range.endLineNumberExclusive;
        this.setState(visibleLineCountTop, visibleLineCountBottom, tx);
    }
    getMaxVisibleLineCountTop() {
        return this.lineCount - this._visibleLineCountBottom.get();
    }
    getMaxVisibleLineCountBottom() {
        return this.lineCount - this._visibleLineCountTop.get();
    }
    showMoreAbove(count = 10, tx) {
        const maxVisibleLineCountTop = this.getMaxVisibleLineCountTop();
        this._visibleLineCountTop.set(Math.min(this._visibleLineCountTop.get() + count, maxVisibleLineCountTop), tx);
    }
    showMoreBelow(count = 10, tx) {
        const maxVisibleLineCountBottom = this.lineCount - this._visibleLineCountTop.get();
        this._visibleLineCountBottom.set(Math.min(this._visibleLineCountBottom.get() + count, maxVisibleLineCountBottom), tx);
    }
    showAll(tx) {
        this._visibleLineCountBottom.set(this.lineCount - this._visibleLineCountTop.get(), tx);
    }
    setState(visibleLineCountTop, visibleLineCountBottom, tx) {
        visibleLineCountTop = Math.max(Math.min(visibleLineCountTop, this.lineCount), 0);
        visibleLineCountBottom = Math.max(Math.min(visibleLineCountBottom, this.lineCount - visibleLineCountTop), 0);
        this._visibleLineCountTop.set(visibleLineCountTop, tx);
        this._visibleLineCountBottom.set(visibleLineCountBottom, tx);
    }
}
function applyOriginalEdits(diff, textEdits, originalTextModel, modifiedTextModel) {
    if (textEdits.length === 0) {
        return diff;
    }
    const diff2 = flip(diff);
    const diff3 = applyModifiedEdits(diff2, textEdits, modifiedTextModel, originalTextModel);
    if (!diff3) {
        return undefined;
    }
    return flip(diff3);
}
function flip(diff) {
    return {
        changes: diff.changes.map(c => c.flip()),
        moves: diff.moves.map(m => m.flip()),
        identical: diff.identical,
        quitEarly: diff.quitEarly,
    };
}
function applyModifiedEdits(diff, textEdits, originalTextModel, modifiedTextModel) {
    if (textEdits.length === 0) {
        return diff;
    }
    if (diff.changes.some(c => !c.innerChanges) || diff.moves.length > 0) {
        // TODO support these cases
        return undefined;
    }
    const changes = applyModifiedEditsToLineRangeMappings(diff.changes, textEdits, originalTextModel, modifiedTextModel);
    const moves = diff.moves.map(m => {
        const newModifiedRange = applyEditToLineRange(m.lineRangeMapping.modified, textEdits);
        return newModifiedRange ? new linesDiffComputer/* MovedText */.y0(new linesDiffComputer/* SimpleLineRangeMapping */.Qy(m.lineRangeMapping.original, newModifiedRange), applyModifiedEditsToLineRangeMappings(m.changes, textEdits, originalTextModel, modifiedTextModel)) : undefined;
    }).filter(types/* isDefined */.$K);
    return {
        identical: false,
        quitEarly: false,
        changes,
        moves,
    };
}
function applyEditToLineRange(range, textEdits) {
    let rangeStartLineNumber = range.startLineNumber;
    let rangeEndLineNumberEx = range.endLineNumberExclusive;
    for (let i = textEdits.length - 1; i >= 0; i--) {
        const textEdit = textEdits[i];
        const textEditStartLineNumber = (0,bracketPairsTree_length/* lengthGetLineCount */.W9)(textEdit.startOffset) + 1;
        const textEditEndLineNumber = (0,bracketPairsTree_length/* lengthGetLineCount */.W9)(textEdit.endOffset) + 1;
        const newLengthLineCount = (0,bracketPairsTree_length/* lengthGetLineCount */.W9)(textEdit.newLength);
        const delta = newLengthLineCount - (textEditEndLineNumber - textEditStartLineNumber);
        if (textEditEndLineNumber < rangeStartLineNumber) {
            // the text edit is before us
            rangeStartLineNumber += delta;
            rangeEndLineNumberEx += delta;
        }
        else if (textEditStartLineNumber > rangeEndLineNumberEx) {
            // the text edit is after us
            // NOOP
        }
        else if (textEditStartLineNumber < rangeStartLineNumber && rangeEndLineNumberEx < textEditEndLineNumber) {
            // the range is fully contained in the text edit
            return undefined;
        }
        else if (textEditStartLineNumber < rangeStartLineNumber && textEditEndLineNumber <= rangeEndLineNumberEx) {
            // the text edit ends inside our range
            rangeStartLineNumber = textEditEndLineNumber + 1;
            rangeStartLineNumber += delta;
            rangeEndLineNumberEx += delta;
        }
        else if (rangeStartLineNumber <= textEditStartLineNumber && textEditEndLineNumber < rangeStartLineNumber) {
            // the text edit starts inside our range
            rangeEndLineNumberEx = textEditStartLineNumber;
        }
        else {
            rangeEndLineNumberEx += delta;
        }
    }
    return new lineRange/* LineRange */.z(rangeStartLineNumber, rangeEndLineNumberEx);
}
function applyModifiedEditsToLineRangeMappings(changes, textEdits, originalTextModel, modifiedTextModel) {
    const diffTextEdits = changes.flatMap(c => c.innerChanges.map(c => new beforeEditPositionMapper/* TextEditInfo */.Q((0,bracketPairsTree_length/* positionToLength */.PZ)(c.originalRange.getStartPosition()), (0,bracketPairsTree_length/* positionToLength */.PZ)(c.originalRange.getEndPosition()), (0,bracketPairsTree_length/* lengthOfRange */.Uv)(c.modifiedRange).toLength())));
    const combined = (0,combineTextEditInfos/* combineTextEditInfos */.o)(diffTextEdits, textEdits);
    let lastOriginalEndOffset = bracketPairsTree_length/* lengthZero */.xl;
    let lastModifiedEndOffset = bracketPairsTree_length/* lengthZero */.xl;
    const rangeMappings = combined.map(c => {
        const modifiedStartOffset = (0,bracketPairsTree_length/* lengthAdd */.Ii)(lastModifiedEndOffset, (0,bracketPairsTree_length/* lengthDiffNonNegative */.BE)(lastOriginalEndOffset, c.startOffset));
        lastOriginalEndOffset = c.endOffset;
        lastModifiedEndOffset = (0,bracketPairsTree_length/* lengthAdd */.Ii)(modifiedStartOffset, c.newLength);
        return new linesDiffComputer/* RangeMapping */.iy(range/* Range */.e.fromPositions((0,bracketPairsTree_length/* lengthToPosition */.bP)(c.startOffset), (0,bracketPairsTree_length/* lengthToPosition */.bP)(c.endOffset)), range/* Range */.e.fromPositions((0,bracketPairsTree_length/* lengthToPosition */.bP)(modifiedStartOffset), (0,bracketPairsTree_length/* lengthToPosition */.bP)(lastModifiedEndOffset)));
    });
    const newChanges = (0,standardLinesDiffComputer/* lineRangeMappingFromRangeMappings */.v)(rangeMappings, originalTextModel.getLinesContent(), modifiedTextModel.getLinesContent());
    return newChanges;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var common_actions = __webpack_require__(25541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/inlineDiffDeletedCodeMargin.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inlineDiffDeletedCodeMargin_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class InlineDiffDeletedCodeMargin extends lifecycle/* Disposable */.JT {
    get visibility() {
        return this._visibility;
    }
    set visibility(_visibility) {
        if (this._visibility !== _visibility) {
            this._visibility = _visibility;
            this._diffActions.style.visibility = _visibility ? 'visible' : 'hidden';
        }
    }
    constructor(_getViewZoneId, _marginDomNode, _modifiedEditor, _diff, _editor, _viewLineCounts, _originalTextModel, _contextMenuService, _clipboardService) {
        super();
        this._getViewZoneId = _getViewZoneId;
        this._marginDomNode = _marginDomNode;
        this._modifiedEditor = _modifiedEditor;
        this._diff = _diff;
        this._editor = _editor;
        this._viewLineCounts = _viewLineCounts;
        this._originalTextModel = _originalTextModel;
        this._contextMenuService = _contextMenuService;
        this._clipboardService = _clipboardService;
        this._visibility = false;
        // make sure the diff margin shows above overlay.
        this._marginDomNode.style.zIndex = '10';
        this._diffActions = document.createElement('div');
        this._diffActions.className = themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.lightBulb) + ' lightbulb-glyph';
        this._diffActions.style.position = 'absolute';
        const lineHeight = this._modifiedEditor.getOption(65 /* EditorOption.lineHeight */);
        this._diffActions.style.right = '0px';
        this._diffActions.style.visibility = 'hidden';
        this._diffActions.style.height = `${lineHeight}px`;
        this._diffActions.style.lineHeight = `${lineHeight}px`;
        this._marginDomNode.appendChild(this._diffActions);
        let currentLineNumberOffset = 0;
        const useShadowDOM = _modifiedEditor.getOption(125 /* EditorOption.useShadowDOM */) && !platform/* isIOS */.gn; // Do not use shadow dom on IOS #122035
        const showContextMenu = (x, y) => {
            var _a;
            this._contextMenuService.showContextMenu({
                domForShadowRoot: useShadowDOM ? (_a = _modifiedEditor.getDomNode()) !== null && _a !== void 0 ? _a : undefined : undefined,
                getAnchor: () => ({ x, y }),
                getActions: () => {
                    const actions = [];
                    const isDeletion = _diff.modifiedRange.isEmpty;
                    // default action
                    actions.push(new common_actions/* Action */.aU('diff.clipboard.copyDeletedContent', isDeletion
                        ? (_diff.originalRange.length > 1
                            ? (0,nls/* localize */.NC)('diff.clipboard.copyDeletedLinesContent.label', "Copy deleted lines")
                            : (0,nls/* localize */.NC)('diff.clipboard.copyDeletedLinesContent.single.label', "Copy deleted line"))
                        : (_diff.originalRange.length > 1
                            ? (0,nls/* localize */.NC)('diff.clipboard.copyChangedLinesContent.label', "Copy changed lines")
                            : (0,nls/* localize */.NC)('diff.clipboard.copyChangedLinesContent.single.label', "Copy changed line")), undefined, true, () => inlineDiffDeletedCodeMargin_awaiter(this, void 0, void 0, function* () {
                        const originalText = this._originalTextModel.getValueInRange(_diff.originalRange.toExclusiveRange());
                        yield this._clipboardService.writeText(originalText);
                    })));
                    if (_diff.originalRange.length > 1) {
                        actions.push(new common_actions/* Action */.aU('diff.clipboard.copyDeletedLineContent', isDeletion
                            ? (0,nls/* localize */.NC)('diff.clipboard.copyDeletedLineContent.label', "Copy deleted line ({0})", _diff.originalRange.startLineNumber + currentLineNumberOffset)
                            : (0,nls/* localize */.NC)('diff.clipboard.copyChangedLineContent.label', "Copy changed line ({0})", _diff.originalRange.startLineNumber + currentLineNumberOffset), undefined, true, () => inlineDiffDeletedCodeMargin_awaiter(this, void 0, void 0, function* () {
                            let lineContent = this._originalTextModel.getLineContent(_diff.originalRange.startLineNumber + currentLineNumberOffset);
                            if (lineContent === '') {
                                // empty line -> new line
                                const eof = this._originalTextModel.getEndOfLineSequence();
                                lineContent = eof === 0 /* EndOfLineSequence.LF */ ? '\n' : '\r\n';
                            }
                            yield this._clipboardService.writeText(lineContent);
                        })));
                    }
                    const readOnly = _modifiedEditor.getOption(89 /* EditorOption.readOnly */);
                    if (!readOnly) {
                        actions.push(new common_actions/* Action */.aU('diff.inline.revertChange', (0,nls/* localize */.NC)('diff.inline.revertChange.label', "Revert this change"), undefined, true, () => inlineDiffDeletedCodeMargin_awaiter(this, void 0, void 0, function* () {
                            this._editor.revert(this._diff);
                        })));
                    }
                    return actions;
                },
                autoSelectFirstItem: true
            });
        };
        this._register((0,dom/* addStandardDisposableListener */.mu)(this._diffActions, 'mousedown', e => {
            const { top, height } = (0,dom/* getDomNodePagePosition */.i)(this._diffActions);
            const pad = Math.floor(lineHeight / 3);
            e.preventDefault();
            showContextMenu(e.posx, top + height + pad);
        }));
        this._register(_modifiedEditor.onMouseMove((e) => {
            if ((e.target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || e.target.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) && e.target.detail.viewZoneId === this._getViewZoneId()) {
                currentLineNumberOffset = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, lineHeight);
                this.visibility = true;
            }
            else {
                this.visibility = false;
            }
        }));
        this._register(_modifiedEditor.onMouseDown((e) => {
            if (!e.event.rightButton) {
                return;
            }
            if (e.target.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || e.target.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
                const viewZoneId = e.target.detail.viewZoneId;
                if (viewZoneId === this._getViewZoneId()) {
                    e.event.preventDefault();
                    currentLineNumberOffset = this._updateLightBulbPosition(this._marginDomNode, e.event.browserEvent.y, lineHeight);
                    showContextMenu(e.event.posx, e.event.posy + lineHeight);
                }
            }
        }));
    }
    _updateLightBulbPosition(marginDomNode, y, lineHeight) {
        const { top } = (0,dom/* getDomNodePagePosition */.i)(marginDomNode);
        const offset = y - top;
        const lineNumberOffset = Math.floor(offset / lineHeight);
        const newTop = lineNumberOffset * lineHeight;
        this._diffActions.style.top = `${newTop}px`;
        if (this._viewLineCounts) {
            let acc = 0;
            for (let i = 0; i < this._viewLineCounts.length; i++) {
                acc += this._viewLineCounts[i];
                if (lineNumberOffset < acc) {
                    return i;
                }
            }
        }
        return lineNumberOffset;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/renderLines.js
var renderLines = __webpack_require__(86155);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel.js
var viewModel = __webpack_require__(1975);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js
var clipboardService = __webpack_require__(71966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js
var contextView = __webpack_require__(88823);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/lineAlignment.js
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





















/**
 * Ensures both editors have the same height by aligning unchanged lines.
 * In inline view mode, inserts viewzones to show deleted code from the original text model in the modified code editor.
 * Synchronizes scrolling.
 */
let ViewZoneManager = class ViewZoneManager extends lifecycle/* Disposable */.JT {
    constructor(_editors, _diffModel, _options, _diffEditorWidget, _canIgnoreViewZoneUpdateEvent, _clipboardService, _contextMenuService) {
        super();
        this._editors = _editors;
        this._diffModel = _diffModel;
        this._options = _options;
        this._diffEditorWidget = _diffEditorWidget;
        this._canIgnoreViewZoneUpdateEvent = _canIgnoreViewZoneUpdateEvent;
        this._clipboardService = _clipboardService;
        this._contextMenuService = _contextMenuService;
        this._originalTopPadding = (0,observable/* observableValue */.uh)('originalTopPadding', 0);
        this._originalScrollOffset = (0,observable/* observableValue */.uh)('originalScrollOffset', 0);
        this._originalScrollOffsetAnimated = (0,utils/* animatedObservable */.Vm)(this._originalScrollOffset, this._store);
        this._modifiedTopPadding = (0,observable/* observableValue */.uh)('modifiedTopPadding', 0);
        this._modifiedScrollOffset = (0,observable/* observableValue */.uh)('modifiedScrollOffset', 0);
        this._modifiedScrollOffsetAnimated = (0,utils/* animatedObservable */.Vm)(this._modifiedScrollOffset, this._store);
        let isChangingViewZones = false;
        const state = (0,observable/* observableValue */.uh)('state', 0);
        const updateImmediately = this._register(new common_async/* RunOnceScheduler */.pY(() => {
            state.set(state.get() + 1, undefined);
        }, 0));
        this._register(this._editors.original.onDidChangeViewZones((_args) => { if (!isChangingViewZones && !this._canIgnoreViewZoneUpdateEvent()) {
            updateImmediately.schedule();
        } }));
        this._register(this._editors.modified.onDidChangeViewZones((_args) => { if (!isChangingViewZones && !this._canIgnoreViewZoneUpdateEvent()) {
            updateImmediately.schedule();
        } }));
        this._register(this._editors.original.onDidChangeConfiguration((args) => { if (args.hasChanged(143 /* EditorOption.wrappingInfo */)) {
            updateImmediately.schedule();
        } }));
        this._register(this._editors.modified.onDidChangeConfiguration((args) => { if (args.hasChanged(143 /* EditorOption.wrappingInfo */)) {
            updateImmediately.schedule();
        } }));
        const originalModelTokenizationCompleted = this._diffModel.map(m => m ? (0,observable/* observableFromEvent */.rD)(m.model.original.onDidChangeTokens, () => m.model.original.tokenization.backgroundTokenizationState === 2 /* BackgroundTokenizationState.Completed */) : undefined).map((m, reader) => m === null || m === void 0 ? void 0 : m.read(reader));
        const alignmentViewZoneIdsOrig = new Set();
        const alignmentViewZoneIdsMod = new Set();
        const alignments = (0,observable/* derived */.nK)('alignments', (reader) => {
            const diffModel = this._diffModel.read(reader);
            const diff = diffModel === null || diffModel === void 0 ? void 0 : diffModel.diff.read(reader);
            if (!diffModel || !diff) {
                return null;
            }
            state.read(reader);
            const renderSideBySide = this._options.renderSideBySide.read(reader);
            const innerHunkAlignment = renderSideBySide;
            return computeRangeAlignment(this._editors.original, this._editors.modified, diff.mappings, alignmentViewZoneIdsOrig, alignmentViewZoneIdsMod, innerHunkAlignment);
        });
        const alignmentsSyncedMovedText = (0,observable/* derived */.nK)('alignments', (reader) => {
            var _a;
            const syncedMovedText = (_a = this._diffModel.read(reader)) === null || _a === void 0 ? void 0 : _a.syncedMovedTexts.read(reader);
            if (!syncedMovedText) {
                return null;
            }
            state.read(reader);
            const mappings = syncedMovedText.changes.map(c => new DiffMapping(c));
            // TODO dont include alignments outside syncedMovedText
            return computeRangeAlignment(this._editors.original, this._editors.modified, mappings, alignmentViewZoneIdsOrig, alignmentViewZoneIdsMod, true);
        });
        function createFakeLinesDiv() {
            const r = document.createElement('div');
            r.className = 'diagonal-fill';
            return r;
        }
        const alignmentViewZonesDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        const alignmentViewZones = (0,observable/* derived */.nK)('alignment viewzones', (reader) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            alignmentViewZonesDisposables.clear();
            const alignmentsVal = alignments.read(reader) || [];
            const origViewZones = [];
            const modViewZones = [];
            const modifiedTopPaddingVal = this._modifiedTopPadding.read(reader);
            if (modifiedTopPaddingVal > 0) {
                modViewZones.push({
                    afterLineNumber: 0,
                    domNode: document.createElement('div'),
                    heightInPx: modifiedTopPaddingVal,
                    showInHiddenAreas: true,
                });
            }
            const originalTopPaddingVal = this._originalTopPadding.read(reader);
            if (originalTopPaddingVal > 0) {
                origViewZones.push({
                    afterLineNumber: 0,
                    domNode: document.createElement('div'),
                    heightInPx: originalTopPaddingVal,
                    showInHiddenAreas: true,
                });
            }
            const renderSideBySide = this._options.renderSideBySide.read(reader);
            const deletedCodeLineBreaksComputer = !renderSideBySide ? (_a = this._editors.modified._getViewModel()) === null || _a === void 0 ? void 0 : _a.createLineBreaksComputer() : undefined;
            if (deletedCodeLineBreaksComputer) {
                for (const a of alignmentsVal) {
                    if (a.diff) {
                        for (let i = a.originalRange.startLineNumber; i < a.originalRange.endLineNumberExclusive; i++) {
                            deletedCodeLineBreaksComputer === null || deletedCodeLineBreaksComputer === void 0 ? void 0 : deletedCodeLineBreaksComputer.addRequest(this._editors.original.getModel().getLineContent(i), null, null);
                        }
                    }
                }
            }
            const lineBreakData = (_b = deletedCodeLineBreaksComputer === null || deletedCodeLineBreaksComputer === void 0 ? void 0 : deletedCodeLineBreaksComputer.finalize()) !== null && _b !== void 0 ? _b : [];
            let lineBreakDataIdx = 0;
            const modLineHeight = this._editors.modified.getOption(65 /* EditorOption.lineHeight */);
            const syncedMovedText = (_c = this._diffModel.read(reader)) === null || _c === void 0 ? void 0 : _c.syncedMovedTexts.read(reader);
            const mightContainNonBasicASCII = (_e = (_d = this._editors.original.getModel()) === null || _d === void 0 ? void 0 : _d.mightContainNonBasicASCII()) !== null && _e !== void 0 ? _e : false;
            const mightContainRTL = (_g = (_f = this._editors.original.getModel()) === null || _f === void 0 ? void 0 : _f.mightContainRTL()) !== null && _g !== void 0 ? _g : false;
            const renderOptions = renderLines/* RenderOptions */.Ao.fromEditor(this._editors.modified);
            for (const a of alignmentsVal) {
                if (a.diff && !renderSideBySide) {
                    if (!a.originalRange.isEmpty) {
                        originalModelTokenizationCompleted.read(reader); // Update view-zones once tokenization completes
                        const deletedCodeDomNode = document.createElement('div');
                        deletedCodeDomNode.classList.add('view-lines', 'line-delete', 'monaco-mouse-cursor-text');
                        const source = new renderLines/* LineSource */.az(a.originalRange.mapToLineArray(l => this._editors.original.getModel().tokenization.getLineTokens(l)), a.originalRange.mapToLineArray(_ => lineBreakData[lineBreakDataIdx++]), mightContainNonBasicASCII, mightContainRTL);
                        const decorations = [];
                        for (const i of a.diff.innerChanges || []) {
                            decorations.push(new viewModel/* InlineDecoration */.$t(i.originalRange.delta(-(a.diff.originalRange.startLineNumber - 1)), diffDeleteDecoration.className, 0 /* InlineDecorationType.Regular */));
                        }
                        const result = (0,renderLines/* renderLines */.aX)(source, renderOptions, decorations, deletedCodeDomNode);
                        const marginDomNode = document.createElement('div');
                        marginDomNode.className = 'inline-deleted-margin-view-zone';
                        (0,domFontInfo/* applyFontInfo */.N)(marginDomNode, renderOptions.fontInfo);
                        if (this._options.renderIndicators.read(reader)) {
                            for (let i = 0; i < result.heightInLines; i++) {
                                const marginElement = document.createElement('div');
                                marginElement.className = `delete-sign ${themables/* ThemeIcon */.k.asClassName(diffRemoveIcon)}`;
                                marginElement.setAttribute('style', `position:absolute;top:${i * modLineHeight}px;width:${renderOptions.lineDecorationsWidth}px;height:${modLineHeight}px;right:0;`);
                                marginDomNode.appendChild(marginElement);
                            }
                        }
                        let zoneId = undefined;
                        alignmentViewZonesDisposables.add(new InlineDiffDeletedCodeMargin(() => (0,types/* assertIsDefined */.cW)(zoneId), marginDomNode, this._editors.modified, a.diff, this._diffEditorWidget, result.viewLineCounts, this._editors.original.getModel(), this._contextMenuService, this._clipboardService));
                        for (let i = 0; i < result.viewLineCounts.length; i++) {
                            const count = result.viewLineCounts[i];
                            // Account for wrapped lines in the (collapsed) original editor (which doesn't wrap lines).
                            if (count > 1) {
                                origViewZones.push({
                                    afterLineNumber: a.originalRange.startLineNumber + i,
                                    domNode: createFakeLinesDiv(),
                                    heightInPx: (count - 1) * modLineHeight,
                                    showInHiddenAreas: true,
                                });
                            }
                        }
                        modViewZones.push({
                            afterLineNumber: a.modifiedRange.startLineNumber - 1,
                            domNode: deletedCodeDomNode,
                            heightInPx: result.heightInLines * modLineHeight,
                            minWidthInPx: result.minWidthInPx,
                            marginDomNode,
                            setZoneId(id) { zoneId = id; },
                            showInHiddenAreas: true,
                        });
                    }
                    const marginDomNode = document.createElement('div');
                    marginDomNode.className = 'gutter-delete';
                    origViewZones.push({
                        afterLineNumber: a.originalRange.endLineNumberExclusive - 1,
                        domNode: createFakeLinesDiv(),
                        heightInPx: a.modifiedHeightInPx,
                        marginDomNode,
                        showInHiddenAreas: true,
                    });
                }
                else {
                    const delta = a.modifiedHeightInPx - a.originalHeightInPx;
                    if (delta > 0) {
                        if (syncedMovedText === null || syncedMovedText === void 0 ? void 0 : syncedMovedText.lineRangeMapping.original.contains(a.originalRange.endLineNumberExclusive - 1)) {
                            continue;
                        }
                        origViewZones.push({
                            afterLineNumber: a.originalRange.endLineNumberExclusive - 1,
                            domNode: createFakeLinesDiv(),
                            heightInPx: delta,
                            showInHiddenAreas: true,
                        });
                    }
                    else {
                        if (syncedMovedText === null || syncedMovedText === void 0 ? void 0 : syncedMovedText.lineRangeMapping.modified.contains(a.modifiedRange.endLineNumberExclusive - 1)) {
                            continue;
                        }
                        function createViewZoneMarginArrow() {
                            const arrow = document.createElement('div');
                            arrow.className = 'arrow-revert-change ' + themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.arrowRight);
                            return (0,dom.$)('div', {}, arrow);
                        }
                        let marginDomNode = undefined;
                        if (a.diff && a.diff.modifiedRange.isEmpty && this._options.shouldRenderRevertArrows.read(reader)) {
                            marginDomNode = createViewZoneMarginArrow();
                        }
                        modViewZones.push({
                            afterLineNumber: a.modifiedRange.endLineNumberExclusive - 1,
                            domNode: createFakeLinesDiv(),
                            heightInPx: -delta,
                            marginDomNode,
                            showInHiddenAreas: true,
                        });
                    }
                }
            }
            for (const a of (_h = alignmentsSyncedMovedText.read(reader)) !== null && _h !== void 0 ? _h : []) {
                if (!(syncedMovedText === null || syncedMovedText === void 0 ? void 0 : syncedMovedText.lineRangeMapping.original.intersect(a.originalRange))
                    && !(syncedMovedText === null || syncedMovedText === void 0 ? void 0 : syncedMovedText.lineRangeMapping.modified.intersect(a.modifiedRange))) {
                    // ignore unrelated alignments outside the synced moved text
                    continue;
                }
                const delta = a.modifiedHeightInPx - a.originalHeightInPx;
                if (delta > 0) {
                    origViewZones.push({
                        afterLineNumber: a.originalRange.endLineNumberExclusive - 1,
                        domNode: createFakeLinesDiv(),
                        heightInPx: delta,
                        showInHiddenAreas: true,
                    });
                }
                else {
                    modViewZones.push({
                        afterLineNumber: a.modifiedRange.endLineNumberExclusive - 1,
                        domNode: createFakeLinesDiv(),
                        heightInPx: -delta,
                        showInHiddenAreas: true,
                    });
                }
            }
            return { orig: origViewZones, mod: modViewZones };
        });
        this._register((0,autorun/* autorunWithStore2 */.b2)('alignment viewzones', (reader) => {
            const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this._editors.modified);
            const alignmentViewZones_ = alignmentViewZones.read(reader);
            isChangingViewZones = true;
            this._editors.original.changeViewZones((aOrig) => {
                for (const id of alignmentViewZoneIdsOrig) {
                    aOrig.removeZone(id);
                }
                alignmentViewZoneIdsOrig.clear();
                for (const z of alignmentViewZones_.orig) {
                    const id = aOrig.addZone(z);
                    if (z.setZoneId) {
                        z.setZoneId(id);
                    }
                    alignmentViewZoneIdsOrig.add(id);
                }
            });
            this._editors.modified.changeViewZones(aMod => {
                for (const id of alignmentViewZoneIdsMod) {
                    aMod.removeZone(id);
                }
                alignmentViewZoneIdsMod.clear();
                for (const z of alignmentViewZones_.mod) {
                    const id = aMod.addZone(z);
                    if (z.setZoneId) {
                        z.setZoneId(id);
                    }
                    alignmentViewZoneIdsMod.add(id);
                }
            });
            isChangingViewZones = false;
            scrollState.restore(this._editors.modified);
        }));
        this._register((0,lifecycle/* toDisposable */.OF)(() => {
            this._editors.original.changeViewZones((a) => {
                for (const id of alignmentViewZoneIdsOrig) {
                    a.removeZone(id);
                }
                alignmentViewZoneIdsOrig.clear();
            });
            this._editors.modified.changeViewZones((a) => {
                for (const id of alignmentViewZoneIdsMod) {
                    a.removeZone(id);
                }
                alignmentViewZoneIdsMod.clear();
            });
        }));
        let ignoreChange = false;
        this._register(this._editors.original.onDidScrollChange(e => {
            if (e.scrollLeftChanged && !ignoreChange) {
                ignoreChange = true;
                this._editors.modified.setScrollLeft(e.scrollLeft);
                ignoreChange = false;
            }
        }));
        this._register(this._editors.modified.onDidScrollChange(e => {
            if (e.scrollLeftChanged && !ignoreChange) {
                ignoreChange = true;
                this._editors.original.setScrollLeft(e.scrollLeft);
                ignoreChange = false;
            }
        }));
        this._originalScrollTop = (0,observable/* observableFromEvent */.rD)(this._editors.original.onDidScrollChange, () => this._editors.original.getScrollTop());
        this._modifiedScrollTop = (0,observable/* observableFromEvent */.rD)(this._editors.modified.onDidScrollChange, () => this._editors.modified.getScrollTop());
        // origExtraHeight + origOffset - origScrollTop = modExtraHeight + modOffset - modScrollTop
        // origScrollTop = origExtraHeight + origOffset - modExtraHeight - modOffset + modScrollTop
        // modScrollTop = modExtraHeight + modOffset - origExtraHeight - origOffset + origScrollTop
        // origOffset - modOffset = heightOfLines(1..Y) - heightOfLines(1..X)
        // origScrollTop >= 0, modScrollTop >= 0
        this._register((0,autorun/* autorun */.EH)('update scroll modified', (reader) => {
            const newScrollTopModified = this._originalScrollTop.read(reader)
                - (this._originalScrollOffsetAnimated.get() - this._modifiedScrollOffsetAnimated.read(reader))
                - (this._originalTopPadding.get() - this._modifiedTopPadding.read(reader));
            if (newScrollTopModified !== this._editors.modified.getScrollTop()) {
                this._editors.modified.setScrollTop(newScrollTopModified, 1 /* ScrollType.Immediate */);
            }
        }));
        this._register((0,autorun/* autorun */.EH)('update scroll original', (reader) => {
            const newScrollTopOriginal = this._modifiedScrollTop.read(reader)
                - (this._modifiedScrollOffsetAnimated.get() - this._originalScrollOffsetAnimated.read(reader))
                - (this._modifiedTopPadding.get() - this._originalTopPadding.read(reader));
            if (newScrollTopOriginal !== this._editors.original.getScrollTop()) {
                this._editors.original.setScrollTop(newScrollTopOriginal, 1 /* ScrollType.Immediate */);
            }
        }));
        this._register((0,autorun/* autorun */.EH)('update', reader => {
            var _a;
            const m = (_a = this._diffModel.read(reader)) === null || _a === void 0 ? void 0 : _a.syncedMovedTexts.read(reader);
            let deltaOrigToMod = 0;
            if (m) {
                const trueTopOriginal = this._editors.original.getTopForLineNumber(m.lineRangeMapping.original.startLineNumber, true) - this._originalTopPadding.get();
                const trueTopModified = this._editors.modified.getTopForLineNumber(m.lineRangeMapping.modified.startLineNumber, true) - this._modifiedTopPadding.get();
                deltaOrigToMod = trueTopModified - trueTopOriginal;
            }
            if (deltaOrigToMod > 0) {
                this._modifiedTopPadding.set(0, undefined);
                this._originalTopPadding.set(deltaOrigToMod, undefined);
            }
            else if (deltaOrigToMod < 0) {
                this._modifiedTopPadding.set(-deltaOrigToMod, undefined);
                this._originalTopPadding.set(0, undefined);
            }
            else {
                setTimeout(() => {
                    this._modifiedTopPadding.set(0, undefined);
                    this._originalTopPadding.set(0, undefined);
                }, 400);
            }
            if (this._editors.modified.hasTextFocus()) {
                this._originalScrollOffset.set(this._modifiedScrollOffset.get() - deltaOrigToMod, undefined, true);
            }
            else {
                this._modifiedScrollOffset.set(this._originalScrollOffset.get() + deltaOrigToMod, undefined, true);
            }
        }));
    }
};
ViewZoneManager = __decorate([
    __param(5, clipboardService/* IClipboardService */.p),
    __param(6, contextView/* IContextMenuService */.i)
], ViewZoneManager);

function computeRangeAlignment(originalEditor, modifiedEditor, diffs, originalEditorAlignmentViewZones, modifiedEditorAlignmentViewZones, innerHunkAlignment) {
    const originalLineHeightOverrides = new arrays/* ArrayQueue */.H9(getAdditionalLineHeights(originalEditor, originalEditorAlignmentViewZones));
    const modifiedLineHeightOverrides = new arrays/* ArrayQueue */.H9(getAdditionalLineHeights(modifiedEditor, modifiedEditorAlignmentViewZones));
    const origLineHeight = originalEditor.getOption(65 /* EditorOption.lineHeight */);
    const modLineHeight = modifiedEditor.getOption(65 /* EditorOption.lineHeight */);
    const result = [];
    let lastOriginalLineNumber = 0;
    let lastModifiedLineNumber = 0;
    function handleAlignmentsOutsideOfDiffs(untilOriginalLineNumberExclusive, untilModifiedLineNumberExclusive) {
        while (true) {
            let origNext = originalLineHeightOverrides.peek();
            let modNext = modifiedLineHeightOverrides.peek();
            if (origNext && origNext.lineNumber >= untilOriginalLineNumberExclusive) {
                origNext = undefined;
            }
            if (modNext && modNext.lineNumber >= untilModifiedLineNumberExclusive) {
                modNext = undefined;
            }
            if (!origNext && !modNext) {
                break;
            }
            const distOrig = origNext ? origNext.lineNumber - lastOriginalLineNumber : Number.MAX_VALUE;
            const distNext = modNext ? modNext.lineNumber - lastModifiedLineNumber : Number.MAX_VALUE;
            if (distOrig < distNext) {
                originalLineHeightOverrides.dequeue();
                modNext = {
                    lineNumber: origNext.lineNumber - lastOriginalLineNumber + lastModifiedLineNumber,
                    heightInPx: 0,
                };
            }
            else if (distOrig > distNext) {
                modifiedLineHeightOverrides.dequeue();
                origNext = {
                    lineNumber: modNext.lineNumber - lastModifiedLineNumber + lastOriginalLineNumber,
                    heightInPx: 0,
                };
            }
            else {
                originalLineHeightOverrides.dequeue();
                modifiedLineHeightOverrides.dequeue();
            }
            result.push({
                originalRange: lineRange/* LineRange */.z.ofLength(origNext.lineNumber, 1),
                modifiedRange: lineRange/* LineRange */.z.ofLength(modNext.lineNumber, 1),
                originalHeightInPx: origLineHeight + origNext.heightInPx,
                modifiedHeightInPx: modLineHeight + modNext.heightInPx,
                diff: undefined,
            });
        }
    }
    for (const m of diffs) {
        const c = m.lineRangeMapping;
        handleAlignmentsOutsideOfDiffs(c.originalRange.startLineNumber, c.modifiedRange.startLineNumber);
        let first = true;
        let lastModLineNumber = c.modifiedRange.startLineNumber;
        let lastOrigLineNumber = c.originalRange.startLineNumber;
        function emitAlignment(origLineNumberExclusive, modLineNumberExclusive) {
            var _a, _b, _c, _d;
            if (origLineNumberExclusive < lastOrigLineNumber || modLineNumberExclusive < lastModLineNumber) {
                return;
            }
            if (first) {
                first = false;
            }
            else if (origLineNumberExclusive === lastOrigLineNumber || modLineNumberExclusive === lastModLineNumber) {
                return;
            }
            const originalRange = new lineRange/* LineRange */.z(lastOrigLineNumber, origLineNumberExclusive);
            const modifiedRange = new lineRange/* LineRange */.z(lastModLineNumber, modLineNumberExclusive);
            if (originalRange.isEmpty && modifiedRange.isEmpty) {
                return;
            }
            const originalAdditionalHeight = (_b = (_a = originalLineHeightOverrides
                .takeWhile(v => v.lineNumber < origLineNumberExclusive)) === null || _a === void 0 ? void 0 : _a.reduce((p, c) => p + c.heightInPx, 0)) !== null && _b !== void 0 ? _b : 0;
            const modifiedAdditionalHeight = (_d = (_c = modifiedLineHeightOverrides
                .takeWhile(v => v.lineNumber < modLineNumberExclusive)) === null || _c === void 0 ? void 0 : _c.reduce((p, c) => p + c.heightInPx, 0)) !== null && _d !== void 0 ? _d : 0;
            result.push({
                originalRange,
                modifiedRange,
                originalHeightInPx: originalRange.length * origLineHeight + originalAdditionalHeight,
                modifiedHeightInPx: modifiedRange.length * modLineHeight + modifiedAdditionalHeight,
                diff: m.lineRangeMapping,
            });
            lastOrigLineNumber = origLineNumberExclusive;
            lastModLineNumber = modLineNumberExclusive;
        }
        if (innerHunkAlignment) {
            for (const i of c.innerChanges || []) {
                if (i.originalRange.startColumn > 1 && i.modifiedRange.startColumn > 1) {
                    // There is some unmodified text on this line before the diff
                    emitAlignment(i.originalRange.startLineNumber, i.modifiedRange.startLineNumber);
                }
                if (i.originalRange.endColumn < originalEditor.getModel().getLineMaxColumn(i.originalRange.endLineNumber)) {
                    // // There is some unmodified text on this line after the diff
                    emitAlignment(i.originalRange.endLineNumber, i.modifiedRange.endLineNumber);
                }
            }
        }
        emitAlignment(c.originalRange.endLineNumberExclusive, c.modifiedRange.endLineNumberExclusive);
        lastOriginalLineNumber = c.originalRange.endLineNumberExclusive;
        lastModifiedLineNumber = c.modifiedRange.endLineNumberExclusive;
    }
    handleAlignmentsOutsideOfDiffs(Number.MAX_VALUE, Number.MAX_VALUE);
    return result;
}
function getAdditionalLineHeights(editor, viewZonesToIgnore) {
    const viewZoneHeights = [];
    const wrappingZoneHeights = [];
    const hasWrapping = editor.getOption(143 /* EditorOption.wrappingInfo */).wrappingColumn !== -1;
    const coordinatesConverter = editor._getViewModel().coordinatesConverter;
    const editorLineHeight = editor.getOption(65 /* EditorOption.lineHeight */);
    if (hasWrapping) {
        for (let i = 1; i <= editor.getModel().getLineCount(); i++) {
            const lineCount = coordinatesConverter.getModelLineViewLineCount(i);
            if (lineCount > 1) {
                wrappingZoneHeights.push({ lineNumber: i, heightInPx: editorLineHeight * (lineCount - 1) });
            }
        }
    }
    for (const w of editor.getWhitespaces()) {
        if (viewZonesToIgnore.has(w.id)) {
            continue;
        }
        const modelLineNumber = w.afterLineNumber === 0 ? 0 : coordinatesConverter.convertViewPositionToModelPosition(new position/* Position */.L(w.afterLineNumber, 1)).lineNumber;
        viewZoneHeights.push({ lineNumber: modelLineNumber, heightInPx: w.height });
    }
    const result = (0,utils/* joinCombine */.Ap)(viewZoneHeights, wrappingZoneHeights, v => v.lineNumber, (v1, v2) => ({ lineNumber: v1.lineNumber, heightInPx: v1.heightInPx + v2.heightInPx }));
    return result;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js
var fastDomNode = __webpack_require__(27661);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js
var scrollbarState = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewModel/overviewZoneManager.js
var overviewZoneManager = __webpack_require__(71895);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(26236);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/overviewRulerPart.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var overviewRulerPart_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var overviewRulerPart_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











let OverviewRulerPart = class OverviewRulerPart extends lifecycle/* Disposable */.JT {
    constructor(_editors, _rootElement, _diffModel, _rootWidth, _rootHeight, _modifiedEditorLayoutInfo, _options, _themeService) {
        super();
        this._editors = _editors;
        this._rootElement = _rootElement;
        this._diffModel = _diffModel;
        this._rootWidth = _rootWidth;
        this._rootHeight = _rootHeight;
        this._modifiedEditorLayoutInfo = _modifiedEditorLayoutInfo;
        this._options = _options;
        this._themeService = _themeService;
        const currentColorTheme = (0,observable/* observableFromEvent */.rD)(this._themeService.onDidColorThemeChange, () => this._themeService.getColorTheme());
        const currentColors = (0,observable/* derived */.nK)('colors', reader => {
            const theme = currentColorTheme.read(reader);
            const insertColor = theme.getColor(colorRegistry/* diffOverviewRulerInserted */.P6Y) || (theme.getColor(colorRegistry/* diffInserted */.ypS) || colorRegistry/* defaultInsertColor */.CzK).transparent(2);
            const removeColor = theme.getColor(colorRegistry/* diffOverviewRulerRemoved */.F9q) || (theme.getColor(colorRegistry/* diffRemoved */.P4M) || colorRegistry/* defaultRemoveColor */.keg).transparent(2);
            return { insertColor, removeColor };
        });
        const scrollTopObservable = (0,observable/* observableFromEvent */.rD)(this._editors.modified.onDidScrollChange, () => this._editors.modified.getScrollTop());
        const scrollHeightObservable = (0,observable/* observableFromEvent */.rD)(this._editors.modified.onDidScrollChange, () => this._editors.modified.getScrollHeight());
        this._register((0,autorun/* autorunWithStore2 */.b2)('create diff editor overview ruler if enabled', (reader, store) => {
            if (!this._options.renderOverviewRuler.read(reader)) {
                return;
            }
            const viewportDomElement = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
            viewportDomElement.setClassName('diffViewport');
            viewportDomElement.setPosition('absolute');
            const diffOverviewRoot = (0,dom.h)('div.diffOverview', {
                style: { position: 'absolute', top: '0px', width: OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH + 'px' }
            }).root;
            store.add((0,utils/* appendRemoveOnDispose */.xx)(diffOverviewRoot, viewportDomElement.domNode));
            store.add((0,dom/* addStandardDisposableListener */.mu)(diffOverviewRoot, dom/* EventType */.tw.POINTER_DOWN, (e) => {
                this._editors.modified.delegateVerticalScrollbarPointerDown(e);
            }));
            store.add((0,dom/* addDisposableListener */.nm)(diffOverviewRoot, dom/* EventType */.tw.MOUSE_WHEEL, (e) => {
                this._editors.modified.delegateScrollFromMouseWheelEvent(e);
            }, { passive: false }));
            store.add((0,utils/* appendRemoveOnDispose */.xx)(this._rootElement, diffOverviewRoot));
            store.add((0,autorun/* autorunWithStore2 */.b2)('recreate overview rules when model changes', (reader, store) => {
                const m = this._diffModel.read(reader);
                const originalOverviewRuler = this._editors.original.createOverviewRuler('original diffOverviewRuler');
                if (originalOverviewRuler) {
                    store.add(originalOverviewRuler);
                    store.add((0,utils/* appendRemoveOnDispose */.xx)(diffOverviewRoot, originalOverviewRuler.getDomNode()));
                }
                const modifiedOverviewRuler = this._editors.modified.createOverviewRuler('modified diffOverviewRuler');
                if (modifiedOverviewRuler) {
                    store.add(modifiedOverviewRuler);
                    store.add((0,utils/* appendRemoveOnDispose */.xx)(diffOverviewRoot, modifiedOverviewRuler.getDomNode()));
                }
                if (!originalOverviewRuler || !modifiedOverviewRuler) {
                    // probably no model
                    return;
                }
                const origViewZonesChanged = (0,observable/* observableSignalFromEvent */.aq)('viewZoneChanged', this._editors.original.onDidChangeViewZones);
                const modViewZonesChanged = (0,observable/* observableSignalFromEvent */.aq)('viewZoneChanged', this._editors.modified.onDidChangeViewZones);
                const origHiddenRangesChanged = (0,observable/* observableSignalFromEvent */.aq)('hiddenRangesChanged', this._editors.original.onDidChangeHiddenAreas);
                const modHiddenRangesChanged = (0,observable/* observableSignalFromEvent */.aq)('hiddenRangesChanged', this._editors.modified.onDidChangeHiddenAreas);
                store.add((0,observable/* autorun */.EH)('set overview ruler zones', (reader) => {
                    var _a;
                    origViewZonesChanged.read(reader);
                    modViewZonesChanged.read(reader);
                    origHiddenRangesChanged.read(reader);
                    modHiddenRangesChanged.read(reader);
                    const colors = currentColors.read(reader);
                    const diff = (_a = m === null || m === void 0 ? void 0 : m.diff.read(reader)) === null || _a === void 0 ? void 0 : _a.mappings;
                    function createZones(ranges, color, editor) {
                        const vm = editor._getViewModel();
                        if (!vm) {
                            return [];
                        }
                        return ranges
                            .filter(d => d.length > 0)
                            .map(r => {
                            const start = vm.coordinatesConverter.convertModelPositionToViewPosition(new position/* Position */.L(r.startLineNumber, 1));
                            const end = vm.coordinatesConverter.convertModelPositionToViewPosition(new position/* Position */.L(r.endLineNumberExclusive, 1));
                            return new overviewZoneManager/* OverviewRulerZone */.EY(start.lineNumber, end.lineNumber, 0, color.toString());
                        });
                    }
                    originalOverviewRuler === null || originalOverviewRuler === void 0 ? void 0 : originalOverviewRuler.setZones(createZones((diff || []).map(d => d.lineRangeMapping.originalRange), colors.removeColor, this._editors.original));
                    modifiedOverviewRuler === null || modifiedOverviewRuler === void 0 ? void 0 : modifiedOverviewRuler.setZones(createZones((diff || []).map(d => d.lineRangeMapping.modifiedRange), colors.insertColor, this._editors.modified));
                }));
                store.add((0,observable/* autorun */.EH)('layout overview ruler', (reader) => {
                    const height = this._rootHeight.read(reader);
                    const width = this._rootWidth.read(reader);
                    const layoutInfo = this._modifiedEditorLayoutInfo.read(reader);
                    if (layoutInfo) {
                        const freeSpace = OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * OverviewRulerPart.ONE_OVERVIEW_WIDTH;
                        originalOverviewRuler.setLayout({
                            top: 0,
                            height: height,
                            right: freeSpace + OverviewRulerPart.ONE_OVERVIEW_WIDTH,
                            width: OverviewRulerPart.ONE_OVERVIEW_WIDTH,
                        });
                        modifiedOverviewRuler.setLayout({
                            top: 0,
                            height: height,
                            right: 0,
                            width: OverviewRulerPart.ONE_OVERVIEW_WIDTH,
                        });
                        const scrollTop = scrollTopObservable.read(reader);
                        const scrollHeight = scrollHeightObservable.read(reader);
                        const scrollBarOptions = this._editors.modified.getOption(101 /* EditorOption.scrollbar */);
                        const state = new scrollbarState/* ScrollbarState */.M(scrollBarOptions.verticalHasArrows ? scrollBarOptions.arrowSize : 0, scrollBarOptions.verticalScrollbarSize, 0, layoutInfo.height, scrollHeight, scrollTop);
                        viewportDomElement.setTop(state.getSliderPosition());
                        viewportDomElement.setHeight(state.getSliderSize());
                    }
                    else {
                        viewportDomElement.setTop(0);
                        viewportDomElement.setHeight(0);
                    }
                    diffOverviewRoot.style.height = height + 'px';
                    diffOverviewRoot.style.left = (width - OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH) + 'px';
                    viewportDomElement.setWidth(OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH);
                }));
            }));
        }));
    }
};
OverviewRulerPart.ONE_OVERVIEW_WIDTH = 15;
OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH = OverviewRulerPart.ONE_OVERVIEW_WIDTH * 2;
OverviewRulerPart = overviewRulerPart_decorate([
    overviewRulerPart_param(7, themeService/* IThemeService */.XE)
], OverviewRulerPart);


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/unchangedRanges.js
var unchangedRanges = __webpack_require__(63336);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/workerBasedDocumentDiffProvider.js
var workerBasedDocumentDiffProvider = __webpack_require__(3173);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorCommon.js
var editorCommon = __webpack_require__(96341);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/serviceCollection.js
var serviceCollection = __webpack_require__(67463);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/delegatingEditorImpl.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class DelegatingEditor extends lifecycle/* Disposable */.JT {
    constructor() {
        super(...arguments);
        this._id = ++DelegatingEditor.idCounter;
        this._onDidDispose = this._register(new common_event/* Emitter */.Q5());
        this.onDidDispose = this._onDidDispose.event;
        // #endregion
    }
    getId() { return this.getEditorType() + ':v2:' + this._id; }
    // #region editorBrowser.IDiffEditor: Delegating to modified Editor
    getVisibleColumnFromPosition(position) {
        return this._targetEditor.getVisibleColumnFromPosition(position);
    }
    getPosition() {
        return this._targetEditor.getPosition();
    }
    setPosition(position, source = 'api') {
        this._targetEditor.setPosition(position, source);
    }
    revealLine(lineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLine(lineNumber, scrollType);
    }
    revealLineInCenter(lineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLineInCenter(lineNumber, scrollType);
    }
    revealLineInCenterIfOutsideViewport(lineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLineInCenterIfOutsideViewport(lineNumber, scrollType);
    }
    revealLineNearTop(lineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLineNearTop(lineNumber, scrollType);
    }
    revealPosition(position, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealPosition(position, scrollType);
    }
    revealPositionInCenter(position, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealPositionInCenter(position, scrollType);
    }
    revealPositionInCenterIfOutsideViewport(position, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealPositionInCenterIfOutsideViewport(position, scrollType);
    }
    revealPositionNearTop(position, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealPositionNearTop(position, scrollType);
    }
    getSelection() {
        return this._targetEditor.getSelection();
    }
    getSelections() {
        return this._targetEditor.getSelections();
    }
    setSelection(something, source = 'api') {
        this._targetEditor.setSelection(something, source);
    }
    setSelections(ranges, source = 'api') {
        this._targetEditor.setSelections(ranges, source);
    }
    revealLines(startLineNumber, endLineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLines(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesInCenter(startLineNumber, endLineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLinesInCenter(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesNearTop(startLineNumber, endLineNumber, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealLinesNearTop(startLineNumber, endLineNumber, scrollType);
    }
    revealRange(range, scrollType = 0 /* ScrollType.Smooth */, revealVerticalInCenter = false, revealHorizontal = true) {
        this._targetEditor.revealRange(range, scrollType, revealVerticalInCenter, revealHorizontal);
    }
    revealRangeInCenter(range, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealRangeInCenter(range, scrollType);
    }
    revealRangeInCenterIfOutsideViewport(range, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealRangeInCenterIfOutsideViewport(range, scrollType);
    }
    revealRangeNearTop(range, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealRangeNearTop(range, scrollType);
    }
    revealRangeNearTopIfOutsideViewport(range, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealRangeNearTopIfOutsideViewport(range, scrollType);
    }
    revealRangeAtTop(range, scrollType = 0 /* ScrollType.Smooth */) {
        this._targetEditor.revealRangeAtTop(range, scrollType);
    }
    getSupportedActions() {
        return this._targetEditor.getSupportedActions();
    }
    focus() {
        this._targetEditor.focus();
    }
    trigger(source, handlerId, payload) {
        this._targetEditor.trigger(source, handlerId, payload);
    }
    createDecorationsCollection(decorations) {
        return this._targetEditor.createDecorationsCollection(decorations);
    }
    changeDecorations(callback) {
        return this._targetEditor.changeDecorations(callback);
    }
}
DelegatingEditor.idCounter = 0;

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(13748);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorEditors.js
var diffEditorEditors_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var diffEditorEditors_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








let DiffEditorEditors = class DiffEditorEditors extends lifecycle/* Disposable */.JT {
    constructor(originalEditorElement, modifiedEditorElement, _options, codeEditorWidgetOptions, _createInnerEditor, _instantiationService, _keybindingService) {
        super();
        this.originalEditorElement = originalEditorElement;
        this.modifiedEditorElement = modifiedEditorElement;
        this._options = _options;
        this._createInnerEditor = _createInnerEditor;
        this._instantiationService = _instantiationService;
        this._keybindingService = _keybindingService;
        this._onDidContentSizeChange = this._register(new common_event/* Emitter */.Q5());
        this.original = this._createLeftHandSideEditor(_options.editorOptions.get(), codeEditorWidgetOptions.originalEditor || {});
        this.modified = this._createRightHandSideEditor(_options.editorOptions.get(), codeEditorWidgetOptions.modifiedEditor || {});
        this._register((0,autorun/* autorunHandleChanges */.nJ)('update editor options', {
            createEmptyChangeSummary: () => ({}),
            handleChange: (ctx, changeSummary) => {
                if (ctx.didChange(_options.editorOptions)) {
                    Object.assign(changeSummary, ctx.change.changedOptions);
                }
                return true;
            }
        }, (reader, changeSummary) => {
            _options.editorOptions.read(reader);
            this.modified.updateOptions(this._adjustOptionsForRightHandSide(reader, changeSummary));
            this.original.updateOptions(this._adjustOptionsForLeftHandSide(reader, changeSummary));
        }));
    }
    _createLeftHandSideEditor(options, codeEditorWidgetOptions) {
        const leftHandSideOptions = this._adjustOptionsForLeftHandSide(undefined, options);
        const editor = this._constructInnerEditor(this._instantiationService, this.originalEditorElement, leftHandSideOptions, codeEditorWidgetOptions);
        editor.setContextValue('isInDiffLeftEditor', true);
        return editor;
    }
    _createRightHandSideEditor(options, codeEditorWidgetOptions) {
        const rightHandSideOptions = this._adjustOptionsForRightHandSide(undefined, options);
        const editor = this._constructInnerEditor(this._instantiationService, this.modifiedEditorElement, rightHandSideOptions, codeEditorWidgetOptions);
        editor.setContextValue('isInDiffRightEditor', true);
        return editor;
    }
    _constructInnerEditor(instantiationService, container, options, editorWidgetOptions) {
        const editor = this._createInnerEditor(instantiationService, container, options, editorWidgetOptions);
        this._register(editor.onDidContentSizeChange(e => {
            const width = this.original.getContentWidth() + this.modified.getContentWidth() + OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH;
            const height = Math.max(this.modified.getContentHeight(), this.original.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: height,
                contentWidth: width,
                contentHeightChanged: e.contentHeightChanged,
                contentWidthChanged: e.contentWidthChanged
            });
        }));
        return editor;
    }
    _adjustOptionsForLeftHandSide(_reader, changedOptions) {
        const result = this._adjustOptionsForSubEditor(changedOptions);
        if (!this._options.renderSideBySide.get()) {
            // never wrap hidden editor
            result.wordWrapOverride1 = 'off';
            result.wordWrapOverride2 = 'off';
            result.stickyScroll = { enabled: false };
        }
        else {
            result.wordWrapOverride1 = this._options.diffWordWrap.get();
        }
        if (changedOptions.originalAriaLabel) {
            result.ariaLabel = changedOptions.originalAriaLabel;
        }
        result.ariaLabel = this._updateAriaLabel(result.ariaLabel);
        result.readOnly = !this._options.originalEditable.get();
        result.dropIntoEditor = { enabled: !result.readOnly };
        result.extraEditorClassName = 'original-in-monaco-diff-editor';
        return result;
    }
    _adjustOptionsForRightHandSide(reader, changedOptions) {
        const result = this._adjustOptionsForSubEditor(changedOptions);
        if (changedOptions.modifiedAriaLabel) {
            result.ariaLabel = changedOptions.modifiedAriaLabel;
        }
        result.ariaLabel = this._updateAriaLabel(result.ariaLabel);
        result.wordWrapOverride1 = this._options.diffWordWrap.get();
        result.revealHorizontalRightPadding = editorOptions/* EditorOptions */.BH.revealHorizontalRightPadding.defaultValue + OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH;
        result.scrollbar.verticalHasArrows = false;
        result.extraEditorClassName = 'modified-in-monaco-diff-editor';
        return result;
    }
    _adjustOptionsForSubEditor(options) {
        const clonedOptions = Object.assign(Object.assign({}, options), { dimension: {
                height: 0,
                width: 0
            } });
        clonedOptions.inDiffEditor = true;
        clonedOptions.automaticLayout = false;
        // Clone scrollbar options before changing them
        clonedOptions.scrollbar = Object.assign({}, (clonedOptions.scrollbar || {}));
        clonedOptions.scrollbar.vertical = 'visible';
        clonedOptions.folding = false;
        clonedOptions.codeLens = this._options.diffCodeLens.get();
        clonedOptions.fixedOverflowWidgets = true;
        // Clone minimap options before changing them
        clonedOptions.minimap = Object.assign({}, (clonedOptions.minimap || {}));
        clonedOptions.minimap.enabled = false;
        if (this._options.collapseUnchangedRegions.get()) {
            clonedOptions.stickyScroll = { enabled: false };
        }
        else {
            clonedOptions.stickyScroll = this._options.editorOptions.get().stickyScroll;
        }
        return clonedOptions;
    }
    _updateAriaLabel(ariaLabel) {
        var _a;
        if (!ariaLabel) {
            ariaLabel = '';
        }
        const ariaNavigationTip = (0,nls/* localize */.NC)('diff-aria-navigation-tip', ' use {0} to open the accessibility help.', (_a = this._keybindingService.lookupKeybinding('editor.action.accessibilityHelp')) === null || _a === void 0 ? void 0 : _a.getAriaLabel());
        if (this._options.accessibilityVerbose.get()) {
            return ariaLabel + ariaNavigationTip;
        }
        else if (ariaLabel) {
            return ariaLabel.replaceAll(ariaNavigationTip, '');
        }
        return '';
    }
};
DiffEditorEditors = diffEditorEditors_decorate([
    diffEditorEditors_param(5, instantiation/* IInstantiationService */.TG),
    diffEditorEditors_param(6, keybinding/* IKeybindingService */.d)
], DiffEditorEditors);


;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorOptions.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class DiffEditorOptions {
    get editorOptions() { return this._options; }
    constructor(options) {
        this.renderOverviewRuler = (0,observable/* derived */.nK)('renderOverviewRuler', reader => this._options.read(reader).renderOverviewRuler);
        this.renderSideBySide = (0,observable/* derived */.nK)('renderSideBySide', reader => this._options.read(reader).renderSideBySide);
        this.readOnly = (0,observable/* derived */.nK)('readOnly', reader => this._options.read(reader).readOnly);
        this.shouldRenderRevertArrows = (0,observable/* derived */.nK)('shouldRenderRevertArrows', (reader) => {
            if (!this._options.read(reader).renderMarginRevertIcon) {
                return false;
            }
            if (!this.renderSideBySide.read(reader)) {
                return false;
            }
            if (this.readOnly.read(reader)) {
                return false;
            }
            return true;
        });
        this.renderIndicators = (0,observable/* derived */.nK)('renderIndicators', reader => this._options.read(reader).renderIndicators);
        this.enableSplitViewResizing = (0,observable/* derived */.nK)('enableSplitViewResizing', reader => this._options.read(reader).enableSplitViewResizing);
        this.collapseUnchangedRegions = (0,observable/* derived */.nK)('hideUnchangedRegions', reader => this._options.read(reader).experimental.collapseUnchangedRegions);
        this.splitViewDefaultRatio = (0,observable/* derived */.nK)('splitViewDefaultRatio', reader => this._options.read(reader).splitViewDefaultRatio);
        this.ignoreTrimWhitespace = (0,observable/* derived */.nK)('ignoreTrimWhitespace', reader => this._options.read(reader).ignoreTrimWhitespace);
        this.maxComputationTimeMs = (0,observable/* derived */.nK)('maxComputationTime', reader => this._options.read(reader).maxComputationTime);
        this.showMoves = (0,observable/* derived */.nK)('showMoves', reader => {
            const o = this._options.read(reader);
            return o.experimental.showMoves && o.renderSideBySide;
        });
        this.isInEmbeddedEditor = (0,observable/* derived */.nK)('isInEmbeddedEditor', reader => this._options.read(reader).isInEmbeddedEditor);
        this.diffWordWrap = (0,observable/* derived */.nK)('diffWordWrap', reader => this._options.read(reader).diffWordWrap);
        this.originalEditable = (0,observable/* derived */.nK)('originalEditable', reader => this._options.read(reader).originalEditable);
        this.diffCodeLens = (0,observable/* derived */.nK)('diffCodeLens', reader => this._options.read(reader).diffCodeLens);
        this.accessibilityVerbose = (0,observable/* derived */.nK)('accessibilityVerbose', reader => this._options.read(reader).accessibilityVerbose);
        this.diffAlgorithm = (0,observable/* derived */.nK)('diffAlgorithm', reader => this._options.read(reader).diffAlgorithm);
        this.showEmptyDecorations = (0,observable/* derived */.nK)('showEmptyDecorations', reader => this._options.read(reader).experimental.showEmptyDecorations);
        this.onlyShowAccessibleDiffViewer = (0,observable/* derived */.nK)('onlyShowAccessibleDiffViewer', reader => this._options.read(reader).onlyShowAccessibleDiffViewer);
        const optionsCopy = Object.assign(Object.assign({}, options), validateDiffEditorOptions(options, diffEditorDefaultOptions));
        this._options = (0,observable/* observableValue */.uh)('options', optionsCopy);
    }
    updateOptions(changedOptions) {
        const newDiffEditorOptions = validateDiffEditorOptions(changedOptions, this._options.get());
        const newOptions = Object.assign(Object.assign(Object.assign({}, this._options.get()), changedOptions), newDiffEditorOptions);
        this._options.set(newOptions, undefined, { changedOptions: changedOptions });
    }
}
const diffEditorDefaultOptions = {
    enableSplitViewResizing: true,
    splitViewDefaultRatio: 0.5,
    renderSideBySide: true,
    renderMarginRevertIcon: true,
    maxComputationTime: 5000,
    maxFileSize: 50,
    ignoreTrimWhitespace: true,
    renderIndicators: true,
    originalEditable: false,
    diffCodeLens: false,
    renderOverviewRuler: true,
    diffWordWrap: 'inherit',
    diffAlgorithm: 'advanced',
    accessibilityVerbose: false,
    experimental: {
        collapseUnchangedRegions: false,
        showMoves: false,
        showEmptyDecorations: true,
    },
    isInEmbeddedEditor: false,
    onlyShowAccessibleDiffViewer: false,
};
function validateDiffEditorOptions(options, defaults) {
    var _a, _b, _c;
    return {
        enableSplitViewResizing: (0,editorOptions/* boolean */.O7)(options.enableSplitViewResizing, defaults.enableSplitViewResizing),
        splitViewDefaultRatio: (0,editorOptions/* clampedFloat */.L_)(options.splitViewDefaultRatio, 0.5, 0.1, 0.9),
        renderSideBySide: (0,editorOptions/* boolean */.O7)(options.renderSideBySide, defaults.renderSideBySide),
        renderMarginRevertIcon: (0,editorOptions/* boolean */.O7)(options.renderMarginRevertIcon, defaults.renderMarginRevertIcon),
        maxComputationTime: (0,editorOptions/* clampedInt */.Zc)(options.maxComputationTime, defaults.maxComputationTime, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        maxFileSize: (0,editorOptions/* clampedInt */.Zc)(options.maxFileSize, defaults.maxFileSize, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        ignoreTrimWhitespace: (0,editorOptions/* boolean */.O7)(options.ignoreTrimWhitespace, defaults.ignoreTrimWhitespace),
        renderIndicators: (0,editorOptions/* boolean */.O7)(options.renderIndicators, defaults.renderIndicators),
        originalEditable: (0,editorOptions/* boolean */.O7)(options.originalEditable, defaults.originalEditable),
        diffCodeLens: (0,editorOptions/* boolean */.O7)(options.diffCodeLens, defaults.diffCodeLens),
        renderOverviewRuler: (0,editorOptions/* boolean */.O7)(options.renderOverviewRuler, defaults.renderOverviewRuler),
        diffWordWrap: (0,editorOptions/* stringSet */.NY)(options.diffWordWrap, defaults.diffWordWrap, ['off', 'on', 'inherit']),
        diffAlgorithm: (0,editorOptions/* stringSet */.NY)(options.diffAlgorithm, defaults.diffAlgorithm, ['legacy', 'advanced'], { 'smart': 'legacy', 'experimental': 'advanced' }),
        accessibilityVerbose: (0,editorOptions/* boolean */.O7)(options.accessibilityVerbose, defaults.accessibilityVerbose),
        experimental: {
            collapseUnchangedRegions: (0,editorOptions/* boolean */.O7)((_a = options.experimental) === null || _a === void 0 ? void 0 : _a.collapseUnchangedRegions, defaults.experimental.collapseUnchangedRegions),
            showMoves: (0,editorOptions/* boolean */.O7)((_b = options.experimental) === null || _b === void 0 ? void 0 : _b.showMoves, defaults.experimental.showMoves),
            showEmptyDecorations: (0,editorOptions/* boolean */.O7)((_c = options.experimental) === null || _c === void 0 ? void 0 : _c.showEmptyDecorations, defaults.experimental.showEmptyDecorations),
        },
        isInEmbeddedEditor: (0,editorOptions/* boolean */.O7)(options.isInEmbeddedEditor, defaults.isInEmbeddedEditor),
        onlyShowAccessibleDiffViewer: (0,editorOptions/* boolean */.O7)(options.onlyShowAccessibleDiffViewer, defaults.onlyShowAccessibleDiffViewer),
    };
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(31768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffReview.js
var diffReview = __webpack_require__(54074);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(57164);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/tokens/lineTokens.js
var tokens_lineTokens = __webpack_require__(15792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js + 1 modules
var viewLineRenderer = __webpack_require__(60533);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/audioCues/browser/audioCueService.js
var audioCueService = __webpack_require__(35758);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/accessibleDiffViewer.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var accessibleDiffViewer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var accessibleDiffViewer_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var accessibleDiffViewer_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



























const accessibleDiffViewerInsertIcon = (0,iconRegistry/* registerIcon */.q5)('diff-review-insert', codicons/* Codicon */.l.add, (0,nls/* localize */.NC)('accessibleDiffViewerInsertIcon', 'Icon for \'Insert\' in accessible diff viewer.'));
const accessibleDiffViewerRemoveIcon = (0,iconRegistry/* registerIcon */.q5)('diff-review-remove', codicons/* Codicon */.l.remove, (0,nls/* localize */.NC)('accessibleDiffViewerRemoveIcon', 'Icon for \'Remove\' in accessible diff viewer.'));
const accessibleDiffViewerCloseIcon = (0,iconRegistry/* registerIcon */.q5)('diff-review-close', codicons/* Codicon */.l.close, (0,nls/* localize */.NC)('accessibleDiffViewerCloseIcon', 'Icon for \'Close\' in accessible diff viewer.'));
let AccessibleDiffViewer = class AccessibleDiffViewer extends lifecycle/* Disposable */.JT {
    constructor(_parentNode, _visible, _setVisible, _canClose, _width, _height, _diffs, _editors, _instantiationService) {
        super();
        this._parentNode = _parentNode;
        this._visible = _visible;
        this._setVisible = _setVisible;
        this._canClose = _canClose;
        this._width = _width;
        this._height = _height;
        this._diffs = _diffs;
        this._editors = _editors;
        this._instantiationService = _instantiationService;
        this.model = (0,derived/* derivedWithStore */.Be)('model', (reader, store) => {
            const visible = this._visible.read(reader);
            this._parentNode.style.visibility = visible ? 'visible' : 'hidden';
            if (!visible) {
                return null;
            }
            const model = store.add(this._instantiationService.createInstance(ViewModel, this._diffs, this._editors, this._setVisible, this._canClose));
            const view = store.add(this._instantiationService.createInstance(View, this._parentNode, model, this._width, this._height, this._editors));
            return {
                model,
                view
            };
        });
        this._register((0,observable/* keepAlive */.$g)(this.model, true));
    }
    next() {
        (0,observable/* transaction */.PS)(tx => {
            const isVisible = this._visible.get();
            this._setVisible(true, tx);
            if (isVisible) {
                this.model.get().model.nextGroup(tx);
            }
        });
    }
    prev() {
        (0,observable/* transaction */.PS)(tx => {
            this._setVisible(true, tx);
            this.model.get().model.previousGroup(tx);
        });
    }
    close() {
        (0,observable/* transaction */.PS)(tx => {
            this._setVisible(false, tx);
        });
    }
};
AccessibleDiffViewer = accessibleDiffViewer_decorate([
    accessibleDiffViewer_param(8, instantiation/* IInstantiationService */.TG)
], AccessibleDiffViewer);

let ViewModel = class ViewModel extends lifecycle/* Disposable */.JT {
    constructor(_diffs, _editors, _setVisible, canClose, _audioCueService) {
        super();
        this._diffs = _diffs;
        this._editors = _editors;
        this._setVisible = _setVisible;
        this.canClose = canClose;
        this._audioCueService = _audioCueService;
        this._groups = (0,observable/* observableValue */.uh)('groups', []);
        this._currentGroupIdx = (0,observable/* observableValue */.uh)('currentGroupIdx', 0);
        this._currentElementIdx = (0,observable/* observableValue */.uh)('currentElementIdx', 0);
        this.groups = this._groups;
        this.currentGroup = this._currentGroupIdx.map((idx, r) => this._groups.read(r)[idx]);
        this.currentGroupIndex = this._currentGroupIdx;
        this.currentElement = this._currentElementIdx.map((idx, r) => { var _a; return (_a = this.currentGroup.read(r)) === null || _a === void 0 ? void 0 : _a.lines[idx]; });
        this._register((0,observable/* autorun */.EH)('update groups', reader => {
            const diffs = this._diffs.read(reader);
            if (!diffs) {
                this._groups.set([], undefined);
                return;
            }
            const groups = computeViewElementGroups(diffs, this._editors.original.getModel().getLineCount(), this._editors.modified.getModel().getLineCount());
            (0,observable/* transaction */.PS)(tx => {
                const p = this._editors.modified.getPosition();
                if (p) {
                    const nextGroup = groups.findIndex(g => (p === null || p === void 0 ? void 0 : p.lineNumber) < g.range.modified.endLineNumberExclusive);
                    if (nextGroup !== -1) {
                        this._currentGroupIdx.set(nextGroup, tx);
                    }
                }
                this._groups.set(groups, tx);
            });
        }));
        this._register((0,observable/* autorun */.EH)('play audio-cue for diff', reader => {
            const currentViewItem = this.currentElement.read(reader);
            if ((currentViewItem === null || currentViewItem === void 0 ? void 0 : currentViewItem.type) === LineType.Deleted) {
                this._audioCueService.playAudioCue(audioCueService/* AudioCue */.y$.diffLineDeleted);
            }
            else if ((currentViewItem === null || currentViewItem === void 0 ? void 0 : currentViewItem.type) === LineType.Added) {
                this._audioCueService.playAudioCue(audioCueService/* AudioCue */.y$.diffLineInserted);
            }
        }));
        this._register((0,observable/* autorun */.EH)('select lines in editor', reader => {
            var _a;
            // This ensures editor commands (like revert/stage) work
            const currentViewItem = this.currentElement.read(reader);
            if (currentViewItem && currentViewItem.type !== LineType.Header) {
                const lineNumber = (_a = currentViewItem.modifiedLineNumber) !== null && _a !== void 0 ? _a : currentViewItem.diff.modifiedRange.startLineNumber;
                this._editors.modified.setSelection(range/* Range */.e.fromPositions(new position/* Position */.L(lineNumber, 1)));
            }
        }));
    }
    _goToGroupDelta(delta, tx) {
        const groups = this.groups.get();
        if (!groups || groups.length <= 1) {
            return;
        }
        (0,base/* subtransaction */.c8)(tx, tx => {
            this._currentGroupIdx.set((this._currentGroupIdx.get() + groups.length + delta) % groups.length, tx);
            this._currentElementIdx.set(0, tx);
        });
    }
    nextGroup(tx) { this._goToGroupDelta(1, tx); }
    previousGroup(tx) { this._goToGroupDelta(-1, tx); }
    _goToLineDelta(delta) {
        const group = this.currentGroup.get();
        if (!group || group.lines.length <= 1) {
            return;
        }
        (0,observable/* transaction */.PS)(tx => {
            this._currentElementIdx.set((this._currentElementIdx.get() + group.lines.length + delta) % group.lines.length, tx);
        });
    }
    goToNextLine() { this._goToLineDelta(1); }
    goToPreviousLine() { this._goToLineDelta(-1); }
    goToLine(line) {
        const group = this.currentGroup.get();
        if (!group) {
            return;
        }
        const idx = group.lines.indexOf(line);
        if (idx === -1) {
            return;
        }
        (0,observable/* transaction */.PS)(tx => {
            this._currentElementIdx.set(idx, tx);
        });
    }
    revealCurrentElementInEditor() {
        this._setVisible(false, undefined);
        const curElem = this.currentElement.get();
        if (curElem) {
            if (curElem.type === LineType.Deleted) {
                this._editors.original.setSelection(range/* Range */.e.fromPositions(new position/* Position */.L(curElem.originalLineNumber, 1)));
                this._editors.original.revealLine(curElem.originalLineNumber);
                this._editors.original.focus();
            }
            else {
                if (curElem.type !== LineType.Header) {
                    this._editors.modified.setSelection(range/* Range */.e.fromPositions(new position/* Position */.L(curElem.modifiedLineNumber, 1)));
                    this._editors.modified.revealLine(curElem.modifiedLineNumber);
                }
                this._editors.modified.focus();
            }
        }
    }
    close() {
        this._setVisible(false, undefined);
        this._editors.modified.focus();
    }
};
ViewModel = accessibleDiffViewer_decorate([
    accessibleDiffViewer_param(4, audioCueService/* IAudioCueService */.e7)
], ViewModel);
const viewElementGroupLineMargin = 3;
function computeViewElementGroups(diffs, originalLineCount, modifiedLineCount) {
    const result = [];
    for (const g of group(diffs, (a, b) => (b.modifiedRange.startLineNumber - a.modifiedRange.endLineNumberExclusive < 2 * viewElementGroupLineMargin))) {
        const viewElements = [];
        viewElements.push(new HeaderViewElement());
        const origFullRange = new lineRange/* LineRange */.z(Math.max(1, g[0].originalRange.startLineNumber - viewElementGroupLineMargin), Math.min(g[g.length - 1].originalRange.endLineNumberExclusive + viewElementGroupLineMargin, originalLineCount + 1));
        const modifiedFullRange = new lineRange/* LineRange */.z(Math.max(1, g[0].modifiedRange.startLineNumber - viewElementGroupLineMargin), Math.min(g[g.length - 1].modifiedRange.endLineNumberExclusive + viewElementGroupLineMargin, modifiedLineCount + 1));
        forEachAdjacentItems(g, (a, b) => {
            const origRange = new lineRange/* LineRange */.z(a ? a.originalRange.endLineNumberExclusive : origFullRange.startLineNumber, b ? b.originalRange.startLineNumber : origFullRange.endLineNumberExclusive);
            const modifiedRange = new lineRange/* LineRange */.z(a ? a.modifiedRange.endLineNumberExclusive : modifiedFullRange.startLineNumber, b ? b.modifiedRange.startLineNumber : modifiedFullRange.endLineNumberExclusive);
            origRange.forEach(origLineNumber => {
                viewElements.push(new UnchangedLineViewElement(origLineNumber, modifiedRange.startLineNumber + (origLineNumber - origRange.startLineNumber)));
            });
            if (b) {
                b.originalRange.forEach(origLineNumber => {
                    viewElements.push(new DeletedLineViewElement(b, origLineNumber));
                });
                b.modifiedRange.forEach(modifiedLineNumber => {
                    viewElements.push(new AddedLineViewElement(b, modifiedLineNumber));
                });
            }
        });
        const modifiedRange = g[0].modifiedRange.join(g[g.length - 1].modifiedRange);
        const originalRange = g[0].originalRange.join(g[g.length - 1].originalRange);
        result.push(new ViewElementGroup(new linesDiffComputer/* SimpleLineRangeMapping */.Qy(modifiedRange, originalRange), viewElements));
    }
    return result;
}
var LineType;
(function (LineType) {
    LineType[LineType["Header"] = 0] = "Header";
    LineType[LineType["Unchanged"] = 1] = "Unchanged";
    LineType[LineType["Deleted"] = 2] = "Deleted";
    LineType[LineType["Added"] = 3] = "Added";
})(LineType || (LineType = {}));
class ViewElementGroup {
    constructor(range, lines) {
        this.range = range;
        this.lines = lines;
    }
}
class HeaderViewElement {
    constructor() {
        this.type = LineType.Header;
    }
}
class DeletedLineViewElement {
    constructor(diff, originalLineNumber) {
        this.diff = diff;
        this.originalLineNumber = originalLineNumber;
        this.type = LineType.Deleted;
        this.modifiedLineNumber = undefined;
    }
}
class AddedLineViewElement {
    constructor(diff, modifiedLineNumber) {
        this.diff = diff;
        this.modifiedLineNumber = modifiedLineNumber;
        this.type = LineType.Added;
        this.originalLineNumber = undefined;
    }
}
class UnchangedLineViewElement {
    constructor(originalLineNumber, modifiedLineNumber) {
        this.originalLineNumber = originalLineNumber;
        this.modifiedLineNumber = modifiedLineNumber;
        this.type = LineType.Unchanged;
    }
}
let View = class View extends lifecycle/* Disposable */.JT {
    constructor(_element, _model, _width, _height, _editors, _languageService) {
        super();
        this._element = _element;
        this._model = _model;
        this._width = _width;
        this._height = _height;
        this._editors = _editors;
        this._languageService = _languageService;
        this.domNode = this._element;
        this.domNode.className = 'diff-review monaco-editor-background';
        const actionBarContainer = document.createElement('div');
        actionBarContainer.className = 'diff-review-actions';
        this._actionBar = this._register(new actionbar/* ActionBar */.o(actionBarContainer));
        this._register((0,observable/* autorun */.EH)('update actions', reader => {
            this._actionBar.clear();
            if (this._model.canClose.read(reader)) {
                this._actionBar.push(new common_actions/* Action */.aU('diffreview.close', (0,nls/* localize */.NC)('label.close', "Close"), 'close-diff-review ' + themables/* ThemeIcon */.k.asClassName(accessibleDiffViewerCloseIcon), true, () => accessibleDiffViewer_awaiter(this, void 0, void 0, function* () { return _model.close(); })), { label: false, icon: true });
            }
        }));
        this._content = document.createElement('div');
        this._content.className = 'diff-review-content';
        this._content.setAttribute('role', 'code');
        this._scrollbar = this._register(new scrollableElement/* DomScrollableElement */.s$(this._content, {}));
        (0,dom/* reset */.mc)(this.domNode, this._scrollbar.getDomNode(), actionBarContainer);
        this._register((0,lifecycle/* toDisposable */.OF)(() => { (0,dom/* reset */.mc)(this.domNode); }));
        this._register((0,utils/* applyStyle */.bg)(this.domNode, { width: this._width, height: this._height }));
        this._register((0,utils/* applyStyle */.bg)(this._content, { width: this._width, height: this._height }));
        this._register((0,autorun/* autorunWithStore2 */.b2)('render', (reader, store) => {
            this._model.currentGroup.read(reader);
            this._render(store);
        }));
        // TODO@hediet use commands
        this._register((0,dom/* addStandardDisposableListener */.mu)(this.domNode, 'keydown', (e) => {
            if (e.equals(18 /* KeyCode.DownArrow */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)
                || e.equals(512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */)) {
                e.preventDefault();
                this._model.goToNextLine();
            }
            if (e.equals(16 /* KeyCode.UpArrow */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */)
                || e.equals(512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */)) {
                e.preventDefault();
                this._model.goToPreviousLine();
            }
            if (e.equals(9 /* KeyCode.Escape */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 9 /* KeyCode.Escape */)
                || e.equals(512 /* KeyMod.Alt */ | 9 /* KeyCode.Escape */)
                || e.equals(1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */)) {
                e.preventDefault();
                this._model.close();
            }
            if (e.equals(10 /* KeyCode.Space */)
                || e.equals(3 /* KeyCode.Enter */)) {
                e.preventDefault();
                this._model.revealCurrentElementInEditor();
            }
        }));
    }
    _render(store) {
        const originalOptions = this._editors.original.getOptions();
        const modifiedOptions = this._editors.modified.getOptions();
        const container = document.createElement('div');
        container.className = 'diff-review-table';
        container.setAttribute('role', 'list');
        container.setAttribute('aria-label', (0,nls/* localize */.NC)('ariaLabel', 'Accessible Diff Viewer. Use arrow up and down to navigate.'));
        (0,domFontInfo/* applyFontInfo */.N)(container, modifiedOptions.get(49 /* EditorOption.fontInfo */));
        (0,dom/* reset */.mc)(this._content, container);
        const originalModel = this._editors.original.getModel();
        const modifiedModel = this._editors.modified.getModel();
        if (!originalModel || !modifiedModel) {
            return;
        }
        const originalModelOpts = originalModel.getOptions();
        const modifiedModelOpts = modifiedModel.getOptions();
        const lineHeight = modifiedOptions.get(65 /* EditorOption.lineHeight */);
        const group = this._model.currentGroup.get();
        for (const viewItem of (group === null || group === void 0 ? void 0 : group.lines) || []) {
            if (!group) {
                break;
            }
            let row;
            if (viewItem.type === LineType.Header) {
                const header = document.createElement('div');
                header.className = 'diff-review-row';
                header.setAttribute('role', 'listitem');
                const r = group.range;
                const diffIndex = this._model.currentGroupIndex.get();
                const diffsLength = this._model.groups.get().length;
                const getAriaLines = (lines) => lines === 0 ? (0,nls/* localize */.NC)('no_lines_changed', "no lines changed")
                    : lines === 1 ? (0,nls/* localize */.NC)('one_line_changed', "1 line changed")
                        : (0,nls/* localize */.NC)('more_lines_changed', "{0} lines changed", lines);
                const originalChangedLinesCntAria = getAriaLines(r.original.length);
                const modifiedChangedLinesCntAria = getAriaLines(r.modified.length);
                header.setAttribute('aria-label', (0,nls/* localize */.NC)({
                    key: 'header',
                    comment: [
                        'This is the ARIA label for a git diff header.',
                        'A git diff header looks like this: @@ -154,12 +159,39 @@.',
                        'That encodes that at original line 154 (which is now line 159), 12 lines were removed/changed with 39 lines.',
                        'Variables 0 and 1 refer to the diff index out of total number of diffs.',
                        'Variables 2 and 4 will be numbers (a line number).',
                        'Variables 3 and 5 will be "no lines changed", "1 line changed" or "X lines changed", localized separately.'
                    ]
                }, "Difference {0} of {1}: original line {2}, {3}, modified line {4}, {5}", (diffIndex + 1), diffsLength, r.original.startLineNumber, originalChangedLinesCntAria, r.modified.startLineNumber, modifiedChangedLinesCntAria));
                const cell = document.createElement('div');
                cell.className = 'diff-review-cell diff-review-summary';
                // e.g.: `1/10: @@ -504,7 +517,7 @@`
                cell.appendChild(document.createTextNode(`${diffIndex + 1}/${diffsLength}: @@ -${r.original.startLineNumber},${r.original.length} +${r.modified.startLineNumber},${r.modified.length} @@`));
                header.appendChild(cell);
                row = header;
            }
            else {
                row = this._createRow(viewItem, lineHeight, this._width.get(), originalOptions, originalModel, originalModelOpts, modifiedOptions, modifiedModel, modifiedModelOpts);
            }
            container.appendChild(row);
            const isSelectedObs = (0,observable/* derived */.nK)('isSelected', reader => this._model.currentElement.read(reader) === viewItem);
            store.add((0,observable/* autorun */.EH)('update tab index', reader => {
                const isSelected = isSelectedObs.read(reader);
                row.tabIndex = isSelected ? 0 : -1;
                if (isSelected) {
                    row.focus();
                }
            }));
            store.add((0,dom/* addDisposableListener */.nm)(row, 'focus', () => {
                this._model.goToLine(viewItem);
            }));
        }
        this._scrollbar.scanDomNode();
    }
    _createRow(item, lineHeight, width, originalOptions, originalModel, originalModelOpts, modifiedOptions, modifiedModel, modifiedModelOpts) {
        const originalLayoutInfo = originalOptions.get(142 /* EditorOption.layoutInfo */);
        const originalLineNumbersWidth = originalLayoutInfo.glyphMarginWidth + originalLayoutInfo.lineNumbersWidth;
        const modifiedLayoutInfo = modifiedOptions.get(142 /* EditorOption.layoutInfo */);
        const modifiedLineNumbersWidth = 10 + modifiedLayoutInfo.glyphMarginWidth + modifiedLayoutInfo.lineNumbersWidth;
        let rowClassName = 'diff-review-row';
        let lineNumbersExtraClassName = '';
        const spacerClassName = 'diff-review-spacer';
        let spacerIcon = null;
        switch (item.type) {
            case LineType.Added:
                rowClassName = 'diff-review-row line-insert';
                lineNumbersExtraClassName = ' char-insert';
                spacerIcon = accessibleDiffViewerInsertIcon;
                break;
            case LineType.Deleted:
                rowClassName = 'diff-review-row line-delete';
                lineNumbersExtraClassName = ' char-delete';
                spacerIcon = accessibleDiffViewerRemoveIcon;
                break;
        }
        const row = document.createElement('div');
        row.style.minWidth = width + 'px';
        row.className = rowClassName;
        row.setAttribute('role', 'listitem');
        row.ariaLevel = '';
        const cell = document.createElement('div');
        cell.className = 'diff-review-cell';
        cell.style.height = `${lineHeight}px`;
        row.appendChild(cell);
        const originalLineNumber = document.createElement('span');
        originalLineNumber.style.width = (originalLineNumbersWidth + 'px');
        originalLineNumber.style.minWidth = (originalLineNumbersWidth + 'px');
        originalLineNumber.className = 'diff-review-line-number' + lineNumbersExtraClassName;
        if (item.originalLineNumber !== undefined) {
            originalLineNumber.appendChild(document.createTextNode(String(item.originalLineNumber)));
        }
        else {
            originalLineNumber.innerText = '\u00a0';
        }
        cell.appendChild(originalLineNumber);
        const modifiedLineNumber = document.createElement('span');
        modifiedLineNumber.style.width = (modifiedLineNumbersWidth + 'px');
        modifiedLineNumber.style.minWidth = (modifiedLineNumbersWidth + 'px');
        modifiedLineNumber.style.paddingRight = '10px';
        modifiedLineNumber.className = 'diff-review-line-number' + lineNumbersExtraClassName;
        if (item.modifiedLineNumber !== undefined) {
            modifiedLineNumber.appendChild(document.createTextNode(String(item.modifiedLineNumber)));
        }
        else {
            modifiedLineNumber.innerText = '\u00a0';
        }
        cell.appendChild(modifiedLineNumber);
        const spacer = document.createElement('span');
        spacer.className = spacerClassName;
        if (spacerIcon) {
            const spacerCodicon = document.createElement('span');
            spacerCodicon.className = themables/* ThemeIcon */.k.asClassName(spacerIcon);
            spacerCodicon.innerText = '\u00a0\u00a0';
            spacer.appendChild(spacerCodicon);
        }
        else {
            spacer.innerText = '\u00a0\u00a0';
        }
        cell.appendChild(spacer);
        let lineContent;
        if (item.modifiedLineNumber !== undefined) {
            let html = this._getLineHtml(modifiedModel, modifiedOptions, modifiedModelOpts.tabSize, item.modifiedLineNumber, this._languageService.languageIdCodec);
            if (diffReview/* DiffReview */.j._ttPolicy) {
                html = diffReview/* DiffReview */.j._ttPolicy.createHTML(html);
            }
            cell.insertAdjacentHTML('beforeend', html);
            lineContent = modifiedModel.getLineContent(item.modifiedLineNumber);
        }
        else {
            let html = this._getLineHtml(originalModel, originalOptions, originalModelOpts.tabSize, item.originalLineNumber, this._languageService.languageIdCodec);
            if (diffReview/* DiffReview */.j._ttPolicy) {
                html = diffReview/* DiffReview */.j._ttPolicy.createHTML(html);
            }
            cell.insertAdjacentHTML('beforeend', html);
            lineContent = originalModel.getLineContent(item.originalLineNumber);
        }
        if (lineContent.length === 0) {
            lineContent = (0,nls/* localize */.NC)('blankLine', "blank");
        }
        let ariaLabel = '';
        switch (item.type) {
            case LineType.Unchanged:
                if (item.originalLineNumber === item.modifiedLineNumber) {
                    ariaLabel = (0,nls/* localize */.NC)({ key: 'unchangedLine', comment: ['The placeholders are contents of the line and should not be translated.'] }, "{0} unchanged line {1}", lineContent, item.originalLineNumber);
                }
                else {
                    ariaLabel = (0,nls/* localize */.NC)('equalLine', "{0} original line {1} modified line {2}", lineContent, item.originalLineNumber, item.modifiedLineNumber);
                }
                break;
            case LineType.Added:
                ariaLabel = (0,nls/* localize */.NC)('insertLine', "+ {0} modified line {1}", lineContent, item.modifiedLineNumber);
                break;
            case LineType.Deleted:
                ariaLabel = (0,nls/* localize */.NC)('deleteLine', "- {0} original line {1}", lineContent, item.originalLineNumber);
                break;
        }
        row.setAttribute('aria-label', ariaLabel);
        return row;
    }
    _getLineHtml(model, options, tabSize, lineNumber, languageIdCodec) {
        const lineContent = model.getLineContent(lineNumber);
        const fontInfo = options.get(49 /* EditorOption.fontInfo */);
        const lineTokens = tokens_lineTokens/* LineTokens */.A.createEmpty(lineContent, languageIdCodec);
        const isBasicASCII = viewModel/* ViewLineRenderingData */.wA.isBasicASCII(lineContent, model.mightContainNonBasicASCII());
        const containsRTL = viewModel/* ViewLineRenderingData */.wA.containsRTL(lineContent, isBasicASCII, model.mightContainRTL());
        const r = (0,viewLineRenderer/* renderViewLine2 */.tF)(new viewLineRenderer/* RenderLineInput */.IJ((fontInfo.isMonospace && !options.get(32 /* EditorOption.disableMonospaceOptimizations */)), fontInfo.canUseHalfwidthRightwardsArrow, lineContent, false, isBasicASCII, containsRTL, 0, lineTokens, [], tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, options.get(115 /* EditorOption.stopRenderingLineAfter */), options.get(97 /* EditorOption.renderWhitespace */), options.get(92 /* EditorOption.renderControlCharacters */), options.get(50 /* EditorOption.fontLigatures */) !== editorOptions/* EditorFontLigatures */.n0.OFF, null));
        return r.html;
    }
};
View = accessibleDiffViewer_decorate([
    accessibleDiffViewer_param(5, language/* ILanguageService */.O)
], View);
function forEachAdjacentItems(items, callback) {
    let last;
    for (const item of items) {
        callback(last, item);
        last = item;
    }
    callback(last, undefined);
}
function* group(items, shouldBeGrouped) {
    let currentGroup;
    let last;
    for (const item of items) {
        if (last !== undefined && shouldBeGrouped(last, item)) {
            currentGroup.push(item);
        }
        else {
            if (currentGroup) {
                yield currentGroup;
            }
            currentGroup = [item];
        }
        last = item;
    }
    if (currentGroup) {
        yield currentGroup;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/colors.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const diffMoveBorder = (0,colorRegistry/* registerColor */.P6G)('diffEditor.move.border', { dark: '#8b8b8b9c', light: '#8b8b8b9c', hcDark: '#8b8b8b9c', hcLight: '#8b8b8b9c', }, (0,nls/* localize */.NC)('diffEditor.move.border', 'The border color for text that got moved in the diff editor.'));

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget2/diffEditorWidget2.js
var diffEditorWidget2_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var diffEditorWidget2_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/































let DiffEditorWidget2 = class DiffEditorWidget2 extends DelegatingEditor {
    constructor(_domElement, options, codeEditorWidgetOptions, _parentContextKeyService, _parentInstantiationService, codeEditorService, _audioCueService) {
        var _a;
        super();
        this._domElement = _domElement;
        this._parentContextKeyService = _parentContextKeyService;
        this._parentInstantiationService = _parentInstantiationService;
        this._audioCueService = _audioCueService;
        this.elements = (0,dom.h)('div.monaco-diff-editor.side-by-side', { style: { position: 'relative', height: '100%' } }, [
            (0,dom.h)('div.noModificationsOverlay@overlay', { style: { position: 'absolute', height: '100%', visibility: 'hidden', } }, [(0,dom.$)('span', {}, 'No Changes')]),
            (0,dom.h)('div.editor.original@original', { style: { position: 'absolute', height: '100%' } }),
            (0,dom.h)('div.editor.modified@modified', { style: { position: 'absolute', height: '100%' } }),
            (0,dom.h)('div.accessibleDiffViewer@accessibleDiffViewer', { style: { position: 'absolute', height: '100%' } }),
        ]);
        this._diffModel = this._register((0,base/* disposableObservableValue */.DN)('diffModel', undefined));
        this.onDidChangeModel = common_event/* Event */.ju.fromObservableLight(this._diffModel);
        this._contextKeyService = this._register(this._parentContextKeyService.createScoped(this._domElement));
        this._instantiationService = this._parentInstantiationService.createChild(new serviceCollection/* ServiceCollection */.y([contextkey/* IContextKeyService */.i6, this._contextKeyService]));
        this._boundarySashes = (0,observable/* observableValue */.uh)('boundarySashes', undefined);
        this._accessibleDiffViewerShouldBeVisible = (0,observable/* observableValue */.uh)('accessibleDiffViewerShouldBeVisible', false);
        this._accessibleDiffViewerVisible = (0,observable/* derived */.nK)('accessibleDiffViewerVisible', reader => this._options.onlyShowAccessibleDiffViewer.read(reader)
            ? true
            : this._accessibleDiffViewerShouldBeVisible.read(reader));
        this._layoutInfo = (0,observable/* derived */.nK)('modifiedEditorLayoutInfo', (reader) => {
            var _a;
            const width = this._rootSizeObserver.width.read(reader);
            const height = this._rootSizeObserver.height.read(reader);
            const sashLeft = (_a = this._sash.read(reader)) === null || _a === void 0 ? void 0 : _a.sashLeft.read(reader);
            const originalWidth = sashLeft !== null && sashLeft !== void 0 ? sashLeft : Math.max(5, this._editors.original.getLayoutInfo().decorationsLeft);
            const modifiedWidth = width - originalWidth - (this._options.renderOverviewRuler.read(reader) ? OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH : 0);
            this.elements.original.style.width = originalWidth + 'px';
            this.elements.original.style.left = '0px';
            this.elements.modified.style.width = modifiedWidth + 'px';
            this.elements.modified.style.left = originalWidth + 'px';
            this._editors.original.layout({ width: originalWidth, height });
            this._editors.modified.layout({ width: modifiedWidth, height });
            return {
                modifiedEditor: this._editors.modified.getLayoutInfo(),
                originalEditor: this._editors.original.getLayoutInfo(),
            };
        });
        this._diffValue = this._diffModel.map((m, r) => m === null || m === void 0 ? void 0 : m.diff.read(r));
        this.onDidUpdateDiff = common_event/* Event */.ju.fromObservableLight(this._diffValue);
        codeEditorService.willCreateDiffEditor();
        this._contextKeyService.createKey('isInDiffEditor', true);
        this._contextKeyService.createKey('diffEditorVersion', 2);
        this._options = new DiffEditorOptions(options);
        this._contextKeyService.createKey(editorContextKeys/* EditorContextKeys */.u.isEmbeddedDiffEditor.key, false);
        const isEmbeddedDiffEditorKey = editorContextKeys/* EditorContextKeys */.u.isEmbeddedDiffEditor.bindTo(this._contextKeyService);
        this._register((0,observable/* autorun */.EH)('update isEmbeddedDiffEditorKey', reader => {
            isEmbeddedDiffEditorKey.set(this._options.isInEmbeddedEditor.read(reader));
        }));
        const accessibleDiffViewerVisibleContextKeyValue = editorContextKeys/* EditorContextKeys */.u.accessibleDiffViewerVisible.bindTo(this._contextKeyService);
        this._register((0,observable/* autorun */.EH)('update accessibleDiffViewerVisible context key', reader => {
            accessibleDiffViewerVisibleContextKeyValue.set(this._accessibleDiffViewerVisible.read(reader));
        }));
        this._domElement.appendChild(this.elements.root);
        this._rootSizeObserver = this._register(new utils/* ObservableElementSizeObserver */.DU(this.elements.root, options.dimension));
        this._rootSizeObserver.setAutomaticLayout((_a = options.automaticLayout) !== null && _a !== void 0 ? _a : false);
        this._editors = this._register(this._instantiationService.createInstance(DiffEditorEditors, this.elements.original, this.elements.modified, this._options, codeEditorWidgetOptions, (i, c, o, o2) => this._createInnerEditor(i, c, o, o2)));
        this._sash = (0,derived/* derivedWithStore */.Be)('sash', (reader, store) => {
            const showSash = this._options.renderSideBySide.read(reader);
            this.elements.root.classList.toggle('side-by-side', showSash);
            if (!showSash) {
                return undefined;
            }
            const result = store.add(new DiffEditorSash(this._options, this.elements.root, {
                height: this._rootSizeObserver.height,
                width: this._rootSizeObserver.width.map((w, reader) => w - (this._options.renderOverviewRuler.read(reader) ? OverviewRulerPart.ENTIRE_DIFF_OVERVIEW_WIDTH : 0)),
            }));
            store.add((0,observable/* autorun */.EH)('setBoundarySashes', reader => {
                const boundarySashes = this._boundarySashes.read(reader);
                if (boundarySashes) {
                    result.setBoundarySashes(boundarySashes);
                }
            }));
            return result;
        });
        this._register((0,observable/* keepAlive */.$g)(this._sash, true));
        this._register((0,autorun/* autorunWithStore2 */.b2)('UnchangedRangesFeature', (reader, store) => {
            this.unchangedRangesFeature = store.add(new ((0,utils/* readHotReloadableExport */.NW)(unchangedRanges/* UnchangedRangesFeature */.V, reader))(this._editors, this._diffModel, this._options));
        }));
        this._register((0,autorun/* autorunWithStore2 */.b2)('DiffEditorDecorations', (reader, store) => {
            store.add(new ((0,utils/* readHotReloadableExport */.NW)(DiffEditorDecorations, reader))(this._editors, this._diffModel, this._options));
        }));
        this._register((0,autorun/* autorunWithStore2 */.b2)('ViewZoneManager', (reader, store) => {
            store.add(this._instantiationService.createInstance((0,utils/* readHotReloadableExport */.NW)(ViewZoneManager, reader), this._editors, this._diffModel, this._options, this, () => this.unchangedRangesFeature.isUpdatingViewZones));
        }));
        this._register((0,autorun/* autorunWithStore2 */.b2)('OverviewRulerPart', (reader, store) => {
            store.add(this._instantiationService.createInstance((0,utils/* readHotReloadableExport */.NW)(OverviewRulerPart, reader), this._editors, this.elements.root, this._diffModel, this._rootSizeObserver.width, this._rootSizeObserver.height, this._layoutInfo.map(i => i.modifiedEditor), this._options));
        }));
        this._register((0,autorun/* autorunWithStore2 */.b2)('_accessibleDiffViewer', (reader, store) => {
            this._accessibleDiffViewer = store.add(this._register(this._instantiationService.createInstance((0,utils/* readHotReloadableExport */.NW)(AccessibleDiffViewer, reader), this.elements.accessibleDiffViewer, this._accessibleDiffViewerVisible, (visible, tx) => this._accessibleDiffViewerShouldBeVisible.set(visible, tx), this._options.onlyShowAccessibleDiffViewer.map(v => !v), this._rootSizeObserver.width, this._rootSizeObserver.height, this._diffModel.map((m, r) => { var _a; return (_a = m === null || m === void 0 ? void 0 : m.diff.read(r)) === null || _a === void 0 ? void 0 : _a.mappings.map(m => m.lineRangeMapping); }), this._editors)));
        }));
        const visibility = this._accessibleDiffViewerVisible.map(v => v ? 'hidden' : 'visible');
        this._register((0,utils/* applyStyle */.bg)(this.elements.modified, { visibility }));
        this._register((0,utils/* applyStyle */.bg)(this.elements.original, { visibility }));
        this._createDiffEditorContributions();
        codeEditorService.addDiffEditor(this);
        this._register((0,observable/* keepAlive */.$g)(this._layoutInfo, true));
        this._register(new MovedBlocksLinesPart(this.elements.root, this._diffModel, this._layoutInfo.map(i => i.originalEditor), this._layoutInfo.map(i => i.modifiedEditor), this._editors));
        this._register((0,utils/* applyStyle */.bg)(this.elements.overlay, {
            width: this._layoutInfo.map((i, r) => i.originalEditor.width + (this._options.renderSideBySide.read(r) ? 0 : i.modifiedEditor.width)),
            visibility: (0,observable/* derived */.nK)('visibility', reader => {
                var _a, _b;
                return (this._options.collapseUnchangedRegions.read(reader) && ((_b = (_a = this._diffModel.read(reader)) === null || _a === void 0 ? void 0 : _a.diff.read(reader)) === null || _b === void 0 ? void 0 : _b.mappings.length) === 0)
                    ? 'visible' : 'hidden';
            }),
        }));
        this._register(this._editors.original.onDidChangeCursorPosition(e => {
            const m = this._diffModel.get();
            if (!m) {
                return;
            }
            const movedText = m.diff.get().movedTexts.find(m => m.lineRangeMapping.original.contains(e.position.lineNumber));
            m.syncedMovedTexts.set(movedText, undefined);
        }));
        this._register(this._editors.modified.onDidChangeCursorPosition(e => {
            const m = this._diffModel.get();
            if (!m) {
                return;
            }
            const movedText = m.diff.get().movedTexts.find(m => m.lineRangeMapping.modified.contains(e.position.lineNumber));
            m.syncedMovedTexts.set(movedText, undefined);
        }));
        // Revert change when an arrow is clicked.
        this._register(this._editors.modified.onMouseDown(event => {
            var _a, _b;
            if (!event.event.rightButton && event.target.position && ((_a = event.target.element) === null || _a === void 0 ? void 0 : _a.className.includes('arrow-revert-change'))) {
                const lineNumber = event.target.position.lineNumber;
                const viewZone = event.target;
                const model = this._diffModel.get();
                if (!model) {
                    return;
                }
                const diffs = (_b = model.diff.get()) === null || _b === void 0 ? void 0 : _b.mappings;
                if (!diffs) {
                    return;
                }
                const diff = diffs.find(d => (viewZone === null || viewZone === void 0 ? void 0 : viewZone.detail.afterLineNumber) === d.lineRangeMapping.modifiedRange.startLineNumber - 1 ||
                    d.lineRangeMapping.modifiedRange.startLineNumber === lineNumber);
                if (!diff) {
                    return;
                }
                this.revert(diff.lineRangeMapping);
                event.event.stopPropagation();
            }
        }));
        this._register(common_event/* Event */.ju.runAndSubscribe(this._editors.modified.onDidChangeCursorPosition, (e) => {
            var _a, _b;
            if ((e === null || e === void 0 ? void 0 : e.reason) === 3 /* CursorChangeReason.Explicit */) {
                const diff = (_b = (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.diff.get()) === null || _b === void 0 ? void 0 : _b.mappings.find(m => m.lineRangeMapping.modifiedRange.contains(e.position.lineNumber));
                if (diff === null || diff === void 0 ? void 0 : diff.lineRangeMapping.modifiedRange.isEmpty) {
                    this._audioCueService.playAudioCue(audioCueService/* AudioCue */.y$.diffLineDeleted);
                }
                else if (diff === null || diff === void 0 ? void 0 : diff.lineRangeMapping.originalRange.isEmpty) {
                    this._audioCueService.playAudioCue(audioCueService/* AudioCue */.y$.diffLineInserted);
                }
                else if (diff) {
                    this._audioCueService.playAudioCue(audioCueService/* AudioCue */.y$.diffLineModified);
                }
            }
        }));
    }
    _createInnerEditor(instantiationService, container, options, editorWidgetOptions) {
        const editor = instantiationService.createInstance(codeEditorWidget/* CodeEditorWidget */.Gm, container, options, editorWidgetOptions);
        return editor;
    }
    _createDiffEditorContributions() {
        const contributions = editorExtensions/* EditorExtensionsRegistry */.Uc.getDiffEditorContributions();
        for (const desc of contributions) {
            try {
                this._register(this._instantiationService.createInstance(desc.ctor, this));
            }
            catch (err) {
                (0,errors/* onUnexpectedError */.dL)(err);
            }
        }
    }
    get _targetEditor() { return this._editors.modified; }
    getEditorType() { return editorCommon/* EditorType */.g.IDiffEditor; }
    layout(dimension) { this._rootSizeObserver.observe(dimension); }
    hasTextFocus() { return this._editors.original.hasTextFocus() || this._editors.modified.hasTextFocus(); }
    saveViewState() {
        var _a;
        const originalViewState = this._editors.original.saveViewState();
        const modifiedViewState = this._editors.modified.saveViewState();
        return {
            original: originalViewState,
            modified: modifiedViewState,
            modelState: (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.serializeState(),
        };
    }
    restoreViewState(s) {
        var _a;
        if (s && s.original && s.modified) {
            const diffEditorState = s;
            this._editors.original.restoreViewState(diffEditorState.original);
            this._editors.modified.restoreViewState(diffEditorState.modified);
            if (diffEditorState.modelState) {
                (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.restoreSerializedState(diffEditorState.modelState);
            }
        }
    }
    createViewModel(model) {
        return new DiffEditorViewModel(model, this._options, 
        // TODO@hediet make diffAlgorithm observable
        this._instantiationService.createInstance(workerBasedDocumentDiffProvider/* WorkerBasedDocumentDiffProvider */.Q, { diffAlgorithm: this._options.diffAlgorithm.get() }));
    }
    getModel() { var _a, _b; return (_b = (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.model) !== null && _b !== void 0 ? _b : null; }
    setModel(model) {
        if (!model && this._diffModel.get()) {
            // Transitioning from a model to no-model
            this._accessibleDiffViewer.close();
        }
        const vm = model ? ('model' in model) ? model : this.createViewModel(model) : undefined;
        this._editors.original.setModel(vm ? vm.model.original : null);
        this._editors.modified.setModel(vm ? vm.model.modified : null);
        (0,base/* transaction */.PS)(tx => {
            this._diffModel.set(vm, tx);
        });
    }
    /**
     * @param changedOptions Only has values for top-level options that have actually changed.
     */
    updateOptions(changedOptions) {
        this._options.updateOptions(changedOptions);
    }
    getContainerDomNode() { return this._domElement; }
    getOriginalEditor() { return this._editors.original; }
    getModifiedEditor() { return this._editors.modified; }
    /**
     * @deprecated Use `this.getDiffComputationResult().changes2` instead.
     */
    getLineChanges() {
        var _a;
        const diffState = (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.diff.get();
        if (!diffState) {
            return null;
        }
        return toLineChanges(diffState);
    }
    revert(diff) {
        var _a;
        const model = (_a = this._diffModel.get()) === null || _a === void 0 ? void 0 : _a.model;
        if (!model) {
            return;
        }
        const changes = diff.innerChanges
            ? diff.innerChanges.map(c => ({
                range: c.modifiedRange,
                text: model.original.getValueInRange(c.originalRange)
            }))
            : [
                {
                    range: diff.modifiedRange.toExclusiveRange(),
                    text: model.original.getValueInRange(diff.originalRange.toExclusiveRange())
                }
            ];
        this._editors.modified.executeEdits('diffEditor', changes);
    }
    accessibleDiffViewerNext() { this._accessibleDiffViewer.next(); }
    accessibleDiffViewerPrev() { this._accessibleDiffViewer.prev(); }
};
DiffEditorWidget2 = diffEditorWidget2_decorate([
    diffEditorWidget2_param(3, contextkey/* IContextKeyService */.i6),
    diffEditorWidget2_param(4, instantiation/* IInstantiationService */.TG),
    diffEditorWidget2_param(5, codeEditorService/* ICodeEditorService */.$),
    diffEditorWidget2_param(6, audioCueService/* IAudioCueService */.e7)
], DiffEditorWidget2);

function toLineChanges(state) {
    return state.mappings.map(x => {
        const m = x.lineRangeMapping;
        let originalStartLineNumber;
        let originalEndLineNumber;
        let modifiedStartLineNumber;
        let modifiedEndLineNumber;
        let innerChanges = m.innerChanges;
        if (m.originalRange.isEmpty) {
            // Insertion
            originalStartLineNumber = m.originalRange.startLineNumber - 1;
            originalEndLineNumber = 0;
            innerChanges = undefined;
        }
        else {
            originalStartLineNumber = m.originalRange.startLineNumber;
            originalEndLineNumber = m.originalRange.endLineNumberExclusive - 1;
        }
        if (m.modifiedRange.isEmpty) {
            // Deletion
            modifiedStartLineNumber = m.modifiedRange.startLineNumber - 1;
            modifiedEndLineNumber = 0;
            innerChanges = undefined;
        }
        else {
            modifiedStartLineNumber = m.modifiedRange.startLineNumber;
            modifiedEndLineNumber = m.modifiedRange.endLineNumberExclusive - 1;
        }
        return {
            originalStartLineNumber,
            originalEndLineNumber,
            modifiedStartLineNumber,
            modifiedEndLineNumber,
            charChanges: innerChanges === null || innerChanges === void 0 ? void 0 : innerChanges.map(m => ({
                originalStartLineNumber: m.originalRange.startLineNumber,
                originalStartColumn: m.originalRange.startColumn,
                originalEndLineNumber: m.originalRange.endLineNumber,
                originalEndColumn: m.originalRange.endColumn,
                modifiedStartLineNumber: m.modifiedRange.startLineNumber,
                modifiedStartColumn: m.modifiedRange.startColumn,
                modifiedEndLineNumber: m.modifiedRange.endLineNumber,
                modifiedEndColumn: m.modifiedRange.endColumn,
            }))
        };
    });
}


/***/ })

}]);