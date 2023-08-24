"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-e32a9e17"],{

/***/ 29210:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CancellationTokenSource: function() { return /* reexport */ CancellationTokenSource; },
  Emitter: function() { return /* reexport */ Emitter; },
  KeyCode: function() { return /* reexport */ KeyCode; },
  KeyMod: function() { return /* reexport */ KeyMod; },
  MarkerSeverity: function() { return /* reexport */ MarkerSeverity; },
  MarkerTag: function() { return /* reexport */ MarkerTag; },
  Position: function() { return /* reexport */ Position; },
  Range: function() { return /* reexport */ Range; },
  Selection: function() { return /* reexport */ Selection; },
  SelectionDirection: function() { return /* reexport */ SelectionDirection; },
  Token: function() { return /* reexport */ Token; },
  Uri: function() { return /* reexport */ Uri; },
  "default": function() { return /* binding */ editor_api; },
  editor: function() { return /* reexport */ editor; },
  languages: function() { return /* reexport */ languages; }
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.api.js
var editor_api_namespaceObject = {};
__webpack_require__.r(editor_api_namespaceObject);
__webpack_require__.d(editor_api_namespaceObject, {
  CancellationTokenSource: function() { return CancellationTokenSource; },
  Emitter: function() { return Emitter; },
  KeyCode: function() { return KeyCode; },
  KeyMod: function() { return KeyMod; },
  MarkerSeverity: function() { return MarkerSeverity; },
  MarkerTag: function() { return MarkerTag; },
  Position: function() { return Position; },
  Range: function() { return Range; },
  Selection: function() { return Selection; },
  SelectionDirection: function() { return SelectionDirection; },
  Token: function() { return Token; },
  Uri: function() { return Uri; },
  editor: function() { return editor; },
  languages: function() { return languages; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js + 1 modules
var anchorSelect = __webpack_require__(60909);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js + 1 modules
var bracketMatching = __webpack_require__(43554);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js
var coreCommands = __webpack_require__(50102);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js + 1 modules
var caretOperations = __webpack_require__(84096);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js
var transpose = __webpack_require__(15366);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js
var clipboard = __webpack_require__(48403);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js + 1 modules
var codeActionContributions = __webpack_require__(3179);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js + 4 modules
var codelensController = __webpack_require__(27662);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js
var colorContributions = __webpack_require__(61892);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js + 1 modules
var standaloneColorPickerActions = __webpack_require__(71145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js + 2 modules
var comment = __webpack_require__(49492);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js
var contextmenu = __webpack_require__(98778);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js
var cursorUndo = __webpack_require__(41623);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js + 2 modules
var dnd = __webpack_require__(92842);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js
var documentSymbols = __webpack_require__(73863);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js + 2 modules
var copyPasteContribution = __webpack_require__(21003);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js + 1 modules
var dropIntoEditorContribution = __webpack_require__(66013);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js + 9 modules
var findController = __webpack_require__(41964);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js + 4 modules
var folding = __webpack_require__(86344);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js
var fontZoom = __webpack_require__(18061);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js
var formatActions = __webpack_require__(3944);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js + 3 modules
var gotoError = __webpack_require__(1184);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js
var standaloneGotoLineQuickAccess = __webpack_require__(4030);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js + 1 modules
var goToCommands = __webpack_require__(44920);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js + 1 modules
var goToDefinitionAtPosition = __webpack_require__(29775);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js + 3 modules
var hover = __webpack_require__(48596);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js + 1 modules
var iPadShowKeyboard = __webpack_require__(62097);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js + 2 modules
var inPlaceReplace = __webpack_require__(33049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js
var indentation = __webpack_require__(76100);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js + 3 modules
var inlayHintsContribution = __webpack_require__(55028);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js + 12 modules
var inlineCompletions_contribution = __webpack_require__(92949);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js + 1 modules
var inlineProgress = __webpack_require__(62848);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js + 1 modules
var inspectTokens = __webpack_require__(2429);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js
var lineSelection = __webpack_require__(51439);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js + 3 modules
var linesOperations = __webpack_require__(51245);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js + 1 modules
var linkedEditing = __webpack_require__(59973);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js + 2 modules
var links = __webpack_require__(99521);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js
var longLinesHelper = __webpack_require__(90166);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js
var multicursor = __webpack_require__(84971);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js + 4 modules
var parameterHints = __webpack_require__(34957);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js
var standaloneCommandsQuickAccess = __webpack_require__(57781);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js
var standaloneHelpQuickAccess = __webpack_require__(55212);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js
var standaloneGotoSymbolQuickAccess = __webpack_require__(83878);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js
var contribution = __webpack_require__(21996);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js
var standaloneReferenceSearch = __webpack_require__(86903);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js + 2 modules
var rename = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js
var documentSemanticTokens = __webpack_require__(31347);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js
var viewportSemanticTokens = __webpack_require__(74580);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js + 1 modules
var smartSelect = __webpack_require__(37784);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js
var snippetController2 = __webpack_require__(810);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js + 7 modules
var stickyScrollContribution = __webpack_require__(19209);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js + 3 modules
var suggestController = __webpack_require__(78228);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js
var suggestInlineCompletions = __webpack_require__(89532);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js
var toggleHighContrast = __webpack_require__(63760);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js
var toggleTabFocusMode = __webpack_require__(39787);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js
var tokenization = __webpack_require__(92829);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js + 3 modules
var unicodeHighlighter = __webpack_require__(9111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js
var unusualLineTerminators = __webpack_require__(20875);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js
var wordHighlighter = __webpack_require__(41838);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js
var wordOperations = __webpack_require__(83872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js
var wordPartOperations = __webpack_require__(71025);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/config/editorOptions.js
var editorOptions = __webpack_require__(58908);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/common/services/editorBaseApi.js
var editorBaseApi = __webpack_require__(45959);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneEditor.js + 3 modules
var standaloneEditor = __webpack_require__(43395);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/standaloneLanguages.js
var standaloneLanguages = __webpack_require__(34018);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/format.js
var format = __webpack_require__(65856);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.api.js
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/





// Set defaults for standalone editor
editorOptions/* EditorOptions */.BH.wrappingIndent.defaultValue = 0 /* WrappingIndent.None */;
editorOptions/* EditorOptions */.BH.glyphMargin.defaultValue = false;
editorOptions/* EditorOptions */.BH.autoIndent.defaultValue = 3 /* EditorAutoIndentStrategy.Advanced */;
editorOptions/* EditorOptions */.BH.overviewRulerLanes.defaultValue = 2;
// We need to register a formatter selector which simply picks the first available formatter.
// See https://github.com/microsoft/monaco-editor/issues/2327
format/* FormattingConflicts */.xC.setFormatterSelector((formatter, document, mode) => Promise.resolve(formatter[0]));
const api = (0,editorBaseApi/* createMonacoBaseAPI */.O)();
api.editor = (0,standaloneEditor/* createMonacoEditorAPI */.yU)();
api.languages = (0,standaloneLanguages/* createMonacoLanguagesAPI */.DT)();
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

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js
var abap_contribution = __webpack_require__(63809);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js
var apex_contribution = __webpack_require__(74387);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js
var azcli_contribution = __webpack_require__(39080);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js
var bat_contribution = __webpack_require__(73211);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js
var bicep_contribution = __webpack_require__(37044);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js
var cameligo_contribution = __webpack_require__(36090);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js
var clojure_contribution = __webpack_require__(3909);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js
var coffee_contribution = __webpack_require__(49787);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js
var cpp_contribution = __webpack_require__(73413);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js
var csharp_contribution = __webpack_require__(55192);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js
var csp_contribution = __webpack_require__(61245);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js
var css_contribution = __webpack_require__(73839);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js
var monaco_contribution = __webpack_require__(85727);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js
var cypher_contribution = __webpack_require__(36525);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js
var dart_contribution = __webpack_require__(31122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js
var dockerfile_contribution = __webpack_require__(33043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js
var ecl_contribution = __webpack_require__(7603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js
var elixir_contribution = __webpack_require__(25292);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js
var flow9_contribution = __webpack_require__(58911);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js
var freemarker2_contribution = __webpack_require__(3640);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js
var fsharp_contribution = __webpack_require__(93224);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js
var go_contribution = __webpack_require__(35350);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js
var graphql_contribution = __webpack_require__(46819);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js
var handlebars_contribution = __webpack_require__(34984);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js
var hcl_contribution = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js
var html_contribution = __webpack_require__(49880);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js
var html_monaco_contribution = __webpack_require__(27484);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js
var ini_contribution = __webpack_require__(86791);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js
var java_contribution = __webpack_require__(30254);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js
var javascript_contribution = __webpack_require__(65005);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js
var json_monaco_contribution = __webpack_require__(73020);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js
var julia_contribution = __webpack_require__(65792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js
var kotlin_contribution = __webpack_require__(84547);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js
var less_contribution = __webpack_require__(88507);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js
var lexon_contribution = __webpack_require__(93033);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js
var liquid_contribution = __webpack_require__(39516);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js
var lua_contribution = __webpack_require__(43215);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js
var m3_contribution = __webpack_require__(61100);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js
var markdown_contribution = __webpack_require__(76603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js
var mdx_contribution = __webpack_require__(93960);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js
var mips_contribution = __webpack_require__(64595);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js
var msdax_contribution = __webpack_require__(26550);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js
var mysql_contribution = __webpack_require__(88073);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js
var objective_c_contribution = __webpack_require__(97692);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js
var pascal_contribution = __webpack_require__(75923);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js
var pascaligo_contribution = __webpack_require__(84692);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js
var perl_contribution = __webpack_require__(35067);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js
var pgsql_contribution = __webpack_require__(45549);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js
var php_contribution = __webpack_require__(30010);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js
var pla_contribution = __webpack_require__(45624);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js
var postiats_contribution = __webpack_require__(41076);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js
var powerquery_contribution = __webpack_require__(15885);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js
var powershell_contribution = __webpack_require__(47589);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js
var protobuf_contribution = __webpack_require__(58049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js
var pug_contribution = __webpack_require__(52507);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js
var python_contribution = __webpack_require__(47688);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js
var qsharp_contribution = __webpack_require__(54978);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js
var r_contribution = __webpack_require__(7234);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js
var razor_contribution = __webpack_require__(52024);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js
var redis_contribution = __webpack_require__(37368);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js
var redshift_contribution = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js
var restructuredtext_contribution = __webpack_require__(84837);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js
var ruby_contribution = __webpack_require__(20877);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js
var rust_contribution = __webpack_require__(90268);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js
var sb_contribution = __webpack_require__(10087);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js
var scala_contribution = __webpack_require__(40602);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js
var scheme_contribution = __webpack_require__(17737);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js
var scss_contribution = __webpack_require__(43603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js
var shell_contribution = __webpack_require__(20520);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js
var solidity_contribution = __webpack_require__(14731);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js
var sophia_contribution = __webpack_require__(97541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js
var sparql_contribution = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js
var sql_contribution = __webpack_require__(76539);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js
var st_contribution = __webpack_require__(23518);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js
var swift_contribution = __webpack_require__(38068);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js
var systemverilog_contribution = __webpack_require__(46598);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js
var tcl_contribution = __webpack_require__(8817);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js
var twig_contribution = __webpack_require__(88420);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js
var typescript_contribution = __webpack_require__(53217);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js
var typescript_monaco_contribution = __webpack_require__(93596);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js
var vb_contribution = __webpack_require__(36044);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js
var wgsl_contribution = __webpack_require__(2351);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js
var xml_contribution = __webpack_require__(33896);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js
var yaml_contribution = __webpack_require__(67635);
;// CONCATENATED MODULE: include-loader!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.api.js
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
































































/* harmony default export */ var editor_api = (editor_api_namespaceObject);
		





















































































/***/ }),

/***/ 92957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CancellationTokenSource: function() { return /* reexport */ edcore_main/* CancellationTokenSource */.AU; },
  Emitter: function() { return /* reexport */ edcore_main/* Emitter */.Q5; },
  KeyCode: function() { return /* reexport */ edcore_main/* KeyCode */.VD; },
  KeyMod: function() { return /* reexport */ edcore_main/* KeyMod */.DC; },
  MarkerSeverity: function() { return /* reexport */ edcore_main/* MarkerSeverity */.ZL; },
  MarkerTag: function() { return /* reexport */ edcore_main/* MarkerTag */.eB; },
  Position: function() { return /* reexport */ edcore_main/* Position */.Ly; },
  Range: function() { return /* reexport */ edcore_main/* Range */.e6; },
  Selection: function() { return /* reexport */ edcore_main/* Selection */.Y1; },
  SelectionDirection: function() { return /* reexport */ edcore_main/* SelectionDirection */.a$; },
  Token: function() { return /* reexport */ edcore_main/* Token */.WU; },
  Uri: function() { return /* reexport */ edcore_main/* Uri */.Sf; },
  "default": function() { return /* binding */ editor_main; },
  editor: function() { return /* reexport */ edcore_main/* editor */.j6; },
  languages: function() { return /* reexport */ edcore_main/* languages */.Mj; }
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js
var editor_main_namespaceObject = {};
__webpack_require__.r(editor_main_namespaceObject);
__webpack_require__.d(editor_main_namespaceObject, {
  CancellationTokenSource: function() { return edcore_main/* CancellationTokenSource */.AU; },
  Emitter: function() { return edcore_main/* Emitter */.Q5; },
  KeyCode: function() { return edcore_main/* KeyCode */.VD; },
  KeyMod: function() { return edcore_main/* KeyMod */.DC; },
  MarkerSeverity: function() { return edcore_main/* MarkerSeverity */.ZL; },
  MarkerTag: function() { return edcore_main/* MarkerTag */.eB; },
  Position: function() { return edcore_main/* Position */.Ly; },
  Range: function() { return edcore_main/* Range */.e6; },
  Selection: function() { return edcore_main/* Selection */.Y1; },
  SelectionDirection: function() { return edcore_main/* SelectionDirection */.a$; },
  Token: function() { return edcore_main/* Token */.WU; },
  Uri: function() { return edcore_main/* Uri */.Sf; },
  editor: function() { return edcore_main/* editor */.j6; },
  languages: function() { return edcore_main/* languages */.Mj; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js + 1 modules
var anchorSelect = __webpack_require__(60909);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js + 1 modules
var bracketMatching = __webpack_require__(43554);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/browser/coreCommands.js
var coreCommands = __webpack_require__(50102);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js + 1 modules
var caretOperations = __webpack_require__(84096);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js
var transpose = __webpack_require__(15366);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js
var clipboard = __webpack_require__(48403);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js + 1 modules
var codeActionContributions = __webpack_require__(3179);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js + 4 modules
var codelensController = __webpack_require__(27662);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js
var colorContributions = __webpack_require__(61892);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js + 1 modules
var standaloneColorPickerActions = __webpack_require__(71145);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js + 2 modules
var comment = __webpack_require__(49492);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js
var contextmenu = __webpack_require__(98778);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js
var cursorUndo = __webpack_require__(41623);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js + 2 modules
var dnd = __webpack_require__(92842);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js
var documentSymbols = __webpack_require__(73863);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js + 2 modules
var copyPasteContribution = __webpack_require__(21003);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js + 1 modules
var dropIntoEditorContribution = __webpack_require__(66013);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/find/browser/findController.js + 9 modules
var findController = __webpack_require__(41964);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js + 4 modules
var folding = __webpack_require__(86344);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js
var fontZoom = __webpack_require__(18061);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js
var formatActions = __webpack_require__(3944);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js + 3 modules
var gotoError = __webpack_require__(1184);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js
var standaloneGotoLineQuickAccess = __webpack_require__(4030);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js + 1 modules
var goToCommands = __webpack_require__(44920);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js + 1 modules
var goToDefinitionAtPosition = __webpack_require__(29775);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/hover/browser/hover.js + 3 modules
var hover = __webpack_require__(48596);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js + 1 modules
var iPadShowKeyboard = __webpack_require__(62097);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js + 2 modules
var inPlaceReplace = __webpack_require__(33049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js
var indentation = __webpack_require__(76100);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js + 3 modules
var inlayHintsContribution = __webpack_require__(55028);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js + 12 modules
var inlineCompletions_contribution = __webpack_require__(92949);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js + 1 modules
var inlineProgress = __webpack_require__(62848);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js + 1 modules
var inspectTokens = __webpack_require__(2429);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js
var lineSelection = __webpack_require__(51439);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js + 3 modules
var linesOperations = __webpack_require__(51245);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js + 1 modules
var linkedEditing = __webpack_require__(59973);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/links/browser/links.js + 2 modules
var links = __webpack_require__(99521);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js
var longLinesHelper = __webpack_require__(90166);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js
var multicursor = __webpack_require__(84971);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js + 4 modules
var parameterHints = __webpack_require__(34957);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js
var standaloneCommandsQuickAccess = __webpack_require__(57781);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js
var standaloneHelpQuickAccess = __webpack_require__(55212);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js
var standaloneGotoSymbolQuickAccess = __webpack_require__(83878);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js
var contribution = __webpack_require__(21996);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js
var standaloneReferenceSearch = __webpack_require__(86903);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js + 2 modules
var rename = __webpack_require__(13560);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js
var documentSemanticTokens = __webpack_require__(31347);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js
var viewportSemanticTokens = __webpack_require__(74580);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js + 1 modules
var smartSelect = __webpack_require__(37784);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js
var snippetController2 = __webpack_require__(810);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js + 7 modules
var stickyScrollContribution = __webpack_require__(19209);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js + 3 modules
var suggestController = __webpack_require__(78228);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js
var suggestInlineCompletions = __webpack_require__(89532);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js
var toggleHighContrast = __webpack_require__(63760);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js
var toggleTabFocusMode = __webpack_require__(39787);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js
var tokenization = __webpack_require__(92829);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js + 3 modules
var unicodeHighlighter = __webpack_require__(9111);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js
var unusualLineTerminators = __webpack_require__(20875);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js
var wordHighlighter = __webpack_require__(41838);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js
var wordOperations = __webpack_require__(83872);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js
var wordPartOperations = __webpack_require__(71025);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/monaco.contribution.js
var monaco_contribution = __webpack_require__(4536);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/css/monaco.contribution.js
var css_monaco_contribution = __webpack_require__(85727);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/html/monaco.contribution.js
var html_monaco_contribution = __webpack_require__(27484);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/json/monaco.contribution.js
var json_monaco_contribution = __webpack_require__(73020);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js
var typescript_monaco_contribution = __webpack_require__(93596);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/edcore.main.js
var edcore_main = __webpack_require__(84241);
;// CONCATENATED MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js







// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js
var abap_contribution = __webpack_require__(63809);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js
var apex_contribution = __webpack_require__(74387);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js
var azcli_contribution = __webpack_require__(39080);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js
var bat_contribution = __webpack_require__(73211);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js
var bicep_contribution = __webpack_require__(37044);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js
var cameligo_contribution = __webpack_require__(36090);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js
var clojure_contribution = __webpack_require__(3909);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js
var coffee_contribution = __webpack_require__(49787);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js
var cpp_contribution = __webpack_require__(73413);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js
var csharp_contribution = __webpack_require__(55192);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js
var csp_contribution = __webpack_require__(61245);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js
var css_contribution = __webpack_require__(73839);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js
var cypher_contribution = __webpack_require__(36525);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js
var dart_contribution = __webpack_require__(31122);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js
var dockerfile_contribution = __webpack_require__(33043);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js
var ecl_contribution = __webpack_require__(7603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js
var elixir_contribution = __webpack_require__(25292);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js
var flow9_contribution = __webpack_require__(58911);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js
var freemarker2_contribution = __webpack_require__(3640);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js
var fsharp_contribution = __webpack_require__(93224);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/go/go.contribution.js
var go_contribution = __webpack_require__(35350);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js
var graphql_contribution = __webpack_require__(46819);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js
var handlebars_contribution = __webpack_require__(34984);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js
var hcl_contribution = __webpack_require__(489);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/html/html.contribution.js
var html_contribution = __webpack_require__(49880);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js
var ini_contribution = __webpack_require__(86791);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/java/java.contribution.js
var java_contribution = __webpack_require__(30254);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js
var javascript_contribution = __webpack_require__(65005);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js
var julia_contribution = __webpack_require__(65792);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js
var kotlin_contribution = __webpack_require__(84547);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/less/less.contribution.js
var less_contribution = __webpack_require__(88507);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js
var lexon_contribution = __webpack_require__(93033);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js
var liquid_contribution = __webpack_require__(39516);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js
var lua_contribution = __webpack_require__(43215);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js
var m3_contribution = __webpack_require__(61100);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js
var markdown_contribution = __webpack_require__(76603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js
var mdx_contribution = __webpack_require__(93960);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js
var mips_contribution = __webpack_require__(64595);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js
var msdax_contribution = __webpack_require__(26550);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js
var mysql_contribution = __webpack_require__(88073);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js
var objective_c_contribution = __webpack_require__(97692);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js
var pascal_contribution = __webpack_require__(75923);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js
var pascaligo_contribution = __webpack_require__(84692);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js
var perl_contribution = __webpack_require__(35067);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js
var pgsql_contribution = __webpack_require__(45549);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/php/php.contribution.js
var php_contribution = __webpack_require__(30010);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js
var pla_contribution = __webpack_require__(45624);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js
var postiats_contribution = __webpack_require__(41076);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js
var powerquery_contribution = __webpack_require__(15885);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js
var powershell_contribution = __webpack_require__(47589);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js
var protobuf_contribution = __webpack_require__(58049);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js
var pug_contribution = __webpack_require__(52507);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/python/python.contribution.js
var python_contribution = __webpack_require__(47688);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js
var qsharp_contribution = __webpack_require__(54978);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/r/r.contribution.js
var r_contribution = __webpack_require__(7234);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js
var razor_contribution = __webpack_require__(52024);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js
var redis_contribution = __webpack_require__(37368);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js
var redshift_contribution = __webpack_require__(8427);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js
var restructuredtext_contribution = __webpack_require__(84837);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js
var ruby_contribution = __webpack_require__(20877);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js
var rust_contribution = __webpack_require__(90268);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js
var sb_contribution = __webpack_require__(10087);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js
var scala_contribution = __webpack_require__(40602);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js
var scheme_contribution = __webpack_require__(17737);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js
var scss_contribution = __webpack_require__(43603);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js
var shell_contribution = __webpack_require__(20520);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js
var solidity_contribution = __webpack_require__(14731);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js
var sophia_contribution = __webpack_require__(97541);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js
var sparql_contribution = __webpack_require__(30524);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js
var sql_contribution = __webpack_require__(76539);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/st/st.contribution.js
var st_contribution = __webpack_require__(23518);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js
var swift_contribution = __webpack_require__(38068);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js
var systemverilog_contribution = __webpack_require__(46598);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js
var tcl_contribution = __webpack_require__(8817);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js
var twig_contribution = __webpack_require__(88420);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js
var typescript_contribution = __webpack_require__(53217);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js
var vb_contribution = __webpack_require__(36044);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js
var wgsl_contribution = __webpack_require__(2351);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js
var xml_contribution = __webpack_require__(33896);
// EXTERNAL MODULE: ./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js
var yaml_contribution = __webpack_require__(67635);
;// CONCATENATED MODULE: include-loader!./node_modules/.pnpm/monaco-editor@0.41.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js
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
































































/* harmony default export */ var editor_main = (editor_main_namespaceObject);
		





















































































/***/ }),

/***/ 40695:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _browser_coreCommands_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50102);
/* harmony import */ var _browser_widget_codeEditorWidget_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41728);
/* harmony import */ var _browser_widget_diffEditorWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13130);
/* harmony import */ var _browser_widget_diffNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1314);
/* harmony import */ var _contrib_anchorSelect_browser_anchorSelect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60909);
/* harmony import */ var _contrib_bracketMatching_browser_bracketMatching_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43554);
/* harmony import */ var _contrib_caretOperations_browser_caretOperations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84096);
/* harmony import */ var _contrib_caretOperations_browser_transpose_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15366);
/* harmony import */ var _contrib_clipboard_browser_clipboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48403);
/* harmony import */ var _contrib_codeAction_browser_codeActionContributions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3179);
/* harmony import */ var _contrib_codelens_browser_codelensController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27662);
/* harmony import */ var _contrib_colorPicker_browser_colorContributions_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61892);
/* harmony import */ var _contrib_colorPicker_browser_standaloneColorPickerActions_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(71145);
/* harmony import */ var _contrib_comment_browser_comment_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49492);
/* harmony import */ var _contrib_contextmenu_browser_contextmenu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(98778);
/* harmony import */ var _contrib_cursorUndo_browser_cursorUndo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(41623);
/* harmony import */ var _contrib_dnd_browser_dnd_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(92842);
/* harmony import */ var _contrib_dropOrPasteInto_browser_copyPasteContribution_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21003);
/* harmony import */ var _contrib_dropOrPasteInto_browser_dropIntoEditorContribution_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(66013);
/* harmony import */ var _contrib_find_browser_findController_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(41964);
/* harmony import */ var _contrib_folding_browser_folding_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86344);
/* harmony import */ var _contrib_fontZoom_browser_fontZoom_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(18061);
/* harmony import */ var _contrib_format_browser_formatActions_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3944);
/* harmony import */ var _contrib_documentSymbols_browser_documentSymbols_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(73863);
/* harmony import */ var _contrib_inlineCompletions_browser_inlineCompletions_contribution_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(92949);
/* harmony import */ var _contrib_inlineProgress_browser_inlineProgress_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(62848);
/* harmony import */ var _contrib_gotoSymbol_browser_goToCommands_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(44920);
/* harmony import */ var _contrib_gotoSymbol_browser_link_goToDefinitionAtPosition_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(29775);
/* harmony import */ var _contrib_gotoError_browser_gotoError_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1184);
/* harmony import */ var _contrib_hover_browser_hover_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(48596);
/* harmony import */ var _contrib_indentation_browser_indentation_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(76100);
/* harmony import */ var _contrib_inlayHints_browser_inlayHintsContribution_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(55028);
/* harmony import */ var _contrib_inPlaceReplace_browser_inPlaceReplace_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(33049);
/* harmony import */ var _contrib_lineSelection_browser_lineSelection_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(51439);
/* harmony import */ var _contrib_linesOperations_browser_linesOperations_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(51245);
/* harmony import */ var _contrib_linkedEditing_browser_linkedEditing_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(59973);
/* harmony import */ var _contrib_links_browser_links_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(99521);
/* harmony import */ var _contrib_longLinesHelper_browser_longLinesHelper_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(90166);
/* harmony import */ var _contrib_multicursor_browser_multicursor_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(84971);
/* harmony import */ var _contrib_parameterHints_browser_parameterHints_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(34957);
/* harmony import */ var _contrib_rename_browser_rename_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(13560);
/* harmony import */ var _contrib_semanticTokens_browser_documentSemanticTokens_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(31347);
/* harmony import */ var _contrib_semanticTokens_browser_viewportSemanticTokens_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(74580);
/* harmony import */ var _contrib_smartSelect_browser_smartSelect_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(37784);
/* harmony import */ var _contrib_snippet_browser_snippetController2_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(810);
/* harmony import */ var _contrib_stickyScroll_browser_stickyScrollContribution_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(19209);
/* harmony import */ var _contrib_suggest_browser_suggestController_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(78228);
/* harmony import */ var _contrib_suggest_browser_suggestInlineCompletions_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(89532);
/* harmony import */ var _contrib_tokenization_browser_tokenization_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(92829);
/* harmony import */ var _contrib_toggleTabFocusMode_browser_toggleTabFocusMode_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(39787);
/* harmony import */ var _contrib_unicodeHighlighter_browser_unicodeHighlighter_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(9111);
/* harmony import */ var _contrib_unusualLineTerminators_browser_unusualLineTerminators_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(20875);
/* harmony import */ var _contrib_wordHighlighter_browser_wordHighlighter_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(41838);
/* harmony import */ var _contrib_wordOperations_browser_wordOperations_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(83872);
/* harmony import */ var _contrib_wordPartOperations_browser_wordPartOperations_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(71025);
/* harmony import */ var _contrib_readOnlyMessage_browser_contribution_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(21996);
/* harmony import */ var _common_standaloneStrings_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(7959);
/* harmony import */ var _base_browser_ui_codicons_codiconStyles_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(2378);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
























































// Load up these strings even in VSCode, even if they are not used
// in order to get them translated

 // The codicons are defined here and must be loaded


/***/ })

}]);