"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-715a3b8f"],{

/***/ 55344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ View; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(2257);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(3981);
/* harmony import */ var _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(27661);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25702);
/* harmony import */ var _controller_pointerHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11484);
/* harmony import */ var _controller_textAreaHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50659);
/* harmony import */ var _view_viewController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28603);
/* harmony import */ var _view_viewUserInputEvents_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(13506);
/* harmony import */ var _view_viewOverlays_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28333);
/* harmony import */ var _view_viewPart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53379);
/* harmony import */ var _viewParts_contentWidgets_contentWidgets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13671);
/* harmony import */ var _viewParts_currentLineHighlight_currentLineHighlight_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18618);
/* harmony import */ var _viewParts_decorations_decorations_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(34919);
/* harmony import */ var _viewParts_editorScrollbar_editorScrollbar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73133);
/* harmony import */ var _viewParts_indentGuides_indentGuides_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50388);
/* harmony import */ var _viewParts_lineNumbers_lineNumbers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56894);
/* harmony import */ var _viewParts_lines_viewLines_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48920);
/* harmony import */ var _viewParts_linesDecorations_linesDecorations_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(33636);
/* harmony import */ var _viewParts_margin_margin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89686);
/* harmony import */ var _viewParts_marginDecorations_marginDecorations_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(91415);
/* harmony import */ var _viewParts_minimap_minimap_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(50010);
/* harmony import */ var _viewParts_overlayWidgets_overlayWidgets_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77613);
/* harmony import */ var _viewParts_overviewRuler_decorationsOverviewRuler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(15655);
/* harmony import */ var _viewParts_overviewRuler_overviewRuler_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4513);
/* harmony import */ var _viewParts_rulers_rulers_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17903);
/* harmony import */ var _viewParts_scrollDecoration_scrollDecoration_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(31021);
/* harmony import */ var _viewParts_selections_selections_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(71970);
/* harmony import */ var _viewParts_viewCursors_viewCursors_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32506);
/* harmony import */ var _viewParts_viewZones_viewZones_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(45030);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(65201);
/* harmony import */ var _view_renderingContext_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(50925);
/* harmony import */ var _common_viewModel_viewContext_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(80659);
/* harmony import */ var _common_viewLayout_viewLinesViewportData_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(62155);
/* harmony import */ var _common_viewEventHandler_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(82699);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(26236);
/* harmony import */ var _controller_mouseTarget_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(67313);
/* harmony import */ var _viewParts_blockDecorations_blockDecorations_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(181);
/* harmony import */ var _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(93275);
/* harmony import */ var _viewParts_whitespace_whitespace_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(10744);
/* harmony import */ var _viewParts_glyphMargin_glyphMargin_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(12126);
/* harmony import */ var _common_model_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(7783);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(73830);
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











































let View = class View extends _common_viewEventHandler_js__WEBPACK_IMPORTED_MODULE_26__/* .ViewEventHandler */ .O {
    constructor(commandDelegate, configuration, colorTheme, model, userInputEvents, overflowWidgetsDomNode, _instantiationService) {
        super();
        this._instantiationService = _instantiationService;
        // Actual mutable state
        this._shouldRecomputeGlyphMarginLanes = false;
        this._selections = [new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_35__/* .Selection */ .Y(1, 1, 1, 1)];
        this._renderAnimationFrame = null;
        const viewController = new _view_viewController_js__WEBPACK_IMPORTED_MODULE_4__/* .ViewController */ .N(configuration, model, userInputEvents, commandDelegate);
        // The view context is passed on to most classes (basically to reduce param. counts in ctors)
        this._context = new _common_viewModel_viewContext_js__WEBPACK_IMPORTED_MODULE_36__/* .ViewContext */ .A(configuration, colorTheme, model);
        // Ensure the view is the first event handler in order to update the layout
        this._context.addEventHandler(this);
        this._viewParts = [];
        // Keyboard handler
        this._textAreaHandler = this._instantiationService.createInstance(_controller_textAreaHandler_js__WEBPACK_IMPORTED_MODULE_3__/* .TextAreaHandler */ .H, this._context, viewController, this._createTextAreaHandlerHelper());
        this._viewParts.push(this._textAreaHandler);
        // These two dom nodes must be constructed up front, since references are needed in the layout provider (scrolling & co.)
        this._linesContent = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_37__/* .createFastDomNode */ .X)(document.createElement('div'));
        this._linesContent.setClassName('lines-content' + ' monaco-editor-background');
        this._linesContent.setPosition('absolute');
        this.domNode = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_37__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.domNode.setClassName(this._getEditorClassName());
        // Set role 'code' for better screen reader support https://github.com/microsoft/vscode/issues/93438
        this.domNode.setAttribute('role', 'code');
        this._overflowGuardContainer = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_37__/* .createFastDomNode */ .X)(document.createElement('div'));
        _view_viewPart_js__WEBPACK_IMPORTED_MODULE_6__/* .PartFingerprints */ .K.write(this._overflowGuardContainer, 3 /* PartFingerprint.OverflowGuard */);
        this._overflowGuardContainer.setClassName('overflow-guard');
        this._scrollbar = new _viewParts_editorScrollbar_editorScrollbar_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorScrollbar */ .E(this._context, this._linesContent, this.domNode, this._overflowGuardContainer);
        this._viewParts.push(this._scrollbar);
        // View Lines
        this._viewLines = new _viewParts_lines_viewLines_js__WEBPACK_IMPORTED_MODULE_13__/* .ViewLines */ .U(this._context, this._linesContent);
        // View Zones
        this._viewZones = new _viewParts_viewZones_viewZones_js__WEBPACK_IMPORTED_MODULE_25__/* .ViewZones */ .q(this._context);
        this._viewParts.push(this._viewZones);
        // Decorations overview ruler
        const decorationsOverviewRuler = new _viewParts_overviewRuler_decorationsOverviewRuler_js__WEBPACK_IMPORTED_MODULE_19__/* .DecorationsOverviewRuler */ .p(this._context);
        this._viewParts.push(decorationsOverviewRuler);
        const scrollDecoration = new _viewParts_scrollDecoration_scrollDecoration_js__WEBPACK_IMPORTED_MODULE_22__/* .ScrollDecorationViewPart */ .X(this._context);
        this._viewParts.push(scrollDecoration);
        const contentViewOverlays = new _view_viewOverlays_js__WEBPACK_IMPORTED_MODULE_5__/* .ContentViewOverlays */ .Ip(this._context);
        this._viewParts.push(contentViewOverlays);
        contentViewOverlays.addDynamicOverlay(new _viewParts_currentLineHighlight_currentLineHighlight_js__WEBPACK_IMPORTED_MODULE_8__/* .CurrentLineHighlightOverlay */ .BX(this._context));
        contentViewOverlays.addDynamicOverlay(new _viewParts_selections_selections_js__WEBPACK_IMPORTED_MODULE_23__/* .SelectionsOverlay */ .K(this._context));
        contentViewOverlays.addDynamicOverlay(new _viewParts_indentGuides_indentGuides_js__WEBPACK_IMPORTED_MODULE_11__/* .IndentGuidesOverlay */ .R(this._context));
        contentViewOverlays.addDynamicOverlay(new _viewParts_decorations_decorations_js__WEBPACK_IMPORTED_MODULE_9__/* .DecorationsOverlay */ .r(this._context));
        contentViewOverlays.addDynamicOverlay(new _viewParts_whitespace_whitespace_js__WEBPACK_IMPORTED_MODULE_31__/* .WhitespaceOverlay */ .K(this._context));
        const marginViewOverlays = new _view_viewOverlays_js__WEBPACK_IMPORTED_MODULE_5__/* .MarginViewOverlays */ .Ib(this._context);
        this._viewParts.push(marginViewOverlays);
        marginViewOverlays.addDynamicOverlay(new _viewParts_currentLineHighlight_currentLineHighlight_js__WEBPACK_IMPORTED_MODULE_8__/* .CurrentLineMarginHighlightOverlay */ .gM(this._context));
        marginViewOverlays.addDynamicOverlay(new _viewParts_marginDecorations_marginDecorations_js__WEBPACK_IMPORTED_MODULE_16__/* .MarginViewLineDecorationsOverlay */ .X(this._context));
        marginViewOverlays.addDynamicOverlay(new _viewParts_linesDecorations_linesDecorations_js__WEBPACK_IMPORTED_MODULE_14__/* .LinesDecorationsOverlay */ .U(this._context));
        marginViewOverlays.addDynamicOverlay(new _viewParts_lineNumbers_lineNumbers_js__WEBPACK_IMPORTED_MODULE_12__/* .LineNumbersOverlay */ .x(this._context));
        // Glyph margin widgets
        this._glyphMarginWidgets = new _viewParts_glyphMargin_glyphMargin_js__WEBPACK_IMPORTED_MODULE_32__/* .GlyphMarginWidgets */ .Iz(this._context);
        this._viewParts.push(this._glyphMarginWidgets);
        const margin = new _viewParts_margin_margin_js__WEBPACK_IMPORTED_MODULE_15__/* .Margin */ .Z(this._context);
        margin.getDomNode().appendChild(this._viewZones.marginDomNode);
        margin.getDomNode().appendChild(marginViewOverlays.getDomNode());
        margin.getDomNode().appendChild(this._glyphMarginWidgets.domNode);
        this._viewParts.push(margin);
        // Content widgets
        this._contentWidgets = new _viewParts_contentWidgets_contentWidgets_js__WEBPACK_IMPORTED_MODULE_7__/* .ViewContentWidgets */ .Y(this._context, this.domNode);
        this._viewParts.push(this._contentWidgets);
        this._viewCursors = new _viewParts_viewCursors_viewCursors_js__WEBPACK_IMPORTED_MODULE_24__/* .ViewCursors */ .o(this._context);
        this._viewParts.push(this._viewCursors);
        // Overlay widgets
        this._overlayWidgets = new _viewParts_overlayWidgets_overlayWidgets_js__WEBPACK_IMPORTED_MODULE_18__/* .ViewOverlayWidgets */ .c(this._context);
        this._viewParts.push(this._overlayWidgets);
        const rulers = new _viewParts_rulers_rulers_js__WEBPACK_IMPORTED_MODULE_21__/* .Rulers */ .b(this._context);
        this._viewParts.push(rulers);
        const blockOutline = new _viewParts_blockDecorations_blockDecorations_js__WEBPACK_IMPORTED_MODULE_29__/* .BlockDecorations */ .z(this._context);
        this._viewParts.push(blockOutline);
        const minimap = new _viewParts_minimap_minimap_js__WEBPACK_IMPORTED_MODULE_17__/* .Minimap */ .N(this._context);
        this._viewParts.push(minimap);
        // -------------- Wire dom nodes up
        if (decorationsOverviewRuler) {
            const overviewRulerData = this._scrollbar.getOverviewRulerLayoutInfo();
            overviewRulerData.parent.insertBefore(decorationsOverviewRuler.getDomNode(), overviewRulerData.insertBefore);
        }
        this._linesContent.appendChild(contentViewOverlays.getDomNode());
        this._linesContent.appendChild(rulers.domNode);
        this._linesContent.appendChild(this._viewZones.domNode);
        this._linesContent.appendChild(this._viewLines.getDomNode());
        this._linesContent.appendChild(this._contentWidgets.domNode);
        this._linesContent.appendChild(this._viewCursors.getDomNode());
        this._overflowGuardContainer.appendChild(margin.getDomNode());
        this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode());
        this._overflowGuardContainer.appendChild(scrollDecoration.getDomNode());
        this._overflowGuardContainer.appendChild(this._textAreaHandler.textArea);
        this._overflowGuardContainer.appendChild(this._textAreaHandler.textAreaCover);
        this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode());
        this._overflowGuardContainer.appendChild(minimap.getDomNode());
        this._overflowGuardContainer.appendChild(blockOutline.domNode);
        this.domNode.appendChild(this._overflowGuardContainer);
        if (overflowWidgetsDomNode) {
            overflowWidgetsDomNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode);
        }
        else {
            this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode);
        }
        this._applyLayout();
        // Pointer handler
        this._pointerHandler = this._register(new _controller_pointerHandler_js__WEBPACK_IMPORTED_MODULE_2__/* .PointerHandler */ .a(this._context, viewController, this._createPointerHandlerHelper()));
    }
    _flushAccumulatedAndRenderNow() {
        if (this._shouldRecomputeGlyphMarginLanes) {
            this._shouldRecomputeGlyphMarginLanes = false;
            this._context.configuration.setGlyphMarginDecorationLaneCount(this._computeGlyphMarginLaneCount());
        }
        _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_30__/* .inputLatency */ .B.onRenderStart();
        this._renderNow();
    }
    _computeGlyphMarginLaneCount() {
        const model = this._context.viewModel.model;
        let glyphs = [];
        // Add all margin decorations
        glyphs = glyphs.concat(model.getAllMarginDecorations().map((decoration) => {
            var _a, _b;
            const lane = (_b = (_a = decoration.options.glyphMargin) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : _common_model_js__WEBPACK_IMPORTED_MODULE_33__/* .GlyphMarginLane */ .U.Left;
            return { range: decoration.range, lane };
        }));
        // Add all glyph margin widgets
        glyphs = glyphs.concat(this._glyphMarginWidgets.getWidgets().map((widget) => {
            const range = model.validateRange(widget.preference.range);
            return { range, lane: widget.preference.lane };
        }));
        // Sorted by their start position
        glyphs.sort((a, b) => _common_core_range_js__WEBPACK_IMPORTED_MODULE_38__/* .Range */ .e.compareRangesUsingStarts(a.range, b.range));
        let leftDecRange = null;
        let rightDecRange = null;
        for (const decoration of glyphs) {
            if (decoration.lane === _common_model_js__WEBPACK_IMPORTED_MODULE_33__/* .GlyphMarginLane */ .U.Left && (!leftDecRange || _common_core_range_js__WEBPACK_IMPORTED_MODULE_38__/* .Range */ .e.compareRangesUsingEnds(leftDecRange, decoration.range) < 0)) {
                // assign only if the range of `decoration` ends after, which means it has a higher chance to overlap with the other lane
                leftDecRange = decoration.range;
            }
            if (decoration.lane === _common_model_js__WEBPACK_IMPORTED_MODULE_33__/* .GlyphMarginLane */ .U.Right && (!rightDecRange || _common_core_range_js__WEBPACK_IMPORTED_MODULE_38__/* .Range */ .e.compareRangesUsingEnds(rightDecRange, decoration.range) < 0)) {
                // assign only if the range of `decoration` ends after, which means it has a higher chance to overlap with the other lane
                rightDecRange = decoration.range;
            }
            if (leftDecRange && rightDecRange) {
                if (leftDecRange.endLineNumber < rightDecRange.startLineNumber) {
                    // there's no chance for `leftDecRange` to ever intersect something going further
                    leftDecRange = null;
                    continue;
                }
                if (rightDecRange.endLineNumber < leftDecRange.startLineNumber) {
                    // there's no chance for `rightDecRange` to ever intersect something going further
                    rightDecRange = null;
                    continue;
                }
                // leftDecRange and rightDecRange are intersecting or touching => we need two lanes
                return 2;
            }
        }
        return 1;
    }
    _createPointerHandlerHelper() {
        return {
            viewDomNode: this.domNode.domNode,
            linesContentDomNode: this._linesContent.domNode,
            viewLinesDomNode: this._viewLines.getDomNode().domNode,
            focusTextArea: () => {
                this.focus();
            },
            dispatchTextAreaEvent: (event) => {
                this._textAreaHandler.textArea.domNode.dispatchEvent(event);
            },
            getLastRenderData: () => {
                const lastViewCursorsRenderData = this._viewCursors.getLastRenderData() || [];
                const lastTextareaPosition = this._textAreaHandler.getLastRenderData();
                return new _controller_mouseTarget_js__WEBPACK_IMPORTED_MODULE_28__/* .PointerHandlerLastRenderData */ .sB(lastViewCursorsRenderData, lastTextareaPosition);
            },
            renderNow: () => {
                this.render(true, false);
            },
            shouldSuppressMouseDownOnViewZone: (viewZoneId) => {
                return this._viewZones.shouldSuppressMouseDownOnViewZone(viewZoneId);
            },
            shouldSuppressMouseDownOnWidget: (widgetId) => {
                return this._contentWidgets.shouldSuppressMouseDownOnWidget(widgetId);
            },
            getPositionFromDOMInfo: (spanNode, offset) => {
                this._flushAccumulatedAndRenderNow();
                return this._viewLines.getPositionFromDOMInfo(spanNode, offset);
            },
            visibleRangeForPosition: (lineNumber, column) => {
                this._flushAccumulatedAndRenderNow();
                return this._viewLines.visibleRangeForPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_39__/* .Position */ .L(lineNumber, column));
            },
            getLineWidth: (lineNumber) => {
                this._flushAccumulatedAndRenderNow();
                return this._viewLines.getLineWidth(lineNumber);
            }
        };
    }
    _createTextAreaHandlerHelper() {
        return {
            visibleRangeForPosition: (position) => {
                this._flushAccumulatedAndRenderNow();
                return this._viewLines.visibleRangeForPosition(position);
            }
        };
    }
    _applyLayout() {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        this.domNode.setWidth(layoutInfo.width);
        this.domNode.setHeight(layoutInfo.height);
        this._overflowGuardContainer.setWidth(layoutInfo.width);
        this._overflowGuardContainer.setHeight(layoutInfo.height);
        this._linesContent.setWidth(1000000);
        this._linesContent.setHeight(1000000);
    }
    _getEditorClassName() {
        const focused = this._textAreaHandler.isFocused() ? ' focused' : '';
        return this._context.configuration.options.get(139 /* EditorOption.editorClassName */) + ' ' + (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_27__/* .getThemeTypeSelector */ .m6)(this._context.theme.type) + focused;
    }
    // --- begin event handlers
    handleEvents(events) {
        super.handleEvents(events);
        this._scheduleRender();
    }
    onConfigurationChanged(e) {
        this.domNode.setClassName(this._getEditorClassName());
        this._applyLayout();
        return false;
    }
    onCursorStateChanged(e) {
        this._selections = e.selections;
        return false;
    }
    onDecorationsChanged(e) {
        if (e.affectsGlyphMargin) {
            this._shouldRecomputeGlyphMarginLanes = true;
        }
        return false;
    }
    onFocusChanged(e) {
        this.domNode.setClassName(this._getEditorClassName());
        return false;
    }
    onThemeChanged(e) {
        this._context.theme.update(e.theme);
        this.domNode.setClassName(this._getEditorClassName());
        return false;
    }
    // --- end event handlers
    dispose() {
        if (this._renderAnimationFrame !== null) {
            this._renderAnimationFrame.dispose();
            this._renderAnimationFrame = null;
        }
        this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove();
        this._context.removeEventHandler(this);
        this._viewLines.dispose();
        // Destroy view parts
        for (const viewPart of this._viewParts) {
            viewPart.dispose();
        }
        super.dispose();
    }
    _scheduleRender() {
        if (this._renderAnimationFrame === null) {
            this._renderAnimationFrame = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .runAtThisOrScheduleAtNextAnimationFrame */ .lI(this._onRenderScheduled.bind(this), 100);
        }
    }
    _onRenderScheduled() {
        this._renderAnimationFrame = null;
        this._flushAccumulatedAndRenderNow();
    }
    _renderNow() {
        safeInvokeNoArg(() => this._actualRender());
    }
    _getViewPartsToRender() {
        const result = [];
        let resultLen = 0;
        for (const viewPart of this._viewParts) {
            if (viewPart.shouldRender()) {
                result[resultLen++] = viewPart;
            }
        }
        return result;
    }
    _actualRender() {
        if (!_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .isInDOM */ .Uw(this.domNode.domNode)) {
            return;
        }
        let viewPartsToRender = this._getViewPartsToRender();
        if (!this._viewLines.shouldRender() && viewPartsToRender.length === 0) {
            // Nothing to render
            return;
        }
        const partialViewportData = this._context.viewLayout.getLinesViewportData();
        this._context.viewModel.setViewport(partialViewportData.startLineNumber, partialViewportData.endLineNumber, partialViewportData.centeredLineNumber);
        const viewportData = new _common_viewLayout_viewLinesViewportData_js__WEBPACK_IMPORTED_MODULE_40__/* .ViewportData */ .x(this._selections, partialViewportData, this._context.viewLayout.getWhitespaceViewportData(), this._context.viewModel);
        if (this._contentWidgets.shouldRender()) {
            // Give the content widgets a chance to set their max width before a possible synchronous layout
            this._contentWidgets.onBeforeRender(viewportData);
        }
        if (this._viewLines.shouldRender()) {
            this._viewLines.renderText(viewportData);
            this._viewLines.onDidRender();
            // Rendering of viewLines might cause scroll events to occur, so collect view parts to render again
            viewPartsToRender = this._getViewPartsToRender();
        }
        const renderingContext = new _view_renderingContext_js__WEBPACK_IMPORTED_MODULE_41__/* .RenderingContext */ .xh(this._context.viewLayout, viewportData, this._viewLines);
        // Render the rest of the parts
        for (const viewPart of viewPartsToRender) {
            viewPart.prepareRender(renderingContext);
        }
        for (const viewPart of viewPartsToRender) {
            viewPart.render(renderingContext);
            viewPart.onDidRender();
        }
    }
    // --- BEGIN CodeEditor helpers
    delegateVerticalScrollbarPointerDown(browserEvent) {
        this._scrollbar.delegateVerticalScrollbarPointerDown(browserEvent);
    }
    delegateScrollFromMouseWheelEvent(browserEvent) {
        this._scrollbar.delegateScrollFromMouseWheelEvent(browserEvent);
    }
    restoreState(scrollPosition) {
        this._context.viewModel.viewLayout.setScrollPosition({
            scrollTop: scrollPosition.scrollTop,
            scrollLeft: scrollPosition.scrollLeft
        }, 1 /* ScrollType.Immediate */);
        this._context.viewModel.visibleLinesStabilized();
    }
    getOffsetForColumn(modelLineNumber, modelColumn) {
        const modelPosition = this._context.viewModel.model.validatePosition({
            lineNumber: modelLineNumber,
            column: modelColumn
        });
        const viewPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(modelPosition);
        this._flushAccumulatedAndRenderNow();
        const visibleRange = this._viewLines.visibleRangeForPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_39__/* .Position */ .L(viewPosition.lineNumber, viewPosition.column));
        if (!visibleRange) {
            return -1;
        }
        return visibleRange.left;
    }
    getTargetAtClientPoint(clientX, clientY) {
        const mouseTarget = this._pointerHandler.getTargetAtClientPoint(clientX, clientY);
        if (!mouseTarget) {
            return null;
        }
        return _view_viewUserInputEvents_js__WEBPACK_IMPORTED_MODULE_42__/* .ViewUserInputEvents */ .q.convertViewToModelMouseTarget(mouseTarget, this._context.viewModel.coordinatesConverter);
    }
    createOverviewRuler(cssClassName) {
        return new _viewParts_overviewRuler_overviewRuler_js__WEBPACK_IMPORTED_MODULE_20__/* .OverviewRuler */ .V(this._context, cssClassName);
    }
    change(callback) {
        this._viewZones.changeViewZones(callback);
        this._scheduleRender();
    }
    render(now, everything) {
        if (everything) {
            // Force everything to render...
            this._viewLines.forceShouldRender();
            for (const viewPart of this._viewParts) {
                viewPart.forceShouldRender();
            }
        }
        if (now) {
            this._flushAccumulatedAndRenderNow();
        }
        else {
            this._scheduleRender();
        }
    }
    writeScreenReaderContent(reason) {
        this._textAreaHandler.writeScreenReaderContent(reason);
    }
    focus() {
        this._textAreaHandler.focusTextArea();
    }
    isFocused() {
        return this._textAreaHandler.isFocused();
    }
    setAriaOptions(options) {
        this._textAreaHandler.setAriaOptions(options);
    }
    addContentWidget(widgetData) {
        this._contentWidgets.addWidget(widgetData.widget);
        this.layoutContentWidget(widgetData);
        this._scheduleRender();
    }
    layoutContentWidget(widgetData) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this._contentWidgets.setWidgetPosition(widgetData.widget, (_b = (_a = widgetData.position) === null || _a === void 0 ? void 0 : _a.position) !== null && _b !== void 0 ? _b : null, (_d = (_c = widgetData.position) === null || _c === void 0 ? void 0 : _c.secondaryPosition) !== null && _d !== void 0 ? _d : null, (_f = (_e = widgetData.position) === null || _e === void 0 ? void 0 : _e.preference) !== null && _f !== void 0 ? _f : null, (_h = (_g = widgetData.position) === null || _g === void 0 ? void 0 : _g.positionAffinity) !== null && _h !== void 0 ? _h : null);
        this._scheduleRender();
    }
    removeContentWidget(widgetData) {
        this._contentWidgets.removeWidget(widgetData.widget);
        this._scheduleRender();
    }
    addOverlayWidget(widgetData) {
        this._overlayWidgets.addWidget(widgetData.widget);
        this.layoutOverlayWidget(widgetData);
        this._scheduleRender();
    }
    layoutOverlayWidget(widgetData) {
        const newPreference = widgetData.position ? widgetData.position.preference : null;
        const shouldRender = this._overlayWidgets.setWidgetPosition(widgetData.widget, newPreference);
        if (shouldRender) {
            this._scheduleRender();
        }
    }
    removeOverlayWidget(widgetData) {
        this._overlayWidgets.removeWidget(widgetData.widget);
        this._scheduleRender();
    }
    addGlyphMarginWidget(widgetData) {
        this._glyphMarginWidgets.addWidget(widgetData.widget);
        this._shouldRecomputeGlyphMarginLanes = true;
        this._scheduleRender();
    }
    layoutGlyphMarginWidget(widgetData) {
        const newPreference = widgetData.position;
        const shouldRender = this._glyphMarginWidgets.setWidgetPosition(widgetData.widget, newPreference);
        if (shouldRender) {
            this._shouldRecomputeGlyphMarginLanes = true;
            this._scheduleRender();
        }
    }
    removeGlyphMarginWidget(widgetData) {
        this._glyphMarginWidgets.removeWidget(widgetData.widget);
        this._shouldRecomputeGlyphMarginLanes = true;
        this._scheduleRender();
    }
};
View = __decorate([
    __param(6, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_34__/* .IInstantiationService */ .TG)
], View);

function safeInvokeNoArg(func) {
    try {
        return func();
    }
    catch (e) {
        (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .onUnexpectedError */ .dL)(e);
    }
}


/***/ })

}]);