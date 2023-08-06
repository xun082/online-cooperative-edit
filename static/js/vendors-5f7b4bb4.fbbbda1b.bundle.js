"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-5f7b4bb4"],{

/***/ 55302:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pe: function() { return /* binding */ isDiffEditorConfigurationKey; },
/* harmony export */   ei: function() { return /* binding */ isEditorConfigurationKey; },
/* harmony export */   wk: function() { return /* binding */ editorConfigurationBaseNode; }
/* harmony export */ });
/* harmony import */ var _editorOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75117);
/* harmony import */ var _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20347);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23330);
/* harmony import */ var _platform_configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85118);
/* harmony import */ var _platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72015);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





const editorConfigurationBaseNode = Object.freeze({
    id: 'editor',
    order: 5,
    type: 'object',
    title: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('editorConfigurationTitle', "Editor"),
    scope: 5 /* ConfigurationScope.LANGUAGE_OVERRIDABLE */,
});
const editorConfiguration = Object.assign(Object.assign({}, editorConfigurationBaseNode), { properties: {
        'editor.tabSize': {
            type: 'number',
            default: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_MODEL_DEFAULTS */ .D.tabSize,
            minimum: 1,
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('tabSize', "The number of spaces a tab is equal to. This setting is overridden based on the file contents when {0} is on.", '`#editor.detectIndentation#`')
        },
        'editor.indentSize': {
            'anyOf': [
                {
                    type: 'string',
                    enum: ['tabSize']
                },
                {
                    type: 'number',
                    minimum: 1
                }
            ],
            default: 'tabSize',
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('indentSize', "The number of spaces used for indentation or `\"tabSize\"` to use the value from `#editor.tabSize#`. This setting is overridden based on the file contents when `#editor.detectIndentation#` is on.")
        },
        'editor.insertSpaces': {
            type: 'boolean',
            default: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_MODEL_DEFAULTS */ .D.insertSpaces,
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('insertSpaces', "Insert spaces when pressing `Tab`. This setting is overridden based on the file contents when {0} is on.", '`#editor.detectIndentation#`')
        },
        'editor.detectIndentation': {
            type: 'boolean',
            default: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_MODEL_DEFAULTS */ .D.detectIndentation,
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('detectIndentation', "Controls whether {0} and {1} will be automatically detected when a file is opened based on the file contents.", '`#editor.tabSize#`', '`#editor.insertSpaces#`')
        },
        'editor.trimAutoWhitespace': {
            type: 'boolean',
            default: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_MODEL_DEFAULTS */ .D.trimAutoWhitespace,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('trimAutoWhitespace', "Remove trailing auto inserted whitespace.")
        },
        'editor.largeFileOptimizations': {
            type: 'boolean',
            default: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_MODEL_DEFAULTS */ .D.largeFileOptimizations,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('largeFileOptimizations', "Special handling for large files to disable certain memory intensive features.")
        },
        'editor.wordBasedSuggestions': {
            type: 'boolean',
            default: true,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordBasedSuggestions', "Controls whether completions should be computed based on words in the document.")
        },
        'editor.wordBasedSuggestionsMode': {
            enum: ['currentDocument', 'matchingDocuments', 'allDocuments'],
            default: 'matchingDocuments',
            enumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordBasedSuggestionsMode.currentDocument', 'Only suggest words from the active document.'),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordBasedSuggestionsMode.matchingDocuments', 'Suggest words from all open documents of the same language.'),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordBasedSuggestionsMode.allDocuments', 'Suggest words from all open documents.')
            ],
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordBasedSuggestionsMode', "Controls from which documents word based completions are computed.")
        },
        'editor.semanticHighlighting.enabled': {
            enum: [true, false, 'configuredByTheme'],
            enumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('semanticHighlighting.true', 'Semantic highlighting enabled for all color themes.'),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('semanticHighlighting.false', 'Semantic highlighting disabled for all color themes.'),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('semanticHighlighting.configuredByTheme', 'Semantic highlighting is configured by the current color theme\'s `semanticHighlighting` setting.')
            ],
            default: 'configuredByTheme',
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('semanticHighlighting.enabled', "Controls whether the semanticHighlighting is shown for the languages that support it.")
        },
        'editor.stablePeek': {
            type: 'boolean',
            default: false,
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('stablePeek', "Keep peek editors open even when double-clicking their content or when hitting `Escape`.")
        },
        'editor.maxTokenizationLineLength': {
            type: 'integer',
            default: 20000,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('maxTokenizationLineLength', "Lines above this length will not be tokenized for performance reasons")
        },
        'editor.experimental.asyncTokenization': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('editor.experimental.asyncTokenization', "Controls whether the tokenization should happen asynchronously on a web worker."),
            tags: ['experimental'],
        },
        'editor.experimental.asyncTokenizationLogging': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('editor.experimental.asyncTokenizationLogging', "Controls whether async tokenization should be logged. For debugging only."),
        },
        'editor.experimental.asyncTokenizationVerification': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('editor.experimental.asyncTokenizationVerification', "Controls whether async tokenization should be verified against legacy background tokenization. Might slow down tokenization. For debugging only."),
        },
        'editor.language.brackets': {
            type: ['array', 'null'],
            default: null,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.brackets', 'Defines the bracket symbols that increase or decrease the indentation.'),
            items: {
                type: 'array',
                items: [
                    {
                        type: 'string',
                        description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.openBracket', 'The opening bracket character or string sequence.')
                    },
                    {
                        type: 'string',
                        description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.closeBracket', 'The closing bracket character or string sequence.')
                    }
                ]
            }
        },
        'editor.language.colorizedBracketPairs': {
            type: ['array', 'null'],
            default: null,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.colorizedBracketPairs', 'Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled.'),
            items: {
                type: 'array',
                items: [
                    {
                        type: 'string',
                        description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.openBracket', 'The opening bracket character or string sequence.')
                    },
                    {
                        type: 'string',
                        description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('schema.closeBracket', 'The closing bracket character or string sequence.')
                    }
                ]
            }
        },
        'diffEditor.maxComputationTime': {
            type: 'number',
            default: 5000,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('maxComputationTime', "Timeout in milliseconds after which diff computation is cancelled. Use 0 for no timeout.")
        },
        'diffEditor.maxFileSize': {
            type: 'number',
            default: 50,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('maxFileSize', "Maximum file size in MB for which to compute diffs. Use 0 for no limit.")
        },
        'diffEditor.renderSideBySide': {
            type: 'boolean',
            default: true,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('sideBySide', "Controls whether the diff editor shows the diff side by side or inline.")
        },
        'diffEditor.renderMarginRevertIcon': {
            type: 'boolean',
            default: true,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('renderMarginRevertIcon', "When enabled, the diff editor shows arrows in its glyph margin to revert changes.")
        },
        'diffEditor.ignoreTrimWhitespace': {
            type: 'boolean',
            default: true,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('ignoreTrimWhitespace', "When enabled, the diff editor ignores changes in leading or trailing whitespace.")
        },
        'diffEditor.renderIndicators': {
            type: 'boolean',
            default: true,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('renderIndicators', "Controls whether the diff editor shows +/- indicators for added/removed changes.")
        },
        'diffEditor.codeLens': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('codeLens', "Controls whether the editor shows CodeLens.")
        },
        'diffEditor.wordWrap': {
            type: 'string',
            enum: ['off', 'on', 'inherit'],
            default: 'inherit',
            markdownEnumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordWrap.off', "Lines will never wrap."),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordWrap.on', "Lines will wrap at the viewport width."),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('wordWrap.inherit', "Lines will wrap according to the {0} setting.", '`#editor.wordWrap#`'),
            ]
        },
        'diffEditor.diffAlgorithm': {
            type: 'string',
            enum: ['legacy', 'advanced'],
            default: 'legacy',
            markdownEnumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('diffAlgorithm.legacy', "Uses the legacy diffing algorithm."),
                _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('diffAlgorithm.advanced', "Uses the advanced diffing algorithm."),
            ],
            tags: ['experimental'],
        },
        'diffEditor.experimental.collapseUnchangedRegions': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('collapseUnchangedRegions', "Controls whether the diff editor shows unchanged regions. Only works when 'diffEditor.experimental.useVersion2' is set."),
        },
        'diffEditor.experimental.useVersion2': {
            type: 'boolean',
            default: false,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('useVersion2', "Controls whether the diff editor uses the new or the old implementation."),
        }
    } });
function isConfigurationPropertySchema(x) {
    return (typeof x.type !== 'undefined' || typeof x.anyOf !== 'undefined');
}
// Add properties from the Editor Option Registry
for (const editorOption of _editorOptions_js__WEBPACK_IMPORTED_MODULE_0__/* .editorOptionsRegistry */ .Bc) {
    const schema = editorOption.schema;
    if (typeof schema !== 'undefined') {
        if (isConfigurationPropertySchema(schema)) {
            // This is a single schema contribution
            editorConfiguration.properties[`editor.${editorOption.name}`] = schema;
        }
        else {
            for (const key in schema) {
                if (Object.hasOwnProperty.call(schema, key)) {
                    editorConfiguration.properties[key] = schema[key];
                }
            }
        }
    }
}
let cachedEditorConfigurationKeys = null;
function getEditorConfigurationKeys() {
    if (cachedEditorConfigurationKeys === null) {
        cachedEditorConfigurationKeys = Object.create(null);
        Object.keys(editorConfiguration.properties).forEach((prop) => {
            cachedEditorConfigurationKeys[prop] = true;
        });
    }
    return cachedEditorConfigurationKeys;
}
function isEditorConfigurationKey(key) {
    const editorConfigurationKeys = getEditorConfigurationKeys();
    return (editorConfigurationKeys[`editor.${key}`] || false);
}
function isDiffEditorConfigurationKey(key) {
    const editorConfigurationKeys = getEditorConfigurationKeys();
    return (editorConfigurationKeys[`diffEditor.${key}`] || false);
}
const configurationRegistry = _platform_registry_common_platform_js__WEBPACK_IMPORTED_MODULE_4__/* .Registry */ .B.as(_platform_configuration_common_configurationRegistry_js__WEBPACK_IMPORTED_MODULE_3__/* .Extensions */ .IP.Configuration);
configurationRegistry.registerConfiguration(editorConfiguration);


/***/ }),

/***/ 75117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $J: function() { return /* binding */ filterValidationDecorations; },
/* harmony export */   Av: function() { return /* binding */ inUntrustedWorkspace; },
/* harmony export */   BH: function() { return /* binding */ EditorOptions; },
/* harmony export */   Bb: function() { return /* binding */ ConfigurationChangedEvent; },
/* harmony export */   Bc: function() { return /* binding */ editorOptionsRegistry; },
/* harmony export */   Bo: function() { return /* binding */ EditorFontVariations; },
/* harmony export */   LJ: function() { return /* binding */ ComputeOptionsMemory; },
/* harmony export */   L_: function() { return /* binding */ clampedFloat; },
/* harmony export */   NY: function() { return /* binding */ stringSet; },
/* harmony export */   O7: function() { return /* binding */ boolean; },
/* harmony export */   Zc: function() { return /* binding */ clampedInt; },
/* harmony export */   d2: function() { return /* binding */ TextEditorCursorStyle; },
/* harmony export */   gk: function() { return /* binding */ EditorLayoutInfoComputer; },
/* harmony export */   hL: function() { return /* binding */ EDITOR_FONT_DEFAULTS; },
/* harmony export */   n0: function() { return /* binding */ EditorFontLigatures; },
/* harmony export */   qt: function() { return /* binding */ unicodeHighlightConfigKeys; },
/* harmony export */   rk: function() { return /* binding */ ApplyUpdateResult; },
/* harmony export */   y0: function() { return /* binding */ MINIMAP_GUTTER_WIDTH; }
/* harmony export */ });
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23330);
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94057);
/* harmony import */ var _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81814);
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33899);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99269);
/* harmony import */ var _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20347);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






/**
 * @internal
 * The width of the minimap gutter, in pixels.
 */
const MINIMAP_GUTTER_WIDTH = 8;
//#endregion
/**
 * An event describing that the configuration of the editor has changed.
 */
class ConfigurationChangedEvent {
    /**
     * @internal
     */
    constructor(values) {
        this._values = values;
    }
    hasChanged(id) {
        return this._values[id];
    }
}
/**
 * @internal
 */
class ComputeOptionsMemory {
    constructor() {
        this.stableMinimapLayoutInput = null;
        this.stableFitMaxMinimapScale = 0;
        this.stableFitRemainingWidth = 0;
    }
}
/**
 * @internal
 */
class BaseEditorOption {
    constructor(id, name, defaultValue, schema) {
        this.id = id;
        this.name = name;
        this.defaultValue = defaultValue;
        this.schema = schema;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    compute(env, options, value) {
        return value;
    }
}
class ApplyUpdateResult {
    constructor(newValue, didChange) {
        this.newValue = newValue;
        this.didChange = didChange;
    }
}
function applyUpdate(value, update) {
    if (typeof value !== 'object' || typeof update !== 'object' || !value || !update) {
        return new ApplyUpdateResult(update, value !== update);
    }
    if (Array.isArray(value) || Array.isArray(update)) {
        const arrayEquals = Array.isArray(value) && Array.isArray(update) && _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_3__/* .equals */ .fS(value, update);
        return new ApplyUpdateResult(update, !arrayEquals);
    }
    let didChange = false;
    for (const key in update) {
        if (update.hasOwnProperty(key)) {
            const result = applyUpdate(value[key], update[key]);
            if (result.didChange) {
                value[key] = result.newValue;
                didChange = true;
            }
        }
    }
    return new ApplyUpdateResult(value, didChange);
}
/**
 * @internal
 */
class ComputedEditorOption {
    constructor(id) {
        this.schema = undefined;
        this.id = id;
        this.name = '_never_';
        this.defaultValue = undefined;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    validate(input) {
        return this.defaultValue;
    }
}
class SimpleEditorOption {
    constructor(id, name, defaultValue, schema) {
        this.id = id;
        this.name = name;
        this.defaultValue = defaultValue;
        this.schema = schema;
    }
    applyUpdate(value, update) {
        return applyUpdate(value, update);
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        return input;
    }
    compute(env, options, value) {
        return value;
    }
}
/**
 * @internal
 */
function boolean(value, defaultValue) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    if (value === 'false') {
        // treat the string 'false' as false
        return false;
    }
    return Boolean(value);
}
class EditorBooleanOption extends SimpleEditorOption {
    constructor(id, name, defaultValue, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'boolean';
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
    }
    validate(input) {
        return boolean(input, this.defaultValue);
    }
}
/**
 * @internal
 */
function clampedInt(value, defaultValue, minimum, maximum) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    let r = parseInt(value, 10);
    if (isNaN(r)) {
        return defaultValue;
    }
    r = Math.max(minimum, r);
    r = Math.min(maximum, r);
    return r | 0;
}
class EditorIntOption extends SimpleEditorOption {
    static clampedInt(value, defaultValue, minimum, maximum) {
        return clampedInt(value, defaultValue, minimum, maximum);
    }
    constructor(id, name, defaultValue, minimum, maximum, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'integer';
            schema.default = defaultValue;
            schema.minimum = minimum;
            schema.maximum = maximum;
        }
        super(id, name, defaultValue, schema);
        this.minimum = minimum;
        this.maximum = maximum;
    }
    validate(input) {
        return EditorIntOption.clampedInt(input, this.defaultValue, this.minimum, this.maximum);
    }
}
/**
 * @internal
 */
function clampedFloat(value, defaultValue, minimum, maximum) {
    if (typeof value === 'undefined') {
        return defaultValue;
    }
    const r = EditorFloatOption.float(value, defaultValue);
    return EditorFloatOption.clamp(r, minimum, maximum);
}
class EditorFloatOption extends SimpleEditorOption {
    static clamp(n, min, max) {
        if (n < min) {
            return min;
        }
        if (n > max) {
            return max;
        }
        return n;
    }
    static float(value, defaultValue) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'undefined') {
            return defaultValue;
        }
        const r = parseFloat(value);
        return (isNaN(r) ? defaultValue : r);
    }
    constructor(id, name, defaultValue, validationFn, schema) {
        if (typeof schema !== 'undefined') {
            schema.type = 'number';
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
        this.validationFn = validationFn;
    }
    validate(input) {
        return this.validationFn(EditorFloatOption.float(input, this.defaultValue));
    }
}
class EditorStringOption extends SimpleEditorOption {
    static string(value, defaultValue) {
        if (typeof value !== 'string') {
            return defaultValue;
        }
        return value;
    }
    constructor(id, name, defaultValue, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
    }
    validate(input) {
        return EditorStringOption.string(input, this.defaultValue);
    }
}
/**
 * @internal
 */
function stringSet(value, defaultValue, allowedValues, renamedValues) {
    if (typeof value !== 'string') {
        return defaultValue;
    }
    if (renamedValues && value in renamedValues) {
        return renamedValues[value];
    }
    if (allowedValues.indexOf(value) === -1) {
        return defaultValue;
    }
    return value;
}
class EditorStringEnumOption extends SimpleEditorOption {
    constructor(id, name, defaultValue, allowedValues, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.enum = allowedValues;
            schema.default = defaultValue;
        }
        super(id, name, defaultValue, schema);
        this._allowedValues = allowedValues;
    }
    validate(input) {
        return stringSet(input, this.defaultValue, this._allowedValues);
    }
}
class EditorEnumOption extends BaseEditorOption {
    constructor(id, name, defaultValue, defaultStringValue, allowedValues, convert, schema = undefined) {
        if (typeof schema !== 'undefined') {
            schema.type = 'string';
            schema.enum = allowedValues;
            schema.default = defaultStringValue;
        }
        super(id, name, defaultValue, schema);
        this._allowedValues = allowedValues;
        this._convert = convert;
    }
    validate(input) {
        if (typeof input !== 'string') {
            return this.defaultValue;
        }
        if (this._allowedValues.indexOf(input) === -1) {
            return this.defaultValue;
        }
        return this._convert(input);
    }
}
//#endregion
//#region autoIndent
function _autoIndentFromString(autoIndent) {
    switch (autoIndent) {
        case 'none': return 0 /* EditorAutoIndentStrategy.None */;
        case 'keep': return 1 /* EditorAutoIndentStrategy.Keep */;
        case 'brackets': return 2 /* EditorAutoIndentStrategy.Brackets */;
        case 'advanced': return 3 /* EditorAutoIndentStrategy.Advanced */;
        case 'full': return 4 /* EditorAutoIndentStrategy.Full */;
    }
}
//#endregion
//#region accessibilitySupport
class EditorAccessibilitySupport extends BaseEditorOption {
    constructor() {
        super(2 /* EditorOption.accessibilitySupport */, 'accessibilitySupport', 0 /* AccessibilitySupport.Unknown */, {
            type: 'string',
            enum: ['auto', 'on', 'off'],
            enumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilitySupport.auto', "Use platform APIs to detect when a Screen Reader is attached"),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilitySupport.on', "Optimize for usage with a Screen Reader"),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilitySupport.off', "Assume a screen reader is not attached"),
            ],
            default: 'auto',
            tags: ['accessibility'],
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilitySupport', "Controls if the UI should run in a mode where it is optimized for screen readers.")
        });
    }
    validate(input) {
        switch (input) {
            case 'auto': return 0 /* AccessibilitySupport.Unknown */;
            case 'off': return 1 /* AccessibilitySupport.Disabled */;
            case 'on': return 2 /* AccessibilitySupport.Enabled */;
        }
        return this.defaultValue;
    }
    compute(env, options, value) {
        if (value === 0 /* AccessibilitySupport.Unknown */) {
            // The editor reads the `accessibilitySupport` from the environment
            return env.accessibilitySupport;
        }
        return value;
    }
}
class EditorComments extends BaseEditorOption {
    constructor() {
        const defaults = {
            insertSpace: true,
            ignoreEmptyLines: true,
        };
        super(21 /* EditorOption.comments */, 'comments', defaults, {
            'editor.comments.insertSpace': {
                type: 'boolean',
                default: defaults.insertSpace,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('comments.insertSpace', "Controls whether a space character is inserted when commenting.")
            },
            'editor.comments.ignoreEmptyLines': {
                type: 'boolean',
                default: defaults.ignoreEmptyLines,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('comments.ignoreEmptyLines', 'Controls if empty lines should be ignored with toggle, add or remove actions for line comments.')
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            insertSpace: boolean(input.insertSpace, this.defaultValue.insertSpace),
            ignoreEmptyLines: boolean(input.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines),
        };
    }
}
function _cursorBlinkingStyleFromString(cursorBlinkingStyle) {
    switch (cursorBlinkingStyle) {
        case 'blink': return 1 /* TextEditorCursorBlinkingStyle.Blink */;
        case 'smooth': return 2 /* TextEditorCursorBlinkingStyle.Smooth */;
        case 'phase': return 3 /* TextEditorCursorBlinkingStyle.Phase */;
        case 'expand': return 4 /* TextEditorCursorBlinkingStyle.Expand */;
        case 'solid': return 5 /* TextEditorCursorBlinkingStyle.Solid */;
    }
}
//#endregion
//#region cursorStyle
/**
 * The style in which the editor's cursor should be rendered.
 */
var TextEditorCursorStyle;
(function (TextEditorCursorStyle) {
    /**
     * As a vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Line"] = 1] = "Line";
    /**
     * As a block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Block"] = 2] = "Block";
    /**
     * As a horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["Underline"] = 3] = "Underline";
    /**
     * As a thin vertical line (sitting between two characters).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["LineThin"] = 4] = "LineThin";
    /**
     * As an outlined block (sitting on top of a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["BlockOutline"] = 5] = "BlockOutline";
    /**
     * As a thin horizontal line (sitting under a character).
     */
    TextEditorCursorStyle[TextEditorCursorStyle["UnderlineThin"] = 6] = "UnderlineThin";
})(TextEditorCursorStyle || (TextEditorCursorStyle = {}));
function _cursorStyleFromString(cursorStyle) {
    switch (cursorStyle) {
        case 'line': return TextEditorCursorStyle.Line;
        case 'block': return TextEditorCursorStyle.Block;
        case 'underline': return TextEditorCursorStyle.Underline;
        case 'line-thin': return TextEditorCursorStyle.LineThin;
        case 'block-outline': return TextEditorCursorStyle.BlockOutline;
        case 'underline-thin': return TextEditorCursorStyle.UnderlineThin;
    }
}
//#endregion
//#region editorClassName
class EditorClassName extends ComputedEditorOption {
    constructor() {
        super(137 /* EditorOption.editorClassName */);
    }
    compute(env, options, _) {
        const classNames = ['monaco-editor'];
        if (options.get(37 /* EditorOption.extraEditorClassName */)) {
            classNames.push(options.get(37 /* EditorOption.extraEditorClassName */));
        }
        if (env.extraEditorClassName) {
            classNames.push(env.extraEditorClassName);
        }
        if (options.get(71 /* EditorOption.mouseStyle */) === 'default') {
            classNames.push('mouse-default');
        }
        else if (options.get(71 /* EditorOption.mouseStyle */) === 'copy') {
            classNames.push('mouse-copy');
        }
        if (options.get(107 /* EditorOption.showUnused */)) {
            classNames.push('showUnused');
        }
        if (options.get(135 /* EditorOption.showDeprecated */)) {
            classNames.push('showDeprecated');
        }
        return classNames.join(' ');
    }
}
//#endregion
//#region emptySelectionClipboard
class EditorEmptySelectionClipboard extends EditorBooleanOption {
    constructor() {
        super(35 /* EditorOption.emptySelectionClipboard */, 'emptySelectionClipboard', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('emptySelectionClipboard', "Controls whether copying without a selection copies the current line.") });
    }
    compute(env, options, value) {
        return value && env.emptySelectionClipboard;
    }
}
class EditorFind extends BaseEditorOption {
    constructor() {
        const defaults = {
            cursorMoveOnType: true,
            seedSearchStringFromSelection: 'always',
            autoFindInSelection: 'never',
            globalFindClipboard: false,
            addExtraSpaceOnTop: true,
            loop: true
        };
        super(39 /* EditorOption.find */, 'find', defaults, {
            'editor.find.cursorMoveOnType': {
                type: 'boolean',
                default: defaults.cursorMoveOnType,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.cursorMoveOnType', "Controls whether the cursor should jump to find matches while typing.")
            },
            'editor.find.seedSearchStringFromSelection': {
                type: 'string',
                enum: ['never', 'always', 'selection'],
                default: defaults.seedSearchStringFromSelection,
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.seedSearchStringFromSelection.never', 'Never seed search string from the editor selection.'),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.seedSearchStringFromSelection.always', 'Always seed search string from the editor selection, including word at cursor position.'),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.seedSearchStringFromSelection.selection', 'Only seed search string from the editor selection.')
                ],
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.seedSearchStringFromSelection', "Controls whether the search string in the Find Widget is seeded from the editor selection.")
            },
            'editor.find.autoFindInSelection': {
                type: 'string',
                enum: ['never', 'always', 'multiline'],
                default: defaults.autoFindInSelection,
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.autoFindInSelection.never', 'Never turn on Find in Selection automatically (default).'),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.autoFindInSelection.always', 'Always turn on Find in Selection automatically.'),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.find.autoFindInSelection.multiline', 'Turn on Find in Selection automatically when multiple lines of content are selected.')
                ],
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.autoFindInSelection', "Controls the condition for turning on Find in Selection automatically.")
            },
            'editor.find.globalFindClipboard': {
                type: 'boolean',
                default: defaults.globalFindClipboard,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.globalFindClipboard', "Controls whether the Find Widget should read or modify the shared find clipboard on macOS."),
                included: _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz
            },
            'editor.find.addExtraSpaceOnTop': {
                type: 'boolean',
                default: defaults.addExtraSpaceOnTop,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.addExtraSpaceOnTop', "Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.")
            },
            'editor.find.loop': {
                type: 'boolean',
                default: defaults.loop,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('find.loop', "Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            cursorMoveOnType: boolean(input.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
            seedSearchStringFromSelection: typeof _input.seedSearchStringFromSelection === 'boolean'
                ? (_input.seedSearchStringFromSelection ? 'always' : 'never')
                : stringSet(input.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ['never', 'always', 'selection']),
            autoFindInSelection: typeof _input.autoFindInSelection === 'boolean'
                ? (_input.autoFindInSelection ? 'always' : 'never')
                : stringSet(input.autoFindInSelection, this.defaultValue.autoFindInSelection, ['never', 'always', 'multiline']),
            globalFindClipboard: boolean(input.globalFindClipboard, this.defaultValue.globalFindClipboard),
            addExtraSpaceOnTop: boolean(input.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
            loop: boolean(input.loop, this.defaultValue.loop),
        };
    }
}
//#endregion
//#region fontLigatures
/**
 * @internal
 */
class EditorFontLigatures extends BaseEditorOption {
    constructor() {
        super(49 /* EditorOption.fontLigatures */, 'fontLigatures', EditorFontLigatures.OFF, {
            anyOf: [
                {
                    type: 'boolean',
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontLigatures', "Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property."),
                },
                {
                    type: 'string',
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontFeatureSettings', "Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.")
                }
            ],
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontLigaturesGeneral', "Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property."),
            default: false
        });
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        if (typeof input === 'string') {
            if (input === 'false') {
                return EditorFontLigatures.OFF;
            }
            if (input === 'true') {
                return EditorFontLigatures.ON;
            }
            return input;
        }
        if (Boolean(input)) {
            return EditorFontLigatures.ON;
        }
        return EditorFontLigatures.OFF;
    }
}
EditorFontLigatures.OFF = '"liga" off, "calt" off';
EditorFontLigatures.ON = '"liga" on, "calt" on';
//#endregion
//#region fontVariations
/**
 * @internal
 */
class EditorFontVariations extends BaseEditorOption {
    constructor() {
        super(52 /* EditorOption.fontVariations */, 'fontVariations', EditorFontVariations.OFF, {
            anyOf: [
                {
                    type: 'boolean',
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontVariations', "Enables/Disables the translation from font-weight to font-variation-settings. Change this to a string for fine-grained control of the 'font-variation-settings' CSS property."),
                },
                {
                    type: 'string',
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontVariationSettings', "Explicit 'font-variation-settings' CSS property. A boolean can be passed instead if one only needs to translate font-weight to font-variation-settings.")
                }
            ],
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontVariationsGeneral', "Configures font variations. Can be either a boolean to enable/disable the translation from font-weight to font-variation-settings or a string for the value of the CSS 'font-variation-settings' property."),
            default: false
        });
    }
    validate(input) {
        if (typeof input === 'undefined') {
            return this.defaultValue;
        }
        if (typeof input === 'string') {
            if (input === 'false') {
                return EditorFontVariations.OFF;
            }
            if (input === 'true') {
                return EditorFontVariations.TRANSLATE;
            }
            return input;
        }
        if (Boolean(input)) {
            return EditorFontVariations.TRANSLATE;
        }
        return EditorFontVariations.OFF;
    }
    compute(env, options, value) {
        // The value is computed from the fontWeight if it is true.
        // So take the result from env.fontInfo
        return env.fontInfo.fontVariationSettings;
    }
}
// Text is laid out using default settings.
EditorFontVariations.OFF = 'normal';
// Translate `fontWeight` config to the `font-variation-settings` CSS property.
EditorFontVariations.TRANSLATE = 'translate';
//#endregion
//#region fontInfo
class EditorFontInfo extends ComputedEditorOption {
    constructor() {
        super(48 /* EditorOption.fontInfo */);
    }
    compute(env, options, _) {
        return env.fontInfo;
    }
}
//#endregion
//#region fontSize
class EditorFontSize extends SimpleEditorOption {
    constructor() {
        super(50 /* EditorOption.fontSize */, 'fontSize', EDITOR_FONT_DEFAULTS.fontSize, {
            type: 'number',
            minimum: 6,
            maximum: 100,
            default: EDITOR_FONT_DEFAULTS.fontSize,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontSize', "Controls the font size in pixels.")
        });
    }
    validate(input) {
        const r = EditorFloatOption.float(input, this.defaultValue);
        if (r === 0) {
            return EDITOR_FONT_DEFAULTS.fontSize;
        }
        return EditorFloatOption.clamp(r, 6, 100);
    }
    compute(env, options, value) {
        // The final fontSize respects the editor zoom level.
        // So take the result from env.fontInfo
        return env.fontInfo.fontSize;
    }
}
//#endregion
//#region fontWeight
class EditorFontWeight extends BaseEditorOption {
    constructor() {
        super(51 /* EditorOption.fontWeight */, 'fontWeight', EDITOR_FONT_DEFAULTS.fontWeight, {
            anyOf: [
                {
                    type: 'number',
                    minimum: EditorFontWeight.MINIMUM_VALUE,
                    maximum: EditorFontWeight.MAXIMUM_VALUE,
                    errorMessage: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontWeightErrorMessage', "Only \"normal\" and \"bold\" keywords or numbers between 1 and 1000 are allowed.")
                },
                {
                    type: 'string',
                    pattern: '^(normal|bold|1000|[1-9][0-9]{0,2})$'
                },
                {
                    enum: EditorFontWeight.SUGGESTION_VALUES
                }
            ],
            default: EDITOR_FONT_DEFAULTS.fontWeight,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontWeight', "Controls the font weight. Accepts \"normal\" and \"bold\" keywords or numbers between 1 and 1000.")
        });
    }
    validate(input) {
        if (input === 'normal' || input === 'bold') {
            return input;
        }
        return String(EditorIntOption.clampedInt(input, EDITOR_FONT_DEFAULTS.fontWeight, EditorFontWeight.MINIMUM_VALUE, EditorFontWeight.MAXIMUM_VALUE));
    }
}
EditorFontWeight.SUGGESTION_VALUES = ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
EditorFontWeight.MINIMUM_VALUE = 1;
EditorFontWeight.MAXIMUM_VALUE = 1000;
class EditorGoToLocation extends BaseEditorOption {
    constructor() {
        const defaults = {
            multiple: 'peek',
            multipleDefinitions: 'peek',
            multipleTypeDefinitions: 'peek',
            multipleDeclarations: 'peek',
            multipleImplementations: 'peek',
            multipleReferences: 'peek',
            alternativeDefinitionCommand: 'editor.action.goToReferences',
            alternativeTypeDefinitionCommand: 'editor.action.goToReferences',
            alternativeDeclarationCommand: 'editor.action.goToReferences',
            alternativeImplementationCommand: '',
            alternativeReferenceCommand: '',
        };
        const jsonSubset = {
            type: 'string',
            enum: ['peek', 'gotoAndPeek', 'goto'],
            default: defaults.multiple,
            enumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.gotoLocation.multiple.peek', 'Show Peek view of the results (default)'),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.gotoLocation.multiple.gotoAndPeek', 'Go to the primary result and show a Peek view'),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.gotoLocation.multiple.goto', 'Go to the primary result and enable Peek-less navigation to others')
            ]
        };
        const alternativeCommandOptions = ['', 'editor.action.referenceSearch.trigger', 'editor.action.goToReferences', 'editor.action.peekImplementation', 'editor.action.goToImplementation', 'editor.action.peekTypeDefinition', 'editor.action.goToTypeDefinition', 'editor.action.peekDeclaration', 'editor.action.revealDeclaration', 'editor.action.peekDefinition', 'editor.action.revealDefinitionAside', 'editor.action.revealDefinition'];
        super(56 /* EditorOption.gotoLocation */, 'gotoLocation', defaults, {
            'editor.gotoLocation.multiple': {
                deprecationMessage: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.gotoLocation.multiple.deprecated', "This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead."),
            },
            'editor.gotoLocation.multipleDefinitions': Object.assign({ description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.editor.gotoLocation.multipleDefinitions', "Controls the behavior the 'Go to Definition'-command when multiple target locations exist.") }, jsonSubset),
            'editor.gotoLocation.multipleTypeDefinitions': Object.assign({ description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.editor.gotoLocation.multipleTypeDefinitions', "Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.") }, jsonSubset),
            'editor.gotoLocation.multipleDeclarations': Object.assign({ description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.editor.gotoLocation.multipleDeclarations', "Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.") }, jsonSubset),
            'editor.gotoLocation.multipleImplementations': Object.assign({ description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.editor.gotoLocation.multipleImplemenattions', "Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.") }, jsonSubset),
            'editor.gotoLocation.multipleReferences': Object.assign({ description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.editor.gotoLocation.multipleReferences', "Controls the behavior the 'Go to References'-command when multiple target locations exist.") }, jsonSubset),
            'editor.gotoLocation.alternativeDefinitionCommand': {
                type: 'string',
                default: defaults.alternativeDefinitionCommand,
                enum: alternativeCommandOptions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('alternativeDefinitionCommand', "Alternative command id that is being executed when the result of 'Go to Definition' is the current location.")
            },
            'editor.gotoLocation.alternativeTypeDefinitionCommand': {
                type: 'string',
                default: defaults.alternativeTypeDefinitionCommand,
                enum: alternativeCommandOptions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('alternativeTypeDefinitionCommand', "Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.")
            },
            'editor.gotoLocation.alternativeDeclarationCommand': {
                type: 'string',
                default: defaults.alternativeDeclarationCommand,
                enum: alternativeCommandOptions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('alternativeDeclarationCommand', "Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.")
            },
            'editor.gotoLocation.alternativeImplementationCommand': {
                type: 'string',
                default: defaults.alternativeImplementationCommand,
                enum: alternativeCommandOptions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('alternativeImplementationCommand', "Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.")
            },
            'editor.gotoLocation.alternativeReferenceCommand': {
                type: 'string',
                default: defaults.alternativeReferenceCommand,
                enum: alternativeCommandOptions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('alternativeReferenceCommand', "Alternative command id that is being executed when the result of 'Go to Reference' is the current location.")
            },
        });
    }
    validate(_input) {
        var _a, _b, _c, _d, _e;
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            multiple: stringSet(input.multiple, this.defaultValue.multiple, ['peek', 'gotoAndPeek', 'goto']),
            multipleDefinitions: (_a = input.multipleDefinitions) !== null && _a !== void 0 ? _a : stringSet(input.multipleDefinitions, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleTypeDefinitions: (_b = input.multipleTypeDefinitions) !== null && _b !== void 0 ? _b : stringSet(input.multipleTypeDefinitions, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleDeclarations: (_c = input.multipleDeclarations) !== null && _c !== void 0 ? _c : stringSet(input.multipleDeclarations, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleImplementations: (_d = input.multipleImplementations) !== null && _d !== void 0 ? _d : stringSet(input.multipleImplementations, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            multipleReferences: (_e = input.multipleReferences) !== null && _e !== void 0 ? _e : stringSet(input.multipleReferences, 'peek', ['peek', 'gotoAndPeek', 'goto']),
            alternativeDefinitionCommand: EditorStringOption.string(input.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
            alternativeTypeDefinitionCommand: EditorStringOption.string(input.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
            alternativeDeclarationCommand: EditorStringOption.string(input.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
            alternativeImplementationCommand: EditorStringOption.string(input.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
            alternativeReferenceCommand: EditorStringOption.string(input.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand),
        };
    }
}
class EditorHover extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            delay: 300,
            sticky: true,
            above: true,
        };
        super(58 /* EditorOption.hover */, 'hover', defaults, {
            'editor.hover.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('hover.enabled', "Controls whether the hover is shown.")
            },
            'editor.hover.delay': {
                type: 'number',
                default: defaults.delay,
                minimum: 0,
                maximum: 10000,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('hover.delay', "Controls the delay in milliseconds after which the hover is shown.")
            },
            'editor.hover.sticky': {
                type: 'boolean',
                default: defaults.sticky,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('hover.sticky', "Controls whether the hover should remain visible when mouse is moved over it.")
            },
            'editor.hover.above': {
                type: 'boolean',
                default: defaults.above,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('hover.above', "Prefer showing hovers above the line, if there's space.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            delay: EditorIntOption.clampedInt(input.delay, this.defaultValue.delay, 0, 10000),
            sticky: boolean(input.sticky, this.defaultValue.sticky),
            above: boolean(input.above, this.defaultValue.above),
        };
    }
}
/**
 * @internal
 */
class EditorLayoutInfoComputer extends ComputedEditorOption {
    constructor() {
        super(140 /* EditorOption.layoutInfo */);
    }
    compute(env, options, _) {
        return EditorLayoutInfoComputer.computeLayout(options, {
            memory: env.memory,
            outerWidth: env.outerWidth,
            outerHeight: env.outerHeight,
            isDominatedByLongLines: env.isDominatedByLongLines,
            lineHeight: env.fontInfo.lineHeight,
            viewLineCount: env.viewLineCount,
            lineNumbersDigitCount: env.lineNumbersDigitCount,
            typicalHalfwidthCharacterWidth: env.fontInfo.typicalHalfwidthCharacterWidth,
            maxDigitWidth: env.fontInfo.maxDigitWidth,
            pixelRatio: env.pixelRatio,
            glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount
        });
    }
    static computeContainedMinimapLineCount(input) {
        const typicalViewportLineCount = input.height / input.lineHeight;
        const extraLinesBeforeFirstLine = Math.floor(input.paddingTop / input.lineHeight);
        let extraLinesBeyondLastLine = Math.floor(input.paddingBottom / input.lineHeight);
        if (input.scrollBeyondLastLine) {
            extraLinesBeyondLastLine = Math.max(extraLinesBeyondLastLine, typicalViewportLineCount - 1);
        }
        const desiredRatio = (extraLinesBeforeFirstLine + input.viewLineCount + extraLinesBeyondLastLine) / (input.pixelRatio * input.height);
        const minimapLineCount = Math.floor(input.viewLineCount / desiredRatio);
        return { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount };
    }
    static _computeMinimapLayout(input, memory) {
        const outerWidth = input.outerWidth;
        const outerHeight = input.outerHeight;
        const pixelRatio = input.pixelRatio;
        if (!input.minimap.enabled) {
            return {
                renderMinimap: 0 /* RenderMinimap.None */,
                minimapLeft: 0,
                minimapWidth: 0,
                minimapHeightIsEditorHeight: false,
                minimapIsSampling: false,
                minimapScale: 1,
                minimapLineHeight: 1,
                minimapCanvasInnerWidth: 0,
                minimapCanvasInnerHeight: Math.floor(pixelRatio * outerHeight),
                minimapCanvasOuterWidth: 0,
                minimapCanvasOuterHeight: outerHeight,
            };
        }
        // Can use memory if only the `viewLineCount` and `remainingWidth` have changed
        const stableMinimapLayoutInput = memory.stableMinimapLayoutInput;
        const couldUseMemory = (stableMinimapLayoutInput
            // && input.outerWidth === lastMinimapLayoutInput.outerWidth !!! INTENTIONAL OMITTED
            && input.outerHeight === stableMinimapLayoutInput.outerHeight
            && input.lineHeight === stableMinimapLayoutInput.lineHeight
            && input.typicalHalfwidthCharacterWidth === stableMinimapLayoutInput.typicalHalfwidthCharacterWidth
            && input.pixelRatio === stableMinimapLayoutInput.pixelRatio
            && input.scrollBeyondLastLine === stableMinimapLayoutInput.scrollBeyondLastLine
            && input.paddingTop === stableMinimapLayoutInput.paddingTop
            && input.paddingBottom === stableMinimapLayoutInput.paddingBottom
            && input.minimap.enabled === stableMinimapLayoutInput.minimap.enabled
            && input.minimap.side === stableMinimapLayoutInput.minimap.side
            && input.minimap.size === stableMinimapLayoutInput.minimap.size
            && input.minimap.showSlider === stableMinimapLayoutInput.minimap.showSlider
            && input.minimap.renderCharacters === stableMinimapLayoutInput.minimap.renderCharacters
            && input.minimap.maxColumn === stableMinimapLayoutInput.minimap.maxColumn
            && input.minimap.scale === stableMinimapLayoutInput.minimap.scale
            && input.verticalScrollbarWidth === stableMinimapLayoutInput.verticalScrollbarWidth
            // && input.viewLineCount === lastMinimapLayoutInput.viewLineCount !!! INTENTIONAL OMITTED
            // && input.remainingWidth === lastMinimapLayoutInput.remainingWidth !!! INTENTIONAL OMITTED
            && input.isViewportWrapping === stableMinimapLayoutInput.isViewportWrapping);
        const lineHeight = input.lineHeight;
        const typicalHalfwidthCharacterWidth = input.typicalHalfwidthCharacterWidth;
        const scrollBeyondLastLine = input.scrollBeyondLastLine;
        const minimapRenderCharacters = input.minimap.renderCharacters;
        let minimapScale = (pixelRatio >= 2 ? Math.round(input.minimap.scale * 2) : input.minimap.scale);
        const minimapMaxColumn = input.minimap.maxColumn;
        const minimapSize = input.minimap.size;
        const minimapSide = input.minimap.side;
        const verticalScrollbarWidth = input.verticalScrollbarWidth;
        const viewLineCount = input.viewLineCount;
        const remainingWidth = input.remainingWidth;
        const isViewportWrapping = input.isViewportWrapping;
        const baseCharHeight = minimapRenderCharacters ? 2 : 3;
        let minimapCanvasInnerHeight = Math.floor(pixelRatio * outerHeight);
        const minimapCanvasOuterHeight = minimapCanvasInnerHeight / pixelRatio;
        let minimapHeightIsEditorHeight = false;
        let minimapIsSampling = false;
        let minimapLineHeight = baseCharHeight * minimapScale;
        let minimapCharWidth = minimapScale / pixelRatio;
        let minimapWidthMultiplier = 1;
        if (minimapSize === 'fill' || minimapSize === 'fit') {
            const { typicalViewportLineCount, extraLinesBeforeFirstLine, extraLinesBeyondLastLine, desiredRatio, minimapLineCount } = EditorLayoutInfoComputer.computeContainedMinimapLineCount({
                viewLineCount: viewLineCount,
                scrollBeyondLastLine: scrollBeyondLastLine,
                paddingTop: input.paddingTop,
                paddingBottom: input.paddingBottom,
                height: outerHeight,
                lineHeight: lineHeight,
                pixelRatio: pixelRatio
            });
            // ratio is intentionally not part of the layout to avoid the layout changing all the time
            // when doing sampling
            const ratio = viewLineCount / minimapLineCount;
            if (ratio > 1) {
                minimapHeightIsEditorHeight = true;
                minimapIsSampling = true;
                minimapScale = 1;
                minimapLineHeight = 1;
                minimapCharWidth = minimapScale / pixelRatio;
            }
            else {
                let fitBecomesFill = false;
                let maxMinimapScale = minimapScale + 1;
                if (minimapSize === 'fit') {
                    const effectiveMinimapHeight = Math.ceil((extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine) * minimapLineHeight);
                    if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
                        // There is a loop when using `fit` and viewport wrapping:
                        // - view line count impacts minimap layout
                        // - minimap layout impacts viewport width
                        // - viewport width impacts view line count
                        // To break the loop, once we go to a smaller minimap scale, we try to stick with it.
                        fitBecomesFill = true;
                        maxMinimapScale = memory.stableFitMaxMinimapScale;
                    }
                    else {
                        fitBecomesFill = (effectiveMinimapHeight > minimapCanvasInnerHeight);
                    }
                }
                if (minimapSize === 'fill' || fitBecomesFill) {
                    minimapHeightIsEditorHeight = true;
                    const configuredMinimapScale = minimapScale;
                    minimapLineHeight = Math.min(lineHeight * pixelRatio, Math.max(1, Math.floor(1 / desiredRatio)));
                    if (isViewportWrapping && couldUseMemory && remainingWidth <= memory.stableFitRemainingWidth) {
                        // There is a loop when using `fill` and viewport wrapping:
                        // - view line count impacts minimap layout
                        // - minimap layout impacts viewport width
                        // - viewport width impacts view line count
                        // To break the loop, once we go to a smaller minimap scale, we try to stick with it.
                        maxMinimapScale = memory.stableFitMaxMinimapScale;
                    }
                    minimapScale = Math.min(maxMinimapScale, Math.max(1, Math.floor(minimapLineHeight / baseCharHeight)));
                    if (minimapScale > configuredMinimapScale) {
                        minimapWidthMultiplier = Math.min(2, minimapScale / configuredMinimapScale);
                    }
                    minimapCharWidth = minimapScale / pixelRatio / minimapWidthMultiplier;
                    minimapCanvasInnerHeight = Math.ceil((Math.max(typicalViewportLineCount, extraLinesBeforeFirstLine + viewLineCount + extraLinesBeyondLastLine)) * minimapLineHeight);
                    if (isViewportWrapping) {
                        // remember for next time
                        memory.stableMinimapLayoutInput = input;
                        memory.stableFitRemainingWidth = remainingWidth;
                        memory.stableFitMaxMinimapScale = minimapScale;
                    }
                    else {
                        memory.stableMinimapLayoutInput = null;
                        memory.stableFitRemainingWidth = 0;
                    }
                }
            }
        }
        // Given:
        // (leaving 2px for the cursor to have space after the last character)
        // viewportColumn = (contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth
        // minimapWidth = viewportColumn * minimapCharWidth
        // contentWidth = remainingWidth - minimapWidth
        // What are good values for contentWidth and minimapWidth ?
        // minimapWidth = ((contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth) * minimapCharWidth
        // typicalHalfwidthCharacterWidth * minimapWidth = (contentWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // typicalHalfwidthCharacterWidth * minimapWidth = (remainingWidth - minimapWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // (typicalHalfwidthCharacterWidth + minimapCharWidth) * minimapWidth = (remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth
        // minimapWidth = ((remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth) / (typicalHalfwidthCharacterWidth + minimapCharWidth)
        const minimapMaxWidth = Math.floor(minimapMaxColumn * minimapCharWidth);
        const minimapWidth = Math.min(minimapMaxWidth, Math.max(0, Math.floor(((remainingWidth - verticalScrollbarWidth - 2) * minimapCharWidth) / (typicalHalfwidthCharacterWidth + minimapCharWidth))) + MINIMAP_GUTTER_WIDTH);
        let minimapCanvasInnerWidth = Math.floor(pixelRatio * minimapWidth);
        const minimapCanvasOuterWidth = minimapCanvasInnerWidth / pixelRatio;
        minimapCanvasInnerWidth = Math.floor(minimapCanvasInnerWidth * minimapWidthMultiplier);
        const renderMinimap = (minimapRenderCharacters ? 1 /* RenderMinimap.Text */ : 2 /* RenderMinimap.Blocks */);
        const minimapLeft = (minimapSide === 'left' ? 0 : (outerWidth - minimapWidth - verticalScrollbarWidth));
        return {
            renderMinimap,
            minimapLeft,
            minimapWidth,
            minimapHeightIsEditorHeight,
            minimapIsSampling,
            minimapScale,
            minimapLineHeight,
            minimapCanvasInnerWidth,
            minimapCanvasInnerHeight,
            minimapCanvasOuterWidth,
            minimapCanvasOuterHeight,
        };
    }
    static computeLayout(options, env) {
        const outerWidth = env.outerWidth | 0;
        const outerHeight = env.outerHeight | 0;
        const lineHeight = env.lineHeight | 0;
        const lineNumbersDigitCount = env.lineNumbersDigitCount | 0;
        const typicalHalfwidthCharacterWidth = env.typicalHalfwidthCharacterWidth;
        const maxDigitWidth = env.maxDigitWidth;
        const pixelRatio = env.pixelRatio;
        const viewLineCount = env.viewLineCount;
        const wordWrapOverride2 = options.get(132 /* EditorOption.wordWrapOverride2 */);
        const wordWrapOverride1 = (wordWrapOverride2 === 'inherit' ? options.get(131 /* EditorOption.wordWrapOverride1 */) : wordWrapOverride2);
        const wordWrap = (wordWrapOverride1 === 'inherit' ? options.get(127 /* EditorOption.wordWrap */) : wordWrapOverride1);
        const wordWrapColumn = options.get(130 /* EditorOption.wordWrapColumn */);
        const isDominatedByLongLines = env.isDominatedByLongLines;
        const showGlyphMargin = options.get(55 /* EditorOption.glyphMargin */);
        const showLineNumbers = (options.get(65 /* EditorOption.lineNumbers */).renderType !== 0 /* RenderLineNumbersType.Off */);
        const lineNumbersMinChars = options.get(66 /* EditorOption.lineNumbersMinChars */);
        const scrollBeyondLastLine = options.get(101 /* EditorOption.scrollBeyondLastLine */);
        const padding = options.get(81 /* EditorOption.padding */);
        const minimap = options.get(70 /* EditorOption.minimap */);
        const scrollbar = options.get(99 /* EditorOption.scrollbar */);
        const verticalScrollbarWidth = scrollbar.verticalScrollbarSize;
        const verticalScrollbarHasArrows = scrollbar.verticalHasArrows;
        const scrollbarArrowSize = scrollbar.arrowSize;
        const horizontalScrollbarHeight = scrollbar.horizontalScrollbarSize;
        const folding = options.get(41 /* EditorOption.folding */);
        const showFoldingDecoration = options.get(106 /* EditorOption.showFoldingControls */) !== 'never';
        let lineDecorationsWidth = options.get(63 /* EditorOption.lineDecorationsWidth */);
        if (folding && showFoldingDecoration) {
            lineDecorationsWidth += 16;
        }
        let lineNumbersWidth = 0;
        if (showLineNumbers) {
            const digitCount = Math.max(lineNumbersDigitCount, lineNumbersMinChars);
            lineNumbersWidth = Math.round(digitCount * maxDigitWidth);
        }
        let glyphMarginWidth = 0;
        if (showGlyphMargin) {
            glyphMarginWidth = lineHeight * env.glyphMarginDecorationLaneCount;
        }
        let glyphMarginLeft = 0;
        let lineNumbersLeft = glyphMarginLeft + glyphMarginWidth;
        let decorationsLeft = lineNumbersLeft + lineNumbersWidth;
        let contentLeft = decorationsLeft + lineDecorationsWidth;
        const remainingWidth = outerWidth - glyphMarginWidth - lineNumbersWidth - lineDecorationsWidth;
        let isWordWrapMinified = false;
        let isViewportWrapping = false;
        let wrappingColumn = -1;
        if (wordWrapOverride1 === 'inherit' && isDominatedByLongLines) {
            // Force viewport width wrapping if model is dominated by long lines
            isWordWrapMinified = true;
            isViewportWrapping = true;
        }
        else if (wordWrap === 'on' || wordWrap === 'bounded') {
            isViewportWrapping = true;
        }
        else if (wordWrap === 'wordWrapColumn') {
            wrappingColumn = wordWrapColumn;
        }
        const minimapLayout = EditorLayoutInfoComputer._computeMinimapLayout({
            outerWidth: outerWidth,
            outerHeight: outerHeight,
            lineHeight: lineHeight,
            typicalHalfwidthCharacterWidth: typicalHalfwidthCharacterWidth,
            pixelRatio: pixelRatio,
            scrollBeyondLastLine: scrollBeyondLastLine,
            paddingTop: padding.top,
            paddingBottom: padding.bottom,
            minimap: minimap,
            verticalScrollbarWidth: verticalScrollbarWidth,
            viewLineCount: viewLineCount,
            remainingWidth: remainingWidth,
            isViewportWrapping: isViewportWrapping,
        }, env.memory || new ComputeOptionsMemory());
        if (minimapLayout.renderMinimap !== 0 /* RenderMinimap.None */ && minimapLayout.minimapLeft === 0) {
            // the minimap is rendered to the left, so move everything to the right
            glyphMarginLeft += minimapLayout.minimapWidth;
            lineNumbersLeft += minimapLayout.minimapWidth;
            decorationsLeft += minimapLayout.minimapWidth;
            contentLeft += minimapLayout.minimapWidth;
        }
        const contentWidth = remainingWidth - minimapLayout.minimapWidth;
        // (leaving 2px for the cursor to have space after the last character)
        const viewportColumn = Math.max(1, Math.floor((contentWidth - verticalScrollbarWidth - 2) / typicalHalfwidthCharacterWidth));
        const verticalArrowSize = (verticalScrollbarHasArrows ? scrollbarArrowSize : 0);
        if (isViewportWrapping) {
            // compute the actual wrappingColumn
            wrappingColumn = Math.max(1, viewportColumn);
            if (wordWrap === 'bounded') {
                wrappingColumn = Math.min(wrappingColumn, wordWrapColumn);
            }
        }
        return {
            width: outerWidth,
            height: outerHeight,
            glyphMarginLeft: glyphMarginLeft,
            glyphMarginWidth: glyphMarginWidth,
            glyphMarginDecorationLaneCount: env.glyphMarginDecorationLaneCount,
            lineNumbersLeft: lineNumbersLeft,
            lineNumbersWidth: lineNumbersWidth,
            decorationsLeft: decorationsLeft,
            decorationsWidth: lineDecorationsWidth,
            contentLeft: contentLeft,
            contentWidth: contentWidth,
            minimap: minimapLayout,
            viewportColumn: viewportColumn,
            isWordWrapMinified: isWordWrapMinified,
            isViewportWrapping: isViewportWrapping,
            wrappingColumn: wrappingColumn,
            verticalScrollbarWidth: verticalScrollbarWidth,
            horizontalScrollbarHeight: horizontalScrollbarHeight,
            overviewRuler: {
                top: verticalArrowSize,
                width: verticalScrollbarWidth,
                height: (outerHeight - 2 * verticalArrowSize),
                right: 0
            }
        };
    }
}
//#endregion
//#region WrappingStrategy
class WrappingStrategy extends BaseEditorOption {
    constructor() {
        super(134 /* EditorOption.wrappingStrategy */, 'wrappingStrategy', 'simple', {
            'editor.wrappingStrategy': {
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingStrategy.simple', "Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingStrategy.advanced', "Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.")
                ],
                type: 'string',
                enum: ['simple', 'advanced'],
                default: 'simple',
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingStrategy', "Controls the algorithm that computes wrapping points. Note that when in accessibility mode, advanced will be used for the best experience.")
            }
        });
    }
    validate(input) {
        return stringSet(input, 'simple', ['simple', 'advanced']);
    }
    compute(env, options, value) {
        const accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        if (accessibilitySupport === 2 /* AccessibilitySupport.Enabled */) {
            // if we know for a fact that a screen reader is attached, we switch our strategy to advanced to
            // help that the editor's wrapping points match the textarea's wrapping points
            return 'advanced';
        }
        return value;
    }
}
class EditorLightbulb extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true };
        super(62 /* EditorOption.lightbulb */, 'lightbulb', defaults, {
            'editor.lightbulb.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('codeActions', "Enables the Code Action lightbulb in the editor.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled)
        };
    }
}
class EditorStickyScroll extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: false, maxLineCount: 5, defaultModel: 'outlineModel' };
        super(111 /* EditorOption.stickyScroll */, 'stickyScroll', defaults, {
            'editor.stickyScroll.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.stickyScroll.enabled', "Shows the nested current scopes during the scroll at the top of the editor.")
            },
            'editor.stickyScroll.maxLineCount': {
                type: 'number',
                default: defaults.maxLineCount,
                minimum: 1,
                maximum: 10,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.stickyScroll.maxLineCount', "Defines the maximum number of sticky lines to show.")
            },
            'editor.stickyScroll.defaultModel': {
                type: 'string',
                enum: ['outlineModel', 'foldingProviderModel', 'indentationModel'],
                default: defaults.defaultModel,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.stickyScroll.defaultModel', "Defines the model to use for determining which lines to stick. If the outline model does not exist, it will fall back on the folding provider model which falls back on the indentation model. This order is respected in all three cases.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            maxLineCount: EditorIntOption.clampedInt(input.maxLineCount, this.defaultValue.maxLineCount, 1, 10),
            defaultModel: stringSet(input.defaultModel, this.defaultValue.defaultModel, ['outlineModel', 'foldingProviderModel', 'indentationModel']),
        };
    }
}
class EditorInlayHints extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: 'on', fontSize: 0, fontFamily: '', padding: false };
        super(136 /* EditorOption.inlayHints */, 'inlayHints', defaults, {
            'editor.inlayHints.enabled': {
                type: 'string',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlayHints.enable', "Enables the inlay hints in the editor."),
                enum: ['on', 'onUnlessPressed', 'offUnlessPressed', 'off'],
                markdownEnumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.inlayHints.on', "Inlay hints are enabled"),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.inlayHints.onUnlessPressed', "Inlay hints are showing by default and hide when holding {0}", _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz ? `Ctrl+Option` : `Ctrl+Alt`),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.inlayHints.offUnlessPressed', "Inlay hints are hidden by default and show when holding {0}", _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz ? `Ctrl+Option` : `Ctrl+Alt`),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.inlayHints.off', "Inlay hints are disabled"),
                ],
            },
            'editor.inlayHints.fontSize': {
                type: 'number',
                default: defaults.fontSize,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlayHints.fontSize', "Controls font size of inlay hints in the editor. As default the {0} is used when the configured value is less than {1} or greater than the editor font size.", '`#editor.fontSize#`', '`5`')
            },
            'editor.inlayHints.fontFamily': {
                type: 'string',
                default: defaults.fontFamily,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlayHints.fontFamily', "Controls font family of inlay hints in the editor. When set to empty, the {0} is used.", '`#editor.fontFamily#`')
            },
            'editor.inlayHints.padding': {
                type: 'boolean',
                default: defaults.padding,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlayHints.padding', "Enables the padding around the inlay hints in the editor.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        if (typeof input.enabled === 'boolean') {
            input.enabled = input.enabled ? 'on' : 'off';
        }
        return {
            enabled: stringSet(input.enabled, this.defaultValue.enabled, ['on', 'off', 'offUnlessPressed', 'onUnlessPressed']),
            fontSize: EditorIntOption.clampedInt(input.fontSize, this.defaultValue.fontSize, 0, 100),
            fontFamily: EditorStringOption.string(input.fontFamily, this.defaultValue.fontFamily),
            padding: boolean(input.padding, this.defaultValue.padding)
        };
    }
}
//#endregion
//#region lineDecorationsWidth
class EditorLineDecorationsWidth extends BaseEditorOption {
    constructor() {
        super(63 /* EditorOption.lineDecorationsWidth */, 'lineDecorationsWidth', 10);
    }
    validate(input) {
        if (typeof input === 'string' && /^\d+(\.\d+)?ch$/.test(input)) {
            const multiple = parseFloat(input.substring(0, input.length - 2));
            return -multiple; // negative numbers signal a multiple
        }
        else {
            return EditorIntOption.clampedInt(input, this.defaultValue, 0, 1000);
        }
    }
    compute(env, options, value) {
        if (value < 0) {
            // negative numbers signal a multiple
            return EditorIntOption.clampedInt(-value * env.fontInfo.typicalHalfwidthCharacterWidth, this.defaultValue, 0, 1000);
        }
        else {
            return value;
        }
    }
}
//#endregion
//#region lineHeight
class EditorLineHeight extends EditorFloatOption {
    constructor() {
        super(64 /* EditorOption.lineHeight */, 'lineHeight', EDITOR_FONT_DEFAULTS.lineHeight, x => EditorFloatOption.clamp(x, 0, 150), { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineHeight', "Controls the line height. \n - Use 0 to automatically compute the line height from the font size.\n - Values between 0 and 8 will be used as a multiplier with the font size.\n - Values greater than or equal to 8 will be used as effective values.") });
    }
    compute(env, options, value) {
        // The lineHeight is computed from the fontSize if it is 0.
        // Moreover, the final lineHeight respects the editor zoom level.
        // So take the result from env.fontInfo
        return env.fontInfo.lineHeight;
    }
}
class EditorMinimap extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            size: 'proportional',
            side: 'right',
            showSlider: 'mouseover',
            autohide: false,
            renderCharacters: true,
            maxColumn: 120,
            scale: 1,
        };
        super(70 /* EditorOption.minimap */, 'minimap', defaults, {
            'editor.minimap.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.enabled', "Controls whether the minimap is shown.")
            },
            'editor.minimap.autohide': {
                type: 'boolean',
                default: defaults.autohide,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.autohide', "Controls whether the minimap is hidden automatically.")
            },
            'editor.minimap.size': {
                type: 'string',
                enum: ['proportional', 'fill', 'fit'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.size.proportional', "The minimap has the same size as the editor contents (and might scroll)."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.size.fill', "The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling)."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.size.fit', "The minimap will shrink as necessary to never be larger than the editor (no scrolling)."),
                ],
                default: defaults.size,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.size', "Controls the size of the minimap.")
            },
            'editor.minimap.side': {
                type: 'string',
                enum: ['left', 'right'],
                default: defaults.side,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.side', "Controls the side where to render the minimap.")
            },
            'editor.minimap.showSlider': {
                type: 'string',
                enum: ['always', 'mouseover'],
                default: defaults.showSlider,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.showSlider', "Controls when the minimap slider is shown.")
            },
            'editor.minimap.scale': {
                type: 'number',
                default: defaults.scale,
                minimum: 1,
                maximum: 3,
                enum: [1, 2, 3],
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.scale', "Scale of content drawn in the minimap: 1, 2 or 3.")
            },
            'editor.minimap.renderCharacters': {
                type: 'boolean',
                default: defaults.renderCharacters,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.renderCharacters', "Render the actual characters on a line as opposed to color blocks.")
            },
            'editor.minimap.maxColumn': {
                type: 'number',
                default: defaults.maxColumn,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('minimap.maxColumn', "Limit the width of the minimap to render at most a certain number of columns.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            autohide: boolean(input.autohide, this.defaultValue.autohide),
            size: stringSet(input.size, this.defaultValue.size, ['proportional', 'fill', 'fit']),
            side: stringSet(input.side, this.defaultValue.side, ['right', 'left']),
            showSlider: stringSet(input.showSlider, this.defaultValue.showSlider, ['always', 'mouseover']),
            renderCharacters: boolean(input.renderCharacters, this.defaultValue.renderCharacters),
            scale: EditorIntOption.clampedInt(input.scale, 1, 1, 3),
            maxColumn: EditorIntOption.clampedInt(input.maxColumn, this.defaultValue.maxColumn, 1, 10000),
        };
    }
}
//#endregion
//#region multiCursorModifier
function _multiCursorModifierFromString(multiCursorModifier) {
    if (multiCursorModifier === 'ctrlCmd') {
        return (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz ? 'metaKey' : 'ctrlKey');
    }
    return 'altKey';
}
class EditorPadding extends BaseEditorOption {
    constructor() {
        super(81 /* EditorOption.padding */, 'padding', { top: 0, bottom: 0 }, {
            'editor.padding.top': {
                type: 'number',
                default: 0,
                minimum: 0,
                maximum: 1000,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('padding.top', "Controls the amount of space between the top edge of the editor and the first line.")
            },
            'editor.padding.bottom': {
                type: 'number',
                default: 0,
                minimum: 0,
                maximum: 1000,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('padding.bottom', "Controls the amount of space between the bottom edge of the editor and the last line.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            top: EditorIntOption.clampedInt(input.top, 0, 0, 1000),
            bottom: EditorIntOption.clampedInt(input.bottom, 0, 0, 1000)
        };
    }
}
class EditorParameterHints extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            cycle: true
        };
        super(83 /* EditorOption.parameterHints */, 'parameterHints', defaults, {
            'editor.parameterHints.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('parameterHints.enabled', "Enables a pop-up that shows parameter documentation and type information as you type.")
            },
            'editor.parameterHints.cycle': {
                type: 'boolean',
                default: defaults.cycle,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('parameterHints.cycle', "Controls whether the parameter hints menu cycles or closes when reaching the end of the list.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            cycle: boolean(input.cycle, this.defaultValue.cycle)
        };
    }
}
//#endregion
//#region pixelRatio
class EditorPixelRatio extends ComputedEditorOption {
    constructor() {
        super(138 /* EditorOption.pixelRatio */);
    }
    compute(env, options, _) {
        return env.pixelRatio;
    }
}
class EditorQuickSuggestions extends BaseEditorOption {
    constructor() {
        const defaults = {
            other: 'on',
            comments: 'off',
            strings: 'off'
        };
        const types = [
            { type: 'boolean' },
            {
                type: 'string',
                enum: ['on', 'inline', 'off'],
                enumDescriptions: [_nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('on', "Quick suggestions show inside the suggest widget"), _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inline', "Quick suggestions show as ghost text"), _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('off', "Quick suggestions are disabled")]
            }
        ];
        super(86 /* EditorOption.quickSuggestions */, 'quickSuggestions', defaults, {
            type: 'object',
            additionalProperties: false,
            properties: {
                strings: {
                    anyOf: types,
                    default: defaults.strings,
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickSuggestions.strings', "Enable quick suggestions inside strings.")
                },
                comments: {
                    anyOf: types,
                    default: defaults.comments,
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickSuggestions.comments', "Enable quick suggestions inside comments.")
                },
                other: {
                    anyOf: types,
                    default: defaults.other,
                    description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickSuggestions.other', "Enable quick suggestions outside of strings and comments.")
                },
            },
            default: defaults,
            markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickSuggestions', "Controls whether suggestions should automatically show up while typing. This can be controlled for typing in comments, strings, and other code. Quick suggestion can be configured to show as ghost text or with the suggest widget. Also be aware of the '{0}'-setting which controls if suggestions are triggered by special characters.", `#editor.suggestOnTriggerCharacters#`)
        });
        this.defaultValue = defaults;
    }
    validate(input) {
        if (typeof input === 'boolean') {
            // boolean -> all on/off
            const value = input ? 'on' : 'off';
            return { comments: value, strings: value, other: value };
        }
        if (!input || typeof input !== 'object') {
            // invalid object
            return this.defaultValue;
        }
        const { other, comments, strings } = input;
        const allowedValues = ['on', 'inline', 'off'];
        let validatedOther;
        let validatedComments;
        let validatedStrings;
        if (typeof other === 'boolean') {
            validatedOther = other ? 'on' : 'off';
        }
        else {
            validatedOther = stringSet(other, this.defaultValue.other, allowedValues);
        }
        if (typeof comments === 'boolean') {
            validatedComments = comments ? 'on' : 'off';
        }
        else {
            validatedComments = stringSet(comments, this.defaultValue.comments, allowedValues);
        }
        if (typeof strings === 'boolean') {
            validatedStrings = strings ? 'on' : 'off';
        }
        else {
            validatedStrings = stringSet(strings, this.defaultValue.strings, allowedValues);
        }
        return {
            other: validatedOther,
            comments: validatedComments,
            strings: validatedStrings
        };
    }
}
class EditorRenderLineNumbersOption extends BaseEditorOption {
    constructor() {
        super(65 /* EditorOption.lineNumbers */, 'lineNumbers', { renderType: 1 /* RenderLineNumbersType.On */, renderFn: null }, {
            type: 'string',
            enum: ['off', 'on', 'relative', 'interval'],
            enumDescriptions: [
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineNumbers.off', "Line numbers are not rendered."),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineNumbers.on', "Line numbers are rendered as absolute number."),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineNumbers.relative', "Line numbers are rendered as distance in lines to cursor position."),
                _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineNumbers.interval', "Line numbers are rendered every 10 lines.")
            ],
            default: 'on',
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('lineNumbers', "Controls the display of line numbers.")
        });
    }
    validate(lineNumbers) {
        let renderType = this.defaultValue.renderType;
        let renderFn = this.defaultValue.renderFn;
        if (typeof lineNumbers !== 'undefined') {
            if (typeof lineNumbers === 'function') {
                renderType = 4 /* RenderLineNumbersType.Custom */;
                renderFn = lineNumbers;
            }
            else if (lineNumbers === 'interval') {
                renderType = 3 /* RenderLineNumbersType.Interval */;
            }
            else if (lineNumbers === 'relative') {
                renderType = 2 /* RenderLineNumbersType.Relative */;
            }
            else if (lineNumbers === 'on') {
                renderType = 1 /* RenderLineNumbersType.On */;
            }
            else {
                renderType = 0 /* RenderLineNumbersType.Off */;
            }
        }
        return {
            renderType,
            renderFn
        };
    }
}
//#endregion
//#region renderValidationDecorations
/**
 * @internal
 */
function filterValidationDecorations(options) {
    const renderValidationDecorations = options.get(94 /* EditorOption.renderValidationDecorations */);
    if (renderValidationDecorations === 'editable') {
        return options.get(88 /* EditorOption.readOnly */);
    }
    return renderValidationDecorations === 'on' ? false : true;
}
class EditorRulers extends BaseEditorOption {
    constructor() {
        const defaults = [];
        const columnSchema = { type: 'number', description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('rulers.size', "Number of monospace characters at which this editor ruler will render.") };
        super(98 /* EditorOption.rulers */, 'rulers', defaults, {
            type: 'array',
            items: {
                anyOf: [
                    columnSchema,
                    {
                        type: [
                            'object'
                        ],
                        properties: {
                            column: columnSchema,
                            color: {
                                type: 'string',
                                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('rulers.color', "Color of this editor ruler."),
                                format: 'color-hex'
                            }
                        }
                    }
                ]
            },
            default: defaults,
            description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('rulers', "Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.")
        });
    }
    validate(input) {
        if (Array.isArray(input)) {
            const rulers = [];
            for (const _element of input) {
                if (typeof _element === 'number') {
                    rulers.push({
                        column: EditorIntOption.clampedInt(_element, 0, 0, 10000),
                        color: null
                    });
                }
                else if (_element && typeof _element === 'object') {
                    const element = _element;
                    rulers.push({
                        column: EditorIntOption.clampedInt(element.column, 0, 0, 10000),
                        color: element.color
                    });
                }
            }
            rulers.sort((a, b) => a.column - b.column);
            return rulers;
        }
        return this.defaultValue;
    }
}
function _scrollbarVisibilityFromString(visibility, defaultValue) {
    if (typeof visibility !== 'string') {
        return defaultValue;
    }
    switch (visibility) {
        case 'hidden': return 2 /* ScrollbarVisibility.Hidden */;
        case 'visible': return 3 /* ScrollbarVisibility.Visible */;
        default: return 1 /* ScrollbarVisibility.Auto */;
    }
}
class EditorScrollbar extends BaseEditorOption {
    constructor() {
        const defaults = {
            vertical: 1 /* ScrollbarVisibility.Auto */,
            horizontal: 1 /* ScrollbarVisibility.Auto */,
            arrowSize: 11,
            useShadows: true,
            verticalHasArrows: false,
            horizontalHasArrows: false,
            horizontalScrollbarSize: 12,
            horizontalSliderSize: 12,
            verticalScrollbarSize: 14,
            verticalSliderSize: 14,
            handleMouseWheel: true,
            alwaysConsumeMouseWheel: true,
            scrollByPage: false
        };
        super(99 /* EditorOption.scrollbar */, 'scrollbar', defaults, {
            'editor.scrollbar.vertical': {
                type: 'string',
                enum: ['auto', 'visible', 'hidden'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.vertical.auto', "The vertical scrollbar will be visible only when necessary."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.vertical.visible', "The vertical scrollbar will always be visible."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.vertical.fit', "The vertical scrollbar will always be hidden."),
                ],
                default: 'auto',
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.vertical', "Controls the visibility of the vertical scrollbar.")
            },
            'editor.scrollbar.horizontal': {
                type: 'string',
                enum: ['auto', 'visible', 'hidden'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.horizontal.auto', "The horizontal scrollbar will be visible only when necessary."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.horizontal.visible', "The horizontal scrollbar will always be visible."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.horizontal.fit', "The horizontal scrollbar will always be hidden."),
                ],
                default: 'auto',
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.horizontal', "Controls the visibility of the horizontal scrollbar.")
            },
            'editor.scrollbar.verticalScrollbarSize': {
                type: 'number',
                default: defaults.verticalScrollbarSize,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.verticalScrollbarSize', "The width of the vertical scrollbar.")
            },
            'editor.scrollbar.horizontalScrollbarSize': {
                type: 'number',
                default: defaults.horizontalScrollbarSize,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.horizontalScrollbarSize', "The height of the horizontal scrollbar.")
            },
            'editor.scrollbar.scrollByPage': {
                type: 'boolean',
                default: defaults.scrollByPage,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollbar.scrollByPage', "Controls whether clicks scroll by page or jump to click position.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        const horizontalScrollbarSize = EditorIntOption.clampedInt(input.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1000);
        const verticalScrollbarSize = EditorIntOption.clampedInt(input.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1000);
        return {
            arrowSize: EditorIntOption.clampedInt(input.arrowSize, this.defaultValue.arrowSize, 0, 1000),
            vertical: _scrollbarVisibilityFromString(input.vertical, this.defaultValue.vertical),
            horizontal: _scrollbarVisibilityFromString(input.horizontal, this.defaultValue.horizontal),
            useShadows: boolean(input.useShadows, this.defaultValue.useShadows),
            verticalHasArrows: boolean(input.verticalHasArrows, this.defaultValue.verticalHasArrows),
            horizontalHasArrows: boolean(input.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
            handleMouseWheel: boolean(input.handleMouseWheel, this.defaultValue.handleMouseWheel),
            alwaysConsumeMouseWheel: boolean(input.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
            horizontalScrollbarSize: horizontalScrollbarSize,
            horizontalSliderSize: EditorIntOption.clampedInt(input.horizontalSliderSize, horizontalScrollbarSize, 0, 1000),
            verticalScrollbarSize: verticalScrollbarSize,
            verticalSliderSize: EditorIntOption.clampedInt(input.verticalSliderSize, verticalScrollbarSize, 0, 1000),
            scrollByPage: boolean(input.scrollByPage, this.defaultValue.scrollByPage),
        };
    }
}
/**
 * @internal
*/
const inUntrustedWorkspace = 'inUntrustedWorkspace';
/**
 * @internal
 */
const unicodeHighlightConfigKeys = {
    allowedCharacters: 'editor.unicodeHighlight.allowedCharacters',
    invisibleCharacters: 'editor.unicodeHighlight.invisibleCharacters',
    nonBasicASCII: 'editor.unicodeHighlight.nonBasicASCII',
    ambiguousCharacters: 'editor.unicodeHighlight.ambiguousCharacters',
    includeComments: 'editor.unicodeHighlight.includeComments',
    includeStrings: 'editor.unicodeHighlight.includeStrings',
    allowedLocales: 'editor.unicodeHighlight.allowedLocales',
};
class UnicodeHighlight extends BaseEditorOption {
    constructor() {
        const defaults = {
            nonBasicASCII: inUntrustedWorkspace,
            invisibleCharacters: true,
            ambiguousCharacters: true,
            includeComments: inUntrustedWorkspace,
            includeStrings: true,
            allowedCharacters: {},
            allowedLocales: { _os: true, _vscode: true },
        };
        super(121 /* EditorOption.unicodeHighlighting */, 'unicodeHighlight', defaults, {
            [unicodeHighlightConfigKeys.nonBasicASCII]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.nonBasicASCII,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.nonBasicASCII', "Controls whether all non-basic ASCII characters are highlighted. Only characters between U+0020 and U+007E, tab, line-feed and carriage-return are considered basic ASCII.")
            },
            [unicodeHighlightConfigKeys.invisibleCharacters]: {
                restricted: true,
                type: 'boolean',
                default: defaults.invisibleCharacters,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.invisibleCharacters', "Controls whether characters that just reserve space or have no width at all are highlighted.")
            },
            [unicodeHighlightConfigKeys.ambiguousCharacters]: {
                restricted: true,
                type: 'boolean',
                default: defaults.ambiguousCharacters,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.ambiguousCharacters', "Controls whether characters are highlighted that can be confused with basic ASCII characters, except those that are common in the current user locale.")
            },
            [unicodeHighlightConfigKeys.includeComments]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.includeComments,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.includeComments', "Controls whether characters in comments should also be subject to Unicode highlighting.")
            },
            [unicodeHighlightConfigKeys.includeStrings]: {
                restricted: true,
                type: ['boolean', 'string'],
                enum: [true, false, inUntrustedWorkspace],
                default: defaults.includeStrings,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.includeStrings', "Controls whether characters in strings should also be subject to Unicode highlighting.")
            },
            [unicodeHighlightConfigKeys.allowedCharacters]: {
                restricted: true,
                type: 'object',
                default: defaults.allowedCharacters,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.allowedCharacters', "Defines allowed characters that are not being highlighted."),
                additionalProperties: {
                    type: 'boolean'
                }
            },
            [unicodeHighlightConfigKeys.allowedLocales]: {
                restricted: true,
                type: 'object',
                additionalProperties: {
                    type: 'boolean'
                },
                default: defaults.allowedLocales,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unicodeHighlight.allowedLocales', "Unicode characters that are common in allowed locales are not being highlighted.")
            },
        });
    }
    applyUpdate(value, update) {
        let didChange = false;
        if (update.allowedCharacters && value) {
            // Treat allowedCharacters atomically
            if (!_base_common_objects_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .fS(value.allowedCharacters, update.allowedCharacters)) {
                value = Object.assign(Object.assign({}, value), { allowedCharacters: update.allowedCharacters });
                didChange = true;
            }
        }
        if (update.allowedLocales && value) {
            // Treat allowedLocales atomically
            if (!_base_common_objects_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .fS(value.allowedLocales, update.allowedLocales)) {
                value = Object.assign(Object.assign({}, value), { allowedLocales: update.allowedLocales });
                didChange = true;
            }
        }
        const result = super.applyUpdate(value, update);
        if (didChange) {
            return new ApplyUpdateResult(result.newValue, true);
        }
        return result;
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            nonBasicASCII: primitiveSet(input.nonBasicASCII, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            invisibleCharacters: boolean(input.invisibleCharacters, this.defaultValue.invisibleCharacters),
            ambiguousCharacters: boolean(input.ambiguousCharacters, this.defaultValue.ambiguousCharacters),
            includeComments: primitiveSet(input.includeComments, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            includeStrings: primitiveSet(input.includeStrings, inUntrustedWorkspace, [true, false, inUntrustedWorkspace]),
            allowedCharacters: this.validateBooleanMap(_input.allowedCharacters, this.defaultValue.allowedCharacters),
            allowedLocales: this.validateBooleanMap(_input.allowedLocales, this.defaultValue.allowedLocales),
        };
    }
    validateBooleanMap(map, defaultValue) {
        if ((typeof map !== 'object') || !map) {
            return defaultValue;
        }
        const result = {};
        for (const [key, value] of Object.entries(map)) {
            if (value === true) {
                result[key] = true;
            }
        }
        return result;
    }
}
/**
 * Configuration options for inline suggestions
 */
class InlineEditorSuggest extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: true,
            mode: 'subwordSmart',
            showToolbar: 'onHover',
            suppressSuggestions: false,
            keepOnBlur: false,
        };
        super(60 /* EditorOption.inlineSuggest */, 'inlineSuggest', defaults, {
            'editor.inlineSuggest.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlineSuggest.enabled', "Controls whether to automatically show inline suggestions in the editor.")
            },
            'editor.inlineSuggest.showToolbar': {
                type: 'string',
                default: defaults.showToolbar,
                enum: ['always', 'onHover'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlineSuggest.showToolbar.always', "Show the inline suggestion toolbar whenever an inline suggestion is shown."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlineSuggest.showToolbar.onHover', "Show the inline suggestion toolbar when hovering over an inline suggestion."),
                ],
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlineSuggest.showToolbar', "Controls when to show the inline suggestion toolbar."),
            },
            'editor.inlineSuggest.suppressSuggestions': {
                type: 'boolean',
                default: defaults.suppressSuggestions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('inlineSuggest.suppressSuggestions', "Controls how inline suggestions interact with the suggest widget. If enabled, the suggest widget is not shown automatically when inline suggestions are available.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            mode: stringSet(input.mode, this.defaultValue.mode, ['prefix', 'subword', 'subwordSmart']),
            showToolbar: stringSet(input.showToolbar, this.defaultValue.showToolbar, ['always', 'onHover']),
            suppressSuggestions: boolean(input.suppressSuggestions, this.defaultValue.suppressSuggestions),
            keepOnBlur: boolean(input.keepOnBlur, this.defaultValue.keepOnBlur),
        };
    }
}
/**
 * Configuration options for inline suggestions
 */
class BracketPairColorization extends BaseEditorOption {
    constructor() {
        const defaults = {
            enabled: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_5__/* .EDITOR_MODEL_DEFAULTS */ .D.bracketPairColorizationOptions.enabled,
            independentColorPoolPerBracketType: _core_textModelDefaults_js__WEBPACK_IMPORTED_MODULE_5__/* .EDITOR_MODEL_DEFAULTS */ .D.bracketPairColorizationOptions.independentColorPoolPerBracketType,
        };
        super(13 /* EditorOption.bracketPairColorization */, 'bracketPairColorization', defaults, {
            'editor.bracketPairColorization.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('bracketPairColorization.enabled', "Controls whether bracket pair colorization is enabled or not. Use {0} to override the bracket highlight colors.", '`#workbench.colorCustomizations#`')
            },
            'editor.bracketPairColorization.independentColorPoolPerBracketType': {
                type: 'boolean',
                default: defaults.independentColorPoolPerBracketType,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('bracketPairColorization.independentColorPoolPerBracketType', "Controls whether each bracket type has its own independent color pool.")
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            independentColorPoolPerBracketType: boolean(input.independentColorPoolPerBracketType, this.defaultValue.independentColorPoolPerBracketType),
        };
    }
}
/**
 * Configuration options for inline suggestions
 */
class GuideOptions extends BaseEditorOption {
    constructor() {
        const defaults = {
            bracketPairs: false,
            bracketPairsHorizontal: 'active',
            highlightActiveBracketPair: true,
            indentation: true,
            highlightActiveIndentation: true
        };
        super(14 /* EditorOption.guides */, 'guides', defaults, {
            'editor.guides.bracketPairs': {
                type: ['boolean', 'string'],
                enum: [true, 'active', false],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairs.true', "Enables bracket pair guides."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairs.active', "Enables bracket pair guides only for the active bracket pair."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairs.false', "Disables bracket pair guides."),
                ],
                default: defaults.bracketPairs,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairs', "Controls whether bracket pair guides are enabled or not.")
            },
            'editor.guides.bracketPairsHorizontal': {
                type: ['boolean', 'string'],
                enum: [true, 'active', false],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairsHorizontal.true', "Enables horizontal guides as addition to vertical bracket pair guides."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairsHorizontal.active', "Enables horizontal guides only for the active bracket pair."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairsHorizontal.false', "Disables horizontal bracket pair guides."),
                ],
                default: defaults.bracketPairsHorizontal,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.bracketPairsHorizontal', "Controls whether horizontal bracket pair guides are enabled or not.")
            },
            'editor.guides.highlightActiveBracketPair': {
                type: 'boolean',
                default: defaults.highlightActiveBracketPair,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.highlightActiveBracketPair', "Controls whether the editor should highlight the active bracket pair.")
            },
            'editor.guides.indentation': {
                type: 'boolean',
                default: defaults.indentation,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.indentation', "Controls whether the editor should render indent guides.")
            },
            'editor.guides.highlightActiveIndentation': {
                type: ['boolean', 'string'],
                enum: [true, 'always', false],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.highlightActiveIndentation.true', "Highlights the active indent guide."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.highlightActiveIndentation.always', "Highlights the active indent guide even if bracket guides are highlighted."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.highlightActiveIndentation.false', "Do not highlight the active indent guide."),
                ],
                default: defaults.highlightActiveIndentation,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.guides.highlightActiveIndentation', "Controls whether the editor should highlight the active indent guide.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            bracketPairs: primitiveSet(input.bracketPairs, this.defaultValue.bracketPairs, [true, false, 'active']),
            bracketPairsHorizontal: primitiveSet(input.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [true, false, 'active']),
            highlightActiveBracketPair: boolean(input.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
            indentation: boolean(input.indentation, this.defaultValue.indentation),
            highlightActiveIndentation: primitiveSet(input.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation, [true, false, 'always']),
        };
    }
}
function primitiveSet(value, defaultValue, allowedValues) {
    const idx = allowedValues.indexOf(value);
    if (idx === -1) {
        return defaultValue;
    }
    return allowedValues[idx];
}
class EditorSuggest extends BaseEditorOption {
    constructor() {
        const defaults = {
            insertMode: 'insert',
            filterGraceful: true,
            snippetsPreventQuickSuggestions: false,
            localityBonus: false,
            shareSuggestSelections: false,
            selectionMode: 'always',
            showIcons: true,
            showStatusBar: false,
            preview: false,
            previewMode: 'subwordSmart',
            showInlineDetails: true,
            showMethods: true,
            showFunctions: true,
            showConstructors: true,
            showDeprecated: true,
            matchOnWordStartOnly: true,
            showFields: true,
            showVariables: true,
            showClasses: true,
            showStructs: true,
            showInterfaces: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showKeywords: true,
            showWords: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showSnippets: true,
            showUsers: true,
            showIssues: true,
        };
        super(114 /* EditorOption.suggest */, 'suggest', defaults, {
            'editor.suggest.insertMode': {
                type: 'string',
                enum: ['insert', 'replace'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.insert', "Insert suggestion without overwriting text right of the cursor."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.replace', "Insert suggestion and overwrite text right of the cursor."),
                ],
                default: defaults.insertMode,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode', "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.")
            },
            'editor.suggest.filterGraceful': {
                type: 'boolean',
                default: defaults.filterGraceful,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.filterGraceful', "Controls whether filtering and sorting suggestions accounts for small typos.")
            },
            'editor.suggest.localityBonus': {
                type: 'boolean',
                default: defaults.localityBonus,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.localityBonus', "Controls whether sorting favors words that appear close to the cursor.")
            },
            'editor.suggest.shareSuggestSelections': {
                type: 'boolean',
                default: defaults.shareSuggestSelections,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.shareSuggestSelections', "Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).")
            },
            'editor.suggest.selectionMode': {
                type: 'string',
                enum: ['always', 'never', 'whenTriggerCharacter', 'whenQuickSuggestion'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.always', "Always select a suggestion when automatically triggering IntelliSense."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.never', "Never select a suggestion when automatically triggering IntelliSense."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.whenTriggerCharacter', "Select a suggestion only when triggering IntelliSense from a trigger character."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.insertMode.whenQuickSuggestion', "Select a suggestion only when triggering IntelliSense as you type."),
                ],
                default: defaults.selectionMode,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.selectionMode', "Controls whether a suggestion is selected when the widget shows. Note that this only applies to automatically triggered suggestions (`#editor.quickSuggestions#` and `#editor.suggestOnTriggerCharacters#`) and that a suggestion is always selected when explicitly invoked, e.g via `Ctrl+Space`.")
            },
            'editor.suggest.snippetsPreventQuickSuggestions': {
                type: 'boolean',
                default: defaults.snippetsPreventQuickSuggestions,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.snippetsPreventQuickSuggestions', "Controls whether an active snippet prevents quick suggestions.")
            },
            'editor.suggest.showIcons': {
                type: 'boolean',
                default: defaults.showIcons,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.showIcons', "Controls whether to show or hide icons in suggestions.")
            },
            'editor.suggest.showStatusBar': {
                type: 'boolean',
                default: defaults.showStatusBar,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.showStatusBar', "Controls the visibility of the status bar at the bottom of the suggest widget.")
            },
            'editor.suggest.preview': {
                type: 'boolean',
                default: defaults.preview,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.preview', "Controls whether to preview the suggestion outcome in the editor.")
            },
            'editor.suggest.showInlineDetails': {
                type: 'boolean',
                default: defaults.showInlineDetails,
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.showInlineDetails', "Controls whether suggest details show inline with the label or only in the details widget.")
            },
            'editor.suggest.maxVisibleSuggestions': {
                type: 'number',
                deprecationMessage: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggest.maxVisibleSuggestions.dep', "This setting is deprecated. The suggest widget can now be resized."),
            },
            'editor.suggest.filteredTypes': {
                type: 'object',
                deprecationMessage: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('deprecated', "This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.")
            },
            'editor.suggest.showMethods': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showMethods', "When enabled IntelliSense shows `method`-suggestions.")
            },
            'editor.suggest.showFunctions': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showFunctions', "When enabled IntelliSense shows `function`-suggestions.")
            },
            'editor.suggest.showConstructors': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showConstructors', "When enabled IntelliSense shows `constructor`-suggestions.")
            },
            'editor.suggest.showDeprecated': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showDeprecated', "When enabled IntelliSense shows `deprecated`-suggestions.")
            },
            'editor.suggest.matchOnWordStartOnly': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.matchOnWordStartOnly', "When enabled IntelliSense filtering requires that the first character matches on a word start. For example, `c` on `Console` or `WebContext` but _not_ on `description`. When disabled IntelliSense will show more results but still sorts them by match quality.")
            },
            'editor.suggest.showFields': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showFields', "When enabled IntelliSense shows `field`-suggestions.")
            },
            'editor.suggest.showVariables': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showVariables', "When enabled IntelliSense shows `variable`-suggestions.")
            },
            'editor.suggest.showClasses': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showClasss', "When enabled IntelliSense shows `class`-suggestions.")
            },
            'editor.suggest.showStructs': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showStructs', "When enabled IntelliSense shows `struct`-suggestions.")
            },
            'editor.suggest.showInterfaces': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showInterfaces', "When enabled IntelliSense shows `interface`-suggestions.")
            },
            'editor.suggest.showModules': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showModules', "When enabled IntelliSense shows `module`-suggestions.")
            },
            'editor.suggest.showProperties': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showPropertys', "When enabled IntelliSense shows `property`-suggestions.")
            },
            'editor.suggest.showEvents': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showEvents', "When enabled IntelliSense shows `event`-suggestions.")
            },
            'editor.suggest.showOperators': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showOperators', "When enabled IntelliSense shows `operator`-suggestions.")
            },
            'editor.suggest.showUnits': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showUnits', "When enabled IntelliSense shows `unit`-suggestions.")
            },
            'editor.suggest.showValues': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showValues', "When enabled IntelliSense shows `value`-suggestions.")
            },
            'editor.suggest.showConstants': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showConstants', "When enabled IntelliSense shows `constant`-suggestions.")
            },
            'editor.suggest.showEnums': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showEnums', "When enabled IntelliSense shows `enum`-suggestions.")
            },
            'editor.suggest.showEnumMembers': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showEnumMembers', "When enabled IntelliSense shows `enumMember`-suggestions.")
            },
            'editor.suggest.showKeywords': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showKeywords', "When enabled IntelliSense shows `keyword`-suggestions.")
            },
            'editor.suggest.showWords': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showTexts', "When enabled IntelliSense shows `text`-suggestions.")
            },
            'editor.suggest.showColors': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showColors', "When enabled IntelliSense shows `color`-suggestions.")
            },
            'editor.suggest.showFiles': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showFiles', "When enabled IntelliSense shows `file`-suggestions.")
            },
            'editor.suggest.showReferences': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showReferences', "When enabled IntelliSense shows `reference`-suggestions.")
            },
            'editor.suggest.showCustomcolors': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showCustomcolors', "When enabled IntelliSense shows `customcolor`-suggestions.")
            },
            'editor.suggest.showFolders': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showFolders', "When enabled IntelliSense shows `folder`-suggestions.")
            },
            'editor.suggest.showTypeParameters': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showTypeParameters', "When enabled IntelliSense shows `typeParameter`-suggestions.")
            },
            'editor.suggest.showSnippets': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showSnippets', "When enabled IntelliSense shows `snippet`-suggestions.")
            },
            'editor.suggest.showUsers': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showUsers', "When enabled IntelliSense shows `user`-suggestions.")
            },
            'editor.suggest.showIssues': {
                type: 'boolean',
                default: true,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.suggest.showIssues', "When enabled IntelliSense shows `issues`-suggestions.")
            }
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            insertMode: stringSet(input.insertMode, this.defaultValue.insertMode, ['insert', 'replace']),
            filterGraceful: boolean(input.filterGraceful, this.defaultValue.filterGraceful),
            snippetsPreventQuickSuggestions: boolean(input.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
            localityBonus: boolean(input.localityBonus, this.defaultValue.localityBonus),
            shareSuggestSelections: boolean(input.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
            selectionMode: stringSet(input.selectionMode, this.defaultValue.selectionMode, ['always', 'never', 'whenQuickSuggestion', 'whenTriggerCharacter']),
            showIcons: boolean(input.showIcons, this.defaultValue.showIcons),
            showStatusBar: boolean(input.showStatusBar, this.defaultValue.showStatusBar),
            preview: boolean(input.preview, this.defaultValue.preview),
            previewMode: stringSet(input.previewMode, this.defaultValue.previewMode, ['prefix', 'subword', 'subwordSmart']),
            showInlineDetails: boolean(input.showInlineDetails, this.defaultValue.showInlineDetails),
            showMethods: boolean(input.showMethods, this.defaultValue.showMethods),
            showFunctions: boolean(input.showFunctions, this.defaultValue.showFunctions),
            showConstructors: boolean(input.showConstructors, this.defaultValue.showConstructors),
            showDeprecated: boolean(input.showDeprecated, this.defaultValue.showDeprecated),
            matchOnWordStartOnly: boolean(input.matchOnWordStartOnly, this.defaultValue.matchOnWordStartOnly),
            showFields: boolean(input.showFields, this.defaultValue.showFields),
            showVariables: boolean(input.showVariables, this.defaultValue.showVariables),
            showClasses: boolean(input.showClasses, this.defaultValue.showClasses),
            showStructs: boolean(input.showStructs, this.defaultValue.showStructs),
            showInterfaces: boolean(input.showInterfaces, this.defaultValue.showInterfaces),
            showModules: boolean(input.showModules, this.defaultValue.showModules),
            showProperties: boolean(input.showProperties, this.defaultValue.showProperties),
            showEvents: boolean(input.showEvents, this.defaultValue.showEvents),
            showOperators: boolean(input.showOperators, this.defaultValue.showOperators),
            showUnits: boolean(input.showUnits, this.defaultValue.showUnits),
            showValues: boolean(input.showValues, this.defaultValue.showValues),
            showConstants: boolean(input.showConstants, this.defaultValue.showConstants),
            showEnums: boolean(input.showEnums, this.defaultValue.showEnums),
            showEnumMembers: boolean(input.showEnumMembers, this.defaultValue.showEnumMembers),
            showKeywords: boolean(input.showKeywords, this.defaultValue.showKeywords),
            showWords: boolean(input.showWords, this.defaultValue.showWords),
            showColors: boolean(input.showColors, this.defaultValue.showColors),
            showFiles: boolean(input.showFiles, this.defaultValue.showFiles),
            showReferences: boolean(input.showReferences, this.defaultValue.showReferences),
            showFolders: boolean(input.showFolders, this.defaultValue.showFolders),
            showTypeParameters: boolean(input.showTypeParameters, this.defaultValue.showTypeParameters),
            showSnippets: boolean(input.showSnippets, this.defaultValue.showSnippets),
            showUsers: boolean(input.showUsers, this.defaultValue.showUsers),
            showIssues: boolean(input.showIssues, this.defaultValue.showIssues),
        };
    }
}
class SmartSelect extends BaseEditorOption {
    constructor() {
        super(109 /* EditorOption.smartSelect */, 'smartSelect', {
            selectLeadingAndTrailingWhitespace: true
        }, {
            'editor.smartSelect.selectLeadingAndTrailingWhitespace': {
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('selectLeadingAndTrailingWhitespace', "Whether leading and trailing whitespace should always be selected."),
                default: true,
                type: 'boolean'
            }
        });
    }
    validate(input) {
        if (!input || typeof input !== 'object') {
            return this.defaultValue;
        }
        return {
            selectLeadingAndTrailingWhitespace: boolean(input.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace)
        };
    }
}
class WrappingIndentOption extends BaseEditorOption {
    constructor() {
        super(133 /* EditorOption.wrappingIndent */, 'wrappingIndent', 1 /* WrappingIndent.Same */, {
            'editor.wrappingIndent': {
                type: 'string',
                enum: ['none', 'same', 'indent', 'deepIndent'],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingIndent.none', "No indentation. Wrapped lines begin at column 1."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingIndent.same', "Wrapped lines get the same indentation as the parent."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingIndent.indent', "Wrapped lines get +1 indentation toward the parent."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingIndent.deepIndent', "Wrapped lines get +2 indentation toward the parent."),
                ],
                description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wrappingIndent', "Controls the indentation of wrapped lines."),
                default: 'same'
            }
        });
    }
    validate(input) {
        switch (input) {
            case 'none': return 0 /* WrappingIndent.None */;
            case 'same': return 1 /* WrappingIndent.Same */;
            case 'indent': return 2 /* WrappingIndent.Indent */;
            case 'deepIndent': return 3 /* WrappingIndent.DeepIndent */;
        }
        return 1 /* WrappingIndent.Same */;
    }
    compute(env, options, value) {
        const accessibilitySupport = options.get(2 /* EditorOption.accessibilitySupport */);
        if (accessibilitySupport === 2 /* AccessibilitySupport.Enabled */) {
            // if we know for a fact that a screen reader is attached, we use no indent wrapping to
            // help that the editor's wrapping points match the textarea's wrapping points
            return 0 /* WrappingIndent.None */;
        }
        return value;
    }
}
class EditorWrappingInfoComputer extends ComputedEditorOption {
    constructor() {
        super(141 /* EditorOption.wrappingInfo */);
    }
    compute(env, options, _) {
        const layoutInfo = options.get(140 /* EditorOption.layoutInfo */);
        return {
            isDominatedByLongLines: env.isDominatedByLongLines,
            isWordWrapMinified: layoutInfo.isWordWrapMinified,
            isViewportWrapping: layoutInfo.isViewportWrapping,
            wrappingColumn: layoutInfo.wrappingColumn,
        };
    }
}
class EditorDropIntoEditor extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true, showDropSelector: 'afterDrop' };
        super(34 /* EditorOption.dropIntoEditor */, 'dropIntoEditor', defaults, {
            'editor.dropIntoEditor.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('dropIntoEditor.enabled', "Controls whether you can drag and drop a file into a text editor by holding down `shift` (instead of opening the file in an editor)."),
            },
            'editor.dropIntoEditor.showDropSelector': {
                type: 'string',
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('dropIntoEditor.showDropSelector', "Controls if a widget is shown when dropping files into the editor. This widget lets you control how the file is dropped."),
                enum: [
                    'afterDrop',
                    'never'
                ],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('dropIntoEditor.showDropSelector.afterDrop', "Show the drop selector widget after a file is dropped into the editor."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('dropIntoEditor.showDropSelector.never', "Never show the drop selector widget. Instead the default drop provider is always used."),
                ],
                default: 'afterDrop',
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            showDropSelector: stringSet(input.showDropSelector, this.defaultValue.showDropSelector, ['afterDrop', 'never']),
        };
    }
}
class EditorPasteAs extends BaseEditorOption {
    constructor() {
        const defaults = { enabled: true, showPasteSelector: 'afterPaste' };
        super(82 /* EditorOption.pasteAs */, 'pasteAs', defaults, {
            'editor.pasteAs.enabled': {
                type: 'boolean',
                default: defaults.enabled,
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('pasteAs.enabled', "Controls whether you can paste content in different ways."),
            },
            'editor.pasteAs.showPasteSelector': {
                type: 'string',
                markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('pasteAs.showPasteSelector', "Controls if a widget is shown when pasting content in to the editor. This widget lets you control how the file is pasted."),
                enum: [
                    'afterPaste',
                    'never'
                ],
                enumDescriptions: [
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('pasteAs.showPasteSelector.afterPaste', "Show the paste selector widget after content is pasted into the editor."),
                    _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('pasteAs.showPasteSelector.never', "Never show the paste selector widget. Instead the default pasting behavior is always used."),
                ],
                default: 'afterPaste',
            },
        });
    }
    validate(_input) {
        if (!_input || typeof _input !== 'object') {
            return this.defaultValue;
        }
        const input = _input;
        return {
            enabled: boolean(input.enabled, this.defaultValue.enabled),
            showPasteSelector: stringSet(input.showPasteSelector, this.defaultValue.showPasteSelector, ['afterPaste', 'never']),
        };
    }
}
//#endregion
const DEFAULT_WINDOWS_FONT_FAMILY = 'Consolas, \'Courier New\', monospace';
const DEFAULT_MAC_FONT_FAMILY = 'Menlo, Monaco, \'Courier New\', monospace';
const DEFAULT_LINUX_FONT_FAMILY = '\'Droid Sans Mono\', \'monospace\', monospace';
/**
 * @internal
 */
const EDITOR_FONT_DEFAULTS = {
    fontFamily: (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz ? DEFAULT_MAC_FONT_FAMILY : (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLinux */ .IJ ? DEFAULT_LINUX_FONT_FAMILY : DEFAULT_WINDOWS_FONT_FAMILY)),
    fontWeight: 'normal',
    fontSize: (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isMacintosh */ .dz ? 12 : 14),
    lineHeight: 0,
    letterSpacing: 0,
};
/**
 * @internal
 */
const editorOptionsRegistry = [];
function register(option) {
    editorOptionsRegistry[option.id] = option;
    return option;
}
const EditorOptions = {
    acceptSuggestionOnCommitCharacter: register(new EditorBooleanOption(0 /* EditorOption.acceptSuggestionOnCommitCharacter */, 'acceptSuggestionOnCommitCharacter', true, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('acceptSuggestionOnCommitCharacter', "Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.") })),
    acceptSuggestionOnEnter: register(new EditorStringEnumOption(1 /* EditorOption.acceptSuggestionOnEnter */, 'acceptSuggestionOnEnter', 'on', ['on', 'smart', 'off'], {
        markdownEnumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('acceptSuggestionOnEnterSmart', "Only accept a suggestion with `Enter` when it makes a textual change."),
            ''
        ],
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('acceptSuggestionOnEnter', "Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.")
    })),
    accessibilitySupport: register(new EditorAccessibilitySupport()),
    accessibilityPageSize: register(new EditorIntOption(3 /* EditorOption.accessibilityPageSize */, 'accessibilityPageSize', 10, 1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, {
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('accessibilityPageSize', "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default."),
        tags: ['accessibility']
    })),
    ariaLabel: register(new EditorStringOption(4 /* EditorOption.ariaLabel */, 'ariaLabel', _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editorViewAccessibleLabel', "Editor content"))),
    screenReaderAnnounceInlineSuggestion: register(new EditorBooleanOption(6 /* EditorOption.screenReaderAnnounceInlineSuggestion */, 'screenReaderAnnounceInlineSuggestion', true, {
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('screenReaderAnnounceInlineSuggestion', "Control whether inline suggestions are announced by a screen reader."),
        tags: ['accessibility']
    })),
    autoClosingBrackets: register(new EditorStringEnumOption(5 /* EditorOption.autoClosingBrackets */, 'autoClosingBrackets', 'languageDefined', ['always', 'languageDefined', 'beforeWhitespace', 'never'], {
        enumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingBrackets.languageDefined', "Use language configurations to determine when to autoclose brackets."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingBrackets.beforeWhitespace', "Autoclose brackets only when the cursor is to the left of whitespace."),
            '',
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoClosingBrackets', "Controls whether the editor should automatically close brackets after the user adds an opening bracket.")
    })),
    autoClosingDelete: register(new EditorStringEnumOption(7 /* EditorOption.autoClosingDelete */, 'autoClosingDelete', 'auto', ['always', 'auto', 'never'], {
        enumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingDelete.auto', "Remove adjacent closing quotes or brackets only if they were automatically inserted."),
            '',
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoClosingDelete', "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.")
    })),
    autoClosingOvertype: register(new EditorStringEnumOption(8 /* EditorOption.autoClosingOvertype */, 'autoClosingOvertype', 'auto', ['always', 'auto', 'never'], {
        enumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingOvertype.auto', "Type over closing quotes or brackets only if they were automatically inserted."),
            '',
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoClosingOvertype', "Controls whether the editor should type over closing quotes or brackets.")
    })),
    autoClosingQuotes: register(new EditorStringEnumOption(9 /* EditorOption.autoClosingQuotes */, 'autoClosingQuotes', 'languageDefined', ['always', 'languageDefined', 'beforeWhitespace', 'never'], {
        enumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingQuotes.languageDefined', "Use language configurations to determine when to autoclose quotes."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoClosingQuotes.beforeWhitespace', "Autoclose quotes only when the cursor is to the left of whitespace."),
            '',
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoClosingQuotes', "Controls whether the editor should automatically close quotes after the user adds an opening quote.")
    })),
    autoIndent: register(new EditorEnumOption(10 /* EditorOption.autoIndent */, 'autoIndent', 4 /* EditorAutoIndentStrategy.Full */, 'full', ['none', 'keep', 'brackets', 'advanced', 'full'], _autoIndentFromString, {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoIndent.none', "The editor will not insert indentation automatically."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoIndent.keep', "The editor will keep the current line's indentation."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoIndent.brackets', "The editor will keep the current line's indentation and honor language defined brackets."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoIndent.advanced', "The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoIndent.full', "The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoIndent', "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.")
    })),
    automaticLayout: register(new EditorBooleanOption(11 /* EditorOption.automaticLayout */, 'automaticLayout', false)),
    autoSurround: register(new EditorStringEnumOption(12 /* EditorOption.autoSurround */, 'autoSurround', 'languageDefined', ['languageDefined', 'quotes', 'brackets', 'never'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoSurround.languageDefined', "Use language configurations to determine when to automatically surround selections."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoSurround.quotes', "Surround with quotes but not brackets."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('editor.autoSurround.brackets', "Surround with brackets but not quotes."),
            ''
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('autoSurround', "Controls whether the editor should automatically surround selections when typing quotes or brackets.")
    })),
    bracketPairColorization: register(new BracketPairColorization()),
    bracketPairGuides: register(new GuideOptions()),
    stickyTabStops: register(new EditorBooleanOption(112 /* EditorOption.stickyTabStops */, 'stickyTabStops', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('stickyTabStops', "Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.") })),
    codeLens: register(new EditorBooleanOption(15 /* EditorOption.codeLens */, 'codeLens', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('codeLens', "Controls whether the editor shows CodeLens.") })),
    codeLensFontFamily: register(new EditorStringOption(16 /* EditorOption.codeLensFontFamily */, 'codeLensFontFamily', '', { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('codeLensFontFamily', "Controls the font family for CodeLens.") })),
    codeLensFontSize: register(new EditorIntOption(17 /* EditorOption.codeLensFontSize */, 'codeLensFontSize', 0, 0, 100, {
        type: 'number',
        default: 0,
        minimum: 0,
        maximum: 100,
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('codeLensFontSize', "Controls the font size in pixels for CodeLens. When set to 0, 90% of `#editor.fontSize#` is used.")
    })),
    colorDecorators: register(new EditorBooleanOption(18 /* EditorOption.colorDecorators */, 'colorDecorators', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('colorDecorators', "Controls whether the editor should render the inline color decorators and color picker.") })),
    colorDecoratorsLimit: register(new EditorIntOption(19 /* EditorOption.colorDecoratorsLimit */, 'colorDecoratorsLimit', 500, 1, 1000000, {
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('colorDecoratorsLimit', "Controls the max number of color decorators that can be rendered in an editor at once.")
    })),
    columnSelection: register(new EditorBooleanOption(20 /* EditorOption.columnSelection */, 'columnSelection', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('columnSelection', "Enable that the selection with the mouse and keys is doing column selection.") })),
    comments: register(new EditorComments()),
    contextmenu: register(new EditorBooleanOption(22 /* EditorOption.contextmenu */, 'contextmenu', true)),
    copyWithSyntaxHighlighting: register(new EditorBooleanOption(23 /* EditorOption.copyWithSyntaxHighlighting */, 'copyWithSyntaxHighlighting', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('copyWithSyntaxHighlighting', "Controls whether syntax highlighting should be copied into the clipboard.") })),
    cursorBlinking: register(new EditorEnumOption(24 /* EditorOption.cursorBlinking */, 'cursorBlinking', 1 /* TextEditorCursorBlinkingStyle.Blink */, 'blink', ['blink', 'smooth', 'phase', 'expand', 'solid'], _cursorBlinkingStyleFromString, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorBlinking', "Control the cursor animation style.") })),
    cursorSmoothCaretAnimation: register(new EditorStringEnumOption(25 /* EditorOption.cursorSmoothCaretAnimation */, 'cursorSmoothCaretAnimation', 'off', ['off', 'explicit', 'on'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSmoothCaretAnimation.off', "Smooth caret animation is disabled."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSmoothCaretAnimation.explicit', "Smooth caret animation is enabled only when the user moves the cursor with an explicit gesture."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSmoothCaretAnimation.on', "Smooth caret animation is always enabled.")
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSmoothCaretAnimation', "Controls whether the smooth caret animation should be enabled.")
    })),
    cursorStyle: register(new EditorEnumOption(26 /* EditorOption.cursorStyle */, 'cursorStyle', TextEditorCursorStyle.Line, 'line', ['line', 'block', 'underline', 'line-thin', 'block-outline', 'underline-thin'], _cursorStyleFromString, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorStyle', "Controls the cursor style.") })),
    cursorSurroundingLines: register(new EditorIntOption(27 /* EditorOption.cursorSurroundingLines */, 'cursorSurroundingLines', 0, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSurroundingLines', "Controls the minimal number of visible leading lines (minimum 0) and trailing lines (minimum 1) surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.") })),
    cursorSurroundingLinesStyle: register(new EditorStringEnumOption(28 /* EditorOption.cursorSurroundingLinesStyle */, 'cursorSurroundingLinesStyle', 'default', ['default', 'all'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSurroundingLinesStyle.default', "`cursorSurroundingLines` is enforced only when triggered via the keyboard or API."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSurroundingLinesStyle.all', "`cursorSurroundingLines` is enforced always.")
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorSurroundingLinesStyle', "Controls when `cursorSurroundingLines` should be enforced.")
    })),
    cursorWidth: register(new EditorIntOption(29 /* EditorOption.cursorWidth */, 'cursorWidth', 0, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('cursorWidth', "Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.") })),
    disableLayerHinting: register(new EditorBooleanOption(30 /* EditorOption.disableLayerHinting */, 'disableLayerHinting', false)),
    disableMonospaceOptimizations: register(new EditorBooleanOption(31 /* EditorOption.disableMonospaceOptimizations */, 'disableMonospaceOptimizations', false)),
    domReadOnly: register(new EditorBooleanOption(32 /* EditorOption.domReadOnly */, 'domReadOnly', false)),
    dragAndDrop: register(new EditorBooleanOption(33 /* EditorOption.dragAndDrop */, 'dragAndDrop', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('dragAndDrop', "Controls whether the editor should allow moving selections via drag and drop.") })),
    emptySelectionClipboard: register(new EditorEmptySelectionClipboard()),
    dropIntoEditor: register(new EditorDropIntoEditor()),
    stickyScroll: register(new EditorStickyScroll()),
    experimentalWhitespaceRendering: register(new EditorStringEnumOption(36 /* EditorOption.experimentalWhitespaceRendering */, 'experimentalWhitespaceRendering', 'svg', ['svg', 'font', 'off'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('experimentalWhitespaceRendering.svg', "Use a new rendering method with svgs."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('experimentalWhitespaceRendering.font', "Use a new rendering method with font characters."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('experimentalWhitespaceRendering.off', "Use the stable rendering method."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('experimentalWhitespaceRendering', "Controls whether whitespace is rendered with a new, experimental method.")
    })),
    extraEditorClassName: register(new EditorStringOption(37 /* EditorOption.extraEditorClassName */, 'extraEditorClassName', '')),
    fastScrollSensitivity: register(new EditorFloatOption(38 /* EditorOption.fastScrollSensitivity */, 'fastScrollSensitivity', 5, x => (x <= 0 ? 5 : x), { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fastScrollSensitivity', "Scrolling speed multiplier when pressing `Alt`.") })),
    find: register(new EditorFind()),
    fixedOverflowWidgets: register(new EditorBooleanOption(40 /* EditorOption.fixedOverflowWidgets */, 'fixedOverflowWidgets', false)),
    folding: register(new EditorBooleanOption(41 /* EditorOption.folding */, 'folding', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('folding', "Controls whether the editor has code folding enabled.") })),
    foldingStrategy: register(new EditorStringEnumOption(42 /* EditorOption.foldingStrategy */, 'foldingStrategy', 'auto', ['auto', 'indentation'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingStrategy.auto', "Use a language-specific folding strategy if available, else the indentation-based one."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingStrategy.indentation', "Use the indentation-based folding strategy."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingStrategy', "Controls the strategy for computing folding ranges.")
    })),
    foldingHighlight: register(new EditorBooleanOption(43 /* EditorOption.foldingHighlight */, 'foldingHighlight', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingHighlight', "Controls whether the editor should highlight folded ranges.") })),
    foldingImportsByDefault: register(new EditorBooleanOption(44 /* EditorOption.foldingImportsByDefault */, 'foldingImportsByDefault', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingImportsByDefault', "Controls whether the editor automatically collapses import ranges.") })),
    foldingMaximumRegions: register(new EditorIntOption(45 /* EditorOption.foldingMaximumRegions */, 'foldingMaximumRegions', 5000, 10, 65000, // limit must be less than foldingRanges MAX_FOLDING_REGIONS
    { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('foldingMaximumRegions', "The maximum number of foldable regions. Increasing this value may result in the editor becoming less responsive when the current source has a large number of foldable regions.") })),
    unfoldOnClickAfterEndOfLine: register(new EditorBooleanOption(46 /* EditorOption.unfoldOnClickAfterEndOfLine */, 'unfoldOnClickAfterEndOfLine', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unfoldOnClickAfterEndOfLine', "Controls whether clicking on the empty content after a folded line will unfold the line.") })),
    fontFamily: register(new EditorStringOption(47 /* EditorOption.fontFamily */, 'fontFamily', EDITOR_FONT_DEFAULTS.fontFamily, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('fontFamily', "Controls the font family.") })),
    fontInfo: register(new EditorFontInfo()),
    fontLigatures2: register(new EditorFontLigatures()),
    fontSize: register(new EditorFontSize()),
    fontWeight: register(new EditorFontWeight()),
    fontVariations: register(new EditorFontVariations()),
    formatOnPaste: register(new EditorBooleanOption(53 /* EditorOption.formatOnPaste */, 'formatOnPaste', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('formatOnPaste', "Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.") })),
    formatOnType: register(new EditorBooleanOption(54 /* EditorOption.formatOnType */, 'formatOnType', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('formatOnType', "Controls whether the editor should automatically format the line after typing.") })),
    glyphMargin: register(new EditorBooleanOption(55 /* EditorOption.glyphMargin */, 'glyphMargin', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('glyphMargin', "Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.") })),
    gotoLocation: register(new EditorGoToLocation()),
    hideCursorInOverviewRuler: register(new EditorBooleanOption(57 /* EditorOption.hideCursorInOverviewRuler */, 'hideCursorInOverviewRuler', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('hideCursorInOverviewRuler', "Controls whether the cursor should be hidden in the overview ruler.") })),
    hover: register(new EditorHover()),
    inDiffEditor: register(new EditorBooleanOption(59 /* EditorOption.inDiffEditor */, 'inDiffEditor', false)),
    letterSpacing: register(new EditorFloatOption(61 /* EditorOption.letterSpacing */, 'letterSpacing', EDITOR_FONT_DEFAULTS.letterSpacing, x => EditorFloatOption.clamp(x, -5, 20), { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('letterSpacing', "Controls the letter spacing in pixels.") })),
    lightbulb: register(new EditorLightbulb()),
    lineDecorationsWidth: register(new EditorLineDecorationsWidth()),
    lineHeight: register(new EditorLineHeight()),
    lineNumbers: register(new EditorRenderLineNumbersOption()),
    lineNumbersMinChars: register(new EditorIntOption(66 /* EditorOption.lineNumbersMinChars */, 'lineNumbersMinChars', 5, 1, 300)),
    linkedEditing: register(new EditorBooleanOption(67 /* EditorOption.linkedEditing */, 'linkedEditing', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('linkedEditing', "Controls whether the editor has linked editing enabled. Depending on the language, related symbols such as HTML tags, are updated while editing.") })),
    links: register(new EditorBooleanOption(68 /* EditorOption.links */, 'links', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('links', "Controls whether the editor should detect links and make them clickable.") })),
    matchBrackets: register(new EditorStringEnumOption(69 /* EditorOption.matchBrackets */, 'matchBrackets', 'always', ['always', 'near', 'never'], { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('matchBrackets', "Highlight matching brackets.") })),
    minimap: register(new EditorMinimap()),
    mouseStyle: register(new EditorStringEnumOption(71 /* EditorOption.mouseStyle */, 'mouseStyle', 'text', ['text', 'default', 'copy'])),
    mouseWheelScrollSensitivity: register(new EditorFloatOption(72 /* EditorOption.mouseWheelScrollSensitivity */, 'mouseWheelScrollSensitivity', 1, x => (x === 0 ? 1 : x), { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('mouseWheelScrollSensitivity', "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.") })),
    mouseWheelZoom: register(new EditorBooleanOption(73 /* EditorOption.mouseWheelZoom */, 'mouseWheelZoom', false, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('mouseWheelZoom', "Zoom the font of the editor when using mouse wheel and holding `Ctrl`.") })),
    multiCursorMergeOverlapping: register(new EditorBooleanOption(74 /* EditorOption.multiCursorMergeOverlapping */, 'multiCursorMergeOverlapping', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorMergeOverlapping', "Merge multiple cursors when they are overlapping.") })),
    multiCursorModifier: register(new EditorEnumOption(75 /* EditorOption.multiCursorModifier */, 'multiCursorModifier', 'altKey', 'alt', ['ctrlCmd', 'alt'], _multiCursorModifierFromString, {
        markdownEnumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorModifier.ctrlCmd', "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorModifier.alt', "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
        ],
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({
            key: 'multiCursorModifier',
            comment: [
                '- `ctrlCmd` refers to a value the setting can take and should not be localized.',
                '- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized.'
            ]
        }, "The modifier to be used to add multiple cursors with the mouse. The Go to Definition and Open Link mouse gestures will adapt such that they do not conflict with the [multicursor modifier](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).")
    })),
    multiCursorPaste: register(new EditorStringEnumOption(76 /* EditorOption.multiCursorPaste */, 'multiCursorPaste', 'spread', ['spread', 'full'], {
        markdownEnumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorPaste.spread', "Each cursor pastes a single line of the text."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorPaste.full', "Each cursor pastes the full text.")
        ],
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorPaste', "Controls pasting when the line count of the pasted text matches the cursor count.")
    })),
    multiCursorLimit: register(new EditorIntOption(77 /* EditorOption.multiCursorLimit */, 'multiCursorLimit', 10000, 1, 100000, {
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('multiCursorLimit', "Controls the max number of cursors that can be in an active editor at once.")
    })),
    occurrencesHighlight: register(new EditorBooleanOption(78 /* EditorOption.occurrencesHighlight */, 'occurrencesHighlight', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('occurrencesHighlight', "Controls whether the editor should highlight semantic symbol occurrences.") })),
    overviewRulerBorder: register(new EditorBooleanOption(79 /* EditorOption.overviewRulerBorder */, 'overviewRulerBorder', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('overviewRulerBorder', "Controls whether a border should be drawn around the overview ruler.") })),
    overviewRulerLanes: register(new EditorIntOption(80 /* EditorOption.overviewRulerLanes */, 'overviewRulerLanes', 3, 0, 3)),
    padding: register(new EditorPadding()),
    pasteAs: register(new EditorPasteAs()),
    parameterHints: register(new EditorParameterHints()),
    peekWidgetDefaultFocus: register(new EditorStringEnumOption(84 /* EditorOption.peekWidgetDefaultFocus */, 'peekWidgetDefaultFocus', 'tree', ['tree', 'editor'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('peekWidgetDefaultFocus.tree', "Focus the tree when opening peek"),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('peekWidgetDefaultFocus.editor', "Focus the editor when opening peek")
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('peekWidgetDefaultFocus', "Controls whether to focus the inline editor or the tree in the peek widget.")
    })),
    definitionLinkOpensInPeek: register(new EditorBooleanOption(85 /* EditorOption.definitionLinkOpensInPeek */, 'definitionLinkOpensInPeek', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('definitionLinkOpensInPeek', "Controls whether the Go to Definition mouse gesture always opens the peek widget.") })),
    quickSuggestions: register(new EditorQuickSuggestions()),
    quickSuggestionsDelay: register(new EditorIntOption(87 /* EditorOption.quickSuggestionsDelay */, 'quickSuggestionsDelay', 10, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('quickSuggestionsDelay', "Controls the delay in milliseconds after which quick suggestions will show up.") })),
    readOnly: register(new EditorBooleanOption(88 /* EditorOption.readOnly */, 'readOnly', false)),
    renameOnType: register(new EditorBooleanOption(89 /* EditorOption.renameOnType */, 'renameOnType', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renameOnType', "Controls whether the editor auto renames on type."), markdownDeprecationMessage: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renameOnTypeDeprecate', "Deprecated, use `editor.linkedEditing` instead.") })),
    renderControlCharacters: register(new EditorBooleanOption(90 /* EditorOption.renderControlCharacters */, 'renderControlCharacters', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderControlCharacters', "Controls whether the editor should render control characters."), restricted: true })),
    renderFinalNewline: register(new EditorStringEnumOption(91 /* EditorOption.renderFinalNewline */, 'renderFinalNewline', (_base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLinux */ .IJ ? 'dimmed' : 'on'), ['off', 'on', 'dimmed'], { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderFinalNewline', "Render last line number when the file ends with a newline.") })),
    renderLineHighlight: register(new EditorStringEnumOption(92 /* EditorOption.renderLineHighlight */, 'renderLineHighlight', 'line', ['none', 'gutter', 'line', 'all'], {
        enumDescriptions: [
            '',
            '',
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderLineHighlight.all', "Highlights both the gutter and the current line."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderLineHighlight', "Controls how the editor should render the current line highlight.")
    })),
    renderLineHighlightOnlyWhenFocus: register(new EditorBooleanOption(93 /* EditorOption.renderLineHighlightOnlyWhenFocus */, 'renderLineHighlightOnlyWhenFocus', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderLineHighlightOnlyWhenFocus', "Controls if the editor should render the current line highlight only when the editor is focused.") })),
    renderValidationDecorations: register(new EditorStringEnumOption(94 /* EditorOption.renderValidationDecorations */, 'renderValidationDecorations', 'editable', ['editable', 'on', 'off'])),
    renderWhitespace: register(new EditorStringEnumOption(95 /* EditorOption.renderWhitespace */, 'renderWhitespace', 'selection', ['none', 'boundary', 'selection', 'trailing', 'all'], {
        enumDescriptions: [
            '',
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderWhitespace.boundary', "Render whitespace characters except for single spaces between words."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderWhitespace.selection', "Render whitespace characters only on selected text."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderWhitespace.trailing', "Render only trailing whitespace characters."),
            ''
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('renderWhitespace', "Controls how the editor should render whitespace characters.")
    })),
    revealHorizontalRightPadding: register(new EditorIntOption(96 /* EditorOption.revealHorizontalRightPadding */, 'revealHorizontalRightPadding', 15, 0, 1000)),
    roundedSelection: register(new EditorBooleanOption(97 /* EditorOption.roundedSelection */, 'roundedSelection', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('roundedSelection', "Controls whether selections should have rounded corners.") })),
    rulers: register(new EditorRulers()),
    scrollbar: register(new EditorScrollbar()),
    scrollBeyondLastColumn: register(new EditorIntOption(100 /* EditorOption.scrollBeyondLastColumn */, 'scrollBeyondLastColumn', 4, 0, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollBeyondLastColumn', "Controls the number of extra characters beyond which the editor will scroll horizontally.") })),
    scrollBeyondLastLine: register(new EditorBooleanOption(101 /* EditorOption.scrollBeyondLastLine */, 'scrollBeyondLastLine', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollBeyondLastLine', "Controls whether the editor will scroll beyond the last line.") })),
    scrollPredominantAxis: register(new EditorBooleanOption(102 /* EditorOption.scrollPredominantAxis */, 'scrollPredominantAxis', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('scrollPredominantAxis', "Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.") })),
    selectionClipboard: register(new EditorBooleanOption(103 /* EditorOption.selectionClipboard */, 'selectionClipboard', true, {
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('selectionClipboard', "Controls whether the Linux primary clipboard should be supported."),
        included: _base_common_platform_js__WEBPACK_IMPORTED_MODULE_1__/* .isLinux */ .IJ
    })),
    selectionHighlight: register(new EditorBooleanOption(104 /* EditorOption.selectionHighlight */, 'selectionHighlight', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('selectionHighlight', "Controls whether the editor should highlight matches similar to the selection.") })),
    selectOnLineNumbers: register(new EditorBooleanOption(105 /* EditorOption.selectOnLineNumbers */, 'selectOnLineNumbers', true)),
    showFoldingControls: register(new EditorStringEnumOption(106 /* EditorOption.showFoldingControls */, 'showFoldingControls', 'mouseover', ['always', 'never', 'mouseover'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showFoldingControls.always', "Always show the folding controls."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showFoldingControls.never', "Never show the folding controls and reduce the gutter size."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showFoldingControls.mouseover', "Only show the folding controls when the mouse is over the gutter."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showFoldingControls', "Controls when the folding controls on the gutter are shown.")
    })),
    showUnused: register(new EditorBooleanOption(107 /* EditorOption.showUnused */, 'showUnused', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showUnused', "Controls fading out of unused code.") })),
    showDeprecated: register(new EditorBooleanOption(135 /* EditorOption.showDeprecated */, 'showDeprecated', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('showDeprecated', "Controls strikethrough deprecated variables.") })),
    inlayHints: register(new EditorInlayHints()),
    snippetSuggestions: register(new EditorStringEnumOption(108 /* EditorOption.snippetSuggestions */, 'snippetSuggestions', 'inline', ['top', 'bottom', 'inline', 'none'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('snippetSuggestions.top', "Show snippet suggestions on top of other suggestions."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('snippetSuggestions.bottom', "Show snippet suggestions below other suggestions."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('snippetSuggestions.inline', "Show snippets suggestions with other suggestions."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('snippetSuggestions.none', "Do not show snippet suggestions."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('snippetSuggestions', "Controls whether snippets are shown with other suggestions and how they are sorted.")
    })),
    smartSelect: register(new SmartSelect()),
    smoothScrolling: register(new EditorBooleanOption(110 /* EditorOption.smoothScrolling */, 'smoothScrolling', false, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('smoothScrolling', "Controls whether the editor will scroll using an animation.") })),
    stopRenderingLineAfter: register(new EditorIntOption(113 /* EditorOption.stopRenderingLineAfter */, 'stopRenderingLineAfter', 10000, -1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */)),
    suggest: register(new EditorSuggest()),
    inlineSuggest: register(new InlineEditorSuggest()),
    suggestFontSize: register(new EditorIntOption(115 /* EditorOption.suggestFontSize */, 'suggestFontSize', 0, 0, 1000, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestFontSize', "Font size for the suggest widget. When set to {0}, the value of {1} is used.", '`0`', '`#editor.fontSize#`') })),
    suggestLineHeight: register(new EditorIntOption(116 /* EditorOption.suggestLineHeight */, 'suggestLineHeight', 0, 0, 1000, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestLineHeight', "Line height for the suggest widget. When set to {0}, the value of {1} is used. The minimum value is 8.", '`0`', '`#editor.lineHeight#`') })),
    suggestOnTriggerCharacters: register(new EditorBooleanOption(117 /* EditorOption.suggestOnTriggerCharacters */, 'suggestOnTriggerCharacters', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestOnTriggerCharacters', "Controls whether suggestions should automatically show up when typing trigger characters.") })),
    suggestSelection: register(new EditorStringEnumOption(118 /* EditorOption.suggestSelection */, 'suggestSelection', 'first', ['first', 'recentlyUsed', 'recentlyUsedByPrefix'], {
        markdownEnumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestSelection.first', "Always select the first suggestion."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestSelection.recentlyUsed', "Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestSelection.recentlyUsedByPrefix', "Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('suggestSelection', "Controls how suggestions are pre-selected when showing the suggest list.")
    })),
    tabCompletion: register(new EditorStringEnumOption(119 /* EditorOption.tabCompletion */, 'tabCompletion', 'off', ['on', 'off', 'onlySnippets'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('tabCompletion.on', "Tab complete will insert the best matching suggestion when pressing tab."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('tabCompletion.off', "Disable tab completions."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('tabCompletion.onlySnippets', "Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('tabCompletion', "Enables tab completions.")
    })),
    tabIndex: register(new EditorIntOption(120 /* EditorOption.tabIndex */, 'tabIndex', 0, -1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */)),
    unicodeHighlight: register(new UnicodeHighlight()),
    unusualLineTerminators: register(new EditorStringEnumOption(122 /* EditorOption.unusualLineTerminators */, 'unusualLineTerminators', 'prompt', ['auto', 'off', 'prompt'], {
        enumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unusualLineTerminators.auto', "Unusual line terminators are automatically removed."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unusualLineTerminators.off', "Unusual line terminators are ignored."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unusualLineTerminators.prompt', "Unusual line terminators prompt to be removed."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('unusualLineTerminators', "Remove unusual line terminators that might cause problems.")
    })),
    useShadowDOM: register(new EditorBooleanOption(123 /* EditorOption.useShadowDOM */, 'useShadowDOM', true)),
    useTabStops: register(new EditorBooleanOption(124 /* EditorOption.useTabStops */, 'useTabStops', true, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('useTabStops', "Inserting and deleting whitespace follows tab stops.") })),
    wordBreak: register(new EditorStringEnumOption(125 /* EditorOption.wordBreak */, 'wordBreak', 'normal', ['normal', 'keepAll'], {
        markdownEnumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordBreak.normal', "Use the default line break rule."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordBreak.keepAll', "Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for normal."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordBreak', "Controls the word break rules used for Chinese/Japanese/Korean (CJK) text.")
    })),
    wordSeparators: register(new EditorStringOption(126 /* EditorOption.wordSeparators */, 'wordSeparators', _core_wordHelper_js__WEBPACK_IMPORTED_MODULE_2__/* .USUAL_WORD_SEPARATORS */ .vu, { description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordSeparators', "Characters that will be used as word separators when doing word related navigations or operations.") })),
    wordWrap: register(new EditorStringEnumOption(127 /* EditorOption.wordWrap */, 'wordWrap', 'off', ['off', 'on', 'wordWrapColumn', 'bounded'], {
        markdownEnumDescriptions: [
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordWrap.off', "Lines will never wrap."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('wordWrap.on', "Lines will wrap at the viewport width."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({
                key: 'wordWrap.wordWrapColumn',
                comment: [
                    '- `editor.wordWrapColumn` refers to a different setting and should not be localized.'
                ]
            }, "Lines will wrap at `#editor.wordWrapColumn#`."),
            _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({
                key: 'wordWrap.bounded',
                comment: [
                    '- viewport means the edge of the visible window size.',
                    '- `editor.wordWrapColumn` refers to a different setting and should not be localized.'
                ]
            }, "Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`."),
        ],
        description: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({
            key: 'wordWrap',
            comment: [
                '- \'off\', \'on\', \'wordWrapColumn\' and \'bounded\' refer to values the setting can take and should not be localized.',
                '- `editor.wordWrapColumn` refers to a different setting and should not be localized.'
            ]
        }, "Controls how lines should wrap.")
    })),
    wordWrapBreakAfterCharacters: register(new EditorStringOption(128 /* EditorOption.wordWrapBreakAfterCharacters */, 'wordWrapBreakAfterCharacters', 
    // allow-any-unicode-next-line
    ' \t})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣')),
    wordWrapBreakBeforeCharacters: register(new EditorStringOption(129 /* EditorOption.wordWrapBreakBeforeCharacters */, 'wordWrapBreakBeforeCharacters', 
    // allow-any-unicode-next-line
    '([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋')),
    wordWrapColumn: register(new EditorIntOption(130 /* EditorOption.wordWrapColumn */, 'wordWrapColumn', 80, 1, 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, {
        markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC({
            key: 'wordWrapColumn',
            comment: [
                '- `editor.wordWrap` refers to a different setting and should not be localized.',
                '- \'wordWrapColumn\' and \'bounded\' refer to values the different setting can take and should not be localized.'
            ]
        }, "Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.")
    })),
    wordWrapOverride1: register(new EditorStringEnumOption(131 /* EditorOption.wordWrapOverride1 */, 'wordWrapOverride1', 'inherit', ['off', 'on', 'inherit'])),
    wordWrapOverride2: register(new EditorStringEnumOption(132 /* EditorOption.wordWrapOverride2 */, 'wordWrapOverride2', 'inherit', ['off', 'on', 'inherit'])),
    // Leave these at the end (because they have dependencies!)
    editorClassName: register(new EditorClassName()),
    defaultColorDecorators: register(new EditorBooleanOption(142 /* EditorOption.defaultColorDecorators */, 'defaultColorDecorators', false, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('defaultColorDecorators', "Controls whether inline color decorations should be shown using the default document color provider") })),
    pixelRatio: register(new EditorPixelRatio()),
    tabFocusMode: register(new EditorBooleanOption(139 /* EditorOption.tabFocusMode */, 'tabFocusMode', false, { markdownDescription: _nls_js__WEBPACK_IMPORTED_MODULE_0__/* .localize */ .NC('tabFocusMode', "Controls whether the editor receives tabs or defers them to the workbench for navigation.") })),
    layoutInfo: register(new EditorLayoutInfoComputer()),
    wrappingInfo: register(new EditorWrappingInfoComputer()),
    wrappingIndent: register(new WrappingIndentOption()),
    wrappingStrategy: register(new WrappingStrategy())
};


/***/ }),

/***/ 4546:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ EditorZoom; }
/* harmony export */ });
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const EditorZoom = new class {
    constructor() {
        this._zoomLevel = 0;
        this._onDidChangeZoomLevel = new _base_common_event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        this.onDidChangeZoomLevel = this._onDidChangeZoomLevel.event;
    }
    getZoomLevel() {
        return this._zoomLevel;
    }
    setZoomLevel(zoomLevel) {
        zoomLevel = Math.min(Math.max(-5, zoomLevel), 20);
        if (this._zoomLevel === zoomLevel) {
            return;
        }
        this._zoomLevel = zoomLevel;
        this._onDidChangeZoomLevel.fire(this._zoomLevel);
    }
};


/***/ }),

/***/ 63742:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E4: function() { return /* binding */ BareFontInfo; },
/* harmony export */   pR: function() { return /* binding */ FontInfo; }
/* harmony export */ });
/* unused harmony export SERIALIZED_FONT_INFO_VERSION */
/* harmony import */ var _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94057);
/* harmony import */ var _editorOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75117);
/* harmony import */ var _editorZoom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4546);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



/**
 * Determined from empirical observations.
 * @internal
 */
const GOLDEN_LINE_HEIGHT_RATIO = _base_common_platform_js__WEBPACK_IMPORTED_MODULE_0__/* .isMacintosh */ .dz ? 1.5 : 1.35;
/**
 * @internal
 */
const MINIMUM_LINE_HEIGHT = 8;
class BareFontInfo {
    /**
     * @internal
     */
    static createFromValidatedSettings(options, pixelRatio, ignoreEditorZoom) {
        const fontFamily = options.get(47 /* EditorOption.fontFamily */);
        const fontWeight = options.get(51 /* EditorOption.fontWeight */);
        const fontSize = options.get(50 /* EditorOption.fontSize */);
        const fontFeatureSettings = options.get(49 /* EditorOption.fontLigatures */);
        const fontVariationSettings = options.get(52 /* EditorOption.fontVariations */);
        const lineHeight = options.get(64 /* EditorOption.lineHeight */);
        const letterSpacing = options.get(61 /* EditorOption.letterSpacing */);
        return BareFontInfo._create(fontFamily, fontWeight, fontSize, fontFeatureSettings, fontVariationSettings, lineHeight, letterSpacing, pixelRatio, ignoreEditorZoom);
    }
    /**
     * @internal
     */
    static _create(fontFamily, fontWeight, fontSize, fontFeatureSettings, fontVariationSettings, lineHeight, letterSpacing, pixelRatio, ignoreEditorZoom) {
        if (lineHeight === 0) {
            lineHeight = GOLDEN_LINE_HEIGHT_RATIO * fontSize;
        }
        else if (lineHeight < MINIMUM_LINE_HEIGHT) {
            // Values too small to be line heights in pixels are in ems.
            lineHeight = lineHeight * fontSize;
        }
        // Enforce integer, minimum constraints
        lineHeight = Math.round(lineHeight);
        if (lineHeight < MINIMUM_LINE_HEIGHT) {
            lineHeight = MINIMUM_LINE_HEIGHT;
        }
        const editorZoomLevelMultiplier = 1 + (ignoreEditorZoom ? 0 : _editorZoom_js__WEBPACK_IMPORTED_MODULE_2__/* .EditorZoom */ .C.getZoomLevel() * 0.1);
        fontSize *= editorZoomLevelMultiplier;
        lineHeight *= editorZoomLevelMultiplier;
        if (fontVariationSettings === _editorOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorFontVariations */ .Bo.TRANSLATE) {
            if (fontWeight === 'normal' || fontWeight === 'bold') {
                fontVariationSettings = _editorOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .EditorFontVariations */ .Bo.OFF;
            }
            else {
                const fontWeightAsNumber = parseInt(fontWeight, 10);
                fontVariationSettings = `'wght' ${fontWeightAsNumber}`;
                fontWeight = 'normal';
            }
        }
        return new BareFontInfo({
            pixelRatio: pixelRatio,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFeatureSettings: fontFeatureSettings,
            fontVariationSettings,
            lineHeight: lineHeight,
            letterSpacing: letterSpacing
        });
    }
    /**
     * @internal
     */
    constructor(opts) {
        this._bareFontInfoBrand = undefined;
        this.pixelRatio = opts.pixelRatio;
        this.fontFamily = String(opts.fontFamily);
        this.fontWeight = String(opts.fontWeight);
        this.fontSize = opts.fontSize;
        this.fontFeatureSettings = opts.fontFeatureSettings;
        this.fontVariationSettings = opts.fontVariationSettings;
        this.lineHeight = opts.lineHeight | 0;
        this.letterSpacing = opts.letterSpacing;
    }
    /**
     * @internal
     */
    getId() {
        return `${this.pixelRatio}-${this.fontFamily}-${this.fontWeight}-${this.fontSize}-${this.fontFeatureSettings}-${this.fontVariationSettings}-${this.lineHeight}-${this.letterSpacing}`;
    }
    /**
     * @internal
     */
    getMassagedFontFamily() {
        const fallbackFontFamily = _editorOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .EDITOR_FONT_DEFAULTS */ .hL.fontFamily;
        const fontFamily = BareFontInfo._wrapInQuotes(this.fontFamily);
        if (fallbackFontFamily && this.fontFamily !== fallbackFontFamily) {
            return `${fontFamily}, ${fallbackFontFamily}`;
        }
        return fontFamily;
    }
    static _wrapInQuotes(fontFamily) {
        if (/[,"']/.test(fontFamily)) {
            // Looks like the font family might be already escaped
            return fontFamily;
        }
        if (/[+ ]/.test(fontFamily)) {
            // Wrap a font family using + or <space> with quotes
            return `"${fontFamily}"`;
        }
        return fontFamily;
    }
}
// change this whenever `FontInfo` members are changed
const SERIALIZED_FONT_INFO_VERSION = 2;
class FontInfo extends BareFontInfo {
    /**
     * @internal
     */
    constructor(opts, isTrusted) {
        super(opts);
        this._editorStylingBrand = undefined;
        this.version = SERIALIZED_FONT_INFO_VERSION;
        this.isTrusted = isTrusted;
        this.isMonospace = opts.isMonospace;
        this.typicalHalfwidthCharacterWidth = opts.typicalHalfwidthCharacterWidth;
        this.typicalFullwidthCharacterWidth = opts.typicalFullwidthCharacterWidth;
        this.canUseHalfwidthRightwardsArrow = opts.canUseHalfwidthRightwardsArrow;
        this.spaceWidth = opts.spaceWidth;
        this.middotWidth = opts.middotWidth;
        this.wsmiddotWidth = opts.wsmiddotWidth;
        this.maxDigitWidth = opts.maxDigitWidth;
    }
    /**
     * @internal
     */
    equals(other) {
        return (this.fontFamily === other.fontFamily
            && this.fontWeight === other.fontWeight
            && this.fontSize === other.fontSize
            && this.fontFeatureSettings === other.fontFeatureSettings
            && this.fontVariationSettings === other.fontVariationSettings
            && this.lineHeight === other.lineHeight
            && this.letterSpacing === other.letterSpacing
            && this.typicalHalfwidthCharacterWidth === other.typicalHalfwidthCharacterWidth
            && this.typicalFullwidthCharacterWidth === other.typicalFullwidthCharacterWidth
            && this.canUseHalfwidthRightwardsArrow === other.canUseHalfwidthRightwardsArrow
            && this.spaceWidth === other.spaceWidth
            && this.middotWidth === other.middotWidth
            && this.wsmiddotWidth === other.wsmiddotWidth
            && this.maxDigitWidth === other.maxDigitWidth);
    }
}


/***/ })

}]);