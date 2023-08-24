"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-9738eacb"],{

/***/ 5594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-keybinding {\n\tdisplay: flex;\n\talign-items: center;\n\tline-height: 10px;\n}\n\n.monaco-keybinding > .monaco-keybinding-key {\n\tdisplay: inline-block;\n\tborder-style: solid;\n\tborder-width: 1px;\n\tborder-radius: 3px;\n\tvertical-align: middle;\n\tfont-size: 11px;\n\tpadding: 3px 5px;\n\tmargin: 0 2px;\n}\n\n.monaco-keybinding > .monaco-keybinding-key:first-child {\n\tmargin-left: 0;\n}\n\n.monaco-keybinding > .monaco-keybinding-key:last-child {\n\tmargin-right: 0;\n}\n\n.monaco-keybinding > .monaco-keybinding-key-separator {\n\tdisplay: inline-block;\n}\n\n.monaco-keybinding > .monaco-keybinding-key-chord-separator {\n\twidth: 6px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 45900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-list {\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\twhite-space: nowrap;\n}\n\n.monaco-list.mouse-support {\n\tuser-select: none;\n\t-webkit-user-select: none;\n}\n\n.monaco-list > .monaco-scrollable-element {\n\theight: 100%;\n}\n\n.monaco-list-rows {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.monaco-list.horizontal-scrolling .monaco-list-rows {\n\twidth: auto;\n\tmin-width: 100%;\n}\n\n.monaco-list-row {\n\tposition: absolute;\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\twidth: 100%;\n}\n\n.monaco-list.mouse-support .monaco-list-row {\n\tcursor: pointer;\n\ttouch-action: none;\n}\n\n/* for OS X ballistic scrolling */\n.monaco-list-row.scrolling {\n\tdisplay: none !important;\n}\n\n/* Focus */\n.monaco-list.element-focused,\n.monaco-list.selection-single,\n.monaco-list.selection-multiple {\n\toutline: 0 !important;\n}\n\n/* Dnd */\n.monaco-drag-image {\n\tdisplay: inline-block;\n\tpadding: 1px 7px;\n\tborder-radius: 10px;\n\tfont-size: 12px;\n\tposition: absolute;\n\tz-index: 1000;\n}\n\n/* Filter */\n\n.monaco-list-type-filter-message {\n\tposition: absolute;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tpadding: 40px 1em 1em 1em;\n\ttext-align: center;\n\twhite-space: normal;\n\topacity: 0.7;\n\tpointer-events: none;\n}\n\n.monaco-list-type-filter-message:empty {\n\tdisplay: none;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 99132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: function() { return /* binding */ KeybindingLabel; },
  F: function() { return /* binding */ unthemedKeybindingLabelOptions; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/keybindingLabels.js
var keybindingLabels = __webpack_require__(70370);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/objects.js
var objects = __webpack_require__(19525);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.css
var keybindingLabel = __webpack_require__(5594);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(keybindingLabel/* default */.Z, options);




       /* harmony default export */ var keybindingLabel_keybindingLabel = (keybindingLabel/* default */.Z && keybindingLabel/* default */.Z.locals ? keybindingLabel/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





const $ = dom.$;
const unthemedKeybindingLabelOptions = {
    keybindingLabelBackground: undefined,
    keybindingLabelForeground: undefined,
    keybindingLabelBorder: undefined,
    keybindingLabelBottomBorder: undefined,
    keybindingLabelShadow: undefined
};
class KeybindingLabel {
    constructor(container, os, options) {
        this.os = os;
        this.keyElements = new Set();
        this.options = options || Object.create(null);
        const labelForeground = this.options.keybindingLabelForeground;
        this.domNode = dom/* append */.R3(container, $('.monaco-keybinding'));
        if (labelForeground) {
            this.domNode.style.color = labelForeground;
        }
        this.didEverRender = false;
        container.appendChild(this.domNode);
    }
    get element() {
        return this.domNode;
    }
    set(keybinding, matches) {
        if (this.didEverRender && this.keybinding === keybinding && KeybindingLabel.areSame(this.matches, matches)) {
            return;
        }
        this.keybinding = keybinding;
        this.matches = matches;
        this.render();
    }
    render() {
        var _a;
        this.clear();
        if (this.keybinding) {
            const chords = this.keybinding.getChords();
            if (chords[0]) {
                this.renderChord(this.domNode, chords[0], this.matches ? this.matches.firstPart : null);
            }
            for (let i = 1; i < chords.length; i++) {
                dom/* append */.R3(this.domNode, $('span.monaco-keybinding-key-chord-separator', undefined, ' '));
                this.renderChord(this.domNode, chords[i], this.matches ? this.matches.chordPart : null);
            }
            const title = ((_a = this.options.disableTitle) !== null && _a !== void 0 ? _a : false) ? undefined : this.keybinding.getAriaLabel() || undefined;
            if (title !== undefined) {
                this.domNode.title = title;
            }
            else {
                this.domNode.removeAttribute('title');
            }
        }
        else if (this.options && this.options.renderUnboundKeybindings) {
            this.renderUnbound(this.domNode);
        }
        this.didEverRender = true;
    }
    clear() {
        dom/* clearNode */.PO(this.domNode);
        this.keyElements.clear();
    }
    renderChord(parent, chord, match) {
        const modifierLabels = keybindingLabels/* UILabelProvider */.xo.modifierLabels[this.os];
        if (chord.ctrlKey) {
            this.renderKey(parent, modifierLabels.ctrlKey, Boolean(match === null || match === void 0 ? void 0 : match.ctrlKey), modifierLabels.separator);
        }
        if (chord.shiftKey) {
            this.renderKey(parent, modifierLabels.shiftKey, Boolean(match === null || match === void 0 ? void 0 : match.shiftKey), modifierLabels.separator);
        }
        if (chord.altKey) {
            this.renderKey(parent, modifierLabels.altKey, Boolean(match === null || match === void 0 ? void 0 : match.altKey), modifierLabels.separator);
        }
        if (chord.metaKey) {
            this.renderKey(parent, modifierLabels.metaKey, Boolean(match === null || match === void 0 ? void 0 : match.metaKey), modifierLabels.separator);
        }
        const keyLabel = chord.keyLabel;
        if (keyLabel) {
            this.renderKey(parent, keyLabel, Boolean(match === null || match === void 0 ? void 0 : match.keyCode), '');
        }
    }
    renderKey(parent, label, highlight, separator) {
        dom/* append */.R3(parent, this.createKeyElement(label, highlight ? '.highlight' : ''));
        if (separator) {
            dom/* append */.R3(parent, $('span.monaco-keybinding-key-separator', undefined, separator));
        }
    }
    renderUnbound(parent) {
        dom/* append */.R3(parent, this.createKeyElement((0,nls/* localize */.NC)('unbound', "Unbound")));
    }
    createKeyElement(label, extraClass = '') {
        const keyElement = $('span.monaco-keybinding-key' + extraClass, undefined, label);
        this.keyElements.add(keyElement);
        if (this.options.keybindingLabelBackground) {
            keyElement.style.backgroundColor = this.options.keybindingLabelBackground;
        }
        if (this.options.keybindingLabelBorder) {
            keyElement.style.borderColor = this.options.keybindingLabelBorder;
        }
        if (this.options.keybindingLabelBottomBorder) {
            keyElement.style.borderBottomColor = this.options.keybindingLabelBottomBorder;
        }
        if (this.options.keybindingLabelShadow) {
            keyElement.style.boxShadow = `inset 0 -1px 0 ${this.options.keybindingLabelShadow}`;
        }
        return keyElement;
    }
    static areSame(a, b) {
        if (a === b || (!a && !b)) {
            return true;
        }
        return !!a && !!b && (0,objects/* equals */.fS)(a.firstPart, b.firstPart) && (0,objects/* equals */.fS)(a.chordPart, b.chordPart);
    }
}


/***/ }),

/***/ 78685:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ PagedList; }
/* harmony export */ });
/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25850);
/* harmony import */ var _common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98764);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64720);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26794);
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67038);
/* harmony import */ var _listWidget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54530);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class PagedRenderer {
    get templateId() { return this.renderer.templateId; }
    constructor(renderer, modelProvider) {
        this.renderer = renderer;
        this.modelProvider = modelProvider;
    }
    renderTemplate(container) {
        const data = this.renderer.renderTemplate(container);
        return { data, disposable: _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT.None };
    }
    renderElement(index, _, data, height) {
        var _a;
        (_a = data.disposable) === null || _a === void 0 ? void 0 : _a.dispose();
        if (!data.data) {
            return;
        }
        const model = this.modelProvider();
        if (model.isResolved(index)) {
            return this.renderer.renderElement(model.get(index), index, data.data, height);
        }
        const cts = new _common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationTokenSource */ .A();
        const promise = model.resolve(index, cts.token);
        data.disposable = { dispose: () => cts.cancel() };
        this.renderer.renderPlaceholder(index, data.data);
        promise.then(entry => this.renderer.renderElement(entry, index, data.data, height));
    }
    disposeTemplate(data) {
        if (data.disposable) {
            data.disposable.dispose();
            data.disposable = undefined;
        }
        if (data.data) {
            this.renderer.disposeTemplate(data.data);
            data.data = undefined;
        }
    }
}
class PagedAccessibilityProvider {
    constructor(modelProvider, accessibilityProvider) {
        this.modelProvider = modelProvider;
        this.accessibilityProvider = accessibilityProvider;
    }
    getWidgetAriaLabel() {
        return this.accessibilityProvider.getWidgetAriaLabel();
    }
    getAriaLabel(index) {
        const model = this.modelProvider();
        if (!model.isResolved(index)) {
            return null;
        }
        return this.accessibilityProvider.getAriaLabel(model.get(index));
    }
}
function fromPagedListOptions(modelProvider, options) {
    return Object.assign(Object.assign({}, options), { accessibilityProvider: options.accessibilityProvider && new PagedAccessibilityProvider(modelProvider, options.accessibilityProvider) });
}
class PagedList {
    constructor(user, container, virtualDelegate, renderers, options = {}) {
        const modelProvider = () => this.model;
        const pagedRenderers = renderers.map(r => new PagedRenderer(r, modelProvider));
        this.list = new _listWidget_js__WEBPACK_IMPORTED_MODULE_5__/* .List */ .aV(user, container, virtualDelegate, pagedRenderers, fromPagedListOptions(modelProvider, options));
    }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    getHTMLElement() {
        return this.list.getHTMLElement();
    }
    get onDidFocus() {
        return this.list.onDidFocus;
    }
    get widget() {
        return this.list;
    }
    get onDidDispose() {
        return this.list.onDidDispose;
    }
    get onMouseDblClick() {
        return _common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.map(this.list.onMouseDblClick, ({ element, index, browserEvent }) => ({ element: element === undefined ? undefined : this._model.get(element), index, browserEvent }));
    }
    get onPointer() {
        return _common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.map(this.list.onPointer, ({ element, index, browserEvent }) => ({ element: element === undefined ? undefined : this._model.get(element), index, browserEvent }));
    }
    get onDidChangeSelection() {
        return _common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.map(this.list.onDidChangeSelection, ({ elements, indexes, browserEvent }) => ({ elements: elements.map(e => this._model.get(e)), indexes, browserEvent }));
    }
    get model() {
        return this._model;
    }
    set model(model) {
        this._model = model;
        this.list.splice(0, this.list.length, (0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .range */ .w6)(model.length));
    }
    getFocus() {
        return this.list.getFocus();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getSelectedElements() {
        return this.getSelection().map(i => this.model.get(i));
    }
    style(styles) {
        this.list.style(styles);
    }
    dispose() {
        this.list.dispose();
    }
}


/***/ }),

/***/ 50527:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  kX: function() { return /* binding */ ElementsDragAndDropData; },
  Bv: function() { return /* binding */ ListView; }
});

// UNUSED EXPORTS: ExternalElementsDragAndDropData, NativeDragAndDropData

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dnd.js
var dnd = __webpack_require__(34246);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(69808);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(43765);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 6 modules
var scrollableElement = __webpack_require__(85489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/decorators.js
var decorators = __webpack_require__(84338);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/range.js
var common_range = __webpack_require__(891);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/scrollable.js
var scrollable = __webpack_require__(22687);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rangeMap.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Returns the intersection between a ranged group and a range.
 * Returns `[]` if the intersection is empty.
 */
function groupIntersect(range, groups) {
    const result = [];
    for (const r of groups) {
        if (range.start >= r.range.end) {
            continue;
        }
        if (range.end < r.range.start) {
            break;
        }
        const intersection = common_range/* Range */.e.intersect(range, r.range);
        if (common_range/* Range */.e.isEmpty(intersection)) {
            continue;
        }
        result.push({
            range: intersection,
            size: r.size
        });
    }
    return result;
}
/**
 * Shifts a range by that `much`.
 */
function shift({ start, end }, much) {
    return { start: start + much, end: end + much };
}
/**
 * Consolidates a collection of ranged groups.
 *
 * Consolidation is the process of merging consecutive ranged groups
 * that share the same `size`.
 */
function consolidate(groups) {
    const result = [];
    let previousGroup = null;
    for (const group of groups) {
        const start = group.range.start;
        const end = group.range.end;
        const size = group.size;
        if (previousGroup && size === previousGroup.size) {
            previousGroup.range.end = end;
            continue;
        }
        previousGroup = { range: { start, end }, size };
        result.push(previousGroup);
    }
    return result;
}
/**
 * Concatenates several collections of ranged groups into a single
 * collection.
 */
function concat(...groups) {
    return consolidate(groups.reduce((r, g) => r.concat(g), []));
}
class RangeMap {
    get paddingTop() {
        return this._paddingTop;
    }
    set paddingTop(paddingTop) {
        this._size = this._size + paddingTop - this._paddingTop;
        this._paddingTop = paddingTop;
    }
    constructor(topPadding) {
        this.groups = [];
        this._size = 0;
        this._paddingTop = 0;
        this._paddingTop = topPadding !== null && topPadding !== void 0 ? topPadding : 0;
        this._size = this._paddingTop;
    }
    splice(index, deleteCount, items = []) {
        const diff = items.length - deleteCount;
        const before = groupIntersect({ start: 0, end: index }, this.groups);
        const after = groupIntersect({ start: index + deleteCount, end: Number.POSITIVE_INFINITY }, this.groups)
            .map(g => ({ range: shift(g.range, diff), size: g.size }));
        const middle = items.map((item, i) => ({
            range: { start: index + i, end: index + i + 1 },
            size: item.size
        }));
        this.groups = concat(before, middle, after);
        this._size = this._paddingTop + this.groups.reduce((t, g) => t + (g.size * (g.range.end - g.range.start)), 0);
    }
    /**
     * Returns the number of items in the range map.
     */
    get count() {
        const len = this.groups.length;
        if (!len) {
            return 0;
        }
        return this.groups[len - 1].range.end;
    }
    /**
     * Returns the sum of the sizes of all items in the range map.
     */
    get size() {
        return this._size;
    }
    /**
     * Returns the index of the item at the given position.
     */
    indexAt(position) {
        if (position < 0) {
            return -1;
        }
        if (position < this._paddingTop) {
            return 0;
        }
        let index = 0;
        let size = this._paddingTop;
        for (const group of this.groups) {
            const count = group.range.end - group.range.start;
            const newSize = size + (count * group.size);
            if (position < newSize) {
                return index + Math.floor((position - size) / group.size);
            }
            index += count;
            size = newSize;
        }
        return index;
    }
    /**
     * Returns the index of the item right after the item at the
     * index of the given position.
     */
    indexAfter(position) {
        return Math.min(this.indexAt(position) + 1, this.count);
    }
    /**
     * Returns the start position of the item at the given index.
     */
    positionAt(index) {
        if (index < 0) {
            return -1;
        }
        let position = 0;
        let count = 0;
        for (const group of this.groups) {
            const groupCount = group.range.end - group.range.start;
            const newCount = count + groupCount;
            if (index < newCount) {
                return this._paddingTop + position + ((index - count) * group.size);
            }
            position += groupCount * group.size;
            count = newCount;
        }
        return -1;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/rowCache.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function removeFromParent(element) {
    var _a;
    try {
        (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(element);
    }
    catch (e) {
        // this will throw if this happens due to a blur event, nasty business
    }
}
class RowCache {
    constructor(renderers) {
        this.renderers = renderers;
        this.cache = new Map();
        this.transactionNodesPendingRemoval = new Set();
        this.inTransaction = false;
    }
    /**
     * Returns a row either by creating a new one or reusing
     * a previously released row which shares the same templateId.
     *
     * @returns A row and `isReusingConnectedDomNode` if the row's node is already in the dom in a stale position.
     */
    alloc(templateId) {
        let result = this.getTemplateCache(templateId).pop();
        let isStale = false;
        if (result) {
            isStale = this.transactionNodesPendingRemoval.has(result.domNode);
            if (isStale) {
                this.transactionNodesPendingRemoval.delete(result.domNode);
            }
        }
        else {
            const domNode = (0,dom.$)('.monaco-list-row');
            const renderer = this.getRenderer(templateId);
            const templateData = renderer.renderTemplate(domNode);
            result = { domNode, templateId, templateData };
        }
        return { row: result, isReusingConnectedDomNode: isStale };
    }
    /**
     * Releases the row for eventual reuse.
     */
    release(row) {
        if (!row) {
            return;
        }
        this.releaseRow(row);
    }
    /**
     * Begin a set of changes that use the cache. This lets us skip work when a row is removed and then inserted again.
     */
    transact(makeChanges) {
        if (this.inTransaction) {
            throw new Error('Already in transaction');
        }
        this.inTransaction = true;
        try {
            makeChanges();
        }
        finally {
            for (const domNode of this.transactionNodesPendingRemoval) {
                this.doRemoveNode(domNode);
            }
            this.transactionNodesPendingRemoval.clear();
            this.inTransaction = false;
        }
    }
    releaseRow(row) {
        const { domNode, templateId } = row;
        if (domNode) {
            if (this.inTransaction) {
                this.transactionNodesPendingRemoval.add(domNode);
            }
            else {
                this.doRemoveNode(domNode);
            }
        }
        const cache = this.getTemplateCache(templateId);
        cache.push(row);
    }
    doRemoveNode(domNode) {
        domNode.classList.remove('scrolling');
        removeFromParent(domNode);
    }
    getTemplateCache(templateId) {
        let result = this.cache.get(templateId);
        if (!result) {
            result = [];
            this.cache.set(templateId, result);
        }
        return result;
    }
    dispose() {
        this.cache.forEach((cachedRows, templateId) => {
            for (const cachedRow of cachedRows) {
                const renderer = this.getRenderer(templateId);
                renderer.disposeTemplate(cachedRow.templateData);
                cachedRow.templateData = null;
            }
        });
        this.cache.clear();
        this.transactionNodesPendingRemoval.clear();
    }
    getRenderer(templateId) {
        const renderer = this.renderers.get(templateId);
        if (!renderer) {
            throw new Error(`No renderer found for ${templateId}`);
        }
        return renderer;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js
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















const StaticDND = {
    CurrentDragAndDropData: undefined
};
const DefaultOptions = {
    useShadows: true,
    verticalScrollMode: 1 /* ScrollbarVisibility.Auto */,
    setRowLineHeight: true,
    setRowHeight: true,
    supportDynamicHeights: false,
    dnd: {
        getDragElements(e) { return [e]; },
        getDragURI() { return null; },
        onDragStart() { },
        onDragOver() { return false; },
        drop() { }
    },
    horizontalScrolling: false,
    transformOptimization: true,
    alwaysConsumeMouseWheel: true,
};
class ElementsDragAndDropData {
    constructor(elements) {
        this.elements = elements;
    }
    update() { }
    getData() {
        return this.elements;
    }
}
class ExternalElementsDragAndDropData {
    constructor(elements) {
        this.elements = elements;
    }
    update() { }
    getData() {
        return this.elements;
    }
}
class NativeDragAndDropData {
    constructor() {
        this.types = [];
        this.files = [];
    }
    update(dataTransfer) {
        if (dataTransfer.types) {
            this.types.splice(0, this.types.length, ...dataTransfer.types);
        }
        if (dataTransfer.files) {
            this.files.splice(0, this.files.length);
            for (let i = 0; i < dataTransfer.files.length; i++) {
                const file = dataTransfer.files.item(i);
                if (file && (file.size || file.type)) {
                    this.files.push(file);
                }
            }
        }
    }
    getData() {
        return {
            types: this.types,
            files: this.files
        };
    }
}
function equalsDragFeedback(f1, f2) {
    if (Array.isArray(f1) && Array.isArray(f2)) {
        return (0,arrays/* equals */.fS)(f1, f2);
    }
    return f1 === f2;
}
class ListViewAccessibilityProvider {
    constructor(accessibilityProvider) {
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getSetSize) {
            this.getSetSize = accessibilityProvider.getSetSize.bind(accessibilityProvider);
        }
        else {
            this.getSetSize = (e, i, l) => l;
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getPosInSet) {
            this.getPosInSet = accessibilityProvider.getPosInSet.bind(accessibilityProvider);
        }
        else {
            this.getPosInSet = (e, i) => i + 1;
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.getRole) {
            this.getRole = accessibilityProvider.getRole.bind(accessibilityProvider);
        }
        else {
            this.getRole = _ => 'listitem';
        }
        if (accessibilityProvider === null || accessibilityProvider === void 0 ? void 0 : accessibilityProvider.isChecked) {
            this.isChecked = accessibilityProvider.isChecked.bind(accessibilityProvider);
        }
        else {
            this.isChecked = _ => undefined;
        }
    }
}
/**
 * The {@link ListView} is a virtual scrolling engine.
 *
 * Given that it only renders elements within its viewport, it can hold large
 * collections of elements and stay very performant. The performance bottleneck
 * usually lies within the user's rendering code for each element.
 *
 * @remarks It is a low-level widget, not meant to be used directly. Refer to the
 * List widget instead.
 */
class ListView {
    get contentHeight() { return this.rangeMap.size; }
    get onDidScroll() { return this.scrollableElement.onScroll; }
    get horizontalScrolling() { return this._horizontalScrolling; }
    set horizontalScrolling(value) {
        if (value === this._horizontalScrolling) {
            return;
        }
        if (value && this.supportDynamicHeights) {
            throw new Error('Horizontal scrolling and dynamic heights not supported simultaneously');
        }
        this._horizontalScrolling = value;
        this.domNode.classList.toggle('horizontal-scrolling', this._horizontalScrolling);
        if (this._horizontalScrolling) {
            for (const item of this.items) {
                this.measureItemWidth(item);
            }
            this.updateScrollWidth();
            this.scrollableElement.setScrollDimensions({ width: (0,dom/* getContentWidth */.FK)(this.domNode) });
            this.rowsContainer.style.width = `${Math.max(this.scrollWidth || 0, this.renderWidth)}px`;
        }
        else {
            this.scrollableElementWidthDelayer.cancel();
            this.scrollableElement.setScrollDimensions({ width: this.renderWidth, scrollWidth: this.renderWidth });
            this.rowsContainer.style.width = '';
        }
    }
    constructor(container, virtualDelegate, renderers, options = DefaultOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        this.virtualDelegate = virtualDelegate;
        this.domId = `list_id_${++ListView.InstanceCount}`;
        this.renderers = new Map();
        this.renderWidth = 0;
        this._scrollHeight = 0;
        this.scrollableElementUpdateDisposable = null;
        this.scrollableElementWidthDelayer = new common_async/* Delayer */.vp(50);
        this.splicing = false;
        this.dragOverAnimationStopDisposable = lifecycle/* Disposable */.JT.None;
        this.dragOverMouseY = 0;
        this.canDrop = false;
        this.currentDragFeedbackDisposable = lifecycle/* Disposable */.JT.None;
        this.onDragLeaveTimeout = lifecycle/* Disposable */.JT.None;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this._onDidChangeContentHeight = new common_event/* Emitter */.Q5();
        this._onDidChangeContentWidth = new common_event/* Emitter */.Q5();
        this._horizontalScrolling = false;
        if (options.horizontalScrolling && options.supportDynamicHeights) {
            throw new Error('Horizontal scrolling and dynamic heights not supported simultaneously');
        }
        this.items = [];
        this.itemId = 0;
        this.rangeMap = new RangeMap((_a = options.paddingTop) !== null && _a !== void 0 ? _a : 0);
        for (const renderer of renderers) {
            this.renderers.set(renderer.templateId, renderer);
        }
        this.cache = this.disposables.add(new RowCache(this.renderers));
        this.lastRenderTop = 0;
        this.lastRenderHeight = 0;
        this.domNode = document.createElement('div');
        this.domNode.className = 'monaco-list';
        this.domNode.classList.add(this.domId);
        this.domNode.tabIndex = 0;
        this.domNode.classList.toggle('mouse-support', typeof options.mouseSupport === 'boolean' ? options.mouseSupport : true);
        this._horizontalScrolling = (_b = options.horizontalScrolling) !== null && _b !== void 0 ? _b : DefaultOptions.horizontalScrolling;
        this.domNode.classList.toggle('horizontal-scrolling', this._horizontalScrolling);
        this.paddingBottom = typeof options.paddingBottom === 'undefined' ? 0 : options.paddingBottom;
        this.accessibilityProvider = new ListViewAccessibilityProvider(options.accessibilityProvider);
        this.rowsContainer = document.createElement('div');
        this.rowsContainer.className = 'monaco-list-rows';
        const transformOptimization = (_c = options.transformOptimization) !== null && _c !== void 0 ? _c : DefaultOptions.transformOptimization;
        if (transformOptimization) {
            this.rowsContainer.style.transform = 'translate3d(0px, 0px, 0px)';
            this.rowsContainer.style.overflow = 'hidden';
            this.rowsContainer.style.contain = 'strict';
        }
        this.disposables.add(touch/* Gesture */.o.addTarget(this.rowsContainer));
        this.scrollable = new scrollable/* Scrollable */.Rm({
            forceIntegerValues: true,
            smoothScrollDuration: ((_d = options.smoothScrolling) !== null && _d !== void 0 ? _d : false) ? 125 : 0,
            scheduleAtNextAnimationFrame: cb => (0,dom/* scheduleAtNextAnimationFrame */.jL)(cb)
        });
        this.scrollableElement = this.disposables.add(new scrollableElement/* SmoothScrollableElement */.$Z(this.rowsContainer, {
            alwaysConsumeMouseWheel: (_e = options.alwaysConsumeMouseWheel) !== null && _e !== void 0 ? _e : DefaultOptions.alwaysConsumeMouseWheel,
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            vertical: (_f = options.verticalScrollMode) !== null && _f !== void 0 ? _f : DefaultOptions.verticalScrollMode,
            useShadows: (_g = options.useShadows) !== null && _g !== void 0 ? _g : DefaultOptions.useShadows,
            mouseWheelScrollSensitivity: options.mouseWheelScrollSensitivity,
            fastScrollSensitivity: options.fastScrollSensitivity,
            scrollByPage: options.scrollByPage
        }, this.scrollable));
        this.domNode.appendChild(this.scrollableElement.getDomNode());
        container.appendChild(this.domNode);
        this.scrollableElement.onScroll(this.onScroll, this, this.disposables);
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.rowsContainer, touch/* EventType */.t.Change, e => this.onTouchChange(e)));
        // Prevent the monaco-scrollable-element from scrolling
        // https://github.com/microsoft/vscode/issues/44181
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.scrollableElement.getDomNode(), 'scroll', e => e.target.scrollTop = 0));
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.domNode, 'dragover', e => this.onDragOver(this.toDragEvent(e))));
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.domNode, 'drop', e => this.onDrop(this.toDragEvent(e))));
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.domNode, 'dragleave', e => this.onDragLeave(this.toDragEvent(e))));
        this.disposables.add((0,dom/* addDisposableListener */.nm)(this.domNode, 'dragend', e => this.onDragEnd(e)));
        this.setRowLineHeight = (_h = options.setRowLineHeight) !== null && _h !== void 0 ? _h : DefaultOptions.setRowLineHeight;
        this.setRowHeight = (_j = options.setRowHeight) !== null && _j !== void 0 ? _j : DefaultOptions.setRowHeight;
        this.supportDynamicHeights = (_k = options.supportDynamicHeights) !== null && _k !== void 0 ? _k : DefaultOptions.supportDynamicHeights;
        this.dnd = (_l = options.dnd) !== null && _l !== void 0 ? _l : DefaultOptions.dnd;
        this.layout((_m = options.initialSize) === null || _m === void 0 ? void 0 : _m.height, (_o = options.initialSize) === null || _o === void 0 ? void 0 : _o.width);
    }
    updateOptions(options) {
        if (options.paddingBottom !== undefined) {
            this.paddingBottom = options.paddingBottom;
            this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight });
        }
        if (options.smoothScrolling !== undefined) {
            this.scrollable.setSmoothScrollDuration(options.smoothScrolling ? 125 : 0);
        }
        if (options.horizontalScrolling !== undefined) {
            this.horizontalScrolling = options.horizontalScrolling;
        }
        let scrollableOptions;
        if (options.scrollByPage !== undefined) {
            scrollableOptions = Object.assign(Object.assign({}, (scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {})), { scrollByPage: options.scrollByPage });
        }
        if (options.mouseWheelScrollSensitivity !== undefined) {
            scrollableOptions = Object.assign(Object.assign({}, (scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {})), { mouseWheelScrollSensitivity: options.mouseWheelScrollSensitivity });
        }
        if (options.fastScrollSensitivity !== undefined) {
            scrollableOptions = Object.assign(Object.assign({}, (scrollableOptions !== null && scrollableOptions !== void 0 ? scrollableOptions : {})), { fastScrollSensitivity: options.fastScrollSensitivity });
        }
        if (scrollableOptions) {
            this.scrollableElement.updateOptions(scrollableOptions);
        }
        if (options.paddingTop !== undefined && options.paddingTop !== this.rangeMap.paddingTop) {
            // trigger a rerender
            const lastRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            const offset = options.paddingTop - this.rangeMap.paddingTop;
            this.rangeMap.paddingTop = options.paddingTop;
            this.render(lastRenderRange, Math.max(0, this.lastRenderTop + offset), this.lastRenderHeight, undefined, undefined, true);
            this.setScrollTop(this.lastRenderTop);
            this.eventuallyUpdateScrollDimensions();
            if (this.supportDynamicHeights) {
                this._rerender(this.lastRenderTop, this.lastRenderHeight);
            }
        }
    }
    splice(start, deleteCount, elements = []) {
        if (this.splicing) {
            throw new Error('Can\'t run recursive splices.');
        }
        this.splicing = true;
        try {
            return this._splice(start, deleteCount, elements);
        }
        finally {
            this.splicing = false;
            this._onDidChangeContentHeight.fire(this.contentHeight);
        }
    }
    _splice(start, deleteCount, elements = []) {
        const previousRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        const deleteRange = { start, end: start + deleteCount };
        const removeRange = common_range/* Range */.e.intersect(previousRenderRange, deleteRange);
        // try to reuse rows, avoid removing them from DOM
        const rowsToDispose = new Map();
        for (let i = removeRange.end - 1; i >= removeRange.start; i--) {
            const item = this.items[i];
            item.dragStartDisposable.dispose();
            item.checkedDisposable.dispose();
            if (item.row) {
                let rows = rowsToDispose.get(item.templateId);
                if (!rows) {
                    rows = [];
                    rowsToDispose.set(item.templateId, rows);
                }
                const renderer = this.renderers.get(item.templateId);
                if (renderer && renderer.disposeElement) {
                    renderer.disposeElement(item.element, i, item.row.templateData, item.size);
                }
                rows.push(item.row);
            }
            item.row = null;
        }
        const previousRestRange = { start: start + deleteCount, end: this.items.length };
        const previousRenderedRestRange = common_range/* Range */.e.intersect(previousRestRange, previousRenderRange);
        const previousUnrenderedRestRanges = common_range/* Range */.e.relativeComplement(previousRestRange, previousRenderRange);
        const inserted = elements.map(element => ({
            id: String(this.itemId++),
            element,
            templateId: this.virtualDelegate.getTemplateId(element),
            size: this.virtualDelegate.getHeight(element),
            width: undefined,
            hasDynamicHeight: !!this.virtualDelegate.hasDynamicHeight && this.virtualDelegate.hasDynamicHeight(element),
            lastDynamicHeightWidth: undefined,
            row: null,
            uri: undefined,
            dropTarget: false,
            dragStartDisposable: lifecycle/* Disposable */.JT.None,
            checkedDisposable: lifecycle/* Disposable */.JT.None
        }));
        let deleted;
        // TODO@joao: improve this optimization to catch even more cases
        if (start === 0 && deleteCount >= this.items.length) {
            this.rangeMap = new RangeMap(this.rangeMap.paddingTop);
            this.rangeMap.splice(0, 0, inserted);
            deleted = this.items;
            this.items = inserted;
        }
        else {
            this.rangeMap.splice(start, deleteCount, inserted);
            deleted = this.items.splice(start, deleteCount, ...inserted);
        }
        const delta = elements.length - deleteCount;
        const renderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        const renderedRestRange = shift(previousRenderedRestRange, delta);
        const updateRange = common_range/* Range */.e.intersect(renderRange, renderedRestRange);
        for (let i = updateRange.start; i < updateRange.end; i++) {
            this.updateItemInDOM(this.items[i], i);
        }
        const removeRanges = common_range/* Range */.e.relativeComplement(renderedRestRange, renderRange);
        for (const range of removeRanges) {
            for (let i = range.start; i < range.end; i++) {
                this.removeItemFromDOM(i);
            }
        }
        const unrenderedRestRanges = previousUnrenderedRestRanges.map(r => shift(r, delta));
        const elementsRange = { start, end: start + elements.length };
        const insertRanges = [elementsRange, ...unrenderedRestRanges].map(r => common_range/* Range */.e.intersect(renderRange, r));
        const beforeElement = this.getNextToLastElement(insertRanges);
        for (const range of insertRanges) {
            for (let i = range.start; i < range.end; i++) {
                const item = this.items[i];
                const rows = rowsToDispose.get(item.templateId);
                const row = rows === null || rows === void 0 ? void 0 : rows.pop();
                this.insertItemInDOM(i, beforeElement, row);
            }
        }
        for (const rows of rowsToDispose.values()) {
            for (const row of rows) {
                this.cache.release(row);
            }
        }
        this.eventuallyUpdateScrollDimensions();
        if (this.supportDynamicHeights) {
            this._rerender(this.scrollTop, this.renderHeight);
        }
        return deleted.map(i => i.element);
    }
    eventuallyUpdateScrollDimensions() {
        this._scrollHeight = this.contentHeight;
        this.rowsContainer.style.height = `${this._scrollHeight}px`;
        if (!this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable = (0,dom/* scheduleAtNextAnimationFrame */.jL)(() => {
                this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight });
                this.updateScrollWidth();
                this.scrollableElementUpdateDisposable = null;
            });
        }
    }
    eventuallyUpdateScrollWidth() {
        if (!this.horizontalScrolling) {
            this.scrollableElementWidthDelayer.cancel();
            return;
        }
        this.scrollableElementWidthDelayer.trigger(() => this.updateScrollWidth());
    }
    updateScrollWidth() {
        if (!this.horizontalScrolling) {
            return;
        }
        let scrollWidth = 0;
        for (const item of this.items) {
            if (typeof item.width !== 'undefined') {
                scrollWidth = Math.max(scrollWidth, item.width);
            }
        }
        this.scrollWidth = scrollWidth;
        this.scrollableElement.setScrollDimensions({ scrollWidth: scrollWidth === 0 ? 0 : (scrollWidth + 10) });
        this._onDidChangeContentWidth.fire(this.scrollWidth);
    }
    rerender() {
        if (!this.supportDynamicHeights) {
            return;
        }
        for (const item of this.items) {
            item.lastDynamicHeightWidth = undefined;
        }
        this._rerender(this.lastRenderTop, this.lastRenderHeight);
    }
    get length() {
        return this.items.length;
    }
    get renderHeight() {
        const scrollDimensions = this.scrollableElement.getScrollDimensions();
        return scrollDimensions.height;
    }
    get firstVisibleIndex() {
        const range = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
        const firstElTop = this.rangeMap.positionAt(range.start);
        const nextElTop = this.rangeMap.positionAt(range.start + 1);
        if (nextElTop !== -1) {
            const firstElMidpoint = (nextElTop - firstElTop) / 2 + firstElTop;
            if (firstElMidpoint < this.scrollTop) {
                return range.start + 1;
            }
        }
        return range.start;
    }
    element(index) {
        return this.items[index].element;
    }
    domElement(index) {
        const row = this.items[index].row;
        return row && row.domNode;
    }
    elementHeight(index) {
        return this.items[index].size;
    }
    elementTop(index) {
        return this.rangeMap.positionAt(index);
    }
    indexAt(position) {
        return this.rangeMap.indexAt(position);
    }
    indexAfter(position) {
        return this.rangeMap.indexAfter(position);
    }
    layout(height, width) {
        const scrollDimensions = {
            height: typeof height === 'number' ? height : (0,dom/* getContentHeight */.If)(this.domNode)
        };
        if (this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable.dispose();
            this.scrollableElementUpdateDisposable = null;
            scrollDimensions.scrollHeight = this.scrollHeight;
        }
        this.scrollableElement.setScrollDimensions(scrollDimensions);
        if (typeof width !== 'undefined') {
            this.renderWidth = width;
            if (this.supportDynamicHeights) {
                this._rerender(this.scrollTop, this.renderHeight);
            }
        }
        if (this.horizontalScrolling) {
            this.scrollableElement.setScrollDimensions({
                width: typeof width === 'number' ? width : (0,dom/* getContentWidth */.FK)(this.domNode)
            });
        }
    }
    // Render
    render(previousRenderRange, renderTop, renderHeight, renderLeft, scrollWidth, updateItemsInDOM = false) {
        const renderRange = this.getRenderRange(renderTop, renderHeight);
        const rangesToInsert = common_range/* Range */.e.relativeComplement(renderRange, previousRenderRange);
        const rangesToRemove = common_range/* Range */.e.relativeComplement(previousRenderRange, renderRange);
        const beforeElement = this.getNextToLastElement(rangesToInsert);
        if (updateItemsInDOM) {
            const rangesToUpdate = common_range/* Range */.e.intersect(previousRenderRange, renderRange);
            for (let i = rangesToUpdate.start; i < rangesToUpdate.end; i++) {
                this.updateItemInDOM(this.items[i], i);
            }
        }
        this.cache.transact(() => {
            for (const range of rangesToRemove) {
                for (let i = range.start; i < range.end; i++) {
                    this.removeItemFromDOM(i);
                }
            }
            for (const range of rangesToInsert) {
                for (let i = range.start; i < range.end; i++) {
                    this.insertItemInDOM(i, beforeElement);
                }
            }
        });
        if (renderLeft !== undefined) {
            this.rowsContainer.style.left = `-${renderLeft}px`;
        }
        this.rowsContainer.style.top = `-${renderTop}px`;
        if (this.horizontalScrolling && scrollWidth !== undefined) {
            this.rowsContainer.style.width = `${Math.max(scrollWidth, this.renderWidth)}px`;
        }
        this.lastRenderTop = renderTop;
        this.lastRenderHeight = renderHeight;
    }
    // DOM operations
    insertItemInDOM(index, beforeElement, row) {
        const item = this.items[index];
        let isStale = false;
        if (!item.row) {
            if (row) {
                item.row = row;
            }
            else {
                const result = this.cache.alloc(item.templateId);
                item.row = result.row;
                isStale = result.isReusingConnectedDomNode;
            }
        }
        const role = this.accessibilityProvider.getRole(item.element) || 'listitem';
        item.row.domNode.setAttribute('role', role);
        const checked = this.accessibilityProvider.isChecked(item.element);
        if (typeof checked === 'boolean') {
            item.row.domNode.setAttribute('aria-checked', String(!!checked));
        }
        else if (checked) {
            const update = (checked) => item.row.domNode.setAttribute('aria-checked', String(!!checked));
            update(checked.value);
            item.checkedDisposable = checked.onDidChange(update);
        }
        if (isStale || !item.row.domNode.parentElement) {
            if (beforeElement) {
                this.rowsContainer.insertBefore(item.row.domNode, beforeElement);
            }
            else {
                this.rowsContainer.appendChild(item.row.domNode);
            }
        }
        this.updateItemInDOM(item, index);
        const renderer = this.renderers.get(item.templateId);
        if (!renderer) {
            throw new Error(`No renderer found for template id ${item.templateId}`);
        }
        renderer === null || renderer === void 0 ? void 0 : renderer.renderElement(item.element, index, item.row.templateData, item.size);
        const uri = this.dnd.getDragURI(item.element);
        item.dragStartDisposable.dispose();
        item.row.domNode.draggable = !!uri;
        if (uri) {
            item.dragStartDisposable = (0,dom/* addDisposableListener */.nm)(item.row.domNode, 'dragstart', event => this.onDragStart(item.element, uri, event));
        }
        if (this.horizontalScrolling) {
            this.measureItemWidth(item);
            this.eventuallyUpdateScrollWidth();
        }
    }
    measureItemWidth(item) {
        if (!item.row || !item.row.domNode) {
            return;
        }
        item.row.domNode.style.width = 'fit-content';
        item.width = (0,dom/* getContentWidth */.FK)(item.row.domNode);
        const style = window.getComputedStyle(item.row.domNode);
        if (style.paddingLeft) {
            item.width += parseFloat(style.paddingLeft);
        }
        if (style.paddingRight) {
            item.width += parseFloat(style.paddingRight);
        }
        item.row.domNode.style.width = '';
    }
    updateItemInDOM(item, index) {
        item.row.domNode.style.top = `${this.elementTop(index)}px`;
        if (this.setRowHeight) {
            item.row.domNode.style.height = `${item.size}px`;
        }
        if (this.setRowLineHeight) {
            item.row.domNode.style.lineHeight = `${item.size}px`;
        }
        item.row.domNode.setAttribute('data-index', `${index}`);
        item.row.domNode.setAttribute('data-last-element', index === this.length - 1 ? 'true' : 'false');
        item.row.domNode.setAttribute('data-parity', index % 2 === 0 ? 'even' : 'odd');
        item.row.domNode.setAttribute('aria-setsize', String(this.accessibilityProvider.getSetSize(item.element, index, this.length)));
        item.row.domNode.setAttribute('aria-posinset', String(this.accessibilityProvider.getPosInSet(item.element, index)));
        item.row.domNode.setAttribute('id', this.getElementDomId(index));
        item.row.domNode.classList.toggle('drop-target', item.dropTarget);
    }
    removeItemFromDOM(index) {
        const item = this.items[index];
        item.dragStartDisposable.dispose();
        item.checkedDisposable.dispose();
        if (item.row) {
            const renderer = this.renderers.get(item.templateId);
            if (renderer && renderer.disposeElement) {
                renderer.disposeElement(item.element, index, item.row.templateData, item.size);
            }
            this.cache.release(item.row);
            item.row = null;
        }
        if (this.horizontalScrolling) {
            this.eventuallyUpdateScrollWidth();
        }
    }
    getScrollTop() {
        const scrollPosition = this.scrollableElement.getScrollPosition();
        return scrollPosition.scrollTop;
    }
    setScrollTop(scrollTop, reuseAnimation) {
        if (this.scrollableElementUpdateDisposable) {
            this.scrollableElementUpdateDisposable.dispose();
            this.scrollableElementUpdateDisposable = null;
            this.scrollableElement.setScrollDimensions({ scrollHeight: this.scrollHeight });
        }
        this.scrollableElement.setScrollPosition({ scrollTop, reuseAnimation });
    }
    get scrollTop() {
        return this.getScrollTop();
    }
    set scrollTop(scrollTop) {
        this.setScrollTop(scrollTop);
    }
    get scrollHeight() {
        return this._scrollHeight + (this.horizontalScrolling ? 10 : 0) + this.paddingBottom;
    }
    // Events
    get onMouseClick() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'click')).event, e => this.toMouseEvent(e), this.disposables); }
    get onMouseDblClick() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'dblclick')).event, e => this.toMouseEvent(e), this.disposables); }
    get onMouseMiddleClick() { return common_event/* Event */.ju.filter(common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'auxclick')).event, e => this.toMouseEvent(e), this.disposables), e => e.browserEvent.button === 1, this.disposables); }
    get onMouseDown() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'mousedown')).event, e => this.toMouseEvent(e), this.disposables); }
    get onMouseOver() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'mouseover')).event, e => this.toMouseEvent(e), this.disposables); }
    get onMouseOut() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'mouseout')).event, e => this.toMouseEvent(e), this.disposables); }
    get onContextMenu() { return common_event/* Event */.ju.any(common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'contextmenu')).event, e => this.toMouseEvent(e), this.disposables), common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, touch/* EventType */.t.Contextmenu)).event, e => this.toGestureEvent(e), this.disposables)); }
    get onTouchStart() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.domNode, 'touchstart')).event, e => this.toTouchEvent(e), this.disposables); }
    get onTap() { return common_event/* Event */.ju.map(this.disposables.add(new browser_event/* DomEmitter */.Y(this.rowsContainer, touch/* EventType */.t.Tap)).event, e => this.toGestureEvent(e), this.disposables); }
    toMouseEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return { browserEvent, index, element };
    }
    toTouchEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return { browserEvent, index, element };
    }
    toGestureEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.initialTarget || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return { browserEvent, index, element };
    }
    toDragEvent(browserEvent) {
        const index = this.getItemIndexFromEventTarget(browserEvent.target || null);
        const item = typeof index === 'undefined' ? undefined : this.items[index];
        const element = item && item.element;
        return { browserEvent, index, element };
    }
    onScroll(e) {
        try {
            const previousRenderRange = this.getRenderRange(this.lastRenderTop, this.lastRenderHeight);
            this.render(previousRenderRange, e.scrollTop, e.height, e.scrollLeft, e.scrollWidth);
            if (this.supportDynamicHeights) {
                this._rerender(e.scrollTop, e.height, e.inSmoothScrolling);
            }
        }
        catch (err) {
            console.error('Got bad scroll event:', e);
            throw err;
        }
    }
    onTouchChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.scrollTop -= event.translationY;
    }
    // DND
    onDragStart(element, uri, event) {
        var _a, _b;
        if (!event.dataTransfer) {
            return;
        }
        const elements = this.dnd.getDragElements(element);
        event.dataTransfer.effectAllowed = 'copyMove';
        event.dataTransfer.setData(dnd/* DataTransfers */.g.TEXT, uri);
        if (event.dataTransfer.setDragImage) {
            let label;
            if (this.dnd.getDragLabel) {
                label = this.dnd.getDragLabel(elements, event);
            }
            if (typeof label === 'undefined') {
                label = String(elements.length);
            }
            const dragImage = (0,dom.$)('.monaco-drag-image');
            dragImage.textContent = label;
            const getDragImageContainer = (e) => {
                while (e && !e.classList.contains('monaco-workbench')) {
                    e = e.parentElement;
                }
                return e || document.body;
            };
            const container = getDragImageContainer(this.domNode);
            container.appendChild(dragImage);
            event.dataTransfer.setDragImage(dragImage, -10, -10);
            setTimeout(() => container.removeChild(dragImage), 0);
        }
        this.domNode.classList.add('dragging');
        this.currentDragData = new ElementsDragAndDropData(elements);
        StaticDND.CurrentDragAndDropData = new ExternalElementsDragAndDropData(elements);
        (_b = (_a = this.dnd).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, this.currentDragData, event);
    }
    onDragOver(event) {
        var _a;
        event.browserEvent.preventDefault(); // needed so that the drop event fires (https://stackoverflow.com/questions/21339924/drop-event-not-firing-in-chrome)
        this.onDragLeaveTimeout.dispose();
        if (StaticDND.CurrentDragAndDropData && StaticDND.CurrentDragAndDropData.getData() === 'vscode-ui') {
            return false;
        }
        this.setupDragAndDropScrollTopAnimation(event.browserEvent);
        if (!event.browserEvent.dataTransfer) {
            return false;
        }
        // Drag over from outside
        if (!this.currentDragData) {
            if (StaticDND.CurrentDragAndDropData) {
                // Drag over from another list
                this.currentDragData = StaticDND.CurrentDragAndDropData;
            }
            else {
                // Drag over from the desktop
                if (!event.browserEvent.dataTransfer.types) {
                    return false;
                }
                this.currentDragData = new NativeDragAndDropData();
            }
        }
        const result = this.dnd.onDragOver(this.currentDragData, event.element, event.index, event.browserEvent);
        this.canDrop = typeof result === 'boolean' ? result : result.accept;
        if (!this.canDrop) {
            this.currentDragFeedback = undefined;
            this.currentDragFeedbackDisposable.dispose();
            return false;
        }
        event.browserEvent.dataTransfer.dropEffect = (typeof result !== 'boolean' && result.effect === 0 /* ListDragOverEffect.Copy */) ? 'copy' : 'move';
        let feedback;
        if (typeof result !== 'boolean' && result.feedback) {
            feedback = result.feedback;
        }
        else {
            if (typeof event.index === 'undefined') {
                feedback = [-1];
            }
            else {
                feedback = [event.index];
            }
        }
        // sanitize feedback list
        feedback = (0,arrays/* distinct */.EB)(feedback).filter(i => i >= -1 && i < this.length).sort((a, b) => a - b);
        feedback = feedback[0] === -1 ? [-1] : feedback;
        if (equalsDragFeedback(this.currentDragFeedback, feedback)) {
            return true;
        }
        this.currentDragFeedback = feedback;
        this.currentDragFeedbackDisposable.dispose();
        if (feedback[0] === -1) { // entire list feedback
            this.domNode.classList.add('drop-target');
            this.rowsContainer.classList.add('drop-target');
            this.currentDragFeedbackDisposable = (0,lifecycle/* toDisposable */.OF)(() => {
                this.domNode.classList.remove('drop-target');
                this.rowsContainer.classList.remove('drop-target');
            });
        }
        else {
            for (const index of feedback) {
                const item = this.items[index];
                item.dropTarget = true;
                (_a = item.row) === null || _a === void 0 ? void 0 : _a.domNode.classList.add('drop-target');
            }
            this.currentDragFeedbackDisposable = (0,lifecycle/* toDisposable */.OF)(() => {
                var _a;
                for (const index of feedback) {
                    const item = this.items[index];
                    item.dropTarget = false;
                    (_a = item.row) === null || _a === void 0 ? void 0 : _a.domNode.classList.remove('drop-target');
                }
            });
        }
        return true;
    }
    onDragLeave(event) {
        var _a, _b;
        this.onDragLeaveTimeout.dispose();
        this.onDragLeaveTimeout = (0,common_async/* disposableTimeout */.Vg)(() => this.clearDragOverFeedback(), 100);
        if (this.currentDragData) {
            (_b = (_a = this.dnd).onDragLeave) === null || _b === void 0 ? void 0 : _b.call(_a, this.currentDragData, event.element, event.index, event.browserEvent);
        }
    }
    onDrop(event) {
        if (!this.canDrop) {
            return;
        }
        const dragData = this.currentDragData;
        this.teardownDragAndDropScrollTopAnimation();
        this.clearDragOverFeedback();
        this.domNode.classList.remove('dragging');
        this.currentDragData = undefined;
        StaticDND.CurrentDragAndDropData = undefined;
        if (!dragData || !event.browserEvent.dataTransfer) {
            return;
        }
        event.browserEvent.preventDefault();
        dragData.update(event.browserEvent.dataTransfer);
        this.dnd.drop(dragData, event.element, event.index, event.browserEvent);
    }
    onDragEnd(event) {
        var _a, _b;
        this.canDrop = false;
        this.teardownDragAndDropScrollTopAnimation();
        this.clearDragOverFeedback();
        this.domNode.classList.remove('dragging');
        this.currentDragData = undefined;
        StaticDND.CurrentDragAndDropData = undefined;
        (_b = (_a = this.dnd).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    }
    clearDragOverFeedback() {
        this.currentDragFeedback = undefined;
        this.currentDragFeedbackDisposable.dispose();
        this.currentDragFeedbackDisposable = lifecycle/* Disposable */.JT.None;
    }
    // DND scroll top animation
    setupDragAndDropScrollTopAnimation(event) {
        if (!this.dragOverAnimationDisposable) {
            const viewTop = (0,dom/* getTopLeftOffset */.xQ)(this.domNode).top;
            this.dragOverAnimationDisposable = (0,dom/* animate */.jt)(this.animateDragAndDropScrollTop.bind(this, viewTop));
        }
        this.dragOverAnimationStopDisposable.dispose();
        this.dragOverAnimationStopDisposable = (0,common_async/* disposableTimeout */.Vg)(() => {
            if (this.dragOverAnimationDisposable) {
                this.dragOverAnimationDisposable.dispose();
                this.dragOverAnimationDisposable = undefined;
            }
        }, 1000);
        this.dragOverMouseY = event.pageY;
    }
    animateDragAndDropScrollTop(viewTop) {
        if (this.dragOverMouseY === undefined) {
            return;
        }
        const diff = this.dragOverMouseY - viewTop;
        const upperLimit = this.renderHeight - 35;
        if (diff < 35) {
            this.scrollTop += Math.max(-14, Math.floor(0.3 * (diff - 35)));
        }
        else if (diff > upperLimit) {
            this.scrollTop += Math.min(14, Math.floor(0.3 * (diff - upperLimit)));
        }
    }
    teardownDragAndDropScrollTopAnimation() {
        this.dragOverAnimationStopDisposable.dispose();
        if (this.dragOverAnimationDisposable) {
            this.dragOverAnimationDisposable.dispose();
            this.dragOverAnimationDisposable = undefined;
        }
    }
    // Util
    getItemIndexFromEventTarget(target) {
        const scrollableElement = this.scrollableElement.getDomNode();
        let element = target;
        while (element instanceof HTMLElement && element !== this.rowsContainer && scrollableElement.contains(element)) {
            const rawIndex = element.getAttribute('data-index');
            if (rawIndex) {
                const index = Number(rawIndex);
                if (!isNaN(index)) {
                    return index;
                }
            }
            element = element.parentElement;
        }
        return undefined;
    }
    getRenderRange(renderTop, renderHeight) {
        return {
            start: this.rangeMap.indexAt(renderTop),
            end: this.rangeMap.indexAfter(renderTop + renderHeight - 1)
        };
    }
    /**
     * Given a stable rendered state, checks every rendered element whether it needs
     * to be probed for dynamic height. Adjusts scroll height and top if necessary.
     */
    _rerender(renderTop, renderHeight, inSmoothScrolling) {
        const previousRenderRange = this.getRenderRange(renderTop, renderHeight);
        // Let's remember the second element's position, this helps in scrolling up
        // and preserving a linear upwards scroll movement
        let anchorElementIndex;
        let anchorElementTopDelta;
        if (renderTop === this.elementTop(previousRenderRange.start)) {
            anchorElementIndex = previousRenderRange.start;
            anchorElementTopDelta = 0;
        }
        else if (previousRenderRange.end - previousRenderRange.start > 1) {
            anchorElementIndex = previousRenderRange.start + 1;
            anchorElementTopDelta = this.elementTop(anchorElementIndex) - renderTop;
        }
        let heightDiff = 0;
        while (true) {
            const renderRange = this.getRenderRange(renderTop, renderHeight);
            let didChange = false;
            for (let i = renderRange.start; i < renderRange.end; i++) {
                const diff = this.probeDynamicHeight(i);
                if (diff !== 0) {
                    this.rangeMap.splice(i, 1, [this.items[i]]);
                }
                heightDiff += diff;
                didChange = didChange || diff !== 0;
            }
            if (!didChange) {
                if (heightDiff !== 0) {
                    this.eventuallyUpdateScrollDimensions();
                }
                const unrenderRanges = common_range/* Range */.e.relativeComplement(previousRenderRange, renderRange);
                for (const range of unrenderRanges) {
                    for (let i = range.start; i < range.end; i++) {
                        if (this.items[i].row) {
                            this.removeItemFromDOM(i);
                        }
                    }
                }
                const renderRanges = common_range/* Range */.e.relativeComplement(renderRange, previousRenderRange);
                for (const range of renderRanges) {
                    for (let i = range.start; i < range.end; i++) {
                        const afterIndex = i + 1;
                        const beforeRow = afterIndex < this.items.length ? this.items[afterIndex].row : null;
                        const beforeElement = beforeRow ? beforeRow.domNode : null;
                        this.insertItemInDOM(i, beforeElement);
                    }
                }
                for (let i = renderRange.start; i < renderRange.end; i++) {
                    if (this.items[i].row) {
                        this.updateItemInDOM(this.items[i], i);
                    }
                }
                if (typeof anchorElementIndex === 'number') {
                    // To compute a destination scroll top, we need to take into account the current smooth scrolling
                    // animation, and then reuse it with a new target (to avoid prolonging the scroll)
                    // See https://github.com/microsoft/vscode/issues/104144
                    // See https://github.com/microsoft/vscode/pull/104284
                    // See https://github.com/microsoft/vscode/issues/107704
                    const deltaScrollTop = this.scrollable.getFutureScrollPosition().scrollTop - renderTop;
                    const newScrollTop = this.elementTop(anchorElementIndex) - anchorElementTopDelta + deltaScrollTop;
                    this.setScrollTop(newScrollTop, inSmoothScrolling);
                }
                this._onDidChangeContentHeight.fire(this.contentHeight);
                return;
            }
        }
    }
    probeDynamicHeight(index) {
        var _a, _b, _c;
        const item = this.items[index];
        if (!!this.virtualDelegate.getDynamicHeight) {
            const newSize = this.virtualDelegate.getDynamicHeight(item.element);
            if (newSize !== null) {
                const size = item.size;
                item.size = newSize;
                item.lastDynamicHeightWidth = this.renderWidth;
                return newSize - size;
            }
        }
        if (!item.hasDynamicHeight || item.lastDynamicHeightWidth === this.renderWidth) {
            return 0;
        }
        if (!!this.virtualDelegate.hasDynamicHeight && !this.virtualDelegate.hasDynamicHeight(item.element)) {
            return 0;
        }
        const size = item.size;
        if (item.row) {
            item.row.domNode.style.height = '';
            item.size = item.row.domNode.offsetHeight;
            item.lastDynamicHeightWidth = this.renderWidth;
            return item.size - size;
        }
        const { row } = this.cache.alloc(item.templateId);
        row.domNode.style.height = '';
        this.rowsContainer.appendChild(row.domNode);
        const renderer = this.renderers.get(item.templateId);
        if (!renderer) {
            throw new errors/* BugIndicatingError */.he('Missing renderer for templateId: ' + item.templateId);
        }
        renderer.renderElement(item.element, index, row.templateData, undefined);
        item.size = row.domNode.offsetHeight;
        (_a = renderer.disposeElement) === null || _a === void 0 ? void 0 : _a.call(renderer, item.element, index, row.templateData, undefined);
        (_c = (_b = this.virtualDelegate).setDynamicHeight) === null || _c === void 0 ? void 0 : _c.call(_b, item.element, item.size);
        item.lastDynamicHeightWidth = this.renderWidth;
        this.rowsContainer.removeChild(row.domNode);
        this.cache.release(row);
        return item.size - size;
    }
    getNextToLastElement(ranges) {
        const lastRange = ranges[ranges.length - 1];
        if (!lastRange) {
            return null;
        }
        const nextToLastItem = this.items[lastRange.end];
        if (!nextToLastItem) {
            return null;
        }
        if (!nextToLastItem.row) {
            return null;
        }
        return nextToLastItem.row.domNode;
    }
    getElementDomId(index) {
        return `${this.domId}_${index}`;
    }
    // Dispose
    dispose() {
        var _a;
        if (this.items) {
            for (const item of this.items) {
                if (item.row) {
                    const renderer = this.renderers.get(item.row.templateId);
                    if (renderer) {
                        (_a = renderer.disposeElement) === null || _a === void 0 ? void 0 : _a.call(renderer, item.element, -1, item.row.templateData, undefined);
                        renderer.disposeTemplate(item.row.templateData);
                    }
                }
            }
            this.items = [];
        }
        if (this.domNode && this.domNode.parentNode) {
            this.domNode.parentNode.removeChild(this.domNode);
        }
        (0,lifecycle/* dispose */.B9)(this.disposables);
    }
}
ListView.InstanceCount = 0;
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseClick", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseDblClick", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseMiddleClick", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseDown", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseOver", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onMouseOut", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onContextMenu", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onTouchStart", null);
__decorate([
    decorators/* memoize */.H
], ListView.prototype, "onTap", null);


/***/ }),

/***/ 54530:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wD: function() { return /* binding */ DefaultStyleController; },
  aV: function() { return /* binding */ List; },
  sx: function() { return /* binding */ MouseController; },
  AA: function() { return /* binding */ TypeNavigationMode; },
  iK: function() { return /* binding */ isButton; },
  cK: function() { return /* binding */ isInputElement; },
  hD: function() { return /* binding */ isMonacoEditor; },
  wn: function() { return /* binding */ isSelectionRangeChangeEvent; },
  Zo: function() { return /* binding */ isSelectionSingleChangeEvent; },
  uZ: function() { return /* binding */ unthemedListStyles; }
});

// UNUSED EXPORTS: DefaultKeyboardNavigationDelegate

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(69808);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js
var keyboardEvent = __webpack_require__(44767);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(43765);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(39194);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/splice.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CombinedSpliceable {
    constructor(spliceables) {
        this.spliceables = spliceables;
    }
    splice(start, deleteCount, elements) {
        this.spliceables.forEach(s => s.splice(start, deleteCount, elements));
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(4186);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/decorators.js
var decorators = __webpack_require__(84338);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(35092);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/numbers.js
var numbers = __webpack_require__(20484);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/list.css
var list = __webpack_require__(67038);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/list.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ListError extends Error {
    constructor(user, message) {
        super(`ListError [${user}] ${message}`);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js + 2 modules
var listView = __webpack_require__(50527);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(45394);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















class TraitRenderer {
    constructor(trait) {
        this.trait = trait;
        this.renderedElements = [];
    }
    get templateId() {
        return `template:${this.trait.name}`;
    }
    renderTemplate(container) {
        return container;
    }
    renderElement(element, index, templateData) {
        const renderedElementIndex = this.renderedElements.findIndex(el => el.templateData === templateData);
        if (renderedElementIndex >= 0) {
            const rendered = this.renderedElements[renderedElementIndex];
            this.trait.unrender(templateData);
            rendered.index = index;
        }
        else {
            const rendered = { index, templateData };
            this.renderedElements.push(rendered);
        }
        this.trait.renderIndex(index, templateData);
    }
    splice(start, deleteCount, insertCount) {
        const rendered = [];
        for (const renderedElement of this.renderedElements) {
            if (renderedElement.index < start) {
                rendered.push(renderedElement);
            }
            else if (renderedElement.index >= start + deleteCount) {
                rendered.push({
                    index: renderedElement.index + insertCount - deleteCount,
                    templateData: renderedElement.templateData
                });
            }
        }
        this.renderedElements = rendered;
    }
    renderIndexes(indexes) {
        for (const { index, templateData } of this.renderedElements) {
            if (indexes.indexOf(index) > -1) {
                this.trait.renderIndex(index, templateData);
            }
        }
    }
    disposeTemplate(templateData) {
        const index = this.renderedElements.findIndex(el => el.templateData === templateData);
        if (index < 0) {
            return;
        }
        this.renderedElements.splice(index, 1);
    }
}
class Trait {
    get name() { return this._trait; }
    get renderer() {
        return new TraitRenderer(this);
    }
    constructor(_trait) {
        this._trait = _trait;
        this.length = 0;
        this.indexes = [];
        this.sortedIndexes = [];
        this._onChange = new common_event/* Emitter */.Q5();
        this.onChange = this._onChange.event;
    }
    splice(start, deleteCount, elements) {
        var _a;
        deleteCount = Math.max(0, Math.min(deleteCount, this.length - start));
        const diff = elements.length - deleteCount;
        const end = start + deleteCount;
        const sortedIndexes = [];
        let i = 0;
        while (i < this.sortedIndexes.length && this.sortedIndexes[i] < start) {
            sortedIndexes.push(this.sortedIndexes[i++]);
        }
        for (let j = 0; j < elements.length; j++) {
            if (elements[j]) {
                sortedIndexes.push(j + start);
            }
        }
        while (i < this.sortedIndexes.length && this.sortedIndexes[i] >= end) {
            sortedIndexes.push(this.sortedIndexes[i++] + diff);
        }
        const length = this.length + diff;
        if (this.sortedIndexes.length > 0 && sortedIndexes.length === 0 && length > 0) {
            const first = (_a = this.sortedIndexes.find(index => index >= start)) !== null && _a !== void 0 ? _a : length - 1;
            sortedIndexes.push(Math.min(first, length - 1));
        }
        this.renderer.splice(start, deleteCount, elements.length);
        this._set(sortedIndexes, sortedIndexes);
        this.length = length;
    }
    renderIndex(index, container) {
        container.classList.toggle(this._trait, this.contains(index));
    }
    unrender(container) {
        container.classList.remove(this._trait);
    }
    /**
     * Sets the indexes which should have this trait.
     *
     * @param indexes Indexes which should have this trait.
     * @return The old indexes which had this trait.
     */
    set(indexes, browserEvent) {
        return this._set(indexes, [...indexes].sort(numericSort), browserEvent);
    }
    _set(indexes, sortedIndexes, browserEvent) {
        const result = this.indexes;
        const sortedResult = this.sortedIndexes;
        this.indexes = indexes;
        this.sortedIndexes = sortedIndexes;
        const toRender = disjunction(sortedResult, indexes);
        this.renderer.renderIndexes(toRender);
        this._onChange.fire({ indexes, browserEvent });
        return result;
    }
    get() {
        return this.indexes;
    }
    contains(index) {
        return (0,arrays/* binarySearch */.ry)(this.sortedIndexes, index, numericSort) >= 0;
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this._onChange);
    }
}
__decorate([
    decorators/* memoize */.H
], Trait.prototype, "renderer", null);
class SelectionTrait extends Trait {
    constructor(setAriaSelected) {
        super('selected');
        this.setAriaSelected = setAriaSelected;
    }
    renderIndex(index, container) {
        super.renderIndex(index, container);
        if (this.setAriaSelected) {
            if (this.contains(index)) {
                container.setAttribute('aria-selected', 'true');
            }
            else {
                container.setAttribute('aria-selected', 'false');
            }
        }
    }
}
/**
 * The TraitSpliceable is used as a util class to be able
 * to preserve traits across splice calls, given an identity
 * provider.
 */
class TraitSpliceable {
    constructor(trait, view, identityProvider) {
        this.trait = trait;
        this.view = view;
        this.identityProvider = identityProvider;
    }
    splice(start, deleteCount, elements) {
        if (!this.identityProvider) {
            return this.trait.splice(start, deleteCount, new Array(elements.length).fill(false));
        }
        const pastElementsWithTrait = this.trait.get().map(i => this.identityProvider.getId(this.view.element(i)).toString());
        if (pastElementsWithTrait.length === 0) {
            return this.trait.splice(start, deleteCount, new Array(elements.length).fill(false));
        }
        const pastElementsWithTraitSet = new Set(pastElementsWithTrait);
        const elementsWithTrait = elements.map(e => pastElementsWithTraitSet.has(this.identityProvider.getId(e).toString()));
        this.trait.splice(start, deleteCount, elementsWithTrait);
    }
}
function isInputElement(e) {
    return e.tagName === 'INPUT' || e.tagName === 'TEXTAREA';
}
function isMonacoEditor(e) {
    if (e.classList.contains('monaco-editor')) {
        return true;
    }
    if (e.classList.contains('monaco-list')) {
        return false;
    }
    if (!e.parentElement) {
        return false;
    }
    return isMonacoEditor(e.parentElement);
}
function isButton(e) {
    if ((e.tagName === 'A' && e.classList.contains('monaco-button')) ||
        (e.tagName === 'DIV' && e.classList.contains('monaco-button-dropdown'))) {
        return true;
    }
    if (e.classList.contains('monaco-list')) {
        return false;
    }
    if (!e.parentElement) {
        return false;
    }
    return isButton(e.parentElement);
}
class KeyboardController {
    get onKeyDown() {
        return this.disposables.add(common_event/* Event */.ju.chain(this.disposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'keydown')).event)
            .filter(e => !isInputElement(e.target))
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e)));
    }
    constructor(list, view, options) {
        this.list = list;
        this.view = view;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.multipleSelectionDisposables = new lifecycle/* DisposableStore */.SL();
        this.onKeyDown.filter(e => e.keyCode === 3 /* KeyCode.Enter */).on(this.onEnter, this, this.disposables);
        this.onKeyDown.filter(e => e.keyCode === 16 /* KeyCode.UpArrow */).on(this.onUpArrow, this, this.disposables);
        this.onKeyDown.filter(e => e.keyCode === 18 /* KeyCode.DownArrow */).on(this.onDownArrow, this, this.disposables);
        this.onKeyDown.filter(e => e.keyCode === 11 /* KeyCode.PageUp */).on(this.onPageUpArrow, this, this.disposables);
        this.onKeyDown.filter(e => e.keyCode === 12 /* KeyCode.PageDown */).on(this.onPageDownArrow, this, this.disposables);
        this.onKeyDown.filter(e => e.keyCode === 9 /* KeyCode.Escape */).on(this.onEscape, this, this.disposables);
        if (options.multipleSelectionSupport !== false) {
            this.onKeyDown.filter(e => (platform/* isMacintosh */.dz ? e.metaKey : e.ctrlKey) && e.keyCode === 31 /* KeyCode.KeyA */).on(this.onCtrlA, this, this.multipleSelectionDisposables);
        }
    }
    updateOptions(optionsUpdate) {
        if (optionsUpdate.multipleSelectionSupport !== undefined) {
            this.multipleSelectionDisposables.clear();
            if (optionsUpdate.multipleSelectionSupport) {
                this.onKeyDown.filter(e => (platform/* isMacintosh */.dz ? e.metaKey : e.ctrlKey) && e.keyCode === 31 /* KeyCode.KeyA */).on(this.onCtrlA, this, this.multipleSelectionDisposables);
            }
        }
    }
    onEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.setSelection(this.list.getFocus(), e.browserEvent);
    }
    onUpArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusPrevious(1, false, e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onDownArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusNext(1, false, e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onPageUpArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusPreviousPage(e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onPageDownArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.focusNextPage(e.browserEvent);
        const el = this.list.getFocus()[0];
        this.list.setAnchor(el);
        this.list.reveal(el);
        this.view.domNode.focus();
    }
    onCtrlA(e) {
        e.preventDefault();
        e.stopPropagation();
        this.list.setSelection((0,arrays/* range */.w6)(this.list.length), e.browserEvent);
        this.list.setAnchor(undefined);
        this.view.domNode.focus();
    }
    onEscape(e) {
        if (this.list.getSelection().length) {
            e.preventDefault();
            e.stopPropagation();
            this.list.setSelection([], e.browserEvent);
            this.list.setAnchor(undefined);
            this.view.domNode.focus();
        }
    }
    dispose() {
        this.disposables.dispose();
        this.multipleSelectionDisposables.dispose();
    }
}
__decorate([
    decorators/* memoize */.H
], KeyboardController.prototype, "onKeyDown", null);
var TypeNavigationMode;
(function (TypeNavigationMode) {
    TypeNavigationMode[TypeNavigationMode["Automatic"] = 0] = "Automatic";
    TypeNavigationMode[TypeNavigationMode["Trigger"] = 1] = "Trigger";
})(TypeNavigationMode || (TypeNavigationMode = {}));
var TypeNavigationControllerState;
(function (TypeNavigationControllerState) {
    TypeNavigationControllerState[TypeNavigationControllerState["Idle"] = 0] = "Idle";
    TypeNavigationControllerState[TypeNavigationControllerState["Typing"] = 1] = "Typing";
})(TypeNavigationControllerState || (TypeNavigationControllerState = {}));
const DefaultKeyboardNavigationDelegate = new class {
    mightProducePrintableCharacter(event) {
        if (event.ctrlKey || event.metaKey || event.altKey) {
            return false;
        }
        return (event.keyCode >= 31 /* KeyCode.KeyA */ && event.keyCode <= 56 /* KeyCode.KeyZ */)
            || (event.keyCode >= 21 /* KeyCode.Digit0 */ && event.keyCode <= 30 /* KeyCode.Digit9 */)
            || (event.keyCode >= 98 /* KeyCode.Numpad0 */ && event.keyCode <= 107 /* KeyCode.Numpad9 */)
            || (event.keyCode >= 85 /* KeyCode.Semicolon */ && event.keyCode <= 95 /* KeyCode.Quote */);
    }
};
class TypeNavigationController {
    constructor(list, view, keyboardNavigationLabelProvider, keyboardNavigationEventFilter, delegate) {
        this.list = list;
        this.view = view;
        this.keyboardNavigationLabelProvider = keyboardNavigationLabelProvider;
        this.keyboardNavigationEventFilter = keyboardNavigationEventFilter;
        this.delegate = delegate;
        this.enabled = false;
        this.state = TypeNavigationControllerState.Idle;
        this.mode = TypeNavigationMode.Automatic;
        this.triggered = false;
        this.previouslyFocused = -1;
        this.enabledDisposables = new lifecycle/* DisposableStore */.SL();
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.updateOptions(list.options);
    }
    updateOptions(options) {
        var _a, _b;
        if ((_a = options.typeNavigationEnabled) !== null && _a !== void 0 ? _a : true) {
            this.enable();
        }
        else {
            this.disable();
        }
        this.mode = (_b = options.typeNavigationMode) !== null && _b !== void 0 ? _b : TypeNavigationMode.Automatic;
    }
    enable() {
        if (this.enabled) {
            return;
        }
        let typing = false;
        const onChar = this.enabledDisposables.add(common_event/* Event */.ju.chain(this.enabledDisposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'keydown')).event))
            .filter(e => !isInputElement(e.target))
            .filter(() => this.mode === TypeNavigationMode.Automatic || this.triggered)
            .map(event => new keyboardEvent/* StandardKeyboardEvent */.y(event))
            .filter(e => typing || this.keyboardNavigationEventFilter(e))
            .filter(e => this.delegate.mightProducePrintableCharacter(e))
            .forEach(e => dom/* EventHelper */.zB.stop(e, true))
            .map(event => event.browserEvent.key)
            .event;
        const onClear = common_event/* Event */.ju.debounce(onChar, () => null, 800, undefined, undefined, undefined, this.enabledDisposables);
        const onInput = common_event/* Event */.ju.reduce(common_event/* Event */.ju.any(onChar, onClear), (r, i) => i === null ? null : ((r || '') + i), undefined, this.enabledDisposables);
        onInput(this.onInput, this, this.enabledDisposables);
        onClear(this.onClear, this, this.enabledDisposables);
        onChar(() => typing = true, undefined, this.enabledDisposables);
        onClear(() => typing = false, undefined, this.enabledDisposables);
        this.enabled = true;
        this.triggered = false;
    }
    disable() {
        if (!this.enabled) {
            return;
        }
        this.enabledDisposables.clear();
        this.enabled = false;
        this.triggered = false;
    }
    onClear() {
        var _a;
        const focus = this.list.getFocus();
        if (focus.length > 0 && focus[0] === this.previouslyFocused) {
            // List: re-announce element on typing end since typed keys will interrupt aria label of focused element
            // Do not announce if there was a focus change at the end to prevent duplication https://github.com/microsoft/vscode/issues/95961
            const ariaLabel = (_a = this.list.options.accessibilityProvider) === null || _a === void 0 ? void 0 : _a.getAriaLabel(this.list.element(focus[0]));
            if (ariaLabel) {
                (0,aria/* alert */.Z9)(ariaLabel);
            }
        }
        this.previouslyFocused = -1;
    }
    onInput(word) {
        if (!word) {
            this.state = TypeNavigationControllerState.Idle;
            this.triggered = false;
            return;
        }
        const focus = this.list.getFocus();
        const start = focus.length > 0 ? focus[0] : 0;
        const delta = this.state === TypeNavigationControllerState.Idle ? 1 : 0;
        this.state = TypeNavigationControllerState.Typing;
        for (let i = 0; i < this.list.length; i++) {
            const index = (start + i + delta) % this.list.length;
            const label = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(index));
            const labelStr = label && label.toString();
            if (typeof labelStr === 'undefined' || (0,filters/* matchesPrefix */.Ji)(word, labelStr)) {
                this.previouslyFocused = start;
                this.list.setFocus([index]);
                this.list.reveal(index);
                return;
            }
        }
    }
    dispose() {
        this.disable();
        this.enabledDisposables.dispose();
        this.disposables.dispose();
    }
}
class DOMFocusController {
    constructor(list, view) {
        this.list = list;
        this.view = view;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        const onKeyDown = this.disposables.add(common_event/* Event */.ju.chain(this.disposables.add(new browser_event/* DomEmitter */.Y(view.domNode, 'keydown')).event))
            .filter(e => !isInputElement(e.target))
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e));
        onKeyDown.filter(e => e.keyCode === 2 /* KeyCode.Tab */ && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
            .on(this.onTab, this, this.disposables);
    }
    onTab(e) {
        if (e.target !== this.view.domNode) {
            return;
        }
        const focus = this.list.getFocus();
        if (focus.length === 0) {
            return;
        }
        const focusedDomElement = this.view.domElement(focus[0]);
        if (!focusedDomElement) {
            return;
        }
        const tabIndexElement = focusedDomElement.querySelector('[tabIndex]');
        if (!tabIndexElement || !(tabIndexElement instanceof HTMLElement) || tabIndexElement.tabIndex === -1) {
            return;
        }
        const style = window.getComputedStyle(tabIndexElement);
        if (style.visibility === 'hidden' || style.display === 'none') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        tabIndexElement.focus();
    }
    dispose() {
        this.disposables.dispose();
    }
}
function isSelectionSingleChangeEvent(event) {
    return platform/* isMacintosh */.dz ? event.browserEvent.metaKey : event.browserEvent.ctrlKey;
}
function isSelectionRangeChangeEvent(event) {
    return event.browserEvent.shiftKey;
}
function isMouseRightClick(event) {
    return event instanceof MouseEvent && event.button === 2;
}
const DefaultMultipleSelectionController = {
    isSelectionSingleChangeEvent,
    isSelectionRangeChangeEvent
};
class MouseController {
    constructor(list) {
        this.list = list;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this._onPointer = new common_event/* Emitter */.Q5();
        this.onPointer = this._onPointer.event;
        if (list.options.multipleSelectionSupport !== false) {
            this.multipleSelectionController = this.list.options.multipleSelectionController || DefaultMultipleSelectionController;
        }
        this.mouseSupport = typeof list.options.mouseSupport === 'undefined' || !!list.options.mouseSupport;
        if (this.mouseSupport) {
            list.onMouseDown(this.onMouseDown, this, this.disposables);
            list.onContextMenu(this.onContextMenu, this, this.disposables);
            list.onMouseDblClick(this.onDoubleClick, this, this.disposables);
            list.onTouchStart(this.onMouseDown, this, this.disposables);
            this.disposables.add(touch/* Gesture */.o.addTarget(list.getHTMLElement()));
        }
        common_event/* Event */.ju.any(list.onMouseClick, list.onMouseMiddleClick, list.onTap)(this.onViewPointer, this, this.disposables);
    }
    updateOptions(optionsUpdate) {
        if (optionsUpdate.multipleSelectionSupport !== undefined) {
            this.multipleSelectionController = undefined;
            if (optionsUpdate.multipleSelectionSupport) {
                this.multipleSelectionController = this.list.options.multipleSelectionController || DefaultMultipleSelectionController;
            }
        }
    }
    isSelectionSingleChangeEvent(event) {
        if (!this.multipleSelectionController) {
            return false;
        }
        return this.multipleSelectionController.isSelectionSingleChangeEvent(event);
    }
    isSelectionRangeChangeEvent(event) {
        if (!this.multipleSelectionController) {
            return false;
        }
        return this.multipleSelectionController.isSelectionRangeChangeEvent(event);
    }
    isSelectionChangeEvent(event) {
        return this.isSelectionSingleChangeEvent(event) || this.isSelectionRangeChangeEvent(event);
    }
    onMouseDown(e) {
        if (isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (document.activeElement !== e.browserEvent.target) {
            this.list.domFocus();
        }
    }
    onContextMenu(e) {
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        const focus = typeof e.index === 'undefined' ? [] : [e.index];
        this.list.setFocus(focus, e.browserEvent);
    }
    onViewPointer(e) {
        if (!this.mouseSupport) {
            return;
        }
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        e.browserEvent.isHandledByList = true;
        const focus = e.index;
        if (typeof focus === 'undefined') {
            this.list.setFocus([], e.browserEvent);
            this.list.setSelection([], e.browserEvent);
            this.list.setAnchor(undefined);
            return;
        }
        if (this.isSelectionRangeChangeEvent(e)) {
            return this.changeSelection(e);
        }
        if (this.isSelectionChangeEvent(e)) {
            return this.changeSelection(e);
        }
        this.list.setFocus([focus], e.browserEvent);
        this.list.setAnchor(focus);
        if (!isMouseRightClick(e.browserEvent)) {
            this.list.setSelection([focus], e.browserEvent);
        }
        this._onPointer.fire(e);
    }
    onDoubleClick(e) {
        if (isInputElement(e.browserEvent.target) || isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (this.isSelectionChangeEvent(e)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        e.browserEvent.isHandledByList = true;
        const focus = this.list.getFocus();
        this.list.setSelection(focus, e.browserEvent);
    }
    changeSelection(e) {
        const focus = e.index;
        let anchor = this.list.getAnchor();
        if (this.isSelectionRangeChangeEvent(e)) {
            if (typeof anchor === 'undefined') {
                const currentFocus = this.list.getFocus()[0];
                anchor = currentFocus !== null && currentFocus !== void 0 ? currentFocus : focus;
                this.list.setAnchor(anchor);
            }
            const min = Math.min(anchor, focus);
            const max = Math.max(anchor, focus);
            const rangeSelection = (0,arrays/* range */.w6)(min, max + 1);
            const selection = this.list.getSelection();
            const contiguousRange = getContiguousRangeContaining(disjunction(selection, [anchor]), anchor);
            if (contiguousRange.length === 0) {
                return;
            }
            const newSelection = disjunction(rangeSelection, relativeComplement(selection, contiguousRange));
            this.list.setSelection(newSelection, e.browserEvent);
            this.list.setFocus([focus], e.browserEvent);
        }
        else if (this.isSelectionSingleChangeEvent(e)) {
            const selection = this.list.getSelection();
            const newSelection = selection.filter(i => i !== focus);
            this.list.setFocus([focus]);
            this.list.setAnchor(focus);
            if (selection.length === newSelection.length) {
                this.list.setSelection([...newSelection, focus], e.browserEvent);
            }
            else {
                this.list.setSelection(newSelection, e.browserEvent);
            }
        }
    }
    dispose() {
        this.disposables.dispose();
    }
}
class DefaultStyleController {
    constructor(styleElement, selectorSuffix) {
        this.styleElement = styleElement;
        this.selectorSuffix = selectorSuffix;
    }
    style(styles) {
        var _a, _b;
        const suffix = this.selectorSuffix && `.${this.selectorSuffix}`;
        const content = [];
        if (styles.listBackground) {
            content.push(`.monaco-list${suffix} .monaco-list-rows { background: ${styles.listBackground}; }`);
        }
        if (styles.listFocusBackground) {
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.focused { background-color: ${styles.listFocusBackground}; }`);
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.focused:hover { background-color: ${styles.listFocusBackground}; }`); // overwrite :hover style in this case!
        }
        if (styles.listFocusForeground) {
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.focused { color: ${styles.listFocusForeground}; }`);
        }
        if (styles.listActiveSelectionBackground) {
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.selected { background-color: ${styles.listActiveSelectionBackground}; }`);
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.selected:hover { background-color: ${styles.listActiveSelectionBackground}; }`); // overwrite :hover style in this case!
        }
        if (styles.listActiveSelectionForeground) {
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.selected { color: ${styles.listActiveSelectionForeground}; }`);
        }
        if (styles.listActiveSelectionIconForeground) {
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.selected .codicon { color: ${styles.listActiveSelectionIconForeground}; }`);
        }
        if (styles.listFocusAndSelectionBackground) {
            content.push(`
				.monaco-drag-image,
				.monaco-list${suffix}:focus .monaco-list-row.selected.focused { background-color: ${styles.listFocusAndSelectionBackground}; }
			`);
        }
        if (styles.listFocusAndSelectionForeground) {
            content.push(`
				.monaco-drag-image,
				.monaco-list${suffix}:focus .monaco-list-row.selected.focused { color: ${styles.listFocusAndSelectionForeground}; }
			`);
        }
        if (styles.listInactiveFocusForeground) {
            content.push(`.monaco-list${suffix} .monaco-list-row.focused { color:  ${styles.listInactiveFocusForeground}; }`);
            content.push(`.monaco-list${suffix} .monaco-list-row.focused:hover { color:  ${styles.listInactiveFocusForeground}; }`); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionIconForeground) {
            content.push(`.monaco-list${suffix} .monaco-list-row.focused .codicon { color:  ${styles.listInactiveSelectionIconForeground}; }`);
        }
        if (styles.listInactiveFocusBackground) {
            content.push(`.monaco-list${suffix} .monaco-list-row.focused { background-color:  ${styles.listInactiveFocusBackground}; }`);
            content.push(`.monaco-list${suffix} .monaco-list-row.focused:hover { background-color:  ${styles.listInactiveFocusBackground}; }`); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionBackground) {
            content.push(`.monaco-list${suffix} .monaco-list-row.selected { background-color:  ${styles.listInactiveSelectionBackground}; }`);
            content.push(`.monaco-list${suffix} .monaco-list-row.selected:hover { background-color:  ${styles.listInactiveSelectionBackground}; }`); // overwrite :hover style in this case!
        }
        if (styles.listInactiveSelectionForeground) {
            content.push(`.monaco-list${suffix} .monaco-list-row.selected { color: ${styles.listInactiveSelectionForeground}; }`);
        }
        if (styles.listHoverBackground) {
            content.push(`.monaco-list${suffix}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${styles.listHoverBackground}; }`);
        }
        if (styles.listHoverForeground) {
            content.push(`.monaco-list${suffix}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${styles.listHoverForeground}; }`);
        }
        /**
         * Outlines
         */
        const focusAndSelectionOutline = (0,dom/* asCssValueWithDefault */.XT)(styles.listFocusAndSelectionOutline, (0,dom/* asCssValueWithDefault */.XT)(styles.listSelectionOutline, (_a = styles.listFocusOutline) !== null && _a !== void 0 ? _a : ''));
        if (focusAndSelectionOutline) { // default: listFocusOutline
            content.push(`.monaco-list${suffix}:focus .monaco-list-row.focused.selected { outline: 1px solid ${focusAndSelectionOutline}; outline-offset: -1px;}`);
        }
        if (styles.listFocusOutline) { // default: set
            content.push(`
				.monaco-drag-image,
				.monaco-list${suffix}:focus .monaco-list-row.focused { outline: 1px solid ${styles.listFocusOutline}; outline-offset: -1px; }
				.monaco-workbench.context-menu-visible .monaco-list${suffix}.last-focused .monaco-list-row.focused { outline: 1px solid ${styles.listFocusOutline}; outline-offset: -1px; }
			`);
        }
        const inactiveFocusAndSelectionOutline = (0,dom/* asCssValueWithDefault */.XT)(styles.listSelectionOutline, (_b = styles.listInactiveFocusOutline) !== null && _b !== void 0 ? _b : '');
        if (inactiveFocusAndSelectionOutline) {
            content.push(`.monaco-list${suffix} .monaco-list-row.focused.selected { outline: 1px dotted ${inactiveFocusAndSelectionOutline}; outline-offset: -1px; }`);
        }
        if (styles.listSelectionOutline) { // default: activeContrastBorder
            content.push(`.monaco-list${suffix} .monaco-list-row.selected { outline: 1px dotted ${styles.listSelectionOutline}; outline-offset: -1px; }`);
        }
        if (styles.listInactiveFocusOutline) { // default: null
            content.push(`.monaco-list${suffix} .monaco-list-row.focused { outline: 1px dotted ${styles.listInactiveFocusOutline}; outline-offset: -1px; }`);
        }
        if (styles.listHoverOutline) { // default: activeContrastBorder
            content.push(`.monaco-list${suffix} .monaco-list-row:hover { outline: 1px dashed ${styles.listHoverOutline}; outline-offset: -1px; }`);
        }
        if (styles.listDropBackground) {
            content.push(`
				.monaco-list${suffix}.drop-target,
				.monaco-list${suffix} .monaco-list-rows.drop-target,
				.monaco-list${suffix} .monaco-list-row.drop-target { background-color: ${styles.listDropBackground} !important; color: inherit !important; }
			`);
        }
        if (styles.tableColumnsBorder) {
            content.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${styles.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`);
        }
        if (styles.tableOddRowsBackgroundColor) {
            content.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${styles.tableOddRowsBackgroundColor};
				}
			`);
        }
        this.styleElement.textContent = content.join('\n');
    }
}
const unthemedListStyles = {
    listFocusBackground: '#7FB0D0',
    listActiveSelectionBackground: '#0E639C',
    listActiveSelectionForeground: '#FFFFFF',
    listActiveSelectionIconForeground: '#FFFFFF',
    listFocusAndSelectionOutline: '#90C2F9',
    listFocusAndSelectionBackground: '#094771',
    listFocusAndSelectionForeground: '#FFFFFF',
    listInactiveSelectionBackground: '#3F3F46',
    listInactiveSelectionIconForeground: '#FFFFFF',
    listHoverBackground: '#2A2D2E',
    listDropBackground: '#383B3D',
    treeIndentGuidesStroke: '#a9a9a9',
    treeInactiveIndentGuidesStroke: color/* Color */.Il.fromHex('#a9a9a9').transparent(0.4).toString(),
    tableColumnsBorder: color/* Color */.Il.fromHex('#cccccc').transparent(0.2).toString(),
    tableOddRowsBackgroundColor: color/* Color */.Il.fromHex('#cccccc').transparent(0.04).toString(),
    listBackground: undefined,
    listFocusForeground: undefined,
    listInactiveSelectionForeground: undefined,
    listInactiveFocusForeground: undefined,
    listInactiveFocusBackground: undefined,
    listHoverForeground: undefined,
    listFocusOutline: undefined,
    listInactiveFocusOutline: undefined,
    listSelectionOutline: undefined,
    listHoverOutline: undefined
};
const DefaultOptions = {
    keyboardSupport: true,
    mouseSupport: true,
    multipleSelectionSupport: true,
    dnd: {
        getDragURI() { return null; },
        onDragStart() { },
        onDragOver() { return false; },
        drop() { }
    }
};
// TODO@Joao: move these utils into a SortedArray class
function getContiguousRangeContaining(range, value) {
    const index = range.indexOf(value);
    if (index === -1) {
        return [];
    }
    const result = [];
    let i = index - 1;
    while (i >= 0 && range[i] === value - (index - i)) {
        result.push(range[i--]);
    }
    result.reverse();
    i = index;
    while (i < range.length && range[i] === value + (i - index)) {
        result.push(range[i++]);
    }
    return result;
}
/**
 * Given two sorted collections of numbers, returns the intersection
 * between them (OR).
 */
function disjunction(one, other) {
    const result = [];
    let i = 0, j = 0;
    while (i < one.length || j < other.length) {
        if (i >= one.length) {
            result.push(other[j++]);
        }
        else if (j >= other.length) {
            result.push(one[i++]);
        }
        else if (one[i] === other[j]) {
            result.push(one[i]);
            i++;
            j++;
            continue;
        }
        else if (one[i] < other[j]) {
            result.push(one[i++]);
        }
        else {
            result.push(other[j++]);
        }
    }
    return result;
}
/**
 * Given two sorted collections of numbers, returns the relative
 * complement between them (XOR).
 */
function relativeComplement(one, other) {
    const result = [];
    let i = 0, j = 0;
    while (i < one.length || j < other.length) {
        if (i >= one.length) {
            result.push(other[j++]);
        }
        else if (j >= other.length) {
            result.push(one[i++]);
        }
        else if (one[i] === other[j]) {
            i++;
            j++;
            continue;
        }
        else if (one[i] < other[j]) {
            result.push(one[i++]);
        }
        else {
            j++;
        }
    }
    return result;
}
const numericSort = (a, b) => a - b;
class PipelineRenderer {
    constructor(_templateId, renderers) {
        this._templateId = _templateId;
        this.renderers = renderers;
    }
    get templateId() {
        return this._templateId;
    }
    renderTemplate(container) {
        return this.renderers.map(r => r.renderTemplate(container));
    }
    renderElement(element, index, templateData, height) {
        let i = 0;
        for (const renderer of this.renderers) {
            renderer.renderElement(element, index, templateData[i++], height);
        }
    }
    disposeElement(element, index, templateData, height) {
        var _a;
        let i = 0;
        for (const renderer of this.renderers) {
            (_a = renderer.disposeElement) === null || _a === void 0 ? void 0 : _a.call(renderer, element, index, templateData[i], height);
            i += 1;
        }
    }
    disposeTemplate(templateData) {
        let i = 0;
        for (const renderer of this.renderers) {
            renderer.disposeTemplate(templateData[i++]);
        }
    }
}
class AccessibiltyRenderer {
    constructor(accessibilityProvider) {
        this.accessibilityProvider = accessibilityProvider;
        this.templateId = 'a18n';
    }
    renderTemplate(container) {
        return container;
    }
    renderElement(element, index, container) {
        const ariaLabel = this.accessibilityProvider.getAriaLabel(element);
        if (ariaLabel) {
            container.setAttribute('aria-label', ariaLabel);
        }
        else {
            container.removeAttribute('aria-label');
        }
        const ariaLevel = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(element);
        if (typeof ariaLevel === 'number') {
            container.setAttribute('aria-level', `${ariaLevel}`);
        }
        else {
            container.removeAttribute('aria-level');
        }
    }
    disposeTemplate(templateData) {
        // noop
    }
}
class ListViewDragAndDrop {
    constructor(list, dnd) {
        this.list = list;
        this.dnd = dnd;
    }
    getDragElements(element) {
        const selection = this.list.getSelectedElements();
        const elements = selection.indexOf(element) > -1 ? selection : [element];
        return elements;
    }
    getDragURI(element) {
        return this.dnd.getDragURI(element);
    }
    getDragLabel(elements, originalEvent) {
        if (this.dnd.getDragLabel) {
            return this.dnd.getDragLabel(elements, originalEvent);
        }
        return undefined;
    }
    onDragStart(data, originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, data, originalEvent);
    }
    onDragOver(data, targetElement, targetIndex, originalEvent) {
        return this.dnd.onDragOver(data, targetElement, targetIndex, originalEvent);
    }
    onDragLeave(data, targetElement, targetIndex, originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragLeave) === null || _b === void 0 ? void 0 : _b.call(_a, data, targetElement, targetIndex, originalEvent);
    }
    onDragEnd(originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, originalEvent);
    }
    drop(data, targetElement, targetIndex, originalEvent) {
        this.dnd.drop(data, targetElement, targetIndex, originalEvent);
    }
}
/**
 * The {@link List} is a virtual scrolling widget, built on top of the {@link ListView}
 * widget.
 *
 * Features:
 * - Customizable keyboard and mouse support
 * - Element traits: focus, selection, achor
 * - Accessibility support
 * - Touch support
 * - Performant template-based rendering
 * - Horizontal scrolling
 * - Variable element height support
 * - Dynamic element height support
 * - Drag-and-drop support
 */
class List {
    get onDidChangeFocus() {
        return common_event/* Event */.ju.map(this.eventBufferer.wrapEvent(this.focus.onChange), e => this.toListEvent(e), this.disposables);
    }
    get onDidChangeSelection() {
        return common_event/* Event */.ju.map(this.eventBufferer.wrapEvent(this.selection.onChange), e => this.toListEvent(e), this.disposables);
    }
    get domId() { return this.view.domId; }
    get onDidScroll() { return this.view.onDidScroll; }
    get onMouseClick() { return this.view.onMouseClick; }
    get onMouseDblClick() { return this.view.onMouseDblClick; }
    get onMouseMiddleClick() { return this.view.onMouseMiddleClick; }
    get onPointer() { return this.mouseController.onPointer; }
    get onMouseDown() { return this.view.onMouseDown; }
    get onMouseOver() { return this.view.onMouseOver; }
    get onMouseOut() { return this.view.onMouseOut; }
    get onTouchStart() { return this.view.onTouchStart; }
    get onTap() { return this.view.onTap; }
    /**
     * Possible context menu trigger events:
     * - ContextMenu key
     * - Shift F10
     * - Ctrl Option Shift M (macOS with VoiceOver)
     * - Mouse right click
     */
    get onContextMenu() {
        let didJustPressContextMenuKey = false;
        const fromKeyDown = this.disposables.add(common_event/* Event */.ju.chain(this.disposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'keydown')).event))
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e))
            .filter(e => didJustPressContextMenuKey = e.keyCode === 58 /* KeyCode.ContextMenu */ || (e.shiftKey && e.keyCode === 68 /* KeyCode.F10 */))
            .map(e => dom/* EventHelper */.zB.stop(e, true))
            .filter(() => false)
            .event;
        const fromKeyUp = this.disposables.add(common_event/* Event */.ju.chain(this.disposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'keyup')).event))
            .forEach(() => didJustPressContextMenuKey = false)
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e))
            .filter(e => e.keyCode === 58 /* KeyCode.ContextMenu */ || (e.shiftKey && e.keyCode === 68 /* KeyCode.F10 */))
            .map(e => dom/* EventHelper */.zB.stop(e, true))
            .map(({ browserEvent }) => {
            const focus = this.getFocus();
            const index = focus.length ? focus[0] : undefined;
            const element = typeof index !== 'undefined' ? this.view.element(index) : undefined;
            const anchor = typeof index !== 'undefined' ? this.view.domElement(index) : this.view.domNode;
            return { index, element, anchor, browserEvent };
        })
            .event;
        const fromMouse = this.disposables.add(common_event/* Event */.ju.chain(this.view.onContextMenu))
            .filter(_ => !didJustPressContextMenuKey)
            .map(({ element, index, browserEvent }) => ({ element, index, anchor: new mouseEvent/* StandardMouseEvent */.n(browserEvent), browserEvent }))
            .event;
        return common_event/* Event */.ju.any(fromKeyDown, fromKeyUp, fromMouse);
    }
    get onKeyDown() { return this.disposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'keydown')).event; }
    get onDidFocus() { return common_event/* Event */.ju.signal(this.disposables.add(new browser_event/* DomEmitter */.Y(this.view.domNode, 'focus', true)).event); }
    constructor(user, container, virtualDelegate, renderers, _options = DefaultOptions) {
        var _a, _b, _c, _d;
        this.user = user;
        this._options = _options;
        this.focus = new Trait('focused');
        this.anchor = new Trait('anchor');
        this.eventBufferer = new common_event/* EventBufferer */.E7();
        this._ariaLabel = '';
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this._onDidDispose = new common_event/* Emitter */.Q5();
        this.onDidDispose = this._onDidDispose.event;
        const role = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? (_a = this._options.accessibilityProvider) === null || _a === void 0 ? void 0 : _a.getWidgetRole() : 'list';
        this.selection = new SelectionTrait(role !== 'listbox');
        const baseRenderers = [this.focus.renderer, this.selection.renderer];
        this.accessibilityProvider = _options.accessibilityProvider;
        if (this.accessibilityProvider) {
            baseRenderers.push(new AccessibiltyRenderer(this.accessibilityProvider));
            (_c = (_b = this.accessibilityProvider).onDidChangeActiveDescendant) === null || _c === void 0 ? void 0 : _c.call(_b, this.onDidChangeActiveDescendant, this, this.disposables);
        }
        renderers = renderers.map(r => new PipelineRenderer(r.templateId, [...baseRenderers, r]));
        const viewOptions = Object.assign(Object.assign({}, _options), { dnd: _options.dnd && new ListViewDragAndDrop(this, _options.dnd) });
        this.view = this.createListView(container, virtualDelegate, renderers, viewOptions);
        this.view.domNode.setAttribute('role', role);
        if (_options.styleController) {
            this.styleController = _options.styleController(this.view.domId);
        }
        else {
            const styleElement = (0,dom/* createStyleSheet */.dS)(this.view.domNode);
            this.styleController = new DefaultStyleController(styleElement, this.view.domId);
        }
        this.spliceable = new CombinedSpliceable([
            new TraitSpliceable(this.focus, this.view, _options.identityProvider),
            new TraitSpliceable(this.selection, this.view, _options.identityProvider),
            new TraitSpliceable(this.anchor, this.view, _options.identityProvider),
            this.view
        ]);
        this.disposables.add(this.focus);
        this.disposables.add(this.selection);
        this.disposables.add(this.anchor);
        this.disposables.add(this.view);
        this.disposables.add(this._onDidDispose);
        this.disposables.add(new DOMFocusController(this, this.view));
        if (typeof _options.keyboardSupport !== 'boolean' || _options.keyboardSupport) {
            this.keyboardController = new KeyboardController(this, this.view, _options);
            this.disposables.add(this.keyboardController);
        }
        if (_options.keyboardNavigationLabelProvider) {
            const delegate = _options.keyboardNavigationDelegate || DefaultKeyboardNavigationDelegate;
            this.typeNavigationController = new TypeNavigationController(this, this.view, _options.keyboardNavigationLabelProvider, (_d = _options.keyboardNavigationEventFilter) !== null && _d !== void 0 ? _d : (() => true), delegate);
            this.disposables.add(this.typeNavigationController);
        }
        this.mouseController = this.createMouseController(_options);
        this.disposables.add(this.mouseController);
        this.onDidChangeFocus(this._onFocusChange, this, this.disposables);
        this.onDidChangeSelection(this._onSelectionChange, this, this.disposables);
        if (this.accessibilityProvider) {
            this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel();
        }
        if (this._options.multipleSelectionSupport !== false) {
            this.view.domNode.setAttribute('aria-multiselectable', 'true');
        }
    }
    createListView(container, virtualDelegate, renderers, viewOptions) {
        return new listView/* ListView */.Bv(container, virtualDelegate, renderers, viewOptions);
    }
    createMouseController(options) {
        return new MouseController(this);
    }
    updateOptions(optionsUpdate = {}) {
        var _a, _b;
        this._options = Object.assign(Object.assign({}, this._options), optionsUpdate);
        (_a = this.typeNavigationController) === null || _a === void 0 ? void 0 : _a.updateOptions(this._options);
        if (this._options.multipleSelectionController !== undefined) {
            if (this._options.multipleSelectionSupport) {
                this.view.domNode.setAttribute('aria-multiselectable', 'true');
            }
            else {
                this.view.domNode.removeAttribute('aria-multiselectable');
            }
        }
        this.mouseController.updateOptions(optionsUpdate);
        (_b = this.keyboardController) === null || _b === void 0 ? void 0 : _b.updateOptions(optionsUpdate);
        this.view.updateOptions(optionsUpdate);
    }
    get options() {
        return this._options;
    }
    splice(start, deleteCount, elements = []) {
        if (start < 0 || start > this.view.length) {
            throw new ListError(this.user, `Invalid start index: ${start}`);
        }
        if (deleteCount < 0) {
            throw new ListError(this.user, `Invalid delete count: ${deleteCount}`);
        }
        if (deleteCount === 0 && elements.length === 0) {
            return;
        }
        this.eventBufferer.bufferEvents(() => this.spliceable.splice(start, deleteCount, elements));
    }
    rerender() {
        this.view.rerender();
    }
    element(index) {
        return this.view.element(index);
    }
    get length() {
        return this.view.length;
    }
    get contentHeight() {
        return this.view.contentHeight;
    }
    get scrollTop() {
        return this.view.getScrollTop();
    }
    set scrollTop(scrollTop) {
        this.view.setScrollTop(scrollTop);
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get firstVisibleIndex() {
        return this.view.firstVisibleIndex;
    }
    get ariaLabel() {
        return this._ariaLabel;
    }
    set ariaLabel(value) {
        this._ariaLabel = value;
        this.view.domNode.setAttribute('aria-label', value);
    }
    domFocus() {
        this.view.domNode.focus({ preventScroll: true });
    }
    layout(height, width) {
        this.view.layout(height, width);
    }
    setSelection(indexes, browserEvent) {
        for (const index of indexes) {
            if (index < 0 || index >= this.length) {
                throw new ListError(this.user, `Invalid index ${index}`);
            }
        }
        this.selection.set(indexes, browserEvent);
    }
    getSelection() {
        return this.selection.get();
    }
    getSelectedElements() {
        return this.getSelection().map(i => this.view.element(i));
    }
    setAnchor(index) {
        if (typeof index === 'undefined') {
            this.anchor.set([]);
            return;
        }
        if (index < 0 || index >= this.length) {
            throw new ListError(this.user, `Invalid index ${index}`);
        }
        this.anchor.set([index]);
    }
    getAnchor() {
        return (0,arrays/* firstOrDefault */.Xh)(this.anchor.get(), undefined);
    }
    getAnchorElement() {
        const anchor = this.getAnchor();
        return typeof anchor === 'undefined' ? undefined : this.element(anchor);
    }
    setFocus(indexes, browserEvent) {
        for (const index of indexes) {
            if (index < 0 || index >= this.length) {
                throw new ListError(this.user, `Invalid index ${index}`);
            }
        }
        this.focus.set(indexes, browserEvent);
    }
    focusNext(n = 1, loop = false, browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const focus = this.focus.get();
        const index = this.findNextIndex(focus.length > 0 ? focus[0] + n : 0, loop, filter);
        if (index > -1) {
            this.setFocus([index], browserEvent);
        }
    }
    focusPrevious(n = 1, loop = false, browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const focus = this.focus.get();
        const index = this.findPreviousIndex(focus.length > 0 ? focus[0] - n : 0, loop, filter);
        if (index > -1) {
            this.setFocus([index], browserEvent);
        }
    }
    focusNextPage(browserEvent, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastPageIndex = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
            lastPageIndex = lastPageIndex === 0 ? 0 : lastPageIndex - 1;
            const currentlyFocusedElementIndex = this.getFocus()[0];
            if (currentlyFocusedElementIndex !== lastPageIndex && (currentlyFocusedElementIndex === undefined || lastPageIndex > currentlyFocusedElementIndex)) {
                const lastGoodPageIndex = this.findPreviousIndex(lastPageIndex, false, filter);
                if (lastGoodPageIndex > -1 && currentlyFocusedElementIndex !== lastGoodPageIndex) {
                    this.setFocus([lastGoodPageIndex], browserEvent);
                }
                else {
                    this.setFocus([lastPageIndex], browserEvent);
                }
            }
            else {
                const previousScrollTop = this.view.getScrollTop();
                let nextpageScrollTop = previousScrollTop + this.view.renderHeight;
                if (lastPageIndex > currentlyFocusedElementIndex) {
                    // scroll last page element to the top only if the last page element is below the focused element
                    nextpageScrollTop -= this.view.elementHeight(lastPageIndex);
                }
                this.view.setScrollTop(nextpageScrollTop);
                if (this.view.getScrollTop() !== previousScrollTop) {
                    this.setFocus([]);
                    // Let the scroll event listener run
                    yield (0,common_async/* timeout */.Vs)(0);
                    yield this.focusNextPage(browserEvent, filter);
                }
            }
        });
    }
    focusPreviousPage(browserEvent, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstPageIndex;
            const scrollTop = this.view.getScrollTop();
            if (scrollTop === 0) {
                firstPageIndex = this.view.indexAt(scrollTop);
            }
            else {
                firstPageIndex = this.view.indexAfter(scrollTop - 1);
            }
            const currentlyFocusedElementIndex = this.getFocus()[0];
            if (currentlyFocusedElementIndex !== firstPageIndex && (currentlyFocusedElementIndex === undefined || currentlyFocusedElementIndex >= firstPageIndex)) {
                const firstGoodPageIndex = this.findNextIndex(firstPageIndex, false, filter);
                if (firstGoodPageIndex > -1 && currentlyFocusedElementIndex !== firstGoodPageIndex) {
                    this.setFocus([firstGoodPageIndex], browserEvent);
                }
                else {
                    this.setFocus([firstPageIndex], browserEvent);
                }
            }
            else {
                const previousScrollTop = scrollTop;
                this.view.setScrollTop(scrollTop - this.view.renderHeight);
                if (this.view.getScrollTop() !== previousScrollTop) {
                    this.setFocus([]);
                    // Let the scroll event listener run
                    yield (0,common_async/* timeout */.Vs)(0);
                    yield this.focusPreviousPage(browserEvent, filter);
                }
            }
        });
    }
    focusLast(browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const index = this.findPreviousIndex(this.length - 1, false, filter);
        if (index > -1) {
            this.setFocus([index], browserEvent);
        }
    }
    focusFirst(browserEvent, filter) {
        this.focusNth(0, browserEvent, filter);
    }
    focusNth(n, browserEvent, filter) {
        if (this.length === 0) {
            return;
        }
        const index = this.findNextIndex(n, false, filter);
        if (index > -1) {
            this.setFocus([index], browserEvent);
        }
    }
    findNextIndex(index, loop = false, filter) {
        for (let i = 0; i < this.length; i++) {
            if (index >= this.length && !loop) {
                return -1;
            }
            index = index % this.length;
            if (!filter || filter(this.element(index))) {
                return index;
            }
            index++;
        }
        return -1;
    }
    findPreviousIndex(index, loop = false, filter) {
        for (let i = 0; i < this.length; i++) {
            if (index < 0 && !loop) {
                return -1;
            }
            index = (this.length + (index % this.length)) % this.length;
            if (!filter || filter(this.element(index))) {
                return index;
            }
            index--;
        }
        return -1;
    }
    getFocus() {
        return this.focus.get();
    }
    getFocusedElements() {
        return this.getFocus().map(i => this.view.element(i));
    }
    reveal(index, relativeTop) {
        if (index < 0 || index >= this.length) {
            throw new ListError(this.user, `Invalid index ${index}`);
        }
        const scrollTop = this.view.getScrollTop();
        const elementTop = this.view.elementTop(index);
        const elementHeight = this.view.elementHeight(index);
        if ((0,types/* isNumber */.hj)(relativeTop)) {
            // y = mx + b
            const m = elementHeight - this.view.renderHeight;
            this.view.setScrollTop(m * (0,numbers/* clamp */.uZ)(relativeTop, 0, 1) + elementTop);
        }
        else {
            const viewItemBottom = elementTop + elementHeight;
            const scrollBottom = scrollTop + this.view.renderHeight;
            if (elementTop < scrollTop && viewItemBottom >= scrollBottom) {
                // The element is already overflowing the viewport, no-op
            }
            else if (elementTop < scrollTop || (viewItemBottom >= scrollBottom && elementHeight >= this.view.renderHeight)) {
                this.view.setScrollTop(elementTop);
            }
            else if (viewItemBottom >= scrollBottom) {
                this.view.setScrollTop(viewItemBottom - this.view.renderHeight);
            }
        }
    }
    getHTMLElement() {
        return this.view.domNode;
    }
    getElementID(index) {
        return this.view.getElementDomId(index);
    }
    style(styles) {
        this.styleController.style(styles);
    }
    toListEvent({ indexes, browserEvent }) {
        return { indexes, elements: indexes.map(i => this.view.element(i)), browserEvent };
    }
    _onFocusChange() {
        const focus = this.focus.get();
        this.view.domNode.classList.toggle('element-focused', focus.length > 0);
        this.onDidChangeActiveDescendant();
    }
    onDidChangeActiveDescendant() {
        var _a;
        const focus = this.focus.get();
        if (focus.length > 0) {
            let id;
            if ((_a = this.accessibilityProvider) === null || _a === void 0 ? void 0 : _a.getActiveDescendantId) {
                id = this.accessibilityProvider.getActiveDescendantId(this.view.element(focus[0]));
            }
            this.view.domNode.setAttribute('aria-activedescendant', id || this.view.getElementDomId(focus[0]));
        }
        else {
            this.view.domNode.removeAttribute('aria-activedescendant');
        }
    }
    _onSelectionChange() {
        const selection = this.selection.get();
        this.view.domNode.classList.toggle('selection-none', selection.length === 0);
        this.view.domNode.classList.toggle('selection-single', selection.length === 1);
        this.view.domNode.classList.toggle('selection-multiple', selection.length > 1);
    }
    dispose() {
        this._onDidDispose.fire();
        this.disposables.dispose();
        this._onDidDispose.dispose();
    }
}
__decorate([
    decorators/* memoize */.H
], List.prototype, "onDidChangeFocus", null);
__decorate([
    decorators/* memoize */.H
], List.prototype, "onDidChangeSelection", null);
__decorate([
    decorators/* memoize */.H
], List.prototype, "onContextMenu", null);
__decorate([
    decorators/* memoize */.H
], List.prototype, "onKeyDown", null);
__decorate([
    decorators/* memoize */.H
], List.prototype, "onDidFocus", null);


/***/ }),

/***/ 10318:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v2: function() { return /* binding */ Menu; }
/* harmony export */ });
/* unused harmony exports MENU_MNEMONIC_REGEX, MENU_ESCAPED_MNEMONIC_REGEX, Direction, cleanMnemonic, formatRule */
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18463);
/* harmony import */ var _touch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43765);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56704);
/* harmony import */ var _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44767);
/* harmony import */ var _mouseEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45394);
/* harmony import */ var _actionbar_actionbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31768);
/* harmony import */ var _actionbar_actionViewItems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87297);
/* harmony import */ var _contextview_contextview_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29337);
/* harmony import */ var _scrollbar_scrollableElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85489);
/* harmony import */ var _common_actions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25541);
/* harmony import */ var _common_async_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(69058);
/* harmony import */ var _common_codicons_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13113);
/* harmony import */ var _common_themables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50077);
/* harmony import */ var _common_iconLabels_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83123);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(26794);
/* harmony import */ var _common_platform_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48593);
/* harmony import */ var _common_strings_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70625);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

















const MENU_MNEMONIC_REGEX = /\(&([^\s&])\)|(^|[^&])&([^\s&])/;
const MENU_ESCAPED_MNEMONIC_REGEX = /(&amp;)?(&amp;)([^\s&])/g;
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Left"] = 1] = "Left";
})(Direction || (Direction = {}));
class Menu extends _actionbar_actionbar_js__WEBPACK_IMPORTED_MODULE_5__/* .ActionBar */ .o {
    constructor(container, actions, options, menuStyles) {
        container.classList.add('monaco-menu-container');
        container.setAttribute('role', 'presentation');
        const menuElement = document.createElement('div');
        menuElement.classList.add('monaco-menu');
        menuElement.setAttribute('role', 'presentation');
        super(menuElement, {
            orientation: 1 /* ActionsOrientation.VERTICAL */,
            actionViewItemProvider: action => this.doGetActionViewItem(action, options, parentData),
            context: options.context,
            actionRunner: options.actionRunner,
            ariaLabel: options.ariaLabel,
            ariaRole: 'menu',
            focusOnlyEnabledItems: true,
            triggerKeys: { keys: [3 /* KeyCode.Enter */, ...(_common_platform_js__WEBPACK_IMPORTED_MODULE_15__/* .isMacintosh */ .dz || _common_platform_js__WEBPACK_IMPORTED_MODULE_15__/* .isLinux */ .IJ ? [10 /* KeyCode.Space */] : [])], keyDown: true }
        });
        this.menuStyles = menuStyles;
        this.menuElement = menuElement;
        this.actionsList.tabIndex = 0;
        this.menuDisposables = this._register(new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_14__/* .DisposableStore */ .SL());
        this.initializeOrUpdateStyleSheet(container, menuStyles);
        this._register(_touch_js__WEBPACK_IMPORTED_MODULE_1__/* .Gesture */ .o.addTarget(menuElement));
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(menuElement, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_DOWN, (e) => {
            const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
            // Stop tab navigation of menus
            if (event.equals(2 /* KeyCode.Tab */)) {
                e.preventDefault();
            }
        });
        if (options.enableMnemonics) {
            this.menuDisposables.add((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(menuElement, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_DOWN, (e) => {
                const key = e.key.toLocaleLowerCase();
                if (this.mnemonics.has(key)) {
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                    const actions = this.mnemonics.get(key);
                    if (actions.length === 1) {
                        if (actions[0] instanceof SubmenuMenuActionViewItem && actions[0].container) {
                            this.focusItemByElement(actions[0].container);
                        }
                        actions[0].onClick(e);
                    }
                    if (actions.length > 1) {
                        const action = actions.shift();
                        if (action && action.container) {
                            this.focusItemByElement(action.container);
                            actions.push(action);
                        }
                        this.mnemonics.set(key, actions);
                    }
                }
            }));
        }
        if (_common_platform_js__WEBPACK_IMPORTED_MODULE_15__/* .isLinux */ .IJ) {
            this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(menuElement, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_DOWN, e => {
                const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
                if (event.equals(14 /* KeyCode.Home */) || event.equals(11 /* KeyCode.PageUp */)) {
                    this.focusedItem = this.viewItems.length - 1;
                    this.focusNext();
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                }
                else if (event.equals(13 /* KeyCode.End */) || event.equals(12 /* KeyCode.PageDown */)) {
                    this.focusedItem = 0;
                    this.focusPrevious();
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                }
            }));
        }
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.domNode, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_OUT, e => {
            const relatedTarget = e.relatedTarget;
            if (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isAncestor */ .jg)(relatedTarget, this.domNode)) {
                this.focusedItem = undefined;
                this.updateFocus();
                e.stopPropagation();
            }
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.actionsList, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_OVER, e => {
            let target = e.target;
            if (!target || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isAncestor */ .jg)(target, this.actionsList) || target === this.actionsList) {
                return;
            }
            while (target.parentElement !== this.actionsList && target.parentElement !== null) {
                target = target.parentElement;
            }
            if (target.classList.contains('action-item')) {
                const lastFocusedItem = this.focusedItem;
                this.setFocusedItem(target);
                if (lastFocusedItem !== this.focusedItem) {
                    this.updateFocus();
                }
            }
        }));
        // Support touch on actions list to focus items (needed for submenus)
        this._register(_touch_js__WEBPACK_IMPORTED_MODULE_1__/* .Gesture */ .o.addTarget(this.actionsList));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.actionsList, _touch_js__WEBPACK_IMPORTED_MODULE_1__/* .EventType */ .t.Tap, e => {
            let target = e.initialTarget;
            if (!target || !(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isAncestor */ .jg)(target, this.actionsList) || target === this.actionsList) {
                return;
            }
            while (target.parentElement !== this.actionsList && target.parentElement !== null) {
                target = target.parentElement;
            }
            if (target.classList.contains('action-item')) {
                const lastFocusedItem = this.focusedItem;
                this.setFocusedItem(target);
                if (lastFocusedItem !== this.focusedItem) {
                    this.updateFocus();
                }
            }
        }));
        const parentData = {
            parent: this
        };
        this.mnemonics = new Map();
        // Scroll Logic
        this.scrollableElement = this._register(new _scrollbar_scrollableElement_js__WEBPACK_IMPORTED_MODULE_8__/* .DomScrollableElement */ .s$(menuElement, {
            alwaysConsumeMouseWheel: true,
            horizontal: 2 /* ScrollbarVisibility.Hidden */,
            vertical: 3 /* ScrollbarVisibility.Visible */,
            verticalScrollbarSize: 7,
            handleMouseWheel: true,
            useShadows: true
        }));
        const scrollElement = this.scrollableElement.getDomNode();
        scrollElement.style.position = '';
        this.styleScrollElement(scrollElement, menuStyles);
        // Support scroll on menu drag
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(menuElement, _touch_js__WEBPACK_IMPORTED_MODULE_1__/* .EventType */ .t.Change, e => {
            _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
            const scrollTop = this.scrollableElement.getScrollPosition().scrollTop;
            this.scrollableElement.setScrollPosition({ scrollTop: scrollTop - e.translationY });
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(scrollElement, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_UP, e => {
            // Absorb clicks in menu dead space https://github.com/microsoft/vscode/issues/63575
            // We do this on the scroll element so the scroll bar doesn't dismiss the menu either
            e.preventDefault();
        }));
        menuElement.style.maxHeight = `${Math.max(10, window.innerHeight - container.getBoundingClientRect().top - 35)}px`;
        actions = actions.filter(a => {
            var _a;
            if ((_a = options.submenuIds) === null || _a === void 0 ? void 0 : _a.has(a.id)) {
                console.warn(`Found submenu cycle: ${a.id}`);
                return false;
            }
            return true;
        });
        this.push(actions, { icon: true, label: true, isMenu: true });
        container.appendChild(this.scrollableElement.getDomNode());
        this.scrollableElement.scanDomNode();
        this.viewItems.filter(item => !(item instanceof MenuSeparatorActionViewItem)).forEach((item, index, array) => {
            item.updatePositionInSet(index + 1, array.length);
        });
    }
    initializeOrUpdateStyleSheet(container, style) {
        if (!this.styleSheet) {
            if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isInShadowDOM */ .OO)(container)) {
                this.styleSheet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .createStyleSheet */ .dS)(container);
            }
            else {
                if (!Menu.globalStyleSheet) {
                    Menu.globalStyleSheet = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .createStyleSheet */ .dS)();
                }
                this.styleSheet = Menu.globalStyleSheet;
            }
        }
        this.styleSheet.textContent = getMenuWidgetCSS(style, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isInShadowDOM */ .OO)(container));
    }
    styleScrollElement(scrollElement, style) {
        var _a, _b;
        const fgColor = (_a = style.foregroundColor) !== null && _a !== void 0 ? _a : '';
        const bgColor = (_b = style.backgroundColor) !== null && _b !== void 0 ? _b : '';
        const border = style.borderColor ? `1px solid ${style.borderColor}` : '';
        const borderRadius = '5px';
        const shadow = style.shadowColor ? `0 2px 8px ${style.shadowColor}` : '';
        scrollElement.style.outline = border;
        scrollElement.style.borderRadius = borderRadius;
        scrollElement.style.color = fgColor;
        scrollElement.style.backgroundColor = bgColor;
        scrollElement.style.boxShadow = shadow;
    }
    getContainer() {
        return this.scrollableElement.getDomNode();
    }
    get onScroll() {
        return this.scrollableElement.onScroll;
    }
    focusItemByElement(element) {
        const lastFocusedItem = this.focusedItem;
        this.setFocusedItem(element);
        if (lastFocusedItem !== this.focusedItem) {
            this.updateFocus();
        }
    }
    setFocusedItem(element) {
        for (let i = 0; i < this.actionsList.children.length; i++) {
            const elem = this.actionsList.children[i];
            if (element === elem) {
                this.focusedItem = i;
                break;
            }
        }
    }
    updateFocus(fromRight) {
        super.updateFocus(fromRight, true, true);
        if (typeof this.focusedItem !== 'undefined') {
            // Workaround for #80047 caused by an issue in chromium
            // https://bugs.chromium.org/p/chromium/issues/detail?id=414283
            // When that's fixed, just call this.scrollableElement.scanDomNode()
            this.scrollableElement.setScrollPosition({
                scrollTop: Math.round(this.menuElement.scrollTop)
            });
        }
    }
    doGetActionViewItem(action, options, parentData) {
        if (action instanceof _common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .Separator */ .Z0) {
            return new MenuSeparatorActionViewItem(options.context, action, { icon: true }, this.menuStyles);
        }
        else if (action instanceof _common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .SubmenuAction */ .wY) {
            const menuActionViewItem = new SubmenuMenuActionViewItem(action, action.actions, parentData, Object.assign(Object.assign({}, options), { submenuIds: new Set([...(options.submenuIds || []), action.id]) }), this.menuStyles);
            if (options.enableMnemonics) {
                const mnemonic = menuActionViewItem.getMnemonic();
                if (mnemonic && menuActionViewItem.isEnabled()) {
                    let actionViewItems = [];
                    if (this.mnemonics.has(mnemonic)) {
                        actionViewItems = this.mnemonics.get(mnemonic);
                    }
                    actionViewItems.push(menuActionViewItem);
                    this.mnemonics.set(mnemonic, actionViewItems);
                }
            }
            return menuActionViewItem;
        }
        else {
            const menuItemOptions = { enableMnemonics: options.enableMnemonics, useEventAsContext: options.useEventAsContext };
            if (options.getKeyBinding) {
                const keybinding = options.getKeyBinding(action);
                if (keybinding) {
                    const keybindingLabel = keybinding.getLabel();
                    if (keybindingLabel) {
                        menuItemOptions.keybinding = keybindingLabel;
                    }
                }
            }
            const menuActionViewItem = new BaseMenuActionViewItem(options.context, action, menuItemOptions, this.menuStyles);
            if (options.enableMnemonics) {
                const mnemonic = menuActionViewItem.getMnemonic();
                if (mnemonic && menuActionViewItem.isEnabled()) {
                    let actionViewItems = [];
                    if (this.mnemonics.has(mnemonic)) {
                        actionViewItems = this.mnemonics.get(mnemonic);
                    }
                    actionViewItems.push(menuActionViewItem);
                    this.mnemonics.set(mnemonic, actionViewItems);
                }
            }
            return menuActionViewItem;
        }
    }
}
class BaseMenuActionViewItem extends _actionbar_actionViewItems_js__WEBPACK_IMPORTED_MODULE_6__/* .BaseActionViewItem */ .YH {
    constructor(ctx, action, options, menuStyle) {
        options.isMenu = true;
        super(action, action, options);
        this.menuStyle = menuStyle;
        this.options = options;
        this.options.icon = options.icon !== undefined ? options.icon : false;
        this.options.label = options.label !== undefined ? options.label : true;
        this.cssClass = '';
        // Set mnemonic
        if (this.options.label && options.enableMnemonics) {
            const label = this.action.label;
            if (label) {
                const matches = MENU_MNEMONIC_REGEX.exec(label);
                if (matches) {
                    this.mnemonic = (!!matches[1] ? matches[1] : matches[3]).toLocaleLowerCase();
                }
            }
        }
        // Add mouse up listener later to avoid accidental clicks
        this.runOnceToEnableMouseUp = new _common_async_js__WEBPACK_IMPORTED_MODULE_10__/* .RunOnceScheduler */ .pY(() => {
            if (!this.element) {
                return;
            }
            this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_UP, e => {
                // removed default prevention as it conflicts
                // with BaseActionViewItem #101537
                // add back if issues arise and link new issue
                _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                // See https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard
                // > Writing to the clipboard
                // > You can use the "cut" and "copy" commands without any special
                // permission if you are using them in a short-lived event handler
                // for a user action (for example, a click handler).
                // => to get the Copy and Paste context menu actions working on Firefox,
                // there should be no timeout here
                if (_browser_js__WEBPACK_IMPORTED_MODULE_0__/* .isFirefox */ .vU) {
                    const mouseEvent = new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_4__/* .StandardMouseEvent */ .n(e);
                    // Allowing right click to trigger the event causes the issue described below,
                    // but since the solution below does not work in FF, we must disable right click
                    if (mouseEvent.rightButton) {
                        return;
                    }
                    this.onClick(e);
                }
                // In all other cases, set timeout to allow context menu cancellation to trigger
                // otherwise the action will destroy the menu and a second context menu
                // will still trigger for right click.
                else {
                    setTimeout(() => {
                        this.onClick(e);
                    }, 0);
                }
            }));
            this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.CONTEXT_MENU, e => {
                _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
            }));
        }, 100);
        this._register(this.runOnceToEnableMouseUp);
    }
    render(container) {
        super.render(container);
        if (!this.element) {
            return;
        }
        this.container = container;
        this.item = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.element, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('a.action-menu-item'));
        if (this._action.id === _common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .Separator */ .Z0.ID) {
            // A separator is a presentation item
            this.item.setAttribute('role', 'presentation');
        }
        else {
            this.item.setAttribute('role', 'menuitem');
            if (this.mnemonic) {
                this.item.setAttribute('aria-keyshortcuts', `${this.mnemonic}`);
            }
        }
        this.check = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.item, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('span.menu-item-check' + _common_themables_js__WEBPACK_IMPORTED_MODULE_12__/* .ThemeIcon */ .k.asCSSSelector(_common_codicons_js__WEBPACK_IMPORTED_MODULE_11__/* .Codicon */ .l.menuSelection)));
        this.check.setAttribute('role', 'none');
        this.label = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.item, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('span.action-label'));
        if (this.options.label && this.options.keybinding) {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.item, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('span.keybinding')).textContent = this.options.keybinding;
        }
        // Adds mouse up listener to actually run the action
        this.runOnceToEnableMouseUp.schedule();
        this.updateClass();
        this.updateLabel();
        this.updateTooltip();
        this.updateEnabled();
        this.updateChecked();
        this.applyStyle();
    }
    blur() {
        super.blur();
        this.applyStyle();
    }
    focus() {
        var _a;
        super.focus();
        (_a = this.item) === null || _a === void 0 ? void 0 : _a.focus();
        this.applyStyle();
    }
    updatePositionInSet(pos, setSize) {
        if (this.item) {
            this.item.setAttribute('aria-posinset', `${pos}`);
            this.item.setAttribute('aria-setsize', `${setSize}`);
        }
    }
    updateLabel() {
        var _a;
        if (!this.label) {
            return;
        }
        if (this.options.label) {
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .clearNode */ .PO)(this.label);
            let label = (0,_common_iconLabels_js__WEBPACK_IMPORTED_MODULE_13__/* .stripIcons */ .x$)(this.action.label);
            if (label) {
                const cleanLabel = cleanMnemonic(label);
                if (!this.options.enableMnemonics) {
                    label = cleanLabel;
                }
                this.label.setAttribute('aria-label', cleanLabel.replace(/&&/g, '&'));
                const matches = MENU_MNEMONIC_REGEX.exec(label);
                if (matches) {
                    label = _common_strings_js__WEBPACK_IMPORTED_MODULE_16__/* .escape */ .YU(label);
                    // This is global, reset it
                    MENU_ESCAPED_MNEMONIC_REGEX.lastIndex = 0;
                    let escMatch = MENU_ESCAPED_MNEMONIC_REGEX.exec(label);
                    // We can't use negative lookbehind so if we match our negative and skip
                    while (escMatch && escMatch[1]) {
                        escMatch = MENU_ESCAPED_MNEMONIC_REGEX.exec(label);
                    }
                    const replaceDoubleEscapes = (str) => str.replace(/&amp;&amp;/g, '&amp;');
                    if (escMatch) {
                        this.label.append(_common_strings_js__WEBPACK_IMPORTED_MODULE_16__/* .ltrim */ .j3(replaceDoubleEscapes(label.substr(0, escMatch.index)), ' '), (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('u', { 'aria-hidden': 'true' }, escMatch[3]), _common_strings_js__WEBPACK_IMPORTED_MODULE_16__/* .rtrim */ .oL(replaceDoubleEscapes(label.substr(escMatch.index + escMatch[0].length)), ' '));
                    }
                    else {
                        this.label.innerText = replaceDoubleEscapes(label).trim();
                    }
                    (_a = this.item) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-keyshortcuts', (!!matches[1] ? matches[1] : matches[3]).toLocaleLowerCase());
                }
                else {
                    this.label.innerText = label.replace(/&&/g, '&').trim();
                }
            }
        }
    }
    updateTooltip() {
        // menus should function like native menus and they do not have tooltips
    }
    updateClass() {
        if (this.cssClass && this.item) {
            this.item.classList.remove(...this.cssClass.split(' '));
        }
        if (this.options.icon && this.label) {
            this.cssClass = this.action.class || '';
            this.label.classList.add('icon');
            if (this.cssClass) {
                this.label.classList.add(...this.cssClass.split(' '));
            }
            this.updateEnabled();
        }
        else if (this.label) {
            this.label.classList.remove('icon');
        }
    }
    updateEnabled() {
        if (this.action.enabled) {
            if (this.element) {
                this.element.classList.remove('disabled');
                this.element.removeAttribute('aria-disabled');
            }
            if (this.item) {
                this.item.classList.remove('disabled');
                this.item.removeAttribute('aria-disabled');
                this.item.tabIndex = 0;
            }
        }
        else {
            if (this.element) {
                this.element.classList.add('disabled');
                this.element.setAttribute('aria-disabled', 'true');
            }
            if (this.item) {
                this.item.classList.add('disabled');
                this.item.setAttribute('aria-disabled', 'true');
            }
        }
    }
    updateChecked() {
        if (!this.item) {
            return;
        }
        const checked = this.action.checked;
        this.item.classList.toggle('checked', !!checked);
        if (checked !== undefined) {
            this.item.setAttribute('role', 'menuitemcheckbox');
            this.item.setAttribute('aria-checked', checked ? 'true' : 'false');
        }
        else {
            this.item.setAttribute('role', 'menuitem');
            this.item.setAttribute('aria-checked', '');
        }
    }
    getMnemonic() {
        return this.mnemonic;
    }
    applyStyle() {
        const isSelected = this.element && this.element.classList.contains('focused');
        const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
        const bgColor = isSelected && this.menuStyle.selectionBackgroundColor ? this.menuStyle.selectionBackgroundColor : undefined;
        const outline = isSelected && this.menuStyle.selectionBorderColor ? `1px solid ${this.menuStyle.selectionBorderColor}` : '';
        const outlineOffset = isSelected && this.menuStyle.selectionBorderColor ? `-1px` : '';
        if (this.item) {
            this.item.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
            this.item.style.backgroundColor = bgColor !== null && bgColor !== void 0 ? bgColor : '';
            this.item.style.outline = outline;
            this.item.style.outlineOffset = outlineOffset;
        }
        if (this.check) {
            this.check.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
        }
    }
}
class SubmenuMenuActionViewItem extends BaseMenuActionViewItem {
    constructor(action, submenuActions, parentData, submenuOptions, menuStyles) {
        super(action, action, submenuOptions, menuStyles);
        this.submenuActions = submenuActions;
        this.parentData = parentData;
        this.submenuOptions = submenuOptions;
        this.mysubmenu = null;
        this.submenuDisposables = this._register(new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_14__/* .DisposableStore */ .SL());
        this.mouseOver = false;
        this.expandDirection = submenuOptions && submenuOptions.expandDirection !== undefined ? submenuOptions.expandDirection : Direction.Right;
        this.showScheduler = new _common_async_js__WEBPACK_IMPORTED_MODULE_10__/* .RunOnceScheduler */ .pY(() => {
            if (this.mouseOver) {
                this.cleanupExistingSubmenu(false);
                this.createSubmenu(false);
            }
        }, 250);
        this.hideScheduler = new _common_async_js__WEBPACK_IMPORTED_MODULE_10__/* .RunOnceScheduler */ .pY(() => {
            if (this.element && (!(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isAncestor */ .jg)((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .vY)(), this.element) && this.parentData.submenu === this.mysubmenu)) {
                this.parentData.parent.focus(false);
                this.cleanupExistingSubmenu(true);
            }
        }, 750);
    }
    render(container) {
        super.render(container);
        if (!this.element) {
            return;
        }
        if (this.item) {
            this.item.classList.add('monaco-submenu-item');
            this.item.tabIndex = 0;
            this.item.setAttribute('aria-haspopup', 'true');
            this.updateAriaExpanded('false');
            this.submenuIndicator = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.item, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('span.submenu-indicator' + _common_themables_js__WEBPACK_IMPORTED_MODULE_12__/* .ThemeIcon */ .k.asCSSSelector(_common_codicons_js__WEBPACK_IMPORTED_MODULE_11__/* .Codicon */ .l.menuSubmenu)));
            this.submenuIndicator.setAttribute('aria-hidden', 'true');
        }
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_UP, e => {
            const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
            if (event.equals(17 /* KeyCode.RightArrow */) || event.equals(3 /* KeyCode.Enter */)) {
                _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                this.createSubmenu(true);
            }
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_DOWN, e => {
            const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
            if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .vY)() === this.item) {
                if (event.equals(17 /* KeyCode.RightArrow */) || event.equals(3 /* KeyCode.Enter */)) {
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                }
            }
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_OVER, e => {
            if (!this.mouseOver) {
                this.mouseOver = true;
                this.showScheduler.schedule();
            }
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.MOUSE_LEAVE, e => {
            this.mouseOver = false;
        }));
        this._register((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.element, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.FOCUS_OUT, e => {
            if (this.element && !(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .isAncestor */ .jg)((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .getActiveElement */ .vY)(), this.element)) {
                this.hideScheduler.schedule();
            }
        }));
        this._register(this.parentData.parent.onScroll(() => {
            if (this.parentData.submenu === this.mysubmenu) {
                this.parentData.parent.focus(false);
                this.cleanupExistingSubmenu(true);
            }
        }));
    }
    updateEnabled() {
        // override on submenu entry
        // native menus do not observe enablement on sumbenus
        // we mimic that behavior
    }
    onClick(e) {
        // stop clicking from trying to run an action
        _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
        this.cleanupExistingSubmenu(false);
        this.createSubmenu(true);
    }
    cleanupExistingSubmenu(force) {
        if (this.parentData.submenu && (force || (this.parentData.submenu !== this.mysubmenu))) {
            // disposal may throw if the submenu has already been removed
            try {
                this.parentData.submenu.dispose();
            }
            catch (_a) { }
            this.parentData.submenu = undefined;
            this.updateAriaExpanded('false');
            if (this.submenuContainer) {
                this.submenuDisposables.clear();
                this.submenuContainer = undefined;
            }
        }
    }
    calculateSubmenuMenuLayout(windowDimensions, submenu, entry, expandDirection) {
        const ret = { top: 0, left: 0 };
        // Start with horizontal
        ret.left = (0,_contextview_contextview_js__WEBPACK_IMPORTED_MODULE_7__/* .layout */ .bK)(windowDimensions.width, submenu.width, { position: expandDirection === Direction.Right ? 0 /* LayoutAnchorPosition.Before */ : 1 /* LayoutAnchorPosition.After */, offset: entry.left, size: entry.width });
        // We don't have enough room to layout the menu fully, so we are overlapping the menu
        if (ret.left >= entry.left && ret.left < entry.left + entry.width) {
            if (entry.left + 10 + submenu.width <= windowDimensions.width) {
                ret.left = entry.left + 10;
            }
            entry.top += 10;
            entry.height = 0;
        }
        // Now that we have a horizontal position, try layout vertically
        ret.top = (0,_contextview_contextview_js__WEBPACK_IMPORTED_MODULE_7__/* .layout */ .bK)(windowDimensions.height, submenu.height, { position: 0 /* LayoutAnchorPosition.Before */, offset: entry.top, size: 0 });
        // We didn't have enough room below, but we did above, so we shift down to align the menu
        if (ret.top + submenu.height === entry.top && ret.top + entry.height + submenu.height <= windowDimensions.height) {
            ret.top += entry.height;
        }
        return ret;
    }
    createSubmenu(selectFirstItem = true) {
        if (!this.element) {
            return;
        }
        if (!this.parentData.submenu) {
            this.updateAriaExpanded('true');
            this.submenuContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .append */ .R3)(this.element, (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.$)('div.monaco-submenu'));
            this.submenuContainer.classList.add('menubar-menu-items-holder', 'context-view');
            // Set the top value of the menu container before construction
            // This allows the menu constructor to calculate the proper max height
            const computedStyles = getComputedStyle(this.parentData.parent.domNode);
            const paddingTop = parseFloat(computedStyles.paddingTop || '0') || 0;
            // this.submenuContainer.style.top = `${this.element.offsetTop - this.parentData.parent.scrollOffset - paddingTop}px`;
            this.submenuContainer.style.zIndex = '1';
            this.submenuContainer.style.position = 'fixed';
            this.submenuContainer.style.top = '0';
            this.submenuContainer.style.left = '0';
            this.parentData.submenu = new Menu(this.submenuContainer, this.submenuActions.length ? this.submenuActions : [new _common_actions_js__WEBPACK_IMPORTED_MODULE_9__/* .EmptySubmenuAction */ .eZ()], this.submenuOptions, this.menuStyle);
            // layout submenu
            const entryBox = this.element.getBoundingClientRect();
            const entryBoxUpdated = {
                top: entryBox.top - paddingTop,
                left: entryBox.left,
                height: entryBox.height + 2 * paddingTop,
                width: entryBox.width
            };
            const viewBox = this.submenuContainer.getBoundingClientRect();
            const { top, left } = this.calculateSubmenuMenuLayout(new _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .Dimension */ .Ro(window.innerWidth, window.innerHeight), _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .Dimension */ .Ro.lift(viewBox), entryBoxUpdated, this.expandDirection);
            // subtract offsets caused by transform parent
            this.submenuContainer.style.left = `${left - viewBox.left}px`;
            this.submenuContainer.style.top = `${top - viewBox.top}px`;
            this.submenuDisposables.add((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.submenuContainer, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_UP, e => {
                const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
                if (event.equals(15 /* KeyCode.LeftArrow */)) {
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                    this.parentData.parent.focus();
                    this.cleanupExistingSubmenu(true);
                }
            }));
            this.submenuDisposables.add((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__/* .addDisposableListener */ .nm)(this.submenuContainer, _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventType */ .tw.KEY_DOWN, e => {
                const event = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_3__/* .StandardKeyboardEvent */ .y(e);
                if (event.equals(15 /* KeyCode.LeftArrow */)) {
                    _dom_js__WEBPACK_IMPORTED_MODULE_2__/* .EventHelper */ .zB.stop(e, true);
                }
            }));
            this.submenuDisposables.add(this.parentData.submenu.onDidCancel(() => {
                this.parentData.parent.focus();
                this.cleanupExistingSubmenu(true);
            }));
            this.parentData.submenu.focus(selectFirstItem);
            this.mysubmenu = this.parentData.submenu;
        }
        else {
            this.parentData.submenu.focus(false);
        }
    }
    updateAriaExpanded(value) {
        var _a;
        if (this.item) {
            (_a = this.item) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', value);
        }
    }
    applyStyle() {
        super.applyStyle();
        const isSelected = this.element && this.element.classList.contains('focused');
        const fgColor = isSelected && this.menuStyle.selectionForegroundColor ? this.menuStyle.selectionForegroundColor : this.menuStyle.foregroundColor;
        if (this.submenuIndicator) {
            this.submenuIndicator.style.color = fgColor !== null && fgColor !== void 0 ? fgColor : '';
        }
    }
    dispose() {
        super.dispose();
        this.hideScheduler.dispose();
        if (this.mysubmenu) {
            this.mysubmenu.dispose();
            this.mysubmenu = null;
        }
        if (this.submenuContainer) {
            this.submenuContainer = undefined;
        }
    }
}
class MenuSeparatorActionViewItem extends _actionbar_actionViewItems_js__WEBPACK_IMPORTED_MODULE_6__/* .ActionViewItem */ .gU {
    constructor(context, action, options, menuStyles) {
        super(context, action, options);
        this.menuStyles = menuStyles;
    }
    render(container) {
        super.render(container);
        if (this.label) {
            this.label.style.borderBottomColor = this.menuStyles.separatorColor ? `${this.menuStyles.separatorColor}` : '';
        }
    }
}
function cleanMnemonic(label) {
    const regex = MENU_MNEMONIC_REGEX;
    const matches = regex.exec(label);
    if (!matches) {
        return label;
    }
    const mnemonicInText = !matches[1];
    return label.replace(regex, mnemonicInText ? '$2$3' : '').trim();
}
function formatRule(c) {
    const fontCharacter = (0,_common_codicons_js__WEBPACK_IMPORTED_MODULE_11__/* .getCodiconFontCharacters */ .u)()[c.id];
    return `.codicon-${c.id}:before { content: '\\${fontCharacter.toString(16)}'; }`;
}
function getMenuWidgetCSS(style, isForShadowDom) {
    let result = /* css */ `
.monaco-menu {
	font-size: 13px;
	border-radius: 5px;
	min-width: 160px;
}

${formatRule(_common_codicons_js__WEBPACK_IMPORTED_MODULE_11__/* .Codicon */ .l.menuSelection)}
${formatRule(_common_codicons_js__WEBPACK_IMPORTED_MODULE_11__/* .Codicon */ .l.menuSubmenu)}

.monaco-menu .monaco-action-bar {
	text-align: right;
	overflow: hidden;
	white-space: nowrap;
}

.monaco-menu .monaco-action-bar .actions-container {
	display: flex;
	margin: 0 auto;
	padding: 0;
	width: 100%;
	justify-content: flex-end;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: inline-block;
}

.monaco-menu .monaco-action-bar.reverse .actions-container {
	flex-direction: row-reverse;
}

.monaco-menu .monaco-action-bar .action-item {
	cursor: pointer;
	display: inline-block;
	transition: transform 50ms ease;
	position: relative;  /* DO NOT REMOVE - this is the key to preventing the ghosting icon bug in Chrome 42 */
}

.monaco-menu .monaco-action-bar .action-item.disabled {
	cursor: default;
}

.monaco-menu .monaco-action-bar.animated .action-item.active {
	transform: scale(1.272019649, 1.272019649); /* 1.272019649 = √φ */
}

.monaco-menu .monaco-action-bar .action-item .icon,
.monaco-menu .monaco-action-bar .action-item .codicon {
	display: inline-block;
}

.monaco-menu .monaco-action-bar .action-item .codicon {
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar .action-label {
	font-size: 11px;
	margin-right: 4px;
}

.monaco-menu .monaco-action-bar .action-item.disabled .action-label,
.monaco-menu .monaco-action-bar .action-item.disabled .action-label:hover {
	color: var(--vscode-disabledForeground);
}

/* Vertical actions */

.monaco-menu .monaco-action-bar.vertical {
	text-align: left;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	display: block;
	border-bottom: 1px solid var(--vscode-menu-separatorBackground);
	padding-top: 1px;
	padding: 30px;
}

.monaco-menu .secondary-actions .monaco-action-bar .action-label {
	margin-left: 6px;
}

/* Action Items */
.monaco-menu .monaco-action-bar .action-item.select-container {
	overflow: hidden; /* somehow the dropdown overflows its container, we prevent it here to not push */
	flex: 1;
	max-width: 170px;
	min-width: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
}

.monaco-menu .monaco-action-bar.vertical {
	margin-left: 0;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .actions-container {
	display: block;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	padding: 0;
	transform: none;
	display: flex;
}

.monaco-menu .monaco-action-bar.vertical .action-item.active {
	transform: none;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	flex: 1 1 auto;
	display: flex;
	height: 2em;
	align-items: center;
	position: relative;
	margin: 0 4px;
	border-radius: 4px;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item:hover .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-menu-item:focus .keybinding {
	opacity: unset;
}

.monaco-menu .monaco-action-bar.vertical .action-label {
	flex: 1 1 auto;
	text-decoration: none;
	padding: 0 1em;
	background: none;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .keybinding,
.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	display: inline-block;
	flex: 2 1 auto;
	padding: 0 1em;
	text-align: right;
	font-size: 12px;
	line-height: 1;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon {
	font-size: 16px !important;
	display: flex;
	align-items: center;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator.codicon::before {
	margin-left: auto;
	margin-right: -20px;
}

.monaco-menu .monaco-action-bar.vertical .action-item.disabled .keybinding,
.monaco-menu .monaco-action-bar.vertical .action-item.disabled .submenu-indicator {
	opacity: 0.4;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator) {
	display: inline-block;
	box-sizing: border-box;
	margin: 0;
}

.monaco-menu .monaco-action-bar.vertical .action-item {
	position: static;
	overflow: visible;
}

.monaco-menu .monaco-action-bar.vertical .action-item .monaco-submenu {
	position: absolute;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	width: 100%;
	height: 0px !important;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator.text {
	padding: 0.7em 1em 0.1em 1em;
	font-weight: bold;
	opacity: 1;
}

.monaco-menu .monaco-action-bar.vertical .action-label:hover {
	color: inherit;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	position: absolute;
	visibility: hidden;
	width: 1em;
	height: 100%;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item.checked .menu-item-check {
	visibility: visible;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Context Menu */

.context-view.monaco-menu-container {
	outline: 0;
	border: none;
	animation: fadeIn 0.083s linear;
	-webkit-app-region: no-drag;
}

.context-view.monaco-menu-container :focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical:focus,
.context-view.monaco-menu-container .monaco-action-bar.vertical :focus {
	outline: 0;
}

.hc-black .context-view.monaco-menu-container,
.hc-light .context-view.monaco-menu-container,
:host-context(.hc-black) .context-view.monaco-menu-container,
:host-context(.hc-light) .context-view.monaco-menu-container {
	box-shadow: none;
}

.hc-black .monaco-menu .monaco-action-bar.vertical .action-item.focused,
.hc-light .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-black) .monaco-menu .monaco-action-bar.vertical .action-item.focused,
:host-context(.hc-light) .monaco-menu .monaco-action-bar.vertical .action-item.focused {
	background: none;
}

/* Vertical Action Bar Styles */

.monaco-menu .monaco-action-bar.vertical {
	padding: 4px 0;
}

.monaco-menu .monaco-action-bar.vertical .action-menu-item {
	height: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label:not(.separator),
.monaco-menu .monaco-action-bar.vertical .keybinding {
	font-size: inherit;
	padding: 0 2em;
}

.monaco-menu .monaco-action-bar.vertical .menu-item-check {
	font-size: inherit;
	width: 2em;
}

.monaco-menu .monaco-action-bar.vertical .action-label.separator {
	font-size: inherit;
	margin: 5px 0 !important;
	padding: 0;
	border-radius: 0;
}

.linux .monaco-menu .monaco-action-bar.vertical .action-label.separator,
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .action-label.separator {
	margin-left: 0;
	margin-right: 0;
}

.monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	font-size: 60%;
	padding: 0 1.8em;
}

.linux .monaco-menu .monaco-action-bar.vertical .submenu-indicator {
:host-context(.linux) .monaco-menu .monaco-action-bar.vertical .submenu-indicator {
	height: 100%;
	mask-size: 10px 10px;
	-webkit-mask-size: 10px 10px;
}

.monaco-menu .action-item {
	cursor: default;
}`;
    if (isForShadowDom) {
        // Only define scrollbar styles when used inside shadow dom,
        // otherwise leave their styling to the global workbench styling.
        result += `
			/* Arrows */
			.monaco-scrollable-element > .scrollbar > .scra {
				cursor: pointer;
				font-size: 11px !important;
			}

			.monaco-scrollable-element > .visible {
				opacity: 1;

				/* Background rule added for IE9 - to allow clicks on dom node */
				background:rgba(0,0,0,0);

				transition: opacity 100ms linear;
			}
			.monaco-scrollable-element > .invisible {
				opacity: 0;
				pointer-events: none;
			}
			.monaco-scrollable-element > .invisible.fade {
				transition: opacity 800ms linear;
			}

			/* Scrollable Content Inset Shadow */
			.monaco-scrollable-element > .shadow {
				position: absolute;
				display: none;
			}
			.monaco-scrollable-element > .shadow.top {
				display: block;
				top: 0;
				left: 3px;
				height: 3px;
				width: 100%;
			}
			.monaco-scrollable-element > .shadow.left {
				display: block;
				top: 3px;
				left: 0;
				height: 100%;
				width: 3px;
			}
			.monaco-scrollable-element > .shadow.top-left-corner {
				display: block;
				top: 0;
				left: 0;
				height: 3px;
				width: 3px;
			}
		`;
        // Scrollbars
        const scrollbarShadowColor = style.scrollbarShadow;
        if (scrollbarShadowColor) {
            result += `
				.monaco-scrollable-element > .shadow.top {
					box-shadow: ${scrollbarShadowColor} 0 6px 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.left {
					box-shadow: ${scrollbarShadowColor} 6px 0 6px -6px inset;
				}

				.monaco-scrollable-element > .shadow.top.left {
					box-shadow: ${scrollbarShadowColor} 6px 6px 6px -6px inset;
				}
			`;
        }
        const scrollbarSliderBackgroundColor = style.scrollbarSliderBackground;
        if (scrollbarSliderBackgroundColor) {
            result += `
				.monaco-scrollable-element > .scrollbar > .slider {
					background: ${scrollbarSliderBackgroundColor};
				}
			`;
        }
        const scrollbarSliderHoverBackgroundColor = style.scrollbarSliderHoverBackground;
        if (scrollbarSliderHoverBackgroundColor) {
            result += `
				.monaco-scrollable-element > .scrollbar > .slider:hover {
					background: ${scrollbarSliderHoverBackgroundColor};
				}
			`;
        }
        const scrollbarSliderActiveBackgroundColor = style.scrollbarSliderActiveBackground;
        if (scrollbarSliderActiveBackgroundColor) {
            result += `
				.monaco-scrollable-element > .scrollbar > .slider.active {
					background: ${scrollbarSliderActiveBackgroundColor};
				}
			`;
        }
    }
    return result;
}


/***/ }),

/***/ 67038:
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
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45900);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_28_webpack_5_88_2_node_modules_postcss_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);