"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-8e452b37"],{

/***/ 39155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-link {\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-link:hover {\n\tcolor: var(--vscode-textLink-activeForeground);\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 24924:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ MarkerService; }
/* harmony export */ });
/* unused harmony export unsupportedSchemas */
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64202);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17795);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11966);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56946);
/* harmony import */ var _markers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74591);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const unsupportedSchemas = new Set([_base_common_network_js__WEBPACK_IMPORTED_MODULE_4__/* .Schemas */ .lg.inMemory, _base_common_network_js__WEBPACK_IMPORTED_MODULE_4__/* .Schemas */ .lg.vscodeSourceControl, _base_common_network_js__WEBPACK_IMPORTED_MODULE_4__/* .Schemas */ .lg.walkThrough, _base_common_network_js__WEBPACK_IMPORTED_MODULE_4__/* .Schemas */ .lg.walkThroughSnippet]);
class DoubleResourceMap {
    constructor() {
        this._byResource = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9();
        this._byOwner = new Map();
    }
    set(resource, owner, value) {
        let ownerMap = this._byResource.get(resource);
        if (!ownerMap) {
            ownerMap = new Map();
            this._byResource.set(resource, ownerMap);
        }
        ownerMap.set(owner, value);
        let resourceMap = this._byOwner.get(owner);
        if (!resourceMap) {
            resourceMap = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9();
            this._byOwner.set(owner, resourceMap);
        }
        resourceMap.set(resource, value);
    }
    get(resource, owner) {
        const ownerMap = this._byResource.get(resource);
        return ownerMap === null || ownerMap === void 0 ? void 0 : ownerMap.get(owner);
    }
    delete(resource, owner) {
        let removedA = false;
        let removedB = false;
        const ownerMap = this._byResource.get(resource);
        if (ownerMap) {
            removedA = ownerMap.delete(owner);
        }
        const resourceMap = this._byOwner.get(owner);
        if (resourceMap) {
            removedB = resourceMap.delete(resource);
        }
        if (removedA !== removedB) {
            throw new Error('illegal state');
        }
        return removedA && removedB;
    }
    values(key) {
        var _a, _b, _c, _d;
        if (typeof key === 'string') {
            return (_b = (_a = this._byOwner.get(key)) === null || _a === void 0 ? void 0 : _a.values()) !== null && _b !== void 0 ? _b : _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.empty();
        }
        if (_base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__/* .URI */ .o.isUri(key)) {
            return (_d = (_c = this._byResource.get(key)) === null || _c === void 0 ? void 0 : _c.values()) !== null && _d !== void 0 ? _d : _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.empty();
        }
        return _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.map(_base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.concat(...this._byOwner.values()), map => map[1]);
    }
}
class MarkerStats {
    constructor(service) {
        this.errors = 0;
        this.infos = 0;
        this.warnings = 0;
        this.unknowns = 0;
        this._data = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9();
        this._service = service;
        this._subscription = service.onMarkerChanged(this._update, this);
    }
    dispose() {
        this._subscription.dispose();
    }
    _update(resources) {
        for (const resource of resources) {
            const oldStats = this._data.get(resource);
            if (oldStats) {
                this._substract(oldStats);
            }
            const newStats = this._resourceStats(resource);
            this._add(newStats);
            this._data.set(resource, newStats);
        }
    }
    _resourceStats(resource) {
        const result = { errors: 0, warnings: 0, infos: 0, unknowns: 0 };
        // TODO this is a hack
        if (unsupportedSchemas.has(resource.scheme)) {
            return result;
        }
        for (const { severity } of this._service.read({ resource })) {
            if (severity === _markers_js__WEBPACK_IMPORTED_MODULE_6__/* .MarkerSeverity */ .ZL.Error) {
                result.errors += 1;
            }
            else if (severity === _markers_js__WEBPACK_IMPORTED_MODULE_6__/* .MarkerSeverity */ .ZL.Warning) {
                result.warnings += 1;
            }
            else if (severity === _markers_js__WEBPACK_IMPORTED_MODULE_6__/* .MarkerSeverity */ .ZL.Info) {
                result.infos += 1;
            }
            else {
                result.unknowns += 1;
            }
        }
        return result;
    }
    _substract(op) {
        this.errors -= op.errors;
        this.warnings -= op.warnings;
        this.infos -= op.infos;
        this.unknowns -= op.unknowns;
    }
    _add(op) {
        this.errors += op.errors;
        this.warnings += op.warnings;
        this.infos += op.infos;
        this.unknowns += op.unknowns;
    }
}
class MarkerService {
    constructor() {
        this._onMarkerChanged = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .DebounceEmitter */ .D0({
            delay: 0,
            merge: MarkerService._merge
        });
        this.onMarkerChanged = this._onMarkerChanged.event;
        this._data = new DoubleResourceMap();
        this._stats = new MarkerStats(this);
    }
    dispose() {
        this._stats.dispose();
        this._onMarkerChanged.dispose();
    }
    remove(owner, resources) {
        for (const resource of resources || []) {
            this.changeOne(owner, resource, []);
        }
    }
    changeOne(owner, resource, markerData) {
        if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isFalsyOrEmpty */ .XY)(markerData)) {
            // remove marker for this (owner,resource)-tuple
            const removed = this._data.delete(resource, owner);
            if (removed) {
                this._onMarkerChanged.fire([resource]);
            }
        }
        else {
            // insert marker for this (owner,resource)-tuple
            const markers = [];
            for (const data of markerData) {
                const marker = MarkerService._toMarker(owner, resource, data);
                if (marker) {
                    markers.push(marker);
                }
            }
            this._data.set(resource, owner, markers);
            this._onMarkerChanged.fire([resource]);
        }
    }
    static _toMarker(owner, resource, data) {
        let { code, severity, message, source, startLineNumber, startColumn, endLineNumber, endColumn, relatedInformation, tags, } = data;
        if (!message) {
            return undefined;
        }
        // santize data
        startLineNumber = startLineNumber > 0 ? startLineNumber : 1;
        startColumn = startColumn > 0 ? startColumn : 1;
        endLineNumber = endLineNumber >= startLineNumber ? endLineNumber : startLineNumber;
        endColumn = endColumn > 0 ? endColumn : startColumn;
        return {
            resource,
            owner,
            code,
            severity,
            message,
            source,
            startLineNumber,
            startColumn,
            endLineNumber,
            endColumn,
            relatedInformation,
            tags,
        };
    }
    changeAll(owner, data) {
        const changes = [];
        // remove old marker
        const existing = this._data.values(owner);
        if (existing) {
            for (const data of existing) {
                const first = _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_2__/* .Iterable */ .$.first(data);
                if (first) {
                    changes.push(first.resource);
                    this._data.delete(first.resource, owner);
                }
            }
        }
        // add new markers
        if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .Of)(data)) {
            // group by resource
            const groups = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9();
            for (const { resource, marker: markerData } of data) {
                const marker = MarkerService._toMarker(owner, resource, markerData);
                if (!marker) {
                    // filter bad markers
                    continue;
                }
                const array = groups.get(resource);
                if (!array) {
                    groups.set(resource, [marker]);
                    changes.push(resource);
                }
                else {
                    array.push(marker);
                }
            }
            // insert all
            for (const [resource, value] of groups) {
                this._data.set(resource, owner, value);
            }
        }
        if (changes.length > 0) {
            this._onMarkerChanged.fire(changes);
        }
    }
    read(filter = Object.create(null)) {
        let { owner, resource, severities, take } = filter;
        if (!take || take < 0) {
            take = -1;
        }
        if (owner && resource) {
            // exactly one owner AND resource
            const data = this._data.get(resource, owner);
            if (!data) {
                return [];
            }
            else {
                const result = [];
                for (const marker of data) {
                    if (MarkerService._accept(marker, severities)) {
                        const newLen = result.push(marker);
                        if (take > 0 && newLen === take) {
                            break;
                        }
                    }
                }
                return result;
            }
        }
        else if (!owner && !resource) {
            // all
            const result = [];
            for (const markers of this._data.values()) {
                for (const data of markers) {
                    if (MarkerService._accept(data, severities)) {
                        const newLen = result.push(data);
                        if (take > 0 && newLen === take) {
                            return result;
                        }
                    }
                }
            }
            return result;
        }
        else {
            // of one resource OR owner
            const iterable = this._data.values(resource !== null && resource !== void 0 ? resource : owner);
            const result = [];
            for (const markers of iterable) {
                for (const data of markers) {
                    if (MarkerService._accept(data, severities)) {
                        const newLen = result.push(data);
                        if (take > 0 && newLen === take) {
                            return result;
                        }
                    }
                }
            }
            return result;
        }
    }
    static _accept(marker, severities) {
        return severities === undefined || (severities & marker.severity) === marker.severity;
    }
    // --- event debounce logic
    static _merge(all) {
        const set = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9();
        for (const array of all) {
            for (const item of array) {
                set.set(item, true);
            }
        }
        return Array.from(set.keys());
    }
}


/***/ }),

/***/ 74591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H0: function() { return /* binding */ IMarkerData; },
/* harmony export */   ZL: function() { return /* binding */ MarkerSeverity; },
/* harmony export */   lT: function() { return /* binding */ IMarkerService; }
/* harmony export */ });
/* harmony import */ var _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92380);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23330);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
(function (MarkerSeverity) {
    function compare(a, b) {
        return b - a;
    }
    MarkerSeverity.compare = compare;
    const _displayStrings = Object.create(null);
    _displayStrings[MarkerSeverity.Error] = (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('sev.error', "Error");
    _displayStrings[MarkerSeverity.Warning] = (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('sev.warning', "Warning");
    _displayStrings[MarkerSeverity.Info] = (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('sev.info', "Info");
    function toString(a) {
        return _displayStrings[a] || '';
    }
    MarkerSeverity.toString = toString;
    function fromSeverity(severity) {
        switch (severity) {
            case _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Error: return MarkerSeverity.Error;
            case _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Warning: return MarkerSeverity.Warning;
            case _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Info: return MarkerSeverity.Info;
            case _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Ignore: return MarkerSeverity.Hint;
        }
    }
    MarkerSeverity.fromSeverity = fromSeverity;
    function toSeverity(severity) {
        switch (severity) {
            case MarkerSeverity.Error: return _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Error;
            case MarkerSeverity.Warning: return _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Warning;
            case MarkerSeverity.Info: return _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Info;
            case MarkerSeverity.Hint: return _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Ignore;
        }
    }
    MarkerSeverity.toSeverity = toSeverity;
})(MarkerSeverity || (MarkerSeverity = {}));
var IMarkerData;
(function (IMarkerData) {
    const emptyString = '';
    function makeKey(markerData) {
        return makeKeyOptionalMessage(markerData, true);
    }
    IMarkerData.makeKey = makeKey;
    function makeKeyOptionalMessage(markerData, useMessage) {
        const result = [emptyString];
        if (markerData.source) {
            result.push(markerData.source.replace('¦', '\\¦'));
        }
        else {
            result.push(emptyString);
        }
        if (markerData.code) {
            if (typeof markerData.code === 'string') {
                result.push(markerData.code.replace('¦', '\\¦'));
            }
            else {
                result.push(markerData.code.value.replace('¦', '\\¦'));
            }
        }
        else {
            result.push(emptyString);
        }
        if (markerData.severity !== undefined && markerData.severity !== null) {
            result.push(MarkerSeverity.toString(markerData.severity));
        }
        else {
            result.push(emptyString);
        }
        // Modifed to not include the message as part of the marker key to work around
        // https://github.com/microsoft/vscode/issues/77475
        if (markerData.message && useMessage) {
            result.push(markerData.message.replace('¦', '\\¦'));
        }
        else {
            result.push(emptyString);
        }
        if (markerData.startLineNumber !== undefined && markerData.startLineNumber !== null) {
            result.push(markerData.startLineNumber.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.startColumn !== undefined && markerData.startColumn !== null) {
            result.push(markerData.startColumn.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.endLineNumber !== undefined && markerData.endLineNumber !== null) {
            result.push(markerData.endLineNumber.toString());
        }
        else {
            result.push(emptyString);
        }
        if (markerData.endColumn !== undefined && markerData.endColumn !== null) {
            result.push(markerData.endColumn.toString());
        }
        else {
            result.push(emptyString);
        }
        result.push(emptyString);
        return result.join('¦');
    }
    IMarkerData.makeKeyOptionalMessage = makeKeyOptionalMessage;
})(IMarkerData || (IMarkerData = {}));
const IMarkerService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__/* .createDecorator */ .yh)('markerService');


/***/ }),

/***/ 99938:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EO: function() { return /* binding */ NoOpNotification; },
/* harmony export */   lT: function() { return /* binding */ INotificationService; },
/* harmony export */   zb: function() { return /* binding */ Severity; }
/* harmony export */ });
/* harmony import */ var _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92380);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38048);


var Severity = _base_common_severity_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
const INotificationService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_1__/* .createDecorator */ .yh)('notificationService');
class NoOpNotification {
}


/***/ }),

/***/ 68733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: function() { return /* binding */ Link; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(91645);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js
var keyboardEvent = __webpack_require__(55022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(58122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/browser/link.css
var browser_link = __webpack_require__(39155);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/browser/link.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(browser_link/* default */.Z, options);




       /* harmony default export */ var opener_browser_link = (browser_link/* default */.Z && browser_link/* default */.Z.locals ? browser_link/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/browser/link.js
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








let Link = class Link extends lifecycle/* Disposable */.JT {
    get enabled() {
        return this._enabled;
    }
    set enabled(enabled) {
        if (enabled) {
            this.el.setAttribute('aria-disabled', 'false');
            this.el.tabIndex = 0;
            this.el.style.pointerEvents = 'auto';
            this.el.style.opacity = '1';
            this.el.style.cursor = 'pointer';
            this._enabled = false;
        }
        else {
            this.el.setAttribute('aria-disabled', 'true');
            this.el.tabIndex = -1;
            this.el.style.pointerEvents = 'none';
            this.el.style.opacity = '0.4';
            this.el.style.cursor = 'default';
            this._enabled = true;
        }
        this._enabled = enabled;
    }
    constructor(container, _link, options = {}, openerService) {
        var _a;
        super();
        this._link = _link;
        this._enabled = true;
        this.el = (0,dom/* append */.R3)(container, (0,dom.$)('a.monaco-link', {
            tabIndex: (_a = _link.tabIndex) !== null && _a !== void 0 ? _a : 0,
            href: _link.href,
            title: _link.title
        }, _link.label));
        this.el.setAttribute('role', 'button');
        const onClickEmitter = this._register(new browser_event/* DomEmitter */.Y(this.el, 'click'));
        const onKeyPress = this._register(new browser_event/* DomEmitter */.Y(this.el, 'keypress'));
        const onEnterPress = common_event/* Event */.ju.chain(onKeyPress.event)
            .map(e => new keyboardEvent/* StandardKeyboardEvent */.y(e))
            .filter(e => e.keyCode === 3 /* KeyCode.Enter */)
            .event;
        const onTap = this._register(new browser_event/* DomEmitter */.Y(this.el, touch/* EventType */.t.Tap)).event;
        this._register(touch/* Gesture */.o.addTarget(this.el));
        const onOpen = common_event/* Event */.ju.any(onClickEmitter.event, onEnterPress, onTap);
        this._register(onOpen(e => {
            if (!this.enabled) {
                return;
            }
            dom/* EventHelper */.zB.stop(e, true);
            if (options === null || options === void 0 ? void 0 : options.opener) {
                options.opener(this._link.href);
            }
            else {
                openerService.open(this._link.href, { allowCommands: true });
            }
        }));
        this.enabled = true;
    }
};
Link = __decorate([
    __param(3, common_opener/* IOpenerService */.v4)
], Link);


/***/ }),

/***/ 38876:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gs: function() { return /* binding */ matchesSomeScheme; },
/* harmony export */   v4: function() { return /* binding */ IOpenerService; },
/* harmony export */   xI: function() { return /* binding */ extractSelection; },
/* harmony export */   xn: function() { return /* binding */ matchesScheme; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56946);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const IOpenerService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__/* .createDecorator */ .yh)('openerService');
function matchesScheme(target, scheme) {
    if (_base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__/* .URI */ .o.isUri(target)) {
        return (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .equalsIgnoreCase */ .qq)(target.scheme, scheme);
    }
    else {
        return (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .startsWithIgnoreCase */ .ok)(target, scheme + ':');
    }
}
function matchesSomeScheme(target, ...schemes) {
    return schemes.some(scheme => matchesScheme(target, scheme));
}
/**
 * file:///some/file.js#73
 * file:///some/file.js#L73
 * file:///some/file.js#73,84
 * file:///some/file.js#L73,84
 * file:///some/file.js#73-83
 * file:///some/file.js#L73-L83
 * file:///some/file.js#73,84-83,52
 * file:///some/file.js#L73,84-L83,52
 */
function extractSelection(uri) {
    let selection = undefined;
    const match = /^L?(\d+)(?:,(\d+))?(-L?(\d+)(?:,(\d+))?)?/.exec(uri.fragment);
    if (match) {
        selection = {
            startLineNumber: parseInt(match[1]),
            startColumn: match[2] ? parseInt(match[2]) : 1,
            endLineNumber: match[4] ? parseInt(match[4]) : undefined,
            endColumn: match[4] ? (match[5] ? parseInt(match[5]) : 1) : undefined
        };
        uri = uri.with({ fragment: '' });
    }
    return { selection, uri };
}


/***/ })

}]);