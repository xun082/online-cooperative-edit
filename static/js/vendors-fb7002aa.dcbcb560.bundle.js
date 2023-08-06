"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-fb7002aa"],{

/***/ 76679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n.monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,\n.monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,\n.monaco-editor .margin-view-overlays .codicon-folding-expanded,\n.monaco-editor .margin-view-overlays .codicon-folding-collapsed {\n\tcursor: pointer;\n\topacity: 0;\n\ttransition: opacity 0.5s;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 140%;\n\tmargin-left: 2px;\n}\n\n.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-collapsed,\n.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-manual-expanded,\n.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-expanded,\n.monaco-workbench.reduce-motion .monaco-editor .margin-view-overlays .codicon-folding-collapsed {\n\ttransition: initial;\n}\n\n.monaco-editor .margin-view-overlays:hover .codicon,\n.monaco-editor .margin-view-overlays .codicon.codicon-folding-collapsed,\n.monaco-editor .margin-view-overlays .codicon.codicon-folding-manual-collapsed,\n.monaco-editor .margin-view-overlays .codicon.alwaysShowFoldIcons {\n\topacity: 1;\n}\n\n.monaco-editor .inline-folded:after {\n\tcolor: grey;\n\tmargin: 0.1em 0.2em 0 0.2em;\n\tcontent: \"\\22EF\"; /* ellipses unicode character */\n\tdisplay: inline;\n\tline-height: 1em;\n\tcursor: pointer;\n}\n\n.monaco-editor .folded-background {\n\tbackground-color: var(--vscode-editor-foldBackground);\n}\n\n.monaco-editor .cldr.codicon.codicon-folding-expanded,\n.monaco-editor .cldr.codicon.codicon-folding-collapsed,\n.monaco-editor .cldr.codicon.codicon-folding-manual-expanded,\n.monaco-editor .cldr.codicon.codicon-folding-manual-collapsed {\n\tcolor: var(--vscode-editorGutter-foldingControlForeground) !important;\n}\n\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 32017:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FoldingController: function() { return /* binding */ FoldingController; },
  RangesLimitReporter: function() { return /* binding */ RangesLimitReporter; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/keyCodes.js
var keyCodes = __webpack_require__(17106);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.css
var folding = __webpack_require__(76679);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(folding/* default */.Z, options);




       /* harmony default export */ var browser_folding = (folding/* default */.Z && folding/* default */.Z.locals ? folding/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(49427);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(58606);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js + 5 modules
var languageConfigurationRegistry = __webpack_require__(11296);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/foldingRanges.js
var foldingRanges = __webpack_require__(96691);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/hash.js
var hash = __webpack_require__(54805);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/foldingModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class FoldingModel {
    get regions() { return this._regions; }
    get textModel() { return this._textModel; }
    constructor(textModel, decorationProvider) {
        this._updateEventEmitter = new common_event/* Emitter */.Q5();
        this.onDidChange = this._updateEventEmitter.event;
        this._textModel = textModel;
        this._decorationProvider = decorationProvider;
        this._regions = new foldingRanges/* FoldingRegions */.MN(new Uint32Array(0), new Uint32Array(0));
        this._editorDecorationIds = [];
    }
    toggleCollapseState(toggledRegions) {
        if (!toggledRegions.length) {
            return;
        }
        toggledRegions = toggledRegions.sort((r1, r2) => r1.regionIndex - r2.regionIndex);
        const processed = {};
        this._decorationProvider.changeDecorations(accessor => {
            let k = 0; // index from [0 ... this.regions.length]
            let dirtyRegionEndLine = -1; // end of the range where decorations need to be updated
            let lastHiddenLine = -1; // the end of the last hidden lines
            const updateDecorationsUntil = (index) => {
                while (k < index) {
                    const endLineNumber = this._regions.getEndLineNumber(k);
                    const isCollapsed = this._regions.isCollapsed(k);
                    if (endLineNumber <= dirtyRegionEndLine) {
                        const isManual = this.regions.getSource(k) !== 0 /* FoldSource.provider */;
                        accessor.changeDecorationOptions(this._editorDecorationIds[k], this._decorationProvider.getDecorationOption(isCollapsed, endLineNumber <= lastHiddenLine, isManual));
                    }
                    if (isCollapsed && endLineNumber > lastHiddenLine) {
                        lastHiddenLine = endLineNumber;
                    }
                    k++;
                }
            };
            for (const region of toggledRegions) {
                const index = region.regionIndex;
                const editorDecorationId = this._editorDecorationIds[index];
                if (editorDecorationId && !processed[editorDecorationId]) {
                    processed[editorDecorationId] = true;
                    updateDecorationsUntil(index); // update all decorations up to current index using the old dirtyRegionEndLine
                    const newCollapseState = !this._regions.isCollapsed(index);
                    this._regions.setCollapsed(index, newCollapseState);
                    dirtyRegionEndLine = Math.max(dirtyRegionEndLine, this._regions.getEndLineNumber(index));
                }
            }
            updateDecorationsUntil(this._regions.length);
        });
        this._updateEventEmitter.fire({ model: this, collapseStateChanged: toggledRegions });
    }
    removeManualRanges(ranges) {
        const newFoldingRanges = new Array();
        const intersects = (foldRange) => {
            for (const range of ranges) {
                if (!(range.startLineNumber > foldRange.endLineNumber || foldRange.startLineNumber > range.endLineNumber)) {
                    return true;
                }
            }
            return false;
        };
        for (let i = 0; i < this._regions.length; i++) {
            const foldRange = this._regions.toFoldRange(i);
            if (foldRange.source === 0 /* FoldSource.provider */ || !intersects(foldRange)) {
                newFoldingRanges.push(foldRange);
            }
        }
        this.updatePost(foldingRanges/* FoldingRegions */.MN.fromFoldRanges(newFoldingRanges));
    }
    update(newRegions, blockedLineNumers = []) {
        const foldedOrManualRanges = this._currentFoldedOrManualRanges(blockedLineNumers);
        const newRanges = foldingRanges/* FoldingRegions */.MN.sanitizeAndMerge(newRegions, foldedOrManualRanges, this._textModel.getLineCount());
        this.updatePost(foldingRanges/* FoldingRegions */.MN.fromFoldRanges(newRanges));
    }
    updatePost(newRegions) {
        const newEditorDecorations = [];
        let lastHiddenLine = -1;
        for (let index = 0, limit = newRegions.length; index < limit; index++) {
            const startLineNumber = newRegions.getStartLineNumber(index);
            const endLineNumber = newRegions.getEndLineNumber(index);
            const isCollapsed = newRegions.isCollapsed(index);
            const isManual = newRegions.getSource(index) !== 0 /* FoldSource.provider */;
            const decorationRange = {
                startLineNumber: startLineNumber,
                startColumn: this._textModel.getLineMaxColumn(startLineNumber),
                endLineNumber: endLineNumber,
                endColumn: this._textModel.getLineMaxColumn(endLineNumber) + 1
            };
            newEditorDecorations.push({ range: decorationRange, options: this._decorationProvider.getDecorationOption(isCollapsed, endLineNumber <= lastHiddenLine, isManual) });
            if (isCollapsed && endLineNumber > lastHiddenLine) {
                lastHiddenLine = endLineNumber;
            }
        }
        this._decorationProvider.changeDecorations(accessor => this._editorDecorationIds = accessor.deltaDecorations(this._editorDecorationIds, newEditorDecorations));
        this._regions = newRegions;
        this._updateEventEmitter.fire({ model: this });
    }
    _currentFoldedOrManualRanges(blockedLineNumers = []) {
        const isBlocked = (startLineNumber, endLineNumber) => {
            for (const blockedLineNumber of blockedLineNumers) {
                if (startLineNumber < blockedLineNumber && blockedLineNumber <= endLineNumber) { // first line is visible
                    return true;
                }
            }
            return false;
        };
        const foldedRanges = [];
        for (let i = 0, limit = this._regions.length; i < limit; i++) {
            let isCollapsed = this.regions.isCollapsed(i);
            const source = this.regions.getSource(i);
            if (isCollapsed || source !== 0 /* FoldSource.provider */) {
                const foldRange = this._regions.toFoldRange(i);
                const decRange = this._textModel.getDecorationRange(this._editorDecorationIds[i]);
                if (decRange) {
                    if (isCollapsed && isBlocked(decRange.startLineNumber, decRange.endLineNumber)) {
                        isCollapsed = false; // uncollapse is the range is blocked
                    }
                    foldedRanges.push({
                        startLineNumber: decRange.startLineNumber,
                        endLineNumber: decRange.endLineNumber,
                        type: foldRange.type,
                        isCollapsed,
                        source
                    });
                }
            }
        }
        return foldedRanges;
    }
    /**
     * Collapse state memento, for persistence only
     */
    getMemento() {
        const foldedOrManualRanges = this._currentFoldedOrManualRanges();
        const result = [];
        const maxLineNumber = this._textModel.getLineCount();
        for (let i = 0, limit = foldedOrManualRanges.length; i < limit; i++) {
            const range = foldedOrManualRanges[i];
            if (range.startLineNumber >= range.endLineNumber || range.startLineNumber < 1 || range.endLineNumber > maxLineNumber) {
                continue;
            }
            const checksum = this._getLinesChecksum(range.startLineNumber + 1, range.endLineNumber);
            result.push({
                startLineNumber: range.startLineNumber,
                endLineNumber: range.endLineNumber,
                isCollapsed: range.isCollapsed,
                source: range.source,
                checksum: checksum
            });
        }
        return (result.length > 0) ? result : undefined;
    }
    /**
     * Apply persisted state, for persistence only
     */
    applyMemento(state) {
        var _a, _b;
        if (!Array.isArray(state)) {
            return;
        }
        const rangesToRestore = [];
        const maxLineNumber = this._textModel.getLineCount();
        for (const range of state) {
            if (range.startLineNumber >= range.endLineNumber || range.startLineNumber < 1 || range.endLineNumber > maxLineNumber) {
                continue;
            }
            const checksum = this._getLinesChecksum(range.startLineNumber + 1, range.endLineNumber);
            if (!range.checksum || checksum === range.checksum) {
                rangesToRestore.push({
                    startLineNumber: range.startLineNumber,
                    endLineNumber: range.endLineNumber,
                    type: undefined,
                    isCollapsed: (_a = range.isCollapsed) !== null && _a !== void 0 ? _a : true,
                    source: (_b = range.source) !== null && _b !== void 0 ? _b : 0 /* FoldSource.provider */
                });
            }
        }
        const newRanges = foldingRanges/* FoldingRegions */.MN.sanitizeAndMerge(this._regions, rangesToRestore, maxLineNumber);
        this.updatePost(foldingRanges/* FoldingRegions */.MN.fromFoldRanges(newRanges));
    }
    _getLinesChecksum(lineNumber1, lineNumber2) {
        const h = (0,hash/* hash */.vp)(this._textModel.getLineContent(lineNumber1)
            + this._textModel.getLineContent(lineNumber2));
        return h % 1000000; // 6 digits is plenty
    }
    dispose() {
        this._decorationProvider.removeDecorations(this._editorDecorationIds);
    }
    getAllRegionsAtLine(lineNumber, filter) {
        const result = [];
        if (this._regions) {
            let index = this._regions.findRange(lineNumber);
            let level = 1;
            while (index >= 0) {
                const current = this._regions.toRegion(index);
                if (!filter || filter(current, level)) {
                    result.push(current);
                }
                level++;
                index = current.parentIndex;
            }
        }
        return result;
    }
    getRegionAtLine(lineNumber) {
        if (this._regions) {
            const index = this._regions.findRange(lineNumber);
            if (index >= 0) {
                return this._regions.toRegion(index);
            }
        }
        return null;
    }
    getRegionsInside(region, filter) {
        const result = [];
        const index = region ? region.regionIndex + 1 : 0;
        const endLineNumber = region ? region.endLineNumber : Number.MAX_VALUE;
        if (filter && filter.length === 2) {
            const levelStack = [];
            for (let i = index, len = this._regions.length; i < len; i++) {
                const current = this._regions.toRegion(i);
                if (this._regions.getStartLineNumber(i) < endLineNumber) {
                    while (levelStack.length > 0 && !current.containedBy(levelStack[levelStack.length - 1])) {
                        levelStack.pop();
                    }
                    levelStack.push(current);
                    if (filter(current, levelStack.length)) {
                        result.push(current);
                    }
                }
                else {
                    break;
                }
            }
        }
        else {
            for (let i = index, len = this._regions.length; i < len; i++) {
                const current = this._regions.toRegion(i);
                if (this._regions.getStartLineNumber(i) < endLineNumber) {
                    if (!filter || filter(current)) {
                        result.push(current);
                    }
                }
                else {
                    break;
                }
            }
        }
        return result;
    }
}
/**
 * Collapse or expand the regions at the given locations
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand, or if not set, all regions in the model.
 */
function toggleCollapseState(foldingModel, levels, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const region = foldingModel.getRegionAtLine(lineNumber);
        if (region) {
            const doCollapse = !region.isCollapsed;
            toToggle.push(region);
            if (levels > 1) {
                const regionsInside = foldingModel.getRegionsInside(region, (r, level) => r.isCollapsed !== doCollapse && level < levels);
                toToggle.push(...regionsInside);
            }
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand the regions at the given locations including all children.
 * @param doCollapse Whether to collapse or expand
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand, or if not set, all regions in the model.
 */
function setCollapseStateLevelsDown(foldingModel, doCollapse, levels = Number.MAX_VALUE, lineNumbers) {
    const toToggle = [];
    if (lineNumbers && lineNumbers.length > 0) {
        for (const lineNumber of lineNumbers) {
            const region = foldingModel.getRegionAtLine(lineNumber);
            if (region) {
                if (region.isCollapsed !== doCollapse) {
                    toToggle.push(region);
                }
                if (levels > 1) {
                    const regionsInside = foldingModel.getRegionsInside(region, (r, level) => r.isCollapsed !== doCollapse && level < levels);
                    toToggle.push(...regionsInside);
                }
            }
        }
    }
    else {
        const regionsInside = foldingModel.getRegionsInside(null, (r, level) => r.isCollapsed !== doCollapse && level < levels);
        toToggle.push(...regionsInside);
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand the regions at the given locations including all parents.
 * @param doCollapse Whether to collapse or expand
 * @param levels The number of levels. Use 1 to only impact the regions at the location, use Number.MAX_VALUE for all levels.
 * @param lineNumbers the location of the regions to collapse or expand.
 */
function setCollapseStateLevelsUp(foldingModel, doCollapse, levels, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, (region, level) => region.isCollapsed !== doCollapse && level <= levels);
        toToggle.push(...regions);
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Collapse or expand a region at the given locations. If the inner most region is already collapsed/expanded, uses the first parent instead.
 * @param doCollapse Whether to collapse or expand
 * @param lineNumbers the location of the regions to collapse or expand.
 */
function setCollapseStateUp(foldingModel, doCollapse, lineNumbers) {
    const toToggle = [];
    for (const lineNumber of lineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, (region) => region.isCollapsed !== doCollapse);
        if (regions.length > 0) {
            toToggle.push(regions[0]);
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds or unfolds all regions that have a given level, except if they contain one of the blocked lines.
 * @param foldLevel level. Level == 1 is the top level
 * @param doCollapse Whether to collapse or expand
*/
function setCollapseStateAtLevel(foldingModel, foldLevel, doCollapse, blockedLineNumbers) {
    const filter = (region, level) => level === foldLevel && region.isCollapsed !== doCollapse && !blockedLineNumbers.some(line => region.containsLine(line));
    const toToggle = foldingModel.getRegionsInside(null, filter);
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds or unfolds all regions, except if they contain or are contained by a region of one of the blocked lines.
 * @param doCollapse Whether to collapse or expand
 * @param blockedLineNumbers the location of regions to not collapse or expand
 */
function setCollapseStateForRest(foldingModel, doCollapse, blockedLineNumbers) {
    const filteredRegions = [];
    for (const lineNumber of blockedLineNumbers) {
        const regions = foldingModel.getAllRegionsAtLine(lineNumber, undefined);
        if (regions.length > 0) {
            filteredRegions.push(regions[0]);
        }
    }
    const filter = (region) => filteredRegions.every((filteredRegion) => !filteredRegion.containedBy(region) && !region.containedBy(filteredRegion)) && region.isCollapsed !== doCollapse;
    const toToggle = foldingModel.getRegionsInside(null, filter);
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds all regions for which the lines start with a given regex
 * @param foldingModel the folding model
 */
function setCollapseStateForMatchingLines(foldingModel, regExp, doCollapse) {
    const editorModel = foldingModel.textModel;
    const regions = foldingModel.regions;
    const toToggle = [];
    for (let i = regions.length - 1; i >= 0; i--) {
        if (doCollapse !== regions.isCollapsed(i)) {
            const startLineNumber = regions.getStartLineNumber(i);
            if (regExp.test(editorModel.getLineContent(startLineNumber))) {
                toToggle.push(regions.toRegion(i));
            }
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Folds all regions of the given type
 * @param foldingModel the folding model
 */
function setCollapseStateForType(foldingModel, type, doCollapse) {
    const regions = foldingModel.regions;
    const toToggle = [];
    for (let i = regions.length - 1; i >= 0; i--) {
        if (doCollapse !== regions.isCollapsed(i) && type === regions.getType(i)) {
            toToggle.push(regions.toRegion(i));
        }
    }
    foldingModel.toggleCollapseState(toToggle);
}
/**
 * Get line to go to for parent fold of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Parent fold start line
 */
function getParentFoldLine(lineNumber, foldingModel) {
    let startLineNumber = null;
    const foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    if (foldingRegion !== null) {
        startLineNumber = foldingRegion.startLineNumber;
        // If current line is not the start of the current fold, go to top line of current fold. If not, go to parent fold
        if (lineNumber === startLineNumber) {
            const parentFoldingIdx = foldingRegion.parentIndex;
            if (parentFoldingIdx !== -1) {
                startLineNumber = foldingModel.regions.getStartLineNumber(parentFoldingIdx);
            }
            else {
                startLineNumber = null;
            }
        }
    }
    return startLineNumber;
}
/**
 * Get line to go to for previous fold at the same level of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Previous fold start line
 */
function getPreviousFoldLine(lineNumber, foldingModel) {
    let foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    // If on the folding range start line, go to previous sibling.
    if (foldingRegion !== null && foldingRegion.startLineNumber === lineNumber) {
        // If current line is not the start of the current fold, go to top line of current fold. If not, go to previous fold.
        if (lineNumber !== foldingRegion.startLineNumber) {
            return foldingRegion.startLineNumber;
        }
        else {
            // Find min line number to stay within parent.
            const expectedParentIndex = foldingRegion.parentIndex;
            let minLineNumber = 0;
            if (expectedParentIndex !== -1) {
                minLineNumber = foldingModel.regions.getStartLineNumber(foldingRegion.parentIndex);
            }
            // Find fold at same level.
            while (foldingRegion !== null) {
                if (foldingRegion.regionIndex > 0) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex - 1);
                    // Keep at same level.
                    if (foldingRegion.startLineNumber <= minLineNumber) {
                        return null;
                    }
                    else if (foldingRegion.parentIndex === expectedParentIndex) {
                        return foldingRegion.startLineNumber;
                    }
                }
                else {
                    return null;
                }
            }
        }
    }
    else {
        // Go to last fold that's before the current line.
        if (foldingModel.regions.length > 0) {
            foldingRegion = foldingModel.regions.toRegion(foldingModel.regions.length - 1);
            while (foldingRegion !== null) {
                // Found fold before current line.
                if (foldingRegion.startLineNumber < lineNumber) {
                    return foldingRegion.startLineNumber;
                }
                if (foldingRegion.regionIndex > 0) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex - 1);
                }
                else {
                    foldingRegion = null;
                }
            }
        }
    }
    return null;
}
/**
 * Get line to go to next fold at the same level of current line
 * @param lineNumber the current line number
 * @param foldingModel the folding model
 *
 * @return Next fold start line
 */
function getNextFoldLine(lineNumber, foldingModel) {
    let foldingRegion = foldingModel.getRegionAtLine(lineNumber);
    // If on the folding range start line, go to next sibling.
    if (foldingRegion !== null && foldingRegion.startLineNumber === lineNumber) {
        // Find max line number to stay within parent.
        const expectedParentIndex = foldingRegion.parentIndex;
        let maxLineNumber = 0;
        if (expectedParentIndex !== -1) {
            maxLineNumber = foldingModel.regions.getEndLineNumber(foldingRegion.parentIndex);
        }
        else if (foldingModel.regions.length === 0) {
            return null;
        }
        else {
            maxLineNumber = foldingModel.regions.getEndLineNumber(foldingModel.regions.length - 1);
        }
        // Find fold at same level.
        while (foldingRegion !== null) {
            if (foldingRegion.regionIndex < foldingModel.regions.length) {
                foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex + 1);
                // Keep at same level.
                if (foldingRegion.startLineNumber >= maxLineNumber) {
                    return null;
                }
                else if (foldingRegion.parentIndex === expectedParentIndex) {
                    return foldingRegion.startLineNumber;
                }
            }
            else {
                return null;
            }
        }
    }
    else {
        // Go to first fold that's after the current line.
        if (foldingModel.regions.length > 0) {
            foldingRegion = foldingModel.regions.toRegion(0);
            while (foldingRegion !== null) {
                // Found fold after current line.
                if (foldingRegion.startLineNumber > lineNumber) {
                    return foldingRegion.startLineNumber;
                }
                if (foldingRegion.regionIndex < foldingModel.regions.length) {
                    foldingRegion = foldingModel.regions.toRegion(foldingRegion.regionIndex + 1);
                }
                else {
                    foldingRegion = null;
                }
            }
        }
    }
    return null;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/eolCounter.js
var eolCounter = __webpack_require__(11380);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/hiddenRangeModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class HiddenRangeModel {
    get onDidChange() { return this._updateEventEmitter.event; }
    get hiddenRanges() { return this._hiddenRanges; }
    constructor(model) {
        this._updateEventEmitter = new common_event/* Emitter */.Q5();
        this._hasLineChanges = false;
        this._foldingModel = model;
        this._foldingModelListener = model.onDidChange(_ => this.updateHiddenRanges());
        this._hiddenRanges = [];
        if (model.regions.length) {
            this.updateHiddenRanges();
        }
    }
    notifyChangeModelContent(e) {
        if (this._hiddenRanges.length && !this._hasLineChanges) {
            this._hasLineChanges = e.changes.some(change => {
                return change.range.endLineNumber !== change.range.startLineNumber || (0,eolCounter/* countEOL */.Q)(change.text)[0] !== 0;
            });
        }
    }
    updateHiddenRanges() {
        let updateHiddenAreas = false;
        const newHiddenAreas = [];
        let i = 0; // index into hidden
        let k = 0;
        let lastCollapsedStart = Number.MAX_VALUE;
        let lastCollapsedEnd = -1;
        const ranges = this._foldingModel.regions;
        for (; i < ranges.length; i++) {
            if (!ranges.isCollapsed(i)) {
                continue;
            }
            const startLineNumber = ranges.getStartLineNumber(i) + 1; // the first line is not hidden
            const endLineNumber = ranges.getEndLineNumber(i);
            if (lastCollapsedStart <= startLineNumber && endLineNumber <= lastCollapsedEnd) {
                // ignore ranges contained in collapsed regions
                continue;
            }
            if (!updateHiddenAreas && k < this._hiddenRanges.length && this._hiddenRanges[k].startLineNumber === startLineNumber && this._hiddenRanges[k].endLineNumber === endLineNumber) {
                // reuse the old ranges
                newHiddenAreas.push(this._hiddenRanges[k]);
                k++;
            }
            else {
                updateHiddenAreas = true;
                newHiddenAreas.push(new range/* Range */.e(startLineNumber, 1, endLineNumber, 1));
            }
            lastCollapsedStart = startLineNumber;
            lastCollapsedEnd = endLineNumber;
        }
        if (this._hasLineChanges || updateHiddenAreas || k < this._hiddenRanges.length) {
            this.applyHiddenRanges(newHiddenAreas);
        }
    }
    applyHiddenRanges(newHiddenAreas) {
        this._hiddenRanges = newHiddenAreas;
        this._hasLineChanges = false;
        this._updateEventEmitter.fire(newHiddenAreas);
    }
    hasRanges() {
        return this._hiddenRanges.length > 0;
    }
    isHidden(line) {
        return findRange(this._hiddenRanges, line) !== null;
    }
    adjustSelections(selections) {
        let hasChanges = false;
        const editorModel = this._foldingModel.textModel;
        let lastRange = null;
        const adjustLine = (line) => {
            if (!lastRange || !isInside(line, lastRange)) {
                lastRange = findRange(this._hiddenRanges, line);
            }
            if (lastRange) {
                return lastRange.startLineNumber - 1;
            }
            return null;
        };
        for (let i = 0, len = selections.length; i < len; i++) {
            let selection = selections[i];
            const adjustedStartLine = adjustLine(selection.startLineNumber);
            if (adjustedStartLine) {
                selection = selection.setStartPosition(adjustedStartLine, editorModel.getLineMaxColumn(adjustedStartLine));
                hasChanges = true;
            }
            const adjustedEndLine = adjustLine(selection.endLineNumber);
            if (adjustedEndLine) {
                selection = selection.setEndPosition(adjustedEndLine, editorModel.getLineMaxColumn(adjustedEndLine));
                hasChanges = true;
            }
            selections[i] = selection;
        }
        return hasChanges;
    }
    dispose() {
        if (this.hiddenRanges.length > 0) {
            this._hiddenRanges = [];
            this._updateEventEmitter.fire(this._hiddenRanges);
        }
        if (this._foldingModelListener) {
            this._foldingModelListener.dispose();
            this._foldingModelListener = null;
        }
    }
}
function isInside(line, range) {
    return line >= range.startLineNumber && line <= range.endLineNumber;
}
function findRange(ranges, line) {
    const i = (0,arrays/* findFirstInSorted */.lG)(ranges, r => line < r.startLineNumber) - 1;
    if (i >= 0 && ranges[i].endLineNumber >= line) {
        return ranges[i];
    }
    return null;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/indentRangeProvider.js
var browser_indentRangeProvider = __webpack_require__(21280);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(11754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js + 2 modules
var textModel = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(95153);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/foldingDecorations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








const foldBackground = (0,colorRegistry/* registerColor */.P6G)('editor.foldBackground', { light: (0,colorRegistry/* transparent */.ZnX)(colorRegistry/* editorSelectionBackground */.hEj, 0.3), dark: (0,colorRegistry/* transparent */.ZnX)(colorRegistry/* editorSelectionBackground */.hEj, 0.3), hcDark: null, hcLight: null }, (0,nls/* localize */.NC)('foldBackgroundBackground', "Background color behind folded ranges. The color must not be opaque so as not to hide underlying decorations."), true);
(0,colorRegistry/* registerColor */.P6G)('editorGutter.foldingControlForeground', { dark: colorRegistry/* iconForeground */.XZx, light: colorRegistry/* iconForeground */.XZx, hcDark: colorRegistry/* iconForeground */.XZx, hcLight: colorRegistry/* iconForeground */.XZx }, (0,nls/* localize */.NC)('editorGutter.foldingControlForeground', 'Color of the folding control in the editor gutter.'));
const foldingExpandedIcon = (0,iconRegistry/* registerIcon */.q5)('folding-expanded', codicons/* Codicon */.l.chevronDown, (0,nls/* localize */.NC)('foldingExpandedIcon', 'Icon for expanded ranges in the editor glyph margin.'));
const foldingCollapsedIcon = (0,iconRegistry/* registerIcon */.q5)('folding-collapsed', codicons/* Codicon */.l.chevronRight, (0,nls/* localize */.NC)('foldingCollapsedIcon', 'Icon for collapsed ranges in the editor glyph margin.'));
const foldingManualCollapsedIcon = (0,iconRegistry/* registerIcon */.q5)('folding-manual-collapsed', foldingCollapsedIcon, (0,nls/* localize */.NC)('foldingManualCollapedIcon', 'Icon for manually collapsed ranges in the editor glyph margin.'));
const foldingManualExpandedIcon = (0,iconRegistry/* registerIcon */.q5)('folding-manual-expanded', foldingExpandedIcon, (0,nls/* localize */.NC)('foldingManualExpandedIcon', 'Icon for manually expanded ranges in the editor glyph margin.'));
const foldedBackgroundMinimap = { color: (0,themeService/* themeColorFromId */.EN)(foldBackground), position: model/* MinimapPosition */.F5.Inline };
class FoldingDecorationProvider {
    constructor(editor) {
        this.editor = editor;
        this.showFoldingControls = 'mouseover';
        this.showFoldingHighlights = true;
    }
    getDecorationOption(isCollapsed, isHidden, isManual) {
        if (isHidden) { // is inside another collapsed region
            return FoldingDecorationProvider.HIDDEN_RANGE_DECORATION;
        }
        if (this.showFoldingControls === 'never') {
            if (isCollapsed) {
                return this.showFoldingHighlights ? FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION : FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_RANGE_DECORATION;
            }
            return FoldingDecorationProvider.NO_CONTROLS_EXPANDED_RANGE_DECORATION;
        }
        if (isCollapsed) {
            return isManual ?
                (this.showFoldingHighlights ? FoldingDecorationProvider.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION : FoldingDecorationProvider.MANUALLY_COLLAPSED_VISUAL_DECORATION)
                : (this.showFoldingHighlights ? FoldingDecorationProvider.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION : FoldingDecorationProvider.COLLAPSED_VISUAL_DECORATION);
        }
        else if (this.showFoldingControls === 'mouseover') {
            return isManual ? FoldingDecorationProvider.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION : FoldingDecorationProvider.EXPANDED_AUTO_HIDE_VISUAL_DECORATION;
        }
        else {
            return isManual ? FoldingDecorationProvider.MANUALLY_EXPANDED_VISUAL_DECORATION : FoldingDecorationProvider.EXPANDED_VISUAL_DECORATION;
        }
    }
    changeDecorations(callback) {
        return this.editor.changeDecorations(callback);
    }
    removeDecorations(decorationIds) {
        this.editor.removeDecorations(decorationIds);
    }
}
FoldingDecorationProvider.COLLAPSED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-collapsed-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingCollapsedIcon),
});
FoldingDecorationProvider.COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-collapsed-highlighted-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    className: 'folded-background',
    minimap: foldedBackgroundMinimap,
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingCollapsedIcon)
});
FoldingDecorationProvider.MANUALLY_COLLAPSED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-manually-collapsed-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingManualCollapsedIcon)
});
FoldingDecorationProvider.MANUALLY_COLLAPSED_HIGHLIGHTED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-manually-collapsed-highlighted-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    className: 'folded-background',
    minimap: foldedBackgroundMinimap,
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingManualCollapsedIcon)
});
FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_RANGE_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-no-controls-range-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    isWholeLine: true
});
FoldingDecorationProvider.NO_CONTROLS_COLLAPSED_HIGHLIGHTED_RANGE_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-no-controls-range-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    afterContentClassName: 'inline-folded',
    className: 'folded-background',
    minimap: foldedBackgroundMinimap,
    isWholeLine: true
});
FoldingDecorationProvider.EXPANDED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-expanded-visual-decoration',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    isWholeLine: true,
    firstLineDecorationClassName: 'alwaysShowFoldIcons ' + themables/* ThemeIcon */.k.asClassName(foldingExpandedIcon)
});
FoldingDecorationProvider.EXPANDED_AUTO_HIDE_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-expanded-auto-hide-visual-decoration',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingExpandedIcon)
});
FoldingDecorationProvider.MANUALLY_EXPANDED_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-manually-expanded-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    isWholeLine: true,
    firstLineDecorationClassName: 'alwaysShowFoldIcons ' + themables/* ThemeIcon */.k.asClassName(foldingManualExpandedIcon)
});
FoldingDecorationProvider.MANUALLY_EXPANDED_AUTO_HIDE_VISUAL_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-manually-expanded-auto-hide-visual-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    isWholeLine: true,
    firstLineDecorationClassName: themables/* ThemeIcon */.k.asClassName(foldingManualExpandedIcon)
});
FoldingDecorationProvider.NO_CONTROLS_EXPANDED_RANGE_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-no-controls-range-decoration',
    stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
    isWholeLine: true
});
FoldingDecorationProvider.HIDDEN_RANGE_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'folding-hidden-range-decoration',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/syntaxRangeProvider.js
var syntaxRangeProvider = __webpack_require__(2662);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js
var languageFeatureDebounce = __webpack_require__(78745);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js
var stopwatch = __webpack_require__(61111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/model.js
var services_model = __webpack_require__(76774);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js
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






























const CONTEXT_FOLDING_ENABLED = new contextkey/* RawContextKey */.uy('foldingEnabled', false);
let FoldingController = class FoldingController extends lifecycle/* Disposable */.JT {
    static get(editor) {
        return editor.getContribution(FoldingController.ID);
    }
    static getFoldingRangeProviders(languageFeaturesService, model) {
        var _a, _b;
        const foldingRangeProviders = languageFeaturesService.foldingRangeProvider.ordered(model);
        return (_b = ((_a = FoldingController._foldingRangeSelector) === null || _a === void 0 ? void 0 : _a.call(FoldingController, foldingRangeProviders, model))) !== null && _b !== void 0 ? _b : foldingRangeProviders;
    }
    constructor(editor, contextKeyService, languageConfigurationService, notificationService, languageFeatureDebounceService, languageFeaturesService) {
        super();
        this.contextKeyService = contextKeyService;
        this.languageConfigurationService = languageConfigurationService;
        this.languageFeaturesService = languageFeaturesService;
        this.localToDispose = this._register(new lifecycle/* DisposableStore */.SL());
        this.editor = editor;
        this._foldingLimitReporter = new RangesLimitReporter(editor);
        const options = this.editor.getOptions();
        this._isEnabled = options.get(41 /* EditorOption.folding */);
        this._useFoldingProviders = options.get(42 /* EditorOption.foldingStrategy */) !== 'indentation';
        this._unfoldOnClickAfterEndOfLine = options.get(46 /* EditorOption.unfoldOnClickAfterEndOfLine */);
        this._restoringViewState = false;
        this._currentModelHasFoldedImports = false;
        this._foldingImportsByDefault = options.get(44 /* EditorOption.foldingImportsByDefault */);
        this.updateDebounceInfo = languageFeatureDebounceService.for(languageFeaturesService.foldingRangeProvider, 'Folding', { min: 200 });
        this.foldingModel = null;
        this.hiddenRangeModel = null;
        this.rangeProvider = null;
        this.foldingRegionPromise = null;
        this.foldingModelPromise = null;
        this.updateScheduler = null;
        this.cursorChangedScheduler = null;
        this.mouseDownInfo = null;
        this.foldingDecorationProvider = new FoldingDecorationProvider(editor);
        this.foldingDecorationProvider.showFoldingControls = options.get(106 /* EditorOption.showFoldingControls */);
        this.foldingDecorationProvider.showFoldingHighlights = options.get(43 /* EditorOption.foldingHighlight */);
        this.foldingEnabled = CONTEXT_FOLDING_ENABLED.bindTo(this.contextKeyService);
        this.foldingEnabled.set(this._isEnabled);
        this._register(this.editor.onDidChangeModel(() => this.onModelChanged()));
        this._register(this.editor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(41 /* EditorOption.folding */)) {
                this._isEnabled = this.editor.getOptions().get(41 /* EditorOption.folding */);
                this.foldingEnabled.set(this._isEnabled);
                this.onModelChanged();
            }
            if (e.hasChanged(45 /* EditorOption.foldingMaximumRegions */)) {
                this.onModelChanged();
            }
            if (e.hasChanged(106 /* EditorOption.showFoldingControls */) || e.hasChanged(43 /* EditorOption.foldingHighlight */)) {
                const options = this.editor.getOptions();
                this.foldingDecorationProvider.showFoldingControls = options.get(106 /* EditorOption.showFoldingControls */);
                this.foldingDecorationProvider.showFoldingHighlights = options.get(43 /* EditorOption.foldingHighlight */);
                this.triggerFoldingModelChanged();
            }
            if (e.hasChanged(42 /* EditorOption.foldingStrategy */)) {
                this._useFoldingProviders = this.editor.getOptions().get(42 /* EditorOption.foldingStrategy */) !== 'indentation';
                this.onFoldingStrategyChanged();
            }
            if (e.hasChanged(46 /* EditorOption.unfoldOnClickAfterEndOfLine */)) {
                this._unfoldOnClickAfterEndOfLine = this.editor.getOptions().get(46 /* EditorOption.unfoldOnClickAfterEndOfLine */);
            }
            if (e.hasChanged(44 /* EditorOption.foldingImportsByDefault */)) {
                this._foldingImportsByDefault = this.editor.getOptions().get(44 /* EditorOption.foldingImportsByDefault */);
            }
        }));
        this.onModelChanged();
    }
    /**
     * Store view state.
     */
    saveViewState() {
        const model = this.editor.getModel();
        if (!model || !this._isEnabled || model.isTooLargeForTokenization()) {
            return {};
        }
        if (this.foldingModel) { // disposed ?
            const collapsedRegions = this.foldingModel.getMemento();
            const provider = this.rangeProvider ? this.rangeProvider.id : undefined;
            return { collapsedRegions, lineCount: model.getLineCount(), provider, foldedImports: this._currentModelHasFoldedImports };
        }
        return undefined;
    }
    /**
     * Restore view state.
     */
    restoreViewState(state) {
        const model = this.editor.getModel();
        if (!model || !this._isEnabled || model.isTooLargeForTokenization() || !this.hiddenRangeModel) {
            return;
        }
        if (!state) {
            return;
        }
        this._currentModelHasFoldedImports = !!state.foldedImports;
        if (state.collapsedRegions && state.collapsedRegions.length > 0 && this.foldingModel) {
            this._restoringViewState = true;
            try {
                this.foldingModel.applyMemento(state.collapsedRegions);
            }
            finally {
                this._restoringViewState = false;
            }
        }
    }
    onModelChanged() {
        this.localToDispose.clear();
        const model = this.editor.getModel();
        if (!this._isEnabled || !model || model.isTooLargeForTokenization()) {
            // huge files get no view model, so they cannot support hidden areas
            return;
        }
        this._currentModelHasFoldedImports = false;
        this.foldingModel = new FoldingModel(model, this.foldingDecorationProvider);
        this.localToDispose.add(this.foldingModel);
        this.hiddenRangeModel = new HiddenRangeModel(this.foldingModel);
        this.localToDispose.add(this.hiddenRangeModel);
        this.localToDispose.add(this.hiddenRangeModel.onDidChange(hr => this.onHiddenRangesChanges(hr)));
        this.updateScheduler = new common_async/* Delayer */.vp(this.updateDebounceInfo.get(model));
        this.cursorChangedScheduler = new common_async/* RunOnceScheduler */.pY(() => this.revealCursor(), 200);
        this.localToDispose.add(this.cursorChangedScheduler);
        this.localToDispose.add(this.languageFeaturesService.foldingRangeProvider.onDidChange(() => this.onFoldingStrategyChanged()));
        this.localToDispose.add(this.editor.onDidChangeModelLanguageConfiguration(() => this.onFoldingStrategyChanged())); // covers model language changes as well
        this.localToDispose.add(this.editor.onDidChangeModelContent(e => this.onDidChangeModelContent(e)));
        this.localToDispose.add(this.editor.onDidChangeCursorPosition(() => this.onCursorPositionChanged()));
        this.localToDispose.add(this.editor.onMouseDown(e => this.onEditorMouseDown(e)));
        this.localToDispose.add(this.editor.onMouseUp(e => this.onEditorMouseUp(e)));
        this.localToDispose.add({
            dispose: () => {
                var _a, _b;
                if (this.foldingRegionPromise) {
                    this.foldingRegionPromise.cancel();
                    this.foldingRegionPromise = null;
                }
                (_a = this.updateScheduler) === null || _a === void 0 ? void 0 : _a.cancel();
                this.updateScheduler = null;
                this.foldingModel = null;
                this.foldingModelPromise = null;
                this.hiddenRangeModel = null;
                this.cursorChangedScheduler = null;
                (_b = this.rangeProvider) === null || _b === void 0 ? void 0 : _b.dispose();
                this.rangeProvider = null;
            }
        });
        this.triggerFoldingModelChanged();
    }
    onFoldingStrategyChanged() {
        var _a;
        (_a = this.rangeProvider) === null || _a === void 0 ? void 0 : _a.dispose();
        this.rangeProvider = null;
        this.triggerFoldingModelChanged();
    }
    getRangeProvider(editorModel) {
        if (this.rangeProvider) {
            return this.rangeProvider;
        }
        const indentRangeProvider = new browser_indentRangeProvider/* IndentRangeProvider */.aI(editorModel, this.languageConfigurationService, this._foldingLimitReporter);
        this.rangeProvider = indentRangeProvider; // fallback
        if (this._useFoldingProviders && this.foldingModel) {
            const selectedProviders = FoldingController.getFoldingRangeProviders(this.languageFeaturesService, editorModel);
            if (selectedProviders.length > 0) {
                this.rangeProvider = new syntaxRangeProvider/* SyntaxRangeProvider */.e(editorModel, selectedProviders, () => this.triggerFoldingModelChanged(), this._foldingLimitReporter, indentRangeProvider);
            }
        }
        return this.rangeProvider;
    }
    getFoldingModel() {
        return this.foldingModelPromise;
    }
    onDidChangeModelContent(e) {
        var _a;
        (_a = this.hiddenRangeModel) === null || _a === void 0 ? void 0 : _a.notifyChangeModelContent(e);
        this.triggerFoldingModelChanged();
    }
    triggerFoldingModelChanged() {
        if (this.updateScheduler) {
            if (this.foldingRegionPromise) {
                this.foldingRegionPromise.cancel();
                this.foldingRegionPromise = null;
            }
            this.foldingModelPromise = this.updateScheduler.trigger(() => {
                const foldingModel = this.foldingModel;
                if (!foldingModel) { // null if editor has been disposed, or folding turned off
                    return null;
                }
                const sw = new stopwatch/* StopWatch */.G(true);
                const provider = this.getRangeProvider(foldingModel.textModel);
                const foldingRegionPromise = this.foldingRegionPromise = (0,common_async/* createCancelablePromise */.PG)(token => provider.compute(token));
                return foldingRegionPromise.then(foldingRanges => {
                    if (foldingRanges && foldingRegionPromise === this.foldingRegionPromise) { // new request or cancelled in the meantime?
                        let scrollState;
                        if (this._foldingImportsByDefault && !this._currentModelHasFoldedImports) {
                            const hasChanges = foldingRanges.setCollapsedAllOfType(languages/* FoldingRangeKind */.AD.Imports.value, true);
                            if (hasChanges) {
                                scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this.editor);
                                this._currentModelHasFoldedImports = hasChanges;
                            }
                        }
                        // some cursors might have moved into hidden regions, make sure they are in expanded regions
                        const selections = this.editor.getSelections();
                        const selectionLineNumbers = selections ? selections.map(s => s.startLineNumber) : [];
                        foldingModel.update(foldingRanges, selectionLineNumbers);
                        scrollState === null || scrollState === void 0 ? void 0 : scrollState.restore(this.editor);
                        // update debounce info
                        const newValue = this.updateDebounceInfo.update(foldingModel.textModel, sw.elapsed());
                        if (this.updateScheduler) {
                            this.updateScheduler.defaultDelay = newValue;
                        }
                    }
                    return foldingModel;
                });
            }).then(undefined, (err) => {
                (0,errors/* onUnexpectedError */.dL)(err);
                return null;
            });
        }
    }
    onHiddenRangesChanges(hiddenRanges) {
        if (this.hiddenRangeModel && hiddenRanges.length && !this._restoringViewState) {
            const selections = this.editor.getSelections();
            if (selections) {
                if (this.hiddenRangeModel.adjustSelections(selections)) {
                    this.editor.setSelections(selections);
                }
            }
        }
        this.editor.setHiddenAreas(hiddenRanges, this);
    }
    onCursorPositionChanged() {
        if (this.hiddenRangeModel && this.hiddenRangeModel.hasRanges()) {
            this.cursorChangedScheduler.schedule();
        }
    }
    revealCursor() {
        const foldingModel = this.getFoldingModel();
        if (!foldingModel) {
            return;
        }
        foldingModel.then(foldingModel => {
            if (foldingModel) {
                const selections = this.editor.getSelections();
                if (selections && selections.length > 0) {
                    const toToggle = [];
                    for (const selection of selections) {
                        const lineNumber = selection.selectionStartLineNumber;
                        if (this.hiddenRangeModel && this.hiddenRangeModel.isHidden(lineNumber)) {
                            toToggle.push(...foldingModel.getAllRegionsAtLine(lineNumber, r => r.isCollapsed && lineNumber > r.startLineNumber));
                        }
                    }
                    if (toToggle.length) {
                        foldingModel.toggleCollapseState(toToggle);
                        this.reveal(selections[0].getPosition());
                    }
                }
            }
        }).then(undefined, errors/* onUnexpectedError */.dL);
    }
    onEditorMouseDown(e) {
        this.mouseDownInfo = null;
        if (!this.hiddenRangeModel || !e.target || !e.target.range) {
            return;
        }
        if (!e.event.leftButton && !e.event.middleButton) {
            return;
        }
        const range = e.target.range;
        let iconClicked = false;
        switch (e.target.type) {
            case 4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */: {
                const data = e.target.detail;
                const offsetLeftInGutter = e.target.element.offsetLeft;
                const gutterOffsetX = data.offsetX - offsetLeftInGutter;
                // const gutterOffsetX = data.offsetX - data.glyphMarginWidth - data.lineNumbersWidth - data.glyphMarginLeft;
                // TODO@joao TODO@alex TODO@martin this is such that we don't collide with dirty diff
                if (gutterOffsetX < 5) { // the whitespace between the border and the real folding icon border is 5px
                    return;
                }
                iconClicked = true;
                break;
            }
            case 7 /* MouseTargetType.CONTENT_EMPTY */: {
                if (this._unfoldOnClickAfterEndOfLine && this.hiddenRangeModel.hasRanges()) {
                    const data = e.target.detail;
                    if (!data.isAfterLines) {
                        break;
                    }
                }
                return;
            }
            case 6 /* MouseTargetType.CONTENT_TEXT */: {
                if (this.hiddenRangeModel.hasRanges()) {
                    const model = this.editor.getModel();
                    if (model && range.startColumn === model.getLineMaxColumn(range.startLineNumber)) {
                        break;
                    }
                }
                return;
            }
            default:
                return;
        }
        this.mouseDownInfo = { lineNumber: range.startLineNumber, iconClicked };
    }
    onEditorMouseUp(e) {
        const foldingModel = this.foldingModel;
        if (!foldingModel || !this.mouseDownInfo || !e.target) {
            return;
        }
        const lineNumber = this.mouseDownInfo.lineNumber;
        const iconClicked = this.mouseDownInfo.iconClicked;
        const range = e.target.range;
        if (!range || range.startLineNumber !== lineNumber) {
            return;
        }
        if (iconClicked) {
            if (e.target.type !== 4 /* MouseTargetType.GUTTER_LINE_DECORATIONS */) {
                return;
            }
        }
        else {
            const model = this.editor.getModel();
            if (!model || range.startColumn !== model.getLineMaxColumn(lineNumber)) {
                return;
            }
        }
        const region = foldingModel.getRegionAtLine(lineNumber);
        if (region && region.startLineNumber === lineNumber) {
            const isCollapsed = region.isCollapsed;
            if (iconClicked || isCollapsed) {
                const surrounding = e.event.altKey;
                let toToggle = [];
                if (surrounding) {
                    const filter = (otherRegion) => !otherRegion.containedBy(region) && !region.containedBy(otherRegion);
                    const toMaybeToggle = foldingModel.getRegionsInside(null, filter);
                    for (const r of toMaybeToggle) {
                        if (r.isCollapsed) {
                            toToggle.push(r);
                        }
                    }
                    // if any surrounding regions are folded, unfold those. Otherwise, fold all surrounding
                    if (toToggle.length === 0) {
                        toToggle = toMaybeToggle;
                    }
                }
                else {
                    const recursive = e.event.middleButton || e.event.shiftKey;
                    if (recursive) {
                        for (const r of foldingModel.getRegionsInside(region)) {
                            if (r.isCollapsed === isCollapsed) {
                                toToggle.push(r);
                            }
                        }
                    }
                    // when recursive, first only collapse all children. If all are already folded or there are no children, also fold parent.
                    if (isCollapsed || !recursive || toToggle.length === 0) {
                        toToggle.push(region);
                    }
                }
                foldingModel.toggleCollapseState(toToggle);
                this.reveal({ lineNumber, column: 1 });
            }
        }
    }
    reveal(position) {
        this.editor.revealPositionInCenterIfOutsideViewport(position, 0 /* ScrollType.Smooth */);
    }
};
FoldingController.ID = 'editor.contrib.folding';
FoldingController = __decorate([
    __param(1, contextkey/* IContextKeyService */.i6),
    __param(2, languageConfigurationRegistry/* ILanguageConfigurationService */.c_),
    __param(3, notification/* INotificationService */.lT),
    __param(4, languageFeatureDebounce/* ILanguageFeatureDebounceService */.A),
    __param(5, languageFeatures/* ILanguageFeaturesService */.p)
], FoldingController);
class RangesLimitReporter {
    constructor(editor) {
        this.editor = editor;
        this._onDidChange = new common_event/* Emitter */.Q5();
        this._computed = 0;
        this._limited = false;
    }
    get limit() {
        return this.editor.getOptions().get(45 /* EditorOption.foldingMaximumRegions */);
    }
    update(computed, limited) {
        if (computed !== this._computed || limited !== this._limited) {
            this._computed = computed;
            this._limited = limited;
            this._onDidChange.fire();
        }
    }
}
class FoldingAction extends editorExtensions/* EditorAction */.R6 {
    runEditorCommand(accessor, editor, args) {
        const languageConfigurationService = accessor.get(languageConfigurationRegistry/* ILanguageConfigurationService */.c_);
        const foldingController = FoldingController.get(editor);
        if (!foldingController) {
            return;
        }
        const foldingModelPromise = foldingController.getFoldingModel();
        if (foldingModelPromise) {
            this.reportTelemetry(accessor, editor);
            return foldingModelPromise.then(foldingModel => {
                if (foldingModel) {
                    this.invoke(foldingController, foldingModel, editor, args, languageConfigurationService);
                    const selection = editor.getSelection();
                    if (selection) {
                        foldingController.reveal(selection.getStartPosition());
                    }
                }
            });
        }
    }
    getSelectedLines(editor) {
        const selections = editor.getSelections();
        return selections ? selections.map(s => s.startLineNumber) : [];
    }
    getLineNumbers(args, editor) {
        if (args && args.selectionLines) {
            return args.selectionLines.map(l => l + 1); // to 0-bases line numbers
        }
        return this.getSelectedLines(editor);
    }
    run(_accessor, _editor) {
    }
}
function foldingArgumentsConstraint(args) {
    if (!types/* isUndefined */.o8(args)) {
        if (!types/* isObject */.Kn(args)) {
            return false;
        }
        const foldingArgs = args;
        if (!types/* isUndefined */.o8(foldingArgs.levels) && !types/* isNumber */.hj(foldingArgs.levels)) {
            return false;
        }
        if (!types/* isUndefined */.o8(foldingArgs.direction) && !types/* isString */.HD(foldingArgs.direction)) {
            return false;
        }
        if (!types/* isUndefined */.o8(foldingArgs.selectionLines) && (!Array.isArray(foldingArgs.selectionLines) || !foldingArgs.selectionLines.every(types/* isNumber */.hj))) {
            return false;
        }
    }
    return true;
}
class UnfoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.unfold',
            label: nls/* localize */.NC('unfoldAction.label', "Unfold"),
            alias: 'Unfold',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 94 /* KeyCode.BracketRight */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 94 /* KeyCode.BracketRight */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            description: {
                description: 'Unfold the content in the editor',
                args: [
                    {
                        name: 'Unfold editor argument',
                        description: `Property-value pairs that can be passed through this argument:
						* 'levels': Number of levels to unfold. If not set, defaults to 1.
						* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
						* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.
						`,
                        constraint: foldingArgumentsConstraint,
                        schema: {
                            'type': 'object',
                            'properties': {
                                'levels': {
                                    'type': 'number',
                                    'default': 1
                                },
                                'direction': {
                                    'type': 'string',
                                    'enum': ['up', 'down'],
                                    'default': 'down'
                                },
                                'selectionLines': {
                                    'type': 'array',
                                    'items': {
                                        'type': 'number'
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, args) {
        const levels = args && args.levels || 1;
        const lineNumbers = this.getLineNumbers(args, editor);
        if (args && args.direction === 'up') {
            setCollapseStateLevelsUp(foldingModel, false, levels, lineNumbers);
        }
        else {
            setCollapseStateLevelsDown(foldingModel, false, levels, lineNumbers);
        }
    }
}
class UnFoldRecursivelyAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.unfoldRecursively',
            label: nls/* localize */.NC('unFoldRecursivelyAction.label', "Unfold Recursively"),
            alias: 'Unfold Recursively',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 94 /* KeyCode.BracketRight */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, _args) {
        setCollapseStateLevelsDown(foldingModel, false, Number.MAX_VALUE, this.getSelectedLines(editor));
    }
}
class FoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.fold',
            label: nls/* localize */.NC('foldAction.label', "Fold"),
            alias: 'Fold',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 92 /* KeyCode.BracketLeft */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 92 /* KeyCode.BracketLeft */
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            description: {
                description: 'Fold the content in the editor',
                args: [
                    {
                        name: 'Fold editor argument',
                        description: `Property-value pairs that can be passed through this argument:
							* 'levels': Number of levels to fold.
							* 'direction': If 'up', folds given number of levels up otherwise folds down.
							* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
							If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
						`,
                        constraint: foldingArgumentsConstraint,
                        schema: {
                            'type': 'object',
                            'properties': {
                                'levels': {
                                    'type': 'number',
                                },
                                'direction': {
                                    'type': 'string',
                                    'enum': ['up', 'down'],
                                },
                                'selectionLines': {
                                    'type': 'array',
                                    'items': {
                                        'type': 'number'
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, args) {
        const lineNumbers = this.getLineNumbers(args, editor);
        const levels = args && args.levels;
        const direction = args && args.direction;
        if (typeof levels !== 'number' && typeof direction !== 'string') {
            // fold the region at the location or if already collapsed, the first uncollapsed parent instead.
            setCollapseStateUp(foldingModel, true, lineNumbers);
        }
        else {
            if (direction === 'up') {
                setCollapseStateLevelsUp(foldingModel, true, levels || 1, lineNumbers);
            }
            else {
                setCollapseStateLevelsDown(foldingModel, true, levels || 1, lineNumbers);
            }
        }
    }
}
class ToggleFoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.toggleFold',
            label: nls/* localize */.NC('toggleFoldAction.label', "Toggle Fold"),
            alias: 'Toggle Fold',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 42 /* KeyCode.KeyL */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        toggleCollapseState(foldingModel, 1, selectedLines);
    }
}
class FoldRecursivelyAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.foldRecursively',
            label: nls/* localize */.NC('foldRecursivelyAction.label', "Fold Recursively"),
            alias: 'Fold Recursively',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 92 /* KeyCode.BracketLeft */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        setCollapseStateLevelsDown(foldingModel, true, Number.MAX_VALUE, selectedLines);
    }
}
class FoldAllBlockCommentsAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.foldAllBlockComments',
            label: nls/* localize */.NC('foldAllBlockComments.label', "Fold All Block Comments"),
            alias: 'Fold All Block Comments',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 90 /* KeyCode.Slash */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, args, languageConfigurationService) {
        if (foldingModel.regions.hasTypes()) {
            setCollapseStateForType(foldingModel, languages/* FoldingRangeKind */.AD.Comment.value, true);
        }
        else {
            const editorModel = editor.getModel();
            if (!editorModel) {
                return;
            }
            const comments = languageConfigurationService.getLanguageConfiguration(editorModel.getLanguageId()).comments;
            if (comments && comments.blockCommentStartToken) {
                const regExp = new RegExp('^\\s*' + (0,strings/* escapeRegExpCharacters */.ec)(comments.blockCommentStartToken));
                setCollapseStateForMatchingLines(foldingModel, regExp, true);
            }
        }
    }
}
class FoldAllRegionsAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.foldAllMarkerRegions',
            label: nls/* localize */.NC('foldAllMarkerRegions.label', "Fold All Regions"),
            alias: 'Fold All Regions',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 29 /* KeyCode.Digit8 */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, args, languageConfigurationService) {
        if (foldingModel.regions.hasTypes()) {
            setCollapseStateForType(foldingModel, languages/* FoldingRangeKind */.AD.Region.value, true);
        }
        else {
            const editorModel = editor.getModel();
            if (!editorModel) {
                return;
            }
            const foldingRules = languageConfigurationService.getLanguageConfiguration(editorModel.getLanguageId()).foldingRules;
            if (foldingRules && foldingRules.markers && foldingRules.markers.start) {
                const regExp = new RegExp(foldingRules.markers.start);
                setCollapseStateForMatchingLines(foldingModel, regExp, true);
            }
        }
    }
}
class UnfoldAllRegionsAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.unfoldAllMarkerRegions',
            label: nls/* localize */.NC('unfoldAllMarkerRegions.label', "Unfold All Regions"),
            alias: 'Unfold All Regions',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 30 /* KeyCode.Digit9 */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor, args, languageConfigurationService) {
        if (foldingModel.regions.hasTypes()) {
            setCollapseStateForType(foldingModel, languages/* FoldingRangeKind */.AD.Region.value, false);
        }
        else {
            const editorModel = editor.getModel();
            if (!editorModel) {
                return;
            }
            const foldingRules = languageConfigurationService.getLanguageConfiguration(editorModel.getLanguageId()).foldingRules;
            if (foldingRules && foldingRules.markers && foldingRules.markers.start) {
                const regExp = new RegExp(foldingRules.markers.start);
                setCollapseStateForMatchingLines(foldingModel, regExp, false);
            }
        }
    }
}
class FoldAllRegionsExceptAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.foldAllExcept',
            label: nls/* localize */.NC('foldAllExcept.label', "Fold All Regions Except Selected"),
            alias: 'Fold All Regions Except Selected',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 88 /* KeyCode.Minus */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        setCollapseStateForRest(foldingModel, true, selectedLines);
    }
}
class UnfoldAllRegionsExceptAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.unfoldAllExcept',
            label: nls/* localize */.NC('unfoldAllExcept.label', "Unfold All Regions Except Selected"),
            alias: 'Unfold All Regions Except Selected',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 86 /* KeyCode.Equal */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        setCollapseStateForRest(foldingModel, false, selectedLines);
    }
}
class FoldAllAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.foldAll',
            label: nls/* localize */.NC('foldAllAction.label', "Fold All"),
            alias: 'Fold All',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 21 /* KeyCode.Digit0 */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, _editor) {
        setCollapseStateLevelsDown(foldingModel, true);
    }
}
class UnfoldAllAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.unfoldAll',
            label: nls/* localize */.NC('unfoldAllAction.label', "Unfold All"),
            alias: 'Unfold All',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 40 /* KeyCode.KeyJ */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, _editor) {
        setCollapseStateLevelsDown(foldingModel, false);
    }
}
class FoldLevelAction extends FoldingAction {
    getFoldingLevel() {
        return parseInt(this.id.substr(FoldLevelAction.ID_PREFIX.length));
    }
    invoke(_foldingController, foldingModel, editor) {
        setCollapseStateAtLevel(foldingModel, this.getFoldingLevel(), true, this.getSelectedLines(editor));
    }
}
FoldLevelAction.ID_PREFIX = 'editor.foldLevel';
FoldLevelAction.ID = (level) => FoldLevelAction.ID_PREFIX + level;
/** Action to go to the parent fold of current line */
class GotoParentFoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.gotoParentFold',
            label: nls/* localize */.NC('gotoParentFold.label', "Go to Parent Fold"),
            alias: 'Go to Parent Fold',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        if (selectedLines.length > 0) {
            const startLineNumber = getParentFoldLine(selectedLines[0], foldingModel);
            if (startLineNumber !== null) {
                editor.setSelection({
                    startLineNumber: startLineNumber,
                    startColumn: 1,
                    endLineNumber: startLineNumber,
                    endColumn: 1
                });
            }
        }
    }
}
/** Action to go to the previous fold of current line */
class GotoPreviousFoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.gotoPreviousFold',
            label: nls/* localize */.NC('gotoPreviousFold.label', "Go to Previous Folding Range"),
            alias: 'Go to Previous Folding Range',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        if (selectedLines.length > 0) {
            const startLineNumber = getPreviousFoldLine(selectedLines[0], foldingModel);
            if (startLineNumber !== null) {
                editor.setSelection({
                    startLineNumber: startLineNumber,
                    startColumn: 1,
                    endLineNumber: startLineNumber,
                    endColumn: 1
                });
            }
        }
    }
}
/** Action to go to the next fold of current line */
class GotoNextFoldAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.gotoNextFold',
            label: nls/* localize */.NC('gotoNextFold.label', "Go to Next Folding Range"),
            alias: 'Go to Next Folding Range',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        const selectedLines = this.getSelectedLines(editor);
        if (selectedLines.length > 0) {
            const startLineNumber = getNextFoldLine(selectedLines[0], foldingModel);
            if (startLineNumber !== null) {
                editor.setSelection({
                    startLineNumber: startLineNumber,
                    startColumn: 1,
                    endLineNumber: startLineNumber,
                    endColumn: 1
                });
            }
        }
    }
}
class FoldRangeFromSelectionAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.createFoldingRangeFromSelection',
            label: nls/* localize */.NC('createManualFoldRange.label', "Create Folding Range from Selection"),
            alias: 'Create Folding Range from Selection',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 87 /* KeyCode.Comma */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(_foldingController, foldingModel, editor) {
        var _a;
        const collapseRanges = [];
        const selections = editor.getSelections();
        if (selections) {
            for (const selection of selections) {
                let endLineNumber = selection.endLineNumber;
                if (selection.endColumn === 1) {
                    --endLineNumber;
                }
                if (endLineNumber > selection.startLineNumber) {
                    collapseRanges.push({
                        startLineNumber: selection.startLineNumber,
                        endLineNumber: endLineNumber,
                        type: undefined,
                        isCollapsed: true,
                        source: 1 /* FoldSource.userDefined */
                    });
                    editor.setSelection({
                        startLineNumber: selection.startLineNumber,
                        startColumn: 1,
                        endLineNumber: selection.startLineNumber,
                        endColumn: 1
                    });
                }
            }
            if (collapseRanges.length > 0) {
                collapseRanges.sort((a, b) => {
                    return a.startLineNumber - b.startLineNumber;
                });
                const newRanges = foldingRanges/* FoldingRegions */.MN.sanitizeAndMerge(foldingModel.regions, collapseRanges, (_a = editor.getModel()) === null || _a === void 0 ? void 0 : _a.getLineCount());
                foldingModel.updatePost(foldingRanges/* FoldingRegions */.MN.fromFoldRanges(newRanges));
            }
        }
    }
}
class RemoveFoldRangeFromSelectionAction extends FoldingAction {
    constructor() {
        super({
            id: 'editor.removeManualFoldingRanges',
            label: nls/* localize */.NC('removeManualFoldingRanges.label', "Remove Manual Folding Ranges"),
            alias: 'Remove Manual Folding Ranges',
            precondition: CONTEXT_FOLDING_ENABLED,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 89 /* KeyCode.Period */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    invoke(foldingController, foldingModel, editor) {
        const selections = editor.getSelections();
        if (selections) {
            const ranges = [];
            for (const selection of selections) {
                const { startLineNumber, endLineNumber } = selection;
                ranges.push(endLineNumber >= startLineNumber ? { startLineNumber, endLineNumber } : { endLineNumber, startLineNumber });
            }
            foldingModel.removeManualRanges(ranges);
            foldingController.triggerFoldingModelChanged();
        }
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(FoldingController.ID, FoldingController, 0 /* EditorContributionInstantiation.Eager */); // eager because it uses `saveViewState`/`restoreViewState`
(0,editorExtensions/* registerEditorAction */.Qr)(UnfoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(UnFoldRecursivelyAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldRecursivelyAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldAllAction);
(0,editorExtensions/* registerEditorAction */.Qr)(UnfoldAllAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldAllBlockCommentsAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldAllRegionsAction);
(0,editorExtensions/* registerEditorAction */.Qr)(UnfoldAllRegionsAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldAllRegionsExceptAction);
(0,editorExtensions/* registerEditorAction */.Qr)(UnfoldAllRegionsExceptAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ToggleFoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(GotoParentFoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(GotoPreviousFoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(GotoNextFoldAction);
(0,editorExtensions/* registerEditorAction */.Qr)(FoldRangeFromSelectionAction);
(0,editorExtensions/* registerEditorAction */.Qr)(RemoveFoldRangeFromSelectionAction);
for (let i = 1; i <= 7; i++) {
    (0,editorExtensions/* registerInstantiatedEditorAction */.QG)(new FoldLevelAction({
        id: FoldLevelAction.ID(i),
        label: nls/* localize */.NC('foldLevelAction.label', "Fold Level {0}", i),
        alias: `Fold Level ${i}`,
        precondition: CONTEXT_FOLDING_ENABLED,
        kbOpts: {
            kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
            primary: (0,keyCodes/* KeyChord */.gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | (21 /* KeyCode.Digit0 */ + i)),
            weight: 100 /* KeybindingWeight.EditorContrib */
        }
    }));
}
commands/* CommandsRegistry */.P.registerCommand('_executeFoldingRangeProvider', function (accessor, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [resource] = args;
        if (!(resource instanceof uri/* URI */.o)) {
            throw (0,errors/* illegalArgument */.b1)();
        }
        const languageFeaturesService = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
        const model = accessor.get(services_model/* IModelService */.q).getModel(resource);
        if (!model) {
            throw (0,errors/* illegalArgument */.b1)();
        }
        const configurationService = accessor.get(configuration/* IConfigurationService */.Ui);
        if (!configurationService.getValue('editor.folding', { resource })) {
            return [];
        }
        const languageConfigurationService = accessor.get(languageConfigurationRegistry/* ILanguageConfigurationService */.c_);
        const strategy = configurationService.getValue('editor.foldingStrategy', { resource });
        const foldingLimitReporter = {
            get limit() {
                return configurationService.getValue('editor.foldingMaximumRegions', { resource });
            },
            update: (computed, limited) => { }
        };
        const indentRangeProvider = new browser_indentRangeProvider/* IndentRangeProvider */.aI(model, languageConfigurationService, foldingLimitReporter);
        let rangeProvider = indentRangeProvider;
        if (strategy !== 'indentation') {
            const providers = FoldingController.getFoldingRangeProviders(languageFeaturesService, model);
            if (providers.length) {
                rangeProvider = new syntaxRangeProvider/* SyntaxRangeProvider */.e(model, providers, () => { }, foldingLimitReporter, indentRangeProvider);
            }
        }
        const ranges = yield rangeProvider.compute(cancellation/* CancellationToken */.T.None);
        const result = [];
        try {
            if (ranges) {
                for (let i = 0; i < ranges.length; i++) {
                    const type = ranges.getType(i);
                    result.push({ start: ranges.getStartLineNumber(i), end: ranges.getEndLineNumber(i), kind: type ? languages/* FoldingRangeKind */.AD.fromValue(type) : undefined });
                }
            }
            return result;
        }
        finally {
            rangeProvider.dispose();
        }
    });
});


/***/ }),

/***/ 96691:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MN: function() { return /* binding */ FoldingRegions; },
/* harmony export */   Xl: function() { return /* binding */ MAX_LINE_NUMBER; }
/* harmony export */ });
/* unused harmony exports foldSourceAbbr, MAX_FOLDING_REGIONS, FoldingRegion */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const foldSourceAbbr = {
    [0 /* FoldSource.provider */]: ' ',
    [1 /* FoldSource.userDefined */]: 'u',
    [2 /* FoldSource.recovered */]: 'r',
};
const MAX_FOLDING_REGIONS = 0xFFFF;
const MAX_LINE_NUMBER = 0xFFFFFF;
const MASK_INDENT = 0xFF000000;
class BitField {
    constructor(size) {
        const numWords = Math.ceil(size / 32);
        this._states = new Uint32Array(numWords);
    }
    get(index) {
        const arrayIndex = (index / 32) | 0;
        const bit = index % 32;
        return (this._states[arrayIndex] & (1 << bit)) !== 0;
    }
    set(index, newState) {
        const arrayIndex = (index / 32) | 0;
        const bit = index % 32;
        const value = this._states[arrayIndex];
        if (newState) {
            this._states[arrayIndex] = value | (1 << bit);
        }
        else {
            this._states[arrayIndex] = value & ~(1 << bit);
        }
    }
}
class FoldingRegions {
    constructor(startIndexes, endIndexes, types) {
        if (startIndexes.length !== endIndexes.length || startIndexes.length > MAX_FOLDING_REGIONS) {
            throw new Error('invalid startIndexes or endIndexes size');
        }
        this._startIndexes = startIndexes;
        this._endIndexes = endIndexes;
        this._collapseStates = new BitField(startIndexes.length);
        this._userDefinedStates = new BitField(startIndexes.length);
        this._recoveredStates = new BitField(startIndexes.length);
        this._types = types;
        this._parentsComputed = false;
    }
    ensureParentIndices() {
        if (!this._parentsComputed) {
            this._parentsComputed = true;
            const parentIndexes = [];
            const isInsideLast = (startLineNumber, endLineNumber) => {
                const index = parentIndexes[parentIndexes.length - 1];
                return this.getStartLineNumber(index) <= startLineNumber && this.getEndLineNumber(index) >= endLineNumber;
            };
            for (let i = 0, len = this._startIndexes.length; i < len; i++) {
                const startLineNumber = this._startIndexes[i];
                const endLineNumber = this._endIndexes[i];
                if (startLineNumber > MAX_LINE_NUMBER || endLineNumber > MAX_LINE_NUMBER) {
                    throw new Error('startLineNumber or endLineNumber must not exceed ' + MAX_LINE_NUMBER);
                }
                while (parentIndexes.length > 0 && !isInsideLast(startLineNumber, endLineNumber)) {
                    parentIndexes.pop();
                }
                const parentIndex = parentIndexes.length > 0 ? parentIndexes[parentIndexes.length - 1] : -1;
                parentIndexes.push(i);
                this._startIndexes[i] = startLineNumber + ((parentIndex & 0xFF) << 24);
                this._endIndexes[i] = endLineNumber + ((parentIndex & 0xFF00) << 16);
            }
        }
    }
    get length() {
        return this._startIndexes.length;
    }
    getStartLineNumber(index) {
        return this._startIndexes[index] & MAX_LINE_NUMBER;
    }
    getEndLineNumber(index) {
        return this._endIndexes[index] & MAX_LINE_NUMBER;
    }
    getType(index) {
        return this._types ? this._types[index] : undefined;
    }
    hasTypes() {
        return !!this._types;
    }
    isCollapsed(index) {
        return this._collapseStates.get(index);
    }
    setCollapsed(index, newState) {
        this._collapseStates.set(index, newState);
    }
    isUserDefined(index) {
        return this._userDefinedStates.get(index);
    }
    setUserDefined(index, newState) {
        return this._userDefinedStates.set(index, newState);
    }
    isRecovered(index) {
        return this._recoveredStates.get(index);
    }
    setRecovered(index, newState) {
        return this._recoveredStates.set(index, newState);
    }
    getSource(index) {
        if (this.isUserDefined(index)) {
            return 1 /* FoldSource.userDefined */;
        }
        else if (this.isRecovered(index)) {
            return 2 /* FoldSource.recovered */;
        }
        return 0 /* FoldSource.provider */;
    }
    setSource(index, source) {
        if (source === 1 /* FoldSource.userDefined */) {
            this.setUserDefined(index, true);
            this.setRecovered(index, false);
        }
        else if (source === 2 /* FoldSource.recovered */) {
            this.setUserDefined(index, false);
            this.setRecovered(index, true);
        }
        else {
            this.setUserDefined(index, false);
            this.setRecovered(index, false);
        }
    }
    setCollapsedAllOfType(type, newState) {
        let hasChanged = false;
        if (this._types) {
            for (let i = 0; i < this._types.length; i++) {
                if (this._types[i] === type) {
                    this.setCollapsed(i, newState);
                    hasChanged = true;
                }
            }
        }
        return hasChanged;
    }
    toRegion(index) {
        return new FoldingRegion(this, index);
    }
    getParentIndex(index) {
        this.ensureParentIndices();
        const parent = ((this._startIndexes[index] & MASK_INDENT) >>> 24) + ((this._endIndexes[index] & MASK_INDENT) >>> 16);
        if (parent === MAX_FOLDING_REGIONS) {
            return -1;
        }
        return parent;
    }
    contains(index, line) {
        return this.getStartLineNumber(index) <= line && this.getEndLineNumber(index) >= line;
    }
    findIndex(line) {
        let low = 0, high = this._startIndexes.length;
        if (high === 0) {
            return -1; // no children
        }
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (line < this.getStartLineNumber(mid)) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        return low - 1;
    }
    findRange(line) {
        let index = this.findIndex(line);
        if (index >= 0) {
            const endLineNumber = this.getEndLineNumber(index);
            if (endLineNumber >= line) {
                return index;
            }
            index = this.getParentIndex(index);
            while (index !== -1) {
                if (this.contains(index, line)) {
                    return index;
                }
                index = this.getParentIndex(index);
            }
        }
        return -1;
    }
    toString() {
        const res = [];
        for (let i = 0; i < this.length; i++) {
            res[i] = `[${foldSourceAbbr[this.getSource(i)]}${this.isCollapsed(i) ? '+' : '-'}] ${this.getStartLineNumber(i)}/${this.getEndLineNumber(i)}`;
        }
        return res.join(', ');
    }
    toFoldRange(index) {
        return {
            startLineNumber: this._startIndexes[index] & MAX_LINE_NUMBER,
            endLineNumber: this._endIndexes[index] & MAX_LINE_NUMBER,
            type: this._types ? this._types[index] : undefined,
            isCollapsed: this.isCollapsed(index),
            source: this.getSource(index)
        };
    }
    static fromFoldRanges(ranges) {
        const rangesLength = ranges.length;
        const startIndexes = new Uint32Array(rangesLength);
        const endIndexes = new Uint32Array(rangesLength);
        let types = [];
        let gotTypes = false;
        for (let i = 0; i < rangesLength; i++) {
            const range = ranges[i];
            startIndexes[i] = range.startLineNumber;
            endIndexes[i] = range.endLineNumber;
            types.push(range.type);
            if (range.type) {
                gotTypes = true;
            }
        }
        if (!gotTypes) {
            types = undefined;
        }
        const regions = new FoldingRegions(startIndexes, endIndexes, types);
        for (let i = 0; i < rangesLength; i++) {
            if (ranges[i].isCollapsed) {
                regions.setCollapsed(i, true);
            }
            regions.setSource(i, ranges[i].source);
        }
        return regions;
    }
    /**
     * Two inputs, each a FoldingRegions or a FoldRange[], are merged.
     * Each input must be pre-sorted on startLineNumber.
     * The first list is assumed to always include all regions currently defined by range providers.
     * The second list only contains the previously collapsed and all manual ranges.
     * If the line position matches, the range of the new range is taken, and the range is no longer manual
     * When an entry in one list overlaps an entry in the other, the second list's entry "wins" and
     * overlapping entries in the first list are discarded.
     * Invalid entries are discarded. An entry is invalid if:
     * 		the start and end line numbers aren't a valid range of line numbers,
     * 		it is out of sequence or has the same start line as a preceding entry,
     * 		it overlaps a preceding entry and is not fully contained by that entry.
     */
    static sanitizeAndMerge(rangesA, rangesB, maxLineNumber) {
        maxLineNumber = maxLineNumber !== null && maxLineNumber !== void 0 ? maxLineNumber : Number.MAX_VALUE;
        const getIndexedFunction = (r, limit) => {
            return Array.isArray(r)
                ? ((i) => { return (i < limit) ? r[i] : undefined; })
                : ((i) => { return (i < limit) ? r.toFoldRange(i) : undefined; });
        };
        const getA = getIndexedFunction(rangesA, rangesA.length);
        const getB = getIndexedFunction(rangesB, rangesB.length);
        let indexA = 0;
        let indexB = 0;
        let nextA = getA(0);
        let nextB = getB(0);
        const stackedRanges = [];
        let topStackedRange;
        let prevLineNumber = 0;
        const resultRanges = [];
        while (nextA || nextB) {
            let useRange = undefined;
            if (nextB && (!nextA || nextA.startLineNumber >= nextB.startLineNumber)) {
                if (nextA && nextA.startLineNumber === nextB.startLineNumber) {
                    if (nextB.source === 1 /* FoldSource.userDefined */) {
                        // a user defined range (possibly unfolded)
                        useRange = nextB;
                    }
                    else {
                        // a previously folded range or a (possibly unfolded) recovered range
                        useRange = nextA;
                        useRange.isCollapsed = nextB.isCollapsed && nextA.endLineNumber === nextB.endLineNumber;
                        useRange.source = 0 /* FoldSource.provider */;
                    }
                    nextA = getA(++indexA); // not necessary, just for speed
                }
                else {
                    useRange = nextB;
                    if (nextB.isCollapsed && nextB.source === 0 /* FoldSource.provider */) {
                        // a previously collapsed range
                        useRange.source = 2 /* FoldSource.recovered */;
                    }
                }
                nextB = getB(++indexB);
            }
            else {
                // nextA is next. The user folded B set takes precedence and we sometimes need to look
                // ahead in it to check for an upcoming conflict.
                let scanIndex = indexB;
                let prescanB = nextB;
                while (true) {
                    if (!prescanB || prescanB.startLineNumber > nextA.endLineNumber) {
                        useRange = nextA;
                        break; // no conflict, use this nextA
                    }
                    if (prescanB.source === 1 /* FoldSource.userDefined */ && prescanB.endLineNumber > nextA.endLineNumber) {
                        // we found a user folded range, it wins
                        break; // without setting nextResult, so this nextA gets skipped
                    }
                    prescanB = getB(++scanIndex);
                }
                nextA = getA(++indexA);
            }
            if (useRange) {
                while (topStackedRange
                    && topStackedRange.endLineNumber < useRange.startLineNumber) {
                    topStackedRange = stackedRanges.pop();
                }
                if (useRange.endLineNumber > useRange.startLineNumber
                    && useRange.startLineNumber > prevLineNumber
                    && useRange.endLineNumber <= maxLineNumber
                    && (!topStackedRange
                        || topStackedRange.endLineNumber >= useRange.endLineNumber)) {
                    resultRanges.push(useRange);
                    prevLineNumber = useRange.startLineNumber;
                    if (topStackedRange) {
                        stackedRanges.push(topStackedRange);
                    }
                    topStackedRange = useRange;
                }
            }
        }
        return resultRanges;
    }
}
class FoldingRegion {
    constructor(ranges, index) {
        this.ranges = ranges;
        this.index = index;
    }
    get startLineNumber() {
        return this.ranges.getStartLineNumber(this.index);
    }
    get endLineNumber() {
        return this.ranges.getEndLineNumber(this.index);
    }
    get regionIndex() {
        return this.index;
    }
    get parentIndex() {
        return this.ranges.getParentIndex(this.index);
    }
    get isCollapsed() {
        return this.ranges.isCollapsed(this.index);
    }
    containedBy(range) {
        return range.startLineNumber <= this.startLineNumber && range.endLineNumber >= this.endLineNumber;
    }
    containsLine(lineNumber) {
        return this.startLineNumber <= lineNumber && lineNumber <= this.endLineNumber;
    }
}


/***/ }),

/***/ 21280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aI: function() { return /* binding */ IndentRangeProvider; }
/* harmony export */ });
/* unused harmony exports RangesCollector, computeRanges */
/* harmony import */ var _common_model_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64299);
/* harmony import */ var _foldingRanges_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96691);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


const MAX_FOLDING_REGIONS_FOR_INDENT_DEFAULT = 5000;
const ID_INDENT_PROVIDER = 'indent';
class IndentRangeProvider {
    constructor(editorModel, languageConfigurationService, foldingRangesLimit) {
        this.editorModel = editorModel;
        this.languageConfigurationService = languageConfigurationService;
        this.foldingRangesLimit = foldingRangesLimit;
        this.id = ID_INDENT_PROVIDER;
    }
    dispose() { }
    compute(cancelationToken) {
        const foldingRules = this.languageConfigurationService.getLanguageConfiguration(this.editorModel.getLanguageId()).foldingRules;
        const offSide = foldingRules && !!foldingRules.offSide;
        const markers = foldingRules && foldingRules.markers;
        return Promise.resolve(computeRanges(this.editorModel, offSide, markers, this.foldingRangesLimit));
    }
}
// public only for testing
class RangesCollector {
    constructor(foldingRangesLimit) {
        this._startIndexes = [];
        this._endIndexes = [];
        this._indentOccurrences = [];
        this._length = 0;
        this._foldingRangesLimit = foldingRangesLimit;
    }
    insertFirst(startLineNumber, endLineNumber, indent) {
        if (startLineNumber > _foldingRanges_js__WEBPACK_IMPORTED_MODULE_0__/* .MAX_LINE_NUMBER */ .Xl || endLineNumber > _foldingRanges_js__WEBPACK_IMPORTED_MODULE_0__/* .MAX_LINE_NUMBER */ .Xl) {
            return;
        }
        const index = this._length;
        this._startIndexes[index] = startLineNumber;
        this._endIndexes[index] = endLineNumber;
        this._length++;
        if (indent < 1000) {
            this._indentOccurrences[indent] = (this._indentOccurrences[indent] || 0) + 1;
        }
    }
    toIndentRanges(model) {
        const limit = this._foldingRangesLimit.limit;
        if (this._length <= limit) {
            this._foldingRangesLimit.update(this._length, false);
            // reverse and create arrays of the exact length
            const startIndexes = new Uint32Array(this._length);
            const endIndexes = new Uint32Array(this._length);
            for (let i = this._length - 1, k = 0; i >= 0; i--, k++) {
                startIndexes[k] = this._startIndexes[i];
                endIndexes[k] = this._endIndexes[i];
            }
            return new _foldingRanges_js__WEBPACK_IMPORTED_MODULE_0__/* .FoldingRegions */ .MN(startIndexes, endIndexes);
        }
        else {
            this._foldingRangesLimit.update(this._length, limit);
            let entries = 0;
            let maxIndent = this._indentOccurrences.length;
            for (let i = 0; i < this._indentOccurrences.length; i++) {
                const n = this._indentOccurrences[i];
                if (n) {
                    if (n + entries > limit) {
                        maxIndent = i;
                        break;
                    }
                    entries += n;
                }
            }
            const tabSize = model.getOptions().tabSize;
            // reverse and create arrays of the exact length
            const startIndexes = new Uint32Array(limit);
            const endIndexes = new Uint32Array(limit);
            for (let i = this._length - 1, k = 0; i >= 0; i--) {
                const startIndex = this._startIndexes[i];
                const lineContent = model.getLineContent(startIndex);
                const indent = (0,_common_model_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .computeIndentLevel */ .q)(lineContent, tabSize);
                if (indent < maxIndent || (indent === maxIndent && entries++ < limit)) {
                    startIndexes[k] = startIndex;
                    endIndexes[k] = this._endIndexes[i];
                    k++;
                }
            }
            return new _foldingRanges_js__WEBPACK_IMPORTED_MODULE_0__/* .FoldingRegions */ .MN(startIndexes, endIndexes);
        }
    }
}
const foldingRangesLimitDefault = {
    limit: MAX_FOLDING_REGIONS_FOR_INDENT_DEFAULT,
    update: () => { }
};
function computeRanges(model, offSide, markers, foldingRangesLimit = foldingRangesLimitDefault) {
    const tabSize = model.getOptions().tabSize;
    const result = new RangesCollector(foldingRangesLimit);
    let pattern = undefined;
    if (markers) {
        pattern = new RegExp(`(${markers.start.source})|(?:${markers.end.source})`);
    }
    const previousRegions = [];
    const line = model.getLineCount() + 1;
    previousRegions.push({ indent: -1, endAbove: line, line }); // sentinel, to make sure there's at least one entry
    for (let line = model.getLineCount(); line > 0; line--) {
        const lineContent = model.getLineContent(line);
        const indent = (0,_common_model_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .computeIndentLevel */ .q)(lineContent, tabSize);
        let previous = previousRegions[previousRegions.length - 1];
        if (indent === -1) {
            if (offSide) {
                // for offSide languages, empty lines are associated to the previous block
                // note: the next block is already written to the results, so this only
                // impacts the end position of the block before
                previous.endAbove = line;
            }
            continue; // only whitespace
        }
        let m;
        if (pattern && (m = lineContent.match(pattern))) {
            // folding pattern match
            if (m[1]) { // start pattern match
                // discard all regions until the folding pattern
                let i = previousRegions.length - 1;
                while (i > 0 && previousRegions[i].indent !== -2) {
                    i--;
                }
                if (i > 0) {
                    previousRegions.length = i + 1;
                    previous = previousRegions[i];
                    // new folding range from pattern, includes the end line
                    result.insertFirst(line, previous.line, indent);
                    previous.line = line;
                    previous.indent = indent;
                    previous.endAbove = line;
                    continue;
                }
                else {
                    // no end marker found, treat line as a regular line
                }
            }
            else { // end pattern match
                previousRegions.push({ indent: -2, endAbove: line, line });
                continue;
            }
        }
        if (previous.indent > indent) {
            // discard all regions with larger indent
            do {
                previousRegions.pop();
                previous = previousRegions[previousRegions.length - 1];
            } while (previous.indent > indent);
            // new folding range
            const endLineNumber = previous.endAbove - 1;
            if (endLineNumber - line >= 1) { // needs at east size 1
                result.insertFirst(line, endLineNumber, indent);
            }
        }
        if (previous.indent === indent) {
            previous.endAbove = line;
        }
        else { // previous.indent < indent
            // new region with a bigger indent
            previousRegions.push({ indent, endAbove: line, line });
        }
    }
    return result.toIndentRanges(model);
}


/***/ }),

/***/ 2662:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ SyntaxRangeProvider; }
/* harmony export */ });
/* unused harmony export sanitizeRanges */
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _foldingRanges_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96691);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const foldingContext = {};
const ID_SYNTAX_PROVIDER = 'syntax';
class SyntaxRangeProvider {
    constructor(editorModel, providers, handleFoldingRangesChange, foldingRangesLimit, fallbackRangeProvider // used when all providers return null
    ) {
        this.editorModel = editorModel;
        this.providers = providers;
        this.handleFoldingRangesChange = handleFoldingRangesChange;
        this.foldingRangesLimit = foldingRangesLimit;
        this.fallbackRangeProvider = fallbackRangeProvider;
        this.id = ID_SYNTAX_PROVIDER;
        this.disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .DisposableStore */ .SL();
        if (fallbackRangeProvider) {
            this.disposables.add(fallbackRangeProvider);
        }
        for (const provider of providers) {
            if (typeof provider.onDidChange === 'function') {
                this.disposables.add(provider.onDidChange(handleFoldingRangesChange));
            }
        }
    }
    compute(cancellationToken) {
        return collectSyntaxRanges(this.providers, this.editorModel, cancellationToken).then(ranges => {
            var _a, _b;
            if (ranges) {
                const res = sanitizeRanges(ranges, this.foldingRangesLimit);
                return res;
            }
            return (_b = (_a = this.fallbackRangeProvider) === null || _a === void 0 ? void 0 : _a.compute(cancellationToken)) !== null && _b !== void 0 ? _b : null;
        });
    }
    dispose() {
        this.disposables.dispose();
    }
}
function collectSyntaxRanges(providers, model, cancellationToken) {
    let rangeData = null;
    const promises = providers.map((provider, i) => {
        return Promise.resolve(provider.provideFoldingRanges(model, foldingContext, cancellationToken)).then(ranges => {
            if (cancellationToken.isCancellationRequested) {
                return;
            }
            if (Array.isArray(ranges)) {
                if (!Array.isArray(rangeData)) {
                    rangeData = [];
                }
                const nLines = model.getLineCount();
                for (const r of ranges) {
                    if (r.start > 0 && r.end > r.start && r.end <= nLines) {
                        rangeData.push({ start: r.start, end: r.end, rank: i, kind: r.kind });
                    }
                }
            }
        }, _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedExternalError */ .Cp);
    });
    return Promise.all(promises).then(_ => {
        return rangeData;
    });
}
class RangesCollector {
    constructor(foldingRangesLimit) {
        this._startIndexes = [];
        this._endIndexes = [];
        this._nestingLevels = [];
        this._nestingLevelCounts = [];
        this._types = [];
        this._length = 0;
        this._foldingRangesLimit = foldingRangesLimit;
    }
    add(startLineNumber, endLineNumber, type, nestingLevel) {
        if (startLineNumber > _foldingRanges_js__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LINE_NUMBER */ .Xl || endLineNumber > _foldingRanges_js__WEBPACK_IMPORTED_MODULE_2__/* .MAX_LINE_NUMBER */ .Xl) {
            return;
        }
        const index = this._length;
        this._startIndexes[index] = startLineNumber;
        this._endIndexes[index] = endLineNumber;
        this._nestingLevels[index] = nestingLevel;
        this._types[index] = type;
        this._length++;
        if (nestingLevel < 30) {
            this._nestingLevelCounts[nestingLevel] = (this._nestingLevelCounts[nestingLevel] || 0) + 1;
        }
    }
    toIndentRanges() {
        const limit = this._foldingRangesLimit.limit;
        if (this._length <= limit) {
            this._foldingRangesLimit.update(this._length, false);
            const startIndexes = new Uint32Array(this._length);
            const endIndexes = new Uint32Array(this._length);
            for (let i = 0; i < this._length; i++) {
                startIndexes[i] = this._startIndexes[i];
                endIndexes[i] = this._endIndexes[i];
            }
            return new _foldingRanges_js__WEBPACK_IMPORTED_MODULE_2__/* .FoldingRegions */ .MN(startIndexes, endIndexes, this._types);
        }
        else {
            this._foldingRangesLimit.update(this._length, limit);
            let entries = 0;
            let maxLevel = this._nestingLevelCounts.length;
            for (let i = 0; i < this._nestingLevelCounts.length; i++) {
                const n = this._nestingLevelCounts[i];
                if (n) {
                    if (n + entries > limit) {
                        maxLevel = i;
                        break;
                    }
                    entries += n;
                }
            }
            const startIndexes = new Uint32Array(limit);
            const endIndexes = new Uint32Array(limit);
            const types = [];
            for (let i = 0, k = 0; i < this._length; i++) {
                const level = this._nestingLevels[i];
                if (level < maxLevel || (level === maxLevel && entries++ < limit)) {
                    startIndexes[k] = this._startIndexes[i];
                    endIndexes[k] = this._endIndexes[i];
                    types[k] = this._types[i];
                    k++;
                }
            }
            return new _foldingRanges_js__WEBPACK_IMPORTED_MODULE_2__/* .FoldingRegions */ .MN(startIndexes, endIndexes, types);
        }
    }
}
function sanitizeRanges(rangeData, foldingRangesLimit) {
    const sorted = rangeData.sort((d1, d2) => {
        let diff = d1.start - d2.start;
        if (diff === 0) {
            diff = d1.rank - d2.rank;
        }
        return diff;
    });
    const collector = new RangesCollector(foldingRangesLimit);
    let top = undefined;
    const previous = [];
    for (const entry of sorted) {
        if (!top) {
            top = entry;
            collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
        }
        else {
            if (entry.start > top.start) {
                if (entry.end <= top.end) {
                    previous.push(top);
                    top = entry;
                    collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
                }
                else {
                    if (entry.start > top.end) {
                        do {
                            top = previous.pop();
                        } while (top && entry.start > top.end);
                        if (top) {
                            previous.push(top);
                        }
                        top = entry;
                    }
                    collector.add(entry.start, entry.end, entry.kind && entry.kind.value, previous.length);
                }
            }
        }
    }
    return collector.toIndentRanges();
}


/***/ })

}]);