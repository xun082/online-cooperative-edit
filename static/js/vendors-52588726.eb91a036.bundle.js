"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-52588726"],{

/***/ 13199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V4: function() { return /* reexport */ CSSMotionList; },
  zt: function() { return /* reexport */ MotionProvider; },
  ZP: function() { return /* binding */ es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(58216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49919);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29245);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(88143);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(69699);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(66818);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/context.js

var _excluded = ["children"];

var Context = /*#__PURE__*/react.createContext({});
function MotionProvider(_ref) {
  var children = _ref.children,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: props
  }, children);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(87989);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51852);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(21279);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(27597);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/DomWrapper.js





var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);
  var _super = (0,createSuper/* default */.Z)(DomWrapper);
  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(react.Component);
/* harmony default export */ var es_DomWrapper = (DomWrapper);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useState.js
var useState = __webpack_require__(79562);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
/**
 * Used for disabled motion case.
 * Prepare stage will still work but start & active will be skipped.
 */
var STEP_PREPARED = 'prepared';
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(34549);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/util/motion.js


// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0,canUseDom/* default */.Z)(), typeof window !== 'undefined' ? window : {});
var style = {};
if ((0,canUseDom/* default */.Z)()) {
  var _document$createEleme = document.createElement('div');
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if ((0,esm_typeof/* default */.Z)(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ var useDomMotionEvents = (function (callback) {
  var cacheElementRef = (0,react.useRef)();

  // Cache callback
  var callbackRef = (0,react.useRef)(callback);
  callbackRef.current = callback;

  // Internal motion event handler
  var onInternalMotionEnd = react.useCallback(function (event) {
    callbackRef.current(event);
  }, []);

  // Remove events
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }

  // Patch events
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);

      // Save as cache in case dom removed trigger by `motionDeadline`
      cacheElementRef.current = element;
    }
  }

  // Clean up when removed
  react.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js



// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = (0,canUseDom/* default */.Z)() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ var hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(18383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/hooks/useNextFrame.js


/* harmony default export */ var useNextFrame = (function () {
  var nextFrameRef = react.useRef(null);
  function cancelNextFrame() {
    raf/* default */.Z.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = (0,raf/* default */.Z)(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/hooks/useStepQueue.js






var FULL_STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];

/** Skip current step */
var SkipStep = false;
/** Current step should be update in */
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
/* harmony default export */ var useStepQueue = (function (status, prepareOnly, callback) {
  var _useState = (0,useState/* default */.Z)(STEP_NONE),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = useNextFrame(),
    _useNextFrame2 = (0,slicedToArray/* default */.Z)(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  hooks_useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else if (nextStep) {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/hooks/useStatus.js










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = (0,useState/* default */.Z)(),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useState3 = (0,useState/* default */.Z)(STATUS_NONE),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0,useState/* default */.Z)(null),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    style = _useState6[0],
    setStyle = _useState6[1];
  var mountedRef = (0,react.useRef)(false);
  var deadlineRef = (0,react.useRef)(null);

  // =========================== Dom Node ===========================
  function getDomElement() {
    return getElement();
  }

  // ========================== Motion End ==========================
  var activeRef = (0,react.useRef)(false);

  /**
   * Clean up status & style
   */
  function updateMotionEndStatus() {
    setStatus(STATUS_NONE, true);
    setStyle(null, true);
  }
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }

    // Only update status when `canEnd` and not destroyed
    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  }
  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
    _useDomMotionEvents2 = (0,slicedToArray/* default */.Z)(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];

  // ============================= Step =============================
  var getEventHandlers = function getEventHandlers(targetStatus) {
    var _ref2, _ref3, _ref4;
    switch (targetStatus) {
      case STATUS_APPEAR:
        return _ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, STEP_PREPARE, onAppearPrepare), (0,defineProperty/* default */.Z)(_ref2, STEP_START, onAppearStart), (0,defineProperty/* default */.Z)(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
      case STATUS_ENTER:
        return _ref3 = {}, (0,defineProperty/* default */.Z)(_ref3, STEP_PREPARE, onEnterPrepare), (0,defineProperty/* default */.Z)(_ref3, STEP_START, onEnterStart), (0,defineProperty/* default */.Z)(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
      case STATUS_LEAVE:
        return _ref4 = {}, (0,defineProperty/* default */.Z)(_ref4, STEP_PREPARE, onLeavePrepare), (0,defineProperty/* default */.Z)(_ref4, STEP_START, onLeaveStart), (0,defineProperty/* default */.Z)(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
      default:
        return {};
    }
  };
  var eventHandlers = react.useMemo(function () {
    return getEventHandlers(status);
  }, [status]);
  var _useStepQueue = useStepQueue(status, !supportMotion, function (newStep) {
      // Only prepare step can be skip
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }

      // Rest step is sync update
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === STEP_ACTIVE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return DoStep;
    }),
    _useStepQueue2 = (0,slicedToArray/* default */.Z)(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;

  // ============================ Status ============================
  // Update with new status
  hooks_useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    // if (!supportMotion) {
    //   return;
    // }

    var nextStatus;

    // Appear
    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    }

    // Enter
    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    }

    // Leave
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);

    // Update to next status
    if (nextStatus && (supportMotion || nextEventHandlers[STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      // Set back in case no motion but prev status has prepare step
      setStatus(STATUS_NONE);
    }
  }, [visible]);

  // ============================ Effect ============================
  // Reset when motion changed
  (0,react.useEffect)(function () {
    if (
    // Cancel appear
    status === STATUS_APPEAR && !motionAppear ||
    // Cancel enter
    status === STATUS_ENTER && !motionEnter ||
    // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,react.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);

  // Trigger `onVisibleChanged`
  var firstMountChangeRef = react.useRef(false);
  (0,react.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== undefined && status === STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]);

  // ============================ Styles ============================
  var mergedStyle = style;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = (0,objectSpread2/* default */.Z)({
      transition: 'none'
    }, mergedStyle);
  }
  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/CSSMotion.js




/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */











/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  if ((0,esm_typeof/* default */.Z)(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var _React$useContext = react.useContext(Context),
      contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);

    // Ref to the react node, it may be a HTMLElement
    var nodeRef = (0,react.useRef)();
    // Ref to the dom wrapper in case ref can not pass to HTMLElement
    var wrapperNodeRef = (0,react.useRef)();
    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0,findDOMNode/* default */.Z)(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = (0,slicedToArray/* default */.Z)(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];

    // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`
    var renderedRef = react.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }

    // ====================== Refs ======================
    var setNodeRef = react.useCallback(function (node) {
      nodeRef.current = node;
      (0,es_ref/* fillRef */.mH)(ref, node);
    }, [ref]);

    // ===================== Render =====================
    var motionChildren;
    var mergedProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, eventProps), {}, {
      visible: visible
    });
    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children((0,objectSpread2/* default */.Z)({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      // In motion
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }
      var motionCls = getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
        className: classnames_default()(getTransitionName(motionName, status), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, motionCls, motionCls && statusSuffix), (0,defineProperty/* default */.Z)(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    // Auto inject ref if child node not have `ref` props
    if ( /*#__PURE__*/react.isValidElement(motionChildren) && (0,es_ref/* supportRef */.Yr)(motionChildren)) {
      var _ref = motionChildren,
        originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/react.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /*#__PURE__*/react.createElement(es_DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ var es_CSSMotion = (genCSSMotion(supportTransition));
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(75859);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/util/diff.js


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;
  if (key && (0,esm_typeof/* default */.Z)(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/CSSMotionList.js









var CSSMotionList_excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  _excluded2 = ["status"];
/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_CSSMotion;
  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(CSSMotionList, _React$Component);
    var _super = (0,createSuper/* default */.Z)(CSSMotionList);
    function CSSMotionList() {
      var _this;
      (0,classCallCheck/* default */.Z)(this, CSSMotionList);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
        keyEntities: []
      });
      (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "removeKey", function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, entity), {}, {
            status: STATUS_REMOVED
          });
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      });
      return _this;
    }
    (0,createClass/* default */.Z)(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props,
          component = _this$props.component,
          children = _this$props.children,
          _onVisibleChanged = _this$props.onVisibleChanged,
          onAllRemoved = _this$props.onAllRemoved,
          restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, CSSMotionList_excluded);
        var Component = component || react.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
            eventProps = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/react.createElement(CSSMotion, (0,esm_extends/* default */.Z)({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);
                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });

            // Remove if already mark as removed
            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }

      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
    }]);
    return CSSMotionList;
  }(react.Component);
  (0,defineProperty/* default */.Z)(CSSMotionList, "defaultProps", {
    component: 'div'
  });
  return CSSMotionList;
}
/* harmony default export */ var CSSMotionList = (genCSSMotionList(supportTransition));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js




/* harmony default export */ var es = (es_CSSMotion);

/***/ })

}]);