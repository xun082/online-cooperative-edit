"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3e7dddf7"],{

/***/ 81358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Uy: function() { return /* binding */ IStorageService; },
/* harmony export */   fk: function() { return /* binding */ WillSaveStateReason; },
/* harmony export */   vm: function() { return /* binding */ InMemoryStorageService; }
/* harmony export */ });
/* unused harmony exports TARGET_KEY, loadKeyTargets, AbstractStorageService */
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28935);
/* harmony import */ var _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78358);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38048);





const TARGET_KEY = '__$__targetStorageMarker';
const IStorageService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_3__/* .createDecorator */ .yh)('storageService');
var WillSaveStateReason;
(function (WillSaveStateReason) {
    /**
     * No specific reason to save state.
     */
    WillSaveStateReason[WillSaveStateReason["NONE"] = 0] = "NONE";
    /**
     * A hint that the workbench is about to shutdown.
     */
    WillSaveStateReason[WillSaveStateReason["SHUTDOWN"] = 1] = "SHUTDOWN";
})(WillSaveStateReason || (WillSaveStateReason = {}));
function loadKeyTargets(storage) {
    const keysRaw = storage.get(TARGET_KEY);
    if (keysRaw) {
        try {
            return JSON.parse(keysRaw);
        }
        catch (error) {
            // Fail gracefully
        }
    }
    return Object.create(null);
}
class AbstractStorageService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(options = { flushInterval: AbstractStorageService.DEFAULT_FLUSH_INTERVAL }) {
        super();
        this.options = options;
        this._onDidChangeValue = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .PauseableEmitter */ .K3());
        this.onDidChangeValue = this._onDidChangeValue.event;
        this._onDidChangeTarget = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .PauseableEmitter */ .K3());
        this._onWillSaveState = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onWillSaveState = this._onWillSaveState.event;
        this._workspaceKeyTargets = undefined;
        this._profileKeyTargets = undefined;
        this._applicationKeyTargets = undefined;
    }
    emitDidChangeValue(scope, key) {
        // Specially handle `TARGET_KEY`
        if (key === TARGET_KEY) {
            // Clear our cached version which is now out of date
            switch (scope) {
                case -1 /* StorageScope.APPLICATION */:
                    this._applicationKeyTargets = undefined;
                    break;
                case 0 /* StorageScope.PROFILE */:
                    this._profileKeyTargets = undefined;
                    break;
                case 1 /* StorageScope.WORKSPACE */:
                    this._workspaceKeyTargets = undefined;
                    break;
            }
            // Emit as `didChangeTarget` event
            this._onDidChangeTarget.fire({ scope });
        }
        // Emit any other key to outside
        else {
            this._onDidChangeValue.fire({ scope, key, target: this.getKeyTargets(scope)[key] });
        }
    }
    get(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.get(key, fallbackValue);
    }
    getBoolean(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.getBoolean(key, fallbackValue);
    }
    getNumber(key, scope, fallbackValue) {
        var _a;
        return (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.getNumber(key, fallbackValue);
    }
    store(key, value, scope, target) {
        // We remove the key for undefined/null values
        if ((0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
            this.remove(key, scope);
            return;
        }
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            var _a;
            // Update key-target map
            this.updateKeyTarget(key, scope, target);
            // Store actual value
            (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.set(key, value);
        });
    }
    remove(key, scope) {
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            var _a;
            // Update key-target map
            this.updateKeyTarget(key, scope, undefined);
            // Remove actual key
            (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.delete(key);
        });
    }
    withPausedEmitters(fn) {
        // Pause emitters
        this._onDidChangeValue.pause();
        this._onDidChangeTarget.pause();
        try {
            fn();
        }
        finally {
            // Resume emitters
            this._onDidChangeValue.resume();
            this._onDidChangeTarget.resume();
        }
    }
    updateKeyTarget(key, scope, target) {
        var _a, _b;
        // Add
        const keyTargets = this.getKeyTargets(scope);
        if (typeof target === 'number') {
            if (keyTargets[key] !== target) {
                keyTargets[key] = target;
                (_a = this.getStorage(scope)) === null || _a === void 0 ? void 0 : _a.set(TARGET_KEY, JSON.stringify(keyTargets));
            }
        }
        // Remove
        else {
            if (typeof keyTargets[key] === 'number') {
                delete keyTargets[key];
                (_b = this.getStorage(scope)) === null || _b === void 0 ? void 0 : _b.set(TARGET_KEY, JSON.stringify(keyTargets));
            }
        }
    }
    get workspaceKeyTargets() {
        if (!this._workspaceKeyTargets) {
            this._workspaceKeyTargets = this.loadKeyTargets(1 /* StorageScope.WORKSPACE */);
        }
        return this._workspaceKeyTargets;
    }
    get profileKeyTargets() {
        if (!this._profileKeyTargets) {
            this._profileKeyTargets = this.loadKeyTargets(0 /* StorageScope.PROFILE */);
        }
        return this._profileKeyTargets;
    }
    get applicationKeyTargets() {
        if (!this._applicationKeyTargets) {
            this._applicationKeyTargets = this.loadKeyTargets(-1 /* StorageScope.APPLICATION */);
        }
        return this._applicationKeyTargets;
    }
    getKeyTargets(scope) {
        switch (scope) {
            case -1 /* StorageScope.APPLICATION */:
                return this.applicationKeyTargets;
            case 0 /* StorageScope.PROFILE */:
                return this.profileKeyTargets;
            default:
                return this.workspaceKeyTargets;
        }
    }
    loadKeyTargets(scope) {
        const storage = this.getStorage(scope);
        return storage ? loadKeyTargets(storage) : Object.create(null);
    }
}
AbstractStorageService.DEFAULT_FLUSH_INTERVAL = 60 * 1000; // every minute
class InMemoryStorageService extends AbstractStorageService {
    constructor() {
        super();
        this.applicationStorage = this._register(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .Storage */ .Ke(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .InMemoryStorageDatabase */ .Wm(), { hint: _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .StorageHint */ .KV.STORAGE_IN_MEMORY }));
        this.profileStorage = this._register(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .Storage */ .Ke(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .InMemoryStorageDatabase */ .Wm(), { hint: _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .StorageHint */ .KV.STORAGE_IN_MEMORY }));
        this.workspaceStorage = this._register(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .Storage */ .Ke(new _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .InMemoryStorageDatabase */ .Wm(), { hint: _base_parts_storage_common_storage_js__WEBPACK_IMPORTED_MODULE_2__/* .StorageHint */ .KV.STORAGE_IN_MEMORY }));
        this._register(this.workspaceStorage.onDidChangeStorage(key => this.emitDidChangeValue(1 /* StorageScope.WORKSPACE */, key)));
        this._register(this.profileStorage.onDidChangeStorage(key => this.emitDidChangeValue(0 /* StorageScope.PROFILE */, key)));
        this._register(this.applicationStorage.onDidChangeStorage(key => this.emitDidChangeValue(-1 /* StorageScope.APPLICATION */, key)));
    }
    getStorage(scope) {
        switch (scope) {
            case -1 /* StorageScope.APPLICATION */:
                return this.applicationStorage;
            case 0 /* StorageScope.PROFILE */:
                return this.profileStorage;
            default:
                return this.workspaceStorage;
        }
    }
}


/***/ }),

/***/ 72209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ ITelemetryService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ITelemetryService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('telemetryService');


/***/ }),

/***/ 89408:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BM: function() { return /* binding */ defaultSelectBoxStyles; },
/* harmony export */   Hc: function() { return /* binding */ defaultInputBoxStyles; },
/* harmony export */   O2: function() { return /* binding */ defaultListStyles; },
/* harmony export */   TU: function() { return /* binding */ getListStyles; },
/* harmony export */   ZR: function() { return /* binding */ defaultMenuStyles; },
/* harmony export */   b5: function() { return /* binding */ defaultProgressBarStyles; },
/* harmony export */   eO: function() { return /* binding */ defaultKeybindingLabelStyles; },
/* harmony export */   ku: function() { return /* binding */ defaultCountBadgeStyles; },
/* harmony export */   pl: function() { return /* binding */ defaultToggleStyles; },
/* harmony export */   uX: function() { return /* binding */ defaultFindWidgetStyles; },
/* harmony export */   wG: function() { return /* binding */ defaultButtonStyles; }
/* harmony export */ });
/* unused harmony exports defaultCheckboxStyles, defaultDialogStyles, defaultBreadcrumbsWidgetStyles */
/* harmony import */ var _common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3561);
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2157);


function overrideStyles(override, styles) {
    const result = Object.assign({}, styles);
    for (const key in override) {
        const val = override[key];
        result[key] = val !== undefined ? (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(val) : undefined;
    }
    return result;
}
const defaultKeybindingLabelStyles = {
    keybindingLabelBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .keybindingLabelBackground */ .oQ$),
    keybindingLabelForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .keybindingLabelForeground */ .lWp),
    keybindingLabelBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .keybindingLabelBorder */ .AWI),
    keybindingLabelBottomBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .keybindingLabelBottomBorder */ .K19),
    keybindingLabelShadow: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .widgetShadow */ .rh)
};
const defaultButtonStyles = {
    buttonForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonForeground */ .j5u),
    buttonSeparator: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonSeparator */ .iFQ),
    buttonBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonBackground */ .b7$),
    buttonHoverBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonHoverBackground */ .GO4),
    buttonSecondaryForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonSecondaryForeground */ .qBU),
    buttonSecondaryBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonSecondaryBackground */ .ESD),
    buttonSecondaryHoverBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonSecondaryHoverBackground */ .xEn),
    buttonBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .buttonBorder */ .GYc),
};
const defaultProgressBarStyles = {
    progressBarBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .progressBarBackground */ .zRJ)
};
const defaultToggleStyles = {
    inputActiveOptionBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputActiveOptionBorder */ .PRb),
    inputActiveOptionForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputActiveOptionForeground */ .Pvw),
    inputActiveOptionBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputActiveOptionBackground */ .XEs)
};
const defaultCheckboxStyles = {
    checkboxBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .checkboxBackground */ .SUp),
    checkboxBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .checkboxBorder */ .nd),
    checkboxForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .checkboxForeground */ .BQ0)
};
const defaultDialogStyles = {
    dialogBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorWidgetBackground */ .D0T),
    dialogForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorWidgetForeground */ .Hfx),
    dialogShadow: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .widgetShadow */ .rh),
    dialogBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .contrastBorder */ .lRK),
    errorIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .problemsErrorIconForeground */ .JpG),
    warningIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .problemsWarningIconForeground */ .BOY),
    infoIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .problemsInfoIconForeground */ .OLZ),
    textLinkForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .textLinkForeground */ .url)
};
const defaultInputBoxStyles = {
    inputBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputBackground */ .sEe),
    inputForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputForeground */ .zJb),
    inputBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputBorder */ .dt_),
    inputValidationInfoBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationInfoBorder */ .EPQ),
    inputValidationInfoBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationInfoBackground */ ._lC),
    inputValidationInfoForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationInfoForeground */ .YI3),
    inputValidationWarningBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationWarningBorder */ .C3g),
    inputValidationWarningBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationWarningBackground */ .RV_),
    inputValidationWarningForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationWarningForeground */ .SUG),
    inputValidationErrorBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationErrorBorder */ .OZR),
    inputValidationErrorBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationErrorBackground */ .paE),
    inputValidationErrorForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .inputValidationErrorForeground */ ._t9)
};
const defaultFindWidgetStyles = {
    listFilterWidgetBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFilterWidgetBackground */ .vGG),
    listFilterWidgetOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFilterWidgetOutline */ .oSI),
    listFilterWidgetNoMatchesOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFilterWidgetNoMatchesOutline */ .Saq),
    listFilterWidgetShadow: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFilterWidgetShadow */ .y65),
    inputBoxStyles: defaultInputBoxStyles,
    toggleStyles: defaultToggleStyles
};
const defaultCountBadgeStyles = {
    badgeBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .badgeBackground */ .g8u),
    badgeForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .badgeForeground */ .qeD),
    badgeBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .contrastBorder */ .lRK)
};
const defaultBreadcrumbsWidgetStyles = {
    breadcrumbsBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumbsBackground */ .ixd),
    breadcrumbsForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumbsForeground */ .l80),
    breadcrumbsHoverForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumbsFocusForeground */ .H6q),
    breadcrumbsFocusForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumbsFocusForeground */ .H6q),
    breadcrumbsFocusAndSelectionForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumbsActiveSelectionForeground */ .fSI)
};
const defaultListStyles = {
    listBackground: undefined,
    listInactiveFocusForeground: undefined,
    listFocusBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFocusBackground */ ._bK),
    listFocusForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFocusForeground */ ._2n),
    listFocusOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFocusOutline */ .Oop),
    listActiveSelectionBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listActiveSelectionBackground */ .dCr),
    listActiveSelectionForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listActiveSelectionForeground */ .M6C),
    listActiveSelectionIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listActiveSelectionIconForeground */ .Tnx),
    listFocusAndSelectionOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listFocusAndSelectionOutline */ .Bqu),
    listFocusAndSelectionBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listActiveSelectionBackground */ .dCr),
    listFocusAndSelectionForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listActiveSelectionForeground */ .M6C),
    listInactiveSelectionBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listInactiveSelectionBackground */ .rg2),
    listInactiveSelectionIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listInactiveSelectionIconForeground */ .kvU),
    listInactiveSelectionForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listInactiveSelectionForeground */ .ytC),
    listInactiveFocusBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listInactiveFocusBackground */ .s$),
    listInactiveFocusOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listInactiveFocusOutline */ .F3d),
    listHoverBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listHoverBackground */ .mV1),
    listHoverForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listHoverForeground */ .$d5),
    listDropBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listDropBackground */ .AS1),
    listSelectionOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .activeContrastBorder */ .xL1),
    listHoverOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .activeContrastBorder */ .xL1),
    treeIndentGuidesStroke: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .treeIndentGuidesStroke */ .UnT),
    treeInactiveIndentGuidesStroke: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .treeInactiveIndentGuidesStroke */ .KjV),
    tableColumnsBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .tableColumnsBorder */ .uxu),
    tableOddRowsBackgroundColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .tableOddRowsBackgroundColor */ .EQn),
};
function getListStyles(override) {
    return overrideStyles(override, defaultListStyles);
}
const defaultSelectBoxStyles = {
    selectBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .selectBackground */ .XV0),
    selectListBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .selectListBackground */ .Fgs),
    selectForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .selectForeground */ ._g0),
    decoratorRightForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .pickerGroupForeground */ .kJk),
    selectBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .selectBorder */ .a9O),
    focusBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .focusBorder */ .R80),
    listFocusBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .quickInputListFocusBackground */ .Vqd),
    listInactiveSelectionIconForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .quickInputListFocusIconForeground */ .cbQ),
    listFocusForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .quickInputListFocusForeground */ .NPS),
    listFocusOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariableWithDefault */ .BtC)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .activeContrastBorder */ .xL1, _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent.toString()),
    listHoverBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listHoverBackground */ .mV1),
    listHoverForeground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .listHoverForeground */ .$d5),
    listHoverOutline: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .activeContrastBorder */ .xL1),
    selectListBorder: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorWidgetBorder */ .D1_),
    listBackground: undefined,
    listActiveSelectionBackground: undefined,
    listActiveSelectionForeground: undefined,
    listActiveSelectionIconForeground: undefined,
    listFocusAndSelectionBackground: undefined,
    listDropBackground: undefined,
    listInactiveSelectionBackground: undefined,
    listInactiveSelectionForeground: undefined,
    listInactiveFocusBackground: undefined,
    listInactiveFocusOutline: undefined,
    listSelectionOutline: undefined,
    listFocusAndSelectionForeground: undefined,
    listFocusAndSelectionOutline: undefined,
    listInactiveFocusForeground: undefined,
    tableColumnsBorder: undefined,
    tableOddRowsBackgroundColor: undefined,
    treeIndentGuidesStroke: undefined,
    treeInactiveIndentGuidesStroke: undefined,
};
const defaultMenuStyles = {
    shadowColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .widgetShadow */ .rh),
    borderColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuBorder */ .Cdg),
    foregroundColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuForeground */ .DEr),
    backgroundColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuBackground */ .Hz8),
    selectionForegroundColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuSelectionForeground */ .jbW),
    selectionBackgroundColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuSelectionBackground */ .$DX),
    selectionBorderColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuSelectionBorder */ .E3h),
    separatorColor: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .menuSeparatorBackground */ .ZGJ),
    scrollbarShadow: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .scrollbarShadow */ ._wn),
    scrollbarSliderBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .scrollbarSliderBackground */ .etL),
    scrollbarSliderHoverBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .scrollbarSliderHoverBackground */ .ABB),
    scrollbarSliderActiveBackground: (0,_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .asCssVariable */ .n_1)(_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .scrollbarSliderActiveBackground */ .ynu)
};


/***/ }),

/***/ 11268:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: function() { return /* binding */ getIconsStyleSheet; },
/* harmony export */   p: function() { return /* binding */ UnthemedProductIconTheme; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51446);
/* harmony import */ var _common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95153);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function getIconsStyleSheet(themeService) {
    const onDidChangeEmmiter = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
    const iconRegistry = (0,_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .getIconRegistry */ .Ks)();
    iconRegistry.onDidChange(() => onDidChangeEmmiter.fire());
    themeService === null || themeService === void 0 ? void 0 : themeService.onDidProductIconThemeChange(() => onDidChangeEmmiter.fire());
    return {
        onDidChange: onDidChangeEmmiter.event,
        getCSS() {
            const productIconTheme = themeService ? themeService.getProductIconTheme() : new UnthemedProductIconTheme();
            const usedFontIds = {};
            const formatIconRule = (contribution) => {
                const definition = productIconTheme.getIcon(contribution);
                if (!definition) {
                    return undefined;
                }
                const fontContribution = definition.font;
                if (fontContribution) {
                    usedFontIds[fontContribution.id] = fontContribution.definition;
                    return `.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; font-family: ${(0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .asCSSPropertyValue */ ._h)(fontContribution.id)}; }`;
                }
                // default font (codicon)
                return `.codicon-${contribution.id}:before { content: '${definition.fontCharacter}'; }`;
            };
            const rules = [];
            for (const contribution of iconRegistry.getIcons()) {
                const rule = formatIconRule(contribution);
                if (rule) {
                    rules.push(rule);
                }
            }
            for (const id in usedFontIds) {
                const definition = usedFontIds[id];
                const fontWeight = definition.weight ? `font-weight: ${definition.weight};` : '';
                const fontStyle = definition.style ? `font-style: ${definition.style};` : '';
                const src = definition.src.map(l => `${(0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .asCSSUrl */ .wY)(l.location)} format('${l.format}')`).join(', ');
                rules.push(`@font-face { src: ${src}; font-family: ${(0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .asCSSPropertyValue */ ._h)(id)};${fontWeight}${fontStyle} font-display: block; }`);
            }
            return rules.join('\n');
        }
    };
}
class UnthemedProductIconTheme {
    getIcon(contribution) {
        const iconRegistry = (0,_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .getIconRegistry */ .Ks)();
        let definition = contribution.defaults;
        while (_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.isThemeIcon(definition)) {
            const c = iconRegistry.getIcon(definition.id);
            if (!c) {
                return undefined;
            }
            definition = c.defaults;
        }
        return definition;
    }
}


/***/ }),

/***/ 3561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $DX: function() { return /* binding */ menuSelectionBackground; },
/* harmony export */   $d5: function() { return /* binding */ listHoverForeground; },
/* harmony export */   A42: function() { return /* binding */ widgetBorder; },
/* harmony export */   ABB: function() { return /* binding */ scrollbarSliderHoverBackground; },
/* harmony export */   AS1: function() { return /* binding */ listDropBackground; },
/* harmony export */   AWI: function() { return /* binding */ keybindingLabelBorder; },
/* harmony export */   BOY: function() { return /* binding */ problemsWarningIconForeground; },
/* harmony export */   BQ0: function() { return /* binding */ checkboxForeground; },
/* harmony export */   Bqu: function() { return /* binding */ listFocusAndSelectionOutline; },
/* harmony export */   BtC: function() { return /* binding */ asCssVariableWithDefault; },
/* harmony export */   C3g: function() { return /* binding */ inputValidationWarningBorder; },
/* harmony export */   CNo: function() { return /* binding */ editorHoverBorder; },
/* harmony export */   Cdg: function() { return /* binding */ menuBorder; },
/* harmony export */   CzK: function() { return /* binding */ defaultInsertColor; },
/* harmony export */   D0T: function() { return /* binding */ editorWidgetBackground; },
/* harmony export */   D1_: function() { return /* binding */ editorWidgetBorder; },
/* harmony export */   DEr: function() { return /* binding */ menuForeground; },
/* harmony export */   Dut: function() { return /* binding */ editorHintForeground; },
/* harmony export */   E3h: function() { return /* binding */ menuSelectionBorder; },
/* harmony export */   EPQ: function() { return /* binding */ inputValidationInfoBorder; },
/* harmony export */   EQn: function() { return /* binding */ tableOddRowsBackgroundColor; },
/* harmony export */   ES4: function() { return /* binding */ editorInactiveSelection; },
/* harmony export */   ESD: function() { return /* binding */ buttonSecondaryBackground; },
/* harmony export */   EiJ: function() { return /* binding */ editorFindMatchHighlightBorder; },
/* harmony export */   F3d: function() { return /* binding */ listInactiveFocusOutline; },
/* harmony export */   F9q: function() { return /* binding */ diffOverviewRulerRemoved; },
/* harmony export */   Fgs: function() { return /* binding */ selectListBackground; },
/* harmony export */   Fm_: function() { return /* binding */ overviewRulerFindMatchForeground; },
/* harmony export */   GO4: function() { return /* binding */ buttonHoverBackground; },
/* harmony export */   GYc: function() { return /* binding */ buttonBorder; },
/* harmony export */   Gj_: function() { return /* binding */ minimapError; },
/* harmony export */   Gwp: function() { return /* binding */ listHighlightForeground; },
/* harmony export */   H6q: function() { return /* binding */ breadcrumbsFocusForeground; },
/* harmony export */   HCL: function() { return /* binding */ editorInlayHintParameterForeground; },
/* harmony export */   Hfx: function() { return /* binding */ editorWidgetForeground; },
/* harmony export */   Hz8: function() { return /* binding */ menuBackground; },
/* harmony export */   IPX: function() { return /* binding */ Extensions; },
/* harmony export */   IYc: function() { return /* binding */ minimapSelectionOccurrenceHighlight; },
/* harmony export */   Ido: function() { return /* binding */ errorForeground; },
/* harmony export */   Itd: function() { return /* binding */ minimapForegroundOpacity; },
/* harmony export */   Ivo: function() { return /* binding */ minimapWarning; },
/* harmony export */   JpG: function() { return /* binding */ problemsErrorIconForeground; },
/* harmony export */   K19: function() { return /* binding */ keybindingLabelBottomBorder; },
/* harmony export */   KjV: function() { return /* binding */ treeInactiveIndentGuidesStroke; },
/* harmony export */   L_t: function() { return /* binding */ diffDiagonalFill; },
/* harmony export */   M6C: function() { return /* binding */ listActiveSelectionForeground; },
/* harmony export */   MUv: function() { return /* binding */ editorFindMatchHighlight; },
/* harmony export */   NOs: function() { return /* binding */ editorForeground; },
/* harmony export */   NPS: function() { return /* binding */ quickInputListFocusForeground; },
/* harmony export */   Ng6: function() { return /* binding */ editorWidgetResizeBorder; },
/* harmony export */   OLZ: function() { return /* binding */ problemsInfoIconForeground; },
/* harmony export */   OZR: function() { return /* binding */ inputValidationErrorBorder; },
/* harmony export */   Oop: function() { return /* binding */ listFocusOutline; },
/* harmony export */   P4M: function() { return /* binding */ diffRemoved; },
/* harmony export */   P6G: function() { return /* binding */ registerColor; },
/* harmony export */   P6Y: function() { return /* binding */ diffOverviewRulerInserted; },
/* harmony export */   PRb: function() { return /* binding */ inputActiveOptionBorder; },
/* harmony export */   PX0: function() { return /* binding */ listFocusHighlightForeground; },
/* harmony export */   PpC: function() { return /* binding */ editorInlayHintBackground; },
/* harmony export */   Pvw: function() { return /* binding */ inputActiveOptionForeground; },
/* harmony export */   QO2: function() { return /* binding */ asCssVariableName; },
/* harmony export */   R80: function() { return /* binding */ focusBorder; },
/* harmony export */   RV_: function() { return /* binding */ inputValidationWarningBackground; },
/* harmony export */   Rzx: function() { return /* binding */ editorSelectionHighlight; },
/* harmony export */   SPM: function() { return /* binding */ overviewRulerSelectionHighlightForeground; },
/* harmony export */   SUG: function() { return /* binding */ inputValidationWarningForeground; },
/* harmony export */   SUY: function() { return /* binding */ minimapFindMatch; },
/* harmony export */   SUp: function() { return /* binding */ checkboxBackground; },
/* harmony export */   Saq: function() { return /* binding */ listFilterWidgetNoMatchesOutline; },
/* harmony export */   T83: function() { return /* binding */ editorInfoBorder; },
/* harmony export */   Tnx: function() { return /* binding */ listActiveSelectionIconForeground; },
/* harmony export */   UnT: function() { return /* binding */ treeIndentGuidesStroke; },
/* harmony export */   VVv: function() { return /* binding */ editorInlayHintForeground; },
/* harmony export */   Vqd: function() { return /* binding */ quickInputListFocusBackground; },
/* harmony export */   XEs: function() { return /* binding */ inputActiveOptionBackground; },
/* harmony export */   XV0: function() { return /* binding */ selectBackground; },
/* harmony export */   XZx: function() { return /* binding */ iconForeground; },
/* harmony export */   YI3: function() { return /* binding */ inputValidationInfoForeground; },
/* harmony export */   ZGJ: function() { return /* binding */ menuSeparatorBackground; },
/* harmony export */   ZnX: function() { return /* binding */ transparent; },
/* harmony export */   _2n: function() { return /* binding */ listFocusForeground; },
/* harmony export */   _Yy: function() { return /* binding */ editorActiveLinkForeground; },
/* harmony export */   _bK: function() { return /* binding */ listFocusBackground; },
/* harmony export */   _g0: function() { return /* binding */ selectForeground; },
/* harmony export */   _lC: function() { return /* binding */ inputValidationInfoBackground; },
/* harmony export */   _t9: function() { return /* binding */ inputValidationErrorForeground; },
/* harmony export */   _wn: function() { return /* binding */ scrollbarShadow; },
/* harmony export */   a9O: function() { return /* binding */ selectBorder; },
/* harmony export */   b6y: function() { return /* binding */ editorErrorBorder; },
/* harmony export */   b7$: function() { return /* binding */ buttonBackground; },
/* harmony export */   bKB: function() { return /* binding */ editorInlayHintTypeBackground; },
/* harmony export */   c63: function() { return /* binding */ editorInfoForeground; },
/* harmony export */   cbQ: function() { return /* binding */ quickInputListFocusIconForeground; },
/* harmony export */   cvW: function() { return /* binding */ editorBackground; },
/* harmony export */   dCr: function() { return /* binding */ listActiveSelectionBackground; },
/* harmony export */   dRz: function() { return /* binding */ foreground; },
/* harmony export */   dt_: function() { return /* binding */ inputBorder; },
/* harmony export */   etL: function() { return /* binding */ scrollbarSliderBackground; },
/* harmony export */   fSI: function() { return /* binding */ breadcrumbsActiveSelectionForeground; },
/* harmony export */   g8u: function() { return /* binding */ badgeBackground; },
/* harmony export */   gkn: function() { return /* binding */ editorFindRangeHighlightBorder; },
/* harmony export */   hEj: function() { return /* binding */ editorSelectionBackground; },
/* harmony export */   hX8: function() { return /* binding */ editorInlayHintTypeForeground; },
/* harmony export */   iFQ: function() { return /* binding */ buttonSeparator; },
/* harmony export */   ixd: function() { return /* binding */ breadcrumbsBackground; },
/* harmony export */   j5u: function() { return /* binding */ buttonForeground; },
/* harmony export */   jUe: function() { return /* binding */ editorFindRangeHighlight; },
/* harmony export */   jbW: function() { return /* binding */ menuSelectionForeground; },
/* harmony export */   kJk: function() { return /* binding */ pickerGroupForeground; },
/* harmony export */   kVY: function() { return /* binding */ minimapBackground; },
/* harmony export */   keg: function() { return /* binding */ defaultRemoveColor; },
/* harmony export */   kvU: function() { return /* binding */ listInactiveSelectionIconForeground; },
/* harmony export */   kwl: function() { return /* binding */ oneOf; },
/* harmony export */   l80: function() { return /* binding */ breadcrumbsForeground; },
/* harmony export */   lRK: function() { return /* binding */ contrastBorder; },
/* harmony export */   lUq: function() { return /* binding */ toolbarHoverBackground; },
/* harmony export */   lWp: function() { return /* binding */ keybindingLabelForeground; },
/* harmony export */   lXJ: function() { return /* binding */ editorErrorForeground; },
/* harmony export */   loF: function() { return /* binding */ quickInputTitleBackground; },
/* harmony export */   mV1: function() { return /* binding */ listHoverBackground; },
/* harmony export */   n_1: function() { return /* binding */ asCssVariable; },
/* harmony export */   nd: function() { return /* binding */ checkboxBorder; },
/* harmony export */   nyM: function() { return /* binding */ editorFindMatch; },
/* harmony export */   oQ$: function() { return /* binding */ keybindingLabelBackground; },
/* harmony export */   oSI: function() { return /* binding */ listFilterWidgetOutline; },
/* harmony export */   opG: function() { return /* binding */ pickerGroupBorder; },
/* harmony export */   ov3: function() { return /* binding */ minimapSelection; },
/* harmony export */   pW3: function() { return /* binding */ editorWarningBorder; },
/* harmony export */   paE: function() { return /* binding */ inputValidationErrorBackground; },
/* harmony export */   phM: function() { return /* binding */ editorInlayHintParameterBackground; },
/* harmony export */   pnM: function() { return /* binding */ editorFindMatchBorder; },
/* harmony export */   qBU: function() { return /* binding */ buttonSecondaryForeground; },
/* harmony export */   qeD: function() { return /* binding */ badgeForeground; },
/* harmony export */   rg2: function() { return /* binding */ listInactiveSelectionBackground; },
/* harmony export */   rh: function() { return /* binding */ widgetShadow; },
/* harmony export */   s$: function() { return /* binding */ listInactiveFocusBackground; },
/* harmony export */   sEe: function() { return /* binding */ inputBackground; },
/* harmony export */   tZ6: function() { return /* binding */ quickInputForeground; },
/* harmony export */   uoC: function() { return /* binding */ editorWarningForeground; },
/* harmony export */   url: function() { return /* binding */ textLinkForeground; },
/* harmony export */   uxu: function() { return /* binding */ tableColumnsBorder; },
/* harmony export */   vGG: function() { return /* binding */ listFilterWidgetBackground; },
/* harmony export */   xEn: function() { return /* binding */ buttonSecondaryHoverBackground; },
/* harmony export */   xL1: function() { return /* binding */ activeContrastBorder; },
/* harmony export */   y65: function() { return /* binding */ listFilterWidgetShadow; },
/* harmony export */   yJx: function() { return /* binding */ editorHoverBackground; },
/* harmony export */   yb5: function() { return /* binding */ editorSelectionForeground; },
/* harmony export */   ynu: function() { return /* binding */ scrollbarSliderActiveBackground; },
/* harmony export */   ypS: function() { return /* binding */ diffInserted; },
/* harmony export */   ytC: function() { return /* binding */ listInactiveSelectionForeground; },
/* harmony export */   zJb: function() { return /* binding */ inputForeground; },
/* harmony export */   zKr: function() { return /* binding */ quickInputBackground; },
/* harmony export */   zRJ: function() { return /* binding */ progressBarBackground; }
/* harmony export */ });
/* unused harmony exports disabledForeground, descriptionForeground, selectionBackground, textSeparatorForeground, textLinkActiveForeground, textPreformatForeground, textBlockQuoteBackground, textBlockQuoteBorder, textCodeBlockBackground, inputActiveOptionHoverBackground, inputPlaceholderForeground, editorErrorBackground, editorWarningBackground, editorInfoBackground, editorHintBorder, sashHoverBorder, editorStickyScrollBackground, editorStickyScrollHoverBackground, editorSelectionHighlightBorder, searchEditorFindMatch, searchEditorFindMatchBorder, searchResultsInfoForeground, editorHoverHighlight, editorHoverForeground, editorHoverStatusBarBackground, editorLightBulbForeground, editorLightBulbAutoFixForeground, diffInsertedLine, diffRemovedLine, diffInsertedLineGutter, diffRemovedLineGutter, diffInsertedOutline, diffRemovedOutline, diffBorder, diffUnchangedRegionBackground, listInvalidItemForeground, listErrorForeground, listWarningForeground, listFilterMatchHighlight, listFilterMatchHighlightBorder, listDeemphasizedForeground, checkboxSelectBackground, checkboxSelectBorder, _deprecatedQuickInputListFocusBackground, toolbarHoverOutline, toolbarActiveBackground, snippetTabstopHighlightBackground, snippetTabstopHighlightBorder, snippetFinalTabstopHighlightBackground, snippetFinalTabstopHighlightBorder, breadcrumbsPickerBackground, mergeCurrentHeaderBackground, mergeCurrentContentBackground, mergeIncomingHeaderBackground, mergeIncomingContentBackground, mergeCommonHeaderBackground, mergeCommonContentBackground, mergeBorder, overviewRulerCurrentContentForeground, overviewRulerIncomingContentForeground, overviewRulerCommonContentForeground, minimapSliderBackground, minimapSliderHoverBackground, minimapSliderActiveBackground, chartsForeground, chartsLines, chartsRed, chartsBlue, chartsYellow, chartsOrange, chartsGreen, chartsPurple, executeTransform, darken, lighten, ifDefinedThenElse, resolveColorValue, workbenchColorsSchemaId */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2157);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96290);
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29012);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23330);
/* harmony import */ var _jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85654);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







/**
 * Returns the css variable name for the given color identifier. Dots (`.`) are replaced with hyphens (`-`) and
 * everything is prefixed with `--vscode-`.
 *
 * @sample `editorSuggestWidget.background` is `--vscode-editorSuggestWidget-background`.
 */
function asCssVariableName(colorIdent) {
    return `--vscode-${colorIdent.replace(/\./g, '-')}`;
}
function asCssVariable(color) {
    return `var(${asCssVariableName(color)})`;
}
function asCssVariableWithDefault(color, defaultCssValue) {
    return `var(${asCssVariableName(color)}, ${defaultCssValue})`;
}
// color registry
const Extensions = {
    ColorContribution: 'base.contributions.colors'
};
class ColorRegistry {
    constructor() {
        this._onDidChangeSchema = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5();
        this.onDidChangeSchema = this._onDidChangeSchema.event;
        this.colorSchema = { type: 'object', properties: {} };
        this.colorReferenceSchema = { type: 'string', enum: [], enumDescriptions: [] };
        this.colorsById = {};
    }
    registerColor(id, defaults, description, needsTransparency = false, deprecationMessage) {
        const colorContribution = { id, description, defaults, needsTransparency, deprecationMessage };
        this.colorsById[id] = colorContribution;
        const propertySchema = { type: 'string', description, format: 'color-hex', defaultSnippets: [{ body: '${1:#ff0000}' }] };
        if (deprecationMessage) {
            propertySchema.deprecationMessage = deprecationMessage;
        }
        this.colorSchema.properties[id] = propertySchema;
        this.colorReferenceSchema.enum.push(id);
        this.colorReferenceSchema.enumDescriptions.push(description);
        this._onDidChangeSchema.fire();
        return id;
    }
    getColors() {
        return Object.keys(this.colorsById).map(id => this.colorsById[id]);
    }
    resolveDefaultColor(id, theme) {
        const colorDesc = this.colorsById[id];
        if (colorDesc && colorDesc.defaults) {
            const colorValue = colorDesc.defaults[theme.type];
            return resolveColorValue(colorValue, theme);
        }
        return undefined;
    }
    getColorSchema() {
        return this.colorSchema;
    }
    toString() {
        const sorter = (a, b) => {
            const cat1 = a.indexOf('.') === -1 ? 0 : 1;
            const cat2 = b.indexOf('.') === -1 ? 0 : 1;
            if (cat1 !== cat2) {
                return cat1 - cat2;
            }
            return a.localeCompare(b);
        };
        return Object.keys(this.colorsById).sort(sorter).map(k => `- \`${k}\`: ${this.colorsById[k].description}`).join('\n');
    }
}
const colorRegistry = new ColorRegistry();
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_6__/* .Registry */ .B.add(Extensions.ColorContribution, colorRegistry);
function registerColor(id, defaults, description, needsTransparency, deprecationMessage) {
    return colorRegistry.registerColor(id, defaults, description, needsTransparency, deprecationMessage);
}
// ----- base colors
const foreground = registerColor('foreground', { dark: '#CCCCCC', light: '#616161', hcDark: '#FFFFFF', hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('foreground', "Overall foreground color. This color is only used if not overridden by a component."));
const disabledForeground = registerColor('disabledForeground', { dark: '#CCCCCC80', light: '#61616180', hcDark: '#A5A5A5', hcLight: '#7F7F7F' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('disabledForeground', "Overall foreground for disabled elements. This color is only used if not overridden by a component."));
const errorForeground = registerColor('errorForeground', { dark: '#F48771', light: '#A1260D', hcDark: '#F48771', hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('errorForeground', "Overall foreground color for error messages. This color is only used if not overridden by a component."));
const descriptionForeground = registerColor('descriptionForeground', { light: '#717171', dark: transparent(foreground, 0.7), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('descriptionForeground', "Foreground color for description text providing additional information, for example for a label."));
const iconForeground = registerColor('icon.foreground', { dark: '#C5C5C5', light: '#424242', hcDark: '#FFFFFF', hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('iconForeground', "The default color for icons in the workbench."));
const focusBorder = registerColor('focusBorder', { dark: '#007FD4', light: '#0090F1', hcDark: '#F38518', hcLight: '#006BBD' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('focusBorder', "Overall border color for focused elements. This color is only used if not overridden by a component."));
const contrastBorder = registerColor('contrastBorder', { light: null, dark: null, hcDark: '#6FC3DF', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('contrastBorder', "An extra border around elements to separate them from others for greater contrast."));
const activeContrastBorder = registerColor('contrastActiveBorder', { light: null, dark: null, hcDark: focusBorder, hcLight: focusBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('activeContrastBorder', "An extra border around active elements to separate them from others for greater contrast."));
const selectionBackground = registerColor('selection.background', { light: null, dark: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('selectionBackground', "The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor."));
// ------ text colors
const textSeparatorForeground = registerColor('textSeparator.foreground', { light: '#0000002e', dark: '#ffffff2e', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textSeparatorForeground', "Color for text separators."));
const textLinkForeground = registerColor('textLink.foreground', { light: '#006AB1', dark: '#3794FF', hcDark: '#3794FF', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textLinkForeground', "Foreground color for links in text."));
const textLinkActiveForeground = registerColor('textLink.activeForeground', { light: '#006AB1', dark: '#3794FF', hcDark: '#3794FF', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textLinkActiveForeground', "Foreground color for links in text when clicked on and on mouse hover."));
const textPreformatForeground = registerColor('textPreformat.foreground', { light: '#A31515', dark: '#D7BA7D', hcDark: '#D7BA7D', hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textPreformatForeground', "Foreground color for preformatted text segments."));
const textBlockQuoteBackground = registerColor('textBlockQuote.background', { light: '#7f7f7f1a', dark: '#7f7f7f1a', hcDark: null, hcLight: '#F2F2F2' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textBlockQuoteBackground', "Background color for block quotes in text."));
const textBlockQuoteBorder = registerColor('textBlockQuote.border', { light: '#007acc80', dark: '#007acc80', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textBlockQuoteBorder', "Border color for block quotes in text."));
const textCodeBlockBackground = registerColor('textCodeBlock.background', { light: '#dcdcdc66', dark: '#0a0a0a66', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: '#F2F2F2' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('textCodeBlockBackground', "Background color for code blocks in text."));
// ----- widgets
const widgetShadow = registerColor('widget.shadow', { dark: transparent(_base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, .36), light: transparent(_base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, .16), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('widgetShadow', 'Shadow color of widgets such as find/replace inside the editor.'));
const widgetBorder = registerColor('widget.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('widgetBorder', 'Border color of widgets such as find/replace inside the editor.'));
const inputBackground = registerColor('input.background', { dark: '#3C3C3C', light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputBoxBackground', "Input box background."));
const inputForeground = registerColor('input.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputBoxForeground', "Input box foreground."));
const inputBorder = registerColor('input.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputBoxBorder', "Input box border."));
const inputActiveOptionBorder = registerColor('inputOption.activeBorder', { dark: '#007ACC', light: '#007ACC', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputBoxActiveOptionBorder', "Border color of activated options in input fields."));
const inputActiveOptionHoverBackground = registerColor('inputOption.hoverBackground', { dark: '#5a5d5e80', light: '#b8b8b850', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputOption.hoverBackground', "Background color of activated options in input fields."));
const inputActiveOptionBackground = registerColor('inputOption.activeBackground', { dark: transparent(focusBorder, 0.4), light: transparent(focusBorder, 0.2), hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputOption.activeBackground', "Background hover color of options in input fields."));
const inputActiveOptionForeground = registerColor('inputOption.activeForeground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcDark: foreground, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputOption.activeForeground', "Foreground color of activated options in input fields."));
const inputPlaceholderForeground = registerColor('input.placeholderForeground', { light: transparent(foreground, 0.5), dark: transparent(foreground, 0.5), hcDark: transparent(foreground, 0.7), hcLight: transparent(foreground, 0.7) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputPlaceholderForeground', "Input box foreground color for placeholder text."));
const inputValidationInfoBackground = registerColor('inputValidation.infoBackground', { dark: '#063B49', light: '#D6ECF2', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationInfoBackground', "Input validation background color for information severity."));
const inputValidationInfoForeground = registerColor('inputValidation.infoForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationInfoForeground', "Input validation foreground color for information severity."));
const inputValidationInfoBorder = registerColor('inputValidation.infoBorder', { dark: '#007acc', light: '#007acc', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationInfoBorder', "Input validation border color for information severity."));
const inputValidationWarningBackground = registerColor('inputValidation.warningBackground', { dark: '#352A05', light: '#F6F5D2', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationWarningBackground', "Input validation background color for warning severity."));
const inputValidationWarningForeground = registerColor('inputValidation.warningForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationWarningForeground', "Input validation foreground color for warning severity."));
const inputValidationWarningBorder = registerColor('inputValidation.warningBorder', { dark: '#B89500', light: '#B89500', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationWarningBorder', "Input validation border color for warning severity."));
const inputValidationErrorBackground = registerColor('inputValidation.errorBackground', { dark: '#5A1D1D', light: '#F2DEDE', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationErrorBackground', "Input validation background color for error severity."));
const inputValidationErrorForeground = registerColor('inputValidation.errorForeground', { dark: null, light: null, hcDark: null, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationErrorForeground', "Input validation foreground color for error severity."));
const inputValidationErrorBorder = registerColor('inputValidation.errorBorder', { dark: '#BE1100', light: '#BE1100', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('inputValidationErrorBorder', "Input validation border color for error severity."));
const selectBackground = registerColor('dropdown.background', { dark: '#3C3C3C', light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('dropdownBackground', "Dropdown background."));
const selectListBackground = registerColor('dropdown.listBackground', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('dropdownListBackground', "Dropdown list background."));
const selectForeground = registerColor('dropdown.foreground', { dark: '#F0F0F0', light: foreground, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('dropdownForeground', "Dropdown foreground."));
const selectBorder = registerColor('dropdown.border', { dark: selectBackground, light: '#CECECE', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('dropdownBorder', "Dropdown border."));
const buttonForeground = registerColor('button.foreground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonForeground', "Button foreground color."));
const buttonSeparator = registerColor('button.separator', { dark: transparent(buttonForeground, .4), light: transparent(buttonForeground, .4), hcDark: transparent(buttonForeground, .4), hcLight: transparent(buttonForeground, .4) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonSeparator', "Button separator color."));
const buttonBackground = registerColor('button.background', { dark: '#0E639C', light: '#007ACC', hcDark: null, hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonBackground', "Button background color."));
const buttonHoverBackground = registerColor('button.hoverBackground', { dark: lighten(buttonBackground, 0.2), light: darken(buttonBackground, 0.2), hcDark: buttonBackground, hcLight: buttonBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonHoverBackground', "Button background color when hovering."));
const buttonBorder = registerColor('button.border', { dark: contrastBorder, light: contrastBorder, hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonBorder', "Button border color."));
const buttonSecondaryForeground = registerColor('button.secondaryForeground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonSecondaryForeground', "Secondary button foreground color."));
const buttonSecondaryBackground = registerColor('button.secondaryBackground', { dark: '#3A3D41', light: '#5F6A79', hcDark: null, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonSecondaryBackground', "Secondary button background color."));
const buttonSecondaryHoverBackground = registerColor('button.secondaryHoverBackground', { dark: lighten(buttonSecondaryBackground, 0.2), light: darken(buttonSecondaryBackground, 0.2), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('buttonSecondaryHoverBackground', "Secondary button background color when hovering."));
const badgeBackground = registerColor('badge.background', { dark: '#4D4D4D', light: '#C4C4C4', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('badgeBackground', "Badge background color. Badges are small information labels, e.g. for search results count."));
const badgeForeground = registerColor('badge.foreground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, light: '#333', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('badgeForeground', "Badge foreground color. Badges are small information labels, e.g. for search results count."));
const scrollbarShadow = registerColor('scrollbar.shadow', { dark: '#000000', light: '#DDDDDD', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('scrollbarShadow', "Scrollbar shadow to indicate that the view is scrolled."));
const scrollbarSliderBackground = registerColor('scrollbarSlider.background', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#797979').transparent(0.4), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#646464').transparent(0.4), hcDark: transparent(contrastBorder, 0.6), hcLight: transparent(contrastBorder, 0.4) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('scrollbarSliderBackground', "Scrollbar slider background color."));
const scrollbarSliderHoverBackground = registerColor('scrollbarSlider.hoverBackground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#646464').transparent(0.7), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#646464').transparent(0.7), hcDark: transparent(contrastBorder, 0.8), hcLight: transparent(contrastBorder, 0.8) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('scrollbarSliderHoverBackground', "Scrollbar slider background color when hovering."));
const scrollbarSliderActiveBackground = registerColor('scrollbarSlider.activeBackground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#BFBFBF').transparent(0.4), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000000').transparent(0.6), hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('scrollbarSliderActiveBackground', "Scrollbar slider background color when clicked on."));
const progressBarBackground = registerColor('progressBar.background', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0E70C0'), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0E70C0'), hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('progressBarBackground', "Background color of the progress bar that can show for long running operations."));
const editorErrorBackground = registerColor('editorError.background', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorError.background', 'Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorErrorForeground = registerColor('editorError.foreground', { dark: '#F14C4C', light: '#E51400', hcDark: '#F48771', hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorError.foreground', 'Foreground color of error squigglies in the editor.'));
const editorErrorBorder = registerColor('editorError.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#E47777').transparent(0.8), hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('errorBorder', 'If set, color of double underlines for errors in the editor.'));
const editorWarningBackground = registerColor('editorWarning.background', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWarning.background', 'Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorWarningForeground = registerColor('editorWarning.foreground', { dark: '#CCA700', light: '#BF8803', hcDark: '#FFD370', hcLight: '#895503' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWarning.foreground', 'Foreground color of warning squigglies in the editor.'));
const editorWarningBorder = registerColor('editorWarning.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#FFCC00').transparent(0.8), hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#FFCC00').transparent(0.8) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('warningBorder', 'If set, color of double underlines for warnings in the editor.'));
const editorInfoBackground = registerColor('editorInfo.background', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInfo.background', 'Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorInfoForeground = registerColor('editorInfo.foreground', { dark: '#3794FF', light: '#1a85ff', hcDark: '#3794FF', hcLight: '#1a85ff' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInfo.foreground', 'Foreground color of info squigglies in the editor.'));
const editorInfoBorder = registerColor('editorInfo.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#3794FF').transparent(0.8), hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('infoBorder', 'If set, color of double underlines for infos in the editor.'));
const editorHintForeground = registerColor('editorHint.foreground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#eeeeee').transparent(0.7), light: '#6c6c6c', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorHint.foreground', 'Foreground color of hint squigglies in the editor.'));
const editorHintBorder = registerColor('editorHint.border', { dark: null, light: null, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#eeeeee').transparent(0.8), hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('hintBorder', 'If set, color of double underlines for hints in the editor.'));
const sashHoverBorder = registerColor('sash.hoverBorder', { dark: focusBorder, light: focusBorder, hcDark: focusBorder, hcLight: focusBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('sashActiveBorder', "Border color of active sashes."));
/**
 * Editor background color.
 */
const editorBackground = registerColor('editor.background', { light: '#ffffff', dark: '#1E1E1E', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorBackground', "Editor background color."));
/**
 * Editor foreground color.
 */
const editorForeground = registerColor('editor.foreground', { light: '#333333', dark: '#BBBBBB', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorForeground', "Editor default foreground color."));
/**
 * Sticky scroll
 */
const editorStickyScrollBackground = registerColor('editorStickyScroll.background', { light: editorBackground, dark: editorBackground, hcDark: editorBackground, hcLight: editorBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorStickyScrollBackground', "Sticky scroll background color for the editor"));
const editorStickyScrollHoverBackground = registerColor('editorStickyScrollHover.background', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: null, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0F4A85').transparent(0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorStickyScrollHoverBackground', "Sticky scroll on hover background color for the editor"));
/**
 * Editor widgets
 */
const editorWidgetBackground = registerColor('editorWidget.background', { dark: '#252526', light: '#F3F3F3', hcDark: '#0C141F', hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWidgetBackground', 'Background color of editor widgets, such as find/replace.'));
const editorWidgetForeground = registerColor('editorWidget.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWidgetForeground', 'Foreground color of editor widgets, such as find/replace.'));
const editorWidgetBorder = registerColor('editorWidget.border', { dark: '#454545', light: '#C8C8C8', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWidgetBorder', 'Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.'));
const editorWidgetResizeBorder = registerColor('editorWidget.resizeBorder', { light: null, dark: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorWidgetResizeBorder', "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget."));
/**
 * Quick pick widget
 */
const quickInputBackground = registerColor('quickInput.background', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('pickerBackground', "Quick picker background color. The quick picker widget is the container for pickers like the command palette."));
const quickInputForeground = registerColor('quickInput.foreground', { dark: editorWidgetForeground, light: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('pickerForeground', "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette."));
const quickInputTitleBackground = registerColor('quickInputTitle.background', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 255, 255, 0.105)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(0, 0, 0, 0.06)), hcDark: '#000000', hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('pickerTitleBackground', "Quick picker title background color. The quick picker widget is the container for pickers like the command palette."));
const pickerGroupForeground = registerColor('pickerGroup.foreground', { dark: '#3794FF', light: '#0066BF', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('pickerGroupForeground', "Quick picker color for grouping labels."));
const pickerGroupBorder = registerColor('pickerGroup.border', { dark: '#3F3F46', light: '#CCCEDB', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('pickerGroupBorder', "Quick picker color for grouping borders."));
/**
 * Keybinding label
 */
const keybindingLabelBackground = registerColor('keybindingLabel.background', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(128, 128, 128, 0.17)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(221, 221, 221, 0.4)), hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('keybindingLabelBackground', "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelForeground = registerColor('keybindingLabel.foreground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#CCCCCC'), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#555555'), hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('keybindingLabelForeground', "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBorder = registerColor('keybindingLabel.border', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(51, 51, 51, 0.6)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(204, 204, 204, 0.4)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(111, 195, 223)), hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('keybindingLabelBorder', "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut."));
const keybindingLabelBottomBorder = registerColor('keybindingLabel.bottomBorder', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(68, 68, 68, 0.6)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(187, 187, 187, 0.4)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(111, 195, 223)), hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('keybindingLabelBottomBorder', "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut."));
/**
 * Editor selection colors.
 */
const editorSelectionBackground = registerColor('editor.selectionBackground', { light: '#ADD6FF', dark: '#264F78', hcDark: '#f3f518', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorSelectionBackground', "Color of the editor selection."));
const editorSelectionForeground = registerColor('editor.selectionForeground', { light: null, dark: null, hcDark: '#000000', hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorSelectionForeground', "Color of the selected text for high contrast."));
const editorInactiveSelection = registerColor('editor.inactiveSelectionBackground', { light: transparent(editorSelectionBackground, 0.5), dark: transparent(editorSelectionBackground, 0.5), hcDark: transparent(editorSelectionBackground, 0.7), hcLight: transparent(editorSelectionBackground, 0.5) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInactiveSelection', "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), true);
const editorSelectionHighlight = registerColor('editor.selectionHighlightBackground', { light: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), dark: lessProminent(editorSelectionBackground, editorBackground, 0.3, 0.6), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorSelectionHighlight', 'Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorSelectionHighlightBorder = registerColor('editor.selectionHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorSelectionHighlightBorder', "Border color for regions with the same content as the selection."));
/**
 * Editor find match colors.
 */
const editorFindMatch = registerColor('editor.findMatchBackground', { light: '#A8AC94', dark: '#515C6A', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorFindMatch', "Color of the current search match."));
const editorFindMatchHighlight = registerColor('editor.findMatchHighlightBackground', { light: '#EA5C0055', dark: '#EA5C0055', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('findMatchHighlight', "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), true);
const editorFindRangeHighlight = registerColor('editor.findRangeHighlightBackground', { dark: '#3a3d4166', light: '#b4b4b44d', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('findRangeHighlight', "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
const editorFindMatchBorder = registerColor('editor.findMatchBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorFindMatchBorder', "Border color of the current search match."));
const editorFindMatchHighlightBorder = registerColor('editor.findMatchHighlightBorder', { light: null, dark: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('findMatchHighlightBorder', "Border color of the other search matches."));
const editorFindRangeHighlightBorder = registerColor('editor.findRangeHighlightBorder', { dark: null, light: null, hcDark: transparent(activeContrastBorder, 0.4), hcLight: transparent(activeContrastBorder, 0.4) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('findRangeHighlightBorder', "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), true);
/**
 * Search Editor query match colors.
 *
 * Distinct from normal editor find match to allow for better differentiation
 */
const searchEditorFindMatch = registerColor('searchEditor.findMatchBackground', { light: transparent(editorFindMatchHighlight, 0.66), dark: transparent(editorFindMatchHighlight, 0.66), hcDark: editorFindMatchHighlight, hcLight: editorFindMatchHighlight }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('searchEditor.queryMatch', "Color of the Search Editor query matches."));
const searchEditorFindMatchBorder = registerColor('searchEditor.findMatchBorder', { light: transparent(editorFindMatchHighlightBorder, 0.66), dark: transparent(editorFindMatchHighlightBorder, 0.66), hcDark: editorFindMatchHighlightBorder, hcLight: editorFindMatchHighlightBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('searchEditor.editorFindMatchBorder', "Border color of the Search Editor query matches."));
/**
 * Search Viewlet colors.
 */
const searchResultsInfoForeground = registerColor('search.resultsInfoForeground', { light: foreground, dark: transparent(foreground, 0.65), hcDark: foreground, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('search.resultsInfoForeground', "Color of the text in the search viewlet's completion message."));
/**
 * Editor hover
 */
const editorHoverHighlight = registerColor('editor.hoverHighlightBackground', { light: '#ADD6FF26', dark: '#264f7840', hcDark: '#ADD6FF26', hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('hoverHighlight', 'Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.'), true);
const editorHoverBackground = registerColor('editorHoverWidget.background', { light: editorWidgetBackground, dark: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('hoverBackground', 'Background color of the editor hover.'));
const editorHoverForeground = registerColor('editorHoverWidget.foreground', { light: editorWidgetForeground, dark: editorWidgetForeground, hcDark: editorWidgetForeground, hcLight: editorWidgetForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('hoverForeground', 'Foreground color of the editor hover.'));
const editorHoverBorder = registerColor('editorHoverWidget.border', { light: editorWidgetBorder, dark: editorWidgetBorder, hcDark: editorWidgetBorder, hcLight: editorWidgetBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('hoverBorder', 'Border color of the editor hover.'));
const editorHoverStatusBarBackground = registerColor('editorHoverWidget.statusBarBackground', { dark: lighten(editorHoverBackground, 0.2), light: darken(editorHoverBackground, 0.05), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('statusBarBackground', "Background color of the editor hover status bar."));
/**
 * Editor link colors
 */
const editorActiveLinkForeground = registerColor('editorLink.activeForeground', { dark: '#4E94CE', light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.blue, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.cyan, hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('activeLinkForeground', 'Color of active links.'));
/**
 * Inline hints
 */
const editorInlayHintForeground = registerColor('editorInlayHint.foreground', { dark: badgeForeground, light: badgeForeground, hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.black, hcLight: badgeForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintForeground', 'Foreground color of inline hints'));
const editorInlayHintBackground = registerColor('editorInlayHint.background', { dark: transparent(badgeBackground, .8), light: transparent(badgeBackground, .6), hcDark: '#f38518', hcLight: badgeBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintBackground', 'Background color of inline hints'));
const editorInlayHintTypeForeground = registerColor('editorInlayHint.typeForeground', { dark: editorInlayHintForeground, light: editorInlayHintForeground, hcDark: editorInlayHintForeground, hcLight: editorInlayHintForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintForegroundTypes', 'Foreground color of inline hints for types'));
const editorInlayHintTypeBackground = registerColor('editorInlayHint.typeBackground', { dark: editorInlayHintBackground, light: editorInlayHintBackground, hcDark: editorInlayHintBackground, hcLight: editorInlayHintBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintBackgroundTypes', 'Background color of inline hints for types'));
const editorInlayHintParameterForeground = registerColor('editorInlayHint.parameterForeground', { dark: editorInlayHintForeground, light: editorInlayHintForeground, hcDark: editorInlayHintForeground, hcLight: editorInlayHintForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintForegroundParameter', 'Foreground color of inline hints for parameters'));
const editorInlayHintParameterBackground = registerColor('editorInlayHint.parameterBackground', { dark: editorInlayHintBackground, light: editorInlayHintBackground, hcDark: editorInlayHintBackground, hcLight: editorInlayHintBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorInlayHintBackgroundParameter', 'Background color of inline hints for parameters'));
/**
 * Editor lighbulb icon colors
 */
const editorLightBulbForeground = registerColor('editorLightBulb.foreground', { dark: '#FFCC00', light: '#DDB100', hcDark: '#FFCC00', hcLight: '#007ACC' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorLightBulbForeground', "The color used for the lightbulb actions icon."));
const editorLightBulbAutoFixForeground = registerColor('editorLightBulbAutoFix.foreground', { dark: '#75BEFF', light: '#007ACC', hcDark: '#75BEFF', hcLight: '#007ACC' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('editorLightBulbAutoFixForeground', "The color used for the lightbulb auto fix actions icon."));
/**
 * Diff Editor Colors
 */
const defaultInsertColor = new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(155, 185, 85, .2));
const defaultRemoveColor = new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 0, 0, .2));
const diffInserted = registerColor('diffEditor.insertedTextBackground', { dark: '#9ccc2c33', light: '#9ccc2c40', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorInserted', 'Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffRemoved = registerColor('diffEditor.removedTextBackground', { dark: '#ff000033', light: '#ff000033', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorRemoved', 'Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffInsertedLine = registerColor('diffEditor.insertedLineBackground', { dark: defaultInsertColor, light: defaultInsertColor, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorInsertedLines', 'Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffRemovedLine = registerColor('diffEditor.removedLineBackground', { dark: defaultRemoveColor, light: defaultRemoveColor, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorRemovedLines', 'Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.'), true);
const diffInsertedLineGutter = registerColor('diffEditorGutter.insertedLineBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorInsertedLineGutter', 'Background color for the margin where lines got inserted.'));
const diffRemovedLineGutter = registerColor('diffEditorGutter.removedLineBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorRemovedLineGutter', 'Background color for the margin where lines got removed.'));
const diffOverviewRulerInserted = registerColor('diffEditorOverview.insertedForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorOverviewInserted', 'Diff overview ruler foreground for inserted content.'));
const diffOverviewRulerRemoved = registerColor('diffEditorOverview.removedForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorOverviewRemoved', 'Diff overview ruler foreground for removed content.'));
const diffInsertedOutline = registerColor('diffEditor.insertedTextBorder', { dark: null, light: null, hcDark: '#33ff2eff', hcLight: '#374E06' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorInsertedOutline', 'Outline color for the text that got inserted.'));
const diffRemovedOutline = registerColor('diffEditor.removedTextBorder', { dark: null, light: null, hcDark: '#FF008F', hcLight: '#AD0707' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorRemovedOutline', 'Outline color for text that got removed.'));
const diffBorder = registerColor('diffEditor.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditorBorder', 'Border color between the two text editors.'));
const diffDiagonalFill = registerColor('diffEditor.diagonalFill', { dark: '#cccccc33', light: '#22222233', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffDiagonalFill', "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views."));
const diffUnchangedRegionBackground = registerColor('diffEditor.unchangedRegionBackground', { dark: '#000000', light: '#e4e4e4', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('diffEditor.unchangedRegionBackground', "The color of unchanged blocks in diff editor."));
/**
 * List and tree colors
 */
const listFocusBackground = registerColor('list.focusBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFocusBackground', "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusForeground = registerColor('list.focusForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFocusForeground', "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusOutline = registerColor('list.focusOutline', { dark: focusBorder, light: focusBorder, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFocusOutline', "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listFocusAndSelectionOutline = registerColor('list.focusAndSelectionOutline', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFocusAndSelectionOutline', "List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionBackground = registerColor('list.activeSelectionBackground', { dark: '#04395E', light: '#0060C0', hcDark: null, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0F4A85').transparent(0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listActiveSelectionBackground', "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionForeground = registerColor('list.activeSelectionForeground', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listActiveSelectionForeground', "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listActiveSelectionIconForeground = registerColor('list.activeSelectionIconForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listActiveSelectionIconForeground', "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionBackground = registerColor('list.inactiveSelectionBackground', { dark: '#37373D', light: '#E4E6F1', hcDark: null, hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0F4A85').transparent(0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listInactiveSelectionBackground', "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionForeground = registerColor('list.inactiveSelectionForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listInactiveSelectionForeground', "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveSelectionIconForeground = registerColor('list.inactiveSelectionIconForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listInactiveSelectionIconForeground', "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveFocusBackground = registerColor('list.inactiveFocusBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listInactiveFocusBackground', "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listInactiveFocusOutline = registerColor('list.inactiveFocusOutline', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listInactiveFocusOutline', "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not."));
const listHoverBackground = registerColor('list.hoverBackground', { dark: '#2A2D2E', light: '#F0F0F0', hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.white.transparent(0.1), hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#0F4A85').transparent(0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listHoverBackground', "List/Tree background when hovering over items using the mouse."));
const listHoverForeground = registerColor('list.hoverForeground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listHoverForeground', "List/Tree foreground when hovering over items using the mouse."));
const listDropBackground = registerColor('list.dropBackground', { dark: '#062F4A', light: '#D6EBFF', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listDropBackground', "List/Tree drag and drop background when moving items around using the mouse."));
const listHighlightForeground = registerColor('list.highlightForeground', { dark: '#2AAAFF', light: '#0066BF', hcDark: focusBorder, hcLight: focusBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('highlight', 'List/Tree foreground color of the match highlights when searching inside the list/tree.'));
const listFocusHighlightForeground = registerColor('list.focusHighlightForeground', { dark: listHighlightForeground, light: ifDefinedThenElse(listActiveSelectionBackground, listHighlightForeground, '#BBE7FF'), hcDark: listHighlightForeground, hcLight: listHighlightForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFocusHighlightForeground', 'List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.'));
const listInvalidItemForeground = registerColor('list.invalidItemForeground', { dark: '#B89500', light: '#B89500', hcDark: '#B89500', hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('invalidItemForeground', 'List/Tree foreground color for invalid items, for example an unresolved root in explorer.'));
const listErrorForeground = registerColor('list.errorForeground', { dark: '#F88070', light: '#B01011', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listErrorForeground', 'Foreground color of list items containing errors.'));
const listWarningForeground = registerColor('list.warningForeground', { dark: '#CCA700', light: '#855F00', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listWarningForeground', 'Foreground color of list items containing warnings.'));
const listFilterWidgetBackground = registerColor('listFilterWidget.background', { light: darken(editorWidgetBackground, 0), dark: lighten(editorWidgetBackground, 0), hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterWidgetBackground', 'Background color of the type filter widget in lists and trees.'));
const listFilterWidgetOutline = registerColor('listFilterWidget.outline', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent, light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.transparent, hcDark: '#f38518', hcLight: '#007ACC' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterWidgetOutline', 'Outline color of the type filter widget in lists and trees.'));
const listFilterWidgetNoMatchesOutline = registerColor('listFilterWidget.noMatchesOutline', { dark: '#BE1100', light: '#BE1100', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterWidgetNoMatchesOutline', 'Outline color of the type filter widget in lists and trees, when there are no matches.'));
const listFilterWidgetShadow = registerColor('listFilterWidget.shadow', { dark: widgetShadow, light: widgetShadow, hcDark: widgetShadow, hcLight: widgetShadow }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterWidgetShadow', 'Shadow color of the type filter widget in lists and trees.'));
const listFilterMatchHighlight = registerColor('list.filterMatchBackground', { dark: editorFindMatchHighlight, light: editorFindMatchHighlight, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterMatchHighlight', 'Background color of the filtered match.'));
const listFilterMatchHighlightBorder = registerColor('list.filterMatchBorder', { dark: editorFindMatchHighlightBorder, light: editorFindMatchHighlightBorder, hcDark: contrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listFilterMatchHighlightBorder', 'Border color of the filtered match.'));
const treeIndentGuidesStroke = registerColor('tree.indentGuidesStroke', { dark: '#585858', light: '#a9a9a9', hcDark: '#a9a9a9', hcLight: '#a5a5a5' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('treeIndentGuidesStroke', "Tree stroke color for the indentation guides."));
const treeInactiveIndentGuidesStroke = registerColor('tree.inactiveIndentGuidesStroke', { dark: transparent(treeIndentGuidesStroke, 0.4), light: transparent(treeIndentGuidesStroke, 0.4), hcDark: transparent(treeIndentGuidesStroke, 0.4), hcLight: transparent(treeIndentGuidesStroke, 0.4) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('treeInactiveIndentGuidesStroke', "Tree stroke color for the indentation guides that are not active."));
const tableColumnsBorder = registerColor('tree.tableColumnsBorder', { dark: '#CCCCCC20', light: '#61616120', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('tableColumnsBorder', "Table border color between columns."));
const tableOddRowsBackgroundColor = registerColor('tree.tableOddRowsBackground', { dark: transparent(foreground, 0.04), light: transparent(foreground, 0.04), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('tableOddRowsBackgroundColor', "Background color for odd table rows."));
const listDeemphasizedForeground = registerColor('list.deemphasizedForeground', { dark: '#8C8C8C', light: '#8E8E90', hcDark: '#A7A8A9', hcLight: '#666666' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('listDeemphasizedForeground', "List/Tree foreground color for items that are deemphasized. "));
/**
 * Checkboxes
 */
const checkboxBackground = registerColor('checkbox.background', { dark: selectBackground, light: selectBackground, hcDark: selectBackground, hcLight: selectBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('checkbox.background', "Background color of checkbox widget."));
const checkboxSelectBackground = registerColor('checkbox.selectBackground', { dark: editorWidgetBackground, light: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('checkbox.select.background', "Background color of checkbox widget when the element it's in is selected."));
const checkboxForeground = registerColor('checkbox.foreground', { dark: selectForeground, light: selectForeground, hcDark: selectForeground, hcLight: selectForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('checkbox.foreground', "Foreground color of checkbox widget."));
const checkboxBorder = registerColor('checkbox.border', { dark: selectBorder, light: selectBorder, hcDark: selectBorder, hcLight: selectBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('checkbox.border', "Border color of checkbox widget."));
const checkboxSelectBorder = registerColor('checkbox.selectBorder', { dark: iconForeground, light: iconForeground, hcDark: iconForeground, hcLight: iconForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('checkbox.select.border', "Border color of checkbox widget when the element it's in is selected."));
/**
 * Quick pick widget (dependent on List and tree colors)
 */
const _deprecatedQuickInputListFocusBackground = registerColor('quickInput.list.focusBackground', { dark: null, light: null, hcDark: null, hcLight: null }, '', undefined, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('quickInput.list.focusBackground deprecation', "Please use quickInputList.focusBackground instead"));
const quickInputListFocusForeground = registerColor('quickInputList.focusForeground', { dark: listActiveSelectionForeground, light: listActiveSelectionForeground, hcDark: listActiveSelectionForeground, hcLight: listActiveSelectionForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('quickInput.listFocusForeground', "Quick picker foreground color for the focused item."));
const quickInputListFocusIconForeground = registerColor('quickInputList.focusIconForeground', { dark: listActiveSelectionIconForeground, light: listActiveSelectionIconForeground, hcDark: listActiveSelectionIconForeground, hcLight: listActiveSelectionIconForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('quickInput.listFocusIconForeground', "Quick picker icon foreground color for the focused item."));
const quickInputListFocusBackground = registerColor('quickInputList.focusBackground', { dark: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), light: oneOf(_deprecatedQuickInputListFocusBackground, listActiveSelectionBackground), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('quickInput.listFocusBackground', "Quick picker background color for the focused item."));
/**
 * Menu colors
 */
const menuBorder = registerColor('menu.border', { dark: null, light: null, hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuBorder', "Border color of menus."));
const menuForeground = registerColor('menu.foreground', { dark: selectForeground, light: selectForeground, hcDark: selectForeground, hcLight: selectForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuForeground', "Foreground color of menu items."));
const menuBackground = registerColor('menu.background', { dark: selectBackground, light: selectBackground, hcDark: selectBackground, hcLight: selectBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuBackground', "Background color of menu items."));
const menuSelectionForeground = registerColor('menu.selectionForeground', { dark: listActiveSelectionForeground, light: listActiveSelectionForeground, hcDark: listActiveSelectionForeground, hcLight: listActiveSelectionForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuSelectionForeground', "Foreground color of the selected menu item in menus."));
const menuSelectionBackground = registerColor('menu.selectionBackground', { dark: listActiveSelectionBackground, light: listActiveSelectionBackground, hcDark: listActiveSelectionBackground, hcLight: listActiveSelectionBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuSelectionBackground', "Background color of the selected menu item in menus."));
const menuSelectionBorder = registerColor('menu.selectionBorder', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuSelectionBorder', "Border color of the selected menu item in menus."));
const menuSeparatorBackground = registerColor('menu.separatorBackground', { dark: '#606060', light: '#D4D4D4', hcDark: contrastBorder, hcLight: contrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('menuSeparatorBackground', "Color of a separator menu item in menus."));
/**
 * Toolbar colors
 */
const toolbarHoverBackground = registerColor('toolbar.hoverBackground', { dark: '#5a5d5e50', light: '#b8b8b850', hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('toolbarHoverBackground', "Toolbar background when hovering over actions using the mouse"));
const toolbarHoverOutline = registerColor('toolbar.hoverOutline', { dark: null, light: null, hcDark: activeContrastBorder, hcLight: activeContrastBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('toolbarHoverOutline', "Toolbar outline when hovering over actions using the mouse"));
const toolbarActiveBackground = registerColor('toolbar.activeBackground', { dark: lighten(toolbarHoverBackground, 0.1), light: darken(toolbarHoverBackground, 0.1), hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('toolbarActiveBackground', "Toolbar background when holding the mouse over actions"));
/**
 * Snippet placeholder colors
 */
const snippetTabstopHighlightBackground = registerColor('editor.snippetTabstopHighlightBackground', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(124, 124, 124, 0.3)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(10, 50, 100, 0.2)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(124, 124, 124, 0.3)), hcLight: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(10, 50, 100, 0.2)) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('snippetTabstopHighlightBackground', "Highlight background color of a snippet tabstop."));
const snippetTabstopHighlightBorder = registerColor('editor.snippetTabstopHighlightBorder', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('snippetTabstopHighlightBorder', "Highlight border color of a snippet tabstop."));
const snippetFinalTabstopHighlightBackground = registerColor('editor.snippetFinalTabstopHighlightBackground', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('snippetFinalTabstopHighlightBackground', "Highlight background color of the final tabstop of a snippet."));
const snippetFinalTabstopHighlightBorder = registerColor('editor.snippetFinalTabstopHighlightBorder', { dark: '#525252', light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(10, 50, 100, 0.5)), hcDark: '#525252', hcLight: '#292929' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('snippetFinalTabstopHighlightBorder', "Highlight border color of the final tabstop of a snippet."));
/**
 * Breadcrumb colors
 */
const breadcrumbsForeground = registerColor('breadcrumb.foreground', { light: transparent(foreground, 0.8), dark: transparent(foreground, 0.8), hcDark: transparent(foreground, 0.8), hcLight: transparent(foreground, 0.8) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('breadcrumbsFocusForeground', "Color of focused breadcrumb items."));
const breadcrumbsBackground = registerColor('breadcrumb.background', { light: editorBackground, dark: editorBackground, hcDark: editorBackground, hcLight: editorBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('breadcrumbsBackground', "Background color of breadcrumb items."));
const breadcrumbsFocusForeground = registerColor('breadcrumb.focusForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('breadcrumbsFocusForeground', "Color of focused breadcrumb items."));
const breadcrumbsActiveSelectionForeground = registerColor('breadcrumb.activeSelectionForeground', { light: darken(foreground, 0.2), dark: lighten(foreground, 0.1), hcDark: lighten(foreground, 0.1), hcLight: lighten(foreground, 0.1) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('breadcrumbsSelectedForeground', "Color of selected breadcrumb items."));
const breadcrumbsPickerBackground = registerColor('breadcrumbPicker.background', { light: editorWidgetBackground, dark: editorWidgetBackground, hcDark: editorWidgetBackground, hcLight: editorWidgetBackground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('breadcrumbsSelectedBackground', "Background color of breadcrumb item picker."));
/**
 * Merge-conflict colors
 */
const headerTransparency = 0.5;
const currentBaseColor = _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#40C8AE').transparent(headerTransparency);
const incomingBaseColor = _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#40A6FF').transparent(headerTransparency);
const commonBaseColor = _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#606060').transparent(0.4);
const contentTransparency = 0.4;
const rulerTransparency = 1;
const mergeCurrentHeaderBackground = registerColor('merge.currentHeaderBackground', { dark: currentBaseColor, light: currentBaseColor, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeCurrentHeaderBackground', 'Current header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeCurrentContentBackground = registerColor('merge.currentContentBackground', { dark: transparent(mergeCurrentHeaderBackground, contentTransparency), light: transparent(mergeCurrentHeaderBackground, contentTransparency), hcDark: transparent(mergeCurrentHeaderBackground, contentTransparency), hcLight: transparent(mergeCurrentHeaderBackground, contentTransparency) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeCurrentContentBackground', 'Current content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeIncomingHeaderBackground = registerColor('merge.incomingHeaderBackground', { dark: incomingBaseColor, light: incomingBaseColor, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeIncomingHeaderBackground', 'Incoming header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeIncomingContentBackground = registerColor('merge.incomingContentBackground', { dark: transparent(mergeIncomingHeaderBackground, contentTransparency), light: transparent(mergeIncomingHeaderBackground, contentTransparency), hcDark: transparent(mergeIncomingHeaderBackground, contentTransparency), hcLight: transparent(mergeIncomingHeaderBackground, contentTransparency) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeIncomingContentBackground', 'Incoming content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeCommonHeaderBackground = registerColor('merge.commonHeaderBackground', { dark: commonBaseColor, light: commonBaseColor, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeCommonHeaderBackground', 'Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeCommonContentBackground = registerColor('merge.commonContentBackground', { dark: transparent(mergeCommonHeaderBackground, contentTransparency), light: transparent(mergeCommonHeaderBackground, contentTransparency), hcDark: transparent(mergeCommonHeaderBackground, contentTransparency), hcLight: transparent(mergeCommonHeaderBackground, contentTransparency) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeCommonContentBackground', 'Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.'), true);
const mergeBorder = registerColor('merge.border', { dark: null, light: null, hcDark: '#C3DF6F', hcLight: '#007ACC' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('mergeBorder', 'Border color on headers and the splitter in inline merge-conflicts.'));
const overviewRulerCurrentContentForeground = registerColor('editorOverviewRuler.currentContentForeground', { dark: transparent(mergeCurrentHeaderBackground, rulerTransparency), light: transparent(mergeCurrentHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRulerCurrentContentForeground', 'Current overview ruler foreground for inline merge-conflicts.'));
const overviewRulerIncomingContentForeground = registerColor('editorOverviewRuler.incomingContentForeground', { dark: transparent(mergeIncomingHeaderBackground, rulerTransparency), light: transparent(mergeIncomingHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRulerIncomingContentForeground', 'Incoming overview ruler foreground for inline merge-conflicts.'));
const overviewRulerCommonContentForeground = registerColor('editorOverviewRuler.commonContentForeground', { dark: transparent(mergeCommonHeaderBackground, rulerTransparency), light: transparent(mergeCommonHeaderBackground, rulerTransparency), hcDark: mergeBorder, hcLight: mergeBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRulerCommonContentForeground', 'Common ancestor overview ruler foreground for inline merge-conflicts.'));
const overviewRulerFindMatchForeground = registerColor('editorOverviewRuler.findMatchForeground', { dark: '#d186167e', light: '#d186167e', hcDark: '#AB5A00', hcLight: '' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRulerFindMatchForeground', 'Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.'), true);
const overviewRulerSelectionHighlightForeground = registerColor('editorOverviewRuler.selectionHighlightForeground', { dark: '#A0A0A0CC', light: '#A0A0A0CC', hcDark: '#A0A0A0CC', hcLight: '#A0A0A0CC' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRulerSelectionHighlightForeground', 'Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.'), true);
const minimapFindMatch = registerColor('minimap.findMatchHighlight', { light: '#d18616', dark: '#d18616', hcDark: '#AB5A00', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapFindMatchHighlight', 'Minimap marker color for find matches.'), true);
const minimapSelectionOccurrenceHighlight = registerColor('minimap.selectionOccurrenceHighlight', { light: '#c9c9c9', dark: '#676767', hcDark: '#ffffff', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapSelectionOccurrenceHighlight', 'Minimap marker color for repeating editor selections.'), true);
const minimapSelection = registerColor('minimap.selectionHighlight', { light: '#ADD6FF', dark: '#264F78', hcDark: '#ffffff', hcLight: '#0F4A85' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapSelectionHighlight', 'Minimap marker color for the editor selection.'), true);
const minimapError = registerColor('minimap.errorHighlight', { dark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.7)), light: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 18, 18, 0.7)), hcDark: new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il(new _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .RGBA */ .VS(255, 50, 50, 1)), hcLight: '#B5200D' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapError', 'Minimap marker color for errors.'));
const minimapWarning = registerColor('minimap.warningHighlight', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningBorder, hcLight: editorWarningBorder }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('overviewRuleWarning', 'Minimap marker color for warnings.'));
const minimapBackground = registerColor('minimap.background', { dark: null, light: null, hcDark: null, hcLight: null }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapBackground', "Minimap background color."));
const minimapForegroundOpacity = registerColor('minimap.foregroundOpacity', { dark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000f'), light: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000f'), hcDark: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000f'), hcLight: _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex('#000f') }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapForegroundOpacity', 'Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.'));
const minimapSliderBackground = registerColor('minimapSlider.background', { light: transparent(scrollbarSliderBackground, 0.5), dark: transparent(scrollbarSliderBackground, 0.5), hcDark: transparent(scrollbarSliderBackground, 0.5), hcLight: transparent(scrollbarSliderBackground, 0.5) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapSliderBackground', "Minimap slider background color."));
const minimapSliderHoverBackground = registerColor('minimapSlider.hoverBackground', { light: transparent(scrollbarSliderHoverBackground, 0.5), dark: transparent(scrollbarSliderHoverBackground, 0.5), hcDark: transparent(scrollbarSliderHoverBackground, 0.5), hcLight: transparent(scrollbarSliderHoverBackground, 0.5) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapSliderHoverBackground', "Minimap slider background color when hovering."));
const minimapSliderActiveBackground = registerColor('minimapSlider.activeBackground', { light: transparent(scrollbarSliderActiveBackground, 0.5), dark: transparent(scrollbarSliderActiveBackground, 0.5), hcDark: transparent(scrollbarSliderActiveBackground, 0.5), hcLight: transparent(scrollbarSliderActiveBackground, 0.5) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('minimapSliderActiveBackground', "Minimap slider background color when clicked on."));
const problemsErrorIconForeground = registerColor('problemsErrorIcon.foreground', { dark: editorErrorForeground, light: editorErrorForeground, hcDark: editorErrorForeground, hcLight: editorErrorForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('problemsErrorIconForeground', "The color used for the problems error icon."));
const problemsWarningIconForeground = registerColor('problemsWarningIcon.foreground', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningForeground, hcLight: editorWarningForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('problemsWarningIconForeground', "The color used for the problems warning icon."));
const problemsInfoIconForeground = registerColor('problemsInfoIcon.foreground', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoForeground, hcLight: editorInfoForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('problemsInfoIconForeground', "The color used for the problems info icon."));
/**
 * Chart colors
 */
const chartsForeground = registerColor('charts.foreground', { dark: foreground, light: foreground, hcDark: foreground, hcLight: foreground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsForeground', "The foreground color used in charts."));
const chartsLines = registerColor('charts.lines', { dark: transparent(foreground, .5), light: transparent(foreground, .5), hcDark: transparent(foreground, .5), hcLight: transparent(foreground, .5) }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsLines', "The color used for horizontal lines in charts."));
const chartsRed = registerColor('charts.red', { dark: editorErrorForeground, light: editorErrorForeground, hcDark: editorErrorForeground, hcLight: editorErrorForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsRed', "The red color used in chart visualizations."));
const chartsBlue = registerColor('charts.blue', { dark: editorInfoForeground, light: editorInfoForeground, hcDark: editorInfoForeground, hcLight: editorInfoForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsBlue', "The blue color used in chart visualizations."));
const chartsYellow = registerColor('charts.yellow', { dark: editorWarningForeground, light: editorWarningForeground, hcDark: editorWarningForeground, hcLight: editorWarningForeground }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsYellow', "The yellow color used in chart visualizations."));
const chartsOrange = registerColor('charts.orange', { dark: minimapFindMatch, light: minimapFindMatch, hcDark: minimapFindMatch, hcLight: minimapFindMatch }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsOrange', "The orange color used in chart visualizations."));
const chartsGreen = registerColor('charts.green', { dark: '#89D185', light: '#388A34', hcDark: '#89D185', hcLight: '#374e06' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsGreen', "The green color used in chart visualizations."));
const chartsPurple = registerColor('charts.purple', { dark: '#B180D7', light: '#652D90', hcDark: '#B180D7', hcLight: '#652D90' }, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('chartsPurple', "The purple color used in chart visualizations."));
// ----- color functions
function executeTransform(transform, theme) {
    var _a, _b, _c, _d;
    switch (transform.op) {
        case 0 /* ColorTransformType.Darken */:
            return (_a = resolveColorValue(transform.value, theme)) === null || _a === void 0 ? void 0 : _a.darken(transform.factor);
        case 1 /* ColorTransformType.Lighten */:
            return (_b = resolveColorValue(transform.value, theme)) === null || _b === void 0 ? void 0 : _b.lighten(transform.factor);
        case 2 /* ColorTransformType.Transparent */:
            return (_c = resolveColorValue(transform.value, theme)) === null || _c === void 0 ? void 0 : _c.transparent(transform.factor);
        case 3 /* ColorTransformType.Opaque */: {
            const backgroundColor = resolveColorValue(transform.background, theme);
            if (!backgroundColor) {
                return resolveColorValue(transform.value, theme);
            }
            return (_d = resolveColorValue(transform.value, theme)) === null || _d === void 0 ? void 0 : _d.makeOpaque(backgroundColor);
        }
        case 4 /* ColorTransformType.OneOf */:
            for (const candidate of transform.values) {
                const color = resolveColorValue(candidate, theme);
                if (color) {
                    return color;
                }
            }
            return undefined;
        case 6 /* ColorTransformType.IfDefinedThenElse */:
            return resolveColorValue(theme.defines(transform.if) ? transform.then : transform.else, theme);
        case 5 /* ColorTransformType.LessProminent */: {
            const from = resolveColorValue(transform.value, theme);
            if (!from) {
                return undefined;
            }
            const backgroundColor = resolveColorValue(transform.background, theme);
            if (!backgroundColor) {
                return from.transparent(transform.factor * transform.transparency);
            }
            return from.isDarkerThan(backgroundColor)
                ? _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.getLighterColor(from, backgroundColor, transform.factor).transparent(transform.transparency)
                : _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.getDarkerColor(from, backgroundColor, transform.factor).transparent(transform.transparency);
        }
        default:
            throw (0,_base_common_assert_js__WEBPACK_IMPORTED_MODULE_3__/* .assertNever */ .vE)(transform);
    }
}
function darken(colorValue, factor) {
    return { op: 0 /* ColorTransformType.Darken */, value: colorValue, factor };
}
function lighten(colorValue, factor) {
    return { op: 1 /* ColorTransformType.Lighten */, value: colorValue, factor };
}
function transparent(colorValue, factor) {
    return { op: 2 /* ColorTransformType.Transparent */, value: colorValue, factor };
}
function oneOf(...colorValues) {
    return { op: 4 /* ColorTransformType.OneOf */, values: colorValues };
}
function ifDefinedThenElse(ifArg, thenArg, elseArg) {
    return { op: 6 /* ColorTransformType.IfDefinedThenElse */, if: ifArg, then: thenArg, else: elseArg };
}
function lessProminent(colorValue, backgroundColorValue, factor, transparency) {
    return { op: 5 /* ColorTransformType.LessProminent */, value: colorValue, background: backgroundColorValue, factor, transparency };
}
// ----- implementation
/**
 * @param colorValue Resolve a color value in the context of a theme
 */
function resolveColorValue(colorValue, theme) {
    if (colorValue === null) {
        return undefined;
    }
    else if (typeof colorValue === 'string') {
        if (colorValue[0] === '#') {
            return _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il.fromHex(colorValue);
        }
        return theme.getColor(colorValue);
    }
    else if (colorValue instanceof _base_common_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color */ .Il) {
        return colorValue;
    }
    else if (typeof colorValue === 'object') {
        return executeTransform(colorValue, theme);
    }
    return undefined;
}
const workbenchColorsSchemaId = 'vscode://schemas/workbench-colors';
const schemaRegistry = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_6__/* .Registry */ .B.as(_jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .Extensions */ .I.JSONContribution);
schemaRegistry.registerSchema(workbenchColorsSchemaId, colorRegistry.getColorSchema());
const delayer = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => schemaRegistry.notifySchemaChanged(workbenchColorsSchemaId), 200);
colorRegistry.onDidChangeSchema(() => {
    if (!delayer.isScheduled()) {
        delayer.schedule();
    }
});
// setTimeout(_ => console.log(colorRegistry.toString()), 5000);


/***/ }),

/***/ 95153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ks: function() { return /* binding */ getIconRegistry; },
/* harmony export */   q5: function() { return /* binding */ registerIcon; },
/* harmony export */   s_: function() { return /* binding */ widgetClose; }
/* harmony export */ });
/* unused harmony exports Extensions, IconContribution, IconFontDefinition, iconsSchemaId, gotoPreviousLocation, gotoNextLocation, syncing, spinningLoading */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14162);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51446);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96290);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28935);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56946);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23330);
/* harmony import */ var _jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85654);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









//  ------ API types
// icon registry
const Extensions = {
    IconContribution: 'base.contributions.icons'
};
var IconContribution;
(function (IconContribution) {
    function getDefinition(contribution, registry) {
        let definition = contribution.defaults;
        while (_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.isThemeIcon(definition)) {
            const c = iconRegistry.getIcon(definition.id);
            if (!c) {
                return undefined;
            }
            definition = c.defaults;
        }
        return definition;
    }
    IconContribution.getDefinition = getDefinition;
})(IconContribution || (IconContribution = {}));
var IconFontDefinition;
(function (IconFontDefinition) {
    function toJSONObject(iconFont) {
        return {
            weight: iconFont.weight,
            style: iconFont.style,
            src: iconFont.src.map(s => ({ format: s.format, location: s.location.toString() }))
        };
    }
    IconFontDefinition.toJSONObject = toJSONObject;
    function fromJSONObject(json) {
        const stringOrUndef = (s) => (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .HD)(s) ? s : undefined;
        if (json && Array.isArray(json.src) && json.src.every((s) => (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .HD)(s.format) && (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_8__/* .isString */ .HD)(s.location))) {
            return {
                weight: stringOrUndef(json.weight),
                style: stringOrUndef(json.style),
                src: json.src.map((s) => ({ format: s.format, location: _base_common_uri_js__WEBPACK_IMPORTED_MODULE_4__/* .URI */ .o.parse(s.location) }))
            };
        }
        return undefined;
    }
    IconFontDefinition.fromJSONObject = fromJSONObject;
})(IconFontDefinition || (IconFontDefinition = {}));
class IconRegistry {
    constructor() {
        this._onDidChange = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_3__/* .Emitter */ .Q5();
        this.onDidChange = this._onDidChange.event;
        this.iconSchema = {
            definitions: {
                icons: {
                    type: 'object',
                    properties: {
                        fontId: { type: 'string', description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_5__/* .localize */ .NC)('iconDefinition.fontId', 'The id of the font to use. If not set, the font that is defined first is used.') },
                        fontCharacter: { type: 'string', description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_5__/* .localize */ .NC)('iconDefinition.fontCharacter', 'The font character associated with the icon definition.') }
                    },
                    additionalProperties: false,
                    defaultSnippets: [{ body: { fontCharacter: '\\\\e030' } }]
                }
            },
            type: 'object',
            properties: {}
        };
        this.iconReferenceSchema = { type: 'string', pattern: `^${_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.iconNameExpression}$`, enum: [], enumDescriptions: [] };
        this.iconsById = {};
        this.iconFontsById = {};
    }
    registerIcon(id, defaults, description, deprecationMessage) {
        const existing = this.iconsById[id];
        if (existing) {
            if (description && !existing.description) {
                existing.description = description;
                this.iconSchema.properties[id].markdownDescription = `${description} $(${id})`;
                const enumIndex = this.iconReferenceSchema.enum.indexOf(id);
                if (enumIndex !== -1) {
                    this.iconReferenceSchema.enumDescriptions[enumIndex] = description;
                }
                this._onDidChange.fire();
            }
            return existing;
        }
        const iconContribution = { id, description, defaults, deprecationMessage };
        this.iconsById[id] = iconContribution;
        const propertySchema = { $ref: '#/definitions/icons' };
        if (deprecationMessage) {
            propertySchema.deprecationMessage = deprecationMessage;
        }
        if (description) {
            propertySchema.markdownDescription = `${description}: $(${id})`;
        }
        this.iconSchema.properties[id] = propertySchema;
        this.iconReferenceSchema.enum.push(id);
        this.iconReferenceSchema.enumDescriptions.push(description || '');
        this._onDidChange.fire();
        return { id };
    }
    getIcons() {
        return Object.keys(this.iconsById).map(id => this.iconsById[id]);
    }
    getIcon(id) {
        return this.iconsById[id];
    }
    getIconSchema() {
        return this.iconSchema;
    }
    toString() {
        const sorter = (i1, i2) => {
            return i1.id.localeCompare(i2.id);
        };
        const classNames = (i) => {
            while (_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.isThemeIcon(i.defaults)) {
                i = this.iconsById[i.defaults.id];
            }
            return `codicon codicon-${i ? i.id : ''}`;
        };
        const reference = [];
        reference.push(`| preview     | identifier                        | default codicon ID                | description`);
        reference.push(`| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |`);
        const contributions = Object.keys(this.iconsById).map(key => this.iconsById[key]);
        for (const i of contributions.filter(i => !!i.description).sort(sorter)) {
            reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|${_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.isThemeIcon(i.defaults) ? i.defaults.id : i.id}|${i.description || ''}|`);
        }
        reference.push(`| preview     | identifier                        `);
        reference.push(`| ----------- | --------------------------------- |`);
        for (const i of contributions.filter(i => !_base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.isThemeIcon(i.defaults)).sort(sorter)) {
            reference.push(`|<i class="${classNames(i)}"></i>|${i.id}|`);
        }
        return reference.join('\n');
    }
}
const iconRegistry = new IconRegistry();
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_7__/* .Registry */ .B.add(Extensions.IconContribution, iconRegistry);
function registerIcon(id, defaults, description, deprecationMessage) {
    return iconRegistry.registerIcon(id, defaults, description, deprecationMessage);
}
function getIconRegistry() {
    return iconRegistry;
}
function initialize() {
    const codiconFontCharacters = (0,_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .getCodiconFontCharacters */ .u)();
    for (const icon in codiconFontCharacters) {
        const fontCharacter = '\\' + codiconFontCharacters[icon].toString(16);
        iconRegistry.registerIcon(icon, { fontCharacter });
    }
}
initialize();
const iconsSchemaId = 'vscode://schemas/icons';
const schemaRegistry = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_7__/* .Registry */ .B.as(_jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_6__/* .Extensions */ .I.JSONContribution);
schemaRegistry.registerSchema(iconsSchemaId, iconRegistry.getIconSchema());
const delayer = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .RunOnceScheduler */ .pY(() => schemaRegistry.notifySchemaChanged(iconsSchemaId), 200);
iconRegistry.onDidChange(() => {
    if (!delayer.isScheduled()) {
        delayer.schedule();
    }
});
//setTimeout(_ => console.log(iconRegistry.toString()), 5000);
// common icons
const widgetClose = registerIcon('widget-close', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .Codicon */ .l.close, (0,_nls_js__WEBPACK_IMPORTED_MODULE_5__/* .localize */ .NC)('widgetClose', 'Icon for the close action in widgets.'));
const gotoPreviousLocation = registerIcon('goto-previous-location', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .Codicon */ .l.arrowUp, (0,_nls_js__WEBPACK_IMPORTED_MODULE_5__/* .localize */ .NC)('previousChangeIcon', 'Icon for goto previous editor location.'));
const gotoNextLocation = registerIcon('goto-next-location', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .Codicon */ .l.arrowDown, (0,_nls_js__WEBPACK_IMPORTED_MODULE_5__/* .localize */ .NC)('nextChangeIcon', 'Icon for goto next editor location.'));
const syncing = _base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.modify(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .Codicon */ .l.sync, 'spin');
const spinningLoading = _base_common_themables_js__WEBPACK_IMPORTED_MODULE_2__/* .ThemeIcon */ .k.modify(_base_common_codicons_js__WEBPACK_IMPORTED_MODULE_1__/* .Codicon */ .l.loading, 'spin');


/***/ }),

/***/ 4393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _T: function() { return /* binding */ isDark; },
/* harmony export */   c3: function() { return /* binding */ isHighContrast; },
/* harmony export */   eL: function() { return /* binding */ ColorScheme; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Color scheme used by the OS and by color themes.
 */
var ColorScheme;
(function (ColorScheme) {
    ColorScheme["DARK"] = "dark";
    ColorScheme["LIGHT"] = "light";
    ColorScheme["HIGH_CONTRAST_DARK"] = "hcDark";
    ColorScheme["HIGH_CONTRAST_LIGHT"] = "hcLight";
})(ColorScheme || (ColorScheme = {}));
function isHighContrast(scheme) {
    return scheme === ColorScheme.HIGH_CONTRAST_DARK || scheme === ColorScheme.HIGH_CONTRAST_LIGHT;
}
function isDark(scheme) {
    return scheme === ColorScheme.DARK || scheme === ColorScheme.HIGH_CONTRAST_DARK;
}


/***/ }),

/***/ 31754:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EN: function() { return /* binding */ themeColorFromId; },
/* harmony export */   IP: function() { return /* binding */ Extensions; },
/* harmony export */   Ic: function() { return /* binding */ registerThemingParticipant; },
/* harmony export */   XE: function() { return /* binding */ IThemeService; },
/* harmony export */   bB: function() { return /* binding */ Themable; },
/* harmony export */   m6: function() { return /* binding */ getThemeTypeSelector; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38048);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72015);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4393);





const IThemeService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_2__/* .createDecorator */ .yh)('themeService');
function themeColorFromId(id) {
    return { id };
}
function getThemeTypeSelector(type) {
    switch (type) {
        case _theme_js__WEBPACK_IMPORTED_MODULE_4__/* .ColorScheme */ .eL.DARK: return 'vs-dark';
        case _theme_js__WEBPACK_IMPORTED_MODULE_4__/* .ColorScheme */ .eL.HIGH_CONTRAST_DARK: return 'hc-black';
        case _theme_js__WEBPACK_IMPORTED_MODULE_4__/* .ColorScheme */ .eL.HIGH_CONTRAST_LIGHT: return 'hc-light';
        default: return 'vs';
    }
}
// static theming participant
const Extensions = {
    ThemingContribution: 'base.contributions.theming'
};
class ThemingRegistry {
    constructor() {
        this.themingParticipants = [];
        this.themingParticipants = [];
        this.onThemingParticipantAddedEmitter = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
    onColorThemeChange(participant) {
        this.themingParticipants.push(participant);
        this.onThemingParticipantAddedEmitter.fire(participant);
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            const idx = this.themingParticipants.indexOf(participant);
            this.themingParticipants.splice(idx, 1);
        });
    }
    getThemingParticipants() {
        return this.themingParticipants;
    }
}
const themingRegistry = new ThemingRegistry();
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .Registry */ .B.add(Extensions.ThemingContribution, themingRegistry);
function registerThemingParticipant(participant) {
    return themingRegistry.onColorThemeChange(participant);
}
/**
 * Utility base class for all themable components.
 */
class Themable extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(themeService) {
        super();
        this.themeService = themeService;
        this.theme = themeService.getColorTheme();
        // Hook up to theme changes
        this._register(this.themeService.onDidColorThemeChange(theme => this.onThemeChange(theme)));
    }
    onThemeChange(theme) {
        this.theme = theme;
        this.updateStyles();
    }
    updateStyles() {
        // Subclasses to override
    }
}


/***/ }),

/***/ 18988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xt: function() { return /* binding */ UndoRedoGroup; },
/* harmony export */   YO: function() { return /* binding */ ResourceEditStackSnapshot; },
/* harmony export */   gJ: function() { return /* binding */ UndoRedoSource; },
/* harmony export */   tJ: function() { return /* binding */ IUndoRedoService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IUndoRedoService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('undoRedoService');
class ResourceEditStackSnapshot {
    constructor(resource, elements) {
        this.resource = resource;
        this.elements = elements;
    }
}
class UndoRedoGroup {
    constructor() {
        this.id = UndoRedoGroup._ID++;
        this.order = 1;
    }
    nextOrder() {
        if (this.id === 0) {
            return 0;
        }
        return this.order++;
    }
}
UndoRedoGroup._ID = 0;
UndoRedoGroup.None = new UndoRedoGroup();
class UndoRedoSource {
    constructor() {
        this.id = UndoRedoSource._ID++;
        this.order = 1;
    }
    nextOrder() {
        if (this.id === 0) {
            return 0;
        }
        return this.order++;
    }
}
UndoRedoSource._ID = 0;
UndoRedoSource.None = new UndoRedoSource();


/***/ }),

/***/ 18743:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export UndoRedoService */
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11966);
/* harmony import */ var _base_common_severity_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92380);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23330);
/* harmony import */ var _dialogs_common_dialogs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14547);
/* harmony import */ var _instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9546);
/* harmony import */ var _notification_common_notification_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99938);
/* harmony import */ var _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18988);
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









const DEBUG = false;
function getResourceLabel(resource) {
    return resource.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_2__/* .Schemas */ .lg.file ? resource.fsPath : resource.path;
}
let stackElementCounter = 0;
class ResourceStackElement {
    constructor(actual, resourceLabel, strResource, groupId, groupOrder, sourceId, sourceOrder) {
        this.id = (++stackElementCounter);
        this.type = 0 /* UndoRedoElementType.Resource */;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this.resourceLabels = [this.resourceLabel];
        this.strResources = [this.strResource];
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.isValid = true;
    }
    setValid(isValid) {
        this.isValid = isValid;
    }
    toString() {
        return `[id:${this.id}] [group:${this.groupId}] [${this.isValid ? '  VALID' : 'INVALID'}] ${this.actual.constructor.name} - ${this.actual}`;
    }
}
class ResourceReasonPair {
    constructor(resourceLabel, reason) {
        this.resourceLabel = resourceLabel;
        this.reason = reason;
    }
}
class RemovedResources {
    constructor() {
        this.elements = new Map();
    }
    createMessage() {
        const externalRemoval = [];
        const noParallelUniverses = [];
        for (const [, element] of this.elements) {
            const dest = (element.reason === 0 /* RemovedResourceReason.ExternalRemoval */
                ? externalRemoval
                : noParallelUniverses);
            dest.push(element.resourceLabel);
        }
        const messages = [];
        if (externalRemoval.length > 0) {
            messages.push(_nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'externalRemoval', comment: ['{0} is a list of filenames'] }, "The following files have been closed and modified on disk: {0}.", externalRemoval.join(', ')));
        }
        if (noParallelUniverses.length > 0) {
            messages.push(_nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'noParallelUniverses', comment: ['{0} is a list of filenames'] }, "The following files have been modified in an incompatible way: {0}.", noParallelUniverses.join(', ')));
        }
        return messages.join('\n');
    }
    get size() {
        return this.elements.size;
    }
    has(strResource) {
        return this.elements.has(strResource);
    }
    set(strResource, value) {
        this.elements.set(strResource, value);
    }
    delete(strResource) {
        return this.elements.delete(strResource);
    }
}
class WorkspaceStackElement {
    constructor(actual, resourceLabels, strResources, groupId, groupOrder, sourceId, sourceOrder) {
        this.id = (++stackElementCounter);
        this.type = 1 /* UndoRedoElementType.Workspace */;
        this.actual = actual;
        this.label = actual.label;
        this.confirmBeforeUndo = actual.confirmBeforeUndo || false;
        this.resourceLabels = resourceLabels;
        this.strResources = strResources;
        this.groupId = groupId;
        this.groupOrder = groupOrder;
        this.sourceId = sourceId;
        this.sourceOrder = sourceOrder;
        this.removedResources = null;
        this.invalidatedResources = null;
    }
    canSplit() {
        return (typeof this.actual.split === 'function');
    }
    removeResource(resourceLabel, strResource, reason) {
        if (!this.removedResources) {
            this.removedResources = new RemovedResources();
        }
        if (!this.removedResources.has(strResource)) {
            this.removedResources.set(strResource, new ResourceReasonPair(resourceLabel, reason));
        }
    }
    setValid(resourceLabel, strResource, isValid) {
        if (isValid) {
            if (this.invalidatedResources) {
                this.invalidatedResources.delete(strResource);
                if (this.invalidatedResources.size === 0) {
                    this.invalidatedResources = null;
                }
            }
        }
        else {
            if (!this.invalidatedResources) {
                this.invalidatedResources = new RemovedResources();
            }
            if (!this.invalidatedResources.has(strResource)) {
                this.invalidatedResources.set(strResource, new ResourceReasonPair(resourceLabel, 0 /* RemovedResourceReason.ExternalRemoval */));
            }
        }
    }
    toString() {
        return `[id:${this.id}] [group:${this.groupId}] [${this.invalidatedResources ? 'INVALID' : '  VALID'}] ${this.actual.constructor.name} - ${this.actual}`;
    }
}
class ResourceEditStack {
    constructor(resourceLabel, strResource) {
        this.resourceLabel = resourceLabel;
        this.strResource = strResource;
        this._past = [];
        this._future = [];
        this.locked = false;
        this.versionId = 1;
    }
    dispose() {
        for (const element of this._past) {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        for (const element of this._future) {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        this.versionId++;
    }
    toString() {
        const result = [];
        result.push(`* ${this.strResource}:`);
        for (let i = 0; i < this._past.length; i++) {
            result.push(`   * [UNDO] ${this._past[i]}`);
        }
        for (let i = this._future.length - 1; i >= 0; i--) {
            result.push(`   * [REDO] ${this._future[i]}`);
        }
        return result.join('\n');
    }
    flushAllElements() {
        this._past = [];
        this._future = [];
        this.versionId++;
    }
    _setElementValidFlag(element, isValid) {
        if (element.type === 1 /* UndoRedoElementType.Workspace */) {
            element.setValid(this.resourceLabel, this.strResource, isValid);
        }
        else {
            element.setValid(isValid);
        }
    }
    setElementsValidFlag(isValid, filter) {
        for (const element of this._past) {
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
        for (const element of this._future) {
            if (filter(element.actual)) {
                this._setElementValidFlag(element, isValid);
            }
        }
    }
    pushElement(element) {
        // remove the future
        for (const futureElement of this._future) {
            if (futureElement.type === 1 /* UndoRedoElementType.Workspace */) {
                futureElement.removeResource(this.resourceLabel, this.strResource, 1 /* RemovedResourceReason.NoParallelUniverses */);
            }
        }
        this._future = [];
        this._past.push(element);
        this.versionId++;
    }
    createSnapshot(resource) {
        const elements = [];
        for (let i = 0, len = this._past.length; i < len; i++) {
            elements.push(this._past[i].id);
        }
        for (let i = this._future.length - 1; i >= 0; i--) {
            elements.push(this._future[i].id);
        }
        return new _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .ResourceEditStackSnapshot */ .YO(resource, elements);
    }
    restoreSnapshot(snapshot) {
        const snapshotLength = snapshot.elements.length;
        let isOK = true;
        let snapshotIndex = 0;
        let removePastAfter = -1;
        for (let i = 0, len = this._past.length; i < len; i++, snapshotIndex++) {
            const element = this._past[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removePastAfter = 0;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        let removeFutureBefore = -1;
        for (let i = this._future.length - 1; i >= 0; i--, snapshotIndex++) {
            const element = this._future[i];
            if (isOK && (snapshotIndex >= snapshotLength || element.id !== snapshot.elements[snapshotIndex])) {
                isOK = false;
                removeFutureBefore = i;
            }
            if (!isOK && element.type === 1 /* UndoRedoElementType.Workspace */) {
                element.removeResource(this.resourceLabel, this.strResource, 0 /* RemovedResourceReason.ExternalRemoval */);
            }
        }
        if (removePastAfter !== -1) {
            this._past = this._past.slice(0, removePastAfter);
        }
        if (removeFutureBefore !== -1) {
            this._future = this._future.slice(removeFutureBefore + 1);
        }
        this.versionId++;
    }
    getElements() {
        const past = [];
        const future = [];
        for (const element of this._past) {
            past.push(element.actual);
        }
        for (const element of this._future) {
            future.push(element.actual);
        }
        return { past, future };
    }
    getClosestPastElement() {
        if (this._past.length === 0) {
            return null;
        }
        return this._past[this._past.length - 1];
    }
    getSecondClosestPastElement() {
        if (this._past.length < 2) {
            return null;
        }
        return this._past[this._past.length - 2];
    }
    getClosestFutureElement() {
        if (this._future.length === 0) {
            return null;
        }
        return this._future[this._future.length - 1];
    }
    hasPastElements() {
        return (this._past.length > 0);
    }
    hasFutureElements() {
        return (this._future.length > 0);
    }
    splitPastWorkspaceElement(toRemove, individualMap) {
        for (let j = this._past.length - 1; j >= 0; j--) {
            if (this._past[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._past[j] = individualMap.get(this.strResource);
                }
                else {
                    // gets deleted
                    this._past.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    splitFutureWorkspaceElement(toRemove, individualMap) {
        for (let j = this._future.length - 1; j >= 0; j--) {
            if (this._future[j] === toRemove) {
                if (individualMap.has(this.strResource)) {
                    // gets replaced
                    this._future[j] = individualMap.get(this.strResource);
                }
                else {
                    // gets deleted
                    this._future.splice(j, 1);
                }
                break;
            }
        }
        this.versionId++;
    }
    moveBackward(element) {
        this._past.pop();
        this._future.push(element);
        this.versionId++;
    }
    moveForward(element) {
        this._future.pop();
        this._past.push(element);
        this.versionId++;
    }
}
class EditStackSnapshot {
    constructor(editStacks) {
        this.editStacks = editStacks;
        this._versionIds = [];
        for (let i = 0, len = this.editStacks.length; i < len; i++) {
            this._versionIds[i] = this.editStacks[i].versionId;
        }
    }
    isValid() {
        for (let i = 0, len = this.editStacks.length; i < len; i++) {
            if (this._versionIds[i] !== this.editStacks[i].versionId) {
                return false;
            }
        }
        return true;
    }
}
const missingEditStack = new ResourceEditStack('', '');
missingEditStack.locked = true;
let UndoRedoService = class UndoRedoService {
    constructor(_dialogService, _notificationService) {
        this._dialogService = _dialogService;
        this._notificationService = _notificationService;
        this._editStacks = new Map();
        this._uriComparisonKeyComputers = [];
    }
    getUriComparisonKey(resource) {
        for (const uriComparisonKeyComputer of this._uriComparisonKeyComputers) {
            if (uriComparisonKeyComputer[0] === resource.scheme) {
                return uriComparisonKeyComputer[1].getComparisonKey(resource);
            }
        }
        return resource.toString();
    }
    _print(label) {
        console.log(`------------------------------------`);
        console.log(`AFTER ${label}: `);
        const str = [];
        for (const element of this._editStacks) {
            str.push(element[1].toString());
        }
        console.log(str.join('\n'));
    }
    pushElement(element, group = _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoGroup */ .Xt.None, source = _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoSource */ .gJ.None) {
        if (element.type === 0 /* UndoRedoElementType.Resource */) {
            const resourceLabel = getResourceLabel(element.resource);
            const strResource = this.getUriComparisonKey(element.resource);
            this._pushElement(new ResourceStackElement(element, resourceLabel, strResource, group.id, group.nextOrder(), source.id, source.nextOrder()));
        }
        else {
            const seen = new Set();
            const resourceLabels = [];
            const strResources = [];
            for (const resource of element.resources) {
                const resourceLabel = getResourceLabel(resource);
                const strResource = this.getUriComparisonKey(resource);
                if (seen.has(strResource)) {
                    continue;
                }
                seen.add(strResource);
                resourceLabels.push(resourceLabel);
                strResources.push(strResource);
            }
            if (resourceLabels.length === 1) {
                this._pushElement(new ResourceStackElement(element, resourceLabels[0], strResources[0], group.id, group.nextOrder(), source.id, source.nextOrder()));
            }
            else {
                this._pushElement(new WorkspaceStackElement(element, resourceLabels, strResources, group.id, group.nextOrder(), source.id, source.nextOrder()));
            }
        }
        if (DEBUG) {
            this._print('pushElement');
        }
    }
    _pushElement(element) {
        for (let i = 0, len = element.strResources.length; i < len; i++) {
            const resourceLabel = element.resourceLabels[i];
            const strResource = element.strResources[i];
            let editStack;
            if (this._editStacks.has(strResource)) {
                editStack = this._editStacks.get(strResource);
            }
            else {
                editStack = new ResourceEditStack(resourceLabel, strResource);
                this._editStacks.set(strResource, editStack);
            }
            editStack.pushElement(element);
        }
    }
    getLastElement(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            if (editStack.hasFutureElements()) {
                return null;
            }
            const closestPastElement = editStack.getClosestPastElement();
            return closestPastElement ? closestPastElement.actual : null;
        }
        return null;
    }
    _splitPastWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr) {
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources) {
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitPastWorkspaceElement(toRemove, individualMap);
        }
    }
    _splitFutureWorkspaceElement(toRemove, ignoreResources) {
        const individualArr = toRemove.actual.split();
        const individualMap = new Map();
        for (const _element of individualArr) {
            const resourceLabel = getResourceLabel(_element.resource);
            const strResource = this.getUriComparisonKey(_element.resource);
            const element = new ResourceStackElement(_element, resourceLabel, strResource, 0, 0, 0, 0);
            individualMap.set(element.strResource, element);
        }
        for (const strResource of toRemove.strResources) {
            if (ignoreResources && ignoreResources.has(strResource)) {
                continue;
            }
            const editStack = this._editStacks.get(strResource);
            editStack.splitFutureWorkspaceElement(toRemove, individualMap);
        }
    }
    removeElements(resource) {
        const strResource = typeof resource === 'string' ? resource : this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.dispose();
            this._editStacks.delete(strResource);
        }
        if (DEBUG) {
            this._print('removeElements');
        }
    }
    setElementsValidFlag(resource, isValid, filter) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.setElementsValidFlag(isValid, filter);
        }
        if (DEBUG) {
            this._print('setElementsValidFlag');
        }
    }
    createSnapshot(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.createSnapshot(resource);
        }
        return new _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .ResourceEditStackSnapshot */ .YO(resource, []);
    }
    restoreSnapshot(snapshot) {
        const strResource = this.getUriComparisonKey(snapshot.resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            editStack.restoreSnapshot(snapshot);
            if (!editStack.hasPastElements() && !editStack.hasFutureElements()) {
                // the edit stack is now empty, just remove it entirely
                editStack.dispose();
                this._editStacks.delete(strResource);
            }
        }
        if (DEBUG) {
            this._print('restoreSnapshot');
        }
    }
    getElements(resource) {
        const strResource = this.getUriComparisonKey(resource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.getElements();
        }
        return { past: [], future: [] };
    }
    _findClosestUndoElementWithSource(sourceId) {
        if (!sourceId) {
            return [null, null];
        }
        // find an element with the sourceId and with the highest sourceOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder > matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    canUndo(resourceOrSource) {
        if (resourceOrSource instanceof _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoSource */ .gJ) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasPastElements();
        }
        return false;
    }
    _onError(err, element) {
        (0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(err);
        // An error occurred while undoing or redoing => drop the undo/redo stack for all affected resources
        for (const strResource of element.strResources) {
            this.removeElements(strResource);
        }
        this._notificationService.error(err);
    }
    _acquireLocks(editStackSnapshot) {
        // first, check if all locks can be acquired
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                throw new Error('Cannot acquire edit stack lock');
            }
        }
        // can acquire all locks
        for (const editStack of editStackSnapshot.editStacks) {
            editStack.locked = true;
        }
        return () => {
            // release all locks
            for (const editStack of editStackSnapshot.editStacks) {
                editStack.locked = false;
            }
        };
    }
    _safeInvokeWithLocks(element, invoke, editStackSnapshot, cleanup, continuation) {
        const releaseLocks = this._acquireLocks(editStackSnapshot);
        let result;
        try {
            result = invoke();
        }
        catch (err) {
            releaseLocks();
            cleanup.dispose();
            return this._onError(err, element);
        }
        if (result) {
            // result is Promise<void>
            return result.then(() => {
                releaseLocks();
                cleanup.dispose();
                return continuation();
            }, (err) => {
                releaseLocks();
                cleanup.dispose();
                return this._onError(err, element);
            });
        }
        else {
            // result is void
            releaseLocks();
            cleanup.dispose();
            return continuation();
        }
    }
    _invokeWorkspacePrepare(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof element.actual.prepareUndoRedo === 'undefined') {
                return _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT.None;
            }
            const result = element.actual.prepareUndoRedo();
            if (typeof result === 'undefined') {
                return _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT.None;
            }
            return result;
        });
    }
    _invokeResourcePrepare(element, callback) {
        if (element.actual.type !== 1 /* UndoRedoElementType.Workspace */ || typeof element.actual.prepareUndoRedo === 'undefined') {
            // no preparation needed
            return callback(_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT.None);
        }
        const r = element.actual.prepareUndoRedo();
        if (!r) {
            // nothing to clean up
            return callback(_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT.None);
        }
        if ((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .isDisposable */ .Wf)(r)) {
            return callback(r);
        }
        return r.then((disposable) => {
            return callback(disposable);
        });
    }
    _getAffectedEditStacks(element) {
        const affectedEditStacks = [];
        for (const strResource of element.strResources) {
            affectedEditStacks.push(this._editStacks.get(strResource) || missingEditStack);
        }
        return new EditStackSnapshot(affectedEditStacks);
    }
    _tryToSplitAndUndo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitPastWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._undo(strResource, 0, true));
        }
        else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources) {
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceUndo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.removedResources, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceUndo', comment: ['{0} is a label for an operation. {1} is another message.'] }, "Could not undo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndUndo(strResource, element, element.invalidatedResources, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceUndo', comment: ['{0} is a label for an operation. {1} is another message.'] }, "Could not undo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last past element in all the impacted resources!
        const cannotUndoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.getClosestPastElement() !== element) {
                cannotUndoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotUndoDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceUndoDueToChanges', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not undo '{0}' across all files because changes were made to {1}", element.label, cannotUndoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndUndo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceUndoDueToInProgressUndoRedo', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not undo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndUndo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceUndoDueToInMeantimeUndoRedo', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not undo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceUndo(strResource, element, undoConfirmed) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceUndo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._confirmAndExecuteWorkspaceUndo(strResource, element, affectedEditStacks, undoConfirmed);
    }
    _isPartOfUndoGroup(element) {
        if (!element.groupId) {
            return false;
        }
        // check that there is at least another element with the same groupId ready to be undone
        for (const [, editStack] of this._editStacks) {
            const pastElement = editStack.getClosestPastElement();
            if (!pastElement) {
                continue;
            }
            if (pastElement === element) {
                const secondPastElement = editStack.getSecondClosestPastElement();
                if (secondPastElement && secondPastElement.groupId === element.groupId) {
                    // there is another element with the same group id in the same stack!
                    return true;
                }
            }
            if (pastElement.groupId === element.groupId) {
                // there is another element with the same group id in another stack!
                return true;
            }
        }
        return false;
    }
    _confirmAndExecuteWorkspaceUndo(strResource, element, editStackSnapshot, undoConfirmed) {
        return __awaiter(this, void 0, void 0, function* () {
            if (element.canSplit() && !this._isPartOfUndoGroup(element)) {
                // this element can be split
                let UndoChoice;
                (function (UndoChoice) {
                    UndoChoice[UndoChoice["All"] = 0] = "All";
                    UndoChoice[UndoChoice["This"] = 1] = "This";
                    UndoChoice[UndoChoice["Cancel"] = 2] = "Cancel";
                })(UndoChoice || (UndoChoice = {}));
                const { result } = yield this._dialogService.prompt({
                    type: _base_common_severity_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Info,
                    message: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('confirmWorkspace', "Would you like to undo '{0}' across all files?", element.label),
                    buttons: [
                        {
                            label: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'ok', comment: ['{0} denotes a number that is > 1, && denotes a mnemonic'] }, "&&Undo in {0} Files", editStackSnapshot.editStacks.length),
                            run: () => UndoChoice.All
                        },
                        {
                            label: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'nok', comment: ['&& denotes a mnemonic'] }, "Undo this &&File"),
                            run: () => UndoChoice.This
                        }
                    ],
                    cancelButton: {
                        run: () => UndoChoice.Cancel
                    }
                });
                if (result === UndoChoice.Cancel) {
                    // choice: cancel
                    return;
                }
                if (result === UndoChoice.This) {
                    // choice: undo this file
                    this._splitPastWorkspaceElement(element, null);
                    return this._undo(strResource, 0, true);
                }
                // choice: undo in all files
                // At this point, it is possible that the element has been made invalid in the meantime (due to the confirmation await)
                const verificationError1 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*invalidated resources will be checked after the prepare call*/ false);
                if (verificationError1) {
                    return verificationError1.returnValue;
                }
                undoConfirmed = true;
            }
            // prepare
            let cleanup;
            try {
                cleanup = yield this._invokeWorkspacePrepare(element);
            }
            catch (err) {
                return this._onError(err, element);
            }
            // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
            const verificationError2 = this._checkWorkspaceUndo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
            if (verificationError2) {
                cleanup.dispose();
                return verificationError2.returnValue;
            }
            for (const editStack of editStackSnapshot.editStacks) {
                editStack.moveBackward(element);
            }
            return this._safeInvokeWithLocks(element, () => element.actual.undo(), editStackSnapshot, cleanup, () => this._continueUndoInGroup(element.groupId, undoConfirmed));
        });
    }
    _resourceUndo(editStack, element, undoConfirmed) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotResourceUndoDueToInProgressUndoRedo', comment: ['{0} is a label for an operation.'] }, "Could not undo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup) => {
            editStack.moveBackward(element);
            return this._safeInvokeWithLocks(element, () => element.actual.undo(), new EditStackSnapshot([editStack]), cleanup, () => this._continueUndoInGroup(element.groupId, undoConfirmed));
        });
    }
    _findClosestUndoElementInGroup(groupId) {
        if (!groupId) {
            return [null, null];
        }
        // find another element with the same groupId and with the highest groupOrder ready to be undone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestPastElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder > matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    _continueUndoInGroup(groupId, undoConfirmed) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestUndoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._undo(matchedStrResource, 0, undoConfirmed);
        }
    }
    undo(resourceOrSource) {
        if (resourceOrSource instanceof _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoSource */ .gJ) {
            const [, matchedStrResource] = this._findClosestUndoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._undo(matchedStrResource, resourceOrSource.id, false) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._undo(resourceOrSource, 0, false);
        }
        return this._undo(this.getUriComparisonKey(resourceOrSource), 0, false);
    }
    _undo(strResource, sourceId = 0, undoConfirmed) {
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestPastElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure undoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestUndoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be undone before this one
                return this._undo(matchedStrResource, sourceId, undoConfirmed);
            }
        }
        const shouldPromptForConfirmation = (element.sourceId !== sourceId || element.confirmBeforeUndo);
        if (shouldPromptForConfirmation && !undoConfirmed) {
            // Hit a different source or the element asks for prompt before undo, prompt for confirmation
            return this._confirmAndContinueUndo(strResource, sourceId, element);
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                return this._workspaceUndo(strResource, element, undoConfirmed);
            }
            else {
                return this._resourceUndo(editStack, element, undoConfirmed);
            }
        }
        finally {
            if (DEBUG) {
                this._print('undo');
            }
        }
    }
    _confirmAndContinueUndo(strResource, sourceId, element) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._dialogService.confirm({
                message: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('confirmDifferentSource', "Would you like to undo '{0}'?", element.label),
                primaryButton: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'confirmDifferentSource.yes', comment: ['&& denotes a mnemonic'] }, "&&Yes"),
                cancelButton: _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC('confirmDifferentSource.no', "No")
            });
            if (!result.confirmed) {
                return;
            }
            return this._undo(strResource, sourceId, true);
        });
    }
    _findClosestRedoElementWithSource(sourceId) {
        if (!sourceId) {
            return [null, null];
        }
        // find an element with sourceId and with the lowest sourceOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.sourceId === sourceId) {
                if (!matchedElement || candidate.sourceOrder < matchedElement.sourceOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    canRedo(resourceOrSource) {
        if (resourceOrSource instanceof _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoSource */ .gJ) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? true : false;
        }
        const strResource = this.getUriComparisonKey(resourceOrSource);
        if (this._editStacks.has(strResource)) {
            const editStack = this._editStacks.get(strResource);
            return editStack.hasFutureElements();
        }
        return false;
    }
    _tryToSplitAndRedo(strResource, element, ignoreResources, message) {
        if (element.canSplit()) {
            this._splitFutureWorkspaceElement(element, ignoreResources);
            this._notificationService.warn(message);
            return new WorkspaceVerificationError(this._redo(strResource));
        }
        else {
            // Cannot safely split this workspace element => flush all undo/redo stacks
            for (const strResource of element.strResources) {
                this.removeElements(strResource);
            }
            this._notificationService.warn(message);
            return new WorkspaceVerificationError();
        }
    }
    _checkWorkspaceRedo(strResource, element, editStackSnapshot, checkInvalidatedResources) {
        if (element.removedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.removedResources, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceRedo', comment: ['{0} is a label for an operation. {1} is another message.'] }, "Could not redo '{0}' across all files. {1}", element.label, element.removedResources.createMessage()));
        }
        if (checkInvalidatedResources && element.invalidatedResources) {
            return this._tryToSplitAndRedo(strResource, element, element.invalidatedResources, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceRedo', comment: ['{0} is a label for an operation. {1} is another message.'] }, "Could not redo '{0}' across all files. {1}", element.label, element.invalidatedResources.createMessage()));
        }
        // this must be the last future element in all the impacted resources!
        const cannotRedoDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.getClosestFutureElement() !== element) {
                cannotRedoDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotRedoDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceRedoDueToChanges', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not redo '{0}' across all files because changes were made to {1}", element.label, cannotRedoDueToResources.join(', ')));
        }
        const cannotLockDueToResources = [];
        for (const editStack of editStackSnapshot.editStacks) {
            if (editStack.locked) {
                cannotLockDueToResources.push(editStack.resourceLabel);
            }
        }
        if (cannotLockDueToResources.length > 0) {
            return this._tryToSplitAndRedo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceRedoDueToInProgressUndoRedo', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not redo '{0}' across all files because there is already an undo or redo operation running on {1}", element.label, cannotLockDueToResources.join(', ')));
        }
        // check if new stack elements were added in the meantime...
        if (!editStackSnapshot.isValid()) {
            return this._tryToSplitAndRedo(strResource, element, null, _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotWorkspaceRedoDueToInMeantimeUndoRedo', comment: ['{0} is a label for an operation. {1} is a list of filenames.'] }, "Could not redo '{0}' across all files because an undo or redo operation occurred in the meantime", element.label));
        }
        return null;
    }
    _workspaceRedo(strResource, element) {
        const affectedEditStacks = this._getAffectedEditStacks(element);
        const verificationError = this._checkWorkspaceRedo(strResource, element, affectedEditStacks, /*invalidated resources will be checked after the prepare call*/ false);
        if (verificationError) {
            return verificationError.returnValue;
        }
        return this._executeWorkspaceRedo(strResource, element, affectedEditStacks);
    }
    _executeWorkspaceRedo(strResource, element, editStackSnapshot) {
        return __awaiter(this, void 0, void 0, function* () {
            // prepare
            let cleanup;
            try {
                cleanup = yield this._invokeWorkspacePrepare(element);
            }
            catch (err) {
                return this._onError(err, element);
            }
            // At this point, it is possible that the element has been made invalid in the meantime (due to the prepare await)
            const verificationError = this._checkWorkspaceRedo(strResource, element, editStackSnapshot, /*now also check that there are no more invalidated resources*/ true);
            if (verificationError) {
                cleanup.dispose();
                return verificationError.returnValue;
            }
            for (const editStack of editStackSnapshot.editStacks) {
                editStack.moveForward(element);
            }
            return this._safeInvokeWithLocks(element, () => element.actual.redo(), editStackSnapshot, cleanup, () => this._continueRedoInGroup(element.groupId));
        });
    }
    _resourceRedo(editStack, element) {
        if (!element.isValid) {
            // invalid element => immediately flush edit stack!
            editStack.flushAllElements();
            return;
        }
        if (editStack.locked) {
            const message = _nls_js__WEBPACK_IMPORTED_MODULE_4__/* .localize */ .NC({ key: 'cannotResourceRedoDueToInProgressUndoRedo', comment: ['{0} is a label for an operation.'] }, "Could not redo '{0}' because there is already an undo or redo operation running.", element.label);
            this._notificationService.warn(message);
            return;
        }
        return this._invokeResourcePrepare(element, (cleanup) => {
            editStack.moveForward(element);
            return this._safeInvokeWithLocks(element, () => element.actual.redo(), new EditStackSnapshot([editStack]), cleanup, () => this._continueRedoInGroup(element.groupId));
        });
    }
    _findClosestRedoElementInGroup(groupId) {
        if (!groupId) {
            return [null, null];
        }
        // find another element with the same groupId and with the lowest groupOrder ready to be redone
        let matchedElement = null;
        let matchedStrResource = null;
        for (const [strResource, editStack] of this._editStacks) {
            const candidate = editStack.getClosestFutureElement();
            if (!candidate) {
                continue;
            }
            if (candidate.groupId === groupId) {
                if (!matchedElement || candidate.groupOrder < matchedElement.groupOrder) {
                    matchedElement = candidate;
                    matchedStrResource = strResource;
                }
            }
        }
        return [matchedElement, matchedStrResource];
    }
    _continueRedoInGroup(groupId) {
        if (!groupId) {
            return;
        }
        const [, matchedStrResource] = this._findClosestRedoElementInGroup(groupId);
        if (matchedStrResource) {
            return this._redo(matchedStrResource);
        }
    }
    redo(resourceOrSource) {
        if (resourceOrSource instanceof _undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .UndoRedoSource */ .gJ) {
            const [, matchedStrResource] = this._findClosestRedoElementWithSource(resourceOrSource.id);
            return matchedStrResource ? this._redo(matchedStrResource) : undefined;
        }
        if (typeof resourceOrSource === 'string') {
            return this._redo(resourceOrSource);
        }
        return this._redo(this.getUriComparisonKey(resourceOrSource));
    }
    _redo(strResource) {
        if (!this._editStacks.has(strResource)) {
            return;
        }
        const editStack = this._editStacks.get(strResource);
        const element = editStack.getClosestFutureElement();
        if (!element) {
            return;
        }
        if (element.groupId) {
            // this element is a part of a group, we need to make sure redoing in a group is in order
            const [matchedElement, matchedStrResource] = this._findClosestRedoElementInGroup(element.groupId);
            if (element !== matchedElement && matchedStrResource) {
                // there is an element in the same group that should be redone before this one
                return this._redo(matchedStrResource);
            }
        }
        try {
            if (element.type === 1 /* UndoRedoElementType.Workspace */) {
                return this._workspaceRedo(strResource, element);
            }
            else {
                return this._resourceRedo(editStack, element);
            }
        }
        finally {
            if (DEBUG) {
                this._print('redo');
            }
        }
    }
};
UndoRedoService = __decorate([
    __param(0, _dialogs_common_dialogs_js__WEBPACK_IMPORTED_MODULE_5__/* .IDialogService */ .S),
    __param(1, _notification_common_notification_js__WEBPACK_IMPORTED_MODULE_6__/* .INotificationService */ .lT)
], UndoRedoService);
class WorkspaceVerificationError {
    constructor(returnValue) {
        this.returnValue = returnValue;
    }
}
(0,_instantiation_common_extensions_js__WEBPACK_IMPORTED_MODULE_8__/* .registerSingleton */ .z)(_undoRedo_js__WEBPACK_IMPORTED_MODULE_7__/* .IUndoRedoService */ .tJ, UndoRedoService, 1 /* InstantiationType.Delayed */);


/***/ }),

/***/ 94349:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: function() { return /* binding */ WORKSPACE_EXTENSION; },
/* harmony export */   c$: function() { return /* binding */ isEmptyWorkspaceIdentifier; },
/* harmony export */   eb: function() { return /* binding */ isSingleFolderWorkspaceIdentifier; },
/* harmony export */   ec: function() { return /* binding */ IWorkspaceContextService; },
/* harmony export */   md: function() { return /* binding */ WorkspaceFolder; },
/* harmony export */   p$: function() { return /* binding */ STANDALONE_EDITOR_WORKSPACE_ID; },
/* harmony export */   uT: function() { return /* binding */ toWorkspaceIdentifier; },
/* harmony export */   x: function() { return /* binding */ isStandaloneEditorWorkspace; }
/* harmony export */ });
/* unused harmony exports EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE, UNKNOWN_EMPTY_WINDOW_WORKSPACE, isWorkspaceIdentifier, Workspace, WORKSPACE_FILTER */
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_common_path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5944);
/* harmony import */ var _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12590);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56946);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





const IWorkspaceContextService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_4__/* .createDecorator */ .yh)('contextService');
function isSingleFolderWorkspaceIdentifier(obj) {
    const singleFolderIdentifier = obj;
    return typeof (singleFolderIdentifier === null || singleFolderIdentifier === void 0 ? void 0 : singleFolderIdentifier.id) === 'string' && _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.isUri(singleFolderIdentifier.uri);
}
function isEmptyWorkspaceIdentifier(obj) {
    const emptyWorkspaceIdentifier = obj;
    return typeof (emptyWorkspaceIdentifier === null || emptyWorkspaceIdentifier === void 0 ? void 0 : emptyWorkspaceIdentifier.id) === 'string'
        && !isSingleFolderWorkspaceIdentifier(obj)
        && !isWorkspaceIdentifier(obj);
}
const EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE = { id: 'ext-dev' };
const UNKNOWN_EMPTY_WINDOW_WORKSPACE = { id: 'empty-window' };
function toWorkspaceIdentifier(arg0, isExtensionDevelopment) {
    // Empty workspace
    if (typeof arg0 === 'string' || typeof arg0 === 'undefined') {
        // With a backupPath, the basename is the empty workspace identifier
        if (typeof arg0 === 'string') {
            return {
                id: (0,_base_common_path_js__WEBPACK_IMPORTED_MODULE_1__/* .basename */ .EZ)(arg0)
            };
        }
        // Extension development empty windows have backups disabled
        // so we return a constant workspace identifier for extension
        // authors to allow to restore their workspace state even then.
        if (isExtensionDevelopment) {
            return EXTENSION_DEVELOPMENT_EMPTY_WINDOW_WORKSPACE;
        }
        return UNKNOWN_EMPTY_WINDOW_WORKSPACE;
    }
    // Multi root
    const workspace = arg0;
    if (workspace.configuration) {
        return {
            id: workspace.id,
            configPath: workspace.configuration
        };
    }
    // Single folder
    if (workspace.folders.length === 1) {
        return {
            id: workspace.id,
            uri: workspace.folders[0].uri
        };
    }
    // Empty window
    return {
        id: workspace.id
    };
}
function isWorkspaceIdentifier(obj) {
    const workspaceIdentifier = obj;
    return typeof (workspaceIdentifier === null || workspaceIdentifier === void 0 ? void 0 : workspaceIdentifier.id) === 'string' && _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.isUri(workspaceIdentifier.configPath);
}
class Workspace {
    constructor(_id, folders, _transient, _configuration, _ignorePathCasing) {
        this._id = _id;
        this._transient = _transient;
        this._configuration = _configuration;
        this._ignorePathCasing = _ignorePathCasing;
        this._foldersMap = TernarySearchTree.forUris(this._ignorePathCasing, () => true);
        this.folders = folders;
    }
    get folders() {
        return this._folders;
    }
    set folders(folders) {
        this._folders = folders;
        this.updateFoldersMap();
    }
    get id() {
        return this._id;
    }
    get transient() {
        return this._transient;
    }
    get configuration() {
        return this._configuration;
    }
    set configuration(configuration) {
        this._configuration = configuration;
    }
    getFolder(resource) {
        if (!resource) {
            return null;
        }
        return this._foldersMap.findSubstr(resource) || null;
    }
    updateFoldersMap() {
        this._foldersMap = TernarySearchTree.forUris(this._ignorePathCasing, () => true);
        for (const folder of this.folders) {
            this._foldersMap.set(folder.uri, folder);
        }
    }
    toJSON() {
        return { id: this.id, folders: this.folders, transient: this.transient, configuration: this.configuration };
    }
}
class WorkspaceFolder {
    constructor(data, 
    /**
     * Provides access to the original metadata for this workspace
     * folder. This can be different from the metadata provided in
     * this class:
     * - raw paths can be relative
     * - raw paths are not normalized
     */
    raw) {
        this.raw = raw;
        this.uri = data.uri;
        this.index = data.index;
        this.name = data.name;
    }
    toJSON() {
        return { uri: this.uri, name: this.name, index: this.index };
    }
}
const WORKSPACE_EXTENSION = 'code-workspace';
const WORKSPACE_FILTER = [{ name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC)('codeWorkspace', "Code Workspace"), extensions: [WORKSPACE_EXTENSION] }];
const STANDALONE_EDITOR_WORKSPACE_ID = '4064f6ec-cb38-4ad0-af64-ee6467e63c82';
function isStandaloneEditorWorkspace(workspace) {
    return workspace.id === STANDALONE_EDITOR_WORKSPACE_ID;
}


/***/ }),

/***/ 30321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: function() { return /* binding */ IWorkspaceTrustManagementService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IWorkspaceTrustManagementService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('workspaceTrustManagementService');


/***/ })

}]);