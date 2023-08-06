"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-8cdd0eee"],{

/***/ 96898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n.monaco-editor .detected-link,\n.monaco-editor .detected-link-active {\n\ttext-decoration: underline;\n\ttext-underline-position: under;\n}\n\n.monaco-editor .detected-link-active {\n\tcursor: pointer;\n\tcolor: var(--vscode-editorLink-activeForeground) !important;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 72678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LinkDetector: function() { return /* binding */ LinkDetector; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(4950);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(11966);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/resources.js
var resources = __webpack_require__(8506);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/stopwatch.js
var stopwatch = __webpack_require__(61111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(56946);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.css
var links = __webpack_require__(96898);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(links/* default */.Z, options);




       /* harmony default export */ var browser_links = (links/* default */.Z && links/* default */.Z.locals ? links/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js + 2 modules
var textModel = __webpack_require__(96422);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js
var languageFeatureDebounce = __webpack_require__(78745);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js
var link_clickLinkGesture = __webpack_require__(83297);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/model.js
var services_model = __webpack_require__(76774);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/getLinks.js
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










class Link {
    constructor(link, provider) {
        this._link = link;
        this._provider = provider;
    }
    toJSON() {
        return {
            range: this.range,
            url: this.url,
            tooltip: this.tooltip
        };
    }
    get range() {
        return this._link.range;
    }
    get url() {
        return this._link.url;
    }
    get tooltip() {
        return this._link.tooltip;
    }
    resolve(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._link.url) {
                return this._link.url;
            }
            if (typeof this._provider.resolveLink === 'function') {
                return Promise.resolve(this._provider.resolveLink(this._link, token)).then(value => {
                    this._link = value || this._link;
                    if (this._link.url) {
                        // recurse
                        return this.resolve(token);
                    }
                    return Promise.reject(new Error('missing'));
                });
            }
            return Promise.reject(new Error('missing'));
        });
    }
}
class LinksList {
    constructor(tuples) {
        this._disposables = new lifecycle/* DisposableStore */.SL();
        let links = [];
        for (const [list, provider] of tuples) {
            // merge all links
            const newLinks = list.links.map(link => new Link(link, provider));
            links = LinksList._union(links, newLinks);
            // register disposables
            if ((0,lifecycle/* isDisposable */.Wf)(list)) {
                this._disposables.add(list);
            }
        }
        this.links = links;
    }
    dispose() {
        this._disposables.dispose();
        this.links.length = 0;
    }
    static _union(oldLinks, newLinks) {
        // reunite oldLinks with newLinks and remove duplicates
        const result = [];
        let oldIndex;
        let oldLen;
        let newIndex;
        let newLen;
        for (oldIndex = 0, newIndex = 0, oldLen = oldLinks.length, newLen = newLinks.length; oldIndex < oldLen && newIndex < newLen;) {
            const oldLink = oldLinks[oldIndex];
            const newLink = newLinks[newIndex];
            if (range/* Range */.e.areIntersectingOrTouching(oldLink.range, newLink.range)) {
                // Remove the oldLink
                oldIndex++;
                continue;
            }
            const comparisonResult = range/* Range */.e.compareRangesUsingStarts(oldLink.range, newLink.range);
            if (comparisonResult < 0) {
                // oldLink is before
                result.push(oldLink);
                oldIndex++;
            }
            else {
                // newLink is before
                result.push(newLink);
                newIndex++;
            }
        }
        for (; oldIndex < oldLen; oldIndex++) {
            result.push(oldLinks[oldIndex]);
        }
        for (; newIndex < newLen; newIndex++) {
            result.push(newLinks[newIndex]);
        }
        return result;
    }
}
function getLinks(providers, model, token) {
    const lists = [];
    // ask all providers for links in parallel
    const promises = providers.ordered(model).reverse().map((provider, i) => {
        return Promise.resolve(provider.provideLinks(model, token)).then(result => {
            if (result) {
                lists[i] = [result, provider];
            }
        }, errors/* onUnexpectedExternalError */.Cp);
    });
    return Promise.all(promises).then(() => {
        const result = new LinksList((0,arrays/* coalesce */.kX)(lists));
        if (!token.isCancellationRequested) {
            return result;
        }
        result.dispose();
        return new LinksList([]);
    });
}
commands/* CommandsRegistry */.P.registerCommand('_executeLinkProvider', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    let [uri, resolveCount] = args;
    (0,types/* assertType */.p_)(uri instanceof common_uri/* URI */.o);
    if (typeof resolveCount !== 'number') {
        resolveCount = 0;
    }
    const { linkProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    const model = accessor.get(services_model/* IModelService */.q).getModel(uri);
    if (!model) {
        return [];
    }
    const list = yield getLinks(linkProvider, model, cancellation/* CancellationToken */.T.None);
    if (!list) {
        return [];
    }
    // resolve links
    for (let i = 0; i < Math.min(resolveCount, list.links.length); i++) {
        yield list.links[i].resolve(cancellation/* CancellationToken */.T.None);
    }
    const result = list.links.slice(0);
    list.dispose();
    return result;
}));

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js
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
var links_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















let LinkDetector = class LinkDetector extends lifecycle/* Disposable */.JT {
    static get(editor) {
        return editor.getContribution(LinkDetector.ID);
    }
    constructor(editor, openerService, notificationService, languageFeaturesService, languageFeatureDebounceService) {
        super();
        this.editor = editor;
        this.openerService = openerService;
        this.notificationService = notificationService;
        this.languageFeaturesService = languageFeaturesService;
        this.providers = this.languageFeaturesService.linkProvider;
        this.debounceInformation = languageFeatureDebounceService.for(this.providers, 'Links', { min: 1000, max: 4000 });
        this.computeLinks = this._register(new common_async/* RunOnceScheduler */.pY(() => this.computeLinksNow(), 1000));
        this.computePromise = null;
        this.activeLinksList = null;
        this.currentOccurrences = {};
        this.activeLinkDecorationId = null;
        const clickLinkGesture = this._register(new link_clickLinkGesture/* ClickLinkGesture */.yN(editor));
        this._register(clickLinkGesture.onMouseMoveOrRelevantKeyDown(([mouseEvent, keyboardEvent]) => {
            this._onEditorMouseMove(mouseEvent, keyboardEvent);
        }));
        this._register(clickLinkGesture.onExecute((e) => {
            this.onEditorMouseUp(e);
        }));
        this._register(clickLinkGesture.onCancel((e) => {
            this.cleanUpActiveLinkDecoration();
        }));
        this._register(editor.onDidChangeConfiguration((e) => {
            if (!e.hasChanged(68 /* EditorOption.links */)) {
                return;
            }
            // Remove any links (for the getting disabled case)
            this.updateDecorations([]);
            // Stop any computation (for the getting disabled case)
            this.stop();
            // Start computing (for the getting enabled case)
            this.computeLinks.schedule(0);
        }));
        this._register(editor.onDidChangeModelContent((e) => {
            if (!this.editor.hasModel()) {
                return;
            }
            this.computeLinks.schedule(this.debounceInformation.get(this.editor.getModel()));
        }));
        this._register(editor.onDidChangeModel((e) => {
            this.currentOccurrences = {};
            this.activeLinkDecorationId = null;
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this._register(editor.onDidChangeModelLanguage((e) => {
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this._register(this.providers.onDidChange((e) => {
            this.stop();
            this.computeLinks.schedule(0);
        }));
        this.computeLinks.schedule(0);
    }
    computeLinksNow() {
        return links_awaiter(this, void 0, void 0, function* () {
            if (!this.editor.hasModel() || !this.editor.getOption(68 /* EditorOption.links */)) {
                return;
            }
            const model = this.editor.getModel();
            if (!this.providers.has(model)) {
                return;
            }
            if (this.activeLinksList) {
                this.activeLinksList.dispose();
                this.activeLinksList = null;
            }
            this.computePromise = (0,common_async/* createCancelablePromise */.PG)(token => getLinks(this.providers, model, token));
            try {
                const sw = new stopwatch/* StopWatch */.G(false);
                this.activeLinksList = yield this.computePromise;
                this.debounceInformation.update(model, sw.elapsed());
                if (model.isDisposed()) {
                    return;
                }
                this.updateDecorations(this.activeLinksList.links);
            }
            catch (err) {
                (0,errors/* onUnexpectedError */.dL)(err);
            }
            finally {
                this.computePromise = null;
            }
        });
    }
    updateDecorations(links) {
        const useMetaKey = (this.editor.getOption(75 /* EditorOption.multiCursorModifier */) === 'altKey');
        const oldDecorations = [];
        const keys = Object.keys(this.currentOccurrences);
        for (const decorationId of keys) {
            const occurence = this.currentOccurrences[decorationId];
            oldDecorations.push(occurence.decorationId);
        }
        const newDecorations = [];
        if (links) {
            // Not sure why this is sometimes null
            for (const link of links) {
                newDecorations.push(LinkOccurrence.decoration(link, useMetaKey));
            }
        }
        this.editor.changeDecorations((changeAccessor) => {
            const decorations = changeAccessor.deltaDecorations(oldDecorations, newDecorations);
            this.currentOccurrences = {};
            this.activeLinkDecorationId = null;
            for (let i = 0, len = decorations.length; i < len; i++) {
                const occurence = new LinkOccurrence(links[i], decorations[i]);
                this.currentOccurrences[occurence.decorationId] = occurence;
            }
        });
    }
    _onEditorMouseMove(mouseEvent, withKey) {
        const useMetaKey = (this.editor.getOption(75 /* EditorOption.multiCursorModifier */) === 'altKey');
        if (this.isEnabled(mouseEvent, withKey)) {
            this.cleanUpActiveLinkDecoration(); // always remove previous link decoration as their can only be one
            const occurrence = this.getLinkOccurrence(mouseEvent.target.position);
            if (occurrence) {
                this.editor.changeDecorations((changeAccessor) => {
                    occurrence.activate(changeAccessor, useMetaKey);
                    this.activeLinkDecorationId = occurrence.decorationId;
                });
            }
        }
        else {
            this.cleanUpActiveLinkDecoration();
        }
    }
    cleanUpActiveLinkDecoration() {
        const useMetaKey = (this.editor.getOption(75 /* EditorOption.multiCursorModifier */) === 'altKey');
        if (this.activeLinkDecorationId) {
            const occurrence = this.currentOccurrences[this.activeLinkDecorationId];
            if (occurrence) {
                this.editor.changeDecorations((changeAccessor) => {
                    occurrence.deactivate(changeAccessor, useMetaKey);
                });
            }
            this.activeLinkDecorationId = null;
        }
    }
    onEditorMouseUp(mouseEvent) {
        if (!this.isEnabled(mouseEvent)) {
            return;
        }
        const occurrence = this.getLinkOccurrence(mouseEvent.target.position);
        if (!occurrence) {
            return;
        }
        this.openLinkOccurrence(occurrence, mouseEvent.hasSideBySideModifier, true /* from user gesture */);
    }
    openLinkOccurrence(occurrence, openToSide, fromUserGesture = false) {
        if (!this.openerService) {
            return;
        }
        const { link } = occurrence;
        link.resolve(cancellation/* CancellationToken */.T.None).then(uri => {
            // Support for relative file URIs of the shape file://./relativeFile.txt or file:///./relativeFile.txt
            if (typeof uri === 'string' && this.editor.hasModel()) {
                const modelUri = this.editor.getModel().uri;
                if (modelUri.scheme === network/* Schemas */.lg.file && uri.startsWith(`${network/* Schemas */.lg.file}:`)) {
                    const parsedUri = common_uri/* URI */.o.parse(uri);
                    if (parsedUri.scheme === network/* Schemas */.lg.file) {
                        const fsPath = resources/* originalFSPath */.z_(parsedUri);
                        let relativePath = null;
                        if (fsPath.startsWith('/./')) {
                            relativePath = `.${fsPath.substr(1)}`;
                        }
                        else if (fsPath.startsWith('//./')) {
                            relativePath = `.${fsPath.substr(2)}`;
                        }
                        if (relativePath) {
                            uri = resources/* joinPath */.Vo(modelUri, relativePath);
                        }
                    }
                }
            }
            return this.openerService.open(uri, { openToSide, fromUserGesture, allowContributedOpeners: true, allowCommands: true, fromWorkspace: true });
        }, err => {
            const messageOrError = err instanceof Error ? err.message : err;
            // different error cases
            if (messageOrError === 'invalid') {
                this.notificationService.warn(nls/* localize */.NC('invalid.url', 'Failed to open this link because it is not well-formed: {0}', link.url.toString()));
            }
            else if (messageOrError === 'missing') {
                this.notificationService.warn(nls/* localize */.NC('missing.url', 'Failed to open this link because its target is missing.'));
            }
            else {
                (0,errors/* onUnexpectedError */.dL)(err);
            }
        });
    }
    getLinkOccurrence(position) {
        if (!this.editor.hasModel() || !position) {
            return null;
        }
        const decorations = this.editor.getModel().getDecorationsInRange({
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: position.lineNumber,
            endColumn: position.column
        }, 0, true);
        for (const decoration of decorations) {
            const currentOccurrence = this.currentOccurrences[decoration.id];
            if (currentOccurrence) {
                return currentOccurrence;
            }
        }
        return null;
    }
    isEnabled(mouseEvent, withKey) {
        return Boolean((mouseEvent.target.type === 6 /* MouseTargetType.CONTENT_TEXT */)
            && (mouseEvent.hasTriggerModifier || (withKey && withKey.keyCodeIsTriggerKey)));
    }
    stop() {
        var _a;
        this.computeLinks.cancel();
        if (this.activeLinksList) {
            (_a = this.activeLinksList) === null || _a === void 0 ? void 0 : _a.dispose();
            this.activeLinksList = null;
        }
        if (this.computePromise) {
            this.computePromise.cancel();
            this.computePromise = null;
        }
    }
    dispose() {
        super.dispose();
        this.stop();
    }
};
LinkDetector.ID = 'editor.linkDetector';
LinkDetector = __decorate([
    __param(1, common_opener/* IOpenerService */.v4),
    __param(2, notification/* INotificationService */.lT),
    __param(3, languageFeatures/* ILanguageFeaturesService */.p),
    __param(4, languageFeatureDebounce/* ILanguageFeatureDebounceService */.A)
], LinkDetector);
const decoration = {
    general: textModel/* ModelDecorationOptions */.qx.register({
        description: 'detected-link',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        collapseOnReplaceEdit: true,
        inlineClassName: 'detected-link'
    }),
    active: textModel/* ModelDecorationOptions */.qx.register({
        description: 'detected-link-active',
        stickiness: 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */,
        collapseOnReplaceEdit: true,
        inlineClassName: 'detected-link-active'
    })
};
class LinkOccurrence {
    static decoration(link, useMetaKey) {
        return {
            range: link.range,
            options: LinkOccurrence._getOptions(link, useMetaKey, false)
        };
    }
    static _getOptions(link, useMetaKey, isActive) {
        const options = Object.assign({}, (isActive ? decoration.active : decoration.general));
        options.hoverMessage = getHoverMessage(link, useMetaKey);
        return options;
    }
    constructor(link, decorationId) {
        this.link = link;
        this.decorationId = decorationId;
    }
    activate(changeAccessor, useMetaKey) {
        changeAccessor.changeDecorationOptions(this.decorationId, LinkOccurrence._getOptions(this.link, useMetaKey, true));
    }
    deactivate(changeAccessor, useMetaKey) {
        changeAccessor.changeDecorationOptions(this.decorationId, LinkOccurrence._getOptions(this.link, useMetaKey, false));
    }
}
function getHoverMessage(link, useMetaKey) {
    const executeCmd = link.url && /^command:/i.test(link.url.toString());
    const label = link.tooltip
        ? link.tooltip
        : executeCmd
            ? nls/* localize */.NC('links.navigate.executeCmd', 'Execute command')
            : nls/* localize */.NC('links.navigate.follow', 'Follow link');
    const kb = useMetaKey
        ? platform/* isMacintosh */.dz
            ? nls/* localize */.NC('links.navigate.kb.meta.mac', "cmd + click")
            : nls/* localize */.NC('links.navigate.kb.meta', "ctrl + click")
        : platform/* isMacintosh */.dz
            ? nls/* localize */.NC('links.navigate.kb.alt.mac', "option + click")
            : nls/* localize */.NC('links.navigate.kb.alt', "alt + click");
    if (link.url) {
        let nativeLabel = '';
        if (/^command:/i.test(link.url.toString())) {
            // Don't show complete command arguments in the native tooltip
            const match = link.url.toString().match(/^command:([^?#]+)/);
            if (match) {
                const commandId = match[1];
                nativeLabel = nls/* localize */.NC('tooltip.explanation', "Execute command {0}", commandId);
            }
        }
        const hoverMessage = new htmlContent/* MarkdownString */.W5('', true)
            .appendLink(link.url.toString(true).replace(/ /g, '%20'), label, nativeLabel)
            .appendMarkdown(` (${kb})`);
        return hoverMessage;
    }
    else {
        return new htmlContent/* MarkdownString */.W5().appendText(`${label} (${kb})`);
    }
}
class OpenLinkAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.openLink',
            label: nls/* localize */.NC('label', "Open Link"),
            alias: 'Open Link',
            precondition: undefined
        });
    }
    run(accessor, editor) {
        const linkDetector = LinkDetector.get(editor);
        if (!linkDetector) {
            return;
        }
        if (!editor.hasModel()) {
            return;
        }
        const selections = editor.getSelections();
        for (const sel of selections) {
            const link = linkDetector.getLinkOccurrence(sel.getEndPosition());
            if (link) {
                linkDetector.openLinkOccurrence(link, false);
            }
        }
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(LinkDetector.ID, LinkDetector, 1 /* EditorContributionInstantiation.AfterFirstRender */);
(0,editorExtensions/* registerEditorAction */.Qr)(OpenLinkAction);


/***/ })

}]);