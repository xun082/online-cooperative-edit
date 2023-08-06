"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-2d6b43a1"],{

/***/ 55566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .rename-box {\n\tz-index: 100;\n\tcolor: inherit;\n\tborder-radius: 4px;\n}\n\n.monaco-editor .rename-box.preview {\n\tpadding: 4px 4px 0 4px;\n}\n\n.monaco-editor .rename-box .rename-input {\n\tpadding: 3px;\n\tborder-radius: 2px;\n}\n\n.monaco-editor .rename-box .rename-label {\n\tdisplay: none;\n\topacity: .8;\n}\n\n.monaco-editor .rename-box.preview .rename-label {\n\tdisplay: inherit;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 781:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RenameAction: function() { return /* binding */ RenameAction; },
  rename: function() { return /* binding */ rename; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js + 1 modules
var aria = __webpack_require__(70385);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/uri.js
var common_uri = __webpack_require__(56946);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/editorState/browser/editorState.js + 1 modules
var editorState = __webpack_require__(1930);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/editorExtensions.js
var editorExtensions = __webpack_require__(91213);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/services/bulkEditService.js
var bulkEditService = __webpack_require__(24581);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/services/codeEditorService.js
var codeEditorService = __webpack_require__(74312);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/position.js
var position = __webpack_require__(13372);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/core/range.js
var range = __webpack_require__(76584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/editorContextKeys.js
var editorContextKeys = __webpack_require__(94872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/textResourceConfiguration.js
var textResourceConfiguration = __webpack_require__(33302);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/message/browser/messageController.js + 1 modules
var messageController = __webpack_require__(16958);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configurationRegistry.js
var configurationRegistry = __webpack_require__(85118);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/log/common/log.js
var log = __webpack_require__(28876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/progress/common/progress.js
var progress = __webpack_require__(99871);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(72015);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.css
var renameInputField = __webpack_require__(55566);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(renameInputField/* default */.Z, options);




       /* harmony default export */ var browser_renameInputField = (renameInputField/* default */.Z && renameInputField/* default */.Z.locals ? renameInputField/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/renameInputField.js
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








const CONTEXT_RENAME_INPUT_VISIBLE = new contextkey/* RawContextKey */.uy('renameInputVisible', false, (0,nls/* localize */.NC)('renameInputVisible', "Whether the rename input widget is visible"));
let RenameInputField = class RenameInputField {
    constructor(_editor, _acceptKeybindings, _themeService, _keybindingService, contextKeyService) {
        this._editor = _editor;
        this._acceptKeybindings = _acceptKeybindings;
        this._themeService = _themeService;
        this._keybindingService = _keybindingService;
        this._disposables = new lifecycle/* DisposableStore */.SL();
        this.allowEditorOverflow = true;
        this._visibleContextKey = CONTEXT_RENAME_INPUT_VISIBLE.bindTo(contextKeyService);
        this._editor.addContentWidget(this);
        this._disposables.add(this._editor.onDidChangeConfiguration(e => {
            if (e.hasChanged(48 /* EditorOption.fontInfo */)) {
                this._updateFont();
            }
        }));
        this._disposables.add(_themeService.onDidColorThemeChange(this._updateStyles, this));
    }
    dispose() {
        this._disposables.dispose();
        this._editor.removeContentWidget(this);
    }
    getId() {
        return '__renameInputWidget';
    }
    getDomNode() {
        if (!this._domNode) {
            this._domNode = document.createElement('div');
            this._domNode.className = 'monaco-editor rename-box';
            this._input = document.createElement('input');
            this._input.className = 'rename-input';
            this._input.type = 'text';
            this._input.setAttribute('aria-label', (0,nls/* localize */.NC)('renameAriaLabel', "Rename input. Type new name and press Enter to commit."));
            this._domNode.appendChild(this._input);
            this._label = document.createElement('div');
            this._label.className = 'rename-label';
            this._domNode.appendChild(this._label);
            this._updateFont();
            this._updateStyles(this._themeService.getColorTheme());
        }
        return this._domNode;
    }
    _updateStyles(theme) {
        var _a, _b, _c, _d;
        if (!this._input || !this._domNode) {
            return;
        }
        const widgetShadowColor = theme.getColor(colorRegistry/* widgetShadow */.rh);
        const widgetBorderColor = theme.getColor(colorRegistry/* widgetBorder */.A42);
        this._domNode.style.backgroundColor = String((_a = theme.getColor(colorRegistry/* editorWidgetBackground */.D0T)) !== null && _a !== void 0 ? _a : '');
        this._domNode.style.boxShadow = widgetShadowColor ? ` 0 0 8px 2px ${widgetShadowColor}` : '';
        this._domNode.style.border = widgetBorderColor ? `1px solid ${widgetBorderColor}` : '';
        this._domNode.style.color = String((_b = theme.getColor(colorRegistry/* inputForeground */.zJb)) !== null && _b !== void 0 ? _b : '');
        this._input.style.backgroundColor = String((_c = theme.getColor(colorRegistry/* inputBackground */.sEe)) !== null && _c !== void 0 ? _c : '');
        // this._input.style.color = String(theme.getColor(inputForeground) ?? '');
        const border = theme.getColor(colorRegistry/* inputBorder */.dt_);
        this._input.style.borderWidth = border ? '1px' : '0px';
        this._input.style.borderStyle = border ? 'solid' : 'none';
        this._input.style.borderColor = (_d = border === null || border === void 0 ? void 0 : border.toString()) !== null && _d !== void 0 ? _d : 'none';
    }
    _updateFont() {
        if (!this._input || !this._label) {
            return;
        }
        const fontInfo = this._editor.getOption(48 /* EditorOption.fontInfo */);
        this._input.style.fontFamily = fontInfo.fontFamily;
        this._input.style.fontWeight = fontInfo.fontWeight;
        this._input.style.fontSize = `${fontInfo.fontSize}px`;
        this._label.style.fontSize = `${fontInfo.fontSize * 0.8}px`;
    }
    getPosition() {
        if (!this._visible) {
            return null;
        }
        return {
            position: this._position,
            preference: [2 /* ContentWidgetPositionPreference.BELOW */, 1 /* ContentWidgetPositionPreference.ABOVE */]
        };
    }
    beforeRender() {
        var _a, _b;
        const [accept, preview] = this._acceptKeybindings;
        this._label.innerText = (0,nls/* localize */.NC)({ key: 'label', comment: ['placeholders are keybindings, e.g "F2 to Rename, Shift+F2 to Preview"'] }, "{0} to Rename, {1} to Preview", (_a = this._keybindingService.lookupKeybinding(accept)) === null || _a === void 0 ? void 0 : _a.getLabel(), (_b = this._keybindingService.lookupKeybinding(preview)) === null || _b === void 0 ? void 0 : _b.getLabel());
        return null;
    }
    afterRender(position) {
        if (!position) {
            // cancel rename when input widget isn't rendered anymore
            this.cancelInput(true);
        }
    }
    acceptInput(wantsPreview) {
        var _a;
        (_a = this._currentAcceptInput) === null || _a === void 0 ? void 0 : _a.call(this, wantsPreview);
    }
    cancelInput(focusEditor) {
        var _a;
        (_a = this._currentCancelInput) === null || _a === void 0 ? void 0 : _a.call(this, focusEditor);
    }
    getInput(where, value, selectionStart, selectionEnd, supportPreview, token) {
        this._domNode.classList.toggle('preview', supportPreview);
        this._position = new position/* Position */.L(where.startLineNumber, where.startColumn);
        this._input.value = value;
        this._input.setAttribute('selectionStart', selectionStart.toString());
        this._input.setAttribute('selectionEnd', selectionEnd.toString());
        this._input.size = Math.max((where.endColumn - where.startColumn) * 1.1, 20);
        const disposeOnDone = new lifecycle/* DisposableStore */.SL();
        return new Promise(resolve => {
            this._currentCancelInput = (focusEditor) => {
                this._currentAcceptInput = undefined;
                this._currentCancelInput = undefined;
                resolve(focusEditor);
                return true;
            };
            this._currentAcceptInput = (wantsPreview) => {
                if (this._input.value.trim().length === 0 || this._input.value === value) {
                    // empty or whitespace only or not changed
                    this.cancelInput(true);
                    return;
                }
                this._currentAcceptInput = undefined;
                this._currentCancelInput = undefined;
                resolve({
                    newName: this._input.value,
                    wantsPreview: supportPreview && wantsPreview
                });
            };
            disposeOnDone.add(token.onCancellationRequested(() => this.cancelInput(true)));
            disposeOnDone.add(this._editor.onDidBlurEditorWidget(() => this.cancelInput(!document.hasFocus())));
            this._show();
        }).finally(() => {
            disposeOnDone.dispose();
            this._hide();
        });
    }
    _show() {
        this._editor.revealLineInCenterIfOutsideViewport(this._position.lineNumber, 0 /* ScrollType.Smooth */);
        this._visible = true;
        this._visibleContextKey.set(true);
        this._editor.layoutContentWidget(this);
        setTimeout(() => {
            this._input.focus();
            this._input.setSelectionRange(parseInt(this._input.getAttribute('selectionStart')), parseInt(this._input.getAttribute('selectionEnd')));
        }, 100);
    }
    _hide() {
        this._visible = false;
        this._visibleContextKey.reset();
        this._editor.layoutContentWidget(this);
    }
};
RenameInputField = __decorate([
    __param(2, themeService/* IThemeService */.XE),
    __param(3, keybinding/* IKeybindingService */.d),
    __param(4, contextkey/* IContextKeyService */.i6)
], RenameInputField);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/services/languageFeatures.js
var languageFeatures = __webpack_require__(58431);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var rename_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var rename_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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


























class RenameSkeleton {
    constructor(model, position, registry) {
        this.model = model;
        this.position = position;
        this._providerRenameIdx = 0;
        this._providers = registry.ordered(model);
    }
    hasProvider() {
        return this._providers.length > 0;
    }
    resolveRenameLocation(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const rejects = [];
            for (this._providerRenameIdx = 0; this._providerRenameIdx < this._providers.length; this._providerRenameIdx++) {
                const provider = this._providers[this._providerRenameIdx];
                if (!provider.resolveRenameLocation) {
                    break;
                }
                const res = yield provider.resolveRenameLocation(this.model, this.position, token);
                if (!res) {
                    continue;
                }
                if (res.rejectReason) {
                    rejects.push(res.rejectReason);
                    continue;
                }
                return res;
            }
            const word = this.model.getWordAtPosition(this.position);
            if (!word) {
                return {
                    range: range/* Range */.e.fromPositions(this.position),
                    text: '',
                    rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
                };
            }
            return {
                range: new range/* Range */.e(this.position.lineNumber, word.startColumn, this.position.lineNumber, word.endColumn),
                text: word.word,
                rejectReason: rejects.length > 0 ? rejects.join('\n') : undefined
            };
        });
    }
    provideRenameEdits(newName, token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._provideRenameEdits(newName, this._providerRenameIdx, [], token);
        });
    }
    _provideRenameEdits(newName, i, rejects, token) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this._providers[i];
            if (!provider) {
                return {
                    edits: [],
                    rejectReason: rejects.join('\n')
                };
            }
            const result = yield provider.provideRenameEdits(this.model, this.position, newName, token);
            if (!result) {
                return this._provideRenameEdits(newName, i + 1, rejects.concat(nls/* localize */.NC('no result', "No result.")), token);
            }
            else if (result.rejectReason) {
                return this._provideRenameEdits(newName, i + 1, rejects.concat(result.rejectReason), token);
            }
            return result;
        });
    }
}
function rename(registry, model, position, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        const skeleton = new RenameSkeleton(model, position, registry);
        const loc = yield skeleton.resolveRenameLocation(cancellation/* CancellationToken */.T.None);
        if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
            return { edits: [], rejectReason: loc.rejectReason };
        }
        return skeleton.provideRenameEdits(newName, cancellation/* CancellationToken */.T.None);
    });
}
// ---  register actions and commands
let RenameController = class RenameController {
    static get(editor) {
        return editor.getContribution(RenameController.ID);
    }
    constructor(editor, _instaService, _notificationService, _bulkEditService, _progressService, _logService, _configService, _languageFeaturesService) {
        this.editor = editor;
        this._instaService = _instaService;
        this._notificationService = _notificationService;
        this._bulkEditService = _bulkEditService;
        this._progressService = _progressService;
        this._logService = _logService;
        this._configService = _configService;
        this._languageFeaturesService = _languageFeaturesService;
        this._disposableStore = new lifecycle/* DisposableStore */.SL();
        this._cts = new cancellation/* CancellationTokenSource */.A();
        this._renameInputField = this._disposableStore.add(this._instaService.createInstance(RenameInputField, this.editor, ['acceptRenameInput', 'acceptRenameInputWithPreview']));
    }
    dispose() {
        this._disposableStore.dispose();
        this._cts.dispose(true);
    }
    run() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            // set up cancellation token to prevent reentrant rename, this
            // is the parent to the resolve- and rename-tokens
            this._cts.dispose(true);
            this._cts = new cancellation/* CancellationTokenSource */.A();
            if (!this.editor.hasModel()) {
                return undefined;
            }
            const position = this.editor.getPosition();
            const skeleton = new RenameSkeleton(this.editor.getModel(), position, this._languageFeaturesService.renameProvider);
            if (!skeleton.hasProvider()) {
                return undefined;
            }
            // part 1 - resolve rename location
            const cts1 = new editorState/* EditorStateCancellationTokenSource */.Dl(this.editor, 4 /* CodeEditorStateFlag.Position */ | 1 /* CodeEditorStateFlag.Value */, undefined, this._cts.token);
            let loc;
            try {
                const resolveLocationOperation = skeleton.resolveRenameLocation(cts1.token);
                this._progressService.showWhile(resolveLocationOperation, 250);
                loc = yield resolveLocationOperation;
            }
            catch (e) {
                (_a = messageController/* MessageController */.O.get(this.editor)) === null || _a === void 0 ? void 0 : _a.showMessage(e || nls/* localize */.NC('resolveRenameLocationFailed', "An unknown error occurred while resolving rename location"), position);
                return undefined;
            }
            finally {
                cts1.dispose();
            }
            if (!loc) {
                return undefined;
            }
            if (loc.rejectReason) {
                (_b = messageController/* MessageController */.O.get(this.editor)) === null || _b === void 0 ? void 0 : _b.showMessage(loc.rejectReason, position);
                return undefined;
            }
            if (cts1.token.isCancellationRequested) {
                return undefined;
            }
            // part 2 - do rename at location
            const cts2 = new editorState/* EditorStateCancellationTokenSource */.Dl(this.editor, 4 /* CodeEditorStateFlag.Position */ | 1 /* CodeEditorStateFlag.Value */, loc.range, this._cts.token);
            const selection = this.editor.getSelection();
            let selectionStart = 0;
            let selectionEnd = loc.text.length;
            if (!range/* Range */.e.isEmpty(selection) && !range/* Range */.e.spansMultipleLines(selection) && range/* Range */.e.containsRange(loc.range, selection)) {
                selectionStart = Math.max(0, selection.startColumn - loc.range.startColumn);
                selectionEnd = Math.min(loc.range.endColumn, selection.endColumn) - loc.range.startColumn;
            }
            const supportPreview = this._bulkEditService.hasPreviewHandler() && this._configService.getValue(this.editor.getModel().uri, 'editor.rename.enablePreview');
            const inputFieldResult = yield this._renameInputField.getInput(loc.range, loc.text, selectionStart, selectionEnd, supportPreview, cts2.token);
            // no result, only hint to focus the editor or not
            if (typeof inputFieldResult === 'boolean') {
                if (inputFieldResult) {
                    this.editor.focus();
                }
                cts2.dispose();
                return undefined;
            }
            this.editor.focus();
            const renameOperation = (0,common_async/* raceCancellation */.eP)(skeleton.provideRenameEdits(inputFieldResult.newName, cts2.token), cts2.token).then((renameResult) => __awaiter(this, void 0, void 0, function* () {
                if (!renameResult || !this.editor.hasModel()) {
                    return;
                }
                if (renameResult.rejectReason) {
                    this._notificationService.info(renameResult.rejectReason);
                    return;
                }
                // collapse selection to active end
                this.editor.setSelection(range/* Range */.e.fromPositions(this.editor.getSelection().getPosition()));
                this._bulkEditService.apply(renameResult, {
                    editor: this.editor,
                    showPreview: inputFieldResult.wantsPreview,
                    label: nls/* localize */.NC('label', "Renaming '{0}' to '{1}'", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                    code: 'undoredo.rename',
                    quotableLabel: nls/* localize */.NC('quotableLabel', "Renaming {0} to {1}", loc === null || loc === void 0 ? void 0 : loc.text, inputFieldResult.newName),
                    respectAutoSaveConfig: true
                }).then(result => {
                    if (result.ariaSummary) {
                        (0,aria/* alert */.Z9)(nls/* localize */.NC('aria', "Successfully renamed '{0}' to '{1}'. Summary: {2}", loc.text, inputFieldResult.newName, result.ariaSummary));
                    }
                }).catch(err => {
                    this._notificationService.error(nls/* localize */.NC('rename.failedApply', "Rename failed to apply edits"));
                    this._logService.error(err);
                });
            }), err => {
                this._notificationService.error(nls/* localize */.NC('rename.failed', "Rename failed to compute edits"));
                this._logService.error(err);
            }).finally(() => {
                cts2.dispose();
            });
            this._progressService.showWhile(renameOperation, 250);
            return renameOperation;
        });
    }
    acceptRenameInput(wantsPreview) {
        this._renameInputField.acceptInput(wantsPreview);
    }
    cancelRenameInput() {
        this._renameInputField.cancelInput(true);
    }
};
RenameController.ID = 'editor.contrib.renameController';
RenameController = rename_decorate([
    rename_param(1, instantiation/* IInstantiationService */.TG),
    rename_param(2, notification/* INotificationService */.lT),
    rename_param(3, bulkEditService/* IBulkEditService */.vu),
    rename_param(4, progress/* IEditorProgressService */.ek),
    rename_param(5, log/* ILogService */.VZ),
    rename_param(6, textResourceConfiguration/* ITextResourceConfigurationService */.V),
    rename_param(7, languageFeatures/* ILanguageFeaturesService */.p)
], RenameController);
// ---- action implementation
class RenameAction extends editorExtensions/* EditorAction */.R6 {
    constructor() {
        super({
            id: 'editor.action.rename',
            label: nls/* localize */.NC('rename.label', "Rename Symbol"),
            alias: 'Rename Symbol',
            precondition: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.writable, editorContextKeys/* EditorContextKeys */.u.hasRenameProvider),
            kbOpts: {
                kbExpr: editorContextKeys/* EditorContextKeys */.u.editorTextFocus,
                primary: 60 /* KeyCode.F2 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            contextMenuOpts: {
                group: '1_modification',
                order: 1.1
            }
        });
    }
    runCommand(accessor, args) {
        const editorService = accessor.get(codeEditorService/* ICodeEditorService */.$);
        const [uri, pos] = Array.isArray(args) && args || [undefined, undefined];
        if (common_uri/* URI */.o.isUri(uri) && position/* Position */.L.isIPosition(pos)) {
            return editorService.openCodeEditor({ resource: uri }, editorService.getActiveCodeEditor()).then(editor => {
                if (!editor) {
                    return;
                }
                editor.setPosition(pos);
                editor.invokeWithinContext(accessor => {
                    this.reportTelemetry(accessor, editor);
                    return this.run(accessor, editor);
                });
            }, errors/* onUnexpectedError */.dL);
        }
        return super.runCommand(accessor, args);
    }
    run(accessor, editor) {
        const controller = RenameController.get(editor);
        if (controller) {
            return controller.run();
        }
        return Promise.resolve();
    }
}
(0,editorExtensions/* registerEditorContribution */._K)(RenameController.ID, RenameController, 4 /* EditorContributionInstantiation.Lazy */);
(0,editorExtensions/* registerEditorAction */.Qr)(RenameAction);
const RenameCommand = editorExtensions/* EditorCommand */._l.bindToContribution(RenameController.get);
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'acceptRenameInput',
    precondition: CONTEXT_RENAME_INPUT_VISIBLE,
    handler: x => x.acceptRenameInput(false),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.not('isComposing')),
        primary: 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'acceptRenameInputWithPreview',
    precondition: contextkey/* ContextKeyExpr */.Ao.and(CONTEXT_RENAME_INPUT_VISIBLE, contextkey/* ContextKeyExpr */.Ao.has('config.editor.rename.enablePreview')),
    handler: x => x.acceptRenameInput(true),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: contextkey/* ContextKeyExpr */.Ao.and(editorContextKeys/* EditorContextKeys */.u.focus, contextkey/* ContextKeyExpr */.Ao.not('isComposing')),
        primary: 1024 /* KeyMod.Shift */ + 3 /* KeyCode.Enter */
    }
}));
(0,editorExtensions/* registerEditorCommand */.fK)(new RenameCommand({
    id: 'cancelRenameInput',
    precondition: CONTEXT_RENAME_INPUT_VISIBLE,
    handler: x => x.cancelRenameInput(),
    kbOpts: {
        weight: 100 /* KeybindingWeight.EditorContrib */ + 99,
        kbExpr: editorContextKeys/* EditorContextKeys */.u.focus,
        primary: 9 /* KeyCode.Escape */,
        secondary: [1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */]
    }
}));
// ---- api bridge command
(0,editorExtensions/* registerModelAndPositionCommand */.sb)('_executeDocumentRenameProvider', function (accessor, model, position, ...args) {
    const [newName] = args;
    (0,types/* assertType */.p_)(typeof newName === 'string');
    const { renameProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
    return rename(renameProvider, model, position, newName);
});
(0,editorExtensions/* registerModelAndPositionCommand */.sb)('_executePrepareRename', function (accessor, model, position) {
    return __awaiter(this, void 0, void 0, function* () {
        const { renameProvider } = accessor.get(languageFeatures/* ILanguageFeaturesService */.p);
        const skeleton = new RenameSkeleton(model, position, renameProvider);
        const loc = yield skeleton.resolveRenameLocation(cancellation/* CancellationToken */.T.None);
        if (loc === null || loc === void 0 ? void 0 : loc.rejectReason) {
            throw new Error(loc.rejectReason);
        }
        return loc;
    });
});
//todo@jrieken use editor options world
platform/* Registry */.B.as(configurationRegistry/* Extensions */.IP.Configuration).registerConfiguration({
    id: 'editor',
    properties: {
        'editor.rename.enablePreview': {
            scope: 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
            description: nls/* localize */.NC('enablePreview', "Enable/disable the ability to preview changes before renaming"),
            default: true,
            type: 'boolean'
        }
    }
});


/***/ })

}]);