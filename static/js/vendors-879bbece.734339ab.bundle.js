"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-879bbece"],{

/***/ 43704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .findOptionsWidget {\n\tbackground-color: var(--vscode-editorWidget-background);\n\tcolor: var(--vscode-editorWidget-foreground);\n\tbox-shadow: 0 0 8px 2px var(--vscode-widget-shadow);\n\tborder: 2px solid var(--vscode-contrastBorder);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 26276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Find widget */\n.monaco-editor .find-widget {\n\tposition: absolute;\n\tz-index: 35;\n\theight: 33px;\n\toverflow: hidden;\n\tline-height: 19px;\n\ttransition: transform 200ms linear;\n\tpadding: 0 4px;\n\tbox-sizing: border-box;\n\ttransform: translateY(calc(-100% - 10px)); /* shadow (10px) */\n\tborder-bottom-left-radius: 4px;\n\tborder-bottom-right-radius: 4px;\n}\n\n.monaco-workbench.reduce-motion .monaco-editor .find-widget {\n\ttransition: transform 0ms linear;\n}\n\n.monaco-editor .find-widget textarea {\n\tmargin: 0px;\n}\n\n.monaco-editor .find-widget.hiddenEditor {\n\tdisplay: none;\n}\n\n/* Find widget when replace is toggled on */\n.monaco-editor .find-widget.replaceToggled > .replace-part {\n\tdisplay: flex;\n}\n\n.monaco-editor .find-widget.visible  {\n\ttransform: translateY(0);\n}\n\n.monaco-editor .find-widget .monaco-inputbox.synthetic-focus {\n\toutline: 1px solid -webkit-focus-ring-color;\n\toutline-offset: -1px;\n}\n\n.monaco-editor .find-widget .monaco-inputbox .input {\n\tbackground-color: transparent;\n\tmin-height: 0;\n}\n\n.monaco-editor .find-widget .monaco-findInput .input {\n\tfont-size: 13px;\n}\n\n.monaco-editor .find-widget > .find-part,\n.monaco-editor .find-widget > .replace-part {\n\tmargin: 3px 0 0 17px;\n\tfont-size: 12px;\n\tdisplay: flex;\n}\n\n.monaco-editor .find-widget > .find-part .monaco-inputbox,\n.monaco-editor .find-widget > .replace-part .monaco-inputbox {\n\tmin-height: 25px;\n}\n\n\n.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {\n\tpadding-right: 22px;\n}\n\n.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .input,\n.monaco-editor .find-widget > .find-part .monaco-inputbox > .ibwrapper > .mirror,\n.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .input,\n.monaco-editor .find-widget > .replace-part .monaco-inputbox > .ibwrapper > .mirror {\n\tpadding-top: 2px;\n\tpadding-bottom: 2px;\n}\n\n.monaco-editor .find-widget > .find-part .find-actions {\n\theight: 25px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.monaco-editor .find-widget > .replace-part .replace-actions {\n\theight: 25px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.monaco-editor .find-widget .monaco-findInput {\n\tvertical-align: middle;\n\tdisplay: flex;\n\tflex:1;\n}\n\n.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element {\n\t/* Make sure textarea inherits the width correctly */\n\twidth: 100%;\n}\n\n.monaco-editor .find-widget .monaco-findInput .monaco-scrollable-element .scrollbar.vertical {\n\t/* Hide vertical scrollbar */\n\topacity: 0;\n}\n\n.monaco-editor .find-widget .matchesCount {\n\tdisplay: flex;\n\tflex: initial;\n\tmargin: 0 0 0 3px;\n\tpadding: 2px 0 0 2px;\n\theight: 25px;\n\tvertical-align: middle;\n\tbox-sizing: border-box;\n\ttext-align: center;\n\tline-height: 23px;\n}\n\n.monaco-editor .find-widget .button {\n\twidth: 16px;\n\theight: 16px;\n\tpadding: 3px;\n\tborder-radius: 5px;\n\tdisplay: flex;\n\tflex: initial;\n\tmargin-left: 3px;\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n/* find in selection button */\n.monaco-editor .find-widget .codicon-find-selection {\n\twidth: 22px;\n\theight: 22px;\n\tpadding: 3px;\n\tborder-radius: 5px;\n}\n\n.monaco-editor .find-widget .button.left {\n\tmargin-left: 0;\n\tmargin-right: 3px;\n}\n\n.monaco-editor .find-widget .button.wide {\n\twidth: auto;\n\tpadding: 1px 6px;\n\ttop: -1px;\n}\n\n.monaco-editor .find-widget .button.toggle {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 3px;\n\twidth: 18px;\n\theight: 100%;\n\tborder-radius: 0;\n\tbox-sizing: border-box;\n}\n\n.monaco-editor .find-widget .button.toggle.disabled {\n\tdisplay: none;\n}\n\n.monaco-editor .find-widget .disabled {\n\tcolor: var(--vscode-disabledForeground);\n\tcursor: default;\n}\n\n.monaco-editor .find-widget > .replace-part {\n\tdisplay: none;\n}\n\n.monaco-editor .find-widget > .replace-part > .monaco-findInput {\n\tposition: relative;\n\tdisplay: flex;\n\tvertical-align: middle;\n\tflex: auto;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n}\n\n.monaco-editor .find-widget > .replace-part > .monaco-findInput > .controls {\n\tposition: absolute;\n\ttop: 3px;\n\tright: 2px;\n}\n\n/* REDUCED */\n.monaco-editor .find-widget.reduced-find-widget .matchesCount {\n\tdisplay:none;\n}\n\n/* NARROW (SMALLER THAN REDUCED) */\n.monaco-editor .find-widget.narrow-find-widget {\n\tmax-width: 257px !important;\n}\n\n/* COLLAPSED (SMALLER THAN NARROW) */\n.monaco-editor .find-widget.collapsed-find-widget {\n\tmax-width: 170px !important;\n}\n\n.monaco-editor .find-widget.collapsed-find-widget .button.previous,\n.monaco-editor .find-widget.collapsed-find-widget .button.next,\n.monaco-editor .find-widget.collapsed-find-widget .button.replace,\n.monaco-editor .find-widget.collapsed-find-widget .button.replace-all,\n.monaco-editor .find-widget.collapsed-find-widget > .find-part .monaco-findInput .controls {\n\tdisplay:none;\n}\n\n.monaco-editor .findMatch {\n\tanimation-duration: 0;\n\tanimation-name: inherit !important;\n}\n\n.monaco-editor .find-widget .monaco-sash {\n\tleft: 0 !important;\n}\n\n.monaco-editor.hc-black .find-widget .button:before {\n\tposition: relative;\n\ttop: 1px;\n\tleft: 2px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 95287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CommonFindController: function() { return /* binding */ CommonFindController; },
  FindController: function() { return /* binding */ FindController; },
  MatchFindAction: function() { return /* binding */ MatchFindAction; },
  MoveToMatchFindAction: function() { return /* binding */ MoveToMatchFindAction; },
  NextMatchFindAction: function() { return /* binding */ NextMatchFindAction; },
  NextSelectionMatchFindAction: function() { return /* binding */ NextSelectionMatchFindAction; },
  PreviousMatchFindAction: function() { return /* binding */ PreviousMatchFindAction; },
  PreviousSelectionMatchFindAction: function() { return /* binding */ PreviousSelectionMatchFindAction; },
  SelectionMatchFindAction: function() { return /* binding */ SelectionMatchFindAction; },
  StartFindAction: function() { return /* binding */ StartFindAction; },
  StartFindReplaceAction: function() { return /* binding */ StartFindReplaceAction; },
  StartFindWithArgsAction: function() { return /* binding */ StartFindWithArgsAction; },
  StartFindWithSelectionAction: function() { return /* binding */ StartFindWithSelectionAction; },
  getSelectionSearchString: function() { return /* binding */ getSelectionSearchString; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/editorColorRegistry.js
var editorColorRegistry = __webpack_require__(66050);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(11754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/commands/replaceCommand.js
var replaceCommand = __webpack_require__(2056);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var core_position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(74980);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModelSearch.js
var textModelSearch = __webpack_require__(17768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js + 2 modules
var textModel = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findDecorations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class FindDecorations {
    constructor(editor) {
        this._editor = editor;
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
        this._startPosition = this._editor.getPosition();
    }
    dispose() {
        this._editor.removeDecorations(this._allDecorations());
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
    }
    reset() {
        this._decorations = [];
        this._overviewRulerApproximateDecorations = [];
        this._findScopeDecorationIds = [];
        this._rangeHighlightDecorationId = null;
        this._highlightedDecorationId = null;
    }
    getCount() {
        return this._decorations.length;
    }
    /** @deprecated use getFindScopes to support multiple selections */
    getFindScope() {
        if (this._findScopeDecorationIds[0]) {
            return this._editor.getModel().getDecorationRange(this._findScopeDecorationIds[0]);
        }
        return null;
    }
    getFindScopes() {
        if (this._findScopeDecorationIds.length) {
            const scopes = this._findScopeDecorationIds.map(findScopeDecorationId => this._editor.getModel().getDecorationRange(findScopeDecorationId)).filter(element => !!element);
            if (scopes.length) {
                return scopes;
            }
        }
        return null;
    }
    getStartPosition() {
        return this._startPosition;
    }
    setStartPosition(newStartPosition) {
        this._startPosition = newStartPosition;
        this.setCurrentFindMatch(null);
    }
    _getDecorationIndex(decorationId) {
        const index = this._decorations.indexOf(decorationId);
        if (index >= 0) {
            return index + 1;
        }
        return 1;
    }
    getDecorationRangeAt(index) {
        const decorationId = index < this._decorations.length ? this._decorations[index] : null;
        if (decorationId) {
            return this._editor.getModel().getDecorationRange(decorationId);
        }
        return null;
    }
    getCurrentMatchesPosition(desiredRange) {
        const candidates = this._editor.getModel().getDecorationsInRange(desiredRange);
        for (const candidate of candidates) {
            const candidateOpts = candidate.options;
            if (candidateOpts === FindDecorations._FIND_MATCH_DECORATION || candidateOpts === FindDecorations._CURRENT_FIND_MATCH_DECORATION) {
                return this._getDecorationIndex(candidate.id);
            }
        }
        // We don't know the current match position, so returns zero to show '?' in find widget
        return 0;
    }
    setCurrentFindMatch(nextMatch) {
        let newCurrentDecorationId = null;
        let matchPosition = 0;
        if (nextMatch) {
            for (let i = 0, len = this._decorations.length; i < len; i++) {
                const range = this._editor.getModel().getDecorationRange(this._decorations[i]);
                if (nextMatch.equalsRange(range)) {
                    newCurrentDecorationId = this._decorations[i];
                    matchPosition = (i + 1);
                    break;
                }
            }
        }
        if (this._highlightedDecorationId !== null || newCurrentDecorationId !== null) {
            this._editor.changeDecorations((changeAccessor) => {
                if (this._highlightedDecorationId !== null) {
                    changeAccessor.changeDecorationOptions(this._highlightedDecorationId, FindDecorations._FIND_MATCH_DECORATION);
                    this._highlightedDecorationId = null;
                }
                if (newCurrentDecorationId !== null) {
                    this._highlightedDecorationId = newCurrentDecorationId;
                    changeAccessor.changeDecorationOptions(this._highlightedDecorationId, FindDecorations._CURRENT_FIND_MATCH_DECORATION);
                }
                if (this._rangeHighlightDecorationId !== null) {
                    changeAccessor.removeDecoration(this._rangeHighlightDecorationId);
                    this._rangeHighlightDecorationId = null;
                }
                if (newCurrentDecorationId !== null) {
                    let rng = this._editor.getModel().getDecorationRange(newCurrentDecorationId);
                    if (rng.startLineNumber !== rng.endLineNumber && rng.endColumn === 1) {
                        const lineBeforeEnd = rng.endLineNumber - 1;
                        const lineBeforeEndMaxColumn = this._editor.getModel().getLineMaxColumn(lineBeforeEnd);
                        rng = new core_range/* Range */.e(rng.startLineNumber, rng.startColumn, lineBeforeEnd, lineBeforeEndMaxColumn);
                    }
                    this._rangeHighlightDecorationId = changeAccessor.addDecoration(rng, FindDecorations._RANGE_HIGHLIGHT_DECORATION);
                }
            });
        }
        return matchPosition;
    }
    set(findMatches, findScopes) {
        this._editor.changeDecorations((accessor) => {
            let findMatchesOptions = FindDecorations._FIND_MATCH_DECORATION;
            const newOverviewRulerApproximateDecorations = [];
            if (findMatches.length > 1000) {
                // we go into a mode where the overview ruler gets "approximate" decorations
                // the reason is that the overview ruler paints all the decorations in the file and we don't want to cause freezes
                findMatchesOptions = FindDecorations._FIND_MATCH_NO_OVERVIEW_DECORATION;
                // approximate a distance in lines where matches should be merged
                const lineCount = this._editor.getModel().getLineCount();
                const height = this._editor.getLayoutInfo().height;
                const approxPixelsPerLine = height / lineCount;
                const mergeLinesDelta = Math.max(2, Math.ceil(3 / approxPixelsPerLine));
                // merge decorations as much as possible
                let prevStartLineNumber = findMatches[0].range.startLineNumber;
                let prevEndLineNumber = findMatches[0].range.endLineNumber;
                for (let i = 1, len = findMatches.length; i < len; i++) {
                    const range = findMatches[i].range;
                    if (prevEndLineNumber + mergeLinesDelta >= range.startLineNumber) {
                        if (range.endLineNumber > prevEndLineNumber) {
                            prevEndLineNumber = range.endLineNumber;
                        }
                    }
                    else {
                        newOverviewRulerApproximateDecorations.push({
                            range: new core_range/* Range */.e(prevStartLineNumber, 1, prevEndLineNumber, 1),
                            options: FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                        });
                        prevStartLineNumber = range.startLineNumber;
                        prevEndLineNumber = range.endLineNumber;
                    }
                }
                newOverviewRulerApproximateDecorations.push({
                    range: new core_range/* Range */.e(prevStartLineNumber, 1, prevEndLineNumber, 1),
                    options: FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION
                });
            }
            // Find matches
            const newFindMatchesDecorations = new Array(findMatches.length);
            for (let i = 0, len = findMatches.length; i < len; i++) {
                newFindMatchesDecorations[i] = {
                    range: findMatches[i].range,
                    options: findMatchesOptions
                };
            }
            this._decorations = accessor.deltaDecorations(this._decorations, newFindMatchesDecorations);
            // Overview ruler approximate decorations
            this._overviewRulerApproximateDecorations = accessor.deltaDecorations(this._overviewRulerApproximateDecorations, newOverviewRulerApproximateDecorations);
            // Range highlight
            if (this._rangeHighlightDecorationId) {
                accessor.removeDecoration(this._rangeHighlightDecorationId);
                this._rangeHighlightDecorationId = null;
            }
            // Find scope
            if (this._findScopeDecorationIds.length) {
                this._findScopeDecorationIds.forEach(findScopeDecorationId => accessor.removeDecoration(findScopeDecorationId));
                this._findScopeDecorationIds = [];
            }
            if (findScopes === null || findScopes === void 0 ? void 0 : findScopes.length) {
                this._findScopeDecorationIds = findScopes.map(findScope => accessor.addDecoration(findScope, FindDecorations._FIND_SCOPE_DECORATION));
            }
        });
    }
    matchBeforePosition(position) {
        if (this._decorations.length === 0) {
            return null;
        }
        for (let i = this._decorations.length - 1; i >= 0; i--) {
            const decorationId = this._decorations[i];
            const r = this._editor.getModel().getDecorationRange(decorationId);
            if (!r || r.endLineNumber > position.lineNumber) {
                continue;
            }
            if (r.endLineNumber < position.lineNumber) {
                return r;
            }
            if (r.endColumn > position.column) {
                continue;
            }
            return r;
        }
        return this._editor.getModel().getDecorationRange(this._decorations[this._decorations.length - 1]);
    }
    matchAfterPosition(position) {
        if (this._decorations.length === 0) {
            return null;
        }
        for (let i = 0, len = this._decorations.length; i < len; i++) {
            const decorationId = this._decorations[i];
            const r = this._editor.getModel().getDecorationRange(decorationId);
            if (!r || r.startLineNumber < position.lineNumber) {
                continue;
            }
            if (r.startLineNumber > position.lineNumber) {
                return r;
            }
            if (r.startColumn < position.column) {
                continue;
            }
            return r;
        }
        return this._editor.getModel().getDecorationRange(this._decorations[0]);
    }
    _allDecorations() {
        let result = [];
        result = result.concat(this._decorations);
        result = result.concat(this._overviewRulerApproximateDecorations);
        if (this._findScopeDecorationIds.length) {
            result.push(...this._findScopeDecorationIds);
        }
        if (this._rangeHighlightDecorationId) {
            result.push(this._rangeHighlightDecorationId);
        }
        return result;
    }
}
FindDecorations._CURRENT_FIND_MATCH_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'current-find-match',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    zIndex: 13,
    className: 'currentFindMatch',
    showIfCollapsed: true,
    overviewRuler: {
        color: (0,themeService/* themeColorFromId */.EN)(colorRegistry/* overviewRulerFindMatchForeground */.Fm_),
        position: model/* OverviewRulerLane */.sh.Center
    },
    minimap: {
        color: (0,themeService/* themeColorFromId */.EN)(colorRegistry/* minimapFindMatch */.SUY),
        position: model/* MinimapPosition */.F5.Inline
    }
});
FindDecorations._FIND_MATCH_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'find-match',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    zIndex: 10,
    className: 'findMatch',
    showIfCollapsed: true,
    overviewRuler: {
        color: (0,themeService/* themeColorFromId */.EN)(colorRegistry/* overviewRulerFindMatchForeground */.Fm_),
        position: model/* OverviewRulerLane */.sh.Center
    },
    minimap: {
        color: (0,themeService/* themeColorFromId */.EN)(colorRegistry/* minimapFindMatch */.SUY),
        position: model/* MinimapPosition */.F5.Inline
    }
});
FindDecorations._FIND_MATCH_NO_OVERVIEW_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'find-match-no-overview',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'findMatch',
    showIfCollapsed: true
});
FindDecorations._FIND_MATCH_ONLY_OVERVIEW_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'find-match-only-overview',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    overviewRuler: {
        color: (0,themeService/* themeColorFromId */.EN)(colorRegistry/* overviewRulerFindMatchForeground */.Fm_),
        position: model/* OverviewRulerLane */.sh.Center
    }
});
FindDecorations._RANGE_HIGHLIGHT_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'find-range-highlight',
    stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
    className: 'rangeHighlight',
    isWholeLine: true
});
FindDecorations._FIND_SCOPE_DECORATION = textModel/* ModelDecorationOptions */.qx.register({
    description: 'find-scope',
    className: 'findScope',
    isWholeLine: true
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/replaceAllCommand.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ReplaceAllCommand {
    constructor(editorSelection, ranges, replaceStrings) {
        this._editorSelection = editorSelection;
        this._ranges = ranges;
        this._replaceStrings = replaceStrings;
        this._trackedEditorSelectionId = null;
    }
    getEditOperations(model, builder) {
        if (this._ranges.length > 0) {
            // Collect all edit operations
            const ops = [];
            for (let i = 0; i < this._ranges.length; i++) {
                ops.push({
                    range: this._ranges[i],
                    text: this._replaceStrings[i]
                });
            }
            // Sort them in ascending order by range starts
            ops.sort((o1, o2) => {
                return core_range/* Range */.e.compareRangesUsingStarts(o1.range, o2.range);
            });
            // Merge operations that touch each other
            const resultOps = [];
            let previousOp = ops[0];
            for (let i = 1; i < ops.length; i++) {
                if (previousOp.range.endLineNumber === ops[i].range.startLineNumber && previousOp.range.endColumn === ops[i].range.startColumn) {
                    // These operations are one after another and can be merged
                    previousOp.range = previousOp.range.plusRange(ops[i].range);
                    previousOp.text = previousOp.text + ops[i].text;
                }
                else {
                    resultOps.push(previousOp);
                    previousOp = ops[i];
                }
            }
            resultOps.push(previousOp);
            for (const op of resultOps) {
                builder.addEditOperation(op.range, op.text);
            }
        }
        this._trackedEditorSelectionId = builder.trackSelection(this._editorSelection);
    }
    computeCursorState(model, helper) {
        return helper.getTrackedSelection(this._trackedEditorSelectionId);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/search.js
var search = __webpack_require__(74748);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/replacePattern.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Assigned when the replace pattern is entirely static.
 */
class StaticValueReplacePattern {
    constructor(staticValue) {
        this.staticValue = staticValue;
        this.kind = 0 /* ReplacePatternKind.StaticValue */;
    }
}
/**
 * Assigned when the replace pattern has replacement patterns.
 */
class DynamicPiecesReplacePattern {
    constructor(pieces) {
        this.pieces = pieces;
        this.kind = 1 /* ReplacePatternKind.DynamicPieces */;
    }
}
class ReplacePattern {
    static fromStaticValue(value) {
        return new ReplacePattern([ReplacePiece.staticValue(value)]);
    }
    get hasReplacementPatterns() {
        return (this._state.kind === 1 /* ReplacePatternKind.DynamicPieces */);
    }
    constructor(pieces) {
        if (!pieces || pieces.length === 0) {
            this._state = new StaticValueReplacePattern('');
        }
        else if (pieces.length === 1 && pieces[0].staticValue !== null) {
            this._state = new StaticValueReplacePattern(pieces[0].staticValue);
        }
        else {
            this._state = new DynamicPiecesReplacePattern(pieces);
        }
    }
    buildReplaceString(matches, preserveCase) {
        if (this._state.kind === 0 /* ReplacePatternKind.StaticValue */) {
            if (preserveCase) {
                return (0,search/* buildReplaceStringWithCasePreserved */.o)(matches, this._state.staticValue);
            }
            else {
                return this._state.staticValue;
            }
        }
        let result = '';
        for (let i = 0, len = this._state.pieces.length; i < len; i++) {
            const piece = this._state.pieces[i];
            if (piece.staticValue !== null) {
                // static value ReplacePiece
                result += piece.staticValue;
                continue;
            }
            // match index ReplacePiece
            let match = ReplacePattern._substitute(piece.matchIndex, matches);
            if (piece.caseOps !== null && piece.caseOps.length > 0) {
                const repl = [];
                const lenOps = piece.caseOps.length;
                let opIdx = 0;
                for (let idx = 0, len = match.length; idx < len; idx++) {
                    if (opIdx >= lenOps) {
                        repl.push(match.slice(idx));
                        break;
                    }
                    switch (piece.caseOps[opIdx]) {
                        case 'U':
                            repl.push(match[idx].toUpperCase());
                            break;
                        case 'u':
                            repl.push(match[idx].toUpperCase());
                            opIdx++;
                            break;
                        case 'L':
                            repl.push(match[idx].toLowerCase());
                            break;
                        case 'l':
                            repl.push(match[idx].toLowerCase());
                            opIdx++;
                            break;
                        default:
                            repl.push(match[idx]);
                    }
                }
                match = repl.join('');
            }
            result += match;
        }
        return result;
    }
    static _substitute(matchIndex, matches) {
        if (matches === null) {
            return '';
        }
        if (matchIndex === 0) {
            return matches[0];
        }
        let remainder = '';
        while (matchIndex > 0) {
            if (matchIndex < matches.length) {
                // A match can be undefined
                const match = (matches[matchIndex] || '');
                return match + remainder;
            }
            remainder = String(matchIndex % 10) + remainder;
            matchIndex = Math.floor(matchIndex / 10);
        }
        return '$' + remainder;
    }
}
/**
 * A replace piece can either be a static string or an index to a specific match.
 */
class ReplacePiece {
    static staticValue(value) {
        return new ReplacePiece(value, -1, null);
    }
    static caseOps(index, caseOps) {
        return new ReplacePiece(null, index, caseOps);
    }
    constructor(staticValue, matchIndex, caseOps) {
        this.staticValue = staticValue;
        this.matchIndex = matchIndex;
        if (!caseOps || caseOps.length === 0) {
            this.caseOps = null;
        }
        else {
            this.caseOps = caseOps.slice(0);
        }
    }
}
class ReplacePieceBuilder {
    constructor(source) {
        this._source = source;
        this._lastCharIndex = 0;
        this._result = [];
        this._resultLen = 0;
        this._currentStaticPiece = '';
    }
    emitUnchanged(toCharIndex) {
        this._emitStatic(this._source.substring(this._lastCharIndex, toCharIndex));
        this._lastCharIndex = toCharIndex;
    }
    emitStatic(value, toCharIndex) {
        this._emitStatic(value);
        this._lastCharIndex = toCharIndex;
    }
    _emitStatic(value) {
        if (value.length === 0) {
            return;
        }
        this._currentStaticPiece += value;
    }
    emitMatchIndex(index, toCharIndex, caseOps) {
        if (this._currentStaticPiece.length !== 0) {
            this._result[this._resultLen++] = ReplacePiece.staticValue(this._currentStaticPiece);
            this._currentStaticPiece = '';
        }
        this._result[this._resultLen++] = ReplacePiece.caseOps(index, caseOps);
        this._lastCharIndex = toCharIndex;
    }
    finalize() {
        this.emitUnchanged(this._source.length);
        if (this._currentStaticPiece.length !== 0) {
            this._result[this._resultLen++] = ReplacePiece.staticValue(this._currentStaticPiece);
            this._currentStaticPiece = '';
        }
        return new ReplacePattern(this._result);
    }
}
/**
 * \n			=> inserts a LF
 * \t			=> inserts a TAB
 * \\			=> inserts a "\".
 * \u			=> upper-cases one character in a match.
 * \U			=> upper-cases ALL remaining characters in a match.
 * \l			=> lower-cases one character in a match.
 * \L			=> lower-cases ALL remaining characters in a match.
 * $$			=> inserts a "$".
 * $& and $0	=> inserts the matched substring.
 * $n			=> Where n is a non-negative integer lesser than 100, inserts the nth parenthesized submatch string
 * everything else stays untouched
 *
 * Also see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
 */
function parseReplaceString(replaceString) {
    if (!replaceString || replaceString.length === 0) {
        return new ReplacePattern(null);
    }
    const caseOps = [];
    const result = new ReplacePieceBuilder(replaceString);
    for (let i = 0, len = replaceString.length; i < len; i++) {
        const chCode = replaceString.charCodeAt(i);
        if (chCode === 92 /* CharCode.Backslash */) {
            // move to next char
            i++;
            if (i >= len) {
                // string ends with a \
                break;
            }
            const nextChCode = replaceString.charCodeAt(i);
            // let replaceWithCharacter: string | null = null;
            switch (nextChCode) {
                case 92 /* CharCode.Backslash */:
                    // \\ => inserts a "\"
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\\', i + 1);
                    break;
                case 110 /* CharCode.n */:
                    // \n => inserts a LF
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\n', i + 1);
                    break;
                case 116 /* CharCode.t */:
                    // \t => inserts a TAB
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\t', i + 1);
                    break;
                // Case modification of string replacements, patterned after Boost, but only applied
                // to the replacement text, not subsequent content.
                case 117 /* CharCode.u */:
                // \u => upper-cases one character.
                case 85 /* CharCode.U */:
                // \U => upper-cases ALL following characters.
                case 108 /* CharCode.l */:
                // \l => lower-cases one character.
                case 76 /* CharCode.L */:
                    // \L => lower-cases ALL following characters.
                    result.emitUnchanged(i - 1);
                    result.emitStatic('', i + 1);
                    caseOps.push(String.fromCharCode(nextChCode));
                    break;
            }
            continue;
        }
        if (chCode === 36 /* CharCode.DollarSign */) {
            // move to next char
            i++;
            if (i >= len) {
                // string ends with a $
                break;
            }
            const nextChCode = replaceString.charCodeAt(i);
            if (nextChCode === 36 /* CharCode.DollarSign */) {
                // $$ => inserts a "$"
                result.emitUnchanged(i - 1);
                result.emitStatic('$', i + 1);
                continue;
            }
            if (nextChCode === 48 /* CharCode.Digit0 */ || nextChCode === 38 /* CharCode.Ampersand */) {
                // $& and $0 => inserts the matched substring.
                result.emitUnchanged(i - 1);
                result.emitMatchIndex(0, i + 1, caseOps);
                caseOps.length = 0;
                continue;
            }
            if (49 /* CharCode.Digit1 */ <= nextChCode && nextChCode <= 57 /* CharCode.Digit9 */) {
                // $n
                let matchIndex = nextChCode - 48 /* CharCode.Digit0 */;
                // peek next char to probe for $nn
                if (i + 1 < len) {
                    const nextNextChCode = replaceString.charCodeAt(i + 1);
                    if (48 /* CharCode.Digit0 */ <= nextNextChCode && nextNextChCode <= 57 /* CharCode.Digit9 */) {
                        // $nn
                        // move to next char
                        i++;
                        matchIndex = matchIndex * 10 + (nextNextChCode - 48 /* CharCode.Digit0 */);
                        result.emitUnchanged(i - 2);
                        result.emitMatchIndex(matchIndex, i + 1, caseOps);
                        caseOps.length = 0;
                        continue;
                    }
                }
                result.emitUnchanged(i - 1);
                result.emitMatchIndex(matchIndex, i + 1, caseOps);
                caseOps.length = 0;
                continue;
            }
        }
    }
    return result.finalize();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findModel.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












const CONTEXT_FIND_WIDGET_VISIBLE = new contextkey/* RawContextKey */.uy('findWidgetVisible', false);
const CONTEXT_FIND_WIDGET_NOT_VISIBLE = CONTEXT_FIND_WIDGET_VISIBLE.toNegated();
// Keep ContextKey use of 'Focussed' to not break when clauses
const CONTEXT_FIND_INPUT_FOCUSED = new contextkey/* RawContextKey */.uy('findInputFocussed', false);
const CONTEXT_REPLACE_INPUT_FOCUSED = new contextkey/* RawContextKey */.uy('replaceInputFocussed', false);
const ToggleCaseSensitiveKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 33 /* KeyCode.KeyC */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 33 /* KeyCode.KeyC */ }
};
const ToggleWholeWordKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 53 /* KeyCode.KeyW */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 53 /* KeyCode.KeyW */ }
};
const ToggleRegexKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 48 /* KeyCode.KeyR */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 48 /* KeyCode.KeyR */ }
};
const ToggleSearchScopeKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 42 /* KeyCode.KeyL */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 42 /* KeyCode.KeyL */ }
};
const TogglePreserveCaseKeybinding = {
    primary: 512 /* KeyMod.Alt */ | 46 /* KeyCode.KeyP */,
    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 46 /* KeyCode.KeyP */ }
};
const FIND_IDS = {
    StartFindAction: 'actions.find',
    StartFindWithSelection: 'actions.findWithSelection',
    StartFindWithArgs: 'editor.actions.findWithArgs',
    NextMatchFindAction: 'editor.action.nextMatchFindAction',
    PreviousMatchFindAction: 'editor.action.previousMatchFindAction',
    GoToMatchFindAction: 'editor.action.goToMatchFindAction',
    NextSelectionMatchFindAction: 'editor.action.nextSelectionMatchFindAction',
    PreviousSelectionMatchFindAction: 'editor.action.previousSelectionMatchFindAction',
    StartFindReplaceAction: 'editor.action.startFindReplaceAction',
    CloseFindWidgetCommand: 'closeFindWidget',
    ToggleCaseSensitiveCommand: 'toggleFindCaseSensitive',
    ToggleWholeWordCommand: 'toggleFindWholeWord',
    ToggleRegexCommand: 'toggleFindRegex',
    ToggleSearchScopeCommand: 'toggleFindInSelection',
    TogglePreserveCaseCommand: 'togglePreserveCase',
    ReplaceOneAction: 'editor.action.replaceOne',
    ReplaceAllAction: 'editor.action.replaceAll',
    SelectAllMatchesAction: 'editor.action.selectAllMatches'
};
const MATCHES_LIMIT = 19999;
const RESEARCH_DELAY = 240;
class FindModelBoundToEditorModel {
    constructor(editor, state) {
        this._toDispose = new lifecycle/* DisposableStore */.SL();
        this._editor = editor;
        this._state = state;
        this._isDisposed = false;
        this._startSearchingTimer = new common_async/* TimeoutTimer */._F();
        this._decorations = new FindDecorations(editor);
        this._toDispose.add(this._decorations);
        this._updateDecorationsScheduler = new common_async/* RunOnceScheduler */.pY(() => this.research(false), 100);
        this._toDispose.add(this._updateDecorationsScheduler);
        this._toDispose.add(this._editor.onDidChangeCursorPosition((e) => {
            if (e.reason === 3 /* CursorChangeReason.Explicit */
                || e.reason === 5 /* CursorChangeReason.Undo */
                || e.reason === 6 /* CursorChangeReason.Redo */) {
                this._decorations.setStartPosition(this._editor.getPosition());
            }
        }));
        this._ignoreModelContentChanged = false;
        this._toDispose.add(this._editor.onDidChangeModelContent((e) => {
            if (this._ignoreModelContentChanged) {
                return;
            }
            if (e.isFlush) {
                // a model.setValue() was called
                this._decorations.reset();
            }
            this._decorations.setStartPosition(this._editor.getPosition());
            this._updateDecorationsScheduler.schedule();
        }));
        this._toDispose.add(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this.research(false, this._state.searchScope);
    }
    dispose() {
        this._isDisposed = true;
        (0,lifecycle/* dispose */.B9)(this._startSearchingTimer);
        this._toDispose.dispose();
    }
    _onStateChanged(e) {
        if (this._isDisposed) {
            // The find model is disposed during a find state changed event
            return;
        }
        if (!this._editor.hasModel()) {
            // The find model will be disposed momentarily
            return;
        }
        if (e.searchString || e.isReplaceRevealed || e.isRegex || e.wholeWord || e.matchCase || e.searchScope) {
            const model = this._editor.getModel();
            if (model.isTooLargeForSyncing()) {
                this._startSearchingTimer.cancel();
                this._startSearchingTimer.setIfNotSet(() => {
                    if (e.searchScope) {
                        this.research(e.moveCursor, this._state.searchScope);
                    }
                    else {
                        this.research(e.moveCursor);
                    }
                }, RESEARCH_DELAY);
            }
            else {
                if (e.searchScope) {
                    this.research(e.moveCursor, this._state.searchScope);
                }
                else {
                    this.research(e.moveCursor);
                }
            }
        }
    }
    static _getSearchRange(model, findScope) {
        // If we have set now or before a find scope, use it for computing the search range
        if (findScope) {
            return findScope;
        }
        return model.getFullModelRange();
    }
    research(moveCursor, newFindScope) {
        let findScopes = null;
        if (typeof newFindScope !== 'undefined') {
            if (newFindScope !== null) {
                if (!Array.isArray(newFindScope)) {
                    findScopes = [newFindScope];
                }
                else {
                    findScopes = newFindScope;
                }
            }
        }
        else {
            findScopes = this._decorations.getFindScopes();
        }
        if (findScopes !== null) {
            findScopes = findScopes.map(findScope => {
                if (findScope.startLineNumber !== findScope.endLineNumber) {
                    let endLineNumber = findScope.endLineNumber;
                    if (findScope.endColumn === 1) {
                        endLineNumber = endLineNumber - 1;
                    }
                    return new core_range/* Range */.e(findScope.startLineNumber, 1, endLineNumber, this._editor.getModel().getLineMaxColumn(endLineNumber));
                }
                return findScope;
            });
        }
        const findMatches = this._findMatches(findScopes, false, MATCHES_LIMIT);
        this._decorations.set(findMatches, findScopes);
        const editorSelection = this._editor.getSelection();
        let currentMatchesPosition = this._decorations.getCurrentMatchesPosition(editorSelection);
        if (currentMatchesPosition === 0 && findMatches.length > 0) {
            // current selection is not on top of a match
            // try to find its nearest result from the top of the document
            const matchAfterSelection = (0,arrays/* findFirstInSorted */.lG)(findMatches.map(match => match.range), range => core_range/* Range */.e.compareRangesUsingStarts(range, editorSelection) >= 0);
            currentMatchesPosition = matchAfterSelection > 0 ? matchAfterSelection - 1 + 1 /** match position is one based */ : currentMatchesPosition;
        }
        this._state.changeMatchInfo(currentMatchesPosition, this._decorations.getCount(), undefined);
        if (moveCursor && this._editor.getOption(39 /* EditorOption.find */).cursorMoveOnType) {
            this._moveToNextMatch(this._decorations.getStartPosition());
        }
    }
    _hasMatches() {
        return (this._state.matchesCount > 0);
    }
    _cannotFind() {
        if (!this._hasMatches()) {
            const findScope = this._decorations.getFindScope();
            if (findScope) {
                // Reveal the selection so user is reminded that 'selection find' is on.
                this._editor.revealRangeInCenterIfOutsideViewport(findScope, 0 /* ScrollType.Smooth */);
            }
            return true;
        }
        return false;
    }
    _setCurrentFindMatch(match) {
        const matchesPosition = this._decorations.setCurrentFindMatch(match);
        this._state.changeMatchInfo(matchesPosition, this._decorations.getCount(), match);
        this._editor.setSelection(match);
        this._editor.revealRangeInCenterIfOutsideViewport(match, 0 /* ScrollType.Smooth */);
    }
    _prevSearchPosition(before) {
        const isUsingLineStops = this._state.isRegex && (this._state.searchString.indexOf('^') >= 0
            || this._state.searchString.indexOf('$') >= 0);
        let { lineNumber, column } = before;
        const model = this._editor.getModel();
        if (isUsingLineStops || column === 1) {
            if (lineNumber === 1) {
                lineNumber = model.getLineCount();
            }
            else {
                lineNumber--;
            }
            column = model.getLineMaxColumn(lineNumber);
        }
        else {
            column--;
        }
        return new core_position/* Position */.L(lineNumber, column);
    }
    _moveToPrevMatch(before, isRecursed = false) {
        if (!this._state.canNavigateBack()) {
            // we are beyond the first matched find result
            // instead of doing nothing, we should refocus the first item
            const nextMatchRange = this._decorations.matchAfterPosition(before);
            if (nextMatchRange) {
                this._setCurrentFindMatch(nextMatchRange);
            }
            return;
        }
        if (this._decorations.getCount() < MATCHES_LIMIT) {
            let prevMatchRange = this._decorations.matchBeforePosition(before);
            if (prevMatchRange && prevMatchRange.isEmpty() && prevMatchRange.getStartPosition().equals(before)) {
                before = this._prevSearchPosition(before);
                prevMatchRange = this._decorations.matchBeforePosition(before);
            }
            if (prevMatchRange) {
                this._setCurrentFindMatch(prevMatchRange);
            }
            return;
        }
        if (this._cannotFind()) {
            return;
        }
        const findScope = this._decorations.getFindScope();
        const searchRange = FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), findScope);
        // ...(----)...|...
        if (searchRange.getEndPosition().isBefore(before)) {
            before = searchRange.getEndPosition();
        }
        // ...|...(----)...
        if (before.isBefore(searchRange.getStartPosition())) {
            before = searchRange.getEndPosition();
        }
        const { lineNumber, column } = before;
        const model = this._editor.getModel();
        let position = new core_position/* Position */.L(lineNumber, column);
        let prevMatch = model.findPreviousMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null, false);
        if (prevMatch && prevMatch.range.isEmpty() && prevMatch.range.getStartPosition().equals(position)) {
            // Looks like we're stuck at this position, unacceptable!
            position = this._prevSearchPosition(position);
            prevMatch = model.findPreviousMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null, false);
        }
        if (!prevMatch) {
            // there is precisely one match and selection is on top of it
            return;
        }
        if (!isRecursed && !searchRange.containsRange(prevMatch.range)) {
            return this._moveToPrevMatch(prevMatch.range.getStartPosition(), true);
        }
        this._setCurrentFindMatch(prevMatch.range);
    }
    moveToPrevMatch() {
        this._moveToPrevMatch(this._editor.getSelection().getStartPosition());
    }
    _nextSearchPosition(after) {
        const isUsingLineStops = this._state.isRegex && (this._state.searchString.indexOf('^') >= 0
            || this._state.searchString.indexOf('$') >= 0);
        let { lineNumber, column } = after;
        const model = this._editor.getModel();
        if (isUsingLineStops || column === model.getLineMaxColumn(lineNumber)) {
            if (lineNumber === model.getLineCount()) {
                lineNumber = 1;
            }
            else {
                lineNumber++;
            }
            column = 1;
        }
        else {
            column++;
        }
        return new core_position/* Position */.L(lineNumber, column);
    }
    _moveToNextMatch(after) {
        if (!this._state.canNavigateForward()) {
            // we are beyond the last matched find result
            // instead of doing nothing, we should refocus the last item
            const prevMatchRange = this._decorations.matchBeforePosition(after);
            if (prevMatchRange) {
                this._setCurrentFindMatch(prevMatchRange);
            }
            return;
        }
        if (this._decorations.getCount() < MATCHES_LIMIT) {
            let nextMatchRange = this._decorations.matchAfterPosition(after);
            if (nextMatchRange && nextMatchRange.isEmpty() && nextMatchRange.getStartPosition().equals(after)) {
                // Looks like we're stuck at this position, unacceptable!
                after = this._nextSearchPosition(after);
                nextMatchRange = this._decorations.matchAfterPosition(after);
            }
            if (nextMatchRange) {
                this._setCurrentFindMatch(nextMatchRange);
            }
            return;
        }
        const nextMatch = this._getNextMatch(after, false, true);
        if (nextMatch) {
            this._setCurrentFindMatch(nextMatch.range);
        }
    }
    _getNextMatch(after, captureMatches, forceMove, isRecursed = false) {
        if (this._cannotFind()) {
            return null;
        }
        const findScope = this._decorations.getFindScope();
        const searchRange = FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), findScope);
        // ...(----)...|...
        if (searchRange.getEndPosition().isBefore(after)) {
            after = searchRange.getStartPosition();
        }
        // ...|...(----)...
        if (after.isBefore(searchRange.getStartPosition())) {
            after = searchRange.getStartPosition();
        }
        const { lineNumber, column } = after;
        const model = this._editor.getModel();
        let position = new core_position/* Position */.L(lineNumber, column);
        let nextMatch = model.findNextMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null, captureMatches);
        if (forceMove && nextMatch && nextMatch.range.isEmpty() && nextMatch.range.getStartPosition().equals(position)) {
            // Looks like we're stuck at this position, unacceptable!
            position = this._nextSearchPosition(position);
            nextMatch = model.findNextMatch(this._state.searchString, position, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null, captureMatches);
        }
        if (!nextMatch) {
            // there is precisely one match and selection is on top of it
            return null;
        }
        if (!isRecursed && !searchRange.containsRange(nextMatch.range)) {
            return this._getNextMatch(nextMatch.range.getEndPosition(), captureMatches, forceMove, true);
        }
        return nextMatch;
    }
    moveToNextMatch() {
        this._moveToNextMatch(this._editor.getSelection().getEndPosition());
    }
    _moveToMatch(index) {
        const decorationRange = this._decorations.getDecorationRangeAt(index);
        if (decorationRange) {
            this._setCurrentFindMatch(decorationRange);
        }
    }
    moveToMatch(index) {
        this._moveToMatch(index);
    }
    _getReplacePattern() {
        if (this._state.isRegex) {
            return parseReplaceString(this._state.replaceString);
        }
        return ReplacePattern.fromStaticValue(this._state.replaceString);
    }
    replace() {
        if (!this._hasMatches()) {
            return;
        }
        const replacePattern = this._getReplacePattern();
        const selection = this._editor.getSelection();
        const nextMatch = this._getNextMatch(selection.getStartPosition(), true, false);
        if (nextMatch) {
            if (selection.equalsRange(nextMatch.range)) {
                // selection sits on a find match => replace it!
                const replaceString = replacePattern.buildReplaceString(nextMatch.matches, this._state.preserveCase);
                const command = new replaceCommand/* ReplaceCommand */.T4(selection, replaceString);
                this._executeEditorCommand('replace', command);
                this._decorations.setStartPosition(new core_position/* Position */.L(selection.startLineNumber, selection.startColumn + replaceString.length));
                this.research(true);
            }
            else {
                this._decorations.setStartPosition(this._editor.getPosition());
                this._setCurrentFindMatch(nextMatch.range);
            }
        }
    }
    _findMatches(findScopes, captureMatches, limitResultCount) {
        const searchRanges = (findScopes || [null]).map((scope) => FindModelBoundToEditorModel._getSearchRange(this._editor.getModel(), scope));
        return this._editor.getModel().findMatches(this._state.searchString, searchRanges, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null, captureMatches, limitResultCount);
    }
    replaceAll() {
        if (!this._hasMatches()) {
            return;
        }
        const findScopes = this._decorations.getFindScopes();
        if (findScopes === null && this._state.matchesCount >= MATCHES_LIMIT) {
            // Doing a replace on the entire file that is over ${MATCHES_LIMIT} matches
            this._largeReplaceAll();
        }
        else {
            this._regularReplaceAll(findScopes);
        }
        this.research(false);
    }
    _largeReplaceAll() {
        const searchParams = new textModelSearch/* SearchParams */.bc(this._state.searchString, this._state.isRegex, this._state.matchCase, this._state.wholeWord ? this._editor.getOption(126 /* EditorOption.wordSeparators */) : null);
        const searchData = searchParams.parseSearchRequest();
        if (!searchData) {
            return;
        }
        let searchRegex = searchData.regex;
        if (!searchRegex.multiline) {
            let mod = 'mu';
            if (searchRegex.ignoreCase) {
                mod += 'i';
            }
            if (searchRegex.global) {
                mod += 'g';
            }
            searchRegex = new RegExp(searchRegex.source, mod);
        }
        const model = this._editor.getModel();
        const modelText = model.getValue(1 /* EndOfLinePreference.LF */);
        const fullModelRange = model.getFullModelRange();
        const replacePattern = this._getReplacePattern();
        let resultText;
        const preserveCase = this._state.preserveCase;
        if (replacePattern.hasReplacementPatterns || preserveCase) {
            resultText = modelText.replace(searchRegex, function () {
                return replacePattern.buildReplaceString(arguments, preserveCase);
            });
        }
        else {
            resultText = modelText.replace(searchRegex, replacePattern.buildReplaceString(null, preserveCase));
        }
        const command = new replaceCommand/* ReplaceCommandThatPreservesSelection */.hP(fullModelRange, resultText, this._editor.getSelection());
        this._executeEditorCommand('replaceAll', command);
    }
    _regularReplaceAll(findScopes) {
        const replacePattern = this._getReplacePattern();
        // Get all the ranges (even more than the highlighted ones)
        const matches = this._findMatches(findScopes, replacePattern.hasReplacementPatterns || this._state.preserveCase, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        const replaceStrings = [];
        for (let i = 0, len = matches.length; i < len; i++) {
            replaceStrings[i] = replacePattern.buildReplaceString(matches[i].matches, this._state.preserveCase);
        }
        const command = new ReplaceAllCommand(this._editor.getSelection(), matches.map(m => m.range), replaceStrings);
        this._executeEditorCommand('replaceAll', command);
    }
    selectAllMatches() {
        if (!this._hasMatches()) {
            return;
        }
        const findScopes = this._decorations.getFindScopes();
        // Get all the ranges (even more than the highlighted ones)
        const matches = this._findMatches(findScopes, false, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */);
        let selections = matches.map(m => new selection/* Selection */.Y(m.range.startLineNumber, m.range.startColumn, m.range.endLineNumber, m.range.endColumn));
        // If one of the ranges is the editor selection, then maintain it as primary
        const editorSelection = this._editor.getSelection();
        for (let i = 0, len = selections.length; i < len; i++) {
            const sel = selections[i];
            if (sel.equalsRange(editorSelection)) {
                selections = [editorSelection].concat(selections.slice(0, i)).concat(selections.slice(i + 1));
                break;
            }
        }
        this._editor.setSelections(selections);
    }
    _executeEditorCommand(source, command) {
        try {
            this._ignoreModelContentChanged = true;
            this._editor.pushUndoStop();
            this._editor.executeCommand(source, command);
            this._editor.pushUndoStop();
        }
        finally {
            this._ignoreModelContentChanged = false;
        }
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findOptionsWidget.css
var findOptionsWidget = __webpack_require__(43704);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findOptionsWidget.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(findOptionsWidget/* default */.Z, options);




       /* harmony default export */ var browser_findOptionsWidget = (findOptionsWidget/* default */.Z && findOptionsWidget/* default */.Z.locals ? findOptionsWidget/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInputToggles.js
var findInputToggles = __webpack_require__(99444);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/widget.js
var widget = __webpack_require__(82194);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findOptionsWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







class FindOptionsWidget extends widget/* Widget */.$ {
    constructor(editor, state, keybindingService) {
        super();
        this._hideSoon = this._register(new common_async/* RunOnceScheduler */.pY(() => this._hide(), 2000));
        this._isVisible = false;
        this._editor = editor;
        this._state = state;
        this._keybindingService = keybindingService;
        this._domNode = document.createElement('div');
        this._domNode.className = 'findOptionsWidget';
        this._domNode.style.display = 'none';
        this._domNode.style.top = '10px';
        this._domNode.style.zIndex = '12';
        this._domNode.setAttribute('role', 'presentation');
        this._domNode.setAttribute('aria-hidden', 'true');
        const toggleStyles = {
            inputActiveOptionBorder: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionBorder */.PRb),
            inputActiveOptionForeground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionForeground */.Pvw),
            inputActiveOptionBackground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionBackground */.XEs),
        };
        this.caseSensitive = this._register(new findInputToggles/* CaseSensitiveToggle */.rk(Object.assign({ appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleCaseSensitiveCommand), isChecked: this._state.matchCase }, toggleStyles)));
        this._domNode.appendChild(this.caseSensitive.domNode);
        this._register(this.caseSensitive.onChange(() => {
            this._state.change({
                matchCase: this.caseSensitive.checked
            }, false);
        }));
        this.wholeWords = this._register(new findInputToggles/* WholeWordsToggle */.Qx(Object.assign({ appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleWholeWordCommand), isChecked: this._state.wholeWord }, toggleStyles)));
        this._domNode.appendChild(this.wholeWords.domNode);
        this._register(this.wholeWords.onChange(() => {
            this._state.change({
                wholeWord: this.wholeWords.checked
            }, false);
        }));
        this.regex = this._register(new findInputToggles/* RegexToggle */.eH(Object.assign({ appendTitle: this._keybindingLabelFor(FIND_IDS.ToggleRegexCommand), isChecked: this._state.isRegex }, toggleStyles)));
        this._domNode.appendChild(this.regex.domNode);
        this._register(this.regex.onChange(() => {
            this._state.change({
                isRegex: this.regex.checked
            }, false);
        }));
        this._editor.addOverlayWidget(this);
        this._register(this._state.onFindReplaceStateChange((e) => {
            let somethingChanged = false;
            if (e.isRegex) {
                this.regex.checked = this._state.isRegex;
                somethingChanged = true;
            }
            if (e.wholeWord) {
                this.wholeWords.checked = this._state.wholeWord;
                somethingChanged = true;
            }
            if (e.matchCase) {
                this.caseSensitive.checked = this._state.matchCase;
                somethingChanged = true;
            }
            if (!this._state.isRevealed && somethingChanged) {
                this._revealTemporarily();
            }
        }));
        this._register(dom/* addDisposableListener */.nm(this._domNode, dom/* EventType */.tw.MOUSE_LEAVE, (e) => this._onMouseLeave()));
        this._register(dom/* addDisposableListener */.nm(this._domNode, 'mouseover', (e) => this._onMouseOver()));
    }
    _keybindingLabelFor(actionId) {
        const kb = this._keybindingService.lookupKeybinding(actionId);
        if (!kb) {
            return '';
        }
        return ` (${kb.getLabel()})`;
    }
    dispose() {
        this._editor.removeOverlayWidget(this);
        super.dispose();
    }
    // ----- IOverlayWidget API
    getId() {
        return FindOptionsWidget.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            preference: 0 /* OverlayWidgetPositionPreference.TOP_RIGHT_CORNER */
        };
    }
    highlightFindOptions() {
        this._revealTemporarily();
    }
    _revealTemporarily() {
        this._show();
        this._hideSoon.schedule();
    }
    _onMouseLeave() {
        this._hideSoon.schedule();
    }
    _onMouseOver() {
        this._hideSoon.cancel();
    }
    _show() {
        if (this._isVisible) {
            return;
        }
        this._isVisible = true;
        this._domNode.style.display = 'block';
    }
    _hide() {
        if (!this._isVisible) {
            return;
        }
        this._isVisible = false;
        this._domNode.style.display = 'none';
    }
}
FindOptionsWidget.ID = 'editor.contrib.findOptionsWidget';

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findState.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function effectiveOptionValue(override, value) {
    if (override === 1 /* FindOptionOverride.True */) {
        return true;
    }
    if (override === 2 /* FindOptionOverride.False */) {
        return false;
    }
    return value;
}
class FindReplaceState extends lifecycle/* Disposable */.JT {
    get searchString() { return this._searchString; }
    get replaceString() { return this._replaceString; }
    get isRevealed() { return this._isRevealed; }
    get isReplaceRevealed() { return this._isReplaceRevealed; }
    get isRegex() { return effectiveOptionValue(this._isRegexOverride, this._isRegex); }
    get wholeWord() { return effectiveOptionValue(this._wholeWordOverride, this._wholeWord); }
    get matchCase() { return effectiveOptionValue(this._matchCaseOverride, this._matchCase); }
    get preserveCase() { return effectiveOptionValue(this._preserveCaseOverride, this._preserveCase); }
    get actualIsRegex() { return this._isRegex; }
    get actualWholeWord() { return this._wholeWord; }
    get actualMatchCase() { return this._matchCase; }
    get actualPreserveCase() { return this._preserveCase; }
    get searchScope() { return this._searchScope; }
    get matchesPosition() { return this._matchesPosition; }
    get matchesCount() { return this._matchesCount; }
    get currentMatch() { return this._currentMatch; }
    constructor() {
        super();
        this._onFindReplaceStateChange = this._register(new common_event/* Emitter */.Q5());
        this.onFindReplaceStateChange = this._onFindReplaceStateChange.event;
        this._searchString = '';
        this._replaceString = '';
        this._isRevealed = false;
        this._isReplaceRevealed = false;
        this._isRegex = false;
        this._isRegexOverride = 0 /* FindOptionOverride.NotSet */;
        this._wholeWord = false;
        this._wholeWordOverride = 0 /* FindOptionOverride.NotSet */;
        this._matchCase = false;
        this._matchCaseOverride = 0 /* FindOptionOverride.NotSet */;
        this._preserveCase = false;
        this._preserveCaseOverride = 0 /* FindOptionOverride.NotSet */;
        this._searchScope = null;
        this._matchesPosition = 0;
        this._matchesCount = 0;
        this._currentMatch = null;
        this._loop = true;
        this._isSearching = false;
        this._filters = null;
    }
    changeMatchInfo(matchesPosition, matchesCount, currentMatch) {
        const changeEvent = {
            moveCursor: false,
            updateHistory: false,
            searchString: false,
            replaceString: false,
            isRevealed: false,
            isReplaceRevealed: false,
            isRegex: false,
            wholeWord: false,
            matchCase: false,
            preserveCase: false,
            searchScope: false,
            matchesPosition: false,
            matchesCount: false,
            currentMatch: false,
            loop: false,
            isSearching: false,
            filters: false
        };
        let somethingChanged = false;
        if (matchesCount === 0) {
            matchesPosition = 0;
        }
        if (matchesPosition > matchesCount) {
            matchesPosition = matchesCount;
        }
        if (this._matchesPosition !== matchesPosition) {
            this._matchesPosition = matchesPosition;
            changeEvent.matchesPosition = true;
            somethingChanged = true;
        }
        if (this._matchesCount !== matchesCount) {
            this._matchesCount = matchesCount;
            changeEvent.matchesCount = true;
            somethingChanged = true;
        }
        if (typeof currentMatch !== 'undefined') {
            if (!core_range/* Range */.e.equalsRange(this._currentMatch, currentMatch)) {
                this._currentMatch = currentMatch;
                changeEvent.currentMatch = true;
                somethingChanged = true;
            }
        }
        if (somethingChanged) {
            this._onFindReplaceStateChange.fire(changeEvent);
        }
    }
    change(newState, moveCursor, updateHistory = true) {
        var _a;
        const changeEvent = {
            moveCursor: moveCursor,
            updateHistory: updateHistory,
            searchString: false,
            replaceString: false,
            isRevealed: false,
            isReplaceRevealed: false,
            isRegex: false,
            wholeWord: false,
            matchCase: false,
            preserveCase: false,
            searchScope: false,
            matchesPosition: false,
            matchesCount: false,
            currentMatch: false,
            loop: false,
            isSearching: false,
            filters: false
        };
        let somethingChanged = false;
        const oldEffectiveIsRegex = this.isRegex;
        const oldEffectiveWholeWords = this.wholeWord;
        const oldEffectiveMatchCase = this.matchCase;
        const oldEffectivePreserveCase = this.preserveCase;
        if (typeof newState.searchString !== 'undefined') {
            if (this._searchString !== newState.searchString) {
                this._searchString = newState.searchString;
                changeEvent.searchString = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.replaceString !== 'undefined') {
            if (this._replaceString !== newState.replaceString) {
                this._replaceString = newState.replaceString;
                changeEvent.replaceString = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isRevealed !== 'undefined') {
            if (this._isRevealed !== newState.isRevealed) {
                this._isRevealed = newState.isRevealed;
                changeEvent.isRevealed = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isReplaceRevealed !== 'undefined') {
            if (this._isReplaceRevealed !== newState.isReplaceRevealed) {
                this._isReplaceRevealed = newState.isReplaceRevealed;
                changeEvent.isReplaceRevealed = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isRegex !== 'undefined') {
            this._isRegex = newState.isRegex;
        }
        if (typeof newState.wholeWord !== 'undefined') {
            this._wholeWord = newState.wholeWord;
        }
        if (typeof newState.matchCase !== 'undefined') {
            this._matchCase = newState.matchCase;
        }
        if (typeof newState.preserveCase !== 'undefined') {
            this._preserveCase = newState.preserveCase;
        }
        if (typeof newState.searchScope !== 'undefined') {
            if (!((_a = newState.searchScope) === null || _a === void 0 ? void 0 : _a.every((newSearchScope) => {
                var _a;
                return (_a = this._searchScope) === null || _a === void 0 ? void 0 : _a.some(existingSearchScope => {
                    return !core_range/* Range */.e.equalsRange(existingSearchScope, newSearchScope);
                });
            }))) {
                this._searchScope = newState.searchScope;
                changeEvent.searchScope = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.loop !== 'undefined') {
            if (this._loop !== newState.loop) {
                this._loop = newState.loop;
                changeEvent.loop = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.isSearching !== 'undefined') {
            if (this._isSearching !== newState.isSearching) {
                this._isSearching = newState.isSearching;
                changeEvent.isSearching = true;
                somethingChanged = true;
            }
        }
        if (typeof newState.filters !== 'undefined') {
            if (this._filters) {
                this._filters.update(newState.filters);
            }
            else {
                this._filters = newState.filters;
            }
            changeEvent.filters = true;
            somethingChanged = true;
        }
        // Overrides get set when they explicitly come in and get reset anytime something else changes
        this._isRegexOverride = (typeof newState.isRegexOverride !== 'undefined' ? newState.isRegexOverride : 0 /* FindOptionOverride.NotSet */);
        this._wholeWordOverride = (typeof newState.wholeWordOverride !== 'undefined' ? newState.wholeWordOverride : 0 /* FindOptionOverride.NotSet */);
        this._matchCaseOverride = (typeof newState.matchCaseOverride !== 'undefined' ? newState.matchCaseOverride : 0 /* FindOptionOverride.NotSet */);
        this._preserveCaseOverride = (typeof newState.preserveCaseOverride !== 'undefined' ? newState.preserveCaseOverride : 0 /* FindOptionOverride.NotSet */);
        if (oldEffectiveIsRegex !== this.isRegex) {
            somethingChanged = true;
            changeEvent.isRegex = true;
        }
        if (oldEffectiveWholeWords !== this.wholeWord) {
            somethingChanged = true;
            changeEvent.wholeWord = true;
        }
        if (oldEffectiveMatchCase !== this.matchCase) {
            somethingChanged = true;
            changeEvent.matchCase = true;
        }
        if (oldEffectivePreserveCase !== this.preserveCase) {
            somethingChanged = true;
            changeEvent.preserveCase = true;
        }
        if (somethingChanged) {
            this._onFindReplaceStateChange.fire(changeEvent);
        }
    }
    canNavigateBack() {
        return this.canNavigateInLoop() || (this.matchesPosition !== 1);
    }
    canNavigateForward() {
        return this.canNavigateInLoop() || (this.matchesPosition < this.matchesCount);
    }
    canNavigateInLoop() {
        return this._loop || (this.matchesCount >= MATCHES_LIMIT);
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(70385);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(75200);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/sash/sash.js + 1 modules
var sash = __webpack_require__(91154);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findWidget.css
var findWidget = __webpack_require__(26276);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findWidget.css

      
      
      
      
      
      
      
      
      

var findWidget_options = {};

findWidget_options.styleTagTransform = (styleTagTransform_default());
findWidget_options.setAttributes = (setAttributesWithoutAttributes_default());

      findWidget_options.insert = insertBySelector_default().bind(null, "head");
    
findWidget_options.domAPI = (styleDomAPI_default());
findWidget_options.insertStyleElement = (insertStyleElement_default());

var findWidget_update = injectStylesIntoStyleTag_default()(findWidget/* default */.Z, findWidget_options);




       /* harmony default export */ var browser_findWidget = (findWidget/* default */.Z && findWidget/* default */.Z.locals ? findWidget/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/history/browser/contextScopedHistoryWidget.js
var contextScopedHistoryWidget = __webpack_require__(64658);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/history/browser/historyWidgetKeybindingHint.js
var historyWidgetKeybindingHint = __webpack_require__(21918);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(95153);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/theme.js
var common_theme = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js
var defaultStyles = __webpack_require__(89408);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findWidget.js
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
























const findSelectionIcon = (0,iconRegistry/* registerIcon */.q5)('find-selection', codicons/* Codicon */.l.selection, nls/* localize */.NC('findSelectionIcon', 'Icon for \'Find in Selection\' in the editor find widget.'));
const findCollapsedIcon = (0,iconRegistry/* registerIcon */.q5)('find-collapsed', codicons/* Codicon */.l.chevronRight, nls/* localize */.NC('findCollapsedIcon', 'Icon to indicate that the editor find widget is collapsed.'));
const findExpandedIcon = (0,iconRegistry/* registerIcon */.q5)('find-expanded', codicons/* Codicon */.l.chevronDown, nls/* localize */.NC('findExpandedIcon', 'Icon to indicate that the editor find widget is expanded.'));
const findReplaceIcon = (0,iconRegistry/* registerIcon */.q5)('find-replace', codicons/* Codicon */.l.replace, nls/* localize */.NC('findReplaceIcon', 'Icon for \'Replace\' in the editor find widget.'));
const findReplaceAllIcon = (0,iconRegistry/* registerIcon */.q5)('find-replace-all', codicons/* Codicon */.l.replaceAll, nls/* localize */.NC('findReplaceAllIcon', 'Icon for \'Replace All\' in the editor find widget.'));
const findPreviousMatchIcon = (0,iconRegistry/* registerIcon */.q5)('find-previous-match', codicons/* Codicon */.l.arrowUp, nls/* localize */.NC('findPreviousMatchIcon', 'Icon for \'Find Previous\' in the editor find widget.'));
const findNextMatchIcon = (0,iconRegistry/* registerIcon */.q5)('find-next-match', codicons/* Codicon */.l.arrowDown, nls/* localize */.NC('findNextMatchIcon', 'Icon for \'Find Next\' in the editor find widget.'));
const NLS_FIND_INPUT_LABEL = nls/* localize */.NC('label.find', "Find");
const NLS_FIND_INPUT_PLACEHOLDER = nls/* localize */.NC('placeholder.find', "Find");
const NLS_PREVIOUS_MATCH_BTN_LABEL = nls/* localize */.NC('label.previousMatchButton', "Previous Match");
const NLS_NEXT_MATCH_BTN_LABEL = nls/* localize */.NC('label.nextMatchButton', "Next Match");
const NLS_TOGGLE_SELECTION_FIND_TITLE = nls/* localize */.NC('label.toggleSelectionFind', "Find in Selection");
const NLS_CLOSE_BTN_LABEL = nls/* localize */.NC('label.closeButton', "Close");
const NLS_REPLACE_INPUT_LABEL = nls/* localize */.NC('label.replace', "Replace");
const NLS_REPLACE_INPUT_PLACEHOLDER = nls/* localize */.NC('placeholder.replace', "Replace");
const NLS_REPLACE_BTN_LABEL = nls/* localize */.NC('label.replaceButton', "Replace");
const NLS_REPLACE_ALL_BTN_LABEL = nls/* localize */.NC('label.replaceAllButton', "Replace All");
const NLS_TOGGLE_REPLACE_MODE_BTN_LABEL = nls/* localize */.NC('label.toggleReplaceButton', "Toggle Replace");
const NLS_MATCHES_COUNT_LIMIT_TITLE = nls/* localize */.NC('title.matchesCountLimit', "Only the first {0} results are highlighted, but all find operations work on the entire text.", MATCHES_LIMIT);
const NLS_MATCHES_LOCATION = nls/* localize */.NC('label.matchesLocation', "{0} of {1}");
const NLS_NO_RESULTS = nls/* localize */.NC('label.noResults', "No results");
const FIND_WIDGET_INITIAL_WIDTH = 419;
const PART_WIDTH = 275;
const FIND_INPUT_AREA_WIDTH = PART_WIDTH - 54;
let MAX_MATCHES_COUNT_WIDTH = 69;
// let FIND_ALL_CONTROLS_WIDTH = 17/** Find Input margin-left */ + (MAX_MATCHES_COUNT_WIDTH + 3 + 1) /** Match Results */ + 23 /** Button */ * 4 + 2/** sash */;
const FIND_INPUT_AREA_HEIGHT = 33; // The height of Find Widget when Replace Input is not visible.
const ctrlEnterReplaceAllWarningPromptedKey = 'ctrlEnterReplaceAll.windows.donotask';
const ctrlKeyMod = (platform/* isMacintosh */.dz ? 256 /* KeyMod.WinCtrl */ : 2048 /* KeyMod.CtrlCmd */);
class FindWidgetViewZone {
    constructor(afterLineNumber) {
        this.afterLineNumber = afterLineNumber;
        this.heightInPx = FIND_INPUT_AREA_HEIGHT;
        this.suppressMouseDown = false;
        this.domNode = document.createElement('div');
        this.domNode.className = 'dock-find-viewzone';
    }
}
function stopPropagationForMultiLineUpwards(event, value, textarea) {
    const isMultiline = !!value.match(/\n/);
    if (textarea && isMultiline && textarea.selectionStart > 0) {
        event.stopPropagation();
        return;
    }
}
function stopPropagationForMultiLineDownwards(event, value, textarea) {
    const isMultiline = !!value.match(/\n/);
    if (textarea && isMultiline && textarea.selectionEnd < textarea.value.length) {
        event.stopPropagation();
        return;
    }
}
class FindWidget extends widget/* Widget */.$ {
    constructor(codeEditor, controller, state, contextViewProvider, keybindingService, contextKeyService, themeService, storageService, notificationService) {
        super();
        this._cachedHeight = null;
        this._revealTimeouts = [];
        this._codeEditor = codeEditor;
        this._controller = controller;
        this._state = state;
        this._contextViewProvider = contextViewProvider;
        this._keybindingService = keybindingService;
        this._contextKeyService = contextKeyService;
        this._storageService = storageService;
        this._notificationService = notificationService;
        this._ctrlEnterReplaceAllWarningPrompted = !!storageService.getBoolean(ctrlEnterReplaceAllWarningPromptedKey, 0 /* StorageScope.PROFILE */);
        this._isVisible = false;
        this._isReplaceVisible = false;
        this._ignoreChangeEvent = false;
        this._updateHistoryDelayer = new common_async/* Delayer */.vp(500);
        this._register((0,lifecycle/* toDisposable */.OF)(() => this._updateHistoryDelayer.cancel()));
        this._register(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this._buildDomNode();
        this._updateButtons();
        this._tryUpdateWidgetWidth();
        this._findInput.inputBox.layout();
        this._register(this._codeEditor.onDidChangeConfiguration((e) => {
            if (e.hasChanged(88 /* EditorOption.readOnly */)) {
                if (this._codeEditor.getOption(88 /* EditorOption.readOnly */)) {
                    // Hide replace part if editor becomes read only
                    this._state.change({ isReplaceRevealed: false }, false);
                }
                this._updateButtons();
            }
            if (e.hasChanged(140 /* EditorOption.layoutInfo */)) {
                this._tryUpdateWidgetWidth();
            }
            if (e.hasChanged(2 /* EditorOption.accessibilitySupport */)) {
                this.updateAccessibilitySupport();
            }
            if (e.hasChanged(39 /* EditorOption.find */)) {
                const supportLoop = this._codeEditor.getOption(39 /* EditorOption.find */).loop;
                this._state.change({ loop: supportLoop }, false);
                const addExtraSpaceOnTop = this._codeEditor.getOption(39 /* EditorOption.find */).addExtraSpaceOnTop;
                if (addExtraSpaceOnTop && !this._viewZone) {
                    this._viewZone = new FindWidgetViewZone(0);
                    this._showViewZone();
                }
                if (!addExtraSpaceOnTop && this._viewZone) {
                    this._removeViewZone();
                }
            }
        }));
        this.updateAccessibilitySupport();
        this._register(this._codeEditor.onDidChangeCursorSelection(() => {
            if (this._isVisible) {
                this._updateToggleSelectionFindButton();
            }
        }));
        this._register(this._codeEditor.onDidFocusEditorWidget(() => __awaiter(this, void 0, void 0, function* () {
            if (this._isVisible) {
                const globalBufferTerm = yield this._controller.getGlobalBufferTerm();
                if (globalBufferTerm && globalBufferTerm !== this._state.searchString) {
                    this._state.change({ searchString: globalBufferTerm }, false);
                    this._findInput.select();
                }
            }
        })));
        this._findInputFocused = CONTEXT_FIND_INPUT_FOCUSED.bindTo(contextKeyService);
        this._findFocusTracker = this._register(dom/* trackFocus */.go(this._findInput.inputBox.inputElement));
        this._register(this._findFocusTracker.onDidFocus(() => {
            this._findInputFocused.set(true);
            this._updateSearchScope();
        }));
        this._register(this._findFocusTracker.onDidBlur(() => {
            this._findInputFocused.set(false);
        }));
        this._replaceInputFocused = CONTEXT_REPLACE_INPUT_FOCUSED.bindTo(contextKeyService);
        this._replaceFocusTracker = this._register(dom/* trackFocus */.go(this._replaceInput.inputBox.inputElement));
        this._register(this._replaceFocusTracker.onDidFocus(() => {
            this._replaceInputFocused.set(true);
            this._updateSearchScope();
        }));
        this._register(this._replaceFocusTracker.onDidBlur(() => {
            this._replaceInputFocused.set(false);
        }));
        this._codeEditor.addOverlayWidget(this);
        if (this._codeEditor.getOption(39 /* EditorOption.find */).addExtraSpaceOnTop) {
            this._viewZone = new FindWidgetViewZone(0); // Put it before the first line then users can scroll beyond the first line.
        }
        this._register(this._codeEditor.onDidChangeModel(() => {
            if (!this._isVisible) {
                return;
            }
            this._viewZoneId = undefined;
        }));
        this._register(this._codeEditor.onDidScrollChange((e) => {
            if (e.scrollTopChanged) {
                this._layoutViewZone();
                return;
            }
            // for other scroll changes, layout the viewzone in next tick to avoid ruining current rendering.
            setTimeout(() => {
                this._layoutViewZone();
            }, 0);
        }));
    }
    // ----- IOverlayWidget API
    getId() {
        return FindWidget.ID;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        if (this._isVisible) {
            return {
                preference: 0 /* OverlayWidgetPositionPreference.TOP_RIGHT_CORNER */
            };
        }
        return null;
    }
    // ----- React to state changes
    _onStateChanged(e) {
        if (e.searchString) {
            try {
                this._ignoreChangeEvent = true;
                this._findInput.setValue(this._state.searchString);
            }
            finally {
                this._ignoreChangeEvent = false;
            }
            this._updateButtons();
        }
        if (e.replaceString) {
            this._replaceInput.inputBox.value = this._state.replaceString;
        }
        if (e.isRevealed) {
            if (this._state.isRevealed) {
                this._reveal();
            }
            else {
                this._hide(true);
            }
        }
        if (e.isReplaceRevealed) {
            if (this._state.isReplaceRevealed) {
                if (!this._codeEditor.getOption(88 /* EditorOption.readOnly */) && !this._isReplaceVisible) {
                    this._isReplaceVisible = true;
                    this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
                    this._updateButtons();
                    this._replaceInput.inputBox.layout();
                }
            }
            else {
                if (this._isReplaceVisible) {
                    this._isReplaceVisible = false;
                    this._updateButtons();
                }
            }
        }
        if ((e.isRevealed || e.isReplaceRevealed) && (this._state.isRevealed || this._state.isReplaceRevealed)) {
            if (this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }
        if (e.isRegex) {
            this._findInput.setRegex(this._state.isRegex);
        }
        if (e.wholeWord) {
            this._findInput.setWholeWords(this._state.wholeWord);
        }
        if (e.matchCase) {
            this._findInput.setCaseSensitive(this._state.matchCase);
        }
        if (e.preserveCase) {
            this._replaceInput.setPreserveCase(this._state.preserveCase);
        }
        if (e.searchScope) {
            if (this._state.searchScope) {
                this._toggleSelectionFind.checked = true;
            }
            else {
                this._toggleSelectionFind.checked = false;
            }
            this._updateToggleSelectionFindButton();
        }
        if (e.searchString || e.matchesCount || e.matchesPosition) {
            const showRedOutline = (this._state.searchString.length > 0 && this._state.matchesCount === 0);
            this._domNode.classList.toggle('no-results', showRedOutline);
            this._updateMatchesCount();
            this._updateButtons();
        }
        if (e.searchString || e.currentMatch) {
            this._layoutViewZone();
        }
        if (e.updateHistory) {
            this._delayedUpdateHistory();
        }
        if (e.loop) {
            this._updateButtons();
        }
    }
    _delayedUpdateHistory() {
        this._updateHistoryDelayer.trigger(this._updateHistory.bind(this)).then(undefined, errors/* onUnexpectedError */.dL);
    }
    _updateHistory() {
        if (this._state.searchString) {
            this._findInput.inputBox.addToHistory();
        }
        if (this._state.replaceString) {
            this._replaceInput.inputBox.addToHistory();
        }
    }
    _updateMatchesCount() {
        this._matchesCount.style.minWidth = MAX_MATCHES_COUNT_WIDTH + 'px';
        if (this._state.matchesCount >= MATCHES_LIMIT) {
            this._matchesCount.title = NLS_MATCHES_COUNT_LIMIT_TITLE;
        }
        else {
            this._matchesCount.title = '';
        }
        // remove previous content
        if (this._matchesCount.firstChild) {
            this._matchesCount.removeChild(this._matchesCount.firstChild);
        }
        let label;
        if (this._state.matchesCount > 0) {
            let matchesCount = String(this._state.matchesCount);
            if (this._state.matchesCount >= MATCHES_LIMIT) {
                matchesCount += '+';
            }
            let matchesPosition = String(this._state.matchesPosition);
            if (matchesPosition === '0') {
                matchesPosition = '?';
            }
            label = strings/* format */.WU(NLS_MATCHES_LOCATION, matchesPosition, matchesCount);
        }
        else {
            label = NLS_NO_RESULTS;
        }
        this._matchesCount.appendChild(document.createTextNode(label));
        (0,aria/* alert */.Z9)(this._getAriaLabel(label, this._state.currentMatch, this._state.searchString));
        MAX_MATCHES_COUNT_WIDTH = Math.max(MAX_MATCHES_COUNT_WIDTH, this._matchesCount.clientWidth);
    }
    // ----- actions
    _getAriaLabel(label, currentMatch, searchString) {
        if (label === NLS_NO_RESULTS) {
            return searchString === ''
                ? nls/* localize */.NC('ariaSearchNoResultEmpty', "{0} found", label)
                : nls/* localize */.NC('ariaSearchNoResult', "{0} found for '{1}'", label, searchString);
        }
        if (currentMatch) {
            const ariaLabel = nls/* localize */.NC('ariaSearchNoResultWithLineNum', "{0} found for '{1}', at {2}", label, searchString, currentMatch.startLineNumber + ':' + currentMatch.startColumn);
            const model = this._codeEditor.getModel();
            if (model && (currentMatch.startLineNumber <= model.getLineCount()) && (currentMatch.startLineNumber >= 1)) {
                const lineContent = model.getLineContent(currentMatch.startLineNumber);
                return `${lineContent}, ${ariaLabel}`;
            }
            return ariaLabel;
        }
        return nls/* localize */.NC('ariaSearchNoResultWithLineNumNoCurrentMatch', "{0} found for '{1}'", label, searchString);
    }
    /**
     * If 'selection find' is ON we should not disable the button (its function is to cancel 'selection find').
     * If 'selection find' is OFF we enable the button only if there is a selection.
     */
    _updateToggleSelectionFindButton() {
        const selection = this._codeEditor.getSelection();
        const isSelection = selection ? (selection.startLineNumber !== selection.endLineNumber || selection.startColumn !== selection.endColumn) : false;
        const isChecked = this._toggleSelectionFind.checked;
        if (this._isVisible && (isChecked || isSelection)) {
            this._toggleSelectionFind.enable();
        }
        else {
            this._toggleSelectionFind.disable();
        }
    }
    _updateButtons() {
        this._findInput.setEnabled(this._isVisible);
        this._replaceInput.setEnabled(this._isVisible && this._isReplaceVisible);
        this._updateToggleSelectionFindButton();
        this._closeBtn.setEnabled(this._isVisible);
        const findInputIsNonEmpty = (this._state.searchString.length > 0);
        const matchesCount = this._state.matchesCount ? true : false;
        this._prevBtn.setEnabled(this._isVisible && findInputIsNonEmpty && matchesCount && this._state.canNavigateBack());
        this._nextBtn.setEnabled(this._isVisible && findInputIsNonEmpty && matchesCount && this._state.canNavigateForward());
        this._replaceBtn.setEnabled(this._isVisible && this._isReplaceVisible && findInputIsNonEmpty);
        this._replaceAllBtn.setEnabled(this._isVisible && this._isReplaceVisible && findInputIsNonEmpty);
        this._domNode.classList.toggle('replaceToggled', this._isReplaceVisible);
        this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        const canReplace = !this._codeEditor.getOption(88 /* EditorOption.readOnly */);
        this._toggleReplaceBtn.setEnabled(this._isVisible && canReplace);
    }
    _reveal() {
        this._revealTimeouts.forEach(e => {
            clearTimeout(e);
        });
        this._revealTimeouts = [];
        if (!this._isVisible) {
            this._isVisible = true;
            const selection = this._codeEditor.getSelection();
            switch (this._codeEditor.getOption(39 /* EditorOption.find */).autoFindInSelection) {
                case 'always':
                    this._toggleSelectionFind.checked = true;
                    break;
                case 'never':
                    this._toggleSelectionFind.checked = false;
                    break;
                case 'multiline': {
                    const isSelectionMultipleLine = !!selection && selection.startLineNumber !== selection.endLineNumber;
                    this._toggleSelectionFind.checked = isSelectionMultipleLine;
                    break;
                }
                default:
                    break;
            }
            this._tryUpdateWidgetWidth();
            this._updateButtons();
            this._revealTimeouts.push(setTimeout(() => {
                this._domNode.classList.add('visible');
                this._domNode.setAttribute('aria-hidden', 'false');
            }, 0));
            // validate query again as it's being dismissed when we hide the find widget.
            this._revealTimeouts.push(setTimeout(() => {
                this._findInput.validate();
            }, 200));
            this._codeEditor.layoutOverlayWidget(this);
            let adjustEditorScrollTop = true;
            if (this._codeEditor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection && selection) {
                const domNode = this._codeEditor.getDomNode();
                if (domNode) {
                    const editorCoords = dom/* getDomNodePagePosition */.i(domNode);
                    const startCoords = this._codeEditor.getScrolledVisiblePosition(selection.getStartPosition());
                    const startLeft = editorCoords.left + (startCoords ? startCoords.left : 0);
                    const startTop = startCoords ? startCoords.top : 0;
                    if (this._viewZone && startTop < this._viewZone.heightInPx) {
                        if (selection.endLineNumber > selection.startLineNumber) {
                            adjustEditorScrollTop = false;
                        }
                        const leftOfFindWidget = dom/* getTopLeftOffset */.xQ(this._domNode).left;
                        if (startLeft > leftOfFindWidget) {
                            adjustEditorScrollTop = false;
                        }
                        const endCoords = this._codeEditor.getScrolledVisiblePosition(selection.getEndPosition());
                        const endLeft = editorCoords.left + (endCoords ? endCoords.left : 0);
                        if (endLeft > leftOfFindWidget) {
                            adjustEditorScrollTop = false;
                        }
                    }
                }
            }
            this._showViewZone(adjustEditorScrollTop);
        }
    }
    _hide(focusTheEditor) {
        this._revealTimeouts.forEach(e => {
            clearTimeout(e);
        });
        this._revealTimeouts = [];
        if (this._isVisible) {
            this._isVisible = false;
            this._updateButtons();
            this._domNode.classList.remove('visible');
            this._domNode.setAttribute('aria-hidden', 'true');
            this._findInput.clearMessage();
            if (focusTheEditor) {
                this._codeEditor.focus();
            }
            this._codeEditor.layoutOverlayWidget(this);
            this._removeViewZone();
        }
    }
    _layoutViewZone(targetScrollTop) {
        const addExtraSpaceOnTop = this._codeEditor.getOption(39 /* EditorOption.find */).addExtraSpaceOnTop;
        if (!addExtraSpaceOnTop) {
            this._removeViewZone();
            return;
        }
        if (!this._isVisible) {
            return;
        }
        const viewZone = this._viewZone;
        if (this._viewZoneId !== undefined || !viewZone) {
            return;
        }
        this._codeEditor.changeViewZones((accessor) => {
            viewZone.heightInPx = this._getHeight();
            this._viewZoneId = accessor.addZone(viewZone);
            // scroll top adjust to make sure the editor doesn't scroll when adding viewzone at the beginning.
            this._codeEditor.setScrollTop(targetScrollTop || this._codeEditor.getScrollTop() + viewZone.heightInPx);
        });
    }
    _showViewZone(adjustScroll = true) {
        if (!this._isVisible) {
            return;
        }
        const addExtraSpaceOnTop = this._codeEditor.getOption(39 /* EditorOption.find */).addExtraSpaceOnTop;
        if (!addExtraSpaceOnTop) {
            return;
        }
        if (this._viewZone === undefined) {
            this._viewZone = new FindWidgetViewZone(0);
        }
        const viewZone = this._viewZone;
        this._codeEditor.changeViewZones((accessor) => {
            if (this._viewZoneId !== undefined) {
                // the view zone already exists, we need to update the height
                const newHeight = this._getHeight();
                if (newHeight === viewZone.heightInPx) {
                    return;
                }
                const scrollAdjustment = newHeight - viewZone.heightInPx;
                viewZone.heightInPx = newHeight;
                accessor.layoutZone(this._viewZoneId);
                if (adjustScroll) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + scrollAdjustment);
                }
                return;
            }
            else {
                let scrollAdjustment = this._getHeight();
                // if the editor has top padding, factor that into the zone height
                scrollAdjustment -= this._codeEditor.getOption(81 /* EditorOption.padding */).top;
                if (scrollAdjustment <= 0) {
                    return;
                }
                viewZone.heightInPx = scrollAdjustment;
                this._viewZoneId = accessor.addZone(viewZone);
                if (adjustScroll) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() + scrollAdjustment);
                }
            }
        });
    }
    _removeViewZone() {
        this._codeEditor.changeViewZones((accessor) => {
            if (this._viewZoneId !== undefined) {
                accessor.removeZone(this._viewZoneId);
                this._viewZoneId = undefined;
                if (this._viewZone) {
                    this._codeEditor.setScrollTop(this._codeEditor.getScrollTop() - this._viewZone.heightInPx);
                    this._viewZone = undefined;
                }
            }
        });
    }
    _tryUpdateWidgetWidth() {
        if (!this._isVisible) {
            return;
        }
        if (!dom/* isInDOM */.Uw(this._domNode)) {
            // the widget is not in the DOM
            return;
        }
        const layoutInfo = this._codeEditor.getLayoutInfo();
        const editorContentWidth = layoutInfo.contentWidth;
        if (editorContentWidth <= 0) {
            // for example, diff view original editor
            this._domNode.classList.add('hiddenEditor');
            return;
        }
        else if (this._domNode.classList.contains('hiddenEditor')) {
            this._domNode.classList.remove('hiddenEditor');
        }
        const editorWidth = layoutInfo.width;
        const minimapWidth = layoutInfo.minimap.minimapWidth;
        let collapsedFindWidget = false;
        let reducedFindWidget = false;
        let narrowFindWidget = false;
        if (this._resized) {
            const widgetWidth = dom/* getTotalWidth */.w(this._domNode);
            if (widgetWidth > FIND_WIDGET_INITIAL_WIDTH) {
                // as the widget is resized by users, we may need to change the max width of the widget as the editor width changes.
                this._domNode.style.maxWidth = `${editorWidth - 28 - minimapWidth - 15}px`;
                this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
                return;
            }
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth >= editorWidth) {
            reducedFindWidget = true;
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth - MAX_MATCHES_COUNT_WIDTH >= editorWidth) {
            narrowFindWidget = true;
        }
        if (FIND_WIDGET_INITIAL_WIDTH + 28 + minimapWidth - MAX_MATCHES_COUNT_WIDTH >= editorWidth + 50) {
            collapsedFindWidget = true;
        }
        this._domNode.classList.toggle('collapsed-find-widget', collapsedFindWidget);
        this._domNode.classList.toggle('narrow-find-widget', narrowFindWidget);
        this._domNode.classList.toggle('reduced-find-widget', reducedFindWidget);
        if (!narrowFindWidget && !collapsedFindWidget) {
            // the minimal left offset of findwidget is 15px.
            this._domNode.style.maxWidth = `${editorWidth - 28 - minimapWidth - 15}px`;
        }
        this._findInput.layout({ collapsedFindWidget, narrowFindWidget, reducedFindWidget });
        if (this._resized) {
            const findInputWidth = this._findInput.inputBox.element.clientWidth;
            if (findInputWidth > 0) {
                this._replaceInput.width = findInputWidth;
            }
        }
        else if (this._isReplaceVisible) {
            this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
        }
    }
    _getHeight() {
        let totalheight = 0;
        // find input margin top
        totalheight += 4;
        // find input height
        totalheight += this._findInput.inputBox.height + 2 /** input box border */;
        if (this._isReplaceVisible) {
            // replace input margin
            totalheight += 4;
            totalheight += this._replaceInput.inputBox.height + 2 /** input box border */;
        }
        // margin bottom
        totalheight += 4;
        return totalheight;
    }
    _tryUpdateHeight() {
        const totalHeight = this._getHeight();
        if (this._cachedHeight !== null && this._cachedHeight === totalHeight) {
            return false;
        }
        this._cachedHeight = totalHeight;
        this._domNode.style.height = `${totalHeight}px`;
        return true;
    }
    // ----- Public
    focusFindInput() {
        this._findInput.select();
        // Edge browser requires focus() in addition to select()
        this._findInput.focus();
    }
    focusReplaceInput() {
        this._replaceInput.select();
        // Edge browser requires focus() in addition to select()
        this._replaceInput.focus();
    }
    highlightFindOptions() {
        this._findInput.highlightFindOptions();
    }
    _updateSearchScope() {
        if (!this._codeEditor.hasModel()) {
            return;
        }
        if (this._toggleSelectionFind.checked) {
            const selections = this._codeEditor.getSelections();
            selections.map(selection => {
                if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                    selection = selection.setEndPosition(selection.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
                }
                const currentMatch = this._state.currentMatch;
                if (selection.startLineNumber !== selection.endLineNumber) {
                    if (!core_range/* Range */.e.equalsRange(selection, currentMatch)) {
                        return selection;
                    }
                }
                return null;
            }).filter(element => !!element);
            if (selections.length) {
                this._state.change({ searchScope: selections }, true);
            }
        }
    }
    _onFindInputMouseDown(e) {
        // on linux, middle key does pasting.
        if (e.middleButton) {
            e.stopPropagation();
        }
    }
    _onFindInputKeyDown(e) {
        if (e.equals(ctrlKeyMod | 3 /* KeyCode.Enter */)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            else {
                this._findInput.inputBox.insertAtCursor('\n');
                e.preventDefault();
                return;
            }
        }
        if (e.equals(2 /* KeyCode.Tab */)) {
            if (this._isReplaceVisible) {
                this._replaceInput.focus();
            }
            else {
                this._findInput.focusOnCaseSensitive();
            }
            e.preventDefault();
            return;
        }
        if (e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)) {
            this._codeEditor.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(16 /* KeyCode.UpArrow */)) {
            return stopPropagationForMultiLineUpwards(e, this._findInput.getValue(), this._findInput.domNode.querySelector('textarea'));
        }
        if (e.equals(18 /* KeyCode.DownArrow */)) {
            return stopPropagationForMultiLineDownwards(e, this._findInput.getValue(), this._findInput.domNode.querySelector('textarea'));
        }
    }
    _onReplaceInputKeyDown(e) {
        if (e.equals(ctrlKeyMod | 3 /* KeyCode.Enter */)) {
            if (this._keybindingService.dispatchEvent(e, e.target)) {
                e.preventDefault();
                return;
            }
            else {
                if (platform/* isWindows */.ED && platform/* isNative */.tY && !this._ctrlEnterReplaceAllWarningPrompted) {
                    // this is the first time when users press Ctrl + Enter to replace all
                    this._notificationService.info(nls/* localize */.NC('ctrlEnter.keybindingChanged', 'Ctrl+Enter now inserts line break instead of replacing all. You can modify the keybinding for editor.action.replaceAll to override this behavior.'));
                    this._ctrlEnterReplaceAllWarningPrompted = true;
                    this._storageService.store(ctrlEnterReplaceAllWarningPromptedKey, true, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
                }
                this._replaceInput.inputBox.insertAtCursor('\n');
                e.preventDefault();
                return;
            }
        }
        if (e.equals(2 /* KeyCode.Tab */)) {
            this._findInput.focusOnCaseSensitive();
            e.preventDefault();
            return;
        }
        if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
            this._findInput.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)) {
            this._codeEditor.focus();
            e.preventDefault();
            return;
        }
        if (e.equals(16 /* KeyCode.UpArrow */)) {
            return stopPropagationForMultiLineUpwards(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector('textarea'));
        }
        if (e.equals(18 /* KeyCode.DownArrow */)) {
            return stopPropagationForMultiLineDownwards(e, this._replaceInput.inputBox.value, this._replaceInput.inputBox.element.querySelector('textarea'));
        }
    }
    // ----- sash
    getVerticalSashLeft(_sash) {
        return 0;
    }
    // ----- initialization
    _keybindingLabelFor(actionId) {
        const kb = this._keybindingService.lookupKeybinding(actionId);
        if (!kb) {
            return '';
        }
        return ` (${kb.getLabel()})`;
    }
    _buildDomNode() {
        const flexibleHeight = true;
        const flexibleWidth = true;
        // Find input
        this._findInput = this._register(new contextScopedHistoryWidget/* ContextScopedFindInput */.Yb(null, this._contextViewProvider, {
            width: FIND_INPUT_AREA_WIDTH,
            label: NLS_FIND_INPUT_LABEL,
            placeholder: NLS_FIND_INPUT_PLACEHOLDER,
            appendCaseSensitiveLabel: this._keybindingLabelFor(FIND_IDS.ToggleCaseSensitiveCommand),
            appendWholeWordsLabel: this._keybindingLabelFor(FIND_IDS.ToggleWholeWordCommand),
            appendRegexLabel: this._keybindingLabelFor(FIND_IDS.ToggleRegexCommand),
            validation: (value) => {
                if (value.length === 0 || !this._findInput.getRegex()) {
                    return null;
                }
                try {
                    // use `g` and `u` which are also used by the TextModel search
                    new RegExp(value, 'gu');
                    return null;
                }
                catch (e) {
                    return { content: e.message };
                }
            },
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight: 118,
            showCommonFindToggles: true,
            showHistoryHint: () => (0,historyWidgetKeybindingHint/* showHistoryKeybindingHint */.u)(this._keybindingService),
            inputBoxStyles: defaultStyles/* defaultInputBoxStyles */.Hc,
            toggleStyles: defaultStyles/* defaultToggleStyles */.pl
        }, this._contextKeyService));
        this._findInput.setRegex(!!this._state.isRegex);
        this._findInput.setCaseSensitive(!!this._state.matchCase);
        this._findInput.setWholeWords(!!this._state.wholeWord);
        this._register(this._findInput.onKeyDown((e) => this._onFindInputKeyDown(e)));
        this._register(this._findInput.inputBox.onDidChange(() => {
            if (this._ignoreChangeEvent) {
                return;
            }
            this._state.change({ searchString: this._findInput.getValue() }, true);
        }));
        this._register(this._findInput.onDidOptionChange(() => {
            this._state.change({
                isRegex: this._findInput.getRegex(),
                wholeWord: this._findInput.getWholeWords(),
                matchCase: this._findInput.getCaseSensitive()
            }, true);
        }));
        this._register(this._findInput.onCaseSensitiveKeyDown((e) => {
            if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
                if (this._isReplaceVisible) {
                    this._replaceInput.focus();
                    e.preventDefault();
                }
            }
        }));
        this._register(this._findInput.onRegexKeyDown((e) => {
            if (e.equals(2 /* KeyCode.Tab */)) {
                if (this._isReplaceVisible) {
                    this._replaceInput.focusOnPreserve();
                    e.preventDefault();
                }
            }
        }));
        this._register(this._findInput.inputBox.onDidHeightChange((e) => {
            if (this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }));
        if (platform/* isLinux */.IJ) {
            this._register(this._findInput.onMouseDown((e) => this._onFindInputMouseDown(e)));
        }
        this._matchesCount = document.createElement('div');
        this._matchesCount.className = 'matchesCount';
        this._updateMatchesCount();
        // Previous button
        this._prevBtn = this._register(new SimpleButton({
            label: NLS_PREVIOUS_MATCH_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.PreviousMatchFindAction),
            icon: findPreviousMatchIcon,
            onTrigger: () => {
                (0,types/* assertIsDefined */.cW)(this._codeEditor.getAction(FIND_IDS.PreviousMatchFindAction)).run().then(undefined, errors/* onUnexpectedError */.dL);
            }
        }));
        // Next button
        this._nextBtn = this._register(new SimpleButton({
            label: NLS_NEXT_MATCH_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.NextMatchFindAction),
            icon: findNextMatchIcon,
            onTrigger: () => {
                (0,types/* assertIsDefined */.cW)(this._codeEditor.getAction(FIND_IDS.NextMatchFindAction)).run().then(undefined, errors/* onUnexpectedError */.dL);
            }
        }));
        const findPart = document.createElement('div');
        findPart.className = 'find-part';
        findPart.appendChild(this._findInput.domNode);
        const actionsContainer = document.createElement('div');
        actionsContainer.className = 'find-actions';
        findPart.appendChild(actionsContainer);
        actionsContainer.appendChild(this._matchesCount);
        actionsContainer.appendChild(this._prevBtn.domNode);
        actionsContainer.appendChild(this._nextBtn.domNode);
        // Toggle selection button
        this._toggleSelectionFind = this._register(new toggle/* Toggle */.Z({
            icon: findSelectionIcon,
            title: NLS_TOGGLE_SELECTION_FIND_TITLE + this._keybindingLabelFor(FIND_IDS.ToggleSearchScopeCommand),
            isChecked: false,
            inputActiveOptionBackground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionBackground */.XEs),
            inputActiveOptionBorder: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionBorder */.PRb),
            inputActiveOptionForeground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* inputActiveOptionForeground */.Pvw),
        }));
        this._register(this._toggleSelectionFind.onChange(() => {
            if (this._toggleSelectionFind.checked) {
                if (this._codeEditor.hasModel()) {
                    const selections = this._codeEditor.getSelections();
                    selections.map(selection => {
                        if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                            selection = selection.setEndPosition(selection.endLineNumber - 1, this._codeEditor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
                        }
                        if (!selection.isEmpty()) {
                            return selection;
                        }
                        return null;
                    }).filter(element => !!element);
                    if (selections.length) {
                        this._state.change({ searchScope: selections }, true);
                    }
                }
            }
            else {
                this._state.change({ searchScope: null }, true);
            }
        }));
        actionsContainer.appendChild(this._toggleSelectionFind.domNode);
        // Close button
        this._closeBtn = this._register(new SimpleButton({
            label: NLS_CLOSE_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.CloseFindWidgetCommand),
            icon: iconRegistry/* widgetClose */.s_,
            onTrigger: () => {
                this._state.change({ isRevealed: false, searchScope: null }, false);
            },
            onKeyDown: (e) => {
                if (e.equals(2 /* KeyCode.Tab */)) {
                    if (this._isReplaceVisible) {
                        if (this._replaceBtn.isEnabled()) {
                            this._replaceBtn.focus();
                        }
                        else {
                            this._codeEditor.focus();
                        }
                        e.preventDefault();
                    }
                }
            }
        }));
        actionsContainer.appendChild(this._closeBtn.domNode);
        // Replace input
        this._replaceInput = this._register(new contextScopedHistoryWidget/* ContextScopedReplaceInput */.Nq(null, undefined, {
            label: NLS_REPLACE_INPUT_LABEL,
            placeholder: NLS_REPLACE_INPUT_PLACEHOLDER,
            appendPreserveCaseLabel: this._keybindingLabelFor(FIND_IDS.TogglePreserveCaseCommand),
            history: [],
            flexibleHeight,
            flexibleWidth,
            flexibleMaxHeight: 118,
            showHistoryHint: () => (0,historyWidgetKeybindingHint/* showHistoryKeybindingHint */.u)(this._keybindingService),
            inputBoxStyles: defaultStyles/* defaultInputBoxStyles */.Hc,
            toggleStyles: defaultStyles/* defaultToggleStyles */.pl
        }, this._contextKeyService, true));
        this._replaceInput.setPreserveCase(!!this._state.preserveCase);
        this._register(this._replaceInput.onKeyDown((e) => this._onReplaceInputKeyDown(e)));
        this._register(this._replaceInput.inputBox.onDidChange(() => {
            this._state.change({ replaceString: this._replaceInput.inputBox.value }, false);
        }));
        this._register(this._replaceInput.inputBox.onDidHeightChange((e) => {
            if (this._isReplaceVisible && this._tryUpdateHeight()) {
                this._showViewZone();
            }
        }));
        this._register(this._replaceInput.onDidOptionChange(() => {
            this._state.change({
                preserveCase: this._replaceInput.getPreserveCase()
            }, true);
        }));
        this._register(this._replaceInput.onPreserveCaseKeyDown((e) => {
            if (e.equals(2 /* KeyCode.Tab */)) {
                if (this._prevBtn.isEnabled()) {
                    this._prevBtn.focus();
                }
                else if (this._nextBtn.isEnabled()) {
                    this._nextBtn.focus();
                }
                else if (this._toggleSelectionFind.enabled) {
                    this._toggleSelectionFind.focus();
                }
                else if (this._closeBtn.isEnabled()) {
                    this._closeBtn.focus();
                }
                e.preventDefault();
            }
        }));
        // Replace one button
        this._replaceBtn = this._register(new SimpleButton({
            label: NLS_REPLACE_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.ReplaceOneAction),
            icon: findReplaceIcon,
            onTrigger: () => {
                this._controller.replace();
            },
            onKeyDown: (e) => {
                if (e.equals(1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */)) {
                    this._closeBtn.focus();
                    e.preventDefault();
                }
            }
        }));
        // Replace all button
        this._replaceAllBtn = this._register(new SimpleButton({
            label: NLS_REPLACE_ALL_BTN_LABEL + this._keybindingLabelFor(FIND_IDS.ReplaceAllAction),
            icon: findReplaceAllIcon,
            onTrigger: () => {
                this._controller.replaceAll();
            }
        }));
        const replacePart = document.createElement('div');
        replacePart.className = 'replace-part';
        replacePart.appendChild(this._replaceInput.domNode);
        const replaceActionsContainer = document.createElement('div');
        replaceActionsContainer.className = 'replace-actions';
        replacePart.appendChild(replaceActionsContainer);
        replaceActionsContainer.appendChild(this._replaceBtn.domNode);
        replaceActionsContainer.appendChild(this._replaceAllBtn.domNode);
        // Toggle replace button
        this._toggleReplaceBtn = this._register(new SimpleButton({
            label: NLS_TOGGLE_REPLACE_MODE_BTN_LABEL,
            className: 'codicon toggle left',
            onTrigger: () => {
                this._state.change({ isReplaceRevealed: !this._isReplaceVisible }, false);
                if (this._isReplaceVisible) {
                    this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
                    this._replaceInput.inputBox.layout();
                }
                this._showViewZone();
            }
        }));
        this._toggleReplaceBtn.setExpanded(this._isReplaceVisible);
        // Widget
        this._domNode = document.createElement('div');
        this._domNode.className = 'editor-widget find-widget';
        this._domNode.setAttribute('aria-hidden', 'true');
        // We need to set this explicitly, otherwise on IE11, the width inheritence of flex doesn't work.
        this._domNode.style.width = `${FIND_WIDGET_INITIAL_WIDTH}px`;
        this._domNode.appendChild(this._toggleReplaceBtn.domNode);
        this._domNode.appendChild(findPart);
        this._domNode.appendChild(replacePart);
        this._resizeSash = new sash/* Sash */.g(this._domNode, this, { orientation: 0 /* Orientation.VERTICAL */, size: 2 });
        this._resized = false;
        let originalWidth = FIND_WIDGET_INITIAL_WIDTH;
        this._register(this._resizeSash.onDidStart(() => {
            originalWidth = dom/* getTotalWidth */.w(this._domNode);
        }));
        this._register(this._resizeSash.onDidChange((evt) => {
            this._resized = true;
            const width = originalWidth + evt.startX - evt.currentX;
            if (width < FIND_WIDGET_INITIAL_WIDTH) {
                // narrow down the find widget should be handled by CSS.
                return;
            }
            const maxWidth = parseFloat(dom/* getComputedStyle */.Dx(this._domNode).maxWidth) || 0;
            if (width > maxWidth) {
                return;
            }
            this._domNode.style.width = `${width}px`;
            if (this._isReplaceVisible) {
                this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
            }
            this._findInput.inputBox.layout();
            this._tryUpdateHeight();
        }));
        this._register(this._resizeSash.onDidReset(() => {
            // users double click on the sash
            const currentWidth = dom/* getTotalWidth */.w(this._domNode);
            if (currentWidth < FIND_WIDGET_INITIAL_WIDTH) {
                // The editor is narrow and the width of the find widget is controlled fully by CSS.
                return;
            }
            let width = FIND_WIDGET_INITIAL_WIDTH;
            if (!this._resized || currentWidth === FIND_WIDGET_INITIAL_WIDTH) {
                // 1. never resized before, double click should maximizes it
                // 2. users resized it already but its width is the same as default
                const layoutInfo = this._codeEditor.getLayoutInfo();
                width = layoutInfo.width - 28 - layoutInfo.minimap.minimapWidth - 15;
                this._resized = true;
            }
            else {
                /**
                 * no op, the find widget should be shrinked to its default size.
                 */
            }
            this._domNode.style.width = `${width}px`;
            if (this._isReplaceVisible) {
                this._replaceInput.width = dom/* getTotalWidth */.w(this._findInput.domNode);
            }
            this._findInput.inputBox.layout();
        }));
    }
    updateAccessibilitySupport() {
        const value = this._codeEditor.getOption(2 /* EditorOption.accessibilitySupport */);
        this._findInput.setFocusInputOnOptionClick(value !== 2 /* AccessibilitySupport.Enabled */);
    }
}
FindWidget.ID = 'editor.contrib.findWidget';
class SimpleButton extends widget/* Widget */.$ {
    constructor(opts) {
        super();
        this._opts = opts;
        let className = 'button';
        if (this._opts.className) {
            className = className + ' ' + this._opts.className;
        }
        if (this._opts.icon) {
            className = className + ' ' + themables/* ThemeIcon */.k.asClassName(this._opts.icon);
        }
        this._domNode = document.createElement('div');
        this._domNode.title = this._opts.label;
        this._domNode.tabIndex = 0;
        this._domNode.className = className;
        this._domNode.setAttribute('role', 'button');
        this._domNode.setAttribute('aria-label', this._opts.label);
        this.onclick(this._domNode, (e) => {
            this._opts.onTrigger();
            e.preventDefault();
        });
        this.onkeydown(this._domNode, (e) => {
            var _a, _b;
            if (e.equals(10 /* KeyCode.Space */) || e.equals(3 /* KeyCode.Enter */)) {
                this._opts.onTrigger();
                e.preventDefault();
                return;
            }
            (_b = (_a = this._opts).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        });
    }
    get domNode() {
        return this._domNode;
    }
    isEnabled() {
        return (this._domNode.tabIndex >= 0);
    }
    focus() {
        this._domNode.focus();
    }
    setEnabled(enabled) {
        this._domNode.classList.toggle('disabled', !enabled);
        this._domNode.setAttribute('aria-disabled', String(!enabled));
        this._domNode.tabIndex = enabled ? 0 : -1;
    }
    setExpanded(expanded) {
        this._domNode.setAttribute('aria-expanded', String(!!expanded));
        if (expanded) {
            this._domNode.classList.remove(...themables/* ThemeIcon */.k.asClassNameArray(findCollapsedIcon));
            this._domNode.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(findExpandedIcon));
        }
        else {
            this._domNode.classList.remove(...themables/* ThemeIcon */.k.asClassNameArray(findExpandedIcon));
            this._domNode.classList.add(...themables/* ThemeIcon */.k.asClassNameArray(findCollapsedIcon));
        }
    }
}
// theming
(0,themeService/* registerThemingParticipant */.Ic)((theme, collector) => {
    const addBackgroundColorRule = (selector, color) => {
        if (color) {
            collector.addRule(`.monaco-editor ${selector} { background-color: ${color}; }`);
        }
    };
    addBackgroundColorRule('.findMatch', theme.getColor(colorRegistry/* editorFindMatchHighlight */.MUv));
    addBackgroundColorRule('.currentFindMatch', theme.getColor(colorRegistry/* editorFindMatch */.nyM));
    addBackgroundColorRule('.findScope', theme.getColor(colorRegistry/* editorFindRangeHighlight */.jUe));
    const widgetBackground = theme.getColor(colorRegistry/* editorWidgetBackground */.D0T);
    addBackgroundColorRule('.find-widget', widgetBackground);
    const widgetShadowColor = theme.getColor(colorRegistry/* widgetShadow */.rh);
    if (widgetShadowColor) {
        collector.addRule(`.monaco-editor .find-widget { box-shadow: 0 0 8px 2px ${widgetShadowColor}; }`);
    }
    const widgetBorderColor = theme.getColor(colorRegistry/* widgetBorder */.A42);
    if (widgetBorderColor) {
        collector.addRule(`.monaco-editor .find-widget { border-left: 1px solid ${widgetBorderColor}; border-right: 1px solid ${widgetBorderColor}; border-bottom: 1px solid ${widgetBorderColor}; }`);
    }
    const findMatchHighlightBorder = theme.getColor(colorRegistry/* editorFindMatchHighlightBorder */.EiJ);
    if (findMatchHighlightBorder) {
        collector.addRule(`.monaco-editor .findMatch { border: 1px ${(0,common_theme/* isHighContrast */.c3)(theme.type) ? 'dotted' : 'solid'} ${findMatchHighlightBorder}; box-sizing: border-box; }`);
    }
    const findMatchBorder = theme.getColor(colorRegistry/* editorFindMatchBorder */.pnM);
    if (findMatchBorder) {
        collector.addRule(`.monaco-editor .currentFindMatch { border: 2px solid ${findMatchBorder}; padding: 1px; box-sizing: border-box; }`);
    }
    const findRangeHighlightBorder = theme.getColor(colorRegistry/* editorFindRangeHighlightBorder */.gkn);
    if (findRangeHighlightBorder) {
        collector.addRule(`.monaco-editor .findScope { border: 1px ${(0,common_theme/* isHighContrast */.c3)(theme.type) ? 'dashed' : 'solid'} ${findRangeHighlightBorder}; }`);
    }
    const hcBorder = theme.getColor(colorRegistry/* contrastBorder */.lRK);
    if (hcBorder) {
        collector.addRule(`.monaco-editor .find-widget { border: 1px solid ${hcBorder}; }`);
    }
    const foreground = theme.getColor(colorRegistry/* editorWidgetForeground */.Hfx);
    if (foreground) {
        collector.addRule(`.monaco-editor .find-widget { color: ${foreground}; }`);
    }
    const error = theme.getColor(colorRegistry/* errorForeground */.Ido);
    if (error) {
        collector.addRule(`.monaco-editor .find-widget.no-results .matchesCount { color: ${error}; }`);
    }
    const resizeBorderBackground = theme.getColor(colorRegistry/* editorWidgetResizeBorder */.Ng6);
    if (resizeBorderBackground) {
        collector.addRule(`.monaco-editor .find-widget .monaco-sash { background-color: ${resizeBorderBackground}; }`);
    }
    else {
        const border = theme.getColor(colorRegistry/* editorWidgetBorder */.D1_);
        if (border) {
            collector.addRule(`.monaco-editor .find-widget .monaco-sash { background-color: ${border}; }`);
        }
    }
    // Action bars
    const toolbarHoverBackgroundColor = theme.getColor(colorRegistry/* toolbarHoverBackground */.lUq);
    if (toolbarHoverBackgroundColor) {
        collector.addRule(`
		.monaco-editor .find-widget .button:not(.disabled):hover,
		.monaco-editor .find-widget .codicon-find-selection:hover {
			background-color: ${toolbarHoverBackgroundColor} !important;
		}
	`);
    }
    // This rule is used to override the outline color for synthetic-focus find input.
    const focusOutline = theme.getColor(colorRegistry/* focusBorder */.R80);
    if (focusOutline) {
        collector.addRule(`.monaco-editor .find-widget .monaco-inputbox.synthetic-focus { outline-color: ${focusOutline}; }`);
    }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(3145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/clipboard/common/clipboardService.js
var clipboardService = __webpack_require__(78547);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js
var contextView = __webpack_require__(8337);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/common/quickInput.js
var quickInput = __webpack_require__(71130);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js
var storage = __webpack_require__(81358);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js
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
var findController_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















const SEARCH_STRING_MAX_LENGTH = 524288;
function getSelectionSearchString(editor, seedSearchStringFromSelection = 'single', seedSearchStringFromNonEmptySelection = false) {
    if (!editor.hasModel()) {
        return null;
    }
    const selection = editor.getSelection();
    // if selection spans multiple lines, default search string to empty
    if ((seedSearchStringFromSelection === 'single' && selection.startLineNumber === selection.endLineNumber)
        || seedSearchStringFromSelection === 'multiple') {
        if (selection.isEmpty()) {
            const wordAtPosition = editor.getConfiguredWordAtPosition(selection.getStartPosition());
            if (wordAtPosition && (false === seedSearchStringFromNonEmptySelection)) {
                return wordAtPosition.word;
            }
        }
        else {
            if (editor.getModel().getValueLengthInRange(selection) < SEARCH_STRING_MAX_LENGTH) {
                return editor.getModel().getValueInRange(selection);
            }
        }
    }
    return null;
}
let CommonFindController = class CommonFindController extends lifecycle/* Disposable */.JT {
    get editor() {
        return this._editor;
    }
    static get(editor) {
        return editor.getContribution(CommonFindController.ID);
    }
    constructor(editor, contextKeyService, storageService, clipboardService) {
        super();
        this._editor = editor;
        this._findWidgetVisible = CONTEXT_FIND_WIDGET_VISIBLE.bindTo(contextKeyService);
        this._contextKeyService = contextKeyService;
        this._storageService = storageService;
        this._clipboardService = clipboardService;
        this._updateHistoryDelayer = new common_async/* Delayer */.vp(500);
        this._state = this._register(new FindReplaceState());
        this.loadQueryState();
        this._register(this._state.onFindReplaceStateChange((e) => this._onStateChanged(e)));
        this._model = null;
        this._register(this._editor.onDidChangeModel(() => {
            const shouldRestartFind = (this._editor.getModel() && this._state.isRevealed);
            this.disposeModel();
            this._state.change({
                searchScope: null,
                matchCase: this._storageService.getBoolean('editor.matchCase', 1 /* StorageScope.WORKSPACE */, false),
                wholeWord: this._storageService.getBoolean('editor.wholeWord', 1 /* StorageScope.WORKSPACE */, false),
                isRegex: this._storageService.getBoolean('editor.isRegex', 1 /* StorageScope.WORKSPACE */, false),
                preserveCase: this._storageService.getBoolean('editor.preserveCase', 1 /* StorageScope.WORKSPACE */, false)
            }, false);
            if (shouldRestartFind) {
                this._start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: 'none',
                    seedSearchStringFromNonEmptySelection: false,
                    seedSearchStringFromGlobalClipboard: false,
                    shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                    shouldAnimate: false,
                    updateSearchScope: false,
                    loop: this._editor.getOption(39 /* EditorOption.find */).loop
                });
            }
        }));
    }
    dispose() {
        this.disposeModel();
        super.dispose();
    }
    disposeModel() {
        if (this._model) {
            this._model.dispose();
            this._model = null;
        }
    }
    _onStateChanged(e) {
        this.saveQueryState(e);
        if (e.isRevealed) {
            if (this._state.isRevealed) {
                this._findWidgetVisible.set(true);
            }
            else {
                this._findWidgetVisible.reset();
                this.disposeModel();
            }
        }
        if (e.searchString) {
            this.setGlobalBufferTerm(this._state.searchString);
        }
    }
    saveQueryState(e) {
        if (e.isRegex) {
            this._storageService.store('editor.isRegex', this._state.actualIsRegex, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.wholeWord) {
            this._storageService.store('editor.wholeWord', this._state.actualWholeWord, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.matchCase) {
            this._storageService.store('editor.matchCase', this._state.actualMatchCase, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        if (e.preserveCase) {
            this._storageService.store('editor.preserveCase', this._state.actualPreserveCase, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
    }
    loadQueryState() {
        this._state.change({
            matchCase: this._storageService.getBoolean('editor.matchCase', 1 /* StorageScope.WORKSPACE */, this._state.matchCase),
            wholeWord: this._storageService.getBoolean('editor.wholeWord', 1 /* StorageScope.WORKSPACE */, this._state.wholeWord),
            isRegex: this._storageService.getBoolean('editor.isRegex', 1 /* StorageScope.WORKSPACE */, this._state.isRegex),
            preserveCase: this._storageService.getBoolean('editor.preserveCase', 1 /* StorageScope.WORKSPACE */, this._state.preserveCase)
        }, false);
    }
    isFindInputFocused() {
        return !!CONTEXT_FIND_INPUT_FOCUSED.getValue(this._contextKeyService);
    }
    getState() {
        return this._state;
    }
    closeFindWidget() {
        this._state.change({
            isRevealed: false,
            searchScope: null
        }, false);
        this._editor.focus();
    }
    toggleCaseSensitive() {
        this._state.change({ matchCase: !this._state.matchCase }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleWholeWords() {
        this._state.change({ wholeWord: !this._state.wholeWord }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleRegex() {
        this._state.change({ isRegex: !this._state.isRegex }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    togglePreserveCase() {
        this._state.change({ preserveCase: !this._state.preserveCase }, false);
        if (!this._state.isRevealed) {
            this.highlightFindOptions();
        }
    }
    toggleSearchScope() {
        if (this._state.searchScope) {
            this._state.change({ searchScope: null }, true);
        }
        else {
            if (this._editor.hasModel()) {
                const selections = this._editor.getSelections();
                selections.map(selection => {
                    if (selection.endColumn === 1 && selection.endLineNumber > selection.startLineNumber) {
                        selection = selection.setEndPosition(selection.endLineNumber - 1, this._editor.getModel().getLineMaxColumn(selection.endLineNumber - 1));
                    }
                    if (!selection.isEmpty()) {
                        return selection;
                    }
                    return null;
                }).filter(element => !!element);
                if (selections.length) {
                    this._state.change({ searchScope: selections }, true);
                }
            }
        }
    }
    setSearchString(searchString) {
        if (this._state.isRegex) {
            searchString = strings/* escapeRegExpCharacters */.ec(searchString);
        }
        this._state.change({ searchString: searchString }, false);
    }
    highlightFindOptions(ignoreWhenVisible = false) {
        // overwritten in subclass
    }
    _start(opts, newState) {
        return findController_awaiter(this, void 0, void 0, function* () {
            this.disposeModel();
            if (!this._editor.hasModel()) {
                // cannot do anything with an editor that doesn't have a model...
                return;
            }
            const stateChanges = Object.assign(Object.assign({}, newState), { isRevealed: true });
            if (opts.seedSearchStringFromSelection === 'single') {
                const selectionSearchString = getSelectionSearchString(this._editor, opts.seedSearchStringFromSelection, opts.seedSearchStringFromNonEmptySelection);
                if (selectionSearchString) {
                    if (this._state.isRegex) {
                        stateChanges.searchString = strings/* escapeRegExpCharacters */.ec(selectionSearchString);
                    }
                    else {
                        stateChanges.searchString = selectionSearchString;
                    }
                }
            }
            else if (opts.seedSearchStringFromSelection === 'multiple' && !opts.updateSearchScope) {
                const selectionSearchString = getSelectionSearchString(this._editor, opts.seedSearchStringFromSelection);
                if (selectionSearchString) {
                    stateChanges.searchString = selectionSearchString;
                }
            }
            if (!stateChanges.searchString && opts.seedSearchStringFromGlobalClipboard) {
                const selectionSearchString = yield this.getGlobalBufferTerm();
                if (!this._editor.hasModel()) {
                    // the editor has lost its model in the meantime
                    return;
                }
                if (selectionSearchString) {
                    stateChanges.searchString = selectionSearchString;
                }
            }
            // Overwrite isReplaceRevealed
            if (opts.forceRevealReplace || stateChanges.isReplaceRevealed) {
                stateChanges.isReplaceRevealed = true;
            }
            else if (!this._findWidgetVisible.get()) {
                stateChanges.isReplaceRevealed = false;
            }
            if (opts.updateSearchScope) {
                const currentSelections = this._editor.getSelections();
                if (currentSelections.some(selection => !selection.isEmpty())) {
                    stateChanges.searchScope = currentSelections;
                }
            }
            stateChanges.loop = opts.loop;
            this._state.change(stateChanges, false);
            if (!this._model) {
                this._model = new FindModelBoundToEditorModel(this._editor, this._state);
            }
        });
    }
    start(opts, newState) {
        return this._start(opts, newState);
    }
    moveToNextMatch() {
        if (this._model) {
            this._model.moveToNextMatch();
            return true;
        }
        return false;
    }
    moveToPrevMatch() {
        if (this._model) {
            this._model.moveToPrevMatch();
            return true;
        }
        return false;
    }
    goToMatch(index) {
        if (this._model) {
            this._model.moveToMatch(index);
            return true;
        }
        return false;
    }
    replace() {
        if (this._model) {
            this._model.replace();
            return true;
        }
        return false;
    }
    replaceAll() {
        if (this._model) {
            this._model.replaceAll();
            return true;
        }
        return false;
    }
    selectAllMatches() {
        if (this._model) {
            this._model.selectAllMatches();
            this._editor.focus();
            return true;
        }
        return false;
    }
    getGlobalBufferTerm() {
        return findController_awaiter(this, void 0, void 0, function* () {
            if (this._editor.getOption(39 /* EditorOption.find */).globalFindClipboard
                && this._editor.hasModel()
                && !this._editor.getModel().isTooLargeForSyncing()) {
                return this._clipboardService.readFindText();
            }
            return '';
        });
    }
    setGlobalBufferTerm(text) {
        if (this._editor.getOption(39 /* EditorOption.find */).globalFindClipboard
            && this._editor.hasModel()
            && !this._editor.getModel().isTooLargeForSyncing()) {
            // intentionally not awaited
            this._clipboardService.writeFindText(text);
        }
    }
};
CommonFindController.ID = 'editor.contrib.findController';
CommonFindController = __decorate([
    __param(1, contextkey/* IContextKeyService */.i6),
    __param(2, storage/* IStorageService */.Uy),
    __param(3, clipboardService/* IClipboardService */.p)
], CommonFindController);
let FindController = class FindController extends CommonFindController {
    constructor(editor, _contextViewService, _contextKeyService, _keybindingService, _themeService, _notificationService, _storageService, clipboardService) {
        super(editor, _contextKeyService, _storageService, clipboardService);
        this._contextViewService = _contextViewService;
        this._keybindingService = _keybindingService;
        this._themeService = _themeService;
        this._notificationService = _notificationService;
        this._widget = null;
        this._findOptionsWidget = null;
    }
    _start(opts, newState) {
        const _super = Object.create(null, {
            _start: { get: () => super._start }
        });
        return findController_awaiter(this, void 0, void 0, function* () {
            if (!this._widget) {
                this._createFindWidget();
            }
            const selection = this._editor.getSelection();
            let updateSearchScope = false;
            switch (this._editor.getOption(39 /* EditorOption.find */).autoFindInSelection) {
                case 'always':
                    updateSearchScope = true;
                    break;
                case 'never':
                    updateSearchScope = false;
                    break;
                case 'multiline': {
                    const isSelectionMultipleLine = !!selection && selection.startLineNumber !== selection.endLineNumber;
                    updateSearchScope = isSelectionMultipleLine;
                    break;
                }
                default:
                    break;
            }
            opts.updateSearchScope = opts.updateSearchScope || updateSearchScope;
            yield _super._start.call(this, opts, newState);
            if (this._widget) {
                if (opts.shouldFocus === 2 /* FindStartFocusAction.FocusReplaceInput */) {
                    this._widget.focusReplaceInput();
                }
                else if (opts.shouldFocus === 1 /* FindStartFocusAction.FocusFindInput */) {
                    this._widget.focusFindInput();
                }
            }
        });
    }
    highlightFindOptions(ignoreWhenVisible = false) {
        if (!this._widget) {
            this._createFindWidget();
        }
        if (this._state.isRevealed && !ignoreWhenVisible) {
            this._widget.highlightFindOptions();
        }
        else {
            this._findOptionsWidget.highlightFindOptions();
        }
    }
    _createFindWidget() {
        this._widget = this._register(new FindWidget(this._editor, this, this._state, this._contextViewService, this._keybindingService, this._contextKeyService, this._themeService, this._storageService, this._notificationService));
        this._findOptionsWidget = this._register(new FindOptionsWidget(this._editor, this._state, this._keybindingService));
    }
};
FindController = __decorate([
    __param(1, contextView/* IContextViewService */.u),
    __param(2, contextkey/* IContextKeyService */.i6),
    __param(3, keybinding/* IKeybindingService */.d),
    __param(4, themeService/* IThemeService */.XE),
    __param(5, notification/* INotificationService */.lT),
    __param(6, storage/* IStorageService */.Uy),
    __param(7, clipboardService/* IClipboardService */.p)
], FindController);
const StartFindAction = (0,editorExtensions/* registerMultiEditorAction */.rn)(new editorExtensions/* MultiEditorAction */.jY({
    id: FIND_IDS.StartFindAction,
    label: nls/* localize */.NC('startFindAction', "Find"),
    alias: 'Find',
    precondition: contextkey/* ContextKeyExpr */.Ao.or(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.has('editorIsOpen')),
    kbOpts: {
        kbExpr: null,
        primary: 2048 /* KeyMod.CtrlCmd */ | 36 /* KeyCode.KeyF */,
        weight: 100 /* KeybindingWeight.EditorContrib */
    },
    menuOpts: {
        menuId: actions/* MenuId */.eH.MenubarEditMenu,
        group: '3_find',
        title: nls/* localize */.NC({ key: 'miFind', comment: ['&& denotes a mnemonic'] }, "&&Find"),
        order: 1
    }
}));
StartFindAction.addImplementation(0, (accessor, editor, args) => {
    const controller = CommonFindController.get(editor);
    if (!controller) {
        return false;
    }
    return controller.start({
        forceRevealReplace: false,
        seedSearchStringFromSelection: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
        seedSearchStringFromNonEmptySelection: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
        seedSearchStringFromGlobalClipboard: editor.getOption(39 /* EditorOption.find */).globalFindClipboard,
        shouldFocus: 1 /* FindStartFocusAction.FocusFindInput */,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: editor.getOption(39 /* EditorOption.find */).loop
    });
});
const findArgDescription = {
    description: 'Open a new In-Editor Find Widget.',
    args: [{
            name: 'Open a new In-Editor Find Widget args',
            schema: {
                properties: {
                    searchString: { type: 'string' },
                    replaceString: { type: 'string' },
                    regex: { type: 'boolean' },
                    regexOverride: {
                        type: 'number',
                        description: nls/* localize */.NC('actions.find.isRegexOverride', 'Overrides "Use Regular Expression" flag.\nThe flag will not be saved for the future.\n0: Do Nothing\n1: True\n2: False')
                    },
                    wholeWord: { type: 'boolean' },
                    wholeWordOverride: {
                        type: 'number',
                        description: nls/* localize */.NC('actions.find.wholeWordOverride', 'Overrides "Match Whole Word" flag.\nThe flag will not be saved for the future.\n0: Do Nothing\n1: True\n2: False')
                    },
                    matchCase: { type: 'boolean' },
                    matchCaseOverride: {
                        type: 'number',
                        description: nls/* localize */.NC('actions.find.matchCaseOverride', 'Overrides "Math Case" flag.\nThe flag will not be saved for the future.\n0: Do Nothing\n1: True\n2: False')
                    },
                    preserveCase: { type: 'boolean' },
                    preserveCaseOverride: {
                        type: 'number',
                        description: nls/* localize */.NC('actions.find.preserveCaseOverride', 'Overrides "Preserve Case" flag.\nThe flag will not be saved for the future.\n0: Do Nothing\n1: True\n2: False')
                    },
                    findInSelection: { type: 'boolean' },
                }
            }
        }]
};
class StartFindWithArgsAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: FIND_IDS.StartFindWithArgs,
            label: nls/* localize */.NC('startFindWithArgsAction', "Find With Arguments"),
            alias: 'Find With Arguments',
            precondition: undefined,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            description: findArgDescription
        });
    }
    run(accessor, editor, args) {
        return findController_awaiter(this, void 0, void 0, function* () {
            const controller = CommonFindController.get(editor);
            if (controller) {
                const newState = args ? {
                    searchString: args.searchString,
                    replaceString: args.replaceString,
                    isReplaceRevealed: args.replaceString !== undefined,
                    isRegex: args.isRegex,
                    // isRegexOverride: args.regexOverride,
                    wholeWord: args.matchWholeWord,
                    // wholeWordOverride: args.wholeWordOverride,
                    matchCase: args.isCaseSensitive,
                    // matchCaseOverride: args.matchCaseOverride,
                    preserveCase: args.preserveCase,
                    // preserveCaseOverride: args.preserveCaseOverride,
                } : {};
                yield controller.start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: (controller.getState().searchString.length === 0) && editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
                    seedSearchStringFromNonEmptySelection: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
                    seedSearchStringFromGlobalClipboard: true,
                    shouldFocus: 1 /* FindStartFocusAction.FocusFindInput */,
                    shouldAnimate: true,
                    updateSearchScope: (args === null || args === void 0 ? void 0 : args.findInSelection) || false,
                    loop: editor.getOption(39 /* EditorOption.find */).loop
                }, newState);
                controller.setGlobalBufferTerm(controller.getState().searchString);
            }
        });
    }
}
class StartFindWithSelectionAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: FIND_IDS.StartFindWithSelection,
            label: nls/* localize */.NC('startFindWithSelectionAction', "Find With Selection"),
            alias: 'Find With Selection',
            precondition: undefined,
            kbOpts: {
                kbExpr: null,
                primary: 0,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 35 /* KeyCode.KeyE */,
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        return findController_awaiter(this, void 0, void 0, function* () {
            const controller = CommonFindController.get(editor);
            if (controller) {
                yield controller.start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: 'multiple',
                    seedSearchStringFromNonEmptySelection: false,
                    seedSearchStringFromGlobalClipboard: false,
                    shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                    shouldAnimate: true,
                    updateSearchScope: false,
                    loop: editor.getOption(39 /* EditorOption.find */).loop
                });
                controller.setGlobalBufferTerm(controller.getState().searchString);
            }
        });
    }
}
class MatchFindAction extends editorExtensions/* EditorAction */.R6 {
    run(accessor, editor) {
        return findController_awaiter(this, void 0, void 0, function* () {
            const controller = CommonFindController.get(editor);
            if (controller && !this._run(controller)) {
                yield controller.start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: (controller.getState().searchString.length === 0) && editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection !== 'never' ? 'single' : 'none',
                    seedSearchStringFromNonEmptySelection: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
                    seedSearchStringFromGlobalClipboard: true,
                    shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                    shouldAnimate: true,
                    updateSearchScope: false,
                    loop: editor.getOption(39 /* EditorOption.find */).loop
                });
                this._run(controller);
            }
        });
    }
}
class NextMatchFindAction extends MatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.NextMatchFindAction,
            label: nls/* localize */.NC('findNextMatchAction', "Find Next"),
            alias: 'Find Next',
            precondition: undefined,
            kbOpts: [{
                    kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                    primary: 61 /* KeyCode.F3 */,
                    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 37 /* KeyCode.KeyG */, secondary: [61 /* KeyCode.F3 */] },
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }, {
                    kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, CONTEXT_FIND_INPUT_FOCUSED),
                    primary: 3 /* KeyCode.Enter */,
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }]
        });
    }
    _run(controller) {
        const result = controller.moveToNextMatch();
        if (result) {
            controller.editor.pushUndoStop();
            return true;
        }
        return false;
    }
}
class PreviousMatchFindAction extends MatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.PreviousMatchFindAction,
            label: nls/* localize */.NC('findPreviousMatchAction', "Find Previous"),
            alias: 'Find Previous',
            precondition: undefined,
            kbOpts: [{
                    kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                    primary: 1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */,
                    mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 37 /* KeyCode.KeyG */, secondary: [1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */] },
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }, {
                    kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, CONTEXT_FIND_INPUT_FOCUSED),
                    primary: 1024 /* KeyMod.Shift */ | 3 /* KeyCode.Enter */,
                    weight: 100 /* KeybindingWeight.EditorContrib */
                }
            ]
        });
    }
    _run(controller) {
        return controller.moveToPrevMatch();
    }
}
class MoveToMatchFindAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: FIND_IDS.GoToMatchFindAction,
            label: nls/* localize */.NC('findMatchAction.goToMatch', "Go to Match..."),
            alias: 'Go to Match...',
            precondition: CONTEXT_FIND_WIDGET_VISIBLE
        });
        this._highlightDecorations = [];
    }
    run(accessor, editor, args) {
        const controller = CommonFindController.get(editor);
        if (!controller) {
            return;
        }
        const matchesCount = controller.getState().matchesCount;
        if (matchesCount < 1) {
            const notificationService = accessor.get(notification/* INotificationService */.lT);
            notificationService.notify({
                severity: notification/* Severity */.zb.Warning,
                message: nls/* localize */.NC('findMatchAction.noResults', "No matches. Try searching for something else.")
            });
            return;
        }
        const quickInputService = accessor.get(quickInput/* IQuickInputService */.eJ);
        const inputBox = quickInputService.createInputBox();
        inputBox.placeholder = nls/* localize */.NC('findMatchAction.inputPlaceHolder', "Type a number to go to a specific match (between 1 and {0})", matchesCount);
        const toFindMatchIndex = (value) => {
            const index = parseInt(value);
            if (isNaN(index)) {
                return undefined;
            }
            const matchCount = controller.getState().matchesCount;
            if (index > 0 && index <= matchCount) {
                return index - 1; // zero based
            }
            else if (index < 0 && index >= -matchCount) {
                return matchCount + index;
            }
            return undefined;
        };
        const updatePickerAndEditor = (value) => {
            const index = toFindMatchIndex(value);
            if (typeof index === 'number') {
                // valid
                inputBox.validationMessage = undefined;
                controller.goToMatch(index);
                const currentMatch = controller.getState().currentMatch;
                if (currentMatch) {
                    this.addDecorations(editor, currentMatch);
                }
            }
            else {
                inputBox.validationMessage = nls/* localize */.NC('findMatchAction.inputValidationMessage', "Please type a number between 1 and {0}", controller.getState().matchesCount);
                this.clearDecorations(editor);
            }
        };
        inputBox.onDidChangeValue(value => {
            updatePickerAndEditor(value);
        });
        inputBox.onDidAccept(() => {
            const index = toFindMatchIndex(inputBox.value);
            if (typeof index === 'number') {
                controller.goToMatch(index);
                inputBox.hide();
            }
            else {
                inputBox.validationMessage = nls/* localize */.NC('findMatchAction.inputValidationMessage', "Please type a number between 1 and {0}", controller.getState().matchesCount);
            }
        });
        inputBox.onDidHide(() => {
            this.clearDecorations(editor);
            inputBox.dispose();
        });
        inputBox.show();
    }
    clearDecorations(editor) {
        editor.changeDecorations(changeAccessor => {
            this._highlightDecorations = changeAccessor.deltaDecorations(this._highlightDecorations, []);
        });
    }
    addDecorations(editor, range) {
        editor.changeDecorations(changeAccessor => {
            this._highlightDecorations = changeAccessor.deltaDecorations(this._highlightDecorations, [
                {
                    range,
                    options: {
                        description: 'find-match-quick-access-range-highlight',
                        className: 'rangeHighlight',
                        isWholeLine: true
                    }
                },
                {
                    range,
                    options: {
                        description: 'find-match-quick-access-range-highlight-overview',
                        overviewRuler: {
                            color: (0,themeService/* themeColorFromId */.EN)(editorColorRegistry/* overviewRulerRangeHighlight */.m9),
                            position: model/* OverviewRulerLane */.sh.Full
                        }
                    }
                }
            ]);
        });
    }
}
class SelectionMatchFindAction extends editorExtensions/* EditorAction */.R6 {
    run(accessor, editor) {
        return findController_awaiter(this, void 0, void 0, function* () {
            const controller = CommonFindController.get(editor);
            if (!controller) {
                return;
            }
            const selectionSearchString = getSelectionSearchString(editor, 'single', false);
            if (selectionSearchString) {
                controller.setSearchString(selectionSearchString);
            }
            if (!this._run(controller)) {
                yield controller.start({
                    forceRevealReplace: false,
                    seedSearchStringFromSelection: 'none',
                    seedSearchStringFromNonEmptySelection: false,
                    seedSearchStringFromGlobalClipboard: false,
                    shouldFocus: 0 /* FindStartFocusAction.NoFocusChange */,
                    shouldAnimate: true,
                    updateSearchScope: false,
                    loop: editor.getOption(39 /* EditorOption.find */).loop
                });
                this._run(controller);
            }
        });
    }
}
class NextSelectionMatchFindAction extends SelectionMatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.NextSelectionMatchFindAction,
            label: nls/* localize */.NC('nextSelectionMatchFindAction', "Find Next Selection"),
            alias: 'Find Next Selection',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 61 /* KeyCode.F3 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(controller) {
        return controller.moveToNextMatch();
    }
}
class PreviousSelectionMatchFindAction extends SelectionMatchFindAction {
    constructor() {
        super({
            id: FIND_IDS.PreviousSelectionMatchFindAction,
            label: nls/* localize */.NC('previousSelectionMatchFindAction', "Find Previous Selection"),
            alias: 'Find Previous Selection',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 61 /* KeyCode.F3 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    _run(controller) {
        return controller.moveToPrevMatch();
    }
}
const StartFindReplaceAction = (0,editorExtensions/* registerMultiEditorAction */.rn)(new editorExtensions/* MultiEditorAction */.jY({
    id: FIND_IDS.StartFindReplaceAction,
    label: nls/* localize */.NC('startReplace', "Replace"),
    alias: 'Replace',
    precondition: contextkey/* ContextKeyExpr */.Ao.or(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.has('editorIsOpen')),
    kbOpts: {
        kbExpr: null,
        primary: 2048 /* KeyMod.CtrlCmd */ | 38 /* KeyCode.KeyH */,
        mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 36 /* KeyCode.KeyF */ },
        weight: 100 /* KeybindingWeight.EditorContrib */
    },
    menuOpts: {
        menuId: actions/* MenuId */.eH.MenubarEditMenu,
        group: '3_find',
        title: nls/* localize */.NC({ key: 'miReplace', comment: ['&& denotes a mnemonic'] }, "&&Replace"),
        order: 2
    }
}));
StartFindReplaceAction.addImplementation(0, (accessor, editor, args) => {
    if (!editor.hasModel() || editor.getOption(88 /* EditorOption.readOnly */)) {
        return false;
    }
    const controller = CommonFindController.get(editor);
    if (!controller) {
        return false;
    }
    const currentSelection = editor.getSelection();
    const findInputFocused = controller.isFindInputFocused();
    // we only seed search string from selection when the current selection is single line and not empty,
    // + the find input is not focused
    const seedSearchStringFromSelection = !currentSelection.isEmpty()
        && currentSelection.startLineNumber === currentSelection.endLineNumber
        && (editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection !== 'never')
        && !findInputFocused;
    /*
    * if the existing search string in find widget is empty and we don't seed search string from selection, it means the Find Input is still empty, so we should focus the Find Input instead of Replace Input.

    * findInputFocused true -> seedSearchStringFromSelection false, FocusReplaceInput
    * findInputFocused false, seedSearchStringFromSelection true FocusReplaceInput
    * findInputFocused false seedSearchStringFromSelection false FocusFindInput
    */
    const shouldFocus = (findInputFocused || seedSearchStringFromSelection) ?
        2 /* FindStartFocusAction.FocusReplaceInput */ : 1 /* FindStartFocusAction.FocusFindInput */;
    return controller.start({
        forceRevealReplace: true,
        seedSearchStringFromSelection: seedSearchStringFromSelection ? 'single' : 'none',
        seedSearchStringFromNonEmptySelection: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection === 'selection',
        seedSearchStringFromGlobalClipboard: editor.getOption(39 /* EditorOption.find */).seedSearchStringFromSelection !== 'never',
        shouldFocus: shouldFocus,
        shouldAnimate: true,
        updateSearchScope: false,
        loop: editor.getOption(39 /* EditorOption.find */).loop
    });
});
(0,editorExtensions/* registerEditorContribution */._K)(CommonFindController.ID, FindController, 0 /* EditorContributionInstantiation.Eager */); // eager because it uses `saveViewState`/`restoreViewState`
(0,editorExtensions/* registerEditorAction */.Qr)(StartFindWithArgsAction);
(0,editorExtensions/* registerEditorAction */.Qr)(StartFindWithSelectionAction);
(0,editorExtensions/* registerEditorAction */.Qr)(NextMatchFindAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PreviousMatchFindAction);
(0,editorExtensions/* registerEditorAction */.Qr)(MoveToMatchFindAction);
(0,editorExtensions/* registerEditorAction */.Qr)(NextSelectionMatchFindAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PreviousSelectionMatchFindAction);
const FindCommand = editorExtensions/* EditorCommand */._l.bindToContribution(CommonFindController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.CloseFindWidgetCommand,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.closeFindWidget(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.not('isComposing')),
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ToggleCaseSensitiveCommand,
    precondition: undefined,
    handler: x => x.toggleCaseSensitive(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: ToggleCaseSensitiveKeybinding.primary,
        mac: ToggleCaseSensitiveKeybinding.mac,
        win: ToggleCaseSensitiveKeybinding.win,
        linux: ToggleCaseSensitiveKeybinding.linux
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ToggleWholeWordCommand,
    precondition: undefined,
    handler: x => x.toggleWholeWords(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: ToggleWholeWordKeybinding.primary,
        mac: ToggleWholeWordKeybinding.mac,
        win: ToggleWholeWordKeybinding.win,
        linux: ToggleWholeWordKeybinding.linux
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ToggleRegexCommand,
    precondition: undefined,
    handler: x => x.toggleRegex(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: ToggleRegexKeybinding.primary,
        mac: ToggleRegexKeybinding.mac,
        win: ToggleRegexKeybinding.win,
        linux: ToggleRegexKeybinding.linux
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ToggleSearchScopeCommand,
    precondition: undefined,
    handler: x => x.toggleSearchScope(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: ToggleSearchScopeKeybinding.primary,
        mac: ToggleSearchScopeKeybinding.mac,
        win: ToggleSearchScopeKeybinding.win,
        linux: ToggleSearchScopeKeybinding.linux
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.TogglePreserveCaseCommand,
    precondition: undefined,
    handler: x => x.togglePreserveCase(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: TogglePreserveCaseKeybinding.primary,
        mac: TogglePreserveCaseKeybinding.mac,
        win: TogglePreserveCaseKeybinding.win,
        linux: TogglePreserveCaseKeybinding.linux
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ReplaceOneAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replace(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 22 /* KeyCode.Digit1 */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ReplaceOneAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replace(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, CONTEXT_REPLACE_INPUT_FOCUSED),
        primary: 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ReplaceAllAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replaceAll(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 2048 /* KeyMod.CtrlCmd */ | 512 /* KeyMod.Alt */ | 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.ReplaceAllAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.replaceAll(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, CONTEXT_REPLACE_INPUT_FOCUSED),
        primary: undefined,
        mac: {
            primary: 2048 /* KeyMod.CtrlCmd */ | 3 /* KeyCode.Enter */,
        }
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new FindCommand({
    id: FIND_IDS.SelectAllMatchesAction,
    precondition: CONTEXT_FIND_WIDGET_VISIBLE,
    handler: x => x.selectAllMatches(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 5,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 512 /* KeyMod.Alt */ | 3 /* KeyCode.Enter */
    }
}));


/***/ })

}]);