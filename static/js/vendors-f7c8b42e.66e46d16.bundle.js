"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-f7c8b42e"],{

/***/ 55028:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(79959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hoverTypes.js
var hoverTypes = __webpack_require__(3589);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(56704);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(69058);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(98764);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(25702);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/map.js
var map = __webpack_require__(54495);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(89356);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(92378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/editorDom.js
var editorDom = __webpack_require__(35029);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/stableEditorScroll.js
var stableEditorScroll = __webpack_require__(52522);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/editOperation.js
var editOperation = __webpack_require__(54499);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var core_range = __webpack_require__(3981);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages.js
var languages = __webpack_require__(34882);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model.js
var model = __webpack_require__(7783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/model/textModel.js
var textModel = __webpack_require__(95792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatureDebounce.js
var languageFeatureDebounce = __webpack_require__(8857);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(6216);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/resolverService.js
var resolverService = __webpack_require__(31744);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/clickLinkGesture.js
var clickLinkGesture = __webpack_require__(82725);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(65201);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/network.js
var network = __webpack_require__(32681);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHints.js
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






class InlayHintAnchor {
    constructor(range, direction) {
        this.range = range;
        this.direction = direction;
    }
}
class InlayHintItem {
    constructor(hint, anchor, provider) {
        this.hint = hint;
        this.anchor = anchor;
        this.provider = provider;
        this._isResolved = false;
    }
    with(delta) {
        const result = new InlayHintItem(this.hint, delta.anchor, this.provider);
        result._isResolved = this._isResolved;
        result._currentResolve = this._currentResolve;
        return result;
    }
    resolve(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof this.provider.resolveInlayHint !== 'function') {
                return;
            }
            if (this._currentResolve) {
                // wait for an active resolve operation and try again
                // when that's done.
                yield this._currentResolve;
                if (token.isCancellationRequested) {
                    return;
                }
                return this.resolve(token);
            }
            if (!this._isResolved) {
                this._currentResolve = this._doResolve(token)
                    .finally(() => this._currentResolve = undefined);
            }
            yield this._currentResolve;
        });
    }
    _doResolve(token) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newHint = yield Promise.resolve(this.provider.resolveInlayHint(this.hint, token));
                this.hint.tooltip = (_a = newHint === null || newHint === void 0 ? void 0 : newHint.tooltip) !== null && _a !== void 0 ? _a : this.hint.tooltip;
                this.hint.label = (_b = newHint === null || newHint === void 0 ? void 0 : newHint.label) !== null && _b !== void 0 ? _b : this.hint.label;
                this._isResolved = true;
            }
            catch (err) {
                (0,errors/* onUnexpectedExternalError */.Cp)(err);
                this._isResolved = false;
            }
        });
    }
}
class InlayHintsFragments {
    static create(registry, model, ranges, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [];
            const promises = registry.ordered(model).reverse().map(provider => ranges.map((range) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const result = yield provider.provideInlayHints(model, range, token);
                    if (result === null || result === void 0 ? void 0 : result.hints.length) {
                        data.push([result, provider]);
                    }
                }
                catch (err) {
                    (0,errors/* onUnexpectedExternalError */.Cp)(err);
                }
            })));
            yield Promise.all(promises.flat());
            if (token.isCancellationRequested || model.isDisposed()) {
                throw new errors/* CancellationError */.FU();
            }
            return new InlayHintsFragments(ranges, data, model);
        });
    }
    constructor(ranges, data, model) {
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this.ranges = ranges;
        this.provider = new Set();
        const items = [];
        for (const [list, provider] of data) {
            this._disposables.add(list);
            this.provider.add(provider);
            for (const hint of list.hints) {
                // compute the range to which the item should be attached to
                const position = model.validatePosition(hint.position);
                let direction = 'before';
                const wordRange = InlayHintsFragments._getRangeAtPosition(model, position);
                let range;
                if (wordRange.getStartPosition().isBefore(position)) {
                    range = core_range/* Range */.e.fromPositions(wordRange.getStartPosition(), position);
                    direction = 'after';
                }
                else {
                    range = core_range/* Range */.e.fromPositions(position, wordRange.getEndPosition());
                    direction = 'before';
                }
                items.push(new InlayHintItem(hint, new InlayHintAnchor(range, direction), provider));
            }
        }
        this.items = items.sort((a, b) => position/* Position */.L.compare(a.hint.position, b.hint.position));
    }
    dispose() {
        this._disposables.dispose();
    }
    static _getRangeAtPosition(model, position) {
        const line = position.lineNumber;
        const word = model.getWordAtPosition(position);
        if (word) {
            // always prefer the word range
            return new core_range/* Range */.e(line, word.startColumn, line, word.endColumn);
        }
        model.tokenization.tokenizeIfCheap(line);
        const tokens = model.tokenization.getLineTokens(line);
        const offset = position.column - 1;
        const idx = tokens.findTokenIndexAtOffset(offset);
        let start = tokens.getStartOffset(idx);
        let end = tokens.getEndOffset(idx);
        if (end - start === 1) {
            // single character token, when at its end try leading/trailing token instead
            if (start === offset && idx > 1) {
                // leading token
                start = tokens.getStartOffset(idx - 1);
                end = tokens.getEndOffset(idx - 1);
            }
            else if (end === offset && idx < tokens.getCount() - 1) {
                // trailing token
                start = tokens.getStartOffset(idx + 1);
                end = tokens.getEndOffset(idx + 1);
            }
        }
        return new core_range/* Range */.e(line, start + 1, line, end + 1);
    }
}
function asCommandLink(command) {
    return common_uri/* URI */.o.from({
        scheme: network/* Schemas */.lg.command,
        path: command.id,
        query: command.arguments && encodeURIComponent(JSON.stringify(command.arguments))
    }).toString();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsLocations.js
var inlayHintsLocations = __webpack_require__(62754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(38389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/extensions.js
var extensions = __webpack_require__(54659);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(73830);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(70760);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(9732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(26236);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsController.js
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
var inlayHintsController_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





























// --- hint caching service (per session)
class InlayHintsCache {
    constructor() {
        this._entries = new map/* LRUCache */.z6(50);
    }
    get(model) {
        const key = InlayHintsCache._key(model);
        return this._entries.get(key);
    }
    set(model, value) {
        const key = InlayHintsCache._key(model);
        this._entries.set(key, value);
    }
    static _key(model) {
        return `${model.uri.toString()}/${model.getVersionId()}`;
    }
}
const IInlayHintsCache = (0,instantiation/* createDecorator */.yh)('IInlayHintsCache');
(0,extensions/* registerSingleton */.z)(IInlayHintsCache, InlayHintsCache, 1 /* InstantiationType.Delayed */);
// --- rendered label
class RenderedInlayHintLabelPart {
    constructor(item, index) {
        this.item = item;
        this.index = index;
    }
    get part() {
        const label = this.item.hint.label;
        if (typeof label === 'string') {
            return { label };
        }
        else {
            return label[this.index];
        }
    }
}
class ActiveInlayHintInfo {
    constructor(part, hasTriggerModifier) {
        this.part = part;
        this.hasTriggerModifier = hasTriggerModifier;
    }
}
// --- controller
let InlayHintsController = class InlayHintsController {
    static get(editor) {
        var _a;
        return (_a = editor.getContribution(InlayHintsController.ID)) !== null && _a !== void 0 ? _a : undefined;
    }
    constructor(_editor, _languageFeaturesService, _featureDebounce, _inlayHintsCache, _commandService, _notificationService, _instaService) {
        this._editor = _editor;
        this._languageFeaturesService = _languageFeaturesService;
        this._inlayHintsCache = _inlayHintsCache;
        this._commandService = _commandService;
        this._notificationService = _notificationService;
        this._instaService = _instaService;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this._sessionDisposables = new lifecycle/* DisposableStore */.SL();
        this._decorationsMetadata = new Map();
        this._ruleFactory = new editorDom/* DynamicCssRules */.t7(this._editor);
        this._activeRenderMode = 0 /* RenderMode.Normal */;
        this._debounceInfo = _featureDebounce.for(_languageFeaturesService.inlayHintsProvider, 'InlayHint', { min: 25 });
        this._disposables.add(_languageFeaturesService.inlayHintsProvider.onDidChange(() => this._update()));
        this._disposables.add(_editor.onDidChangeModel(() => this._update()));
        this._disposables.add(_editor.onDidChangeModelLanguage(() => this._update()));
        this._disposables.add(_editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(138 /* EditorOption.inlayHints */)) {
                this._update();
            }
        }));
        this._update();
    }
    dispose() {
        this._sessionDisposables.dispose();
        this._removeAllDecorations();
        this._disposables.dispose();
    }
    _update() {
        this._sessionDisposables.clear();
        this._removeAllDecorations();
        const options = this._editor.getOption(138 /* EditorOption.inlayHints */);
        if (options.enabled === 'off') {
            return;
        }
        const model = this._editor.getModel();
        if (!model || !this._languageFeaturesService.inlayHintsProvider.has(model)) {
            return;
        }
        // iff possible, quickly update from cache
        const cached = this._inlayHintsCache.get(model);
        if (cached) {
            this._updateHintsDecorators([model.getFullModelRange()], cached);
        }
        this._sessionDisposables.add((0,lifecycle/* toDisposable */.OF)(() => {
            // cache items when switching files etc
            if (!model.isDisposed()) {
                this._cacheHintsForFastRestore(model);
            }
        }));
        let cts;
        const watchedProviders = new Set();
        const scheduler = new common_async/* RunOnceScheduler */.pY(() => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            const t1 = Date.now();
            cts === null || cts === void 0 ? void 0 : cts.dispose(true);
            cts = new cancellation/* CancellationTokenSource */.A();
            const listener = model.onWillDispose(() => cts === null || cts === void 0 ? void 0 : cts.cancel());
            try {
                const myToken = cts.token;
                const inlayHints = yield InlayHintsFragments.create(this._languageFeaturesService.inlayHintsProvider, model, this._getHintsRanges(), myToken);
                scheduler.delay = this._debounceInfo.update(model, Date.now() - t1);
                if (myToken.isCancellationRequested) {
                    inlayHints.dispose();
                    return;
                }
                // listen to provider changes
                for (const provider of inlayHints.provider) {
                    if (typeof provider.onDidChangeInlayHints === 'function' && !watchedProviders.has(provider)) {
                        watchedProviders.add(provider);
                        this._sessionDisposables.add(provider.onDidChangeInlayHints(() => {
                            if (!scheduler.isScheduled()) { // ignore event when request is already scheduled
                                scheduler.schedule();
                            }
                        }));
                    }
                }
                this._sessionDisposables.add(inlayHints);
                this._updateHintsDecorators(inlayHints.ranges, inlayHints.items);
                this._cacheHintsForFastRestore(model);
            }
            catch (err) {
                (0,errors/* onUnexpectedError */.dL)(err);
            }
            finally {
                cts.dispose();
                listener.dispose();
            }
        }), this._debounceInfo.get(model));
        this._sessionDisposables.add(scheduler);
        this._sessionDisposables.add((0,lifecycle/* toDisposable */.OF)(() => cts === null || cts === void 0 ? void 0 : cts.dispose(true)));
        scheduler.schedule(0);
        this._sessionDisposables.add(this._editor.onDidScrollChange((e) => {
            // update when scroll position changes
            // uses scrollTopChanged has weak heuristic to differenatiate between scrolling due to
            // typing or due to "actual" scrolling
            if (e.scrollTopChanged || !scheduler.isScheduled()) {
                scheduler.schedule();
            }
        }));
        this._sessionDisposables.add(this._editor.onDidChangeModelContent((e) => {
            // update less aggressive when typing
            const delay = Math.max(scheduler.delay, 1250);
            scheduler.schedule(delay);
        }));
        if (options.enabled === 'on') {
            // different "on" modes: always
            this._activeRenderMode = 0 /* RenderMode.Normal */;
        }
        else {
            // different "on" modes: offUnlessPressed, or onUnlessPressed
            let defaultMode;
            let altMode;
            if (options.enabled === 'onUnlessPressed') {
                defaultMode = 0 /* RenderMode.Normal */;
                altMode = 1 /* RenderMode.Invisible */;
            }
            else {
                defaultMode = 1 /* RenderMode.Invisible */;
                altMode = 0 /* RenderMode.Normal */;
            }
            this._activeRenderMode = defaultMode;
            this._sessionDisposables.add(dom/* ModifierKeyEmitter */._q.getInstance().event(e => {
                if (!this._editor.hasModel()) {
                    return;
                }
                const newRenderMode = e.altKey && e.ctrlKey && !(e.shiftKey || e.metaKey) ? altMode : defaultMode;
                if (newRenderMode !== this._activeRenderMode) {
                    this._activeRenderMode = newRenderMode;
                    const model = this._editor.getModel();
                    const copies = this._copyInlayHintsWithCurrentAnchor(model);
                    this._updateHintsDecorators([model.getFullModelRange()], copies);
                    scheduler.schedule(0);
                }
            }));
        }
        // mouse gestures
        this._sessionDisposables.add(this._installDblClickGesture(() => scheduler.schedule(0)));
        this._sessionDisposables.add(this._installLinkGesture());
        this._sessionDisposables.add(this._installContextMenu());
    }
    _installLinkGesture() {
        const store = new lifecycle/* DisposableStore */.SL();
        const gesture = store.add(new clickLinkGesture/* ClickLinkGesture */.yN(this._editor));
        // let removeHighlight = () => { };
        const sessionStore = new lifecycle/* DisposableStore */.SL();
        store.add(sessionStore);
        store.add(gesture.onMouseMoveOrRelevantKeyDown(e => {
            const [mouseEvent] = e;
            const labelPart = this._getInlayHintLabelPart(mouseEvent);
            const model = this._editor.getModel();
            if (!labelPart || !model) {
                sessionStore.clear();
                return;
            }
            // resolve the item
            const cts = new cancellation/* CancellationTokenSource */.A();
            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => cts.dispose(true)));
            labelPart.item.resolve(cts.token);
            // render link => when the modifier is pressed and when there is a command or location
            this._activeInlayHintPart = labelPart.part.command || labelPart.part.location
                ? new ActiveInlayHintInfo(labelPart, mouseEvent.hasTriggerModifier)
                : undefined;
            const lineNumber = model.validatePosition(labelPart.item.hint.position).lineNumber;
            const range = new core_range/* Range */.e(lineNumber, 1, lineNumber, model.getLineMaxColumn(lineNumber));
            const lineHints = this._getInlineHintsForRange(range);
            this._updateHintsDecorators([range], lineHints);
            sessionStore.add((0,lifecycle/* toDisposable */.OF)(() => {
                this._activeInlayHintPart = undefined;
                this._updateHintsDecorators([range], lineHints);
            }));
        }));
        store.add(gesture.onCancel(() => sessionStore.clear()));
        store.add(gesture.onExecute((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            const label = this._getInlayHintLabelPart(e);
            if (label) {
                const part = label.part;
                if (part.location) {
                    // location -> execute go to def
                    this._instaService.invokeFunction(inlayHintsLocations/* goToDefinitionWithLocation */.K, e, this._editor, part.location);
                }
                else if (languages/* Command */.mY.is(part.command)) {
                    // command -> execute it
                    yield this._invokeCommand(part.command, label.item);
                }
            }
        })));
        return store;
    }
    _getInlineHintsForRange(range) {
        const lineHints = new Set();
        for (const data of this._decorationsMetadata.values()) {
            if (range.containsRange(data.item.anchor.range)) {
                lineHints.add(data.item);
            }
        }
        return Array.from(lineHints);
    }
    _installDblClickGesture(updateInlayHints) {
        return this._editor.onMouseUp((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            if (e.event.detail !== 2) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (!part) {
                return;
            }
            e.event.preventDefault();
            yield part.item.resolve(cancellation/* CancellationToken */.T.None);
            if ((0,arrays/* isNonEmptyArray */.Of)(part.item.hint.textEdits)) {
                const edits = part.item.hint.textEdits.map(edit => editOperation/* EditOperation */.h.replace(core_range/* Range */.e.lift(edit.range), edit.text));
                this._editor.executeEdits('inlayHint.default', edits);
                updateInlayHints();
            }
        }));
    }
    _installContextMenu() {
        return this._editor.onContextMenu((e) => inlayHintsController_awaiter(this, void 0, void 0, function* () {
            if (!(e.event.target instanceof HTMLElement)) {
                return;
            }
            const part = this._getInlayHintLabelPart(e);
            if (part) {
                yield this._instaService.invokeFunction(inlayHintsLocations/* showGoToContextMenu */.u, this._editor, e.event.target, part);
            }
        }));
    }
    _getInlayHintLabelPart(e) {
        var _a;
        if (e.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
            return undefined;
        }
        const options = (_a = e.target.detail.injectedText) === null || _a === void 0 ? void 0 : _a.options;
        if (options instanceof textModel/* ModelDecorationInjectedTextOptions */.HS && (options === null || options === void 0 ? void 0 : options.attachedData) instanceof RenderedInlayHintLabelPart) {
            return options.attachedData;
        }
        return undefined;
    }
    _invokeCommand(command, item) {
        var _a;
        return inlayHintsController_awaiter(this, void 0, void 0, function* () {
            try {
                yield this._commandService.executeCommand(command.id, ...((_a = command.arguments) !== null && _a !== void 0 ? _a : []));
            }
            catch (err) {
                this._notificationService.notify({
                    severity: notification/* Severity */.zb.Error,
                    source: item.provider.displayName,
                    message: err
                });
            }
        });
    }
    _cacheHintsForFastRestore(model) {
        const hints = this._copyInlayHintsWithCurrentAnchor(model);
        this._inlayHintsCache.set(model, hints);
    }
    // return inlay hints but with an anchor that reflects "updates"
    // that happened after receiving them, e.g adding new lines before a hint
    _copyInlayHintsWithCurrentAnchor(model) {
        const items = new Map();
        for (const [id, obj] of this._decorationsMetadata) {
            if (items.has(obj.item)) {
                // an inlay item can be rendered as multiple decorations
                // but they will all uses the same range
                continue;
            }
            const range = model.getDecorationRange(id);
            if (range) {
                // update range with whatever the editor has tweaked it to
                const anchor = new InlayHintAnchor(range, obj.item.anchor.direction);
                const copy = obj.item.with({ anchor });
                items.set(obj.item, copy);
            }
        }
        return Array.from(items.values());
    }
    _getHintsRanges() {
        const extra = 30;
        const model = this._editor.getModel();
        const visibleRanges = this._editor.getVisibleRangesPlusViewportAboveBelow();
        const result = [];
        for (const range of visibleRanges.sort(core_range/* Range */.e.compareRangesUsingStarts)) {
            const extendedRange = model.validateRange(new core_range/* Range */.e(range.startLineNumber - extra, range.startColumn, range.endLineNumber + extra, range.endColumn));
            if (result.length === 0 || !core_range/* Range */.e.areIntersectingOrTouching(result[result.length - 1], extendedRange)) {
                result.push(extendedRange);
            }
            else {
                result[result.length - 1] = core_range/* Range */.e.plusRange(result[result.length - 1], extendedRange);
            }
        }
        return result;
    }
    _updateHintsDecorators(ranges, items) {
        var _a, _b;
        // utils to collect/create injected text decorations
        const newDecorationsData = [];
        const addInjectedText = (item, ref, content, cursorStops, attachedData) => {
            const opts = {
                content,
                inlineClassNameAffectsLetterSpacing: true,
                inlineClassName: ref.className,
                cursorStops,
                attachedData
            };
            newDecorationsData.push({
                item,
                classNameRef: ref,
                decoration: {
                    range: item.anchor.range,
                    options: {
                        // className: "rangeHighlight", // DEBUG highlight to see to what range a hint is attached
                        description: 'InlayHint',
                        showIfCollapsed: item.anchor.range.isEmpty(),
                        collapseOnReplaceEdit: !item.anchor.range.isEmpty(),
                        stickiness: 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */,
                        [item.anchor.direction]: this._activeRenderMode === 0 /* RenderMode.Normal */ ? opts : undefined
                    }
                }
            });
        };
        const addInjectedWhitespace = (item, isLast) => {
            const marginRule = this._ruleFactory.createClassNameRef({
                width: `${(fontSize / 3) | 0}px`,
                display: 'inline-block'
            });
            addInjectedText(item, marginRule, '\u200a', isLast ? model/* InjectedTextCursorStops */.RM.Right : model/* InjectedTextCursorStops */.RM.None);
        };
        //
        const { fontSize, fontFamily, padding, isUniform } = this._getLayoutInfo();
        const fontFamilyVar = '--code-editorInlayHintsFontFamily';
        this._editor.getContainerDomNode().style.setProperty(fontFamilyVar, fontFamily);
        for (const item of items) {
            // whitespace leading the actual label
            if (item.hint.paddingLeft) {
                addInjectedWhitespace(item, false);
            }
            // the label with its parts
            const parts = typeof item.hint.label === 'string'
                ? [{ label: item.hint.label }]
                : item.hint.label;
            for (let i = 0; i < parts.length; i++) {
                const part = parts[i];
                const isFirst = i === 0;
                const isLast = i === parts.length - 1;
                const cssProperties = {
                    fontSize: `${fontSize}px`,
                    fontFamily: `var(${fontFamilyVar}), ${editorOptions/* EDITOR_FONT_DEFAULTS */.hL.fontFamily}`,
                    verticalAlign: isUniform ? 'baseline' : 'middle',
                    unicodeBidi: 'isolate'
                };
                if ((0,arrays/* isNonEmptyArray */.Of)(item.hint.textEdits)) {
                    cssProperties.cursor = 'default';
                }
                this._fillInColors(cssProperties, item.hint);
                if ((part.command || part.location) && ((_a = this._activeInlayHintPart) === null || _a === void 0 ? void 0 : _a.part.item) === item && this._activeInlayHintPart.part.index === i) {
                    // active link!
                    cssProperties.textDecoration = 'underline';
                    if (this._activeInlayHintPart.hasTriggerModifier) {
                        cssProperties.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorActiveLinkForeground */._Yy);
                        cssProperties.cursor = 'pointer';
                    }
                }
                if (padding) {
                    if (isFirst && isLast) {
                        // only element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${(fontSize / 4) | 0}px`;
                    }
                    else if (isFirst) {
                        // first element
                        cssProperties.padding = `1px 0 1px ${Math.max(1, fontSize / 4) | 0}px`;
                        cssProperties.borderRadius = `${(fontSize / 4) | 0}px 0 0 ${(fontSize / 4) | 0}px`;
                    }
                    else if (isLast) {
                        // last element
                        cssProperties.padding = `1px ${Math.max(1, fontSize / 4) | 0}px 1px 0`;
                        cssProperties.borderRadius = `0 ${(fontSize / 4) | 0}px ${(fontSize / 4) | 0}px 0`;
                    }
                    else {
                        cssProperties.padding = `1px 0 1px 0`;
                    }
                }
                addInjectedText(item, this._ruleFactory.createClassNameRef(cssProperties), fixSpace(part.label), isLast && !item.hint.paddingRight ? model/* InjectedTextCursorStops */.RM.Right : model/* InjectedTextCursorStops */.RM.None, new RenderedInlayHintLabelPart(item, i));
            }
            // whitespace trailing the actual label
            if (item.hint.paddingRight) {
                addInjectedWhitespace(item, true);
            }
            if (newDecorationsData.length > InlayHintsController._MAX_DECORATORS) {
                break;
            }
        }
        // collect all decoration ids that are affected by the ranges
        // and only update those decorations
        const decorationIdsToReplace = [];
        for (const range of ranges) {
            for (const { id } of (_b = this._editor.getDecorationsInRange(range)) !== null && _b !== void 0 ? _b : []) {
                const metadata = this._decorationsMetadata.get(id);
                if (metadata) {
                    decorationIdsToReplace.push(id);
                    metadata.classNameRef.dispose();
                    this._decorationsMetadata.delete(id);
                }
            }
        }
        const scrollState = stableEditorScroll/* StableEditorScrollState */.Z.capture(this._editor);
        this._editor.changeDecorations(accessor => {
            const newDecorationIds = accessor.deltaDecorations(decorationIdsToReplace, newDecorationsData.map(d => d.decoration));
            for (let i = 0; i < newDecorationIds.length; i++) {
                const data = newDecorationsData[i];
                this._decorationsMetadata.set(newDecorationIds[i], data);
            }
        });
        scrollState.restore(this._editor);
    }
    _fillInColors(props, hint) {
        if (hint.kind === languages/* InlayHintKind */.gl.Parameter) {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintParameterBackground */.phM);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintParameterForeground */.HCL);
        }
        else if (hint.kind === languages/* InlayHintKind */.gl.Type) {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintTypeBackground */.bKB);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintTypeForeground */.hX8);
        }
        else {
            props.backgroundColor = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintBackground */.PpC);
            props.color = (0,themeService/* themeColorFromId */.EN)(colorRegistry/* editorInlayHintForeground */.VVv);
        }
    }
    _getLayoutInfo() {
        const options = this._editor.getOption(138 /* EditorOption.inlayHints */);
        const padding = options.padding;
        const editorFontSize = this._editor.getOption(51 /* EditorOption.fontSize */);
        const editorFontFamily = this._editor.getOption(48 /* EditorOption.fontFamily */);
        let fontSize = options.fontSize;
        if (!fontSize || fontSize < 5 || fontSize > editorFontSize) {
            fontSize = editorFontSize;
        }
        const fontFamily = options.fontFamily || editorFontFamily;
        const isUniform = !padding
            && fontFamily === editorFontFamily
            && fontSize === editorFontSize;
        return { fontSize, fontFamily, padding, isUniform };
    }
    _removeAllDecorations() {
        this._editor.removeDecorations(Array.from(this._decorationsMetadata.keys()));
        for (const obj of this._decorationsMetadata.values()) {
            obj.classNameRef.dispose();
        }
        this._decorationsMetadata.clear();
    }
};
InlayHintsController.ID = 'editor.contrib.InlayHints';
InlayHintsController._MAX_DECORATORS = 1500;
InlayHintsController = __decorate([
    __param(1, languageFeatures/* ILanguageFeaturesService */.p),
    __param(2, languageFeatureDebounce/* ILanguageFeatureDebounceService */.A),
    __param(3, IInlayHintsCache),
    __param(4, commands/* ICommandService */.H),
    __param(5, notification/* INotificationService */.lT),
    __param(6, instantiation/* IInstantiationService */.TG)
], InlayHintsController);

// Prevents the view from potentially visible whitespace
function fixSpace(str) {
    const noBreakWhitespace = '\xa0';
    return str.replace(/[ \t]/g, noBreakWhitespace);
}
commands/* CommandsRegistry */.P.registerCommand('_executeInlayHintProvider', (accessor, ...args) => inlayHintsController_awaiter(void 0, void 0, void 0, function* () {
    const [uri, range] = args;
    (0,types/* assertType */.p_)(common_uri/* URI */.o.isUri(uri));
    (0,types/* assertType */.p_)(core_range/* Range */.e.isIRange(range));
    const { inlayHintsProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    const ref = yield accessor.get(resolverService/* ITextModelService */.S).createModelReference(uri);
    try {
        const model = yield InlayHintsFragments.create(inlayHintsProvider, ref.object.textEditorModel, [core_range/* Range */.e.lift(range)], cancellation/* CancellationToken */.T.None);
        const result = model.items.map(i => i.hint);
        setTimeout(() => model.dispose(), 0); // dispose after sending to ext host
        return result;
    }
    finally {
        ref.dispose();
    }
}));

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/htmlContent.js
var htmlContent = __webpack_require__(52610);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/languages/language.js
var language = __webpack_require__(57164);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/getHover.js
var getHover = __webpack_require__(26133);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/markdownHoverParticipant.js
var markdownHoverParticipant = __webpack_require__(54223);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(99779);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(43759);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(80757);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsHover.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inlayHintsHover_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var inlayHintsHover_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inlayHintsHover_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

















class InlayHintsHoverAnchor extends hoverTypes/* HoverForeignElementAnchor */.YM {
    constructor(part, owner, initialMousePosX, initialMousePosY) {
        super(10, owner, part.item.anchor.range, initialMousePosX, initialMousePosY, true);
        this.part = part;
    }
}
let InlayHintsHover = class InlayHintsHover extends markdownHoverParticipant/* MarkdownHoverParticipant */.D5 {
    constructor(editor, languageService, openerService, configurationService, _resolverService, languageFeaturesService) {
        super(editor, languageService, openerService, configurationService, languageFeaturesService);
        this._resolverService = _resolverService;
        this.hoverOrdinal = 6;
    }
    suggestHoverAnchor(mouseEvent) {
        var _a;
        const controller = InlayHintsController.get(this._editor);
        if (!controller) {
            return null;
        }
        if (mouseEvent.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */) {
            return null;
        }
        const options = (_a = mouseEvent.target.detail.injectedText) === null || _a === void 0 ? void 0 : _a.options;
        if (!(options instanceof textModel/* ModelDecorationInjectedTextOptions */.HS && options.attachedData instanceof RenderedInlayHintLabelPart)) {
            return null;
        }
        return new InlayHintsHoverAnchor(options.attachedData, this, mouseEvent.event.posx, mouseEvent.event.posy);
    }
    computeSync() {
        return [];
    }
    computeAsync(anchor, _lineDecorations, token) {
        if (!(anchor instanceof InlayHintsHoverAnchor)) {
            return common_async/* AsyncIterableObject */.Aq.EMPTY;
        }
        return new common_async/* AsyncIterableObject */.Aq((executor) => inlayHintsHover_awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            const { part } = anchor;
            yield part.item.resolve(token);
            if (token.isCancellationRequested) {
                return;
            }
            // (1) Inlay Tooltip
            let itemTooltip;
            if (typeof part.item.hint.tooltip === 'string') {
                itemTooltip = new htmlContent/* MarkdownString */.W5().appendText(part.item.hint.tooltip);
            }
            else if (part.item.hint.tooltip) {
                itemTooltip = part.item.hint.tooltip;
            }
            if (itemTooltip) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [itemTooltip], false, 0));
            }
            // (1.2) Inlay dbl-click gesture
            if ((0,arrays/* isNonEmptyArray */.Of)(part.item.hint.textEdits)) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.dbl', "Double-click to insert"))], false, 10001));
            }
            // (2) Inlay Label Part Tooltip
            let partTooltip;
            if (typeof part.part.tooltip === 'string') {
                partTooltip = new htmlContent/* MarkdownString */.W5().appendText(part.part.tooltip);
            }
            else if (part.part.tooltip) {
                partTooltip = part.part.tooltip;
            }
            if (partTooltip) {
                executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [partTooltip], false, 1));
            }
            // (2.2) Inlay Label Part Help Hover
            if (part.part.location || part.part.command) {
                let linkHint;
                const useMetaKey = this._editor.getOption(76 /* EditorOption.multiCursorModifier */) === 'altKey';
                const kb = useMetaKey
                    ? platform/* isMacintosh */.dz
                        ? (0,nls/* localize */.NC)('links.navigate.kb.meta.mac', "cmd + click")
                        : (0,nls/* localize */.NC)('links.navigate.kb.meta', "ctrl + click")
                    : platform/* isMacintosh */.dz
                        ? (0,nls/* localize */.NC)('links.navigate.kb.alt.mac', "option + click")
                        : (0,nls/* localize */.NC)('links.navigate.kb.alt', "alt + click");
                if (part.part.location && part.part.command) {
                    linkHint = new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.defAndCommand', 'Go to Definition ({0}), right click for more', kb));
                }
                else if (part.part.location) {
                    linkHint = new htmlContent/* MarkdownString */.W5().appendText((0,nls/* localize */.NC)('hint.def', 'Go to Definition ({0})', kb));
                }
                else if (part.part.command) {
                    linkHint = new htmlContent/* MarkdownString */.W5(`[${(0,nls/* localize */.NC)('hint.cmd', "Execute Command")}](${asCommandLink(part.part.command)} "${part.part.command.title}") (${kb})`, { isTrusted: true });
                }
                if (linkHint) {
                    executor.emitOne(new markdownHoverParticipant/* MarkdownHover */.hU(this, anchor.range, [linkHint], false, 10000));
                }
            }
            // (3) Inlay Label Part Location tooltip
            const iterable = yield this._resolveInlayHintLabelPartHover(part, token);
            try {
                for (var _d = true, iterable_1 = __asyncValues(iterable), iterable_1_1; iterable_1_1 = yield iterable_1.next(), _a = iterable_1_1.done, !_a; _d = true) {
                    _c = iterable_1_1.value;
                    _d = false;
                    const item = _c;
                    executor.emitOne(item);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = iterable_1.return)) yield _b.call(iterable_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }));
    }
    _resolveInlayHintLabelPartHover(part, token) {
        return inlayHintsHover_awaiter(this, void 0, void 0, function* () {
            if (!part.part.location) {
                return common_async/* AsyncIterableObject */.Aq.EMPTY;
            }
            const { uri, range } = part.part.location;
            const ref = yield this._resolverService.createModelReference(uri);
            try {
                const model = ref.object.textEditorModel;
                if (!this._languageFeaturesService.hoverProvider.has(model)) {
                    return common_async/* AsyncIterableObject */.Aq.EMPTY;
                }
                return (0,getHover/* getHover */.R8)(this._languageFeaturesService.hoverProvider, model, new position/* Position */.L(range.startLineNumber, range.startColumn), token)
                    .filter(item => !(0,htmlContent/* isEmptyMarkdownString */.CP)(item.hover.contents))
                    .map(item => new markdownHoverParticipant/* MarkdownHover */.hU(this, part.item.anchor.range, item.hover.contents, false, 2 + item.ordinal));
            }
            finally {
                ref.dispose();
            }
        });
    }
};
InlayHintsHover = inlayHintsHover_decorate([
    inlayHintsHover_param(1, language/* ILanguageService */.O),
    inlayHintsHover_param(2, common_opener/* IOpenerService */.v4),
    inlayHintsHover_param(3, configuration/* IConfigurationService */.Ui),
    inlayHintsHover_param(4, resolverService/* ITextModelService */.S),
    inlayHintsHover_param(5, languageFeatures/* ILanguageFeaturesService */.p)
], InlayHintsHover);


;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




(0,editorExtensions/* registerEditorContribution */._K)(InlayHintsController.ID, InlayHintsController, 1 /* EditorContributionInstantiation.AfterFirstRender */);
hoverTypes/* HoverParticipantRegistry */.Ae.register(InlayHintsHover);


/***/ }),

/***/ 62754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: function() { return /* binding */ goToDefinitionWithLocation; },
/* harmony export */   u: function() { return /* binding */ showGoToContextMenu; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25541);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98764);
/* harmony import */ var _base_common_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72258);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3981);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31744);
/* harmony import */ var _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44920);
/* harmony import */ var _peekView_browser_peekView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82146);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47619);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38389);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78658);
/* harmony import */ var _platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88823);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73830);
/* harmony import */ var _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70760);
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














function showGoToContextMenu(accessor, editor, anchor, part) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__/* .ITextModelService */ .S);
        const contextMenuService = accessor.get(_platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_10__/* .IContextMenuService */ .i);
        const commandService = accessor.get(_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_8__/* .ICommandService */ .H);
        const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_11__/* .IInstantiationService */ .TG);
        const notificationService = accessor.get(_platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__/* .INotificationService */ .lT);
        yield part.item.resolve(_base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_2__/* .CancellationToken */ .T.None);
        if (!part.part.location) {
            return;
        }
        const location = part.part.location;
        const menuActions = [];
        // from all registered (not active) context menu actions select those
        // that are a symbol navigation actions
        const filter = new Set(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuRegistry */ .BH.getMenuItems(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuId */ .eH.EditorContext)
            .map(item => (0,_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .isIMenuItem */ .vr)(item) ? item.command.id : (0,_base_common_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUuid */ .R)()));
        for (const delegate of _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .SymbolNavigationAction */ .Bj.all()) {
            if (filter.has(delegate.desc.id)) {
                menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU(delegate.desc.id, _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_7__/* .MenuItemAction */ .U8.label(delegate.desc, { renderShortTitle: true }), undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                    const ref = yield resolverService.createModelReference(location.uri);
                    try {
                        const symbolAnchor = new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .SymbolNavigationAnchor */ ._k(ref.object.textEditorModel, _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.getStartPosition(location.range));
                        const range = part.item.anchor.range;
                        yield instaService.invokeFunction(delegate.runEditorCommand.bind(delegate), editor, symbolAnchor, range);
                    }
                    finally {
                        ref.dispose();
                    }
                })));
            }
        }
        if (part.part.command) {
            const { command } = part.part;
            menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Separator */ .Z0());
            menuActions.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU(command.id, command.title, undefined, true, () => __awaiter(this, void 0, void 0, function* () {
                var _b;
                try {
                    yield commandService.executeCommand(command.id, ...((_b = command.arguments) !== null && _b !== void 0 ? _b : []));
                }
                catch (err) {
                    notificationService.notify({
                        severity: _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_12__/* .Severity */ .zb.Error,
                        source: part.item.provider.displayName,
                        message: err
                    });
                }
            })));
        }
        // show context menu
        const useShadowDOM = editor.getOption(125 /* EditorOption.useShadowDOM */);
        contextMenuService.showContextMenu({
            domForShadowRoot: useShadowDOM ? (_a = editor.getDomNode()) !== null && _a !== void 0 ? _a : undefined : undefined,
            getAnchor: () => {
                const box = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .getDomNodePagePosition */ .i(anchor);
                return { x: box.left, y: box.top + box.height + 8 };
            },
            getActions: () => menuActions,
            onHide: () => {
                editor.focus();
            },
            autoSelectFirstItem: true,
        });
    });
}
function goToDefinitionWithLocation(accessor, event, editor, location) {
    return __awaiter(this, void 0, void 0, function* () {
        const resolverService = accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__/* .ITextModelService */ .S);
        const ref = yield resolverService.createModelReference(location.uri);
        yield editor.invokeWithinContext((accessor) => __awaiter(this, void 0, void 0, function* () {
            const openToSide = event.hasSideBySideModifier;
            const contextKeyService = accessor.get(_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .IContextKeyService */ .i6);
            const isInPeek = _peekView_browser_peekView_js__WEBPACK_IMPORTED_MODULE_6__/* .PeekContext */ .Jy.inPeekEditor.getValue(contextKeyService);
            const canPeek = !openToSide && editor.getOption(86 /* EditorOption.definitionLinkOpensInPeek */) && !isInPeek;
            const action = new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .DefinitionAction */ .BT({ openToSide, openInPeek: canPeek, muteMessage: true }, { title: { value: '', original: '' }, id: '', precondition: undefined });
            return action.run(accessor, new _gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_5__/* .SymbolNavigationAnchor */ ._k(ref.object.textEditorModel, _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.getStartPosition(location.range)), _common_core_range_js__WEBPACK_IMPORTED_MODULE_13__/* .Range */ .e.lift(location.range));
        }));
        ref.dispose();
    });
}


/***/ })

}]);