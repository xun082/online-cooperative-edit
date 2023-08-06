"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-a60fc1b9"],{

/***/ 39240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.quick-input-widget {\n\tposition: absolute;\n\twidth: 600px;\n\tz-index: 2550;\n\tleft: 50%;\n\tmargin-left: -300px;\n\t-webkit-app-region: no-drag;\n\tborder-radius: 6px;\n}\n\n.quick-input-titlebar {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-top-left-radius: 5px; /* match border radius of quick input widget */\n\tborder-top-right-radius: 5px;\n}\n\n.quick-input-left-action-bar {\n\tdisplay: flex;\n\tmargin-left: 4px;\n\tflex: 1;\n}\n\n.quick-input-title {\n\tpadding: 3px 0px;\n\ttext-align: center;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n\n.quick-input-right-action-bar {\n\tdisplay: flex;\n\tmargin-right: 4px;\n\tflex: 1;\n}\n\n.quick-input-right-action-bar > .actions-container {\n\tjustify-content: flex-end;\n}\n\n.quick-input-titlebar .monaco-action-bar .action-label.codicon {\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\tpadding: 2px;\n}\n\n.quick-input-description {\n\tmargin: 6px;\n}\n\n.quick-input-header .quick-input-description {\n\tmargin: 4px 2px;\n}\n\n.quick-input-header {\n\tdisplay: flex;\n\tpadding: 8px 6px 6px 6px;\n}\n\n.quick-input-widget.hidden-input .quick-input-header {\n\t/* reduce margins and paddings when input box hidden */\n\tpadding: 0;\n\tmargin-bottom: 0;\n}\n\n.quick-input-and-message {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\tmin-width: 0;\n\tposition: relative;\n}\n\n.quick-input-check-all {\n\talign-self: center;\n\tmargin: 0;\n}\n\n.quick-input-filter {\n\tflex-grow: 1;\n\tdisplay: flex;\n\tposition: relative;\n}\n\n.quick-input-box {\n\tflex-grow: 1;\n}\n\n.quick-input-widget.show-checkboxes .quick-input-box,\n.quick-input-widget.show-checkboxes .quick-input-message {\n\tmargin-left: 5px;\n}\n\n.quick-input-visible-count {\n\tposition: absolute;\n\tleft: -10000px;\n}\n\n.quick-input-count {\n\talign-self: center;\n\tposition: absolute;\n\tright: 4px;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.quick-input-count .monaco-count-badge {\n\tvertical-align: middle;\n\tpadding: 2px 4px;\n\tborder-radius: 2px;\n\tmin-height: auto;\n\tline-height: normal;\n}\n\n.quick-input-action {\n\tmargin-left: 6px;\n}\n\n.quick-input-action .monaco-text-button {\n\tfont-size: 11px;\n\tpadding: 0 6px;\n\tdisplay: flex;\n\theight: 25px;\n\talign-items: center;\n}\n\n.quick-input-message {\n\tmargin-top: -1px;\n\tpadding: 5px;\n\toverflow-wrap: break-word;\n}\n\n.quick-input-message > .codicon {\n\tmargin: 0 0.2em;\n\tvertical-align: text-bottom;\n}\n\n/* Links in descriptions & validations */\n.quick-input-message a {\n\tcolor: inherit;\n}\n\n.quick-input-progress.monaco-progress-container {\n\tposition: relative;\n}\n\n.quick-input-progress.monaco-progress-container,\n.quick-input-progress.monaco-progress-container .progress-bit {\n\theight: 2px;\n}\n\n.quick-input-list {\n\tline-height: 22px;\n}\n\n.quick-input-widget.hidden-input .quick-input-list {\n\tmargin-top: 4px; /* reduce margins when input box hidden */\n\tpadding-bottom: 4px;\n}\n\n.quick-input-list .monaco-list {\n\toverflow: hidden;\n\tmax-height: calc(20 * 22px);\n\tpadding-bottom: 5px;\n}\n\n.quick-input-list .monaco-scrollable-element {\n\tpadding: 0px 5px;\n}\n\n.quick-input-list .quick-input-list-entry {\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\tdisplay: flex;\n\theight: 100%;\n\tpadding: 0 6px;\n}\n\n.quick-input-list .quick-input-list-entry.quick-input-list-separator-border {\n\tborder-top-width: 1px;\n\tborder-top-style: solid;\n}\n\n.quick-input-list .monaco-list-row {\n\tborder-radius: 3px;\n}\n\n.quick-input-list .monaco-list-row[data-index=\"0\"] .quick-input-list-entry.quick-input-list-separator-border {\n\tborder-top-style: none;\n}\n\n.quick-input-list .quick-input-list-label {\n\toverflow: hidden;\n\tdisplay: flex;\n\theight: 100%;\n\tflex: 1;\n}\n\n.quick-input-list .quick-input-list-checkbox {\n\talign-self: center;\n\tmargin: 0;\n}\n\n.quick-input-list .quick-input-list-rows {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\tflex: 1;\n\tmargin-left: 5px;\n}\n\n.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-rows {\n\tmargin-left: 10px;\n}\n\n.quick-input-widget .quick-input-list .quick-input-list-checkbox {\n\tdisplay: none;\n}\n.quick-input-widget.show-checkboxes .quick-input-list .quick-input-list-checkbox {\n\tdisplay: inline;\n}\n\n.quick-input-list .quick-input-list-rows > .quick-input-list-row {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.quick-input-list .quick-input-list-rows > .quick-input-list-row .monaco-icon-label,\n.quick-input-list .quick-input-list-rows > .quick-input-list-row .monaco-icon-label .monaco-icon-label-container > .monaco-icon-name-container {\n\tflex: 1; /* make sure the icon label grows within the row */\n}\n\n.quick-input-list .quick-input-list-rows > .quick-input-list-row .codicon[class*='codicon-'] {\n\tvertical-align: text-bottom;\n}\n\n.quick-input-list .quick-input-list-rows .monaco-highlighted-label > span {\n\topacity: 1;\n}\n\n.quick-input-list .quick-input-list-entry .quick-input-list-entry-keybinding {\n\tmargin-right: 8px; /* separate from the separator label or scrollbar if any */\n}\n\n.quick-input-list .quick-input-list-label-meta {\n\topacity: 0.7;\n\tline-height: normal;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n}\n\n.quick-input-list .monaco-highlighted-label .highlight {\n\tfont-weight: bold;\n}\n\n.quick-input-list .quick-input-list-entry .quick-input-list-separator {\n\tmargin-right: 4px; /* separate from keybindings or actions */\n}\n\n.quick-input-list .quick-input-list-entry-action-bar {\n\tdisplay: flex;\n\tflex: 0;\n\toverflow: visible;\n}\n\n.quick-input-list .quick-input-list-entry-action-bar .action-label {\n\t/*\n\t * By default, actions in the quick input action bar are hidden\n\t * until hovered over them or selected.\n\t */\n\tdisplay: none;\n}\n\n.quick-input-list .quick-input-list-entry-action-bar .action-label.codicon {\n\tmargin-right: 4px;\n\tpadding: 0px 2px 2px 2px;\n}\n\n.quick-input-list .quick-input-list-entry-action-bar {\n\tmargin-top: 1px;\n}\n\n.quick-input-list .quick-input-list-entry-action-bar {\n\tmargin-right: 4px; /* separate from scrollbar */\n}\n\n.quick-input-list .quick-input-list-entry .quick-input-list-entry-action-bar .action-label.always-visible,\n.quick-input-list .quick-input-list-entry:hover .quick-input-list-entry-action-bar .action-label,\n.quick-input-list .monaco-list-row.focused .quick-input-list-entry-action-bar .action-label {\n\tdisplay: flex;\n}\n\n/* focused items in quick pick */\n.quick-input-list .monaco-list-row.focused .monaco-keybinding-key,\n.quick-input-list .monaco-list-row.focused .quick-input-list-entry .quick-input-list-separator {\n\tcolor: inherit\n}\n.quick-input-list .monaco-list-row.focused .monaco-keybinding-key {\n\tbackground: none;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .zone-widget .codicon.codicon-error,\n.markers-panel .marker-icon.error, .markers-panel .marker-icon .codicon.codicon-error,\n.text-search-provider-messages .providerMessage .codicon.codicon-error,\n.extensions-viewlet > .extensions .codicon.codicon-error,\n.extension-editor .codicon.codicon-error,\n.preferences-editor .codicon.codicon-error {\n\tcolor: var(--vscode-problemsErrorIcon-foreground);\n}\n\n.monaco-editor .zone-widget .codicon.codicon-warning,\n.markers-panel .marker-icon.warning, .markers-panel .marker-icon .codicon.codicon-warning,\n.text-search-provider-messages .providerMessage .codicon.codicon-warning,\n.extensions-viewlet > .extensions .codicon.codicon-warning,\n.extension-editor .codicon.codicon-warning,\n.preferences-editor .codicon.codicon-warning {\n\tcolor: var(--vscode-problemsWarningIcon-foreground);\n}\n\n.monaco-editor .zone-widget .codicon.codicon-info,\n.markers-panel .marker-icon.info, .markers-panel .marker-icon .codicon.codicon-info,\n.text-search-provider-messages .providerMessage .codicon.codicon-info,\n.extensions-viewlet > .extensions .codicon.codicon-info,\n.extension-editor .codicon.codicon-info,\n.preferences-editor .codicon.codicon-info {\n\tcolor: var(--vscode-problemsInfoIcon-foreground);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 99871:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ex: function() { return /* binding */ Progress; },
/* harmony export */   R9: function() { return /* binding */ IProgressService; },
/* harmony export */   ek: function() { return /* binding */ IEditorProgressService; }
/* harmony export */ });
/* unused harmony export emptyProgressRunner */
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);

const IProgressService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('progressService');
const emptyProgressRunner = Object.freeze({
    total() { },
    worked() { },
    done() { }
});
class Progress {
    constructor(callback) {
        this.callback = callback;
    }
    report(item) {
        this._value = item;
        this.callback(this._value);
    }
}
Progress.None = Object.freeze({ report() { } });
const IEditorProgressService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('editorProgressService');


/***/ }),

/***/ 45080:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ AbstractCommandsQuickAccessProvider; }
});

// UNUSED EXPORTS: CommandsHistory

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errorMessage.js
var errorMessage = __webpack_require__(680);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/filters.js
var filters = __webpack_require__(90256);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/map.js
var map = __webpack_require__(17795);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/commands/common/commands.js
var commands = __webpack_require__(77783);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/configuration/common/configuration.js
var configuration = __webpack_require__(33022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/dialogs/common/dialogs.js
var dialogs = __webpack_require__(14547);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/pickerQuickAccess.js
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




var TriggerAction;
(function (TriggerAction) {
    /**
     * Do nothing after the button was clicked.
     */
    TriggerAction[TriggerAction["NO_ACTION"] = 0] = "NO_ACTION";
    /**
     * Close the picker.
     */
    TriggerAction[TriggerAction["CLOSE_PICKER"] = 1] = "CLOSE_PICKER";
    /**
     * Update the results of the picker.
     */
    TriggerAction[TriggerAction["REFRESH_PICKER"] = 2] = "REFRESH_PICKER";
    /**
     * Remove the item from the picker.
     */
    TriggerAction[TriggerAction["REMOVE_ITEM"] = 3] = "REMOVE_ITEM";
})(TriggerAction || (TriggerAction = {}));
function isPicksWithActive(obj) {
    const candidate = obj;
    return Array.isArray(candidate.items);
}
function isFastAndSlowPicks(obj) {
    const candidate = obj;
    return !!candidate.picks && candidate.additionalPicks instanceof Promise;
}
class PickerQuickAccessProvider extends lifecycle/* Disposable */.JT {
    constructor(prefix, options) {
        super();
        this.prefix = prefix;
        this.options = options;
    }
    provide(picker, token, runOptions) {
        var _a;
        const disposables = new lifecycle/* DisposableStore */.SL();
        // Apply options if any
        picker.canAcceptInBackground = !!((_a = this.options) === null || _a === void 0 ? void 0 : _a.canAcceptInBackground);
        // Disable filtering & sorting, we control the results
        picker.matchOnLabel = picker.matchOnDescription = picker.matchOnDetail = picker.sortByLabel = false;
        // Set initial picks and update on type
        let picksCts = undefined;
        const picksDisposable = disposables.add(new lifecycle/* MutableDisposable */.XK());
        const updatePickerItems = () => __awaiter(this, void 0, void 0, function* () {
            const picksDisposables = picksDisposable.value = new lifecycle/* DisposableStore */.SL();
            // Cancel any previous ask for picks and busy
            picksCts === null || picksCts === void 0 ? void 0 : picksCts.dispose(true);
            picker.busy = false;
            // Create new cancellation source for this run
            picksCts = new cancellation/* CancellationTokenSource */.A(token);
            // Collect picks and support both long running and short or combined
            const picksToken = picksCts.token;
            const picksFilter = picker.value.substr(this.prefix.length).trim();
            const providedPicks = this._getPicks(picksFilter, picksDisposables, picksToken, runOptions);
            const applyPicks = (picks, skipEmpty) => {
                var _a;
                let items;
                let activeItem = undefined;
                if (isPicksWithActive(picks)) {
                    items = picks.items;
                    activeItem = picks.active;
                }
                else {
                    items = picks;
                }
                if (items.length === 0) {
                    if (skipEmpty) {
                        return false;
                    }
                    // We show the no results pick if we have no input to prevent completely empty pickers #172613
                    if ((picksFilter.length > 0 || picker.hideInput) && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.noResultsPick)) {
                        if ((0,types/* isFunction */.mf)(this.options.noResultsPick)) {
                            items = [this.options.noResultsPick(picksFilter)];
                        }
                        else {
                            items = [this.options.noResultsPick];
                        }
                    }
                }
                picker.items = items;
                if (activeItem) {
                    picker.activeItems = [activeItem];
                }
                return true;
            };
            const applyFastAndSlowPicks = (fastAndSlowPicks) => __awaiter(this, void 0, void 0, function* () {
                let fastPicksApplied = false;
                let slowPicksApplied = false;
                yield Promise.all([
                    // Fast Picks: if `mergeDelay` is configured, in order to reduce
                    // amount of flicker, we race against the slow picks over some delay
                    // and then set the fast picks.
                    // If the slow picks are faster, we reduce the flicker by only
                    // setting the items once.
                    (() => __awaiter(this, void 0, void 0, function* () {
                        if (typeof fastAndSlowPicks.mergeDelay === 'number') {
                            yield (0,common_async/* timeout */.Vs)(fastAndSlowPicks.mergeDelay);
                            if (picksToken.isCancellationRequested) {
                                return;
                            }
                        }
                        if (!slowPicksApplied) {
                            fastPicksApplied = applyPicks(fastAndSlowPicks.picks, true /* skip over empty to reduce flicker */);
                        }
                    }))(),
                    // Slow Picks: we await the slow picks and then set them at
                    // once together with the fast picks, but only if we actually
                    // have additional results.
                    (() => __awaiter(this, void 0, void 0, function* () {
                        picker.busy = true;
                        try {
                            const awaitedAdditionalPicks = yield fastAndSlowPicks.additionalPicks;
                            if (picksToken.isCancellationRequested) {
                                return;
                            }
                            let picks;
                            let activePick = undefined;
                            if (isPicksWithActive(fastAndSlowPicks.picks)) {
                                picks = fastAndSlowPicks.picks.items;
                                activePick = fastAndSlowPicks.picks.active;
                            }
                            else {
                                picks = fastAndSlowPicks.picks;
                            }
                            let additionalPicks;
                            let additionalActivePick = undefined;
                            if (isPicksWithActive(awaitedAdditionalPicks)) {
                                additionalPicks = awaitedAdditionalPicks.items;
                                additionalActivePick = awaitedAdditionalPicks.active;
                            }
                            else {
                                additionalPicks = awaitedAdditionalPicks;
                            }
                            if (additionalPicks.length > 0 || !fastPicksApplied) {
                                // If we do not have any activePick or additionalActivePick
                                // we try to preserve the currently active pick from the
                                // fast results. This fixes an issue where the user might
                                // have made a pick active before the additional results
                                // kick in.
                                // See https://github.com/microsoft/vscode/issues/102480
                                let fallbackActivePick = undefined;
                                if (!activePick && !additionalActivePick) {
                                    const fallbackActivePickCandidate = picker.activeItems[0];
                                    if (fallbackActivePickCandidate && picks.indexOf(fallbackActivePickCandidate) !== -1) {
                                        fallbackActivePick = fallbackActivePickCandidate;
                                    }
                                }
                                applyPicks({
                                    items: [...picks, ...additionalPicks],
                                    active: activePick || additionalActivePick || fallbackActivePick
                                });
                            }
                        }
                        finally {
                            if (!picksToken.isCancellationRequested) {
                                picker.busy = false;
                            }
                            slowPicksApplied = true;
                        }
                    }))()
                ]);
            });
            // No Picks
            if (providedPicks === null) {
                // Ignore
            }
            // Fast and Slow Picks
            else if (isFastAndSlowPicks(providedPicks)) {
                yield applyFastAndSlowPicks(providedPicks);
            }
            // Fast Picks
            else if (!(providedPicks instanceof Promise)) {
                applyPicks(providedPicks);
            }
            // Slow Picks
            else {
                picker.busy = true;
                try {
                    const awaitedPicks = yield providedPicks;
                    if (picksToken.isCancellationRequested) {
                        return;
                    }
                    if (isFastAndSlowPicks(awaitedPicks)) {
                        yield applyFastAndSlowPicks(awaitedPicks);
                    }
                    else {
                        applyPicks(awaitedPicks);
                    }
                }
                finally {
                    if (!picksToken.isCancellationRequested) {
                        picker.busy = false;
                    }
                }
            }
        });
        disposables.add(picker.onDidChangeValue(() => updatePickerItems()));
        updatePickerItems();
        // Accept the pick on accept and hide picker
        disposables.add(picker.onDidAccept(event => {
            const [item] = picker.selectedItems;
            if (typeof (item === null || item === void 0 ? void 0 : item.accept) === 'function') {
                if (!event.inBackground) {
                    picker.hide(); // hide picker unless we accept in background
                }
                item.accept(picker.keyMods, event);
            }
        }));
        // Trigger the pick with button index if button triggered
        disposables.add(picker.onDidTriggerItemButton(({ button, item }) => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            if (typeof item.trigger === 'function') {
                const buttonIndex = (_c = (_b = item.buttons) === null || _b === void 0 ? void 0 : _b.indexOf(button)) !== null && _c !== void 0 ? _c : -1;
                if (buttonIndex >= 0) {
                    const result = item.trigger(buttonIndex, picker.keyMods);
                    const action = (typeof result === 'number') ? result : yield result;
                    if (token.isCancellationRequested) {
                        return;
                    }
                    switch (action) {
                        case TriggerAction.NO_ACTION:
                            break;
                        case TriggerAction.CLOSE_PICKER:
                            picker.hide();
                            break;
                        case TriggerAction.REFRESH_PICKER:
                            updatePickerItems();
                            break;
                        case TriggerAction.REMOVE_ITEM: {
                            const index = picker.items.indexOf(item);
                            if (index !== -1) {
                                const items = picker.items.slice();
                                const removed = items.splice(index, 1);
                                const activeItems = picker.activeItems.filter(activeItem => activeItem !== removed[0]);
                                const keepScrollPositionBefore = picker.keepScrollPosition;
                                picker.keepScrollPosition = true;
                                picker.items = items;
                                if (activeItems) {
                                    picker.activeItems = activeItems;
                                }
                                picker.keepScrollPosition = keepScrollPositionBefore;
                            }
                            break;
                        }
                    }
                }
            }
        })));
        return disposables;
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/storage/common/storage.js
var storage = __webpack_require__(81358);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js
var telemetry = __webpack_require__(72209);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/commandsQuickAccess.js
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
var commandsQuickAccess_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















let AbstractCommandsQuickAccessProvider = class AbstractCommandsQuickAccessProvider extends PickerQuickAccessProvider {
    constructor(options, instantiationService, keybindingService, commandService, telemetryService, dialogService) {
        super(AbstractCommandsQuickAccessProvider.PREFIX, options);
        this.instantiationService = instantiationService;
        this.keybindingService = keybindingService;
        this.commandService = commandService;
        this.telemetryService = telemetryService;
        this.dialogService = dialogService;
        this.commandsHistory = this._register(this.instantiationService.createInstance(CommandsHistory));
        this.options = options;
    }
    _getPicks(filter, _disposables, token, runOptions) {
        var _a, _b;
        return commandsQuickAccess_awaiter(this, void 0, void 0, function* () {
            // Ask subclass for all command picks
            const allCommandPicks = yield this.getCommandPicks(token);
            if (token.isCancellationRequested) {
                return [];
            }
            // Filter
            const filteredCommandPicks = [];
            for (const commandPick of allCommandPicks) {
                const labelHighlights = (0,types/* withNullAsUndefined */.f6)(AbstractCommandsQuickAccessProvider.WORD_FILTER(filter, commandPick.label));
                const aliasHighlights = commandPick.commandAlias ? (0,types/* withNullAsUndefined */.f6)(AbstractCommandsQuickAccessProvider.WORD_FILTER(filter, commandPick.commandAlias)) : undefined;
                // Add if matching in label or alias
                if (labelHighlights || aliasHighlights) {
                    commandPick.highlights = {
                        label: labelHighlights,
                        detail: this.options.showAlias ? aliasHighlights : undefined
                    };
                    filteredCommandPicks.push(commandPick);
                }
                // Also add if we have a 100% command ID match
                else if (filter === commandPick.commandId) {
                    filteredCommandPicks.push(commandPick);
                }
            }
            // Add description to commands that have duplicate labels
            const mapLabelToCommand = new Map();
            for (const commandPick of filteredCommandPicks) {
                const existingCommandForLabel = mapLabelToCommand.get(commandPick.label);
                if (existingCommandForLabel) {
                    commandPick.description = commandPick.commandId;
                    existingCommandForLabel.description = existingCommandForLabel.commandId;
                }
                else {
                    mapLabelToCommand.set(commandPick.label, commandPick);
                }
            }
            // Sort by MRU order and fallback to name otherwise
            filteredCommandPicks.sort((commandPickA, commandPickB) => {
                const commandACounter = this.commandsHistory.peek(commandPickA.commandId);
                const commandBCounter = this.commandsHistory.peek(commandPickB.commandId);
                if (commandACounter && commandBCounter) {
                    return commandACounter > commandBCounter ? -1 : 1; // use more recently used command before older
                }
                if (commandACounter) {
                    return -1; // first command was used, so it wins over the non used one
                }
                if (commandBCounter) {
                    return 1; // other command was used so it wins over the command
                }
                if (this.options.suggestedCommandIds) {
                    const commandASuggestion = this.options.suggestedCommandIds.has(commandPickA.commandId);
                    const commandBSuggestion = this.options.suggestedCommandIds.has(commandPickB.commandId);
                    if (commandASuggestion && commandBSuggestion) {
                        return 0; // honor the order of the array
                    }
                    if (commandASuggestion) {
                        return -1; // first command was suggested, so it wins over the non suggested one
                    }
                    if (commandBSuggestion) {
                        return 1; // other command was suggested so it wins over the command
                    }
                }
                // both commands were never used, so we sort by name
                return commandPickA.label.localeCompare(commandPickB.label);
            });
            const commandPicks = [];
            let addOtherSeparator = false;
            let addCommonlyUsedSeparator = !!this.options.suggestedCommandIds;
            for (let i = 0; i < filteredCommandPicks.length; i++) {
                const commandPick = filteredCommandPicks[i];
                // Separator: recently used
                if (i === 0 && this.commandsHistory.peek(commandPick.commandId)) {
                    commandPicks.push({ type: 'separator', label: (0,nls/* localize */.NC)('recentlyUsed', "recently used") });
                    addOtherSeparator = true;
                }
                // Separator: commonly used
                if (addCommonlyUsedSeparator && !this.commandsHistory.peek(commandPick.commandId) && ((_a = this.options.suggestedCommandIds) === null || _a === void 0 ? void 0 : _a.has(commandPick.commandId))) {
                    commandPicks.push({ type: 'separator', label: (0,nls/* localize */.NC)('commonlyUsed', "commonly used") });
                    addOtherSeparator = true;
                    addCommonlyUsedSeparator = false;
                }
                // Separator: other commands
                if (addOtherSeparator && !this.commandsHistory.peek(commandPick.commandId) && !((_b = this.options.suggestedCommandIds) === null || _b === void 0 ? void 0 : _b.has(commandPick.commandId))) {
                    commandPicks.push({ type: 'separator', label: (0,nls/* localize */.NC)('morecCommands', "other commands") });
                    addOtherSeparator = false;
                }
                // Command
                commandPicks.push(this.toCommandPick(commandPick, runOptions));
            }
            if (!this.hasAdditionalCommandPicks(filter, token)) {
                return commandPicks;
            }
            return {
                picks: commandPicks,
                additionalPicks: (() => commandsQuickAccess_awaiter(this, void 0, void 0, function* () {
                    const additionalCommandPicks = yield this.getAdditionalCommandPicks(allCommandPicks, filteredCommandPicks, filter, token);
                    if (token.isCancellationRequested) {
                        return [];
                    }
                    return additionalCommandPicks.map(commandPick => this.toCommandPick(commandPick, runOptions));
                }))()
            };
        });
    }
    toCommandPick(commandPick, runOptions) {
        if (commandPick.type === 'separator') {
            return commandPick;
        }
        const keybinding = this.keybindingService.lookupKeybinding(commandPick.commandId);
        const ariaLabel = keybinding ?
            (0,nls/* localize */.NC)('commandPickAriaLabelWithKeybinding', "{0}, {1}", commandPick.label, keybinding.getAriaLabel()) :
            commandPick.label;
        return Object.assign(Object.assign({}, commandPick), { ariaLabel, detail: this.options.showAlias && commandPick.commandAlias !== commandPick.label ? commandPick.commandAlias : undefined, keybinding, accept: () => commandsQuickAccess_awaiter(this, void 0, void 0, function* () {
                var _a;
                // Add to history
                this.commandsHistory.push(commandPick.commandId);
                // Telementry
                this.telemetryService.publicLog2('workbenchActionExecuted', {
                    id: commandPick.commandId,
                    from: (_a = runOptions === null || runOptions === void 0 ? void 0 : runOptions.from) !== null && _a !== void 0 ? _a : 'quick open'
                });
                // Run
                try {
                    yield this.commandService.executeCommand(commandPick.commandId);
                }
                catch (error) {
                    if (!(0,errors/* isCancellationError */.n2)(error)) {
                        this.dialogService.error((0,nls/* localize */.NC)('canNotRun', "Command '{0}' resulted in an error", commandPick.label), (0,errorMessage/* toErrorMessage */.y)(error));
                    }
                }
            }) });
    }
};
AbstractCommandsQuickAccessProvider.PREFIX = '>';
AbstractCommandsQuickAccessProvider.WORD_FILTER = (0,filters.or)(filters/* matchesPrefix */.Ji, filters/* matchesWords */.KZ, filters/* matchesContiguousSubString */.ir);
AbstractCommandsQuickAccessProvider = __decorate([
    __param(1, instantiation/* IInstantiationService */.TG),
    __param(2, keybinding/* IKeybindingService */.d),
    __param(3, commands/* ICommandService */.H),
    __param(4, telemetry/* ITelemetryService */.b),
    __param(5, dialogs/* IDialogService */.S)
], AbstractCommandsQuickAccessProvider);
let CommandsHistory = class CommandsHistory extends lifecycle/* Disposable */.JT {
    constructor(storageService, configurationService) {
        super();
        this.storageService = storageService;
        this.configurationService = configurationService;
        this.configuredCommandsHistoryLength = 0;
        this.updateConfiguration();
        this.load();
        this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration(e => this.updateConfiguration(e)));
    }
    updateConfiguration(e) {
        if (e && !e.affectsConfiguration('workbench.commandPalette.history')) {
            return;
        }
        this.configuredCommandsHistoryLength = CommandsHistory.getConfiguredCommandHistoryLength(this.configurationService);
        if (CommandsHistory.cache && CommandsHistory.cache.limit !== this.configuredCommandsHistoryLength) {
            CommandsHistory.cache.limit = this.configuredCommandsHistoryLength;
            CommandsHistory.saveState(this.storageService);
        }
    }
    load() {
        const raw = this.storageService.get(CommandsHistory.PREF_KEY_CACHE, 0 /* StorageScope.PROFILE */);
        let serializedCache;
        if (raw) {
            try {
                serializedCache = JSON.parse(raw);
            }
            catch (error) {
                // invalid data
            }
        }
        const cache = CommandsHistory.cache = new map/* LRUCache */.z6(this.configuredCommandsHistoryLength, 1);
        if (serializedCache) {
            let entries;
            if (serializedCache.usesLRU) {
                entries = serializedCache.entries;
            }
            else {
                entries = serializedCache.entries.sort((a, b) => a.value - b.value);
            }
            entries.forEach(entry => cache.set(entry.key, entry.value));
        }
        CommandsHistory.counter = this.storageService.getNumber(CommandsHistory.PREF_KEY_COUNTER, 0 /* StorageScope.PROFILE */, CommandsHistory.counter);
    }
    push(commandId) {
        if (!CommandsHistory.cache) {
            return;
        }
        CommandsHistory.cache.set(commandId, CommandsHistory.counter++); // set counter to command
        CommandsHistory.saveState(this.storageService);
    }
    peek(commandId) {
        var _a;
        return (_a = CommandsHistory.cache) === null || _a === void 0 ? void 0 : _a.peek(commandId);
    }
    static saveState(storageService) {
        if (!CommandsHistory.cache) {
            return;
        }
        const serializedCache = { usesLRU: true, entries: [] };
        CommandsHistory.cache.forEach((value, key) => serializedCache.entries.push({ key, value }));
        storageService.store(CommandsHistory.PREF_KEY_CACHE, JSON.stringify(serializedCache), 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
        storageService.store(CommandsHistory.PREF_KEY_COUNTER, CommandsHistory.counter, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
    }
    static getConfiguredCommandHistoryLength(configurationService) {
        var _a, _b;
        const config = configurationService.getValue();
        const configuredCommandHistoryLength = (_b = (_a = config.workbench) === null || _a === void 0 ? void 0 : _a.commandPalette) === null || _b === void 0 ? void 0 : _b.history;
        if (typeof configuredCommandHistoryLength === 'number') {
            return configuredCommandHistoryLength;
        }
        return CommandsHistory.DEFAULT_COMMANDS_HISTORY_LENGTH;
    }
};
CommandsHistory.DEFAULT_COMMANDS_HISTORY_LENGTH = 50;
CommandsHistory.PREF_KEY_CACHE = 'commandPalette.mru.cache';
CommandsHistory.PREF_KEY_COUNTER = 'commandPalette.mru.counter';
CommandsHistory.counter = 1;
CommandsHistory = __decorate([
    __param(0, storage/* IStorageService */.Uy),
    __param(1, configuration/* IConfigurationService */.Ui)
], CommandsHistory);


/***/ }),

/***/ 21835:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ HelpQuickAccessProvider; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72015);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19267);
/* harmony import */ var _common_quickAccess_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39913);
/* harmony import */ var _common_quickInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71130);
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






let HelpQuickAccessProvider = class HelpQuickAccessProvider {
    constructor(quickInputService, keybindingService) {
        this.quickInputService = quickInputService;
        this.keybindingService = keybindingService;
        this.registry = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .Registry */ .B.as(_common_quickAccess_js__WEBPACK_IMPORTED_MODULE_4__/* .Extensions */ .IP.Quickaccess);
    }
    provide(picker) {
        const disposables = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .DisposableStore */ .SL();
        // Open a picker with the selected value if picked
        disposables.add(picker.onDidAccept(() => {
            const [item] = picker.selectedItems;
            if (item) {
                this.quickInputService.quickAccess.show(item.prefix, { preserveValue: true });
            }
        }));
        // Also open a picker when we detect the user typed the exact
        // name of a provider (e.g. `?term` for terminals)
        disposables.add(picker.onDidChangeValue(value => {
            const providerDescriptor = this.registry.getQuickAccessProvider(value.substr(HelpQuickAccessProvider.PREFIX.length));
            if (providerDescriptor && providerDescriptor.prefix && providerDescriptor.prefix !== HelpQuickAccessProvider.PREFIX) {
                this.quickInputService.quickAccess.show(providerDescriptor.prefix, { preserveValue: true });
            }
        }));
        // Fill in all providers
        picker.items = this.getQuickAccessProviders().filter(p => p.prefix !== HelpQuickAccessProvider.PREFIX);
        return disposables;
    }
    getQuickAccessProviders() {
        const providers = this.registry
            .getQuickAccessProviders()
            .sort((providerA, providerB) => providerA.prefix.localeCompare(providerB.prefix))
            .flatMap(provider => this.createPicks(provider));
        return providers;
    }
    createPicks(provider) {
        return provider.helpEntries.map(helpEntry => {
            const prefix = helpEntry.prefix || provider.prefix;
            const label = prefix || '\u2026' /* ... */;
            return {
                prefix,
                label,
                keybinding: helpEntry.commandId ? this.keybindingService.lookupKeybinding(helpEntry.commandId) : undefined,
                ariaLabel: (0,_nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC)('helpPickAriaLabel', "{0}, {1}", label, helpEntry.description),
                description: helpEntry.description
            };
        });
    }
};
HelpQuickAccessProvider.PREFIX = '?';
HelpQuickAccessProvider = __decorate([
    __param(0, _common_quickInput_js__WEBPACK_IMPORTED_MODULE_5__/* .IQuickInputService */ .eJ),
    __param(1, _keybinding_common_keybinding_js__WEBPACK_IMPORTED_MODULE_3__/* .IKeybindingService */ .d)
], HelpQuickAccessProvider);


/***/ }),

/***/ 86838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: function() { return /* binding */ QuickInputService; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/cancellation.js
var cancellation = __webpack_require__(29811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/layout/browser/layoutService.js
var layoutService = __webpack_require__(12732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/list/browser/listService.js
var listService = __webpack_require__(57238);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/opener/common/opener.js
var common_opener = __webpack_require__(38876);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/async.js
var common_async = __webpack_require__(72432);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/functional.js
var functional = __webpack_require__(9429);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/common/quickAccess.js
var quickAccess = __webpack_require__(39913);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/common/quickInput.js
var quickInput = __webpack_require__(71130);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/registry/common/platform.js
var platform = __webpack_require__(72015);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickAccess.js
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








let QuickAccessController = class QuickAccessController extends lifecycle/* Disposable */.JT {
    constructor(quickInputService, instantiationService) {
        super();
        this.quickInputService = quickInputService;
        this.instantiationService = instantiationService;
        this.registry = platform/* Registry */.B.as(quickAccess/* Extensions */.IP.Quickaccess);
        this.mapProviderToDescriptor = new Map();
        this.lastAcceptedPickerValues = new Map();
        this.visibleQuickAccess = undefined;
    }
    show(value = '', options) {
        this.doShowOrPick(value, false, options);
    }
    doShowOrPick(value, pick, options) {
        var _a;
        // Find provider for the value to show
        const [provider, descriptor] = this.getOrInstantiateProvider(value);
        // Return early if quick access is already showing on that same prefix
        const visibleQuickAccess = this.visibleQuickAccess;
        const visibleDescriptor = visibleQuickAccess === null || visibleQuickAccess === void 0 ? void 0 : visibleQuickAccess.descriptor;
        if (visibleQuickAccess && descriptor && visibleDescriptor === descriptor) {
            // Apply value only if it is more specific than the prefix
            // from the provider and we are not instructed to preserve
            if (value !== descriptor.prefix && !(options === null || options === void 0 ? void 0 : options.preserveValue)) {
                visibleQuickAccess.picker.value = value;
            }
            // Always adjust selection
            this.adjustValueSelection(visibleQuickAccess.picker, descriptor, options);
            return;
        }
        // Rewrite the filter value based on certain rules unless disabled
        if (descriptor && !(options === null || options === void 0 ? void 0 : options.preserveValue)) {
            let newValue = undefined;
            // If we have a visible provider with a value, take it's filter value but
            // rewrite to new provider prefix in case they differ
            if (visibleQuickAccess && visibleDescriptor && visibleDescriptor !== descriptor) {
                const newValueCandidateWithoutPrefix = visibleQuickAccess.value.substr(visibleDescriptor.prefix.length);
                if (newValueCandidateWithoutPrefix) {
                    newValue = `${descriptor.prefix}${newValueCandidateWithoutPrefix}`;
                }
            }
            // Otherwise, take a default value as instructed
            if (!newValue) {
                const defaultFilterValue = provider === null || provider === void 0 ? void 0 : provider.defaultFilterValue;
                if (defaultFilterValue === quickAccess/* DefaultQuickAccessFilterValue */.Ry.LAST) {
                    newValue = this.lastAcceptedPickerValues.get(descriptor);
                }
                else if (typeof defaultFilterValue === 'string') {
                    newValue = `${descriptor.prefix}${defaultFilterValue}`;
                }
            }
            if (typeof newValue === 'string') {
                value = newValue;
            }
        }
        // Create a picker for the provider to use with the initial value
        // and adjust the filtering to exclude the prefix from filtering
        const disposables = new lifecycle/* DisposableStore */.SL();
        const picker = disposables.add(this.quickInputService.createQuickPick());
        picker.value = value;
        this.adjustValueSelection(picker, descriptor, options);
        picker.placeholder = descriptor === null || descriptor === void 0 ? void 0 : descriptor.placeholder;
        picker.quickNavigate = options === null || options === void 0 ? void 0 : options.quickNavigateConfiguration;
        picker.hideInput = !!picker.quickNavigate && !visibleQuickAccess; // only hide input if there was no picker opened already
        if (typeof (options === null || options === void 0 ? void 0 : options.itemActivation) === 'number' || (options === null || options === void 0 ? void 0 : options.quickNavigateConfiguration)) {
            picker.itemActivation = (_a = options === null || options === void 0 ? void 0 : options.itemActivation) !== null && _a !== void 0 ? _a : quickInput/* ItemActivation */.jG.SECOND /* quick nav is always second */;
        }
        picker.contextKey = descriptor === null || descriptor === void 0 ? void 0 : descriptor.contextKey;
        picker.filterValue = (value) => value.substring(descriptor ? descriptor.prefix.length : 0);
        // Pick mode: setup a promise that can be resolved
        // with the selected items and prevent execution
        let pickPromise = undefined;
        if (pick) {
            pickPromise = new common_async/* DeferredPromise */.CR();
            disposables.add((0,functional/* once */.I)(picker.onWillAccept)(e => {
                e.veto();
                picker.hide();
            }));
        }
        // Register listeners
        disposables.add(this.registerPickerListeners(picker, provider, descriptor, value, options === null || options === void 0 ? void 0 : options.providerOptions));
        // Ask provider to fill the picker as needed if we have one
        // and pass over a cancellation token that will indicate when
        // the picker is hiding without a pick being made.
        const cts = disposables.add(new cancellation/* CancellationTokenSource */.A());
        if (provider) {
            disposables.add(provider.provide(picker, cts.token, options === null || options === void 0 ? void 0 : options.providerOptions));
        }
        // Finally, trigger disposal and cancellation when the picker
        // hides depending on items selected or not.
        (0,functional/* once */.I)(picker.onDidHide)(() => {
            if (picker.selectedItems.length === 0) {
                cts.cancel();
            }
            // Start to dispose once picker hides
            disposables.dispose();
            // Resolve pick promise with selected items
            pickPromise === null || pickPromise === void 0 ? void 0 : pickPromise.complete(picker.selectedItems.slice(0));
        });
        // Finally, show the picker. This is important because a provider
        // may not call this and then our disposables would leak that rely
        // on the onDidHide event.
        picker.show();
        // Pick mode: return with promise
        if (pick) {
            return pickPromise === null || pickPromise === void 0 ? void 0 : pickPromise.p;
        }
    }
    adjustValueSelection(picker, descriptor, options) {
        var _a;
        let valueSelection;
        // Preserve: just always put the cursor at the end
        if (options === null || options === void 0 ? void 0 : options.preserveValue) {
            valueSelection = [picker.value.length, picker.value.length];
        }
        // Otherwise: select the value up until the prefix
        else {
            valueSelection = [(_a = descriptor === null || descriptor === void 0 ? void 0 : descriptor.prefix.length) !== null && _a !== void 0 ? _a : 0, picker.value.length];
        }
        picker.valueSelection = valueSelection;
    }
    registerPickerListeners(picker, provider, descriptor, value, providerOptions) {
        const disposables = new lifecycle/* DisposableStore */.SL();
        // Remember as last visible picker and clean up once picker get's disposed
        const visibleQuickAccess = this.visibleQuickAccess = { picker, descriptor, value };
        disposables.add((0,lifecycle/* toDisposable */.OF)(() => {
            if (visibleQuickAccess === this.visibleQuickAccess) {
                this.visibleQuickAccess = undefined;
            }
        }));
        // Whenever the value changes, check if the provider has
        // changed and if so - re-create the picker from the beginning
        disposables.add(picker.onDidChangeValue(value => {
            const [providerForValue] = this.getOrInstantiateProvider(value);
            if (providerForValue !== provider) {
                this.show(value, {
                    // do not rewrite value from user typing!
                    preserveValue: true,
                    // persist the value of the providerOptions from the original showing
                    providerOptions
                });
            }
            else {
                visibleQuickAccess.value = value; // remember the value in our visible one
            }
        }));
        // Remember picker input for future use when accepting
        if (descriptor) {
            disposables.add(picker.onDidAccept(() => {
                this.lastAcceptedPickerValues.set(descriptor, picker.value);
            }));
        }
        return disposables;
    }
    getOrInstantiateProvider(value) {
        const providerDescriptor = this.registry.getQuickAccessProvider(value);
        if (!providerDescriptor) {
            return [undefined, undefined];
        }
        let provider = this.mapProviderToDescriptor.get(providerDescriptor);
        if (!provider) {
            provider = this.instantiationService.createInstance(providerDescriptor.ctor);
            this.mapProviderToDescriptor.set(providerDescriptor, provider);
        }
        return [provider, providerDescriptor];
    }
};
QuickAccessController = __decorate([
    __param(0, quickInput/* IQuickInputService */.eJ),
    __param(1, instantiation/* IInstantiationService */.TG)
], QuickAccessController);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js
var defaultStyles = __webpack_require__(89408);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
var colorRegistry = __webpack_require__(3561);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/common/themeService.js
var themeService = __webpack_require__(31754);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/keyboardEvent.js
var browser_keyboardEvent = __webpack_require__(55022);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/actionbar/actionbar.js
var actionbar = __webpack_require__(96653);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/button/button.js + 1 modules
var button_button = __webpack_require__(48655);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/countBadge/countBadge.js + 1 modules
var countBadge = __webpack_require__(51188);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/progressbar/progressbar.js + 1 modules
var progressbar = __webpack_require__(9155);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/toggle/toggle.js + 1 modules
var toggle = __webpack_require__(75200);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var actions = __webpack_require__(1585);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(33899);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var common_platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/severity.js
var common_severity = __webpack_require__(92380);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/types.js
var types = __webpack_require__(28935);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/media/quickInput.css
var media_quickInput = __webpack_require__(39240);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/media/quickInput.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(media_quickInput/* default */.Z, options);




       /* harmony default export */ var browser_media_quickInput = (media_quickInput/* default */.Z && media_quickInput/* default */.Z.locals ? media_quickInput/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(3076);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/findinput/findInput.js
var findInput = __webpack_require__(34888);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickInputBox.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const $ = dom.$;
class QuickInputBox extends lifecycle/* Disposable */.JT {
    constructor(parent, inputBoxStyles, toggleStyles) {
        super();
        this.parent = parent;
        this.onKeyDown = (handler) => {
            return dom/* addDisposableListener */.nm(this.findInput.inputBox.inputElement, dom/* EventType */.tw.KEY_DOWN, (e) => {
                handler(new browser_keyboardEvent/* StandardKeyboardEvent */.y(e));
            });
        };
        this.onMouseDown = (handler) => {
            return dom/* addDisposableListener */.nm(this.findInput.inputBox.inputElement, dom/* EventType */.tw.MOUSE_DOWN, (e) => {
                handler(new mouseEvent/* StandardMouseEvent */.n(e));
            });
        };
        this.onDidChange = (handler) => {
            return this.findInput.onDidChange(handler);
        };
        this.container = dom/* append */.R3(this.parent, $('.quick-input-box'));
        this.findInput = this._register(new findInput/* FindInput */.V(this.container, undefined, { label: '', inputBoxStyles, toggleStyles }));
        const input = this.findInput.inputBox.inputElement;
        input.role = 'combobox';
        input.ariaHasPopup = 'menu';
        input.ariaAutoComplete = 'list';
        input.ariaExpanded = 'true';
    }
    get value() {
        return this.findInput.getValue();
    }
    set value(value) {
        this.findInput.setValue(value);
    }
    select(range = null) {
        this.findInput.inputBox.select(range);
    }
    isSelectionAtEnd() {
        return this.findInput.inputBox.isSelectionAtEnd();
    }
    get placeholder() {
        return this.findInput.inputBox.inputElement.getAttribute('placeholder') || '';
    }
    set placeholder(placeholder) {
        this.findInput.inputBox.setPlaceHolder(placeholder);
    }
    get password() {
        return this.findInput.inputBox.inputElement.type === 'password';
    }
    set password(password) {
        this.findInput.inputBox.inputElement.type = password ? 'password' : 'text';
    }
    set enabled(enabled) {
        // We can't disable the input box because it is still used for
        // navigating the list. Instead, we disable the list and the OK
        // so that nothing can be selected.
        // TODO: should this be what we do for all find inputs? Or maybe some _other_ API
        // on findInput to change it to readonly?
        this.findInput.inputBox.inputElement.toggleAttribute('readonly', !enabled);
        // TODO: styles of the quick pick need to be moved to the CSS instead of being in line
        // so things like this can be done in CSS
        // this.findInput.inputBox.inputElement.classList.toggle('disabled', !enabled);
    }
    set toggles(toggles) {
        this.findInput.setAdditionalToggles(toggles);
    }
    setAttribute(name, value) {
        this.findInput.inputBox.inputElement.setAttribute(name, value);
    }
    showDecoration(decoration) {
        if (decoration === common_severity/* default */.Z.Ignore) {
            this.findInput.clearMessage();
        }
        else {
            this.findInput.showMessage({ type: decoration === common_severity/* default */.Z.Info ? 1 /* MessageType.INFO */ : decoration === common_severity/* default */.Z.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */, content: '' });
        }
    }
    stylesForType(decoration) {
        return this.findInput.inputBox.stylesForType(decoration === common_severity/* default */.Z.Info ? 1 /* MessageType.INFO */ : decoration === common_severity/* default */.Z.Warning ? 2 /* MessageType.WARNING */ : 3 /* MessageType.ERROR */);
    }
    setFocus() {
        this.findInput.focus();
    }
    layout() {
        this.findInput.inputBox.layout();
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabel.js + 1 modules
var iconLabel = __webpack_require__(27659);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/keybindingLabel/keybindingLabel.js + 1 modules
var keybindingLabel = __webpack_require__(38564);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/comparers.js
var comparers = __webpack_require__(31825);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/decorators.js
var decorators = __webpack_require__(18328);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/iconLabels.js
var iconLabels = __webpack_require__(49357);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/event.js
var browser_event = __webpack_require__(91645);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/touch.js
var touch = __webpack_require__(58122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/iconLabel/iconLabels.js
var iconLabel_iconLabels = __webpack_require__(56175);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/idGenerator.js
var idGenerator = __webpack_require__(18240);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/linkedText.js
var linkedText = __webpack_require__(29096);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickInputUtils.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










const iconPathToClass = {};
const iconClassGenerator = new idGenerator/* IdGenerator */.R('quick-input-button-icon-');
function getIconClass(iconPath) {
    if (!iconPath) {
        return undefined;
    }
    let iconClass;
    const key = iconPath.dark.toString();
    if (iconPathToClass[key]) {
        iconClass = iconPathToClass[key];
    }
    else {
        iconClass = iconClassGenerator.nextId();
        dom/* createCSSRule */.fk(`.${iconClass}, .hc-light .${iconClass}`, `background-image: ${dom/* asCSSUrl */.wY(iconPath.light || iconPath.dark)}`);
        dom/* createCSSRule */.fk(`.vs-dark .${iconClass}, .hc-black .${iconClass}`, `background-image: ${dom/* asCSSUrl */.wY(iconPath.dark)}`);
        iconPathToClass[key] = iconClass;
    }
    return iconClass;
}
function renderQuickInputDescription(description, container, actionHandler) {
    dom/* reset */.mc(container);
    const parsed = (0,linkedText/* parseLinkedText */.J)(description);
    let tabIndex = 0;
    for (const node of parsed.nodes) {
        if (typeof node === 'string') {
            container.append(...(0,iconLabel_iconLabels/* renderLabelWithIcons */.T)(node));
        }
        else {
            let title = node.title;
            if (!title && node.href.startsWith('command:')) {
                title = (0,nls/* localize */.NC)('executeCommand', "Click to execute command '{0}'", node.href.substring('command:'.length));
            }
            else if (!title) {
                title = node.href;
            }
            const anchor = dom.$('a', { href: node.href, title, tabIndex: tabIndex++ }, node.label);
            anchor.style.textDecoration = 'underline';
            const handleOpen = (e) => {
                if (dom/* isEventLike */.cl(e)) {
                    dom/* EventHelper */.zB.stop(e, true);
                }
                actionHandler.callback(node.href);
            };
            const onClick = actionHandler.disposables.add(new browser_event/* DomEmitter */.Y(anchor, dom/* EventType */.tw.CLICK)).event;
            const onKeydown = actionHandler.disposables.add(new browser_event/* DomEmitter */.Y(anchor, dom/* EventType */.tw.KEY_DOWN)).event;
            const onSpaceOrEnter = actionHandler.disposables.add(common_event/* Event */.ju.chain(onKeydown)).filter(e => {
                const event = new browser_keyboardEvent/* StandardKeyboardEvent */.y(e);
                return event.equals(10 /* KeyCode.Space */) || event.equals(3 /* KeyCode.Enter */);
            }).event;
            actionHandler.disposables.add(touch/* Gesture */.o.addTarget(anchor));
            const onTap = actionHandler.disposables.add(new browser_event/* DomEmitter */.Y(anchor, touch/* EventType */.t.Tap)).event;
            common_event/* Event */.ju.any(onClick, onTap, onSpaceOrEnter)(handleOpen, null, actionHandler.disposables);
            container.appendChild(anchor);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickInputList.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var quickInputList_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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



















const quickInputList_$ = dom.$;
class ListElement {
    get checked() {
        return !!this._checked;
    }
    set checked(value) {
        if (value !== this._checked) {
            this._checked = value;
            this._onChecked.fire(value);
        }
    }
    constructor(init) {
        this.hidden = false;
        this._onChecked = new common_event/* Emitter */.Q5();
        this.onChecked = this._onChecked.event;
        Object.assign(this, init);
    }
    dispose() {
        this._onChecked.dispose();
    }
}
class ListElementRenderer {
    get templateId() {
        return ListElementRenderer.ID;
    }
    renderTemplate(container) {
        const data = Object.create(null);
        data.toDisposeElement = [];
        data.toDisposeTemplate = [];
        data.entry = dom/* append */.R3(container, quickInputList_$('.quick-input-list-entry'));
        // Checkbox
        const label = dom/* append */.R3(data.entry, quickInputList_$('label.quick-input-list-label'));
        data.toDisposeTemplate.push(dom/* addStandardDisposableListener */.mu(label, dom/* EventType */.tw.CLICK, e => {
            if (!data.checkbox.offsetParent) { // If checkbox not visible:
                e.preventDefault(); // Prevent toggle of checkbox when it is immediately shown afterwards. #91740
            }
        }));
        data.checkbox = dom/* append */.R3(label, quickInputList_$('input.quick-input-list-checkbox'));
        data.checkbox.type = 'checkbox';
        data.toDisposeTemplate.push(dom/* addStandardDisposableListener */.mu(data.checkbox, dom/* EventType */.tw.CHANGE, e => {
            data.element.checked = data.checkbox.checked;
        }));
        // Rows
        const rows = dom/* append */.R3(label, quickInputList_$('.quick-input-list-rows'));
        const row1 = dom/* append */.R3(rows, quickInputList_$('.quick-input-list-row'));
        const row2 = dom/* append */.R3(rows, quickInputList_$('.quick-input-list-row'));
        // Label
        data.label = new iconLabel/* IconLabel */.g(row1, { supportHighlights: true, supportDescriptionHighlights: true, supportIcons: true });
        // Keybinding
        const keybindingContainer = dom/* append */.R3(row1, quickInputList_$('.quick-input-list-entry-keybinding'));
        data.keybinding = new keybindingLabel/* KeybindingLabel */.e(keybindingContainer, common_platform.OS);
        // Detail
        const detailContainer = dom/* append */.R3(row2, quickInputList_$('.quick-input-list-label-meta'));
        data.detail = new iconLabel/* IconLabel */.g(detailContainer, { supportHighlights: true, supportIcons: true });
        // Separator
        data.separator = dom/* append */.R3(data.entry, quickInputList_$('.quick-input-list-separator'));
        // Actions
        data.actionBar = new actionbar/* ActionBar */.o(data.entry);
        data.actionBar.domNode.classList.add('quick-input-list-entry-action-bar');
        data.toDisposeTemplate.push(data.actionBar);
        return data;
    }
    renderElement(element, index, data) {
        data.element = element;
        element.element = (0,types/* withNullAsUndefined */.f6)(data.entry);
        const mainItem = element.item ? element.item : element.separator;
        data.checkbox.checked = element.checked;
        data.toDisposeElement.push(element.onChecked(checked => data.checkbox.checked = checked));
        const { labelHighlights, descriptionHighlights, detailHighlights } = element;
        // Label
        const options = Object.create(null);
        options.matches = labelHighlights || [];
        options.descriptionTitle = element.saneDescription;
        options.descriptionMatches = descriptionHighlights || [];
        if (mainItem.type !== 'separator') {
            options.extraClasses = mainItem.iconClasses;
            options.italic = mainItem.italic;
            options.strikethrough = mainItem.strikethrough;
            data.entry.classList.remove('quick-input-list-separator-as-item');
        }
        else {
            data.entry.classList.add('quick-input-list-separator-as-item');
        }
        data.label.setLabel(element.saneLabel, element.saneDescription, options);
        // Keybinding
        data.keybinding.set(mainItem.type === 'separator' ? undefined : mainItem.keybinding);
        // Meta
        if (element.saneDetail) {
            data.detail.element.style.display = '';
            data.detail.setLabel(element.saneDetail, undefined, {
                matches: detailHighlights,
                title: element.saneDetail
            });
        }
        else {
            data.detail.element.style.display = 'none';
        }
        // Separator
        if (element.item && element.separator && element.separator.label) {
            data.separator.textContent = element.separator.label;
            data.separator.style.display = '';
        }
        else {
            data.separator.style.display = 'none';
        }
        data.entry.classList.toggle('quick-input-list-separator-border', !!element.separator);
        // Actions
        const buttons = mainItem.buttons;
        if (buttons && buttons.length) {
            data.actionBar.push(buttons.map((button, index) => {
                let cssClasses = button.iconClass || (button.iconPath ? getIconClass(button.iconPath) : undefined);
                if (button.alwaysVisible) {
                    cssClasses = cssClasses ? `${cssClasses} always-visible` : 'always-visible';
                }
                return {
                    id: `id-${index}`,
                    class: cssClasses,
                    enabled: true,
                    label: '',
                    tooltip: button.tooltip || '',
                    run: () => {
                        mainItem.type !== 'separator'
                            ? element.fireButtonTriggered({
                                button,
                                item: mainItem
                            })
                            : element.fireSeparatorButtonTriggered({
                                button,
                                separator: mainItem
                            });
                    }
                };
            }), { icon: true, label: false });
            data.entry.classList.add('has-actions');
        }
        else {
            data.entry.classList.remove('has-actions');
        }
    }
    disposeElement(element, index, data) {
        data.toDisposeElement = (0,lifecycle/* dispose */.B9)(data.toDisposeElement);
        data.actionBar.clear();
    }
    disposeTemplate(data) {
        data.toDisposeElement = (0,lifecycle/* dispose */.B9)(data.toDisposeElement);
        data.toDisposeTemplate = (0,lifecycle/* dispose */.B9)(data.toDisposeTemplate);
    }
}
ListElementRenderer.ID = 'listelement';
class ListElementDelegate {
    getHeight(element) {
        if (!element.item) {
            // must be a separator
            return 24;
        }
        return element.saneDetail ? 44 : 22;
    }
    getTemplateId(element) {
        return ListElementRenderer.ID;
    }
}
var QuickInputListFocus;
(function (QuickInputListFocus) {
    QuickInputListFocus[QuickInputListFocus["First"] = 1] = "First";
    QuickInputListFocus[QuickInputListFocus["Second"] = 2] = "Second";
    QuickInputListFocus[QuickInputListFocus["Last"] = 3] = "Last";
    QuickInputListFocus[QuickInputListFocus["Next"] = 4] = "Next";
    QuickInputListFocus[QuickInputListFocus["Previous"] = 5] = "Previous";
    QuickInputListFocus[QuickInputListFocus["NextPage"] = 6] = "NextPage";
    QuickInputListFocus[QuickInputListFocus["PreviousPage"] = 7] = "PreviousPage";
})(QuickInputListFocus || (QuickInputListFocus = {}));
class QuickInputList {
    constructor(parent, id, options) {
        this.parent = parent;
        this.options = options;
        this.inputElements = [];
        this.elements = [];
        this.elementsToIndexes = new Map();
        this.matchOnDescription = false;
        this.matchOnDetail = false;
        this.matchOnLabel = true;
        this.matchOnLabelMode = 'fuzzy';
        this.matchOnMeta = true;
        this.sortByLabel = true;
        this._onChangedAllVisibleChecked = new common_event/* Emitter */.Q5();
        this.onChangedAllVisibleChecked = this._onChangedAllVisibleChecked.event;
        this._onChangedCheckedCount = new common_event/* Emitter */.Q5();
        this.onChangedCheckedCount = this._onChangedCheckedCount.event;
        this._onChangedVisibleCount = new common_event/* Emitter */.Q5();
        this.onChangedVisibleCount = this._onChangedVisibleCount.event;
        this._onChangedCheckedElements = new common_event/* Emitter */.Q5();
        this.onChangedCheckedElements = this._onChangedCheckedElements.event;
        this._onButtonTriggered = new common_event/* Emitter */.Q5();
        this.onButtonTriggered = this._onButtonTriggered.event;
        this._onSeparatorButtonTriggered = new common_event/* Emitter */.Q5();
        this.onSeparatorButtonTriggered = this._onSeparatorButtonTriggered.event;
        this._onKeyDown = new common_event/* Emitter */.Q5();
        this.onKeyDown = this._onKeyDown.event;
        this._onLeave = new common_event/* Emitter */.Q5();
        this.onLeave = this._onLeave.event;
        this._fireCheckedEvents = true;
        this.elementDisposables = [];
        this.disposables = [];
        this.id = id;
        this.container = dom/* append */.R3(this.parent, quickInputList_$('.quick-input-list'));
        const delegate = new ListElementDelegate();
        const accessibilityProvider = new QuickInputAccessibilityProvider();
        this.list = options.createList('QuickInput', this.container, delegate, [new ListElementRenderer()], {
            identityProvider: { getId: element => element.saneLabel },
            setRowLineHeight: false,
            multipleSelectionSupport: false,
            horizontalScrolling: false,
            accessibilityProvider
        });
        this.list.getHTMLElement().id = id;
        this.disposables.push(this.list);
        this.disposables.push(this.list.onKeyDown(e => {
            const event = new browser_keyboardEvent/* StandardKeyboardEvent */.y(e);
            switch (event.keyCode) {
                case 10 /* KeyCode.Space */:
                    this.toggleCheckbox();
                    break;
                case 31 /* KeyCode.KeyA */:
                    if (common_platform/* isMacintosh */.dz ? e.metaKey : e.ctrlKey) {
                        this.list.setFocus((0,arrays/* range */.w6)(this.list.length));
                    }
                    break;
                case 16 /* KeyCode.UpArrow */: {
                    const focus1 = this.list.getFocus();
                    if (focus1.length === 1 && focus1[0] === 0) {
                        this._onLeave.fire();
                    }
                    break;
                }
                case 18 /* KeyCode.DownArrow */: {
                    const focus2 = this.list.getFocus();
                    if (focus2.length === 1 && focus2[0] === this.list.length - 1) {
                        this._onLeave.fire();
                    }
                    break;
                }
            }
            this._onKeyDown.fire(event);
        }));
        this.disposables.push(this.list.onMouseDown(e => {
            if (e.browserEvent.button !== 2) {
                // Works around / fixes #64350.
                e.browserEvent.preventDefault();
            }
        }));
        this.disposables.push(dom/* addDisposableListener */.nm(this.container, dom/* EventType */.tw.CLICK, e => {
            if (e.x || e.y) { // Avoid 'click' triggered by 'space' on checkbox.
                this._onLeave.fire();
            }
        }));
        this.disposables.push(this.list.onMouseMiddleClick(e => {
            this._onLeave.fire();
        }));
        this.disposables.push(this.list.onContextMenu(e => {
            if (typeof e.index === 'number') {
                e.browserEvent.preventDefault();
                // we want to treat a context menu event as
                // a gesture to open the item at the index
                // since we do not have any context menu
                // this enables for example macOS to Ctrl-
                // click on an item to open it.
                this.list.setSelection([e.index]);
            }
        }));
        const delayer = new common_async/* ThrottledDelayer */.rH(options.hoverDelegate.delay);
        // onMouseOver triggers every time a new element has been moused over
        // even if it's on the same list item.
        this.disposables.push(this.list.onMouseOver((e) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            // If we hover over an anchor element, we don't want to show the hover because
            // the anchor may have a tooltip that we want to show instead.
            if (e.browserEvent.target instanceof HTMLAnchorElement) {
                delayer.cancel();
                return;
            }
            if (
            // anchors are an exception as called out above so we skip them here
            !(e.browserEvent.relatedTarget instanceof HTMLAnchorElement) &&
                // check if the mouse is still over the same element
                dom/* isAncestor */.jg(e.browserEvent.relatedTarget, (_a = e.element) === null || _a === void 0 ? void 0 : _a.element)) {
                return;
            }
            try {
                yield delayer.trigger(() => __awaiter(this, void 0, void 0, function* () {
                    if (e.element) {
                        this.showHover(e.element);
                    }
                }));
            }
            catch (e) {
                // Ignore cancellation errors due to mouse out
                if (!(0,errors/* isCancellationError */.n2)(e)) {
                    throw e;
                }
            }
        })));
        this.disposables.push(this.list.onMouseOut(e => {
            var _a;
            // onMouseOut triggers every time a new element has been moused over
            // even if it's on the same list item. We only want one event, so we
            // check if the mouse is still over the same element.
            if (dom/* isAncestor */.jg(e.browserEvent.relatedTarget, (_a = e.element) === null || _a === void 0 ? void 0 : _a.element)) {
                return;
            }
            delayer.cancel();
        }));
        this.disposables.push(this._onChangedAllVisibleChecked, this._onChangedCheckedCount, this._onChangedVisibleCount, this._onChangedCheckedElements, this._onButtonTriggered, this._onSeparatorButtonTriggered, this._onLeave, this._onKeyDown, delayer);
    }
    get onDidChangeFocus() {
        return common_event/* Event */.ju.map(this.list.onDidChangeFocus, e => e.elements.map(e => e.item));
    }
    get onDidChangeSelection() {
        return common_event/* Event */.ju.map(this.list.onDidChangeSelection, e => ({ items: e.elements.map(e => e.item), event: e.browserEvent }));
    }
    get scrollTop() {
        return this.list.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.list.scrollTop = scrollTop;
    }
    get ariaLabel() {
        return this.list.getHTMLElement().ariaLabel;
    }
    set ariaLabel(label) {
        this.list.getHTMLElement().ariaLabel = label;
    }
    getAllVisibleChecked() {
        return this.allVisibleChecked(this.elements, false);
    }
    allVisibleChecked(elements, whenNoneVisible = true) {
        for (let i = 0, n = elements.length; i < n; i++) {
            const element = elements[i];
            if (!element.hidden) {
                if (!element.checked) {
                    return false;
                }
                else {
                    whenNoneVisible = true;
                }
            }
        }
        return whenNoneVisible;
    }
    getCheckedCount() {
        let count = 0;
        const elements = this.elements;
        for (let i = 0, n = elements.length; i < n; i++) {
            if (elements[i].checked) {
                count++;
            }
        }
        return count;
    }
    getVisibleCount() {
        let count = 0;
        const elements = this.elements;
        for (let i = 0, n = elements.length; i < n; i++) {
            if (!elements[i].hidden) {
                count++;
            }
        }
        return count;
    }
    setAllVisibleChecked(checked) {
        try {
            this._fireCheckedEvents = false;
            this.elements.forEach(element => {
                if (!element.hidden) {
                    element.checked = checked;
                }
            });
        }
        finally {
            this._fireCheckedEvents = true;
            this.fireCheckedEvents();
        }
    }
    setElements(inputElements) {
        this.elementDisposables = (0,lifecycle/* dispose */.B9)(this.elementDisposables);
        const fireButtonTriggered = (event) => this.fireButtonTriggered(event);
        const fireSeparatorButtonTriggered = (event) => this.fireSeparatorButtonTriggered(event);
        this.inputElements = inputElements;
        this.elements = inputElements.reduce((result, item, index) => {
            var _a, _b, _c;
            const previous = index && inputElements[index - 1];
            const saneLabel = item.label ? item.label.replace(/\r?\n/g, ' ') : '';
            const saneSortLabel = (0,iconLabels/* parseLabelWithIcons */.Ho)(saneLabel).text.trim();
            let saneMeta, saneDescription, saneDetail, labelHighlights, descriptionHighlights, detailHighlights, saneTooltip;
            if (item.type !== 'separator') {
                saneMeta = item.meta && item.meta.replace(/\r?\n/g, ' ');
                saneDescription = item.description && item.description.replace(/\r?\n/g, ' ');
                saneDetail = item.detail && item.detail.replace(/\r?\n/g, ' ');
                labelHighlights = (_a = item.highlights) === null || _a === void 0 ? void 0 : _a.label;
                descriptionHighlights = (_b = item.highlights) === null || _b === void 0 ? void 0 : _b.description;
                detailHighlights = (_c = item.highlights) === null || _c === void 0 ? void 0 : _c.detail;
                saneTooltip = item.tooltip;
            }
            const saneAriaLabel = item.ariaLabel || [saneLabel, saneDescription, saneDetail]
                .map(s => (0,iconLabels/* getCodiconAriaLabel */.JL)(s))
                .filter(s => !!s)
                .join(', ');
            const hasCheckbox = this.parent.classList.contains('show-checkboxes');
            let separator;
            if (item.type === 'separator') {
                if (!item.buttons) {
                    // This separator will be rendered as a part of the list item
                    return result;
                }
                separator = item;
            }
            else if (previous && previous.type === 'separator' && !previous.buttons) {
                separator = previous;
            }
            const element = new ListElement({
                hasCheckbox,
                index,
                item: item.type !== 'separator' ? item : undefined,
                saneLabel,
                saneSortLabel,
                saneMeta,
                saneAriaLabel,
                saneDescription,
                saneDetail,
                saneTooltip,
                labelHighlights,
                descriptionHighlights,
                detailHighlights,
                checked: false,
                separator,
                fireButtonTriggered,
                fireSeparatorButtonTriggered
            });
            this.elementDisposables.push(element);
            this.elementDisposables.push(element.onChecked(() => this.fireCheckedEvents()));
            result.push(element);
            return result;
        }, []);
        this.elementsToIndexes = this.elements.reduce((map, element, index) => {
            var _a;
            map.set((_a = element.item) !== null && _a !== void 0 ? _a : element.separator, index);
            return map;
        }, new Map());
        this.list.splice(0, this.list.length); // Clear focus and selection first, sending the events when the list is empty.
        this.list.splice(0, this.list.length, this.elements);
        this._onChangedVisibleCount.fire(this.elements.length);
    }
    getFocusedElements() {
        return this.list.getFocusedElements()
            .map(e => e.item);
    }
    setFocusedElements(items) {
        this.list.setFocus(items
            .filter(item => this.elementsToIndexes.has(item))
            .map(item => this.elementsToIndexes.get(item)));
        if (items.length > 0) {
            const focused = this.list.getFocus()[0];
            if (typeof focused === 'number') {
                this.list.reveal(focused);
            }
        }
    }
    getActiveDescendant() {
        return this.list.getHTMLElement().getAttribute('aria-activedescendant');
    }
    setSelectedElements(items) {
        this.list.setSelection(items
            .filter(item => this.elementsToIndexes.has(item))
            .map(item => this.elementsToIndexes.get(item)));
    }
    getCheckedElements() {
        return this.elements.filter(e => e.checked)
            .map(e => e.item)
            .filter(e => !!e);
    }
    setCheckedElements(items) {
        try {
            this._fireCheckedEvents = false;
            const checked = new Set();
            for (const item of items) {
                checked.add(item);
            }
            for (const element of this.elements) {
                element.checked = checked.has(element.item);
            }
        }
        finally {
            this._fireCheckedEvents = true;
            this.fireCheckedEvents();
        }
    }
    set enabled(value) {
        this.list.getHTMLElement().style.pointerEvents = value ? '' : 'none';
    }
    focus(what) {
        if (!this.list.length) {
            return;
        }
        if (what === QuickInputListFocus.Second && this.list.length < 2) {
            what = QuickInputListFocus.First;
        }
        switch (what) {
            case QuickInputListFocus.First:
                this.list.scrollTop = 0;
                this.list.focusFirst(undefined, (e) => !!e.item);
                break;
            case QuickInputListFocus.Second:
                this.list.scrollTop = 0;
                this.list.focusNth(1, undefined, (e) => !!e.item);
                break;
            case QuickInputListFocus.Last:
                this.list.scrollTop = this.list.scrollHeight;
                this.list.focusLast(undefined, (e) => !!e.item);
                break;
            case QuickInputListFocus.Next: {
                this.list.focusNext(undefined, true, undefined, (e) => !!e.item);
                const index = this.list.getFocus()[0];
                if (index !== 0 && !this.elements[index - 1].item && this.list.firstVisibleIndex > index - 1) {
                    this.list.reveal(index - 1);
                }
                break;
            }
            case QuickInputListFocus.Previous: {
                this.list.focusPrevious(undefined, true, undefined, (e) => !!e.item);
                const index = this.list.getFocus()[0];
                if (index !== 0 && !this.elements[index - 1].item && this.list.firstVisibleIndex > index - 1) {
                    this.list.reveal(index - 1);
                }
                break;
            }
            case QuickInputListFocus.NextPage:
                this.list.focusNextPage(undefined, (e) => !!e.item);
                break;
            case QuickInputListFocus.PreviousPage:
                this.list.focusPreviousPage(undefined, (e) => !!e.item);
                break;
        }
        const focused = this.list.getFocus()[0];
        if (typeof focused === 'number') {
            this.list.reveal(focused);
        }
    }
    clearFocus() {
        this.list.setFocus([]);
    }
    domFocus() {
        this.list.domFocus();
    }
    /**
     * Disposes of the hover and shows a new one for the given index if it has a tooltip.
     * @param element The element to show the hover for
     */
    showHover(element) {
        var _a, _b, _c;
        if (this._lastHover && !this._lastHover.isDisposed) {
            (_b = (_a = this.options.hoverDelegate).onDidHideHover) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_c = this._lastHover) === null || _c === void 0 ? void 0 : _c.dispose();
        }
        if (!element.element || !element.saneTooltip) {
            return;
        }
        this._lastHover = this.options.hoverDelegate.showHover({
            content: element.saneTooltip,
            target: element.element,
            linkHandler: (url) => {
                this.options.linkOpenerDelegate(url);
            },
            showPointer: true,
            container: this.container,
            hoverPosition: 1 /* HoverPosition.RIGHT */
        }, false);
    }
    layout(maxHeight) {
        this.list.getHTMLElement().style.maxHeight = maxHeight ? `${
        // Make sure height aligns with list item heights
        Math.floor(maxHeight / 44) * 44
            // Add some extra height so that it's clear there's more to scroll
            + 6}px` : '';
        this.list.layout();
    }
    filter(query) {
        if (!(this.sortByLabel || this.matchOnLabel || this.matchOnDescription || this.matchOnDetail)) {
            this.list.layout();
            return false;
        }
        const queryWithWhitespace = query;
        query = query.trim();
        // Reset filtering
        if (!query || !(this.matchOnLabel || this.matchOnDescription || this.matchOnDetail)) {
            this.elements.forEach(element => {
                element.labelHighlights = undefined;
                element.descriptionHighlights = undefined;
                element.detailHighlights = undefined;
                element.hidden = false;
                const previous = element.index && this.inputElements[element.index - 1];
                if (element.item) {
                    element.separator = previous && previous.type === 'separator' && !previous.buttons ? previous : undefined;
                }
            });
        }
        // Filter by value (since we support icons in labels, use $(..) aware fuzzy matching)
        else {
            let currentSeparator;
            this.elements.forEach(element => {
                let labelHighlights;
                if (this.matchOnLabelMode === 'fuzzy') {
                    labelHighlights = this.matchOnLabel ? (0,types/* withNullAsUndefined */.f6)((0,iconLabels/* matchesFuzzyIconAware */.Gt)(query, (0,iconLabels/* parseLabelWithIcons */.Ho)(element.saneLabel))) : undefined;
                }
                else {
                    labelHighlights = this.matchOnLabel ? (0,types/* withNullAsUndefined */.f6)(matchesContiguousIconAware(queryWithWhitespace, (0,iconLabels/* parseLabelWithIcons */.Ho)(element.saneLabel))) : undefined;
                }
                const descriptionHighlights = this.matchOnDescription ? (0,types/* withNullAsUndefined */.f6)((0,iconLabels/* matchesFuzzyIconAware */.Gt)(query, (0,iconLabels/* parseLabelWithIcons */.Ho)(element.saneDescription || ''))) : undefined;
                const detailHighlights = this.matchOnDetail ? (0,types/* withNullAsUndefined */.f6)((0,iconLabels/* matchesFuzzyIconAware */.Gt)(query, (0,iconLabels/* parseLabelWithIcons */.Ho)(element.saneDetail || ''))) : undefined;
                const metaHighlights = this.matchOnMeta ? (0,types/* withNullAsUndefined */.f6)((0,iconLabels/* matchesFuzzyIconAware */.Gt)(query, (0,iconLabels/* parseLabelWithIcons */.Ho)(element.saneMeta || ''))) : undefined;
                if (labelHighlights || descriptionHighlights || detailHighlights || metaHighlights) {
                    element.labelHighlights = labelHighlights;
                    element.descriptionHighlights = descriptionHighlights;
                    element.detailHighlights = detailHighlights;
                    element.hidden = false;
                }
                else {
                    element.labelHighlights = undefined;
                    element.descriptionHighlights = undefined;
                    element.detailHighlights = undefined;
                    element.hidden = element.item ? !element.item.alwaysShow : true;
                }
                // Ensure separators are filtered out first before deciding if we need to bring them back
                if (element.item) {
                    element.separator = undefined;
                }
                else if (element.separator) {
                    element.hidden = true;
                }
                // we can show the separator unless the list gets sorted by match
                if (!this.sortByLabel) {
                    const previous = element.index && this.inputElements[element.index - 1];
                    currentSeparator = previous && previous.type === 'separator' ? previous : currentSeparator;
                    if (currentSeparator && !element.hidden) {
                        element.separator = currentSeparator;
                        currentSeparator = undefined;
                    }
                }
            });
        }
        const shownElements = this.elements.filter(element => !element.hidden);
        // Sort by value
        if (this.sortByLabel && query) {
            const normalizedSearchValue = query.toLowerCase();
            shownElements.sort((a, b) => {
                return compareEntries(a, b, normalizedSearchValue);
            });
        }
        this.elementsToIndexes = shownElements.reduce((map, element, index) => {
            var _a;
            map.set((_a = element.item) !== null && _a !== void 0 ? _a : element.separator, index);
            return map;
        }, new Map());
        this.list.splice(0, this.list.length, shownElements);
        this.list.setFocus([]);
        this.list.layout();
        this._onChangedAllVisibleChecked.fire(this.getAllVisibleChecked());
        this._onChangedVisibleCount.fire(shownElements.length);
        return true;
    }
    toggleCheckbox() {
        try {
            this._fireCheckedEvents = false;
            const elements = this.list.getFocusedElements();
            const allChecked = this.allVisibleChecked(elements);
            for (const element of elements) {
                element.checked = !allChecked;
            }
        }
        finally {
            this._fireCheckedEvents = true;
            this.fireCheckedEvents();
        }
    }
    display(display) {
        this.container.style.display = display ? '' : 'none';
    }
    isDisplayed() {
        return this.container.style.display !== 'none';
    }
    dispose() {
        this.elementDisposables = (0,lifecycle/* dispose */.B9)(this.elementDisposables);
        this.disposables = (0,lifecycle/* dispose */.B9)(this.disposables);
    }
    fireCheckedEvents() {
        if (this._fireCheckedEvents) {
            this._onChangedAllVisibleChecked.fire(this.getAllVisibleChecked());
            this._onChangedCheckedCount.fire(this.getCheckedCount());
            this._onChangedCheckedElements.fire(this.getCheckedElements());
        }
    }
    fireButtonTriggered(event) {
        this._onButtonTriggered.fire(event);
    }
    fireSeparatorButtonTriggered(event) {
        this._onSeparatorButtonTriggered.fire(event);
    }
    style(styles) {
        this.list.style(styles);
    }
    toggleHover() {
        const element = this.list.getFocusedElements()[0];
        if (!element.saneTooltip) {
            return;
        }
        // if there's a hover already, hide it (toggle off)
        if (this._lastHover && !this._lastHover.isDisposed) {
            this._lastHover.dispose();
            return;
        }
        // If there is no hover, show it (toggle on)
        const focused = this.list.getFocusedElements()[0];
        if (!focused) {
            return;
        }
        this.showHover(focused);
        const store = new lifecycle/* DisposableStore */.SL();
        store.add(this.list.onDidChangeFocus(e => {
            if (e.indexes.length) {
                this.showHover(e.elements[0]);
            }
        }));
        if (this._lastHover) {
            store.add(this._lastHover);
        }
        this._toggleHover = store;
        this.elementDisposables.push(this._toggleHover);
    }
}
quickInputList_decorate([
    decorators/* memoize */.H
], QuickInputList.prototype, "onDidChangeFocus", null);
quickInputList_decorate([
    decorators/* memoize */.H
], QuickInputList.prototype, "onDidChangeSelection", null);
function matchesContiguousIconAware(query, target) {
    const { text, iconOffsets } = target;
    // Return early if there are no icon markers in the word to match against
    if (!iconOffsets || iconOffsets.length === 0) {
        return matchesContiguous(query, text);
    }
    // Trim the word to match against because it could have leading
    // whitespace now if the word started with an icon
    const wordToMatchAgainstWithoutIconsTrimmed = (0,strings/* ltrim */.j3)(text, ' ');
    const leadingWhitespaceOffset = text.length - wordToMatchAgainstWithoutIconsTrimmed.length;
    // match on value without icon
    const matches = matchesContiguous(query, wordToMatchAgainstWithoutIconsTrimmed);
    // Map matches back to offsets with icon and trimming
    if (matches) {
        for (const match of matches) {
            const iconOffset = iconOffsets[match.start + leadingWhitespaceOffset] /* icon offsets at index */ + leadingWhitespaceOffset /* overall leading whitespace offset */;
            match.start += iconOffset;
            match.end += iconOffset;
        }
    }
    return matches;
}
function matchesContiguous(word, wordToMatchAgainst) {
    const matchIndex = wordToMatchAgainst.toLowerCase().indexOf(word.toLowerCase());
    if (matchIndex !== -1) {
        return [{ start: matchIndex, end: matchIndex + word.length }];
    }
    return null;
}
function compareEntries(elementA, elementB, lookFor) {
    const labelHighlightsA = elementA.labelHighlights || [];
    const labelHighlightsB = elementB.labelHighlights || [];
    if (labelHighlightsA.length && !labelHighlightsB.length) {
        return -1;
    }
    if (!labelHighlightsA.length && labelHighlightsB.length) {
        return 1;
    }
    if (labelHighlightsA.length === 0 && labelHighlightsB.length === 0) {
        return 0;
    }
    return (0,comparers/* compareAnything */.LE)(elementA.saneSortLabel, elementB.saneSortLabel, lookFor);
}
class QuickInputAccessibilityProvider {
    getWidgetAriaLabel() {
        return (0,nls/* localize */.NC)('quickInput', "Quick Input");
    }
    getAriaLabel(element) {
        var _a;
        return ((_a = element.separator) === null || _a === void 0 ? void 0 : _a.label)
            ? `${element.saneAriaLabel}, ${element.separator.label}`
            : element.saneAriaLabel;
    }
    getWidgetRole() {
        return 'listbox';
    }
    getRole(element) {
        return element.hasCheckbox ? 'checkbox' : 'option';
    }
    isChecked(element) {
        if (!element.hasCheckbox) {
            return undefined;
        }
        return {
            value: element.checked,
            onDidChange: element.onChecked
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickInput.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var quickInput_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























const quickInput_$ = dom.$;
const backButton = {
    iconClass: themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.quickInputBack),
    tooltip: (0,nls/* localize */.NC)('quickInput.back', "Back"),
    handle: -1 // TODO
};
class QuickInput extends lifecycle/* Disposable */.JT {
    constructor(ui) {
        super();
        this.ui = ui;
        this._widgetUpdated = false;
        this.visible = false;
        this._enabled = true;
        this._busy = false;
        this._ignoreFocusOut = false;
        this._buttons = [];
        this.buttonsUpdated = false;
        this._toggles = [];
        this.togglesUpdated = false;
        this.noValidationMessage = QuickInput.noPromptMessage;
        this._severity = common_severity/* default */.Z.Ignore;
        this.onDidTriggerButtonEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidHideEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDisposeEmitter = this._register(new common_event/* Emitter */.Q5());
        this.visibleDisposables = this._register(new lifecycle/* DisposableStore */.SL());
        this.onDidHide = this.onDidHideEmitter.event;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
        this.update();
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
        this.update();
    }
    get step() {
        return this._steps;
    }
    set step(step) {
        this._steps = step;
        this.update();
    }
    get totalSteps() {
        return this._totalSteps;
    }
    set totalSteps(totalSteps) {
        this._totalSteps = totalSteps;
        this.update();
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(enabled) {
        this._enabled = enabled;
        this.update();
    }
    get contextKey() {
        return this._contextKey;
    }
    set contextKey(contextKey) {
        this._contextKey = contextKey;
        this.update();
    }
    get busy() {
        return this._busy;
    }
    set busy(busy) {
        this._busy = busy;
        this.update();
    }
    get ignoreFocusOut() {
        return this._ignoreFocusOut;
    }
    set ignoreFocusOut(ignoreFocusOut) {
        const shouldUpdate = this._ignoreFocusOut !== ignoreFocusOut && !common_platform/* isIOS */.gn;
        this._ignoreFocusOut = ignoreFocusOut && !common_platform/* isIOS */.gn;
        if (shouldUpdate) {
            this.update();
        }
    }
    get buttons() {
        return this._buttons;
    }
    set buttons(buttons) {
        this._buttons = buttons;
        this.buttonsUpdated = true;
        this.update();
    }
    get toggles() {
        return this._toggles;
    }
    set toggles(toggles) {
        this._toggles = toggles !== null && toggles !== void 0 ? toggles : [];
        this.togglesUpdated = true;
        this.update();
    }
    get validationMessage() {
        return this._validationMessage;
    }
    set validationMessage(validationMessage) {
        this._validationMessage = validationMessage;
        this.update();
    }
    get severity() {
        return this._severity;
    }
    set severity(severity) {
        this._severity = severity;
        this.update();
    }
    show() {
        if (this.visible) {
            return;
        }
        this.visibleDisposables.add(this.ui.onDidTriggerButton(button => {
            if (this.buttons.indexOf(button) !== -1) {
                this.onDidTriggerButtonEmitter.fire(button);
            }
        }));
        this.ui.show(this);
        // update properties in the controller that get reset in the ui.show() call
        this.visible = true;
        // This ensures the message/prompt gets rendered
        this._lastValidationMessage = undefined;
        // This ensures the input box has the right severity applied
        this._lastSeverity = undefined;
        if (this.buttons.length) {
            // if there are buttons, the ui.show() clears them out of the UI so we should
            // rerender them.
            this.buttonsUpdated = true;
        }
        if (this.toggles.length) {
            // if there are toggles, the ui.show() clears them out of the UI so we should
            // rerender them.
            this.togglesUpdated = true;
        }
        this.update();
    }
    hide() {
        if (!this.visible) {
            return;
        }
        this.ui.hide();
    }
    didHide(reason = quickInput/* QuickInputHideReason */.Jq.Other) {
        this.visible = false;
        this.visibleDisposables.clear();
        this.onDidHideEmitter.fire({ reason });
    }
    update() {
        var _a, _b;
        if (!this.visible) {
            return;
        }
        const title = this.getTitle();
        if (title && this.ui.title.textContent !== title) {
            this.ui.title.textContent = title;
        }
        else if (!title && this.ui.title.innerHTML !== '&nbsp;') {
            this.ui.title.innerText = '\u00a0';
        }
        const description = this.getDescription();
        if (this.ui.description1.textContent !== description) {
            this.ui.description1.textContent = description;
        }
        if (this.ui.description2.textContent !== description) {
            this.ui.description2.textContent = description;
        }
        if (this._widgetUpdated) {
            this._widgetUpdated = false;
            if (this._widget) {
                dom/* reset */.mc(this.ui.widget, this._widget);
            }
            else {
                dom/* reset */.mc(this.ui.widget);
            }
        }
        if (this.busy && !this.busyDelay) {
            this.busyDelay = new common_async/* TimeoutTimer */._F();
            this.busyDelay.setIfNotSet(() => {
                if (this.visible) {
                    this.ui.progressBar.infinite();
                }
            }, 800);
        }
        if (!this.busy && this.busyDelay) {
            this.ui.progressBar.stop();
            this.busyDelay.cancel();
            this.busyDelay = undefined;
        }
        if (this.buttonsUpdated) {
            this.buttonsUpdated = false;
            this.ui.leftActionBar.clear();
            const leftButtons = this.buttons.filter(button => button === backButton);
            this.ui.leftActionBar.push(leftButtons.map((button, index) => {
                const action = new actions/* Action */.aU(`id-${index}`, '', button.iconClass || getIconClass(button.iconPath), true, () => quickInput_awaiter(this, void 0, void 0, function* () {
                    this.onDidTriggerButtonEmitter.fire(button);
                }));
                action.tooltip = button.tooltip || '';
                return action;
            }), { icon: true, label: false });
            this.ui.rightActionBar.clear();
            const rightButtons = this.buttons.filter(button => button !== backButton);
            this.ui.rightActionBar.push(rightButtons.map((button, index) => {
                const action = new actions/* Action */.aU(`id-${index}`, '', button.iconClass || getIconClass(button.iconPath), true, () => quickInput_awaiter(this, void 0, void 0, function* () {
                    this.onDidTriggerButtonEmitter.fire(button);
                }));
                action.tooltip = button.tooltip || '';
                return action;
            }), { icon: true, label: false });
        }
        if (this.togglesUpdated) {
            this.togglesUpdated = false;
            // HACK: Filter out toggles here that are not concrete Toggle objects. This is to workaround
            // a layering issue as quick input's interface is in common but Toggle is in browser and
            // it requires a HTMLElement on its interface
            const concreteToggles = (_b = (_a = this.toggles) === null || _a === void 0 ? void 0 : _a.filter(opts => opts instanceof toggle/* Toggle */.Z)) !== null && _b !== void 0 ? _b : [];
            this.ui.inputBox.toggles = concreteToggles;
        }
        this.ui.ignoreFocusOut = this.ignoreFocusOut;
        this.ui.setEnabled(this.enabled);
        this.ui.setContextKey(this.contextKey);
        const validationMessage = this.validationMessage || this.noValidationMessage;
        if (this._lastValidationMessage !== validationMessage) {
            this._lastValidationMessage = validationMessage;
            dom/* reset */.mc(this.ui.message);
            renderQuickInputDescription(validationMessage, this.ui.message, {
                callback: (content) => {
                    this.ui.linkOpenerDelegate(content);
                },
                disposables: this.visibleDisposables,
            });
        }
        if (this._lastSeverity !== this.severity) {
            this._lastSeverity = this.severity;
            this.showMessageDecoration(this.severity);
        }
    }
    getTitle() {
        if (this.title && this.step) {
            return `${this.title} (${this.getSteps()})`;
        }
        if (this.title) {
            return this.title;
        }
        if (this.step) {
            return this.getSteps();
        }
        return '';
    }
    getDescription() {
        return this.description || '';
    }
    getSteps() {
        if (this.step && this.totalSteps) {
            return (0,nls/* localize */.NC)('quickInput.steps', "{0}/{1}", this.step, this.totalSteps);
        }
        if (this.step) {
            return String(this.step);
        }
        return '';
    }
    showMessageDecoration(severity) {
        this.ui.inputBox.showDecoration(severity);
        if (severity !== common_severity/* default */.Z.Ignore) {
            const styles = this.ui.inputBox.stylesForType(severity);
            this.ui.message.style.color = styles.foreground ? `${styles.foreground}` : '';
            this.ui.message.style.backgroundColor = styles.background ? `${styles.background}` : '';
            this.ui.message.style.border = styles.border ? `1px solid ${styles.border}` : '';
            this.ui.message.style.marginBottom = '-2px';
        }
        else {
            this.ui.message.style.color = '';
            this.ui.message.style.backgroundColor = '';
            this.ui.message.style.border = '';
            this.ui.message.style.marginBottom = '';
        }
    }
    dispose() {
        this.hide();
        this.onDisposeEmitter.fire();
        super.dispose();
    }
}
QuickInput.noPromptMessage = (0,nls/* localize */.NC)('inputModeEntry', "Press 'Enter' to confirm your input or 'Escape' to cancel");
class QuickPick extends QuickInput {
    constructor() {
        super(...arguments);
        this._value = '';
        this.onDidChangeValueEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onWillAcceptEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidAcceptEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidCustomEmitter = this._register(new common_event/* Emitter */.Q5());
        this._items = [];
        this.itemsUpdated = false;
        this._canSelectMany = false;
        this._canAcceptInBackground = false;
        this._matchOnDescription = false;
        this._matchOnDetail = false;
        this._matchOnLabel = true;
        this._matchOnLabelMode = 'fuzzy';
        this._sortByLabel = true;
        this._autoFocusOnList = true;
        this._keepScrollPosition = false;
        this._itemActivation = quickInput/* ItemActivation */.jG.FIRST;
        this._activeItems = [];
        this.activeItemsUpdated = false;
        this.activeItemsToConfirm = [];
        this.onDidChangeActiveEmitter = this._register(new common_event/* Emitter */.Q5());
        this._selectedItems = [];
        this.selectedItemsUpdated = false;
        this.selectedItemsToConfirm = [];
        this.onDidChangeSelectionEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidTriggerItemButtonEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidTriggerSeparatorButtonEmitter = this._register(new common_event/* Emitter */.Q5());
        this.valueSelectionUpdated = true;
        this._ok = 'default';
        this._customButton = false;
        this.filterValue = (value) => value;
        this.onDidChangeValue = this.onDidChangeValueEmitter.event;
        this.onWillAccept = this.onWillAcceptEmitter.event;
        this.onDidAccept = this.onDidAcceptEmitter.event;
        this.onDidChangeActive = this.onDidChangeActiveEmitter.event;
        this.onDidChangeSelection = this.onDidChangeSelectionEmitter.event;
        this.onDidTriggerItemButton = this.onDidTriggerItemButtonEmitter.event;
        this.onDidTriggerSeparatorButton = this.onDidTriggerSeparatorButtonEmitter.event;
    }
    get quickNavigate() {
        return this._quickNavigate;
    }
    set quickNavigate(quickNavigate) {
        this._quickNavigate = quickNavigate;
        this.update();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.doSetValue(value);
    }
    doSetValue(value, skipUpdate) {
        if (this._value !== value) {
            this._value = value;
            if (!skipUpdate) {
                this.update();
            }
            if (this.visible) {
                const didFilter = this.ui.list.filter(this.filterValue(this._value));
                if (didFilter) {
                    this.trySelectFirst();
                }
            }
            this.onDidChangeValueEmitter.fire(this._value);
        }
    }
    set ariaLabel(ariaLabel) {
        this._ariaLabel = ariaLabel;
        this.update();
    }
    get ariaLabel() {
        return this._ariaLabel;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.update();
    }
    get items() {
        return this._items;
    }
    get scrollTop() {
        return this.ui.list.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.ui.list.scrollTop = scrollTop;
    }
    set items(items) {
        this._items = items;
        this.itemsUpdated = true;
        this.update();
    }
    get canSelectMany() {
        return this._canSelectMany;
    }
    set canSelectMany(canSelectMany) {
        this._canSelectMany = canSelectMany;
        this.update();
    }
    get canAcceptInBackground() {
        return this._canAcceptInBackground;
    }
    set canAcceptInBackground(canAcceptInBackground) {
        this._canAcceptInBackground = canAcceptInBackground;
    }
    get matchOnDescription() {
        return this._matchOnDescription;
    }
    set matchOnDescription(matchOnDescription) {
        this._matchOnDescription = matchOnDescription;
        this.update();
    }
    get matchOnDetail() {
        return this._matchOnDetail;
    }
    set matchOnDetail(matchOnDetail) {
        this._matchOnDetail = matchOnDetail;
        this.update();
    }
    get matchOnLabel() {
        return this._matchOnLabel;
    }
    set matchOnLabel(matchOnLabel) {
        this._matchOnLabel = matchOnLabel;
        this.update();
    }
    get matchOnLabelMode() {
        return this._matchOnLabelMode;
    }
    set matchOnLabelMode(matchOnLabelMode) {
        this._matchOnLabelMode = matchOnLabelMode;
        this.update();
    }
    get sortByLabel() {
        return this._sortByLabel;
    }
    set sortByLabel(sortByLabel) {
        this._sortByLabel = sortByLabel;
        this.update();
    }
    get autoFocusOnList() {
        return this._autoFocusOnList;
    }
    set autoFocusOnList(autoFocusOnList) {
        this._autoFocusOnList = autoFocusOnList;
        this.update();
    }
    get keepScrollPosition() {
        return this._keepScrollPosition;
    }
    set keepScrollPosition(keepScrollPosition) {
        this._keepScrollPosition = keepScrollPosition;
    }
    get itemActivation() {
        return this._itemActivation;
    }
    set itemActivation(itemActivation) {
        this._itemActivation = itemActivation;
    }
    get activeItems() {
        return this._activeItems;
    }
    set activeItems(activeItems) {
        this._activeItems = activeItems;
        this.activeItemsUpdated = true;
        this.update();
    }
    get selectedItems() {
        return this._selectedItems;
    }
    set selectedItems(selectedItems) {
        this._selectedItems = selectedItems;
        this.selectedItemsUpdated = true;
        this.update();
    }
    get keyMods() {
        if (this._quickNavigate) {
            // Disable keyMods when quick navigate is enabled
            // because in this model the interaction is purely
            // keyboard driven and Ctrl/Alt are typically
            // pressed and hold during this interaction.
            return quickInput/* NO_KEY_MODS */.X5;
        }
        return this.ui.keyMods;
    }
    set valueSelection(valueSelection) {
        this._valueSelection = valueSelection;
        this.valueSelectionUpdated = true;
        this.update();
    }
    get customButton() {
        return this._customButton;
    }
    set customButton(showCustomButton) {
        this._customButton = showCustomButton;
        this.update();
    }
    get customLabel() {
        return this._customButtonLabel;
    }
    set customLabel(label) {
        this._customButtonLabel = label;
        this.update();
    }
    get customHover() {
        return this._customButtonHover;
    }
    set customHover(hover) {
        this._customButtonHover = hover;
        this.update();
    }
    get ok() {
        return this._ok;
    }
    set ok(showOkButton) {
        this._ok = showOkButton;
        this.update();
    }
    get hideInput() {
        return !!this._hideInput;
    }
    set hideInput(hideInput) {
        this._hideInput = hideInput;
        this.update();
    }
    trySelectFirst() {
        if (this.autoFocusOnList) {
            if (!this.canSelectMany) {
                this.ui.list.focus(QuickInputListFocus.First);
            }
        }
    }
    show() {
        if (!this.visible) {
            this.visibleDisposables.add(this.ui.inputBox.onDidChange(value => {
                this.doSetValue(value, true /* skip update since this originates from the UI */);
            }));
            this.visibleDisposables.add(this.ui.inputBox.onMouseDown(event => {
                if (!this.autoFocusOnList) {
                    this.ui.list.clearFocus();
                }
            }));
            this.visibleDisposables.add((this._hideInput ? this.ui.list : this.ui.inputBox).onKeyDown((event) => {
                switch (event.keyCode) {
                    case 18 /* KeyCode.DownArrow */:
                        this.ui.list.focus(QuickInputListFocus.Next);
                        if (this.canSelectMany) {
                            this.ui.list.domFocus();
                        }
                        dom/* EventHelper */.zB.stop(event, true);
                        break;
                    case 16 /* KeyCode.UpArrow */:
                        if (this.ui.list.getFocusedElements().length) {
                            this.ui.list.focus(QuickInputListFocus.Previous);
                        }
                        else {
                            this.ui.list.focus(QuickInputListFocus.Last);
                        }
                        if (this.canSelectMany) {
                            this.ui.list.domFocus();
                        }
                        dom/* EventHelper */.zB.stop(event, true);
                        break;
                    case 12 /* KeyCode.PageDown */:
                        this.ui.list.focus(QuickInputListFocus.NextPage);
                        if (this.canSelectMany) {
                            this.ui.list.domFocus();
                        }
                        dom/* EventHelper */.zB.stop(event, true);
                        break;
                    case 11 /* KeyCode.PageUp */:
                        this.ui.list.focus(QuickInputListFocus.PreviousPage);
                        if (this.canSelectMany) {
                            this.ui.list.domFocus();
                        }
                        dom/* EventHelper */.zB.stop(event, true);
                        break;
                    case 17 /* KeyCode.RightArrow */:
                        if (!this._canAcceptInBackground) {
                            return; // needs to be enabled
                        }
                        if (!this.ui.inputBox.isSelectionAtEnd()) {
                            return; // ensure input box selection at end
                        }
                        if (this.activeItems[0]) {
                            this._selectedItems = [this.activeItems[0]];
                            this.onDidChangeSelectionEmitter.fire(this.selectedItems);
                            this.handleAccept(true);
                        }
                        break;
                    case 14 /* KeyCode.Home */:
                        if ((event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
                            this.ui.list.focus(QuickInputListFocus.First);
                            dom/* EventHelper */.zB.stop(event, true);
                        }
                        break;
                    case 13 /* KeyCode.End */:
                        if ((event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey) {
                            this.ui.list.focus(QuickInputListFocus.Last);
                            dom/* EventHelper */.zB.stop(event, true);
                        }
                        break;
                }
            }));
            this.visibleDisposables.add(this.ui.onDidAccept(() => {
                if (this.canSelectMany) {
                    // if there are no checked elements, it means that an onDidChangeSelection never fired to overwrite
                    // `_selectedItems`. In that case, we should emit one with an empty array to ensure that
                    // `.selectedItems` is up to date.
                    if (!this.ui.list.getCheckedElements().length) {
                        this._selectedItems = [];
                        this.onDidChangeSelectionEmitter.fire(this.selectedItems);
                    }
                }
                else if (this.activeItems[0]) {
                    // For single-select, we set `selectedItems` to the item that was accepted.
                    this._selectedItems = [this.activeItems[0]];
                    this.onDidChangeSelectionEmitter.fire(this.selectedItems);
                }
                this.handleAccept(false);
            }));
            this.visibleDisposables.add(this.ui.onDidCustom(() => {
                this.onDidCustomEmitter.fire();
            }));
            this.visibleDisposables.add(this.ui.list.onDidChangeFocus(focusedItems => {
                if (this.activeItemsUpdated) {
                    return; // Expect another event.
                }
                if (this.activeItemsToConfirm !== this._activeItems && (0,arrays/* equals */.fS)(focusedItems, this._activeItems, (a, b) => a === b)) {
                    return;
                }
                this._activeItems = focusedItems;
                this.onDidChangeActiveEmitter.fire(focusedItems);
            }));
            this.visibleDisposables.add(this.ui.list.onDidChangeSelection(({ items: selectedItems, event }) => {
                if (this.canSelectMany) {
                    if (selectedItems.length) {
                        this.ui.list.setSelectedElements([]);
                    }
                    return;
                }
                if (this.selectedItemsToConfirm !== this._selectedItems && (0,arrays/* equals */.fS)(selectedItems, this._selectedItems, (a, b) => a === b)) {
                    return;
                }
                this._selectedItems = selectedItems;
                this.onDidChangeSelectionEmitter.fire(selectedItems);
                if (selectedItems.length) {
                    this.handleAccept(event instanceof MouseEvent && event.button === 1 /* mouse middle click */);
                }
            }));
            this.visibleDisposables.add(this.ui.list.onChangedCheckedElements(checkedItems => {
                if (!this.canSelectMany) {
                    return;
                }
                if (this.selectedItemsToConfirm !== this._selectedItems && (0,arrays/* equals */.fS)(checkedItems, this._selectedItems, (a, b) => a === b)) {
                    return;
                }
                this._selectedItems = checkedItems;
                this.onDidChangeSelectionEmitter.fire(checkedItems);
            }));
            this.visibleDisposables.add(this.ui.list.onButtonTriggered(event => this.onDidTriggerItemButtonEmitter.fire(event)));
            this.visibleDisposables.add(this.ui.list.onSeparatorButtonTriggered(event => this.onDidTriggerSeparatorButtonEmitter.fire(event)));
            this.visibleDisposables.add(this.registerQuickNavigation());
            this.valueSelectionUpdated = true;
        }
        super.show(); // TODO: Why have show() bubble up while update() trickles down?
    }
    handleAccept(inBackground) {
        // Figure out veto via `onWillAccept` event
        let veto = false;
        this.onWillAcceptEmitter.fire({ veto: () => veto = true });
        // Continue with `onDidAccept` if no veto
        if (!veto) {
            this.onDidAcceptEmitter.fire({ inBackground });
        }
    }
    registerQuickNavigation() {
        return dom/* addDisposableListener */.nm(this.ui.container, dom/* EventType */.tw.KEY_UP, e => {
            if (this.canSelectMany || !this._quickNavigate) {
                return;
            }
            const keyboardEvent = new browser_keyboardEvent/* StandardKeyboardEvent */.y(e);
            const keyCode = keyboardEvent.keyCode;
            // Select element when keys are pressed that signal it
            const quickNavKeys = this._quickNavigate.keybindings;
            const wasTriggerKeyPressed = quickNavKeys.some(k => {
                const chords = k.getChords();
                if (chords.length > 1) {
                    return false;
                }
                if (chords[0].shiftKey && keyCode === 4 /* KeyCode.Shift */) {
                    if (keyboardEvent.ctrlKey || keyboardEvent.altKey || keyboardEvent.metaKey) {
                        return false; // this is an optimistic check for the shift key being used to navigate back in quick input
                    }
                    return true;
                }
                if (chords[0].altKey && keyCode === 6 /* KeyCode.Alt */) {
                    return true;
                }
                if (chords[0].ctrlKey && keyCode === 5 /* KeyCode.Ctrl */) {
                    return true;
                }
                if (chords[0].metaKey && keyCode === 57 /* KeyCode.Meta */) {
                    return true;
                }
                return false;
            });
            if (wasTriggerKeyPressed) {
                if (this.activeItems[0]) {
                    this._selectedItems = [this.activeItems[0]];
                    this.onDidChangeSelectionEmitter.fire(this.selectedItems);
                    this.handleAccept(false);
                }
                // Unset quick navigate after press. It is only valid once
                // and should not result in any behaviour change afterwards
                // if the picker remains open because there was no active item
                this._quickNavigate = undefined;
            }
        });
    }
    update() {
        if (!this.visible) {
            return;
        }
        // store the scrollTop before it is reset
        const scrollTopBefore = this.keepScrollPosition ? this.scrollTop : 0;
        const hasDescription = !!this.description;
        const visibilities = {
            title: !!this.title || !!this.step || !!this.buttons.length,
            description: hasDescription,
            checkAll: this.canSelectMany && !this._hideCheckAll,
            checkBox: this.canSelectMany,
            inputBox: !this._hideInput,
            progressBar: !this._hideInput || hasDescription,
            visibleCount: true,
            count: this.canSelectMany,
            ok: this.ok === 'default' ? this.canSelectMany : this.ok,
            list: true,
            message: !!this.validationMessage,
            customButton: this.customButton
        };
        this.ui.setVisibilities(visibilities);
        super.update();
        if (this.ui.inputBox.value !== this.value) {
            this.ui.inputBox.value = this.value;
        }
        if (this.valueSelectionUpdated) {
            this.valueSelectionUpdated = false;
            this.ui.inputBox.select(this._valueSelection && { start: this._valueSelection[0], end: this._valueSelection[1] });
        }
        if (this.ui.inputBox.placeholder !== (this.placeholder || '')) {
            this.ui.inputBox.placeholder = (this.placeholder || '');
        }
        let ariaLabel = this.ariaLabel;
        // Only set aria label to the input box placeholder if we actually have an input box.
        if (!ariaLabel && visibilities.inputBox) {
            ariaLabel = this.placeholder || QuickPick.DEFAULT_ARIA_LABEL;
            // If we have a title, include it in the aria label.
            if (this.title) {
                ariaLabel += ` - ${this.title}`;
            }
        }
        if (this.ui.list.ariaLabel !== ariaLabel) {
            this.ui.list.ariaLabel = (0,types/* withUndefinedAsNull */.M2)(ariaLabel);
        }
        this.ui.list.matchOnDescription = this.matchOnDescription;
        this.ui.list.matchOnDetail = this.matchOnDetail;
        this.ui.list.matchOnLabel = this.matchOnLabel;
        this.ui.list.matchOnLabelMode = this.matchOnLabelMode;
        this.ui.list.sortByLabel = this.sortByLabel;
        if (this.itemsUpdated) {
            this.itemsUpdated = false;
            this.ui.list.setElements(this.items);
            this.ui.list.filter(this.filterValue(this.ui.inputBox.value));
            this.ui.checkAll.checked = this.ui.list.getAllVisibleChecked();
            this.ui.visibleCount.setCount(this.ui.list.getVisibleCount());
            this.ui.count.setCount(this.ui.list.getCheckedCount());
            switch (this._itemActivation) {
                case quickInput/* ItemActivation */.jG.NONE:
                    this._itemActivation = quickInput/* ItemActivation */.jG.FIRST; // only valid once, then unset
                    break;
                case quickInput/* ItemActivation */.jG.SECOND:
                    this.ui.list.focus(QuickInputListFocus.Second);
                    this._itemActivation = quickInput/* ItemActivation */.jG.FIRST; // only valid once, then unset
                    break;
                case quickInput/* ItemActivation */.jG.LAST:
                    this.ui.list.focus(QuickInputListFocus.Last);
                    this._itemActivation = quickInput/* ItemActivation */.jG.FIRST; // only valid once, then unset
                    break;
                default:
                    this.trySelectFirst();
                    break;
            }
        }
        if (this.ui.container.classList.contains('show-checkboxes') !== !!this.canSelectMany) {
            if (this.canSelectMany) {
                this.ui.list.clearFocus();
            }
            else {
                this.trySelectFirst();
            }
        }
        if (this.activeItemsUpdated) {
            this.activeItemsUpdated = false;
            this.activeItemsToConfirm = this._activeItems;
            this.ui.list.setFocusedElements(this.activeItems);
            if (this.activeItemsToConfirm === this._activeItems) {
                this.activeItemsToConfirm = null;
            }
        }
        if (this.selectedItemsUpdated) {
            this.selectedItemsUpdated = false;
            this.selectedItemsToConfirm = this._selectedItems;
            if (this.canSelectMany) {
                this.ui.list.setCheckedElements(this.selectedItems);
            }
            else {
                this.ui.list.setSelectedElements(this.selectedItems);
            }
            if (this.selectedItemsToConfirm === this._selectedItems) {
                this.selectedItemsToConfirm = null;
            }
        }
        this.ui.customButton.label = this.customLabel || '';
        this.ui.customButton.element.title = this.customHover || '';
        if (!visibilities.inputBox) {
            // we need to move focus into the tree to detect keybindings
            // properly when the input box is not visible (quick nav)
            this.ui.list.domFocus();
            // Focus the first element in the list if multiselect is enabled
            if (this.canSelectMany) {
                this.ui.list.focus(QuickInputListFocus.First);
            }
        }
        // Set the scroll position to what it was before updating the items
        if (this.keepScrollPosition) {
            this.scrollTop = scrollTopBefore;
        }
    }
}
QuickPick.DEFAULT_ARIA_LABEL = (0,nls/* localize */.NC)('quickInputBox.ariaLabel', "Type to narrow down results.");
class InputBox extends QuickInput {
    constructor() {
        super(...arguments);
        this._value = '';
        this.valueSelectionUpdated = true;
        this._password = false;
        this.onDidValueChangeEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidAcceptEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeValue = this.onDidValueChangeEmitter.event;
        this.onDidAccept = this.onDidAcceptEmitter.event;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value || '';
        this.update();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
        this.update();
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
        this.update();
    }
    show() {
        if (!this.visible) {
            this.visibleDisposables.add(this.ui.inputBox.onDidChange(value => {
                if (value === this.value) {
                    return;
                }
                this._value = value;
                this.onDidValueChangeEmitter.fire(value);
            }));
            this.visibleDisposables.add(this.ui.onDidAccept(() => this.onDidAcceptEmitter.fire()));
            this.valueSelectionUpdated = true;
        }
        super.show();
    }
    update() {
        if (!this.visible) {
            return;
        }
        this.ui.container.classList.remove('hidden-input');
        const visibilities = {
            title: !!this.title || !!this.step || !!this.buttons.length,
            description: !!this.description || !!this.step,
            inputBox: true, message: true
        };
        this.ui.setVisibilities(visibilities);
        super.update();
        if (this.ui.inputBox.value !== this.value) {
            this.ui.inputBox.value = this.value;
        }
        if (this.valueSelectionUpdated) {
            this.valueSelectionUpdated = false;
            this.ui.inputBox.select(this._valueSelection && { start: this._valueSelection[0], end: this._valueSelection[1] });
        }
        if (this.ui.inputBox.placeholder !== (this.placeholder || '')) {
            this.ui.inputBox.placeholder = (this.placeholder || '');
        }
        if (this.ui.inputBox.password !== this.password) {
            this.ui.inputBox.password = this.password;
        }
    }
}
class QuickInputController extends lifecycle/* Disposable */.JT {
    constructor(options) {
        super();
        this.options = options;
        this.enabled = true;
        this.onDidAcceptEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidCustomEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onDidTriggerButtonEmitter = this._register(new common_event/* Emitter */.Q5());
        this.keyMods = { ctrlCmd: false, alt: false };
        this.controller = null;
        this.onShowEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onShow = this.onShowEmitter.event;
        this.onHideEmitter = this._register(new common_event/* Emitter */.Q5());
        this.onHide = this.onHideEmitter.event;
        this.idPrefix = options.idPrefix;
        this.parentElement = options.container;
        this.styles = options.styles;
        this.registerKeyModsListeners();
    }
    registerKeyModsListeners() {
        const listener = (e) => {
            this.keyMods.ctrlCmd = e.ctrlKey || e.metaKey;
            this.keyMods.alt = e.altKey;
        };
        this._register(dom/* addDisposableListener */.nm(window, dom/* EventType */.tw.KEY_DOWN, listener, true));
        this._register(dom/* addDisposableListener */.nm(window, dom/* EventType */.tw.KEY_UP, listener, true));
        this._register(dom/* addDisposableListener */.nm(window, dom/* EventType */.tw.MOUSE_DOWN, listener, true));
    }
    getUI() {
        if (this.ui) {
            return this.ui;
        }
        const container = dom/* append */.R3(this.parentElement, quickInput_$('.quick-input-widget.show-file-icons'));
        container.tabIndex = -1;
        container.style.display = 'none';
        const styleSheet = dom/* createStyleSheet */.dS(container);
        const titleBar = dom/* append */.R3(container, quickInput_$('.quick-input-titlebar'));
        const leftActionBar = this._register(new actionbar/* ActionBar */.o(titleBar));
        leftActionBar.domNode.classList.add('quick-input-left-action-bar');
        const title = dom/* append */.R3(titleBar, quickInput_$('.quick-input-title'));
        const rightActionBar = this._register(new actionbar/* ActionBar */.o(titleBar));
        rightActionBar.domNode.classList.add('quick-input-right-action-bar');
        const description1 = dom/* append */.R3(container, quickInput_$('.quick-input-description'));
        const headerContainer = dom/* append */.R3(container, quickInput_$('.quick-input-header'));
        const checkAll = dom/* append */.R3(headerContainer, quickInput_$('input.quick-input-check-all'));
        checkAll.type = 'checkbox';
        checkAll.setAttribute('aria-label', (0,nls/* localize */.NC)('quickInput.checkAll', "Toggle all checkboxes"));
        this._register(dom/* addStandardDisposableListener */.mu(checkAll, dom/* EventType */.tw.CHANGE, e => {
            const checked = checkAll.checked;
            list.setAllVisibleChecked(checked);
        }));
        this._register(dom/* addDisposableListener */.nm(checkAll, dom/* EventType */.tw.CLICK, e => {
            if (e.x || e.y) { // Avoid 'click' triggered by 'space'...
                inputBox.setFocus();
            }
        }));
        const description2 = dom/* append */.R3(headerContainer, quickInput_$('.quick-input-description'));
        const extraContainer = dom/* append */.R3(headerContainer, quickInput_$('.quick-input-and-message'));
        const filterContainer = dom/* append */.R3(extraContainer, quickInput_$('.quick-input-filter'));
        const inputBox = this._register(new QuickInputBox(filterContainer, this.styles.inputBox, this.styles.toggle));
        inputBox.setAttribute('aria-describedby', `${this.idPrefix}message`);
        const visibleCountContainer = dom/* append */.R3(filterContainer, quickInput_$('.quick-input-visible-count'));
        visibleCountContainer.setAttribute('aria-live', 'polite');
        visibleCountContainer.setAttribute('aria-atomic', 'true');
        const visibleCount = new countBadge/* CountBadge */.Z(visibleCountContainer, { countFormat: (0,nls/* localize */.NC)({ key: 'quickInput.visibleCount', comment: ['This tells the user how many items are shown in a list of items to select from. The items can be anything. Currently not visible, but read by screen readers.'] }, "{0} Results") }, this.styles.countBadge);
        const countContainer = dom/* append */.R3(filterContainer, quickInput_$('.quick-input-count'));
        countContainer.setAttribute('aria-live', 'polite');
        const count = new countBadge/* CountBadge */.Z(countContainer, { countFormat: (0,nls/* localize */.NC)({ key: 'quickInput.countSelected', comment: ['This tells the user how many items are selected in a list of items to select from. The items can be anything.'] }, "{0} Selected") }, this.styles.countBadge);
        const okContainer = dom/* append */.R3(headerContainer, quickInput_$('.quick-input-action'));
        const ok = new button_button/* Button */.z(okContainer, this.styles.button);
        ok.label = (0,nls/* localize */.NC)('ok', "OK");
        this._register(ok.onDidClick(e => {
            this.onDidAcceptEmitter.fire();
        }));
        const customButtonContainer = dom/* append */.R3(headerContainer, quickInput_$('.quick-input-action'));
        const customButton = new button_button/* Button */.z(customButtonContainer, this.styles.button);
        customButton.label = (0,nls/* localize */.NC)('custom', "Custom");
        this._register(customButton.onDidClick(e => {
            this.onDidCustomEmitter.fire();
        }));
        const message = dom/* append */.R3(extraContainer, quickInput_$(`#${this.idPrefix}message.quick-input-message`));
        const progressBar = new progressbar/* ProgressBar */.k(container, this.styles.progressBar);
        progressBar.getContainer().classList.add('quick-input-progress');
        const widget = dom/* append */.R3(container, quickInput_$('.quick-input-html-widget'));
        widget.tabIndex = -1;
        const listId = this.idPrefix + 'list';
        const list = this._register(new QuickInputList(container, listId, this.options));
        inputBox.setAttribute('aria-controls', listId);
        this._register(list.onDidChangeFocus(() => {
            var _a;
            inputBox.setAttribute('aria-activedescendant', (_a = list.getActiveDescendant()) !== null && _a !== void 0 ? _a : '');
        }));
        this._register(list.onChangedAllVisibleChecked(checked => {
            checkAll.checked = checked;
        }));
        this._register(list.onChangedVisibleCount(c => {
            visibleCount.setCount(c);
        }));
        this._register(list.onChangedCheckedCount(c => {
            count.setCount(c);
        }));
        this._register(list.onLeave(() => {
            // Defer to avoid the input field reacting to the triggering key.
            setTimeout(() => {
                inputBox.setFocus();
                if (this.controller instanceof QuickPick && this.controller.canSelectMany) {
                    list.clearFocus();
                }
            }, 0);
        }));
        const focusTracker = dom/* trackFocus */.go(container);
        this._register(focusTracker);
        this._register(dom/* addDisposableListener */.nm(container, dom/* EventType */.tw.FOCUS, e => {
            this.previousFocusElement = e.relatedTarget instanceof HTMLElement ? e.relatedTarget : undefined;
        }, true));
        this._register(focusTracker.onDidBlur(() => {
            if (!this.getUI().ignoreFocusOut && !this.options.ignoreFocusOut()) {
                this.hide(quickInput/* QuickInputHideReason */.Jq.Blur);
            }
            this.previousFocusElement = undefined;
        }));
        this._register(dom/* addDisposableListener */.nm(container, dom/* EventType */.tw.FOCUS, (e) => {
            inputBox.setFocus();
        }));
        this._register(dom/* addDisposableListener */.nm(container, dom/* EventType */.tw.KEY_DOWN, (e) => {
            const event = new browser_keyboardEvent/* StandardKeyboardEvent */.y(e);
            switch (event.keyCode) {
                case 3 /* KeyCode.Enter */:
                    dom/* EventHelper */.zB.stop(e, true);
                    if (this.enabled) {
                        this.onDidAcceptEmitter.fire();
                    }
                    break;
                case 9 /* KeyCode.Escape */:
                    dom/* EventHelper */.zB.stop(e, true);
                    this.hide(quickInput/* QuickInputHideReason */.Jq.Gesture);
                    break;
                case 2 /* KeyCode.Tab */:
                    if (!event.altKey && !event.ctrlKey && !event.metaKey) {
                        // detect only visible actions
                        const selectors = [
                            '.quick-input-list .monaco-action-bar .always-visible',
                            '.quick-input-list-entry:hover .monaco-action-bar',
                            '.monaco-list-row.focused .monaco-action-bar'
                        ];
                        if (container.classList.contains('show-checkboxes')) {
                            selectors.push('input');
                        }
                        else {
                            selectors.push('input[type=text]');
                        }
                        if (this.getUI().list.isDisplayed()) {
                            selectors.push('.monaco-list');
                        }
                        // focus links if there are any
                        if (this.getUI().message) {
                            selectors.push('.quick-input-message a');
                        }
                        if (this.getUI().widget) {
                            if (dom/* isAncestor */.jg(event.target, this.getUI().widget)) {
                                // let the widget control tab
                                break;
                            }
                            selectors.push('.quick-input-html-widget');
                        }
                        const stops = container.querySelectorAll(selectors.join(', '));
                        if (event.shiftKey && event.target === stops[0]) {
                            // Clear the focus from the list in order to allow
                            // screen readers to read operations in the input box.
                            dom/* EventHelper */.zB.stop(e, true);
                            list.clearFocus();
                        }
                        else if (!event.shiftKey && dom/* isAncestor */.jg(event.target, stops[stops.length - 1])) {
                            dom/* EventHelper */.zB.stop(e, true);
                            stops[0].focus();
                        }
                    }
                    break;
                case 10 /* KeyCode.Space */:
                    if (event.ctrlKey) {
                        dom/* EventHelper */.zB.stop(e, true);
                        this.getUI().list.toggleHover();
                    }
                    break;
            }
        }));
        this.ui = {
            container,
            styleSheet,
            leftActionBar,
            titleBar,
            title,
            description1,
            description2,
            widget,
            rightActionBar,
            checkAll,
            filterContainer,
            inputBox,
            visibleCountContainer,
            visibleCount,
            countContainer,
            count,
            okContainer,
            ok,
            message,
            customButtonContainer,
            customButton,
            list,
            progressBar,
            onDidAccept: this.onDidAcceptEmitter.event,
            onDidCustom: this.onDidCustomEmitter.event,
            onDidTriggerButton: this.onDidTriggerButtonEmitter.event,
            ignoreFocusOut: false,
            keyMods: this.keyMods,
            show: controller => this.show(controller),
            hide: () => this.hide(),
            setVisibilities: visibilities => this.setVisibilities(visibilities),
            setEnabled: enabled => this.setEnabled(enabled),
            setContextKey: contextKey => this.options.setContextKey(contextKey),
            linkOpenerDelegate: content => this.options.linkOpenerDelegate(content)
        };
        this.updateStyles();
        return this.ui;
    }
    pick(picks, options = {}, token = cancellation/* CancellationToken */.T.None) {
        return new Promise((doResolve, reject) => {
            let resolve = (result) => {
                var _a;
                resolve = doResolve;
                (_a = options.onKeyMods) === null || _a === void 0 ? void 0 : _a.call(options, input.keyMods);
                doResolve(result);
            };
            if (token.isCancellationRequested) {
                resolve(undefined);
                return;
            }
            const input = this.createQuickPick();
            let activeItem;
            const disposables = [
                input,
                input.onDidAccept(() => {
                    if (input.canSelectMany) {
                        resolve(input.selectedItems.slice());
                        input.hide();
                    }
                    else {
                        const result = input.activeItems[0];
                        if (result) {
                            resolve(result);
                            input.hide();
                        }
                    }
                }),
                input.onDidChangeActive(items => {
                    const focused = items[0];
                    if (focused && options.onDidFocus) {
                        options.onDidFocus(focused);
                    }
                }),
                input.onDidChangeSelection(items => {
                    if (!input.canSelectMany) {
                        const result = items[0];
                        if (result) {
                            resolve(result);
                            input.hide();
                        }
                    }
                }),
                input.onDidTriggerItemButton(event => options.onDidTriggerItemButton && options.onDidTriggerItemButton(Object.assign(Object.assign({}, event), { removeItem: () => {
                        const index = input.items.indexOf(event.item);
                        if (index !== -1) {
                            const items = input.items.slice();
                            const removed = items.splice(index, 1);
                            const activeItems = input.activeItems.filter(activeItem => activeItem !== removed[0]);
                            const keepScrollPositionBefore = input.keepScrollPosition;
                            input.keepScrollPosition = true;
                            input.items = items;
                            if (activeItems) {
                                input.activeItems = activeItems;
                            }
                            input.keepScrollPosition = keepScrollPositionBefore;
                        }
                    } }))),
                input.onDidTriggerSeparatorButton(event => { var _a; return (_a = options.onDidTriggerSeparatorButton) === null || _a === void 0 ? void 0 : _a.call(options, event); }),
                input.onDidChangeValue(value => {
                    if (activeItem && !value && (input.activeItems.length !== 1 || input.activeItems[0] !== activeItem)) {
                        input.activeItems = [activeItem];
                    }
                }),
                token.onCancellationRequested(() => {
                    input.hide();
                }),
                input.onDidHide(() => {
                    (0,lifecycle/* dispose */.B9)(disposables);
                    resolve(undefined);
                }),
            ];
            input.title = options.title;
            input.canSelectMany = !!options.canPickMany;
            input.placeholder = options.placeHolder;
            input.ignoreFocusOut = !!options.ignoreFocusLost;
            input.matchOnDescription = !!options.matchOnDescription;
            input.matchOnDetail = !!options.matchOnDetail;
            input.matchOnLabel = (options.matchOnLabel === undefined) || options.matchOnLabel; // default to true
            input.autoFocusOnList = (options.autoFocusOnList === undefined) || options.autoFocusOnList; // default to true
            input.quickNavigate = options.quickNavigate;
            input.hideInput = !!options.hideInput;
            input.contextKey = options.contextKey;
            input.busy = true;
            Promise.all([picks, options.activeItem])
                .then(([items, _activeItem]) => {
                activeItem = _activeItem;
                input.busy = false;
                input.items = items;
                if (input.canSelectMany) {
                    input.selectedItems = items.filter(item => item.type !== 'separator' && item.picked);
                }
                if (activeItem) {
                    input.activeItems = [activeItem];
                }
            });
            input.show();
            Promise.resolve(picks).then(undefined, err => {
                reject(err);
                input.hide();
            });
        });
    }
    createQuickPick() {
        const ui = this.getUI();
        return new QuickPick(ui);
    }
    createInputBox() {
        const ui = this.getUI();
        return new InputBox(ui);
    }
    show(controller) {
        const ui = this.getUI();
        this.onShowEmitter.fire();
        const oldController = this.controller;
        this.controller = controller;
        oldController === null || oldController === void 0 ? void 0 : oldController.didHide();
        this.setEnabled(true);
        ui.leftActionBar.clear();
        ui.title.textContent = '';
        ui.description1.textContent = '';
        ui.description2.textContent = '';
        dom/* reset */.mc(ui.widget);
        ui.rightActionBar.clear();
        ui.checkAll.checked = false;
        // ui.inputBox.value = ''; Avoid triggering an event.
        ui.inputBox.placeholder = '';
        ui.inputBox.password = false;
        ui.inputBox.showDecoration(common_severity/* default */.Z.Ignore);
        ui.visibleCount.setCount(0);
        ui.count.setCount(0);
        dom/* reset */.mc(ui.message);
        ui.progressBar.stop();
        ui.list.setElements([]);
        ui.list.matchOnDescription = false;
        ui.list.matchOnDetail = false;
        ui.list.matchOnLabel = true;
        ui.list.sortByLabel = true;
        ui.ignoreFocusOut = false;
        ui.inputBox.toggles = undefined;
        const backKeybindingLabel = this.options.backKeybindingLabel();
        backButton.tooltip = backKeybindingLabel ? (0,nls/* localize */.NC)('quickInput.backWithKeybinding', "Back ({0})", backKeybindingLabel) : (0,nls/* localize */.NC)('quickInput.back', "Back");
        ui.container.style.display = '';
        this.updateLayout();
        ui.inputBox.setFocus();
    }
    setVisibilities(visibilities) {
        const ui = this.getUI();
        ui.title.style.display = visibilities.title ? '' : 'none';
        ui.description1.style.display = visibilities.description && (visibilities.inputBox || visibilities.checkAll) ? '' : 'none';
        ui.description2.style.display = visibilities.description && !(visibilities.inputBox || visibilities.checkAll) ? '' : 'none';
        ui.checkAll.style.display = visibilities.checkAll ? '' : 'none';
        ui.filterContainer.style.display = visibilities.inputBox ? '' : 'none';
        ui.visibleCountContainer.style.display = visibilities.visibleCount ? '' : 'none';
        ui.countContainer.style.display = visibilities.count ? '' : 'none';
        ui.okContainer.style.display = visibilities.ok ? '' : 'none';
        ui.customButtonContainer.style.display = visibilities.customButton ? '' : 'none';
        ui.message.style.display = visibilities.message ? '' : 'none';
        ui.progressBar.getContainer().style.display = visibilities.progressBar ? '' : 'none';
        ui.list.display(!!visibilities.list);
        ui.container.classList.toggle('show-checkboxes', !!visibilities.checkBox);
        ui.container.classList.toggle('hidden-input', !visibilities.inputBox && !visibilities.description);
        this.updateLayout(); // TODO
    }
    setEnabled(enabled) {
        if (enabled !== this.enabled) {
            this.enabled = enabled;
            for (const item of this.getUI().leftActionBar.viewItems) {
                item.action.enabled = enabled;
            }
            for (const item of this.getUI().rightActionBar.viewItems) {
                item.action.enabled = enabled;
            }
            this.getUI().checkAll.disabled = !enabled;
            this.getUI().inputBox.enabled = enabled;
            this.getUI().ok.enabled = enabled;
            this.getUI().list.enabled = enabled;
        }
    }
    hide(reason) {
        var _a;
        const controller = this.controller;
        if (controller) {
            const focusChanged = !((_a = this.ui) === null || _a === void 0 ? void 0 : _a.container.contains(document.activeElement));
            this.controller = null;
            this.onHideEmitter.fire();
            this.getUI().container.style.display = 'none';
            if (!focusChanged) {
                let currentElement = this.previousFocusElement;
                while (currentElement && !currentElement.offsetParent) {
                    currentElement = (0,types/* withNullAsUndefined */.f6)(currentElement.parentElement);
                }
                if (currentElement === null || currentElement === void 0 ? void 0 : currentElement.offsetParent) {
                    currentElement.focus();
                    this.previousFocusElement = undefined;
                }
                else {
                    this.options.returnFocus();
                }
            }
            controller.didHide(reason);
        }
    }
    layout(dimension, titleBarOffset) {
        this.dimension = dimension;
        this.titleBarOffset = titleBarOffset;
        this.updateLayout();
    }
    updateLayout() {
        if (this.ui && this.isDisplayed()) {
            this.ui.container.style.top = `${this.titleBarOffset}px`;
            const style = this.ui.container.style;
            const width = Math.min(this.dimension.width * 0.62 /* golden cut */, QuickInputController.MAX_WIDTH);
            style.width = width + 'px';
            style.marginLeft = '-' + (width / 2) + 'px';
            this.ui.inputBox.layout();
            this.ui.list.layout(this.dimension && this.dimension.height * 0.4);
        }
    }
    applyStyles(styles) {
        this.styles = styles;
        this.updateStyles();
    }
    updateStyles() {
        if (this.ui) {
            const { quickInputTitleBackground, quickInputBackground, quickInputForeground, widgetBorder, widgetShadow, } = this.styles.widget;
            this.ui.titleBar.style.backgroundColor = quickInputTitleBackground !== null && quickInputTitleBackground !== void 0 ? quickInputTitleBackground : '';
            this.ui.container.style.backgroundColor = quickInputBackground !== null && quickInputBackground !== void 0 ? quickInputBackground : '';
            this.ui.container.style.color = quickInputForeground !== null && quickInputForeground !== void 0 ? quickInputForeground : '';
            this.ui.container.style.border = widgetBorder ? `1px solid ${widgetBorder}` : '';
            this.ui.container.style.boxShadow = widgetShadow ? `0 0 8px 2px ${widgetShadow}` : '';
            this.ui.list.style(this.styles.list);
            const content = [];
            if (this.styles.pickerGroup.pickerGroupBorder) {
                content.push(`.quick-input-list .quick-input-list-entry { border-top-color:  ${this.styles.pickerGroup.pickerGroupBorder}; }`);
            }
            if (this.styles.pickerGroup.pickerGroupForeground) {
                content.push(`.quick-input-list .quick-input-list-separator { color:  ${this.styles.pickerGroup.pickerGroupForeground}; }`);
            }
            if (this.styles.pickerGroup.pickerGroupForeground) {
                content.push(`.quick-input-list .quick-input-list-separator-as-item { color:  ${this.styles.pickerGroup.pickerGroupForeground}; }`);
            }
            if (this.styles.keybindingLabel.keybindingLabelBackground ||
                this.styles.keybindingLabel.keybindingLabelBorder ||
                this.styles.keybindingLabel.keybindingLabelBottomBorder ||
                this.styles.keybindingLabel.keybindingLabelShadow ||
                this.styles.keybindingLabel.keybindingLabelForeground) {
                content.push('.quick-input-list .monaco-keybinding > .monaco-keybinding-key {');
                if (this.styles.keybindingLabel.keybindingLabelBackground) {
                    content.push(`background-color: ${this.styles.keybindingLabel.keybindingLabelBackground};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelBorder) {
                    // Order matters here. `border-color` must come before `border-bottom-color`.
                    content.push(`border-color: ${this.styles.keybindingLabel.keybindingLabelBorder};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelBottomBorder) {
                    content.push(`border-bottom-color: ${this.styles.keybindingLabel.keybindingLabelBottomBorder};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelShadow) {
                    content.push(`box-shadow: inset 0 -1px 0 ${this.styles.keybindingLabel.keybindingLabelShadow};`);
                }
                if (this.styles.keybindingLabel.keybindingLabelForeground) {
                    content.push(`color: ${this.styles.keybindingLabel.keybindingLabelForeground};`);
                }
                content.push('}');
            }
            const newStyles = content.join('\n');
            if (newStyles !== this.ui.styleSheet.textContent) {
                this.ui.styleSheet.textContent = newStyles;
            }
        }
    }
    isDisplayed() {
        return this.ui && this.ui.container.style.display !== 'none';
    }
}
QuickInputController.MAX_WIDTH = 600; // Max total width of quick input widget

;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/quickinput/browser/quickInputService.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var quickInputService_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var quickInputService_param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












let QuickInputService = class QuickInputService extends themeService/* Themable */.bB {
    get controller() {
        if (!this._controller) {
            this._controller = this._register(this.createController());
        }
        return this._controller;
    }
    get hasController() { return !!this._controller; }
    get quickAccess() {
        if (!this._quickAccess) {
            this._quickAccess = this._register(this.instantiationService.createInstance(QuickAccessController));
        }
        return this._quickAccess;
    }
    constructor(instantiationService, contextKeyService, themeService, layoutService) {
        super(themeService);
        this.instantiationService = instantiationService;
        this.contextKeyService = contextKeyService;
        this.layoutService = layoutService;
        this._onShow = this._register(new common_event/* Emitter */.Q5());
        this._onHide = this._register(new common_event/* Emitter */.Q5());
        this.contexts = new Map();
    }
    createController(host = this.layoutService, options) {
        const defaultOptions = {
            idPrefix: 'quickInput_',
            container: host.container,
            ignoreFocusOut: () => false,
            backKeybindingLabel: () => undefined,
            setContextKey: (id) => this.setContextKey(id),
            linkOpenerDelegate: (content) => {
                // HACK: https://github.com/microsoft/vscode/issues/173691
                this.instantiationService.invokeFunction(accessor => {
                    const openerService = accessor.get(common_opener/* IOpenerService */.v4);
                    openerService.open(content, { allowCommands: true, fromUserGesture: true });
                });
            },
            returnFocus: () => host.focus(),
            createList: (user, container, delegate, renderers, options) => this.instantiationService.createInstance(listService/* WorkbenchList */.ev, user, container, delegate, renderers, options),
            hoverDelegate: {
                showHover(options, focus) {
                    return undefined;
                },
                delay: 200
            },
            styles: this.computeStyles()
        };
        const controller = this._register(new QuickInputController(Object.assign(Object.assign({}, defaultOptions), options)));
        controller.layout(host.dimension, host.offset.quickPickTop);
        // Layout changes
        this._register(host.onDidLayout(dimension => controller.layout(dimension, host.offset.quickPickTop)));
        // Context keys
        this._register(controller.onShow(() => {
            this.resetContextKeys();
            this._onShow.fire();
        }));
        this._register(controller.onHide(() => {
            this.resetContextKeys();
            this._onHide.fire();
        }));
        return controller;
    }
    setContextKey(id) {
        let key;
        if (id) {
            key = this.contexts.get(id);
            if (!key) {
                key = new contextkey/* RawContextKey */.uy(id, false)
                    .bindTo(this.contextKeyService);
                this.contexts.set(id, key);
            }
        }
        if (key && key.get()) {
            return; // already active context
        }
        this.resetContextKeys();
        key === null || key === void 0 ? void 0 : key.set(true);
    }
    resetContextKeys() {
        this.contexts.forEach(context => {
            if (context.get()) {
                context.reset();
            }
        });
    }
    pick(picks, options = {}, token = cancellation/* CancellationToken */.T.None) {
        return this.controller.pick(picks, options, token);
    }
    createQuickPick() {
        return this.controller.createQuickPick();
    }
    createInputBox() {
        return this.controller.createInputBox();
    }
    updateStyles() {
        if (this.hasController) {
            this.controller.applyStyles(this.computeStyles());
        }
    }
    computeStyles() {
        return {
            widget: {
                quickInputBackground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* quickInputBackground */.zKr),
                quickInputForeground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* quickInputForeground */.tZ6),
                quickInputTitleBackground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* quickInputTitleBackground */.loF),
                widgetBorder: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* widgetBorder */.A42),
                widgetShadow: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* widgetShadow */.rh),
            },
            inputBox: defaultStyles/* defaultInputBoxStyles */.Hc,
            toggle: defaultStyles/* defaultToggleStyles */.pl,
            countBadge: defaultStyles/* defaultCountBadgeStyles */.ku,
            button: defaultStyles/* defaultButtonStyles */.wG,
            progressBar: defaultStyles/* defaultProgressBarStyles */.b5,
            keybindingLabel: defaultStyles/* defaultKeybindingLabelStyles */.eO,
            list: (0,defaultStyles/* getListStyles */.TU)({
                listBackground: colorRegistry/* quickInputBackground */.zKr,
                listFocusBackground: colorRegistry/* quickInputListFocusBackground */.Vqd,
                listFocusForeground: colorRegistry/* quickInputListFocusForeground */.NPS,
                // Look like focused when inactive.
                listInactiveFocusForeground: colorRegistry/* quickInputListFocusForeground */.NPS,
                listInactiveSelectionIconForeground: colorRegistry/* quickInputListFocusIconForeground */.cbQ,
                listInactiveFocusBackground: colorRegistry/* quickInputListFocusBackground */.Vqd,
                listFocusOutline: colorRegistry/* activeContrastBorder */.xL1,
                listInactiveFocusOutline: colorRegistry/* activeContrastBorder */.xL1,
            }),
            pickerGroup: {
                pickerGroupBorder: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* pickerGroupBorder */.opG),
                pickerGroupForeground: (0,colorRegistry/* asCssVariable */.n_1)(colorRegistry/* pickerGroupForeground */.kJk),
            }
        };
    }
};
QuickInputService = quickInputService_decorate([
    quickInputService_param(0, instantiation/* IInstantiationService */.TG),
    quickInputService_param(1, contextkey/* IContextKeyService */.i6),
    quickInputService_param(2, themeService/* IThemeService */.XE),
    quickInputService_param(3, layoutService/* ILayoutService */.F)
], QuickInputService);


/***/ }),

/***/ 39913:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IP: function() { return /* binding */ Extensions; },
/* harmony export */   Ry: function() { return /* binding */ DefaultQuickAccessFilterValue; }
/* harmony export */ });
/* unused harmony export QuickAccessRegistry */
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



var DefaultQuickAccessFilterValue;
(function (DefaultQuickAccessFilterValue) {
    /**
     * Keep the value as it is given to quick access.
     */
    DefaultQuickAccessFilterValue[DefaultQuickAccessFilterValue["PRESERVE"] = 0] = "PRESERVE";
    /**
     * Use the value that was used last time something was accepted from the picker.
     */
    DefaultQuickAccessFilterValue[DefaultQuickAccessFilterValue["LAST"] = 1] = "LAST";
})(DefaultQuickAccessFilterValue || (DefaultQuickAccessFilterValue = {}));
const Extensions = {
    Quickaccess: 'workbench.contributions.quickaccess'
};
class QuickAccessRegistry {
    constructor() {
        this.providers = [];
        this.defaultProvider = undefined;
    }
    registerQuickAccessProvider(provider) {
        // Extract the default provider when no prefix is present
        if (provider.prefix.length === 0) {
            this.defaultProvider = provider;
        }
        else {
            this.providers.push(provider);
        }
        // sort the providers by decreasing prefix length, such that longer
        // prefixes take priority: 'ext' vs 'ext install' - the latter should win
        this.providers.sort((providerA, providerB) => providerB.prefix.length - providerA.prefix.length);
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            this.providers.splice(this.providers.indexOf(provider), 1);
            if (this.defaultProvider === provider) {
                this.defaultProvider = undefined;
            }
        });
    }
    getQuickAccessProviders() {
        return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .coalesce */ .kX)([this.defaultProvider, ...this.providers]);
    }
    getQuickAccessProvider(prefix) {
        const result = prefix ? (this.providers.find(provider => prefix.startsWith(provider.prefix)) || undefined) : undefined;
        return result || this.defaultProvider;
    }
}
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_2__/* .Registry */ .B.add(Extensions.Quickaccess, new QuickAccessRegistry());


/***/ }),

/***/ 71130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jq: function() { return /* binding */ QuickInputHideReason; },
/* harmony export */   X5: function() { return /* binding */ NO_KEY_MODS; },
/* harmony export */   eJ: function() { return /* binding */ IQuickInputService; },
/* harmony export */   jG: function() { return /* binding */ ItemActivation; }
/* harmony export */ });
/* unused harmony exports QuickPickItemScorerAccessor, quickPickItemScorerAccessor */
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const NO_KEY_MODS = { ctrlCmd: false, alt: false };
var QuickInputHideReason;
(function (QuickInputHideReason) {
    /**
     * Focus moved away from the quick input.
     */
    QuickInputHideReason[QuickInputHideReason["Blur"] = 1] = "Blur";
    /**
     * An explicit user gesture, e.g. pressing Escape key.
     */
    QuickInputHideReason[QuickInputHideReason["Gesture"] = 2] = "Gesture";
    /**
     * Anything else.
     */
    QuickInputHideReason[QuickInputHideReason["Other"] = 3] = "Other";
})(QuickInputHideReason || (QuickInputHideReason = {}));
var ItemActivation;
(function (ItemActivation) {
    ItemActivation[ItemActivation["NONE"] = 0] = "NONE";
    ItemActivation[ItemActivation["FIRST"] = 1] = "FIRST";
    ItemActivation[ItemActivation["SECOND"] = 2] = "SECOND";
    ItemActivation[ItemActivation["LAST"] = 3] = "LAST";
})(ItemActivation || (ItemActivation = {}));
class QuickPickItemScorerAccessor {
    constructor(options) {
        this.options = options;
    }
}
const quickPickItemScorerAccessor = new QuickPickItemScorerAccessor();
//#endregion
const IQuickInputService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('quickInputService');


/***/ }),

/***/ 72015:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ Registry; }
/* harmony export */ });
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29012);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28935);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class RegistryImpl {
    constructor() {
        this.data = new Map();
    }
    add(id, data) {
        _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__.ok(_base_common_types_js__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD(id));
        _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__.ok(_base_common_types_js__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn(data));
        _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__.ok(!this.data.has(id), 'There is already an extension with this id');
        this.data.set(id, data);
    }
    as(id) {
        return this.data.get(id) || null;
    }
}
const Registry = new RegistryImpl();


/***/ }),

/***/ 59513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: function() { return /* binding */ SeverityIcon; }
});

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
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/severityIcon/browser/media/severityIcon.css
var severityIcon = __webpack_require__(40632);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/severityIcon/browser/media/severityIcon.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(severityIcon/* default */.Z, options);




       /* harmony default export */ var media_severityIcon = (severityIcon/* default */.Z && severityIcon/* default */.Z.locals ? severityIcon/* default */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/codicons.js
var codicons = __webpack_require__(14162);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/themables.js
var themables = __webpack_require__(51446);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/severity.js
var common_severity = __webpack_require__(92380);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/severityIcon/browser/severityIcon.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




var SeverityIcon;
(function (SeverityIcon) {
    function className(severity) {
        switch (severity) {
            case common_severity/* default */.Z.Ignore:
                return 'severity-ignore ' + themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.info);
            case common_severity/* default */.Z.Info:
                return themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.info);
            case common_severity/* default */.Z.Warning:
                return themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.warning);
            case common_severity/* default */.Z.Error:
                return themables/* ThemeIcon */.k.asClassName(codicons/* Codicon */.l.error);
            default:
                return '';
        }
    }
    SeverityIcon.className = className;
})(SeverityIcon || (SeverityIcon = {}));


/***/ })

}]);