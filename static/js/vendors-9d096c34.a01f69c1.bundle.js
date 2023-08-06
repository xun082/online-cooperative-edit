"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-9d096c34"],{

/***/ 71405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .hoverHighlight {\n\tbackground-color: var(--vscode-editor-hoverHighlightBackground);\n}\n\n.monaco-editor .monaco-hover {\n\tcolor: var(--vscode-editorHoverWidget-foreground);\n\tbackground-color: var(--vscode-editorHoverWidget-background);\n\tborder: 1px solid var(--vscode-editorHoverWidget-border);\n\tborder-radius: 3px;\n}\n\n.monaco-editor .monaco-hover a {\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-editor .monaco-hover a:hover {\n\tcolor: var(--vscode-textLink-activeForeground);\n}\n\n.monaco-editor .monaco-hover .hover-row .actions {\n\tbackground-color: var(--vscode-editorHoverWidget-statusBarBackground);\n}\n\n.monaco-editor .monaco-hover code {\n\tbackground-color: var(--vscode-textCodeBlock-background);\n}\n\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n\n.monaco-editor.vs .valueSetReplacement {\n\toutline: solid 2px var(--vscode-editorBracketMatch-border);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 14470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hb: function() { return /* binding */ ContentHoverWidget; },
/* harmony export */   hT: function() { return /* binding */ ContentHoverController; },
/* harmony export */   mR: function() { return /* binding */ EditorHoverStatusBar; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_browser_ui_hover_hoverWidget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27911);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33899);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13372);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76584);
/* harmony import */ var _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96422);
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58606);
/* harmony import */ var _hoverOperation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38781);
/* harmony import */ var _hoverTypes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38145);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81043);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38048);
/* harmony import */ var _platform_keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19267);
/* harmony import */ var _suggest_browser_suggest_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88116);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72432);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94872);
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
















const $ = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.$;
let ContentHoverController = class ContentHoverController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(_editor, _instantiationService, _keybindingService) {
        super();
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this._keybindingService = _keybindingService;
        this._widget = this._register(this._instantiationService.createInstance(ContentHoverWidget, this._editor));
        this._currentResult = null;
        // Instantiate participants and sort them by `hoverOrdinal` which is relevant for rendering order.
        this._participants = [];
        for (const participant of _hoverTypes_js__WEBPACK_IMPORTED_MODULE_7__/* .HoverParticipantRegistry */ .Ae.getAll()) {
            this._participants.push(this._instantiationService.createInstance(participant, this._editor));
        }
        this._participants.sort((p1, p2) => p1.hoverOrdinal - p2.hoverOrdinal);
        this._computer = new ContentHoverComputer(this._editor, this._participants);
        this._hoverOperation = this._register(new _hoverOperation_js__WEBPACK_IMPORTED_MODULE_6__/* .HoverOperation */ .H(this._editor, this._computer));
        this._register(this._hoverOperation.onResult((result) => {
            if (!this._computer.anchor) {
                // invalid state, ignore result
                return;
            }
            const messages = (result.hasLoadingMessage ? this._addLoadingMessage(result.value) : result.value);
            this._withResult(new HoverResult(this._computer.anchor, messages, result.isComplete));
        }));
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(this._widget.getDomNode(), 'keydown', (e) => {
            if (e.equals(9 /* KeyCode.Escape */)) {
                this.hide();
            }
        }));
        this._register(_common_languages_js__WEBPACK_IMPORTED_MODULE_5__/* .TokenizationRegistry */ .RW.onDidChange(() => {
            if (this._widget.position && this._currentResult) {
                this._widget.clear();
                this._setCurrentResult(this._currentResult); // render again
            }
        }));
    }
    /**
     * Returns true if the hover shows now or will show.
     */
    maybeShowAt(mouseEvent) {
        const anchorCandidates = [];
        for (const participant of this._participants) {
            if (participant.suggestHoverAnchor) {
                const anchor = participant.suggestHoverAnchor(mouseEvent);
                if (anchor) {
                    anchorCandidates.push(anchor);
                }
            }
        }
        const target = mouseEvent.target;
        if (target.type === 6 /* MouseTargetType.CONTENT_TEXT */) {
            anchorCandidates.push(new _hoverTypes_js__WEBPACK_IMPORTED_MODULE_7__/* .HoverRangeAnchor */ .Qj(0, target.range, mouseEvent.event.posx, mouseEvent.event.posy));
        }
        if (target.type === 7 /* MouseTargetType.CONTENT_EMPTY */) {
            const epsilon = this._editor.getOption(48 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth / 2;
            if (!target.detail.isAfterLines && typeof target.detail.horizontalDistanceToText === 'number' && target.detail.horizontalDistanceToText < epsilon) {
                // Let hover kick in even when the mouse is technically in the empty area after a line, given the distance is small enough
                anchorCandidates.push(new _hoverTypes_js__WEBPACK_IMPORTED_MODULE_7__/* .HoverRangeAnchor */ .Qj(0, target.range, mouseEvent.event.posx, mouseEvent.event.posy));
            }
        }
        if (anchorCandidates.length === 0) {
            return this._startShowingOrUpdateHover(null, 0 /* HoverStartMode.Delayed */, 0 /* HoverStartSource.Mouse */, false, mouseEvent);
        }
        anchorCandidates.sort((a, b) => b.priority - a.priority);
        return this._startShowingOrUpdateHover(anchorCandidates[0], 0 /* HoverStartMode.Delayed */, 0 /* HoverStartSource.Mouse */, false, mouseEvent);
    }
    startShowingAtRange(range, mode, source, focus) {
        this._startShowingOrUpdateHover(new _hoverTypes_js__WEBPACK_IMPORTED_MODULE_7__/* .HoverRangeAnchor */ .Qj(0, range, undefined, undefined), mode, source, focus, null);
    }
    /**
     * Returns true if the hover shows now or will show.
     */
    _startShowingOrUpdateHover(anchor, mode, source, focus, mouseEvent) {
        if (!this._widget.position || !this._currentResult) {
            // The hover is not visible
            if (anchor) {
                this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
                return true;
            }
            return false;
        }
        // The hover is currently visible
        const hoverIsSticky = this._editor.getOption(58 /* EditorOption.hover */).sticky;
        const isGettingCloser = (hoverIsSticky && mouseEvent && this._widget.isMouseGettingCloser(mouseEvent.event.posx, mouseEvent.event.posy));
        if (isGettingCloser) {
            // The mouse is getting closer to the hover, so we will keep the hover untouched
            // But we will kick off a hover update at the new anchor, insisting on keeping the hover visible.
            if (anchor) {
                this._startHoverOperationIfNecessary(anchor, mode, source, focus, true);
            }
            return true;
        }
        if (!anchor) {
            this._setCurrentResult(null);
            return false;
        }
        if (anchor && this._currentResult.anchor.equals(anchor)) {
            // The widget is currently showing results for the exact same anchor, so no update is needed
            return true;
        }
        if (!anchor.canAdoptVisibleHover(this._currentResult.anchor, this._widget.position)) {
            // The new anchor is not compatible with the previous anchor
            this._setCurrentResult(null);
            this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
            return true;
        }
        // We aren't getting any closer to the hover, so we will filter existing results
        // and keep those which also apply to the new anchor.
        this._setCurrentResult(this._currentResult.filter(anchor));
        this._startHoverOperationIfNecessary(anchor, mode, source, focus, false);
        return true;
    }
    _startHoverOperationIfNecessary(anchor, mode, source, focus, insistOnKeepingHoverVisible) {
        if (this._computer.anchor && this._computer.anchor.equals(anchor)) {
            // We have to start a hover operation at the exact same anchor as before, so no work is needed
            return;
        }
        this._hoverOperation.cancel();
        this._computer.anchor = anchor;
        this._computer.shouldFocus = focus;
        this._computer.source = source;
        this._computer.insistOnKeepingHoverVisible = insistOnKeepingHoverVisible;
        this._hoverOperation.start(mode);
    }
    _setCurrentResult(hoverResult) {
        if (this._currentResult === hoverResult) {
            // avoid updating the DOM to avoid resetting the user selection
            return;
        }
        if (hoverResult && hoverResult.messages.length === 0) {
            hoverResult = null;
        }
        this._currentResult = hoverResult;
        if (this._currentResult) {
            this._renderMessages(this._currentResult.anchor, this._currentResult.messages);
        }
        else {
            this._widget.hide();
        }
    }
    hide() {
        this._computer.anchor = null;
        this._hoverOperation.cancel();
        this._setCurrentResult(null);
    }
    isColorPickerVisible() {
        return this._widget.isColorPickerVisible;
    }
    isVisibleFromKeyboard() {
        return this._widget.isVisibleFromKeyboard;
    }
    isVisible() {
        return this._widget.isVisible;
    }
    containsNode(node) {
        return (node ? this._widget.getDomNode().contains(node) : false);
    }
    _addLoadingMessage(result) {
        if (this._computer.anchor) {
            for (const participant of this._participants) {
                if (participant.createLoadingMessage) {
                    const loadingMessage = participant.createLoadingMessage(this._computer.anchor);
                    if (loadingMessage) {
                        return result.slice(0).concat([loadingMessage]);
                    }
                }
            }
        }
        return result;
    }
    _withResult(hoverResult) {
        if (this._widget.position && this._currentResult && this._currentResult.isComplete) {
            // The hover is visible with a previous complete result.
            if (!hoverResult.isComplete) {
                // Instead of rendering the new partial result, we wait for the result to be complete.
                return;
            }
            if (this._computer.insistOnKeepingHoverVisible && hoverResult.messages.length === 0) {
                // The hover would now hide normally, so we'll keep the previous messages
                return;
            }
        }
        this._setCurrentResult(hoverResult);
    }
    _renderMessages(anchor, messages) {
        const { showAtPosition, showAtSecondaryPosition, highlightRange } = ContentHoverController.computeHoverRanges(this._editor, anchor.range, messages);
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .DisposableStore */ .SL();
        const statusBar = disposables.add(new EditorHoverStatusBar(this._keybindingService));
        const fragment = document.createDocumentFragment();
        let colorPicker = null;
        const context = {
            fragment,
            statusBar,
            setColorPicker: (widget) => colorPicker = widget,
            onContentsChanged: () => this._widget.onContentsChanged(),
            hide: () => this.hide()
        };
        for (const participant of this._participants) {
            const hoverParts = messages.filter(msg => msg.owner === participant);
            if (hoverParts.length > 0) {
                disposables.add(participant.renderHoverParts(context, hoverParts));
            }
        }
        const isBeforeContent = messages.some(m => m.isBeforeContent);
        if (statusBar.hasContent) {
            fragment.appendChild(statusBar.hoverElement);
        }
        if (fragment.hasChildNodes()) {
            if (highlightRange) {
                const highlightDecoration = this._editor.createDecorationsCollection();
                highlightDecoration.set([{
                        range: highlightRange,
                        options: ContentHoverController._DECORATION_OPTIONS
                    }]);
                disposables.add((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .toDisposable */ .OF)(() => {
                    highlightDecoration.clear();
                }));
            }
            this._widget.showAt(fragment, new ContentHoverVisibleData(colorPicker, showAtPosition, showAtSecondaryPosition, this._editor.getOption(58 /* EditorOption.hover */).above, this._computer.shouldFocus, this._computer.source, isBeforeContent, anchor.initialMousePosX, anchor.initialMousePosY, disposables));
        }
        else {
            disposables.dispose();
        }
    }
    static computeHoverRanges(editor, anchorRange, messages) {
        let startColumnBoundary = 1;
        if (editor.hasModel()) {
            // Ensure the range is on the current view line
            const viewModel = editor._getViewModel();
            const coordinatesConverter = viewModel.coordinatesConverter;
            const anchorViewRange = coordinatesConverter.convertModelRangeToViewRange(anchorRange);
            const anchorViewRangeStart = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L(anchorViewRange.startLineNumber, viewModel.getLineMinColumn(anchorViewRange.startLineNumber));
            startColumnBoundary = coordinatesConverter.convertViewPositionToModelPosition(anchorViewRangeStart).column;
        }
        // The anchor range is always on a single line
        const anchorLineNumber = anchorRange.startLineNumber;
        let renderStartColumn = anchorRange.startColumn;
        let highlightRange = messages[0].range;
        let forceShowAtRange = null;
        for (const msg of messages) {
            highlightRange = _common_core_range_js__WEBPACK_IMPORTED_MODULE_15__/* .Range */ .e.plusRange(highlightRange, msg.range);
            if (msg.range.startLineNumber === anchorLineNumber && msg.range.endLineNumber === anchorLineNumber) {
                // this message has a range that is completely sitting on the line of the anchor
                renderStartColumn = Math.max(Math.min(renderStartColumn, msg.range.startColumn), startColumnBoundary);
            }
            if (msg.forceShowAtRange) {
                forceShowAtRange = msg.range;
            }
        }
        return {
            showAtPosition: forceShowAtRange ? forceShowAtRange.getStartPosition() : new _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L(anchorLineNumber, anchorRange.startColumn),
            showAtSecondaryPosition: forceShowAtRange ? forceShowAtRange.getStartPosition() : new _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L(anchorLineNumber, renderStartColumn),
            highlightRange
        };
    }
    focus() {
        this._widget.focus();
    }
    scrollUp() {
        this._widget.scrollUp();
    }
    scrollDown() {
        this._widget.scrollDown();
    }
    scrollLeft() {
        this._widget.scrollLeft();
    }
    scrollRight() {
        this._widget.scrollRight();
    }
    pageUp() {
        this._widget.pageUp();
    }
    pageDown() {
        this._widget.pageDown();
    }
    goToTop() {
        this._widget.goToTop();
    }
    goToBottom() {
        this._widget.goToBottom();
    }
    escape() {
        this._widget.escape();
    }
};
ContentHoverController._DECORATION_OPTIONS = _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_4__/* .ModelDecorationOptions */ .qx.register({
    description: 'content-hover-highlight',
    className: 'hoverHighlight'
});
ContentHoverController = __decorate([
    __param(1, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_9__/* .IInstantiationService */ .TG),
    __param(2, _platform_keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_10__/* .IKeybindingService */ .d)
], ContentHoverController);
class HoverResult {
    constructor(anchor, messages, isComplete) {
        this.anchor = anchor;
        this.messages = messages;
        this.isComplete = isComplete;
    }
    filter(anchor) {
        const filteredMessages = this.messages.filter((m) => m.isValidForHoverAnchor(anchor));
        if (filteredMessages.length === this.messages.length) {
            return this;
        }
        return new FilteredHoverResult(this, this.anchor, filteredMessages, this.isComplete);
    }
}
class FilteredHoverResult extends HoverResult {
    constructor(original, anchor, messages, isComplete) {
        super(anchor, messages, isComplete);
        this.original = original;
    }
    filter(anchor) {
        return this.original.filter(anchor);
    }
}
class ContentHoverVisibleData {
    constructor(colorPicker, showAtPosition, showAtSecondaryPosition, preferAbove, stoleFocus, source, isBeforeContent, initialMousePosX, initialMousePosY, disposables) {
        this.colorPicker = colorPicker;
        this.showAtPosition = showAtPosition;
        this.showAtSecondaryPosition = showAtSecondaryPosition;
        this.preferAbove = preferAbove;
        this.stoleFocus = stoleFocus;
        this.source = source;
        this.isBeforeContent = isBeforeContent;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.disposables = disposables;
        this.closestMouseDistance = undefined;
    }
}
let ContentHoverWidget = class ContentHoverWidget extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    /**
     * Returns `null` if the hover is not visible.
     */
    get position() {
        var _a, _b;
        return (_b = (_a = this._visibleData) === null || _a === void 0 ? void 0 : _a.showAtPosition) !== null && _b !== void 0 ? _b : null;
    }
    get isColorPickerVisible() {
        var _a;
        return Boolean((_a = this._visibleData) === null || _a === void 0 ? void 0 : _a.colorPicker);
    }
    get isVisibleFromKeyboard() {
        var _a;
        return (((_a = this._visibleData) === null || _a === void 0 ? void 0 : _a.source) === 1 /* HoverStartSource.Keyboard */);
    }
    get isVisible() {
        var _a;
        return (_a = this._hoverVisibleKey.get()) !== null && _a !== void 0 ? _a : false;
    }
    constructor(_editor, _contextKeyService) {
        super();
        this._editor = _editor;
        this._contextKeyService = _contextKeyService;
        this.allowEditorOverflow = true;
        this._hoverVisibleKey = _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_13__/* .EditorContextKeys */ .u.hoverVisible.bindTo(this._contextKeyService);
        this._hoverFocusedKey = _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_13__/* .EditorContextKeys */ .u.hoverFocused.bindTo(this._contextKeyService);
        this._hover = this._register(new _base_browser_ui_hover_hoverWidget_js__WEBPACK_IMPORTED_MODULE_1__/* .HoverWidget */ .c());
        this._focusTracker = this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .trackFocus */ .go(this.getDomNode()));
        this._horizontalScrollingBy = 30;
        this._visibleData = null;
        this._register(this._editor.onDidLayoutChange(() => this._layout()));
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(48 /* EditorOption.fontInfo */)) {
                this._updateFont();
            }
        }));
        this._setVisibleData(null);
        this._layout();
        this._editor.addContentWidget(this);
        this._register(this._focusTracker.onDidFocus(() => {
            this._hoverFocusedKey.set(true);
        }));
        this._register(this._focusTracker.onDidBlur(() => {
            this._hoverFocusedKey.set(false);
        }));
    }
    dispose() {
        this._editor.removeContentWidget(this);
        if (this._visibleData) {
            this._visibleData.disposables.dispose();
        }
        super.dispose();
    }
    getId() {
        return ContentHoverWidget.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        if (!this._visibleData) {
            return null;
        }
        let preferAbove = this._visibleData.preferAbove;
        if (!preferAbove && this._contextKeyService.getContextKeyValue(_suggest_browser_suggest_js__WEBPACK_IMPORTED_MODULE_11__/* .Context */ ._y.Visible.key)) {
            // Prefer rendering above if the suggest widget is visible
            preferAbove = true;
        }
        // :before content can align left of the text content
        const affinity = this._visibleData.isBeforeContent ? 3 /* PositionAffinity.LeftOfInjectedText */ : undefined;
        return {
            position: this._visibleData.showAtPosition,
            secondaryPosition: this._visibleData.showAtSecondaryPosition,
            preference: (preferAbove
                ? [1 /* ContentWidgetPositionPreference.ABOVE */, 2 /* ContentWidgetPositionPreference.BELOW */]
                : [2 /* ContentWidgetPositionPreference.BELOW */, 1 /* ContentWidgetPositionPreference.ABOVE */]),
            positionAffinity: affinity
        };
    }
    isMouseGettingCloser(posx, posy) {
        if (!this._visibleData) {
            return false;
        }
        if (typeof this._visibleData.initialMousePosX === 'undefined' || typeof this._visibleData.initialMousePosY === 'undefined') {
            this._visibleData.initialMousePosX = posx;
            this._visibleData.initialMousePosY = posy;
            return false;
        }
        const widgetRect = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .getDomNodePagePosition */ .i(this.getDomNode());
        if (typeof this._visibleData.closestMouseDistance === 'undefined') {
            this._visibleData.closestMouseDistance = computeDistanceFromPointToRectangle(this._visibleData.initialMousePosX, this._visibleData.initialMousePosY, widgetRect.left, widgetRect.top, widgetRect.width, widgetRect.height);
        }
        const distance = computeDistanceFromPointToRectangle(posx, posy, widgetRect.left, widgetRect.top, widgetRect.width, widgetRect.height);
        if (distance > this._visibleData.closestMouseDistance + 4 /* tolerance of 4 pixels */) {
            // The mouse is getting farther away
            return false;
        }
        this._visibleData.closestMouseDistance = Math.min(this._visibleData.closestMouseDistance, distance);
        return true;
    }
    _setVisibleData(visibleData) {
        if (this._visibleData) {
            this._visibleData.disposables.dispose();
        }
        this._visibleData = visibleData;
        this._hoverVisibleKey.set(!!this._visibleData);
        this._hover.containerDomNode.classList.toggle('hidden', !this._visibleData);
    }
    _layout() {
        const height = Math.max(this._editor.getLayoutInfo().height / 4, 250);
        const { fontSize, lineHeight } = this._editor.getOption(48 /* EditorOption.fontInfo */);
        this._hover.contentsDomNode.style.fontSize = `${fontSize}px`;
        this._hover.contentsDomNode.style.lineHeight = `${lineHeight / fontSize}`;
        this._hover.contentsDomNode.style.maxHeight = `${height}px`;
        this._hover.contentsDomNode.style.maxWidth = `${Math.max(this._editor.getLayoutInfo().width * 0.66, 500)}px`;
    }
    _updateFont() {
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach(node => this._editor.applyFontInfo(node));
    }
    showAt(node, visibleData) {
        var _a;
        this._setVisibleData(visibleData);
        this._hover.contentsDomNode.textContent = '';
        this._hover.contentsDomNode.appendChild(node);
        this._hover.contentsDomNode.style.paddingBottom = '';
        this._updateFont();
        this.onContentsChanged();
        // Simply force a synchronous render on the editor
        // such that the widget does not really render with left = '0px'
        this._editor.render();
        // See https://github.com/microsoft/vscode/issues/140339
        // TODO: Doing a second layout of the hover after force rendering the editor
        this.onContentsChanged();
        if (visibleData.stoleFocus) {
            this._hover.containerDomNode.focus();
        }
        (_a = visibleData.colorPicker) === null || _a === void 0 ? void 0 : _a.layout();
    }
    hide() {
        if (this._visibleData) {
            const stoleFocus = this._visibleData.stoleFocus;
            this._setVisibleData(null);
            this._hoverFocusedKey.set(false);
            this._editor.layoutContentWidget(this);
            if (stoleFocus) {
                this._editor.focus();
            }
        }
    }
    onContentsChanged() {
        this._editor.layoutContentWidget(this);
        this._hover.onContentsChanged();
        const scrollDimensions = this._hover.scrollbar.getScrollDimensions();
        const hasHorizontalScrollbar = (scrollDimensions.scrollWidth > scrollDimensions.width);
        if (hasHorizontalScrollbar) {
            // There is just a horizontal scrollbar
            const extraBottomPadding = `${this._hover.scrollbar.options.horizontalScrollbarSize}px`;
            if (this._hover.contentsDomNode.style.paddingBottom !== extraBottomPadding) {
                this._hover.contentsDomNode.style.paddingBottom = extraBottomPadding;
                this._editor.layoutContentWidget(this);
                this._hover.onContentsChanged();
            }
        }
    }
    clear() {
        this._hover.contentsDomNode.textContent = '';
    }
    focus() {
        this._hover.containerDomNode.focus();
    }
    scrollUp() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const fontInfo = this._editor.getOption(48 /* EditorOption.fontInfo */);
        this._hover.scrollbar.setScrollPosition({ scrollTop: scrollTop - fontInfo.lineHeight });
    }
    scrollDown() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const fontInfo = this._editor.getOption(48 /* EditorOption.fontInfo */);
        this._hover.scrollbar.setScrollPosition({ scrollTop: scrollTop + fontInfo.lineHeight });
    }
    scrollLeft() {
        const scrollLeft = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({ scrollLeft: scrollLeft - this._horizontalScrollingBy });
    }
    scrollRight() {
        const scrollLeft = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({ scrollLeft: scrollLeft + this._horizontalScrollingBy });
    }
    pageUp() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const scrollHeight = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({ scrollTop: scrollTop - scrollHeight });
    }
    pageDown() {
        const scrollTop = this._hover.scrollbar.getScrollPosition().scrollTop;
        const scrollHeight = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({ scrollTop: scrollTop + scrollHeight });
    }
    goToTop() {
        this._hover.scrollbar.setScrollPosition({ scrollTop: 0 });
    }
    goToBottom() {
        this._hover.scrollbar.setScrollPosition({ scrollTop: this._hover.scrollbar.getScrollDimensions().scrollHeight });
    }
    escape() {
        this._editor.focus();
    }
};
ContentHoverWidget.ID = 'editor.contrib.contentHoverWidget';
ContentHoverWidget = __decorate([
    __param(1, _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_8__/* .IContextKeyService */ .i6)
], ContentHoverWidget);
let EditorHoverStatusBar = class EditorHoverStatusBar extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    get hasContent() {
        return this._hasContent;
    }
    constructor(_keybindingService) {
        super();
        this._keybindingService = _keybindingService;
        this._hasContent = false;
        this.hoverElement = $('div.hover-row.status-bar');
        this.actionsElement = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .append */ .R3(this.hoverElement, $('div.actions'));
    }
    addAction(actionOptions) {
        const keybinding = this._keybindingService.lookupKeybinding(actionOptions.commandId);
        const keybindingLabel = keybinding ? keybinding.getLabel() : null;
        this._hasContent = true;
        return this._register(_base_browser_ui_hover_hoverWidget_js__WEBPACK_IMPORTED_MODULE_1__/* .HoverAction */ .S.render(this.actionsElement, actionOptions, keybindingLabel));
    }
    append(element) {
        const result = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .append */ .R3(this.actionsElement, element);
        this._hasContent = true;
        return result;
    }
};
EditorHoverStatusBar = __decorate([
    __param(0, _platform_keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_10__/* .IKeybindingService */ .d)
], EditorHoverStatusBar);
class ContentHoverComputer {
    get anchor() { return this._anchor; }
    set anchor(value) { this._anchor = value; }
    get shouldFocus() { return this._shouldFocus; }
    set shouldFocus(value) { this._shouldFocus = value; }
    get source() { return this._source; }
    set source(value) { this._source = value; }
    get insistOnKeepingHoverVisible() { return this._insistOnKeepingHoverVisible; }
    set insistOnKeepingHoverVisible(value) { this._insistOnKeepingHoverVisible = value; }
    constructor(_editor, _participants) {
        this._editor = _editor;
        this._participants = _participants;
        this._anchor = null;
        this._shouldFocus = false;
        this._source = 0 /* HoverStartSource.Mouse */;
        this._insistOnKeepingHoverVisible = false;
    }
    static _getLineDecorations(editor, anchor) {
        if (anchor.type !== 1 /* HoverAnchorType.Range */ && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        if (lineNumber > model.getLineCount()) {
            // invalid line
            return [];
        }
        const maxColumn = model.getLineMaxColumn(lineNumber);
        return editor.getLineDecorations(lineNumber).filter((d) => {
            if (d.options.isWholeLine) {
                return true;
            }
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            if (d.options.showIfCollapsed) {
                // Relax check around `showIfCollapsed` decorations to also include +/- 1 character
                if (startColumn > anchor.range.startColumn + 1 || anchor.range.endColumn - 1 > endColumn) {
                    return false;
                }
            }
            else {
                if (startColumn > anchor.range.startColumn || anchor.range.endColumn > endColumn) {
                    return false;
                }
            }
            return true;
        });
    }
    computeAsync(token) {
        const anchor = this._anchor;
        if (!this._editor.hasModel() || !anchor) {
            return _base_common_async_js__WEBPACK_IMPORTED_MODULE_12__/* .AsyncIterableObject */ .Aq.EMPTY;
        }
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, anchor);
        return _base_common_async_js__WEBPACK_IMPORTED_MODULE_12__/* .AsyncIterableObject */ .Aq.merge(this._participants.map((participant) => {
            if (!participant.computeAsync) {
                return _base_common_async_js__WEBPACK_IMPORTED_MODULE_12__/* .AsyncIterableObject */ .Aq.EMPTY;
            }
            return participant.computeAsync(anchor, lineDecorations, token);
        }));
    }
    computeSync() {
        if (!this._editor.hasModel() || !this._anchor) {
            return [];
        }
        const lineDecorations = ContentHoverComputer._getLineDecorations(this._editor, this._anchor);
        let result = [];
        for (const participant of this._participants) {
            result = result.concat(participant.computeSync(this._anchor, lineDecorations));
        }
        return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_2__/* .coalesce */ .kX)(result);
    }
}
function computeDistanceFromPointToRectangle(pointX, pointY, left, top, width, height) {
    const x = (left + width / 2); // x center of rectangle
    const y = (top + height / 2); // y center of rectangle
    const dx = Math.max(Math.abs(pointX - x) - width / 2, 0);
    const dy = Math.max(Math.abs(pointY - y) - height / 2, 0);
    return Math.sqrt(dx * dx + dy * dy);
}


/***/ }),

/***/ 53303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R8: function() { return /* binding */ getHover; }
/* harmony export */ });
/* unused harmony exports HoverProviderResult, getHoverPromise */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29811);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50847);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91213);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58431);
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





class HoverProviderResult {
    constructor(provider, hover, ordinal) {
        this.provider = provider;
        this.hover = hover;
        this.ordinal = ordinal;
    }
}
function executeProvider(provider, ordinal, model, position, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield Promise.resolve(provider.provideHover(model, position, token));
            if (result && isValid(result)) {
                return new HoverProviderResult(provider, result, ordinal);
            }
        }
        catch (err) {
            (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .onUnexpectedExternalError */ .Cp)(err);
        }
        return undefined;
    });
}
function getHover(registry, model, position, token) {
    const providers = registry.ordered(model);
    const promises = providers.map((provider, index) => executeProvider(provider, index, model, position, token));
    return _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .AsyncIterableObject */ .Aq.fromPromises(promises).coalesce();
}
function getHoverPromise(registry, model, position, token) {
    return getHover(registry, model, position, token).map(item => item.hover).toPromise();
}
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerModelAndPositionCommand */ .sb)('_executeHoverProvider', (accessor, model, position) => {
    const languageFeaturesService = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_4__/* .ILanguageFeaturesService */ .p);
    return getHoverPromise(languageFeaturesService.hoverProvider, model, position, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None);
});
function isValid(result) {
    const hasRange = (typeof result.range !== 'undefined');
    const hasHtmlContent = typeof result.contents !== 'undefined' && result.contents && result.contents.length > 0;
    return hasRange && hasHtmlContent;
}


/***/ }),

/***/ 34576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ModesHoverController: function() { return /* binding */ ModesHoverController; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js
var keyCodes = __webpack_require__(17106);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(21608);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js + 1 modules
var goToDefinitionAtPosition = __webpack_require__(98389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/contentHover.js
var contentHover = __webpack_require__(14470);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(4950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.js + 1 modules
var markdownRenderer = __webpack_require__(99881);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverOperation.js
var hoverOperation = __webpack_require__(38781);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/hover/hoverWidget.js + 1 modules
var hoverWidget = __webpack_require__(27911);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/marginHover.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const $ = dom.$;
class MarginHoverWidget extends lifecycle/* Disposable */.JT {
    constructor(editor, languageService, openerService) {
        super();
        this._renderDisposeables = this._register(new lifecycle/* DisposableStore */.SL());
        this._editor = editor;
        this._isVisible = false;
        this._messages = [];
        this._hover = this._register(new hoverWidget/* HoverWidget */.c());
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        this._markdownRenderer = this._register(new markdownRenderer/* MarkdownRenderer */.$({ editor: this._editor }, languageService, openerService));
        this._computer = new MarginHoverComputer(this._editor);
        this._hoverOperation = this._register(new hoverOperation/* HoverOperation */.H(this._editor, this._computer));
        this._register(this._hoverOperation.onResult((result) => {
            this._withResult(result.value);
        }));
        this._register(this._editor.onDidChangeModelDecorations(() => this._onModelDecorationsChanged()));
        this._register(this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(48 /* EditorOption.fontInfo */)) {
                this._updateFont();
            }
        }));
        this._editor.addOverlayWidget(this);
    }
    dispose() {
        this._editor.removeOverlayWidget(this);
        super.dispose();
    }
    getId() {
        return MarginHoverWidget.ID;
    }
    getDomNode() {
        return this._hover.containerDomNode;
    }
    getPosition() {
        return null;
    }
    _updateFont() {
        const codeClasses = Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName('code'));
        codeClasses.forEach(node => this._editor.applyFontInfo(node));
    }
    _onModelDecorationsChanged() {
        if (this._isVisible) {
            // The decorations have changed and the hover is visible,
            // we need to recompute the displayed text
            this._hoverOperation.cancel();
            this._hoverOperation.start(0 /* HoverStartMode.Delayed */);
        }
    }
    startShowingAt(lineNumber) {
        if (this._computer.lineNumber === lineNumber) {
            // We have to show the widget at the exact same line number as before, so no work is needed
            return;
        }
        this._hoverOperation.cancel();
        this.hide();
        this._computer.lineNumber = lineNumber;
        this._hoverOperation.start(0 /* HoverStartMode.Delayed */);
    }
    hide() {
        this._computer.lineNumber = -1;
        this._hoverOperation.cancel();
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
    }
    _withResult(result) {
        this._messages = result;
        if (this._messages.length > 0) {
            this._renderMessages(this._computer.lineNumber, this._messages);
        }
        else {
            this.hide();
        }
    }
    _renderMessages(lineNumber, messages) {
        this._renderDisposeables.clear();
        const fragment = document.createDocumentFragment();
        for (const msg of messages) {
            const markdownHoverElement = $('div.hover-row.markdown-hover');
            const hoverContentsElement = dom/* append */.R3(markdownHoverElement, $('div.hover-contents'));
            const renderedContents = this._renderDisposeables.add(this._markdownRenderer.render(msg.value));
            hoverContentsElement.appendChild(renderedContents.element);
            fragment.appendChild(markdownHoverElement);
        }
        this._updateContents(fragment);
        this._showAt(lineNumber);
    }
    _updateContents(node) {
        this._hover.contentsDomNode.textContent = '';
        this._hover.contentsDomNode.appendChild(node);
        this._updateFont();
    }
    _showAt(lineNumber) {
        if (!this._isVisible) {
            this._isVisible = true;
            this._hover.containerDomNode.classList.toggle('hidden', !this._isVisible);
        }
        const editorLayout = this._editor.getLayoutInfo();
        const topForLineNumber = this._editor.getTopForLineNumber(lineNumber);
        const editorScrollTop = this._editor.getScrollTop();
        const lineHeight = this._editor.getOption(64 /* EditorOption.lineHeight */);
        const nodeHeight = this._hover.containerDomNode.clientHeight;
        const top = topForLineNumber - editorScrollTop - ((nodeHeight - lineHeight) / 2);
        this._hover.containerDomNode.style.left = `${editorLayout.glyphMarginLeft + editorLayout.glyphMarginWidth}px`;
        this._hover.containerDomNode.style.top = `${Math.max(Math.round(top), 0)}px`;
    }
}
MarginHoverWidget.ID = 'editor.contrib.modesGlyphHoverWidget';
class MarginHoverComputer {
    get lineNumber() {
        return this._lineNumber;
    }
    set lineNumber(value) {
        this._lineNumber = value;
    }
    constructor(_editor) {
        this._editor = _editor;
        this._lineNumber = -1;
    }
    computeSync() {
        const toHoverMessage = (contents) => {
            return {
                value: contents
            };
        };
        const lineDecorations = this._editor.getLineDecorations(this._lineNumber);
        const result = [];
        if (!lineDecorations) {
            return result;
        }
        for (const d of lineDecorations) {
            if (!d.options.glyphMarginClassName) {
                continue;
            }
            const hoverMessage = d.options.glyphMarginHoverMessage;
            if (!hoverMessage || (0,htmlContent/* isEmptyMarkdownString */.CP)(hoverMessage)) {
                continue;
            }
            result.push(...(0,arrays/* asArray */._2)(hoverMessage).map(toHoverMessage));
        }
        return result;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js
var hoverTypes = __webpack_require__(38145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js
var markdownHoverParticipant = __webpack_require__(89211);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(8506);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/markerDecorations.js
var markerDecorations = __webpack_require__(68703);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeAction.js
var codeAction = __webpack_require__(68081);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionController.js + 2 modules
var codeActionController = __webpack_require__(80855);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/common/types.js
var types = __webpack_require__(18019);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js + 3 modules
var gotoError = __webpack_require__(89246);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js
var markers = __webpack_require__(74591);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js
var progress = __webpack_require__(99871);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markerHoverParticipant.js
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

















const markerHoverParticipant_$ = dom.$;
class MarkerHover {
    constructor(owner, range, marker) {
        this.owner = owner;
        this.range = range;
        this.marker = marker;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* HoverAnchorType.Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
}
const markerCodeActionTrigger = {
    type: 1 /* CodeActionTriggerType.Invoke */,
    filter: { include: types/* CodeActionKind */.yN.QuickFix },
    triggerAction: types/* CodeActionTriggerSource */.aQ.QuickFixHover
};
let MarkerHoverParticipant = class MarkerHoverParticipant {
    constructor(_editor, _markerDecorationsService, _openerService, _languageFeaturesService) {
        this._editor = _editor;
        this._markerDecorationsService = _markerDecorationsService;
        this._openerService = _openerService;
        this._languageFeaturesService = _languageFeaturesService;
        this.hoverOrdinal = 1;
        this.recentMarkerCodeActionsInfo = undefined;
    }
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */ && !anchor.supportsMarkerHover) {
            return [];
        }
        const model = this._editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        for (const d of lineDecorations) {
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            const marker = this._markerDecorationsService.getMarker(model.uri, d);
            if (!marker) {
                continue;
            }
            const range = new core_range/* Range */.e(anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkerHover(this, range, marker));
        }
        return result;
    }
    renderHoverParts(context, hoverParts) {
        if (!hoverParts.length) {
            return lifecycle/* Disposable */.JT.None;
        }
        const disposables = new lifecycle/* DisposableStore */.SL();
        hoverParts.forEach(msg => context.fragment.appendChild(this.renderMarkerHover(msg, disposables)));
        const markerHoverForStatusbar = hoverParts.length === 1 ? hoverParts[0] : hoverParts.sort((a, b) => markers/* MarkerSeverity */.ZL.compare(a.marker.severity, b.marker.severity))[0];
        this.renderMarkerStatusbar(context, markerHoverForStatusbar, disposables);
        return disposables;
    }
    renderMarkerHover(markerHover, disposables) {
        const hoverElement = markerHoverParticipant_$('div.hover-row');
        const markerElement = dom/* append */.R3(hoverElement, markerHoverParticipant_$('div.marker.hover-contents'));
        const { source, message, code, relatedInformation } = markerHover.marker;
        this._editor.applyFontInfo(markerElement);
        const messageElement = dom/* append */.R3(markerElement, markerHoverParticipant_$('span'));
        messageElement.style.whiteSpace = 'pre-wrap';
        messageElement.innerText = message;
        if (source || code) {
            // Code has link
            if (code && typeof code !== 'string') {
                const sourceAndCodeElement = markerHoverParticipant_$('span');
                if (source) {
                    const sourceElement = dom/* append */.R3(sourceAndCodeElement, markerHoverParticipant_$('span'));
                    sourceElement.innerText = source;
                }
                const codeLink = dom/* append */.R3(sourceAndCodeElement, markerHoverParticipant_$('a.code-link'));
                codeLink.setAttribute('href', code.target.toString());
                disposables.add(dom/* addDisposableListener */.nm(codeLink, 'click', (e) => {
                    this._openerService.open(code.target, { allowCommands: true });
                    e.preventDefault();
                    e.stopPropagation();
                }));
                const codeElement = dom/* append */.R3(codeLink, markerHoverParticipant_$('span'));
                codeElement.innerText = code.value;
                const detailsElement = dom/* append */.R3(markerElement, sourceAndCodeElement);
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
            }
            else {
                const detailsElement = dom/* append */.R3(markerElement, markerHoverParticipant_$('span'));
                detailsElement.style.opacity = '0.6';
                detailsElement.style.paddingLeft = '6px';
                detailsElement.innerText = source && code ? `${source}(${code})` : source ? source : `(${code})`;
            }
        }
        if ((0,arrays/* isNonEmptyArray */.Of)(relatedInformation)) {
            for (const { message, resource, startLineNumber, startColumn } of relatedInformation) {
                const relatedInfoContainer = dom/* append */.R3(markerElement, markerHoverParticipant_$('div'));
                relatedInfoContainer.style.marginTop = '8px';
                const a = dom/* append */.R3(relatedInfoContainer, markerHoverParticipant_$('a'));
                a.innerText = `${(0,resources/* basename */.EZ)(resource)}(${startLineNumber}, ${startColumn}): `;
                a.style.cursor = 'pointer';
                disposables.add(dom/* addDisposableListener */.nm(a, 'click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (this._openerService) {
                        this._openerService.open(resource, {
                            fromUserGesture: true,
                            editorOptions: { selection: { startLineNumber, startColumn } }
                        }).catch(errors/* onUnexpectedError */.dL);
                    }
                }));
                const messageElement = dom/* append */.R3(relatedInfoContainer, markerHoverParticipant_$('span'));
                messageElement.innerText = message;
                this._editor.applyFontInfo(messageElement);
            }
        }
        return hoverElement;
    }
    renderMarkerStatusbar(context, markerHover, disposables) {
        if (markerHover.marker.severity === markers/* MarkerSeverity */.ZL.Error || markerHover.marker.severity === markers/* MarkerSeverity */.ZL.Warning || markerHover.marker.severity === markers/* MarkerSeverity */.ZL.Info) {
            context.statusBar.addAction({
                label: nls/* localize */.NC('view problem', "View Problem"),
                commandId: gotoError.NextMarkerAction.ID,
                run: () => {
                    var _a;
                    context.hide();
                    (_a = gotoError.MarkerController.get(this._editor)) === null || _a === void 0 ? void 0 : _a.showAtMarker(markerHover.marker);
                    this._editor.focus();
                }
            });
        }
        if (!this._editor.getOption(88 /* EditorOption.readOnly */)) {
            const quickfixPlaceholderElement = context.statusBar.append(markerHoverParticipant_$('div'));
            if (this.recentMarkerCodeActionsInfo) {
                if (markers/* IMarkerData */.H0.makeKey(this.recentMarkerCodeActionsInfo.marker) === markers/* IMarkerData */.H0.makeKey(markerHover.marker)) {
                    if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                        quickfixPlaceholderElement.textContent = nls/* localize */.NC('noQuickFixes', "No quick fixes available");
                    }
                }
                else {
                    this.recentMarkerCodeActionsInfo = undefined;
                }
            }
            const updatePlaceholderDisposable = this.recentMarkerCodeActionsInfo && !this.recentMarkerCodeActionsInfo.hasCodeActions ? lifecycle/* Disposable */.JT.None : disposables.add((0,common_async/* disposableTimeout */.Vg)(() => quickfixPlaceholderElement.textContent = nls/* localize */.NC('checkingForQuickFixes', "Checking for quick fixes..."), 200));
            if (!quickfixPlaceholderElement.textContent) {
                // Have some content in here to avoid flickering
                quickfixPlaceholderElement.textContent = String.fromCharCode(0xA0); // &nbsp;
            }
            const codeActionsPromise = this.getCodeActions(markerHover.marker);
            disposables.add((0,lifecycle/* toDisposable */.OF)(() => codeActionsPromise.cancel()));
            codeActionsPromise.then(actions => {
                updatePlaceholderDisposable.dispose();
                this.recentMarkerCodeActionsInfo = { marker: markerHover.marker, hasCodeActions: actions.validActions.length > 0 };
                if (!this.recentMarkerCodeActionsInfo.hasCodeActions) {
                    actions.dispose();
                    quickfixPlaceholderElement.textContent = nls/* localize */.NC('noQuickFixes', "No quick fixes available");
                    return;
                }
                quickfixPlaceholderElement.style.display = 'none';
                let showing = false;
                disposables.add((0,lifecycle/* toDisposable */.OF)(() => {
                    if (!showing) {
                        actions.dispose();
                    }
                }));
                context.statusBar.addAction({
                    label: nls/* localize */.NC('quick fixes', "Quick Fix..."),
                    commandId: codeAction/* quickFixCommandId */.cz,
                    run: (target) => {
                        showing = true;
                        const controller = codeActionController/* CodeActionController */.G.get(this._editor);
                        const elementPosition = dom/* getDomNodePagePosition */.i(target);
                        // Hide the hover pre-emptively, otherwise the editor can close the code actions
                        // context menu as well when using keyboard navigation
                        context.hide();
                        controller === null || controller === void 0 ? void 0 : controller.showCodeActions(markerCodeActionTrigger, actions, {
                            x: elementPosition.left,
                            y: elementPosition.top,
                            width: elementPosition.width,
                            height: elementPosition.height
                        });
                    }
                });
            }, errors/* onUnexpectedError */.dL);
        }
    }
    getCodeActions(marker) {
        return (0,common_async/* createCancelablePromise */.PG)(cancellationToken => {
            return (0,codeAction/* getCodeActions */.aI)(this._languageFeaturesService.codeActionProvider, this._editor.getModel(), new core_range/* Range */.e(marker.startLineNumber, marker.startColumn, marker.endLineNumber, marker.endColumn), markerCodeActionTrigger, progress/* Progress */.Ex.None, cancellationToken);
        });
    }
};
MarkerHoverParticipant = __decorate([
    __param(1, markerDecorations/* IMarkerDecorationsService */.i),
    __param(2, common_opener/* IOpenerService */.v4),
    __param(3, languageFeatures/* ILanguageFeaturesService */.p)
], MarkerHoverParticipant);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletionsHintsWidget.js + 1 modules
var inlineCompletionsHintsWidget = __webpack_require__(50149);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(79873);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(67152);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77044);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(21114);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(11542);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(70204);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.css
var hover = __webpack_require__(71405);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(hover/* default */.Z, options);




       /* harmony default export */ var browser_hover = (hover/* default */.Z && hover/* default */.Z.locals ? hover/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var hover_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hover_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




















let ModesHoverController = class ModesHoverController {
    static get(editor) {
        return editor.getContribution(ModesHoverController.ID);
    }
    constructor(_editor, _instantiationService, _openerService, _languageService, _keybindingService) {
        this._editor = _editor;
        this._instantiationService = _instantiationService;
        this._openerService = _openerService;
        this._languageService = _languageService;
        this._keybindingService = _keybindingService;
        this._toUnhook = new lifecycle/* DisposableStore */.SL();
        this._isMouseDown = false;
        this._hoverClicked = false;
        this._contentWidget = null;
        this._glyphWidget = null;
        this._hookEvents();
        this._didChangeConfigurationHandler = this._editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(58 /* EditorOption.hover */)) {
                this._unhookEvents();
                this._hookEvents();
            }
        });
    }
    _hookEvents() {
        const hideWidgetsEventHandler = () => this._hideWidgets();
        const hoverOpts = this._editor.getOption(58 /* EditorOption.hover */);
        this._isHoverEnabled = hoverOpts.enabled;
        this._isHoverSticky = hoverOpts.sticky;
        if (this._isHoverEnabled) {
            this._toUnhook.add(this._editor.onMouseDown((e) => this._onEditorMouseDown(e)));
            this._toUnhook.add(this._editor.onMouseUp((e) => this._onEditorMouseUp(e)));
            this._toUnhook.add(this._editor.onMouseMove((e) => this._onEditorMouseMove(e)));
            this._toUnhook.add(this._editor.onKeyDown((e) => this._onKeyDown(e)));
        }
        else {
            this._toUnhook.add(this._editor.onMouseMove((e) => this._onEditorMouseMove(e)));
            this._toUnhook.add(this._editor.onKeyDown((e) => this._onKeyDown(e)));
        }
        this._toUnhook.add(this._editor.onMouseLeave((e) => this._onEditorMouseLeave(e)));
        this._toUnhook.add(this._editor.onDidChangeModel(hideWidgetsEventHandler));
        this._toUnhook.add(this._editor.onDidScrollChange((e) => this._onEditorScrollChanged(e)));
    }
    _unhookEvents() {
        this._toUnhook.clear();
    }
    _onEditorScrollChanged(e) {
        if (e.scrollTopChanged || e.scrollLeftChanged) {
            this._hideWidgets();
        }
    }
    _onEditorMouseDown(mouseEvent) {
        this._isMouseDown = true;
        const target = mouseEvent.target;
        if (target.type === 9 /* MouseTargetType.CONTENT_WIDGET */ && target.detail === contentHover/* ContentHoverWidget */.Hb.ID) {
            this._hoverClicked = true;
            // mouse down on top of content hover widget
            return;
        }
        if (target.type === 12 /* MouseTargetType.OVERLAY_WIDGET */ && target.detail === MarginHoverWidget.ID) {
            // mouse down on top of overlay hover widget
            return;
        }
        if (target.type !== 12 /* MouseTargetType.OVERLAY_WIDGET */) {
            this._hoverClicked = false;
        }
        this._hideWidgets();
    }
    _onEditorMouseUp(mouseEvent) {
        this._isMouseDown = false;
    }
    _onEditorMouseLeave(mouseEvent) {
        var _a;
        const targetEm = (mouseEvent.event.browserEvent.relatedTarget);
        if ((_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.containsNode(targetEm)) {
            // when the mouse is inside hover widget
            return;
        }
        this._hideWidgets();
    }
    _onEditorMouseMove(mouseEvent) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const target = mouseEvent.target;
        if (this._isMouseDown && this._hoverClicked) {
            return;
        }
        if (this._isHoverSticky && target.type === 9 /* MouseTargetType.CONTENT_WIDGET */ && target.detail === contentHover/* ContentHoverWidget */.Hb.ID) {
            // mouse moved on top of content hover widget
            return;
        }
        if (this._isHoverSticky && ((_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.containsNode((_b = mouseEvent.event.browserEvent.view) === null || _b === void 0 ? void 0 : _b.document.activeElement)) && !((_d = (_c = mouseEvent.event.browserEvent.view) === null || _c === void 0 ? void 0 : _c.getSelection()) === null || _d === void 0 ? void 0 : _d.isCollapsed)) {
            // selected text within content hover widget
            return;
        }
        if (!this._isHoverSticky && target.type === 9 /* MouseTargetType.CONTENT_WIDGET */ && target.detail === contentHover/* ContentHoverWidget */.Hb.ID
            && ((_e = this._contentWidget) === null || _e === void 0 ? void 0 : _e.isColorPickerVisible())) {
            // though the hover is not sticky, the color picker needs to.
            return;
        }
        if (this._isHoverSticky && target.type === 12 /* MouseTargetType.OVERLAY_WIDGET */ && target.detail === MarginHoverWidget.ID) {
            // mouse moved on top of overlay hover widget
            return;
        }
        if (this._isHoverSticky && ((_f = this._contentWidget) === null || _f === void 0 ? void 0 : _f.isVisibleFromKeyboard())) {
            // Sticky mode is on and the hover has been shown via keyboard
            // so moving the mouse has no effect
            return;
        }
        if (!this._isHoverEnabled) {
            this._hideWidgets();
            return;
        }
        const contentWidget = this._getOrCreateContentWidget();
        if (contentWidget.maybeShowAt(mouseEvent)) {
            (_g = this._glyphWidget) === null || _g === void 0 ? void 0 : _g.hide();
            return;
        }
        if (target.type === 2 /* MouseTargetType.GUTTER_GLYPH_MARGIN */ && target.position) {
            (_h = this._contentWidget) === null || _h === void 0 ? void 0 : _h.hide();
            if (!this._glyphWidget) {
                this._glyphWidget = new MarginHoverWidget(this._editor, this._languageService, this._openerService);
            }
            this._glyphWidget.startShowingAt(target.position.lineNumber);
            return;
        }
        this._hideWidgets();
    }
    _onKeyDown(e) {
        var _a;
        if (!this._editor.hasModel()) {
            return;
        }
        const resolvedKeyboardEvent = this._keybindingService.softDispatch(e, this._editor.getDomNode());
        // If the beginning of a multi-chord keybinding is pressed, or the command aims to focus the hover, set the variable to true, otherwise false
        const mightTriggerFocus = (resolvedKeyboardEvent.kind === 1 /* ResultKind.MoreChordsNeeded */ || (resolvedKeyboardEvent.kind === 2 /* ResultKind.KbFound */ && resolvedKeyboardEvent.commandId === 'editor.action.showHover' && ((_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.isVisible())));
        if (e.keyCode !== 5 /* KeyCode.Ctrl */ && e.keyCode !== 6 /* KeyCode.Alt */ && e.keyCode !== 57 /* KeyCode.Meta */ && e.keyCode !== 4 /* KeyCode.Shift */
            && !mightTriggerFocus) {
            // Do not hide hover when a modifier key is pressed
            this._hideWidgets();
        }
    }
    _hideWidgets() {
        var _a, _b, _c;
        if ((this._isMouseDown && this._hoverClicked && ((_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.isColorPickerVisible())) || inlineCompletionsHintsWidget/* InlineSuggestionHintsContentWidget */.QG.dropDownVisible) {
            return;
        }
        this._hoverClicked = false;
        (_b = this._glyphWidget) === null || _b === void 0 ? void 0 : _b.hide();
        (_c = this._contentWidget) === null || _c === void 0 ? void 0 : _c.hide();
    }
    _getOrCreateContentWidget() {
        if (!this._contentWidget) {
            this._contentWidget = this._instantiationService.createInstance(contentHover/* ContentHoverController */.hT, this._editor);
        }
        return this._contentWidget;
    }
    isColorPickerVisible() {
        var _a;
        return ((_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.isColorPickerVisible()) || false;
    }
    showContentHover(range, mode, source, focus) {
        this._getOrCreateContentWidget().startShowingAtRange(range, mode, source, focus);
    }
    focus() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.focus();
    }
    scrollUp() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.scrollUp();
    }
    scrollDown() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.scrollDown();
    }
    scrollLeft() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.scrollLeft();
    }
    scrollRight() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.scrollRight();
    }
    pageUp() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.pageUp();
    }
    pageDown() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.pageDown();
    }
    goToTop() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.goToTop();
    }
    goToBottom() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.goToBottom();
    }
    escape() {
        var _a;
        (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.escape();
    }
    isHoverVisible() {
        var _a;
        return (_a = this._contentWidget) === null || _a === void 0 ? void 0 : _a.isVisible();
    }
    dispose() {
        var _a, _b;
        this._unhookEvents();
        this._toUnhook.dispose();
        this._didChangeConfigurationHandler.dispose();
        (_a = this._glyphWidget) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this._contentWidget) === null || _b === void 0 ? void 0 : _b.dispose();
    }
};
ModesHoverController.ID = 'editor.contrib.hover';
ModesHoverController = hover_decorate([
    hover_param(1, instantiation/* IInstantiationService */.TG),
    hover_param(2, common_opener/* IOpenerService */.v4),
    hover_param(3, language/* ILanguageService */.O),
    hover_param(4, keybinding/* IKeybindingService */.d)
], ModesHoverController);
class ShowOrFocusHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.showHover',
            label: nls/* localize */.NC({
                key: 'showOrFocusHover',
                comment: [
                    'Label for action that will trigger the showing/focusing of a hover in the editor.',
                    'If the hover is not visible, it will show the hover.',
                    'This allows for users to show the hover without using the mouse.',
                    'If the hover is already visible, it will take focus.'
                ]
            }, "Show or Focus Hover"),
            description: {
                description: `Show or Focus Hover`,
                args: [{
                        name: 'args',
                        schema: {
                            type: 'object',
                            properties: {
                                'focus': {
                                    description: 'Controls if when triggered with the keyboard, the hover should take focus immediately.',
                                    type: 'boolean',
                                    default: false
                                }
                            },
                        }
                    }]
            },
            alias: 'Show or Focus Hover',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 39 /* KeyCode.KeyI */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor, args) {
        if (!editor.hasModel()) {
            return;
        }
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        const position = editor.getPosition();
        const range = new core_range/* Range */.e(position.lineNumber, position.column, position.lineNumber, position.column);
        const focus = editor.getOption(2 /* EditorOption.accessibilitySupport */) === 2 /* AccessibilitySupport.Enabled */ || !!(args === null || args === void 0 ? void 0 : args.focus);
        if (controller.isHoverVisible()) {
            controller.focus();
        }
        else {
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */, 1 /* HoverStartSource.Keyboard */, focus);
        }
    }
}
class ShowDefinitionPreviewHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.showDefinitionPreviewHover',
            label: nls/* localize */.NC({
                key: 'showDefinitionPreviewHover',
                comment: [
                    'Label for action that will trigger the showing of definition preview hover in the editor.',
                    'This allows for users to show the definition preview hover without using the mouse.'
                ]
            }, "Show Definition Preview Hover"),
            alias: 'Show Definition Preview Hover',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        const position = editor.getPosition();
        if (!position) {
            return;
        }
        const range = new core_range/* Range */.e(position.lineNumber, position.column, position.lineNumber, position.column);
        const goto = goToDefinitionAtPosition.GotoDefinitionAtPositionEditorContribution.get(editor);
        if (!goto) {
            return;
        }
        const promise = goto.startFindDefinitionFromCursor(position);
        promise.then(() => {
            controller.showContentHover(range, 1 /* HoverStartMode.Immediate */, 1 /* HoverStartSource.Keyboard */, true);
        });
    }
}
class ScrollUpHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.scrollUpHover',
            label: nls/* localize */.NC({
                key: 'scrollUpHover',
                comment: [
                    'Action that allows to scroll up in the hover widget with the up arrow when the hover widget is focused.'
                ]
            }, "Scroll Up Hover"),
            alias: 'Scroll Up Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 16 /* KeyCode.UpArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollUp();
    }
}
class ScrollDownHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.scrollDownHover',
            label: nls/* localize */.NC({
                key: 'scrollDownHover',
                comment: [
                    'Action that allows to scroll down in the hover widget with the up arrow when the hover widget is focused.'
                ]
            }, "Scroll Down Hover"),
            alias: 'Scroll Down Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 18 /* KeyCode.DownArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollDown();
    }
}
class ScrollLeftHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.scrollLeftHover',
            label: nls/* localize */.NC({
                key: 'scrollLeftHover',
                comment: [
                    'Action that allows to scroll left in the hover widget with the left arrow when the hover widget is focused.'
                ]
            }, "Scroll Left Hover"),
            alias: 'Scroll Left Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 15 /* KeyCode.LeftArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollLeft();
    }
}
class ScrollRightHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.scrollRightHover',
            label: nls/* localize */.NC({
                key: 'scrollRightHover',
                comment: [
                    'Action that allows to scroll right in the hover widget with the right arrow when the hover widget is focused.'
                ]
            }, "Scroll Right Hover"),
            alias: 'Scroll Right Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 17 /* KeyCode.RightArrow */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.scrollRight();
    }
}
class PageUpHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.pageUpHover',
            label: nls/* localize */.NC({
                key: 'pageUpHover',
                comment: [
                    'Action that allows to page up in the hover widget with the page up command when the hover widget is focused.'
                ]
            }, "Page Up Hover"),
            alias: 'Page Up Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 11 /* KeyCode.PageUp */,
                secondary: [512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.pageUp();
    }
}
class PageDownHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.pageDownHover',
            label: nls/* localize */.NC({
                key: 'pageDownHover',
                comment: [
                    'Action that allows to page down in the hover widget with the page down command when the hover widget is focused.'
                ]
            }, "Page Down Hover"),
            alias: 'Page Down Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 12 /* KeyCode.PageDown */,
                secondary: [512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.pageDown();
    }
}
class GoToTopHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.goToTopHover',
            label: nls/* localize */.NC({
                key: 'goToTopHover',
                comment: [
                    'Action that allows to go to the top of the hover widget with the home command when the hover widget is focused.'
                ]
            }, "Go To Top Hover"),
            alias: 'Go To Bottom Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 14 /* KeyCode.Home */,
                secondary: [2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.goToTop();
    }
}
class GoToBottomHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.goToBottomHover',
            label: nls/* localize */.NC({
                key: 'goToBottomHover',
                comment: [
                    'Action that allows to go to the bottom in the hover widget with the end command when the hover widget is focused.'
                ]
            }, "Go To Bottom Hover"),
            alias: 'Go To Bottom Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 13 /* KeyCode.End */,
                secondary: [2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */],
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.goToBottom();
    }
}
class EscapeFocusHoverAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.escapeFocusHover',
            label: nls/* localize */.NC({
                key: 'escapeFocusHover',
                comment: [
                    'Action that allows to escape from the hover widget with the escape command when the hover widget is focused.'
                ]
            }, "Escape Focus Hover"),
            alias: 'Escape Focus Hover',
            precondition: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.hoverFocused,
                primary: 9 /* KeyCode.Escape */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = ModesHoverController.get(editor);
        if (!controller) {
            return;
        }
        controller.escape();
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(ModesHoverController.ID, ModesHoverController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,editorExtensions/* registerEditorAction */.Qr)(ShowOrFocusHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ShowDefinitionPreviewHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ScrollUpHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ScrollDownHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ScrollLeftHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ScrollRightHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PageUpHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PageDownHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(GoToTopHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(GoToBottomHoverAction);
(0,editorExtensions/* registerEditorAction */.Qr)(EscapeFocusHoverAction);
hoverTypes/* HoverParticipantRegistry */.Ae.register(markdownHoverParticipant/* MarkdownHoverParticipant */.D5);
hoverTypes/* HoverParticipantRegistry */.Ae.register(MarkerHoverParticipant);
// theming
(0,themeService/* registerThemingParticipant */.Ic)((theme, collector) => {
    const hoverBorder = theme.getColor(colorRegistry/* editorHoverBorder */.CNo);
    if (hoverBorder) {
        collector.addRule(`.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
        collector.addRule(`.monaco-editor .monaco-hover hr { border-top: 1px solid ${hoverBorder.transparent(0.5)}; }`);
        collector.addRule(`.monaco-editor .monaco-hover hr { border-bottom: 0px solid ${hoverBorder.transparent(0.5)}; }`);
    }
});


/***/ }),

/***/ 38781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ HoverOperation; }
/* harmony export */ });
/* unused harmony export HoverResult */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50847);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
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
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};




class HoverResult {
    constructor(value, isComplete, hasLoadingMessage) {
        this.value = value;
        this.isComplete = isComplete;
        this.hasLoadingMessage = hasLoadingMessage;
    }
}
/**
 * Computing the hover is very fine tuned.
 *
 * Suppose the hover delay is 300ms (the default). Then, when resting the mouse at an anchor:
 * - at 150ms, the async computation is triggered (i.e. semantic hover)
 *   - if async results already come in, they are not rendered yet.
 * - at 300ms, the sync computation is triggered (i.e. decorations, markers)
 *   - if there are sync or async results, they are rendered.
 * - at 900ms, if the async computation hasn't finished, a "Loading..." result is added.
 */
class HoverOperation extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(_editor, _computer) {
        super();
        this._editor = _editor;
        this._computer = _computer;
        this._onResult = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5());
        this.onResult = this._onResult.event;
        this._firstWaitScheduler = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => this._triggerAsyncComputation(), 0));
        this._secondWaitScheduler = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => this._triggerSyncComputation(), 0));
        this._loadingMessageScheduler = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => this._triggerLoadingMessage(), 0));
        this._state = 0 /* HoverOperationState.Idle */;
        this._asyncIterable = null;
        this._asyncIterableDone = false;
        this._result = [];
    }
    dispose() {
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        super.dispose();
    }
    get _hoverTime() {
        return this._editor.getOption(58 /* EditorOption.hover */).delay;
    }
    get _firstWaitTime() {
        return this._hoverTime / 2;
    }
    get _secondWaitTime() {
        return this._hoverTime - this._firstWaitTime;
    }
    get _loadingMessageTime() {
        return 3 * this._hoverTime;
    }
    _setState(state, fireResult = true) {
        this._state = state;
        if (fireResult) {
            this._fireResult();
        }
    }
    _triggerAsyncComputation() {
        this._setState(2 /* HoverOperationState.SecondWait */);
        this._secondWaitScheduler.schedule(this._secondWaitTime);
        if (this._computer.computeAsync) {
            this._asyncIterableDone = false;
            this._asyncIterable = (0,_base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .createCancelableAsyncIterable */ .zS)(token => this._computer.computeAsync(token));
            (() => __awaiter(this, void 0, void 0, function* () {
                var _a, e_1, _b, _c;
                try {
                    try {
                        for (var _d = true, _e = __asyncValues(this._asyncIterable), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                            _c = _f.value;
                            _d = false;
                            const item = _c;
                            if (item) {
                                this._result.push(item);
                                this._fireResult();
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this._asyncIterableDone = true;
                    if (this._state === 3 /* HoverOperationState.WaitingForAsync */ || this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */) {
                        this._setState(0 /* HoverOperationState.Idle */);
                    }
                }
                catch (e) {
                    (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .onUnexpectedError */ .dL)(e);
                }
            }))();
        }
        else {
            this._asyncIterableDone = true;
        }
    }
    _triggerSyncComputation() {
        if (this._computer.computeSync) {
            this._result = this._result.concat(this._computer.computeSync());
        }
        this._setState(this._asyncIterableDone ? 0 /* HoverOperationState.Idle */ : 3 /* HoverOperationState.WaitingForAsync */);
    }
    _triggerLoadingMessage() {
        if (this._state === 3 /* HoverOperationState.WaitingForAsync */) {
            this._setState(4 /* HoverOperationState.WaitingForAsyncShowingLoading */);
        }
    }
    _fireResult() {
        if (this._state === 1 /* HoverOperationState.FirstWait */ || this._state === 2 /* HoverOperationState.SecondWait */) {
            // Do not send out results before the hover time
            return;
        }
        const isComplete = (this._state === 0 /* HoverOperationState.Idle */);
        const hasLoadingMessage = (this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */);
        this._onResult.fire(new HoverResult(this._result.slice(0), isComplete, hasLoadingMessage));
    }
    start(mode) {
        if (mode === 0 /* HoverStartMode.Delayed */) {
            if (this._state === 0 /* HoverOperationState.Idle */) {
                this._setState(1 /* HoverOperationState.FirstWait */);
                this._firstWaitScheduler.schedule(this._firstWaitTime);
                this._loadingMessageScheduler.schedule(this._loadingMessageTime);
            }
        }
        else {
            switch (this._state) {
                case 0 /* HoverOperationState.Idle */:
                    this._triggerAsyncComputation();
                    this._secondWaitScheduler.cancel();
                    this._triggerSyncComputation();
                    break;
                case 2 /* HoverOperationState.SecondWait */:
                    this._secondWaitScheduler.cancel();
                    this._triggerSyncComputation();
                    break;
            }
        }
    }
    cancel() {
        this._firstWaitScheduler.cancel();
        this._secondWaitScheduler.cancel();
        this._loadingMessageScheduler.cancel();
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        this._result = [];
        this._setState(0 /* HoverOperationState.Idle */, false);
    }
}


/***/ }),

/***/ 38145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ae: function() { return /* binding */ HoverParticipantRegistry; },
/* harmony export */   Qj: function() { return /* binding */ HoverRangeAnchor; },
/* harmony export */   YM: function() { return /* binding */ HoverForeignElementAnchor; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HoverRangeAnchor {
    constructor(priority, range, initialMousePosX, initialMousePosY) {
        this.priority = priority;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.type = 1 /* HoverAnchorType.Range */;
    }
    equals(other) {
        return (other.type === 1 /* HoverAnchorType.Range */ && this.range.equalsRange(other.range));
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 1 /* HoverAnchorType.Range */ && showAtPosition.lineNumber === this.range.startLineNumber);
    }
}
class HoverForeignElementAnchor {
    constructor(priority, owner, range, initialMousePosX, initialMousePosY, supportsMarkerHover) {
        this.priority = priority;
        this.owner = owner;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.supportsMarkerHover = supportsMarkerHover;
        this.type = 2 /* HoverAnchorType.ForeignElement */;
    }
    equals(other) {
        return (other.type === 2 /* HoverAnchorType.ForeignElement */ && this.owner === other.owner);
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 2 /* HoverAnchorType.ForeignElement */ && this.owner === lastAnchor.owner);
    }
}
const HoverParticipantRegistry = (new class HoverParticipantRegistry {
    constructor() {
        this._participants = [];
    }
    register(ctor) {
        this._participants.push(ctor);
    }
    getAll() {
        return this._participants;
    }
}());


/***/ }),

/***/ 89211:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D5: function() { return /* binding */ MarkdownHoverParticipant; },
/* harmony export */   c: function() { return /* binding */ renderMarkdownHovers; },
/* harmony export */   hU: function() { return /* binding */ MarkdownHover; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33899);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72432);
/* harmony import */ var _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4950);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79027);
/* harmony import */ var _markdownRenderer_browser_markdownRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99881);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13372);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76584);
/* harmony import */ var _common_languages_language_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21608);
/* harmony import */ var _getHover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53303);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23330);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33022);
/* harmony import */ var _platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38876);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58431);
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














const $ = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.$;
class MarkdownHover {
    constructor(owner, range, contents, isBeforeContent, ordinal) {
        this.owner = owner;
        this.range = range;
        this.contents = contents;
        this.isBeforeContent = isBeforeContent;
        this.ordinal = ordinal;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* HoverAnchorType.Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
}
let MarkdownHoverParticipant = class MarkdownHoverParticipant {
    constructor(_editor, _languageService, _openerService, _configurationService, _languageFeaturesService) {
        this._editor = _editor;
        this._languageService = _languageService;
        this._openerService = _openerService;
        this._configurationService = _configurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this.hoverOrdinal = 3;
    }
    createLoadingMessage(anchor) {
        return new MarkdownHover(this, anchor.range, [new _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__/* .MarkdownString */ .W5().appendText(_nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('modesContentHover.loading', "Loading..."))], false, 2000);
    }
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */) {
            return [];
        }
        const model = this._editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        let index = 1000;
        const lineLength = model.getLineLength(lineNumber);
        const languageId = model.getLanguageIdAtPosition(anchor.range.startLineNumber, anchor.range.startColumn);
        const stopRenderingLineAfter = this._editor.getOption(113 /* EditorOption.stopRenderingLineAfter */);
        const maxTokenizationLineLength = this._configurationService.getValue('editor.maxTokenizationLineLength', {
            overrideIdentifier: languageId
        });
        let stopRenderingMessage = false;
        if (stopRenderingLineAfter >= 0 && lineLength > stopRenderingLineAfter && anchor.range.startColumn >= stopRenderingLineAfter) {
            stopRenderingMessage = true;
            result.push(new MarkdownHover(this, anchor.range, [{
                    value: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('stopped rendering', "Rendering paused for long line for performance reasons. This can be configured via `editor.stopRenderingLineAfter`.")
                }], false, index++));
        }
        if (!stopRenderingMessage && typeof maxTokenizationLineLength === 'number' && lineLength >= maxTokenizationLineLength) {
            result.push(new MarkdownHover(this, anchor.range, [{
                    value: _nls_js__WEBPACK_IMPORTED_MODULE_8__/* .localize */ .NC('too many characters', "Tokenization is skipped for long lines for performance reasons. This can be configured via `editor.maxTokenizationLineLength`.")
                }], false, index++));
        }
        let isBeforeContent = false;
        for (const d of lineDecorations) {
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            const hoverMessage = d.options.hoverMessage;
            if (!hoverMessage || (0,_base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__/* .isEmptyMarkdownString */ .CP)(hoverMessage)) {
                continue;
            }
            if (d.options.beforeContentClassName) {
                isBeforeContent = true;
            }
            const range = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e(anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkdownHover(this, range, (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .asArray */ ._2)(hoverMessage), isBeforeContent, index++));
        }
        return result;
    }
    computeAsync(anchor, lineDecorations, token) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* HoverAnchorType.Range */) {
            return _base_common_async_js__WEBPACK_IMPORTED_MODULE_2__/* .AsyncIterableObject */ .Aq.EMPTY;
        }
        const model = this._editor.getModel();
        if (!this._languageFeaturesService.hoverProvider.has(model)) {
            return _base_common_async_js__WEBPACK_IMPORTED_MODULE_2__/* .AsyncIterableObject */ .Aq.EMPTY;
        }
        const position = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_13__/* .Position */ .L(anchor.range.startLineNumber, anchor.range.startColumn);
        return (0,_getHover_js__WEBPACK_IMPORTED_MODULE_7__/* .getHover */ .R8)(this._languageFeaturesService.hoverProvider, model, position, token)
            .filter(item => !(0,_base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__/* .isEmptyMarkdownString */ .CP)(item.hover.contents))
            .map(item => {
            const rng = item.hover.range ? _common_core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e.lift(item.hover.range) : anchor.range;
            return new MarkdownHover(this, rng, item.hover.contents, false, item.ordinal);
        });
    }
    renderHoverParts(context, hoverParts) {
        return renderMarkdownHovers(context, hoverParts, this._editor, this._languageService, this._openerService);
    }
};
MarkdownHoverParticipant = __decorate([
    __param(1, _common_languages_language_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageService */ .O),
    __param(2, _platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_10__/* .IOpenerService */ .v4),
    __param(3, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_9__/* .IConfigurationService */ .Ui),
    __param(4, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__/* .ILanguageFeaturesService */ .p)
], MarkdownHoverParticipant);
function renderMarkdownHovers(context, hoverParts, editor, languageService, openerService) {
    // Sort hover parts to keep them stable since they might come in async, out-of-order
    hoverParts.sort((a, b) => a.ordinal - b.ordinal);
    const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableStore */ .SL();
    for (const hoverPart of hoverParts) {
        for (const contents of hoverPart.contents) {
            if ((0,_base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_3__/* .isEmptyMarkdownString */ .CP)(contents)) {
                continue;
            }
            const markdownHoverElement = $('div.hover-row.markdown-hover');
            const hoverContentsElement = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .append */ .R3(markdownHoverElement, $('div.hover-contents'));
            const renderer = disposables.add(new _markdownRenderer_browser_markdownRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* .MarkdownRenderer */ .$({ editor }, languageService, openerService));
            disposables.add(renderer.onDidRenderAsync(() => {
                hoverContentsElement.className = 'hover-contents code-hover-contents';
                context.onContentsChanged();
            }));
            const renderedContents = disposables.add(renderer.render(contents));
            hoverContentsElement.appendChild(renderedContents.element);
            context.fragment.appendChild(markdownHoverElement);
        }
    }
    return disposables;
}


/***/ }),

/***/ 99330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js + 1 modules
var editorState = __webpack_require__(1930);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var core_selection = __webpack_require__(74980);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js + 2 modules
var textModel = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/editorWorker.js
var editorWorker = __webpack_require__(15130);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplaceCommand.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class InPlaceReplaceCommand {
    constructor(editRange, originalSelection, text) {
        this._editRange = editRange;
        this._originalSelection = originalSelection;
        this._text = text;
    }
    getEditOperations(model, builder) {
        builder.addTrackedEditOperation(this._editRange, this._text);
    }
    computeCursorState(model, helper) {
        const inverseEditOperations = helper.getInverseEditOperations();
        const srcRange = inverseEditOperations[0].range;
        if (!this._originalSelection.isEmpty()) {
            // Preserve selection and extends to typed text
            return new core_selection/* Selection */.Y(srcRange.endLineNumber, srcRange.endColumn - this._text.length, srcRange.endLineNumber, srcRange.endColumn);
        }
        return new core_selection/* Selection */.Y(srcRange.endLineNumber, Math.min(this._originalSelection.positionColumn, srcRange.endColumn), srcRange.endLineNumber, Math.min(this._originalSelection.positionColumn, srcRange.endColumn));
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(79873);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(67152);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77044);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(21114);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(11542);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(70204);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.css
var inPlaceReplace = __webpack_require__(96265);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(inPlaceReplace/* default */.Z, options);




       /* harmony default export */ var browser_inPlaceReplace = (inPlaceReplace/* default */.Z && inPlaceReplace/* default */.Z.locals ? inPlaceReplace/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js
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












let InPlaceReplaceController = class InPlaceReplaceController {
    static get(editor) {
        return editor.getContribution(InPlaceReplaceController.ID);
    }
    constructor(editor, editorWorkerService) {
        this.editor = editor;
        this.editorWorkerService = editorWorkerService;
        this.decorations = this.editor.createDecorationsCollection();
    }
    dispose() {
    }
    run(source, up) {
        var _a;
        // cancel any pending request
        (_a = this.currentRequest) === null || _a === void 0 ? void 0 : _a.cancel();
        const editorSelection = this.editor.getSelection();
        const model = this.editor.getModel();
        if (!model || !editorSelection) {
            return undefined;
        }
        let selection = editorSelection;
        if (selection.startLineNumber !== selection.endLineNumber) {
            // Can't accept multiline selection
            return undefined;
        }
        const state = new editorState/* EditorState */.yy(this.editor, 1 /* CodeEditorStateFlag.Value */ | 4 /* CodeEditorStateFlag.Position */);
        const modelURI = model.uri;
        if (!this.editorWorkerService.canNavigateValueSet(modelURI)) {
            return Promise.resolve(undefined);
        }
        this.currentRequest = (0,common_async/* createCancelablePromise */.PG)(token => this.editorWorkerService.navigateValueSet(modelURI, selection, up));
        return this.currentRequest.then(result => {
            var _a;
            if (!result || !result.range || !result.value) {
                // No proper result
                return;
            }
            if (!state.validate(this.editor)) {
                // state has changed
                return;
            }
            // Selection
            const editRange = range/* Range */.e.lift(result.range);
            let highlightRange = result.range;
            const diff = result.value.length - (selection.endColumn - selection.startColumn);
            // highlight
            highlightRange = {
                startLineNumber: highlightRange.startLineNumber,
                startColumn: highlightRange.startColumn,
                endLineNumber: highlightRange.endLineNumber,
                endColumn: highlightRange.startColumn + result.value.length
            };
            if (diff > 1) {
                selection = new core_selection/* Selection */.Y(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn + diff - 1);
            }
            // Insert new text
            const command = new InPlaceReplaceCommand(editRange, selection, result.value);
            this.editor.pushUndoStop();
            this.editor.executeCommand(source, command);
            this.editor.pushUndoStop();
            // add decoration
            this.decorations.set([{
                    range: highlightRange,
                    options: InPlaceReplaceController.DECORATION
                }]);
            // remove decoration after delay
            (_a = this.decorationRemover) === null || _a === void 0 ? void 0 : _a.cancel();
            this.decorationRemover = (0,common_async/* timeout */.Vs)(350);
            this.decorationRemover.then(() => this.decorations.clear()).catch(errors/* onUnexpectedError */.dL);
        }).catch(errors/* onUnexpectedError */.dL);
    }
};
InPlaceReplaceController.ID = 'editor.contrib.inPlaceReplaceController';
InPlaceReplaceController.DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'in-place-replace',
    className: 'valueSetReplacement'
});
InPlaceReplaceController = __decorate([
    __param(1, editorWorker/* IEditorWorkerService */.p)
], InPlaceReplaceController);
class InPlaceReplaceUp extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.inPlaceReplace.up',
            label: nls/* localize */.NC('InPlaceReplaceAction.previous.label', "Replace with Previous Value"),
            alias: 'Replace with Previous Value',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 87 /* KeyCode.Comma */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = InPlaceReplaceController.get(editor);
        if (!controller) {
            return Promise.resolve(undefined);
        }
        return controller.run(this.id, false);
    }
}
class InPlaceReplaceDown extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.inPlaceReplace.down',
            label: nls/* localize */.NC('InPlaceReplaceAction.next.label', "Replace with Next Value"),
            alias: 'Replace with Next Value',
            precondition: editorContextKeys/* EditorContextKeys */.u.writable,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 89 /* KeyCode.Period */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const controller = InPlaceReplaceController.get(editor);
        if (!controller) {
            return Promise.resolve(undefined);
        }
        return controller.run(this.id, true);
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(InPlaceReplaceController.ID, InPlaceReplaceController, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(InPlaceReplaceUp);
(0,editorExtensions/* registerEditorAction */.Qr)(InPlaceReplaceDown);


/***/ }),

/***/ 40453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ generateIndent; },
/* harmony export */   Y: function() { return /* binding */ getSpaceCnt; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getSpaceCnt(str, tabSize) {
    let spacesCnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '\t') {
            spacesCnt += tabSize;
        }
        else {
            spacesCnt++;
        }
    }
    return spacesCnt;
}
function generateIndent(spacesCnt, tabSize, insertSpaces) {
    spacesCnt = spacesCnt < 0 ? 0 : spacesCnt;
    let result = '';
    if (!insertSpaces) {
        const tabsCnt = Math.floor(spacesCnt / tabSize);
        spacesCnt = spacesCnt % tabSize;
        for (let i = 0; i < tabsCnt; i++) {
            result += '\t';
        }
    }
    for (let i = 0; i < spacesCnt; i++) {
        result += ' ';
    }
    return result;
}


/***/ }),

/***/ 27790:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoIndentOnPaste: function() { return /* binding */ AutoIndentOnPaste; },
/* harmony export */   AutoIndentOnPasteCommand: function() { return /* binding */ AutoIndentOnPasteCommand; },
/* harmony export */   ChangeIndentationSizeAction: function() { return /* binding */ ChangeIndentationSizeAction; },
/* harmony export */   ChangeTabDisplaySize: function() { return /* binding */ ChangeTabDisplaySize; },
/* harmony export */   DetectIndentation: function() { return /* binding */ DetectIndentation; },
/* harmony export */   IndentUsingSpaces: function() { return /* binding */ IndentUsingSpaces; },
/* harmony export */   IndentUsingTabs: function() { return /* binding */ IndentUsingTabs; },
/* harmony export */   IndentationToSpacesAction: function() { return /* binding */ IndentationToSpacesAction; },
/* harmony export */   IndentationToSpacesCommand: function() { return /* binding */ IndentationToSpacesCommand; },
/* harmony export */   IndentationToTabsAction: function() { return /* binding */ IndentationToTabsAction; },
/* harmony export */   IndentationToTabsCommand: function() { return /* binding */ IndentationToTabsCommand; },
/* harmony export */   ReindentLinesAction: function() { return /* binding */ ReindentLinesAction; },
/* harmony export */   ReindentSelectedLinesAction: function() { return /* binding */ ReindentSelectedLinesAction; },
/* harmony export */   getReindentEditOperations: function() { return /* binding */ getReindentEditOperations; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23607);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91213);
/* harmony import */ var _common_commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24618);
/* harmony import */ var _common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87306);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76584);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74980);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94872);
/* harmony import */ var _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11296);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76774);
/* harmony import */ var _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40453);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23330);
/* harmony import */ var _platform_quickinput_common_quickInput_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71130);
/* harmony import */ var _common_core_indentation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20392);
/* harmony import */ var _common_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55542);
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















function getReindentEditOperations(model, languageConfigurationService, startLineNumber, endLineNumber, inheritedIndent) {
    if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
        // Model is empty
        return [];
    }
    const indentationRules = languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).indentationRules;
    if (!indentationRules) {
        return [];
    }
    endLineNumber = Math.min(endLineNumber, model.getLineCount());
    // Skip `unIndentedLinePattern` lines
    while (startLineNumber <= endLineNumber) {
        if (!indentationRules.unIndentedLinePattern) {
            break;
        }
        const text = model.getLineContent(startLineNumber);
        if (!indentationRules.unIndentedLinePattern.test(text)) {
            break;
        }
        startLineNumber++;
    }
    if (startLineNumber > endLineNumber - 1) {
        return [];
    }
    const { tabSize, indentSize, insertSpaces } = model.getOptions();
    const shiftIndent = (indentation, count) => {
        count = count || 1;
        return _common_commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_3__/* .ShiftCommand */ .U.shiftIndent(indentation, indentation.length + count, tabSize, indentSize, insertSpaces);
    };
    const unshiftIndent = (indentation, count) => {
        count = count || 1;
        return _common_commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_3__/* .ShiftCommand */ .U.unshiftIndent(indentation, indentation.length + count, tabSize, indentSize, insertSpaces);
    };
    const indentEdits = [];
    // indentation being passed to lines below
    let globalIndent;
    // Calculate indentation for the first line
    // If there is no passed-in indentation, we use the indentation of the first line as base.
    const currentLineText = model.getLineContent(startLineNumber);
    let adjustedLineContent = currentLineText;
    if (inheritedIndent !== undefined && inheritedIndent !== null) {
        globalIndent = inheritedIndent;
        const oldIndentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(currentLineText);
        adjustedLineContent = globalIndent + currentLineText.substring(oldIndentation.length);
        if (indentationRules.decreaseIndentPattern && indentationRules.decreaseIndentPattern.test(adjustedLineContent)) {
            globalIndent = unshiftIndent(globalIndent);
            adjustedLineContent = globalIndent + currentLineText.substring(oldIndentation.length);
        }
        if (currentLineText !== adjustedLineContent) {
            indentEdits.push(_common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_11__/* .EditOperation */ .h.replaceMove(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y(startLineNumber, 1, startLineNumber, oldIndentation.length + 1), (0,_common_core_indentation_js__WEBPACK_IMPORTED_MODULE_9__/* .normalizeIndentation */ .x)(globalIndent, indentSize, insertSpaces)));
        }
    }
    else {
        globalIndent = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(currentLineText);
    }
    // idealIndentForNextLine doesn't equal globalIndent when there is a line matching `indentNextLinePattern`.
    let idealIndentForNextLine = globalIndent;
    if (indentationRules.increaseIndentPattern && indentationRules.increaseIndentPattern.test(adjustedLineContent)) {
        idealIndentForNextLine = shiftIndent(idealIndentForNextLine);
        globalIndent = shiftIndent(globalIndent);
    }
    else if (indentationRules.indentNextLinePattern && indentationRules.indentNextLinePattern.test(adjustedLineContent)) {
        idealIndentForNextLine = shiftIndent(idealIndentForNextLine);
    }
    startLineNumber++;
    // Calculate indentation adjustment for all following lines
    for (let lineNumber = startLineNumber; lineNumber <= endLineNumber; lineNumber++) {
        const text = model.getLineContent(lineNumber);
        const oldIndentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(text);
        const adjustedLineContent = idealIndentForNextLine + text.substring(oldIndentation.length);
        if (indentationRules.decreaseIndentPattern && indentationRules.decreaseIndentPattern.test(adjustedLineContent)) {
            idealIndentForNextLine = unshiftIndent(idealIndentForNextLine);
            globalIndent = unshiftIndent(globalIndent);
        }
        if (oldIndentation !== idealIndentForNextLine) {
            indentEdits.push(_common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_11__/* .EditOperation */ .h.replaceMove(new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_12__/* .Selection */ .Y(lineNumber, 1, lineNumber, oldIndentation.length + 1), (0,_common_core_indentation_js__WEBPACK_IMPORTED_MODULE_9__/* .normalizeIndentation */ .x)(idealIndentForNextLine, indentSize, insertSpaces)));
        }
        // calculate idealIndentForNextLine
        if (indentationRules.unIndentedLinePattern && indentationRules.unIndentedLinePattern.test(text)) {
            // In reindent phase, if the line matches `unIndentedLinePattern` we inherit indentation from above lines
            // but don't change globalIndent and idealIndentForNextLine.
            continue;
        }
        else if (indentationRules.increaseIndentPattern && indentationRules.increaseIndentPattern.test(adjustedLineContent)) {
            globalIndent = shiftIndent(globalIndent);
            idealIndentForNextLine = globalIndent;
        }
        else if (indentationRules.indentNextLinePattern && indentationRules.indentNextLinePattern.test(adjustedLineContent)) {
            idealIndentForNextLine = shiftIndent(idealIndentForNextLine);
        }
        else {
            idealIndentForNextLine = globalIndent;
        }
    }
    return indentEdits;
}
class IndentationToSpacesAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: IndentationToSpacesAction.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('indentationToSpaces', "Convert Indentation to Spaces"),
            alias: 'Convert Indentation to Spaces',
            precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorContextKeys */ .u.writable
        });
    }
    run(accessor, editor) {
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const modelOpts = model.getOptions();
        const selection = editor.getSelection();
        if (!selection) {
            return;
        }
        const command = new IndentationToSpacesCommand(selection, modelOpts.tabSize);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [command]);
        editor.pushUndoStop();
        model.updateOptions({
            insertSpaces: true
        });
    }
}
IndentationToSpacesAction.ID = 'editor.action.indentationToSpaces';
class IndentationToTabsAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: IndentationToTabsAction.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('indentationToTabs', "Convert Indentation to Tabs"),
            alias: 'Convert Indentation to Tabs',
            precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorContextKeys */ .u.writable
        });
    }
    run(accessor, editor) {
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const modelOpts = model.getOptions();
        const selection = editor.getSelection();
        if (!selection) {
            return;
        }
        const command = new IndentationToTabsCommand(selection, modelOpts.tabSize);
        editor.pushUndoStop();
        editor.executeCommands(this.id, [command]);
        editor.pushUndoStop();
        model.updateOptions({
            insertSpaces: false
        });
    }
}
IndentationToTabsAction.ID = 'editor.action.indentationToTabs';
class ChangeIndentationSizeAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor(insertSpaces, displaySizeOnly, opts) {
        super(opts);
        this.insertSpaces = insertSpaces;
        this.displaySizeOnly = displaySizeOnly;
    }
    run(accessor, editor) {
        const quickInputService = accessor.get(_platform_quickinput_common_quickInput_js__WEBPACK_IMPORTED_MODULE_8__/* .IQuickInputService */ .eJ);
        const modelService = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_6__/* .IModelService */ .q);
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const creationOpts = modelService.getCreationOptions(model.getLanguageId(), model.uri, model.isForSimpleWidget);
        const modelOpts = model.getOptions();
        const picks = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({
            id: n.toString(),
            label: n.toString(),
            // add description for tabSize value set in the configuration
            description: (n === creationOpts.tabSize && n === modelOpts.tabSize
                ? _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('configuredTabSize', "Configured Tab Size")
                : n === creationOpts.tabSize
                    ? _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('defaultTabSize', "Default Tab Size")
                    : n === modelOpts.tabSize
                        ? _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('currentTabSize', "Current Tab Size")
                        : undefined)
        }));
        // auto focus the tabSize set for the current editor
        const autoFocusIndex = Math.min(model.getOptions().tabSize - 1, 7);
        setTimeout(() => {
            quickInputService.pick(picks, { placeHolder: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC({ key: 'selectTabWidth', comment: ['Tab corresponds to the tab key'] }, "Select Tab Size for Current File"), activeItem: picks[autoFocusIndex] }).then(pick => {
                if (pick) {
                    if (model && !model.isDisposed()) {
                        const pickedVal = parseInt(pick.label, 10);
                        if (this.displaySizeOnly) {
                            model.updateOptions({
                                tabSize: pickedVal
                            });
                        }
                        else {
                            model.updateOptions({
                                tabSize: pickedVal,
                                indentSize: pickedVal,
                                insertSpaces: this.insertSpaces
                            });
                        }
                    }
                }
            });
        }, 50 /* quick input is sensitive to being opened so soon after another */);
    }
}
class IndentUsingTabs extends ChangeIndentationSizeAction {
    constructor() {
        super(false, false, {
            id: IndentUsingTabs.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('indentUsingTabs', "Indent Using Tabs"),
            alias: 'Indent Using Tabs',
            precondition: undefined
        });
    }
}
IndentUsingTabs.ID = 'editor.action.indentUsingTabs';
class IndentUsingSpaces extends ChangeIndentationSizeAction {
    constructor() {
        super(true, false, {
            id: IndentUsingSpaces.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('indentUsingSpaces', "Indent Using Spaces"),
            alias: 'Indent Using Spaces',
            precondition: undefined
        });
    }
}
IndentUsingSpaces.ID = 'editor.action.indentUsingSpaces';
class ChangeTabDisplaySize extends ChangeIndentationSizeAction {
    constructor() {
        super(true, true, {
            id: ChangeTabDisplaySize.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('changeTabDisplaySize', "Change Tab Display Size"),
            alias: 'Change Tab Display Size',
            precondition: undefined
        });
    }
}
ChangeTabDisplaySize.ID = 'editor.action.changeTabDisplaySize';
class DetectIndentation extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: DetectIndentation.ID,
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('detectIndentation', "Detect Indentation from Content"),
            alias: 'Detect Indentation from Content',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        const modelService = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_6__/* .IModelService */ .q);
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const creationOpts = modelService.getCreationOptions(model.getLanguageId(), model.uri, model.isForSimpleWidget);
        model.detectIndentation(creationOpts.insertSpaces, creationOpts.tabSize);
    }
}
DetectIndentation.ID = 'editor.action.detectIndentation';
class ReindentLinesAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.reindentlines',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('editor.reindentlines', "Reindent Lines"),
            alias: 'Reindent Lines',
            precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorContextKeys */ .u.writable
        });
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(_common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .ILanguageConfigurationService */ .c_);
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const edits = getReindentEditOperations(model, languageConfigurationService, 1, model.getLineCount());
        if (edits.length > 0) {
            editor.pushUndoStop();
            editor.executeEdits(this.id, edits);
            editor.pushUndoStop();
        }
    }
}
class ReindentSelectedLinesAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.reindentselectedlines',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_7__/* .localize */ .NC('editor.reindentselectedlines', "Reindent Selected Lines"),
            alias: 'Reindent Selected Lines',
            precondition: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_4__/* .EditorContextKeys */ .u.writable
        });
    }
    run(accessor, editor) {
        const languageConfigurationService = accessor.get(_common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .ILanguageConfigurationService */ .c_);
        const model = editor.getModel();
        if (!model) {
            return;
        }
        const selections = editor.getSelections();
        if (selections === null) {
            return;
        }
        const edits = [];
        for (const selection of selections) {
            let startLineNumber = selection.startLineNumber;
            let endLineNumber = selection.endLineNumber;
            if (startLineNumber !== endLineNumber && selection.endColumn === 1) {
                endLineNumber--;
            }
            if (startLineNumber === 1) {
                if (startLineNumber === endLineNumber) {
                    continue;
                }
            }
            else {
                startLineNumber--;
            }
            const editOperations = getReindentEditOperations(model, languageConfigurationService, startLineNumber, endLineNumber);
            edits.push(...editOperations);
        }
        if (edits.length > 0) {
            editor.pushUndoStop();
            editor.executeEdits(this.id, edits);
            editor.pushUndoStop();
        }
    }
}
class AutoIndentOnPasteCommand {
    constructor(edits, initialSelection) {
        this._initialSelection = initialSelection;
        this._edits = [];
        this._selectionId = null;
        for (const edit of edits) {
            if (edit.range && typeof edit.text === 'string') {
                this._edits.push(edit);
            }
        }
    }
    getEditOperations(model, builder) {
        for (const edit of this._edits) {
            builder.addEditOperation(_common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.lift(edit.range), edit.text);
        }
        let selectionIsSet = false;
        if (Array.isArray(this._edits) && this._edits.length === 1 && this._initialSelection.isEmpty()) {
            if (this._edits[0].range.startColumn === this._initialSelection.endColumn &&
                this._edits[0].range.startLineNumber === this._initialSelection.endLineNumber) {
                selectionIsSet = true;
                this._selectionId = builder.trackSelection(this._initialSelection, true);
            }
            else if (this._edits[0].range.endColumn === this._initialSelection.startColumn &&
                this._edits[0].range.endLineNumber === this._initialSelection.startLineNumber) {
                selectionIsSet = true;
                this._selectionId = builder.trackSelection(this._initialSelection, false);
            }
        }
        if (!selectionIsSet) {
            this._selectionId = builder.trackSelection(this._initialSelection);
        }
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this._selectionId);
    }
}
let AutoIndentOnPaste = class AutoIndentOnPaste {
    constructor(editor, _languageConfigurationService) {
        this.editor = editor;
        this._languageConfigurationService = _languageConfigurationService;
        this.callOnDispose = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        this.callOnModel = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        this.callOnDispose.add(editor.onDidChangeConfiguration(() => this.update()));
        this.callOnDispose.add(editor.onDidChangeModel(() => this.update()));
        this.callOnDispose.add(editor.onDidChangeModelLanguage(() => this.update()));
    }
    update() {
        // clean up
        this.callOnModel.clear();
        // we are disabled
        if (this.editor.getOption(10 /* EditorOption.autoIndent */) < 4 /* EditorAutoIndentStrategy.Full */ || this.editor.getOption(53 /* EditorOption.formatOnPaste */)) {
            return;
        }
        // no model
        if (!this.editor.hasModel()) {
            return;
        }
        this.callOnModel.add(this.editor.onDidPaste(({ range }) => {
            this.trigger(range);
        }));
    }
    trigger(range) {
        const selections = this.editor.getSelections();
        if (selections === null || selections.length > 1) {
            return;
        }
        const model = this.editor.getModel();
        if (!model) {
            return;
        }
        if (!model.tokenization.isCheapToTokenize(range.getStartPosition().lineNumber)) {
            return;
        }
        const autoIndent = this.editor.getOption(10 /* EditorOption.autoIndent */);
        const { tabSize, indentSize, insertSpaces } = model.getOptions();
        const textEdits = [];
        const indentConverter = {
            shiftIndent: (indentation) => {
                return _common_commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_3__/* .ShiftCommand */ .U.shiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            },
            unshiftIndent: (indentation) => {
                return _common_commands_shiftCommand_js__WEBPACK_IMPORTED_MODULE_3__/* .ShiftCommand */ .U.unshiftIndent(indentation, indentation.length + 1, tabSize, indentSize, insertSpaces);
            }
        };
        let startLineNumber = range.startLineNumber;
        while (startLineNumber <= range.endLineNumber) {
            if (this.shouldIgnoreLine(model, startLineNumber)) {
                startLineNumber++;
                continue;
            }
            break;
        }
        if (startLineNumber > range.endLineNumber) {
            return;
        }
        let firstLineText = model.getLineContent(startLineNumber);
        if (!/\S/.test(firstLineText.substring(0, range.startColumn - 1))) {
            const indentOfFirstLine = (0,_common_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_10__/* .getGoodIndentForLine */ .n8)(autoIndent, model, model.getLanguageId(), startLineNumber, indentConverter, this._languageConfigurationService);
            if (indentOfFirstLine !== null) {
                const oldIndentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(firstLineText);
                const newSpaceCnt = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getSpaceCnt */ .Y(indentOfFirstLine, tabSize);
                const oldSpaceCnt = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getSpaceCnt */ .Y(oldIndentation, tabSize);
                if (newSpaceCnt !== oldSpaceCnt) {
                    const newIndent = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .generateIndent */ .J(newSpaceCnt, tabSize, insertSpaces);
                    textEdits.push({
                        range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e(startLineNumber, 1, startLineNumber, oldIndentation.length + 1),
                        text: newIndent
                    });
                    firstLineText = newIndent + firstLineText.substr(oldIndentation.length);
                }
                else {
                    const indentMetadata = (0,_common_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_10__/* .getIndentMetadata */ .tI)(model, startLineNumber, this._languageConfigurationService);
                    if (indentMetadata === 0 || indentMetadata === 8 /* IndentConsts.UNINDENT_MASK */) {
                        // we paste content into a line where only contains whitespaces
                        // after pasting, the indentation of the first line is already correct
                        // the first line doesn't match any indentation rule
                        // then no-op.
                        return;
                    }
                }
            }
        }
        const firstLineNumber = startLineNumber;
        // ignore empty or ignored lines
        while (startLineNumber < range.endLineNumber) {
            if (!/\S/.test(model.getLineContent(startLineNumber + 1))) {
                startLineNumber++;
                continue;
            }
            break;
        }
        if (startLineNumber !== range.endLineNumber) {
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
                getLineContent: (lineNumber) => {
                    if (lineNumber === firstLineNumber) {
                        return firstLineText;
                    }
                    else {
                        return model.getLineContent(lineNumber);
                    }
                }
            };
            const indentOfSecondLine = (0,_common_languages_autoIndent_js__WEBPACK_IMPORTED_MODULE_10__/* .getGoodIndentForLine */ .n8)(autoIndent, virtualModel, model.getLanguageId(), startLineNumber + 1, indentConverter, this._languageConfigurationService);
            if (indentOfSecondLine !== null) {
                const newSpaceCntOfSecondLine = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getSpaceCnt */ .Y(indentOfSecondLine, tabSize);
                const oldSpaceCntOfSecondLine = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getSpaceCnt */ .Y(_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(model.getLineContent(startLineNumber + 1)), tabSize);
                if (newSpaceCntOfSecondLine !== oldSpaceCntOfSecondLine) {
                    const spaceCntOffset = newSpaceCntOfSecondLine - oldSpaceCntOfSecondLine;
                    for (let i = startLineNumber + 1; i <= range.endLineNumber; i++) {
                        const lineContent = model.getLineContent(i);
                        const originalIndent = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .getLeadingWhitespace */ .V8(lineContent);
                        const originalSpacesCnt = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getSpaceCnt */ .Y(originalIndent, tabSize);
                        const newSpacesCnt = originalSpacesCnt + spaceCntOffset;
                        const newIndent = _indentUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .generateIndent */ .J(newSpacesCnt, tabSize, insertSpaces);
                        if (newIndent !== originalIndent) {
                            textEdits.push({
                                range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e(i, 1, i, originalIndent.length + 1),
                                text: newIndent
                            });
                        }
                    }
                }
            }
        }
        if (textEdits.length > 0) {
            this.editor.pushUndoStop();
            const cmd = new AutoIndentOnPasteCommand(textEdits, this.editor.getSelection());
            this.editor.executeCommand('autoIndentOnPaste', cmd);
            this.editor.pushUndoStop();
        }
    }
    shouldIgnoreLine(model, lineNumber) {
        model.tokenization.forceTokenization(lineNumber);
        const nonWhitespaceColumn = model.getLineFirstNonWhitespaceColumn(lineNumber);
        if (nonWhitespaceColumn === 0) {
            return true;
        }
        const tokens = model.tokenization.getLineTokens(lineNumber);
        if (tokens.getCount() > 0) {
            const firstNonWhitespaceTokenIndex = tokens.findTokenIndexAtOffset(nonWhitespaceColumn);
            if (firstNonWhitespaceTokenIndex >= 0 && tokens.getStandardTokenType(firstNonWhitespaceTokenIndex) === 1 /* StandardTokenType.Comment */) {
                return true;
            }
        }
        return false;
    }
    dispose() {
        this.callOnDispose.dispose();
        this.callOnModel.dispose();
    }
};
AutoIndentOnPaste.ID = 'editor.contrib.autoIndentOnPaste';
AutoIndentOnPaste = __decorate([
    __param(1, _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .ILanguageConfigurationService */ .c_)
], AutoIndentOnPaste);
function getIndentationEditOperations(model, builder, tabSize, tabsToSpaces) {
    if (model.getLineCount() === 1 && model.getLineMaxColumn(1) === 1) {
        // Model is empty
        return;
    }
    let spaces = '';
    for (let i = 0; i < tabSize; i++) {
        spaces += ' ';
    }
    const spacesRegExp = new RegExp(spaces, 'gi');
    for (let lineNumber = 1, lineCount = model.getLineCount(); lineNumber <= lineCount; lineNumber++) {
        let lastIndentationColumn = model.getLineFirstNonWhitespaceColumn(lineNumber);
        if (lastIndentationColumn === 0) {
            lastIndentationColumn = model.getLineMaxColumn(lineNumber);
        }
        if (lastIndentationColumn === 1) {
            continue;
        }
        const originalIndentationRange = new _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e(lineNumber, 1, lineNumber, lastIndentationColumn);
        const originalIndentation = model.getValueInRange(originalIndentationRange);
        const newIndentation = (tabsToSpaces
            ? originalIndentation.replace(/\t/ig, spaces)
            : originalIndentation.replace(spacesRegExp, '\t'));
        builder.addEditOperation(originalIndentationRange, newIndentation);
    }
}
class IndentationToSpacesCommand {
    constructor(selection, tabSize) {
        this.selection = selection;
        this.tabSize = tabSize;
        this.selectionId = null;
    }
    getEditOperations(model, builder) {
        this.selectionId = builder.trackSelection(this.selection);
        getIndentationEditOperations(model, builder, this.tabSize, true);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this.selectionId);
    }
}
class IndentationToTabsCommand {
    constructor(selection, tabSize) {
        this.selection = selection;
        this.tabSize = tabSize;
        this.selectionId = null;
    }
    getEditOperations(model, builder) {
        this.selectionId = builder.trackSelection(this.selection);
        getIndentationEditOperations(model, builder, this.tabSize, false);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this.selectionId);
    }
}
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorContribution */ ._K)(AutoIndentOnPaste.ID, AutoIndentOnPaste, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(IndentationToSpacesAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(IndentationToTabsAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(IndentUsingTabs);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(IndentUsingSpaces);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(ChangeTabDisplaySize);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(DetectIndentation);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(ReindentLinesAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorAction */ .Qr)(ReindentSelectedLinesAction);


/***/ }),

/***/ 19280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js
var hoverTypes = __webpack_require__(38145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/map.js
var map = __webpack_require__(17795);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorDom.js
var editorDom = __webpack_require__(97624);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(49427);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(75117);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(87306);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(58606);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(11754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js + 2 modules
var textModel = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js
var languageFeatureDebounce = __webpack_require__(78745);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js
var resolverService = __webpack_require__(7699);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js
var clickLinkGesture = __webpack_require__(83297);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(11966);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHints.js
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






class InlayHintAnchor {
    constructor(range, direction) {
        this.range = range;
        this.direction = direction;
    }
}
class InlayHintItem {
    constructor(hint, anchor, provider) {
        this.hint = hint;
        this.anchor = anchor;
        this.provider = provider;
        this._isResolved = false;
    }
    with(delta) {
        const result = new InlayHintItem(this.hint, delta.anchor, this.provider);
        result._isResolved = this._isResolved;
        result._currentResolve = this._currentResolve;
        return result;
    }
    resolve(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.provider.resolveInlayHint !== 'function') {
                return;
            }
            if (this._currentResolve) {
                // wait for an active resolve operation and try again
                // when that's done.
                yield this._currentResolve;
                if (token.isCancellationRequested) {
                    return;
                }
                return this.resolve(token);
            }
            if (!this._isResolved) {
                this._currentResolve = this._doResolve(token)
                    .finally(() => this._currentResolve = undefined);
            }
            yield this._currentResolve;
        });
    }
    _doResolve(token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newHint = yield Promise.resolve(this.provider.resolveInlayHint(this.hint, token));
                this.hint.tooltip = (_a = newHint === null || newHint === void 0 ? void 0 : newHint.tooltip) !== null && _a !== void 0 ? _a : this.hint.tooltip;
                this.hint.label = (_b = newHint === null || newHint === void 0 ? void 0 : newHint.label) !== null && _b !== void 0 ? _b : this.hint.label;
                this._isResolved = true;
            }
            catch (err) {
                (0,errors/* onUnexpectedExternalError */.Cp)(err);
                this._isResolved = false;
            }
        });
    }
}
class InlayHintsFragments {
    static create(registry, model, ranges, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [];
            const promises = registry.ordered(model).reverse().map(provider => ranges.map((range) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const result = yield provider.provideInlayHints(model, range, token);
                    if (result === null || result === void 0 ? void 0 : result.hints.length) {
                        data.push([result, provider]);
                    }
                }
                catch (err) {
                    (0,errors/* onUnexpectedExternalError */.Cp)(err);
                }
            })));
            yield Promise.all(promises.flat());
            if (token.isCancellationRequested || model.isDisposed()) {
                throw new errors/* CancellationError */.FU();
            }
            return new InlayHintsFragments(ranges, data, model);
        });
    }
    constructor(ranges, data, model) {
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this.ranges = ranges;
        this.provider = new Set();
        const items = [];
        for (const [list, provider] of data) {
            this._disposables.add(list);
            this.provider.add(provider);
            for (const hint of list.hints) {
                // compute the range to which the item should be attached to
                const position = model.validatePosition(hint.position);
                let direction = 'before';
                const wordRange = InlayHintsFragments._getRangeAtPosition(model, position);
                let range;
                if (wordRange.getStartPosition().isBefore(position)) {
                    range = core_range/* Range */.e.fromPositions(wordRange.getStartPosition(), position);
                    direction = 'after';
                }
                else {
                    range = core_range/* Range */.e.fromPositions(position, wordRange.getEndPosition());
                    direction = 'before';
                }
                items.push(new InlayHintItem(hint, new InlayHintAnchor(range, direction), provider));
            }
        }
        this.items = items.sort((a, b) => position/* Position */.L.compare(a.hint.position, b.hint.position));
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(model, position) {
        const line = position.lineNumber;
        const word = model.getWordAtPosition(position);
        if (word) {
            // always prefer the word range
            return new core_range/* Range */.e(line, word.startColumn, line, word.endColumn);
        }
        model.tokenization.tokenizeIfCheap(line);
        const tokens = model.tokenization.getLineTokens(line);
        const offset = position.column - 1;
        const idx = tokens.findTokenIndexAtOffset(offset);
        let start = tokens.getStartOffset(idx);
        let end = tokens.getEndOffset(idx);
        if (end - start === 1) {
            // single character token, when at its end try leading/trailing token instead
            if (start === offset && idx > 1) {
                // leading token
                start = tokens.getStartOffset(idx - 1);
                end = tokens.getEndOffset(idx - 1);
            }
            else if (end === offset && idx < tokens.getCount() - 1) {
                // trailing token
                start = tokens.getStartOffset(idx + 1);
                end = tokens.getEndOffset(idx + 1);
            }
        }
        return new core_range/* Range */.e(line, start + 1, line, end + 1);
    }
}
function asCommandLink(command) {
    return common_uri/* URI */.o.from({
        scheme: network/* Schemas */.lg.command,
        path: command.id,
        query: command.arguments && encodeURIComponent(JSON.stringify(command.arguments))
    }).toString();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.js
var inlayHintsLocations = __webpack_require__(21147);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js
var extensions = __webpack_require__(9546);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsController.js
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
var inlayHintsController_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





























// --- hint caching service (per session)
class InlayHintsCache {
    constructor() {
        this._entries = new map/* LRUCache */.z6(50);
    }
    get(model) {
        const key = InlayHintsCache._key(model);
        return this._entries.get(key);
    }
    set(model, value) {
        const key = InlayHintsCache._key(model);
        this._entries.set(key, value);
    }
    static _key(model) {
        return `${model.uri.toString()}/${model.getVersionId()}`;
    }
}
const IInlayHintsCache = (0,instantiation/* createDecorator */.yh)('IInlayHintsCache');
(0,extensions/* registerSingleton */.z)(IInlayHintsCache, InlayHintsCache, 1 /* InstantiationType.Delayed */);
// --- rendered label
class RenderedInlayHintLabelPart {
    constructor(item, index) {
        this.item = item;
        this.index = index;
    }
    get part() {
        const label = this.item.hint.label;
        if (typeof label === 'string') {
            return { label };
        }
        else {
            return label[this.index];
        }
    }
}
class ActiveInlayHintInfo {
    constructor(part, hasTriggerModifier) {
        this.part = part;
        this.hasTriggerModifier = hasTriggerModifier;
    }
}
// --- controller
let InlayHintsController = class InlayHintsController {
    static get(editor) {
        var _a;
        return (_a = editor.getContribution(InlayHintsController.ID)) !== null && _a !== void 0 ? _a : undefined;
    }
    constructor(_editor, _languageFeaturesService, _featureDebounce, _inlayHintsCache, _commandService, _notificationService, _instaService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._inlayHintsCache = _inlayHintsCache;
        this._commandService = _commandService;
        this._notificationService = _notificationService;
        this._instaService = _instaService;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._sessionDisposables = new lifecycle/* DisposableStore */.SL();
        this._decorationsMetadata = new Map();
        this._ruleFactory = new editorDom/* DynamicCssRules */.t7(this._editor);
        this._activeRenderMode = 0 /* RenderMode.Normal */;
        this._debounceInfo = _featureDebounce.for(_languageFeaturesService.inlayHintsProvider, 'InlayHint', { min: 25 });
        this._disposables.add(_languageFeaturesService.inlayHintsProvider.onDidChange(() => this._update()));
        this._disposables.add(_editor.onDidChangeModel(() => this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(() => this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(136 /* EditorOption.inlayHints */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._sessionDisposables.dispose();
        this._removeAllDecorations();
        this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear();
        this._removeAllDecorations();
        const options = this._editor.getOption(136 /* EditorOption.inlayHints */);
        if (options.enabled === 'off') {
            return;
        }
        const model = this._editor.getModel();
        if (!model || !this._languageFeaturesService.inlayHintsProvider.has(model)) {
            return;
        }
        // iff possible, quickly update from cache
        const cached = this._inlayHintsCache.get(model);
        if (cached) {
            this._updateHintsDecorators([model.getFullModelRange()], cached);
        }
        this._sessionDisposables.add((0,lifecycle/* toDisposable */.OF)(() => {
            // cache items when switching files etc
            if (!model.isDisposed()) {
                this._cacheHintsForFastRestore(model);
            }
        }));
        let cts;
        const watchedProviders = new Set();
        const scheduler = new common_async/* RunOnceScheduler */.pY(() => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            const t1 = Date.now();
            cts === null || cts === void 0 ? void 0 : cts.dispose(true);
            cts = new cancellation/* CancellationTokenSource */.A();
            const listener = model.onWillDispose(() => cts === null || cts === void 0 ? void 0 : cts.cancel());
            try {
                const myToken = cts.token;
                const inlayHints = yield InlayHintsFragments.create(this._languageFeaturesService.inlayHintsProvider, model, this._getHintsRanges(), myToken);
                scheduler.delay = this._debounceInfo.update(model, Date.now() - t1);
                if (myToken.isCancellationRequested) {
                    inlayHints.dispose();
                    return;
                }
                // listen to provider changes
                for (const provider of inlayHints.provider) {
                    if (typeof provider.onDidChangeInlayHints === 'function' && !watchedProviders.has(provider)) {
                        watchedProviders.add(provider);
                        this._sessionDisposables.add(provider.onDidChangeInlayHints(() => {
                            if (!scheduler.isScheduled()) { // ignore event when request is already scheduled
                                scheduler.schedule();
                            }
                        }));
                    }
                }
                this._sessionDisposables.add(inlayHints);
                this._updateHintsDecorators(inlayHints.ranges, inlayHints.items);
                this._cacheHintsForFastRestore(model);
            }
            catch (err) {
                (0,errors/* onUnexpectedError */.dL)(err);
            }
            finally {
                cts.dispose();
                listener.dispose();
            }
        }), this._debounceInfo.get(model));
        this._sessionDisposables.add(scheduler);
        this._sessionDisposables.add((0,lifecycle/* toDisposable */.OF)(() => cts === null || cts === void 0 ? void 0 : cts.dispose(true)));
        scheduler.schedule(0);
        this._sessionDisposables.add(this._editor.onDidScrollChange((e) => {
            // update when scroll position changes
            // uses scrollTopChanged has weak heuristic to differenatiate between scrolling due to
            // typing or due to "actual" scrolling
            if (e.scrollTopChanged || !scheduler.isScheduled()) {
                scheduler.schedule();
            }
        }));
        this._sessionDisposables.add(this._editor.onDidChangeModelContent((e) => {
            // update less aggressive when typing
            const delay = Math.max(scheduler.delay, 1250);
            scheduler.schedule(delay);
        }));
        if (options.enabled === 'on') {
            // different "on" modes: always
            this._activeRenderMode = 0 /* RenderMode.Normal */;
        }
        else {
            // different "on" modes: offUnlessPressed, or onUnlessPressed
            let defaultMode;
            let altMode;
            if (options.enabled === 'onUnlessPressed') {
                defaultMode = 0 /* RenderMode.Normal */;
                altMode = 1 /* RenderMode.Invisible */;
            }
            else {
                defaultMode = 1 /* RenderMode.Invisible */;
                altMode = 0 /* RenderMode.Normal */;
            }
            this._activeRenderMode = defaultMode;
            this._sessionDisposables.add(dom/* ModifierKeyEmitter */._q.getInstance().event(e => {
                if (!this._editor.hasModel()) {
                    return;
                }
                const newRenderMode = e.altKey && e.ctrlKey && !(e.shiftKey || e.metaKey) ? altMode : defaultMode;
                if (newRenderMode !== this._activeRenderMode) {
                    this._activeRenderMode = newRenderMode;
                    const model = this._editor.getModel();
                    const copies = this._copyInlayHintsWithCurrentAnchor(model);
                    this._updateHintsDecorators([model.getFullModelRange()], copies);
                    scheduler.schedule(0);
                }
            }));
        }
        // mouse gestures
        this._sessionDisposables.add(this._installDblClickGesture(() => scheduler.schedule(0)));
        this._sessionDisposables.add(this._installLinkGesture());
        this._sessionDisposables.add(this._installContextMenu());
    }
    _installLinkGesture() {
        const store = new lifecycle/* DisposableStore */.SL();
        const gesture = store.add(new clickLinkGesture/* ClickLinkGesture */.yN(this._editor));
        // let removeHighlight = () => { };
        const sessionStore = new lifecycle/* DisposableStore */.SL();
        store.add(sessionStore);
        store.add(gesture.onMouseMoveOrRelevantKeyDown(e => {
            const [mouseEvent] = e;
            const labelPart = this._getInlayHintLabelPart(mouseEvent);
            const model = this._editor.getModel();
            if (!labelPart || !model) {
                sessionStore.clear();
                return;
            }
            // resolve the item
            const cts = new cancellation/* CancellationTokenSource */.A();
            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => cts.dispose(true)));
            labelPart.item.resolve(cts.token);
            // render link => when the modifier is pressed and when there is a command or location
            this._activeInlayHintPart = labelPart.part.command || labelPart.part.location
                ? new ActiveInlayHintInfo(labelPart, mouseEvent.hasTriggerModifier)
                : undefined;
            const lineNumber = model.validatePosition(labelPart.item.hint.position).lineNumber;
            const range = new core_range/* Range */.e(lineNumber, 1, lineNumber, model.getLineMaxColumn(lineNumber));
            const lineHints = this._getInlineHintsForRange(range);
            this._updateHintsDecorators([range], lineHints);
            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => {
                this._activeInlayHintPart = undefined;
                this._updateHintsDecorators([range], lineHints);
            }));
        }));
        store.add(gesture.onCancel(() => sessionStore.clear()));
        store.add(gesture.onExecute((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            const label = this._getInlayHintLabelPart(e);
            if (label) {
                const part = label.part;
                if (part.location) {
                    // location -> execute go to def
                    this._instaService.invokeFunction(inlayHintsLocations/* goToDefinitionWithLocation */.K, e, this._editor, part.location);
                }
                else if (languages/* Command */.mY.is(part.command)) {
                    // command -> execute it
                    yield this._invokeCommand(part.command, label.item);
                }
            }
        })));
        return store;
    }
    _getInlineHintsForRange(range) {
        const lineHints = new Set();
        for (const data of this._decorationsMetadata.values()) {
            if (range.containsRange(data.item.anchor.range)) {
                lineHints.add(data.item);
            }
        }
        return Array.from(lineHints);
    }
    _installDblClickGesture(updateInlayHints) {
        return this._editor.onMouseUp((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            if (e.event.detail !== 2) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (!part) {
                return;
            }
            e.event.preventDefault();
            yield part.item.resolve(cancellation/* CancellationToken */.T.None);
            if ((0,arrays/* isNonEmptyArray */.Of)(part.item.hint.textEdits)) {
                const edits = part.item.hint.textEdits.map(edit => editOperation/* EditOperation */.h.replace(core_range/* Range */.e.lift(edit.range), edit.text));
                this._editor.executeEdits('inlayHint.default', edits);
                updateInlayHints();
            }
        }));
    }
    _installContextMenu() {
        return this._editor.onContextMenu((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            if (!(e.event.target instanceof HTMLElement)) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (part) {
                yield this._instaService.invokeFunction(inlayHintsLocations/* showGoToContextMenu */.u, this._editor, e.event.target, part);
            }
        }));
    }
    _getInlayHintLabelPart(e) {
        var _a;
        if (e.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
            return undefined;
        }
        const options = (_a = e.target.detail.injectedText) === null || _a === void 0 ? void 0 : _a.options;
        if (options instanceof textModel/* ModelDecorationInjectedTextOptions */.HS && (options === null || options === void 0 ? void 0 : options.attachedData) instanceof RenderedInlayHintLabelPart) {
            return options.attachedData;
        }
        return undefined;
    }
    _invokeCommand(command, item) {
        var _a;
        return inlayHintsController_awaiter(this, void 0, void 0, function* () {
            try {
                yield this._commandService.executeCommand(command.id, ...((_a = command.arguments) !== null && _a !== void 0 ? _a : []));
            }
            catch (err) {
                this._notificationService.notify({
                    severity: notification/* Severity */.zb.Error,
                    source: item.provider.displayName,
                    message: err
                });
            }
        });
    }
    _cacheHintsForFastRestore(model) {
        const hints = this._copyInlayHintsWithCurrentAnchor(model);
        this._inlayHintsCache.set(model, hints);
    }
    // return inlay hints but with an anchor that reflects "updates"
    // that happened after receiving them, e.g adding new lines before a hint
    _copyInlayHintsWithCurrentAnchor(model) {
        const items = new Map();
        for (const [id, obj] of this._decorationsMetadata) {
            if (items.has(obj.item)) {
                // an inlay item can be rendered as multiple decorations
                // but they will all uses the same range
                continue;
            }
            const range = model.getDecorationRange(id);
            if (range) {
                // update range with whatever the editor has tweaked it to
                const anchor = new InlayHintAnchor(range, obj.item.anchor.direction);
                const copy = obj.item.with({ anchor });
                items.set(obj.item, copy);
            }
        }
        return Array.from(items.values());
    }
    _getHintsRanges() {
        const extra = 30;
        const model = this._editor.getModel();
        const visibleRanges = this._editor.getVisibleRangesPlusViewportAboveBelow();
        const result = [];
        for (const range of visibleRanges.sort(core_range/* Range */.e.compareRangesUsingStarts)) {
            const extendedRange = model.validateRange(new core_range/* Range */.e(range.startLineNumber - extra, range.startColumn, range.endLineNumber + extra, range.endColumn));
            if (result.length === 0 || !core_range/* Range */.e.areIntersectingOrTouching(result[result.length - 1], extendedRange)) {
                result.push(extendedRange);
            }
            else {
                result[result.length - 1] = core_range/* Range */.e.plusRange(result[result.length - 1], extendedRange);
            }
        }
        return result;
    }
    _updateHintsDecorators(ranges, items) {
        var _a, _b;
        // utils to collect/create injected text decorations
        const newDecorationsData = [];
        const addInjectedText = (item, ref, content, cursorStops, attachedData) => {
            const opts = {
                content,
                inlineClassNameAffectsLetterSpacing: true,
                inlineClassName: ref.className,
                cursorStops,
                attachedData
            };
            newDecorationsData.push({
                item,
                classNameRef: ref,
                decoration: {
                    range: item.anchor.range,
                    options: {
                        // className: "rangeHighlight", // DEBUG highlight to see to what range a hint is attached
                        description: 'InlayHint',
                        showIfCollapsed: item.anchor.range.isEmpty(),
                        collapseOnReplaceEdit: !item.anchor.range.isEmpty(),
                        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
                        [item.anchor.direction]: this._activeRenderMode === 0 /* RenderMode.Normal */ ? opts : undefined
                    }
                }
            });
        };
        const addInjectedWhitespace = (item, isLast) => {
            const marginRule = this._ruleFactory.createClassNameRef({
                width: `${(fontSize / 3) | 0}px`,
                display: 'inline-block'
            });
            addInjectedText(item, marginRule, '\u200a', isLast ? model/* InjectedTextCursorStops */.RM.Right : model/* InjectedTextCursorStops */.RM.None);
        };
        //
        const { fontSize, fontFamily, padding, isUniform } = this._getLayoutInfo();
        const fontFamilyVar = '--code-editorInlayHintsFontFamily';
        this._editor.getContainerDomNode().style.setProperty(fontFamilyVar, fontFamily);
        for (const item of items) {
            // whitespace leading the actual label
            if (item.hint.paddingLeft) {
                addInjectedWhitespace(item, false);
            }
            // the label with its parts
            const parts = typeof item.hint.label === 'string'
                ? [{ label: item.hint.label }]
                : item.hint.label;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                const isFirst = i === 0;
                const isLast = i === parts.length - 1;
                const cssProperties = {
                    fontSize: `${fontSize}px`,
                    fontFamily: `var(${fontFamilyVar}), ${editorOptions/* EDITOR_FONT_DEFAULTS */.hL.fontFamily}`,
                    verticalAlign: isUniform ? 'baseline' : 'middle',
                    unicodeBidi: 'isolate'
                };
                if ((0,arrays/* isNonEmptyArray */.Of)(item.hint.textEdits)) {
                    cssProperties.cursor = 'default';
                }
                this._fillInColors(cssProperties, item.hint);
                if ((part.command || part.location) && ((_a = this._activeInlayHintPart) === null || _a === void 0 ? void 0 : _a.part.item) === item && this._activeInlayHintPart.part.index === i) {
                    // active link!
                    cssProperties.textDecoration = 'underline';
                    if (this._activeInlayHintPart.hasTriggerModifier) {
                        cssProperties.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorActiveLinkForeground */._Yy);
                        cssProperties.cursor = 'pointer';
                    }
                }
                if (padding) {
                    if (isFirst && isLast) {
                        // only element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${(fontSize / 4) | 0}px`;
                    }
                    else if (isFirst) {
                        // first element
                        cssProperties.padding = `1px 0 1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${(fontSize / 4) | 0}px 0 0 ${(fontSize / 4) | 0}px`;
                    }
                    else if (isLast) {
                        // last element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px 1px 0`;
                        cssProperties.borderRadius = `0 ${(fontSize / 4) | 0}px ${(fontSize / 4) | 0}px 0`;
                    }
                    else {
                        cssProperties.padding = `1px 0 1px 0`;
                    }
                }
                addInjectedText(item, this._ruleFactory.createClassNameRef(cssProperties), fixSpace(part.label), isLast && !item.hint.paddingRight ? model/* InjectedTextCursorStops */.RM.Right : model/* InjectedTextCursorStops */.RM.None, new RenderedInlayHintLabelPart(item, i));
            }
            // whitespace trailing the actual label
            if (item.hint.paddingRight) {
                addInjectedWhitespace(item, true);
            }
            if (newDecorationsData.length > InlayHintsController._MAX_DECORATORS) {
                break;
            }
        }
        // collect all decoration ids that are affected by the ranges
        // and only update those decorations
        const decorationIdsToReplace = [];
        for (const range of ranges) {
            for (const { id } of (_b = this._editor.getDecorationsInRange(range)) !== null && _b !== void 0 ? _b : []) {
                const metadata = this._decorationsMetadata.get(id);
                if (metadata) {
                    decorationIdsToReplace.push(id);
                    metadata.classNameRef.dispose();
                    this._decorationsMetadata.delete(id);
                }
            }
        }
        const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this._editor);
        this._editor.changeDecorations(accessor => {
            const newDecorationIds = accessor.deltaDecorations(decorationIdsToReplace, newDecorationsData.map(d => d.decoration));
            for (let i = 0; i < newDecorationIds.length; i++) {
                const data = newDecorationsData[i];
                this._decorationsMetadata.set(newDecorationIds[i], data);
            }
        });
        scrollState.restore(this._editor);
    }
    _fillInColors(props, hint) {
        if (hint.kind === languages/* InlayHintKind */.gl.Parameter) {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintParameterBackground */.phM);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintParameterForeground */.HCL);
        }
        else if (hint.kind === languages/* InlayHintKind */.gl.Type) {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintTypeBackground */.bKB);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintTypeForeground */.hX8);
        }
        else {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintBackground */.PpC);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintForeground */.VVv);
        }
    }
    _getLayoutInfo() {
        const options = this._editor.getOption(136 /* EditorOption.inlayHints */);
        const padding = options.padding;
        const editorFontSize = this._editor.getOption(50 /* EditorOption.fontSize */);
        const editorFontFamily = this._editor.getOption(47 /* EditorOption.fontFamily */);
        let fontSize = options.fontSize;
        if (!fontSize || fontSize < 5 || fontSize > editorFontSize) {
            fontSize = editorFontSize;
        }
        const fontFamily = options.fontFamily || editorFontFamily;
        const isUniform = !padding
            && fontFamily === editorFontFamily
            && fontSize === editorFontSize;
        return { fontSize, fontFamily, padding, isUniform };
    }
    _removeAllDecorations() {
        this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
        for (const obj of this._decorationsMetadata.values()) {
            obj.classNameRef.dispose();
        }
        this._decorationsMetadata.clear();
    }
};
InlayHintsController.ID = 'editor.contrib.InlayHints';
InlayHintsController._MAX_DECORATORS = 1500;
InlayHintsController = __decorate([
    __param(1, languageFeatures/* ILanguageFeaturesService */.p),
    __param(2, languageFeatureDebounce/* ILanguageFeatureDebounceService */.A),
    __param(3, IInlayHintsCache),
    __param(4, commands/* ICommandService */.H),
    __param(5, notification/* INotificationService */.lT),
    __param(6, instantiation/* IInstantiationService */.TG)
], InlayHintsController);
// Prevents the view from potentially visible whitespace
function fixSpace(str) {
    const noBreakWhitespace = '\xa0';
    return str.replace(/[ \t]/g, noBreakWhitespace);
}
commands/* CommandsRegistry */.P.registerCommand('_executeInlayHintProvider', (accessor, ...args) => inlayHintsController_awaiter(void 0, void 0, void 0, function* () {
    const [uri, range] = args;
    (0,types/* assertType */.p_)(common_uri/* URI */.o.isUri(uri));
    (0,types/* assertType */.p_)(core_range/* Range */.e.isIRange(range));
    const { inlayHintsProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    const ref = yield accessor.get(resolverService/* ITextModelService */.S).createModelReference(uri);
    try {
        const model = yield InlayHintsFragments.create(inlayHintsProvider, ref.object.textEditorModel, [core_range/* Range */.e.lift(range)], cancellation/* CancellationToken */.T.None);
        const result = model.items.map(i => i.hint);
        setTimeout(() => model.dispose(), 0); // dispose after sending to ext host
        return result;
    }
    finally {
        ref.dispose();
    }
}));

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(4950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(21608);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/getHover.js
var getHover = __webpack_require__(53303);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js
var markdownHoverParticipant = __webpack_require__(89211);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inlayHintsHover_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var inlayHintsHover_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inlayHintsHover_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

















class InlayHintsHoverAnchor extends hoverTypes/* HoverForeignElementAnchor */.YM {
    constructor(part, owner, initialMousePosX, initialMousePosY) {
        super(10, owner, part.item.anchor.range, initialMousePosX, initialMousePosY, true);
        this.part = part;
    }
}
let InlayHintsHover = class InlayHintsHover extends markdownHoverParticipant/* MarkdownHoverParticipant */.D5 {
    constructor(editor, languageService, openerService, configurationService, _resolverService, languageFeaturesService) {
        super(editor, languageService, openerService, configurationService, languageFeaturesService);
        this._resolverService = _resolverService;
        this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(mouseEvent) {
        var _a;
        const controller = InlayHintsController.get(this._editor);
        if (!controller) {
            return null;
        }
        if (mouseEvent.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
            return null;
        }
        const options = (_a = mouseEvent.target.detail.injectedText) === null || _a === void 0 ? void 0 : _a.options;
        if (!(options instanceof textModel/* ModelDecorationInjectedTextOptions */.HS && options.attachedData instanceof RenderedInlayHintLabelPart)) {
            return null;
        }
        return new InlayHintsHoverAnchor(options.attachedData, this, mouseEvent.event.posx, mouseEvent.event.posy);
    }
    computeSync() {
        return [];
    }
    computeAsync(anchor, _lineDecorations, token) {
        if (!(anchor instanceof InlayHintsHoverAnchor)) {
            return common_async/* AsyncIterableObject */.Aq.EMPTY;
        }
        return new common_async/* AsyncIterableObject */.Aq((executor) => inlayHintsHover_awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            const { part } = anchor;
            yield part.item.resolve(token);
            if (token.isCancellationRequested) {
                return;
            }
            // (1) Inlay Tooltip
            let itemTooltip;
            if (typeof part.item.hint.tooltip === 'string') {
                itemTooltip = new htmlContent/* MarkdownString */.W5().appendText(part.item.hint.tooltip);
            }
            else if (part.item.hint.tooltip) {
                itemTooltip = part.item.hint.tooltip;
            }
            if (itemTooltip) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [itemTooltip], false, 0));
            }
            // (1.2) Inlay dbl-click gesture
            if ((0,arrays/* isNonEmptyArray */.Of)(part.item.hint.textEdits)) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.dbl', "Double-click to insert"))], false, 10001));
            }
            // (2) Inlay Label Part Tooltip
            let partTooltip;
            if (typeof part.part.tooltip === 'string') {
                partTooltip = new htmlContent/* MarkdownString */.W5().appendText(part.part.tooltip);
            }
            else if (part.part.tooltip) {
                partTooltip = part.part.tooltip;
            }
            if (partTooltip) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [partTooltip], false, 1));
            }
            // (2.2) Inlay Label Part Help Hover
            if (part.part.location || part.part.command) {
                let linkHint;
                const useMetaKey = this._editor.getOption(75 /* EditorOption.multiCursorModifier */) === 'altKey';
                const kb = useMetaKey
                    ? platform/* isMacintosh */.dz
                        ? (0,nls/* localize */.NC)('links.navigate.kb.meta.mac', "cmd + click")
                        : (0,nls/* localize */.NC)('links.navigate.kb.meta', "ctrl + click")
                    : platform/* isMacintosh */.dz
                        ? (0,nls/* localize */.NC)('links.navigate.kb.alt.mac', "option + click")
                        : (0,nls/* localize */.NC)('links.navigate.kb.alt', "alt + click");
                if (part.part.location && part.part.command) {
                    linkHint = new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.defAndCommand', 'Go to Definition ({0}), right click for more', kb));
                }
                else if (part.part.location) {
                    linkHint = new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.def', 'Go to Definition ({0})', kb));
                }
                else if (part.part.command) {
                    linkHint = new htmlContent/* MarkdownString */.W5(`[${(0,nls/* localize */.NC)('hint.cmd', "Execute Command")}](${asCommandLink(part.part.command)} "${part.part.command.title}") (${kb})`, { isTrusted: true });
                }
                if (linkHint) {
                    executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [linkHint], false, 10000));
                }
            }
            // (3) Inlay Label Part Location tooltip
            const iterable = yield this._resolveInlayHintLabelPartHover(part, token);
            try {
                for (var _d = true, iterable_1 = __asyncValues(iterable), iterable_1_1; iterable_1_1 = yield iterable_1.next(), _a = iterable_1_1.done, !_a; _d = true) {
                    _c = iterable_1_1.value;
                    _d = false;
                    const item = _c;
                    executor.emitOne(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = iterable_1.return)) yield _b.call(iterable_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }));
    }
    _resolveInlayHintLabelPartHover(part, token) {
        return inlayHintsHover_awaiter(this, void 0, void 0, function* () {
            if (!part.part.location) {
                return common_async/* AsyncIterableObject */.Aq.EMPTY;
            }
            const { uri, range } = part.part.location;
            const ref = yield this._resolverService.createModelReference(uri);
            try {
                const model = ref.object.textEditorModel;
                if (!this._languageFeaturesService.hoverProvider.has(model)) {
                    return common_async/* AsyncIterableObject */.Aq.EMPTY;
                }
                return (0,getHover/* getHover */.R8)(this._languageFeaturesService.hoverProvider, model, new position/* Position */.L(range.startLineNumber, range.startColumn), token)
                    .filter(item => !(0,htmlContent/* isEmptyMarkdownString */.CP)(item.hover.contents))
                    .map(item => new markdownHoverParticipant/* MarkdownHover */.hU(this, part.item.anchor.range, item.hover.contents, false, 2 + item.ordinal));
            }
            finally {
                ref.dispose();
            }
        });
    }
};
InlayHintsHover = inlayHintsHover_decorate([
    inlayHintsHover_param(1, language/* ILanguageService */.O),
    inlayHintsHover_param(2, common_opener/* IOpenerService */.v4),
    inlayHintsHover_param(3, configuration/* IConfigurationService */.Ui),
    inlayHintsHover_param(4, resolverService/* ITextModelService */.S),
    inlayHintsHover_param(5, languageFeatures/* ILanguageFeaturesService */.p)
], InlayHintsHover);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




(0,editorExtensions/* registerEditorContribution */._K)(InlayHintsController.ID, InlayHintsController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
hoverTypes/* HoverParticipantRegistry */.Ae.register(InlayHintsHover);


/***/ }),

/***/ 21147:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ goToDefinitionWithLocation; },
/* harmony export */   u: function() { return /* binding */ showGoToContextMenu; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1585);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29811);
/* harmony import */ var _base_common_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80764);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(76584);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7699);
/* harmony import */ var _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75811);
/* harmony import */ var _peekView_browser_peekView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9152);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3145);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77783);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81043);
/* harmony import */ var _platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8337);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38048);
/* harmony import */ var _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99938);
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














function showGoToContextMenu(accessor, editor, anchor, part) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__/* .ITextModelService */ .S);
        const contextMenuService = accessor.get(_platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_10__/* .IContextMenuService */ .i);
        const commandService = accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_8__/* .ICommandService */ .H);
        const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_11__/* .IInstantiationService */ .TG);
        const notificationService = accessor.get(_platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__/* .INotificationService */ .lT);
        yield part.item.resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__/* .CancellationToken */ .T.None);
        if (!part.part.location) {
            return;
        }
        const location = part.part.location;
        const menuActions = [];
        // from all registered (not active) context menu actions select those
        // that are a symbol navigation actions
        const filter = new Set(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.getMenuItems(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext)
            .map(item => (0,_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .isIMenuItem */ .vr)(item) ? item.command.id : (0,_base_common_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUuid */ .R)()));
        for (const delegate of _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__.SymbolNavigationAction.all()) {
            if (filter.has(delegate.desc.id)) {
                menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU(delegate.desc.id, _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuItemAction */ .U8.label(delegate.desc, { renderShortTitle: true }), undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                    const ref = yield resolverService.createModelReference(location.uri);
                    try {
                        const symbolAnchor = new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__.SymbolNavigationAnchor(ref.object.textEditorModel, _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.getStartPosition(location.range));
                        const range = part.item.anchor.range;
                        yield instaService.invokeFunction(delegate.runEditorCommand.bind(delegate), editor, symbolAnchor, range);
                    }
                    finally {
                        ref.dispose();
                    }
                })));
            }
        }
        if (part.part.command) {
            const { command } = part.part;
            menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Separator */ .Z0());
            menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU(command.id, command.title, undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                var _b;
                try {
                    yield commandService.executeCommand(command.id, ...((_b = command.arguments) !== null && _b !== void 0 ? _b : []));
                }
                catch (err) {
                    notificationService.notify({
                        severity: _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__/* .Severity */ .zb.Error,
                        source: part.item.provider.displayName,
                        message: err
                    });
                }
            })));
        }
        // show context menu
        const useShadowDOM = editor.getOption(123 /* EditorOption.useShadowDOM */);
        contextMenuService.showContextMenu({
            domForShadowRoot: useShadowDOM ? (_a = editor.getDomNode()) !== null && _a !== void 0 ? _a : undefined : undefined,
            getAnchor: () => {
                const box = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .getDomNodePagePosition */ .i(anchor);
                return { x: box.left, y: box.top + box.height + 8 };
            },
            getActions: () => menuActions,
            onHide: () => {
                editor.focus();
            },
            autoSelectFirstItem: true,
        });
    });
}
function goToDefinitionWithLocation(accessor, event, editor, location) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__/* .ITextModelService */ .S);
        const ref = yield resolverService.createModelReference(location.uri);
        yield editor.invokeWithinContext((accessor) => __awaiter(this, void 0, void 0, function* () {
            const openToSide = event.hasSideBySideModifier;
            const contextKeyService = accessor.get(_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .IContextKeyService */ .i6);
            const isInPeek = _peekView_browser_peekView_js__WEBPACK_IMPORTED_MODULE_6__/* .PeekContext */ .Jy.inPeekEditor.getValue(contextKeyService);
            const canPeek = !openToSide && editor.getOption(85 /* EditorOption.definitionLinkOpensInPeek */) && !isInPeek;
            const action = new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__.DefinitionAction({ openToSide, openInPeek: canPeek, muteMessage: true }, { title: { value: '', original: '' }, id: '', precondition: undefined });
            return action.run(accessor, new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__.SymbolNavigationAnchor(ref.object.textEditorModel, _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.getStartPosition(location.range)), _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.lift(location.range));
        }));
        ref.dispose();
    });
}


/***/ })

}]);