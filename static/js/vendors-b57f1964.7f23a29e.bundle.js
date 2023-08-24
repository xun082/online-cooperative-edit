"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-b57f1964"],{

/***/ 50161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .diff-hidden-lines-widget {\n\twidth: 100%;\n}\n\n.monaco-editor .diff-hidden-lines {\n\theight: 0px; /* The children each have a fixed height, the transform confuses the browser */\n\ttransform: translate(0px, -10px);\n\tfont-size: 13px;\n\tline-height: 14px;\n}\n\n.monaco-editor .diff-hidden-lines:not(.dragging) .top:hover, .diff-hidden-lines:not(.dragging) .bottom:hover, .diff-hidden-lines .top.dragging, .diff-hidden-lines .bottom.dragging {\n\tbackground-color: var(--vscode-focusBorder);\n}\n\n.monaco-editor .diff-hidden-lines .top, .diff-hidden-lines .bottom {\n\ttransition: background-color 0.1s ease-out;\n\theight: 4px;\n\tbackground-color: transparent;\n\tbackground-clip: padding-box;\n\tborder-bottom: 2px solid transparent;\n\tborder-top: 4px solid transparent;\n\tcursor: ns-resize;\n}\n\n.monaco-editor .diff-hidden-lines .top {\n\ttransform: translate(0px, 4px);\n}\n\n.monaco-editor .diff-hidden-lines .bottom {\n\ttransform: translate(0px, -6px);\n}\n\n.monaco-editor .diff-unchanged-lines {\n\tbackground: var(--vscode-diffEditor-unchangedCodeBackground);\n}\n\n.monaco-editor .noModificationsOverlay {\n\tz-index: 1;\n\tbackground: var(--vscode-editor-background);\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n\n.monaco-editor .diff-hidden-lines .center {\n\tbackground: var(--vscode-diffEditor-unchangedRegionBackground);\n\tcolor: var(--vscode-diffEditor-unchangedRegionForeground);\n\toverflow: hidden;\n\tdisplay: block;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\n\theight: 24px;\n}\n\n.monaco-editor .diff-hidden-lines .center span.codicon {\n\tvertical-align: middle;\n}\n\n.monaco-editor .diff-hidden-lines .center a:hover .codicon {\n\tcursor: pointer;\n\tcolor: var(--vscode-editorLink-activeForeground) !important;\n}\n\n.monaco-editor .movedOriginal {\n\tborder: 2px solid var(--vscode-diffEditor-move-border);\n}\n\n.monaco-editor .movedModified {\n\tborder: 2px solid var(--vscode-diffEditor-move-border);\n}\n\n.monaco-diff-editor .moved-blocks-lines {\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.monaco-diff-editor .moved-blocks-lines path {\n\tfill: none;\n\tstroke: var(--vscode-diffEditor-move-border);\n\tstroke-width: 2;\n}\n\n.monaco-editor .char-delete.diff-range-empty {\n\tmargin-left: -1px;\n\tborder-left: solid var(--vscode-diffEditor-removedTextBackground) 3px;\n}\n\n.monaco-editor .char-insert.diff-range-empty {\n\tborder-left: solid var(--vscode-diffEditor-insertedTextBackground) 3px;\n}\n\n.monaco-editor .fold-unchanged {\n\tcursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 86155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: function() { return /* binding */ RenderOptions; },
/* harmony export */   aX: function() { return /* binding */ renderLines; },
/* harmony export */   az: function() { return /* binding */ LineSource; }
/* harmony export */ });
/* harmony import */ var _config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93887);
/* harmony import */ var _diffEditorWidget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13130);
/* harmony import */ var _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58908);
/* harmony import */ var _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63156);
/* harmony import */ var _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35900);
/* harmony import */ var _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60533);
/* harmony import */ var _common_viewModel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1975);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const ttPolicy = _diffEditorWidget_js__WEBPACK_IMPORTED_MODULE_0__/* .diffEditorWidgetTtPolicy */ .N;
function renderLines(source, options, decorations, domNode) {
    (0,_config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_6__/* .applyFontInfo */ .N)(domNode, options.fontInfo);
    const hasCharChanges = (decorations.length > 0);
    const sb = new _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_2__/* .StringBuilder */ .HT(10000);
    let maxCharsPerLine = 0;
    let renderedLineCount = 0;
    const viewLineCounts = [];
    for (let lineIndex = 0; lineIndex < source.lineTokens.length; lineIndex++) {
        const lineNumber = lineIndex + 1;
        const lineTokens = source.lineTokens[lineIndex];
        const lineBreakData = source.lineBreakData[lineIndex];
        const actualDecorations = _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_3__/* .LineDecoration */ .Kp.filter(decorations, lineNumber, 1, Number.MAX_SAFE_INTEGER);
        if (lineBreakData) {
            let lastBreakOffset = 0;
            for (const breakOffset of lineBreakData.breakOffsets) {
                const viewLineTokens = lineTokens.sliceAndInflate(lastBreakOffset, breakOffset, 0);
                maxCharsPerLine = Math.max(maxCharsPerLine, renderOriginalLine(renderedLineCount, viewLineTokens, _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_3__/* .LineDecoration */ .Kp.extractWrapped(actualDecorations, lastBreakOffset, breakOffset), hasCharChanges, source.mightContainNonBasicASCII, source.mightContainRTL, options, sb));
                renderedLineCount++;
                lastBreakOffset = breakOffset;
            }
            viewLineCounts.push(lineBreakData.breakOffsets.length);
        }
        else {
            viewLineCounts.push(1);
            maxCharsPerLine = Math.max(maxCharsPerLine, renderOriginalLine(renderedLineCount, lineTokens, actualDecorations, hasCharChanges, source.mightContainNonBasicASCII, source.mightContainRTL, options, sb));
            renderedLineCount++;
        }
    }
    maxCharsPerLine += options.scrollBeyondLastColumn;
    const html = sb.build();
    const trustedhtml = ttPolicy ? ttPolicy.createHTML(html) : html;
    domNode.innerHTML = trustedhtml;
    const minWidthInPx = (maxCharsPerLine * options.typicalHalfwidthCharacterWidth);
    return {
        heightInLines: renderedLineCount,
        minWidthInPx,
        viewLineCounts,
    };
}
class LineSource {
    constructor(lineTokens, lineBreakData, mightContainNonBasicASCII, mightContainRTL) {
        this.lineTokens = lineTokens;
        this.lineBreakData = lineBreakData;
        this.mightContainNonBasicASCII = mightContainNonBasicASCII;
        this.mightContainRTL = mightContainRTL;
    }
}
class RenderOptions {
    static fromEditor(editor) {
        var _a;
        const modifiedEditorOptions = editor.getOptions();
        const fontInfo = modifiedEditorOptions.get(49 /* EditorOption.fontInfo */);
        const layoutInfo = modifiedEditorOptions.get(142 /* EditorOption.layoutInfo */);
        return new RenderOptions(((_a = editor.getModel()) === null || _a === void 0 ? void 0 : _a.getOptions().tabSize) || 0, fontInfo, modifiedEditorOptions.get(32 /* EditorOption.disableMonospaceOptimizations */), fontInfo.typicalHalfwidthCharacterWidth, modifiedEditorOptions.get(102 /* EditorOption.scrollBeyondLastColumn */), modifiedEditorOptions.get(65 /* EditorOption.lineHeight */), layoutInfo.decorationsWidth, modifiedEditorOptions.get(115 /* EditorOption.stopRenderingLineAfter */), modifiedEditorOptions.get(97 /* EditorOption.renderWhitespace */), modifiedEditorOptions.get(92 /* EditorOption.renderControlCharacters */), modifiedEditorOptions.get(50 /* EditorOption.fontLigatures */));
    }
    constructor(tabSize, fontInfo, disableMonospaceOptimizations, typicalHalfwidthCharacterWidth, scrollBeyondLastColumn, lineHeight, lineDecorationsWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures) {
        this.tabSize = tabSize;
        this.fontInfo = fontInfo;
        this.disableMonospaceOptimizations = disableMonospaceOptimizations;
        this.typicalHalfwidthCharacterWidth = typicalHalfwidthCharacterWidth;
        this.scrollBeyondLastColumn = scrollBeyondLastColumn;
        this.lineHeight = lineHeight;
        this.lineDecorationsWidth = lineDecorationsWidth;
        this.stopRenderingLineAfter = stopRenderingLineAfter;
        this.renderWhitespace = renderWhitespace;
        this.renderControlCharacters = renderControlCharacters;
        this.fontLigatures = fontLigatures;
    }
}
function renderOriginalLine(viewLineIdx, lineTokens, decorations, hasCharChanges, mightContainNonBasicASCII, mightContainRTL, options, sb) {
    sb.appendString('<div class="view-line');
    if (!hasCharChanges) {
        // No char changes
        sb.appendString(' char-delete');
    }
    sb.appendString('" style="top:');
    sb.appendString(String(viewLineIdx * options.lineHeight));
    sb.appendString('px;width:1000000px;">');
    const lineContent = lineTokens.getLineContent();
    const isBasicASCII = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_5__/* .ViewLineRenderingData */ .wA.isBasicASCII(lineContent, mightContainNonBasicASCII);
    const containsRTL = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_5__/* .ViewLineRenderingData */ .wA.containsRTL(lineContent, isBasicASCII, mightContainRTL);
    const output = (0,_common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* .renderViewLine */ .d1)(new _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_4__/* .RenderLineInput */ .IJ((options.fontInfo.isMonospace && !options.disableMonospaceOptimizations), options.fontInfo.canUseHalfwidthRightwardsArrow, lineContent, false, isBasicASCII, containsRTL, 0, lineTokens, decorations, options.tabSize, 0, options.fontInfo.spaceWidth, options.fontInfo.middotWidth, options.fontInfo.wsmiddotWidth, options.stopRenderingLineAfter, options.renderWhitespace, options.renderControlCharacters, options.fontLigatures !== _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorFontLigatures */ .n0.OFF, null // Send no selections, original line cannot be selected
    ), sb);
    sb.appendString('</div>');
    return output.characterMapping.getHorizontalOffset(output.characterMapping.length);
}


/***/ }),

/***/ 63336:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ UnchangedRangesFeature; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _base_browser_ui_iconLabel_iconLabels_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38582);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13113);
/* harmony import */ var _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52610);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26794);
/* harmony import */ var _base_common_observable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1495);
/* harmony import */ var _base_common_observableImpl_autorun_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58936);
/* harmony import */ var _base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42070);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50077);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(89356);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49153);
/* harmony import */ var _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23706);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(65201);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3981);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80757);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/















class UnchangedRangesFeature extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .Disposable */ .JT {
    get isUpdatingViewZones() { return this._isUpdatingViewZones; }
    constructor(_editors, _diffModel, _options) {
        super();
        this._editors = _editors;
        this._diffModel = _diffModel;
        this._options = _options;
        this._isUpdatingViewZones = false;
        this._register(this._editors.original.onDidChangeCursorPosition(e => {
            if (e.reason === 3 /* CursorChangeReason.Explicit */) {
                const m = this._diffModel.get();
                (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_5__/* .transaction */ .PS)(tx => {
                    for (const s of this._editors.original.getSelections() || []) {
                        m === null || m === void 0 ? void 0 : m.ensureOriginalLineIsVisible(s.getStartPosition().lineNumber, tx);
                        m === null || m === void 0 ? void 0 : m.ensureOriginalLineIsVisible(s.getEndPosition().lineNumber, tx);
                    }
                });
            }
        }));
        this._register(this._editors.modified.onDidChangeCursorPosition(e => {
            if (e.reason === 3 /* CursorChangeReason.Explicit */) {
                const m = this._diffModel.get();
                (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_5__/* .transaction */ .PS)(tx => {
                    for (const s of this._editors.modified.getSelections() || []) {
                        m === null || m === void 0 ? void 0 : m.ensureModifiedLineIsVisible(s.getStartPosition().lineNumber, tx);
                        m === null || m === void 0 ? void 0 : m.ensureModifiedLineIsVisible(s.getEndPosition().lineNumber, tx);
                    }
                });
            }
        }));
        const unchangedRegions = this._diffModel.map((m, reader) => { var _a, _b; return ((_a = m === null || m === void 0 ? void 0 : m.diff.read(reader)) === null || _a === void 0 ? void 0 : _a.mappings.length) === 0 ? [] : (_b = m === null || m === void 0 ? void 0 : m.unchangedRegions.read(reader)) !== null && _b !== void 0 ? _b : []; });
        const viewZones = (0,_base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__/* .derivedWithStore */ .Be)('view zones', (reader, store) => {
            const origViewZones = [];
            const modViewZones = [];
            const sideBySide = this._options.renderSideBySide.read(reader);
            const curUnchangedRegions = unchangedRegions.read(reader);
            for (const r of curUnchangedRegions) {
                if (r.shouldHideControls(reader)) {
                    continue;
                }
                {
                    const d = (0,_base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__/* .derived */ .nK)('hiddenOriginalRangeStart', reader => r.getHiddenOriginalRange(reader).startLineNumber - 1);
                    const origVz = new _utils_js__WEBPACK_IMPORTED_MODULE_9__/* .PlaceholderViewZone */ .GD(d, 24);
                    origViewZones.push(origVz);
                    store.add(new CollapsedCodeOverlayWidget(this._editors.original, origVz, r, !sideBySide));
                }
                {
                    const d = (0,_base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__/* .derived */ .nK)('hiddenModifiedRangeStart', reader => r.getHiddenModifiedRange(reader).startLineNumber - 1);
                    const modViewZone = new _utils_js__WEBPACK_IMPORTED_MODULE_9__/* .PlaceholderViewZone */ .GD(d, 24);
                    modViewZones.push(modViewZone);
                    store.add(new CollapsedCodeOverlayWidget(this._editors.modified, modViewZone, r, false));
                }
            }
            return { origViewZones, modViewZones, };
        });
        const unchangedLinesDecoration = {
            description: 'unchanged lines',
            className: 'diff-unchanged-lines',
            isWholeLine: true,
        };
        const unchangedLinesDecorationShow = {
            description: 'Fold Unchanged',
            glyphMarginHoverMessage: new _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__/* .MarkdownString */ .W5(undefined, { isTrusted: true, supportThemeIcons: true }).appendMarkdown((0,_nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC)('foldUnchanged', 'Fold Unchanged Region')),
            glyphMarginClassName: 'fold-unchanged ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_8__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_2__/* .Codicon */ .l.fold),
            zIndex: 10001,
        };
        this._register((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .applyObservableDecorations */ .RP)(this._editors.original, (0,_base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__/* .derived */ .nK)('decorations', (reader) => {
            const curUnchangedRegions = unchangedRegions.read(reader);
            const result = curUnchangedRegions.map(r => ({
                range: r.originalRange.toInclusiveRange(),
                options: unchangedLinesDecoration,
            }));
            for (const r of curUnchangedRegions) {
                if (r.shouldHideControls(reader)) {
                    result.push({
                        range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e.fromPositions(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_13__/* .Position */ .L(r.originalLineNumber, 1)),
                        options: unchangedLinesDecorationShow
                    });
                }
            }
            return result;
        })));
        this._register((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .applyObservableDecorations */ .RP)(this._editors.modified, (0,_base_common_observableImpl_derived_js__WEBPACK_IMPORTED_MODULE_7__/* .derived */ .nK)('decorations', (reader) => {
            const curUnchangedRegions = unchangedRegions.read(reader);
            const result = curUnchangedRegions.map(r => ({
                range: r.modifiedRange.toInclusiveRange(),
                options: unchangedLinesDecoration,
            }));
            for (const r of curUnchangedRegions) {
                if (r.shouldHideControls(reader)) {
                    result.push({
                        range: _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_10__/* .LineRange */ .z.ofLength(r.modifiedLineNumber, 1).toInclusiveRange(),
                        options: unchangedLinesDecorationShow
                    });
                }
            }
            return result;
        })));
        this._register((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .applyViewZones */ .Sv)(this._editors.original, viewZones.map(v => v.origViewZones), v => this._isUpdatingViewZones = v));
        this._register((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .applyViewZones */ .Sv)(this._editors.modified, viewZones.map(v => v.modViewZones), v => this._isUpdatingViewZones = v));
        this._register((0,_base_common_observableImpl_autorun_js__WEBPACK_IMPORTED_MODULE_6__/* .autorunWithStore2 */ .b2)('update folded unchanged regions', (reader, store) => {
            const curUnchangedRegions = unchangedRegions.read(reader);
            this._editors.original.setHiddenAreas(curUnchangedRegions.map(r => r.getHiddenOriginalRange(reader).toInclusiveRange()).filter(_base_common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .isDefined */ .$K));
            this._editors.modified.setHiddenAreas(curUnchangedRegions.map(r => r.getHiddenModifiedRange(reader).toInclusiveRange()).filter(_base_common_types_js__WEBPACK_IMPORTED_MODULE_14__/* .isDefined */ .$K));
        }));
        this._register(this._editors.modified.onMouseUp(event => {
            var _a;
            if (!event.event.rightButton && event.target.position && ((_a = event.target.element) === null || _a === void 0 ? void 0 : _a.className.includes('fold-unchanged'))) {
                const lineNumber = event.target.position.lineNumber;
                const model = this._diffModel.get();
                if (!model) {
                    return;
                }
                const region = model.unchangedRegions.get().find(r => r.modifiedRange.includes(lineNumber));
                if (!region) {
                    return;
                }
                region.setState(0, 0, undefined);
                event.event.stopPropagation();
                event.event.preventDefault();
            }
        }));
        this._register(this._editors.original.onMouseUp(event => {
            var _a;
            if (!event.event.rightButton && event.target.position && ((_a = event.target.element) === null || _a === void 0 ? void 0 : _a.className.includes('fold-unchanged'))) {
                const lineNumber = event.target.position.lineNumber;
                const model = this._diffModel.get();
                if (!model) {
                    return;
                }
                const region = model.unchangedRegions.get().find(r => r.originalRange.includes(lineNumber));
                if (!region) {
                    return;
                }
                region.setState(0, 0, undefined);
                event.event.stopPropagation();
                event.event.preventDefault();
            }
        }));
    }
}
class CollapsedCodeOverlayWidget extends _utils_js__WEBPACK_IMPORTED_MODULE_9__/* .ViewZoneOverlayWidget */ .N9 {
    constructor(_editor, _viewZone, _unchangedRegion, hide) {
        const root = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div.diff-hidden-lines-widget');
        super(_editor, _viewZone, root.root);
        this._editor = _editor;
        this._unchangedRegion = _unchangedRegion;
        this.hide = hide;
        this._nodes = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div.diff-hidden-lines', [
            (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div.top@top', { title: 'Click or drag to show more above' }),
            (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div.center@content', { style: { display: 'flex' } }, [
                (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div@first', { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }, [(0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('a', { title: 'Show all', role: 'button', onclick: () => { this._unchangedRegion.showAll(undefined); } }, ...(0,_base_browser_ui_iconLabel_iconLabels_js__WEBPACK_IMPORTED_MODULE_1__/* .renderLabelWithIcons */ .T)('$(unfold)'))]),
                (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div@others', { style: { display: 'flex', justifyContent: 'center', alignItems: 'center' } }),
            ]),
            (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.h)('div.bottom@bottom', { title: 'Click or drag to show more below', role: 'button' }),
        ]);
        root.root.appendChild(this._nodes.root);
        const layoutInfo = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_5__/* .observableFromEvent */ .rD)(this._editor.onDidLayoutChange, () => this._editor.getLayoutInfo());
        if (!this.hide) {
            this._register((0,_utils_js__WEBPACK_IMPORTED_MODULE_9__/* .applyStyle */ .bg)(this._nodes.first, { width: layoutInfo.map((l) => l.contentLeft) }));
        }
        else {
            (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .reset */ .mc)(this._nodes.first);
        }
        const editor = this._editor;
        this._register((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(this._nodes.top, 'mousedown', e => {
            if (e.button !== 0) {
                return;
            }
            this._nodes.top.classList.toggle('dragging', true);
            this._nodes.root.classList.toggle('dragging', true);
            e.preventDefault();
            const startTop = e.clientY;
            let didMove = false;
            const cur = this._unchangedRegion.visibleLineCountTop.get();
            this._unchangedRegion.isDragged.set(true, undefined);
            const mouseMoveListener = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(window, 'mousemove', e => {
                const currentTop = e.clientY;
                const delta = currentTop - startTop;
                didMove = didMove || Math.abs(delta) > 2;
                const lineDelta = Math.round(delta / editor.getOption(65 /* EditorOption.lineHeight */));
                const newVal = Math.max(0, Math.min(cur + lineDelta, this._unchangedRegion.getMaxVisibleLineCountTop()));
                this._unchangedRegion.visibleLineCountTop.set(newVal, undefined);
            });
            const mouseUpListener = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(window, 'mouseup', e => {
                if (!didMove) {
                    this._unchangedRegion.showMoreAbove(20, undefined);
                }
                this._nodes.top.classList.toggle('dragging', false);
                this._nodes.root.classList.toggle('dragging', false);
                this._unchangedRegion.isDragged.set(false, undefined);
                mouseMoveListener.dispose();
                mouseUpListener.dispose();
            });
        }));
        this._register((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(this._nodes.bottom, 'mousedown', e => {
            if (e.button !== 0) {
                return;
            }
            this._nodes.bottom.classList.toggle('dragging', true);
            this._nodes.root.classList.toggle('dragging', true);
            e.preventDefault();
            const startTop = e.clientY;
            let didMove = false;
            const cur = this._unchangedRegion.visibleLineCountBottom.get();
            this._unchangedRegion.isDragged.set(true, undefined);
            const mouseMoveListener = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(window, 'mousemove', e => {
                const currentTop = e.clientY;
                const delta = currentTop - startTop;
                didMove = didMove || Math.abs(delta) > 2;
                const lineDelta = Math.round(delta / editor.getOption(65 /* EditorOption.lineHeight */));
                const newVal = Math.max(0, Math.min(cur - lineDelta, this._unchangedRegion.getMaxVisibleLineCountBottom()));
                const top = editor.getTopForLineNumber(this._unchangedRegion.originalRange.endLineNumberExclusive);
                this._unchangedRegion.visibleLineCountBottom.set(newVal, undefined);
                const top2 = editor.getTopForLineNumber(this._unchangedRegion.originalRange.endLineNumberExclusive);
                editor.setScrollTop(editor.getScrollTop() + (top2 - top));
            });
            const mouseUpListener = (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm)(window, 'mouseup', e => {
                this._unchangedRegion.isDragged.set(false, undefined);
                if (!didMove) {
                    const top = editor.getTopForLineNumber(this._unchangedRegion.originalRange.endLineNumberExclusive);
                    this._unchangedRegion.showMoreBelow(20, undefined);
                    const top2 = editor.getTopForLineNumber(this._unchangedRegion.originalRange.endLineNumberExclusive);
                    editor.setScrollTop(editor.getScrollTop() + (top2 - top));
                }
                this._nodes.bottom.classList.toggle('dragging', false);
                this._nodes.root.classList.toggle('dragging', false);
                mouseMoveListener.dispose();
                mouseUpListener.dispose();
            });
        }));
        this._register((0,_base_common_observableImpl_autorun_js__WEBPACK_IMPORTED_MODULE_6__/* .autorun */ .EH)('update labels', (reader) => {
            const children = [];
            if (!this.hide && true) {
                const lineCount = _unchangedRegion.getHiddenModifiedRange(reader).length;
                const linesHiddenText = `${lineCount} Hidden Lines`;
                children.push((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.$)('span', { title: linesHiddenText }, linesHiddenText));
            }
            // TODO@hediet implement breadcrumbs for collapsed regions
            /*
            if (_unchangedRegion.originalLineNumber === 48) {
                children.push($('span', undefined, '\u00a0|\u00a0'));
                children.push($('span', { title: 'test' }, ...renderLabelWithIcons('$(symbol-class) DiffEditorWidget2')));
            } else if (_unchangedRegion.originalLineNumber === 88) {
                children.push($('span', undefined, '\u00a0|\u00a0'));
                children.push($('span', { title: 'test' }, ...renderLabelWithIcons('$(symbol-constructor) constructor')));
            }
            */
            (0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .reset */ .mc)(this._nodes.others, ...children);
        }));
    }
}


/***/ }),

/***/ 49153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ap: function() { return /* binding */ joinCombine; },
/* harmony export */   DU: function() { return /* binding */ ObservableElementSizeObserver; },
/* harmony export */   GD: function() { return /* binding */ PlaceholderViewZone; },
/* harmony export */   N9: function() { return /* binding */ ViewZoneOverlayWidget; },
/* harmony export */   NW: function() { return /* binding */ readHotReloadableExport; },
/* harmony export */   RP: function() { return /* binding */ applyObservableDecorations; },
/* harmony export */   Sv: function() { return /* binding */ applyViewZones; },
/* harmony export */   Vm: function() { return /* binding */ animatedObservable; },
/* harmony export */   bg: function() { return /* binding */ applyStyle; },
/* harmony export */   xx: function() { return /* binding */ appendRemoveOnDispose; }
/* harmony export */ });
/* unused harmony exports ManagedOverlayWidget, observeHotReloadableExports */
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1495);
/* harmony import */ var _config_elementSizeObserver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47673);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function joinCombine(arr1, arr2, keySelector, combine) {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    const result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        const val1 = arr1[i];
        const val2 = arr2[j];
        const key1 = keySelector(val1);
        const key2 = keySelector(val2);
        if (key1 < key2) {
            result.push(val1);
            i++;
        }
        else if (key1 > key2) {
            result.push(val2);
            j++;
        }
        else {
            result.push(combine(val1, val2));
            i++;
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
// TODO make utility
function applyObservableDecorations(editor, decorations) {
    const d = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
    const decorationsCollection = editor.createDecorationsCollection();
    d.add((0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .autorun */ .EH)(`Apply decorations from ${decorations.debugName}`, reader => {
        const d = decorations.read(reader);
        decorationsCollection.set(d);
    }));
    d.add({
        dispose: () => {
            decorationsCollection.clear();
        }
    });
    return d;
}
function appendRemoveOnDispose(parent, child) {
    parent.appendChild(child);
    return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .toDisposable */ .OF)(() => {
        parent.removeChild(child);
    });
}
class ObservableElementSizeObserver extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    get width() { return this._width; }
    get height() { return this._height; }
    constructor(element, dimension) {
        super();
        this.elementSizeObserver = this._register(new _config_elementSizeObserver_js__WEBPACK_IMPORTED_MODULE_2__/* .ElementSizeObserver */ .I(element, dimension));
        this._width = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableValue */ .uh)('width', this.elementSizeObserver.getWidth());
        this._height = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableValue */ .uh)('height', this.elementSizeObserver.getHeight());
        this._register(this.elementSizeObserver.onDidChange(e => (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .transaction */ .PS)(tx => {
            this._width.set(this.elementSizeObserver.getWidth(), tx);
            this._height.set(this.elementSizeObserver.getHeight(), tx);
        })));
    }
    observe(dimension) {
        this.elementSizeObserver.observe(dimension);
    }
    setAutomaticLayout(automaticLayout) {
        if (automaticLayout) {
            this.elementSizeObserver.startObserving();
        }
        else {
            this.elementSizeObserver.stopObserving();
        }
    }
}
function animatedObservable(base, store) {
    let targetVal = base.get();
    let startVal = targetVal;
    let curVal = targetVal;
    const result = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableValue */ .uh)('animatedValue', targetVal);
    let animationStartMs = -1;
    const durationMs = 300;
    let animationFrame = undefined;
    store.add((0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .autorunHandleChanges */ .nJ)('update value', {
        createEmptyChangeSummary: () => ({ animate: false }),
        handleChange: (ctx, s) => {
            if (ctx.didChange(base)) {
                s.animate = s.animate || ctx.change;
            }
            return true;
        }
    }, (reader, s) => {
        if (animationFrame !== undefined) {
            cancelAnimationFrame(animationFrame);
            animationFrame = undefined;
        }
        startVal = curVal;
        targetVal = base.read(reader);
        animationStartMs = Date.now() - (s.animate ? 0 : durationMs);
        update();
    }));
    function update() {
        const passedMs = Date.now() - animationStartMs;
        curVal = Math.floor(easeOutExpo(passedMs, startVal, targetVal - startVal, durationMs));
        if (passedMs < durationMs) {
            animationFrame = requestAnimationFrame(update);
        }
        else {
            curVal = targetVal;
        }
        result.set(curVal, undefined);
    }
    return result;
}
function easeOutExpo(t, b, c, d) {
    return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
}
class ViewZoneOverlayWidget extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(editor, viewZone, htmlElement) {
        super();
        this._register(new ManagedOverlayWidget(editor, htmlElement));
        this._register(applyStyle(htmlElement, {
            height: viewZone.actualHeight,
            top: viewZone.actualTop,
        }));
    }
}
class PlaceholderViewZone {
    get afterLineNumber() { return this._afterLineNumber.get(); }
    constructor(_afterLineNumber, heightInPx) {
        this._afterLineNumber = _afterLineNumber;
        this.heightInPx = heightInPx;
        this.domNode = document.createElement('div');
        this._actualTop = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableValue */ .uh)('actualTop', undefined);
        this._actualHeight = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableValue */ .uh)('actualHeight', undefined);
        this.actualTop = this._actualTop;
        this.actualHeight = this._actualHeight;
        this.showInHiddenAreas = true;
        this.onChange = this._afterLineNumber;
        this.onDomNodeTop = (top) => {
            this._actualTop.set(top, undefined);
        };
        this.onComputedHeight = (height) => {
            this._actualHeight.set(height, undefined);
        };
    }
}
class ManagedOverlayWidget {
    constructor(_editor, _domElement) {
        this._editor = _editor;
        this._domElement = _domElement;
        this._overlayWidgetId = `managedOverlayWidget-${ManagedOverlayWidget._counter++}`;
        this._overlayWidget = {
            getId: () => this._overlayWidgetId,
            getDomNode: () => this._domElement,
            getPosition: () => null
        };
        this._editor.addOverlayWidget(this._overlayWidget);
    }
    dispose() {
        this._editor.removeOverlayWidget(this._overlayWidget);
    }
}
ManagedOverlayWidget._counter = 0;
function applyStyle(domNode, style) {
    return (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .autorun */ .EH)('applyStyle', (reader) => {
        for (let [key, val] of Object.entries(style)) {
            if (val && typeof val === 'object' && 'read' in val) {
                val = val.read(reader);
            }
            if (typeof val === 'number') {
                val = `${val}px`;
            }
            domNode.style[key] = val;
        }
    });
}
function readHotReloadableExport(value, reader) {
    observeHotReloadableExports([value], reader);
    return value;
}
function observeHotReloadableExports(values, reader) {
    const hotReload_deprecateExports = globalThis.$hotReload_deprecateExports;
    if (!hotReload_deprecateExports) {
        return;
    }
    const o = (0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .observableSignalFromEvent */ .aq)('reload', e => {
        function handleExports(oldExports, _newExports) {
            if ([...Object.values(oldExports)].some(v => values.includes(v))) {
                e(undefined);
                return true;
            }
            return false;
        }
        hotReload_deprecateExports.add(handleExports);
        return {
            dispose() { hotReload_deprecateExports.delete(handleExports); }
        };
    });
    o.read(reader);
}
function applyViewZones(editor, viewZones, setIsUpdating) {
    const store = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
    const lastViewZoneIds = [];
    store.add((0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .autorun */ .EH)('applyViewZones', (reader) => {
        const curViewZones = viewZones.read(reader);
        const viewZonIdsPerViewZone = new Map();
        const viewZoneIdPerOnChangeObservable = new Map();
        if (setIsUpdating) {
            setIsUpdating(true);
        }
        editor.changeViewZones(a => {
            for (const id of lastViewZoneIds) {
                a.removeZone(id);
            }
            lastViewZoneIds.length = 0;
            for (const z of curViewZones) {
                const id = a.addZone(z);
                lastViewZoneIds.push(id);
                viewZonIdsPerViewZone.set(z, id);
            }
        });
        if (setIsUpdating) {
            setIsUpdating(false);
        }
        store.add((0,_base_common_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .autorunHandleChanges */ .nJ)('layoutZone on change', {
            createEmptyChangeSummary() {
                return [];
            },
            handleChange(context, changeSummary) {
                const id = viewZoneIdPerOnChangeObservable.get(context.changedObservable);
                if (id !== undefined) {
                    changeSummary.push(id);
                }
                return true;
            },
        }, (reader, changeSummary) => {
            for (const vz of curViewZones) {
                if (vz.onChange) {
                    viewZoneIdPerOnChangeObservable.set(vz.onChange, viewZonIdsPerViewZone.get(vz));
                    vz.onChange.read(reader);
                }
            }
            if (setIsUpdating) {
                setIsUpdating(true);
            }
            editor.changeViewZones(a => { for (const id of changeSummary) {
                a.layoutZone(id);
            } });
            if (setIsUpdating) {
                setIsUpdating(false);
            }
        }));
    }));
    store.add({
        dispose() {
            if (setIsUpdating) {
                setIsUpdating(true);
            }
            editor.changeViewZones(a => { for (const id of lastViewZoneIds) {
                a.removeZone(id);
            } });
            if (setIsUpdating) {
                setIsUpdating(false);
            }
        }
    });
    return store;
}


/***/ }),

/***/ 41351:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53072);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32298);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27976);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85147);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80566);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89396);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50161);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);