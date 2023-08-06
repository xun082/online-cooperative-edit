"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3514b192"],{

/***/ 1585:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wi: function() { return /* binding */ ActionRunner; },
/* harmony export */   Z0: function() { return /* binding */ Separator; },
/* harmony export */   aU: function() { return /* binding */ Action; },
/* harmony export */   eZ: function() { return /* binding */ EmptySubmenuAction; },
/* harmony export */   wY: function() { return /* binding */ SubmenuAction; },
/* harmony export */   xw: function() { return /* binding */ toAction; }
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96290);
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79027);
/* harmony import */ var _nls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23330);
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



class Action extends _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor(id, label = '', cssClass = '', enabled = true, actionCallback) {
        super();
        this._onDidChange = this._register(new _event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onDidChange = this._onDidChange.event;
        this._enabled = true;
        this._id = id;
        this._label = label;
        this._cssClass = cssClass;
        this._enabled = enabled;
        this._actionCallback = actionCallback;
    }
    get id() {
        return this._id;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._setLabel(value);
    }
    _setLabel(value) {
        if (this._label !== value) {
            this._label = value;
            this._onDidChange.fire({ label: value });
        }
    }
    get tooltip() {
        return this._tooltip || '';
    }
    set tooltip(value) {
        this._setTooltip(value);
    }
    _setTooltip(value) {
        if (this._tooltip !== value) {
            this._tooltip = value;
            this._onDidChange.fire({ tooltip: value });
        }
    }
    get class() {
        return this._cssClass;
    }
    set class(value) {
        this._setClass(value);
    }
    _setClass(value) {
        if (this._cssClass !== value) {
            this._cssClass = value;
            this._onDidChange.fire({ class: value });
        }
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._setEnabled(value);
    }
    _setEnabled(value) {
        if (this._enabled !== value) {
            this._enabled = value;
            this._onDidChange.fire({ enabled: value });
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._setChecked(value);
    }
    _setChecked(value) {
        if (this._checked !== value) {
            this._checked = value;
            this._onDidChange.fire({ checked: value });
        }
    }
    run(event, data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._actionCallback) {
                yield this._actionCallback(event);
            }
        });
    }
}
class ActionRunner extends _lifecycle_js__WEBPACK_IMPORTED_MODULE_1__/* .Disposable */ .JT {
    constructor() {
        super(...arguments);
        this._onWillRun = this._register(new _event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onWillRun = this._onWillRun.event;
        this._onDidRun = this._register(new _event_js__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5());
        this.onDidRun = this._onDidRun.event;
    }
    run(action, context) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!action.enabled) {
                return;
            }
            this._onWillRun.fire({ action });
            let error = undefined;
            try {
                yield this.runAction(action, context);
            }
            catch (e) {
                error = e;
            }
            this._onDidRun.fire({ action, error });
        });
    }
    runAction(action, context) {
        return __awaiter(this, void 0, void 0, function* () {
            yield action.run(context);
        });
    }
}
class Separator {
    constructor() {
        this.id = Separator.ID;
        this.label = '';
        this.tooltip = '';
        this.class = 'separator';
        this.enabled = false;
        this.checked = false;
    }
    /**
     * Joins all non-empty lists of actions with separators.
     */
    static join(...actionLists) {
        let out = [];
        for (const list of actionLists) {
            if (!list.length) {
                // skip
            }
            else if (out.length) {
                out = [...out, new Separator(), ...list];
            }
            else {
                out = list;
            }
        }
        return out;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
Separator.ID = 'vs.actions.separator';
class SubmenuAction {
    get actions() { return this._actions; }
    constructor(id, label, actions, cssClass) {
        this.tooltip = '';
        this.enabled = true;
        this.checked = undefined;
        this.id = id;
        this.label = label;
        this.class = cssClass;
        this._actions = actions;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
class EmptySubmenuAction extends Action {
    constructor() {
        super(EmptySubmenuAction.ID, _nls_js__WEBPACK_IMPORTED_MODULE_2__/* .localize */ .NC('submenu.empty', '(empty)'), undefined, false);
    }
}
EmptySubmenuAction.ID = 'vs.actions.empty';
function toAction(props) {
    var _a, _b;
    return {
        id: props.id,
        label: props.label,
        class: undefined,
        enabled: (_a = props.enabled) !== null && _a !== void 0 ? _a : true,
        checked: (_b = props.checked) !== null && _b !== void 0 ? _b : false,
        run: () => __awaiter(this, void 0, void 0, function* () { return props.run(); }),
        tooltip: props.label
    };
}


/***/ }),

/***/ 33899:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dc: function() { return /* binding */ findMaxBy; },
/* harmony export */   EB: function() { return /* binding */ distinct; },
/* harmony export */   Gb: function() { return /* binding */ tail; },
/* harmony export */   H9: function() { return /* binding */ ArrayQueue; },
/* harmony export */   HW: function() { return /* binding */ quickSelect; },
/* harmony export */   JH: function() { return /* binding */ tail2; },
/* harmony export */   LS: function() { return /* binding */ removeFastWithoutKeepingOrder; },
/* harmony export */   Of: function() { return /* binding */ isNonEmptyArray; },
/* harmony export */   Rs: function() { return /* binding */ coalesceInPlace; },
/* harmony export */   VJ: function() { return /* binding */ findMinBy; },
/* harmony export */   W$: function() { return /* binding */ CallbackIterable; },
/* harmony export */   XY: function() { return /* binding */ isFalsyOrEmpty; },
/* harmony export */   Xh: function() { return /* binding */ firstOrDefault; },
/* harmony export */   Zv: function() { return /* binding */ arrayInsert; },
/* harmony export */   _2: function() { return /* binding */ asArray; },
/* harmony export */   al: function() { return /* binding */ pushToEnd; },
/* harmony export */   bX: function() { return /* binding */ mapFind; },
/* harmony export */   dF: function() { return /* binding */ findLast; },
/* harmony export */   db: function() { return /* binding */ splice; },
/* harmony export */   fS: function() { return /* binding */ equals; },
/* harmony export */   fv: function() { return /* binding */ numberComparator; },
/* harmony export */   jV: function() { return /* binding */ findLastMaxBy; },
/* harmony export */   kX: function() { return /* binding */ coalesce; },
/* harmony export */   lG: function() { return /* binding */ findFirstInSorted; },
/* harmony export */   ry: function() { return /* binding */ binarySearch; },
/* harmony export */   tT: function() { return /* binding */ compareBy; },
/* harmony export */   vA: function() { return /* binding */ pushMany; },
/* harmony export */   vM: function() { return /* binding */ groupBy; },
/* harmony export */   w6: function() { return /* binding */ range; },
/* harmony export */   zI: function() { return /* binding */ pushToStart; }
/* harmony export */ });
/* unused harmony exports binarySearch2, lastIndex, insertInto, CompareResult */
/**
 * Returns the last element of an array.
 * @param array The array.
 * @param n Which element from the end (default is zero).
 */
function tail(array, n = 0) {
    return array[array.length - (1 + n)];
}
function tail2(arr) {
    if (arr.length === 0) {
        throw new Error('Invalid tail call');
    }
    return [arr.slice(0, arr.length - 1), arr[arr.length - 1]];
}
function equals(one, other, itemEquals = (a, b) => a === b) {
    if (one === other) {
        return true;
    }
    if (!one || !other) {
        return false;
    }
    if (one.length !== other.length) {
        return false;
    }
    for (let i = 0, len = one.length; i < len; i++) {
        if (!itemEquals(one[i], other[i])) {
            return false;
        }
    }
    return true;
}
/**
 * Remove the element at `index` by replacing it with the last element. This is faster than `splice`
 * but changes the order of the array
 */
function removeFastWithoutKeepingOrder(array, index) {
    const last = array.length - 1;
    if (index < last) {
        array[index] = array[last];
    }
    array.pop();
}
/**
 * Performs a binary search algorithm over a sorted array.
 *
 * @param array The array being searched.
 * @param key The value we search for.
 * @param comparator A function that takes two array elements and returns zero
 *   if they are equal, a negative number if the first element precedes the
 *   second one in the sorting order, or a positive number if the second element
 *   precedes the first one.
 * @return See {@link binarySearch2}
 */
function binarySearch(array, key, comparator) {
    return binarySearch2(array.length, i => comparator(array[i], key));
}
/**
 * Performs a binary search algorithm over a sorted collection. Useful for cases
 * when we need to perform a binary search over something that isn't actually an
 * array, and converting data to an array would defeat the use of binary search
 * in the first place.
 *
 * @param length The collection length.
 * @param compareToKey A function that takes an index of an element in the
 *   collection and returns zero if the value at this index is equal to the
 *   search key, a negative number if the value precedes the search key in the
 *   sorting order, or a positive number if the search key precedes the value.
 * @return A non-negative index of an element, if found. If not found, the
 *   result is -(n+1) (or ~n, using bitwise notation), where n is the index
 *   where the key should be inserted to maintain the sorting order.
 */
function binarySearch2(length, compareToKey) {
    let low = 0, high = length - 1;
    while (low <= high) {
        const mid = ((low + high) / 2) | 0;
        const comp = compareToKey(mid);
        if (comp < 0) {
            low = mid + 1;
        }
        else if (comp > 0) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -(low + 1);
}
/**
 * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
 * are located before all elements where p(x) is true.
 * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
 */
function findFirstInSorted(array, p) {
    let low = 0, high = array.length;
    if (high === 0) {
        return 0; // no children
    }
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (p(array[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return low;
}
function quickSelect(nth, data, compare) {
    nth = nth | 0;
    if (nth >= data.length) {
        throw new TypeError('invalid index');
    }
    const pivotValue = data[Math.floor(data.length * Math.random())];
    const lower = [];
    const higher = [];
    const pivots = [];
    for (const value of data) {
        const val = compare(value, pivotValue);
        if (val < 0) {
            lower.push(value);
        }
        else if (val > 0) {
            higher.push(value);
        }
        else {
            pivots.push(value);
        }
    }
    if (nth < lower.length) {
        return quickSelect(nth, lower, compare);
    }
    else if (nth < lower.length + pivots.length) {
        return pivots[0];
    }
    else {
        return quickSelect(nth - (lower.length + pivots.length), higher, compare);
    }
}
function groupBy(data, compare) {
    const result = [];
    let currentGroup = undefined;
    for (const element of data.slice(0).sort(compare)) {
        if (!currentGroup || compare(currentGroup[0], element) !== 0) {
            currentGroup = [element];
            result.push(currentGroup);
        }
        else {
            currentGroup.push(element);
        }
    }
    return result;
}
/**
 * @returns New array with all falsy values removed. The original array IS NOT modified.
 */
function coalesce(array) {
    return array.filter(e => !!e);
}
/**
 * Remove all falsy values from `array`. The original array IS modified.
 */
function coalesceInPlace(array) {
    let to = 0;
    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
            array[to] = array[i];
            to += 1;
        }
    }
    array.length = to;
}
/**
 * @returns false if the provided object is an array and not empty.
 */
function isFalsyOrEmpty(obj) {
    return !Array.isArray(obj) || obj.length === 0;
}
function isNonEmptyArray(obj) {
    return Array.isArray(obj) && obj.length > 0;
}
/**
 * Removes duplicates from the given array. The optional keyFn allows to specify
 * how elements are checked for equality by returning an alternate value for each.
 */
function distinct(array, keyFn = value => value) {
    const seen = new Set();
    return array.filter(element => {
        const key = keyFn(element);
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}
function findLast(arr, predicate) {
    const idx = lastIndex(arr, predicate);
    if (idx === -1) {
        return undefined;
    }
    return arr[idx];
}
function lastIndex(array, fn) {
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        if (fn(element)) {
            return i;
        }
    }
    return -1;
}
function firstOrDefault(array, notFoundValue) {
    return array.length > 0 ? array[0] : notFoundValue;
}
function range(arg, to) {
    let from = typeof to === 'number' ? arg : 0;
    if (typeof to === 'number') {
        from = arg;
    }
    else {
        from = 0;
        to = arg;
    }
    const result = [];
    if (from <= to) {
        for (let i = from; i < to; i++) {
            result.push(i);
        }
    }
    else {
        for (let i = from; i > to; i--) {
            result.push(i);
        }
    }
    return result;
}
/**
 * Insert `insertArr` inside `target` at `insertIndex`.
 * Please don't touch unless you understand https://jsperf.com/inserting-an-array-within-an-array
 */
function arrayInsert(target, insertIndex, insertArr) {
    const before = target.slice(0, insertIndex);
    const after = target.slice(insertIndex);
    return before.concat(insertArr, after);
}
/**
 * Pushes an element to the start of the array, if found.
 */
function pushToStart(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.unshift(value);
    }
}
/**
 * Pushes an element to the end of the array, if found.
 */
function pushToEnd(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
        arr.push(value);
    }
}
function pushMany(arr, items) {
    for (const item of items) {
        arr.push(item);
    }
}
function asArray(x) {
    return Array.isArray(x) ? x : [x];
}
/**
 * Returns the first mapped value of the array which is not undefined.
 */
function mapFind(array, mapFn) {
    for (const value of array) {
        const mapped = mapFn(value);
        if (mapped !== undefined) {
            return mapped;
        }
    }
    return undefined;
}
/**
 * Insert the new items in the array.
 * @param array The original array.
 * @param start The zero-based location in the array from which to start inserting elements.
 * @param newItems The items to be inserted
 */
function insertInto(array, start, newItems) {
    const startIdx = getActualStartIndex(array, start);
    const originalLength = array.length;
    const newItemsLength = newItems.length;
    array.length = originalLength + newItemsLength;
    // Move the items after the start index, start from the end so that we don't overwrite any value.
    for (let i = originalLength - 1; i >= startIdx; i--) {
        array[i + newItemsLength] = array[i];
    }
    for (let i = 0; i < newItemsLength; i++) {
        array[i + startIdx] = newItems[i];
    }
}
/**
 * Removes elements from an array and inserts new elements in their place, returning the deleted elements. Alternative to the native Array.splice method, it
 * can only support limited number of items due to the maximum call stack size limit.
 * @param array The original array.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @returns An array containing the elements that were deleted.
 */
function splice(array, start, deleteCount, newItems) {
    const index = getActualStartIndex(array, start);
    const result = array.splice(index, deleteCount);
    insertInto(array, index, newItems);
    return result;
}
/**
 * Determine the actual start index (same logic as the native splice() or slice())
 * If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
 * If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -n is the index of the nth last element, and is therefore equivalent to the index of array.length - n.) If array.length + start is less than 0, it will begin from index 0.
 * @param array The target array.
 * @param start The operation index.
 */
function getActualStartIndex(array, start) {
    return start < 0 ? Math.max(start + array.length, 0) : Math.min(start, array.length);
}
var CompareResult;
(function (CompareResult) {
    function isLessThan(result) {
        return result < 0;
    }
    CompareResult.isLessThan = isLessThan;
    function isGreaterThan(result) {
        return result > 0;
    }
    CompareResult.isGreaterThan = isGreaterThan;
    function isNeitherLessOrGreaterThan(result) {
        return result === 0;
    }
    CompareResult.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
    CompareResult.greaterThan = 1;
    CompareResult.lessThan = -1;
    CompareResult.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(selector, comparator) {
    return (a, b) => comparator(selector(a), selector(b));
}
/**
 * The natural order on numbers.
*/
const numberComparator = (a, b) => a - b;
/**
 * Returns the first item that is equal to or greater than every other item.
*/
function findMaxBy(items, comparator) {
    if (items.length === 0) {
        return undefined;
    }
    let max = items[0];
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        if (comparator(item, max) > 0) {
            max = item;
        }
    }
    return max;
}
/**
 * Returns the last item that is equal to or greater than every other item.
*/
function findLastMaxBy(items, comparator) {
    if (items.length === 0) {
        return undefined;
    }
    let max = items[0];
    for (let i = 1; i < items.length; i++) {
        const item = items[i];
        if (comparator(item, max) >= 0) {
            max = item;
        }
    }
    return max;
}
/**
 * Returns the first item that is equal to or less than every other item.
*/
function findMinBy(items, comparator) {
    return findMaxBy(items, (a, b) => -comparator(a, b));
}
class ArrayQueue {
    /**
     * Constructs a queue that is backed by the given array. Runtime is O(1).
    */
    constructor(items) {
        this.items = items;
        this.firstIdx = 0;
        this.lastIdx = this.items.length - 1;
    }
    get length() {
        return this.lastIdx - this.firstIdx + 1;
    }
    /**
     * Consumes elements from the beginning of the queue as long as the predicate returns true.
     * If no elements were consumed, `null` is returned. Has a runtime of O(result.length).
    */
    takeWhile(predicate) {
        // P(k) := k <= this.lastIdx && predicate(this.items[k])
        // Find s := min { k | k >= this.firstIdx && !P(k) } and return this.data[this.firstIdx...s)
        let startIdx = this.firstIdx;
        while (startIdx < this.items.length && predicate(this.items[startIdx])) {
            startIdx++;
        }
        const result = startIdx === this.firstIdx ? null : this.items.slice(this.firstIdx, startIdx);
        this.firstIdx = startIdx;
        return result;
    }
    /**
     * Consumes elements from the end of the queue as long as the predicate returns true.
     * If no elements were consumed, `null` is returned.
     * The result has the same order as the underlying array!
    */
    takeFromEndWhile(predicate) {
        // P(k) := this.firstIdx >= k && predicate(this.items[k])
        // Find s := max { k | k <= this.lastIdx && !P(k) } and return this.data(s...this.lastIdx]
        let endIdx = this.lastIdx;
        while (endIdx >= 0 && predicate(this.items[endIdx])) {
            endIdx--;
        }
        const result = endIdx === this.lastIdx ? null : this.items.slice(endIdx + 1, this.lastIdx + 1);
        this.lastIdx = endIdx;
        return result;
    }
    peek() {
        if (this.length === 0) {
            return undefined;
        }
        return this.items[this.firstIdx];
    }
    dequeue() {
        const result = this.items[this.firstIdx];
        this.firstIdx++;
        return result;
    }
    takeCount(count) {
        const result = this.items.slice(this.firstIdx, this.firstIdx + count);
        this.firstIdx += count;
        return result;
    }
}
/**
 * This class is faster than an iterator and array for lazy computed data.
*/
class CallbackIterable {
    constructor(
    /**
     * Calls the callback for every item.
     * Stops when the callback returns false.
    */
    iterate) {
        this.iterate = iterate;
    }
    toArray() {
        const result = [];
        this.iterate(item => { result.push(item); return true; });
        return result;
    }
    filter(predicate) {
        return new CallbackIterable(cb => this.iterate(item => predicate(item) ? cb(item) : true));
    }
    map(mapFn) {
        return new CallbackIterable(cb => this.iterate(item => cb(mapFn(item))));
    }
    findLast(predicate) {
        let result;
        this.iterate(item => {
            if (predicate(item)) {
                result = item;
            }
            return true;
        });
        return result;
    }
    findLastMaxBy(comparator) {
        let result;
        let first = true;
        this.iterate(item => {
            if (first || CompareResult.isGreaterThan(comparator(item, result))) {
                first = false;
                result = item;
            }
            return true;
        });
        return result;
    }
}
CallbackIterable.empty = new CallbackIterable(_callback => { });


/***/ }),

/***/ 29012:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DM: function() { return /* binding */ checkAdjacentItems; },
/* harmony export */   eZ: function() { return /* binding */ assertFn; },
/* harmony export */   ok: function() { return /* binding */ ok; },
/* harmony export */   vE: function() { return /* binding */ assertNever; }
/* harmony export */ });
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Throws an error with the provided message if the provided value does not evaluate to a true Javascript value.
 *
 * @deprecated Use `assert(...)` instead.
 * This method is usually used like this:
 * ```ts
 * import * as assert from 'vs/base/common/assert';
 * assert.ok(...);
 * ```
 *
 * However, `assert` in that example is a user chosen name.
 * There is no tooling for generating such an import statement.
 * Thus, the `assert(...)` function should be used instead.
 */
function ok(value, message) {
    if (!value) {
        throw new Error(message ? `Assertion failed (${message})` : 'Assertion Failed');
    }
}
function assertNever(value, message = 'Unreachable') {
    throw new Error(message);
}
/**
 * condition must be side-effect free!
 */
function assertFn(condition) {
    if (!condition()) {
        // eslint-disable-next-line no-debugger
        debugger;
        // Reevaluate `condition` again to make debugging easier
        condition();
        (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .onUnexpectedError */ .dL)(new _errors_js__WEBPACK_IMPORTED_MODULE_0__/* .BugIndicatingError */ .he('Assertion Failed'));
    }
}
function checkAdjacentItems(items, predicate) {
    let i = 0;
    while (i < items.length - 1) {
        const a = items[i];
        const b = items[i + 1];
        if (!predicate(a, b)) {
            return false;
        }
        i++;
    }
    return true;
}


/***/ }),

/***/ 72432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aq: function() { return /* binding */ AsyncIterableObject; },
/* harmony export */   CR: function() { return /* binding */ DeferredPromise; },
/* harmony export */   J8: function() { return /* binding */ isThenable; },
/* harmony export */   PG: function() { return /* binding */ createCancelablePromise; },
/* harmony export */   Ps: function() { return /* binding */ first; },
/* harmony export */   To: function() { return /* binding */ runWhenIdle; },
/* harmony export */   Ue: function() { return /* binding */ IdleValue; },
/* harmony export */   Vg: function() { return /* binding */ disposableTimeout; },
/* harmony export */   Vs: function() { return /* binding */ timeout; },
/* harmony export */   _F: function() { return /* binding */ TimeoutTimer; },
/* harmony export */   eP: function() { return /* binding */ raceCancellation; },
/* harmony export */   jT: function() { return /* binding */ Promises; },
/* harmony export */   pY: function() { return /* binding */ RunOnceScheduler; },
/* harmony export */   rH: function() { return /* binding */ ThrottledDelayer; },
/* harmony export */   vp: function() { return /* binding */ Delayer; },
/* harmony export */   zS: function() { return /* binding */ createCancelableAsyncIterable; },
/* harmony export */   zh: function() { return /* binding */ IntervalTimer; }
/* harmony export */ });
/* unused harmony exports Throttler, CancelableAsyncIterableObject */
/* harmony import */ var _cancellation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29811);
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50847);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96290);
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79027);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94057);
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8130);
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
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};






function isThenable(obj) {
    return !!obj && typeof obj.then === 'function';
}
function createCancelablePromise(callback) {
    const source = new _cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationTokenSource */ .A();
    const thenable = callback(source.token);
    const promise = new Promise((resolve, reject) => {
        const subscription = source.token.onCancellationRequested(() => {
            subscription.dispose();
            source.dispose();
            reject(new _errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
        });
        Promise.resolve(thenable).then(value => {
            subscription.dispose();
            source.dispose();
            resolve(value);
        }, err => {
            subscription.dispose();
            source.dispose();
            reject(err);
        });
    });
    return new class {
        cancel() {
            source.cancel();
        }
        then(resolve, reject) {
            return promise.then(resolve, reject);
        }
        catch(reject) {
            return this.then(undefined, reject);
        }
        finally(onfinally) {
            return promise.finally(onfinally);
        }
    };
}
function raceCancellation(promise, token, defaultValue) {
    return new Promise((resolve, reject) => {
        const ref = token.onCancellationRequested(() => {
            ref.dispose();
            resolve(defaultValue);
        });
        promise.then(resolve, reject).finally(() => ref.dispose());
    });
}
/**
 * A helper to prevent accumulation of sequential async tasks.
 *
 * Imagine a mail man with the sole task of delivering letters. As soon as
 * a letter submitted for delivery, he drives to the destination, delivers it
 * and returns to his base. Imagine that during the trip, N more letters were submitted.
 * When the mail man returns, he picks those N letters and delivers them all in a
 * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
 *
 * The throttler implements this via the queue() method, by providing it a task
 * factory. Following the example:
 *
 * 		const throttler = new Throttler();
 * 		const letters = [];
 *
 * 		function deliver() {
 * 			const lettersToDeliver = letters;
 * 			letters = [];
 * 			return makeTheTrip(lettersToDeliver);
 * 		}
 *
 * 		function onLetterReceived(l) {
 * 			letters.push(l);
 * 			throttler.queue(deliver);
 * 		}
 */
class Throttler {
    constructor() {
        this.activePromise = null;
        this.queuedPromise = null;
        this.queuedPromiseFactory = null;
    }
    queue(promiseFactory) {
        if (this.activePromise) {
            this.queuedPromiseFactory = promiseFactory;
            if (!this.queuedPromise) {
                const onComplete = () => {
                    this.queuedPromise = null;
                    const result = this.queue(this.queuedPromiseFactory);
                    this.queuedPromiseFactory = null;
                    return result;
                };
                this.queuedPromise = new Promise(resolve => {
                    this.activePromise.then(onComplete, onComplete).then(resolve);
                });
            }
            return new Promise((resolve, reject) => {
                this.queuedPromise.then(resolve, reject);
            });
        }
        this.activePromise = promiseFactory();
        return new Promise((resolve, reject) => {
            this.activePromise.then((result) => {
                this.activePromise = null;
                resolve(result);
            }, (err) => {
                this.activePromise = null;
                reject(err);
            });
        });
    }
}
const timeoutDeferred = (timeout, fn) => {
    let scheduled = true;
    const handle = setTimeout(() => {
        scheduled = false;
        fn();
    }, timeout);
    return {
        isTriggered: () => scheduled,
        dispose: () => {
            clearTimeout(handle);
            scheduled = false;
        },
    };
};
const microtaskDeferred = (fn) => {
    let scheduled = true;
    queueMicrotask(() => {
        if (scheduled) {
            scheduled = false;
            fn();
        }
    });
    return {
        isTriggered: () => scheduled,
        dispose: () => { scheduled = false; },
    };
};
/**
 * A helper to delay (debounce) execution of a task that is being requested often.
 *
 * Following the throttler, now imagine the mail man wants to optimize the number of
 * trips proactively. The trip itself can be long, so he decides not to make the trip
 * as soon as a letter is submitted. Instead he waits a while, in case more
 * letters are submitted. After said waiting period, if no letters were submitted, he
 * decides to make the trip. Imagine that N more letters were submitted after the first
 * one, all within a short period of time between each other. Even though N+1
 * submissions occurred, only 1 delivery was made.
 *
 * The delayer offers this behavior via the trigger() method, into which both the task
 * to be executed and the waiting period (delay) must be passed in as arguments. Following
 * the example:
 *
 * 		const delayer = new Delayer(WAITING_PERIOD);
 * 		const letters = [];
 *
 * 		function letterReceived(l) {
 * 			letters.push(l);
 * 			delayer.trigger(() => { return makeTheTrip(); });
 * 		}
 */
class Delayer {
    constructor(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.deferred = null;
        this.completionPromise = null;
        this.doResolve = null;
        this.doReject = null;
        this.task = null;
    }
    trigger(task, delay = this.defaultDelay) {
        this.task = task;
        this.cancelTimeout();
        if (!this.completionPromise) {
            this.completionPromise = new Promise((resolve, reject) => {
                this.doResolve = resolve;
                this.doReject = reject;
            }).then(() => {
                this.completionPromise = null;
                this.doResolve = null;
                if (this.task) {
                    const task = this.task;
                    this.task = null;
                    return task();
                }
                return undefined;
            });
        }
        const fn = () => {
            var _a;
            this.deferred = null;
            (_a = this.doResolve) === null || _a === void 0 ? void 0 : _a.call(this, null);
        };
        this.deferred = delay === _symbols_js__WEBPACK_IMPORTED_MODULE_5__/* .MicrotaskDelay */ .n ? microtaskDeferred(fn) : timeoutDeferred(delay, fn);
        return this.completionPromise;
    }
    isTriggered() {
        var _a;
        return !!((_a = this.deferred) === null || _a === void 0 ? void 0 : _a.isTriggered());
    }
    cancel() {
        var _a;
        this.cancelTimeout();
        if (this.completionPromise) {
            (_a = this.doReject) === null || _a === void 0 ? void 0 : _a.call(this, new _errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
            this.completionPromise = null;
        }
    }
    cancelTimeout() {
        var _a;
        (_a = this.deferred) === null || _a === void 0 ? void 0 : _a.dispose();
        this.deferred = null;
    }
    dispose() {
        this.cancel();
    }
}
/**
 * A helper to delay execution of a task that is being requested often, while
 * preventing accumulation of consecutive executions, while the task runs.
 *
 * The mail man is clever and waits for a certain amount of time, before going
 * out to deliver letters. While the mail man is going out, more letters arrive
 * and can only be delivered once he is back. Once he is back the mail man will
 * do one more trip to deliver the letters that have accumulated while he was out.
 */
class ThrottledDelayer {
    constructor(defaultDelay) {
        this.delayer = new Delayer(defaultDelay);
        this.throttler = new Throttler();
    }
    trigger(promiseFactory, delay) {
        return this.delayer.trigger(() => this.throttler.queue(promiseFactory), delay);
    }
    cancel() {
        this.delayer.cancel();
    }
    dispose() {
        this.delayer.dispose();
    }
}
function timeout(millis, token) {
    if (!token) {
        return createCancelablePromise(token => timeout(millis, token));
    }
    return new Promise((resolve, reject) => {
        const handle = setTimeout(() => {
            disposable.dispose();
            resolve();
        }, millis);
        const disposable = token.onCancellationRequested(() => {
            clearTimeout(handle);
            disposable.dispose();
            reject(new _errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
        });
    });
}
function disposableTimeout(handler, timeout = 0) {
    const timer = setTimeout(handler, timeout);
    return (0,_lifecycle_js__WEBPACK_IMPORTED_MODULE_3__/* .toDisposable */ .OF)(() => clearTimeout(timer));
}
function first(promiseFactories, shouldStop = t => !!t, defaultValue = null) {
    let index = 0;
    const len = promiseFactories.length;
    const loop = () => {
        if (index >= len) {
            return Promise.resolve(defaultValue);
        }
        const factory = promiseFactories[index++];
        const promise = Promise.resolve(factory());
        return promise.then(result => {
            if (shouldStop(result)) {
                return Promise.resolve(result);
            }
            return loop();
        });
    };
    return loop();
}
class TimeoutTimer {
    constructor(runner, timeout) {
        this._token = -1;
        if (typeof runner === 'function' && typeof timeout === 'number') {
            this.setIfNotSet(runner, timeout);
        }
    }
    dispose() {
        this.cancel();
    }
    cancel() {
        if (this._token !== -1) {
            clearTimeout(this._token);
            this._token = -1;
        }
    }
    cancelAndSet(runner, timeout) {
        this.cancel();
        this._token = setTimeout(() => {
            this._token = -1;
            runner();
        }, timeout);
    }
    setIfNotSet(runner, timeout) {
        if (this._token !== -1) {
            // timer is already set
            return;
        }
        this._token = setTimeout(() => {
            this._token = -1;
            runner();
        }, timeout);
    }
}
class IntervalTimer {
    constructor() {
        this._token = -1;
    }
    dispose() {
        this.cancel();
    }
    cancel() {
        if (this._token !== -1) {
            clearInterval(this._token);
            this._token = -1;
        }
    }
    cancelAndSet(runner, interval) {
        this.cancel();
        this._token = setInterval(() => {
            runner();
        }, interval);
    }
}
class RunOnceScheduler {
    constructor(runner, delay) {
        this.timeoutToken = -1;
        this.runner = runner;
        this.timeout = delay;
        this.timeoutHandler = this.onTimeout.bind(this);
    }
    /**
     * Dispose RunOnceScheduler
     */
    dispose() {
        this.cancel();
        this.runner = null;
    }
    /**
     * Cancel current scheduled runner (if any).
     */
    cancel() {
        if (this.isScheduled()) {
            clearTimeout(this.timeoutToken);
            this.timeoutToken = -1;
        }
    }
    /**
     * Cancel previous runner (if any) & schedule a new runner.
     */
    schedule(delay = this.timeout) {
        this.cancel();
        this.timeoutToken = setTimeout(this.timeoutHandler, delay);
    }
    get delay() {
        return this.timeout;
    }
    set delay(value) {
        this.timeout = value;
    }
    /**
     * Returns true if scheduled.
     */
    isScheduled() {
        return this.timeoutToken !== -1;
    }
    onTimeout() {
        this.timeoutToken = -1;
        if (this.runner) {
            this.doRun();
        }
    }
    doRun() {
        var _a;
        (_a = this.runner) === null || _a === void 0 ? void 0 : _a.call(this);
    }
}
/**
 * Execute the callback the next time the browser is idle, returning an
 * {@link IDisposable} that will cancel the callback when disposed. This wraps
 * [requestIdleCallback] so it will fallback to [setTimeout] if the environment
 * doesn't support it.
 *
 * @param callback The callback to run when idle, this includes an
 * [IdleDeadline] that provides the time alloted for the idle callback by the
 * browser. Not respecting this deadline will result in a degraded user
 * experience.
 * @param timeout A timeout at which point to queue no longer wait for an idle
 * callback but queue it on the regular event loop (like setTimeout). Typically
 * this should not be used.
 *
 * [IdleDeadline]: https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline
 * [requestIdleCallback]: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback
 * [setTimeout]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
 */
let runWhenIdle;
(function () {
    if (typeof requestIdleCallback !== 'function' || typeof cancelIdleCallback !== 'function') {
        runWhenIdle = (runner) => {
            (0,_platform_js__WEBPACK_IMPORTED_MODULE_4__/* .setTimeout0 */ .fn)(() => {
                if (disposed) {
                    return;
                }
                const end = Date.now() + 15; // one frame at 64fps
                runner(Object.freeze({
                    didTimeout: true,
                    timeRemaining() {
                        return Math.max(0, end - Date.now());
                    }
                }));
            });
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                }
            };
        };
    }
    else {
        runWhenIdle = (runner, timeout) => {
            const handle = requestIdleCallback(runner, typeof timeout === 'number' ? { timeout } : undefined);
            let disposed = false;
            return {
                dispose() {
                    if (disposed) {
                        return;
                    }
                    disposed = true;
                    cancelIdleCallback(handle);
                }
            };
        };
    }
})();
/**
 * An implementation of the "idle-until-urgent"-strategy as introduced
 * here: https://philipwalton.com/articles/idle-until-urgent/
 */
class IdleValue {
    constructor(executor) {
        this._didRun = false;
        this._executor = () => {
            try {
                this._value = executor();
            }
            catch (err) {
                this._error = err;
            }
            finally {
                this._didRun = true;
            }
        };
        this._handle = runWhenIdle(() => this._executor());
    }
    dispose() {
        this._handle.dispose();
    }
    get value() {
        if (!this._didRun) {
            this._handle.dispose();
            this._executor();
        }
        if (this._error) {
            throw this._error;
        }
        return this._value;
    }
    get isInitialized() {
        return this._didRun;
    }
}
/**
 * Creates a promise whose resolution or rejection can be controlled imperatively.
 */
class DeferredPromise {
    get isRejected() {
        var _a;
        return ((_a = this.outcome) === null || _a === void 0 ? void 0 : _a.outcome) === 1 /* DeferredOutcome.Rejected */;
    }
    get isSettled() {
        return !!this.outcome;
    }
    constructor() {
        this.p = new Promise((c, e) => {
            this.completeCallback = c;
            this.errorCallback = e;
        });
    }
    complete(value) {
        return new Promise(resolve => {
            this.completeCallback(value);
            this.outcome = { outcome: 0 /* DeferredOutcome.Resolved */, value };
            resolve();
        });
    }
    error(err) {
        return new Promise(resolve => {
            this.errorCallback(err);
            this.outcome = { outcome: 1 /* DeferredOutcome.Rejected */, value: err };
            resolve();
        });
    }
    cancel() {
        return this.error(new _errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
    }
}
//#endregion
//#region Promises
var Promises;
(function (Promises) {
    /**
     * A drop-in replacement for `Promise.all` with the only difference
     * that the method awaits every promise to either fulfill or reject.
     *
     * Similar to `Promise.all`, only the first error will be returned
     * if any.
     */
    function settled(promises) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstError = undefined;
            const result = yield Promise.all(promises.map(promise => promise.then(value => value, error => {
                if (!firstError) {
                    firstError = error;
                }
                return undefined; // do not rethrow so that other promises can settle
            })));
            if (typeof firstError !== 'undefined') {
                throw firstError;
            }
            return result; // cast is needed and protected by the `throw` above
        });
    }
    Promises.settled = settled;
    /**
     * A helper to create a new `Promise<T>` with a body that is a promise
     * itself. By default, an error that raises from the async body will
     * end up as a unhandled rejection, so this utility properly awaits the
     * body and rejects the promise as a normal promise does without async
     * body.
     *
     * This method should only be used in rare cases where otherwise `async`
     * cannot be used (e.g. when callbacks are involved that require this).
     */
    function withAsyncBody(bodyFn) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield bodyFn(resolve, reject);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    Promises.withAsyncBody = withAsyncBody;
})(Promises || (Promises = {}));
/**
 * A rich implementation for an `AsyncIterable<T>`.
 */
class AsyncIterableObject {
    static fromArray(items) {
        return new AsyncIterableObject((writer) => {
            writer.emitMany(items);
        });
    }
    static fromPromise(promise) {
        return new AsyncIterableObject((emitter) => __awaiter(this, void 0, void 0, function* () {
            emitter.emitMany(yield promise);
        }));
    }
    static fromPromises(promises) {
        return new AsyncIterableObject((emitter) => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(promises.map((p) => __awaiter(this, void 0, void 0, function* () { return emitter.emitOne(yield p); })));
        }));
    }
    static merge(iterables) {
        return new AsyncIterableObject((emitter) => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all(iterables.map((iterable) => { var _a, iterable_1, iterable_1_1; return __awaiter(this, void 0, void 0, function* () {
                var _b, e_1, _c, _d;
                try {
                    for (_a = true, iterable_1 = __asyncValues(iterable); iterable_1_1 = yield iterable_1.next(), _b = iterable_1_1.done, !_b; _a = true) {
                        _d = iterable_1_1.value;
                        _a = false;
                        const item = _d;
                        emitter.emitOne(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_a && !_b && (_c = iterable_1.return)) yield _c.call(iterable_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }); }));
        }));
    }
    constructor(executor) {
        this._state = 0 /* AsyncIterableSourceState.Initial */;
        this._results = [];
        this._error = null;
        this._onStateChanged = new _event_js__WEBPACK_IMPORTED_MODULE_2__/* .Emitter */ .Q5();
        queueMicrotask(() => __awaiter(this, void 0, void 0, function* () {
            const writer = {
                emitOne: (item) => this.emitOne(item),
                emitMany: (items) => this.emitMany(items),
                reject: (error) => this.reject(error)
            };
            try {
                yield Promise.resolve(executor(writer));
                this.resolve();
            }
            catch (err) {
                this.reject(err);
            }
            finally {
                writer.emitOne = undefined;
                writer.emitMany = undefined;
                writer.reject = undefined;
            }
        }));
    }
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next: () => __awaiter(this, void 0, void 0, function* () {
                do {
                    if (this._state === 2 /* AsyncIterableSourceState.DoneError */) {
                        throw this._error;
                    }
                    if (i < this._results.length) {
                        return { done: false, value: this._results[i++] };
                    }
                    if (this._state === 1 /* AsyncIterableSourceState.DoneOK */) {
                        return { done: true, value: undefined };
                    }
                    yield _event_js__WEBPACK_IMPORTED_MODULE_2__/* .Event */ .ju.toPromise(this._onStateChanged.event);
                } while (true);
            })
        };
    }
    static map(iterable, mapFn) {
        return new AsyncIterableObject((emitter) => __awaiter(this, void 0, void 0, function* () {
            var _a, e_2, _b, _c;
            try {
                for (var _d = true, iterable_2 = __asyncValues(iterable), iterable_2_1; iterable_2_1 = yield iterable_2.next(), _a = iterable_2_1.done, !_a; _d = true) {
                    _c = iterable_2_1.value;
                    _d = false;
                    const item = _c;
                    emitter.emitOne(mapFn(item));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = iterable_2.return)) yield _b.call(iterable_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }));
    }
    map(mapFn) {
        return AsyncIterableObject.map(this, mapFn);
    }
    static filter(iterable, filterFn) {
        return new AsyncIterableObject((emitter) => __awaiter(this, void 0, void 0, function* () {
            var _a, e_3, _b, _c;
            try {
                for (var _d = true, iterable_3 = __asyncValues(iterable), iterable_3_1; iterable_3_1 = yield iterable_3.next(), _a = iterable_3_1.done, !_a; _d = true) {
                    _c = iterable_3_1.value;
                    _d = false;
                    const item = _c;
                    if (filterFn(item)) {
                        emitter.emitOne(item);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = iterable_3.return)) yield _b.call(iterable_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }));
    }
    filter(filterFn) {
        return AsyncIterableObject.filter(this, filterFn);
    }
    static coalesce(iterable) {
        return AsyncIterableObject.filter(iterable, item => !!item);
    }
    coalesce() {
        return AsyncIterableObject.coalesce(this);
    }
    static toPromise(iterable) {
        var _a, iterable_4, iterable_4_1;
        var _b, e_4, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const result = [];
            try {
                for (_a = true, iterable_4 = __asyncValues(iterable); iterable_4_1 = yield iterable_4.next(), _b = iterable_4_1.done, !_b; _a = true) {
                    _d = iterable_4_1.value;
                    _a = false;
                    const item = _d;
                    result.push(item);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (!_a && !_b && (_c = iterable_4.return)) yield _c.call(iterable_4);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return result;
        });
    }
    toPromise() {
        return AsyncIterableObject.toPromise(this);
    }
    /**
     * The value will be appended at the end.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */
    emitOne(value) {
        if (this._state !== 0 /* AsyncIterableSourceState.Initial */) {
            return;
        }
        // it is important to add new values at the end,
        // as we may have iterators already running on the array
        this._results.push(value);
        this._onStateChanged.fire();
    }
    /**
     * The values will be appended at the end.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */
    emitMany(values) {
        if (this._state !== 0 /* AsyncIterableSourceState.Initial */) {
            return;
        }
        // it is important to add new values at the end,
        // as we may have iterators already running on the array
        this._results = this._results.concat(values);
        this._onStateChanged.fire();
    }
    /**
     * Calling `resolve()` will mark the result array as complete.
     *
     * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */
    resolve() {
        if (this._state !== 0 /* AsyncIterableSourceState.Initial */) {
            return;
        }
        this._state = 1 /* AsyncIterableSourceState.DoneOK */;
        this._onStateChanged.fire();
    }
    /**
     * Writing an error will permanently invalidate this iterable.
     * The current users will receive an error thrown, as will all future users.
     *
     * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
     */
    reject(error) {
        if (this._state !== 0 /* AsyncIterableSourceState.Initial */) {
            return;
        }
        this._state = 2 /* AsyncIterableSourceState.DoneError */;
        this._error = error;
        this._onStateChanged.fire();
    }
}
AsyncIterableObject.EMPTY = AsyncIterableObject.fromArray([]);
class CancelableAsyncIterableObject extends AsyncIterableObject {
    constructor(_source, executor) {
        super(executor);
        this._source = _source;
    }
    cancel() {
        this._source.cancel();
    }
}
function createCancelableAsyncIterable(callback) {
    const source = new _cancellation_js__WEBPACK_IMPORTED_MODULE_0__/* .CancellationTokenSource */ .A();
    const innerIterable = callback(source.token);
    return new CancelableAsyncIterableObject(source, (emitter) => __awaiter(this, void 0, void 0, function* () {
        var _a, e_5, _b, _c;
        const subscription = source.token.onCancellationRequested(() => {
            subscription.dispose();
            source.dispose();
            emitter.reject(new _errors_js__WEBPACK_IMPORTED_MODULE_1__/* .CancellationError */ .FU());
        });
        try {
            try {
                for (var _d = true, innerIterable_1 = __asyncValues(innerIterable), innerIterable_1_1; innerIterable_1_1 = yield innerIterable_1.next(), _a = innerIterable_1_1.done, !_a; _d = true) {
                    _c = innerIterable_1_1.value;
                    _d = false;
                    const item = _c;
                    if (source.token.isCancellationRequested) {
                        // canceled in the meantime
                        return;
                    }
                    emitter.emitOne(item);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = innerIterable_1.return)) yield _b.call(innerIterable_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            subscription.dispose();
            source.dispose();
        }
        catch (err) {
            subscription.dispose();
            source.dispose();
            emitter.reject(err);
        }
    }));
}
//#endregion


/***/ }),

/***/ 59654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ag: function() { return /* binding */ readUInt32BE; },
/* harmony export */   Cg: function() { return /* binding */ writeUInt8; },
/* harmony export */   KN: function() { return /* binding */ VSBuffer; },
/* harmony export */   Q$: function() { return /* binding */ readUInt8; },
/* harmony export */   T4: function() { return /* binding */ writeUInt32BE; },
/* harmony export */   mP: function() { return /* binding */ readUInt16LE; },
/* harmony export */   oq: function() { return /* binding */ writeUInt16LE; }
/* harmony export */ });
/* harmony import */ var _lazy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92831);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const hasBuffer = (typeof Buffer !== 'undefined');
const indexOfTable = new _lazy_js__WEBPACK_IMPORTED_MODULE_0__/* .Lazy */ .o(() => new Uint8Array(256));
let textDecoder;
class VSBuffer {
    /**
     * When running in a nodejs context, if `actual` is not a nodejs Buffer, the backing store for
     * the returned `VSBuffer` instance might use a nodejs Buffer allocated from node's Buffer pool,
     * which is not transferrable.
     */
    static wrap(actual) {
        if (hasBuffer && !(Buffer.isBuffer(actual))) {
            // https://nodejs.org/dist/latest-v10.x/docs/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length
            // Create a zero-copy Buffer wrapper around the ArrayBuffer pointed to by the Uint8Array
            actual = Buffer.from(actual.buffer, actual.byteOffset, actual.byteLength);
        }
        return new VSBuffer(actual);
    }
    constructor(buffer) {
        this.buffer = buffer;
        this.byteLength = this.buffer.byteLength;
    }
    toString() {
        if (hasBuffer) {
            return this.buffer.toString();
        }
        else {
            if (!textDecoder) {
                textDecoder = new TextDecoder();
            }
            return textDecoder.decode(this.buffer);
        }
    }
}
function readUInt16LE(source, offset) {
    return (((source[offset + 0] << 0) >>> 0) |
        ((source[offset + 1] << 8) >>> 0));
}
function writeUInt16LE(destination, value, offset) {
    destination[offset + 0] = (value & 0b11111111);
    value = value >>> 8;
    destination[offset + 1] = (value & 0b11111111);
}
function readUInt32BE(source, offset) {
    return (source[offset] * Math.pow(2, 24)
        + source[offset + 1] * Math.pow(2, 16)
        + source[offset + 2] * Math.pow(2, 8)
        + source[offset + 3]);
}
function writeUInt32BE(destination, value, offset) {
    destination[offset + 3] = value;
    value = value >>> 8;
    destination[offset + 2] = value;
    value = value >>> 8;
    destination[offset + 1] = value;
    value = value >>> 8;
    destination[offset] = value;
}
function readUInt8(source, offset) {
    return source[offset];
}
function writeUInt8(destination, value, offset) {
    destination[offset] = value;
}


/***/ }),

/***/ 59699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: function() { return /* binding */ CachedFunction; },
/* harmony export */   t: function() { return /* binding */ LRUCachedFunction; }
/* harmony export */ });
/**
 * Uses a LRU cache to make a given parametrized function cached.
 * Caches just the last value.
 * The key must be JSON serializable.
*/
class LRUCachedFunction {
    constructor(fn) {
        this.fn = fn;
        this.lastCache = undefined;
        this.lastArgKey = undefined;
    }
    get(arg) {
        const key = JSON.stringify(arg);
        if (this.lastArgKey !== key) {
            this.lastArgKey = key;
            this.lastCache = this.fn(arg);
        }
        return this.lastCache;
    }
}
/**
 * Uses an unbounded cache (referential equality) to memoize the results of the given function.
*/
class CachedFunction {
    get cachedValues() {
        return this._map;
    }
    constructor(fn) {
        this.fn = fn;
        this._map = new Map();
    }
    get(arg) {
        if (this._map.has(arg)) {
            return this._map.get(arg);
        }
        const value = this.fn(arg);
        this._map.set(arg, value);
        return value;
    }
}


/***/ })

}]);