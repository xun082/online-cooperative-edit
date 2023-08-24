"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-ba75db03"],{

/***/ 58371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-table {\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;\n\twhite-space: nowrap;\n\toverflow: hidden;\n}\n\n.monaco-table > .monaco-split-view2 {\n\tborder-bottom: 1px solid transparent;\n}\n\n.monaco-table > .monaco-list {\n\tflex: 1;\n}\n\n.monaco-table-tr {\n\tdisplay: flex;\n\theight: 100%;\n}\n\n.monaco-table-th {\n\twidth: 100%;\n\theight: 100%;\n\tfont-weight: bold;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n\n.monaco-table-th,\n.monaco-table-td {\n\tbox-sizing: border-box;\n\tflex-shrink: 0;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n\n.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: calc(var(--vscode-sash-size) / 2);\n\twidth: 0;\n\tborder-left: 1px solid transparent;\n}\n\n.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,\n.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {\n\ttransition: border-color 0.2s ease-out;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 20859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-custom-toggle {\n\tmargin-left: 2px;\n\tfloat: left;\n\tcursor: pointer;\n\toverflow: hidden;\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 3px;\n\tborder: 1px solid transparent;\n\tpadding: 1px;\n\tbox-sizing:\tborder-box;\n\tuser-select: none;\n\t-webkit-user-select: none;\n}\n\n.monaco-custom-toggle:hover {\n\tbackground-color: var(--vscode-inputOption-hoverBackground);\n}\n\n.hc-black .monaco-custom-toggle:hover,\n.hc-light .monaco-custom-toggle:hover {\n\tborder: 1px dashed var(--vscode-focusBorder);\n}\n\n.hc-black .monaco-custom-toggle,\n.hc-light .monaco-custom-toggle {\n\tbackground: none;\n}\n\n.hc-black .monaco-custom-toggle:hover,\n.hc-light .monaco-custom-toggle:hover {\n\tbackground: none;\n}\n\n.monaco-custom-toggle.monaco-checkbox {\n\theight: 18px;\n\twidth: 18px;\n\tborder: 1px solid transparent;\n\tborder-radius: 3px;\n\tmargin-right: 9px;\n\tmargin-left: 0px;\n\tpadding: 0px;\n\topacity: 1;\n\tbackground-size: 16px !important;\n}\n\n/* hide check when unchecked */\n.monaco-custom-toggle.monaco-checkbox:not(.checked)::before {\n\tvisibility: hidden;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 55678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-toolbar {\n\theight: 100%;\n}\n\n.monaco-toolbar .toolbar-toggle-more {\n\tdisplay: inline-block;\n\tpadding: 0;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 96342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-tl-row {\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tposition: relative;\n}\n\n.monaco-tl-row.disabled {\n\tcursor: default;\n}\n.monaco-tl-indent {\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 16px;\n\tpointer-events: none;\n}\n\n.hide-arrows .monaco-tl-indent {\n\tleft: 12px;\n}\n\n.monaco-tl-indent > .indent-guide {\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\theight: 100%;\n\tborder-left: 1px solid transparent;\n}\n\n.monaco-workbench:not(.reduce-motion) .monaco-tl-indent > .indent-guide {\n\ttransition: border-color 0.1s linear;\n}\n\n.monaco-tl-twistie,\n.monaco-tl-contents {\n\theight: 100%;\n}\n\n.monaco-tl-twistie {\n\tfont-size: 10px;\n\ttext-align: right;\n\tpadding-right: 6px;\n\tflex-shrink: 0;\n\twidth: 16px;\n\tdisplay: flex !important;\n\talign-items: center;\n\tjustify-content: center;\n\ttransform: translateX(3px);\n}\n\n.monaco-tl-contents {\n\tflex: 1;\n\toverflow: hidden;\n}\n\n.monaco-tl-twistie::before {\n\tborder-radius: 20px;\n}\n\n.monaco-tl-twistie.collapsed::before {\n\ttransform: rotate(-90deg);\n}\n\n.monaco-tl-twistie.codicon-tree-item-loading::before {\n\t/* Use steps to throttle FPS to reduce CPU usage */\n\tanimation: codicon-spin 1.25s steps(30) infinite;\n}\n\n.monaco-tree-type-filter {\n\tposition: absolute;\n\ttop: 0;\n\tdisplay: flex;\n\tpadding: 3px;\n\tmax-width: 200px;\n\tz-index: 100;\n\tmargin: 0 6px;\n\tborder: 1px solid var(--vscode-widget-border);\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n\n.monaco-workbench:not(.reduce-motion) .monaco-tree-type-filter {\n\ttransition: top 0.3s;\n}\n\n.monaco-tree-type-filter.disabled {\n\ttop: -40px !important;\n}\n\n.monaco-tree-type-filter-grab {\n\tdisplay: flex !important;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: grab;\n\tmargin-right: 2px;\n}\n\n.monaco-tree-type-filter-grab.grabbing {\n\tcursor: grabbing;\n}\n\n.monaco-tree-type-filter-input {\n\tflex: 1;\n}\n\n.monaco-tree-type-filter-input .monaco-inputbox {\n\theight: 23px;\n}\n\n.monaco-tree-type-filter-input .monaco-inputbox > .ibwrapper > .input,\n.monaco-tree-type-filter-input .monaco-inputbox > .ibwrapper > .mirror {\n\tpadding: 2px 4px;\n}\n\n.monaco-tree-type-filter-input .monaco-findInput > .controls {\n\ttop: 2px;\n}\n\n.monaco-tree-type-filter-actionbar {\n\tmargin-left: 4px;\n}\n\n.monaco-tree-type-filter-actionbar .monaco-action-bar .action-label {\n\tpadding: 2px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 32162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  i: function() { return /* binding */ Table; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js + 2 modules
var listWidget = __webpack_require__(54530);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/splitview/splitview.js + 1 modules
var splitview = __webpack_require__(32607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/table/table.css
var table = __webpack_require__(58371);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/table/table.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(table/* default */.Z, options);




       /* harmony default export */ var table_table = (table/* default */.Z && table/* default */.Z.locals ? table/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/table/tableWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class TableListRenderer {
    constructor(columns, renderers, getColumnSize) {
        this.columns = columns;
        this.getColumnSize = getColumnSize;
        this.templateId = TableListRenderer.TemplateId;
        this.renderedTemplates = new Set();
        const rendererMap = new Map(renderers.map(r => [r.templateId, r]));
        this.renderers = [];
        for (const column of columns) {
            const renderer = rendererMap.get(column.templateId);
            if (!renderer) {
                throw new Error(`Table cell renderer for template id ${column.templateId} not found.`);
            }
            this.renderers.push(renderer);
        }
    }
    renderTemplate(container) {
        const rowContainer = (0,dom/* append */.R3)(container, (0,dom.$)('.monaco-table-tr'));
        const cellContainers = [];
        const cellTemplateData = [];
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            const cellContainer = (0,dom/* append */.R3)(rowContainer, (0,dom.$)('.monaco-table-td', { 'data-col-index': i }));
            cellContainer.style.width = `${this.getColumnSize(i)}px`;
            cellContainers.push(cellContainer);
            cellTemplateData.push(renderer.renderTemplate(cellContainer));
        }
        const result = { container, cellContainers, cellTemplateData };
        this.renderedTemplates.add(result);
        return result;
    }
    renderElement(element, index, templateData, height) {
        for (let i = 0; i < this.columns.length; i++) {
            const column = this.columns[i];
            const cell = column.project(element);
            const renderer = this.renderers[i];
            renderer.renderElement(cell, index, templateData.cellTemplateData[i], height);
        }
    }
    disposeElement(element, index, templateData, height) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            if (renderer.disposeElement) {
                const column = this.columns[i];
                const cell = column.project(element);
                renderer.disposeElement(cell, index, templateData.cellTemplateData[i], height);
            }
        }
    }
    disposeTemplate(templateData) {
        for (let i = 0; i < this.columns.length; i++) {
            const renderer = this.renderers[i];
            renderer.disposeTemplate(templateData.cellTemplateData[i]);
        }
        (0,dom/* clearNode */.PO)(templateData.container);
        this.renderedTemplates.delete(templateData);
    }
    layoutColumn(index, size) {
        for (const { cellContainers } of this.renderedTemplates) {
            cellContainers[index].style.width = `${size}px`;
        }
    }
}
TableListRenderer.TemplateId = 'row';
function asListVirtualDelegate(delegate) {
    return {
        getHeight(row) { return delegate.getHeight(row); },
        getTemplateId() { return TableListRenderer.TemplateId; },
    };
}
class ColumnHeader {
    get minimumSize() { var _a; return (_a = this.column.minimumWidth) !== null && _a !== void 0 ? _a : 120; }
    get maximumSize() { var _a; return (_a = this.column.maximumWidth) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY; }
    get onDidChange() { var _a; return (_a = this.column.onDidChangeWidthConstraints) !== null && _a !== void 0 ? _a : common_event/* Event */.ju.None; }
    constructor(column, index) {
        this.column = column;
        this.index = index;
        this._onDidLayout = new common_event/* Emitter */.Q5();
        this.onDidLayout = this._onDidLayout.event;
        this.element = (0,dom.$)('.monaco-table-th', { 'data-col-index': index, title: column.tooltip }, column.label);
    }
    layout(size) {
        this._onDidLayout.fire([this.index, size]);
    }
}
class Table {
    get onDidChangeFocus() { return this.list.onDidChangeFocus; }
    get onDidChangeSelection() { return this.list.onDidChangeSelection; }
    get onDidScroll() { return this.list.onDidScroll; }
    get onMouseDblClick() { return this.list.onMouseDblClick; }
    get onPointer() { return this.list.onPointer; }
    get onDidFocus() { return this.list.onDidFocus; }
    get scrollTop() { return this.list.scrollTop; }
    set scrollTop(scrollTop) { this.list.scrollTop = scrollTop; }
    get scrollHeight() { return this.list.scrollHeight; }
    get renderHeight() { return this.list.renderHeight; }
    get onDidDispose() { return this.list.onDidDispose; }
    constructor(user, container, virtualDelegate, columns, renderers, _options) {
        this.virtualDelegate = virtualDelegate;
        this.domId = `table_id_${++Table.InstanceCount}`;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.cachedWidth = 0;
        this.cachedHeight = 0;
        this.domNode = (0,dom/* append */.R3)(container, (0,dom.$)(`.monaco-table.${this.domId}`));
        const headers = columns.map((c, i) => new ColumnHeader(c, i));
        const descriptor = {
            size: headers.reduce((a, b) => a + b.column.weight, 0),
            views: headers.map(view => ({ size: view.column.weight, view }))
        };
        this.splitview = this.disposables.add(new splitview/* SplitView */.z(this.domNode, {
            orientation: 1 /* Orientation.HORIZONTAL */,
            scrollbarVisibility: 2 /* ScrollbarVisibility.Hidden */,
            getSashOrthogonalSize: () => this.cachedHeight,
            descriptor
        }));
        this.splitview.el.style.height = `${virtualDelegate.headerRowHeight}px`;
        this.splitview.el.style.lineHeight = `${virtualDelegate.headerRowHeight}px`;
        const renderer = new TableListRenderer(columns, renderers, i => this.splitview.getViewSize(i));
        this.list = this.disposables.add(new listWidget/* List */.aV(user, this.domNode, asListVirtualDelegate(virtualDelegate), [renderer], _options));
        common_event/* Event */.ju.any(...headers.map(h => h.onDidLayout))(([index, size]) => renderer.layoutColumn(index, size), null, this.disposables);
        this.splitview.onDidSashReset(index => {
            const totalWeight = columns.reduce((r, c) => r + c.weight, 0);
            const size = columns[index].weight / totalWeight * this.cachedWidth;
            this.splitview.resizeView(index, size);
        }, null, this.disposables);
        this.styleElement = (0,dom/* createStyleSheet */.dS)(this.domNode);
        this.style(listWidget/* unthemedListStyles */.uZ);
    }
    updateOptions(options) {
        this.list.updateOptions(options);
    }
    splice(start, deleteCount, elements = []) {
        this.list.splice(start, deleteCount, elements);
    }
    getHTMLElement() {
        return this.domNode;
    }
    style(styles) {
        const content = [];
        content.push(`.monaco-table.${this.domId} > .monaco-split-view2 .monaco-sash.vertical::before {
			top: ${this.virtualDelegate.headerRowHeight + 1}px;
			height: calc(100% - ${this.virtualDelegate.headerRowHeight}px);
		}`);
        this.styleElement.textContent = content.join('\n');
        this.list.style(styles);
    }
    getSelectedElements() {
        return this.list.getSelectedElements();
    }
    getSelection() {
        return this.list.getSelection();
    }
    getFocus() {
        return this.list.getFocus();
    }
    dispose() {
        this.disposables.dispose();
    }
}
Table.InstanceCount = 0;


/***/ }),

/***/ 77152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ Toggle; },
  D: function() { return /* binding */ unthemedToggleStyles; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js
var widget = __webpack_require__(71308);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.css
var toggle = __webpack_require__(20859);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(toggle/* default */.Z, options);




       /* harmony default export */ var toggle_toggle = (toggle/* default */.Z && toggle/* default */.Z.locals ? toggle/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




const unthemedToggleStyles = {
    inputActiveOptionBorder: '#007ACC00',
    inputActiveOptionForeground: '#FFFFFF',
    inputActiveOptionBackground: '#0E639C50'
};
class Toggle extends widget/* Widget */.$ {
    constructor(opts) {
        super();
        this._onChange = this._register(new common_event/* Emitter */.Q5());
        this.onChange = this._onChange.event;
        this._onKeyDown = this._register(new common_event/* Emitter */.Q5());
        this.onKeyDown = this._onKeyDown.event;
        this._opts = opts;
        this._checked = this._opts.isChecked;
        const classes = ['monaco-custom-toggle'];
        if (this._opts.icon) {
            this._icon = this._opts.icon;
            classes.push(...themables/* ThemeIcon */.k.asClassNameArray(this._icon));
        }
        if (this._opts.actionClassName) {
            classes.push(...this._opts.actionClassName.split(' '));
        }
        if (this._checked) {
            classes.push('checked');
        }
        this.domNode = document.createElement('div');
        this.domNode.title = this._opts.title;
        this.domNode.classList.add(...classes);
        if (!this._opts.notFocusable) {
            this.domNode.tabIndex = 0;
        }
        this.domNode.setAttribute('role', 'checkbox');
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.setAttribute('aria-label', this._opts.title);
        this.applyStyles();
        this.onclick(this.domNode, (ev) => {
            if (this.enabled) {
                this.checked = !this._checked;
                this._onChange.fire(false);
                ev.preventDefault();
            }
        });
        this._register(this.ignoreGesture(this.domNode));
        this.onkeydown(this.domNode, (keyboardEvent) => {
            if (keyboardEvent.keyCode === 10 /* KeyCode.Space */ || keyboardEvent.keyCode === 3 /* KeyCode.Enter */) {
                this.checked = !this._checked;
                this._onChange.fire(true);
                keyboardEvent.preventDefault();
                keyboardEvent.stopPropagation();
                return;
            }
            this._onKeyDown.fire(keyboardEvent);
        });
    }
    get enabled() {
        return this.domNode.getAttribute('aria-disabled') !== 'true';
    }
    focus() {
        this.domNode.focus();
    }
    get checked() {
        return this._checked;
    }
    set checked(newIsChecked) {
        this._checked = newIsChecked;
        this.domNode.setAttribute('aria-checked', String(this._checked));
        this.domNode.classList.toggle('checked', this._checked);
        this.applyStyles();
    }
    width() {
        return 2 /*margin left*/ + 2 /*border*/ + 2 /*padding*/ + 16 /* icon width */;
    }
    applyStyles() {
        if (this.domNode) {
            this.domNode.style.borderColor = (this._checked && this._opts.inputActiveOptionBorder) || '';
            this.domNode.style.color = (this._checked && this._opts.inputActiveOptionForeground) || 'inherit';
            this.domNode.style.backgroundColor = (this._checked && this._opts.inputActiveOptionBackground) || '';
        }
    }
    enable() {
        this.domNode.setAttribute('aria-disabled', String(false));
    }
    disable() {
        this.domNode.setAttribute('aria-disabled', String(true));
    }
}


/***/ }),

/***/ 53807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: function() { return /* binding */ ToolBar; }
});

// UNUSED EXPORTS: ToggleMenuAction

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(31768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/dropdown/dropdownActionViewItem.js + 2 modules
var dropdownActionViewItem = __webpack_require__(90479);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var actions = __webpack_require__(25541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toolbar/toolbar.css
var toolbar = __webpack_require__(55678);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toolbar/toolbar.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(toolbar/* default */.Z, options);




       /* harmony default export */ var toolbar_toolbar = (toolbar/* default */.Z && toolbar/* default */.Z.locals ? toolbar/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toolbar/toolbar.js
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










/**
 * A widget that combines an action bar for primary actions and a dropdown for secondary actions.
 */
class ToolBar extends lifecycle/* Disposable */.JT {
    constructor(container, contextMenuProvider, options = { orientation: 0 /* ActionsOrientation.HORIZONTAL */ }) {
        super();
        this.submenuActionViewItems = [];
        this.hasSecondaryActions = false;
        this._onDidChangeDropdownVisibility = this._register(new common_event/* EventMultiplexer */.z5());
        this.onDidChangeDropdownVisibility = this._onDidChangeDropdownVisibility.event;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.options = options;
        this.lookupKeybindings = typeof this.options.getKeyBinding === 'function';
        this.toggleMenuAction = this._register(new ToggleMenuAction(() => { var _a; return (_a = this.toggleMenuActionViewItem) === null || _a === void 0 ? void 0 : _a.show(); }, options.toggleMenuTitle));
        this.element = document.createElement('div');
        this.element.className = 'monaco-toolbar';
        container.appendChild(this.element);
        this.actionBar = this._register(new actionbar/* ActionBar */.o(this.element, {
            orientation: options.orientation,
            ariaLabel: options.ariaLabel,
            actionRunner: options.actionRunner,
            allowContextMenu: options.allowContextMenu,
            actionViewItemProvider: (action, viewItemOptions) => {
                var _a;
                if (action.id === ToggleMenuAction.ID) {
                    this.toggleMenuActionViewItem = new dropdownActionViewItem/* DropdownMenuActionViewItem */.C(action, action.menuActions, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: themables/* ThemeIcon */.k.asClassNameArray((_a = options.moreIcon) !== null && _a !== void 0 ? _a : codicons/* Codicon */.l.toolBarMore),
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry
                    });
                    this.toggleMenuActionViewItem.setActionContext(this.actionBar.context);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(this.toggleMenuActionViewItem.onDidChangeVisibility));
                    return this.toggleMenuActionViewItem;
                }
                if (options.actionViewItemProvider) {
                    const result = options.actionViewItemProvider(action, viewItemOptions);
                    if (result) {
                        return result;
                    }
                }
                if (action instanceof actions/* SubmenuAction */.wY) {
                    const result = new dropdownActionViewItem/* DropdownMenuActionViewItem */.C(action, action.actions, contextMenuProvider, {
                        actionViewItemProvider: this.options.actionViewItemProvider,
                        actionRunner: this.actionRunner,
                        keybindingProvider: this.options.getKeyBinding,
                        classNames: action.class,
                        anchorAlignmentProvider: this.options.anchorAlignmentProvider,
                        menuAsChild: !!this.options.renderDropdownAsChildElement,
                        skipTelemetry: this.options.skipTelemetry
                    });
                    result.setActionContext(this.actionBar.context);
                    this.submenuActionViewItems.push(result);
                    this.disposables.add(this._onDidChangeDropdownVisibility.add(result.onDidChangeVisibility));
                    return result;
                }
                return undefined;
            }
        }));
    }
    set actionRunner(actionRunner) {
        this.actionBar.actionRunner = actionRunner;
    }
    get actionRunner() {
        return this.actionBar.actionRunner;
    }
    getElement() {
        return this.element;
    }
    getItemAction(indexOrElement) {
        return this.actionBar.getAction(indexOrElement);
    }
    setActions(primaryActions, secondaryActions) {
        this.clear();
        const primaryActionsToSet = primaryActions ? primaryActions.slice(0) : [];
        // Inject additional action to open secondary actions if present
        this.hasSecondaryActions = !!(secondaryActions && secondaryActions.length > 0);
        if (this.hasSecondaryActions && secondaryActions) {
            this.toggleMenuAction.menuActions = secondaryActions.slice(0);
            primaryActionsToSet.push(this.toggleMenuAction);
        }
        primaryActionsToSet.forEach(action => {
            this.actionBar.push(action, { icon: true, label: false, keybinding: this.getKeybindingLabel(action) });
        });
    }
    getKeybindingLabel(action) {
        var _a, _b;
        const key = this.lookupKeybindings ? (_b = (_a = this.options).getKeyBinding) === null || _b === void 0 ? void 0 : _b.call(_a, action) : undefined;
        return (0,types/* withNullAsUndefined */.f6)(key === null || key === void 0 ? void 0 : key.getLabel());
    }
    clear() {
        this.submenuActionViewItems = [];
        this.disposables.clear();
        this.actionBar.clear();
    }
    dispose() {
        this.clear();
        super.dispose();
    }
}
class ToggleMenuAction extends actions/* Action */.aU {
    constructor(toggleDropdownMenu, title) {
        title = title || nls/* localize */.NC('moreActions', "More Actions...");
        super(ToggleMenuAction.ID, title, undefined, true);
        this._menuActions = [];
        this.toggleDropdownMenu = toggleDropdownMenu;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            this.toggleDropdownMenu();
        });
    }
    get menuActions() {
        return this._menuActions;
    }
    set menuActions(actions) {
        this._menuActions = actions;
    }
}
ToggleMenuAction.ID = 'toolbar.toggle.more';


/***/ }),

/***/ 20104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CH: function() { return /* binding */ AbstractTree; },
  cz: function() { return /* binding */ ComposedTreeDelegate; },
  Zd: function() { return /* binding */ TreeFindMatchType; },
  sZ: function() { return /* binding */ TreeFindMode; }
});

// UNUSED EXPORTS: FuzzyToggle, ModeToggle, RenderIndentGuides

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(69808);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js
var keyboardEvent = __webpack_require__(44767);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(31768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput.js
var findInput = __webpack_require__(93568);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/inputbox/inputBox.js + 1 modules
var inputBox = __webpack_require__(88819);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listView.js + 2 modules
var listView = __webpack_require__(50527);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/list/listWidget.js + 2 modules
var listWidget = __webpack_require__(54530);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(77152);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/indexTreeModel.js
var indexTreeModel = __webpack_require__(51488);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/tree.js
var tree = __webpack_require__(54059);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var actions = __webpack_require__(25541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(13113);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(50077);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/collections.js
var collections = __webpack_require__(61023);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(35092);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/numbers.js
var numbers = __webpack_require__(20484);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/media/tree.css
var media_tree = __webpack_require__(96342);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/media/tree.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(media_tree/* default */.Z, options);




       /* harmony default export */ var tree_media_tree = (media_tree/* default */.Z && media_tree/* default */.Z.locals ? media_tree/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree.js
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
























class TreeElementsDragAndDropData extends listView/* ElementsDragAndDropData */.kX {
    constructor(data) {
        super(data.elements.map(node => node.element));
        this.data = data;
    }
}
function asTreeDragAndDropData(data) {
    if (data instanceof listView/* ElementsDragAndDropData */.kX) {
        return new TreeElementsDragAndDropData(data);
    }
    return data;
}
class TreeNodeListDragAndDrop {
    constructor(modelProvider, dnd) {
        this.modelProvider = modelProvider;
        this.dnd = dnd;
        this.autoExpandDisposable = lifecycle/* Disposable */.JT.None;
    }
    getDragURI(node) {
        return this.dnd.getDragURI(node.element);
    }
    getDragLabel(nodes, originalEvent) {
        if (this.dnd.getDragLabel) {
            return this.dnd.getDragLabel(nodes.map(node => node.element), originalEvent);
        }
        return undefined;
    }
    onDragStart(data, originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, asTreeDragAndDropData(data), originalEvent);
    }
    onDragOver(data, targetNode, targetIndex, originalEvent, raw = true) {
        const result = this.dnd.onDragOver(asTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, originalEvent);
        const didChangeAutoExpandNode = this.autoExpandNode !== targetNode;
        if (didChangeAutoExpandNode) {
            this.autoExpandDisposable.dispose();
            this.autoExpandNode = targetNode;
        }
        if (typeof targetNode === 'undefined') {
            return result;
        }
        if (didChangeAutoExpandNode && typeof result !== 'boolean' && result.autoExpand) {
            this.autoExpandDisposable = (0,common_async/* disposableTimeout */.Vg)(() => {
                const model = this.modelProvider();
                const ref = model.getNodeLocation(targetNode);
                if (model.isCollapsed(ref)) {
                    model.setCollapsed(ref, false);
                }
                this.autoExpandNode = undefined;
            }, 500);
        }
        if (typeof result === 'boolean' || !result.accept || typeof result.bubble === 'undefined' || result.feedback) {
            if (!raw) {
                const accept = typeof result === 'boolean' ? result : result.accept;
                const effect = typeof result === 'boolean' ? undefined : result.effect;
                return { accept, effect, feedback: [targetIndex] };
            }
            return result;
        }
        if (result.bubble === 1 /* TreeDragOverBubble.Up */) {
            const model = this.modelProvider();
            const ref = model.getNodeLocation(targetNode);
            const parentRef = model.getParentNodeLocation(ref);
            const parentNode = model.getNode(parentRef);
            const parentIndex = parentRef && model.getListIndex(parentRef);
            return this.onDragOver(data, parentNode, parentIndex, originalEvent, false);
        }
        const model = this.modelProvider();
        const ref = model.getNodeLocation(targetNode);
        const start = model.getListIndex(ref);
        const length = model.getListRenderCount(ref);
        return Object.assign(Object.assign({}, result), { feedback: (0,arrays/* range */.w6)(start, start + length) });
    }
    drop(data, targetNode, targetIndex, originalEvent) {
        this.autoExpandDisposable.dispose();
        this.autoExpandNode = undefined;
        this.dnd.drop(asTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, originalEvent);
    }
    onDragEnd(originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, originalEvent);
    }
}
function asListOptions(modelProvider, options) {
    return options && Object.assign(Object.assign({}, options), { identityProvider: options.identityProvider && {
            getId(el) {
                return options.identityProvider.getId(el.element);
            }
        }, dnd: options.dnd && new TreeNodeListDragAndDrop(modelProvider, options.dnd), multipleSelectionController: options.multipleSelectionController && {
            isSelectionSingleChangeEvent(e) {
                return options.multipleSelectionController.isSelectionSingleChangeEvent(Object.assign(Object.assign({}, e), { element: e.element }));
            },
            isSelectionRangeChangeEvent(e) {
                return options.multipleSelectionController.isSelectionRangeChangeEvent(Object.assign(Object.assign({}, e), { element: e.element }));
            }
        }, accessibilityProvider: options.accessibilityProvider && Object.assign(Object.assign({}, options.accessibilityProvider), { getSetSize(node) {
                const model = modelProvider();
                const ref = model.getNodeLocation(node);
                const parentRef = model.getParentNodeLocation(ref);
                const parentNode = model.getNode(parentRef);
                return parentNode.visibleChildrenCount;
            },
            getPosInSet(node) {
                return node.visibleChildIndex + 1;
            }, isChecked: options.accessibilityProvider && options.accessibilityProvider.isChecked ? (node) => {
                return options.accessibilityProvider.isChecked(node.element);
            } : undefined, getRole: options.accessibilityProvider && options.accessibilityProvider.getRole ? (node) => {
                return options.accessibilityProvider.getRole(node.element);
            } : () => 'treeitem', getAriaLabel(e) {
                return options.accessibilityProvider.getAriaLabel(e.element);
            },
            getWidgetAriaLabel() {
                return options.accessibilityProvider.getWidgetAriaLabel();
            }, getWidgetRole: options.accessibilityProvider && options.accessibilityProvider.getWidgetRole ? () => options.accessibilityProvider.getWidgetRole() : () => 'tree', getAriaLevel: options.accessibilityProvider && options.accessibilityProvider.getAriaLevel ? (node) => options.accessibilityProvider.getAriaLevel(node.element) : (node) => {
                return node.depth;
            }, getActiveDescendantId: options.accessibilityProvider.getActiveDescendantId && (node => {
                return options.accessibilityProvider.getActiveDescendantId(node.element);
            }) }), keyboardNavigationLabelProvider: options.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, options.keyboardNavigationLabelProvider), { getKeyboardNavigationLabel(node) {
                return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(node.element);
            } }) });
}
class ComposedTreeDelegate {
    constructor(delegate) {
        this.delegate = delegate;
    }
    getHeight(element) {
        return this.delegate.getHeight(element.element);
    }
    getTemplateId(element) {
        return this.delegate.getTemplateId(element.element);
    }
    hasDynamicHeight(element) {
        return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(element.element);
    }
    setDynamicHeight(element, height) {
        var _a, _b;
        (_b = (_a = this.delegate).setDynamicHeight) === null || _b === void 0 ? void 0 : _b.call(_a, element.element, height);
    }
}
var RenderIndentGuides;
(function (RenderIndentGuides) {
    RenderIndentGuides["None"] = "none";
    RenderIndentGuides["OnHover"] = "onHover";
    RenderIndentGuides["Always"] = "always";
})(RenderIndentGuides || (RenderIndentGuides = {}));
class EventCollection {
    get elements() {
        return this._elements;
    }
    constructor(onDidChange, _elements = []) {
        this._elements = _elements;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.onDidChange = common_event/* Event */.ju.forEach(onDidChange, elements => this._elements = elements, this.disposables);
    }
    dispose() {
        this.disposables.dispose();
    }
}
class TreeRenderer {
    constructor(renderer, modelProvider, onDidChangeCollapseState, activeNodes, renderedIndentGuides, options = {}) {
        var _a;
        this.renderer = renderer;
        this.modelProvider = modelProvider;
        this.activeNodes = activeNodes;
        this.renderedIndentGuides = renderedIndentGuides;
        this.renderedElements = new Map();
        this.renderedNodes = new Map();
        this.indent = TreeRenderer.DefaultIndent;
        this.hideTwistiesOfChildlessElements = false;
        this.shouldRenderIndentGuides = false;
        this.activeIndentNodes = new Set();
        this.indentGuidesDisposable = lifecycle/* Disposable */.JT.None;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this.templateId = renderer.templateId;
        this.updateOptions(options);
        common_event/* Event */.ju.map(onDidChangeCollapseState, e => e.node)(this.onDidChangeNodeTwistieState, this, this.disposables);
        (_a = renderer.onDidChangeTwistieState) === null || _a === void 0 ? void 0 : _a.call(renderer, this.onDidChangeTwistieState, this, this.disposables);
    }
    updateOptions(options = {}) {
        if (typeof options.indent !== 'undefined') {
            const indent = (0,numbers/* clamp */.uZ)(options.indent, 0, 40);
            if (indent !== this.indent) {
                this.indent = indent;
                for (const [node, templateData] of this.renderedNodes) {
                    this.renderTreeElement(node, templateData);
                }
            }
        }
        if (typeof options.renderIndentGuides !== 'undefined') {
            const shouldRenderIndentGuides = options.renderIndentGuides !== RenderIndentGuides.None;
            if (shouldRenderIndentGuides !== this.shouldRenderIndentGuides) {
                this.shouldRenderIndentGuides = shouldRenderIndentGuides;
                for (const [node, templateData] of this.renderedNodes) {
                    this._renderIndentGuides(node, templateData);
                }
                this.indentGuidesDisposable.dispose();
                if (shouldRenderIndentGuides) {
                    const disposables = new lifecycle/* DisposableStore */.SL();
                    this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, disposables);
                    this.indentGuidesDisposable = disposables;
                    this._onDidChangeActiveNodes(this.activeNodes.elements);
                }
            }
        }
        if (typeof options.hideTwistiesOfChildlessElements !== 'undefined') {
            this.hideTwistiesOfChildlessElements = options.hideTwistiesOfChildlessElements;
        }
    }
    renderTemplate(container) {
        const el = (0,dom/* append */.R3)(container, (0,dom.$)('.monaco-tl-row'));
        const indent = (0,dom/* append */.R3)(el, (0,dom.$)('.monaco-tl-indent'));
        const twistie = (0,dom/* append */.R3)(el, (0,dom.$)('.monaco-tl-twistie'));
        const contents = (0,dom/* append */.R3)(el, (0,dom.$)('.monaco-tl-contents'));
        const templateData = this.renderer.renderTemplate(contents);
        return { container, indent, twistie, indentGuidesDisposable: lifecycle/* Disposable */.JT.None, templateData };
    }
    renderElement(node, index, templateData, height) {
        this.renderedNodes.set(node, templateData);
        this.renderedElements.set(node.element, node);
        this.renderTreeElement(node, templateData);
        this.renderer.renderElement(node, index, templateData.templateData, height);
    }
    disposeElement(node, index, templateData, height) {
        var _a, _b;
        templateData.indentGuidesDisposable.dispose();
        (_b = (_a = this.renderer).disposeElement) === null || _b === void 0 ? void 0 : _b.call(_a, node, index, templateData.templateData, height);
        if (typeof height === 'number') {
            this.renderedNodes.delete(node);
            this.renderedElements.delete(node.element);
        }
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.templateData);
    }
    onDidChangeTwistieState(element) {
        const node = this.renderedElements.get(element);
        if (!node) {
            return;
        }
        this.onDidChangeNodeTwistieState(node);
    }
    onDidChangeNodeTwistieState(node) {
        const templateData = this.renderedNodes.get(node);
        if (!templateData) {
            return;
        }
        this._onDidChangeActiveNodes(this.activeNodes.elements);
        this.renderTreeElement(node, templateData);
    }
    renderTreeElement(node, templateData) {
        const indent = TreeRenderer.DefaultIndent + (node.depth - 1) * this.indent;
        templateData.twistie.style.paddingLeft = `${indent}px`;
        templateData.indent.style.width = `${indent + this.indent - 16}px`;
        if (node.collapsible) {
            templateData.container.setAttribute('aria-expanded', String(!node.collapsed));
        }
        else {
            templateData.container.removeAttribute('aria-expanded');
        }
        templateData.twistie.classList.remove(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.treeItemExpanded));
        let twistieRendered = false;
        if (this.renderer.renderTwistie) {
            twistieRendered = this.renderer.renderTwistie(node.element, templateData.twistie);
        }
        if (node.collapsible && (!this.hideTwistiesOfChildlessElements || node.visibleChildrenCount > 0)) {
            if (!twistieRendered) {
                templateData.twistie.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(codicons/* Codicon */.l.treeItemExpanded));
            }
            templateData.twistie.classList.add('collapsible');
            templateData.twistie.classList.toggle('collapsed', node.collapsed);
        }
        else {
            templateData.twistie.classList.remove('collapsible', 'collapsed');
        }
        this._renderIndentGuides(node, templateData);
    }
    _renderIndentGuides(node, templateData) {
        (0,dom/* clearNode */.PO)(templateData.indent);
        templateData.indentGuidesDisposable.dispose();
        if (!this.shouldRenderIndentGuides) {
            return;
        }
        const disposableStore = new lifecycle/* DisposableStore */.SL();
        const model = this.modelProvider();
        while (true) {
            const ref = model.getNodeLocation(node);
            const parentRef = model.getParentNodeLocation(ref);
            if (!parentRef) {
                break;
            }
            const parent = model.getNode(parentRef);
            const guide = (0,dom.$)('.indent-guide', { style: `width: ${this.indent}px` });
            if (this.activeIndentNodes.has(parent)) {
                guide.classList.add('active');
            }
            if (templateData.indent.childElementCount === 0) {
                templateData.indent.appendChild(guide);
            }
            else {
                templateData.indent.insertBefore(guide, templateData.indent.firstElementChild);
            }
            this.renderedIndentGuides.add(parent, guide);
            disposableStore.add((0,lifecycle/* toDisposable */.OF)(() => this.renderedIndentGuides.delete(parent, guide)));
            node = parent;
        }
        templateData.indentGuidesDisposable = disposableStore;
    }
    _onDidChangeActiveNodes(nodes) {
        if (!this.shouldRenderIndentGuides) {
            return;
        }
        const set = new Set();
        const model = this.modelProvider();
        nodes.forEach(node => {
            const ref = model.getNodeLocation(node);
            try {
                const parentRef = model.getParentNodeLocation(ref);
                if (node.collapsible && node.children.length > 0 && !node.collapsed) {
                    set.add(node);
                }
                else if (parentRef) {
                    set.add(model.getNode(parentRef));
                }
            }
            catch (_a) {
                // noop
            }
        });
        this.activeIndentNodes.forEach(node => {
            if (!set.has(node)) {
                this.renderedIndentGuides.forEach(node, line => line.classList.remove('active'));
            }
        });
        set.forEach(node => {
            if (!this.activeIndentNodes.has(node)) {
                this.renderedIndentGuides.forEach(node, line => line.classList.add('active'));
            }
        });
        this.activeIndentNodes = set;
    }
    dispose() {
        this.renderedNodes.clear();
        this.renderedElements.clear();
        this.indentGuidesDisposable.dispose();
        (0,lifecycle/* dispose */.B9)(this.disposables);
    }
}
TreeRenderer.DefaultIndent = 8;
class FindFilter {
    get totalCount() { return this._totalCount; }
    get matchCount() { return this._matchCount; }
    constructor(tree, keyboardNavigationLabelProvider, _filter) {
        this.tree = tree;
        this.keyboardNavigationLabelProvider = keyboardNavigationLabelProvider;
        this._filter = _filter;
        this._totalCount = 0;
        this._matchCount = 0;
        this._pattern = '';
        this._lowercasePattern = '';
        this.disposables = new lifecycle/* DisposableStore */.SL();
        tree.onWillRefilter(this.reset, this, this.disposables);
    }
    filter(element, parentVisibility) {
        let visibility = 1 /* TreeVisibility.Visible */;
        if (this._filter) {
            const result = this._filter.filter(element, parentVisibility);
            if (typeof result === 'boolean') {
                visibility = result ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */;
            }
            else if ((0,indexTreeModel/* isFilterResult */.gB)(result)) {
                visibility = (0,indexTreeModel/* getVisibleState */.aG)(result.visibility);
            }
            else {
                visibility = result;
            }
            if (visibility === 0 /* TreeVisibility.Hidden */) {
                return false;
            }
        }
        this._totalCount++;
        if (!this._pattern) {
            this._matchCount++;
            return { data: filters/* FuzzyScore */.CL.Default, visibility };
        }
        const label = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(element);
        const labels = Array.isArray(label) ? label : [label];
        for (const l of labels) {
            const labelStr = l && l.toString();
            if (typeof labelStr === 'undefined') {
                return { data: filters/* FuzzyScore */.CL.Default, visibility };
            }
            let score;
            if (this.tree.findMatchType === TreeFindMatchType.Contiguous) {
                const index = labelStr.toLowerCase().indexOf(this._lowercasePattern);
                if (index > -1) {
                    score = [Number.MAX_SAFE_INTEGER, 0];
                    for (let i = this._lowercasePattern.length; i > 0; i--) {
                        score.push(index + i - 1);
                    }
                }
            }
            else {
                score = (0,filters/* fuzzyScore */.EW)(this._pattern, this._lowercasePattern, 0, labelStr, labelStr.toLowerCase(), 0, { firstMatchCanBeWeak: true, boostFullMatch: true });
            }
            if (score) {
                this._matchCount++;
                return labels.length === 1 ?
                    { data: score, visibility } :
                    { data: { label: labelStr, score: score }, visibility };
            }
        }
        if (this.tree.findMode === TreeFindMode.Filter) {
            if (typeof this.tree.options.defaultFindVisibility === 'number') {
                return this.tree.options.defaultFindVisibility;
            }
            else if (this.tree.options.defaultFindVisibility) {
                return this.tree.options.defaultFindVisibility(element);
            }
            else {
                return 2 /* TreeVisibility.Recurse */;
            }
        }
        else {
            return { data: filters/* FuzzyScore */.CL.Default, visibility };
        }
    }
    reset() {
        this._totalCount = 0;
        this._matchCount = 0;
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this.disposables);
    }
}
class ModeToggle extends (/* unused pure expression or super */ null && (Toggle)) {
    constructor(opts) {
        var _a;
        super({
            icon: Codicon.listFilter,
            title: localize('filter', "Filter"),
            isChecked: (_a = opts.isChecked) !== null && _a !== void 0 ? _a : false,
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
class FuzzyToggle extends (/* unused pure expression or super */ null && (Toggle)) {
    constructor(opts) {
        var _a;
        super({
            icon: Codicon.searchFuzzy,
            title: localize('fuzzySearch', "Fuzzy Match"),
            isChecked: (_a = opts.isChecked) !== null && _a !== void 0 ? _a : false,
            inputActiveOptionBorder: opts.inputActiveOptionBorder,
            inputActiveOptionForeground: opts.inputActiveOptionForeground,
            inputActiveOptionBackground: opts.inputActiveOptionBackground
        });
    }
}
const unthemedFindWidgetStyles = {
    inputBoxStyles: inputBox/* unthemedInboxStyles */.g4,
    toggleStyles: toggle/* unthemedToggleStyles */.D,
    listFilterWidgetBackground: undefined,
    listFilterWidgetNoMatchesOutline: undefined,
    listFilterWidgetOutline: undefined,
    listFilterWidgetShadow: undefined
};
var TreeFindMode;
(function (TreeFindMode) {
    TreeFindMode[TreeFindMode["Highlight"] = 0] = "Highlight";
    TreeFindMode[TreeFindMode["Filter"] = 1] = "Filter";
})(TreeFindMode || (TreeFindMode = {}));
var TreeFindMatchType;
(function (TreeFindMatchType) {
    TreeFindMatchType[TreeFindMatchType["Fuzzy"] = 0] = "Fuzzy";
    TreeFindMatchType[TreeFindMatchType["Contiguous"] = 1] = "Contiguous";
})(TreeFindMatchType || (TreeFindMatchType = {}));
class FindWidget extends (/* unused pure expression or super */ null && (Disposable)) {
    set mode(mode) {
        this.modeToggle.checked = mode === TreeFindMode.Filter;
        this.findInput.inputBox.setPlaceHolder(mode === TreeFindMode.Filter ? localize('type to filter', "Type to filter") : localize('type to search', "Type to search"));
    }
    set matchType(matchType) {
        this.matchTypeToggle.checked = matchType === TreeFindMatchType.Fuzzy;
    }
    constructor(container, tree, contextViewProvider, mode, matchType, options) {
        var _a;
        super();
        this.tree = tree;
        this.elements = h('.monaco-tree-type-filter', [
            h('.monaco-tree-type-filter-grab.codicon.codicon-debug-gripper@grab', { tabIndex: 0 }),
            h('.monaco-tree-type-filter-input@findInput'),
            h('.monaco-tree-type-filter-actionbar@actionbar'),
        ]);
        this.width = 0;
        this.right = 0;
        this.top = 0;
        this._onDidDisable = new Emitter();
        container.appendChild(this.elements.root);
        this._register(toDisposable(() => container.removeChild(this.elements.root)));
        const styles = (_a = options === null || options === void 0 ? void 0 : options.styles) !== null && _a !== void 0 ? _a : unthemedFindWidgetStyles;
        if (styles.listFilterWidgetBackground) {
            this.elements.root.style.backgroundColor = styles.listFilterWidgetBackground;
        }
        if (styles.listFilterWidgetShadow) {
            this.elements.root.style.boxShadow = `0 0 8px 2px ${styles.listFilterWidgetShadow}`;
        }
        this.modeToggle = this._register(new ModeToggle(Object.assign(Object.assign({}, styles.toggleStyles), { isChecked: mode === TreeFindMode.Filter })));
        this.matchTypeToggle = this._register(new FuzzyToggle(Object.assign(Object.assign({}, styles.toggleStyles), { isChecked: matchType === TreeFindMatchType.Fuzzy })));
        this.onDidChangeMode = Event.map(this.modeToggle.onChange, () => this.modeToggle.checked ? TreeFindMode.Filter : TreeFindMode.Highlight, this._store);
        this.onDidChangeMatchType = Event.map(this.matchTypeToggle.onChange, () => this.matchTypeToggle.checked ? TreeFindMatchType.Fuzzy : TreeFindMatchType.Contiguous, this._store);
        this.findInput = this._register(new FindInput(this.elements.findInput, contextViewProvider, {
            label: localize('type to search', "Type to search"),
            additionalToggles: [this.modeToggle, this.matchTypeToggle],
            showCommonFindToggles: false,
            inputBoxStyles: styles.inputBoxStyles,
            toggleStyles: styles.toggleStyles,
            history: options === null || options === void 0 ? void 0 : options.history
        }));
        this.actionbar = this._register(new ActionBar(this.elements.actionbar));
        this.mode = mode;
        const emitter = this._register(new DomEmitter(this.findInput.inputBox.inputElement, 'keydown'));
        const onKeyDown = this._register(Event.chain(emitter.event))
            .map(e => new StandardKeyboardEvent(e))
            .event;
        this._register(onKeyDown((e) => {
            // Using equals() so we reserve modified keys for future use
            if (e.equals(3 /* KeyCode.Enter */)) {
                // This is the only keyboard way to return to the tree from a history item that isn't the last one
                e.preventDefault();
                e.stopPropagation();
                this.findInput.inputBox.addToHistory();
                this.tree.domFocus();
                return;
            }
            if (e.equals(18 /* KeyCode.DownArrow */)) {
                e.preventDefault();
                e.stopPropagation();
                if (this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory()) {
                    // Retain original pre-history DownArrow behavior
                    this.findInput.inputBox.addToHistory();
                    this.tree.domFocus();
                }
                else {
                    // Downward through history
                    this.findInput.inputBox.showNextValue();
                }
                return;
            }
            if (e.equals(16 /* KeyCode.UpArrow */)) {
                e.preventDefault();
                e.stopPropagation();
                // Upward through history
                this.findInput.inputBox.showPreviousValue();
                return;
            }
        }));
        const closeAction = this._register(new Action('close', localize('close', "Close"), 'codicon codicon-close', true, () => this.dispose()));
        this.actionbar.push(closeAction, { icon: true, label: false });
        const onGrabMouseDown = this._register(new DomEmitter(this.elements.grab, 'mousedown'));
        this._register(onGrabMouseDown.event(e => {
            const disposables = new DisposableStore();
            const onWindowMouseMove = disposables.add(new DomEmitter(window, 'mousemove'));
            const onWindowMouseUp = disposables.add(new DomEmitter(window, 'mouseup'));
            const startRight = this.right;
            const startX = e.pageX;
            const startTop = this.top;
            const startY = e.pageY;
            this.elements.grab.classList.add('grabbing');
            const transition = this.elements.root.style.transition;
            this.elements.root.style.transition = 'unset';
            const update = (e) => {
                const deltaX = e.pageX - startX;
                this.right = startRight - deltaX;
                const deltaY = e.pageY - startY;
                this.top = startTop + deltaY;
                this.layout();
            };
            disposables.add(onWindowMouseMove.event(update));
            disposables.add(onWindowMouseUp.event(e => {
                update(e);
                this.elements.grab.classList.remove('grabbing');
                this.elements.root.style.transition = transition;
                disposables.dispose();
            }));
        }));
        const onGrabKeyDown = this._register(Event.chain(this._register(new DomEmitter(this.elements.grab, 'keydown')).event))
            .map(e => new StandardKeyboardEvent(e))
            .event;
        this._register(onGrabKeyDown((e) => {
            let right;
            let top;
            if (e.keyCode === 15 /* KeyCode.LeftArrow */) {
                right = Number.POSITIVE_INFINITY;
            }
            else if (e.keyCode === 17 /* KeyCode.RightArrow */) {
                right = 0;
            }
            else if (e.keyCode === 10 /* KeyCode.Space */) {
                right = this.right === 0 ? Number.POSITIVE_INFINITY : 0;
            }
            if (e.keyCode === 16 /* KeyCode.UpArrow */) {
                top = 0;
            }
            else if (e.keyCode === 18 /* KeyCode.DownArrow */) {
                top = Number.POSITIVE_INFINITY;
            }
            if (right !== undefined) {
                e.preventDefault();
                e.stopPropagation();
                this.right = right;
                this.layout();
            }
            if (top !== undefined) {
                e.preventDefault();
                e.stopPropagation();
                this.top = top;
                const transition = this.elements.root.style.transition;
                this.elements.root.style.transition = 'unset';
                this.layout();
                setTimeout(() => {
                    this.elements.root.style.transition = transition;
                }, 0);
            }
        }));
        this.onDidChangeValue = this.findInput.onDidChange;
    }
    layout(width = this.width) {
        this.width = width;
        this.right = clamp(this.right, 0, Math.max(0, width - 212));
        this.elements.root.style.right = `${this.right}px`;
        this.top = clamp(this.top, 0, 24);
        this.elements.root.style.top = `${this.top}px`;
    }
    showMessage(message) {
        this.findInput.showMessage(message);
    }
    clearMessage() {
        this.findInput.clearMessage();
    }
    dispose() {
        const _super = Object.create(null, {
            dispose: { get: () => super.dispose }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this._onDidDisable.fire();
            this.elements.root.classList.add('disabled');
            yield timeout(300);
            _super.dispose.call(this);
        });
    }
}
class FindController {
    get pattern() { return this._pattern; }
    get mode() { return this._mode; }
    set mode(mode) {
        if (mode === this._mode) {
            return;
        }
        this._mode = mode;
        if (this.widget) {
            this.widget.mode = this._mode;
        }
        this.tree.refilter();
        this.render();
        this._onDidChangeMode.fire(mode);
    }
    get matchType() { return this._matchType; }
    set matchType(matchType) {
        if (matchType === this._matchType) {
            return;
        }
        this._matchType = matchType;
        if (this.widget) {
            this.widget.matchType = this._matchType;
        }
        this.tree.refilter();
        this.render();
        this._onDidChangeMatchType.fire(matchType);
    }
    constructor(tree, model, view, filter, contextViewProvider, options = {}) {
        var _a, _b;
        this.tree = tree;
        this.view = view;
        this.filter = filter;
        this.contextViewProvider = contextViewProvider;
        this.options = options;
        this._pattern = '';
        this.width = 0;
        this._onDidChangeMode = new common_event/* Emitter */.Q5();
        this.onDidChangeMode = this._onDidChangeMode.event;
        this._onDidChangeMatchType = new common_event/* Emitter */.Q5();
        this.onDidChangeMatchType = this._onDidChangeMatchType.event;
        this._onDidChangePattern = new common_event/* Emitter */.Q5();
        this._onDidChangeOpenState = new common_event/* Emitter */.Q5();
        this.onDidChangeOpenState = this._onDidChangeOpenState.event;
        this.enabledDisposables = new lifecycle/* DisposableStore */.SL();
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this._mode = (_a = tree.options.defaultFindMode) !== null && _a !== void 0 ? _a : TreeFindMode.Highlight;
        this._matchType = (_b = tree.options.defaultFindMatchType) !== null && _b !== void 0 ? _b : TreeFindMatchType.Fuzzy;
        model.onDidSplice(this.onDidSpliceModel, this, this.disposables);
    }
    updateOptions(optionsUpdate = {}) {
        if (optionsUpdate.defaultFindMode !== undefined) {
            this.mode = optionsUpdate.defaultFindMode;
        }
        if (optionsUpdate.defaultFindMatchType !== undefined) {
            this.matchType = optionsUpdate.defaultFindMatchType;
        }
    }
    onDidSpliceModel() {
        if (!this.widget || this.pattern.length === 0) {
            return;
        }
        this.tree.refilter();
        this.render();
    }
    render() {
        var _a, _b, _c, _d;
        const noMatches = this.filter.totalCount > 0 && this.filter.matchCount === 0;
        if (this.pattern && noMatches) {
            if ((_a = this.tree.options.showNotFoundMessage) !== null && _a !== void 0 ? _a : true) {
                (_b = this.widget) === null || _b === void 0 ? void 0 : _b.showMessage({ type: 2 /* MessageType.WARNING */, content: (0,nls/* localize */.NC)('not found', "No elements found.") });
            }
            else {
                (_c = this.widget) === null || _c === void 0 ? void 0 : _c.showMessage({ type: 2 /* MessageType.WARNING */ });
            }
        }
        else {
            (_d = this.widget) === null || _d === void 0 ? void 0 : _d.clearMessage();
        }
    }
    shouldAllowFocus(node) {
        if (!this.widget || !this.pattern || this._mode === TreeFindMode.Filter) {
            return true;
        }
        if (this.filter.totalCount > 0 && this.filter.matchCount <= 1) {
            return true;
        }
        return !filters/* FuzzyScore */.CL.isDefault(node.filterData);
    }
    layout(width) {
        var _a;
        this.width = width;
        (_a = this.widget) === null || _a === void 0 ? void 0 : _a.layout(width);
    }
    dispose() {
        this._history = undefined;
        this._onDidChangePattern.dispose();
        this.enabledDisposables.dispose();
        this.disposables.dispose();
    }
}
function asTreeMouseEvent(event) {
    let target = tree/* TreeMouseEventTarget */.sD.Unknown;
    if ((0,dom/* hasParentWithClass */.uU)(event.browserEvent.target, 'monaco-tl-twistie', 'monaco-tl-row')) {
        target = tree/* TreeMouseEventTarget */.sD.Twistie;
    }
    else if ((0,dom/* hasParentWithClass */.uU)(event.browserEvent.target, 'monaco-tl-contents', 'monaco-tl-row')) {
        target = tree/* TreeMouseEventTarget */.sD.Element;
    }
    else if ((0,dom/* hasParentWithClass */.uU)(event.browserEvent.target, 'monaco-tree-type-filter', 'monaco-list')) {
        target = tree/* TreeMouseEventTarget */.sD.Filter;
    }
    return {
        browserEvent: event.browserEvent,
        element: event.element ? event.element.element : null,
        target
    };
}
function dfs(node, fn) {
    fn(node);
    node.children.forEach(child => dfs(child, fn));
}
/**
 * The trait concept needs to exist at the tree level, because collapsed
 * tree nodes will not be known by the list.
 */
class Trait {
    get nodeSet() {
        if (!this._nodeSet) {
            this._nodeSet = this.createNodeSet();
        }
        return this._nodeSet;
    }
    constructor(getFirstViewElementWithTrait, identityProvider) {
        this.getFirstViewElementWithTrait = getFirstViewElementWithTrait;
        this.identityProvider = identityProvider;
        this.nodes = [];
        this._onDidChange = new common_event/* Emitter */.Q5();
        this.onDidChange = this._onDidChange.event;
    }
    set(nodes, browserEvent) {
        if (!(browserEvent === null || browserEvent === void 0 ? void 0 : browserEvent.__forceEvent) && (0,arrays/* equals */.fS)(this.nodes, nodes)) {
            return;
        }
        this._set(nodes, false, browserEvent);
    }
    _set(nodes, silent, browserEvent) {
        this.nodes = [...nodes];
        this.elements = undefined;
        this._nodeSet = undefined;
        if (!silent) {
            const that = this;
            this._onDidChange.fire({ get elements() { return that.get(); }, browserEvent });
        }
    }
    get() {
        if (!this.elements) {
            this.elements = this.nodes.map(node => node.element);
        }
        return [...this.elements];
    }
    getNodes() {
        return this.nodes;
    }
    has(node) {
        return this.nodeSet.has(node);
    }
    onDidModelSplice({ insertedNodes, deletedNodes }) {
        if (!this.identityProvider) {
            const set = this.createNodeSet();
            const visit = (node) => set.delete(node);
            deletedNodes.forEach(node => dfs(node, visit));
            this.set([...set.values()]);
            return;
        }
        const deletedNodesIdSet = new Set();
        const deletedNodesVisitor = (node) => deletedNodesIdSet.add(this.identityProvider.getId(node.element).toString());
        deletedNodes.forEach(node => dfs(node, deletedNodesVisitor));
        const insertedNodesMap = new Map();
        const insertedNodesVisitor = (node) => insertedNodesMap.set(this.identityProvider.getId(node.element).toString(), node);
        insertedNodes.forEach(node => dfs(node, insertedNodesVisitor));
        const nodes = [];
        for (const node of this.nodes) {
            const id = this.identityProvider.getId(node.element).toString();
            const wasDeleted = deletedNodesIdSet.has(id);
            if (!wasDeleted) {
                nodes.push(node);
            }
            else {
                const insertedNode = insertedNodesMap.get(id);
                if (insertedNode && insertedNode.visible) {
                    nodes.push(insertedNode);
                }
            }
        }
        if (this.nodes.length > 0 && nodes.length === 0) {
            const node = this.getFirstViewElementWithTrait();
            if (node) {
                nodes.push(node);
            }
        }
        this._set(nodes, true);
    }
    createNodeSet() {
        const set = new Set();
        for (const node of this.nodes) {
            set.add(node);
        }
        return set;
    }
}
class TreeNodeListMouseController extends listWidget/* MouseController */.sx {
    constructor(list, tree) {
        super(list);
        this.tree = tree;
    }
    onViewPointer(e) {
        if ((0,listWidget/* isButton */.iK)(e.browserEvent.target) ||
            (0,listWidget/* isInputElement */.cK)(e.browserEvent.target) ||
            (0,listWidget/* isMonacoEditor */.hD)(e.browserEvent.target)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        const node = e.element;
        if (!node) {
            return super.onViewPointer(e);
        }
        if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) {
            return super.onViewPointer(e);
        }
        const target = e.browserEvent.target;
        const onTwistie = target.classList.contains('monaco-tl-twistie')
            || (target.classList.contains('monaco-icon-label') && target.classList.contains('folder-icon') && e.browserEvent.offsetX < 16);
        let expandOnlyOnTwistieClick = false;
        if (typeof this.tree.expandOnlyOnTwistieClick === 'function') {
            expandOnlyOnTwistieClick = this.tree.expandOnlyOnTwistieClick(node.element);
        }
        else {
            expandOnlyOnTwistieClick = !!this.tree.expandOnlyOnTwistieClick;
        }
        if (expandOnlyOnTwistieClick && !onTwistie && e.browserEvent.detail !== 2) {
            return super.onViewPointer(e);
        }
        if (!this.tree.expandOnDoubleClick && e.browserEvent.detail === 2) {
            return super.onViewPointer(e);
        }
        if (node.collapsible) {
            const location = this.tree.getNodeLocation(node);
            const recursive = e.browserEvent.altKey;
            this.tree.setFocus([location]);
            this.tree.toggleCollapsed(location, recursive);
            if (expandOnlyOnTwistieClick && onTwistie) {
                // Do not set this before calling a handler on the super class, because it will reject it as handled
                e.browserEvent.isHandledByList = true;
                return;
            }
        }
        super.onViewPointer(e);
    }
    onDoubleClick(e) {
        const onTwistie = e.browserEvent.target.classList.contains('monaco-tl-twistie');
        if (onTwistie || !this.tree.expandOnDoubleClick) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        super.onDoubleClick(e);
    }
}
/**
 * We use this List subclass to restore selection and focus as nodes
 * get rendered in the list, possibly due to a node expand() call.
 */
class TreeNodeList extends listWidget/* List */.aV {
    constructor(user, container, virtualDelegate, renderers, focusTrait, selectionTrait, anchorTrait, options) {
        super(user, container, virtualDelegate, renderers, options);
        this.focusTrait = focusTrait;
        this.selectionTrait = selectionTrait;
        this.anchorTrait = anchorTrait;
    }
    createMouseController(options) {
        return new TreeNodeListMouseController(this, options.tree);
    }
    splice(start, deleteCount, elements = []) {
        super.splice(start, deleteCount, elements);
        if (elements.length === 0) {
            return;
        }
        const additionalFocus = [];
        const additionalSelection = [];
        let anchor;
        elements.forEach((node, index) => {
            if (this.focusTrait.has(node)) {
                additionalFocus.push(start + index);
            }
            if (this.selectionTrait.has(node)) {
                additionalSelection.push(start + index);
            }
            if (this.anchorTrait.has(node)) {
                anchor = start + index;
            }
        });
        if (additionalFocus.length > 0) {
            super.setFocus((0,arrays/* distinct */.EB)([...super.getFocus(), ...additionalFocus]));
        }
        if (additionalSelection.length > 0) {
            super.setSelection((0,arrays/* distinct */.EB)([...super.getSelection(), ...additionalSelection]));
        }
        if (typeof anchor === 'number') {
            super.setAnchor(anchor);
        }
    }
    setFocus(indexes, browserEvent, fromAPI = false) {
        super.setFocus(indexes, browserEvent);
        if (!fromAPI) {
            this.focusTrait.set(indexes.map(i => this.element(i)), browserEvent);
        }
    }
    setSelection(indexes, browserEvent, fromAPI = false) {
        super.setSelection(indexes, browserEvent);
        if (!fromAPI) {
            this.selectionTrait.set(indexes.map(i => this.element(i)), browserEvent);
        }
    }
    setAnchor(index, fromAPI = false) {
        super.setAnchor(index);
        if (!fromAPI) {
            if (typeof index === 'undefined') {
                this.anchorTrait.set([]);
            }
            else {
                this.anchorTrait.set([this.element(index)]);
            }
        }
    }
}
class AbstractTree {
    get onDidScroll() { return this.view.onDidScroll; }
    get onDidChangeFocus() { return this.eventBufferer.wrapEvent(this.focus.onDidChange); }
    get onDidChangeSelection() { return this.eventBufferer.wrapEvent(this.selection.onDidChange); }
    get onMouseDblClick() { return common_event/* Event */.ju.filter(common_event/* Event */.ju.map(this.view.onMouseDblClick, asTreeMouseEvent), e => e.target !== tree/* TreeMouseEventTarget */.sD.Filter); }
    get onPointer() { return common_event/* Event */.ju.map(this.view.onPointer, asTreeMouseEvent); }
    get onDidFocus() { return this.view.onDidFocus; }
    get onDidChangeModel() { return common_event/* Event */.ju.signal(this.model.onDidSplice); }
    get onDidChangeCollapseState() { return this.model.onDidChangeCollapseState; }
    get findMode() { var _a, _b; return (_b = (_a = this.findController) === null || _a === void 0 ? void 0 : _a.mode) !== null && _b !== void 0 ? _b : TreeFindMode.Highlight; }
    set findMode(findMode) { if (this.findController) {
        this.findController.mode = findMode;
    } }
    get findMatchType() { var _a, _b; return (_b = (_a = this.findController) === null || _a === void 0 ? void 0 : _a.matchType) !== null && _b !== void 0 ? _b : TreeFindMatchType.Fuzzy; }
    set findMatchType(findFuzzy) { if (this.findController) {
        this.findController.matchType = findFuzzy;
    } }
    get expandOnDoubleClick() { return typeof this._options.expandOnDoubleClick === 'undefined' ? true : this._options.expandOnDoubleClick; }
    get expandOnlyOnTwistieClick() { return typeof this._options.expandOnlyOnTwistieClick === 'undefined' ? true : this._options.expandOnlyOnTwistieClick; }
    get onDidDispose() { return this.view.onDidDispose; }
    constructor(_user, container, delegate, renderers, _options = {}) {
        var _a;
        this._user = _user;
        this._options = _options;
        this.eventBufferer = new common_event/* EventBufferer */.E7();
        this.onDidChangeFindOpenState = common_event/* Event */.ju.None;
        this.disposables = new lifecycle/* DisposableStore */.SL();
        this._onWillRefilter = new common_event/* Emitter */.Q5();
        this.onWillRefilter = this._onWillRefilter.event;
        this._onDidUpdateOptions = new common_event/* Emitter */.Q5();
        const treeDelegate = new ComposedTreeDelegate(delegate);
        const onDidChangeCollapseStateRelay = new common_event/* Relay */.ZD();
        const onDidChangeActiveNodes = new common_event/* Relay */.ZD();
        const activeNodes = this.disposables.add(new EventCollection(onDidChangeActiveNodes.event));
        const renderedIndentGuides = new collections/* SetMap */.r();
        this.renderers = renderers.map(r => new TreeRenderer(r, () => this.model, onDidChangeCollapseStateRelay.event, activeNodes, renderedIndentGuides, _options));
        for (const r of this.renderers) {
            this.disposables.add(r);
        }
        let filter;
        if (_options.keyboardNavigationLabelProvider) {
            filter = new FindFilter(this, _options.keyboardNavigationLabelProvider, _options.filter);
            _options = Object.assign(Object.assign({}, _options), { filter: filter }); // TODO need typescript help here
            this.disposables.add(filter);
        }
        this.focus = new Trait(() => this.view.getFocusedElements()[0], _options.identityProvider);
        this.selection = new Trait(() => this.view.getSelectedElements()[0], _options.identityProvider);
        this.anchor = new Trait(() => this.view.getAnchorElement(), _options.identityProvider);
        this.view = new TreeNodeList(_user, container, treeDelegate, this.renderers, this.focus, this.selection, this.anchor, Object.assign(Object.assign({}, asListOptions(() => this.model, _options)), { tree: this }));
        this.model = this.createModel(_user, this.view, _options);
        onDidChangeCollapseStateRelay.input = this.model.onDidChangeCollapseState;
        const onDidModelSplice = common_event/* Event */.ju.forEach(this.model.onDidSplice, e => {
            this.eventBufferer.bufferEvents(() => {
                this.focus.onDidModelSplice(e);
                this.selection.onDidModelSplice(e);
            });
        }, this.disposables);
        // Make sure the `forEach` always runs
        onDidModelSplice(() => null, null, this.disposables);
        // Active nodes can change when the model changes or when focus or selection change.
        // We debounce it with 0 delay since these events may fire in the same stack and we only
        // want to run this once. It also doesn't matter if it runs on the next tick since it's only
        // a nice to have UI feature.
        onDidChangeActiveNodes.input = common_event/* Event */.ju.chain(common_event/* Event */.ju.any(onDidModelSplice, this.focus.onDidChange, this.selection.onDidChange))
            .debounce(() => null, 0)
            .map(() => {
            const set = new Set();
            for (const node of this.focus.getNodes()) {
                set.add(node);
            }
            for (const node of this.selection.getNodes()) {
                set.add(node);
            }
            return [...set.values()];
        }).event;
        if (_options.keyboardSupport !== false) {
            const onKeyDown = common_event/* Event */.ju.chain(this.view.onKeyDown)
                .filter(e => !(0,listWidget/* isInputElement */.cK)(e.target))
                .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e));
            onKeyDown.filter(e => e.keyCode === 15 /* KeyCode.LeftArrow */).on(this.onLeftArrow, this, this.disposables);
            onKeyDown.filter(e => e.keyCode === 17 /* KeyCode.RightArrow */).on(this.onRightArrow, this, this.disposables);
            onKeyDown.filter(e => e.keyCode === 10 /* KeyCode.Space */).on(this.onSpace, this, this.disposables);
        }
        if (((_a = _options.findWidgetEnabled) !== null && _a !== void 0 ? _a : true) && _options.keyboardNavigationLabelProvider && _options.contextViewProvider) {
            const opts = this.options.findWidgetStyles ? { styles: this.options.findWidgetStyles } : undefined;
            this.findController = new FindController(this, this.model, this.view, filter, _options.contextViewProvider, opts);
            this.focusNavigationFilter = node => this.findController.shouldAllowFocus(node);
            this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState;
            this.disposables.add(this.findController);
            this.onDidChangeFindMode = this.findController.onDidChangeMode;
            this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        }
        else {
            this.onDidChangeFindMode = common_event/* Event */.ju.None;
            this.onDidChangeFindMatchType = common_event/* Event */.ju.None;
        }
        this.styleElement = (0,dom/* createStyleSheet */.dS)(this.view.getHTMLElement());
        this.getHTMLElement().classList.toggle('always', this._options.renderIndentGuides === RenderIndentGuides.Always);
    }
    updateOptions(optionsUpdate = {}) {
        var _a;
        this._options = Object.assign(Object.assign({}, this._options), optionsUpdate);
        for (const renderer of this.renderers) {
            renderer.updateOptions(optionsUpdate);
        }
        this.view.updateOptions(this._options);
        (_a = this.findController) === null || _a === void 0 ? void 0 : _a.updateOptions(optionsUpdate);
        this._onDidUpdateOptions.fire(this._options);
        this.getHTMLElement().classList.toggle('always', this._options.renderIndentGuides === RenderIndentGuides.Always);
    }
    get options() {
        return this._options;
    }
    // Widget
    getHTMLElement() {
        return this.view.getHTMLElement();
    }
    get scrollTop() {
        return this.view.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.view.scrollTop = scrollTop;
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    domFocus() {
        this.view.domFocus();
    }
    layout(height, width) {
        var _a;
        this.view.layout(height, width);
        if ((0,types/* isNumber */.hj)(width)) {
            (_a = this.findController) === null || _a === void 0 ? void 0 : _a.layout(width);
        }
    }
    style(styles) {
        const suffix = `.${this.view.domId}`;
        const content = [];
        if (styles.treeIndentGuidesStroke) {
            content.push(`.monaco-list${suffix}:hover .monaco-tl-indent > .indent-guide, .monaco-list${suffix}.always .monaco-tl-indent > .indent-guide  { border-color: ${styles.treeInactiveIndentGuidesStroke}; }`);
            content.push(`.monaco-list${suffix} .monaco-tl-indent > .indent-guide.active { border-color: ${styles.treeIndentGuidesStroke}; }`);
        }
        this.styleElement.textContent = content.join('\n');
        this.view.style(styles);
    }
    // Tree navigation
    getParentElement(location) {
        const parentRef = this.model.getParentNodeLocation(location);
        const parentNode = this.model.getNode(parentRef);
        return parentNode.element;
    }
    getFirstElementChild(location) {
        return this.model.getFirstElementChild(location);
    }
    // Tree
    getNode(location) {
        return this.model.getNode(location);
    }
    getNodeLocation(node) {
        return this.model.getNodeLocation(node);
    }
    collapse(location, recursive = false) {
        return this.model.setCollapsed(location, true, recursive);
    }
    expand(location, recursive = false) {
        return this.model.setCollapsed(location, false, recursive);
    }
    toggleCollapsed(location, recursive = false) {
        return this.model.setCollapsed(location, undefined, recursive);
    }
    isCollapsible(location) {
        return this.model.isCollapsible(location);
    }
    setCollapsible(location, collapsible) {
        return this.model.setCollapsible(location, collapsible);
    }
    isCollapsed(location) {
        return this.model.isCollapsed(location);
    }
    refilter() {
        this._onWillRefilter.fire(undefined);
        this.model.refilter();
    }
    setSelection(elements, browserEvent) {
        const nodes = elements.map(e => this.model.getNode(e));
        this.selection.set(nodes, browserEvent);
        const indexes = elements.map(e => this.model.getListIndex(e)).filter(i => i > -1);
        this.view.setSelection(indexes, browserEvent, true);
    }
    getSelection() {
        return this.selection.get();
    }
    setFocus(elements, browserEvent) {
        const nodes = elements.map(e => this.model.getNode(e));
        this.focus.set(nodes, browserEvent);
        const indexes = elements.map(e => this.model.getListIndex(e)).filter(i => i > -1);
        this.view.setFocus(indexes, browserEvent, true);
    }
    getFocus() {
        return this.focus.get();
    }
    reveal(location, relativeTop) {
        this.model.expandTo(location);
        const index = this.model.getListIndex(location);
        if (index === -1) {
            return;
        }
        this.view.reveal(index, relativeTop);
    }
    // List
    onLeftArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const didChange = this.model.setCollapsed(location, true);
        if (!didChange) {
            const parentLocation = this.model.getParentNodeLocation(location);
            if (!parentLocation) {
                return;
            }
            const parentListIndex = this.model.getListIndex(parentLocation);
            this.view.reveal(parentListIndex);
            this.view.setFocus([parentListIndex]);
        }
    }
    onRightArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const didChange = this.model.setCollapsed(location, false);
        if (!didChange) {
            if (!node.children.some(child => child.visible)) {
                return;
            }
            const [focusedIndex] = this.view.getFocus();
            const firstChildIndex = focusedIndex + 1;
            this.view.reveal(firstChildIndex);
            this.view.setFocus([firstChildIndex]);
        }
    }
    onSpace(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const recursive = e.browserEvent.altKey;
        this.model.setCollapsed(location, undefined, recursive);
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this.disposables);
        this.view.dispose();
    }
}


/***/ }),

/***/ 38424:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ AsyncDataTree; },
/* harmony export */   h: function() { return /* binding */ CompressibleAsyncDataTree; }
/* harmony export */ });
/* harmony import */ var _list_listView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50527);
/* harmony import */ var _abstractTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20104);
/* harmony import */ var _indexTreeModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51488);
/* harmony import */ var _objectTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13689);
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54059);
/* harmony import */ var _common_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69058);
/* harmony import */ var _common_codicons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13113);
/* harmony import */ var _common_themables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50077);
/* harmony import */ var _common_errors_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25702);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64720);
/* harmony import */ var _common_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25134);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26794);
/* harmony import */ var _common_types_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(89356);
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













function createAsyncDataTreeNode(props) {
    return Object.assign(Object.assign({}, props), { children: [], refreshPromise: undefined, stale: true, slow: false, collapsedByDefault: undefined });
}
function isAncestor(ancestor, descendant) {
    if (!descendant.parent) {
        return false;
    }
    else if (descendant.parent === ancestor) {
        return true;
    }
    else {
        return isAncestor(ancestor, descendant.parent);
    }
}
function intersects(node, other) {
    return node === other || isAncestor(node, other) || isAncestor(other, node);
}
class AsyncDataTreeNodeWrapper {
    get element() { return this.node.element.element; }
    get children() { return this.node.children.map(node => new AsyncDataTreeNodeWrapper(node)); }
    get depth() { return this.node.depth; }
    get visibleChildrenCount() { return this.node.visibleChildrenCount; }
    get visibleChildIndex() { return this.node.visibleChildIndex; }
    get collapsible() { return this.node.collapsible; }
    get collapsed() { return this.node.collapsed; }
    get visible() { return this.node.visible; }
    get filterData() { return this.node.filterData; }
    constructor(node) {
        this.node = node;
    }
}
class AsyncDataTreeRenderer {
    constructor(renderer, nodeMapper, onDidChangeTwistieState) {
        this.renderer = renderer;
        this.nodeMapper = nodeMapper;
        this.onDidChangeTwistieState = onDidChangeTwistieState;
        this.renderedNodes = new Map();
        this.templateId = renderer.templateId;
    }
    renderTemplate(container) {
        const templateData = this.renderer.renderTemplate(container);
        return { templateData };
    }
    renderElement(node, index, templateData, height) {
        this.renderer.renderElement(this.nodeMapper.map(node), index, templateData.templateData, height);
    }
    renderTwistie(element, twistieElement) {
        if (element.slow) {
            twistieElement.classList.add(..._common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassNameArray(_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.treeItemLoading));
            return true;
        }
        else {
            twistieElement.classList.remove(..._common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassNameArray(_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.treeItemLoading));
            return false;
        }
    }
    disposeElement(node, index, templateData, height) {
        var _a, _b;
        (_b = (_a = this.renderer).disposeElement) === null || _b === void 0 ? void 0 : _b.call(_a, this.nodeMapper.map(node), index, templateData.templateData, height);
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
    }
}
function asTreeEvent(e) {
    return {
        browserEvent: e.browserEvent,
        elements: e.elements.map(e => e.element)
    };
}
function asTreeMouseEvent(e) {
    return {
        browserEvent: e.browserEvent,
        element: e.element && e.element.element,
        target: e.target
    };
}
class AsyncDataTreeElementsDragAndDropData extends _list_listView_js__WEBPACK_IMPORTED_MODULE_0__/* .ElementsDragAndDropData */ .kX {
    constructor(data) {
        super(data.elements.map(node => node.element));
        this.data = data;
    }
}
function asAsyncDataTreeDragAndDropData(data) {
    if (data instanceof _list_listView_js__WEBPACK_IMPORTED_MODULE_0__/* .ElementsDragAndDropData */ .kX) {
        return new AsyncDataTreeElementsDragAndDropData(data);
    }
    return data;
}
class AsyncDataTreeNodeListDragAndDrop {
    constructor(dnd) {
        this.dnd = dnd;
    }
    getDragURI(node) {
        return this.dnd.getDragURI(node.element);
    }
    getDragLabel(nodes, originalEvent) {
        if (this.dnd.getDragLabel) {
            return this.dnd.getDragLabel(nodes.map(node => node.element), originalEvent);
        }
        return undefined;
    }
    onDragStart(data, originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, asAsyncDataTreeDragAndDropData(data), originalEvent);
    }
    onDragOver(data, targetNode, targetIndex, originalEvent, raw = true) {
        return this.dnd.onDragOver(asAsyncDataTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, originalEvent);
    }
    drop(data, targetNode, targetIndex, originalEvent) {
        this.dnd.drop(asAsyncDataTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, originalEvent);
    }
    onDragEnd(originalEvent) {
        var _a, _b;
        (_b = (_a = this.dnd).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, originalEvent);
    }
}
function asObjectTreeOptions(options) {
    return options && Object.assign(Object.assign({}, options), { collapseByDefault: true, identityProvider: options.identityProvider && {
            getId(el) {
                return options.identityProvider.getId(el.element);
            }
        }, dnd: options.dnd && new AsyncDataTreeNodeListDragAndDrop(options.dnd), multipleSelectionController: options.multipleSelectionController && {
            isSelectionSingleChangeEvent(e) {
                return options.multipleSelectionController.isSelectionSingleChangeEvent(Object.assign(Object.assign({}, e), { element: e.element }));
            },
            isSelectionRangeChangeEvent(e) {
                return options.multipleSelectionController.isSelectionRangeChangeEvent(Object.assign(Object.assign({}, e), { element: e.element }));
            }
        }, accessibilityProvider: options.accessibilityProvider && Object.assign(Object.assign({}, options.accessibilityProvider), { getPosInSet: undefined, getSetSize: undefined, getRole: options.accessibilityProvider.getRole ? (el) => {
                return options.accessibilityProvider.getRole(el.element);
            } : () => 'treeitem', isChecked: options.accessibilityProvider.isChecked ? (e) => {
                var _a;
                return !!((_a = options.accessibilityProvider) === null || _a === void 0 ? void 0 : _a.isChecked(e.element));
            } : undefined, getAriaLabel(e) {
                return options.accessibilityProvider.getAriaLabel(e.element);
            },
            getWidgetAriaLabel() {
                return options.accessibilityProvider.getWidgetAriaLabel();
            }, getWidgetRole: options.accessibilityProvider.getWidgetRole ? () => options.accessibilityProvider.getWidgetRole() : () => 'tree', getAriaLevel: options.accessibilityProvider.getAriaLevel && (node => {
                return options.accessibilityProvider.getAriaLevel(node.element);
            }), getActiveDescendantId: options.accessibilityProvider.getActiveDescendantId && (node => {
                return options.accessibilityProvider.getActiveDescendantId(node.element);
            }) }), filter: options.filter && {
            filter(e, parentVisibility) {
                return options.filter.filter(e.element, parentVisibility);
            }
        }, keyboardNavigationLabelProvider: options.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, options.keyboardNavigationLabelProvider), { getKeyboardNavigationLabel(e) {
                return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e.element);
            } }), sorter: undefined, expandOnlyOnTwistieClick: typeof options.expandOnlyOnTwistieClick === 'undefined' ? undefined : (typeof options.expandOnlyOnTwistieClick !== 'function' ? options.expandOnlyOnTwistieClick : (e => options.expandOnlyOnTwistieClick(e.element))), defaultFindVisibility: e => {
            if (e.hasChildren && e.stale) {
                return 1 /* TreeVisibility.Visible */;
            }
            else if (typeof options.defaultFindVisibility === 'number') {
                return options.defaultFindVisibility;
            }
            else if (typeof options.defaultFindVisibility === 'undefined') {
                return 2 /* TreeVisibility.Recurse */;
            }
            else {
                return options.defaultFindVisibility(e.element);
            }
        } });
}
function dfs(node, fn) {
    fn(node);
    node.children.forEach(child => dfs(child, fn));
}
class AsyncDataTree {
    get onDidScroll() { return this.tree.onDidScroll; }
    get onDidChangeFocus() { return _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.map(this.tree.onDidChangeFocus, asTreeEvent); }
    get onDidChangeSelection() { return _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.map(this.tree.onDidChangeSelection, asTreeEvent); }
    get onMouseDblClick() { return _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.map(this.tree.onMouseDblClick, asTreeMouseEvent); }
    get onPointer() { return _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.map(this.tree.onPointer, asTreeMouseEvent); }
    get onDidFocus() { return this.tree.onDidFocus; }
    /**
     * To be used internally only!
     * @deprecated
     */
    get onDidChangeModel() { return this.tree.onDidChangeModel; }
    get onDidChangeCollapseState() { return this.tree.onDidChangeCollapseState; }
    get onDidChangeFindOpenState() { return this.tree.onDidChangeFindOpenState; }
    get onDidDispose() { return this.tree.onDidDispose; }
    constructor(user, container, delegate, renderers, dataSource, options = {}) {
        this.user = user;
        this.dataSource = dataSource;
        this.nodes = new Map();
        this.subTreeRefreshPromises = new Map();
        this.refreshPromises = new Map();
        this._onDidRender = new _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Emitter */ .Q5();
        this._onDidChangeNodeSlowState = new _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Emitter */ .Q5();
        this.nodeMapper = new _tree_js__WEBPACK_IMPORTED_MODULE_4__/* .WeakMapper */ .VA(node => new AsyncDataTreeNodeWrapper(node));
        this.disposables = new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_11__/* .DisposableStore */ .SL();
        this.identityProvider = options.identityProvider;
        this.autoExpandSingleChildren = typeof options.autoExpandSingleChildren === 'undefined' ? false : options.autoExpandSingleChildren;
        this.sorter = options.sorter;
        this.collapseByDefault = options.collapseByDefault;
        this.tree = this.createTree(user, container, delegate, renderers, options);
        this.onDidChangeFindMode = this.tree.onDidChangeFindMode;
        this.root = createAsyncDataTreeNode({
            element: undefined,
            parent: null,
            hasChildren: true
        });
        if (this.identityProvider) {
            this.root = Object.assign(Object.assign({}, this.root), { id: null });
        }
        this.nodes.set(null, this.root);
        this.tree.onDidChangeCollapseState(this._onDidChangeCollapseState, this, this.disposables);
    }
    createTree(user, container, delegate, renderers, options) {
        const objectTreeDelegate = new _abstractTree_js__WEBPACK_IMPORTED_MODULE_1__/* .ComposedTreeDelegate */ .cz(delegate);
        const objectTreeRenderers = renderers.map(r => new AsyncDataTreeRenderer(r, this.nodeMapper, this._onDidChangeNodeSlowState.event));
        const objectTreeOptions = asObjectTreeOptions(options) || {};
        return new _objectTree_js__WEBPACK_IMPORTED_MODULE_3__/* .ObjectTree */ .H(user, container, objectTreeDelegate, objectTreeRenderers, objectTreeOptions);
    }
    updateOptions(options = {}) {
        this.tree.updateOptions(options);
    }
    // Widget
    getHTMLElement() {
        return this.tree.getHTMLElement();
    }
    get scrollTop() {
        return this.tree.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.tree.scrollTop = scrollTop;
    }
    get scrollHeight() {
        return this.tree.scrollHeight;
    }
    get renderHeight() {
        return this.tree.renderHeight;
    }
    domFocus() {
        this.tree.domFocus();
    }
    layout(height, width) {
        this.tree.layout(height, width);
    }
    style(styles) {
        this.tree.style(styles);
    }
    // Model
    getInput() {
        return this.root.element;
    }
    setInput(input, viewState) {
        return __awaiter(this, void 0, void 0, function* () {
            this.refreshPromises.forEach(promise => promise.cancel());
            this.refreshPromises.clear();
            this.root.element = input;
            const viewStateContext = viewState && { viewState, focus: [], selection: [] };
            yield this._updateChildren(input, true, false, viewStateContext);
            if (viewStateContext) {
                this.tree.setFocus(viewStateContext.focus);
                this.tree.setSelection(viewStateContext.selection);
            }
            if (viewState && typeof viewState.scrollTop === 'number') {
                this.scrollTop = viewState.scrollTop;
            }
        });
    }
    _updateChildren(element = this.root.element, recursive = true, rerender = false, viewStateContext, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.root.element === 'undefined') {
                throw new _tree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeError */ .ac(this.user, 'Tree input not set');
            }
            if (this.root.refreshPromise) {
                yield this.root.refreshPromise;
                yield _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.toPromise(this._onDidRender.event);
            }
            const node = this.getDataNode(element);
            yield this.refreshAndRenderNode(node, recursive, viewStateContext, options);
            if (rerender) {
                try {
                    this.tree.rerender(node);
                }
                catch (_a) {
                    // missing nodes are fine, this could've resulted from
                    // parallel refresh calls, removing `node` altogether
                }
            }
        });
    }
    // View
    rerender(element) {
        if (element === undefined || element === this.root.element) {
            this.tree.rerender();
            return;
        }
        const node = this.getDataNode(element);
        this.tree.rerender(node);
    }
    // Tree
    getNode(element = this.root.element) {
        const dataNode = this.getDataNode(element);
        const node = this.tree.getNode(dataNode === this.root ? null : dataNode);
        return this.nodeMapper.map(node);
    }
    collapse(element, recursive = false) {
        const node = this.getDataNode(element);
        return this.tree.collapse(node === this.root ? null : node, recursive);
    }
    expand(element, recursive = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.root.element === 'undefined') {
                throw new _tree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeError */ .ac(this.user, 'Tree input not set');
            }
            if (this.root.refreshPromise) {
                yield this.root.refreshPromise;
                yield _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.toPromise(this._onDidRender.event);
            }
            const node = this.getDataNode(element);
            if (this.tree.hasElement(node) && !this.tree.isCollapsible(node)) {
                return false;
            }
            if (node.refreshPromise) {
                yield this.root.refreshPromise;
                yield _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.toPromise(this._onDidRender.event);
            }
            if (node !== this.root && !node.refreshPromise && !this.tree.isCollapsed(node)) {
                return false;
            }
            const result = this.tree.expand(node === this.root ? null : node, recursive);
            if (node.refreshPromise) {
                yield this.root.refreshPromise;
                yield _common_event_js__WEBPACK_IMPORTED_MODULE_9__/* .Event */ .ju.toPromise(this._onDidRender.event);
            }
            return result;
        });
    }
    setSelection(elements, browserEvent) {
        const nodes = elements.map(e => this.getDataNode(e));
        this.tree.setSelection(nodes, browserEvent);
    }
    getSelection() {
        const nodes = this.tree.getSelection();
        return nodes.map(n => n.element);
    }
    setFocus(elements, browserEvent) {
        const nodes = elements.map(e => this.getDataNode(e));
        this.tree.setFocus(nodes, browserEvent);
    }
    getFocus() {
        const nodes = this.tree.getFocus();
        return nodes.map(n => n.element);
    }
    reveal(element, relativeTop) {
        this.tree.reveal(this.getDataNode(element), relativeTop);
    }
    // Tree navigation
    getParentElement(element) {
        const node = this.tree.getParentElement(this.getDataNode(element));
        return (node && node.element);
    }
    getFirstElementChild(element = this.root.element) {
        const dataNode = this.getDataNode(element);
        const node = this.tree.getFirstElementChild(dataNode === this.root ? null : dataNode);
        return (node && node.element);
    }
    // Implementation
    getDataNode(element) {
        const node = this.nodes.get((element === this.root.element ? null : element));
        if (!node) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeError */ .ac(this.user, `Data tree node not found: ${element}`);
        }
        return node;
    }
    refreshAndRenderNode(node, recursive, viewStateContext, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.refreshNode(node, recursive, viewStateContext);
            this.render(node, viewStateContext, options);
        });
    }
    refreshNode(node, recursive, viewStateContext) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            this.subTreeRefreshPromises.forEach((refreshPromise, refreshNode) => {
                if (!result && intersects(refreshNode, node)) {
                    result = refreshPromise.then(() => this.refreshNode(node, recursive, viewStateContext));
                }
            });
            if (result) {
                return result;
            }
            if (node !== this.root) {
                const treeNode = this.tree.getNode(node);
                if (treeNode.collapsed) {
                    node.hasChildren = !!this.dataSource.hasChildren(node.element);
                    node.stale = true;
                    return;
                }
            }
            return this.doRefreshSubTree(node, recursive, viewStateContext);
        });
    }
    doRefreshSubTree(node, recursive, viewStateContext) {
        return __awaiter(this, void 0, void 0, function* () {
            let done;
            node.refreshPromise = new Promise(c => done = c);
            this.subTreeRefreshPromises.set(node, node.refreshPromise);
            node.refreshPromise.finally(() => {
                node.refreshPromise = undefined;
                this.subTreeRefreshPromises.delete(node);
            });
            try {
                const childrenToRefresh = yield this.doRefreshNode(node, recursive, viewStateContext);
                node.stale = false;
                yield _common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .Promises */ .jT.settled(childrenToRefresh.map(child => this.doRefreshSubTree(child, recursive, viewStateContext)));
            }
            finally {
                done();
            }
        });
    }
    doRefreshNode(node, recursive, viewStateContext) {
        return __awaiter(this, void 0, void 0, function* () {
            node.hasChildren = !!this.dataSource.hasChildren(node.element);
            let childrenPromise;
            if (!node.hasChildren) {
                childrenPromise = Promise.resolve(_common_iterator_js__WEBPACK_IMPORTED_MODULE_10__/* .Iterable */ .$.empty());
            }
            else {
                const children = this.doGetChildren(node);
                if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_12__/* .isIterable */ .TW)(children)) {
                    childrenPromise = Promise.resolve(children);
                }
                else {
                    const slowTimeout = (0,_common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .timeout */ .Vs)(800);
                    slowTimeout.then(() => {
                        node.slow = true;
                        this._onDidChangeNodeSlowState.fire(node);
                    }, _ => null);
                    childrenPromise = children.finally(() => slowTimeout.cancel());
                }
            }
            try {
                const children = yield childrenPromise;
                return this.setChildren(node, children, recursive, viewStateContext);
            }
            catch (err) {
                if (node !== this.root && this.tree.hasElement(node)) {
                    this.tree.collapse(node);
                }
                if ((0,_common_errors_js__WEBPACK_IMPORTED_MODULE_8__/* .isCancellationError */ .n2)(err)) {
                    return [];
                }
                throw err;
            }
            finally {
                if (node.slow) {
                    node.slow = false;
                    this._onDidChangeNodeSlowState.fire(node);
                }
            }
        });
    }
    doGetChildren(node) {
        let result = this.refreshPromises.get(node);
        if (result) {
            return result;
        }
        const children = this.dataSource.getChildren(node.element);
        if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_12__/* .isIterable */ .TW)(children)) {
            return this.processChildren(children);
        }
        else {
            result = (0,_common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .createCancelablePromise */ .PG)(() => __awaiter(this, void 0, void 0, function* () { return this.processChildren(yield children); }));
            this.refreshPromises.set(node, result);
            return result.finally(() => { this.refreshPromises.delete(node); });
        }
    }
    _onDidChangeCollapseState({ node, deep }) {
        if (node.element === null) {
            return;
        }
        if (!node.collapsed && node.element.stale) {
            if (deep) {
                this.collapse(node.element.element);
            }
            else {
                this.refreshAndRenderNode(node.element, false)
                    .catch(_common_errors_js__WEBPACK_IMPORTED_MODULE_8__/* .onUnexpectedError */ .dL);
            }
        }
    }
    setChildren(node, childrenElementsIterable, recursive, viewStateContext) {
        const childrenElements = [...childrenElementsIterable];
        // perf: if the node was and still is a leaf, avoid all this hassle
        if (node.children.length === 0 && childrenElements.length === 0) {
            return [];
        }
        const nodesToForget = new Map();
        const childrenTreeNodesById = new Map();
        for (const child of node.children) {
            nodesToForget.set(child.element, child);
            if (this.identityProvider) {
                const collapsed = this.tree.isCollapsed(child);
                childrenTreeNodesById.set(child.id, { node: child, collapsed });
            }
        }
        const childrenToRefresh = [];
        const children = childrenElements.map(element => {
            const hasChildren = !!this.dataSource.hasChildren(element);
            if (!this.identityProvider) {
                const asyncDataTreeNode = createAsyncDataTreeNode({ element, parent: node, hasChildren });
                if (hasChildren && this.collapseByDefault && !this.collapseByDefault(element)) {
                    asyncDataTreeNode.collapsedByDefault = false;
                    childrenToRefresh.push(asyncDataTreeNode);
                }
                return asyncDataTreeNode;
            }
            const id = this.identityProvider.getId(element).toString();
            const result = childrenTreeNodesById.get(id);
            if (result) {
                const asyncDataTreeNode = result.node;
                nodesToForget.delete(asyncDataTreeNode.element);
                this.nodes.delete(asyncDataTreeNode.element);
                this.nodes.set(element, asyncDataTreeNode);
                asyncDataTreeNode.element = element;
                asyncDataTreeNode.hasChildren = hasChildren;
                if (recursive) {
                    if (result.collapsed) {
                        asyncDataTreeNode.children.forEach(node => dfs(node, node => this.nodes.delete(node.element)));
                        asyncDataTreeNode.children.splice(0, asyncDataTreeNode.children.length);
                        asyncDataTreeNode.stale = true;
                    }
                    else {
                        childrenToRefresh.push(asyncDataTreeNode);
                    }
                }
                else if (hasChildren && this.collapseByDefault && !this.collapseByDefault(element)) {
                    asyncDataTreeNode.collapsedByDefault = false;
                    childrenToRefresh.push(asyncDataTreeNode);
                }
                return asyncDataTreeNode;
            }
            const childAsyncDataTreeNode = createAsyncDataTreeNode({ element, parent: node, id, hasChildren });
            if (viewStateContext && viewStateContext.viewState.focus && viewStateContext.viewState.focus.indexOf(id) > -1) {
                viewStateContext.focus.push(childAsyncDataTreeNode);
            }
            if (viewStateContext && viewStateContext.viewState.selection && viewStateContext.viewState.selection.indexOf(id) > -1) {
                viewStateContext.selection.push(childAsyncDataTreeNode);
            }
            if (viewStateContext && viewStateContext.viewState.expanded && viewStateContext.viewState.expanded.indexOf(id) > -1) {
                childrenToRefresh.push(childAsyncDataTreeNode);
            }
            else if (hasChildren && this.collapseByDefault && !this.collapseByDefault(element)) {
                childAsyncDataTreeNode.collapsedByDefault = false;
                childrenToRefresh.push(childAsyncDataTreeNode);
            }
            return childAsyncDataTreeNode;
        });
        for (const node of nodesToForget.values()) {
            dfs(node, node => this.nodes.delete(node.element));
        }
        for (const child of children) {
            this.nodes.set(child.element, child);
        }
        node.children.splice(0, node.children.length, ...children);
        // TODO@joao this doesn't take filter into account
        if (node !== this.root && this.autoExpandSingleChildren && children.length === 1 && childrenToRefresh.length === 0) {
            children[0].collapsedByDefault = false;
            childrenToRefresh.push(children[0]);
        }
        return childrenToRefresh;
    }
    render(node, viewStateContext, options) {
        const children = node.children.map(node => this.asTreeElement(node, viewStateContext));
        const objectTreeOptions = options && Object.assign(Object.assign({}, options), { diffIdentityProvider: options.diffIdentityProvider && {
                getId(node) {
                    return options.diffIdentityProvider.getId(node.element);
                }
            } });
        this.tree.setChildren(node === this.root ? null : node, children, objectTreeOptions);
        if (node !== this.root) {
            this.tree.setCollapsible(node, node.hasChildren);
        }
        this._onDidRender.fire();
    }
    asTreeElement(node, viewStateContext) {
        if (node.stale) {
            return {
                element: node,
                collapsible: node.hasChildren,
                collapsed: true
            };
        }
        let collapsed;
        if (viewStateContext && viewStateContext.viewState.expanded && node.id && viewStateContext.viewState.expanded.indexOf(node.id) > -1) {
            collapsed = false;
        }
        else {
            collapsed = node.collapsedByDefault;
        }
        node.collapsedByDefault = undefined;
        return {
            element: node,
            children: node.hasChildren ? _common_iterator_js__WEBPACK_IMPORTED_MODULE_10__/* .Iterable */ .$.map(node.children, child => this.asTreeElement(child, viewStateContext)) : [],
            collapsible: node.hasChildren,
            collapsed
        };
    }
    processChildren(children) {
        if (this.sorter) {
            children = [...children].sort(this.sorter.compare.bind(this.sorter));
        }
        return children;
    }
    dispose() {
        this.disposables.dispose();
    }
}
class CompressibleAsyncDataTreeNodeWrapper {
    get element() {
        return {
            elements: this.node.element.elements.map(e => e.element),
            incompressible: this.node.element.incompressible
        };
    }
    get children() { return this.node.children.map(node => new CompressibleAsyncDataTreeNodeWrapper(node)); }
    get depth() { return this.node.depth; }
    get visibleChildrenCount() { return this.node.visibleChildrenCount; }
    get visibleChildIndex() { return this.node.visibleChildIndex; }
    get collapsible() { return this.node.collapsible; }
    get collapsed() { return this.node.collapsed; }
    get visible() { return this.node.visible; }
    get filterData() { return this.node.filterData; }
    constructor(node) {
        this.node = node;
    }
}
class CompressibleAsyncDataTreeRenderer {
    constructor(renderer, nodeMapper, compressibleNodeMapperProvider, onDidChangeTwistieState) {
        this.renderer = renderer;
        this.nodeMapper = nodeMapper;
        this.compressibleNodeMapperProvider = compressibleNodeMapperProvider;
        this.onDidChangeTwistieState = onDidChangeTwistieState;
        this.renderedNodes = new Map();
        this.disposables = [];
        this.templateId = renderer.templateId;
    }
    renderTemplate(container) {
        const templateData = this.renderer.renderTemplate(container);
        return { templateData };
    }
    renderElement(node, index, templateData, height) {
        this.renderer.renderElement(this.nodeMapper.map(node), index, templateData.templateData, height);
    }
    renderCompressedElements(node, index, templateData, height) {
        this.renderer.renderCompressedElements(this.compressibleNodeMapperProvider().map(node), index, templateData.templateData, height);
    }
    renderTwistie(element, twistieElement) {
        if (element.slow) {
            twistieElement.classList.add(..._common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassNameArray(_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.treeItemLoading));
            return true;
        }
        else {
            twistieElement.classList.remove(..._common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassNameArray(_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.treeItemLoading));
            return false;
        }
    }
    disposeElement(node, index, templateData, height) {
        var _a, _b;
        (_b = (_a = this.renderer).disposeElement) === null || _b === void 0 ? void 0 : _b.call(_a, this.nodeMapper.map(node), index, templateData.templateData, height);
    }
    disposeCompressedElements(node, index, templateData, height) {
        var _a, _b;
        (_b = (_a = this.renderer).disposeCompressedElements) === null || _b === void 0 ? void 0 : _b.call(_a, this.compressibleNodeMapperProvider().map(node), index, templateData.templateData, height);
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.templateData);
    }
    dispose() {
        this.renderedNodes.clear();
        this.disposables = (0,_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_11__/* .dispose */ .B9)(this.disposables);
    }
}
function asCompressibleObjectTreeOptions(options) {
    const objectTreeOptions = options && asObjectTreeOptions(options);
    return objectTreeOptions && Object.assign(Object.assign({}, objectTreeOptions), { keyboardNavigationLabelProvider: objectTreeOptions.keyboardNavigationLabelProvider && Object.assign(Object.assign({}, objectTreeOptions.keyboardNavigationLabelProvider), { getCompressedNodeKeyboardNavigationLabel(els) {
                return options.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(els.map(e => e.element));
            } }) });
}
class CompressibleAsyncDataTree extends AsyncDataTree {
    constructor(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, options = {}) {
        super(user, container, virtualDelegate, renderers, dataSource, options);
        this.compressionDelegate = compressionDelegate;
        this.compressibleNodeMapper = new _tree_js__WEBPACK_IMPORTED_MODULE_4__/* .WeakMapper */ .VA(node => new CompressibleAsyncDataTreeNodeWrapper(node));
        this.filter = options.filter;
    }
    createTree(user, container, delegate, renderers, options) {
        const objectTreeDelegate = new _abstractTree_js__WEBPACK_IMPORTED_MODULE_1__/* .ComposedTreeDelegate */ .cz(delegate);
        const objectTreeRenderers = renderers.map(r => new CompressibleAsyncDataTreeRenderer(r, this.nodeMapper, () => this.compressibleNodeMapper, this._onDidChangeNodeSlowState.event));
        const objectTreeOptions = asCompressibleObjectTreeOptions(options) || {};
        return new _objectTree_js__WEBPACK_IMPORTED_MODULE_3__/* .CompressibleObjectTree */ .h(user, container, objectTreeDelegate, objectTreeRenderers, objectTreeOptions);
    }
    asTreeElement(node, viewStateContext) {
        return Object.assign({ incompressible: this.compressionDelegate.isIncompressible(node.element) }, super.asTreeElement(node, viewStateContext));
    }
    updateOptions(options = {}) {
        this.tree.updateOptions(options);
    }
    render(node, viewStateContext) {
        if (!this.identityProvider) {
            return super.render(node, viewStateContext);
        }
        // Preserve traits across compressions. Hacky but does the trick.
        // This is hard to fix properly since it requires rewriting the traits
        // across trees and lists. Let's just keep it this way for now.
        const getId = (element) => this.identityProvider.getId(element).toString();
        const getUncompressedIds = (nodes) => {
            const result = new Set();
            for (const node of nodes) {
                const compressedNode = this.tree.getCompressedTreeNode(node === this.root ? null : node);
                if (!compressedNode.element) {
                    continue;
                }
                for (const node of compressedNode.element.elements) {
                    result.add(getId(node.element));
                }
            }
            return result;
        };
        const oldSelection = getUncompressedIds(this.tree.getSelection());
        const oldFocus = getUncompressedIds(this.tree.getFocus());
        super.render(node, viewStateContext);
        const selection = this.getSelection();
        let didChangeSelection = false;
        const focus = this.getFocus();
        let didChangeFocus = false;
        const visit = (node) => {
            const compressedNode = node.element;
            if (compressedNode) {
                for (let i = 0; i < compressedNode.elements.length; i++) {
                    const id = getId(compressedNode.elements[i].element);
                    const element = compressedNode.elements[compressedNode.elements.length - 1].element;
                    // github.com/microsoft/vscode/issues/85938
                    if (oldSelection.has(id) && selection.indexOf(element) === -1) {
                        selection.push(element);
                        didChangeSelection = true;
                    }
                    if (oldFocus.has(id) && focus.indexOf(element) === -1) {
                        focus.push(element);
                        didChangeFocus = true;
                    }
                }
            }
            node.children.forEach(visit);
        };
        visit(this.tree.getCompressedTreeNode(node === this.root ? null : node));
        if (didChangeSelection) {
            this.setSelection(selection);
        }
        if (didChangeFocus) {
            this.setFocus(focus);
        }
    }
    // For compressed async data trees, `TreeVisibility.Recurse` doesn't currently work
    // and we have to filter everything beforehand
    // Related to #85193 and #85835
    processChildren(children) {
        if (this.filter) {
            children = _common_iterator_js__WEBPACK_IMPORTED_MODULE_10__/* .Iterable */ .$.filter(children, e => {
                const result = this.filter.filter(e, 1 /* TreeVisibility.Visible */);
                const visibility = getVisibility(result);
                if (visibility === 2 /* TreeVisibility.Recurse */) {
                    throw new Error('Recursive tree visibility not supported in async data compressed trees');
                }
                return visibility === 1 /* TreeVisibility.Visible */;
            });
        }
        return super.processChildren(children);
    }
}
function getVisibility(filterResult) {
    if (typeof filterResult === 'boolean') {
        return filterResult ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */;
    }
    else if ((0,_indexTreeModel_js__WEBPACK_IMPORTED_MODULE_2__/* .isFilterResult */ .gB)(filterResult)) {
        return (0,_indexTreeModel_js__WEBPACK_IMPORTED_MODULE_2__/* .getVisibleState */ .aG)(filterResult.visibility);
    }
    else {
        return (0,_indexTreeModel_js__WEBPACK_IMPORTED_MODULE_2__/* .getVisibleState */ .aG)(filterResult);
    }
}


/***/ }),

/***/ 5837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ DataTree; }
/* harmony export */ });
/* harmony import */ var _abstractTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20104);
/* harmony import */ var _objectTreeModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28026);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class DataTree extends _abstractTree_js__WEBPACK_IMPORTED_MODULE_0__/* .AbstractTree */ .CH {
    constructor(user, container, delegate, renderers, dataSource, options = {}) {
        super(user, container, delegate, renderers, options);
        this.user = user;
        this.dataSource = dataSource;
        this.identityProvider = options.identityProvider;
    }
    createModel(user, view, options) {
        return new _objectTreeModel_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeModel */ .F(user, view, options);
    }
}


/***/ }),

/***/ 51488:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ IndexTreeModel; },
/* harmony export */   aG: function() { return /* binding */ getVisibleState; },
/* harmony export */   gB: function() { return /* binding */ isFilterResult; }
/* harmony export */ });
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54059);
/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25850);
/* harmony import */ var _common_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69058);
/* harmony import */ var _common_symbols_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86060);
/* harmony import */ var _common_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4673);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64720);
/* harmony import */ var _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25134);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







function isFilterResult(obj) {
    return typeof obj === 'object' && 'visibility' in obj && 'data' in obj;
}
function getVisibleState(visibility) {
    switch (visibility) {
        case true: return 1 /* TreeVisibility.Visible */;
        case false: return 0 /* TreeVisibility.Hidden */;
        default: return visibility;
    }
}
function isCollapsibleStateUpdate(update) {
    return typeof update.collapsible === 'boolean';
}
class IndexTreeModel {
    constructor(user, list, rootElement, options = {}) {
        this.user = user;
        this.list = list;
        this.rootRef = [];
        this.eventBufferer = new _common_event_js__WEBPACK_IMPORTED_MODULE_5__/* .EventBufferer */ .E7();
        this._onDidChangeCollapseState = new _common_event_js__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5();
        this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event);
        this._onDidChangeRenderNodeCount = new _common_event_js__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5();
        this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event);
        this._onDidSplice = new _common_event_js__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5();
        this.onDidSplice = this._onDidSplice.event;
        this.refilterDelayer = new _common_async_js__WEBPACK_IMPORTED_MODULE_2__/* .Delayer */ .vp(_common_symbols_js__WEBPACK_IMPORTED_MODULE_3__/* .MicrotaskDelay */ .n);
        this.collapseByDefault = typeof options.collapseByDefault === 'undefined' ? false : options.collapseByDefault;
        this.filter = options.filter;
        this.autoExpandSingleChildren = typeof options.autoExpandSingleChildren === 'undefined' ? false : options.autoExpandSingleChildren;
        this.root = {
            parent: undefined,
            element: rootElement,
            children: [],
            depth: 0,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: false,
            collapsed: false,
            renderNodeCount: 0,
            visibility: 1 /* TreeVisibility.Visible */,
            visible: true,
            filterData: undefined
        };
    }
    splice(location, deleteCount, toInsert = _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.empty(), options = {}) {
        if (location.length === 0) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_0__/* .TreeError */ .ac(this.user, 'Invalid tree location');
        }
        if (options.diffIdentityProvider) {
            this.spliceSmart(options.diffIdentityProvider, location, deleteCount, toInsert, options);
        }
        else {
            this.spliceSimple(location, deleteCount, toInsert, options);
        }
    }
    spliceSmart(identity, location, deleteCount, toInsertIterable, options, recurseLevels) {
        var _a;
        if (toInsertIterable === void 0) { toInsertIterable = _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.empty(); }
        if (recurseLevels === void 0) { recurseLevels = (_a = options.diffDepth) !== null && _a !== void 0 ? _a : 0; }
        const { parentNode } = this.getParentNodeWithListIndex(location);
        if (!parentNode.lastDiffIds) {
            return this.spliceSimple(location, deleteCount, toInsertIterable, options);
        }
        const toInsert = [...toInsertIterable];
        const index = location[location.length - 1];
        const diff = new _common_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__/* .LcsDiff */ .Hs({ getElements: () => parentNode.lastDiffIds }, {
            getElements: () => [
                ...parentNode.children.slice(0, index),
                ...toInsert,
                ...parentNode.children.slice(index + deleteCount),
            ].map(e => identity.getId(e.element).toString())
        }).ComputeDiff(false);
        // if we were given a 'best effort' diff, use default behavior
        if (diff.quitEarly) {
            parentNode.lastDiffIds = undefined;
            return this.spliceSimple(location, deleteCount, toInsert, options);
        }
        const locationPrefix = location.slice(0, -1);
        const recurseSplice = (fromOriginal, fromModified, count) => {
            if (recurseLevels > 0) {
                for (let i = 0; i < count; i++) {
                    fromOriginal--;
                    fromModified--;
                    this.spliceSmart(identity, [...locationPrefix, fromOriginal, 0], Number.MAX_SAFE_INTEGER, toInsert[fromModified].children, options, recurseLevels - 1);
                }
            }
        };
        let lastStartO = Math.min(parentNode.children.length, index + deleteCount);
        let lastStartM = toInsert.length;
        for (const change of diff.changes.sort((a, b) => b.originalStart - a.originalStart)) {
            recurseSplice(lastStartO, lastStartM, lastStartO - (change.originalStart + change.originalLength));
            lastStartO = change.originalStart;
            lastStartM = change.modifiedStart - index;
            this.spliceSimple([...locationPrefix, lastStartO], change.originalLength, _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.slice(toInsert, lastStartM, lastStartM + change.modifiedLength), options);
        }
        // at this point, startO === startM === count since any remaining prefix should match
        recurseSplice(lastStartO, lastStartM, lastStartO);
    }
    spliceSimple(location, deleteCount, toInsert = _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.empty(), { onDidCreateNode, onDidDeleteNode, diffIdentityProvider }) {
        const { parentNode, listIndex, revealed, visible } = this.getParentNodeWithListIndex(location);
        const treeListElementsToInsert = [];
        const nodesToInsertIterator = _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.map(toInsert, el => this.createTreeNode(el, parentNode, parentNode.visible ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */, revealed, treeListElementsToInsert, onDidCreateNode));
        const lastIndex = location[location.length - 1];
        const lastHadChildren = parentNode.children.length > 0;
        // figure out what's the visible child start index right before the
        // splice point
        let visibleChildStartIndex = 0;
        for (let i = lastIndex; i >= 0 && i < parentNode.children.length; i--) {
            const child = parentNode.children[i];
            if (child.visible) {
                visibleChildStartIndex = child.visibleChildIndex;
                break;
            }
        }
        const nodesToInsert = [];
        let insertedVisibleChildrenCount = 0;
        let renderNodeCount = 0;
        for (const child of nodesToInsertIterator) {
            nodesToInsert.push(child);
            renderNodeCount += child.renderNodeCount;
            if (child.visible) {
                child.visibleChildIndex = visibleChildStartIndex + insertedVisibleChildrenCount++;
            }
        }
        const deletedNodes = (0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .splice */ .db)(parentNode.children, lastIndex, deleteCount, nodesToInsert);
        if (!diffIdentityProvider) {
            parentNode.lastDiffIds = undefined;
        }
        else if (parentNode.lastDiffIds) {
            (0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .splice */ .db)(parentNode.lastDiffIds, lastIndex, deleteCount, nodesToInsert.map(n => diffIdentityProvider.getId(n.element).toString()));
        }
        else {
            parentNode.lastDiffIds = parentNode.children.map(n => diffIdentityProvider.getId(n.element).toString());
        }
        // figure out what is the count of deleted visible children
        let deletedVisibleChildrenCount = 0;
        for (const child of deletedNodes) {
            if (child.visible) {
                deletedVisibleChildrenCount++;
            }
        }
        // and adjust for all visible children after the splice point
        if (deletedVisibleChildrenCount !== 0) {
            for (let i = lastIndex + nodesToInsert.length; i < parentNode.children.length; i++) {
                const child = parentNode.children[i];
                if (child.visible) {
                    child.visibleChildIndex -= deletedVisibleChildrenCount;
                }
            }
        }
        // update parent's visible children count
        parentNode.visibleChildrenCount += insertedVisibleChildrenCount - deletedVisibleChildrenCount;
        if (revealed && visible) {
            const visibleDeleteCount = deletedNodes.reduce((r, node) => r + (node.visible ? node.renderNodeCount : 0), 0);
            this._updateAncestorsRenderNodeCount(parentNode, renderNodeCount - visibleDeleteCount);
            this.list.splice(listIndex, visibleDeleteCount, treeListElementsToInsert);
        }
        if (deletedNodes.length > 0 && onDidDeleteNode) {
            const visit = (node) => {
                onDidDeleteNode(node);
                node.children.forEach(visit);
            };
            deletedNodes.forEach(visit);
        }
        this._onDidSplice.fire({ insertedNodes: nodesToInsert, deletedNodes });
        const currentlyHasChildren = parentNode.children.length > 0;
        if (lastHadChildren !== currentlyHasChildren) {
            this.setCollapsible(location.slice(0, -1), currentlyHasChildren);
        }
        let node = parentNode;
        while (node) {
            if (node.visibility === 2 /* TreeVisibility.Recurse */) {
                // delayed to avoid excessive refiltering, see #135941
                this.refilterDelayer.trigger(() => this.refilter());
                break;
            }
            node = node.parent;
        }
    }
    rerender(location) {
        if (location.length === 0) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_0__/* .TreeError */ .ac(this.user, 'Invalid tree location');
        }
        const { node, listIndex, revealed } = this.getTreeNodeWithListIndex(location);
        if (node.visible && revealed) {
            this.list.splice(listIndex, 1, [node]);
        }
    }
    has(location) {
        return this.hasTreeNode(location);
    }
    getListIndex(location) {
        const { listIndex, visible, revealed } = this.getTreeNodeWithListIndex(location);
        return visible && revealed ? listIndex : -1;
    }
    getListRenderCount(location) {
        return this.getTreeNode(location).renderNodeCount;
    }
    isCollapsible(location) {
        return this.getTreeNode(location).collapsible;
    }
    setCollapsible(location, collapsible) {
        const node = this.getTreeNode(location);
        if (typeof collapsible === 'undefined') {
            collapsible = !node.collapsible;
        }
        const update = { collapsible };
        return this.eventBufferer.bufferEvents(() => this._setCollapseState(location, update));
    }
    isCollapsed(location) {
        return this.getTreeNode(location).collapsed;
    }
    setCollapsed(location, collapsed, recursive) {
        const node = this.getTreeNode(location);
        if (typeof collapsed === 'undefined') {
            collapsed = !node.collapsed;
        }
        const update = { collapsed, recursive: recursive || false };
        return this.eventBufferer.bufferEvents(() => this._setCollapseState(location, update));
    }
    _setCollapseState(location, update) {
        const { node, listIndex, revealed } = this.getTreeNodeWithListIndex(location);
        const result = this._setListNodeCollapseState(node, listIndex, revealed, update);
        if (node !== this.root && this.autoExpandSingleChildren && result && !isCollapsibleStateUpdate(update) && node.collapsible && !node.collapsed && !update.recursive) {
            let onlyVisibleChildIndex = -1;
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if (child.visible) {
                    if (onlyVisibleChildIndex > -1) {
                        onlyVisibleChildIndex = -1;
                        break;
                    }
                    else {
                        onlyVisibleChildIndex = i;
                    }
                }
            }
            if (onlyVisibleChildIndex > -1) {
                this._setCollapseState([...location, onlyVisibleChildIndex], update);
            }
        }
        return result;
    }
    _setListNodeCollapseState(node, listIndex, revealed, update) {
        const result = this._setNodeCollapseState(node, update, false);
        if (!revealed || !node.visible || !result) {
            return result;
        }
        const previousRenderNodeCount = node.renderNodeCount;
        const toInsert = this.updateNodeAfterCollapseChange(node);
        const deleteCount = previousRenderNodeCount - (listIndex === -1 ? 0 : 1);
        this.list.splice(listIndex + 1, deleteCount, toInsert.slice(1));
        return result;
    }
    _setNodeCollapseState(node, update, deep) {
        let result;
        if (node === this.root) {
            result = false;
        }
        else {
            if (isCollapsibleStateUpdate(update)) {
                result = node.collapsible !== update.collapsible;
                node.collapsible = update.collapsible;
            }
            else if (!node.collapsible) {
                result = false;
            }
            else {
                result = node.collapsed !== update.collapsed;
                node.collapsed = update.collapsed;
            }
            if (result) {
                this._onDidChangeCollapseState.fire({ node, deep });
            }
        }
        if (!isCollapsibleStateUpdate(update) && update.recursive) {
            for (const child of node.children) {
                result = this._setNodeCollapseState(child, update, true) || result;
            }
        }
        return result;
    }
    expandTo(location) {
        this.eventBufferer.bufferEvents(() => {
            let node = this.getTreeNode(location);
            while (node.parent) {
                node = node.parent;
                location = location.slice(0, location.length - 1);
                if (node.collapsed) {
                    this._setCollapseState(location, { collapsed: false, recursive: false });
                }
            }
        });
    }
    refilter() {
        const previousRenderNodeCount = this.root.renderNodeCount;
        const toInsert = this.updateNodeAfterFilterChange(this.root);
        this.list.splice(0, previousRenderNodeCount, toInsert);
        this.refilterDelayer.cancel();
    }
    createTreeNode(treeElement, parent, parentVisibility, revealed, treeListElements, onDidCreateNode) {
        const node = {
            parent,
            element: treeElement.element,
            children: [],
            depth: parent.depth + 1,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: typeof treeElement.collapsible === 'boolean' ? treeElement.collapsible : (typeof treeElement.collapsed !== 'undefined'),
            collapsed: typeof treeElement.collapsed === 'undefined' ? this.collapseByDefault : treeElement.collapsed,
            renderNodeCount: 1,
            visibility: 1 /* TreeVisibility.Visible */,
            visible: true,
            filterData: undefined
        };
        const visibility = this._filterNode(node, parentVisibility);
        node.visibility = visibility;
        if (revealed) {
            treeListElements.push(node);
        }
        const childElements = treeElement.children || _common_iterator_js__WEBPACK_IMPORTED_MODULE_6__/* .Iterable */ .$.empty();
        const childRevealed = revealed && visibility !== 0 /* TreeVisibility.Hidden */ && !node.collapsed;
        let visibleChildrenCount = 0;
        let renderNodeCount = 1;
        for (const el of childElements) {
            const child = this.createTreeNode(el, node, visibility, childRevealed, treeListElements, onDidCreateNode);
            node.children.push(child);
            renderNodeCount += child.renderNodeCount;
            if (child.visible) {
                child.visibleChildIndex = visibleChildrenCount++;
            }
        }
        node.collapsible = node.collapsible || node.children.length > 0;
        node.visibleChildrenCount = visibleChildrenCount;
        node.visible = visibility === 2 /* TreeVisibility.Recurse */ ? visibleChildrenCount > 0 : (visibility === 1 /* TreeVisibility.Visible */);
        if (!node.visible) {
            node.renderNodeCount = 0;
            if (revealed) {
                treeListElements.pop();
            }
        }
        else if (!node.collapsed) {
            node.renderNodeCount = renderNodeCount;
        }
        onDidCreateNode === null || onDidCreateNode === void 0 ? void 0 : onDidCreateNode(node);
        return node;
    }
    updateNodeAfterCollapseChange(node) {
        const previousRenderNodeCount = node.renderNodeCount;
        const result = [];
        this._updateNodeAfterCollapseChange(node, result);
        this._updateAncestorsRenderNodeCount(node.parent, result.length - previousRenderNodeCount);
        return result;
    }
    _updateNodeAfterCollapseChange(node, result) {
        if (node.visible === false) {
            return 0;
        }
        result.push(node);
        node.renderNodeCount = 1;
        if (!node.collapsed) {
            for (const child of node.children) {
                node.renderNodeCount += this._updateNodeAfterCollapseChange(child, result);
            }
        }
        this._onDidChangeRenderNodeCount.fire(node);
        return node.renderNodeCount;
    }
    updateNodeAfterFilterChange(node) {
        const previousRenderNodeCount = node.renderNodeCount;
        const result = [];
        this._updateNodeAfterFilterChange(node, node.visible ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */, result);
        this._updateAncestorsRenderNodeCount(node.parent, result.length - previousRenderNodeCount);
        return result;
    }
    _updateNodeAfterFilterChange(node, parentVisibility, result, revealed = true) {
        let visibility;
        if (node !== this.root) {
            visibility = this._filterNode(node, parentVisibility);
            if (visibility === 0 /* TreeVisibility.Hidden */) {
                node.visible = false;
                node.renderNodeCount = 0;
                return false;
            }
            if (revealed) {
                result.push(node);
            }
        }
        const resultStartLength = result.length;
        node.renderNodeCount = node === this.root ? 0 : 1;
        let hasVisibleDescendants = false;
        if (!node.collapsed || visibility !== 0 /* TreeVisibility.Hidden */) {
            let visibleChildIndex = 0;
            for (const child of node.children) {
                hasVisibleDescendants = this._updateNodeAfterFilterChange(child, visibility, result, revealed && !node.collapsed) || hasVisibleDescendants;
                if (child.visible) {
                    child.visibleChildIndex = visibleChildIndex++;
                }
            }
            node.visibleChildrenCount = visibleChildIndex;
        }
        else {
            node.visibleChildrenCount = 0;
        }
        if (node !== this.root) {
            node.visible = visibility === 2 /* TreeVisibility.Recurse */ ? hasVisibleDescendants : (visibility === 1 /* TreeVisibility.Visible */);
            node.visibility = visibility;
        }
        if (!node.visible) {
            node.renderNodeCount = 0;
            if (revealed) {
                result.pop();
            }
        }
        else if (!node.collapsed) {
            node.renderNodeCount += result.length - resultStartLength;
        }
        this._onDidChangeRenderNodeCount.fire(node);
        return node.visible;
    }
    _updateAncestorsRenderNodeCount(node, diff) {
        if (diff === 0) {
            return;
        }
        while (node) {
            node.renderNodeCount += diff;
            this._onDidChangeRenderNodeCount.fire(node);
            node = node.parent;
        }
    }
    _filterNode(node, parentVisibility) {
        const result = this.filter ? this.filter.filter(node.element, parentVisibility) : 1 /* TreeVisibility.Visible */;
        if (typeof result === 'boolean') {
            node.filterData = undefined;
            return result ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */;
        }
        else if (isFilterResult(result)) {
            node.filterData = result.data;
            return getVisibleState(result.visibility);
        }
        else {
            node.filterData = undefined;
            return getVisibleState(result);
        }
    }
    // cheap
    hasTreeNode(location, node = this.root) {
        if (!location || location.length === 0) {
            return true;
        }
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            return false;
        }
        return this.hasTreeNode(rest, node.children[index]);
    }
    // cheap
    getTreeNode(location, node = this.root) {
        if (!location || location.length === 0) {
            return node;
        }
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_0__/* .TreeError */ .ac(this.user, 'Invalid tree location');
        }
        return this.getTreeNode(rest, node.children[index]);
    }
    // expensive
    getTreeNodeWithListIndex(location) {
        if (location.length === 0) {
            return { node: this.root, listIndex: -1, revealed: true, visible: false };
        }
        const { parentNode, listIndex, revealed, visible } = this.getParentNodeWithListIndex(location);
        const index = location[location.length - 1];
        if (index < 0 || index > parentNode.children.length) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_0__/* .TreeError */ .ac(this.user, 'Invalid tree location');
        }
        const node = parentNode.children[index];
        return { node, listIndex, revealed, visible: visible && node.visible };
    }
    getParentNodeWithListIndex(location, node = this.root, listIndex = 0, revealed = true, visible = true) {
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_0__/* .TreeError */ .ac(this.user, 'Invalid tree location');
        }
        // TODO@joao perf!
        for (let i = 0; i < index; i++) {
            listIndex += node.children[i].renderNodeCount;
        }
        revealed = revealed && !node.collapsed;
        visible = visible && node.visible;
        if (rest.length === 0) {
            return { parentNode: node, listIndex, revealed, visible };
        }
        return this.getParentNodeWithListIndex(rest, node.children[index], listIndex + 1, revealed, visible);
    }
    getNode(location = []) {
        return this.getTreeNode(location);
    }
    // TODO@joao perf!
    getNodeLocation(node) {
        const location = [];
        let indexTreeNode = node; // typing woes
        while (indexTreeNode.parent) {
            location.push(indexTreeNode.parent.children.indexOf(indexTreeNode));
            indexTreeNode = indexTreeNode.parent;
        }
        return location.reverse();
    }
    getParentNodeLocation(location) {
        if (location.length === 0) {
            return undefined;
        }
        else if (location.length === 1) {
            return [];
        }
        else {
            return (0,_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .tail2 */ .JH)(location)[0];
        }
    }
    getFirstElementChild(location) {
        const node = this.getTreeNode(location);
        if (node.children.length === 0) {
            return undefined;
        }
        return node.children[0].element;
    }
}


/***/ }),

/***/ 13689:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: function() { return /* binding */ CompressibleObjectTree; },
  H: function() { return /* binding */ ObjectTree; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/abstractTree.js + 1 modules
var abstractTree = __webpack_require__(20104);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTreeModel.js
var objectTreeModel = __webpack_require__(28026);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/tree.js
var tree = __webpack_require__(54059);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/iterator.js
var iterator = __webpack_require__(25134);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/compressedObjectTreeModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





function noCompress(element) {
    const elements = [element.element];
    const incompressible = element.incompressible || false;
    return {
        element: { elements, incompressible },
        children: iterator/* Iterable */.$.map(iterator/* Iterable */.$.from(element.children), noCompress),
        collapsible: element.collapsible,
        collapsed: element.collapsed
    };
}
// Exported only for test reasons, do not use directly
function compress(element) {
    const elements = [element.element];
    const incompressible = element.incompressible || false;
    let childrenIterator;
    let children;
    while (true) {
        [children, childrenIterator] = iterator/* Iterable */.$.consume(iterator/* Iterable */.$.from(element.children), 2);
        if (children.length !== 1) {
            break;
        }
        if (children[0].incompressible) {
            break;
        }
        element = children[0];
        elements.push(element.element);
    }
    return {
        element: { elements, incompressible },
        children: iterator/* Iterable */.$.map(iterator/* Iterable */.$.concat(children, childrenIterator), compress),
        collapsible: element.collapsible,
        collapsed: element.collapsed
    };
}
function _decompress(element, index = 0) {
    let children;
    if (index < element.element.elements.length - 1) {
        children = [_decompress(element, index + 1)];
    }
    else {
        children = iterator/* Iterable */.$.map(iterator/* Iterable */.$.from(element.children), el => _decompress(el, 0));
    }
    if (index === 0 && element.element.incompressible) {
        return {
            element: element.element.elements[index],
            children,
            incompressible: true,
            collapsible: element.collapsible,
            collapsed: element.collapsed
        };
    }
    return {
        element: element.element.elements[index],
        children,
        collapsible: element.collapsible,
        collapsed: element.collapsed
    };
}
// Exported only for test reasons, do not use directly
function decompress(element) {
    return _decompress(element, 0);
}
function splice(treeElement, element, children) {
    if (treeElement.element === element) {
        return Object.assign(Object.assign({}, treeElement), { children });
    }
    return Object.assign(Object.assign({}, treeElement), { children: iterator/* Iterable */.$.map(iterator/* Iterable */.$.from(treeElement.children), e => splice(e, element, children)) });
}
const wrapIdentityProvider = (base) => ({
    getId(node) {
        return node.elements.map(e => base.getId(e).toString()).join('\0');
    }
});
// Exported only for test reasons, do not use directly
class CompressedObjectTreeModel {
    get onDidSplice() { return this.model.onDidSplice; }
    get onDidChangeCollapseState() { return this.model.onDidChangeCollapseState; }
    get onDidChangeRenderNodeCount() { return this.model.onDidChangeRenderNodeCount; }
    constructor(user, list, options = {}) {
        this.user = user;
        this.rootRef = null;
        this.nodes = new Map();
        this.model = new objectTreeModel/* ObjectTreeModel */.F(user, list, options);
        this.enabled = typeof options.compressionEnabled === 'undefined' ? true : options.compressionEnabled;
        this.identityProvider = options.identityProvider;
    }
    setChildren(element, children = iterator/* Iterable */.$.empty(), options) {
        // Diffs must be deep, since the compression can affect nested elements.
        // @see https://github.com/microsoft/vscode/pull/114237#issuecomment-759425034
        const diffIdentityProvider = options.diffIdentityProvider && wrapIdentityProvider(options.diffIdentityProvider);
        if (element === null) {
            const compressedChildren = iterator/* Iterable */.$.map(children, this.enabled ? compress : noCompress);
            this._setChildren(null, compressedChildren, { diffIdentityProvider, diffDepth: Infinity });
            return;
        }
        const compressedNode = this.nodes.get(element);
        if (!compressedNode) {
            throw new tree/* TreeError */.ac(this.user, 'Unknown compressed tree node');
        }
        const node = this.model.getNode(compressedNode);
        const compressedParentNode = this.model.getParentNodeLocation(compressedNode);
        const parent = this.model.getNode(compressedParentNode);
        const decompressedElement = decompress(node);
        const splicedElement = splice(decompressedElement, element, children);
        const recompressedElement = (this.enabled ? compress : noCompress)(splicedElement);
        // If the recompressed node is identical to the original, just set its children.
        // Saves work and churn diffing the parent element.
        const elementComparator = options.diffIdentityProvider
            ? ((a, b) => options.diffIdentityProvider.getId(a) === options.diffIdentityProvider.getId(b))
            : undefined;
        if ((0,arrays/* equals */.fS)(recompressedElement.element.elements, node.element.elements, elementComparator)) {
            this._setChildren(compressedNode, recompressedElement.children || iterator/* Iterable */.$.empty(), { diffIdentityProvider, diffDepth: 1 });
            return;
        }
        const parentChildren = parent.children
            .map(child => child === node ? recompressedElement : child);
        this._setChildren(parent.element, parentChildren, {
            diffIdentityProvider,
            diffDepth: node.depth - parent.depth,
        });
    }
    setCompressionEnabled(enabled) {
        if (enabled === this.enabled) {
            return;
        }
        this.enabled = enabled;
        const root = this.model.getNode();
        const rootChildren = root.children;
        const decompressedRootChildren = iterator/* Iterable */.$.map(rootChildren, decompress);
        const recompressedRootChildren = iterator/* Iterable */.$.map(decompressedRootChildren, enabled ? compress : noCompress);
        // it should be safe to always use deep diff mode here if an identity
        // provider is available, since we know the raw nodes are unchanged.
        this._setChildren(null, recompressedRootChildren, {
            diffIdentityProvider: this.identityProvider,
            diffDepth: Infinity,
        });
    }
    _setChildren(node, children, options) {
        const insertedElements = new Set();
        const onDidCreateNode = (node) => {
            for (const element of node.element.elements) {
                insertedElements.add(element);
                this.nodes.set(element, node.element);
            }
        };
        const onDidDeleteNode = (node) => {
            for (const element of node.element.elements) {
                if (!insertedElements.has(element)) {
                    this.nodes.delete(element);
                }
            }
        };
        this.model.setChildren(node, children, Object.assign(Object.assign({}, options), { onDidCreateNode, onDidDeleteNode }));
    }
    has(element) {
        return this.nodes.has(element);
    }
    getListIndex(location) {
        const node = this.getCompressedNode(location);
        return this.model.getListIndex(node);
    }
    getListRenderCount(location) {
        const node = this.getCompressedNode(location);
        return this.model.getListRenderCount(node);
    }
    getNode(location) {
        if (typeof location === 'undefined') {
            return this.model.getNode();
        }
        const node = this.getCompressedNode(location);
        return this.model.getNode(node);
    }
    // TODO: review this
    getNodeLocation(node) {
        const compressedNode = this.model.getNodeLocation(node);
        if (compressedNode === null) {
            return null;
        }
        return compressedNode.elements[compressedNode.elements.length - 1];
    }
    // TODO: review this
    getParentNodeLocation(location) {
        const compressedNode = this.getCompressedNode(location);
        const parentNode = this.model.getParentNodeLocation(compressedNode);
        if (parentNode === null) {
            return null;
        }
        return parentNode.elements[parentNode.elements.length - 1];
    }
    getFirstElementChild(location) {
        const compressedNode = this.getCompressedNode(location);
        return this.model.getFirstElementChild(compressedNode);
    }
    isCollapsible(location) {
        const compressedNode = this.getCompressedNode(location);
        return this.model.isCollapsible(compressedNode);
    }
    setCollapsible(location, collapsible) {
        const compressedNode = this.getCompressedNode(location);
        return this.model.setCollapsible(compressedNode, collapsible);
    }
    isCollapsed(location) {
        const compressedNode = this.getCompressedNode(location);
        return this.model.isCollapsed(compressedNode);
    }
    setCollapsed(location, collapsed, recursive) {
        const compressedNode = this.getCompressedNode(location);
        return this.model.setCollapsed(compressedNode, collapsed, recursive);
    }
    expandTo(location) {
        const compressedNode = this.getCompressedNode(location);
        this.model.expandTo(compressedNode);
    }
    rerender(location) {
        const compressedNode = this.getCompressedNode(location);
        this.model.rerender(compressedNode);
    }
    refilter() {
        this.model.refilter();
    }
    getCompressedNode(element) {
        if (element === null) {
            return null;
        }
        const node = this.nodes.get(element);
        if (!node) {
            throw new tree/* TreeError */.ac(this.user, `Tree element not found: ${element}`);
        }
        return node;
    }
}
const DefaultElementMapper = elements => elements[elements.length - 1];
class CompressedTreeNodeWrapper {
    get element() { return this.node.element === null ? null : this.unwrapper(this.node.element); }
    get children() { return this.node.children.map(node => new CompressedTreeNodeWrapper(this.unwrapper, node)); }
    get depth() { return this.node.depth; }
    get visibleChildrenCount() { return this.node.visibleChildrenCount; }
    get visibleChildIndex() { return this.node.visibleChildIndex; }
    get collapsible() { return this.node.collapsible; }
    get collapsed() { return this.node.collapsed; }
    get visible() { return this.node.visible; }
    get filterData() { return this.node.filterData; }
    constructor(unwrapper, node) {
        this.unwrapper = unwrapper;
        this.node = node;
    }
}
function mapList(nodeMapper, list) {
    return {
        splice(start, deleteCount, toInsert) {
            list.splice(start, deleteCount, toInsert.map(node => nodeMapper.map(node)));
        },
        updateElementHeight(index, height) {
            list.updateElementHeight(index, height);
        }
    };
}
function mapOptions(compressedNodeUnwrapper, options) {
    return Object.assign(Object.assign({}, options), { identityProvider: options.identityProvider && {
            getId(node) {
                return options.identityProvider.getId(compressedNodeUnwrapper(node));
            }
        }, sorter: options.sorter && {
            compare(node, otherNode) {
                return options.sorter.compare(node.elements[0], otherNode.elements[0]);
            }
        }, filter: options.filter && {
            filter(node, parentVisibility) {
                return options.filter.filter(compressedNodeUnwrapper(node), parentVisibility);
            }
        } });
}
class CompressibleObjectTreeModel {
    get onDidSplice() {
        return common_event/* Event */.ju.map(this.model.onDidSplice, ({ insertedNodes, deletedNodes }) => ({
            insertedNodes: insertedNodes.map(node => this.nodeMapper.map(node)),
            deletedNodes: deletedNodes.map(node => this.nodeMapper.map(node)),
        }));
    }
    get onDidChangeCollapseState() {
        return common_event/* Event */.ju.map(this.model.onDidChangeCollapseState, ({ node, deep }) => ({
            node: this.nodeMapper.map(node),
            deep
        }));
    }
    get onDidChangeRenderNodeCount() {
        return common_event/* Event */.ju.map(this.model.onDidChangeRenderNodeCount, node => this.nodeMapper.map(node));
    }
    constructor(user, list, options = {}) {
        this.rootRef = null;
        this.elementMapper = options.elementMapper || DefaultElementMapper;
        const compressedNodeUnwrapper = node => this.elementMapper(node.elements);
        this.nodeMapper = new tree/* WeakMapper */.VA(node => new CompressedTreeNodeWrapper(compressedNodeUnwrapper, node));
        this.model = new CompressedObjectTreeModel(user, mapList(this.nodeMapper, list), mapOptions(compressedNodeUnwrapper, options));
    }
    setChildren(element, children = iterator/* Iterable */.$.empty(), options = {}) {
        this.model.setChildren(element, children, options);
    }
    setCompressionEnabled(enabled) {
        this.model.setCompressionEnabled(enabled);
    }
    has(location) {
        return this.model.has(location);
    }
    getListIndex(location) {
        return this.model.getListIndex(location);
    }
    getListRenderCount(location) {
        return this.model.getListRenderCount(location);
    }
    getNode(location) {
        return this.nodeMapper.map(this.model.getNode(location));
    }
    getNodeLocation(node) {
        return node.element;
    }
    getParentNodeLocation(location) {
        return this.model.getParentNodeLocation(location);
    }
    getFirstElementChild(location) {
        const result = this.model.getFirstElementChild(location);
        if (result === null || typeof result === 'undefined') {
            return result;
        }
        return this.elementMapper(result.elements);
    }
    isCollapsible(location) {
        return this.model.isCollapsible(location);
    }
    setCollapsible(location, collapsed) {
        return this.model.setCollapsible(location, collapsed);
    }
    isCollapsed(location) {
        return this.model.isCollapsed(location);
    }
    setCollapsed(location, collapsed, recursive) {
        return this.model.setCollapsed(location, collapsed, recursive);
    }
    expandTo(location) {
        return this.model.expandTo(location);
    }
    rerender(location) {
        return this.model.rerender(location);
    }
    refilter() {
        return this.model.refilter();
    }
    getCompressedTreeNode(location = null) {
        return this.model.getNode(location);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/decorators.js
var decorators = __webpack_require__(84338);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/ui/tree/objectTree.js
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





class ObjectTree extends abstractTree/* AbstractTree */.CH {
    get onDidChangeCollapseState() { return this.model.onDidChangeCollapseState; }
    constructor(user, container, delegate, renderers, options = {}) {
        super(user, container, delegate, renderers, options);
        this.user = user;
    }
    setChildren(element, children = iterator/* Iterable */.$.empty(), options) {
        this.model.setChildren(element, children, options);
    }
    rerender(element) {
        if (element === undefined) {
            this.view.rerender();
            return;
        }
        this.model.rerender(element);
    }
    hasElement(element) {
        return this.model.has(element);
    }
    createModel(user, view, options) {
        return new objectTreeModel/* ObjectTreeModel */.F(user, view, options);
    }
}
class CompressibleRenderer {
    get compressedTreeNodeProvider() {
        return this._compressedTreeNodeProvider();
    }
    constructor(_compressedTreeNodeProvider, renderer) {
        this._compressedTreeNodeProvider = _compressedTreeNodeProvider;
        this.renderer = renderer;
        this.templateId = renderer.templateId;
        if (renderer.onDidChangeTwistieState) {
            this.onDidChangeTwistieState = renderer.onDidChangeTwistieState;
        }
    }
    renderTemplate(container) {
        const data = this.renderer.renderTemplate(container);
        return { compressedTreeNode: undefined, data };
    }
    renderElement(node, index, templateData, height) {
        const compressedTreeNode = this.compressedTreeNodeProvider.getCompressedTreeNode(node.element);
        if (compressedTreeNode.element.elements.length === 1) {
            templateData.compressedTreeNode = undefined;
            this.renderer.renderElement(node, index, templateData.data, height);
        }
        else {
            templateData.compressedTreeNode = compressedTreeNode;
            this.renderer.renderCompressedElements(compressedTreeNode, index, templateData.data, height);
        }
    }
    disposeElement(node, index, templateData, height) {
        var _a, _b, _c, _d;
        if (templateData.compressedTreeNode) {
            (_b = (_a = this.renderer).disposeCompressedElements) === null || _b === void 0 ? void 0 : _b.call(_a, templateData.compressedTreeNode, index, templateData.data, height);
        }
        else {
            (_d = (_c = this.renderer).disposeElement) === null || _d === void 0 ? void 0 : _d.call(_c, node, index, templateData.data, height);
        }
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.data);
    }
    renderTwistie(element, twistieElement) {
        if (this.renderer.renderTwistie) {
            return this.renderer.renderTwistie(element, twistieElement);
        }
        return false;
    }
}
__decorate([
    decorators/* memoize */.H
], CompressibleRenderer.prototype, "compressedTreeNodeProvider", null);
function asObjectTreeOptions(compressedTreeNodeProvider, options) {
    return options && Object.assign(Object.assign({}, options), { keyboardNavigationLabelProvider: options.keyboardNavigationLabelProvider && {
            getKeyboardNavigationLabel(e) {
                let compressedTreeNode;
                try {
                    compressedTreeNode = compressedTreeNodeProvider().getCompressedTreeNode(e);
                }
                catch (_a) {
                    return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e);
                }
                if (compressedTreeNode.element.elements.length === 1) {
                    return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e);
                }
                else {
                    return options.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(compressedTreeNode.element.elements);
                }
            }
        } });
}
class CompressibleObjectTree extends ObjectTree {
    constructor(user, container, delegate, renderers, options = {}) {
        const compressedTreeNodeProvider = () => this;
        const compressibleRenderers = renderers.map(r => new CompressibleRenderer(compressedTreeNodeProvider, r));
        super(user, container, delegate, compressibleRenderers, asObjectTreeOptions(compressedTreeNodeProvider, options));
    }
    setChildren(element, children = iterator/* Iterable */.$.empty(), options) {
        this.model.setChildren(element, children, options);
    }
    createModel(user, view, options) {
        return new CompressibleObjectTreeModel(user, view, options);
    }
    updateOptions(optionsUpdate = {}) {
        super.updateOptions(optionsUpdate);
        if (typeof optionsUpdate.compressionEnabled !== 'undefined') {
            this.model.setCompressionEnabled(optionsUpdate.compressionEnabled);
        }
    }
    getCompressedTreeNode(element = null) {
        return this.model.getCompressedTreeNode(element);
    }
}


/***/ }),

/***/ 28026:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ ObjectTreeModel; }
/* harmony export */ });
/* harmony import */ var _indexTreeModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51488);
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54059);
/* harmony import */ var _common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25134);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class ObjectTreeModel {
    constructor(user, list, options = {}) {
        this.user = user;
        this.rootRef = null;
        this.nodes = new Map();
        this.nodesByIdentity = new Map();
        this.model = new _indexTreeModel_js__WEBPACK_IMPORTED_MODULE_0__/* .IndexTreeModel */ .X(user, list, null, options);
        this.onDidSplice = this.model.onDidSplice;
        this.onDidChangeCollapseState = this.model.onDidChangeCollapseState;
        this.onDidChangeRenderNodeCount = this.model.onDidChangeRenderNodeCount;
        if (options.sorter) {
            this.sorter = {
                compare(a, b) {
                    return options.sorter.compare(a.element, b.element);
                }
            };
        }
        this.identityProvider = options.identityProvider;
    }
    setChildren(element, children = _common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.empty(), options = {}) {
        const location = this.getElementLocation(element);
        this._setChildren(location, this.preserveCollapseState(children), options);
    }
    _setChildren(location, children = _common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.empty(), options) {
        const insertedElements = new Set();
        const insertedElementIds = new Set();
        const onDidCreateNode = (node) => {
            var _a;
            if (node.element === null) {
                return;
            }
            const tnode = node;
            insertedElements.add(tnode.element);
            this.nodes.set(tnode.element, tnode);
            if (this.identityProvider) {
                const id = this.identityProvider.getId(tnode.element).toString();
                insertedElementIds.add(id);
                this.nodesByIdentity.set(id, tnode);
            }
            (_a = options.onDidCreateNode) === null || _a === void 0 ? void 0 : _a.call(options, tnode);
        };
        const onDidDeleteNode = (node) => {
            var _a;
            if (node.element === null) {
                return;
            }
            const tnode = node;
            if (!insertedElements.has(tnode.element)) {
                this.nodes.delete(tnode.element);
            }
            if (this.identityProvider) {
                const id = this.identityProvider.getId(tnode.element).toString();
                if (!insertedElementIds.has(id)) {
                    this.nodesByIdentity.delete(id);
                }
            }
            (_a = options.onDidDeleteNode) === null || _a === void 0 ? void 0 : _a.call(options, tnode);
        };
        this.model.splice([...location, 0], Number.MAX_VALUE, children, Object.assign(Object.assign({}, options), { onDidCreateNode, onDidDeleteNode }));
    }
    preserveCollapseState(elements = _common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.empty()) {
        if (this.sorter) {
            elements = [...elements].sort(this.sorter.compare.bind(this.sorter));
        }
        return _common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.map(elements, treeElement => {
            let node = this.nodes.get(treeElement.element);
            if (!node && this.identityProvider) {
                const id = this.identityProvider.getId(treeElement.element).toString();
                node = this.nodesByIdentity.get(id);
            }
            if (!node) {
                let collapsed;
                if (typeof treeElement.collapsed === 'undefined') {
                    collapsed = undefined;
                }
                else if (treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.Collapsed || treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.PreserveOrCollapsed) {
                    collapsed = true;
                }
                else if (treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.Expanded || treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.PreserveOrExpanded) {
                    collapsed = false;
                }
                else {
                    collapsed = Boolean(treeElement.collapsed);
                }
                return Object.assign(Object.assign({}, treeElement), { children: this.preserveCollapseState(treeElement.children), collapsed });
            }
            const collapsible = typeof treeElement.collapsible === 'boolean' ? treeElement.collapsible : node.collapsible;
            let collapsed;
            if (typeof treeElement.collapsed === 'undefined' || treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.PreserveOrCollapsed || treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.PreserveOrExpanded) {
                collapsed = node.collapsed;
            }
            else if (treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.Collapsed) {
                collapsed = true;
            }
            else if (treeElement.collapsed === _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .ObjectTreeElementCollapseState */ .kn.Expanded) {
                collapsed = false;
            }
            else {
                collapsed = Boolean(treeElement.collapsed);
            }
            return Object.assign(Object.assign({}, treeElement), { collapsible,
                collapsed, children: this.preserveCollapseState(treeElement.children) });
        });
    }
    rerender(element) {
        const location = this.getElementLocation(element);
        this.model.rerender(location);
    }
    getFirstElementChild(ref = null) {
        const location = this.getElementLocation(ref);
        return this.model.getFirstElementChild(location);
    }
    has(element) {
        return this.nodes.has(element);
    }
    getListIndex(element) {
        const location = this.getElementLocation(element);
        return this.model.getListIndex(location);
    }
    getListRenderCount(element) {
        const location = this.getElementLocation(element);
        return this.model.getListRenderCount(location);
    }
    isCollapsible(element) {
        const location = this.getElementLocation(element);
        return this.model.isCollapsible(location);
    }
    setCollapsible(element, collapsible) {
        const location = this.getElementLocation(element);
        return this.model.setCollapsible(location, collapsible);
    }
    isCollapsed(element) {
        const location = this.getElementLocation(element);
        return this.model.isCollapsed(location);
    }
    setCollapsed(element, collapsed, recursive) {
        const location = this.getElementLocation(element);
        return this.model.setCollapsed(location, collapsed, recursive);
    }
    expandTo(element) {
        const location = this.getElementLocation(element);
        this.model.expandTo(location);
    }
    refilter() {
        this.model.refilter();
    }
    getNode(element = null) {
        if (element === null) {
            return this.model.getNode(this.model.rootRef);
        }
        const node = this.nodes.get(element);
        if (!node) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .TreeError */ .ac(this.user, `Tree element not found: ${element}`);
        }
        return node;
    }
    getNodeLocation(node) {
        return node.element;
    }
    getParentNodeLocation(element) {
        if (element === null) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .TreeError */ .ac(this.user, `Invalid getParentNodeLocation call`);
        }
        const node = this.nodes.get(element);
        if (!node) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .TreeError */ .ac(this.user, `Tree element not found: ${element}`);
        }
        const location = this.model.getNodeLocation(node);
        const parentLocation = this.model.getParentNodeLocation(location);
        const parent = this.model.getNode(parentLocation);
        return parent.element;
    }
    getElementLocation(element) {
        if (element === null) {
            return [];
        }
        const node = this.nodes.get(element);
        if (!node) {
            throw new _tree_js__WEBPACK_IMPORTED_MODULE_1__/* .TreeError */ .ac(this.user, `Tree element not found: ${element}`);
        }
        return this.model.getNodeLocation(node);
    }
}


/***/ }),

/***/ 54059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VA: function() { return /* binding */ WeakMapper; },
/* harmony export */   ac: function() { return /* binding */ TreeError; },
/* harmony export */   kn: function() { return /* binding */ ObjectTreeElementCollapseState; },
/* harmony export */   sD: function() { return /* binding */ TreeMouseEventTarget; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ObjectTreeElementCollapseState;
(function (ObjectTreeElementCollapseState) {
    ObjectTreeElementCollapseState[ObjectTreeElementCollapseState["Expanded"] = 0] = "Expanded";
    ObjectTreeElementCollapseState[ObjectTreeElementCollapseState["Collapsed"] = 1] = "Collapsed";
    /**
     * If the element is already in the tree, preserve its current state. Else, expand it.
     */
    ObjectTreeElementCollapseState[ObjectTreeElementCollapseState["PreserveOrExpanded"] = 2] = "PreserveOrExpanded";
    /**
     * If the element is already in the tree, preserve its current state. Else, collapse it.
     */
    ObjectTreeElementCollapseState[ObjectTreeElementCollapseState["PreserveOrCollapsed"] = 3] = "PreserveOrCollapsed";
})(ObjectTreeElementCollapseState || (ObjectTreeElementCollapseState = {}));
var TreeMouseEventTarget;
(function (TreeMouseEventTarget) {
    TreeMouseEventTarget[TreeMouseEventTarget["Unknown"] = 0] = "Unknown";
    TreeMouseEventTarget[TreeMouseEventTarget["Twistie"] = 1] = "Twistie";
    TreeMouseEventTarget[TreeMouseEventTarget["Element"] = 2] = "Element";
    TreeMouseEventTarget[TreeMouseEventTarget["Filter"] = 3] = "Filter";
})(TreeMouseEventTarget || (TreeMouseEventTarget = {}));
class TreeError extends Error {
    constructor(user, message) {
        super(`TreeError [${user}] ${message}`);
    }
}
class WeakMapper {
    constructor(fn) {
        this.fn = fn;
        this._map = new WeakMap();
    }
    map(key) {
        let result = this._map.get(key);
        if (!result) {
            result = this.fn(key);
            this._map.set(key, result);
        }
        return result;
    }
}


/***/ }),

/***/ 71308:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ Widget; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44767);
/* harmony import */ var _mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45394);
/* harmony import */ var _touch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43765);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26794);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class Widget extends _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .Disposable */ .JT {
    onclick(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.CLICK, (e) => listener(new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__/* .StandardMouseEvent */ .n(e))));
    }
    onmousedown(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_DOWN, (e) => listener(new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__/* .StandardMouseEvent */ .n(e))));
    }
    onmouseover(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_OVER, (e) => listener(new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__/* .StandardMouseEvent */ .n(e))));
    }
    onmouseleave(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_LEAVE, (e) => listener(new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__/* .StandardMouseEvent */ .n(e))));
    }
    onkeydown(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.KEY_DOWN, (e) => listener(new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_1__/* .StandardKeyboardEvent */ .y(e))));
    }
    onkeyup(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.KEY_UP, (e) => listener(new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_1__/* .StandardKeyboardEvent */ .y(e))));
    }
    oninput(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.INPUT, listener));
    }
    onblur(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.BLUR, listener));
    }
    onfocus(domNode, listener) {
        this._register(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(domNode, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.FOCUS, listener));
    }
    ignoreGesture(domNode) {
        return _touch_js__WEBPACK_IMPORTED_MODULE_3__/* .Gesture */ .o.ignoreTarget(domNode);
    }
}


/***/ })

}]);