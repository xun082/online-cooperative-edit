"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-5d8271ea"],{

/***/ 90034:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/*\n\tKeeping name short for faster parsing.\n\tcslr = core selections layer rendering (div)\n*/\n.monaco-editor .lines-content .cslr {\n\tposition: absolute;\n}\n\n.monaco-editor .focused .selected-text {\n\tbackground-color: var(--vscode-editor-selectionBackground);\n}\n\n.monaco-editor .selected-text {\n\tbackground-color: var(--vscode-editor-inactiveSelectionBackground);\n}\n\n.monaco-editor\t\t\t.top-left-radius\t\t{ border-top-left-radius: 3px; }\n.monaco-editor\t\t\t.bottom-left-radius\t\t{ border-bottom-left-radius: 3px; }\n.monaco-editor\t\t\t.top-right-radius\t\t{ border-top-right-radius: 3px; }\n.monaco-editor\t\t\t.bottom-right-radius\t{ border-bottom-right-radius: 3px; }\n\n.monaco-editor.hc-black .top-left-radius\t\t{ border-top-left-radius: 0; }\n.monaco-editor.hc-black .bottom-left-radius\t\t{ border-bottom-left-radius: 0; }\n.monaco-editor.hc-black .top-right-radius\t\t{ border-top-right-radius: 0; }\n.monaco-editor.hc-black .bottom-right-radius\t{ border-bottom-right-radius: 0; }\n\n.monaco-editor.hc-light .top-left-radius\t\t{ border-top-left-radius: 0; }\n.monaco-editor.hc-light .bottom-left-radius\t\t{ border-bottom-left-radius: 0; }\n.monaco-editor.hc-light .top-right-radius\t\t{ border-top-right-radius: 0; }\n.monaco-editor.hc-light .bottom-right-radius\t{ border-bottom-right-radius: 0; }\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 61620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n.monaco-editor .cursors-layer {\n\tposition: absolute;\n\ttop: 0;\n}\n\n.monaco-editor .cursors-layer > .cursor {\n\tposition: absolute;\n\toverflow: hidden;\n\tbox-sizing: border-box;\n}\n\n/* -- smooth-caret-animation -- */\n.monaco-editor .cursors-layer.cursor-smooth-caret-animation > .cursor {\n\ttransition: all 80ms;\n}\n\n/* -- block-outline-style -- */\n.monaco-editor .cursors-layer.cursor-block-outline-style > .cursor {\n\tbackground: transparent !important;\n\tborder-style: solid;\n\tborder-width: 1px;\n}\n\n/* -- underline-style -- */\n.monaco-editor .cursors-layer.cursor-underline-style > .cursor {\n\tborder-bottom-width: 2px;\n\tborder-bottom-style: solid;\n\tbackground: transparent !important;\n}\n\n/* -- underline-thin-style -- */\n.monaco-editor .cursors-layer.cursor-underline-thin-style > .cursor {\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n\tbackground: transparent !important;\n}\n\n@keyframes monaco-cursor-smooth {\n\t0%,\n\t20% {\n\t\topacity: 1;\n\t}\n\t60%,\n\t100% {\n\t\topacity: 0;\n\t}\n}\n\n@keyframes monaco-cursor-phase {\n\t0%,\n\t20% {\n\t\topacity: 1;\n\t}\n\t90%,\n\t100% {\n\t\topacity: 0;\n\t}\n}\n\n@keyframes monaco-cursor-expand {\n\t0%,\n\t20% {\n\t\ttransform: scaleY(1);\n\t}\n\t80%,\n\t100% {\n\t\ttransform: scaleY(0);\n\t}\n}\n\n.cursor-smooth {\n\tanimation: monaco-cursor-smooth 0.5s ease-in-out 0s 20 alternate;\n}\n\n.cursor-phase {\n\tanimation: monaco-cursor-phase 0.5s ease-in-out 0s 20 alternate;\n}\n\n.cursor-expand > .cursor {\n\tanimation: monaco-cursor-expand 0.5s ease-in-out 0s 20 alternate;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 45766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .mwh {\n\tposition: absolute;\n\tcolor: var(--vscode-editorWhitespace-foreground) !important;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: function() { return /* binding */ SelectionsOverlay; }
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections.css
var selections = __webpack_require__(90034);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(selections/* default */.Z, options);




       /* harmony default export */ var selections_selections = (selections/* default */.Z && selections/* default */.Z.locals ? selections/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay.js
var dynamicViewOverlay = __webpack_require__(95438);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/selections/selections.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




class HorizontalRangeWithStyle {
    constructor(other) {
        this.left = other.left;
        this.width = other.width;
        this.startStyle = null;
        this.endStyle = null;
    }
}
class LineVisibleRangesWithStyle {
    constructor(lineNumber, ranges) {
        this.lineNumber = lineNumber;
        this.ranges = ranges;
    }
}
function toStyledRange(item) {
    return new HorizontalRangeWithStyle(item);
}
function toStyled(item) {
    return new LineVisibleRangesWithStyle(item.lineNumber, item.ranges.map(toStyledRange));
}
class SelectionsOverlay extends dynamicViewOverlay/* DynamicViewOverlay */.i {
    constructor(context) {
        super();
        this._previousFrameVisibleRangesWithStyle = [];
        this._context = context;
        const options = this._context.configuration.options;
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._roundedSelection = options.get(97 /* EditorOption.roundedSelection */);
        this._typicalHalfwidthCharacterWidth = options.get(48 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        this._selections = [];
        this._renderResult = null;
        this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this);
        this._renderResult = null;
        super.dispose();
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._roundedSelection = options.get(97 /* EditorOption.roundedSelection */);
        this._typicalHalfwidthCharacterWidth = options.get(48 /* EditorOption.fontInfo */).typicalHalfwidthCharacterWidth;
        return true;
    }
    onCursorStateChanged(e) {
        this._selections = e.selections.slice(0);
        return true;
    }
    onDecorationsChanged(e) {
        // true for inline decorations that can end up relayouting text
        return true; //e.inlineDecorationsChanged;
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
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    _visibleRangesHaveGaps(linesVisibleRanges) {
        for (let i = 0, len = linesVisibleRanges.length; i < len; i++) {
            const lineVisibleRanges = linesVisibleRanges[i];
            if (lineVisibleRanges.ranges.length > 1) {
                // There are two ranges on the same line
                return true;
            }
        }
        return false;
    }
    _enrichVisibleRangesWithStyle(viewport, linesVisibleRanges, previousFrame) {
        const epsilon = this._typicalHalfwidthCharacterWidth / 4;
        let previousFrameTop = null;
        let previousFrameBottom = null;
        if (previousFrame && previousFrame.length > 0 && linesVisibleRanges.length > 0) {
            const topLineNumber = linesVisibleRanges[0].lineNumber;
            if (topLineNumber === viewport.startLineNumber) {
                for (let i = 0; !previousFrameTop && i < previousFrame.length; i++) {
                    if (previousFrame[i].lineNumber === topLineNumber) {
                        previousFrameTop = previousFrame[i].ranges[0];
                    }
                }
            }
            const bottomLineNumber = linesVisibleRanges[linesVisibleRanges.length - 1].lineNumber;
            if (bottomLineNumber === viewport.endLineNumber) {
                for (let i = previousFrame.length - 1; !previousFrameBottom && i >= 0; i--) {
                    if (previousFrame[i].lineNumber === bottomLineNumber) {
                        previousFrameBottom = previousFrame[i].ranges[0];
                    }
                }
            }
            if (previousFrameTop && !previousFrameTop.startStyle) {
                previousFrameTop = null;
            }
            if (previousFrameBottom && !previousFrameBottom.startStyle) {
                previousFrameBottom = null;
            }
        }
        for (let i = 0, len = linesVisibleRanges.length; i < len; i++) {
            // We know for a fact that there is precisely one range on each line
            const curLineRange = linesVisibleRanges[i].ranges[0];
            const curLeft = curLineRange.left;
            const curRight = curLineRange.left + curLineRange.width;
            const startStyle = {
                top: 0 /* CornerStyle.EXTERN */,
                bottom: 0 /* CornerStyle.EXTERN */
            };
            const endStyle = {
                top: 0 /* CornerStyle.EXTERN */,
                bottom: 0 /* CornerStyle.EXTERN */
            };
            if (i > 0) {
                // Look above
                const prevLeft = linesVisibleRanges[i - 1].ranges[0].left;
                const prevRight = linesVisibleRanges[i - 1].ranges[0].left + linesVisibleRanges[i - 1].ranges[0].width;
                if (abs(curLeft - prevLeft) < epsilon) {
                    startStyle.top = 2 /* CornerStyle.FLAT */;
                }
                else if (curLeft > prevLeft) {
                    startStyle.top = 1 /* CornerStyle.INTERN */;
                }
                if (abs(curRight - prevRight) < epsilon) {
                    endStyle.top = 2 /* CornerStyle.FLAT */;
                }
                else if (prevLeft < curRight && curRight < prevRight) {
                    endStyle.top = 1 /* CornerStyle.INTERN */;
                }
            }
            else if (previousFrameTop) {
                // Accept some hiccups near the viewport edges to save on repaints
                startStyle.top = previousFrameTop.startStyle.top;
                endStyle.top = previousFrameTop.endStyle.top;
            }
            if (i + 1 < len) {
                // Look below
                const nextLeft = linesVisibleRanges[i + 1].ranges[0].left;
                const nextRight = linesVisibleRanges[i + 1].ranges[0].left + linesVisibleRanges[i + 1].ranges[0].width;
                if (abs(curLeft - nextLeft) < epsilon) {
                    startStyle.bottom = 2 /* CornerStyle.FLAT */;
                }
                else if (nextLeft < curLeft && curLeft < nextRight) {
                    startStyle.bottom = 1 /* CornerStyle.INTERN */;
                }
                if (abs(curRight - nextRight) < epsilon) {
                    endStyle.bottom = 2 /* CornerStyle.FLAT */;
                }
                else if (curRight < nextRight) {
                    endStyle.bottom = 1 /* CornerStyle.INTERN */;
                }
            }
            else if (previousFrameBottom) {
                // Accept some hiccups near the viewport edges to save on repaints
                startStyle.bottom = previousFrameBottom.startStyle.bottom;
                endStyle.bottom = previousFrameBottom.endStyle.bottom;
            }
            curLineRange.startStyle = startStyle;
            curLineRange.endStyle = endStyle;
        }
    }
    _getVisibleRangesWithStyle(selection, ctx, previousFrame) {
        const _linesVisibleRanges = ctx.linesVisibleRangesForRange(selection, true) || [];
        const linesVisibleRanges = _linesVisibleRanges.map(toStyled);
        const visibleRangesHaveGaps = this._visibleRangesHaveGaps(linesVisibleRanges);
        if (!visibleRangesHaveGaps && this._roundedSelection) {
            this._enrichVisibleRangesWithStyle(ctx.visibleRange, linesVisibleRanges, previousFrame);
        }
        // The visible ranges are sorted TOP-BOTTOM and LEFT-RIGHT
        return linesVisibleRanges;
    }
    _createSelectionPiece(top, height, className, left, width) {
        return ('<div class="cslr '
            + className
            + '" style="top:'
            + top.toString()
            + 'px;left:'
            + left.toString()
            + 'px;width:'
            + width.toString()
            + 'px;height:'
            + height
            + 'px;"></div>');
    }
    _actualRenderOneSelection(output2, visibleStartLineNumber, hasMultipleSelections, visibleRanges) {
        if (visibleRanges.length === 0) {
            return;
        }
        const visibleRangesHaveStyle = !!visibleRanges[0].ranges[0].startStyle;
        const fullLineHeight = (this._lineHeight).toString();
        const reducedLineHeight = (this._lineHeight - 1).toString();
        const firstLineNumber = visibleRanges[0].lineNumber;
        const lastLineNumber = visibleRanges[visibleRanges.length - 1].lineNumber;
        for (let i = 0, len = visibleRanges.length; i < len; i++) {
            const lineVisibleRanges = visibleRanges[i];
            const lineNumber = lineVisibleRanges.lineNumber;
            const lineIndex = lineNumber - visibleStartLineNumber;
            const lineHeight = hasMultipleSelections ? (lineNumber === lastLineNumber || lineNumber === firstLineNumber ? reducedLineHeight : fullLineHeight) : fullLineHeight;
            const top = hasMultipleSelections ? (lineNumber === firstLineNumber ? 1 : 0) : 0;
            let innerCornerOutput = '';
            let restOfSelectionOutput = '';
            for (let j = 0, lenJ = lineVisibleRanges.ranges.length; j < lenJ; j++) {
                const visibleRange = lineVisibleRanges.ranges[j];
                if (visibleRangesHaveStyle) {
                    const startStyle = visibleRange.startStyle;
                    const endStyle = visibleRange.endStyle;
                    if (startStyle.top === 1 /* CornerStyle.INTERN */ || startStyle.bottom === 1 /* CornerStyle.INTERN */) {
                        // Reverse rounded corner to the left
                        // First comes the selection (blue layer)
                        innerCornerOutput += this._createSelectionPiece(top, lineHeight, SelectionsOverlay.SELECTION_CLASS_NAME, visibleRange.left - SelectionsOverlay.ROUNDED_PIECE_WIDTH, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                        // Second comes the background (white layer) with inverse border radius
                        let className = SelectionsOverlay.EDITOR_BACKGROUND_CLASS_NAME;
                        if (startStyle.top === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_TOP_RIGHT;
                        }
                        if (startStyle.bottom === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_RIGHT;
                        }
                        innerCornerOutput += this._createSelectionPiece(top, lineHeight, className, visibleRange.left - SelectionsOverlay.ROUNDED_PIECE_WIDTH, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                    }
                    if (endStyle.top === 1 /* CornerStyle.INTERN */ || endStyle.bottom === 1 /* CornerStyle.INTERN */) {
                        // Reverse rounded corner to the right
                        // First comes the selection (blue layer)
                        innerCornerOutput += this._createSelectionPiece(top, lineHeight, SelectionsOverlay.SELECTION_CLASS_NAME, visibleRange.left + visibleRange.width, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                        // Second comes the background (white layer) with inverse border radius
                        let className = SelectionsOverlay.EDITOR_BACKGROUND_CLASS_NAME;
                        if (endStyle.top === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_TOP_LEFT;
                        }
                        if (endStyle.bottom === 1 /* CornerStyle.INTERN */) {
                            className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_LEFT;
                        }
                        innerCornerOutput += this._createSelectionPiece(top, lineHeight, className, visibleRange.left + visibleRange.width, SelectionsOverlay.ROUNDED_PIECE_WIDTH);
                    }
                }
                let className = SelectionsOverlay.SELECTION_CLASS_NAME;
                if (visibleRangesHaveStyle) {
                    const startStyle = visibleRange.startStyle;
                    const endStyle = visibleRange.endStyle;
                    if (startStyle.top === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_TOP_LEFT;
                    }
                    if (startStyle.bottom === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_LEFT;
                    }
                    if (endStyle.top === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_TOP_RIGHT;
                    }
                    if (endStyle.bottom === 0 /* CornerStyle.EXTERN */) {
                        className += ' ' + SelectionsOverlay.SELECTION_BOTTOM_RIGHT;
                    }
                }
                restOfSelectionOutput += this._createSelectionPiece(top, lineHeight, className, visibleRange.left, visibleRange.width);
            }
            output2[lineIndex][0] += innerCornerOutput;
            output2[lineIndex][1] += restOfSelectionOutput;
        }
    }
    prepareRender(ctx) {
        // Build HTML for inner corners separate from HTML for the rest of selections,
        // as the inner corner HTML can interfere with that of other selections.
        // In final render, make sure to place the inner corner HTML before the rest of selection HTML. See issue #77777.
        const output = [];
        const visibleStartLineNumber = ctx.visibleRange.startLineNumber;
        const visibleEndLineNumber = ctx.visibleRange.endLineNumber;
        for (let lineNumber = visibleStartLineNumber; lineNumber <= visibleEndLineNumber; lineNumber++) {
            const lineIndex = lineNumber - visibleStartLineNumber;
            output[lineIndex] = ['', ''];
        }
        const thisFrameVisibleRangesWithStyle = [];
        for (let i = 0, len = this._selections.length; i < len; i++) {
            const selection = this._selections[i];
            if (selection.isEmpty()) {
                thisFrameVisibleRangesWithStyle[i] = null;
                continue;
            }
            const visibleRangesWithStyle = this._getVisibleRangesWithStyle(selection, ctx, this._previousFrameVisibleRangesWithStyle[i]);
            thisFrameVisibleRangesWithStyle[i] = visibleRangesWithStyle;
            this._actualRenderOneSelection(output, visibleStartLineNumber, this._selections.length > 1, visibleRangesWithStyle);
        }
        this._previousFrameVisibleRangesWithStyle = thisFrameVisibleRangesWithStyle;
        this._renderResult = output.map(([internalCorners, restOfSelection]) => internalCorners + restOfSelection);
    }
    render(startLineNumber, lineNumber) {
        if (!this._renderResult) {
            return '';
        }
        const lineIndex = lineNumber - startLineNumber;
        if (lineIndex < 0 || lineIndex >= this._renderResult.length) {
            return '';
        }
        return this._renderResult[lineIndex];
    }
}
SelectionsOverlay.SELECTION_CLASS_NAME = 'selected-text';
SelectionsOverlay.SELECTION_TOP_LEFT = 'top-left-radius';
SelectionsOverlay.SELECTION_BOTTOM_LEFT = 'bottom-left-radius';
SelectionsOverlay.SELECTION_TOP_RIGHT = 'top-right-radius';
SelectionsOverlay.SELECTION_BOTTOM_RIGHT = 'bottom-right-radius';
SelectionsOverlay.EDITOR_BACKGROUND_CLASS_NAME = 'monaco-editor-background';
SelectionsOverlay.ROUNDED_PIECE_WIDTH = 10;
(0,themeService/* registerThemingParticipant */.Ic)((theme, collector) => {
    const editorSelectionForegroundColor = theme.getColor(colorRegistry/* editorSelectionForeground */.yb5);
    if (editorSelectionForegroundColor && !editorSelectionForegroundColor.isTransparent()) {
        collector.addRule(`.monaco-editor .view-line span.inline-selected-text { color: ${editorSelectionForegroundColor}; }`);
    }
});
function abs(n) {
    return n < 0 ? -n : n;
}


/***/ }),

/***/ 32733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ ViewCursors; }
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors.css
var viewCursors = __webpack_require__(61620);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(viewCursors/* default */.Z, options);




       /* harmony default export */ var viewCursors_viewCursors = (viewCursors/* default */.Z && viewCursors/* default */.Z.locals ? viewCursors/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/fastDomNode.js
var fastDomNode = __webpack_require__(30344);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/view/viewPart.js
var viewPart = __webpack_require__(23813);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js
var domFontInfo = __webpack_require__(86778);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(75117);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/mouseCursor/mouseCursor.js + 1 modules
var mouseCursor = __webpack_require__(85490);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursor.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








class ViewCursorRenderData {
    constructor(top, left, paddingLeft, width, height, textContent, textContentClassName) {
        this.top = top;
        this.left = left;
        this.paddingLeft = paddingLeft;
        this.width = width;
        this.height = height;
        this.textContent = textContent;
        this.textContentClassName = textContentClassName;
    }
}
class ViewCursor {
    constructor(context) {
        this._context = context;
        const options = this._context.configuration.options;
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        this._cursorStyle = options.get(26 /* EditorOption.cursorStyle */);
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        this._lineCursorWidth = Math.min(options.get(29 /* EditorOption.cursorWidth */), this._typicalHalfwidthCharacterWidth);
        this._isVisible = true;
        // Create the dom node
        this._domNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
        this._domNode.setClassName(`cursor ${mouseCursor/* MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */.S}`);
        this._domNode.setHeight(this._lineHeight);
        this._domNode.setTop(0);
        this._domNode.setLeft(0);
        (0,domFontInfo/* applyFontInfo */.N)(this._domNode, fontInfo);
        this._domNode.setDisplay('none');
        this._position = new position/* Position */.L(1, 1);
        this._lastRenderedContent = '';
        this._renderData = null;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._position;
    }
    show() {
        if (!this._isVisible) {
            this._domNode.setVisibility('inherit');
            this._isVisible = true;
        }
    }
    hide() {
        if (this._isVisible) {
            this._domNode.setVisibility('hidden');
            this._isVisible = false;
        }
    }
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        this._cursorStyle = options.get(26 /* EditorOption.cursorStyle */);
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        this._lineCursorWidth = Math.min(options.get(29 /* EditorOption.cursorWidth */), this._typicalHalfwidthCharacterWidth);
        (0,domFontInfo/* applyFontInfo */.N)(this._domNode, fontInfo);
        return true;
    }
    onCursorPositionChanged(position, pauseAnimation) {
        if (pauseAnimation) {
            this._domNode.domNode.style.transitionProperty = 'none';
        }
        else {
            this._domNode.domNode.style.transitionProperty = '';
        }
        this._position = position;
        return true;
    }
    /**
     * If `this._position` is inside a grapheme, returns the position where the grapheme starts.
     * Also returns the next grapheme.
     */
    _getGraphemeAwarePosition() {
        const { lineNumber, column } = this._position;
        const lineContent = this._context.viewModel.getLineContent(lineNumber);
        const [startOffset, endOffset] = strings/* getCharContainingOffset */.J_(lineContent, column - 1);
        return [new position/* Position */.L(lineNumber, startOffset + 1), lineContent.substring(startOffset, endOffset)];
    }
    _prepareRender(ctx) {
        let textContent = '';
        let textContentClassName = '';
        const [position, nextGrapheme] = this._getGraphemeAwarePosition();
        if (this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.Line || this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.LineThin) {
            const visibleRange = ctx.visibleRangeForPosition(position);
            if (!visibleRange || visibleRange.outsideRenderedLine) {
                // Outside viewport
                return null;
            }
            let width;
            if (this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.Line) {
                width = dom/* computeScreenAwareSize */.Uh(this._lineCursorWidth > 0 ? this._lineCursorWidth : 2);
                if (width > 2) {
                    textContent = nextGrapheme;
                    textContentClassName = this._getTokenClassName(position);
                }
            }
            else {
                width = dom/* computeScreenAwareSize */.Uh(1);
            }
            let left = visibleRange.left;
            let paddingLeft = 0;
            if (width >= 2 && left >= 1) {
                // shift the cursor a bit between the characters
                paddingLeft = 1;
                left -= paddingLeft;
            }
            const top = ctx.getVerticalOffsetForLineNumber(position.lineNumber) - ctx.bigNumbersDelta;
            return new ViewCursorRenderData(top, left, paddingLeft, width, this._lineHeight, textContent, textContentClassName);
        }
        const visibleRangeForCharacter = ctx.linesVisibleRangesForRange(new core_range/* Range */.e(position.lineNumber, position.column, position.lineNumber, position.column + nextGrapheme.length), false);
        if (!visibleRangeForCharacter || visibleRangeForCharacter.length === 0) {
            // Outside viewport
            return null;
        }
        const firstVisibleRangeForCharacter = visibleRangeForCharacter[0];
        if (firstVisibleRangeForCharacter.outsideRenderedLine || firstVisibleRangeForCharacter.ranges.length === 0) {
            // Outside viewport
            return null;
        }
        const range = firstVisibleRangeForCharacter.ranges[0];
        const width = (nextGrapheme === '\t'
            ? this._typicalHalfwidthCharacterWidth
            : (range.width < 1
                ? this._typicalHalfwidthCharacterWidth
                : range.width));
        if (this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.Block) {
            textContent = nextGrapheme;
            textContentClassName = this._getTokenClassName(position);
        }
        let top = ctx.getVerticalOffsetForLineNumber(position.lineNumber) - ctx.bigNumbersDelta;
        let height = this._lineHeight;
        // Underline might interfere with clicking
        if (this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.Underline || this._cursorStyle === editorOptions/* TextEditorCursorStyle */.d2.UnderlineThin) {
            top += this._lineHeight - 2;
            height = 2;
        }
        return new ViewCursorRenderData(top, range.left, 0, width, height, textContent, textContentClassName);
    }
    _getTokenClassName(position) {
        const lineData = this._context.viewModel.getViewLineData(position.lineNumber);
        const tokenIndex = lineData.tokens.findTokenIndexAtOffset(position.column - 1);
        return lineData.tokens.getClassName(tokenIndex);
    }
    prepareRender(ctx) {
        this._renderData = this._prepareRender(ctx);
    }
    render(ctx) {
        if (!this._renderData) {
            this._domNode.setDisplay('none');
            return null;
        }
        if (this._lastRenderedContent !== this._renderData.textContent) {
            this._lastRenderedContent = this._renderData.textContent;
            this._domNode.domNode.textContent = this._lastRenderedContent;
        }
        this._domNode.setClassName(`cursor ${mouseCursor/* MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */.S} ${this._renderData.textContentClassName}`);
        this._domNode.setDisplay('block');
        this._domNode.setTop(this._renderData.top);
        this._domNode.setLeft(this._renderData.left);
        this._domNode.setPaddingLeft(this._renderData.paddingLeft);
        this._domNode.setWidth(this._renderData.width);
        this._domNode.setLineHeight(this._renderData.height);
        this._domNode.setHeight(this._renderData.height);
        return {
            domNode: this._domNode.domNode,
            position: this._position,
            contentLeft: this._renderData.left,
            height: this._renderData.height,
            width: 2
        };
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/editorColorRegistry.js
var editorColorRegistry = __webpack_require__(66050);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/theme.js
var common_theme = __webpack_require__(4393);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/viewCursors/viewCursors.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









class ViewCursors extends viewPart/* ViewPart */.E {
    constructor(context) {
        super(context);
        const options = this._context.configuration.options;
        this._readOnly = options.get(88 /* EditorOption.readOnly */);
        this._cursorBlinking = options.get(24 /* EditorOption.cursorBlinking */);
        this._cursorStyle = options.get(26 /* EditorOption.cursorStyle */);
        this._cursorSmoothCaretAnimation = options.get(25 /* EditorOption.cursorSmoothCaretAnimation */);
        this._selectionIsEmpty = true;
        this._isComposingInput = false;
        this._isVisible = false;
        this._primaryCursor = new ViewCursor(this._context);
        this._secondaryCursors = [];
        this._renderData = [];
        this._domNode = (0,fastDomNode/* createFastDomNode */.X)(document.createElement('div'));
        this._domNode.setAttribute('role', 'presentation');
        this._domNode.setAttribute('aria-hidden', 'true');
        this._updateDomClassName();
        this._domNode.appendChild(this._primaryCursor.getDomNode());
        this._startCursorBlinkAnimation = new common_async/* TimeoutTimer */._F();
        this._cursorFlatBlinkInterval = new common_async/* IntervalTimer */.zh();
        this._blinkingEnabled = false;
        this._editorHasFocus = false;
        this._updateBlinking();
    }
    dispose() {
        super.dispose();
        this._startCursorBlinkAnimation.dispose();
        this._cursorFlatBlinkInterval.dispose();
    }
    getDomNode() {
        return this._domNode;
    }
    // --- begin event handlers
    onCompositionStart(e) {
        this._isComposingInput = true;
        this._updateBlinking();
        return true;
    }
    onCompositionEnd(e) {
        this._isComposingInput = false;
        this._updateBlinking();
        return true;
    }
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        this._readOnly = options.get(88 /* EditorOption.readOnly */);
        this._cursorBlinking = options.get(24 /* EditorOption.cursorBlinking */);
        this._cursorStyle = options.get(26 /* EditorOption.cursorStyle */);
        this._cursorSmoothCaretAnimation = options.get(25 /* EditorOption.cursorSmoothCaretAnimation */);
        this._updateBlinking();
        this._updateDomClassName();
        this._primaryCursor.onConfigurationChanged(e);
        for (let i = 0, len = this._secondaryCursors.length; i < len; i++) {
            this._secondaryCursors[i].onConfigurationChanged(e);
        }
        return true;
    }
    _onCursorPositionChanged(position, secondaryPositions, reason) {
        const pauseAnimation = (this._secondaryCursors.length !== secondaryPositions.length
            || (this._cursorSmoothCaretAnimation === 'explicit' && reason !== 3 /* CursorChangeReason.Explicit */));
        this._primaryCursor.onCursorPositionChanged(position, pauseAnimation);
        this._updateBlinking();
        if (this._secondaryCursors.length < secondaryPositions.length) {
            // Create new cursors
            const addCnt = secondaryPositions.length - this._secondaryCursors.length;
            for (let i = 0; i < addCnt; i++) {
                const newCursor = new ViewCursor(this._context);
                this._domNode.domNode.insertBefore(newCursor.getDomNode().domNode, this._primaryCursor.getDomNode().domNode.nextSibling);
                this._secondaryCursors.push(newCursor);
            }
        }
        else if (this._secondaryCursors.length > secondaryPositions.length) {
            // Remove some cursors
            const removeCnt = this._secondaryCursors.length - secondaryPositions.length;
            for (let i = 0; i < removeCnt; i++) {
                this._domNode.removeChild(this._secondaryCursors[0].getDomNode());
                this._secondaryCursors.splice(0, 1);
            }
        }
        for (let i = 0; i < secondaryPositions.length; i++) {
            this._secondaryCursors[i].onCursorPositionChanged(secondaryPositions[i], pauseAnimation);
        }
    }
    onCursorStateChanged(e) {
        const positions = [];
        for (let i = 0, len = e.selections.length; i < len; i++) {
            positions[i] = e.selections[i].getPosition();
        }
        this._onCursorPositionChanged(positions[0], positions.slice(1), e.reason);
        const selectionIsEmpty = e.selections[0].isEmpty();
        if (this._selectionIsEmpty !== selectionIsEmpty) {
            this._selectionIsEmpty = selectionIsEmpty;
            this._updateDomClassName();
        }
        return true;
    }
    onDecorationsChanged(e) {
        // true for inline decorations that can end up relayouting text
        return true;
    }
    onFlushed(e) {
        return true;
    }
    onFocusChanged(e) {
        this._editorHasFocus = e.isFocused;
        this._updateBlinking();
        return false;
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
        return true;
    }
    onTokensChanged(e) {
        const shouldRender = (position) => {
            for (let i = 0, len = e.ranges.length; i < len; i++) {
                if (e.ranges[i].fromLineNumber <= position.lineNumber && position.lineNumber <= e.ranges[i].toLineNumber) {
                    return true;
                }
            }
            return false;
        };
        if (shouldRender(this._primaryCursor.getPosition())) {
            return true;
        }
        for (const secondaryCursor of this._secondaryCursors) {
            if (shouldRender(secondaryCursor.getPosition())) {
                return true;
            }
        }
        return false;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    // ---- blinking logic
    _getCursorBlinking() {
        if (this._isComposingInput) {
            // avoid double cursors
            return 0 /* TextEditorCursorBlinkingStyle.Hidden */;
        }
        if (!this._editorHasFocus) {
            return 0 /* TextEditorCursorBlinkingStyle.Hidden */;
        }
        if (this._readOnly) {
            return 5 /* TextEditorCursorBlinkingStyle.Solid */;
        }
        return this._cursorBlinking;
    }
    _updateBlinking() {
        this._startCursorBlinkAnimation.cancel();
        this._cursorFlatBlinkInterval.cancel();
        const blinkingStyle = this._getCursorBlinking();
        // hidden and solid are special as they involve no animations
        const isHidden = (blinkingStyle === 0 /* TextEditorCursorBlinkingStyle.Hidden */);
        const isSolid = (blinkingStyle === 5 /* TextEditorCursorBlinkingStyle.Solid */);
        if (isHidden) {
            this._hide();
        }
        else {
            this._show();
        }
        this._blinkingEnabled = false;
        this._updateDomClassName();
        if (!isHidden && !isSolid) {
            if (blinkingStyle === 1 /* TextEditorCursorBlinkingStyle.Blink */) {
                // flat blinking is handled by JavaScript to save battery life due to Chromium step timing issue https://bugs.chromium.org/p/chromium/issues/detail?id=361587
                this._cursorFlatBlinkInterval.cancelAndSet(() => {
                    if (this._isVisible) {
                        this._hide();
                    }
                    else {
                        this._show();
                    }
                }, ViewCursors.BLINK_INTERVAL);
            }
            else {
                this._startCursorBlinkAnimation.setIfNotSet(() => {
                    this._blinkingEnabled = true;
                    this._updateDomClassName();
                }, ViewCursors.BLINK_INTERVAL);
            }
        }
    }
    // --- end blinking logic
    _updateDomClassName() {
        this._domNode.setClassName(this._getClassName());
    }
    _getClassName() {
        let result = 'cursors-layer';
        if (!this._selectionIsEmpty) {
            result += ' has-selection';
        }
        switch (this._cursorStyle) {
            case editorOptions/* TextEditorCursorStyle */.d2.Line:
                result += ' cursor-line-style';
                break;
            case editorOptions/* TextEditorCursorStyle */.d2.Block:
                result += ' cursor-block-style';
                break;
            case editorOptions/* TextEditorCursorStyle */.d2.Underline:
                result += ' cursor-underline-style';
                break;
            case editorOptions/* TextEditorCursorStyle */.d2.LineThin:
                result += ' cursor-line-thin-style';
                break;
            case editorOptions/* TextEditorCursorStyle */.d2.BlockOutline:
                result += ' cursor-block-outline-style';
                break;
            case editorOptions/* TextEditorCursorStyle */.d2.UnderlineThin:
                result += ' cursor-underline-thin-style';
                break;
            default:
                result += ' cursor-line-style';
        }
        if (this._blinkingEnabled) {
            switch (this._getCursorBlinking()) {
                case 1 /* TextEditorCursorBlinkingStyle.Blink */:
                    result += ' cursor-blink';
                    break;
                case 2 /* TextEditorCursorBlinkingStyle.Smooth */:
                    result += ' cursor-smooth';
                    break;
                case 3 /* TextEditorCursorBlinkingStyle.Phase */:
                    result += ' cursor-phase';
                    break;
                case 4 /* TextEditorCursorBlinkingStyle.Expand */:
                    result += ' cursor-expand';
                    break;
                case 5 /* TextEditorCursorBlinkingStyle.Solid */:
                    result += ' cursor-solid';
                    break;
                default:
                    result += ' cursor-solid';
            }
        }
        else {
            result += ' cursor-solid';
        }
        if (this._cursorSmoothCaretAnimation === 'on' || this._cursorSmoothCaretAnimation === 'explicit') {
            result += ' cursor-smooth-caret-animation';
        }
        return result;
    }
    _show() {
        this._primaryCursor.show();
        for (let i = 0, len = this._secondaryCursors.length; i < len; i++) {
            this._secondaryCursors[i].show();
        }
        this._isVisible = true;
    }
    _hide() {
        this._primaryCursor.hide();
        for (let i = 0, len = this._secondaryCursors.length; i < len; i++) {
            this._secondaryCursors[i].hide();
        }
        this._isVisible = false;
    }
    // ---- IViewPart implementation
    prepareRender(ctx) {
        this._primaryCursor.prepareRender(ctx);
        for (let i = 0, len = this._secondaryCursors.length; i < len; i++) {
            this._secondaryCursors[i].prepareRender(ctx);
        }
    }
    render(ctx) {
        const renderData = [];
        let renderDataLen = 0;
        const primaryRenderData = this._primaryCursor.render(ctx);
        if (primaryRenderData) {
            renderData[renderDataLen++] = primaryRenderData;
        }
        for (let i = 0, len = this._secondaryCursors.length; i < len; i++) {
            const secondaryRenderData = this._secondaryCursors[i].render(ctx);
            if (secondaryRenderData) {
                renderData[renderDataLen++] = secondaryRenderData;
            }
        }
        this._renderData = renderData;
    }
    getLastRenderData() {
        return this._renderData;
    }
}
ViewCursors.BLINK_INTERVAL = 500;
(0,themeService/* registerThemingParticipant */.Ic)((theme, collector) => {
    const caret = theme.getColor(editorColorRegistry/* editorCursorForeground */.n0);
    if (caret) {
        let caretBackground = theme.getColor(editorColorRegistry/* editorCursorBackground */.fY);
        if (!caretBackground) {
            caretBackground = caret.opposite();
        }
        collector.addRule(`.monaco-editor .cursors-layer .cursor { background-color: ${caret}; border-color: ${caret}; color: ${caretBackground}; }`);
        if ((0,common_theme/* isHighContrast */.c3)(theme.type)) {
            collector.addRule(`.monaco-editor .cursors-layer.has-selection .cursor { border-left: 1px solid ${caretBackground}; border-right: 1px solid ${caretBackground}; }`);
        }
    }
});


/***/ }),

/***/ 96250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ ViewZones; }
/* harmony export */ });
/* harmony import */ var _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30344);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _view_viewPart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23813);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13372);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




const invalidFunc = () => { throw new Error(`Invalid change accessor`); };
class ViewZones extends _view_viewPart_js__WEBPACK_IMPORTED_MODULE_1__/* .ViewPart */ .E {
    constructor(context) {
        super(context);
        const options = this._context.configuration.options;
        const layoutInfo = options.get(140 /* EditorOption.layoutInfo */);
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._contentWidth = layoutInfo.contentWidth;
        this._contentLeft = layoutInfo.contentLeft;
        this.domNode = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_2__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.domNode.setClassName('view-zones');
        this.domNode.setPosition('absolute');
        this.domNode.setAttribute('role', 'presentation');
        this.domNode.setAttribute('aria-hidden', 'true');
        this.marginDomNode = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_2__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.marginDomNode.setClassName('margin-view-zones');
        this.marginDomNode.setPosition('absolute');
        this.marginDomNode.setAttribute('role', 'presentation');
        this.marginDomNode.setAttribute('aria-hidden', 'true');
        this._zones = {};
    }
    dispose() {
        super.dispose();
        this._zones = {};
    }
    // ---- begin view event handlers
    _recomputeWhitespacesProps() {
        const whitespaces = this._context.viewLayout.getWhitespaces();
        const oldWhitespaces = new Map();
        for (const whitespace of whitespaces) {
            oldWhitespaces.set(whitespace.id, whitespace);
        }
        let hadAChange = false;
        this._context.viewModel.changeWhitespace((whitespaceAccessor) => {
            const keys = Object.keys(this._zones);
            for (let i = 0, len = keys.length; i < len; i++) {
                const id = keys[i];
                const zone = this._zones[id];
                const props = this._computeWhitespaceProps(zone.delegate);
                zone.isInHiddenArea = props.isInHiddenArea;
                const oldWhitespace = oldWhitespaces.get(id);
                if (oldWhitespace && (oldWhitespace.afterLineNumber !== props.afterViewLineNumber || oldWhitespace.height !== props.heightInPx)) {
                    whitespaceAccessor.changeOneWhitespace(id, props.afterViewLineNumber, props.heightInPx);
                    this._safeCallOnComputedHeight(zone.delegate, props.heightInPx);
                    hadAChange = true;
                }
            }
        });
        return hadAChange;
    }
    onConfigurationChanged(e) {
        const options = this._context.configuration.options;
        const layoutInfo = options.get(140 /* EditorOption.layoutInfo */);
        this._lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this._contentWidth = layoutInfo.contentWidth;
        this._contentLeft = layoutInfo.contentLeft;
        if (e.hasChanged(64 /* EditorOption.lineHeight */)) {
            this._recomputeWhitespacesProps();
        }
        return true;
    }
    onLineMappingChanged(e) {
        return this._recomputeWhitespacesProps();
    }
    onLinesDeleted(e) {
        return true;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged || e.scrollWidthChanged;
    }
    onZonesChanged(e) {
        return true;
    }
    onLinesInserted(e) {
        return true;
    }
    // ---- end view event handlers
    _getZoneOrdinal(zone) {
        var _a, _b;
        return (_b = (_a = zone.ordinal) !== null && _a !== void 0 ? _a : zone.afterColumn) !== null && _b !== void 0 ? _b : 10000;
    }
    _computeWhitespaceProps(zone) {
        if (zone.afterLineNumber === 0) {
            return {
                isInHiddenArea: false,
                afterViewLineNumber: 0,
                heightInPx: this._heightInPixels(zone),
                minWidthInPx: this._minWidthInPixels(zone)
            };
        }
        let zoneAfterModelPosition;
        if (typeof zone.afterColumn !== 'undefined') {
            zoneAfterModelPosition = this._context.viewModel.model.validatePosition({
                lineNumber: zone.afterLineNumber,
                column: zone.afterColumn
            });
        }
        else {
            const validAfterLineNumber = this._context.viewModel.model.validatePosition({
                lineNumber: zone.afterLineNumber,
                column: 1
            }).lineNumber;
            zoneAfterModelPosition = new _common_core_position_js__WEBPACK_IMPORTED_MODULE_3__/* .Position */ .L(validAfterLineNumber, this._context.viewModel.model.getLineMaxColumn(validAfterLineNumber));
        }
        let zoneBeforeModelPosition;
        if (zoneAfterModelPosition.column === this._context.viewModel.model.getLineMaxColumn(zoneAfterModelPosition.lineNumber)) {
            zoneBeforeModelPosition = this._context.viewModel.model.validatePosition({
                lineNumber: zoneAfterModelPosition.lineNumber + 1,
                column: 1
            });
        }
        else {
            zoneBeforeModelPosition = this._context.viewModel.model.validatePosition({
                lineNumber: zoneAfterModelPosition.lineNumber,
                column: zoneAfterModelPosition.column + 1
            });
        }
        const viewPosition = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(zoneAfterModelPosition, zone.afterColumnAffinity);
        const isVisible = zone.showInHiddenAreas || this._context.viewModel.coordinatesConverter.modelPositionIsVisible(zoneBeforeModelPosition);
        return {
            isInHiddenArea: !isVisible,
            afterViewLineNumber: viewPosition.lineNumber,
            heightInPx: (isVisible ? this._heightInPixels(zone) : 0),
            minWidthInPx: this._minWidthInPixels(zone)
        };
    }
    changeViewZones(callback) {
        let zonesHaveChanged = false;
        this._context.viewModel.changeWhitespace((whitespaceAccessor) => {
            const changeAccessor = {
                addZone: (zone) => {
                    zonesHaveChanged = true;
                    return this._addZone(whitespaceAccessor, zone);
                },
                removeZone: (id) => {
                    if (!id) {
                        return;
                    }
                    zonesHaveChanged = this._removeZone(whitespaceAccessor, id) || zonesHaveChanged;
                },
                layoutZone: (id) => {
                    if (!id) {
                        return;
                    }
                    zonesHaveChanged = this._layoutZone(whitespaceAccessor, id) || zonesHaveChanged;
                }
            };
            safeInvoke1Arg(callback, changeAccessor);
            // Invalidate changeAccessor
            changeAccessor.addZone = invalidFunc;
            changeAccessor.removeZone = invalidFunc;
            changeAccessor.layoutZone = invalidFunc;
        });
        return zonesHaveChanged;
    }
    _addZone(whitespaceAccessor, zone) {
        const props = this._computeWhitespaceProps(zone);
        const whitespaceId = whitespaceAccessor.insertWhitespace(props.afterViewLineNumber, this._getZoneOrdinal(zone), props.heightInPx, props.minWidthInPx);
        const myZone = {
            whitespaceId: whitespaceId,
            delegate: zone,
            isInHiddenArea: props.isInHiddenArea,
            isVisible: false,
            domNode: (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_2__/* .createFastDomNode */ .X)(zone.domNode),
            marginDomNode: zone.marginDomNode ? (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_2__/* .createFastDomNode */ .X)(zone.marginDomNode) : null
        };
        this._safeCallOnComputedHeight(myZone.delegate, props.heightInPx);
        myZone.domNode.setPosition('absolute');
        myZone.domNode.domNode.style.width = '100%';
        myZone.domNode.setDisplay('none');
        myZone.domNode.setAttribute('monaco-view-zone', myZone.whitespaceId);
        this.domNode.appendChild(myZone.domNode);
        if (myZone.marginDomNode) {
            myZone.marginDomNode.setPosition('absolute');
            myZone.marginDomNode.domNode.style.width = '100%';
            myZone.marginDomNode.setDisplay('none');
            myZone.marginDomNode.setAttribute('monaco-view-zone', myZone.whitespaceId);
            this.marginDomNode.appendChild(myZone.marginDomNode);
        }
        this._zones[myZone.whitespaceId] = myZone;
        this.setShouldRender();
        return myZone.whitespaceId;
    }
    _removeZone(whitespaceAccessor, id) {
        if (this._zones.hasOwnProperty(id)) {
            const zone = this._zones[id];
            delete this._zones[id];
            whitespaceAccessor.removeWhitespace(zone.whitespaceId);
            zone.domNode.removeAttribute('monaco-visible-view-zone');
            zone.domNode.removeAttribute('monaco-view-zone');
            zone.domNode.domNode.parentNode.removeChild(zone.domNode.domNode);
            if (zone.marginDomNode) {
                zone.marginDomNode.removeAttribute('monaco-visible-view-zone');
                zone.marginDomNode.removeAttribute('monaco-view-zone');
                zone.marginDomNode.domNode.parentNode.removeChild(zone.marginDomNode.domNode);
            }
            this.setShouldRender();
            return true;
        }
        return false;
    }
    _layoutZone(whitespaceAccessor, id) {
        if (this._zones.hasOwnProperty(id)) {
            const zone = this._zones[id];
            const props = this._computeWhitespaceProps(zone.delegate);
            zone.isInHiddenArea = props.isInHiddenArea;
            // const newOrdinal = this._getZoneOrdinal(zone.delegate);
            whitespaceAccessor.changeOneWhitespace(zone.whitespaceId, props.afterViewLineNumber, props.heightInPx);
            // TODO@Alex: change `newOrdinal` too
            this._safeCallOnComputedHeight(zone.delegate, props.heightInPx);
            this.setShouldRender();
            return true;
        }
        return false;
    }
    shouldSuppressMouseDownOnViewZone(id) {
        if (this._zones.hasOwnProperty(id)) {
            const zone = this._zones[id];
            return Boolean(zone.delegate.suppressMouseDown);
        }
        return false;
    }
    _heightInPixels(zone) {
        if (typeof zone.heightInPx === 'number') {
            return zone.heightInPx;
        }
        if (typeof zone.heightInLines === 'number') {
            return this._lineHeight * zone.heightInLines;
        }
        return this._lineHeight;
    }
    _minWidthInPixels(zone) {
        if (typeof zone.minWidthInPx === 'number') {
            return zone.minWidthInPx;
        }
        return 0;
    }
    _safeCallOnComputedHeight(zone, height) {
        if (typeof zone.onComputedHeight === 'function') {
            try {
                zone.onComputedHeight(height);
            }
            catch (e) {
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(e);
            }
        }
    }
    _safeCallOnDomNodeTop(zone, top) {
        if (typeof zone.onDomNodeTop === 'function') {
            try {
                zone.onDomNodeTop(top);
            }
            catch (e) {
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(e);
            }
        }
    }
    prepareRender(ctx) {
        // Nothing to read
    }
    render(ctx) {
        const visibleWhitespaces = ctx.viewportData.whitespaceViewportData;
        const visibleZones = {};
        let hasVisibleZone = false;
        for (const visibleWhitespace of visibleWhitespaces) {
            if (this._zones[visibleWhitespace.id].isInHiddenArea) {
                continue;
            }
            visibleZones[visibleWhitespace.id] = visibleWhitespace;
            hasVisibleZone = true;
        }
        const keys = Object.keys(this._zones);
        for (let i = 0, len = keys.length; i < len; i++) {
            const id = keys[i];
            const zone = this._zones[id];
            let newTop = 0;
            let newHeight = 0;
            let newDisplay = 'none';
            if (visibleZones.hasOwnProperty(id)) {
                newTop = visibleZones[id].verticalOffset - ctx.bigNumbersDelta;
                newHeight = visibleZones[id].height;
                newDisplay = 'block';
                // zone is visible
                if (!zone.isVisible) {
                    zone.domNode.setAttribute('monaco-visible-view-zone', 'true');
                    zone.isVisible = true;
                }
                this._safeCallOnDomNodeTop(zone.delegate, ctx.getScrolledTopFromAbsoluteTop(visibleZones[id].verticalOffset));
            }
            else {
                if (zone.isVisible) {
                    zone.domNode.removeAttribute('monaco-visible-view-zone');
                    zone.isVisible = false;
                }
                this._safeCallOnDomNodeTop(zone.delegate, ctx.getScrolledTopFromAbsoluteTop(-1000000));
            }
            zone.domNode.setTop(newTop);
            zone.domNode.setHeight(newHeight);
            zone.domNode.setDisplay(newDisplay);
            if (zone.marginDomNode) {
                zone.marginDomNode.setTop(newTop);
                zone.marginDomNode.setHeight(newHeight);
                zone.marginDomNode.setDisplay(newDisplay);
            }
        }
        if (hasVisibleZone) {
            this.domNode.setWidth(Math.max(ctx.scrollWidth, this._contentWidth));
            this.marginDomNode.setWidth(this._contentLeft);
        }
    }
}
function safeInvoke1Arg(func, arg1) {
    try {
        return func(arg1);
    }
    catch (e) {
        (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(e);
    }
}


/***/ }),

/***/ 83239:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: function() { return /* binding */ WhitespaceOverlay; }
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/whitespace/whitespace.css
var whitespace = __webpack_require__(45766);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/whitespace/whitespace.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(whitespace/* default */.Z, options);




       /* harmony default export */ var whitespace_whitespace = (whitespace/* default */.Z && whitespace/* default */.Z.locals ? whitespace/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/view/dynamicViewOverlay.js
var dynamicViewOverlay = __webpack_require__(95438);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/viewLayout/viewLineRenderer.js + 1 modules
var viewLineRenderer = __webpack_require__(71850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/editorColorRegistry.js
var editorColorRegistry = __webpack_require__(66050);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/viewParts/whitespace/whitespace.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class WhitespaceOverlay extends dynamicViewOverlay/* DynamicViewOverlay */.i {
    constructor(context) {
        super();
        this._context = context;
        this._options = new WhitespaceOptions(this._context.configuration);
        this._selection = [];
        this._renderResult = null;
        this._context.addEventHandler(this);
    }
    dispose() {
        this._context.removeEventHandler(this);
        this._renderResult = null;
        super.dispose();
    }
    // --- begin event handlers
    onConfigurationChanged(e) {
        const newOptions = new WhitespaceOptions(this._context.configuration);
        if (this._options.equals(newOptions)) {
            return e.hasChanged(140 /* EditorOption.layoutInfo */);
        }
        this._options = newOptions;
        return true;
    }
    onCursorStateChanged(e) {
        this._selection = e.selections;
        if (this._options.renderWhitespace === 'selection') {
            return true;
        }
        return false;
    }
    onDecorationsChanged(e) {
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
        return e.scrollTopChanged;
    }
    onZonesChanged(e) {
        return true;
    }
    // --- end event handlers
    prepareRender(ctx) {
        if (this._options.renderWhitespace === 'none') {
            this._renderResult = null;
            return;
        }
        const startLineNumber = ctx.visibleRange.startLineNumber;
        const endLineNumber = ctx.visibleRange.endLineNumber;
        const lineCount = endLineNumber - startLineNumber + 1;
        const needed = new Array(lineCount);
        for (let i = 0; i < lineCount; i++) {
            needed[i] = true;
        }
        const viewportData = this._context.viewModel.getMinimapLinesRenderingData(ctx.viewportData.startLineNumber, ctx.viewportData.endLineNumber, needed);
        this._renderResult = [];
        for (let lineNumber = ctx.viewportData.startLineNumber; lineNumber <= ctx.viewportData.endLineNumber; lineNumber++) {
            const lineIndex = lineNumber - ctx.viewportData.startLineNumber;
            const lineData = viewportData.data[lineIndex];
            let selectionsOnLine = null;
            if (this._options.renderWhitespace === 'selection') {
                const selections = this._selection;
                for (const selection of selections) {
                    if (selection.endLineNumber < lineNumber || selection.startLineNumber > lineNumber) {
                        // Selection does not intersect line
                        continue;
                    }
                    const startColumn = (selection.startLineNumber === lineNumber ? selection.startColumn : lineData.minColumn);
                    const endColumn = (selection.endLineNumber === lineNumber ? selection.endColumn : lineData.maxColumn);
                    if (startColumn < endColumn) {
                        if (!selectionsOnLine) {
                            selectionsOnLine = [];
                        }
                        selectionsOnLine.push(new viewLineRenderer/* LineRange */.zG(startColumn - 1, endColumn - 1));
                    }
                }
            }
            this._renderResult[lineIndex] = this._applyRenderWhitespace(ctx, lineNumber, selectionsOnLine, lineData);
        }
    }
    _applyRenderWhitespace(ctx, lineNumber, selections, lineData) {
        if (this._options.renderWhitespace === 'selection' && !selections) {
            return '';
        }
        if (this._options.renderWhitespace === 'trailing' && lineData.continuesWithWrappedLine) {
            return '';
        }
        const color = this._context.theme.getColor(editorColorRegistry/* editorWhitespaces */.dI);
        const USE_SVG = this._options.renderWithSVG;
        const lineContent = lineData.content;
        const len = (this._options.stopRenderingLineAfter === -1 ? lineContent.length : Math.min(this._options.stopRenderingLineAfter, lineContent.length));
        const continuesWithWrappedLine = lineData.continuesWithWrappedLine;
        const fauxIndentLength = lineData.minColumn - 1;
        const onlyBoundary = (this._options.renderWhitespace === 'boundary');
        const onlyTrailing = (this._options.renderWhitespace === 'trailing');
        const lineHeight = this._options.lineHeight;
        const middotWidth = this._options.middotWidth;
        const wsmiddotWidth = this._options.wsmiddotWidth;
        const spaceWidth = this._options.spaceWidth;
        const wsmiddotDiff = Math.abs(wsmiddotWidth - spaceWidth);
        const middotDiff = Math.abs(middotWidth - spaceWidth);
        // U+2E31 - WORD SEPARATOR MIDDLE DOT
        // U+00B7 - MIDDLE DOT
        const renderSpaceCharCode = (wsmiddotDiff < middotDiff ? 0x2E31 : 0xB7);
        const canUseHalfwidthRightwardsArrow = this._options.canUseHalfwidthRightwardsArrow;
        let result = '';
        let lineIsEmptyOrWhitespace = false;
        let firstNonWhitespaceIndex = strings/* firstNonWhitespaceIndex */.LC(lineContent);
        let lastNonWhitespaceIndex;
        if (firstNonWhitespaceIndex === -1) {
            lineIsEmptyOrWhitespace = true;
            firstNonWhitespaceIndex = len;
            lastNonWhitespaceIndex = len;
        }
        else {
            lastNonWhitespaceIndex = strings/* lastNonWhitespaceIndex */.ow(lineContent);
        }
        let currentSelectionIndex = 0;
        let currentSelection = selections && selections[currentSelectionIndex];
        let maxLeft = 0;
        for (let charIndex = fauxIndentLength; charIndex < len; charIndex++) {
            const chCode = lineContent.charCodeAt(charIndex);
            if (currentSelection && charIndex >= currentSelection.endOffset) {
                currentSelectionIndex++;
                currentSelection = selections && selections[currentSelectionIndex];
            }
            if (chCode !== 9 /* CharCode.Tab */ && chCode !== 32 /* CharCode.Space */) {
                continue;
            }
            if (onlyTrailing && !lineIsEmptyOrWhitespace && charIndex <= lastNonWhitespaceIndex) {
                // If rendering only trailing whitespace, check that the charIndex points to trailing whitespace.
                continue;
            }
            if (onlyBoundary && charIndex >= firstNonWhitespaceIndex && charIndex <= lastNonWhitespaceIndex && chCode === 32 /* CharCode.Space */) {
                // rendering only boundary whitespace
                const prevChCode = (charIndex - 1 >= 0 ? lineContent.charCodeAt(charIndex - 1) : 0 /* CharCode.Null */);
                const nextChCode = (charIndex + 1 < len ? lineContent.charCodeAt(charIndex + 1) : 0 /* CharCode.Null */);
                if (prevChCode !== 32 /* CharCode.Space */ && nextChCode !== 32 /* CharCode.Space */) {
                    continue;
                }
            }
            if (onlyBoundary && continuesWithWrappedLine && charIndex === len - 1) {
                const prevCharCode = (charIndex - 1 >= 0 ? lineContent.charCodeAt(charIndex - 1) : 0 /* CharCode.Null */);
                const isSingleTrailingSpace = (chCode === 32 /* CharCode.Space */ && (prevCharCode !== 32 /* CharCode.Space */ && prevCharCode !== 9 /* CharCode.Tab */));
                if (isSingleTrailingSpace) {
                    continue;
                }
            }
            if (selections && (!currentSelection || currentSelection.startOffset > charIndex || currentSelection.endOffset <= charIndex)) {
                // If rendering whitespace on selection, check that the charIndex falls within a selection
                continue;
            }
            const visibleRange = ctx.visibleRangeForPosition(new position/* Position */.L(lineNumber, charIndex + 1));
            if (!visibleRange) {
                continue;
            }
            if (USE_SVG) {
                maxLeft = Math.max(maxLeft, visibleRange.left);
                if (chCode === 9 /* CharCode.Tab */) {
                    result += this._renderArrow(lineHeight, spaceWidth, visibleRange.left);
                }
                else {
                    result += `<circle cx="${(visibleRange.left + spaceWidth / 2).toFixed(2)}" cy="${(lineHeight / 2).toFixed(2)}" r="${(spaceWidth / 7).toFixed(2)}" />`;
                }
            }
            else {
                if (chCode === 9 /* CharCode.Tab */) {
                    result += `<div class="mwh" style="left:${visibleRange.left}px;height:${lineHeight}px;">${canUseHalfwidthRightwardsArrow ? String.fromCharCode(0xFFEB) : String.fromCharCode(0x2192)}</div>`;
                }
                else {
                    result += `<div class="mwh" style="left:${visibleRange.left}px;height:${lineHeight}px;">${String.fromCharCode(renderSpaceCharCode)}</div>`;
                }
            }
        }
        if (USE_SVG) {
            maxLeft = Math.round(maxLeft + spaceWidth);
            return (`<svg style="position:absolute;width:${maxLeft}px;height:${lineHeight}px" viewBox="0 0 ${maxLeft} ${lineHeight}" xmlns="http://www.w3.org/2000/svg" fill="${color}">`
                + result
                + `</svg>`);
        }
        return result;
    }
    _renderArrow(lineHeight, spaceWidth, left) {
        const strokeWidth = spaceWidth / 7;
        const width = spaceWidth;
        const dy = lineHeight / 2;
        const dx = left;
        const p1 = { x: 0, y: strokeWidth / 2 };
        const p2 = { x: 100 / 125 * width, y: p1.y };
        const p3 = { x: p2.x - 0.2 * p2.x, y: p2.y + 0.2 * p2.x };
        const p4 = { x: p3.x + 0.1 * p2.x, y: p3.y + 0.1 * p2.x };
        const p5 = { x: p4.x + 0.35 * p2.x, y: p4.y - 0.35 * p2.x };
        const p6 = { x: p5.x, y: -p5.y };
        const p7 = { x: p4.x, y: -p4.y };
        const p8 = { x: p3.x, y: -p3.y };
        const p9 = { x: p2.x, y: -p2.y };
        const p10 = { x: p1.x, y: -p1.y };
        const p = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
        const parts = p.map((p) => `${(dx + p.x).toFixed(2)} ${(dy + p.y).toFixed(2)}`).join(' L ');
        return `<path d="M ${parts}" />`;
    }
    render(startLineNumber, lineNumber) {
        if (!this._renderResult) {
            return '';
        }
        const lineIndex = lineNumber - startLineNumber;
        if (lineIndex < 0 || lineIndex >= this._renderResult.length) {
            return '';
        }
        return this._renderResult[lineIndex];
    }
}
class WhitespaceOptions {
    constructor(config) {
        const options = config.options;
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        const experimentalWhitespaceRendering = options.get(36 /* EditorOption.experimentalWhitespaceRendering */);
        if (experimentalWhitespaceRendering === 'off') {
            // whitespace is rendered in the view line
            this.renderWhitespace = 'none';
            this.renderWithSVG = false;
        }
        else if (experimentalWhitespaceRendering === 'svg') {
            this.renderWhitespace = options.get(95 /* EditorOption.renderWhitespace */);
            this.renderWithSVG = true;
        }
        else {
            this.renderWhitespace = options.get(95 /* EditorOption.renderWhitespace */);
            this.renderWithSVG = false;
        }
        this.spaceWidth = fontInfo.spaceWidth;
        this.middotWidth = fontInfo.middotWidth;
        this.wsmiddotWidth = fontInfo.wsmiddotWidth;
        this.canUseHalfwidthRightwardsArrow = fontInfo.canUseHalfwidthRightwardsArrow;
        this.lineHeight = options.get(64 /* EditorOption.lineHeight */);
        this.stopRenderingLineAfter = options.get(113 /* EditorOption.stopRenderingLineAfter */);
    }
    equals(other) {
        return (this.renderWhitespace === other.renderWhitespace
            && this.renderWithSVG === other.renderWithSVG
            && this.spaceWidth === other.spaceWidth
            && this.middotWidth === other.middotWidth
            && this.wsmiddotWidth === other.wsmiddotWidth
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.lineHeight === other.lineHeight
            && this.stopRenderingLineAfter === other.stopRenderingLineAfter);
    }
}


/***/ }),

/***/ 610:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ DOMLineBreaksComputerFactory; }
/* harmony export */ });
/* harmony import */ var _base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99522);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23607);
/* harmony import */ var _config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86778);
/* harmony import */ var _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28103);
/* harmony import */ var _common_modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97579);
/* harmony import */ var _common_textModelEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67033);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const ttPolicy = (0,_base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_0__/* .createTrustedTypesPolicy */ .Z)('domLineBreaksComputer', { createHTML: value => value });
class DOMLineBreaksComputerFactory {
    static create() {
        return new DOMLineBreaksComputerFactory();
    }
    constructor() {
    }
    createLineBreaksComputer(fontInfo, tabSize, wrappingColumn, wrappingIndent, wordBreak) {
        const requests = [];
        const injectedTexts = [];
        return {
            addRequest: (lineText, injectedText, previousLineBreakData) => {
                requests.push(lineText);
                injectedTexts.push(injectedText);
            },
            finalize: () => {
                return createLineBreaks(requests, fontInfo, tabSize, wrappingColumn, wrappingIndent, wordBreak, injectedTexts);
            }
        };
    }
}
function createLineBreaks(requests, fontInfo, tabSize, firstLineBreakColumn, wrappingIndent, wordBreak, injectedTextsPerLine) {
    var _a;
    function createEmptyLineBreakWithPossiblyInjectedText(requestIdx) {
        const injectedTexts = injectedTextsPerLine[requestIdx];
        if (injectedTexts) {
            const lineText = _common_textModelEvents_js__WEBPACK_IMPORTED_MODULE_4__/* .LineInjectedText */ .gk.applyInjectedText(requests[requestIdx], injectedTexts);
            const injectionOptions = injectedTexts.map(t => t.options);
            const injectionOffsets = injectedTexts.map(text => text.column - 1);
            // creating a `LineBreakData` with an invalid `breakOffsetsVisibleColumn` is OK
            // because `breakOffsetsVisibleColumn` will never be used because it contains injected text
            return new _common_modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_3__/* .ModelLineProjectionData */ .gD(injectionOffsets, injectionOptions, [lineText.length], [], 0);
        }
        else {
            return null;
        }
    }
    if (firstLineBreakColumn === -1) {
        const result = [];
        for (let i = 0, len = requests.length; i < len; i++) {
            result[i] = createEmptyLineBreakWithPossiblyInjectedText(i);
        }
        return result;
    }
    const overallWidth = Math.round(firstLineBreakColumn * fontInfo.typicalHalfwidthCharacterWidth);
    const additionalIndent = (wrappingIndent === 3 /* WrappingIndent.DeepIndent */ ? 2 : wrappingIndent === 2 /* WrappingIndent.Indent */ ? 1 : 0);
    const additionalIndentSize = Math.round(tabSize * additionalIndent);
    const additionalIndentLength = Math.ceil(fontInfo.spaceWidth * additionalIndentSize);
    const containerDomNode = document.createElement('div');
    (0,_config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_5__/* .applyFontInfo */ .N)(containerDomNode, fontInfo);
    const sb = new _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_2__/* .StringBuilder */ .HT(10000);
    const firstNonWhitespaceIndices = [];
    const wrappedTextIndentLengths = [];
    const renderLineContents = [];
    const allCharOffsets = [];
    const allVisibleColumns = [];
    for (let i = 0; i < requests.length; i++) {
        const lineContent = _common_textModelEvents_js__WEBPACK_IMPORTED_MODULE_4__/* .LineInjectedText */ .gk.applyInjectedText(requests[i], injectedTextsPerLine[i]);
        let firstNonWhitespaceIndex = 0;
        let wrappedTextIndentLength = 0;
        let width = overallWidth;
        if (wrappingIndent !== 0 /* WrappingIndent.None */) {
            firstNonWhitespaceIndex = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .firstNonWhitespaceIndex */ .LC(lineContent);
            if (firstNonWhitespaceIndex === -1) {
                // all whitespace line
                firstNonWhitespaceIndex = 0;
            }
            else {
                // Track existing indent
                for (let i = 0; i < firstNonWhitespaceIndex; i++) {
                    const charWidth = (lineContent.charCodeAt(i) === 9 /* CharCode.Tab */
                        ? (tabSize - (wrappedTextIndentLength % tabSize))
                        : 1);
                    wrappedTextIndentLength += charWidth;
                }
                const indentWidth = Math.ceil(fontInfo.spaceWidth * wrappedTextIndentLength);
                // Force sticking to beginning of line if no character would fit except for the indentation
                if (indentWidth + fontInfo.typicalFullwidthCharacterWidth > overallWidth) {
                    firstNonWhitespaceIndex = 0;
                    wrappedTextIndentLength = 0;
                }
                else {
                    width = overallWidth - indentWidth;
                }
            }
        }
        const renderLineContent = lineContent.substr(firstNonWhitespaceIndex);
        const tmp = renderLine(renderLineContent, wrappedTextIndentLength, tabSize, width, sb, additionalIndentLength);
        firstNonWhitespaceIndices[i] = firstNonWhitespaceIndex;
        wrappedTextIndentLengths[i] = wrappedTextIndentLength;
        renderLineContents[i] = renderLineContent;
        allCharOffsets[i] = tmp[0];
        allVisibleColumns[i] = tmp[1];
    }
    const html = sb.build();
    const trustedhtml = (_a = ttPolicy === null || ttPolicy === void 0 ? void 0 : ttPolicy.createHTML(html)) !== null && _a !== void 0 ? _a : html;
    containerDomNode.innerHTML = trustedhtml;
    containerDomNode.style.position = 'absolute';
    containerDomNode.style.top = '10000';
    if (wordBreak === 'keepAll') {
        // word-break: keep-all; overflow-wrap: anywhere
        containerDomNode.style.wordBreak = 'keep-all';
        containerDomNode.style.overflowWrap = 'anywhere';
    }
    else {
        // overflow-wrap: break-word
        containerDomNode.style.wordBreak = 'inherit';
        containerDomNode.style.overflowWrap = 'break-word';
    }
    document.body.appendChild(containerDomNode);
    const range = document.createRange();
    const lineDomNodes = Array.prototype.slice.call(containerDomNode.children, 0);
    const result = [];
    for (let i = 0; i < requests.length; i++) {
        const lineDomNode = lineDomNodes[i];
        const breakOffsets = readLineBreaks(range, lineDomNode, renderLineContents[i], allCharOffsets[i]);
        if (breakOffsets === null) {
            result[i] = createEmptyLineBreakWithPossiblyInjectedText(i);
            continue;
        }
        const firstNonWhitespaceIndex = firstNonWhitespaceIndices[i];
        const wrappedTextIndentLength = wrappedTextIndentLengths[i] + additionalIndentSize;
        const visibleColumns = allVisibleColumns[i];
        const breakOffsetsVisibleColumn = [];
        for (let j = 0, len = breakOffsets.length; j < len; j++) {
            breakOffsetsVisibleColumn[j] = visibleColumns[breakOffsets[j]];
        }
        if (firstNonWhitespaceIndex !== 0) {
            // All break offsets are relative to the renderLineContent, make them absolute again
            for (let j = 0, len = breakOffsets.length; j < len; j++) {
                breakOffsets[j] += firstNonWhitespaceIndex;
            }
        }
        let injectionOptions;
        let injectionOffsets;
        const curInjectedTexts = injectedTextsPerLine[i];
        if (curInjectedTexts) {
            injectionOptions = curInjectedTexts.map(t => t.options);
            injectionOffsets = curInjectedTexts.map(text => text.column - 1);
        }
        else {
            injectionOptions = null;
            injectionOffsets = null;
        }
        result[i] = new _common_modelLineProjectionData_js__WEBPACK_IMPORTED_MODULE_3__/* .ModelLineProjectionData */ .gD(injectionOffsets, injectionOptions, breakOffsets, breakOffsetsVisibleColumn, wrappedTextIndentLength);
    }
    document.body.removeChild(containerDomNode);
    return result;
}
function renderLine(lineContent, initialVisibleColumn, tabSize, width, sb, wrappingIndentLength) {
    if (wrappingIndentLength !== 0) {
        const hangingOffset = String(wrappingIndentLength);
        sb.appendString('<div style="text-indent: -');
        sb.appendString(hangingOffset);
        sb.appendString('px; padding-left: ');
        sb.appendString(hangingOffset);
        sb.appendString('px; box-sizing: border-box; width:');
    }
    else {
        sb.appendString('<div style="width:');
    }
    sb.appendString(String(width));
    sb.appendString('px;">');
    // if (containsRTL) {
    // 	sb.appendASCIIString('" dir="ltr');
    // }
    const len = lineContent.length;
    let visibleColumn = initialVisibleColumn;
    let charOffset = 0;
    const charOffsets = [];
    const visibleColumns = [];
    let nextCharCode = (0 < len ? lineContent.charCodeAt(0) : 0 /* CharCode.Null */);
    sb.appendString('<span>');
    for (let charIndex = 0; charIndex < len; charIndex++) {
        if (charIndex !== 0 && charIndex % 16384 /* Constants.SPAN_MODULO_LIMIT */ === 0) {
            sb.appendString('</span><span>');
        }
        charOffsets[charIndex] = charOffset;
        visibleColumns[charIndex] = visibleColumn;
        const charCode = nextCharCode;
        nextCharCode = (charIndex + 1 < len ? lineContent.charCodeAt(charIndex + 1) : 0 /* CharCode.Null */);
        let producedCharacters = 1;
        let charWidth = 1;
        switch (charCode) {
            case 9 /* CharCode.Tab */:
                producedCharacters = (tabSize - (visibleColumn % tabSize));
                charWidth = producedCharacters;
                for (let space = 1; space <= producedCharacters; space++) {
                    if (space < producedCharacters) {
                        sb.appendCharCode(0xA0); // &nbsp;
                    }
                    else {
                        sb.appendASCIICharCode(32 /* CharCode.Space */);
                    }
                }
                break;
            case 32 /* CharCode.Space */:
                if (nextCharCode === 32 /* CharCode.Space */) {
                    sb.appendCharCode(0xA0); // &nbsp;
                }
                else {
                    sb.appendASCIICharCode(32 /* CharCode.Space */);
                }
                break;
            case 60 /* CharCode.LessThan */:
                sb.appendString('&lt;');
                break;
            case 62 /* CharCode.GreaterThan */:
                sb.appendString('&gt;');
                break;
            case 38 /* CharCode.Ampersand */:
                sb.appendString('&amp;');
                break;
            case 0 /* CharCode.Null */:
                sb.appendString('&#00;');
                break;
            case 65279 /* CharCode.UTF8_BOM */:
            case 8232 /* CharCode.LINE_SEPARATOR */:
            case 8233 /* CharCode.PARAGRAPH_SEPARATOR */:
            case 133 /* CharCode.NEXT_LINE */:
                sb.appendCharCode(0xFFFD);
                break;
            default:
                if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isFullWidthCharacter */ .K7(charCode)) {
                    charWidth++;
                }
                if (charCode < 32) {
                    sb.appendCharCode(9216 + charCode);
                }
                else {
                    sb.appendCharCode(charCode);
                }
        }
        charOffset += producedCharacters;
        visibleColumn += charWidth;
    }
    sb.appendString('</span>');
    charOffsets[lineContent.length] = charOffset;
    visibleColumns[lineContent.length] = visibleColumn;
    sb.appendString('</div>');
    return [charOffsets, visibleColumns];
}
function readLineBreaks(range, lineDomNode, lineContent, charOffsets) {
    if (lineContent.length <= 1) {
        return null;
    }
    const spans = Array.prototype.slice.call(lineDomNode.children, 0);
    const breakOffsets = [];
    try {
        discoverBreaks(range, spans, charOffsets, 0, null, lineContent.length - 1, null, breakOffsets);
    }
    catch (err) {
        console.log(err);
        return null;
    }
    if (breakOffsets.length === 0) {
        return null;
    }
    breakOffsets.push(lineContent.length);
    return breakOffsets;
}
function discoverBreaks(range, spans, charOffsets, low, lowRects, high, highRects, result) {
    if (low === high) {
        return;
    }
    lowRects = lowRects || readClientRect(range, spans, charOffsets[low], charOffsets[low + 1]);
    highRects = highRects || readClientRect(range, spans, charOffsets[high], charOffsets[high + 1]);
    if (Math.abs(lowRects[0].top - highRects[0].top) <= 0.1) {
        // same line
        return;
    }
    // there is at least one line break between these two offsets
    if (low + 1 === high) {
        // the two characters are adjacent, so the line break must be exactly between them
        result.push(high);
        return;
    }
    const mid = low + ((high - low) / 2) | 0;
    const midRects = readClientRect(range, spans, charOffsets[mid], charOffsets[mid + 1]);
    discoverBreaks(range, spans, charOffsets, low, lowRects, mid, midRects, result);
    discoverBreaks(range, spans, charOffsets, mid, midRects, high, highRects, result);
}
function readClientRect(range, spans, startOffset, endOffset) {
    range.setStart(spans[(startOffset / 16384 /* Constants.SPAN_MODULO_LIMIT */) | 0].firstChild, startOffset % 16384 /* Constants.SPAN_MODULO_LIMIT */);
    range.setEnd(spans[(endOffset / 16384 /* Constants.SPAN_MODULO_LIMIT */) | 0].firstChild, endOffset % 16384 /* Constants.SPAN_MODULO_LIMIT */);
    return range.getClientRects();
}


/***/ }),

/***/ 95438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ DynamicViewOverlay; }
/* harmony export */ });
/* harmony import */ var _common_viewEventHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47341);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class DynamicViewOverlay extends _common_viewEventHandler_js__WEBPACK_IMPORTED_MODULE_0__/* .ViewEventHandler */ .O {
}


/***/ })

}]);