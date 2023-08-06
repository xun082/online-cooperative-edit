"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-93e8ad66"],{

/***/ 55012:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ createMonacoBaseAPI; }
/* harmony export */ });
/* unused harmony export KeyMod */
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29811);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17106);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56946);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76584);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74980);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58606);
/* harmony import */ var _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87915);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









class KeyMod {
    static chord(firstPart, secondPart) {
        return (0,_base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_2__/* .KeyChord */ .gx)(firstPart, secondPart);
    }
}
KeyMod.CtrlCmd = 2048 /* ConstKeyMod.CtrlCmd */;
KeyMod.Shift = 1024 /* ConstKeyMod.Shift */;
KeyMod.Alt = 512 /* ConstKeyMod.Alt */;
KeyMod.WinCtrl = 256 /* ConstKeyMod.WinCtrl */;
function createMonacoBaseAPI() {
    return {
        editor: undefined,
        languages: undefined,
        CancellationTokenSource: _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationTokenSource */ .A,
        Emitter: _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5,
        KeyCode: _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__/* .KeyCode */ .VD,
        KeyMod: KeyMod,
        Position: _core_position_js__WEBPACK_IMPORTED_MODULE_6__/* .Position */ .L,
        Range: _core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e,
        Selection: _core_selection_js__WEBPACK_IMPORTED_MODULE_8__/* .Selection */ .Y,
        SelectionDirection: _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__/* .SelectionDirection */ .a$,
        MarkerSeverity: _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__/* .MarkerSeverity */ .ZL,
        MarkerTag: _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__/* .MarkerTag */ .eB,
        Uri: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o,
        Token: _languages_js__WEBPACK_IMPORTED_MODULE_4__/* .Token */ .WU
    };
}


/***/ }),

/***/ 63263:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ EditorSimpleWorker; }
/* harmony export */ });
/* unused harmony export create */
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37851);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56946);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13372);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76584);
/* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62510);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81814);
/* harmony import */ var _languages_linkComputer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(68609);
/* harmony import */ var _languages_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59495);
/* harmony import */ var _editorBaseApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55012);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61111);
/* harmony import */ var _unicodeTextModelHighlighter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3669);
/* harmony import */ var _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78611);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99269);
/* harmony import */ var _languages_defaultDocumentColorsComputer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33017);
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
 * @internal
 */
class MirrorModel extends _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_2__/* .MirrorTextModel */ .v {
    get uri() {
        return this._uri;
    }
    get eol() {
        return this._eol;
    }
    getValue() {
        return this.getText();
    }
    findMatches(regex) {
        const matches = [];
        for (let i = 0; i < this._lines.length; i++) {
            const line = this._lines[i];
            const offsetToAdd = this.offsetAt(new _core_position_js__WEBPACK_IMPORTED_MODULE_11__/* .Position */ .L(i + 1, 1));
            const iteratorOverMatches = line.matchAll(regex);
            for (const match of iteratorOverMatches) {
                if (match.index || match.index === 0) {
                    match.index = match.index + offsetToAdd;
                }
                matches.push(match);
            }
        }
        return matches;
    }
    getLinesContent() {
        return this._lines.slice(0);
    }
    getLineCount() {
        return this._lines.length;
    }
    getLineContent(lineNumber) {
        return this._lines[lineNumber - 1];
    }
    getWordAtPosition(position, wordDefinition) {
        const wordAtText = (0,_core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .getWordAtText */ .t2)(position.column, (0,_core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureValidWordDefinition */ .eq)(wordDefinition), this._lines[position.lineNumber - 1], 0);
        if (wordAtText) {
            return new _core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
        }
        return null;
    }
    words(wordDefinition) {
        const lines = this._lines;
        const wordenize = this._wordenize.bind(this);
        let lineNumber = 0;
        let lineText = '';
        let wordRangesIdx = 0;
        let wordRanges = [];
        return {
            *[Symbol.iterator]() {
                while (true) {
                    if (wordRangesIdx < wordRanges.length) {
                        const value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
                        wordRangesIdx += 1;
                        yield value;
                    }
                    else {
                        if (lineNumber < lines.length) {
                            lineText = lines[lineNumber];
                            wordRanges = wordenize(lineText, wordDefinition);
                            wordRangesIdx = 0;
                            lineNumber += 1;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        };
    }
    getLineWords(lineNumber, wordDefinition) {
        const content = this._lines[lineNumber - 1];
        const ranges = this._wordenize(content, wordDefinition);
        const words = [];
        for (const range of ranges) {
            words.push({
                word: content.substring(range.start, range.end),
                startColumn: range.start + 1,
                endColumn: range.end + 1
            });
        }
        return words;
    }
    _wordenize(content, wordDefinition) {
        const result = [];
        let match;
        wordDefinition.lastIndex = 0; // reset lastIndex just to be sure
        while (match = wordDefinition.exec(content)) {
            if (match[0].length === 0) {
                // it did match the empty string
                break;
            }
            result.push({ start: match.index, end: match.index + match[0].length });
        }
        return result;
    }
    getValueInRange(range) {
        range = this._validateRange(range);
        if (range.startLineNumber === range.endLineNumber) {
            return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
        }
        const lineEnding = this._eol;
        const startLineIndex = range.startLineNumber - 1;
        const endLineIndex = range.endLineNumber - 1;
        const resultLines = [];
        resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
        for (let i = startLineIndex + 1; i < endLineIndex; i++) {
            resultLines.push(this._lines[i]);
        }
        resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
        return resultLines.join(lineEnding);
    }
    offsetAt(position) {
        position = this._validatePosition(position);
        this._ensureLineStarts();
        return this._lineStarts.getPrefixSum(position.lineNumber - 2) + (position.column - 1);
    }
    positionAt(offset) {
        offset = Math.floor(offset);
        offset = Math.max(0, offset);
        this._ensureLineStarts();
        const out = this._lineStarts.getIndexOf(offset);
        const lineLength = this._lines[out.index].length;
        // Ensure we return a valid position
        return {
            lineNumber: 1 + out.index,
            column: 1 + Math.min(out.remainder, lineLength)
        };
    }
    _validateRange(range) {
        const start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
        const end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
        if (start.lineNumber !== range.startLineNumber
            || start.column !== range.startColumn
            || end.lineNumber !== range.endLineNumber
            || end.column !== range.endColumn) {
            return {
                startLineNumber: start.lineNumber,
                startColumn: start.column,
                endLineNumber: end.lineNumber,
                endColumn: end.column
            };
        }
        return range;
    }
    _validatePosition(position) {
        if (!_core_position_js__WEBPACK_IMPORTED_MODULE_11__/* .Position */ .L.isIPosition(position)) {
            throw new Error('bad position');
        }
        let { lineNumber, column } = position;
        let hasChanged = false;
        if (lineNumber < 1) {
            lineNumber = 1;
            column = 1;
            hasChanged = true;
        }
        else if (lineNumber > this._lines.length) {
            lineNumber = this._lines.length;
            column = this._lines[lineNumber - 1].length + 1;
            hasChanged = true;
        }
        else {
            const maxCharacter = this._lines[lineNumber - 1].length + 1;
            if (column < 1) {
                column = 1;
                hasChanged = true;
            }
            else if (column > maxCharacter) {
                column = maxCharacter;
                hasChanged = true;
            }
        }
        if (!hasChanged) {
            return position;
        }
        else {
            return { lineNumber, column };
        }
    }
}
/**
 * @internal
 */
class EditorSimpleWorker {
    constructor(host, foreignModuleFactory) {
        this._host = host;
        this._models = Object.create(null);
        this._foreignModuleFactory = foreignModuleFactory;
        this._foreignModule = null;
    }
    dispose() {
        this._models = Object.create(null);
    }
    _getModel(uri) {
        return this._models[uri];
    }
    _getModels() {
        const all = [];
        Object.keys(this._models).forEach((key) => all.push(this._models[key]));
        return all;
    }
    acceptNewModel(data) {
        this._models[data.url] = new MirrorModel(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__/* .URI */ .o.parse(data.url), data.lines, data.EOL, data.versionId);
    }
    acceptModelChanged(strURL, e) {
        if (!this._models[strURL]) {
            return;
        }
        const model = this._models[strURL];
        model.onEvents(e);
    }
    acceptRemovedModel(strURL) {
        if (!this._models[strURL]) {
            return;
        }
        delete this._models[strURL];
    }
    computeUnicodeHighlights(url, options, range) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(url);
            if (!model) {
                return { ranges: [], hasMore: false, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
            }
            return _unicodeTextModelHighlighter_js__WEBPACK_IMPORTED_MODULE_7__/* .UnicodeTextModelHighlighter */ .a.computeUnicodeHighlights(model, options, range);
        });
    }
    // ---- BEGIN diff --------------------------------------------------------------------------
    computeDiff(originalUrl, modifiedUrl, options, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const original = this._getModel(originalUrl);
            const modified = this._getModel(modifiedUrl);
            if (!original || !modified) {
                return null;
            }
            return EditorSimpleWorker.computeDiff(original, modified, options, algorithm);
        });
    }
    static computeDiff(originalTextModel, modifiedTextModel, options, algorithm) {
        const diffAlgorithm = algorithm === 'advanced' ? _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__/* .linesDiffComputers */ .V.advanced : _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__/* .linesDiffComputers */ .V.legacy;
        const originalLines = originalTextModel.getLinesContent();
        const modifiedLines = modifiedTextModel.getLinesContent();
        const result = diffAlgorithm.computeDiff(originalLines, modifiedLines, options);
        const identical = (result.changes.length > 0 ? false : this._modelsAreIdentical(originalTextModel, modifiedTextModel));
        return {
            identical,
            quitEarly: result.hitTimeout,
            changes: result.changes.map(m => {
                var _a;
                return ([m.originalRange.startLineNumber, m.originalRange.endLineNumberExclusive, m.modifiedRange.startLineNumber, m.modifiedRange.endLineNumberExclusive, (_a = m.innerChanges) === null || _a === void 0 ? void 0 : _a.map(m => [
                        m.originalRange.startLineNumber,
                        m.originalRange.startColumn,
                        m.originalRange.endLineNumber,
                        m.originalRange.endColumn,
                        m.modifiedRange.startLineNumber,
                        m.modifiedRange.startColumn,
                        m.modifiedRange.endLineNumber,
                        m.modifiedRange.endColumn,
                    ])]);
            })
        };
    }
    static _modelsAreIdentical(original, modified) {
        const originalLineCount = original.getLineCount();
        const modifiedLineCount = modified.getLineCount();
        if (originalLineCount !== modifiedLineCount) {
            return false;
        }
        for (let line = 1; line <= originalLineCount; line++) {
            const originalLine = original.getLineContent(line);
            const modifiedLine = modified.getLineContent(line);
            if (originalLine !== modifiedLine) {
                return false;
            }
        }
        return true;
    }
    computeMoreMinimalEdits(modelUrl, edits, pretty) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(modelUrl);
            if (!model) {
                return edits;
            }
            const result = [];
            let lastEol = undefined;
            edits = edits.slice(0).sort((a, b) => {
                if (a.range && b.range) {
                    return _core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e.compareRangesUsingStarts(a.range, b.range);
                }
                // eol only changes should go to the end
                const aRng = a.range ? 0 : 1;
                const bRng = b.range ? 0 : 1;
                return aRng - bRng;
            });
            for (let { range, text, eol } of edits) {
                if (typeof eol === 'number') {
                    lastEol = eol;
                }
                if (_core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e.isEmpty(range) && !text) {
                    // empty change
                    continue;
                }
                const original = model.getValueInRange(range);
                text = text.replace(/\r\n|\n|\r/g, model.eol);
                if (original === text) {
                    // noop
                    continue;
                }
                // make sure diff won't take too long
                if (Math.max(text.length, original.length) > EditorSimpleWorker._diffLimit) {
                    result.push({ range, text });
                    continue;
                }
                // compute diff between original and edit.text
                const changes = (0,_base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__/* .stringDiff */ .a$)(original, text, pretty);
                const editOffset = model.offsetAt(_core_range_js__WEBPACK_IMPORTED_MODULE_12__/* .Range */ .e.lift(range).getStartPosition());
                for (const change of changes) {
                    const start = model.positionAt(editOffset + change.originalStart);
                    const end = model.positionAt(editOffset + change.originalStart + change.originalLength);
                    const newEdit = {
                        text: text.substr(change.modifiedStart, change.modifiedLength),
                        range: { startLineNumber: start.lineNumber, startColumn: start.column, endLineNumber: end.lineNumber, endColumn: end.column }
                    };
                    if (model.getValueInRange(newEdit.range) !== newEdit.text) {
                        result.push(newEdit);
                    }
                }
            }
            if (typeof lastEol === 'number') {
                result.push({ eol: lastEol, text: '', range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } });
            }
            return result;
        });
    }
    // ---- END minimal edits ---------------------------------------------------------------
    computeLinks(modelUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(modelUrl);
            if (!model) {
                return null;
            }
            return (0,_languages_linkComputer_js__WEBPACK_IMPORTED_MODULE_13__/* .computeLinks */ .E)(model);
        });
    }
    // --- BEGIN default document colors -----------------------------------------------------------
    computeDefaultDocumentColors(modelUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(modelUrl);
            if (!model) {
                return null;
            }
            return (0,_languages_defaultDocumentColorsComputer_js__WEBPACK_IMPORTED_MODULE_10__/* .computeDefaultDocumentColors */ .e)(model);
        });
    }
    textualSuggest(modelUrls, leadingWord, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function* () {
            const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_6__/* .StopWatch */ .G(true);
            const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
            const seen = new Set();
            outer: for (const url of modelUrls) {
                const model = this._getModel(url);
                if (!model) {
                    continue;
                }
                for (const word of model.words(wordDefRegExp)) {
                    if (word === leadingWord || !isNaN(Number(word))) {
                        continue;
                    }
                    seen.add(word);
                    if (seen.size > EditorSimpleWorker._suggestionsLimit) {
                        break outer;
                    }
                }
            }
            return { words: Array.from(seen), duration: sw.elapsed() };
        });
    }
    // ---- END suggest --------------------------------------------------------------------------
    //#region -- word ranges --
    computeWordRanges(modelUrl, range, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(modelUrl);
            if (!model) {
                return Object.create(null);
            }
            const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
            const result = Object.create(null);
            for (let line = range.startLineNumber; line < range.endLineNumber; line++) {
                const words = model.getLineWords(line, wordDefRegExp);
                for (const word of words) {
                    if (!isNaN(Number(word.word))) {
                        continue;
                    }
                    let array = result[word.word];
                    if (!array) {
                        array = [];
                        result[word.word] = array;
                    }
                    array.push({
                        startLineNumber: line,
                        startColumn: word.startColumn,
                        endLineNumber: line,
                        endColumn: word.endColumn
                    });
                }
            }
            return result;
        });
    }
    //#endregion
    navigateValueSet(modelUrl, range, up, wordDef, wordDefFlags) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this._getModel(modelUrl);
            if (!model) {
                return null;
            }
            const wordDefRegExp = new RegExp(wordDef, wordDefFlags);
            if (range.startColumn === range.endColumn) {
                range = {
                    startLineNumber: range.startLineNumber,
                    startColumn: range.startColumn,
                    endLineNumber: range.endLineNumber,
                    endColumn: range.endColumn + 1
                };
            }
            const selectionText = model.getValueInRange(range);
            const wordRange = model.getWordAtPosition({ lineNumber: range.startLineNumber, column: range.startColumn }, wordDefRegExp);
            if (!wordRange) {
                return null;
            }
            const word = model.getValueInRange(wordRange);
            const result = _languages_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .BasicInplaceReplace */ .J.INSTANCE.navigateValueSet(range, selectionText, wordRange, word, up);
            return result;
        });
    }
    // ---- BEGIN foreign module support --------------------------------------------------------------------------
    loadForeignModule(moduleId, createData, foreignHostMethods) {
        const proxyMethodRequest = (method, args) => {
            return this._host.fhr(method, args);
        };
        const foreignHost = (0,_base_common_objects_js__WEBPACK_IMPORTED_MODULE_9__/* .createProxyObject */ .IU)(foreignHostMethods, proxyMethodRequest);
        const ctx = {
            host: foreignHost,
            getMirrorModels: () => {
                return this._getModels();
            }
        };
        if (this._foreignModuleFactory) {
            this._foreignModule = this._foreignModuleFactory(ctx, createData);
            // static foreing module
            return Promise.resolve((0,_base_common_objects_js__WEBPACK_IMPORTED_MODULE_9__/* .getAllMethodNames */ .$E)(this._foreignModule));
        }
        // ESM-comment-begin
        // 		return new Promise<any>((resolve, reject) => {
        // 			require([moduleId], (foreignModule: { create: IForeignModuleFactory }) => {
        // 				this._foreignModule = foreignModule.create(ctx, createData);
        // 
        // 				resolve(getAllMethodNames(this._foreignModule));
        // 
        // 			}, reject);
        // 		});
        // ESM-comment-end
        // ESM-uncomment-begin
        return Promise.reject(new Error(`Unexpected usage`));
        // ESM-uncomment-end
    }
    // foreign method request
    fmr(method, args) {
        if (!this._foreignModule || typeof this._foreignModule[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._foreignModule[method].apply(this._foreignModule, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
}
// ---- END diff --------------------------------------------------------------------------
// ---- BEGIN minimal edits ---------------------------------------------------------------
EditorSimpleWorker._diffLimit = 100000;
// ---- BEGIN suggest --------------------------------------------------------------------------
EditorSimpleWorker._suggestionsLimit = 10000;
/**
 * Called on the worker side
 * @internal
 */
function create(host) {
    return new EditorSimpleWorker(host, null);
}
if (typeof importScripts === 'function') {
    // Running in a web worker
    globalThis.monaco = (0,_editorBaseApi_js__WEBPACK_IMPORTED_MODULE_5__/* .createMonacoBaseAPI */ .O)();
}


/***/ }),

/***/ 15130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ IEditorWorkerService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IEditorWorkerService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('editorWorkerService');


/***/ }),

/***/ 41717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ getIconClasses; }
/* harmony export */ });
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11966);
/* harmony import */ var _base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8506);
/* harmony import */ var _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96038);
/* harmony import */ var _platform_files_common_files_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68868);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




const fileIconDirectoryRegex = /(?:\/|^)(?:([^\/]+)\/)?([^\/]+)$/;
function getIconClasses(modelService, languageService, resource, fileKind) {
    // we always set these base classes even if we do not have a path
    const classes = fileKind === _platform_files_common_files_js__WEBPACK_IMPORTED_MODULE_3__/* .FileKind */ .R.ROOT_FOLDER ? ['rootfolder-icon'] : fileKind === _platform_files_common_files_js__WEBPACK_IMPORTED_MODULE_3__/* .FileKind */ .R.FOLDER ? ['folder-icon'] : ['file-icon'];
    if (resource) {
        // Get the path and name of the resource. For data-URIs, we need to parse specially
        let name;
        if (resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_0__/* .Schemas */ .lg.data) {
            const metadata = _base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__/* .DataUri */ .Vb.parseMetaData(resource);
            name = metadata.get(_base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__/* .DataUri */ .Vb.META_DATA_LABEL);
        }
        else {
            const match = resource.path.match(fileIconDirectoryRegex);
            if (match) {
                name = cssEscape(match[2].toLowerCase());
                if (match[1]) {
                    classes.push(`${cssEscape(match[1].toLowerCase())}-name-dir-icon`); // parent directory
                }
            }
            else {
                name = cssEscape(resource.authority.toLowerCase());
            }
        }
        // Folders
        if (fileKind === _platform_files_common_files_js__WEBPACK_IMPORTED_MODULE_3__/* .FileKind */ .R.FOLDER) {
            classes.push(`${name}-name-folder-icon`);
        }
        // Files
        else {
            // Name & Extension(s)
            if (name) {
                classes.push(`${name}-name-file-icon`);
                classes.push(`name-file-icon`); // extra segment to increase file-name score
                // Avoid doing an explosive combination of extensions for very long filenames
                // (most file systems do not allow files > 255 length) with lots of `.` characters
                // https://github.com/microsoft/vscode/issues/116199
                if (name.length <= 255) {
                    const dotSegments = name.split('.');
                    for (let i = 1; i < dotSegments.length; i++) {
                        classes.push(`${dotSegments.slice(i).join('.')}-ext-file-icon`); // add each combination of all found extensions if more than one
                    }
                }
                classes.push(`ext-file-icon`); // extra segment to increase file-ext score
            }
            // Detected Mode
            const detectedLanguageId = detectLanguageId(modelService, languageService, resource);
            if (detectedLanguageId) {
                classes.push(`${cssEscape(detectedLanguageId)}-lang-file-icon`);
            }
        }
    }
    return classes;
}
function detectLanguageId(modelService, languageService, resource) {
    if (!resource) {
        return null; // we need a resource at least
    }
    let languageId = null;
    // Data URI: check for encoded metadata
    if (resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_0__/* .Schemas */ .lg.data) {
        const metadata = _base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__/* .DataUri */ .Vb.parseMetaData(resource);
        const mime = metadata.get(_base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__/* .DataUri */ .Vb.META_DATA_MIME);
        if (mime) {
            languageId = languageService.getLanguageIdByMimeType(mime);
        }
    }
    // Any other URI: check for model if existing
    else {
        const model = modelService.getModel(resource);
        if (model) {
            languageId = model.getLanguageId();
        }
    }
    // only take if the language id is specific (aka no just plain text)
    if (languageId && languageId !== _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .PLAINTEXT_LANGUAGE_ID */ .bd) {
        return languageId;
    }
    // otherwise fallback to path based detection
    return languageService.guessLanguageIdByFilepathOrFirstLine(resource);
}
function cssEscape(str) {
    return str.replace(/[\11\12\14\15\40]/g, '/'); // HTML class names can not contain certain whitespace characters, use / instead, which doesn't exist in file names.
}


/***/ }),

/***/ 78745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ ILanguageFeatureDebounceService; }
/* harmony export */ });
/* unused harmony export LanguageFeatureDebounceService */
/* harmony import */ var _base_common_hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54805);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17795);
/* harmony import */ var _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17511);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9546);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38048);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28876);
/* harmony import */ var _platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38876);
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







const ILanguageFeatureDebounceService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__/* .createDecorator */ .yh)('ILanguageFeatureDebounceService');
var IdentityHash;
(function (IdentityHash) {
    const _hashes = new WeakMap();
    let pool = 0;
    function of(obj) {
        let value = _hashes.get(obj);
        if (value === undefined) {
            value = ++pool;
            _hashes.set(obj, value);
        }
        return value;
    }
    IdentityHash.of = of;
})(IdentityHash || (IdentityHash = {}));
class FeatureDebounceInformation {
    constructor(_logService, _name, _registry, _default, _min, _max) {
        this._logService = _logService;
        this._name = _name;
        this._registry = _registry;
        this._default = _default;
        this._min = _min;
        this._max = _max;
        this._cache = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .LRUCache */ .z6(50, 0.7);
    }
    _key(model) {
        return model.id + this._registry.all(model).reduce((hashVal, obj) => (0,_base_common_hash_js__WEBPACK_IMPORTED_MODULE_0__/* .doHash */ .SP)(IdentityHash.of(obj), hashVal), 0);
    }
    get(model) {
        const key = this._key(model);
        const avg = this._cache.get(key);
        return avg
            ? (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .uZ)(avg.value, this._min, this._max)
            : this.default();
    }
    update(model, value) {
        const key = this._key(model);
        let avg = this._cache.get(key);
        if (!avg) {
            avg = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .SlidingWindowAverage */ .N(6);
            this._cache.set(key, avg);
        }
        const newValue = (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .uZ)(avg.update(value), this._min, this._max);
        if (!(0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_4__/* .matchesScheme */ .xn)(model.uri, 'output')) {
            this._logService.trace(`[DEBOUNCE: ${this._name}] for ${model.uri.toString()} is ${newValue}ms`);
        }
        return newValue;
    }
    _overall() {
        const result = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .MovingAverage */ .nM();
        for (const [, avg] of this._cache) {
            result.update(avg.value);
        }
        return result.value;
    }
    default() {
        const value = (this._overall() | 0) || this._default;
        return (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .clamp */ .uZ)(value, this._min, this._max);
    }
}
let LanguageFeatureDebounceService = class LanguageFeatureDebounceService {
    constructor(_logService) {
        this._logService = _logService;
        this._data = new Map();
    }
    for(feature, name, config) {
        var _a, _b, _c;
        const min = (_a = config === null || config === void 0 ? void 0 : config.min) !== null && _a !== void 0 ? _a : 50;
        const max = (_b = config === null || config === void 0 ? void 0 : config.max) !== null && _b !== void 0 ? _b : Math.pow(min, 2);
        const extra = (_c = config === null || config === void 0 ? void 0 : config.key) !== null && _c !== void 0 ? _c : undefined;
        const key = `${IdentityHash.of(feature)},${min}${extra ? ',' + extra : ''}`;
        let info = this._data.get(key);
        if (!info) {
            info = new FeatureDebounceInformation(this._logService, name, feature, (this._overallAverage() | 0) || (min * 1.5), // default is overall default or derived from min-value
            min, max);
            this._data.set(key, info);
        }
        return info;
    }
    _overallAverage() {
        // Average of all language features. Not a great value but an approximation
        const result = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_5__/* .MovingAverage */ .nM();
        for (const info of this._data.values()) {
            result.update(info.default());
        }
        return result.value;
    }
};
LanguageFeatureDebounceService = __decorate([
    __param(0, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_3__/* .ILogService */ .VZ)
], LanguageFeatureDebounceService);
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_6__/* .registerSingleton */ .z)(ILanguageFeatureDebounceService, LanguageFeatureDebounceService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 58431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ ILanguageFeaturesService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ILanguageFeaturesService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('ILanguageFeaturesService');


/***/ }),

/***/ 18302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export LanguageFeaturesService */
/* harmony import */ var _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94330);
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58431);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9546);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class LanguageFeaturesService {
    constructor() {
        this.referenceProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.renameProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.codeActionProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.definitionProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.typeDefinitionProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.declarationProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.implementationProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentSymbolProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.inlayHintsProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.colorProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.codeLensProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentFormattingEditProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentRangeFormattingEditProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.onTypeFormattingEditProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.signatureHelpProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.hoverProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentHighlightProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.selectionRangeProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.foldingRangeProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.linkProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.inlineCompletionsProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.completionProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.linkedEditingRangeProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentRangeSemanticTokensProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentSemanticTokensProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentOnDropEditProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
        this.documentPasteEditProvider = new _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .LanguageFeatureRegistry */ .c(this._score.bind(this));
    }
    _score(uri) {
        var _a;
        return (_a = this._notebookTypeResolver) === null || _a === void 0 ? void 0 : _a.call(this, uri);
    }
}
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerSingleton */ .z)(_languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__/* .ILanguageFeaturesService */ .p, LanguageFeaturesService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 10502:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: function() { return /* binding */ LanguageService; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/glob.js
var glob = __webpack_require__(97869);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/mime.js
var mime = __webpack_require__(13074);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(11966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/path.js + 1 modules
var common_path = __webpack_require__(5944);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(8506);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(96038);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languagesAssociations.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







let registeredAssociations = [];
let nonUserRegisteredAssociations = [];
let userRegisteredAssociations = [];
/**
 * Associate a language to the registry (platform).
 * * **NOTE**: This association will lose over associations registered using `registerConfiguredLanguageAssociation`.
 * * **NOTE**: Use `clearPlatformLanguageAssociations` to remove all associations registered using this function.
 */
function registerPlatformLanguageAssociation(association, warnOnOverwrite = false) {
    _registerLanguageAssociation(association, false, warnOnOverwrite);
}
function _registerLanguageAssociation(association, userConfigured, warnOnOverwrite) {
    // Register
    const associationItem = toLanguageAssociationItem(association, userConfigured);
    registeredAssociations.push(associationItem);
    if (!associationItem.userConfigured) {
        nonUserRegisteredAssociations.push(associationItem);
    }
    else {
        userRegisteredAssociations.push(associationItem);
    }
    // Check for conflicts unless this is a user configured association
    if (warnOnOverwrite && !associationItem.userConfigured) {
        registeredAssociations.forEach(a => {
            if (a.mime === associationItem.mime || a.userConfigured) {
                return; // same mime or userConfigured is ok
            }
            if (associationItem.extension && a.extension === associationItem.extension) {
                console.warn(`Overwriting extension <<${associationItem.extension}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.filename && a.filename === associationItem.filename) {
                console.warn(`Overwriting filename <<${associationItem.filename}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.filepattern && a.filepattern === associationItem.filepattern) {
                console.warn(`Overwriting filepattern <<${associationItem.filepattern}>> to now point to mime <<${associationItem.mime}>>`);
            }
            if (associationItem.firstline && a.firstline === associationItem.firstline) {
                console.warn(`Overwriting firstline <<${associationItem.firstline}>> to now point to mime <<${associationItem.mime}>>`);
            }
        });
    }
}
function toLanguageAssociationItem(association, userConfigured) {
    return {
        id: association.id,
        mime: association.mime,
        filename: association.filename,
        extension: association.extension,
        filepattern: association.filepattern,
        firstline: association.firstline,
        userConfigured: userConfigured,
        filenameLowercase: association.filename ? association.filename.toLowerCase() : undefined,
        extensionLowercase: association.extension ? association.extension.toLowerCase() : undefined,
        filepatternLowercase: association.filepattern ? (0,glob/* parse */.Qc)(association.filepattern.toLowerCase()) : undefined,
        filepatternOnPath: association.filepattern ? association.filepattern.indexOf(common_path/* posix */.KR.sep) >= 0 : false
    };
}
/**
 * Clear language associations from the registry (platform).
 */
function clearPlatformLanguageAssociations() {
    registeredAssociations = registeredAssociations.filter(a => a.userConfigured);
    nonUserRegisteredAssociations = [];
}
/**
 * @see `getMimeTypes`
 */
function getLanguageIds(resource, firstLine) {
    return getAssociations(resource, firstLine).map(item => item.id);
}
function getAssociations(resource, firstLine) {
    let path;
    if (resource) {
        switch (resource.scheme) {
            case network/* Schemas */.lg.file:
                path = resource.fsPath;
                break;
            case network/* Schemas */.lg.data: {
                const metadata = resources/* DataUri */.Vb.parseMetaData(resource);
                path = metadata.get(resources/* DataUri */.Vb.META_DATA_LABEL);
                break;
            }
            case network/* Schemas */.lg.vscodeNotebookCell:
                // File path not relevant for language detection of cell
                path = undefined;
                break;
            default:
                path = resource.path;
        }
    }
    if (!path) {
        return [{ id: 'unknown', mime: mime/* Mimes */.v.unknown }];
    }
    path = path.toLowerCase();
    const filename = (0,common_path/* basename */.EZ)(path);
    // 1.) User configured mappings have highest priority
    const configuredLanguage = getAssociationByPath(path, filename, userRegisteredAssociations);
    if (configuredLanguage) {
        return [configuredLanguage, { id: modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd, mime: mime/* Mimes */.v.text }];
    }
    // 2.) Registered mappings have middle priority
    const registeredLanguage = getAssociationByPath(path, filename, nonUserRegisteredAssociations);
    if (registeredLanguage) {
        return [registeredLanguage, { id: modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd, mime: mime/* Mimes */.v.text }];
    }
    // 3.) Firstline has lowest priority
    if (firstLine) {
        const firstlineLanguage = getAssociationByFirstline(firstLine);
        if (firstlineLanguage) {
            return [firstlineLanguage, { id: modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd, mime: mime/* Mimes */.v.text }];
        }
    }
    return [{ id: 'unknown', mime: mime/* Mimes */.v.unknown }];
}
function getAssociationByPath(path, filename, associations) {
    var _a;
    let filenameMatch = undefined;
    let patternMatch = undefined;
    let extensionMatch = undefined;
    // We want to prioritize associations based on the order they are registered so that the last registered
    // association wins over all other. This is for https://github.com/microsoft/vscode/issues/20074
    for (let i = associations.length - 1; i >= 0; i--) {
        const association = associations[i];
        // First exact name match
        if (filename === association.filenameLowercase) {
            filenameMatch = association;
            break; // take it!
        }
        // Longest pattern match
        if (association.filepattern) {
            if (!patternMatch || association.filepattern.length > patternMatch.filepattern.length) {
                const target = association.filepatternOnPath ? path : filename; // match on full path if pattern contains path separator
                if ((_a = association.filepatternLowercase) === null || _a === void 0 ? void 0 : _a.call(association, target)) {
                    patternMatch = association;
                }
            }
        }
        // Longest extension match
        if (association.extension) {
            if (!extensionMatch || association.extension.length > extensionMatch.extension.length) {
                if (filename.endsWith(association.extensionLowercase)) {
                    extensionMatch = association;
                }
            }
        }
    }
    // 1.) Exact name match has second highest priority
    if (filenameMatch) {
        return filenameMatch;
    }
    // 2.) Match on pattern
    if (patternMatch) {
        return patternMatch;
    }
    // 3.) Match on extension comes next
    if (extensionMatch) {
        return extensionMatch;
    }
    return undefined;
}
function getAssociationByFirstline(firstLine) {
    if ((0,strings/* startsWithUTF8BOM */.uS)(firstLine)) {
        firstLine = firstLine.substr(1);
    }
    if (firstLine.length > 0) {
        // We want to prioritize associations based on the order they are registered so that the last registered
        // association wins over all other. This is for https://github.com/microsoft/vscode/issues/20074
        for (let i = registeredAssociations.length - 1; i >= 0; i--) {
            const association = registeredAssociations[i];
            if (!association.firstline) {
                continue;
            }
            const matches = firstLine.match(association.firstline);
            if (matches && matches.length > 0) {
                return association;
            }
        }
    }
    return undefined;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js
var configurationRegistry = __webpack_require__(85118);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(72015);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const languagesRegistry_hasOwnProperty = Object.prototype.hasOwnProperty;
const NULL_LANGUAGE_ID = 'vs.editor.nullLanguage';
class LanguageIdCodec {
    constructor() {
        this._languageIdToLanguage = [];
        this._languageToLanguageId = new Map();
        this._register(NULL_LANGUAGE_ID, 0 /* LanguageId.Null */);
        this._register(modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd, 1 /* LanguageId.PlainText */);
        this._nextLanguageId = 2;
    }
    _register(language, languageId) {
        this._languageIdToLanguage[languageId] = language;
        this._languageToLanguageId.set(language, languageId);
    }
    register(language) {
        if (this._languageToLanguageId.has(language)) {
            return;
        }
        const languageId = this._nextLanguageId++;
        this._register(language, languageId);
    }
    encodeLanguageId(languageId) {
        return this._languageToLanguageId.get(languageId) || 0 /* LanguageId.Null */;
    }
    decodeLanguageId(languageId) {
        return this._languageIdToLanguage[languageId] || NULL_LANGUAGE_ID;
    }
}
class LanguagesRegistry extends lifecycle/* Disposable */.JT {
    constructor(useModesRegistry = true, warnOnOverwrite = false) {
        super();
        this._onDidChange = this._register(new common_event/* Emitter */.Q5());
        this.onDidChange = this._onDidChange.event;
        LanguagesRegistry.instanceCount++;
        this._warnOnOverwrite = warnOnOverwrite;
        this.languageIdCodec = new LanguageIdCodec();
        this._dynamicLanguages = [];
        this._languages = {};
        this._mimeTypesMap = {};
        this._nameMap = {};
        this._lowercaseNameMap = {};
        if (useModesRegistry) {
            this._initializeFromRegistry();
            this._register(modesRegistry/* ModesRegistry */.dQ.onDidChangeLanguages((m) => {
                this._initializeFromRegistry();
            }));
        }
    }
    dispose() {
        LanguagesRegistry.instanceCount--;
        super.dispose();
    }
    _initializeFromRegistry() {
        this._languages = {};
        this._mimeTypesMap = {};
        this._nameMap = {};
        this._lowercaseNameMap = {};
        clearPlatformLanguageAssociations();
        const desc = [].concat(modesRegistry/* ModesRegistry */.dQ.getLanguages()).concat(this._dynamicLanguages);
        this._registerLanguages(desc);
    }
    _registerLanguages(desc) {
        for (const d of desc) {
            this._registerLanguage(d);
        }
        // Rebuild fast path maps
        this._mimeTypesMap = {};
        this._nameMap = {};
        this._lowercaseNameMap = {};
        Object.keys(this._languages).forEach((langId) => {
            const language = this._languages[langId];
            if (language.name) {
                this._nameMap[language.name] = language.identifier;
            }
            language.aliases.forEach((alias) => {
                this._lowercaseNameMap[alias.toLowerCase()] = language.identifier;
            });
            language.mimetypes.forEach((mimetype) => {
                this._mimeTypesMap[mimetype] = language.identifier;
            });
        });
        platform/* Registry */.B.as(configurationRegistry/* Extensions */.IP.Configuration).registerOverrideIdentifiers(this.getRegisteredLanguageIds());
        this._onDidChange.fire();
    }
    _registerLanguage(lang) {
        const langId = lang.id;
        let resolvedLanguage;
        if (languagesRegistry_hasOwnProperty.call(this._languages, langId)) {
            resolvedLanguage = this._languages[langId];
        }
        else {
            this.languageIdCodec.register(langId);
            resolvedLanguage = {
                identifier: langId,
                name: null,
                mimetypes: [],
                aliases: [],
                extensions: [],
                filenames: [],
                configurationFiles: [],
                icons: []
            };
            this._languages[langId] = resolvedLanguage;
        }
        this._mergeLanguage(resolvedLanguage, lang);
    }
    _mergeLanguage(resolvedLanguage, lang) {
        const langId = lang.id;
        let primaryMime = null;
        if (Array.isArray(lang.mimetypes) && lang.mimetypes.length > 0) {
            resolvedLanguage.mimetypes.push(...lang.mimetypes);
            primaryMime = lang.mimetypes[0];
        }
        if (!primaryMime) {
            primaryMime = `text/x-${langId}`;
            resolvedLanguage.mimetypes.push(primaryMime);
        }
        if (Array.isArray(lang.extensions)) {
            if (lang.configuration) {
                // insert first as this appears to be the 'primary' language definition
                resolvedLanguage.extensions = lang.extensions.concat(resolvedLanguage.extensions);
            }
            else {
                resolvedLanguage.extensions = resolvedLanguage.extensions.concat(lang.extensions);
            }
            for (const extension of lang.extensions) {
                registerPlatformLanguageAssociation({ id: langId, mime: primaryMime, extension: extension }, this._warnOnOverwrite);
            }
        }
        if (Array.isArray(lang.filenames)) {
            for (const filename of lang.filenames) {
                registerPlatformLanguageAssociation({ id: langId, mime: primaryMime, filename: filename }, this._warnOnOverwrite);
                resolvedLanguage.filenames.push(filename);
            }
        }
        if (Array.isArray(lang.filenamePatterns)) {
            for (const filenamePattern of lang.filenamePatterns) {
                registerPlatformLanguageAssociation({ id: langId, mime: primaryMime, filepattern: filenamePattern }, this._warnOnOverwrite);
            }
        }
        if (typeof lang.firstLine === 'string' && lang.firstLine.length > 0) {
            let firstLineRegexStr = lang.firstLine;
            if (firstLineRegexStr.charAt(0) !== '^') {
                firstLineRegexStr = '^' + firstLineRegexStr;
            }
            try {
                const firstLineRegex = new RegExp(firstLineRegexStr);
                if (!(0,strings/* regExpLeadsToEndlessLoop */.IO)(firstLineRegex)) {
                    registerPlatformLanguageAssociation({ id: langId, mime: primaryMime, firstline: firstLineRegex }, this._warnOnOverwrite);
                }
            }
            catch (err) {
                // Most likely, the regex was bad
                console.warn(`[${lang.id}]: Invalid regular expression \`${firstLineRegexStr}\`: `, err);
            }
        }
        resolvedLanguage.aliases.push(langId);
        let langAliases = null;
        if (typeof lang.aliases !== 'undefined' && Array.isArray(lang.aliases)) {
            if (lang.aliases.length === 0) {
                // signal that this language should not get a name
                langAliases = [null];
            }
            else {
                langAliases = lang.aliases;
            }
        }
        if (langAliases !== null) {
            for (const langAlias of langAliases) {
                if (!langAlias || langAlias.length === 0) {
                    continue;
                }
                resolvedLanguage.aliases.push(langAlias);
            }
        }
        const containsAliases = (langAliases !== null && langAliases.length > 0);
        if (containsAliases && langAliases[0] === null) {
            // signal that this language should not get a name
        }
        else {
            const bestName = (containsAliases ? langAliases[0] : null) || langId;
            if (containsAliases || !resolvedLanguage.name) {
                resolvedLanguage.name = bestName;
            }
        }
        if (lang.configuration) {
            resolvedLanguage.configurationFiles.push(lang.configuration);
        }
        if (lang.icon) {
            resolvedLanguage.icons.push(lang.icon);
        }
    }
    isRegisteredLanguageId(languageId) {
        if (!languageId) {
            return false;
        }
        return languagesRegistry_hasOwnProperty.call(this._languages, languageId);
    }
    getRegisteredLanguageIds() {
        return Object.keys(this._languages);
    }
    getLanguageIdByLanguageName(languageName) {
        const languageNameLower = languageName.toLowerCase();
        if (!languagesRegistry_hasOwnProperty.call(this._lowercaseNameMap, languageNameLower)) {
            return null;
        }
        return this._lowercaseNameMap[languageNameLower];
    }
    getLanguageIdByMimeType(mimeType) {
        if (!mimeType) {
            return null;
        }
        if (languagesRegistry_hasOwnProperty.call(this._mimeTypesMap, mimeType)) {
            return this._mimeTypesMap[mimeType];
        }
        return null;
    }
    guessLanguageIdByFilepathOrFirstLine(resource, firstLine) {
        if (!resource && !firstLine) {
            return [];
        }
        return getLanguageIds(resource, firstLine);
    }
}
LanguagesRegistry.instanceCount = 0;

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(58606);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageService.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class LanguageService extends lifecycle/* Disposable */.JT {
    constructor(warnOnOverwrite = false) {
        super();
        this._onDidRequestBasicLanguageFeatures = this._register(new common_event/* Emitter */.Q5());
        this.onDidRequestBasicLanguageFeatures = this._onDidRequestBasicLanguageFeatures.event;
        this._onDidRequestRichLanguageFeatures = this._register(new common_event/* Emitter */.Q5());
        this.onDidRequestRichLanguageFeatures = this._onDidRequestRichLanguageFeatures.event;
        this._onDidChange = this._register(new common_event/* Emitter */.Q5({ leakWarningThreshold: 200 /* https://github.com/microsoft/vscode/issues/119968 */ }));
        this.onDidChange = this._onDidChange.event;
        this._requestedBasicLanguages = new Set();
        this._requestedRichLanguages = new Set();
        LanguageService.instanceCount++;
        this._registry = this._register(new LanguagesRegistry(true, warnOnOverwrite));
        this.languageIdCodec = this._registry.languageIdCodec;
        this._register(this._registry.onDidChange(() => this._onDidChange.fire()));
    }
    dispose() {
        LanguageService.instanceCount--;
        super.dispose();
    }
    isRegisteredLanguageId(languageId) {
        return this._registry.isRegisteredLanguageId(languageId);
    }
    getLanguageIdByLanguageName(languageName) {
        return this._registry.getLanguageIdByLanguageName(languageName);
    }
    getLanguageIdByMimeType(mimeType) {
        return this._registry.getLanguageIdByMimeType(mimeType);
    }
    guessLanguageIdByFilepathOrFirstLine(resource, firstLine) {
        const languageIds = this._registry.guessLanguageIdByFilepathOrFirstLine(resource, firstLine);
        return (0,arrays/* firstOrDefault */.Xh)(languageIds, null);
    }
    createById(languageId) {
        return new LanguageSelection(this.onDidChange, () => {
            return this._createAndGetLanguageIdentifier(languageId);
        });
    }
    createByFilepathOrFirstLine(resource, firstLine) {
        return new LanguageSelection(this.onDidChange, () => {
            const languageId = this.guessLanguageIdByFilepathOrFirstLine(resource, firstLine);
            return this._createAndGetLanguageIdentifier(languageId);
        });
    }
    _createAndGetLanguageIdentifier(languageId) {
        if (!languageId || !this.isRegisteredLanguageId(languageId)) {
            // Fall back to plain text if language is unknown
            languageId = modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd;
        }
        return languageId;
    }
    requestBasicLanguageFeatures(languageId) {
        if (!this._requestedBasicLanguages.has(languageId)) {
            this._requestedBasicLanguages.add(languageId);
            this._onDidRequestBasicLanguageFeatures.fire(languageId);
        }
    }
    requestRichLanguageFeatures(languageId) {
        if (!this._requestedRichLanguages.has(languageId)) {
            this._requestedRichLanguages.add(languageId);
            // Ensure basic features are requested
            this.requestBasicLanguageFeatures(languageId);
            // Ensure tokenizers are created
            languages/* TokenizationRegistry */.RW.getOrCreate(languageId);
            this._onDidRequestRichLanguageFeatures.fire(languageId);
        }
    }
}
LanguageService.instanceCount = 0;
class LanguageSelection {
    constructor(_onDidChangeLanguages, _selector) {
        this._onDidChangeLanguages = _onDidChangeLanguages;
        this._selector = _selector;
        this._listener = null;
        this._emitter = null;
        this.languageId = this._selector();
    }
    _dispose() {
        if (this._listener) {
            this._listener.dispose();
            this._listener = null;
        }
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    }
    get onDidChange() {
        if (!this._listener) {
            this._listener = this._onDidChangeLanguages(() => this._evaluate());
        }
        if (!this._emitter) {
            this._emitter = new common_event/* Emitter */.Q5({
                onDidRemoveLastListener: () => {
                    this._dispose();
                }
            });
        }
        return this._emitter.event;
    }
    _evaluate() {
        var _a;
        const languageId = this._selector();
        if (languageId === this.languageId) {
            // no change
            return;
        }
        this.languageId = languageId;
        (_a = this._emitter) === null || _a === void 0 ? void 0 : _a.fire(this.languageId);
    }
}


/***/ }),

/***/ 68703:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ IMarkerDecorationsService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IMarkerDecorationsService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('markerDecorationsService');


/***/ }),

/***/ 8171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ MarkerDecorationsService; }
/* harmony export */ });
/* harmony import */ var _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74591);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11754);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31754);
/* harmony import */ var _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66050);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76774);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76584);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11966);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96290);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3561);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17795);
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











class MarkerDecorations extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(model) {
        super();
        this.model = model;
        this._markersData = new Map();
        this._register((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            this.model.deltaDecorations([...this._markersData.keys()], []);
            this._markersData.clear();
        }));
    }
    update(markers, newDecorations) {
        const oldIds = [...this._markersData.keys()];
        this._markersData.clear();
        const ids = this.model.deltaDecorations(oldIds, newDecorations);
        for (let index = 0; index < ids.length; index++) {
            this._markersData.set(ids[index], markers[index]);
        }
        return oldIds.length !== 0 || ids.length !== 0;
    }
    getMarker(decoration) {
        return this._markersData.get(decoration.id);
    }
}
let MarkerDecorationsService = class MarkerDecorationsService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(modelService, _markerService) {
        super();
        this._markerService = _markerService;
        this._onDidChangeMarker = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_7__/* .Emitter */ .Q5());
        this._markerDecorations = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_9__/* .ResourceMap */ .Y9();
        modelService.getModels().forEach(model => this._onModelAdded(model));
        this._register(modelService.onModelAdded(this._onModelAdded, this));
        this._register(modelService.onModelRemoved(this._onModelRemoved, this));
        this._register(this._markerService.onMarkerChanged(this._handleMarkerChange, this));
    }
    dispose() {
        super.dispose();
        this._markerDecorations.forEach(value => value.dispose());
        this._markerDecorations.clear();
    }
    getMarker(uri, decoration) {
        const markerDecorations = this._markerDecorations.get(uri);
        return markerDecorations ? (markerDecorations.getMarker(decoration) || null) : null;
    }
    _handleMarkerChange(changedResources) {
        changedResources.forEach((resource) => {
            const markerDecorations = this._markerDecorations.get(resource);
            if (markerDecorations) {
                this._updateDecorations(markerDecorations);
            }
        });
    }
    _onModelAdded(model) {
        const markerDecorations = new MarkerDecorations(model);
        this._markerDecorations.set(model.uri, markerDecorations);
        this._updateDecorations(markerDecorations);
    }
    _onModelRemoved(model) {
        var _a;
        const markerDecorations = this._markerDecorations.get(model.uri);
        if (markerDecorations) {
            markerDecorations.dispose();
            this._markerDecorations.delete(model.uri);
        }
        // clean up markers for internal, transient models
        if (model.uri.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_6__/* .Schemas */ .lg.inMemory
            || model.uri.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_6__/* .Schemas */ .lg.internal
            || model.uri.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_6__/* .Schemas */ .lg.vscode) {
            (_a = this._markerService) === null || _a === void 0 ? void 0 : _a.read({ resource: model.uri }).map(marker => marker.owner).forEach(owner => this._markerService.remove(owner, [model.uri]));
        }
    }
    _updateDecorations(markerDecorations) {
        // Limit to the first 500 errors/warnings
        const markers = this._markerService.read({ resource: markerDecorations.model.uri, take: 500 });
        const newModelDecorations = markers.map((marker) => {
            return {
                range: this._createDecorationRange(markerDecorations.model, marker),
                options: this._createDecorationOption(marker)
            };
        });
        if (markerDecorations.update(markers, newModelDecorations)) {
            this._onDidChangeMarker.fire(markerDecorations.model);
        }
    }
    _createDecorationRange(model, rawMarker) {
        let ret = _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e.lift(rawMarker);
        if (rawMarker.severity === _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkerSeverity */ .ZL.Hint && !this._hasMarkerTag(rawMarker, 1 /* MarkerTag.Unnecessary */) && !this._hasMarkerTag(rawMarker, 2 /* MarkerTag.Deprecated */)) {
            // * never render hints on multiple lines
            // * make enough space for three dots
            ret = ret.setEndPosition(ret.startLineNumber, ret.startColumn + 2);
        }
        ret = model.validateRange(ret);
        if (ret.isEmpty()) {
            const maxColumn = model.getLineLastNonWhitespaceColumn(ret.startLineNumber) ||
                model.getLineMaxColumn(ret.startLineNumber);
            if (maxColumn === 1 || ret.endColumn >= maxColumn) {
                // empty line or behind eol
                // keep the range as is, it will be rendered 1ch wide
                return ret;
            }
            const word = model.getWordAtPosition(ret.getStartPosition());
            if (word) {
                ret = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(ret.startLineNumber, word.startColumn, ret.endLineNumber, word.endColumn);
            }
        }
        else if (rawMarker.endColumn === Number.MAX_VALUE && rawMarker.startColumn === 1 && ret.startLineNumber === ret.endLineNumber) {
            const minColumn = model.getLineFirstNonWhitespaceColumn(rawMarker.startLineNumber);
            if (minColumn < ret.endColumn) {
                ret = new _core_range_js__WEBPACK_IMPORTED_MODULE_10__/* .Range */ .e(ret.startLineNumber, minColumn, ret.endLineNumber, ret.endColumn);
                rawMarker.startColumn = minColumn;
            }
        }
        return ret;
    }
    _createDecorationOption(marker) {
        let className;
        let color = undefined;
        let zIndex;
        let inlineClassName = undefined;
        let minimap;
        switch (marker.severity) {
            case _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkerSeverity */ .ZL.Hint:
                if (this._hasMarkerTag(marker, 2 /* MarkerTag.Deprecated */)) {
                    className = undefined;
                }
                else if (this._hasMarkerTag(marker, 1 /* MarkerTag.Unnecessary */)) {
                    className = "squiggly-unnecessary" /* ClassName.EditorUnnecessaryDecoration */;
                }
                else {
                    className = "squiggly-hint" /* ClassName.EditorHintDecoration */;
                }
                zIndex = 0;
                break;
            case _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkerSeverity */ .ZL.Warning:
                className = "squiggly-warning" /* ClassName.EditorWarningDecoration */;
                color = (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .themeColorFromId */ .EN)(_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .overviewRulerWarning */ .Re);
                zIndex = 20;
                minimap = {
                    color: (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .themeColorFromId */ .EN)(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_8__/* .minimapWarning */ .Ivo),
                    position: _model_js__WEBPACK_IMPORTED_MODULE_2__/* .MinimapPosition */ .F5.Inline
                };
                break;
            case _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkerSeverity */ .ZL.Info:
                className = "squiggly-info" /* ClassName.EditorInfoDecoration */;
                color = (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .themeColorFromId */ .EN)(_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .overviewRulerInfo */ .eS);
                zIndex = 10;
                break;
            case _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .MarkerSeverity */ .ZL.Error:
            default:
                className = "squiggly-error" /* ClassName.EditorErrorDecoration */;
                color = (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .themeColorFromId */ .EN)(_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .overviewRulerError */ .lK);
                zIndex = 30;
                minimap = {
                    color: (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .themeColorFromId */ .EN)(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_8__/* .minimapError */ .Gj_),
                    position: _model_js__WEBPACK_IMPORTED_MODULE_2__/* .MinimapPosition */ .F5.Inline
                };
                break;
        }
        if (marker.tags) {
            if (marker.tags.indexOf(1 /* MarkerTag.Unnecessary */) !== -1) {
                inlineClassName = "squiggly-inline-unnecessary" /* ClassName.EditorUnnecessaryInlineDecoration */;
            }
            if (marker.tags.indexOf(2 /* MarkerTag.Deprecated */) !== -1) {
                inlineClassName = "squiggly-inline-deprecated" /* ClassName.EditorDeprecatedInlineDecoration */;
            }
        }
        return {
            description: 'marker-decoration',
            stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
            className,
            showIfCollapsed: true,
            overviewRuler: {
                color,
                position: _model_js__WEBPACK_IMPORTED_MODULE_2__/* .OverviewRulerLane */ .sh.Right
            },
            minimap,
            zIndex,
            inlineClassName,
        };
    }
    _hasMarkerTag(marker, tag) {
        if (marker.tags) {
            return marker.tags.indexOf(tag) >= 0;
        }
        return false;
    }
};
MarkerDecorationsService = __decorate([
    __param(0, _model_js__WEBPACK_IMPORTED_MODULE_5__/* .IModelService */ .q),
    __param(1, _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__/* .IMarkerService */ .lT)
], MarkerDecorationsService);


/***/ }),

/***/ 76774:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ IModelService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IModelService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('modelService');


/***/ }),

/***/ 54379:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ ModelService; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94057);
/* harmony import */ var _model_textModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96422);
/* harmony import */ var _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20347);
/* harmony import */ var _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96038);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21608);
/* harmony import */ var _textResourceConfiguration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33302);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33022);
/* harmony import */ var _platform_undoRedo_common_undoRedo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18988);
/* harmony import */ var _base_common_hash_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54805);
/* harmony import */ var _model_editStack_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65479);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11966);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99269);
/* harmony import */ var _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11296);
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















function MODEL_ID(resource) {
    return resource.toString();
}
function computeModelSha1(model) {
    // compute the sha1
    const shaComputer = new _base_common_hash_js__WEBPACK_IMPORTED_MODULE_10__/* .StringSHA1 */ .yP();
    const snapshot = model.createSnapshot();
    let text;
    while ((text = snapshot.read())) {
        shaComputer.update(text);
    }
    return shaComputer.digest();
}
class ModelData {
    constructor(model, onWillDispose, onDidChangeLanguage) {
        this.model = model;
        this._modelEventListeners = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .DisposableStore */ .SL();
        this.model = model;
        this._modelEventListeners.add(model.onWillDispose(() => onWillDispose(model)));
        this._modelEventListeners.add(model.onDidChangeLanguage((e) => onDidChangeLanguage(model, e)));
    }
    dispose() {
        this._modelEventListeners.dispose();
    }
}
const DEFAULT_EOL = (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__/* .isLinux */ .IJ || _base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__/* .isMacintosh */ .dz) ? 1 /* DefaultEndOfLine.LF */ : 2 /* DefaultEndOfLine.CRLF */;
class DisposedModelInfo {
    constructor(uri, initialUndoRedoSnapshot, time, sharesUndoRedoStack, heapSize, sha1, versionId, alternativeVersionId) {
        this.uri = uri;
        this.initialUndoRedoSnapshot = initialUndoRedoSnapshot;
        this.time = time;
        this.sharesUndoRedoStack = sharesUndoRedoStack;
        this.heapSize = heapSize;
        this.sha1 = sha1;
        this.versionId = versionId;
        this.alternativeVersionId = alternativeVersionId;
    }
}
let ModelService = class ModelService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(_configurationService, _resourcePropertiesService, _undoRedoService, _languageService, _languageConfigurationService) {
        super();
        this._configurationService = _configurationService;
        this._resourcePropertiesService = _resourcePropertiesService;
        this._undoRedoService = _undoRedoService;
        this._languageService = _languageService;
        this._languageConfigurationService = _languageConfigurationService;
        this._onModelAdded = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onModelAdded = this._onModelAdded.event;
        this._onModelRemoved = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onModelRemoved = this._onModelRemoved.event;
        this._onModelModeChanged = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onModelLanguageChanged = this._onModelModeChanged.event;
        this._modelCreationOptionsByLanguageAndResource = Object.create(null);
        this._models = {};
        this._disposedModels = new Map();
        this._disposedModelsHeapSize = 0;
        this._register(this._configurationService.onDidChangeConfiguration(e => this._updateModelOptions(e)));
        this._updateModelOptions(undefined);
    }
    static _readModelOptions(config, isForSimpleWidget) {
        var _a;
        let tabSize = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.tabSize;
        if (config.editor && typeof config.editor.tabSize !== 'undefined') {
            const parsedTabSize = parseInt(config.editor.tabSize, 10);
            if (!isNaN(parsedTabSize)) {
                tabSize = parsedTabSize;
            }
            if (tabSize < 1) {
                tabSize = 1;
            }
        }
        let indentSize = 'tabSize';
        if (config.editor && typeof config.editor.indentSize !== 'undefined' && config.editor.indentSize !== 'tabSize') {
            const parsedIndentSize = parseInt(config.editor.indentSize, 10);
            if (!isNaN(parsedIndentSize)) {
                indentSize = Math.max(parsedIndentSize, 1);
            }
        }
        let insertSpaces = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.insertSpaces;
        if (config.editor && typeof config.editor.insertSpaces !== 'undefined') {
            insertSpaces = (config.editor.insertSpaces === 'false' ? false : Boolean(config.editor.insertSpaces));
        }
        let newDefaultEOL = DEFAULT_EOL;
        const eol = config.eol;
        if (eol === '\r\n') {
            newDefaultEOL = 2 /* DefaultEndOfLine.CRLF */;
        }
        else if (eol === '\n') {
            newDefaultEOL = 1 /* DefaultEndOfLine.LF */;
        }
        let trimAutoWhitespace = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.trimAutoWhitespace;
        if (config.editor && typeof config.editor.trimAutoWhitespace !== 'undefined') {
            trimAutoWhitespace = (config.editor.trimAutoWhitespace === 'false' ? false : Boolean(config.editor.trimAutoWhitespace));
        }
        let detectIndentation = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.detectIndentation;
        if (config.editor && typeof config.editor.detectIndentation !== 'undefined') {
            detectIndentation = (config.editor.detectIndentation === 'false' ? false : Boolean(config.editor.detectIndentation));
        }
        let largeFileOptimizations = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.largeFileOptimizations;
        if (config.editor && typeof config.editor.largeFileOptimizations !== 'undefined') {
            largeFileOptimizations = (config.editor.largeFileOptimizations === 'false' ? false : Boolean(config.editor.largeFileOptimizations));
        }
        let bracketPairColorizationOptions = _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__/* .EDITOR_MODEL_DEFAULTS */ .D.bracketPairColorizationOptions;
        if (((_a = config.editor) === null || _a === void 0 ? void 0 : _a.bracketPairColorization) && typeof config.editor.bracketPairColorization === 'object') {
            bracketPairColorizationOptions = {
                enabled: !!config.editor.bracketPairColorization.enabled,
                independentColorPoolPerBracketType: !!config.editor.bracketPairColorization.independentColorPoolPerBracketType
            };
        }
        return {
            isForSimpleWidget: isForSimpleWidget,
            tabSize: tabSize,
            indentSize: indentSize,
            insertSpaces: insertSpaces,
            detectIndentation: detectIndentation,
            defaultEOL: newDefaultEOL,
            trimAutoWhitespace: trimAutoWhitespace,
            largeFileOptimizations: largeFileOptimizations,
            bracketPairColorizationOptions
        };
    }
    _getEOL(resource, language) {
        if (resource) {
            return this._resourcePropertiesService.getEOL(resource, language);
        }
        const eol = this._configurationService.getValue('files.eol', { overrideIdentifier: language });
        if (eol && typeof eol === 'string' && eol !== 'auto') {
            return eol;
        }
        return _base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__.OS === 3 /* platform.OperatingSystem.Linux */ || _base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__.OS === 2 /* platform.OperatingSystem.Macintosh */ ? '\n' : '\r\n';
    }
    _shouldRestoreUndoStack() {
        const result = this._configurationService.getValue('files.restoreUndoStack');
        if (typeof result === 'boolean') {
            return result;
        }
        return true;
    }
    getCreationOptions(languageIdOrSelection, resource, isForSimpleWidget) {
        const language = (typeof languageIdOrSelection === 'string' ? languageIdOrSelection : languageIdOrSelection.languageId);
        let creationOptions = this._modelCreationOptionsByLanguageAndResource[language + resource];
        if (!creationOptions) {
            const editor = this._configurationService.getValue('editor', { overrideIdentifier: language, resource });
            const eol = this._getEOL(resource, language);
            creationOptions = ModelService._readModelOptions({ editor, eol }, isForSimpleWidget);
            this._modelCreationOptionsByLanguageAndResource[language + resource] = creationOptions;
        }
        return creationOptions;
    }
    _updateModelOptions(e) {
        const oldOptionsByLanguageAndResource = this._modelCreationOptionsByLanguageAndResource;
        this._modelCreationOptionsByLanguageAndResource = Object.create(null);
        // Update options on all models
        const keys = Object.keys(this._models);
        for (let i = 0, len = keys.length; i < len; i++) {
            const modelId = keys[i];
            const modelData = this._models[modelId];
            const language = modelData.model.getLanguageId();
            const uri = modelData.model.uri;
            if (e && !e.affectsConfiguration('editor', { overrideIdentifier: language, resource: uri }) && !e.affectsConfiguration('files.eol', { overrideIdentifier: language, resource: uri })) {
                continue; // perf: skip if this model is not affected by configuration change
            }
            const oldOptions = oldOptionsByLanguageAndResource[language + uri];
            const newOptions = this.getCreationOptions(language, uri, modelData.model.isForSimpleWidget);
            ModelService._setModelOptionsForModel(modelData.model, newOptions, oldOptions);
        }
    }
    static _setModelOptionsForModel(model, newOptions, currentOptions) {
        if (currentOptions && currentOptions.defaultEOL !== newOptions.defaultEOL && model.getLineCount() === 1) {
            model.setEOL(newOptions.defaultEOL === 1 /* DefaultEndOfLine.LF */ ? 0 /* EndOfLineSequence.LF */ : 1 /* EndOfLineSequence.CRLF */);
        }
        if (currentOptions
            && (currentOptions.detectIndentation === newOptions.detectIndentation)
            && (currentOptions.insertSpaces === newOptions.insertSpaces)
            && (currentOptions.tabSize === newOptions.tabSize)
            && (currentOptions.indentSize === newOptions.indentSize)
            && (currentOptions.trimAutoWhitespace === newOptions.trimAutoWhitespace)
            && (0,_base_common_objects_js__WEBPACK_IMPORTED_MODULE_13__/* .equals */ .fS)(currentOptions.bracketPairColorizationOptions, newOptions.bracketPairColorizationOptions)) {
            // Same indent opts, no need to touch the model
            return;
        }
        if (newOptions.detectIndentation) {
            model.detectIndentation(newOptions.insertSpaces, newOptions.tabSize);
            model.updateOptions({
                trimAutoWhitespace: newOptions.trimAutoWhitespace,
                bracketColorizationOptions: newOptions.bracketPairColorizationOptions
            });
        }
        else {
            model.updateOptions({
                insertSpaces: newOptions.insertSpaces,
                tabSize: newOptions.tabSize,
                indentSize: newOptions.indentSize,
                trimAutoWhitespace: newOptions.trimAutoWhitespace,
                bracketColorizationOptions: newOptions.bracketPairColorizationOptions
            });
        }
    }
    // --- begin IModelService
    _insertDisposedModel(disposedModelData) {
        this._disposedModels.set(MODEL_ID(disposedModelData.uri), disposedModelData);
        this._disposedModelsHeapSize += disposedModelData.heapSize;
    }
    _removeDisposedModel(resource) {
        const disposedModelData = this._disposedModels.get(MODEL_ID(resource));
        if (disposedModelData) {
            this._disposedModelsHeapSize -= disposedModelData.heapSize;
        }
        this._disposedModels.delete(MODEL_ID(resource));
        return disposedModelData;
    }
    _ensureDisposedModelsHeapSize(maxModelsHeapSize) {
        if (this._disposedModelsHeapSize > maxModelsHeapSize) {
            // we must remove some old undo stack elements to free up some memory
            const disposedModels = [];
            this._disposedModels.forEach(entry => {
                if (!entry.sharesUndoRedoStack) {
                    disposedModels.push(entry);
                }
            });
            disposedModels.sort((a, b) => a.time - b.time);
            while (disposedModels.length > 0 && this._disposedModelsHeapSize > maxModelsHeapSize) {
                const disposedModel = disposedModels.shift();
                this._removeDisposedModel(disposedModel.uri);
                if (disposedModel.initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(disposedModel.initialUndoRedoSnapshot);
                }
            }
        }
    }
    _createModelData(value, languageIdOrSelection, resource, isForSimpleWidget) {
        // create & save the model
        const options = this.getCreationOptions(languageIdOrSelection, resource, isForSimpleWidget);
        const model = new _model_textModel_js__WEBPACK_IMPORTED_MODULE_3__/* .TextModel */ .yO(value, languageIdOrSelection, options, resource, this._undoRedoService, this._languageService, this._languageConfigurationService);
        if (resource && this._disposedModels.has(MODEL_ID(resource))) {
            const disposedModelData = this._removeDisposedModel(resource);
            const elements = this._undoRedoService.getElements(resource);
            const sha1IsEqual = (computeModelSha1(model) === disposedModelData.sha1);
            if (sha1IsEqual || disposedModelData.sharesUndoRedoStack) {
                for (const element of elements.past) {
                    if ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(resource)) {
                        element.setModel(model);
                    }
                }
                for (const element of elements.future) {
                    if ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(resource)) {
                        element.setModel(model);
                    }
                }
                this._undoRedoService.setElementsValidFlag(resource, true, (element) => ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(resource)));
                if (sha1IsEqual) {
                    model._overwriteVersionId(disposedModelData.versionId);
                    model._overwriteAlternativeVersionId(disposedModelData.alternativeVersionId);
                    model._overwriteInitialUndoRedoSnapshot(disposedModelData.initialUndoRedoSnapshot);
                }
            }
            else {
                if (disposedModelData.initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(disposedModelData.initialUndoRedoSnapshot);
                }
            }
        }
        const modelId = MODEL_ID(model.uri);
        if (this._models[modelId]) {
            // There already exists a model with this id => this is a programmer error
            throw new Error('ModelService: Cannot add model because it already exists!');
        }
        const modelData = new ModelData(model, (model) => this._onWillDispose(model), (model, e) => this._onDidChangeLanguage(model, e));
        this._models[modelId] = modelData;
        return modelData;
    }
    createModel(value, languageSelection, resource, isForSimpleWidget = false) {
        let modelData;
        if (languageSelection) {
            modelData = this._createModelData(value, languageSelection, resource, isForSimpleWidget);
        }
        else {
            modelData = this._createModelData(value, _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .PLAINTEXT_LANGUAGE_ID */ .bd, resource, isForSimpleWidget);
        }
        this._onModelAdded.fire(modelData.model);
        return modelData.model;
    }
    getModels() {
        const ret = [];
        const keys = Object.keys(this._models);
        for (let i = 0, len = keys.length; i < len; i++) {
            const modelId = keys[i];
            ret.push(this._models[modelId].model);
        }
        return ret;
    }
    getModel(resource) {
        const modelId = MODEL_ID(resource);
        const modelData = this._models[modelId];
        if (!modelData) {
            return null;
        }
        return modelData.model;
    }
    // --- end IModelService
    _schemaShouldMaintainUndoRedoElements(resource) {
        return (resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__/* .Schemas */ .lg.file
            || resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__/* .Schemas */ .lg.vscodeRemote
            || resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__/* .Schemas */ .lg.vscodeUserData
            || resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__/* .Schemas */ .lg.vscodeNotebookCell
            || resource.scheme === 'fake-fs' // for tests
        );
    }
    _onWillDispose(model) {
        const modelId = MODEL_ID(model.uri);
        const modelData = this._models[modelId];
        const sharesUndoRedoStack = (this._undoRedoService.getUriComparisonKey(model.uri) !== model.uri.toString());
        let maintainUndoRedoStack = false;
        let heapSize = 0;
        if (sharesUndoRedoStack || (this._shouldRestoreUndoStack() && this._schemaShouldMaintainUndoRedoElements(model.uri))) {
            const elements = this._undoRedoService.getElements(model.uri);
            if (elements.past.length > 0 || elements.future.length > 0) {
                for (const element of elements.past) {
                    if ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(model.uri)) {
                        maintainUndoRedoStack = true;
                        heapSize += element.heapSize(model.uri);
                        element.setModel(model.uri); // remove reference from text buffer instance
                    }
                }
                for (const element of elements.future) {
                    if ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(model.uri)) {
                        maintainUndoRedoStack = true;
                        heapSize += element.heapSize(model.uri);
                        element.setModel(model.uri); // remove reference from text buffer instance
                    }
                }
            }
        }
        const maxMemory = ModelService.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK;
        if (!maintainUndoRedoStack) {
            if (!sharesUndoRedoStack) {
                const initialUndoRedoSnapshot = modelData.model.getInitialUndoRedoSnapshot();
                if (initialUndoRedoSnapshot !== null) {
                    this._undoRedoService.restoreSnapshot(initialUndoRedoSnapshot);
                }
            }
        }
        else if (!sharesUndoRedoStack && heapSize > maxMemory) {
            // the undo stack for this file would never fit in the configured memory, so don't bother with it.
            const initialUndoRedoSnapshot = modelData.model.getInitialUndoRedoSnapshot();
            if (initialUndoRedoSnapshot !== null) {
                this._undoRedoService.restoreSnapshot(initialUndoRedoSnapshot);
            }
        }
        else {
            this._ensureDisposedModelsHeapSize(maxMemory - heapSize);
            // We only invalidate the elements, but they remain in the undo-redo service.
            this._undoRedoService.setElementsValidFlag(model.uri, false, (element) => ((0,_model_editStack_js__WEBPACK_IMPORTED_MODULE_11__/* .isEditStackElement */ .e9)(element) && element.matchesResource(model.uri)));
            this._insertDisposedModel(new DisposedModelInfo(model.uri, modelData.model.getInitialUndoRedoSnapshot(), Date.now(), sharesUndoRedoStack, heapSize, computeModelSha1(model), model.getVersionId(), model.getAlternativeVersionId()));
        }
        delete this._models[modelId];
        modelData.dispose();
        // clean up cache
        delete this._modelCreationOptionsByLanguageAndResource[model.getLanguageId() + model.uri];
        this._onModelRemoved.fire(model);
    }
    _onDidChangeLanguage(model, e) {
        const oldLanguageId = e.oldLanguage;
        const newLanguageId = model.getLanguageId();
        const oldOptions = this.getCreationOptions(oldLanguageId, model.uri, model.isForSimpleWidget);
        const newOptions = this.getCreationOptions(newLanguageId, model.uri, model.isForSimpleWidget);
        ModelService._setModelOptionsForModel(model, newOptions, oldOptions);
        this._onModelModeChanged.fire({ model, oldLanguageId: oldLanguageId });
    }
};
ModelService.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20 * 1024 * 1024;
ModelService = __decorate([
    __param(0, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_8__/* .IConfigurationService */ .Ui),
    __param(1, _textResourceConfiguration_js__WEBPACK_IMPORTED_MODULE_7__/* .ITextResourcePropertiesService */ .y),
    __param(2, _platform_undoRedo_common_undoRedo_js__WEBPACK_IMPORTED_MODULE_9__/* .IUndoRedoService */ .tJ),
    __param(3, _languages_language_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageService */ .O),
    __param(4, _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_14__/* .ILanguageConfigurationService */ .c_)
], ModelService);


/***/ }),

/***/ 7699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ ITextModelService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ITextModelService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textModelService');


/***/ }),

/***/ 43315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ encodeSemanticTokensDto; }
/* harmony export */ });
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59654);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94057);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function reverseEndianness(arr) {
    for (let i = 0, len = arr.length; i < len; i += 4) {
        // flip bytes 0<->3 and 1<->2
        const b0 = arr[i + 0];
        const b1 = arr[i + 1];
        const b2 = arr[i + 2];
        const b3 = arr[i + 3];
        arr[i + 0] = b3;
        arr[i + 1] = b2;
        arr[i + 2] = b1;
        arr[i + 3] = b0;
    }
}
function toLittleEndianBuffer(arr) {
    const uint8Arr = new Uint8Array(arr.buffer, arr.byteOffset, arr.length * 4);
    if (!_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLittleEndian */ .r()) {
        // the byte order must be changed
        reverseEndianness(uint8Arr);
    }
    return _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VSBuffer */ .KN.wrap(uint8Arr);
}
function encodeSemanticTokensDto(semanticTokens) {
    const dest = new Uint32Array(encodeSemanticTokensDtoSize(semanticTokens));
    let offset = 0;
    dest[offset++] = semanticTokens.id;
    if (semanticTokens.type === 'full') {
        dest[offset++] = 1 /* EncodedSemanticTokensType.Full */;
        dest[offset++] = semanticTokens.data.length;
        dest.set(semanticTokens.data, offset);
        offset += semanticTokens.data.length;
    }
    else {
        dest[offset++] = 2 /* EncodedSemanticTokensType.Delta */;
        dest[offset++] = semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            dest[offset++] = delta.start;
            dest[offset++] = delta.deleteCount;
            if (delta.data) {
                dest[offset++] = delta.data.length;
                dest.set(delta.data, offset);
                offset += delta.data.length;
            }
            else {
                dest[offset++] = 0;
            }
        }
    }
    return toLittleEndianBuffer(dest);
}
function encodeSemanticTokensDtoSize(semanticTokens) {
    let result = 0;
    result += (+1 // id
        + 1 // type
    );
    if (semanticTokens.type === 'full') {
        result += (+1 // data length
            + semanticTokens.data.length);
    }
    else {
        result += (+1 // delta count
        );
        result += (+1 // start
            + 1 // deleteCount
            + 1 // data length
        ) * semanticTokens.deltas.length;
        for (const delta of semanticTokens.deltas) {
            if (delta.data) {
                result += delta.data.length;
            }
        }
    }
    return result;
}


/***/ }),

/***/ 48279:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ SemanticTokensProviderStyling; },
/* harmony export */   h: function() { return /* binding */ toMultilineTokens2; }
/* harmony export */ });
/* harmony import */ var _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17915);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31754);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28876);
/* harmony import */ var _tokens_sparseMultilineTokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37582);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21608);
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





let SemanticTokensProviderStyling = class SemanticTokensProviderStyling {
    constructor(_legend, _themeService, _languageService, _logService) {
        this._legend = _legend;
        this._themeService = _themeService;
        this._languageService = _languageService;
        this._logService = _logService;
        this._hasWarnedOverlappingTokens = false;
        this._hasWarnedInvalidLengthTokens = false;
        this._hasWarnedInvalidEditStart = false;
        this._hashTable = new HashTable();
    }
    getMetadata(tokenTypeIndex, tokenModifierSet, languageId) {
        const encodedLanguageId = this._languageService.languageIdCodec.encodeLanguageId(languageId);
        const entry = this._hashTable.get(tokenTypeIndex, tokenModifierSet, encodedLanguageId);
        let metadata;
        if (entry) {
            metadata = entry.metadata;
            if (this._logService.getLevel() === _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__/* .LogLevel */ ["in"].Trace) {
                this._logService.trace(`SemanticTokensProviderStyling [CACHED] ${tokenTypeIndex} / ${tokenModifierSet}: foreground ${_encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenMetadata */ .N.getForeground(metadata)}, fontStyle ${_encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenMetadata */ .N.getFontStyle(metadata).toString(2)}`);
            }
        }
        else {
            let tokenType = this._legend.tokenTypes[tokenTypeIndex];
            const tokenModifiers = [];
            if (tokenType) {
                let modifierSet = tokenModifierSet;
                for (let modifierIndex = 0; modifierSet > 0 && modifierIndex < this._legend.tokenModifiers.length; modifierIndex++) {
                    if (modifierSet & 1) {
                        tokenModifiers.push(this._legend.tokenModifiers[modifierIndex]);
                    }
                    modifierSet = modifierSet >> 1;
                }
                if (modifierSet > 0 && this._logService.getLevel() === _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__/* .LogLevel */ ["in"].Trace) {
                    this._logService.trace(`SemanticTokensProviderStyling: unknown token modifier index: ${tokenModifierSet.toString(2)} for legend: ${JSON.stringify(this._legend.tokenModifiers)}`);
                    tokenModifiers.push('not-in-legend');
                }
                const tokenStyle = this._themeService.getColorTheme().getTokenStyleMetadata(tokenType, tokenModifiers, languageId);
                if (typeof tokenStyle === 'undefined') {
                    metadata = 2147483647 /* SemanticTokensProviderStylingConstants.NO_STYLING */;
                }
                else {
                    metadata = 0;
                    if (typeof tokenStyle.italic !== 'undefined') {
                        const italicBit = (tokenStyle.italic ? 1 /* FontStyle.Italic */ : 0) << 11 /* MetadataConsts.FONT_STYLE_OFFSET */;
                        metadata |= italicBit | 1 /* MetadataConsts.SEMANTIC_USE_ITALIC */;
                    }
                    if (typeof tokenStyle.bold !== 'undefined') {
                        const boldBit = (tokenStyle.bold ? 2 /* FontStyle.Bold */ : 0) << 11 /* MetadataConsts.FONT_STYLE_OFFSET */;
                        metadata |= boldBit | 2 /* MetadataConsts.SEMANTIC_USE_BOLD */;
                    }
                    if (typeof tokenStyle.underline !== 'undefined') {
                        const underlineBit = (tokenStyle.underline ? 4 /* FontStyle.Underline */ : 0) << 11 /* MetadataConsts.FONT_STYLE_OFFSET */;
                        metadata |= underlineBit | 4 /* MetadataConsts.SEMANTIC_USE_UNDERLINE */;
                    }
                    if (typeof tokenStyle.strikethrough !== 'undefined') {
                        const strikethroughBit = (tokenStyle.strikethrough ? 8 /* FontStyle.Strikethrough */ : 0) << 11 /* MetadataConsts.FONT_STYLE_OFFSET */;
                        metadata |= strikethroughBit | 8 /* MetadataConsts.SEMANTIC_USE_STRIKETHROUGH */;
                    }
                    if (tokenStyle.foreground) {
                        const foregroundBits = (tokenStyle.foreground) << 15 /* MetadataConsts.FOREGROUND_OFFSET */;
                        metadata |= foregroundBits | 16 /* MetadataConsts.SEMANTIC_USE_FOREGROUND */;
                    }
                    if (metadata === 0) {
                        // Nothing!
                        metadata = 2147483647 /* SemanticTokensProviderStylingConstants.NO_STYLING */;
                    }
                }
            }
            else {
                if (this._logService.getLevel() === _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__/* .LogLevel */ ["in"].Trace) {
                    this._logService.trace(`SemanticTokensProviderStyling: unknown token type index: ${tokenTypeIndex} for legend: ${JSON.stringify(this._legend.tokenTypes)}`);
                }
                metadata = 2147483647 /* SemanticTokensProviderStylingConstants.NO_STYLING */;
                tokenType = 'not-in-legend';
            }
            this._hashTable.add(tokenTypeIndex, tokenModifierSet, encodedLanguageId, metadata);
            if (this._logService.getLevel() === _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__/* .LogLevel */ ["in"].Trace) {
                this._logService.trace(`SemanticTokensProviderStyling ${tokenTypeIndex} (${tokenType}) / ${tokenModifierSet} (${tokenModifiers.join(' ')}): foreground ${_encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenMetadata */ .N.getForeground(metadata)}, fontStyle ${_encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__/* .TokenMetadata */ .N.getFontStyle(metadata).toString(2)}`);
            }
        }
        return metadata;
    }
    warnOverlappingSemanticTokens(lineNumber, startColumn) {
        if (!this._hasWarnedOverlappingTokens) {
            this._hasWarnedOverlappingTokens = true;
            console.warn(`Overlapping semantic tokens detected at lineNumber ${lineNumber}, column ${startColumn}`);
        }
    }
    warnInvalidLengthSemanticTokens(lineNumber, startColumn) {
        if (!this._hasWarnedInvalidLengthTokens) {
            this._hasWarnedInvalidLengthTokens = true;
            console.warn(`Semantic token with invalid length detected at lineNumber ${lineNumber}, column ${startColumn}`);
        }
    }
    warnInvalidEditStart(previousResultId, resultId, editIndex, editStart, maxExpectedStart) {
        if (!this._hasWarnedInvalidEditStart) {
            this._hasWarnedInvalidEditStart = true;
            console.warn(`Invalid semantic tokens edit detected (previousResultId: ${previousResultId}, resultId: ${resultId}) at edit #${editIndex}: The provided start offset ${editStart} is outside the previous data (length ${maxExpectedStart}).`);
        }
    }
};
SemanticTokensProviderStyling = __decorate([
    __param(1, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_0__/* .IThemeService */ .XE),
    __param(2, _languages_language_js__WEBPACK_IMPORTED_MODULE_2__/* .ILanguageService */ .O),
    __param(3, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__/* .ILogService */ .VZ)
], SemanticTokensProviderStyling);
function toMultilineTokens2(tokens, styling, languageId) {
    const srcData = tokens.data;
    const tokenCount = (tokens.data.length / 5) | 0;
    const tokensPerArea = Math.max(Math.ceil(tokenCount / 1024 /* SemanticColoringConstants.DesiredMaxAreas */), 400 /* SemanticColoringConstants.DesiredTokensPerArea */);
    const result = [];
    let tokenIndex = 0;
    let lastLineNumber = 1;
    let lastStartCharacter = 0;
    while (tokenIndex < tokenCount) {
        const tokenStartIndex = tokenIndex;
        let tokenEndIndex = Math.min(tokenStartIndex + tokensPerArea, tokenCount);
        // Keep tokens on the same line in the same area...
        if (tokenEndIndex < tokenCount) {
            let smallTokenEndIndex = tokenEndIndex;
            while (smallTokenEndIndex - 1 > tokenStartIndex && srcData[5 * smallTokenEndIndex] === 0) {
                smallTokenEndIndex--;
            }
            if (smallTokenEndIndex - 1 === tokenStartIndex) {
                // there are so many tokens on this line that our area would be empty, we must now go right
                let bigTokenEndIndex = tokenEndIndex;
                while (bigTokenEndIndex + 1 < tokenCount && srcData[5 * bigTokenEndIndex] === 0) {
                    bigTokenEndIndex++;
                }
                tokenEndIndex = bigTokenEndIndex;
            }
            else {
                tokenEndIndex = smallTokenEndIndex;
            }
        }
        let destData = new Uint32Array((tokenEndIndex - tokenStartIndex) * 4);
        let destOffset = 0;
        let areaLine = 0;
        let prevLineNumber = 0;
        let prevEndCharacter = 0;
        while (tokenIndex < tokenEndIndex) {
            const srcOffset = 5 * tokenIndex;
            const deltaLine = srcData[srcOffset];
            const deltaCharacter = srcData[srcOffset + 1];
            // Casting both `lineNumber`, `startCharacter` and `endCharacter` here to uint32 using `|0`
            // to validate below with the actual values that will be inserted in the Uint32Array result
            const lineNumber = (lastLineNumber + deltaLine) | 0;
            const startCharacter = (deltaLine === 0 ? (lastStartCharacter + deltaCharacter) | 0 : deltaCharacter);
            const length = srcData[srcOffset + 2];
            const endCharacter = (startCharacter + length) | 0;
            const tokenTypeIndex = srcData[srcOffset + 3];
            const tokenModifierSet = srcData[srcOffset + 4];
            if (endCharacter <= startCharacter) {
                // this token is invalid (most likely a negative length casted to uint32)
                styling.warnInvalidLengthSemanticTokens(lineNumber, startCharacter + 1);
            }
            else if (prevLineNumber === lineNumber && prevEndCharacter > startCharacter) {
                // this token overlaps with the previous token
                styling.warnOverlappingSemanticTokens(lineNumber, startCharacter + 1);
            }
            else {
                const metadata = styling.getMetadata(tokenTypeIndex, tokenModifierSet, languageId);
                if (metadata !== 2147483647 /* SemanticTokensProviderStylingConstants.NO_STYLING */) {
                    if (areaLine === 0) {
                        areaLine = lineNumber;
                    }
                    destData[destOffset] = lineNumber - areaLine;
                    destData[destOffset + 1] = startCharacter;
                    destData[destOffset + 2] = endCharacter;
                    destData[destOffset + 3] = metadata;
                    destOffset += 4;
                    prevLineNumber = lineNumber;
                    prevEndCharacter = endCharacter;
                }
            }
            lastLineNumber = lineNumber;
            lastStartCharacter = startCharacter;
            tokenIndex++;
        }
        if (destOffset !== destData.length) {
            destData = destData.subarray(0, destOffset);
        }
        const tokens = _tokens_sparseMultilineTokens_js__WEBPACK_IMPORTED_MODULE_4__/* .SparseMultilineTokens */ .Y.create(areaLine, destData);
        result.push(tokens);
    }
    return result;
}
class HashTableEntry {
    constructor(tokenTypeIndex, tokenModifierSet, languageId, metadata) {
        this.tokenTypeIndex = tokenTypeIndex;
        this.tokenModifierSet = tokenModifierSet;
        this.languageId = languageId;
        this.metadata = metadata;
        this.next = null;
    }
}
class HashTable {
    constructor() {
        this._elementsCount = 0;
        this._currentLengthIndex = 0;
        this._currentLength = HashTable._SIZES[this._currentLengthIndex];
        this._growCount = Math.round(this._currentLengthIndex + 1 < HashTable._SIZES.length ? 2 / 3 * this._currentLength : 0);
        this._elements = [];
        HashTable._nullOutEntries(this._elements, this._currentLength);
    }
    static _nullOutEntries(entries, length) {
        for (let i = 0; i < length; i++) {
            entries[i] = null;
        }
    }
    _hash2(n1, n2) {
        return (((n1 << 5) - n1) + n2) | 0; // n1 * 31 + n2, keep as int32
    }
    _hashFunc(tokenTypeIndex, tokenModifierSet, languageId) {
        return this._hash2(this._hash2(tokenTypeIndex, tokenModifierSet), languageId) % this._currentLength;
    }
    get(tokenTypeIndex, tokenModifierSet, languageId) {
        const hash = this._hashFunc(tokenTypeIndex, tokenModifierSet, languageId);
        let p = this._elements[hash];
        while (p) {
            if (p.tokenTypeIndex === tokenTypeIndex && p.tokenModifierSet === tokenModifierSet && p.languageId === languageId) {
                return p;
            }
            p = p.next;
        }
        return null;
    }
    add(tokenTypeIndex, tokenModifierSet, languageId, metadata) {
        this._elementsCount++;
        if (this._growCount !== 0 && this._elementsCount >= this._growCount) {
            // expand!
            const oldElements = this._elements;
            this._currentLengthIndex++;
            this._currentLength = HashTable._SIZES[this._currentLengthIndex];
            this._growCount = Math.round(this._currentLengthIndex + 1 < HashTable._SIZES.length ? 2 / 3 * this._currentLength : 0);
            this._elements = [];
            HashTable._nullOutEntries(this._elements, this._currentLength);
            for (const first of oldElements) {
                let p = first;
                while (p) {
                    const oldNext = p.next;
                    p.next = null;
                    this._add(p);
                    p = oldNext;
                }
            }
        }
        this._add(new HashTableEntry(tokenTypeIndex, tokenModifierSet, languageId, metadata));
    }
    _add(element) {
        const hash = this._hashFunc(element.tokenTypeIndex, element.tokenModifierSet, element.languageId);
        element.next = this._elements[hash];
        this._elements[hash] = element;
    }
}
HashTable._SIZES = [3, 7, 13, 31, 61, 127, 251, 509, 1021, 2039, 4093, 8191, 16381, 32749, 65521, 131071, 262139, 524287, 1048573, 2097143];


/***/ }),

/***/ 1255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ ISemanticTokensStylingService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ISemanticTokensStylingService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('semanticTokensStylingService');


/***/ }),

/***/ 26811:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SemanticTokensStylingService */
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21608);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31754);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28876);
/* harmony import */ var _semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48279);
/* harmony import */ var _semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1255);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9546);
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







let SemanticTokensStylingService = class SemanticTokensStylingService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(_themeService, _logService, _languageService) {
        super();
        this._themeService = _themeService;
        this._logService = _logService;
        this._languageService = _languageService;
        this._caches = new WeakMap();
        this._register(this._themeService.onDidColorThemeChange(() => {
            this._caches = new WeakMap();
        }));
    }
    getStyling(provider) {
        if (!this._caches.has(provider)) {
            this._caches.set(provider, new _semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_4__/* .SemanticTokensProviderStyling */ .$(provider.getLegend(), this._themeService, this._languageService, this._logService));
        }
        return this._caches.get(provider);
    }
};
SemanticTokensStylingService = __decorate([
    __param(0, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_2__/* .IThemeService */ .XE),
    __param(1, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_3__/* .ILogService */ .VZ),
    __param(2, _languages_language_js__WEBPACK_IMPORTED_MODULE_1__/* .ILanguageService */ .O)
], SemanticTokensStylingService);
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_6__/* .registerSingleton */ .z)(_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_5__/* .ISemanticTokensStylingService */ .s, SemanticTokensStylingService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 33302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ ITextResourceConfigurationService; },
/* harmony export */   y: function() { return /* binding */ ITextResourcePropertiesService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);

const ITextResourceConfigurationService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textResourceConfigurationService');
const ITextResourcePropertiesService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textResourcePropertiesService');


/***/ }),

/***/ 98965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ TreeViewsDnDService; },
/* harmony export */   f: function() { return /* binding */ DraggedTreeItemsIdentifier; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TreeViewsDnDService {
    constructor() {
        this._dragOperations = new Map();
    }
    removeDragOperationTransfer(uuid) {
        if ((uuid && this._dragOperations.has(uuid))) {
            const operation = this._dragOperations.get(uuid);
            this._dragOperations.delete(uuid);
            return operation;
        }
        return undefined;
    }
}
class DraggedTreeItemsIdentifier {
    constructor(identifier) {
        this.identifier = identifier;
    }
}


/***/ }),

/***/ 50622:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ ITreeViewsDnDService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9546);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/* harmony import */ var _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98965);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const ITreeViewsDnDService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('treeViewsDndService');
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerSingleton */ .z)(ITreeViewsDnDService, _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__/* .TreeViewsDnDService */ .Y, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 3669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ UnicodeTextModelHighlighter; }
/* harmony export */ });
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76584);
/* harmony import */ var _model_textModelSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17768);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23607);
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29012);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81814);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





class UnicodeTextModelHighlighter {
    static computeUnicodeHighlights(model, options, range) {
        const startLine = range ? range.startLineNumber : 1;
        const endLine = range ? range.endLineNumber : model.getLineCount();
        const codePointHighlighter = new CodePointHighlighter(options);
        const candidates = codePointHighlighter.getCandidateCodePoints();
        let regex;
        if (candidates === 'allNonBasicAscii') {
            regex = new RegExp('[^\\t\\n\\r\\x20-\\x7E]', 'g');
        }
        else {
            regex = new RegExp(`${buildRegExpCharClassExpr(Array.from(candidates))}`, 'g');
        }
        const searcher = new _model_textModelSearch_js__WEBPACK_IMPORTED_MODULE_0__/* .Searcher */ .sz(null, regex);
        const ranges = [];
        let hasMore = false;
        let m;
        let ambiguousCharacterCount = 0;
        let invisibleCharacterCount = 0;
        let nonBasicAsciiCharacterCount = 0;
        forLoop: for (let lineNumber = startLine, lineCount = endLine; lineNumber <= lineCount; lineNumber++) {
            const lineContent = model.getLineContent(lineNumber);
            const lineLength = lineContent.length;
            // Reset regex to search from the beginning
            searcher.reset(0);
            do {
                m = searcher.next(lineContent);
                if (m) {
                    let startIndex = m.index;
                    let endIndex = m.index + m[0].length;
                    // Extend range to entire code point
                    if (startIndex > 0) {
                        const charCodeBefore = lineContent.charCodeAt(startIndex - 1);
                        if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isHighSurrogate */ .ZG(charCodeBefore)) {
                            startIndex--;
                        }
                    }
                    if (endIndex + 1 < lineLength) {
                        const charCodeBefore = lineContent.charCodeAt(endIndex - 1);
                        if (_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isHighSurrogate */ .ZG(charCodeBefore)) {
                            endIndex++;
                        }
                    }
                    const str = lineContent.substring(startIndex, endIndex);
                    let word = (0,_core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .getWordAtText */ .t2)(startIndex + 1, _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_WORD_REGEXP */ .Af, lineContent, 0);
                    if (word && word.endColumn <= startIndex + 1) {
                        // The word does not include the problematic character, ignore the word
                        word = null;
                    }
                    const highlightReason = codePointHighlighter.shouldHighlightNonBasicASCII(str, word ? word.word : null);
                    if (highlightReason !== 0 /* SimpleHighlightReason.None */) {
                        if (highlightReason === 3 /* SimpleHighlightReason.Ambiguous */) {
                            ambiguousCharacterCount++;
                        }
                        else if (highlightReason === 2 /* SimpleHighlightReason.Invisible */) {
                            invisibleCharacterCount++;
                        }
                        else if (highlightReason === 1 /* SimpleHighlightReason.NonBasicASCII */) {
                            nonBasicAsciiCharacterCount++;
                        }
                        else {
                            (0,_base_common_assert_js__WEBPACK_IMPORTED_MODULE_2__/* .assertNever */ .vE)(highlightReason);
                        }
                        const MAX_RESULT_LENGTH = 1000;
                        if (ranges.length >= MAX_RESULT_LENGTH) {
                            hasMore = true;
                            break forLoop;
                        }
                        ranges.push(new _core_range_js__WEBPACK_IMPORTED_MODULE_4__/* .Range */ .e(lineNumber, startIndex + 1, lineNumber, endIndex + 1));
                    }
                }
            } while (m);
        }
        return {
            ranges,
            hasMore,
            ambiguousCharacterCount,
            invisibleCharacterCount,
            nonBasicAsciiCharacterCount
        };
    }
    static computeUnicodeHighlightReason(char, options) {
        const codePointHighlighter = new CodePointHighlighter(options);
        const reason = codePointHighlighter.shouldHighlightNonBasicASCII(char, null);
        switch (reason) {
            case 0 /* SimpleHighlightReason.None */:
                return null;
            case 2 /* SimpleHighlightReason.Invisible */:
                return { kind: 1 /* UnicodeHighlighterReasonKind.Invisible */ };
            case 3 /* SimpleHighlightReason.Ambiguous */: {
                const codePoint = char.codePointAt(0);
                const primaryConfusable = codePointHighlighter.ambiguousCharacters.getPrimaryConfusable(codePoint);
                const notAmbiguousInLocales = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .AmbiguousCharacters */ .ZK.getLocales().filter((l) => !_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .AmbiguousCharacters */ .ZK.getInstance(new Set([...options.allowedLocales, l])).isAmbiguous(codePoint));
                return { kind: 0 /* UnicodeHighlighterReasonKind.Ambiguous */, confusableWith: String.fromCodePoint(primaryConfusable), notAmbiguousInLocales };
            }
            case 1 /* SimpleHighlightReason.NonBasicASCII */:
                return { kind: 2 /* UnicodeHighlighterReasonKind.NonBasicAscii */ };
        }
    }
}
function buildRegExpCharClassExpr(codePoints, flags) {
    const src = `[${_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .escapeRegExpCharacters */ .ec(codePoints.map((i) => String.fromCodePoint(i)).join(''))}]`;
    return src;
}
class CodePointHighlighter {
    constructor(options) {
        this.options = options;
        this.allowedCodePoints = new Set(options.allowedCodePoints);
        this.ambiguousCharacters = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .AmbiguousCharacters */ .ZK.getInstance(new Set(options.allowedLocales));
    }
    getCandidateCodePoints() {
        if (this.options.nonBasicASCII) {
            return 'allNonBasicAscii';
        }
        const set = new Set();
        if (this.options.invisibleCharacters) {
            for (const cp of _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .InvisibleCharacters */ .vU.codePoints) {
                if (!isAllowedInvisibleCharacter(String.fromCodePoint(cp))) {
                    set.add(cp);
                }
            }
        }
        if (this.options.ambiguousCharacters) {
            for (const cp of this.ambiguousCharacters.getConfusableCodePoints()) {
                set.add(cp);
            }
        }
        for (const cp of this.allowedCodePoints) {
            set.delete(cp);
        }
        return set;
    }
    shouldHighlightNonBasicASCII(character, wordContext) {
        const codePoint = character.codePointAt(0);
        if (this.allowedCodePoints.has(codePoint)) {
            return 0 /* SimpleHighlightReason.None */;
        }
        if (this.options.nonBasicASCII) {
            return 1 /* SimpleHighlightReason.NonBasicASCII */;
        }
        let hasBasicASCIICharacters = false;
        let hasNonConfusableNonBasicAsciiCharacter = false;
        if (wordContext) {
            for (const char of wordContext) {
                const codePoint = char.codePointAt(0);
                const isBasicASCII = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .isBasicASCII */ .$i(char);
                hasBasicASCIICharacters = hasBasicASCIICharacters || isBasicASCII;
                if (!isBasicASCII &&
                    !this.ambiguousCharacters.isAmbiguous(codePoint) &&
                    !_base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .InvisibleCharacters */ .vU.isInvisibleCharacter(codePoint)) {
                    hasNonConfusableNonBasicAsciiCharacter = true;
                }
            }
        }
        if (
        /* Don't allow mixing weird looking characters with ASCII */ !hasBasicASCIICharacters &&
            /* Is there an obviously weird looking character? */ hasNonConfusableNonBasicAsciiCharacter) {
            return 0 /* SimpleHighlightReason.None */;
        }
        if (this.options.invisibleCharacters) {
            // TODO check for emojis
            if (!isAllowedInvisibleCharacter(character) && _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__/* .InvisibleCharacters */ .vU.isInvisibleCharacter(codePoint)) {
                return 2 /* SimpleHighlightReason.Invisible */;
            }
        }
        if (this.options.ambiguousCharacters) {
            if (this.ambiguousCharacters.isAmbiguous(codePoint)) {
                return 3 /* SimpleHighlightReason.Ambiguous */;
            }
        }
        return 0 /* SimpleHighlightReason.None */;
    }
}
function isAllowedInvisibleCharacter(character) {
    return character === ' ' || character === '\n' || character === '\t';
}


/***/ }),

/***/ 62688:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: function() { return /* binding */ StandaloneCodeEditorNLS; },
/* harmony export */   Oe: function() { return /* binding */ AccessibilityHelpNLS; },
/* harmony export */   UX: function() { return /* binding */ QuickCommandNLS; },
/* harmony export */   aq: function() { return /* binding */ QuickOutlineNLS; },
/* harmony export */   iN: function() { return /* binding */ StandaloneServicesNLS; },
/* harmony export */   ld: function() { return /* binding */ QuickHelpNLS; },
/* harmony export */   qq: function() { return /* binding */ GoToLineNLS; },
/* harmony export */   ug: function() { return /* binding */ InspectTokensNLS; },
/* harmony export */   xi: function() { return /* binding */ ToggleHighContrastNLS; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var AccessibilityHelpNLS;
(function (AccessibilityHelpNLS) {
    AccessibilityHelpNLS.noSelection = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("noSelection", "No selection");
    AccessibilityHelpNLS.singleSelectionRange = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("singleSelectionRange", "Line {0}, Column {1} ({2} selected)");
    AccessibilityHelpNLS.singleSelection = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("singleSelection", "Line {0}, Column {1}");
    AccessibilityHelpNLS.multiSelectionRange = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("multiSelectionRange", "{0} selections ({1} characters selected)");
    AccessibilityHelpNLS.multiSelection = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("multiSelection", "{0} selections");
    AccessibilityHelpNLS.emergencyConfOn = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("emergencyConfOn", "Now changing the setting `accessibilitySupport` to 'on'.");
    AccessibilityHelpNLS.openingDocs = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("openingDocs", "Now opening the Editor Accessibility documentation page.");
    AccessibilityHelpNLS.readonlyDiffEditor = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("readonlyDiffEditor", " in a read-only pane of a diff editor.");
    AccessibilityHelpNLS.editableDiffEditor = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("editableDiffEditor", " in a pane of a diff editor.");
    AccessibilityHelpNLS.readonlyEditor = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("readonlyEditor", " in a read-only code editor");
    AccessibilityHelpNLS.editableEditor = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("editableEditor", " in a code editor");
    AccessibilityHelpNLS.changeConfigToOnMac = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("changeConfigToOnMac", "To configure the editor to be optimized for usage with a Screen Reader press Command+E now.");
    AccessibilityHelpNLS.changeConfigToOnWinLinux = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("changeConfigToOnWinLinux", "To configure the editor to be optimized for usage with a Screen Reader press Control+E now.");
    AccessibilityHelpNLS.auto_on = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("auto_on", "The editor is configured to be optimized for usage with a Screen Reader.");
    AccessibilityHelpNLS.auto_off = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("auto_off", "The editor is configured to never be optimized for usage with a Screen Reader, which is not the case at this time.");
    AccessibilityHelpNLS.tabFocusModeOnMsg = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("tabFocusModeOnMsg", "Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.");
    AccessibilityHelpNLS.tabFocusModeOnMsgNoKb = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("tabFocusModeOnMsgNoKb", "Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.");
    AccessibilityHelpNLS.tabFocusModeOffMsg = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("tabFocusModeOffMsg", "Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.");
    AccessibilityHelpNLS.tabFocusModeOffMsgNoKb = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("tabFocusModeOffMsgNoKb", "Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.");
    AccessibilityHelpNLS.openDocMac = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("openDocMac", "Press Command+H now to open a browser window with more information related to editor accessibility.");
    AccessibilityHelpNLS.openDocWinLinux = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("openDocWinLinux", "Press Control+H now to open a browser window with more information related to editor accessibility.");
    AccessibilityHelpNLS.outroMsg = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("outroMsg", "You can dismiss this tooltip and return to the editor by pressing Escape or Shift+Escape.");
    AccessibilityHelpNLS.showAccessibilityHelpAction = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC("showAccessibilityHelpAction", "Show Accessibility Help");
    AccessibilityHelpNLS.accessibilityHelpTitle = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilityHelpTitle', "Accessibility Help");
})(AccessibilityHelpNLS || (AccessibilityHelpNLS = {}));
var InspectTokensNLS;
(function (InspectTokensNLS) {
    InspectTokensNLS.inspectTokensAction = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inspectTokens', "Developer: Inspect Tokens");
})(InspectTokensNLS || (InspectTokensNLS = {}));
var GoToLineNLS;
(function (GoToLineNLS) {
    GoToLineNLS.gotoLineActionLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('gotoLineActionLabel', "Go to Line/Column...");
})(GoToLineNLS || (GoToLineNLS = {}));
var QuickHelpNLS;
(function (QuickHelpNLS) {
    QuickHelpNLS.helpQuickAccessActionLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('helpQuickAccess', "Show all Quick Access Providers");
})(QuickHelpNLS || (QuickHelpNLS = {}));
var QuickCommandNLS;
(function (QuickCommandNLS) {
    QuickCommandNLS.quickCommandActionLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickCommandActionLabel', "Command Palette");
    QuickCommandNLS.quickCommandHelp = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickCommandActionHelp', "Show And Run Commands");
})(QuickCommandNLS || (QuickCommandNLS = {}));
var QuickOutlineNLS;
(function (QuickOutlineNLS) {
    QuickOutlineNLS.quickOutlineActionLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickOutlineActionLabel', "Go to Symbol...");
    QuickOutlineNLS.quickOutlineByCategoryActionLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickOutlineByCategoryActionLabel', "Go to Symbol by Category...");
})(QuickOutlineNLS || (QuickOutlineNLS = {}));
var StandaloneCodeEditorNLS;
(function (StandaloneCodeEditorNLS) {
    StandaloneCodeEditorNLS.editorViewAccessibleLabel = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorViewAccessibleLabel', "Editor content");
    StandaloneCodeEditorNLS.accessibilityHelpMessage = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilityHelpMessage', "Press Alt+F1 for Accessibility Options.");
})(StandaloneCodeEditorNLS || (StandaloneCodeEditorNLS = {}));
var ToggleHighContrastNLS;
(function (ToggleHighContrastNLS) {
    ToggleHighContrastNLS.toggleHighContrast = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('toggleHighContrast', "Toggle High Contrast Theme");
})(ToggleHighContrastNLS || (ToggleHighContrastNLS = {}));
var StandaloneServicesNLS;
(function (StandaloneServicesNLS) {
    StandaloneServicesNLS.bulkEditServiceSummary = _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('bulkEditServiceSummary', "Made {0} edits in {1} files");
})(StandaloneServicesNLS || (StandaloneServicesNLS = {}));


/***/ }),

/***/ 87915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E$: function() { return /* binding */ OverlayWidgetPositionPreference; },
/* harmony export */   F5: function() { return /* binding */ MinimapPosition; },
/* harmony export */   Ij: function() { return /* binding */ CompletionTriggerKind; },
/* harmony export */   In: function() { return /* binding */ TextEditorCursorBlinkingStyle; },
/* harmony export */   Lu: function() { return /* binding */ RenderLineNumbersType; },
/* harmony export */   MG: function() { return /* binding */ MouseTargetType; },
/* harmony export */   MY: function() { return /* binding */ DocumentHighlightKind; },
/* harmony export */   OI: function() { return /* binding */ TrackedRangeStickiness; },
/* harmony export */   RM: function() { return /* binding */ InjectedTextCursorStops; },
/* harmony export */   U: function() { return /* binding */ GlyphMarginLane; },
/* harmony export */   VD: function() { return /* binding */ KeyCode; },
/* harmony export */   Vi: function() { return /* binding */ CursorChangeReason; },
/* harmony export */   WW: function() { return /* binding */ SignatureHelpTriggerKind; },
/* harmony export */   ZL: function() { return /* binding */ MarkerSeverity; },
/* harmony export */   _x: function() { return /* binding */ DefaultEndOfLine; },
/* harmony export */   a$: function() { return /* binding */ SelectionDirection; },
/* harmony export */   a7: function() { return /* binding */ CompletionItemInsertTextRule; },
/* harmony export */   ao: function() { return /* binding */ AccessibilitySupport; },
/* harmony export */   bw: function() { return /* binding */ InlineCompletionTriggerKind; },
/* harmony export */   cR: function() { return /* binding */ SymbolKind; },
/* harmony export */   cm: function() { return /* binding */ CompletionItemKind; },
/* harmony export */   d2: function() { return /* binding */ TextEditorCursorStyle; },
/* harmony export */   eB: function() { return /* binding */ MarkerTag; },
/* harmony export */   g4: function() { return /* binding */ ScrollType; },
/* harmony export */   g_: function() { return /* binding */ ScrollbarVisibility; },
/* harmony export */   gl: function() { return /* binding */ InlayHintKind; },
/* harmony export */   gm: function() { return /* binding */ EndOfLinePreference; },
/* harmony export */   jl: function() { return /* binding */ EndOfLineSequence; },
/* harmony export */   np: function() { return /* binding */ CodeActionTriggerType; },
/* harmony export */   py: function() { return /* binding */ PositionAffinity; },
/* harmony export */   r3: function() { return /* binding */ ContentWidgetPositionPreference; },
/* harmony export */   r4: function() { return /* binding */ SymbolTag; },
/* harmony export */   rf: function() { return /* binding */ EditorAutoIndentStrategy; },
/* harmony export */   sh: function() { return /* binding */ OverviewRulerLane; },
/* harmony export */   up: function() { return /* binding */ WrappingIndent; },
/* harmony export */   vQ: function() { return /* binding */ RenderMinimap; },
/* harmony export */   wT: function() { return /* binding */ EditorOption; },
/* harmony export */   wU: function() { return /* binding */ IndentAction; },
/* harmony export */   we: function() { return /* binding */ CompletionItemTag; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// THIS IS A GENERATED FILE. DO NOT EDIT DIRECTLY.
var AccessibilitySupport;
(function (AccessibilitySupport) {
    /**
     * This should be the browser case where it is not known if a screen reader is attached or no.
     */
    AccessibilitySupport[AccessibilitySupport["Unknown"] = 0] = "Unknown";
    AccessibilitySupport[AccessibilitySupport["Disabled"] = 1] = "Disabled";
    AccessibilitySupport[AccessibilitySupport["Enabled"] = 2] = "Enabled";
})(AccessibilitySupport || (AccessibilitySupport = {}));
var CodeActionTriggerType;
(function (CodeActionTriggerType) {
    CodeActionTriggerType[CodeActionTriggerType["Invoke"] = 1] = "Invoke";
    CodeActionTriggerType[CodeActionTriggerType["Auto"] = 2] = "Auto";
})(CodeActionTriggerType || (CodeActionTriggerType = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["None"] = 0] = "None";
    /**
     * Adjust whitespace/indentation of multiline insert texts to
     * match the current line indentation.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    /**
     * `insertText` is a snippet.
     */
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule || (CompletionItemInsertTextRule = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["User"] = 25] = "User";
    CompletionItemKind[CompletionItemKind["Issue"] = 26] = "Issue";
    CompletionItemKind[CompletionItemKind["Snippet"] = 27] = "Snippet";
})(CompletionItemKind || (CompletionItemKind = {}));
var CompletionItemTag;
(function (CompletionItemTag) {
    CompletionItemTag[CompletionItemTag["Deprecated"] = 1] = "Deprecated";
})(CompletionItemTag || (CompletionItemTag = {}));
/**
 * How a suggest provider was triggered.
 */
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind || (CompletionTriggerKind = {}));
/**
 * A positioning preference for rendering content widgets.
 */
var ContentWidgetPositionPreference;
(function (ContentWidgetPositionPreference) {
    /**
     * Place the content widget exactly at a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["EXACT"] = 0] = "EXACT";
    /**
     * Place the content widget above a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["ABOVE"] = 1] = "ABOVE";
    /**
     * Place the content widget below a position
     */
    ContentWidgetPositionPreference[ContentWidgetPositionPreference["BELOW"] = 2] = "BELOW";
})(ContentWidgetPositionPreference || (ContentWidgetPositionPreference = {}));
/**
 * Describes the reason the cursor has changed its position.
 */
var CursorChangeReason;
(function (CursorChangeReason) {
    /**
     * Unknown or not set.
     */
    CursorChangeReason[CursorChangeReason["NotSet"] = 0] = "NotSet";
    /**
     * A `model.setValue()` was called.
     */
    CursorChangeReason[CursorChangeReason["ContentFlush"] = 1] = "ContentFlush";
    /**
     * The `model` has been changed outside of this cursor and the cursor recovers its position from associated markers.
     */
    CursorChangeReason[CursorChangeReason["RecoverFromMarkers"] = 2] = "RecoverFromMarkers";
    /**
     * There was an explicit user gesture.
     */
    CursorChangeReason[CursorChangeReason["Explicit"] = 3] = "Explicit";
    /**
     * There was a Paste.
     */
    CursorChangeReason[CursorChangeReason["Paste"] = 4] = "Paste";
    /**
     * There was an Undo.
     */
    CursorChangeReason[CursorChangeReason["Undo"] = 5] = "Undo";
    /**
     * There was a Redo.
     */
    CursorChangeReason[CursorChangeReason["Redo"] = 6] = "Redo";
})(CursorChangeReason || (CursorChangeReason = {}));
/**
 * The default end of line to use when instantiating models.
 */
var DefaultEndOfLine;
(function (DefaultEndOfLine) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    DefaultEndOfLine[DefaultEndOfLine["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * Configuration options for auto indentation in the editor
 */
var EditorAutoIndentStrategy;
(function (EditorAutoIndentStrategy) {
    EditorAutoIndentStrategy[EditorAutoIndentStrategy["None"] = 0] = "None";
    EditorAutoIndentStrategy[EditorAutoIndentStrategy["Keep"] = 1] = "Keep";
    EditorAutoIndentStrategy[EditorAutoIndentStrategy["Brackets"] = 2] = "Brackets";
    EditorAutoIndentStrategy[EditorAutoIndentStrategy["Advanced"] = 3] = "Advanced";
    EditorAutoIndentStrategy[EditorAutoIndentStrategy["Full"] = 4] = "Full";
})(EditorAutoIndentStrategy || (EditorAutoIndentStrategy = {}));
var EditorOption;
(function (EditorOption) {
    EditorOption[EditorOption["acceptSuggestionOnCommitCharacter"] = 0] = "acceptSuggestionOnCommitCharacter";
    EditorOption[EditorOption["acceptSuggestionOnEnter"] = 1] = "acceptSuggestionOnEnter";
    EditorOption[EditorOption["accessibilitySupport"] = 2] = "accessibilitySupport";
    EditorOption[EditorOption["accessibilityPageSize"] = 3] = "accessibilityPageSize";
    EditorOption[EditorOption["ariaLabel"] = 4] = "ariaLabel";
    EditorOption[EditorOption["autoClosingBrackets"] = 5] = "autoClosingBrackets";
    EditorOption[EditorOption["screenReaderAnnounceInlineSuggestion"] = 6] = "screenReaderAnnounceInlineSuggestion";
    EditorOption[EditorOption["autoClosingDelete"] = 7] = "autoClosingDelete";
    EditorOption[EditorOption["autoClosingOvertype"] = 8] = "autoClosingOvertype";
    EditorOption[EditorOption["autoClosingQuotes"] = 9] = "autoClosingQuotes";
    EditorOption[EditorOption["autoIndent"] = 10] = "autoIndent";
    EditorOption[EditorOption["automaticLayout"] = 11] = "automaticLayout";
    EditorOption[EditorOption["autoSurround"] = 12] = "autoSurround";
    EditorOption[EditorOption["bracketPairColorization"] = 13] = "bracketPairColorization";
    EditorOption[EditorOption["guides"] = 14] = "guides";
    EditorOption[EditorOption["codeLens"] = 15] = "codeLens";
    EditorOption[EditorOption["codeLensFontFamily"] = 16] = "codeLensFontFamily";
    EditorOption[EditorOption["codeLensFontSize"] = 17] = "codeLensFontSize";
    EditorOption[EditorOption["colorDecorators"] = 18] = "colorDecorators";
    EditorOption[EditorOption["colorDecoratorsLimit"] = 19] = "colorDecoratorsLimit";
    EditorOption[EditorOption["columnSelection"] = 20] = "columnSelection";
    EditorOption[EditorOption["comments"] = 21] = "comments";
    EditorOption[EditorOption["contextmenu"] = 22] = "contextmenu";
    EditorOption[EditorOption["copyWithSyntaxHighlighting"] = 23] = "copyWithSyntaxHighlighting";
    EditorOption[EditorOption["cursorBlinking"] = 24] = "cursorBlinking";
    EditorOption[EditorOption["cursorSmoothCaretAnimation"] = 25] = "cursorSmoothCaretAnimation";
    EditorOption[EditorOption["cursorStyle"] = 26] = "cursorStyle";
    EditorOption[EditorOption["cursorSurroundingLines"] = 27] = "cursorSurroundingLines";
    EditorOption[EditorOption["cursorSurroundingLinesStyle"] = 28] = "cursorSurroundingLinesStyle";
    EditorOption[EditorOption["cursorWidth"] = 29] = "cursorWidth";
    EditorOption[EditorOption["disableLayerHinting"] = 30] = "disableLayerHinting";
    EditorOption[EditorOption["disableMonospaceOptimizations"] = 31] = "disableMonospaceOptimizations";
    EditorOption[EditorOption["domReadOnly"] = 32] = "domReadOnly";
    EditorOption[EditorOption["dragAndDrop"] = 33] = "dragAndDrop";
    EditorOption[EditorOption["dropIntoEditor"] = 34] = "dropIntoEditor";
    EditorOption[EditorOption["emptySelectionClipboard"] = 35] = "emptySelectionClipboard";
    EditorOption[EditorOption["experimentalWhitespaceRendering"] = 36] = "experimentalWhitespaceRendering";
    EditorOption[EditorOption["extraEditorClassName"] = 37] = "extraEditorClassName";
    EditorOption[EditorOption["fastScrollSensitivity"] = 38] = "fastScrollSensitivity";
    EditorOption[EditorOption["find"] = 39] = "find";
    EditorOption[EditorOption["fixedOverflowWidgets"] = 40] = "fixedOverflowWidgets";
    EditorOption[EditorOption["folding"] = 41] = "folding";
    EditorOption[EditorOption["foldingStrategy"] = 42] = "foldingStrategy";
    EditorOption[EditorOption["foldingHighlight"] = 43] = "foldingHighlight";
    EditorOption[EditorOption["foldingImportsByDefault"] = 44] = "foldingImportsByDefault";
    EditorOption[EditorOption["foldingMaximumRegions"] = 45] = "foldingMaximumRegions";
    EditorOption[EditorOption["unfoldOnClickAfterEndOfLine"] = 46] = "unfoldOnClickAfterEndOfLine";
    EditorOption[EditorOption["fontFamily"] = 47] = "fontFamily";
    EditorOption[EditorOption["fontInfo"] = 48] = "fontInfo";
    EditorOption[EditorOption["fontLigatures"] = 49] = "fontLigatures";
    EditorOption[EditorOption["fontSize"] = 50] = "fontSize";
    EditorOption[EditorOption["fontWeight"] = 51] = "fontWeight";
    EditorOption[EditorOption["fontVariations"] = 52] = "fontVariations";
    EditorOption[EditorOption["formatOnPaste"] = 53] = "formatOnPaste";
    EditorOption[EditorOption["formatOnType"] = 54] = "formatOnType";
    EditorOption[EditorOption["glyphMargin"] = 55] = "glyphMargin";
    EditorOption[EditorOption["gotoLocation"] = 56] = "gotoLocation";
    EditorOption[EditorOption["hideCursorInOverviewRuler"] = 57] = "hideCursorInOverviewRuler";
    EditorOption[EditorOption["hover"] = 58] = "hover";
    EditorOption[EditorOption["inDiffEditor"] = 59] = "inDiffEditor";
    EditorOption[EditorOption["inlineSuggest"] = 60] = "inlineSuggest";
    EditorOption[EditorOption["letterSpacing"] = 61] = "letterSpacing";
    EditorOption[EditorOption["lightbulb"] = 62] = "lightbulb";
    EditorOption[EditorOption["lineDecorationsWidth"] = 63] = "lineDecorationsWidth";
    EditorOption[EditorOption["lineHeight"] = 64] = "lineHeight";
    EditorOption[EditorOption["lineNumbers"] = 65] = "lineNumbers";
    EditorOption[EditorOption["lineNumbersMinChars"] = 66] = "lineNumbersMinChars";
    EditorOption[EditorOption["linkedEditing"] = 67] = "linkedEditing";
    EditorOption[EditorOption["links"] = 68] = "links";
    EditorOption[EditorOption["matchBrackets"] = 69] = "matchBrackets";
    EditorOption[EditorOption["minimap"] = 70] = "minimap";
    EditorOption[EditorOption["mouseStyle"] = 71] = "mouseStyle";
    EditorOption[EditorOption["mouseWheelScrollSensitivity"] = 72] = "mouseWheelScrollSensitivity";
    EditorOption[EditorOption["mouseWheelZoom"] = 73] = "mouseWheelZoom";
    EditorOption[EditorOption["multiCursorMergeOverlapping"] = 74] = "multiCursorMergeOverlapping";
    EditorOption[EditorOption["multiCursorModifier"] = 75] = "multiCursorModifier";
    EditorOption[EditorOption["multiCursorPaste"] = 76] = "multiCursorPaste";
    EditorOption[EditorOption["multiCursorLimit"] = 77] = "multiCursorLimit";
    EditorOption[EditorOption["occurrencesHighlight"] = 78] = "occurrencesHighlight";
    EditorOption[EditorOption["overviewRulerBorder"] = 79] = "overviewRulerBorder";
    EditorOption[EditorOption["overviewRulerLanes"] = 80] = "overviewRulerLanes";
    EditorOption[EditorOption["padding"] = 81] = "padding";
    EditorOption[EditorOption["pasteAs"] = 82] = "pasteAs";
    EditorOption[EditorOption["parameterHints"] = 83] = "parameterHints";
    EditorOption[EditorOption["peekWidgetDefaultFocus"] = 84] = "peekWidgetDefaultFocus";
    EditorOption[EditorOption["definitionLinkOpensInPeek"] = 85] = "definitionLinkOpensInPeek";
    EditorOption[EditorOption["quickSuggestions"] = 86] = "quickSuggestions";
    EditorOption[EditorOption["quickSuggestionsDelay"] = 87] = "quickSuggestionsDelay";
    EditorOption[EditorOption["readOnly"] = 88] = "readOnly";
    EditorOption[EditorOption["renameOnType"] = 89] = "renameOnType";
    EditorOption[EditorOption["renderControlCharacters"] = 90] = "renderControlCharacters";
    EditorOption[EditorOption["renderFinalNewline"] = 91] = "renderFinalNewline";
    EditorOption[EditorOption["renderLineHighlight"] = 92] = "renderLineHighlight";
    EditorOption[EditorOption["renderLineHighlightOnlyWhenFocus"] = 93] = "renderLineHighlightOnlyWhenFocus";
    EditorOption[EditorOption["renderValidationDecorations"] = 94] = "renderValidationDecorations";
    EditorOption[EditorOption["renderWhitespace"] = 95] = "renderWhitespace";
    EditorOption[EditorOption["revealHorizontalRightPadding"] = 96] = "revealHorizontalRightPadding";
    EditorOption[EditorOption["roundedSelection"] = 97] = "roundedSelection";
    EditorOption[EditorOption["rulers"] = 98] = "rulers";
    EditorOption[EditorOption["scrollbar"] = 99] = "scrollbar";
    EditorOption[EditorOption["scrollBeyondLastColumn"] = 100] = "scrollBeyondLastColumn";
    EditorOption[EditorOption["scrollBeyondLastLine"] = 101] = "scrollBeyondLastLine";
    EditorOption[EditorOption["scrollPredominantAxis"] = 102] = "scrollPredominantAxis";
    EditorOption[EditorOption["selectionClipboard"] = 103] = "selectionClipboard";
    EditorOption[EditorOption["selectionHighlight"] = 104] = "selectionHighlight";
    EditorOption[EditorOption["selectOnLineNumbers"] = 105] = "selectOnLineNumbers";
    EditorOption[EditorOption["showFoldingControls"] = 106] = "showFoldingControls";
    EditorOption[EditorOption["showUnused"] = 107] = "showUnused";
    EditorOption[EditorOption["snippetSuggestions"] = 108] = "snippetSuggestions";
    EditorOption[EditorOption["smartSelect"] = 109] = "smartSelect";
    EditorOption[EditorOption["smoothScrolling"] = 110] = "smoothScrolling";
    EditorOption[EditorOption["stickyScroll"] = 111] = "stickyScroll";
    EditorOption[EditorOption["stickyTabStops"] = 112] = "stickyTabStops";
    EditorOption[EditorOption["stopRenderingLineAfter"] = 113] = "stopRenderingLineAfter";
    EditorOption[EditorOption["suggest"] = 114] = "suggest";
    EditorOption[EditorOption["suggestFontSize"] = 115] = "suggestFontSize";
    EditorOption[EditorOption["suggestLineHeight"] = 116] = "suggestLineHeight";
    EditorOption[EditorOption["suggestOnTriggerCharacters"] = 117] = "suggestOnTriggerCharacters";
    EditorOption[EditorOption["suggestSelection"] = 118] = "suggestSelection";
    EditorOption[EditorOption["tabCompletion"] = 119] = "tabCompletion";
    EditorOption[EditorOption["tabIndex"] = 120] = "tabIndex";
    EditorOption[EditorOption["unicodeHighlighting"] = 121] = "unicodeHighlighting";
    EditorOption[EditorOption["unusualLineTerminators"] = 122] = "unusualLineTerminators";
    EditorOption[EditorOption["useShadowDOM"] = 123] = "useShadowDOM";
    EditorOption[EditorOption["useTabStops"] = 124] = "useTabStops";
    EditorOption[EditorOption["wordBreak"] = 125] = "wordBreak";
    EditorOption[EditorOption["wordSeparators"] = 126] = "wordSeparators";
    EditorOption[EditorOption["wordWrap"] = 127] = "wordWrap";
    EditorOption[EditorOption["wordWrapBreakAfterCharacters"] = 128] = "wordWrapBreakAfterCharacters";
    EditorOption[EditorOption["wordWrapBreakBeforeCharacters"] = 129] = "wordWrapBreakBeforeCharacters";
    EditorOption[EditorOption["wordWrapColumn"] = 130] = "wordWrapColumn";
    EditorOption[EditorOption["wordWrapOverride1"] = 131] = "wordWrapOverride1";
    EditorOption[EditorOption["wordWrapOverride2"] = 132] = "wordWrapOverride2";
    EditorOption[EditorOption["wrappingIndent"] = 133] = "wrappingIndent";
    EditorOption[EditorOption["wrappingStrategy"] = 134] = "wrappingStrategy";
    EditorOption[EditorOption["showDeprecated"] = 135] = "showDeprecated";
    EditorOption[EditorOption["inlayHints"] = 136] = "inlayHints";
    EditorOption[EditorOption["editorClassName"] = 137] = "editorClassName";
    EditorOption[EditorOption["pixelRatio"] = 138] = "pixelRatio";
    EditorOption[EditorOption["tabFocusMode"] = 139] = "tabFocusMode";
    EditorOption[EditorOption["layoutInfo"] = 140] = "layoutInfo";
    EditorOption[EditorOption["wrappingInfo"] = 141] = "wrappingInfo";
    EditorOption[EditorOption["defaultColorDecorators"] = 142] = "defaultColorDecorators";
})(EditorOption || (EditorOption = {}));
/**
 * End of line character preference.
 */
var EndOfLinePreference;
(function (EndOfLinePreference) {
    /**
     * Use the end of line character identified in the text buffer.
     */
    EndOfLinePreference[EndOfLinePreference["TextDefined"] = 0] = "TextDefined";
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["LF"] = 1] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLinePreference[EndOfLinePreference["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
/**
 * End of line character preference.
 */
var EndOfLineSequence;
(function (EndOfLineSequence) {
    /**
     * Use line feed (\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["LF"] = 0] = "LF";
    /**
     * Use carriage return and line feed (\r\n) as the end of line character.
     */
    EndOfLineSequence[EndOfLineSequence["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
/**
 * Vertical Lane in the glyph margin of the editor.
 */
var GlyphMarginLane;
(function (GlyphMarginLane) {
    GlyphMarginLane[GlyphMarginLane["Left"] = 1] = "Left";
    GlyphMarginLane[GlyphMarginLane["Right"] = 2] = "Right";
})(GlyphMarginLane || (GlyphMarginLane = {}));
/**
 * Describes what to do with the indentation when pressing Enter.
 */
var IndentAction;
(function (IndentAction) {
    /**
     * Insert new line and copy the previous line's indentation.
     */
    IndentAction[IndentAction["None"] = 0] = "None";
    /**
     * Insert new line and indent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Indent"] = 1] = "Indent";
    /**
     * Insert two new lines:
     *  - the first one indented which will hold the cursor
     *  - the second one at the same indentation level
     */
    IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
    /**
     * Insert new line and outdent once (relative to the previous line's indentation).
     */
    IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction || (IndentAction = {}));
var InjectedTextCursorStops;
(function (InjectedTextCursorStops) {
    InjectedTextCursorStops[InjectedTextCursorStops["Both"] = 0] = "Both";
    InjectedTextCursorStops[InjectedTextCursorStops["Right"] = 1] = "Right";
    InjectedTextCursorStops[InjectedTextCursorStops["Left"] = 2] = "Left";
    InjectedTextCursorStops[InjectedTextCursorStops["None"] = 3] = "None";
})(InjectedTextCursorStops || (InjectedTextCursorStops = {}));
var InlayHintKind;
(function (InlayHintKind) {
    InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
    InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {}));
/**
 * How an {@link InlineCompletionsProvider inline completion provider} was triggered.
 */
var InlineCompletionTriggerKind;
(function (InlineCompletionTriggerKind) {
    /**
     * Completion was triggered automatically while editing.
     * It is sufficient to return a single completion item in this case.
     */
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Automatic"] = 0] = "Automatic";
    /**
     * Completion was triggered explicitly by a user gesture.
     * Return multiple completion items to enable cycling through them.
     */
    InlineCompletionTriggerKind[InlineCompletionTriggerKind["Explicit"] = 1] = "Explicit";
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
/**
 * Virtual Key Codes, the value does not hold any inherent meaning.
 * Inspired somewhat from https://msdn.microsoft.com/en-us/library/windows/desktop/dd375731(v=vs.85).aspx
 * But these are "more general", as they should work across browsers & OS`s.
 */
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["DependsOnKbLayout"] = -1] = "DependsOnKbLayout";
    /**
     * Placed first to cover the 0 value of the enum.
     */
    KeyCode[KeyCode["Unknown"] = 0] = "Unknown";
    KeyCode[KeyCode["Backspace"] = 1] = "Backspace";
    KeyCode[KeyCode["Tab"] = 2] = "Tab";
    KeyCode[KeyCode["Enter"] = 3] = "Enter";
    KeyCode[KeyCode["Shift"] = 4] = "Shift";
    KeyCode[KeyCode["Ctrl"] = 5] = "Ctrl";
    KeyCode[KeyCode["Alt"] = 6] = "Alt";
    KeyCode[KeyCode["PauseBreak"] = 7] = "PauseBreak";
    KeyCode[KeyCode["CapsLock"] = 8] = "CapsLock";
    KeyCode[KeyCode["Escape"] = 9] = "Escape";
    KeyCode[KeyCode["Space"] = 10] = "Space";
    KeyCode[KeyCode["PageUp"] = 11] = "PageUp";
    KeyCode[KeyCode["PageDown"] = 12] = "PageDown";
    KeyCode[KeyCode["End"] = 13] = "End";
    KeyCode[KeyCode["Home"] = 14] = "Home";
    KeyCode[KeyCode["LeftArrow"] = 15] = "LeftArrow";
    KeyCode[KeyCode["UpArrow"] = 16] = "UpArrow";
    KeyCode[KeyCode["RightArrow"] = 17] = "RightArrow";
    KeyCode[KeyCode["DownArrow"] = 18] = "DownArrow";
    KeyCode[KeyCode["Insert"] = 19] = "Insert";
    KeyCode[KeyCode["Delete"] = 20] = "Delete";
    KeyCode[KeyCode["Digit0"] = 21] = "Digit0";
    KeyCode[KeyCode["Digit1"] = 22] = "Digit1";
    KeyCode[KeyCode["Digit2"] = 23] = "Digit2";
    KeyCode[KeyCode["Digit3"] = 24] = "Digit3";
    KeyCode[KeyCode["Digit4"] = 25] = "Digit4";
    KeyCode[KeyCode["Digit5"] = 26] = "Digit5";
    KeyCode[KeyCode["Digit6"] = 27] = "Digit6";
    KeyCode[KeyCode["Digit7"] = 28] = "Digit7";
    KeyCode[KeyCode["Digit8"] = 29] = "Digit8";
    KeyCode[KeyCode["Digit9"] = 30] = "Digit9";
    KeyCode[KeyCode["KeyA"] = 31] = "KeyA";
    KeyCode[KeyCode["KeyB"] = 32] = "KeyB";
    KeyCode[KeyCode["KeyC"] = 33] = "KeyC";
    KeyCode[KeyCode["KeyD"] = 34] = "KeyD";
    KeyCode[KeyCode["KeyE"] = 35] = "KeyE";
    KeyCode[KeyCode["KeyF"] = 36] = "KeyF";
    KeyCode[KeyCode["KeyG"] = 37] = "KeyG";
    KeyCode[KeyCode["KeyH"] = 38] = "KeyH";
    KeyCode[KeyCode["KeyI"] = 39] = "KeyI";
    KeyCode[KeyCode["KeyJ"] = 40] = "KeyJ";
    KeyCode[KeyCode["KeyK"] = 41] = "KeyK";
    KeyCode[KeyCode["KeyL"] = 42] = "KeyL";
    KeyCode[KeyCode["KeyM"] = 43] = "KeyM";
    KeyCode[KeyCode["KeyN"] = 44] = "KeyN";
    KeyCode[KeyCode["KeyO"] = 45] = "KeyO";
    KeyCode[KeyCode["KeyP"] = 46] = "KeyP";
    KeyCode[KeyCode["KeyQ"] = 47] = "KeyQ";
    KeyCode[KeyCode["KeyR"] = 48] = "KeyR";
    KeyCode[KeyCode["KeyS"] = 49] = "KeyS";
    KeyCode[KeyCode["KeyT"] = 50] = "KeyT";
    KeyCode[KeyCode["KeyU"] = 51] = "KeyU";
    KeyCode[KeyCode["KeyV"] = 52] = "KeyV";
    KeyCode[KeyCode["KeyW"] = 53] = "KeyW";
    KeyCode[KeyCode["KeyX"] = 54] = "KeyX";
    KeyCode[KeyCode["KeyY"] = 55] = "KeyY";
    KeyCode[KeyCode["KeyZ"] = 56] = "KeyZ";
    KeyCode[KeyCode["Meta"] = 57] = "Meta";
    KeyCode[KeyCode["ContextMenu"] = 58] = "ContextMenu";
    KeyCode[KeyCode["F1"] = 59] = "F1";
    KeyCode[KeyCode["F2"] = 60] = "F2";
    KeyCode[KeyCode["F3"] = 61] = "F3";
    KeyCode[KeyCode["F4"] = 62] = "F4";
    KeyCode[KeyCode["F5"] = 63] = "F5";
    KeyCode[KeyCode["F6"] = 64] = "F6";
    KeyCode[KeyCode["F7"] = 65] = "F7";
    KeyCode[KeyCode["F8"] = 66] = "F8";
    KeyCode[KeyCode["F9"] = 67] = "F9";
    KeyCode[KeyCode["F10"] = 68] = "F10";
    KeyCode[KeyCode["F11"] = 69] = "F11";
    KeyCode[KeyCode["F12"] = 70] = "F12";
    KeyCode[KeyCode["F13"] = 71] = "F13";
    KeyCode[KeyCode["F14"] = 72] = "F14";
    KeyCode[KeyCode["F15"] = 73] = "F15";
    KeyCode[KeyCode["F16"] = 74] = "F16";
    KeyCode[KeyCode["F17"] = 75] = "F17";
    KeyCode[KeyCode["F18"] = 76] = "F18";
    KeyCode[KeyCode["F19"] = 77] = "F19";
    KeyCode[KeyCode["F20"] = 78] = "F20";
    KeyCode[KeyCode["F21"] = 79] = "F21";
    KeyCode[KeyCode["F22"] = 80] = "F22";
    KeyCode[KeyCode["F23"] = 81] = "F23";
    KeyCode[KeyCode["F24"] = 82] = "F24";
    KeyCode[KeyCode["NumLock"] = 83] = "NumLock";
    KeyCode[KeyCode["ScrollLock"] = 84] = "ScrollLock";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ';:' key
     */
    KeyCode[KeyCode["Semicolon"] = 85] = "Semicolon";
    /**
     * For any country/region, the '+' key
     * For the US standard keyboard, the '=+' key
     */
    KeyCode[KeyCode["Equal"] = 86] = "Equal";
    /**
     * For any country/region, the ',' key
     * For the US standard keyboard, the ',<' key
     */
    KeyCode[KeyCode["Comma"] = 87] = "Comma";
    /**
     * For any country/region, the '-' key
     * For the US standard keyboard, the '-_' key
     */
    KeyCode[KeyCode["Minus"] = 88] = "Minus";
    /**
     * For any country/region, the '.' key
     * For the US standard keyboard, the '.>' key
     */
    KeyCode[KeyCode["Period"] = 89] = "Period";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '/?' key
     */
    KeyCode[KeyCode["Slash"] = 90] = "Slash";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '`~' key
     */
    KeyCode[KeyCode["Backquote"] = 91] = "Backquote";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '[{' key
     */
    KeyCode[KeyCode["BracketLeft"] = 92] = "BracketLeft";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the '\|' key
     */
    KeyCode[KeyCode["Backslash"] = 93] = "Backslash";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ']}' key
     */
    KeyCode[KeyCode["BracketRight"] = 94] = "BracketRight";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     * For the US standard keyboard, the ''"' key
     */
    KeyCode[KeyCode["Quote"] = 95] = "Quote";
    /**
     * Used for miscellaneous characters; it can vary by keyboard.
     */
    KeyCode[KeyCode["OEM_8"] = 96] = "OEM_8";
    /**
     * Either the angle bracket key or the backslash key on the RT 102-key keyboard.
     */
    KeyCode[KeyCode["IntlBackslash"] = 97] = "IntlBackslash";
    KeyCode[KeyCode["Numpad0"] = 98] = "Numpad0";
    KeyCode[KeyCode["Numpad1"] = 99] = "Numpad1";
    KeyCode[KeyCode["Numpad2"] = 100] = "Numpad2";
    KeyCode[KeyCode["Numpad3"] = 101] = "Numpad3";
    KeyCode[KeyCode["Numpad4"] = 102] = "Numpad4";
    KeyCode[KeyCode["Numpad5"] = 103] = "Numpad5";
    KeyCode[KeyCode["Numpad6"] = 104] = "Numpad6";
    KeyCode[KeyCode["Numpad7"] = 105] = "Numpad7";
    KeyCode[KeyCode["Numpad8"] = 106] = "Numpad8";
    KeyCode[KeyCode["Numpad9"] = 107] = "Numpad9";
    KeyCode[KeyCode["NumpadMultiply"] = 108] = "NumpadMultiply";
    KeyCode[KeyCode["NumpadAdd"] = 109] = "NumpadAdd";
    KeyCode[KeyCode["NUMPAD_SEPARATOR"] = 110] = "NUMPAD_SEPARATOR";
    KeyCode[KeyCode["NumpadSubtract"] = 111] = "NumpadSubtract";
    KeyCode[KeyCode["NumpadDecimal"] = 112] = "NumpadDecimal";
    KeyCode[KeyCode["NumpadDivide"] = 113] = "NumpadDivide";
    /**
     * Cover all key codes when IME is processing input.
     */
    KeyCode[KeyCode["KEY_IN_COMPOSITION"] = 114] = "KEY_IN_COMPOSITION";
    KeyCode[KeyCode["ABNT_C1"] = 115] = "ABNT_C1";
    KeyCode[KeyCode["ABNT_C2"] = 116] = "ABNT_C2";
    KeyCode[KeyCode["AudioVolumeMute"] = 117] = "AudioVolumeMute";
    KeyCode[KeyCode["AudioVolumeUp"] = 118] = "AudioVolumeUp";
    KeyCode[KeyCode["AudioVolumeDown"] = 119] = "AudioVolumeDown";
    KeyCode[KeyCode["BrowserSearch"] = 120] = "BrowserSearch";
    KeyCode[KeyCode["BrowserHome"] = 121] = "BrowserHome";
    KeyCode[KeyCode["BrowserBack"] = 122] = "BrowserBack";
    KeyCode[KeyCode["BrowserForward"] = 123] = "BrowserForward";
    KeyCode[KeyCode["MediaTrackNext"] = 124] = "MediaTrackNext";
    KeyCode[KeyCode["MediaTrackPrevious"] = 125] = "MediaTrackPrevious";
    KeyCode[KeyCode["MediaStop"] = 126] = "MediaStop";
    KeyCode[KeyCode["MediaPlayPause"] = 127] = "MediaPlayPause";
    KeyCode[KeyCode["LaunchMediaPlayer"] = 128] = "LaunchMediaPlayer";
    KeyCode[KeyCode["LaunchMail"] = 129] = "LaunchMail";
    KeyCode[KeyCode["LaunchApp2"] = 130] = "LaunchApp2";
    /**
     * VK_CLEAR, 0x0C, CLEAR key
     */
    KeyCode[KeyCode["Clear"] = 131] = "Clear";
    /**
     * Placed last to cover the length of the enum.
     * Please do not depend on this value!
     */
    KeyCode[KeyCode["MAX_VALUE"] = 132] = "MAX_VALUE";
})(KeyCode || (KeyCode = {}));
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity || (MarkerSeverity = {}));
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
    MarkerTag[MarkerTag["Deprecated"] = 2] = "Deprecated";
})(MarkerTag || (MarkerTag = {}));
/**
 * Position in the minimap to render the decoration.
 */
var MinimapPosition;
(function (MinimapPosition) {
    MinimapPosition[MinimapPosition["Inline"] = 1] = "Inline";
    MinimapPosition[MinimapPosition["Gutter"] = 2] = "Gutter";
})(MinimapPosition || (MinimapPosition = {}));
/**
 * Type of hit element with the mouse in the editor.
 */
var MouseTargetType;
(function (MouseTargetType) {
    /**
     * Mouse is on top of an unknown element.
     */
    MouseTargetType[MouseTargetType["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * Mouse is on top of the textarea used for input.
     */
    MouseTargetType[MouseTargetType["TEXTAREA"] = 1] = "TEXTAREA";
    /**
     * Mouse is on top of the glyph margin
     */
    MouseTargetType[MouseTargetType["GUTTER_GLYPH_MARGIN"] = 2] = "GUTTER_GLYPH_MARGIN";
    /**
     * Mouse is on top of the line numbers
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_NUMBERS"] = 3] = "GUTTER_LINE_NUMBERS";
    /**
     * Mouse is on top of the line decorations
     */
    MouseTargetType[MouseTargetType["GUTTER_LINE_DECORATIONS"] = 4] = "GUTTER_LINE_DECORATIONS";
    /**
     * Mouse is on top of the whitespace left in the gutter by a view zone.
     */
    MouseTargetType[MouseTargetType["GUTTER_VIEW_ZONE"] = 5] = "GUTTER_VIEW_ZONE";
    /**
     * Mouse is on top of text in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_TEXT"] = 6] = "CONTENT_TEXT";
    /**
     * Mouse is on top of empty space in the content (e.g. after line text or below last line)
     */
    MouseTargetType[MouseTargetType["CONTENT_EMPTY"] = 7] = "CONTENT_EMPTY";
    /**
     * Mouse is on top of a view zone in the content.
     */
    MouseTargetType[MouseTargetType["CONTENT_VIEW_ZONE"] = 8] = "CONTENT_VIEW_ZONE";
    /**
     * Mouse is on top of a content widget.
     */
    MouseTargetType[MouseTargetType["CONTENT_WIDGET"] = 9] = "CONTENT_WIDGET";
    /**
     * Mouse is on top of the decorations overview ruler.
     */
    MouseTargetType[MouseTargetType["OVERVIEW_RULER"] = 10] = "OVERVIEW_RULER";
    /**
     * Mouse is on top of a scrollbar.
     */
    MouseTargetType[MouseTargetType["SCROLLBAR"] = 11] = "SCROLLBAR";
    /**
     * Mouse is on top of an overlay widget.
     */
    MouseTargetType[MouseTargetType["OVERLAY_WIDGET"] = 12] = "OVERLAY_WIDGET";
    /**
     * Mouse is outside of the editor.
     */
    MouseTargetType[MouseTargetType["OUTSIDE_EDITOR"] = 13] = "OUTSIDE_EDITOR";
})(MouseTargetType || (MouseTargetType = {}));
/**
 * A positioning preference for rendering overlay widgets.
 */
var OverlayWidgetPositionPreference;
(function (OverlayWidgetPositionPreference) {
    /**
     * Position the overlay widget in the top right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_RIGHT_CORNER"] = 0] = "TOP_RIGHT_CORNER";
    /**
     * Position the overlay widget in the bottom right corner
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["BOTTOM_RIGHT_CORNER"] = 1] = "BOTTOM_RIGHT_CORNER";
    /**
     * Position the overlay widget in the top center
     */
    OverlayWidgetPositionPreference[OverlayWidgetPositionPreference["TOP_CENTER"] = 2] = "TOP_CENTER";
})(OverlayWidgetPositionPreference || (OverlayWidgetPositionPreference = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
var PositionAffinity;
(function (PositionAffinity) {
    /**
     * Prefers the left most position.
    */
    PositionAffinity[PositionAffinity["Left"] = 0] = "Left";
    /**
     * Prefers the right most position.
    */
    PositionAffinity[PositionAffinity["Right"] = 1] = "Right";
    /**
     * No preference.
    */
    PositionAffinity[PositionAffinity["None"] = 2] = "None";
    /**
     * If the given position is on injected text, prefers the position left of it.
    */
    PositionAffinity[PositionAffinity["LeftOfInjectedText"] = 3] = "LeftOfInjectedText";
    /**
     * If the given position is on injected text, prefers the position right of it.
    */
    PositionAffinity[PositionAffinity["RightOfInjectedText"] = 4] = "RightOfInjectedText";
})(PositionAffinity || (PositionAffinity = {}));
var RenderLineNumbersType;
(function (RenderLineNumbersType) {
    RenderLineNumbersType[RenderLineNumbersType["Off"] = 0] = "Off";
    RenderLineNumbersType[RenderLineNumbersType["On"] = 1] = "On";
    RenderLineNumbersType[RenderLineNumbersType["Relative"] = 2] = "Relative";
    RenderLineNumbersType[RenderLineNumbersType["Interval"] = 3] = "Interval";
    RenderLineNumbersType[RenderLineNumbersType["Custom"] = 4] = "Custom";
})(RenderLineNumbersType || (RenderLineNumbersType = {}));
var RenderMinimap;
(function (RenderMinimap) {
    RenderMinimap[RenderMinimap["None"] = 0] = "None";
    RenderMinimap[RenderMinimap["Text"] = 1] = "Text";
    RenderMinimap[RenderMinimap["Blocks"] = 2] = "Blocks";
})(RenderMinimap || (RenderMinimap = {}));
var ScrollType;
(function (ScrollType) {
    ScrollType[ScrollType["Smooth"] = 0] = "Smooth";
    ScrollType[ScrollType["Immediate"] = 1] = "Immediate";
})(ScrollType || (ScrollType = {}));
var ScrollbarVisibility;
(function (ScrollbarVisibility) {
    ScrollbarVisibility[ScrollbarVisibility["Auto"] = 1] = "Auto";
    ScrollbarVisibility[ScrollbarVisibility["Hidden"] = 2] = "Hidden";
    ScrollbarVisibility[ScrollbarVisibility["Visible"] = 3] = "Visible";
})(ScrollbarVisibility || (ScrollbarVisibility = {}));
/**
 * The direction of a selection.
 */
var SelectionDirection;
(function (SelectionDirection) {
    /**
     * The selection starts above where it ends.
     */
    SelectionDirection[SelectionDirection["LTR"] = 0] = "LTR";
    /**
     * The selection starts below where it ends.
     */
    SelectionDirection[SelectionDirection["RTL"] = 1] = "RTL";
})(SelectionDirection || (SelectionDirection = {}));
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind || (SymbolKind = {}));
var SymbolTag;
(function (SymbolTag) {
    SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag || (SymbolTag = {}));
/**
 * The kind of animation in which the editor's cursor should be rendered.
 */
var TextEditorCursorBlinkingStyle;
(function (TextEditorCursorBlinkingStyle) {
    /**
     * Hidden
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Hidden"] = 0] = "Hidden";
    /**
     * Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Blink"] = 1] = "Blink";
    /**
     * Blinking with smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Smooth"] = 2] = "Smooth";
    /**
     * Blinking with prolonged filled state and smooth fading
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Phase"] = 3] = "Phase";
    /**
     * Expand collapse animation on the y axis
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Expand"] = 4] = "Expand";
    /**
     * No-Blinking
     */
    TextEditorCursorBlinkingStyle[TextEditorCursorBlinkingStyle["Solid"] = 5] = "Solid";
})(TextEditorCursorBlinkingStyle || (TextEditorCursorBlinkingStyle = {}));
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 * Note: Please do not edit the values, as they very carefully match `DecorationRangeBehavior`
 */
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
/**
 * Describes how to indent wrapped lines.
 */
var WrappingIndent;
(function (WrappingIndent) {
    /**
     * No indentation => wrapped lines begin at column 1.
     */
    WrappingIndent[WrappingIndent["None"] = 0] = "None";
    /**
     * Same => wrapped lines get the same indentation as the parent.
     */
    WrappingIndent[WrappingIndent["Same"] = 1] = "Same";
    /**
     * Indent => wrapped lines get +1 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["Indent"] = 2] = "Indent";
    /**
     * DeepIndent => wrapped lines get +2 indentation toward the parent.
     */
    WrappingIndent[WrappingIndent["DeepIndent"] = 3] = "DeepIndent";
})(WrappingIndent || (WrappingIndent = {}));


/***/ })

}]);