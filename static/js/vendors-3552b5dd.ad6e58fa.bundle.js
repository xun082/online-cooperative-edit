"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3552b5dd"],{

/***/ 29811:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ CancellationTokenSource; },
/* harmony export */   T: function() { return /* binding */ CancellationToken; }
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const shortcutEvent = Object.freeze(function (callback, context) {
    const handle = setTimeout(callback.bind(context), 0);
    return { dispose() { clearTimeout(handle); } };
});
var CancellationToken;
(function (CancellationToken) {
    function isCancellationToken(thing) {
        if (thing === CancellationToken.None || thing === CancellationToken.Cancelled) {
            return true;
        }
        if (thing instanceof MutableToken) {
            return true;
        }
        if (!thing || typeof thing !== 'object') {
            return false;
        }
        return typeof thing.isCancellationRequested === 'boolean'
            && typeof thing.onCancellationRequested === 'function';
    }
    CancellationToken.isCancellationToken = isCancellationToken;
    CancellationToken.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: _event_js__WEBPACK_IMPORTED_MODULE_0__/* .Event */ .ju.None
    });
    CancellationToken.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: shortcutEvent
    });
})(CancellationToken || (CancellationToken = {}));
class MutableToken {
    constructor() {
        this._isCancelled = false;
        this._emitter = null;
    }
    cancel() {
        if (!this._isCancelled) {
            this._isCancelled = true;
            if (this._emitter) {
                this._emitter.fire(undefined);
                this.dispose();
            }
        }
    }
    get isCancellationRequested() {
        return this._isCancelled;
    }
    get onCancellationRequested() {
        if (this._isCancelled) {
            return shortcutEvent;
        }
        if (!this._emitter) {
            this._emitter = new _event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
        }
        return this._emitter.event;
    }
    dispose() {
        if (this._emitter) {
            this._emitter.dispose();
            this._emitter = null;
        }
    }
}
class CancellationTokenSource {
    constructor(parent) {
        this._token = undefined;
        this._parentListener = undefined;
        this._parentListener = parent && parent.onCancellationRequested(this.cancel, this);
    }
    get token() {
        if (!this._token) {
            // be lazy and create the token only when
            // actually needed
            this._token = new MutableToken();
        }
        return this._token;
    }
    cancel() {
        if (!this._token) {
            // save an object by returning the default
            // cancelled token when cancellation happens
            // before someone asks for the token
            this._token = CancellationToken.Cancelled;
        }
        else if (this._token instanceof MutableToken) {
            // actually cancel
            this._token.cancel();
        }
    }
    dispose(cancel = false) {
        var _a;
        if (cancel) {
            this.cancel();
        }
        (_a = this._parentListener) === null || _a === void 0 ? void 0 : _a.dispose();
        if (!this._token) {
            // ensure to initialize with an empty token if we had none
            this._token = CancellationToken.None;
        }
        else if (this._token instanceof MutableToken) {
            // actually dispose
            this._token.dispose();
        }
    }
}


/***/ }),

/***/ 14162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ Codicon; },
/* harmony export */   u: function() { return /* binding */ getCodiconFontCharacters; }
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28935);

const _codiconFontCharacters = Object.create(null);
function register(id, fontCharacter) {
    if ((0,_types_js__WEBPACK_IMPORTED_MODULE_0__/* .isString */ .HD)(fontCharacter)) {
        const val = _codiconFontCharacters[fontCharacter];
        if (val === undefined) {
            throw new Error(`${id} references an unknown codicon: ${fontCharacter}`);
        }
        fontCharacter = val;
    }
    _codiconFontCharacters[id] = fontCharacter;
    return { id };
}
/**
 * Only to be used by the iconRegistry.
 */
function getCodiconFontCharacters() {
    return _codiconFontCharacters;
}
/**
 * The Codicon library is a set of default icons that are built-in in VS Code.
 *
 * In the product (outside of base) Codicons should only be used as defaults. In order to have all icons in VS Code
 * themeable, component should define new, UI component specific icons using `iconRegistry.registerIcon`.
 * In that call a Codicon can be named as default.
 */
const Codicon = {
    // built-in icons, with image name
    add: register('add', 0xea60),
    plus: register('plus', 0xea60),
    gistNew: register('gist-new', 0xea60),
    repoCreate: register('repo-create', 0xea60),
    lightbulb: register('lightbulb', 0xea61),
    lightBulb: register('light-bulb', 0xea61),
    repo: register('repo', 0xea62),
    repoDelete: register('repo-delete', 0xea62),
    gistFork: register('gist-fork', 0xea63),
    repoForked: register('repo-forked', 0xea63),
    gitPullRequest: register('git-pull-request', 0xea64),
    gitPullRequestAbandoned: register('git-pull-request-abandoned', 0xea64),
    recordKeys: register('record-keys', 0xea65),
    keyboard: register('keyboard', 0xea65),
    tag: register('tag', 0xea66),
    tagAdd: register('tag-add', 0xea66),
    tagRemove: register('tag-remove', 0xea66),
    person: register('person', 0xea67),
    personFollow: register('person-follow', 0xea67),
    personOutline: register('person-outline', 0xea67),
    personFilled: register('person-filled', 0xea67),
    gitBranch: register('git-branch', 0xea68),
    gitBranchCreate: register('git-branch-create', 0xea68),
    gitBranchDelete: register('git-branch-delete', 0xea68),
    sourceControl: register('source-control', 0xea68),
    mirror: register('mirror', 0xea69),
    mirrorPublic: register('mirror-public', 0xea69),
    star: register('star', 0xea6a),
    starAdd: register('star-add', 0xea6a),
    starDelete: register('star-delete', 0xea6a),
    starEmpty: register('star-empty', 0xea6a),
    comment: register('comment', 0xea6b),
    commentAdd: register('comment-add', 0xea6b),
    alert: register('alert', 0xea6c),
    warning: register('warning', 0xea6c),
    search: register('search', 0xea6d),
    searchSave: register('search-save', 0xea6d),
    logOut: register('log-out', 0xea6e),
    signOut: register('sign-out', 0xea6e),
    logIn: register('log-in', 0xea6f),
    signIn: register('sign-in', 0xea6f),
    eye: register('eye', 0xea70),
    eyeUnwatch: register('eye-unwatch', 0xea70),
    eyeWatch: register('eye-watch', 0xea70),
    circleFilled: register('circle-filled', 0xea71),
    primitiveDot: register('primitive-dot', 0xea71),
    closeDirty: register('close-dirty', 0xea71),
    debugBreakpoint: register('debug-breakpoint', 0xea71),
    debugBreakpointDisabled: register('debug-breakpoint-disabled', 0xea71),
    debugHint: register('debug-hint', 0xea71),
    primitiveSquare: register('primitive-square', 0xea72),
    edit: register('edit', 0xea73),
    pencil: register('pencil', 0xea73),
    info: register('info', 0xea74),
    issueOpened: register('issue-opened', 0xea74),
    gistPrivate: register('gist-private', 0xea75),
    gitForkPrivate: register('git-fork-private', 0xea75),
    lock: register('lock', 0xea75),
    mirrorPrivate: register('mirror-private', 0xea75),
    close: register('close', 0xea76),
    removeClose: register('remove-close', 0xea76),
    x: register('x', 0xea76),
    repoSync: register('repo-sync', 0xea77),
    sync: register('sync', 0xea77),
    clone: register('clone', 0xea78),
    desktopDownload: register('desktop-download', 0xea78),
    beaker: register('beaker', 0xea79),
    microscope: register('microscope', 0xea79),
    vm: register('vm', 0xea7a),
    deviceDesktop: register('device-desktop', 0xea7a),
    file: register('file', 0xea7b),
    fileText: register('file-text', 0xea7b),
    more: register('more', 0xea7c),
    ellipsis: register('ellipsis', 0xea7c),
    kebabHorizontal: register('kebab-horizontal', 0xea7c),
    mailReply: register('mail-reply', 0xea7d),
    reply: register('reply', 0xea7d),
    organization: register('organization', 0xea7e),
    organizationFilled: register('organization-filled', 0xea7e),
    organizationOutline: register('organization-outline', 0xea7e),
    newFile: register('new-file', 0xea7f),
    fileAdd: register('file-add', 0xea7f),
    newFolder: register('new-folder', 0xea80),
    fileDirectoryCreate: register('file-directory-create', 0xea80),
    trash: register('trash', 0xea81),
    trashcan: register('trashcan', 0xea81),
    history: register('history', 0xea82),
    clock: register('clock', 0xea82),
    folder: register('folder', 0xea83),
    fileDirectory: register('file-directory', 0xea83),
    symbolFolder: register('symbol-folder', 0xea83),
    logoGithub: register('logo-github', 0xea84),
    markGithub: register('mark-github', 0xea84),
    github: register('github', 0xea84),
    terminal: register('terminal', 0xea85),
    console: register('console', 0xea85),
    repl: register('repl', 0xea85),
    zap: register('zap', 0xea86),
    symbolEvent: register('symbol-event', 0xea86),
    error: register('error', 0xea87),
    stop: register('stop', 0xea87),
    variable: register('variable', 0xea88),
    symbolVariable: register('symbol-variable', 0xea88),
    array: register('array', 0xea8a),
    symbolArray: register('symbol-array', 0xea8a),
    symbolModule: register('symbol-module', 0xea8b),
    symbolPackage: register('symbol-package', 0xea8b),
    symbolNamespace: register('symbol-namespace', 0xea8b),
    symbolObject: register('symbol-object', 0xea8b),
    symbolMethod: register('symbol-method', 0xea8c),
    symbolFunction: register('symbol-function', 0xea8c),
    symbolConstructor: register('symbol-constructor', 0xea8c),
    symbolBoolean: register('symbol-boolean', 0xea8f),
    symbolNull: register('symbol-null', 0xea8f),
    symbolNumeric: register('symbol-numeric', 0xea90),
    symbolNumber: register('symbol-number', 0xea90),
    symbolStructure: register('symbol-structure', 0xea91),
    symbolStruct: register('symbol-struct', 0xea91),
    symbolParameter: register('symbol-parameter', 0xea92),
    symbolTypeParameter: register('symbol-type-parameter', 0xea92),
    symbolKey: register('symbol-key', 0xea93),
    symbolText: register('symbol-text', 0xea93),
    symbolReference: register('symbol-reference', 0xea94),
    goToFile: register('go-to-file', 0xea94),
    symbolEnum: register('symbol-enum', 0xea95),
    symbolValue: register('symbol-value', 0xea95),
    symbolRuler: register('symbol-ruler', 0xea96),
    symbolUnit: register('symbol-unit', 0xea96),
    activateBreakpoints: register('activate-breakpoints', 0xea97),
    archive: register('archive', 0xea98),
    arrowBoth: register('arrow-both', 0xea99),
    arrowDown: register('arrow-down', 0xea9a),
    arrowLeft: register('arrow-left', 0xea9b),
    arrowRight: register('arrow-right', 0xea9c),
    arrowSmallDown: register('arrow-small-down', 0xea9d),
    arrowSmallLeft: register('arrow-small-left', 0xea9e),
    arrowSmallRight: register('arrow-small-right', 0xea9f),
    arrowSmallUp: register('arrow-small-up', 0xeaa0),
    arrowUp: register('arrow-up', 0xeaa1),
    bell: register('bell', 0xeaa2),
    bold: register('bold', 0xeaa3),
    book: register('book', 0xeaa4),
    bookmark: register('bookmark', 0xeaa5),
    debugBreakpointConditionalUnverified: register('debug-breakpoint-conditional-unverified', 0xeaa6),
    debugBreakpointConditional: register('debug-breakpoint-conditional', 0xeaa7),
    debugBreakpointConditionalDisabled: register('debug-breakpoint-conditional-disabled', 0xeaa7),
    debugBreakpointDataUnverified: register('debug-breakpoint-data-unverified', 0xeaa8),
    debugBreakpointData: register('debug-breakpoint-data', 0xeaa9),
    debugBreakpointDataDisabled: register('debug-breakpoint-data-disabled', 0xeaa9),
    debugBreakpointLogUnverified: register('debug-breakpoint-log-unverified', 0xeaaa),
    debugBreakpointLog: register('debug-breakpoint-log', 0xeaab),
    debugBreakpointLogDisabled: register('debug-breakpoint-log-disabled', 0xeaab),
    briefcase: register('briefcase', 0xeaac),
    broadcast: register('broadcast', 0xeaad),
    browser: register('browser', 0xeaae),
    bug: register('bug', 0xeaaf),
    calendar: register('calendar', 0xeab0),
    caseSensitive: register('case-sensitive', 0xeab1),
    check: register('check', 0xeab2),
    checklist: register('checklist', 0xeab3),
    chevronDown: register('chevron-down', 0xeab4),
    dropDownButton: register('drop-down-button', 0xeab4),
    chevronLeft: register('chevron-left', 0xeab5),
    chevronRight: register('chevron-right', 0xeab6),
    chevronUp: register('chevron-up', 0xeab7),
    chromeClose: register('chrome-close', 0xeab8),
    chromeMaximize: register('chrome-maximize', 0xeab9),
    chromeMinimize: register('chrome-minimize', 0xeaba),
    chromeRestore: register('chrome-restore', 0xeabb),
    circle: register('circle', 0xeabc),
    circleOutline: register('circle-outline', 0xeabc),
    debugBreakpointUnverified: register('debug-breakpoint-unverified', 0xeabc),
    circleSlash: register('circle-slash', 0xeabd),
    circuitBoard: register('circuit-board', 0xeabe),
    clearAll: register('clear-all', 0xeabf),
    clippy: register('clippy', 0xeac0),
    closeAll: register('close-all', 0xeac1),
    cloudDownload: register('cloud-download', 0xeac2),
    cloudUpload: register('cloud-upload', 0xeac3),
    code: register('code', 0xeac4),
    collapseAll: register('collapse-all', 0xeac5),
    colorMode: register('color-mode', 0xeac6),
    commentDiscussion: register('comment-discussion', 0xeac7),
    compareChanges: register('compare-changes', 0xeafd),
    creditCard: register('credit-card', 0xeac9),
    dash: register('dash', 0xeacc),
    dashboard: register('dashboard', 0xeacd),
    database: register('database', 0xeace),
    debugContinue: register('debug-continue', 0xeacf),
    debugDisconnect: register('debug-disconnect', 0xead0),
    debugPause: register('debug-pause', 0xead1),
    debugRestart: register('debug-restart', 0xead2),
    debugStart: register('debug-start', 0xead3),
    debugStepInto: register('debug-step-into', 0xead4),
    debugStepOut: register('debug-step-out', 0xead5),
    debugStepOver: register('debug-step-over', 0xead6),
    debugStop: register('debug-stop', 0xead7),
    debug: register('debug', 0xead8),
    deviceCameraVideo: register('device-camera-video', 0xead9),
    deviceCamera: register('device-camera', 0xeada),
    deviceMobile: register('device-mobile', 0xeadb),
    diffAdded: register('diff-added', 0xeadc),
    diffIgnored: register('diff-ignored', 0xeadd),
    diffModified: register('diff-modified', 0xeade),
    diffRemoved: register('diff-removed', 0xeadf),
    diffRenamed: register('diff-renamed', 0xeae0),
    diff: register('diff', 0xeae1),
    discard: register('discard', 0xeae2),
    editorLayout: register('editor-layout', 0xeae3),
    emptyWindow: register('empty-window', 0xeae4),
    exclude: register('exclude', 0xeae5),
    extensions: register('extensions', 0xeae6),
    eyeClosed: register('eye-closed', 0xeae7),
    fileBinary: register('file-binary', 0xeae8),
    fileCode: register('file-code', 0xeae9),
    fileMedia: register('file-media', 0xeaea),
    filePdf: register('file-pdf', 0xeaeb),
    fileSubmodule: register('file-submodule', 0xeaec),
    fileSymlinkDirectory: register('file-symlink-directory', 0xeaed),
    fileSymlinkFile: register('file-symlink-file', 0xeaee),
    fileZip: register('file-zip', 0xeaef),
    files: register('files', 0xeaf0),
    filter: register('filter', 0xeaf1),
    flame: register('flame', 0xeaf2),
    foldDown: register('fold-down', 0xeaf3),
    foldUp: register('fold-up', 0xeaf4),
    fold: register('fold', 0xeaf5),
    folderActive: register('folder-active', 0xeaf6),
    folderOpened: register('folder-opened', 0xeaf7),
    gear: register('gear', 0xeaf8),
    gift: register('gift', 0xeaf9),
    gistSecret: register('gist-secret', 0xeafa),
    gist: register('gist', 0xeafb),
    gitCommit: register('git-commit', 0xeafc),
    gitCompare: register('git-compare', 0xeafd),
    gitMerge: register('git-merge', 0xeafe),
    githubAction: register('github-action', 0xeaff),
    githubAlt: register('github-alt', 0xeb00),
    globe: register('globe', 0xeb01),
    grabber: register('grabber', 0xeb02),
    graph: register('graph', 0xeb03),
    gripper: register('gripper', 0xeb04),
    heart: register('heart', 0xeb05),
    home: register('home', 0xeb06),
    horizontalRule: register('horizontal-rule', 0xeb07),
    hubot: register('hubot', 0xeb08),
    inbox: register('inbox', 0xeb09),
    issueClosed: register('issue-closed', 0xeba4),
    issueReopened: register('issue-reopened', 0xeb0b),
    issues: register('issues', 0xeb0c),
    italic: register('italic', 0xeb0d),
    jersey: register('jersey', 0xeb0e),
    json: register('json', 0xeb0f),
    bracket: register('bracket', 0xeb0f),
    kebabVertical: register('kebab-vertical', 0xeb10),
    key: register('key', 0xeb11),
    law: register('law', 0xeb12),
    lightbulbAutofix: register('lightbulb-autofix', 0xeb13),
    linkExternal: register('link-external', 0xeb14),
    link: register('link', 0xeb15),
    listOrdered: register('list-ordered', 0xeb16),
    listUnordered: register('list-unordered', 0xeb17),
    liveShare: register('live-share', 0xeb18),
    loading: register('loading', 0xeb19),
    location: register('location', 0xeb1a),
    mailRead: register('mail-read', 0xeb1b),
    mail: register('mail', 0xeb1c),
    markdown: register('markdown', 0xeb1d),
    megaphone: register('megaphone', 0xeb1e),
    mention: register('mention', 0xeb1f),
    milestone: register('milestone', 0xeb20),
    mortarBoard: register('mortar-board', 0xeb21),
    move: register('move', 0xeb22),
    multipleWindows: register('multiple-windows', 0xeb23),
    mute: register('mute', 0xeb24),
    noNewline: register('no-newline', 0xeb25),
    note: register('note', 0xeb26),
    octoface: register('octoface', 0xeb27),
    openPreview: register('open-preview', 0xeb28),
    package_: register('package', 0xeb29),
    paintcan: register('paintcan', 0xeb2a),
    pin: register('pin', 0xeb2b),
    play: register('play', 0xeb2c),
    run: register('run', 0xeb2c),
    plug: register('plug', 0xeb2d),
    preserveCase: register('preserve-case', 0xeb2e),
    preview: register('preview', 0xeb2f),
    project: register('project', 0xeb30),
    pulse: register('pulse', 0xeb31),
    question: register('question', 0xeb32),
    quote: register('quote', 0xeb33),
    radioTower: register('radio-tower', 0xeb34),
    reactions: register('reactions', 0xeb35),
    references: register('references', 0xeb36),
    refresh: register('refresh', 0xeb37),
    regex: register('regex', 0xeb38),
    remoteExplorer: register('remote-explorer', 0xeb39),
    remote: register('remote', 0xeb3a),
    remove: register('remove', 0xeb3b),
    replaceAll: register('replace-all', 0xeb3c),
    replace: register('replace', 0xeb3d),
    repoClone: register('repo-clone', 0xeb3e),
    repoForcePush: register('repo-force-push', 0xeb3f),
    repoPull: register('repo-pull', 0xeb40),
    repoPush: register('repo-push', 0xeb41),
    report: register('report', 0xeb42),
    requestChanges: register('request-changes', 0xeb43),
    rocket: register('rocket', 0xeb44),
    rootFolderOpened: register('root-folder-opened', 0xeb45),
    rootFolder: register('root-folder', 0xeb46),
    rss: register('rss', 0xeb47),
    ruby: register('ruby', 0xeb48),
    saveAll: register('save-all', 0xeb49),
    saveAs: register('save-as', 0xeb4a),
    save: register('save', 0xeb4b),
    screenFull: register('screen-full', 0xeb4c),
    screenNormal: register('screen-normal', 0xeb4d),
    searchStop: register('search-stop', 0xeb4e),
    server: register('server', 0xeb50),
    settingsGear: register('settings-gear', 0xeb51),
    settings: register('settings', 0xeb52),
    shield: register('shield', 0xeb53),
    smiley: register('smiley', 0xeb54),
    sortPrecedence: register('sort-precedence', 0xeb55),
    splitHorizontal: register('split-horizontal', 0xeb56),
    splitVertical: register('split-vertical', 0xeb57),
    squirrel: register('squirrel', 0xeb58),
    starFull: register('star-full', 0xeb59),
    starHalf: register('star-half', 0xeb5a),
    symbolClass: register('symbol-class', 0xeb5b),
    symbolColor: register('symbol-color', 0xeb5c),
    symbolCustomColor: register('symbol-customcolor', 0xeb5c),
    symbolConstant: register('symbol-constant', 0xeb5d),
    symbolEnumMember: register('symbol-enum-member', 0xeb5e),
    symbolField: register('symbol-field', 0xeb5f),
    symbolFile: register('symbol-file', 0xeb60),
    symbolInterface: register('symbol-interface', 0xeb61),
    symbolKeyword: register('symbol-keyword', 0xeb62),
    symbolMisc: register('symbol-misc', 0xeb63),
    symbolOperator: register('symbol-operator', 0xeb64),
    symbolProperty: register('symbol-property', 0xeb65),
    wrench: register('wrench', 0xeb65),
    wrenchSubaction: register('wrench-subaction', 0xeb65),
    symbolSnippet: register('symbol-snippet', 0xeb66),
    tasklist: register('tasklist', 0xeb67),
    telescope: register('telescope', 0xeb68),
    textSize: register('text-size', 0xeb69),
    threeBars: register('three-bars', 0xeb6a),
    thumbsdown: register('thumbsdown', 0xeb6b),
    thumbsup: register('thumbsup', 0xeb6c),
    tools: register('tools', 0xeb6d),
    triangleDown: register('triangle-down', 0xeb6e),
    triangleLeft: register('triangle-left', 0xeb6f),
    triangleRight: register('triangle-right', 0xeb70),
    triangleUp: register('triangle-up', 0xeb71),
    twitter: register('twitter', 0xeb72),
    unfold: register('unfold', 0xeb73),
    unlock: register('unlock', 0xeb74),
    unmute: register('unmute', 0xeb75),
    unverified: register('unverified', 0xeb76),
    verified: register('verified', 0xeb77),
    versions: register('versions', 0xeb78),
    vmActive: register('vm-active', 0xeb79),
    vmOutline: register('vm-outline', 0xeb7a),
    vmRunning: register('vm-running', 0xeb7b),
    watch: register('watch', 0xeb7c),
    whitespace: register('whitespace', 0xeb7d),
    wholeWord: register('whole-word', 0xeb7e),
    window: register('window', 0xeb7f),
    wordWrap: register('word-wrap', 0xeb80),
    zoomIn: register('zoom-in', 0xeb81),
    zoomOut: register('zoom-out', 0xeb82),
    listFilter: register('list-filter', 0xeb83),
    listFlat: register('list-flat', 0xeb84),
    listSelection: register('list-selection', 0xeb85),
    selection: register('selection', 0xeb85),
    listTree: register('list-tree', 0xeb86),
    debugBreakpointFunctionUnverified: register('debug-breakpoint-function-unverified', 0xeb87),
    debugBreakpointFunction: register('debug-breakpoint-function', 0xeb88),
    debugBreakpointFunctionDisabled: register('debug-breakpoint-function-disabled', 0xeb88),
    debugStackframeActive: register('debug-stackframe-active', 0xeb89),
    circleSmallFilled: register('circle-small-filled', 0xeb8a),
    debugStackframeDot: register('debug-stackframe-dot', 0xeb8a),
    debugStackframe: register('debug-stackframe', 0xeb8b),
    debugStackframeFocused: register('debug-stackframe-focused', 0xeb8b),
    debugBreakpointUnsupported: register('debug-breakpoint-unsupported', 0xeb8c),
    symbolString: register('symbol-string', 0xeb8d),
    debugReverseContinue: register('debug-reverse-continue', 0xeb8e),
    debugStepBack: register('debug-step-back', 0xeb8f),
    debugRestartFrame: register('debug-restart-frame', 0xeb90),
    callIncoming: register('call-incoming', 0xeb92),
    callOutgoing: register('call-outgoing', 0xeb93),
    menu: register('menu', 0xeb94),
    expandAll: register('expand-all', 0xeb95),
    feedback: register('feedback', 0xeb96),
    groupByRefType: register('group-by-ref-type', 0xeb97),
    ungroupByRefType: register('ungroup-by-ref-type', 0xeb98),
    account: register('account', 0xeb99),
    bellDot: register('bell-dot', 0xeb9a),
    debugConsole: register('debug-console', 0xeb9b),
    library: register('library', 0xeb9c),
    output: register('output', 0xeb9d),
    runAll: register('run-all', 0xeb9e),
    syncIgnored: register('sync-ignored', 0xeb9f),
    pinned: register('pinned', 0xeba0),
    githubInverted: register('github-inverted', 0xeba1),
    debugAlt: register('debug-alt', 0xeb91),
    serverProcess: register('server-process', 0xeba2),
    serverEnvironment: register('server-environment', 0xeba3),
    pass: register('pass', 0xeba4),
    stopCircle: register('stop-circle', 0xeba5),
    playCircle: register('play-circle', 0xeba6),
    record: register('record', 0xeba7),
    debugAltSmall: register('debug-alt-small', 0xeba8),
    vmConnect: register('vm-connect', 0xeba9),
    cloud: register('cloud', 0xebaa),
    merge: register('merge', 0xebab),
    exportIcon: register('export', 0xebac),
    graphLeft: register('graph-left', 0xebad),
    magnet: register('magnet', 0xebae),
    notebook: register('notebook', 0xebaf),
    redo: register('redo', 0xebb0),
    checkAll: register('check-all', 0xebb1),
    pinnedDirty: register('pinned-dirty', 0xebb2),
    passFilled: register('pass-filled', 0xebb3),
    circleLargeFilled: register('circle-large-filled', 0xebb4),
    circleLarge: register('circle-large', 0xebb5),
    circleLargeOutline: register('circle-large-outline', 0xebb5),
    combine: register('combine', 0xebb6),
    gather: register('gather', 0xebb6),
    table: register('table', 0xebb7),
    variableGroup: register('variable-group', 0xebb8),
    typeHierarchy: register('type-hierarchy', 0xebb9),
    typeHierarchySub: register('type-hierarchy-sub', 0xebba),
    typeHierarchySuper: register('type-hierarchy-super', 0xebbb),
    gitPullRequestCreate: register('git-pull-request-create', 0xebbc),
    runAbove: register('run-above', 0xebbd),
    runBelow: register('run-below', 0xebbe),
    notebookTemplate: register('notebook-template', 0xebbf),
    debugRerun: register('debug-rerun', 0xebc0),
    workspaceTrusted: register('workspace-trusted', 0xebc1),
    workspaceUntrusted: register('workspace-untrusted', 0xebc2),
    workspaceUnspecified: register('workspace-unspecified', 0xebc3),
    terminalCmd: register('terminal-cmd', 0xebc4),
    terminalDebian: register('terminal-debian', 0xebc5),
    terminalLinux: register('terminal-linux', 0xebc6),
    terminalPowershell: register('terminal-powershell', 0xebc7),
    terminalTmux: register('terminal-tmux', 0xebc8),
    terminalUbuntu: register('terminal-ubuntu', 0xebc9),
    terminalBash: register('terminal-bash', 0xebca),
    arrowSwap: register('arrow-swap', 0xebcb),
    copy: register('copy', 0xebcc),
    personAdd: register('person-add', 0xebcd),
    filterFilled: register('filter-filled', 0xebce),
    wand: register('wand', 0xebcf),
    debugLineByLine: register('debug-line-by-line', 0xebd0),
    inspect: register('inspect', 0xebd1),
    layers: register('layers', 0xebd2),
    layersDot: register('layers-dot', 0xebd3),
    layersActive: register('layers-active', 0xebd4),
    compass: register('compass', 0xebd5),
    compassDot: register('compass-dot', 0xebd6),
    compassActive: register('compass-active', 0xebd7),
    azure: register('azure', 0xebd8),
    issueDraft: register('issue-draft', 0xebd9),
    gitPullRequestClosed: register('git-pull-request-closed', 0xebda),
    gitPullRequestDraft: register('git-pull-request-draft', 0xebdb),
    debugAll: register('debug-all', 0xebdc),
    debugCoverage: register('debug-coverage', 0xebdd),
    runErrors: register('run-errors', 0xebde),
    folderLibrary: register('folder-library', 0xebdf),
    debugContinueSmall: register('debug-continue-small', 0xebe0),
    beakerStop: register('beaker-stop', 0xebe1),
    graphLine: register('graph-line', 0xebe2),
    graphScatter: register('graph-scatter', 0xebe3),
    pieChart: register('pie-chart', 0xebe4),
    bracketDot: register('bracket-dot', 0xebe5),
    bracketError: register('bracket-error', 0xebe6),
    lockSmall: register('lock-small', 0xebe7),
    azureDevops: register('azure-devops', 0xebe8),
    verifiedFilled: register('verified-filled', 0xebe9),
    newLine: register('newline', 0xebea),
    layout: register('layout', 0xebeb),
    layoutActivitybarLeft: register('layout-activitybar-left', 0xebec),
    layoutActivitybarRight: register('layout-activitybar-right', 0xebed),
    layoutPanelLeft: register('layout-panel-left', 0xebee),
    layoutPanelCenter: register('layout-panel-center', 0xebef),
    layoutPanelJustify: register('layout-panel-justify', 0xebf0),
    layoutPanelRight: register('layout-panel-right', 0xebf1),
    layoutPanel: register('layout-panel', 0xebf2),
    layoutSidebarLeft: register('layout-sidebar-left', 0xebf3),
    layoutSidebarRight: register('layout-sidebar-right', 0xebf4),
    layoutStatusbar: register('layout-statusbar', 0xebf5),
    layoutMenubar: register('layout-menubar', 0xebf6),
    layoutCentered: register('layout-centered', 0xebf7),
    layoutSidebarRightOff: register('layout-sidebar-right-off', 0xec00),
    layoutPanelOff: register('layout-panel-off', 0xec01),
    layoutSidebarLeftOff: register('layout-sidebar-left-off', 0xec02),
    target: register('target', 0xebf8),
    indent: register('indent', 0xebf9),
    recordSmall: register('record-small', 0xebfa),
    errorSmall: register('error-small', 0xebfb),
    arrowCircleDown: register('arrow-circle-down', 0xebfc),
    arrowCircleLeft: register('arrow-circle-left', 0xebfd),
    arrowCircleRight: register('arrow-circle-right', 0xebfe),
    arrowCircleUp: register('arrow-circle-up', 0xebff),
    heartFilled: register('heart-filled', 0xec04),
    map: register('map', 0xec05),
    mapFilled: register('map-filled', 0xec06),
    circleSmall: register('circle-small', 0xec07),
    bellSlash: register('bell-slash', 0xec08),
    bellSlashDot: register('bell-slash-dot', 0xec09),
    commentUnresolved: register('comment-unresolved', 0xec0a),
    gitPullRequestGoToChanges: register('git-pull-request-go-to-changes', 0xec0b),
    gitPullRequestNewChanges: register('git-pull-request-new-changes', 0xec0c),
    searchFuzzy: register('search-fuzzy', 0xec0d),
    commentDraft: register('comment-draft', 0xec0e),
    send: register('send', 0xec0f),
    sparkle: register('sparkle', 0xec10),
    insert: register('insert', 0xec11),
    // derived icons, that could become separate icons
    dialogError: register('dialog-error', 'error'),
    dialogWarning: register('dialog-warning', 'warning'),
    dialogInfo: register('dialog-info', 'info'),
    dialogClose: register('dialog-close', 'close'),
    treeItemExpanded: register('tree-item-expanded', 'chevron-down'),
    treeFilterOnTypeOn: register('tree-filter-on-type-on', 'list-filter'),
    treeFilterOnTypeOff: register('tree-filter-on-type-off', 'list-selection'),
    treeFilterClear: register('tree-filter-clear', 'close'),
    treeItemLoading: register('tree-item-loading', 'loading'),
    menuSelection: register('menu-selection', 'check'),
    menuSubmenu: register('menu-submenu', 'chevron-right'),
    menuBarMore: register('menubar-more', 'more'),
    scrollbarButtonLeft: register('scrollbar-button-left', 'triangle-left'),
    scrollbarButtonRight: register('scrollbar-button-right', 'triangle-right'),
    scrollbarButtonUp: register('scrollbar-button-up', 'triangle-up'),
    scrollbarButtonDown: register('scrollbar-button-down', 'triangle-down'),
    toolBarMore: register('toolbar-more', 'more'),
    quickInputBack: register('quick-input-back', 'arrow-left')
};


/***/ }),

/***/ 89544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ SetMap; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SetMap {
    constructor() {
        this.map = new Map();
    }
    add(key, value) {
        let values = this.map.get(key);
        if (!values) {
            values = new Set();
            this.map.set(key, values);
        }
        values.add(value);
    }
    delete(key, value) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.delete(value);
        if (values.size === 0) {
            this.map.delete(key);
        }
    }
    forEach(key, fn) {
        const values = this.map.get(key);
        if (!values) {
            return;
        }
        values.forEach(fn);
    }
}


/***/ }),

/***/ 2157:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Il: function() { return /* binding */ Color; },
/* harmony export */   Oz: function() { return /* binding */ HSLA; },
/* harmony export */   VS: function() { return /* binding */ RGBA; },
/* harmony export */   tx: function() { return /* binding */ HSVA; }
/* harmony export */ });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function roundFloat(number, decimalPoints) {
    const decimal = Math.pow(10, decimalPoints);
    return Math.round(number * decimal) / decimal;
}
class RGBA {
    constructor(r, g, b, a = 1) {
        this._rgbaBrand = undefined;
        this.r = Math.min(255, Math.max(0, r)) | 0;
        this.g = Math.min(255, Math.max(0, g)) | 0;
        this.b = Math.min(255, Math.max(0, b)) | 0;
        this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
    }
    static equals(a, b) {
        return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
    }
}
class HSLA {
    constructor(h, s, l, a) {
        this._hslaBrand = undefined;
        this.h = Math.max(Math.min(360, h), 0) | 0;
        this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
        this.l = roundFloat(Math.max(Math.min(1, l), 0), 3);
        this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
    }
    static equals(a, b) {
        return a.h === b.h && a.s === b.s && a.l === b.l && a.a === b.a;
    }
    /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h in the set [0, 360], s, and l in the set [0, 1].
     */
    static fromRGBA(rgba) {
        const r = rgba.r / 255;
        const g = rgba.g / 255;
        const b = rgba.b / 255;
        const a = rgba.a;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h = 0;
        let s = 0;
        const l = (min + max) / 2;
        const chroma = max - min;
        if (chroma > 0) {
            s = Math.min((l <= 0.5 ? chroma / (2 * l) : chroma / (2 - (2 * l))), 1);
            switch (max) {
                case r:
                    h = (g - b) / chroma + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / chroma + 2;
                    break;
                case b:
                    h = (r - g) / chroma + 4;
                    break;
            }
            h *= 60;
            h = Math.round(h);
        }
        return new HSLA(h, s, l, a);
    }
    static _hue2rgb(p, q, t) {
        if (t < 0) {
            t += 1;
        }
        if (t > 1) {
            t -= 1;
        }
        if (t < 1 / 6) {
            return p + (q - p) * 6 * t;
        }
        if (t < 1 / 2) {
            return q;
        }
        if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
        }
        return p;
    }
    /**
     * Converts an HSL color value to RGB. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes h in the set [0, 360] s, and l are contained in the set [0, 1] and
     * returns r, g, and b in the set [0, 255].
     */
    static toRGBA(hsla) {
        const h = hsla.h / 360;
        const { s, l, a } = hsla;
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = HSLA._hue2rgb(p, q, h + 1 / 3);
            g = HSLA._hue2rgb(p, q, h);
            b = HSLA._hue2rgb(p, q, h - 1 / 3);
        }
        return new RGBA(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), a);
    }
}
class HSVA {
    constructor(h, s, v, a) {
        this._hsvaBrand = undefined;
        this.h = Math.max(Math.min(360, h), 0) | 0;
        this.s = roundFloat(Math.max(Math.min(1, s), 0), 3);
        this.v = roundFloat(Math.max(Math.min(1, v), 0), 3);
        this.a = roundFloat(Math.max(Math.min(1, a), 0), 3);
    }
    static equals(a, b) {
        return a.h === b.h && a.s === b.s && a.v === b.v && a.a === b.a;
    }
    // from http://www.rapidtables.com/convert/color/rgb-to-hsv.htm
    static fromRGBA(rgba) {
        const r = rgba.r / 255;
        const g = rgba.g / 255;
        const b = rgba.b / 255;
        const cmax = Math.max(r, g, b);
        const cmin = Math.min(r, g, b);
        const delta = cmax - cmin;
        const s = cmax === 0 ? 0 : (delta / cmax);
        let m;
        if (delta === 0) {
            m = 0;
        }
        else if (cmax === r) {
            m = ((((g - b) / delta) % 6) + 6) % 6;
        }
        else if (cmax === g) {
            m = ((b - r) / delta) + 2;
        }
        else {
            m = ((r - g) / delta) + 4;
        }
        return new HSVA(Math.round(m * 60), s, cmax, rgba.a);
    }
    // from http://www.rapidtables.com/convert/color/hsv-to-rgb.htm
    static toRGBA(hsva) {
        const { h, s, v, a } = hsva;
        const c = v * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = v - c;
        let [r, g, b] = [0, 0, 0];
        if (h < 60) {
            r = c;
            g = x;
        }
        else if (h < 120) {
            r = x;
            g = c;
        }
        else if (h < 180) {
            g = c;
            b = x;
        }
        else if (h < 240) {
            g = x;
            b = c;
        }
        else if (h < 300) {
            r = x;
            b = c;
        }
        else if (h <= 360) {
            r = c;
            b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);
        return new RGBA(r, g, b, a);
    }
}
class Color {
    static fromHex(hex) {
        return Color.Format.CSS.parseHex(hex) || Color.red;
    }
    static equals(a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        return a.equals(b);
    }
    get hsla() {
        if (this._hsla) {
            return this._hsla;
        }
        else {
            return HSLA.fromRGBA(this.rgba);
        }
    }
    get hsva() {
        if (this._hsva) {
            return this._hsva;
        }
        return HSVA.fromRGBA(this.rgba);
    }
    constructor(arg) {
        if (!arg) {
            throw new Error('Color needs a value');
        }
        else if (arg instanceof RGBA) {
            this.rgba = arg;
        }
        else if (arg instanceof HSLA) {
            this._hsla = arg;
            this.rgba = HSLA.toRGBA(arg);
        }
        else if (arg instanceof HSVA) {
            this._hsva = arg;
            this.rgba = HSVA.toRGBA(arg);
        }
        else {
            throw new Error('Invalid color ctor argument');
        }
    }
    equals(other) {
        return !!other && RGBA.equals(this.rgba, other.rgba) && HSLA.equals(this.hsla, other.hsla) && HSVA.equals(this.hsva, other.hsva);
    }
    /**
     * http://www.w3.org/TR/WCAG20/#relativeluminancedef
     * Returns the number in the set [0, 1]. O => Darkest Black. 1 => Lightest white.
     */
    getRelativeLuminance() {
        const R = Color._relativeLuminanceForComponent(this.rgba.r);
        const G = Color._relativeLuminanceForComponent(this.rgba.g);
        const B = Color._relativeLuminanceForComponent(this.rgba.b);
        const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;
        return roundFloat(luminance, 4);
    }
    static _relativeLuminanceForComponent(color) {
        const c = color / 255;
        return (c <= 0.03928) ? c / 12.92 : Math.pow(((c + 0.055) / 1.055), 2.4);
    }
    /**
     *	http://24ways.org/2010/calculating-color-contrast
     *  Return 'true' if lighter color otherwise 'false'
     */
    isLighter() {
        const yiq = (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1000;
        return yiq >= 128;
    }
    isLighterThan(another) {
        const lum1 = this.getRelativeLuminance();
        const lum2 = another.getRelativeLuminance();
        return lum1 > lum2;
    }
    isDarkerThan(another) {
        const lum1 = this.getRelativeLuminance();
        const lum2 = another.getRelativeLuminance();
        return lum1 < lum2;
    }
    lighten(factor) {
        return new Color(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * factor, this.hsla.a));
    }
    darken(factor) {
        return new Color(new HSLA(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * factor, this.hsla.a));
    }
    transparent(factor) {
        const { r, g, b, a } = this.rgba;
        return new Color(new RGBA(r, g, b, a * factor));
    }
    isTransparent() {
        return this.rgba.a === 0;
    }
    isOpaque() {
        return this.rgba.a === 1;
    }
    opposite() {
        return new Color(new RGBA(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    makeOpaque(opaqueBackground) {
        if (this.isOpaque() || opaqueBackground.rgba.a !== 1) {
            // only allow to blend onto a non-opaque color onto a opaque color
            return this;
        }
        const { r, g, b, a } = this.rgba;
        // https://stackoverflow.com/questions/12228548/finding-equivalent-color-with-opacity
        return new Color(new RGBA(opaqueBackground.rgba.r - a * (opaqueBackground.rgba.r - r), opaqueBackground.rgba.g - a * (opaqueBackground.rgba.g - g), opaqueBackground.rgba.b - a * (opaqueBackground.rgba.b - b), 1));
    }
    toString() {
        if (!this._toString) {
            this._toString = Color.Format.CSS.format(this);
        }
        return this._toString;
    }
    static getLighterColor(of, relative, factor) {
        if (of.isLighterThan(relative)) {
            return of;
        }
        factor = factor ? factor : 0.5;
        const lum1 = of.getRelativeLuminance();
        const lum2 = relative.getRelativeLuminance();
        factor = factor * (lum2 - lum1) / lum2;
        return of.lighten(factor);
    }
    static getDarkerColor(of, relative, factor) {
        if (of.isDarkerThan(relative)) {
            return of;
        }
        factor = factor ? factor : 0.5;
        const lum1 = of.getRelativeLuminance();
        const lum2 = relative.getRelativeLuminance();
        factor = factor * (lum1 - lum2) / lum1;
        return of.darken(factor);
    }
}
Color.white = new Color(new RGBA(255, 255, 255, 1));
Color.black = new Color(new RGBA(0, 0, 0, 1));
Color.red = new Color(new RGBA(255, 0, 0, 1));
Color.blue = new Color(new RGBA(0, 0, 255, 1));
Color.green = new Color(new RGBA(0, 255, 0, 1));
Color.cyan = new Color(new RGBA(0, 255, 255, 1));
Color.lightgrey = new Color(new RGBA(211, 211, 211, 1));
Color.transparent = new Color(new RGBA(0, 0, 0, 0));
(function (Color) {
    let Format;
    (function (Format) {
        let CSS;
        (function (CSS) {
            function formatRGB(color) {
                if (color.rgba.a === 1) {
                    return `rgb(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b})`;
                }
                return Color.Format.CSS.formatRGBA(color);
            }
            CSS.formatRGB = formatRGB;
            function formatRGBA(color) {
                return `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${+(color.rgba.a).toFixed(2)})`;
            }
            CSS.formatRGBA = formatRGBA;
            function formatHSL(color) {
                if (color.hsla.a === 1) {
                    return `hsl(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%)`;
                }
                return Color.Format.CSS.formatHSLA(color);
            }
            CSS.formatHSL = formatHSL;
            function formatHSLA(color) {
                return `hsla(${color.hsla.h}, ${(color.hsla.s * 100).toFixed(2)}%, ${(color.hsla.l * 100).toFixed(2)}%, ${color.hsla.a.toFixed(2)})`;
            }
            CSS.formatHSLA = formatHSLA;
            function _toTwoDigitHex(n) {
                const r = n.toString(16);
                return r.length !== 2 ? '0' + r : r;
            }
            /**
             * Formats the color as #RRGGBB
             */
            function formatHex(color) {
                return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}`;
            }
            CSS.formatHex = formatHex;
            /**
             * Formats the color as #RRGGBBAA
             * If 'compact' is set, colors without transparancy will be printed as #RRGGBB
             */
            function formatHexA(color, compact = false) {
                if (compact && color.rgba.a === 1) {
                    return Color.Format.CSS.formatHex(color);
                }
                return `#${_toTwoDigitHex(color.rgba.r)}${_toTwoDigitHex(color.rgba.g)}${_toTwoDigitHex(color.rgba.b)}${_toTwoDigitHex(Math.round(color.rgba.a * 255))}`;
            }
            CSS.formatHexA = formatHexA;
            /**
             * The default format will use HEX if opaque and RGBA otherwise.
             */
            function format(color) {
                if (color.isOpaque()) {
                    return Color.Format.CSS.formatHex(color);
                }
                return Color.Format.CSS.formatRGBA(color);
            }
            CSS.format = format;
            /**
             * Converts an Hex color value to a Color.
             * returns r, g, and b are contained in the set [0, 255]
             * @param hex string (#RGB, #RGBA, #RRGGBB or #RRGGBBAA).
             */
            function parseHex(hex) {
                const length = hex.length;
                if (length === 0) {
                    // Invalid color
                    return null;
                }
                if (hex.charCodeAt(0) !== 35 /* CharCode.Hash */) {
                    // Does not begin with a #
                    return null;
                }
                if (length === 7) {
                    // #RRGGBB format
                    const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
                    const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
                    const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
                    return new Color(new RGBA(r, g, b, 1));
                }
                if (length === 9) {
                    // #RRGGBBAA format
                    const r = 16 * _parseHexDigit(hex.charCodeAt(1)) + _parseHexDigit(hex.charCodeAt(2));
                    const g = 16 * _parseHexDigit(hex.charCodeAt(3)) + _parseHexDigit(hex.charCodeAt(4));
                    const b = 16 * _parseHexDigit(hex.charCodeAt(5)) + _parseHexDigit(hex.charCodeAt(6));
                    const a = 16 * _parseHexDigit(hex.charCodeAt(7)) + _parseHexDigit(hex.charCodeAt(8));
                    return new Color(new RGBA(r, g, b, a / 255));
                }
                if (length === 4) {
                    // #RGB format
                    const r = _parseHexDigit(hex.charCodeAt(1));
                    const g = _parseHexDigit(hex.charCodeAt(2));
                    const b = _parseHexDigit(hex.charCodeAt(3));
                    return new Color(new RGBA(16 * r + r, 16 * g + g, 16 * b + b));
                }
                if (length === 5) {
                    // #RGBA format
                    const r = _parseHexDigit(hex.charCodeAt(1));
                    const g = _parseHexDigit(hex.charCodeAt(2));
                    const b = _parseHexDigit(hex.charCodeAt(3));
                    const a = _parseHexDigit(hex.charCodeAt(4));
                    return new Color(new RGBA(16 * r + r, 16 * g + g, 16 * b + b, (16 * a + a) / 255));
                }
                // Invalid color
                return null;
            }
            CSS.parseHex = parseHex;
            function _parseHexDigit(charCode) {
                switch (charCode) {
                    case 48 /* CharCode.Digit0 */: return 0;
                    case 49 /* CharCode.Digit1 */: return 1;
                    case 50 /* CharCode.Digit2 */: return 2;
                    case 51 /* CharCode.Digit3 */: return 3;
                    case 52 /* CharCode.Digit4 */: return 4;
                    case 53 /* CharCode.Digit5 */: return 5;
                    case 54 /* CharCode.Digit6 */: return 6;
                    case 55 /* CharCode.Digit7 */: return 7;
                    case 56 /* CharCode.Digit8 */: return 8;
                    case 57 /* CharCode.Digit9 */: return 9;
                    case 97 /* CharCode.a */: return 10;
                    case 65 /* CharCode.A */: return 10;
                    case 98 /* CharCode.b */: return 11;
                    case 66 /* CharCode.B */: return 11;
                    case 99 /* CharCode.c */: return 12;
                    case 67 /* CharCode.C */: return 12;
                    case 100 /* CharCode.d */: return 13;
                    case 68 /* CharCode.D */: return 13;
                    case 101 /* CharCode.e */: return 14;
                    case 69 /* CharCode.E */: return 14;
                    case 102 /* CharCode.f */: return 15;
                    case 70 /* CharCode.F */: return 15;
                }
                return 0;
            }
        })(CSS = Format.CSS || (Format.CSS = {}));
    })(Format = Color.Format || (Color.Format = {}));
})(Color || (Color = {}));


/***/ }),

/***/ 31825:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: function() { return /* binding */ compareAnything; }
/* harmony export */ });
/* unused harmony exports compareFileNames, compareByPrefix */
/* harmony import */ var _lazy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92831);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// When comparing large numbers of strings it's better for performance to create an
// Intl.Collator object and use the function provided by its compare property
// than it is to use String.prototype.localeCompare()
// A collator with numeric sorting enabled, and no sensitivity to case, accents or diacritics.
const intlFileNameCollatorBaseNumeric = new _lazy_js__WEBPACK_IMPORTED_MODULE_0__/* .Lazy */ .o(() => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    return {
        collator,
        collatorIsNumeric: collator.resolvedOptions().numeric
    };
});
// A collator with numeric sorting enabled.
const intlFileNameCollatorNumeric = new _lazy_js__WEBPACK_IMPORTED_MODULE_0__/* .Lazy */ .o(() => {
    const collator = new Intl.Collator(undefined, { numeric: true });
    return {
        collator
    };
});
// A collator with numeric sorting enabled, and sensitivity to accents and diacritics but not case.
const intlFileNameCollatorNumericCaseInsensitive = new _lazy_js__WEBPACK_IMPORTED_MODULE_0__/* .Lazy */ .o(() => {
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'accent' });
    return {
        collator
    };
});
/** Compares filenames without distinguishing the name from the extension. Disambiguates by unicode comparison. */
function compareFileNames(one, other, caseSensitive = false) {
    const a = one || '';
    const b = other || '';
    const result = intlFileNameCollatorBaseNumeric.value.collator.compare(a, b);
    // Using the numeric option will make compare(`foo1`, `foo01`) === 0. Disambiguate.
    if (intlFileNameCollatorBaseNumeric.value.collatorIsNumeric && result === 0 && a !== b) {
        return a < b ? -1 : 1;
    }
    return result;
}
function compareAnything(one, other, lookFor) {
    const elementAName = one.toLowerCase();
    const elementBName = other.toLowerCase();
    // Sort prefix matches over non prefix matches
    const prefixCompare = compareByPrefix(one, other, lookFor);
    if (prefixCompare) {
        return prefixCompare;
    }
    // Sort suffix matches over non suffix matches
    const elementASuffixMatch = elementAName.endsWith(lookFor);
    const elementBSuffixMatch = elementBName.endsWith(lookFor);
    if (elementASuffixMatch !== elementBSuffixMatch) {
        return elementASuffixMatch ? -1 : 1;
    }
    // Understand file names
    const r = compareFileNames(elementAName, elementBName);
    if (r !== 0) {
        return r;
    }
    // Compare by name
    return elementAName.localeCompare(elementBName);
}
function compareByPrefix(one, other, lookFor) {
    const elementAName = one.toLowerCase();
    const elementBName = other.toLowerCase();
    // Sort prefix matches over non prefix matches
    const elementAPrefixMatch = elementAName.startsWith(lookFor);
    const elementBPrefixMatch = elementBName.startsWith(lookFor);
    if (elementAPrefixMatch !== elementBPrefixMatch) {
        return elementAPrefixMatch ? -1 : 1;
    }
    // Same prefix: Sort shorter matches to the top to have those on top that match more precisely
    else if (elementAPrefixMatch && elementBPrefixMatch) {
        if (elementAName.length < elementBName.length) {
            return -1;
        }
        if (elementAName.length > elementBName.length) {
            return 1;
        }
    }
    return 0;
}


/***/ }),

/***/ 22599:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hl: function() { return /* binding */ VSDataTransfer; },
/* harmony export */   Ix: function() { return /* binding */ createFileDataTransferItem; },
/* harmony export */   SN: function() { return /* binding */ matchesMimeType; },
/* harmony export */   Z0: function() { return /* binding */ UriList; },
/* harmony export */   ZO: function() { return /* binding */ createStringDataTransferItem; }
/* harmony export */ });
/* harmony import */ var _arrays_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33899);
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64202);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80764);
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



function createStringDataTransferItem(stringOrPromise) {
    return {
        asString: () => __awaiter(this, void 0, void 0, function* () { return stringOrPromise; }),
        asFile: () => undefined,
        value: typeof stringOrPromise === 'string' ? stringOrPromise : undefined,
    };
}
function createFileDataTransferItem(fileName, uri, data) {
    const file = { id: (0,_uuid_js__WEBPACK_IMPORTED_MODULE_2__/* .generateUuid */ .R)(), name: fileName, uri, data };
    return {
        asString: () => __awaiter(this, void 0, void 0, function* () { return ''; }),
        asFile: () => file,
        value: undefined,
    };
}
class VSDataTransfer {
    constructor() {
        this._entries = new Map();
    }
    get size() {
        let size = 0;
        for (const _ of this._entries) {
            size++;
        }
        return size;
    }
    has(mimeType) {
        return this._entries.has(this.toKey(mimeType));
    }
    matches(pattern) {
        const mimes = [...this._entries.keys()];
        if (_iterator_js__WEBPACK_IMPORTED_MODULE_1__/* .Iterable */ .$.some(this, ([_, item]) => item.asFile())) {
            mimes.push('files');
        }
        return matchesMimeType_normalized(normalizeMimeType(pattern), mimes);
    }
    get(mimeType) {
        var _a;
        return (_a = this._entries.get(this.toKey(mimeType))) === null || _a === void 0 ? void 0 : _a[0];
    }
    /**
     * Add a new entry to this data transfer.
     *
     * This does not replace existing entries for `mimeType`.
     */
    append(mimeType, value) {
        const existing = this._entries.get(mimeType);
        if (existing) {
            existing.push(value);
        }
        else {
            this._entries.set(this.toKey(mimeType), [value]);
        }
    }
    /**
     * Set the entry for a given mime type.
     *
     * This replaces all existing entries for `mimeType`.
     */
    replace(mimeType, value) {
        this._entries.set(this.toKey(mimeType), [value]);
    }
    /**
     * Remove all entries for `mimeType`.
     */
    delete(mimeType) {
        this._entries.delete(this.toKey(mimeType));
    }
    /**
     * Iterate over all `[mime, item]` pairs in this data transfer.
     *
     * There may be multiple entries for each mime type.
     */
    *[Symbol.iterator]() {
        for (const [mine, items] of this._entries) {
            for (const item of items) {
                yield [mine, item];
            }
        }
    }
    toKey(mimeType) {
        return normalizeMimeType(mimeType);
    }
}
function normalizeMimeType(mimeType) {
    return mimeType.toLowerCase();
}
function matchesMimeType(pattern, mimeTypes) {
    return matchesMimeType_normalized(normalizeMimeType(pattern), mimeTypes.map(normalizeMimeType));
}
function matchesMimeType_normalized(normalizedPattern, normalizedMimeTypes) {
    // Anything wildcard
    if (normalizedPattern === '*/*') {
        return normalizedMimeTypes.length > 0;
    }
    // Exact match
    if (normalizedMimeTypes.includes(normalizedPattern)) {
        return true;
    }
    // Wildcard, such as `image/*`
    const wildcard = normalizedPattern.match(/^([a-z]+)\/([a-z]+|\*)$/i);
    if (!wildcard) {
        return false;
    }
    const [_, type, subtype] = wildcard;
    if (subtype === '*') {
        return normalizedMimeTypes.some(mime => mime.startsWith(type + '/'));
    }
    return false;
}
const UriList = Object.freeze({
    // http://amundsen.com/hypermedia/urilist/
    create: (entries) => {
        return (0,_arrays_js__WEBPACK_IMPORTED_MODULE_0__/* .distinct */ .EB)(entries.map(x => x.toString())).join('\r\n');
    },
    split: (str) => {
        return str.split('\r\n');
    },
    parse: (str) => {
        return UriList.split(str).filter(value => !value.startsWith('#'));
    }
});


/***/ }),

/***/ 18328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ memoize; }
/* harmony export */ });
function memoize(_target, key, descriptor) {
    let fnKey = null;
    let fn = null;
    if (typeof descriptor.value === 'function') {
        fnKey = 'value';
        fn = descriptor.value;
        if (fn.length !== 0) {
            console.warn('Memoize should only be used in functions with zero parameters');
        }
    }
    else if (typeof descriptor.get === 'function') {
        fnKey = 'get';
        fn = descriptor.get;
    }
    if (!fn) {
        throw new Error('not supported');
    }
    const memoizeKey = `$memoize$${key}`;
    descriptor[fnKey] = function (...args) {
        if (!this.hasOwnProperty(memoizeKey)) {
            Object.defineProperty(this, memoizeKey, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: fn.apply(this, args)
            });
        }
        return this[memoizeKey];
    };
}


/***/ })

}]);