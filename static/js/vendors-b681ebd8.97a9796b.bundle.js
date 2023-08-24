"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-b681ebd8"],{

/***/ 31347:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export DocumentSemanticTokensFeature */
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25702);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52266);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99779);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69058);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98764);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26236);
/* harmony import */ var _common_services_semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89660);
/* harmony import */ var _common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75915);
/* harmony import */ var _common_services_languageFeatureDebounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8857);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99264);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6216);
/* harmony import */ var _common_services_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67292);
/* harmony import */ var _common_editorFeatures_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56249);
/* harmony import */ var _common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72750);
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















let DocumentSemanticTokensFeature = class DocumentSemanticTokensFeature extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(semanticTokensStylingService, modelService, themeService, configurationService, languageFeatureDebounceService, languageFeaturesService) {
        super();
        this._watchers = Object.create(null);
        const register = (model) => {
            this._watchers[model.uri.toString()] = new ModelSemanticColoring(model, semanticTokensStylingService, themeService, languageFeatureDebounceService, languageFeaturesService);
        };
        const deregister = (model, modelSemanticColoring) => {
            modelSemanticColoring.dispose();
            delete this._watchers[model.uri.toString()];
        };
        const handleSettingOrThemeChange = () => {
            for (const model of modelService.getModels()) {
                const curr = this._watchers[model.uri.toString()];
                if ((0,_common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_13__/* .isSemanticColoringEnabled */ .t)(model, themeService, configurationService)) {
                    if (!curr) {
                        register(model);
                    }
                }
                else {
                    if (curr) {
                        deregister(model, curr);
                    }
                }
            }
        };
        this._register(modelService.onModelAdded((model) => {
            if ((0,_common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_13__/* .isSemanticColoringEnabled */ .t)(model, themeService, configurationService)) {
                register(model);
            }
        }));
        this._register(modelService.onModelRemoved((model) => {
            const curr = this._watchers[model.uri.toString()];
            if (curr) {
                deregister(model, curr);
            }
        }));
        this._register(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(_common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_13__/* .SEMANTIC_HIGHLIGHTING_SETTING_ID */ .e)) {
                handleSettingOrThemeChange();
            }
        }));
        this._register(themeService.onDidColorThemeChange(handleSettingOrThemeChange));
    }
    dispose() {
        // Dispose all watchers
        for (const watcher of Object.values(this._watchers)) {
            watcher.dispose();
        }
        super.dispose();
    }
};
DocumentSemanticTokensFeature = __decorate([
    __param(0, _common_services_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_12__/* .ISemanticTokensStylingService */ .s),
    __param(1, _common_services_model_js__WEBPACK_IMPORTED_MODULE_2__/* .IModelService */ .q),
    __param(2, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_6__/* .IThemeService */ .XE),
    __param(3, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_3__/* .IConfigurationService */ .Ui),
    __param(4, _common_services_languageFeatureDebounce_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageFeatureDebounceService */ .A),
    __param(5, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__/* .ILanguageFeaturesService */ .p)
], DocumentSemanticTokensFeature);

let ModelSemanticColoring = class ModelSemanticColoring extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(model, _semanticTokensStylingService, themeService, languageFeatureDebounceService, languageFeaturesService) {
        super();
        this._semanticTokensStylingService = _semanticTokensStylingService;
        this._isDisposed = false;
        this._model = model;
        this._provider = languageFeaturesService.documentSemanticTokensProvider;
        this._debounceInformation = languageFeatureDebounceService.for(this._provider, 'DocumentSemanticTokens', { min: ModelSemanticColoring.REQUEST_MIN_DELAY, max: ModelSemanticColoring.REQUEST_MAX_DELAY });
        this._fetchDocumentSemanticTokens = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_4__/* .RunOnceScheduler */ .pY(() => this._fetchDocumentSemanticTokensNow(), ModelSemanticColoring.REQUEST_MIN_DELAY));
        this._currentDocumentResponse = null;
        this._currentDocumentRequestCancellationTokenSource = null;
        this._documentProvidersChangeListeners = [];
        this._providersChangedDuringRequest = false;
        this._register(this._model.onDidChangeContent(() => {
            if (!this._fetchDocumentSemanticTokens.isScheduled()) {
                this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
            }
        }));
        this._register(this._model.onDidChangeAttached(() => {
            if (!this._fetchDocumentSemanticTokens.isScheduled()) {
                this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
            }
        }));
        this._register(this._model.onDidChangeLanguage(() => {
            // clear any outstanding state
            if (this._currentDocumentResponse) {
                this._currentDocumentResponse.dispose();
                this._currentDocumentResponse = null;
            }
            if (this._currentDocumentRequestCancellationTokenSource) {
                this._currentDocumentRequestCancellationTokenSource.cancel();
                this._currentDocumentRequestCancellationTokenSource = null;
            }
            this._setDocumentSemanticTokens(null, null, null, []);
            this._fetchDocumentSemanticTokens.schedule(0);
        }));
        const bindDocumentChangeListeners = () => {
            (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .dispose */ .B9)(this._documentProvidersChangeListeners);
            this._documentProvidersChangeListeners = [];
            for (const provider of this._provider.all(model)) {
                if (typeof provider.onDidChange === 'function') {
                    this._documentProvidersChangeListeners.push(provider.onDidChange(() => {
                        if (this._currentDocumentRequestCancellationTokenSource) {
                            // there is already a request running,
                            this._providersChangedDuringRequest = true;
                            return;
                        }
                        this._fetchDocumentSemanticTokens.schedule(0);
                    }));
                }
            }
        };
        bindDocumentChangeListeners();
        this._register(this._provider.onDidChange(() => {
            bindDocumentChangeListeners();
            this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
        }));
        this._register(themeService.onDidColorThemeChange(_ => {
            // clear out existing tokens
            this._setDocumentSemanticTokens(null, null, null, []);
            this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
        }));
        this._fetchDocumentSemanticTokens.schedule(0);
    }
    dispose() {
        if (this._currentDocumentResponse) {
            this._currentDocumentResponse.dispose();
            this._currentDocumentResponse = null;
        }
        if (this._currentDocumentRequestCancellationTokenSource) {
            this._currentDocumentRequestCancellationTokenSource.cancel();
            this._currentDocumentRequestCancellationTokenSource = null;
        }
        (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .dispose */ .B9)(this._documentProvidersChangeListeners);
        this._documentProvidersChangeListeners = [];
        this._setDocumentSemanticTokens(null, null, null, []);
        this._isDisposed = true;
        super.dispose();
    }
    _fetchDocumentSemanticTokensNow() {
        if (this._currentDocumentRequestCancellationTokenSource) {
            // there is already a request running, let it finish...
            return;
        }
        if (!(0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_8__/* .hasDocumentSemanticTokensProvider */ .Jc)(this._provider, this._model)) {
            // there is no provider
            if (this._currentDocumentResponse) {
                // there are semantic tokens set
                this._model.tokenization.setSemanticTokens(null, false);
            }
            return;
        }
        if (!this._model.isAttachedToEditor()) {
            // this document is not visible, there is no need to fetch semantic tokens for it
            return;
        }
        const cancellationTokenSource = new _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_5__/* .CancellationTokenSource */ .A();
        const lastProvider = this._currentDocumentResponse ? this._currentDocumentResponse.provider : null;
        const lastResultId = this._currentDocumentResponse ? this._currentDocumentResponse.resultId || null : null;
        const request = (0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_8__/* .getDocumentSemanticTokens */ .ML)(this._provider, this._model, lastProvider, lastResultId, cancellationTokenSource.token);
        this._currentDocumentRequestCancellationTokenSource = cancellationTokenSource;
        this._providersChangedDuringRequest = false;
        const pendingChanges = [];
        const contentChangeListener = this._model.onDidChangeContent((e) => {
            pendingChanges.push(e);
        });
        const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_10__/* .StopWatch */ .G(false);
        request.then((res) => {
            this._debounceInformation.update(this._model, sw.elapsed());
            this._currentDocumentRequestCancellationTokenSource = null;
            contentChangeListener.dispose();
            if (!res) {
                this._setDocumentSemanticTokens(null, null, null, pendingChanges);
            }
            else {
                const { provider, tokens } = res;
                const styling = this._semanticTokensStylingService.getStyling(provider);
                this._setDocumentSemanticTokens(provider, tokens || null, styling, pendingChanges);
            }
        }, (err) => {
            const isExpectedError = err && (_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .isCancellationError */ .n2(err) || (typeof err.message === 'string' && err.message.indexOf('busy') !== -1));
            if (!isExpectedError) {
                _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .onUnexpectedError */ .dL(err);
            }
            // Semantic tokens eats up all errors and considers errors to mean that the result is temporarily not available
            // The API does not have a special error kind to express this...
            this._currentDocumentRequestCancellationTokenSource = null;
            contentChangeListener.dispose();
            if (pendingChanges.length > 0 || this._providersChangedDuringRequest) {
                // More changes occurred while the request was running
                if (!this._fetchDocumentSemanticTokens.isScheduled()) {
                    this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
                }
            }
        });
    }
    static _copy(src, srcOffset, dest, destOffset, length) {
        // protect against overflows
        length = Math.min(length, dest.length - destOffset, src.length - srcOffset);
        for (let i = 0; i < length; i++) {
            dest[destOffset + i] = src[srcOffset + i];
        }
    }
    _setDocumentSemanticTokens(provider, tokens, styling, pendingChanges) {
        const currentResponse = this._currentDocumentResponse;
        const rescheduleIfNeeded = () => {
            if ((pendingChanges.length > 0 || this._providersChangedDuringRequest) && !this._fetchDocumentSemanticTokens.isScheduled()) {
                this._fetchDocumentSemanticTokens.schedule(this._debounceInformation.get(this._model));
            }
        };
        if (this._currentDocumentResponse) {
            this._currentDocumentResponse.dispose();
            this._currentDocumentResponse = null;
        }
        if (this._isDisposed) {
            // disposed!
            if (provider && tokens) {
                provider.releaseDocumentSemanticTokens(tokens.resultId);
            }
            return;
        }
        if (!provider || !styling) {
            this._model.tokenization.setSemanticTokens(null, false);
            return;
        }
        if (!tokens) {
            this._model.tokenization.setSemanticTokens(null, true);
            rescheduleIfNeeded();
            return;
        }
        if ((0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_8__/* .isSemanticTokensEdits */ .Vj)(tokens)) {
            if (!currentResponse) {
                // not possible!
                this._model.tokenization.setSemanticTokens(null, true);
                return;
            }
            if (tokens.edits.length === 0) {
                // nothing to do!
                tokens = {
                    resultId: tokens.resultId,
                    data: currentResponse.data
                };
            }
            else {
                let deltaLength = 0;
                for (const edit of tokens.edits) {
                    deltaLength += (edit.data ? edit.data.length : 0) - edit.deleteCount;
                }
                const srcData = currentResponse.data;
                const destData = new Uint32Array(srcData.length + deltaLength);
                let srcLastStart = srcData.length;
                let destLastStart = destData.length;
                for (let i = tokens.edits.length - 1; i >= 0; i--) {
                    const edit = tokens.edits[i];
                    if (edit.start > srcData.length) {
                        styling.warnInvalidEditStart(currentResponse.resultId, tokens.resultId, i, edit.start, srcData.length);
                        // The edits are invalid and there's no way to recover
                        this._model.tokenization.setSemanticTokens(null, true);
                        return;
                    }
                    const copyCount = srcLastStart - (edit.start + edit.deleteCount);
                    if (copyCount > 0) {
                        ModelSemanticColoring._copy(srcData, srcLastStart - copyCount, destData, destLastStart - copyCount, copyCount);
                        destLastStart -= copyCount;
                    }
                    if (edit.data) {
                        ModelSemanticColoring._copy(edit.data, 0, destData, destLastStart - edit.data.length, edit.data.length);
                        destLastStart -= edit.data.length;
                    }
                    srcLastStart = edit.start;
                }
                if (srcLastStart > 0) {
                    ModelSemanticColoring._copy(srcData, 0, destData, 0, srcLastStart);
                }
                tokens = {
                    resultId: tokens.resultId,
                    data: destData
                };
            }
        }
        if ((0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_8__/* .isSemanticTokens */ .Vl)(tokens)) {
            this._currentDocumentResponse = new SemanticTokensResponse(provider, tokens.resultId, tokens.data);
            const result = (0,_common_services_semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_7__/* .toMultilineTokens2 */ .h)(tokens, styling, this._model.getLanguageId());
            // Adjust incoming semantic tokens
            if (pendingChanges.length > 0) {
                // More changes occurred while the request was running
                // We need to:
                // 1. Adjust incoming semantic tokens
                // 2. Request them again
                for (const change of pendingChanges) {
                    for (const area of result) {
                        for (const singleChange of change.changes) {
                            area.applyEdit(singleChange.range, singleChange.text);
                        }
                    }
                }
            }
            this._model.tokenization.setSemanticTokens(result, true);
        }
        else {
            this._model.tokenization.setSemanticTokens(null, true);
        }
        rescheduleIfNeeded();
    }
};
ModelSemanticColoring.REQUEST_MIN_DELAY = 300;
ModelSemanticColoring.REQUEST_MAX_DELAY = 2000;
ModelSemanticColoring = __decorate([
    __param(1, _common_services_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_12__/* .ISemanticTokensStylingService */ .s),
    __param(2, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_6__/* .IThemeService */ .XE),
    __param(3, _common_services_languageFeatureDebounce_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageFeatureDebounceService */ .A),
    __param(4, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_11__/* .ILanguageFeaturesService */ .p)
], ModelSemanticColoring);
class SemanticTokensResponse {
    constructor(provider, resultId, data) {
        this.provider = provider;
        this.resultId = resultId;
        this.data = data;
    }
    dispose() {
        this.provider.releaseDocumentSemanticTokens(this.resultId);
    }
}
(0,_common_editorFeatures_js__WEBPACK_IMPORTED_MODULE_14__/* .registerEditorFeature */ .y)(DocumentSemanticTokensFeature);


/***/ }),

/***/ 74580:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ViewportSemanticTokensContribution */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69058);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79959);
/* harmony import */ var _common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75915);
/* harmony import */ var _common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72750);
/* harmony import */ var _common_services_semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89660);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99779);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26236);
/* harmony import */ var _common_services_languageFeatureDebounce_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8857);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99264);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6216);
/* harmony import */ var _common_services_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67292);
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












let ViewportSemanticTokensContribution = class ViewportSemanticTokensContribution extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(editor, _semanticTokensStylingService, _themeService, _configurationService, languageFeatureDebounceService, languageFeaturesService) {
        super();
        this._semanticTokensStylingService = _semanticTokensStylingService;
        this._themeService = _themeService;
        this._configurationService = _configurationService;
        this._editor = editor;
        this._provider = languageFeaturesService.documentRangeSemanticTokensProvider;
        this._debounceInformation = languageFeatureDebounceService.for(this._provider, 'DocumentRangeSemanticTokens', { min: 100, max: 500 });
        this._tokenizeViewport = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => this._tokenizeViewportNow(), 100));
        this._outstandingRequests = [];
        const scheduleTokenizeViewport = () => {
            if (this._editor.hasModel()) {
                this._tokenizeViewport.schedule(this._debounceInformation.get(this._editor.getModel()));
            }
        };
        this._register(this._editor.onDidScrollChange(() => {
            scheduleTokenizeViewport();
        }));
        this._register(this._editor.onDidChangeModel(() => {
            this._cancelAll();
            scheduleTokenizeViewport();
        }));
        this._register(this._editor.onDidChangeModelContent((e) => {
            this._cancelAll();
            scheduleTokenizeViewport();
        }));
        this._register(this._provider.onDidChange(() => {
            this._cancelAll();
            scheduleTokenizeViewport();
        }));
        this._register(this._configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(_common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_11__/* .SEMANTIC_HIGHLIGHTING_SETTING_ID */ .e)) {
                this._cancelAll();
                scheduleTokenizeViewport();
            }
        }));
        this._register(this._themeService.onDidColorThemeChange(() => {
            this._cancelAll();
            scheduleTokenizeViewport();
        }));
        scheduleTokenizeViewport();
    }
    _cancelAll() {
        for (const request of this._outstandingRequests) {
            request.cancel();
        }
        this._outstandingRequests = [];
    }
    _removeOutstandingRequest(req) {
        for (let i = 0, len = this._outstandingRequests.length; i < len; i++) {
            if (this._outstandingRequests[i] === req) {
                this._outstandingRequests.splice(i, 1);
                return;
            }
        }
    }
    _tokenizeViewportNow() {
        if (!this._editor.hasModel()) {
            return;
        }
        const model = this._editor.getModel();
        if (model.tokenization.hasCompleteSemanticTokens()) {
            return;
        }
        if (!(0,_common_semanticTokensConfig_js__WEBPACK_IMPORTED_MODULE_11__/* .isSemanticColoringEnabled */ .t)(model, this._themeService, this._configurationService)) {
            if (model.tokenization.hasSomeSemanticTokens()) {
                model.tokenization.setSemanticTokens(null, false);
            }
            return;
        }
        if (!(0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_3__/* .hasDocumentRangeSemanticTokensProvider */ .KO)(this._provider, model)) {
            if (model.tokenization.hasSomeSemanticTokens()) {
                model.tokenization.setSemanticTokens(null, false);
            }
            return;
        }
        const visibleRanges = this._editor.getVisibleRangesPlusViewportAboveBelow();
        this._outstandingRequests = this._outstandingRequests.concat(visibleRanges.map(range => this._requestRange(model, range)));
    }
    _requestRange(model, range) {
        const requestVersionId = model.getVersionId();
        const request = (0,_base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .createCancelablePromise */ .PG)(token => Promise.resolve((0,_common_getSemanticTokens_js__WEBPACK_IMPORTED_MODULE_3__/* .getDocumentRangeSemanticTokens */ .OG)(this._provider, model, range, token)));
        const sw = new _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_8__/* .StopWatch */ .G(false);
        request.then((r) => {
            this._debounceInformation.update(model, sw.elapsed());
            if (!r || !r.tokens || model.isDisposed() || model.getVersionId() !== requestVersionId) {
                return;
            }
            const { provider, tokens: result } = r;
            const styling = this._semanticTokensStylingService.getStyling(provider);
            model.tokenization.setPartialSemanticTokens(range, (0,_common_services_semanticTokensProviderStyling_js__WEBPACK_IMPORTED_MODULE_4__/* .toMultilineTokens2 */ .h)(result, styling, model.getLanguageId()));
        }).then(() => this._removeOutstandingRequest(request), () => this._removeOutstandingRequest(request));
        return request;
    }
};
ViewportSemanticTokensContribution.ID = 'editor.contrib.viewportSemanticTokens';
ViewportSemanticTokensContribution = __decorate([
    __param(1, _common_services_semanticTokensStyling_js__WEBPACK_IMPORTED_MODULE_10__/* .ISemanticTokensStylingService */ .s),
    __param(2, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_6__/* .IThemeService */ .XE),
    __param(3, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_5__/* .IConfigurationService */ .Ui),
    __param(4, _common_services_languageFeatureDebounce_js__WEBPACK_IMPORTED_MODULE_7__/* .ILanguageFeatureDebounceService */ .A),
    __param(5, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_9__/* .ILanguageFeaturesService */ .p)
], ViewportSemanticTokensContribution);

(0,_browser_editorExtensions_js__WEBPACK_IMPORTED_MODULE_2__/* .registerEditorContribution */ ._K)(ViewportSemanticTokensContribution.ID, ViewportSemanticTokensContribution, 1 /* EditorContributionInstantiation.AfterFirstRender */);


/***/ }),

/***/ 75915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jc: function() { return /* binding */ hasDocumentSemanticTokensProvider; },
/* harmony export */   KO: function() { return /* binding */ hasDocumentRangeSemanticTokensProvider; },
/* harmony export */   ML: function() { return /* binding */ getDocumentSemanticTokens; },
/* harmony export */   OG: function() { return /* binding */ getDocumentRangeSemanticTokens; },
/* harmony export */   Vj: function() { return /* binding */ isSemanticTokensEdits; },
/* harmony export */   Vl: function() { return /* binding */ isSemanticTokens; }
/* harmony export */ });
/* unused harmony export DocumentSemanticTokensResult */
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98764);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25702);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92378);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52266);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38389);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89356);
/* harmony import */ var _common_services_semanticTokensDto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98355);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3981);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6216);
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









function isSemanticTokens(v) {
    return v && !!(v.data);
}
function isSemanticTokensEdits(v) {
    return v && Array.isArray(v.edits);
}
class DocumentSemanticTokensResult {
    constructor(provider, tokens, error) {
        this.provider = provider;
        this.tokens = tokens;
        this.error = error;
    }
}
function hasDocumentSemanticTokensProvider(registry, model) {
    return registry.has(model);
}
function getDocumentSemanticTokensProviders(registry, model) {
    const groups = registry.orderedGroups(model);
    return (groups.length > 0 ? groups[0] : []);
}
function getDocumentSemanticTokens(registry, model, lastProvider, lastResultId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = getDocumentSemanticTokensProviders(registry, model);
        // Get tokens from all providers at the same time.
        const results = yield Promise.all(providers.map((provider) => __awaiter(this, void 0, void 0, function* () {
            let result;
            let error = null;
            try {
                result = yield provider.provideDocumentSemanticTokens(model, (provider === lastProvider ? lastResultId : null), token);
            }
            catch (err) {
                error = err;
                result = null;
            }
            if (!result || (!isSemanticTokens(result) && !isSemanticTokensEdits(result))) {
                result = null;
            }
            return new DocumentSemanticTokensResult(provider, result, error);
        })));
        // Try to return the first result with actual tokens or
        // the first result which threw an error (!!)
        for (const result of results) {
            if (result.error) {
                throw result.error;
            }
            if (result.tokens) {
                return result;
            }
        }
        // Return the first result, even if it doesn't have tokens
        if (results.length > 0) {
            return results[0];
        }
        return null;
    });
}
function _getDocumentSemanticTokensProviderHighestGroup(registry, model) {
    const result = registry.orderedGroups(model);
    return (result.length > 0 ? result[0] : null);
}
class DocumentRangeSemanticTokensResult {
    constructor(provider, tokens) {
        this.provider = provider;
        this.tokens = tokens;
    }
}
function hasDocumentRangeSemanticTokensProvider(providers, model) {
    return providers.has(model);
}
function getDocumentRangeSemanticTokensProviders(providers, model) {
    const groups = providers.orderedGroups(model);
    return (groups.length > 0 ? groups[0] : []);
}
function getDocumentRangeSemanticTokens(registry, model, range, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const providers = getDocumentRangeSemanticTokensProviders(registry, model);
        // Get tokens from all providers at the same time.
        const results = yield Promise.all(providers.map((provider) => __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield provider.provideDocumentRangeSemanticTokens(model, range, token);
            }
            catch (err) {
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_1__/* .onUnexpectedExternalError */ .Cp)(err);
                result = null;
            }
            if (!result || !isSemanticTokens(result)) {
                result = null;
            }
            return new DocumentRangeSemanticTokensResult(provider, result);
        })));
        // Try to return the first result with actual tokens
        for (const result of results) {
            if (result.tokens) {
                return result;
            }
        }
        // Return the first result, even if it doesn't have tokens
        if (results.length > 0) {
            return results[0];
        }
        return null;
    });
}
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommand('_provideDocumentSemanticTokensLegend', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri] = args;
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .assertType */ .p_)(uri instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_2__/* .URI */ .o);
    const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_3__/* .IModelService */ .q).getModel(uri);
    if (!model) {
        return undefined;
    }
    const { documentSemanticTokensProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p);
    const providers = _getDocumentSemanticTokensProviderHighestGroup(documentSemanticTokensProvider, model);
    if (!providers) {
        // there is no provider => fall back to a document range semantic tokens provider
        return accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .ICommandService */ .H).executeCommand('_provideDocumentRangeSemanticTokensLegend', uri);
    }
    return providers[0].getLegend();
}));
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommand('_provideDocumentSemanticTokens', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri] = args;
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .assertType */ .p_)(uri instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_2__/* .URI */ .o);
    const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_3__/* .IModelService */ .q).getModel(uri);
    if (!model) {
        return undefined;
    }
    const { documentSemanticTokensProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p);
    if (!hasDocumentSemanticTokensProvider(documentSemanticTokensProvider, model)) {
        // there is no provider => fall back to a document range semantic tokens provider
        return accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .ICommandService */ .H).executeCommand('_provideDocumentRangeSemanticTokens', uri, model.getFullModelRange());
    }
    const r = yield getDocumentSemanticTokens(documentSemanticTokensProvider, model, null, null, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None);
    if (!r) {
        return undefined;
    }
    const { provider, tokens } = r;
    if (!tokens || !isSemanticTokens(tokens)) {
        return undefined;
    }
    const buff = (0,_common_services_semanticTokensDto_js__WEBPACK_IMPORTED_MODULE_5__/* .encodeSemanticTokensDto */ .C)({
        id: 0,
        type: 'full',
        data: tokens.data
    });
    if (tokens.resultId) {
        provider.releaseDocumentSemanticTokens(tokens.resultId);
    }
    return buff;
}));
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommand('_provideDocumentRangeSemanticTokensLegend', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri, range] = args;
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .assertType */ .p_)(uri instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_2__/* .URI */ .o);
    const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_3__/* .IModelService */ .q).getModel(uri);
    if (!model) {
        return undefined;
    }
    const { documentRangeSemanticTokensProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p);
    const providers = getDocumentRangeSemanticTokensProviders(documentRangeSemanticTokensProvider, model);
    if (providers.length === 0) {
        // no providers
        return undefined;
    }
    if (providers.length === 1) {
        // straight forward case, just a single provider
        return providers[0].getLegend();
    }
    if (!range || !_common_core_range_js__WEBPACK_IMPORTED_MODULE_8__/* .Range */ .e.isIRange(range)) {
        // if no range is provided, we cannot support multiple providers
        // as we cannot fall back to the one which would give results
        // => return the first legend for backwards compatibility and print a warning
        console.warn(`provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in`);
        return providers[0].getLegend();
    }
    const result = yield getDocumentRangeSemanticTokens(documentRangeSemanticTokensProvider, model, _common_core_range_js__WEBPACK_IMPORTED_MODULE_8__/* .Range */ .e.lift(range), _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None);
    if (!result) {
        return undefined;
    }
    return result.provider.getLegend();
}));
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommand('_provideDocumentRangeSemanticTokens', (accessor, ...args) => __awaiter(void 0, void 0, void 0, function* () {
    const [uri, range] = args;
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .assertType */ .p_)(uri instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_2__/* .URI */ .o);
    (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .assertType */ .p_)(_common_core_range_js__WEBPACK_IMPORTED_MODULE_8__/* .Range */ .e.isIRange(range));
    const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_3__/* .IModelService */ .q).getModel(uri);
    if (!model) {
        return undefined;
    }
    const { documentRangeSemanticTokensProvider } = accessor.get(_common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_6__/* .ILanguageFeaturesService */ .p);
    const result = yield getDocumentRangeSemanticTokens(documentRangeSemanticTokensProvider, model, _common_core_range_js__WEBPACK_IMPORTED_MODULE_8__/* .Range */ .e.lift(range), _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationToken */ .T.None);
    if (!result || !result.tokens) {
        // there is no provider or it didn't return tokens
        return undefined;
    }
    return (0,_common_services_semanticTokensDto_js__WEBPACK_IMPORTED_MODULE_5__/* .encodeSemanticTokensDto */ .C)({
        id: 0,
        type: 'full',
        data: result.tokens.data
    });
}));


/***/ }),

/***/ 72750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ SEMANTIC_HIGHLIGHTING_SETTING_ID; },
/* harmony export */   t: function() { return /* binding */ isSemanticColoringEnabled; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const SEMANTIC_HIGHLIGHTING_SETTING_ID = 'editor.semanticHighlighting';
function isSemanticColoringEnabled(model, themeService, configurationService) {
    var _a;
    const setting = (_a = configurationService.getValue(SEMANTIC_HIGHLIGHTING_SETTING_ID, { overrideIdentifier: model.getLanguageId(), resource: model.uri })) === null || _a === void 0 ? void 0 : _a.enabled;
    if (typeof setting === 'boolean') {
        return setting;
    }
    return themeService.getColorTheme().semanticHighlighting;
}


/***/ })

}]);