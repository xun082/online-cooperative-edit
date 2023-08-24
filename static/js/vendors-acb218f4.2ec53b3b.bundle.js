"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-acb218f4"],{

/***/ 45959:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ createMonacoBaseAPI; }
/* harmony export */ });
/* unused harmony export KeyMod */
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98764);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64720);
/* harmony import */ var _base_common_keyCodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95286);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92378);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3981);
/* harmony import */ var _core_selection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2257);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34882);
/* harmony import */ var _standalone_standaloneEnums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34377);
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

/***/ 14386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ EditorSimpleWorker; }
/* harmony export */ });
/* unused harmony export create */
/* harmony import */ var _base_common_diff_diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4673);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92378);
/* harmony import */ var _core_position_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65201);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3981);
/* harmony import */ var _model_mirrorTextModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33633);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22380);
/* harmony import */ var _languages_linkComputer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55175);
/* harmony import */ var _languages_supports_inplaceReplaceSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74528);
/* harmony import */ var _editorBaseApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45959);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99264);
/* harmony import */ var _unicodeTextModelHighlighter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8741);
/* harmony import */ var _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33376);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19525);
/* harmony import */ var _languages_defaultDocumentColorsComputer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57263);
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
        const diffAlgorithm = algorithm === 'advanced' ? _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__/* .linesDiffComputers */ .V.getAdvanced() : _diff_linesDiffComputers_js__WEBPACK_IMPORTED_MODULE_8__/* .linesDiffComputers */ .V.getLegacy();
        const originalLines = originalTextModel.getLinesContent();
        const modifiedLines = modifiedTextModel.getLinesContent();
        const result = diffAlgorithm.computeDiff(originalLines, modifiedLines, options);
        const identical = (result.changes.length > 0 ? false : this._modelsAreIdentical(originalTextModel, modifiedTextModel));
        function getLineChanges(changes) {
            return changes.map(m => {
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
            });
        }
        return {
            identical,
            quitEarly: result.hitTimeout,
            changes: getLineChanges(result.changes),
            moves: result.moves.map(m => ([
                m.lineRangeMapping.original.startLineNumber,
                m.lineRangeMapping.original.endLineNumberExclusive,
                m.lineRangeMapping.modified.startLineNumber,
                m.lineRangeMapping.modified.endLineNumberExclusive,
                getLineChanges(m.changes)
            ])),
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
            const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_6__/* .StopWatch */ .G();
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

/***/ 14433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ IEditorWorkerService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IEditorWorkerService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('editorWorkerService');


/***/ }),

/***/ 46262:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ getIconClasses; }
/* harmony export */ });
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32681);
/* harmony import */ var _base_common_resources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85493);
/* harmony import */ var _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67984);
/* harmony import */ var _platform_files_common_files_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32725);
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

/***/ 8857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ ILanguageFeatureDebounceService; }
/* harmony export */ });
/* unused harmony export LanguageFeatureDebounceService */
/* harmony import */ var _base_common_hash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8289);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54495);
/* harmony import */ var _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20484);
/* harmony import */ var _platform_environment_common_environment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37419);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54659);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73830);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56950);
/* harmony import */ var _platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43759);
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








const ILanguageFeatureDebounceService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__/* .createDecorator */ .yh)('ILanguageFeatureDebounceService');
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
class NullDebounceInformation {
    constructor(_default) {
        this._default = _default;
    }
    get(_model) {
        return this._default;
    }
    update(_model, _value) {
        return this._default;
    }
    default() {
        return this._default;
    }
}
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
            ? (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .clamp */ .uZ)(avg.value, this._min, this._max)
            : this.default();
    }
    update(model, value) {
        const key = this._key(model);
        let avg = this._cache.get(key);
        if (!avg) {
            avg = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .SlidingWindowAverage */ .N(6);
            this._cache.set(key, avg);
        }
        const newValue = (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .clamp */ .uZ)(avg.update(value), this._min, this._max);
        if (!(0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_5__/* .matchesScheme */ .xn)(model.uri, 'output')) {
            this._logService.trace(`[DEBOUNCE: ${this._name}] for ${model.uri.toString()} is ${newValue}ms`);
        }
        return newValue;
    }
    _overall() {
        const result = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .MovingAverage */ .nM();
        for (const [, avg] of this._cache) {
            result.update(avg.value);
        }
        return result.value;
    }
    default() {
        const value = (this._overall() | 0) || this._default;
        return (0,_base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .clamp */ .uZ)(value, this._min, this._max);
    }
}
let LanguageFeatureDebounceService = class LanguageFeatureDebounceService {
    constructor(_logService, envService) {
        this._logService = _logService;
        this._data = new Map();
        this._isDev = envService.isExtensionDevelopment || !envService.isBuilt;
    }
    for(feature, name, config) {
        var _a, _b, _c;
        const min = (_a = config === null || config === void 0 ? void 0 : config.min) !== null && _a !== void 0 ? _a : 50;
        const max = (_b = config === null || config === void 0 ? void 0 : config.max) !== null && _b !== void 0 ? _b : Math.pow(min, 2);
        const extra = (_c = config === null || config === void 0 ? void 0 : config.key) !== null && _c !== void 0 ? _c : undefined;
        const key = `${IdentityHash.of(feature)},${min}${extra ? ',' + extra : ''}`;
        let info = this._data.get(key);
        if (!info) {
            if (!this._isDev) {
                this._logService.debug(`[DEBOUNCE: ${name}] is disabled in developed mode`);
                info = new NullDebounceInformation(min * 1.5);
            }
            else {
                info = new FeatureDebounceInformation(this._logService, name, feature, (this._overallAverage() | 0) || (min * 1.5), // default is overall default or derived from min-value
                min, max);
            }
            this._data.set(key, info);
        }
        return info;
    }
    _overallAverage() {
        // Average of all language features. Not a great value but an approximation
        const result = new _base_common_numbers_js__WEBPACK_IMPORTED_MODULE_6__/* .MovingAverage */ .nM();
        for (const info of this._data.values()) {
            result.update(info.default());
        }
        return result.value;
    }
};
LanguageFeatureDebounceService = __decorate([
    __param(0, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_4__/* .ILogService */ .VZ),
    __param(1, _platform_environment_common_environment_js__WEBPACK_IMPORTED_MODULE_2__/* .IEnvironmentService */ .Y)
], LanguageFeatureDebounceService);

(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_7__/* .registerSingleton */ .z)(ILanguageFeatureDebounceService, LanguageFeatureDebounceService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 6216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ ILanguageFeaturesService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ILanguageFeaturesService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('ILanguageFeaturesService');


/***/ }),

/***/ 1023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export LanguageFeaturesService */
/* harmony import */ var _languageFeatureRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75996);
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6216);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54659);
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

/***/ 4549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: function() { return /* binding */ LanguageService; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/glob.js
var glob = __webpack_require__(48487);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/mime.js
var mime = __webpack_require__(74148);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(32681);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/path.js
var common_path = __webpack_require__(45971);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(85493);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(67984);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languagesAssociations.js
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js
var configurationRegistry = __webpack_require__(97772);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(16324);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languagesRegistry.js
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageService.js
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

/***/ 66424:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ IMarkerDecorationsService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IMarkerDecorationsService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('markerDecorationsService');


/***/ }),

/***/ 17721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ MarkerDecorationsService; }
/* harmony export */ });
/* harmony import */ var _platform_markers_common_markers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14287);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7783);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26236);
/* harmony import */ var _core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79402);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52266);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3981);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32681);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64720);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9732);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54495);
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

/***/ 52266:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ IModelService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IModelService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('modelService');


/***/ }),

/***/ 90380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ ModelService; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48593);
/* harmony import */ var _model_textModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95792);
/* harmony import */ var _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43848);
/* harmony import */ var _languages_modesRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67984);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57164);
/* harmony import */ var _textResourceConfiguration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84706);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99779);
/* harmony import */ var _platform_undoRedo_common_undoRedo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78259);
/* harmony import */ var _base_common_hash_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8289);
/* harmony import */ var _model_editStack_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29141);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32681);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19525);
/* harmony import */ var _languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30766);
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

/***/ 31744:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ ITextModelService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);

const ITextModelService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textModelService');


/***/ }),

/***/ 98355:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ encodeSemanticTokensDto; }
/* harmony export */ });
/* harmony import */ var _base_common_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27216);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48593);
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

/***/ 89660:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ SemanticTokensProviderStyling; },
/* harmony export */   h: function() { return /* binding */ toMultilineTokens2; }
/* harmony export */ });
/* harmony import */ var _encodedTokenAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23124);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26236);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56950);
/* harmony import */ var _tokens_sparseMultilineTokens_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59794);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57164);
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

/***/ 67292:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ ISemanticTokensStylingService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ISemanticTokensStylingService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('semanticTokensStylingService');


/***/ }),

/***/ 14202:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export SemanticTokensStylingService */
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _languages_language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57164);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26236);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56950);
/* harmony import */ var _semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89660);
/* harmony import */ var _semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67292);
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54659);
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

/***/ 84706:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ ITextResourceConfigurationService; },
/* harmony export */   y: function() { return /* binding */ ITextResourcePropertiesService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);

const ITextResourceConfigurationService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textResourceConfigurationService');
const ITextResourcePropertiesService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('textResourcePropertiesService');


/***/ }),

/***/ 6815:
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

/***/ 31190:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ ITreeViewsDnDService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54659);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/* harmony import */ var _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6815);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const ITreeViewsDnDService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('treeViewsDndService');
(0,_platform_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerSingleton */ .z)(ITreeViewsDnDService, _treeViewsDnd_js__WEBPACK_IMPORTED_MODULE_2__/* .TreeViewsDnDService */ .Y, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 8741:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ UnicodeTextModelHighlighter; }
/* harmony export */ });
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3981);
/* harmony import */ var _model_textModelSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55814);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70625);
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14299);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22380);
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


/***/ })

}]);