"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-3036554e"],{

/***/ 27484:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HZ: function() { return /* binding */ logOnceWebWorkerWarning; },
/* harmony export */   PB: function() { return /* binding */ SimpleWorkerClient; }
/* harmony export */ });
/* unused harmony exports SimpleWorkerServer, create */
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50847);
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99269);
/* harmony import */ var _platform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94057);
/* harmony import */ var _strings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23607);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






const INITIALIZE = '$initialize';
let webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!_platform_js__WEBPACK_IMPORTED_MODULE_4__/* .isWeb */ .$L) {
        // running tests
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
class RequestMessage {
    constructor(vsWorker, req, method, args) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.method = method;
        this.args = args;
        this.type = 0 /* MessageType.Request */;
    }
}
class ReplyMessage {
    constructor(vsWorker, seq, res, err) {
        this.vsWorker = vsWorker;
        this.seq = seq;
        this.res = res;
        this.err = err;
        this.type = 1 /* MessageType.Reply */;
    }
}
class SubscribeEventMessage {
    constructor(vsWorker, req, eventName, arg) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.eventName = eventName;
        this.arg = arg;
        this.type = 2 /* MessageType.SubscribeEvent */;
    }
}
class EventMessage {
    constructor(vsWorker, req, event) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.event = event;
        this.type = 3 /* MessageType.Event */;
    }
}
class UnsubscribeEventMessage {
    constructor(vsWorker, req) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.type = 4 /* MessageType.UnsubscribeEvent */;
    }
}
class SimpleWorkerProtocol {
    constructor(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
        this._pendingEmitters = new Map();
        this._pendingEvents = new Map();
    }
    setWorkerId(workerId) {
        this._workerId = workerId;
    }
    sendMessage(method, args) {
        const req = String(++this._lastSentReq);
        return new Promise((resolve, reject) => {
            this._pendingReplies[req] = {
                resolve: resolve,
                reject: reject
            };
            this._send(new RequestMessage(this._workerId, req, method, args));
        });
    }
    listen(eventName, arg) {
        let req = null;
        const emitter = new _event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5({
            onWillAddFirstListener: () => {
                req = String(++this._lastSentReq);
                this._pendingEmitters.set(req, emitter);
                this._send(new SubscribeEventMessage(this._workerId, req, eventName, arg));
            },
            onDidRemoveLastListener: () => {
                this._pendingEmitters.delete(req);
                this._send(new UnsubscribeEventMessage(this._workerId, req));
                req = null;
            }
        });
        return emitter.event;
    }
    handleMessage(message) {
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    }
    _handleMessage(msg) {
        switch (msg.type) {
            case 1 /* MessageType.Reply */:
                return this._handleReplyMessage(msg);
            case 0 /* MessageType.Request */:
                return this._handleRequestMessage(msg);
            case 2 /* MessageType.SubscribeEvent */:
                return this._handleSubscribeEventMessage(msg);
            case 3 /* MessageType.Event */:
                return this._handleEventMessage(msg);
            case 4 /* MessageType.UnsubscribeEvent */:
                return this._handleUnsubscribeEventMessage(msg);
        }
    }
    _handleReplyMessage(replyMessage) {
        if (!this._pendingReplies[replyMessage.seq]) {
            console.warn('Got reply to unknown seq');
            return;
        }
        const reply = this._pendingReplies[replyMessage.seq];
        delete this._pendingReplies[replyMessage.seq];
        if (replyMessage.err) {
            let err = replyMessage.err;
            if (replyMessage.err.$isError) {
                err = new Error();
                err.name = replyMessage.err.name;
                err.message = replyMessage.err.message;
                err.stack = replyMessage.err.stack;
            }
            reply.reject(err);
            return;
        }
        reply.resolve(replyMessage.res);
    }
    _handleRequestMessage(requestMessage) {
        const req = requestMessage.req;
        const result = this._handler.handleMessage(requestMessage.method, requestMessage.args);
        result.then((r) => {
            this._send(new ReplyMessage(this._workerId, req, r, undefined));
        }, (e) => {
            if (e.detail instanceof Error) {
                // Loading errors have a detail property that points to the actual error
                e.detail = (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .transformErrorForSerialization */ .ri)(e.detail);
            }
            this._send(new ReplyMessage(this._workerId, req, undefined, (0,_errors_js__WEBPACK_IMPORTED_MODULE_0__/* .transformErrorForSerialization */ .ri)(e)));
        });
    }
    _handleSubscribeEventMessage(msg) {
        const req = msg.req;
        const disposable = this._handler.handleEvent(msg.eventName, msg.arg)((event) => {
            this._send(new EventMessage(this._workerId, req, event));
        });
        this._pendingEvents.set(req, disposable);
    }
    _handleEventMessage(msg) {
        if (!this._pendingEmitters.has(msg.req)) {
            console.warn('Got event for unknown req');
            return;
        }
        this._pendingEmitters.get(msg.req).fire(msg.event);
    }
    _handleUnsubscribeEventMessage(msg) {
        if (!this._pendingEvents.has(msg.req)) {
            console.warn('Got unsubscribe for unknown req');
            return;
        }
        this._pendingEvents.get(msg.req).dispose();
        this._pendingEvents.delete(msg.req);
    }
    _send(msg) {
        const transfer = [];
        if (msg.type === 0 /* MessageType.Request */) {
            for (let i = 0; i < msg.args.length; i++) {
                if (msg.args[i] instanceof ArrayBuffer) {
                    transfer.push(msg.args[i]);
                }
            }
        }
        else if (msg.type === 1 /* MessageType.Reply */) {
            if (msg.res instanceof ArrayBuffer) {
                transfer.push(msg.res);
            }
        }
        this._handler.sendMessage(msg, transfer);
    }
}
/**
 * Main thread side
 */
class SimpleWorkerClient extends _lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .Disposable */ .JT {
    constructor(workerFactory, moduleId, host) {
        super();
        let lazyProxyReject = null;
        this._worker = this._register(workerFactory.create('vs/base/common/worker/simpleWorker', (msg) => {
            this._protocol.handleMessage(msg);
        }, (err) => {
            // in Firefox, web workers fail lazily :(
            // we will reject the proxy
            lazyProxyReject === null || lazyProxyReject === void 0 ? void 0 : lazyProxyReject(err);
        }));
        this._protocol = new SimpleWorkerProtocol({
            sendMessage: (msg, transfer) => {
                this._worker.postMessage(msg, transfer);
            },
            handleMessage: (method, args) => {
                if (typeof host[method] !== 'function') {
                    return Promise.reject(new Error('Missing method ' + method + ' on main thread host.'));
                }
                try {
                    return Promise.resolve(host[method].apply(host, args));
                }
                catch (e) {
                    return Promise.reject(e);
                }
            },
            handleEvent: (eventName, arg) => {
                if (propertyIsDynamicEvent(eventName)) {
                    const event = host[eventName].call(host, arg);
                    if (typeof event !== 'function') {
                        throw new Error(`Missing dynamic event ${eventName} on main thread host.`);
                    }
                    return event;
                }
                if (propertyIsEvent(eventName)) {
                    const event = host[eventName];
                    if (typeof event !== 'function') {
                        throw new Error(`Missing event ${eventName} on main thread host.`);
                    }
                    return event;
                }
                throw new Error(`Malformed event name ${eventName}`);
            }
        });
        this._protocol.setWorkerId(this._worker.getId());
        // Gather loader configuration
        let loaderConfiguration = null;
        const globalRequire = globalThis.require;
        if (typeof globalRequire !== 'undefined' && typeof globalRequire.getConfig === 'function') {
            // Get the configuration from the Monaco AMD Loader
            loaderConfiguration = globalRequire.getConfig();
        }
        else if (typeof globalThis.requirejs !== 'undefined') {
            // Get the configuration from requirejs
            loaderConfiguration = globalThis.requirejs.s.contexts._.config;
        }
        const hostMethods = (0,_objects_js__WEBPACK_IMPORTED_MODULE_3__/* .getAllMethodNames */ .$E)(host);
        // Send initialize message
        this._onModuleLoaded = this._protocol.sendMessage(INITIALIZE, [
            this._worker.getId(),
            JSON.parse(JSON.stringify(loaderConfiguration)),
            moduleId,
            hostMethods,
        ]);
        // Create proxy to loaded code
        const proxyMethodRequest = (method, args) => {
            return this._request(method, args);
        };
        const proxyListen = (eventName, arg) => {
            return this._protocol.listen(eventName, arg);
        };
        this._lazyProxy = new Promise((resolve, reject) => {
            lazyProxyReject = reject;
            this._onModuleLoaded.then((availableMethods) => {
                resolve(createProxyObject(availableMethods, proxyMethodRequest, proxyListen));
            }, (e) => {
                reject(e);
                this._onError('Worker failed to load ' + moduleId, e);
            });
        });
    }
    getProxyObject() {
        return this._lazyProxy;
    }
    _request(method, args) {
        return new Promise((resolve, reject) => {
            this._onModuleLoaded.then(() => {
                this._protocol.sendMessage(method, args).then(resolve, reject);
            }, reject);
        });
    }
    _onError(message, error) {
        console.error(message);
        console.info(error);
    }
}
function propertyIsEvent(name) {
    // Assume a property is an event if it has a form of "onSomething"
    return name[0] === 'o' && name[1] === 'n' && _strings_js__WEBPACK_IMPORTED_MODULE_5__/* .isUpperAsciiLetter */ .df(name.charCodeAt(2));
}
function propertyIsDynamicEvent(name) {
    // Assume a property is a dynamic event (a method that returns an event) if it has a form of "onDynamicSomething"
    return /^onDynamic/.test(name) && _strings_js__WEBPACK_IMPORTED_MODULE_5__/* .isUpperAsciiLetter */ .df(name.charCodeAt(9));
}
function createProxyObject(methodNames, invoke, proxyListen) {
    const createProxyMethod = (method) => {
        return function () {
            const args = Array.prototype.slice.call(arguments, 0);
            return invoke(method, args);
        };
    };
    const createProxyDynamicEvent = (eventName) => {
        return function (arg) {
            return proxyListen(eventName, arg);
        };
    };
    const result = {};
    for (const methodName of methodNames) {
        if (propertyIsDynamicEvent(methodName)) {
            result[methodName] = createProxyDynamicEvent(methodName);
            continue;
        }
        if (propertyIsEvent(methodName)) {
            result[methodName] = proxyListen(methodName, undefined);
            continue;
        }
        result[methodName] = createProxyMethod(methodName);
    }
    return result;
}
/**
 * Worker side
 */
class SimpleWorkerServer {
    constructor(postMessage, requestHandlerFactory) {
        this._requestHandlerFactory = requestHandlerFactory;
        this._requestHandler = null;
        this._protocol = new SimpleWorkerProtocol({
            sendMessage: (msg, transfer) => {
                postMessage(msg, transfer);
            },
            handleMessage: (method, args) => this._handleMessage(method, args),
            handleEvent: (eventName, arg) => this._handleEvent(eventName, arg)
        });
    }
    onmessage(msg) {
        this._protocol.handleMessage(msg);
    }
    _handleMessage(method, args) {
        if (method === INITIALIZE) {
            return this.initialize(args[0], args[1], args[2], args[3]);
        }
        if (!this._requestHandler || typeof this._requestHandler[method] !== 'function') {
            return Promise.reject(new Error('Missing requestHandler or method: ' + method));
        }
        try {
            return Promise.resolve(this._requestHandler[method].apply(this._requestHandler, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _handleEvent(eventName, arg) {
        if (!this._requestHandler) {
            throw new Error(`Missing requestHandler`);
        }
        if (propertyIsDynamicEvent(eventName)) {
            const event = this._requestHandler[eventName].call(this._requestHandler, arg);
            if (typeof event !== 'function') {
                throw new Error(`Missing dynamic event ${eventName} on request handler.`);
            }
            return event;
        }
        if (propertyIsEvent(eventName)) {
            const event = this._requestHandler[eventName];
            if (typeof event !== 'function') {
                throw new Error(`Missing event ${eventName} on request handler.`);
            }
            return event;
        }
        throw new Error(`Malformed event name ${eventName}`);
    }
    initialize(workerId, loaderConfig, moduleId, hostMethods) {
        this._protocol.setWorkerId(workerId);
        const proxyMethodRequest = (method, args) => {
            return this._protocol.sendMessage(method, args);
        };
        const proxyListen = (eventName, arg) => {
            return this._protocol.listen(eventName, arg);
        };
        const hostProxy = createProxyObject(hostMethods, proxyMethodRequest, proxyListen);
        if (this._requestHandlerFactory) {
            // static request handler
            this._requestHandler = this._requestHandlerFactory(hostProxy);
            return Promise.resolve(getAllMethodNames(this._requestHandler));
        }
        if (loaderConfig) {
            // Remove 'baseUrl', handling it is beyond scope for now
            if (typeof loaderConfig.baseUrl !== 'undefined') {
                delete loaderConfig['baseUrl'];
            }
            if (typeof loaderConfig.paths !== 'undefined') {
                if (typeof loaderConfig.paths.vs !== 'undefined') {
                    delete loaderConfig.paths['vs'];
                }
            }
            if (typeof loaderConfig.trustedTypesPolicy !== undefined) {
                // don't use, it has been destroyed during serialize
                delete loaderConfig['trustedTypesPolicy'];
            }
            // Since this is in a web worker, enable catching errors
            loaderConfig.catchError = true;
            globalThis.require.config(loaderConfig);
        }
        return new Promise((resolve, reject) => {
            // Use the global require to be sure to get the global config
            // ESM-comment-begin
            // 			const req = (globalThis.require || require);
            // ESM-comment-end
            // ESM-uncomment-begin
            const req = globalThis.require;
            // ESM-uncomment-end
            req([moduleId], (module) => {
                this._requestHandler = module.create(hostProxy);
                if (!this._requestHandler) {
                    reject(new Error(`No RequestHandler!`));
                    return;
                }
                resolve(getAllMethodNames(this._requestHandler));
            }, reject);
        });
    }
}
/**
 * Called on the worker side
 */
function create(postMessage) {
    return new SimpleWorkerServer(postMessage, null);
}


/***/ }),

/***/ 78358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KV: function() { return /* binding */ StorageHint; },
/* harmony export */   Ke: function() { return /* binding */ Storage; },
/* harmony export */   Wm: function() { return /* binding */ InMemoryStorageDatabase; }
/* harmony export */ });
/* unused harmony export StorageState */
/* harmony import */ var _common_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72432);
/* harmony import */ var _common_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96290);
/* harmony import */ var _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79027);
/* harmony import */ var _common_marshalling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36001);
/* harmony import */ var _common_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28935);
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





var StorageHint;
(function (StorageHint) {
    // A hint to the storage that the storage
    // does not exist on disk yet. This allows
    // the storage library to improve startup
    // time by not checking the storage for data.
    StorageHint[StorageHint["STORAGE_DOES_NOT_EXIST"] = 0] = "STORAGE_DOES_NOT_EXIST";
    // A hint to the storage that the storage
    // is backed by an in-memory storage.
    StorageHint[StorageHint["STORAGE_IN_MEMORY"] = 1] = "STORAGE_IN_MEMORY";
})(StorageHint || (StorageHint = {}));
var StorageState;
(function (StorageState) {
    StorageState[StorageState["None"] = 0] = "None";
    StorageState[StorageState["Initialized"] = 1] = "Initialized";
    StorageState[StorageState["Closed"] = 2] = "Closed";
})(StorageState || (StorageState = {}));
class Storage extends _common_lifecycle_js__WEBPACK_IMPORTED_MODULE_2__/* .Disposable */ .JT {
    constructor(database, options = Object.create(null)) {
        super();
        this.database = database;
        this.options = options;
        this._onDidChangeStorage = this._register(new _common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Emitter */ .Q5());
        this.onDidChangeStorage = this._onDidChangeStorage.event;
        this.state = StorageState.None;
        this.cache = new Map();
        this.flushDelayer = new _common_async_js__WEBPACK_IMPORTED_MODULE_0__/* .ThrottledDelayer */ .rH(Storage.DEFAULT_FLUSH_DELAY);
        this.pendingDeletes = new Set();
        this.pendingInserts = new Map();
        this.whenFlushedCallbacks = [];
        this.registerListeners();
    }
    registerListeners() {
        this._register(this.database.onDidChangeItemsExternal(e => this.onDidChangeItemsExternal(e)));
    }
    onDidChangeItemsExternal(e) {
        var _a, _b;
        // items that change external require us to update our
        // caches with the values. we just accept the value and
        // emit an event if there is a change.
        (_a = e.changed) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => this.accept(key, value));
        (_b = e.deleted) === null || _b === void 0 ? void 0 : _b.forEach(key => this.accept(key, undefined));
    }
    accept(key, value) {
        if (this.state === StorageState.Closed) {
            return; // Return early if we are already closed
        }
        let changed = false;
        // Item got removed, check for deletion
        if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
            changed = this.cache.delete(key);
        }
        // Item got updated, check for change
        else {
            const currentValue = this.cache.get(key);
            if (currentValue !== value) {
                this.cache.set(key, value);
                changed = true;
            }
        }
        // Signal to outside listeners
        if (changed) {
            this._onDidChangeStorage.fire(key);
        }
    }
    get(key, fallbackValue) {
        const value = this.cache.get(key);
        if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
            return fallbackValue;
        }
        return value;
    }
    getBoolean(key, fallbackValue) {
        const value = this.get(key);
        if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
            return fallbackValue;
        }
        return value === 'true';
    }
    getNumber(key, fallbackValue) {
        const value = this.get(key);
        if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
            return fallbackValue;
        }
        return parseInt(value, 10);
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state === StorageState.Closed) {
                return; // Return early if we are already closed
            }
            // We remove the key for undefined/null values
            if ((0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isUndefinedOrNull */ .Jp)(value)) {
                return this.delete(key);
            }
            // Otherwise, convert to String and store
            const valueStr = (0,_common_types_js__WEBPACK_IMPORTED_MODULE_4__/* .isObject */ .Kn)(value) || Array.isArray(value) ? (0,_common_marshalling_js__WEBPACK_IMPORTED_MODULE_3__/* .stringify */ .Pz)(value) : String(value);
            // Return early if value already set
            const currentValue = this.cache.get(key);
            if (currentValue === valueStr) {
                return;
            }
            // Update in cache and pending
            this.cache.set(key, valueStr);
            this.pendingInserts.set(key, valueStr);
            this.pendingDeletes.delete(key);
            // Event
            this._onDidChangeStorage.fire(key);
            // Accumulate work by scheduling after timeout
            return this.doFlush();
        });
    }
    delete(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.state === StorageState.Closed) {
                return; // Return early if we are already closed
            }
            // Remove from cache and add to pending
            const wasDeleted = this.cache.delete(key);
            if (!wasDeleted) {
                return; // Return early if value already deleted
            }
            if (!this.pendingDeletes.has(key)) {
                this.pendingDeletes.add(key);
            }
            this.pendingInserts.delete(key);
            // Event
            this._onDidChangeStorage.fire(key);
            // Accumulate work by scheduling after timeout
            return this.doFlush();
        });
    }
    get hasPending() {
        return this.pendingInserts.size > 0 || this.pendingDeletes.size > 0;
    }
    flushPending() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.hasPending) {
                return; // return early if nothing to do
            }
            // Get pending data
            const updateRequest = { insert: this.pendingInserts, delete: this.pendingDeletes };
            // Reset pending data for next run
            this.pendingDeletes = new Set();
            this.pendingInserts = new Map();
            // Update in storage and release any
            // waiters we have once done
            return this.database.updateItems(updateRequest).finally(() => {
                var _a;
                if (!this.hasPending) {
                    while (this.whenFlushedCallbacks.length) {
                        (_a = this.whenFlushedCallbacks.pop()) === null || _a === void 0 ? void 0 : _a();
                    }
                }
            });
        });
    }
    doFlush(delay) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.flushDelayer.trigger(() => this.flushPending(), delay);
        });
    }
    dispose() {
        this.flushDelayer.dispose();
        super.dispose();
    }
}
Storage.DEFAULT_FLUSH_DELAY = 100;
class InMemoryStorageDatabase {
    constructor() {
        this.onDidChangeItemsExternal = _common_event_js__WEBPACK_IMPORTED_MODULE_1__/* .Event */ .ju.None;
        this.items = new Map();
    }
    updateItems(request) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            (_a = request.insert) === null || _a === void 0 ? void 0 : _a.forEach((value, key) => this.items.set(key, value));
            (_b = request.delete) === null || _b === void 0 ? void 0 : _b.forEach(key => this.items.delete(key));
        });
    }
}


/***/ })

}]);