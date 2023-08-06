"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-de32e213"],{

/***/ 67353:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ toVSDataTransfer; },
/* harmony export */   L: function() { return /* binding */ toExternalVSDataTransfer; }
/* harmony export */ });
/* harmony import */ var _base_browser_dnd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23213);
/* harmony import */ var _base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22599);
/* harmony import */ var _base_common_mime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13074);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56946);
/* harmony import */ var _platform_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1857);
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





function toVSDataTransfer(dataTransfer) {
    const vsDataTransfer = new _base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__/* .VSDataTransfer */ .Hl();
    for (const item of dataTransfer.items) {
        const type = item.type;
        if (item.kind === 'string') {
            const asStringValue = new Promise(resolve => item.getAsString(resolve));
            vsDataTransfer.append(type, (0,_base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__/* .createStringDataTransferItem */ .ZO)(asStringValue));
        }
        else if (item.kind === 'file') {
            const file = item.getAsFile();
            if (file) {
                vsDataTransfer.append(type, createFileDataTransferItemFromFile(file));
            }
        }
    }
    return vsDataTransfer;
}
function createFileDataTransferItemFromFile(file) {
    const uri = file.path ? _base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.parse(file.path) : undefined;
    return (0,_base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__/* .createFileDataTransferItem */ .Ix)(file.name, uri, () => __awaiter(this, void 0, void 0, function* () {
        return new Uint8Array(yield file.arrayBuffer());
    }));
}
const INTERNAL_DND_MIME_TYPES = Object.freeze([
    _platform_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_4__/* .CodeDataTransfers */ .Km.EDITORS,
    _platform_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_4__/* .CodeDataTransfers */ .Km.FILES,
    _base_browser_dnd_js__WEBPACK_IMPORTED_MODULE_0__/* .DataTransfers */ .g.RESOURCES,
    _base_browser_dnd_js__WEBPACK_IMPORTED_MODULE_0__/* .DataTransfers */ .g.INTERNAL_URI_LIST,
]);
function toExternalVSDataTransfer(sourceDataTransfer, overwriteUriList = false) {
    const vsDataTransfer = toVSDataTransfer(sourceDataTransfer);
    // Try to expose the internal uri-list type as the standard type
    const uriList = vsDataTransfer.get(_base_browser_dnd_js__WEBPACK_IMPORTED_MODULE_0__/* .DataTransfers */ .g.INTERNAL_URI_LIST);
    if (uriList) {
        vsDataTransfer.replace(_base_common_mime_js__WEBPACK_IMPORTED_MODULE_2__/* .Mimes */ .v.uriList, uriList);
    }
    else {
        if (overwriteUriList || !vsDataTransfer.has(_base_common_mime_js__WEBPACK_IMPORTED_MODULE_2__/* .Mimes */ .v.uriList)) {
            // Otherwise, fallback to adding dragged resources to the uri list
            const editorData = [];
            for (const item of sourceDataTransfer.items) {
                const file = item.getAsFile();
                if (file) {
                    const path = file.path;
                    try {
                        if (path) {
                            editorData.push(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.file(path).toString());
                        }
                        else {
                            editorData.push(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_3__/* .URI */ .o.parse(file.name, true).toString());
                        }
                    }
                    catch (_a) {
                        // Parsing failed. Leave out from list
                    }
                }
            }
            if (editorData.length) {
                vsDataTransfer.replace(_base_common_mime_js__WEBPACK_IMPORTED_MODULE_2__/* .Mimes */ .v.uriList, (0,_base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__/* .createStringDataTransferItem */ .ZO)(_base_common_dataTransfer_js__WEBPACK_IMPORTED_MODULE_1__/* .UriList */ .Z0.create(editorData)));
            }
        }
    }
    for (const internal of INTERNAL_DND_MIME_TYPES) {
        vsDataTransfer.delete(internal);
    }
    return vsDataTransfer;
}


/***/ }),

/***/ 87016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CL: function() { return /* binding */ isCodeEditor; },
/* harmony export */   Pi: function() { return /* binding */ getCodeEditor; },
/* harmony export */   QI: function() { return /* binding */ isDiffEditor; }
/* harmony export */ });
/* unused harmony export isCompositeEditor */
/* harmony import */ var _common_editorCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36537);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 *@internal
 */
function isCodeEditor(thing) {
    if (thing && typeof thing.getEditorType === 'function') {
        return thing.getEditorType() === _common_editorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorType */ .g.ICodeEditor;
    }
    else {
        return false;
    }
}
/**
 *@internal
 */
function isDiffEditor(thing) {
    if (thing && typeof thing.getEditorType === 'function') {
        return thing.getEditorType() === _common_editorCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorType */ .g.IDiffEditor;
    }
    else {
        return false;
    }
}
/**
 *@internal
 */
function isCompositeEditor(thing) {
    return !!thing
        && typeof thing === 'object'
        && typeof thing.onDidChangeActiveEditor === 'function';
}
/**
 *@internal
 */
function getCodeEditor(thing) {
    if (isCodeEditor(thing)) {
        return thing;
    }
    if (isDiffEditor(thing)) {
        return thing.getModifiedEditor();
    }
    if (isCompositeEditor(thing) && isCodeEditor(thing.activeCodeEditor)) {
        return thing.activeCodeEditor;
    }
    return null;
}


/***/ }),

/***/ 97624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: function() { return /* binding */ GlobalEditorPointerMoveMonitor; },
/* harmony export */   N5: function() { return /* binding */ EditorMouseEventFactory; },
/* harmony export */   Pp: function() { return /* binding */ createCoordinatesRelativeToEditor; },
/* harmony export */   YN: function() { return /* binding */ PageCoordinates; },
/* harmony export */   gy: function() { return /* binding */ EditorMouseEvent; },
/* harmony export */   kG: function() { return /* binding */ createEditorPagePosition; },
/* harmony export */   rU: function() { return /* binding */ ClientCoordinates; },
/* harmony export */   t7: function() { return /* binding */ DynamicCssRules; },
/* harmony export */   tC: function() { return /* binding */ EditorPointerEventFactory; }
/* harmony export */ });
/* unused harmony exports EditorPagePosition, CoordinatesRelativeToEditor */
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_browser_globalPointerMoveMonitor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70353);
/* harmony import */ var _base_browser_mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3076);
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72432);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79027);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3561);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






/**
 * Coordinates relative to the whole document (e.g. mouse event's pageX and pageY)
 */
class PageCoordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._pageCoordinatesBrand = undefined;
    }
    toClientCoordinates() {
        return new ClientCoordinates(this.x - window.scrollX, this.y - window.scrollY);
    }
}
/**
 * Coordinates within the application's client area (i.e. origin is document's scroll position).
 *
 * For example, clicking in the top-left corner of the client area will
 * always result in a mouse event with a client.x value of 0, regardless
 * of whether the page is scrolled horizontally.
 */
class ClientCoordinates {
    constructor(clientX, clientY) {
        this.clientX = clientX;
        this.clientY = clientY;
        this._clientCoordinatesBrand = undefined;
    }
    toPageCoordinates() {
        return new PageCoordinates(this.clientX + window.scrollX, this.clientY + window.scrollY);
    }
}
/**
 * The position of the editor in the page.
 */
class EditorPagePosition {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._editorPagePositionBrand = undefined;
    }
}
/**
 * Coordinates relative to the the (top;left) of the editor that can be used safely with other internal editor metrics.
 * **NOTE**: This position is obtained by taking page coordinates and transforming them relative to the
 * editor's (top;left) position in a way in which scale transformations are taken into account.
 * **NOTE**: These coordinates could be negative if the mouse position is outside the editor.
 */
class CoordinatesRelativeToEditor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._positionRelativeToEditorBrand = undefined;
    }
}
function createEditorPagePosition(editorViewDomNode) {
    const editorPos = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .getDomNodePagePosition */ .i(editorViewDomNode);
    return new EditorPagePosition(editorPos.left, editorPos.top, editorPos.width, editorPos.height);
}
function createCoordinatesRelativeToEditor(editorViewDomNode, editorPagePosition, pos) {
    // The editor's page position is read from the DOM using getBoundingClientRect().
    //
    // getBoundingClientRect() returns the actual dimensions, while offsetWidth and offsetHeight
    // reflect the unscaled size. We can use this difference to detect a transform:scale()
    // and we will apply the transformation in inverse to get mouse coordinates that make sense inside the editor.
    //
    // This could be expanded to cover rotation as well maybe by walking the DOM up from `editorViewDomNode`
    // and computing the effective transformation matrix using getComputedStyle(element).transform.
    //
    const scaleX = editorPagePosition.width / editorViewDomNode.offsetWidth;
    const scaleY = editorPagePosition.height / editorViewDomNode.offsetHeight;
    // Adjust mouse offsets if editor appears to be scaled via transforms
    const relativeX = (pos.x - editorPagePosition.x) / scaleX;
    const relativeY = (pos.y - editorPagePosition.y) / scaleY;
    return new CoordinatesRelativeToEditor(relativeX, relativeY);
}
class EditorMouseEvent extends _base_browser_mouseEvent_js__WEBPACK_IMPORTED_MODULE_2__/* .StandardMouseEvent */ .n {
    constructor(e, isFromPointerCapture, editorViewDomNode) {
        super(e);
        this._editorMouseEventBrand = undefined;
        this.isFromPointerCapture = isFromPointerCapture;
        this.pos = new PageCoordinates(this.posx, this.posy);
        this.editorPos = createEditorPagePosition(editorViewDomNode);
        this.relativePos = createCoordinatesRelativeToEditor(editorViewDomNode, this.editorPos, this.pos);
    }
}
class EditorMouseEventFactory {
    constructor(editorViewDomNode) {
        this._editorViewDomNode = editorViewDomNode;
    }
    _create(e) {
        return new EditorMouseEvent(e, false, this._editorViewDomNode);
    }
    onContextMenu(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, 'contextmenu', (e) => {
            callback(this._create(e));
        });
    }
    onMouseUp(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, 'mouseup', (e) => {
            callback(this._create(e));
        });
    }
    onMouseDown(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_DOWN, (e) => {
            callback(this._create(e));
        });
    }
    onPointerDown(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_DOWN, (e) => {
            callback(this._create(e), e.pointerId);
        });
    }
    onMouseLeave(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.MOUSE_LEAVE, (e) => {
            callback(this._create(e));
        });
    }
    onMouseMove(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, 'mousemove', (e) => callback(this._create(e)));
    }
}
class EditorPointerEventFactory {
    constructor(editorViewDomNode) {
        this._editorViewDomNode = editorViewDomNode;
    }
    _create(e) {
        return new EditorMouseEvent(e, false, this._editorViewDomNode);
    }
    onPointerUp(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, 'pointerup', (e) => {
            callback(this._create(e));
        });
    }
    onPointerDown(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_DOWN, (e) => {
            callback(this._create(e), e.pointerId);
        });
    }
    onPointerLeave(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_LEAVE, (e) => {
            callback(this._create(e));
        });
    }
    onPointerMove(target, callback) {
        return _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(target, 'pointermove', (e) => callback(this._create(e)));
    }
}
class GlobalEditorPointerMoveMonitor extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_4__/* .Disposable */ .JT {
    constructor(editorViewDomNode) {
        super();
        this._editorViewDomNode = editorViewDomNode;
        this._globalPointerMoveMonitor = this._register(new _base_browser_globalPointerMoveMonitor_js__WEBPACK_IMPORTED_MODULE_1__/* .GlobalPointerMoveMonitor */ .C());
        this._keydownListener = null;
    }
    startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
        // Add a <<capture>> keydown event listener that will cancel the monitoring
        // if something other than a modifier key is pressed
        this._keydownListener = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(document, 'keydown', (e) => {
            const chord = e.toKeyCodeChord();
            if (chord.isModifierKey()) {
                // Allow modifier keys
                return;
            }
            this._globalPointerMoveMonitor.stopMonitoring(true, e.browserEvent);
        }, true);
        this._globalPointerMoveMonitor.startMonitoring(initialElement, pointerId, initialButtons, (e) => {
            pointerMoveCallback(new EditorMouseEvent(e, true, this._editorViewDomNode));
        }, (e) => {
            this._keydownListener.dispose();
            onStopCallback(e);
        });
    }
    stopMonitoring() {
        this._globalPointerMoveMonitor.stopMonitoring(true);
    }
}
/**
 * A helper to create dynamic css rules, bound to a class name.
 * Rules are reused.
 * Reference counting and delayed garbage collection ensure that no rules leak.
*/
class DynamicCssRules {
    constructor(_editor) {
        this._editor = _editor;
        this._instanceId = ++DynamicCssRules._idPool;
        this._counter = 0;
        this._rules = new Map();
        // We delay garbage collection so that hanging rules can be reused.
        this._garbageCollectionScheduler = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_3__/* .RunOnceScheduler */ .pY(() => this.garbageCollect(), 1000);
    }
    createClassNameRef(options) {
        const rule = this.getOrCreateRule(options);
        rule.increaseRefCount();
        return {
            className: rule.className,
            dispose: () => {
                rule.decreaseRefCount();
                this._garbageCollectionScheduler.schedule();
            }
        };
    }
    getOrCreateRule(properties) {
        const key = this.computeUniqueKey(properties);
        let existingRule = this._rules.get(key);
        if (!existingRule) {
            const counter = this._counter++;
            existingRule = new RefCountedCssRule(key, `dyn-rule-${this._instanceId}-${counter}`, _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .isInShadowDOM */ .OO(this._editor.getContainerDomNode())
                ? this._editor.getContainerDomNode()
                : undefined, properties);
            this._rules.set(key, existingRule);
        }
        return existingRule;
    }
    computeUniqueKey(properties) {
        return JSON.stringify(properties);
    }
    garbageCollect() {
        for (const rule of this._rules.values()) {
            if (!rule.hasReferences()) {
                this._rules.delete(rule.key);
                rule.dispose();
            }
        }
    }
}
DynamicCssRules._idPool = 0;
class RefCountedCssRule {
    constructor(key, className, _containerElement, properties) {
        this.key = key;
        this.className = className;
        this.properties = properties;
        this._referenceCount = 0;
        this._styleElement = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .createStyleSheet */ .dS(_containerElement);
        this._styleElement.textContent = this.getCssText(this.className, this.properties);
    }
    getCssText(className, properties) {
        let str = `.${className} {`;
        for (const prop in properties) {
            const value = properties[prop];
            let cssValue;
            if (typeof value === 'object') {
                cssValue = (0,_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_5__/* .asCssVariable */ .n_1)(value.id);
            }
            else {
                cssValue = value;
            }
            const cssPropName = camelToDashes(prop);
            str += `\n\t${cssPropName}: ${cssValue};`;
        }
        str += `\n}`;
        return str;
    }
    dispose() {
        this._styleElement.remove();
    }
    increaseRefCount() {
        this._referenceCount++;
    }
    decreaseRefCount() {
        this._referenceCount--;
    }
    hasReferences() {
        return this._referenceCount > 0;
    }
}
function camelToDashes(str) {
    return str.replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
}


/***/ }),

/***/ 91213:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AJ: function() { return /* binding */ MultiCommand; },
/* harmony export */   QG: function() { return /* binding */ registerInstantiatedEditorAction; },
/* harmony export */   Qr: function() { return /* binding */ registerEditorAction; },
/* harmony export */   R6: function() { return /* binding */ EditorAction; },
/* harmony export */   Sq: function() { return /* binding */ SelectAllCommand; },
/* harmony export */   Uc: function() { return /* binding */ EditorExtensionsRegistry; },
/* harmony export */   _K: function() { return /* binding */ registerEditorContribution; },
/* harmony export */   _l: function() { return /* binding */ EditorCommand; },
/* harmony export */   fK: function() { return /* binding */ registerEditorCommand; },
/* harmony export */   jY: function() { return /* binding */ MultiEditorAction; },
/* harmony export */   kz: function() { return /* binding */ RedoCommand; },
/* harmony export */   mY: function() { return /* binding */ Command; },
/* harmony export */   n_: function() { return /* binding */ UndoCommand; },
/* harmony export */   rn: function() { return /* binding */ registerMultiEditorAction; },
/* harmony export */   sb: function() { return /* binding */ registerModelAndPositionCommand; },
/* harmony export */   x1: function() { return /* binding */ EditorAction2; }
/* harmony export */ });
/* unused harmony export ProxyCommand */
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56946);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74312);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13372);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76774);
/* harmony import */ var _common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7699);
/* harmony import */ var _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3145);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77783);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81043);
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38048);
/* harmony import */ var _platform_keybinding_common_keybindingsRegistry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31151);
/* harmony import */ var _platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72015);
/* harmony import */ var _platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72209);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28935);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28876);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/















class Command {
    constructor(opts) {
        this.id = opts.id;
        this.precondition = opts.precondition;
        this._kbOpts = opts.kbOpts;
        this._menuOpts = opts.menuOpts;
        this._description = opts.description;
    }
    register() {
        if (Array.isArray(this._menuOpts)) {
            this._menuOpts.forEach(this._registerMenuItem, this);
        }
        else if (this._menuOpts) {
            this._registerMenuItem(this._menuOpts);
        }
        if (this._kbOpts) {
            const kbOptsArr = Array.isArray(this._kbOpts) ? this._kbOpts : [this._kbOpts];
            for (const kbOpts of kbOptsArr) {
                let kbWhen = kbOpts.kbExpr;
                if (this.precondition) {
                    if (kbWhen) {
                        kbWhen = _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .ContextKeyExpr */ .Ao.and(kbWhen, this.precondition);
                    }
                    else {
                        kbWhen = this.precondition;
                    }
                }
                const desc = {
                    id: this.id,
                    weight: kbOpts.weight,
                    args: kbOpts.args,
                    when: kbWhen,
                    primary: kbOpts.primary,
                    secondary: kbOpts.secondary,
                    win: kbOpts.win,
                    linux: kbOpts.linux,
                    mac: kbOpts.mac,
                };
                _platform_keybinding_common_keybindingsRegistry_js__WEBPACK_IMPORTED_MODULE_9__/* .KeybindingsRegistry */ .W.registerKeybindingRule(desc);
            }
        }
        _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_6__/* .CommandsRegistry */ .P.registerCommand({
            id: this.id,
            handler: (accessor, args) => this.runCommand(accessor, args),
            description: this._description
        });
    }
    _registerMenuItem(item) {
        _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuRegistry */ .BH.appendMenuItem(item.menuId, {
            group: item.group,
            command: {
                id: this.id,
                title: item.title,
                icon: item.icon,
                precondition: this.precondition
            },
            when: item.when,
            order: item.order
        });
    }
}
class MultiCommand extends Command {
    constructor() {
        super(...arguments);
        this._implementations = [];
    }
    /**
     * A higher priority gets to be looked at first
     */
    addImplementation(priority, name, implementation) {
        this._implementations.push({ priority, name, implementation });
        this._implementations.sort((a, b) => b.priority - a.priority);
        return {
            dispose: () => {
                for (let i = 0; i < this._implementations.length; i++) {
                    if (this._implementations[i].implementation === implementation) {
                        this._implementations.splice(i, 1);
                        return;
                    }
                }
            }
        };
    }
    runCommand(accessor, args) {
        const logService = accessor.get(_platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_12__/* .ILogService */ .VZ);
        logService.trace(`Executing Command '${this.id}' which has ${this._implementations.length} bound.`);
        for (const impl of this._implementations) {
            const result = impl.implementation(accessor, args);
            if (result) {
                logService.trace(`Command '${this.id}' was handled by '${impl.name}'.`);
                if (typeof result === 'boolean') {
                    return;
                }
                return result;
            }
        }
        logService.trace(`The Command '${this.id}' was not handled by any implementation.`);
    }
}
//#endregion
/**
 * A command that delegates to another command's implementation.
 *
 * This lets different commands be registered but share the same implementation
 */
class ProxyCommand extends Command {
    constructor(command, opts) {
        super(opts);
        this.command = command;
    }
    runCommand(accessor, args) {
        return this.command.runCommand(accessor, args);
    }
}
class EditorCommand extends Command {
    /**
     * Create a command class that is bound to a certain editor contribution.
     */
    static bindToContribution(controllerGetter) {
        return class EditorControllerCommandImpl extends EditorCommand {
            constructor(opts) {
                super(opts);
                this._callback = opts.handler;
            }
            runEditorCommand(accessor, editor, args) {
                const controller = controllerGetter(editor);
                if (controller) {
                    this._callback(controller, args);
                }
            }
        };
    }
    static runEditorCommand(accessor, args, precondition, runner) {
        const codeEditorService = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_2__/* .ICodeEditorService */ .$);
        // Find the editor with text focus or active
        const editor = codeEditorService.getFocusedCodeEditor() || codeEditorService.getActiveCodeEditor();
        if (!editor) {
            // well, at least we tried...
            return;
        }
        return editor.invokeWithinContext((editorAccessor) => {
            const kbService = editorAccessor.get(_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .IContextKeyService */ .i6);
            if (!kbService.contextMatchesRules((0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .withNullAsUndefined */ .f6)(precondition))) {
                // precondition does not hold
                return;
            }
            return runner(editorAccessor, editor, args);
        });
    }
    runCommand(accessor, args) {
        return EditorCommand.runEditorCommand(accessor, args, this.precondition, (accessor, editor, args) => this.runEditorCommand(accessor, editor, args));
    }
}
class EditorAction extends EditorCommand {
    static convertOptions(opts) {
        let menuOpts;
        if (Array.isArray(opts.menuOpts)) {
            menuOpts = opts.menuOpts;
        }
        else if (opts.menuOpts) {
            menuOpts = [opts.menuOpts];
        }
        else {
            menuOpts = [];
        }
        function withDefaults(item) {
            if (!item.menuId) {
                item.menuId = _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.EditorContext;
            }
            if (!item.title) {
                item.title = opts.label;
            }
            item.when = _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .ContextKeyExpr */ .Ao.and(opts.precondition, item.when);
            return item;
        }
        if (Array.isArray(opts.contextMenuOpts)) {
            menuOpts.push(...opts.contextMenuOpts.map(withDefaults));
        }
        else if (opts.contextMenuOpts) {
            menuOpts.push(withDefaults(opts.contextMenuOpts));
        }
        opts.menuOpts = menuOpts;
        return opts;
    }
    constructor(opts) {
        super(EditorAction.convertOptions(opts));
        this.label = opts.label;
        this.alias = opts.alias;
    }
    runEditorCommand(accessor, editor, args) {
        this.reportTelemetry(accessor, editor);
        return this.run(accessor, editor, args || {});
    }
    reportTelemetry(accessor, editor) {
        accessor.get(_platform_telemetry_common_telemetry_js__WEBPACK_IMPORTED_MODULE_11__/* .ITelemetryService */ .b).publicLog2('editorActionInvoked', { name: this.label, id: this.id });
    }
}
class MultiEditorAction extends EditorAction {
    constructor() {
        super(...arguments);
        this._implementations = [];
    }
    /**
     * A higher priority gets to be looked at first
     */
    addImplementation(priority, implementation) {
        this._implementations.push([priority, implementation]);
        this._implementations.sort((a, b) => b[0] - a[0]);
        return {
            dispose: () => {
                for (let i = 0; i < this._implementations.length; i++) {
                    if (this._implementations[i][1] === implementation) {
                        this._implementations.splice(i, 1);
                        return;
                    }
                }
            }
        };
    }
    run(accessor, editor, args) {
        for (const impl of this._implementations) {
            const result = impl[1](accessor, editor, args);
            if (result) {
                if (typeof result === 'boolean') {
                    return;
                }
                return result;
            }
        }
    }
}
//#endregion EditorAction
//#region EditorAction2
class EditorAction2 extends _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .Action2 */ .Ke {
    run(accessor, ...args) {
        // Find the editor with text focus or active
        const codeEditorService = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_2__/* .ICodeEditorService */ .$);
        const editor = codeEditorService.getFocusedCodeEditor() || codeEditorService.getActiveCodeEditor();
        if (!editor) {
            // well, at least we tried...
            return;
        }
        // precondition does hold
        return editor.invokeWithinContext((editorAccessor) => {
            var _a;
            const kbService = editorAccessor.get(_platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_7__/* .IContextKeyService */ .i6);
            const logService = editorAccessor.get(_platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_12__/* .ILogService */ .VZ);
            const enabled = kbService.contextMatchesRules((0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .withNullAsUndefined */ .f6)(this.desc.precondition));
            if (!enabled) {
                logService.debug(`[EditorAction2] NOT running command because its precondition is FALSE`, this.desc.id, (_a = this.desc.precondition) === null || _a === void 0 ? void 0 : _a.serialize());
                return;
            }
            return this.runEditorCommand(editorAccessor, editor, ...args);
        });
    }
}
//#endregion
// --- Registration of commands and actions
function registerModelAndPositionCommand(id, handler) {
    _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_6__/* .CommandsRegistry */ .P.registerCommand(id, function (accessor, ...args) {
        const instaService = accessor.get(_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_8__/* .IInstantiationService */ .TG);
        const [resource, position] = args;
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .assertType */ .p_)(_base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__/* .URI */ .o.isUri(resource));
        (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_13__/* .assertType */ .p_)(_common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L.isIPosition(position));
        const model = accessor.get(_common_services_model_js__WEBPACK_IMPORTED_MODULE_3__/* .IModelService */ .q).getModel(resource);
        if (model) {
            const editorPosition = _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L.lift(position);
            return instaService.invokeFunction(handler, model, editorPosition, ...args.slice(2));
        }
        return accessor.get(_common_services_resolverService_js__WEBPACK_IMPORTED_MODULE_4__/* .ITextModelService */ .S).createModelReference(resource).then(reference => {
            return new Promise((resolve, reject) => {
                try {
                    const result = instaService.invokeFunction(handler, reference.object.textEditorModel, _common_core_position_js__WEBPACK_IMPORTED_MODULE_14__/* .Position */ .L.lift(position), args.slice(2));
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            }).finally(() => {
                reference.dispose();
            });
        });
    });
}
function registerEditorCommand(editorCommand) {
    EditorContributionRegistry.INSTANCE.registerEditorCommand(editorCommand);
    return editorCommand;
}
function registerEditorAction(ctor) {
    const action = new ctor();
    EditorContributionRegistry.INSTANCE.registerEditorAction(action);
    return action;
}
function registerMultiEditorAction(action) {
    EditorContributionRegistry.INSTANCE.registerEditorAction(action);
    return action;
}
function registerInstantiatedEditorAction(editorAction) {
    EditorContributionRegistry.INSTANCE.registerEditorAction(editorAction);
}
/**
 * Registers an editor contribution. Editor contributions have a lifecycle which is bound
 * to a specific code editor instance.
 */
function registerEditorContribution(id, ctor, instantiation) {
    EditorContributionRegistry.INSTANCE.registerEditorContribution(id, ctor, instantiation);
}
var EditorExtensionsRegistry;
(function (EditorExtensionsRegistry) {
    function getEditorCommand(commandId) {
        return EditorContributionRegistry.INSTANCE.getEditorCommand(commandId);
    }
    EditorExtensionsRegistry.getEditorCommand = getEditorCommand;
    function getEditorActions() {
        return EditorContributionRegistry.INSTANCE.getEditorActions();
    }
    EditorExtensionsRegistry.getEditorActions = getEditorActions;
    function getEditorContributions() {
        return EditorContributionRegistry.INSTANCE.getEditorContributions();
    }
    EditorExtensionsRegistry.getEditorContributions = getEditorContributions;
    function getSomeEditorContributions(ids) {
        return EditorContributionRegistry.INSTANCE.getEditorContributions().filter(c => ids.indexOf(c.id) >= 0);
    }
    EditorExtensionsRegistry.getSomeEditorContributions = getSomeEditorContributions;
    function getDiffEditorContributions() {
        return EditorContributionRegistry.INSTANCE.getDiffEditorContributions();
    }
    EditorExtensionsRegistry.getDiffEditorContributions = getDiffEditorContributions;
})(EditorExtensionsRegistry || (EditorExtensionsRegistry = {}));
// Editor extension points
const Extensions = {
    EditorCommonContributions: 'editor.contributions'
};
class EditorContributionRegistry {
    constructor() {
        this.editorContributions = [];
        this.diffEditorContributions = [];
        this.editorActions = [];
        this.editorCommands = Object.create(null);
    }
    registerEditorContribution(id, ctor, instantiation) {
        this.editorContributions.push({ id, ctor: ctor, instantiation });
    }
    getEditorContributions() {
        return this.editorContributions.slice(0);
    }
    getDiffEditorContributions() {
        return this.diffEditorContributions.slice(0);
    }
    registerEditorAction(action) {
        action.register();
        this.editorActions.push(action);
    }
    getEditorActions() {
        return this.editorActions;
    }
    registerEditorCommand(editorCommand) {
        editorCommand.register();
        this.editorCommands[editorCommand.id] = editorCommand;
    }
    getEditorCommand(commandId) {
        return (this.editorCommands[commandId] || null);
    }
}
EditorContributionRegistry.INSTANCE = new EditorContributionRegistry();
_platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_10__/* .Registry */ .B.add(Extensions.EditorCommonContributions, EditorContributionRegistry.INSTANCE);
function registerCommand(command) {
    command.register();
    return command;
}
const UndoCommand = registerCommand(new MultiCommand({
    id: 'undo',
    precondition: undefined,
    kbOpts: {
        weight: 0 /* KeybindingWeight.EditorCore */,
        primary: 2048 /* KeyMod.CtrlCmd */ | 56 /* KeyCode.KeyZ */
    },
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.MenubarEditMenu,
            group: '1_do',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({ key: 'miUndo', comment: ['&& denotes a mnemonic'] }, "&&Undo"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('undo', "Undo"),
            order: 1
        }]
}));
registerCommand(new ProxyCommand(UndoCommand, { id: 'default:undo', precondition: undefined }));
const RedoCommand = registerCommand(new MultiCommand({
    id: 'redo',
    precondition: undefined,
    kbOpts: {
        weight: 0 /* KeybindingWeight.EditorCore */,
        primary: 2048 /* KeyMod.CtrlCmd */ | 55 /* KeyCode.KeyY */,
        secondary: [2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 56 /* KeyCode.KeyZ */],
        mac: { primary: 2048 /* KeyMod.CtrlCmd */ | 1024 /* KeyMod.Shift */ | 56 /* KeyCode.KeyZ */ }
    },
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.MenubarEditMenu,
            group: '1_do',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({ key: 'miRedo', comment: ['&& denotes a mnemonic'] }, "&&Redo"),
            order: 2
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('redo', "Redo"),
            order: 1
        }]
}));
registerCommand(new ProxyCommand(RedoCommand, { id: 'default:redo', precondition: undefined }));
const SelectAllCommand = registerCommand(new MultiCommand({
    id: 'editor.action.selectAll',
    precondition: undefined,
    kbOpts: {
        weight: 0 /* KeybindingWeight.EditorCore */,
        kbExpr: null,
        primary: 2048 /* KeyMod.CtrlCmd */ | 31 /* KeyCode.KeyA */
    },
    menuOpts: [{
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.MenubarSelectionMenu,
            group: '1_basic',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({ key: 'miSelectAll', comment: ['&& denotes a mnemonic'] }, "&&Select All"),
            order: 1
        }, {
            menuId: _platform_actions_common_actions_js__WEBPACK_IMPORTED_MODULE_5__/* .MenuId */ .eH.CommandPalette,
            group: '',
            title: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('selectAll', "Select All"),
            order: 1
        }]
}));


/***/ }),

/***/ 61059:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ AbstractCodeEditorService; }
/* harmony export */ });
/* unused harmony export GlobalStyleSheet */
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41558);
/* harmony import */ var _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31754);
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




let AbstractCodeEditorService = class AbstractCodeEditorService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(_themeService) {
        super();
        this._themeService = _themeService;
        this._onWillCreateCodeEditor = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this._onCodeEditorAdd = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onCodeEditorAdd = this._onCodeEditorAdd.event;
        this._onCodeEditorRemove = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onCodeEditorRemove = this._onCodeEditorRemove.event;
        this._onWillCreateDiffEditor = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this._onDiffEditorAdd = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onDiffEditorAdd = this._onDiffEditorAdd.event;
        this._onDiffEditorRemove = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onDiffEditorRemove = this._onDiffEditorRemove.event;
        this._decorationOptionProviders = new Map();
        this._codeEditorOpenHandlers = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__/* .LinkedList */ .S();
        this._modelProperties = new Map();
        this._codeEditors = Object.create(null);
        this._diffEditors = Object.create(null);
        this._globalStyleSheet = null;
    }
    willCreateCodeEditor() {
        this._onWillCreateCodeEditor.fire();
    }
    addCodeEditor(editor) {
        this._codeEditors[editor.getId()] = editor;
        this._onCodeEditorAdd.fire(editor);
    }
    removeCodeEditor(editor) {
        if (delete this._codeEditors[editor.getId()]) {
            this._onCodeEditorRemove.fire(editor);
        }
    }
    listCodeEditors() {
        return Object.keys(this._codeEditors).map(id => this._codeEditors[id]);
    }
    willCreateDiffEditor() {
        this._onWillCreateDiffEditor.fire();
    }
    addDiffEditor(editor) {
        this._diffEditors[editor.getId()] = editor;
        this._onDiffEditorAdd.fire(editor);
    }
    removeDiffEditor(editor) {
        if (delete this._diffEditors[editor.getId()]) {
            this._onDiffEditorRemove.fire(editor);
        }
    }
    listDiffEditors() {
        return Object.keys(this._diffEditors).map(id => this._diffEditors[id]);
    }
    getFocusedCodeEditor() {
        let editorWithWidgetFocus = null;
        const editors = this.listCodeEditors();
        for (const editor of editors) {
            if (editor.hasTextFocus()) {
                // bingo!
                return editor;
            }
            if (editor.hasWidgetFocus()) {
                editorWithWidgetFocus = editor;
            }
        }
        return editorWithWidgetFocus;
    }
    removeDecorationType(key) {
        const provider = this._decorationOptionProviders.get(key);
        if (provider) {
            provider.refCount--;
            if (provider.refCount <= 0) {
                this._decorationOptionProviders.delete(key);
                provider.dispose();
                this.listCodeEditors().forEach((ed) => ed.removeDecorationsByType(key));
            }
        }
    }
    setModelProperty(resource, key, value) {
        const key1 = resource.toString();
        let dest;
        if (this._modelProperties.has(key1)) {
            dest = this._modelProperties.get(key1);
        }
        else {
            dest = new Map();
            this._modelProperties.set(key1, dest);
        }
        dest.set(key, value);
    }
    getModelProperty(resource, key) {
        const key1 = resource.toString();
        if (this._modelProperties.has(key1)) {
            const innerMap = this._modelProperties.get(key1);
            return innerMap.get(key);
        }
        return undefined;
    }
    openCodeEditor(input, source, sideBySide) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const handler of this._codeEditorOpenHandlers) {
                const candidate = yield handler(input, source, sideBySide);
                if (candidate !== null) {
                    return candidate;
                }
            }
            return null;
        });
    }
    registerCodeEditorOpenHandler(handler) {
        const rm = this._codeEditorOpenHandlers.unshift(handler);
        return (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(rm);
    }
};
AbstractCodeEditorService = __decorate([
    __param(0, _platform_theme_common_themeService_js__WEBPACK_IMPORTED_MODULE_3__/* .IThemeService */ .XE)
], AbstractCodeEditorService);
class GlobalStyleSheet {
    constructor(styleSheet) {
        this._styleSheet = styleSheet;
    }
}


/***/ }),

/***/ 24581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gl: function() { return /* binding */ ResourceTextEdit; },
/* harmony export */   fo: function() { return /* binding */ ResourceEdit; },
/* harmony export */   vu: function() { return /* binding */ IBulkEditService; }
/* harmony export */ });
/* unused harmony export ResourceFileEdit */
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56946);
/* harmony import */ var _base_common_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28935);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



const IBulkEditService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('IWorkspaceEditService');
class ResourceEdit {
    constructor(metadata) {
        this.metadata = metadata;
    }
    static convert(edit) {
        return edit.edits.map(edit => {
            if (ResourceTextEdit.is(edit)) {
                return ResourceTextEdit.lift(edit);
            }
            if (ResourceFileEdit.is(edit)) {
                return ResourceFileEdit.lift(edit);
            }
            throw new Error('Unsupported edit');
        });
    }
}
class ResourceTextEdit extends ResourceEdit {
    static is(candidate) {
        if (candidate instanceof ResourceTextEdit) {
            return true;
        }
        return (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(candidate)
            && _base_common_uri_js__WEBPACK_IMPORTED_MODULE_1__/* .URI */ .o.isUri(candidate.resource)
            && (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(candidate.textEdit);
    }
    static lift(edit) {
        if (edit instanceof ResourceTextEdit) {
            return edit;
        }
        else {
            return new ResourceTextEdit(edit.resource, edit.textEdit, edit.versionId, edit.metadata);
        }
    }
    constructor(resource, textEdit, versionId = undefined, metadata) {
        super(metadata);
        this.resource = resource;
        this.textEdit = textEdit;
        this.versionId = versionId;
    }
}
class ResourceFileEdit extends ResourceEdit {
    static is(candidate) {
        if (candidate instanceof ResourceFileEdit) {
            return true;
        }
        else {
            return (0,_base_common_types_js__WEBPACK_IMPORTED_MODULE_2__/* .isObject */ .Kn)(candidate)
                && (Boolean(candidate.newResource) || Boolean(candidate.oldResource));
        }
    }
    static lift(edit) {
        if (edit instanceof ResourceFileEdit) {
            return edit;
        }
        else {
            return new ResourceFileEdit(edit.oldResource, edit.newResource, edit.options, edit.metadata);
        }
    }
    constructor(oldResource, newResource, options = {}, metadata) {
        super(metadata);
        this.oldResource = oldResource;
        this.newResource = newResource;
        this.options = options;
    }
}


/***/ }),

/***/ 74312:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ ICodeEditorService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38048);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const ICodeEditorService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('codeEditorService');


/***/ }),

/***/ 21357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q8: function() { return /* binding */ EditorWorkerClient; },
/* harmony export */   eu: function() { return /* binding */ EditorWorkerService; }
/* harmony export */ });
/* unused harmony export EditorWorkerHost */
/* harmony import */ var _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27484);
/* harmony import */ var _base_browser_defaultWorkerFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84456);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76584);
/* harmony import */ var _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11296);
/* harmony import */ var _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63263);
/* harmony import */ var _common_services_model_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76774);
/* harmony import */ var _common_services_textResourceConfiguration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33302);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23607);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33899);
/* harmony import */ var _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(28876);
/* harmony import */ var _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61111);
/* harmony import */ var _base_common_errors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50847);
/* harmony import */ var _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(58431);
/* harmony import */ var _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23733);
/* harmony import */ var _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47599);
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

















/**
 * Stop syncing a model to the worker if it was not needed for 1 min.
 */
const STOP_SYNC_MODEL_DELTA_TIME_MS = 60 * 1000;
/**
 * Stop the worker if it was not needed for 5 min.
 */
const STOP_WORKER_DELTA_TIME_MS = 5 * 60 * 1000;
function canSyncModel(modelService, resource) {
    const model = modelService.getModel(resource);
    if (!model) {
        return false;
    }
    if (model.isTooLargeForSyncing()) {
        return false;
    }
    return true;
}
let EditorWorkerService = class EditorWorkerService extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(modelService, configurationService, logService, languageConfigurationService, languageFeaturesService) {
        super();
        this._modelService = modelService;
        this._workerManager = this._register(new WorkerManager(this._modelService, languageConfigurationService));
        this._logService = logService;
        // register default link-provider and default completions-provider
        this._register(languageFeaturesService.linkProvider.register({ language: '*', hasAccessToAllModels: true }, {
            provideLinks: (model, token) => {
                if (!canSyncModel(this._modelService, model.uri)) {
                    return Promise.resolve({ links: [] }); // File too large
                }
                return this._workerManager.withWorker().then(client => client.computeLinks(model.uri)).then(links => {
                    return links && { links };
                });
            }
        }));
        this._register(languageFeaturesService.completionProvider.register('*', new WordBasedCompletionItemProvider(this._workerManager, configurationService, this._modelService, languageConfigurationService)));
    }
    dispose() {
        super.dispose();
    }
    canComputeUnicodeHighlights(uri) {
        return canSyncModel(this._modelService, uri);
    }
    computedUnicodeHighlights(uri, options, range) {
        return this._workerManager.withWorker().then(client => client.computedUnicodeHighlights(uri, options, range));
    }
    computeDiff(original, modified, options, algorithm) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._workerManager.withWorker().then(client => client.computeDiff(original, modified, options, algorithm));
            if (!result) {
                return null;
            }
            // Convert from space efficient JSON data to rich objects.
            const diff = {
                identical: result.identical,
                quitEarly: result.quitEarly,
                changes: result.changes.map((c) => {
                    var _a;
                    return new _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_14__/* .LineRangeMapping */ .f0(new _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_15__/* .LineRange */ .z(c[0], c[1]), new _common_core_lineRange_js__WEBPACK_IMPORTED_MODULE_15__/* .LineRange */ .z(c[2], c[3]), (_a = c[4]) === null || _a === void 0 ? void 0 : _a.map((c) => new _common_diff_linesDiffComputer_js__WEBPACK_IMPORTED_MODULE_14__/* .RangeMapping */ .iy(new _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e(c[0], c[1], c[2], c[3]), new _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e(c[4], c[5], c[6], c[7]))));
                }),
            };
            return diff;
        });
    }
    computeMoreMinimalEdits(resource, edits, pretty = false) {
        if ((0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_9__/* .isNonEmptyArray */ .Of)(edits)) {
            if (!canSyncModel(this._modelService, resource)) {
                return Promise.resolve(edits); // File too large
            }
            const sw = _base_common_stopwatch_js__WEBPACK_IMPORTED_MODULE_11__/* .StopWatch */ .G.create(true);
            const result = this._workerManager.withWorker().then(client => client.computeMoreMinimalEdits(resource, edits, pretty));
            result.finally(() => this._logService.trace('FORMAT#computeMoreMinimalEdits', resource.toString(true), sw.elapsed()));
            return Promise.race([result, (0,_base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .timeout */ .Vs)(1000).then(() => edits)]);
        }
        else {
            return Promise.resolve(undefined);
        }
    }
    canNavigateValueSet(resource) {
        return (canSyncModel(this._modelService, resource));
    }
    navigateValueSet(resource, range, up) {
        return this._workerManager.withWorker().then(client => client.navigateValueSet(resource, range, up));
    }
    canComputeWordRanges(resource) {
        return canSyncModel(this._modelService, resource);
    }
    computeWordRanges(resource, range) {
        return this._workerManager.withWorker().then(client => client.computeWordRanges(resource, range));
    }
};
EditorWorkerService = __decorate([
    __param(0, _common_services_model_js__WEBPACK_IMPORTED_MODULE_6__/* .IModelService */ .q),
    __param(1, _common_services_textResourceConfiguration_js__WEBPACK_IMPORTED_MODULE_7__/* .ITextResourceConfigurationService */ .V),
    __param(2, _platform_log_common_log_js__WEBPACK_IMPORTED_MODULE_10__/* .ILogService */ .VZ),
    __param(3, _common_languages_languageConfigurationRegistry_js__WEBPACK_IMPORTED_MODULE_4__/* .ILanguageConfigurationService */ .c_),
    __param(4, _common_services_languageFeatures_js__WEBPACK_IMPORTED_MODULE_13__/* .ILanguageFeaturesService */ .p)
], EditorWorkerService);
class WordBasedCompletionItemProvider {
    constructor(workerManager, configurationService, modelService, languageConfigurationService) {
        this.languageConfigurationService = languageConfigurationService;
        this._debugDisplayName = 'wordbasedCompletions';
        this._workerManager = workerManager;
        this._configurationService = configurationService;
        this._modelService = modelService;
    }
    provideCompletionItems(model, position) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this._configurationService.getValue(model.uri, position, 'editor');
            if (!config.wordBasedSuggestions) {
                return undefined;
            }
            const models = [];
            if (config.wordBasedSuggestionsMode === 'currentDocument') {
                // only current file and only if not too large
                if (canSyncModel(this._modelService, model.uri)) {
                    models.push(model.uri);
                }
            }
            else {
                // either all files or files of same language
                for (const candidate of this._modelService.getModels()) {
                    if (!canSyncModel(this._modelService, candidate.uri)) {
                        continue;
                    }
                    if (candidate === model) {
                        models.unshift(candidate.uri);
                    }
                    else if (config.wordBasedSuggestionsMode === 'allDocuments' || candidate.getLanguageId() === model.getLanguageId()) {
                        models.push(candidate.uri);
                    }
                }
            }
            if (models.length === 0) {
                return undefined; // File too large, no other files
            }
            const wordDefRegExp = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
            const word = model.getWordAtPosition(position);
            const replace = !word ? _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e.fromPositions(position) : new _common_core_range_js__WEBPACK_IMPORTED_MODULE_16__/* .Range */ .e(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn);
            const insert = replace.setEndPosition(position.lineNumber, position.column);
            const client = yield this._workerManager.withWorker();
            const data = yield client.textualSuggest(models, word === null || word === void 0 ? void 0 : word.word, wordDefRegExp);
            if (!data) {
                return undefined;
            }
            return {
                duration: data.duration,
                suggestions: data.words.map((word) => {
                    return {
                        kind: 18 /* languages.CompletionItemKind.Text */,
                        label: word,
                        insertText: word,
                        range: { insert, replace }
                    };
                }),
            };
        });
    }
}
class WorkerManager extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(modelService, languageConfigurationService) {
        super();
        this.languageConfigurationService = languageConfigurationService;
        this._modelService = modelService;
        this._editorWorkerClient = null;
        this._lastWorkerUsedTime = (new Date()).getTime();
        const stopWorkerInterval = this._register(new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .IntervalTimer */ .zh());
        stopWorkerInterval.cancelAndSet(() => this._checkStopIdleWorker(), Math.round(STOP_WORKER_DELTA_TIME_MS / 2));
        this._register(this._modelService.onModelRemoved(_ => this._checkStopEmptyWorker()));
    }
    dispose() {
        if (this._editorWorkerClient) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
        super.dispose();
    }
    /**
     * Check if the model service has no more models and stop the worker if that is the case.
     */
    _checkStopEmptyWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const models = this._modelService.getModels();
        if (models.length === 0) {
            // There are no more models => nothing possible for me to do
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    /**
     * Check if the worker has been idle for a while and then stop it.
     */
    _checkStopIdleWorker() {
        if (!this._editorWorkerClient) {
            return;
        }
        const timeSinceLastWorkerUsedTime = (new Date()).getTime() - this._lastWorkerUsedTime;
        if (timeSinceLastWorkerUsedTime > STOP_WORKER_DELTA_TIME_MS) {
            this._editorWorkerClient.dispose();
            this._editorWorkerClient = null;
        }
    }
    withWorker() {
        this._lastWorkerUsedTime = (new Date()).getTime();
        if (!this._editorWorkerClient) {
            this._editorWorkerClient = new EditorWorkerClient(this._modelService, false, 'editorWorkerService', this.languageConfigurationService);
        }
        return Promise.resolve(this._editorWorkerClient);
    }
}
class EditorModelManager extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(proxy, modelService, keepIdleModels) {
        super();
        this._syncedModels = Object.create(null);
        this._syncedModelsLastUsedTime = Object.create(null);
        this._proxy = proxy;
        this._modelService = modelService;
        if (!keepIdleModels) {
            const timer = new _base_common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .IntervalTimer */ .zh();
            timer.cancelAndSet(() => this._checkStopModelSync(), Math.round(STOP_SYNC_MODEL_DELTA_TIME_MS / 2));
            this._register(timer);
        }
    }
    dispose() {
        for (const modelUrl in this._syncedModels) {
            (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .dispose */ .B9)(this._syncedModels[modelUrl]);
        }
        this._syncedModels = Object.create(null);
        this._syncedModelsLastUsedTime = Object.create(null);
        super.dispose();
    }
    ensureSyncedResources(resources, forceLargeModels) {
        for (const resource of resources) {
            const resourceStr = resource.toString();
            if (!this._syncedModels[resourceStr]) {
                this._beginModelSync(resource, forceLargeModels);
            }
            if (this._syncedModels[resourceStr]) {
                this._syncedModelsLastUsedTime[resourceStr] = (new Date()).getTime();
            }
        }
    }
    _checkStopModelSync() {
        const currentTime = (new Date()).getTime();
        const toRemove = [];
        for (const modelUrl in this._syncedModelsLastUsedTime) {
            const elapsedTime = currentTime - this._syncedModelsLastUsedTime[modelUrl];
            if (elapsedTime > STOP_SYNC_MODEL_DELTA_TIME_MS) {
                toRemove.push(modelUrl);
            }
        }
        for (const e of toRemove) {
            this._stopModelSync(e);
        }
    }
    _beginModelSync(resource, forceLargeModels) {
        const model = this._modelService.getModel(resource);
        if (!model) {
            return;
        }
        if (!forceLargeModels && model.isTooLargeForSyncing()) {
            return;
        }
        const modelUrl = resource.toString();
        this._proxy.acceptNewModel({
            url: model.uri.toString(),
            lines: model.getLinesContent(),
            EOL: model.getEOL(),
            versionId: model.getVersionId()
        });
        const toDispose = new _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .DisposableStore */ .SL();
        toDispose.add(model.onDidChangeContent((e) => {
            this._proxy.acceptModelChanged(modelUrl.toString(), e);
        }));
        toDispose.add(model.onWillDispose(() => {
            this._stopModelSync(modelUrl);
        }));
        toDispose.add((0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
            this._proxy.acceptRemovedModel(modelUrl);
        }));
        this._syncedModels[modelUrl] = toDispose;
    }
    _stopModelSync(modelUrl) {
        const toDispose = this._syncedModels[modelUrl];
        delete this._syncedModels[modelUrl];
        delete this._syncedModelsLastUsedTime[modelUrl];
        (0,_base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .dispose */ .B9)(toDispose);
    }
}
class SynchronousWorkerClient {
    constructor(instance) {
        this._instance = instance;
        this._proxyObj = Promise.resolve(this._instance);
    }
    dispose() {
        this._instance.dispose();
    }
    getProxyObject() {
        return this._proxyObj;
    }
}
class EditorWorkerHost {
    constructor(workerClient) {
        this._workerClient = workerClient;
    }
    // foreign host request
    fhr(method, args) {
        return this._workerClient.fhr(method, args);
    }
}
class EditorWorkerClient extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(modelService, keepIdleModels, label, languageConfigurationService) {
        super();
        this.languageConfigurationService = languageConfigurationService;
        this._disposed = false;
        this._modelService = modelService;
        this._keepIdleModels = keepIdleModels;
        this._workerFactory = new _base_browser_defaultWorkerFactory_js__WEBPACK_IMPORTED_MODULE_3__/* .DefaultWorkerFactory */ .H(label);
        this._worker = null;
        this._modelManager = null;
    }
    // foreign host request
    fhr(method, args) {
        throw new Error(`Not implemented!`);
    }
    _getOrCreateWorker() {
        if (!this._worker) {
            try {
                this._worker = this._register(new _base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_2__/* .SimpleWorkerClient */ .PB(this._workerFactory, 'vs/editor/common/services/editorSimpleWorker', new EditorWorkerHost(this)));
            }
            catch (err) {
                (0,_base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_2__/* .logOnceWebWorkerWarning */ .HZ)(err);
                this._worker = new SynchronousWorkerClient(new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorSimpleWorker */ .k(new EditorWorkerHost(this), null));
            }
        }
        return this._worker;
    }
    _getProxy() {
        return this._getOrCreateWorker().getProxyObject().then(undefined, (err) => {
            (0,_base_common_worker_simpleWorker_js__WEBPACK_IMPORTED_MODULE_2__/* .logOnceWebWorkerWarning */ .HZ)(err);
            this._worker = new SynchronousWorkerClient(new _common_services_editorSimpleWorker_js__WEBPACK_IMPORTED_MODULE_5__/* .EditorSimpleWorker */ .k(new EditorWorkerHost(this), null));
            return this._getOrCreateWorker().getProxyObject();
        });
    }
    _getOrCreateModelManager(proxy) {
        if (!this._modelManager) {
            this._modelManager = this._register(new EditorModelManager(proxy, this._modelService, this._keepIdleModels));
        }
        return this._modelManager;
    }
    _withSyncedResources(resources, forceLargeModels = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                return Promise.reject((0,_base_common_errors_js__WEBPACK_IMPORTED_MODULE_12__/* .canceled */ .F0)());
            }
            return this._getProxy().then((proxy) => {
                this._getOrCreateModelManager(proxy).ensureSyncedResources(resources, forceLargeModels);
                return proxy;
            });
        });
    }
    computedUnicodeHighlights(uri, options, range) {
        return this._withSyncedResources([uri]).then(proxy => {
            return proxy.computeUnicodeHighlights(uri.toString(), options, range);
        });
    }
    computeDiff(original, modified, options, algorithm) {
        return this._withSyncedResources([original, modified], /* forceLargeModels */ true).then(proxy => {
            return proxy.computeDiff(original.toString(), modified.toString(), options, algorithm);
        });
    }
    computeMoreMinimalEdits(resource, edits, pretty) {
        return this._withSyncedResources([resource]).then(proxy => {
            return proxy.computeMoreMinimalEdits(resource.toString(), edits, pretty);
        });
    }
    computeLinks(resource) {
        return this._withSyncedResources([resource]).then(proxy => {
            return proxy.computeLinks(resource.toString());
        });
    }
    computeDefaultDocumentColors(resource) {
        return this._withSyncedResources([resource]).then(proxy => {
            return proxy.computeDefaultDocumentColors(resource.toString());
        });
    }
    textualSuggest(resources, leadingWord, wordDefRegExp) {
        return __awaiter(this, void 0, void 0, function* () {
            const proxy = yield this._withSyncedResources(resources);
            const wordDef = wordDefRegExp.source;
            const wordDefFlags = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_8__/* .regExpFlags */ .mr)(wordDefRegExp);
            return proxy.textualSuggest(resources.map(r => r.toString()), leadingWord, wordDef, wordDefFlags);
        });
    }
    computeWordRanges(resource, range) {
        return this._withSyncedResources([resource]).then(proxy => {
            const model = this._modelService.getModel(resource);
            if (!model) {
                return Promise.resolve(null);
            }
            const wordDefRegExp = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
            const wordDef = wordDefRegExp.source;
            const wordDefFlags = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_8__/* .regExpFlags */ .mr)(wordDefRegExp);
            return proxy.computeWordRanges(resource.toString(), range, wordDef, wordDefFlags);
        });
    }
    navigateValueSet(resource, range, up) {
        return this._withSyncedResources([resource]).then(proxy => {
            const model = this._modelService.getModel(resource);
            if (!model) {
                return null;
            }
            const wordDefRegExp = this.languageConfigurationService.getLanguageConfiguration(model.getLanguageId()).getWordDefinition();
            const wordDef = wordDefRegExp.source;
            const wordDefFlags = (0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_8__/* .regExpFlags */ .mr)(wordDefRegExp);
            return proxy.navigateValueSet(resource.toString(), range, up, wordDef, wordDefFlags);
        });
    }
    dispose() {
        super.dispose();
        this._disposed = true;
    }
}


/***/ }),

/***/ 19432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export MarkerDecorationsContribution */
/* harmony import */ var _common_services_markerDecorations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68703);
/* harmony import */ var _editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91213);
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


let MarkerDecorationsContribution = class MarkerDecorationsContribution {
    constructor(_editor, _markerDecorationsService) {
        // Doesn't do anything, just requires `IMarkerDecorationsService` to make sure it gets instantiated
    }
    dispose() {
    }
};
MarkerDecorationsContribution.ID = 'editor.contrib.markerDecorations';
MarkerDecorationsContribution = __decorate([
    __param(1, _common_services_markerDecorations_js__WEBPACK_IMPORTED_MODULE_0__/* .IMarkerDecorationsService */ .i)
], MarkerDecorationsContribution);
(0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_1__/* .registerEditorContribution */ ._K)(MarkerDecorationsContribution.ID, MarkerDecorationsContribution, 0 /* EditorContributionInstantiation.Eager */); // eager because it instantiates IMarkerDecorationsService which is responsible for rendering squiggles


/***/ }),

/***/ 80260:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ OpenerService; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29811);
/* harmony import */ var _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41558);
/* harmony import */ var _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17795);
/* harmony import */ var _base_common_marshalling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36001);
/* harmony import */ var _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11966);
/* harmony import */ var _base_common_resources_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8506);
/* harmony import */ var _base_common_uri_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56946);
/* harmony import */ var _codeEditorService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74312);
/* harmony import */ var _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77783);
/* harmony import */ var _platform_editor_common_editor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66459);
/* harmony import */ var _platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38876);
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












let CommandOpener = class CommandOpener {
    constructor(_commandService) {
        this._commandService = _commandService;
    }
    open(target, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_11__/* .matchesScheme */ .xn)(target, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.command)) {
                return false;
            }
            if (!(options === null || options === void 0 ? void 0 : options.allowCommands)) {
                // silently ignore commands when command-links are disabled, also
                // suppress other openers by returning TRUE
                return true;
            }
            if (typeof target === 'string') {
                target = _base_common_uri_js__WEBPACK_IMPORTED_MODULE_7__/* .URI */ .o.parse(target);
            }
            if (Array.isArray(options.allowCommands)) {
                // Only allow specific commands
                if (!options.allowCommands.includes(target.path)) {
                    // Suppress other openers by returning TRUE
                    return true;
                }
            }
            // execute as command
            let args = [];
            try {
                args = (0,_base_common_marshalling_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .Qc)(decodeURIComponent(target.query));
            }
            catch (_a) {
                // ignore and retry
                try {
                    args = (0,_base_common_marshalling_js__WEBPACK_IMPORTED_MODULE_4__/* .parse */ .Qc)(target.query);
                }
                catch (_b) {
                    // ignore error
                }
            }
            if (!Array.isArray(args)) {
                args = [args];
            }
            yield this._commandService.executeCommand(target.path, ...args);
            return true;
        });
    }
};
CommandOpener = __decorate([
    __param(0, _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_9__/* .ICommandService */ .H)
], CommandOpener);
let EditorOpener = class EditorOpener {
    constructor(_editorService) {
        this._editorService = _editorService;
    }
    open(target, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof target === 'string') {
                target = _base_common_uri_js__WEBPACK_IMPORTED_MODULE_7__/* .URI */ .o.parse(target);
            }
            const { selection, uri } = (0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_11__/* .extractSelection */ .xI)(target);
            target = uri;
            if (target.scheme === _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.file) {
                target = (0,_base_common_resources_js__WEBPACK_IMPORTED_MODULE_6__/* .normalizePath */ .AH)(target); // workaround for non-normalized paths (https://github.com/microsoft/vscode/issues/12954)
            }
            yield this._editorService.openCodeEditor({
                resource: target,
                options: Object.assign({ selection, source: (options === null || options === void 0 ? void 0 : options.fromUserGesture) ? _platform_editor_common_editor_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorOpenSource */ .v.USER : _platform_editor_common_editor_js__WEBPACK_IMPORTED_MODULE_10__/* .EditorOpenSource */ .v.API }, options === null || options === void 0 ? void 0 : options.editorOptions)
            }, this._editorService.getFocusedCodeEditor(), options === null || options === void 0 ? void 0 : options.openToSide);
            return true;
        });
    }
};
EditorOpener = __decorate([
    __param(0, _codeEditorService_js__WEBPACK_IMPORTED_MODULE_8__/* .ICodeEditorService */ .$)
], EditorOpener);
let OpenerService = class OpenerService {
    constructor(editorService, commandService) {
        this._openers = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__/* .LinkedList */ .S();
        this._validators = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__/* .LinkedList */ .S();
        this._resolvers = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__/* .LinkedList */ .S();
        this._resolvedUriTargets = new _base_common_map_js__WEBPACK_IMPORTED_MODULE_3__/* .ResourceMap */ .Y9(uri => uri.with({ path: null, fragment: null, query: null }).toString());
        this._externalOpeners = new _base_common_linkedList_js__WEBPACK_IMPORTED_MODULE_2__/* .LinkedList */ .S();
        // Default external opener is going through window.open()
        this._defaultExternalOpener = {
            openExternal: (href) => __awaiter(this, void 0, void 0, function* () {
                // ensure to open HTTP/HTTPS links into new windows
                // to not trigger a navigation. Any other link is
                // safe to be set as HREF to prevent a blank window
                // from opening.
                if ((0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_11__/* .matchesSomeScheme */ .Gs)(href, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.http, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.https)) {
                    _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .windowOpenNoOpener */ .V3(href);
                }
                else {
                    window.location.href = href;
                }
                return true;
            })
        };
        // Default opener: any external, maito, http(s), command, and catch-all-editors
        this._openers.push({
            open: (target, options) => __awaiter(this, void 0, void 0, function* () {
                if ((options === null || options === void 0 ? void 0 : options.openExternal) || (0,_platform_opener_common_opener_js__WEBPACK_IMPORTED_MODULE_11__/* .matchesSomeScheme */ .Gs)(target, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.mailto, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.http, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.https, _base_common_network_js__WEBPACK_IMPORTED_MODULE_5__/* .Schemas */ .lg.vsls)) {
                    // open externally
                    yield this._doOpenExternal(target, options);
                    return true;
                }
                return false;
            })
        });
        this._openers.push(new CommandOpener(commandService));
        this._openers.push(new EditorOpener(editorService));
    }
    registerOpener(opener) {
        const remove = this._openers.unshift(opener);
        return { dispose: remove };
    }
    open(target, options) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // check with contributed validators
            const targetURI = typeof target === 'string' ? _base_common_uri_js__WEBPACK_IMPORTED_MODULE_7__/* .URI */ .o.parse(target) : target;
            // validate against the original URI that this URI resolves to, if one exists
            const validationTarget = (_a = this._resolvedUriTargets.get(targetURI)) !== null && _a !== void 0 ? _a : target;
            for (const validator of this._validators) {
                if (!(yield validator.shouldOpen(validationTarget, options))) {
                    return false;
                }
            }
            // check with contributed openers
            for (const opener of this._openers) {
                const handled = yield opener.open(target, options);
                if (handled) {
                    return true;
                }
            }
            return false;
        });
    }
    resolveExternalUri(resource, options) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const resolver of this._resolvers) {
                try {
                    const result = yield resolver.resolveExternalUri(resource, options);
                    if (result) {
                        if (!this._resolvedUriTargets.has(result.resolved)) {
                            this._resolvedUriTargets.set(result.resolved, resource);
                        }
                        return result;
                    }
                }
                catch (_a) {
                    // noop
                }
            }
            throw new Error('Could not resolve external URI: ' + resource.toString());
        });
    }
    _doOpenExternal(resource, options) {
        return __awaiter(this, void 0, void 0, function* () {
            //todo@jrieken IExternalUriResolver should support `uri: URI | string`
            const uri = typeof resource === 'string' ? _base_common_uri_js__WEBPACK_IMPORTED_MODULE_7__/* .URI */ .o.parse(resource) : resource;
            let externalUri;
            try {
                externalUri = (yield this.resolveExternalUri(uri, options)).resolved;
            }
            catch (_a) {
                externalUri = uri;
            }
            let href;
            if (typeof resource === 'string' && uri.toString() === externalUri.toString()) {
                // open the url-string AS IS
                href = resource;
            }
            else {
                // open URI using the toString(noEncode)+encodeURI-trick
                href = encodeURI(externalUri.toString(true));
            }
            if (options === null || options === void 0 ? void 0 : options.allowContributedOpeners) {
                const preferredOpenerId = typeof (options === null || options === void 0 ? void 0 : options.allowContributedOpeners) === 'string' ? options === null || options === void 0 ? void 0 : options.allowContributedOpeners : undefined;
                for (const opener of this._externalOpeners) {
                    const didOpen = yield opener.openExternal(href, {
                        sourceUri: uri,
                        preferredOpenerId,
                    }, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None);
                    if (didOpen) {
                        return true;
                    }
                }
            }
            return this._defaultExternalOpener.openExternal(href, { sourceUri: uri }, _base_common_cancellation_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationToken */ .T.None);
        });
    }
    dispose() {
        this._validators.clear();
    }
};
OpenerService = __decorate([
    __param(0, _codeEditorService_js__WEBPACK_IMPORTED_MODULE_8__/* .ICodeEditorService */ .$),
    __param(1, _platform_commands_common_commands_js__WEBPACK_IMPORTED_MODULE_9__/* .ICommandService */ .H)
], OpenerService);


/***/ }),

/***/ 3848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ createWebWorker; }
/* harmony export */ });
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99269);
/* harmony import */ var _editorWorkerService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21357);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * Create a new web worker that has model syncing capabilities built in.
 * Specify an AMD module to load that will `create` an object that will be proxied.
 */
function createWebWorker(modelService, languageConfigurationService, opts) {
    return new MonacoWebWorkerImpl(modelService, languageConfigurationService, opts);
}
class MonacoWebWorkerImpl extends _editorWorkerService_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorWorkerClient */ .Q8 {
    constructor(modelService, languageConfigurationService, opts) {
        super(modelService, opts.keepIdleModels || false, opts.label, languageConfigurationService);
        this._foreignModuleId = opts.moduleId;
        this._foreignModuleCreateData = opts.createData || null;
        this._foreignModuleHost = opts.host || null;
        this._foreignProxy = null;
    }
    // foreign host request
    fhr(method, args) {
        if (!this._foreignModuleHost || typeof this._foreignModuleHost[method] !== 'function') {
            return Promise.reject(new Error('Missing method ' + method + ' or missing main thread foreign host.'));
        }
        try {
            return Promise.resolve(this._foreignModuleHost[method].apply(this._foreignModuleHost, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _getForeignProxy() {
        if (!this._foreignProxy) {
            this._foreignProxy = this._getProxy().then((proxy) => {
                const foreignHostMethods = this._foreignModuleHost ? (0,_base_common_objects_js__WEBPACK_IMPORTED_MODULE_0__/* .getAllMethodNames */ .$E)(this._foreignModuleHost) : [];
                return proxy.loadForeignModule(this._foreignModuleId, this._foreignModuleCreateData, foreignHostMethods).then((foreignMethods) => {
                    this._foreignModuleCreateData = null;
                    const proxyMethodRequest = (method, args) => {
                        return proxy.fmr(method, args);
                    };
                    const createProxyMethod = (method, proxyMethodRequest) => {
                        return function () {
                            const args = Array.prototype.slice.call(arguments, 0);
                            return proxyMethodRequest(method, args);
                        };
                    };
                    const foreignProxy = {};
                    for (const foreignMethod of foreignMethods) {
                        foreignProxy[foreignMethod] = createProxyMethod(foreignMethod, proxyMethodRequest);
                    }
                    return foreignProxy;
                });
            });
        }
        return this._foreignProxy;
    }
    getProxy() {
        return this._getForeignProxy();
    }
    withSyncedResources(resources) {
        return this._withSyncedResources(resources).then(_ => this.getProxy());
    }
}


/***/ }),

/***/ 49427:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ StableEditorScrollState; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class StableEditorScrollState {
    static capture(editor) {
        if (editor.getScrollTop() === 0 || editor.hasPendingScrollAnimation()) {
            // Never mess with the scroll top if the editor is at the top of the file or if there is a pending scroll animation
            return new StableEditorScrollState(editor.getScrollTop(), editor.getContentHeight(), null, 0, null);
        }
        let visiblePosition = null;
        let visiblePositionScrollDelta = 0;
        const visibleRanges = editor.getVisibleRanges();
        if (visibleRanges.length > 0) {
            visiblePosition = visibleRanges[0].getStartPosition();
            const visiblePositionScrollTop = editor.getTopForPosition(visiblePosition.lineNumber, visiblePosition.column);
            visiblePositionScrollDelta = editor.getScrollTop() - visiblePositionScrollTop;
        }
        return new StableEditorScrollState(editor.getScrollTop(), editor.getContentHeight(), visiblePosition, visiblePositionScrollDelta, editor.getPosition());
    }
    constructor(_initialScrollTop, _initialContentHeight, _visiblePosition, _visiblePositionScrollDelta, _cursorPosition) {
        this._initialScrollTop = _initialScrollTop;
        this._initialContentHeight = _initialContentHeight;
        this._visiblePosition = _visiblePosition;
        this._visiblePositionScrollDelta = _visiblePositionScrollDelta;
        this._cursorPosition = _cursorPosition;
    }
    restore(editor) {
        if (this._initialContentHeight === editor.getContentHeight() && this._initialScrollTop === editor.getScrollTop()) {
            // The editor's content height and scroll top haven't changed, so we don't need to do anything
            return;
        }
        if (this._visiblePosition) {
            const visiblePositionScrollTop = editor.getTopForPosition(this._visiblePosition.lineNumber, this._visiblePosition.column);
            editor.setScrollTop(visiblePositionScrollTop + this._visiblePositionScrollDelta);
        }
    }
    restoreRelativeVerticalPositionOfCursor(editor) {
        if (this._initialContentHeight === editor.getContentHeight() && this._initialScrollTop === editor.getScrollTop()) {
            // The editor's content height and scroll top haven't changed, so we don't need to do anything
            return;
        }
        const currentCursorPosition = editor.getPosition();
        if (!this._cursorPosition || !currentCursorPosition) {
            return;
        }
        const offset = editor.getTopForLineNumber(currentCursorPosition.lineNumber) - editor.getTopForLineNumber(this._cursorPosition.lineNumber);
        editor.setScrollTop(editor.getScrollTop() + offset);
    }
}


/***/ })

}]);