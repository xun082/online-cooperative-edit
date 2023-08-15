(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-fb680737"],{

/***/ 15846:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

self["MonacoEnvironment"] = (function (paths) {
      function stripTrailingSlash(str) {
        return str.replace(/\/$/, '');
      }
      return {
        globalAPI: false,
        getWorkerUrl: function (moduleId, label) {
          var pathPrefix =  true ? __webpack_require__.p : 0;
          var result = (pathPrefix ? stripTrailingSlash(pathPrefix) + '/' : '') + paths[label];
          if (/^((http:)|(https:)|(file:)|(\/\/))/.test(result)) {
            var currentUrl = String(window.location);
            var currentOrigin = currentUrl.substr(0, currentUrl.length - window.location.hash.length - window.location.search.length - window.location.pathname.length);
            if (result.substring(0, currentOrigin.length) !== currentOrigin) {
              if(/^(\/\/)/.test(result)) {
                result = window.location.protocol + result
              }
              var js = '/*' + label + '*/importScripts("' + result + '");';
              var blob = new Blob([js], { type: 'application/javascript' });
              return URL.createObjectURL(blob);
            }
          }
          return result;
        }
      };
    })({
  "editorWorkerService": "editor.worker.js",
  "css": "css.worker.js",
  "html": "html.worker.js",
  "json": "json.worker.js",
  "typescript": "ts.worker.js",
  "javascript": "ts.worker.js",
  "less": "css.worker.js",
  "scss": "css.worker.js",
  "handlebars": "html.worker.js",
  "razor": "html.worker.js"
});
__webpack_require__(70148);
__webpack_require__(62756);
__webpack_require__(77904);
__webpack_require__(68642);
__webpack_require__(696);
__webpack_require__(93028);
__webpack_require__(24429);
__webpack_require__(86598);
__webpack_require__(16991);
__webpack_require__(64284);
__webpack_require__(46816);
__webpack_require__(29515);
__webpack_require__(8322);
__webpack_require__(18424);
__webpack_require__(72367);
__webpack_require__(26869);
__webpack_require__(35855);
__webpack_require__(37760);
__webpack_require__(95287);
__webpack_require__(32017);
__webpack_require__(19322);
__webpack_require__(49416);
__webpack_require__(89246);
__webpack_require__(82768);
__webpack_require__(75811);
__webpack_require__(98389);
__webpack_require__(34576);
__webpack_require__(43047);
__webpack_require__(99330);
__webpack_require__(27790);
__webpack_require__(19280);
__webpack_require__(96469);
__webpack_require__(5551);
__webpack_require__(11364);
__webpack_require__(9425);
__webpack_require__(36423);
__webpack_require__(91466);
__webpack_require__(72678);
__webpack_require__(52104);
__webpack_require__(94109);
__webpack_require__(1426);
__webpack_require__(41896);
__webpack_require__(97211);
__webpack_require__(40898);
__webpack_require__(66485);
__webpack_require__(2324);
__webpack_require__(781);
__webpack_require__(60495);
__webpack_require__(46168);
__webpack_require__(68732);
__webpack_require__(55809);
__webpack_require__(50516);
__webpack_require__(57730);
__webpack_require__(58615);
__webpack_require__(9267);
__webpack_require__(56970);
__webpack_require__(78826);
__webpack_require__(88666);
__webpack_require__(83042);
__webpack_require__(95027);
__webpack_require__(71258);
__webpack_require__(34958);
module.exports = __webpack_require__(77894);
__webpack_require__(58097);
__webpack_require__(33332);
__webpack_require__(24414);
__webpack_require__(23391);
__webpack_require__(21093);
__webpack_require__(90978);
__webpack_require__(55866);
__webpack_require__(62336);
__webpack_require__(80898);
__webpack_require__(38480);
__webpack_require__(6912);
__webpack_require__(31831);
__webpack_require__(32378);
__webpack_require__(1342);
__webpack_require__(4076);
__webpack_require__(3946);
__webpack_require__(59851);
__webpack_require__(32843);
__webpack_require__(39809);
__webpack_require__(82914);
__webpack_require__(9994);
__webpack_require__(39690);
__webpack_require__(44937);
__webpack_require__(33723);
__webpack_require__(68396);
__webpack_require__(56223);
__webpack_require__(66148);
__webpack_require__(66998);
__webpack_require__(22734);
__webpack_require__(72541);
__webpack_require__(60777);
__webpack_require__(38825);
__webpack_require__(6222);
__webpack_require__(59059);
__webpack_require__(16107);
__webpack_require__(68363);
__webpack_require__(29845);
__webpack_require__(43065);
__webpack_require__(20321);
__webpack_require__(78157);
__webpack_require__(90194);
__webpack_require__(43117);
__webpack_require__(17047);
__webpack_require__(22617);
__webpack_require__(71891);
__webpack_require__(16864);
__webpack_require__(86270);
__webpack_require__(68445);
__webpack_require__(57367);
__webpack_require__(22974);
__webpack_require__(76112);
__webpack_require__(3186);
__webpack_require__(7736);
__webpack_require__(44759);
__webpack_require__(57738);
__webpack_require__(80821);
__webpack_require__(41996);
__webpack_require__(66020);
__webpack_require__(93151);
__webpack_require__(99110);
__webpack_require__(87215);
__webpack_require__(76214);
__webpack_require__(68280);
__webpack_require__(36090);
__webpack_require__(4228);
__webpack_require__(80729);
__webpack_require__(57099);
__webpack_require__(30179);
__webpack_require__(29490);
__webpack_require__(80849);
__webpack_require__(3762);
__webpack_require__(22059);
__webpack_require__(55646);
__webpack_require__(95599);
__webpack_require__(29008);
__webpack_require__(83582);
__webpack_require__(67309);
__webpack_require__(39842);
__webpack_require__(83584);
__webpack_require__(79235);
__webpack_require__(22407);
__webpack_require__(28298);
__webpack_require__(17358);

/***/ }),

/***/ 35764:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

self["MonacoEnvironment"] = (function (paths) {
      function stripTrailingSlash(str) {
        return str.replace(/\/$/, '');
      }
      return {
        globalAPI: false,
        getWorkerUrl: function (moduleId, label) {
          var pathPrefix =  true ? __webpack_require__.p : 0;
          var result = (pathPrefix ? stripTrailingSlash(pathPrefix) + '/' : '') + paths[label];
          if (/^((http:)|(https:)|(file:)|(\/\/))/.test(result)) {
            var currentUrl = String(window.location);
            var currentOrigin = currentUrl.substr(0, currentUrl.length - window.location.hash.length - window.location.search.length - window.location.pathname.length);
            if (result.substring(0, currentOrigin.length) !== currentOrigin) {
              if(/^(\/\/)/.test(result)) {
                result = window.location.protocol + result
              }
              var js = '/*' + label + '*/importScripts("' + result + '");';
              var blob = new Blob([js], { type: 'application/javascript' });
              return URL.createObjectURL(blob);
            }
          }
          return result;
        }
      };
    })({
  "editorWorkerService": "editor.worker.js",
  "css": "css.worker.js",
  "html": "html.worker.js",
  "json": "json.worker.js",
  "typescript": "ts.worker.js",
  "javascript": "ts.worker.js",
  "less": "css.worker.js",
  "scss": "css.worker.js",
  "handlebars": "html.worker.js",
  "razor": "html.worker.js"
});
__webpack_require__(70148);
__webpack_require__(62756);
__webpack_require__(77904);
__webpack_require__(68642);
__webpack_require__(696);
__webpack_require__(93028);
__webpack_require__(24429);
__webpack_require__(86598);
__webpack_require__(16991);
__webpack_require__(64284);
__webpack_require__(46816);
__webpack_require__(29515);
__webpack_require__(8322);
__webpack_require__(18424);
__webpack_require__(72367);
__webpack_require__(26869);
__webpack_require__(35855);
__webpack_require__(37760);
__webpack_require__(95287);
__webpack_require__(32017);
__webpack_require__(19322);
__webpack_require__(49416);
__webpack_require__(89246);
__webpack_require__(82768);
__webpack_require__(75811);
__webpack_require__(98389);
__webpack_require__(34576);
__webpack_require__(43047);
__webpack_require__(99330);
__webpack_require__(27790);
__webpack_require__(19280);
__webpack_require__(96469);
__webpack_require__(5551);
__webpack_require__(11364);
__webpack_require__(9425);
__webpack_require__(36423);
__webpack_require__(91466);
__webpack_require__(72678);
__webpack_require__(52104);
__webpack_require__(94109);
__webpack_require__(1426);
__webpack_require__(41896);
__webpack_require__(97211);
__webpack_require__(40898);
__webpack_require__(66485);
__webpack_require__(2324);
__webpack_require__(781);
__webpack_require__(60495);
__webpack_require__(46168);
__webpack_require__(68732);
__webpack_require__(55809);
__webpack_require__(50516);
__webpack_require__(57730);
__webpack_require__(58615);
__webpack_require__(9267);
__webpack_require__(56970);
__webpack_require__(78826);
__webpack_require__(88666);
__webpack_require__(83042);
__webpack_require__(95027);
__webpack_require__(71258);
__webpack_require__(34958);
module.exports = __webpack_require__(22925);
__webpack_require__(58097);
__webpack_require__(33332);
__webpack_require__(24414);
__webpack_require__(23391);
__webpack_require__(21093);
__webpack_require__(90978);
__webpack_require__(55866);
__webpack_require__(62336);
__webpack_require__(80898);
__webpack_require__(38480);
__webpack_require__(6912);
__webpack_require__(31831);
__webpack_require__(32378);
__webpack_require__(1342);
__webpack_require__(4076);
__webpack_require__(3946);
__webpack_require__(59851);
__webpack_require__(32843);
__webpack_require__(39809);
__webpack_require__(82914);
__webpack_require__(9994);
__webpack_require__(39690);
__webpack_require__(44937);
__webpack_require__(33723);
__webpack_require__(68396);
__webpack_require__(56223);
__webpack_require__(66148);
__webpack_require__(66998);
__webpack_require__(22734);
__webpack_require__(72541);
__webpack_require__(60777);
__webpack_require__(38825);
__webpack_require__(6222);
__webpack_require__(59059);
__webpack_require__(16107);
__webpack_require__(68363);
__webpack_require__(29845);
__webpack_require__(43065);
__webpack_require__(20321);
__webpack_require__(78157);
__webpack_require__(90194);
__webpack_require__(43117);
__webpack_require__(17047);
__webpack_require__(22617);
__webpack_require__(71891);
__webpack_require__(16864);
__webpack_require__(86270);
__webpack_require__(68445);
__webpack_require__(57367);
__webpack_require__(22974);
__webpack_require__(76112);
__webpack_require__(3186);
__webpack_require__(7736);
__webpack_require__(44759);
__webpack_require__(57738);
__webpack_require__(80821);
__webpack_require__(41996);
__webpack_require__(66020);
__webpack_require__(93151);
__webpack_require__(99110);
__webpack_require__(87215);
__webpack_require__(76214);
__webpack_require__(68280);
__webpack_require__(36090);
__webpack_require__(4228);
__webpack_require__(80729);
__webpack_require__(57099);
__webpack_require__(30179);
__webpack_require__(29490);
__webpack_require__(80849);
__webpack_require__(3762);
__webpack_require__(22059);
__webpack_require__(55646);
__webpack_require__(95599);
__webpack_require__(29008);
__webpack_require__(83582);
__webpack_require__(67309);
__webpack_require__(39842);
__webpack_require__(83584);
__webpack_require__(79235);
__webpack_require__(22407);
__webpack_require__(28298);
__webpack_require__(17358);

/***/ }),

/***/ 77894:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationTokenSource: function() { return /* binding */ CancellationTokenSource; },
/* harmony export */   Emitter: function() { return /* binding */ Emitter; },
/* harmony export */   KeyCode: function() { return /* binding */ KeyCode; },
/* harmony export */   KeyMod: function() { return /* binding */ KeyMod; },
/* harmony export */   MarkerSeverity: function() { return /* binding */ MarkerSeverity; },
/* harmony export */   MarkerTag: function() { return /* binding */ MarkerTag; },
/* harmony export */   Position: function() { return /* binding */ Position; },
/* harmony export */   Range: function() { return /* binding */ Range; },
/* harmony export */   Selection: function() { return /* binding */ Selection; },
/* harmony export */   SelectionDirection: function() { return /* binding */ SelectionDirection; },
/* harmony export */   Token: function() { return /* binding */ Token; },
/* harmony export */   Uri: function() { return /* binding */ Uri; },
/* harmony export */   editor: function() { return /* binding */ editor; },
/* harmony export */   languages: function() { return /* binding */ languages; }
/* harmony export */ });
/* harmony import */ var _common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75117);
/* harmony import */ var _common_services_editorBaseApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55012);
/* harmony import */ var _standalone_browser_standaloneEditor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87373);
/* harmony import */ var _standalone_browser_standaloneLanguages_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75404);
/* harmony import */ var _contrib_format_browser_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22580);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





// Set defaults for standalone editor
_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorOptions */ .BH.wrappingIndent.defaultValue = 0 /* WrappingIndent.None */;
_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorOptions */ .BH.glyphMargin.defaultValue = false;
_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorOptions */ .BH.autoIndent.defaultValue = 3 /* EditorAutoIndentStrategy.Advanced */;
_common_config_editorOptions_js__WEBPACK_IMPORTED_MODULE_0__/* .EditorOptions */ .BH.overviewRulerLanes.defaultValue = 2;
// We need to register a formatter selector which simply picks the first available formatter.
// See https://github.com/microsoft/monaco-editor/issues/2327
_contrib_format_browser_format_js__WEBPACK_IMPORTED_MODULE_4__/* .FormattingConflicts */ .xC.setFormatterSelector((formatter, document, mode) => Promise.resolve(formatter[0]));
const api = (0,_common_services_editorBaseApi_js__WEBPACK_IMPORTED_MODULE_1__/* .createMonacoBaseAPI */ .O)();
api.editor = (0,_standalone_browser_standaloneEditor_js__WEBPACK_IMPORTED_MODULE_2__/* .createMonacoEditorAPI */ .yU)();
api.languages = (0,_standalone_browser_standaloneLanguages_js__WEBPACK_IMPORTED_MODULE_3__/* .createMonacoLanguagesAPI */ .DT)();
const CancellationTokenSource = api.CancellationTokenSource;
const Emitter = api.Emitter;
const KeyCode = api.KeyCode;
const KeyMod = api.KeyMod;
const Position = api.Position;
const Range = api.Range;
const Selection = api.Selection;
const SelectionDirection = api.SelectionDirection;
const MarkerSeverity = api.MarkerSeverity;
const MarkerTag = api.MarkerTag;
const Uri = api.Uri;
const Token = api.Token;
const editor = api.editor;
const languages = api.languages;
const monacoEnvironment = globalThis.MonacoEnvironment;
if ((monacoEnvironment === null || monacoEnvironment === void 0 ? void 0 : monacoEnvironment.globalAPI) || (typeof define === 'function' && __webpack_require__.amdO)) {
    globalThis.monaco = api;
}
if (typeof globalThis.require !== 'undefined' && typeof globalThis.require.config === 'function') {
    globalThis.require.config({
        ignoreDuplicateModules: [
            'vscode-languageserver-types',
            'vscode-languageserver-types/main',
            'vscode-languageserver-textdocument',
            'vscode-languageserver-textdocument/main',
            'vscode-nls',
            'vscode-nls/vscode-nls',
            'jsonc-parser',
            'jsonc-parser/main',
            'vscode-uri',
            'vscode-uri/index',
            'vs/basic-languages/typescript/typescript'
        ]
    });
}


/***/ }),

/***/ 22925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CancellationTokenSource: function() { return /* reexport */ editor_api.CancellationTokenSource; },
  Emitter: function() { return /* reexport */ editor_api.Emitter; },
  KeyCode: function() { return /* reexport */ editor_api.KeyCode; },
  KeyMod: function() { return /* reexport */ editor_api.KeyMod; },
  MarkerSeverity: function() { return /* reexport */ editor_api.MarkerSeverity; },
  MarkerTag: function() { return /* reexport */ editor_api.MarkerTag; },
  Position: function() { return /* reexport */ editor_api.Position; },
  Range: function() { return /* reexport */ editor_api.Range; },
  Selection: function() { return /* reexport */ editor_api.Selection; },
  SelectionDirection: function() { return /* reexport */ editor_api.SelectionDirection; },
  Token: function() { return /* reexport */ editor_api.Token; },
  Uri: function() { return /* reexport */ editor_api.Uri; },
  __esModule: function() { return /* reexport */ editor_api.__esModule; },
  editor: function() { return /* reexport */ editor_api.editor; },
  languages: function() { return /* reexport */ editor_api.languages; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js
var monaco_contribution = __webpack_require__(55267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js
var css_monaco_contribution = __webpack_require__(32378);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js
var html_monaco_contribution = __webpack_require__(66148);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js
var json_monaco_contribution = __webpack_require__(60777);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js
var typescript_monaco_contribution = __webpack_require__(83584);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js
var coreCommands = __webpack_require__(68642);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/codeEditorWidget.js + 1 modules
var codeEditorWidget = __webpack_require__(12337);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffEditorWidget.js
var diffEditorWidget = __webpack_require__(89217);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/browser/widget/diffNavigator.js
var diffNavigator = __webpack_require__(91423);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js + 1 modules
var anchorSelect = __webpack_require__(62756);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js + 1 modules
var bracketMatching = __webpack_require__(77904);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js + 1 modules
var caretOperations = __webpack_require__(696);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js
var transpose = __webpack_require__(93028);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js
var clipboard = __webpack_require__(24429);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js + 1 modules
var codeActionContributions = __webpack_require__(86598);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js + 4 modules
var codelensController = __webpack_require__(16991);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js
var colorContributions = __webpack_require__(64284);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js + 1 modules
var standaloneColorPickerActions = __webpack_require__(46816);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js + 2 modules
var comment = __webpack_require__(29515);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js
var contextmenu = __webpack_require__(8322);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js
var cursorUndo = __webpack_require__(18424);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js + 2 modules
var dnd = __webpack_require__(72367);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js + 2 modules
var copyPasteContribution = __webpack_require__(35855);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js + 1 modules
var dropIntoEditorContribution = __webpack_require__(37760);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js + 9 modules
var findController = __webpack_require__(95287);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js + 4 modules
var folding = __webpack_require__(32017);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js
var fontZoom = __webpack_require__(19322);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js
var formatActions = __webpack_require__(49416);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js
var documentSymbols = __webpack_require__(26869);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js + 12 modules
var inlineCompletions_contribution = __webpack_require__(96469);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js + 1 modules
var inlineProgress = __webpack_require__(5551);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js + 1 modules
var goToCommands = __webpack_require__(75811);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js + 1 modules
var goToDefinitionAtPosition = __webpack_require__(98389);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js + 3 modules
var gotoError = __webpack_require__(89246);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js + 3 modules
var hover = __webpack_require__(34576);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js
var indentation = __webpack_require__(27790);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js + 3 modules
var inlayHintsContribution = __webpack_require__(19280);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js + 2 modules
var inPlaceReplace = __webpack_require__(99330);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js
var lineSelection = __webpack_require__(9425);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js + 3 modules
var linesOperations = __webpack_require__(36423);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js + 1 modules
var linkedEditing = __webpack_require__(91466);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js + 2 modules
var links = __webpack_require__(72678);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js
var longLinesHelper = __webpack_require__(52104);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js
var multicursor = __webpack_require__(94109);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js + 4 modules
var parameterHints = __webpack_require__(1426);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js + 2 modules
var rename = __webpack_require__(781);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js
var documentSemanticTokens = __webpack_require__(60495);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js
var viewportSemanticTokens = __webpack_require__(46168);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js + 1 modules
var smartSelect = __webpack_require__(68732);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js
var snippetController2 = __webpack_require__(55809);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js + 7 modules
var stickyScrollContribution = __webpack_require__(50516);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js + 8 modules
var suggestController = __webpack_require__(57730);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js
var suggestInlineCompletions = __webpack_require__(58615);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js
var tokenization = __webpack_require__(78826);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js
var toggleTabFocusMode = __webpack_require__(56970);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js + 3 modules
var unicodeHighlighter = __webpack_require__(88666);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js
var unusualLineTerminators = __webpack_require__(83042);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js
var wordHighlighter = __webpack_require__(95027);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js
var wordOperations = __webpack_require__(71258);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js
var wordPartOperations = __webpack_require__(34958);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js
var contribution = __webpack_require__(66485);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/common/standaloneStrings.js
var standaloneStrings = __webpack_require__(62688);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/base/browser/ui/codicons/codiconStyles.js + 2 modules
var codiconStyles = __webpack_require__(53481);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/editor.all.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
























































// Load up these strings even in VSCode, even if they are not used
// in order to get them translated

 // The codicons are defined here and must be loaded

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js + 1 modules
var accessibilityHelp = __webpack_require__(70148);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js + 1 modules
var iPadShowKeyboard = __webpack_require__(43047);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js + 1 modules
var inspectTokens = __webpack_require__(11364);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js
var standaloneHelpQuickAccess = __webpack_require__(97211);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js
var standaloneGotoLineQuickAccess = __webpack_require__(82768);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js
var standaloneGotoSymbolQuickAccess = __webpack_require__(40898);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js
var standaloneCommandsQuickAccess = __webpack_require__(41896);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js
var standaloneReferenceSearch = __webpack_require__(2324);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js
var toggleHighContrast = __webpack_require__(9267);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/editor.api.js
var editor_api = __webpack_require__(15846);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/edcore.main.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/












;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js








/***/ })

}]);