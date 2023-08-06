"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-dd308ff9"],{

/***/ 58054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Suggest widget*/\n\n.monaco-editor .suggest-widget {\n\twidth: 430px;\n\tz-index: 40;\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: 3px;\n}\n\n.monaco-editor .suggest-widget.message {\n\tflex-direction: row;\n\talign-items: center;\n}\n\n.monaco-editor .suggest-widget,\n.monaco-editor .suggest-details {\n\tflex: 0 1 auto;\n\twidth: 100%;\n\tborder-style: solid;\n\tborder-width: 1px;\n\tborder-color: var(--vscode-editorSuggestWidget-border);\n\tbackground-color: var(--vscode-editorSuggestWidget-background);\n}\n\n.monaco-editor.hc-black .suggest-widget,\n.monaco-editor.hc-black .suggest-details,\n.monaco-editor.hc-light .suggest-widget,\n.monaco-editor.hc-light .suggest-details {\n\tborder-width: 2px;\n}\n\n/* Styles for status bar part */\n\n\n.monaco-editor .suggest-widget .suggest-status-bar {\n\tbox-sizing: border-box;\n\tdisplay: none;\n\tflex-flow: row nowrap;\n\tjustify-content: space-between;\n\twidth: 100%;\n\tfont-size: 80%;\n\tpadding: 0 4px 0 4px;\n\tborder-top: 1px solid var(--vscode-editorSuggestWidget-border);\n\toverflow: hidden;\n}\n\n.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar {\n\tdisplay: flex;\n}\n\n.monaco-editor .suggest-widget .suggest-status-bar .left {\n\tpadding-right: 8px;\n}\n\n.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-label {\n\tcolor: var(--vscode-editorSuggestWidgetStatus-foreground);\n}\n\n.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label {\n\tmargin-right: 0;\n}\n\n.monaco-editor .suggest-widget.with-status-bar .suggest-status-bar .action-item:not(:last-of-type) .action-label::after {\n\tcontent: ', ';\n\tmargin-right: 0.3em;\n}\n\n.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row>.contents>.main>.right>.readMore,\n.monaco-editor .suggest-widget.with-status-bar .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-widget.with-status-bar:not(.docs-side) .monaco-list .monaco-list-row:hover>.contents>.main>.right.can-expand-details>.details-label {\n\twidth: 100%;\n}\n\n/* Styles for Message element for when widget is loading or is empty */\n\n.monaco-editor .suggest-widget>.message {\n\tpadding-left: 22px;\n}\n\n/** Styles for the list element **/\n\n.monaco-editor .suggest-widget>.tree {\n\theight: 100%;\n\twidth: 100%;\n}\n\n.monaco-editor .suggest-widget .monaco-list {\n\tuser-select: none;\n\t-webkit-user-select: none;\n}\n\n/** Styles for each row in the list element **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row {\n\tdisplay: flex;\n\t-mox-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tpadding-right: 10px;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 2px 2px;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\ttouch-action: none;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused {\n\tcolor: var(--vscode-editorSuggestWidget-selectedForeground);\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused .codicon {\n\tcolor: var(--vscode-editorSuggestWidget-selectedIconForeground);\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents {\n\tflex: 1;\n\theight: 100%;\n\toverflow: hidden;\n\tpadding-left: 2px;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main {\n\tdisplay: flex;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: pre;\n\tjustify-content: space-between;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left,\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {\n\tdisplay: flex;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.focused)>.contents>.main .monaco-icon-label {\n\tcolor: var(--vscode-editorSuggestWidget-foreground);\n}\n\n.monaco-editor .suggest-widget:not(.frozen) .monaco-highlighted-label .highlight {\n\tfont-weight: bold;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main .monaco-highlighted-label .highlight {\n\tcolor: var(--vscode-editorSuggestWidget-highlightForeground);\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused>.contents>.main .monaco-highlighted-label .highlight {\n\tcolor: var(--vscode-editorSuggestWidget-focusHighlightForeground);\n}\n\n/** ReadMore Icon styles **/\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close,\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore::before {\n\tcolor: inherit;\n\topacity: 1;\n\tfont-size: 14px;\n\tcursor: pointer;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close {\n\tposition: absolute;\n\ttop: 6px;\n\tright: 2px;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.codicon-close:hover,\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore:hover {\n\topacity: 1;\n}\n\n/** signature, qualifier, type/details opacity **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {\n\topacity: 0.7;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.signature-label {\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\topacity: 0.6;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.qualifier-label {\n\tmargin-left: 12px;\n\topacity: 0.4;\n\tfont-size: 85%;\n\tline-height: initial;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\talign-self: center;\n}\n\n/** Type Info and icon next to the label in the focused completion item **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {\n\tfont-size: 85%;\n\tmargin-left: 1.1em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label>.monaco-tokenized-source {\n\tdisplay: inline;\n}\n\n/** Details: if using CompletionItem#details, show on focus **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.details-label {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-widget:not(.shows-details) .monaco-list .monaco-list-row.focused>.contents>.main>.right>.details-label {\n\tdisplay: inline;\n}\n\n/** Details: if using CompletionItemLabel#details, always show **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.right>.details-label,\n.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row.focused:not(.string-label)>.contents>.main>.right>.details-label {\n\tdisplay: inline;\n}\n\n/** Ellipsis on hover **/\n\n.monaco-editor .suggest-widget:not(.docs-side) .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right.can-expand-details>.details-label {\n\twidth: calc(100% - 26px);\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left {\n\tflex-shrink: 1;\n\tflex-grow: 1;\n\toverflow: hidden;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.left>.monaco-icon-label {\n\tflex-shrink: 0;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row:not(.string-label)>.contents>.main>.left>.monaco-icon-label {\n\tmax-width: 100%;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.left>.monaco-icon-label {\n\tflex-shrink: 1;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right {\n\toverflow: hidden;\n\tflex-shrink: 4;\n\tmax-width: 70%;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {\n\tdisplay: inline-block;\n\tposition: absolute;\n\tright: 10px;\n\twidth: 18px;\n\theight: 18px;\n\tvisibility: hidden;\n}\n\n/** Do NOT display ReadMore when docs is side/below **/\n\n.monaco-editor .suggest-widget.docs-side .monaco-list .monaco-list-row>.contents>.main>.right>.readMore {\n\tdisplay: none !important;\n}\n\n/** Do NOT display ReadMore when using plain CompletionItemLabel (details/documentation might not be resolved) **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.string-label>.contents>.main>.right>.readMore {\n\tdisplay: none;\n}\n\n/** Focused item can show ReadMore, but can't when docs is side/below **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused.string-label>.contents>.main>.right>.readMore {\n\tdisplay: inline-block;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row.focused:hover>.contents>.main>.right>.readMore {\n\tvisibility: visible;\n}\n\n/** Styles for each row in the list **/\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated {\n\topacity: 0.66;\n\ttext-decoration: unset;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label.deprecated>.monaco-icon-label-container>.monaco-icon-name-container {\n\ttext-decoration: line-through;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .monaco-icon-label::before {\n\theight: 100%;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon {\n\tdisplay: block;\n\theight: 16px;\n\twidth: 16px;\n\tmargin-left: 2px;\n\tbackground-repeat: no-repeat;\n\tbackground-size: 80%;\n\tbackground-position: center;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.hide {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .suggest-icon {\n\tdisplay: flex;\n\talign-items: center;\n\tmargin-right: 4px;\n}\n\n.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .icon,\n.monaco-editor .suggest-widget.no-icons .monaco-list .monaco-list-row .suggest-icon::before {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-widget .monaco-list .monaco-list-row .icon.customcolor .colorspan {\n\tmargin: 0 0 0 0.3em;\n\tborder: 0.1em solid #000;\n\twidth: 0.7em;\n\theight: 0.7em;\n\tdisplay: inline-block;\n}\n\n/** Styles for the docs of the completion item in focus **/\n\n.monaco-editor .suggest-details-container {\n\tz-index: 41;\n}\n\n.monaco-editor .suggest-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tcursor: default;\n\tcolor: var(--vscode-editorSuggestWidget-foreground);\n}\n\n.monaco-editor .suggest-details.focused {\n\tborder-color: var(--vscode-focusBorder);\n}\n\n.monaco-editor .suggest-details a {\n\tcolor: var(--vscode-textLink-foreground);\n}\n\n.monaco-editor .suggest-details a:hover {\n\tcolor: var(--vscode-textLink-activeForeground);\n}\n\n.monaco-editor .suggest-details code {\n\tbackground-color: var(--vscode-textCodeBlock-background);\n}\n\n.monaco-editor .suggest-details.no-docs {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element {\n\tflex: 1;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body {\n\tbox-sizing: border-box;\n\theight: 100%;\n\twidth: 100%;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type {\n\tflex: 2;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\topacity: 0.7;\n\twhite-space: pre;\n\tmargin: 0 24px 0 0;\n\tpadding: 4px 0 12px 5px;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.header>.type.auto-wrap {\n\twhite-space: normal;\n\tword-break: break-all;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs {\n\tmargin: 0;\n\tpadding: 4px 5px;\n\twhite-space: pre-wrap;\n}\n\n.monaco-editor .suggest-details.no-type>.monaco-scrollable-element>.body>.docs {\n\tmargin-right: 24px;\n\toverflow: hidden;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs {\n\tpadding: 0;\n\twhite-space: initial;\n\tmin-height: calc(1rem + 8px);\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div,\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>span:not(:empty) {\n\tpadding: 4px 5px;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:first-child {\n\tmargin-top: 0;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs>div>p:last-child {\n\tmargin-bottom: 0;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .monaco-tokenized-source {\n\twhite-space: pre;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs .code {\n\twhite-space: pre-wrap;\n\tword-wrap: break-word;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>.docs.markdown-docs .codicon {\n\tvertical-align: sub;\n}\n\n.monaco-editor .suggest-details>.monaco-scrollable-element>.body>p:empty {\n\tdisplay: none;\n}\n\n.monaco-editor .suggest-details code {\n\tborder-radius: 3px;\n\tpadding: 0 0.4em;\n}\n\n.monaco-editor .suggest-details ul {\n\tpadding-left: 20px;\n}\n\n.monaco-editor .suggest-details ol {\n\tpadding-left: 20px;\n}\n\n.monaco-editor .suggest-details p code {\n\tfont-family: var(--monaco-monospace-font);\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ CompletionModel; },
/* harmony export */   t: function() { return /* binding */ LineContext; }
/* harmony export */ });
/* harmony import */ var _base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90256);
/* harmony import */ var _base_common_strings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23607);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



class LineContext {
    constructor(leadingLineContent, characterCountDelta) {
        this.leadingLineContent = leadingLineContent;
        this.characterCountDelta = characterCountDelta;
    }
}
/**
 * Sorted, filtered completion view model
 * */
class CompletionModel {
    constructor(items, column, lineContext, wordDistance, options, snippetSuggestions, fuzzyScoreOptions = _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .FuzzyScoreOptions */ .mX.default, clipboardText = undefined) {
        this.clipboardText = clipboardText;
        this._snippetCompareFn = CompletionModel._compareCompletionItems;
        this._items = items;
        this._column = column;
        this._wordDistance = wordDistance;
        this._options = options;
        this._refilterKind = 1 /* Refilter.All */;
        this._lineContext = lineContext;
        this._fuzzyScoreOptions = fuzzyScoreOptions;
        if (snippetSuggestions === 'top') {
            this._snippetCompareFn = CompletionModel._compareCompletionItemsSnippetsUp;
        }
        else if (snippetSuggestions === 'bottom') {
            this._snippetCompareFn = CompletionModel._compareCompletionItemsSnippetsDown;
        }
    }
    get lineContext() {
        return this._lineContext;
    }
    set lineContext(value) {
        if (this._lineContext.leadingLineContent !== value.leadingLineContent
            || this._lineContext.characterCountDelta !== value.characterCountDelta) {
            this._refilterKind = this._lineContext.characterCountDelta < value.characterCountDelta && this._filteredItems ? 2 /* Refilter.Incr */ : 1 /* Refilter.All */;
            this._lineContext = value;
        }
    }
    get items() {
        this._ensureCachedState();
        return this._filteredItems;
    }
    getItemsByProvider() {
        this._ensureCachedState();
        return this._itemsByProvider;
    }
    getIncompleteProvider() {
        this._ensureCachedState();
        const result = new Set();
        for (const [provider, items] of this.getItemsByProvider()) {
            if (items.length > 0 && items[0].container.incomplete) {
                result.add(provider);
            }
        }
        return result;
    }
    get stats() {
        this._ensureCachedState();
        return this._stats;
    }
    _ensureCachedState() {
        if (this._refilterKind !== 0 /* Refilter.Nothing */) {
            this._createCachedState();
        }
    }
    _createCachedState() {
        this._itemsByProvider = new Map();
        const labelLengths = [];
        const { leadingLineContent, characterCountDelta } = this._lineContext;
        let word = '';
        let wordLow = '';
        // incrementally filter less
        const source = this._refilterKind === 1 /* Refilter.All */ ? this._items : this._filteredItems;
        const target = [];
        // picks a score function based on the number of
        // items that we have to score/filter and based on the
        // user-configuration
        const scoreFn = (!this._options.filterGraceful || source.length > 2000) ? _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyScore */ .EW : _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .fuzzyScoreGracefulAggressive */ .l7;
        for (let i = 0; i < source.length; i++) {
            const item = source[i];
            if (item.isInvalid) {
                continue; // SKIP invalid items
            }
            // keep all items by their provider
            const arr = this._itemsByProvider.get(item.provider);
            if (arr) {
                arr.push(item);
            }
            else {
                this._itemsByProvider.set(item.provider, [item]);
            }
            // 'word' is that remainder of the current line that we
            // filter and score against. In theory each suggestion uses a
            // different word, but in practice not - that's why we cache
            const overwriteBefore = item.position.column - item.editStart.column;
            const wordLen = overwriteBefore + characterCountDelta - (item.position.column - this._column);
            if (word.length !== wordLen) {
                word = wordLen === 0 ? '' : leadingLineContent.slice(-wordLen);
                wordLow = word.toLowerCase();
            }
            // remember the word against which this item was
            // scored
            item.word = word;
            if (wordLen === 0) {
                // when there is nothing to score against, don't
                // event try to do. Use a const rank and rely on
                // the fallback-sort using the initial sort order.
                // use a score of `-100` because that is out of the
                // bound of values `fuzzyScore` will return
                item.score = _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .FuzzyScore */ .CL.Default;
            }
            else {
                // skip word characters that are whitespace until
                // we have hit the replace range (overwriteBefore)
                let wordPos = 0;
                while (wordPos < overwriteBefore) {
                    const ch = word.charCodeAt(wordPos);
                    if (ch === 32 /* CharCode.Space */ || ch === 9 /* CharCode.Tab */) {
                        wordPos += 1;
                    }
                    else {
                        break;
                    }
                }
                if (wordPos >= wordLen) {
                    // the wordPos at which scoring starts is the whole word
                    // and therefore the same rules as not having a word apply
                    item.score = _base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .FuzzyScore */ .CL.Default;
                }
                else if (typeof item.completion.filterText === 'string') {
                    // when there is a `filterText` it must match the `word`.
                    // if it matches we check with the label to compute highlights
                    // and if that doesn't yield a result we have no highlights,
                    // despite having the match
                    const match = scoreFn(word, wordLow, wordPos, item.completion.filterText, item.filterTextLow, 0, this._fuzzyScoreOptions);
                    if (!match) {
                        continue; // NO match
                    }
                    if ((0,_base_common_strings_js__WEBPACK_IMPORTED_MODULE_2__/* .compareIgnoreCase */ .zY)(item.completion.filterText, item.textLabel) === 0) {
                        // filterText and label are actually the same -> use good highlights
                        item.score = match;
                    }
                    else {
                        // re-run the scorer on the label in the hope of a result BUT use the rank
                        // of the filterText-match
                        item.score = (0,_base_common_filters_js__WEBPACK_IMPORTED_MODULE_1__/* .anyScore */ .jB)(word, wordLow, wordPos, item.textLabel, item.labelLow, 0);
                        item.score[0] = match[0]; // use score from filterText
                    }
                }
                else {
                    // by default match `word` against the `label`
                    const match = scoreFn(word, wordLow, wordPos, item.textLabel, item.labelLow, 0, this._fuzzyScoreOptions);
                    if (!match) {
                        continue; // NO match
                    }
                    item.score = match;
                }
            }
            item.idx = i;
            item.distance = this._wordDistance.distance(item.position, item.completion);
            target.push(item);
            // update stats
            labelLengths.push(item.textLabel.length);
        }
        this._filteredItems = target.sort(this._snippetCompareFn);
        this._refilterKind = 0 /* Refilter.Nothing */;
        this._stats = {
            pLabelLen: labelLengths.length ?
                (0,_base_common_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .quickSelect */ .HW)(labelLengths.length - .85, labelLengths, (a, b) => a - b)
                : 0
        };
    }
    static _compareCompletionItems(a, b) {
        if (a.score[0] > b.score[0]) {
            return -1;
        }
        else if (a.score[0] < b.score[0]) {
            return 1;
        }
        else if (a.distance < b.distance) {
            return -1;
        }
        else if (a.distance > b.distance) {
            return 1;
        }
        else if (a.idx < b.idx) {
            return -1;
        }
        else if (a.idx > b.idx) {
            return 1;
        }
        else {
            return 0;
        }
    }
    static _compareCompletionItemsSnippetsDown(a, b) {
        if (a.completion.kind !== b.completion.kind) {
            if (a.completion.kind === 27 /* CompletionItemKind.Snippet */) {
                return 1;
            }
            else if (b.completion.kind === 27 /* CompletionItemKind.Snippet */) {
                return -1;
            }
        }
        return CompletionModel._compareCompletionItems(a, b);
    }
    static _compareCompletionItemsSnippetsUp(a, b) {
        if (a.completion.kind !== b.completion.kind) {
            if (a.completion.kind === 27 /* CompletionItemKind.Snippet */) {
                return -1;
            }
            else if (b.completion.kind === 27 /* CompletionItemKind.Snippet */) {
                return 1;
            }
        }
        return CompletionModel._compareCompletionItems(a, b);
    }
}


/***/ }),

/***/ 57333:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79873);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67152);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77044);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21114);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11542);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70204);
/* harmony import */ var _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_25_webpack_5_88_1_node_modules_postcss_loader_dist_cjs_js_suggest_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58054);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_3_3_3_webpack_5_88_1_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_25_webpack_5_88_1_node_modules_postcss_loader_dist_cjs_js_suggest_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_25_webpack_5_88_1_node_modules_postcss_loader_dist_cjs_js_suggest_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z && _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_25_webpack_5_88_1_node_modules_postcss_loader_dist_cjs_js_suggest_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals ? _css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_cjs_js_postcss_loader_7_3_3_postcss_8_4_25_webpack_5_88_1_node_modules_postcss_loader_dist_cjs_js_suggest_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.locals : undefined);


/***/ })

}]);