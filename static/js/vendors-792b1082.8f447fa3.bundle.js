"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-792b1082"],{

/***/ 91423:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ DiffNavigator; }
/* harmony export */ });
/* harmony import */ var _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29012);
/* harmony import */ var _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _base_common_objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99269);
/* harmony import */ var _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76584);
/* harmony import */ var _platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83144);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74312);
/* harmony import */ var _platform_accessibility_common_accessibility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42177);
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








const defaultOptions = {
    followsCaret: true,
    ignoreCharChanges: true,
    alwaysRevealFirst: true,
    findResultLoop: true
};
/**
 * Create a new diff navigator for the provided diff editor.
 */
let DiffNavigator = class DiffNavigator extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .Disposable */ .JT {
    constructor(editor, options = {}, _audioCueService, _codeEditorService, _accessibilityService) {
        super();
        this._audioCueService = _audioCueService;
        this._codeEditorService = _codeEditorService;
        this._accessibilityService = _accessibilityService;
        this._onDidUpdate = this._register(new _base_common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5());
        this._editor = editor;
        this._options = _base_common_objects_js__WEBPACK_IMPORTED_MODULE_3__/* .mixin */ .jB(options, defaultOptions, false);
        this.disposed = false;
        this.nextIdx = -1;
        this.ranges = [];
        this.ignoreSelectionChange = false;
        this.revealFirst = Boolean(this._options.alwaysRevealFirst);
        this._register(this._editor.onDidUpdateDiff(() => this._onDiffUpdated()));
        if (this._options.followsCaret) {
            this._register(this._editor.getModifiedEditor().onDidChangeCursorPosition((e) => {
                if (this.ignoreSelectionChange) {
                    return;
                }
                this._updateAccessibilityState(e.position.lineNumber);
                this.nextIdx = -1;
            }));
        }
        // init things
        this._init();
    }
    _init() {
        const changes = this._editor.getLineChanges();
        if (!changes) {
            return;
        }
    }
    _onDiffUpdated() {
        this._init();
        this._compute(this._editor.getLineChanges());
        if (this.revealFirst) {
            // Only reveal first on first non-null changes
            if (this._editor.getLineChanges() !== null) {
                this.revealFirst = false;
                this.nextIdx = -1;
                this.next(1 /* ScrollType.Immediate */);
            }
        }
    }
    _compute(lineChanges) {
        // new ranges
        this.ranges = [];
        if (lineChanges) {
            // create ranges from changes
            lineChanges.forEach((lineChange) => {
                if (!this._options.ignoreCharChanges && lineChange.charChanges) {
                    lineChange.charChanges.forEach((charChange) => {
                        this.ranges.push({
                            rhs: true,
                            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(charChange.modifiedStartLineNumber, charChange.modifiedStartColumn, charChange.modifiedEndLineNumber, charChange.modifiedEndColumn)
                        });
                    });
                }
                else {
                    if (lineChange.modifiedEndLineNumber === 0) {
                        // a deletion
                        this.ranges.push({
                            rhs: true,
                            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedStartLineNumber + 1, 1)
                        });
                    }
                    else {
                        // an insertion or modification
                        this.ranges.push({
                            rhs: true,
                            range: new _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e(lineChange.modifiedStartLineNumber, 1, lineChange.modifiedEndLineNumber + 1, 1)
                        });
                    }
                }
            });
        }
        // sort
        this.ranges.sort((left, right) => _common_core_range_js__WEBPACK_IMPORTED_MODULE_7__/* .Range */ .e.compareRangesUsingStarts(left.range, right.range));
        this._onDidUpdate.fire(this);
    }
    _initIdx(fwd) {
        let found = false;
        const position = this._editor.getPosition();
        if (!position) {
            this.nextIdx = 0;
            return;
        }
        for (let i = 0, len = this.ranges.length; i < len && !found; i++) {
            const range = this.ranges[i].range;
            if (position.isBeforeOrEqual(range.getStartPosition())) {
                this.nextIdx = i + (fwd ? 0 : -1);
                found = true;
            }
        }
        if (!found) {
            // after the last change
            this.nextIdx = fwd ? 0 : this.ranges.length - 1;
        }
        if (this.nextIdx < 0) {
            this.nextIdx = this.ranges.length - 1;
        }
    }
    _move(fwd, scrollType) {
        _base_common_assert_js__WEBPACK_IMPORTED_MODULE_0__.ok(!this.disposed, 'Illegal State - diff navigator has been disposed');
        if (!this.canNavigate()) {
            return;
        }
        if (this.nextIdx === -1) {
            this._initIdx(fwd);
        }
        else if (fwd) {
            this.nextIdx += 1;
            if (this.nextIdx >= this.ranges.length) {
                this.nextIdx = 0;
            }
        }
        else {
            this.nextIdx -= 1;
            if (this.nextIdx < 0) {
                this.nextIdx = this.ranges.length - 1;
            }
        }
        const info = this.ranges[this.nextIdx];
        this.ignoreSelectionChange = true;
        try {
            const pos = info.range.getStartPosition();
            this._editor.setPosition(pos);
            this._editor.revealRangeInCenter(info.range, scrollType);
            this._updateAccessibilityState(pos.lineNumber, true);
        }
        finally {
            this.ignoreSelectionChange = false;
        }
    }
    _updateAccessibilityState(lineNumber, jumpToChange) {
        var _a;
        const modifiedEditor = (_a = this._editor.getModel()) === null || _a === void 0 ? void 0 : _a.modified;
        if (!modifiedEditor) {
            return;
        }
        const insertedOrModified = modifiedEditor.getLineDecorations(lineNumber).find(l => l.options.className === 'line-insert');
        if (insertedOrModified) {
            this._audioCueService.playAudioCue(_platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_4__/* .AudioCue */ .y$.diffLineModified, true);
        }
        else if (jumpToChange) {
            // The modified editor does not include deleted lines, but when
            // we are moved to the area where lines were deleted, play this cue
            this._audioCueService.playAudioCue(_platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_4__/* .AudioCue */ .y$.diffLineDeleted, true);
        }
        else {
            return;
        }
        const codeEditor = this._codeEditorService.getActiveCodeEditor();
        if (jumpToChange && codeEditor && insertedOrModified && this._accessibilityService.isScreenReaderOptimized()) {
            codeEditor.setSelection({ startLineNumber: lineNumber, startColumn: 0, endLineNumber: lineNumber, endColumn: Number.MAX_VALUE });
            codeEditor.writeScreenReaderContent('diff-navigation');
        }
    }
    canNavigate() {
        return this.ranges && this.ranges.length > 0;
    }
    next(scrollType = 0 /* ScrollType.Smooth */) {
        if (!this.canNavigateNext()) {
            return;
        }
        this._move(true, scrollType);
    }
    previous(scrollType = 0 /* ScrollType.Smooth */) {
        if (!this.canNavigatePrevious()) {
            return;
        }
        this._move(false, scrollType);
    }
    canNavigateNext() {
        return this.canNavigateLoop() || this.nextIdx < this.ranges.length - 1;
    }
    canNavigatePrevious() {
        return this.canNavigateLoop() || this.nextIdx !== 0;
    }
    canNavigateLoop() {
        return Boolean(this._options.findResultLoop);
    }
    dispose() {
        super.dispose();
        this.ranges = [];
        this.disposed = true;
    }
};
DiffNavigator = __decorate([
    __param(2, _platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_4__/* .IAudioCueService */ .e7),
    __param(3, _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_5__/* .ICodeEditorService */ .$),
    __param(4, _platform_accessibility_common_accessibility_js__WEBPACK_IMPORTED_MODULE_6__/* .IAccessibilityService */ .F)
], DiffNavigator);


/***/ }),

/***/ 90822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ DiffReview; }
/* harmony export */ });
/* harmony import */ var _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39862);
/* harmony import */ var _base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(30344);
/* harmony import */ var _base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99522);
/* harmony import */ var _base_browser_ui_actionbar_actionbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96653);
/* harmony import */ var _base_browser_ui_scrollbar_scrollableElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47049);
/* harmony import */ var _base_common_actions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1585);
/* harmony import */ var _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14162);
/* harmony import */ var _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79027);
/* harmony import */ var _base_common_themables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51446);
/* harmony import */ var _media_diffReview_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66233);
/* harmony import */ var _config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(86778);
/* harmony import */ var _editorExtensions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91213);
/* harmony import */ var _services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74312);
/* harmony import */ var _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75117);
/* harmony import */ var _common_core_position_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(13372);
/* harmony import */ var _common_languages_language_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21608);
/* harmony import */ var _common_tokens_lineTokens_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(15834);
/* harmony import */ var _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71850);
/* harmony import */ var _common_viewModel_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76414);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(23330);
/* harmony import */ var _platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(83144);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33022);
/* harmony import */ var _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81043);
/* harmony import */ var _platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95153);
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
























const DIFF_LINES_PADDING = 3;
class DiffEntry {
    constructor(originalLineStart, originalLineEnd, modifiedLineStart, modifiedLineEnd) {
        this.originalLineStart = originalLineStart;
        this.originalLineEnd = originalLineEnd;
        this.modifiedLineStart = modifiedLineStart;
        this.modifiedLineEnd = modifiedLineEnd;
    }
    getType() {
        if (this.originalLineStart === 0) {
            return 1 /* DiffEntryType.Insert */;
        }
        if (this.modifiedLineStart === 0) {
            return 2 /* DiffEntryType.Delete */;
        }
        return 0 /* DiffEntryType.Equal */;
    }
}
class Diff {
    constructor(entries) {
        this.entries = entries;
    }
}
const diffReviewInsertIcon = (0,_platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_20__/* .registerIcon */ .q5)('diff-review-insert', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_5__/* .Codicon */ .l.add, _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('diffReviewInsertIcon', 'Icon for \'Insert\' in diff review.'));
const diffReviewRemoveIcon = (0,_platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_20__/* .registerIcon */ .q5)('diff-review-remove', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_5__/* .Codicon */ .l.remove, _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('diffReviewRemoveIcon', 'Icon for \'Remove\' in diff review.'));
const diffReviewCloseIcon = (0,_platform_theme_common_iconRegistry_js__WEBPACK_IMPORTED_MODULE_20__/* .registerIcon */ .q5)('diff-review-close', _base_common_codicons_js__WEBPACK_IMPORTED_MODULE_5__/* .Codicon */ .l.close, _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('diffReviewCloseIcon', 'Icon for \'Close\' in diff review.'));
let DiffReview = class DiffReview extends _base_common_lifecycle_js__WEBPACK_IMPORTED_MODULE_6__/* .Disposable */ .JT {
    constructor(diffEditor, _languageService, _audioCueService, _configurationService) {
        super();
        this._languageService = _languageService;
        this._audioCueService = _audioCueService;
        this._configurationService = _configurationService;
        this._width = 0;
        this._diffEditor = diffEditor;
        this._isVisible = false;
        this.shadow = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_21__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.shadow.setClassName('diff-review-shadow');
        this.actionBarContainer = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_21__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.actionBarContainer.setClassName('diff-review-actions');
        this._actionBar = this._register(new _base_browser_ui_actionbar_actionbar_js__WEBPACK_IMPORTED_MODULE_2__/* .ActionBar */ .o(this.actionBarContainer.domNode));
        this._actionBar.push(new _base_common_actions_js__WEBPACK_IMPORTED_MODULE_4__/* .Action */ .aU('diffreview.close', _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('label.close', "Close"), 'close-diff-review ' + _base_common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassName(diffReviewCloseIcon), true, () => __awaiter(this, void 0, void 0, function* () { return this.hide(); })), { label: false, icon: true });
        this.domNode = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_21__/* .createFastDomNode */ .X)(document.createElement('div'));
        this.domNode.setClassName('diff-review monaco-editor-background');
        this._content = (0,_base_browser_fastDomNode_js__WEBPACK_IMPORTED_MODULE_21__/* .createFastDomNode */ .X)(document.createElement('div'));
        this._content.setClassName('diff-review-content');
        this._content.setAttribute('role', 'code');
        this.scrollbar = this._register(new _base_browser_ui_scrollbar_scrollableElement_js__WEBPACK_IMPORTED_MODULE_3__/* .DomScrollableElement */ .s$(this._content.domNode, {}));
        this.domNode.domNode.appendChild(this.scrollbar.getDomNode());
        this._register(diffEditor.onDidUpdateDiff(() => {
            if (!this._isVisible) {
                return;
            }
            this._diffs = this._compute();
            this._render();
        }));
        this._register(diffEditor.getModifiedEditor().onDidChangeCursorPosition(() => {
            if (!this._isVisible) {
                return;
            }
            this._render();
        }));
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(this.domNode.domNode, 'click', (e) => {
            e.preventDefault();
            const row = _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .findParentWithClass */ .Fx(e.target, 'diff-review-row');
            if (row) {
                this._goToRow(row);
            }
        }));
        this._register(_base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .addStandardDisposableListener */ .mu(this.domNode.domNode, 'keydown', (e) => {
            if (e.equals(18 /* KeyCode.DownArrow */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 18 /* KeyCode.DownArrow */)
                || e.equals(512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */)) {
                e.preventDefault();
                this._goToRow(this._getNextRow(), 'next');
            }
            if (e.equals(16 /* KeyCode.UpArrow */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 16 /* KeyCode.UpArrow */)
                || e.equals(512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */)) {
                e.preventDefault();
                this._goToRow(this._getPrevRow(), 'previous');
            }
            if (e.equals(9 /* KeyCode.Escape */)
                || e.equals(2048 /* KeyMod.CtrlCmd */ | 9 /* KeyCode.Escape */)
                || e.equals(512 /* KeyMod.Alt */ | 9 /* KeyCode.Escape */)
                || e.equals(1024 /* KeyMod.Shift */ | 9 /* KeyCode.Escape */)
                || e.equals(10 /* KeyCode.Space */)
                || e.equals(3 /* KeyCode.Enter */)) {
                e.preventDefault();
                this.accept();
            }
        }));
        this._register(this._configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('accessibility.verbosity.diffEditor')) {
                this._diffEditor.updateOptions({ accessibilityVerbose: this._configurationService.getValue('accessibility.verbosity.diffEditor') });
            }
        }));
        this._diffs = [];
        this._currentDiff = null;
    }
    prev() {
        let index = 0;
        if (!this._isVisible) {
            this._diffs = this._compute();
        }
        if (this._isVisible) {
            let currentIndex = -1;
            for (let i = 0, len = this._diffs.length; i < len; i++) {
                if (this._diffs[i] === this._currentDiff) {
                    currentIndex = i;
                    break;
                }
            }
            index = (this._diffs.length + currentIndex - 1);
        }
        else {
            index = this._findDiffIndex(this._diffEditor.getPosition());
        }
        if (this._diffs.length === 0) {
            // Nothing to do
            return;
        }
        index = index % this._diffs.length;
        const entries = this._diffs[index].entries;
        this._diffEditor.setPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_22__/* .Position */ .L(entries[0].modifiedLineStart, 1));
        this._diffEditor.setSelection({ startColumn: 1, startLineNumber: entries[0].modifiedLineStart, endColumn: 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, endLineNumber: entries[entries.length - 1].modifiedLineEnd });
        this._isVisible = true;
        this._diffEditor.doLayout();
        this._render();
        this._goToRow(this._getPrevRow(), 'previous');
    }
    next() {
        let index = 0;
        if (!this._isVisible) {
            this._diffs = this._compute();
        }
        if (this._isVisible) {
            let currentIndex = -1;
            for (let i = 0, len = this._diffs.length; i < len; i++) {
                if (this._diffs[i] === this._currentDiff) {
                    currentIndex = i;
                    break;
                }
            }
            index = (currentIndex + 1);
        }
        else {
            index = this._findDiffIndex(this._diffEditor.getPosition());
        }
        if (this._diffs.length === 0) {
            // Nothing to do
            return;
        }
        index = index % this._diffs.length;
        const entries = this._diffs[index].entries;
        this._diffEditor.setPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_22__/* .Position */ .L(entries[0].modifiedLineStart, 1));
        this._diffEditor.setSelection({ startColumn: 1, startLineNumber: entries[0].modifiedLineStart, endColumn: 1073741824 /* Constants.MAX_SAFE_SMALL_INTEGER */, endLineNumber: entries[entries.length - 1].modifiedLineEnd });
        this._isVisible = true;
        this._diffEditor.doLayout();
        this._render();
        this._goToRow(this._getNextRow(), 'next');
    }
    accept() {
        let jumpToLineNumber = -1;
        const current = this._getCurrentFocusedRow();
        if (current) {
            const lineNumber = parseInt(current.getAttribute('data-line'), 10);
            if (!isNaN(lineNumber)) {
                jumpToLineNumber = lineNumber;
            }
        }
        this.hide();
        if (jumpToLineNumber !== -1) {
            this._diffEditor.setPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_22__/* .Position */ .L(jumpToLineNumber, 1));
            this._diffEditor.revealPosition(new _common_core_position_js__WEBPACK_IMPORTED_MODULE_22__/* .Position */ .L(jumpToLineNumber, 1), 1 /* ScrollType.Immediate */);
        }
    }
    hide() {
        this._isVisible = false;
        this._diffEditor.updateOptions({ readOnly: false });
        this._diffEditor.focus();
        this._diffEditor.doLayout();
        this._render();
    }
    _getPrevRow() {
        const current = this._getCurrentFocusedRow();
        if (!current) {
            return this._getFirstRow();
        }
        if (current.previousElementSibling) {
            return current.previousElementSibling;
        }
        return current;
    }
    _getNextRow() {
        const current = this._getCurrentFocusedRow();
        if (!current) {
            return this._getFirstRow();
        }
        if (current.nextElementSibling) {
            return current.nextElementSibling;
        }
        return current;
    }
    _getFirstRow() {
        return this.domNode.domNode.querySelector('.diff-review-row');
    }
    _getCurrentFocusedRow() {
        const result = document.activeElement;
        if (result && /diff-review-row/.test(result.className)) {
            return result;
        }
        return null;
    }
    _goToRow(row, type) {
        const current = this._getCurrentFocusedRow();
        row.tabIndex = 0;
        row.focus();
        if (current && current !== row) {
            current.tabIndex = -1;
        }
        const element = !type ? current : type === 'next' ? current === null || current === void 0 ? void 0 : current.nextElementSibling : current === null || current === void 0 ? void 0 : current.previousElementSibling;
        if (element === null || element === void 0 ? void 0 : element.classList.contains("line-insert" /* DiffEditorLineClasses.Insert */)) {
            this._audioCueService.playAudioCue(_platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_17__/* .AudioCue */ .y$.diffLineInserted, true);
        }
        else if (element === null || element === void 0 ? void 0 : element.classList.contains("line-delete" /* DiffEditorLineClasses.Delete */)) {
            this._audioCueService.playAudioCue(_platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_17__/* .AudioCue */ .y$.diffLineDeleted, true);
        }
        this.scrollbar.scanDomNode();
    }
    isVisible() {
        return this._isVisible;
    }
    layout(top, width, height) {
        this._width = width;
        this.shadow.setTop(top - 6);
        this.shadow.setWidth(width);
        this.shadow.setHeight(this._isVisible ? 6 : 0);
        this.domNode.setTop(top);
        this.domNode.setWidth(width);
        this.domNode.setHeight(height);
        this._content.setHeight(height);
        this._content.setWidth(width);
        if (this._isVisible) {
            this.actionBarContainer.setAttribute('aria-hidden', 'false');
            this.actionBarContainer.setDisplay('block');
        }
        else {
            this.actionBarContainer.setAttribute('aria-hidden', 'true');
            this.actionBarContainer.setDisplay('none');
        }
    }
    _compute() {
        const lineChanges = this._diffEditor.getLineChanges();
        if (!lineChanges || lineChanges.length === 0) {
            return [];
        }
        const originalModel = this._diffEditor.getOriginalEditor().getModel();
        const modifiedModel = this._diffEditor.getModifiedEditor().getModel();
        if (!originalModel || !modifiedModel) {
            return [];
        }
        return DiffReview._mergeAdjacent(lineChanges, originalModel.getLineCount(), modifiedModel.getLineCount());
    }
    static _mergeAdjacent(lineChanges, originalLineCount, modifiedLineCount) {
        if (!lineChanges || lineChanges.length === 0) {
            return [];
        }
        const diffs = [];
        let diffsLength = 0;
        for (let i = 0, len = lineChanges.length; i < len; i++) {
            const lineChange = lineChanges[i];
            const originalStart = lineChange.originalStartLineNumber;
            const originalEnd = lineChange.originalEndLineNumber;
            const modifiedStart = lineChange.modifiedStartLineNumber;
            const modifiedEnd = lineChange.modifiedEndLineNumber;
            const r = [];
            let rLength = 0;
            // Emit before anchors
            {
                const originalEqualAbove = (originalEnd === 0 ? originalStart : originalStart - 1);
                const modifiedEqualAbove = (modifiedEnd === 0 ? modifiedStart : modifiedStart - 1);
                // Make sure we don't step into the previous diff
                let minOriginal = 1;
                let minModified = 1;
                if (i > 0) {
                    const prevLineChange = lineChanges[i - 1];
                    if (prevLineChange.originalEndLineNumber === 0) {
                        minOriginal = prevLineChange.originalStartLineNumber + 1;
                    }
                    else {
                        minOriginal = prevLineChange.originalEndLineNumber + 1;
                    }
                    if (prevLineChange.modifiedEndLineNumber === 0) {
                        minModified = prevLineChange.modifiedStartLineNumber + 1;
                    }
                    else {
                        minModified = prevLineChange.modifiedEndLineNumber + 1;
                    }
                }
                let fromOriginal = originalEqualAbove - DIFF_LINES_PADDING + 1;
                let fromModified = modifiedEqualAbove - DIFF_LINES_PADDING + 1;
                if (fromOriginal < minOriginal) {
                    const delta = minOriginal - fromOriginal;
                    fromOriginal = fromOriginal + delta;
                    fromModified = fromModified + delta;
                }
                if (fromModified < minModified) {
                    const delta = minModified - fromModified;
                    fromOriginal = fromOriginal + delta;
                    fromModified = fromModified + delta;
                }
                r[rLength++] = new DiffEntry(fromOriginal, originalEqualAbove, fromModified, modifiedEqualAbove);
            }
            // Emit deleted lines
            {
                if (originalEnd !== 0) {
                    r[rLength++] = new DiffEntry(originalStart, originalEnd, 0, 0);
                }
            }
            // Emit inserted lines
            {
                if (modifiedEnd !== 0) {
                    r[rLength++] = new DiffEntry(0, 0, modifiedStart, modifiedEnd);
                }
            }
            // Emit after anchors
            {
                const originalEqualBelow = (originalEnd === 0 ? originalStart + 1 : originalEnd + 1);
                const modifiedEqualBelow = (modifiedEnd === 0 ? modifiedStart + 1 : modifiedEnd + 1);
                // Make sure we don't step into the next diff
                let maxOriginal = originalLineCount;
                let maxModified = modifiedLineCount;
                if (i + 1 < len) {
                    const nextLineChange = lineChanges[i + 1];
                    if (nextLineChange.originalEndLineNumber === 0) {
                        maxOriginal = nextLineChange.originalStartLineNumber;
                    }
                    else {
                        maxOriginal = nextLineChange.originalStartLineNumber - 1;
                    }
                    if (nextLineChange.modifiedEndLineNumber === 0) {
                        maxModified = nextLineChange.modifiedStartLineNumber;
                    }
                    else {
                        maxModified = nextLineChange.modifiedStartLineNumber - 1;
                    }
                }
                let toOriginal = originalEqualBelow + DIFF_LINES_PADDING - 1;
                let toModified = modifiedEqualBelow + DIFF_LINES_PADDING - 1;
                if (toOriginal > maxOriginal) {
                    const delta = maxOriginal - toOriginal;
                    toOriginal = toOriginal + delta;
                    toModified = toModified + delta;
                }
                if (toModified > maxModified) {
                    const delta = maxModified - toModified;
                    toOriginal = toOriginal + delta;
                    toModified = toModified + delta;
                }
                r[rLength++] = new DiffEntry(originalEqualBelow, toOriginal, modifiedEqualBelow, toModified);
            }
            diffs[diffsLength++] = new Diff(r);
        }
        // Merge adjacent diffs
        let curr = diffs[0].entries;
        const r = [];
        let rLength = 0;
        for (let i = 1, len = diffs.length; i < len; i++) {
            const thisDiff = diffs[i].entries;
            const currLast = curr[curr.length - 1];
            const thisFirst = thisDiff[0];
            if (currLast.getType() === 0 /* DiffEntryType.Equal */
                && thisFirst.getType() === 0 /* DiffEntryType.Equal */
                && thisFirst.originalLineStart <= currLast.originalLineEnd) {
                // We are dealing with equal lines that overlap
                curr[curr.length - 1] = new DiffEntry(currLast.originalLineStart, thisFirst.originalLineEnd, currLast.modifiedLineStart, thisFirst.modifiedLineEnd);
                curr = curr.concat(thisDiff.slice(1));
                continue;
            }
            r[rLength++] = new Diff(curr);
            curr = thisDiff;
        }
        r[rLength++] = new Diff(curr);
        return r;
    }
    _findDiffIndex(pos) {
        const lineNumber = pos.lineNumber;
        for (let i = 0, len = this._diffs.length; i < len; i++) {
            const diff = this._diffs[i].entries;
            const lastModifiedLine = diff[diff.length - 1].modifiedLineEnd;
            if (lineNumber <= lastModifiedLine) {
                return i;
            }
        }
        return 0;
    }
    _render() {
        const originalOptions = this._diffEditor.getOriginalEditor().getOptions();
        const modifiedOptions = this._diffEditor.getModifiedEditor().getOptions();
        const originalModel = this._diffEditor.getOriginalEditor().getModel();
        const modifiedModel = this._diffEditor.getModifiedEditor().getModel();
        const originalModelOpts = originalModel.getOptions();
        const modifiedModelOpts = modifiedModel.getOptions();
        if (!this._isVisible || !originalModel || !modifiedModel) {
            _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .clearNode */ .PO(this._content.domNode);
            this._currentDiff = null;
            this.scrollbar.scanDomNode();
            return;
        }
        this._diffEditor.updateOptions({ readOnly: true });
        const diffIndex = this._findDiffIndex(this._diffEditor.getPosition());
        if (this._diffs[diffIndex] === this._currentDiff) {
            return;
        }
        this._currentDiff = this._diffs[diffIndex];
        const diffs = this._diffs[diffIndex].entries;
        const container = document.createElement('div');
        container.className = 'diff-review-table';
        container.setAttribute('role', 'list');
        container.setAttribute('aria-label', 'Difference review. Use "Stage | Unstage | Revert Selected Ranges" commands');
        (0,_config_domFontInfo_js__WEBPACK_IMPORTED_MODULE_23__/* .applyFontInfo */ .N)(container, modifiedOptions.get(48 /* EditorOption.fontInfo */));
        let minOriginalLine = 0;
        let maxOriginalLine = 0;
        let minModifiedLine = 0;
        let maxModifiedLine = 0;
        for (let i = 0, len = diffs.length; i < len; i++) {
            const diffEntry = diffs[i];
            const originalLineStart = diffEntry.originalLineStart;
            const originalLineEnd = diffEntry.originalLineEnd;
            const modifiedLineStart = diffEntry.modifiedLineStart;
            const modifiedLineEnd = diffEntry.modifiedLineEnd;
            if (originalLineStart !== 0 && ((minOriginalLine === 0 || originalLineStart < minOriginalLine))) {
                minOriginalLine = originalLineStart;
            }
            if (originalLineEnd !== 0 && ((maxOriginalLine === 0 || originalLineEnd > maxOriginalLine))) {
                maxOriginalLine = originalLineEnd;
            }
            if (modifiedLineStart !== 0 && ((minModifiedLine === 0 || modifiedLineStart < minModifiedLine))) {
                minModifiedLine = modifiedLineStart;
            }
            if (modifiedLineEnd !== 0 && ((maxModifiedLine === 0 || modifiedLineEnd > maxModifiedLine))) {
                maxModifiedLine = modifiedLineEnd;
            }
        }
        const header = document.createElement('div');
        header.className = 'diff-review-row';
        const cell = document.createElement('div');
        cell.className = 'diff-review-cell diff-review-summary';
        const originalChangedLinesCnt = maxOriginalLine - minOriginalLine + 1;
        const modifiedChangedLinesCnt = maxModifiedLine - minModifiedLine + 1;
        cell.appendChild(document.createTextNode(`${diffIndex + 1}/${this._diffs.length}: @@ -${minOriginalLine},${originalChangedLinesCnt} +${minModifiedLine},${modifiedChangedLinesCnt} @@`));
        header.setAttribute('data-line', String(minModifiedLine));
        const getAriaLines = (lines) => {
            if (lines === 0) {
                return _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('no_lines_changed', "no lines changed");
            }
            else if (lines === 1) {
                return _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('one_line_changed', "1 line changed");
            }
            else {
                return _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('more_lines_changed', "{0} lines changed", lines);
            }
        };
        const originalChangedLinesCntAria = getAriaLines(originalChangedLinesCnt);
        const modifiedChangedLinesCntAria = getAriaLines(modifiedChangedLinesCnt);
        header.setAttribute('aria-label', _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC({
            key: 'header',
            comment: [
                'This is the ARIA label for a git diff header.',
                'A git diff header looks like this: @@ -154,12 +159,39 @@.',
                'That encodes that at original line 154 (which is now line 159), 12 lines were removed/changed with 39 lines.',
                'Variables 0 and 1 refer to the diff index out of total number of diffs.',
                'Variables 2 and 4 will be numbers (a line number).',
                'Variables 3 and 5 will be "no lines changed", "1 line changed" or "X lines changed", localized separately.'
            ]
        }, "Difference {0} of {1}: original line {2}, {3}, modified line {4}, {5}", (diffIndex + 1), this._diffs.length, minOriginalLine, originalChangedLinesCntAria, minModifiedLine, modifiedChangedLinesCntAria));
        header.appendChild(cell);
        // @@ -504,7 +517,7 @@
        header.setAttribute('role', 'listitem');
        container.appendChild(header);
        const lineHeight = modifiedOptions.get(64 /* EditorOption.lineHeight */);
        let modLine = minModifiedLine;
        for (let i = 0, len = diffs.length; i < len; i++) {
            const diffEntry = diffs[i];
            DiffReview._renderSection(container, diffEntry, modLine, lineHeight, this._width, originalOptions, originalModel, originalModelOpts, modifiedOptions, modifiedModel, modifiedModelOpts, this._languageService.languageIdCodec);
            if (diffEntry.modifiedLineStart !== 0) {
                modLine = diffEntry.modifiedLineEnd;
            }
        }
        _base_browser_dom_js__WEBPACK_IMPORTED_MODULE_0__/* .clearNode */ .PO(this._content.domNode);
        this._content.domNode.appendChild(container);
        this.scrollbar.scanDomNode();
    }
    static _renderSection(dest, diffEntry, modLine, lineHeight, width, originalOptions, originalModel, originalModelOpts, modifiedOptions, modifiedModel, modifiedModelOpts, languageIdCodec) {
        const type = diffEntry.getType();
        let rowClassName = 'diff-review-row';
        let lineNumbersExtraClassName = '';
        const spacerClassName = 'diff-review-spacer';
        let spacerIcon = null;
        switch (type) {
            case 1 /* DiffEntryType.Insert */:
                rowClassName = 'diff-review-row line-insert';
                lineNumbersExtraClassName = ' char-insert';
                spacerIcon = diffReviewInsertIcon;
                break;
            case 2 /* DiffEntryType.Delete */:
                rowClassName = 'diff-review-row line-delete';
                lineNumbersExtraClassName = ' char-delete';
                spacerIcon = diffReviewRemoveIcon;
                break;
        }
        const originalLineStart = diffEntry.originalLineStart;
        const originalLineEnd = diffEntry.originalLineEnd;
        const modifiedLineStart = diffEntry.modifiedLineStart;
        const modifiedLineEnd = diffEntry.modifiedLineEnd;
        const cnt = Math.max(modifiedLineEnd - modifiedLineStart, originalLineEnd - originalLineStart);
        const originalLayoutInfo = originalOptions.get(140 /* EditorOption.layoutInfo */);
        const originalLineNumbersWidth = originalLayoutInfo.glyphMarginWidth + originalLayoutInfo.lineNumbersWidth;
        const modifiedLayoutInfo = modifiedOptions.get(140 /* EditorOption.layoutInfo */);
        const modifiedLineNumbersWidth = 10 + modifiedLayoutInfo.glyphMarginWidth + modifiedLayoutInfo.lineNumbersWidth;
        for (let i = 0; i <= cnt; i++) {
            const originalLine = (originalLineStart === 0 ? 0 : originalLineStart + i);
            const modifiedLine = (modifiedLineStart === 0 ? 0 : modifiedLineStart + i);
            const row = document.createElement('div');
            row.style.minWidth = width + 'px';
            row.className = rowClassName;
            row.setAttribute('role', 'listitem');
            if (modifiedLine !== 0) {
                modLine = modifiedLine;
            }
            row.setAttribute('data-line', String(modLine));
            const cell = document.createElement('div');
            cell.className = 'diff-review-cell';
            cell.style.height = `${lineHeight}px`;
            row.appendChild(cell);
            const originalLineNumber = document.createElement('span');
            originalLineNumber.style.width = (originalLineNumbersWidth + 'px');
            originalLineNumber.style.minWidth = (originalLineNumbersWidth + 'px');
            originalLineNumber.className = 'diff-review-line-number' + lineNumbersExtraClassName;
            if (originalLine !== 0) {
                originalLineNumber.appendChild(document.createTextNode(String(originalLine)));
            }
            else {
                originalLineNumber.innerText = '\u00a0';
            }
            cell.appendChild(originalLineNumber);
            const modifiedLineNumber = document.createElement('span');
            modifiedLineNumber.style.width = (modifiedLineNumbersWidth + 'px');
            modifiedLineNumber.style.minWidth = (modifiedLineNumbersWidth + 'px');
            modifiedLineNumber.style.paddingRight = '10px';
            modifiedLineNumber.className = 'diff-review-line-number' + lineNumbersExtraClassName;
            if (modifiedLine !== 0) {
                modifiedLineNumber.appendChild(document.createTextNode(String(modifiedLine)));
            }
            else {
                modifiedLineNumber.innerText = '\u00a0';
            }
            cell.appendChild(modifiedLineNumber);
            const spacer = document.createElement('span');
            spacer.className = spacerClassName;
            if (spacerIcon) {
                const spacerCodicon = document.createElement('span');
                spacerCodicon.className = _base_common_themables_js__WEBPACK_IMPORTED_MODULE_7__/* .ThemeIcon */ .k.asClassName(spacerIcon);
                spacerCodicon.innerText = '\u00a0\u00a0';
                spacer.appendChild(spacerCodicon);
            }
            else {
                spacer.innerText = '\u00a0\u00a0';
            }
            cell.appendChild(spacer);
            let lineContent;
            if (modifiedLine !== 0) {
                let html = this._renderLine(modifiedModel, modifiedOptions, modifiedModelOpts.tabSize, modifiedLine, languageIdCodec);
                if (DiffReview._ttPolicy) {
                    html = DiffReview._ttPolicy.createHTML(html);
                }
                cell.insertAdjacentHTML('beforeend', html);
                lineContent = modifiedModel.getLineContent(modifiedLine);
            }
            else {
                let html = this._renderLine(originalModel, originalOptions, originalModelOpts.tabSize, originalLine, languageIdCodec);
                if (DiffReview._ttPolicy) {
                    html = DiffReview._ttPolicy.createHTML(html);
                }
                cell.insertAdjacentHTML('beforeend', html);
                lineContent = originalModel.getLineContent(originalLine);
            }
            if (lineContent.length === 0) {
                lineContent = _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('blankLine', "blank");
            }
            let ariaLabel = '';
            switch (type) {
                case 0 /* DiffEntryType.Equal */:
                    if (originalLine === modifiedLine) {
                        ariaLabel = _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC({ key: 'unchangedLine', comment: ['The placeholders are contents of the line and should not be translated.'] }, "{0} unchanged line {1}", lineContent, originalLine);
                    }
                    else {
                        ariaLabel = _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('equalLine', "{0} original line {1} modified line {2}", lineContent, originalLine, modifiedLine);
                    }
                    break;
                case 1 /* DiffEntryType.Insert */:
                    ariaLabel = _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('insertLine', "+ {0} modified line {1}", lineContent, modifiedLine);
                    break;
                case 2 /* DiffEntryType.Delete */:
                    ariaLabel = _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('deleteLine', "- {0} original line {1}", lineContent, originalLine);
                    break;
            }
            row.setAttribute('aria-label', ariaLabel);
            dest.appendChild(row);
        }
    }
    static _renderLine(model, options, tabSize, lineNumber, languageIdCodec) {
        const lineContent = model.getLineContent(lineNumber);
        const fontInfo = options.get(48 /* EditorOption.fontInfo */);
        const lineTokens = _common_tokens_lineTokens_js__WEBPACK_IMPORTED_MODULE_13__/* .LineTokens */ .A.createEmpty(lineContent, languageIdCodec);
        const isBasicASCII = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_15__/* .ViewLineRenderingData */ .wA.isBasicASCII(lineContent, model.mightContainNonBasicASCII());
        const containsRTL = _common_viewModel_js__WEBPACK_IMPORTED_MODULE_15__/* .ViewLineRenderingData */ .wA.containsRTL(lineContent, isBasicASCII, model.mightContainRTL());
        const r = (0,_common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_14__/* .renderViewLine2 */ .tF)(new _common_viewLayout_viewLineRenderer_js__WEBPACK_IMPORTED_MODULE_14__/* .RenderLineInput */ .IJ((fontInfo.isMonospace && !options.get(31 /* EditorOption.disableMonospaceOptimizations */)), fontInfo.canUseHalfwidthRightwardsArrow, lineContent, false, isBasicASCII, containsRTL, 0, lineTokens, [], tabSize, 0, fontInfo.spaceWidth, fontInfo.middotWidth, fontInfo.wsmiddotWidth, options.get(113 /* EditorOption.stopRenderingLineAfter */), options.get(95 /* EditorOption.renderWhitespace */), options.get(90 /* EditorOption.renderControlCharacters */), options.get(49 /* EditorOption.fontLigatures */) !== _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_11__/* .EditorFontLigatures */ .n0.OFF, null));
        return r.html;
    }
};
DiffReview._ttPolicy = (0,_base_browser_trustedTypes_js__WEBPACK_IMPORTED_MODULE_1__/* .createTrustedTypesPolicy */ .Z)('diffReview', { createHTML: value => value });
DiffReview = __decorate([
    __param(1, _common_languages_language_js__WEBPACK_IMPORTED_MODULE_12__/* .ILanguageService */ .O),
    __param(2, _platform_audioCues_browser_audioCueService_js__WEBPACK_IMPORTED_MODULE_17__/* .IAudioCueService */ .e7),
    __param(3, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_18__/* .IConfigurationService */ .Ui)
], DiffReview);
// theming
class DiffReviewNext extends _editorExtensions_js__WEBPACK_IMPORTED_MODULE_9__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.diffReview.next',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('editor.action.diffReview.next', "Go to Next Difference"),
            alias: 'Go to Next Difference',
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_19__/* .ContextKeyExpr */ .Ao.has('isInDiffEditor'),
            kbOpts: {
                kbExpr: null,
                primary: 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const diffEditor = findFocusedDiffEditor(accessor);
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.diffReviewNext();
    }
}
class DiffReviewPrev extends _editorExtensions_js__WEBPACK_IMPORTED_MODULE_9__/* .EditorAction */ .R6 {
    constructor() {
        super({
            id: 'editor.action.diffReview.prev',
            label: _nls_js__WEBPACK_IMPORTED_MODULE_16__/* .localize */ .NC('editor.action.diffReview.prev', "Go to Previous Difference"),
            alias: 'Go to Previous Difference',
            precondition: _platform_contextkey_common_contextkey_js__WEBPACK_IMPORTED_MODULE_19__/* .ContextKeyExpr */ .Ao.has('isInDiffEditor'),
            kbOpts: {
                kbExpr: null,
                primary: 1024 /* KeyMod.Shift */ | 65 /* KeyCode.F7 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        const diffEditor = findFocusedDiffEditor(accessor);
        diffEditor === null || diffEditor === void 0 ? void 0 : diffEditor.diffReviewPrev();
    }
}
function findFocusedDiffEditor(accessor) {
    var _a;
    const codeEditorService = accessor.get(_services_codeEditorService_js__WEBPACK_IMPORTED_MODULE_10__/* .ICodeEditorService */ .$);
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
    return null;
}
(0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_9__/* .registerEditorAction */ .Qr)(DiffReviewNext);
(0,_editorExtensions_js__WEBPACK_IMPORTED_MODULE_9__/* .registerEditorAction */ .Qr)(DiffReviewPrev);


/***/ })

}]);