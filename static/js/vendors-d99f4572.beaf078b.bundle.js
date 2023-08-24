"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-d99f4572"],{

/***/ 93887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ applyFontInfo; }
/* harmony export */ });
/* harmony import */ var _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27661);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function applyFontInfo(domNode, fontInfo) {
    if (domNode instanceof _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_0__/* .FastDomNode */ .Z) {
        domNode.setFontFamily(fontInfo.getMassagedFontFamily());
        domNode.setFontWeight(fontInfo.fontWeight);
        domNode.setFontSize(fontInfo.fontSize);
        domNode.setFontFeatureSettings(fontInfo.fontFeatureSettings);
        domNode.setFontVariationSettings(fontInfo.fontVariationSettings);
        domNode.setLineHeight(fontInfo.lineHeight);
        domNode.setLetterSpacing(fontInfo.letterSpacing);
    }
    else {
        domNode.style.fontFamily = fontInfo.getMassagedFontFamily();
        domNode.style.fontWeight = fontInfo.fontWeight;
        domNode.style.fontSize = fontInfo.fontSize + 'px';
        domNode.style.fontFeatureSettings = fontInfo.fontFeatureSettings;
        domNode.style.fontVariationSettings = fontInfo.fontVariationSettings;
        domNode.style.lineHeight = fontInfo.lineHeight + 'px';
        domNode.style.letterSpacing = fontInfo.letterSpacing + 'px';
    }
}


/***/ }),

/***/ 26045:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: function() { return /* binding */ EditorConfiguration; }
});

// UNUSED EXPORTS: ComputedEditorOptions

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js
var browser = __webpack_require__(18463);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/arrays.js
var arrays = __webpack_require__(25850);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/objects.js
var objects = __webpack_require__(19525);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/platform.js
var platform = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/elementSizeObserver.js
var elementSizeObserver = __webpack_require__(47673);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/fontMeasurements.js + 1 modules
var fontMeasurements = __webpack_require__(87863);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/migrateOptions.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class EditorSettingMigration {
    constructor(key, migrate) {
        this.key = key;
        this.migrate = migrate;
    }
    apply(options) {
        const value = EditorSettingMigration._read(options, this.key);
        const read = (key) => EditorSettingMigration._read(options, key);
        const write = (key, value) => EditorSettingMigration._write(options, key, value);
        this.migrate(value, read, write);
    }
    static _read(source, key) {
        if (typeof source === 'undefined') {
            return undefined;
        }
        const firstDotIndex = key.indexOf('.');
        if (firstDotIndex >= 0) {
            const firstSegment = key.substring(0, firstDotIndex);
            return this._read(source[firstSegment], key.substring(firstDotIndex + 1));
        }
        return source[key];
    }
    static _write(target, key, value) {
        const firstDotIndex = key.indexOf('.');
        if (firstDotIndex >= 0) {
            const firstSegment = key.substring(0, firstDotIndex);
            target[firstSegment] = target[firstSegment] || {};
            this._write(target[firstSegment], key.substring(firstDotIndex + 1), value);
            return;
        }
        target[key] = value;
    }
}
EditorSettingMigration.items = [];
function registerEditorSettingMigration(key, migrate) {
    EditorSettingMigration.items.push(new EditorSettingMigration(key, migrate));
}
function registerSimpleEditorSettingMigration(key, values) {
    registerEditorSettingMigration(key, (value, read, write) => {
        if (typeof value !== 'undefined') {
            for (const [oldValue, newValue] of values) {
                if (value === oldValue) {
                    write(key, newValue);
                    return;
                }
            }
        }
    });
}
/**
 * Compatibility with old options
 */
function migrateOptions(options) {
    EditorSettingMigration.items.forEach(migration => migration.apply(options));
}
registerSimpleEditorSettingMigration('wordWrap', [[true, 'on'], [false, 'off']]);
registerSimpleEditorSettingMigration('lineNumbers', [[true, 'on'], [false, 'off']]);
registerSimpleEditorSettingMigration('cursorBlinking', [['visible', 'solid']]);
registerSimpleEditorSettingMigration('renderWhitespace', [[true, 'boundary'], [false, 'none']]);
registerSimpleEditorSettingMigration('renderLineHighlight', [[true, 'line'], [false, 'none']]);
registerSimpleEditorSettingMigration('acceptSuggestionOnEnter', [[true, 'on'], [false, 'off']]);
registerSimpleEditorSettingMigration('tabCompletion', [[false, 'off'], [true, 'onlySnippets']]);
registerSimpleEditorSettingMigration('hover', [[true, { enabled: true }], [false, { enabled: false }]]);
registerSimpleEditorSettingMigration('parameterHints', [[true, { enabled: true }], [false, { enabled: false }]]);
registerSimpleEditorSettingMigration('autoIndent', [[false, 'advanced'], [true, 'full']]);
registerSimpleEditorSettingMigration('matchBrackets', [[true, 'always'], [false, 'never']]);
registerSimpleEditorSettingMigration('renderFinalNewline', [[true, 'on'], [false, 'off']]);
registerSimpleEditorSettingMigration('cursorSmoothCaretAnimation', [[true, 'on'], [false, 'off']]);
registerEditorSettingMigration('autoClosingBrackets', (value, read, write) => {
    if (value === false) {
        write('autoClosingBrackets', 'never');
        if (typeof read('autoClosingQuotes') === 'undefined') {
            write('autoClosingQuotes', 'never');
        }
        if (typeof read('autoSurround') === 'undefined') {
            write('autoSurround', 'never');
        }
    }
});
registerEditorSettingMigration('renderIndentGuides', (value, read, write) => {
    if (typeof value !== 'undefined') {
        write('renderIndentGuides', undefined);
        if (typeof read('guides.indentation') === 'undefined') {
            write('guides.indentation', !!value);
        }
    }
});
registerEditorSettingMigration('highlightActiveIndentGuide', (value, read, write) => {
    if (typeof value !== 'undefined') {
        write('highlightActiveIndentGuide', undefined);
        if (typeof read('guides.highlightActiveIndentation') === 'undefined') {
            write('guides.highlightActiveIndentation', !!value);
        }
    }
});
const suggestFilteredTypesMapping = {
    method: 'showMethods',
    function: 'showFunctions',
    constructor: 'showConstructors',
    deprecated: 'showDeprecated',
    field: 'showFields',
    variable: 'showVariables',
    class: 'showClasses',
    struct: 'showStructs',
    interface: 'showInterfaces',
    module: 'showModules',
    property: 'showProperties',
    event: 'showEvents',
    operator: 'showOperators',
    unit: 'showUnits',
    value: 'showValues',
    constant: 'showConstants',
    enum: 'showEnums',
    enumMember: 'showEnumMembers',
    keyword: 'showKeywords',
    text: 'showWords',
    color: 'showColors',
    file: 'showFiles',
    reference: 'showReferences',
    folder: 'showFolders',
    typeParameter: 'showTypeParameters',
    snippet: 'showSnippets',
};
registerEditorSettingMigration('suggest.filteredTypes', (value, read, write) => {
    if (value && typeof value === 'object') {
        for (const entry of Object.entries(suggestFilteredTypesMapping)) {
            const v = value[entry[0]];
            if (v === false) {
                if (typeof read(`suggest.${entry[1]}`) === 'undefined') {
                    write(`suggest.${entry[1]}`, false);
                }
            }
        }
        write('suggest.filteredTypes', undefined);
    }
});
registerEditorSettingMigration('quickSuggestions', (input, read, write) => {
    if (typeof input === 'boolean') {
        const value = input ? 'on' : 'off';
        const newValue = { comments: value, strings: value, other: value };
        write('quickSuggestions', newValue);
    }
});
// Sticky Scroll
registerEditorSettingMigration('experimental.stickyScroll.enabled', (value, read, write) => {
    if (typeof value === 'boolean') {
        write('experimental.stickyScroll.enabled', undefined);
        if (typeof read('stickyScroll.enabled') === 'undefined') {
            write('stickyScroll.enabled', value);
        }
    }
});
registerEditorSettingMigration('experimental.stickyScroll.maxLineCount', (value, read, write) => {
    if (typeof value === 'number') {
        write('experimental.stickyScroll.maxLineCount', undefined);
        if (typeof read('stickyScroll.maxLineCount') === 'undefined') {
            write('stickyScroll.maxLineCount', value);
        }
    }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/tabFocus.js
var tabFocus = __webpack_require__(77240);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorZoom.js
var editorZoom = __webpack_require__(61170);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo.js
var config_fontInfo = __webpack_require__(27553);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/platform/accessibility/common/accessibility.js
var accessibility = __webpack_require__(25919);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/editorConfiguration.js
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














let EditorConfiguration = class EditorConfiguration extends lifecycle/* Disposable */.JT {
    constructor(isSimpleWidget, options, container, _accessibilityService) {
        super();
        this._accessibilityService = _accessibilityService;
        this._onDidChange = this._register(new common_event/* Emitter */.Q5());
        this.onDidChange = this._onDidChange.event;
        this._onDidChangeFast = this._register(new common_event/* Emitter */.Q5());
        this.onDidChangeFast = this._onDidChangeFast.event;
        this._isDominatedByLongLines = false;
        this._viewLineCount = 1;
        this._lineNumbersDigitCount = 1;
        this._reservedHeight = 0;
        this._glyphMarginDecorationLaneCount = 1;
        this._computeOptionsMemory = new editorOptions/* ComputeOptionsMemory */.LJ();
        this.isSimpleWidget = isSimpleWidget;
        this._containerObserver = this._register(new elementSizeObserver/* ElementSizeObserver */.I(container, options.dimension));
        this._rawOptions = deepCloneAndMigrateOptions(options);
        this._validatedOptions = EditorOptionsUtil.validateOptions(this._rawOptions);
        this.options = this._computeOptions();
        if (this.options.get(12 /* EditorOption.automaticLayout */)) {
            this._containerObserver.startObserving();
        }
        this._register(editorZoom/* EditorZoom */.C.onDidChangeZoomLevel(() => this._recomputeOptions()));
        this._register(tabFocus/* TabFocus */.n.onDidChangeTabFocus(() => this._recomputeOptions()));
        this._register(this._containerObserver.onDidChange(() => this._recomputeOptions()));
        this._register(fontMeasurements/* FontMeasurements */.g.onDidChange(() => this._recomputeOptions()));
        this._register(browser/* PixelRatio */.Tz.onDidChange(() => this._recomputeOptions()));
        this._register(this._accessibilityService.onDidChangeScreenReaderOptimized(() => this._recomputeOptions()));
    }
    _recomputeOptions() {
        const newOptions = this._computeOptions();
        const changeEvent = EditorOptionsUtil.checkEquals(this.options, newOptions);
        if (changeEvent === null) {
            // nothing changed!
            return;
        }
        this.options = newOptions;
        this._onDidChangeFast.fire(changeEvent);
        this._onDidChange.fire(changeEvent);
    }
    _computeOptions() {
        const partialEnv = this._readEnvConfiguration();
        const bareFontInfo = config_fontInfo/* BareFontInfo */.E4.createFromValidatedSettings(this._validatedOptions, partialEnv.pixelRatio, this.isSimpleWidget);
        const fontInfo = this._readFontInfo(bareFontInfo);
        const env = {
            memory: this._computeOptionsMemory,
            outerWidth: partialEnv.outerWidth,
            outerHeight: partialEnv.outerHeight - this._reservedHeight,
            fontInfo: fontInfo,
            extraEditorClassName: partialEnv.extraEditorClassName,
            isDominatedByLongLines: this._isDominatedByLongLines,
            viewLineCount: this._viewLineCount,
            lineNumbersDigitCount: this._lineNumbersDigitCount,
            emptySelectionClipboard: partialEnv.emptySelectionClipboard,
            pixelRatio: partialEnv.pixelRatio,
            tabFocusMode: tabFocus/* TabFocus */.n.getTabFocusMode("editorFocus" /* TabFocusContext.Editor */),
            accessibilitySupport: partialEnv.accessibilitySupport,
            glyphMarginDecorationLaneCount: this._glyphMarginDecorationLaneCount
        };
        return EditorOptionsUtil.computeOptions(this._validatedOptions, env);
    }
    _readEnvConfiguration() {
        return {
            extraEditorClassName: getExtraEditorClassName(),
            outerWidth: this._containerObserver.getWidth(),
            outerHeight: this._containerObserver.getHeight(),
            emptySelectionClipboard: browser/* isWebKit */.Pf || browser/* isFirefox */.vU,
            pixelRatio: browser/* PixelRatio */.Tz.value,
            accessibilitySupport: (this._accessibilityService.isScreenReaderOptimized()
                ? 2 /* AccessibilitySupport.Enabled */
                : this._accessibilityService.getAccessibilitySupport())
        };
    }
    _readFontInfo(bareFontInfo) {
        return fontMeasurements/* FontMeasurements */.g.readFontInfo(bareFontInfo);
    }
    getRawOptions() {
        return this._rawOptions;
    }
    updateOptions(_newOptions) {
        const newOptions = deepCloneAndMigrateOptions(_newOptions);
        const didChange = EditorOptionsUtil.applyUpdate(this._rawOptions, newOptions);
        if (!didChange) {
            return;
        }
        this._validatedOptions = EditorOptionsUtil.validateOptions(this._rawOptions);
        this._recomputeOptions();
    }
    observeContainer(dimension) {
        this._containerObserver.observe(dimension);
    }
    setIsDominatedByLongLines(isDominatedByLongLines) {
        if (this._isDominatedByLongLines === isDominatedByLongLines) {
            return;
        }
        this._isDominatedByLongLines = isDominatedByLongLines;
        this._recomputeOptions();
    }
    setModelLineCount(modelLineCount) {
        const lineNumbersDigitCount = digitCount(modelLineCount);
        if (this._lineNumbersDigitCount === lineNumbersDigitCount) {
            return;
        }
        this._lineNumbersDigitCount = lineNumbersDigitCount;
        this._recomputeOptions();
    }
    setViewLineCount(viewLineCount) {
        if (this._viewLineCount === viewLineCount) {
            return;
        }
        this._viewLineCount = viewLineCount;
        this._recomputeOptions();
    }
    setReservedHeight(reservedHeight) {
        if (this._reservedHeight === reservedHeight) {
            return;
        }
        this._reservedHeight = reservedHeight;
        this._recomputeOptions();
    }
    setGlyphMarginDecorationLaneCount(decorationLaneCount) {
        if (this._glyphMarginDecorationLaneCount === decorationLaneCount) {
            return;
        }
        this._glyphMarginDecorationLaneCount = decorationLaneCount;
        this._recomputeOptions();
    }
};
EditorConfiguration = __decorate([
    __param(3, accessibility/* IAccessibilityService */.F)
], EditorConfiguration);

function digitCount(n) {
    let r = 0;
    while (n) {
        n = Math.floor(n / 10);
        r++;
    }
    return r ? r : 1;
}
function getExtraEditorClassName() {
    let extra = '';
    if (!browser/* isSafari */.G6 && !browser/* isWebkitWebView */.MG) {
        // Use user-select: none in all browsers except Safari and native macOS WebView
        extra += 'no-user-select ';
    }
    if (browser/* isSafari */.G6) {
        // See https://github.com/microsoft/vscode/issues/108822
        extra += 'no-minimap-shadow ';
        extra += 'enable-user-select ';
    }
    if (platform/* isMacintosh */.dz) {
        extra += 'mac ';
    }
    return extra;
}
class ValidatedEditorOptions {
    constructor() {
        this._values = [];
    }
    _read(option) {
        return this._values[option];
    }
    get(id) {
        return this._values[id];
    }
    _write(option, value) {
        this._values[option] = value;
    }
}
class ComputedEditorOptions {
    constructor() {
        this._values = [];
    }
    _read(id) {
        if (id >= this._values.length) {
            throw new Error('Cannot read uninitialized value');
        }
        return this._values[id];
    }
    get(id) {
        return this._read(id);
    }
    _write(id, value) {
        this._values[id] = value;
    }
}
class EditorOptionsUtil {
    static validateOptions(options) {
        const result = new ValidatedEditorOptions();
        for (const editorOption of editorOptions/* editorOptionsRegistry */.Bc) {
            const value = (editorOption.name === '_never_' ? undefined : options[editorOption.name]);
            result._write(editorOption.id, editorOption.validate(value));
        }
        return result;
    }
    static computeOptions(options, env) {
        const result = new ComputedEditorOptions();
        for (const editorOption of editorOptions/* editorOptionsRegistry */.Bc) {
            result._write(editorOption.id, editorOption.compute(env, result, options._read(editorOption.id)));
        }
        return result;
    }
    static _deepEquals(a, b) {
        if (typeof a !== 'object' || typeof b !== 'object' || !a || !b) {
            return a === b;
        }
        if (Array.isArray(a) || Array.isArray(b)) {
            return (Array.isArray(a) && Array.isArray(b) ? arrays/* equals */.fS(a, b) : false);
        }
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (const key in a) {
            if (!EditorOptionsUtil._deepEquals(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    static checkEquals(a, b) {
        const result = [];
        let somethingChanged = false;
        for (const editorOption of editorOptions/* editorOptionsRegistry */.Bc) {
            const changed = !EditorOptionsUtil._deepEquals(a._read(editorOption.id), b._read(editorOption.id));
            result[editorOption.id] = changed;
            if (changed) {
                somethingChanged = true;
            }
        }
        return (somethingChanged ? new editorOptions/* ConfigurationChangedEvent */.Bb(result) : null);
    }
    /**
     * Returns true if something changed.
     * Modifies `options`.
    */
    static applyUpdate(options, update) {
        let changed = false;
        for (const editorOption of editorOptions/* editorOptionsRegistry */.Bc) {
            if (update.hasOwnProperty(editorOption.name)) {
                const result = editorOption.applyUpdate(options[editorOption.name], update[editorOption.name]);
                options[editorOption.name] = result.newValue;
                changed = changed || result.didChange;
            }
        }
        return changed;
    }
}
function deepCloneAndMigrateOptions(_options) {
    const options = objects/* deepClone */.I8(_options);
    migrateOptions(options);
    return options;
}


/***/ }),

/***/ 47673:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ ElementSizeObserver; }
/* harmony export */ });
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26794);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64720);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class ElementSizeObserver extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_0__/* .Disposable */ .JT {
    constructor(referenceDomElement, dimension) {
        super();
        this._onDidChange = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5());
        this.onDidChange = this._onDidChange.event;
        this._referenceDomElement = referenceDomElement;
        this._width = -1;
        this._height = -1;
        this._resizeObserver = null;
        this.measureReferenceDomElement(false, dimension);
    }
    dispose() {
        this.stopObserving();
        super.dispose();
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    startObserving() {
        if (!this._resizeObserver && this._referenceDomElement) {
            this._resizeObserver = new ResizeObserver((entries) => {
                if (entries && entries[0] && entries[0].contentRect) {
                    this.observe({ width: entries[0].contentRect.width, height: entries[0].contentRect.height });
                }
                else {
                    this.observe();
                }
            });
            this._resizeObserver.observe(this._referenceDomElement);
        }
    }
    stopObserving() {
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = null;
        }
    }
    observe(dimension) {
        this.measureReferenceDomElement(true, dimension);
    }
    measureReferenceDomElement(emitEvent, dimension) {
        let observedWidth = 0;
        let observedHeight = 0;
        if (dimension) {
            observedWidth = dimension.width;
            observedHeight = dimension.height;
        }
        else if (this._referenceDomElement) {
            observedWidth = this._referenceDomElement.clientWidth;
            observedHeight = this._referenceDomElement.clientHeight;
        }
        observedWidth = Math.max(5, observedWidth);
        observedHeight = Math.max(5, observedHeight);
        if (this._width !== observedWidth || this._height !== observedHeight) {
            this._width = observedWidth;
            this._height = observedHeight;
            if (emitEvent) {
                this._onDidChange.fire();
            }
        }
    }
}


/***/ }),

/***/ 87863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: function() { return /* binding */ FontMeasurements; }
});

// UNUSED EXPORTS: FontMeasurementsImpl

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/browser/browser.js
var browser = __webpack_require__(18463);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/event.js
var common_event = __webpack_require__(64720);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/base/common/lifecycle.js
var lifecycle = __webpack_require__(26794);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/domFontInfo.js
var domFontInfo = __webpack_require__(93887);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/charWidthReader.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

class CharWidthRequest {
    constructor(chr, type) {
        this.chr = chr;
        this.type = type;
        this.width = 0;
    }
    fulfill(width) {
        this.width = width;
    }
}
class DomCharWidthReader {
    constructor(bareFontInfo, requests) {
        this._bareFontInfo = bareFontInfo;
        this._requests = requests;
        this._container = null;
        this._testElements = null;
    }
    read() {
        // Create a test container with all these test elements
        this._createDomElements();
        // Add the container to the DOM
        document.body.appendChild(this._container);
        // Read character widths
        this._readFromDomElements();
        // Remove the container from the DOM
        document.body.removeChild(this._container);
        this._container = null;
        this._testElements = null;
    }
    _createDomElements() {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '-50000px';
        container.style.width = '50000px';
        const regularDomNode = document.createElement('div');
        (0,domFontInfo/* applyFontInfo */.N)(regularDomNode, this._bareFontInfo);
        container.appendChild(regularDomNode);
        const boldDomNode = document.createElement('div');
        (0,domFontInfo/* applyFontInfo */.N)(boldDomNode, this._bareFontInfo);
        boldDomNode.style.fontWeight = 'bold';
        container.appendChild(boldDomNode);
        const italicDomNode = document.createElement('div');
        (0,domFontInfo/* applyFontInfo */.N)(italicDomNode, this._bareFontInfo);
        italicDomNode.style.fontStyle = 'italic';
        container.appendChild(italicDomNode);
        const testElements = [];
        for (const request of this._requests) {
            let parent;
            if (request.type === 0 /* CharWidthRequestType.Regular */) {
                parent = regularDomNode;
            }
            if (request.type === 2 /* CharWidthRequestType.Bold */) {
                parent = boldDomNode;
            }
            if (request.type === 1 /* CharWidthRequestType.Italic */) {
                parent = italicDomNode;
            }
            parent.appendChild(document.createElement('br'));
            const testElement = document.createElement('span');
            DomCharWidthReader._render(testElement, request);
            parent.appendChild(testElement);
            testElements.push(testElement);
        }
        this._container = container;
        this._testElements = testElements;
    }
    static _render(testElement, request) {
        if (request.chr === ' ') {
            let htmlString = '\u00a0';
            // Repeat character 256 (2^8) times
            for (let i = 0; i < 8; i++) {
                htmlString += htmlString;
            }
            testElement.innerText = htmlString;
        }
        else {
            let testString = request.chr;
            // Repeat character 256 (2^8) times
            for (let i = 0; i < 8; i++) {
                testString += testString;
            }
            testElement.textContent = testString;
        }
    }
    _readFromDomElements() {
        for (let i = 0, len = this._requests.length; i < len; i++) {
            const request = this._requests[i];
            const testElement = this._testElements[i];
            request.fulfill(testElement.offsetWidth / 256);
        }
    }
}
function readCharWidths(bareFontInfo, requests) {
    const reader = new DomCharWidthReader(bareFontInfo, requests);
    reader.read();
}

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/fontInfo.js
var fontInfo = __webpack_require__(27553);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/config/fontMeasurements.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






class FontMeasurementsImpl extends lifecycle/* Disposable */.JT {
    constructor() {
        super();
        this._onDidChange = this._register(new common_event/* Emitter */.Q5());
        this.onDidChange = this._onDidChange.event;
        this._cache = new FontMeasurementsCache();
        this._evictUntrustedReadingsTimeout = -1;
    }
    dispose() {
        if (this._evictUntrustedReadingsTimeout !== -1) {
            window.clearTimeout(this._evictUntrustedReadingsTimeout);
            this._evictUntrustedReadingsTimeout = -1;
        }
        super.dispose();
    }
    /**
     * Clear all cached font information and trigger a change event.
     */
    clearAllFontInfos() {
        this._cache = new FontMeasurementsCache();
        this._onDidChange.fire();
    }
    _writeToCache(item, value) {
        this._cache.put(item, value);
        if (!value.isTrusted && this._evictUntrustedReadingsTimeout === -1) {
            // Try reading again after some time
            this._evictUntrustedReadingsTimeout = window.setTimeout(() => {
                this._evictUntrustedReadingsTimeout = -1;
                this._evictUntrustedReadings();
            }, 5000);
        }
    }
    _evictUntrustedReadings() {
        const values = this._cache.getValues();
        let somethingRemoved = false;
        for (const item of values) {
            if (!item.isTrusted) {
                somethingRemoved = true;
                this._cache.remove(item);
            }
        }
        if (somethingRemoved) {
            this._onDidChange.fire();
        }
    }
    /**
     * Read font information.
     */
    readFontInfo(bareFontInfo) {
        if (!this._cache.has(bareFontInfo)) {
            let readConfig = this._actualReadFontInfo(bareFontInfo);
            if (readConfig.typicalHalfwidthCharacterWidth <= 2 || readConfig.typicalFullwidthCharacterWidth <= 2 || readConfig.spaceWidth <= 2 || readConfig.maxDigitWidth <= 2) {
                // Hey, it's Bug 14341 ... we couldn't read
                readConfig = new fontInfo/* FontInfo */.pR({
                    pixelRatio: browser/* PixelRatio */.Tz.value,
                    fontFamily: readConfig.fontFamily,
                    fontWeight: readConfig.fontWeight,
                    fontSize: readConfig.fontSize,
                    fontFeatureSettings: readConfig.fontFeatureSettings,
                    fontVariationSettings: readConfig.fontVariationSettings,
                    lineHeight: readConfig.lineHeight,
                    letterSpacing: readConfig.letterSpacing,
                    isMonospace: readConfig.isMonospace,
                    typicalHalfwidthCharacterWidth: Math.max(readConfig.typicalHalfwidthCharacterWidth, 5),
                    typicalFullwidthCharacterWidth: Math.max(readConfig.typicalFullwidthCharacterWidth, 5),
                    canUseHalfwidthRightwardsArrow: readConfig.canUseHalfwidthRightwardsArrow,
                    spaceWidth: Math.max(readConfig.spaceWidth, 5),
                    middotWidth: Math.max(readConfig.middotWidth, 5),
                    wsmiddotWidth: Math.max(readConfig.wsmiddotWidth, 5),
                    maxDigitWidth: Math.max(readConfig.maxDigitWidth, 5),
                }, false);
            }
            this._writeToCache(bareFontInfo, readConfig);
        }
        return this._cache.get(bareFontInfo);
    }
    _createRequest(chr, type, all, monospace) {
        const result = new CharWidthRequest(chr, type);
        all.push(result);
        monospace === null || monospace === void 0 ? void 0 : monospace.push(result);
        return result;
    }
    _actualReadFontInfo(bareFontInfo) {
        const all = [];
        const monospace = [];
        const typicalHalfwidthCharacter = this._createRequest('n', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const typicalFullwidthCharacter = this._createRequest('\uff4d', 0 /* CharWidthRequestType.Regular */, all, null);
        const space = this._createRequest(' ', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit0 = this._createRequest('0', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit1 = this._createRequest('1', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit2 = this._createRequest('2', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit3 = this._createRequest('3', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit4 = this._createRequest('4', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit5 = this._createRequest('5', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit6 = this._createRequest('6', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit7 = this._createRequest('7', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit8 = this._createRequest('8', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const digit9 = this._createRequest('9', 0 /* CharWidthRequestType.Regular */, all, monospace);
        // monospace test: used for whitespace rendering
        const rightwardsArrow = this._createRequest('→', 0 /* CharWidthRequestType.Regular */, all, monospace);
        const halfwidthRightwardsArrow = this._createRequest('￫', 0 /* CharWidthRequestType.Regular */, all, null);
        // U+00B7 - MIDDLE DOT
        const middot = this._createRequest('·', 0 /* CharWidthRequestType.Regular */, all, monospace);
        // U+2E31 - WORD SEPARATOR MIDDLE DOT
        const wsmiddotWidth = this._createRequest(String.fromCharCode(0x2E31), 0 /* CharWidthRequestType.Regular */, all, null);
        // monospace test: some characters
        const monospaceTestChars = '|/-_ilm%';
        for (let i = 0, len = monospaceTestChars.length; i < len; i++) {
            this._createRequest(monospaceTestChars.charAt(i), 0 /* CharWidthRequestType.Regular */, all, monospace);
            this._createRequest(monospaceTestChars.charAt(i), 1 /* CharWidthRequestType.Italic */, all, monospace);
            this._createRequest(monospaceTestChars.charAt(i), 2 /* CharWidthRequestType.Bold */, all, monospace);
        }
        readCharWidths(bareFontInfo, all);
        const maxDigitWidth = Math.max(digit0.width, digit1.width, digit2.width, digit3.width, digit4.width, digit5.width, digit6.width, digit7.width, digit8.width, digit9.width);
        let isMonospace = (bareFontInfo.fontFeatureSettings === editorOptions/* EditorFontLigatures */.n0.OFF);
        const referenceWidth = monospace[0].width;
        for (let i = 1, len = monospace.length; isMonospace && i < len; i++) {
            const diff = referenceWidth - monospace[i].width;
            if (diff < -0.001 || diff > 0.001) {
                isMonospace = false;
                break;
            }
        }
        let canUseHalfwidthRightwardsArrow = true;
        if (isMonospace && halfwidthRightwardsArrow.width !== referenceWidth) {
            // using a halfwidth rightwards arrow would break monospace...
            canUseHalfwidthRightwardsArrow = false;
        }
        if (halfwidthRightwardsArrow.width > rightwardsArrow.width) {
            // using a halfwidth rightwards arrow would paint a larger arrow than a regular rightwards arrow
            canUseHalfwidthRightwardsArrow = false;
        }
        return new fontInfo/* FontInfo */.pR({
            pixelRatio: browser/* PixelRatio */.Tz.value,
            fontFamily: bareFontInfo.fontFamily,
            fontWeight: bareFontInfo.fontWeight,
            fontSize: bareFontInfo.fontSize,
            fontFeatureSettings: bareFontInfo.fontFeatureSettings,
            fontVariationSettings: bareFontInfo.fontVariationSettings,
            lineHeight: bareFontInfo.lineHeight,
            letterSpacing: bareFontInfo.letterSpacing,
            isMonospace: isMonospace,
            typicalHalfwidthCharacterWidth: typicalHalfwidthCharacter.width,
            typicalFullwidthCharacterWidth: typicalFullwidthCharacter.width,
            canUseHalfwidthRightwardsArrow: canUseHalfwidthRightwardsArrow,
            spaceWidth: space.width,
            middotWidth: middot.width,
            wsmiddotWidth: wsmiddotWidth.width,
            maxDigitWidth: maxDigitWidth
        }, true);
    }
}
class FontMeasurementsCache {
    constructor() {
        this._keys = Object.create(null);
        this._values = Object.create(null);
    }
    has(item) {
        const itemId = item.getId();
        return !!this._values[itemId];
    }
    get(item) {
        const itemId = item.getId();
        return this._values[itemId];
    }
    put(item, value) {
        const itemId = item.getId();
        this._keys[itemId] = item;
        this._values[itemId] = value;
    }
    remove(item) {
        const itemId = item.getId();
        delete this._keys[itemId];
        delete this._values[itemId];
    }
    getValues() {
        return Object.keys(this._keys).map(id => this._values[id]);
    }
}
const FontMeasurements = new FontMeasurementsImpl();


/***/ })

}]);