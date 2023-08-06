"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-d6fb64da"],{

/***/ 30344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ createFastDomNode; },
/* harmony export */   Z: function() { return /* binding */ FastDomNode; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class FastDomNode {
    constructor(domNode) {
        this.domNode = domNode;
        this._maxWidth = '';
        this._width = '';
        this._height = '';
        this._top = '';
        this._left = '';
        this._bottom = '';
        this._right = '';
        this._paddingLeft = '';
        this._fontFamily = '';
        this._fontWeight = '';
        this._fontSize = '';
        this._fontStyle = '';
        this._fontFeatureSettings = '';
        this._fontVariationSettings = '';
        this._textDecoration = '';
        this._lineHeight = '';
        this._letterSpacing = '';
        this._className = '';
        this._display = '';
        this._position = '';
        this._visibility = '';
        this._color = '';
        this._backgroundColor = '';
        this._layerHint = false;
        this._contain = 'none';
        this._boxShadow = '';
    }
    setMaxWidth(_maxWidth) {
        const maxWidth = numberAsPixels(_maxWidth);
        if (this._maxWidth === maxWidth) {
            return;
        }
        this._maxWidth = maxWidth;
        this.domNode.style.maxWidth = this._maxWidth;
    }
    setWidth(_width) {
        const width = numberAsPixels(_width);
        if (this._width === width) {
            return;
        }
        this._width = width;
        this.domNode.style.width = this._width;
    }
    setHeight(_height) {
        const height = numberAsPixels(_height);
        if (this._height === height) {
            return;
        }
        this._height = height;
        this.domNode.style.height = this._height;
    }
    setTop(_top) {
        const top = numberAsPixels(_top);
        if (this._top === top) {
            return;
        }
        this._top = top;
        this.domNode.style.top = this._top;
    }
    setLeft(_left) {
        const left = numberAsPixels(_left);
        if (this._left === left) {
            return;
        }
        this._left = left;
        this.domNode.style.left = this._left;
    }
    setBottom(_bottom) {
        const bottom = numberAsPixels(_bottom);
        if (this._bottom === bottom) {
            return;
        }
        this._bottom = bottom;
        this.domNode.style.bottom = this._bottom;
    }
    setRight(_right) {
        const right = numberAsPixels(_right);
        if (this._right === right) {
            return;
        }
        this._right = right;
        this.domNode.style.right = this._right;
    }
    setPaddingLeft(_paddingLeft) {
        const paddingLeft = numberAsPixels(_paddingLeft);
        if (this._paddingLeft === paddingLeft) {
            return;
        }
        this._paddingLeft = paddingLeft;
        this.domNode.style.paddingLeft = this._paddingLeft;
    }
    setFontFamily(fontFamily) {
        if (this._fontFamily === fontFamily) {
            return;
        }
        this._fontFamily = fontFamily;
        this.domNode.style.fontFamily = this._fontFamily;
    }
    setFontWeight(fontWeight) {
        if (this._fontWeight === fontWeight) {
            return;
        }
        this._fontWeight = fontWeight;
        this.domNode.style.fontWeight = this._fontWeight;
    }
    setFontSize(_fontSize) {
        const fontSize = numberAsPixels(_fontSize);
        if (this._fontSize === fontSize) {
            return;
        }
        this._fontSize = fontSize;
        this.domNode.style.fontSize = this._fontSize;
    }
    setFontStyle(fontStyle) {
        if (this._fontStyle === fontStyle) {
            return;
        }
        this._fontStyle = fontStyle;
        this.domNode.style.fontStyle = this._fontStyle;
    }
    setFontFeatureSettings(fontFeatureSettings) {
        if (this._fontFeatureSettings === fontFeatureSettings) {
            return;
        }
        this._fontFeatureSettings = fontFeatureSettings;
        this.domNode.style.fontFeatureSettings = this._fontFeatureSettings;
    }
    setFontVariationSettings(fontVariationSettings) {
        if (this._fontVariationSettings === fontVariationSettings) {
            return;
        }
        this._fontVariationSettings = fontVariationSettings;
        this.domNode.style.fontVariationSettings = this._fontVariationSettings;
    }
    setTextDecoration(textDecoration) {
        if (this._textDecoration === textDecoration) {
            return;
        }
        this._textDecoration = textDecoration;
        this.domNode.style.textDecoration = this._textDecoration;
    }
    setLineHeight(_lineHeight) {
        const lineHeight = numberAsPixels(_lineHeight);
        if (this._lineHeight === lineHeight) {
            return;
        }
        this._lineHeight = lineHeight;
        this.domNode.style.lineHeight = this._lineHeight;
    }
    setLetterSpacing(_letterSpacing) {
        const letterSpacing = numberAsPixels(_letterSpacing);
        if (this._letterSpacing === letterSpacing) {
            return;
        }
        this._letterSpacing = letterSpacing;
        this.domNode.style.letterSpacing = this._letterSpacing;
    }
    setClassName(className) {
        if (this._className === className) {
            return;
        }
        this._className = className;
        this.domNode.className = this._className;
    }
    toggleClassName(className, shouldHaveIt) {
        this.domNode.classList.toggle(className, shouldHaveIt);
        this._className = this.domNode.className;
    }
    setDisplay(display) {
        if (this._display === display) {
            return;
        }
        this._display = display;
        this.domNode.style.display = this._display;
    }
    setPosition(position) {
        if (this._position === position) {
            return;
        }
        this._position = position;
        this.domNode.style.position = this._position;
    }
    setVisibility(visibility) {
        if (this._visibility === visibility) {
            return;
        }
        this._visibility = visibility;
        this.domNode.style.visibility = this._visibility;
    }
    setColor(color) {
        if (this._color === color) {
            return;
        }
        this._color = color;
        this.domNode.style.color = this._color;
    }
    setBackgroundColor(backgroundColor) {
        if (this._backgroundColor === backgroundColor) {
            return;
        }
        this._backgroundColor = backgroundColor;
        this.domNode.style.backgroundColor = this._backgroundColor;
    }
    setLayerHinting(layerHint) {
        if (this._layerHint === layerHint) {
            return;
        }
        this._layerHint = layerHint;
        this.domNode.style.transform = this._layerHint ? 'translate3d(0px, 0px, 0px)' : '';
    }
    setBoxShadow(boxShadow) {
        if (this._boxShadow === boxShadow) {
            return;
        }
        this._boxShadow = boxShadow;
        this.domNode.style.boxShadow = boxShadow;
    }
    setContain(contain) {
        if (this._contain === contain) {
            return;
        }
        this._contain = contain;
        this.domNode.style.contain = this._contain;
    }
    setAttribute(name, value) {
        this.domNode.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.domNode.removeAttribute(name);
    }
    appendChild(child) {
        this.domNode.appendChild(child.domNode);
    }
    removeChild(child) {
        this.domNode.removeChild(child.domNode);
    }
}
function numberAsPixels(value) {
    return (typeof value === 'number' ? `${value}px` : value);
}
function createFastDomNode(domNode) {
    return new FastDomNode(domNode);
}


/***/ }),

/***/ 16721:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BO: function() { return /* binding */ renderFormattedText; },
/* harmony export */   IY: function() { return /* binding */ renderText; },
/* harmony export */   az: function() { return /* binding */ createElement; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function renderText(text, options = {}) {
    const element = createElement(options);
    element.textContent = text;
    return element;
}
function renderFormattedText(formattedText, options = {}) {
    const element = createElement(options);
    _renderFormattedText(element, parseFormattedText(formattedText, !!options.renderCodeSegments), options.actionHandler, options.renderCodeSegments);
    return element;
}
function createElement(options) {
    const tagName = options.inline ? 'span' : 'div';
    const element = document.createElement(tagName);
    if (options.className) {
        element.className = options.className;
    }
    return element;
}
class StringStream {
    constructor(source) {
        this.source = source;
        this.index = 0;
    }
    eos() {
        return this.index >= this.source.length;
    }
    next() {
        const next = this.peek();
        this.advance();
        return next;
    }
    peek() {
        return this.source[this.index];
    }
    advance() {
        this.index++;
    }
}
function _renderFormattedText(element, treeNode, actionHandler, renderCodeSegments) {
    let child;
    if (treeNode.type === 2 /* FormatType.Text */) {
        child = document.createTextNode(treeNode.content || '');
    }
    else if (treeNode.type === 3 /* FormatType.Bold */) {
        child = document.createElement('b');
    }
    else if (treeNode.type === 4 /* FormatType.Italics */) {
        child = document.createElement('i');
    }
    else if (treeNode.type === 7 /* FormatType.Code */ && renderCodeSegments) {
        child = document.createElement('code');
    }
    else if (treeNode.type === 5 /* FormatType.Action */ && actionHandler) {
        const a = document.createElement('a');
        actionHandler.disposables.add(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(a, 'click', (event) => {
            actionHandler.callback(String(treeNode.index), event);
        }));
        child = a;
    }
    else if (treeNode.type === 8 /* FormatType.NewLine */) {
        child = document.createElement('br');
    }
    else if (treeNode.type === 1 /* FormatType.Root */) {
        child = element;
    }
    if (child && element !== child) {
        element.appendChild(child);
    }
    if (child && Array.isArray(treeNode.children)) {
        treeNode.children.forEach((nodeChild) => {
            _renderFormattedText(child, nodeChild, actionHandler, renderCodeSegments);
        });
    }
}
function parseFormattedText(content, parseCodeSegments) {
    const root = {
        type: 1 /* FormatType.Root */,
        children: []
    };
    let actionViewItemIndex = 0;
    let current = root;
    const stack = [];
    const stream = new StringStream(content);
    while (!stream.eos()) {
        let next = stream.next();
        const isEscapedFormatType = (next === '\\' && formatTagType(stream.peek(), parseCodeSegments) !== 0 /* FormatType.Invalid */);
        if (isEscapedFormatType) {
            next = stream.next(); // unread the backslash if it escapes a format tag type
        }
        if (!isEscapedFormatType && isFormatTag(next, parseCodeSegments) && next === stream.peek()) {
            stream.advance();
            if (current.type === 2 /* FormatType.Text */) {
                current = stack.pop();
            }
            const type = formatTagType(next, parseCodeSegments);
            if (current.type === type || (current.type === 5 /* FormatType.Action */ && type === 6 /* FormatType.ActionClose */)) {
                current = stack.pop();
            }
            else {
                const newCurrent = {
                    type: type,
                    children: []
                };
                if (type === 5 /* FormatType.Action */) {
                    newCurrent.index = actionViewItemIndex;
                    actionViewItemIndex++;
                }
                current.children.push(newCurrent);
                stack.push(current);
                current = newCurrent;
            }
        }
        else if (next === '\n') {
            if (current.type === 2 /* FormatType.Text */) {
                current = stack.pop();
            }
            current.children.push({
                type: 8 /* FormatType.NewLine */
            });
        }
        else {
            if (current.type !== 2 /* FormatType.Text */) {
                const textCurrent = {
                    type: 2 /* FormatType.Text */,
                    content: next
                };
                current.children.push(textCurrent);
                stack.push(current);
                current = textCurrent;
            }
            else {
                current.content += next;
            }
        }
    }
    if (current.type === 2 /* FormatType.Text */) {
        current = stack.pop();
    }
    if (stack.length) {
        // incorrectly formatted string literal
    }
    return root;
}
function isFormatTag(char, supportCodeSegments) {
    return formatTagType(char, supportCodeSegments) !== 0 /* FormatType.Invalid */;
}
function formatTagType(char, supportCodeSegments) {
    switch (char) {
        case '*':
            return 3 /* FormatType.Bold */;
        case '_':
            return 4 /* FormatType.Italics */;
        case '[':
            return 5 /* FormatType.Action */;
        case ']':
            return 6 /* FormatType.ActionClose */;
        case '`':
            return supportCodeSegments ? 7 /* FormatType.Code */ : 0 /* FormatType.Invalid */;
        default:
            return 0 /* FormatType.Invalid */;
    }
}


/***/ }),

/***/ 70353:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ GlobalPointerMoveMonitor; }
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class GlobalPointerMoveMonitor {
    constructor() {
        this._hooks = new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .DisposableStore */ .SL();
        this._pointerMoveCallback = null;
        this._onStopCallback = null;
    }
    dispose() {
        this.stopMonitoring(false);
        this._hooks.dispose();
    }
    stopMonitoring(invokeStopCallback, browserEvent) {
        if (!this.isMonitoring()) {
            // Not monitoring
            return;
        }
        // Unhook
        this._hooks.clear();
        this._pointerMoveCallback = null;
        const onStopCallback = this._onStopCallback;
        this._onStopCallback = null;
        if (invokeStopCallback && onStopCallback) {
            onStopCallback(browserEvent);
        }
    }
    isMonitoring() {
        return !!this._pointerMoveCallback;
    }
    startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
        if (this.isMonitoring()) {
            this.stopMonitoring(false);
        }
        this._pointerMoveCallback = pointerMoveCallback;
        this._onStopCallback = onStopCallback;
        let eventSource = initialElement;
        try {
            initialElement.setPointerCapture(pointerId);
            this._hooks.add((0,_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .toDisposable */ .OF)(() => {
                try {
                    initialElement.releasePointerCapture(pointerId);
                }
                catch (err) {
                    // See https://github.com/microsoft/vscode/issues/161731
                    //
                    // `releasePointerCapture` sometimes fails when being invoked with the exception:
                    //     DOMException: Failed to execute 'releasePointerCapture' on 'Element':
                    //     No active pointer with the given id is found.
                    //
                    // There's no need to do anything in case of failure
                }
            }));
        }
        catch (err) {
            // See https://github.com/microsoft/vscode/issues/144584
            // See https://github.com/microsoft/vscode/issues/146947
            // `setPointerCapture` sometimes fails when being invoked
            // from a `mousedown` listener on macOS and Windows
            // and it always fails on Linux with the exception:
            //     DOMException: Failed to execute 'setPointerCapture' on 'Element':
            //     No active pointer with the given id is found.
            // In case of failure, we bind the listeners on the window
            eventSource = window;
        }
        this._hooks.add(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(eventSource, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_MOVE, (e) => {
            if (e.buttons !== initialButtons) {
                // Buttons state has changed in the meantime
                this.stopMonitoring(true);
                return;
            }
            e.preventDefault();
            this._pointerMoveCallback(e);
        }));
        this._hooks.add(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(eventSource, _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .EventType */ .tw.POINTER_UP, (e) => this.stopMonitoring(true)));
    }
}


/***/ }),

/***/ 55022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ StandardKeyboardEvent; }
/* harmony export */ });
/* harmony import */ var _browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47975);
/* harmony import */ var _common_keyCodes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17106);
/* harmony import */ var _common_keybindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17873);
/* harmony import */ var _common_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94057);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/




function extractKeyCode(e) {
    if (e.charCode) {
        // "keypress" events mostly
        const char = String.fromCharCode(e.charCode).toUpperCase();
        return _common_keyCodes_js__WEBPACK_IMPORTED_MODULE_1__/* .KeyCodeUtils */ .kL.fromString(char);
    }
    const keyCode = e.keyCode;
    // browser quirks
    if (keyCode === 3) {
        return 7 /* KeyCode.PauseBreak */;
    }
    else if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.isFirefox) {
        switch (keyCode) {
            case 59: return 85 /* KeyCode.Semicolon */;
            case 60:
                if (_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isLinux */ .IJ) {
                    return 97 /* KeyCode.IntlBackslash */;
                }
                break;
            case 61: return 86 /* KeyCode.Equal */;
            // based on: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#numpad_keys
            case 107: return 109 /* KeyCode.NumpadAdd */;
            case 109: return 111 /* KeyCode.NumpadSubtract */;
            case 173: return 88 /* KeyCode.Minus */;
            case 224:
                if (_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isMacintosh */ .dz) {
                    return 57 /* KeyCode.Meta */;
                }
                break;
        }
    }
    else if (_browser_js__WEBPACK_IMPORTED_MODULE_0__.isWebKit) {
        if (_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isMacintosh */ .dz && keyCode === 93) {
            // the two meta keys in the Mac have different key codes (91 and 93)
            return 57 /* KeyCode.Meta */;
        }
        else if (!_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isMacintosh */ .dz && keyCode === 92) {
            return 57 /* KeyCode.Meta */;
        }
    }
    // cross browser keycodes:
    return _common_keyCodes_js__WEBPACK_IMPORTED_MODULE_1__/* .EVENT_KEY_CODE_MAP */ .H_[keyCode] || 0 /* KeyCode.Unknown */;
}
const ctrlKeyMod = (_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isMacintosh */ .dz ? 256 /* KeyMod.WinCtrl */ : 2048 /* KeyMod.CtrlCmd */);
const altKeyMod = 512 /* KeyMod.Alt */;
const shiftKeyMod = 1024 /* KeyMod.Shift */;
const metaKeyMod = (_common_platform_js__WEBPACK_IMPORTED_MODULE_3__/* .isMacintosh */ .dz ? 2048 /* KeyMod.CtrlCmd */ : 256 /* KeyMod.WinCtrl */);
class StandardKeyboardEvent {
    constructor(source) {
        this._standardKeyboardEventBrand = true;
        const e = source;
        this.browserEvent = e;
        this.target = e.target;
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        this.altGraphKey = e.getModifierState('AltGraph');
        this.keyCode = extractKeyCode(e);
        this.code = e.code;
        // console.info(e.type + ": keyCode: " + e.keyCode + ", which: " + e.which + ", charCode: " + e.charCode + ", detail: " + e.detail + " ====> " + this.keyCode + ' -- ' + KeyCode[this.keyCode]);
        this.ctrlKey = this.ctrlKey || this.keyCode === 5 /* KeyCode.Ctrl */;
        this.altKey = this.altKey || this.keyCode === 6 /* KeyCode.Alt */;
        this.shiftKey = this.shiftKey || this.keyCode === 4 /* KeyCode.Shift */;
        this.metaKey = this.metaKey || this.keyCode === 57 /* KeyCode.Meta */;
        this._asKeybinding = this._computeKeybinding();
        this._asKeyCodeChord = this._computeKeyCodeChord();
        // console.log(`code: ${e.code}, keyCode: ${e.keyCode}, key: ${e.key}`);
    }
    preventDefault() {
        if (this.browserEvent && this.browserEvent.preventDefault) {
            this.browserEvent.preventDefault();
        }
    }
    stopPropagation() {
        if (this.browserEvent && this.browserEvent.stopPropagation) {
            this.browserEvent.stopPropagation();
        }
    }
    toKeyCodeChord() {
        return this._asKeyCodeChord;
    }
    equals(other) {
        return this._asKeybinding === other;
    }
    _computeKeybinding() {
        let key = 0 /* KeyCode.Unknown */;
        if (this.keyCode !== 5 /* KeyCode.Ctrl */ && this.keyCode !== 4 /* KeyCode.Shift */ && this.keyCode !== 6 /* KeyCode.Alt */ && this.keyCode !== 57 /* KeyCode.Meta */) {
            key = this.keyCode;
        }
        let result = 0;
        if (this.ctrlKey) {
            result |= ctrlKeyMod;
        }
        if (this.altKey) {
            result |= altKeyMod;
        }
        if (this.shiftKey) {
            result |= shiftKeyMod;
        }
        if (this.metaKey) {
            result |= metaKeyMod;
        }
        result |= key;
        return result;
    }
    _computeKeyCodeChord() {
        let key = 0 /* KeyCode.Unknown */;
        if (this.keyCode !== 5 /* KeyCode.Ctrl */ && this.keyCode !== 4 /* KeyCode.Shift */ && this.keyCode !== 6 /* KeyCode.Alt */ && this.keyCode !== 57 /* KeyCode.Meta */) {
            key = this.keyCode;
        }
        return new _common_keybindings_js__WEBPACK_IMPORTED_MODULE_2__/* .KeyCodeChord */ .$M(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, key);
    }
}


/***/ }),

/***/ 40888:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ap: function() { return /* binding */ renderMarkdown; },
/* harmony export */   et: function() { return /* binding */ renderStringAsPlaintext; }
/* harmony export */ });
/* unused harmony exports allowedMarkdownAttr, renderMarkdownAsPlaintext, fillInIncompleteTokens */
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _dompurify_dompurify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85598);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91645);
/* harmony import */ var _formattedTextRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16721);
/* harmony import */ var _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55022);
/* harmony import */ var _mouseEvent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3076);
/* harmony import */ var _ui_iconLabel_iconLabels_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56175);
/* harmony import */ var _common_errors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50847);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96290);
/* harmony import */ var _common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4950);
/* harmony import */ var _common_iconLabels_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49357);
/* harmony import */ var _common_idGenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18240);
/* harmony import */ var _common_lazy_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(92831);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79027);
/* harmony import */ var _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(30884);
/* harmony import */ var _common_marshalling_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36001);
/* harmony import */ var _common_network_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(11966);
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99269);
/* harmony import */ var _common_resources_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8506);
/* harmony import */ var _common_strings_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(23607);
/* harmony import */ var _common_uri_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56946);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





















const defaultMarkedRenderers = Object.freeze({
    image: (href, title, text) => {
        let dimensions = [];
        let attributes = [];
        if (href) {
            ({ href, dimensions } = (0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .parseHrefAndDimensions */ .v1)(href));
            attributes.push(`src="${(0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .escapeDoubleQuotes */ .d9)(href)}"`);
        }
        if (text) {
            attributes.push(`alt="${(0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .escapeDoubleQuotes */ .d9)(text)}"`);
        }
        if (title) {
            attributes.push(`title="${(0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .escapeDoubleQuotes */ .d9)(title)}"`);
        }
        if (dimensions.length) {
            attributes = attributes.concat(dimensions);
        }
        return '<img ' + attributes.join(' ') + '>';
    },
    paragraph: (text) => {
        return `<p>${text}</p>`;
    },
    link: (href, title, text) => {
        if (typeof href !== 'string') {
            return '';
        }
        // Remove markdown escapes. Workaround for https://github.com/chjj/marked/issues/829
        if (href === text) { // raw link case
            text = (0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .removeMarkdownEscapes */ .oR)(text);
        }
        title = typeof title === 'string' ? (0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .escapeDoubleQuotes */ .d9)((0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .removeMarkdownEscapes */ .oR)(title)) : '';
        href = (0,_common_htmlContent_js__WEBPACK_IMPORTED_MODULE_9__/* .removeMarkdownEscapes */ .oR)(href);
        // HTML Encode href
        href = href.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        return `<a href="${href}" title="${title || href}">${text}</a>`;
    },
});
/**
 * Low-level way create a html element from a markdown string.
 *
 * **Note** that for most cases you should be using [`MarkdownRenderer`](./src/vs/editor/contrib/markdownRenderer/browser/markdownRenderer.ts)
 * which comes with support for pretty code block rendering and which uses the default way of handling links.
 */
function renderMarkdown(markdown, options = {}, markedOptions = {}) {
    var _a, _b;
    const disposables = new _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_12__/* .DisposableStore */ .SL();
    let isDisposed = false;
    const element = (0,_formattedTextRenderer_js__WEBPACK_IMPORTED_MODULE_3__/* .createElement */ .az)(options);
    const _uriMassage = function (part) {
        let data;
        try {
            data = (0,_common_marshalling_js__WEBPACK_IMPORTED_MODULE_14__/* .parse */ .Qc)(decodeURIComponent(part));
        }
        catch (e) {
            // ignore
        }
        if (!data) {
            return part;
        }
        data = (0,_common_objects_js__WEBPACK_IMPORTED_MODULE_16__/* .cloneAndChange */ .rs)(data, value => {
            if (markdown.uris && markdown.uris[value]) {
                return _common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.revive(markdown.uris[value]);
            }
            else {
                return undefined;
            }
        });
        return encodeURIComponent(JSON.stringify(data));
    };
    const _href = function (href, isDomUri) {
        const data = markdown.uris && markdown.uris[href];
        let uri = _common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.revive(data);
        if (isDomUri) {
            if (href.startsWith(_common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.data + ':')) {
                return href;
            }
            if (!uri) {
                uri = _common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.parse(href);
            }
            // this URI will end up as "src"-attribute of a dom node
            // and because of that special rewriting needs to be done
            // so that the URI uses a protocol that's understood by
            // browsers (like http or https)
            return _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .FileAccess */ .Gi.uriToBrowserUri(uri).toString(true);
        }
        if (!uri) {
            return href;
        }
        if (_common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.parse(href).toString() === uri.toString()) {
            return href; // no transformation performed
        }
        if (uri.query) {
            uri = uri.with({ query: _uriMassage(uri.query) });
        }
        return uri.toString();
    };
    const renderer = new _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.Renderer();
    renderer.image = defaultMarkedRenderers.image;
    renderer.link = defaultMarkedRenderers.link;
    renderer.paragraph = defaultMarkedRenderers.paragraph;
    // Will collect [id, renderedElement] tuples
    const codeBlocks = [];
    const syncCodeBlocks = [];
    if (options.codeBlockRendererSync) {
        renderer.code = (code, lang) => {
            const id = _common_idGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* .defaultGenerator */ .a.nextId();
            const value = options.codeBlockRendererSync(postProcessCodeBlockLanguageId(lang), code);
            syncCodeBlocks.push([id, value]);
            return `<div class="code" data-code="${id}">${(0,_common_strings_js__WEBPACK_IMPORTED_MODULE_18__/* .escape */ .YU)(code)}</div>`;
        };
    }
    else if (options.codeBlockRenderer) {
        renderer.code = (code, lang) => {
            const id = _common_idGenerator_js__WEBPACK_IMPORTED_MODULE_11__/* .defaultGenerator */ .a.nextId();
            const value = options.codeBlockRenderer(postProcessCodeBlockLanguageId(lang), code);
            codeBlocks.push(value.then(element => [id, element]));
            return `<div class="code" data-code="${id}">${(0,_common_strings_js__WEBPACK_IMPORTED_MODULE_18__/* .escape */ .YU)(code)}</div>`;
        };
    }
    if (options.actionHandler) {
        const _activateLink = function (event) {
            let target = event.target;
            if (target.tagName !== 'A') {
                target = target.parentElement;
                if (!target || target.tagName !== 'A') {
                    return;
                }
            }
            try {
                let href = target.dataset['href'];
                if (href) {
                    if (markdown.baseUri) {
                        href = resolveWithBaseUri(_common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.from(markdown.baseUri), href);
                    }
                    options.actionHandler.callback(href, event);
                }
            }
            catch (err) {
                (0,_common_errors_js__WEBPACK_IMPORTED_MODULE_7__/* .onUnexpectedError */ .dL)(err);
            }
            finally {
                event.preventDefault();
            }
        };
        const onClick = options.actionHandler.disposables.add(new _event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(element, 'click'));
        const onAuxClick = options.actionHandler.disposables.add(new _event_js__WEBPACK_IMPORTED_MODULE_2__/* .DomEmitter */ .Y(element, 'auxclick'));
        options.actionHandler.disposables.add(_common_event_js__WEBPACK_IMPORTED_MODULE_8__/* .Event */ .ju.any(onClick.event, onAuxClick.event)(e => {
            const mouseEvent = new _mouseEvent_js__WEBPACK_IMPORTED_MODULE_5__/* .StandardMouseEvent */ .n(e);
            if (!mouseEvent.leftButton && !mouseEvent.middleButton) {
                return;
            }
            _activateLink(mouseEvent);
        }));
        options.actionHandler.disposables.add(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(element, 'keydown', (e) => {
            const keyboardEvent = new _keyboardEvent_js__WEBPACK_IMPORTED_MODULE_4__/* .StandardKeyboardEvent */ .y(e);
            if (!keyboardEvent.equals(10 /* KeyCode.Space */) && !keyboardEvent.equals(3 /* KeyCode.Enter */)) {
                return;
            }
            _activateLink(keyboardEvent);
        }));
    }
    if (!markdown.supportHtml) {
        // TODO: Can we deprecated this in favor of 'supportHtml'?
        // Use our own sanitizer so that we can let through only spans.
        // Otherwise, we'd be letting all html be rendered.
        // If we want to allow markdown permitted tags, then we can delete sanitizer and sanitize.
        // We always pass the output through dompurify after this so that we don't rely on
        // marked for sanitization.
        markedOptions.sanitizer = (html) => {
            const match = markdown.isTrusted ? html.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : undefined;
            return match ? html : '';
        };
        markedOptions.sanitize = true;
        markedOptions.silent = true;
    }
    markedOptions.renderer = renderer;
    // values that are too long will freeze the UI
    let value = (_a = markdown.value) !== null && _a !== void 0 ? _a : '';
    if (value.length > 100000) {
        value = `${value.substr(0, 100000)}…`;
    }
    // escape theme icons
    if (markdown.supportThemeIcons) {
        value = (0,_common_iconLabels_js__WEBPACK_IMPORTED_MODULE_10__/* .markdownEscapeEscapedIcons */ .f$)(value);
    }
    let renderedMarkdown;
    if (options.fillInIncompleteTokens) {
        // The defaults are applied by parse but not lexer()/parser(), and they need to be present
        const opts = Object.assign(Object.assign({}, _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.defaults), markedOptions);
        const tokens = _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.lexer(value, opts);
        const newTokens = fillInIncompleteTokens(tokens);
        renderedMarkdown = _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.parser(newTokens, opts);
    }
    else {
        renderedMarkdown = _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.parse(value, markedOptions);
    }
    // Rewrite theme icons
    if (markdown.supportThemeIcons) {
        const elements = (0,_ui_iconLabel_iconLabels_js__WEBPACK_IMPORTED_MODULE_6__/* .renderLabelWithIcons */ .T)(renderedMarkdown);
        renderedMarkdown = elements.map(e => typeof e === 'string' ? e : e.outerHTML).join('');
    }
    const htmlParser = new DOMParser();
    const markdownHtmlDoc = htmlParser.parseFromString(sanitizeRenderedMarkdown(markdown, renderedMarkdown), 'text/html');
    markdownHtmlDoc.body.querySelectorAll('img')
        .forEach(img => {
        const src = img.getAttribute('src'); // Get the raw 'src' attribute value as text, not the resolved 'src'
        if (src) {
            let href = src;
            try {
                if (markdown.baseUri) { // absolute or relative local path, or file: uri
                    href = resolveWithBaseUri(_common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.from(markdown.baseUri), href);
                }
            }
            catch (err) { }
            img.src = _href(href, true);
        }
    });
    markdownHtmlDoc.body.querySelectorAll('a')
        .forEach(a => {
        const href = a.getAttribute('href'); // Get the raw 'href' attribute value as text, not the resolved 'href'
        a.setAttribute('href', ''); // Clear out href. We use the `data-href` for handling clicks instead
        if (!href
            || /^data:|javascript:/i.test(href)
            || (/^command:/i.test(href) && !markdown.isTrusted)
            || /^command:(\/\/\/)?_workbench\.downloadResource/i.test(href)) {
            // drop the link
            a.replaceWith(...a.childNodes);
        }
        else {
            let resolvedHref = _href(href, false);
            if (markdown.baseUri) {
                resolvedHref = resolveWithBaseUri(_common_uri_js__WEBPACK_IMPORTED_MODULE_19__/* .URI */ .o.from(markdown.baseUri), href);
            }
            a.dataset.href = resolvedHref;
        }
    });
    element.innerHTML = sanitizeRenderedMarkdown(markdown, markdownHtmlDoc.body.innerHTML);
    if (codeBlocks.length > 0) {
        Promise.all(codeBlocks).then((tuples) => {
            var _a, _b;
            if (isDisposed) {
                return;
            }
            const renderedElements = new Map(tuples);
            const placeholderElements = element.querySelectorAll(`div[data-code]`);
            for (const placeholderElement of placeholderElements) {
                const renderedElement = renderedElements.get((_a = placeholderElement.dataset['code']) !== null && _a !== void 0 ? _a : '');
                if (renderedElement) {
                    _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .reset */ .mc(placeholderElement, renderedElement);
                }
            }
            (_b = options.asyncRenderCallback) === null || _b === void 0 ? void 0 : _b.call(options);
        });
    }
    else if (syncCodeBlocks.length > 0) {
        const renderedElements = new Map(syncCodeBlocks);
        const placeholderElements = element.querySelectorAll(`div[data-code]`);
        for (const placeholderElement of placeholderElements) {
            const renderedElement = renderedElements.get((_b = placeholderElement.dataset['code']) !== null && _b !== void 0 ? _b : '');
            if (renderedElement) {
                _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .reset */ .mc(placeholderElement, renderedElement);
            }
        }
    }
    // signal size changes for image tags
    if (options.asyncRenderCallback) {
        for (const img of element.getElementsByTagName('img')) {
            const listener = disposables.add(_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addDisposableListener */ .nm(img, 'load', () => {
                listener.dispose();
                options.asyncRenderCallback();
            }));
        }
    }
    return {
        element,
        dispose: () => {
            isDisposed = true;
            disposables.dispose();
        }
    };
}
function postProcessCodeBlockLanguageId(lang) {
    if (!lang) {
        return '';
    }
    const parts = lang.split(/[\s+|:|,|\{|\?]/, 1);
    if (parts.length) {
        return parts[0];
    }
    return lang;
}
function resolveWithBaseUri(baseUri, href) {
    const hasScheme = /^\w[\w\d+.-]*:/.test(href);
    if (hasScheme) {
        return href;
    }
    if (baseUri.path.endsWith('/')) {
        return (0,_common_resources_js__WEBPACK_IMPORTED_MODULE_17__/* .resolvePath */ .i3)(baseUri, href).toString();
    }
    else {
        return (0,_common_resources_js__WEBPACK_IMPORTED_MODULE_17__/* .resolvePath */ .i3)((0,_common_resources_js__WEBPACK_IMPORTED_MODULE_17__/* .dirname */ .XX)(baseUri), href).toString();
    }
}
function sanitizeRenderedMarkdown(options, renderedMarkdown) {
    const { config, allowedSchemes } = getSanitizerOptions(options);
    _dompurify_dompurify_js__WEBPACK_IMPORTED_MODULE_1__/* .addHook */ .v5('uponSanitizeAttribute', (element, e) => {
        if (e.attrName === 'style' || e.attrName === 'class') {
            if (element.tagName === 'SPAN') {
                if (e.attrName === 'style') {
                    e.keepAttr = /^(color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?(background-color\:(#[0-9a-fA-F]+|var\(--vscode(-[a-zA-Z]+)+\));)?$/.test(e.attrValue);
                    return;
                }
                else if (e.attrName === 'class') {
                    e.keepAttr = /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(e.attrValue);
                    return;
                }
            }
            e.keepAttr = false;
            return;
        }
    });
    const hook = _dom_js__WEBPACK_IMPORTED_MODULE_0__/* .hookDomPurifyHrefAndSrcSanitizer */ ._F(allowedSchemes);
    try {
        return _dompurify_dompurify_js__WEBPACK_IMPORTED_MODULE_1__/* .sanitize */ .Nw(renderedMarkdown, Object.assign(Object.assign({}, config), { RETURN_TRUSTED_TYPE: true }));
    }
    finally {
        _dompurify_dompurify_js__WEBPACK_IMPORTED_MODULE_1__/* .removeHook */ .ok('uponSanitizeAttribute');
        hook.dispose();
    }
}
const allowedMarkdownAttr = [
    'align',
    'autoplay',
    'alt',
    'class',
    'controls',
    'data-code',
    'data-href',
    'height',
    'href',
    'loop',
    'muted',
    'playsinline',
    'poster',
    'src',
    'style',
    'target',
    'title',
    'width',
    'start',
];
function getSanitizerOptions(options) {
    const allowedSchemes = [
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.http,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.https,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.mailto,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.data,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.file,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.vscodeFileResource,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.vscodeRemote,
        _common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.vscodeRemoteResource,
    ];
    if (options.isTrusted) {
        allowedSchemes.push(_common_network_js__WEBPACK_IMPORTED_MODULE_15__/* .Schemas */ .lg.command);
    }
    return {
        config: {
            // allowedTags should included everything that markdown renders to.
            // Since we have our own sanitize function for marked, it's possible we missed some tag so let dompurify make sure.
            // HTML tags that can result from markdown are from reading https://spec.commonmark.org/0.29/
            // HTML table tags that can result from markdown are from https://github.github.com/gfm/#tables-extension-
            ALLOWED_TAGS: [..._dom_js__WEBPACK_IMPORTED_MODULE_0__/* .basicMarkupHtmlTags */ .sQ],
            ALLOWED_ATTR: allowedMarkdownAttr,
            ALLOW_UNKNOWN_PROTOCOLS: true,
        },
        allowedSchemes
    };
}
/**
 * Strips all markdown from `string`, if it's an IMarkdownString. For example
 * `# Header` would be output as `Header`. If it's not, the string is returned.
 */
function renderStringAsPlaintext(string) {
    return typeof string === 'string' ? string : renderMarkdownAsPlaintext(string);
}
/**
 * Strips all markdown from `markdown`. For example `# Header` would be output as `Header`.
 */
function renderMarkdownAsPlaintext(markdown) {
    var _a;
    // values that are too long will freeze the UI
    let value = (_a = markdown.value) !== null && _a !== void 0 ? _a : '';
    if (value.length > 100000) {
        value = `${value.substr(0, 100000)}…`;
    }
    const html = _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.parse(value, { renderer: plainTextRenderer.value }).replace(/&(#\d+|[a-zA-Z]+);/g, m => { var _a; return (_a = unescapeInfo.get(m)) !== null && _a !== void 0 ? _a : m; });
    return sanitizeRenderedMarkdown({ isTrusted: false }, html).toString();
}
const unescapeInfo = new Map([
    ['&quot;', '"'],
    ['&nbsp;', ' '],
    ['&amp;', '&'],
    ['&#39;', '\''],
    ['&lt;', '<'],
    ['&gt;', '>'],
]);
const plainTextRenderer = new _common_lazy_js__WEBPACK_IMPORTED_MODULE_20__/* .Lazy */ .o(() => {
    const renderer = new _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.Renderer();
    renderer.code = (code) => {
        return code;
    };
    renderer.blockquote = (quote) => {
        return quote;
    };
    renderer.html = (_html) => {
        return '';
    };
    renderer.heading = (text, _level, _raw) => {
        return text + '\n';
    };
    renderer.hr = () => {
        return '';
    };
    renderer.list = (body, _ordered) => {
        return body;
    };
    renderer.listitem = (text) => {
        return text + '\n';
    };
    renderer.paragraph = (text) => {
        return text + '\n';
    };
    renderer.table = (header, body) => {
        return header + body + '\n';
    };
    renderer.tablerow = (content) => {
        return content;
    };
    renderer.tablecell = (content, _flags) => {
        return content + ' ';
    };
    renderer.strong = (text) => {
        return text;
    };
    renderer.em = (text) => {
        return text;
    };
    renderer.codespan = (code) => {
        return code;
    };
    renderer.br = () => {
        return '\n';
    };
    renderer.del = (text) => {
        return text;
    };
    renderer.image = (_href, _title, _text) => {
        return '';
    };
    renderer.text = (text) => {
        return text;
    };
    renderer.link = (_href, _title, text) => {
        return text;
    };
    return renderer;
});
function mergeRawTokenText(tokens) {
    let mergedTokenText = '';
    tokens.forEach(token => {
        mergedTokenText += token.raw;
    });
    return mergedTokenText;
}
function completeSingleLinePattern(token) {
    for (const subtoken of token.tokens) {
        if (subtoken.type === 'text') {
            const lines = subtoken.raw.split('\n');
            const lastLine = lines[lines.length - 1];
            if (lastLine.includes('`')) {
                return completeCodespan(token);
            }
            else if (lastLine.includes('**')) {
                return completeDoublestar(token);
            }
            else if (lastLine.match(/\*\w/)) {
                return completeStar(token);
            }
            else if (lastLine.match(/(^|\s)__\w/)) {
                return completeDoubleUnderscore(token);
            }
            else if (lastLine.match(/(^|\s)_\w/)) {
                return completeUnderscore(token);
            }
            else if (lastLine.match(/(^|\s)\[.*\]\(\w*/)) {
                return completeLinkTarget(token);
            }
            else if (lastLine.match(/(^|\s)\[\w/)) {
                return completeLinkText(token);
            }
        }
    }
    return undefined;
}
// function completeListItemPattern(token: marked.Tokens.List): marked.Tokens.List | undefined {
// 	// Patch up this one list item
// 	const lastItem = token.items[token.items.length - 1];
// 	const newList = completeSingleLinePattern(lastItem);
// 	if (!newList || newList.type !== 'list') {
// 		// Nothing to fix, or not a pattern we were expecting
// 		return;
// 	}
// 	// Re-parse the whole list with the last item replaced
// 	const completeList = marked.lexer(mergeRawTokenText(token.items.slice(0, token.items.length - 1)) + newList.items[0].raw);
// 	if (completeList.length === 1 && completeList[0].type === 'list') {
// 		return completeList[0];
// 	}
// 	// Not a pattern we were expecting
// 	return undefined;
// }
function fillInIncompleteTokens(tokens) {
    let i;
    let newTokens;
    for (i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === 'paragraph' && token.raw.match(/(\n|^)```/)) {
            // If the code block was complete, it would be in a type='code'
            newTokens = completeCodeBlock(tokens.slice(i));
            break;
        }
        if (token.type === 'paragraph' && token.raw.match(/(\n|^)\|/)) {
            newTokens = completeTable(tokens.slice(i));
            break;
        }
        // if (i === tokens.length - 1 && token.type === 'list') {
        // 	const newListToken = completeListItemPattern(token);
        // 	if (newListToken) {
        // 		newTokens = [newListToken];
        // 		break;
        // 	}
        // }
        if (i === tokens.length - 1 && token.type === 'paragraph') {
            // Only operates on a single token, because any newline that follows this should break these patterns
            const newToken = completeSingleLinePattern(token);
            if (newToken) {
                newTokens = [newToken];
                break;
            }
        }
    }
    if (newTokens) {
        const newTokensList = [
            ...tokens.slice(0, i),
            ...newTokens
        ];
        newTokensList.links = tokens.links;
        return newTokensList;
    }
    return tokens;
}
function completeCodeBlock(tokens) {
    const mergedRawText = mergeRawTokenText(tokens);
    return _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.lexer(mergedRawText + '\n```');
}
function completeCodespan(token) {
    return completeWithString(token, '`');
}
function completeStar(tokens) {
    return completeWithString(tokens, '*');
}
function completeUnderscore(tokens) {
    return completeWithString(tokens, '_');
}
function completeLinkTarget(tokens) {
    return completeWithString(tokens, ')');
}
function completeLinkText(tokens) {
    return completeWithString(tokens, '](about:blank)');
}
function completeDoublestar(tokens) {
    return completeWithString(tokens, '**');
}
function completeDoubleUnderscore(tokens) {
    return completeWithString(tokens, '__');
}
function completeWithString(tokens, closingString) {
    const mergedRawText = mergeRawTokenText(Array.isArray(tokens) ? tokens : [tokens]);
    // If it was completed correctly, this should be a single token.
    // Expecting either a Paragraph or a List
    return _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.lexer(mergedRawText + closingString)[0];
}
function completeTable(tokens) {
    const mergedRawText = mergeRawTokenText(tokens);
    const lines = mergedRawText.split('\n');
    let numCols; // The number of line1 col headers
    let hasSeparatorRow = false;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (typeof numCols === 'undefined' && line.match(/^\s*\|/)) {
            const line1Matches = line.match(/(\|[^\|]+)(?=\||$)/g);
            if (line1Matches) {
                numCols = line1Matches.length;
            }
        }
        else if (typeof numCols === 'number') {
            if (line.match(/^\s*\|/)) {
                if (i !== lines.length - 1) {
                    // We got the line1 header row, and the line2 separator row, but there are more lines, and it wasn't parsed as a table!
                    // That's strange and means that the table is probably malformed in the source, so I won't try to patch it up.
                    return undefined;
                }
                // Got a line2 separator row- partial or complete, doesn't matter, we'll replace it with a correct one
                hasSeparatorRow = true;
            }
            else {
                // The line after the header row isn't a valid separator row, so the table is malformed, don't fix it up
                return undefined;
            }
        }
    }
    if (typeof numCols === 'number' && numCols > 0) {
        const prefixText = hasSeparatorRow ? lines.slice(0, -1).join('\n') : mergedRawText;
        const line1EndsInPipe = !!prefixText.match(/\|\s*$/);
        const newRawText = prefixText + (line1EndsInPipe ? '' : '|') + `\n|${' --- |'.repeat(numCols)}`;
        return _common_marked_marked_js__WEBPACK_IMPORTED_MODULE_13__/* .marked */ .TU.lexer(newRawText);
    }
    return undefined;
}


/***/ }),

/***/ 3076:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: function() { return /* binding */ StandardMouseEvent; },
  q: function() { return /* binding */ StandardWheelEvent; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js
var browser = __webpack_require__(47975);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/iframe.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let hasDifferentOriginAncestorFlag = false;
let sameOriginWindowChainCache = null;
function getParentWindowIfSameOrigin(w) {
    if (!w.parent || w.parent === w) {
        return null;
    }
    // Cannot really tell if we have access to the parent window unless we try to access something in it
    try {
        const location = w.location;
        const parentLocation = w.parent.location;
        if (location.origin !== 'null' && parentLocation.origin !== 'null' && location.origin !== parentLocation.origin) {
            hasDifferentOriginAncestorFlag = true;
            return null;
        }
    }
    catch (e) {
        hasDifferentOriginAncestorFlag = true;
        return null;
    }
    return w.parent;
}
class IframeUtils {
    /**
     * Returns a chain of embedded windows with the same origin (which can be accessed programmatically).
     * Having a chain of length 1 might mean that the current execution environment is running outside of an iframe or inside an iframe embedded in a window with a different origin.
     * To distinguish if at one point the current execution environment is running inside a window with a different origin, see hasDifferentOriginAncestor()
     */
    static getSameOriginWindowChain() {
        if (!sameOriginWindowChainCache) {
            sameOriginWindowChainCache = [];
            let w = window;
            let parent;
            do {
                parent = getParentWindowIfSameOrigin(w);
                if (parent) {
                    sameOriginWindowChainCache.push({
                        window: w,
                        iframeElement: w.frameElement || null
                    });
                }
                else {
                    sameOriginWindowChainCache.push({
                        window: w,
                        iframeElement: null
                    });
                }
                w = parent;
            } while (w);
        }
        return sameOriginWindowChainCache.slice(0);
    }
    /**
     * Returns the position of `childWindow` relative to `ancestorWindow`
     */
    static getPositionOfChildWindowRelativeToAncestorWindow(childWindow, ancestorWindow) {
        if (!ancestorWindow || childWindow === ancestorWindow) {
            return {
                top: 0,
                left: 0
            };
        }
        let top = 0, left = 0;
        const windowChain = this.getSameOriginWindowChain();
        for (const windowChainEl of windowChain) {
            top += windowChainEl.window.scrollY;
            left += windowChainEl.window.scrollX;
            if (windowChainEl.window === ancestorWindow) {
                break;
            }
            if (!windowChainEl.iframeElement) {
                break;
            }
            const boundingRect = windowChainEl.iframeElement.getBoundingClientRect();
            top += boundingRect.top;
            left += boundingRect.left;
        }
        return {
            top: top,
            left: left
        };
    }
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(94057);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/mouseEvent.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class StandardMouseEvent {
    constructor(e) {
        this.timestamp = Date.now();
        this.browserEvent = e;
        this.leftButton = e.button === 0;
        this.middleButton = e.button === 1;
        this.rightButton = e.button === 2;
        this.buttons = e.buttons;
        this.target = e.target;
        this.detail = e.detail || 1;
        if (e.type === 'dblclick') {
            this.detail = 2;
        }
        this.ctrlKey = e.ctrlKey;
        this.shiftKey = e.shiftKey;
        this.altKey = e.altKey;
        this.metaKey = e.metaKey;
        if (typeof e.pageX === 'number') {
            this.posx = e.pageX;
            this.posy = e.pageY;
        }
        else {
            // Probably hit by MSGestureEvent
            this.posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            this.posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        // Find the position of the iframe this code is executing in relative to the iframe where the event was captured.
        const iframeOffsets = IframeUtils.getPositionOfChildWindowRelativeToAncestorWindow(window, e.view);
        this.posx -= iframeOffsets.left;
        this.posy -= iframeOffsets.top;
    }
    preventDefault() {
        this.browserEvent.preventDefault();
    }
    stopPropagation() {
        this.browserEvent.stopPropagation();
    }
}
class StandardWheelEvent {
    constructor(e, deltaX = 0, deltaY = 0) {
        this.browserEvent = e || null;
        this.target = e ? (e.target || e.targetNode || e.srcElement) : null;
        this.deltaY = deltaY;
        this.deltaX = deltaX;
        if (e) {
            // Old (deprecated) wheel events
            const e1 = e;
            const e2 = e;
            // vertical delta scroll
            if (typeof e1.wheelDeltaY !== 'undefined') {
                this.deltaY = e1.wheelDeltaY / 120;
            }
            else if (typeof e2.VERTICAL_AXIS !== 'undefined' && e2.axis === e2.VERTICAL_AXIS) {
                this.deltaY = -e2.detail / 3;
            }
            else if (e.type === 'wheel') {
                // Modern wheel event
                // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
                const ev = e;
                if (ev.deltaMode === ev.DOM_DELTA_LINE) {
                    // the deltas are expressed in lines
                    if (browser.isFirefox && !platform/* isMacintosh */.dz) {
                        this.deltaY = -e.deltaY / 3;
                    }
                    else {
                        this.deltaY = -e.deltaY;
                    }
                }
                else {
                    this.deltaY = -e.deltaY / 40;
                }
            }
            // horizontal delta scroll
            if (typeof e1.wheelDeltaX !== 'undefined') {
                if (browser.isSafari && platform/* isWindows */.ED) {
                    this.deltaX = -(e1.wheelDeltaX / 120);
                }
                else {
                    this.deltaX = e1.wheelDeltaX / 120;
                }
            }
            else if (typeof e2.HORIZONTAL_AXIS !== 'undefined' && e2.axis === e2.HORIZONTAL_AXIS) {
                this.deltaX = -e.detail / 3;
            }
            else if (e.type === 'wheel') {
                // Modern wheel event
                // https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent
                const ev = e;
                if (ev.deltaMode === ev.DOM_DELTA_LINE) {
                    // the deltas are expressed in lines
                    if (browser.isFirefox && !platform/* isMacintosh */.dz) {
                        this.deltaX = -e.deltaX / 3;
                    }
                    else {
                        this.deltaX = -e.deltaX;
                    }
                }
                else {
                    this.deltaX = -e.deltaX / 40;
                }
            }
            // Assume a vertical scroll if nothing else worked
            if (this.deltaY === 0 && this.deltaX === 0 && e.wheelDelta) {
                this.deltaY = e.wheelDelta / 120;
            }
        }
    }
    preventDefault() {
        var _a;
        (_a = this.browserEvent) === null || _a === void 0 ? void 0 : _a.preventDefault();
    }
    stopPropagation() {
        var _a;
        (_a = this.browserEvent) === null || _a === void 0 ? void 0 : _a.stopPropagation();
    }
}


/***/ }),

/***/ 56097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ inputLatency; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var inputLatency;
(function (inputLatency) {
    const totalKeydownTime = { total: 0, min: Number.MAX_VALUE, max: 0 };
    const totalInputTime = Object.assign({}, totalKeydownTime);
    const totalRenderTime = Object.assign({}, totalKeydownTime);
    const totalInputLatencyTime = Object.assign({}, totalKeydownTime);
    let measurementsCount = 0;
    const state = {
        keydown: 0 /* EventPhase.Before */,
        input: 0 /* EventPhase.Before */,
        render: 0 /* EventPhase.Before */,
    };
    /**
     * Record the start of the keydown event.
     */
    function onKeyDown() {
        /** Direct Check C. See explanation in {@link recordIfFinished} */
        recordIfFinished();
        performance.mark('inputlatency/start');
        performance.mark('keydown/start');
        state.keydown = 1 /* EventPhase.InProgress */;
        queueMicrotask(markKeyDownEnd);
    }
    inputLatency.onKeyDown = onKeyDown;
    /**
     * Mark the end of the keydown event.
     */
    function markKeyDownEnd() {
        if (state.keydown === 1 /* EventPhase.InProgress */) {
            performance.mark('keydown/end');
            state.keydown = 2 /* EventPhase.Finished */;
        }
    }
    /**
     * Record the start of the beforeinput event.
     */
    function onBeforeInput() {
        performance.mark('input/start');
        state.input = 1 /* EventPhase.InProgress */;
        /** Schedule Task A. See explanation in {@link recordIfFinished} */
        scheduleRecordIfFinishedTask();
    }
    inputLatency.onBeforeInput = onBeforeInput;
    /**
     * Record the start of the input event.
     */
    function onInput() {
        if (state.input === 0 /* EventPhase.Before */) {
            // it looks like we didn't receive a `beforeinput`
            onBeforeInput();
        }
        queueMicrotask(markInputEnd);
    }
    inputLatency.onInput = onInput;
    function markInputEnd() {
        if (state.input === 1 /* EventPhase.InProgress */) {
            performance.mark('input/end');
            state.input = 2 /* EventPhase.Finished */;
        }
    }
    /**
     * Record the start of the keyup event.
     */
    function onKeyUp() {
        /** Direct Check D. See explanation in {@link recordIfFinished} */
        recordIfFinished();
    }
    inputLatency.onKeyUp = onKeyUp;
    /**
     * Record the start of the selectionchange event.
     */
    function onSelectionChange() {
        /** Direct Check E. See explanation in {@link recordIfFinished} */
        recordIfFinished();
    }
    inputLatency.onSelectionChange = onSelectionChange;
    /**
     * Record the start of the animation frame performing the rendering.
     */
    function onRenderStart() {
        // Render may be triggered during input, but we only measure the following animation frame
        if (state.keydown === 2 /* EventPhase.Finished */ && state.input === 2 /* EventPhase.Finished */ && state.render === 0 /* EventPhase.Before */) {
            // Only measure the first render after keyboard input
            performance.mark('render/start');
            state.render = 1 /* EventPhase.InProgress */;
            queueMicrotask(markRenderEnd);
            /** Schedule Task B. See explanation in {@link recordIfFinished} */
            scheduleRecordIfFinishedTask();
        }
    }
    inputLatency.onRenderStart = onRenderStart;
    /**
     * Mark the end of the animation frame performing the rendering.
     */
    function markRenderEnd() {
        if (state.render === 1 /* EventPhase.InProgress */) {
            performance.mark('render/end');
            state.render = 2 /* EventPhase.Finished */;
        }
    }
    function scheduleRecordIfFinishedTask() {
        // Here we can safely assume that the `setTimeout` will not be
        // artificially delayed by 4ms because we schedule it from
        // event handlers
        setTimeout(recordIfFinished);
    }
    /**
     * Record the input latency sample if input handling and rendering are finished.
     *
     * The challenge here is that we want to record the latency in such a way that it includes
     * also the layout and painting work the browser does during the animation frame task.
     *
     * Simply scheduling a new task (via `setTimeout`) from the animation frame task would
     * schedule the new task at the end of the task queue (after other code that uses `setTimeout`),
     * so we need to use multiple strategies to make sure our task runs before others:
     *
     * We schedule tasks (A and B):
     *    - we schedule a task A (via a `setTimeout` call) when the input starts in `markInputStart`.
     *      If the animation frame task is scheduled quickly by the browser, then task A has a very good
     *      chance of being the very first task after the animation frame and thus will record the input latency.
     *    - however, if the animation frame task is scheduled a bit later, then task A might execute
     *      before the animation frame task. We therefore schedule another task B from `markRenderStart`.
     *
     * We do direct checks in browser event handlers (C, D, E):
     *    - if the browser has multiple keydown events queued up, they will be scheduled before the `setTimeout` tasks,
     *      so we do a direct check in the keydown event handler (C).
     *    - depending on timing, sometimes the animation frame is scheduled even before the `keyup` event, so we
     *      do a direct check there too (E).
     *    - the browser oftentimes emits a `selectionchange` event after an `input`, so we do a direct check there (D).
     */
    function recordIfFinished() {
        if (state.keydown === 2 /* EventPhase.Finished */ && state.input === 2 /* EventPhase.Finished */ && state.render === 2 /* EventPhase.Finished */) {
            performance.mark('inputlatency/end');
            performance.measure('keydown', 'keydown/start', 'keydown/end');
            performance.measure('input', 'input/start', 'input/end');
            performance.measure('render', 'render/start', 'render/end');
            performance.measure('inputlatency', 'inputlatency/start', 'inputlatency/end');
            addMeasure('keydown', totalKeydownTime);
            addMeasure('input', totalInputTime);
            addMeasure('render', totalRenderTime);
            addMeasure('inputlatency', totalInputLatencyTime);
            // console.info(
            // 	`input latency=${performance.getEntriesByName('inputlatency')[0].duration.toFixed(1)} [` +
            // 	`keydown=${performance.getEntriesByName('keydown')[0].duration.toFixed(1)}, ` +
            // 	`input=${performance.getEntriesByName('input')[0].duration.toFixed(1)}, ` +
            // 	`render=${performance.getEntriesByName('render')[0].duration.toFixed(1)}` +
            // 	`]`
            // );
            measurementsCount++;
            reset();
        }
    }
    function addMeasure(entryName, cumulativeMeasurement) {
        const duration = performance.getEntriesByName(entryName)[0].duration;
        cumulativeMeasurement.total += duration;
        cumulativeMeasurement.min = Math.min(cumulativeMeasurement.min, duration);
        cumulativeMeasurement.max = Math.max(cumulativeMeasurement.max, duration);
    }
    /**
     * Clear the current sample.
     */
    function reset() {
        performance.clearMarks('keydown/start');
        performance.clearMarks('keydown/end');
        performance.clearMarks('input/start');
        performance.clearMarks('input/end');
        performance.clearMarks('render/start');
        performance.clearMarks('render/end');
        performance.clearMarks('inputlatency/start');
        performance.clearMarks('inputlatency/end');
        performance.clearMeasures('keydown');
        performance.clearMeasures('input');
        performance.clearMeasures('render');
        performance.clearMeasures('inputlatency');
        state.keydown = 0 /* EventPhase.Before */;
        state.input = 0 /* EventPhase.Before */;
        state.render = 0 /* EventPhase.Before */;
    }
    /**
     * Gets all input latency samples and clears the internal buffers to start recording a new set
     * of samples.
     */
    function getAndClearMeasurements() {
        if (measurementsCount === 0) {
            return undefined;
        }
        // Assemble the result
        const result = {
            keydown: cumulativeToFinalMeasurement(totalKeydownTime),
            input: cumulativeToFinalMeasurement(totalInputTime),
            render: cumulativeToFinalMeasurement(totalRenderTime),
            total: cumulativeToFinalMeasurement(totalInputLatencyTime),
            sampleCount: measurementsCount
        };
        // Clear the cumulative measurements
        clearCumulativeMeasurement(totalKeydownTime);
        clearCumulativeMeasurement(totalInputTime);
        clearCumulativeMeasurement(totalRenderTime);
        clearCumulativeMeasurement(totalInputLatencyTime);
        measurementsCount = 0;
        return result;
    }
    inputLatency.getAndClearMeasurements = getAndClearMeasurements;
    function cumulativeToFinalMeasurement(cumulative) {
        return {
            average: cumulative.total / measurementsCount,
            max: cumulative.max,
            min: cumulative.min,
        };
    }
    function clearCumulativeMeasurement(cumulative) {
        cumulative.total = 0;
        cumulative.min = Number.MAX_VALUE;
        cumulative.max = 0;
    }
})(inputLatency || (inputLatency = {}));


/***/ })

}]);