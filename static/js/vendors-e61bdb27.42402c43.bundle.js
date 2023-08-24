"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-e61bdb27"],{

/***/ 95621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Arrows */\n.monaco-scrollable-element > .scrollbar > .scra {\n\tcursor: pointer;\n\tfont-size: 11px !important;\n}\n\n.monaco-scrollable-element > .visible {\n\topacity: 1;\n\n\t/* Background rule added for IE9 - to allow clicks on dom node */\n\tbackground:rgba(0,0,0,0);\n\n\ttransition: opacity 100ms linear;\n\t/* In front of peek view */\n\tz-index: 11;\n}\n.monaco-scrollable-element > .invisible {\n\topacity: 0;\n\tpointer-events: none;\n}\n.monaco-scrollable-element > .invisible.fade {\n\ttransition: opacity 800ms linear;\n}\n\n/* Scrollable Content Inset Shadow */\n.monaco-scrollable-element > .shadow {\n\tposition: absolute;\n\tdisplay: none;\n}\n.monaco-scrollable-element > .shadow.top {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 3px;\n\theight: 3px;\n\twidth: 100%;\n\tbox-shadow: var(--vscode-scrollbar-shadow) 0 6px 6px -6px inset;\n}\n.monaco-scrollable-element > .shadow.left {\n\tdisplay: block;\n\ttop: 3px;\n\tleft: 0;\n\theight: 100%;\n\twidth: 3px;\n\tbox-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;\n}\n.monaco-scrollable-element > .shadow.top-left-corner {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 0;\n\theight: 3px;\n\twidth: 3px;\n}\n.monaco-scrollable-element > .shadow.top.left {\n\tbox-shadow: var(--vscode-scrollbar-shadow) 6px 0 6px -6px inset;\n}\n\n.monaco-scrollable-element > .scrollbar > .slider {\n\tbackground: var(--vscode-scrollbarSlider-background);\n}\n\n.monaco-scrollable-element > .scrollbar > .slider:hover {\n\tbackground: var(--vscode-scrollbarSlider-hoverBackground);\n}\n\n.monaco-scrollable-element > .scrollbar > .slider.active {\n\tbackground: var(--vscode-scrollbarSlider-activeBackground);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-select-box {\n\twidth: 100%;\n\tcursor: pointer;\n\tborder-radius: 2px;\n}\n\n.monaco-select-box-dropdown-container {\n\tfont-size: 13px;\n\tfont-weight: normal;\n\ttext-transform: none;\n}\n\n/** Actions */\n\n.monaco-action-bar .action-item.select-container {\n\tcursor: default;\n}\n\n.monaco-action-bar .action-item .monaco-select-box {\n\tcursor: pointer;\n\tmin-width: 100px;\n\tmin-height: 18px;\n\tpadding: 2px 23px 2px 8px;\n}\n\n.mac .monaco-action-bar .action-item .monaco-select-box {\n\tfont-size: 11px;\n\tborder-radius: 5px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 53287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Use custom CSS vars to expose padding into parent select for padding calculation */\n.monaco-select-box-dropdown-padding {\n\t--dropdown-padding-top: 1px;\n\t--dropdown-padding-bottom: 1px;\n}\n\n.hc-black .monaco-select-box-dropdown-padding,\n.hc-light .monaco-select-box-dropdown-padding {\n\t--dropdown-padding-top: 3px;\n\t--dropdown-padding-bottom: 4px;\n}\n\n.monaco-select-box-dropdown-container {\n\tdisplay: none;\n\tbox-sizing:\tborder-box;\n}\n\n.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown * {\n\tmargin: 0;\n}\n\n.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown a:focus {\n\toutline: 1px solid -webkit-focus-ring-color;\n\toutline-offset: -1px;\n}\n\n.monaco-select-box-dropdown-container > .select-box-details-pane > .select-box-description-markdown code {\n\tline-height: 15px; /** For some reason, this is needed, otherwise <code> will take up 20px height */\n\tfont-family: var(--monaco-monospace-font);\n}\n\n\n.monaco-select-box-dropdown-container.visible {\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: left;\n\twidth: 1px;\n\toverflow: hidden;\n\tborder-bottom-left-radius: 3px;\n\tborder-bottom-right-radius: 3px;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container {\n\tflex: 0 0 auto;\n\talign-self: flex-start;\n\tpadding-top: var(--dropdown-padding-top);\n\tpadding-bottom: var(--dropdown-padding-bottom);\n\tpadding-left: 1px;\n\tpadding-right: 1px;\n\twidth: 100%;\n\toverflow: hidden;\n\tbox-sizing:\tborder-box;\n}\n\n.monaco-select-box-dropdown-container > .select-box-details-pane {\n\tpadding: 5px;\n}\n\n.hc-black .monaco-select-box-dropdown-container > .select-box-dropdown-list-container {\n\tpadding-top: var(--dropdown-padding-top);\n\tpadding-bottom: var(--dropdown-padding-bottom);\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row {\n\tcursor: pointer;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-text {\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tpadding-left: 3.5px;\n\twhite-space: nowrap;\n\tfloat: left;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-detail {\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tpadding-left: 3.5px;\n\twhite-space: nowrap;\n\tfloat: left;\n\topacity: 0.7;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .option-decorator-right {\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tpadding-right: 10px;\n\twhite-space: nowrap;\n\tfloat: right;\n}\n\n\n/* Accepted CSS hiding technique for accessibility reader text  */\n/* https://webaim.org/techniques/css/invisiblecontent/ */\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row > .visually-hidden {\n\t\tposition: absolute;\n\t\tleft: -10000px;\n\t\ttop: auto;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\toverflow: hidden;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control {\n\tflex: 1 1 auto;\n\talign-self: flex-start;\n\topacity: 0;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control > .width-control-div {\n\toverflow: hidden;\n\tmax-height: 0px;\n}\n\n.monaco-select-box-dropdown-container > .select-box-dropdown-container-width-control > .width-control-div > .option-text-width-control {\n\tpadding-left: 4px;\n\tpadding-right: 8px;\n\twhite-space: nowrap;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 46825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-split-view2 {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.monaco-split-view2 > .sash-container {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n}\n\n.monaco-split-view2 > .sash-container > .monaco-sash {\n\tpointer-events: initial;\n}\n\n.monaco-split-view2 > .monaco-scrollable-element {\n\twidth: 100%;\n\theight: 100%;\n}\n\n.monaco-split-view2 > .monaco-scrollable-element > .split-view-container {\n\twidth: 100%;\n\theight: 100%;\n\twhite-space: nowrap;\n\tposition: relative;\n}\n\n.monaco-split-view2 > .monaco-scrollable-element > .split-view-container > .split-view-view {\n\twhite-space: initial;\n\tposition: absolute;\n}\n\n.monaco-split-view2 > .monaco-scrollable-element > .split-view-container > .split-view-view:not(.visible) {\n\tdisplay: none;\n}\n\n.monaco-split-view2.vertical > .monaco-scrollable-element > .split-view-container > .split-view-view {\n\twidth: 100%;\n}\n\n.monaco-split-view2.horizontal > .monaco-scrollable-element > .split-view-container > .split-view-view {\n\theight: 100%;\n}\n\n.monaco-split-view2.separator-border > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {\n\tcontent: ' ';\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 5;\n\tpointer-events: none;\n\tbackground-color: var(--separator-border);\n}\n\n.monaco-split-view2.separator-border.horizontal > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {\n\theight: 100%;\n\twidth: 1px;\n}\n\n.monaco-split-view2.separator-border.vertical > .monaco-scrollable-element > .split-view-container > .split-view-view:not(:first-child)::before {\n\theight: 1px;\n\twidth: 100%;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 85489:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s$: function() { return /* binding */ DomScrollableElement; },
  Io: function() { return /* binding */ MouseWheelClassifier; },
  NB: function() { return /* binding */ ScrollableElement; },
  $Z: function() { return /* binding */ SmoothScrollableElement; }
});

// UNUSED EXPORTS: AbstractScrollableElement

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js
var browser = __webpack_require__(18463);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js
var fastDomNode = __webpack_require__(27661);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(45394);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/globalPointerMoveMonitor.js
var globalPointerMoveMonitor = __webpack_require__(76599);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js
var widget = __webpack_require__(71308);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarArrow.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





/**
 * The arrow image size.
 */
const ARROW_IMG_SIZE = 11;
class ScrollbarArrow extends widget/* Widget */.$ {
    constructor(opts) {
        super();
        this._onActivate = opts.onActivate;
        this.bgDomNode = document.createElement('div');
        this.bgDomNode.className = 'arrow-background';
        this.bgDomNode.style.position = 'absolute';
        this.bgDomNode.style.width = opts.bgWidth + 'px';
        this.bgDomNode.style.height = opts.bgHeight + 'px';
        if (typeof opts.top !== 'undefined') {
            this.bgDomNode.style.top = '0px';
        }
        if (typeof opts.left !== 'undefined') {
            this.bgDomNode.style.left = '0px';
        }
        if (typeof opts.bottom !== 'undefined') {
            this.bgDomNode.style.bottom = '0px';
        }
        if (typeof opts.right !== 'undefined') {
            this.bgDomNode.style.right = '0px';
        }
        this.domNode = document.createElement('div');
        this.domNode.className = opts.className;
        this.domNode.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(opts.icon));
        this.domNode.style.position = 'absolute';
        this.domNode.style.width = ARROW_IMG_SIZE + 'px';
        this.domNode.style.height = ARROW_IMG_SIZE + 'px';
        if (typeof opts.top !== 'undefined') {
            this.domNode.style.top = opts.top + 'px';
        }
        if (typeof opts.left !== 'undefined') {
            this.domNode.style.left = opts.left + 'px';
        }
        if (typeof opts.bottom !== 'undefined') {
            this.domNode.style.bottom = opts.bottom + 'px';
        }
        if (typeof opts.right !== 'undefined') {
            this.domNode.style.right = opts.right + 'px';
        }
        this._pointerMoveMonitor = this._register(new globalPointerMoveMonitor/* GlobalPointerMoveMonitor */.C());
        this._register(dom/* addStandardDisposableListener */.mu(this.bgDomNode, dom/* EventType */.tw.POINTER_DOWN, (e) => this._arrowPointerDown(e)));
        this._register(dom/* addStandardDisposableListener */.mu(this.domNode, dom/* EventType */.tw.POINTER_DOWN, (e) => this._arrowPointerDown(e)));
        this._pointerdownRepeatTimer = this._register(new common_async/* IntervalTimer */.zh());
        this._pointerdownScheduleRepeatTimer = this._register(new common_async/* TimeoutTimer */._F());
    }
    _arrowPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        const scheduleRepeater = () => {
            this._pointerdownRepeatTimer.cancelAndSet(() => this._onActivate(), 1000 / 24);
        };
        this._onActivate();
        this._pointerdownRepeatTimer.cancel();
        this._pointerdownScheduleRepeatTimer.cancelAndSet(scheduleRepeater, 200);
        this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (pointerMoveData) => { }, () => {
            this._pointerdownRepeatTimer.cancel();
            this._pointerdownScheduleRepeatTimer.cancel();
        });
        e.preventDefault();
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarVisibilityController.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class ScrollbarVisibilityController extends lifecycle/* Disposable */.JT {
    constructor(visibility, visibleClassName, invisibleClassName) {
        super();
        this._visibility = visibility;
        this._visibleClassName = visibleClassName;
        this._invisibleClassName = invisibleClassName;
        this._domNode = null;
        this._isVisible = false;
        this._isNeeded = false;
        this._rawShouldBeVisible = false;
        this._shouldBeVisible = false;
        this._revealTimer = this._register(new common_async/* TimeoutTimer */._F());
    }
    setVisibility(visibility) {
        if (this._visibility !== visibility) {
            this._visibility = visibility;
            this._updateShouldBeVisible();
        }
    }
    // ----------------- Hide / Reveal
    setShouldBeVisible(rawShouldBeVisible) {
        this._rawShouldBeVisible = rawShouldBeVisible;
        this._updateShouldBeVisible();
    }
    _applyVisibilitySetting() {
        if (this._visibility === 2 /* ScrollbarVisibility.Hidden */) {
            return false;
        }
        if (this._visibility === 3 /* ScrollbarVisibility.Visible */) {
            return true;
        }
        return this._rawShouldBeVisible;
    }
    _updateShouldBeVisible() {
        const shouldBeVisible = this._applyVisibilitySetting();
        if (this._shouldBeVisible !== shouldBeVisible) {
            this._shouldBeVisible = shouldBeVisible;
            this.ensureVisibility();
        }
    }
    setIsNeeded(isNeeded) {
        if (this._isNeeded !== isNeeded) {
            this._isNeeded = isNeeded;
            this.ensureVisibility();
        }
    }
    setDomNode(domNode) {
        this._domNode = domNode;
        this._domNode.setClassName(this._invisibleClassName);
        // Now that the flags & the dom node are in a consistent state, ensure the Hidden/Visible configuration
        this.setShouldBeVisible(false);
    }
    ensureVisibility() {
        if (!this._isNeeded) {
            // Nothing to be rendered
            this._hide(false);
            return;
        }
        if (this._shouldBeVisible) {
            this._reveal();
        }
        else {
            this._hide(true);
        }
    }
    _reveal() {
        if (this._isVisible) {
            return;
        }
        this._isVisible = true;
        // The CSS animation doesn't play otherwise
        this._revealTimer.setIfNotSet(() => {
            var _a;
            (_a = this._domNode) === null || _a === void 0 ? void 0 : _a.setClassName(this._visibleClassName);
        }, 0);
    }
    _hide(withFadeAway) {
        var _a;
        this._revealTimer.cancel();
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        (_a = this._domNode) === null || _a === void 0 ? void 0 : _a.setClassName(this._invisibleClassName + (withFadeAway ? ' fade' : ''));
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/abstractScrollbar.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







/**
 * The orthogonal distance to the slider at which dragging "resets". This implements "snapping"
 */
const POINTER_DRAG_RESET_DISTANCE = 140;
class AbstractScrollbar extends widget/* Widget */.$ {
    constructor(opts) {
        super();
        this._lazyRender = opts.lazyRender;
        this._host = opts.host;
        this._scrollable = opts.scrollable;
        this._scrollByPage = opts.scrollByPage;
        this._scrollbarState = opts.scrollbarState;
        this._visibilityController = this._register(new ScrollbarVisibilityController(opts.visibility, 'visible scrollbar ' + opts.extraScrollbarClassName, 'invisible scrollbar ' + opts.extraScrollbarClassName));
        this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
        this._pointerMoveMonitor = this._register(new globalPointerMoveMonitor/* GlobalPointerMoveMonitor */.C());
        this._shouldRender = true;
        this.domNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
        this.domNode.setAttribute('role', 'presentation');
        this.domNode.setAttribute('aria-hidden', 'true');
        this._visibilityController.setDomNode(this.domNode);
        this.domNode.setPosition('absolute');
        this._register(dom/* addDisposableListener */.nm(this.domNode.domNode, dom/* EventType */.tw.POINTER_DOWN, (e) => this._domNodePointerDown(e)));
    }
    // ----------------- creation
    /**
     * Creates the dom node for an arrow & adds it to the container
     */
    _createArrow(opts) {
        const arrow = this._register(new ScrollbarArrow(opts));
        this.domNode.domNode.appendChild(arrow.bgDomNode);
        this.domNode.domNode.appendChild(arrow.domNode);
    }
    /**
     * Creates the slider dom node, adds it to the container & hooks up the events
     */
    _createSlider(top, left, width, height) {
        this.slider = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
        this.slider.setClassName('slider');
        this.slider.setPosition('absolute');
        this.slider.setTop(top);
        this.slider.setLeft(left);
        if (typeof width === 'number') {
            this.slider.setWidth(width);
        }
        if (typeof height === 'number') {
            this.slider.setHeight(height);
        }
        this.slider.setLayerHinting(true);
        this.slider.setContain('strict');
        this.domNode.domNode.appendChild(this.slider.domNode);
        this._register(dom/* addDisposableListener */.nm(this.slider.domNode, dom/* EventType */.tw.POINTER_DOWN, (e) => {
            if (e.button === 0) {
                e.preventDefault();
                this._sliderPointerDown(e);
            }
        }));
        this.onclick(this.slider.domNode, e => {
            if (e.leftButton) {
                e.stopPropagation();
            }
        });
    }
    // ----------------- Update state
    _onElementSize(visibleSize) {
        if (this._scrollbarState.setVisibleSize(visibleSize)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    _onElementScrollSize(elementScrollSize) {
        if (this._scrollbarState.setScrollSize(elementScrollSize)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    _onElementScrollPosition(elementScrollPosition) {
        if (this._scrollbarState.setScrollPosition(elementScrollPosition)) {
            this._visibilityController.setIsNeeded(this._scrollbarState.isNeeded());
            this._shouldRender = true;
            if (!this._lazyRender) {
                this.render();
            }
        }
        return this._shouldRender;
    }
    // ----------------- rendering
    beginReveal() {
        this._visibilityController.setShouldBeVisible(true);
    }
    beginHide() {
        this._visibilityController.setShouldBeVisible(false);
    }
    render() {
        if (!this._shouldRender) {
            return;
        }
        this._shouldRender = false;
        this._renderDomNode(this._scrollbarState.getRectangleLargeSize(), this._scrollbarState.getRectangleSmallSize());
        this._updateSlider(this._scrollbarState.getSliderSize(), this._scrollbarState.getArrowSize() + this._scrollbarState.getSliderPosition());
    }
    // ----------------- DOM events
    _domNodePointerDown(e) {
        if (e.target !== this.domNode.domNode) {
            return;
        }
        this._onPointerDown(e);
    }
    delegatePointerDown(e) {
        const domTop = this.domNode.domNode.getClientRects()[0].top;
        const sliderStart = domTop + this._scrollbarState.getSliderPosition();
        const sliderStop = domTop + this._scrollbarState.getSliderPosition() + this._scrollbarState.getSliderSize();
        const pointerPos = this._sliderPointerPosition(e);
        if (sliderStart <= pointerPos && pointerPos <= sliderStop) {
            // Act as if it was a pointer down on the slider
            if (e.button === 0) {
                e.preventDefault();
                this._sliderPointerDown(e);
            }
        }
        else {
            // Act as if it was a pointer down on the scrollbar
            this._onPointerDown(e);
        }
    }
    _onPointerDown(e) {
        let offsetX;
        let offsetY;
        if (e.target === this.domNode.domNode && typeof e.offsetX === 'number' && typeof e.offsetY === 'number') {
            offsetX = e.offsetX;
            offsetY = e.offsetY;
        }
        else {
            const domNodePosition = dom/* getDomNodePagePosition */.i(this.domNode.domNode);
            offsetX = e.pageX - domNodePosition.left;
            offsetY = e.pageY - domNodePosition.top;
        }
        const offset = this._pointerDownRelativePosition(offsetX, offsetY);
        this._setDesiredScrollPositionNow(this._scrollByPage
            ? this._scrollbarState.getDesiredScrollPositionFromOffsetPaged(offset)
            : this._scrollbarState.getDesiredScrollPositionFromOffset(offset));
        if (e.button === 0) {
            // left button
            e.preventDefault();
            this._sliderPointerDown(e);
        }
    }
    _sliderPointerDown(e) {
        if (!e.target || !(e.target instanceof Element)) {
            return;
        }
        const initialPointerPosition = this._sliderPointerPosition(e);
        const initialPointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(e);
        const initialScrollbarState = this._scrollbarState.clone();
        this.slider.toggleClassName('active', true);
        this._pointerMoveMonitor.startMonitoring(e.target, e.pointerId, e.buttons, (pointerMoveData) => {
            const pointerOrthogonalPosition = this._sliderOrthogonalPointerPosition(pointerMoveData);
            const pointerOrthogonalDelta = Math.abs(pointerOrthogonalPosition - initialPointerOrthogonalPosition);
            if (platform/* isWindows */.ED && pointerOrthogonalDelta > POINTER_DRAG_RESET_DISTANCE) {
                // The pointer has wondered away from the scrollbar => reset dragging
                this._setDesiredScrollPositionNow(initialScrollbarState.getScrollPosition());
                return;
            }
            const pointerPosition = this._sliderPointerPosition(pointerMoveData);
            const pointerDelta = pointerPosition - initialPointerPosition;
            this._setDesiredScrollPositionNow(initialScrollbarState.getDesiredScrollPositionFromDelta(pointerDelta));
        }, () => {
            this.slider.toggleClassName('active', false);
            this._host.onDragEnd();
        });
        this._host.onDragStart();
    }
    _setDesiredScrollPositionNow(_desiredScrollPosition) {
        const desiredScrollPosition = {};
        this.writeScrollPosition(desiredScrollPosition, _desiredScrollPosition);
        this._scrollable.setScrollPositionNow(desiredScrollPosition);
    }
    updateScrollbarSize(scrollbarSize) {
        this._updateScrollbarSize(scrollbarSize);
        this._scrollbarState.setScrollbarSize(scrollbarSize);
        this._shouldRender = true;
        if (!this._lazyRender) {
            this.render();
        }
    }
    isNeeded() {
        return this._scrollbarState.isNeeded();
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollbarState.js
var scrollbarState = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/horizontalScrollbar.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class HorizontalScrollbar extends AbstractScrollbar {
    constructor(scrollable, options, host) {
        const scrollDimensions = scrollable.getScrollDimensions();
        const scrollPosition = scrollable.getCurrentScrollPosition();
        super({
            lazyRender: options.lazyRender,
            host: host,
            scrollbarState: new scrollbarState/* ScrollbarState */.M((options.horizontalHasArrows ? options.arrowSize : 0), (options.horizontal === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.horizontalScrollbarSize), (options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize), scrollDimensions.width, scrollDimensions.scrollWidth, scrollPosition.scrollLeft),
            visibility: options.horizontal,
            extraScrollbarClassName: 'horizontal',
            scrollable: scrollable,
            scrollByPage: options.scrollByPage
        });
        if (options.horizontalHasArrows) {
            const arrowDelta = (options.arrowSize - ARROW_IMG_SIZE) / 2;
            const scrollbarDelta = (options.horizontalScrollbarSize - ARROW_IMG_SIZE) / 2;
            this._createArrow({
                className: 'scra',
                icon: codicons/* Codicon */.l.scrollbarButtonLeft,
                top: scrollbarDelta,
                left: arrowDelta,
                bottom: undefined,
                right: undefined,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: () => this._host.onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(null, 1, 0)),
            });
            this._createArrow({
                className: 'scra',
                icon: codicons/* Codicon */.l.scrollbarButtonRight,
                top: scrollbarDelta,
                left: undefined,
                bottom: undefined,
                right: arrowDelta,
                bgWidth: options.arrowSize,
                bgHeight: options.horizontalScrollbarSize,
                onActivate: () => this._host.onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(null, -1, 0)),
            });
        }
        this._createSlider(Math.floor((options.horizontalScrollbarSize - options.horizontalSliderSize) / 2), 0, undefined, options.horizontalSliderSize);
    }
    _updateSlider(sliderSize, sliderPosition) {
        this.slider.setWidth(sliderSize);
        this.slider.setLeft(sliderPosition);
    }
    _renderDomNode(largeSize, smallSize) {
        this.domNode.setWidth(largeSize);
        this.domNode.setHeight(smallSize);
        this.domNode.setLeft(0);
        this.domNode.setBottom(0);
    }
    onDidScroll(e) {
        this._shouldRender = this._onElementScrollSize(e.scrollWidth) || this._shouldRender;
        this._shouldRender = this._onElementScrollPosition(e.scrollLeft) || this._shouldRender;
        this._shouldRender = this._onElementSize(e.width) || this._shouldRender;
        return this._shouldRender;
    }
    _pointerDownRelativePosition(offsetX, offsetY) {
        return offsetX;
    }
    _sliderPointerPosition(e) {
        return e.pageX;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageY;
    }
    _updateScrollbarSize(size) {
        this.slider.setHeight(size);
    }
    writeScrollPosition(target, scrollPosition) {
        target.scrollLeft = scrollPosition;
    }
    updateOptions(options) {
        this.updateScrollbarSize(options.horizontal === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.horizontalScrollbarSize);
        this._scrollbarState.setOppositeScrollbarSize(options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize);
        this._visibilityController.setVisibility(options.horizontal);
        this._scrollByPage = options.scrollByPage;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/verticalScrollbar.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class VerticalScrollbar extends AbstractScrollbar {
    constructor(scrollable, options, host) {
        const scrollDimensions = scrollable.getScrollDimensions();
        const scrollPosition = scrollable.getCurrentScrollPosition();
        super({
            lazyRender: options.lazyRender,
            host: host,
            scrollbarState: new scrollbarState/* ScrollbarState */.M((options.verticalHasArrows ? options.arrowSize : 0), (options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize), 
            // give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
            0, scrollDimensions.height, scrollDimensions.scrollHeight, scrollPosition.scrollTop),
            visibility: options.vertical,
            extraScrollbarClassName: 'vertical',
            scrollable: scrollable,
            scrollByPage: options.scrollByPage
        });
        if (options.verticalHasArrows) {
            const arrowDelta = (options.arrowSize - ARROW_IMG_SIZE) / 2;
            const scrollbarDelta = (options.verticalScrollbarSize - ARROW_IMG_SIZE) / 2;
            this._createArrow({
                className: 'scra',
                icon: codicons/* Codicon */.l.scrollbarButtonUp,
                top: arrowDelta,
                left: scrollbarDelta,
                bottom: undefined,
                right: undefined,
                bgWidth: options.verticalScrollbarSize,
                bgHeight: options.arrowSize,
                onActivate: () => this._host.onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(null, 0, 1)),
            });
            this._createArrow({
                className: 'scra',
                icon: codicons/* Codicon */.l.scrollbarButtonDown,
                top: undefined,
                left: scrollbarDelta,
                bottom: arrowDelta,
                right: undefined,
                bgWidth: options.verticalScrollbarSize,
                bgHeight: options.arrowSize,
                onActivate: () => this._host.onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(null, 0, -1)),
            });
        }
        this._createSlider(0, Math.floor((options.verticalScrollbarSize - options.verticalSliderSize) / 2), options.verticalSliderSize, undefined);
    }
    _updateSlider(sliderSize, sliderPosition) {
        this.slider.setHeight(sliderSize);
        this.slider.setTop(sliderPosition);
    }
    _renderDomNode(largeSize, smallSize) {
        this.domNode.setWidth(smallSize);
        this.domNode.setHeight(largeSize);
        this.domNode.setRight(0);
        this.domNode.setTop(0);
    }
    onDidScroll(e) {
        this._shouldRender = this._onElementScrollSize(e.scrollHeight) || this._shouldRender;
        this._shouldRender = this._onElementScrollPosition(e.scrollTop) || this._shouldRender;
        this._shouldRender = this._onElementSize(e.height) || this._shouldRender;
        return this._shouldRender;
    }
    _pointerDownRelativePosition(offsetX, offsetY) {
        return offsetY;
    }
    _sliderPointerPosition(e) {
        return e.pageY;
    }
    _sliderOrthogonalPointerPosition(e) {
        return e.pageX;
    }
    _updateScrollbarSize(size) {
        this.slider.setWidth(size);
    }
    writeScrollPosition(target, scrollPosition) {
        target.scrollTop = scrollPosition;
    }
    updateOptions(options) {
        this.updateScrollbarSize(options.vertical === 2 /* ScrollbarVisibility.Hidden */ ? 0 : options.verticalScrollbarSize);
        // give priority to vertical scroll bar over horizontal and let it scroll all the way to the bottom
        this._scrollbarState.setOppositeScrollbarSize(0);
        this._visibilityController.setVisibility(options.vertical);
        this._scrollByPage = options.scrollByPage;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/scrollable.js
var common_scrollable = __webpack_require__(22687);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/media/scrollbars.css
var scrollbars = __webpack_require__(95621);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/media/scrollbars.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(scrollbars/* default */.Z, options);




       /* harmony default export */ var media_scrollbars = (scrollbars/* default */.Z && scrollbars/* default */.Z.locals ? scrollbars/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/













const HIDE_TIMEOUT = 500;
const SCROLL_WHEEL_SENSITIVITY = 50;
const SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED = true;
class MouseWheelClassifierItem {
    constructor(timestamp, deltaX, deltaY) {
        this.timestamp = timestamp;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.score = 0;
    }
}
class MouseWheelClassifier {
    constructor() {
        this._capacity = 5;
        this._memory = [];
        this._front = -1;
        this._rear = -1;
    }
    isPhysicalMouseWheel() {
        if (this._front === -1 && this._rear === -1) {
            // no elements
            return false;
        }
        // 0.5 * last + 0.25 * 2nd last + 0.125 * 3rd last + ...
        let remainingInfluence = 1;
        let score = 0;
        let iteration = 1;
        let index = this._rear;
        do {
            const influence = (index === this._front ? remainingInfluence : Math.pow(2, -iteration));
            remainingInfluence -= influence;
            score += this._memory[index].score * influence;
            if (index === this._front) {
                break;
            }
            index = (this._capacity + index - 1) % this._capacity;
            iteration++;
        } while (true);
        return (score <= 0.5);
    }
    acceptStandardWheelEvent(e) {
        const osZoomFactor = window.devicePixelRatio / (0,browser/* getZoomFactor */.ie)();
        if (platform/* isWindows */.ED || platform/* isLinux */.IJ) {
            // On Windows and Linux, the incoming delta events are multiplied with the OS zoom factor.
            // The OS zoom factor can be reverse engineered by using the device pixel ratio and the configured zoom factor into account.
            this.accept(Date.now(), e.deltaX / osZoomFactor, e.deltaY / osZoomFactor);
        }
        else {
            this.accept(Date.now(), e.deltaX, e.deltaY);
        }
    }
    accept(timestamp, deltaX, deltaY) {
        const item = new MouseWheelClassifierItem(timestamp, deltaX, deltaY);
        item.score = this._computeScore(item);
        if (this._front === -1 && this._rear === -1) {
            this._memory[0] = item;
            this._front = 0;
            this._rear = 0;
        }
        else {
            this._rear = (this._rear + 1) % this._capacity;
            if (this._rear === this._front) {
                // Drop oldest
                this._front = (this._front + 1) % this._capacity;
            }
            this._memory[this._rear] = item;
        }
    }
    /**
     * A score between 0 and 1 for `item`.
     *  - a score towards 0 indicates that the source appears to be a physical mouse wheel
     *  - a score towards 1 indicates that the source appears to be a touchpad or magic mouse, etc.
     */
    _computeScore(item) {
        if (Math.abs(item.deltaX) > 0 && Math.abs(item.deltaY) > 0) {
            // both axes exercised => definitely not a physical mouse wheel
            return 1;
        }
        let score = 0.5;
        const prev = (this._front === -1 && this._rear === -1 ? null : this._memory[this._rear]);
        if (prev) {
            // const deltaT = item.timestamp - prev.timestamp;
            // if (deltaT < 1000 / 30) {
            // 	// sooner than X times per second => indicator that this is not a physical mouse wheel
            // 	score += 0.25;
            // }
            // if (item.deltaX === prev.deltaX && item.deltaY === prev.deltaY) {
            // 	// equal amplitude => indicator that this is a physical mouse wheel
            // 	score -= 0.25;
            // }
        }
        if (!this._isAlmostInt(item.deltaX) || !this._isAlmostInt(item.deltaY)) {
            // non-integer deltas => indicator that this is not a physical mouse wheel
            score += 0.25;
        }
        return Math.min(Math.max(score, 0), 1);
    }
    _isAlmostInt(value) {
        const delta = Math.abs(Math.round(value) - value);
        return (delta < 0.01);
    }
}
MouseWheelClassifier.INSTANCE = new MouseWheelClassifier();
class AbstractScrollableElement extends widget/* Widget */.$ {
    get options() {
        return this._options;
    }
    constructor(element, options, scrollable) {
        super();
        this._onScroll = this._register(new common_event/* Emitter */.Q5());
        this.onScroll = this._onScroll.event;
        this._onWillScroll = this._register(new common_event/* Emitter */.Q5());
        element.style.overflow = 'hidden';
        this._options = resolveOptions(options);
        this._scrollable = scrollable;
        this._register(this._scrollable.onScroll((e) => {
            this._onWillScroll.fire(e);
            this._onDidScroll(e);
            this._onScroll.fire(e);
        }));
        const scrollbarHost = {
            onMouseWheel: (mouseWheelEvent) => this._onMouseWheel(mouseWheelEvent),
            onDragStart: () => this._onDragStart(),
            onDragEnd: () => this._onDragEnd(),
        };
        this._verticalScrollbar = this._register(new VerticalScrollbar(this._scrollable, this._options, scrollbarHost));
        this._horizontalScrollbar = this._register(new HorizontalScrollbar(this._scrollable, this._options, scrollbarHost));
        this._domNode = document.createElement('div');
        this._domNode.className = 'monaco-scrollable-element ' + this._options.className;
        this._domNode.setAttribute('role', 'presentation');
        this._domNode.style.position = 'relative';
        this._domNode.style.overflow = 'hidden';
        this._domNode.appendChild(element);
        this._domNode.appendChild(this._horizontalScrollbar.domNode.domNode);
        this._domNode.appendChild(this._verticalScrollbar.domNode.domNode);
        if (this._options.useShadows) {
            this._leftShadowDomNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
            this._leftShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._leftShadowDomNode.domNode);
            this._topShadowDomNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
            this._topShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._topShadowDomNode.domNode);
            this._topLeftShadowDomNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
            this._topLeftShadowDomNode.setClassName('shadow');
            this._domNode.appendChild(this._topLeftShadowDomNode.domNode);
        }
        else {
            this._leftShadowDomNode = null;
            this._topShadowDomNode = null;
            this._topLeftShadowDomNode = null;
        }
        this._listenOnDomNode = this._options.listenOnDomNode || this._domNode;
        this._mouseWheelToDispose = [];
        this._setListeningToMouseWheel(this._options.handleMouseWheel);
        this.onmouseover(this._listenOnDomNode, (e) => this._onMouseOver(e));
        this.onmouseleave(this._listenOnDomNode, (e) => this._onMouseLeave(e));
        this._hideTimeout = this._register(new common_async/* TimeoutTimer */._F());
        this._isDragging = false;
        this._mouseIsOver = false;
        this._shouldRender = true;
        this._revealOnScroll = true;
    }
    dispose() {
        this._mouseWheelToDispose = (0,lifecycle/* dispose */.B9)(this._mouseWheelToDispose);
        super.dispose();
    }
    /**
     * Get the generated 'scrollable' dom node
     */
    getDomNode() {
        return this._domNode;
    }
    getOverviewRulerLayoutInfo() {
        return {
            parent: this._domNode,
            insertBefore: this._verticalScrollbar.domNode.domNode,
        };
    }
    /**
     * Delegate a pointer down event to the vertical scrollbar.
     * This is to help with clicking somewhere else and having the scrollbar react.
     */
    delegateVerticalScrollbarPointerDown(browserEvent) {
        this._verticalScrollbar.delegatePointerDown(browserEvent);
    }
    getScrollDimensions() {
        return this._scrollable.getScrollDimensions();
    }
    setScrollDimensions(dimensions) {
        this._scrollable.setScrollDimensions(dimensions, false);
    }
    /**
     * Update the class name of the scrollable element.
     */
    updateClassName(newClassName) {
        this._options.className = newClassName;
        // Defaults are different on Macs
        if (platform/* isMacintosh */.dz) {
            this._options.className += ' mac';
        }
        this._domNode.className = 'monaco-scrollable-element ' + this._options.className;
    }
    /**
     * Update configuration options for the scrollbar.
     */
    updateOptions(newOptions) {
        if (typeof newOptions.handleMouseWheel !== 'undefined') {
            this._options.handleMouseWheel = newOptions.handleMouseWheel;
            this._setListeningToMouseWheel(this._options.handleMouseWheel);
        }
        if (typeof newOptions.mouseWheelScrollSensitivity !== 'undefined') {
            this._options.mouseWheelScrollSensitivity = newOptions.mouseWheelScrollSensitivity;
        }
        if (typeof newOptions.fastScrollSensitivity !== 'undefined') {
            this._options.fastScrollSensitivity = newOptions.fastScrollSensitivity;
        }
        if (typeof newOptions.scrollPredominantAxis !== 'undefined') {
            this._options.scrollPredominantAxis = newOptions.scrollPredominantAxis;
        }
        if (typeof newOptions.horizontal !== 'undefined') {
            this._options.horizontal = newOptions.horizontal;
        }
        if (typeof newOptions.vertical !== 'undefined') {
            this._options.vertical = newOptions.vertical;
        }
        if (typeof newOptions.horizontalScrollbarSize !== 'undefined') {
            this._options.horizontalScrollbarSize = newOptions.horizontalScrollbarSize;
        }
        if (typeof newOptions.verticalScrollbarSize !== 'undefined') {
            this._options.verticalScrollbarSize = newOptions.verticalScrollbarSize;
        }
        if (typeof newOptions.scrollByPage !== 'undefined') {
            this._options.scrollByPage = newOptions.scrollByPage;
        }
        this._horizontalScrollbar.updateOptions(this._options);
        this._verticalScrollbar.updateOptions(this._options);
        if (!this._options.lazyRender) {
            this._render();
        }
    }
    delegateScrollFromMouseWheelEvent(browserEvent) {
        this._onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(browserEvent));
    }
    // -------------------- mouse wheel scrolling --------------------
    _setListeningToMouseWheel(shouldListen) {
        const isListening = (this._mouseWheelToDispose.length > 0);
        if (isListening === shouldListen) {
            // No change
            return;
        }
        // Stop listening (if necessary)
        this._mouseWheelToDispose = (0,lifecycle/* dispose */.B9)(this._mouseWheelToDispose);
        // Start listening (if necessary)
        if (shouldListen) {
            const onMouseWheel = (browserEvent) => {
                this._onMouseWheel(new mouseEvent/* StandardWheelEvent */.q(browserEvent));
            };
            this._mouseWheelToDispose.push(dom/* addDisposableListener */.nm(this._listenOnDomNode, dom/* EventType */.tw.MOUSE_WHEEL, onMouseWheel, { passive: false }));
        }
    }
    _onMouseWheel(e) {
        var _a;
        if ((_a = e.browserEvent) === null || _a === void 0 ? void 0 : _a.defaultPrevented) {
            return;
        }
        const classifier = MouseWheelClassifier.INSTANCE;
        if (SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED) {
            classifier.acceptStandardWheelEvent(e);
        }
        // console.log(`${Date.now()}, ${e.deltaY}, ${e.deltaX}`);
        let didScroll = false;
        if (e.deltaY || e.deltaX) {
            let deltaY = e.deltaY * this._options.mouseWheelScrollSensitivity;
            let deltaX = e.deltaX * this._options.mouseWheelScrollSensitivity;
            if (this._options.scrollPredominantAxis) {
                if (Math.abs(deltaY) >= Math.abs(deltaX)) {
                    deltaX = 0;
                }
                else {
                    deltaY = 0;
                }
            }
            if (this._options.flipAxes) {
                [deltaY, deltaX] = [deltaX, deltaY];
            }
            // Convert vertical scrolling to horizontal if shift is held, this
            // is handled at a higher level on Mac
            const shiftConvert = !platform/* isMacintosh */.dz && e.browserEvent && e.browserEvent.shiftKey;
            if ((this._options.scrollYToX || shiftConvert) && !deltaX) {
                deltaX = deltaY;
                deltaY = 0;
            }
            if (e.browserEvent && e.browserEvent.altKey) {
                // fastScrolling
                deltaX = deltaX * this._options.fastScrollSensitivity;
                deltaY = deltaY * this._options.fastScrollSensitivity;
            }
            const futureScrollPosition = this._scrollable.getFutureScrollPosition();
            let desiredScrollPosition = {};
            if (deltaY) {
                const deltaScrollTop = SCROLL_WHEEL_SENSITIVITY * deltaY;
                // Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
                const desiredScrollTop = futureScrollPosition.scrollTop - (deltaScrollTop < 0 ? Math.floor(deltaScrollTop) : Math.ceil(deltaScrollTop));
                this._verticalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollTop);
            }
            if (deltaX) {
                const deltaScrollLeft = SCROLL_WHEEL_SENSITIVITY * deltaX;
                // Here we convert values such as -0.3 to -1 or 0.3 to 1, otherwise low speed scrolling will never scroll
                const desiredScrollLeft = futureScrollPosition.scrollLeft - (deltaScrollLeft < 0 ? Math.floor(deltaScrollLeft) : Math.ceil(deltaScrollLeft));
                this._horizontalScrollbar.writeScrollPosition(desiredScrollPosition, desiredScrollLeft);
            }
            // Check that we are scrolling towards a location which is valid
            desiredScrollPosition = this._scrollable.validateScrollPosition(desiredScrollPosition);
            if (futureScrollPosition.scrollLeft !== desiredScrollPosition.scrollLeft || futureScrollPosition.scrollTop !== desiredScrollPosition.scrollTop) {
                const canPerformSmoothScroll = (SCROLL_WHEEL_SMOOTH_SCROLL_ENABLED
                    && this._options.mouseWheelSmoothScroll
                    && classifier.isPhysicalMouseWheel());
                if (canPerformSmoothScroll) {
                    this._scrollable.setScrollPositionSmooth(desiredScrollPosition);
                }
                else {
                    this._scrollable.setScrollPositionNow(desiredScrollPosition);
                }
                didScroll = true;
            }
        }
        let consumeMouseWheel = didScroll;
        if (!consumeMouseWheel && this._options.alwaysConsumeMouseWheel) {
            consumeMouseWheel = true;
        }
        if (!consumeMouseWheel && this._options.consumeMouseWheelIfScrollbarIsNeeded && (this._verticalScrollbar.isNeeded() || this._horizontalScrollbar.isNeeded())) {
            consumeMouseWheel = true;
        }
        if (consumeMouseWheel) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
    _onDidScroll(e) {
        this._shouldRender = this._horizontalScrollbar.onDidScroll(e) || this._shouldRender;
        this._shouldRender = this._verticalScrollbar.onDidScroll(e) || this._shouldRender;
        if (this._options.useShadows) {
            this._shouldRender = true;
        }
        if (this._revealOnScroll) {
            this._reveal();
        }
        if (!this._options.lazyRender) {
            this._render();
        }
    }
    /**
     * Render / mutate the DOM now.
     * Should be used together with the ctor option `lazyRender`.
     */
    renderNow() {
        if (!this._options.lazyRender) {
            throw new Error('Please use `lazyRender` together with `renderNow`!');
        }
        this._render();
    }
    _render() {
        if (!this._shouldRender) {
            return;
        }
        this._shouldRender = false;
        this._horizontalScrollbar.render();
        this._verticalScrollbar.render();
        if (this._options.useShadows) {
            const scrollState = this._scrollable.getCurrentScrollPosition();
            const enableTop = scrollState.scrollTop > 0;
            const enableLeft = scrollState.scrollLeft > 0;
            const leftClassName = (enableLeft ? ' left' : '');
            const topClassName = (enableTop ? ' top' : '');
            const topLeftClassName = (enableLeft || enableTop ? ' top-left-corner' : '');
            this._leftShadowDomNode.setClassName(`shadow${leftClassName}`);
            this._topShadowDomNode.setClassName(`shadow${topClassName}`);
            this._topLeftShadowDomNode.setClassName(`shadow${topLeftClassName}${topClassName}${leftClassName}`);
        }
    }
    // -------------------- fade in / fade out --------------------
    _onDragStart() {
        this._isDragging = true;
        this._reveal();
    }
    _onDragEnd() {
        this._isDragging = false;
        this._hide();
    }
    _onMouseLeave(e) {
        this._mouseIsOver = false;
        this._hide();
    }
    _onMouseOver(e) {
        this._mouseIsOver = true;
        this._reveal();
    }
    _reveal() {
        this._verticalScrollbar.beginReveal();
        this._horizontalScrollbar.beginReveal();
        this._scheduleHide();
    }
    _hide() {
        if (!this._mouseIsOver && !this._isDragging) {
            this._verticalScrollbar.beginHide();
            this._horizontalScrollbar.beginHide();
        }
    }
    _scheduleHide() {
        if (!this._mouseIsOver && !this._isDragging) {
            this._hideTimeout.cancelAndSet(() => this._hide(), HIDE_TIMEOUT);
        }
    }
}
class ScrollableElement extends AbstractScrollableElement {
    constructor(element, options) {
        options = options || {};
        options.mouseWheelSmoothScroll = false;
        const scrollable = new common_scrollable/* Scrollable */.Rm({
            forceIntegerValues: true,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (callback) => dom/* scheduleAtNextAnimationFrame */.jL(callback)
        });
        super(element, options, scrollable);
        this._register(scrollable);
    }
    setScrollPosition(update) {
        this._scrollable.setScrollPositionNow(update);
    }
}
class SmoothScrollableElement extends AbstractScrollableElement {
    constructor(element, options, scrollable) {
        super(element, options, scrollable);
    }
    setScrollPosition(update) {
        if (update.reuseAnimation) {
            this._scrollable.setScrollPositionSmooth(update, update.reuseAnimation);
        }
        else {
            this._scrollable.setScrollPositionNow(update);
        }
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
}
class DomScrollableElement extends AbstractScrollableElement {
    constructor(element, options) {
        options = options || {};
        options.mouseWheelSmoothScroll = false;
        const scrollable = new common_scrollable/* Scrollable */.Rm({
            forceIntegerValues: false,
            smoothScrollDuration: 0,
            scheduleAtNextAnimationFrame: (callback) => dom/* scheduleAtNextAnimationFrame */.jL(callback)
        });
        super(element, options, scrollable);
        this._register(scrollable);
        this._element = element;
        this.onScroll((e) => {
            if (e.scrollTopChanged) {
                this._element.scrollTop = e.scrollTop;
            }
            if (e.scrollLeftChanged) {
                this._element.scrollLeft = e.scrollLeft;
            }
        });
        this.scanDomNode();
    }
    setScrollPosition(update) {
        this._scrollable.setScrollPositionNow(update);
    }
    getScrollPosition() {
        return this._scrollable.getCurrentScrollPosition();
    }
    scanDomNode() {
        // width, scrollLeft, scrollWidth, height, scrollTop, scrollHeight
        this.setScrollDimensions({
            width: this._element.clientWidth,
            scrollWidth: this._element.scrollWidth,
            height: this._element.clientHeight,
            scrollHeight: this._element.scrollHeight
        });
        this.setScrollPosition({
            scrollLeft: this._element.scrollLeft,
            scrollTop: this._element.scrollTop,
        });
    }
}
function resolveOptions(opts) {
    const result = {
        lazyRender: (typeof opts.lazyRender !== 'undefined' ? opts.lazyRender : false),
        className: (typeof opts.className !== 'undefined' ? opts.className : ''),
        useShadows: (typeof opts.useShadows !== 'undefined' ? opts.useShadows : true),
        handleMouseWheel: (typeof opts.handleMouseWheel !== 'undefined' ? opts.handleMouseWheel : true),
        flipAxes: (typeof opts.flipAxes !== 'undefined' ? opts.flipAxes : false),
        consumeMouseWheelIfScrollbarIsNeeded: (typeof opts.consumeMouseWheelIfScrollbarIsNeeded !== 'undefined' ? opts.consumeMouseWheelIfScrollbarIsNeeded : false),
        alwaysConsumeMouseWheel: (typeof opts.alwaysConsumeMouseWheel !== 'undefined' ? opts.alwaysConsumeMouseWheel : false),
        scrollYToX: (typeof opts.scrollYToX !== 'undefined' ? opts.scrollYToX : false),
        mouseWheelScrollSensitivity: (typeof opts.mouseWheelScrollSensitivity !== 'undefined' ? opts.mouseWheelScrollSensitivity : 1),
        fastScrollSensitivity: (typeof opts.fastScrollSensitivity !== 'undefined' ? opts.fastScrollSensitivity : 5),
        scrollPredominantAxis: (typeof opts.scrollPredominantAxis !== 'undefined' ? opts.scrollPredominantAxis : true),
        mouseWheelSmoothScroll: (typeof opts.mouseWheelSmoothScroll !== 'undefined' ? opts.mouseWheelSmoothScroll : true),
        arrowSize: (typeof opts.arrowSize !== 'undefined' ? opts.arrowSize : 11),
        listenOnDomNode: (typeof opts.listenOnDomNode !== 'undefined' ? opts.listenOnDomNode : null),
        horizontal: (typeof opts.horizontal !== 'undefined' ? opts.horizontal : 1 /* ScrollbarVisibility.Auto */),
        horizontalScrollbarSize: (typeof opts.horizontalScrollbarSize !== 'undefined' ? opts.horizontalScrollbarSize : 10),
        horizontalSliderSize: (typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : 0),
        horizontalHasArrows: (typeof opts.horizontalHasArrows !== 'undefined' ? opts.horizontalHasArrows : false),
        vertical: (typeof opts.vertical !== 'undefined' ? opts.vertical : 1 /* ScrollbarVisibility.Auto */),
        verticalScrollbarSize: (typeof opts.verticalScrollbarSize !== 'undefined' ? opts.verticalScrollbarSize : 10),
        verticalHasArrows: (typeof opts.verticalHasArrows !== 'undefined' ? opts.verticalHasArrows : false),
        verticalSliderSize: (typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : 0),
        scrollByPage: (typeof opts.scrollByPage !== 'undefined' ? opts.scrollByPage : false)
    };
    result.horizontalSliderSize = (typeof opts.horizontalSliderSize !== 'undefined' ? opts.horizontalSliderSize : result.horizontalScrollbarSize);
    result.verticalSliderSize = (typeof opts.verticalSliderSize !== 'undefined' ? opts.verticalSliderSize : result.verticalScrollbarSize);
    // Defaults are different on Macs
    if (platform/* isMacintosh */.dz) {
        result.className += ' mac';
    }
    return result;
}


/***/ }),

/***/ 51744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: function() { return /* binding */ ScrollbarState; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * The minimal size of the slider (such that it can still be clickable) -- it is artificially enlarged.
 */
const MINIMUM_SLIDER_SIZE = 20;
class ScrollbarState {
    constructor(arrowSize, scrollbarSize, oppositeScrollbarSize, visibleSize, scrollSize, scrollPosition) {
        this._scrollbarSize = Math.round(scrollbarSize);
        this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
        this._arrowSize = Math.round(arrowSize);
        this._visibleSize = visibleSize;
        this._scrollSize = scrollSize;
        this._scrollPosition = scrollPosition;
        this._computedAvailableSize = 0;
        this._computedIsNeeded = false;
        this._computedSliderSize = 0;
        this._computedSliderRatio = 0;
        this._computedSliderPosition = 0;
        this._refreshComputedValues();
    }
    clone() {
        return new ScrollbarState(this._arrowSize, this._scrollbarSize, this._oppositeScrollbarSize, this._visibleSize, this._scrollSize, this._scrollPosition);
    }
    setVisibleSize(visibleSize) {
        const iVisibleSize = Math.round(visibleSize);
        if (this._visibleSize !== iVisibleSize) {
            this._visibleSize = iVisibleSize;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollSize(scrollSize) {
        const iScrollSize = Math.round(scrollSize);
        if (this._scrollSize !== iScrollSize) {
            this._scrollSize = iScrollSize;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollPosition(scrollPosition) {
        const iScrollPosition = Math.round(scrollPosition);
        if (this._scrollPosition !== iScrollPosition) {
            this._scrollPosition = iScrollPosition;
            this._refreshComputedValues();
            return true;
        }
        return false;
    }
    setScrollbarSize(scrollbarSize) {
        this._scrollbarSize = Math.round(scrollbarSize);
    }
    setOppositeScrollbarSize(oppositeScrollbarSize) {
        this._oppositeScrollbarSize = Math.round(oppositeScrollbarSize);
    }
    static _computeValues(oppositeScrollbarSize, arrowSize, visibleSize, scrollSize, scrollPosition) {
        const computedAvailableSize = Math.max(0, visibleSize - oppositeScrollbarSize);
        const computedRepresentableSize = Math.max(0, computedAvailableSize - 2 * arrowSize);
        const computedIsNeeded = (scrollSize > 0 && scrollSize > visibleSize);
        if (!computedIsNeeded) {
            // There is no need for a slider
            return {
                computedAvailableSize: Math.round(computedAvailableSize),
                computedIsNeeded: computedIsNeeded,
                computedSliderSize: Math.round(computedRepresentableSize),
                computedSliderRatio: 0,
                computedSliderPosition: 0,
            };
        }
        // We must artificially increase the size of the slider if needed, since the slider would be too small to grab with the mouse otherwise
        const computedSliderSize = Math.round(Math.max(MINIMUM_SLIDER_SIZE, Math.floor(visibleSize * computedRepresentableSize / scrollSize)));
        // The slider can move from 0 to `computedRepresentableSize` - `computedSliderSize`
        // in the same way `scrollPosition` can move from 0 to `scrollSize` - `visibleSize`.
        const computedSliderRatio = (computedRepresentableSize - computedSliderSize) / (scrollSize - visibleSize);
        const computedSliderPosition = (scrollPosition * computedSliderRatio);
        return {
            computedAvailableSize: Math.round(computedAvailableSize),
            computedIsNeeded: computedIsNeeded,
            computedSliderSize: Math.round(computedSliderSize),
            computedSliderRatio: computedSliderRatio,
            computedSliderPosition: Math.round(computedSliderPosition),
        };
    }
    _refreshComputedValues() {
        const r = ScrollbarState._computeValues(this._oppositeScrollbarSize, this._arrowSize, this._visibleSize, this._scrollSize, this._scrollPosition);
        this._computedAvailableSize = r.computedAvailableSize;
        this._computedIsNeeded = r.computedIsNeeded;
        this._computedSliderSize = r.computedSliderSize;
        this._computedSliderRatio = r.computedSliderRatio;
        this._computedSliderPosition = r.computedSliderPosition;
    }
    getArrowSize() {
        return this._arrowSize;
    }
    getScrollPosition() {
        return this._scrollPosition;
    }
    getRectangleLargeSize() {
        return this._computedAvailableSize;
    }
    getRectangleSmallSize() {
        return this._scrollbarSize;
    }
    isNeeded() {
        return this._computedIsNeeded;
    }
    getSliderSize() {
        return this._computedSliderSize;
    }
    getSliderPosition() {
        return this._computedSliderPosition;
    }
    /**
     * Compute a desired `scrollPosition` such that `offset` ends up in the center of the slider.
     * `offset` is based on the same coordinate system as the `sliderPosition`.
     */
    getDesiredScrollPositionFromOffset(offset) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const desiredSliderPosition = offset - this._arrowSize - this._computedSliderSize / 2;
        return Math.round(desiredSliderPosition / this._computedSliderRatio);
    }
    /**
     * Compute a desired `scrollPosition` from if offset is before or after the slider position.
     * If offset is before slider, treat as a page up (or left).  If after, page down (or right).
     * `offset` and `_computedSliderPosition` are based on the same coordinate system.
     * `_visibleSize` corresponds to a "page" of lines in the returned coordinate system.
     */
    getDesiredScrollPositionFromOffsetPaged(offset) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const correctedOffset = offset - this._arrowSize; // compensate if has arrows
        let desiredScrollPosition = this._scrollPosition;
        if (correctedOffset < this._computedSliderPosition) {
            desiredScrollPosition -= this._visibleSize; // page up/left
        }
        else {
            desiredScrollPosition += this._visibleSize; // page down/right
        }
        return desiredScrollPosition;
    }
    /**
     * Compute a desired `scrollPosition` such that the slider moves by `delta`.
     */
    getDesiredScrollPositionFromDelta(delta) {
        if (!this._computedIsNeeded) {
            // no need for a slider
            return 0;
        }
        const desiredSliderPosition = this._computedSliderPosition + delta;
        return Math.round(desiredSliderPosition / this._computedSliderRatio);
    }
}


/***/ }),

/***/ 86341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: function() { return /* binding */ SelectBox; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(69808);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js
var keyboardEvent = __webpack_require__(44767);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/markdownRenderer.js
var markdownRenderer = __webpack_require__(52405);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js + 2 modules
var listWidget = __webpack_require__(54530);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js
var keyCodes = __webpack_require__(95286);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxCustom.css
var selectBoxCustom = __webpack_require__(53287);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxCustom.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(selectBoxCustom/* default */.Z, options);




       /* harmony default export */ var selectBox_selectBoxCustom = (selectBoxCustom/* default */.Z && selectBoxCustom/* default */.Z.locals ? selectBoxCustom/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxCustom.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












const $ = dom.$;
const SELECT_OPTION_ENTRY_TEMPLATE_ID = 'selectOption.entry.template';
class SelectListRenderer {
    get templateId() { return SELECT_OPTION_ENTRY_TEMPLATE_ID; }
    renderTemplate(container) {
        const data = Object.create(null);
        data.root = container;
        data.text = dom/* append */.R3(container, $('.option-text'));
        data.detail = dom/* append */.R3(container, $('.option-detail'));
        data.decoratorRight = dom/* append */.R3(container, $('.option-decorator-right'));
        return data;
    }
    renderElement(element, index, templateData) {
        const data = templateData;
        const text = element.text;
        const detail = element.detail;
        const decoratorRight = element.decoratorRight;
        const isDisabled = element.isDisabled;
        data.text.textContent = text;
        data.detail.textContent = !!detail ? detail : '';
        data.decoratorRight.innerText = !!decoratorRight ? decoratorRight : '';
        // pseudo-select disabled option
        if (isDisabled) {
            data.root.classList.add('option-disabled');
        }
        else {
            // Make sure we do class removal from prior template rendering
            data.root.classList.remove('option-disabled');
        }
    }
    disposeTemplate(_templateData) {
        // noop
    }
}
class SelectBoxList extends lifecycle/* Disposable */.JT {
    constructor(options, selected, contextViewProvider, styles, selectBoxOptions) {
        super();
        this.options = [];
        this._currentSelection = 0;
        this._hasDetails = false;
        this._skipLayout = false;
        this._sticky = false; // for dev purposes only
        this._isVisible = false;
        this.styles = styles;
        this.selectBoxOptions = selectBoxOptions || Object.create(null);
        if (typeof this.selectBoxOptions.minBottomMargin !== 'number') {
            this.selectBoxOptions.minBottomMargin = SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN;
        }
        else if (this.selectBoxOptions.minBottomMargin < 0) {
            this.selectBoxOptions.minBottomMargin = 0;
        }
        this.selectElement = document.createElement('select');
        // Use custom CSS vars for padding calculation
        this.selectElement.className = 'monaco-select-box monaco-select-box-dropdown-padding';
        if (typeof this.selectBoxOptions.ariaLabel === 'string') {
            this.selectElement.setAttribute('aria-label', this.selectBoxOptions.ariaLabel);
        }
        if (typeof this.selectBoxOptions.ariaDescription === 'string') {
            this.selectElement.setAttribute('aria-description', this.selectBoxOptions.ariaDescription);
        }
        this._onDidSelect = new common_event/* Emitter */.Q5();
        this._register(this._onDidSelect);
        this.registerListeners();
        this.constructSelectDropDown(contextViewProvider);
        this.selected = selected || 0;
        if (options) {
            this.setOptions(options, selected);
        }
        this.initStyleSheet();
    }
    // IDelegate - List renderer
    getHeight() {
        return 22;
    }
    getTemplateId() {
        return SELECT_OPTION_ENTRY_TEMPLATE_ID;
    }
    constructSelectDropDown(contextViewProvider) {
        // SetUp ContextView container to hold select Dropdown
        this.contextViewProvider = contextViewProvider;
        this.selectDropDownContainer = dom.$('.monaco-select-box-dropdown-container');
        // Use custom CSS vars for padding calculation (shared with parent select)
        this.selectDropDownContainer.classList.add('monaco-select-box-dropdown-padding');
        // Setup container for select option details
        this.selectionDetailsPane = dom/* append */.R3(this.selectDropDownContainer, $('.select-box-details-pane'));
        // Create span flex box item/div we can measure and control
        const widthControlOuterDiv = dom/* append */.R3(this.selectDropDownContainer, $('.select-box-dropdown-container-width-control'));
        const widthControlInnerDiv = dom/* append */.R3(widthControlOuterDiv, $('.width-control-div'));
        this.widthControlElement = document.createElement('span');
        this.widthControlElement.className = 'option-text-width-control';
        dom/* append */.R3(widthControlInnerDiv, this.widthControlElement);
        // Always default to below position
        this._dropDownPosition = 0 /* AnchorPosition.BELOW */;
        // Inline stylesheet for themes
        this.styleElement = dom/* createStyleSheet */.dS(this.selectDropDownContainer);
        // Prevent dragging of dropdown #114329
        this.selectDropDownContainer.setAttribute('draggable', 'true');
        this._register(dom/* addDisposableListener */.nm(this.selectDropDownContainer, dom/* EventType */.tw.DRAG_START, (e) => {
            dom/* EventHelper */.zB.stop(e, true);
        }));
    }
    registerListeners() {
        // Parent native select keyboard listeners
        this._register(dom/* addStandardDisposableListener */.mu(this.selectElement, 'change', (e) => {
            this.selected = e.target.selectedIndex;
            this._onDidSelect.fire({
                index: e.target.selectedIndex,
                selected: e.target.value
            });
            if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                this.selectElement.title = this.options[this.selected].text;
            }
        }));
        // Have to implement both keyboard and mouse controllers to handle disabled options
        // Intercept mouse events to override normal select actions on parents
        this._register(dom/* addDisposableListener */.nm(this.selectElement, dom/* EventType */.tw.CLICK, (e) => {
            dom/* EventHelper */.zB.stop(e);
            if (this._isVisible) {
                this.hideSelectDropDown(true);
            }
            else {
                this.showSelectDropDown();
            }
        }));
        this._register(dom/* addDisposableListener */.nm(this.selectElement, dom/* EventType */.tw.MOUSE_DOWN, (e) => {
            dom/* EventHelper */.zB.stop(e);
        }));
        // Intercept touch events
        // The following implementation is slightly different from the mouse event handlers above.
        // Use the following helper variable, otherwise the list flickers.
        let listIsVisibleOnTouchStart;
        this._register(dom/* addDisposableListener */.nm(this.selectElement, 'touchstart', (e) => {
            listIsVisibleOnTouchStart = this._isVisible;
        }));
        this._register(dom/* addDisposableListener */.nm(this.selectElement, 'touchend', (e) => {
            dom/* EventHelper */.zB.stop(e);
            if (listIsVisibleOnTouchStart) {
                this.hideSelectDropDown(true);
            }
            else {
                this.showSelectDropDown();
            }
        }));
        // Intercept keyboard handling
        this._register(dom/* addDisposableListener */.nm(this.selectElement, dom/* EventType */.tw.KEY_DOWN, (e) => {
            const event = new keyboardEvent/* StandardKeyboardEvent */.y(e);
            let showDropDown = false;
            // Create and drop down select list on keyboard select
            if (platform/* isMacintosh */.dz) {
                if (event.keyCode === 18 /* KeyCode.DownArrow */ || event.keyCode === 16 /* KeyCode.UpArrow */ || event.keyCode === 10 /* KeyCode.Space */ || event.keyCode === 3 /* KeyCode.Enter */) {
                    showDropDown = true;
                }
            }
            else {
                if (event.keyCode === 18 /* KeyCode.DownArrow */ && event.altKey || event.keyCode === 16 /* KeyCode.UpArrow */ && event.altKey || event.keyCode === 10 /* KeyCode.Space */ || event.keyCode === 3 /* KeyCode.Enter */) {
                    showDropDown = true;
                }
            }
            if (showDropDown) {
                this.showSelectDropDown();
                dom/* EventHelper */.zB.stop(e, true);
            }
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(options, selected) {
        if (!arrays/* equals */.fS(this.options, options)) {
            this.options = options;
            this.selectElement.options.length = 0;
            this._hasDetails = false;
            this._cachedMaxDetailsHeight = undefined;
            this.options.forEach((option, index) => {
                this.selectElement.add(this.createOption(option.text, index, option.isDisabled));
                if (typeof option.description === 'string') {
                    this._hasDetails = true;
                }
            });
        }
        if (selected !== undefined) {
            this.select(selected);
            // Set current = selected since this is not necessarily a user exit
            this._currentSelection = this.selected;
        }
    }
    setOptionsList() {
        var _a;
        // Mirror options in drop-down
        // Populate select list for non-native select mode
        (_a = this.selectList) === null || _a === void 0 ? void 0 : _a.splice(0, this.selectList.length, this.options);
    }
    select(index) {
        if (index >= 0 && index < this.options.length) {
            this.selected = index;
        }
        else if (index > this.options.length - 1) {
            // Adjust index to end of list
            // This could make client out of sync with the select
            this.select(this.options.length - 1);
        }
        else if (this.selected < 0) {
            this.selected = 0;
        }
        this.selectElement.selectedIndex = this.selected;
        if (!!this.options[this.selected] && !!this.options[this.selected].text) {
            this.selectElement.title = this.options[this.selected].text;
        }
    }
    focus() {
        if (this.selectElement) {
            this.selectElement.tabIndex = 0;
            this.selectElement.focus();
        }
    }
    blur() {
        if (this.selectElement) {
            this.selectElement.tabIndex = -1;
            this.selectElement.blur();
        }
    }
    setFocusable(focusable) {
        this.selectElement.tabIndex = focusable ? 0 : -1;
    }
    render(container) {
        this.container = container;
        container.classList.add('select-container');
        container.appendChild(this.selectElement);
        this.styleSelectElement();
    }
    initStyleSheet() {
        const content = [];
        // Style non-native select mode
        if (this.styles.listFocusBackground) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.styles.listFocusBackground} !important; }`);
        }
        if (this.styles.listFocusForeground) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.styles.listFocusForeground} !important; }`);
        }
        if (this.styles.decoratorRightForeground) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.styles.decoratorRightForeground}; }`);
        }
        if (this.styles.selectBackground && this.styles.selectBorder && this.styles.selectBorder !== this.styles.selectBackground) {
            content.push(`.monaco-select-box-dropdown-container { border: 1px solid ${this.styles.selectBorder} } `);
            content.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectBorder} } `);
            content.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectBorder} } `);
        }
        else if (this.styles.selectListBorder) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.styles.selectListBorder} } `);
            content.push(`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.styles.selectListBorder} } `);
        }
        // Hover foreground - ignore for disabled options
        if (this.styles.listHoverForeground) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.styles.listHoverForeground} !important; }`);
        }
        // Hover background - ignore for disabled options
        if (this.styles.listHoverBackground) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.styles.listHoverBackground} !important; }`);
        }
        // Match quick input outline styles - ignore for disabled options
        if (this.styles.listFocusOutline) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.styles.listFocusOutline} !important; outline-offset: -1.6px !important; }`);
        }
        if (this.styles.listHoverOutline) {
            content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.styles.listHoverOutline} !important; outline-offset: -1.6px !important; }`);
        }
        // Clear list styles on focus and on hover for disabled options
        content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }`);
        content.push(`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }`);
        this.styleElement.textContent = content.join('\n');
    }
    styleSelectElement() {
        var _a, _b, _c;
        const background = (_a = this.styles.selectBackground) !== null && _a !== void 0 ? _a : '';
        const foreground = (_b = this.styles.selectForeground) !== null && _b !== void 0 ? _b : '';
        const border = (_c = this.styles.selectBorder) !== null && _c !== void 0 ? _c : '';
        this.selectElement.style.backgroundColor = background;
        this.selectElement.style.color = foreground;
        this.selectElement.style.borderColor = border;
    }
    styleList() {
        var _a, _b;
        const background = (_a = this.styles.selectBackground) !== null && _a !== void 0 ? _a : '';
        const listBackground = dom/* asCssValueWithDefault */.XT(this.styles.selectListBackground, background);
        this.selectDropDownListContainer.style.backgroundColor = listBackground;
        this.selectionDetailsPane.style.backgroundColor = listBackground;
        const optionsBorder = (_b = this.styles.focusBorder) !== null && _b !== void 0 ? _b : '';
        this.selectDropDownContainer.style.outlineColor = optionsBorder;
        this.selectDropDownContainer.style.outlineOffset = '-1px';
        this.selectList.style(this.styles);
    }
    createOption(value, index, disabled) {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        option.disabled = !!disabled;
        return option;
    }
    // ContextView dropdown methods
    showSelectDropDown() {
        this.selectionDetailsPane.innerText = '';
        if (!this.contextViewProvider || this._isVisible) {
            return;
        }
        // Lazily create and populate list only at open, moved from constructor
        this.createSelectList(this.selectDropDownContainer);
        this.setOptionsList();
        // This allows us to flip the position based on measurement
        // Set drop-down position above/below from required height and margins
        // If pre-layout cannot fit at least one option do not show drop-down
        this.contextViewProvider.showContextView({
            getAnchor: () => this.selectElement,
            render: (container) => this.renderSelectDropDown(container, true),
            layout: () => {
                this.layoutSelectDropDown();
            },
            onHide: () => {
                this.selectDropDownContainer.classList.remove('visible');
                this.selectElement.classList.remove('synthetic-focus');
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
        // Hide so we can relay out
        this._isVisible = true;
        this.hideSelectDropDown(false);
        this.contextViewProvider.showContextView({
            getAnchor: () => this.selectElement,
            render: (container) => this.renderSelectDropDown(container),
            layout: () => this.layoutSelectDropDown(),
            onHide: () => {
                this.selectDropDownContainer.classList.remove('visible');
                this.selectElement.classList.remove('synthetic-focus');
            },
            anchorPosition: this._dropDownPosition
        }, this.selectBoxOptions.optionsAsChildren ? this.container : undefined);
        // Track initial selection the case user escape, blur
        this._currentSelection = this.selected;
        this._isVisible = true;
        this.selectElement.setAttribute('aria-expanded', 'true');
    }
    hideSelectDropDown(focusSelect) {
        if (!this.contextViewProvider || !this._isVisible) {
            return;
        }
        this._isVisible = false;
        this.selectElement.setAttribute('aria-expanded', 'false');
        if (focusSelect) {
            this.selectElement.focus();
        }
        this.contextViewProvider.hideContextView();
    }
    renderSelectDropDown(container, preLayoutPosition) {
        container.appendChild(this.selectDropDownContainer);
        // Pre-Layout allows us to change position
        this.layoutSelectDropDown(preLayoutPosition);
        return {
            dispose: () => {
                // contextView will dispose itself if moving from one View to another
                try {
                    container.removeChild(this.selectDropDownContainer); // remove to take out the CSS rules we add
                }
                catch (error) {
                    // Ignore, removed already by change of focus
                }
            }
        };
    }
    // Iterate over detailed descriptions, find max height
    measureMaxDetailsHeight() {
        let maxDetailsPaneHeight = 0;
        this.options.forEach((_option, index) => {
            this.updateDetail(index);
            if (this.selectionDetailsPane.offsetHeight > maxDetailsPaneHeight) {
                maxDetailsPaneHeight = this.selectionDetailsPane.offsetHeight;
            }
        });
        return maxDetailsPaneHeight;
    }
    layoutSelectDropDown(preLayoutPosition) {
        // Avoid recursion from layout called in onListFocus
        if (this._skipLayout) {
            return false;
        }
        // Layout ContextView drop down select list and container
        // Have to manage our vertical overflow, sizing, position below or above
        // Position has to be determined and set prior to contextView instantiation
        if (this.selectList) {
            // Make visible to enable measurements
            this.selectDropDownContainer.classList.add('visible');
            const selectPosition = dom/* getDomNodePagePosition */.i(this.selectElement);
            const styles = getComputedStyle(this.selectElement);
            const verticalPadding = parseFloat(styles.getPropertyValue('--dropdown-padding-top')) + parseFloat(styles.getPropertyValue('--dropdown-padding-bottom'));
            const maxSelectDropDownHeightBelow = (window.innerHeight - selectPosition.top - selectPosition.height - (this.selectBoxOptions.minBottomMargin || 0));
            const maxSelectDropDownHeightAbove = (selectPosition.top - SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN);
            // Determine optimal width - min(longest option), opt(parent select, excluding margins), max(ContextView controlled)
            const selectWidth = this.selectElement.offsetWidth;
            const selectMinWidth = this.setWidthControlElement(this.widthControlElement);
            const selectOptimalWidth = Math.max(selectMinWidth, Math.round(selectWidth)).toString() + 'px';
            this.selectDropDownContainer.style.width = selectOptimalWidth;
            // Get initial list height and determine space above and below
            this.selectList.getHTMLElement().style.height = '';
            this.selectList.layout();
            let listHeight = this.selectList.contentHeight;
            if (this._hasDetails && this._cachedMaxDetailsHeight === undefined) {
                this._cachedMaxDetailsHeight = this.measureMaxDetailsHeight();
            }
            const maxDetailsPaneHeight = this._hasDetails ? this._cachedMaxDetailsHeight : 0;
            const minRequiredDropDownHeight = listHeight + verticalPadding + maxDetailsPaneHeight;
            const maxVisibleOptionsBelow = ((Math.floor((maxSelectDropDownHeightBelow - verticalPadding - maxDetailsPaneHeight) / this.getHeight())));
            const maxVisibleOptionsAbove = ((Math.floor((maxSelectDropDownHeightAbove - verticalPadding - maxDetailsPaneHeight) / this.getHeight())));
            // If we are only doing pre-layout check/adjust position only
            // Calculate vertical space available, flip up if insufficient
            // Use reflected padding on parent select, ContextView style
            // properties not available before DOM attachment
            if (preLayoutPosition) {
                // Check if select moved out of viewport , do not open
                // If at least one option cannot be shown, don't open the drop-down or hide/remove if open
                if ((selectPosition.top + selectPosition.height) > (window.innerHeight - 22)
                    || selectPosition.top < SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN
                    || ((maxVisibleOptionsBelow < 1) && (maxVisibleOptionsAbove < 1))) {
                    // Indicate we cannot open
                    return false;
                }
                // Determine if we have to flip up
                // Always show complete list items - never more than Max available vertical height
                if (maxVisibleOptionsBelow < SelectBoxList.DEFAULT_MINIMUM_VISIBLE_OPTIONS
                    && maxVisibleOptionsAbove > maxVisibleOptionsBelow
                    && this.options.length > maxVisibleOptionsBelow) {
                    this._dropDownPosition = 1 /* AnchorPosition.ABOVE */;
                    this.selectDropDownContainer.removeChild(this.selectDropDownListContainer);
                    this.selectDropDownContainer.removeChild(this.selectionDetailsPane);
                    this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
                    this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
                    this.selectionDetailsPane.classList.remove('border-top');
                    this.selectionDetailsPane.classList.add('border-bottom');
                }
                else {
                    this._dropDownPosition = 0 /* AnchorPosition.BELOW */;
                    this.selectDropDownContainer.removeChild(this.selectDropDownListContainer);
                    this.selectDropDownContainer.removeChild(this.selectionDetailsPane);
                    this.selectDropDownContainer.appendChild(this.selectDropDownListContainer);
                    this.selectDropDownContainer.appendChild(this.selectionDetailsPane);
                    this.selectionDetailsPane.classList.remove('border-bottom');
                    this.selectionDetailsPane.classList.add('border-top');
                }
                // Do full layout on showSelectDropDown only
                return true;
            }
            // Check if select out of viewport or cutting into status bar
            if ((selectPosition.top + selectPosition.height) > (window.innerHeight - 22)
                || selectPosition.top < SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN
                || (this._dropDownPosition === 0 /* AnchorPosition.BELOW */ && maxVisibleOptionsBelow < 1)
                || (this._dropDownPosition === 1 /* AnchorPosition.ABOVE */ && maxVisibleOptionsAbove < 1)) {
                // Cannot properly layout, close and hide
                this.hideSelectDropDown(true);
                return false;
            }
            // SetUp list dimensions and layout - account for container padding
            // Use position to check above or below available space
            if (this._dropDownPosition === 0 /* AnchorPosition.BELOW */) {
                if (this._isVisible && maxVisibleOptionsBelow + maxVisibleOptionsAbove < 1) {
                    // If drop-down is visible, must be doing a DOM re-layout, hide since we don't fit
                    // Hide drop-down, hide contextview, focus on parent select
                    this.hideSelectDropDown(true);
                    return false;
                }
                // Adjust list height to max from select bottom to margin (default/minBottomMargin)
                if (minRequiredDropDownHeight > maxSelectDropDownHeightBelow) {
                    listHeight = (maxVisibleOptionsBelow * this.getHeight());
                }
            }
            else {
                if (minRequiredDropDownHeight > maxSelectDropDownHeightAbove) {
                    listHeight = (maxVisibleOptionsAbove * this.getHeight());
                }
            }
            // Set adjusted list height and relayout
            this.selectList.layout(listHeight);
            this.selectList.domFocus();
            // Finally set focus on selected item
            if (this.selectList.length > 0) {
                this.selectList.setFocus([this.selected || 0]);
                this.selectList.reveal(this.selectList.getFocus()[0] || 0);
            }
            if (this._hasDetails) {
                // Leave the selectDropDownContainer to size itself according to children (list + details) - #57447
                this.selectList.getHTMLElement().style.height = (listHeight + verticalPadding) + 'px';
                this.selectDropDownContainer.style.height = '';
            }
            else {
                this.selectDropDownContainer.style.height = (listHeight + verticalPadding) + 'px';
            }
            this.updateDetail(this.selected);
            this.selectDropDownContainer.style.width = selectOptimalWidth;
            // Maintain focus outline on parent select as well as list container - tabindex for focus
            this.selectDropDownListContainer.setAttribute('tabindex', '0');
            this.selectElement.classList.add('synthetic-focus');
            this.selectDropDownContainer.classList.add('synthetic-focus');
            return true;
        }
        else {
            return false;
        }
    }
    setWidthControlElement(container) {
        let elementWidth = 0;
        if (container) {
            let longest = 0;
            let longestLength = 0;
            this.options.forEach((option, index) => {
                const detailLength = !!option.detail ? option.detail.length : 0;
                const rightDecoratorLength = !!option.decoratorRight ? option.decoratorRight.length : 0;
                const len = option.text.length + detailLength + rightDecoratorLength;
                if (len > longestLength) {
                    longest = index;
                    longestLength = len;
                }
            });
            container.textContent = this.options[longest].text + (!!this.options[longest].decoratorRight ? (this.options[longest].decoratorRight + ' ') : '');
            elementWidth = dom/* getTotalWidth */.w(container);
        }
        return elementWidth;
    }
    createSelectList(parent) {
        // If we have already constructive list on open, skip
        if (this.selectList) {
            return;
        }
        // SetUp container for list
        this.selectDropDownListContainer = dom/* append */.R3(parent, $('.select-box-dropdown-list-container'));
        this.listRenderer = new SelectListRenderer();
        this.selectList = new listWidget/* List */.aV('SelectBoxCustom', this.selectDropDownListContainer, this, [this.listRenderer], {
            useShadows: false,
            verticalScrollMode: 3 /* ScrollbarVisibility.Visible */,
            keyboardSupport: false,
            mouseSupport: false,
            accessibilityProvider: {
                getAriaLabel: element => {
                    let label = element.text;
                    if (element.detail) {
                        label += `. ${element.detail}`;
                    }
                    if (element.decoratorRight) {
                        label += `. ${element.decoratorRight}`;
                    }
                    if (element.description) {
                        label += `. ${element.description}`;
                    }
                    return label;
                },
                getWidgetAriaLabel: () => (0,nls/* localize */.NC)({ key: 'selectBox', comment: ['Behave like native select dropdown element.'] }, "Select Box"),
                getRole: () => platform/* isMacintosh */.dz ? '' : 'option',
                getWidgetRole: () => 'listbox'
            }
        });
        if (this.selectBoxOptions.ariaLabel) {
            this.selectList.ariaLabel = this.selectBoxOptions.ariaLabel;
        }
        // SetUp list keyboard controller - control navigation, disabled items, focus
        const onKeyDown = this._register(new browser_event/* DomEmitter */.Y(this.selectDropDownListContainer, 'keydown'));
        const onSelectDropDownKeyDown = common_event/* Event */.ju.chain(onKeyDown.event)
            .filter(() => this.selectList.length > 0)
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 3 /* KeyCode.Enter */).on(e => this.onEnter(e), this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 2 /* KeyCode.Tab */).on(e => this.onEnter(e), this)); // Tab should behave the same as enter, #79339
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 9 /* KeyCode.Escape */).on(e => this.onEscape(e), this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 16 /* KeyCode.UpArrow */).on(e => this.onUpArrow(e), this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 18 /* KeyCode.DownArrow */).on(e => this.onDownArrow(e), this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 12 /* KeyCode.PageDown */).on(this.onPageDown, this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 11 /* KeyCode.PageUp */).on(this.onPageUp, this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 14 /* KeyCode.Home */).on(this.onHome, this));
        this._register(onSelectDropDownKeyDown.filter(e => e.keyCode === 13 /* KeyCode.End */).on(this.onEnd, this));
        this._register(onSelectDropDownKeyDown.filter(e => (e.keyCode >= 21 /* KeyCode.Digit0 */ && e.keyCode <= 56 /* KeyCode.KeyZ */) || (e.keyCode >= 85 /* KeyCode.Semicolon */ && e.keyCode <= 113 /* KeyCode.NumpadDivide */)).on(this.onCharacter, this));
        // SetUp list mouse controller - control navigation, disabled items, focus
        this._register(dom/* addDisposableListener */.nm(this.selectList.getHTMLElement(), dom/* EventType */.tw.POINTER_UP, e => this.onPointerUp(e)));
        this._register(this.selectList.onMouseOver(e => typeof e.index !== 'undefined' && this.selectList.setFocus([e.index])));
        this._register(this.selectList.onDidChangeFocus(e => this.onListFocus(e)));
        this._register(dom/* addDisposableListener */.nm(this.selectDropDownContainer, dom/* EventType */.tw.FOCUS_OUT, e => {
            if (!this._isVisible || dom/* isAncestor */.jg(e.relatedTarget, this.selectDropDownContainer)) {
                return;
            }
            this.onListBlur();
        }));
        this.selectList.getHTMLElement().setAttribute('aria-label', this.selectBoxOptions.ariaLabel || '');
        this.selectList.getHTMLElement().setAttribute('aria-expanded', 'true');
        this.styleList();
    }
    // List methods
    // List mouse controller - active exit, select option, fire onDidSelect if change, return focus to parent select
    // Also takes in touchend events
    onPointerUp(e) {
        if (!this.selectList.length) {
            return;
        }
        dom/* EventHelper */.zB.stop(e);
        const target = e.target;
        if (!target) {
            return;
        }
        // Check our mouse event is on an option (not scrollbar)
        if (target.classList.contains('slider')) {
            return;
        }
        const listRowElement = target.closest('.monaco-list-row');
        if (!listRowElement) {
            return;
        }
        const index = Number(listRowElement.getAttribute('data-index'));
        const disabled = listRowElement.classList.contains('option-disabled');
        // Ignore mouse selection of disabled options
        if (index >= 0 && index < this.options.length && !disabled) {
            this.selected = index;
            this.select(this.selected);
            this.selectList.setFocus([this.selected]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
            // Only fire if selection change
            if (this.selected !== this._currentSelection) {
                // Set current = selected
                this._currentSelection = this.selected;
                this._onDidSelect.fire({
                    index: this.selectElement.selectedIndex,
                    selected: this.options[this.selected].text
                });
                if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                    this.selectElement.title = this.options[this.selected].text;
                }
            }
            this.hideSelectDropDown(true);
        }
    }
    // List Exit - passive - implicit no selection change, hide drop-down
    onListBlur() {
        if (this._sticky) {
            return;
        }
        if (this.selected !== this._currentSelection) {
            // Reset selected to current if no change
            this.select(this._currentSelection);
        }
        this.hideSelectDropDown(false);
    }
    renderDescriptionMarkdown(text, actionHandler) {
        const cleanRenderedMarkdown = (element) => {
            for (let i = 0; i < element.childNodes.length; i++) {
                const child = element.childNodes.item(i);
                const tagName = child.tagName && child.tagName.toLowerCase();
                if (tagName === 'img') {
                    element.removeChild(child);
                }
                else {
                    cleanRenderedMarkdown(child);
                }
            }
        };
        const rendered = (0,markdownRenderer/* renderMarkdown */.ap)({ value: text, supportThemeIcons: true }, { actionHandler });
        rendered.element.classList.add('select-box-description-markdown');
        cleanRenderedMarkdown(rendered.element);
        return rendered.element;
    }
    // List Focus Change - passive - update details pane with newly focused element's data
    onListFocus(e) {
        // Skip during initial layout
        if (!this._isVisible || !this._hasDetails) {
            return;
        }
        this.updateDetail(e.indexes[0]);
    }
    updateDetail(selectedIndex) {
        var _a, _b;
        this.selectionDetailsPane.innerText = '';
        const option = this.options[selectedIndex];
        const description = (_a = option === null || option === void 0 ? void 0 : option.description) !== null && _a !== void 0 ? _a : '';
        const descriptionIsMarkdown = (_b = option === null || option === void 0 ? void 0 : option.descriptionIsMarkdown) !== null && _b !== void 0 ? _b : false;
        if (description) {
            if (descriptionIsMarkdown) {
                const actionHandler = option.descriptionMarkdownActionHandler;
                this.selectionDetailsPane.appendChild(this.renderDescriptionMarkdown(description, actionHandler));
            }
            else {
                this.selectionDetailsPane.innerText = description;
            }
            this.selectionDetailsPane.style.display = 'block';
        }
        else {
            this.selectionDetailsPane.style.display = 'none';
        }
        // Avoid recursion
        this._skipLayout = true;
        this.contextViewProvider.layout();
        this._skipLayout = false;
    }
    // List keyboard controller
    // List exit - active - hide ContextView dropdown, reset selection, return focus to parent select
    onEscape(e) {
        dom/* EventHelper */.zB.stop(e);
        // Reset selection to value when opened
        this.select(this._currentSelection);
        this.hideSelectDropDown(true);
    }
    // List exit - active - hide ContextView dropdown, return focus to parent select, fire onDidSelect if change
    onEnter(e) {
        dom/* EventHelper */.zB.stop(e);
        // Only fire if selection change
        if (this.selected !== this._currentSelection) {
            this._currentSelection = this.selected;
            this._onDidSelect.fire({
                index: this.selectElement.selectedIndex,
                selected: this.options[this.selected].text
            });
            if (!!this.options[this.selected] && !!this.options[this.selected].text) {
                this.selectElement.title = this.options[this.selected].text;
            }
        }
        this.hideSelectDropDown(true);
    }
    // List navigation - have to handle a disabled option (jump over)
    onDownArrow(e) {
        if (this.selected < this.options.length - 1) {
            dom/* EventHelper */.zB.stop(e, true);
            // Skip disabled options
            const nextOptionDisabled = this.options[this.selected + 1].isDisabled;
            if (nextOptionDisabled && this.options.length > this.selected + 2) {
                this.selected += 2;
            }
            else if (nextOptionDisabled) {
                return;
            }
            else {
                this.selected++;
            }
            // Set focus/selection - only fire event when closing drop-down or on blur
            this.select(this.selected);
            this.selectList.setFocus([this.selected]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
        }
    }
    onUpArrow(e) {
        if (this.selected > 0) {
            dom/* EventHelper */.zB.stop(e, true);
            // Skip disabled options
            const previousOptionDisabled = this.options[this.selected - 1].isDisabled;
            if (previousOptionDisabled && this.selected > 1) {
                this.selected -= 2;
            }
            else {
                this.selected--;
            }
            // Set focus/selection - only fire event when closing drop-down or on blur
            this.select(this.selected);
            this.selectList.setFocus([this.selected]);
            this.selectList.reveal(this.selectList.getFocus()[0]);
        }
    }
    onPageUp(e) {
        dom/* EventHelper */.zB.stop(e);
        this.selectList.focusPreviousPage();
        // Allow scrolling to settle
        setTimeout(() => {
            this.selected = this.selectList.getFocus()[0];
            // Shift selection down if we land on a disabled option
            if (this.options[this.selected].isDisabled && this.selected < this.options.length - 1) {
                this.selected++;
                this.selectList.setFocus([this.selected]);
            }
            this.selectList.reveal(this.selected);
            this.select(this.selected);
        }, 1);
    }
    onPageDown(e) {
        dom/* EventHelper */.zB.stop(e);
        this.selectList.focusNextPage();
        // Allow scrolling to settle
        setTimeout(() => {
            this.selected = this.selectList.getFocus()[0];
            // Shift selection up if we land on a disabled option
            if (this.options[this.selected].isDisabled && this.selected > 0) {
                this.selected--;
                this.selectList.setFocus([this.selected]);
            }
            this.selectList.reveal(this.selected);
            this.select(this.selected);
        }, 1);
    }
    onHome(e) {
        dom/* EventHelper */.zB.stop(e);
        if (this.options.length < 2) {
            return;
        }
        this.selected = 0;
        if (this.options[this.selected].isDisabled && this.selected > 1) {
            this.selected++;
        }
        this.selectList.setFocus([this.selected]);
        this.selectList.reveal(this.selected);
        this.select(this.selected);
    }
    onEnd(e) {
        dom/* EventHelper */.zB.stop(e);
        if (this.options.length < 2) {
            return;
        }
        this.selected = this.options.length - 1;
        if (this.options[this.selected].isDisabled && this.selected > 1) {
            this.selected--;
        }
        this.selectList.setFocus([this.selected]);
        this.selectList.reveal(this.selected);
        this.select(this.selected);
    }
    // Mimic option first character navigation of native select
    onCharacter(e) {
        const ch = keyCodes/* KeyCodeUtils */.kL.toString(e.keyCode);
        let optionIndex = -1;
        for (let i = 0; i < this.options.length - 1; i++) {
            optionIndex = (i + this.selected + 1) % this.options.length;
            if (this.options[optionIndex].text.charAt(0).toUpperCase() === ch && !this.options[optionIndex].isDisabled) {
                this.select(optionIndex);
                this.selectList.setFocus([optionIndex]);
                this.selectList.reveal(this.selectList.getFocus()[0]);
                dom/* EventHelper */.zB.stop(e);
                break;
            }
        }
    }
    dispose() {
        this.hideSelectDropDown(false);
        super.dispose();
    }
}
SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_BOTTOM_MARGIN = 32;
SelectBoxList.DEFAULT_DROPDOWN_MINIMUM_TOP_MARGIN = 2;
SelectBoxList.DEFAULT_MINIMUM_VISIBLE_OPTIONS = 3;

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(43765);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBoxNative.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class SelectBoxNative extends lifecycle/* Disposable */.JT {
    constructor(options, selected, styles, selectBoxOptions) {
        super();
        this.selected = 0;
        this.selectBoxOptions = selectBoxOptions || Object.create(null);
        this.options = [];
        this.selectElement = document.createElement('select');
        this.selectElement.className = 'monaco-select-box';
        if (typeof this.selectBoxOptions.ariaLabel === 'string') {
            this.selectElement.setAttribute('aria-label', this.selectBoxOptions.ariaLabel);
        }
        if (typeof this.selectBoxOptions.ariaDescription === 'string') {
            this.selectElement.setAttribute('aria-description', this.selectBoxOptions.ariaDescription);
        }
        this._onDidSelect = this._register(new common_event/* Emitter */.Q5());
        this.styles = styles;
        this.registerListeners();
        this.setOptions(options, selected);
    }
    registerListeners() {
        this._register(touch/* Gesture */.o.addTarget(this.selectElement));
        [touch/* EventType */.t.Tap].forEach(eventType => {
            this._register(dom/* addDisposableListener */.nm(this.selectElement, eventType, (e) => {
                this.selectElement.focus();
            }));
        });
        this._register(dom/* addStandardDisposableListener */.mu(this.selectElement, 'click', (e) => {
            dom/* EventHelper */.zB.stop(e, true);
        }));
        this._register(dom/* addStandardDisposableListener */.mu(this.selectElement, 'change', (e) => {
            this.selectElement.title = e.target.value;
            this._onDidSelect.fire({
                index: e.target.selectedIndex,
                selected: e.target.value
            });
        }));
        this._register(dom/* addStandardDisposableListener */.mu(this.selectElement, 'keydown', (e) => {
            let showSelect = false;
            if (platform/* isMacintosh */.dz) {
                if (e.keyCode === 18 /* KeyCode.DownArrow */ || e.keyCode === 16 /* KeyCode.UpArrow */ || e.keyCode === 10 /* KeyCode.Space */) {
                    showSelect = true;
                }
            }
            else {
                if (e.keyCode === 18 /* KeyCode.DownArrow */ && e.altKey || e.keyCode === 10 /* KeyCode.Space */ || e.keyCode === 3 /* KeyCode.Enter */) {
                    showSelect = true;
                }
            }
            if (showSelect) {
                // Space, Enter, is used to expand select box, do not propagate it (prevent action bar action run)
                e.stopPropagation();
            }
        }));
    }
    get onDidSelect() {
        return this._onDidSelect.event;
    }
    setOptions(options, selected) {
        if (!this.options || !arrays/* equals */.fS(this.options, options)) {
            this.options = options;
            this.selectElement.options.length = 0;
            this.options.forEach((option, index) => {
                this.selectElement.add(this.createOption(option.text, index, option.isDisabled));
            });
        }
        if (selected !== undefined) {
            this.select(selected);
        }
    }
    select(index) {
        if (this.options.length === 0) {
            this.selected = 0;
        }
        else if (index >= 0 && index < this.options.length) {
            this.selected = index;
        }
        else if (index > this.options.length - 1) {
            // Adjust index to end of list
            // This could make client out of sync with the select
            this.select(this.options.length - 1);
        }
        else if (this.selected < 0) {
            this.selected = 0;
        }
        this.selectElement.selectedIndex = this.selected;
        if ((this.selected < this.options.length) && typeof this.options[this.selected].text === 'string') {
            this.selectElement.title = this.options[this.selected].text;
        }
        else {
            this.selectElement.title = '';
        }
    }
    focus() {
        if (this.selectElement) {
            this.selectElement.tabIndex = 0;
            this.selectElement.focus();
        }
    }
    blur() {
        if (this.selectElement) {
            this.selectElement.tabIndex = -1;
            this.selectElement.blur();
        }
    }
    setFocusable(focusable) {
        this.selectElement.tabIndex = focusable ? 0 : -1;
    }
    render(container) {
        container.classList.add('select-container');
        container.appendChild(this.selectElement);
        this.setOptions(this.options, this.selected);
        this.applyStyles();
    }
    applyStyles() {
        var _a, _b, _c;
        // Style native select
        if (this.selectElement) {
            this.selectElement.style.backgroundColor = (_a = this.styles.selectBackground) !== null && _a !== void 0 ? _a : '';
            this.selectElement.style.color = (_b = this.styles.selectForeground) !== null && _b !== void 0 ? _b : '';
            this.selectElement.style.borderColor = (_c = this.styles.selectBorder) !== null && _c !== void 0 ? _c : '';
        }
    }
    createOption(value, index, disabled) {
        const option = document.createElement('option');
        option.value = value;
        option.text = value;
        option.disabled = !!disabled;
        return option;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js
var widget = __webpack_require__(71308);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBox.css
var selectBox = __webpack_require__(67554);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBox.css

      
      
      
      
      
      
      
      
      

var selectBox_options = {};

selectBox_options.styleTagTransform = (styleTagTransform_default());
selectBox_options.setAttributes = (setAttributesWithoutAttributes_default());

      selectBox_options.insert = insertBySelector_default().bind(null, "head");
    
selectBox_options.domAPI = (styleDomAPI_default());
selectBox_options.insertStyleElement = (insertStyleElement_default());

var selectBox_update = injectStylesIntoStyleTag_default()(selectBox/* default */.Z, selectBox_options);




       /* harmony default export */ var selectBox_selectBox = (selectBox/* default */.Z && selectBox/* default */.Z.locals ? selectBox/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/selectBox/selectBox.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class SelectBox extends widget/* Widget */.$ {
    constructor(options, selected, contextViewProvider, styles, selectBoxOptions) {
        super();
        // Default to native SelectBox for OSX unless overridden
        if (platform/* isMacintosh */.dz && !(selectBoxOptions === null || selectBoxOptions === void 0 ? void 0 : selectBoxOptions.useCustomDrawn)) {
            this.selectBoxDelegate = new SelectBoxNative(options, selected, styles, selectBoxOptions);
        }
        else {
            this.selectBoxDelegate = new SelectBoxList(options, selected, contextViewProvider, styles, selectBoxOptions);
        }
        this._register(this.selectBoxDelegate);
    }
    // Public SelectBox Methods - routed through delegate interface
    get onDidSelect() {
        return this.selectBoxDelegate.onDidSelect;
    }
    setOptions(options, selected) {
        this.selectBoxDelegate.setOptions(options, selected);
    }
    select(index) {
        this.selectBoxDelegate.select(index);
    }
    focus() {
        this.selectBoxDelegate.focus();
    }
    blur() {
        this.selectBoxDelegate.blur();
    }
    setFocusable(focusable) {
        this.selectBoxDelegate.setFocusable(focusable);
    }
    render(container) {
        this.selectBoxDelegate.render(container);
    }
}


/***/ }),

/***/ 32607:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: function() { return /* binding */ Sizing; },
  z: function() { return /* binding */ SplitView; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(69808);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js + 1 modules
var sash_sash = __webpack_require__(4025);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(4186);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/numbers.js
var numbers = __webpack_require__(20484);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/scrollable.js
var scrollable = __webpack_require__(22687);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.css
var splitview = __webpack_require__(46825);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(splitview/* default */.Z, options);




       /* harmony default export */ var splitview_splitview = (splitview/* default */.Z && splitview/* default */.Z.locals ? splitview/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












const defaultStyles = {
    separatorBorder: color/* Color */.Il.transparent
};
class ViewItem {
    set size(size) {
        this._size = size;
    }
    get size() {
        return this._size;
    }
    get visible() {
        return typeof this._cachedVisibleSize === 'undefined';
    }
    setVisible(visible, size) {
        var _a, _b;
        if (visible === this.visible) {
            return;
        }
        if (visible) {
            this.size = (0,numbers/* clamp */.uZ)(this._cachedVisibleSize, this.viewMinimumSize, this.viewMaximumSize);
            this._cachedVisibleSize = undefined;
        }
        else {
            this._cachedVisibleSize = typeof size === 'number' ? size : this.size;
            this.size = 0;
        }
        this.container.classList.toggle('visible', visible);
        (_b = (_a = this.view).setVisible) === null || _b === void 0 ? void 0 : _b.call(_a, visible);
    }
    get minimumSize() { return this.visible ? this.view.minimumSize : 0; }
    get viewMinimumSize() { return this.view.minimumSize; }
    get maximumSize() { return this.visible ? this.view.maximumSize : 0; }
    get viewMaximumSize() { return this.view.maximumSize; }
    get priority() { return this.view.priority; }
    get proportionalLayout() { var _a; return (_a = this.view.proportionalLayout) !== null && _a !== void 0 ? _a : true; }
    get snap() { return !!this.view.snap; }
    set enabled(enabled) {
        this.container.style.pointerEvents = enabled ? '' : 'none';
    }
    constructor(container, view, size, disposable) {
        this.container = container;
        this.view = view;
        this.disposable = disposable;
        this._cachedVisibleSize = undefined;
        if (typeof size === 'number') {
            this._size = size;
            this._cachedVisibleSize = undefined;
            container.classList.add('visible');
        }
        else {
            this._size = 0;
            this._cachedVisibleSize = size.cachedVisibleSize;
        }
    }
    layout(offset, layoutContext) {
        this.layoutContainer(offset);
        this.view.layout(this.size, offset, layoutContext);
    }
    dispose() {
        this.disposable.dispose();
    }
}
class VerticalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.top = `${offset}px`;
        this.container.style.height = `${this.size}px`;
    }
}
class HorizontalViewItem extends ViewItem {
    layoutContainer(offset) {
        this.container.style.left = `${offset}px`;
        this.container.style.width = `${this.size}px`;
    }
}
var State;
(function (State) {
    State[State["Idle"] = 0] = "Idle";
    State[State["Busy"] = 1] = "Busy";
})(State || (State = {}));
var Sizing;
(function (Sizing) {
    /**
     * When adding or removing views, distribute the delta space among
     * all other views.
     */
    Sizing.Distribute = { type: 'distribute' };
    /**
     * When adding or removing views, split the delta space with another
     * specific view, indexed by the provided `index`.
     */
    function Split(index) { return { type: 'split', index }; }
    Sizing.Split = Split;
    /**
     * When adding a view, use DistributeSizing when all pre-existing views are
     * distributed evenly, otherwise use SplitSizing.
     */
    function Auto(index) { return { type: 'auto', index }; }
    Sizing.Auto = Auto;
    /**
     * When adding or removing views, assume the view is invisible.
     */
    function Invisible(cachedVisibleSize) { return { type: 'invisible', cachedVisibleSize }; }
    Sizing.Invisible = Invisible;
})(Sizing || (Sizing = {}));
/**
 * The {@link SplitView} is the UI component which implements a one dimensional
 * flex-like layout algorithm for a collection of {@link IView} instances, which
 * are essentially HTMLElement instances with the following size constraints:
 *
 * - {@link IView.minimumSize}
 * - {@link IView.maximumSize}
 * - {@link IView.priority}
 * - {@link IView.snap}
 *
 * In case the SplitView doesn't have enough size to fit all views, it will overflow
 * its content with a scrollbar.
 *
 * In between each pair of views there will be a {@link Sash} allowing the user
 * to resize the views, making sure the constraints are respected.
 *
 * An optional {@link TLayoutContext layout context type} may be used in order to
 * pass along layout contextual data from the {@link SplitView.layout} method down
 * to each view's {@link IView.layout} calls.
 *
 * Features:
 * - Flex-like layout algorithm
 * - Snap support
 * - Orthogonal sash support, for corner sashes
 * - View hide/show support
 * - View swap/move support
 * - Alt key modifier behavior, macOS style
 */
class SplitView extends lifecycle/* Disposable */.JT {
    get orthogonalStartSash() { return this._orthogonalStartSash; }
    get orthogonalEndSash() { return this._orthogonalEndSash; }
    get startSnappingEnabled() { return this._startSnappingEnabled; }
    get endSnappingEnabled() { return this._endSnappingEnabled; }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the left- or top-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */
    set orthogonalStartSash(sash) {
        for (const sashItem of this.sashItems) {
            sashItem.sash.orthogonalStartSash = sash;
        }
        this._orthogonalStartSash = sash;
    }
    /**
     * A reference to a sash, perpendicular to all sashes in this {@link SplitView},
     * located at the right- or bottom-most side of the SplitView.
     * Corner sashes will be created automatically at the intersections.
     */
    set orthogonalEndSash(sash) {
        for (const sashItem of this.sashItems) {
            sashItem.sash.orthogonalEndSash = sash;
        }
        this._orthogonalEndSash = sash;
    }
    /**
     * Enable/disable snapping at the beginning of this {@link SplitView}.
     */
    set startSnappingEnabled(startSnappingEnabled) {
        if (this._startSnappingEnabled === startSnappingEnabled) {
            return;
        }
        this._startSnappingEnabled = startSnappingEnabled;
        this.updateSashEnablement();
    }
    /**
     * Enable/disable snapping at the end of this {@link SplitView}.
     */
    set endSnappingEnabled(endSnappingEnabled) {
        if (this._endSnappingEnabled === endSnappingEnabled) {
            return;
        }
        this._endSnappingEnabled = endSnappingEnabled;
        this.updateSashEnablement();
    }
    /**
     * Create a new {@link SplitView} instance.
     */
    constructor(container, options = {}) {
        var _a, _b, _c, _d, _e;
        super();
        this.size = 0;
        this.contentSize = 0;
        this.proportions = undefined;
        this.viewItems = [];
        this.sashItems = []; // used in tests
        this.state = State.Idle;
        this._onDidSashChange = this._register(new common_event/* Emitter */.Q5());
        this._onDidSashReset = this._register(new common_event/* Emitter */.Q5());
        this._startSnappingEnabled = true;
        this._endSnappingEnabled = true;
        /**
         * Fires whenever the user resizes a {@link Sash sash}.
         */
        this.onDidSashChange = this._onDidSashChange.event;
        /**
         * Fires whenever the user double clicks a {@link Sash sash}.
         */
        this.onDidSashReset = this._onDidSashReset.event;
        this.orientation = (_a = options.orientation) !== null && _a !== void 0 ? _a : 0 /* Orientation.VERTICAL */;
        this.inverseAltBehavior = (_b = options.inverseAltBehavior) !== null && _b !== void 0 ? _b : false;
        this.proportionalLayout = (_c = options.proportionalLayout) !== null && _c !== void 0 ? _c : true;
        this.getSashOrthogonalSize = options.getSashOrthogonalSize;
        this.el = document.createElement('div');
        this.el.classList.add('monaco-split-view2');
        this.el.classList.add(this.orientation === 0 /* Orientation.VERTICAL */ ? 'vertical' : 'horizontal');
        container.appendChild(this.el);
        this.sashContainer = (0,dom/* append */.R3)(this.el, (0,dom.$)('.sash-container'));
        this.viewContainer = (0,dom.$)('.split-view-container');
        this.scrollable = new scrollable/* Scrollable */.Rm({
            forceIntegerValues: true,
            smoothScrollDuration: 125,
            scheduleAtNextAnimationFrame: dom/* scheduleAtNextAnimationFrame */.jL
        });
        this.scrollableElement = this._register(new scrollableElement/* SmoothScrollableElement */.$Z(this.viewContainer, {
            vertical: this.orientation === 0 /* Orientation.VERTICAL */ ? ((_d = options.scrollbarVisibility) !== null && _d !== void 0 ? _d : 1 /* ScrollbarVisibility.Auto */) : 2 /* ScrollbarVisibility.Hidden */,
            horizontal: this.orientation === 1 /* Orientation.HORIZONTAL */ ? ((_e = options.scrollbarVisibility) !== null && _e !== void 0 ? _e : 1 /* ScrollbarVisibility.Auto */) : 2 /* ScrollbarVisibility.Hidden */
        }, this.scrollable));
        // https://github.com/microsoft/vscode/issues/157737
        const onDidScrollViewContainer = this._register(new browser_event/* DomEmitter */.Y(this.viewContainer, 'scroll')).event;
        this._register(onDidScrollViewContainer(_ => {
            const position = this.scrollableElement.getScrollPosition();
            const scrollLeft = Math.abs(this.viewContainer.scrollLeft - position.scrollLeft) <= 1 ? undefined : this.viewContainer.scrollLeft;
            const scrollTop = Math.abs(this.viewContainer.scrollTop - position.scrollTop) <= 1 ? undefined : this.viewContainer.scrollTop;
            if (scrollLeft !== undefined || scrollTop !== undefined) {
                this.scrollableElement.setScrollPosition({ scrollLeft, scrollTop });
            }
        }));
        this.onDidScroll = this.scrollableElement.onScroll;
        this._register(this.onDidScroll(e => {
            if (e.scrollTopChanged) {
                this.viewContainer.scrollTop = e.scrollTop;
            }
            if (e.scrollLeftChanged) {
                this.viewContainer.scrollLeft = e.scrollLeft;
            }
        }));
        (0,dom/* append */.R3)(this.el, this.scrollableElement.getDomNode());
        this.style(options.styles || defaultStyles);
        // We have an existing set of view, add them now
        if (options.descriptor) {
            this.size = options.descriptor.size;
            options.descriptor.views.forEach((viewDescriptor, index) => {
                const sizing = types/* isUndefined */.o8(viewDescriptor.visible) || viewDescriptor.visible ? viewDescriptor.size : { type: 'invisible', cachedVisibleSize: viewDescriptor.size };
                const view = viewDescriptor.view;
                this.doAddView(view, sizing, index, true);
            });
            // Initialize content size and proportions for first layout
            this.contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
            this.saveProportions();
        }
    }
    style(styles) {
        if (styles.separatorBorder.isTransparent()) {
            this.el.classList.remove('separator-border');
            this.el.style.removeProperty('--separator-border');
        }
        else {
            this.el.classList.add('separator-border');
            this.el.style.setProperty('--separator-border', styles.separatorBorder.toString());
        }
    }
    /**
     * Add a {@link IView view} to this {@link SplitView}.
     *
     * @param view The view to add.
     * @param size Either a fixed size, or a dynamic {@link Sizing} strategy.
     * @param index The index to insert the view on.
     * @param skipLayout Whether layout should be skipped.
     */
    addView(view, size, index = this.viewItems.length, skipLayout) {
        this.doAddView(view, size, index, skipLayout);
    }
    /**
     * Layout the {@link SplitView}.
     *
     * @param size The entire size of the {@link SplitView}.
     * @param layoutContext An optional layout context to pass along to {@link IView views}.
     */
    layout(size, layoutContext) {
        const previousSize = Math.max(this.size, this.contentSize);
        this.size = size;
        this.layoutContext = layoutContext;
        if (!this.proportions) {
            const indexes = (0,arrays/* range */.w6)(this.viewItems.length);
            const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
            const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
            this.resize(this.viewItems.length - 1, size - previousSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        }
        else {
            let total = 0;
            for (let i = 0; i < this.viewItems.length; i++) {
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number') {
                    total += proportion;
                }
                else {
                    size -= item.size;
                }
            }
            for (let i = 0; i < this.viewItems.length; i++) {
                const item = this.viewItems[i];
                const proportion = this.proportions[i];
                if (typeof proportion === 'number') {
                    item.size = (0,numbers/* clamp */.uZ)(Math.round(proportion * size / total), item.minimumSize, item.maximumSize);
                }
            }
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    saveProportions() {
        if (this.proportionalLayout && this.contentSize > 0) {
            this.proportions = this.viewItems.map(i => i.proportionalLayout ? i.size / this.contentSize : undefined);
        }
    }
    onSashStart({ sash, start, alt }) {
        for (const item of this.viewItems) {
            item.enabled = false;
        }
        const index = this.sashItems.findIndex(item => item.sash === sash);
        // This way, we can press Alt while we resize a sash, macOS style!
        const disposable = (0,lifecycle/* combinedDisposable */.F8)((0,dom/* addDisposableListener */.nm)(document.body, 'keydown', e => resetSashDragState(this.sashDragState.current, e.altKey)), (0,dom/* addDisposableListener */.nm)(document.body, 'keyup', () => resetSashDragState(this.sashDragState.current, false)));
        const resetSashDragState = (start, alt) => {
            const sizes = this.viewItems.map(i => i.size);
            let minDelta = Number.NEGATIVE_INFINITY;
            let maxDelta = Number.POSITIVE_INFINITY;
            if (this.inverseAltBehavior) {
                alt = !alt;
            }
            if (alt) {
                // When we're using the last sash with Alt, we're resizing
                // the view to the left/up, instead of right/down as usual
                // Thus, we must do the inverse of the usual
                const isLastSash = index === this.sashItems.length - 1;
                if (isLastSash) {
                    const viewItem = this.viewItems[index];
                    minDelta = (viewItem.minimumSize - viewItem.size) / 2;
                    maxDelta = (viewItem.maximumSize - viewItem.size) / 2;
                }
                else {
                    const viewItem = this.viewItems[index + 1];
                    minDelta = (viewItem.size - viewItem.maximumSize) / 2;
                    maxDelta = (viewItem.size - viewItem.minimumSize) / 2;
                }
            }
            let snapBefore;
            let snapAfter;
            if (!alt) {
                const upIndexes = (0,arrays/* range */.w6)(index, -1);
                const downIndexes = (0,arrays/* range */.w6)(index + 1, this.viewItems.length);
                const minDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].minimumSize - sizes[i]), 0);
                const maxDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].viewMaximumSize - sizes[i]), 0);
                const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].minimumSize), 0);
                const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].viewMaximumSize), 0);
                const minDelta = Math.max(minDeltaUp, minDeltaDown);
                const maxDelta = Math.min(maxDeltaDown, maxDeltaUp);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                if (typeof snapBeforeIndex === 'number') {
                    const viewItem = this.viewItems[snapBeforeIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapBefore = {
                        index: snapBeforeIndex,
                        limitDelta: viewItem.visible ? minDelta - halfSize : minDelta + halfSize,
                        size: viewItem.size
                    };
                }
                if (typeof snapAfterIndex === 'number') {
                    const viewItem = this.viewItems[snapAfterIndex];
                    const halfSize = Math.floor(viewItem.viewMinimumSize / 2);
                    snapAfter = {
                        index: snapAfterIndex,
                        limitDelta: viewItem.visible ? maxDelta + halfSize : maxDelta - halfSize,
                        size: viewItem.size
                    };
                }
            }
            this.sashDragState = { start, current: start, index, sizes, minDelta, maxDelta, alt, snapBefore, snapAfter, disposable };
        };
        resetSashDragState(start, alt);
    }
    onSashChange({ current }) {
        const { index, start, sizes, alt, minDelta, maxDelta, snapBefore, snapAfter } = this.sashDragState;
        this.sashDragState.current = current;
        const delta = current - start;
        const newDelta = this.resize(index, delta, sizes, undefined, undefined, minDelta, maxDelta, snapBefore, snapAfter);
        if (alt) {
            const isLastSash = index === this.sashItems.length - 1;
            const newSizes = this.viewItems.map(i => i.size);
            const viewItemIndex = isLastSash ? index : index + 1;
            const viewItem = this.viewItems[viewItemIndex];
            const newMinDelta = viewItem.size - viewItem.maximumSize;
            const newMaxDelta = viewItem.size - viewItem.minimumSize;
            const resizeIndex = isLastSash ? index - 1 : index + 1;
            this.resize(resizeIndex, -newDelta, newSizes, undefined, undefined, newMinDelta, newMaxDelta);
        }
        this.distributeEmptySpace();
        this.layoutViews();
    }
    onSashEnd(index) {
        this._onDidSashChange.fire(index);
        this.sashDragState.disposable.dispose();
        this.saveProportions();
        for (const item of this.viewItems) {
            item.enabled = true;
        }
    }
    onViewChange(item, size) {
        const index = this.viewItems.indexOf(item);
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        size = typeof size === 'number' ? size : item.size;
        size = (0,numbers/* clamp */.uZ)(size, item.minimumSize, item.maximumSize);
        if (this.inverseAltBehavior && index > 0) {
            // In this case, we want the view to grow or shrink both sides equally
            // so we just resize the "left" side by half and let `resize` do the clamping magic
            this.resize(index - 1, Math.floor((item.size - size) / 2));
            this.distributeEmptySpace();
            this.layoutViews();
        }
        else {
            item.size = size;
            this.relayout([index], undefined);
        }
    }
    /**
     * Resize a {@link IView view} within the {@link SplitView}.
     *
     * @param index The {@link IView view} index.
     * @param size The {@link IView view} size.
     */
    resizeView(index, size) {
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        if (index < 0 || index >= this.viewItems.length) {
            return;
        }
        const indexes = (0,arrays/* range */.w6)(this.viewItems.length).filter(i => i !== index);
        const lowPriorityIndexes = [...indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */), index];
        const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
        const item = this.viewItems[index];
        size = Math.round(size);
        size = (0,numbers/* clamp */.uZ)(size, item.minimumSize, Math.min(item.maximumSize, this.size));
        item.size = size;
        this.relayout(lowPriorityIndexes, highPriorityIndexes);
        this.state = State.Idle;
    }
    /**
     * Distribute the entire {@link SplitView} size among all {@link IView views}.
     */
    distributeViewSizes() {
        const flexibleViewItems = [];
        let flexibleSize = 0;
        for (const item of this.viewItems) {
            if (item.maximumSize - item.minimumSize > 0) {
                flexibleViewItems.push(item);
                flexibleSize += item.size;
            }
        }
        const size = Math.floor(flexibleSize / flexibleViewItems.length);
        for (const item of flexibleViewItems) {
            item.size = (0,numbers/* clamp */.uZ)(size, item.minimumSize, item.maximumSize);
        }
        const indexes = (0,arrays/* range */.w6)(this.viewItems.length);
        const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
        const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
        this.relayout(lowPriorityIndexes, highPriorityIndexes);
    }
    /**
     * Returns the size of a {@link IView view}.
     */
    getViewSize(index) {
        if (index < 0 || index >= this.viewItems.length) {
            return -1;
        }
        return this.viewItems[index].size;
    }
    doAddView(view, size, index = this.viewItems.length, skipLayout) {
        if (this.state !== State.Idle) {
            throw new Error('Cant modify splitview');
        }
        this.state = State.Busy;
        // Add view
        const container = (0,dom.$)('.split-view-view');
        if (index === this.viewItems.length) {
            this.viewContainer.appendChild(container);
        }
        else {
            this.viewContainer.insertBefore(container, this.viewContainer.children.item(index));
        }
        const onChangeDisposable = view.onDidChange(size => this.onViewChange(item, size));
        const containerDisposable = (0,lifecycle/* toDisposable */.OF)(() => this.viewContainer.removeChild(container));
        const disposable = (0,lifecycle/* combinedDisposable */.F8)(onChangeDisposable, containerDisposable);
        let viewSize;
        if (typeof size === 'number') {
            viewSize = size;
        }
        else {
            if (size.type === 'auto') {
                if (this.areViewsDistributed()) {
                    size = { type: 'distribute' };
                }
                else {
                    size = { type: 'split', index: size.index };
                }
            }
            if (size.type === 'split') {
                viewSize = this.getViewSize(size.index) / 2;
            }
            else if (size.type === 'invisible') {
                viewSize = { cachedVisibleSize: size.cachedVisibleSize };
            }
            else {
                viewSize = view.minimumSize;
            }
        }
        const item = this.orientation === 0 /* Orientation.VERTICAL */
            ? new VerticalViewItem(container, view, viewSize, disposable)
            : new HorizontalViewItem(container, view, viewSize, disposable);
        this.viewItems.splice(index, 0, item);
        // Add sash
        if (this.viewItems.length > 1) {
            const opts = { orthogonalStartSash: this.orthogonalStartSash, orthogonalEndSash: this.orthogonalEndSash };
            const sash = this.orientation === 0 /* Orientation.VERTICAL */
                ? new sash_sash/* Sash */.g(this.sashContainer, { getHorizontalSashTop: s => this.getSashPosition(s), getHorizontalSashWidth: this.getSashOrthogonalSize }, Object.assign(Object.assign({}, opts), { orientation: 1 /* Orientation.HORIZONTAL */ }))
                : new sash_sash/* Sash */.g(this.sashContainer, { getVerticalSashLeft: s => this.getSashPosition(s), getVerticalSashHeight: this.getSashOrthogonalSize }, Object.assign(Object.assign({}, opts), { orientation: 0 /* Orientation.VERTICAL */ }));
            const sashEventMapper = this.orientation === 0 /* Orientation.VERTICAL */
                ? (e) => ({ sash, start: e.startY, current: e.currentY, alt: e.altKey })
                : (e) => ({ sash, start: e.startX, current: e.currentX, alt: e.altKey });
            const onStart = common_event/* Event */.ju.map(sash.onDidStart, sashEventMapper);
            const onStartDisposable = onStart(this.onSashStart, this);
            const onChange = common_event/* Event */.ju.map(sash.onDidChange, sashEventMapper);
            const onChangeDisposable = onChange(this.onSashChange, this);
            const onEnd = common_event/* Event */.ju.map(sash.onDidEnd, () => this.sashItems.findIndex(item => item.sash === sash));
            const onEndDisposable = onEnd(this.onSashEnd, this);
            const onDidResetDisposable = sash.onDidReset(() => {
                const index = this.sashItems.findIndex(item => item.sash === sash);
                const upIndexes = (0,arrays/* range */.w6)(index, -1);
                const downIndexes = (0,arrays/* range */.w6)(index + 1, this.viewItems.length);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                if (typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible) {
                    return;
                }
                if (typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible) {
                    return;
                }
                this._onDidSashReset.fire(index);
            });
            const disposable = (0,lifecycle/* combinedDisposable */.F8)(onStartDisposable, onChangeDisposable, onEndDisposable, onDidResetDisposable, sash);
            const sashItem = { sash, disposable };
            this.sashItems.splice(index - 1, 0, sashItem);
        }
        container.appendChild(view.element);
        let highPriorityIndexes;
        if (typeof size !== 'number' && size.type === 'split') {
            highPriorityIndexes = [size.index];
        }
        if (!skipLayout) {
            this.relayout([index], highPriorityIndexes);
        }
        this.state = State.Idle;
        if (!skipLayout && typeof size !== 'number' && size.type === 'distribute') {
            this.distributeViewSizes();
        }
    }
    relayout(lowPriorityIndexes, highPriorityIndexes) {
        const contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        this.resize(this.viewItems.length - 1, this.size - contentSize, undefined, lowPriorityIndexes, highPriorityIndexes);
        this.distributeEmptySpace();
        this.layoutViews();
        this.saveProportions();
    }
    resize(index, delta, sizes = this.viewItems.map(i => i.size), lowPriorityIndexes, highPriorityIndexes, overloadMinDelta = Number.NEGATIVE_INFINITY, overloadMaxDelta = Number.POSITIVE_INFINITY, snapBefore, snapAfter) {
        if (index < 0 || index >= this.viewItems.length) {
            return 0;
        }
        const upIndexes = (0,arrays/* range */.w6)(index, -1);
        const downIndexes = (0,arrays/* range */.w6)(index + 1, this.viewItems.length);
        if (highPriorityIndexes) {
            for (const index of highPriorityIndexes) {
                (0,arrays/* pushToStart */.zI)(upIndexes, index);
                (0,arrays/* pushToStart */.zI)(downIndexes, index);
            }
        }
        if (lowPriorityIndexes) {
            for (const index of lowPriorityIndexes) {
                (0,arrays/* pushToEnd */.al)(upIndexes, index);
                (0,arrays/* pushToEnd */.al)(downIndexes, index);
            }
        }
        const upItems = upIndexes.map(i => this.viewItems[i]);
        const upSizes = upIndexes.map(i => sizes[i]);
        const downItems = downIndexes.map(i => this.viewItems[i]);
        const downSizes = downIndexes.map(i => sizes[i]);
        const minDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].minimumSize - sizes[i]), 0);
        const maxDeltaUp = upIndexes.reduce((r, i) => r + (this.viewItems[i].maximumSize - sizes[i]), 0);
        const maxDeltaDown = downIndexes.length === 0 ? Number.POSITIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].minimumSize), 0);
        const minDeltaDown = downIndexes.length === 0 ? Number.NEGATIVE_INFINITY : downIndexes.reduce((r, i) => r + (sizes[i] - this.viewItems[i].maximumSize), 0);
        const minDelta = Math.max(minDeltaUp, minDeltaDown, overloadMinDelta);
        const maxDelta = Math.min(maxDeltaDown, maxDeltaUp, overloadMaxDelta);
        let snapped = false;
        if (snapBefore) {
            const snapView = this.viewItems[snapBefore.index];
            const visible = delta >= snapBefore.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapBefore.size);
        }
        if (!snapped && snapAfter) {
            const snapView = this.viewItems[snapAfter.index];
            const visible = delta < snapAfter.limitDelta;
            snapped = visible !== snapView.visible;
            snapView.setVisible(visible, snapAfter.size);
        }
        if (snapped) {
            return this.resize(index, delta, sizes, lowPriorityIndexes, highPriorityIndexes, overloadMinDelta, overloadMaxDelta);
        }
        delta = (0,numbers/* clamp */.uZ)(delta, minDelta, maxDelta);
        for (let i = 0, deltaUp = delta; i < upItems.length; i++) {
            const item = upItems[i];
            const size = (0,numbers/* clamp */.uZ)(upSizes[i] + deltaUp, item.minimumSize, item.maximumSize);
            const viewDelta = size - upSizes[i];
            deltaUp -= viewDelta;
            item.size = size;
        }
        for (let i = 0, deltaDown = delta; i < downItems.length; i++) {
            const item = downItems[i];
            const size = (0,numbers/* clamp */.uZ)(downSizes[i] - deltaDown, item.minimumSize, item.maximumSize);
            const viewDelta = size - downSizes[i];
            deltaDown += viewDelta;
            item.size = size;
        }
        return delta;
    }
    distributeEmptySpace(lowPriorityIndex) {
        const contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        let emptyDelta = this.size - contentSize;
        const indexes = (0,arrays/* range */.w6)(this.viewItems.length - 1, -1);
        const lowPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 1 /* LayoutPriority.Low */);
        const highPriorityIndexes = indexes.filter(i => this.viewItems[i].priority === 2 /* LayoutPriority.High */);
        for (const index of highPriorityIndexes) {
            (0,arrays/* pushToStart */.zI)(indexes, index);
        }
        for (const index of lowPriorityIndexes) {
            (0,arrays/* pushToEnd */.al)(indexes, index);
        }
        if (typeof lowPriorityIndex === 'number') {
            (0,arrays/* pushToEnd */.al)(indexes, lowPriorityIndex);
        }
        for (let i = 0; emptyDelta !== 0 && i < indexes.length; i++) {
            const item = this.viewItems[indexes[i]];
            const size = (0,numbers/* clamp */.uZ)(item.size + emptyDelta, item.minimumSize, item.maximumSize);
            const viewDelta = size - item.size;
            emptyDelta -= viewDelta;
            item.size = size;
        }
    }
    layoutViews() {
        // Save new content size
        this.contentSize = this.viewItems.reduce((r, i) => r + i.size, 0);
        // Layout views
        let offset = 0;
        for (const viewItem of this.viewItems) {
            viewItem.layout(offset, this.layoutContext);
            offset += viewItem.size;
        }
        // Layout sashes
        this.sashItems.forEach(item => item.sash.layout());
        this.updateSashEnablement();
        this.updateScrollableElement();
    }
    updateScrollableElement() {
        if (this.orientation === 0 /* Orientation.VERTICAL */) {
            this.scrollableElement.setScrollDimensions({
                height: this.size,
                scrollHeight: this.contentSize
            });
        }
        else {
            this.scrollableElement.setScrollDimensions({
                width: this.size,
                scrollWidth: this.contentSize
            });
        }
    }
    updateSashEnablement() {
        let previous = false;
        const collapsesDown = this.viewItems.map(i => previous = (i.size - i.minimumSize > 0) || previous);
        previous = false;
        const expandsDown = this.viewItems.map(i => previous = (i.maximumSize - i.size > 0) || previous);
        const reverseViews = [...this.viewItems].reverse();
        previous = false;
        const collapsesUp = reverseViews.map(i => previous = (i.size - i.minimumSize > 0) || previous).reverse();
        previous = false;
        const expandsUp = reverseViews.map(i => previous = (i.maximumSize - i.size > 0) || previous).reverse();
        let position = 0;
        for (let index = 0; index < this.sashItems.length; index++) {
            const { sash } = this.sashItems[index];
            const viewItem = this.viewItems[index];
            position += viewItem.size;
            const min = !(collapsesDown[index] && expandsUp[index + 1]);
            const max = !(expandsDown[index] && collapsesUp[index + 1]);
            if (min && max) {
                const upIndexes = (0,arrays/* range */.w6)(index, -1);
                const downIndexes = (0,arrays/* range */.w6)(index + 1, this.viewItems.length);
                const snapBeforeIndex = this.findFirstSnapIndex(upIndexes);
                const snapAfterIndex = this.findFirstSnapIndex(downIndexes);
                const snappedBefore = typeof snapBeforeIndex === 'number' && !this.viewItems[snapBeforeIndex].visible;
                const snappedAfter = typeof snapAfterIndex === 'number' && !this.viewItems[snapAfterIndex].visible;
                if (snappedBefore && collapsesUp[index] && (position > 0 || this.startSnappingEnabled)) {
                    sash.state = 1 /* SashState.AtMinimum */;
                }
                else if (snappedAfter && collapsesDown[index] && (position < this.contentSize || this.endSnappingEnabled)) {
                    sash.state = 2 /* SashState.AtMaximum */;
                }
                else {
                    sash.state = 0 /* SashState.Disabled */;
                }
            }
            else if (min && !max) {
                sash.state = 1 /* SashState.AtMinimum */;
            }
            else if (!min && max) {
                sash.state = 2 /* SashState.AtMaximum */;
            }
            else {
                sash.state = 3 /* SashState.Enabled */;
            }
        }
    }
    getSashPosition(sash) {
        let position = 0;
        for (let i = 0; i < this.sashItems.length; i++) {
            position += this.viewItems[i].size;
            if (this.sashItems[i].sash === sash) {
                return position;
            }
        }
        return 0;
    }
    findFirstSnapIndex(indexes) {
        // visible views first
        for (const index of indexes) {
            const viewItem = this.viewItems[index];
            if (!viewItem.visible) {
                continue;
            }
            if (viewItem.snap) {
                return index;
            }
        }
        // then, hidden views
        for (const index of indexes) {
            const viewItem = this.viewItems[index];
            if (viewItem.visible && viewItem.maximumSize - viewItem.minimumSize > 0) {
                return undefined;
            }
            if (!viewItem.visible && viewItem.snap) {
                return index;
            }
        }
        return undefined;
    }
    areViewsDistributed() {
        let min = undefined, max = undefined;
        for (const view of this.viewItems) {
            min = min === undefined ? view.size : Math.min(min, view.size);
            max = max === undefined ? view.size : Math.max(max, view.size);
            if (max - min > 2) {
                return false;
            }
        }
        return true;
    }
    dispose() {
        var _a;
        (_a = this.sashDragState) === null || _a === void 0 ? void 0 : _a.disposable.dispose();
        (0,lifecycle/* dispose */.B9)(this.viewItems);
        this.viewItems = [];
        this.sashItems.forEach(i => i.disposable.dispose());
        this.sashItems = [];
        super.dispose();
    }
}


/***/ })

}]);