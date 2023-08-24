"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-69e4b8b2"],{

/***/ 68424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .snippet-placeholder {\n\tmin-width: 2px;\n\toutline-style: solid;\n\toutline-width: 1px;\n\tbackground-color: var(--vscode-editor-snippetTabstopHighlightBackground, transparent);\n\toutline-color: var(--vscode-editor-snippetTabstopHighlightBorder, transparent);\n}\n\n.monaco-editor .finish-snippet-placeholder {\n\toutline-style: solid;\n\toutline-width: 1px;\n\tbackground-color: var(--vscode-editor-snippetFinalTabstopHighlightBackground, transparent);\n\toutline-color: var(--vscode-editor-snippetFinalTabstopHighlightBorder, transparent);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39722:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: function() { return /* binding */ BracketSelectionRangeProvider; }
/* harmony export */ });
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29644);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65201);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3981);
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



class BracketSelectionRangeProvider {
    provideSelectionRanges(model, positions) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            for (const position of positions) {
                const bucket = [];
                result.push(bucket);
                const ranges = new Map();
                yield new Promise(resolve => BracketSelectionRangeProvider._bracketsRightYield(resolve, 0, model, position, ranges));
                yield new Promise(resolve => BracketSelectionRangeProvider._bracketsLeftYield(resolve, 0, model, position, ranges, bucket));
            }
            return result;
        });
    }
    static _bracketsRightYield(resolve, round, model, pos, ranges) {
        const counts = new Map();
        const t1 = Date.now();
        while (true) {
            if (round >= BracketSelectionRangeProvider._maxRounds) {
                resolve();
                break;
            }
            if (!pos) {
                resolve();
                break;
            }
            const bracket = model.bracketPairs.findNextBracket(pos);
            if (!bracket) {
                resolve();
                break;
            }
            const d = Date.now() - t1;
            if (d > BracketSelectionRangeProvider._maxDuration) {
                setTimeout(() => BracketSelectionRangeProvider._bracketsRightYield(resolve, round + 1, model, pos, ranges));
                break;
            }
            if (bracket.bracketInfo.isOpeningBracket) {
                const key = bracket.bracketInfo.bracketText;
                // wait for closing
                const val = counts.has(key) ? counts.get(key) : 0;
                counts.set(key, val + 1);
            }
            else {
                const key = bracket.bracketInfo.getOpeningBrackets()[0].bracketText;
                // process closing
                let val = counts.has(key) ? counts.get(key) : 0;
                val -= 1;
                counts.set(key, Math.max(0, val));
                if (val < 0) {
                    let list = ranges.get(key);
                    if (!list) {
                        list = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_0__/* .LinkedList */ .S();
                        ranges.set(key, list);
                    }
                    list.push(bracket.range);
                }
            }
            pos = bracket.range.getEndPosition();
        }
    }
    static _bracketsLeftYield(resolve, round, model, pos, ranges, bucket) {
        const counts = new Map();
        const t1 = Date.now();
        while (true) {
            if (round >= BracketSelectionRangeProvider._maxRounds && ranges.size === 0) {
                resolve();
                break;
            }
            if (!pos) {
                resolve();
                break;
            }
            const bracket = model.bracketPairs.findPrevBracket(pos);
            if (!bracket) {
                resolve();
                break;
            }
            const d = Date.now() - t1;
            if (d > BracketSelectionRangeProvider._maxDuration) {
                setTimeout(() => BracketSelectionRangeProvider._bracketsLeftYield(resolve, round + 1, model, pos, ranges, bucket));
                break;
            }
            if (!bracket.bracketInfo.isOpeningBracket) {
                const key = bracket.bracketInfo.getOpeningBrackets()[0].bracketText;
                // wait for opening
                const val = counts.has(key) ? counts.get(key) : 0;
                counts.set(key, val + 1);
            }
            else {
                const key = bracket.bracketInfo.bracketText;
                // opening
                let val = counts.has(key) ? counts.get(key) : 0;
                val -= 1;
                counts.set(key, Math.max(0, val));
                if (val < 0) {
                    const list = ranges.get(key);
                    if (list) {
                        const closing = list.shift();
                        if (list.size === 0) {
                            ranges.delete(key);
                        }
                        const innerBracket = _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(bracket.range.getEndPosition(), closing.getStartPosition());
                        const outerBracket = _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(bracket.range.getStartPosition(), closing.getEndPosition());
                        bucket.push({ range: innerBracket });
                        bucket.push({ range: outerBracket });
                        BracketSelectionRangeProvider._addBracketLeading(model, outerBracket, bucket);
                    }
                }
            }
            pos = bracket.range.getStartPosition();
        }
    }
    static _addBracketLeading(model, bracket, bucket) {
        if (bracket.startLineNumber === bracket.endLineNumber) {
            return;
        }
        // xxxxxxxx {
        //
        // }
        const startLine = bracket.startLineNumber;
        const column = model.getLineFirstNonWhitespaceColumn(startLine);
        if (column !== 0 && column !== bracket.startColumn) {
            bucket.push({ range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(startLine, column), bracket.getEndPosition()) });
            bucket.push({ range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(startLine, 1), bracket.getEndPosition()) });
        }
        // xxxxxxxx
        // {
        //
        // }
        const aboveLine = startLine - 1;
        if (aboveLine > 0) {
            const column = model.getLineFirstNonWhitespaceColumn(aboveLine);
            if (column === bracket.startColumn && column !== model.getLineLastNonWhitespaceColumn(aboveLine)) {
                bucket.push({ range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(aboveLine, column), bracket.getEndPosition()) });
                bucket.push({ range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_1__/* .Range */ .e.fromPositions(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_2__/* .Position */ .L(aboveLine, 1), bracket.getEndPosition()) });
            }
        }
    }
}
BracketSelectionRangeProvider._maxDuration = 30;
BracketSelectionRangeProvider._maxRounds = 2;


/***/ }),

/***/ 37784:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: SmartSelectController, provideSelectionRanges

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(57584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/bracketSelections.js
var bracketSelections = __webpack_require__(39722);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/wordSelections.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class WordSelectionRangeProvider {
    constructor(selectSubwords = true) {
        this.selectSubwords = selectSubwords;
    }
    provideSelectionRanges(model, positions) {
        const result = [];
        for (const position of positions) {
            const bucket = [];
            result.push(bucket);
            if (this.selectSubwords) {
                this._addInWordRanges(bucket, model, position);
            }
            this._addWordRanges(bucket, model, position);
            this._addWhitespaceLine(bucket, model, position);
            bucket.push({ range: model.getFullModelRange() });
        }
        return result;
    }
    _addInWordRanges(bucket, model, pos) {
        const obj = model.getWordAtPosition(pos);
        if (!obj) {
            return;
        }
        const { word, startColumn } = obj;
        const offset = pos.column - startColumn;
        let start = offset;
        let end = offset;
        let lastCh = 0;
        // LEFT anchor (start)
        for (; start >= 0; start--) {
            const ch = word.charCodeAt(start);
            if ((start !== offset) && (ch === 95 /* CharCode.Underline */ || ch === 45 /* CharCode.Dash */)) {
                // foo-bar OR foo_bar
                break;
            }
            else if ((0,strings/* isLowerAsciiLetter */.mK)(ch) && (0,strings/* isUpperAsciiLetter */.df)(lastCh)) {
                // fooBar
                break;
            }
            lastCh = ch;
        }
        start += 1;
        // RIGHT anchor (end)
        for (; end < word.length; end++) {
            const ch = word.charCodeAt(end);
            if ((0,strings/* isUpperAsciiLetter */.df)(ch) && (0,strings/* isLowerAsciiLetter */.mK)(lastCh)) {
                // fooBar
                break;
            }
            else if (ch === 95 /* CharCode.Underline */ || ch === 45 /* CharCode.Dash */) {
                // foo-bar OR foo_bar
                break;
            }
            lastCh = ch;
        }
        if (start < end) {
            bucket.push({ range: new core_range/* Range */.e(pos.lineNumber, startColumn + start, pos.lineNumber, startColumn + end) });
        }
    }
    _addWordRanges(bucket, model, pos) {
        const word = model.getWordAtPosition(pos);
        if (word) {
            bucket.push({ range: new core_range/* Range */.e(pos.lineNumber, word.startColumn, pos.lineNumber, word.endColumn) });
        }
    }
    _addWhitespaceLine(bucket, model, pos) {
        if (model.getLineLength(pos.lineNumber) > 0
            && model.getLineFirstNonWhitespaceColumn(pos.lineNumber) === 0
            && model.getLineLastNonWhitespaceColumn(pos.lineNumber) === 0) {
            bucket.push({ range: new core_range/* Range */.e(pos.lineNumber, 1, pos.lineNumber, model.getLineMaxColumn(pos.lineNumber)) });
        }
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(47619);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(38389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js
var resolverService = __webpack_require__(31744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var uri = __webpack_require__(92378);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js
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

















class SelectionRanges {
    constructor(index, ranges) {
        this.index = index;
        this.ranges = ranges;
    }
    mov(fwd) {
        const index = this.index + (fwd ? 1 : -1);
        if (index < 0 || index >= this.ranges.length) {
            return this;
        }
        const res = new SelectionRanges(index, this.ranges);
        if (res.ranges[index].equalsRange(this.ranges[this.index])) {
            // next range equals this range, retry with next-next
            return res.mov(fwd);
        }
        return res;
    }
}
let SmartSelectController = class SmartSelectController {
    static get(editor) {
        return editor.getContribution(SmartSelectController.ID);
    }
    constructor(_editor, _languageFeaturesService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._ignoreSelection = false;
    }
    dispose() {
        var _a;
        (_a = this._selectionListener) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    run(forward) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._editor.hasModel()) {
                return;
            }
            const selections = this._editor.getSelections();
            const model = this._editor.getModel();
            if (!this._state) {
                yield provideSelectionRanges(this._languageFeaturesService.selectionRangeProvider, model, selections.map(s => s.getPosition()), this._editor.getOption(111 /* EditorOption.smartSelect */), cancellation/* CancellationToken */.T.None).then(ranges => {
                    var _a;
                    if (!arrays/* isNonEmptyArray */.Of(ranges) || ranges.length !== selections.length) {
                        // invalid result
                        return;
                    }
                    if (!this._editor.hasModel() || !arrays/* equals */.fS(this._editor.getSelections(), selections, (a, b) => a.equalsSelection(b))) {
                        // invalid editor state
                        return;
                    }
                    for (let i = 0; i < ranges.length; i++) {
                        ranges[i] = ranges[i].filter(range => {
                            // filter ranges inside the selection
                            return range.containsPosition(selections[i].getStartPosition()) && range.containsPosition(selections[i].getEndPosition());
                        });
                        // prepend current selection
                        ranges[i].unshift(selections[i]);
                    }
                    this._state = ranges.map(ranges => new SelectionRanges(0, ranges));
                    // listen to caret move and forget about state
                    (_a = this._selectionListener) === null || _a === void 0 ? void 0 : _a.dispose();
                    this._selectionListener = this._editor.onDidChangeCursorPosition(() => {
                        var _a;
                        if (!this._ignoreSelection) {
                            (_a = this._selectionListener) === null || _a === void 0 ? void 0 : _a.dispose();
                            this._state = undefined;
                        }
                    });
                });
            }
            if (!this._state) {
                // no state
                return;
            }
            this._state = this._state.map(state => state.mov(forward));
            const newSelections = this._state.map(state => selection/* Selection */.Y.fromPositions(state.ranges[state.index].getStartPosition(), state.ranges[state.index].getEndPosition()));
            this._ignoreSelection = true;
            try {
                this._editor.setSelections(newSelections);
            }
            finally {
                this._ignoreSelection = false;
            }
        });
    }
};
SmartSelectController.ID = 'editor.contrib.smartSelectController';
SmartSelectController = __decorate([
    __param(1, languageFeatures/* ILanguageFeaturesService */.p)
], SmartSelectController);

class AbstractSmartSelect extends editorExtensions/* EditorAction */.R6 {
    constructor(forward, opts) {
        super(opts);
        this._forward = forward;
    }
    run(_accessor, editor) {
        return __awaiter(this, void 0, void 0, function* () {
            const controller = SmartSelectController.get(editor);
            if (controller) {
                yield controller.run(this._forward);
            }
        });
    }
}
class GrowSelectionAction extends AbstractSmartSelect {
    constructor() {
        super(true, {
            id: 'editor.action.smartSelect.expand',
            label: nls/* localize */.NC('smartSelect.expand', "Expand Selection"),
            alias: 'Expand Selection',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 17 /* KeyCode.RightArrow */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */,
                    secondary: [256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 17 /* KeyCode.RightArrow */],
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '1_basic',
                title: nls/* localize */.NC({ key: 'miSmartSelectGrow', comment: ['&& denotes a mnemonic'] }, "&&Expand Selection"),
                order: 2
            }
        });
    }
}
// renamed command id
commands/* CommandsRegistry */.P.registerCommandAlias('editor.action.smartSelect.grow', 'editor.action.smartSelect.expand');
class ShrinkSelectionAction extends AbstractSmartSelect {
    constructor() {
        super(false, {
            id: 'editor.action.smartSelect.shrink',
            label: nls/* localize */.NC('smartSelect.shrink', "Shrink Selection"),
            alias: 'Shrink Selection',
            precondition: undefined,
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 1024 /* KeyMod.Shift */ | 512 /* KeyMod.Alt */ | 15 /* KeyCode.LeftArrow */,
                mac: {
                    primary: 2048 /* KeyMod.CtrlCmd */ | 256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */,
                    secondary: [256 /* KeyMod.WinCtrl */ | 1024 /* KeyMod.Shift */ | 15 /* KeyCode.LeftArrow */],
                },
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            menuOpts: {
                menuId: actions/* MenuId */.eH.MenubarSelectionMenu,
                group: '1_basic',
                title: nls/* localize */.NC({ key: 'miSmartSelectShrink', comment: ['&& denotes a mnemonic'] }, "&&Shrink Selection"),
                order: 3
            }
        });
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(SmartSelectController.ID, SmartSelectController, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(GrowSelectionAction);
(0,editorExtensions/* registerEditorAction */.Qr)(ShrinkSelectionAction);
function provideSelectionRanges(registry, model, positions, options, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = registry.all(model)
            .concat(new WordSelectionRangeProvider(options.selectSubwords)); // ALWAYS have word based selection range
        if (providers.length === 1) {
            // add word selection and bracket selection when no provider exists
            providers.unshift(new bracketSelections/* BracketSelectionRangeProvider */.x());
        }
        const work = [];
        const allRawRanges = [];
        for (const provider of providers) {
            work.push(Promise.resolve(provider.provideSelectionRanges(model, positions, token)).then(allProviderRanges => {
                if (arrays/* isNonEmptyArray */.Of(allProviderRanges) && allProviderRanges.length === positions.length) {
                    for (let i = 0; i < positions.length; i++) {
                        if (!allRawRanges[i]) {
                            allRawRanges[i] = [];
                        }
                        for (const oneProviderRanges of allProviderRanges[i]) {
                            if (core_range/* Range */.e.isIRange(oneProviderRanges.range) && core_range/* Range */.e.containsPosition(oneProviderRanges.range, positions[i])) {
                                allRawRanges[i].push(core_range/* Range */.e.lift(oneProviderRanges.range));
                            }
                        }
                    }
                }
            }, errors/* onUnexpectedExternalError */.Cp));
        }
        yield Promise.all(work);
        return allRawRanges.map(oneRawRanges => {
            if (oneRawRanges.length === 0) {
                return [];
            }
            // sort all by start/end position
            oneRawRanges.sort((a, b) => {
                if (position/* Position */.L.isBefore(a.getStartPosition(), b.getStartPosition())) {
                    return 1;
                }
                else if (position/* Position */.L.isBefore(b.getStartPosition(), a.getStartPosition())) {
                    return -1;
                }
                else if (position/* Position */.L.isBefore(a.getEndPosition(), b.getEndPosition())) {
                    return -1;
                }
                else if (position/* Position */.L.isBefore(b.getEndPosition(), a.getEndPosition())) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            // remove ranges that don't contain the former range or that are equal to the
            // former range
            const oneRanges = [];
            let last;
            for (const range of oneRawRanges) {
                if (!last || (core_range/* Range */.e.containsRange(range, last) && !core_range/* Range */.e.equalsRange(range, last))) {
                    oneRanges.push(range);
                    last = range;
                }
            }
            if (!options.selectLeadingAndTrailingWhitespace) {
                return oneRanges;
            }
            // add ranges that expand trivia at line starts and ends whenever a range
            // wraps onto the a new line
            const oneRangesWithTrivia = [oneRanges[0]];
            for (let i = 1; i < oneRanges.length; i++) {
                const prev = oneRanges[i - 1];
                const cur = oneRanges[i];
                if (cur.startLineNumber !== prev.startLineNumber || cur.endLineNumber !== prev.endLineNumber) {
                    // add line/block range without leading/failing whitespace
                    const rangeNoWhitespace = new core_range/* Range */.e(prev.startLineNumber, model.getLineFirstNonWhitespaceColumn(prev.startLineNumber), prev.endLineNumber, model.getLineLastNonWhitespaceColumn(prev.endLineNumber));
                    if (rangeNoWhitespace.containsRange(prev) && !rangeNoWhitespace.equalsRange(prev) && cur.containsRange(rangeNoWhitespace) && !cur.equalsRange(rangeNoWhitespace)) {
                        oneRangesWithTrivia.push(rangeNoWhitespace);
                    }
                    // add line/block range
                    const rangeFull = new core_range/* Range */.e(prev.startLineNumber, 1, prev.endLineNumber, model.getLineMaxColumn(prev.endLineNumber));
                    if (rangeFull.containsRange(prev) && !rangeFull.equalsRange(rangeNoWhitespace) && cur.containsRange(rangeFull) && !cur.equalsRange(rangeFull)) {
                        oneRangesWithTrivia.push(rangeFull);
                    }
                }
                oneRangesWithTrivia.push(cur);
            }
            return oneRangesWithTrivia;
        });
    });
}
commands/* CommandsRegistry */.P.registerCommand('_executeSelectionRangeProvider', function (accessor, ...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [resource, positions] = args;
        (0,types/* assertType */.p_)(uri/* URI */.o.isUri(resource));
        const registry = accessor.get(languageFeatures/* ILanguageFeaturesService */.p).selectionRangeProvider;
        const reference = yield accessor.get(resolverService/* ITextModelService */.S).createModelReference(resource);
        try {
            return provideSelectionRanges(registry, reference.object.textEditorModel, positions, { selectLeadingAndTrailingWhitespace: true, selectSubwords: true }, cancellation/* CancellationToken */.T.None);
        }
        finally {
            reference.dispose();
        }
    });
});


/***/ }),

/***/ 810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: function() { return /* binding */ SnippetController2; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89356);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79959);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65201);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57584);
/* harmony import */ var _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30766);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6216);
/* harmony import */ var _suggest_browser_suggest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29562);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80757);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78658);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56950);
/* harmony import */ var _snippetSession_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58213);
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












const _defaultOptions = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    undoStopBefore: true,
    undoStopAfter: true,
    adjustWhitespace: true,
    clipboardText: undefined,
    overtypingCapturer: undefined
};
let SnippetController2 = class SnippetController2 {
    static get(editor) {
        return editor.getContribution(SnippetController2.ID);
    }
    constructor(_editor, _logService, _languageFeaturesService, contextKeyService, _languageConfigurationService) {
        this._editor = _editor;
        this._logService = _logService;
        this._languageFeaturesService = _languageFeaturesService;
        this._languageConfigurationService = _languageConfigurationService;
        this._snippetListener = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .DisposableStore */ .SL();
        this._modelVersionId = -1;
        this._inSnippet = SnippetController2.InSnippetMode.bindTo(contextKeyService);
        this._hasNextTabstop = SnippetController2.HasNextTabstop.bindTo(contextKeyService);
        this._hasPrevTabstop = SnippetController2.HasPrevTabstop.bindTo(contextKeyService);
    }
    dispose() {
        var _a;
        this._inSnippet.reset();
        this._hasPrevTabstop.reset();
        this._hasNextTabstop.reset();
        (_a = this._session) === null || _a === void 0 ? void 0 : _a.dispose();
        this._snippetListener.dispose();
    }
    insert(template, opts) {
        // this is here to find out more about the yet-not-understood
        // error that sometimes happens when we fail to inserted a nested
        // snippet
        try {
            this._doInsert(template, typeof opts === 'undefined' ? _defaultOptions : Object.assign(Object.assign({}, _defaultOptions), opts));
        }
        catch (e) {
            this.cancel();
            this._logService.error(e);
            this._logService.error('snippet_error');
            this._logService.error('insert_template=', template);
            this._logService.error('existing_template=', this._session ? this._session._logInfo() : '<no_session>');
        }
    }
    _doInsert(template, opts) {
        var _a;
        if (!this._editor.hasModel()) {
            return;
        }
        // don't listen while inserting the snippet
        // as that is the inflight state causing cancelation
        this._snippetListener.clear();
        if (opts.undoStopBefore) {
            this._editor.getModel().pushStackElement();
        }
        // don't merge
        if (this._session && typeof template !== 'string') {
            this.cancel();
        }
        if (!this._session) {
            this._modelVersionId = this._editor.getModel().getAlternativeVersionId();
            this._session = new _snippetSession_js__WEBPACK_IMPORTED_MODULE_9__/* .SnippetSession */ .l(this._editor, template, opts, this._languageConfigurationService);
            this._session.insert();
        }
        else {
            (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_10__/* .assertType */ .p_)(typeof template === 'string');
            this._session.merge(template, opts);
        }
        if (opts.undoStopAfter) {
            this._editor.getModel().pushStackElement();
        }
        // regster completion item provider when there is any choice element
        if ((_a = this._session) === null || _a === void 0 ? void 0 : _a.hasChoice) {
            const provider = {
                _debugDisplayName: 'snippetChoiceCompletions',
                provideCompletionItems: (model, position) => {
                    if (!this._session || model !== this._editor.getModel() || !_common_core_position_js__WEBPACK_IMPORTED_MODULE_11__/* .Position */ .L.equals(this._editor.getPosition(), position)) {
                        return undefined;
                    }
                    const { activeChoice } = this._session;
                    if (!activeChoice || activeChoice.choice.options.length === 0) {
                        return undefined;
                    }
                    const word = model.getValueInRange(activeChoice.range);
                    const isAnyOfOptions = Boolean(activeChoice.choice.options.find(o => o.value === word));
                    const suggestions = [];
                    for (let i = 0; i < activeChoice.choice.options.length; i++) {
                        const option = activeChoice.choice.options[i];
                        suggestions.push({
                            kind: 13 /* CompletionItemKind.Value */,
                            label: option.value,
                            insertText: option.value,
                            sortText: 'a'.repeat(i + 1),
                            range: activeChoice.range,
                            filterText: isAnyOfOptions ? `${word}_${option.value}` : undefined,
                            command: { id: 'jumpToNextSnippetPlaceholder', title: (0,_nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC)('next', 'Go to next placeholder...') }
                        });
                    }
                    return { suggestions };
                }
            };
            const model = this._editor.getModel();
            let registration;
            let isRegistered = false;
            const disable = () => {
                registration === null || registration === void 0 ? void 0 : registration.dispose();
                isRegistered = false;
            };
            const enable = () => {
                if (!isRegistered) {
                    registration = this._languageFeaturesService.completionProvider.register({
                        language: model.getLanguageId(),
                        pattern: model.uri.fsPath,
                        scheme: model.uri.scheme,
                        exclusive: true
                    }, provider);
                    this._snippetListener.add(registration);
                    isRegistered = true;
                }
            };
            this._choiceCompletions = { provider, enable, disable };
        }
        this._updateState();
        this._snippetListener.add(this._editor.onDidChangeModelContent(e => e.isFlush && this.cancel()));
        this._snippetListener.add(this._editor.onDidChangeModel(() => this.cancel()));
        this._snippetListener.add(this._editor.onDidChangeCursorSelection(() => this._updateState()));
    }
    _updateState() {
        if (!this._session || !this._editor.hasModel()) {
            // canceled in the meanwhile
            return;
        }
        if (this._modelVersionId === this._editor.getModel().getAlternativeVersionId()) {
            // undo until the 'before' state happened
            // and makes use cancel snippet mode
            return this.cancel();
        }
        if (!this._session.hasPlaceholder) {
            // don't listen for selection changes and don't
            // update context keys when the snippet is plain text
            return this.cancel();
        }
        if (this._session.isAtLastPlaceholder || !this._session.isSelectionWithinPlaceholders()) {
            this._editor.getModel().pushStackElement();
            return this.cancel();
        }
        this._inSnippet.set(true);
        this._hasPrevTabstop.set(!this._session.isAtFirstPlaceholder);
        this._hasNextTabstop.set(!this._session.isAtLastPlaceholder);
        this._handleChoice();
    }
    _handleChoice() {
        var _a;
        if (!this._session || !this._editor.hasModel()) {
            this._currentChoice = undefined;
            return;
        }
        const { activeChoice } = this._session;
        if (!activeChoice || !this._choiceCompletions) {
            (_a = this._choiceCompletions) === null || _a === void 0 ? void 0 : _a.disable();
            this._currentChoice = undefined;
            return;
        }
        if (this._currentChoice !== activeChoice.choice) {
            this._currentChoice = activeChoice.choice;
            this._choiceCompletions.enable();
            // trigger suggest with the special choice completion provider
            queueMicrotask(() => {
                (0,_suggest_browser_suggest_js__WEBPACK_IMPORTED_MODULE_5__/* .showSimpleSuggestions */ .i5)(this._editor, this._choiceCompletions.provider);
            });
        }
    }
    finish() {
        while (this._inSnippet.get()) {
            this.next();
        }
    }
    cancel(resetSelection = false) {
        var _a;
        this._inSnippet.reset();
        this._hasPrevTabstop.reset();
        this._hasNextTabstop.reset();
        this._snippetListener.clear();
        this._currentChoice = undefined;
        (_a = this._session) === null || _a === void 0 ? void 0 : _a.dispose();
        this._session = undefined;
        this._modelVersionId = -1;
        if (resetSelection) {
            // reset selection to the primary cursor when being asked
            // for. this happens when explicitly cancelling snippet mode,
            // e.g. when pressing ESC
            this._editor.setSelections([this._editor.getSelection()]);
        }
    }
    prev() {
        var _a;
        (_a = this._session) === null || _a === void 0 ? void 0 : _a.prev();
        this._updateState();
    }
    next() {
        var _a;
        (_a = this._session) === null || _a === void 0 ? void 0 : _a.next();
        this._updateState();
    }
    isInSnippet() {
        return Boolean(this._inSnippet.get());
    }
};
SnippetController2.ID = 'snippetController2';
SnippetController2.InSnippetMode = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .RawContextKey */ .uy('inSnippetMode', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC)('inSnippetMode', "Whether the editor in current in snippet mode"));
SnippetController2.HasNextTabstop = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .RawContextKey */ .uy('hasNextTabstop', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC)('hasNextTabstop', "Whether there is a next tab stop when in snippet mode"));
SnippetController2.HasPrevTabstop = new _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .RawContextKey */ .uy('hasPrevTabstop', false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC)('hasPrevTabstop', "Whether there is a previous tab stop when in snippet mode"));
SnippetController2 = __decorate([
    __param(1, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_8__/* .ILogService */ .VZ),
    __param(2, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_4__/* .ILanguageFeaturesService */ .p),
    __param(3, _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .IContextKeyService */ .i6),
    __param(4, _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .ILanguageConfigurationService */ .c_)
], SnippetController2);

(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorContribution */ ._K)(SnippetController2.ID, SnippetController2, 4 /* EditorContributionInstantiation.Lazy */);
const CommandCtor = _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorCommand */ ._l.bindToContribution(SnippetController2.get);
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorCommand */ .fK)(new CommandCtor({
    id: 'jumpToNextSnippetPlaceholder',
    precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .ContextKeyExpr */ .Ao.and(SnippetController2.InSnippetMode, SnippetController2.HasNextTabstop),
    handler: ctrl => ctrl.next(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorContextKeys */ .u.editorTextFocus,
        primary: 2 /* KeyCode.Tab */
    }
}));
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorCommand */ .fK)(new CommandCtor({
    id: 'jumpToPrevSnippetPlaceholder',
    precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .ContextKeyExpr */ .Ao.and(SnippetController2.InSnippetMode, SnippetController2.HasPrevTabstop),
    handler: ctrl => ctrl.prev(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorContextKeys */ .u.editorTextFocus,
        primary: 1024 /* KeyMod.Shift */ | 2 /* KeyCode.Tab */
    }
}));
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorCommand */ .fK)(new CommandCtor({
    id: 'leaveSnippet',
    precondition: SnippetController2.InSnippetMode,
    handler: ctrl => ctrl.cancel(true),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 30,
        kbExpr: _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorContextKeys */ .u.editorTextFocus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorCommand */ .fK)(new CommandCtor({
    id: 'acceptSnippet',
    precondition: SnippetController2.InSnippetMode,
    handler: ctrl => ctrl.finish(),
    // kbOpts: {
    // 	weight: KeybindingWeight.EditorContrib + 30,
    // 	kbExpr: EditorContextKeys.textFocus,
    // 	primary: KeyCode.Enter,
    // }
}));


/***/ }),

/***/ 97970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lv: function() { return /* binding */ Choice; },
/* harmony export */   Vm: function() { return /* binding */ Placeholder; },
/* harmony export */   Yj: function() { return /* binding */ SnippetParser; },
/* harmony export */   xv: function() { return /* binding */ Text; },
/* harmony export */   y1: function() { return /* binding */ TextmateSnippet; }
/* harmony export */ });
/* unused harmony exports Scanner, Marker, TransformableMarker, Transform, FormatString, Variable */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Scanner {
    constructor() {
        this.value = '';
        this.pos = 0;
    }
    static isDigitCharacter(ch) {
        return ch >= 48 /* CharCode.Digit0 */ && ch <= 57 /* CharCode.Digit9 */;
    }
    static isVariableCharacter(ch) {
        return ch === 95 /* CharCode.Underline */
            || (ch >= 97 /* CharCode.a */ && ch <= 122 /* CharCode.z */)
            || (ch >= 65 /* CharCode.A */ && ch <= 90 /* CharCode.Z */);
    }
    text(value) {
        this.value = value;
        this.pos = 0;
    }
    tokenText(token) {
        return this.value.substr(token.pos, token.len);
    }
    next() {
        if (this.pos >= this.value.length) {
            return { type: 14 /* TokenType.EOF */, pos: this.pos, len: 0 };
        }
        const pos = this.pos;
        let len = 0;
        let ch = this.value.charCodeAt(pos);
        let type;
        // static types
        type = Scanner._table[ch];
        if (typeof type === 'number') {
            this.pos += 1;
            return { type, pos, len: 1 };
        }
        // number
        if (Scanner.isDigitCharacter(ch)) {
            type = 8 /* TokenType.Int */;
            do {
                len += 1;
                ch = this.value.charCodeAt(pos + len);
            } while (Scanner.isDigitCharacter(ch));
            this.pos += len;
            return { type, pos, len };
        }
        // variable name
        if (Scanner.isVariableCharacter(ch)) {
            type = 9 /* TokenType.VariableName */;
            do {
                ch = this.value.charCodeAt(pos + (++len));
            } while (Scanner.isVariableCharacter(ch) || Scanner.isDigitCharacter(ch));
            this.pos += len;
            return { type, pos, len };
        }
        // format
        type = 10 /* TokenType.Format */;
        do {
            len += 1;
            ch = this.value.charCodeAt(pos + len);
        } while (!isNaN(ch)
            && typeof Scanner._table[ch] === 'undefined' // not static token
            && !Scanner.isDigitCharacter(ch) // not number
            && !Scanner.isVariableCharacter(ch) // not variable
        );
        this.pos += len;
        return { type, pos, len };
    }
}
Scanner._table = {
    [36 /* CharCode.DollarSign */]: 0 /* TokenType.Dollar */,
    [58 /* CharCode.Colon */]: 1 /* TokenType.Colon */,
    [44 /* CharCode.Comma */]: 2 /* TokenType.Comma */,
    [123 /* CharCode.OpenCurlyBrace */]: 3 /* TokenType.CurlyOpen */,
    [125 /* CharCode.CloseCurlyBrace */]: 4 /* TokenType.CurlyClose */,
    [92 /* CharCode.Backslash */]: 5 /* TokenType.Backslash */,
    [47 /* CharCode.Slash */]: 6 /* TokenType.Forwardslash */,
    [124 /* CharCode.Pipe */]: 7 /* TokenType.Pipe */,
    [43 /* CharCode.Plus */]: 11 /* TokenType.Plus */,
    [45 /* CharCode.Dash */]: 12 /* TokenType.Dash */,
    [63 /* CharCode.QuestionMark */]: 13 /* TokenType.QuestionMark */,
};
class Marker {
    constructor() {
        this._children = [];
    }
    appendChild(child) {
        if (child instanceof Text && this._children[this._children.length - 1] instanceof Text) {
            // this and previous child are text -> merge them
            this._children[this._children.length - 1].value += child.value;
        }
        else {
            // normal adoption of child
            child.parent = this;
            this._children.push(child);
        }
        return this;
    }
    replace(child, others) {
        const { parent } = child;
        const idx = parent.children.indexOf(child);
        const newChildren = parent.children.slice(0);
        newChildren.splice(idx, 1, ...others);
        parent._children = newChildren;
        (function _fixParent(children, parent) {
            for (const child of children) {
                child.parent = parent;
                _fixParent(child.children, child);
            }
        })(others, parent);
    }
    get children() {
        return this._children;
    }
    get rightMostDescendant() {
        if (this._children.length > 0) {
            return this._children[this._children.length - 1].rightMostDescendant;
        }
        return this;
    }
    get snippet() {
        let candidate = this;
        while (true) {
            if (!candidate) {
                return undefined;
            }
            if (candidate instanceof TextmateSnippet) {
                return candidate;
            }
            candidate = candidate.parent;
        }
    }
    toString() {
        return this.children.reduce((prev, cur) => prev + cur.toString(), '');
    }
    len() {
        return 0;
    }
}
class Text extends Marker {
    constructor(value) {
        super();
        this.value = value;
    }
    toString() {
        return this.value;
    }
    len() {
        return this.value.length;
    }
    clone() {
        return new Text(this.value);
    }
}
class TransformableMarker extends Marker {
}
class Placeholder extends TransformableMarker {
    static compareByIndex(a, b) {
        if (a.index === b.index) {
            return 0;
        }
        else if (a.isFinalTabstop) {
            return 1;
        }
        else if (b.isFinalTabstop) {
            return -1;
        }
        else if (a.index < b.index) {
            return -1;
        }
        else if (a.index > b.index) {
            return 1;
        }
        else {
            return 0;
        }
    }
    constructor(index) {
        super();
        this.index = index;
    }
    get isFinalTabstop() {
        return this.index === 0;
    }
    get choice() {
        return this._children.length === 1 && this._children[0] instanceof Choice
            ? this._children[0]
            : undefined;
    }
    clone() {
        const ret = new Placeholder(this.index);
        if (this.transform) {
            ret.transform = this.transform.clone();
        }
        ret._children = this.children.map(child => child.clone());
        return ret;
    }
}
class Choice extends Marker {
    constructor() {
        super(...arguments);
        this.options = [];
    }
    appendChild(marker) {
        if (marker instanceof Text) {
            marker.parent = this;
            this.options.push(marker);
        }
        return this;
    }
    toString() {
        return this.options[0].value;
    }
    len() {
        return this.options[0].len();
    }
    clone() {
        const ret = new Choice();
        this.options.forEach(ret.appendChild, ret);
        return ret;
    }
}
class Transform extends Marker {
    constructor() {
        super(...arguments);
        this.regexp = new RegExp('');
    }
    resolve(value) {
        const _this = this;
        let didMatch = false;
        let ret = value.replace(this.regexp, function () {
            didMatch = true;
            return _this._replace(Array.prototype.slice.call(arguments, 0, -2));
        });
        // when the regex didn't match and when the transform has
        // else branches, then run those
        if (!didMatch && this._children.some(child => child instanceof FormatString && Boolean(child.elseValue))) {
            ret = this._replace([]);
        }
        return ret;
    }
    _replace(groups) {
        let ret = '';
        for (const marker of this._children) {
            if (marker instanceof FormatString) {
                let value = groups[marker.index] || '';
                value = marker.resolve(value);
                ret += value;
            }
            else {
                ret += marker.toString();
            }
        }
        return ret;
    }
    toString() {
        return '';
    }
    clone() {
        const ret = new Transform();
        ret.regexp = new RegExp(this.regexp.source, '' + (this.regexp.ignoreCase ? 'i' : '') + (this.regexp.global ? 'g' : ''));
        ret._children = this.children.map(child => child.clone());
        return ret;
    }
}
class FormatString extends Marker {
    constructor(index, shorthandName, ifValue, elseValue) {
        super();
        this.index = index;
        this.shorthandName = shorthandName;
        this.ifValue = ifValue;
        this.elseValue = elseValue;
    }
    resolve(value) {
        if (this.shorthandName === 'upcase') {
            return !value ? '' : value.toLocaleUpperCase();
        }
        else if (this.shorthandName === 'downcase') {
            return !value ? '' : value.toLocaleLowerCase();
        }
        else if (this.shorthandName === 'capitalize') {
            return !value ? '' : (value[0].toLocaleUpperCase() + value.substr(1));
        }
        else if (this.shorthandName === 'pascalcase') {
            return !value ? '' : this._toPascalCase(value);
        }
        else if (this.shorthandName === 'camelcase') {
            return !value ? '' : this._toCamelCase(value);
        }
        else if (Boolean(value) && typeof this.ifValue === 'string') {
            return this.ifValue;
        }
        else if (!Boolean(value) && typeof this.elseValue === 'string') {
            return this.elseValue;
        }
        else {
            return value || '';
        }
    }
    _toPascalCase(value) {
        const match = value.match(/[a-z0-9]+/gi);
        if (!match) {
            return value;
        }
        return match.map(word => {
            return word.charAt(0).toUpperCase() + word.substr(1);
        })
            .join('');
    }
    _toCamelCase(value) {
        const match = value.match(/[a-z0-9]+/gi);
        if (!match) {
            return value;
        }
        return match.map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toLowerCase() + word.substr(1);
            }
            return word.charAt(0).toUpperCase() + word.substr(1);
        })
            .join('');
    }
    clone() {
        const ret = new FormatString(this.index, this.shorthandName, this.ifValue, this.elseValue);
        return ret;
    }
}
class Variable extends TransformableMarker {
    constructor(name) {
        super();
        this.name = name;
    }
    resolve(resolver) {
        let value = resolver.resolve(this);
        if (this.transform) {
            value = this.transform.resolve(value || '');
        }
        if (value !== undefined) {
            this._children = [new Text(value)];
            return true;
        }
        return false;
    }
    clone() {
        const ret = new Variable(this.name);
        if (this.transform) {
            ret.transform = this.transform.clone();
        }
        ret._children = this.children.map(child => child.clone());
        return ret;
    }
}
function walk(marker, visitor) {
    const stack = [...marker];
    while (stack.length > 0) {
        const marker = stack.shift();
        const recurse = visitor(marker);
        if (!recurse) {
            break;
        }
        stack.unshift(...marker.children);
    }
}
class TextmateSnippet extends Marker {
    get placeholderInfo() {
        if (!this._placeholders) {
            // fill in placeholders
            const all = [];
            let last;
            this.walk(function (candidate) {
                if (candidate instanceof Placeholder) {
                    all.push(candidate);
                    last = !last || last.index < candidate.index ? candidate : last;
                }
                return true;
            });
            this._placeholders = { all, last };
        }
        return this._placeholders;
    }
    get placeholders() {
        const { all } = this.placeholderInfo;
        return all;
    }
    offset(marker) {
        let pos = 0;
        let found = false;
        this.walk(candidate => {
            if (candidate === marker) {
                found = true;
                return false;
            }
            pos += candidate.len();
            return true;
        });
        if (!found) {
            return -1;
        }
        return pos;
    }
    fullLen(marker) {
        let ret = 0;
        walk([marker], marker => {
            ret += marker.len();
            return true;
        });
        return ret;
    }
    enclosingPlaceholders(placeholder) {
        const ret = [];
        let { parent } = placeholder;
        while (parent) {
            if (parent instanceof Placeholder) {
                ret.push(parent);
            }
            parent = parent.parent;
        }
        return ret;
    }
    resolveVariables(resolver) {
        this.walk(candidate => {
            if (candidate instanceof Variable) {
                if (candidate.resolve(resolver)) {
                    this._placeholders = undefined;
                }
            }
            return true;
        });
        return this;
    }
    appendChild(child) {
        this._placeholders = undefined;
        return super.appendChild(child);
    }
    replace(child, others) {
        this._placeholders = undefined;
        return super.replace(child, others);
    }
    clone() {
        const ret = new TextmateSnippet();
        this._children = this.children.map(child => child.clone());
        return ret;
    }
    walk(visitor) {
        walk(this.children, visitor);
    }
}
class SnippetParser {
    constructor() {
        this._scanner = new Scanner();
        this._token = { type: 14 /* TokenType.EOF */, pos: 0, len: 0 };
    }
    static escape(value) {
        return value.replace(/\$|}|\\/g, '\\$&');
    }
    static guessNeedsClipboard(template) {
        return /\${?CLIPBOARD/.test(template);
    }
    parse(value, insertFinalTabstop, enforceFinalTabstop) {
        const snippet = new TextmateSnippet();
        this.parseFragment(value, snippet);
        this.ensureFinalTabstop(snippet, enforceFinalTabstop !== null && enforceFinalTabstop !== void 0 ? enforceFinalTabstop : false, insertFinalTabstop !== null && insertFinalTabstop !== void 0 ? insertFinalTabstop : false);
        return snippet;
    }
    parseFragment(value, snippet) {
        const offset = snippet.children.length;
        this._scanner.text(value);
        this._token = this._scanner.next();
        while (this._parse(snippet)) {
            // nothing
        }
        // fill in values for placeholders. the first placeholder of an index
        // that has a value defines the value for all placeholders with that index
        const placeholderDefaultValues = new Map();
        const incompletePlaceholders = [];
        snippet.walk(marker => {
            if (marker instanceof Placeholder) {
                if (marker.isFinalTabstop) {
                    placeholderDefaultValues.set(0, undefined);
                }
                else if (!placeholderDefaultValues.has(marker.index) && marker.children.length > 0) {
                    placeholderDefaultValues.set(marker.index, marker.children);
                }
                else {
                    incompletePlaceholders.push(marker);
                }
            }
            return true;
        });
        const fillInIncompletePlaceholder = (placeholder, stack) => {
            const defaultValues = placeholderDefaultValues.get(placeholder.index);
            if (!defaultValues) {
                return;
            }
            const clone = new Placeholder(placeholder.index);
            clone.transform = placeholder.transform;
            for (const child of defaultValues) {
                const newChild = child.clone();
                clone.appendChild(newChild);
                // "recurse" on children that are again placeholders
                if (newChild instanceof Placeholder && placeholderDefaultValues.has(newChild.index) && !stack.has(newChild.index)) {
                    stack.add(newChild.index);
                    fillInIncompletePlaceholder(newChild, stack);
                    stack.delete(newChild.index);
                }
            }
            snippet.replace(placeholder, [clone]);
        };
        const stack = new Set();
        for (const placeholder of incompletePlaceholders) {
            fillInIncompletePlaceholder(placeholder, stack);
        }
        return snippet.children.slice(offset);
    }
    ensureFinalTabstop(snippet, enforceFinalTabstop, insertFinalTabstop) {
        if (enforceFinalTabstop || insertFinalTabstop && snippet.placeholders.length > 0) {
            const finalTabstop = snippet.placeholders.find(p => p.index === 0);
            if (!finalTabstop) {
                // the snippet uses placeholders but has no
                // final tabstop defined -> insert at the end
                snippet.appendChild(new Placeholder(0));
            }
        }
    }
    _accept(type, value) {
        if (type === undefined || this._token.type === type) {
            const ret = !value ? true : this._scanner.tokenText(this._token);
            this._token = this._scanner.next();
            return ret;
        }
        return false;
    }
    _backTo(token) {
        this._scanner.pos = token.pos + token.len;
        this._token = token;
        return false;
    }
    _until(type) {
        const start = this._token;
        while (this._token.type !== type) {
            if (this._token.type === 14 /* TokenType.EOF */) {
                return false;
            }
            else if (this._token.type === 5 /* TokenType.Backslash */) {
                const nextToken = this._scanner.next();
                if (nextToken.type !== 0 /* TokenType.Dollar */
                    && nextToken.type !== 4 /* TokenType.CurlyClose */
                    && nextToken.type !== 5 /* TokenType.Backslash */) {
                    return false;
                }
            }
            this._token = this._scanner.next();
        }
        const value = this._scanner.value.substring(start.pos, this._token.pos).replace(/\\(\$|}|\\)/g, '$1');
        this._token = this._scanner.next();
        return value;
    }
    _parse(marker) {
        return this._parseEscaped(marker)
            || this._parseTabstopOrVariableName(marker)
            || this._parseComplexPlaceholder(marker)
            || this._parseComplexVariable(marker)
            || this._parseAnything(marker);
    }
    // \$, \\, \} -> just text
    _parseEscaped(marker) {
        let value;
        if (value = this._accept(5 /* TokenType.Backslash */, true)) {
            // saw a backslash, append escaped token or that backslash
            value = this._accept(0 /* TokenType.Dollar */, true)
                || this._accept(4 /* TokenType.CurlyClose */, true)
                || this._accept(5 /* TokenType.Backslash */, true)
                || value;
            marker.appendChild(new Text(value));
            return true;
        }
        return false;
    }
    // $foo -> variable, $1 -> tabstop
    _parseTabstopOrVariableName(parent) {
        let value;
        const token = this._token;
        const match = this._accept(0 /* TokenType.Dollar */)
            && (value = this._accept(9 /* TokenType.VariableName */, true) || this._accept(8 /* TokenType.Int */, true));
        if (!match) {
            return this._backTo(token);
        }
        parent.appendChild(/^\d+$/.test(value)
            ? new Placeholder(Number(value))
            : new Variable(value));
        return true;
    }
    // ${1:<children>}, ${1} -> placeholder
    _parseComplexPlaceholder(parent) {
        let index;
        const token = this._token;
        const match = this._accept(0 /* TokenType.Dollar */)
            && this._accept(3 /* TokenType.CurlyOpen */)
            && (index = this._accept(8 /* TokenType.Int */, true));
        if (!match) {
            return this._backTo(token);
        }
        const placeholder = new Placeholder(Number(index));
        if (this._accept(1 /* TokenType.Colon */)) {
            // ${1:<children>}
            while (true) {
                // ...} -> done
                if (this._accept(4 /* TokenType.CurlyClose */)) {
                    parent.appendChild(placeholder);
                    return true;
                }
                if (this._parse(placeholder)) {
                    continue;
                }
                // fallback
                parent.appendChild(new Text('${' + index + ':'));
                placeholder.children.forEach(parent.appendChild, parent);
                return true;
            }
        }
        else if (placeholder.index > 0 && this._accept(7 /* TokenType.Pipe */)) {
            // ${1|one,two,three|}
            const choice = new Choice();
            while (true) {
                if (this._parseChoiceElement(choice)) {
                    if (this._accept(2 /* TokenType.Comma */)) {
                        // opt, -> more
                        continue;
                    }
                    if (this._accept(7 /* TokenType.Pipe */)) {
                        placeholder.appendChild(choice);
                        if (this._accept(4 /* TokenType.CurlyClose */)) {
                            // ..|} -> done
                            parent.appendChild(placeholder);
                            return true;
                        }
                    }
                }
                this._backTo(token);
                return false;
            }
        }
        else if (this._accept(6 /* TokenType.Forwardslash */)) {
            // ${1/<regex>/<format>/<options>}
            if (this._parseTransform(placeholder)) {
                parent.appendChild(placeholder);
                return true;
            }
            this._backTo(token);
            return false;
        }
        else if (this._accept(4 /* TokenType.CurlyClose */)) {
            // ${1}
            parent.appendChild(placeholder);
            return true;
        }
        else {
            // ${1 <- missing curly or colon
            return this._backTo(token);
        }
    }
    _parseChoiceElement(parent) {
        const token = this._token;
        const values = [];
        while (true) {
            if (this._token.type === 2 /* TokenType.Comma */ || this._token.type === 7 /* TokenType.Pipe */) {
                break;
            }
            let value;
            if (value = this._accept(5 /* TokenType.Backslash */, true)) {
                // \, \|, or \\
                value = this._accept(2 /* TokenType.Comma */, true)
                    || this._accept(7 /* TokenType.Pipe */, true)
                    || this._accept(5 /* TokenType.Backslash */, true)
                    || value;
            }
            else {
                value = this._accept(undefined, true);
            }
            if (!value) {
                // EOF
                this._backTo(token);
                return false;
            }
            values.push(value);
        }
        if (values.length === 0) {
            this._backTo(token);
            return false;
        }
        parent.appendChild(new Text(values.join('')));
        return true;
    }
    // ${foo:<children>}, ${foo} -> variable
    _parseComplexVariable(parent) {
        let name;
        const token = this._token;
        const match = this._accept(0 /* TokenType.Dollar */)
            && this._accept(3 /* TokenType.CurlyOpen */)
            && (name = this._accept(9 /* TokenType.VariableName */, true));
        if (!match) {
            return this._backTo(token);
        }
        const variable = new Variable(name);
        if (this._accept(1 /* TokenType.Colon */)) {
            // ${foo:<children>}
            while (true) {
                // ...} -> done
                if (this._accept(4 /* TokenType.CurlyClose */)) {
                    parent.appendChild(variable);
                    return true;
                }
                if (this._parse(variable)) {
                    continue;
                }
                // fallback
                parent.appendChild(new Text('${' + name + ':'));
                variable.children.forEach(parent.appendChild, parent);
                return true;
            }
        }
        else if (this._accept(6 /* TokenType.Forwardslash */)) {
            // ${foo/<regex>/<format>/<options>}
            if (this._parseTransform(variable)) {
                parent.appendChild(variable);
                return true;
            }
            this._backTo(token);
            return false;
        }
        else if (this._accept(4 /* TokenType.CurlyClose */)) {
            // ${foo}
            parent.appendChild(variable);
            return true;
        }
        else {
            // ${foo <- missing curly or colon
            return this._backTo(token);
        }
    }
    _parseTransform(parent) {
        // ...<regex>/<format>/<options>}
        const transform = new Transform();
        let regexValue = '';
        let regexOptions = '';
        // (1) /regex
        while (true) {
            if (this._accept(6 /* TokenType.Forwardslash */)) {
                break;
            }
            let escaped;
            if (escaped = this._accept(5 /* TokenType.Backslash */, true)) {
                escaped = this._accept(6 /* TokenType.Forwardslash */, true) || escaped;
                regexValue += escaped;
                continue;
            }
            if (this._token.type !== 14 /* TokenType.EOF */) {
                regexValue += this._accept(undefined, true);
                continue;
            }
            return false;
        }
        // (2) /format
        while (true) {
            if (this._accept(6 /* TokenType.Forwardslash */)) {
                break;
            }
            let escaped;
            if (escaped = this._accept(5 /* TokenType.Backslash */, true)) {
                escaped = this._accept(5 /* TokenType.Backslash */, true) || this._accept(6 /* TokenType.Forwardslash */, true) || escaped;
                transform.appendChild(new Text(escaped));
                continue;
            }
            if (this._parseFormatString(transform) || this._parseAnything(transform)) {
                continue;
            }
            return false;
        }
        // (3) /option
        while (true) {
            if (this._accept(4 /* TokenType.CurlyClose */)) {
                break;
            }
            if (this._token.type !== 14 /* TokenType.EOF */) {
                regexOptions += this._accept(undefined, true);
                continue;
            }
            return false;
        }
        try {
            transform.regexp = new RegExp(regexValue, regexOptions);
        }
        catch (e) {
            // invalid regexp
            return false;
        }
        parent.transform = transform;
        return true;
    }
    _parseFormatString(parent) {
        const token = this._token;
        if (!this._accept(0 /* TokenType.Dollar */)) {
            return false;
        }
        let complex = false;
        if (this._accept(3 /* TokenType.CurlyOpen */)) {
            complex = true;
        }
        const index = this._accept(8 /* TokenType.Int */, true);
        if (!index) {
            this._backTo(token);
            return false;
        }
        else if (!complex) {
            // $1
            parent.appendChild(new FormatString(Number(index)));
            return true;
        }
        else if (this._accept(4 /* TokenType.CurlyClose */)) {
            // ${1}
            parent.appendChild(new FormatString(Number(index)));
            return true;
        }
        else if (!this._accept(1 /* TokenType.Colon */)) {
            this._backTo(token);
            return false;
        }
        if (this._accept(6 /* TokenType.Forwardslash */)) {
            // ${1:/upcase}
            const shorthand = this._accept(9 /* TokenType.VariableName */, true);
            if (!shorthand || !this._accept(4 /* TokenType.CurlyClose */)) {
                this._backTo(token);
                return false;
            }
            else {
                parent.appendChild(new FormatString(Number(index), shorthand));
                return true;
            }
        }
        else if (this._accept(11 /* TokenType.Plus */)) {
            // ${1:+<if>}
            const ifValue = this._until(4 /* TokenType.CurlyClose */);
            if (ifValue) {
                parent.appendChild(new FormatString(Number(index), undefined, ifValue, undefined));
                return true;
            }
        }
        else if (this._accept(12 /* TokenType.Dash */)) {
            // ${2:-<else>}
            const elseValue = this._until(4 /* TokenType.CurlyClose */);
            if (elseValue) {
                parent.appendChild(new FormatString(Number(index), undefined, undefined, elseValue));
                return true;
            }
        }
        else if (this._accept(13 /* TokenType.QuestionMark */)) {
            // ${2:?<if>:<else>}
            const ifValue = this._until(1 /* TokenType.Colon */);
            if (ifValue) {
                const elseValue = this._until(4 /* TokenType.CurlyClose */);
                if (elseValue) {
                    parent.appendChild(new FormatString(Number(index), undefined, ifValue, elseValue));
                    return true;
                }
            }
        }
        else {
            // ${1:<else>}
            const elseValue = this._until(4 /* TokenType.CurlyClose */);
            if (elseValue) {
                parent.appendChild(new FormatString(Number(index), undefined, undefined, elseValue));
                return true;
            }
        }
        this._backTo(token);
        return false;
    }
    _parseAnything(marker) {
        if (this._token.type !== 14 /* TokenType.EOF */) {
            marker.appendChild(new Text(this._scanner.tokenText(this._token)));
            this._accept(undefined);
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ 58213:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: function() { return /* binding */ SnippetSession; }
});

// UNUSED EXPORTS: OneSnippet

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(70625);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetSession.css
var snippetSession = __webpack_require__(68424);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetSession.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(snippetSession/* default */.Z, options);




       /* harmony default export */ var browser_snippetSession = (snippetSession/* default */.Z && snippetSession/* default */.Z.locals ? snippetSession/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(54499);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/selection.js
var core_selection = __webpack_require__(2257);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js + 5 modules
var languageConfigurationRegistry = __webpack_require__(30766);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js
var textModel = __webpack_require__(95792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/label/common/label.js
var label = __webpack_require__(31888);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/workspace/common/workspace.js
var workspace = __webpack_require__(80695);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetParser.js
var snippetParser = __webpack_require__(97970);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/labels.js
var labels = __webpack_require__(36698);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/path.js
var path = __webpack_require__(45971);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(85493);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uuid.js
var uuid = __webpack_require__(72258);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetVariables.js
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









const KnownSnippetVariableNames = Object.freeze({
    'CURRENT_YEAR': true,
    'CURRENT_YEAR_SHORT': true,
    'CURRENT_MONTH': true,
    'CURRENT_DATE': true,
    'CURRENT_HOUR': true,
    'CURRENT_MINUTE': true,
    'CURRENT_SECOND': true,
    'CURRENT_DAY_NAME': true,
    'CURRENT_DAY_NAME_SHORT': true,
    'CURRENT_MONTH_NAME': true,
    'CURRENT_MONTH_NAME_SHORT': true,
    'CURRENT_SECONDS_UNIX': true,
    'CURRENT_TIMEZONE_OFFSET': true,
    'SELECTION': true,
    'CLIPBOARD': true,
    'TM_SELECTED_TEXT': true,
    'TM_CURRENT_LINE': true,
    'TM_CURRENT_WORD': true,
    'TM_LINE_INDEX': true,
    'TM_LINE_NUMBER': true,
    'TM_FILENAME': true,
    'TM_FILENAME_BASE': true,
    'TM_DIRECTORY': true,
    'TM_FILEPATH': true,
    'CURSOR_INDEX': true,
    'CURSOR_NUMBER': true,
    'RELATIVE_FILEPATH': true,
    'BLOCK_COMMENT_START': true,
    'BLOCK_COMMENT_END': true,
    'LINE_COMMENT': true,
    'WORKSPACE_NAME': true,
    'WORKSPACE_FOLDER': true,
    'RANDOM': true,
    'RANDOM_HEX': true,
    'UUID': true
});
class CompositeSnippetVariableResolver {
    constructor(_delegates) {
        this._delegates = _delegates;
        //
    }
    resolve(variable) {
        for (const delegate of this._delegates) {
            const value = delegate.resolve(variable);
            if (value !== undefined) {
                return value;
            }
        }
        return undefined;
    }
}
class SelectionBasedVariableResolver {
    constructor(_model, _selection, _selectionIdx, _overtypingCapturer) {
        this._model = _model;
        this._selection = _selection;
        this._selectionIdx = _selectionIdx;
        this._overtypingCapturer = _overtypingCapturer;
        //
    }
    resolve(variable) {
        const { name } = variable;
        if (name === 'SELECTION' || name === 'TM_SELECTED_TEXT') {
            let value = this._model.getValueInRange(this._selection) || undefined;
            let isMultiline = this._selection.startLineNumber !== this._selection.endLineNumber;
            // If there was no selected text, try to get last overtyped text
            if (!value && this._overtypingCapturer) {
                const info = this._overtypingCapturer.getLastOvertypedInfo(this._selectionIdx);
                if (info) {
                    value = info.value;
                    isMultiline = info.multiline;
                }
            }
            if (value && isMultiline && variable.snippet) {
                // Selection is a multiline string which we indentation we now
                // need to adjust. We compare the indentation of this variable
                // with the indentation at the editor position and add potential
                // extra indentation to the value
                const line = this._model.getLineContent(this._selection.startLineNumber);
                const lineLeadingWhitespace = (0,strings/* getLeadingWhitespace */.V8)(line, 0, this._selection.startColumn - 1);
                let varLeadingWhitespace = lineLeadingWhitespace;
                variable.snippet.walk(marker => {
                    if (marker === variable) {
                        return false;
                    }
                    if (marker instanceof snippetParser/* Text */.xv) {
                        varLeadingWhitespace = (0,strings/* getLeadingWhitespace */.V8)((0,strings/* splitLines */.uq)(marker.value).pop());
                    }
                    return true;
                });
                const whitespaceCommonLength = (0,strings/* commonPrefixLength */.Mh)(varLeadingWhitespace, lineLeadingWhitespace);
                value = value.replace(/(\r\n|\r|\n)(.*)/g, (m, newline, rest) => `${newline}${varLeadingWhitespace.substr(whitespaceCommonLength)}${rest}`);
            }
            return value;
        }
        else if (name === 'TM_CURRENT_LINE') {
            return this._model.getLineContent(this._selection.positionLineNumber);
        }
        else if (name === 'TM_CURRENT_WORD') {
            const info = this._model.getWordAtPosition({
                lineNumber: this._selection.positionLineNumber,
                column: this._selection.positionColumn
            });
            return info && info.word || undefined;
        }
        else if (name === 'TM_LINE_INDEX') {
            return String(this._selection.positionLineNumber - 1);
        }
        else if (name === 'TM_LINE_NUMBER') {
            return String(this._selection.positionLineNumber);
        }
        else if (name === 'CURSOR_INDEX') {
            return String(this._selectionIdx);
        }
        else if (name === 'CURSOR_NUMBER') {
            return String(this._selectionIdx + 1);
        }
        return undefined;
    }
}
class ModelBasedVariableResolver {
    constructor(_labelService, _model) {
        this._labelService = _labelService;
        this._model = _model;
        //
    }
    resolve(variable) {
        const { name } = variable;
        if (name === 'TM_FILENAME') {
            return path/* basename */.EZ(this._model.uri.fsPath);
        }
        else if (name === 'TM_FILENAME_BASE') {
            const name = path/* basename */.EZ(this._model.uri.fsPath);
            const idx = name.lastIndexOf('.');
            if (idx <= 0) {
                return name;
            }
            else {
                return name.slice(0, idx);
            }
        }
        else if (name === 'TM_DIRECTORY') {
            if (path/* dirname */.XX(this._model.uri.fsPath) === '.') {
                return '';
            }
            return this._labelService.getUriLabel((0,resources/* dirname */.XX)(this._model.uri));
        }
        else if (name === 'TM_FILEPATH') {
            return this._labelService.getUriLabel(this._model.uri);
        }
        else if (name === 'RELATIVE_FILEPATH') {
            return this._labelService.getUriLabel(this._model.uri, { relative: true, noPrefix: true });
        }
        return undefined;
    }
}
class ClipboardBasedVariableResolver {
    constructor(_readClipboardText, _selectionIdx, _selectionCount, _spread) {
        this._readClipboardText = _readClipboardText;
        this._selectionIdx = _selectionIdx;
        this._selectionCount = _selectionCount;
        this._spread = _spread;
        //
    }
    resolve(variable) {
        if (variable.name !== 'CLIPBOARD') {
            return undefined;
        }
        const clipboardText = this._readClipboardText();
        if (!clipboardText) {
            return undefined;
        }
        // `spread` is assigning each cursor a line of the clipboard
        // text whenever there the line count equals the cursor count
        // and when enabled
        if (this._spread) {
            const lines = clipboardText.split(/\r\n|\n|\r/).filter(s => !(0,strings/* isFalsyOrWhitespace */.m5)(s));
            if (lines.length === this._selectionCount) {
                return lines[this._selectionIdx];
            }
        }
        return clipboardText;
    }
}
let CommentBasedVariableResolver = class CommentBasedVariableResolver {
    constructor(_model, _selection, _languageConfigurationService) {
        this._model = _model;
        this._selection = _selection;
        this._languageConfigurationService = _languageConfigurationService;
        //
    }
    resolve(variable) {
        const { name } = variable;
        const langId = this._model.getLanguageIdAtPosition(this._selection.selectionStartLineNumber, this._selection.selectionStartColumn);
        const config = this._languageConfigurationService.getLanguageConfiguration(langId).comments;
        if (!config) {
            return undefined;
        }
        if (name === 'LINE_COMMENT') {
            return config.lineCommentToken || undefined;
        }
        else if (name === 'BLOCK_COMMENT_START') {
            return config.blockCommentStartToken || undefined;
        }
        else if (name === 'BLOCK_COMMENT_END') {
            return config.blockCommentEndToken || undefined;
        }
        return undefined;
    }
};
CommentBasedVariableResolver = __decorate([
    __param(2, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], CommentBasedVariableResolver);

class TimeBasedVariableResolver {
    constructor() {
        this._date = new Date();
    }
    resolve(variable) {
        const { name } = variable;
        if (name === 'CURRENT_YEAR') {
            return String(this._date.getFullYear());
        }
        else if (name === 'CURRENT_YEAR_SHORT') {
            return String(this._date.getFullYear()).slice(-2);
        }
        else if (name === 'CURRENT_MONTH') {
            return String(this._date.getMonth().valueOf() + 1).padStart(2, '0');
        }
        else if (name === 'CURRENT_DATE') {
            return String(this._date.getDate().valueOf()).padStart(2, '0');
        }
        else if (name === 'CURRENT_HOUR') {
            return String(this._date.getHours().valueOf()).padStart(2, '0');
        }
        else if (name === 'CURRENT_MINUTE') {
            return String(this._date.getMinutes().valueOf()).padStart(2, '0');
        }
        else if (name === 'CURRENT_SECOND') {
            return String(this._date.getSeconds().valueOf()).padStart(2, '0');
        }
        else if (name === 'CURRENT_DAY_NAME') {
            return TimeBasedVariableResolver.dayNames[this._date.getDay()];
        }
        else if (name === 'CURRENT_DAY_NAME_SHORT') {
            return TimeBasedVariableResolver.dayNamesShort[this._date.getDay()];
        }
        else if (name === 'CURRENT_MONTH_NAME') {
            return TimeBasedVariableResolver.monthNames[this._date.getMonth()];
        }
        else if (name === 'CURRENT_MONTH_NAME_SHORT') {
            return TimeBasedVariableResolver.monthNamesShort[this._date.getMonth()];
        }
        else if (name === 'CURRENT_SECONDS_UNIX') {
            return String(Math.floor(this._date.getTime() / 1000));
        }
        else if (name === 'CURRENT_TIMEZONE_OFFSET') {
            const rawTimeOffset = this._date.getTimezoneOffset();
            const sign = rawTimeOffset > 0 ? '-' : '+';
            const hours = Math.trunc(Math.abs(rawTimeOffset / 60));
            const hoursString = (hours < 10 ? '0' + hours : hours);
            const minutes = Math.abs(rawTimeOffset) - hours * 60;
            const minutesString = (minutes < 10 ? '0' + minutes : minutes);
            return sign + hoursString + ':' + minutesString;
        }
        return undefined;
    }
}
TimeBasedVariableResolver.dayNames = [nls/* localize */.NC('Sunday', "Sunday"), nls/* localize */.NC('Monday', "Monday"), nls/* localize */.NC('Tuesday', "Tuesday"), nls/* localize */.NC('Wednesday', "Wednesday"), nls/* localize */.NC('Thursday', "Thursday"), nls/* localize */.NC('Friday', "Friday"), nls/* localize */.NC('Saturday', "Saturday")];
TimeBasedVariableResolver.dayNamesShort = [nls/* localize */.NC('SundayShort', "Sun"), nls/* localize */.NC('MondayShort', "Mon"), nls/* localize */.NC('TuesdayShort', "Tue"), nls/* localize */.NC('WednesdayShort', "Wed"), nls/* localize */.NC('ThursdayShort', "Thu"), nls/* localize */.NC('FridayShort', "Fri"), nls/* localize */.NC('SaturdayShort', "Sat")];
TimeBasedVariableResolver.monthNames = [nls/* localize */.NC('January', "January"), nls/* localize */.NC('February', "February"), nls/* localize */.NC('March', "March"), nls/* localize */.NC('April', "April"), nls/* localize */.NC('May', "May"), nls/* localize */.NC('June', "June"), nls/* localize */.NC('July', "July"), nls/* localize */.NC('August', "August"), nls/* localize */.NC('September', "September"), nls/* localize */.NC('October', "October"), nls/* localize */.NC('November', "November"), nls/* localize */.NC('December', "December")];
TimeBasedVariableResolver.monthNamesShort = [nls/* localize */.NC('JanuaryShort', "Jan"), nls/* localize */.NC('FebruaryShort', "Feb"), nls/* localize */.NC('MarchShort', "Mar"), nls/* localize */.NC('AprilShort', "Apr"), nls/* localize */.NC('MayShort', "May"), nls/* localize */.NC('JuneShort', "Jun"), nls/* localize */.NC('JulyShort', "Jul"), nls/* localize */.NC('AugustShort', "Aug"), nls/* localize */.NC('SeptemberShort', "Sep"), nls/* localize */.NC('OctoberShort', "Oct"), nls/* localize */.NC('NovemberShort', "Nov"), nls/* localize */.NC('DecemberShort', "Dec")];
class WorkspaceBasedVariableResolver {
    constructor(_workspaceService) {
        this._workspaceService = _workspaceService;
        //
    }
    resolve(variable) {
        if (!this._workspaceService) {
            return undefined;
        }
        const workspaceIdentifier = (0,workspace/* toWorkspaceIdentifier */.uT)(this._workspaceService.getWorkspace());
        if ((0,workspace/* isEmptyWorkspaceIdentifier */.c$)(workspaceIdentifier)) {
            return undefined;
        }
        if (variable.name === 'WORKSPACE_NAME') {
            return this._resolveWorkspaceName(workspaceIdentifier);
        }
        else if (variable.name === 'WORKSPACE_FOLDER') {
            return this._resoveWorkspacePath(workspaceIdentifier);
        }
        return undefined;
    }
    _resolveWorkspaceName(workspaceIdentifier) {
        if ((0,workspace/* isSingleFolderWorkspaceIdentifier */.eb)(workspaceIdentifier)) {
            return path/* basename */.EZ(workspaceIdentifier.uri.path);
        }
        let filename = path/* basename */.EZ(workspaceIdentifier.configPath.path);
        if (filename.endsWith(workspace/* WORKSPACE_EXTENSION */.A6)) {
            filename = filename.substr(0, filename.length - workspace/* WORKSPACE_EXTENSION */.A6.length - 1);
        }
        return filename;
    }
    _resoveWorkspacePath(workspaceIdentifier) {
        if ((0,workspace/* isSingleFolderWorkspaceIdentifier */.eb)(workspaceIdentifier)) {
            return (0,labels/* normalizeDriveLetter */.D)(workspaceIdentifier.uri.fsPath);
        }
        const filename = path/* basename */.EZ(workspaceIdentifier.configPath.path);
        let folderpath = workspaceIdentifier.configPath.fsPath;
        if (folderpath.endsWith(filename)) {
            folderpath = folderpath.substr(0, folderpath.length - filename.length - 1);
        }
        return (folderpath ? (0,labels/* normalizeDriveLetter */.D)(folderpath) : '/');
    }
}
class RandomBasedVariableResolver {
    resolve(variable) {
        const { name } = variable;
        if (name === 'RANDOM') {
            return Math.random().toString().slice(-6);
        }
        else if (name === 'RANDOM_HEX') {
            return Math.random().toString(16).slice(-6);
        }
        else if (name === 'UUID') {
            return (0,uuid/* generateUuid */.R)();
        }
        return undefined;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetSession.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var snippetSession_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var snippetSession_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













class OneSnippet {
    constructor(_editor, _snippet, _snippetLineLeadingWhitespace) {
        this._editor = _editor;
        this._snippet = _snippet;
        this._snippetLineLeadingWhitespace = _snippetLineLeadingWhitespace;
        this._offset = -1;
        this._nestingLevel = 1;
        this._placeholderGroups = (0,arrays/* groupBy */.vM)(_snippet.placeholders, snippetParser/* Placeholder */.Vm.compareByIndex);
        this._placeholderGroupsIdx = -1;
    }
    initialize(textChange) {
        this._offset = textChange.newPosition;
    }
    dispose() {
        if (this._placeholderDecorations) {
            this._editor.removeDecorations([...this._placeholderDecorations.values()]);
        }
        this._placeholderGroups.length = 0;
    }
    _initDecorations() {
        if (this._offset === -1) {
            throw new Error(`Snippet not initialized!`);
        }
        if (this._placeholderDecorations) {
            // already initialized
            return;
        }
        this._placeholderDecorations = new Map();
        const model = this._editor.getModel();
        this._editor.changeDecorations(accessor => {
            // create a decoration for each placeholder
            for (const placeholder of this._snippet.placeholders) {
                const placeholderOffset = this._snippet.offset(placeholder);
                const placeholderLen = this._snippet.fullLen(placeholder);
                const range = core_range/* Range */.e.fromPositions(model.getPositionAt(this._offset + placeholderOffset), model.getPositionAt(this._offset + placeholderOffset + placeholderLen));
                const options = placeholder.isFinalTabstop ? OneSnippet._decor.inactiveFinal : OneSnippet._decor.inactive;
                const handle = accessor.addDecoration(range, options);
                this._placeholderDecorations.set(placeholder, handle);
            }
        });
    }
    move(fwd) {
        if (!this._editor.hasModel()) {
            return [];
        }
        this._initDecorations();
        // Transform placeholder text if necessary
        if (this._placeholderGroupsIdx >= 0) {
            const operations = [];
            for (const placeholder of this._placeholderGroups[this._placeholderGroupsIdx]) {
                // Check if the placeholder has a transformation
                if (placeholder.transform) {
                    const id = this._placeholderDecorations.get(placeholder);
                    const range = this._editor.getModel().getDecorationRange(id);
                    const currentValue = this._editor.getModel().getValueInRange(range);
                    const transformedValueLines = placeholder.transform.resolve(currentValue).split(/\r\n|\r|\n/);
                    // fix indentation for transformed lines
                    for (let i = 1; i < transformedValueLines.length; i++) {
                        transformedValueLines[i] = this._editor.getModel().normalizeIndentation(this._snippetLineLeadingWhitespace + transformedValueLines[i]);
                    }
                    operations.push(editOperation/* EditOperation */.h.replace(range, transformedValueLines.join(this._editor.getModel().getEOL())));
                }
            }
            if (operations.length > 0) {
                this._editor.executeEdits('snippet.placeholderTransform', operations);
            }
        }
        let couldSkipThisPlaceholder = false;
        if (fwd === true && this._placeholderGroupsIdx < this._placeholderGroups.length - 1) {
            this._placeholderGroupsIdx += 1;
            couldSkipThisPlaceholder = true;
        }
        else if (fwd === false && this._placeholderGroupsIdx > 0) {
            this._placeholderGroupsIdx -= 1;
            couldSkipThisPlaceholder = true;
        }
        else {
            // the selection of the current placeholder might
            // not acurate any more -> simply restore it
        }
        const newSelections = this._editor.getModel().changeDecorations(accessor => {
            const activePlaceholders = new Set();
            // change stickiness to always grow when typing at its edges
            // because these decorations represent the currently active
            // tabstop.
            // Special case #1: reaching the final tabstop
            // Special case #2: placeholders enclosing active placeholders
            const selections = [];
            for (const placeholder of this._placeholderGroups[this._placeholderGroupsIdx]) {
                const id = this._placeholderDecorations.get(placeholder);
                const range = this._editor.getModel().getDecorationRange(id);
                selections.push(new core_selection/* Selection */.Y(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn));
                // consider to skip this placeholder index when the decoration
                // range is empty but when the placeholder wasn't. that's a strong
                // hint that the placeholder has been deleted. (all placeholder must match this)
                couldSkipThisPlaceholder = couldSkipThisPlaceholder && this._hasPlaceholderBeenCollapsed(placeholder);
                accessor.changeDecorationOptions(id, placeholder.isFinalTabstop ? OneSnippet._decor.activeFinal : OneSnippet._decor.active);
                activePlaceholders.add(placeholder);
                for (const enclosingPlaceholder of this._snippet.enclosingPlaceholders(placeholder)) {
                    const id = this._placeholderDecorations.get(enclosingPlaceholder);
                    accessor.changeDecorationOptions(id, enclosingPlaceholder.isFinalTabstop ? OneSnippet._decor.activeFinal : OneSnippet._decor.active);
                    activePlaceholders.add(enclosingPlaceholder);
                }
            }
            // change stickness to never grow when typing at its edges
            // so that in-active tabstops never grow
            for (const [placeholder, id] of this._placeholderDecorations) {
                if (!activePlaceholders.has(placeholder)) {
                    accessor.changeDecorationOptions(id, placeholder.isFinalTabstop ? OneSnippet._decor.inactiveFinal : OneSnippet._decor.inactive);
                }
            }
            return selections;
        });
        return !couldSkipThisPlaceholder ? newSelections !== null && newSelections !== void 0 ? newSelections : [] : this.move(fwd);
    }
    _hasPlaceholderBeenCollapsed(placeholder) {
        // A placeholder is empty when it wasn't empty when authored but
        // when its tracking decoration is empty. This also applies to all
        // potential parent placeholders
        let marker = placeholder;
        while (marker) {
            if (marker instanceof snippetParser/* Placeholder */.Vm) {
                const id = this._placeholderDecorations.get(marker);
                const range = this._editor.getModel().getDecorationRange(id);
                if (range.isEmpty() && marker.toString().length > 0) {
                    return true;
                }
            }
            marker = marker.parent;
        }
        return false;
    }
    get isAtFirstPlaceholder() {
        return this._placeholderGroupsIdx <= 0 || this._placeholderGroups.length === 0;
    }
    get isAtLastPlaceholder() {
        return this._placeholderGroupsIdx === this._placeholderGroups.length - 1;
    }
    get hasPlaceholder() {
        return this._snippet.placeholders.length > 0;
    }
    /**
     * A snippet is trivial when it has no placeholder or only a final placeholder at
     * its very end
     */
    get isTrivialSnippet() {
        if (this._snippet.placeholders.length === 0) {
            return true;
        }
        if (this._snippet.placeholders.length === 1) {
            const [placeholder] = this._snippet.placeholders;
            if (placeholder.isFinalTabstop) {
                if (this._snippet.rightMostDescendant === placeholder) {
                    return true;
                }
            }
        }
        return false;
    }
    computePossibleSelections() {
        const result = new Map();
        for (const placeholdersWithEqualIndex of this._placeholderGroups) {
            let ranges;
            for (const placeholder of placeholdersWithEqualIndex) {
                if (placeholder.isFinalTabstop) {
                    // ignore those
                    break;
                }
                if (!ranges) {
                    ranges = [];
                    result.set(placeholder.index, ranges);
                }
                const id = this._placeholderDecorations.get(placeholder);
                const range = this._editor.getModel().getDecorationRange(id);
                if (!range) {
                    // one of the placeholder lost its decoration and
                    // therefore we bail out and pretend the placeholder
                    // (with its mirrors) doesn't exist anymore.
                    result.delete(placeholder.index);
                    break;
                }
                ranges.push(range);
            }
        }
        return result;
    }
    get activeChoice() {
        if (!this._placeholderDecorations) {
            return undefined;
        }
        const placeholder = this._placeholderGroups[this._placeholderGroupsIdx][0];
        if (!(placeholder === null || placeholder === void 0 ? void 0 : placeholder.choice)) {
            return undefined;
        }
        const id = this._placeholderDecorations.get(placeholder);
        if (!id) {
            return undefined;
        }
        const range = this._editor.getModel().getDecorationRange(id);
        if (!range) {
            return undefined;
        }
        return { range, choice: placeholder.choice };
    }
    get hasChoice() {
        let result = false;
        this._snippet.walk(marker => {
            result = marker instanceof snippetParser/* Choice */.Lv;
            return !result;
        });
        return result;
    }
    merge(others) {
        const model = this._editor.getModel();
        this._nestingLevel *= 10;
        this._editor.changeDecorations(accessor => {
            // For each active placeholder take one snippet and merge it
            // in that the placeholder (can be many for `$1foo$1foo`). Because
            // everything is sorted by editor selection we can simply remove
            // elements from the beginning of the array
            for (const placeholder of this._placeholderGroups[this._placeholderGroupsIdx]) {
                const nested = others.shift();
                console.assert(nested._offset !== -1);
                console.assert(!nested._placeholderDecorations);
                // Massage placeholder-indicies of the nested snippet to be
                // sorted right after the insertion point. This ensures we move
                // through the placeholders in the correct order
                const indexLastPlaceholder = nested._snippet.placeholderInfo.last.index;
                for (const nestedPlaceholder of nested._snippet.placeholderInfo.all) {
                    if (nestedPlaceholder.isFinalTabstop) {
                        nestedPlaceholder.index = placeholder.index + ((indexLastPlaceholder + 1) / this._nestingLevel);
                    }
                    else {
                        nestedPlaceholder.index = placeholder.index + (nestedPlaceholder.index / this._nestingLevel);
                    }
                }
                this._snippet.replace(placeholder, nested._snippet.children);
                // Remove the placeholder at which position are inserting
                // the snippet and also remove its decoration.
                const id = this._placeholderDecorations.get(placeholder);
                accessor.removeDecoration(id);
                this._placeholderDecorations.delete(placeholder);
                // For each *new* placeholder we create decoration to monitor
                // how and if it grows/shrinks.
                for (const placeholder of nested._snippet.placeholders) {
                    const placeholderOffset = nested._snippet.offset(placeholder);
                    const placeholderLen = nested._snippet.fullLen(placeholder);
                    const range = core_range/* Range */.e.fromPositions(model.getPositionAt(nested._offset + placeholderOffset), model.getPositionAt(nested._offset + placeholderOffset + placeholderLen));
                    const handle = accessor.addDecoration(range, OneSnippet._decor.inactive);
                    this._placeholderDecorations.set(placeholder, handle);
                }
            }
            // Last, re-create the placeholder groups by sorting placeholders by their index.
            this._placeholderGroups = (0,arrays/* groupBy */.vM)(this._snippet.placeholders, snippetParser/* Placeholder */.Vm.compareByIndex);
        });
    }
}
OneSnippet._decor = {
    active: textModel/* ModelDecorationOptions */.qx.register({ description: 'snippet-placeholder-1', stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */, className: 'snippet-placeholder' }),
    inactive: textModel/* ModelDecorationOptions */.qx.register({ description: 'snippet-placeholder-2', stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */, className: 'snippet-placeholder' }),
    activeFinal: textModel/* ModelDecorationOptions */.qx.register({ description: 'snippet-placeholder-3', stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */, className: 'finish-snippet-placeholder' }),
    inactiveFinal: textModel/* ModelDecorationOptions */.qx.register({ description: 'snippet-placeholder-4', stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */, className: 'finish-snippet-placeholder' }),
};
const _defaultOptions = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    adjustWhitespace: true,
    clipboardText: undefined,
    overtypingCapturer: undefined
};
let SnippetSession = class SnippetSession {
    static adjustWhitespace(model, position, adjustIndentation, snippet, filter) {
        const line = model.getLineContent(position.lineNumber);
        const lineLeadingWhitespace = (0,strings/* getLeadingWhitespace */.V8)(line, 0, position.column - 1);
        // the snippet as inserted
        let snippetTextString;
        snippet.walk(marker => {
            // all text elements that are not inside choice
            if (!(marker instanceof snippetParser/* Text */.xv) || marker.parent instanceof snippetParser/* Choice */.Lv) {
                return true;
            }
            // check with filter (iff provided)
            if (filter && !filter.has(marker)) {
                return true;
            }
            const lines = marker.value.split(/\r\n|\r|\n/);
            if (adjustIndentation) {
                // adjust indentation of snippet test
                // -the snippet-start doesn't get extra-indented (lineLeadingWhitespace), only normalized
                // -all N+1 lines get extra-indented and normalized
                // -the text start get extra-indented and normalized when following a linebreak
                const offset = snippet.offset(marker);
                if (offset === 0) {
                    // snippet start
                    lines[0] = model.normalizeIndentation(lines[0]);
                }
                else {
                    // check if text start is after a linebreak
                    snippetTextString = snippetTextString !== null && snippetTextString !== void 0 ? snippetTextString : snippet.toString();
                    const prevChar = snippetTextString.charCodeAt(offset - 1);
                    if (prevChar === 10 /* CharCode.LineFeed */ || prevChar === 13 /* CharCode.CarriageReturn */) {
                        lines[0] = model.normalizeIndentation(lineLeadingWhitespace + lines[0]);
                    }
                }
                for (let i = 1; i < lines.length; i++) {
                    lines[i] = model.normalizeIndentation(lineLeadingWhitespace + lines[i]);
                }
            }
            const newValue = lines.join(model.getEOL());
            if (newValue !== marker.value) {
                marker.parent.replace(marker, [new snippetParser/* Text */.xv(newValue)]);
                snippetTextString = undefined;
            }
            return true;
        });
        return lineLeadingWhitespace;
    }
    static adjustSelection(model, selection, overwriteBefore, overwriteAfter) {
        if (overwriteBefore !== 0 || overwriteAfter !== 0) {
            // overwrite[Before|After] is compute using the position, not the whole
            // selection. therefore we adjust the selection around that position
            const { positionLineNumber, positionColumn } = selection;
            const positionColumnBefore = positionColumn - overwriteBefore;
            const positionColumnAfter = positionColumn + overwriteAfter;
            const range = model.validateRange({
                startLineNumber: positionLineNumber,
                startColumn: positionColumnBefore,
                endLineNumber: positionLineNumber,
                endColumn: positionColumnAfter
            });
            selection = core_selection/* Selection */.Y.createWithDirection(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn, selection.getDirection());
        }
        return selection;
    }
    static createEditsAndSnippetsFromSelections(editor, template, overwriteBefore, overwriteAfter, enforceFinalTabstop, adjustWhitespace, clipboardText, overtypingCapturer, languageConfigurationService) {
        const edits = [];
        const snippets = [];
        if (!editor.hasModel()) {
            return { edits, snippets };
        }
        const model = editor.getModel();
        const workspaceService = editor.invokeWithinContext(accessor => accessor.get(workspace/* IWorkspaceContextService */.ec));
        const modelBasedVariableResolver = editor.invokeWithinContext(accessor => new ModelBasedVariableResolver(accessor.get(label/* ILabelService */.e), model));
        const readClipboardText = () => clipboardText;
        // know what text the overwrite[Before|After] extensions
        // of the primary curser have selected because only when
        // secondary selections extend to the same text we can grow them
        const firstBeforeText = model.getValueInRange(SnippetSession.adjustSelection(model, editor.getSelection(), overwriteBefore, 0));
        const firstAfterText = model.getValueInRange(SnippetSession.adjustSelection(model, editor.getSelection(), 0, overwriteAfter));
        // remember the first non-whitespace column to decide if
        // `keepWhitespace` should be overruled for secondary selections
        const firstLineFirstNonWhitespace = model.getLineFirstNonWhitespaceColumn(editor.getSelection().positionLineNumber);
        // sort selections by their start position but remeber
        // the original index. that allows you to create correct
        // offset-based selection logic without changing the
        // primary selection
        const indexedSelections = editor.getSelections()
            .map((selection, idx) => ({ selection, idx }))
            .sort((a, b) => core_range/* Range */.e.compareRangesUsingStarts(a.selection, b.selection));
        for (const { selection, idx } of indexedSelections) {
            // extend selection with the `overwriteBefore` and `overwriteAfter` and then
            // compare if this matches the extensions of the primary selection
            let extensionBefore = SnippetSession.adjustSelection(model, selection, overwriteBefore, 0);
            let extensionAfter = SnippetSession.adjustSelection(model, selection, 0, overwriteAfter);
            if (firstBeforeText !== model.getValueInRange(extensionBefore)) {
                extensionBefore = selection;
            }
            if (firstAfterText !== model.getValueInRange(extensionAfter)) {
                extensionAfter = selection;
            }
            // merge the before and after selection into one
            const snippetSelection = selection
                .setStartPosition(extensionBefore.startLineNumber, extensionBefore.startColumn)
                .setEndPosition(extensionAfter.endLineNumber, extensionAfter.endColumn);
            const snippet = new snippetParser/* SnippetParser */.Yj().parse(template, true, enforceFinalTabstop);
            // adjust the template string to match the indentation and
            // whitespace rules of this insert location (can be different for each cursor)
            // happens when being asked for (default) or when this is a secondary
            // cursor and the leading whitespace is different
            const start = snippetSelection.getStartPosition();
            const snippetLineLeadingWhitespace = SnippetSession.adjustWhitespace(model, start, adjustWhitespace || (idx > 0 && firstLineFirstNonWhitespace !== model.getLineFirstNonWhitespaceColumn(selection.positionLineNumber)), snippet);
            snippet.resolveVariables(new CompositeSnippetVariableResolver([
                modelBasedVariableResolver,
                new ClipboardBasedVariableResolver(readClipboardText, idx, indexedSelections.length, editor.getOption(77 /* EditorOption.multiCursorPaste */) === 'spread'),
                new SelectionBasedVariableResolver(model, selection, idx, overtypingCapturer),
                new CommentBasedVariableResolver(model, selection, languageConfigurationService),
                new TimeBasedVariableResolver,
                new WorkspaceBasedVariableResolver(workspaceService),
                new RandomBasedVariableResolver,
            ]));
            // store snippets with the index of their originating selection.
            // that ensures the primiary cursor stays primary despite not being
            // the one with lowest start position
            edits[idx] = editOperation/* EditOperation */.h.replace(snippetSelection, snippet.toString());
            edits[idx].identifier = { major: idx, minor: 0 }; // mark the edit so only our undo edits will be used to generate end cursors
            edits[idx]._isTracked = true;
            snippets[idx] = new OneSnippet(editor, snippet, snippetLineLeadingWhitespace);
        }
        return { edits, snippets };
    }
    static createEditsAndSnippetsFromEdits(editor, snippetEdits, enforceFinalTabstop, adjustWhitespace, clipboardText, overtypingCapturer, languageConfigurationService) {
        if (!editor.hasModel() || snippetEdits.length === 0) {
            return { edits: [], snippets: [] };
        }
        const edits = [];
        const model = editor.getModel();
        const parser = new snippetParser/* SnippetParser */.Yj();
        const snippet = new snippetParser/* TextmateSnippet */.y1();
        // snippet variables resolver
        const resolver = new CompositeSnippetVariableResolver([
            editor.invokeWithinContext(accessor => new ModelBasedVariableResolver(accessor.get(label/* ILabelService */.e), model)),
            new ClipboardBasedVariableResolver(() => clipboardText, 0, editor.getSelections().length, editor.getOption(77 /* EditorOption.multiCursorPaste */) === 'spread'),
            new SelectionBasedVariableResolver(model, editor.getSelection(), 0, overtypingCapturer),
            new CommentBasedVariableResolver(model, editor.getSelection(), languageConfigurationService),
            new TimeBasedVariableResolver,
            new WorkspaceBasedVariableResolver(editor.invokeWithinContext(accessor => accessor.get(workspace/* IWorkspaceContextService */.ec))),
            new RandomBasedVariableResolver,
        ]);
        //
        snippetEdits = snippetEdits.sort((a, b) => core_range/* Range */.e.compareRangesUsingStarts(a.range, b.range));
        let offset = 0;
        for (let i = 0; i < snippetEdits.length; i++) {
            const { range, template } = snippetEdits[i];
            // gaps between snippet edits are appended as text nodes. this
            // ensures placeholder-offsets are later correct
            if (i > 0) {
                const lastRange = snippetEdits[i - 1].range;
                const textRange = core_range/* Range */.e.fromPositions(lastRange.getEndPosition(), range.getStartPosition());
                const textNode = new snippetParser/* Text */.xv(model.getValueInRange(textRange));
                snippet.appendChild(textNode);
                offset += textNode.value.length;
            }
            const newNodes = parser.parseFragment(template, snippet);
            SnippetSession.adjustWhitespace(model, range.getStartPosition(), true, snippet, new Set(newNodes));
            snippet.resolveVariables(resolver);
            const snippetText = snippet.toString();
            const snippetFragmentText = snippetText.slice(offset);
            offset = snippetText.length;
            // make edit
            const edit = editOperation/* EditOperation */.h.replace(range, snippetFragmentText);
            edit.identifier = { major: i, minor: 0 }; // mark the edit so only our undo edits will be used to generate end cursors
            edit._isTracked = true;
            edits.push(edit);
        }
        //
        parser.ensureFinalTabstop(snippet, enforceFinalTabstop, true);
        return {
            edits,
            snippets: [new OneSnippet(editor, snippet, '')]
        };
    }
    constructor(_editor, _template, _options = _defaultOptions, _languageConfigurationService) {
        this._editor = _editor;
        this._template = _template;
        this._options = _options;
        this._languageConfigurationService = _languageConfigurationService;
        this._templateMerges = [];
        this._snippets = [];
    }
    dispose() {
        (0,lifecycle/* dispose */.B9)(this._snippets);
    }
    _logInfo() {
        return `template="${this._template}", merged_templates="${this._templateMerges.join(' -> ')}"`;
    }
    insert() {
        if (!this._editor.hasModel()) {
            return;
        }
        // make insert edit and start with first selections
        const { edits, snippets } = typeof this._template === 'string'
            ? SnippetSession.createEditsAndSnippetsFromSelections(this._editor, this._template, this._options.overwriteBefore, this._options.overwriteAfter, false, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService)
            : SnippetSession.createEditsAndSnippetsFromEdits(this._editor, this._template, false, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer, this._languageConfigurationService);
        this._snippets = snippets;
        this._editor.executeEdits('snippet', edits, _undoEdits => {
            // Sometimes, the text buffer will remove automatic whitespace when doing any edits,
            // so we need to look only at the undo edits relevant for us.
            // Our edits have an identifier set so that's how we can distinguish them
            const undoEdits = _undoEdits.filter(edit => !!edit.identifier);
            for (let idx = 0; idx < snippets.length; idx++) {
                snippets[idx].initialize(undoEdits[idx].textChange);
            }
            if (this._snippets[0].hasPlaceholder) {
                return this._move(true);
            }
            else {
                return undoEdits
                    .map(edit => core_selection/* Selection */.Y.fromPositions(edit.range.getEndPosition()));
            }
        });
        this._editor.revealRange(this._editor.getSelections()[0]);
    }
    merge(template, options = _defaultOptions) {
        if (!this._editor.hasModel()) {
            return;
        }
        this._templateMerges.push([this._snippets[0]._nestingLevel, this._snippets[0]._placeholderGroupsIdx, template]);
        const { edits, snippets } = SnippetSession.createEditsAndSnippetsFromSelections(this._editor, template, options.overwriteBefore, options.overwriteAfter, true, options.adjustWhitespace, options.clipboardText, options.overtypingCapturer, this._languageConfigurationService);
        this._editor.executeEdits('snippet', edits, _undoEdits => {
            // Sometimes, the text buffer will remove automatic whitespace when doing any edits,
            // so we need to look only at the undo edits relevant for us.
            // Our edits have an identifier set so that's how we can distinguish them
            const undoEdits = _undoEdits.filter(edit => !!edit.identifier);
            for (let idx = 0; idx < snippets.length; idx++) {
                snippets[idx].initialize(undoEdits[idx].textChange);
            }
            // Trivial snippets have no placeholder or are just the final placeholder. That means they
            // are just text insertions and we don't need to merge the nested snippet into the existing
            // snippet
            const isTrivialSnippet = snippets[0].isTrivialSnippet;
            if (!isTrivialSnippet) {
                for (const snippet of this._snippets) {
                    snippet.merge(snippets);
                }
                console.assert(snippets.length === 0);
            }
            if (this._snippets[0].hasPlaceholder && !isTrivialSnippet) {
                return this._move(undefined);
            }
            else {
                return undoEdits.map(edit => core_selection/* Selection */.Y.fromPositions(edit.range.getEndPosition()));
            }
        });
    }
    next() {
        const newSelections = this._move(true);
        this._editor.setSelections(newSelections);
        this._editor.revealPositionInCenterIfOutsideViewport(newSelections[0].getPosition());
    }
    prev() {
        const newSelections = this._move(false);
        this._editor.setSelections(newSelections);
        this._editor.revealPositionInCenterIfOutsideViewport(newSelections[0].getPosition());
    }
    _move(fwd) {
        const selections = [];
        for (const snippet of this._snippets) {
            const oneSelection = snippet.move(fwd);
            selections.push(...oneSelection);
        }
        return selections;
    }
    get isAtFirstPlaceholder() {
        return this._snippets[0].isAtFirstPlaceholder;
    }
    get isAtLastPlaceholder() {
        return this._snippets[0].isAtLastPlaceholder;
    }
    get hasPlaceholder() {
        return this._snippets[0].hasPlaceholder;
    }
    get hasChoice() {
        return this._snippets[0].hasChoice;
    }
    get activeChoice() {
        return this._snippets[0].activeChoice;
    }
    isSelectionWithinPlaceholders() {
        if (!this.hasPlaceholder) {
            return false;
        }
        const selections = this._editor.getSelections();
        if (selections.length < this._snippets.length) {
            // this means we started snippet mode with N
            // selections and have M (N > M) selections.
            // So one snippet is without selection -> cancel
            return false;
        }
        const allPossibleSelections = new Map();
        for (const snippet of this._snippets) {
            const possibleSelections = snippet.computePossibleSelections();
            // for the first snippet find the placeholder (and its ranges)
            // that contain at least one selection. for all remaining snippets
            // the same placeholder (and their ranges) must be used.
            if (allPossibleSelections.size === 0) {
                for (const [index, ranges] of possibleSelections) {
                    ranges.sort(core_range/* Range */.e.compareRangesUsingStarts);
                    for (const selection of selections) {
                        if (ranges[0].containsRange(selection)) {
                            allPossibleSelections.set(index, []);
                            break;
                        }
                    }
                }
            }
            if (allPossibleSelections.size === 0) {
                // return false if we couldn't associate a selection to
                // this (the first) snippet
                return false;
            }
            // add selections from 'this' snippet so that we know all
            // selections for this placeholder
            allPossibleSelections.forEach((array, index) => {
                array.push(...possibleSelections.get(index));
            });
        }
        // sort selections (and later placeholder-ranges). then walk both
        // arrays and make sure the placeholder-ranges contain the corresponding
        // selection
        selections.sort(core_range/* Range */.e.compareRangesUsingStarts);
        for (const [index, ranges] of allPossibleSelections) {
            if (ranges.length !== selections.length) {
                allPossibleSelections.delete(index);
                continue;
            }
            ranges.sort(core_range/* Range */.e.compareRangesUsingStarts);
            for (let i = 0; i < ranges.length; i++) {
                if (!ranges[i].containsRange(selections[i])) {
                    allPossibleSelections.delete(index);
                    continue;
                }
            }
        }
        // from all possible selections we have deleted those
        // that don't match with the current selection. if we don't
        // have any left, we don't have a selection anymore
        return allPossibleSelections.size > 0;
    }
};
SnippetSession = snippetSession_decorate([
    snippetSession_param(3, languageConfigurationRegistry/* ILanguageConfigurationService */.c_)
], SnippetSession);



/***/ })

}]);