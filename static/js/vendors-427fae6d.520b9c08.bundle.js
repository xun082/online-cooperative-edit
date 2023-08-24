"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-427fae6d"],{

/***/ 49868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DG: function() { return /* binding */ findRules; },
/* harmony export */   HD: function() { return /* binding */ isString; },
/* harmony export */   Nw: function() { return /* binding */ sanitize; },
/* harmony export */   Qy: function() { return /* binding */ stateExists; },
/* harmony export */   Tr: function() { return /* binding */ createError; },
/* harmony export */   cM: function() { return /* binding */ log; },
/* harmony export */   cS: function() { return /* binding */ empty; },
/* harmony export */   j: function() { return /* binding */ isIAction; },
/* harmony export */   kF: function() { return /* binding */ substituteMatches; },
/* harmony export */   v5: function() { return /* binding */ isFuzzyAction; },
/* harmony export */   ve: function() { return /* binding */ fixCase; }
/* harmony export */ });
/* unused harmony export isFuzzyActionArr */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isFuzzyActionArr(what) {
    return (Array.isArray(what));
}
function isFuzzyAction(what) {
    return !isFuzzyActionArr(what);
}
function isString(what) {
    return (typeof what === 'string');
}
function isIAction(what) {
    return !isString(what);
}
// Small helper functions
/**
 * Is a string null, undefined, or empty?
 */
function empty(s) {
    return (s ? false : true);
}
/**
 * Puts a string to lower case if 'ignoreCase' is set.
 */
function fixCase(lexer, str) {
    return (lexer.ignoreCase && str ? str.toLowerCase() : str);
}
/**
 * Ensures there are no bad characters in a CSS token class.
 */
function sanitize(s) {
    return s.replace(/[&<>'"_]/g, '-'); // used on all output token CSS classes
}
// Logging
/**
 * Logs a message.
 */
function log(lexer, msg) {
    console.log(`${lexer.languageId}: ${msg}`);
}
// Throwing errors
function createError(lexer, msg) {
    return new Error(`${lexer.languageId}: ${msg}`);
}
// Helper functions for rule finding and substitution
/**
 * substituteMatches is used on lexer strings and can substitutes predefined patterns:
 * 		$$  => $
 * 		$#  => id
 * 		$n  => matched entry n
 * 		@attr => contents of lexer[attr]
 *
 * See documentation for more info
 */
function substituteMatches(lexer, str, id, matches, state) {
    const re = /\$((\$)|(#)|(\d\d?)|[sS](\d\d?)|@(\w+))/g;
    let stateMatches = null;
    return str.replace(re, function (full, sub, dollar, hash, n, s, attr, ofs, total) {
        if (!empty(dollar)) {
            return '$'; // $$
        }
        if (!empty(hash)) {
            return fixCase(lexer, id); // default $#
        }
        if (!empty(n) && n < matches.length) {
            return fixCase(lexer, matches[n]); // $n
        }
        if (!empty(attr) && lexer && typeof (lexer[attr]) === 'string') {
            return lexer[attr]; //@attribute
        }
        if (stateMatches === null) { // split state on demand
            stateMatches = state.split('.');
            stateMatches.unshift(state);
        }
        if (!empty(s) && s < stateMatches.length) {
            return fixCase(lexer, stateMatches[s]); //$Sn
        }
        return '';
    });
}
/**
 * Find the tokenizer rules for a specific state (i.e. next action)
 */
function findRules(lexer, inState) {
    let state = inState;
    while (state && state.length > 0) {
        const rules = lexer.tokenizer[state];
        if (rules) {
            return rules;
        }
        const idx = state.lastIndexOf('.');
        if (idx < 0) {
            state = null; // no further parent
        }
        else {
            state = state.substr(0, idx);
        }
    }
    return null;
}
/**
 * Is a certain state defined? In contrast to 'findRules' this works on a ILexerMin.
 * This is used during compilation where we may know the defined states
 * but not yet whether the corresponding rules are correct.
 */
function stateExists(lexer, inState) {
    let state = inState;
    while (state && state.length > 0) {
        const exist = lexer.stateNames[state];
        if (exist) {
            return true;
        }
        const idx = state.lastIndexOf('.');
        if (idx < 0) {
            state = null; // no further parent
        }
        else {
            state = state.substr(0, idx);
        }
    }
    return false;
}


/***/ }),

/***/ 18441:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: function() { return /* binding */ compile; }
/* harmony export */ });
/* harmony import */ var _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49868);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/*
 * This module only exports 'compile' which compiles a JSON language definition
 * into a typed and checked ILexer definition.
 */

/*
 * Type helpers
 *
 * Note: this is just for sanity checks on the JSON description which is
 * helpful for the programmer. No checks are done anymore once the lexer is
 * already 'compiled and checked'.
 *
 */
function isArrayOf(elemType, obj) {
    if (!obj) {
        return false;
    }
    if (!(Array.isArray(obj))) {
        return false;
    }
    for (const el of obj) {
        if (!(elemType(el))) {
            return false;
        }
    }
    return true;
}
function bool(prop, defValue) {
    if (typeof prop === 'boolean') {
        return prop;
    }
    return defValue;
}
function string(prop, defValue) {
    if (typeof (prop) === 'string') {
        return prop;
    }
    return defValue;
}
function arrayToHash(array) {
    const result = {};
    for (const e of array) {
        result[e] = true;
    }
    return result;
}
function createKeywordMatcher(arr, caseInsensitive = false) {
    if (caseInsensitive) {
        arr = arr.map(function (x) { return x.toLowerCase(); });
    }
    const hash = arrayToHash(arr);
    if (caseInsensitive) {
        return function (word) {
            return hash[word.toLowerCase()] !== undefined && hash.hasOwnProperty(word.toLowerCase());
        };
    }
    else {
        return function (word) {
            return hash[word] !== undefined && hash.hasOwnProperty(word);
        };
    }
}
// Lexer helpers
/**
 * Compiles a regular expression string, adding the 'i' flag if 'ignoreCase' is set, and the 'u' flag if 'unicode' is set.
 * Also replaces @\w+ or sequences with the content of the specified attribute
 * @\w+ replacement can be avoided by escaping `@` signs with another `@` sign.
 * @example /@attr/ will be replaced with the value of lexer[attr]
 * @example /@@text/ will not be replaced and will become /@text/.
 */
function compileRegExp(lexer, str) {
    // @@ must be interpreted as a literal @, so we replace all occurences of @@ with a placeholder character
    str = str.replace(/@@/g, `\x01`);
    let n = 0;
    let hadExpansion;
    do {
        hadExpansion = false;
        str = str.replace(/@(\w+)/g, function (s, attr) {
            hadExpansion = true;
            let sub = '';
            if (typeof (lexer[attr]) === 'string') {
                sub = lexer[attr];
            }
            else if (lexer[attr] && lexer[attr] instanceof RegExp) {
                sub = lexer[attr].source;
            }
            else {
                if (lexer[attr] === undefined) {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'language definition does not contain attribute \'' + attr + '\', used at: ' + str);
                }
                else {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'attribute reference \'' + attr + '\' must be a string, used at: ' + str);
                }
            }
            return (_monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .empty */ .cS(sub) ? '' : '(?:' + sub + ')');
        });
        n++;
    } while (hadExpansion && n < 5);
    // handle escaped @@
    str = str.replace(/\x01/g, '@');
    const flags = (lexer.ignoreCase ? 'i' : '') + (lexer.unicode ? 'u' : '');
    return new RegExp(str, flags);
}
/**
 * Compiles guard functions for case matches.
 * This compiles 'cases' attributes into efficient match functions.
 *
 */
function selectScrutinee(id, matches, state, num) {
    if (num < 0) {
        return id;
    }
    if (num < matches.length) {
        return matches[num];
    }
    if (num >= 100) {
        num = num - 100;
        const parts = state.split('.');
        parts.unshift(state);
        if (num < parts.length) {
            return parts[num];
        }
    }
    return null;
}
function createGuard(lexer, ruleName, tkey, val) {
    // get the scrutinee and pattern
    let scrut = -1; // -1: $!, 0-99: $n, 100+n: $Sn
    let oppat = tkey;
    let matches = tkey.match(/^\$(([sS]?)(\d\d?)|#)(.*)$/);
    if (matches) {
        if (matches[3]) { // if digits
            scrut = parseInt(matches[3]);
            if (matches[2]) {
                scrut = scrut + 100; // if [sS] present
            }
        }
        oppat = matches[4];
    }
    // get operator
    let op = '~';
    let pat = oppat;
    if (!oppat || oppat.length === 0) {
        op = '!=';
        pat = '';
    }
    else if (/^\w*$/.test(pat)) { // just a word
        op = '==';
    }
    else {
        matches = oppat.match(/^(@|!@|~|!~|==|!=)(.*)$/);
        if (matches) {
            op = matches[1];
            pat = matches[2];
        }
    }
    // set the tester function
    let tester;
    // special case a regexp that matches just words
    if ((op === '~' || op === '!~') && /^(\w|\|)*$/.test(pat)) {
        const inWords = createKeywordMatcher(pat.split('|'), lexer.ignoreCase);
        tester = function (s) { return (op === '~' ? inWords(s) : !inWords(s)); };
    }
    else if (op === '@' || op === '!@') {
        const words = lexer[pat];
        if (!words) {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'the @ match target \'' + pat + '\' is not defined, in rule: ' + ruleName);
        }
        if (!(isArrayOf(function (elem) { return (typeof (elem) === 'string'); }, words))) {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'the @ match target \'' + pat + '\' must be an array of strings, in rule: ' + ruleName);
        }
        const inWords = createKeywordMatcher(words, lexer.ignoreCase);
        tester = function (s) { return (op === '@' ? inWords(s) : !inWords(s)); };
    }
    else if (op === '~' || op === '!~') {
        if (pat.indexOf('$') < 0) {
            // precompile regular expression
            const re = compileRegExp(lexer, '^' + pat + '$');
            tester = function (s) { return (op === '~' ? re.test(s) : !re.test(s)); };
        }
        else {
            tester = function (s, id, matches, state) {
                const re = compileRegExp(lexer, '^' + _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .substituteMatches */ .kF(lexer, pat, id, matches, state) + '$');
                return re.test(s);
            };
        }
    }
    else { // if (op==='==' || op==='!=') {
        if (pat.indexOf('$') < 0) {
            const patx = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .fixCase */ .ve(lexer, pat);
            tester = function (s) { return (op === '==' ? s === patx : s !== patx); };
        }
        else {
            const patx = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .fixCase */ .ve(lexer, pat);
            tester = function (s, id, matches, state, eos) {
                const patexp = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .substituteMatches */ .kF(lexer, patx, id, matches, state);
                return (op === '==' ? s === patexp : s !== patexp);
            };
        }
    }
    // return the branch object
    if (scrut === -1) {
        return {
            name: tkey, value: val, test: function (id, matches, state, eos) {
                return tester(id, id, matches, state, eos);
            }
        };
    }
    else {
        return {
            name: tkey, value: val, test: function (id, matches, state, eos) {
                const scrutinee = selectScrutinee(id, matches, state, scrut);
                return tester(!scrutinee ? '' : scrutinee, id, matches, state, eos);
            }
        };
    }
}
/**
 * Compiles an action: i.e. optimize regular expressions and case matches
 * and do many sanity checks.
 *
 * This is called only during compilation but if the lexer definition
 * contains user functions as actions (which is usually not allowed), then this
 * may be called during lexing. It is important therefore to compile common cases efficiently
 */
function compileAction(lexer, ruleName, action) {
    if (!action) {
        return { token: '' };
    }
    else if (typeof (action) === 'string') {
        return action; // { token: action };
    }
    else if (action.token || action.token === '') {
        if (typeof (action.token) !== 'string') {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'a \'token\' attribute must be of type string, in rule: ' + ruleName);
        }
        else {
            // only copy specific typed fields (only happens once during compile Lexer)
            const newAction = { token: action.token };
            if (action.token.indexOf('$') >= 0) {
                newAction.tokenSubst = true;
            }
            if (typeof (action.bracket) === 'string') {
                if (action.bracket === '@open') {
                    newAction.bracket = 1 /* monarchCommon.MonarchBracket.Open */;
                }
                else if (action.bracket === '@close') {
                    newAction.bracket = -1 /* monarchCommon.MonarchBracket.Close */;
                }
                else {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'a \'bracket\' attribute must be either \'@open\' or \'@close\', in rule: ' + ruleName);
                }
            }
            if (action.next) {
                if (typeof (action.next) !== 'string') {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'the next state must be a string value in rule: ' + ruleName);
                }
                else {
                    let next = action.next;
                    if (!/^(@pop|@push|@popall)$/.test(next)) {
                        if (next[0] === '@') {
                            next = next.substr(1); // peel off starting @ sign
                        }
                        if (next.indexOf('$') < 0) { // no dollar substitution, we can check if the state exists
                            if (!_monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .stateExists */ .Qy(lexer, _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .substituteMatches */ .kF(lexer, next, '', [], ''))) {
                                throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'the next state \'' + action.next + '\' is not defined in rule: ' + ruleName);
                            }
                        }
                    }
                    newAction.next = next;
                }
            }
            if (typeof (action.goBack) === 'number') {
                newAction.goBack = action.goBack;
            }
            if (typeof (action.switchTo) === 'string') {
                newAction.switchTo = action.switchTo;
            }
            if (typeof (action.log) === 'string') {
                newAction.log = action.log;
            }
            if (typeof (action.nextEmbedded) === 'string') {
                newAction.nextEmbedded = action.nextEmbedded;
                lexer.usesEmbedded = true;
            }
            return newAction;
        }
    }
    else if (Array.isArray(action)) {
        const results = [];
        for (let i = 0, len = action.length; i < len; i++) {
            results[i] = compileAction(lexer, ruleName, action[i]);
        }
        return { group: results };
    }
    else if (action.cases) {
        // build an array of test cases
        const cases = [];
        // for each case, push a test function and result value
        for (const tkey in action.cases) {
            if (action.cases.hasOwnProperty(tkey)) {
                const val = compileAction(lexer, ruleName, action.cases[tkey]);
                // what kind of case
                if (tkey === '@default' || tkey === '@' || tkey === '') {
                    cases.push({ test: undefined, value: val, name: tkey });
                }
                else if (tkey === '@eos') {
                    cases.push({ test: function (id, matches, state, eos) { return eos; }, value: val, name: tkey });
                }
                else {
                    cases.push(createGuard(lexer, ruleName, tkey, val)); // call separate function to avoid local variable capture
                }
            }
        }
        // create a matching function
        const def = lexer.defaultToken;
        return {
            test: function (id, matches, state, eos) {
                for (const _case of cases) {
                    const didmatch = (!_case.test || _case.test(id, matches, state, eos));
                    if (didmatch) {
                        return _case.value;
                    }
                }
                return def;
            }
        };
    }
    else {
        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'an action must be a string, an object with a \'token\' or \'cases\' attribute, or an array of actions; in rule: ' + ruleName);
    }
}
/**
 * Helper class for creating matching rules
 */
class Rule {
    constructor(name) {
        this.regex = new RegExp('');
        this.action = { token: '' };
        this.matchOnlyAtLineStart = false;
        this.name = '';
        this.name = name;
    }
    setRegex(lexer, re) {
        let sregex;
        if (typeof (re) === 'string') {
            sregex = re;
        }
        else if (re instanceof RegExp) {
            sregex = re.source;
        }
        else {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'rules must start with a match string or regular expression: ' + this.name);
        }
        this.matchOnlyAtLineStart = (sregex.length > 0 && sregex[0] === '^');
        this.name = this.name + ': ' + sregex;
        this.regex = compileRegExp(lexer, '^(?:' + (this.matchOnlyAtLineStart ? sregex.substr(1) : sregex) + ')');
    }
    setAction(lexer, act) {
        this.action = compileAction(lexer, this.name, act);
    }
}
/**
 * Compiles a json description function into json where all regular expressions,
 * case matches etc, are compiled and all include rules are expanded.
 * We also compile the bracket definitions, supply defaults, and do many sanity checks.
 * If the 'jsonStrict' parameter is 'false', we allow at certain locations
 * regular expression objects and functions that get called during lexing.
 * (Currently we have no samples that need this so perhaps we should always have
 * jsonStrict to true).
 */
function compile(languageId, json) {
    if (!json || typeof (json) !== 'object') {
        throw new Error('Monarch: expecting a language definition object');
    }
    // Create our lexer
    const lexer = {};
    lexer.languageId = languageId;
    lexer.includeLF = bool(json.includeLF, false);
    lexer.noThrow = false; // raise exceptions during compilation
    lexer.maxStack = 100;
    // Set standard fields: be defensive about types
    lexer.start = (typeof json.start === 'string' ? json.start : null);
    lexer.ignoreCase = bool(json.ignoreCase, false);
    lexer.unicode = bool(json.unicode, false);
    lexer.tokenPostfix = string(json.tokenPostfix, '.' + lexer.languageId);
    lexer.defaultToken = string(json.defaultToken, 'source');
    lexer.usesEmbedded = false; // becomes true if we find a nextEmbedded action
    // For calling compileAction later on
    const lexerMin = json;
    lexerMin.languageId = languageId;
    lexerMin.includeLF = lexer.includeLF;
    lexerMin.ignoreCase = lexer.ignoreCase;
    lexerMin.unicode = lexer.unicode;
    lexerMin.noThrow = lexer.noThrow;
    lexerMin.usesEmbedded = lexer.usesEmbedded;
    lexerMin.stateNames = json.tokenizer;
    lexerMin.defaultToken = lexer.defaultToken;
    // Compile an array of rules into newrules where RegExp objects are created.
    function addRules(state, newrules, rules) {
        for (const rule of rules) {
            let include = rule.include;
            if (include) {
                if (typeof (include) !== 'string') {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'an \'include\' attribute must be a string at: ' + state);
                }
                if (include[0] === '@') {
                    include = include.substr(1); // peel off starting @
                }
                if (!json.tokenizer[include]) {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'include target \'' + include + '\' is not defined at: ' + state);
                }
                addRules(state + '.' + include, newrules, json.tokenizer[include]);
            }
            else {
                const newrule = new Rule(state);
                // Set up new rule attributes
                if (Array.isArray(rule) && rule.length >= 1 && rule.length <= 3) {
                    newrule.setRegex(lexerMin, rule[0]);
                    if (rule.length >= 3) {
                        if (typeof (rule[1]) === 'string') {
                            newrule.setAction(lexerMin, { token: rule[1], next: rule[2] });
                        }
                        else if (typeof (rule[1]) === 'object') {
                            const rule1 = rule[1];
                            rule1.next = rule[2];
                            newrule.setAction(lexerMin, rule1);
                        }
                        else {
                            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'a next state as the last element of a rule can only be given if the action is either an object or a string, at: ' + state);
                        }
                    }
                    else {
                        newrule.setAction(lexerMin, rule[1]);
                    }
                }
                else {
                    if (!rule.regex) {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'a rule must either be an array, or an object with a \'regex\' or \'include\' field at: ' + state);
                    }
                    if (rule.name) {
                        if (typeof rule.name === 'string') {
                            newrule.name = rule.name;
                        }
                    }
                    if (rule.matchOnlyAtStart) {
                        newrule.matchOnlyAtLineStart = bool(rule.matchOnlyAtLineStart, false);
                    }
                    newrule.setRegex(lexerMin, rule.regex);
                    newrule.setAction(lexerMin, rule.action);
                }
                newrules.push(newrule);
            }
        }
    }
    // compile the tokenizer rules
    if (!json.tokenizer || typeof (json.tokenizer) !== 'object') {
        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'a language definition must define the \'tokenizer\' attribute as an object');
    }
    lexer.tokenizer = [];
    for (const key in json.tokenizer) {
        if (json.tokenizer.hasOwnProperty(key)) {
            if (!lexer.start) {
                lexer.start = key;
            }
            const rules = json.tokenizer[key];
            lexer.tokenizer[key] = new Array();
            addRules('tokenizer.' + key, lexer.tokenizer[key], rules);
        }
    }
    lexer.usesEmbedded = lexerMin.usesEmbedded; // can be set during compileAction
    // Set simple brackets
    if (json.brackets) {
        if (!(Array.isArray(json.brackets))) {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'the \'brackets\' attribute must be defined as an array');
        }
    }
    else {
        json.brackets = [
            { open: '{', close: '}', token: 'delimiter.curly' },
            { open: '[', close: ']', token: 'delimiter.square' },
            { open: '(', close: ')', token: 'delimiter.parenthesis' },
            { open: '<', close: '>', token: 'delimiter.angle' }
        ];
    }
    const brackets = [];
    for (const el of json.brackets) {
        let desc = el;
        if (desc && Array.isArray(desc) && desc.length === 3) {
            desc = { token: desc[2], open: desc[0], close: desc[1] };
        }
        if (desc.open === desc.close) {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'open and close brackets in a \'brackets\' attribute must be different: ' + desc.open +
                '\n hint: use the \'bracket\' attribute if matching on equal brackets is required.');
        }
        if (typeof desc.open === 'string' && typeof desc.token === 'string' && typeof desc.close === 'string') {
            brackets.push({
                token: desc.token + lexer.tokenPostfix,
                open: _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .fixCase */ .ve(lexer, desc.open),
                close: _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .fixCase */ .ve(lexer, desc.close)
            });
        }
        else {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_0__/* .createError */ .Tr(lexer, 'every element in the \'brackets\' array must be a \'{open,close,token}\' object or array');
        }
    }
    lexer.brackets = brackets;
    // Disable throw so the syntax highlighter goes, no matter what
    lexer.noThrow = true;
    return lexer;
}


/***/ }),

/***/ 60079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ MonarchTokenizer; }
/* harmony export */ });
/* harmony import */ var _common_languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34882);
/* harmony import */ var _common_languages_nullTokenize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27913);
/* harmony import */ var _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49868);
/* harmony import */ var _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99779);
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




const CACHE_STACK_DEPTH = 5;
/**
 * Reuse the same stack elements up to a certain depth.
 */
class MonarchStackElementFactory {
    static create(parent, state) {
        return this._INSTANCE.create(parent, state);
    }
    constructor(maxCacheDepth) {
        this._maxCacheDepth = maxCacheDepth;
        this._entries = Object.create(null);
    }
    create(parent, state) {
        if (parent !== null && parent.depth >= this._maxCacheDepth) {
            // no caching above a certain depth
            return new MonarchStackElement(parent, state);
        }
        let stackElementId = MonarchStackElement.getStackElementId(parent);
        if (stackElementId.length > 0) {
            stackElementId += '|';
        }
        stackElementId += state;
        let result = this._entries[stackElementId];
        if (result) {
            return result;
        }
        result = new MonarchStackElement(parent, state);
        this._entries[stackElementId] = result;
        return result;
    }
}
MonarchStackElementFactory._INSTANCE = new MonarchStackElementFactory(CACHE_STACK_DEPTH);
class MonarchStackElement {
    constructor(parent, state) {
        this.parent = parent;
        this.state = state;
        this.depth = (this.parent ? this.parent.depth : 0) + 1;
    }
    static getStackElementId(element) {
        let result = '';
        while (element !== null) {
            if (result.length > 0) {
                result += '|';
            }
            result += element.state;
            element = element.parent;
        }
        return result;
    }
    static _equals(a, b) {
        while (a !== null && b !== null) {
            if (a === b) {
                return true;
            }
            if (a.state !== b.state) {
                return false;
            }
            a = a.parent;
            b = b.parent;
        }
        if (a === null && b === null) {
            return true;
        }
        return false;
    }
    equals(other) {
        return MonarchStackElement._equals(this, other);
    }
    push(state) {
        return MonarchStackElementFactory.create(this, state);
    }
    pop() {
        return this.parent;
    }
    popall() {
        let result = this;
        while (result.parent) {
            result = result.parent;
        }
        return result;
    }
    switchTo(state) {
        return MonarchStackElementFactory.create(this.parent, state);
    }
}
class EmbeddedLanguageData {
    constructor(languageId, state) {
        this.languageId = languageId;
        this.state = state;
    }
    equals(other) {
        return (this.languageId === other.languageId
            && this.state.equals(other.state));
    }
    clone() {
        const stateClone = this.state.clone();
        // save an object
        if (stateClone === this.state) {
            return this;
        }
        return new EmbeddedLanguageData(this.languageId, this.state);
    }
}
/**
 * Reuse the same line states up to a certain depth.
 */
class MonarchLineStateFactory {
    static create(stack, embeddedLanguageData) {
        return this._INSTANCE.create(stack, embeddedLanguageData);
    }
    constructor(maxCacheDepth) {
        this._maxCacheDepth = maxCacheDepth;
        this._entries = Object.create(null);
    }
    create(stack, embeddedLanguageData) {
        if (embeddedLanguageData !== null) {
            // no caching when embedding
            return new MonarchLineState(stack, embeddedLanguageData);
        }
        if (stack !== null && stack.depth >= this._maxCacheDepth) {
            // no caching above a certain depth
            return new MonarchLineState(stack, embeddedLanguageData);
        }
        const stackElementId = MonarchStackElement.getStackElementId(stack);
        let result = this._entries[stackElementId];
        if (result) {
            return result;
        }
        result = new MonarchLineState(stack, null);
        this._entries[stackElementId] = result;
        return result;
    }
}
MonarchLineStateFactory._INSTANCE = new MonarchLineStateFactory(CACHE_STACK_DEPTH);
class MonarchLineState {
    constructor(stack, embeddedLanguageData) {
        this.stack = stack;
        this.embeddedLanguageData = embeddedLanguageData;
    }
    clone() {
        const embeddedlanguageDataClone = this.embeddedLanguageData ? this.embeddedLanguageData.clone() : null;
        // save an object
        if (embeddedlanguageDataClone === this.embeddedLanguageData) {
            return this;
        }
        return MonarchLineStateFactory.create(this.stack, this.embeddedLanguageData);
    }
    equals(other) {
        if (!(other instanceof MonarchLineState)) {
            return false;
        }
        if (!this.stack.equals(other.stack)) {
            return false;
        }
        if (this.embeddedLanguageData === null && other.embeddedLanguageData === null) {
            return true;
        }
        if (this.embeddedLanguageData === null || other.embeddedLanguageData === null) {
            return false;
        }
        return this.embeddedLanguageData.equals(other.embeddedLanguageData);
    }
}
class MonarchClassicTokensCollector {
    constructor() {
        this._tokens = [];
        this._languageId = null;
        this._lastTokenType = null;
        this._lastTokenLanguage = null;
    }
    enterLanguage(languageId) {
        this._languageId = languageId;
    }
    emit(startOffset, type) {
        if (this._lastTokenType === type && this._lastTokenLanguage === this._languageId) {
            return;
        }
        this._lastTokenType = type;
        this._lastTokenLanguage = this._languageId;
        this._tokens.push(new _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(startOffset, type, this._languageId));
    }
    nestedLanguageTokenize(embeddedLanguageLine, hasEOL, embeddedLanguageData, offsetDelta) {
        const nestedLanguageId = embeddedLanguageData.languageId;
        const embeddedModeState = embeddedLanguageData.state;
        const nestedLanguageTokenizationSupport = _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.get(nestedLanguageId);
        if (!nestedLanguageTokenizationSupport) {
            this.enterLanguage(nestedLanguageId);
            this.emit(offsetDelta, '');
            return embeddedModeState;
        }
        const nestedResult = nestedLanguageTokenizationSupport.tokenize(embeddedLanguageLine, hasEOL, embeddedModeState);
        if (offsetDelta !== 0) {
            for (const token of nestedResult.tokens) {
                this._tokens.push(new _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(token.offset + offsetDelta, token.type, token.language));
            }
        }
        else {
            this._tokens = this._tokens.concat(nestedResult.tokens);
        }
        this._lastTokenType = null;
        this._lastTokenLanguage = null;
        this._languageId = null;
        return nestedResult.endState;
    }
    finalize(endState) {
        return new _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationResult */ .hG(this._tokens, endState);
    }
}
class MonarchModernTokensCollector {
    constructor(languageService, theme) {
        this._languageService = languageService;
        this._theme = theme;
        this._prependTokens = null;
        this._tokens = [];
        this._currentLanguageId = 0 /* LanguageId.Null */;
        this._lastTokenMetadata = 0;
    }
    enterLanguage(languageId) {
        this._currentLanguageId = this._languageService.languageIdCodec.encodeLanguageId(languageId);
    }
    emit(startOffset, type) {
        const metadata = this._theme.match(this._currentLanguageId, type) | 1024 /* MetadataConsts.BALANCED_BRACKETS_MASK */;
        if (this._lastTokenMetadata === metadata) {
            return;
        }
        this._lastTokenMetadata = metadata;
        this._tokens.push(startOffset);
        this._tokens.push(metadata);
    }
    static _merge(a, b, c) {
        const aLen = (a !== null ? a.length : 0);
        const bLen = b.length;
        const cLen = (c !== null ? c.length : 0);
        if (aLen === 0 && bLen === 0 && cLen === 0) {
            return new Uint32Array(0);
        }
        if (aLen === 0 && bLen === 0) {
            return c;
        }
        if (bLen === 0 && cLen === 0) {
            return a;
        }
        const result = new Uint32Array(aLen + bLen + cLen);
        if (a !== null) {
            result.set(a);
        }
        for (let i = 0; i < bLen; i++) {
            result[aLen + i] = b[i];
        }
        if (c !== null) {
            result.set(c, aLen + bLen);
        }
        return result;
    }
    nestedLanguageTokenize(embeddedLanguageLine, hasEOL, embeddedLanguageData, offsetDelta) {
        const nestedLanguageId = embeddedLanguageData.languageId;
        const embeddedModeState = embeddedLanguageData.state;
        const nestedLanguageTokenizationSupport = _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.get(nestedLanguageId);
        if (!nestedLanguageTokenizationSupport) {
            this.enterLanguage(nestedLanguageId);
            this.emit(offsetDelta, '');
            return embeddedModeState;
        }
        const nestedResult = nestedLanguageTokenizationSupport.tokenizeEncoded(embeddedLanguageLine, hasEOL, embeddedModeState);
        if (offsetDelta !== 0) {
            for (let i = 0, len = nestedResult.tokens.length; i < len; i += 2) {
                nestedResult.tokens[i] += offsetDelta;
            }
        }
        this._prependTokens = MonarchModernTokensCollector._merge(this._prependTokens, this._tokens, nestedResult.tokens);
        this._tokens = [];
        this._currentLanguageId = 0;
        this._lastTokenMetadata = 0;
        return nestedResult.endState;
    }
    finalize(endState) {
        return new _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .EncodedTokenizationResult */ .DI(MonarchModernTokensCollector._merge(this._prependTokens, this._tokens, null), endState);
    }
}
let MonarchTokenizer = class MonarchTokenizer {
    constructor(languageService, standaloneThemeService, languageId, lexer, _configurationService) {
        this._configurationService = _configurationService;
        this._languageService = languageService;
        this._standaloneThemeService = standaloneThemeService;
        this._languageId = languageId;
        this._lexer = lexer;
        this._embeddedLanguages = Object.create(null);
        this.embeddedLoaded = Promise.resolve(undefined);
        // Set up listening for embedded modes
        let emitting = false;
        this._tokenizationRegistryListener = _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.onDidChange((e) => {
            if (emitting) {
                return;
            }
            let isOneOfMyEmbeddedModes = false;
            for (let i = 0, len = e.changedLanguages.length; i < len; i++) {
                const language = e.changedLanguages[i];
                if (this._embeddedLanguages[language]) {
                    isOneOfMyEmbeddedModes = true;
                    break;
                }
            }
            if (isOneOfMyEmbeddedModes) {
                emitting = true;
                _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.handleChange([this._languageId]);
                emitting = false;
            }
        });
        this._maxTokenizationLineLength = this._configurationService.getValue('editor.maxTokenizationLineLength', {
            overrideIdentifier: this._languageId
        });
        this._configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration('editor.maxTokenizationLineLength')) {
                this._maxTokenizationLineLength = this._configurationService.getValue('editor.maxTokenizationLineLength', {
                    overrideIdentifier: this._languageId
                });
            }
        });
    }
    dispose() {
        this._tokenizationRegistryListener.dispose();
    }
    getLoadStatus() {
        const promises = [];
        for (const nestedLanguageId in this._embeddedLanguages) {
            const tokenizationSupport = _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.get(nestedLanguageId);
            if (tokenizationSupport) {
                // The nested language is already loaded
                if (tokenizationSupport instanceof MonarchTokenizer) {
                    const nestedModeStatus = tokenizationSupport.getLoadStatus();
                    if (nestedModeStatus.loaded === false) {
                        promises.push(nestedModeStatus.promise);
                    }
                }
                continue;
            }
            if (!_common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.isResolved(nestedLanguageId)) {
                // The nested language is in the process of being loaded
                promises.push(_common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.getOrCreate(nestedLanguageId));
            }
        }
        if (promises.length === 0) {
            return {
                loaded: true
            };
        }
        return {
            loaded: false,
            promise: Promise.all(promises).then(_ => undefined)
        };
    }
    getInitialState() {
        const rootState = MonarchStackElementFactory.create(null, this._lexer.start);
        return MonarchLineStateFactory.create(rootState, null);
    }
    tokenize(line, hasEOL, lineState) {
        if (line.length >= this._maxTokenizationLineLength) {
            return (0,_common_languages_nullTokenize_js__WEBPACK_IMPORTED_MODULE_1__/* .nullTokenize */ .Ri)(this._languageId, lineState);
        }
        const tokensCollector = new MonarchClassicTokensCollector();
        const endLineState = this._tokenize(line, hasEOL, lineState, tokensCollector);
        return tokensCollector.finalize(endLineState);
    }
    tokenizeEncoded(line, hasEOL, lineState) {
        if (line.length >= this._maxTokenizationLineLength) {
            return (0,_common_languages_nullTokenize_js__WEBPACK_IMPORTED_MODULE_1__/* .nullTokenizeEncoded */ .Dy)(this._languageService.languageIdCodec.encodeLanguageId(this._languageId), lineState);
        }
        const tokensCollector = new MonarchModernTokensCollector(this._languageService, this._standaloneThemeService.getColorTheme().tokenTheme);
        const endLineState = this._tokenize(line, hasEOL, lineState, tokensCollector);
        return tokensCollector.finalize(endLineState);
    }
    _tokenize(line, hasEOL, lineState, collector) {
        if (lineState.embeddedLanguageData) {
            return this._nestedTokenize(line, hasEOL, lineState, 0, collector);
        }
        else {
            return this._myTokenize(line, hasEOL, lineState, 0, collector);
        }
    }
    _findLeavingNestedLanguageOffset(line, state) {
        let rules = this._lexer.tokenizer[state.stack.state];
        if (!rules) {
            rules = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .findRules */ .DG(this._lexer, state.stack.state); // do parent matching
            if (!rules) {
                throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'tokenizer state is not defined: ' + state.stack.state);
            }
        }
        let popOffset = -1;
        let hasEmbeddedPopRule = false;
        for (const rule of rules) {
            if (!_monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isIAction */ .j(rule.action) || rule.action.nextEmbedded !== '@pop') {
                continue;
            }
            hasEmbeddedPopRule = true;
            let regex = rule.regex;
            const regexSource = rule.regex.source;
            if (regexSource.substr(0, 4) === '^(?:' && regexSource.substr(regexSource.length - 1, 1) === ')') {
                const flags = (regex.ignoreCase ? 'i' : '') + (regex.unicode ? 'u' : '');
                regex = new RegExp(regexSource.substr(4, regexSource.length - 5), flags);
            }
            const result = line.search(regex);
            if (result === -1 || (result !== 0 && rule.matchOnlyAtLineStart)) {
                continue;
            }
            if (popOffset === -1 || result < popOffset) {
                popOffset = result;
            }
        }
        if (!hasEmbeddedPopRule) {
            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'no rule containing nextEmbedded: "@pop" in tokenizer embedded state: ' + state.stack.state);
        }
        return popOffset;
    }
    _nestedTokenize(line, hasEOL, lineState, offsetDelta, tokensCollector) {
        const popOffset = this._findLeavingNestedLanguageOffset(line, lineState);
        if (popOffset === -1) {
            // tokenization will not leave nested language
            const nestedEndState = tokensCollector.nestedLanguageTokenize(line, hasEOL, lineState.embeddedLanguageData, offsetDelta);
            return MonarchLineStateFactory.create(lineState.stack, new EmbeddedLanguageData(lineState.embeddedLanguageData.languageId, nestedEndState));
        }
        const nestedLanguageLine = line.substring(0, popOffset);
        if (nestedLanguageLine.length > 0) {
            // tokenize with the nested language
            tokensCollector.nestedLanguageTokenize(nestedLanguageLine, false, lineState.embeddedLanguageData, offsetDelta);
        }
        const restOfTheLine = line.substring(popOffset);
        return this._myTokenize(restOfTheLine, hasEOL, lineState, offsetDelta + popOffset, tokensCollector);
    }
    _safeRuleName(rule) {
        if (rule) {
            return rule.name;
        }
        return '(unknown)';
    }
    _myTokenize(lineWithoutLF, hasEOL, lineState, offsetDelta, tokensCollector) {
        tokensCollector.enterLanguage(this._languageId);
        const lineWithoutLFLength = lineWithoutLF.length;
        const line = (hasEOL && this._lexer.includeLF ? lineWithoutLF + '\n' : lineWithoutLF);
        const lineLength = line.length;
        let embeddedLanguageData = lineState.embeddedLanguageData;
        let stack = lineState.stack;
        let pos = 0;
        let groupMatching = null;
        // See https://github.com/microsoft/monaco-editor/issues/1235
        // Evaluate rules at least once for an empty line
        let forceEvaluation = true;
        while (forceEvaluation || pos < lineLength) {
            const pos0 = pos;
            const stackLen0 = stack.depth;
            const groupLen0 = groupMatching ? groupMatching.groups.length : 0;
            const state = stack.state;
            let matches = null;
            let matched = null;
            let action = null;
            let rule = null;
            let enteringEmbeddedLanguage = null;
            // check if we need to process group matches first
            if (groupMatching) {
                matches = groupMatching.matches;
                const groupEntry = groupMatching.groups.shift();
                matched = groupEntry.matched;
                action = groupEntry.action;
                rule = groupMatching.rule;
                // cleanup if necessary
                if (groupMatching.groups.length === 0) {
                    groupMatching = null;
                }
            }
            else {
                // otherwise we match on the token stream
                if (!forceEvaluation && pos >= lineLength) {
                    // nothing to do
                    break;
                }
                forceEvaluation = false;
                // get the rules for this state
                let rules = this._lexer.tokenizer[state];
                if (!rules) {
                    rules = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .findRules */ .DG(this._lexer, state); // do parent matching
                    if (!rules) {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'tokenizer state is not defined: ' + state);
                    }
                }
                // try each rule until we match
                const restOfLine = line.substr(pos);
                for (const rule of rules) {
                    if (pos === 0 || !rule.matchOnlyAtLineStart) {
                        matches = restOfLine.match(rule.regex);
                        if (matches) {
                            matched = matches[0];
                            action = rule.action;
                            break;
                        }
                    }
                }
            }
            // We matched 'rule' with 'matches' and 'action'
            if (!matches) {
                matches = [''];
                matched = '';
            }
            if (!action) {
                // bad: we didn't match anything, and there is no action to take
                // we need to advance the stream or we get progress trouble
                if (pos < lineLength) {
                    matches = [line.charAt(pos)];
                    matched = matches[0];
                }
                action = this._lexer.defaultToken;
            }
            if (matched === null) {
                // should never happen, needed for strict null checking
                break;
            }
            // advance stream
            pos += matched.length;
            // maybe call action function (used for 'cases')
            while (_monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isFuzzyAction */ .v5(action) && _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isIAction */ .j(action) && action.test) {
                action = action.test(matched, matches, state, pos === lineLength);
            }
            let result = null;
            // set the result: either a string or an array of actions
            if (typeof action === 'string' || Array.isArray(action)) {
                result = action;
            }
            else if (action.group) {
                result = action.group;
            }
            else if (action.token !== null && action.token !== undefined) {
                // do $n replacements?
                if (action.tokenSubst) {
                    result = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .substituteMatches */ .kF(this._lexer, action.token, matched, matches, state);
                }
                else {
                    result = action.token;
                }
                // enter embedded language?
                if (action.nextEmbedded) {
                    if (action.nextEmbedded === '@pop') {
                        if (!embeddedLanguageData) {
                            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'cannot pop embedded language if not inside one');
                        }
                        embeddedLanguageData = null;
                    }
                    else if (embeddedLanguageData) {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'cannot enter embedded language from within an embedded language');
                    }
                    else {
                        enteringEmbeddedLanguage = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .substituteMatches */ .kF(this._lexer, action.nextEmbedded, matched, matches, state);
                    }
                }
                // state transformations
                if (action.goBack) { // back up the stream..
                    pos = Math.max(0, pos - action.goBack);
                }
                if (action.switchTo && typeof action.switchTo === 'string') {
                    let nextState = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .substituteMatches */ .kF(this._lexer, action.switchTo, matched, matches, state); // switch state without a push...
                    if (nextState[0] === '@') {
                        nextState = nextState.substr(1); // peel off starting '@'
                    }
                    if (!_monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .findRules */ .DG(this._lexer, nextState)) {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'trying to switch to a state \'' + nextState + '\' that is undefined in rule: ' + this._safeRuleName(rule));
                    }
                    else {
                        stack = stack.switchTo(nextState);
                    }
                }
                else if (action.transform && typeof action.transform === 'function') {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'action.transform not supported');
                }
                else if (action.next) {
                    if (action.next === '@push') {
                        if (stack.depth >= this._lexer.maxStack) {
                            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'maximum tokenizer stack size reached: [' +
                                stack.state + ',' + stack.parent.state + ',...]');
                        }
                        else {
                            stack = stack.push(state);
                        }
                    }
                    else if (action.next === '@pop') {
                        if (stack.depth <= 1) {
                            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'trying to pop an empty stack in rule: ' + this._safeRuleName(rule));
                        }
                        else {
                            stack = stack.pop();
                        }
                    }
                    else if (action.next === '@popall') {
                        stack = stack.popall();
                    }
                    else {
                        let nextState = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .substituteMatches */ .kF(this._lexer, action.next, matched, matches, state);
                        if (nextState[0] === '@') {
                            nextState = nextState.substr(1); // peel off starting '@'
                        }
                        if (!_monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .findRules */ .DG(this._lexer, nextState)) {
                            throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'trying to set a next state \'' + nextState + '\' that is undefined in rule: ' + this._safeRuleName(rule));
                        }
                        else {
                            stack = stack.push(nextState);
                        }
                    }
                }
                if (action.log && typeof (action.log) === 'string') {
                    _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .log */ .cM(this._lexer, this._lexer.languageId + ': ' + _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .substituteMatches */ .kF(this._lexer, action.log, matched, matches, state));
                }
            }
            // check result
            if (result === null) {
                throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'lexer rule has no well-defined action in rule: ' + this._safeRuleName(rule));
            }
            const computeNewStateForEmbeddedLanguage = (enteringEmbeddedLanguage) => {
                // support language names, mime types, and language ids
                const languageId = (this._languageService.getLanguageIdByLanguageName(enteringEmbeddedLanguage)
                    || this._languageService.getLanguageIdByMimeType(enteringEmbeddedLanguage)
                    || enteringEmbeddedLanguage);
                const embeddedLanguageData = this._getNestedEmbeddedLanguageData(languageId);
                if (pos < lineLength) {
                    // there is content from the embedded language on this line
                    const restOfLine = lineWithoutLF.substr(pos);
                    return this._nestedTokenize(restOfLine, hasEOL, MonarchLineStateFactory.create(stack, embeddedLanguageData), offsetDelta + pos, tokensCollector);
                }
                else {
                    return MonarchLineStateFactory.create(stack, embeddedLanguageData);
                }
            };
            // is the result a group match?
            if (Array.isArray(result)) {
                if (groupMatching && groupMatching.groups.length > 0) {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'groups cannot be nested: ' + this._safeRuleName(rule));
                }
                if (matches.length !== result.length + 1) {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'matched number of groups does not match the number of actions in rule: ' + this._safeRuleName(rule));
                }
                let totalLen = 0;
                for (let i = 1; i < matches.length; i++) {
                    totalLen += matches[i].length;
                }
                if (totalLen !== matched.length) {
                    throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'with groups, all characters should be matched in consecutive groups in rule: ' + this._safeRuleName(rule));
                }
                groupMatching = {
                    rule: rule,
                    matches: matches,
                    groups: []
                };
                for (let i = 0; i < result.length; i++) {
                    groupMatching.groups[i] = {
                        action: result[i],
                        matched: matches[i + 1]
                    };
                }
                pos -= matched.length;
                // call recursively to initiate first result match
                continue;
            }
            else {
                // regular result
                // check for '@rematch'
                if (result === '@rematch') {
                    pos -= matched.length;
                    matched = ''; // better set the next state too..
                    matches = null;
                    result = '';
                    // Even though `@rematch` was specified, if `nextEmbedded` also specified,
                    // a state transition should occur.
                    if (enteringEmbeddedLanguage !== null) {
                        return computeNewStateForEmbeddedLanguage(enteringEmbeddedLanguage);
                    }
                }
                // check progress
                if (matched.length === 0) {
                    if (lineLength === 0 || stackLen0 !== stack.depth || state !== stack.state || (!groupMatching ? 0 : groupMatching.groups.length) !== groupLen0) {
                        continue;
                    }
                    else {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, 'no progress in tokenizer in rule: ' + this._safeRuleName(rule));
                    }
                }
                // return the result (and check for brace matching)
                // todo: for efficiency we could pre-sanitize tokenPostfix and substitutions
                let tokenType = null;
                if (_monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .isString */ .HD(result) && result.indexOf('@brackets') === 0) {
                    const rest = result.substr('@brackets'.length);
                    const bracket = findBracket(this._lexer, matched);
                    if (!bracket) {
                        throw _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .createError */ .Tr(this._lexer, '@brackets token returned but no bracket defined as: ' + matched);
                    }
                    tokenType = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .sanitize */ .Nw(bracket.token + rest);
                }
                else {
                    const token = (result === '' ? '' : result + this._lexer.tokenPostfix);
                    tokenType = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .sanitize */ .Nw(token);
                }
                if (pos0 < lineWithoutLFLength) {
                    tokensCollector.emit(pos0 + offsetDelta, tokenType);
                }
            }
            if (enteringEmbeddedLanguage !== null) {
                return computeNewStateForEmbeddedLanguage(enteringEmbeddedLanguage);
            }
        }
        return MonarchLineStateFactory.create(stack, embeddedLanguageData);
    }
    _getNestedEmbeddedLanguageData(languageId) {
        if (!this._languageService.isRegisteredLanguageId(languageId)) {
            return new EmbeddedLanguageData(languageId, _common_languages_nullTokenize_js__WEBPACK_IMPORTED_MODULE_1__/* .NullState */ .TJ);
        }
        if (languageId !== this._languageId) {
            // Fire language loading event
            this._languageService.requestBasicLanguageFeatures(languageId);
            _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.getOrCreate(languageId);
            this._embeddedLanguages[languageId] = true;
        }
        const tokenizationSupport = _common_languages_js__WEBPACK_IMPORTED_MODULE_0__/* .TokenizationRegistry */ .RW.get(languageId);
        if (tokenizationSupport) {
            return new EmbeddedLanguageData(languageId, tokenizationSupport.getInitialState());
        }
        return new EmbeddedLanguageData(languageId, _common_languages_nullTokenize_js__WEBPACK_IMPORTED_MODULE_1__/* .NullState */ .TJ);
    }
};
MonarchTokenizer = __decorate([
    __param(4, _platform_configuration_common_configuration_js__WEBPACK_IMPORTED_MODULE_2__/* .IConfigurationService */ .Ui)
], MonarchTokenizer);

/**
 * Searches for a bracket in the 'brackets' attribute that matches the input.
 */
function findBracket(lexer, matched) {
    if (!matched) {
        return null;
    }
    matched = _monarchCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .fixCase */ .ve(lexer, matched);
    const brackets = lexer.brackets;
    for (const bracket of brackets) {
        if (bracket.open === matched) {
            return { token: bracket.token, bracketType: 1 /* monarchCommon.MonarchBracket.Open */ };
        }
        else if (bracket.close === matched) {
            return { token: bracket.token, bracketType: -1 /* monarchCommon.MonarchBracket.Close */ };
        }
    }
    return null;
}


/***/ }),

/***/ 45251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ IStandaloneThemeService; }
/* harmony export */ });
/* harmony import */ var _platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73830);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const IStandaloneThemeService = (0,_platform_instantiation_common_instantiation_js__WEBPACK_IMPORTED_MODULE_0__/* .createDecorator */ .yh)('themeService');


/***/ }),

/***/ 97055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   YB: function() { return /* binding */ hc_black; },
/* harmony export */   gA: function() { return /* binding */ vs_dark; },
/* harmony export */   vs: function() { return /* binding */ vs; },
/* harmony export */   wQ: function() { return /* binding */ hc_light; }
/* harmony export */ });
/* harmony import */ var _common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79402);
/* harmony import */ var _platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9732);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/* -------------------------------- Begin vs theme -------------------------------- */
const vs = {
    base: 'vs',
    inherit: false,
    rules: [
        { token: '', foreground: '000000', background: 'fffffe' },
        { token: 'invalid', foreground: 'cd3131' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },
        { token: 'variable', foreground: '001188' },
        { token: 'variable.predefined', foreground: '4864AA' },
        { token: 'constant', foreground: 'dd0000' },
        { token: 'comment', foreground: '008000' },
        { token: 'number', foreground: '098658' },
        { token: 'number.hex', foreground: '3030c0' },
        { token: 'regexp', foreground: '800000' },
        { token: 'annotation', foreground: '808080' },
        { token: 'type', foreground: '008080' },
        { token: 'delimiter', foreground: '000000' },
        { token: 'delimiter.html', foreground: '383838' },
        { token: 'delimiter.xml', foreground: '0000FF' },
        { token: 'tag', foreground: '800000' },
        { token: 'tag.id.pug', foreground: '4F76AC' },
        { token: 'tag.class.pug', foreground: '4F76AC' },
        { token: 'meta.scss', foreground: '800000' },
        { token: 'metatag', foreground: 'e00000' },
        { token: 'metatag.content.html', foreground: 'FF0000' },
        { token: 'metatag.html', foreground: '808080' },
        { token: 'metatag.xml', foreground: '808080' },
        { token: 'metatag.php', fontStyle: 'bold' },
        { token: 'key', foreground: '863B00' },
        { token: 'string.key.json', foreground: 'A31515' },
        { token: 'string.value.json', foreground: '0451A5' },
        { token: 'attribute.name', foreground: 'FF0000' },
        { token: 'attribute.value', foreground: '0451A5' },
        { token: 'attribute.value.number', foreground: '098658' },
        { token: 'attribute.value.unit', foreground: '098658' },
        { token: 'attribute.value.html', foreground: '0000FF' },
        { token: 'attribute.value.xml', foreground: '0000FF' },
        { token: 'string', foreground: 'A31515' },
        { token: 'string.html', foreground: '0000FF' },
        { token: 'string.sql', foreground: 'FF0000' },
        { token: 'string.yaml', foreground: '0451A5' },
        { token: 'keyword', foreground: '0000FF' },
        { token: 'keyword.json', foreground: '0451A5' },
        { token: 'keyword.flow', foreground: 'AF00DB' },
        { token: 'keyword.flow.scss', foreground: '0000FF' },
        { token: 'operator.scss', foreground: '666666' },
        { token: 'operator.sql', foreground: '778899' },
        { token: 'operator.swift', foreground: '666666' },
        { token: 'predefined.sql', foreground: 'C700C7' },
    ],
    colors: {
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorBackground */ .cvW]: '#FFFFFE',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorForeground */ .NOs]: '#000000',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorInactiveSelection */ .ES4]: '#E5EBF1',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorIndentGuide1 */ .gS]: '#D3D3D3',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorActiveIndentGuide1 */ .qe]: '#939393',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorSelectionHighlight */ .Rzx]: '#ADD6FF4D'
    }
};
/* -------------------------------- End vs theme -------------------------------- */
/* -------------------------------- Begin vs-dark theme -------------------------------- */
const vs_dark = {
    base: 'vs-dark',
    inherit: false,
    rules: [
        { token: '', foreground: 'D4D4D4', background: '1E1E1E' },
        { token: 'invalid', foreground: 'f44747' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },
        { token: 'variable', foreground: '74B0DF' },
        { token: 'variable.predefined', foreground: '4864AA' },
        { token: 'variable.parameter', foreground: '9CDCFE' },
        { token: 'constant', foreground: '569CD6' },
        { token: 'comment', foreground: '608B4E' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'number.hex', foreground: '5BB498' },
        { token: 'regexp', foreground: 'B46695' },
        { token: 'annotation', foreground: 'cc6666' },
        { token: 'type', foreground: '3DC9B0' },
        { token: 'delimiter', foreground: 'DCDCDC' },
        { token: 'delimiter.html', foreground: '808080' },
        { token: 'delimiter.xml', foreground: '808080' },
        { token: 'tag', foreground: '569CD6' },
        { token: 'tag.id.pug', foreground: '4F76AC' },
        { token: 'tag.class.pug', foreground: '4F76AC' },
        { token: 'meta.scss', foreground: 'A79873' },
        { token: 'meta.tag', foreground: 'CE9178' },
        { token: 'metatag', foreground: 'DD6A6F' },
        { token: 'metatag.content.html', foreground: '9CDCFE' },
        { token: 'metatag.html', foreground: '569CD6' },
        { token: 'metatag.xml', foreground: '569CD6' },
        { token: 'metatag.php', fontStyle: 'bold' },
        { token: 'key', foreground: '9CDCFE' },
        { token: 'string.key.json', foreground: '9CDCFE' },
        { token: 'string.value.json', foreground: 'CE9178' },
        { token: 'attribute.name', foreground: '9CDCFE' },
        { token: 'attribute.value', foreground: 'CE9178' },
        { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
        { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
        { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'string.sql', foreground: 'FF0000' },
        { token: 'keyword', foreground: '569CD6' },
        { token: 'keyword.flow', foreground: 'C586C0' },
        { token: 'keyword.json', foreground: 'CE9178' },
        { token: 'keyword.flow.scss', foreground: '569CD6' },
        { token: 'operator.scss', foreground: '909090' },
        { token: 'operator.sql', foreground: '778899' },
        { token: 'operator.swift', foreground: '909090' },
        { token: 'predefined.sql', foreground: 'FF00FF' },
    ],
    colors: {
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorBackground */ .cvW]: '#1E1E1E',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorForeground */ .NOs]: '#D4D4D4',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorInactiveSelection */ .ES4]: '#3A3D41',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorIndentGuide1 */ .gS]: '#404040',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorActiveIndentGuide1 */ .qe]: '#707070',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorSelectionHighlight */ .Rzx]: '#ADD6FF26'
    }
};
/* -------------------------------- End vs-dark theme -------------------------------- */
/* -------------------------------- Begin hc-black theme -------------------------------- */
const hc_black = {
    base: 'hc-black',
    inherit: false,
    rules: [
        { token: '', foreground: 'FFFFFF', background: '000000' },
        { token: 'invalid', foreground: 'f44747' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },
        { token: 'variable', foreground: '1AEBFF' },
        { token: 'variable.parameter', foreground: '9CDCFE' },
        { token: 'constant', foreground: '569CD6' },
        { token: 'comment', foreground: '608B4E' },
        { token: 'number', foreground: 'FFFFFF' },
        { token: 'regexp', foreground: 'C0C0C0' },
        { token: 'annotation', foreground: '569CD6' },
        { token: 'type', foreground: '3DC9B0' },
        { token: 'delimiter', foreground: 'FFFF00' },
        { token: 'delimiter.html', foreground: 'FFFF00' },
        { token: 'tag', foreground: '569CD6' },
        { token: 'tag.id.pug', foreground: '4F76AC' },
        { token: 'tag.class.pug', foreground: '4F76AC' },
        { token: 'meta', foreground: 'D4D4D4' },
        { token: 'meta.tag', foreground: 'CE9178' },
        { token: 'metatag', foreground: '569CD6' },
        { token: 'metatag.content.html', foreground: '1AEBFF' },
        { token: 'metatag.html', foreground: '569CD6' },
        { token: 'metatag.xml', foreground: '569CD6' },
        { token: 'metatag.php', fontStyle: 'bold' },
        { token: 'key', foreground: '9CDCFE' },
        { token: 'string.key', foreground: '9CDCFE' },
        { token: 'string.value', foreground: 'CE9178' },
        { token: 'attribute.name', foreground: '569CD6' },
        { token: 'attribute.value', foreground: '3FF23F' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'string.sql', foreground: 'FF0000' },
        { token: 'keyword', foreground: '569CD6' },
        { token: 'keyword.flow', foreground: 'C586C0' },
        { token: 'operator.sql', foreground: '778899' },
        { token: 'operator.swift', foreground: '909090' },
        { token: 'predefined.sql', foreground: 'FF00FF' },
    ],
    colors: {
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorBackground */ .cvW]: '#000000',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorForeground */ .NOs]: '#FFFFFF',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorIndentGuide1 */ .gS]: '#FFFFFF',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorActiveIndentGuide1 */ .qe]: '#FFFFFF',
    }
};
/* -------------------------------- End hc-black theme -------------------------------- */
/* -------------------------------- Begin hc-light theme -------------------------------- */
const hc_light = {
    base: 'hc-light',
    inherit: false,
    rules: [
        { token: '', foreground: '292929', background: 'FFFFFF' },
        { token: 'invalid', foreground: 'B5200D' },
        { token: 'emphasis', fontStyle: 'italic' },
        { token: 'strong', fontStyle: 'bold' },
        { token: 'variable', foreground: '264F70' },
        { token: 'variable.predefined', foreground: '4864AA' },
        { token: 'constant', foreground: 'dd0000' },
        { token: 'comment', foreground: '008000' },
        { token: 'number', foreground: '098658' },
        { token: 'number.hex', foreground: '3030c0' },
        { token: 'regexp', foreground: '800000' },
        { token: 'annotation', foreground: '808080' },
        { token: 'type', foreground: '008080' },
        { token: 'delimiter', foreground: '000000' },
        { token: 'delimiter.html', foreground: '383838' },
        { token: 'tag', foreground: '800000' },
        { token: 'tag.id.pug', foreground: '4F76AC' },
        { token: 'tag.class.pug', foreground: '4F76AC' },
        { token: 'meta.scss', foreground: '800000' },
        { token: 'metatag', foreground: 'e00000' },
        { token: 'metatag.content.html', foreground: 'B5200D' },
        { token: 'metatag.html', foreground: '808080' },
        { token: 'metatag.xml', foreground: '808080' },
        { token: 'metatag.php', fontStyle: 'bold' },
        { token: 'key', foreground: '863B00' },
        { token: 'string.key.json', foreground: 'A31515' },
        { token: 'string.value.json', foreground: '0451A5' },
        { token: 'attribute.name', foreground: '264F78' },
        { token: 'attribute.value', foreground: '0451A5' },
        { token: 'string', foreground: 'A31515' },
        { token: 'string.sql', foreground: 'B5200D' },
        { token: 'keyword', foreground: '0000FF' },
        { token: 'keyword.flow', foreground: 'AF00DB' },
        { token: 'operator.sql', foreground: '778899' },
        { token: 'operator.swift', foreground: '666666' },
        { token: 'predefined.sql', foreground: 'C700C7' },
    ],
    colors: {
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorBackground */ .cvW]: '#FFFFFF',
        [_platform_theme_common_colorRegistry_js__WEBPACK_IMPORTED_MODULE_1__/* .editorForeground */ .NOs]: '#292929',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorIndentGuide1 */ .gS]: '#292929',
        [_common_core_editorColorRegistry_js__WEBPACK_IMPORTED_MODULE_0__/* .editorActiveIndentGuide1 */ .qe]: '#292929',
    }
};
/* -------------------------------- End hc-light theme -------------------------------- */


/***/ })

}]);