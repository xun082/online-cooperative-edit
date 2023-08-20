"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-61f56485"],{

/***/ 83144:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e7: function() { return /* binding */ IAudioCueService; },
/* harmony export */   y$: function() { return /* binding */ AudioCue; }
/* harmony export */ });
/* unused harmony export Sound */
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23330);


const IAudioCueService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('audioCue');
/**
 * Corresponds to the audio files in ./media.
*/
class Sound {
    static register(options) {
        const sound = new Sound(options.fileName);
        return sound;
    }
    constructor(fileName) {
        this.fileName = fileName;
    }
}
Sound.error = Sound.register({ fileName: 'error.mp3' });
Sound.warning = Sound.register({ fileName: 'warning.mp3' });
Sound.foldedArea = Sound.register({ fileName: 'foldedAreas.mp3' });
Sound.break = Sound.register({ fileName: 'break.mp3' });
Sound.quickFixes = Sound.register({ fileName: 'quickFixes.mp3' });
Sound.taskCompleted = Sound.register({ fileName: 'taskCompleted.mp3' });
Sound.taskFailed = Sound.register({ fileName: 'taskFailed.mp3' });
Sound.terminalBell = Sound.register({ fileName: 'terminalBell.mp3' });
Sound.diffLineInserted = Sound.register({ fileName: 'diffLineInserted.mp3' });
Sound.diffLineDeleted = Sound.register({ fileName: 'diffLineDeleted.mp3' });
Sound.diffLineModified = Sound.register({ fileName: 'diffLineModified.mp3' });
class AudioCue {
    static register(options) {
        const audioCue = new AudioCue(options.sound, options.name, options.settingsKey);
        AudioCue._audioCues.add(audioCue);
        return audioCue;
    }
    constructor(sound, name, settingsKey) {
        this.sound = sound;
        this.name = name;
        this.settingsKey = settingsKey;
    }
}
AudioCue._audioCues = new Set();
AudioCue.error = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.lineHasError.name', 'Error on Line'),
    sound: Sound.error,
    settingsKey: 'audioCues.lineHasError',
});
AudioCue.warning = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.lineHasWarning.name', 'Warning on Line'),
    sound: Sound.warning,
    settingsKey: 'audioCues.lineHasWarning',
});
AudioCue.foldedArea = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.lineHasFoldedArea.name', 'Folded Area on Line'),
    sound: Sound.foldedArea,
    settingsKey: 'audioCues.lineHasFoldedArea',
});
AudioCue.break = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.lineHasBreakpoint.name', 'Breakpoint on Line'),
    sound: Sound.break,
    settingsKey: 'audioCues.lineHasBreakpoint',
});
AudioCue.inlineSuggestion = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.lineHasInlineSuggestion.name', 'Inline Suggestion on Line'),
    sound: Sound.quickFixes,
    settingsKey: 'audioCues.lineHasInlineSuggestion',
});
AudioCue.terminalQuickFix = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.terminalQuickFix.name', 'Terminal Quick Fix'),
    sound: Sound.quickFixes,
    settingsKey: 'audioCues.terminalQuickFix',
});
AudioCue.onDebugBreak = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.onDebugBreak.name', 'Debugger Stopped on Breakpoint'),
    sound: Sound.break,
    settingsKey: 'audioCues.onDebugBreak',
});
AudioCue.noInlayHints = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.noInlayHints', 'No Inlay Hints on Line'),
    sound: Sound.error,
    settingsKey: 'audioCues.noInlayHints'
});
AudioCue.taskCompleted = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.taskCompleted', 'Task Completed'),
    sound: Sound.taskCompleted,
    settingsKey: 'audioCues.taskCompleted'
});
AudioCue.taskFailed = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.taskFailed', 'Task Failed'),
    sound: Sound.taskFailed,
    settingsKey: 'audioCues.taskFailed'
});
AudioCue.terminalCommandFailed = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.terminalCommandFailed', 'Terminal Command Failed'),
    sound: Sound.error,
    settingsKey: 'audioCues.terminalCommandFailed'
});
AudioCue.terminalBell = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.terminalBell', 'Terminal Bell'),
    sound: Sound.terminalBell,
    settingsKey: 'audioCues.terminalBell'
});
AudioCue.notebookCellCompleted = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.notebookCellCompleted', 'Notebook Cell Completed'),
    sound: Sound.taskCompleted,
    settingsKey: 'audioCues.notebookCellCompleted'
});
AudioCue.notebookCellFailed = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.notebookCellFailed', 'Notebook Cell Failed'),
    sound: Sound.taskFailed,
    settingsKey: 'audioCues.notebookCellFailed'
});
AudioCue.diffLineInserted = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.diffLineInserted', 'Diff Line Inserted'),
    sound: Sound.diffLineInserted,
    settingsKey: 'audioCues.diffLineInserted'
});
AudioCue.diffLineDeleted = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.diffLineDeleted', 'Diff Line Deleted'),
    sound: Sound.diffLineDeleted,
    settingsKey: 'audioCues.diffLineDeleted'
});
AudioCue.diffLineModified = AudioCue.register({
    name: (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('audioCues.diffLineModified', 'Diff Line Modified'),
    sound: Sound.diffLineModified,
    settingsKey: 'audioCues.diffLineModified'
});


/***/ }),

/***/ 27107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ BrowserClipboardService; }
/* harmony export */ });
/* harmony import */ var _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47975);
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39862);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72432);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _layout_browser_layoutService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12732);
/* harmony import */ var _log_common_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28876);
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






let BrowserClipboardService = class BrowserClipboardService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .Disposable */ .JT {
    constructor(layoutService, logService) {
        super();
        this.layoutService = layoutService;
        this.logService = logService;
        this.mapTextToType = new Map(); // unsupported in web (only in-memory)
        this.findText = ''; // unsupported in web (only in-memory)
        this.resources = [];
        if (_base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__.isSafari || _base_browser_browser_js__WEBPACK_IMPORTED_MODULE_0__.isWebkitWebView) {
            this.installWebKitWriteTextWorkaround();
        }
    }
    // In Safari, it has the following note:
    //
    // "The request to write to the clipboard must be triggered during a user gesture.
    // A call to clipboard.write or clipboard.writeText outside the scope of a user
    // gesture(such as "click" or "touch" event handlers) will result in the immediate
    // rejection of the promise returned by the API call."
    // From: https://webkit.org/blog/10855/async-clipboard-api/
    //
    // Since extensions run in a web worker, and handle gestures in an asynchronous way,
    // they are not classified by Safari as "in response to a user gesture" and will reject.
    //
    // This function sets up some handlers to work around that behavior.
    installWebKitWriteTextWorkaround() {
        const handler = () => {
            const currentWritePromise = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_2__/* .DeferredPromise */ .CR();
            // Cancel the previous promise since we just created a new one in response to this new event
            if (this.webKitPendingClipboardWritePromise && !this.webKitPendingClipboardWritePromise.isSettled) {
                this.webKitPendingClipboardWritePromise.cancel();
            }
            this.webKitPendingClipboardWritePromise = currentWritePromise;
            // The ctor of ClipboardItem allows you to pass in a promise that will resolve to a string.
            // This allows us to pass in a Promise that will either be cancelled by another event or
            // resolved with the contents of the first call to this.writeText.
            // see https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/ClipboardItem#parameters
            navigator.clipboard.write([new ClipboardItem({
                    'text/plain': currentWritePromise.p,
                })]).catch((err) => __awaiter(this, void 0, void 0, function* () {
                if (!(err instanceof Error) || err.name !== 'NotAllowedError' || !currentWritePromise.isRejected) {
                    this.logService.error(err);
                }
            }));
        };
        if (this.layoutService.hasContainer) {
            this._register((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .addDisposableListener */ .nm)(this.layoutService.container, 'click', handler));
            this._register((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__/* .addDisposableListener */ .nm)(this.layoutService.container, 'keydown', handler));
        }
    }
    writeText(text, type) {
        return __awaiter(this, void 0, void 0, function* () {
            // With type: only in-memory is supported
            if (type) {
                this.mapTextToType.set(type, text);
                return;
            }
            if (this.webKitPendingClipboardWritePromise) {
                // For Safari, we complete this Promise which allows the call to `navigator.clipboard.write()`
                // above to resolve and successfully copy to the clipboard. If we let this continue, Safari
                // would throw an error because this call stack doesn't appear to originate from a user gesture.
                return this.webKitPendingClipboardWritePromise.complete(text);
            }
            // Guard access to navigator.clipboard with try/catch
            // as we have seen DOMExceptions in certain browsers
            // due to security policies.
            try {
                return yield navigator.clipboard.writeText(text);
            }
            catch (error) {
                console.error(error);
            }
            // Fallback to textarea and execCommand solution
            const activeElement = document.activeElement;
            const textArea = document.body.appendChild((0,_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_1__.$)('textarea', { 'aria-hidden': true }));
            textArea.style.height = '1px';
            textArea.style.width = '1px';
            textArea.style.position = 'absolute';
            textArea.value = text;
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            if (activeElement instanceof HTMLElement) {
                activeElement.focus();
            }
            document.body.removeChild(textArea);
            return;
        });
    }
    readText(type) {
        return __awaiter(this, void 0, void 0, function* () {
            // With type: only in-memory is supported
            if (type) {
                return this.mapTextToType.get(type) || '';
            }
            // Guard access to navigator.clipboard with try/catch
            // as we have seen DOMExceptions in certain browsers
            // due to security policies.
            try {
                return yield navigator.clipboard.readText();
            }
            catch (error) {
                console.error(error);
                return '';
            }
        });
    }
    readFindText() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findText;
        });
    }
    writeFindText(text) {
        return __awaiter(this, void 0, void 0, function* () {
            this.findText = text;
        });
    }
    readResources() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.resources;
        });
    }
};
BrowserClipboardService = __decorate([
    __param(0, _layout_browser_layoutService_js__WEBPACK_IMPORTED_MODULE_4__/* .ILayoutService */ .F),
    __param(1, _log_common_log_js__WEBPACK_IMPORTED_MODULE_5__/* .ILogService */ .VZ)
], BrowserClipboardService);


/***/ }),

/***/ 78547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ IClipboardService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IClipboardService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('clipboardService');


/***/ }),

/***/ 77783:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ ICommandService; },
/* harmony export */   P: function() { return /* binding */ CommandsRegistry; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64202);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41558);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28935);
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const ICommandService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_4__/* .createDecorator */ .yh)('commandService');
const CommandsRegistry = new class {
    constructor() {
        this._commands = new Map();
        this._onDidRegisterCommand = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidRegisterCommand = this._onDidRegisterCommand.event;
    }
    registerCommand(idOrCommand, handler) {
        if (!idOrCommand) {
            throw new Error(`invalid command`);
        }
        if (typeof idOrCommand === 'string') {
            if (!handler) {
                throw new Error(`invalid command`);
            }
            return this.registerCommand({ id: idOrCommand, handler });
        }
        // add argument validation if rich command metadata is provided
        if (idOrCommand.description) {
            const constraints = [];
            for (const arg of idOrCommand.description.args) {
                constraints.push(arg.constraint);
            }
            const actualHandler = idOrCommand.handler;
            idOrCommand.handler = function (accessor, ...args) {
                (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_5__/* .validateConstraints */ .D8)(args, constraints);
                return actualHandler(accessor, ...args);
            };
        }
        // find a place to store the command
        const { id } = idOrCommand;
        let commands = this._commands.get(id);
        if (!commands) {
            commands = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_3__/* .LinkedList */ .S();
            this._commands.set(id, commands);
        }
        const removeFn = commands.unshift(idOrCommand);
        const ret = (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .toDisposable */ .OF)(() => {
            removeFn();
            const command = this._commands.get(id);
            if (command === null || command === void 0 ? void 0 : command.isEmpty()) {
                this._commands.delete(id);
            }
        });
        // tell the world about this command
        this._onDidRegisterCommand.fire(id);
        return ret;
    }
    registerCommandAlias(oldId, newId) {
        return CommandsRegistry.registerCommand(oldId, (accessor, ...args) => accessor.get(ICommandService).executeCommand(newId, ...args));
    }
    getCommand(id) {
        const list = this._commands.get(id);
        if (!list || list.isEmpty()) {
            return undefined;
        }
        return _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_1__/* .Iterable */ .$.first(list);
    }
    getCommands() {
        const result = new Map();
        for (const key of this._commands.keys()) {
            const command = this.getCommand(key);
            if (command) {
                result.set(key, command);
            }
        }
        return result;
    }
};
CommandsRegistry.registerCommand('noop', () => { });


/***/ }),

/***/ 33022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KV: function() { return /* binding */ addToValueTree; },
/* harmony export */   Mt: function() { return /* binding */ getConfigurationValue; },
/* harmony export */   Od: function() { return /* binding */ toValuesTree; },
/* harmony export */   UI: function() { return /* binding */ getLanguageTagSettingPlainKey; },
/* harmony export */   Ui: function() { return /* binding */ IConfigurationService; },
/* harmony export */   xL: function() { return /* binding */ removeFromValueTree; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IConfigurationService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('configurationService');
function toValuesTree(properties, conflictReporter) {
    const root = Object.create(null);
    for (const key in properties) {
        addToValueTree(root, key, properties[key], conflictReporter);
    }
    return root;
}
function addToValueTree(settingsTreeRoot, key, value, conflictReporter) {
    const segments = key.split('.');
    const last = segments.pop();
    let curr = settingsTreeRoot;
    for (let i = 0; i < segments.length; i++) {
        const s = segments[i];
        let obj = curr[s];
        switch (typeof obj) {
            case 'undefined':
                obj = curr[s] = Object.create(null);
                break;
            case 'object':
                break;
            default:
                conflictReporter(`Ignoring ${key} as ${segments.slice(0, i + 1).join('.')} is ${JSON.stringify(obj)}`);
                return;
        }
        curr = obj;
    }
    if (typeof curr === 'object' && curr !== null) {
        try {
            curr[last] = value; // workaround https://github.com/microsoft/vscode/issues/13606
        }
        catch (e) {
            conflictReporter(`Ignoring ${key} as ${segments.join('.')} is ${JSON.stringify(curr)}`);
        }
    }
    else {
        conflictReporter(`Ignoring ${key} as ${segments.join('.')} is ${JSON.stringify(curr)}`);
    }
}
function removeFromValueTree(valueTree, key) {
    const segments = key.split('.');
    doRemoveFromValueTree(valueTree, segments);
}
function doRemoveFromValueTree(valueTree, segments) {
    const first = segments.shift();
    if (segments.length === 0) {
        // Reached last segment
        delete valueTree[first];
        return;
    }
    if (Object.keys(valueTree).indexOf(first) !== -1) {
        const value = valueTree[first];
        if (typeof value === 'object' && !Array.isArray(value)) {
            doRemoveFromValueTree(value, segments);
            if (Object.keys(value).length === 0) {
                delete valueTree[first];
            }
        }
    }
}
/**
 * A helper function to get the configuration value with a specific settings path (e.g. config.some.setting)
 */
function getConfigurationValue(config, settingPath, defaultValue) {
    function accessSetting(config, path) {
        let current = config;
        for (const component of path) {
            if (typeof current !== 'object' || current === null) {
                return undefined;
            }
            current = current[component];
        }
        return current;
    }
    const path = settingPath.split('.');
    const result = accessSetting(config, path);
    return typeof result === 'undefined' ? defaultValue : result;
}
function getLanguageTagSettingPlainKey(settingKey) {
    return settingKey.replace(/[\[\]]/g, '');
}


/***/ }),

/***/ 66704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VK: function() { return /* binding */ Configuration; },
/* harmony export */   VV: function() { return /* binding */ ConfigurationModel; },
/* harmony export */   YX: function() { return /* binding */ ConfigurationChangeEvent; }
/* harmony export */ });
/* unused harmony export ConfigurationModelParser */
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17795);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99269);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28935);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56946);
/* harmony import */ var _configuration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33022);
/* harmony import */ var _configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85118);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/








function freeze(data) {
    return Object.isFrozen(data) ? data : _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepFreeze */ ._A(data);
}
class ConfigurationModel {
    constructor(_contents = {}, _keys = [], _overrides = [], raw) {
        this._contents = _contents;
        this._keys = _keys;
        this._overrides = _overrides;
        this.raw = raw;
        this.overrideConfigurations = new Map();
    }
    get rawConfiguration() {
        var _a;
        if (!this._rawConfiguration) {
            if ((_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) {
                const rawConfigurationModels = this.raw.map(raw => {
                    if (raw instanceof ConfigurationModel) {
                        return raw;
                    }
                    const parser = new ConfigurationModelParser('');
                    parser.parseRaw(raw);
                    return parser.configurationModel;
                });
                this._rawConfiguration = rawConfigurationModels.reduce((previous, current) => current === previous ? current : previous.merge(current), rawConfigurationModels[0]);
            }
            else {
                // raw is same as current
                this._rawConfiguration = this;
            }
        }
        return this._rawConfiguration;
    }
    get contents() {
        return this._contents;
    }
    get overrides() {
        return this._overrides;
    }
    get keys() {
        return this._keys;
    }
    isEmpty() {
        return this._keys.length === 0 && Object.keys(this._contents).length === 0 && this._overrides.length === 0;
    }
    getValue(section) {
        return section ? (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .getConfigurationValue */ .Mt)(this.contents, section) : this.contents;
    }
    inspect(section, overrideIdentifier) {
        const value = this.rawConfiguration.getValue(section);
        const override = overrideIdentifier ? this.rawConfiguration.getOverrideValue(section, overrideIdentifier) : undefined;
        const merged = overrideIdentifier ? this.rawConfiguration.override(overrideIdentifier).getValue(section) : value;
        return { value, override, merged };
    }
    getOverrideValue(section, overrideIdentifier) {
        const overrideContents = this.getContentsForOverrideIdentifer(overrideIdentifier);
        return overrideContents
            ? section ? (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .getConfigurationValue */ .Mt)(overrideContents, section) : overrideContents
            : undefined;
    }
    override(identifier) {
        let overrideConfigurationModel = this.overrideConfigurations.get(identifier);
        if (!overrideConfigurationModel) {
            overrideConfigurationModel = this.createOverrideConfigurationModel(identifier);
            this.overrideConfigurations.set(identifier, overrideConfigurationModel);
        }
        return overrideConfigurationModel;
    }
    merge(...others) {
        var _a, _b;
        const contents = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(this.contents);
        const overrides = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(this.overrides);
        const keys = [...this.keys];
        const raws = ((_a = this.raw) === null || _a === void 0 ? void 0 : _a.length) ? [...this.raw] : [this];
        for (const other of others) {
            raws.push(...(((_b = other.raw) === null || _b === void 0 ? void 0 : _b.length) ? other.raw : [other]));
            if (other.isEmpty()) {
                continue;
            }
            this.mergeContents(contents, other.contents);
            for (const otherOverride of other.overrides) {
                const [override] = overrides.filter(o => _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS(o.identifiers, otherOverride.identifiers));
                if (override) {
                    this.mergeContents(override.contents, otherOverride.contents);
                    override.keys.push(...otherOverride.keys);
                    override.keys = _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .distinct */ .EB(override.keys);
                }
                else {
                    overrides.push(_base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(otherOverride));
                }
            }
            for (const key of other.keys) {
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                }
            }
        }
        return new ConfigurationModel(contents, keys, overrides, raws.every(raw => raw instanceof ConfigurationModel) ? undefined : raws);
    }
    createOverrideConfigurationModel(identifier) {
        const overrideContents = this.getContentsForOverrideIdentifer(identifier);
        if (!overrideContents || typeof overrideContents !== 'object' || !Object.keys(overrideContents).length) {
            // If there are no valid overrides, return self
            return this;
        }
        const contents = {};
        for (const key of _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .distinct */ .EB([...Object.keys(this.contents), ...Object.keys(overrideContents)])) {
            let contentsForKey = this.contents[key];
            const overrideContentsForKey = overrideContents[key];
            // If there are override contents for the key, clone and merge otherwise use base contents
            if (overrideContentsForKey) {
                // Clone and merge only if base contents and override contents are of type object otherwise just override
                if (typeof contentsForKey === 'object' && typeof overrideContentsForKey === 'object') {
                    contentsForKey = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(contentsForKey);
                    this.mergeContents(contentsForKey, overrideContentsForKey);
                }
                else {
                    contentsForKey = overrideContentsForKey;
                }
            }
            contents[key] = contentsForKey;
        }
        return new ConfigurationModel(contents, this.keys, this.overrides);
    }
    mergeContents(source, target) {
        for (const key of Object.keys(target)) {
            if (key in source) {
                if (_base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .isObject */ .Kn(source[key]) && _base_common_types_js__WEBPACK_IMPORTED_MODULE_7__/* .isObject */ .Kn(target[key])) {
                    this.mergeContents(source[key], target[key]);
                    continue;
                }
            }
            source[key] = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(target[key]);
        }
    }
    getContentsForOverrideIdentifer(identifier) {
        let contentsForIdentifierOnly = null;
        let contents = null;
        const mergeContents = (contentsToMerge) => {
            if (contentsToMerge) {
                if (contents) {
                    this.mergeContents(contents, contentsToMerge);
                }
                else {
                    contents = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .deepClone */ .I8(contentsToMerge);
                }
            }
        };
        for (const override of this.overrides) {
            if (_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS(override.identifiers, [identifier])) {
                contentsForIdentifierOnly = override.contents;
            }
            else if (override.identifiers.includes(identifier)) {
                mergeContents(override.contents);
            }
        }
        // Merge contents of the identifier only at the end to take precedence.
        mergeContents(contentsForIdentifierOnly);
        return contents;
    }
    toJSON() {
        return {
            contents: this.contents,
            overrides: this.overrides,
            keys: this.keys
        };
    }
    // Update methods
    addValue(key, value) {
        this.updateValue(key, value, true);
    }
    setValue(key, value) {
        this.updateValue(key, value, false);
    }
    removeValue(key) {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return;
        }
        this.keys.splice(index, 1);
        (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .removeFromValueTree */ .xL)(this.contents, key);
        if (_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .OVERRIDE_PROPERTY_REGEX */ .eU.test(key)) {
            this.overrides.splice(this.overrides.findIndex(o => _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .equals */ .fS(o.identifiers, (0,_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .overrideIdentifiersFromKey */ .ny)(key))), 1);
        }
    }
    updateValue(key, value, add) {
        (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .addToValueTree */ .KV)(this.contents, key, value, e => console.error(e));
        add = add || this.keys.indexOf(key) === -1;
        if (add) {
            this.keys.push(key);
        }
        if (_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .OVERRIDE_PROPERTY_REGEX */ .eU.test(key)) {
            this.overrides.push({
                identifiers: (0,_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .overrideIdentifiersFromKey */ .ny)(key),
                keys: Object.keys(this.contents[key]),
                contents: (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .toValuesTree */ .Od)(this.contents[key], message => console.error(message)),
            });
        }
    }
}
class ConfigurationModelParser {
    constructor(_name) {
        this._name = _name;
        this._raw = null;
        this._configurationModel = null;
        this._restrictedConfigurations = [];
    }
    get configurationModel() {
        return this._configurationModel || new ConfigurationModel();
    }
    parseRaw(raw, options) {
        this._raw = raw;
        const { contents, keys, overrides, restricted, hasExcludedProperties } = this.doParseRaw(raw, options);
        this._configurationModel = new ConfigurationModel(contents, keys, overrides, hasExcludedProperties ? [raw] : undefined /* raw has not changed */);
        this._restrictedConfigurations = restricted || [];
    }
    doParseRaw(raw, options) {
        const configurationProperties = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_6__/* .Registry */ .B.as(_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .Extensions */ .IP.Configuration).getConfigurationProperties();
        const filtered = this.filter(raw, configurationProperties, true, options);
        raw = filtered.raw;
        const contents = (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .toValuesTree */ .Od)(raw, message => console.error(`Conflict in settings file ${this._name}: ${message}`));
        const keys = Object.keys(raw);
        const overrides = this.toOverrides(raw, message => console.error(`Conflict in settings file ${this._name}: ${message}`));
        return { contents, keys, overrides, restricted: filtered.restricted, hasExcludedProperties: filtered.hasExcludedProperties };
    }
    filter(properties, configurationProperties, filterOverriddenProperties, options) {
        let hasExcludedProperties = false;
        if (!(options === null || options === void 0 ? void 0 : options.scopes) && !(options === null || options === void 0 ? void 0 : options.skipRestricted)) {
            return { raw: properties, restricted: [], hasExcludedProperties };
        }
        const raw = {};
        const restricted = [];
        for (const key in properties) {
            if (_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .OVERRIDE_PROPERTY_REGEX */ .eU.test(key) && filterOverriddenProperties) {
                const result = this.filter(properties[key], configurationProperties, false, options);
                raw[key] = result.raw;
                hasExcludedProperties = hasExcludedProperties || result.hasExcludedProperties;
                restricted.push(...result.restricted);
            }
            else {
                const propertySchema = configurationProperties[key];
                const scope = propertySchema ? typeof propertySchema.scope !== 'undefined' ? propertySchema.scope : 3 /* ConfigurationScope.WINDOW */ : undefined;
                if (propertySchema === null || propertySchema === void 0 ? void 0 : propertySchema.restricted) {
                    restricted.push(key);
                }
                // Load unregistered configurations always.
                if ((scope === undefined || options.scopes === undefined || options.scopes.includes(scope)) // Check scopes
                    && !(options.skipRestricted && (propertySchema === null || propertySchema === void 0 ? void 0 : propertySchema.restricted))) { // Check restricted
                    raw[key] = properties[key];
                }
                else {
                    hasExcludedProperties = true;
                }
            }
        }
        return { raw, restricted, hasExcludedProperties };
    }
    toOverrides(raw, conflictReporter) {
        const overrides = [];
        for (const key of Object.keys(raw)) {
            if (_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .OVERRIDE_PROPERTY_REGEX */ .eU.test(key)) {
                const overrideRaw = {};
                for (const keyInOverrideRaw in raw[key]) {
                    overrideRaw[keyInOverrideRaw] = raw[key][keyInOverrideRaw];
                }
                overrides.push({
                    identifiers: (0,_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .overrideIdentifiersFromKey */ .ny)(key),
                    keys: Object.keys(overrideRaw),
                    contents: (0,_configuration_js__WEBPACK_IMPORTED_MODULE_4__/* .toValuesTree */ .Od)(overrideRaw, conflictReporter)
                });
            }
        }
        return overrides;
    }
}
class ConfigurationInspectValue {
    constructor(key, overrides, _value, overrideIdentifiers, defaultConfiguration, policyConfiguration, applicationConfiguration, userConfiguration, localUserConfiguration, remoteUserConfiguration, workspaceConfiguration, folderConfigurationModel, memoryConfigurationModel) {
        this.key = key;
        this.overrides = overrides;
        this._value = _value;
        this.overrideIdentifiers = overrideIdentifiers;
        this.defaultConfiguration = defaultConfiguration;
        this.policyConfiguration = policyConfiguration;
        this.applicationConfiguration = applicationConfiguration;
        this.userConfiguration = userConfiguration;
        this.localUserConfiguration = localUserConfiguration;
        this.remoteUserConfiguration = remoteUserConfiguration;
        this.workspaceConfiguration = workspaceConfiguration;
        this.folderConfigurationModel = folderConfigurationModel;
        this.memoryConfigurationModel = memoryConfigurationModel;
    }
    inspect(model, section, overrideIdentifier) {
        const inspectValue = model.inspect(section, overrideIdentifier);
        return {
            get value() { return freeze(inspectValue.value); },
            get override() { return freeze(inspectValue.override); },
            get merged() { return freeze(inspectValue.merged); }
        };
    }
    get userInspectValue() {
        if (!this._userInspectValue) {
            this._userInspectValue = this.inspect(this.userConfiguration, this.key, this.overrides.overrideIdentifier);
        }
        return this._userInspectValue;
    }
    get user() {
        return this.userInspectValue.value !== undefined || this.userInspectValue.override !== undefined ? { value: this.userInspectValue.value, override: this.userInspectValue.override } : undefined;
    }
}
class Configuration {
    constructor(_defaultConfiguration, _policyConfiguration, _applicationConfiguration, _localUserConfiguration, _remoteUserConfiguration = new ConfigurationModel(), _workspaceConfiguration = new ConfigurationModel(), _folderConfigurations = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceMap */ .Y9(), _memoryConfiguration = new ConfigurationModel(), _memoryConfigurationByResource = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceMap */ .Y9()) {
        this._defaultConfiguration = _defaultConfiguration;
        this._policyConfiguration = _policyConfiguration;
        this._applicationConfiguration = _applicationConfiguration;
        this._localUserConfiguration = _localUserConfiguration;
        this._remoteUserConfiguration = _remoteUserConfiguration;
        this._workspaceConfiguration = _workspaceConfiguration;
        this._folderConfigurations = _folderConfigurations;
        this._memoryConfiguration = _memoryConfiguration;
        this._memoryConfigurationByResource = _memoryConfigurationByResource;
        this._workspaceConsolidatedConfiguration = null;
        this._foldersConsolidatedConfigurations = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceMap */ .Y9();
        this._userConfiguration = null;
    }
    getValue(section, overrides, workspace) {
        const consolidateConfigurationModel = this.getConsolidatedConfigurationModel(section, overrides, workspace);
        return consolidateConfigurationModel.getValue(section);
    }
    updateValue(key, value, overrides = {}) {
        let memoryConfiguration;
        if (overrides.resource) {
            memoryConfiguration = this._memoryConfigurationByResource.get(overrides.resource);
            if (!memoryConfiguration) {
                memoryConfiguration = new ConfigurationModel();
                this._memoryConfigurationByResource.set(overrides.resource, memoryConfiguration);
            }
        }
        else {
            memoryConfiguration = this._memoryConfiguration;
        }
        if (value === undefined) {
            memoryConfiguration.removeValue(key);
        }
        else {
            memoryConfiguration.setValue(key, value);
        }
        if (!overrides.resource) {
            this._workspaceConsolidatedConfiguration = null;
        }
    }
    inspect(key, overrides, workspace) {
        const consolidateConfigurationModel = this.getConsolidatedConfigurationModel(key, overrides, workspace);
        const folderConfigurationModel = this.getFolderConfigurationModelForResource(overrides.resource, workspace);
        const memoryConfigurationModel = overrides.resource ? this._memoryConfigurationByResource.get(overrides.resource) || this._memoryConfiguration : this._memoryConfiguration;
        const overrideIdentifiers = new Set();
        for (const override of consolidateConfigurationModel.overrides) {
            for (const overrideIdentifier of override.identifiers) {
                if (consolidateConfigurationModel.getOverrideValue(key, overrideIdentifier) !== undefined) {
                    overrideIdentifiers.add(overrideIdentifier);
                }
            }
        }
        return new ConfigurationInspectValue(key, overrides, consolidateConfigurationModel.getValue(key), overrideIdentifiers.size ? [...overrideIdentifiers] : undefined, this._defaultConfiguration, this._policyConfiguration.isEmpty() ? undefined : this._policyConfiguration, this.applicationConfiguration.isEmpty() ? undefined : this.applicationConfiguration, this.userConfiguration, this.localUserConfiguration, this.remoteUserConfiguration, workspace ? this._workspaceConfiguration : undefined, folderConfigurationModel ? folderConfigurationModel : undefined, memoryConfigurationModel);
    }
    get applicationConfiguration() {
        return this._applicationConfiguration;
    }
    get userConfiguration() {
        if (!this._userConfiguration) {
            this._userConfiguration = this._remoteUserConfiguration.isEmpty() ? this._localUserConfiguration : this._localUserConfiguration.merge(this._remoteUserConfiguration);
        }
        return this._userConfiguration;
    }
    get localUserConfiguration() {
        return this._localUserConfiguration;
    }
    get remoteUserConfiguration() {
        return this._remoteUserConfiguration;
    }
    getConsolidatedConfigurationModel(section, overrides, workspace) {
        let configurationModel = this.getConsolidatedConfigurationModelForResource(overrides, workspace);
        if (overrides.overrideIdentifier) {
            configurationModel = configurationModel.override(overrides.overrideIdentifier);
        }
        if (!this._policyConfiguration.isEmpty() && this._policyConfiguration.getValue(section) !== undefined) {
            configurationModel = configurationModel.merge(this._policyConfiguration);
        }
        return configurationModel;
    }
    getConsolidatedConfigurationModelForResource({ resource }, workspace) {
        let consolidateConfiguration = this.getWorkspaceConsolidatedConfiguration();
        if (workspace && resource) {
            const root = workspace.getFolder(resource);
            if (root) {
                consolidateConfiguration = this.getFolderConsolidatedConfiguration(root.uri) || consolidateConfiguration;
            }
            const memoryConfigurationForResource = this._memoryConfigurationByResource.get(resource);
            if (memoryConfigurationForResource) {
                consolidateConfiguration = consolidateConfiguration.merge(memoryConfigurationForResource);
            }
        }
        return consolidateConfiguration;
    }
    getWorkspaceConsolidatedConfiguration() {
        if (!this._workspaceConsolidatedConfiguration) {
            this._workspaceConsolidatedConfiguration = this._defaultConfiguration.merge(this.applicationConfiguration, this.userConfiguration, this._workspaceConfiguration, this._memoryConfiguration);
        }
        return this._workspaceConsolidatedConfiguration;
    }
    getFolderConsolidatedConfiguration(folder) {
        let folderConsolidatedConfiguration = this._foldersConsolidatedConfigurations.get(folder);
        if (!folderConsolidatedConfiguration) {
            const workspaceConsolidateConfiguration = this.getWorkspaceConsolidatedConfiguration();
            const folderConfiguration = this._folderConfigurations.get(folder);
            if (folderConfiguration) {
                folderConsolidatedConfiguration = workspaceConsolidateConfiguration.merge(folderConfiguration);
                this._foldersConsolidatedConfigurations.set(folder, folderConsolidatedConfiguration);
            }
            else {
                folderConsolidatedConfiguration = workspaceConsolidateConfiguration;
            }
        }
        return folderConsolidatedConfiguration;
    }
    getFolderConfigurationModelForResource(resource, workspace) {
        if (workspace && resource) {
            const root = workspace.getFolder(resource);
            if (root) {
                return this._folderConfigurations.get(root.uri);
            }
        }
        return undefined;
    }
    toData() {
        return {
            defaults: {
                contents: this._defaultConfiguration.contents,
                overrides: this._defaultConfiguration.overrides,
                keys: this._defaultConfiguration.keys
            },
            policy: {
                contents: this._policyConfiguration.contents,
                overrides: this._policyConfiguration.overrides,
                keys: this._policyConfiguration.keys
            },
            application: {
                contents: this.applicationConfiguration.contents,
                overrides: this.applicationConfiguration.overrides,
                keys: this.applicationConfiguration.keys
            },
            user: {
                contents: this.userConfiguration.contents,
                overrides: this.userConfiguration.overrides,
                keys: this.userConfiguration.keys
            },
            workspace: {
                contents: this._workspaceConfiguration.contents,
                overrides: this._workspaceConfiguration.overrides,
                keys: this._workspaceConfiguration.keys
            },
            folders: [...this._folderConfigurations.keys()].reduce((result, folder) => {
                const { contents, overrides, keys } = this._folderConfigurations.get(folder);
                result.push([folder, { contents, overrides, keys }]);
                return result;
            }, [])
        };
    }
    static parse(data) {
        const defaultConfiguration = this.parseConfigurationModel(data.defaults);
        const policyConfiguration = this.parseConfigurationModel(data.policy);
        const applicationConfiguration = this.parseConfigurationModel(data.application);
        const userConfiguration = this.parseConfigurationModel(data.user);
        const workspaceConfiguration = this.parseConfigurationModel(data.workspace);
        const folders = data.folders.reduce((result, value) => {
            result.set(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.revive(value[0]), this.parseConfigurationModel(value[1]));
            return result;
        }, new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceMap */ .Y9());
        return new Configuration(defaultConfiguration, policyConfiguration, applicationConfiguration, userConfiguration, new ConfigurationModel(), workspaceConfiguration, folders, new ConfigurationModel(), new _base_common_map_js__WEBPACK_IMPORTED_MODULE_1__/* .ResourceMap */ .Y9());
    }
    static parseConfigurationModel(model) {
        return new ConfigurationModel(model.contents, model.keys, model.overrides);
    }
}
class ConfigurationChangeEvent {
    constructor(change, previous, currentConfiguraiton, currentWorkspace) {
        this.change = change;
        this.previous = previous;
        this.currentConfiguraiton = currentConfiguraiton;
        this.currentWorkspace = currentWorkspace;
        this._marker = '\n';
        this._markerCode1 = this._marker.charCodeAt(0);
        this._markerCode2 = '.'.charCodeAt(0);
        this.affectedKeys = new Set();
        this._previousConfiguration = undefined;
        for (const key of change.keys) {
            this.affectedKeys.add(key);
        }
        for (const [, keys] of change.overrides) {
            for (const key of keys) {
                this.affectedKeys.add(key);
            }
        }
        // Example: '\nfoo.bar\nabc.def\n'
        this._affectsConfigStr = this._marker;
        for (const key of this.affectedKeys) {
            this._affectsConfigStr += key + this._marker;
        }
    }
    get previousConfiguration() {
        if (!this._previousConfiguration && this.previous) {
            this._previousConfiguration = Configuration.parse(this.previous.data);
        }
        return this._previousConfiguration;
    }
    affectsConfiguration(section, overrides) {
        var _a;
        // we have one large string with all keys that have changed. we pad (marker) the section
        // and check that either find it padded or before a segment character
        const needle = this._marker + section;
        const idx = this._affectsConfigStr.indexOf(needle);
        if (idx < 0) {
            // NOT: (marker + section)
            return false;
        }
        const pos = idx + needle.length;
        if (pos >= this._affectsConfigStr.length) {
            return false;
        }
        const code = this._affectsConfigStr.charCodeAt(pos);
        if (code !== this._markerCode1 && code !== this._markerCode2) {
            // NOT: section + (marker | segment)
            return false;
        }
        if (overrides) {
            const value1 = this.previousConfiguration ? this.previousConfiguration.getValue(section, overrides, (_a = this.previous) === null || _a === void 0 ? void 0 : _a.workspace) : undefined;
            const value2 = this.currentConfiguraiton.getValue(section, overrides, this.currentWorkspace);
            return !_base_common_objects_js__WEBPACK_IMPORTED_MODULE_2__/* .equals */ .fS(value1, value2);
        }
        return true;
    }
}


/***/ }),

/***/ 85118:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IP: function() { return /* binding */ Extensions; },
/* harmony export */   eU: function() { return /* binding */ OVERRIDE_PROPERTY_REGEX; },
/* harmony export */   ny: function() { return /* binding */ overrideIdentifiersFromKey; }
/* harmony export */ });
/* unused harmony exports allSettings, applicationSettings, machineSettings, machineOverridableSettings, windowSettings, resourceSettings, resourceLanguageSettingsSchemaId, OVERRIDE_PROPERTY_PATTERN, getDefaultValue, validateProperty */
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28935);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23330);
/* harmony import */ var _configuration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33022);
/* harmony import */ var _jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85654);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







const Extensions = {
    Configuration: 'base.contributions.configuration'
};
const allSettings = { properties: {}, patternProperties: {} };
const applicationSettings = { properties: {}, patternProperties: {} };
const machineSettings = { properties: {}, patternProperties: {} };
const machineOverridableSettings = { properties: {}, patternProperties: {} };
const windowSettings = { properties: {}, patternProperties: {} };
const resourceSettings = { properties: {}, patternProperties: {} };
const resourceLanguageSettingsSchemaId = 'vscode://schemas/settings/resourceLanguage';
const contributionRegistry = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_5__/* .Registry */ .B.as(_jsonschemas_common_jsonContributionRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .Extensions */ .I.JSONContribution);
class ConfigurationRegistry {
    constructor() {
        this.overrideIdentifiers = new Set();
        this._onDidSchemaChange = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
        this._onDidUpdateConfiguration = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5();
        this.configurationDefaultsOverrides = new Map();
        this.defaultLanguageConfigurationOverridesNode = {
            id: 'defaultOverrides',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('defaultLanguageConfigurationOverrides.title', "Default Language Configuration Overrides"),
            properties: {}
        };
        this.configurationContributors = [this.defaultLanguageConfigurationOverridesNode];
        this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: true,
            allowTrailingCommas: true,
            allowComments: true
        };
        this.configurationProperties = {};
        this.policyConfigurations = new Map();
        this.excludedConfigurationProperties = {};
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this.registerOverridePropertyPatternKey();
    }
    registerConfiguration(configuration, validate = true) {
        this.registerConfigurations([configuration], validate);
    }
    registerConfigurations(configurations, validate = true) {
        const properties = new Set();
        this.doRegisterConfigurations(configurations, validate, properties);
        contributionRegistry.registerSchema(resourceLanguageSettingsSchemaId, this.resourceLanguageSettingsSchema);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({ properties });
    }
    registerDefaultConfigurations(configurationDefaults) {
        const properties = new Set();
        this.doRegisterDefaultConfigurations(configurationDefaults, properties);
        this._onDidSchemaChange.fire();
        this._onDidUpdateConfiguration.fire({ properties, defaultsOverrides: true });
    }
    doRegisterDefaultConfigurations(configurationDefaults, bucket) {
        var _a;
        const overrideIdentifiers = [];
        for (const { overrides, source } of configurationDefaults) {
            for (const key in overrides) {
                bucket.add(key);
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    const configurationDefaultOverride = this.configurationDefaultsOverrides.get(key);
                    const valuesSources = (_a = configurationDefaultOverride === null || configurationDefaultOverride === void 0 ? void 0 : configurationDefaultOverride.valuesSources) !== null && _a !== void 0 ? _a : new Map();
                    if (source) {
                        for (const configuration of Object.keys(overrides[key])) {
                            valuesSources.set(configuration, source);
                        }
                    }
                    const defaultValue = Object.assign(Object.assign({}, ((configurationDefaultOverride === null || configurationDefaultOverride === void 0 ? void 0 : configurationDefaultOverride.value) || {})), overrides[key]);
                    this.configurationDefaultsOverrides.set(key, { source, value: defaultValue, valuesSources });
                    const plainKey = (0,_configuration_js__WEBPACK_IMPORTED_MODULE_3__/* .getLanguageTagSettingPlainKey */ .UI)(key);
                    const property = {
                        type: 'object',
                        default: defaultValue,
                        description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('defaultLanguageConfiguration.description', "Configure settings to be overridden for the {0} language.", plainKey),
                        $ref: resourceLanguageSettingsSchemaId,
                        defaultDefaultValue: defaultValue,
                        source: _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isString */ .HD(source) ? undefined : source,
                        defaultValueSource: source
                    };
                    overrideIdentifiers.push(...overrideIdentifiersFromKey(key));
                    this.configurationProperties[key] = property;
                    this.defaultLanguageConfigurationOverridesNode.properties[key] = property;
                }
                else {
                    this.configurationDefaultsOverrides.set(key, { value: overrides[key], source });
                    const property = this.configurationProperties[key];
                    if (property) {
                        this.updatePropertyDefaultValue(key, property);
                        this.updateSchema(key, property);
                    }
                }
            }
        }
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
    }
    registerOverrideIdentifiers(overrideIdentifiers) {
        this.doRegisterOverrideIdentifiers(overrideIdentifiers);
        this._onDidSchemaChange.fire();
    }
    doRegisterOverrideIdentifiers(overrideIdentifiers) {
        for (const overrideIdentifier of overrideIdentifiers) {
            this.overrideIdentifiers.add(overrideIdentifier);
        }
        this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(configurations, validate, bucket) {
        configurations.forEach(configuration => {
            this.validateAndRegisterProperties(configuration, validate, configuration.extensionInfo, configuration.restrictedProperties, undefined, bucket);
            this.configurationContributors.push(configuration);
            this.registerJSONConfiguration(configuration);
        });
    }
    validateAndRegisterProperties(configuration, validate = true, extensionInfo, restrictedProperties, scope = 3 /* ConfigurationScope.WINDOW */, bucket) {
        var _a;
        scope = _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isUndefinedOrNull */ .Jp(configuration.scope) ? scope : configuration.scope;
        const properties = configuration.properties;
        if (properties) {
            for (const key in properties) {
                const property = properties[key];
                if (validate && validateProperty(key, property)) {
                    delete properties[key];
                    continue;
                }
                property.source = extensionInfo;
                // update default value
                property.defaultDefaultValue = properties[key].default;
                this.updatePropertyDefaultValue(key, property);
                // update scope
                if (OVERRIDE_PROPERTY_REGEX.test(key)) {
                    property.scope = undefined; // No scope for overridable properties `[${identifier}]`
                }
                else {
                    property.scope = _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isUndefinedOrNull */ .Jp(property.scope) ? scope : property.scope;
                    property.restricted = _base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isUndefinedOrNull */ .Jp(property.restricted) ? !!(restrictedProperties === null || restrictedProperties === void 0 ? void 0 : restrictedProperties.includes(key)) : property.restricted;
                }
                // Add to properties maps
                // Property is included by default if 'included' is unspecified
                if (properties[key].hasOwnProperty('included') && !properties[key].included) {
                    this.excludedConfigurationProperties[key] = properties[key];
                    delete properties[key];
                    continue;
                }
                else {
                    this.configurationProperties[key] = properties[key];
                    if ((_a = properties[key].policy) === null || _a === void 0 ? void 0 : _a.name) {
                        this.policyConfigurations.set(properties[key].policy.name, key);
                    }
                }
                if (!properties[key].deprecationMessage && properties[key].markdownDeprecationMessage) {
                    // If not set, default deprecationMessage to the markdown source
                    properties[key].deprecationMessage = properties[key].markdownDeprecationMessage;
                }
                bucket.add(key);
            }
        }
        const subNodes = configuration.allOf;
        if (subNodes) {
            for (const node of subNodes) {
                this.validateAndRegisterProperties(node, validate, extensionInfo, restrictedProperties, scope, bucket);
            }
        }
    }
    getConfigurationProperties() {
        return this.configurationProperties;
    }
    getPolicyConfigurations() {
        return this.policyConfigurations;
    }
    registerJSONConfiguration(configuration) {
        const register = (configuration) => {
            const properties = configuration.properties;
            if (properties) {
                for (const key in properties) {
                    this.updateSchema(key, properties[key]);
                }
            }
            const subNodes = configuration.allOf;
            subNodes === null || subNodes === void 0 ? void 0 : subNodes.forEach(register);
        };
        register(configuration);
    }
    updateSchema(key, property) {
        allSettings.properties[key] = property;
        switch (property.scope) {
            case 1 /* ConfigurationScope.APPLICATION */:
                applicationSettings.properties[key] = property;
                break;
            case 2 /* ConfigurationScope.MACHINE */:
                machineSettings.properties[key] = property;
                break;
            case 6 /* ConfigurationScope.MACHINE_OVERRIDABLE */:
                machineOverridableSettings.properties[key] = property;
                break;
            case 3 /* ConfigurationScope.WINDOW */:
                windowSettings.properties[key] = property;
                break;
            case 4 /* ConfigurationScope.RESOURCE */:
                resourceSettings.properties[key] = property;
                break;
            case 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */:
                resourceSettings.properties[key] = property;
                this.resourceLanguageSettingsSchema.properties[key] = property;
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const overrideIdentifier of this.overrideIdentifiers.values()) {
            const overrideIdentifierProperty = `[${overrideIdentifier}]`;
            const resourceLanguagePropertiesSchema = {
                type: 'object',
                description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('overrideSettings.defaultDescription', "Configure editor settings to be overridden for a language."),
                errorMessage: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('overrideSettings.errorMessage', "This setting does not support per-language configuration."),
                $ref: resourceLanguageSettingsSchemaId,
            };
            this.updatePropertyDefaultValue(overrideIdentifierProperty, resourceLanguagePropertiesSchema);
            allSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            applicationSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            machineSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            machineOverridableSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            windowSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
            resourceSettings.properties[overrideIdentifierProperty] = resourceLanguagePropertiesSchema;
        }
    }
    registerOverridePropertyPatternKey() {
        const resourceLanguagePropertiesSchema = {
            type: 'object',
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('overrideSettings.defaultDescription', "Configure editor settings to be overridden for a language."),
            errorMessage: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('overrideSettings.errorMessage', "This setting does not support per-language configuration."),
            $ref: resourceLanguageSettingsSchemaId,
        };
        allSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        applicationSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        machineSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        machineOverridableSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        windowSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        resourceSettings.patternProperties[OVERRIDE_PROPERTY_PATTERN] = resourceLanguagePropertiesSchema;
        this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(key, property) {
        const configurationdefaultOverride = this.configurationDefaultsOverrides.get(key);
        let defaultValue = configurationdefaultOverride === null || configurationdefaultOverride === void 0 ? void 0 : configurationdefaultOverride.value;
        let defaultSource = configurationdefaultOverride === null || configurationdefaultOverride === void 0 ? void 0 : configurationdefaultOverride.source;
        if (_base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isUndefined */ .o8(defaultValue)) {
            defaultValue = property.defaultDefaultValue;
            defaultSource = undefined;
        }
        if (_base_common_types_js__WEBPACK_IMPORTED_MODULE_6__/* .isUndefined */ .o8(defaultValue)) {
            defaultValue = getDefaultValue(property.type);
        }
        property.default = defaultValue;
        property.defaultValueSource = defaultSource;
    }
}
const OVERRIDE_IDENTIFIER_PATTERN = `\\[([^\\]]+)\\]`;
const OVERRIDE_IDENTIFIER_REGEX = new RegExp(OVERRIDE_IDENTIFIER_PATTERN, 'g');
const OVERRIDE_PROPERTY_PATTERN = `^(${OVERRIDE_IDENTIFIER_PATTERN})+$`;
const OVERRIDE_PROPERTY_REGEX = new RegExp(OVERRIDE_PROPERTY_PATTERN);
function overrideIdentifiersFromKey(key) {
    const identifiers = [];
    if (OVERRIDE_PROPERTY_REGEX.test(key)) {
        let matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        while (matches === null || matches === void 0 ? void 0 : matches.length) {
            const identifier = matches[1].trim();
            if (identifier) {
                identifiers.push(identifier);
            }
            matches = OVERRIDE_IDENTIFIER_REGEX.exec(key);
        }
    }
    return (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .distinct */ .EB)(identifiers);
}
function getDefaultValue(type) {
    const t = Array.isArray(type) ? type[0] : type;
    switch (t) {
        case 'boolean':
            return false;
        case 'integer':
        case 'number':
            return 0;
        case 'string':
            return '';
        case 'array':
            return [];
        case 'object':
            return {};
        default:
            return null;
    }
}
const configurationRegistry = new ConfigurationRegistry();
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_5__/* .Registry */ .B.add(Extensions.Configuration, configurationRegistry);
function validateProperty(property, schema) {
    var _a, _b, _c, _d;
    if (!property.trim()) {
        return _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('config.property.empty', "Cannot register an empty property");
    }
    if (OVERRIDE_PROPERTY_REGEX.test(property)) {
        return _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('config.property.languageDefault', "Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.", property);
    }
    if (configurationRegistry.getConfigurationProperties()[property] !== undefined) {
        return _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('config.property.duplicate', "Cannot register '{0}'. This property is already registered.", property);
    }
    if (((_a = schema.policy) === null || _a === void 0 ? void 0 : _a.name) && configurationRegistry.getPolicyConfigurations().get((_b = schema.policy) === null || _b === void 0 ? void 0 : _b.name) !== undefined) {
        return _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('config.policy.duplicate', "Cannot register '{0}'. The associated policy {1} is already registered with {2}.", property, (_c = schema.policy) === null || _c === void 0 ? void 0 : _c.name, configurationRegistry.getPolicyConfigurations().get((_d = schema.policy) === null || _d === void 0 ? void 0 : _d.name));
    }
    return null;
}


/***/ }),

/***/ 95303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ DefaultConfiguration; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79027);
/* harmony import */ var _configurationModels_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66704);
/* harmony import */ var _configurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85118);
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72015);




class DefaultConfiguration extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor() {
        super(...arguments);
        this._configurationModel = new _configurationModels_js__WEBPACK_IMPORTED_MODULE_1__/* .ConfigurationModel */ .VV();
    }
    get configurationModel() {
        return this._configurationModel;
    }
    reload() {
        this.resetConfigurationModel();
        return this.configurationModel;
    }
    getConfigurationDefaultOverrides() {
        return {};
    }
    resetConfigurationModel() {
        this._configurationModel = new _configurationModels_js__WEBPACK_IMPORTED_MODULE_1__/* .ConfigurationModel */ .VV();
        const properties = _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .Registry */ .B.as(_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_2__/* .Extensions */ .IP.Configuration).getConfigurationProperties();
        this.updateConfigurationModel(Object.keys(properties), properties);
    }
    updateConfigurationModel(properties, configurationProperties) {
        const configurationDefaultsOverrides = this.getConfigurationDefaultOverrides();
        for (const key of properties) {
            const defaultOverrideValue = configurationDefaultsOverrides[key];
            const propertySchema = configurationProperties[key];
            if (defaultOverrideValue !== undefined) {
                this._configurationModel.addValue(key, defaultOverrideValue);
            }
            else if (propertySchema) {
                this._configurationModel.addValue(key, propertySchema.default);
            }
            else {
                this._configurationModel.removeValue(key);
            }
        }
    }
}


/***/ }),

/***/ 17838:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aY: function() { return /* binding */ ContextKeyService; }
/* harmony export */ });
/* unused harmony exports Context, AbstractContextKeyService, setContext */
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64202);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99269);
/* harmony import */ var _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12590);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56946);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23330);
/* harmony import */ var _commands_common_commands_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77783);
/* harmony import */ var _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33022);
/* harmony import */ var _common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81043);
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










const KEYBINDING_CONTEXT_ATTR = 'data-keybinding-context';
class Context {
    constructor(id, parent) {
        this._id = id;
        this._parent = parent;
        this._value = Object.create(null);
        this._value['_contextId'] = id;
    }
    get value() {
        return Object.assign({}, this._value);
    }
    setValue(key, value) {
        // console.log('SET ' + key + ' = ' + value + ' ON ' + this._id);
        if (this._value[key] !== value) {
            this._value[key] = value;
            return true;
        }
        return false;
    }
    removeValue(key) {
        // console.log('REMOVE ' + key + ' FROM ' + this._id);
        if (key in this._value) {
            delete this._value[key];
            return true;
        }
        return false;
    }
    getValue(key) {
        const ret = this._value[key];
        if (typeof ret === 'undefined' && this._parent) {
            return this._parent.getValue(key);
        }
        return ret;
    }
}
class NullContext extends Context {
    constructor() {
        super(-1, null);
    }
    setValue(key, value) {
        return false;
    }
    removeValue(key) {
        return false;
    }
    getValue(key) {
        return undefined;
    }
}
NullContext.INSTANCE = new NullContext();
class ConfigAwareContextValuesContainer extends Context {
    constructor(id, _configurationService, emitter) {
        super(id, null);
        this._configurationService = _configurationService;
        this._values = _base_common_ternarySearchTree_js__WEBPACK_IMPORTED_MODULE_4__/* .TernarySearchTree */ .Id.forConfigKeys();
        this._listener = this._configurationService.onDidChangeConfiguration(event => {
            if (event.source === 7 /* ConfigurationTarget.DEFAULT */) {
                // new setting, reset everything
                const allKeys = Array.from(this._values, ([k]) => k);
                this._values.clear();
                emitter.fire(new ArrayContextKeyChangeEvent(allKeys));
            }
            else {
                const changedKeys = [];
                for (const configKey of event.affectedKeys) {
                    const contextKey = `config.${configKey}`;
                    const cachedItems = this._values.findSuperstr(contextKey);
                    if (cachedItems !== undefined) {
                        changedKeys.push(..._base_common_iterator_js__WEBPACK_IMPORTED_MODULE_1__/* .Iterable */ .$.map(cachedItems, ([key]) => key));
                        this._values.deleteSuperstr(contextKey);
                    }
                    if (this._values.has(contextKey)) {
                        changedKeys.push(contextKey);
                        this._values.delete(contextKey);
                    }
                }
                emitter.fire(new ArrayContextKeyChangeEvent(changedKeys));
            }
        });
    }
    dispose() {
        this._listener.dispose();
    }
    getValue(key) {
        if (key.indexOf(ConfigAwareContextValuesContainer._keyPrefix) !== 0) {
            return super.getValue(key);
        }
        if (this._values.has(key)) {
            return this._values.get(key);
        }
        const configKey = key.substr(ConfigAwareContextValuesContainer._keyPrefix.length);
        const configValue = this._configurationService.getValue(configKey);
        let value = undefined;
        switch (typeof configValue) {
            case 'number':
            case 'boolean':
            case 'string':
                value = configValue;
                break;
            default:
                if (Array.isArray(configValue)) {
                    value = JSON.stringify(configValue);
                }
                else {
                    value = configValue;
                }
        }
        this._values.set(key, value);
        return value;
    }
    setValue(key, value) {
        return super.setValue(key, value);
    }
    removeValue(key) {
        return super.removeValue(key);
    }
}
ConfigAwareContextValuesContainer._keyPrefix = 'config.';
class ContextKey {
    constructor(service, key, defaultValue) {
        this._service = service;
        this._key = key;
        this._defaultValue = defaultValue;
        this.reset();
    }
    set(value) {
        this._service.setContext(this._key, value);
    }
    reset() {
        if (typeof this._defaultValue === 'undefined') {
            this._service.removeContext(this._key);
        }
        else {
            this._service.setContext(this._key, this._defaultValue);
        }
    }
    get() {
        return this._service.getContextKeyValue(this._key);
    }
}
class SimpleContextKeyChangeEvent {
    constructor(key) {
        this.key = key;
    }
    affectsSome(keys) {
        return keys.has(this.key);
    }
    allKeysContainedIn(keys) {
        return this.affectsSome(keys);
    }
}
class ArrayContextKeyChangeEvent {
    constructor(keys) {
        this.keys = keys;
    }
    affectsSome(keys) {
        for (const key of this.keys) {
            if (keys.has(key)) {
                return true;
            }
        }
        return false;
    }
    allKeysContainedIn(keys) {
        return this.keys.every(key => keys.has(key));
    }
}
class CompositeContextKeyChangeEvent {
    constructor(events) {
        this.events = events;
    }
    affectsSome(keys) {
        for (const e of this.events) {
            if (e.affectsSome(keys)) {
                return true;
            }
        }
        return false;
    }
    allKeysContainedIn(keys) {
        return this.events.every(evt => evt.allKeysContainedIn(keys));
    }
}
function allEventKeysInContext(event, context) {
    return event.allKeysContainedIn(new Set(Object.keys(context)));
}
class AbstractContextKeyService {
    constructor(myContextId) {
        this._onDidChangeContext = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .PauseableEmitter */ .K3({ merge: input => new CompositeContextKeyChangeEvent(input) });
        this.onDidChangeContext = this._onDidChangeContext.event;
        this._isDisposed = false;
        this._myContextId = myContextId;
    }
    createKey(key, defaultValue) {
        if (this._isDisposed) {
            throw new Error(`AbstractContextKeyService has been disposed`);
        }
        return new ContextKey(this, key, defaultValue);
    }
    bufferChangeEvents(callback) {
        this._onDidChangeContext.pause();
        try {
            callback();
        }
        finally {
            this._onDidChangeContext.resume();
        }
    }
    createScoped(domNode) {
        if (this._isDisposed) {
            throw new Error(`AbstractContextKeyService has been disposed`);
        }
        return new ScopedContextKeyService(this, domNode);
    }
    contextMatchesRules(rules) {
        if (this._isDisposed) {
            throw new Error(`AbstractContextKeyService has been disposed`);
        }
        const context = this.getContextValuesContainer(this._myContextId);
        const result = (rules ? rules.evaluate(context) : true);
        // console.group(rules.serialize() + ' -> ' + result);
        // rules.keys().forEach(key => { console.log(key, ctx[key]); });
        // console.groupEnd();
        return result;
    }
    getContextKeyValue(key) {
        if (this._isDisposed) {
            return undefined;
        }
        return this.getContextValuesContainer(this._myContextId).getValue(key);
    }
    setContext(key, value) {
        if (this._isDisposed) {
            return;
        }
        const myContext = this.getContextValuesContainer(this._myContextId);
        if (!myContext) {
            return;
        }
        if (myContext.setValue(key, value)) {
            this._onDidChangeContext.fire(new SimpleContextKeyChangeEvent(key));
        }
    }
    removeContext(key) {
        if (this._isDisposed) {
            return;
        }
        if (this.getContextValuesContainer(this._myContextId).removeValue(key)) {
            this._onDidChangeContext.fire(new SimpleContextKeyChangeEvent(key));
        }
    }
    getContext(target) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this.getContextValuesContainer(findContextAttr(target));
    }
}
let ContextKeyService = class ContextKeyService extends AbstractContextKeyService {
    constructor(configurationService) {
        super(0);
        this._contexts = new Map();
        this._toDispose = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .DisposableStore */ .SL();
        this._lastContextId = 0;
        const myContext = new ConfigAwareContextValuesContainer(this._myContextId, configurationService, this._onDidChangeContext);
        this._contexts.set(this._myContextId, myContext);
        this._toDispose.add(myContext);
        // Uncomment this to see the contexts continuously logged
        // let lastLoggedValue: string | null = null;
        // setInterval(() => {
        // 	let values = Object.keys(this._contexts).map((key) => this._contexts[key]);
        // 	let logValue = values.map(v => JSON.stringify(v._value, null, '\t')).join('\n');
        // 	if (lastLoggedValue !== logValue) {
        // 		lastLoggedValue = logValue;
        // 		console.log(lastLoggedValue);
        // 	}
        // }, 2000);
    }
    dispose() {
        this._onDidChangeContext.dispose();
        this._isDisposed = true;
        this._toDispose.dispose();
    }
    getContextValuesContainer(contextId) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this._contexts.get(contextId) || NullContext.INSTANCE;
    }
    createChildContext(parentContextId = this._myContextId) {
        if (this._isDisposed) {
            throw new Error(`ContextKeyService has been disposed`);
        }
        const id = (++this._lastContextId);
        this._contexts.set(id, new Context(id, this.getContextValuesContainer(parentContextId)));
        return id;
    }
    disposeContext(contextId) {
        if (!this._isDisposed) {
            this._contexts.delete(contextId);
        }
    }
};
ContextKeyService = __decorate([
    __param(0, _configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_8__/* .IConfigurationService */ .Ui)
], ContextKeyService);
class ScopedContextKeyService extends AbstractContextKeyService {
    constructor(parent, domNode) {
        super(parent.createChildContext());
        this._parentChangeListener = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .MutableDisposable */ .XK();
        this._parent = parent;
        this._updateParentChangeListener();
        this._domNode = domNode;
        if (this._domNode.hasAttribute(KEYBINDING_CONTEXT_ATTR)) {
            let extraInfo = '';
            if (this._domNode.classList) {
                extraInfo = Array.from(this._domNode.classList.values()).join(', ');
            }
            console.error(`Element already has context attribute${extraInfo ? ': ' + extraInfo : ''}`);
        }
        this._domNode.setAttribute(KEYBINDING_CONTEXT_ATTR, String(this._myContextId));
    }
    _updateParentChangeListener() {
        // Forward parent events to this listener. Parent will change.
        this._parentChangeListener.value = this._parent.onDidChangeContext(e => {
            const thisContainer = this._parent.getContextValuesContainer(this._myContextId);
            const thisContextValues = thisContainer.value;
            if (!allEventKeysInContext(e, thisContextValues)) {
                this._onDidChangeContext.fire(e);
            }
        });
    }
    dispose() {
        if (this._isDisposed) {
            return;
        }
        this._onDidChangeContext.dispose();
        this._parent.disposeContext(this._myContextId);
        this._parentChangeListener.dispose();
        this._domNode.removeAttribute(KEYBINDING_CONTEXT_ATTR);
        this._isDisposed = true;
    }
    getContextValuesContainer(contextId) {
        if (this._isDisposed) {
            return NullContext.INSTANCE;
        }
        return this._parent.getContextValuesContainer(contextId);
    }
    createChildContext(parentContextId = this._myContextId) {
        if (this._isDisposed) {
            throw new Error(`ScopedContextKeyService has been disposed`);
        }
        return this._parent.createChildContext(parentContextId);
    }
    disposeContext(contextId) {
        if (this._isDisposed) {
            return;
        }
        this._parent.disposeContext(contextId);
    }
}
function findContextAttr(domNode) {
    while (domNode) {
        if (domNode.hasAttribute(KEYBINDING_CONTEXT_ATTR)) {
            const attr = domNode.getAttribute(KEYBINDING_CONTEXT_ATTR);
            if (attr) {
                return parseInt(attr, 10);
            }
            return NaN;
        }
        domNode = domNode.parentElement;
    }
    return 0;
}
function setContext(accessor, contextKey, contextValue) {
    const contextKeyService = accessor.get(_common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .IContextKeyService */ .i6);
    contextKeyService.createKey(String(contextKey), stringifyURIs(contextValue));
}
function stringifyURIs(contextValue) {
    return (0,_base_common_objects_js__WEBPACK_IMPORTED_MODULE_3__/* .cloneAndChange */ .rs)(contextValue, (obj) => {
        if (typeof obj === 'object' && obj.$mid === 1 /* MarshalledId.Uri */) {
            return _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__/* .URI */ .o.revive(obj).toString();
        }
        if (obj instanceof _base_common_uri_js__WEBPACK_IMPORTED_MODULE_5__/* .URI */ .o) {
            return obj.toString();
        }
        return undefined;
    });
}
_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_7__/* .CommandsRegistry */ .P.registerCommand('_setContext', setContext);
_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_7__/* .CommandsRegistry */ .P.registerCommand({
    id: 'getContextKeyInfo',
    handler() {
        return [..._common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .RawContextKey */ .uy.all()].sort((a, b) => a.key.localeCompare(b.key));
    },
    description: {
        description: (0,_nls_js__WEBPACK_IMPORTED_MODULE_6__/* .localize */ .NC)('getContextKeyInfo', "A command that returns information about context keys"),
        args: []
    }
});
_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_7__/* .CommandsRegistry */ .P.registerCommand('_generateContextKeyInfo', function () {
    const result = [];
    const seen = new Set();
    for (const info of _common_contextkey_js__WEBPACK_IMPORTED_MODULE_9__/* .RawContextKey */ .uy.all()) {
        if (!seen.has(info.key)) {
            seen.add(info.key);
            result.push(info);
        }
    }
    result.sort((a, b) => a.key.localeCompare(b.key));
    console.log(JSON.stringify(result, undefined, 2));
});


/***/ }),

/***/ 81043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ao: function() { return /* binding */ ContextKeyExpr; },
  i6: function() { return /* binding */ IContextKeyService; },
  uy: function() { return /* binding */ RawContextKey; },
  Fb: function() { return /* binding */ expressionsAreEqualWithConstantSubstitution; },
  K8: function() { return /* binding */ implies; }
});

// UNUSED EXPORTS: ContextKeyAndExpr, ContextKeyDefinedExpr, ContextKeyEqualsExpr, ContextKeyFalseExpr, ContextKeyGreaterEqualsExpr, ContextKeyGreaterExpr, ContextKeyInExpr, ContextKeyNotEqualsExpr, ContextKeyNotExpr, ContextKeyNotInExpr, ContextKeyNotRegexExpr, ContextKeyOrExpr, ContextKeyRegexExpr, ContextKeySmallerEqualsExpr, ContextKeySmallerExpr, ContextKeyTrueExpr, Parser

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/strings.js
var strings = __webpack_require__(23607);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/nls.js
var nls = __webpack_require__(23330);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/scanner.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


function hintDidYouMean(...meant) {
    switch (meant.length) {
        case 1:
            return (0,nls/* localize */.NC)('contextkey.scanner.hint.didYouMean1', "Did you mean {0}?", meant[0]);
        case 2:
            return (0,nls/* localize */.NC)('contextkey.scanner.hint.didYouMean2', "Did you mean {0} or {1}?", meant[0], meant[1]);
        case 3:
            return (0,nls/* localize */.NC)('contextkey.scanner.hint.didYouMean3', "Did you mean {0}, {1} or {2}?", meant[0], meant[1], meant[2]);
        default: // we just don't expect that many
            return undefined;
    }
}
const hintDidYouForgetToOpenOrCloseQuote = (0,nls/* localize */.NC)('contextkey.scanner.hint.didYouForgetToOpenOrCloseQuote', "Did you forget to open or close the quote?");
const hintDidYouForgetToEscapeSlash = (0,nls/* localize */.NC)('contextkey.scanner.hint.didYouForgetToEscapeSlash', "Did you forget to escape the '/' (slash) character? Put two backslashes before it to escape, e.g., '\\\\/\'.");
/**
 * A simple scanner for context keys.
 *
 * Example:
 *
 * ```ts
 * const scanner = new Scanner().reset('resourceFileName =~ /docker/ && !config.docker.enabled');
 * const tokens = [...scanner];
 * if (scanner.errorTokens.length > 0) {
 *     scanner.errorTokens.forEach(err => console.error(`Unexpected token at ${err.offset}: ${err.lexeme}\nHint: ${err.additional}`));
 * } else {
 *     // process tokens
 * }
 * ```
 */
class Scanner {
    constructor() {
        this._input = '';
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        // u - unicode, y - sticky // TODO@ulugbekna: we accept double quotes as part of the string rather than as a delimiter (to preserve old parser's behavior)
        this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
    }
    static getLexeme(token) {
        switch (token.type) {
            case 0 /* TokenType.LParen */:
                return '(';
            case 1 /* TokenType.RParen */:
                return ')';
            case 2 /* TokenType.Neg */:
                return '!';
            case 3 /* TokenType.Eq */:
                return token.isTripleEq ? '===' : '==';
            case 4 /* TokenType.NotEq */:
                return token.isTripleEq ? '!==' : '!=';
            case 5 /* TokenType.Lt */:
                return '<';
            case 6 /* TokenType.LtEq */:
                return '<=';
            case 7 /* TokenType.Gt */:
                return '>=';
            case 8 /* TokenType.GtEq */:
                return '>=';
            case 9 /* TokenType.RegexOp */:
                return '=~';
            case 10 /* TokenType.RegexStr */:
                return token.lexeme;
            case 11 /* TokenType.True */:
                return 'true';
            case 12 /* TokenType.False */:
                return 'false';
            case 13 /* TokenType.In */:
                return 'in';
            case 14 /* TokenType.Not */:
                return 'not';
            case 15 /* TokenType.And */:
                return '&&';
            case 16 /* TokenType.Or */:
                return '||';
            case 17 /* TokenType.Str */:
                return token.lexeme;
            case 18 /* TokenType.QuotedStr */:
                return token.lexeme;
            case 19 /* TokenType.Error */:
                return token.lexeme;
            case 20 /* TokenType.EOF */:
                return 'EOF';
            default:
                throw (0,errors/* illegalState */.L6)(`unhandled token type: ${JSON.stringify(token)}; have you forgotten to add a case?`);
        }
    }
    reset(value) {
        this._input = value;
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        return this;
    }
    scan() {
        while (!this._isAtEnd()) {
            this._start = this._current;
            const ch = this._advance();
            switch (ch) {
                case 40 /* CharCode.OpenParen */:
                    this._addToken(0 /* TokenType.LParen */);
                    break;
                case 41 /* CharCode.CloseParen */:
                    this._addToken(1 /* TokenType.RParen */);
                    break;
                case 33 /* CharCode.ExclamationMark */:
                    if (this._match(61 /* CharCode.Equals */)) {
                        const isTripleEq = this._match(61 /* CharCode.Equals */); // eat last `=` if `!==`
                        this._tokens.push({ type: 4 /* TokenType.NotEq */, offset: this._start, isTripleEq });
                    }
                    else {
                        this._addToken(2 /* TokenType.Neg */);
                    }
                    break;
                case 39 /* CharCode.SingleQuote */:
                    this._quotedString();
                    break;
                case 47 /* CharCode.Slash */:
                    this._regex();
                    break;
                case 61 /* CharCode.Equals */:
                    if (this._match(61 /* CharCode.Equals */)) { // support `==`
                        const isTripleEq = this._match(61 /* CharCode.Equals */); // eat last `=` if `===`
                        this._tokens.push({ type: 3 /* TokenType.Eq */, offset: this._start, isTripleEq });
                    }
                    else if (this._match(126 /* CharCode.Tilde */)) {
                        this._addToken(9 /* TokenType.RegexOp */);
                    }
                    else {
                        this._error(hintDidYouMean('==', '=~'));
                    }
                    break;
                case 60 /* CharCode.LessThan */:
                    this._addToken(this._match(61 /* CharCode.Equals */) ? 6 /* TokenType.LtEq */ : 5 /* TokenType.Lt */);
                    break;
                case 62 /* CharCode.GreaterThan */:
                    this._addToken(this._match(61 /* CharCode.Equals */) ? 8 /* TokenType.GtEq */ : 7 /* TokenType.Gt */);
                    break;
                case 38 /* CharCode.Ampersand */:
                    if (this._match(38 /* CharCode.Ampersand */)) {
                        this._addToken(15 /* TokenType.And */);
                    }
                    else {
                        this._error(hintDidYouMean('&&'));
                    }
                    break;
                case 124 /* CharCode.Pipe */:
                    if (this._match(124 /* CharCode.Pipe */)) {
                        this._addToken(16 /* TokenType.Or */);
                    }
                    else {
                        this._error(hintDidYouMean('||'));
                    }
                    break;
                // TODO@ulugbekna: 1) rewrite using a regex 2) reconsider what characters are considered whitespace, including unicode, nbsp, etc.
                case 32 /* CharCode.Space */:
                case 13 /* CharCode.CarriageReturn */:
                case 9 /* CharCode.Tab */:
                case 10 /* CharCode.LineFeed */:
                case 160 /* CharCode.NoBreakSpace */: // &nbsp
                    break;
                default:
                    this._string();
            }
        }
        this._start = this._current;
        this._addToken(20 /* TokenType.EOF */);
        return Array.from(this._tokens);
    }
    _match(expected) {
        if (this._isAtEnd()) {
            return false;
        }
        if (this._input.charCodeAt(this._current) !== expected) {
            return false;
        }
        this._current++;
        return true;
    }
    _advance() {
        return this._input.charCodeAt(this._current++);
    }
    _peek() {
        return this._isAtEnd() ? 0 /* CharCode.Null */ : this._input.charCodeAt(this._current);
    }
    _addToken(type) {
        this._tokens.push({ type, offset: this._start });
    }
    _error(additional) {
        const offset = this._start;
        const lexeme = this._input.substring(this._start, this._current);
        const errToken = { type: 19 /* TokenType.Error */, offset: this._start, lexeme };
        this._errors.push({ offset, lexeme, additionalInfo: additional });
        this._tokens.push(errToken);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const match = this.stringRe.exec(this._input);
        if (match) {
            this._current = this._start + match[0].length;
            const lexeme = this._input.substring(this._start, this._current);
            const keyword = Scanner._keywords.get(lexeme);
            if (keyword) {
                this._addToken(keyword);
            }
            else {
                this._tokens.push({ type: 17 /* TokenType.Str */, lexeme, offset: this._start });
            }
        }
    }
    // captures the lexeme without the leading and trailing '
    _quotedString() {
        while (this._peek() !== 39 /* CharCode.SingleQuote */ && !this._isAtEnd()) { // TODO@ulugbekna: add support for escaping ' ?
            this._advance();
        }
        if (this._isAtEnd()) {
            this._error(hintDidYouForgetToOpenOrCloseQuote);
            return;
        }
        // consume the closing '
        this._advance();
        this._tokens.push({ type: 18 /* TokenType.QuotedStr */, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
    }
    /*
     * Lexing a regex expression: /.../[igsmyu]*
     * Based on https://github.com/microsoft/TypeScript/blob/9247ef115e617805983740ba795d7a8164babf89/src/compiler/scanner.ts#L2129-L2181
     *
     * Note that we want slashes within a regex to be escaped, e.g., /file:\\/\\/\\// should match `file:///`
     */
    _regex() {
        let p = this._current;
        let inEscape = false;
        let inCharacterClass = false;
        while (true) {
            if (p >= this._input.length) {
                this._current = p;
                this._error(hintDidYouForgetToEscapeSlash);
                return;
            }
            const ch = this._input.charCodeAt(p);
            if (inEscape) { // parsing an escape character
                inEscape = false;
            }
            else if (ch === 47 /* CharCode.Slash */ && !inCharacterClass) { // end of regex
                p++;
                break;
            }
            else if (ch === 91 /* CharCode.OpenSquareBracket */) {
                inCharacterClass = true;
            }
            else if (ch === 92 /* CharCode.Backslash */) {
                inEscape = true;
            }
            else if (ch === 93 /* CharCode.CloseSquareBracket */) {
                inCharacterClass = false;
            }
            p++;
        }
        // Consume flags // TODO@ulugbekna: use regex instead
        while (p < this._input.length && Scanner._regexFlags.has(this._input.charCodeAt(p))) {
            p++;
        }
        this._current = p;
        const lexeme = this._input.substring(this._start, this._current);
        this._tokens.push({ type: 10 /* TokenType.RegexStr */, lexeme, offset: this._start });
    }
    _isAtEnd() {
        return this._current >= this._input.length;
    }
}
Scanner._regexFlags = new Set(['i', 'g', 's', 'm', 'y', 'u'].map(ch => ch.charCodeAt(0)));
Scanner._keywords = new Map([
    ['not', 14 /* TokenType.Not */],
    ['in', 13 /* TokenType.In */],
    ['false', 12 /* TokenType.False */],
    ['true', 11 /* TokenType.True */],
]);

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/instantiation/common/instantiation.js
var instantiation = __webpack_require__(38048);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





const CONSTANT_VALUES = new Map();
CONSTANT_VALUES.set('false', false);
CONSTANT_VALUES.set('true', true);
CONSTANT_VALUES.set('isMac', platform/* isMacintosh */.dz);
CONSTANT_VALUES.set('isLinux', platform/* isLinux */.IJ);
CONSTANT_VALUES.set('isWindows', platform/* isWindows */.ED);
CONSTANT_VALUES.set('isWeb', platform/* isWeb */.$L);
CONSTANT_VALUES.set('isMacNative', platform/* isMacintosh */.dz && !platform/* isWeb */.$L);
CONSTANT_VALUES.set('isEdge', platform/* isEdge */.un);
CONSTANT_VALUES.set('isFirefox', platform/* isFirefox */.vU);
CONSTANT_VALUES.set('isChrome', platform/* isChrome */.i7);
CONSTANT_VALUES.set('isSafari', platform/* isSafari */.G6);
const contextkey_hasOwnProperty = Object.prototype.hasOwnProperty;
const defaultConfig = {
    regexParsingWithErrorRecovery: true
};
const errorEmptyString = (0,nls/* localize */.NC)('contextkey.parser.error.emptyString', "Empty context key expression");
const hintEmptyString = (0,nls/* localize */.NC)('contextkey.parser.error.emptyString.hint', "Did you forget to write an expression? You can also put 'false' or 'true' to always evaluate to false or true, respectively.");
const errorNoInAfterNot = (0,nls/* localize */.NC)('contextkey.parser.error.noInAfterNot', "'in' after 'not'.");
const errorClosingParenthesis = (0,nls/* localize */.NC)('contextkey.parser.error.closingParenthesis', "closing parenthesis ')'");
const errorUnexpectedToken = (0,nls/* localize */.NC)('contextkey.parser.error.unexpectedToken', "Unexpected token");
const hintUnexpectedToken = (0,nls/* localize */.NC)('contextkey.parser.error.unexpectedToken.hint', "Did you forget to put && or || before the token?");
const errorUnexpectedEOF = (0,nls/* localize */.NC)('contextkey.parser.error.unexpectedEOF', "Unexpected end of expression");
const hintUnexpectedEOF = (0,nls/* localize */.NC)('contextkey.parser.error.unexpectedEOF.hint', "Did you forget to put a context key?");
/**
 * A parser for context key expressions.
 *
 * Example:
 * ```ts
 * const parser = new Parser();
 * const expr = parser.parse('foo == "bar" && baz == true');
 *
 * if (expr === undefined) {
 * 	// there were lexing or parsing errors
 * 	// process lexing errors with `parser.lexingErrors`
 *  // process parsing errors with `parser.parsingErrors`
 * } else {
 * 	// expr is a valid expression
 * }
 * ```
 */
class Parser {
    constructor(_config = defaultConfig) {
        this._config = _config;
        // lifetime note: `_scanner` lives as long as the parser does, i.e., is not reset between calls to `parse`
        this._scanner = new Scanner();
        // lifetime note: `_tokens`, `_current`, and `_parsingErrors` must be reset between calls to `parse`
        this._tokens = [];
        this._current = 0; // invariant: 0 <= this._current < this._tokens.length ; any incrementation of this value must first call `_isAtEnd`
        this._parsingErrors = [];
        this._flagsGYRe = /g|y/g;
    }
    /**
     * Parse a context key expression.
     *
     * @param input the expression to parse
     * @returns the parsed expression or `undefined` if there's an error - call `lexingErrors` and `parsingErrors` to see the errors
     */
    parse(input) {
        if (input === '') {
            this._parsingErrors.push({ message: errorEmptyString, offset: 0, lexeme: '', additionalInfo: hintEmptyString });
            return undefined;
        }
        this._tokens = this._scanner.reset(input).scan();
        // @ulugbekna: we do not stop parsing if there are lexing errors to be able to reconstruct regexes with unescaped slashes; TODO@ulugbekna: make this respect config option for recovery
        this._current = 0;
        this._parsingErrors = [];
        try {
            const expr = this._expr();
            if (!this._isAtEnd()) {
                const peek = this._peek();
                const additionalInfo = peek.type === 17 /* TokenType.Str */ ? hintUnexpectedToken : undefined;
                this._parsingErrors.push({ message: errorUnexpectedToken, offset: peek.offset, lexeme: Scanner.getLexeme(peek), additionalInfo });
                throw Parser._parseError;
            }
            return expr;
        }
        catch (e) {
            if (!(e === Parser._parseError)) {
                throw e;
            }
            return undefined;
        }
    }
    _expr() {
        return this._or();
    }
    _or() {
        const expr = [this._and()];
        while (this._matchOne(16 /* TokenType.Or */)) {
            const right = this._and();
            expr.push(right);
        }
        return expr.length === 1 ? expr[0] : ContextKeyExpr.or(...expr);
    }
    _and() {
        const expr = [this._term()];
        while (this._matchOne(15 /* TokenType.And */)) {
            const right = this._term();
            expr.push(right);
        }
        return expr.length === 1 ? expr[0] : ContextKeyExpr.and(...expr);
    }
    _term() {
        if (this._matchOne(2 /* TokenType.Neg */)) {
            const peek = this._peek();
            switch (peek.type) {
                case 11 /* TokenType.True */:
                    this._advance();
                    return ContextKeyFalseExpr.INSTANCE;
                case 12 /* TokenType.False */:
                    this._advance();
                    return ContextKeyTrueExpr.INSTANCE;
                case 0 /* TokenType.LParen */: {
                    this._advance();
                    const expr = this._expr();
                    this._consume(1 /* TokenType.RParen */, errorClosingParenthesis);
                    return expr === null || expr === void 0 ? void 0 : expr.negate();
                }
                case 17 /* TokenType.Str */:
                    this._advance();
                    return ContextKeyNotExpr.create(peek.lexeme);
                default:
                    throw this._errExpectedButGot(`KEY | true | false | '(' expression ')'`, peek);
            }
        }
        return this._primary();
    }
    _primary() {
        const peek = this._peek();
        switch (peek.type) {
            case 11 /* TokenType.True */:
                this._advance();
                return ContextKeyExpr.true();
            case 12 /* TokenType.False */:
                this._advance();
                return ContextKeyExpr.false();
            case 0 /* TokenType.LParen */: {
                this._advance();
                const expr = this._expr();
                this._consume(1 /* TokenType.RParen */, errorClosingParenthesis);
                return expr;
            }
            case 17 /* TokenType.Str */: {
                // KEY
                const key = peek.lexeme;
                this._advance();
                // =~ regex
                if (this._matchOne(9 /* TokenType.RegexOp */)) {
                    // @ulugbekna: we need to reconstruct the regex from the tokens because some extensions use unescaped slashes in regexes
                    const expr = this._peek();
                    if (!this._config.regexParsingWithErrorRecovery) {
                        this._advance();
                        if (expr.type !== 10 /* TokenType.RegexStr */) {
                            throw this._errExpectedButGot(`REGEX`, expr);
                        }
                        const regexLexeme = expr.lexeme;
                        const closingSlashIndex = regexLexeme.lastIndexOf('/');
                        const flags = closingSlashIndex === regexLexeme.length - 1 ? undefined : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
                        let regexp;
                        try {
                            regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
                        }
                        catch (e) {
                            throw this._errExpectedButGot(`REGEX`, expr);
                        }
                        return ContextKeyRegexExpr.create(key, regexp);
                    }
                    switch (expr.type) {
                        case 10 /* TokenType.RegexStr */:
                        case 19 /* TokenType.Error */: { // also handle an ErrorToken in case of smth such as /(/file)/
                            const lexemeReconstruction = [expr.lexeme]; // /REGEX/ or /REGEX/FLAGS
                            this._advance();
                            let followingToken = this._peek();
                            let parenBalance = 0;
                            for (let i = 0; i < expr.lexeme.length; i++) {
                                if (expr.lexeme.charCodeAt(i) === 40 /* CharCode.OpenParen */) {
                                    parenBalance++;
                                }
                                else if (expr.lexeme.charCodeAt(i) === 41 /* CharCode.CloseParen */) {
                                    parenBalance--;
                                }
                            }
                            while (!this._isAtEnd() && followingToken.type !== 15 /* TokenType.And */ && followingToken.type !== 16 /* TokenType.Or */) {
                                switch (followingToken.type) {
                                    case 0 /* TokenType.LParen */:
                                        parenBalance++;
                                        break;
                                    case 1 /* TokenType.RParen */:
                                        parenBalance--;
                                        break;
                                    case 10 /* TokenType.RegexStr */:
                                    case 18 /* TokenType.QuotedStr */:
                                        for (let i = 0; i < followingToken.lexeme.length; i++) {
                                            if (followingToken.lexeme.charCodeAt(i) === 40 /* CharCode.OpenParen */) {
                                                parenBalance++;
                                            }
                                            else if (expr.lexeme.charCodeAt(i) === 41 /* CharCode.CloseParen */) {
                                                parenBalance--;
                                            }
                                        }
                                }
                                if (parenBalance < 0) {
                                    break;
                                }
                                lexemeReconstruction.push(Scanner.getLexeme(followingToken));
                                this._advance();
                                followingToken = this._peek();
                            }
                            const regexLexeme = lexemeReconstruction.join('');
                            const closingSlashIndex = regexLexeme.lastIndexOf('/');
                            const flags = closingSlashIndex === regexLexeme.length - 1 ? undefined : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
                            let regexp;
                            try {
                                regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
                            }
                            catch (e) {
                                throw this._errExpectedButGot(`REGEX`, expr);
                            }
                            return ContextKeyExpr.regex(key, regexp);
                        }
                        case 18 /* TokenType.QuotedStr */: {
                            const serializedValue = expr.lexeme;
                            this._advance();
                            // replicate old regex parsing behavior
                            let regex = null;
                            if (!(0,strings/* isFalsyOrWhitespace */.m5)(serializedValue)) {
                                const start = serializedValue.indexOf('/');
                                const end = serializedValue.lastIndexOf('/');
                                if (start !== end && start >= 0) {
                                    const value = serializedValue.slice(start + 1, end);
                                    const caseIgnoreFlag = serializedValue[end + 1] === 'i' ? 'i' : '';
                                    try {
                                        regex = new RegExp(value, caseIgnoreFlag);
                                    }
                                    catch (_e) {
                                        throw this._errExpectedButGot(`REGEX`, expr);
                                    }
                                }
                            }
                            if (regex === null) {
                                throw this._errExpectedButGot('REGEX', expr);
                            }
                            return ContextKeyRegexExpr.create(key, regex);
                        }
                        default:
                            throw this._errExpectedButGot('REGEX', this._peek());
                    }
                }
                // [ 'not' 'in' value ]
                if (this._matchOne(14 /* TokenType.Not */)) {
                    this._consume(13 /* TokenType.In */, errorNoInAfterNot);
                    const right = this._value();
                    return ContextKeyExpr.notIn(key, right);
                }
                // [ ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in') value ]
                const maybeOp = this._peek().type;
                switch (maybeOp) {
                    case 3 /* TokenType.Eq */: {
                        this._advance();
                        const right = this._value();
                        if (this._previous().type === 18 /* TokenType.QuotedStr */) { // to preserve old parser behavior: "foo == 'true'" is preserved as "foo == 'true'", but "foo == true" is optimized as "foo"
                            return ContextKeyExpr.equals(key, right);
                        }
                        switch (right) {
                            case 'true':
                                return ContextKeyExpr.has(key);
                            case 'false':
                                return ContextKeyExpr.not(key);
                            default:
                                return ContextKeyExpr.equals(key, right);
                        }
                    }
                    case 4 /* TokenType.NotEq */: {
                        this._advance();
                        const right = this._value();
                        if (this._previous().type === 18 /* TokenType.QuotedStr */) { // same as above with "foo != 'true'"
                            return ContextKeyExpr.notEquals(key, right);
                        }
                        switch (right) {
                            case 'true':
                                return ContextKeyExpr.not(key);
                            case 'false':
                                return ContextKeyExpr.has(key);
                            default:
                                return ContextKeyExpr.notEquals(key, right);
                        }
                    }
                    // TODO: ContextKeyExpr.smaller(key, right) accepts only `number` as `right` AND during eval of this node, we just eval to `false` if `right` is not a number
                    // consequently, package.json linter should _warn_ the user if they're passing undesired things to ops
                    case 5 /* TokenType.Lt */:
                        this._advance();
                        return ContextKeySmallerExpr.create(key, this._value());
                    case 6 /* TokenType.LtEq */:
                        this._advance();
                        return ContextKeySmallerEqualsExpr.create(key, this._value());
                    case 7 /* TokenType.Gt */:
                        this._advance();
                        return ContextKeyGreaterExpr.create(key, this._value());
                    case 8 /* TokenType.GtEq */:
                        this._advance();
                        return ContextKeyGreaterEqualsExpr.create(key, this._value());
                    case 13 /* TokenType.In */:
                        this._advance();
                        return ContextKeyExpr.in(key, this._value());
                    default:
                        return ContextKeyExpr.has(key);
                }
            }
            case 20 /* TokenType.EOF */:
                this._parsingErrors.push({ message: errorUnexpectedEOF, offset: peek.offset, lexeme: '', additionalInfo: hintUnexpectedEOF });
                throw Parser._parseError;
            default:
                throw this._errExpectedButGot(`true | false | KEY \n\t| KEY '=~' REGEX \n\t| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
        }
    }
    _value() {
        const token = this._peek();
        switch (token.type) {
            case 17 /* TokenType.Str */:
            case 18 /* TokenType.QuotedStr */:
                this._advance();
                return token.lexeme;
            case 11 /* TokenType.True */:
                this._advance();
                return 'true';
            case 12 /* TokenType.False */:
                this._advance();
                return 'false';
            case 13 /* TokenType.In */: // we support `in` as a value, e.g., "when": "languageId == in" - exists in existing extensions
                this._advance();
                return 'in';
            default:
                // this allows "when": "foo == " which's used by existing extensions
                // we do not call `_advance` on purpose - we don't want to eat unintended tokens
                return '';
        }
    }
    _removeFlagsGY(flags) {
        return flags.replaceAll(this._flagsGYRe, '');
    }
    // careful: this can throw if current token is the initial one (ie index = 0)
    _previous() {
        return this._tokens[this._current - 1];
    }
    _matchOne(token) {
        if (this._check(token)) {
            this._advance();
            return true;
        }
        return false;
    }
    _advance() {
        if (!this._isAtEnd()) {
            this._current++;
        }
        return this._previous();
    }
    _consume(type, message) {
        if (this._check(type)) {
            return this._advance();
        }
        throw this._errExpectedButGot(message, this._peek());
    }
    _errExpectedButGot(expected, got, additionalInfo) {
        const message = (0,nls/* localize */.NC)('contextkey.parser.error.expectedButGot', "Expected: {0}\nReceived: '{1}'.", expected, Scanner.getLexeme(got));
        const offset = got.offset;
        const lexeme = Scanner.getLexeme(got);
        this._parsingErrors.push({ message, offset, lexeme, additionalInfo });
        return Parser._parseError;
    }
    _check(type) {
        return this._peek().type === type;
    }
    _peek() {
        return this._tokens[this._current];
    }
    _isAtEnd() {
        return this._peek().type === 20 /* TokenType.EOF */;
    }
}
// Note: this doesn't produce an exact syntax tree but a normalized one
// ContextKeyExpression's that we use as AST nodes do not expose constructors that do not normalize
Parser._parseError = new Error();
class ContextKeyExpr {
    static false() {
        return ContextKeyFalseExpr.INSTANCE;
    }
    static true() {
        return ContextKeyTrueExpr.INSTANCE;
    }
    static has(key) {
        return ContextKeyDefinedExpr.create(key);
    }
    static equals(key, value) {
        return ContextKeyEqualsExpr.create(key, value);
    }
    static notEquals(key, value) {
        return ContextKeyNotEqualsExpr.create(key, value);
    }
    static regex(key, value) {
        return ContextKeyRegexExpr.create(key, value);
    }
    static in(key, value) {
        return ContextKeyInExpr.create(key, value);
    }
    static notIn(key, value) {
        return ContextKeyNotInExpr.create(key, value);
    }
    static not(key) {
        return ContextKeyNotExpr.create(key);
    }
    static and(...expr) {
        return ContextKeyAndExpr.create(expr, null, true);
    }
    static or(...expr) {
        return ContextKeyOrExpr.create(expr, null, true);
    }
    static deserialize(serialized) {
        if (serialized === undefined || serialized === null) { // an empty string needs to be handled by the parser to get a corresponding parsing error reported
            return undefined;
        }
        const expr = this._parser.parse(serialized);
        return expr;
    }
}
ContextKeyExpr._parser = new Parser({ regexParsingWithErrorRecovery: false });
function expressionsAreEqualWithConstantSubstitution(a, b) {
    const aExpr = a ? a.substituteConstants() : undefined;
    const bExpr = b ? b.substituteConstants() : undefined;
    if (!aExpr && !bExpr) {
        return true;
    }
    if (!aExpr || !bExpr) {
        return false;
    }
    return aExpr.equals(bExpr);
}
function cmp(a, b) {
    return a.cmp(b);
}
class ContextKeyFalseExpr {
    constructor() {
        this.type = 0 /* ContextKeyExprType.False */;
    }
    cmp(other) {
        return this.type - other.type;
    }
    equals(other) {
        return (other.type === this.type);
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return false;
    }
    serialize() {
        return 'false';
    }
    keys() {
        return [];
    }
    negate() {
        return ContextKeyTrueExpr.INSTANCE;
    }
}
ContextKeyFalseExpr.INSTANCE = new ContextKeyFalseExpr();
class ContextKeyTrueExpr {
    constructor() {
        this.type = 1 /* ContextKeyExprType.True */;
    }
    cmp(other) {
        return this.type - other.type;
    }
    equals(other) {
        return (other.type === this.type);
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return true;
    }
    serialize() {
        return 'true';
    }
    keys() {
        return [];
    }
    negate() {
        return ContextKeyFalseExpr.INSTANCE;
    }
}
ContextKeyTrueExpr.INSTANCE = new ContextKeyTrueExpr();
class ContextKeyDefinedExpr {
    static create(key, negated = null) {
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return new ContextKeyDefinedExpr(key, negated);
    }
    constructor(key, negated) {
        this.key = key;
        this.negated = negated;
        this.type = 2 /* ContextKeyExprType.Defined */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp1(this.key, other.key);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key);
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
        }
        return this;
    }
    evaluate(context) {
        return (!!context.getValue(this.key));
    }
    serialize() {
        return this.key;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotExpr.create(this.key, this);
        }
        return this.negated;
    }
}
class ContextKeyEqualsExpr {
    static create(key, value, negated = null) {
        if (typeof value === 'boolean') {
            return (value ? ContextKeyDefinedExpr.create(key, negated) : ContextKeyNotExpr.create(key, negated));
        }
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            const trueValue = constantValue ? 'true' : 'false';
            return (value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE);
        }
        return new ContextKeyEqualsExpr(key, value, negated);
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 4 /* ContextKeyExprType.Equals */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            const trueValue = constantValue ? 'true' : 'false';
            return (this.value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE);
        }
        return this;
    }
    evaluate(context) {
        // Intentional ==
        // eslint-disable-next-line eqeqeq
        return (context.getValue(this.key) == this.value);
    }
    serialize() {
        return `${this.key} == '${this.value}'`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeyInExpr {
    static create(key, valueKey) {
        return new ContextKeyInExpr(key, valueKey);
    }
    constructor(key, valueKey) {
        this.key = key;
        this.valueKey = valueKey;
        this.type = 10 /* ContextKeyExprType.In */;
        this.negated = null;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.valueKey, other.key, other.valueKey);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.valueKey === other.valueKey);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        const source = context.getValue(this.valueKey);
        const item = context.getValue(this.key);
        if (Array.isArray(source)) {
            return source.includes(item);
        }
        if (typeof item === 'string' && typeof source === 'object' && source !== null) {
            return contextkey_hasOwnProperty.call(source, item);
        }
        return false;
    }
    serialize() {
        return `${this.key} in '${this.valueKey}'`;
    }
    keys() {
        return [this.key, this.valueKey];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotInExpr.create(this.key, this.valueKey);
        }
        return this.negated;
    }
}
class ContextKeyNotInExpr {
    static create(key, valueKey) {
        return new ContextKeyNotInExpr(key, valueKey);
    }
    constructor(key, valueKey) {
        this.key = key;
        this.valueKey = valueKey;
        this.type = 11 /* ContextKeyExprType.NotIn */;
        this._negated = ContextKeyInExpr.create(key, valueKey);
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return this._negated.cmp(other._negated);
    }
    equals(other) {
        if (other.type === this.type) {
            return this._negated.equals(other._negated);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return !this._negated.evaluate(context);
    }
    serialize() {
        return `${this.key} not in '${this.valueKey}'`;
    }
    keys() {
        return this._negated.keys();
    }
    negate() {
        return this._negated;
    }
}
class ContextKeyNotEqualsExpr {
    static create(key, value, negated = null) {
        if (typeof value === 'boolean') {
            if (value) {
                return ContextKeyNotExpr.create(key, negated);
            }
            return ContextKeyDefinedExpr.create(key, negated);
        }
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            const falseValue = constantValue ? 'true' : 'false';
            return (value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE);
        }
        return new ContextKeyNotEqualsExpr(key, value, negated);
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 5 /* ContextKeyExprType.NotEquals */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            const falseValue = constantValue ? 'true' : 'false';
            return (this.value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE);
        }
        return this;
    }
    evaluate(context) {
        // Intentional !=
        // eslint-disable-next-line eqeqeq
        return (context.getValue(this.key) != this.value);
    }
    serialize() {
        return `${this.key} != '${this.value}'`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeyNotExpr {
    static create(key, negated = null) {
        const constantValue = CONSTANT_VALUES.get(key);
        if (typeof constantValue === 'boolean') {
            return (constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE);
        }
        return new ContextKeyNotExpr(key, negated);
    }
    constructor(key, negated) {
        this.key = key;
        this.negated = negated;
        this.type = 3 /* ContextKeyExprType.Not */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp1(this.key, other.key);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key);
        }
        return false;
    }
    substituteConstants() {
        const constantValue = CONSTANT_VALUES.get(this.key);
        if (typeof constantValue === 'boolean') {
            return (constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE);
        }
        return this;
    }
    evaluate(context) {
        return (!context.getValue(this.key));
    }
    serialize() {
        return `!${this.key}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyDefinedExpr.create(this.key, this);
        }
        return this.negated;
    }
}
function withFloatOrStr(value, callback) {
    if (typeof value === 'string') {
        const n = parseFloat(value);
        if (!isNaN(n)) {
            value = n;
        }
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return callback(value);
    }
    return ContextKeyFalseExpr.INSTANCE;
}
class ContextKeyGreaterExpr {
    static create(key, _value, negated = null) {
        return withFloatOrStr(_value, (value) => new ContextKeyGreaterExpr(key, value, negated));
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 12 /* ContextKeyExprType.Greater */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return (parseFloat(context.getValue(this.key)) > this.value);
    }
    serialize() {
        return `${this.key} > ${this.value}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeySmallerEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeyGreaterEqualsExpr {
    static create(key, _value, negated = null) {
        return withFloatOrStr(_value, (value) => new ContextKeyGreaterEqualsExpr(key, value, negated));
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 13 /* ContextKeyExprType.GreaterEquals */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return (parseFloat(context.getValue(this.key)) >= this.value);
    }
    serialize() {
        return `${this.key} >= ${this.value}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeySmallerExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeySmallerExpr {
    static create(key, _value, negated = null) {
        return withFloatOrStr(_value, (value) => new ContextKeySmallerExpr(key, value, negated));
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 14 /* ContextKeyExprType.Smaller */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return (parseFloat(context.getValue(this.key)) < this.value);
    }
    serialize() {
        return `${this.key} < ${this.value}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyGreaterEqualsExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeySmallerEqualsExpr {
    static create(key, _value, negated = null) {
        return withFloatOrStr(_value, (value) => new ContextKeySmallerEqualsExpr(key, value, negated));
    }
    constructor(key, value, negated) {
        this.key = key;
        this.value = value;
        this.negated = negated;
        this.type = 15 /* ContextKeyExprType.SmallerEquals */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return cmp2(this.key, this.value, other.key, other.value);
    }
    equals(other) {
        if (other.type === this.type) {
            return (this.key === other.key && this.value === other.value);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        if (typeof this.value === 'string') {
            return false;
        }
        return (parseFloat(context.getValue(this.key)) <= this.value);
    }
    serialize() {
        return `${this.key} <= ${this.value}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyGreaterExpr.create(this.key, this.value, this);
        }
        return this.negated;
    }
}
class ContextKeyRegexExpr {
    static create(key, regexp) {
        return new ContextKeyRegexExpr(key, regexp);
    }
    constructor(key, regexp) {
        this.key = key;
        this.regexp = regexp;
        this.type = 7 /* ContextKeyExprType.Regex */;
        this.negated = null;
        //
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.key < other.key) {
            return -1;
        }
        if (this.key > other.key) {
            return 1;
        }
        const thisSource = this.regexp ? this.regexp.source : '';
        const otherSource = other.regexp ? other.regexp.source : '';
        if (thisSource < otherSource) {
            return -1;
        }
        if (thisSource > otherSource) {
            return 1;
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            const thisSource = this.regexp ? this.regexp.source : '';
            const otherSource = other.regexp ? other.regexp.source : '';
            return (this.key === other.key && thisSource === otherSource);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        const value = context.getValue(this.key);
        return this.regexp ? this.regexp.test(value) : false;
    }
    serialize() {
        const value = this.regexp
            ? `/${this.regexp.source}/${this.regexp.flags}`
            : '/invalid/';
        return `${this.key} =~ ${value}`;
    }
    keys() {
        return [this.key];
    }
    negate() {
        if (!this.negated) {
            this.negated = ContextKeyNotRegexExpr.create(this);
        }
        return this.negated;
    }
}
class ContextKeyNotRegexExpr {
    static create(actual) {
        return new ContextKeyNotRegexExpr(actual);
    }
    constructor(_actual) {
        this._actual = _actual;
        this.type = 8 /* ContextKeyExprType.NotRegex */;
        //
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        return this._actual.cmp(other._actual);
    }
    equals(other) {
        if (other.type === this.type) {
            return this._actual.equals(other._actual);
        }
        return false;
    }
    substituteConstants() {
        return this;
    }
    evaluate(context) {
        return !this._actual.evaluate(context);
    }
    serialize() {
        return `!(${this._actual.serialize()})`;
    }
    keys() {
        return this._actual.keys();
    }
    negate() {
        return this._actual;
    }
}
/**
 * @returns the same instance if nothing changed.
 */
function eliminateConstantsInArray(arr) {
    // Allocate array only if there is a difference
    let newArr = null;
    for (let i = 0, len = arr.length; i < len; i++) {
        const newExpr = arr[i].substituteConstants();
        if (arr[i] !== newExpr) {
            // something has changed!
            // allocate array on first difference
            if (newArr === null) {
                newArr = [];
                for (let j = 0; j < i; j++) {
                    newArr[j] = arr[j];
                }
            }
        }
        if (newArr !== null) {
            newArr[i] = newExpr;
        }
    }
    if (newArr === null) {
        return arr;
    }
    return newArr;
}
class ContextKeyAndExpr {
    static create(_expr, negated, extraRedundantCheck) {
        return ContextKeyAndExpr._normalizeArr(_expr, negated, extraRedundantCheck);
    }
    constructor(expr, negated) {
        this.expr = expr;
        this.negated = negated;
        this.type = 6 /* ContextKeyExprType.And */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.expr.length < other.expr.length) {
            return -1;
        }
        if (this.expr.length > other.expr.length) {
            return 1;
        }
        for (let i = 0, len = this.expr.length; i < len; i++) {
            const r = cmp(this.expr[i], other.expr[i]);
            if (r !== 0) {
                return r;
            }
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            if (this.expr.length !== other.expr.length) {
                return false;
            }
            for (let i = 0, len = this.expr.length; i < len; i++) {
                if (!this.expr[i].equals(other.expr[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    substituteConstants() {
        const exprArr = eliminateConstantsInArray(this.expr);
        if (exprArr === this.expr) {
            // no change
            return this;
        }
        return ContextKeyAndExpr.create(exprArr, this.negated, false);
    }
    evaluate(context) {
        for (let i = 0, len = this.expr.length; i < len; i++) {
            if (!this.expr[i].evaluate(context)) {
                return false;
            }
        }
        return true;
    }
    static _normalizeArr(arr, negated, extraRedundantCheck) {
        const expr = [];
        let hasTrue = false;
        for (const e of arr) {
            if (!e) {
                continue;
            }
            if (e.type === 1 /* ContextKeyExprType.True */) {
                // anything && true ==> anything
                hasTrue = true;
                continue;
            }
            if (e.type === 0 /* ContextKeyExprType.False */) {
                // anything && false ==> false
                return ContextKeyFalseExpr.INSTANCE;
            }
            if (e.type === 6 /* ContextKeyExprType.And */) {
                expr.push(...e.expr);
                continue;
            }
            expr.push(e);
        }
        if (expr.length === 0 && hasTrue) {
            return ContextKeyTrueExpr.INSTANCE;
        }
        if (expr.length === 0) {
            return undefined;
        }
        if (expr.length === 1) {
            return expr[0];
        }
        expr.sort(cmp);
        // eliminate duplicate terms
        for (let i = 1; i < expr.length; i++) {
            if (expr[i - 1].equals(expr[i])) {
                expr.splice(i, 1);
                i--;
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // We must distribute any OR expression because we don't support parens
        // OR extensions will be at the end (due to sorting rules)
        while (expr.length > 1) {
            const lastElement = expr[expr.length - 1];
            if (lastElement.type !== 9 /* ContextKeyExprType.Or */) {
                break;
            }
            // pop the last element
            expr.pop();
            // pop the second to last element
            const secondToLastElement = expr.pop();
            const isFinished = (expr.length === 0);
            // distribute `lastElement` over `secondToLastElement`
            const resultElement = ContextKeyOrExpr.create(lastElement.expr.map(el => ContextKeyAndExpr.create([el, secondToLastElement], null, extraRedundantCheck)), null, isFinished);
            if (resultElement) {
                expr.push(resultElement);
                expr.sort(cmp);
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // resolve false AND expressions
        if (extraRedundantCheck) {
            for (let i = 0; i < expr.length; i++) {
                for (let j = i + 1; j < expr.length; j++) {
                    if (expr[i].negate().equals(expr[j])) {
                        // A && !A case
                        return ContextKeyFalseExpr.INSTANCE;
                    }
                }
            }
            if (expr.length === 1) {
                return expr[0];
            }
        }
        return new ContextKeyAndExpr(expr, negated);
    }
    serialize() {
        return this.expr.map(e => e.serialize()).join(' && ');
    }
    keys() {
        const result = [];
        for (const expr of this.expr) {
            result.push(...expr.keys());
        }
        return result;
    }
    negate() {
        if (!this.negated) {
            const result = [];
            for (const expr of this.expr) {
                result.push(expr.negate());
            }
            this.negated = ContextKeyOrExpr.create(result, this, true);
        }
        return this.negated;
    }
}
class ContextKeyOrExpr {
    static create(_expr, negated, extraRedundantCheck) {
        return ContextKeyOrExpr._normalizeArr(_expr, negated, extraRedundantCheck);
    }
    constructor(expr, negated) {
        this.expr = expr;
        this.negated = negated;
        this.type = 9 /* ContextKeyExprType.Or */;
    }
    cmp(other) {
        if (other.type !== this.type) {
            return this.type - other.type;
        }
        if (this.expr.length < other.expr.length) {
            return -1;
        }
        if (this.expr.length > other.expr.length) {
            return 1;
        }
        for (let i = 0, len = this.expr.length; i < len; i++) {
            const r = cmp(this.expr[i], other.expr[i]);
            if (r !== 0) {
                return r;
            }
        }
        return 0;
    }
    equals(other) {
        if (other.type === this.type) {
            if (this.expr.length !== other.expr.length) {
                return false;
            }
            for (let i = 0, len = this.expr.length; i < len; i++) {
                if (!this.expr[i].equals(other.expr[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    substituteConstants() {
        const exprArr = eliminateConstantsInArray(this.expr);
        if (exprArr === this.expr) {
            // no change
            return this;
        }
        return ContextKeyOrExpr.create(exprArr, this.negated, false);
    }
    evaluate(context) {
        for (let i = 0, len = this.expr.length; i < len; i++) {
            if (this.expr[i].evaluate(context)) {
                return true;
            }
        }
        return false;
    }
    static _normalizeArr(arr, negated, extraRedundantCheck) {
        let expr = [];
        let hasFalse = false;
        if (arr) {
            for (let i = 0, len = arr.length; i < len; i++) {
                const e = arr[i];
                if (!e) {
                    continue;
                }
                if (e.type === 0 /* ContextKeyExprType.False */) {
                    // anything || false ==> anything
                    hasFalse = true;
                    continue;
                }
                if (e.type === 1 /* ContextKeyExprType.True */) {
                    // anything || true ==> true
                    return ContextKeyTrueExpr.INSTANCE;
                }
                if (e.type === 9 /* ContextKeyExprType.Or */) {
                    expr = expr.concat(e.expr);
                    continue;
                }
                expr.push(e);
            }
            if (expr.length === 0 && hasFalse) {
                return ContextKeyFalseExpr.INSTANCE;
            }
            expr.sort(cmp);
        }
        if (expr.length === 0) {
            return undefined;
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // eliminate duplicate terms
        for (let i = 1; i < expr.length; i++) {
            if (expr[i - 1].equals(expr[i])) {
                expr.splice(i, 1);
                i--;
            }
        }
        if (expr.length === 1) {
            return expr[0];
        }
        // resolve true OR expressions
        if (extraRedundantCheck) {
            for (let i = 0; i < expr.length; i++) {
                for (let j = i + 1; j < expr.length; j++) {
                    if (expr[i].negate().equals(expr[j])) {
                        // A || !A case
                        return ContextKeyTrueExpr.INSTANCE;
                    }
                }
            }
            if (expr.length === 1) {
                return expr[0];
            }
        }
        return new ContextKeyOrExpr(expr, negated);
    }
    serialize() {
        return this.expr.map(e => e.serialize()).join(' || ');
    }
    keys() {
        const result = [];
        for (const expr of this.expr) {
            result.push(...expr.keys());
        }
        return result;
    }
    negate() {
        if (!this.negated) {
            const result = [];
            for (const expr of this.expr) {
                result.push(expr.negate());
            }
            // We don't support parens, so here we distribute the AND over the OR terminals
            // We always take the first 2 AND pairs and distribute them
            while (result.length > 1) {
                const LEFT = result.shift();
                const RIGHT = result.shift();
                const all = [];
                for (const left of getTerminals(LEFT)) {
                    for (const right of getTerminals(RIGHT)) {
                        all.push(ContextKeyAndExpr.create([left, right], null, false));
                    }
                }
                result.unshift(ContextKeyOrExpr.create(all, null, false));
            }
            this.negated = ContextKeyOrExpr.create(result, this, true);
        }
        return this.negated;
    }
}
class RawContextKey extends ContextKeyDefinedExpr {
    static all() {
        return RawContextKey._info.values();
    }
    constructor(key, defaultValue, metaOrHide) {
        super(key, null);
        this._defaultValue = defaultValue;
        // collect all context keys into a central place
        if (typeof metaOrHide === 'object') {
            RawContextKey._info.push(Object.assign(Object.assign({}, metaOrHide), { key }));
        }
        else if (metaOrHide !== true) {
            RawContextKey._info.push({ key, description: metaOrHide, type: defaultValue !== null && defaultValue !== undefined ? typeof defaultValue : undefined });
        }
    }
    bindTo(target) {
        return target.createKey(this.key, this._defaultValue);
    }
    getValue(target) {
        return target.getContextKeyValue(this.key);
    }
    toNegated() {
        return this.negate();
    }
    isEqualTo(value) {
        return ContextKeyEqualsExpr.create(this.key, value);
    }
}
RawContextKey._info = [];
const IContextKeyService = (0,instantiation/* createDecorator */.yh)('contextKeyService');
function cmp1(key1, key2) {
    if (key1 < key2) {
        return -1;
    }
    if (key1 > key2) {
        return 1;
    }
    return 0;
}
function cmp2(key1, value1, key2, value2) {
    if (key1 < key2) {
        return -1;
    }
    if (key1 > key2) {
        return 1;
    }
    if (value1 < value2) {
        return -1;
    }
    if (value1 > value2) {
        return 1;
    }
    return 0;
}
/**
 * Returns true if it is provable `p` implies `q`.
 */
function implies(p, q) {
    if (p.type === 0 /* ContextKeyExprType.False */ || q.type === 1 /* ContextKeyExprType.True */) {
        // false implies anything
        // anything implies true
        return true;
    }
    if (p.type === 9 /* ContextKeyExprType.Or */) {
        if (q.type === 9 /* ContextKeyExprType.Or */) {
            // `a || b || c` can only imply something like `a || b || c || d`
            return allElementsIncluded(p.expr, q.expr);
        }
        return false;
    }
    if (q.type === 9 /* ContextKeyExprType.Or */) {
        for (const element of q.expr) {
            if (implies(p, element)) {
                return true;
            }
        }
        return false;
    }
    if (p.type === 6 /* ContextKeyExprType.And */) {
        if (q.type === 6 /* ContextKeyExprType.And */) {
            // `a && b && c` implies `a && c`
            return allElementsIncluded(q.expr, p.expr);
        }
        for (const element of p.expr) {
            if (implies(element, q)) {
                return true;
            }
        }
        return false;
    }
    return p.equals(q);
}
/**
 * Returns true if all elements in `p` are also present in `q`.
 * The two arrays are assumed to be sorted
 */
function allElementsIncluded(p, q) {
    let pIndex = 0;
    let qIndex = 0;
    while (pIndex < p.length && qIndex < q.length) {
        const cmp = p[pIndex].cmp(q[qIndex]);
        if (cmp < 0) {
            // an element from `p` is missing from `q`
            return false;
        }
        else if (cmp === 0) {
            pIndex++;
            qIndex++;
        }
        else {
            qIndex++;
        }
    }
    return (pIndex === p.length);
}
function getTerminals(node) {
    if (node.type === 9 /* ContextKeyExprType.Or */) {
        return node.expr;
    }
    return [node];
}


/***/ }),

/***/ 23558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cv: function() { return /* binding */ IsWindowsContext; },
/* harmony export */   d0: function() { return /* binding */ InputFocusedContextKey; }
/* harmony export */ });
/* unused harmony exports IsMacContext, IsLinuxContext, IsWebContext, IsMacNativeContext, IsIOSContext, IsMobileContext, IsDevelopmentContext, ProductQualityContext, InputFocusedContext */
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94057);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23330);
/* harmony import */ var _contextkey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81043);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const IsMacContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isMac', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isMacintosh */ .dz, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isMac', "Whether the operating system is macOS"));
const IsLinuxContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isLinux', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isLinux */ .IJ, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isLinux', "Whether the operating system is Linux"));
const IsWindowsContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isWindows', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isWindows */ .ED, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isWindows', "Whether the operating system is Windows"));
const IsWebContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isWeb', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isWeb */ .$L, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isWeb', "Whether the platform is a web browser"));
const IsMacNativeContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isMacNative', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isMacintosh */ .dz && !_base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isWeb */ .$L, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isMacNative', "Whether the operating system is macOS on a non-browser platform"));
const IsIOSContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isIOS', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isIOS */ .gn, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isIOS', "Whether the operating system is iOS"));
const IsMobileContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isMobile', _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('isMobile', "Whether the platform is a mobile web browser"));
const IsDevelopmentContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('isDevelopment', false, true);
const ProductQualityContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy('productQualityType', '', (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('productQualityType', "Quality type of VS Code"));
const InputFocusedContextKey = 'inputFocus';
const InputFocusedContext = new _contextkey_js__WEBPACK_IMPORTED_MODULE_2__/* .RawContextKey */ .uy(InputFocusedContextKey, false, (0,_nls_js__WEBPACK_IMPORTED_MODULE_1__/* .localize */ .NC)('inputFocus', "Whether keyboard focus is inside an input box"));


/***/ }),

/***/ 25909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  L: function() { return /* binding */ ContextMenuService; }
});

// UNUSED EXPORTS: ContextMenuMenuDelegate

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/dom.js
var dom = __webpack_require__(39862);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/actions.js
var common_actions = __webpack_require__(1585);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(96290);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(79027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/browser/menuEntryActionViewItem.js + 2 modules
var menuEntryActionViewItem = __webpack_require__(69163);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/actions/common/actions.js
var actions = __webpack_require__(3145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextkey/common/contextkey.js + 1 modules
var contextkey = __webpack_require__(81043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/keybinding/common/keybinding.js
var keybinding = __webpack_require__(19267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/notification/common/notification.js
var notification = __webpack_require__(99938);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/telemetry/common/telemetry.js
var telemetry = __webpack_require__(72209);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js + 1 modules
var mouseEvent = __webpack_require__(3076);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/menu/menu.js
var menu_menu = __webpack_require__(28602);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/errors.js
var errors = __webpack_require__(50847);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/theme/browser/defaultStyles.js
var defaultStyles = __webpack_require__(89408);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuHandler.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/







class ContextMenuHandler {
    constructor(contextViewService, telemetryService, notificationService, keybindingService) {
        this.contextViewService = contextViewService;
        this.telemetryService = telemetryService;
        this.notificationService = notificationService;
        this.keybindingService = keybindingService;
        this.focusToReturn = null;
        this.lastContainer = null;
        this.block = null;
        this.blockDisposable = null;
        this.options = { blockMouse: true };
    }
    configure(options) {
        this.options = options;
    }
    showContextMenu(delegate) {
        const actions = delegate.getActions();
        if (!actions.length) {
            return; // Don't render an empty context menu
        }
        this.focusToReturn = document.activeElement;
        let menu;
        const shadowRootElement = (0,dom/* isHTMLElement */.Re)(delegate.domForShadowRoot) ? delegate.domForShadowRoot : undefined;
        this.contextViewService.showContextView({
            getAnchor: () => delegate.getAnchor(),
            canRelayout: false,
            anchorAlignment: delegate.anchorAlignment,
            anchorAxisAlignment: delegate.anchorAxisAlignment,
            render: (container) => {
                var _a;
                this.lastContainer = container;
                const className = delegate.getMenuClassName ? delegate.getMenuClassName() : '';
                if (className) {
                    container.className += ' ' + className;
                }
                // Render invisible div to block mouse interaction in the rest of the UI
                if (this.options.blockMouse) {
                    this.block = container.appendChild((0,dom.$)('.context-view-block'));
                    this.block.style.position = 'fixed';
                    this.block.style.cursor = 'initial';
                    this.block.style.left = '0';
                    this.block.style.top = '0';
                    this.block.style.width = '100%';
                    this.block.style.height = '100%';
                    this.block.style.zIndex = '-1';
                    (_a = this.blockDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
                    this.blockDisposable = (0,dom/* addDisposableListener */.nm)(this.block, dom/* EventType */.tw.MOUSE_DOWN, e => e.stopPropagation());
                }
                const menuDisposables = new lifecycle/* DisposableStore */.SL();
                const actionRunner = delegate.actionRunner || new common_actions/* ActionRunner */.Wi();
                actionRunner.onWillRun(evt => this.onActionRun(evt, !delegate.skipTelemetry), this, menuDisposables);
                actionRunner.onDidRun(this.onDidActionRun, this, menuDisposables);
                menu = new menu_menu/* Menu */.v2(container, actions, {
                    actionViewItemProvider: delegate.getActionViewItem,
                    context: delegate.getActionsContext ? delegate.getActionsContext() : null,
                    actionRunner,
                    getKeyBinding: delegate.getKeyBinding ? delegate.getKeyBinding : action => this.keybindingService.lookupKeybinding(action.id)
                }, defaultStyles/* defaultMenuStyles */.ZR);
                menu.onDidCancel(() => this.contextViewService.hideContextView(true), null, menuDisposables);
                menu.onDidBlur(() => this.contextViewService.hideContextView(true), null, menuDisposables);
                menuDisposables.add((0,dom/* addDisposableListener */.nm)(window, dom/* EventType */.tw.BLUR, () => this.contextViewService.hideContextView(true)));
                menuDisposables.add((0,dom/* addDisposableListener */.nm)(window, dom/* EventType */.tw.MOUSE_DOWN, (e) => {
                    if (e.defaultPrevented) {
                        return;
                    }
                    const event = new mouseEvent/* StandardMouseEvent */.n(e);
                    let element = event.target;
                    // Don't do anything as we are likely creating a context menu
                    if (event.rightButton) {
                        return;
                    }
                    while (element) {
                        if (element === container) {
                            return;
                        }
                        element = element.parentElement;
                    }
                    this.contextViewService.hideContextView(true);
                }));
                return (0,lifecycle/* combinedDisposable */.F8)(menuDisposables, menu);
            },
            focus: () => {
                menu === null || menu === void 0 ? void 0 : menu.focus(!!delegate.autoSelectFirstItem);
            },
            onHide: (didCancel) => {
                var _a, _b, _c;
                (_a = delegate.onHide) === null || _a === void 0 ? void 0 : _a.call(delegate, !!didCancel);
                if (this.block) {
                    this.block.remove();
                    this.block = null;
                }
                (_b = this.blockDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
                this.blockDisposable = null;
                if (!!this.lastContainer && ((0,dom/* getActiveElement */.vY)() === this.lastContainer || (0,dom/* isAncestor */.jg)((0,dom/* getActiveElement */.vY)(), this.lastContainer))) {
                    (_c = this.focusToReturn) === null || _c === void 0 ? void 0 : _c.focus();
                }
                this.lastContainer = null;
            }
        }, shadowRootElement, !!shadowRootElement);
    }
    onActionRun(e, logTelemetry) {
        if (logTelemetry) {
            this.telemetryService.publicLog2('workbenchActionExecuted', { id: e.action.id, from: 'contextMenu' });
        }
        this.contextViewService.hideContextView(false);
    }
    onDidActionRun(e) {
        if (e.error && !(0,errors/* isCancellationError */.n2)(e.error)) {
            this.notificationService.error(e.error);
        }
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextView.js
var contextView = __webpack_require__(8337);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/platform/contextview/browser/contextMenuService.js
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












let ContextMenuService = class ContextMenuService extends lifecycle/* Disposable */.JT {
    get contextMenuHandler() {
        if (!this._contextMenuHandler) {
            this._contextMenuHandler = new ContextMenuHandler(this.contextViewService, this.telemetryService, this.notificationService, this.keybindingService);
        }
        return this._contextMenuHandler;
    }
    constructor(telemetryService, notificationService, contextViewService, keybindingService, menuService, contextKeyService) {
        super();
        this.telemetryService = telemetryService;
        this.notificationService = notificationService;
        this.contextViewService = contextViewService;
        this.keybindingService = keybindingService;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this._contextMenuHandler = undefined;
        this._onDidShowContextMenu = this._store.add(new common_event/* Emitter */.Q5());
        this._onDidHideContextMenu = this._store.add(new common_event/* Emitter */.Q5());
    }
    configure(options) {
        this.contextMenuHandler.configure(options);
    }
    // ContextMenu
    showContextMenu(delegate) {
        delegate = ContextMenuMenuDelegate.transform(delegate, this.menuService, this.contextKeyService);
        this.contextMenuHandler.showContextMenu(Object.assign(Object.assign({}, delegate), { onHide: (didCancel) => {
                var _a;
                (_a = delegate.onHide) === null || _a === void 0 ? void 0 : _a.call(delegate, didCancel);
                this._onDidHideContextMenu.fire();
            } }));
        dom/* ModifierKeyEmitter */._q.getInstance().resetKeyStatus();
        this._onDidShowContextMenu.fire();
    }
};
ContextMenuService = __decorate([
    __param(0, telemetry/* ITelemetryService */.b),
    __param(1, notification/* INotificationService */.lT),
    __param(2, contextView/* IContextViewService */.u),
    __param(3, keybinding/* IKeybindingService */.d),
    __param(4, actions/* IMenuService */.co),
    __param(5, contextkey/* IContextKeyService */.i6)
], ContextMenuService);
var ContextMenuMenuDelegate;
(function (ContextMenuMenuDelegate) {
    function is(thing) {
        return thing && thing.menuId instanceof actions/* MenuId */.eH;
    }
    function transform(delegate, menuService, globalContextKeyService) {
        if (!is(delegate)) {
            return delegate;
        }
        const { menuId, menuActionOptions, contextKeyService } = delegate;
        return Object.assign(Object.assign({}, delegate), { getActions: () => {
                const target = [];
                if (menuId) {
                    const menu = menuService.createMenu(menuId, contextKeyService !== null && contextKeyService !== void 0 ? contextKeyService : globalContextKeyService);
                    (0,menuEntryActionViewItem/* createAndFillInContextMenuActions */.LJ)(menu, menuActionOptions, target);
                    menu.dispose();
                }
                if (!delegate.getActions) {
                    return target;
                }
                else {
                    return common_actions/* Separator */.Z0.join(delegate.getActions(), target);
                }
            } });
    }
    ContextMenuMenuDelegate.transform = transform;
})(ContextMenuMenuDelegate || (ContextMenuMenuDelegate = {}));


/***/ }),

/***/ 8337:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ IContextMenuService; },
/* harmony export */   u: function() { return /* binding */ IContextViewService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IContextViewService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('contextViewService');
const IContextMenuService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('contextMenuService');


/***/ }),

/***/ 39422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ ContextViewService; }
/* harmony export */ });
/* harmony import */ var _base_browser_ui_contextview_contextview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93505);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _layout_browser_layoutService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12732);
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



let ContextViewService = class ContextViewService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(layoutService) {
        super();
        this.layoutService = layoutService;
        this.currentViewDisposable = _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT.None;
        this.container = layoutService.hasContainer ? layoutService.container : null;
        this.contextView = this._register(new _base_browser_ui_contextview_contextview_js__WEBPACK_IMPORTED_MODULE_0__/* .ContextView */ .Ry(this.container, 1 /* ContextViewDOMPosition.ABSOLUTE */));
        this.layout();
        this._register(layoutService.onDidLayout(() => this.layout()));
    }
    // ContextView
    setContainer(container, domPosition) {
        this.contextView.setContainer(container, domPosition || 1 /* ContextViewDOMPosition.ABSOLUTE */);
    }
    showContextView(delegate, container, shadowRoot) {
        if (container) {
            if (container !== this.container || this.shadowRoot !== shadowRoot) {
                this.container = container;
                this.setContainer(container, shadowRoot ? 3 /* ContextViewDOMPosition.FIXED_SHADOW */ : 2 /* ContextViewDOMPosition.FIXED */);
            }
        }
        else {
            if (this.layoutService.hasContainer && this.container !== this.layoutService.container) {
                this.container = this.layoutService.container;
                this.setContainer(this.container, 1 /* ContextViewDOMPosition.ABSOLUTE */);
            }
        }
        this.shadowRoot = shadowRoot;
        this.contextView.show(delegate);
        const disposable = (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            if (this.currentViewDisposable === disposable) {
                this.hideContextView();
            }
        });
        this.currentViewDisposable = disposable;
        return disposable;
    }
    getContextViewElement() {
        return this.contextView.getViewElement();
    }
    layout() {
        this.contextView.layout();
    }
    hideContextView(data) {
        this.contextView.hide(data);
    }
};
ContextViewService = __decorate([
    __param(0, _layout_browser_layoutService_js__WEBPACK_IMPORTED_MODULE_2__/* .ILayoutService */ .F)
], ContextViewService);


/***/ }),

/***/ 14547:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ IDialogService; }
/* harmony export */ });
/* harmony import */ var _instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);

const IDialogService = (0,_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('dialogService');


/***/ }),

/***/ 1857:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ej: function() { return /* binding */ LocalSelectionTransfer; },
/* harmony export */   Km: function() { return /* binding */ CodeDataTransfers; }
/* harmony export */ });
/* unused harmony export Extensions */
/* harmony import */ var _registry_common_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72015);

//#region Editor / Resources DND
const CodeDataTransfers = {
    EDITORS: 'CodeEditors',
    FILES: 'CodeFiles'
};
class DragAndDropContributionRegistry {
}
const Extensions = {
    DragAndDropContribution: 'workbench.contributions.dragAndDrop'
};
_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .Registry */ .B.add(Extensions.DragAndDropContribution, new DragAndDropContributionRegistry());
//#endregion
//#region DND Utilities
/**
 * A singleton to store transfer data during drag & drop operations that are only valid within the application.
 */
class LocalSelectionTransfer {
    constructor() {
        // protect against external instantiation
    }
    static getInstance() {
        return LocalSelectionTransfer.INSTANCE;
    }
    hasData(proto) {
        return proto && proto === this.proto;
    }
    getData(proto) {
        if (this.hasData(proto)) {
            return this.data;
        }
        return undefined;
    }
}
LocalSelectionTransfer.INSTANCE = new LocalSelectionTransfer();
//#endregion


/***/ }),

/***/ 66459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ EditorOpenSource; }
/* harmony export */ });
var EditorOpenSource;
(function (EditorOpenSource) {
    /**
     * Default: the editor is opening via a programmatic call
     * to the editor service API.
     */
    EditorOpenSource[EditorOpenSource["API"] = 0] = "API";
    /**
     * Indicates that a user action triggered the opening, e.g.
     * via mouse or keyboard use.
     */
    EditorOpenSource[EditorOpenSource["USER"] = 1] = "USER";
})(EditorOpenSource || (EditorOpenSource = {}));


/***/ }),

/***/ 81666:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ ExtensionIdentifierSet; }
/* harmony export */ });
/* unused harmony export ExtensionIdentifier */
/**
 * **!Do not construct directly!**
 *
 * **!Only static methods because it gets serialized!**
 *
 * This represents the "canonical" version for an extension identifier. Extension ids
 * have to be case-insensitive (due to the marketplace), but we must ensure case
 * preservation because the extension API is already public at this time.
 *
 * For example, given an extension with the publisher `"Hello"` and the name `"World"`,
 * its canonical extension identifier is `"Hello.World"`. This extension could be
 * referenced in some other extension's dependencies using the string `"hello.world"`.
 *
 * To make matters more complicated, an extension can optionally have an UUID. When two
 * extensions have the same UUID, they are considered equal even if their identifier is different.
 */
class ExtensionIdentifier {
    constructor(value) {
        this.value = value;
        this._lower = value.toLowerCase();
    }
    /**
     * Gives the value by which to index (for equality).
     */
    static toKey(id) {
        if (typeof id === 'string') {
            return id.toLowerCase();
        }
        return id._lower;
    }
}
class ExtensionIdentifierSet {
    constructor(iterable) {
        this._set = new Set();
        if (iterable) {
            for (const value of iterable) {
                this.add(value);
            }
        }
    }
    add(id) {
        this._set.add(ExtensionIdentifier.toKey(id));
    }
    has(id) {
        return this._set.has(ExtensionIdentifier.toKey(id));
    }
}


/***/ }),

/***/ 68868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ FileKind; }
/* harmony export */ });
//#endregion
//#region Utilities
var FileKind;
(function (FileKind) {
    FileKind[FileKind["FILE"] = 0] = "FILE";
    FileKind[FileKind["FOLDER"] = 1] = "FOLDER";
    FileKind[FileKind["ROOT_FOLDER"] = 2] = "ROOT_FOLDER";
})(FileKind || (FileKind = {}));
//#endregion


/***/ })

}]);