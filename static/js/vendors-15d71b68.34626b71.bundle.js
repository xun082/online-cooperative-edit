"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-15d71b68"],{

/***/ 17915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ TokenMetadata; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 */
class TokenMetadata {
    static getLanguageId(metadata) {
        return (metadata & 255 /* MetadataConsts.LANGUAGEID_MASK */) >>> 0 /* MetadataConsts.LANGUAGEID_OFFSET */;
    }
    static getTokenType(metadata) {
        return (metadata & 768 /* MetadataConsts.TOKEN_TYPE_MASK */) >>> 8 /* MetadataConsts.TOKEN_TYPE_OFFSET */;
    }
    static containsBalancedBrackets(metadata) {
        return (metadata & 1024 /* MetadataConsts.BALANCED_BRACKETS_MASK */) !== 0;
    }
    static getFontStyle(metadata) {
        return (metadata & 30720 /* MetadataConsts.FONT_STYLE_MASK */) >>> 11 /* MetadataConsts.FONT_STYLE_OFFSET */;
    }
    static getForeground(metadata) {
        return (metadata & 16744448 /* MetadataConsts.FOREGROUND_MASK */) >>> 15 /* MetadataConsts.FOREGROUND_OFFSET */;
    }
    static getBackground(metadata) {
        return (metadata & 4278190080 /* MetadataConsts.BACKGROUND_MASK */) >>> 24 /* MetadataConsts.BACKGROUND_OFFSET */;
    }
    static getClassNameFromMetadata(metadata) {
        const foreground = this.getForeground(metadata);
        let className = 'mtk' + foreground;
        const fontStyle = this.getFontStyle(metadata);
        if (fontStyle & 1 /* FontStyle.Italic */) {
            className += ' mtki';
        }
        if (fontStyle & 2 /* FontStyle.Bold */) {
            className += ' mtkb';
        }
        if (fontStyle & 4 /* FontStyle.Underline */) {
            className += ' mtku';
        }
        if (fontStyle & 8 /* FontStyle.Strikethrough */) {
            className += ' mtks';
        }
        return className;
    }
    static getInlineStyleFromMetadata(metadata, colorMap) {
        const foreground = this.getForeground(metadata);
        const fontStyle = this.getFontStyle(metadata);
        let result = `color: ${colorMap[foreground]};`;
        if (fontStyle & 1 /* FontStyle.Italic */) {
            result += 'font-style: italic;';
        }
        if (fontStyle & 2 /* FontStyle.Bold */) {
            result += 'font-weight: bold;';
        }
        let textDecoration = '';
        if (fontStyle & 4 /* FontStyle.Underline */) {
            textDecoration += ' underline';
        }
        if (fontStyle & 8 /* FontStyle.Strikethrough */) {
            textDecoration += ' line-through';
        }
        if (textDecoration) {
            result += `text-decoration:${textDecoration};`;
        }
        return result;
    }
    static getPresentationFromMetadata(metadata) {
        const foreground = this.getForeground(metadata);
        const fontStyle = this.getFontStyle(metadata);
        return {
            foreground: foreground,
            italic: Boolean(fontStyle & 1 /* FontStyle.Italic */),
            bold: Boolean(fontStyle & 2 /* FontStyle.Bold */),
            underline: Boolean(fontStyle & 4 /* FontStyle.Underline */),
            strikethrough: Boolean(fontStyle & 8 /* FontStyle.Strikethrough */),
        };
    }
}


/***/ }),

/***/ 94330:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: function() { return /* binding */ LanguageFeatureRegistry; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var common_model = __webpack_require__(11754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/glob.js
var glob = __webpack_require__(97869);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/path.js + 1 modules
var path = __webpack_require__(5944);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languageSelector.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function score(selector, candidateUri, candidateLanguage, candidateIsSynchronized, candidateNotebookUri, candidateNotebookType) {
    if (Array.isArray(selector)) {
        // array -> take max individual value
        let ret = 0;
        for (const filter of selector) {
            const value = score(filter, candidateUri, candidateLanguage, candidateIsSynchronized, candidateNotebookUri, candidateNotebookType);
            if (value === 10) {
                return value; // already at the highest
            }
            if (value > ret) {
                ret = value;
            }
        }
        return ret;
    }
    else if (typeof selector === 'string') {
        if (!candidateIsSynchronized) {
            return 0;
        }
        // short-hand notion, desugars to
        // 'fooLang' -> { language: 'fooLang'}
        // '*' -> { language: '*' }
        if (selector === '*') {
            return 5;
        }
        else if (selector === candidateLanguage) {
            return 10;
        }
        else {
            return 0;
        }
    }
    else if (selector) {
        // filter -> select accordingly, use defaults for scheme
        const { language, pattern, scheme, hasAccessToAllModels, notebookType } = selector; // TODO: microsoft/TypeScript#42768
        if (!candidateIsSynchronized && !hasAccessToAllModels) {
            return 0;
        }
        // selector targets a notebook -> use the notebook uri instead
        // of the "normal" document uri.
        if (notebookType && candidateNotebookUri) {
            candidateUri = candidateNotebookUri;
        }
        let ret = 0;
        if (scheme) {
            if (scheme === candidateUri.scheme) {
                ret = 10;
            }
            else if (scheme === '*') {
                ret = 5;
            }
            else {
                return 0;
            }
        }
        if (language) {
            if (language === candidateLanguage) {
                ret = 10;
            }
            else if (language === '*') {
                ret = Math.max(ret, 5);
            }
            else {
                return 0;
            }
        }
        if (notebookType) {
            if (notebookType === candidateNotebookType) {
                ret = 10;
            }
            else if (notebookType === '*' && candidateNotebookType !== undefined) {
                ret = Math.max(ret, 5);
            }
            else {
                return 0;
            }
        }
        if (pattern) {
            let normalizedPattern;
            if (typeof pattern === 'string') {
                normalizedPattern = pattern;
            }
            else {
                // Since this pattern has a `base` property, we need
                // to normalize this path first before passing it on
                // because we will compare it against `Uri.fsPath`
                // which uses platform specific separators.
                // Refs: https://github.com/microsoft/vscode/issues/99938
                normalizedPattern = Object.assign(Object.assign({}, pattern), { base: (0,path/* normalize */.Fv)(pattern.base) });
            }
            if (normalizedPattern === candidateUri.fsPath || (0,glob/* match */.EQ)(normalizedPattern, candidateUri.fsPath)) {
                ret = 10;
            }
            else {
                return 0;
            }
        }
        return ret;
    }
    else {
        return 0;
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languageFeatureRegistry.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function isExclusive(selector) {
    if (typeof selector === 'string') {
        return false;
    }
    else if (Array.isArray(selector)) {
        return selector.every(isExclusive);
    }
    else {
        return !!selector.exclusive; // TODO: microsoft/TypeScript#42768
    }
}
class MatchCandidate {
    constructor(uri, languageId, notebookUri, notebookType) {
        this.uri = uri;
        this.languageId = languageId;
        this.notebookUri = notebookUri;
        this.notebookType = notebookType;
    }
    equals(other) {
        var _a, _b;
        return this.notebookType === other.notebookType
            && this.languageId === other.languageId
            && this.uri.toString() === other.uri.toString()
            && ((_a = this.notebookUri) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = other.notebookUri) === null || _b === void 0 ? void 0 : _b.toString());
    }
}
class LanguageFeatureRegistry {
    constructor(_notebookInfoResolver) {
        this._notebookInfoResolver = _notebookInfoResolver;
        this._clock = 0;
        this._entries = [];
        this._onDidChange = new common_event/* Emitter */.Q5();
        this.onDidChange = this._onDidChange.event;
    }
    register(selector, provider) {
        let entry = {
            selector,
            provider,
            _score: -1,
            _time: this._clock++
        };
        this._entries.push(entry);
        this._lastCandidate = undefined;
        this._onDidChange.fire(this._entries.length);
        return (0,lifecycle/* toDisposable */.OF)(() => {
            if (entry) {
                const idx = this._entries.indexOf(entry);
                if (idx >= 0) {
                    this._entries.splice(idx, 1);
                    this._lastCandidate = undefined;
                    this._onDidChange.fire(this._entries.length);
                    entry = undefined;
                }
            }
        });
    }
    has(model) {
        return this.all(model).length > 0;
    }
    all(model) {
        if (!model) {
            return [];
        }
        this._updateScores(model);
        const result = [];
        // from registry
        for (const entry of this._entries) {
            if (entry._score > 0) {
                result.push(entry.provider);
            }
        }
        return result;
    }
    ordered(model) {
        const result = [];
        this._orderedForEach(model, entry => result.push(entry.provider));
        return result;
    }
    orderedGroups(model) {
        const result = [];
        let lastBucket;
        let lastBucketScore;
        this._orderedForEach(model, entry => {
            if (lastBucket && lastBucketScore === entry._score) {
                lastBucket.push(entry.provider);
            }
            else {
                lastBucketScore = entry._score;
                lastBucket = [entry.provider];
                result.push(lastBucket);
            }
        });
        return result;
    }
    _orderedForEach(model, callback) {
        this._updateScores(model);
        for (const entry of this._entries) {
            if (entry._score > 0) {
                callback(entry);
            }
        }
    }
    _updateScores(model) {
        var _a, _b;
        const notebookInfo = (_a = this._notebookInfoResolver) === null || _a === void 0 ? void 0 : _a.call(this, model.uri);
        // use the uri (scheme, pattern) of the notebook info iff we have one
        // otherwise it's the model's/document's uri
        const candidate = notebookInfo
            ? new MatchCandidate(model.uri, model.getLanguageId(), notebookInfo.uri, notebookInfo.type)
            : new MatchCandidate(model.uri, model.getLanguageId(), undefined, undefined);
        if ((_b = this._lastCandidate) === null || _b === void 0 ? void 0 : _b.equals(candidate)) {
            // nothing has changed
            return;
        }
        this._lastCandidate = candidate;
        for (const entry of this._entries) {
            entry._score = score(entry.selector, candidate.uri, candidate.languageId, (0,common_model/* shouldSynchronizeModel */.pt)(model), candidate.notebookUri, candidate.notebookType);
            if (isExclusive(entry.selector) && entry._score > 0) {
                // support for one exclusive selector that overwrites
                // any other selector
                for (const entry of this._entries) {
                    entry._score = 0;
                }
                entry._score = 1000;
                break;
            }
        }
        // needs sorting
        this._entries.sort(LanguageFeatureRegistry._compareByScoreAndTime);
    }
    static _compareByScoreAndTime(a, b) {
        if (a._score < b._score) {
            return 1;
        }
        else if (a._score > b._score) {
            return -1;
        }
        // De-prioritize built-in providers
        if (isBuiltinSelector(a.selector) && !isBuiltinSelector(b.selector)) {
            return 1;
        }
        else if (!isBuiltinSelector(a.selector) && isBuiltinSelector(b.selector)) {
            return -1;
        }
        if (a._time < b._time) {
            return 1;
        }
        else if (a._time > b._time) {
            return -1;
        }
        else {
            return 0;
        }
    }
}
function isBuiltinSelector(selector) {
    if (typeof selector === 'string') {
        return false;
    }
    if (Array.isArray(selector)) {
        return selector.some(isBuiltinSelector);
    }
    return Boolean(selector.isBuiltin);
}


/***/ }),

/***/ 58606:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AD: function() { return /* binding */ FoldingRangeKind; },
/* harmony export */   DI: function() { return /* binding */ EncodedTokenizationResult; },
/* harmony export */   MO: function() { return /* binding */ LazyTokenizationSupport; },
/* harmony export */   MY: function() { return /* binding */ DocumentHighlightKind; },
/* harmony export */   RW: function() { return /* binding */ TokenizationRegistry; },
/* harmony export */   WU: function() { return /* binding */ Token; },
/* harmony export */   WW: function() { return /* binding */ SignatureHelpTriggerKind; },
/* harmony export */   bw: function() { return /* binding */ InlineCompletionTriggerKind; },
/* harmony export */   gX: function() { return /* binding */ CompletionItemKinds; },
/* harmony export */   gl: function() { return /* binding */ InlayHintKind; },
/* harmony export */   hG: function() { return /* binding */ TokenizationResult; },
/* harmony export */   ln: function() { return /* binding */ SelectedSuggestionInfo; },
/* harmony export */   mY: function() { return /* binding */ Command; },
/* harmony export */   uZ: function() { return /* binding */ SymbolKinds; },
/* harmony export */   vx: function() { return /* binding */ isLocationLink; }
/* harmony export */ });
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14162);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56946);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76584);
/* harmony import */ var _tokenizationRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10694);




class Token {
    constructor(offset, type, language) {
        this.offset = offset;
        this.type = type;
        this.language = language;
        this._tokenBrand = undefined;
    }
    toString() {
        return '(' + this.offset + ', ' + this.type + ')';
    }
}
/**
 * @internal
 */
class TokenizationResult {
    constructor(tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._tokenizationResultBrand = undefined;
    }
}
/**
 * @internal
 */
class EncodedTokenizationResult {
    constructor(
    /**
     * The tokens in binary format. Each token occupies two array indices. For token i:
     *  - at offset 2*i => startIndex
     *  - at offset 2*i + 1 => metadata
     *
     */
    tokens, endState) {
        this.tokens = tokens;
        this.endState = endState;
        this._encodedTokenizationResultBrand = undefined;
    }
}
/**
 * @internal
 */
var CompletionItemKinds;
(function (CompletionItemKinds) {
    const byKind = new Map();
    byKind.set(0 /* CompletionItemKind.Method */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolMethod);
    byKind.set(1 /* CompletionItemKind.Function */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolFunction);
    byKind.set(2 /* CompletionItemKind.Constructor */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolConstructor);
    byKind.set(3 /* CompletionItemKind.Field */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolField);
    byKind.set(4 /* CompletionItemKind.Variable */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolVariable);
    byKind.set(5 /* CompletionItemKind.Class */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolClass);
    byKind.set(6 /* CompletionItemKind.Struct */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolStruct);
    byKind.set(7 /* CompletionItemKind.Interface */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolInterface);
    byKind.set(8 /* CompletionItemKind.Module */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolModule);
    byKind.set(9 /* CompletionItemKind.Property */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolProperty);
    byKind.set(10 /* CompletionItemKind.Event */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEvent);
    byKind.set(11 /* CompletionItemKind.Operator */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolOperator);
    byKind.set(12 /* CompletionItemKind.Unit */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolUnit);
    byKind.set(13 /* CompletionItemKind.Value */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolValue);
    byKind.set(15 /* CompletionItemKind.Enum */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEnum);
    byKind.set(14 /* CompletionItemKind.Constant */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolConstant);
    byKind.set(15 /* CompletionItemKind.Enum */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEnum);
    byKind.set(16 /* CompletionItemKind.EnumMember */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEnumMember);
    byKind.set(17 /* CompletionItemKind.Keyword */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolKeyword);
    byKind.set(27 /* CompletionItemKind.Snippet */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolSnippet);
    byKind.set(18 /* CompletionItemKind.Text */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolText);
    byKind.set(19 /* CompletionItemKind.Color */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolColor);
    byKind.set(20 /* CompletionItemKind.File */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolFile);
    byKind.set(21 /* CompletionItemKind.Reference */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolReference);
    byKind.set(22 /* CompletionItemKind.Customcolor */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolCustomColor);
    byKind.set(23 /* CompletionItemKind.Folder */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolFolder);
    byKind.set(24 /* CompletionItemKind.TypeParameter */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolTypeParameter);
    byKind.set(25 /* CompletionItemKind.User */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.account);
    byKind.set(26 /* CompletionItemKind.Issue */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.issues);
    /**
     * @internal
     */
    function toIcon(kind) {
        let codicon = byKind.get(kind);
        if (!codicon) {
            console.info('No codicon found for CompletionItemKind ' + kind);
            codicon = _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolProperty;
        }
        return codicon;
    }
    CompletionItemKinds.toIcon = toIcon;
    const data = new Map();
    data.set('method', 0 /* CompletionItemKind.Method */);
    data.set('function', 1 /* CompletionItemKind.Function */);
    data.set('constructor', 2 /* CompletionItemKind.Constructor */);
    data.set('field', 3 /* CompletionItemKind.Field */);
    data.set('variable', 4 /* CompletionItemKind.Variable */);
    data.set('class', 5 /* CompletionItemKind.Class */);
    data.set('struct', 6 /* CompletionItemKind.Struct */);
    data.set('interface', 7 /* CompletionItemKind.Interface */);
    data.set('module', 8 /* CompletionItemKind.Module */);
    data.set('property', 9 /* CompletionItemKind.Property */);
    data.set('event', 10 /* CompletionItemKind.Event */);
    data.set('operator', 11 /* CompletionItemKind.Operator */);
    data.set('unit', 12 /* CompletionItemKind.Unit */);
    data.set('value', 13 /* CompletionItemKind.Value */);
    data.set('constant', 14 /* CompletionItemKind.Constant */);
    data.set('enum', 15 /* CompletionItemKind.Enum */);
    data.set('enum-member', 16 /* CompletionItemKind.EnumMember */);
    data.set('enumMember', 16 /* CompletionItemKind.EnumMember */);
    data.set('keyword', 17 /* CompletionItemKind.Keyword */);
    data.set('snippet', 27 /* CompletionItemKind.Snippet */);
    data.set('text', 18 /* CompletionItemKind.Text */);
    data.set('color', 19 /* CompletionItemKind.Color */);
    data.set('file', 20 /* CompletionItemKind.File */);
    data.set('reference', 21 /* CompletionItemKind.Reference */);
    data.set('customcolor', 22 /* CompletionItemKind.Customcolor */);
    data.set('folder', 23 /* CompletionItemKind.Folder */);
    data.set('type-parameter', 24 /* CompletionItemKind.TypeParameter */);
    data.set('typeParameter', 24 /* CompletionItemKind.TypeParameter */);
    data.set('account', 25 /* CompletionItemKind.User */);
    data.set('issue', 26 /* CompletionItemKind.Issue */);
    /**
     * @internal
     */
    function fromString(value, strict) {
        let res = data.get(value);
        if (typeof res === 'undefined' && !strict) {
            res = 9 /* CompletionItemKind.Property */;
        }
        return res;
    }
    CompletionItemKinds.fromString = fromString;
})(CompletionItemKinds || (CompletionItemKinds = {}));
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
class SelectedSuggestionInfo {
    constructor(range, text, completionKind, isSnippetText) {
        this.range = range;
        this.text = text;
        this.completionKind = completionKind;
        this.isSnippetText = isSnippetText;
    }
    equals(other) {
        return _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e.lift(this.range).equalsRange(other.range)
            && this.text === other.text
            && this.completionKind === other.completionKind
            && this.isSnippetText === other.isSnippetText;
    }
}
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind || (SignatureHelpTriggerKind = {}));
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
 * @internal
 */
function isLocationLink(thing) {
    return thing
        && _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__/* .URI */ .o.isUri(thing.uri)
        && _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e.isIRange(thing.range)
        && (_core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e.isIRange(thing.originSelectionRange) || _core_range_js__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e.isIRange(thing.targetSelectionRange));
}
/**
 * @internal
 */
var SymbolKinds;
(function (SymbolKinds) {
    const byKind = new Map();
    byKind.set(0 /* SymbolKind.File */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolFile);
    byKind.set(1 /* SymbolKind.Module */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolModule);
    byKind.set(2 /* SymbolKind.Namespace */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolNamespace);
    byKind.set(3 /* SymbolKind.Package */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolPackage);
    byKind.set(4 /* SymbolKind.Class */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolClass);
    byKind.set(5 /* SymbolKind.Method */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolMethod);
    byKind.set(6 /* SymbolKind.Property */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolProperty);
    byKind.set(7 /* SymbolKind.Field */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolField);
    byKind.set(8 /* SymbolKind.Constructor */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolConstructor);
    byKind.set(9 /* SymbolKind.Enum */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEnum);
    byKind.set(10 /* SymbolKind.Interface */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolInterface);
    byKind.set(11 /* SymbolKind.Function */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolFunction);
    byKind.set(12 /* SymbolKind.Variable */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolVariable);
    byKind.set(13 /* SymbolKind.Constant */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolConstant);
    byKind.set(14 /* SymbolKind.String */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolString);
    byKind.set(15 /* SymbolKind.Number */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolNumber);
    byKind.set(16 /* SymbolKind.Boolean */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolBoolean);
    byKind.set(17 /* SymbolKind.Array */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolArray);
    byKind.set(18 /* SymbolKind.Object */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolObject);
    byKind.set(19 /* SymbolKind.Key */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolKey);
    byKind.set(20 /* SymbolKind.Null */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolNull);
    byKind.set(21 /* SymbolKind.EnumMember */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEnumMember);
    byKind.set(22 /* SymbolKind.Struct */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolStruct);
    byKind.set(23 /* SymbolKind.Event */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolEvent);
    byKind.set(24 /* SymbolKind.Operator */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolOperator);
    byKind.set(25 /* SymbolKind.TypeParameter */, _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolTypeParameter);
    /**
     * @internal
     */
    function toIcon(kind) {
        let icon = byKind.get(kind);
        if (!icon) {
            console.info('No codicon found for SymbolKind ' + kind);
            icon = _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_0__/* .Codicon */ .l.symbolProperty;
        }
        return icon;
    }
    SymbolKinds.toIcon = toIcon;
})(SymbolKinds || (SymbolKinds = {}));
class FoldingRangeKind {
    /**
     * Returns a {@link FoldingRangeKind} for the given value.
     *
     * @param value of the kind.
     */
    static fromValue(value) {
        switch (value) {
            case 'comment': return FoldingRangeKind.Comment;
            case 'imports': return FoldingRangeKind.Imports;
            case 'region': return FoldingRangeKind.Region;
        }
        return new FoldingRangeKind(value);
    }
    /**
     * Creates a new {@link FoldingRangeKind}.
     *
     * @param value of the kind.
     */
    constructor(value) {
        this.value = value;
    }
}
/**
 * Kind for folding range representing a comment. The value of the kind is 'comment'.
 */
FoldingRangeKind.Comment = new FoldingRangeKind('comment');
/**
 * Kind for folding range representing a import. The value of the kind is 'imports'.
 */
FoldingRangeKind.Imports = new FoldingRangeKind('imports');
/**
 * Kind for folding range representing regions (for example marked by `#region`, `#endregion`).
 * The value of the kind is 'region'.
 */
FoldingRangeKind.Region = new FoldingRangeKind('region');
/**
 * @internal
 */
var Command;
(function (Command) {
    /**
     * @internal
     */
    function is(obj) {
        if (!obj || typeof obj !== 'object') {
            return false;
        }
        return typeof obj.id === 'string' &&
            typeof obj.title === 'string';
    }
    Command.is = is;
})(Command || (Command = {}));
var InlayHintKind;
(function (InlayHintKind) {
    InlayHintKind[InlayHintKind["Type"] = 1] = "Type";
    InlayHintKind[InlayHintKind["Parameter"] = 2] = "Parameter";
})(InlayHintKind || (InlayHintKind = {}));
/**
 * @internal
 */
class LazyTokenizationSupport {
    constructor(createSupport) {
        this.createSupport = createSupport;
        this._tokenizationSupport = null;
    }
    dispose() {
        if (this._tokenizationSupport) {
            this._tokenizationSupport.then((support) => {
                if (support) {
                    support.dispose();
                }
            });
        }
    }
    get tokenizationSupport() {
        if (!this._tokenizationSupport) {
            this._tokenizationSupport = this.createSupport();
        }
        return this._tokenizationSupport;
    }
}
/**
 * @internal
 */
const TokenizationRegistry = new _tokenizationRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .TokenizationRegistry */ .R();


/***/ }),

/***/ 55542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $9: function() { return /* binding */ getIndentActionForType; },
/* harmony export */   UF: function() { return /* binding */ getIndentForEnter; },
/* harmony export */   n8: function() { return /* binding */ getGoodIndentForLine; },
/* harmony export */   r7: function() { return /* binding */ getInheritIndentForLine; },
/* harmony export */   tI: function() { return /* binding */ getIndentMetadata; }
/* harmony export */ });
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79287);
/* harmony import */ var _supports_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46429);
/* harmony import */ var _languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11296);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




/**
 * Get nearest preceding line which doesn't match unIndentPattern or contains all whitespace.
 * Result:
 * -1: run into the boundary of embedded languages
 * 0: every line above are invalid
 * else: nearest preceding line of the same language
 */
function getPrecedingValidLine(model, lineNumber, indentRulesSupport) {
    const languageId = model.tokenization.getLanguageIdAtPosition(lineNumber, 0);
    if (lineNumber > 1) {
        let lastLineNumber;
        let resultLineNumber = -1;
        for (lastLineNumber = lineNumber - 1; lastLineNumber >= 1; lastLineNumber--) {
            if (model.tokenization.getLanguageIdAtPosition(lastLineNumber, 0) !== languageId) {
                return resultLineNumber;
            }
            const text = model.getLineContent(lastLineNumber);
            if (indentRulesSupport.shouldIgnore(text) || /^\s+$/.test(text) || text === '') {
                resultLineNumber = lastLineNumber;
                continue;
            }
            return lastLineNumber;
        }
    }
    return -1;
}
/**
 * Get inherited indentation from above lines.
 * 1. Find the nearest preceding line which doesn't match unIndentedLinePattern.
 * 2. If this line matches indentNextLinePattern or increaseIndentPattern, it means that the indent level of `lineNumber` should be 1 greater than this line.
 * 3. If this line doesn't match any indent rules
 *   a. check whether the line above it matches indentNextLinePattern
 *   b. If not, the indent level of this line is the result
 *   c. If so, it means the indent of this line is *temporary*, go upward utill we find a line whose indent is not temporary (the same workflow a -> b -> c).
 * 4. Otherwise, we fail to get an inherited indent from aboves. Return null and we should not touch the indent of `lineNumber`
 *
 * This function only return the inherited indent based on above lines, it doesn't check whether current line should decrease or not.
 */
function getInheritIndentForLine(autoIndent, model, lineNumber, honorIntentialIndent = true, languageConfigurationService) {
    if (autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
        return null;
    }
    const indentRulesSupport = languageConfigurationService.getLanguageConfiguration(model.tokenization.getLanguageId()).indentRulesSupport;
    if (!indentRulesSupport) {
        return null;
    }
    if (lineNumber <= 1) {
        return {
            indentation: '',
            action: null
        };
    }
    // Use no indent if this is the first non-blank line
    for (let priorLineNumber = lineNumber - 1; priorLineNumber > 0; priorLineNumber--) {
        if (model.getLineContent(priorLineNumber) !== '') {
            break;
        }
        if (priorLineNumber === 1) {
            return {
                indentation: '',
                action: null
            };
        }
    }
    const precedingUnIgnoredLine = getPrecedingValidLine(model, lineNumber, indentRulesSupport);
    if (precedingUnIgnoredLine < 0) {
        return null;
    }
    else if (precedingUnIgnoredLine < 1) {
        return {
            indentation: '',
            action: null
        };
    }
    const precedingUnIgnoredLineContent = model.getLineContent(precedingUnIgnoredLine);
    if (indentRulesSupport.shouldIncrease(precedingUnIgnoredLineContent) || indentRulesSupport.shouldIndentNextLine(precedingUnIgnoredLineContent)) {
        return {
            indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(precedingUnIgnoredLineContent),
            action: _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent,
            line: precedingUnIgnoredLine
        };
    }
    else if (indentRulesSupport.shouldDecrease(precedingUnIgnoredLineContent)) {
        return {
            indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(precedingUnIgnoredLineContent),
            action: null,
            line: precedingUnIgnoredLine
        };
    }
    else {
        // precedingUnIgnoredLine can not be ignored.
        // it doesn't increase indent of following lines
        // it doesn't increase just next line
        // so current line is not affect by precedingUnIgnoredLine
        // and then we should get a correct inheritted indentation from above lines
        if (precedingUnIgnoredLine === 1) {
            return {
                indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(model.getLineContent(precedingUnIgnoredLine)),
                action: null,
                line: precedingUnIgnoredLine
            };
        }
        const previousLine = precedingUnIgnoredLine - 1;
        const previousLineIndentMetadata = indentRulesSupport.getIndentMetadata(model.getLineContent(previousLine));
        if (!(previousLineIndentMetadata & (1 /* IndentConsts.INCREASE_MASK */ | 2 /* IndentConsts.DECREASE_MASK */)) &&
            (previousLineIndentMetadata & 4 /* IndentConsts.INDENT_NEXTLINE_MASK */)) {
            let stopLine = 0;
            for (let i = previousLine - 1; i > 0; i--) {
                if (indentRulesSupport.shouldIndentNextLine(model.getLineContent(i))) {
                    continue;
                }
                stopLine = i;
                break;
            }
            return {
                indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(model.getLineContent(stopLine + 1)),
                action: null,
                line: stopLine + 1
            };
        }
        if (honorIntentialIndent) {
            return {
                indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(model.getLineContent(precedingUnIgnoredLine)),
                action: null,
                line: precedingUnIgnoredLine
            };
        }
        else {
            // search from precedingUnIgnoredLine until we find one whose indent is not temporary
            for (let i = precedingUnIgnoredLine; i > 0; i--) {
                const lineContent = model.getLineContent(i);
                if (indentRulesSupport.shouldIncrease(lineContent)) {
                    return {
                        indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(lineContent),
                        action: _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent,
                        line: i
                    };
                }
                else if (indentRulesSupport.shouldIndentNextLine(lineContent)) {
                    let stopLine = 0;
                    for (let j = i - 1; j > 0; j--) {
                        if (indentRulesSupport.shouldIndentNextLine(model.getLineContent(i))) {
                            continue;
                        }
                        stopLine = j;
                        break;
                    }
                    return {
                        indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(model.getLineContent(stopLine + 1)),
                        action: null,
                        line: stopLine + 1
                    };
                }
                else if (indentRulesSupport.shouldDecrease(lineContent)) {
                    return {
                        indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(lineContent),
                        action: null,
                        line: i
                    };
                }
            }
            return {
                indentation: _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(model.getLineContent(1)),
                action: null,
                line: 1
            };
        }
    }
}
function getGoodIndentForLine(autoIndent, virtualModel, languageId, lineNumber, indentConverter, languageConfigurationService) {
    if (autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
        return null;
    }
    const richEditSupport = languageConfigurationService.getLanguageConfiguration(languageId);
    if (!richEditSupport) {
        return null;
    }
    const indentRulesSupport = languageConfigurationService.getLanguageConfiguration(languageId).indentRulesSupport;
    if (!indentRulesSupport) {
        return null;
    }
    const indent = getInheritIndentForLine(autoIndent, virtualModel, lineNumber, undefined, languageConfigurationService);
    const lineContent = virtualModel.getLineContent(lineNumber);
    if (indent) {
        const inheritLine = indent.line;
        if (inheritLine !== undefined) {
            // Apply enter action as long as there are only whitespace lines between inherited line and this line.
            let shouldApplyEnterRules = true;
            for (let inBetweenLine = inheritLine; inBetweenLine < lineNumber - 1; inBetweenLine++) {
                if (!/^\s*$/.test(virtualModel.getLineContent(inBetweenLine))) {
                    shouldApplyEnterRules = false;
                    break;
                }
            }
            if (shouldApplyEnterRules) {
                const enterResult = richEditSupport.onEnter(autoIndent, '', virtualModel.getLineContent(inheritLine), '');
                if (enterResult) {
                    let indentation = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(virtualModel.getLineContent(inheritLine));
                    if (enterResult.removeText) {
                        indentation = indentation.substring(0, indentation.length - enterResult.removeText);
                    }
                    if ((enterResult.indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent) ||
                        (enterResult.indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.IndentOutdent)) {
                        indentation = indentConverter.shiftIndent(indentation);
                    }
                    else if (enterResult.indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Outdent) {
                        indentation = indentConverter.unshiftIndent(indentation);
                    }
                    if (indentRulesSupport.shouldDecrease(lineContent)) {
                        indentation = indentConverter.unshiftIndent(indentation);
                    }
                    if (enterResult.appendText) {
                        indentation += enterResult.appendText;
                    }
                    return _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(indentation);
                }
            }
        }
        if (indentRulesSupport.shouldDecrease(lineContent)) {
            if (indent.action === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent) {
                return indent.indentation;
            }
            else {
                return indentConverter.unshiftIndent(indent.indentation);
            }
        }
        else {
            if (indent.action === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent) {
                return indentConverter.shiftIndent(indent.indentation);
            }
            else {
                return indent.indentation;
            }
        }
    }
    return null;
}
function getIndentForEnter(autoIndent, model, range, indentConverter, languageConfigurationService) {
    if (autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
        return null;
    }
    model.tokenization.forceTokenization(range.startLineNumber);
    const lineTokens = model.tokenization.getLineTokens(range.startLineNumber);
    const scopedLineTokens = (0,_supports_js__WEBPACK_IMPORTED_MODULE_3__/* .createScopedLineTokens */ .wH)(lineTokens, range.startColumn - 1);
    const scopedLineText = scopedLineTokens.getLineContent();
    let embeddedLanguage = false;
    let beforeEnterText;
    if (scopedLineTokens.firstCharOffset > 0 && lineTokens.getLanguageId(0) !== scopedLineTokens.languageId) {
        // we are in the embeded language content
        embeddedLanguage = true; // if embeddedLanguage is true, then we don't touch the indentation of current line
        beforeEnterText = scopedLineText.substr(0, range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    else {
        beforeEnterText = lineTokens.getLineContent().substring(0, range.startColumn - 1);
    }
    let afterEnterText;
    if (range.isEmpty()) {
        afterEnterText = scopedLineText.substr(range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    else {
        const endScopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .getScopedLineTokens */ .n2)(model, range.endLineNumber, range.endColumn);
        afterEnterText = endScopedLineTokens.getLineContent().substr(range.endColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    const indentRulesSupport = languageConfigurationService.getLanguageConfiguration(scopedLineTokens.languageId).indentRulesSupport;
    if (!indentRulesSupport) {
        return null;
    }
    const beforeEnterResult = beforeEnterText;
    const beforeEnterIndent = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(beforeEnterText);
    const virtualModel = {
        tokenization: {
            getLineTokens: (lineNumber) => {
                return model.tokenization.getLineTokens(lineNumber);
            },
            getLanguageId: () => {
                return model.getLanguageId();
            },
            getLanguageIdAtPosition: (lineNumber, column) => {
                return model.getLanguageIdAtPosition(lineNumber, column);
            },
        },
        getLineContent: (lineNumber) => {
            if (lineNumber === range.startLineNumber) {
                return beforeEnterResult;
            }
            else {
                return model.getLineContent(lineNumber);
            }
        }
    };
    const currentLineIndent = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .getLeadingWhitespace */ .V8(lineTokens.getLineContent());
    const afterEnterAction = getInheritIndentForLine(autoIndent, virtualModel, range.startLineNumber + 1, undefined, languageConfigurationService);
    if (!afterEnterAction) {
        const beforeEnter = embeddedLanguage ? currentLineIndent : beforeEnterIndent;
        return {
            beforeEnter: beforeEnter,
            afterEnter: beforeEnter
        };
    }
    let afterEnterIndent = embeddedLanguage ? currentLineIndent : afterEnterAction.indentation;
    if (afterEnterAction.action === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent) {
        afterEnterIndent = indentConverter.shiftIndent(afterEnterIndent);
    }
    if (indentRulesSupport.shouldDecrease(afterEnterText)) {
        afterEnterIndent = indentConverter.unshiftIndent(afterEnterIndent);
    }
    return {
        beforeEnter: embeddedLanguage ? currentLineIndent : beforeEnterIndent,
        afterEnter: afterEnterIndent
    };
}
/**
 * We should always allow intentional indentation. It means, if users change the indentation of `lineNumber` and the content of
 * this line doesn't match decreaseIndentPattern, we should not adjust the indentation.
 */
function getIndentActionForType(autoIndent, model, range, ch, indentConverter, languageConfigurationService) {
    if (autoIndent < 4 /* EditorAutoIndentStrategy.Full */) {
        return null;
    }
    const scopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .getScopedLineTokens */ .n2)(model, range.startLineNumber, range.startColumn);
    if (scopedLineTokens.firstCharOffset) {
        // this line has mixed languages and indentation rules will not work
        return null;
    }
    const indentRulesSupport = languageConfigurationService.getLanguageConfiguration(scopedLineTokens.languageId).indentRulesSupport;
    if (!indentRulesSupport) {
        return null;
    }
    const scopedLineText = scopedLineTokens.getLineContent();
    const beforeTypeText = scopedLineText.substr(0, range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    // selection support
    let afterTypeText;
    if (range.isEmpty()) {
        afterTypeText = scopedLineText.substr(range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    else {
        const endScopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .getScopedLineTokens */ .n2)(model, range.endLineNumber, range.endColumn);
        afterTypeText = endScopedLineTokens.getLineContent().substr(range.endColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    // If previous content already matches decreaseIndentPattern, it means indentation of this line should already be adjusted
    // Users might change the indentation by purpose and we should honor that instead of readjusting.
    if (!indentRulesSupport.shouldDecrease(beforeTypeText + afterTypeText) && indentRulesSupport.shouldDecrease(beforeTypeText + ch + afterTypeText)) {
        // after typing `ch`, the content matches decreaseIndentPattern, we should adjust the indent to a good manner.
        // 1. Get inherited indent action
        const r = getInheritIndentForLine(autoIndent, model, range.startLineNumber, false, languageConfigurationService);
        if (!r) {
            return null;
        }
        let indentation = r.indentation;
        if (r.action !== _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_1__/* .IndentAction */ .wU.Indent) {
            indentation = indentConverter.unshiftIndent(indentation);
        }
        return indentation;
    }
    return null;
}
function getIndentMetadata(model, lineNumber, languageConfigurationService) {
    const indentRulesSupport = languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).indentRulesSupport;
    if (!indentRulesSupport) {
        return null;
    }
    if (lineNumber < 1 || lineNumber > model.getLineCount()) {
        return null;
    }
    return indentRulesSupport.getIndentMetadata(model.getLineContent(lineNumber));
}


/***/ }),

/***/ 33017:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ computeDefaultDocumentColors; }
/* harmony export */ });
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2157);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function _parseCaptureGroups(captureGroups) {
    const values = [];
    for (const captureGroup of captureGroups) {
        const parsedNumber = Number(captureGroup);
        if (parsedNumber || parsedNumber === 0 && captureGroup.replace(/\s/g, '') !== '') {
            values.push(parsedNumber);
        }
    }
    return values;
}
function _toIColor(r, g, b, a) {
    return {
        red: r / 255,
        blue: b / 255,
        green: g / 255,
        alpha: a
    };
}
function _findRange(model, match) {
    const index = match.index;
    const length = match[0].length;
    if (!index) {
        return;
    }
    const startPosition = model.positionAt(index);
    const range = {
        startLineNumber: startPosition.lineNumber,
        startColumn: startPosition.column,
        endLineNumber: startPosition.lineNumber,
        endColumn: startPosition.column + length
    };
    return range;
}
function _findHexColorInformation(range, hexValue) {
    if (!range) {
        return;
    }
    const parsedHexColor = _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il.Format.CSS.parseHex(hexValue);
    if (!parsedHexColor) {
        return;
    }
    return {
        range: range,
        color: _toIColor(parsedHexColor.rgba.r, parsedHexColor.rgba.g, parsedHexColor.rgba.b, parsedHexColor.rgba.a)
    };
}
function _findRGBColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
        return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    return {
        range: range,
        color: _toIColor(parsedRegex[0], parsedRegex[1], parsedRegex[2], isAlpha ? parsedRegex[3] : 1)
    };
}
function _findHSLColorInformation(range, matches, isAlpha) {
    if (!range || matches.length !== 1) {
        return;
    }
    const match = matches[0];
    const captureGroups = match.values();
    const parsedRegex = _parseCaptureGroups(captureGroups);
    const colorEquivalent = new _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__/* .HSLA */ .Oz(parsedRegex[0], parsedRegex[1] / 100, parsedRegex[2] / 100, isAlpha ? parsedRegex[3] : 1));
    return {
        range: range,
        color: _toIColor(colorEquivalent.rgba.r, colorEquivalent.rgba.g, colorEquivalent.rgba.b, colorEquivalent.rgba.a)
    };
}
function _findMatches(model, regex) {
    if (typeof model === 'string') {
        return [...model.matchAll(regex)];
    }
    else {
        return model.findMatches(regex);
    }
}
function computeColors(model) {
    const result = [];
    // Early validation for RGB and HSL
    const initialValidationRegex = /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm;
    const initialValidationMatches = _findMatches(model, initialValidationRegex);
    // Potential colors have been found, validate the parameters
    if (initialValidationMatches.length > 0) {
        for (const initialMatch of initialValidationMatches) {
            const initialCaptureGroups = initialMatch.filter(captureGroup => captureGroup !== undefined);
            const colorScheme = initialCaptureGroups[1];
            const colorParameters = initialCaptureGroups[2];
            if (!colorParameters) {
                continue;
            }
            let colorInformation;
            if (colorScheme === 'rgb') {
                const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
                colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
            }
            else if (colorScheme === 'rgba') {
                const regexParameters = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
                colorInformation = _findRGBColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
            }
            else if (colorScheme === 'hsl') {
                const regexParameters = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
                colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), false);
            }
            else if (colorScheme === 'hsla') {
                const regexParameters = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
                colorInformation = _findHSLColorInformation(_findRange(model, initialMatch), _findMatches(colorParameters, regexParameters), true);
            }
            else if (colorScheme === '#') {
                colorInformation = _findHexColorInformation(_findRange(model, initialMatch), colorScheme + colorParameters);
            }
            if (colorInformation) {
                result.push(colorInformation);
            }
        }
    }
    return result;
}
/**
 * Returns an array of all default document colors in the provided document
 */
function computeDefaultDocumentColors(model) {
    if (!model || typeof model.getValue !== 'function' || typeof model.positionAt !== 'function') {
        // Unknown caller!
        return [];
    }
    return computeColors(model);
}


/***/ }),

/***/ 65033:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ getEnterAction; }
/* harmony export */ });
/* harmony import */ var _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79287);
/* harmony import */ var _languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11296);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function getEnterAction(autoIndent, model, range, languageConfigurationService) {
    const scopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .getScopedLineTokens */ .n2)(model, range.startLineNumber, range.startColumn);
    const richEditSupport = languageConfigurationService.getLanguageConfiguration(scopedLineTokens.languageId);
    if (!richEditSupport) {
        return null;
    }
    const scopedLineText = scopedLineTokens.getLineContent();
    const beforeEnterText = scopedLineText.substr(0, range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    // selection support
    let afterEnterText;
    if (range.isEmpty()) {
        afterEnterText = scopedLineText.substr(range.startColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    else {
        const endScopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .getScopedLineTokens */ .n2)(model, range.endLineNumber, range.endColumn);
        afterEnterText = endScopedLineTokens.getLineContent().substr(range.endColumn - 1 - scopedLineTokens.firstCharOffset);
    }
    let previousLineText = '';
    if (range.startLineNumber > 1 && scopedLineTokens.firstCharOffset === 0) {
        // This is not the first line and the entire line belongs to this mode
        const oneLineAboveScopedLineTokens = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .getScopedLineTokens */ .n2)(model, range.startLineNumber - 1);
        if (oneLineAboveScopedLineTokens.languageId === scopedLineTokens.languageId) {
            // The line above ends with text belonging to the same mode
            previousLineText = oneLineAboveScopedLineTokens.getLineContent();
        }
    }
    const enterResult = richEditSupport.onEnter(autoIndent, previousLineText, beforeEnterText, afterEnterText);
    if (!enterResult) {
        return null;
    }
    const indentAction = enterResult.indentAction;
    let appendText = enterResult.appendText;
    const removeText = enterResult.removeText || 0;
    // Here we add `\t` to appendText first because enterAction is leveraging appendText and removeText to change indentation.
    if (!appendText) {
        if ((indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_0__/* .IndentAction */ .wU.Indent) ||
            (indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_0__/* .IndentAction */ .wU.IndentOutdent)) {
            appendText = '\t';
        }
        else {
            appendText = '';
        }
    }
    else if (indentAction === _languageConfiguration_js__WEBPACK_IMPORTED_MODULE_0__/* .IndentAction */ .wU.Indent) {
        appendText = '\t' + appendText;
    }
    let indentation = (0,_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .getIndentationAtPosition */ .u0)(model, range.startLineNumber, range.startColumn);
    if (removeText) {
        indentation = indentation.substring(0, indentation.length - removeText);
    }
    return {
        indentAction: indentAction,
        appendText: appendText,
        removeText: removeText,
        indentation: indentation
    };
}


/***/ }),

/***/ 21608:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ ILanguageService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ILanguageService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('languageService');


/***/ }),

/***/ 79287:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V6: function() { return /* binding */ StandardAutoClosingPairConditional; },
/* harmony export */   c$: function() { return /* binding */ AutoClosingPairs; },
/* harmony export */   wU: function() { return /* binding */ IndentAction; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
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
/**
 * @internal
 */
class StandardAutoClosingPairConditional {
    constructor(source) {
        this._neutralCharacter = null;
        this._neutralCharacterSearched = false;
        this.open = source.open;
        this.close = source.close;
        // initially allowed in all tokens
        this._inString = true;
        this._inComment = true;
        this._inRegEx = true;
        if (Array.isArray(source.notIn)) {
            for (let i = 0, len = source.notIn.length; i < len; i++) {
                const notIn = source.notIn[i];
                switch (notIn) {
                    case 'string':
                        this._inString = false;
                        break;
                    case 'comment':
                        this._inComment = false;
                        break;
                    case 'regex':
                        this._inRegEx = false;
                        break;
                }
            }
        }
    }
    isOK(standardToken) {
        switch (standardToken) {
            case 0 /* StandardTokenType.Other */:
                return true;
            case 1 /* StandardTokenType.Comment */:
                return this._inComment;
            case 2 /* StandardTokenType.String */:
                return this._inString;
            case 3 /* StandardTokenType.RegEx */:
                return this._inRegEx;
        }
    }
    shouldAutoClose(context, column) {
        // Always complete on empty line
        if (context.getTokenCount() === 0) {
            return true;
        }
        const tokenIndex = context.findTokenIndexAtOffset(column - 2);
        const standardTokenType = context.getStandardTokenType(tokenIndex);
        return this.isOK(standardTokenType);
    }
    _findNeutralCharacterInRange(fromCharCode, toCharCode) {
        for (let charCode = fromCharCode; charCode <= toCharCode; charCode++) {
            const character = String.fromCharCode(charCode);
            if (!this.open.includes(character) && !this.close.includes(character)) {
                return character;
            }
        }
        return null;
    }
    /**
     * Find a character in the range [0-9a-zA-Z] that does not appear in the open or close
     */
    findNeutralCharacter() {
        if (!this._neutralCharacterSearched) {
            this._neutralCharacterSearched = true;
            if (!this._neutralCharacter) {
                this._neutralCharacter = this._findNeutralCharacterInRange(48 /* CharCode.Digit0 */, 57 /* CharCode.Digit9 */);
            }
            if (!this._neutralCharacter) {
                this._neutralCharacter = this._findNeutralCharacterInRange(97 /* CharCode.a */, 122 /* CharCode.z */);
            }
            if (!this._neutralCharacter) {
                this._neutralCharacter = this._findNeutralCharacterInRange(65 /* CharCode.A */, 90 /* CharCode.Z */);
            }
        }
        return this._neutralCharacter;
    }
}
/**
 * @internal
 */
class AutoClosingPairs {
    constructor(autoClosingPairs) {
        this.autoClosingPairsOpenByStart = new Map();
        this.autoClosingPairsOpenByEnd = new Map();
        this.autoClosingPairsCloseByStart = new Map();
        this.autoClosingPairsCloseByEnd = new Map();
        this.autoClosingPairsCloseSingleChar = new Map();
        for (const pair of autoClosingPairs) {
            appendEntry(this.autoClosingPairsOpenByStart, pair.open.charAt(0), pair);
            appendEntry(this.autoClosingPairsOpenByEnd, pair.open.charAt(pair.open.length - 1), pair);
            appendEntry(this.autoClosingPairsCloseByStart, pair.close.charAt(0), pair);
            appendEntry(this.autoClosingPairsCloseByEnd, pair.close.charAt(pair.close.length - 1), pair);
            if (pair.close.length === 1 && pair.open.length === 1) {
                appendEntry(this.autoClosingPairsCloseSingleChar, pair.close, pair);
            }
        }
    }
}
function appendEntry(target, key, value) {
    if (target.has(key)) {
        target.get(key).push(value);
    }
    else {
        target.set(key, [value]);
    }
}


/***/ }),

/***/ 11296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c_: function() { return /* binding */ ILanguageConfigurationService; },
  u0: function() { return /* binding */ getIndentationAtPosition; },
  n2: function() { return /* binding */ getScopedLineTokens; }
});

// UNUSED EXPORTS: LanguageConfigurationChangeEvent, LanguageConfigurationRegistry, LanguageConfigurationService, LanguageConfigurationServiceChangeEvent, ResolvedLanguageConfiguration

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/wordHelper.js
var wordHelper = __webpack_require__(81814);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfiguration.js
var languageConfiguration = __webpack_require__(79287);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports.js
var supports = __webpack_require__(46429);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/characterPair.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class CharacterPairSupport {
    constructor(config) {
        if (config.autoClosingPairs) {
            this._autoClosingPairs = config.autoClosingPairs.map(el => new languageConfiguration/* StandardAutoClosingPairConditional */.V6(el));
        }
        else if (config.brackets) {
            this._autoClosingPairs = config.brackets.map(b => new languageConfiguration/* StandardAutoClosingPairConditional */.V6({ open: b[0], close: b[1] }));
        }
        else {
            this._autoClosingPairs = [];
        }
        if (config.__electricCharacterSupport && config.__electricCharacterSupport.docComment) {
            const docComment = config.__electricCharacterSupport.docComment;
            // IDocComment is legacy, only partially supported
            this._autoClosingPairs.push(new languageConfiguration/* StandardAutoClosingPairConditional */.V6({ open: docComment.open, close: docComment.close || '' }));
        }
        this._autoCloseBeforeForQuotes = typeof config.autoCloseBefore === 'string' ? config.autoCloseBefore : CharacterPairSupport.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES;
        this._autoCloseBeforeForBrackets = typeof config.autoCloseBefore === 'string' ? config.autoCloseBefore : CharacterPairSupport.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS;
        this._surroundingPairs = config.surroundingPairs || this._autoClosingPairs;
    }
    getAutoClosingPairs() {
        return this._autoClosingPairs;
    }
    getAutoCloseBeforeSet(forQuotes) {
        return (forQuotes ? this._autoCloseBeforeForQuotes : this._autoCloseBeforeForBrackets);
    }
    getSurroundingPairs() {
        return this._surroundingPairs;
    }
}
CharacterPairSupport.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_QUOTES = ';:.,=}])> \n\t';
CharacterPairSupport.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED_BRACKETS = '\'"`;:.,=}])> \n\t';

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/richEditBrackets.js
var richEditBrackets = __webpack_require__(19355);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/electricCharacter.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class BracketElectricCharacterSupport {
    constructor(richEditBrackets) {
        this._richEditBrackets = richEditBrackets;
    }
    getElectricCharacters() {
        const result = [];
        if (this._richEditBrackets) {
            for (const bracket of this._richEditBrackets.brackets) {
                for (const close of bracket.close) {
                    const lastChar = close.charAt(close.length - 1);
                    result.push(lastChar);
                }
            }
        }
        return (0,arrays/* distinct */.EB)(result);
    }
    onElectricCharacter(character, context, column) {
        if (!this._richEditBrackets || this._richEditBrackets.brackets.length === 0) {
            return null;
        }
        const tokenIndex = context.findTokenIndexAtOffset(column - 1);
        if ((0,supports/* ignoreBracketsInToken */.Bu)(context.getStandardTokenType(tokenIndex))) {
            return null;
        }
        const reversedBracketRegex = this._richEditBrackets.reversedRegex;
        const text = context.getLineContent().substring(0, column - 1) + character;
        const r = richEditBrackets/* BracketsUtils */.Vr.findPrevBracketInRange(reversedBracketRegex, 1, text, 0, text.length);
        if (!r) {
            return null;
        }
        const bracketText = text.substring(r.startColumn - 1, r.endColumn - 1).toLowerCase();
        const isOpen = this._richEditBrackets.textIsOpenBracket[bracketText];
        if (isOpen) {
            return null;
        }
        const textBeforeBracket = context.getActualLineContentBefore(r.startColumn - 1);
        if (!/^\s*$/.test(textBeforeBracket)) {
            // There is other text on the line before the bracket
            return null;
        }
        return {
            matchOpenBracket: bracketText
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/indentRules.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function resetGlobalRegex(reg) {
    if (reg.global) {
        reg.lastIndex = 0;
    }
    return true;
}
class IndentRulesSupport {
    constructor(indentationRules) {
        this._indentationRules = indentationRules;
    }
    shouldIncrease(text) {
        if (this._indentationRules) {
            if (this._indentationRules.increaseIndentPattern && resetGlobalRegex(this._indentationRules.increaseIndentPattern) && this._indentationRules.increaseIndentPattern.test(text)) {
                return true;
            }
            // if (this._indentationRules.indentNextLinePattern && this._indentationRules.indentNextLinePattern.test(text)) {
            // 	return true;
            // }
        }
        return false;
    }
    shouldDecrease(text) {
        if (this._indentationRules && this._indentationRules.decreaseIndentPattern && resetGlobalRegex(this._indentationRules.decreaseIndentPattern) && this._indentationRules.decreaseIndentPattern.test(text)) {
            return true;
        }
        return false;
    }
    shouldIndentNextLine(text) {
        if (this._indentationRules && this._indentationRules.indentNextLinePattern && resetGlobalRegex(this._indentationRules.indentNextLinePattern) && this._indentationRules.indentNextLinePattern.test(text)) {
            return true;
        }
        return false;
    }
    shouldIgnore(text) {
        // the text matches `unIndentedLinePattern`
        if (this._indentationRules && this._indentationRules.unIndentedLinePattern && resetGlobalRegex(this._indentationRules.unIndentedLinePattern) && this._indentationRules.unIndentedLinePattern.test(text)) {
            return true;
        }
        return false;
    }
    getIndentMetadata(text) {
        let ret = 0;
        if (this.shouldIncrease(text)) {
            ret += 1 /* IndentConsts.INCREASE_MASK */;
        }
        if (this.shouldDecrease(text)) {
            ret += 2 /* IndentConsts.DECREASE_MASK */;
        }
        if (this.shouldIndentNextLine(text)) {
            ret += 4 /* IndentConsts.INDENT_NEXTLINE_MASK */;
        }
        if (this.shouldIgnore(text)) {
            ret += 8 /* IndentConsts.UNINDENT_MASK */;
        }
        return ret;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/onEnter.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class OnEnterSupport {
    constructor(opts) {
        opts = opts || {};
        opts.brackets = opts.brackets || [
            ['(', ')'],
            ['{', '}'],
            ['[', ']']
        ];
        this._brackets = [];
        opts.brackets.forEach((bracket) => {
            const openRegExp = OnEnterSupport._createOpenBracketRegExp(bracket[0]);
            const closeRegExp = OnEnterSupport._createCloseBracketRegExp(bracket[1]);
            if (openRegExp && closeRegExp) {
                this._brackets.push({
                    open: bracket[0],
                    openRegExp: openRegExp,
                    close: bracket[1],
                    closeRegExp: closeRegExp,
                });
            }
        });
        this._regExpRules = opts.onEnterRules || [];
    }
    onEnter(autoIndent, previousLineText, beforeEnterText, afterEnterText) {
        // (1): `regExpRules`
        if (autoIndent >= 3 /* EditorAutoIndentStrategy.Advanced */) {
            for (let i = 0, len = this._regExpRules.length; i < len; i++) {
                const rule = this._regExpRules[i];
                const regResult = [{
                        reg: rule.beforeText,
                        text: beforeEnterText
                    }, {
                        reg: rule.afterText,
                        text: afterEnterText
                    }, {
                        reg: rule.previousLineText,
                        text: previousLineText
                    }].every((obj) => {
                    if (!obj.reg) {
                        return true;
                    }
                    obj.reg.lastIndex = 0; // To disable the effect of the "g" flag.
                    return obj.reg.test(obj.text);
                });
                if (regResult) {
                    return rule.action;
                }
            }
        }
        // (2): Special indent-outdent
        if (autoIndent >= 2 /* EditorAutoIndentStrategy.Brackets */) {
            if (beforeEnterText.length > 0 && afterEnterText.length > 0) {
                for (let i = 0, len = this._brackets.length; i < len; i++) {
                    const bracket = this._brackets[i];
                    if (bracket.openRegExp.test(beforeEnterText) && bracket.closeRegExp.test(afterEnterText)) {
                        return { indentAction: languageConfiguration/* IndentAction */.wU.IndentOutdent };
                    }
                }
            }
        }
        // (4): Open bracket based logic
        if (autoIndent >= 2 /* EditorAutoIndentStrategy.Brackets */) {
            if (beforeEnterText.length > 0) {
                for (let i = 0, len = this._brackets.length; i < len; i++) {
                    const bracket = this._brackets[i];
                    if (bracket.openRegExp.test(beforeEnterText)) {
                        return { indentAction: languageConfiguration/* IndentAction */.wU.Indent };
                    }
                }
            }
        }
        return null;
    }
    static _createOpenBracketRegExp(bracket) {
        let str = strings/* escapeRegExpCharacters */.ec(bracket);
        if (!/\B/.test(str.charAt(0))) {
            str = '\\b' + str;
        }
        str += '\\s*$';
        return OnEnterSupport._safeRegExp(str);
    }
    static _createCloseBracketRegExp(bracket) {
        let str = strings/* escapeRegExpCharacters */.ec(bracket);
        if (!/\B/.test(str.charAt(str.length - 1))) {
            str = str + '\\b';
        }
        str = '^\\s*' + str;
        return OnEnterSupport._safeRegExp(str);
    }
    static _safeRegExp(def) {
        try {
            return new RegExp(def);
        }
        catch (err) {
            (0,errors/* onUnexpectedError */.dL)(err);
            return null;
        }
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(21608);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js
var extensions = __webpack_require__(9546);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/modesRegistry.js
var modesRegistry = __webpack_require__(96038);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cache.js
var cache = __webpack_require__(59699);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/supports/languageBracketsConfiguration.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Captures all bracket related configurations for a single language.
 * Immutable.
*/
class LanguageBracketsConfiguration {
    constructor(languageId, config) {
        this.languageId = languageId;
        const bracketPairs = config.brackets ? filterValidBrackets(config.brackets) : [];
        const openingBracketInfos = new cache/* CachedFunction */.b((bracket) => {
            const closing = new Set();
            return {
                info: new OpeningBracketKind(this, bracket, closing),
                closing,
            };
        });
        const closingBracketInfos = new cache/* CachedFunction */.b((bracket) => {
            const opening = new Set();
            const openingColorized = new Set();
            return {
                info: new ClosingBracketKind(this, bracket, opening, openingColorized),
                opening,
                openingColorized,
            };
        });
        for (const [open, close] of bracketPairs) {
            const opening = openingBracketInfos.get(open);
            const closing = closingBracketInfos.get(close);
            opening.closing.add(closing.info);
            closing.opening.add(opening.info);
        }
        // Treat colorized brackets as brackets, and mark them as colorized.
        const colorizedBracketPairs = config.colorizedBracketPairs
            ? filterValidBrackets(config.colorizedBracketPairs)
            // If not configured: Take all brackets except `<` ... `>`
            // Many languages set < ... > as bracket pair, even though they also use it as comparison operator.
            // This leads to problems when colorizing this bracket, so we exclude it if not explicitly configured otherwise.
            // https://github.com/microsoft/vscode/issues/132476
            : bracketPairs.filter((p) => !(p[0] === '<' && p[1] === '>'));
        for (const [open, close] of colorizedBracketPairs) {
            const opening = openingBracketInfos.get(open);
            const closing = closingBracketInfos.get(close);
            opening.closing.add(closing.info);
            closing.openingColorized.add(opening.info);
            closing.opening.add(opening.info);
        }
        this._openingBrackets = new Map([...openingBracketInfos.cachedValues].map(([k, v]) => [k, v.info]));
        this._closingBrackets = new Map([...closingBracketInfos.cachedValues].map(([k, v]) => [k, v.info]));
    }
    /**
     * No two brackets have the same bracket text.
    */
    get openingBrackets() {
        return [...this._openingBrackets.values()];
    }
    /**
     * No two brackets have the same bracket text.
    */
    get closingBrackets() {
        return [...this._closingBrackets.values()];
    }
    getOpeningBracketInfo(bracketText) {
        return this._openingBrackets.get(bracketText);
    }
    getClosingBracketInfo(bracketText) {
        return this._closingBrackets.get(bracketText);
    }
    getBracketInfo(bracketText) {
        return this.getOpeningBracketInfo(bracketText) || this.getClosingBracketInfo(bracketText);
    }
}
function filterValidBrackets(bracketPairs) {
    return bracketPairs.filter(([open, close]) => open !== '' && close !== '');
}
class BracketKindBase {
    constructor(config, bracketText) {
        this.config = config;
        this.bracketText = bracketText;
    }
    get languageId() {
        return this.config.languageId;
    }
}
class OpeningBracketKind extends BracketKindBase {
    constructor(config, bracketText, openedBrackets) {
        super(config, bracketText);
        this.openedBrackets = openedBrackets;
        this.isOpeningBracket = true;
    }
}
class ClosingBracketKind extends BracketKindBase {
    constructor(config, bracketText, 
    /**
     * Non empty array of all opening brackets this bracket closes.
    */
    openingBrackets, openingColorizedBrackets) {
        super(config, bracketText);
        this.openingBrackets = openingBrackets;
        this.openingColorizedBrackets = openingColorizedBrackets;
        this.isOpeningBracket = false;
    }
    /**
     * Checks if this bracket closes the given other bracket.
     * If the bracket infos come from different configurations, this method will return false.
    */
    closes(other) {
        if (other['config'] !== this.config) {
            return false;
        }
        return this.openingBrackets.has(other);
    }
    closesColorized(other) {
        if (other['config'] !== this.config) {
            return false;
        }
        return this.openingColorizedBrackets.has(other);
    }
    getOpeningBrackets() {
        return [...this.openingBrackets];
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/languages/languageConfigurationRegistry.js
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

















class LanguageConfigurationServiceChangeEvent {
    constructor(languageId) {
        this.languageId = languageId;
    }
    affects(languageId) {
        return !this.languageId ? true : this.languageId === languageId;
    }
}
const ILanguageConfigurationService = (0,instantiation/* createDecorator */.yh)('languageConfigurationService');
let LanguageConfigurationService = class LanguageConfigurationService extends lifecycle/* Disposable */.JT {
    constructor(configurationService, languageService) {
        super();
        this.configurationService = configurationService;
        this.languageService = languageService;
        this._registry = this._register(new LanguageConfigurationRegistry());
        this.onDidChangeEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidChange = this.onDidChangeEmitter.event;
        this.configurations = new Map();
        const languageConfigKeys = new Set(Object.values(customizedLanguageConfigKeys));
        this._register(this.configurationService.onDidChangeConfiguration((e) => {
            const globalConfigChanged = e.change.keys.some((k) => languageConfigKeys.has(k));
            const localConfigChanged = e.change.overrides
                .filter(([overrideLangName, keys]) => keys.some((k) => languageConfigKeys.has(k)))
                .map(([overrideLangName]) => overrideLangName);
            if (globalConfigChanged) {
                this.configurations.clear();
                this.onDidChangeEmitter.fire(new LanguageConfigurationServiceChangeEvent(undefined));
            }
            else {
                for (const languageId of localConfigChanged) {
                    if (this.languageService.isRegisteredLanguageId(languageId)) {
                        this.configurations.delete(languageId);
                        this.onDidChangeEmitter.fire(new LanguageConfigurationServiceChangeEvent(languageId));
                    }
                }
            }
        }));
        this._register(this._registry.onDidChange((e) => {
            this.configurations.delete(e.languageId);
            this.onDidChangeEmitter.fire(new LanguageConfigurationServiceChangeEvent(e.languageId));
        }));
    }
    register(languageId, configuration, priority) {
        return this._registry.register(languageId, configuration, priority);
    }
    getLanguageConfiguration(languageId) {
        let result = this.configurations.get(languageId);
        if (!result) {
            result = computeConfig(languageId, this._registry, this.configurationService, this.languageService);
            this.configurations.set(languageId, result);
        }
        return result;
    }
};
LanguageConfigurationService = __decorate([
    __param(0, configuration/* IConfigurationService */.Ui),
    __param(1, language/* ILanguageService */.O)
], LanguageConfigurationService);
function computeConfig(languageId, registry, configurationService, languageService) {
    let languageConfig = registry.getLanguageConfiguration(languageId);
    if (!languageConfig) {
        if (!languageService.isRegisteredLanguageId(languageId)) {
            // this happens for the null language, which can be returned by monarch.
            // Instead of throwing an error, we just return a default config.
            return new ResolvedLanguageConfiguration(languageId, {});
        }
        languageConfig = new ResolvedLanguageConfiguration(languageId, {});
    }
    const customizedConfig = getCustomizedLanguageConfig(languageConfig.languageId, configurationService);
    const data = combineLanguageConfigurations([languageConfig.underlyingConfig, customizedConfig]);
    const config = new ResolvedLanguageConfiguration(languageConfig.languageId, data);
    return config;
}
const customizedLanguageConfigKeys = {
    brackets: 'editor.language.brackets',
    colorizedBracketPairs: 'editor.language.colorizedBracketPairs'
};
function getCustomizedLanguageConfig(languageId, configurationService) {
    const brackets = configurationService.getValue(customizedLanguageConfigKeys.brackets, {
        overrideIdentifier: languageId,
    });
    const colorizedBracketPairs = configurationService.getValue(customizedLanguageConfigKeys.colorizedBracketPairs, {
        overrideIdentifier: languageId,
    });
    return {
        brackets: validateBracketPairs(brackets),
        colorizedBracketPairs: validateBracketPairs(colorizedBracketPairs),
    };
}
function validateBracketPairs(data) {
    if (!Array.isArray(data)) {
        return undefined;
    }
    return data.map(pair => {
        if (!Array.isArray(pair) || pair.length !== 2) {
            return undefined;
        }
        return [pair[0], pair[1]];
    }).filter((p) => !!p);
}
function getIndentationAtPosition(model, lineNumber, column) {
    const lineText = model.getLineContent(lineNumber);
    let indentation = strings/* getLeadingWhitespace */.V8(lineText);
    if (indentation.length > column - 1) {
        indentation = indentation.substring(0, column - 1);
    }
    return indentation;
}
function getScopedLineTokens(model, lineNumber, columnNumber) {
    model.tokenization.forceTokenization(lineNumber);
    const lineTokens = model.tokenization.getLineTokens(lineNumber);
    const column = (typeof columnNumber === 'undefined' ? model.getLineMaxColumn(lineNumber) - 1 : columnNumber - 1);
    return (0,supports/* createScopedLineTokens */.wH)(lineTokens, column);
}
class ComposedLanguageConfiguration {
    constructor(languageId) {
        this.languageId = languageId;
        this._resolved = null;
        this._entries = [];
        this._order = 0;
        this._resolved = null;
    }
    register(configuration, priority) {
        const entry = new LanguageConfigurationContribution(configuration, priority, ++this._order);
        this._entries.push(entry);
        this._resolved = null;
        return (0,lifecycle/* toDisposable */.OF)(() => {
            for (let i = 0; i < this._entries.length; i++) {
                if (this._entries[i] === entry) {
                    this._entries.splice(i, 1);
                    this._resolved = null;
                    break;
                }
            }
        });
    }
    getResolvedConfiguration() {
        if (!this._resolved) {
            const config = this._resolve();
            if (config) {
                this._resolved = new ResolvedLanguageConfiguration(this.languageId, config);
            }
        }
        return this._resolved;
    }
    _resolve() {
        if (this._entries.length === 0) {
            return null;
        }
        this._entries.sort(LanguageConfigurationContribution.cmp);
        return combineLanguageConfigurations(this._entries.map(e => e.configuration));
    }
}
function combineLanguageConfigurations(configs) {
    let result = {
        comments: undefined,
        brackets: undefined,
        wordPattern: undefined,
        indentationRules: undefined,
        onEnterRules: undefined,
        autoClosingPairs: undefined,
        surroundingPairs: undefined,
        autoCloseBefore: undefined,
        folding: undefined,
        colorizedBracketPairs: undefined,
        __electricCharacterSupport: undefined,
    };
    for (const entry of configs) {
        result = {
            comments: entry.comments || result.comments,
            brackets: entry.brackets || result.brackets,
            wordPattern: entry.wordPattern || result.wordPattern,
            indentationRules: entry.indentationRules || result.indentationRules,
            onEnterRules: entry.onEnterRules || result.onEnterRules,
            autoClosingPairs: entry.autoClosingPairs || result.autoClosingPairs,
            surroundingPairs: entry.surroundingPairs || result.surroundingPairs,
            autoCloseBefore: entry.autoCloseBefore || result.autoCloseBefore,
            folding: entry.folding || result.folding,
            colorizedBracketPairs: entry.colorizedBracketPairs || result.colorizedBracketPairs,
            __electricCharacterSupport: entry.__electricCharacterSupport || result.__electricCharacterSupport,
        };
    }
    return result;
}
class LanguageConfigurationContribution {
    constructor(configuration, priority, order) {
        this.configuration = configuration;
        this.priority = priority;
        this.order = order;
    }
    static cmp(a, b) {
        if (a.priority === b.priority) {
            // higher order last
            return a.order - b.order;
        }
        // higher priority last
        return a.priority - b.priority;
    }
}
class LanguageConfigurationChangeEvent {
    constructor(languageId) {
        this.languageId = languageId;
    }
}
class LanguageConfigurationRegistry extends lifecycle/* Disposable */.JT {
    constructor() {
        super();
        this._entries = new Map();
        this._onDidChange = this._register(new common_event/* Emitter */.Q5());
        this.onDidChange = this._onDidChange.event;
        this._register(this.register(modesRegistry/* PLAINTEXT_LANGUAGE_ID */.bd, {
            brackets: [
                ['(', ')'],
                ['[', ']'],
                ['{', '}'],
            ],
            surroundingPairs: [
                { open: '{', close: '}' },
                { open: '[', close: ']' },
                { open: '(', close: ')' },
                { open: '<', close: '>' },
                { open: '\"', close: '\"' },
                { open: '\'', close: '\'' },
                { open: '`', close: '`' },
            ],
            colorizedBracketPairs: [],
            folding: {
                offSide: true
            }
        }, 0));
    }
    /**
     * @param priority Use a higher number for higher priority
     */
    register(languageId, configuration, priority = 0) {
        let entries = this._entries.get(languageId);
        if (!entries) {
            entries = new ComposedLanguageConfiguration(languageId);
            this._entries.set(languageId, entries);
        }
        const disposable = entries.register(configuration, priority);
        this._onDidChange.fire(new LanguageConfigurationChangeEvent(languageId));
        return (0,lifecycle/* toDisposable */.OF)(() => {
            disposable.dispose();
            this._onDidChange.fire(new LanguageConfigurationChangeEvent(languageId));
        });
    }
    getLanguageConfiguration(languageId) {
        const entries = this._entries.get(languageId);
        return (entries === null || entries === void 0 ? void 0 : entries.getResolvedConfiguration()) || null;
    }
}
/**
 * Immutable.
*/
class ResolvedLanguageConfiguration {
    constructor(languageId, underlyingConfig) {
        this.languageId = languageId;
        this.underlyingConfig = underlyingConfig;
        this._brackets = null;
        this._electricCharacter = null;
        this._onEnterSupport =
            this.underlyingConfig.brackets ||
                this.underlyingConfig.indentationRules ||
                this.underlyingConfig.onEnterRules
                ? new OnEnterSupport(this.underlyingConfig)
                : null;
        this.comments = ResolvedLanguageConfiguration._handleComments(this.underlyingConfig);
        this.characterPair = new CharacterPairSupport(this.underlyingConfig);
        this.wordDefinition = this.underlyingConfig.wordPattern || wordHelper/* DEFAULT_WORD_REGEXP */.Af;
        this.indentationRules = this.underlyingConfig.indentationRules;
        if (this.underlyingConfig.indentationRules) {
            this.indentRulesSupport = new IndentRulesSupport(this.underlyingConfig.indentationRules);
        }
        else {
            this.indentRulesSupport = null;
        }
        this.foldingRules = this.underlyingConfig.folding || {};
        this.bracketsNew = new LanguageBracketsConfiguration(languageId, this.underlyingConfig);
    }
    getWordDefinition() {
        return (0,wordHelper/* ensureValidWordDefinition */.eq)(this.wordDefinition);
    }
    get brackets() {
        if (!this._brackets && this.underlyingConfig.brackets) {
            this._brackets = new richEditBrackets/* RichEditBrackets */.EA(this.languageId, this.underlyingConfig.brackets);
        }
        return this._brackets;
    }
    get electricCharacter() {
        if (!this._electricCharacter) {
            this._electricCharacter = new BracketElectricCharacterSupport(this.brackets);
        }
        return this._electricCharacter;
    }
    onEnter(autoIndent, previousLineText, beforeEnterText, afterEnterText) {
        if (!this._onEnterSupport) {
            return null;
        }
        return this._onEnterSupport.onEnter(autoIndent, previousLineText, beforeEnterText, afterEnterText);
    }
    getAutoClosingPairs() {
        return new languageConfiguration/* AutoClosingPairs */.c$(this.characterPair.getAutoClosingPairs());
    }
    getAutoCloseBeforeSet(forQuotes) {
        return this.characterPair.getAutoCloseBeforeSet(forQuotes);
    }
    getSurroundingPairs() {
        return this.characterPair.getSurroundingPairs();
    }
    static _handleComments(conf) {
        const commentRule = conf.comments;
        if (!commentRule) {
            return null;
        }
        // comment configuration
        const comments = {};
        if (commentRule.lineComment) {
            comments.lineCommentToken = commentRule.lineComment;
        }
        if (commentRule.blockComment) {
            const [blockStart, blockEnd] = commentRule.blockComment;
            comments.blockCommentStartToken = blockStart;
            comments.blockCommentEndToken = blockEnd;
        }
        return comments;
    }
}
(0,extensions/* registerSingleton */.z)(ILanguageConfigurationService, LanguageConfigurationService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 68609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ computeLinks; }
/* harmony export */ });
/* unused harmony exports StateMachine, LinkComputer */
/* harmony import */ var _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43332);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class Uint8Matrix {
    constructor(rows, cols, defaultValue) {
        const data = new Uint8Array(rows * cols);
        for (let i = 0, len = rows * cols; i < len; i++) {
            data[i] = defaultValue;
        }
        this._data = data;
        this.rows = rows;
        this.cols = cols;
    }
    get(row, col) {
        return this._data[row * this.cols + col];
    }
    set(row, col, value) {
        this._data[row * this.cols + col] = value;
    }
}
class StateMachine {
    constructor(edges) {
        let maxCharCode = 0;
        let maxState = 0 /* State.Invalid */;
        for (let i = 0, len = edges.length; i < len; i++) {
            const [from, chCode, to] = edges[i];
            if (chCode > maxCharCode) {
                maxCharCode = chCode;
            }
            if (from > maxState) {
                maxState = from;
            }
            if (to > maxState) {
                maxState = to;
            }
        }
        maxCharCode++;
        maxState++;
        const states = new Uint8Matrix(maxState, maxCharCode, 0 /* State.Invalid */);
        for (let i = 0, len = edges.length; i < len; i++) {
            const [from, chCode, to] = edges[i];
            states.set(from, chCode, to);
        }
        this._states = states;
        this._maxCharCode = maxCharCode;
    }
    nextState(currentState, chCode) {
        if (chCode < 0 || chCode >= this._maxCharCode) {
            return 0 /* State.Invalid */;
        }
        return this._states.get(currentState, chCode);
    }
}
// State machine for http:// or https:// or file://
let _stateMachine = null;
function getStateMachine() {
    if (_stateMachine === null) {
        _stateMachine = new StateMachine([
            [1 /* State.Start */, 104 /* CharCode.h */, 2 /* State.H */],
            [1 /* State.Start */, 72 /* CharCode.H */, 2 /* State.H */],
            [1 /* State.Start */, 102 /* CharCode.f */, 6 /* State.F */],
            [1 /* State.Start */, 70 /* CharCode.F */, 6 /* State.F */],
            [2 /* State.H */, 116 /* CharCode.t */, 3 /* State.HT */],
            [2 /* State.H */, 84 /* CharCode.T */, 3 /* State.HT */],
            [3 /* State.HT */, 116 /* CharCode.t */, 4 /* State.HTT */],
            [3 /* State.HT */, 84 /* CharCode.T */, 4 /* State.HTT */],
            [4 /* State.HTT */, 112 /* CharCode.p */, 5 /* State.HTTP */],
            [4 /* State.HTT */, 80 /* CharCode.P */, 5 /* State.HTTP */],
            [5 /* State.HTTP */, 115 /* CharCode.s */, 9 /* State.BeforeColon */],
            [5 /* State.HTTP */, 83 /* CharCode.S */, 9 /* State.BeforeColon */],
            [5 /* State.HTTP */, 58 /* CharCode.Colon */, 10 /* State.AfterColon */],
            [6 /* State.F */, 105 /* CharCode.i */, 7 /* State.FI */],
            [6 /* State.F */, 73 /* CharCode.I */, 7 /* State.FI */],
            [7 /* State.FI */, 108 /* CharCode.l */, 8 /* State.FIL */],
            [7 /* State.FI */, 76 /* CharCode.L */, 8 /* State.FIL */],
            [8 /* State.FIL */, 101 /* CharCode.e */, 9 /* State.BeforeColon */],
            [8 /* State.FIL */, 69 /* CharCode.E */, 9 /* State.BeforeColon */],
            [9 /* State.BeforeColon */, 58 /* CharCode.Colon */, 10 /* State.AfterColon */],
            [10 /* State.AfterColon */, 47 /* CharCode.Slash */, 11 /* State.AlmostThere */],
            [11 /* State.AlmostThere */, 47 /* CharCode.Slash */, 12 /* State.End */],
        ]);
    }
    return _stateMachine;
}
let _classifier = null;
function getClassifier() {
    if (_classifier === null) {
        _classifier = new _core_characterClassifier_js__WEBPACK_IMPORTED_MODULE_0__/* .CharacterClassifier */ .N(0 /* CharacterClass.None */);
        // allow-any-unicode-next-line
        const FORCE_TERMINATION_CHARACTERS = ' \t<>\'\"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…';
        for (let i = 0; i < FORCE_TERMINATION_CHARACTERS.length; i++) {
            _classifier.set(FORCE_TERMINATION_CHARACTERS.charCodeAt(i), 1 /* CharacterClass.ForceTermination */);
        }
        const CANNOT_END_WITH_CHARACTERS = '.,;:';
        for (let i = 0; i < CANNOT_END_WITH_CHARACTERS.length; i++) {
            _classifier.set(CANNOT_END_WITH_CHARACTERS.charCodeAt(i), 2 /* CharacterClass.CannotEndIn */);
        }
    }
    return _classifier;
}
class LinkComputer {
    static _createLink(classifier, line, lineNumber, linkBeginIndex, linkEndIndex) {
        // Do not allow to end link in certain characters...
        let lastIncludedCharIndex = linkEndIndex - 1;
        do {
            const chCode = line.charCodeAt(lastIncludedCharIndex);
            const chClass = classifier.get(chCode);
            if (chClass !== 2 /* CharacterClass.CannotEndIn */) {
                break;
            }
            lastIncludedCharIndex--;
        } while (lastIncludedCharIndex > linkBeginIndex);
        // Handle links enclosed in parens, square brackets and curlys.
        if (linkBeginIndex > 0) {
            const charCodeBeforeLink = line.charCodeAt(linkBeginIndex - 1);
            const lastCharCodeInLink = line.charCodeAt(lastIncludedCharIndex);
            if ((charCodeBeforeLink === 40 /* CharCode.OpenParen */ && lastCharCodeInLink === 41 /* CharCode.CloseParen */)
                || (charCodeBeforeLink === 91 /* CharCode.OpenSquareBracket */ && lastCharCodeInLink === 93 /* CharCode.CloseSquareBracket */)
                || (charCodeBeforeLink === 123 /* CharCode.OpenCurlyBrace */ && lastCharCodeInLink === 125 /* CharCode.CloseCurlyBrace */)) {
                // Do not end in ) if ( is before the link start
                // Do not end in ] if [ is before the link start
                // Do not end in } if { is before the link start
                lastIncludedCharIndex--;
            }
        }
        return {
            range: {
                startLineNumber: lineNumber,
                startColumn: linkBeginIndex + 1,
                endLineNumber: lineNumber,
                endColumn: lastIncludedCharIndex + 2
            },
            url: line.substring(linkBeginIndex, lastIncludedCharIndex + 1)
        };
    }
    static computeLinks(model, stateMachine = getStateMachine()) {
        const classifier = getClassifier();
        const result = [];
        for (let i = 1, lineCount = model.getLineCount(); i <= lineCount; i++) {
            const line = model.getLineContent(i);
            const len = line.length;
            let j = 0;
            let linkBeginIndex = 0;
            let linkBeginChCode = 0;
            let state = 1 /* State.Start */;
            let hasOpenParens = false;
            let hasOpenSquareBracket = false;
            let inSquareBrackets = false;
            let hasOpenCurlyBracket = false;
            while (j < len) {
                let resetStateMachine = false;
                const chCode = line.charCodeAt(j);
                if (state === 13 /* State.Accept */) {
                    let chClass;
                    switch (chCode) {
                        case 40 /* CharCode.OpenParen */:
                            hasOpenParens = true;
                            chClass = 0 /* CharacterClass.None */;
                            break;
                        case 41 /* CharCode.CloseParen */:
                            chClass = (hasOpenParens ? 0 /* CharacterClass.None */ : 1 /* CharacterClass.ForceTermination */);
                            break;
                        case 91 /* CharCode.OpenSquareBracket */:
                            inSquareBrackets = true;
                            hasOpenSquareBracket = true;
                            chClass = 0 /* CharacterClass.None */;
                            break;
                        case 93 /* CharCode.CloseSquareBracket */:
                            inSquareBrackets = false;
                            chClass = (hasOpenSquareBracket ? 0 /* CharacterClass.None */ : 1 /* CharacterClass.ForceTermination */);
                            break;
                        case 123 /* CharCode.OpenCurlyBrace */:
                            hasOpenCurlyBracket = true;
                            chClass = 0 /* CharacterClass.None */;
                            break;
                        case 125 /* CharCode.CloseCurlyBrace */:
                            chClass = (hasOpenCurlyBracket ? 0 /* CharacterClass.None */ : 1 /* CharacterClass.ForceTermination */);
                            break;
                        // The following three rules make it that ' or " or ` are allowed inside links
                        // only if the link is wrapped by some other quote character
                        case 39 /* CharCode.SingleQuote */:
                        case 34 /* CharCode.DoubleQuote */:
                        case 96 /* CharCode.BackTick */:
                            if (linkBeginChCode === chCode) {
                                chClass = 1 /* CharacterClass.ForceTermination */;
                            }
                            else if (linkBeginChCode === 39 /* CharCode.SingleQuote */ || linkBeginChCode === 34 /* CharCode.DoubleQuote */ || linkBeginChCode === 96 /* CharCode.BackTick */) {
                                chClass = 0 /* CharacterClass.None */;
                            }
                            else {
                                chClass = 1 /* CharacterClass.ForceTermination */;
                            }
                            break;
                        case 42 /* CharCode.Asterisk */:
                            // `*` terminates a link if the link began with `*`
                            chClass = (linkBeginChCode === 42 /* CharCode.Asterisk */) ? 1 /* CharacterClass.ForceTermination */ : 0 /* CharacterClass.None */;
                            break;
                        case 124 /* CharCode.Pipe */:
                            // `|` terminates a link if the link began with `|`
                            chClass = (linkBeginChCode === 124 /* CharCode.Pipe */) ? 1 /* CharacterClass.ForceTermination */ : 0 /* CharacterClass.None */;
                            break;
                        case 32 /* CharCode.Space */:
                            // ` ` allow space in between [ and ]
                            chClass = (inSquareBrackets ? 0 /* CharacterClass.None */ : 1 /* CharacterClass.ForceTermination */);
                            break;
                        default:
                            chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* CharacterClass.ForceTermination */) {
                        result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, j));
                        resetStateMachine = true;
                    }
                }
                else if (state === 12 /* State.End */) {
                    let chClass;
                    if (chCode === 91 /* CharCode.OpenSquareBracket */) {
                        // Allow for the authority part to contain ipv6 addresses which contain [ and ]
                        hasOpenSquareBracket = true;
                        chClass = 0 /* CharacterClass.None */;
                    }
                    else {
                        chClass = classifier.get(chCode);
                    }
                    // Check if character terminates link
                    if (chClass === 1 /* CharacterClass.ForceTermination */) {
                        resetStateMachine = true;
                    }
                    else {
                        state = 13 /* State.Accept */;
                    }
                }
                else {
                    state = stateMachine.nextState(state, chCode);
                    if (state === 0 /* State.Invalid */) {
                        resetStateMachine = true;
                    }
                }
                if (resetStateMachine) {
                    state = 1 /* State.Start */;
                    hasOpenParens = false;
                    hasOpenSquareBracket = false;
                    hasOpenCurlyBracket = false;
                    // Record where the link started
                    linkBeginIndex = j + 1;
                    linkBeginChCode = chCode;
                }
                j++;
            }
            if (state === 13 /* State.Accept */) {
                result.push(LinkComputer._createLink(classifier, line, i, linkBeginIndex, len));
            }
        }
        return result;
    }
}
/**
 * Returns an array of all links contains in the provided
 * document. *Note* that this operation is computational
 * expensive and should not run in the UI thread.
 */
function computeLinks(model) {
    if (!model || typeof model.getLineCount !== 'function' || typeof model.getLineContent !== 'function') {
        // Unknown caller!
        return [];
    }
    return LinkComputer.computeLinks(model);
}


/***/ }),

/***/ 96038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bd: function() { return /* binding */ PLAINTEXT_LANGUAGE_ID; },
/* harmony export */   dQ: function() { return /* binding */ ModesRegistry; }
/* harmony export */ });
/* unused harmony exports Extensions, EditorModesRegistry, PLAINTEXT_EXTENSION */
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72015);
/* harmony import */ var _base_common_mime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13074);
/* harmony import */ var _platform_configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85118);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





// Define extension point ids
const Extensions = {
    ModesRegistry: 'editor.modesRegistry'
};
class EditorModesRegistry {
    constructor() {
        this._onDidChangeLanguages = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
        this.onDidChangeLanguages = this._onDidChangeLanguages.event;
        this._languages = [];
    }
    registerLanguage(def) {
        this._languages.push(def);
        this._onDidChangeLanguages.fire(undefined);
        return {
            dispose: () => {
                for (let i = 0, len = this._languages.length; i < len; i++) {
                    if (this._languages[i] === def) {
                        this._languages.splice(i, 1);
                        return;
                    }
                }
            }
        };
    }
    getLanguages() {
        return this._languages;
    }
}
const ModesRegistry = new EditorModesRegistry();
_platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_2__/* .Registry */ .B.add(Extensions.ModesRegistry, ModesRegistry);
const PLAINTEXT_LANGUAGE_ID = 'plaintext';
const PLAINTEXT_EXTENSION = '.txt';
ModesRegistry.registerLanguage({
    id: PLAINTEXT_LANGUAGE_ID,
    extensions: [PLAINTEXT_EXTENSION],
    aliases: [_nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('plainText.alias', "Plain Text"), 'text'],
    mimetypes: [_base_common_mime_js__WEBPACK_IMPORTED_MODULE_3__/* .Mimes */ .v.text]
});
_platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_2__/* .Registry */ .B.as(_platform_configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .Extensions */ .IP.Configuration)
    .registerDefaultConfigurations([{
        overrides: {
            '[plaintext]': {
                'editor.unicodeHighlight.ambiguousCharacters': false,
                'editor.unicodeHighlight.invisibleCharacters': false
            }
        }
    }]);


/***/ }),

/***/ 973:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dy: function() { return /* binding */ nullTokenizeEncoded; },
/* harmony export */   Ri: function() { return /* binding */ nullTokenize; },
/* harmony export */   TJ: function() { return /* binding */ NullState; }
/* harmony export */ });
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58606);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const NullState = new class {
    clone() {
        return this;
    }
    equals(other) {
        return (this === other);
    }
};
function nullTokenize(languageId, state) {
    return new _languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationResult */ .hG([new _languages_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(0, '', languageId)], state);
}
function nullTokenizeEncoded(languageId, state) {
    const tokens = new Uint32Array(2);
    tokens[0] = 0;
    tokens[1] = ((languageId << 0 /* MetadataConsts.LANGUAGEID_OFFSET */)
        | (0 /* StandardTokenType.Other */ << 8 /* MetadataConsts.TOKEN_TYPE_OFFSET */)
        | (0 /* FontStyle.None */ << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
        | (1 /* ColorId.DefaultForeground */ << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
        | (2 /* ColorId.DefaultBackground */ << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
    return new _languages_js__WEBPACK_IMPORTED_MODULE_0__/* .EncodedTokenizationResult */ .DI(tokens, state === null ? NullState : state);
}


/***/ }),

/***/ 46429:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bu: function() { return /* binding */ ignoreBracketsInToken; },
/* harmony export */   wH: function() { return /* binding */ createScopedLineTokens; }
/* harmony export */ });
/* unused harmony export ScopedLineTokens */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createScopedLineTokens(context, offset) {
    const tokenCount = context.getCount();
    const tokenIndex = context.findTokenIndexAtOffset(offset);
    const desiredLanguageId = context.getLanguageId(tokenIndex);
    let lastTokenIndex = tokenIndex;
    while (lastTokenIndex + 1 < tokenCount && context.getLanguageId(lastTokenIndex + 1) === desiredLanguageId) {
        lastTokenIndex++;
    }
    let firstTokenIndex = tokenIndex;
    while (firstTokenIndex > 0 && context.getLanguageId(firstTokenIndex - 1) === desiredLanguageId) {
        firstTokenIndex--;
    }
    return new ScopedLineTokens(context, desiredLanguageId, firstTokenIndex, lastTokenIndex + 1, context.getStartOffset(firstTokenIndex), context.getEndOffset(lastTokenIndex));
}
class ScopedLineTokens {
    constructor(actual, languageId, firstTokenIndex, lastTokenIndex, firstCharOffset, lastCharOffset) {
        this._scopedLineTokensBrand = undefined;
        this._actual = actual;
        this.languageId = languageId;
        this._firstTokenIndex = firstTokenIndex;
        this._lastTokenIndex = lastTokenIndex;
        this.firstCharOffset = firstCharOffset;
        this._lastCharOffset = lastCharOffset;
    }
    getLineContent() {
        const actualLineContent = this._actual.getLineContent();
        return actualLineContent.substring(this.firstCharOffset, this._lastCharOffset);
    }
    getActualLineContentBefore(offset) {
        const actualLineContent = this._actual.getLineContent();
        return actualLineContent.substring(0, this.firstCharOffset + offset);
    }
    getTokenCount() {
        return this._lastTokenIndex - this._firstTokenIndex;
    }
    findTokenIndexAtOffset(offset) {
        return this._actual.findTokenIndexAtOffset(offset + this.firstCharOffset) - this._firstTokenIndex;
    }
    getStandardTokenType(tokenIndex) {
        return this._actual.getStandardTokenType(tokenIndex + this._firstTokenIndex);
    }
}
function ignoreBracketsInToken(standardTokenType) {
    return (standardTokenType & 3 /* IgnoreBracketsInTokens.value */) !== 0;
}


/***/ }),

/***/ 59495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ BasicInplaceReplace; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class BasicInplaceReplace {
    constructor() {
        this._defaultValueSet = [
            ['true', 'false'],
            ['True', 'False'],
            ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'],
            ['public', 'protected', 'private'],
        ];
    }
    navigateValueSet(range1, text1, range2, text2, up) {
        if (range1 && text1) {
            const result = this.doNavigateValueSet(text1, up);
            if (result) {
                return {
                    range: range1,
                    value: result
                };
            }
        }
        if (range2 && text2) {
            const result = this.doNavigateValueSet(text2, up);
            if (result) {
                return {
                    range: range2,
                    value: result
                };
            }
        }
        return null;
    }
    doNavigateValueSet(text, up) {
        const numberResult = this.numberReplace(text, up);
        if (numberResult !== null) {
            return numberResult;
        }
        return this.textReplace(text, up);
    }
    numberReplace(value, up) {
        const precision = Math.pow(10, value.length - (value.lastIndexOf('.') + 1));
        let n1 = Number(value);
        const n2 = parseFloat(value);
        if (!isNaN(n1) && !isNaN(n2) && n1 === n2) {
            if (n1 === 0 && !up) {
                return null; // don't do negative
                //			} else if(n1 === 9 && up) {
                //				return null; // don't insert 10 into a number
            }
            else {
                n1 = Math.floor(n1 * precision);
                n1 += up ? precision : -precision;
                return String(n1 / precision);
            }
        }
        return null;
    }
    textReplace(value, up) {
        return this.valueSetsReplace(this._defaultValueSet, value, up);
    }
    valueSetsReplace(valueSets, value, up) {
        let result = null;
        for (let i = 0, len = valueSets.length; result === null && i < len; i++) {
            result = this.valueSetReplace(valueSets[i], value, up);
        }
        return result;
    }
    valueSetReplace(valueSet, value, up) {
        let idx = valueSet.indexOf(value);
        if (idx >= 0) {
            idx += up ? +1 : -1;
            if (idx < 0) {
                idx = valueSet.length - 1;
            }
            else {
                idx %= valueSet.length;
            }
            return valueSet[idx];
        }
        return null;
    }
}
BasicInplaceReplace.INSTANCE = new BasicInplaceReplace();


/***/ }),

/***/ 19355:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EA: function() { return /* binding */ RichEditBrackets; },
/* harmony export */   Vr: function() { return /* binding */ BracketsUtils; }
/* harmony export */ });
/* unused harmony export RichEditBracket */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28103);
/* harmony import */ var _core_range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76584);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * Represents a grouping of colliding bracket pairs.
 *
 * Most of the times this contains a single bracket pair,
 * but sometimes this contains multiple bracket pairs in cases
 * where the same string appears as a closing bracket for multiple
 * bracket pairs, or the same string appears an opening bracket for
 * multiple bracket pairs.
 *
 * e.g. of a group containing a single pair:
 *   open: ['{'], close: ['}']
 *
 * e.g. of a group containing multiple pairs:
 *   open: ['if', 'for'], close: ['end', 'end']
 */
class RichEditBracket {
    constructor(languageId, index, open, close, forwardRegex, reversedRegex) {
        this._richEditBracketBrand = undefined;
        this.languageId = languageId;
        this.index = index;
        this.open = open;
        this.close = close;
        this.forwardRegex = forwardRegex;
        this.reversedRegex = reversedRegex;
        this._openSet = RichEditBracket._toSet(this.open);
        this._closeSet = RichEditBracket._toSet(this.close);
    }
    /**
     * Check if the provided `text` is an open bracket in this group.
     */
    isOpen(text) {
        return this._openSet.has(text);
    }
    /**
     * Check if the provided `text` is a close bracket in this group.
     */
    isClose(text) {
        return this._closeSet.has(text);
    }
    static _toSet(arr) {
        const result = new Set();
        for (const element of arr) {
            result.add(element);
        }
        return result;
    }
}
/**
 * Groups together brackets that have equal open or close sequences.
 *
 * For example, if the following brackets are defined:
 *   ['IF','END']
 *   ['for','end']
 *   ['{','}']
 *
 * Then the grouped brackets would be:
 *   { open: ['if', 'for'], close: ['end', 'end'] }
 *   { open: ['{'], close: ['}'] }
 *
 */
function groupFuzzyBrackets(brackets) {
    const N = brackets.length;
    brackets = brackets.map(b => [b[0].toLowerCase(), b[1].toLowerCase()]);
    const group = [];
    for (let i = 0; i < N; i++) {
        group[i] = i;
    }
    const areOverlapping = (a, b) => {
        const [aOpen, aClose] = a;
        const [bOpen, bClose] = b;
        return (aOpen === bOpen || aOpen === bClose || aClose === bOpen || aClose === bClose);
    };
    const mergeGroups = (g1, g2) => {
        const newG = Math.min(g1, g2);
        const oldG = Math.max(g1, g2);
        for (let i = 0; i < N; i++) {
            if (group[i] === oldG) {
                group[i] = newG;
            }
        }
    };
    // group together brackets that have the same open or the same close sequence
    for (let i = 0; i < N; i++) {
        const a = brackets[i];
        for (let j = i + 1; j < N; j++) {
            const b = brackets[j];
            if (areOverlapping(a, b)) {
                mergeGroups(group[i], group[j]);
            }
        }
    }
    const result = [];
    for (let g = 0; g < N; g++) {
        const currentOpen = [];
        const currentClose = [];
        for (let i = 0; i < N; i++) {
            if (group[i] === g) {
                const [open, close] = brackets[i];
                currentOpen.push(open);
                currentClose.push(close);
            }
        }
        if (currentOpen.length > 0) {
            result.push({
                open: currentOpen,
                close: currentClose
            });
        }
    }
    return result;
}
class RichEditBrackets {
    constructor(languageId, _brackets) {
        this._richEditBracketsBrand = undefined;
        const brackets = groupFuzzyBrackets(_brackets);
        this.brackets = brackets.map((b, index) => {
            return new RichEditBracket(languageId, index, b.open, b.close, getRegexForBracketPair(b.open, b.close, brackets, index), getReversedRegexForBracketPair(b.open, b.close, brackets, index));
        });
        this.forwardRegex = getRegexForBrackets(this.brackets);
        this.reversedRegex = getReversedRegexForBrackets(this.brackets);
        this.textIsBracket = {};
        this.textIsOpenBracket = {};
        this.maxBracketLength = 0;
        for (const bracket of this.brackets) {
            for (const open of bracket.open) {
                this.textIsBracket[open] = bracket;
                this.textIsOpenBracket[open] = true;
                this.maxBracketLength = Math.max(this.maxBracketLength, open.length);
            }
            for (const close of bracket.close) {
                this.textIsBracket[close] = bracket;
                this.textIsOpenBracket[close] = false;
                this.maxBracketLength = Math.max(this.maxBracketLength, close.length);
            }
        }
    }
}
function collectSuperstrings(str, brackets, currentIndex, dest) {
    for (let i = 0, len = brackets.length; i < len; i++) {
        if (i === currentIndex) {
            continue;
        }
        const bracket = brackets[i];
        for (const open of bracket.open) {
            if (open.indexOf(str) >= 0) {
                dest.push(open);
            }
        }
        for (const close of bracket.close) {
            if (close.indexOf(str) >= 0) {
                dest.push(close);
            }
        }
    }
}
function lengthcmp(a, b) {
    return a.length - b.length;
}
function unique(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const result = [];
    const seen = new Set();
    for (const element of arr) {
        if (seen.has(element)) {
            continue;
        }
        result.push(element);
        seen.add(element);
    }
    return result;
}
/**
 * Create a regular expression that can be used to search forward in a piece of text
 * for a group of bracket pairs. But this regex must be built in a way in which
 * it is aware of the other bracket pairs defined for the language.
 *
 * For example, if a language contains the following bracket pairs:
 *   ['begin', 'end']
 *   ['if', 'end if']
 * The two bracket pairs do not collide because no open or close brackets are equal.
 * So the function getRegexForBracketPair is called twice, once with
 * the ['begin'], ['end'] group consisting of one bracket pair, and once with
 * the ['if'], ['end if'] group consiting of the other bracket pair.
 *
 * But there could be a situation where an occurrence of 'end if' is mistaken
 * for an occurrence of 'end'.
 *
 * Therefore, for the bracket pair ['begin', 'end'], the regex will also
 * target 'end if'. The regex will be something like:
 *   /(\bend if\b)|(\bend\b)|(\bif\b)/
 *
 * The regex also searches for "superstrings" (other brackets that might be mistaken with the current bracket).
 *
 */
function getRegexForBracketPair(open, close, brackets, currentIndex) {
    // search in all brackets for other brackets that are a superstring of these brackets
    let pieces = [];
    pieces = pieces.concat(open);
    pieces = pieces.concat(close);
    for (let i = 0, len = pieces.length; i < len; i++) {
        collectSuperstrings(pieces[i], brackets, currentIndex, pieces);
    }
    pieces = unique(pieces);
    pieces.sort(lengthcmp);
    pieces.reverse();
    return createBracketOrRegExp(pieces);
}
/**
 * Matching a regular expression in JS can only be done "forwards". So JS offers natively only
 * methods to find the first match of a regex in a string. But sometimes, it is useful to
 * find the last match of a regex in a string. For such a situation, a nice solution is to
 * simply reverse the string and then search for a reversed regex.
 *
 * This function also has the fine details of `getRegexForBracketPair`. For the same example
 * given above, the regex produced here would look like:
 *   /(\bfi dne\b)|(\bdne\b)|(\bfi\b)/
 */
function getReversedRegexForBracketPair(open, close, brackets, currentIndex) {
    // search in all brackets for other brackets that are a superstring of these brackets
    let pieces = [];
    pieces = pieces.concat(open);
    pieces = pieces.concat(close);
    for (let i = 0, len = pieces.length; i < len; i++) {
        collectSuperstrings(pieces[i], brackets, currentIndex, pieces);
    }
    pieces = unique(pieces);
    pieces.sort(lengthcmp);
    pieces.reverse();
    return createBracketOrRegExp(pieces.map(toReversedString));
}
/**
 * Creates a regular expression that targets all bracket pairs.
 *
 * e.g. for the bracket pairs:
 *  ['{','}']
 *  ['begin,'end']
 *  ['for','end']
 * the regex would look like:
 *  /(\{)|(\})|(\bbegin\b)|(\bend\b)|(\bfor\b)/
 */
function getRegexForBrackets(brackets) {
    let pieces = [];
    for (const bracket of brackets) {
        for (const open of bracket.open) {
            pieces.push(open);
        }
        for (const close of bracket.close) {
            pieces.push(close);
        }
    }
    pieces = unique(pieces);
    return createBracketOrRegExp(pieces);
}
/**
 * Matching a regular expression in JS can only be done "forwards". So JS offers natively only
 * methods to find the first match of a regex in a string. But sometimes, it is useful to
 * find the last match of a regex in a string. For such a situation, a nice solution is to
 * simply reverse the string and then search for a reversed regex.
 *
 * e.g. for the bracket pairs:
 *  ['{','}']
 *  ['begin,'end']
 *  ['for','end']
 * the regex would look like:
 *  /(\{)|(\})|(\bnigeb\b)|(\bdne\b)|(\brof\b)/
 */
function getReversedRegexForBrackets(brackets) {
    let pieces = [];
    for (const bracket of brackets) {
        for (const open of bracket.open) {
            pieces.push(open);
        }
        for (const close of bracket.close) {
            pieces.push(close);
        }
    }
    pieces = unique(pieces);
    return createBracketOrRegExp(pieces.map(toReversedString));
}
function prepareBracketForRegExp(str) {
    // This bracket pair uses letters like e.g. "begin" - "end"
    const insertWordBoundaries = (/^[\w ]+$/.test(str));
    str = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExpCharacters */ .ec(str);
    return (insertWordBoundaries ? `\\b${str}\\b` : str);
}
function createBracketOrRegExp(pieces) {
    const regexStr = `(${pieces.map(prepareBracketForRegExp).join(')|(')})`;
    return _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .createRegExp */ .GF(regexStr, true);
}
const toReversedString = (function () {
    function reverse(str) {
        // create a Uint16Array and then use a TextDecoder to create a string
        const arr = new Uint16Array(str.length);
        let offset = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            arr[offset++] = str.charCodeAt(i);
        }
        return _core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_1__/* .getPlatformTextDecoder */ .oe().decode(arr);
    }
    let lastInput = null;
    let lastOutput = null;
    return function toReversedString(str) {
        if (lastInput !== str) {
            lastInput = str;
            lastOutput = reverse(lastInput);
        }
        return lastOutput;
    };
})();
class BracketsUtils {
    static _findPrevBracketInText(reversedBracketRegex, lineNumber, reversedText, offset) {
        const m = reversedText.match(reversedBracketRegex);
        if (!m) {
            return null;
        }
        const matchOffset = reversedText.length - (m.index || 0);
        const matchLength = m[0].length;
        const absoluteMatchOffset = offset + matchOffset;
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineNumber, absoluteMatchOffset - matchLength + 1, lineNumber, absoluteMatchOffset + 1);
    }
    static findPrevBracketInRange(reversedBracketRegex, lineNumber, lineText, startOffset, endOffset) {
        // Because JS does not support backwards regex search, we search forwards in a reversed string with a reversed regex ;)
        const reversedLineText = toReversedString(lineText);
        const reversedSubstr = reversedLineText.substring(lineText.length - endOffset, lineText.length - startOffset);
        return this._findPrevBracketInText(reversedBracketRegex, lineNumber, reversedSubstr, startOffset);
    }
    static findNextBracketInText(bracketRegex, lineNumber, text, offset) {
        const m = text.match(bracketRegex);
        if (!m) {
            return null;
        }
        const matchOffset = m.index || 0;
        const matchLength = m[0].length;
        if (matchLength === 0) {
            return null;
        }
        const absoluteMatchOffset = offset + matchOffset;
        return new _core_range_js__WEBPACK_IMPORTED_MODULE_2__/* .Range */ .e(lineNumber, absoluteMatchOffset + 1, lineNumber, absoluteMatchOffset + 1 + matchLength);
    }
    static findNextBracketInRange(bracketRegex, lineNumber, lineText, startOffset, endOffset) {
        const substr = lineText.substring(startOffset, endOffset);
        return this.findNextBracketInText(bracketRegex, lineNumber, substr, startOffset);
    }
}


/***/ }),

/***/ 2638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   si: function() { return /* binding */ TokenTheme; },
/* harmony export */   yr: function() { return /* binding */ generateTokensCSSForColorMap; }
/* harmony export */ });
/* unused harmony exports ParsedTokenThemeRule, parseTokenTheme, ColorMap, toStandardTokenType, strcmp, ThemeTrieElementRule, ThemeTrieElement */
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2157);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class ParsedTokenThemeRule {
    constructor(token, index, fontStyle, foreground, background) {
        this._parsedThemeRuleBrand = undefined;
        this.token = token;
        this.index = index;
        this.fontStyle = fontStyle;
        this.foreground = foreground;
        this.background = background;
    }
}
/**
 * Parse a raw theme into rules.
 */
function parseTokenTheme(source) {
    if (!source || !Array.isArray(source)) {
        return [];
    }
    const result = [];
    let resultLen = 0;
    for (let i = 0, len = source.length; i < len; i++) {
        const entry = source[i];
        let fontStyle = -1 /* FontStyle.NotSet */;
        if (typeof entry.fontStyle === 'string') {
            fontStyle = 0 /* FontStyle.None */;
            const segments = entry.fontStyle.split(' ');
            for (let j = 0, lenJ = segments.length; j < lenJ; j++) {
                const segment = segments[j];
                switch (segment) {
                    case 'italic':
                        fontStyle = fontStyle | 1 /* FontStyle.Italic */;
                        break;
                    case 'bold':
                        fontStyle = fontStyle | 2 /* FontStyle.Bold */;
                        break;
                    case 'underline':
                        fontStyle = fontStyle | 4 /* FontStyle.Underline */;
                        break;
                    case 'strikethrough':
                        fontStyle = fontStyle | 8 /* FontStyle.Strikethrough */;
                        break;
                }
            }
        }
        let foreground = null;
        if (typeof entry.foreground === 'string') {
            foreground = entry.foreground;
        }
        let background = null;
        if (typeof entry.background === 'string') {
            background = entry.background;
        }
        result[resultLen++] = new ParsedTokenThemeRule(entry.token || '', i, fontStyle, foreground, background);
    }
    return result;
}
/**
 * Resolve rules (i.e. inheritance).
 */
function resolveParsedTokenThemeRules(parsedThemeRules, customTokenColors) {
    // Sort rules lexicographically, and then by index if necessary
    parsedThemeRules.sort((a, b) => {
        const r = strcmp(a.token, b.token);
        if (r !== 0) {
            return r;
        }
        return a.index - b.index;
    });
    // Determine defaults
    let defaultFontStyle = 0 /* FontStyle.None */;
    let defaultForeground = '000000';
    let defaultBackground = 'ffffff';
    while (parsedThemeRules.length >= 1 && parsedThemeRules[0].token === '') {
        const incomingDefaults = parsedThemeRules.shift();
        if (incomingDefaults.fontStyle !== -1 /* FontStyle.NotSet */) {
            defaultFontStyle = incomingDefaults.fontStyle;
        }
        if (incomingDefaults.foreground !== null) {
            defaultForeground = incomingDefaults.foreground;
        }
        if (incomingDefaults.background !== null) {
            defaultBackground = incomingDefaults.background;
        }
    }
    const colorMap = new ColorMap();
    // start with token colors from custom token themes
    for (const color of customTokenColors) {
        colorMap.getId(color);
    }
    const foregroundColorId = colorMap.getId(defaultForeground);
    const backgroundColorId = colorMap.getId(defaultBackground);
    const defaults = new ThemeTrieElementRule(defaultFontStyle, foregroundColorId, backgroundColorId);
    const root = new ThemeTrieElement(defaults);
    for (let i = 0, len = parsedThemeRules.length; i < len; i++) {
        const rule = parsedThemeRules[i];
        root.insert(rule.token, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new TokenTheme(colorMap, root);
}
const colorRegExp = /^#?([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})?$/;
class ColorMap {
    constructor() {
        this._lastColorId = 0;
        this._id2color = [];
        this._color2id = new Map();
    }
    getId(color) {
        if (color === null) {
            return 0;
        }
        const match = color.match(colorRegExp);
        if (!match) {
            throw new Error('Illegal value for token color: ' + color);
        }
        color = match[1].toUpperCase();
        let value = this._color2id.get(color);
        if (value) {
            return value;
        }
        value = ++this._lastColorId;
        this._color2id.set(color, value);
        this._id2color[value] = _base_common_color_js__WEBPACK_IMPORTED_MODULE_0__/* .Color */ .Il.fromHex('#' + color);
        return value;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
}
class TokenTheme {
    static createFromRawTokenTheme(source, customTokenColors) {
        return this.createFromParsedTokenTheme(parseTokenTheme(source), customTokenColors);
    }
    static createFromParsedTokenTheme(source, customTokenColors) {
        return resolveParsedTokenThemeRules(source, customTokenColors);
    }
    constructor(colorMap, root) {
        this._colorMap = colorMap;
        this._root = root;
        this._cache = new Map();
    }
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    _match(token) {
        return this._root.match(token);
    }
    match(languageId, token) {
        // The cache contains the metadata without the language bits set.
        let result = this._cache.get(token);
        if (typeof result === 'undefined') {
            const rule = this._match(token);
            const standardToken = toStandardTokenType(token);
            result = (rule.metadata
                | (standardToken << 8 /* MetadataConsts.TOKEN_TYPE_OFFSET */)) >>> 0;
            this._cache.set(token, result);
        }
        return (result
            | (languageId << 0 /* MetadataConsts.LANGUAGEID_OFFSET */)) >>> 0;
    }
}
const STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|regexp)\b/;
function toStandardTokenType(tokenType) {
    const m = tokenType.match(STANDARD_TOKEN_TYPE_REGEXP);
    if (!m) {
        return 0 /* StandardTokenType.Other */;
    }
    switch (m[1]) {
        case 'comment':
            return 1 /* StandardTokenType.Comment */;
        case 'string':
            return 2 /* StandardTokenType.String */;
        case 'regex':
            return 3 /* StandardTokenType.RegEx */;
        case 'regexp':
            return 3 /* StandardTokenType.RegEx */;
    }
    throw new Error('Unexpected match for standard token type!');
}
function strcmp(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
class ThemeTrieElementRule {
    constructor(fontStyle, foreground, background) {
        this._themeTrieElementRuleBrand = undefined;
        this._fontStyle = fontStyle;
        this._foreground = foreground;
        this._background = background;
        this.metadata = ((this._fontStyle << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
            | (this._foreground << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
            | (this._background << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
    }
    clone() {
        return new ThemeTrieElementRule(this._fontStyle, this._foreground, this._background);
    }
    acceptOverwrite(fontStyle, foreground, background) {
        if (fontStyle !== -1 /* FontStyle.NotSet */) {
            this._fontStyle = fontStyle;
        }
        if (foreground !== 0 /* ColorId.None */) {
            this._foreground = foreground;
        }
        if (background !== 0 /* ColorId.None */) {
            this._background = background;
        }
        this.metadata = ((this._fontStyle << 11 /* MetadataConsts.FONT_STYLE_OFFSET */)
            | (this._foreground << 15 /* MetadataConsts.FOREGROUND_OFFSET */)
            | (this._background << 24 /* MetadataConsts.BACKGROUND_OFFSET */)) >>> 0;
    }
}
class ThemeTrieElement {
    constructor(mainRule) {
        this._themeTrieElementBrand = undefined;
        this._mainRule = mainRule;
        this._children = new Map();
    }
    match(token) {
        if (token === '') {
            return this._mainRule;
        }
        const dotIndex = token.indexOf('.');
        let head;
        let tail;
        if (dotIndex === -1) {
            head = token;
            tail = '';
        }
        else {
            head = token.substring(0, dotIndex);
            tail = token.substring(dotIndex + 1);
        }
        const child = this._children.get(head);
        if (typeof child !== 'undefined') {
            return child.match(tail);
        }
        return this._mainRule;
    }
    insert(token, fontStyle, foreground, background) {
        if (token === '') {
            // Merge into the main rule
            this._mainRule.acceptOverwrite(fontStyle, foreground, background);
            return;
        }
        const dotIndex = token.indexOf('.');
        let head;
        let tail;
        if (dotIndex === -1) {
            head = token;
            tail = '';
        }
        else {
            head = token.substring(0, dotIndex);
            tail = token.substring(dotIndex + 1);
        }
        let child = this._children.get(head);
        if (typeof child === 'undefined') {
            child = new ThemeTrieElement(this._mainRule.clone());
            this._children.set(head, child);
        }
        child.insert(tail, fontStyle, foreground, background);
    }
}
function generateTokensCSSForColorMap(colorMap) {
    const rules = [];
    for (let i = 1, len = colorMap.length; i < len; i++) {
        const color = colorMap[i];
        rules[i] = `.mtk${i} { color: ${color}; }`;
    }
    rules.push('.mtki { font-style: italic; }');
    rules.push('.mtkb { font-weight: bold; }');
    rules.push('.mtku { text-decoration: underline; text-underline-position: under; }');
    rules.push('.mtks { text-decoration: line-through; }');
    rules.push('.mtks.mtku { text-decoration: underline line-through; text-underline-position: under; }');
    return rules.join('\n');
}


/***/ }),

/***/ 85344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: function() { return /* binding */ tokenizeToString; },
/* harmony export */   Fq: function() { return /* binding */ tokenizeLineToHTML; }
/* harmony export */ });
/* unused harmony export _tokenizeToString */
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23607);
/* harmony import */ var _tokens_lineTokens_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15834);
/* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58606);
/* harmony import */ var _nullTokenize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(973);
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




const fallback = {
    getInitialState: () => _nullTokenize_js__WEBPACK_IMPORTED_MODULE_3__/* .NullState */ .TJ,
    tokenizeEncoded: (buffer, hasEOL, state) => (0,_nullTokenize_js__WEBPACK_IMPORTED_MODULE_3__/* .nullTokenizeEncoded */ .Dy)(0 /* LanguageId.Null */, state)
};
function tokenizeToString(languageService, text, languageId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!languageId) {
            return _tokenizeToString(text, languageService.languageIdCodec, fallback);
        }
        const tokenizationSupport = yield _languages_js__WEBPACK_IMPORTED_MODULE_2__/* .TokenizationRegistry */ .RW.getOrCreate(languageId);
        return _tokenizeToString(text, languageService.languageIdCodec, tokenizationSupport || fallback);
    });
}
function tokenizeLineToHTML(text, viewLineTokens, colorMap, startOffset, endOffset, tabSize, useNbsp) {
    let result = `<div>`;
    let charIndex = startOffset;
    let tabsCharDelta = 0;
    let prevIsSpace = true;
    for (let tokenIndex = 0, tokenCount = viewLineTokens.getCount(); tokenIndex < tokenCount; tokenIndex++) {
        const tokenEndIndex = viewLineTokens.getEndOffset(tokenIndex);
        if (tokenEndIndex <= startOffset) {
            continue;
        }
        let partContent = '';
        for (; charIndex < tokenEndIndex && charIndex < endOffset; charIndex++) {
            const charCode = text.charCodeAt(charIndex);
            switch (charCode) {
                case 9 /* CharCode.Tab */: {
                    let insertSpacesCount = tabSize - (charIndex + tabsCharDelta) % tabSize;
                    tabsCharDelta += insertSpacesCount - 1;
                    while (insertSpacesCount > 0) {
                        if (useNbsp && prevIsSpace) {
                            partContent += '&#160;';
                            prevIsSpace = false;
                        }
                        else {
                            partContent += ' ';
                            prevIsSpace = true;
                        }
                        insertSpacesCount--;
                    }
                    break;
                }
                case 60 /* CharCode.LessThan */:
                    partContent += '&lt;';
                    prevIsSpace = false;
                    break;
                case 62 /* CharCode.GreaterThan */:
                    partContent += '&gt;';
                    prevIsSpace = false;
                    break;
                case 38 /* CharCode.Ampersand */:
                    partContent += '&amp;';
                    prevIsSpace = false;
                    break;
                case 0 /* CharCode.Null */:
                    partContent += '&#00;';
                    prevIsSpace = false;
                    break;
                case 65279 /* CharCode.UTF8_BOM */:
                case 8232 /* CharCode.LINE_SEPARATOR */:
                case 8233 /* CharCode.PARAGRAPH_SEPARATOR */:
                case 133 /* CharCode.NEXT_LINE */:
                    partContent += '\ufffd';
                    prevIsSpace = false;
                    break;
                case 13 /* CharCode.CarriageReturn */:
                    // zero width space, because carriage return would introduce a line break
                    partContent += '&#8203';
                    prevIsSpace = false;
                    break;
                case 32 /* CharCode.Space */:
                    if (useNbsp && prevIsSpace) {
                        partContent += '&#160;';
                        prevIsSpace = false;
                    }
                    else {
                        partContent += ' ';
                        prevIsSpace = true;
                    }
                    break;
                default:
                    partContent += String.fromCharCode(charCode);
                    prevIsSpace = false;
            }
        }
        result += `<span style="${viewLineTokens.getInlineStyle(tokenIndex, colorMap)}">${partContent}</span>`;
        if (tokenEndIndex > endOffset || charIndex >= endOffset) {
            break;
        }
    }
    result += `</div>`;
    return result;
}
function _tokenizeToString(text, languageIdCodec, tokenizationSupport) {
    let result = `<div class="monaco-tokenized-source">`;
    const lines = _base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .splitLines */ .uq(text);
    let currentState = tokenizationSupport.getInitialState();
    for (let i = 0, len = lines.length; i < len; i++) {
        const line = lines[i];
        if (i > 0) {
            result += `<br/>`;
        }
        const tokenizationResult = tokenizationSupport.tokenizeEncoded(line, true, currentState);
        _tokens_lineTokens_js__WEBPACK_IMPORTED_MODULE_1__/* .LineTokens */ .A.convertToEndOffset(tokenizationResult.tokens, line.length);
        const lineTokens = new _tokens_lineTokens_js__WEBPACK_IMPORTED_MODULE_1__/* .LineTokens */ .A(tokenizationResult.tokens, line, languageIdCodec);
        const viewLineTokens = lineTokens.inflate();
        let startOffset = 0;
        for (let j = 0, lenJ = viewLineTokens.getCount(); j < lenJ; j++) {
            const type = viewLineTokens.getClassName(j);
            const endIndex = viewLineTokens.getEndOffset(j);
            result += `<span class="${type}">${_base_common_strings_js__WEBPACK_IMPORTED_MODULE_0__/* .escape */ .YU(line.substring(startOffset, endIndex))}</span>`;
            startOffset = endIndex;
        }
        currentState = tokenizationResult.endState;
    }
    result += `</div>`;
    return result;
}


/***/ })

}]);