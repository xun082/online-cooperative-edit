"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-a95a56ed"],{

/***/ 30117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-mouse-cursor-text {\n\tcursor: text;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 21489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-progress-container {\n\twidth: 100%;\n\theight: 5px;\n\toverflow: hidden; /* keep progress bit in bounds */\n}\n\n.monaco-progress-container .progress-bit {\n\twidth: 2%;\n\theight: 5px;\n\tposition: absolute;\n\tleft: 0;\n\tdisplay: none;\n}\n\n.monaco-progress-container.active .progress-bit {\n\tdisplay: inherit;\n}\n\n.monaco-progress-container.discrete .progress-bit {\n\tleft: 0;\n\ttransition: width 100ms linear;\n}\n\n.monaco-progress-container.discrete.done .progress-bit {\n\twidth: 100%;\n}\n\n.monaco-progress-container.infinite .progress-bit {\n\tanimation-name: progress;\n\tanimation-duration: 4s;\n\tanimation-iteration-count: infinite;\n\ttransform: translate3d(0px, 0px, 0px);\n\tanimation-timing-function: linear;\n}\n\n.monaco-progress-container.infinite.infinite-long-running .progress-bit {\n\t/*\n\t\tThe more smooth `linear` timing function can cause\n\t\thigher GPU consumption as indicated in\n\t\thttps://github.com/microsoft/vscode/issues/97900 &\n\t\thttps://github.com/microsoft/vscode/issues/138396\n\t*/\n\tanimation-timing-function: steps(100);\n}\n\n/**\n * The progress bit has a width: 2% (1/50) of the parent container. The animation moves it from 0% to 100% of\n * that container. Since translateX is relative to the progress bit size, we have to multiple it with\n * its relative size to the parent container:\n * parent width: 5000%\n *    bit width: 100%\n * translateX should be as follow:\n *  50%: 5000% * 50% - 50% (set to center) = 2450%\n * 100%: 5000% * 100% - 100% (do not overflow) = 4900%\n */\n@keyframes progress { from { transform: translateX(0%) scaleX(1) } 50% { transform: translateX(2500%) scaleX(3) } to { transform: translateX(4900%) scaleX(1) } }\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 84293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n:root {\n\t--vscode-sash-size: 4px;\n}\n\n.monaco-sash {\n\tposition: absolute;\n\tz-index: 35;\n\ttouch-action: none;\n}\n\n.monaco-sash.disabled {\n\tpointer-events: none;\n}\n\n.monaco-sash.mac.vertical {\n\tcursor: col-resize;\n}\n\n.monaco-sash.vertical.minimum {\n\tcursor: e-resize;\n}\n\n.monaco-sash.vertical.maximum {\n\tcursor: w-resize;\n}\n\n.monaco-sash.mac.horizontal {\n\tcursor: row-resize;\n}\n\n.monaco-sash.horizontal.minimum {\n\tcursor: s-resize;\n}\n\n.monaco-sash.horizontal.maximum {\n\tcursor: n-resize;\n}\n\n.monaco-sash.disabled {\n\tcursor: default !important;\n\tpointer-events: none !important;\n}\n\n.monaco-sash.vertical {\n\tcursor: ew-resize;\n\ttop: 0;\n\twidth: var(--vscode-sash-size);\n\theight: 100%;\n}\n\n.monaco-sash.horizontal {\n\tcursor: ns-resize;\n\tleft: 0;\n\twidth: 100%;\n\theight: var(--vscode-sash-size);\n}\n\n.monaco-sash:not(.disabled) > .orthogonal-drag-handle {\n\tcontent: \" \";\n\theight: calc(var(--vscode-sash-size) * 2);\n\twidth: calc(var(--vscode-sash-size) * 2);\n\tz-index: 100;\n\tdisplay: block;\n\tcursor: all-scroll;\n\tposition: absolute;\n}\n\n.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)\n\t> .orthogonal-drag-handle.start,\n.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)\n\t> .orthogonal-drag-handle.end {\n\tcursor: nwse-resize;\n}\n\n.monaco-sash.horizontal.orthogonal-edge-north:not(.disabled)\n\t> .orthogonal-drag-handle.end,\n.monaco-sash.horizontal.orthogonal-edge-south:not(.disabled)\n\t> .orthogonal-drag-handle.start {\n\tcursor: nesw-resize;\n}\n\n.monaco-sash.vertical > .orthogonal-drag-handle.start {\n\tleft: calc(var(--vscode-sash-size) * -0.5);\n\ttop: calc(var(--vscode-sash-size) * -1);\n}\n.monaco-sash.vertical > .orthogonal-drag-handle.end {\n\tleft: calc(var(--vscode-sash-size) * -0.5);\n\tbottom: calc(var(--vscode-sash-size) * -1);\n}\n.monaco-sash.horizontal > .orthogonal-drag-handle.start {\n\ttop: calc(var(--vscode-sash-size) * -0.5);\n\tleft: calc(var(--vscode-sash-size) * -1);\n}\n.monaco-sash.horizontal > .orthogonal-drag-handle.end {\n\ttop: calc(var(--vscode-sash-size) * -0.5);\n\tright: calc(var(--vscode-sash-size) * -1);\n}\n\n.monaco-sash:before {\n\tcontent: '';\n\tpointer-events: none;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: transparent;\n}\n\n.monaco-workbench:not(.reduce-motion) .monaco-sash:before {\n\ttransition: background-color 0.1s ease-out;\n}\n\n.monaco-sash.hover:before,\n.monaco-sash.active:before {\n\tbackground: var(--vscode-sash-hoverBorder);\n}\n\n.monaco-sash.vertical:before {\n\twidth: var(--vscode-sash-hover-size);\n\tleft: calc(50% - (var(--vscode-sash-hover-size) / 2));\n}\n\n.monaco-sash.horizontal:before {\n\theight: var(--vscode-sash-hover-size);\n\ttop: calc(50% - (var(--vscode-sash-hover-size) / 2));\n}\n\n.pointer-events-disabled {\n\tpointer-events: none !important;\n}\n\n/** Debug **/\n\n.monaco-sash.debug {\n\tbackground: cyan;\n}\n\n.monaco-sash.debug.disabled {\n\tbackground: rgba(0, 255, 255, 0.2);\n}\n\n.monaco-sash.debug:not(.disabled) > .orthogonal-drag-handle {\n\tbackground: red;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: function() { return /* binding */ MOUSE_CURSOR_TEXT_CSS_CLASS_NAME; }
});

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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.css
var mouseCursor = __webpack_require__(30117);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(mouseCursor/* default */.Z, options);




       /* harmony default export */ var mouseCursor_mouseCursor = (mouseCursor/* default */.Z && mouseCursor/* default */.Z.locals ? mouseCursor/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const MOUSE_CURSOR_TEXT_CSS_CLASS_NAME = `monaco-mouse-cursor-text`;


/***/ }),

/***/ 9155:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: function() { return /* binding */ ProgressBar; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.css
var progressbar = __webpack_require__(21489);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(progressbar/* default */.Z, options);




       /* harmony default export */ var progressbar_progressbar = (progressbar/* default */.Z && progressbar/* default */.Z.locals ? progressbar/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




const CSS_DONE = 'done';
const CSS_ACTIVE = 'active';
const CSS_INFINITE = 'infinite';
const CSS_INFINITE_LONG_RUNNING = 'infinite-long-running';
const CSS_DISCRETE = 'discrete';
/**
 * A progress bar with support for infinite or discrete progress.
 */
class ProgressBar extends lifecycle/* Disposable */.JT {
    constructor(container, options) {
        super();
        this.workedVal = 0;
        this.showDelayedScheduler = this._register(new common_async/* RunOnceScheduler */.pY(() => (0,dom/* show */.$Z)(this.element), 0));
        this.longRunningScheduler = this._register(new common_async/* RunOnceScheduler */.pY(() => this.infiniteLongRunning(), ProgressBar.LONG_RUNNING_INFINITE_THRESHOLD));
        this.create(container, options);
    }
    create(container, options) {
        this.element = document.createElement('div');
        this.element.classList.add('monaco-progress-container');
        this.element.setAttribute('role', 'progressbar');
        this.element.setAttribute('aria-valuemin', '0');
        container.appendChild(this.element);
        this.bit = document.createElement('div');
        this.bit.classList.add('progress-bit');
        this.bit.style.backgroundColor = (options === null || options === void 0 ? void 0 : options.progressBarBackground) || '#0E70C0';
        this.element.appendChild(this.bit);
    }
    off() {
        this.bit.style.width = 'inherit';
        this.bit.style.opacity = '1';
        this.element.classList.remove(CSS_ACTIVE, CSS_INFINITE, CSS_INFINITE_LONG_RUNNING, CSS_DISCRETE);
        this.workedVal = 0;
        this.totalWork = undefined;
        this.longRunningScheduler.cancel();
    }
    /**
     * Stops the progressbar from showing any progress instantly without fading out.
     */
    stop() {
        return this.doDone(false);
    }
    doDone(delayed) {
        this.element.classList.add(CSS_DONE);
        // discrete: let it grow to 100% width and hide afterwards
        if (!this.element.classList.contains(CSS_INFINITE)) {
            this.bit.style.width = 'inherit';
            if (delayed) {
                setTimeout(() => this.off(), 200);
            }
            else {
                this.off();
            }
        }
        // infinite: let it fade out and hide afterwards
        else {
            this.bit.style.opacity = '0';
            if (delayed) {
                setTimeout(() => this.off(), 200);
            }
            else {
                this.off();
            }
        }
        return this;
    }
    /**
     * Use this mode to indicate progress that has no total number of work units.
     */
    infinite() {
        this.bit.style.width = '2%';
        this.bit.style.opacity = '1';
        this.element.classList.remove(CSS_DISCRETE, CSS_DONE, CSS_INFINITE_LONG_RUNNING);
        this.element.classList.add(CSS_ACTIVE, CSS_INFINITE);
        this.longRunningScheduler.schedule();
        return this;
    }
    infiniteLongRunning() {
        this.element.classList.add(CSS_INFINITE_LONG_RUNNING);
    }
    getContainer() {
        return this.element;
    }
}
/**
 * After a certain time of showing the progress bar, switch
 * to long-running mode and throttle animations to reduce
 * the pressure on the GPU process.
 *
 * https://github.com/microsoft/vscode/issues/97900
 * https://github.com/microsoft/vscode/issues/138396
 */
ProgressBar.LONG_RUNNING_INFINITE_THRESHOLD = 10000;


/***/ }),

/***/ 75770:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: function() { return /* binding */ ResizableHTMLElement; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91154);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96290);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class ResizableHTMLElement {
    constructor() {
        this._onDidWillResize = new _common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5();
        this.onDidWillResize = this._onDidWillResize.event;
        this._onDidResize = new _common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5();
        this.onDidResize = this._onDidResize.event;
        this._sashListener = new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .DisposableStore */ .SL();
        this._size = new _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .Dimension */ .Ro(0, 0);
        this._minSize = new _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .Dimension */ .Ro(0, 0);
        this._maxSize = new _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .Dimension */ .Ro(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        this.domNode = document.createElement('div');
        this._eastSash = new _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .Sash */ .g(this.domNode, { getVerticalSashLeft: () => this._size.width }, { orientation: 0 /* Orientation.VERTICAL */ });
        this._westSash = new _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .Sash */ .g(this.domNode, { getVerticalSashLeft: () => 0 }, { orientation: 0 /* Orientation.VERTICAL */ });
        this._northSash = new _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .Sash */ .g(this.domNode, { getHorizontalSashTop: () => 0 }, { orientation: 1 /* Orientation.HORIZONTAL */, orthogonalEdge: _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .OrthogonalEdge */ .l.North });
        this._southSash = new _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .Sash */ .g(this.domNode, { getHorizontalSashTop: () => this._size.height }, { orientation: 1 /* Orientation.HORIZONTAL */, orthogonalEdge: _sash_sash_js__WEBPACK_IMPORTED_MODULE_1__/* .OrthogonalEdge */ .l.South });
        this._northSash.orthogonalStartSash = this._westSash;
        this._northSash.orthogonalEndSash = this._eastSash;
        this._southSash.orthogonalStartSash = this._westSash;
        this._southSash.orthogonalEndSash = this._eastSash;
        let currentSize;
        let deltaY = 0;
        let deltaX = 0;
        this._sashListener.add(_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.any(this._northSash.onDidStart, this._eastSash.onDidStart, this._southSash.onDidStart, this._westSash.onDidStart)(() => {
            if (currentSize === undefined) {
                this._onDidWillResize.fire();
                currentSize = this._size;
                deltaY = 0;
                deltaX = 0;
            }
        }));
        this._sashListener.add(_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.any(this._northSash.onDidEnd, this._eastSash.onDidEnd, this._southSash.onDidEnd, this._westSash.onDidEnd)(() => {
            if (currentSize !== undefined) {
                currentSize = undefined;
                deltaY = 0;
                deltaX = 0;
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
        this._sashListener.add(this._eastSash.onDidChange(e => {
            if (currentSize) {
                deltaX = e.currentX - e.startX;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, east: true });
            }
        }));
        this._sashListener.add(this._westSash.onDidChange(e => {
            if (currentSize) {
                deltaX = -(e.currentX - e.startX);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, west: true });
            }
        }));
        this._sashListener.add(this._northSash.onDidChange(e => {
            if (currentSize) {
                deltaY = -(e.currentY - e.startY);
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, north: true });
            }
        }));
        this._sashListener.add(this._southSash.onDidChange(e => {
            if (currentSize) {
                deltaY = e.currentY - e.startY;
                this.layout(currentSize.height + deltaY, currentSize.width + deltaX);
                this._onDidResize.fire({ dimension: this._size, done: false, south: true });
            }
        }));
        this._sashListener.add(_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.any(this._eastSash.onDidReset, this._westSash.onDidReset)(e => {
            if (this._preferredSize) {
                this.layout(this._size.height, this._preferredSize.width);
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
        this._sashListener.add(_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.any(this._northSash.onDidReset, this._southSash.onDidReset)(e => {
            if (this._preferredSize) {
                this.layout(this._preferredSize.height, this._size.width);
                this._onDidResize.fire({ dimension: this._size, done: true });
            }
        }));
    }
    dispose() {
        this._northSash.dispose();
        this._southSash.dispose();
        this._eastSash.dispose();
        this._westSash.dispose();
        this._sashListener.dispose();
        this._onDidResize.dispose();
        this._onDidWillResize.dispose();
        this.domNode.remove();
    }
    enableSashes(north, east, south, west) {
        this._northSash.state = north ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._eastSash.state = east ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._southSash.state = south ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
        this._westSash.state = west ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
    }
    layout(height = this.size.height, width = this.size.width) {
        const { height: minHeight, width: minWidth } = this._minSize;
        const { height: maxHeight, width: maxWidth } = this._maxSize;
        height = Math.max(minHeight, Math.min(maxHeight, height));
        width = Math.max(minWidth, Math.min(maxWidth, width));
        const newSize = new _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .Dimension */ .Ro(width, height);
        if (!_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .Dimension */ .Ro.equals(newSize, this._size)) {
            this.domNode.style.height = height + 'px';
            this.domNode.style.width = width + 'px';
            this._size = newSize;
            this._northSash.layout();
            this._eastSash.layout();
            this._southSash.layout();
            this._westSash.layout();
        }
    }
    clearSashHoverState() {
        this._eastSash.clearSashHoverState();
        this._westSash.clearSashHoverState();
        this._northSash.clearSashHoverState();
        this._southSash.clearSashHoverState();
    }
    get size() {
        return this._size;
    }
    set maxSize(value) {
        this._maxSize = value;
    }
    get maxSize() {
        return this._maxSize;
    }
    set minSize(value) {
        this._minSize = value;
    }
    get minSize() {
        return this._minSize;
    }
    set preferredSize(value) {
        this._preferredSize = value;
    }
    get preferredSize() {
        return this._preferredSize;
    }
}


/***/ }),

/***/ 91154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: function() { return /* binding */ OrthogonalEdge; },
  g: function() { return /* binding */ Sash; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(91645);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(58122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/decorators.js
var decorators = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.css
var sash = __webpack_require__(84293);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(sash/* default */.Z, options);




       /* harmony default export */ var sash_sash = (sash/* default */.Z && sash/* default */.Z.locals ? sash/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js
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









/**
 * Allow the sashes to be visible at runtime.
 * @remark Use for development purposes only.
 */
const DEBUG = false;
var OrthogonalEdge;
(function (OrthogonalEdge) {
    OrthogonalEdge["North"] = "north";
    OrthogonalEdge["South"] = "south";
    OrthogonalEdge["East"] = "east";
    OrthogonalEdge["West"] = "west";
})(OrthogonalEdge || (OrthogonalEdge = {}));
let globalSize = 4;
const onDidChangeGlobalSize = new common_event/* Emitter */.Q5();
let globalHoverDelay = 300;
const onDidChangeHoverDelay = new common_event/* Emitter */.Q5();
class MouseEventFactory {
    constructor() {
        this.disposables = new lifecycle/* DisposableStore */.SL();
    }
    get onPointerMove() {
        return this.disposables.add(new browser_event/* DomEmitter */.Y(window, 'mousemove')).event;
    }
    get onPointerUp() {
        return this.disposables.add(new browser_event/* DomEmitter */.Y(window, 'mouseup')).event;
    }
    dispose() {
        this.disposables.dispose();
    }
}
__decorate([
    decorators/* memoize */.H
], MouseEventFactory.prototype, "onPointerMove", null);
__decorate([
    decorators/* memoize */.H
], MouseEventFactory.prototype, "onPointerUp", null);
class GestureEventFactory {
    get onPointerMove() {
        return this.disposables.add(new browser_event/* DomEmitter */.Y(this.el, touch/* EventType */.t.Change)).event;
    }
    get onPointerUp() {
        return this.disposables.add(new browser_event/* DomEmitter */.Y(this.el, touch/* EventType */.t.End)).event;
    }
    constructor(el) {
        this.el = el;
        this.disposables = new lifecycle/* DisposableStore */.SL();
    }
    dispose() {
        this.disposables.dispose();
    }
}
__decorate([
    decorators/* memoize */.H
], GestureEventFactory.prototype, "onPointerMove", null);
__decorate([
    decorators/* memoize */.H
], GestureEventFactory.prototype, "onPointerUp", null);
class OrthogonalPointerEventFactory {
    get onPointerMove() {
        return this.factory.onPointerMove;
    }
    get onPointerUp() {
        return this.factory.onPointerUp;
    }
    constructor(factory) {
        this.factory = factory;
    }
    dispose() {
        // noop
    }
}
__decorate([
    decorators/* memoize */.H
], OrthogonalPointerEventFactory.prototype, "onPointerMove", null);
__decorate([
    decorators/* memoize */.H
], OrthogonalPointerEventFactory.prototype, "onPointerUp", null);
const PointerEventsDisabledCssClass = 'pointer-events-disabled';
/**
 * The {@link Sash} is the UI component which allows the user to resize other
 * components. It's usually an invisible horizontal or vertical line which, when
 * hovered, becomes highlighted and can be dragged along the perpendicular dimension
 * to its direction.
 *
 * Features:
 * - Touch event handling
 * - Corner sash support
 * - Hover with different mouse cursor support
 * - Configurable hover size
 * - Linked sash support, for 2x2 corner sashes
 */
class Sash extends lifecycle/* Disposable */.JT {
    get state() { return this._state; }
    get orthogonalStartSash() { return this._orthogonalStartSash; }
    get orthogonalEndSash() { return this._orthogonalEndSash; }
    /**
     * The state of a sash defines whether it can be interacted with by the user
     * as well as what mouse cursor to use, when hovered.
     */
    set state(state) {
        if (this._state === state) {
            return;
        }
        this.el.classList.toggle('disabled', state === 0 /* SashState.Disabled */);
        this.el.classList.toggle('minimum', state === 1 /* SashState.AtMinimum */);
        this.el.classList.toggle('maximum', state === 2 /* SashState.AtMaximum */);
        this._state = state;
        this.onDidEnablementChange.fire(state);
    }
    /**
     * A reference to another sash, perpendicular to this one, which
     * aligns at the start of this one. A corner sash will be created
     * automatically at that location.
     *
     * The start of a horizontal sash is its left-most position.
     * The start of a vertical sash is its top-most position.
     */
    set orthogonalStartSash(sash) {
        this.orthogonalStartDragHandleDisposables.clear();
        this.orthogonalStartSashDisposables.clear();
        if (sash) {
            const onChange = (state) => {
                this.orthogonalStartDragHandleDisposables.clear();
                if (state !== 0 /* SashState.Disabled */) {
                    this._orthogonalStartDragHandle = (0,dom/* append */.R3)(this.el, (0,dom.$)('.orthogonal-drag-handle.start'));
                    this.orthogonalStartDragHandleDisposables.add((0,lifecycle/* toDisposable */.OF)(() => this._orthogonalStartDragHandle.remove()));
                    this.orthogonalStartDragHandleDisposables.add(new browser_event/* DomEmitter */.Y(this._orthogonalStartDragHandle, 'mouseenter')).event(() => Sash.onMouseEnter(sash), undefined, this.orthogonalStartDragHandleDisposables);
                    this.orthogonalStartDragHandleDisposables.add(new browser_event/* DomEmitter */.Y(this._orthogonalStartDragHandle, 'mouseleave')).event(() => Sash.onMouseLeave(sash), undefined, this.orthogonalStartDragHandleDisposables);
                }
            };
            this.orthogonalStartSashDisposables.add(sash.onDidEnablementChange.event(onChange, this));
            onChange(sash.state);
        }
        this._orthogonalStartSash = sash;
    }
    /**
     * A reference to another sash, perpendicular to this one, which
     * aligns at the end of this one. A corner sash will be created
     * automatically at that location.
     *
     * The end of a horizontal sash is its right-most position.
     * The end of a vertical sash is its bottom-most position.
     */
    set orthogonalEndSash(sash) {
        this.orthogonalEndDragHandleDisposables.clear();
        this.orthogonalEndSashDisposables.clear();
        if (sash) {
            const onChange = (state) => {
                this.orthogonalEndDragHandleDisposables.clear();
                if (state !== 0 /* SashState.Disabled */) {
                    this._orthogonalEndDragHandle = (0,dom/* append */.R3)(this.el, (0,dom.$)('.orthogonal-drag-handle.end'));
                    this.orthogonalEndDragHandleDisposables.add((0,lifecycle/* toDisposable */.OF)(() => this._orthogonalEndDragHandle.remove()));
                    this.orthogonalEndDragHandleDisposables.add(new browser_event/* DomEmitter */.Y(this._orthogonalEndDragHandle, 'mouseenter')).event(() => Sash.onMouseEnter(sash), undefined, this.orthogonalEndDragHandleDisposables);
                    this.orthogonalEndDragHandleDisposables.add(new browser_event/* DomEmitter */.Y(this._orthogonalEndDragHandle, 'mouseleave')).event(() => Sash.onMouseLeave(sash), undefined, this.orthogonalEndDragHandleDisposables);
                }
            };
            this.orthogonalEndSashDisposables.add(sash.onDidEnablementChange.event(onChange, this));
            onChange(sash.state);
        }
        this._orthogonalEndSash = sash;
    }
    constructor(container, layoutProvider, options) {
        super();
        this.hoverDelay = globalHoverDelay;
        this.hoverDelayer = this._register(new common_async/* Delayer */.vp(this.hoverDelay));
        this._state = 3 /* SashState.Enabled */;
        this.onDidEnablementChange = this._register(new common_event/* Emitter */.Q5());
        this._onDidStart = this._register(new common_event/* Emitter */.Q5());
        this._onDidChange = this._register(new common_event/* Emitter */.Q5());
        this._onDidReset = this._register(new common_event/* Emitter */.Q5());
        this._onDidEnd = this._register(new common_event/* Emitter */.Q5());
        this.orthogonalStartSashDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        this.orthogonalStartDragHandleDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        this.orthogonalEndSashDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        this.orthogonalEndDragHandleDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        /**
         * An event which fires whenever the user starts dragging this sash.
         */
        this.onDidStart = this._onDidStart.event;
        /**
         * An event which fires whenever the user moves the mouse while
         * dragging this sash.
         */
        this.onDidChange = this._onDidChange.event;
        /**
         * An event which fires whenever the user double clicks this sash.
         */
        this.onDidReset = this._onDidReset.event;
        /**
         * An event which fires whenever the user stops dragging this sash.
         */
        this.onDidEnd = this._onDidEnd.event;
        /**
         * A linked sash will be forwarded the same user interactions and events
         * so it moves exactly the same way as this sash.
         *
         * Useful in 2x2 grids. Not meant for widespread usage.
         */
        this.linkedSash = undefined;
        this.el = (0,dom/* append */.R3)(container, (0,dom.$)('.monaco-sash'));
        if (options.orthogonalEdge) {
            this.el.classList.add(`orthogonal-edge-${options.orthogonalEdge}`);
        }
        if (platform/* isMacintosh */.dz) {
            this.el.classList.add('mac');
        }
        const onMouseDown = this._register(new browser_event/* DomEmitter */.Y(this.el, 'mousedown')).event;
        this._register(onMouseDown(e => this.onPointerStart(e, new MouseEventFactory()), this));
        const onMouseDoubleClick = this._register(new browser_event/* DomEmitter */.Y(this.el, 'dblclick')).event;
        this._register(onMouseDoubleClick(this.onPointerDoublePress, this));
        const onMouseEnter = this._register(new browser_event/* DomEmitter */.Y(this.el, 'mouseenter')).event;
        this._register(onMouseEnter(() => Sash.onMouseEnter(this)));
        const onMouseLeave = this._register(new browser_event/* DomEmitter */.Y(this.el, 'mouseleave')).event;
        this._register(onMouseLeave(() => Sash.onMouseLeave(this)));
        this._register(touch/* Gesture */.o.addTarget(this.el));
        const onTouchStart = this._register(new browser_event/* DomEmitter */.Y(this.el, touch/* EventType */.t.Start)).event;
        this._register(onTouchStart(e => this.onPointerStart(e, new GestureEventFactory(this.el)), this));
        const onTap = this._register(new browser_event/* DomEmitter */.Y(this.el, touch/* EventType */.t.Tap)).event;
        let doubleTapTimeout = undefined;
        this._register(onTap(event => {
            if (doubleTapTimeout) {
                clearTimeout(doubleTapTimeout);
                doubleTapTimeout = undefined;
                this.onPointerDoublePress(event);
                return;
            }
            clearTimeout(doubleTapTimeout);
            doubleTapTimeout = setTimeout(() => doubleTapTimeout = undefined, 250);
        }, this));
        if (typeof options.size === 'number') {
            this.size = options.size;
            if (options.orientation === 0 /* Orientation.VERTICAL */) {
                this.el.style.width = `${this.size}px`;
            }
            else {
                this.el.style.height = `${this.size}px`;
            }
        }
        else {
            this.size = globalSize;
            this._register(onDidChangeGlobalSize.event(size => {
                this.size = size;
                this.layout();
            }));
        }
        this._register(onDidChangeHoverDelay.event(delay => this.hoverDelay = delay));
        this.layoutProvider = layoutProvider;
        this.orthogonalStartSash = options.orthogonalStartSash;
        this.orthogonalEndSash = options.orthogonalEndSash;
        this.orientation = options.orientation || 0 /* Orientation.VERTICAL */;
        if (this.orientation === 1 /* Orientation.HORIZONTAL */) {
            this.el.classList.add('horizontal');
            this.el.classList.remove('vertical');
        }
        else {
            this.el.classList.remove('horizontal');
            this.el.classList.add('vertical');
        }
        this.el.classList.toggle('debug', DEBUG);
        this.layout();
    }
    onPointerStart(event, pointerEventFactory) {
        dom/* EventHelper */.zB.stop(event);
        let isMultisashResize = false;
        if (!event.__orthogonalSashEvent) {
            const orthogonalSash = this.getOrthogonalSash(event);
            if (orthogonalSash) {
                isMultisashResize = true;
                event.__orthogonalSashEvent = true;
                orthogonalSash.onPointerStart(event, new OrthogonalPointerEventFactory(pointerEventFactory));
            }
        }
        if (this.linkedSash && !event.__linkedSashEvent) {
            event.__linkedSashEvent = true;
            this.linkedSash.onPointerStart(event, new OrthogonalPointerEventFactory(pointerEventFactory));
        }
        if (!this.state) {
            return;
        }
        const iframes = document.getElementsByTagName('iframe');
        for (const iframe of iframes) {
            iframe.classList.add(PointerEventsDisabledCssClass); // disable mouse events on iframes as long as we drag the sash
        }
        const startX = event.pageX;
        const startY = event.pageY;
        const altKey = event.altKey;
        const startEvent = { startX, currentX: startX, startY, currentY: startY, altKey };
        this.el.classList.add('active');
        this._onDidStart.fire(startEvent);
        // fix https://github.com/microsoft/vscode/issues/21675
        const style = (0,dom/* createStyleSheet */.dS)(this.el);
        const updateStyle = () => {
            let cursor = '';
            if (isMultisashResize) {
                cursor = 'all-scroll';
            }
            else if (this.orientation === 1 /* Orientation.HORIZONTAL */) {
                if (this.state === 1 /* SashState.AtMinimum */) {
                    cursor = 's-resize';
                }
                else if (this.state === 2 /* SashState.AtMaximum */) {
                    cursor = 'n-resize';
                }
                else {
                    cursor = platform/* isMacintosh */.dz ? 'row-resize' : 'ns-resize';
                }
            }
            else {
                if (this.state === 1 /* SashState.AtMinimum */) {
                    cursor = 'e-resize';
                }
                else if (this.state === 2 /* SashState.AtMaximum */) {
                    cursor = 'w-resize';
                }
                else {
                    cursor = platform/* isMacintosh */.dz ? 'col-resize' : 'ew-resize';
                }
            }
            style.textContent = `* { cursor: ${cursor} !important; }`;
        };
        const disposables = new lifecycle/* DisposableStore */.SL();
        updateStyle();
        if (!isMultisashResize) {
            this.onDidEnablementChange.event(updateStyle, null, disposables);
        }
        const onPointerMove = (e) => {
            dom/* EventHelper */.zB.stop(e, false);
            const event = { startX, currentX: e.pageX, startY, currentY: e.pageY, altKey };
            this._onDidChange.fire(event);
        };
        const onPointerUp = (e) => {
            dom/* EventHelper */.zB.stop(e, false);
            this.el.removeChild(style);
            this.el.classList.remove('active');
            this._onDidEnd.fire();
            disposables.dispose();
            for (const iframe of iframes) {
                iframe.classList.remove(PointerEventsDisabledCssClass);
            }
        };
        pointerEventFactory.onPointerMove(onPointerMove, null, disposables);
        pointerEventFactory.onPointerUp(onPointerUp, null, disposables);
        disposables.add(pointerEventFactory);
    }
    onPointerDoublePress(e) {
        const orthogonalSash = this.getOrthogonalSash(e);
        if (orthogonalSash) {
            orthogonalSash._onDidReset.fire();
        }
        if (this.linkedSash) {
            this.linkedSash._onDidReset.fire();
        }
        this._onDidReset.fire();
    }
    static onMouseEnter(sash, fromLinkedSash = false) {
        if (sash.el.classList.contains('active')) {
            sash.hoverDelayer.cancel();
            sash.el.classList.add('hover');
        }
        else {
            sash.hoverDelayer.trigger(() => sash.el.classList.add('hover'), sash.hoverDelay).then(undefined, () => { });
        }
        if (!fromLinkedSash && sash.linkedSash) {
            Sash.onMouseEnter(sash.linkedSash, true);
        }
    }
    static onMouseLeave(sash, fromLinkedSash = false) {
        sash.hoverDelayer.cancel();
        sash.el.classList.remove('hover');
        if (!fromLinkedSash && sash.linkedSash) {
            Sash.onMouseLeave(sash.linkedSash, true);
        }
    }
    /**
     * Forcefully stop any user interactions with this sash.
     * Useful when hiding a parent component, while the user is still
     * interacting with the sash.
     */
    clearSashHoverState() {
        Sash.onMouseLeave(this);
    }
    /**
     * Layout the sash. The sash will size and position itself
     * based on its provided {@link ISashLayoutProvider layout provider}.
     */
    layout() {
        if (this.orientation === 0 /* Orientation.VERTICAL */) {
            const verticalProvider = this.layoutProvider;
            this.el.style.left = verticalProvider.getVerticalSashLeft(this) - (this.size / 2) + 'px';
            if (verticalProvider.getVerticalSashTop) {
                this.el.style.top = verticalProvider.getVerticalSashTop(this) + 'px';
            }
            if (verticalProvider.getVerticalSashHeight) {
                this.el.style.height = verticalProvider.getVerticalSashHeight(this) + 'px';
            }
        }
        else {
            const horizontalProvider = this.layoutProvider;
            this.el.style.top = horizontalProvider.getHorizontalSashTop(this) - (this.size / 2) + 'px';
            if (horizontalProvider.getHorizontalSashLeft) {
                this.el.style.left = horizontalProvider.getHorizontalSashLeft(this) + 'px';
            }
            if (horizontalProvider.getHorizontalSashWidth) {
                this.el.style.width = horizontalProvider.getHorizontalSashWidth(this) + 'px';
            }
        }
    }
    getOrthogonalSash(e) {
        var _a;
        const target = (_a = e.initialTarget) !== null && _a !== void 0 ? _a : e.target;
        if (!target || !(target instanceof HTMLElement)) {
            return undefined;
        }
        if (target.classList.contains('orthogonal-drag-handle')) {
            return target.classList.contains('start') ? this.orthogonalStartSash : this.orthogonalEndSash;
        }
        return undefined;
    }
    dispose() {
        super.dispose();
        this.el.remove();
    }
}


/***/ })

}]);