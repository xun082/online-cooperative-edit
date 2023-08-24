"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-368790d8"],{

/***/ 97477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .inputarea {\n\tmin-width: 0;\n\tmin-height: 0;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: absolute;\n\toutline: none !important;\n\tresize: none;\n\tborder: none;\n\toverflow: hidden;\n\tcolor: transparent;\n\tbackground-color: transparent;\n\tz-index: -10;\n}\n/*.monaco-editor .inputarea {\n\tposition: fixed !important;\n\twidth: 800px !important;\n\theight: 500px !important;\n\ttop: initial !important;\n\tleft: initial !important;\n\tbottom: 0 !important;\n\tright: 0 !important;\n\tcolor: black !important;\n\tbackground: white !important;\n\tline-height: 15px !important;\n\tfont-size: 14px !important;\n\tz-index: 10 !important;\n}*/\n.monaco-editor .inputarea.ime-input {\n\tz-index: 10;\n\tcaret-color: var(--vscode-editorCursor-foreground);\n\tcolor: var(--vscode-editor-foreground);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ TabFocus; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class TabFocusImpl {
    constructor() {
        this._tabFocusTerminal = false;
        this._tabFocusEditor = false;
        this._onDidChangeTabFocus = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChangeTabFocus = this._onDidChangeTabFocus.event;
    }
    getTabFocusMode(context) {
        return context === "terminalFocus" /* TabFocusContext.Terminal */ ? this._tabFocusTerminal : this._tabFocusEditor;
    }
    setTabFocusMode(tabFocusMode, context) {
        if (context === "terminalFocus" /* TabFocusContext.Terminal */) {
            this._tabFocusTerminal = tabFocusMode;
        }
        else {
            this._tabFocusEditor = tabFocusMode;
        }
        this._onDidChangeTabFocus.fire();
    }
}
/**
 * Control what pressing Tab does.
 * If it is false, pressing Tab or Shift-Tab will be handled by the editor.
 * If it is true, pressing Tab or Shift-Tab will move the browser focus.
 * Defaults to false.
 */
const TabFocus = new TabFocusImpl();


/***/ }),

/***/ 67313:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iq: function() { return /* binding */ HitTestContext; },
/* harmony export */   ZP: function() { return /* binding */ MouseTarget; },
/* harmony export */   rp: function() { return /* binding */ MouseTargetFactory; },
/* harmony export */   sB: function() { return /* binding */ PointerHandlerLastRenderData; }
/* harmony export */ });
/* harmony import */ var _editorDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35029);
/* harmony import */ var _view_viewPart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53379);
/* harmony import */ var _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15385);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65201);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3981);
/* harmony import */ var _common_core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7218);
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56704);
/* harmony import */ var _common_cursor_cursorAtomicMoveOperations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48275);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








class UnknownHitTestResult {
    constructor(hitTarget = null) {
        this.hitTarget = hitTarget;
        this.type = 0 /* HitTestResultType.Unknown */;
    }
}
class ContentHitTestResult {
    constructor(position, spanNode, injectedText) {
        this.position = position;
        this.spanNode = spanNode;
        this.injectedText = injectedText;
        this.type = 1 /* HitTestResultType.Content */;
    }
}
var HitTestResult;
(function (HitTestResult) {
    function createFromDOMInfo(ctx, spanNode, offset) {
        const position = ctx.getPositionFromDOMInfo(spanNode, offset);
        if (position) {
            return new ContentHitTestResult(position, spanNode, null);
        }
        return new UnknownHitTestResult(spanNode);
    }
    HitTestResult.createFromDOMInfo = createFromDOMInfo;
})(HitTestResult || (HitTestResult = {}));
class PointerHandlerLastRenderData {
    constructor(lastViewCursorsRenderData, lastTextareaPosition) {
        this.lastViewCursorsRenderData = lastViewCursorsRenderData;
        this.lastTextareaPosition = lastTextareaPosition;
    }
}
class MouseTarget {
    static _deduceRage(position, range = null) {
        if (!range && position) {
            return new _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(position.lineNumber, position.column, position.lineNumber, position.column);
        }
        return range !== null && range !== void 0 ? range : null;
    }
    static createUnknown(element, mouseColumn, position) {
        return { type: 0 /* MouseTargetType.UNKNOWN */, element, mouseColumn, position, range: this._deduceRage(position) };
    }
    static createTextarea(element, mouseColumn) {
        return { type: 1 /* MouseTargetType.TEXTAREA */, element, mouseColumn, position: null, range: null };
    }
    static createMargin(type, element, mouseColumn, position, range, detail) {
        return { type, element, mouseColumn, position, range, detail };
    }
    static createViewZone(type, element, mouseColumn, position, detail) {
        return { type, element, mouseColumn, position, range: this._deduceRage(position), detail };
    }
    static createContentText(element, mouseColumn, position, range, detail) {
        return { type: 6 /* MouseTargetType.CONTENT_TEXT */, element, mouseColumn, position, range: this._deduceRage(position, range), detail };
    }
    static createContentEmpty(element, mouseColumn, position, detail) {
        return { type: 7 /* MouseTargetType.CONTENT_EMPTY */, element, mouseColumn, position, range: this._deduceRage(position), detail };
    }
    static createContentWidget(element, mouseColumn, detail) {
        return { type: 9 /* MouseTargetType.CONTENT_WIDGET */, element, mouseColumn, position: null, range: null, detail };
    }
    static createScrollbar(element, mouseColumn, position) {
        return { type: 11 /* MouseTargetType.SCROLLBAR */, element, mouseColumn, position, range: this._deduceRage(position) };
    }
    static createOverlayWidget(element, mouseColumn, detail) {
        return { type: 12 /* MouseTargetType.OVERLAY_WIDGET */, element, mouseColumn, position: null, range: null, detail };
    }
    static createOutsideEditor(mouseColumn, position, outsidePosition, outsideDistance) {
        return { type: 13 /* MouseTargetType.OUTSIDE_EDITOR */, element: null, mouseColumn, position, range: this._deduceRage(position), outsidePosition, outsideDistance };
    }
    static _typeToString(type) {
        if (type === 1 /* MouseTargetType.TEXTAREA */) {
            return 'TEXTAREA';
        }
        if (type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */) {
            return 'GUTTER_GLYPH_MARGIN';
        }
        if (type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */) {
            return 'GUTTER_LINE_NUMBERS';
        }
        if (type === 4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */) {
            return 'GUTTER_LINE_DECORATIONS';
        }
        if (type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
            return 'GUTTER_VIEW_ZONE';
        }
        if (type === 6 /* MouseTargetType.CONTENT_TEXT */) {
            return 'CONTENT_TEXT';
        }
        if (type === 7 /* MouseTargetType.CONTENT_EMPTY */) {
            return 'CONTENT_EMPTY';
        }
        if (type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */) {
            return 'CONTENT_VIEW_ZONE';
        }
        if (type === 9 /* MouseTargetType.CONTENT_WIDGET */) {
            return 'CONTENT_WIDGET';
        }
        if (type === 10 /* MouseTargetType.OVERVIEW_RULER */) {
            return 'OVERVIEW_RULER';
        }
        if (type === 11 /* MouseTargetType.SCROLLBAR */) {
            return 'SCROLLBAR';
        }
        if (type === 12 /* MouseTargetType.OVERLAY_WIDGET */) {
            return 'OVERLAY_WIDGET';
        }
        return 'UNKNOWN';
    }
    static toString(target) {
        return this._typeToString(target.type) + ': ' + target.position + ' - ' + target.range + ' - ' + JSON.stringify(target.detail);
    }
}
class ElementPath {
    static isTextArea(path) {
        return (path.length === 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 6 /* PartFingerprint.TextArea */);
    }
    static isChildOfViewLines(path) {
        return (path.length >= 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 7 /* PartFingerprint.ViewLines */);
    }
    static isStrictChildOfViewLines(path) {
        return (path.length > 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 7 /* PartFingerprint.ViewLines */);
    }
    static isChildOfScrollableElement(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 5 /* PartFingerprint.ScrollableElement */);
    }
    static isChildOfMinimap(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 8 /* PartFingerprint.Minimap */);
    }
    static isChildOfContentWidgets(path) {
        return (path.length >= 4
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[3] === 1 /* PartFingerprint.ContentWidgets */);
    }
    static isChildOfOverflowingContentWidgets(path) {
        return (path.length >= 1
            && path[0] === 2 /* PartFingerprint.OverflowingContentWidgets */);
    }
    static isChildOfOverlayWidgets(path) {
        return (path.length >= 2
            && path[0] === 3 /* PartFingerprint.OverflowGuard */
            && path[1] === 4 /* PartFingerprint.OverlayWidgets */);
    }
}
class HitTestContext {
    constructor(context, viewHelper, lastRenderData) {
        this.viewModel = context.viewModel;
        const options = context.configuration.options;
        this.layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        this.viewDomNode = viewHelper.viewDomNode;
        this.lineHeight = options.get(65 /* EditorOption.lineHeight */);
        this.stickyTabStops = options.get(114 /* EditorOption.stickyTabStops */);
        this.typicalHalfwidthCharacterWidth = options.get(49 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        this.lastRenderData = lastRenderData;
        this._context = context;
        this._viewHelper = viewHelper;
    }
    getZoneAtCoord(mouseVerticalOffset) {
        return HitTestContext.getZoneAtCoord(this._context, mouseVerticalOffset);
    }
    static getZoneAtCoord(context, mouseVerticalOffset) {
        // The target is either a view zone or the empty space after the last view-line
        const viewZoneWhitespace = context.viewLayout.getWhitespaceAtVerticalOffset(mouseVerticalOffset);
        if (viewZoneWhitespace) {
            const viewZoneMiddle = viewZoneWhitespace.verticalOffset + viewZoneWhitespace.height / 2;
            const lineCount = context.viewModel.getLineCount();
            let positionBefore = null;
            let position;
            let positionAfter = null;
            if (viewZoneWhitespace.afterLineNumber !== lineCount) {
                // There are more lines after this view zone
                positionAfter = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(viewZoneWhitespace.afterLineNumber + 1, 1);
            }
            if (viewZoneWhitespace.afterLineNumber > 0) {
                // There are more lines above this view zone
                positionBefore = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(viewZoneWhitespace.afterLineNumber, context.viewModel.getLineMaxColumn(viewZoneWhitespace.afterLineNumber));
            }
            if (positionAfter === null) {
                position = positionBefore;
            }
            else if (positionBefore === null) {
                position = positionAfter;
            }
            else if (mouseVerticalOffset < viewZoneMiddle) {
                position = positionBefore;
            }
            else {
                position = positionAfter;
            }
            return {
                viewZoneId: viewZoneWhitespace.id,
                afterLineNumber: viewZoneWhitespace.afterLineNumber,
                positionBefore: positionBefore,
                positionAfter: positionAfter,
                position: position
            };
        }
        return null;
    }
    getFullLineRangeAtCoord(mouseVerticalOffset) {
        if (this._context.viewLayout.isAfterLines(mouseVerticalOffset)) {
            // Below the last line
            const lineNumber = this._context.viewModel.getLineCount();
            const maxLineColumn = this._context.viewModel.getLineMaxColumn(lineNumber);
            return {
                range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(lineNumber, maxLineColumn, lineNumber, maxLineColumn),
                isAfterLines: true
            };
        }
        const lineNumber = this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
        const maxLineColumn = this._context.viewModel.getLineMaxColumn(lineNumber);
        return {
            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(lineNumber, 1, lineNumber, maxLineColumn),
            isAfterLines: false
        };
    }
    getLineNumberAtVerticalOffset(mouseVerticalOffset) {
        return this._context.viewLayout.getLineNumberAtVerticalOffset(mouseVerticalOffset);
    }
    isAfterLines(mouseVerticalOffset) {
        return this._context.viewLayout.isAfterLines(mouseVerticalOffset);
    }
    isInTopPadding(mouseVerticalOffset) {
        return this._context.viewLayout.isInTopPadding(mouseVerticalOffset);
    }
    isInBottomPadding(mouseVerticalOffset) {
        return this._context.viewLayout.isInBottomPadding(mouseVerticalOffset);
    }
    getVerticalOffsetForLineNumber(lineNumber) {
        return this._context.viewLayout.getVerticalOffsetForLineNumber(lineNumber);
    }
    findAttribute(element, attr) {
        return HitTestContext._findAttribute(element, attr, this._viewHelper.viewDomNode);
    }
    static _findAttribute(element, attr, stopAt) {
        while (element && element !== document.body) {
            if (element.hasAttribute && element.hasAttribute(attr)) {
                return element.getAttribute(attr);
            }
            if (element === stopAt) {
                return null;
            }
            element = element.parentNode;
        }
        return null;
    }
    getLineWidth(lineNumber) {
        return this._viewHelper.getLineWidth(lineNumber);
    }
    visibleRangeForPosition(lineNumber, column) {
        return this._viewHelper.visibleRangeForPosition(lineNumber, column);
    }
    getPositionFromDOMInfo(spanNode, offset) {
        return this._viewHelper.getPositionFromDOMInfo(spanNode, offset);
    }
    getCurrentScrollTop() {
        return this._context.viewLayout.getCurrentScrollTop();
    }
    getCurrentScrollLeft() {
        return this._context.viewLayout.getCurrentScrollLeft();
    }
}
class BareHitTestRequest {
    constructor(ctx, editorPos, pos, relativePos) {
        this.editorPos = editorPos;
        this.pos = pos;
        this.relativePos = relativePos;
        this.mouseVerticalOffset = Math.max(0, ctx.getCurrentScrollTop() + this.relativePos.y);
        this.mouseContentHorizontalOffset = ctx.getCurrentScrollLeft() + this.relativePos.x - ctx.layoutInfo.contentLeft;
        this.isInMarginArea = (this.relativePos.x < ctx.layoutInfo.contentLeft && this.relativePos.x >= ctx.layoutInfo.glyphMarginLeft);
        this.isInContentArea = !this.isInMarginArea;
        this.mouseColumn = Math.max(0, MouseTargetFactory._getMouseColumn(this.mouseContentHorizontalOffset, ctx.typicalHalfwidthCharacterWidth));
    }
}
class HitTestRequest extends BareHitTestRequest {
    constructor(ctx, editorPos, pos, relativePos, target) {
        super(ctx, editorPos, pos, relativePos);
        this._ctx = ctx;
        if (target) {
            this.target = target;
            this.targetPath = _view_viewPart_js__WEBPACK_IMPORTED_MODULE_1__/* .PartFingerprints */ .K.collect(target, ctx.viewDomNode);
        }
        else {
            this.target = null;
            this.targetPath = new Uint8Array(0);
        }
    }
    toString() {
        return `pos(${this.pos.x},${this.pos.y}), editorPos(${this.editorPos.x},${this.editorPos.y}), relativePos(${this.relativePos.x},${this.relativePos.y}), mouseVerticalOffset: ${this.mouseVerticalOffset}, mouseContentHorizontalOffset: ${this.mouseContentHorizontalOffset}\n\ttarget: ${this.target ? this.target.outerHTML : null}`;
    }
    _getMouseColumn(position = null) {
        if (position && position.column < this._ctx.viewModel.getLineMaxColumn(position.lineNumber)) {
            // Most likely, the line contains foreign decorations...
            return _common_core_cursorColumns_js__WEBPACK_IMPORTED_MODULE_3__/* .CursorColumns */ .i.visibleColumnFromColumn(this._ctx.viewModel.getLineContent(position.lineNumber), position.column, this._ctx.viewModel.model.getOptions().tabSize) + 1;
        }
        return this.mouseColumn;
    }
    fulfillUnknown(position = null) {
        return MouseTarget.createUnknown(this.target, this._getMouseColumn(position), position);
    }
    fulfillTextarea() {
        return MouseTarget.createTextarea(this.target, this._getMouseColumn());
    }
    fulfillMargin(type, position, range, detail) {
        return MouseTarget.createMargin(type, this.target, this._getMouseColumn(position), position, range, detail);
    }
    fulfillViewZone(type, position, detail) {
        return MouseTarget.createViewZone(type, this.target, this._getMouseColumn(position), position, detail);
    }
    fulfillContentText(position, range, detail) {
        return MouseTarget.createContentText(this.target, this._getMouseColumn(position), position, range, detail);
    }
    fulfillContentEmpty(position, detail) {
        return MouseTarget.createContentEmpty(this.target, this._getMouseColumn(position), position, detail);
    }
    fulfillContentWidget(detail) {
        return MouseTarget.createContentWidget(this.target, this._getMouseColumn(), detail);
    }
    fulfillScrollbar(position) {
        return MouseTarget.createScrollbar(this.target, this._getMouseColumn(position), position);
    }
    fulfillOverlayWidget(detail) {
        return MouseTarget.createOverlayWidget(this.target, this._getMouseColumn(), detail);
    }
    withTarget(target) {
        return new HitTestRequest(this._ctx, this.editorPos, this.pos, this.relativePos, target);
    }
}
const EMPTY_CONTENT_AFTER_LINES = { isAfterLines: true };
function createEmptyContentDataInLines(horizontalDistanceToText) {
    return {
        isAfterLines: false,
        horizontalDistanceToText: horizontalDistanceToText
    };
}
class MouseTargetFactory {
    constructor(context, viewHelper) {
        this._context = context;
        this._viewHelper = viewHelper;
    }
    mouseTargetIsWidget(e) {
        const t = e.target;
        const path = _view_viewPart_js__WEBPACK_IMPORTED_MODULE_1__/* .PartFingerprints */ .K.collect(t, this._viewHelper.viewDomNode);
        // Is it a content widget?
        if (ElementPath.isChildOfContentWidgets(path) || ElementPath.isChildOfOverflowingContentWidgets(path)) {
            return true;
        }
        // Is it an overlay widget?
        if (ElementPath.isChildOfOverlayWidgets(path)) {
            return true;
        }
        return false;
    }
    createMouseTarget(lastRenderData, editorPos, pos, relativePos, target) {
        const ctx = new HitTestContext(this._context, this._viewHelper, lastRenderData);
        const request = new HitTestRequest(ctx, editorPos, pos, relativePos, target);
        try {
            const r = MouseTargetFactory._createMouseTarget(ctx, request, false);
            if (r.type === 6 /* MouseTargetType.CONTENT_TEXT */) {
                // Snap to the nearest soft tab boundary if atomic soft tabs are enabled.
                if (ctx.stickyTabStops && r.position !== null) {
                    const position = MouseTargetFactory._snapToSoftTabBoundary(r.position, ctx.viewModel);
                    const range = _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e.fromPositions(position, position).plusRange(r.range);
                    return request.fulfillContentText(position, range, r.detail);
                }
            }
            // console.log(MouseTarget.toString(r));
            return r;
        }
        catch (err) {
            // console.log(err);
            return request.fulfillUnknown();
        }
    }
    static _createMouseTarget(ctx, request, domHitTestExecuted) {
        // console.log(`${domHitTestExecuted ? '=>' : ''}CAME IN REQUEST: ${request}`);
        // First ensure the request has a target
        if (request.target === null) {
            if (domHitTestExecuted) {
                // Still no target... and we have already executed hit test...
                return request.fulfillUnknown();
            }
            const hitTestResult = MouseTargetFactory._doHitTest(ctx, request);
            if (hitTestResult.type === 1 /* HitTestResultType.Content */) {
                return MouseTargetFactory.createMouseTargetFromHitTestPosition(ctx, request, hitTestResult.spanNode, hitTestResult.position, hitTestResult.injectedText);
            }
            return this._createMouseTarget(ctx, request.withTarget(hitTestResult.hitTarget), true);
        }
        // we know for a fact that request.target is not null
        const resolvedRequest = request;
        let result = null;
        result = result || MouseTargetFactory._hitTestContentWidget(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestOverlayWidget(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestMinimap(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestScrollbarSlider(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewZone(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestMargin(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewCursor(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestTextArea(ctx, resolvedRequest);
        result = result || MouseTargetFactory._hitTestViewLines(ctx, resolvedRequest, domHitTestExecuted);
        result = result || MouseTargetFactory._hitTestScrollbar(ctx, resolvedRequest);
        return (result || request.fulfillUnknown());
    }
    static _hitTestContentWidget(ctx, request) {
        // Is it a content widget?
        if (ElementPath.isChildOfContentWidgets(request.targetPath) || ElementPath.isChildOfOverflowingContentWidgets(request.targetPath)) {
            const widgetId = ctx.findAttribute(request.target, 'widgetId');
            if (widgetId) {
                return request.fulfillContentWidget(widgetId);
            }
            else {
                return request.fulfillUnknown();
            }
        }
        return null;
    }
    static _hitTestOverlayWidget(ctx, request) {
        // Is it an overlay widget?
        if (ElementPath.isChildOfOverlayWidgets(request.targetPath)) {
            const widgetId = ctx.findAttribute(request.target, 'widgetId');
            if (widgetId) {
                return request.fulfillOverlayWidget(widgetId);
            }
            else {
                return request.fulfillUnknown();
            }
        }
        return null;
    }
    static _hitTestViewCursor(ctx, request) {
        if (request.target) {
            // Check if we've hit a painted cursor
            const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
            for (const d of lastViewCursorsRenderData) {
                if (request.target === d.domNode) {
                    return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
                }
            }
        }
        if (request.isInContentArea) {
            // Edge has a bug when hit-testing the exact position of a cursor,
            // instead of returning the correct dom node, it returns the
            // first or last rendered view line dom node, therefore help it out
            // and first check if we are on top of a cursor
            const lastViewCursorsRenderData = ctx.lastRenderData.lastViewCursorsRenderData;
            const mouseContentHorizontalOffset = request.mouseContentHorizontalOffset;
            const mouseVerticalOffset = request.mouseVerticalOffset;
            for (const d of lastViewCursorsRenderData) {
                if (mouseContentHorizontalOffset < d.contentLeft) {
                    // mouse position is to the left of the cursor
                    continue;
                }
                if (mouseContentHorizontalOffset > d.contentLeft + d.width) {
                    // mouse position is to the right of the cursor
                    continue;
                }
                const cursorVerticalOffset = ctx.getVerticalOffsetForLineNumber(d.position.lineNumber);
                if (cursorVerticalOffset <= mouseVerticalOffset
                    && mouseVerticalOffset <= cursorVerticalOffset + d.height) {
                    return request.fulfillContentText(d.position, null, { mightBeForeignElement: false, injectedText: null });
                }
            }
        }
        return null;
    }
    static _hitTestViewZone(ctx, request) {
        const viewZoneData = ctx.getZoneAtCoord(request.mouseVerticalOffset);
        if (viewZoneData) {
            const mouseTargetType = (request.isInContentArea ? 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ : 5 /* MouseTargetType.GUTTER_VIEW_ZONE */);
            return request.fulfillViewZone(mouseTargetType, viewZoneData.position, viewZoneData);
        }
        return null;
    }
    static _hitTestTextArea(ctx, request) {
        // Is it the textarea?
        if (ElementPath.isTextArea(request.targetPath)) {
            if (ctx.lastRenderData.lastTextareaPosition) {
                return request.fulfillContentText(ctx.lastRenderData.lastTextareaPosition, null, { mightBeForeignElement: false, injectedText: null });
            }
            return request.fulfillTextarea();
        }
        return null;
    }
    static _hitTestMargin(ctx, request) {
        if (request.isInMarginArea) {
            const res = ctx.getFullLineRangeAtCoord(request.mouseVerticalOffset);
            const pos = res.range.getStartPosition();
            let offset = Math.abs(request.relativePos.x);
            const detail = {
                isAfterLines: res.isAfterLines,
                glyphMarginLeft: ctx.layoutInfo.glyphMarginLeft,
                glyphMarginWidth: ctx.layoutInfo.glyphMarginWidth,
                lineNumbersWidth: ctx.layoutInfo.lineNumbersWidth,
                offsetX: offset
            };
            offset -= ctx.layoutInfo.glyphMarginLeft;
            if (offset <= ctx.layoutInfo.glyphMarginWidth) {
                // On the glyph margin
                return request.fulfillMargin(2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */, pos, res.range, detail);
            }
            offset -= ctx.layoutInfo.glyphMarginWidth;
            if (offset <= ctx.layoutInfo.lineNumbersWidth) {
                // On the line numbers
                return request.fulfillMargin(3 /* MouseTargetType.GUTTER_LINE_NUMBERS */, pos, res.range, detail);
            }
            offset -= ctx.layoutInfo.lineNumbersWidth;
            // On the line decorations
            return request.fulfillMargin(4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */, pos, res.range, detail);
        }
        return null;
    }
    static _hitTestViewLines(ctx, request, domHitTestExecuted) {
        if (!ElementPath.isChildOfViewLines(request.targetPath)) {
            return null;
        }
        if (ctx.isInTopPadding(request.mouseVerticalOffset)) {
            return request.fulfillContentEmpty(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(1, 1), EMPTY_CONTENT_AFTER_LINES);
        }
        // Check if it is below any lines and any view zones
        if (ctx.isAfterLines(request.mouseVerticalOffset) || ctx.isInBottomPadding(request.mouseVerticalOffset)) {
            // This most likely indicates it happened after the last view-line
            const lineCount = ctx.viewModel.getLineCount();
            const maxLineColumn = ctx.viewModel.getLineMaxColumn(lineCount);
            return request.fulfillContentEmpty(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(lineCount, maxLineColumn), EMPTY_CONTENT_AFTER_LINES);
        }
        if (domHitTestExecuted) {
            // Check if we are hitting a view-line (can happen in the case of inline decorations on empty lines)
            // See https://github.com/microsoft/vscode/issues/46942
            if (ElementPath.isStrictChildOfViewLines(request.targetPath)) {
                const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
                if (ctx.viewModel.getLineLength(lineNumber) === 0) {
                    const lineWidth = ctx.getLineWidth(lineNumber);
                    const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                    return request.fulfillContentEmpty(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(lineNumber, 1), detail);
                }
                const lineWidth = ctx.getLineWidth(lineNumber);
                if (request.mouseContentHorizontalOffset >= lineWidth) {
                    const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
                    const pos = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(lineNumber, ctx.viewModel.getLineMaxColumn(lineNumber));
                    return request.fulfillContentEmpty(pos, detail);
                }
            }
            // We have already executed hit test...
            return request.fulfillUnknown();
        }
        const hitTestResult = MouseTargetFactory._doHitTest(ctx, request);
        if (hitTestResult.type === 1 /* HitTestResultType.Content */) {
            return MouseTargetFactory.createMouseTargetFromHitTestPosition(ctx, request, hitTestResult.spanNode, hitTestResult.position, hitTestResult.injectedText);
        }
        return this._createMouseTarget(ctx, request.withTarget(hitTestResult.hitTarget), true);
    }
    static _hitTestMinimap(ctx, request) {
        if (ElementPath.isChildOfMinimap(request.targetPath)) {
            const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
            const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
            return request.fulfillScrollbar(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(possibleLineNumber, maxColumn));
        }
        return null;
    }
    static _hitTestScrollbarSlider(ctx, request) {
        if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
            if (request.target && request.target.nodeType === 1) {
                const className = request.target.className;
                if (className && /\b(slider|scrollbar)\b/.test(className)) {
                    const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
                    const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
                    return request.fulfillScrollbar(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(possibleLineNumber, maxColumn));
                }
            }
        }
        return null;
    }
    static _hitTestScrollbar(ctx, request) {
        // Is it the overview ruler?
        // Is it a child of the scrollable element?
        if (ElementPath.isChildOfScrollableElement(request.targetPath)) {
            const possibleLineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
            const maxColumn = ctx.viewModel.getLineMaxColumn(possibleLineNumber);
            return request.fulfillScrollbar(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(possibleLineNumber, maxColumn));
        }
        return null;
    }
    getMouseColumn(relativePos) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        const mouseContentHorizontalOffset = this._context.viewLayout.getCurrentScrollLeft() + relativePos.x - layoutInfo.contentLeft;
        return MouseTargetFactory._getMouseColumn(mouseContentHorizontalOffset, options.get(49 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth);
    }
    static _getMouseColumn(mouseContentHorizontalOffset, typicalHalfwidthCharacterWidth) {
        if (mouseContentHorizontalOffset < 0) {
            return 1;
        }
        const chars = Math.round(mouseContentHorizontalOffset / typicalHalfwidthCharacterWidth);
        return (chars + 1);
    }
    static createMouseTargetFromHitTestPosition(ctx, request, spanNode, pos, injectedText) {
        const lineNumber = pos.lineNumber;
        const column = pos.column;
        const lineWidth = ctx.getLineWidth(lineNumber);
        if (request.mouseContentHorizontalOffset > lineWidth) {
            const detail = createEmptyContentDataInLines(request.mouseContentHorizontalOffset - lineWidth);
            return request.fulfillContentEmpty(pos, detail);
        }
        const visibleRange = ctx.visibleRangeForPosition(lineNumber, column);
        if (!visibleRange) {
            return request.fulfillUnknown(pos);
        }
        const columnHorizontalOffset = visibleRange.left;
        if (Math.abs(request.mouseContentHorizontalOffset - columnHorizontalOffset) < 1) {
            return request.fulfillContentText(pos, null, { mightBeForeignElement: !!injectedText, injectedText });
        }
        const points = [];
        points.push({ offset: visibleRange.left, column: column });
        if (column > 1) {
            const visibleRange = ctx.visibleRangeForPosition(lineNumber, column - 1);
            if (visibleRange) {
                points.push({ offset: visibleRange.left, column: column - 1 });
            }
        }
        const lineMaxColumn = ctx.viewModel.getLineMaxColumn(lineNumber);
        if (column < lineMaxColumn) {
            const visibleRange = ctx.visibleRangeForPosition(lineNumber, column + 1);
            if (visibleRange) {
                points.push({ offset: visibleRange.left, column: column + 1 });
            }
        }
        points.sort((a, b) => a.offset - b.offset);
        const mouseCoordinates = request.pos.toClientCoordinates();
        const spanNodeClientRect = spanNode.getBoundingClientRect();
        const mouseIsOverSpanNode = (spanNodeClientRect.left <= mouseCoordinates.clientX && mouseCoordinates.clientX <= spanNodeClientRect.right);
        let rng = null;
        for (let i = 1; i < points.length; i++) {
            const prev = points[i - 1];
            const curr = points[i];
            if (prev.offset <= request.mouseContentHorizontalOffset && request.mouseContentHorizontalOffset <= curr.offset) {
                rng = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_6__/* .Range */ .e(lineNumber, prev.column, lineNumber, curr.column);
                // See https://github.com/microsoft/vscode/issues/152819
                // Due to the use of zwj, the browser's hit test result is skewed towards the left
                // Here we try to correct that if the mouse horizontal offset is closer to the right than the left
                const prevDelta = Math.abs(prev.offset - request.mouseContentHorizontalOffset);
                const nextDelta = Math.abs(curr.offset - request.mouseContentHorizontalOffset);
                pos = (prevDelta < nextDelta
                    ? new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(lineNumber, prev.column)
                    : new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(lineNumber, curr.column));
                break;
            }
        }
        return request.fulfillContentText(pos, rng, { mightBeForeignElement: !mouseIsOverSpanNode || !!injectedText, injectedText });
    }
    /**
     * Most probably WebKit browsers and Edge
     */
    static _doHitTestWithCaretRangeFromPoint(ctx, request) {
        // In Chrome, especially on Linux it is possible to click between lines,
        // so try to adjust the `hity` below so that it lands in the center of a line
        const lineNumber = ctx.getLineNumberAtVerticalOffset(request.mouseVerticalOffset);
        const lineStartVerticalOffset = ctx.getVerticalOffsetForLineNumber(lineNumber);
        const lineEndVerticalOffset = lineStartVerticalOffset + ctx.lineHeight;
        const isBelowLastLine = (lineNumber === ctx.viewModel.getLineCount()
            && request.mouseVerticalOffset > lineEndVerticalOffset);
        if (!isBelowLastLine) {
            const lineCenteredVerticalOffset = Math.floor((lineStartVerticalOffset + lineEndVerticalOffset) / 2);
            let adjustedPageY = request.pos.y + (lineCenteredVerticalOffset - request.mouseVerticalOffset);
            if (adjustedPageY <= request.editorPos.y) {
                adjustedPageY = request.editorPos.y + 1;
            }
            if (adjustedPageY >= request.editorPos.y + request.editorPos.height) {
                adjustedPageY = request.editorPos.y + request.editorPos.height - 1;
            }
            const adjustedPage = new _editorDom_js__WEBPACK_IMPORTED_MODULE_0__/* .PageCoordinates */ .YN(request.pos.x, adjustedPageY);
            const r = this._actualDoHitTestWithCaretRangeFromPoint(ctx, adjustedPage.toClientCoordinates());
            if (r.type === 1 /* HitTestResultType.Content */) {
                return r;
            }
        }
        // Also try to hit test without the adjustment (for the edge cases that we are near the top or bottom)
        return this._actualDoHitTestWithCaretRangeFromPoint(ctx, request.pos.toClientCoordinates());
    }
    static _actualDoHitTestWithCaretRangeFromPoint(ctx, coords) {
        const shadowRoot = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_4__/* .getShadowRoot */ .Ay(ctx.viewDomNode);
        let range;
        if (shadowRoot) {
            if (typeof shadowRoot.caretRangeFromPoint === 'undefined') {
                range = shadowCaretRangeFromPoint(shadowRoot, coords.clientX, coords.clientY);
            }
            else {
                range = shadowRoot.caretRangeFromPoint(coords.clientX, coords.clientY);
            }
        }
        else {
            range = document.caretRangeFromPoint(coords.clientX, coords.clientY);
        }
        if (!range || !range.startContainer) {
            return new UnknownHitTestResult();
        }
        // Chrome always hits a TEXT_NODE, while Edge sometimes hits a token span
        const startContainer = range.startContainer;
        if (startContainer.nodeType === startContainer.TEXT_NODE) {
            // startContainer is expected to be the token text
            const parent1 = startContainer.parentNode; // expected to be the token span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line container span
            const parent3 = parent2 ? parent2.parentNode : null; // expected to be the view line div
            const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
            if (parent3ClassName === _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__/* .ViewLine */ .N.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, parent1, range.startOffset);
            }
            else {
                return new UnknownHitTestResult(startContainer.parentNode);
            }
        }
        else if (startContainer.nodeType === startContainer.ELEMENT_NODE) {
            // startContainer is expected to be the token span
            const parent1 = startContainer.parentNode; // expected to be the view line container span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line div
            const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
            if (parent2ClassName === _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__/* .ViewLine */ .N.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, startContainer, startContainer.textContent.length);
            }
            else {
                return new UnknownHitTestResult(startContainer);
            }
        }
        return new UnknownHitTestResult();
    }
    /**
     * Most probably Gecko
     */
    static _doHitTestWithCaretPositionFromPoint(ctx, coords) {
        const hitResult = document.caretPositionFromPoint(coords.clientX, coords.clientY);
        if (hitResult.offsetNode.nodeType === hitResult.offsetNode.TEXT_NODE) {
            // offsetNode is expected to be the token text
            const parent1 = hitResult.offsetNode.parentNode; // expected to be the token span
            const parent2 = parent1 ? parent1.parentNode : null; // expected to be the view line container span
            const parent3 = parent2 ? parent2.parentNode : null; // expected to be the view line div
            const parent3ClassName = parent3 && parent3.nodeType === parent3.ELEMENT_NODE ? parent3.className : null;
            if (parent3ClassName === _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__/* .ViewLine */ .N.CLASS_NAME) {
                return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode.parentNode, hitResult.offset);
            }
            else {
                return new UnknownHitTestResult(hitResult.offsetNode.parentNode);
            }
        }
        // For inline decorations, Gecko sometimes returns the `<span>` of the line and the offset is the `<span>` with the inline decoration
        // Some other times, it returns the `<span>` with the inline decoration
        if (hitResult.offsetNode.nodeType === hitResult.offsetNode.ELEMENT_NODE) {
            const parent1 = hitResult.offsetNode.parentNode;
            const parent1ClassName = parent1 && parent1.nodeType === parent1.ELEMENT_NODE ? parent1.className : null;
            const parent2 = parent1 ? parent1.parentNode : null;
            const parent2ClassName = parent2 && parent2.nodeType === parent2.ELEMENT_NODE ? parent2.className : null;
            if (parent1ClassName === _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__/* .ViewLine */ .N.CLASS_NAME) {
                // it returned the `<span>` of the line and the offset is the `<span>` with the inline decoration
                const tokenSpan = hitResult.offsetNode.childNodes[Math.min(hitResult.offset, hitResult.offsetNode.childNodes.length - 1)];
                if (tokenSpan) {
                    return HitTestResult.createFromDOMInfo(ctx, tokenSpan, 0);
                }
            }
            else if (parent2ClassName === _viewParts_lines_viewLine_js__WEBPACK_IMPORTED_MODULE_2__/* .ViewLine */ .N.CLASS_NAME) {
                // it returned the `<span>` with the inline decoration
                return HitTestResult.createFromDOMInfo(ctx, hitResult.offsetNode, 0);
            }
        }
        return new UnknownHitTestResult(hitResult.offsetNode);
    }
    static _snapToSoftTabBoundary(position, viewModel) {
        const lineContent = viewModel.getLineContent(position.lineNumber);
        const { tabSize } = viewModel.model.getOptions();
        const newPosition = _common_cursor_cursorAtomicMoveOperations_js__WEBPACK_IMPORTED_MODULE_5__/* .AtomicTabMoveOperations */ .l.atomicPosition(lineContent, position.column - 1, tabSize, 2 /* Direction.Nearest */);
        if (newPosition !== -1) {
            return new _common_core_position_js__WEBPACK_IMPORTED_MODULE_7__/* .Position */ .L(position.lineNumber, newPosition + 1);
        }
        return position;
    }
    static _doHitTest(ctx, request) {
        let result = new UnknownHitTestResult();
        if (typeof document.caretRangeFromPoint === 'function') {
            result = this._doHitTestWithCaretRangeFromPoint(ctx, request);
        }
        else if (document.caretPositionFromPoint) {
            result = this._doHitTestWithCaretPositionFromPoint(ctx, request.pos.toClientCoordinates());
        }
        if (result.type === 1 /* HitTestResultType.Content */) {
            const injectedText = ctx.viewModel.getInjectedTextAt(result.position);
            const normalizedPosition = ctx.viewModel.normalizePosition(result.position, 2 /* PositionAffinity.None */);
            if (injectedText || !normalizedPosition.equals(result.position)) {
                result = new ContentHitTestResult(normalizedPosition, result.spanNode, injectedText);
            }
        }
        return result;
    }
}
function shadowCaretRangeFromPoint(shadowRoot, x, y) {
    const range = document.createRange();
    // Get the element under the point
    let el = shadowRoot.elementFromPoint(x, y);
    if (el !== null) {
        // Get the last child of the element until its firstChild is a text node
        // This assumes that the pointer is on the right of the line, out of the tokens
        // and that we want to get the offset of the last token of the line
        while (el && el.firstChild && el.firstChild.nodeType !== el.firstChild.TEXT_NODE && el.lastChild && el.lastChild.firstChild) {
            el = el.lastChild;
        }
        // Grab its rect
        const rect = el.getBoundingClientRect();
        // And its font (the computed shorthand font property might be empty, see #3217)
        const fontStyle = window.getComputedStyle(el, null).getPropertyValue('font-style');
        const fontVariant = window.getComputedStyle(el, null).getPropertyValue('font-variant');
        const fontWeight = window.getComputedStyle(el, null).getPropertyValue('font-weight');
        const fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size');
        const lineHeight = window.getComputedStyle(el, null).getPropertyValue('line-height');
        const fontFamily = window.getComputedStyle(el, null).getPropertyValue('font-family');
        const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`;
        // And also its txt content
        const text = el.innerText;
        // Position the pixel cursor at the left of the element
        let pixelCursor = rect.left;
        let offset = 0;
        let step;
        // If the point is on the right of the box put the cursor after the last character
        if (x > rect.left + rect.width) {
            offset = text.length;
        }
        else {
            const charWidthReader = CharWidthReader.getInstance();
            // Goes through all the characters of the innerText, and checks if the x of the point
            // belongs to the character.
            for (let i = 0; i < text.length + 1; i++) {
                // The step is half the width of the character
                step = charWidthReader.getCharWidth(text.charAt(i), font) / 2;
                // Move to the center of the character
                pixelCursor += step;
                // If the x of the point is smaller that the position of the cursor, the point is over that character
                if (x < pixelCursor) {
                    offset = i;
                    break;
                }
                // Move between the current character and the next
                pixelCursor += step;
            }
        }
        // Creates a range with the text node of the element and set the offset found
        range.setStart(el.firstChild, offset);
        range.setEnd(el.firstChild, offset);
    }
    return range;
}
class CharWidthReader {
    static getInstance() {
        if (!CharWidthReader._INSTANCE) {
            CharWidthReader._INSTANCE = new CharWidthReader();
        }
        return CharWidthReader._INSTANCE;
    }
    constructor() {
        this._cache = {};
        this._canvas = document.createElement('canvas');
    }
    getCharWidth(char, font) {
        const cacheKey = char + font;
        if (this._cache[cacheKey]) {
            return this._cache[cacheKey];
        }
        const context = this._canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(char);
        const width = metrics.width;
        this._cache[cacheKey] = width;
        return width;
    }
}
CharWidthReader._INSTANCE = null;


/***/ }),

/***/ 11484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: function() { return /* binding */ PointerHandler; }
});

// UNUSED EXPORTS: PointerEventHandler

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(43765);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(45394);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseTarget.js
var controller_mouseTarget = __webpack_require__(67313);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorDom.js
var editorDom = __webpack_require__(35029);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom.js
var editorZoom = __webpack_require__(61170);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewEventHandler.js
var viewEventHandler = __webpack_require__(82699);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/mouseHandler.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/











class MouseHandler extends viewEventHandler/* ViewEventHandler */.O {
    constructor(context, viewController, viewHelper) {
        super();
        this._mouseLeaveMonitor = null;
        this._context = context;
        this.viewController = viewController;
        this.viewHelper = viewHelper;
        this.mouseTargetFactory = new controller_mouseTarget/* MouseTargetFactory */.rp(this._context, viewHelper);
        this._mouseDownOperation = this._register(new MouseDownOperation(this._context, this.viewController, this.viewHelper, this.mouseTargetFactory, (e, testEventTarget) => this._createMouseTarget(e, testEventTarget), (e) => this._getMouseColumn(e)));
        this.lastMouseLeaveTime = -1;
        this._height = this._context.configuration.options.get(142 /* EditorOption.layoutInfo */).height;
        const mouseEvents = new editorDom/* EditorMouseEventFactory */.N5(this.viewHelper.viewDomNode);
        this._register(mouseEvents.onContextMenu(this.viewHelper.viewDomNode, (e) => this._onContextMenu(e, true)));
        this._register(mouseEvents.onMouseMove(this.viewHelper.viewDomNode, (e) => {
            this._onMouseMove(e);
            // See https://github.com/microsoft/vscode/issues/138789
            // When moving the mouse really quickly, the browser sometimes forgets to
            // send us a `mouseleave` or `mouseout` event. We therefore install here
            // a global `mousemove` listener to manually recover if the mouse goes outside
            // the editor. As soon as the mouse leaves outside of the editor, we
            // remove this listener
            if (!this._mouseLeaveMonitor) {
                this._mouseLeaveMonitor = dom/* addDisposableListener */.nm(document, 'mousemove', (e) => {
                    if (!this.viewHelper.viewDomNode.contains(e.target)) {
                        // went outside the editor!
                        this._onMouseLeave(new editorDom/* EditorMouseEvent */.gy(e, false, this.viewHelper.viewDomNode));
                    }
                });
            }
        }));
        this._register(mouseEvents.onMouseUp(this.viewHelper.viewDomNode, (e) => this._onMouseUp(e)));
        this._register(mouseEvents.onMouseLeave(this.viewHelper.viewDomNode, (e) => this._onMouseLeave(e)));
        // `pointerdown` events can't be used to determine if there's a double click, or triple click
        // because their `e.detail` is always 0.
        // We will therefore save the pointer id for the mouse and then reuse it in the `mousedown` event
        // for `element.setPointerCapture`.
        let capturePointerId = 0;
        this._register(mouseEvents.onPointerDown(this.viewHelper.viewDomNode, (e, pointerId) => {
            capturePointerId = pointerId;
        }));
        // The `pointerup` listener registered by `GlobalEditorPointerMoveMonitor` does not get invoked 100% of the times.
        // I speculate that this is because the `pointerup` listener is only registered during the `mousedown` event, and perhaps
        // the `pointerup` event is already queued for dispatching, which makes it that the new listener doesn't get fired.
        // See https://github.com/microsoft/vscode/issues/146486 for repro steps.
        // To compensate for that, we simply register here a `pointerup` listener and just communicate it.
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.viewDomNode, dom/* EventType */.tw.POINTER_UP, (e) => {
            this._mouseDownOperation.onPointerUp();
        }));
        this._register(mouseEvents.onMouseDown(this.viewHelper.viewDomNode, (e) => this._onMouseDown(e, capturePointerId)));
        this._setupMouseWheelZoomListener();
        this._context.addEventHandler(this);
    }
    _setupMouseWheelZoomListener() {
        const classifier = scrollableElement/* MouseWheelClassifier */.Io.INSTANCE;
        let prevMouseWheelTime = 0;
        let gestureStartZoomLevel = editorZoom/* EditorZoom */.C.getZoomLevel();
        let gestureHasZoomModifiers = false;
        let gestureAccumulatedDelta = 0;
        const onMouseWheel = (browserEvent) => {
            this.viewController.emitMouseWheel(browserEvent);
            if (!this._context.configuration.options.get(74 /* EditorOption.mouseWheelZoom */)) {
                return;
            }
            const e = new mouseEvent/* StandardWheelEvent */.q(browserEvent);
            classifier.acceptStandardWheelEvent(e);
            if (classifier.isPhysicalMouseWheel()) {
                if (hasMouseWheelZoomModifiers(browserEvent)) {
                    const zoomLevel = editorZoom/* EditorZoom */.C.getZoomLevel();
                    const delta = e.deltaY > 0 ? 1 : -1;
                    editorZoom/* EditorZoom */.C.setZoomLevel(zoomLevel + delta);
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
            else {
                // we consider mousewheel events that occur within 50ms of each other to be part of the same gesture
                // we don't want to consider mouse wheel events where ctrl/cmd is pressed during the inertia phase
                // we also want to accumulate deltaY values from the same gesture and use that to set the zoom level
                if (Date.now() - prevMouseWheelTime > 50) {
                    // reset if more than 50ms have passed
                    gestureStartZoomLevel = editorZoom/* EditorZoom */.C.getZoomLevel();
                    gestureHasZoomModifiers = hasMouseWheelZoomModifiers(browserEvent);
                    gestureAccumulatedDelta = 0;
                }
                prevMouseWheelTime = Date.now();
                gestureAccumulatedDelta += e.deltaY;
                if (gestureHasZoomModifiers) {
                    editorZoom/* EditorZoom */.C.setZoomLevel(gestureStartZoomLevel + gestureAccumulatedDelta / 5);
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        };
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.viewDomNode, dom/* EventType */.tw.MOUSE_WHEEL, onMouseWheel, { capture: true, passive: false }));
        function hasMouseWheelZoomModifiers(browserEvent) {
            return (platform/* isMacintosh */.dz
                // on macOS we support cmd + two fingers scroll (`metaKey` set)
                // and also the two fingers pinch gesture (`ctrKey` set)
                ? ((browserEvent.metaKey || browserEvent.ctrlKey) && !browserEvent.shiftKey && !browserEvent.altKey)
                : (browserEvent.ctrlKey && !browserEvent.metaKey && !browserEvent.shiftKey && !browserEvent.altKey));
        }
    }
    dispose() {
        this._context.removeEventHandler(this);
        if (this._mouseLeaveMonitor) {
            this._mouseLeaveMonitor.dispose();
            this._mouseLeaveMonitor = null;
        }
        super.dispose();
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        if (e.hasChanged(142 /* EditorOption.layoutInfo */)) {
            // layout change
            const height = this._context.configuration.options.get(142 /* EditorOption.layoutInfo */).height;
            if (this._height !== height) {
                this._height = height;
                this._mouseDownOperation.onHeightChanged();
            }
        }
        return false;
    }
    onCursorStateChanged(e) {
        this._mouseDownOperation.onCursorStateChanged(e);
        return false;
    }
    onFocusChanged(e) {
        return false;
    }
    // --- end event handlers
    getTargetAtClientPoint(clientX, clientY) {
        const clientPos = new editorDom/* ClientCoordinates */.rU(clientX, clientY);
        const pos = clientPos.toPageCoordinates();
        const editorPos = (0,editorDom/* createEditorPagePosition */.kG)(this.viewHelper.viewDomNode);
        if (pos.y < editorPos.y || pos.y > editorPos.y + editorPos.height || pos.x < editorPos.x || pos.x > editorPos.x + editorPos.width) {
            return null;
        }
        const relativePos = (0,editorDom/* createCoordinatesRelativeToEditor */.Pp)(this.viewHelper.viewDomNode, editorPos, pos);
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), editorPos, pos, relativePos, null);
    }
    _createMouseTarget(e, testEventTarget) {
        let target = e.target;
        if (!this.viewHelper.viewDomNode.contains(target)) {
            const shadowRoot = dom/* getShadowRoot */.Ay(this.viewHelper.viewDomNode);
            if (shadowRoot) {
                target = shadowRoot.elementsFromPoint(e.posx, e.posy).find((el) => this.viewHelper.viewDomNode.contains(el));
            }
        }
        return this.mouseTargetFactory.createMouseTarget(this.viewHelper.getLastRenderData(), e.editorPos, e.pos, e.relativePos, testEventTarget ? target : null);
    }
    _getMouseColumn(e) {
        return this.mouseTargetFactory.getMouseColumn(e.relativePos);
    }
    _onContextMenu(e, testEventTarget) {
        this.viewController.emitContextMenu({
            event: e,
            target: this._createMouseTarget(e, testEventTarget)
        });
    }
    _onMouseMove(e) {
        const targetIsWidget = this.mouseTargetFactory.mouseTargetIsWidget(e);
        if (!targetIsWidget) {
            e.preventDefault();
        }
        if (this._mouseDownOperation.isActive()) {
            // In selection/drag operation
            return;
        }
        const actualMouseMoveTime = e.timestamp;
        if (actualMouseMoveTime < this.lastMouseLeaveTime) {
            // Due to throttling, this event occurred before the mouse left the editor, therefore ignore it.
            return;
        }
        this.viewController.emitMouseMove({
            event: e,
            target: this._createMouseTarget(e, true)
        });
    }
    _onMouseLeave(e) {
        if (this._mouseLeaveMonitor) {
            this._mouseLeaveMonitor.dispose();
            this._mouseLeaveMonitor = null;
        }
        this.lastMouseLeaveTime = (new Date()).getTime();
        this.viewController.emitMouseLeave({
            event: e,
            target: null
        });
    }
    _onMouseUp(e) {
        this.viewController.emitMouseUp({
            event: e,
            target: this._createMouseTarget(e, true)
        });
    }
    _onMouseDown(e, pointerId) {
        const t = this._createMouseTarget(e, true);
        const targetIsContent = (t.type === 6 /* MouseTargetType.CONTENT_TEXT */ || t.type === 7 /* MouseTargetType.CONTENT_EMPTY */);
        const targetIsGutter = (t.type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */ || t.type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */ || t.type === 4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */);
        const targetIsLineNumbers = (t.type === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */);
        const selectOnLineNumbers = this._context.configuration.options.get(107 /* EditorOption.selectOnLineNumbers */);
        const targetIsViewZone = (t.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || t.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */);
        const targetIsWidget = (t.type === 9 /* MouseTargetType.CONTENT_WIDGET */);
        let shouldHandle = e.leftButton || e.middleButton;
        if (platform/* isMacintosh */.dz && e.leftButton && e.ctrlKey) {
            shouldHandle = false;
        }
        const focus = () => {
            e.preventDefault();
            this.viewHelper.focusTextArea();
        };
        if (shouldHandle && (targetIsContent || (targetIsLineNumbers && selectOnLineNumbers))) {
            focus();
            this._mouseDownOperation.start(t.type, e, pointerId);
        }
        else if (targetIsGutter) {
            // Do not steal focus
            e.preventDefault();
        }
        else if (targetIsViewZone) {
            const viewZoneData = t.detail;
            if (shouldHandle && this.viewHelper.shouldSuppressMouseDownOnViewZone(viewZoneData.viewZoneId)) {
                focus();
                this._mouseDownOperation.start(t.type, e, pointerId);
                e.preventDefault();
            }
        }
        else if (targetIsWidget && this.viewHelper.shouldSuppressMouseDownOnWidget(t.detail)) {
            focus();
            e.preventDefault();
        }
        this.viewController.emitMouseDown({
            event: e,
            target: t
        });
    }
}
class MouseDownOperation extends lifecycle/* Disposable */.JT {
    constructor(_context, _viewController, _viewHelper, _mouseTargetFactory, createMouseTarget, getMouseColumn) {
        super();
        this._context = _context;
        this._viewController = _viewController;
        this._viewHelper = _viewHelper;
        this._mouseTargetFactory = _mouseTargetFactory;
        this._createMouseTarget = createMouseTarget;
        this._getMouseColumn = getMouseColumn;
        this._mouseMoveMonitor = this._register(new editorDom/* GlobalEditorPointerMoveMonitor */.AL(this._viewHelper.viewDomNode));
        this._topBottomDragScrolling = this._register(new TopBottomDragScrolling(this._context, this._viewHelper, this._mouseTargetFactory, (position, inSelectionMode, revealType) => this._dispatchMouse(position, inSelectionMode, revealType)));
        this._mouseState = new MouseDownState();
        this._currentSelection = new selection/* Selection */.Y(1, 1, 1, 1);
        this._isActive = false;
        this._lastMouseEvent = null;
    }
    dispose() {
        super.dispose();
    }
    isActive() {
        return this._isActive;
    }
    _onMouseDownThenMove(e) {
        this._lastMouseEvent = e;
        this._mouseState.setModifiers(e);
        const position = this._findMousePosition(e, false);
        if (!position) {
            // Ignoring because position is unknown
            return;
        }
        if (this._mouseState.isDragAndDrop) {
            this._viewController.emitMouseDrag({
                event: e,
                target: position
            });
        }
        else {
            if (position.type === 13 /* MouseTargetType.OUTSIDE_EDITOR */ && (position.outsidePosition === 'above' || position.outsidePosition === 'below')) {
                this._topBottomDragScrolling.start(position, e);
            }
            else {
                this._topBottomDragScrolling.stop();
                this._dispatchMouse(position, true, 1 /* NavigationCommandRevealType.Minimal */);
            }
        }
    }
    start(targetType, e, pointerId) {
        this._lastMouseEvent = e;
        this._mouseState.setStartedOnLineNumbers(targetType === 3 /* MouseTargetType.GUTTER_LINE_NUMBERS */);
        this._mouseState.setStartButtons(e);
        this._mouseState.setModifiers(e);
        const position = this._findMousePosition(e, true);
        if (!position || !position.position) {
            // Ignoring because position is unknown
            return;
        }
        this._mouseState.trySetCount(e.detail, position.position);
        // Overwrite the detail of the MouseEvent, as it will be sent out in an event and contributions might rely on it.
        e.detail = this._mouseState.count;
        const options = this._context.configuration.options;
        if (!options.get(89 /* EditorOption.readOnly */)
            && options.get(34 /* EditorOption.dragAndDrop */)
            && !options.get(21 /* EditorOption.columnSelection */)
            && !this._mouseState.altKey // we don't support multiple mouse
            && e.detail < 2 // only single click on a selection can work
            && !this._isActive // the mouse is not down yet
            && !this._currentSelection.isEmpty() // we don't drag single cursor
            && (position.type === 6 /* MouseTargetType.CONTENT_TEXT */) // single click on text
            && position.position && this._currentSelection.containsPosition(position.position) // single click on a selection
        ) {
            this._mouseState.isDragAndDrop = true;
            this._isActive = true;
            this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, pointerId, e.buttons, (e) => this._onMouseDownThenMove(e), (browserEvent) => {
                const position = this._findMousePosition(this._lastMouseEvent, false);
                if (browserEvent && browserEvent instanceof KeyboardEvent) {
                    // cancel
                    this._viewController.emitMouseDropCanceled();
                }
                else {
                    this._viewController.emitMouseDrop({
                        event: this._lastMouseEvent,
                        target: (position ? this._createMouseTarget(this._lastMouseEvent, true) : null) // Ignoring because position is unknown, e.g., Content View Zone
                    });
                }
                this._stop();
            });
            return;
        }
        this._mouseState.isDragAndDrop = false;
        this._dispatchMouse(position, e.shiftKey, 1 /* NavigationCommandRevealType.Minimal */);
        if (!this._isActive) {
            this._isActive = true;
            this._mouseMoveMonitor.startMonitoring(this._viewHelper.viewLinesDomNode, pointerId, e.buttons, (e) => this._onMouseDownThenMove(e), () => this._stop());
        }
    }
    _stop() {
        this._isActive = false;
        this._topBottomDragScrolling.stop();
    }
    onHeightChanged() {
        this._mouseMoveMonitor.stopMonitoring();
    }
    onPointerUp() {
        this._mouseMoveMonitor.stopMonitoring();
    }
    onCursorStateChanged(e) {
        this._currentSelection = e.selections[0];
    }
    _getPositionOutsideEditor(e) {
        const editorContent = e.editorPos;
        const model = this._context.viewModel;
        const viewLayout = this._context.viewLayout;
        const mouseColumn = this._getMouseColumn(e);
        if (e.posy < editorContent.y) {
            const outsideDistance = editorContent.y - e.posy;
            const verticalOffset = Math.max(viewLayout.getCurrentScrollTop() - outsideDistance, 0);
            const viewZoneData = controller_mouseTarget/* HitTestContext */.Iq.getZoneAtCoord(this._context, verticalOffset);
            if (viewZoneData) {
                const newPosition = this._helpPositionJumpOverViewZone(viewZoneData);
                if (newPosition) {
                    return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, newPosition, 'above', outsideDistance);
                }
            }
            const aboveLineNumber = viewLayout.getLineNumberAtVerticalOffset(verticalOffset);
            return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, new position/* Position */.L(aboveLineNumber, 1), 'above', outsideDistance);
        }
        if (e.posy > editorContent.y + editorContent.height) {
            const outsideDistance = e.posy - editorContent.y - editorContent.height;
            const verticalOffset = viewLayout.getCurrentScrollTop() + e.relativePos.y;
            const viewZoneData = controller_mouseTarget/* HitTestContext */.Iq.getZoneAtCoord(this._context, verticalOffset);
            if (viewZoneData) {
                const newPosition = this._helpPositionJumpOverViewZone(viewZoneData);
                if (newPosition) {
                    return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, newPosition, 'below', outsideDistance);
                }
            }
            const belowLineNumber = viewLayout.getLineNumberAtVerticalOffset(verticalOffset);
            return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, new position/* Position */.L(belowLineNumber, model.getLineMaxColumn(belowLineNumber)), 'below', outsideDistance);
        }
        const possibleLineNumber = viewLayout.getLineNumberAtVerticalOffset(viewLayout.getCurrentScrollTop() + e.relativePos.y);
        if (e.posx < editorContent.x) {
            const outsideDistance = editorContent.x - e.posx;
            return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, new position/* Position */.L(possibleLineNumber, 1), 'left', outsideDistance);
        }
        if (e.posx > editorContent.x + editorContent.width) {
            const outsideDistance = e.posx - editorContent.x - editorContent.width;
            return controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(mouseColumn, new position/* Position */.L(possibleLineNumber, model.getLineMaxColumn(possibleLineNumber)), 'right', outsideDistance);
        }
        return null;
    }
    _findMousePosition(e, testEventTarget) {
        const positionOutsideEditor = this._getPositionOutsideEditor(e);
        if (positionOutsideEditor) {
            return positionOutsideEditor;
        }
        const t = this._createMouseTarget(e, testEventTarget);
        const hintedPosition = t.position;
        if (!hintedPosition) {
            return null;
        }
        if (t.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */ || t.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */) {
            const newPosition = this._helpPositionJumpOverViewZone(t.detail);
            if (newPosition) {
                return controller_mouseTarget/* MouseTarget */.ZP.createViewZone(t.type, t.element, t.mouseColumn, newPosition, t.detail);
            }
        }
        return t;
    }
    _helpPositionJumpOverViewZone(viewZoneData) {
        // Force position on view zones to go above or below depending on where selection started from
        const selectionStart = new position/* Position */.L(this._currentSelection.selectionStartLineNumber, this._currentSelection.selectionStartColumn);
        const positionBefore = viewZoneData.positionBefore;
        const positionAfter = viewZoneData.positionAfter;
        if (positionBefore && positionAfter) {
            if (positionBefore.isBefore(selectionStart)) {
                return positionBefore;
            }
            else {
                return positionAfter;
            }
        }
        return null;
    }
    _dispatchMouse(position, inSelectionMode, revealType) {
        if (!position.position) {
            return;
        }
        this._viewController.dispatchMouse({
            position: position.position,
            mouseColumn: position.mouseColumn,
            startedOnLineNumbers: this._mouseState.startedOnLineNumbers,
            revealType,
            inSelectionMode: inSelectionMode,
            mouseDownCount: this._mouseState.count,
            altKey: this._mouseState.altKey,
            ctrlKey: this._mouseState.ctrlKey,
            metaKey: this._mouseState.metaKey,
            shiftKey: this._mouseState.shiftKey,
            leftButton: this._mouseState.leftButton,
            middleButton: this._mouseState.middleButton,
            onInjectedText: position.type === 6 /* MouseTargetType.CONTENT_TEXT */ && position.detail.injectedText !== null
        });
    }
}
class TopBottomDragScrolling extends lifecycle/* Disposable */.JT {
    constructor(_context, _viewHelper, _mouseTargetFactory, _dispatchMouse) {
        super();
        this._context = _context;
        this._viewHelper = _viewHelper;
        this._mouseTargetFactory = _mouseTargetFactory;
        this._dispatchMouse = _dispatchMouse;
        this._operation = null;
    }
    dispose() {
        super.dispose();
        this.stop();
    }
    start(position, mouseEvent) {
        if (this._operation) {
            this._operation.setPosition(position, mouseEvent);
        }
        else {
            this._operation = new TopBottomDragScrollingOperation(this._context, this._viewHelper, this._mouseTargetFactory, this._dispatchMouse, position, mouseEvent);
        }
    }
    stop() {
        if (this._operation) {
            this._operation.dispose();
            this._operation = null;
        }
    }
}
class TopBottomDragScrollingOperation extends lifecycle/* Disposable */.JT {
    constructor(_context, _viewHelper, _mouseTargetFactory, _dispatchMouse, position, mouseEvent) {
        super();
        this._context = _context;
        this._viewHelper = _viewHelper;
        this._mouseTargetFactory = _mouseTargetFactory;
        this._dispatchMouse = _dispatchMouse;
        this._position = position;
        this._mouseEvent = mouseEvent;
        this._lastTime = Date.now();
        this._animationFrameDisposable = dom/* scheduleAtNextAnimationFrame */.jL(() => this._execute());
    }
    dispose() {
        this._animationFrameDisposable.dispose();
    }
    setPosition(position, mouseEvent) {
        this._position = position;
        this._mouseEvent = mouseEvent;
    }
    /**
     * update internal state and return elapsed ms since last time
     */
    _tick() {
        const now = Date.now();
        const elapsed = now - this._lastTime;
        this._lastTime = now;
        return elapsed;
    }
    /**
     * get the number of lines per second to auto-scroll
     */
    _getScrollSpeed() {
        const lineHeight = this._context.configuration.options.get(65 /* EditorOption.lineHeight */);
        const viewportInLines = this._context.configuration.options.get(142 /* EditorOption.layoutInfo */).height / lineHeight;
        const outsideDistanceInLines = this._position.outsideDistance / lineHeight;
        if (outsideDistanceInLines <= 1.5) {
            return Math.max(30, viewportInLines * (1 + outsideDistanceInLines));
        }
        if (outsideDistanceInLines <= 3) {
            return Math.max(60, viewportInLines * (2 + outsideDistanceInLines));
        }
        return Math.max(200, viewportInLines * (7 + outsideDistanceInLines));
    }
    _execute() {
        const lineHeight = this._context.configuration.options.get(65 /* EditorOption.lineHeight */);
        const scrollSpeedInLines = this._getScrollSpeed();
        const elapsed = this._tick();
        const scrollInPixels = scrollSpeedInLines * (elapsed / 1000) * lineHeight;
        const scrollValue = (this._position.outsidePosition === 'above' ? -scrollInPixels : scrollInPixels);
        this._context.viewModel.viewLayout.deltaScrollNow(0, scrollValue);
        this._viewHelper.renderNow();
        const viewportData = this._context.viewLayout.getLinesViewportData();
        const edgeLineNumber = (this._position.outsidePosition === 'above' ? viewportData.startLineNumber : viewportData.endLineNumber);
        // First, try to find a position that matches the horizontal position of the mouse
        let mouseTarget;
        {
            const editorPos = (0,editorDom/* createEditorPagePosition */.kG)(this._viewHelper.viewDomNode);
            const horizontalScrollbarHeight = this._context.configuration.options.get(142 /* EditorOption.layoutInfo */).horizontalScrollbarHeight;
            const pos = new editorDom/* PageCoordinates */.YN(this._mouseEvent.pos.x, editorPos.y + editorPos.height - horizontalScrollbarHeight - 0.1);
            const relativePos = (0,editorDom/* createCoordinatesRelativeToEditor */.Pp)(this._viewHelper.viewDomNode, editorPos, pos);
            mouseTarget = this._mouseTargetFactory.createMouseTarget(this._viewHelper.getLastRenderData(), editorPos, pos, relativePos, null);
        }
        if (!mouseTarget.position || mouseTarget.position.lineNumber !== edgeLineNumber) {
            if (this._position.outsidePosition === 'above') {
                mouseTarget = controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(this._position.mouseColumn, new position/* Position */.L(edgeLineNumber, 1), 'above', this._position.outsideDistance);
            }
            else {
                mouseTarget = controller_mouseTarget/* MouseTarget */.ZP.createOutsideEditor(this._position.mouseColumn, new position/* Position */.L(edgeLineNumber, this._context.viewModel.getLineMaxColumn(edgeLineNumber)), 'below', this._position.outsideDistance);
            }
        }
        this._dispatchMouse(mouseTarget, true, 2 /* NavigationCommandRevealType.None */);
        this._animationFrameDisposable = dom/* scheduleAtNextAnimationFrame */.jL(() => this._execute());
    }
}
class MouseDownState {
    get altKey() { return this._altKey; }
    get ctrlKey() { return this._ctrlKey; }
    get metaKey() { return this._metaKey; }
    get shiftKey() { return this._shiftKey; }
    get leftButton() { return this._leftButton; }
    get middleButton() { return this._middleButton; }
    get startedOnLineNumbers() { return this._startedOnLineNumbers; }
    constructor() {
        this._altKey = false;
        this._ctrlKey = false;
        this._metaKey = false;
        this._shiftKey = false;
        this._leftButton = false;
        this._middleButton = false;
        this._startedOnLineNumbers = false;
        this._lastMouseDownPosition = null;
        this._lastMouseDownPositionEqualCount = 0;
        this._lastMouseDownCount = 0;
        this._lastSetMouseDownCountTime = 0;
        this.isDragAndDrop = false;
    }
    get count() {
        return this._lastMouseDownCount;
    }
    setModifiers(source) {
        this._altKey = source.altKey;
        this._ctrlKey = source.ctrlKey;
        this._metaKey = source.metaKey;
        this._shiftKey = source.shiftKey;
    }
    setStartButtons(source) {
        this._leftButton = source.leftButton;
        this._middleButton = source.middleButton;
    }
    setStartedOnLineNumbers(startedOnLineNumbers) {
        this._startedOnLineNumbers = startedOnLineNumbers;
    }
    trySetCount(setMouseDownCount, newMouseDownPosition) {
        // a. Invalidate multiple clicking if too much time has passed (will be hit by IE because the detail field of mouse events contains garbage in IE10)
        const currentTime = (new Date()).getTime();
        if (currentTime - this._lastSetMouseDownCountTime > MouseDownState.CLEAR_MOUSE_DOWN_COUNT_TIME) {
            setMouseDownCount = 1;
        }
        this._lastSetMouseDownCountTime = currentTime;
        // b. Ensure that we don't jump from single click to triple click in one go (will be hit by IE because the detail field of mouse events contains garbage in IE10)
        if (setMouseDownCount > this._lastMouseDownCount + 1) {
            setMouseDownCount = this._lastMouseDownCount + 1;
        }
        // c. Invalidate multiple clicking if the logical position is different
        if (this._lastMouseDownPosition && this._lastMouseDownPosition.equals(newMouseDownPosition)) {
            this._lastMouseDownPositionEqualCount++;
        }
        else {
            this._lastMouseDownPositionEqualCount = 1;
        }
        this._lastMouseDownPosition = newMouseDownPosition;
        // Finally set the lastMouseDownCount
        this._lastMouseDownCount = Math.min(setMouseDownCount, this._lastMouseDownPositionEqualCount);
    }
}
MouseDownState.CLEAR_MOUSE_DOWN_COUNT_TIME = 400; // ms

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/canIUse.js
var canIUse = __webpack_require__(69229);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput.js
var textAreaInput = __webpack_require__(49010);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/pointerHandler.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








/**
 * Currently only tested on iOS 13/ iPadOS.
 */
class PointerEventHandler extends MouseHandler {
    constructor(context, viewController, viewHelper) {
        super(context, viewController, viewHelper);
        this._register(touch/* Gesture */.o.addTarget(this.viewHelper.linesContentDomNode));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Tap, (e) => this.onTap(e)));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Change, (e) => this.onChange(e)));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Contextmenu, (e) => this._onContextMenu(new editorDom/* EditorMouseEvent */.gy(e, false, this.viewHelper.viewDomNode), false)));
        this._lastPointerType = 'mouse';
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, 'pointerdown', (e) => {
            const pointerType = e.pointerType;
            if (pointerType === 'mouse') {
                this._lastPointerType = 'mouse';
                return;
            }
            else if (pointerType === 'touch') {
                this._lastPointerType = 'touch';
            }
            else {
                this._lastPointerType = 'pen';
            }
        }));
        // PonterEvents
        const pointerEvents = new editorDom/* EditorPointerEventFactory */.tC(this.viewHelper.viewDomNode);
        this._register(pointerEvents.onPointerMove(this.viewHelper.viewDomNode, (e) => this._onMouseMove(e)));
        this._register(pointerEvents.onPointerUp(this.viewHelper.viewDomNode, (e) => this._onMouseUp(e)));
        this._register(pointerEvents.onPointerLeave(this.viewHelper.viewDomNode, (e) => this._onMouseLeave(e)));
        this._register(pointerEvents.onPointerDown(this.viewHelper.viewDomNode, (e, pointerId) => this._onMouseDown(e, pointerId)));
    }
    onTap(event) {
        if (!event.initialTarget || !this.viewHelper.linesContentDomNode.contains(event.initialTarget)) {
            return;
        }
        event.preventDefault();
        this.viewHelper.focusTextArea();
        const target = this._createMouseTarget(new editorDom/* EditorMouseEvent */.gy(event, false, this.viewHelper.viewDomNode), false);
        if (target.position) {
            // this.viewController.moveTo(target.position);
            this.viewController.dispatchMouse({
                position: target.position,
                mouseColumn: target.position.column,
                startedOnLineNumbers: false,
                revealType: 1 /* NavigationCommandRevealType.Minimal */,
                mouseDownCount: event.tapCount,
                inSelectionMode: false,
                altKey: false,
                ctrlKey: false,
                metaKey: false,
                shiftKey: false,
                leftButton: false,
                middleButton: false,
                onInjectedText: target.type === 6 /* MouseTargetType.CONTENT_TEXT */ && target.detail.injectedText !== null
            });
        }
    }
    onChange(e) {
        if (this._lastPointerType === 'touch') {
            this._context.viewModel.viewLayout.deltaScrollNow(-e.translationX, -e.translationY);
        }
    }
    _onMouseDown(e, pointerId) {
        if (e.browserEvent.pointerType === 'touch') {
            return;
        }
        super._onMouseDown(e, pointerId);
    }
}
class TouchHandler extends MouseHandler {
    constructor(context, viewController, viewHelper) {
        super(context, viewController, viewHelper);
        this._register(touch/* Gesture */.o.addTarget(this.viewHelper.linesContentDomNode));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Tap, (e) => this.onTap(e)));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Change, (e) => this.onChange(e)));
        this._register(dom/* addDisposableListener */.nm(this.viewHelper.linesContentDomNode, touch/* EventType */.t.Contextmenu, (e) => this._onContextMenu(new editorDom/* EditorMouseEvent */.gy(e, false, this.viewHelper.viewDomNode), false)));
    }
    onTap(event) {
        event.preventDefault();
        this.viewHelper.focusTextArea();
        const target = this._createMouseTarget(new editorDom/* EditorMouseEvent */.gy(event, false, this.viewHelper.viewDomNode), false);
        if (target.position) {
            // Send the tap event also to the <textarea> (for input purposes)
            const event = document.createEvent('CustomEvent');
            event.initEvent(textAreaInput/* TextAreaSyntethicEvents */.pd.Tap, false, true);
            this.viewHelper.dispatchTextAreaEvent(event);
            this.viewController.moveTo(target.position, 1 /* NavigationCommandRevealType.Minimal */);
        }
    }
    onChange(e) {
        this._context.viewModel.viewLayout.deltaScrollNow(-e.translationX, -e.translationY);
    }
}
class PointerHandler extends lifecycle/* Disposable */.JT {
    constructor(context, viewController, viewHelper) {
        super();
        if ((platform/* isIOS */.gn && canIUse/* BrowserFeatures */.D.pointerEvents)) {
            this.handler = this._register(new PointerEventHandler(context, viewController, viewHelper));
        }
        else if (window.TouchEvent) {
            this.handler = this._register(new TouchHandler(context, viewController, viewHelper));
        }
        else {
            this.handler = this._register(new MouseHandler(context, viewController, viewHelper));
        }
    }
    getTargetAtClientPoint(clientX, clientY) {
        return this.handler.getTargetAtClientPoint(clientX, clientY);
    }
}


/***/ }),

/***/ 50659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: function() { return /* binding */ TextAreaHandler; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler.css
var textAreaHandler = __webpack_require__(97477);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(textAreaHandler/* default */.Z, options);




       /* harmony default export */ var controller_textAreaHandler = (textAreaHandler/* default */.Z && textAreaHandler/* default */.Z.locals ? textAreaHandler/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js
var browser = __webpack_require__(18463);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js
var fastDomNode = __webpack_require__(27661);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js
var domFontInfo = __webpack_require__(93887);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaInput.js
var textAreaInput = __webpack_require__(49010);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaState.js
var textAreaState = __webpack_require__(74846);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart.js
var viewPart = __webpack_require__(53379);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/lineNumbers/lineNumbers.js + 1 modules
var lineNumbers = __webpack_require__(56894);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/margin/margin.js + 1 modules
var margin = __webpack_require__(89686);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/wordCharacterClassifier.js
var wordCharacterClassifier = __webpack_require__(5927);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.js + 1 modules
var mouseCursor = __webpack_require__(97039);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(4186);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/ime.js
var ime = __webpack_require__(85530);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(13748);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/controller/textAreaHandler.js
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






















class VisibleTextAreaData {
    constructor(_context, modelLineNumber, distanceToModelLineStart, widthOfHiddenLineTextBefore, distanceToModelLineEnd) {
        this._context = _context;
        this.modelLineNumber = modelLineNumber;
        this.distanceToModelLineStart = distanceToModelLineStart;
        this.widthOfHiddenLineTextBefore = widthOfHiddenLineTextBefore;
        this.distanceToModelLineEnd = distanceToModelLineEnd;
        this._visibleTextAreaBrand = undefined;
        this.startPosition = null;
        this.endPosition = null;
        this.visibleTextareaStart = null;
        this.visibleTextareaEnd = null;
        /**
         * When doing composition, the currently composed text might be split up into
         * multiple tokens, then merged again into a single token, etc. Here we attempt
         * to keep the presentation of the <textarea> stable by using the previous used
         * style if multiple tokens come into play. This avoids flickering.
         */
        this._previousPresentation = null;
    }
    prepareRender(visibleRangeProvider) {
        const startModelPosition = new position/* Position */.L(this.modelLineNumber, this.distanceToModelLineStart + 1);
        const endModelPosition = new position/* Position */.L(this.modelLineNumber, this._context.viewModel.model.getLineMaxColumn(this.modelLineNumber) - this.distanceToModelLineEnd);
        this.startPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(startModelPosition);
        this.endPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(endModelPosition);
        if (this.startPosition.lineNumber === this.endPosition.lineNumber) {
            this.visibleTextareaStart = visibleRangeProvider.visibleRangeForPosition(this.startPosition);
            this.visibleTextareaEnd = visibleRangeProvider.visibleRangeForPosition(this.endPosition);
        }
        else {
            // TODO: what if the view positions are not on the same line?
            this.visibleTextareaStart = null;
            this.visibleTextareaEnd = null;
        }
    }
    definePresentation(tokenPresentation) {
        if (!this._previousPresentation) {
            // To avoid flickering, once set, always reuse a presentation throughout the entire IME session
            if (tokenPresentation) {
                this._previousPresentation = tokenPresentation;
            }
            else {
                this._previousPresentation = {
                    foreground: 1 /* ColorId.DefaultForeground */,
                    italic: false,
                    bold: false,
                    underline: false,
                    strikethrough: false,
                };
            }
        }
        return this._previousPresentation;
    }
}
const canUseZeroSizeTextarea = (browser/* isFirefox */.vU);
let TextAreaHandler = class TextAreaHandler extends viewPart/* ViewPart */.E {
    constructor(context, viewController, visibleRangeProvider, _keybindingService) {
        super(context);
        this._keybindingService = _keybindingService;
        this._primaryCursorPosition = new position/* Position */.L(1, 1);
        this._primaryCursorVisibleRange = null;
        this._viewController = viewController;
        this._visibleRangeProvider = visibleRangeProvider;
        this._scrollLeft = 0;
        this._scrollTop = 0;
        const options = this._context.configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        this._setAccessibilityOptions(options);
        this._contentLeft = layoutInfo.contentLeft;
        this._contentWidth = layoutInfo.contentWidth;
        this._contentHeight = layoutInfo.height;
        this._fontInfo = options.get(49 /* EditorOption.fontInfo */);
        this._lineHeight = options.get(65 /* EditorOption.lineHeight */);
        this._emptySelectionClipboard = options.get(36 /* EditorOption.emptySelectionClipboard */);
        this._copyWithSyntaxHighlighting = options.get(24 /* EditorOption.copyWithSyntaxHighlighting */);
        this._visibleTextArea = null;
        this._selections = [new selection/* Selection */.Y(1, 1, 1, 1)];
        this._modelSelections = [new selection/* Selection */.Y(1, 1, 1, 1)];
        this._lastRenderPosition = null;
        // Text Area (The focus will always be in the textarea when the cursor is blinking)
        this.textArea = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('textarea'));
        viewPart/* PartFingerprints */.K.write(this.textArea, 6 /* PartFingerprint.TextArea */);
        this.textArea.setClassName(`inputarea ${mouseCursor/* MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */.S}`);
        this.textArea.setAttribute('wrap', this._textAreaWrapping && !this._visibleTextArea ? 'on' : 'off');
        const { tabSize } = this._context.viewModel.model.getOptions();
        this.textArea.domNode.style.tabSize = `${tabSize * this._fontInfo.spaceWidth}px`;
        this.textArea.setAttribute('autocorrect', 'off');
        this.textArea.setAttribute('autocapitalize', 'off');
        this.textArea.setAttribute('autocomplete', 'off');
        this.textArea.setAttribute('spellcheck', 'false');
        this.textArea.setAttribute('aria-label', this._getAriaLabel(options));
        this.textArea.setAttribute('aria-required', options.get(5 /* EditorOption.ariaRequired */) ? 'true' : 'false');
        this.textArea.setAttribute('tabindex', String(options.get(122 /* EditorOption.tabIndex */)));
        this.textArea.setAttribute('role', 'textbox');
        this.textArea.setAttribute('aria-roledescription', nls/* localize */.NC('editor', "editor"));
        this.textArea.setAttribute('aria-multiline', 'true');
        this.textArea.setAttribute('aria-haspopup', 'false');
        this.textArea.setAttribute('aria-autocomplete', 'both');
        this._ensureReadOnlyAttribute();
        this.textAreaCover = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
        this.textAreaCover.setPosition('absolute');
        const simpleModel = {
            getLineCount: () => {
                return this._context.viewModel.getLineCount();
            },
            getLineMaxColumn: (lineNumber) => {
                return this._context.viewModel.getLineMaxColumn(lineNumber);
            },
            getValueInRange: (range, eol) => {
                return this._context.viewModel.getValueInRange(range, eol);
            },
            getValueLengthInRange: (range, eol) => {
                return this._context.viewModel.getValueLengthInRange(range, eol);
            },
            modifyPosition: (position, offset) => {
                return this._context.viewModel.modifyPosition(position, offset);
            }
        };
        const textAreaInputHost = {
            getDataToCopy: () => {
                const rawTextToCopy = this._context.viewModel.getPlainTextToCopy(this._modelSelections, this._emptySelectionClipboard, platform/* isWindows */.ED);
                const newLineCharacter = this._context.viewModel.model.getEOL();
                const isFromEmptySelection = (this._emptySelectionClipboard && this._modelSelections.length === 1 && this._modelSelections[0].isEmpty());
                const multicursorText = (Array.isArray(rawTextToCopy) ? rawTextToCopy : null);
                const text = (Array.isArray(rawTextToCopy) ? rawTextToCopy.join(newLineCharacter) : rawTextToCopy);
                let html = undefined;
                let mode = null;
                if (textAreaInput/* CopyOptions */.RA.forceCopyWithSyntaxHighlighting || (this._copyWithSyntaxHighlighting && text.length < 65536)) {
                    const richText = this._context.viewModel.getRichTextToCopy(this._modelSelections, this._emptySelectionClipboard);
                    if (richText) {
                        html = richText.html;
                        mode = richText.mode;
                    }
                }
                return {
                    isFromEmptySelection,
                    multicursorText,
                    text,
                    html,
                    mode
                };
            },
            getScreenReaderContent: () => {
                if (this._accessibilitySupport === 1 /* AccessibilitySupport.Disabled */) {
                    // We know for a fact that a screen reader is not attached
                    // On OSX, we write the character before the cursor to allow for "long-press" composition
                    // Also on OSX, we write the word before the cursor to allow for the Accessibility Keyboard to give good hints
                    const selection = this._selections[0];
                    if (platform/* isMacintosh */.dz && selection.isEmpty()) {
                        const position = selection.getStartPosition();
                        let textBefore = this._getWordBeforePosition(position);
                        if (textBefore.length === 0) {
                            textBefore = this._getCharacterBeforePosition(position);
                        }
                        if (textBefore.length > 0) {
                            return new textAreaState/* TextAreaState */.un(textBefore, textBefore.length, textBefore.length, range/* Range */.e.fromPositions(position), 0);
                        }
                    }
                    // on macOS, write current selection into textarea will allow system text services pick selected text,
                    // but we still want to limit the amount of text given Chromium handles very poorly text even of a few
                    // thousand chars
                    // (https://github.com/microsoft/vscode/issues/27799)
                    const LIMIT_CHARS = 500;
                    if (platform/* isMacintosh */.dz && !selection.isEmpty() && simpleModel.getValueLengthInRange(selection, 0 /* EndOfLinePreference.TextDefined */) < LIMIT_CHARS) {
                        const text = simpleModel.getValueInRange(selection, 0 /* EndOfLinePreference.TextDefined */);
                        return new textAreaState/* TextAreaState */.un(text, 0, text.length, selection, 0);
                    }
                    // on Safari, document.execCommand('cut') and document.execCommand('copy') will just not work
                    // if the textarea has no content selected. So if there is an editor selection, ensure something
                    // is selected in the textarea.
                    if (browser/* isSafari */.G6 && !selection.isEmpty()) {
                        const placeholderText = 'vscode-placeholder';
                        return new textAreaState/* TextAreaState */.un(placeholderText, 0, placeholderText.length, null, undefined);
                    }
                    return textAreaState/* TextAreaState */.un.EMPTY;
                }
                if (browser/* isAndroid */.Dt) {
                    // when tapping in the editor on a word, Android enters composition mode.
                    // in the `compositionstart` event we cannot clear the textarea, because
                    // it then forgets to ever send a `compositionend`.
                    // we therefore only write the current word in the textarea
                    const selection = this._selections[0];
                    if (selection.isEmpty()) {
                        const position = selection.getStartPosition();
                        const [wordAtPosition, positionOffsetInWord] = this._getAndroidWordAtPosition(position);
                        if (wordAtPosition.length > 0) {
                            return new textAreaState/* TextAreaState */.un(wordAtPosition, positionOffsetInWord, positionOffsetInWord, range/* Range */.e.fromPositions(position), 0);
                        }
                    }
                    return textAreaState/* TextAreaState */.un.EMPTY;
                }
                return textAreaState/* PagedScreenReaderStrategy */.ee.fromEditorSelection(simpleModel, this._selections[0], this._accessibilityPageSize, this._accessibilitySupport === 0 /* AccessibilitySupport.Unknown */);
            },
            deduceModelPosition: (viewAnchorPosition, deltaOffset, lineFeedCnt) => {
                return this._context.viewModel.deduceModelPositionRelativeToViewPosition(viewAnchorPosition, deltaOffset, lineFeedCnt);
            }
        };
        const textAreaWrapper = this._register(new textAreaInput/* TextAreaWrapper */.Tj(this.textArea.domNode));
        this._textAreaInput = this._register(new textAreaInput/* TextAreaInput */.Fz(textAreaInputHost, textAreaWrapper, platform.OS, {
            isAndroid: browser/* isAndroid */.Dt,
            isChrome: browser/* isChrome */.i7,
            isFirefox: browser/* isFirefox */.vU,
            isSafari: browser/* isSafari */.G6,
        }));
        this._register(this._textAreaInput.onKeyDown((e) => {
            this._viewController.emitKeyDown(e);
        }));
        this._register(this._textAreaInput.onKeyUp((e) => {
            this._viewController.emitKeyUp(e);
        }));
        this._register(this._textAreaInput.onPaste((e) => {
            let pasteOnNewLine = false;
            let multicursorText = null;
            let mode = null;
            if (e.metadata) {
                pasteOnNewLine = (this._emptySelectionClipboard && !!e.metadata.isFromEmptySelection);
                multicursorText = (typeof e.metadata.multicursorText !== 'undefined' ? e.metadata.multicursorText : null);
                mode = e.metadata.mode;
            }
            this._viewController.paste(e.text, pasteOnNewLine, multicursorText, mode);
        }));
        this._register(this._textAreaInput.onCut(() => {
            this._viewController.cut();
        }));
        this._register(this._textAreaInput.onType((e) => {
            if (e.replacePrevCharCnt || e.replaceNextCharCnt || e.positionDelta) {
                // must be handled through the new command
                if (textAreaState/* _debugComposition */.al) {
                    console.log(` => compositionType: <<${e.text}>>, ${e.replacePrevCharCnt}, ${e.replaceNextCharCnt}, ${e.positionDelta}`);
                }
                this._viewController.compositionType(e.text, e.replacePrevCharCnt, e.replaceNextCharCnt, e.positionDelta);
            }
            else {
                if (textAreaState/* _debugComposition */.al) {
                    console.log(` => type: <<${e.text}>>`);
                }
                this._viewController.type(e.text);
            }
        }));
        this._register(this._textAreaInput.onSelectionChangeRequest((modelSelection) => {
            this._viewController.setSelection(modelSelection);
        }));
        this._register(this._textAreaInput.onCompositionStart((e) => {
            // The textarea might contain some content when composition starts.
            //
            // When we make the textarea visible, it always has a height of 1 line,
            // so we don't need to worry too much about content on lines above or below
            // the selection.
            //
            // However, the text on the current line needs to be made visible because
            // some IME methods allow to move to other glyphs on the current line
            // (by pressing arrow keys).
            //
            // (1) The textarea might contain only some parts of the current line,
            // like the word before the selection. Also, the content inside the textarea
            // can grow or shrink as composition occurs. We therefore anchor the textarea
            // in terms of distance to a certain line start and line end.
            //
            // (2) Also, we should not make \t characters visible, because their rendering
            // inside the <textarea> will not align nicely with our rendering. We therefore
            // will hide (if necessary) some of the leading text on the current line.
            const ta = this.textArea.domNode;
            const modelSelection = this._modelSelections[0];
            const { distanceToModelLineStart, widthOfHiddenTextBefore } = (() => {
                // Find the text that is on the current line before the selection
                const textBeforeSelection = ta.value.substring(0, Math.min(ta.selectionStart, ta.selectionEnd));
                const lineFeedOffset1 = textBeforeSelection.lastIndexOf('\n');
                const lineTextBeforeSelection = textBeforeSelection.substring(lineFeedOffset1 + 1);
                // We now search to see if we should hide some part of it (if it contains \t)
                const tabOffset1 = lineTextBeforeSelection.lastIndexOf('\t');
                const desiredVisibleBeforeCharCount = lineTextBeforeSelection.length - tabOffset1 - 1;
                const startModelPosition = modelSelection.getStartPosition();
                const visibleBeforeCharCount = Math.min(startModelPosition.column - 1, desiredVisibleBeforeCharCount);
                const distanceToModelLineStart = startModelPosition.column - 1 - visibleBeforeCharCount;
                const hiddenLineTextBefore = lineTextBeforeSelection.substring(0, lineTextBeforeSelection.length - visibleBeforeCharCount);
                const { tabSize } = this._context.viewModel.model.getOptions();
                const widthOfHiddenTextBefore = measureText(hiddenLineTextBefore, this._fontInfo, tabSize);
                return { distanceToModelLineStart, widthOfHiddenTextBefore };
            })();
            const { distanceToModelLineEnd } = (() => {
                // Find the text that is on the current line after the selection
                const textAfterSelection = ta.value.substring(Math.max(ta.selectionStart, ta.selectionEnd));
                const lineFeedOffset2 = textAfterSelection.indexOf('\n');
                const lineTextAfterSelection = lineFeedOffset2 === -1 ? textAfterSelection : textAfterSelection.substring(0, lineFeedOffset2);
                const tabOffset2 = lineTextAfterSelection.indexOf('\t');
                const desiredVisibleAfterCharCount = (tabOffset2 === -1 ? lineTextAfterSelection.length : lineTextAfterSelection.length - tabOffset2 - 1);
                const endModelPosition = modelSelection.getEndPosition();
                const visibleAfterCharCount = Math.min(this._context.viewModel.model.getLineMaxColumn(endModelPosition.lineNumber) - endModelPosition.column, desiredVisibleAfterCharCount);
                const distanceToModelLineEnd = this._context.viewModel.model.getLineMaxColumn(endModelPosition.lineNumber) - endModelPosition.column - visibleAfterCharCount;
                return { distanceToModelLineEnd };
            })();
            // Scroll to reveal the location in the editor where composition occurs
            this._context.viewModel.revealRange('keyboard', true, range/* Range */.e.fromPositions(this._selections[0].getStartPosition()), 0 /* viewEvents.VerticalRevealType.Simple */, 1 /* ScrollType.Immediate */);
            this._visibleTextArea = new VisibleTextAreaData(this._context, modelSelection.startLineNumber, distanceToModelLineStart, widthOfHiddenTextBefore, distanceToModelLineEnd);
            // We turn off wrapping if the <textarea> becomes visible for composition
            this.textArea.setAttribute('wrap', this._textAreaWrapping && !this._visibleTextArea ? 'on' : 'off');
            this._visibleTextArea.prepareRender(this._visibleRangeProvider);
            this._render();
            // Show the textarea
            this.textArea.setClassName(`inputarea ${mouseCursor/* MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */.S} ime-input`);
            this._viewController.compositionStart();
            this._context.viewModel.onCompositionStart();
        }));
        this._register(this._textAreaInput.onCompositionUpdate((e) => {
            if (!this._visibleTextArea) {
                return;
            }
            this._visibleTextArea.prepareRender(this._visibleRangeProvider);
            this._render();
        }));
        this._register(this._textAreaInput.onCompositionEnd(() => {
            this._visibleTextArea = null;
            // We turn on wrapping as necessary if the <textarea> hides after composition
            this.textArea.setAttribute('wrap', this._textAreaWrapping && !this._visibleTextArea ? 'on' : 'off');
            this._render();
            this.textArea.setClassName(`inputarea ${mouseCursor/* MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */.S}`);
            this._viewController.compositionEnd();
            this._context.viewModel.onCompositionEnd();
        }));
        this._register(this._textAreaInput.onFocus(() => {
            this._context.viewModel.setHasFocus(true);
        }));
        this._register(this._textAreaInput.onBlur(() => {
            this._context.viewModel.setHasFocus(false);
        }));
        this._register(ime/* IME */.F.onDidChange(() => {
            this._ensureReadOnlyAttribute();
        }));
    }
    writeScreenReaderContent(reason) {
        this._textAreaInput.writeScreenReaderContent(reason);
    }
    dispose() {
        super.dispose();
    }
    _getAndroidWordAtPosition(position) {
        const ANDROID_WORD_SEPARATORS = '`~!@#$%^&*()-=+[{]}\\|;:",.<>/?';
        const lineContent = this._context.viewModel.getLineContent(position.lineNumber);
        const wordSeparators = (0,wordCharacterClassifier/* getMapForWordSeparators */.u)(ANDROID_WORD_SEPARATORS);
        let goingLeft = true;
        let startColumn = position.column;
        let goingRight = true;
        let endColumn = position.column;
        let distance = 0;
        while (distance < 50 && (goingLeft || goingRight)) {
            if (goingLeft && startColumn <= 1) {
                goingLeft = false;
            }
            if (goingLeft) {
                const charCode = lineContent.charCodeAt(startColumn - 2);
                const charClass = wordSeparators.get(charCode);
                if (charClass !== 0 /* WordCharacterClass.Regular */) {
                    goingLeft = false;
                }
                else {
                    startColumn--;
                }
            }
            if (goingRight && endColumn > lineContent.length) {
                goingRight = false;
            }
            if (goingRight) {
                const charCode = lineContent.charCodeAt(endColumn - 1);
                const charClass = wordSeparators.get(charCode);
                if (charClass !== 0 /* WordCharacterClass.Regular */) {
                    goingRight = false;
                }
                else {
                    endColumn++;
                }
            }
            distance++;
        }
        return [lineContent.substring(startColumn - 1, endColumn - 1), position.column - startColumn];
    }
    _getWordBeforePosition(position) {
        const lineContent = this._context.viewModel.getLineContent(position.lineNumber);
        const wordSeparators = (0,wordCharacterClassifier/* getMapForWordSeparators */.u)(this._context.configuration.options.get(128 /* EditorOption.wordSeparators */));
        let column = position.column;
        let distance = 0;
        while (column > 1) {
            const charCode = lineContent.charCodeAt(column - 2);
            const charClass = wordSeparators.get(charCode);
            if (charClass !== 0 /* WordCharacterClass.Regular */ || distance > 50) {
                return lineContent.substring(column - 1, position.column - 1);
            }
            distance++;
            column--;
        }
        return lineContent.substring(0, position.column - 1);
    }
    _getCharacterBeforePosition(position) {
        if (position.column > 1) {
            const lineContent = this._context.viewModel.getLineContent(position.lineNumber);
            const charBefore = lineContent.charAt(position.column - 2);
            if (!strings/* isHighSurrogate */.ZG(charBefore.charCodeAt(0))) {
                return charBefore;
            }
        }
        return '';
    }
    _getAriaLabel(options) {
        var _a, _b, _c;
        const accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        if (accessibilitySupport === 1 /* AccessibilitySupport.Disabled */) {
            const toggleKeybindingLabel = (_a = this._keybindingService.lookupKeybinding('editor.action.toggleScreenReaderAccessibilityMode')) === null || _a === void 0 ? void 0 : _a.getAriaLabel();
            const runCommandKeybindingLabel = (_b = this._keybindingService.lookupKeybinding('workbench.action.showCommands')) === null || _b === void 0 ? void 0 : _b.getAriaLabel();
            const keybindingEditorKeybindingLabel = (_c = this._keybindingService.lookupKeybinding('workbench.action.openGlobalKeybindings')) === null || _c === void 0 ? void 0 : _c.getAriaLabel();
            const editorNotAccessibleMessage = nls/* localize */.NC('accessibilityModeOff', "The editor is not accessible at this time.");
            if (toggleKeybindingLabel) {
                return nls/* localize */.NC('accessibilityOffAriaLabel', "{0} To enable screen reader optimized mode, use {1}", editorNotAccessibleMessage, toggleKeybindingLabel);
            }
            else if (runCommandKeybindingLabel) {
                return nls/* localize */.NC('accessibilityOffAriaLabelNoKb', "{0} To enable screen reader optimized mode, open the quick pick with {1} and run the command Toggle Screen Reader Accessibility Mode, which is currently not triggerable via keyboard.", editorNotAccessibleMessage, runCommandKeybindingLabel);
            }
            else if (keybindingEditorKeybindingLabel) {
                return nls/* localize */.NC('accessibilityOffAriaLabelNoKbs', "{0} Please assign a keybinding for the command Toggle Screen Reader Accessibility Mode by accessing the keybindings editor with {1} and run it.", editorNotAccessibleMessage, keybindingEditorKeybindingLabel);
            }
            else {
                // SOS
                return editorNotAccessibleMessage;
            }
        }
        return options.get(4 /* EditorOption.ariaLabel */);
    }
    _setAccessibilityOptions(options) {
        this._accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        const accessibilityPageSize = options.get(3 /* EditorOption.accessibilityPageSize */);
        if (this._accessibilitySupport === 2 /* AccessibilitySupport.Enabled */ && accessibilityPageSize === editorOptions/* EditorOptions */.BH.accessibilityPageSize.defaultValue) {
            // If a screen reader is attached and the default value is not set we should automatically increase the page size to 500 for a better experience
            this._accessibilityPageSize = 500;
        }
        else {
            this._accessibilityPageSize = accessibilityPageSize;
        }
        // When wrapping is enabled and a screen reader might be attached,
        // we will size the textarea to match the width used for wrapping points computation (see `domLineBreaksComputer.ts`).
        // This is because screen readers will read the text in the textarea and we'd like that the
        // wrapping points in the textarea match the wrapping points in the editor.
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        const wrappingColumn = layoutInfo.wrappingColumn;
        if (wrappingColumn !== -1 && this._accessibilitySupport !== 1 /* AccessibilitySupport.Disabled */) {
            const fontInfo = options.get(49 /* EditorOption.fontInfo */);
            this._textAreaWrapping = true;
            this._textAreaWidth = Math.round(wrappingColumn * fontInfo.typicalHalfwidthCharacterWidth);
        }
        else {
            this._textAreaWrapping = false;
            this._textAreaWidth = (canUseZeroSizeTextarea ? 0 : 1);
        }
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(142 /* EditorOption.layoutInfo */);
        this._setAccessibilityOptions(options);
        this._contentLeft = layoutInfo.contentLeft;
        this._contentWidth = layoutInfo.contentWidth;
        this._contentHeight = layoutInfo.height;
        this._fontInfo = options.get(49 /* EditorOption.fontInfo */);
        this._lineHeight = options.get(65 /* EditorOption.lineHeight */);
        this._emptySelectionClipboard = options.get(36 /* EditorOption.emptySelectionClipboard */);
        this._copyWithSyntaxHighlighting = options.get(24 /* EditorOption.copyWithSyntaxHighlighting */);
        this.textArea.setAttribute('wrap', this._textAreaWrapping && !this._visibleTextArea ? 'on' : 'off');
        const { tabSize } = this._context.viewModel.model.getOptions();
        this.textArea.domNode.style.tabSize = `${tabSize * this._fontInfo.spaceWidth}px`;
        this.textArea.setAttribute('aria-label', this._getAriaLabel(options));
        this.textArea.setAttribute('aria-required', options.get(5 /* EditorOption.ariaRequired */) ? 'true' : 'false');
        this.textArea.setAttribute('tabindex', String(options.get(122 /* EditorOption.tabIndex */)));
        if (e.hasChanged(33 /* EditorOption.domReadOnly */) || e.hasChanged(89 /* EditorOption.readOnly */)) {
            this._ensureReadOnlyAttribute();
        }
        if (e.hasChanged(2 /* EditorOption.accessibilitySupport */)) {
            this._textAreaInput.writeScreenReaderContent('strategy changed');
        }
        return true;
    }
    onCursorStateChanged(e) {
        this._selections = e.selections.slice(0);
        this._modelSelections = e.modelSelections.slice(0);
        // We must update the <textarea> synchronously, otherwise long press IME on macos breaks.
        // See https://github.com/microsoft/vscode/issues/165821
        this._textAreaInput.writeScreenReaderContent('selection changed');
        return true;
    }
    onDecorationsChanged(e) {
        // true for inline decorations that can end up relayouting text
        return true;
    }
    onFlushed(e) {
        return true;
    }
    onLinesChanged(e) {
        return true;
    }
    onLinesDeleted(e) {
        return true;
    }
    onLinesInserted(e) {
        return true;
    }
    onScrollChanged(e) {
        this._scrollLeft = e.scrollLeft;
        this._scrollTop = e.scrollTop;
        return true;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    // --- begin view API
    isFocused() {
        return this._textAreaInput.isFocused();
    }
    focusTextArea() {
        this._textAreaInput.focusTextArea();
    }
    getLastRenderData() {
        return this._lastRenderPosition;
    }
    setAriaOptions(options) {
        if (options.activeDescendant) {
            this.textArea.setAttribute('aria-haspopup', 'true');
            this.textArea.setAttribute('aria-autocomplete', 'list');
            this.textArea.setAttribute('aria-activedescendant', options.activeDescendant);
        }
        else {
            this.textArea.setAttribute('aria-haspopup', 'false');
            this.textArea.setAttribute('aria-autocomplete', 'both');
            this.textArea.removeAttribute('aria-activedescendant');
        }
        if (options.role) {
            this.textArea.setAttribute('role', options.role);
        }
    }
    // --- end view API
    _ensureReadOnlyAttribute() {
        const options = this._context.configuration.options;
        // When someone requests to disable IME, we set the "readonly" attribute on the <textarea>.
        // This will prevent composition.
        const useReadOnly = !ime/* IME */.F.enabled || (options.get(33 /* EditorOption.domReadOnly */) && options.get(89 /* EditorOption.readOnly */));
        if (useReadOnly) {
            this.textArea.setAttribute('readonly', 'true');
        }
        else {
            this.textArea.removeAttribute('readonly');
        }
    }
    prepareRender(ctx) {
        var _a;
        this._primaryCursorPosition = new position/* Position */.L(this._selections[0].positionLineNumber, this._selections[0].positionColumn);
        this._primaryCursorVisibleRange = ctx.visibleRangeForPosition(this._primaryCursorPosition);
        (_a = this._visibleTextArea) === null || _a === void 0 ? void 0 : _a.prepareRender(ctx);
    }
    render(ctx) {
        this._textAreaInput.writeScreenReaderContent('render');
        this._render();
    }
    _render() {
        var _a;
        if (this._visibleTextArea) {
            // The text area is visible for composition reasons
            const visibleStart = this._visibleTextArea.visibleTextareaStart;
            const visibleEnd = this._visibleTextArea.visibleTextareaEnd;
            const startPosition = this._visibleTextArea.startPosition;
            const endPosition = this._visibleTextArea.endPosition;
            if (startPosition && endPosition && visibleStart && visibleEnd && visibleEnd.left >= this._scrollLeft && visibleStart.left <= this._scrollLeft + this._contentWidth) {
                const top = (this._context.viewLayout.getVerticalOffsetForLineNumber(this._primaryCursorPosition.lineNumber) - this._scrollTop);
                const lineCount = this._newlinecount(this.textArea.domNode.value.substr(0, this.textArea.domNode.selectionStart));
                let scrollLeft = this._visibleTextArea.widthOfHiddenLineTextBefore;
                let left = (this._contentLeft + visibleStart.left - this._scrollLeft);
                // See https://github.com/microsoft/vscode/issues/141725#issuecomment-1050670841
                // Here we are adding +1 to avoid flickering that might be caused by having a width that is too small.
                // This could be caused by rounding errors that might only show up with certain font families.
                // In other words, a pixel might be lost when doing something like
                //      `Math.round(end) - Math.round(start)`
                // vs
                //      `Math.round(end - start)`
                let width = visibleEnd.left - visibleStart.left + 1;
                if (left < this._contentLeft) {
                    // the textarea would be rendered on top of the margin,
                    // so reduce its width. We use the same technique as
                    // for hiding text before
                    const delta = (this._contentLeft - left);
                    left += delta;
                    scrollLeft += delta;
                    width -= delta;
                }
                if (width > this._contentWidth) {
                    // the textarea would be wider than the content width,
                    // so reduce its width.
                    width = this._contentWidth;
                }
                // Try to render the textarea with the color/font style to match the text under it
                const viewLineData = this._context.viewModel.getViewLineData(startPosition.lineNumber);
                const startTokenIndex = viewLineData.tokens.findTokenIndexAtOffset(startPosition.column - 1);
                const endTokenIndex = viewLineData.tokens.findTokenIndexAtOffset(endPosition.column - 1);
                const textareaSpansSingleToken = (startTokenIndex === endTokenIndex);
                const presentation = this._visibleTextArea.definePresentation((textareaSpansSingleToken ? viewLineData.tokens.getPresentation(startTokenIndex) : null));
                this.textArea.domNode.scrollTop = lineCount * this._lineHeight;
                this.textArea.domNode.scrollLeft = scrollLeft;
                this._doRender({
                    lastRenderPosition: null,
                    top: top,
                    left: left,
                    width: width,
                    height: this._lineHeight,
                    useCover: false,
                    color: (languages/* TokenizationRegistry */.RW.getColorMap() || [])[presentation.foreground],
                    italic: presentation.italic,
                    bold: presentation.bold,
                    underline: presentation.underline,
                    strikethrough: presentation.strikethrough
                });
            }
            return;
        }
        if (!this._primaryCursorVisibleRange) {
            // The primary cursor is outside the viewport => place textarea to the top left
            this._renderAtTopLeft();
            return;
        }
        const left = this._contentLeft + this._primaryCursorVisibleRange.left - this._scrollLeft;
        if (left < this._contentLeft || left > this._contentLeft + this._contentWidth) {
            // cursor is outside the viewport
            this._renderAtTopLeft();
            return;
        }
        const top = this._context.viewLayout.getVerticalOffsetForLineNumber(this._selections[0].positionLineNumber) - this._scrollTop;
        if (top < 0 || top > this._contentHeight) {
            // cursor is outside the viewport
            this._renderAtTopLeft();
            return;
        }
        // The primary cursor is in the viewport (at least vertically) => place textarea on the cursor
        if (platform/* isMacintosh */.dz) {
            // For the popup emoji input, we will make the text area as high as the line height
            // We will also make the fontSize and lineHeight the correct dimensions to help with the placement of these pickers
            this._doRender({
                lastRenderPosition: this._primaryCursorPosition,
                top,
                left: this._textAreaWrapping ? this._contentLeft : left,
                width: this._textAreaWidth,
                height: this._lineHeight,
                useCover: false
            });
            // In case the textarea contains a word, we're going to try to align the textarea's cursor
            // with our cursor by scrolling the textarea as much as possible
            this.textArea.domNode.scrollLeft = this._primaryCursorVisibleRange.left;
            const lineCount = (_a = this._textAreaInput.textAreaState.newlineCountBeforeSelection) !== null && _a !== void 0 ? _a : this._newlinecount(this.textArea.domNode.value.substr(0, this.textArea.domNode.selectionStart));
            this.textArea.domNode.scrollTop = lineCount * this._lineHeight;
            return;
        }
        this._doRender({
            lastRenderPosition: this._primaryCursorPosition,
            top: top,
            left: this._textAreaWrapping ? this._contentLeft : left,
            width: this._textAreaWidth,
            height: (canUseZeroSizeTextarea ? 0 : 1),
            useCover: false
        });
    }
    _newlinecount(text) {
        let result = 0;
        let startIndex = -1;
        do {
            startIndex = text.indexOf('\n', startIndex + 1);
            if (startIndex === -1) {
                break;
            }
            result++;
        } while (true);
        return result;
    }
    _renderAtTopLeft() {
        // (in WebKit the textarea is 1px by 1px because it cannot handle input to a 0x0 textarea)
        // specifically, when doing Korean IME, setting the textarea to 0x0 breaks IME badly.
        this._doRender({
            lastRenderPosition: null,
            top: 0,
            left: 0,
            width: this._textAreaWidth,
            height: (canUseZeroSizeTextarea ? 0 : 1),
            useCover: true
        });
    }
    _doRender(renderData) {
        this._lastRenderPosition = renderData.lastRenderPosition;
        const ta = this.textArea;
        const tac = this.textAreaCover;
        (0,domFontInfo/* applyFontInfo */.N)(ta, this._fontInfo);
        ta.setTop(renderData.top);
        ta.setLeft(renderData.left);
        ta.setWidth(renderData.width);
        ta.setHeight(renderData.height);
        ta.setColor(renderData.color ? color/* Color */.Il.Format.CSS.formatHex(renderData.color) : '');
        ta.setFontStyle(renderData.italic ? 'italic' : '');
        if (renderData.bold) {
            // fontWeight is also set by `applyFontInfo`, so only overwrite it if necessary
            ta.setFontWeight('bold');
        }
        ta.setTextDecoration(`${renderData.underline ? ' underline' : ''}${renderData.strikethrough ? ' line-through' : ''}`);
        tac.setTop(renderData.useCover ? renderData.top : 0);
        tac.setLeft(renderData.useCover ? renderData.left : 0);
        tac.setWidth(renderData.useCover ? renderData.width : 0);
        tac.setHeight(renderData.useCover ? renderData.height : 0);
        const options = this._context.configuration.options;
        if (options.get(56 /* EditorOption.glyphMargin */)) {
            tac.setClassName('monaco-editor-background textAreaCover ' + margin/* Margin */.Z.OUTER_CLASS_NAME);
        }
        else {
            if (options.get(66 /* EditorOption.lineNumbers */).renderType !== 0 /* RenderLineNumbersType.Off */) {
                tac.setClassName('monaco-editor-background textAreaCover ' + lineNumbers/* LineNumbersOverlay */.x.CLASS_NAME);
            }
            else {
                tac.setClassName('monaco-editor-background textAreaCover');
            }
        }
    }
};
TextAreaHandler = __decorate([
    __param(3, keybinding/* IKeybindingService */.d)
], TextAreaHandler);

function measureText(text, fontInfo, tabSize) {
    if (text.length === 0) {
        return 0;
    }
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '-50000px';
    container.style.width = '50000px';
    const regularDomNode = document.createElement('span');
    (0,domFontInfo/* applyFontInfo */.N)(regularDomNode, fontInfo);
    regularDomNode.style.whiteSpace = 'pre'; // just like the textarea
    regularDomNode.style.tabSize = `${tabSize * fontInfo.spaceWidth}px`; // just like the textarea
    regularDomNode.append(text);
    container.appendChild(regularDomNode);
    document.body.appendChild(container);
    const res = regularDomNode.offsetWidth;
    document.body.removeChild(container);
    return res;
}


/***/ }),

/***/ 49010:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fz: function() { return /* binding */ TextAreaInput; },
/* harmony export */   Nl: function() { return /* binding */ InMemoryClipboardMetadataManager; },
/* harmony export */   RA: function() { return /* binding */ CopyOptions; },
/* harmony export */   Tj: function() { return /* binding */ TextAreaWrapper; },
/* harmony export */   b6: function() { return /* binding */ ClipboardEventUtils; },
/* harmony export */   pd: function() { return /* binding */ TextAreaSyntethicEvents; }
/* harmony export */ });
/* harmony import */ var _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18463);
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56704);
/* harmony import */ var _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69808);
/* harmony import */ var _base_browser_keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44767);
/* harmony import */ var _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93275);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69058);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26794);
/* harmony import */ var _base_common_mime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74148);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70625);
/* harmony import */ var _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74846);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2257);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












var TextAreaSyntethicEvents;
(function (TextAreaSyntethicEvents) {
    TextAreaSyntethicEvents.Tap = '-monaco-textarea-synthetic-tap';
})(TextAreaSyntethicEvents || (TextAreaSyntethicEvents = {}));
const CopyOptions = {
    forceCopyWithSyntaxHighlighting: false
};
/**
 * Every time we write to the clipboard, we record a bit of extra metadata here.
 * Every time we read from the cipboard, if the text matches our last written text,
 * we can fetch the previous metadata.
 */
class InMemoryClipboardMetadataManager {
    constructor() {
        this._lastState = null;
    }
    set(lastCopiedValue, data) {
        this._lastState = { lastCopiedValue, data };
    }
    get(pastedText) {
        if (this._lastState && this._lastState.lastCopiedValue === pastedText) {
            // match!
            return this._lastState.data;
        }
        this._lastState = null;
        return null;
    }
}
InMemoryClipboardMetadataManager.INSTANCE = new InMemoryClipboardMetadataManager();
class CompositionContext {
    constructor() {
        this._lastTypeTextLength = 0;
    }
    handleCompositionUpdate(text) {
        text = text || '';
        const typeInput = {
            text: text,
            replacePrevCharCnt: this._lastTypeTextLength,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
        this._lastTypeTextLength = text.length;
        return typeInput;
    }
}
/**
 * Writes screen reader content to the textarea and is able to analyze its input events to generate:
 *  - onCut
 *  - onPaste
 *  - onType
 *
 * Composition events are generated for presentation purposes (composition input is reflected in onType).
 */
class TextAreaInput extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_7__/* .Disposable */ .JT {
    get textAreaState() {
        return this._textAreaState;
    }
    constructor(_host, _textArea, _OS, _browser) {
        super();
        this._host = _host;
        this._textArea = _textArea;
        this._OS = _OS;
        this._browser = _browser;
        this._onFocus = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onFocus = this._onFocus.event;
        this._onBlur = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onBlur = this._onBlur.event;
        this._onKeyDown = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onKeyDown = this._onKeyDown.event;
        this._onKeyUp = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onKeyUp = this._onKeyUp.event;
        this._onCut = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onCut = this._onCut.event;
        this._onPaste = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onPaste = this._onPaste.event;
        this._onType = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onType = this._onType.event;
        this._onCompositionStart = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onCompositionStart = this._onCompositionStart.event;
        this._onCompositionUpdate = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onCompositionUpdate = this._onCompositionUpdate.event;
        this._onCompositionEnd = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onCompositionEnd = this._onCompositionEnd.event;
        this._onSelectionChangeRequest = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onSelectionChangeRequest = this._onSelectionChangeRequest.event;
        this._asyncTriggerCut = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .RunOnceScheduler */ .pY(() => this._onCut.fire(), 0));
        this._asyncFocusGainWriteScreenReaderContent = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .RunOnceScheduler */ .pY(() => this.writeScreenReaderContent('asyncFocusGain'), 0));
        this._textAreaState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.EMPTY;
        this._selectionChangeListener = null;
        this.writeScreenReaderContent('ctor');
        this._hasFocus = false;
        this._currentComposition = null;
        let lastKeyDown = null;
        this._register(this._textArea.onKeyDown((_e) => {
            const e = new _base_browser_keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(_e);
            if (e.keyCode === 114 /* KeyCode.KEY_IN_COMPOSITION */
                || (this._currentComposition && e.keyCode === 1 /* KeyCode.Backspace */)) {
                // Stop propagation for keyDown events if the IME is processing key input
                e.stopPropagation();
            }
            if (e.equals(9 /* KeyCode.Escape */)) {
                // Prevent default always for `Esc`, otherwise it will generate a keypress
                // See https://msdn.microsoft.com/en-us/library/ie/ms536939(v=vs.85).aspx
                e.preventDefault();
            }
            lastKeyDown = e;
            this._onKeyDown.fire(e);
        }));
        this._register(this._textArea.onKeyUp((_e) => {
            const e = new _base_browser_keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(_e);
            this._onKeyUp.fire(e);
        }));
        this._register(this._textArea.onCompositionStart((e) => {
            if (_textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* ._debugComposition */ .al) {
                console.log(`[compositionstart]`, e);
            }
            const currentComposition = new CompositionContext();
            if (this._currentComposition) {
                // simply reset the composition context
                this._currentComposition = currentComposition;
                return;
            }
            this._currentComposition = currentComposition;
            if (this._OS === 2 /* OperatingSystem.Macintosh */
                && lastKeyDown
                && lastKeyDown.equals(114 /* KeyCode.KEY_IN_COMPOSITION */)
                && this._textAreaState.selectionStart === this._textAreaState.selectionEnd
                && this._textAreaState.selectionStart > 0
                && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === e.data
                && (lastKeyDown.code === 'ArrowRight' || lastKeyDown.code === 'ArrowLeft')) {
                // Handling long press case on Chromium/Safari macOS + arrow key => pretend the character was selected
                if (_textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* ._debugComposition */ .al) {
                    console.log(`[compositionstart] Handling long press case on macOS + arrow key`, e);
                }
                // Pretend the previous character was composed (in order to get it removed by subsequent compositionupdate events)
                currentComposition.handleCompositionUpdate('x');
                this._onCompositionStart.fire({ data: e.data });
                return;
            }
            if (this._browser.isAndroid) {
                // when tapping on the editor, Android enters composition mode to edit the current word
                // so we cannot clear the textarea on Android and we must pretend the current word was selected
                this._onCompositionStart.fire({ data: e.data });
                return;
            }
            this._onCompositionStart.fire({ data: e.data });
        }));
        this._register(this._textArea.onCompositionUpdate((e) => {
            if (_textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* ._debugComposition */ .al) {
                console.log(`[compositionupdate]`, e);
            }
            const currentComposition = this._currentComposition;
            if (!currentComposition) {
                // should not be possible to receive a 'compositionupdate' without a 'compositionstart'
                return;
            }
            if (this._browser.isAndroid) {
                // On Android, the data sent with the composition update event is unusable.
                // For example, if the cursor is in the middle of a word like Mic|osoft
                // and Microsoft is chosen from the keyboard's suggestions, the e.data will contain "Microsoft".
                // This is not really usable because it doesn't tell us where the edit began and where it ended.
                const newState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.readFromTextArea(this._textArea, this._textAreaState);
                const typeInput = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.deduceAndroidCompositionInput(this._textAreaState, newState);
                this._textAreaState = newState;
                this._onType.fire(typeInput);
                this._onCompositionUpdate.fire(e);
                return;
            }
            const typeInput = currentComposition.handleCompositionUpdate(e.data);
            this._textAreaState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.readFromTextArea(this._textArea, this._textAreaState);
            this._onType.fire(typeInput);
            this._onCompositionUpdate.fire(e);
        }));
        this._register(this._textArea.onCompositionEnd((e) => {
            if (_textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* ._debugComposition */ .al) {
                console.log(`[compositionend]`, e);
            }
            const currentComposition = this._currentComposition;
            if (!currentComposition) {
                // https://github.com/microsoft/monaco-editor/issues/1663
                // On iOS 13.2, Chinese system IME randomly trigger an additional compositionend event with empty data
                return;
            }
            this._currentComposition = null;
            if (this._browser.isAndroid) {
                // On Android, the data sent with the composition update event is unusable.
                // For example, if the cursor is in the middle of a word like Mic|osoft
                // and Microsoft is chosen from the keyboard's suggestions, the e.data will contain "Microsoft".
                // This is not really usable because it doesn't tell us where the edit began and where it ended.
                const newState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.readFromTextArea(this._textArea, this._textAreaState);
                const typeInput = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.deduceAndroidCompositionInput(this._textAreaState, newState);
                this._textAreaState = newState;
                this._onType.fire(typeInput);
                this._onCompositionEnd.fire();
                return;
            }
            const typeInput = currentComposition.handleCompositionUpdate(e.data);
            this._textAreaState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.readFromTextArea(this._textArea, this._textAreaState);
            this._onType.fire(typeInput);
            this._onCompositionEnd.fire();
        }));
        this._register(this._textArea.onInput((e) => {
            if (_textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* ._debugComposition */ .al) {
                console.log(`[input]`, e);
            }
            // Pretend here we touched the text area, as the `input` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received input event');
            if (this._currentComposition) {
                return;
            }
            const newState = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.readFromTextArea(this._textArea, this._textAreaState);
            const typeInput = _textAreaState_js__WEBPACK_IMPORTED_MODULE_10__/* .TextAreaState */ .un.deduceInput(this._textAreaState, newState, /*couldBeEmojiInput*/ this._OS === 2 /* OperatingSystem.Macintosh */);
            if (typeInput.replacePrevCharCnt === 0 && typeInput.text.length === 1) {
                // one character was typed
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_9__/* .isHighSurrogate */ .ZG(typeInput.text.charCodeAt(0))
                    || typeInput.text.charCodeAt(0) === 0x7f /* Delete */) {
                    // Ignore invalid input but keep it around for next time
                    return;
                }
            }
            this._textAreaState = newState;
            if (typeInput.text !== ''
                || typeInput.replacePrevCharCnt !== 0
                || typeInput.replaceNextCharCnt !== 0
                || typeInput.positionDelta !== 0) {
                this._onType.fire(typeInput);
            }
        }));
        // --- Clipboard operations
        this._register(this._textArea.onCut((e) => {
            // Pretend here we touched the text area, as the `cut` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received cut event');
            this._ensureClipboardGetsEditorSelection(e);
            this._asyncTriggerCut.schedule();
        }));
        this._register(this._textArea.onCopy((e) => {
            this._ensureClipboardGetsEditorSelection(e);
        }));
        this._register(this._textArea.onPaste((e) => {
            // Pretend here we touched the text area, as the `paste` event will most likely
            // result in a `selectionchange` event which we want to ignore
            this._textArea.setIgnoreSelectionChangeTime('received paste event');
            e.preventDefault();
            if (!e.clipboardData) {
                return;
            }
            let [text, metadata] = ClipboardEventUtils.getTextData(e.clipboardData);
            if (!text) {
                return;
            }
            // try the in-memory store
            metadata = metadata || InMemoryClipboardMetadataManager.INSTANCE.get(text);
            this._onPaste.fire({
                text: text,
                metadata: metadata
            });
        }));
        this._register(this._textArea.onFocus(() => {
            const hadFocus = this._hasFocus;
            this._setHasFocus(true);
            if (this._browser.isSafari && !hadFocus && this._hasFocus) {
                // When "tabbing into" the textarea, immediately after dispatching the 'focus' event,
                // Safari will always move the selection at offset 0 in the textarea
                this._asyncFocusGainWriteScreenReaderContent.schedule();
            }
        }));
        this._register(this._textArea.onBlur(() => {
            if (this._currentComposition) {
                // See https://github.com/microsoft/vscode/issues/112621
                // where compositionend is not triggered when the editor
                // is taken off-dom during a composition
                // Clear the flag to be able to write to the textarea
                this._currentComposition = null;
                // Clear the textarea to avoid an unwanted cursor type
                this.writeScreenReaderContent('blurWithoutCompositionEnd');
                // Fire artificial composition end
                this._onCompositionEnd.fire();
            }
            this._setHasFocus(false);
        }));
        this._register(this._textArea.onSyntheticTap(() => {
            if (this._browser.isAndroid && this._currentComposition) {
                // on Android, tapping does not cancel the current composition, so the
                // textarea is stuck showing the old composition
                // Clear the flag to be able to write to the textarea
                this._currentComposition = null;
                // Clear the textarea to avoid an unwanted cursor type
                this.writeScreenReaderContent('tapWithoutCompositionEnd');
                // Fire artificial composition end
                this._onCompositionEnd.fire();
            }
        }));
    }
    _installSelectionChangeListener() {
        // See https://github.com/microsoft/vscode/issues/27216 and https://github.com/microsoft/vscode/issues/98256
        // When using a Braille display, it is possible for users to reposition the
        // system caret. This is reflected in Chrome as a `selectionchange` event.
        //
        // The `selectionchange` event appears to be emitted under numerous other circumstances,
        // so it is quite a challenge to distinguish a `selectionchange` coming in from a user
        // using a Braille display from all the other cases.
        //
        // The problems with the `selectionchange` event are:
        //  * the event is emitted when the textarea is focused programmatically -- textarea.focus()
        //  * the event is emitted when the selection is changed in the textarea programmatically -- textarea.setSelectionRange(...)
        //  * the event is emitted when the value of the textarea is changed programmatically -- textarea.value = '...'
        //  * the event is emitted when tabbing into the textarea
        //  * the event is emitted asynchronously (sometimes with a delay as high as a few tens of ms)
        //  * the event sometimes comes in bursts for a single logical textarea operation
        // `selectionchange` events often come multiple times for a single logical change
        // so throttle multiple `selectionchange` events that burst in a short period of time.
        let previousSelectionChangeEventTime = 0;
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .addDisposableListener */ .nm(document, 'selectionchange', (e) => {
            _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__/* .inputLatency */ .B.onSelectionChange();
            if (!this._hasFocus) {
                return;
            }
            if (this._currentComposition) {
                return;
            }
            if (!this._browser.isChrome) {
                // Support only for Chrome until testing happens on other browsers
                return;
            }
            const now = Date.now();
            const delta1 = now - previousSelectionChangeEventTime;
            previousSelectionChangeEventTime = now;
            if (delta1 < 5) {
                // received another `selectionchange` event within 5ms of the previous `selectionchange` event
                // => ignore it
                return;
            }
            const delta2 = now - this._textArea.getIgnoreSelectionChangeTime();
            this._textArea.resetSelectionChangeTime();
            if (delta2 < 100) {
                // received a `selectionchange` event within 100ms since we touched the textarea
                // => ignore it, since we caused it
                return;
            }
            if (!this._textAreaState.selection) {
                // Cannot correlate a position in the textarea with a position in the editor...
                return;
            }
            const newValue = this._textArea.getValue();
            if (this._textAreaState.value !== newValue) {
                // Cannot correlate a position in the textarea with a position in the editor...
                return;
            }
            const newSelectionStart = this._textArea.getSelectionStart();
            const newSelectionEnd = this._textArea.getSelectionEnd();
            if (this._textAreaState.selectionStart === newSelectionStart && this._textAreaState.selectionEnd === newSelectionEnd) {
                // Nothing to do...
                return;
            }
            const _newSelectionStartPosition = this._textAreaState.deduceEditorPosition(newSelectionStart);
            const newSelectionStartPosition = this._host.deduceModelPosition(_newSelectionStartPosition[0], _newSelectionStartPosition[1], _newSelectionStartPosition[2]);
            const _newSelectionEndPosition = this._textAreaState.deduceEditorPosition(newSelectionEnd);
            const newSelectionEndPosition = this._host.deduceModelPosition(_newSelectionEndPosition[0], _newSelectionEndPosition[1], _newSelectionEndPosition[2]);
            const newSelection = new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_11__/* .Selection */ .Y(newSelectionStartPosition.lineNumber, newSelectionStartPosition.column, newSelectionEndPosition.lineNumber, newSelectionEndPosition.column);
            this._onSelectionChangeRequest.fire(newSelection);
        });
    }
    dispose() {
        super.dispose();
        if (this._selectionChangeListener) {
            this._selectionChangeListener.dispose();
            this._selectionChangeListener = null;
        }
    }
    focusTextArea() {
        // Setting this._hasFocus and writing the screen reader content
        // will result in a focus() and setSelectionRange() in the textarea
        this._setHasFocus(true);
        // If the editor is off DOM, focus cannot be really set, so let's double check that we have managed to set the focus
        this.refreshFocusState();
    }
    isFocused() {
        return this._hasFocus;
    }
    refreshFocusState() {
        this._setHasFocus(this._textArea.hasFocus());
    }
    _setHasFocus(newHasFocus) {
        if (this._hasFocus === newHasFocus) {
            // no change
            return;
        }
        this._hasFocus = newHasFocus;
        if (this._selectionChangeListener) {
            this._selectionChangeListener.dispose();
            this._selectionChangeListener = null;
        }
        if (this._hasFocus) {
            this._selectionChangeListener = this._installSelectionChangeListener();
        }
        if (this._hasFocus) {
            this.writeScreenReaderContent('focusgain');
        }
        if (this._hasFocus) {
            this._onFocus.fire();
        }
        else {
            this._onBlur.fire();
        }
    }
    _setAndWriteTextAreaState(reason, textAreaState) {
        if (!this._hasFocus) {
            textAreaState = textAreaState.collapseSelection();
        }
        textAreaState.writeToTextArea(reason, this._textArea, this._hasFocus);
        this._textAreaState = textAreaState;
    }
    writeScreenReaderContent(reason) {
        if (this._currentComposition) {
            // Do not write to the text area when doing composition
            return;
        }
        this._setAndWriteTextAreaState(reason, this._host.getScreenReaderContent());
    }
    _ensureClipboardGetsEditorSelection(e) {
        const dataToCopy = this._host.getDataToCopy();
        const storedMetadata = {
            version: 1,
            isFromEmptySelection: dataToCopy.isFromEmptySelection,
            multicursorText: dataToCopy.multicursorText,
            mode: dataToCopy.mode
        };
        InMemoryClipboardMetadataManager.INSTANCE.set(
        // When writing "LINE\r\n" to the clipboard and then pasting,
        // Firefox pastes "LINE\n", so let's work around this quirk
        (this._browser.isFirefox ? dataToCopy.text.replace(/\r\n/g, '\n') : dataToCopy.text), storedMetadata);
        e.preventDefault();
        if (e.clipboardData) {
            ClipboardEventUtils.setTextData(e.clipboardData, dataToCopy.text, dataToCopy.html, storedMetadata);
        }
    }
}
const ClipboardEventUtils = {
    getTextData(clipboardData) {
        const text = clipboardData.getData(_base_common_mime_js__WEBPACK_IMPORTED_MODULE_8__/* .Mimes */ .v.text);
        let metadata = null;
        const rawmetadata = clipboardData.getData('vscode-editor-data');
        if (typeof rawmetadata === 'string') {
            try {
                metadata = JSON.parse(rawmetadata);
                if (metadata.version !== 1) {
                    metadata = null;
                }
            }
            catch (err) {
                // no problem!
            }
        }
        if (text.length === 0 && metadata === null && clipboardData.files.length > 0) {
            // no textual data pasted, generate text from file names
            const files = Array.prototype.slice.call(clipboardData.files, 0);
            return [files.map(file => file.name).join('\n'), null];
        }
        return [text, metadata];
    },
    setTextData(clipboardData, text, html, metadata) {
        clipboardData.setData(_base_common_mime_js__WEBPACK_IMPORTED_MODULE_8__/* .Mimes */ .v.text, text);
        if (typeof html === 'string') {
            clipboardData.setData('text/html', html);
        }
        clipboardData.setData('vscode-editor-data', JSON.stringify(metadata));
    }
};
class TextAreaWrapper extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_7__/* .Disposable */ .JT {
    constructor(_actual) {
        super();
        this._actual = _actual;
        this.onKeyDown = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'keydown')).event;
        this.onKeyUp = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'keyup')).event;
        this.onCompositionStart = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'compositionstart')).event;
        this.onCompositionUpdate = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'compositionupdate')).event;
        this.onCompositionEnd = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'compositionend')).event;
        this.onBeforeInput = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'beforeinput')).event;
        this.onInput = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'input')).event;
        this.onCut = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'cut')).event;
        this.onCopy = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'copy')).event;
        this.onPaste = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'paste')).event;
        this.onFocus = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'focus')).event;
        this.onBlur = this._register(new _base_browser_event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(this._actual, 'blur')).event;
        this._onSyntheticTap = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_6__/* .Emitter */ .Q5());
        this.onSyntheticTap = this._onSyntheticTap.event;
        this._ignoreSelectionChangeTime = 0;
        this._register(this.onKeyDown(() => _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__/* .inputLatency */ .B.onKeyDown()));
        this._register(this.onBeforeInput(() => _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__/* .inputLatency */ .B.onBeforeInput()));
        this._register(this.onInput(() => _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__/* .inputLatency */ .B.onInput()));
        this._register(this.onKeyUp(() => _base_browser_performance_js__WEBPACK_IMPORTED_MODULE_4__/* .inputLatency */ .B.onKeyUp()));
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .addDisposableListener */ .nm(this._actual, TextAreaSyntethicEvents.Tap, () => this._onSyntheticTap.fire()));
    }
    hasFocus() {
        const shadowRoot = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .getShadowRoot */ .Ay(this._actual);
        if (shadowRoot) {
            return shadowRoot.activeElement === this._actual;
        }
        else if (_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .isInDOM */ .Uw(this._actual)) {
            return document.activeElement === this._actual;
        }
        else {
            return false;
        }
    }
    setIgnoreSelectionChangeTime(reason) {
        this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
        return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
        this._ignoreSelectionChangeTime = 0;
    }
    getValue() {
        // console.log('current value: ' + this._textArea.value);
        return this._actual.value;
    }
    setValue(reason, value) {
        const textArea = this._actual;
        if (textArea.value === value) {
            // No change
            return;
        }
        // console.log('reason: ' + reason + ', current value: ' + textArea.value + ' => new value: ' + value);
        this.setIgnoreSelectionChangeTime('setValue');
        textArea.value = value;
    }
    getSelectionStart() {
        return this._actual.selectionDirection === 'backward' ? this._actual.selectionEnd : this._actual.selectionStart;
    }
    getSelectionEnd() {
        return this._actual.selectionDirection === 'backward' ? this._actual.selectionStart : this._actual.selectionEnd;
    }
    setSelectionRange(reason, selectionStart, selectionEnd) {
        const textArea = this._actual;
        let activeElement = null;
        const shadowRoot = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .getShadowRoot */ .Ay(textArea);
        if (shadowRoot) {
            activeElement = shadowRoot.activeElement;
        }
        else {
            activeElement = document.activeElement;
        }
        const currentIsFocused = (activeElement === textArea);
        const currentSelectionStart = textArea.selectionStart;
        const currentSelectionEnd = textArea.selectionEnd;
        if (currentIsFocused && currentSelectionStart === selectionStart && currentSelectionEnd === selectionEnd) {
            // No change
            // Firefox iframe bug https://github.com/microsoft/monaco-editor/issues/643#issuecomment-367871377
            if (_base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__/* .isFirefox */ .vU && window.parent !== window) {
                textArea.focus();
            }
            return;
        }
        // console.log('reason: ' + reason + ', setSelectionRange: ' + selectionStart + ' -> ' + selectionEnd);
        if (currentIsFocused) {
            // No need to focus, only need to change the selection range
            this.setIgnoreSelectionChangeTime('setSelectionRange');
            textArea.setSelectionRange(selectionStart, selectionEnd);
            if (_base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__/* .isFirefox */ .vU && window.parent !== window) {
                textArea.focus();
            }
            return;
        }
        // If the focus is outside the textarea, browsers will try really hard to reveal the textarea.
        // Here, we try to undo the browser's desperate reveal.
        try {
            const scrollState = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .saveParentsScrollTop */ .vL(textArea);
            this.setIgnoreSelectionChangeTime('setSelectionRange');
            textArea.focus();
            textArea.setSelectionRange(selectionStart, selectionEnd);
            _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .restoreParentsScrollTop */ ._0(textArea, scrollState);
        }
        catch (e) {
            // Sometimes IE throws when setting selection (e.g. textarea is off-DOM)
        }
    }
}


/***/ }),

/***/ 74846:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   al: function() { return /* binding */ _debugComposition; },
/* harmony export */   ee: function() { return /* binding */ PagedScreenReaderStrategy; },
/* harmony export */   un: function() { return /* binding */ TextAreaState; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70625);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3981);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const _debugComposition = false;
class TextAreaState {
    constructor(value, 
    /** the offset where selection starts inside `value` */
    selectionStart, 
    /** the offset where selection ends inside `value` */
    selectionEnd, 
    /** the editor range in the view coordinate system that matches the selection inside `value` */
    selection, 
    /** the visible line count (wrapped, not necessarily matching \n characters) for the text in `value` before `selectionStart` */
    newlineCountBeforeSelection) {
        this.value = value;
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
        this.selection = selection;
        this.newlineCountBeforeSelection = newlineCountBeforeSelection;
    }
    toString() {
        return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
    }
    static readFromTextArea(textArea, previousState) {
        const value = textArea.getValue();
        const selectionStart = textArea.getSelectionStart();
        const selectionEnd = textArea.getSelectionEnd();
        let newlineCountBeforeSelection = undefined;
        if (previousState) {
            const valueBeforeSelectionStart = value.substring(0, selectionStart);
            const previousValueBeforeSelectionStart = previousState.value.substring(0, previousState.selectionStart);
            if (valueBeforeSelectionStart === previousValueBeforeSelectionStart) {
                newlineCountBeforeSelection = previousState.newlineCountBeforeSelection;
            }
        }
        return new TextAreaState(value, selectionStart, selectionEnd, null, newlineCountBeforeSelection);
    }
    collapseSelection() {
        if (this.selectionStart === this.value.length) {
            return this;
        }
        return new TextAreaState(this.value, this.value.length, this.value.length, null, undefined);
    }
    writeToTextArea(reason, textArea, select) {
        if (_debugComposition) {
            console.log(`writeToTextArea ${reason}: ${this.toString()}`);
        }
        textArea.setValue(reason, this.value);
        if (select) {
            textArea.setSelectionRange(reason, this.selectionStart, this.selectionEnd);
        }
    }
    deduceEditorPosition(offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (offset <= this.selectionStart) {
            const str = this.value.substring(offset, this.selectionStart);
            return this._finishDeduceEditorPosition((_b = (_a = this.selection) === null || _a === void 0 ? void 0 : _a.getStartPosition()) !== null && _b !== void 0 ? _b : null, str, -1);
        }
        if (offset >= this.selectionEnd) {
            const str = this.value.substring(this.selectionEnd, offset);
            return this._finishDeduceEditorPosition((_d = (_c = this.selection) === null || _c === void 0 ? void 0 : _c.getEndPosition()) !== null && _d !== void 0 ? _d : null, str, 1);
        }
        const str1 = this.value.substring(this.selectionStart, offset);
        if (str1.indexOf(String.fromCharCode(8230)) === -1) {
            return this._finishDeduceEditorPosition((_f = (_e = this.selection) === null || _e === void 0 ? void 0 : _e.getStartPosition()) !== null && _f !== void 0 ? _f : null, str1, 1);
        }
        const str2 = this.value.substring(offset, this.selectionEnd);
        return this._finishDeduceEditorPosition((_h = (_g = this.selection) === null || _g === void 0 ? void 0 : _g.getEndPosition()) !== null && _h !== void 0 ? _h : null, str2, -1);
    }
    _finishDeduceEditorPosition(anchor, deltaText, signum) {
        let lineFeedCnt = 0;
        let lastLineFeedIndex = -1;
        while ((lastLineFeedIndex = deltaText.indexOf('\n', lastLineFeedIndex + 1)) !== -1) {
            lineFeedCnt++;
        }
        return [anchor, signum * deltaText.length, lineFeedCnt];
    }
    static deduceInput(previousState, currentState, couldBeEmojiInput) {
        if (!previousState) {
            // This is the EMPTY state
            return {
                text: '',
                replacePrevCharCnt: 0,
                replaceNextCharCnt: 0,
                positionDelta: 0
            };
        }
        if (_debugComposition) {
            console.log('------------------------deduceInput');
            console.log(`PREVIOUS STATE: ${previousState.toString()}`);
            console.log(`CURRENT STATE: ${currentState.toString()}`);
        }
        const prefixLength = Math.min(_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .commonPrefixLength */ .Mh(previousState.value, currentState.value), previousState.selectionStart, currentState.selectionStart);
        const suffixLength = Math.min(_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .commonSuffixLength */ .P1(previousState.value, currentState.value), previousState.value.length - previousState.selectionEnd, currentState.value.length - currentState.selectionEnd);
        const previousValue = previousState.value.substring(prefixLength, previousState.value.length - suffixLength);
        const currentValue = currentState.value.substring(prefixLength, currentState.value.length - suffixLength);
        const previousSelectionStart = previousState.selectionStart - prefixLength;
        const previousSelectionEnd = previousState.selectionEnd - prefixLength;
        const currentSelectionStart = currentState.selectionStart - prefixLength;
        const currentSelectionEnd = currentState.selectionEnd - prefixLength;
        if (_debugComposition) {
            console.log(`AFTER DIFFING PREVIOUS STATE: <${previousValue}>, selectionStart: ${previousSelectionStart}, selectionEnd: ${previousSelectionEnd}`);
            console.log(`AFTER DIFFING CURRENT STATE: <${currentValue}>, selectionStart: ${currentSelectionStart}, selectionEnd: ${currentSelectionEnd}`);
        }
        if (currentSelectionStart === currentSelectionEnd) {
            // no current selection
            const replacePreviousCharacters = (previousState.selectionStart - prefixLength);
            if (_debugComposition) {
                console.log(`REMOVE PREVIOUS: ${replacePreviousCharacters} chars`);
            }
            return {
                text: currentValue,
                replacePrevCharCnt: replacePreviousCharacters,
                replaceNextCharCnt: 0,
                positionDelta: 0
            };
        }
        // there is a current selection => composition case
        const replacePreviousCharacters = previousSelectionEnd - previousSelectionStart;
        return {
            text: currentValue,
            replacePrevCharCnt: replacePreviousCharacters,
            replaceNextCharCnt: 0,
            positionDelta: 0
        };
    }
    static deduceAndroidCompositionInput(previousState, currentState) {
        if (!previousState) {
            // This is the EMPTY state
            return {
                text: '',
                replacePrevCharCnt: 0,
                replaceNextCharCnt: 0,
                positionDelta: 0
            };
        }
        if (_debugComposition) {
            console.log('------------------------deduceAndroidCompositionInput');
            console.log(`PREVIOUS STATE: ${previousState.toString()}`);
            console.log(`CURRENT STATE: ${currentState.toString()}`);
        }
        if (previousState.value === currentState.value) {
            return {
                text: '',
                replacePrevCharCnt: 0,
                replaceNextCharCnt: 0,
                positionDelta: currentState.selectionEnd - previousState.selectionEnd
            };
        }
        const prefixLength = Math.min(_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .commonPrefixLength */ .Mh(previousState.value, currentState.value), previousState.selectionEnd);
        const suffixLength = Math.min(_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .commonSuffixLength */ .P1(previousState.value, currentState.value), previousState.value.length - previousState.selectionEnd);
        const previousValue = previousState.value.substring(prefixLength, previousState.value.length - suffixLength);
        const currentValue = currentState.value.substring(prefixLength, currentState.value.length - suffixLength);
        const previousSelectionStart = previousState.selectionStart - prefixLength;
        const previousSelectionEnd = previousState.selectionEnd - prefixLength;
        const currentSelectionStart = currentState.selectionStart - prefixLength;
        const currentSelectionEnd = currentState.selectionEnd - prefixLength;
        if (_debugComposition) {
            console.log(`AFTER DIFFING PREVIOUS STATE: <${previousValue}>, selectionStart: ${previousSelectionStart}, selectionEnd: ${previousSelectionEnd}`);
            console.log(`AFTER DIFFING CURRENT STATE: <${currentValue}>, selectionStart: ${currentSelectionStart}, selectionEnd: ${currentSelectionEnd}`);
        }
        return {
            text: currentValue,
            replacePrevCharCnt: previousSelectionEnd,
            replaceNextCharCnt: previousValue.length - previousSelectionEnd,
            positionDelta: currentSelectionEnd - currentValue.length
        };
    }
}
TextAreaState.EMPTY = new TextAreaState('', 0, 0, null, undefined);
class PagedScreenReaderStrategy {
    static _getPageOfLine(lineNumber, linesPerPage) {
        return Math.floor((lineNumber - 1) / linesPerPage);
    }
    static _getRangeForPage(page, linesPerPage) {
        const offset = page * linesPerPage;
        const startLineNumber = offset + 1;
        const endLineNumber = offset + linesPerPage;
        return new _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(startLineNumber, 1, endLineNumber + 1, 1);
    }
    static fromEditorSelection(model, selection, linesPerPage, trimLongText) {
        // Chromium handles very poorly text even of a few thousand chars
        // Cut text to avoid stalling the entire UI
        const LIMIT_CHARS = 500;
        const selectionStartPage = PagedScreenReaderStrategy._getPageOfLine(selection.startLineNumber, linesPerPage);
        const selectionStartPageRange = PagedScreenReaderStrategy._getRangeForPage(selectionStartPage, linesPerPage);
        const selectionEndPage = PagedScreenReaderStrategy._getPageOfLine(selection.endLineNumber, linesPerPage);
        const selectionEndPageRange = PagedScreenReaderStrategy._getRangeForPage(selectionEndPage, linesPerPage);
        let pretextRange = selectionStartPageRange.intersectRanges(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(1, 1, selection.startLineNumber, selection.startColumn));
        if (trimLongText && model.getValueLengthInRange(pretextRange, 1 /* EndOfLinePreference.LF */) > LIMIT_CHARS) {
            const pretextStart = model.modifyPosition(pretextRange.getEndPosition(), -LIMIT_CHARS);
            pretextRange = _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(pretextStart, pretextRange.getEndPosition());
        }
        const pretext = model.getValueInRange(pretextRange, 1 /* EndOfLinePreference.LF */);
        const lastLine = model.getLineCount();
        const lastLineMaxColumn = model.getLineMaxColumn(lastLine);
        let posttextRange = selectionEndPageRange.intersectRanges(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e(selection.endLineNumber, selection.endColumn, lastLine, lastLineMaxColumn));
        if (trimLongText && model.getValueLengthInRange(posttextRange, 1 /* EndOfLinePreference.LF */) > LIMIT_CHARS) {
            const posttextEnd = model.modifyPosition(posttextRange.getStartPosition(), LIMIT_CHARS);
            posttextRange = _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(posttextRange.getStartPosition(), posttextEnd);
        }
        const posttext = model.getValueInRange(posttextRange, 1 /* EndOfLinePreference.LF */);
        let text;
        if (selectionStartPage === selectionEndPage || selectionStartPage + 1 === selectionEndPage) {
            // take full selection
            text = model.getValueInRange(selection, 1 /* EndOfLinePreference.LF */);
        }
        else {
            const selectionRange1 = selectionStartPageRange.intersectRanges(selection);
            const selectionRange2 = selectionEndPageRange.intersectRanges(selection);
            text = (model.getValueInRange(selectionRange1, 1 /* EndOfLinePreference.LF */)
                + String.fromCharCode(8230)
                + model.getValueInRange(selectionRange2, 1 /* EndOfLinePreference.LF */));
        }
        if (trimLongText && text.length > 2 * LIMIT_CHARS) {
            text = text.substring(0, LIMIT_CHARS) + String.fromCharCode(8230) + text.substring(text.length - LIMIT_CHARS, text.length);
        }
        return new TextAreaState(pretext + text + posttext, pretext.length, pretext.length + text.length, selection, pretextRange.endLineNumber - pretextRange.startLineNumber);
    }
}


/***/ })

}]);