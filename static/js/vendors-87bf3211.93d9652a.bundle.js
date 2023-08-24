"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-87bf3211"],{

/***/ 47221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .sticky-line {\n\tcolor: var(--vscode-editorLineNumber-foreground);\n\toverflow: hidden;\n\twhite-space: nowrap;\n\tdisplay: inline-block;\n}\n\n.monaco-editor .sticky-line-number {\n\ttext-align: right;\n\tfloat: left;\n}\n\n.monaco-editor .sticky-line-root {\n\tbackground-color: inherit;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\twidth: 100%;\n}\n\n.monaco-editor.hc-black .sticky-widget,\n.monaco-editor.hc-light .sticky-widget {\n\tborder-bottom: 1px solid var(--vscode-contrastBorder);\n}\n\n.monaco-editor .sticky-line-root:hover {\n\tbackground-color: var(--vscode-editorStickyScrollHover-background);\n\tcursor: pointer;\n}\n\n.monaco-editor .sticky-widget {\n\twidth: 100%;\n\tbox-shadow: var(--vscode-scrollbar-shadow) 0 3px 2px -2px;\n\tz-index: 4;\n\tbackground-color: var(--vscode-editorStickyScroll-background);\n}\n\n.monaco-editor .sticky-widget.peek {\n\tbackground-color: var(--vscode-peekViewEditorStickyScroll-background);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 19209:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/action/common/actionCommonCategories.js
var actionCommonCategories = __webpack_require__(71229);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(47619);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(99779);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(78658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(45394);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/trustedTypes.js
var trustedTypes = __webpack_require__(68069);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScroll.css
var stickyScroll = __webpack_require__(47221);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScroll.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(stickyScroll/* default */.Z, options);




       /* harmony default export */ var browser_stickyScroll = (stickyScroll/* default */.Z && stickyScroll/* default */.Z.locals ? stickyScroll/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/embeddedCodeEditorWidget.js
var embeddedCodeEditorWidget = __webpack_require__(13511);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/stringBuilder.js
var stringBuilder = __webpack_require__(63156);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/lineDecorations.js
var lineDecorations = __webpack_require__(35900);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js + 1 modules
var viewLineRenderer = __webpack_require__(60533);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










class StickyScrollWidgetState {
    constructor(lineNumbers, lastLineRelativePosition) {
        this.lineNumbers = lineNumbers;
        this.lastLineRelativePosition = lastLineRelativePosition;
    }
}
const _ttPolicy = (0,trustedTypes/* createTrustedTypesPolicy */.Z)('stickyScrollViewLayer', { createHTML: value => value });
class StickyScrollWidget extends lifecycle/* Disposable */.JT {
    constructor(_editor) {
        super();
        this._editor = _editor;
        this._rootDomNode = document.createElement('div');
        this._disposableStore = this._register(new lifecycle/* DisposableStore */.SL());
        this._lineNumbers = [];
        this._lastLineRelativePosition = 0;
        this._hoverOnLine = -1;
        this._hoverOnColumn = -1;
        this._layoutInfo = this._editor.getLayoutInfo();
        this._rootDomNode = document.createElement('div');
        this._rootDomNode.className = 'sticky-widget';
        this._rootDomNode.classList.toggle('peek', _editor instanceof embeddedCodeEditorWidget/* EmbeddedCodeEditorWidget */.H);
        this._rootDomNode.style.width = `${this._layoutInfo.width - this._layoutInfo.minimap.minimapCanvasOuterWidth - this._layoutInfo.verticalScrollbarWidth}px`;
    }
    get hoverOnLine() {
        return this._hoverOnLine;
    }
    get hoverOnColumn() {
        return this._hoverOnColumn;
    }
    get lineNumbers() {
        return this._lineNumbers;
    }
    getCurrentLines() {
        return this._lineNumbers;
    }
    setState(state) {
        dom/* clearNode */.PO(this._rootDomNode);
        this._disposableStore.clear();
        this._lineNumbers.length = 0;
        const editorLineHeight = this._editor.getOption(65 /* EditorOption.lineHeight */);
        const futureWidgetHeight = state.lineNumbers.length * editorLineHeight + state.lastLineRelativePosition;
        if (futureWidgetHeight > 0) {
            this._lastLineRelativePosition = state.lastLineRelativePosition;
            this._lineNumbers = state.lineNumbers;
        }
        else {
            this._lastLineRelativePosition = 0;
            this._lineNumbers = [];
        }
        this._renderRootNode();
    }
    _renderRootNode() {
        if (!this._editor._getViewModel()) {
            return;
        }
        for (const [index, line] of this._lineNumbers.entries()) {
            const childNode = this._renderChildNode(index, line);
            this._rootDomNode.appendChild(childNode);
        }
        const editorLineHeight = this._editor.getOption(65 /* EditorOption.lineHeight */);
        const widgetHeight = this._lineNumbers.length * editorLineHeight + this._lastLineRelativePosition;
        this._rootDomNode.style.display = widgetHeight > 0 ? 'block' : 'none';
        this._rootDomNode.style.height = widgetHeight.toString() + 'px';
        this._rootDomNode.setAttribute('role', 'list');
        const minimapSide = this._editor.getOption(71 /* EditorOption.minimap */).side;
        if (minimapSide === 'left') {
            this._rootDomNode.style.marginLeft = this._editor.getLayoutInfo().minimap.minimapCanvasOuterWidth + 'px';
        }
    }
    _renderChildNode(index, line) {
        const child = document.createElement('div');
        const viewModel = this._editor._getViewModel();
        const viewLineNumber = viewModel.coordinatesConverter.convertModelPositionToViewPosition(new position/* Position */.L(line, 1)).lineNumber;
        const lineRenderingData = viewModel.getViewLineRenderingData(viewLineNumber);
        const layoutInfo = this._editor.getLayoutInfo();
        const width = layoutInfo.width - layoutInfo.minimap.minimapCanvasOuterWidth - layoutInfo.verticalScrollbarWidth;
        const minimapSide = this._editor.getOption(71 /* EditorOption.minimap */).side;
        const lineHeight = this._editor.getOption(65 /* EditorOption.lineHeight */);
        const lineNumberOption = this._editor.getOption(66 /* EditorOption.lineNumbers */);
        let actualInlineDecorations;
        try {
            actualInlineDecorations = lineDecorations/* LineDecoration */.Kp.filter(lineRenderingData.inlineDecorations, viewLineNumber, lineRenderingData.minColumn, lineRenderingData.maxColumn);
        }
        catch (err) {
            actualInlineDecorations = [];
        }
        const renderLineInput = new viewLineRenderer/* RenderLineInput */.IJ(true, true, lineRenderingData.content, lineRenderingData.continuesWithWrappedLine, lineRenderingData.isBasicASCII, lineRenderingData.containsRTL, 0, lineRenderingData.tokens, actualInlineDecorations, lineRenderingData.tabSize, lineRenderingData.startVisibleColumn, 1, 1, 1, 500, 'none', true, true, null);
        const sb = new stringBuilder/* StringBuilder */.HT(2000);
        (0,viewLineRenderer/* renderViewLine */.d1)(renderLineInput, sb);
        let newLine;
        if (_ttPolicy) {
            newLine = _ttPolicy.createHTML(sb.build());
        }
        else {
            newLine = sb.build();
        }
        const lineHTMLNode = document.createElement('span');
        lineHTMLNode.className = 'sticky-line';
        lineHTMLNode.classList.add(`stickyLine${line}`);
        lineHTMLNode.style.lineHeight = `${lineHeight}px`;
        lineHTMLNode.innerHTML = newLine;
        const lineNumberHTMLNode = document.createElement('span');
        lineNumberHTMLNode.className = 'sticky-line';
        lineNumberHTMLNode.style.lineHeight = `${lineHeight}px`;
        if (minimapSide === 'left') {
            lineNumberHTMLNode.style.width = `${layoutInfo.contentLeft - layoutInfo.minimap.minimapCanvasOuterWidth}px`;
        }
        else if (minimapSide === 'right') {
            lineNumberHTMLNode.style.width = `${layoutInfo.contentLeft}px`;
        }
        const innerLineNumberHTML = document.createElement('span');
        if (lineNumberOption.renderType === 1 /* RenderLineNumbersType.On */ || lineNumberOption.renderType === 3 /* RenderLineNumbersType.Interval */ && line % 10 === 0) {
            innerLineNumberHTML.innerText = line.toString();
        }
        else if (lineNumberOption.renderType === 2 /* RenderLineNumbersType.Relative */) {
            innerLineNumberHTML.innerText = Math.abs(line - this._editor.getPosition().lineNumber).toString();
        }
        innerLineNumberHTML.className = 'sticky-line-number';
        innerLineNumberHTML.style.lineHeight = `${lineHeight}px`;
        innerLineNumberHTML.style.width = `${layoutInfo.lineNumbersWidth}px`;
        if (minimapSide === 'left') {
            innerLineNumberHTML.style.paddingLeft = `${layoutInfo.lineNumbersLeft - layoutInfo.minimap.minimapCanvasOuterWidth}px`;
        }
        else if (minimapSide === 'right') {
            innerLineNumberHTML.style.paddingLeft = `${layoutInfo.lineNumbersLeft}px`;
        }
        lineNumberHTMLNode.appendChild(innerLineNumberHTML);
        this._editor.applyFontInfo(lineHTMLNode);
        this._editor.applyFontInfo(innerLineNumberHTML);
        child.appendChild(lineNumberHTMLNode);
        child.appendChild(lineHTMLNode);
        child.className = 'sticky-line-root';
        child.setAttribute('role', 'listitem');
        child.tabIndex = 0;
        child.style.lineHeight = `${lineHeight}px`;
        child.style.width = `${width}px`;
        child.style.height = `${lineHeight}px`;
        child.style.zIndex = '0';
        // Special case for the last line of sticky scroll
        if (index === this._lineNumbers.length - 1) {
            child.style.position = 'relative';
            child.style.zIndex = '-1';
            child.style.top = this._lastLineRelativePosition + 'px';
        }
        // Each child has a listener which fires when the mouse hovers over the child
        this._disposableStore.add(dom/* addDisposableListener */.nm(child, 'mouseover', (e) => {
            if (this._editor.hasModel()) {
                const mouseOverEvent = new mouseEvent/* StandardMouseEvent */.n(e);
                const text = mouseOverEvent.target.innerText;
                // Line and column number of the hover needed for the control clicking feature
                this._hoverOnLine = line;
                // TODO: workaround to find the column index, perhaps need a more solid solution
                this._hoverOnColumn = this._editor.getModel().getLineContent(line).indexOf(text) + 1 || -1;
            }
        }));
        return child;
    }
    getId() {
        return 'editor.contrib.stickyScrollWidget';
    }
    getDomNode() {
        return this._rootDomNode;
    }
    getPosition() {
        return {
            preference: null
        };
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(85493);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js + 5 modules
var languageConfigurationRegistry = __webpack_require__(30766);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/outlineModel.js
var browser_outlineModel = __webpack_require__(36857);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js + 4 modules
var folding = __webpack_require__(86344);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/syntaxRangeProvider.js
var syntaxRangeProvider = __webpack_require__(89997);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/indentRangeProvider.js
var indentRangeProvider = __webpack_require__(47415);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollElement.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class StickyRange {
    constructor(startLineNumber, endLineNumber) {
        this.startLineNumber = startLineNumber;
        this.endLineNumber = endLineNumber;
    }
}
class StickyElement {
    constructor(
    /**
     * Range of line numbers spanned by the current scope
     */
    range, 
    /**
     * Must be sorted by start line number
    */
    children, 
    /**
     * Parent sticky outline element
     */
    parent) {
        this.range = range;
        this.children = children;
        this.parent = parent;
    }
}
class StickyModel {
    constructor(uri, version, element, outlineProviderId) {
        this.uri = uri;
        this.version = version;
        this.element = element;
        this.outlineProviderId = outlineProviderId;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/iterator.js
var iterator = __webpack_require__(25134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollModelProvider.js
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











var ModelProvider;
(function (ModelProvider) {
    ModelProvider["OUTLINE_MODEL"] = "outlineModel";
    ModelProvider["FOLDING_PROVIDER_MODEL"] = "foldingProviderModel";
    ModelProvider["INDENTATION_MODEL"] = "indentationModel";
})(ModelProvider || (ModelProvider = {}));
var Status;
(function (Status) {
    Status[Status["VALID"] = 0] = "VALID";
    Status[Status["INVALID"] = 1] = "INVALID";
    Status[Status["CANCELED"] = 2] = "CANCELED";
})(Status || (Status = {}));
let StickyModelProvider = class StickyModelProvider {
    constructor(_editor, _languageConfigurationService, _languageFeaturesService, defaultModel) {
        this._editor = _editor;
        this._languageConfigurationService = _languageConfigurationService;
        this._languageFeaturesService = _languageFeaturesService;
        this._modelProviders = [];
        this._modelPromise = null;
        this._updateScheduler = new common_async/* Delayer */.vp(300);
        const stickyModelFromCandidateOutlineProvider = new StickyModelFromCandidateOutlineProvider(_languageFeaturesService);
        const stickyModelFromSyntaxFoldingProvider = new StickyModelFromCandidateSyntaxFoldingProvider(this._editor, _languageFeaturesService);
        const stickyModelFromIndentationFoldingProvider = new StickyModelFromCandidateIndentationFoldingProvider(this._editor, _languageConfigurationService);
        switch (defaultModel) {
            case ModelProvider.OUTLINE_MODEL:
                this._modelProviders.push(stickyModelFromCandidateOutlineProvider);
                this._modelProviders.push(stickyModelFromSyntaxFoldingProvider);
                this._modelProviders.push(stickyModelFromIndentationFoldingProvider);
                break;
            case ModelProvider.FOLDING_PROVIDER_MODEL:
                this._modelProviders.push(stickyModelFromSyntaxFoldingProvider);
                this._modelProviders.push(stickyModelFromIndentationFoldingProvider);
                break;
            case ModelProvider.INDENTATION_MODEL:
                this._modelProviders.push(stickyModelFromIndentationFoldingProvider);
                break;
        }
        this._store = new lifecycle/* DisposableStore */.SL();
    }
    _cancelModelPromise() {
        if (this._modelPromise) {
            this._modelPromise.cancel();
            this._modelPromise = null;
        }
    }
    update(textModel, textModelVersionId, token) {
        return __awaiter(this, void 0, void 0, function* () {
            this._store.clear();
            this._store.add({
                dispose: () => {
                    var _a;
                    this._cancelModelPromise();
                    (_a = this._updateScheduler) === null || _a === void 0 ? void 0 : _a.cancel();
                }
            });
            this._cancelModelPromise();
            return yield this._updateScheduler.trigger(() => __awaiter(this, void 0, void 0, function* () {
                for (const modelProvider of this._modelProviders) {
                    const { statusPromise, modelPromise } = modelProvider.computeStickyModel(textModel, textModelVersionId, token);
                    this._modelPromise = modelPromise;
                    const status = yield statusPromise;
                    if (this._modelPromise !== modelPromise) {
                        return null;
                    }
                    switch (status) {
                        case Status.CANCELED:
                            this._store.clear();
                            return null;
                        case Status.VALID:
                            return modelProvider.stickyModel;
                    }
                }
                return null;
            }));
        });
    }
};
StickyModelProvider = __decorate([
    __param(1, languageConfigurationRegistry/* ILanguageConfigurationService */.c_),
    __param(2, languageFeatures/* ILanguageFeaturesService */.p)
], StickyModelProvider);

class StickyModelCandidateProvider {
    constructor() {
        this._stickyModel = null;
    }
    get stickyModel() {
        return this._stickyModel;
    }
    _invalid() {
        this._stickyModel = null;
        return Status.INVALID;
    }
    computeStickyModel(textModel, modelVersionId, token) {
        if (token.isCancellationRequested || !this.isProviderValid(textModel)) {
            return { statusPromise: this._invalid(), modelPromise: null };
        }
        const providerModelPromise = (0,common_async/* createCancelablePromise */.PG)(token => this.createModelFromProvider(textModel, modelVersionId, token));
        return {
            statusPromise: providerModelPromise.then(providerModel => {
                if (!this.isModelValid(providerModel)) {
                    return this._invalid();
                }
                if (token.isCancellationRequested) {
                    return Status.CANCELED;
                }
                this._stickyModel = this.createStickyModel(textModel, modelVersionId, token, providerModel);
                return Status.VALID;
            }).then(undefined, (err) => {
                (0,errors/* onUnexpectedError */.dL)(err);
                return Status.CANCELED;
            }),
            modelPromise: providerModelPromise
        };
    }
    /**
     * Method which checks whether the model returned by the provider is valid and can be used to compute a sticky model.
     * This method by default returns true.
     * @param model model returned by the provider
     * @returns boolean indicating whether the model is valid
     */
    isModelValid(model) {
        return true;
    }
    /**
     * Method which checks whether the provider is valid before applying it to find the provider model.
     * This method by default returns true.
     * @param textModel text-model of the editor
     * @returns boolean indicating whether the provider is valid
     */
    isProviderValid(textModel) {
        return true;
    }
}
let StickyModelFromCandidateOutlineProvider = class StickyModelFromCandidateOutlineProvider extends StickyModelCandidateProvider {
    constructor(_languageFeaturesService) {
        super();
        this._languageFeaturesService = _languageFeaturesService;
    }
    createModelFromProvider(textModel, modelVersionId, token) {
        return browser_outlineModel/* OutlineModel */.C3.create(this._languageFeaturesService.documentSymbolProvider, textModel, token);
    }
    createStickyModel(textModel, modelVersionId, token, model) {
        var _a;
        const { stickyOutlineElement, providerID } = this._stickyModelFromOutlineModel(model, (_a = this._stickyModel) === null || _a === void 0 ? void 0 : _a.outlineProviderId);
        return new StickyModel(textModel.uri, modelVersionId, stickyOutlineElement, providerID);
    }
    isModelValid(model) {
        return model && model.children.size > 0;
    }
    _stickyModelFromOutlineModel(outlineModel, preferredProvider) {
        let outlineElements;
        // When several possible outline providers
        if (iterator/* Iterable */.$.first(outlineModel.children.values()) instanceof browser_outlineModel/* OutlineGroup */.H3) {
            const provider = iterator/* Iterable */.$.find(outlineModel.children.values(), outlineGroupOfModel => outlineGroupOfModel.id === preferredProvider);
            if (provider) {
                outlineElements = provider.children;
            }
            else {
                let tempID = '';
                let maxTotalSumOfRanges = -1;
                let optimalOutlineGroup = undefined;
                for (const [_key, outlineGroup] of outlineModel.children.entries()) {
                    const totalSumRanges = this._findSumOfRangesOfGroup(outlineGroup);
                    if (totalSumRanges > maxTotalSumOfRanges) {
                        optimalOutlineGroup = outlineGroup;
                        maxTotalSumOfRanges = totalSumRanges;
                        tempID = outlineGroup.id;
                    }
                }
                preferredProvider = tempID;
                outlineElements = optimalOutlineGroup.children;
            }
        }
        else {
            outlineElements = outlineModel.children;
        }
        const stickyChildren = [];
        const outlineElementsArray = Array.from(outlineElements.values()).sort((element1, element2) => {
            const range1 = new StickyRange(element1.symbol.range.startLineNumber, element1.symbol.range.endLineNumber);
            const range2 = new StickyRange(element2.symbol.range.startLineNumber, element2.symbol.range.endLineNumber);
            return this._comparator(range1, range2);
        });
        for (const outlineElement of outlineElementsArray) {
            stickyChildren.push(this._stickyModelFromOutlineElement(outlineElement, outlineElement.symbol.selectionRange.startLineNumber));
        }
        const stickyOutlineElement = new StickyElement(undefined, stickyChildren, undefined);
        return {
            stickyOutlineElement: stickyOutlineElement,
            providerID: preferredProvider
        };
    }
    _stickyModelFromOutlineElement(outlineElement, previousStartLine) {
        const children = [];
        for (const child of outlineElement.children.values()) {
            if (child.symbol.selectionRange.startLineNumber !== child.symbol.range.endLineNumber) {
                if (child.symbol.selectionRange.startLineNumber !== previousStartLine) {
                    children.push(this._stickyModelFromOutlineElement(child, child.symbol.selectionRange.startLineNumber));
                }
                else {
                    for (const subchild of child.children.values()) {
                        children.push(this._stickyModelFromOutlineElement(subchild, child.symbol.selectionRange.startLineNumber));
                    }
                }
            }
        }
        children.sort((child1, child2) => this._comparator(child1.range, child2.range));
        const range = new StickyRange(outlineElement.symbol.selectionRange.startLineNumber, outlineElement.symbol.range.endLineNumber);
        return new StickyElement(range, children, undefined);
    }
    _comparator(range1, range2) {
        if (range1.startLineNumber !== range2.startLineNumber) {
            return range1.startLineNumber - range2.startLineNumber;
        }
        else {
            return range2.endLineNumber - range1.endLineNumber;
        }
    }
    _findSumOfRangesOfGroup(outline) {
        let res = 0;
        for (const child of outline.children.values()) {
            res += this._findSumOfRangesOfGroup(child);
        }
        if (outline instanceof browser_outlineModel/* OutlineElement */.sT) {
            return res + outline.symbol.range.endLineNumber - outline.symbol.selectionRange.startLineNumber;
        }
        else {
            return res;
        }
    }
};
StickyModelFromCandidateOutlineProvider = __decorate([
    __param(0, languageFeatures/* ILanguageFeaturesService */.p)
], StickyModelFromCandidateOutlineProvider);
class StickyModelFromCandidateFoldingProvider extends StickyModelCandidateProvider {
    constructor(editor) {
        super();
        this._foldingLimitReporter = new folding/* RangesLimitReporter */.n(editor);
    }
    createStickyModel(textModel, modelVersionId, token, model) {
        const foldingElement = this._fromFoldingRegions(model);
        return new StickyModel(textModel.uri, modelVersionId, foldingElement, undefined);
    }
    isModelValid(model) {
        return model !== null;
    }
    _fromFoldingRegions(foldingRegions) {
        const length = foldingRegions.length;
        const orderedStickyElements = [];
        // The root sticky outline element
        const stickyOutlineElement = new StickyElement(undefined, [], undefined);
        for (let i = 0; i < length; i++) {
            // Finding the parent index of the current range
            const parentIndex = foldingRegions.getParentIndex(i);
            let parentNode;
            if (parentIndex !== -1) {
                // Access the reference of the parent node
                parentNode = orderedStickyElements[parentIndex];
            }
            else {
                // In that case the parent node is the root node
                parentNode = stickyOutlineElement;
            }
            const child = new StickyElement(new StickyRange(foldingRegions.getStartLineNumber(i), foldingRegions.getEndLineNumber(i) + 1), [], parentNode);
            parentNode.children.push(child);
            orderedStickyElements.push(child);
        }
        return stickyOutlineElement;
    }
}
let StickyModelFromCandidateIndentationFoldingProvider = class StickyModelFromCandidateIndentationFoldingProvider extends StickyModelFromCandidateFoldingProvider {
    constructor(editor, _languageConfigurationService) {
        super(editor);
        this._languageConfigurationService = _languageConfigurationService;
    }
    createModelFromProvider(textModel, modelVersionId, token) {
        const provider = new indentRangeProvider/* IndentRangeProvider */.aI(textModel, this._languageConfigurationService, this._foldingLimitReporter);
        return provider.compute(token);
    }
};
StickyModelFromCandidateIndentationFoldingProvider = __decorate([
    __param(1, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], StickyModelFromCandidateIndentationFoldingProvider);
let StickyModelFromCandidateSyntaxFoldingProvider = class StickyModelFromCandidateSyntaxFoldingProvider extends StickyModelFromCandidateFoldingProvider {
    constructor(editor, _languageFeaturesService) {
        super(editor);
        this._languageFeaturesService = _languageFeaturesService;
    }
    isProviderValid(textModel) {
        const selectedProviders = folding/* FoldingController */.f.getFoldingRangeProviders(this._languageFeaturesService, textModel);
        return selectedProviders.length > 0;
    }
    createModelFromProvider(textModel, modelVersionId, token) {
        const selectedProviders = folding/* FoldingController */.f.getFoldingRangeProviders(this._languageFeaturesService, textModel);
        const provider = new syntaxRangeProvider/* SyntaxRangeProvider */.e(textModel, selectedProviders, () => this.createModelFromProvider(textModel, modelVersionId, token), this._foldingLimitReporter, undefined);
        return provider.compute(token);
    }
};
StickyModelFromCandidateSyntaxFoldingProvider = __decorate([
    __param(1, languageFeatures/* ILanguageFeaturesService */.p)
], StickyModelFromCandidateSyntaxFoldingProvider);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollProvider.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var stickyScrollProvider_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var stickyScrollProvider_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var stickyScrollProvider_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










class StickyLineCandidate {
    constructor(startLineNumber, endLineNumber, nestingDepth) {
        this.startLineNumber = startLineNumber;
        this.endLineNumber = endLineNumber;
        this.nestingDepth = nestingDepth;
    }
}
let StickyLineCandidateProvider = class StickyLineCandidateProvider extends lifecycle/* Disposable */.JT {
    constructor(editor, _languageFeaturesService, _languageConfigurationService) {
        super();
        this._languageFeaturesService = _languageFeaturesService;
        this._languageConfigurationService = _languageConfigurationService;
        this._onDidChangeStickyScroll = this._store.add(new common_event/* Emitter */.Q5());
        this.onDidChangeStickyScroll = this._onDidChangeStickyScroll.event;
        this._options = null;
        this._model = null;
        this._cts = null;
        this._stickyModelProvider = null;
        this._editor = editor;
        this._sessionStore = new lifecycle/* DisposableStore */.SL();
        this._updateSoon = this._register(new common_async/* RunOnceScheduler */.pY(() => this.update(), 50));
        this._register(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(113 /* EditorOption.stickyScroll */)) {
                this.readConfiguration();
            }
        }));
        this.readConfiguration();
    }
    dispose() {
        super.dispose();
        this._sessionStore.dispose();
    }
    readConfiguration() {
        this._options = this._editor.getOption(113 /* EditorOption.stickyScroll */);
        if (!this._options.enabled) {
            this._sessionStore.clear();
            return;
        }
        this._stickyModelProvider = new StickyModelProvider(this._editor, this._languageConfigurationService, this._languageFeaturesService, this._options.defaultModel);
        this._sessionStore.add(this._editor.onDidChangeModel(() => this.update()));
        this._sessionStore.add(this._editor.onDidChangeHiddenAreas(() => this.update()));
        this._sessionStore.add(this._editor.onDidChangeModelContent(() => this._updateSoon.schedule()));
        this._sessionStore.add(this._languageFeaturesService.documentSymbolProvider.onDidChange(() => this.update()));
        this.update();
    }
    getVersionId() {
        var _a;
        return (_a = this._model) === null || _a === void 0 ? void 0 : _a.version;
    }
    update() {
        var _a;
        return stickyScrollProvider_awaiter(this, void 0, void 0, function* () {
            (_a = this._cts) === null || _a === void 0 ? void 0 : _a.dispose(true);
            this._cts = new cancellation/* CancellationTokenSource */.A();
            yield this.updateStickyModel(this._cts.token);
            this._onDidChangeStickyScroll.fire();
        });
    }
    updateStickyModel(token) {
        return stickyScrollProvider_awaiter(this, void 0, void 0, function* () {
            if (!this._editor.hasModel() || !this._stickyModelProvider) {
                return;
            }
            const textModel = this._editor.getModel();
            const modelVersionId = textModel.getVersionId();
            const isDifferentModel = this._model ? !(0,resources/* isEqual */.Xy)(this._model.uri, textModel.uri) : false;
            // Clear sticky scroll to not show stale data for too long
            const resetHandle = isDifferentModel ? setTimeout(() => {
                if (!token.isCancellationRequested) {
                    this._model = new StickyModel(textModel.uri, textModel.getVersionId(), undefined, undefined);
                    this._onDidChangeStickyScroll.fire();
                }
            }, 75) : undefined;
            this._model = yield this._stickyModelProvider.update(textModel, modelVersionId, token);
            clearTimeout(resetHandle);
        });
    }
    updateIndex(index) {
        if (index === -1) {
            index = 0;
        }
        else if (index < 0) {
            index = -index - 2;
        }
        return index;
    }
    getCandidateStickyLinesIntersectingFromStickyModel(range, outlineModel, result, depth, lastStartLineNumber) {
        if (outlineModel.children.length === 0) {
            return;
        }
        let lastLine = lastStartLineNumber;
        const childrenStartLines = [];
        for (let i = 0; i < outlineModel.children.length; i++) {
            const child = outlineModel.children[i];
            if (child.range) {
                childrenStartLines.push(child.range.startLineNumber);
            }
        }
        const lowerBound = this.updateIndex((0,arrays/* binarySearch */.ry)(childrenStartLines, range.startLineNumber, (a, b) => { return a - b; }));
        const upperBound = this.updateIndex((0,arrays/* binarySearch */.ry)(childrenStartLines, range.startLineNumber + depth, (a, b) => { return a - b; }));
        for (let i = lowerBound; i <= upperBound; i++) {
            const child = outlineModel.children[i];
            if (!child) {
                return;
            }
            if (child.range) {
                const childStartLine = child.range.startLineNumber;
                const childEndLine = child.range.endLineNumber;
                if (range.startLineNumber <= childEndLine + 1 && childStartLine - 1 <= range.endLineNumber && childStartLine !== lastLine) {
                    lastLine = childStartLine;
                    result.push(new StickyLineCandidate(childStartLine, childEndLine - 1, depth + 1));
                    this.getCandidateStickyLinesIntersectingFromStickyModel(range, child, result, depth + 1, childStartLine);
                }
            }
            else {
                this.getCandidateStickyLinesIntersectingFromStickyModel(range, child, result, depth, lastStartLineNumber);
            }
        }
    }
    getCandidateStickyLinesIntersecting(range) {
        var _a, _b;
        if (!((_a = this._model) === null || _a === void 0 ? void 0 : _a.element)) {
            return [];
        }
        let stickyLineCandidates = [];
        this.getCandidateStickyLinesIntersectingFromStickyModel(range, this._model.element, stickyLineCandidates, 0, -1);
        const hiddenRanges = (_b = this._editor._getViewModel()) === null || _b === void 0 ? void 0 : _b.getHiddenAreas();
        if (hiddenRanges) {
            for (const hiddenRange of hiddenRanges) {
                stickyLineCandidates = stickyLineCandidates.filter(stickyLine => !(stickyLine.startLineNumber >= hiddenRange.startLineNumber && stickyLine.endLineNumber <= hiddenRange.endLineNumber + 1));
            }
        }
        return stickyLineCandidates;
    }
};
StickyLineCandidateProvider = stickyScrollProvider_decorate([
    stickyScrollProvider_param(1, languageFeatures/* ILanguageFeaturesService */.p),
    stickyScrollProvider_param(2, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], StickyLineCandidateProvider);


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js
var contextView = __webpack_require__(88823);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js
var clickLinkGesture = __webpack_require__(82725);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToSymbol.js
var goToSymbol = __webpack_require__(11075);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.js
var inlayHintsLocations = __webpack_require__(62754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js
var languageFeatureDebounce = __webpack_require__(8857);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollController.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var stickyScrollController_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var stickyScrollController_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var stickyScrollController_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















let StickyScrollController = class StickyScrollController extends lifecycle/* Disposable */.JT {
    constructor(_editor, _contextMenuService, _languageFeaturesService, _instaService, _languageConfigurationService, _languageFeatureDebounceService, _contextKeyService) {
        super();
        this._editor = _editor;
        this._contextMenuService = _contextMenuService;
        this._languageFeaturesService = _languageFeaturesService;
        this._instaService = _instaService;
        this._contextKeyService = _contextKeyService;
        this._sessionStore = new lifecycle/* DisposableStore */.SL();
        this._maxStickyLines = Number.MAX_SAFE_INTEGER;
        this._candidateDefinitionsLength = -1;
        this._focusedStickyElementIndex = -1;
        this._enabled = false;
        this._focused = false;
        this._positionRevealed = false;
        this._onMouseDown = false;
        this._stickyScrollWidget = new StickyScrollWidget(this._editor);
        this._stickyLineCandidateProvider = new StickyLineCandidateProvider(this._editor, _languageFeaturesService, _languageConfigurationService);
        this._register(this._stickyScrollWidget);
        this._register(this._stickyLineCandidateProvider);
        this._widgetState = new StickyScrollWidgetState([], 0);
        this._readConfiguration();
        this._register(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(113 /* EditorOption.stickyScroll */)) {
                this._readConfiguration();
            }
        }));
        this._register(dom/* addDisposableListener */.nm(this._stickyScrollWidget.getDomNode(), dom/* EventType */.tw.CONTEXT_MENU, (event) => stickyScrollController_awaiter(this, void 0, void 0, function* () {
            this._onContextMenu(event);
        })));
        this._stickyScrollFocusedContextKey = editorContextKeys/* EditorContextKeys */.u.stickyScrollFocused.bindTo(this._contextKeyService);
        this._stickyScrollVisibleContextKey = editorContextKeys/* EditorContextKeys */.u.stickyScrollVisible.bindTo(this._contextKeyService);
        const focusTracker = this._register(dom/* trackFocus */.go(this._stickyScrollWidget.getDomNode()));
        this._register(focusTracker.onDidBlur(_ => {
            const height = this._stickyScrollWidget.getDomNode().clientHeight;
            // Suppose that the blurring is caused by scrolling, then keep the focus on the sticky scroll
            // This is determined by the fact that the height of the widget has become zero and there has been no position revealing
            if (this._positionRevealed === false && height === 0) {
                this._focusedStickyElementIndex = -1;
                this.focus();
            }
            // In all other casees, dispose the focus on the sticky scroll
            else {
                this._disposeFocusStickyScrollStore();
            }
        }));
        this._register(focusTracker.onDidFocus(_ => {
            this.focus();
        }));
        this._register(this._createClickLinkGesture());
        // Suppose that mouse down on the sticky scroll, then do not focus on the sticky scroll because this will be followed by the revealing of a position
        this._register(dom/* addDisposableListener */.nm(this._stickyScrollWidget.getDomNode(), dom/* EventType */.tw.MOUSE_DOWN, (e) => {
            this._onMouseDown = true;
        }));
    }
    static get(editor) {
        return editor.getContribution(StickyScrollController.ID);
    }
    _disposeFocusStickyScrollStore() {
        var _a;
        this._stickyScrollFocusedContextKey.set(false);
        (_a = this._focusDisposableStore) === null || _a === void 0 ? void 0 : _a.dispose();
        this._focused = false;
        this._positionRevealed = false;
        this._onMouseDown = false;
    }
    focus() {
        // If the mouse is down, do not focus on the sticky scroll
        if (this._onMouseDown) {
            this._onMouseDown = false;
            this._editor.focus();
            return;
        }
        const focusState = this._stickyScrollFocusedContextKey.get();
        if (focusState === true) {
            return;
        }
        this._focused = true;
        this._focusDisposableStore = new lifecycle/* DisposableStore */.SL();
        this._stickyScrollFocusedContextKey.set(true);
        const rootNode = this._stickyScrollWidget.getDomNode();
        rootNode.lastElementChild.focus();
        this._stickyElements = rootNode.children;
        this._focusedStickyElementIndex = this._stickyScrollWidget.lineNumbers.length - 1;
    }
    focusNext() {
        if (this._focusedStickyElementIndex < this._stickyElements.length - 1) {
            this._focusNav(true);
        }
    }
    focusPrevious() {
        if (this._focusedStickyElementIndex > 0) {
            this._focusNav(false);
        }
    }
    selectEditor() {
        this._editor.focus();
    }
    // True is next, false is previous
    _focusNav(direction) {
        this._focusedStickyElementIndex = direction ? this._focusedStickyElementIndex + 1 : this._focusedStickyElementIndex - 1;
        this._stickyElements.item(this._focusedStickyElementIndex).focus();
    }
    goToFocused() {
        const lineNumbers = this._stickyScrollWidget.lineNumbers;
        this._disposeFocusStickyScrollStore();
        this._revealPosition({ lineNumber: lineNumbers[this._focusedStickyElementIndex], column: 1 });
    }
    _revealPosition(position) {
        this._positionRevealed = true;
        this._editor.revealPosition(position);
        this._editor.setSelection(range/* Range */.e.fromPositions(position));
        this._editor.focus();
    }
    _createClickLinkGesture() {
        const linkGestureStore = new lifecycle/* DisposableStore */.SL();
        const sessionStore = new lifecycle/* DisposableStore */.SL();
        linkGestureStore.add(sessionStore);
        const gesture = new clickLinkGesture/* ClickLinkGesture */.yN(this._editor, true);
        linkGestureStore.add(gesture);
        linkGestureStore.add(gesture.onMouseMoveOrRelevantKeyDown(([mouseEvent, _keyboardEvent]) => {
            if (!this._editor.hasModel() || !mouseEvent.hasTriggerModifier) {
                sessionStore.clear();
                return;
            }
            const targetMouseEvent = mouseEvent.target;
            if (targetMouseEvent.detail === this._stickyScrollWidget.getId()
                && targetMouseEvent.element.innerText === targetMouseEvent.element.innerHTML) {
                const text = targetMouseEvent.element.innerText;
                if (this._stickyScrollWidget.hoverOnColumn === -1) {
                    return;
                }
                const lineNumber = this._stickyScrollWidget.hoverOnLine;
                const column = this._stickyScrollWidget.hoverOnColumn;
                const stickyPositionProjectedOnEditor = new range/* Range */.e(lineNumber, column, lineNumber, column + text.length);
                if (!stickyPositionProjectedOnEditor.equalsRange(this._stickyRangeProjectedOnEditor)) {
                    this._stickyRangeProjectedOnEditor = stickyPositionProjectedOnEditor;
                    sessionStore.clear();
                }
                else if (targetMouseEvent.element.style.textDecoration === 'underline') {
                    return;
                }
                const cancellationToken = new cancellation/* CancellationTokenSource */.A();
                sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => cancellationToken.dispose(true)));
                let currentHTMLChild;
                (0,goToSymbol/* getDefinitionsAtPosition */.nD)(this._languageFeaturesService.definitionProvider, this._editor.getModel(), new position/* Position */.L(lineNumber, column + 1), cancellationToken.token).then((candidateDefinitions => {
                    if (cancellationToken.token.isCancellationRequested) {
                        return;
                    }
                    if (candidateDefinitions.length !== 0) {
                        this._candidateDefinitionsLength = candidateDefinitions.length;
                        const childHTML = targetMouseEvent.element;
                        if (currentHTMLChild !== childHTML) {
                            sessionStore.clear();
                            currentHTMLChild = childHTML;
                            currentHTMLChild.style.textDecoration = 'underline';
                            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => {
                                currentHTMLChild.style.textDecoration = 'none';
                            }));
                        }
                        else if (!currentHTMLChild) {
                            currentHTMLChild = childHTML;
                            currentHTMLChild.style.textDecoration = 'underline';
                            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => {
                                currentHTMLChild.style.textDecoration = 'none';
                            }));
                        }
                    }
                    else {
                        sessionStore.clear();
                    }
                }));
            }
            else {
                sessionStore.clear();
            }
        }));
        linkGestureStore.add(gesture.onCancel(() => {
            sessionStore.clear();
        }));
        linkGestureStore.add(gesture.onExecute((e) => stickyScrollController_awaiter(this, void 0, void 0, function* () {
            if (e.target.detail !== this._stickyScrollWidget.getId()) {
                return;
            }
            if (e.hasTriggerModifier) {
                // Control click
                if (this._candidateDefinitionsLength > 1) {
                    if (this._focused) {
                        this._disposeFocusStickyScrollStore();
                    }
                    this._revealPosition({ lineNumber: this._stickyScrollWidget.hoverOnLine, column: 1 });
                }
                this._instaService.invokeFunction(inlayHintsLocations/* goToDefinitionWithLocation */.K, e, this._editor, { uri: this._editor.getModel().uri, range: this._stickyRangeProjectedOnEditor });
            }
            else if (!e.isRightClick) {
                // Normal click
                if (this._focused) {
                    this._disposeFocusStickyScrollStore();
                }
                this._revealPosition({ lineNumber: this._stickyScrollWidget.hoverOnLine, column: this._stickyScrollWidget.hoverOnColumn });
            }
        })));
        return linkGestureStore;
    }
    _onContextMenu(e) {
        const event = new mouseEvent/* StandardMouseEvent */.n(e);
        this._contextMenuService.showContextMenu({
            menuId: actions/* MenuId */.eH.StickyScrollContext,
            getAnchor: () => event,
        });
    }
    _readConfiguration() {
        const options = this._editor.getOption(113 /* EditorOption.stickyScroll */);
        if (options.enabled === false) {
            this._editor.removeOverlayWidget(this._stickyScrollWidget);
            this._sessionStore.clear();
            this._enabled = false;
            return;
        }
        else if (options.enabled && !this._enabled) {
            // When sticky scroll was just enabled, add the listeners on the sticky scroll
            this._editor.addOverlayWidget(this._stickyScrollWidget);
            this._sessionStore.add(this._editor.onDidScrollChange(() => this._renderStickyScroll()));
            this._sessionStore.add(this._editor.onDidLayoutChange(() => this._onDidResize()));
            this._sessionStore.add(this._editor.onDidChangeModelTokens((e) => this._onTokensChange(e)));
            this._sessionStore.add(this._stickyLineCandidateProvider.onDidChangeStickyScroll(() => this._renderStickyScroll()));
            this._enabled = true;
        }
        const lineNumberOption = this._editor.getOption(66 /* EditorOption.lineNumbers */);
        if (lineNumberOption.renderType === 2 /* RenderLineNumbersType.Relative */) {
            this._sessionStore.add(this._editor.onDidChangeCursorPosition(() => this._renderStickyScroll()));
        }
    }
    _needsUpdate(event) {
        const stickyLineNumbers = this._stickyScrollWidget.getCurrentLines();
        for (const stickyLineNumber of stickyLineNumbers) {
            for (const range of event.ranges) {
                if (stickyLineNumber >= range.fromLineNumber && stickyLineNumber <= range.toLineNumber) {
                    return true;
                }
            }
        }
        return false;
    }
    _onTokensChange(event) {
        if (this._needsUpdate(event)) {
            this._renderStickyScroll();
        }
    }
    _onDidResize() {
        const layoutInfo = this._editor.getLayoutInfo();
        const width = layoutInfo.width - layoutInfo.minimap.minimapCanvasOuterWidth - layoutInfo.verticalScrollbarWidth;
        this._stickyScrollWidget.getDomNode().style.width = `${width}px`;
        // Make sure sticky scroll doesn't take up more than 25% of the editor
        const theoreticalLines = layoutInfo.height / this._editor.getOption(65 /* EditorOption.lineHeight */);
        this._maxStickyLines = Math.round(theoreticalLines * .25);
    }
    _renderStickyScroll() {
        if (!(this._editor.hasModel())) {
            return;
        }
        const model = this._editor.getModel();
        const stickyLineVersion = this._stickyLineCandidateProvider.getVersionId();
        if (stickyLineVersion === undefined || stickyLineVersion === model.getVersionId()) {
            this._widgetState = this.findScrollWidgetState();
            this._stickyScrollVisibleContextKey.set(!(this._widgetState.lineNumbers.length === 0));
            if (!this._focused) {
                this._stickyScrollWidget.setState(this._widgetState);
            }
            else {
                this._stickyElements = this._stickyScrollWidget.getDomNode().children;
                // Suppose that previously the sticky scroll widget had height 0, then if there are visible lines, set the last line as focused
                if (this._focusedStickyElementIndex === -1) {
                    this._stickyScrollWidget.setState(this._widgetState);
                    this._focusedStickyElementIndex = this._stickyElements.length - 1;
                    if (this._focusedStickyElementIndex !== -1) {
                        this._stickyElements.item(this._focusedStickyElementIndex).focus();
                    }
                }
                else {
                    const focusedStickyElementLineNumber = this._stickyScrollWidget.lineNumbers[this._focusedStickyElementIndex];
                    this._stickyScrollWidget.setState(this._widgetState);
                    // Suppose that after setting the state, there are no sticky lines, set the focused index to -1
                    if (this._stickyElements.length === 0) {
                        this._focusedStickyElementIndex = -1;
                    }
                    else {
                        const previousFocusedLineNumberExists = this._stickyScrollWidget.lineNumbers.includes(focusedStickyElementLineNumber);
                        // If the line number is still there, do not change anything
                        // If the line number is not there, set the new focused line to be the last line
                        if (!previousFocusedLineNumberExists) {
                            this._focusedStickyElementIndex = this._stickyElements.length - 1;
                        }
                        this._stickyElements.item(this._focusedStickyElementIndex).focus();
                    }
                }
            }
        }
    }
    findScrollWidgetState() {
        const lineHeight = this._editor.getOption(65 /* EditorOption.lineHeight */);
        const maxNumberStickyLines = Math.min(this._maxStickyLines, this._editor.getOption(113 /* EditorOption.stickyScroll */).maxLineCount);
        const scrollTop = this._editor.getScrollTop();
        let lastLineRelativePosition = 0;
        const lineNumbers = [];
        const arrayVisibleRanges = this._editor.getVisibleRanges();
        if (arrayVisibleRanges.length !== 0) {
            const fullVisibleRange = new StickyRange(arrayVisibleRanges[0].startLineNumber, arrayVisibleRanges[arrayVisibleRanges.length - 1].endLineNumber);
            const candidateRanges = this._stickyLineCandidateProvider.getCandidateStickyLinesIntersecting(fullVisibleRange);
            for (const range of candidateRanges) {
                const start = range.startLineNumber;
                const end = range.endLineNumber;
                const depth = range.nestingDepth;
                if (end - start > 0) {
                    const topOfElementAtDepth = (depth - 1) * lineHeight;
                    const bottomOfElementAtDepth = depth * lineHeight;
                    const bottomOfBeginningLine = this._editor.getBottomForLineNumber(start) - scrollTop;
                    const topOfEndLine = this._editor.getTopForLineNumber(end) - scrollTop;
                    const bottomOfEndLine = this._editor.getBottomForLineNumber(end) - scrollTop;
                    if (topOfElementAtDepth > topOfEndLine && topOfElementAtDepth <= bottomOfEndLine) {
                        lineNumbers.push(start);
                        lastLineRelativePosition = bottomOfEndLine - bottomOfElementAtDepth;
                        break;
                    }
                    else if (bottomOfElementAtDepth > bottomOfBeginningLine && bottomOfElementAtDepth <= bottomOfEndLine) {
                        lineNumbers.push(start);
                    }
                    if (lineNumbers.length === maxNumberStickyLines) {
                        break;
                    }
                }
            }
        }
        return new StickyScrollWidgetState(lineNumbers, lastLineRelativePosition);
    }
    dispose() {
        super.dispose();
        this._sessionStore.dispose();
    }
};
StickyScrollController.ID = 'store.contrib.stickyScrollController';
StickyScrollController = stickyScrollController_decorate([
    stickyScrollController_param(1, contextView/* IContextMenuService */.i),
    stickyScrollController_param(2, languageFeatures/* ILanguageFeaturesService */.p),
    stickyScrollController_param(3, instantiation/* IInstantiationService */.TG),
    stickyScrollController_param(4, languageConfigurationRegistry/* ILanguageConfigurationService */.c_),
    stickyScrollController_param(5, languageFeatureDebounce/* ILanguageFeatureDebounceService */.A),
    stickyScrollController_param(6, contextkey/* IContextKeyService */.i6)
], StickyScrollController);


;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollActions.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var stickyScrollActions_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class ToggleStickyScroll extends actions/* Action2 */.Ke {
    constructor() {
        super({
            id: 'editor.action.toggleStickyScroll',
            title: {
                value: (0,nls/* localize */.NC)('toggleStickyScroll', "Toggle Sticky Scroll"),
                mnemonicTitle: (0,nls/* localize */.NC)({ key: 'mitoggleStickyScroll', comment: ['&& denotes a mnemonic'] }, "&&Toggle Sticky Scroll"),
                original: 'Toggle Sticky Scroll',
            },
            category: actionCommonCategories/* Categories */.R.View,
            toggled: {
                condition: contextkey/* ContextKeyExpr */.Ao.equals('config.editor.stickyScroll.enabled', true),
                title: (0,nls/* localize */.NC)('stickyScroll', "Sticky Scroll"),
                mnemonicTitle: (0,nls/* localize */.NC)({ key: 'miStickyScroll', comment: ['&& denotes a mnemonic'] }, "&&Sticky Scroll"),
            },
            menu: [
                { id: actions/* MenuId */.eH.CommandPalette },
                { id: actions/* MenuId */.eH.MenubarViewMenu, group: '5_editor', order: 2 },
                { id: actions/* MenuId */.eH.StickyScrollContext }
            ]
        });
    }
    run(accessor) {
        return stickyScrollActions_awaiter(this, void 0, void 0, function* () {
            const configurationService = accessor.get(configuration/* IConfigurationService */.Ui);
            const newValue = !configurationService.getValue('editor.stickyScroll.enabled');
            return configurationService.updateValue('editor.stickyScroll.enabled', newValue);
        });
    }
}
const weight = 100 /* KeybindingWeight.EditorContrib */;
class FocusStickyScroll extends editorExtensions/* EditorAction2 */.x1 {
    constructor() {
        super({
            id: 'editor.action.focusStickyScroll',
            title: {
                value: (0,nls/* localize */.NC)('focusStickyScroll', "Focus Sticky Scroll"),
                mnemonicTitle: (0,nls/* localize */.NC)({ key: 'mifocusStickyScroll', comment: ['&& denotes a mnemonic'] }, "&&Focus Sticky Scroll"),
                original: 'Focus Sticky Scroll',
            },
            precondition: contextkey/* ContextKeyExpr */.Ao.and(contextkey/* ContextKeyExpr */.Ao.has('config.editor.stickyScroll.enabled'), editorContextKeys/* EditorContextKeys */.u.stickyScrollVisible),
            menu: [
                { id: actions/* MenuId */.eH.CommandPalette },
            ]
        });
    }
    runEditorCommand(_accessor, editor) {
        var _a;
        (_a = StickyScrollController.get(editor)) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
class SelectNextStickyScrollLine extends editorExtensions/* EditorAction2 */.x1 {
    constructor() {
        super({
            id: 'editor.action.selectNextStickyScrollLine',
            title: {
                value: (0,nls/* localize */.NC)('selectNextStickyScrollLine.title', "Select next sticky scroll line"),
                original: 'Select next sticky scroll line'
            },
            precondition: editorContextKeys/* EditorContextKeys */.u.stickyScrollFocused.isEqualTo(true),
            keybinding: {
                weight,
                primary: 18 /* KeyCode.DownArrow */
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        var _a;
        (_a = StickyScrollController.get(editor)) === null || _a === void 0 ? void 0 : _a.focusNext();
    }
}
class SelectPreviousStickyScrollLine extends editorExtensions/* EditorAction2 */.x1 {
    constructor() {
        super({
            id: 'editor.action.selectPreviousStickyScrollLine',
            title: {
                value: (0,nls/* localize */.NC)('selectPreviousStickyScrollLine.title', "Select previous sticky scroll line"),
                original: 'Select previous sticky scroll line'
            },
            precondition: editorContextKeys/* EditorContextKeys */.u.stickyScrollFocused.isEqualTo(true),
            keybinding: {
                weight,
                primary: 16 /* KeyCode.UpArrow */
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        var _a;
        (_a = StickyScrollController.get(editor)) === null || _a === void 0 ? void 0 : _a.focusPrevious();
    }
}
class GoToStickyScrollLine extends editorExtensions/* EditorAction2 */.x1 {
    constructor() {
        super({
            id: 'editor.action.goToFocusedStickyScrollLine',
            title: {
                value: (0,nls/* localize */.NC)('goToFocusedStickyScrollLine.title', "Go to focused sticky scroll line"),
                original: 'Go to focused sticky scroll line'
            },
            precondition: editorContextKeys/* EditorContextKeys */.u.stickyScrollFocused.isEqualTo(true),
            keybinding: {
                weight,
                primary: 3 /* KeyCode.Enter */
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        var _a;
        (_a = StickyScrollController.get(editor)) === null || _a === void 0 ? void 0 : _a.goToFocused();
    }
}
class SelectEditor extends editorExtensions/* EditorAction2 */.x1 {
    constructor() {
        super({
            id: 'editor.action.selectEditor',
            title: {
                value: (0,nls/* localize */.NC)('selectEditor.title', "Select Editor"),
                original: 'Select Editor'
            },
            precondition: editorContextKeys/* EditorContextKeys */.u.stickyScrollFocused.isEqualTo(true),
            keybinding: {
                weight,
                primary: 9 /* KeyCode.Escape */
            }
        });
    }
    runEditorCommand(_accessor, editor) {
        var _a;
        (_a = StickyScrollController.get(editor)) === null || _a === void 0 ? void 0 : _a.selectEditor();
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




(0,editorExtensions/* registerEditorContribution */._K)(StickyScrollController.ID, StickyScrollController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
(0,actions/* registerAction2 */.r1)(ToggleStickyScroll);
(0,actions/* registerAction2 */.r1)(FocusStickyScroll);
(0,actions/* registerAction2 */.r1)(SelectPreviousStickyScrollLine);
(0,actions/* registerAction2 */.r1)(SelectNextStickyScrollLine);
(0,actions/* registerAction2 */.r1)(GoToStickyScrollLine);
(0,actions/* registerAction2 */.r1)(SelectEditor);


/***/ })

}]);