"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-4c0e5143"],{

/***/ 31888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ ILabelService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);

const ILabelService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('labelService');


/***/ }),

/***/ 50572:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ ILayoutService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ILayoutService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('layoutService');


/***/ }),

/***/ 59109:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CQ: function() { return /* binding */ WorkbenchListFocusContextKey; },
/* harmony export */   Lw: function() { return /* binding */ IListService; },
/* harmony export */   PS: function() { return /* binding */ WorkbenchTreeElementCanCollapse; },
/* harmony export */   XN: function() { return /* binding */ ListService; },
/* harmony export */   ev: function() { return /* binding */ WorkbenchList; },
/* harmony export */   ls: function() { return /* binding */ WorkbenchAsyncDataTree; },
/* harmony export */   uJ: function() { return /* binding */ WorkbenchTreeElementCanExpand; }
/* harmony export */ });
/* unused harmony exports RawWorkbenchListScrollAtBoundaryContextKey, WorkbenchListScrollAtTopContextKey, WorkbenchListScrollAtBottomContextKey, RawWorkbenchListFocusContextKey, WorkbenchListSupportsMultiSelectContextKey, WorkbenchListHasSelectionOrFocus, WorkbenchListDoubleSelection, WorkbenchListMultiSelection, WorkbenchListSelectionNavigation, WorkbenchListSupportsFind, WorkbenchTreeElementHasParent, WorkbenchTreeElementHasChild, WorkbenchTreeFindOpen, WorkbenchPagedList, WorkbenchTable, WorkbenchObjectTree, WorkbenchCompressibleObjectTree, WorkbenchDataTree, WorkbenchCompressibleAsyncDataTree */
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56704);
/* harmony import */ var _base_browser_ui_list_listPaging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78685);
/* harmony import */ var _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54530);
/* harmony import */ var _base_browser_ui_table_tableWidget_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32162);
/* harmony import */ var _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20104);
/* harmony import */ var _base_browser_ui_tree_asyncDataTree_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38424);
/* harmony import */ var _base_browser_ui_tree_dataTree_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5837);
/* harmony import */ var _base_browser_ui_tree_objectTree_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13689);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26794);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80757);
/* harmony import */ var _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99779);
/* harmony import */ var _configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(97772);
/* harmony import */ var _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78658);
/* harmony import */ var _contextkey_common_contextkeys_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(24149);
/* harmony import */ var _contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(88823);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73830);
/* harmony import */ var _keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13748);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16324);
/* harmony import */ var _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18379);
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




















const IListService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .createDecorator */ .yh)('listService');
class ListService {
    get lastFocusedList() {
        return this._lastFocusedWidget;
    }
    constructor() {
        this.disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .DisposableStore */ .SL();
        this.lists = [];
        this._lastFocusedWidget = undefined;
        this._hasCreatedStyleController = false;
    }
    setLastFocusedList(widget) {
        var _a, _b;
        if (widget === this._lastFocusedWidget) {
            return;
        }
        (_a = this._lastFocusedWidget) === null || _a === void 0 ? void 0 : _a.getHTMLElement().classList.remove('last-focused');
        this._lastFocusedWidget = widget;
        (_b = this._lastFocusedWidget) === null || _b === void 0 ? void 0 : _b.getHTMLElement().classList.add('last-focused');
    }
    register(widget, extraContextKeys) {
        if (!this._hasCreatedStyleController) {
            this._hasCreatedStyleController = true;
            // create a shared default tree style sheet for performance reasons
            const styleController = new _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .DefaultStyleController */ .wD((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .createStyleSheet */ .dS)(), '');
            styleController.style(_theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultListStyles */ .O2);
        }
        if (this.lists.some(l => l.widget === widget)) {
            throw new Error('Cannot register the same widget multiple times');
        }
        // Keep in our lists list
        const registeredList = { widget, extraContextKeys };
        this.lists.push(registeredList);
        // Check for currently being focused
        if (widget.getHTMLElement() === document.activeElement) {
            this.setLastFocusedList(widget);
        }
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .combinedDisposable */ .F8)(widget.onDidFocus(() => this.setLastFocusedList(widget)), (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .toDisposable */ .OF)(() => this.lists.splice(this.lists.indexOf(registeredList), 1)), widget.onDidDispose(() => {
            this.lists = this.lists.filter(l => l !== registeredList);
            if (this._lastFocusedWidget === widget) {
                this.setLastFocusedList(undefined);
            }
        }));
    }
    dispose() {
        this.disposables.dispose();
    }
}
const RawWorkbenchListScrollAtBoundaryContextKey = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listScrollAtBoundary', 'none');
const WorkbenchListScrollAtTopContextKey = _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('top'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
const WorkbenchListScrollAtBottomContextKey = _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('bottom'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
const RawWorkbenchListFocusContextKey = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listFocus', true);
const WorkbenchListSupportsMultiSelectContextKey = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listSupportsMultiselect', true);
const WorkbenchListFocusContextKey = _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.and(RawWorkbenchListFocusContextKey, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .ContextKeyExpr */ .Ao.not(_contextkey_common_contextkeys_js__WEBPACK_IMPORTED_MODULE_14__/* .InputFocusedContextKey */ .d0));
const WorkbenchListHasSelectionOrFocus = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listHasSelectionOrFocus', false);
const WorkbenchListDoubleSelection = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listDoubleSelection', false);
const WorkbenchListMultiSelection = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listMultiSelection', false);
const WorkbenchListSelectionNavigation = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listSelectionNavigation', false);
const WorkbenchListSupportsFind = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('listSupportsFind', true);
const WorkbenchTreeElementCanCollapse = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('treeElementCanCollapse', false);
const WorkbenchTreeElementHasParent = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('treeElementHasParent', false);
const WorkbenchTreeElementCanExpand = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('treeElementCanExpand', false);
const WorkbenchTreeElementHasChild = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('treeElementHasChild', false);
const WorkbenchTreeFindOpen = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .RawContextKey */ .uy('treeFindOpen', false);
const WorkbenchListTypeNavigationModeKey = 'listTypeNavigationMode';
/**
 * @deprecated in favor of WorkbenchListTypeNavigationModeKey
 */
const WorkbenchListAutomaticKeyboardNavigationLegacyKey = 'listAutomaticKeyboardNavigation';
function createScopedContextKeyService(contextKeyService, widget) {
    const result = contextKeyService.createScoped(widget.getHTMLElement());
    RawWorkbenchListFocusContextKey.bindTo(result);
    return result;
}
function createScrollObserver(contextKeyService, widget) {
    const listScrollAt = RawWorkbenchListScrollAtBoundaryContextKey.bindTo(contextKeyService);
    const update = () => {
        const atTop = widget.scrollTop === 0;
        // We need a threshold `1` since scrollHeight is rounded.
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
        const atBottom = widget.scrollHeight - widget.renderHeight - widget.scrollTop < 1;
        if (atTop && atBottom) {
            listScrollAt.set('both');
        }
        else if (atTop) {
            listScrollAt.set('top');
        }
        else if (atBottom) {
            listScrollAt.set('bottom');
        }
        else {
            listScrollAt.set('none');
        }
    };
    update();
    return widget.onDidScroll(update);
}
const multiSelectModifierSettingKey = 'workbench.list.multiSelectModifier';
const openModeSettingKey = 'workbench.list.openMode';
const horizontalScrollingKey = 'workbench.list.horizontalScrolling';
const defaultFindModeSettingKey = 'workbench.list.defaultFindMode';
const typeNavigationModeSettingKey = 'workbench.list.typeNavigationMode';
/** @deprecated in favor of `workbench.list.defaultFindMode` and `workbench.list.typeNavigationMode` */
const keyboardNavigationSettingKey = 'workbench.list.keyboardNavigation';
const scrollByPageKey = 'workbench.list.scrollByPage';
const defaultFindMatchTypeSettingKey = 'workbench.list.defaultFindMatchType';
const treeIndentKey = 'workbench.tree.indent';
const treeRenderIndentGuidesKey = 'workbench.tree.renderIndentGuides';
const listSmoothScrolling = 'workbench.list.smoothScrolling';
const mouseWheelScrollSensitivityKey = 'workbench.list.mouseWheelScrollSensitivity';
const fastScrollSensitivityKey = 'workbench.list.fastScrollSensitivity';
const treeExpandMode = 'workbench.tree.expandMode';
function useAltAsMultipleSelectionModifier(configurationService) {
    return configurationService.getValue(multiSelectModifierSettingKey) === 'alt';
}
class MultipleSelectionController extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .Disposable */ .JT {
    constructor(configurationService) {
        super();
        this.configurationService = configurationService;
        this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(this.configurationService);
            }
        }));
    }
    isSelectionSingleChangeEvent(event) {
        if (this.useAltAsMultipleSelectionModifier) {
            return event.browserEvent.altKey;
        }
        return (0,_base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .isSelectionSingleChangeEvent */ .Zo)(event);
    }
    isSelectionRangeChangeEvent(event) {
        return (0,_base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .isSelectionRangeChangeEvent */ .wn)(event);
    }
}
function toWorkbenchListOptions(accessor, options) {
    var _a;
    const configurationService = accessor.get(_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui);
    const keybindingService = accessor.get(_keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_17__/* .IKeybindingService */ .d);
    const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .DisposableStore */ .SL();
    const result = Object.assign(Object.assign({}, options), { keyboardNavigationDelegate: { mightProducePrintableCharacter(e) { return keybindingService.mightProducePrintableCharacter(e); } }, smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)), mouseWheelScrollSensitivity: configurationService.getValue(mouseWheelScrollSensitivityKey), fastScrollSensitivity: configurationService.getValue(fastScrollSensitivityKey), multipleSelectionController: (_a = options.multipleSelectionController) !== null && _a !== void 0 ? _a : disposables.add(new MultipleSelectionController(configurationService)), keyboardNavigationEventFilter: createKeyboardNavigationEventFilter(keybindingService), scrollByPage: Boolean(configurationService.getValue(scrollByPageKey)) });
    return [result, disposables];
}
let WorkbenchList = class WorkbenchList extends _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV {
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, Object.assign(Object.assign({ keyboardSupport: false }, workbenchListOptions), { horizontalScrolling }));
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = Object.assign(Object.assign({}, options), { horizontalScrolling });
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = Object.assign(Object.assign({}, options), { scrollByPage });
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = Object.assign(Object.assign({}, options), { smoothScrolling });
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { mouseWheelScrollSensitivity });
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { fastScrollSensitivity });
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, Object.assign({ configurationService }, options));
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0,_theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .getListStyles */ .TU)(styles) : _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultListStyles */ .O2);
    }
};
WorkbenchList = __decorate([
    __param(5, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(6, IListService),
    __param(7, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui),
    __param(8, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG)
], WorkbenchList);

let WorkbenchPagedList = class WorkbenchPagedList extends _base_browser_ui_list_listPaging_js__WEBPACK_IMPORTED_MODULE_1__/* .PagedList */ .j {
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, Object.assign(Object.assign({ keyboardSupport: false }, workbenchListOptions), { horizontalScrolling }));
        this.disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .DisposableStore */ .SL();
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this.widget));
        this.horizontalScrolling = options.horizontalScrolling;
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = Object.assign(Object.assign({}, options), { horizontalScrolling });
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = Object.assign(Object.assign({}, options), { scrollByPage });
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = Object.assign(Object.assign({}, options), { smoothScrolling });
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { mouseWheelScrollSensitivity });
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { fastScrollSensitivity });
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, Object.assign({ configurationService }, options));
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0,_theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .getListStyles */ .TU)(styles) : _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultListStyles */ .O2);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
};
WorkbenchPagedList = __decorate([
    __param(5, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(6, IListService),
    __param(7, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui),
    __param(8, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG)
], WorkbenchPagedList);

let WorkbenchTable = class WorkbenchTable extends _base_browser_ui_table_tableWidget_js__WEBPACK_IMPORTED_MODULE_3__/* .Table */ .i {
    constructor(user, container, delegate, columns, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, columns, renderers, Object.assign(Object.assign({ keyboardSupport: false }, workbenchListOptions), { horizontalScrolling }));
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = Object.assign(Object.assign({}, options), { horizontalScrolling });
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = Object.assign(Object.assign({}, options), { scrollByPage });
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = Object.assign(Object.assign({}, options), { smoothScrolling });
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { mouseWheelScrollSensitivity });
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = Object.assign(Object.assign({}, options), { fastScrollSensitivity });
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new TableResourceNavigator(this, Object.assign({ configurationService }, options));
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? (0,_theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .getListStyles */ .TU)(styles) : _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultListStyles */ .O2);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
};
WorkbenchTable = __decorate([
    __param(6, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(7, IListService),
    __param(8, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui),
    __param(9, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG)
], WorkbenchTable);

class ResourceNavigator extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .Disposable */ .JT {
    constructor(widget, options) {
        var _a;
        super();
        this.widget = widget;
        this._onDidOpen = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Emitter */ .Q5());
        this.onDidOpen = this._onDidOpen.event;
        this._register(_base_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Event */ .ju.filter(this.widget.onDidChangeSelection, e => e.browserEvent instanceof KeyboardEvent)(e => this.onSelectionFromKeyboard(e)));
        this._register(this.widget.onPointer((e) => this.onPointer(e.element, e.browserEvent)));
        this._register(this.widget.onMouseDblClick((e) => this.onMouseDblClick(e.element, e.browserEvent)));
        if (typeof (options === null || options === void 0 ? void 0 : options.openOnSingleClick) !== 'boolean' && (options === null || options === void 0 ? void 0 : options.configurationService)) {
            this.openOnSingleClick = (options === null || options === void 0 ? void 0 : options.configurationService.getValue(openModeSettingKey)) !== 'doubleClick';
            this._register(options === null || options === void 0 ? void 0 : options.configurationService.onDidChangeConfiguration(e => {
                if (e.affectsConfiguration(openModeSettingKey)) {
                    this.openOnSingleClick = (options === null || options === void 0 ? void 0 : options.configurationService.getValue(openModeSettingKey)) !== 'doubleClick';
                }
            }));
        }
        else {
            this.openOnSingleClick = (_a = options === null || options === void 0 ? void 0 : options.openOnSingleClick) !== null && _a !== void 0 ? _a : true;
        }
    }
    onSelectionFromKeyboard(event) {
        if (event.elements.length !== 1) {
            return;
        }
        const selectionKeyboardEvent = event.browserEvent;
        const preserveFocus = typeof selectionKeyboardEvent.preserveFocus === 'boolean' ? selectionKeyboardEvent.preserveFocus : true;
        const pinned = typeof selectionKeyboardEvent.pinned === 'boolean' ? selectionKeyboardEvent.pinned : !preserveFocus;
        const sideBySide = false;
        this._open(this.getSelectedElement(), preserveFocus, pinned, sideBySide, event.browserEvent);
    }
    onPointer(element, browserEvent) {
        if (!this.openOnSingleClick) {
            return;
        }
        const isDoubleClick = browserEvent.detail === 2;
        if (isDoubleClick) {
            return;
        }
        const isMiddleClick = browserEvent.button === 1;
        const preserveFocus = true;
        const pinned = isMiddleClick;
        const sideBySide = browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey;
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    onMouseDblClick(element, browserEvent) {
        if (!browserEvent) {
            return;
        }
        // copied from AbstractTree
        const target = browserEvent.target;
        const onTwistie = target.classList.contains('monaco-tl-twistie')
            || (target.classList.contains('monaco-icon-label') && target.classList.contains('folder-icon') && browserEvent.offsetX < 16);
        if (onTwistie) {
            return;
        }
        const preserveFocus = false;
        const pinned = true;
        const sideBySide = (browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey);
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    _open(element, preserveFocus, pinned, sideBySide, browserEvent) {
        if (!element) {
            return;
        }
        this._onDidOpen.fire({
            editorOptions: {
                preserveFocus,
                pinned,
                revealIfVisible: true
            },
            sideBySide,
            element,
            browserEvent
        });
    }
}
class ListResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
        this.widget = widget;
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}
class TableResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}
class TreeResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
    }
    getSelectedElement() {
        var _a;
        return (_a = this.widget.getSelection()[0]) !== null && _a !== void 0 ? _a : undefined;
    }
}
function createKeyboardNavigationEventFilter(keybindingService) {
    let inMultiChord = false;
    return event => {
        if (event.toKeyCodeChord().isModifierKey()) {
            return false;
        }
        if (inMultiChord) {
            inMultiChord = false;
            return false;
        }
        const result = keybindingService.softDispatch(event, event.target);
        if (result.kind === 1 /* ResultKind.MoreChordsNeeded */) {
            inMultiChord = true;
            return false;
        }
        inMultiChord = false;
        return result.kind === 0 /* ResultKind.NoMatchingKb */;
    };
}
let WorkbenchObjectTree = class WorkbenchObjectTree extends _base_browser_ui_tree_objectTree_js__WEBPACK_IMPORTED_MODULE_7__/* .ObjectTree */ .H {
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService) {
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
};
WorkbenchObjectTree = __decorate([
    __param(5, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG),
    __param(6, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(7, IListService),
    __param(8, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchObjectTree);

let WorkbenchCompressibleObjectTree = class WorkbenchCompressibleObjectTree extends _base_browser_ui_tree_objectTree_js__WEBPACK_IMPORTED_MODULE_7__/* .CompressibleObjectTree */ .h {
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService) {
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchCompressibleObjectTree = __decorate([
    __param(5, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG),
    __param(6, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(7, IListService),
    __param(8, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchCompressibleObjectTree);

let WorkbenchDataTree = class WorkbenchDataTree extends _base_browser_ui_tree_dataTree_js__WEBPACK_IMPORTED_MODULE_6__/* .DataTree */ .u {
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchDataTree = __decorate([
    __param(6, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG),
    __param(7, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(8, IListService),
    __param(9, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchDataTree);

let WorkbenchAsyncDataTree = class WorkbenchAsyncDataTree extends _base_browser_ui_tree_asyncDataTree_js__WEBPACK_IMPORTED_MODULE_5__/* .AsyncDataTree */ .c {
    get onDidOpen() { return this.internals.onDidOpen; }
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchAsyncDataTree = __decorate([
    __param(6, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG),
    __param(7, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(8, IListService),
    __param(9, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchAsyncDataTree);

let WorkbenchCompressibleAsyncDataTree = class WorkbenchCompressibleAsyncDataTree extends _base_browser_ui_tree_asyncDataTree_js__WEBPACK_IMPORTED_MODULE_5__/* .CompressibleAsyncDataTree */ .h {
    constructor(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
};
WorkbenchCompressibleAsyncDataTree = __decorate([
    __param(7, _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG),
    __param(8, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(9, IListService),
    __param(10, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchCompressibleAsyncDataTree);

function getDefaultTreeFindMode(configurationService) {
    const value = configurationService.getValue(defaultFindModeSettingKey);
    if (value === 'highlight') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMode */ .sZ.Highlight;
    }
    else if (value === 'filter') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMode */ .sZ.Filter;
    }
    const deprecatedValue = configurationService.getValue(keyboardNavigationSettingKey);
    if (deprecatedValue === 'simple' || deprecatedValue === 'highlight') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMode */ .sZ.Highlight;
    }
    else if (deprecatedValue === 'filter') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMode */ .sZ.Filter;
    }
    return undefined;
}
function getDefaultTreeFindMatchType(configurationService) {
    const value = configurationService.getValue(defaultFindMatchTypeSettingKey);
    if (value === 'fuzzy') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMatchType */ .Zd.Fuzzy;
    }
    else if (value === 'contiguous') {
        return _base_browser_ui_tree_abstractTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TreeFindMatchType */ .Zd.Contiguous;
    }
    return undefined;
}
function workbenchTreeDataPreamble(accessor, options) {
    var _a;
    const configurationService = accessor.get(_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui);
    const contextViewService = accessor.get(_contextview_browser_contextView_js__WEBPACK_IMPORTED_MODULE_15__/* .IContextViewService */ .u);
    const contextKeyService = accessor.get(_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6);
    const instantiationService = accessor.get(_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_16__/* .IInstantiationService */ .TG);
    const getTypeNavigationMode = () => {
        // give priority to the context key value to specify a value
        const modeString = contextKeyService.getContextKeyValue(WorkbenchListTypeNavigationModeKey);
        if (modeString === 'automatic') {
            return _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeNavigationMode */ .AA.Automatic;
        }
        else if (modeString === 'trigger') {
            return _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeNavigationMode */ .AA.Trigger;
        }
        // also check the deprecated context key to set the mode to 'trigger'
        const modeBoolean = contextKeyService.getContextKeyValue(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        if (modeBoolean === false) {
            return _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeNavigationMode */ .AA.Trigger;
        }
        // finally, check the setting
        const configString = configurationService.getValue(typeNavigationModeSettingKey);
        if (configString === 'automatic') {
            return _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeNavigationMode */ .AA.Automatic;
        }
        else if (configString === 'trigger') {
            return _base_browser_ui_list_listWidget_js__WEBPACK_IMPORTED_MODULE_2__/* .TypeNavigationMode */ .AA.Trigger;
        }
        return undefined;
    };
    const horizontalScrolling = options.horizontalScrolling !== undefined ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
    const [workbenchListOptions, disposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
    const additionalScrollHeight = options.additionalScrollHeight;
    const renderIndentGuides = options.renderIndentGuides !== undefined ? options.renderIndentGuides : configurationService.getValue(treeRenderIndentGuidesKey);
    return {
        getTypeNavigationMode,
        disposable,
        options: Object.assign(Object.assign({ 
            // ...options, // TODO@Joao why is this not splatted here?
            keyboardSupport: false }, workbenchListOptions), { indent: typeof configurationService.getValue(treeIndentKey) === 'number' ? configurationService.getValue(treeIndentKey) : undefined, renderIndentGuides, smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)), defaultFindMode: getDefaultTreeFindMode(configurationService), defaultFindMatchType: getDefaultTreeFindMatchType(configurationService), horizontalScrolling, scrollByPage: Boolean(configurationService.getValue(scrollByPageKey)), additionalScrollHeight, hideTwistiesOfChildlessElements: options.hideTwistiesOfChildlessElements, expandOnlyOnTwistieClick: (_a = options.expandOnlyOnTwistieClick) !== null && _a !== void 0 ? _a : (configurationService.getValue(treeExpandMode) === 'doubleClick'), contextViewProvider: contextViewService, findWidgetStyles: _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultFindWidgetStyles */ .uX })
    };
}
let WorkbenchTreeInternals = class WorkbenchTreeInternals {
    get onDidOpen() { return this.navigator.onDidOpen; }
    constructor(tree, options, getTypeNavigationMode, overrideStyles, contextKeyService, listService, configurationService) {
        var _a;
        this.tree = tree;
        this.disposables = [];
        this.contextKeyService = createScopedContextKeyService(contextKeyService, tree);
        this.disposables.push(createScrollObserver(this.contextKeyService, tree));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listSupportFindWidget = WorkbenchListSupportsFind.bindTo(this.contextKeyService);
        this.listSupportFindWidget.set((_a = options.findWidgetEnabled) !== null && _a !== void 0 ? _a : true);
        this.hasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.hasDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.hasMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.treeElementCanCollapse = WorkbenchTreeElementCanCollapse.bindTo(this.contextKeyService);
        this.treeElementHasParent = WorkbenchTreeElementHasParent.bindTo(this.contextKeyService);
        this.treeElementCanExpand = WorkbenchTreeElementCanExpand.bindTo(this.contextKeyService);
        this.treeElementHasChild = WorkbenchTreeElementHasChild.bindTo(this.contextKeyService);
        this.treeFindOpen = WorkbenchTreeFindOpen.bindTo(this.contextKeyService);
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.updateStyleOverrides(overrideStyles);
        const updateCollapseContextKeys = () => {
            const focus = tree.getFocus()[0];
            if (!focus) {
                return;
            }
            const node = tree.getNode(focus);
            this.treeElementCanCollapse.set(node.collapsible && !node.collapsed);
            this.treeElementHasParent.set(!!tree.getParentElement(focus));
            this.treeElementCanExpand.set(node.collapsible && node.collapsed);
            this.treeElementHasChild.set(!!tree.getFirstElementChild(focus));
        };
        const interestingContextKeys = new Set();
        interestingContextKeys.add(WorkbenchListTypeNavigationModeKey);
        interestingContextKeys.add(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        this.disposables.push(this.contextKeyService, listService.register(tree), tree.onDidChangeSelection(() => {
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.hasMultiSelection.set(selection.length > 1);
                this.hasDoubleSelection.set(selection.length === 2);
            });
        }), tree.onDidChangeFocus(() => {
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
            updateCollapseContextKeys();
        }), tree.onDidChangeCollapseState(updateCollapseContextKeys), tree.onDidChangeModel(updateCollapseContextKeys), tree.onDidChangeFindOpenState(enabled => this.treeFindOpen.set(enabled)), configurationService.onDidChangeConfiguration(e => {
            let newOptions = {};
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            if (e.affectsConfiguration(treeIndentKey)) {
                const indent = configurationService.getValue(treeIndentKey);
                newOptions = Object.assign(Object.assign({}, newOptions), { indent });
            }
            if (e.affectsConfiguration(treeRenderIndentGuidesKey) && options.renderIndentGuides === undefined) {
                const renderIndentGuides = configurationService.getValue(treeRenderIndentGuidesKey);
                newOptions = Object.assign(Object.assign({}, newOptions), { renderIndentGuides });
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                newOptions = Object.assign(Object.assign({}, newOptions), { smoothScrolling });
            }
            if (e.affectsConfiguration(defaultFindModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const defaultFindMode = getDefaultTreeFindMode(configurationService);
                newOptions = Object.assign(Object.assign({}, newOptions), { defaultFindMode });
            }
            if (e.affectsConfiguration(typeNavigationModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const typeNavigationMode = getTypeNavigationMode();
                newOptions = Object.assign(Object.assign({}, newOptions), { typeNavigationMode });
            }
            if (e.affectsConfiguration(defaultFindMatchTypeSettingKey)) {
                const defaultFindMatchType = getDefaultTreeFindMatchType(configurationService);
                newOptions = Object.assign(Object.assign({}, newOptions), { defaultFindMatchType });
            }
            if (e.affectsConfiguration(horizontalScrollingKey) && options.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                newOptions = Object.assign(Object.assign({}, newOptions), { horizontalScrolling });
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                newOptions = Object.assign(Object.assign({}, newOptions), { scrollByPage });
            }
            if (e.affectsConfiguration(treeExpandMode) && options.expandOnlyOnTwistieClick === undefined) {
                newOptions = Object.assign(Object.assign({}, newOptions), { expandOnlyOnTwistieClick: configurationService.getValue(treeExpandMode) === 'doubleClick' });
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                newOptions = Object.assign(Object.assign({}, newOptions), { mouseWheelScrollSensitivity });
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                newOptions = Object.assign(Object.assign({}, newOptions), { fastScrollSensitivity });
            }
            if (Object.keys(newOptions).length > 0) {
                tree.updateOptions(newOptions);
            }
        }), this.contextKeyService.onDidChangeContext(e => {
            if (e.affectsSome(interestingContextKeys)) {
                tree.updateOptions({ typeNavigationMode: getTypeNavigationMode() });
            }
        }));
        this.navigator = new TreeResourceNavigator(tree, Object.assign({ configurationService }, options));
        this.disposables.push(this.navigator);
    }
    updateOptions(options) {
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyleOverrides(overrideStyles) {
        this.tree.style(overrideStyles ? (0,_theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .getListStyles */ .TU)(overrideStyles) : _theme_browser_defaultStyles_js__WEBPACK_IMPORTED_MODULE_19__/* .defaultListStyles */ .O2);
    }
    dispose() {
        this.disposables = (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_9__/* .dispose */ .B9)(this.disposables);
    }
};
WorkbenchTreeInternals = __decorate([
    __param(4, _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_13__/* .IContextKeyService */ .i6),
    __param(5, IListService),
    __param(6, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_11__/* .IConfigurationService */ .Ui)
], WorkbenchTreeInternals);
const configurationRegistry = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_18__/* .Registry */ .B.as(_configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_12__/* .Extensions */ .IP.Configuration);
configurationRegistry.registerConfiguration({
    id: 'workbench',
    order: 7,
    title: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('workbenchConfigurationTitle', "Workbench"),
    type: 'object',
    properties: {
        [multiSelectModifierSettingKey]: {
            type: 'string',
            enum: ['ctrlCmd', 'alt'],
            markdownEnumDescriptions: [
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('multiSelectModifier.ctrlCmd', "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('multiSelectModifier.alt', "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
            ],
            default: 'ctrlCmd',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)({
                key: 'multiSelectModifier',
                comment: [
                    '- `ctrlCmd` refers to a value the setting can take and should not be localized.',
                    '- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized.'
                ]
            }, "The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.")
        },
        [openModeSettingKey]: {
            type: 'string',
            enum: ['singleClick', 'doubleClick'],
            default: 'singleClick',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)({
                key: 'openModeModifier',
                comment: ['`singleClick` and `doubleClick` refers to a value the setting can take and should not be localized.']
            }, "Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.")
        },
        [horizontalScrollingKey]: {
            type: 'boolean',
            default: false,
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('horizontalScrolling setting', "Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.")
        },
        [scrollByPageKey]: {
            type: 'boolean',
            default: false,
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('list.scrollByPage', "Controls whether clicks in the scrollbar scroll page by page.")
        },
        [treeIndentKey]: {
            type: 'number',
            default: 8,
            minimum: 4,
            maximum: 40,
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('tree indent setting', "Controls tree indentation in pixels.")
        },
        [treeRenderIndentGuidesKey]: {
            type: 'string',
            enum: ['none', 'onHover', 'always'],
            default: 'onHover',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('render tree indent guides', "Controls whether the tree should render indent guides.")
        },
        [listSmoothScrolling]: {
            type: 'boolean',
            default: false,
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('list smoothScrolling setting', "Controls whether lists and trees have smooth scrolling."),
        },
        [mouseWheelScrollSensitivityKey]: {
            type: 'number',
            default: 1,
            markdownDescription: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('Mouse Wheel Scroll Sensitivity', "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.")
        },
        [fastScrollSensitivityKey]: {
            type: 'number',
            default: 5,
            markdownDescription: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('Fast Scroll Sensitivity', "Scrolling speed multiplier when pressing `Alt`.")
        },
        [defaultFindModeSettingKey]: {
            type: 'string',
            enum: ['highlight', 'filter'],
            enumDescriptions: [
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindModeSettingKey.highlight', "Highlight elements when searching. Further up and down navigation will traverse only the highlighted elements."),
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindModeSettingKey.filter', "Filter elements when searching.")
            ],
            default: 'highlight',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindModeSettingKey', "Controls the default find mode for lists and trees in the workbench.")
        },
        [keyboardNavigationSettingKey]: {
            type: 'string',
            enum: ['simple', 'highlight', 'filter'],
            enumDescriptions: [
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('keyboardNavigationSettingKey.simple', "Simple keyboard navigation focuses elements which match the keyboard input. Matching is done only on prefixes."),
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('keyboardNavigationSettingKey.highlight', "Highlight keyboard navigation highlights elements which match the keyboard input. Further up and down navigation will traverse only the highlighted elements."),
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('keyboardNavigationSettingKey.filter', "Filter keyboard navigation will filter out and hide all the elements which do not match the keyboard input.")
            ],
            default: 'highlight',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('keyboardNavigationSettingKey', "Controls the keyboard navigation style for lists and trees in the workbench. Can be simple, highlight and filter."),
            deprecated: true,
            deprecationMessage: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('keyboardNavigationSettingKeyDeprecated', "Please use 'workbench.list.defaultFindMode' and	'workbench.list.typeNavigationMode' instead.")
        },
        [defaultFindMatchTypeSettingKey]: {
            type: 'string',
            enum: ['fuzzy', 'contiguous'],
            enumDescriptions: [
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindMatchTypeSettingKey.fuzzy', "Use fuzzy matching when searching."),
                (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindMatchTypeSettingKey.contiguous', "Use contiguous matching when searching.")
            ],
            default: 'fuzzy',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('defaultFindMatchTypeSettingKey', "Controls the type of matching used when searching lists and trees in the workbench.")
        },
        [treeExpandMode]: {
            type: 'string',
            enum: ['singleClick', 'doubleClick'],
            default: 'singleClick',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('expand mode', "Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable."),
        },
        [typeNavigationModeSettingKey]: {
            type: 'string',
            enum: ['automatic', 'trigger'],
            default: 'automatic',
            description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_10__/* .localize */ .NC)('typeNavigationMode', "Controls the how type navigation works in lists and trees in the workbench. When set to 'trigger', type navigation begins once the 'list.triggerTypeNavigation' command is run."),
        }
    }
});


/***/ }),

/***/ 56950:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VZ: function() { return /* binding */ ILogService; },
/* harmony export */   "in": function() { return /* binding */ LogLevel; },
/* harmony export */   kw: function() { return /* binding */ ConsoleLogger; },
/* harmony export */   qA: function() { return /* binding */ MultiplexLogger; }
/* harmony export */ });
/* unused harmony exports DEFAULT_LOG_LEVEL, AbstractLogger, LogLevelToString, CONTEXT_LOG_LEVEL */
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64720);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26794);
/* harmony import */ var _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78658);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73830);




const ILogService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__/* .createDecorator */ .yh)('logService');
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Trace"] = 1] = "Trace";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 5] = "Error";
})(LogLevel || (LogLevel = {}));
const DEFAULT_LOG_LEVEL = LogLevel.Info;
class AbstractLogger extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor() {
        super(...arguments);
        this.level = DEFAULT_LOG_LEVEL;
        this._onDidChangeLogLevel = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onDidChangeLogLevel = this._onDidChangeLogLevel.event;
    }
    setLevel(level) {
        if (this.level !== level) {
            this.level = level;
            this._onDidChangeLogLevel.fire(this.level);
        }
    }
    getLevel() {
        return this.level;
    }
    checkLogLevel(level) {
        return this.level !== LogLevel.Off && this.level <= level;
    }
}
class ConsoleLogger extends AbstractLogger {
    constructor(logLevel = DEFAULT_LOG_LEVEL, useColors = true) {
        super();
        this.useColors = useColors;
        this.setLevel(logLevel);
    }
    trace(message, ...args) {
        if (this.checkLogLevel(LogLevel.Trace)) {
            if (this.useColors) {
                console.log('%cTRACE', 'color: #888', message, ...args);
            }
            else {
                console.log(message, ...args);
            }
        }
    }
    debug(message, ...args) {
        if (this.checkLogLevel(LogLevel.Debug)) {
            if (this.useColors) {
                console.log('%cDEBUG', 'background: #eee; color: #888', message, ...args);
            }
            else {
                console.log(message, ...args);
            }
        }
    }
    info(message, ...args) {
        if (this.checkLogLevel(LogLevel.Info)) {
            if (this.useColors) {
                console.log('%c INFO', 'color: #33f', message, ...args);
            }
            else {
                console.log(message, ...args);
            }
        }
    }
    warn(message, ...args) {
        if (this.checkLogLevel(LogLevel.Warning)) {
            if (this.useColors) {
                console.log('%c WARN', 'color: #993', message, ...args);
            }
            else {
                console.log(message, ...args);
            }
        }
    }
    error(message, ...args) {
        if (this.checkLogLevel(LogLevel.Error)) {
            if (this.useColors) {
                console.log('%c  ERR', 'color: #f33', message, ...args);
            }
            else {
                console.error(message, ...args);
            }
        }
    }
    dispose() {
        // noop
    }
}
class MultiplexLogger extends AbstractLogger {
    constructor(loggers) {
        super();
        this.loggers = loggers;
        if (loggers.length) {
            this.setLevel(loggers[0].getLevel());
        }
    }
    setLevel(level) {
        for (const logger of this.loggers) {
            logger.setLevel(level);
        }
        super.setLevel(level);
    }
    trace(message, ...args) {
        for (const logger of this.loggers) {
            logger.trace(message, ...args);
        }
    }
    debug(message, ...args) {
        for (const logger of this.loggers) {
            logger.debug(message, ...args);
        }
    }
    info(message, ...args) {
        for (const logger of this.loggers) {
            logger.info(message, ...args);
        }
    }
    warn(message, ...args) {
        for (const logger of this.loggers) {
            logger.warn(message, ...args);
        }
    }
    error(message, ...args) {
        for (const logger of this.loggers) {
            logger.error(message, ...args);
        }
    }
    dispose() {
        for (const logger of this.loggers) {
            logger.dispose();
        }
    }
}
function LogLevelToString(logLevel) {
    switch (logLevel) {
        case LogLevel.Trace: return 'trace';
        case LogLevel.Debug: return 'debug';
        case LogLevel.Info: return 'info';
        case LogLevel.Warning: return 'warn';
        case LogLevel.Error: return 'error';
        case LogLevel.Off: return 'off';
    }
}
// Contexts
const CONTEXT_LOG_LEVEL = new _contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('logLevel', LogLevelToString(LogLevel.Info));


/***/ }),

/***/ 71108:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ LogService; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56950);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class LogService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(primaryLogger, otherLoggers = []) {
        super();
        this.logger = new _log_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiplexLogger */ .qA([primaryLogger, ...otherLoggers]);
        this._register(primaryLogger.onDidChangeLogLevel(level => this.setLevel(level)));
    }
    get onDidChangeLogLevel() {
        return this.logger.onDidChangeLogLevel;
    }
    setLevel(level) {
        this.logger.setLevel(level);
    }
    getLevel() {
        return this.logger.getLevel();
    }
    trace(message, ...args) {
        this.logger.trace(message, ...args);
    }
    debug(message, ...args) {
        this.logger.debug(message, ...args);
    }
    info(message, ...args) {
        this.logger.info(message, ...args);
    }
    warn(message, ...args) {
        this.logger.warn(message, ...args);
    }
    error(message, ...args) {
        this.logger.error(message, ...args);
    }
}


/***/ })

}]);