"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-915e7c66"],{

/***/ 51244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  iz: function() { return /* reexport */ Divider; },
  ck: function() { return /* reexport */ es_MenuItem; },
  BW: function() { return /* reexport */ MenuItemGroup; },
  sN: function() { return /* reexport */ es_MenuItem; },
  GP: function() { return /* reexport */ MenuItemGroup; },
  Wd: function() { return /* reexport */ SubMenu; },
  ZP: function() { return /* binding */ rc_menu_es; },
  Xl: function() { return /* reexport */ useFullPath; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(58216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49919);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(23190);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29245);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(66818);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(76957);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(90429);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/Item.js



var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];



// Use shared variable to save bundle size
var UNDEFINED = undefined;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var mergedHidden = responsive && !display;
  // ================================ Effect ================================
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []);
  // ================================ Render ================================
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);
  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ var es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(47737);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(10422);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(18383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/hooks/channelUpdate.js

function channelUpdate(callback) {
  if (typeof MessageChannel === 'undefined') {
    (0,raf/* default */.Z)(callback);
  } else {
    var channel = new MessageChannel();
    channel.port1.onmessage = function () {
      return callback();
    };
    channel.port2.postMessage(undefined);
  }
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/hooks/useEffectState.js





/**
 * Batcher for record any `useEffectState` need update.
 */
function useBatcher() {
  // Updater Trigger
  var updateFuncRef = react.useRef(null);
  // Notify update
  var notifyEffectUpdate = function notifyEffectUpdate(callback) {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(function () {
        (0,react_dom.unstable_batchedUpdates)(function () {
          updateFuncRef.current.forEach(function (fn) {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
/**
 * Trigger state update by `useLayoutEffect` to save perf.
 */
function useEffectState(notifyEffectUpdate, defaultValue) {
  // Value
  var _React$useState = react.useState(defaultValue),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    stateValue = _React$useState2[0],
    setStateValue = _React$useState2[1];
  // Set State
  var setEffectVal = (0,useEvent/* default */.Z)(function (nextValue) {
    notifyEffectUpdate(function () {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/context.js

var OverflowContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/RawItem.js


var RawItem_excluded = ["component"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];




var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext);
  // Render directly when context not provided
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = (0,objectWithoutProperties/* default */.Z)(props, RawItem_excluded);
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }
  var contextClassName = context.className,
    restContext = (0,objectWithoutProperties/* default */.Z)(context, _excluded2);
  var className = props.className,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded3);
  // Do not pass context to sub item to avoid multiple measure
  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ var es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/Overflow.js




var Overflow_excluded = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"];









var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, Overflow_excluded);
  var fullySSR = ssr === 'full';
  var notifyEffectUpdate = useBatcher();
  var _useEffectState = useEffectState(notifyEffectUpdate, null),
    _useEffectState2 = (0,slicedToArray/* default */.Z)(_useEffectState, 2),
    containerWidth = _useEffectState2[0],
    setContainerWidth = _useEffectState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _useEffectState3 = useEffectState(notifyEffectUpdate, new Map()),
    _useEffectState4 = (0,slicedToArray/* default */.Z)(_useEffectState3, 2),
    itemWidths = _useEffectState4[0],
    setItemWidths = _useEffectState4[1];
  var _useEffectState5 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState6 = (0,slicedToArray/* default */.Z)(_useEffectState5, 2),
    prevRestWidth = _useEffectState6[0],
    setPrevRestWidth = _useEffectState6[1];
  var _useEffectState7 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState8 = (0,slicedToArray/* default */.Z)(_useEffectState7, 2),
    restWidth = _useEffectState8[0],
    setRestWidth = _useEffectState8[1];
  var _useEffectState9 = useEffectState(notifyEffectUpdate, 0),
    _useEffectState10 = (0,slicedToArray/* default */.Z)(_useEffectState9, 2),
    suffixWidth = _useEffectState10[0],
    setSuffixWidth = _useEffectState10[1];
  var _useState = (0,react.useState)(null),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = (0,react.useState)(null),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = "".concat(prefixCls, "-item");
  // Always use the max width to avoid blink
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  // ================================= Data =================================
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */
  var showRest = shouldResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  // ================================= Item =================================
  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    // React 18 will sync render even when the value is same in some case.
    // We take `mergedData` as deps which may cause dead loop if it's dynamic generate.
    // ref: https://github.com/ant-design/ant-design/issues/36559
    if (displayCount === count && (suffixFixedStartVal === undefined || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== undefined) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  // ================================= Size =================================
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  // ================================ Effect ================================
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  (0,useLayoutEffect/* default */.Z)(function () {
    if (mergedContainerWidth && typeof mergedRestWidth === 'number' && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1;
      // When data count change to 0, reset this since not loop will reach
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i);
        // Fully will always render
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        // Break since data not ready
        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, undefined, true);
          break;
        }
        // Find best match
        totalWidth += currentItemWidth;
        if (
        // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth ||
        // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]);
  // ================================ Render ================================
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate: invalidate
  };
  // >>>>> Choice render fun by `renderRawItem`
  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  // >>>>> Rest node
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }
  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  if (isResponsive) {
    overflowNode = /*#__PURE__*/react.createElement(es/* default */.Z, {
      onResize: onOverflowResize,
      disabled: !shouldResponsive
    }, overflowNode);
  }
  return overflowNode;
}
var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
// Convert to generic type
/* harmony default export */ var es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-overflow@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-overflow/es/index.js

/* harmony default export */ var rc_overflow_es = (es_Overflow);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(89174);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(37543);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(33795);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/context/IdContext.js

var IdContext = /*#__PURE__*/react.createContext(null);
function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }
  return "".concat(uuid, "-").concat(eventKey);
}

/**
 * Get `data-menu-id`
 */
function useMenuId(eventKey) {
  var id = react.useContext(IdContext);
  return getMenuId(id, eventKey);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(7477);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/context/MenuContext.js


var MenuContext_excluded = ["children", "locked"];



var MenuContext = /*#__PURE__*/react.createContext(null);
function mergeProps(origin, target) {
  var clone = (0,objectSpread2/* default */.Z)({}, origin);
  Object.keys(target).forEach(function (key) {
    var value = target[key];
    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}
function InheritableContextProvider(_ref) {
  var children = _ref.children,
    locked = _ref.locked,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, MenuContext_excluded);
  var context = react.useContext(MenuContext);
  var inheritableContext = (0,useMemo/* default */.Z)(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !(0,isEqual/* default */.Z)(prev[1], next[1], true));
  });
  return /*#__PURE__*/react.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/context/PathContext.js


var EmptyList = [];

// ========================= Path Register =========================

var PathRegisterContext = /*#__PURE__*/react.createContext(null);
function useMeasure() {
  return react.useContext(PathRegisterContext);
}

// ========================= Path Tracker ==========================
var PathTrackerContext = /*#__PURE__*/react.createContext(EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = react.useContext(PathTrackerContext);
  return react.useMemo(function () {
    return eventKey !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}

// =========================== Path User ===========================

var PathUserContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/context/PrivateContext.js

var PrivateContext = /*#__PURE__*/react.createContext({});
/* harmony default export */ var context_PrivateContext = (PrivateContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(52053);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/focus.js
var Dom_focus = __webpack_require__(73435);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useAccessibility.js







// destruct to reduce minify size
var LEFT = KeyCode/* default */.Z.LEFT,
  RIGHT = KeyCode/* default */.Z.RIGHT,
  UP = KeyCode/* default */.Z.UP,
  DOWN = KeyCode/* default */.Z.DOWN,
  ENTER = KeyCode/* default */.Z.ENTER,
  ESC = KeyCode/* default */.Z.ESC,
  HOME = KeyCode/* default */.Z.HOME,
  END = KeyCode/* default */.Z.END;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];
function getOffset(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets;
  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent';

  // Inline enter is special that we use unique operation
  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }
  var inline = (_inline = {}, (0,defineProperty/* default */.Z)(_inline, UP, prev), (0,defineProperty/* default */.Z)(_inline, DOWN, next), _inline);
  var horizontal = (_horizontal = {}, (0,defineProperty/* default */.Z)(_horizontal, LEFT, isRtl ? next : prev), (0,defineProperty/* default */.Z)(_horizontal, RIGHT, isRtl ? prev : next), (0,defineProperty/* default */.Z)(_horizontal, DOWN, children), (0,defineProperty/* default */.Z)(_horizontal, ENTER, children), _horizontal);
  var vertical = (_vertical = {}, (0,defineProperty/* default */.Z)(_vertical, UP, prev), (0,defineProperty/* default */.Z)(_vertical, DOWN, next), (0,defineProperty/* default */.Z)(_vertical, ENTER, children), (0,defineProperty/* default */.Z)(_vertical, ESC, parent), (0,defineProperty/* default */.Z)(_vertical, LEFT, isRtl ? children : parent), (0,defineProperty/* default */.Z)(_vertical, RIGHT, isRtl ? parent : children), _vertical);
  var offsets = {
    inline: inline,
    horizontal: horizontal,
    vertical: vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets === void 0 ? void 0 : _offsets[which];
  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };
    case next:
      return {
        offset: 1,
        sibling: true
      };
    case parent:
      return {
        offset: -1,
        sibling: false
      };
    case children:
      return {
        offset: 1,
        sibling: false
      };
    default:
      return null;
  }
}
function findContainerUL(element) {
  var current = element;
  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }
    current = current.parentElement;
  }

  // Normally should not reach this line
  /* istanbul ignore next */
  return null;
}

/**
 * Find focused element within element set provided
 */
function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;
  while (current) {
    if (elements.has(current)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}

/**
 * Get focusable elements from the element set under provided container
 */
function getFocusableElements(container, elements) {
  var list = (0,Dom_focus/* getFocusNodeList */.tS)(container, true);
  return list.filter(function (ele) {
    return elements.has(ele);
  });
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  // Key on the menu item will not get validate parent container
  if (!parentQueryContainer) {
    return null;
  }

  // List current level menu item elements
  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);

  // Find next focus index
  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function (ele) {
    return focusMenuElement === ele;
  });
  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }
  focusIndex = (focusIndex + count) % count;

  // Focus menu item
  return sameLevelFocusableMenuElementList[focusIndex];
}
function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = react.useRef();
  var activeRef = react.useRef();
  activeRef.current = activeKey;
  var cleanRaf = function cleanRaf() {
    raf/* default */.Z.cancel(rafRef.current);
  };
  react.useEffect(function () {
    return function () {
      cleanRaf();
    };
  }, []);
  return function (e) {
    var which = e.which;
    if ([].concat(ArrowKeys, [ENTER, ESC, HOME, END]).includes(which)) {
      // Convert key to elements
      var elements;
      var key2element;
      var element2key;

      // >>> Wrap as function since we use raf for some case
      var refreshElements = function refreshElements() {
        elements = new Set();
        key2element = new Map();
        element2key = new Map();
        var keys = getKeys();
        keys.forEach(function (key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));
          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };
      refreshElements();

      // First we should find current focused MenuItem/SubMenu element
      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);

      // Some mode do not have fully arrow operation like inline
      if (!offsetObj && which !== HOME && which !== END) {
        return;
      }

      // Arrow prevent default to avoid page scroll
      if (ArrowKeys.includes(which) || [HOME, END].includes(which)) {
        e.preventDefault();
      }
      var tryFocus = function tryFocus(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement;

          // Focus to link instead of menu item if possible
          var link = menuElement.querySelector('a');
          if (link !== null && link !== void 0 && link.getAttribute('href')) {
            focusTargetElement = link;
          }
          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);

          /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */
          cleanRaf();
          rafRef.current = (0,raf/* default */.Z)(function () {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };
      if ([HOME, END].includes(which) || offsetObj.sibling || !focusMenuElement) {
        // ========================== Sibling ==========================
        // Find walkable focus menu element container
        var parentQueryContainer;
        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        }

        // Get next focus element
        var targetElement;
        var focusableElements = getFocusableElements(parentQueryContainer, elements);
        if (which === HOME) {
          targetElement = focusableElements[0];
        } else if (which === END) {
          targetElement = focusableElements[focusableElements.length - 1];
        } else {
          targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
        }
        // Focus menu item
        tryFocus(targetElement);

        // ======================= InlineTrigger =======================
      } else if (offsetObj.inlineTrigger) {
        // Inline trigger no need switch to sub menu item
        triggerAccessibilityOpen(focusMenuKey);
        // =========================== Level ===========================
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = (0,raf/* default */.Z)(function () {
          // Async should resync elements
          refreshElements();
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId);

          // Get sub focusable menu item
          var targetElement = getNextFocusElement(subQueryContainer, elements);

          // Focus menu item
          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey);

        // Focus menu item
        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    }

    // Pass origin key down event
    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e);
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/utils/timeUtil.js
function nextSlice(callback) {
  /* istanbul ignore next */
  Promise.resolve().then(callback);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useKeyRecords.js






var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';
var getPathStr = function getPathStr(keyPath) {
  return keyPath.join(PATH_SPLIT);
};
var getPathKeys = function getPathKeys(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};
var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = react.useState({}),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    internalForceUpdate = _React$useState2[1];
  var key2pathRef = (0,react.useRef)(new Map());
  var path2keyRef = (0,react.useRef)(new Map());
  var _React$useState3 = react.useState([]),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    overflowKeys = _React$useState4[0],
    setOverflowKeys = _React$useState4[1];
  var updateRef = (0,react.useRef)(0);
  var destroyRef = (0,react.useRef)(false);
  var forceUpdate = function forceUpdate() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };
  var registerPath = (0,react.useCallback)(function (key, keyPath) {
    // Warning for invalidate or duplicated `key`
    if (false) {}

    // Fill map
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function () {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = (0,react.useCallback)(function (key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = (0,react.useCallback)(function (keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = (0,react.useCallback)(function (eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || '';
    var keys = getPathKeys(fullPath);
    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }
    return keys;
  }, [overflowKeys]);
  var isSubPathKey = (0,react.useCallback)(function (pathKeys, eventKey) {
    return pathKeys.some(function (pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);
  var getKeys = function getKeys() {
    var keys = (0,toConsumableArray/* default */.Z)(key2pathRef.current.keys());
    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }
    return keys;
  };

  /**
   * Find current key related child path keys
   */
  var getSubPathKeys = (0,react.useCallback)(function (key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = new Set();
    (0,toConsumableArray/* default */.Z)(path2keyRef.current.keys()).forEach(function (pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });
    return pathKeys;
  }, []);
  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath: registerPath,
    unregisterPath: unregisterPath,
    refreshOverflowKeys: refreshOverflowKeys,
    // Util
    isSubPathKey: isSubPathKey,
    getKeyPath: getKeyPath,
    getKeys: getKeys,
    getSubPathKeys: getSubPathKeys
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useMemoCallback.js


/**
 * Cache callback function that always return same ref instead.
 * This is used for context optimization.
 */
function useMemoCallback(func) {
  var funRef = react.useRef(func);
  funRef.current = func;
  var callback = react.useCallback(function () {
    var _funRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : undefined;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useUUID.js



var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = (0,useMergedState/* default */.Z)(id, {
      value: id
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    uuid = _useMergedState2[0],
    setUUID = _useMergedState2[1];
  react.useEffect(function () {
    internalId += 1;
    var newId =  false ? 0 : "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(87989);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51852);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(21279);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(27597);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(47740);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useActive.js


function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = react.useContext(MenuContext),
    activeKey = _React$useContext.activeKey,
    onActive = _React$useContext.onActive,
    onInactive = _React$useContext.onInactive;
  var ret = {
    active: activeKey === eventKey
  };

  // Skip when disabled
  if (!disabled) {
    ret.onMouseEnter = function (domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        key: eventKey,
        domEvent: domEvent
      });
      onActive(eventKey);
    };
    ret.onMouseLeave = function (domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        key: eventKey,
        domEvent: domEvent
      });
      onInactive(eventKey);
    };
  }
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/hooks/useDirectionStyle.js


function useDirectionStyle(level) {
  var _React$useContext = react.useContext(MenuContext),
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl,
    inlineIndent = _React$useContext.inlineIndent;
  if (mode !== 'inline') {
    return null;
  }
  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/Icon.js


function Icon(_ref) {
  var icon = _ref.icon,
    props = _ref.props,
    children = _ref.children;
  var iconNode;
  if (typeof icon === 'function') {
    iconNode = /*#__PURE__*/react.createElement(icon, (0,objectSpread2/* default */.Z)({}, props));
  } else {
    // Compatible for origin definition
    iconNode = icon;
  }
  return iconNode || children || null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/utils/warnUtil.js

var warnUtil_excluded = ["item"];


/**
 * `onClick` event return `info.item` which point to react node directly.
 * We should warning this since it will not work on FC.
 */
function warnItemProp(_ref) {
  var item = _ref.item,
    restInfo = (0,objectWithoutProperties/* default */.Z)(_ref, warnUtil_excluded);
  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      (0,warning/* default */.ZP)(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
      return item;
    }
  });
  return restInfo;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/MenuItem.js









var MenuItem_excluded = ["title", "attribute", "elementRef"],
  MenuItem_excluded2 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
  MenuItem_excluded3 = ["active"];















// Since Menu event provide the `info.item` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.
var LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LegacyMenuItem, _React$Component);
  var _super = (0,createSuper/* default */.Z)(LegacyMenuItem);
  function LegacyMenuItem() {
    (0,classCallCheck/* default */.Z)(this, LegacyMenuItem);
    return _super.apply(this, arguments);
  }
  (0,createClass/* default */.Z)(LegacyMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        title = _this$props.title,
        attribute = _this$props.attribute,
        elementRef = _this$props.elementRef,
        restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, MenuItem_excluded);

      // Here the props are eventually passed to the DOM element.
      // React does not recognize non-standard attributes.
      // Therefore, remove the props that is not used here.
      // ref: https://github.com/ant-design/ant-design/issues/41395
      var passedProps = (0,omit/* default */.Z)(restProps, ['eventKey', 'popupClassName', 'popupOffset', 'onTitleClick']);
      (0,warning/* default */.ZP)(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
      return /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({}, attribute, {
        title: typeof title === 'string' ? title : undefined
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);
  return LegacyMenuItem;
}(react.Component);
/**
 * Real Menu Item component
 */
var InternalMenuItem = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;
  var style = props.style,
    className = props.className,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    itemIcon = props.itemIcon,
    children = props.children,
    role = props.role,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, MenuItem_excluded2);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    onItemClick = _React$useContext.onItemClick,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    contextItemIcon = _React$useContext.itemIcon,
    selectedKeys = _React$useContext.selectedKeys,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = react.useContext(context_PrivateContext),
    _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;
  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = react.useRef();
  var elementRef = react.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var mergedEleRef = (0,es_ref/* useComposeRef */.x1)(ref, elementRef);
  var connectedKeys = useFullPath(eventKey);

  // ================================ Warn ================================
  if (false) {}

  // ============================= Info =============================
  var getEventInfo = function getEventInfo(e) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: (0,toConsumableArray/* default */.Z)(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  };

  // ============================= Icon =============================
  var mergedItemIcon = itemIcon || contextItemIcon;

  // ============================ Active ============================
  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
    active = _useActive.active,
    activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, MenuItem_excluded3);

  // ============================ Select ============================
  var selected = selectedKeys.includes(eventKey);

  // ======================== DirectionStyle ========================
  var directionStyle = useDirectionStyle(connectedKeys.length);

  // ============================ Events ============================
  var onInternalClick = function onInternalClick(e) {
    if (mergedDisabled) {
      return;
    }
    var info = getEventInfo(e);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };
  var onInternalKeyDown = function onInternalKeyDown(e) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    if (e.which === KeyCode/* default */.Z.ENTER) {
      var info = getEventInfo(e);

      // Legacy. Key will also trigger click event
      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };

  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */
  var onInternalFocus = function onInternalFocus(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };

  // ============================ Render ============================
  var optionRoleProps = {};
  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }
  var renderNode = /*#__PURE__*/react.createElement(LegacyMenuItem, (0,esm_extends/* default */.Z)({
    ref: legacyMenuItemRef,
    elementRef: mergedEleRef,
    role: role === null ? 'none' : role || 'menuitem',
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, restProps, activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, directionStyle), style),
    className: classnames_default()(itemCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-selected"), selected), (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /*#__PURE__*/react.createElement(Icon, {
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
  if (_internalRenderMenuItem) {
    renderNode = _internalRenderMenuItem(renderNode, props, {
      selected: selected
    });
  }
  return renderNode;
});
function MenuItem(props, ref) {
  var eventKey = props.eventKey;

  // ==================== Record KeyPath ====================
  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey);

  // eslint-disable-next-line consistent-return
  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  if (measure) {
    return null;
  }

  // ======================== Render ========================
  return /*#__PURE__*/react.createElement(InternalMenuItem, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref
  }));
}
/* harmony default export */ var es_MenuItem = (/*#__PURE__*/react.forwardRef(MenuItem));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/SubMenu/SubMenuList.js


var SubMenuList_excluded = ["className", "children"];



var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, SubMenuList_excluded);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl;
  return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className),
    role: "menu"
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};
var SubMenuList = /*#__PURE__*/react.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
/* harmony default export */ var SubMenu_SubMenuList = (SubMenuList);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(88143);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(1726);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/utils/nodeUtil.js




var nodeUtil_excluded = ["label", "children", "key", "type"];



function parseChildren(children, keyPath) {
  return (0,toArray/* default */.Z)(children).map(function (child, index) {
    if ( /*#__PURE__*/react.isValidElement(child)) {
      var _eventKey, _child$props;
      var key = child.key;
      var eventKey = (_eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _eventKey !== void 0 ? _eventKey : key;
      var emptyKey = eventKey === null || eventKey === undefined;
      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat((0,toConsumableArray/* default */.Z)(keyPath), [index]).join('-'));
      }
      var cloneProps = {
        key: eventKey,
        eventKey: eventKey
      };
      if (false) {}
      return /*#__PURE__*/react.cloneElement(child, cloneProps);
    }
    return child;
  });
}
function convertItemsToNodes(list) {
  return (list || []).map(function (opt, index) {
    if (opt && (0,esm_typeof/* default */.Z)(opt) === 'object') {
      var _ref = opt,
        label = _ref.label,
        children = _ref.children,
        key = _ref.key,
        type = _ref.type,
        restProps = (0,objectWithoutProperties/* default */.Z)(_ref, nodeUtil_excluded);
      var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index);

      // MenuItemGroup & SubMenuItem
      if (children || type === 'group') {
        if (type === 'group') {
          // Group
          return /*#__PURE__*/react.createElement(MenuItemGroup, (0,esm_extends/* default */.Z)({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children));
        }

        // Sub Menu
        return /*#__PURE__*/react.createElement(SubMenu, (0,esm_extends/* default */.Z)({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children));
      }

      // MenuItem & Divider
      if (type === 'divider') {
        return /*#__PURE__*/react.createElement(Divider, (0,esm_extends/* default */.Z)({
          key: mergedKey
        }, restProps));
      }
      return /*#__PURE__*/react.createElement(es_MenuItem, (0,esm_extends/* default */.Z)({
        key: mergedKey
      }, restProps), label);
    }
    return null;
  }).filter(function (opt) {
    return opt;
  });
}
function parseItems(children, items, keyPath) {
  var childNodes = children;
  if (items) {
    childNodes = convertItemsToNodes(items);
  }
  return parseChildren(childNodes, keyPath);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+trigger@1.14.1_react-dom@18.2.0_react@18.2.0/node_modules/@rc-component/trigger/es/index.js + 18 modules
var trigger_es = __webpack_require__(25784);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow
  },
  rightBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow
  },
  leftBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow
  }
};
/* harmony default export */ var es_placements = ((/* unused pure expression or super */ null && (placements)));
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/utils/motionUtil.js
function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }
  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }
  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/SubMenu/PopupTrigger.js










var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
    visible = _ref.visible,
    children = _ref.children,
    popup = _ref.popup,
    popupClassName = _ref.popupClassName,
    popupOffset = _ref.popupOffset,
    disabled = _ref.disabled,
    mode = _ref.mode,
    onVisibleChange = _ref.onVisibleChange;
  var _React$useContext = react.useContext(MenuContext),
    getPopupContainer = _React$useContext.getPopupContainer,
    rtl = _React$useContext.rtl,
    subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
    subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
    builtinPlacements = _React$useContext.builtinPlacements,
    triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    rootClassName = _React$useContext.rootClassName,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    innerVisible = _React$useState2[0],
    setInnerVisible = _React$useState2[1];
  var placement = rtl ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placementsRtl), builtinPlacements) : (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);
  var targetMotionRef = react.useRef(targetMotion);
  if (mode !== 'inline') {
    /**
     * PopupTrigger is only used for vertical and horizontal types.
     * When collapsed is unfolded, the inline animation will destroy the vertical animation.
     */
    targetMotionRef.current = targetMotion;
  }
  var mergedMotion = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, targetMotionRef.current), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  });

  // Delay to change visible
  var visibleRef = react.useRef();
  react.useEffect(function () {
    visibleRef.current = (0,raf/* default */.Z)(function () {
      setInnerVisible(visible);
    });
    return function () {
      raf/* default */.Z.cancel(visibleRef.current);
    };
  }, [visible]);
  return /*#__PURE__*/react.createElement(trigger_es/* default */.Z, {
    prefixCls: prefixCls,
    popupClassName: classnames_default()("".concat(prefixCls, "-popup"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName, rootClassName),
    stretch: mode === 'horizontal' ? 'minWidth' : null,
    getPopupContainer: getPopupContainer,
    builtinPlacements: placement,
    popupPlacement: popupPlacement,
    popupVisible: innerVisible,
    popup: popup,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion
  }, children);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(13199);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js








function InlineSubMenuList(_ref) {
  var id = _ref.id,
    open = _ref.open,
    keyPath = _ref.keyPath,
    children = _ref.children;
  var fixedMode = 'inline';
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions,
    mode = _React$useContext.mode;

  // Always use latest mode check
  var sameModeRef = react.useRef(false);
  sameModeRef.current = mode === fixedMode;

  // We record `destroy` mark here since when mode change from `inline` to others.
  // The inline list should remove when motion end.
  var _React$useState = react.useState(!sameModeRef.current),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    destroy = _React$useState2[0],
    setDestroy = _React$useState2[1];
  var mergedOpen = sameModeRef.current ? open : false;

  // ================================= Effect =================================
  // Reset destroy state when mode change back
  react.useEffect(function () {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]);

  // ================================= Render =================================
  var mergedMotion = (0,objectSpread2/* default */.Z)({}, getMotion(fixedMode, motion, defaultMotions));

  // No need appear since nest inlineCollapse changed
  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  }

  // Hide inline list when mode changed and motion end
  var originOnVisibleChanged = mergedMotion.onVisibleChanged;
  mergedMotion.onVisibleChanged = function (newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }
    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };
  if (destroy) {
    return null;
  }
  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function (_ref2) {
    var motionClassName = _ref2.className,
      motionStyle = _ref2.style;
    return /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
      id: id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/SubMenu/index.js





var SubMenu_excluded = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"],
  SubMenu_excluded2 = ["active"];

















var InternalSubMenu = function InternalSubMenu(props) {
  var _classNames;
  var style = props.style,
    className = props.className,
    title = props.title,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    internalPopupClose = props.internalPopupClose,
    children = props.children,
    itemIcon = props.itemIcon,
    expandIcon = props.expandIcon,
    popupClassName = props.popupClassName,
    popupOffset = props.popupOffset,
    onClick = props.onClick,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onTitleClick = props.onTitleClick,
    onTitleMouseEnter = props.onTitleMouseEnter,
    onTitleMouseLeave = props.onTitleMouseLeave,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, SubMenu_excluded);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    openKeys = _React$useContext.openKeys,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    activeKey = _React$useContext.activeKey,
    selectedKeys = _React$useContext.selectedKeys,
    contextItemIcon = _React$useContext.itemIcon,
    contextExpandIcon = _React$useContext.expandIcon,
    onItemClick = _React$useContext.onItemClick,
    onOpenChange = _React$useContext.onOpenChange,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = react.useContext(context_PrivateContext),
    _internalRenderSubMenuItem = _React$useContext2._internalRenderSubMenuItem;
  var _React$useContext3 = react.useContext(PathUserContext),
    isSubPathKey = _React$useContext3.isSubPathKey;
  var connectedPath = useFullPath();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = react.useRef();
  var popupRef = react.useRef();

  // ================================ Warn ================================
  if (false) {}

  // ================================ Icon ================================
  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon;

  // ================================ Open ================================
  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen;

  // =============================== Select ===============================
  var childrenSelected = isSubPathKey(selectedKeys, eventKey);

  // =============================== Active ===============================
  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
    active = _useActive.active,
    activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, SubMenu_excluded2);

  // Fallback of active check to avoid hover on menu title or disabled item
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    childrenActive = _React$useState2[0],
    setChildrenActive = _React$useState2[1];
  var triggerChildrenActive = function triggerChildrenActive(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };
  var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
      key: eventKey,
      domEvent: domEvent
    });
  };
  var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
      key: eventKey,
      domEvent: domEvent
    });
  };
  var mergedActive = react.useMemo(function () {
    if (active) {
      return active;
    }
    if (mode !== 'inline') {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }
    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]);

  // ========================== DirectionStyle ==========================
  var directionStyle = useDirectionStyle(connectedPath.length);

  // =============================== Events ===============================
  // >>>> Title click
  var onInternalTitleClick = function onInternalTitleClick(e) {
    // Skip if disabled
    if (mergedDisabled) {
      return;
    }
    onTitleClick === null || onTitleClick === void 0 ? void 0 : onTitleClick({
      key: eventKey,
      domEvent: e
    });

    // Trigger open by click when mode is `inline`
    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  };

  // >>>> Context for children click
  var onMergedItemClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  });

  // >>>>> Visible change
  var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };

  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */
  var onInternalFocus = function onInternalFocus() {
    onActive(eventKey);
  };

  // =============================== Render ===============================
  var popupId = domDataId && "".concat(domDataId, "-popup");

  // >>>>> Title
  var titleNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === 'string' ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, /*#__PURE__*/react.createElement(Icon, {
    icon: mode !== 'horizontal' ? mergedExpandIcon : null,
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    })
  }, /*#__PURE__*/react.createElement("i", {
    className: "".concat(subMenuPrefixCls, "-arrow")
  })));

  // Cache mode if it change to `inline` which do not have popup motion
  var triggerModeRef = react.useRef(mode);
  if (mode !== 'inline' && connectedPath.length > 1) {
    triggerModeRef.current = 'vertical';
  } else {
    triggerModeRef.current = mode;
  }
  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current;

    // Still wrap with Trigger here since we need avoid react re-mount dom node
    // Which makes motion failed
    titleNode = /*#__PURE__*/react.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== 'inline',
      popupClassName: popupClassName,
      popupOffset: popupOffset,
      popup: /*#__PURE__*/react.createElement(InheritableContextProvider
      // Special handle of horizontal mode
      , {
        mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
      }, /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
        id: popupId,
        ref: popupRef
      }, children)),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  }

  // >>>>> List node
  var listNode = /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({
    role: "none"
  }, restProps, {
    component: "li",
    style: style,
    className: classnames_default()(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-open"), open), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-active"), mergedActive), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-selected"), childrenSelected), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled), _classNames)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /*#__PURE__*/react.createElement(InlineSubMenuList, {
    id: popupId,
    open: open,
    keyPath: connectedPath
  }, children));
  if (_internalRenderSubMenuItem) {
    listNode = _internalRenderSubMenuItem(listNode, props, {
      selected: childrenSelected,
      active: mergedActive,
      open: open,
      disabled: mergedDisabled
    });
  }

  // >>>>> Render
  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === 'horizontal' ? 'vertical' : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, listNode);
};
function SubMenu(props) {
  var eventKey = props.eventKey,
    children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath);

  // ==================== Record KeyPath ====================
  var measure = useMeasure();

  // eslint-disable-next-line consistent-return
  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode;

  // ======================== Render ========================
  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /*#__PURE__*/react.createElement(InternalSubMenu, props, childList);
  }
  return /*#__PURE__*/react.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/Menu.js






var Menu_excluded = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"];





















/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */

// optimize for render
var EMPTY_LIST = [];
var Menu = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _childList$, _classNames;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-menu' : _ref$prefixCls,
    rootClassName = _ref.rootClassName,
    style = _ref.style,
    className = _ref.className,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
    items = _ref.items,
    children = _ref.children,
    direction = _ref.direction,
    id = _ref.id,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
    inlineCollapsed = _ref.inlineCollapsed,
    disabled = _ref.disabled,
    disabledOverflow = _ref.disabledOverflow,
    _ref$subMenuOpenDelay = _ref.subMenuOpenDelay,
    subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay,
    _ref$subMenuCloseDela = _ref.subMenuCloseDelay,
    subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela,
    forceSubMenuRender = _ref.forceSubMenuRender,
    defaultOpenKeys = _ref.defaultOpenKeys,
    openKeys = _ref.openKeys,
    activeKey = _ref.activeKey,
    defaultActiveFirst = _ref.defaultActiveFirst,
    _ref$selectable = _ref.selectable,
    selectable = _ref$selectable === void 0 ? true : _ref$selectable,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    defaultSelectedKeys = _ref.defaultSelectedKeys,
    selectedKeys = _ref.selectedKeys,
    onSelect = _ref.onSelect,
    onDeselect = _ref.onDeselect,
    _ref$inlineIndent = _ref.inlineIndent,
    inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent,
    motion = _ref.motion,
    defaultMotions = _ref.defaultMotions,
    _ref$triggerSubMenuAc = _ref.triggerSubMenuAction,
    triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? 'hover' : _ref$triggerSubMenuAc,
    builtinPlacements = _ref.builtinPlacements,
    itemIcon = _ref.itemIcon,
    expandIcon = _ref.expandIcon,
    _ref$overflowedIndica = _ref.overflowedIndicator,
    overflowedIndicator = _ref$overflowedIndica === void 0 ? '...' : _ref$overflowedIndica,
    overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName,
    getPopupContainer = _ref.getPopupContainer,
    onClick = _ref.onClick,
    onOpenChange = _ref.onOpenChange,
    onKeyDown = _ref.onKeyDown,
    openAnimation = _ref.openAnimation,
    openTransitionName = _ref.openTransitionName,
    _internalRenderMenuItem = _ref._internalRenderMenuItem,
    _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, Menu_excluded);
  var childList = react.useMemo(function () {
    return parseItems(children, items, EMPTY_LIST);
  }, [children, items]);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    mounted = _React$useState2[0],
    setMounted = _React$useState2[1];
  var containerRef = react.useRef();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl';

  // ========================= Warn =========================
  if (false) {}

  // ========================= Open =========================
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultOpenKeys, {
      value: openKeys,
      postState: function postState(keys) {
        return keys || EMPTY_LIST;
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedOpenKeys = _useMergedState2[0],
    setMergedOpenKeys = _useMergedState2[1];

  // React 18 will merge mouse event which means we open key will not sync
  // ref: https://github.com/ant-design/ant-design/issues/38818
  var triggerOpenKeys = function triggerOpenKeys(keys) {
    var forceFlush = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    function doUpdate() {
      setMergedOpenKeys(keys);
      onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
    }
    if (forceFlush) {
      (0,react_dom.flushSync)(doUpdate);
    } else {
      doUpdate();
    }
  };

  // >>>>> Cache & Reset open keys when inlineCollapsed changed
  var _React$useState3 = react.useState(mergedOpenKeys),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    inlineCacheOpenKeys = _React$useState4[0],
    setInlineCacheOpenKeys = _React$useState4[1];
  var mountRef = react.useRef(false);

  // ========================= Mode =========================
  var _React$useMemo = react.useMemo(function () {
      if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
        return ['vertical', inlineCollapsed];
      }
      return [mode, false];
    }, [mode, inlineCollapsed]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    mergedMode = _React$useMemo2[0],
    mergedInlineCollapsed = _React$useMemo2[1];
  var isInlineMode = mergedMode === 'inline';
  var _React$useState5 = react.useState(mergedMode),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    internalMode = _React$useState6[0],
    setInternalMode = _React$useState6[1];
  var _React$useState7 = react.useState(mergedInlineCollapsed),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    internalInlineCollapsed = _React$useState8[0],
    setInternalInlineCollapsed = _React$useState8[1];
  react.useEffect(function () {
    setInternalMode(mergedMode);
    setInternalInlineCollapsed(mergedInlineCollapsed);
    if (!mountRef.current) {
      return;
    }
    // Synchronously update MergedOpenKeys
    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      // Trigger open event in case its in control
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [mergedMode, mergedInlineCollapsed]);

  // ====================== Responsive ======================
  var _React$useState9 = react.useState(0),
    _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
    lastVisibleIndex = _React$useState10[0],
    setLastVisibleIndex = _React$useState10[1];
  var allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== 'horizontal' || disabledOverflow;

  // Cache
  react.useEffect(function () {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]);
  react.useEffect(function () {
    mountRef.current = true;
    return function () {
      mountRef.current = false;
    };
  }, []);

  // ========================= Path =========================
  var _useKeyRecords = useKeyRecords(),
    registerPath = _useKeyRecords.registerPath,
    unregisterPath = _useKeyRecords.unregisterPath,
    refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
    isSubPathKey = _useKeyRecords.isSubPathKey,
    getKeyPath = _useKeyRecords.getKeyPath,
    getKeys = _useKeyRecords.getKeys,
    getSubPathKeys = _useKeyRecords.getSubPathKeys;
  var registerPathContext = react.useMemo(function () {
    return {
      registerPath: registerPath,
      unregisterPath: unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = react.useMemo(function () {
    return {
      isSubPathKey: isSubPathKey
    };
  }, [isSubPathKey]);
  react.useEffect(function () {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]);

  // ======================== Active ========================
  var _useMergedState3 = (0,useMergedState/* default */.Z)(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
      value: activeKey
    }),
    _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
    mergedActiveKey = _useMergedState4[0],
    setMergedActiveKey = _useMergedState4[1];
  var onActive = useMemoCallback(function (key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function () {
    setMergedActiveKey(undefined);
  });
  (0,react.useImperativeHandle)(ref, function () {
    return {
      list: containerRef.current,
      focus: function focus(options) {
        var _childList$find;
        var shouldFocusKey = mergedActiveKey !== null && mergedActiveKey !== void 0 ? mergedActiveKey : (_childList$find = childList.find(function (node) {
          return !node.props.disabled;
        })) === null || _childList$find === void 0 ? void 0 : _childList$find.key;
        if (shouldFocusKey) {
          var _containerRef$current, _containerRef$current2, _containerRef$current3;
          (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.querySelector("li[data-menu-id='".concat(getMenuId(uuid, shouldFocusKey), "']"))) === null || _containerRef$current2 === void 0 ? void 0 : (_containerRef$current3 = _containerRef$current2.focus) === null || _containerRef$current3 === void 0 ? void 0 : _containerRef$current3.call(_containerRef$current2, options);
        }
      }
    };
  });

  // ======================== Select ========================
  // >>>>> Select keys
  var _useMergedState5 = (0,useMergedState/* default */.Z)(defaultSelectedKeys || [], {
      value: selectedKeys,
      // Legacy convert key to array
      postState: function postState(keys) {
        if (Array.isArray(keys)) {
          return keys;
        }
        if (keys === null || keys === undefined) {
          return EMPTY_LIST;
        }
        return [keys];
      }
    }),
    _useMergedState6 = (0,slicedToArray/* default */.Z)(_useMergedState5, 2),
    mergedSelectKeys = _useMergedState6[0],
    setMergedSelectKeys = _useMergedState6[1];

  // >>>>> Trigger select
  var triggerSelection = function triggerSelection(info) {
    if (selectable) {
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;
      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }
      setMergedSelectKeys(newSelectKeys);

      // Trigger event
      var selectInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        selectedKeys: newSelectKeys
      });
      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    }

    // Whatever selectable, always close it
    if (!multiple && mergedOpenKeys.length && internalMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  };

  // ========================= Open =========================
  /**
   * Click for item. SubMenu do not have selection status
   */
  var onInternalClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function (key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function (k) {
      return k !== key;
    });
    if (open) {
      newOpenKeys.push(key);
    } else if (internalMode !== 'inline') {
      // We need find all related popup to close
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function (k) {
        return !subPathKeys.has(k);
      });
    }
    if (!(0,isEqual/* default */.Z)(mergedOpenKeys, newOpenKeys, true)) {
      triggerOpenKeys(newOpenKeys, true);
    }
  });

  // ==================== Accessibility =====================
  var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };
  var onInternalKeyDown = useAccessibility(internalMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);

  // ======================== Effect ========================
  react.useEffect(function () {
    setMounted(true);
  }, []);

  // ======================= Context ========================
  var privateContext = react.useMemo(function () {
    return {
      _internalRenderMenuItem: _internalRenderMenuItem,
      _internalRenderSubMenuItem: _internalRenderSubMenuItem
    };
  }, [_internalRenderMenuItem, _internalRenderSubMenuItem]);

  // ======================== Render ========================

  // >>>>> Children
  var wrappedChildList = internalMode !== 'horizontal' || disabledOverflow ? childList :
  // Need wrap for overflow dropdown that do not response for open
  childList.map(function (child, index) {
    return (
      /*#__PURE__*/
      // Always wrap provider to avoid sub node re-mount
      react.createElement(InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex
      }, child)
    );
  });

  // >>>>> Container
  var container = /*#__PURE__*/react.createElement(rc_overflow_es, (0,esm_extends/* default */.Z)({
    id: id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: es_MenuItem,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(internalMode), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-inline-collapsed"), internalInlineCollapsed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames), rootClassName),
    dir: direction,
    style: style,
    role: "menu",
    tabIndex: tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      // We use origin list since wrapped list use context to prevent open
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /*#__PURE__*/react.createElement(SubMenu, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: internalMode !== 'horizontal' || disabledOverflow ? rc_overflow_es.INVALIDATE : rc_overflow_es.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps));

  // >>>>> Render
  return /*#__PURE__*/react.createElement(context_PrivateContext.Provider, {
    value: privateContext
  }, /*#__PURE__*/react.createElement(IdContext.Provider, {
    value: uuid
  }, /*#__PURE__*/react.createElement(InheritableContextProvider, {
    prefixCls: prefixCls,
    rootClassName: rootClassName,
    mode: internalMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl
    // Disabled
    ,
    disabled: disabled
    // Motion
    ,
    motion: mounted ? motion : null,
    defaultMotions: mounted ? defaultMotions : null
    // Active
    ,
    activeKey: mergedActiveKey,
    onActive: onActive,
    onInactive: onInactive
    // Selection
    ,
    selectedKeys: mergedSelectKeys
    // Level
    ,
    inlineIndent: inlineIndent
    // Popup
    ,
    subMenuOpenDelay: subMenuOpenDelay,
    subMenuCloseDelay: subMenuCloseDelay,
    forceSubMenuRender: forceSubMenuRender,
    builtinPlacements: builtinPlacements,
    triggerSubMenuAction: triggerSubMenuAction,
    getPopupContainer: getPopupContainer
    // Icon
    ,
    itemIcon: itemIcon,
    expandIcon: expandIcon
    // Events
    ,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /*#__PURE__*/react.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/react.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, childList)))));
});
/* harmony default export */ var es_Menu = (Menu);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/MenuItemGroup.js


var MenuItemGroup_excluded = ["className", "title", "eventKey", "children"],
  MenuItemGroup_excluded2 = ["children"];






var InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
  var className = _ref.className,
    title = _ref.title,
    eventKey = _ref.eventKey,
    children = _ref.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, MenuItemGroup_excluded);
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.Z)({
    role: "presentation"
  }, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: classnames_default()(groupPrefixCls, className)
  }), /*#__PURE__*/react.createElement("div", {
    role: "presentation",
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/react.createElement("ul", {
    role: "group",
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};
function MenuItemGroup(_ref2) {
  var children = _ref2.children,
    props = (0,objectWithoutProperties/* default */.Z)(_ref2, MenuItemGroup_excluded2);
  var connectedKeyPath = useFullPath(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  if (measure) {
    return childList;
  }
  return /*#__PURE__*/react.createElement(InternalMenuItemGroup, (0,omit/* default */.Z)(props, ['warnKey']), childList);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/Divider.js




function Divider(_ref) {
  var className = _ref.className,
    style = _ref.style;
  var _React$useContext = react.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var measure = useMeasure();
  if (measure) {
    return null;
  }
  return /*#__PURE__*/react.createElement("li", {
    className: classnames_default()("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-menu@9.9.2_react-dom@18.2.0_react@18.2.0/node_modules/rc-menu/es/index.js







var ExportMenu = es_Menu;
ExportMenu.Item = es_MenuItem;
ExportMenu.SubMenu = SubMenu;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider;
/* harmony default export */ var rc_menu_es = (ExportMenu);

/***/ }),

/***/ 13199:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zt: function() { return /* reexport */ MotionProvider; },
  ZP: function() { return /* binding */ es; }
});

// UNUSED EXPORTS: CSSMotionList

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

/***/ }),

/***/ 91018:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
});

/***/ }),

/***/ 77466:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ __webpack_exports__.Z = (locale);

/***/ }),

/***/ 76957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es; }
});

// UNUSED EXPORTS: _rs

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87366);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(1726);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(37543);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(49919);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(69699);
// EXTERNAL MODULE: ./node_modules/.pnpm/resize-observer-polyfill@1.5.1/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(73023);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/utils/observerUtil.js

// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 ? void 0 : _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}
// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new ResizeObserver_es/* default */.Z(onResize);
// Dev env only
var _el = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
var _rs = (/* unused pure expression or super */ null && ( false ? 0 : null)); // eslint-disable-line
// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(87989);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(51852);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(21279);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(27597);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js





/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
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

;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/Collection.js

var CollectionContext = /*#__PURE__*/react.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = react.useRef(0);
  var resizeInfosRef = react.useRef([]);
  var onCollectionResize = react.useContext(CollectionContext);
  var onResize = react.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });
    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/react.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/SingleObserver/index.js







function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = react.useRef(null);
  var wrapperRef = react.useRef(null);
  var onCollectionResize = react.useContext(CollectionContext);
  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  // ============================= Size =============================
  var sizeRef = react.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/react.isValidElement(mergedChildren) && (0,es_ref/* supportRef */.Yr)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = react.useMemo(function () {
    return (0,es_ref/* composeRef */.sQ)(originRef, elementRef);
  }, [originRef, elementRef]);
  var getDom = function getDom() {
    return (0,findDOMNode/* default */.Z)(elementRef.current) || (0,findDOMNode/* default */.Z)(wrapperRef.current);
  };
  react.useImperativeHandle(ref, function () {
    return getDom();
  });
  // =========================== Observe ============================
  var propsRef = react.useRef(props);
  propsRef.current = props;
  // Handler
  var onInternalResize = react.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;
      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });
      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);
  // Dynamic observe
  react.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      observe(currentElement, onInternalResize);
    }
    return function () {
      return unobserve(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);
  // ============================ Render ============================
  return /*#__PURE__*/react.createElement(DomWrapper, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/react.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/react.forwardRef(SingleObserver);
if (false) {}
/* harmony default export */ var es_SingleObserver = (RefSingleObserver);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/index.js






var INTERNAL_PREFIX_KEY = 'rc-observer-key';


function ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0,toArray/* default */.Z)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/react.createElement(es_SingleObserver, (0,esm_extends/* default */.Z)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/react.forwardRef(ResizeObserver);
if (false) {}
RefResizeObserver.Collection = Collection;
/* harmony default export */ var es = (RefResizeObserver);

/***/ })

}]);