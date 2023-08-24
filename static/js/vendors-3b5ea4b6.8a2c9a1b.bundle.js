"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3b5ea4b6"],{

/***/ 2241:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports AccessibleDiffViewerNext, AccessibleDiffViewerPrev, findFocusedDiffEditor */
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41886);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57584);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80757);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47619);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38389);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78658);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const accessibleDiffViewerCategory = {
    value: (0,_nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC)('accessibleDiffViewer', 'Accessible Diff Viewer'),
    original: 'Accessible Diff Viewer',
};
class AccessibleDiffViewerNext extends _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .Action2 */ .Ke {
    constructor() {
        super({
            id: AccessibleDiffViewerNext.id,
            title: { value: (0,_nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC)('editor.action.accessibleDiffViewer.next', "Go to Next Difference"), original: 'Go to Next Difference' },
            category: accessibleDiffViewerCategory,
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__/* .ContextKeyExpr */ .Ao.has('isInDiffEditor'),
            keybinding: {
                primary: 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            f1: true,
        });
    }
    run(accessor) {
        const diffEditor = findFocusedDiffEditor(accessor);
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.accessibleDiffViewerNext();
    }
}
AccessibleDiffViewerNext.id = 'editor.action.accessibleDiffViewer.next';
_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .MenuRegistry */ .BH.appendMenuItem(_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .MenuId */ .eH.EditorTitle, {
    command: {
        id: AccessibleDiffViewerNext.id,
        title: (0,_nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC)('Open Accessible Diff Viewer', "Open Accessible Diff Viewer"),
    },
    order: 10,
    group: '2_diff',
    when: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__/* .ContextKeyExpr */ .Ao.and(_common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorContextKeys */ .u.accessibleDiffViewerVisible.negate(), _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__/* .ContextKeyExpr */ .Ao.has('isInDiffEditor')),
});
class AccessibleDiffViewerPrev extends _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .Action2 */ .Ke {
    constructor() {
        super({
            id: AccessibleDiffViewerPrev.id,
            title: { value: (0,_nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC)('editor.action.accessibleDiffViewer.prev', "Go to Previous Difference"), original: 'Go to Previous Difference' },
            category: accessibleDiffViewerCategory,
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_5__/* .ContextKeyExpr */ .Ao.has('isInDiffEditor'),
            keybinding: {
                primary: 1024 /* KeyMod.Shift */ | 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            },
            f1: true,
        });
    }
    run(accessor) {
        const diffEditor = findFocusedDiffEditor(accessor);
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.accessibleDiffViewerPrev();
    }
}
AccessibleDiffViewerPrev.id = 'editor.action.accessibleDiffViewer.prev';
function findFocusedDiffEditor(accessor) {
    var _a;
    const codeEditorService = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_0__/* .ICodeEditorService */ .$);
    const diffEditors = codeEditorService.listDiffEditors();
    const activeCodeEditor = (_a = codeEditorService.getFocusedCodeEditor()) !== null && _a !== void 0 ? _a : codeEditorService.getActiveCodeEditor();
    if (!activeCodeEditor) {
        return null;
    }
    for (let i = 0, len = diffEditors.length; i < len; i++) {
        const diffEditor = diffEditors[i];
        if (diffEditor.getModifiedEditor().getId() === activeCodeEditor.getId() || diffEditor.getOriginalEditor().getId() === activeCodeEditor.getId()) {
            return diffEditor;
        }
    }
    if (document.activeElement) {
        for (const d of diffEditors) {
            const container = d.getContainerDomNode();
            if (isElementOrParentOf(container, document.activeElement)) {
                return d;
            }
        }
    }
    return null;
}
function isElementOrParentOf(elementOrParent, element) {
    let e = element;
    while (e) {
        if (e === elementOrParent) {
            return true;
        }
        e = e.parentElement;
    }
    return false;
}
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommandAlias('editor.action.diffReview.next', AccessibleDiffViewerNext.id);
(0,_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerAction2 */ .r1)(AccessibleDiffViewerNext);
_platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_4__/* .CommandsRegistry */ .P.registerCommandAlias('editor.action.diffReview.prev', AccessibleDiffViewerPrev.id);
(0,_platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_3__/* .registerAction2 */ .r1)(AccessibleDiffViewerPrev);


/***/ }),

/***/ 13130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ diffEditorWidgetTtPolicy; },
/* harmony export */   p: function() { return /* binding */ DiffEditorWidget; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(27661);
/* harmony import */ var _base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68069);
/* harmony import */ var _base_browser_ui_mouseCursor_mouseCursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97039);
/* harmony import */ var _base_browser_ui_sash_sash_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4025);
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14299);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69058);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13113);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25702);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64720);
/* harmony import */ var _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52610);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26794);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50077);
/* harmony import */ var _media_diffEditor_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50615);
/* harmony import */ var _config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(93887);
/* harmony import */ var _config_elementSizeObserver_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47673);
/* harmony import */ var _editorExtensions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79959);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41886);
/* harmony import */ var _stableEditorScroll_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(52522);
/* harmony import */ var _codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41728);
/* harmony import */ var _diffNavigator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1314);
/* harmony import */ var _diffReview_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(54074);
/* harmony import */ var _inlineDiffMargin_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(43130);
/* harmony import */ var _workerBasedDocumentDiffProvider_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(3173);
/* harmony import */ var _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(58908);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(65201);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(3981);
/* harmony import */ var _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63156);
/* harmony import */ var _common_editorCommon_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96341);
/* harmony import */ var _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(57584);
/* harmony import */ var _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(95792);
/* harmony import */ var _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(35900);
/* harmony import */ var _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(60533);
/* harmony import */ var _common_viewModel_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1975);
/* harmony import */ var _common_viewModel_overviewZoneManager_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(71895);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(80757);
/* harmony import */ var _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(71966);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(78658);
/* harmony import */ var _platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(88823);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(73830);
/* harmony import */ var _platform_instantiation_common_serviceCollection_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(67463);
/* harmony import */ var _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(70760);
/* harmony import */ var _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(32561);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(9732);
/* harmony import */ var _platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(85519);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(26236);
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














































class VisualEditorState {
    constructor(_contextMenuService, _clipboardService) {
        this._contextMenuService = _contextMenuService;
        this._clipboardService = _clipboardService;
        this._zones = [];
        this._inlineDiffMargins = [];
        this._zonesMap = {};
        this._decorations = [];
    }
    getForeignViewZones(allViewZones) {
        return allViewZones.filter((z) => !this._zonesMap[String(z.id)]);
    }
    clean(editor) {
        // (1) View zones
        if (this._zones.length > 0) {
            editor.changeViewZones((viewChangeAccessor) => {
                for (const zoneId of this._zones) {
                    viewChangeAccessor.removeZone(zoneId);
                }
            });
        }
        this._zones = [];
        this._zonesMap = {};
        // (2) Model decorations
        editor.changeDecorations((changeAccessor) => {
            this._decorations = changeAccessor.deltaDecorations(this._decorations, []);
        });
    }
    apply(editor, overviewRuler, newDecorations, restoreScrollState) {
        const scrollState = restoreScrollState ? _stableEditorScroll_js__WEBPACK_IMPORTED_MODULE_39__/* .StableEditorScrollState */ .Z.capture(editor) : null;
        // view zones
        editor.changeViewZones((viewChangeAccessor) => {
            var _a;
            for (const zoneId of this._zones) {
                viewChangeAccessor.removeZone(zoneId);
            }
            for (const inlineDiffMargin of this._inlineDiffMargins) {
                inlineDiffMargin.dispose();
            }
            this._zones = [];
            this._zonesMap = {};
            this._inlineDiffMargins = [];
            for (let i = 0, length = newDecorations.zones.length; i < length; i++) {
                const viewZone = newDecorations.zones[i];
                viewZone.suppressMouseDown = true;
                viewZone.showInHiddenAreas = true;
                const zoneId = viewChangeAccessor.addZone(viewZone);
                this._zones.push(zoneId);
                this._zonesMap[String(zoneId)] = true;
                if (newDecorations.zones[i].diff && viewZone.marginDomNode) {
                    viewZone.suppressMouseDown = false;
                    if (((_a = newDecorations.zones[i].diff) === null || _a === void 0 ? void 0 : _a.originalModel.getValueLength()) !== 0) {
                        // do not contribute diff margin actions for newly created files
                        this._inlineDiffMargins.push(new _inlineDiffMargin_js__WEBPACK_IMPORTED_MODULE_19__/* .InlineDiffMargin */ .t(zoneId, viewZone.marginDomNode, editor, newDecorations.zones[i].diff, this._contextMenuService, this._clipboardService));
                    }
                }
            }
        });
        scrollState === null || scrollState === void 0 ? void 0 : scrollState.restore(editor);
        // decorations
        editor.changeDecorations((changeAccessor) => {
            this._decorations = changeAccessor.deltaDecorations(this._decorations, newDecorations.decorations);
        });
        // overview ruler
        overviewRuler === null || overviewRuler === void 0 ? void 0 : overviewRuler.setZones(newDecorations.overviewZones);
    }
}
let DIFF_EDITOR_ID = 0;
const diffInsertIcon = (0,_platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_37__/* .registerIcon */ .q5)('diff-insert', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.add, _nls_js__WEBPACK_IMPORTED_MODULE_29__/* .localize */ .NC('diffInsertIcon', 'Line decoration for inserts in the diff editor.'));
const diffRemoveIcon = (0,_platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_37__/* .registerIcon */ .q5)('diff-remove', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.remove, _nls_js__WEBPACK_IMPORTED_MODULE_29__/* .localize */ .NC('diffRemoveIcon', 'Line decoration for removals in the diff editor.'));
const diffEditorWidgetTtPolicy = (0,_base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .createTrustedTypesPolicy */ .Z)('diffEditorWidget', { createHTML: value => value });
const ariaNavigationTip = _nls_js__WEBPACK_IMPORTED_MODULE_29__/* .localize */ .NC('diff-aria-navigation-tip', ' use Shift + F7 to navigate changes');
let DiffEditorWidget = class DiffEditorWidget extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_10__/* .Disposable */ .JT {
    constructor(domElement, options, codeEditorWidgetOptions, clipboardService, contextKeyService, instantiationService, codeEditorService, themeService, notificationService, contextMenuService, _editorProgressService) {
        super();
        this._editorProgressService = _editorProgressService;
        this._onDidDispose = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Emitter */ .Q5());
        this.onDidDispose = this._onDidDispose.event;
        this._onDidChangeModel = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Emitter */ .Q5());
        this.onDidChangeModel = this._onDidChangeModel.event;
        this._onDidUpdateDiff = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Emitter */ .Q5());
        this.onDidUpdateDiff = this._onDidUpdateDiff.event;
        this._onDidContentSizeChange = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Emitter */ .Q5());
        this._lastOriginalWarning = null;
        this._lastModifiedWarning = null;
        codeEditorService.willCreateDiffEditor();
        this._documentDiffProvider = this._register(instantiationService.createInstance(_workerBasedDocumentDiffProvider_js__WEBPACK_IMPORTED_MODULE_20__/* .WorkerBasedDocumentDiffProvider */ .Q, options));
        this._register(this._documentDiffProvider.onDidChange(e => this._beginUpdateDecorationsSoon()));
        this._codeEditorService = codeEditorService;
        this._contextKeyService = this._register(contextKeyService.createScoped(domElement));
        this._instantiationService = instantiationService.createChild(new _platform_instantiation_common_serviceCollection_js__WEBPACK_IMPORTED_MODULE_40__/* .ServiceCollection */ .y([_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_31__/* .IContextKeyService */ .i6, this._contextKeyService]));
        this._contextKeyService.createKey('isInDiffEditor', true);
        this._themeService = themeService;
        this._notificationService = notificationService;
        this._id = (++DIFF_EDITOR_ID);
        this._state = 0 /* editorBrowser.DiffEditorState.Idle */;
        this._updatingDiffProgress = null;
        this._domElement = domElement;
        options = options || {};
        this._options = validateDiffEditorOptions(options, {
            enableSplitViewResizing: true,
            splitViewDefaultRatio: 0.5,
            renderSideBySide: true,
            renderMarginRevertIcon: true,
            maxComputationTime: 5000,
            maxFileSize: 50,
            ignoreTrimWhitespace: true,
            renderIndicators: true,
            originalEditable: false,
            diffCodeLens: false,
            renderOverviewRuler: true,
            diffWordWrap: 'inherit',
            diffAlgorithm: 'advanced',
            accessibilityVerbose: false,
            experimental: {
                collapseUnchangedRegions: false,
            },
            isInEmbeddedEditor: false,
            onlyShowAccessibleDiffViewer: false,
        });
        this.isEmbeddedDiffEditorKey = _common_editorContextKeys_js__WEBPACK_IMPORTED_MODULE_24__/* .EditorContextKeys */ .u.isEmbeddedDiffEditor.bindTo(this._contextKeyService);
        this.isEmbeddedDiffEditorKey.set(typeof options.isInEmbeddedEditor !== 'undefined' ? options.isInEmbeddedEditor : false);
        this._updateDecorationsRunner = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_5__/* .RunOnceScheduler */ .pY(() => this._updateDecorations(), 0));
        this._containerDomElement = document.createElement('div');
        this._containerDomElement.className = DiffEditorWidget._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide);
        this._containerDomElement.style.position = 'relative';
        this._containerDomElement.style.height = '100%';
        this._domElement.appendChild(this._containerDomElement);
        this._overviewViewportDomElement = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_41__/* .createFastDomNode */ .X)(document.createElement('div'));
        this._overviewViewportDomElement.setClassName('diffViewport');
        this._overviewViewportDomElement.setPosition('absolute');
        this._overviewDomElement = document.createElement('div');
        this._overviewDomElement.className = 'diffOverview';
        this._overviewDomElement.style.position = 'absolute';
        this._overviewDomElement.appendChild(this._overviewViewportDomElement.domNode);
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(this._overviewDomElement, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_DOWN, (e) => {
            this._modifiedEditor.delegateVerticalScrollbarPointerDown(e);
        }));
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(this._overviewDomElement, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_WHEEL, (e) => {
            this._modifiedEditor.delegateScrollFromMouseWheelEvent(e);
        }, { passive: false }));
        if (this._options.renderOverviewRuler) {
            this._containerDomElement.appendChild(this._overviewDomElement);
        }
        // Create left side
        this._originalDomNode = document.createElement('div');
        this._originalDomNode.className = 'editor original';
        this._originalDomNode.style.position = 'absolute';
        this._originalDomNode.style.height = '100%';
        this._containerDomElement.appendChild(this._originalDomNode);
        // Create right side
        this._modifiedDomNode = document.createElement('div');
        this._modifiedDomNode.className = 'editor modified';
        this._modifiedDomNode.style.position = 'absolute';
        this._modifiedDomNode.style.height = '100%';
        this._containerDomElement.appendChild(this._modifiedDomNode);
        this._beginUpdateDecorationsTimeout = -1;
        this._currentlyChangingViewZones = false;
        this._diffComputationToken = 0;
        this._originalEditorState = new VisualEditorState(contextMenuService, clipboardService);
        this._modifiedEditorState = new VisualEditorState(contextMenuService, clipboardService);
        this._isVisible = true;
        this._isHandlingScrollEvent = false;
        this._elementSizeObserver = this._register(new _config_elementSizeObserver_js__WEBPACK_IMPORTED_MODULE_13__/* .ElementSizeObserver */ .I(this._containerDomElement, options.dimension));
        this._register(this._elementSizeObserver.onDidChange(() => this._onDidContainerSizeChanged()));
        if (options.automaticLayout) {
            this._elementSizeObserver.startObserving();
        }
        this._diffComputationResult = null;
        this._originalEditor = this._createLeftHandSideEditor(options, codeEditorWidgetOptions.originalEditor || {});
        this._modifiedEditor = this._createRightHandSideEditor(options, codeEditorWidgetOptions.modifiedEditor || {});
        this._originalOverviewRuler = null;
        this._modifiedOverviewRuler = null;
        this._reviewPane = instantiationService.createInstance(_diffReview_js__WEBPACK_IMPORTED_MODULE_18__/* .DiffReview */ .j, this);
        this._containerDomElement.appendChild(this._reviewPane.domNode.domNode);
        this._containerDomElement.appendChild(this._reviewPane.shadow.domNode);
        this._containerDomElement.appendChild(this._reviewPane.actionBarContainer.domNode);
        if (this._options.renderSideBySide) {
            this._setStrategy(new DiffEditorWidgetSideBySide(this._createDataSource(), this._options.enableSplitViewResizing, this._options.splitViewDefaultRatio));
        }
        else {
            this._setStrategy(new DiffEditorWidgetInline(this._createDataSource(), this._options.enableSplitViewResizing));
        }
        this._register(themeService.onDidColorThemeChange(t => {
            if (this._strategy && this._strategy.applyColors(t)) {
                this._updateDecorationsRunner.schedule();
            }
            this._containerDomElement.className = DiffEditorWidget._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide);
        }));
        const contributions = _editorExtensions_js__WEBPACK_IMPORTED_MODULE_14__/* .EditorExtensionsRegistry */ .Uc.getDiffEditorContributions();
        for (const desc of contributions) {
            try {
                this._register(instantiationService.createInstance(desc.ctor, this));
            }
            catch (err) {
                (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_7__/* .onUnexpectedError */ .dL)(err);
            }
        }
        this._codeEditorService.addDiffEditor(this);
    }
    _setState(newState) {
        if (this._state === newState) {
            return;
        }
        this._state = newState;
        if (this._updatingDiffProgress) {
            this._updatingDiffProgress.done();
            this._updatingDiffProgress = null;
        }
        if (this._state === 1 /* editorBrowser.DiffEditorState.ComputingDiff */) {
            this._updatingDiffProgress = this._editorProgressService.show(true, 1000);
        }
    }
    accessibleDiffViewerNext() {
        this._reviewPane.next();
    }
    accessibleDiffViewerPrev() {
        this._reviewPane.prev();
    }
    static _getClassName(theme, renderSideBySide) {
        let result = 'monaco-diff-editor monaco-editor-background ';
        if (renderSideBySide) {
            result += 'side-by-side ';
        }
        result += (0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_38__/* .getThemeTypeSelector */ .m6)(theme.type);
        return result;
    }
    _disposeOverviewRulers() {
        if (this._originalOverviewRuler) {
            this._overviewDomElement.removeChild(this._originalOverviewRuler.getDomNode());
            this._originalOverviewRuler.dispose();
            this._originalOverviewRuler = null;
        }
        if (this._modifiedOverviewRuler) {
            this._overviewDomElement.removeChild(this._modifiedOverviewRuler.getDomNode());
            this._modifiedOverviewRuler.dispose();
            this._modifiedOverviewRuler = null;
        }
    }
    _createOverviewRulers() {
        if (!this._options.renderOverviewRuler) {
            return;
        }
        _base_common_assert_js__WEBPACK_IMPORTED_MODULE_4__.ok(!this._originalOverviewRuler && !this._modifiedOverviewRuler);
        if (this._originalEditor.hasModel()) {
            this._originalOverviewRuler = this._originalEditor.createOverviewRuler('original diffOverviewRuler');
            this._overviewDomElement.appendChild(this._originalOverviewRuler.getDomNode());
        }
        if (this._modifiedEditor.hasModel()) {
            this._modifiedOverviewRuler = this._modifiedEditor.createOverviewRuler('modified diffOverviewRuler');
            this._overviewDomElement.appendChild(this._modifiedOverviewRuler.getDomNode());
        }
        this._layoutOverviewRulers();
    }
    _createLeftHandSideEditor(options, codeEditorWidgetOptions) {
        const editor = this._createInnerEditor(this._instantiationService, this._originalDomNode, this._adjustOptionsForLeftHandSide(options), codeEditorWidgetOptions);
        this._register(editor.onDidScrollChange((e) => {
            if (this._isHandlingScrollEvent) {
                return;
            }
            if (!e.scrollTopChanged && !e.scrollLeftChanged && !e.scrollHeightChanged) {
                return;
            }
            this._isHandlingScrollEvent = true;
            this._modifiedEditor.setScrollPosition({
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            });
            this._isHandlingScrollEvent = false;
            this._layoutOverviewViewport();
        }));
        this._register(editor.onDidChangeViewZones(() => {
            this._onViewZonesChanged();
        }));
        this._register(editor.onDidChangeConfiguration((e) => {
            if (!editor.getModel()) {
                return;
            }
            if (e.hasChanged(49 /* EditorOption.fontInfo */)) {
                this._updateDecorationsRunner.schedule();
            }
            if (e.hasChanged(143 /* EditorOption.wrappingInfo */)) {
                this._updateDecorationsRunner.cancel();
                this._updateDecorations();
            }
        }));
        this._register(editor.onDidChangeHiddenAreas(() => {
            this._updateDecorationsRunner.cancel();
            this._updateDecorations();
        }));
        this._register(editor.onDidChangeModelContent(() => {
            if (this._isVisible) {
                this._beginUpdateDecorationsSoon();
            }
        }));
        const isInDiffLeftEditorKey = this._contextKeyService.createKey('isInDiffLeftEditor', editor.hasWidgetFocus());
        this._register(editor.onDidFocusEditorWidget(() => isInDiffLeftEditorKey.set(true)));
        this._register(editor.onDidBlurEditorWidget(() => isInDiffLeftEditorKey.set(false)));
        this._register(editor.onDidContentSizeChange(e => {
            const width = this._originalEditor.getContentWidth() + this._modifiedEditor.getContentWidth() + DiffEditorWidget.ONE_OVERVIEW_WIDTH;
            const height = Math.max(this._modifiedEditor.getContentHeight(), this._originalEditor.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: height,
                contentWidth: width,
                contentHeightChanged: e.contentHeightChanged,
                contentWidthChanged: e.contentWidthChanged
            });
        }));
        return editor;
    }
    _createRightHandSideEditor(options, codeEditorWidgetOptions) {
        const editor = this._createInnerEditor(this._instantiationService, this._modifiedDomNode, this._adjustOptionsForRightHandSide(options), codeEditorWidgetOptions);
        this._register(editor.onDidScrollChange((e) => {
            if (this._isHandlingScrollEvent) {
                return;
            }
            if (!e.scrollTopChanged && !e.scrollLeftChanged && !e.scrollHeightChanged) {
                return;
            }
            this._isHandlingScrollEvent = true;
            this._originalEditor.setScrollPosition({
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            });
            this._isHandlingScrollEvent = false;
            this._layoutOverviewViewport();
        }));
        this._register(editor.onDidChangeViewZones(() => {
            this._onViewZonesChanged();
        }));
        this._register(editor.onDidChangeConfiguration((e) => {
            if (!editor.getModel()) {
                return;
            }
            if (e.hasChanged(49 /* EditorOption.fontInfo */)) {
                this._updateDecorationsRunner.schedule();
            }
            if (e.hasChanged(143 /* EditorOption.wrappingInfo */)) {
                this._updateDecorationsRunner.cancel();
                this._updateDecorations();
            }
        }));
        this._register(editor.onDidChangeHiddenAreas(() => {
            this._updateDecorationsRunner.cancel();
            this._updateDecorations();
        }));
        this._register(editor.onDidChangeModelContent(() => {
            if (this._isVisible) {
                this._beginUpdateDecorationsSoon();
            }
        }));
        this._register(editor.onDidChangeModelOptions((e) => {
            if (e.tabSize) {
                this._updateDecorationsRunner.schedule();
            }
        }));
        const isInDiffRightEditorKey = this._contextKeyService.createKey('isInDiffRightEditor', editor.hasWidgetFocus());
        this._register(editor.onDidFocusEditorWidget(() => isInDiffRightEditorKey.set(true)));
        this._register(editor.onDidBlurEditorWidget(() => isInDiffRightEditorKey.set(false)));
        this._register(editor.onDidContentSizeChange(e => {
            const width = this._originalEditor.getContentWidth() + this._modifiedEditor.getContentWidth() + DiffEditorWidget.ONE_OVERVIEW_WIDTH;
            const height = Math.max(this._modifiedEditor.getContentHeight(), this._originalEditor.getContentHeight());
            this._onDidContentSizeChange.fire({
                contentHeight: height,
                contentWidth: width,
                contentHeightChanged: e.contentHeightChanged,
                contentWidthChanged: e.contentWidthChanged
            });
        }));
        // Revert change when an arrow is clicked.
        this._register(editor.onMouseDown(event => {
            var _a, _b;
            if (!event.event.rightButton && event.target.position && ((_a = event.target.element) === null || _a === void 0 ? void 0 : _a.className.includes('arrow-revert-change'))) {
                const lineNumber = event.target.position.lineNumber;
                const viewZone = event.target;
                const change = (_b = this._diffComputationResult) === null || _b === void 0 ? void 0 : _b.changes.find(c => 
                // delete change
                (viewZone === null || viewZone === void 0 ? void 0 : viewZone.detail.afterLineNumber) === c.modifiedStartLineNumber ||
                    // other changes
                    (c.modifiedEndLineNumber > 0 && c.modifiedStartLineNumber === lineNumber));
                if (change) {
                    this.revertChange(change);
                }
                event.event.stopPropagation();
                this._updateDecorations();
                return;
            }
        }));
        return editor;
    }
    /**
     * Reverts a change in the modified editor.
     */
    revertChange(change) {
        const editor = this._modifiedEditor;
        const original = this._originalEditor.getModel();
        const modified = this._modifiedEditor.getModel();
        if (!original || !modified || !editor) {
            return;
        }
        const originalRange = change.originalEndLineNumber > 0 ? new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(change.originalStartLineNumber, 1, change.originalEndLineNumber, original.getLineMaxColumn(change.originalEndLineNumber)) : null;
        const originalContent = originalRange ? original.getValueInRange(originalRange) : null;
        const newRange = change.modifiedEndLineNumber > 0 ? new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(change.modifiedStartLineNumber, 1, change.modifiedEndLineNumber, modified.getLineMaxColumn(change.modifiedEndLineNumber)) : null;
        const eol = modified.getEOL();
        if (change.originalEndLineNumber === 0 && newRange) {
            // Insert change.
            // To revert: delete the new content and a linebreak (if possible)
            let range = newRange;
            if (change.modifiedStartLineNumber > 1) {
                // Try to include a linebreak from before.
                range = newRange.setStartPosition(change.modifiedStartLineNumber - 1, modified.getLineMaxColumn(change.modifiedStartLineNumber - 1));
            }
            else if (change.modifiedEndLineNumber < modified.getLineCount()) {
                // Try to include the linebreak from after.
                range = newRange.setEndPosition(change.modifiedEndLineNumber + 1, 1);
            }
            editor.executeEdits('diffEditor', [{
                    range,
                    text: '',
                }]);
        }
        else if (change.modifiedEndLineNumber === 0 && originalContent !== null) {
            // Delete change.
            // To revert: insert the old content and a linebreak.
            const insertAt = change.modifiedStartLineNumber < modified.getLineCount() ? new _common_core_position_js__WEBPACK_IMPORTED_MODULE_43__/* .Position */ .L(change.modifiedStartLineNumber + 1, 1) : new _common_core_position_js__WEBPACK_IMPORTED_MODULE_43__/* .Position */ .L(change.modifiedStartLineNumber, modified.getLineMaxColumn(change.modifiedStartLineNumber));
            editor.executeEdits('diffEditor', [{
                    range: _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e.fromPositions(insertAt, insertAt),
                    text: change.modifiedStartLineNumber < modified.getLineCount() ? originalContent + eol : eol + originalContent,
                }]);
        }
        else if (newRange && originalContent !== null) {
            // Modified change.
            editor.executeEdits('diffEditor', [{
                    range: newRange,
                    text: originalContent,
                }]);
        }
    }
    _createInnerEditor(instantiationService, container, options, editorWidgetOptions) {
        return instantiationService.createInstance(_codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_16__/* .CodeEditorWidget */ .Gm, container, options, editorWidgetOptions);
    }
    dispose() {
        this._codeEditorService.removeDiffEditor(this);
        if (this._beginUpdateDecorationsTimeout !== -1) {
            window.clearTimeout(this._beginUpdateDecorationsTimeout);
            this._beginUpdateDecorationsTimeout = -1;
        }
        this._cleanViewZonesAndDecorations();
        if (this._originalOverviewRuler) {
            this._overviewDomElement.removeChild(this._originalOverviewRuler.getDomNode());
            this._originalOverviewRuler.dispose();
        }
        if (this._modifiedOverviewRuler) {
            this._overviewDomElement.removeChild(this._modifiedOverviewRuler.getDomNode());
            this._modifiedOverviewRuler.dispose();
        }
        this._overviewDomElement.removeChild(this._overviewViewportDomElement.domNode);
        if (this._options.renderOverviewRuler) {
            this._containerDomElement.removeChild(this._overviewDomElement);
        }
        this._containerDomElement.removeChild(this._originalDomNode);
        this._originalEditor.dispose();
        this._containerDomElement.removeChild(this._modifiedDomNode);
        this._modifiedEditor.dispose();
        this._strategy.dispose();
        this._containerDomElement.removeChild(this._reviewPane.domNode.domNode);
        this._containerDomElement.removeChild(this._reviewPane.shadow.domNode);
        this._containerDomElement.removeChild(this._reviewPane.actionBarContainer.domNode);
        this._reviewPane.dispose();
        this._domElement.removeChild(this._containerDomElement);
        this._onDidDispose.fire();
        super.dispose();
    }
    //------------ begin IDiffEditor methods
    getId() {
        return this.getEditorType() + ':' + this._id;
    }
    getEditorType() {
        return _common_editorCommon_js__WEBPACK_IMPORTED_MODULE_23__/* .EditorType */ .g.IDiffEditor;
    }
    getLineChanges() {
        if (!this._diffComputationResult) {
            return null;
        }
        return this._diffComputationResult.changes;
    }
    getOriginalEditor() {
        return this._originalEditor;
    }
    getModifiedEditor() {
        return this._modifiedEditor;
    }
    updateOptions(_newOptions) {
        const newOptions = validateDiffEditorOptions(_newOptions, this._options);
        const changed = changedDiffEditorOptions(this._options, newOptions);
        this._options = newOptions;
        this.isEmbeddedDiffEditorKey.set(typeof _newOptions.isInEmbeddedEditor !== 'undefined' ? _newOptions.isInEmbeddedEditor : false);
        const beginUpdateDecorations = (changed.ignoreTrimWhitespace || changed.renderIndicators || changed.renderMarginRevertIcon);
        const beginUpdateDecorationsSoon = (this._isVisible && (changed.maxComputationTime || changed.maxFileSize));
        this._documentDiffProvider.setOptions(newOptions);
        if (beginUpdateDecorations) {
            this._beginUpdateDecorations();
        }
        else if (beginUpdateDecorationsSoon) {
            this._beginUpdateDecorationsSoon();
        }
        this._modifiedEditor.updateOptions(this._adjustOptionsForRightHandSide(_newOptions));
        this._originalEditor.updateOptions(this._adjustOptionsForLeftHandSide(_newOptions));
        // enableSplitViewResizing
        this._strategy.setEnableSplitViewResizing(this._options.enableSplitViewResizing, this._options.splitViewDefaultRatio);
        // renderSideBySide
        if (changed.renderSideBySide) {
            if (this._options.renderSideBySide) {
                this._setStrategy(new DiffEditorWidgetSideBySide(this._createDataSource(), this._options.enableSplitViewResizing, this._options.splitViewDefaultRatio));
            }
            else {
                this._setStrategy(new DiffEditorWidgetInline(this._createDataSource(), this._options.enableSplitViewResizing));
            }
            // Update class name
            this._containerDomElement.className = DiffEditorWidget._getClassName(this._themeService.getColorTheme(), this._options.renderSideBySide);
        }
        // renderOverviewRuler
        if (changed.renderOverviewRuler) {
            if (this._options.renderOverviewRuler) {
                this._containerDomElement.appendChild(this._overviewDomElement);
            }
            else {
                this._containerDomElement.removeChild(this._overviewDomElement);
            }
        }
    }
    getModel() {
        return {
            original: this._originalEditor.getModel(),
            modified: this._modifiedEditor.getModel()
        };
    }
    createViewModel(model) {
        return {
            model,
            waitForDiff() {
                return __awaiter(this, void 0, void 0, function* () {
                    // noop
                });
            },
        };
    }
    setModel(model) {
        if (model && 'model' in model) {
            model = model.model;
        }
        // Guard us against partial null model
        if (model && (!model.original || !model.modified)) {
            throw new Error(!model.original ? 'DiffEditorWidget.setModel: Original model is null' : 'DiffEditorWidget.setModel: Modified model is null');
        }
        // Remove all view zones & decorations
        this._cleanViewZonesAndDecorations();
        this._disposeOverviewRulers();
        // Update code editor models
        this._originalEditor.setModel(model ? model.original : null);
        this._modifiedEditor.setModel(model ? model.modified : null);
        this._updateDecorationsRunner.cancel();
        // this.originalEditor.onDidChangeModelOptions
        if (model) {
            this._originalEditor.setScrollTop(0);
            this._modifiedEditor.setScrollTop(0);
        }
        // Disable any diff computations that will come in
        this._diffComputationResult = null;
        this._diffComputationToken++;
        this._setState(0 /* editorBrowser.DiffEditorState.Idle */);
        if (model) {
            this._createOverviewRulers();
            // Begin comparing
            this._beginUpdateDecorations();
        }
        this._layoutOverviewViewport();
        this._onDidChangeModel.fire();
        // Diff navigator
        this._diffNavigator = this._register(this._instantiationService.createInstance(_diffNavigator_js__WEBPACK_IMPORTED_MODULE_17__/* .DiffNavigator */ .F, this, {
            alwaysRevealFirst: false,
            findResultLoop: this.getModifiedEditor().getOption(40 /* EditorOption.find */).loop
        }));
    }
    getContainerDomNode() {
        return this._domElement;
    }
    // #region editorBrowser.IDiffEditor: Delegating to modified Editor
    getVisibleColumnFromPosition(position) {
        return this._modifiedEditor.getVisibleColumnFromPosition(position);
    }
    getPosition() {
        return this._modifiedEditor.getPosition();
    }
    setPosition(position, source = 'api') {
        this._modifiedEditor.setPosition(position, source);
    }
    revealLine(lineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLine(lineNumber, scrollType);
    }
    revealLineInCenter(lineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLineInCenter(lineNumber, scrollType);
    }
    revealLineInCenterIfOutsideViewport(lineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLineInCenterIfOutsideViewport(lineNumber, scrollType);
    }
    revealLineNearTop(lineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLineNearTop(lineNumber, scrollType);
    }
    revealPosition(position, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealPosition(position, scrollType);
    }
    revealPositionInCenter(position, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealPositionInCenter(position, scrollType);
    }
    revealPositionInCenterIfOutsideViewport(position, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealPositionInCenterIfOutsideViewport(position, scrollType);
    }
    revealPositionNearTop(position, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealPositionNearTop(position, scrollType);
    }
    getSelection() {
        return this._modifiedEditor.getSelection();
    }
    getSelections() {
        return this._modifiedEditor.getSelections();
    }
    setSelection(something, source = 'api') {
        this._modifiedEditor.setSelection(something, source);
    }
    setSelections(ranges, source = 'api') {
        this._modifiedEditor.setSelections(ranges, source);
    }
    revealLines(startLineNumber, endLineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLines(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesInCenter(startLineNumber, endLineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLinesInCenter(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLinesInCenterIfOutsideViewport(startLineNumber, endLineNumber, scrollType);
    }
    revealLinesNearTop(startLineNumber, endLineNumber, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealLinesNearTop(startLineNumber, endLineNumber, scrollType);
    }
    revealRange(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */, revealVerticalInCenter = false, revealHorizontal = true) {
        this._modifiedEditor.revealRange(range, scrollType, revealVerticalInCenter, revealHorizontal);
    }
    revealRangeInCenter(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealRangeInCenter(range, scrollType);
    }
    revealRangeInCenterIfOutsideViewport(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealRangeInCenterIfOutsideViewport(range, scrollType);
    }
    revealRangeNearTop(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealRangeNearTop(range, scrollType);
    }
    revealRangeNearTopIfOutsideViewport(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealRangeNearTopIfOutsideViewport(range, scrollType);
    }
    revealRangeAtTop(range, scrollType = 0 /* editorCommon.ScrollType.Smooth */) {
        this._modifiedEditor.revealRangeAtTop(range, scrollType);
    }
    getSupportedActions() {
        return this._modifiedEditor.getSupportedActions();
    }
    focus() {
        this._modifiedEditor.focus();
    }
    trigger(source, handlerId, payload) {
        this._modifiedEditor.trigger(source, handlerId, payload);
    }
    createDecorationsCollection(decorations) {
        return this._modifiedEditor.createDecorationsCollection(decorations);
    }
    changeDecorations(callback) {
        return this._modifiedEditor.changeDecorations(callback);
    }
    // #endregion
    saveViewState() {
        const originalViewState = this._originalEditor.saveViewState();
        const modifiedViewState = this._modifiedEditor.saveViewState();
        return {
            original: originalViewState,
            modified: modifiedViewState,
        };
    }
    restoreViewState(s) {
        if (s && s.original && s.modified) {
            const diffEditorState = s;
            this._originalEditor.restoreViewState(diffEditorState.original);
            this._modifiedEditor.restoreViewState(diffEditorState.modified);
        }
    }
    layout(dimension) {
        this._elementSizeObserver.observe(dimension);
    }
    hasTextFocus() {
        return this._originalEditor.hasTextFocus() || this._modifiedEditor.hasTextFocus();
    }
    //------------ end IDiffEditor methods
    //------------ begin layouting methods
    _onDidContainerSizeChanged() {
        this._doLayout();
    }
    _getReviewHeight() {
        return this._reviewPane.isVisible() ? this._elementSizeObserver.getHeight() : 0;
    }
    _layoutOverviewRulers() {
        if (!this._options.renderOverviewRuler) {
            return;
        }
        if (!this._originalOverviewRuler || !this._modifiedOverviewRuler) {
            return;
        }
        const height = this._elementSizeObserver.getHeight();
        const reviewHeight = this._getReviewHeight();
        const freeSpace = DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH - 2 * DiffEditorWidget.ONE_OVERVIEW_WIDTH;
        const layoutInfo = this._modifiedEditor.getLayoutInfo();
        if (layoutInfo) {
            this._originalOverviewRuler.setLayout({
                top: 0,
                width: DiffEditorWidget.ONE_OVERVIEW_WIDTH,
                right: freeSpace + DiffEditorWidget.ONE_OVERVIEW_WIDTH,
                height: (height - reviewHeight)
            });
            this._modifiedOverviewRuler.setLayout({
                top: 0,
                right: 0,
                width: DiffEditorWidget.ONE_OVERVIEW_WIDTH,
                height: (height - reviewHeight)
            });
        }
    }
    //------------ end layouting methods
    _onViewZonesChanged() {
        if (this._currentlyChangingViewZones) {
            return;
        }
        this._updateDecorationsRunner.schedule();
    }
    _beginUpdateDecorationsSoon() {
        // Clear previous timeout if necessary
        if (this._beginUpdateDecorationsTimeout !== -1) {
            window.clearTimeout(this._beginUpdateDecorationsTimeout);
            this._beginUpdateDecorationsTimeout = -1;
        }
        this._beginUpdateDecorationsTimeout = window.setTimeout(() => this._beginUpdateDecorations(), DiffEditorWidget.UPDATE_DIFF_DECORATIONS_DELAY);
    }
    static _equals(a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return (a.toString() === b.toString());
    }
    _beginUpdateDecorations() {
        if (this._beginUpdateDecorationsTimeout !== -1) {
            // Cancel any pending requests in case this method is called directly
            window.clearTimeout(this._beginUpdateDecorationsTimeout);
            this._beginUpdateDecorationsTimeout = -1;
        }
        const currentOriginalModel = this._originalEditor.getModel();
        const currentModifiedModel = this._modifiedEditor.getModel();
        if (!currentOriginalModel || !currentModifiedModel) {
            return;
        }
        // Prevent old diff requests to come if a new request has been initiated
        // The best method would be to call cancel on the Promise, but this is not
        // yet supported, so using tokens for now.
        this._diffComputationToken++;
        const currentToken = this._diffComputationToken;
        const diffLimit = this._options.maxFileSize * 1024 * 1024; // MB
        const canSyncModelForDiff = (model) => {
            const bufferTextLength = model.getValueLength();
            return (diffLimit === 0 || bufferTextLength <= diffLimit);
        };
        if (!canSyncModelForDiff(currentOriginalModel) || !canSyncModelForDiff(currentModifiedModel)) {
            if (!DiffEditorWidget._equals(currentOriginalModel.uri, this._lastOriginalWarning)
                || !DiffEditorWidget._equals(currentModifiedModel.uri, this._lastModifiedWarning)) {
                this._lastOriginalWarning = currentOriginalModel.uri;
                this._lastModifiedWarning = currentModifiedModel.uri;
                this._notificationService.warn(_nls_js__WEBPACK_IMPORTED_MODULE_29__/* .localize */ .NC("diff.tooLarge", "Cannot compare files because one file is too large."));
            }
            return;
        }
        this._setState(1 /* editorBrowser.DiffEditorState.ComputingDiff */);
        this._documentDiffProvider.computeDiff(currentOriginalModel, currentModifiedModel, {
            ignoreTrimWhitespace: this._options.ignoreTrimWhitespace,
            maxComputationTimeMs: this._options.maxComputationTime,
            computeMoves: false,
        }).then(result => {
            if (currentToken === this._diffComputationToken
                && currentOriginalModel === this._originalEditor.getModel()
                && currentModifiedModel === this._modifiedEditor.getModel()) {
                this._setState(2 /* editorBrowser.DiffEditorState.DiffComputed */);
                this._diffComputationResult = {
                    identical: result.identical,
                    quitEarly: result.quitEarly,
                    changes2: result.changes,
                    changes: result.changes.map(m => {
                        // TODO don't do this translation, but use the diff result directly
                        let originalStartLineNumber;
                        let originalEndLineNumber;
                        let modifiedStartLineNumber;
                        let modifiedEndLineNumber;
                        let innerChanges = m.innerChanges;
                        if (m.originalRange.isEmpty) {
                            // Insertion
                            originalStartLineNumber = m.originalRange.startLineNumber - 1;
                            originalEndLineNumber = 0;
                            innerChanges = undefined;
                        }
                        else {
                            originalStartLineNumber = m.originalRange.startLineNumber;
                            originalEndLineNumber = m.originalRange.endLineNumberExclusive - 1;
                        }
                        if (m.modifiedRange.isEmpty) {
                            // Deletion
                            modifiedStartLineNumber = m.modifiedRange.startLineNumber - 1;
                            modifiedEndLineNumber = 0;
                            innerChanges = undefined;
                        }
                        else {
                            modifiedStartLineNumber = m.modifiedRange.startLineNumber;
                            modifiedEndLineNumber = m.modifiedRange.endLineNumberExclusive - 1;
                        }
                        return {
                            originalStartLineNumber,
                            originalEndLineNumber,
                            modifiedStartLineNumber,
                            modifiedEndLineNumber,
                            charChanges: innerChanges === null || innerChanges === void 0 ? void 0 : innerChanges.map(m => ({
                                originalStartLineNumber: m.originalRange.startLineNumber,
                                originalStartColumn: m.originalRange.startColumn,
                                originalEndLineNumber: m.originalRange.endLineNumber,
                                originalEndColumn: m.originalRange.endColumn,
                                modifiedStartLineNumber: m.modifiedRange.startLineNumber,
                                modifiedStartColumn: m.modifiedRange.startColumn,
                                modifiedEndLineNumber: m.modifiedRange.endLineNumber,
                                modifiedEndColumn: m.modifiedRange.endColumn,
                            }))
                        };
                    })
                };
                this._updateDecorationsRunner.schedule();
                this._onDidUpdateDiff.fire();
            }
        }, (error) => {
            if (currentToken === this._diffComputationToken
                && currentOriginalModel === this._originalEditor.getModel()
                && currentModifiedModel === this._modifiedEditor.getModel()) {
                this._setState(2 /* editorBrowser.DiffEditorState.DiffComputed */);
                this._diffComputationResult = null;
                this._updateDecorationsRunner.schedule();
            }
        });
    }
    _cleanViewZonesAndDecorations() {
        this._originalEditorState.clean(this._originalEditor);
        this._modifiedEditorState.clean(this._modifiedEditor);
    }
    _updateDecorations() {
        if (!this._originalEditor.getModel() || !this._modifiedEditor.getModel()) {
            return;
        }
        const lineChanges = (this._diffComputationResult ? this._diffComputationResult.changes : []);
        const foreignOriginal = this._originalEditorState.getForeignViewZones(this._originalEditor.getWhitespaces());
        const foreignModified = this._modifiedEditorState.getForeignViewZones(this._modifiedEditor.getWhitespaces());
        const renderMarginRevertIcon = this._options.renderMarginRevertIcon && !this._modifiedEditor.getOption(89 /* EditorOption.readOnly */);
        const diffDecorations = this._strategy.getEditorsDiffDecorations(lineChanges, this._options.ignoreTrimWhitespace, this._options.renderIndicators, renderMarginRevertIcon, foreignOriginal, foreignModified);
        try {
            this._currentlyChangingViewZones = true;
            this._originalEditorState.apply(this._originalEditor, this._originalOverviewRuler, diffDecorations.original, false);
            this._modifiedEditorState.apply(this._modifiedEditor, this._modifiedOverviewRuler, diffDecorations.modified, true);
        }
        finally {
            this._currentlyChangingViewZones = false;
        }
    }
    _adjustOptionsForSubEditor(options) {
        const clonedOptions = Object.assign({}, options);
        clonedOptions.inDiffEditor = true;
        clonedOptions.automaticLayout = false;
        // Clone scrollbar options before changing them
        clonedOptions.scrollbar = Object.assign({}, (clonedOptions.scrollbar || {}));
        clonedOptions.scrollbar.vertical = 'visible';
        clonedOptions.folding = false;
        clonedOptions.codeLens = this._options.diffCodeLens;
        clonedOptions.fixedOverflowWidgets = true;
        // clonedOptions.lineDecorationsWidth = '2ch';
        // Clone minimap options before changing them
        clonedOptions.minimap = Object.assign({}, (clonedOptions.minimap || {}));
        clonedOptions.minimap.enabled = false;
        return clonedOptions;
    }
    _adjustOptionsForLeftHandSide(options) {
        const result = this._adjustOptionsForSubEditor(options);
        if (!this._options.renderSideBySide) {
            // never wrap hidden editor
            result.wordWrapOverride1 = 'off';
            result.wordWrapOverride2 = 'off';
            result.stickyScroll = { enabled: false };
        }
        else {
            result.wordWrapOverride1 = this._options.diffWordWrap;
        }
        if (options.originalAriaLabel) {
            result.ariaLabel = options.originalAriaLabel;
        }
        this._updateAriaLabel(result);
        result.readOnly = !this._options.originalEditable;
        result.dropIntoEditor = { enabled: !result.readOnly };
        result.extraEditorClassName = 'original-in-monaco-diff-editor';
        return Object.assign(Object.assign({}, result), { dimension: {
                height: 0,
                width: 0
            } });
    }
    _updateAriaLabel(options) {
        var _a;
        let ariaLabel = (_a = options.ariaLabel) !== null && _a !== void 0 ? _a : '';
        if (this._options.accessibilityVerbose) {
            ariaLabel += ariaNavigationTip;
        }
        else if (ariaLabel) {
            ariaLabel = ariaLabel.replaceAll(ariaNavigationTip, '');
        }
        options.ariaLabel = ariaLabel;
    }
    _adjustOptionsForRightHandSide(options) {
        const result = this._adjustOptionsForSubEditor(options);
        if (options.modifiedAriaLabel) {
            result.ariaLabel = options.modifiedAriaLabel;
        }
        this._updateAriaLabel(result);
        result.wordWrapOverride1 = this._options.diffWordWrap;
        result.revealHorizontalRightPadding = _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .EditorOptions */ .BH.revealHorizontalRightPadding.defaultValue + DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH;
        result.scrollbar.verticalHasArrows = false;
        result.extraEditorClassName = 'modified-in-monaco-diff-editor';
        return Object.assign(Object.assign({}, result), { dimension: {
                height: 0,
                width: 0
            } });
    }
    doLayout() {
        this._elementSizeObserver.observe();
        this._doLayout();
    }
    _doLayout() {
        const width = this._elementSizeObserver.getWidth();
        const height = this._elementSizeObserver.getHeight();
        const reviewHeight = this._getReviewHeight();
        const splitPoint = this._strategy.layout();
        this._originalDomNode.style.width = splitPoint + 'px';
        this._originalDomNode.style.left = '0px';
        this._modifiedDomNode.style.width = (width - splitPoint - DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH) + 'px';
        this._modifiedDomNode.style.left = splitPoint + 'px';
        this._overviewDomElement.style.top = '0px';
        this._overviewDomElement.style.height = (height - reviewHeight) + 'px';
        this._overviewDomElement.style.width = DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH + 'px';
        this._overviewDomElement.style.left = (width - DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH) + 'px';
        this._overviewViewportDomElement.setWidth(DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH);
        this._overviewViewportDomElement.setHeight(30);
        this._originalEditor.layout({ width: splitPoint, height: (height - reviewHeight) });
        this._modifiedEditor.layout({ width: width - splitPoint - (this._options.renderOverviewRuler ? DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH : 0), height: (height - reviewHeight) });
        if (this._originalOverviewRuler || this._modifiedOverviewRuler) {
            this._layoutOverviewRulers();
        }
        this._reviewPane.layout(height - reviewHeight, width, reviewHeight);
        this._layoutOverviewViewport();
    }
    _layoutOverviewViewport() {
        const layout = this._computeOverviewViewport();
        if (!layout) {
            this._overviewViewportDomElement.setTop(0);
            this._overviewViewportDomElement.setHeight(0);
        }
        else {
            this._overviewViewportDomElement.setTop(layout.top);
            this._overviewViewportDomElement.setHeight(layout.height);
        }
    }
    _computeOverviewViewport() {
        const layoutInfo = this._modifiedEditor.getLayoutInfo();
        if (!layoutInfo) {
            return null;
        }
        const scrollTop = this._modifiedEditor.getScrollTop();
        const scrollHeight = this._modifiedEditor.getScrollHeight();
        const computedAvailableSize = Math.max(0, layoutInfo.height);
        const computedRepresentableSize = Math.max(0, computedAvailableSize - 2 * 0);
        const computedRatio = scrollHeight > 0 ? (computedRepresentableSize / scrollHeight) : 0;
        const computedSliderSize = Math.max(0, Math.floor(layoutInfo.height * computedRatio));
        const computedSliderPosition = Math.floor(scrollTop * computedRatio);
        return {
            height: computedSliderSize,
            top: computedSliderPosition
        };
    }
    _createDataSource() {
        return {
            getWidth: () => {
                return this._elementSizeObserver.getWidth();
            },
            getHeight: () => {
                return (this._elementSizeObserver.getHeight() - this._getReviewHeight());
            },
            getOptions: () => {
                return {
                    renderOverviewRuler: this._options.renderOverviewRuler
                };
            },
            getContainerDomNode: () => {
                return this._containerDomElement;
            },
            relayoutEditors: () => {
                this._doLayout();
            },
            getOriginalEditor: () => {
                return this._originalEditor;
            },
            getModifiedEditor: () => {
                return this._modifiedEditor;
            }
        };
    }
    _setStrategy(newStrategy) {
        var _a;
        (_a = this._strategy) === null || _a === void 0 ? void 0 : _a.dispose();
        this._strategy = newStrategy;
        if (this._boundarySashes) {
            newStrategy.setBoundarySashes(this._boundarySashes);
        }
        newStrategy.applyColors(this._themeService.getColorTheme());
        if (this._diffComputationResult) {
            this._updateDecorations();
        }
        // Just do a layout, the strategy might need it
        this._doLayout();
    }
};
DiffEditorWidget.ONE_OVERVIEW_WIDTH = 15;
DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH = 30;
DiffEditorWidget.UPDATE_DIFF_DECORATIONS_DELAY = 200; // ms
DiffEditorWidget = __decorate([
    __param(3, _platform_clipboard_common_clipboardService_js__WEBPACK_IMPORTED_MODULE_30__/* .IClipboardService */ .p),
    __param(4, _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_31__/* .IContextKeyService */ .i6),
    __param(5, _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_33__/* .IInstantiationService */ .TG),
    __param(6, _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_15__/* .ICodeEditorService */ .$),
    __param(7, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_38__/* .IThemeService */ .XE),
    __param(8, _platform_notification_common_notification_js__WEBPACK_IMPORTED_MODULE_34__/* .INotificationService */ .lT),
    __param(9, _platform_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_32__/* .IContextMenuService */ .i),
    __param(10, _platform_progress_common_progress_js__WEBPACK_IMPORTED_MODULE_35__/* .IEditorProgressService */ .ek)
], DiffEditorWidget);

class DiffEditorWidgetStyle extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_10__/* .Disposable */ .JT {
    constructor(dataSource) {
        super();
        this._dataSource = dataSource;
        this._insertColor = null;
        this._removeColor = null;
    }
    applyColors(theme) {
        const newInsertColor = theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .diffOverviewRulerInserted */ .P6Y) || (theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .diffInserted */ .ypS) || _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .defaultInsertColor */ .CzK).transparent(2);
        const newRemoveColor = theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .diffOverviewRulerRemoved */ .F9q) || (theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .diffRemoved */ .P4M) || _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .defaultRemoveColor */ .keg).transparent(2);
        const hasChanges = !newInsertColor.equals(this._insertColor) || !newRemoveColor.equals(this._removeColor);
        this._insertColor = newInsertColor;
        this._removeColor = newRemoveColor;
        return hasChanges;
    }
    getEditorsDiffDecorations(lineChanges, ignoreTrimWhitespace, renderIndicators, renderMarginRevertIcon, originalWhitespaces, modifiedWhitespaces) {
        // Get view zones
        modifiedWhitespaces = modifiedWhitespaces.sort((a, b) => {
            return a.afterLineNumber - b.afterLineNumber;
        });
        originalWhitespaces = originalWhitespaces.sort((a, b) => {
            return a.afterLineNumber - b.afterLineNumber;
        });
        const zones = this._getViewZones(lineChanges, originalWhitespaces, modifiedWhitespaces, renderIndicators);
        // Get decorations & overview ruler zones
        const originalDecorations = this._getOriginalEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators);
        const modifiedDecorations = this._getModifiedEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators, renderMarginRevertIcon);
        return {
            original: {
                decorations: originalDecorations.decorations,
                overviewZones: originalDecorations.overviewZones,
                zones: zones.original
            },
            modified: {
                decorations: modifiedDecorations.decorations,
                overviewZones: modifiedDecorations.overviewZones,
                zones: zones.modified
            }
        };
    }
    setBoundarySashes(_sashes) {
        // To be implemented by subclasses
    }
}
class ForeignViewZonesIterator {
    constructor(source) {
        this._source = source;
        this._index = -1;
        this.current = null;
        this.advance();
    }
    advance() {
        this._index++;
        if (this._index < this._source.length) {
            this.current = this._source[this._index];
        }
        else {
            this.current = null;
        }
    }
}
class ViewZonesComputer {
    constructor(_lineChanges, _originalForeignVZ, _modifiedForeignVZ, _originalEditor, _modifiedEditor) {
        this._lineChanges = _lineChanges;
        this._originalForeignVZ = _originalForeignVZ;
        this._modifiedForeignVZ = _modifiedForeignVZ;
        this._originalEditor = _originalEditor;
        this._modifiedEditor = _modifiedEditor;
    }
    static _getViewLineCount(editor, startLineNumber, endLineNumber) {
        const model = editor.getModel();
        const viewModel = editor._getViewModel();
        if (model && viewModel) {
            const viewRange = getViewRange(model, viewModel, startLineNumber, endLineNumber);
            return (viewRange.endLineNumber - viewRange.startLineNumber + 1);
        }
        return (endLineNumber - startLineNumber + 1);
    }
    getViewZones() {
        const originalLineHeight = this._originalEditor.getOption(65 /* EditorOption.lineHeight */);
        const modifiedLineHeight = this._modifiedEditor.getOption(65 /* EditorOption.lineHeight */);
        const originalHasWrapping = (this._originalEditor.getOption(143 /* EditorOption.wrappingInfo */).wrappingColumn !== -1);
        const modifiedHasWrapping = (this._modifiedEditor.getOption(143 /* EditorOption.wrappingInfo */).wrappingColumn !== -1);
        const hasWrapping = (originalHasWrapping || modifiedHasWrapping);
        const originalModel = this._originalEditor.getModel();
        const originalCoordinatesConverter = this._originalEditor._getViewModel().coordinatesConverter;
        const modifiedCoordinatesConverter = this._modifiedEditor._getViewModel().coordinatesConverter;
        const result = {
            original: [],
            modified: []
        };
        let lineChangeModifiedLength = 0;
        let lineChangeOriginalLength = 0;
        let originalEquivalentLineNumber = 0;
        let modifiedEquivalentLineNumber = 0;
        let originalEndEquivalentLineNumber = 0;
        let modifiedEndEquivalentLineNumber = 0;
        const sortMyViewZones = (a, b) => {
            return a.afterLineNumber - b.afterLineNumber;
        };
        const addAndCombineIfPossible = (destination, item) => {
            if (item.domNode === null && destination.length > 0) {
                const lastItem = destination[destination.length - 1];
                if (lastItem.afterLineNumber === item.afterLineNumber && lastItem.domNode === null) {
                    lastItem.heightInLines += item.heightInLines;
                    return;
                }
            }
            destination.push(item);
        };
        const modifiedForeignVZ = new ForeignViewZonesIterator(this._modifiedForeignVZ);
        const originalForeignVZ = new ForeignViewZonesIterator(this._originalForeignVZ);
        let lastOriginalLineNumber = 1;
        let lastModifiedLineNumber = 1;
        // In order to include foreign view zones after the last line change, the for loop will iterate once more after the end of the `lineChanges` array
        for (let i = 0, length = this._lineChanges.length; i <= length; i++) {
            const lineChange = (i < length ? this._lineChanges[i] : null);
            if (lineChange !== null) {
                originalEquivalentLineNumber = lineChange.originalStartLineNumber + (lineChange.originalEndLineNumber > 0 ? -1 : 0);
                modifiedEquivalentLineNumber = lineChange.modifiedStartLineNumber + (lineChange.modifiedEndLineNumber > 0 ? -1 : 0);
                lineChangeOriginalLength = (lineChange.originalEndLineNumber > 0 ? ViewZonesComputer._getViewLineCount(this._originalEditor, lineChange.originalStartLineNumber, lineChange.originalEndLineNumber) : 0);
                lineChangeModifiedLength = (lineChange.modifiedEndLineNumber > 0 ? ViewZonesComputer._getViewLineCount(this._modifiedEditor, lineChange.modifiedStartLineNumber, lineChange.modifiedEndLineNumber) : 0);
                originalEndEquivalentLineNumber = Math.max(lineChange.originalStartLineNumber, lineChange.originalEndLineNumber);
                modifiedEndEquivalentLineNumber = Math.max(lineChange.modifiedStartLineNumber, lineChange.modifiedEndLineNumber);
            }
            else {
                // Increase to very large value to get the producing tests of foreign view zones running
                originalEquivalentLineNumber += 10000000 + lineChangeOriginalLength;
                modifiedEquivalentLineNumber += 10000000 + lineChangeModifiedLength;
                originalEndEquivalentLineNumber = originalEquivalentLineNumber;
                modifiedEndEquivalentLineNumber = modifiedEquivalentLineNumber;
            }
            // Each step produces view zones, and after producing them, we try to cancel them out, to avoid empty-empty view zone cases
            let stepOriginal = [];
            let stepModified = [];
            // ---------------------------- PRODUCE VIEW ZONES
            // [PRODUCE] View zones due to line mapping differences (equal lines but wrapped differently)
            if (hasWrapping) {
                let count;
                if (lineChange) {
                    if (lineChange.originalEndLineNumber > 0) {
                        count = lineChange.originalStartLineNumber - lastOriginalLineNumber;
                    }
                    else {
                        count = lineChange.modifiedStartLineNumber - lastModifiedLineNumber;
                    }
                }
                else {
                    // `lastOriginalLineNumber` has not been looked at yet
                    count = originalModel.getLineCount() - lastOriginalLineNumber + 1;
                }
                for (let i = 0; i < count; i++) {
                    const originalLineNumber = lastOriginalLineNumber + i;
                    const modifiedLineNumber = lastModifiedLineNumber + i;
                    const originalViewLineCount = originalCoordinatesConverter.getModelLineViewLineCount(originalLineNumber);
                    const modifiedViewLineCount = modifiedCoordinatesConverter.getModelLineViewLineCount(modifiedLineNumber);
                    if (originalViewLineCount < modifiedViewLineCount) {
                        stepOriginal.push({
                            afterLineNumber: originalLineNumber,
                            heightInLines: modifiedViewLineCount - originalViewLineCount,
                            domNode: null,
                            marginDomNode: null
                        });
                    }
                    else if (originalViewLineCount > modifiedViewLineCount) {
                        stepModified.push({
                            afterLineNumber: modifiedLineNumber,
                            heightInLines: originalViewLineCount - modifiedViewLineCount,
                            domNode: null,
                            marginDomNode: null
                        });
                    }
                }
                if (lineChange) {
                    lastOriginalLineNumber = (lineChange.originalEndLineNumber > 0 ? lineChange.originalEndLineNumber : lineChange.originalStartLineNumber) + 1;
                    lastModifiedLineNumber = (lineChange.modifiedEndLineNumber > 0 ? lineChange.modifiedEndLineNumber : lineChange.modifiedStartLineNumber) + 1;
                }
            }
            // [PRODUCE] View zone(s) in original-side due to foreign view zone(s) in modified-side
            while (modifiedForeignVZ.current && modifiedForeignVZ.current.afterLineNumber <= modifiedEndEquivalentLineNumber) {
                let viewZoneLineNumber;
                if (modifiedForeignVZ.current.afterLineNumber <= modifiedEquivalentLineNumber) {
                    viewZoneLineNumber = originalEquivalentLineNumber - modifiedEquivalentLineNumber + modifiedForeignVZ.current.afterLineNumber;
                }
                else {
                    viewZoneLineNumber = originalEndEquivalentLineNumber;
                }
                let marginDomNode = null;
                if (lineChange && lineChange.modifiedStartLineNumber <= modifiedForeignVZ.current.afterLineNumber && modifiedForeignVZ.current.afterLineNumber <= lineChange.modifiedEndLineNumber) {
                    marginDomNode = this._createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion();
                }
                stepOriginal.push({
                    afterLineNumber: viewZoneLineNumber,
                    heightInLines: modifiedForeignVZ.current.height / modifiedLineHeight,
                    domNode: null,
                    marginDomNode: marginDomNode
                });
                modifiedForeignVZ.advance();
            }
            // [PRODUCE] View zone(s) in modified-side due to foreign view zone(s) in original-side
            while (originalForeignVZ.current && originalForeignVZ.current.afterLineNumber <= originalEndEquivalentLineNumber) {
                let viewZoneLineNumber;
                if (originalForeignVZ.current.afterLineNumber <= originalEquivalentLineNumber) {
                    viewZoneLineNumber = modifiedEquivalentLineNumber - originalEquivalentLineNumber + originalForeignVZ.current.afterLineNumber;
                }
                else {
                    viewZoneLineNumber = modifiedEndEquivalentLineNumber;
                }
                stepModified.push({
                    afterLineNumber: viewZoneLineNumber,
                    heightInLines: originalForeignVZ.current.height / originalLineHeight,
                    domNode: null
                });
                originalForeignVZ.advance();
            }
            if (lineChange !== null && isChangeOrInsert(lineChange)) {
                const r = this._produceOriginalFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength);
                if (r) {
                    stepOriginal.push(r);
                }
            }
            if (lineChange !== null && isChangeOrDelete(lineChange)) {
                const r = this._produceModifiedFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength);
                if (r) {
                    stepModified.push(r);
                }
            }
            // ---------------------------- END PRODUCE VIEW ZONES
            // ---------------------------- EMIT MINIMAL VIEW ZONES
            // [CANCEL & EMIT] Try to cancel view zones out
            let stepOriginalIndex = 0;
            let stepModifiedIndex = 0;
            stepOriginal = stepOriginal.sort(sortMyViewZones);
            stepModified = stepModified.sort(sortMyViewZones);
            while (stepOriginalIndex < stepOriginal.length && stepModifiedIndex < stepModified.length) {
                const original = stepOriginal[stepOriginalIndex];
                const modified = stepModified[stepModifiedIndex];
                const originalDelta = original.afterLineNumber - originalEquivalentLineNumber;
                const modifiedDelta = modified.afterLineNumber - modifiedEquivalentLineNumber;
                if (originalDelta < modifiedDelta) {
                    addAndCombineIfPossible(result.original, original);
                    stepOriginalIndex++;
                }
                else if (modifiedDelta < originalDelta) {
                    addAndCombineIfPossible(result.modified, modified);
                    stepModifiedIndex++;
                }
                else if (original.shouldNotShrink) {
                    addAndCombineIfPossible(result.original, original);
                    stepOriginalIndex++;
                }
                else if (modified.shouldNotShrink) {
                    addAndCombineIfPossible(result.modified, modified);
                    stepModifiedIndex++;
                }
                else {
                    if (original.heightInLines >= modified.heightInLines) {
                        // modified view zone gets removed
                        original.heightInLines -= modified.heightInLines;
                        stepModifiedIndex++;
                    }
                    else {
                        // original view zone gets removed
                        modified.heightInLines -= original.heightInLines;
                        stepOriginalIndex++;
                    }
                }
            }
            // [EMIT] Remaining original view zones
            while (stepOriginalIndex < stepOriginal.length) {
                addAndCombineIfPossible(result.original, stepOriginal[stepOriginalIndex]);
                stepOriginalIndex++;
            }
            // [EMIT] Remaining modified view zones
            while (stepModifiedIndex < stepModified.length) {
                addAndCombineIfPossible(result.modified, stepModified[stepModifiedIndex]);
                stepModifiedIndex++;
            }
            // ---------------------------- END EMIT MINIMAL VIEW ZONES
        }
        return {
            original: ViewZonesComputer._ensureDomNodes(result.original),
            modified: ViewZonesComputer._ensureDomNodes(result.modified),
        };
    }
    static _ensureDomNodes(zones) {
        return zones.map((z) => {
            if (!z.domNode) {
                z.domNode = createFakeLinesDiv();
            }
            return z;
        });
    }
}
function createDecoration(startLineNumber, startColumn, endLineNumber, endColumn, options) {
    return {
        range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(startLineNumber, startColumn, endLineNumber, endColumn),
        options: options
    };
}
const DECORATIONS = {
    arrowRevertChange: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-arrow-revert-change',
        glyphMarginHoverMessage: new _base_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .MarkdownString */ .W5(undefined, { isTrusted: true, supportThemeIcons: true }).appendMarkdown(_nls_js__WEBPACK_IMPORTED_MODULE_29__/* .localize */ .NC('revertChangeHoverMessage', 'Click to revert change')),
        glyphMarginClassName: 'arrow-revert-change ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.arrowRight),
        zIndex: 10001,
    }),
    charDelete: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-char-delete',
        className: 'char-delete'
    }),
    charDeleteWholeLine: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-char-delete-whole-line',
        className: 'char-delete',
        isWholeLine: true
    }),
    charInsert: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-char-insert',
        className: 'char-insert'
    }),
    charInsertWholeLine: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-char-insert-whole-line',
        className: 'char-insert',
        isWholeLine: true
    }),
    lineInsert: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-line-insert',
        className: "line-insert" /* DiffEditorLineClasses.Insert */,
        marginClassName: 'gutter-insert',
        isWholeLine: true
    }),
    lineInsertWithSign: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-line-insert-with-sign',
        className: "line-insert" /* DiffEditorLineClasses.Insert */,
        linesDecorationsClassName: 'insert-sign ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__/* .ThemeIcon */ .k.asClassName(diffInsertIcon),
        marginClassName: 'gutter-insert',
        isWholeLine: true
    }),
    lineDelete: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-line-delete',
        className: "line-delete" /* DiffEditorLineClasses.Delete */,
        marginClassName: 'gutter-delete',
        isWholeLine: true
    }),
    lineDeleteWithSign: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-line-delete-with-sign',
        className: "line-delete" /* DiffEditorLineClasses.Delete */,
        linesDecorationsClassName: 'delete-sign ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__/* .ThemeIcon */ .k.asClassName(diffRemoveIcon),
        marginClassName: 'gutter-delete',
        isWholeLine: true
    }),
    lineDeleteMargin: _common_model_textModel_js__WEBPACK_IMPORTED_MODULE_25__/* .ModelDecorationOptions */ .qx.register({
        description: 'diff-editor-line-delete-margin',
        marginClassName: 'gutter-delete',
    })
};
class DiffEditorWidgetSideBySide extends DiffEditorWidgetStyle {
    constructor(dataSource, enableSplitViewResizing, defaultSashRatio) {
        super(dataSource);
        this._disableSash = (enableSplitViewResizing === false);
        this._defaultRatio = defaultSashRatio;
        this._sashRatio = null;
        this._sashPosition = null;
        this._startSashPosition = null;
        this._sash = this._register(new _base_browser_ui_sash_sash_js__WEBPACK_IMPORTED_MODULE_3__/* .Sash */ .g(this._dataSource.getContainerDomNode(), this, { orientation: 0 /* Orientation.VERTICAL */ }));
        if (this._disableSash) {
            this._sash.state = 0 /* SashState.Disabled */;
        }
        this._sash.onDidStart(() => this._onSashDragStart());
        this._sash.onDidChange((e) => this._onSashDrag(e));
        this._sash.onDidEnd(() => this._onSashDragEnd());
        this._sash.onDidReset(() => this._onSashReset());
    }
    setEnableSplitViewResizing(enableSplitViewResizing, defaultRatio) {
        this._defaultRatio = defaultRatio;
        const newDisableSash = (enableSplitViewResizing === false);
        if (this._disableSash !== newDisableSash) {
            this._disableSash = newDisableSash;
            this._sash.state = this._disableSash ? 0 /* SashState.Disabled */ : 3 /* SashState.Enabled */;
        }
    }
    layout(sashRatio = this._sashRatio || this._defaultRatio) {
        const w = this._dataSource.getWidth();
        const contentWidth = w - (this._dataSource.getOptions().renderOverviewRuler ? DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH : 0);
        let sashPosition = Math.floor((sashRatio || this._defaultRatio) * contentWidth);
        const midPoint = Math.floor(this._defaultRatio * contentWidth);
        sashPosition = this._disableSash ? midPoint : sashPosition || midPoint;
        if (contentWidth > DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH * 2) {
            if (sashPosition < DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH) {
                sashPosition = DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH;
            }
            if (sashPosition > contentWidth - DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH) {
                sashPosition = contentWidth - DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH;
            }
        }
        else {
            sashPosition = midPoint;
        }
        if (this._sashPosition !== sashPosition) {
            this._sashPosition = sashPosition;
        }
        this._sash.layout();
        return this._sashPosition;
    }
    _onSashDragStart() {
        this._startSashPosition = this._sashPosition;
    }
    _onSashDrag(e) {
        const w = this._dataSource.getWidth();
        const contentWidth = w - (this._dataSource.getOptions().renderOverviewRuler ? DiffEditorWidget.ENTIRE_DIFF_OVERVIEW_WIDTH : 0);
        const sashPosition = this.layout((this._startSashPosition + (e.currentX - e.startX)) / contentWidth);
        this._sashRatio = sashPosition / contentWidth;
        this._dataSource.relayoutEditors();
    }
    _onSashDragEnd() {
        this._sash.layout();
    }
    _onSashReset() {
        this._sashRatio = this._defaultRatio;
        this._dataSource.relayoutEditors();
        this._sash.layout();
    }
    getVerticalSashTop(sash) {
        return 0;
    }
    getVerticalSashLeft(sash) {
        return this._sashPosition;
    }
    getVerticalSashHeight(sash) {
        return this._dataSource.getHeight();
    }
    setBoundarySashes(sashes) {
        this._sash.orthogonalEndSash = sashes.bottom;
    }
    _getViewZones(lineChanges, originalForeignVZ, modifiedForeignVZ) {
        const originalEditor = this._dataSource.getOriginalEditor();
        const modifiedEditor = this._dataSource.getModifiedEditor();
        const c = new SideBySideViewZonesComputer(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor);
        return c.getViewZones();
    }
    _getOriginalEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators) {
        const originalEditor = this._dataSource.getOriginalEditor();
        const overviewZoneColor = String(this._removeColor);
        const result = {
            decorations: [],
            overviewZones: []
        };
        const originalModel = originalEditor.getModel();
        const originalViewModel = originalEditor._getViewModel();
        for (const lineChange of lineChanges) {
            if (isChangeOrDelete(lineChange)) {
                result.decorations.push({
                    range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(lineChange.originalStartLineNumber, 1, lineChange.originalEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
                    options: (renderIndicators ? DECORATIONS.lineDeleteWithSign : DECORATIONS.lineDelete)
                });
                if (!isChangeOrInsert(lineChange) || !lineChange.charChanges) {
                    result.decorations.push(createDecoration(lineChange.originalStartLineNumber, 1, lineChange.originalEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, DECORATIONS.charDeleteWholeLine));
                }
                const viewRange = getViewRange(originalModel, originalViewModel, lineChange.originalStartLineNumber, lineChange.originalEndLineNumber);
                result.overviewZones.push(new _common_viewModel_overviewZoneManager_js__WEBPACK_IMPORTED_MODULE_44__/* .OverviewRulerZone */ .EY(viewRange.startLineNumber, viewRange.endLineNumber, /*use endLineNumber*/ 0, overviewZoneColor));
                if (lineChange.charChanges) {
                    for (const charChange of lineChange.charChanges) {
                        if (isCharChangeOrDelete(charChange)) {
                            if (ignoreTrimWhitespace) {
                                for (let lineNumber = charChange.originalStartLineNumber; lineNumber <= charChange.originalEndLineNumber; lineNumber++) {
                                    let startColumn;
                                    let endColumn;
                                    if (lineNumber === charChange.originalStartLineNumber) {
                                        startColumn = charChange.originalStartColumn;
                                    }
                                    else {
                                        startColumn = originalModel.getLineFirstNonWhitespaceColumn(lineNumber);
                                    }
                                    if (lineNumber === charChange.originalEndLineNumber) {
                                        endColumn = charChange.originalEndColumn;
                                    }
                                    else {
                                        endColumn = originalModel.getLineLastNonWhitespaceColumn(lineNumber);
                                    }
                                    result.decorations.push(createDecoration(lineNumber, startColumn, lineNumber, endColumn, DECORATIONS.charDelete));
                                }
                            }
                            else {
                                result.decorations.push(createDecoration(charChange.originalStartLineNumber, charChange.originalStartColumn, charChange.originalEndLineNumber, charChange.originalEndColumn, DECORATIONS.charDelete));
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
    _getModifiedEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators, renderMarginRevertIcon) {
        const modifiedEditor = this._dataSource.getModifiedEditor();
        const overviewZoneColor = String(this._insertColor);
        const result = {
            decorations: [],
            overviewZones: []
        };
        const modifiedModel = modifiedEditor.getModel();
        const modifiedViewModel = modifiedEditor._getViewModel();
        for (const lineChange of lineChanges) {
            // Arrows for reverting changes.
            if (renderMarginRevertIcon) {
                if (lineChange.modifiedEndLineNumber > 0) {
                    result.decorations.push({
                        range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedStartLineNumber, 1),
                        options: DECORATIONS.arrowRevertChange
                    });
                }
                else {
                    const viewZone = zones.modified.find(z => z.afterLineNumber === lineChange.modifiedStartLineNumber);
                    if (viewZone) {
                        viewZone.marginDomNode = createViewZoneMarginArrow();
                    }
                }
            }
            if (isChangeOrInsert(lineChange)) {
                result.decorations.push({
                    range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
                    options: (renderIndicators ? DECORATIONS.lineInsertWithSign : DECORATIONS.lineInsert)
                });
                if (!isChangeOrDelete(lineChange) || !lineChange.charChanges) {
                    result.decorations.push(createDecoration(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, DECORATIONS.charInsertWholeLine));
                }
                const viewRange = getViewRange(modifiedModel, modifiedViewModel, lineChange.modifiedStartLineNumber, lineChange.modifiedEndLineNumber);
                result.overviewZones.push(new _common_viewModel_overviewZoneManager_js__WEBPACK_IMPORTED_MODULE_44__/* .OverviewRulerZone */ .EY(viewRange.startLineNumber, viewRange.endLineNumber, /*use endLineNumber*/ 0, overviewZoneColor));
                if (lineChange.charChanges) {
                    for (const charChange of lineChange.charChanges) {
                        if (isCharChangeOrInsert(charChange)) {
                            if (ignoreTrimWhitespace) {
                                for (let lineNumber = charChange.modifiedStartLineNumber; lineNumber <= charChange.modifiedEndLineNumber; lineNumber++) {
                                    let startColumn;
                                    let endColumn;
                                    if (lineNumber === charChange.modifiedStartLineNumber) {
                                        startColumn = charChange.modifiedStartColumn;
                                    }
                                    else {
                                        startColumn = modifiedModel.getLineFirstNonWhitespaceColumn(lineNumber);
                                    }
                                    if (lineNumber === charChange.modifiedEndLineNumber) {
                                        endColumn = charChange.modifiedEndColumn;
                                    }
                                    else {
                                        endColumn = modifiedModel.getLineLastNonWhitespaceColumn(lineNumber);
                                    }
                                    result.decorations.push(createDecoration(lineNumber, startColumn, lineNumber, endColumn, DECORATIONS.charInsert));
                                }
                            }
                            else {
                                result.decorations.push(createDecoration(charChange.modifiedStartLineNumber, charChange.modifiedStartColumn, charChange.modifiedEndLineNumber, charChange.modifiedEndColumn, DECORATIONS.charInsert));
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
}
DiffEditorWidgetSideBySide.MINIMUM_EDITOR_WIDTH = 100;
class SideBySideViewZonesComputer extends ViewZonesComputer {
    constructor(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor) {
        super(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor);
    }
    _createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion() {
        return null;
    }
    _produceOriginalFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength) {
        if (lineChangeModifiedLength > lineChangeOriginalLength) {
            return {
                afterLineNumber: Math.max(lineChange.originalStartLineNumber, lineChange.originalEndLineNumber),
                heightInLines: (lineChangeModifiedLength - lineChangeOriginalLength),
                domNode: null
            };
        }
        return null;
    }
    _produceModifiedFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength) {
        if (lineChangeOriginalLength > lineChangeModifiedLength) {
            return {
                afterLineNumber: Math.max(lineChange.modifiedStartLineNumber, lineChange.modifiedEndLineNumber),
                heightInLines: (lineChangeOriginalLength - lineChangeModifiedLength),
                domNode: null
            };
        }
        return null;
    }
}
class DiffEditorWidgetInline extends DiffEditorWidgetStyle {
    constructor(dataSource, enableSplitViewResizing) {
        super(dataSource);
        this._decorationsLeft = dataSource.getOriginalEditor().getLayoutInfo().decorationsLeft;
        this._register(dataSource.getOriginalEditor().onDidLayoutChange((layoutInfo) => {
            if (this._decorationsLeft !== layoutInfo.decorationsLeft) {
                this._decorationsLeft = layoutInfo.decorationsLeft;
                dataSource.relayoutEditors();
            }
        }));
    }
    setEnableSplitViewResizing(enableSplitViewResizing) {
        // Nothing to do..
    }
    _getViewZones(lineChanges, originalForeignVZ, modifiedForeignVZ, renderIndicators) {
        const originalEditor = this._dataSource.getOriginalEditor();
        const modifiedEditor = this._dataSource.getModifiedEditor();
        const computer = new InlineViewZonesComputer(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor, renderIndicators);
        return computer.getViewZones();
    }
    _getOriginalEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators) {
        const overviewZoneColor = String(this._removeColor);
        const result = {
            decorations: [],
            overviewZones: []
        };
        const originalEditor = this._dataSource.getOriginalEditor();
        const originalModel = originalEditor.getModel();
        const originalViewModel = originalEditor._getViewModel();
        let zoneIndex = 0;
        for (const lineChange of lineChanges) {
            // Add overview zones in the overview ruler
            if (isChangeOrDelete(lineChange)) {
                result.decorations.push({
                    range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(lineChange.originalStartLineNumber, 1, lineChange.originalEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
                    options: DECORATIONS.lineDeleteMargin
                });
                while (zoneIndex < zones.modified.length) {
                    const zone = zones.modified[zoneIndex];
                    if (zone.diff && zone.diff.originalStartLineNumber >= lineChange.originalStartLineNumber) {
                        break;
                    }
                    zoneIndex++;
                }
                let zoneHeightInLines = 0;
                if (zoneIndex < zones.modified.length) {
                    const zone = zones.modified[zoneIndex];
                    if (zone.diff
                        && zone.diff.originalStartLineNumber === lineChange.originalStartLineNumber
                        && zone.diff.originalEndLineNumber === lineChange.originalEndLineNumber
                        && zone.diff.modifiedStartLineNumber === lineChange.modifiedStartLineNumber
                        && zone.diff.modifiedEndLineNumber === lineChange.modifiedEndLineNumber) {
                        zoneHeightInLines = zone.heightInLines;
                    }
                }
                const viewRange = getViewRange(originalModel, originalViewModel, lineChange.originalStartLineNumber, lineChange.originalEndLineNumber);
                result.overviewZones.push(new _common_viewModel_overviewZoneManager_js__WEBPACK_IMPORTED_MODULE_44__/* .OverviewRulerZone */ .EY(viewRange.startLineNumber, viewRange.endLineNumber, zoneHeightInLines, overviewZoneColor));
            }
        }
        return result;
    }
    _getModifiedEditorDecorations(zones, lineChanges, ignoreTrimWhitespace, renderIndicators, renderMarginRevertIcon) {
        const modifiedEditor = this._dataSource.getModifiedEditor();
        const overviewZoneColor = String(this._insertColor);
        const result = {
            decorations: [],
            overviewZones: []
        };
        const modifiedModel = modifiedEditor.getModel();
        const modifiedViewModel = modifiedEditor._getViewModel();
        for (const lineChange of lineChanges) {
            // Add decorations & overview zones
            if (isChangeOrInsert(lineChange)) {
                result.decorations.push({
                    range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
                    options: (renderIndicators ? DECORATIONS.lineInsertWithSign : DECORATIONS.lineInsert)
                });
                const viewRange = getViewRange(modifiedModel, modifiedViewModel, lineChange.modifiedStartLineNumber, lineChange.modifiedEndLineNumber);
                result.overviewZones.push(new _common_viewModel_overviewZoneManager_js__WEBPACK_IMPORTED_MODULE_44__/* .OverviewRulerZone */ .EY(viewRange.startLineNumber, viewRange.endLineNumber, /*use endLineNumber*/ 0, overviewZoneColor));
                if (lineChange.charChanges) {
                    for (const charChange of lineChange.charChanges) {
                        if (isCharChangeOrInsert(charChange)) {
                            if (ignoreTrimWhitespace) {
                                for (let lineNumber = charChange.modifiedStartLineNumber; lineNumber <= charChange.modifiedEndLineNumber; lineNumber++) {
                                    let startColumn;
                                    let endColumn;
                                    if (lineNumber === charChange.modifiedStartLineNumber) {
                                        startColumn = charChange.modifiedStartColumn;
                                    }
                                    else {
                                        startColumn = modifiedModel.getLineFirstNonWhitespaceColumn(lineNumber);
                                    }
                                    if (lineNumber === charChange.modifiedEndLineNumber) {
                                        endColumn = charChange.modifiedEndColumn;
                                    }
                                    else {
                                        endColumn = modifiedModel.getLineLastNonWhitespaceColumn(lineNumber);
                                    }
                                    result.decorations.push(createDecoration(lineNumber, startColumn, lineNumber, endColumn, DECORATIONS.charInsert));
                                }
                            }
                            else {
                                result.decorations.push(createDecoration(charChange.modifiedStartLineNumber, charChange.modifiedStartColumn, charChange.modifiedEndLineNumber, charChange.modifiedEndColumn, DECORATIONS.charInsert));
                            }
                        }
                    }
                }
                else {
                    result.decorations.push(createDecoration(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedEndLineNumber, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, DECORATIONS.charInsertWholeLine));
                }
            }
        }
        return result;
    }
    layout() {
        // An editor should not be smaller than 5px
        return Math.max(5, this._decorationsLeft);
    }
}
class InlineViewZonesComputer extends ViewZonesComputer {
    constructor(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor, renderIndicators) {
        super(lineChanges, originalForeignVZ, modifiedForeignVZ, originalEditor, modifiedEditor);
        this._originalModel = originalEditor.getModel();
        this._renderIndicators = renderIndicators;
        this._pendingLineChange = [];
        this._pendingViewZones = [];
        this._lineBreaksComputer = this._modifiedEditor._getViewModel().createLineBreaksComputer();
    }
    getViewZones() {
        const result = super.getViewZones();
        this._finalize(result);
        return result;
    }
    _createOriginalMarginDomNodeForModifiedForeignViewZoneInAddedRegion() {
        const result = document.createElement('div');
        result.className = 'inline-added-margin-view-zone';
        return result;
    }
    _produceOriginalFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength) {
        const marginDomNode = document.createElement('div');
        marginDomNode.className = 'inline-added-margin-view-zone';
        return {
            afterLineNumber: Math.max(lineChange.originalStartLineNumber, lineChange.originalEndLineNumber),
            heightInLines: lineChangeModifiedLength,
            domNode: document.createElement('div'),
            marginDomNode: marginDomNode
        };
    }
    _produceModifiedFromDiff(lineChange, lineChangeOriginalLength, lineChangeModifiedLength) {
        const domNode = document.createElement('div');
        domNode.className = `view-lines line-delete ${_base_browser_ui_mouseCursor_mouseCursor_js__WEBPACK_IMPORTED_MODULE_2__/* .MOUSE_CURSOR_TEXT_CSS_CLASS_NAME */ .S}`;
        const marginDomNode = document.createElement('div');
        marginDomNode.className = 'inline-deleted-margin-view-zone';
        const viewZone = {
            shouldNotShrink: true,
            afterLineNumber: (lineChange.modifiedEndLineNumber === 0 ? lineChange.modifiedStartLineNumber : lineChange.modifiedStartLineNumber - 1),
            heightInLines: lineChangeOriginalLength,
            minWidthInPx: 0,
            domNode: domNode,
            marginDomNode: marginDomNode,
            diff: {
                originalStartLineNumber: lineChange.originalStartLineNumber,
                originalEndLineNumber: lineChange.originalEndLineNumber,
                modifiedStartLineNumber: lineChange.modifiedStartLineNumber,
                modifiedEndLineNumber: lineChange.modifiedEndLineNumber,
                originalModel: this._originalModel,
                viewLineCounts: null,
            }
        };
        for (let lineNumber = lineChange.originalStartLineNumber; lineNumber <= lineChange.originalEndLineNumber; lineNumber++) {
            this._lineBreaksComputer.addRequest(this._originalModel.getLineContent(lineNumber), null, null);
        }
        this._pendingLineChange.push(lineChange);
        this._pendingViewZones.push(viewZone);
        return viewZone;
    }
    _finalize(result) {
        const modifiedEditorOptions = this._modifiedEditor.getOptions();
        const tabSize = this._modifiedEditor.getModel().getOptions().tabSize;
        const fontInfo = modifiedEditorOptions.get(49 /* EditorOption.fontInfo */);
        const disableMonospaceOptimizations = modifiedEditorOptions.get(32 /* EditorOption.disableMonospaceOptimizations */);
        const typicalHalfwidthCharacterWidth = fontInfo.typicalHalfwidthCharacterWidth;
        const scrollBeyondLastColumn = modifiedEditorOptions.get(102 /* EditorOption.scrollBeyondLastColumn */);
        const mightContainNonBasicASCII = this._originalModel.mightContainNonBasicASCII();
        const mightContainRTL = this._originalModel.mightContainRTL();
        const lineHeight = modifiedEditorOptions.get(65 /* EditorOption.lineHeight */);
        const layoutInfo = modifiedEditorOptions.get(142 /* EditorOption.layoutInfo */);
        const lineDecorationsWidth = layoutInfo.decorationsWidth;
        const stopRenderingLineAfter = modifiedEditorOptions.get(115 /* EditorOption.stopRenderingLineAfter */);
        const renderWhitespace = modifiedEditorOptions.get(97 /* EditorOption.renderWhitespace */);
        const renderControlCharacters = modifiedEditorOptions.get(92 /* EditorOption.renderControlCharacters */);
        const fontLigatures = modifiedEditorOptions.get(50 /* EditorOption.fontLigatures */);
        const lineBreaks = this._lineBreaksComputer.finalize();
        let lineBreakIndex = 0;
        for (let i = 0; i < this._pendingLineChange.length; i++) {
            const lineChange = this._pendingLineChange[i];
            const viewZone = this._pendingViewZones[i];
            const domNode = viewZone.domNode;
            (0,_config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_45__/* .applyFontInfo */ .N)(domNode, fontInfo);
            const marginDomNode = viewZone.marginDomNode;
            (0,_config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_45__/* .applyFontInfo */ .N)(marginDomNode, fontInfo);
            const decorations = [];
            if (lineChange.charChanges) {
                for (const charChange of lineChange.charChanges) {
                    if (isCharChangeOrDelete(charChange)) {
                        decorations.push(new _common_viewModel_js__WEBPACK_IMPORTED_MODULE_28__/* .InlineDecoration */ .$t(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(charChange.originalStartLineNumber, charChange.originalStartColumn, charChange.originalEndLineNumber, charChange.originalEndColumn), 'char-delete', 0 /* InlineDecorationType.Regular */));
                    }
                }
            }
            const hasCharChanges = (decorations.length > 0);
            const sb = new _common_core_stringBuilder_js__WEBPACK_IMPORTED_MODULE_22__/* .StringBuilder */ .HT(10000);
            let maxCharsPerLine = 0;
            let renderedLineCount = 0;
            let viewLineCounts = null;
            for (let lineNumber = lineChange.originalStartLineNumber; lineNumber <= lineChange.originalEndLineNumber; lineNumber++) {
                const lineIndex = lineNumber - lineChange.originalStartLineNumber;
                const lineTokens = this._originalModel.tokenization.getLineTokens(lineNumber);
                const lineContent = lineTokens.getLineContent();
                const lineBreakData = lineBreaks[lineBreakIndex++];
                const actualDecorations = _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_26__/* .LineDecoration */ .Kp.filter(decorations, lineNumber, 1, lineContent.length + 1);
                if (lineBreakData) {
                    let lastBreakOffset = 0;
                    for (const breakOffset of lineBreakData.breakOffsets) {
                        const viewLineTokens = lineTokens.sliceAndInflate(lastBreakOffset, breakOffset, 0);
                        const viewLineContent = lineContent.substring(lastBreakOffset, breakOffset);
                        maxCharsPerLine = Math.max(maxCharsPerLine, this._renderOriginalLine(renderedLineCount++, viewLineContent, viewLineTokens, _common_viewLayout_lineDecorations_js__WEBPACK_IMPORTED_MODULE_26__/* .LineDecoration */ .Kp.extractWrapped(actualDecorations, lastBreakOffset, breakOffset), hasCharChanges, mightContainNonBasicASCII, mightContainRTL, fontInfo, disableMonospaceOptimizations, lineHeight, lineDecorationsWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, tabSize, sb, marginDomNode));
                        lastBreakOffset = breakOffset;
                    }
                    if (!viewLineCounts) {
                        viewLineCounts = [];
                    }
                    // make sure all lines before this one have an entry in `viewLineCounts`
                    while (viewLineCounts.length < lineIndex) {
                        viewLineCounts[viewLineCounts.length] = 1;
                    }
                    viewLineCounts[lineIndex] = lineBreakData.breakOffsets.length;
                    viewZone.heightInLines += (lineBreakData.breakOffsets.length - 1);
                    const marginDomNode2 = document.createElement('div');
                    marginDomNode2.className = 'gutter-delete';
                    result.original.push({
                        afterLineNumber: lineNumber,
                        afterColumn: 0,
                        heightInLines: lineBreakData.breakOffsets.length - 1,
                        domNode: createFakeLinesDiv(),
                        marginDomNode: marginDomNode2
                    });
                }
                else {
                    maxCharsPerLine = Math.max(maxCharsPerLine, this._renderOriginalLine(renderedLineCount++, lineContent, lineTokens, actualDecorations, hasCharChanges, mightContainNonBasicASCII, mightContainRTL, fontInfo, disableMonospaceOptimizations, lineHeight, lineDecorationsWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, tabSize, sb, marginDomNode));
                }
            }
            maxCharsPerLine += scrollBeyondLastColumn;
            const html = sb.build();
            const trustedhtml = diffEditorWidgetTtPolicy ? diffEditorWidgetTtPolicy.createHTML(html) : html;
            domNode.innerHTML = trustedhtml;
            viewZone.minWidthInPx = (maxCharsPerLine * typicalHalfwidthCharacterWidth);
            if (viewLineCounts) {
                // make sure all lines have an entry in `viewLineCounts`
                const cnt = lineChange.originalEndLineNumber - lineChange.originalStartLineNumber;
                while (viewLineCounts.length <= cnt) {
                    viewLineCounts[viewLineCounts.length] = 1;
                }
            }
            viewZone.diff.viewLineCounts = viewLineCounts;
        }
        result.original.sort((a, b) => {
            return a.afterLineNumber - b.afterLineNumber;
        });
    }
    _renderOriginalLine(renderedLineCount, lineContent, lineTokens, decorations, hasCharChanges, mightContainNonBasicASCII, mightContainRTL, fontInfo, disableMonospaceOptimizations, lineHeight, lineDecorationsWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures, tabSize, sb, marginDomNode) {
        sb.appendString('<div class="view-line');
        if (!hasCharChanges) {
            // No char changes
            sb.appendString(' char-delete');
        }
        sb.appendString('" style="top:');
        sb.appendString(String(renderedLineCount * lineHeight));
        sb.appendString('px;width:1000000px;">');
        const isBasicASCII = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_28__/* .ViewLineRenderingData */ .wA.isBasicASCII(lineContent, mightContainNonBasicASCII);
        const containsRTL = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_28__/* .ViewLineRenderingData */ .wA.containsRTL(lineContent, isBasicASCII, mightContainRTL);
        const output = (0,_common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_27__/* .renderViewLine */ .d1)(new _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_27__/* .RenderLineInput */ .IJ((fontInfo.isMonospace && !disableMonospaceOptimizations), fontInfo.canUseHalfwidthRightwardsArrow, lineContent, false, isBasicASCII, containsRTL, 0, lineTokens, decorations, tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, stopRenderingLineAfter, renderWhitespace, renderControlCharacters, fontLigatures !== _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .EditorFontLigatures */ .n0.OFF, null // Send no selections, original line cannot be selected
        ), sb);
        sb.appendString('</div>');
        if (this._renderIndicators) {
            const marginElement = document.createElement('div');
            marginElement.className = `delete-sign ${_base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__/* .ThemeIcon */ .k.asClassName(diffRemoveIcon)}`;
            marginElement.setAttribute('style', `position:absolute;top:${renderedLineCount * lineHeight}px;width:${lineDecorationsWidth}px;height:${lineHeight}px;right:0;`);
            marginDomNode.appendChild(marginElement);
        }
        return output.characterMapping.getHorizontalOffset(output.characterMapping.length);
    }
}
function validateDiffWordWrap(value, defaultValue) {
    return (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .stringSet */ .NY)(value, defaultValue, ['off', 'on', 'inherit']);
}
function isChangeOrInsert(lineChange) {
    return lineChange.modifiedEndLineNumber > 0;
}
function isChangeOrDelete(lineChange) {
    return lineChange.originalEndLineNumber > 0;
}
function isCharChangeOrInsert(charChange) {
    if (charChange.modifiedStartLineNumber === charChange.modifiedEndLineNumber) {
        return charChange.modifiedEndColumn - charChange.modifiedStartColumn > 0;
    }
    return charChange.modifiedEndLineNumber - charChange.modifiedStartLineNumber > 0;
}
function isCharChangeOrDelete(charChange) {
    if (charChange.originalStartLineNumber === charChange.originalEndLineNumber) {
        return charChange.originalEndColumn - charChange.originalStartColumn > 0;
    }
    return charChange.originalEndLineNumber - charChange.originalStartLineNumber > 0;
}
function createFakeLinesDiv() {
    const r = document.createElement('div');
    r.className = 'diagonal-fill';
    return r;
}
function createViewZoneMarginArrow() {
    const arrow = document.createElement('div');
    arrow.className = 'arrow-revert-change ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_11__/* .ThemeIcon */ .k.asClassName(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_6__/* .Codicon */ .l.arrowRight);
    return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__.$('div', {}, arrow);
}
function getViewRange(model, viewModel, startLineNumber, endLineNumber) {
    const lineCount = model.getLineCount();
    startLineNumber = Math.min(lineCount, Math.max(1, startLineNumber));
    endLineNumber = Math.min(lineCount, Math.max(1, endLineNumber));
    return viewModel.coordinatesConverter.convertModelRangeToViewRange(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_42__/* .Range */ .e(startLineNumber, model.getLineMinColumn(startLineNumber), endLineNumber, model.getLineMaxColumn(endLineNumber)));
}
function validateDiffEditorOptions(options, defaults) {
    return {
        enableSplitViewResizing: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.enableSplitViewResizing, defaults.enableSplitViewResizing),
        splitViewDefaultRatio: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .clampedFloat */ .L_)(options.splitViewDefaultRatio, 0.5, 0.1, 0.9),
        renderSideBySide: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.renderSideBySide, defaults.renderSideBySide),
        renderMarginRevertIcon: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.renderMarginRevertIcon, defaults.renderMarginRevertIcon),
        maxComputationTime: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .clampedInt */ .Zc)(options.maxComputationTime, defaults.maxComputationTime, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        maxFileSize: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .clampedInt */ .Zc)(options.maxFileSize, defaults.maxFileSize, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */),
        ignoreTrimWhitespace: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.ignoreTrimWhitespace, defaults.ignoreTrimWhitespace),
        renderIndicators: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.renderIndicators, defaults.renderIndicators),
        originalEditable: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.originalEditable, defaults.originalEditable),
        diffCodeLens: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.diffCodeLens, defaults.diffCodeLens),
        renderOverviewRuler: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.renderOverviewRuler, defaults.renderOverviewRuler),
        diffWordWrap: validateDiffWordWrap(options.diffWordWrap, defaults.diffWordWrap),
        diffAlgorithm: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .stringSet */ .NY)(options.diffAlgorithm, defaults.diffAlgorithm, ['legacy', 'advanced'], { 'smart': 'legacy', 'experimental': 'advanced' }),
        accessibilityVerbose: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.accessibilityVerbose, defaults.accessibilityVerbose),
        experimental: {
            collapseUnchangedRegions: false,
        },
        isInEmbeddedEditor: (0,_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_21__/* .boolean */ .O7)(options.isInEmbeddedEditor, defaults.isInEmbeddedEditor),
        onlyShowAccessibleDiffViewer: false,
    };
}
function changedDiffEditorOptions(a, b) {
    return {
        enableSplitViewResizing: (a.enableSplitViewResizing !== b.enableSplitViewResizing),
        renderSideBySide: (a.renderSideBySide !== b.renderSideBySide),
        renderMarginRevertIcon: (a.renderMarginRevertIcon !== b.renderMarginRevertIcon),
        maxComputationTime: (a.maxComputationTime !== b.maxComputationTime),
        maxFileSize: (a.maxFileSize !== b.maxFileSize),
        ignoreTrimWhitespace: (a.ignoreTrimWhitespace !== b.ignoreTrimWhitespace),
        renderIndicators: (a.renderIndicators !== b.renderIndicators),
        originalEditable: (a.originalEditable !== b.originalEditable),
        diffCodeLens: (a.diffCodeLens !== b.diffCodeLens),
        renderOverviewRuler: (a.renderOverviewRuler !== b.renderOverviewRuler),
        diffWordWrap: (a.diffWordWrap !== b.diffWordWrap),
        diffAlgorithm: (a.diffAlgorithm !== b.diffAlgorithm),
        accessibilityVerbose: (a.accessibilityVerbose !== b.accessibilityVerbose),
    };
}
(0,_platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_38__/* .registerThemingParticipant */ .Ic)((theme, collector) => {
    const diffDiagonalFillColor = theme.getColor(_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_36__/* .diffDiagonalFill */ .L_t);
    collector.addRule(`
	.monaco-editor .diagonal-fill {
		background-image: linear-gradient(
			-45deg,
			${diffDiagonalFillColor} 12.5%,
			#0000 12.5%, #0000 50%,
			${diffDiagonalFillColor} 50%, ${diffDiagonalFillColor} 62.5%,
			#0000 62.5%, #0000 100%
		);
		background-size: 8px 8px;
	}
	`);
});


/***/ })

}]);