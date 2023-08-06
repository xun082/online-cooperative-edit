"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-d07461da"],{

/***/ 25784:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ trigger_es; }
});

// UNUSED EXPORTS: generateTrigger

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49919);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29245);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(66818);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(10422);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(34549);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(37543);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/Context.js

var OrderContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var Context = (OrderContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(23190);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(90429);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/useDom.js






var EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  var _React$useState = react.useState(function () {
      if (!(0,canUseDom/* default */.Z)()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (false) {}
      return defaultEle;
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 1),
    ele = _React$useState2[0];

  // ========================== Order ==========================
  var appendedRef = react.useRef(false);
  var queueCreate = react.useContext(Context);
  var _React$useState3 = react.useState(EMPTY_LIST),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
    setQueue(function (origin) {
      var newQueue = [appendFn].concat((0,toConsumableArray/* default */.Z)(origin));
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (queue.length) {
      queue.forEach(function (appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js + 1 modules
var dynamicCSS = __webpack_require__(85223);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize = __webpack_require__(46510);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/util.js
/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/useScrollLocker.js






var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = react.useState(function () {
      uuid += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid);
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 1),
    id = _React$useState2[0];
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedLock) {
      var scrollbarSize = (0,getScrollBarSize/* default */.Z)();
      var isOverflow = isBodyOverflowing();
      (0,dynamicCSS/* updateCSS */.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
    } else {
      (0,dynamicCSS/* removeCSS */.jL)(id);
    }
    return function () {
      (0,dynamicCSS/* removeCSS */.jL)(id);
    };
  }, [mergedLock, id]);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/Portal.js










var getPortalContainer = function getPortalContainer(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!(0,canUseDom/* default */.Z)() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = react.useState(open),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (false) {}

  // ====================== Should Render ======================
  react.useEffect(function () {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  var _React$useState3 = react.useState(function () {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  react.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = (0,slicedToArray/* default */.Z)(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;

  // ========================= Locker ==========================
  useScrollLocker(autoLock && open && (0,canUseDom/* default */.Z)() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // =========================== Ref ===========================
  var childRef = null;
  if (children && (0,es_ref/* supportRef */.Yr)(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !(0,canUseDom/* default */.Z)() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/react.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/react.createElement(Context.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/(0,react_dom.createPortal)(reffedChildren, mergedContainer));
});
if (false) {}
/* harmony default export */ var es_Portal = (Portal);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+portal@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/portal/es/index.js



/* harmony default export */ var es = (es_Portal);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(76957);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(69699);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
var shadow = __webpack_require__(53760);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(47737);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useId.js
var useId = __webpack_require__(96384);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/isMobile.js
var isMobile = __webpack_require__(77220);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/context.js

var TriggerContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ var es_context = (TriggerContext);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/hooks/useAction.js

function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return react.useMemo(function () {
    var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has('hover')) {
        showActionSet.delete('hover');
        showActionSet.add('click');
      }
      if (hideActionSet.has('hover')) {
        hideActionSet.delete('hover');
        hideActionSet.add('click');
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(86380);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/util.js

function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return '';
}

/** @deprecated We should not use this if we can refactor all deps */
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ['hidden', 'scroll', 'clip', 'auto'];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY,
      overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function (o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
/**
 *
 *
 *  **************************************
 *  *              Border                *
 *  *     **************************     *
 *  *     *                  *     *     *
 *  *  B  *                  *  S  *  B  *
 *  *  o  *                  *  c  *  o  *
 *  *  r  *      Content     *  r  *  r  *
 *  *  d  *                  *  o  *  d  *
 *  *  e  *                  *  l  *  e  *
 *  *  r  ********************  l  *  r  *
 *  *     *        Scroll          *     *
 *  *     **************************     *
 *  *              Border                *
 *  **************************************
 *
 */
/**
 * Get visible area of element
 */
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = (0,objectSpread2/* default */.Z)({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      overflow = _getWin$getComputedSt2.overflow,
      overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin,
      borderTopWidth = _getWin$getComputedSt2.borderTopWidth,
      borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth,
      borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth,
      borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);

    // Original visible area
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;

    // Cut border size
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;

    // Clip margin
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === 'clip') {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }

    // Region
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/hooks/useAlign.js








function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [],
    _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
    offsetX = _ref2[0],
    offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x: x,
    y: y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  return points.map(function (point, i) {
    if (i === index) {
      return reverseMap[point] || 'c';
    }
    return point;
  }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = react.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = react.useRef(0);
  var scrollerList = react.useMemo(function () {
    if (!popupEle) {
      return [];
    }
    return collectScroller(popupEle);
  }, [popupEle]);

  // ========================= Flip ==========================
  // We will memo flip info.
  // If size change to make flip, it will memo the flip info and use it in next align.
  var prevFlipRef = react.useRef({});
  var resetFlipCache = function resetFlipCache() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }

  // ========================= Align =========================
  var onAlign = (0,useEvent/* default */.Z)(function () {
    if (popupEle && target && open) {
      var popupElement = popupEle;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var doc = popupElement.ownerDocument;
      var win = getWin(popupElement);

      // Placement
      var placementInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, builtinPlacements[placement]), popupAlign);

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';
      popupElement.style.right = 'auto';
      popupElement.style.bottom = 'auto';

      // Calculate align style, we should consider `transform` case
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        width = _win$getComputedStyle.width,
        height = _win$getComputedStyle.height;
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;

      // Get bounding of visible area
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = 'visible';
      var VISIBLE_FIRST = 'visibleFirst';
      if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = getVisibleArea(scrollRegion, scrollerList);
      var visibleRegionArea = getVisibleArea(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;

      // When set to `visibleFirst`,
      // the check `adjust` logic will use `visibleRegion` for check first.
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;

      // Record right & bottom align data
      popupElement.style.left = 'auto';
      popupElement.style.top = 'auto';
      popupElement.style.right = '0';
      popupElement.style.bottom = '0';
      var popupMirrorRect = popupElement.getBoundingClientRect();

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;

      // Calculate scale
      var _scaleX = toNum(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      var _scaleY = toNum(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (_scaleX === 0 || _scaleY === 0 || (0,findDOMNode/* isDOM */.S)(target) && !(0,isVisible/* default */.Z)(target)) {
        return;
      }

      // Offset
      var offset = placementInfo.offset,
        targetOffset = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset),
        _getNumberOffset2 = (0,slicedToArray/* default */.Z)(_getNumberOffset, 2),
        popupOffsetX = _getNumberOffset2[0],
        popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset),
        _getNumberOffset4 = (0,slicedToArray/* default */.Z)(_getNumberOffset3, 2),
        targetOffsetX = _getNumberOffset4[0],
        targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;

      // Points
      var _ref3 = placementInfo.points || [],
        _ref4 = (0,slicedToArray/* default */.Z)(_ref3, 2),
        popupPoint = _ref4[0],
        targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      var nextAlignInfo = (0,objectSpread2/* default */.Z)({}, placementInfo);

      // Next Offset
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : visibleArea;
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, area.left);
        var visibleT = Math.max(t, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // As `visibleFirst`, we prepare this for check
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);

      // ========================== Overflow ===========================
      var targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      var popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      var targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      var popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust(val) {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }

      // >>>>>>>>>> Left & Right
      var needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      var sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }

      // ============================ Shift ============================
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top;
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 ? void 0 : onPopupAlign(popupEle, nextAlignInfo);

      // Additional calculate right & bottom position
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      });
    }
  });
  var triggerAlign = function triggerAlign() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  var resetReady = function resetReady() {
    setOffsetInfo(function (ori) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, ori), {}, {
        ready: false
      });
    });
  };
  (0,useLayoutEffect/* default */.Z)(resetReady, [placement]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/hooks/useWatch.js



function useWatch(open, target, popup, onAlign) {
  (0,useLayoutEffect/* default */.Z)(function () {
    if (open && target && popup) {
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = collectScroller(targetElement);
      var popupScrollList = collectScroller(popupElement);
      var win = getWin(popupElement);
      var mergedList = new Set([win].concat((0,toConsumableArray/* default */.Z)(targetScrollList), (0,toConsumableArray/* default */.Z)(popupScrollList)));
      function notifyScroll() {
        onAlign();
      }
      mergedList.forEach(function (scroller) {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return function () {
        mergedList.forEach(function (scroller) {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/index.js
var rc_util_es = __webpack_require__(88380);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(18383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/hooks/useWinClick.js






function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = react.useRef(open);

  // Window click to hide should be lock to avoid trigger lock immediately
  var lockRef = react.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  react.useEffect(function () {
    var id = (0,raf/* default */.Z)(function () {
      lockRef.current = false;
    });
    return function () {
      raf/* default */.Z.cancel(id);
    };
  }, [open]);

  // Click to hide is special action since click popup element should not hide
  react.useEffect(function () {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var genClickEvents = function genClickEvents() {
        var clickInside = false;

        // User may mouseDown inside and drag out of popup and mouse up
        // Record here to prevent close
        var onWindowMouseDown = function onWindowMouseDown(_ref) {
          var target = _ref.target;
          clickInside = inPopupOrChild(target);
        };
        var onWindowClick = function onWindowClick(_ref2) {
          var target = _ref2.target;
          if (!lockRef.current && openRef.current && !clickInside && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        return [onWindowMouseDown, onWindowClick];
      };

      // Events
      var _genClickEvents = genClickEvents(),
        _genClickEvents2 = (0,slicedToArray/* default */.Z)(_genClickEvents, 2),
        onWinMouseDown = _genClickEvents2[0],
        onWinClick = _genClickEvents2[1];
      var _genClickEvents3 = genClickEvents(),
        _genClickEvents4 = (0,slicedToArray/* default */.Z)(_genClickEvents3, 2),
        onShadowMouseDown = _genClickEvents4[0],
        onShadowClick = _genClickEvents4[1];
      var win = getWin(popupEle);
      win.addEventListener('mousedown', onWinMouseDown);
      win.addEventListener('click', onWinClick);
      win.addEventListener('contextmenu', onWinClick);

      // shadow root
      var targetShadowRoot = (0,shadow/* getShadowRoot */.A)(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onShadowMouseDown);
        targetShadowRoot.addEventListener('click', onShadowClick);
        targetShadowRoot.addEventListener('contextmenu', onShadowClick);
      }

      // Warning if target and popup not in same root
      if (false) { var popupRoot, targetRoot, _targetEle$getRootNod, _popupEle$getRootNode; }
      return function () {
        win.removeEventListener('mousedown', onWinMouseDown);
        win.removeEventListener('click', onWinClick);
        win.removeEventListener('contextmenu', onWinClick);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onShadowMouseDown);
          targetShadowRoot.removeEventListener('click', onShadowClick);
          targetShadowRoot.removeEventListener('contextmenu', onShadowClick);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(13199);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/Popup/Arrow.js


function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    arrow = props.arrow,
    arrowPos = props.arrowPos;
  var _ref = arrow || {},
    className = _ref.className,
    content = _ref.content;
  var _arrowPos$x = arrowPos.x,
    x = _arrowPos$x === void 0 ? 0 : _arrowPos$x,
    _arrowPos$y = arrowPos.y,
    y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = react.useRef();

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: arrowRef,
    className: classnames_default()("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/Popup/Mask.js




function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames_default()("".concat(prefixCls, "-mask"), className)
    });
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/Popup/PopupContent.js

var PopupContent = /*#__PURE__*/react.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, next) {
  return next.cache;
});
if (false) {}
/* harmony default export */ var Popup_PopupContent = (PopupContent);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/Popup/index.js












var Popup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    arrowPos = props.arrowPos,
    align = props.align,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    offsetR = props.offsetR,
    offsetB = props.offsetB,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  var isNodeVisible = open || keepDom;

  // ======================= Container ========================
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = react.useState(!getPopupContainer || !getPopupContainerNeedParams),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];

  // Delay to show since `getPopupContainer` need target element
  (0,useLayoutEffect/* default */.Z)(function () {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Offset
  var AUTO = 'auto';
  var offsetStyle = {
    left: '-1000vw',
    top: '-1000vh',
    right: AUTO,
    bottom: AUTO
  };

  // Set align style
  if (ready || !open) {
    var points = align.points,
      _experimental = align._experimental;
    var dynamicInset = _experimental === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset;
    var alignRight = dynamicInset && points[0][1] === 'r';
    var alignBottom = dynamicInset && points[0][0] === 'b';
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }

  // >>>>> Misc
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/react.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function () {
      return getPopupContainer(target);
    },
    autoDestroy: autoDestroy
  }, /*#__PURE__*/react.createElement(Mask, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mask,
    motion: maskMotion
  }), /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onAlign,
    disabled: !open
  }, function (resizeObserverRef) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 ? void 0 : (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 ? void 0 : _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var cls = classnames_default()(prefixCls, motionClassName, className);
      return /*#__PURE__*/react.createElement("div", {
        ref: (0,es_ref/* composeRef */.sQ)(resizeObserverRef, ref, motionRef),
        className: cls,
        style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
          '--arrow-x': "".concat(arrowPos.x || 0, "px"),
          '--arrow-y': "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: 'border-box',
          zIndex: zIndex
        }, style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onClick: onClick
      }, arrow && /*#__PURE__*/react.createElement(Arrow, {
        prefixCls: prefixCls,
        arrow: arrow,
        arrowPos: arrowPos,
        align: align
      }), /*#__PURE__*/react.createElement(Popup_PopupContent, {
        cache: !open
      }, childNode));
    });
  }));
});
if (false) {}
/* harmony default export */ var es_Popup = (Popup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/TriggerWrapper.js


var TriggerWrapper = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = (0,es_ref/* supportRef */.Yr)(children);

  // When use `getTriggerDOMNode`, we should do additional work to get the real dom
  var setRef = react.useCallback(function (node) {
    (0,es_ref/* fillRef */.mH)(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(setRef, children.ref);
  return canUseRef ? /*#__PURE__*/react.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (false) {}
/* harmony default export */ var es_TriggerWrapper = (TriggerWrapper);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/index.js



var _excluded = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];



















// Removed Props List
// Seems this can be auto
// getDocument?: (element?: HTMLElement) => Document;
// New version will not wrap popup with `rc-trigger-popup-content` when multiple children
function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : es;
  var Trigger = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? 'hover' : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;

    // =========================== Mobile ===========================
    var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    (0,useLayoutEffect/* default */.Z)(function () {
      setMobile((0,isMobile/* default */.Z)());
    }, []);

    // ========================== Context ===========================
    var subPopupElements = react.useRef({});
    var parentContext = react.useContext(es_context);
    var context = react.useMemo(function () {
      return {
        registerSubPopup: function registerSubPopup(id, subPopupEle) {
          subPopupElements.current[id] = subPopupEle;
          parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // =========================== Popup ============================
    var id = (0,useId/* default */.Z)();
    var _React$useState3 = react.useState(null),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];
    var setPopupRef = (0,useEvent/* default */.Z)(function (node) {
      if ((0,findDOMNode/* isDOM */.S)(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 ? void 0 : parentContext.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    var _React$useState5 = react.useState(null),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];
    var setTargetRef = (0,useEvent/* default */.Z)(function (node) {
      if ((0,findDOMNode/* isDOM */.S)(node) && targetEle !== node) {
        setTargetEle(node);
      }
    });

    // ========================== Children ==========================
    var child = react.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = (0,useEvent/* default */.Z)(function (ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = (0,shadow/* getShadowRoot */.A)(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = (0,shadow/* getShadowRoot */.A)(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function (subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });

    // =========================== Motion ===========================
    var mergePopupMotion = getMotion(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = getMotion(prefixCls, maskMotion, maskAnimation, maskTransitionName);

    // ============================ Open ============================
    var _React$useState7 = react.useState(defaultPopupVisible || false),
      _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];

    // Render still use props as first priority
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;

    // We use effect sync here in case `popupVisible` back to `undefined`
    var setMergedOpen = (0,useEvent/* default */.Z)(function (nextOpen) {
      if (popupVisible === undefined) {
        setInternalOpen(nextOpen);
      }
    });
    (0,useLayoutEffect/* default */.Z)(function () {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = react.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var internalTriggerOpen = (0,useEvent/* default */.Z)(function (nextOpen) {
      if (mergedOpen !== nextOpen) {
        setMergedOpen(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 ? void 0 : onPopupVisibleChange(nextOpen);
      }
    });

    // Trigger for delay
    var delayRef = react.useRef();
    var clearDelay = function clearDelay() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1000);
      }
    };
    react.useEffect(function () {
      return clearDelay;
    }, []);

    // ========================== Motion ============================
    var _React$useState9 = react.useState(false),
      _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    (0,useLayoutEffect/* default */.Z)(function (firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = react.useState(null),
      _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];

    // =========================== Align ============================
    var _React$useState13 = react.useState([0, 0]),
      _React$useState14 = (0,slicedToArray/* default */.Z)(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = useAlign(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign),
      _useAlign2 = (0,slicedToArray/* default */.Z)(_useAlign, 11),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      offsetR = _useAlign2[3],
      offsetB = _useAlign2[4],
      arrowX = _useAlign2[5],
      arrowY = _useAlign2[6],
      scaleX = _useAlign2[7],
      scaleY = _useAlign2[8],
      alignInfo = _useAlign2[9],
      onAlign = _useAlign2[10];
    var triggerAlign = (0,useEvent/* default */.Z)(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    useWatch(mergedOpen, targetEle, popupEle, triggerAlign);
    (0,useLayoutEffect/* default */.Z)(function () {
      triggerAlign();
    }, [mousePos, popupPlacement]);

    // When no builtinPlacements and popupAlign changed
    (0,useLayoutEffect/* default */.Z)(function () {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = react.useMemo(function () {
      var baseClassName = getAlignPopupClassName(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return classnames_default()(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);
    react.useImperativeHandle(ref, function () {
      return {
        forceAlign: triggerAlign
      };
    });

    // ========================== Motion ============================
    var onVisibleChanged = function onVisibleChanged(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 ? void 0 : afterPopupVisibleChange(visible);
    };

    // We will trigger align when motion is in prepare
    var onPrepare = function onPrepare() {
      return new Promise(function (resolve) {
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    (0,useLayoutEffect/* default */.Z)(function () {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // ========================== Stretch ===========================
    var _React$useState15 = react.useState(0),
      _React$useState16 = (0,slicedToArray/* default */.Z)(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = react.useState(0),
      _React$useState18 = (0,slicedToArray/* default */.Z)(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var onTargetResize = function onTargetResize(_, ele) {
      triggerAlign();
      if (stretch) {
        var rect = ele.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };

    // =========================== Action ===========================
    var _useAction = useAction(mobile, action, showAction, hideAction),
      _useAction2 = (0,slicedToArray/* default */.Z)(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];

    // Util wrapper for trigger action
    var wrapperAction = function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 ? void 0 : preEvent(event);
        triggerOpen(nextOpen, delay);

        // Pass to origin
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 ? void 0 : _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    };

    // ======================= Action: Click ========================
    var clickToShow = showActions.has('click');
    var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 ? void 0 : _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }

    // Click to hide is special action since click popup element should not hide
    useWinClick(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);

    // ======================= Action: Hover ========================
    var hoverToShow = showActions.has('hover');
    var hoverToHide = hideActions.has('hover');
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      wrapperAction('onMouseEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter() {
        triggerOpen(true, mouseEnterDelay);
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          // setMousePosByEvent(event);
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 ? void 0 : _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has('contextMenu')) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();

        // Pass to origin
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 ? void 0 : _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }

    // ========================= ClassName ==========================
    if (className) {
      cloneProps.className = classnames_default()(originChildProps.className, className);
    }

    // =========================== Render ===========================
    var mergedChildrenProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, originChildProps), cloneProps);

    // Pass props into cloneProps for nest usage
    var passedProps = {};
    var passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 ? void 0 : _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });

    // Child Node
    var triggerNode = /*#__PURE__*/react.cloneElement(child, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? (0,objectSpread2/* default */.Z)({}, arrow !== true ? arrow : {}) : null;

    // Render
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /*#__PURE__*/react.createElement(es_TriggerWrapper, {
      getTriggerDOMNode: getTriggerDOMNode
    }, triggerNode)), /*#__PURE__*/react.createElement(es_context.Provider, {
      value: context
    }, /*#__PURE__*/react.createElement(es_Popup, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: classnames_default()(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion
      // Click
      ,
      onClick: onPopupClick
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer
      // Arrow
      ,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos: arrowPos
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      offsetR: offsetR,
      offsetB: offsetB,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (false) {}
  return Trigger;
}
/* harmony default export */ var trigger_es = (generateTrigger(es));

/***/ }),

/***/ 474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_dropdown_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(58216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29245);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(66818);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/index.js + 18 modules
var es = __webpack_require__(25784);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(52053);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(18383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/hooks/useAccessibility.js



var ESC = KeyCode/* default */.Z.ESC,
  TAB = KeyCode/* default */.Z.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus,
    overlayRef = _ref.overlayRef;
  var focusMenuRef = react.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus() {
    if (visible) {
      var _triggerRef$current, _triggerRef$current$f;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 ? void 0 : (_triggerRef$current$f = _triggerRef$current.focus) === null || _triggerRef$current$f === void 0 ? void 0 : _triggerRef$current$f.call(_triggerRef$current);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(false);
    }
  };
  var focusMenu = function focusMenu() {
    var _overlayRef$current;
    if ((_overlayRef$current = overlayRef.current) !== null && _overlayRef$current !== void 0 && _overlayRef$current.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB:
        {
          var focusResult = false;
          if (!focusMenuRef.current) {
            focusResult = focusMenu();
          }
          if (focusResult) {
            event.preventDefault();
          } else {
            handleCloseMenuAndReturnFocus();
          }
          break;
        }
    }
  };
  react.useEffect(function () {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        // FIXME: hack with raf
        (0,raf/* default */.Z)(focusMenu, 3);
      }
      return function () {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return function () {
      focusMenuRef.current = false;
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/Overlay.js


var Overlay = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var overlay = props.overlay,
    arrow = props.arrow,
    prefixCls = props.prefixCls;
  var overlayNode = (0,react.useMemo)(function () {
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  var composedRef = (0,es_ref/* composeRef */.sQ)(ref, overlayNode === null || overlayNode === void 0 ? void 0 : overlayNode.ref);
  return /*#__PURE__*/react.createElement(react.Fragment, null, arrow && /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-arrow")
  }), /*#__PURE__*/react.cloneElement(overlayNode, {
    ref: (0,es_ref/* supportRef */.Yr)(overlayNode) ? composedRef : undefined
  }));
});
/* harmony default export */ var es_Overlay = (Overlay);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ var es_placements = (placements);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/Dropdown.js




var _excluded = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];







function Dropdown(props, ref) {
  var _children$props;
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements = _props$placements === void 0 ? es_placements : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    overlay = props.overlay,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    otherProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react.useRef(null);
  var overlayRef = react.useRef(null);
  var childRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });
  var handleVisibleChange = function handleVisibleChange(newVisible) {
    setTriggerVisible(newVisible);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(newVisible);
  };
  useAccessibility({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus: autoFocus,
    overlayRef: overlayRef
  });
  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var getMenuElement = function getMenuElement() {
    return /*#__PURE__*/react.createElement(es_Overlay, {
      ref: overlayRef,
      overlay: overlay,
      prefixCls: prefixCls,
      arrow: arrow
    });
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;
    if (openClassName !== undefined) {
      return openClassName;
    }
    return "".concat(prefixCls, "-open");
  };
  var childrenNode = /*#__PURE__*/react.cloneElement(children, {
    className: classnames_default()((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.className, mergedVisible && getOpenClassName()),
    ref: (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)(childRef, children.ref) : undefined
  });
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    builtinPlacements: placements
  }, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer: getPopupContainer
  }), childrenNode);
}
/* harmony default export */ var es_Dropdown = (/*#__PURE__*/react.forwardRef(Dropdown));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/index.js

/* harmony default export */ var rc_dropdown_es = (es_Dropdown);

/***/ })

}]);