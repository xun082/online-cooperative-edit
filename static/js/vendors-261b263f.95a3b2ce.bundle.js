"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-261b263f"],{

/***/ 78727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* marker zone */\n\n.monaco-editor .peekview-widget .head .peekview-title .severity-icon {\n\tdisplay: inline-block;\n\tvertical-align: text-top;\n\tmargin-right: 4px;\n}\n\n.monaco-editor .marker-widget {\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.monaco-editor .marker-widget > .stale {\n\topacity: 0.6;\n\tfont-style: italic;\n}\n\n.monaco-editor .marker-widget .title {\n\tdisplay: inline-block;\n\tpadding-right: 5px;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer {\n\tposition: absolute;\n\twhite-space: pre;\n\tuser-select: text;\n\t-webkit-user-select: text;\n\tpadding: 8px 12px 0 20px;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message .details {\n\tpadding-left: 6px;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message .source,\n.monaco-editor .marker-widget .descriptioncontainer .message span.code {\n\topacity: 0.6;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message a.code-link {\n\topacity: 0.6;\n\tcolor: inherit;\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:before {\n\tcontent: '(';\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message a.code-link:after {\n\tcontent: ')';\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {\n\ttext-decoration: underline;\n\t/** Hack to force underline to show **/\n\tborder-bottom: 1px solid transparent;\n\ttext-underline-position: under;\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .message a.code-link > span {\n\tcolor: var(--vscode-textLink-activeForeground);\n}\n\n.monaco-editor .marker-widget .descriptioncontainer .filename {\n\tcursor: pointer;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 19322:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91213);
/* harmony import */ var _common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4546);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23330);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class EditorFontZoomIn extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.fontZoomIn',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('EditorFontZoomIn.label', "Editor Font Zoom In"),
            alias: 'Editor Font Zoom In',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        _common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorZoom */ .C.setZoomLevel(_common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorZoom */ .C.getZoomLevel() + 1);
    }
}
class EditorFontZoomOut extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.fontZoomOut',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('EditorFontZoomOut.label', "Editor Font Zoom Out"),
            alias: 'Editor Font Zoom Out',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        _common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorZoom */ .C.setZoomLevel(_common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorZoom */ .C.getZoomLevel() - 1);
    }
}
class EditorFontZoomReset extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.fontZoomReset',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('EditorFontZoomReset.label', "Editor Font Zoom Reset"),
            alias: 'Editor Font Zoom Reset',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        _common_config_editorZoom_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorZoom */ .C.setZoomLevel(0);
    }
}
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .registerEditorAction */ .Qr)(EditorFontZoomIn);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .registerEditorAction */ .Qr)(EditorFontZoomOut);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_0__/* .registerEditorAction */ .Qr)(EditorFontZoomReset);


/***/ }),

/***/ 22580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Qq: function() { return /* binding */ formatDocumentWithSelectedProvider; },
/* harmony export */   Qs: function() { return /* binding */ getOnTypeFormattingEdits; },
/* harmony export */   Zg: function() { return /* binding */ alertFormattingEdits; },
/* harmony export */   x$: function() { return /* binding */ formatDocumentRangesWithSelectedProvider; },
/* harmony export */   xC: function() { return /* binding */ FormattingConflicts; }
/* harmony export */ });
/* unused harmony exports getRealAndSyntheticDocumentFormattersOrdered, formatDocumentRangesWithProvider, formatDocumentWithProvider, getDocumentRangeFormattingEditsUntilResult, getDocumentFormattingEditsUntilResult */
/* harmony import */ var _base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70385);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33899);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29811);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50847);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64202);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41558);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28935);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56946);
/* harmony import */ var _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1930);
/* harmony import */ var _browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87016);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(13372);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76584);
/* harmony import */ var _common_core_selection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(74980);
/* harmony import */ var _common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15130);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7699);
/* harmony import */ var _formattingEdit_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(95250);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23330);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77783);
/* harmony import */ var _platform_extensions_common_extensions_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(81666);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38048);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58431);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28876);
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






















function alertFormattingEdits(edits) {
    edits = edits.filter(edit => edit.range);
    if (!edits.length) {
        return;
    }
    let { range } = edits[0];
    for (let i = 1; i < edits.length; i++) {
        range = _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.plusRange(range, edits[i].range);
    }
    const { startLineNumber, endLineNumber } = range;
    if (startLineNumber === endLineNumber) {
        if (edits.length === 1) {
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__/* .alert */ .Z9)(_nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('hint11', "Made 1 formatting edit on line {0}", startLineNumber));
        }
        else {
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__/* .alert */ .Z9)(_nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('hintn1', "Made {0} formatting edits on line {1}", edits.length, startLineNumber));
        }
    }
    else {
        if (edits.length === 1) {
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__/* .alert */ .Z9)(_nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('hint1n', "Made 1 formatting edit between lines {0} and {1}", startLineNumber, endLineNumber));
        }
        else {
            (0,_base_browser_ui_aria_aria_js__WEBPACK_IMPORTED_MODULE_0__/* .alert */ .Z9)(_nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('hintnn', "Made {0} formatting edits between lines {1} and {2}", edits.length, startLineNumber, endLineNumber));
        }
    }
}
function getRealAndSyntheticDocumentFormattersOrdered(documentFormattingEditProvider, documentRangeFormattingEditProvider, model) {
    const result = [];
    const seen = new _platform_extensions_common_extensions_js__WEBPACK_IMPORTED_MODULE_17__/* .ExtensionIdentifierSet */ .o();
    // (1) add all document formatter
    const docFormatter = documentFormattingEditProvider.ordered(model);
    for (const formatter of docFormatter) {
        result.push(formatter);
        if (formatter.extensionId) {
            seen.add(formatter.extensionId);
        }
    }
    // (2) add all range formatter as document formatter (unless the same extension already did that)
    const rangeFormatter = documentRangeFormattingEditProvider.ordered(model);
    for (const formatter of rangeFormatter) {
        if (formatter.extensionId) {
            if (seen.has(formatter.extensionId)) {
                continue;
            }
            seen.add(formatter.extensionId);
        }
        result.push({
            displayName: formatter.displayName,
            extensionId: formatter.extensionId,
            provideDocumentFormattingEdits(model, options, token) {
                return formatter.provideDocumentRangeFormattingEdits(model, model.getFullModelRange(), options, token);
            }
        });
    }
    return result;
}
class FormattingConflicts {
    static setFormatterSelector(selector) {
        const remove = FormattingConflicts._selectors.unshift(selector);
        return { dispose: remove };
    }
    static select(formatter, document, mode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (formatter.length === 0) {
                return undefined;
            }
            const selector = _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_4__/* .Iterable */ .$.first(FormattingConflicts._selectors);
            if (selector) {
                return yield selector(formatter, document, mode);
            }
            return undefined;
        });
    }
}
FormattingConflicts._selectors = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_5__/* .LinkedList */ .S();
function formatDocumentRangesWithSelectedProvider(accessor, editorOrModel, rangeOrRanges, mode, progress, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_13__/* .IInstantiationService */ .TG);
        const { documentRangeFormattingEditProvider: documentRangeFormattingEditProviderRegistry } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageFeaturesService */ .p);
        const model = (0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel) ? editorOrModel.getModel() : editorOrModel;
        const provider = documentRangeFormattingEditProviderRegistry.ordered(model);
        const selected = yield FormattingConflicts.select(provider, model, mode);
        if (selected) {
            progress.report(selected);
            yield instaService.invokeFunction(formatDocumentRangesWithProvider, selected, editorOrModel, rangeOrRanges, token);
        }
    });
}
function formatDocumentRangesWithProvider(accessor, provider, editorOrModel, rangeOrRanges, token) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const workerService = accessor.get(_common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__/* .IEditorWorkerService */ .p);
        const logService = accessor.get(_platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_15__/* .ILogService */ .VZ);
        let model;
        let cts;
        if ((0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel)) {
            model = editorOrModel.getModel();
            cts = new _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorStateCancellationTokenSource */ .Dl(editorOrModel, 1 /* CodeEditorStateFlag.Value */ | 4 /* CodeEditorStateFlag.Position */, undefined, token);
        }
        else {
            model = editorOrModel;
            cts = new _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_7__/* .TextModelCancellationTokenSource */ .YQ(editorOrModel, token);
        }
        // make sure that ranges don't overlap nor touch each other
        const ranges = [];
        let len = 0;
        for (const range of (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .asArray */ ._2)(rangeOrRanges).sort(_common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.compareRangesUsingStarts)) {
            if (len > 0 && _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.areIntersectingOrTouching(ranges[len - 1], range)) {
                ranges[len - 1] = _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.fromPositions(ranges[len - 1].getStartPosition(), range.getEndPosition());
            }
            else {
                len = ranges.push(range);
            }
        }
        const computeEdits = (range) => __awaiter(this, void 0, void 0, function* () {
            var _c, _d;
            logService.trace(`[format][provideDocumentRangeFormattingEdits] (request)`, (_c = provider.extensionId) === null || _c === void 0 ? void 0 : _c.value, range);
            const result = (yield provider.provideDocumentRangeFormattingEdits(model, range, model.getFormattingOptions(), cts.token)) || [];
            logService.trace(`[format][provideDocumentRangeFormattingEdits] (response)`, (_d = provider.extensionId) === null || _d === void 0 ? void 0 : _d.value, result);
            return result;
        });
        const hasIntersectingEdit = (a, b) => {
            if (!a.length || !b.length) {
                return false;
            }
            // quick exit if the list of ranges are completely unrelated [O(n)]
            const mergedA = a.reduce((acc, val) => { return _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.plusRange(acc, val.range); }, a[0].range);
            if (!b.some(x => { return _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.intersectRanges(mergedA, x.range); })) {
                return false;
            }
            // fallback to a complete check [O(n^2)]
            for (const edit of a) {
                for (const otherEdit of b) {
                    if (_common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.intersectRanges(edit.range, otherEdit.range)) {
                        return true;
                    }
                }
            }
            return false;
        };
        const allEdits = [];
        const rawEditsList = [];
        try {
            if (typeof provider.provideDocumentRangesFormattingEdits === 'function') {
                logService.trace(`[format][provideDocumentRangeFormattingEdits] (request)`, (_a = provider.extensionId) === null || _a === void 0 ? void 0 : _a.value, ranges);
                const result = (yield provider.provideDocumentRangesFormattingEdits(model, ranges, model.getFormattingOptions(), cts.token)) || [];
                logService.trace(`[format][provideDocumentRangeFormattingEdits] (response)`, (_b = provider.extensionId) === null || _b === void 0 ? void 0 : _b.value, result);
                rawEditsList.push(result);
            }
            else {
                for (const range of ranges) {
                    if (cts.token.isCancellationRequested) {
                        return true;
                    }
                    rawEditsList.push(yield computeEdits(range));
                }
                for (let i = 0; i < ranges.length; ++i) {
                    for (let j = i + 1; j < ranges.length; ++j) {
                        if (cts.token.isCancellationRequested) {
                            return true;
                        }
                        if (hasIntersectingEdit(rawEditsList[i], rawEditsList[j])) {
                            // Merge ranges i and j into a single range, recompute the associated edits
                            const mergedRange = _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.plusRange(ranges[i], ranges[j]);
                            const edits = yield computeEdits(mergedRange);
                            ranges.splice(j, 1);
                            ranges.splice(i, 1);
                            ranges.push(mergedRange);
                            rawEditsList.splice(j, 1);
                            rawEditsList.splice(i, 1);
                            rawEditsList.push(edits);
                            // Restart scanning
                            i = 0;
                            j = 0;
                        }
                    }
                }
            }
            for (const rawEdits of rawEditsList) {
                if (cts.token.isCancellationRequested) {
                    return true;
                }
                const minimalEdits = yield workerService.computeMoreMinimalEdits(model.uri, rawEdits);
                if (minimalEdits) {
                    allEdits.push(...minimalEdits);
                }
            }
        }
        finally {
            cts.dispose();
        }
        if (allEdits.length === 0) {
            return false;
        }
        if ((0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel)) {
            // use editor to apply edits
            _formattingEdit_js__WEBPACK_IMPORTED_MODULE_18__/* .FormattingEdit */ .V.execute(editorOrModel, allEdits, true);
            alertFormattingEdits(allEdits);
            editorOrModel.revealPositionInCenterIfOutsideViewport(editorOrModel.getPosition(), 1 /* ScrollType.Immediate */);
        }
        else {
            // use model to apply edits
            const [{ range }] = allEdits;
            const initialSelection = new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_19__/* .Selection */ .Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
            model.pushEditOperations([initialSelection], allEdits.map(edit => {
                return {
                    text: edit.text,
                    range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.lift(edit.range),
                    forceMoveMarkers: true
                };
            }), undoEdits => {
                for (const { range } of undoEdits) {
                    if (_common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.areIntersectingOrTouching(range, initialSelection)) {
                        return [new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_19__/* .Selection */ .Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn)];
                    }
                }
                return null;
            });
        }
        return true;
    });
}
function formatDocumentWithSelectedProvider(accessor, editorOrModel, mode, progress, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_13__/* .IInstantiationService */ .TG);
        const languageFeaturesService = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageFeaturesService */ .p);
        const model = (0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel) ? editorOrModel.getModel() : editorOrModel;
        const provider = getRealAndSyntheticDocumentFormattersOrdered(languageFeaturesService.documentFormattingEditProvider, languageFeaturesService.documentRangeFormattingEditProvider, model);
        const selected = yield FormattingConflicts.select(provider, model, mode);
        if (selected) {
            progress.report(selected);
            yield instaService.invokeFunction(formatDocumentWithProvider, selected, editorOrModel, mode, token);
        }
    });
}
function formatDocumentWithProvider(accessor, provider, editorOrModel, mode, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const workerService = accessor.get(_common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__/* .IEditorWorkerService */ .p);
        let model;
        let cts;
        if ((0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel)) {
            model = editorOrModel.getModel();
            cts = new _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorStateCancellationTokenSource */ .Dl(editorOrModel, 1 /* CodeEditorStateFlag.Value */ | 4 /* CodeEditorStateFlag.Position */, undefined, token);
        }
        else {
            model = editorOrModel;
            cts = new _editorState_browser_editorState_js__WEBPACK_IMPORTED_MODULE_7__/* .TextModelCancellationTokenSource */ .YQ(editorOrModel, token);
        }
        let edits;
        try {
            const rawEdits = yield provider.provideDocumentFormattingEdits(model, model.getFormattingOptions(), cts.token);
            edits = yield workerService.computeMoreMinimalEdits(model.uri, rawEdits);
            if (cts.token.isCancellationRequested) {
                return true;
            }
        }
        finally {
            cts.dispose();
        }
        if (!edits || edits.length === 0) {
            return false;
        }
        if ((0,_browser_editorBrowser_js__WEBPACK_IMPORTED_MODULE_8__/* .isCodeEditor */ .CL)(editorOrModel)) {
            // use editor to apply edits
            _formattingEdit_js__WEBPACK_IMPORTED_MODULE_18__/* .FormattingEdit */ .V.execute(editorOrModel, edits, mode !== 2 /* FormattingMode.Silent */);
            if (mode !== 2 /* FormattingMode.Silent */) {
                alertFormattingEdits(edits);
                editorOrModel.revealPositionInCenterIfOutsideViewport(editorOrModel.getPosition(), 1 /* ScrollType.Immediate */);
            }
        }
        else {
            // use model to apply edits
            const [{ range }] = edits;
            const initialSelection = new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_19__/* .Selection */ .Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
            model.pushEditOperations([initialSelection], edits.map(edit => {
                return {
                    text: edit.text,
                    range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.lift(edit.range),
                    forceMoveMarkers: true
                };
            }), undoEdits => {
                for (const { range } of undoEdits) {
                    if (_common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.areIntersectingOrTouching(range, initialSelection)) {
                        return [new _common_core_selection_js__WEBPACK_IMPORTED_MODULE_19__/* .Selection */ .Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn)];
                    }
                }
                return null;
            });
        }
        return true;
    });
}
function getDocumentRangeFormattingEditsUntilResult(workerService, languageFeaturesService, model, range, options, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = languageFeaturesService.documentRangeFormattingEditProvider.ordered(model);
        for (const provider of providers) {
            const rawEdits = yield Promise.resolve(provider.provideDocumentRangeFormattingEdits(model, range, options, token)).catch(_base_common_errors_js__WEBPACK_IMPORTED_MODULE_3__/* .onUnexpectedExternalError */ .Cp);
            if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonEmptyArray */ .Of)(rawEdits)) {
                return yield workerService.computeMoreMinimalEdits(model.uri, rawEdits);
            }
        }
        return undefined;
    });
}
function getDocumentFormattingEditsUntilResult(workerService, languageFeaturesService, model, options, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = getRealAndSyntheticDocumentFormattersOrdered(languageFeaturesService.documentFormattingEditProvider, languageFeaturesService.documentRangeFormattingEditProvider, model);
        for (const provider of providers) {
            const rawEdits = yield Promise.resolve(provider.provideDocumentFormattingEdits(model, options, token)).catch(_base_common_errors_js__WEBPACK_IMPORTED_MODULE_3__/* .onUnexpectedExternalError */ .Cp);
            if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonEmptyArray */ .Of)(rawEdits)) {
                return yield workerService.computeMoreMinimalEdits(model.uri, rawEdits);
            }
        }
        return undefined;
    });
}
function getOnTypeFormattingEdits(workerService, languageFeaturesService, model, position, ch, options, token) {
    const providers = languageFeaturesService.onTypeFormattingEditProvider.ordered(model);
    if (providers.length === 0) {
        return Promise.resolve(undefined);
    }
    if (providers[0].autoFormatTriggerCharacters.indexOf(ch) < 0) {
        return Promise.resolve(undefined);
    }
    return Promise.resolve(providers[0].provideOnTypeFormattingEdits(model, position, ch, options, token)).catch(_base_common_errors_js__WEBPACK_IMPORTED_MODULE_3__/* .onUnexpectedExternalError */ .Cp).then(edits => {
        return workerService.computeMoreMinimalEdits(model.uri, edits);
    });
}
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__/* .CommandsRegistry */ .P.registerCommand('_executeFormatRangeProvider', function (accessor, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [resource, range, options] = args;
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_6__/* .URI */ .o.isUri(resource));
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(_common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.isIRange(range));
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_10__/* .ITextModelService */ .S);
        const workerService = accessor.get(_common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__/* .IEditorWorkerService */ .p);
        const languageFeaturesService = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageFeaturesService */ .p);
        const reference = yield resolverService.createModelReference(resource);
        try {
            return getDocumentRangeFormattingEditsUntilResult(workerService, languageFeaturesService, reference.object.textEditorModel, _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.lift(range), options, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__/* .CancellationToken */ .T.None);
        }
        finally {
            reference.dispose();
        }
    });
});
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__/* .CommandsRegistry */ .P.registerCommand('_executeFormatDocumentProvider', function (accessor, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [resource, options] = args;
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_6__/* .URI */ .o.isUri(resource));
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_10__/* .ITextModelService */ .S);
        const workerService = accessor.get(_common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__/* .IEditorWorkerService */ .p);
        const languageFeaturesService = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageFeaturesService */ .p);
        const reference = yield resolverService.createModelReference(resource);
        try {
            return getDocumentFormattingEditsUntilResult(workerService, languageFeaturesService, reference.object.textEditorModel, options, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__/* .CancellationToken */ .T.None);
        }
        finally {
            reference.dispose();
        }
    });
});
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__/* .CommandsRegistry */ .P.registerCommand('_executeFormatOnTypeProvider', function (accessor, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [resource, position, ch, options] = args;
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_6__/* .URI */ .o.isUri(resource));
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(_common_core_position_js__WEBPACK_IMPORTED_MODULE_21__/* .Position */ .L.isIPosition(position));
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_20__/* .assertType */ .p_)(typeof ch === 'string');
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_10__/* .ITextModelService */ .S);
        const workerService = accessor.get(_common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_9__/* .IEditorWorkerService */ .p);
        const languageFeaturesService = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageFeaturesService */ .p);
        const reference = yield resolverService.createModelReference(resource);
        try {
            return getOnTypeFormattingEdits(workerService, languageFeaturesService, reference.object.textEditorModel, _common_core_position_js__WEBPACK_IMPORTED_MODULE_21__/* .Position */ .L.lift(position), ch, options, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__/* .CancellationToken */ .T.None);
        }
        finally {
            reference.dispose();
        }
    });
});


/***/ }),

/***/ 49416:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29811);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50847);
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17106);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79027);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91213);
/* harmony import */ var _browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74312);
/* harmony import */ var _common_core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43332);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(76584);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94872);
/* harmony import */ var _common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15130);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58431);
/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(22580);
/* harmony import */ var _formattingEdit_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(95250);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23330);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77783);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(81043);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38048);
/* harmony import */ var _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(99871);
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



















let FormatOnType = class FormatOnType {
    constructor(_editor, _languageFeaturesService, _workerService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._workerService = _workerService;
        this._disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableStore */ .SL();
        this._sessionDisposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableStore */ .SL();
        this._disposables.add(_languageFeaturesService.onTypeFormattingEditProvider.onDidChange(this._update, this));
        this._disposables.add(_editor.onDidChangeModel(() => this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(() => this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(54 /* EditorOption.formatOnType */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._disposables.dispose();
        this._sessionDisposables.dispose();
    }
    _update() {
        // clean up
        this._sessionDisposables.clear();
        // we are disabled
        if (!this._editor.getOption(54 /* EditorOption.formatOnType */)) {
            return;
        }
        // no model
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        // no support
        const [support] = this._languageFeaturesService.onTypeFormattingEditProvider.ordered(model);
        if (!support || !support.autoFormatTriggerCharacters) {
            return;
        }
        // register typing listeners that will trigger the format
        const triggerChars = new _common_core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_16__/* .CharacterSet */ .q();
        for (const ch of support.autoFormatTriggerCharacters) {
            triggerChars.add(ch.charCodeAt(0));
        }
        this._sessionDisposables.add(this._editor.onDidType((text) => {
            const lastCharCode = text.charCodeAt(text.length - 1);
            if (triggerChars.has(lastCharCode)) {
                this._trigger(String.fromCharCode(lastCharCode));
            }
        }));
    }
    _trigger(ch) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (this._editor.getSelections().length > 1 || !this._editor.getSelection().isEmpty()) {
            return;
        }
        const model = this._editor.getModel();
        const position = this._editor.getPosition();
        const cts = new _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationTokenSource */ .A();
        // install a listener that checks if edits happens before the
        // position on which we format right now. If so, we won't
        // apply the format edits
        const unbind = this._editor.onDidChangeModelContent((e) => {
            if (e.isFlush) {
                // a model.setValue() was called
                // cancel only once
                cts.cancel();
                unbind.dispose();
                return;
            }
            for (let i = 0, len = e.changes.length; i < len; i++) {
                const change = e.changes[i];
                if (change.range.endLineNumber <= position.lineNumber) {
                    // cancel only once
                    cts.cancel();
                    unbind.dispose();
                    return;
                }
            }
        });
        (0,_format_js__WEBPACK_IMPORTED_MODULE_10__/* .getOnTypeFormattingEdits */ .Qs)(this._workerService, this._languageFeaturesService, model, position, ch, model.getFormattingOptions(), cts.token).then(edits => {
            if (cts.token.isCancellationRequested) {
                return;
            }
            if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .isNonEmptyArray */ .Of)(edits)) {
                _formattingEdit_js__WEBPACK_IMPORTED_MODULE_17__/* .FormattingEdit */ .V.execute(this._editor, edits, true);
                (0,_format_js__WEBPACK_IMPORTED_MODULE_10__/* .alertFormattingEdits */ .Zg)(edits);
            }
        }).finally(() => {
            unbind.dispose();
        });
    }
};
FormatOnType.ID = 'editor.contrib.autoFormat';
FormatOnType = __decorate([
    __param(1, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageFeaturesService */ .p),
    __param(2, _common_services_editorWorker_js__WEBPACK_IMPORTED_MODULE_8__/* .IEditorWorkerService */ .p)
], FormatOnType);
let FormatOnPaste = class FormatOnPaste {
    constructor(editor, _languageFeaturesService, _instantiationService) {
        this.editor = editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._instantiationService = _instantiationService;
        this._callOnDispose = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableStore */ .SL();
        this._callOnModel = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .DisposableStore */ .SL();
        this._callOnDispose.add(editor.onDidChangeConfiguration(() => this._update()));
        this._callOnDispose.add(editor.onDidChangeModel(() => this._update()));
        this._callOnDispose.add(editor.onDidChangeModelLanguage(() => this._update()));
        this._callOnDispose.add(_languageFeaturesService.documentRangeFormattingEditProvider.onDidChange(this._update, this));
    }
    dispose() {
        this._callOnDispose.dispose();
        this._callOnModel.dispose();
    }
    _update() {
        // clean up
        this._callOnModel.clear();
        // we are disabled
        if (!this.editor.getOption(53 /* EditorOption.formatOnPaste */)) {
            return;
        }
        // no model
        if (!this.editor.hasModel()) {
            return;
        }
        // no formatter
        if (!this._languageFeaturesService.documentRangeFormattingEditProvider.has(this.editor.getModel())) {
            return;
        }
        this._callOnModel.add(this.editor.onDidPaste(({ range }) => this._trigger(range)));
    }
    _trigger(range) {
        if (!this.editor.hasModel()) {
            return;
        }
        if (this.editor.getSelections().length > 1) {
            return;
        }
        this._instantiationService.invokeFunction(_format_js__WEBPACK_IMPORTED_MODULE_10__/* .formatDocumentRangesWithSelectedProvider */ .x$, this.editor, range, 2 /* FormattingMode.Silent */, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__/* .Progress */ .Ex.None, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None).catch(_base_common_errors_js__WEBPACK_IMPORTED_MODULE_2__/* .onUnexpectedError */ .dL);
    }
};
FormatOnPaste.ID = 'editor.contrib.formatOnPaste';
FormatOnPaste = __decorate([
    __param(1, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageFeaturesService */ .p),
    __param(2, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_14__/* .IInstantiationService */ .TG)
], FormatOnPaste);
class FormatDocumentAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.formatDocument',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('formatDocument.label', "Format Document"),
            alias: 'Format Document',
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.notInCompositeEditor, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.writable, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.hasDocumentFormattingProvider),
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 36 /* KeyCode.KeyF */,
                linux: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 39 /* KeyCode.KeyI */ },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.3
            }
        });
    }
    run(accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (editor.hasModel()) {
                const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_14__/* .IInstantiationService */ .TG);
                const progressService = accessor.get(_platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__/* .IEditorProgressService */ .ek);
                yield progressService.showWhile(instaService.invokeFunction(_format_js__WEBPACK_IMPORTED_MODULE_10__/* .formatDocumentWithSelectedProvider */ .Qq, editor, 1 /* FormattingMode.Explicit */, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__/* .Progress */ .Ex.None, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None), 250);
            }
        });
    }
}
class FormatSelectionAction extends _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.formatSelection',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_11__/* .localize */ .NC('formatSelection.label', "Format Selection"),
            alias: 'Format Selection',
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.writable, _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.hasDocumentSelectionFormattingProvider),
            kbOpts: {
                kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.editorTextFocus,
                primary: (0,_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_3__/* .KeyChord */ .gx)(2048 /* KeyMod.CtrlCmd */ | 41 /* KeyCode.KeyK */, 2048 /* KeyMod.CtrlCmd */ | 36 /* KeyCode.KeyF */),
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                when: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_7__/* .EditorContextKeys */ .u.hasNonEmptySelection,
                group: '1_modification',
                order: 1.31
            }
        });
    }
    run(accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!editor.hasModel()) {
                return;
            }
            const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_14__/* .IInstantiationService */ .TG);
            const model = editor.getModel();
            const ranges = editor.getSelections().map(range => {
                return range.isEmpty()
                    ? new _common_core_range_js__WEBPACK_IMPORTED_MODULE_18__/* .Range */ .e(range.startLineNumber, 1, range.startLineNumber, model.getLineMaxColumn(range.startLineNumber))
                    : range;
            });
            const progressService = accessor.get(_platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__/* .IEditorProgressService */ .ek);
            yield progressService.showWhile(instaService.invokeFunction(_format_js__WEBPACK_IMPORTED_MODULE_10__/* .formatDocumentRangesWithSelectedProvider */ .x$, editor, ranges, 1 /* FormattingMode.Explicit */, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_15__/* .Progress */ .Ex.None, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None), 250);
        });
    }
}
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .registerEditorContribution */ ._K)(FormatOnType.ID, FormatOnType, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .registerEditorContribution */ ._K)(FormatOnPaste.ID, FormatOnPaste, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .registerEditorAction */ .Qr)(FormatDocumentAction);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_5__/* .registerEditorAction */ .Qr)(FormatSelectionAction);
// this is the old format action that does both (format document OR format selection)
// and we keep it here such that existing keybinding configurations etc will still work
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__/* .CommandsRegistry */ .P.registerCommand('editor.action.format', (accessor) => __awaiter(void 0, void 0, void 0, function* () {
    const editor = accessor.get(_browser_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_6__/* .ICodeEditorService */ .$).getFocusedCodeEditor();
    if (!editor || !editor.hasModel()) {
        return;
    }
    const commandService = accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_12__/* .ICommandService */ .H);
    if (editor.getSelection().isEmpty()) {
        yield commandService.executeCommand('editor.action.formatDocument');
    }
    else {
        yield commandService.executeCommand('editor.action.formatSelection');
    }
}));


/***/ }),

/***/ 95250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ FormattingEdit; }
/* harmony export */ });
/* harmony import */ var _common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87306);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76584);
/* harmony import */ var _browser_stableEditorScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49427);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class FormattingEdit {
    static _handleEolEdits(editor, edits) {
        let newEol = undefined;
        const singleEdits = [];
        for (const edit of edits) {
            if (typeof edit.eol === 'number') {
                newEol = edit.eol;
            }
            if (edit.range && typeof edit.text === 'string') {
                singleEdits.push(edit);
            }
        }
        if (typeof newEol === 'number') {
            if (editor.hasModel()) {
                editor.getModel().pushEOL(newEol);
            }
        }
        return singleEdits;
    }
    static _isFullModelReplaceEdit(editor, edit) {
        if (!editor.hasModel()) {
            return false;
        }
        const model = editor.getModel();
        const editRange = model.validateRange(edit.range);
        const fullModelRange = model.getFullModelRange();
        return fullModelRange.equalsRange(editRange);
    }
    static execute(editor, _edits, addUndoStops) {
        if (addUndoStops) {
            editor.pushUndoStop();
        }
        const scrollState = _browser_stableEditorScroll_js__WEBPACK_IMPORTED_MODULE_0__/* .StableEditorScrollState */ .Z.capture(editor);
        const edits = FormattingEdit._handleEolEdits(editor, _edits);
        if (edits.length === 1 && FormattingEdit._isFullModelReplaceEdit(editor, edits[0])) {
            // We use replace semantics and hope that markers stay put...
            editor.executeEdits('formatEditsCommand', edits.map(edit => _common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_1__/* .EditOperation */ .h.replace(_common_core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e.lift(edit.range), edit.text)));
        }
        else {
            editor.executeEdits('formatEditsCommand', edits.map(edit => _common_core_editOperation_js__WEBPACK_IMPORTED_MODULE_1__/* .EditOperation */ .h.replaceMove(_common_core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e.lift(edit.range), edit.text)));
        }
        if (addUndoStops) {
            editor.pushUndoStop();
        }
        scrollState.restoreRelativeVerticalPositionOfCursor(editor);
    }
}


/***/ }),

/***/ 89246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MarkerController: function() { return /* binding */ MarkerController; },
  NextMarkerAction: function() { return /* binding */ NextMarkerAction; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js
var codeEditorService = __webpack_require__(74312);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/linkedList.js
var linkedList = __webpack_require__(41558);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js
var extensions = __webpack_require__(9546);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/markers/common/markers.js
var markers = __webpack_require__(74591);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/markerNavigationService.js
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











class MarkerCoordinate {
    constructor(marker, index, total) {
        this.marker = marker;
        this.index = index;
        this.total = total;
    }
}
let MarkerList = class MarkerList {
    constructor(resourceFilter, _markerService, _configService) {
        this._markerService = _markerService;
        this._configService = _configService;
        this._onDidChange = new common_event/* Emitter */.Q5();
        this.onDidChange = this._onDidChange.event;
        this._dispoables = new lifecycle/* DisposableStore */.SL();
        this._markers = [];
        this._nextIdx = -1;
        if (uri/* URI */.o.isUri(resourceFilter)) {
            this._resourceFilter = uri => uri.toString() === resourceFilter.toString();
        }
        else if (resourceFilter) {
            this._resourceFilter = resourceFilter;
        }
        const compareOrder = this._configService.getValue('problems.sortOrder');
        const compareMarker = (a, b) => {
            let res = (0,strings/* compare */.qu)(a.resource.toString(), b.resource.toString());
            if (res === 0) {
                if (compareOrder === 'position') {
                    res = core_range/* Range */.e.compareRangesUsingStarts(a, b) || markers/* MarkerSeverity */.ZL.compare(a.severity, b.severity);
                }
                else {
                    res = markers/* MarkerSeverity */.ZL.compare(a.severity, b.severity) || core_range/* Range */.e.compareRangesUsingStarts(a, b);
                }
            }
            return res;
        };
        const updateMarker = () => {
            this._markers = this._markerService.read({
                resource: uri/* URI */.o.isUri(resourceFilter) ? resourceFilter : undefined,
                severities: markers/* MarkerSeverity */.ZL.Error | markers/* MarkerSeverity */.ZL.Warning | markers/* MarkerSeverity */.ZL.Info
            });
            if (typeof resourceFilter === 'function') {
                this._markers = this._markers.filter(m => this._resourceFilter(m.resource));
            }
            this._markers.sort(compareMarker);
        };
        updateMarker();
        this._dispoables.add(_markerService.onMarkerChanged(uris => {
            if (!this._resourceFilter || uris.some(uri => this._resourceFilter(uri))) {
                updateMarker();
                this._nextIdx = -1;
                this._onDidChange.fire();
            }
        }));
    }
    dispose() {
        this._dispoables.dispose();
        this._onDidChange.dispose();
    }
    matches(uri) {
        if (!this._resourceFilter && !uri) {
            return true;
        }
        if (!this._resourceFilter || !uri) {
            return false;
        }
        return this._resourceFilter(uri);
    }
    get selected() {
        const marker = this._markers[this._nextIdx];
        return marker && new MarkerCoordinate(marker, this._nextIdx + 1, this._markers.length);
    }
    _initIdx(model, position, fwd) {
        let found = false;
        let idx = this._markers.findIndex(marker => marker.resource.toString() === model.uri.toString());
        if (idx < 0) {
            idx = (0,arrays/* binarySearch */.ry)(this._markers, { resource: model.uri }, (a, b) => (0,strings/* compare */.qu)(a.resource.toString(), b.resource.toString()));
            if (idx < 0) {
                idx = ~idx;
            }
        }
        for (let i = idx; i < this._markers.length; i++) {
            let range = core_range/* Range */.e.lift(this._markers[i]);
            if (range.isEmpty()) {
                const word = model.getWordAtPosition(range.getStartPosition());
                if (word) {
                    range = new core_range/* Range */.e(range.startLineNumber, word.startColumn, range.startLineNumber, word.endColumn);
                }
            }
            if (position && (range.containsPosition(position) || position.isBeforeOrEqual(range.getStartPosition()))) {
                this._nextIdx = i;
                found = true;
                break;
            }
            if (this._markers[i].resource.toString() !== model.uri.toString()) {
                break;
            }
        }
        if (!found) {
            // after the last change
            this._nextIdx = fwd ? 0 : this._markers.length - 1;
        }
        if (this._nextIdx < 0) {
            this._nextIdx = this._markers.length - 1;
        }
    }
    resetIndex() {
        this._nextIdx = -1;
    }
    move(fwd, model, position) {
        if (this._markers.length === 0) {
            return false;
        }
        const oldIdx = this._nextIdx;
        if (this._nextIdx === -1) {
            this._initIdx(model, position, fwd);
        }
        else if (fwd) {
            this._nextIdx = (this._nextIdx + 1) % this._markers.length;
        }
        else if (!fwd) {
            this._nextIdx = (this._nextIdx - 1 + this._markers.length) % this._markers.length;
        }
        if (oldIdx !== this._nextIdx) {
            return true;
        }
        return false;
    }
    find(uri, position) {
        let idx = this._markers.findIndex(marker => marker.resource.toString() === uri.toString());
        if (idx < 0) {
            return undefined;
        }
        for (; idx < this._markers.length; idx++) {
            if (core_range/* Range */.e.containsPosition(this._markers[idx], position)) {
                return new MarkerCoordinate(this._markers[idx], idx + 1, this._markers.length);
            }
        }
        return undefined;
    }
};
MarkerList = __decorate([
    __param(1, markers/* IMarkerService */.lT),
    __param(2, configuration/* IConfigurationService */.Ui)
], MarkerList);
const IMarkerNavigationService = (0,instantiation/* createDecorator */.yh)('IMarkerNavigationService');
let MarkerNavigationService = class MarkerNavigationService {
    constructor(_markerService, _configService) {
        this._markerService = _markerService;
        this._configService = _configService;
        this._provider = new linkedList/* LinkedList */.S();
    }
    getMarkerList(resource) {
        for (const provider of this._provider) {
            const result = provider.getMarkerList(resource);
            if (result) {
                return result;
            }
        }
        // default
        return new MarkerList(resource, this._markerService, this._configService);
    }
};
MarkerNavigationService = __decorate([
    __param(0, markers/* IMarkerService */.lT),
    __param(1, configuration/* IConfigurationService */.Ui)
], MarkerNavigationService);
(0,extensions/* registerSingleton */.z)(IMarkerNavigationService, MarkerNavigationService, 1 /* InstantiationType.Delayed */);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(3145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/iconRegistry.js
var iconRegistry = __webpack_require__(95153);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/scrollbar/scrollableElement.js + 7 modules
var scrollableElement = __webpack_require__(47049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/color.js
var color = __webpack_require__(2157);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(8506);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/media/gotoErrorWidget.css
var gotoErrorWidget = __webpack_require__(78727);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/media/gotoErrorWidget.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(gotoErrorWidget/* default */.Z, options);




       /* harmony default export */ var media_gotoErrorWidget = (gotoErrorWidget/* default */.Z && gotoErrorWidget/* default */.Z.locals ? gotoErrorWidget/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/peekView/browser/peekView.js + 1 modules
var peekView = __webpack_require__(9152);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js + 2 modules
var menuEntryActionViewItem = __webpack_require__(69163);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/label/common/label.js
var label = __webpack_require__(74805);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/severityIcon/browser/severityIcon.js + 1 modules
var severityIcon = __webpack_require__(59513);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoErrorWidget.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var gotoErrorWidget_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var gotoErrorWidget_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






















class MessageWidget {
    constructor(parent, editor, onRelatedInformation, _openerService, _labelService) {
        this._openerService = _openerService;
        this._labelService = _labelService;
        this._lines = 0;
        this._longestLineLength = 0;
        this._relatedDiagnostics = new WeakMap();
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._editor = editor;
        const domNode = document.createElement('div');
        domNode.className = 'descriptioncontainer';
        this._messageBlock = document.createElement('div');
        this._messageBlock.classList.add('message');
        this._messageBlock.setAttribute('aria-live', 'assertive');
        this._messageBlock.setAttribute('role', 'alert');
        domNode.appendChild(this._messageBlock);
        this._relatedBlock = document.createElement('div');
        domNode.appendChild(this._relatedBlock);
        this._disposables.add(dom/* addStandardDisposableListener */.mu(this._relatedBlock, 'click', event => {
            event.preventDefault();
            const related = this._relatedDiagnostics.get(event.target);
            if (related) {
                onRelatedInformation(related);
            }
        }));
        this._scrollable = new scrollableElement/* ScrollableElement */.NB(domNode, {
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            vertical: 1 /* ScrollbarVisibility.Auto */,
            useShadows: false,
            horizontalScrollbarSize: 6,
            verticalScrollbarSize: 6
        });
        parent.appendChild(this._scrollable.getDomNode());
        this._disposables.add(this._scrollable.onScroll(e => {
            domNode.style.left = `-${e.scrollLeft}px`;
            domNode.style.top = `-${e.scrollTop}px`;
        }));
        this._disposables.add(this._scrollable);
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this._disposables);
    }
    update(marker) {
        const { source, message, relatedInformation, code } = marker;
        let sourceAndCodeLength = ((source === null || source === void 0 ? void 0 : source.length) || 0) + '()'.length;
        if (code) {
            if (typeof code === 'string') {
                sourceAndCodeLength += code.length;
            }
            else {
                sourceAndCodeLength += code.value.length;
            }
        }
        const lines = (0,strings/* splitLines */.uq)(message);
        this._lines = lines.length;
        this._longestLineLength = 0;
        for (const line of lines) {
            this._longestLineLength = Math.max(line.length + sourceAndCodeLength, this._longestLineLength);
        }
        dom/* clearNode */.PO(this._messageBlock);
        this._messageBlock.setAttribute('aria-label', this.getAriaLabel(marker));
        this._editor.applyFontInfo(this._messageBlock);
        let lastLineElement = this._messageBlock;
        for (const line of lines) {
            lastLineElement = document.createElement('div');
            lastLineElement.innerText = line;
            if (line === '') {
                lastLineElement.style.height = this._messageBlock.style.lineHeight;
            }
            this._messageBlock.appendChild(lastLineElement);
        }
        if (source || code) {
            const detailsElement = document.createElement('span');
            detailsElement.classList.add('details');
            lastLineElement.appendChild(detailsElement);
            if (source) {
                const sourceElement = document.createElement('span');
                sourceElement.innerText = source;
                sourceElement.classList.add('source');
                detailsElement.appendChild(sourceElement);
            }
            if (code) {
                if (typeof code === 'string') {
                    const codeElement = document.createElement('span');
                    codeElement.innerText = `(${code})`;
                    codeElement.classList.add('code');
                    detailsElement.appendChild(codeElement);
                }
                else {
                    this._codeLink = dom.$('a.code-link');
                    this._codeLink.setAttribute('href', `${code.target.toString()}`);
                    this._codeLink.onclick = (e) => {
                        this._openerService.open(code.target, { allowCommands: true });
                        e.preventDefault();
                        e.stopPropagation();
                    };
                    const codeElement = dom/* append */.R3(this._codeLink, dom.$('span'));
                    codeElement.innerText = code.value;
                    detailsElement.appendChild(this._codeLink);
                }
            }
        }
        dom/* clearNode */.PO(this._relatedBlock);
        this._editor.applyFontInfo(this._relatedBlock);
        if ((0,arrays/* isNonEmptyArray */.Of)(relatedInformation)) {
            const relatedInformationNode = this._relatedBlock.appendChild(document.createElement('div'));
            relatedInformationNode.style.paddingTop = `${Math.floor(this._editor.getOption(64 /* EditorOption.lineHeight */) * 0.66)}px`;
            this._lines += 1;
            for (const related of relatedInformation) {
                const container = document.createElement('div');
                const relatedResource = document.createElement('a');
                relatedResource.classList.add('filename');
                relatedResource.innerText = `${this._labelService.getUriBasenameLabel(related.resource)}(${related.startLineNumber}, ${related.startColumn}): `;
                relatedResource.title = this._labelService.getUriLabel(related.resource);
                this._relatedDiagnostics.set(relatedResource, related);
                const relatedMessage = document.createElement('span');
                relatedMessage.innerText = related.message;
                container.appendChild(relatedResource);
                container.appendChild(relatedMessage);
                this._lines += 1;
                relatedInformationNode.appendChild(container);
            }
        }
        const fontInfo = this._editor.getOption(48 /* EditorOption.fontInfo */);
        const scrollWidth = Math.ceil(fontInfo.typicalFullwidthCharacterWidth * this._longestLineLength * 0.75);
        const scrollHeight = fontInfo.lineHeight * this._lines;
        this._scrollable.setScrollDimensions({ scrollWidth, scrollHeight });
    }
    layout(height, width) {
        this._scrollable.getDomNode().style.height = `${height}px`;
        this._scrollable.getDomNode().style.width = `${width}px`;
        this._scrollable.setScrollDimensions({ width, height });
    }
    getHeightInLines() {
        return Math.min(17, this._lines);
    }
    getAriaLabel(marker) {
        let severityLabel = '';
        switch (marker.severity) {
            case markers/* MarkerSeverity */.ZL.Error:
                severityLabel = nls/* localize */.NC('Error', "Error");
                break;
            case markers/* MarkerSeverity */.ZL.Warning:
                severityLabel = nls/* localize */.NC('Warning', "Warning");
                break;
            case markers/* MarkerSeverity */.ZL.Info:
                severityLabel = nls/* localize */.NC('Info', "Info");
                break;
            case markers/* MarkerSeverity */.ZL.Hint:
                severityLabel = nls/* localize */.NC('Hint', "Hint");
                break;
        }
        let ariaLabel = nls/* localize */.NC('marker aria', "{0} at {1}. ", severityLabel, marker.startLineNumber + ':' + marker.startColumn);
        const model = this._editor.getModel();
        if (model && (marker.startLineNumber <= model.getLineCount()) && (marker.startLineNumber >= 1)) {
            const lineContent = model.getLineContent(marker.startLineNumber);
            ariaLabel = `${lineContent}, ${ariaLabel}`;
        }
        return ariaLabel;
    }
}
let MarkerNavigationWidget = class MarkerNavigationWidget extends peekView/* PeekViewWidget */.vk {
    constructor(editor, _themeService, _openerService, _menuService, instantiationService, _contextKeyService, _labelService) {
        super(editor, { showArrow: true, showFrame: true, isAccessible: true, frameWidth: 1 }, instantiationService);
        this._themeService = _themeService;
        this._openerService = _openerService;
        this._menuService = _menuService;
        this._contextKeyService = _contextKeyService;
        this._labelService = _labelService;
        this._callOnDispose = new lifecycle/* DisposableStore */.SL();
        this._onDidSelectRelatedInformation = new common_event/* Emitter */.Q5();
        this.onDidSelectRelatedInformation = this._onDidSelectRelatedInformation.event;
        this._severity = markers/* MarkerSeverity */.ZL.Warning;
        this._backgroundColor = color/* Color */.Il.white;
        this._applyTheme(_themeService.getColorTheme());
        this._callOnDispose.add(_themeService.onDidColorThemeChange(this._applyTheme.bind(this)));
        this.create();
    }
    _applyTheme(theme) {
        this._backgroundColor = theme.getColor(editorMarkerNavigationBackground);
        let colorId = editorMarkerNavigationError;
        let headerBackground = editorMarkerNavigationErrorHeader;
        if (this._severity === markers/* MarkerSeverity */.ZL.Warning) {
            colorId = editorMarkerNavigationWarning;
            headerBackground = editorMarkerNavigationWarningHeader;
        }
        else if (this._severity === markers/* MarkerSeverity */.ZL.Info) {
            colorId = editorMarkerNavigationInfo;
            headerBackground = editorMarkerNavigationInfoHeader;
        }
        const frameColor = theme.getColor(colorId);
        const headerBg = theme.getColor(headerBackground);
        this.style({
            arrowColor: frameColor,
            frameColor: frameColor,
            headerBackgroundColor: headerBg,
            primaryHeadingColor: theme.getColor(peekView/* peekViewTitleForeground */.IH),
            secondaryHeadingColor: theme.getColor(peekView/* peekViewTitleInfoForeground */.R7)
        }); // style() will trigger _applyStyles
    }
    _applyStyles() {
        if (this._parentContainer) {
            this._parentContainer.style.backgroundColor = this._backgroundColor ? this._backgroundColor.toString() : '';
        }
        super._applyStyles();
    }
    dispose() {
        this._callOnDispose.dispose();
        super.dispose();
    }
    _fillHead(container) {
        super._fillHead(container);
        this._disposables.add(this._actionbarWidget.actionRunner.onWillRun(e => this.editor.focus()));
        const actions = [];
        const menu = this._menuService.createMenu(MarkerNavigationWidget.TitleMenu, this._contextKeyService);
        (0,menuEntryActionViewItem/* createAndFillInActionBarActions */.vr)(menu, undefined, actions);
        this._actionbarWidget.push(actions, { label: false, icon: true, index: 0 });
        menu.dispose();
    }
    _fillTitleIcon(container) {
        this._icon = dom/* append */.R3(container, dom.$(''));
    }
    _fillBody(container) {
        this._parentContainer = container;
        container.classList.add('marker-widget');
        this._parentContainer.tabIndex = 0;
        this._parentContainer.setAttribute('role', 'tooltip');
        this._container = document.createElement('div');
        container.appendChild(this._container);
        this._message = new MessageWidget(this._container, this.editor, related => this._onDidSelectRelatedInformation.fire(related), this._openerService, this._labelService);
        this._disposables.add(this._message);
    }
    show() {
        throw new Error('call showAtMarker');
    }
    showAtMarker(marker, markerIdx, markerCount) {
        // update:
        // * title
        // * message
        this._container.classList.remove('stale');
        this._message.update(marker);
        // update frame color (only applied on 'show')
        this._severity = marker.severity;
        this._applyTheme(this._themeService.getColorTheme());
        // show
        const range = core_range/* Range */.e.lift(marker);
        const editorPosition = this.editor.getPosition();
        const position = editorPosition && range.containsPosition(editorPosition) ? editorPosition : range.getStartPosition();
        super.show(position, this.computeRequiredHeight());
        const model = this.editor.getModel();
        if (model) {
            const detail = markerCount > 1
                ? nls/* localize */.NC('problems', "{0} of {1} problems", markerIdx, markerCount)
                : nls/* localize */.NC('change', "{0} of {1} problem", markerIdx, markerCount);
            this.setTitle((0,resources/* basename */.EZ)(model.uri), detail);
        }
        this._icon.className = `codicon ${severityIcon/* SeverityIcon */.j.className(markers/* MarkerSeverity */.ZL.toSeverity(this._severity))}`;
        this.editor.revealPositionNearTop(position, 0 /* ScrollType.Smooth */);
        this.editor.focus();
    }
    updateMarker(marker) {
        this._container.classList.remove('stale');
        this._message.update(marker);
    }
    showStale() {
        this._container.classList.add('stale');
        this._relayout();
    }
    _doLayoutBody(heightInPixel, widthInPixel) {
        super._doLayoutBody(heightInPixel, widthInPixel);
        this._heightInPixel = heightInPixel;
        this._message.layout(heightInPixel, widthInPixel);
        this._container.style.height = `${heightInPixel}px`;
    }
    _onWidth(widthInPixel) {
        this._message.layout(this._heightInPixel, widthInPixel);
    }
    _relayout() {
        super._relayout(this.computeRequiredHeight());
    }
    computeRequiredHeight() {
        return 3 + this._message.getHeightInLines();
    }
};
MarkerNavigationWidget.TitleMenu = new actions/* MenuId */.eH('gotoErrorTitleMenu');
MarkerNavigationWidget = gotoErrorWidget_decorate([
    gotoErrorWidget_param(1, themeService/* IThemeService */.XE),
    gotoErrorWidget_param(2, common_opener/* IOpenerService */.v4),
    gotoErrorWidget_param(3, actions/* IMenuService */.co),
    gotoErrorWidget_param(4, instantiation/* IInstantiationService */.TG),
    gotoErrorWidget_param(5, contextkey/* IContextKeyService */.i6),
    gotoErrorWidget_param(6, label/* ILabelService */.e)
], MarkerNavigationWidget);
// theming
const errorDefault = (0,colorRegistry/* oneOf */.kwl)(colorRegistry/* editorErrorForeground */.lXJ, colorRegistry/* editorErrorBorder */.b6y);
const warningDefault = (0,colorRegistry/* oneOf */.kwl)(colorRegistry/* editorWarningForeground */.uoC, colorRegistry/* editorWarningBorder */.pW3);
const infoDefault = (0,colorRegistry/* oneOf */.kwl)(colorRegistry/* editorInfoForeground */.c63, colorRegistry/* editorInfoBorder */.T83);
const editorMarkerNavigationError = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationError.background', { dark: errorDefault, light: errorDefault, hcDark: colorRegistry/* contrastBorder */.lRK, hcLight: colorRegistry/* contrastBorder */.lRK }, nls/* localize */.NC('editorMarkerNavigationError', 'Editor marker navigation widget error color.'));
const editorMarkerNavigationErrorHeader = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationError.headerBackground', { dark: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationError, .1), light: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationError, .1), hcDark: null, hcLight: null }, nls/* localize */.NC('editorMarkerNavigationErrorHeaderBackground', 'Editor marker navigation widget error heading background.'));
const editorMarkerNavigationWarning = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationWarning.background', { dark: warningDefault, light: warningDefault, hcDark: colorRegistry/* contrastBorder */.lRK, hcLight: colorRegistry/* contrastBorder */.lRK }, nls/* localize */.NC('editorMarkerNavigationWarning', 'Editor marker navigation widget warning color.'));
const editorMarkerNavigationWarningHeader = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationWarning.headerBackground', { dark: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationWarning, .1), light: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationWarning, .1), hcDark: '#0C141F', hcLight: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationWarning, .2) }, nls/* localize */.NC('editorMarkerNavigationWarningBackground', 'Editor marker navigation widget warning heading background.'));
const editorMarkerNavigationInfo = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationInfo.background', { dark: infoDefault, light: infoDefault, hcDark: colorRegistry/* contrastBorder */.lRK, hcLight: colorRegistry/* contrastBorder */.lRK }, nls/* localize */.NC('editorMarkerNavigationInfo', 'Editor marker navigation widget info color.'));
const editorMarkerNavigationInfoHeader = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigationInfo.headerBackground', { dark: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationInfo, .1), light: (0,colorRegistry/* transparent */.ZnX)(editorMarkerNavigationInfo, .1), hcDark: null, hcLight: null }, nls/* localize */.NC('editorMarkerNavigationInfoHeaderBackground', 'Editor marker navigation widget info heading background.'));
const editorMarkerNavigationBackground = (0,colorRegistry/* registerColor */.P6G)('editorMarkerNavigation.background', { dark: colorRegistry/* editorBackground */.cvW, light: colorRegistry/* editorBackground */.cvW, hcDark: colorRegistry/* editorBackground */.cvW, hcLight: colorRegistry/* editorBackground */.cvW }, nls/* localize */.NC('editorMarkerNavigationBackground', 'Editor marker navigation widget background.'));

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var gotoError_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var gotoError_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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














let MarkerController = class MarkerController {
    static get(editor) {
        return editor.getContribution(MarkerController.ID);
    }
    constructor(editor, _markerNavigationService, _contextKeyService, _editorService, _instantiationService) {
        this._markerNavigationService = _markerNavigationService;
        this._contextKeyService = _contextKeyService;
        this._editorService = _editorService;
        this._instantiationService = _instantiationService;
        this._sessionDispoables = new lifecycle/* DisposableStore */.SL();
        this._editor = editor;
        this._widgetVisible = CONTEXT_MARKERS_NAVIGATION_VISIBLE.bindTo(this._contextKeyService);
    }
    dispose() {
        this._cleanUp();
        this._sessionDispoables.dispose();
    }
    _cleanUp() {
        this._widgetVisible.reset();
        this._sessionDispoables.clear();
        this._widget = undefined;
        this._model = undefined;
    }
    _getOrCreateModel(uri) {
        if (this._model && this._model.matches(uri)) {
            return this._model;
        }
        let reusePosition = false;
        if (this._model) {
            reusePosition = true;
            this._cleanUp();
        }
        this._model = this._markerNavigationService.getMarkerList(uri);
        if (reusePosition) {
            this._model.move(true, this._editor.getModel(), this._editor.getPosition());
        }
        this._widget = this._instantiationService.createInstance(MarkerNavigationWidget, this._editor);
        this._widget.onDidClose(() => this.close(), this, this._sessionDispoables);
        this._widgetVisible.set(true);
        this._sessionDispoables.add(this._model);
        this._sessionDispoables.add(this._widget);
        // follow cursor
        this._sessionDispoables.add(this._editor.onDidChangeCursorPosition(e => {
            var _a, _b, _c;
            if (!((_a = this._model) === null || _a === void 0 ? void 0 : _a.selected) || !core_range/* Range */.e.containsPosition((_b = this._model) === null || _b === void 0 ? void 0 : _b.selected.marker, e.position)) {
                (_c = this._model) === null || _c === void 0 ? void 0 : _c.resetIndex();
            }
        }));
        // update markers
        this._sessionDispoables.add(this._model.onDidChange(() => {
            if (!this._widget || !this._widget.position || !this._model) {
                return;
            }
            const info = this._model.find(this._editor.getModel().uri, this._widget.position);
            if (info) {
                this._widget.updateMarker(info.marker);
            }
            else {
                this._widget.showStale();
            }
        }));
        // open related
        this._sessionDispoables.add(this._widget.onDidSelectRelatedInformation(related => {
            this._editorService.openCodeEditor({
                resource: related.resource,
                options: { pinned: true, revealIfOpened: true, selection: core_range/* Range */.e.lift(related).collapseToStart() }
            }, this._editor);
            this.close(false);
        }));
        this._sessionDispoables.add(this._editor.onDidChangeModel(() => this._cleanUp()));
        return this._model;
    }
    close(focusEditor = true) {
        this._cleanUp();
        if (focusEditor) {
            this._editor.focus();
        }
    }
    showAtMarker(marker) {
        if (this._editor.hasModel()) {
            const model = this._getOrCreateModel(this._editor.getModel().uri);
            model.resetIndex();
            model.move(true, this._editor.getModel(), new position/* Position */.L(marker.startLineNumber, marker.startColumn));
            if (model.selected) {
                this._widget.showAtMarker(model.selected.marker, model.selected.index, model.selected.total);
            }
        }
    }
    nagivate(next, multiFile) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this._editor.hasModel()) {
                const model = this._getOrCreateModel(multiFile ? undefined : this._editor.getModel().uri);
                model.move(next, this._editor.getModel(), this._editor.getPosition());
                if (!model.selected) {
                    return;
                }
                if (model.selected.marker.resource.toString() !== this._editor.getModel().uri.toString()) {
                    // show in different editor
                    this._cleanUp();
                    const otherEditor = yield this._editorService.openCodeEditor({
                        resource: model.selected.marker.resource,
                        options: { pinned: false, revealIfOpened: true, selectionRevealType: 2 /* TextEditorSelectionRevealType.NearTop */, selection: model.selected.marker }
                    }, this._editor);
                    if (otherEditor) {
                        (_a = MarkerController.get(otherEditor)) === null || _a === void 0 ? void 0 : _a.close();
                        (_b = MarkerController.get(otherEditor)) === null || _b === void 0 ? void 0 : _b.nagivate(next, multiFile);
                    }
                }
                else {
                    // show in this editor
                    this._widget.showAtMarker(model.selected.marker, model.selected.index, model.selected.total);
                }
            }
        });
    }
};
MarkerController.ID = 'editor.contrib.markerController';
MarkerController = gotoError_decorate([
    gotoError_param(1, IMarkerNavigationService),
    gotoError_param(2, contextkey/* IContextKeyService */.i6),
    gotoError_param(3, codeEditorService/* ICodeEditorService */.$),
    gotoError_param(4, instantiation/* IInstantiationService */.TG)
], MarkerController);
class MarkerNavigationAction extends editorExtensions/* EditorAction */.R6 {
    constructor(_next, _multiFile, opts) {
        super(opts);
        this._next = _next;
        this._multiFile = _multiFile;
    }
    run(_accessor, editor) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (editor.hasModel()) {
                (_a = MarkerController.get(editor)) === null || _a === void 0 ? void 0 : _a.nagivate(this._next, this._multiFile);
            }
        });
    }
}
class NextMarkerAction extends MarkerNavigationAction {
    constructor() {
        super(true, false, {
            id: NextMarkerAction.ID,
            label: NextMarkerAction.LABEL,
            alias: 'Go to Next Problem (Error, Warning, Info)',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 512 /* KeyMod.Alt */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MarkerNavigationWidget.TitleMenu,
                title: NextMarkerAction.LABEL,
                icon: (0,iconRegistry/* registerIcon */.q5)('marker-navigation-next', codicons/* Codicon */.l.arrowDown, nls/* localize */.NC('nextMarkerIcon', 'Icon for goto next marker.')),
                group: 'navigation',
                order: 1
            }
        });
    }
}
NextMarkerAction.ID = 'editor.action.marker.next';
NextMarkerAction.LABEL = nls/* localize */.NC('markerAction.next.label', "Go to Next Problem (Error, Warning, Info)");
class PrevMarkerAction extends MarkerNavigationAction {
    constructor() {
        super(false, false, {
            id: PrevMarkerAction.ID,
            label: PrevMarkerAction.LABEL,
            alias: 'Go to Previous Problem (Error, Warning, Info)',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: MarkerNavigationWidget.TitleMenu,
                title: PrevMarkerAction.LABEL,
                icon: (0,iconRegistry/* registerIcon */.q5)('marker-navigation-previous', codicons/* Codicon */.l.arrowUp, nls/* localize */.NC('previousMarkerIcon', 'Icon for goto previous marker.')),
                group: 'navigation',
                order: 2
            }
        });
    }
}
PrevMarkerAction.ID = 'editor.action.marker.prev';
PrevMarkerAction.LABEL = nls/* localize */.NC('markerAction.previous.label', "Go to Previous Problem (Error, Warning, Info)");
class NextMarkerInFilesAction extends MarkerNavigationAction {
    constructor() {
        super(true, true, {
            id: 'editor.action.marker.nextInFiles',
            label: nls/* localize */.NC('markerAction.nextInFiles.label', "Go to Next Problem in Files (Error, Warning, Info)"),
            alias: 'Go to Next Problem in Files (Error, Warning, Info)',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarGoMenu,
                title: nls/* localize */.NC({ key: 'miGotoNextProblem', comment: ['&& denotes a mnemonic'] }, "Next &&Problem"),
                group: '6_problem_nav',
                order: 1
            }
        });
    }
}
class PrevMarkerInFilesAction extends MarkerNavigationAction {
    constructor() {
        super(false, true, {
            id: 'editor.action.marker.prevInFiles',
            label: nls/* localize */.NC('markerAction.previousInFiles.label', "Go to Previous Problem in Files (Error, Warning, Info)"),
            alias: 'Go to Previous Problem in Files (Error, Warning, Info)',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
                primary: 1024 /* KeyMod.Shift */ | 66 /* KeyCode.F8 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarGoMenu,
                title: nls/* localize */.NC({ key: 'miGotoPreviousProblem', comment: ['&& denotes a mnemonic'] }, "Previous &&Problem"),
                group: '6_problem_nav',
                order: 2
            }
        });
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(MarkerController.ID, MarkerController, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(NextMarkerAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PrevMarkerAction);
(0,editorExtensions/* registerEditorAction */.Qr)(NextMarkerInFilesAction);
(0,editorExtensions/* registerEditorAction */.Qr)(PrevMarkerInFilesAction);
const CONTEXT_MARKERS_NAVIGATION_VISIBLE = new contextkey/* RawContextKey */.uy('markersNavigationVisible', false);
const MarkerCommand = editorExtensions/* EditorCommand */._l.bindToContribution(MarkerController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new MarkerCommand({
    id: 'closeMarkersNavigation',
    precondition: CONTEXT_MARKERS_NAVIGATION_VISIBLE,
    handler: x => x.close(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 50,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));


/***/ })

}]);