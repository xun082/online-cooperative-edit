"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-6754b7c1"],{

/***/ 64535:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79562);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50959);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43233);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22554);




function isThenable(thing) {
  return !!(thing && thing.then);
}
const ActionButton = props => {
  const {
    type,
    children,
    prefixCls,
    buttonProps,
    close,
    autoFocus,
    emitEvent,
    quitOnNullishReturnValue,
    actionFn
  } = props;
  const clickedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  const buttonRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const [loading, setLoading] = (0,rc_util_es_hooks_useState__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(false);
  const onInternalClose = function () {
    close === null || close === void 0 ? void 0 : close.apply(void 0, arguments);
  };
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    let timeoutId = null;
    if (autoFocus) {
      timeoutId = setTimeout(() => {
        var _a;
        (_a = buttonRef.current) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  const handlePromiseOnOk = returnValueOfOnOk => {
    if (!isThenable(returnValueOfOnOk)) {
      return;
    }
    setLoading(true);
    returnValueOfOnOk.then(function () {
      setLoading(false, true);
      onInternalClose.apply(void 0, arguments);
      clickedRef.current = false;
    }, e => {
      // See: https://github.com/ant-design/ant-design/issues/6183
      setLoading(false, true);
      clickedRef.current = false;
      return Promise.reject(e);
    });
  };
  const onClick = e => {
    if (clickedRef.current) {
      return;
    }
    clickedRef.current = true;
    if (!actionFn) {
      onInternalClose();
      return;
    }
    let returnValueOfOnOk;
    if (emitEvent) {
      returnValueOfOnOk = actionFn(e);
      if (quitOnNullishReturnValue && !isThenable(returnValueOfOnOk)) {
        clickedRef.current = false;
        onInternalClose(e);
        return;
      }
    } else if (actionFn.length) {
      returnValueOfOnOk = actionFn(close);
      // https://github.com/ant-design/ant-design/issues/23358
      clickedRef.current = false;
    } else {
      returnValueOfOnOk = actionFn();
      if (!returnValueOfOnOk) {
        onInternalClose();
        return;
      }
    }
    handlePromiseOnOk(returnValueOfOnOk);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, Object.assign({}, (0,_button_button__WEBPACK_IMPORTED_MODULE_3__/* .convertLegacyProps */ .n)(type), {
    onClick: onClick,
    loading: loading,
    prefixCls: prefixCls
  }, buttonProps, {
    ref: buttonRef
  }), children);
};
/* harmony default export */ __webpack_exports__.Z = (ActionButton);

/***/ }),

/***/ 75831:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ usePatchElement; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23190);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);


function usePatchElement() {
  const [elements, setElements] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  const patchElement = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(element => {
    // append a new element to elements (and create a new ref)
    setElements(originElements => [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(originElements), [element]));
    // return a function that removes the new element out of elements (and create a new ref)
    // it works a little like useEffect
    return () => {
      setElements(originElements => originElements.filter(ele => ele !== element));
    };
  }, []);
  return [elements, patchElement];
}

/***/ }),

/***/ 81995:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mL: function() { return /* binding */ getTransitionName; }
/* harmony export */ });
/* unused harmony export getTransitionDirection */
// ================== Collapse Motion ==================
const getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
const getRealHeight = node => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
const getCurrentHeight = node => ({
  height: node ? node.offsetHeight : 0
});
const skipOpacityTransition = (_, event) => (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
const initCollapseMotion = function () {
  let rootCls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ant';
  return {
    motionName: `${rootCls}-motion-collapse`,
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500
  };
};
const SelectPlacements = (/* unused pure expression or super */ null && (['bottomLeft', 'bottomRight', 'topLeft', 'topRight']));
const getTransitionDirection = placement => {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

/* harmony default export */ __webpack_exports__.ZP = (initCollapseMotion);

/***/ }),

/***/ 90016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M2: function() { return /* binding */ isFragment; },
/* harmony export */   Tm: function() { return /* binding */ cloneElement; },
/* harmony export */   l$: function() { return /* binding */ isValidElement; }
/* harmony export */ });
/* unused harmony export replaceElement */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

const {
  isValidElement
} = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));
function isFragment(child) {
  return child && isValidElement(child) && child.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ 53469:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   jD: function() { return /* binding */ canUseDocElement; }
/* harmony export */ });
/* unused harmony export detectFlexGapSupported */
/* harmony import */ var rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34549);


const canUseDocElement = () => (0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)() && window.document.documentElement;

let flexGapSupported;
const detectFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== undefined) {
    return flexGapSupported;
  }
  // create flex container with row-gap set
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';
  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));
  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  document.body.removeChild(flex);
  return flexGapSupported;
};

/***/ }),

/***/ 22554:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: function() { return /* binding */ convertLegacyProps; },
  Z: function() { return /* binding */ button_button; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(47740);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(86380);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(69624);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(90016);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(76734);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/wave/style.js

const genWaveStyle = token => {
  const {
    componentCls,
    colorPrimary
  } = token;
  return {
    [componentCls]: {
      position: 'absolute',
      background: 'transparent',
      pointerEvents: 'none',
      boxSizing: 'border-box',
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      '&.wave-motion-appear': {
        transition: [`box-shadow 0.4s ${token.motionEaseOutCirc}`, `opacity 2s ${token.motionEaseOutCirc}`].join(','),
        '&-active': {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
/* harmony default export */ var style = ((0,genComponentStyleHook/* default */.Z)('Wave', token => [genWaveStyle(token)]));
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(13199);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/React/render.js
var render = __webpack_require__(50269);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(18383);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/wave/util.js
function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== '#fff' && color !== '#ffffff' && color !== 'rgb(255, 255, 255)' && color !== 'rgba(255, 255, 255, 1)' && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) &&
  // any transparent rgba color
  color !== 'transparent';
}
function getTargetWaveColor(node) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/wave/WaveEffect.js






function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = props => {
  const {
    className,
    target
  } = props;
  const divRef = react.useRef(null);
  const [color, setWaveColor] = react.useState(null);
  const [borderRadius, setBorderRadius] = react.useState([]);
  const [left, setLeft] = react.useState(0);
  const [top, setTop] = react.useState(0);
  const [width, setWidth] = react.useState(0);
  const [height, setHeight] = react.useState(0);
  const [enabled, setEnabled] = react.useState(false);
  const waveStyle = {
    left,
    top,
    width,
    height,
    borderRadius: borderRadius.map(radius => `${radius}px`).join(' ')
  };
  if (color) {
    waveStyle['--wave-color'] = color;
  }
  function syncPos() {
    const nodeStyle = getComputedStyle(target);
    // Get wave color from target
    setWaveColor(getTargetWaveColor(target));
    const isStatic = nodeStyle.position === 'static';
    // Rect
    const {
      borderLeftWidth,
      borderTopWidth
    } = nodeStyle;
    setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
    setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
    setWidth(target.offsetWidth);
    setHeight(target.offsetHeight);
    // Get border radius
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = nodeStyle;
    setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map(radius => validateNum(parseFloat(radius))));
  }
  react.useEffect(() => {
    if (target) {
      // We need delay to check position here
      // since UI may change after click
      const id = (0,raf/* default */.Z)(() => {
        syncPos();
        setEnabled(true);
      });
      // Add resize observer to follow size
      let resizeObserver;
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(syncPos);
        resizeObserver.observe(target);
      }
      return () => {
        raf/* default */.Z.cancel(id);
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
      };
    }
  }, []);
  if (!enabled) {
    return null;
  }
  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: true,
    motionAppear: true,
    motionName: "wave-motion",
    motionDeadline: 5000,
    onAppearEnd: (_, event) => {
      var _a;
      if (event.deadline || event.propertyName === 'opacity') {
        const holder = (_a = divRef.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        (0,render/* unmount */.v)(holder).then(() => {
          holder === null || holder === void 0 ? void 0 : holder.remove();
        });
      }
      return false;
    }
  }, _ref => {
    let {
      className: motionClassName
    } = _ref;
    return /*#__PURE__*/react.createElement("div", {
      ref: divRef,
      className: classnames_default()(className, motionClassName),
      style: waveStyle
    });
  });
};
function showWaveEffect(node, className) {
  // Create holder
  const holder = document.createElement('div');
  holder.style.position = 'absolute';
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node === null || node === void 0 ? void 0 : node.insertBefore(holder, node === null || node === void 0 ? void 0 : node.firstChild);
  (0,render/* render */.s)( /*#__PURE__*/react.createElement(WaveEffect, {
    target: node,
    className: className
  }), holder);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/wave/useWave.js

function useWave(nodeRef, className) {
  function showWave() {
    const node = nodeRef.current;
    showWaveEffect(node, className);
  }
  return showWave;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/wave/index.js








const Wave = props => {
  const {
    children,
    disabled
  } = props;
  const {
    getPrefixCls
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const containerRef = (0,react.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = style(prefixCls);
  // =============================== Wave ===============================
  const showWave = useWave(containerRef, classnames_default()(prefixCls, hashId));
  // ============================== Effect ==============================
  react.useEffect(() => {
    const node = containerRef.current;
    if (!node || node.nodeType !== 1 || disabled) {
      return;
    }
    // Click handler
    const onClick = e => {
      // Fix radio button click twice
      if (e.target.tagName === 'INPUT' || !(0,isVisible/* default */.Z)(e.target) ||
      // No need wave
      !node.getAttribute || node.getAttribute('disabled') || node.disabled || node.className.includes('disabled') || node.className.includes('-leave')) {
        return;
      }
      showWave();
    };
    // Bind events
    node.addEventListener('click', onClick, true);
    return () => {
      node.removeEventListener('click', onClick, true);
    };
  }, [disabled]);
  // ============================== Render ==============================
  if (! /*#__PURE__*/react.isValidElement(children)) {
    return children !== null && children !== void 0 ? children : null;
  }
  const ref = (0,es_ref/* supportRef */.Yr)(children) ? (0,es_ref/* composeRef */.sQ)(children.ref, containerRef) : containerRef;
  return (0,reactNode/* cloneElement */.Tm)(children, {
    ref
  });
};
if (false) {}
/* harmony default export */ var wave = (Wave);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(69310);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(87702);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(34102);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/IconWrapper.js


const IconWrapper = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
    className,
    style,
    children,
    prefixCls
  } = props;
  const iconWrapperCls = classnames_default()(`${prefixCls}-icon`, className);
  return /*#__PURE__*/react.createElement("span", {
    ref: ref,
    className: iconWrapperCls,
    style: style
  }, children);
});
/* harmony default export */ var button_IconWrapper = (IconWrapper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(93763);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/LoadingIcon.js





const InnerLoadingIcon = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    prefixCls,
    className,
    style,
    iconClassName
  } = _ref;
  const mergedIconCls = classnames_default()(`${prefixCls}-loading-icon`, className);
  return /*#__PURE__*/react.createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: mergedIconCls,
    style: style,
    ref: ref
  }, /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, {
    className: iconClassName
  }));
});
const getCollapsedWidth = () => ({
  width: 0,
  opacity: 0,
  transform: 'scale(0)'
});
const getRealWidth = node => ({
  width: node.scrollWidth,
  opacity: 1,
  transform: 'scale(1)'
});
const LoadingIcon = _ref2 => {
  let {
    prefixCls,
    loading,
    existIcon,
    className,
    style
  } = _ref2;
  const visible = !!loading;
  if (existIcon) {
    return /*#__PURE__*/react.createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: style
    });
  }
  return /*#__PURE__*/react.createElement(es/* default */.ZP, {
    visible: visible,
    // We do not really use this motionName
    motionName: `${prefixCls}-loading-icon-motion`,
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, (_ref3, ref) => {
    let {
      className: motionCls,
      style: motionStyle
    } = _ref3;
    return /*#__PURE__*/react.createElement(InnerLoadingIcon, {
      prefixCls: prefixCls,
      className: className,
      style: Object.assign(Object.assign({}, style), motionStyle),
      ref: ref,
      iconClassName: motionCls
    });
  });
};
/* harmony default export */ var button_LoadingIcon = (LoadingIcon);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/internal.js + 14 modules
var internal = __webpack_require__(37576);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/button-group.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





const GroupSizeContext = /*#__PURE__*/react.createContext(undefined);
const ButtonGroup = props => {
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = __rest(props, ["prefixCls", "size", "className"]);
  const prefixCls = getPrefixCls('btn-group', customizePrefixCls);
  const [,, hashId] = (0,internal/* useToken */.dQ)();
  let sizeCls = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    case 'middle':
    case undefined:
      break;
    default:
       false ? 0 : void 0;
  }
  const classes = classnames_default()(prefixCls, {
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, className, hashId);
  return /*#__PURE__*/react.createElement(GroupSizeContext.Provider, {
    value: size
  }, /*#__PURE__*/react.createElement("div", Object.assign({}, others, {
    className: classes
  })));
};
/* harmony default export */ var button_group = (ButtonGroup);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/buttonHelpers.js


const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}
function isUnBorderedButtonType(type) {
  return type === 'text' || type === 'link';
}
function splitCNCharsBySpace(child, needInserted) {
  if (child === null || child === undefined) {
    return;
  }
  const SPACE = needInserted ? ' ' : '';
  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,reactNode/* cloneElement */.Tm)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }
  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/react.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react.createElement("span", null, child);
  }
  if ((0,reactNode/* isFragment */.M2)(child)) {
    return /*#__PURE__*/react.createElement("span", null, child);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  let isPrevChildPure = false;
  const childList = [];
  react.Children.forEach(children, child => {
    const type = typeof child;
    const isCurrentChildPure = type === 'string' || type === 'number';
    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1;
      const lastChild = childList[lastIndex];
      childList[lastIndex] = `${lastChild}${child}`;
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return react.Children.map(childList, child => splitCNCharsBySpace(child, needInserted));
}
const ButtonTypes = (/* unused pure expression or super */ null && (['default', 'primary', 'ghost', 'dashed', 'link', 'text']));
const ButtonShapes = (/* unused pure expression or super */ null && (['default', 'circle', 'round']));
const ButtonHTMLTypes = (/* unused pure expression or super */ null && (['submit', 'button', 'reset']));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/index.js
var es_style = __webpack_require__(64813);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(85482);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/compact-item-vertical.js
var compact_item_vertical = __webpack_require__(38459);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(70157);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/style/group.js
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    '&:not(:last-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineEndColor: borderColor
        }
      }
    },
    '&:not(:first-child)': {
      [`&, & > ${buttonTypeCls}`]: {
        '&:not(:disabled)': {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = token => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [{
      position: 'relative',
      display: 'inline-flex',
      // Border
      [`> span, > ${componentCls}`]: {
        '&:not(:last-child)': {
          [`&, & > ${componentCls}`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        '&:not(:first-child)': {
          marginInlineStart: -lineWidth,
          [`&, & > ${componentCls}`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      },
      [componentCls]: {
        position: 'relative',
        zIndex: 1,
        [`&:hover,
          &:focus,
          &:active`]: {
          zIndex: 2
        },
        '&[disabled]': {
          zIndex: 0
        }
      },
      [`${componentCls}-icon-only`]: {
        fontSize
      }
    },
    // Border Color
    genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover), genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)]
  };
};
/* harmony default export */ var group = (genGroupStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/style/index.js





// ============================== Shared ==============================
const genSharedButtonStyle = token => {
  const {
    componentCls,
    iconCls,
    buttonFontWeight
  } = token;
  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight: buttonFontWeight,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      lineHeight: token.lineHeight,
      color: token.colorText,
      '&:disabled > *': {
        pointerEvents: 'none'
      },
      '> span': {
        display: 'inline-block'
      },
      [`${componentCls}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      [`&:not(${componentCls}-icon-only) > ${componentCls}-icon`]: {
        [`&${componentCls}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: token.marginXS
        }
      },
      '> a': {
        color: 'currentColor'
      },
      '&:not(:disabled)': Object.assign({}, (0,es_style/* genFocusStyle */.Qy)(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: 'none'
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: 'inline-block',
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      '&-compact-vertical-item': {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: 'relative',
            '&:before': {
              position: 'absolute',
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: 'inline-block',
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (btnCls, hoverStyle, activeStyle) => ({
  [`&:not(:disabled):not(${btnCls}-disabled)`]: {
    '&:hover': hoverStyle,
    '&:active': activeStyle
  }
});
// ============================== Shape ===============================
const genCircleButtonStyle = token => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: '50%'
});
const genRoundButtonStyle = token => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
// =============================== Type ===============================
const genDisabledStyle = token => ({
  cursor: 'not-allowed',
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: 'none'
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: Object.assign(Object.assign({
    color: textColor || undefined,
    backgroundColor: 'transparent',
    borderColor: borderColor || undefined,
    boxShadow: 'none'
  }, genHoverActiveButtonStyle(btnCls, Object.assign({
    backgroundColor: 'transparent'
  }, hoverStyle), Object.assign({
    backgroundColor: 'transparent'
  }, activeStyle))), {
    '&:disabled': {
      cursor: 'not-allowed',
      color: textColorDisabled || undefined,
      borderColor: borderColorDisabled || undefined
    }
  })
});
const genSolidDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(token))
});
const genSolidButtonStyle = token => Object.assign({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = token => ({
  [`&:disabled, &${token.componentCls}-disabled`]: {
    cursor: 'not-allowed',
    color: token.colorTextDisabled
  }
});
// Type: Default
const genDefaultButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
// Type: Primary
const genPrimaryButtonStyle = token => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle(token.componentCls, {
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
// Type: Dashed
const genDashedButtonStyle = token => Object.assign(Object.assign({}, genDefaultButtonStyle(token)), {
  borderStyle: 'dashed'
});
// Type: Link
const genLinkButtonStyle = token => Object.assign(Object.assign(Object.assign({
  color: token.colorLink
}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
// Type: Text
const genTextButtonStyle = token => Object.assign(Object.assign(Object.assign({}, genHoverActiveButtonStyle(token.componentCls, {
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle(token.componentCls, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genTypeButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token)
  };
};
// =============================== Size ===============================
const genSizeButtonStyle = function (token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const {
    componentCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal,
    iconCls
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
  // Size
  {
    [`${componentCls}${sizePrefixCls}`]: {
      fontSize,
      height: controlHeight,
      padding: `${paddingVertical}px ${paddingHorizontal}px`,
      borderRadius,
      [`&${iconOnlyCls}`]: {
        width: controlHeight,
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
        [`&${componentCls}-round`]: {
          width: 'auto'
        },
        [iconCls]: {
          fontSize: token.buttonIconOnlyFontSize
        }
      },
      // Loading
      [`&${componentCls}-loading`]: {
        opacity: token.opacityLoading,
        cursor: 'default'
      },
      [`${componentCls}-loading-icon`]: {
        transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
      }
    }
  },
  // Shape - patch prefixCls again to override solid border radius style
  {
    [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
  }, {
    [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
  }];
};
const genSizeBaseButtonStyle = token => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = token => {
  const smallToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM,
    buttonIconOnlyFontSize: token.fontSizeLG - 2
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = token => {
  const largeToken = (0,statistic/* merge */.TS)(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG,
    buttonIconOnlyFontSize: token.fontSizeLG + 2
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var button_style = ((0,genComponentStyleHook/* default */.Z)('Button', token => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = (0,statistic/* merge */.TS)(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal,
    buttonIconOnlyFontSize: token.fontSizeLG,
    buttonFontWeight: 400
  });
  return [
  // Shared
  genSharedButtonStyle(buttonToken),
  // Size
  genSizeSmallButtonStyle(buttonToken), genSizeBaseButtonStyle(buttonToken), genSizeLargeButtonStyle(buttonToken),
  // Block
  genBlockButtonStyle(buttonToken),
  // Group (type, ghost, danger, loading)
  genTypeButtonStyle(buttonToken),
  // Button Group
  group(buttonToken),
  // Space Compact
  (0,compact_item/* genCompactItemStyle */.c)(token), (0,compact_item_vertical/* genCompactItemVerticalStyle */.o)(token)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/button.js
var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */















function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }
  return {
    type
  };
}
function getLoadingConfig(loading) {
  if (typeof loading === 'object' && loading) {
    const delay = loading === null || loading === void 0 ? void 0 : loading.delay;
    const isDelay = !Number.isNaN(delay) && typeof delay === 'number';
    return {
      loading: false,
      delay: isDelay ? delay : 0
    };
  }
  return {
    loading: !!loading,
    delay: 0
  };
}
const InternalButton = (props, ref) => {
  var _a, _b;
  const {
      loading = false,
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      shape = 'default',
      size: customizeSize,
      styles,
      disabled: customDisabled,
      className,
      rootClassName,
      children,
      icon,
      ghost = false,
      block = false,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType = 'button',
      classNames: customClassNames,
      style: customStyle = {}
    } = props,
    rest = button_rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]);
  const {
    getPrefixCls,
    autoInsertSpaceInButton,
    direction,
    button
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapSSR, hashId] = button_style(prefixCls);
  const disabled = (0,react.useContext)(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  const groupSize = (0,react.useContext)(GroupSizeContext);
  const loadingOrDelay = (0,react.useMemo)(() => getLoadingConfig(loading), [loading]);
  const [innerLoading, setLoading] = (0,react.useState)(loadingOrDelay.loading);
  const [hasTwoCNChar, setHasTwoCNChar] = (0,react.useState)(false);
  const internalRef = /*#__PURE__*/(0,react.createRef)();
  const buttonRef = (0,es_ref/* composeRef */.sQ)(ref, internalRef);
  const needInserted = react.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  (0,react.useEffect)(() => {
    let delayTimer = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }
    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }
    return cleanupTimer;
  }, [loadingOrDelay]);
  (0,react.useEffect)(() => {
    // FIXME: for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    const buttonText = buttonRef.current.textContent;
    if (needInserted && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }, [buttonRef]);
  const handleClick = e => {
    const {
      onClick
    } = props;
    // FIXME: https://github.com/ant-design/ant-design/issues/30207
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
   false ? 0 : void 0;
   false ? 0 : void 0;
  const autoInsertSpace = autoInsertSpaceInButton !== false;
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const sizeClassNameMap = {
    large: 'lg',
    small: 'sm',
    middle: undefined
  };
  const sizeFullName = (0,useSize/* default */.Z)(ctxSize => {
    var _a, _b;
    return (_b = (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : groupSize) !== null && _b !== void 0 ? _b : ctxSize;
  });
  const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
  const iconType = innerLoading ? 'loading' : icon;
  const linkButtonRestProps = (0,omit/* default */.Z)(rest, ['navigate']);
  const classes = classnames_default()(prefixCls, hashId, {
    [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
    [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
    [`${prefixCls}-loading`]: innerLoading,
    [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: !!danger,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, compactItemClassnames, className, rootClassName, button === null || button === void 0 ? void 0 : button.className);
  const fullStyle = Object.assign(Object.assign({}, button === null || button === void 0 ? void 0 : button.style), customStyle);
  const iconClasses = classnames_default()(customClassNames === null || customClassNames === void 0 ? void 0 : customClassNames.icon, (_a = button === null || button === void 0 ? void 0 : button.classNames) === null || _a === void 0 ? void 0 : _a.icon);
  const iconStyle = Object.assign(Object.assign({}, (styles === null || styles === void 0 ? void 0 : styles.icon) || {}), ((_b = button === null || button === void 0 ? void 0 : button.styles) === null || _b === void 0 ? void 0 : _b.icon) || {});
  const iconNode = icon && !innerLoading ? /*#__PURE__*/react.createElement(button_IconWrapper, {
    prefixCls: prefixCls,
    className: iconClasses,
    style: iconStyle
  }, icon) : /*#__PURE__*/react.createElement(button_LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  const kids = children || children === 0 ? spaceChildren(children, needInserted && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== undefined) {
    return wrapSSR( /*#__PURE__*/react.createElement("a", Object.assign({}, linkButtonRestProps, {
      className: classnames_default()(classes, {
        [`${prefixCls}-disabled`]: mergedDisabled
      }),
      style: fullStyle,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids));
  }
  let buttonNode = /*#__PURE__*/react.createElement("button", Object.assign({}, rest, {
    type: htmlType,
    className: classes,
    style: fullStyle,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef
  }), iconNode, kids);
  if (!isUnBorderedButtonType(type)) {
    buttonNode = /*#__PURE__*/react.createElement(wave, {
      disabled: !!innerLoading
    }, buttonNode);
  }
  return wrapSSR(buttonNode);
};
const Button = /*#__PURE__*/(0,react.forwardRef)(InternalButton);
if (false) {}
Button.Group = button_group;
Button.__ANT_BUTTON = true;
/* harmony default export */ var button_button = (Button);

/***/ }),

/***/ 43233:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22554);


/* harmony default export */ __webpack_exports__.ZP = (_button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

/***/ }),

/***/ 15025:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: function() { return /* binding */ getStyle; }
/* harmony export */ });
/* unused harmony export genCheckboxStyle */
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78949);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64813);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70157);
/* harmony import */ var _theme_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76734);



// ============================== Motion ==============================
const antCheckboxEffect = new _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_0__/* .Keyframes */ .E4('antCheckboxEffect', {
  '0%': {
    transform: 'scale(1)',
    opacity: 0.5
  },
  '100%': {
    transform: 'scale(1.6)',
    opacity: 0
  }
});
// ============================== Styles ==============================
const genCheckboxStyle = token => {
  const {
    checkboxCls
  } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;
  return [
  // ===================== Basic =====================
  {
    // Group
    [`${checkboxCls}-group`]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      display: 'inline-flex',
      flexWrap: 'wrap',
      columnGap: token.marginXS,
      // Group > Grid
      [`> ${token.antCls}-row`]: {
        flex: 1
      }
    }),
    // Wrapper
    [wrapperCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      display: 'inline-flex',
      alignItems: 'baseline',
      cursor: 'pointer',
      // Fix checkbox & radio in flex align #30260
      '&:after': {
        display: 'inline-block',
        width: 0,
        overflow: 'hidden',
        content: "'\\a0'"
      },
      // Checkbox near checkbox
      [`& + ${wrapperCls}`]: {
        marginInlineStart: 0
      },
      [`&${wrapperCls}-in-form-item`]: {
        'input[type="checkbox"]': {
          width: 14,
          height: 14 // FIXME: magic
        }
      }
    }),

    // Wrapper > Checkbox
    [checkboxCls]: Object.assign(Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .resetComponent */ .Wf)(token)), {
      position: 'relative',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      cursor: 'pointer',
      // To make alignment right when `controlHeight` is changed
      // Ref: https://github.com/ant-design/ant-design/issues/41564
      alignSelf: 'center',
      // Wrapper > Checkbox > input
      [`${checkboxCls}-input`]: {
        position: 'absolute',
        // Since baseline align will get additional space offset,
        // we need to move input to top to make it align with text.
        // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
        inset: 0,
        zIndex: 1,
        cursor: 'pointer',
        opacity: 0,
        margin: 0,
        [`&:focus-visible + ${checkboxCls}-inner`]: Object.assign({}, (0,_style__WEBPACK_IMPORTED_MODULE_1__/* .genFocusOutline */ .oN)(token))
      },
      // Wrapper > Checkbox > inner
      [`${checkboxCls}-inner`]: {
        boxSizing: 'border-box',
        position: 'relative',
        top: 0,
        insetInlineStart: 0,
        display: 'block',
        width: token.checkboxSize,
        height: token.checkboxSize,
        direction: 'ltr',
        backgroundColor: token.colorBgContainer,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadiusSM,
        borderCollapse: 'separate',
        transition: `all ${token.motionDurationSlow}`,
        '&:after': {
          boxSizing: 'border-box',
          position: 'absolute',
          top: '50%',
          insetInlineStart: '21.5%',
          display: 'table',
          width: token.checkboxSize / 14 * 5,
          height: token.checkboxSize / 14 * 8,
          border: `${token.lineWidthBold}px solid ${token.colorWhite}`,
          borderTop: 0,
          borderInlineStart: 0,
          transform: 'rotate(45deg) scale(0) translate(-50%,-50%)',
          opacity: 0,
          content: '""',
          transition: `all ${token.motionDurationFast} ${token.motionEaseInBack}, opacity ${token.motionDurationFast}`
        }
      },
      // Wrapper > Checkbox + Text
      '& + span': {
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS
      }
    })
  },
  // ================= Indeterminate =================
  {
    [checkboxCls]: {
      '&-indeterminate': {
        // Wrapper > Checkbox > inner
        [`${checkboxCls}-inner`]: {
          '&:after': {
            top: '50%',
            insetInlineStart: '50%',
            width: token.fontSizeLG / 2,
            height: token.fontSizeLG / 2,
            backgroundColor: token.colorPrimary,
            border: 0,
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1,
            content: '""'
          }
        }
      }
    }
  },
  // ===================== Hover =====================
  {
    // Wrapper
    [`${wrapperCls}:hover ${checkboxCls}:after`]: {
      visibility: 'visible'
    },
    // Wrapper & Wrapper > Checkbox
    [`
        ${wrapperCls}:not(${wrapperCls}-disabled),
        ${checkboxCls}:not(${checkboxCls}-disabled)
      `]: {
      [`&:hover ${checkboxCls}-inner`]: {
        borderColor: token.colorPrimary
      }
    },
    [`${wrapperCls}:not(${wrapperCls}-disabled)`]: {
      [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled) ${checkboxCls}-inner`]: {
        backgroundColor: token.colorPrimaryHover,
        borderColor: 'transparent'
      },
      [`&:hover ${checkboxCls}-checked:not(${checkboxCls}-disabled):after`]: {
        borderColor: token.colorPrimaryHover
      }
    }
  },
  // ==================== Checked ====================
  {
    // Wrapper > Checkbox
    [`${checkboxCls}-checked`]: {
      [`${checkboxCls}-inner`]: {
        backgroundColor: token.colorPrimary,
        borderColor: token.colorPrimary,
        '&:after': {
          opacity: 1,
          transform: 'rotate(45deg) scale(1) translate(-50%,-50%)',
          transition: `all ${token.motionDurationMid} ${token.motionEaseOutBack} ${token.motionDurationFast}`
        }
      },
      // Checked Effect
      '&:after': {
        position: 'absolute',
        top: 0,
        insetInlineStart: 0,
        width: '100%',
        height: '100%',
        borderRadius: token.borderRadiusSM,
        visibility: 'hidden',
        border: `${token.lineWidthBold}px solid ${token.colorPrimary}`,
        animationName: antCheckboxEffect,
        animationDuration: token.motionDurationSlow,
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'backwards',
        content: '""',
        transition: `all ${token.motionDurationSlow}`
      }
    },
    [`
        ${wrapperCls}-checked:not(${wrapperCls}-disabled),
        ${checkboxCls}-checked:not(${checkboxCls}-disabled)
      `]: {
      [`&:hover ${checkboxCls}-inner`]: {
        backgroundColor: token.colorPrimaryHover,
        borderColor: 'transparent'
      },
      [`&:hover ${checkboxCls}:after`]: {
        borderColor: token.colorPrimaryHover
      }
    }
  },
  // ==================== Disable ====================
  {
    // Wrapper
    [`${wrapperCls}-disabled`]: {
      cursor: 'not-allowed'
    },
    // Wrapper > Checkbox
    [`${checkboxCls}-disabled`]: {
      // Wrapper > Checkbox > input
      [`&, ${checkboxCls}-input`]: {
        cursor: 'not-allowed',
        // Disabled for native input to enable Tooltip event handler
        // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
        pointerEvents: 'none'
      },
      // Wrapper > Checkbox > inner
      [`${checkboxCls}-inner`]: {
        background: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        '&:after': {
          borderColor: token.colorTextDisabled
        }
      },
      '&:after': {
        display: 'none'
      },
      '& + span': {
        color: token.colorTextDisabled
      },
      [`&${checkboxCls}-indeterminate ${checkboxCls}-inner::after`]: {
        background: token.colorTextDisabled
      }
    }
  }];
};
// ============================== Export ==============================
function getStyle(prefixCls, token) {
  const checkboxToken = (0,_theme_internal__WEBPACK_IMPORTED_MODULE_2__/* .merge */ .TS)(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize
  });
  return [genCheckboxStyle(checkboxToken)];
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,_theme_internal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)('Checkbox', (token, _ref) => {
  let {
    prefixCls
  } = _ref;
  return [getStyle(prefixCls, token)];
}));

/***/ }),

/***/ 69310:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ DisabledContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

const DisabledContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DisabledContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ __webpack_exports__.Z = (DisabledContext);

/***/ }),

/***/ 32071:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ SizeContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var _hooks_useSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87702);


const SizeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
const SizeContextProvider = _ref => {
  let {
    children,
    size
  } = _ref;
  const mergedSize = (0,_hooks_useSize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(size);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SizeContext.Provider, {
    value: mergedSize
  }, children);
};
/* harmony default export */ __webpack_exports__.Z = (SizeContext);

/***/ }),

/***/ 69624:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E_: function() { return /* binding */ ConfigContext; },
/* harmony export */   oR: function() { return /* binding */ defaultIconPrefixCls; }
/* harmony export */ });
/* unused harmony export ConfigConsumer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

const defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `ant-${suffixCls}` : 'ant';
};
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
const ConfigContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const {
  Consumer: ConfigConsumer
} = ConfigContext;

/***/ }),

/***/ 87702:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var _SizeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32071);


const useSize = customSize => {
  const size = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_SizeContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const mergedSize = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
/* harmony default export */ __webpack_exports__.Z = (useSize);

/***/ }),

/***/ 20581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ config_provider; },
  w6: function() { return /* binding */ globalConfig; }
});

// UNUSED EXPORTS: ConfigConsumer, ConfigContext, configConsumerProps, defaultIconPrefixCls, defaultPrefixCls, warnContext

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.11.1_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/cssinjs/es/index.js + 22 modules
var es = __webpack_require__(78949);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(28470);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(7477);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/utils/set.js
var set = __webpack_require__(49244);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/form/validateMessagesContext.js

// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
/* harmony default export */ var validateMessagesContext = (/*#__PURE__*/(0,react.createContext)(undefined));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/modal/locale.js
var modal_locale = __webpack_require__(24429);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/context.js
var locale_context = __webpack_require__(61519);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/index.js





const ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) {}
  react.useEffect(() => {
    (0,modal_locale/* changeConfirmLocale */.f)(locale && locale.Modal);
    return () => {
      (0,modal_locale/* changeConfirmLocale */.f)();
    };
  }, [locale]);
  const getMemoizedContextValue = react.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/react.createElement(locale_context/* default */.Z.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) {}
/* harmony default export */ var es_locale = (LocaleProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/en_US.js + 2 modules
var en_US = __webpack_require__(39672);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/internal.js + 14 modules
var internal = __webpack_require__(37576);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(23323);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(69624);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js + 1 modules
var colors_es = __webpack_require__(44824);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99590);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(34549);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(90834);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/cssVariables.js
/* eslint-disable import/prefer-default-export, prefer-destructuring */





const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new dist_module/* TinyColor */.C(colorVal);
    const colorPalettes = (0,colors_es/* generate */.R_)(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new dist_module/* TinyColor */.C(theme.primaryColor);
    const primaryColors = (0,colors_es/* generate */.R_)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new dist_module/* TinyColor */.C(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0,canUseDom/* default */.Z)()) {
    (0,dynamicCSS/* updateCSS */.hq)(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
     false ? 0 : void 0;
  }
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(69310);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(32071);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/hooks/useConfig.js



function useConfig() {
  const componentDisabled = (0,react.useContext)(DisabledContext/* default */.Z);
  const componentSize = (0,react.useContext)(SizeContext/* default */.Z);
  return {
    componentDisabled,
    componentSize
  };
}
/* harmony default export */ var hooks_useConfig = (useConfig);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/isEqual.js
var isEqual = __webpack_require__(33795);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/hooks/useTheme.js



function useTheme(theme, parentTheme) {
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? internal/* defaultConfig */.u_ : parentTheme;
  const mergedTheme = (0,useMemo/* default */.Z)(() => {
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0,isEqual/* default */.Z)(prevTheme, nextTheme, true);
  }));
  return mergedTheme;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(13199);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/MotionWrapper.js



function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = (0,internal/* useToken */.dQ)();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = react.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* Provider */.zt, {
      motion: motion
    }, children);
  }
  return children;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/index.js
var style = __webpack_require__(64813);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/style/index.js



const useStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0,internal/* useToken */.dQ)();
  // Generate style for icons
  return (0,es/* useStyleRegister */.xy)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, (0,style/* resetIcon */.Ro)()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: 'block'
      }
    })
  }]);
};
/* harmony default export */ var config_provider_style = (useStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/index.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




















/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme,
 * we record the theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext = (/* unused pure expression or super */ null && ( false ? 0 : /* istanbul ignore next */
null));

const configConsumerProps = (/* unused pure expression or super */ null && (['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader']));
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select', 'button'];
const defaultPrefixCls = 'ant';
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || config_provider_context/* defaultIconPrefixCls */.oR;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = _ref => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
       false ? 0 : void 0;
      registerTheme(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme
});
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled
  } = props;
  // =================================== Warning ===================================
  if (false) {}
  // =================================== Context ===================================
  const getPrefixCls = react.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) return customizePrefixCls;
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || config_provider_context/* defaultIconPrefixCls */.oR;
  const shouldWrapSSR = iconPrefixCls !== parentContext.iconPrefixCls;
  const csp = customCsp || parentContext.csp;
  const wrapSSR = config_provider_style(iconPrefixCls, csp);
  const mergedTheme = useTheme(theme, parentContext.theme);
  if (false) {}
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0,useMemo/* default */.Z)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = react.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = shouldWrapSSR ? wrapSSR(children) : children;
  const validateMessages = react.useMemo(() => {
    var _a, _b, _c;
    return (0,set/* merge */.T)(((_a = en_US/* default */.Z.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/react.createElement(validateMessagesContext.Provider, {
      value: validateMessages
    }, children);
  }
  if (locale) {
    childNode = /*#__PURE__*/react.createElement(es_locale, {
      locale: locale,
      _ANT_MARK__: ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/react.createElement(Context/* default */.Z.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/react.createElement(SizeContext/* SizeContextProvider */.q, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/react.createElement(MotionWrapper, null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = react.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token
      } = _a,
      rest = __rest(_a, ["algorithm", "token"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,es/* createTheme */.jG)(algorithm) : undefined;
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: Object.assign(Object.assign({}, seed/* default */.Z), token)
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/react.createElement(internal/* DesignTokenContext */.Mj.Provider, {
      value: memoTheme
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/react.createElement(DisabledContext/* DisabledContextProvider */.n, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/react.createElement(config_provider_context/* ConfigContext */.E_.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = react.useContext(config_provider_context/* ConfigContext */.E_);
  const antLocale = react.useContext(locale_context/* default */.Z);
  return /*#__PURE__*/react.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = config_provider_context/* ConfigContext */.E_;
ConfigProvider.SizeContext = SizeContext/* default */.Z;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = hooks_useConfig;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     false ? 0 : void 0;
    return SizeContext/* default */.Z;
  }
});
if (false) {}
/* harmony default export */ var config_provider = (ConfigProvider);

/***/ }),

/***/ 90764:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ux: function() { return /* binding */ NoFormStyle; },
/* harmony export */   aM: function() { return /* binding */ FormItemInputContext; }
/* harmony export */ });
/* unused harmony exports FormContext, NoStyleItemContext, FormProvider, FormItemPrefixContext */
/* harmony import */ var rc_field_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40856);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50959);




const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: () => {}
});
const NoStyleItemContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext(null)));
const FormProvider = props => {
  const providerProps = omit(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(RcFormProvider, Object.assign({}, providerProps));
};
const FormItemPrefixContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  prefixCls: ''
});
const FormItemInputContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const NoFormStyle = _ref => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FormItemInputContext);
  const newFormItemInputContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};

/***/ }),

/***/ 53276:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ input; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(69624);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/form/context.js
var form_context = __webpack_require__(90764);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/index.js
var style = __webpack_require__(64813);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(85482);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(70157);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(76734);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/style/index.js



const genPlaceholderStyle = color => ({
  // Firefox
  '&::-moz-placeholder': {
    opacity: 1
  },
  '&::placeholder': {
    color,
    userSelect: 'none' // https://github.com/ant-design/ant-design/pull/32639
  },

  '&:placeholder-shown': {
    textOverflow: 'ellipsis'
  }
});
const genHoverStyle = token => ({
  borderColor: token.inputBorderHoverColor,
  borderInlineEndWidth: token.lineWidth
});
const genActiveStyle = token => ({
  borderColor: token.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${token.controlOutline}`,
  borderInlineEndWidth: token.lineWidth,
  outline: 0
});
const genDisabledStyle = token => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: 'none',
  cursor: 'not-allowed',
  opacity: 1,
  '&:hover': Object.assign({}, genHoverStyle((0,statistic/* merge */.TS)(token, {
    inputBorderHoverColor: token.colorBorder
  })))
});
const genInputLargeStyle = token => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token;
  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = token => ({
  padding: `${token.inputPaddingVerticalSM}px ${token.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token.borderRadiusSM
});
const genStatusStyle = (token, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorOutline,
    colorWarningOutline,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      '&:hover': {
        borderColor: colorErrorBorderHover
      },
      '&:focus, &-focused': Object.assign({}, genActiveStyle((0,statistic/* merge */.TS)(token, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      }))),
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      '&:hover': {
        borderColor: colorWarningBorderHover
      },
      '&:focus, &-focused': Object.assign({}, genActiveStyle((0,statistic/* merge */.TS)(token, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      }))),
      [`${componentCls}-prefix, ${componentCls}-suffix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = token => Object.assign(Object.assign({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  padding: `${token.inputPaddingVertical}px ${token.inputPaddingHorizontal}px`,
  color: token.colorText,
  fontSize: token.fontSize,
  lineHeight: token.lineHeight,
  backgroundColor: token.colorBgContainer,
  backgroundImage: 'none',
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: token.colorBorder,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`
}, genPlaceholderStyle(token.colorTextPlaceholder)), {
  '&:hover': Object.assign({}, genHoverStyle(token)),
  '&:focus, &-focused': Object.assign({}, genActiveStyle(token)),
  '&-disabled, &[disabled]': Object.assign({}, genDisabledStyle(token)),
  '&-borderless': {
    '&, &:hover, &:focus, &-focused, &-disabled, &[disabled]': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none'
    }
  },
  // Reset height for `textarea`s
  'textarea&': {
    maxWidth: '100%',
    height: 'auto',
    minHeight: token.controlHeight,
    lineHeight: token.lineHeight,
    verticalAlign: 'bottom',
    transition: `all ${token.motionDurationSlow}, height 0s`,
    resize: 'vertical'
  },
  // Size
  '&-lg': Object.assign({}, genInputLargeStyle(token)),
  '&-sm': Object.assign({}, genInputSmallStyle(token)),
  // RTL
  '&-rtl': {
    direction: 'rtl'
  },
  '&-textarea-rtl': {
    direction: 'rtl'
  }
});
const genInputGroupStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: 'relative',
    display: 'table',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token.paddingXS,
      '&:last-child': {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: Object.assign({}, genInputLargeStyle(token)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: Object.assign({}, genInputSmallStyle(token)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: 'table-cell',
      '&:not(:first-child):not(:last-child)': {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: 'table-cell',
        width: 1,
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        '&:not(:first-child):not(:last-child)': {
          borderRadius: 0
        }
      },
      '&-wrap > *': {
        display: 'block !important'
      },
      '&-addon': {
        position: 'relative',
        padding: `0 ${token.inputPaddingHorizontal}px`,
        color: token.colorText,
        fontWeight: 'normal',
        fontSize: token.fontSize,
        textAlign: 'center',
        backgroundColor: token.colorFillAlter,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `-${token.inputPaddingVertical + 1}px -${token.inputPaddingHorizontal}px`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: 'inherit',
              border: `${token.lineWidth}px ${token.lineType} transparent`,
              boxShadow: 'none'
            }
          },
          '&-open, &-focused': {
            [`${antCls}-select-selector`]: {
              color: token.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px -${token.inputPaddingHorizontal}px`,
          backgroundColor: 'transparent',
          [`${antCls}-cascader-input`]: {
            textAlign: 'start',
            border: 0,
            boxShadow: 'none'
          }
        }
      },
      '&-addon:first-child': {
        borderInlineEnd: 0
      },
      '&-addon:last-child': {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      width: '100%',
      marginBottom: 0,
      textAlign: 'inherit',
      '&:focus': {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      '&:hover': {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      '&:not(:last-child)': {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token.borderRadius,
          borderEndStartRadius: token.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: Object.assign(Object.assign({
      display: 'block'
    }, (0,style/* clearFix */.dF)()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        '&:not(:first-child):not(:last-child)': {
          borderInlineEndWidth: token.lineWidth,
          '&:hover': {
            zIndex: 1
          },
          '&:focus': {
            zIndex: 1
          }
        }
      },
      '& > *': {
        display: 'inline-block',
        float: 'none',
        verticalAlign: 'top',
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: 'inline-flex'
      },
      '& > *:not(:last-child)': {
        marginInlineEnd: -token.lineWidth,
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: 'none'
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        '&:hover': {
          zIndex: 1
        },
        '&:focus': {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1 // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: 'top'
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: -token.lineWidth,
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token.borderRadius
          }
        }
      }
    })
  };
};
const genInputStyle = token => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), genBasicInputStyle(token)), genStatusStyle(token, componentCls)), {
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        '-webkit-appearance': 'none'
      }
    })
  };
};
const genAllowClearStyle = token => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: 'pointer',
      transition: `color ${token.motionDurationSlow}`,
      '&:hover': {
        color: token.colorTextTertiary
      },
      '&:active': {
        color: token.colorText
      },
      '&-hidden': {
        visibility: 'hidden'
      },
      '&-has-suffix': {
        margin: `0 ${token.inputAffixPadding}px`
      }
    }
  };
};
const genAffixStyle = token => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  return {
    [`${componentCls}-affix-wrapper`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, genBasicInputStyle(token)), {
      display: 'inline-flex',
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: Object.assign(Object.assign({}, genHoverStyle(token)), {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      '&-focused, &:focus': {
        zIndex: 1
      },
      '&-disabled': {
        [`${componentCls}[disabled]`]: {
          background: 'transparent'
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: 'inherit',
        border: 'none',
        borderRadius: 0,
        outline: 'none',
        '&::-ms-reveal': {
          display: 'none'
        },
        '&:focus': {
          boxShadow: 'none !important'
        }
      },
      '&::before': {
        display: 'inline-block',
        width: 0,
        visibility: 'hidden',
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        '&-prefix, &-suffix': {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          '> *:not(:last-child)': {
            marginInlineEnd: token.paddingXS
          }
        },
        '&-show-count-suffix': {
          color: colorTextDescription
        },
        '&-show-count-has-suffix': {
          marginInlineEnd: token.paddingXXS
        },
        '&-prefix': {
          marginInlineEnd: inputAffixPadding
        },
        '&-suffix': {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: 'pointer',
        transition: `all ${motionDurationSlow}`,
        '&:hover': {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token, `${componentCls}-affix-wrapper`))
  };
};
const genGroupStyle = token => {
  const {
    componentCls,
    colorError,
    colorWarning,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: Object.assign(Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), genInputGroupStyle(token)), {
      '&-rtl': {
        direction: 'rtl'
      },
      '&-wrapper': {
        display: 'inline-block',
        width: '100%',
        textAlign: 'start',
        verticalAlign: 'top',
        '&-rtl': {
          direction: 'rtl'
        },
        // Size
        '&-lg': {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG
          }
        },
        '&-sm': {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        '&-status-error': {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        '&-status-warning': {
          [`${componentCls}-group-addon`]: {
            color: colorWarning,
            borderColor: colorWarning
          }
        },
        '&-disabled': {
          [`${componentCls}-group-addon`]: Object.assign({}, genDisabledStyle(token))
        },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    })
  };
};
const genSearchInputStyle = token => {
  const {
    componentCls,
    antCls
  } = token;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        '&:hover, &:focus': {
          borderColor: token.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token.lineHeightLG - 0.0002
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token.borderRadius,
            borderEndEndRadius: token.borderRadius,
            borderEndStartRadius: 0
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token.colorTextDescription,
            '&:hover': {
              color: token.colorPrimaryHover
            },
            '&:active': {
              color: token.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token.controlHeight,
        '&:hover, &:focus': {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token.controlHeightSM
      },
      '&-rtl': {
        direction: 'rtl'
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: -token.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          '&:hover,&:focus,&:active': {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function initInputToken(token) {
  // @ts-ignore
  return (0,statistic/* merge */.TS)(token, {
    inputAffixPadding: token.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token.controlHeight - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token.controlHeightLG - token.fontSizeLG * token.lineHeightLG) / 2 * 10) / 10 - token.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token.controlHeightSM - token.fontSize * token.lineHeight) / 2 * 10) / 10 - token.lineWidth, 0),
    inputPaddingHorizontal: token.paddingSM - token.lineWidth,
    inputPaddingHorizontalSM: token.paddingXS - token.lineWidth,
    inputPaddingHorizontalLG: token.controlPaddingHorizontal - token.lineWidth,
    inputBorderHoverColor: token.colorPrimaryHover,
    inputBorderActiveColor: token.colorPrimaryHover
  });
}
const genTextAreaStyle = token => {
  const {
    componentCls,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: 'relative',
      '&-show-count': {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: '100%'
        },
        [`${componentCls}-data-count`]: {
          position: 'absolute',
          bottom: -token.fontSize * token.lineHeight,
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: 'nowrap',
          pointerEvents: 'none'
        }
      },
      '&-allow-clear': {
        [`> ${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${textareaPrefixCls}-has-feedback`]: {
        [`${componentCls}`]: {
          paddingInlineEnd: paddingLG
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: 'inherit',
          border: 'none',
          outline: 'none',
          '&:focus': {
            boxShadow: 'none !important'
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          '> *:not(:last-child)': {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: 'absolute',
            insetInlineEnd: token.paddingXS,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: token.inputPaddingHorizontal,
            bottom: 0,
            zIndex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            margin: 'auto',
            pointerEvents: 'none'
          }
        }
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var input_style = ((0,genComponentStyleHook/* default */.Z)('Input', token => {
  const inputToken = initInputToken(token);
  return [genInputStyle(inputToken), genTextAreaStyle(inputToken), genAffixStyle(inputToken), genGroupStyle(inputToken), genSearchInputStyle(inputToken),
  // =====================================================
  // ==             Space Compact                       ==
  // =====================================================
  (0,compact_item/* genCompactItemStyle */.c)(inputToken)];
}));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/Group.js







const Group = props => {
  const {
    getPrefixCls,
    direction
  } = (0,react.useContext)(context/* ConfigContext */.E_);
  const {
    prefixCls: customizePrefixCls,
    className = ''
  } = props;
  const prefixCls = getPrefixCls('input-group', customizePrefixCls);
  const inputPrefixCls = getPrefixCls('input');
  const [wrapSSR, hashId] = input_style(inputPrefixCls);
  const cls = classnames_default()(prefixCls, {
    [`${prefixCls}-lg`]: props.size === 'large',
    [`${prefixCls}-sm`]: props.size === 'small',
    [`${prefixCls}-compact`]: props.compact,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, hashId, className);
  const formItemContext = (0,react.useContext)(form_context/* FormItemInputContext */.aM);
  const groupFormItemContext = (0,react.useMemo)(() => Object.assign(Object.assign({}, formItemContext), {
    isFormItemInput: false
  }), [formItemContext]);
  if (false) {}
  return wrapSSR( /*#__PURE__*/react.createElement("span", {
    className: cls,
    style: props.style,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
    onFocus: props.onFocus,
    onBlur: props.onBlur
  }, /*#__PURE__*/react.createElement(form_context/* FormItemInputContext */.aM.Provider, {
    value: groupFormItemContext
  }, props.children)));
};
/* harmony default export */ var input_Group = (Group);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(77214);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-input@1.0.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-input/es/index.js + 2 modules
var es = __webpack_require__(14265);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/statusUtils.js

const InputStatuses = (/* unused pure expression or super */ null && (['warning', 'error', '']));
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classnames_default()({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/DisabledContext.js
var DisabledContext = __webpack_require__(69310);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/hooks/useSize.js
var useSize = __webpack_require__(87702);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/space/Compact.js
var Compact = __webpack_require__(34102);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js

function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = (0,react.useRef)([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      var _a, _b, _c, _d;
      if (((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.input.getAttribute('type')) === 'password' && ((_c = inputRef.current) === null || _c === void 0 ? void 0 : _c.input.hasAttribute('value'))) {
        (_d = inputRef.current) === null || _d === void 0 ? void 0 : _d.input.removeAttribute('value');
      }
    }));
  };
  (0,react.useEffect)(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach(timer => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/utils.js
// eslint-disable-next-line import/prefer-default-export
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/Input.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















function triggerFocus(element, option) {
  if (!element) {
    return;
  }
  element.focus(option);
  // Selection content
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
        break;
    }
  }
}
const Input = /*#__PURE__*/(0,react.forwardRef)((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      bordered = true,
      status: customStatus,
      size: customSize,
      disabled: customDisabled,
      onBlur,
      onFocus,
      suffix,
      allowClear,
      addonAfter,
      addonBefore,
      className,
      rootClassName,
      onChange,
      classNames: classes
    } = props,
    rest = __rest(props, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "rootClassName", "onChange", "classNames"]);
  const {
    getPrefixCls,
    direction,
    input
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  const inputRef = (0,react.useRef)(null);
  // Style
  const [wrapSSR, hashId] = input_style(prefixCls);
  // ===================== Compact Item =====================
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  // ===================== Size =====================
  const mergedSize = (0,useSize/* default */.Z)(ctx => {
    var _a;
    return (_a = customSize !== null && customSize !== void 0 ? customSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = (0,react.useContext)(form_context/* FormItemInputContext */.aM);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  // ===================== Focus warning =====================
  const inputHasPrefixSuffix = hasPrefixSuffix(props) || !!hasFeedback;
  const prevHasPrefixSuffix = (0,react.useRef)(inputHasPrefixSuffix);
  (0,react.useEffect)(() => {
    var _a;
    if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
       false ? 0 : void 0;
    }
    prevHasPrefixSuffix.current = inputHasPrefixSuffix;
  }, [inputHasPrefixSuffix]);
  // ===================== Remove Password value =====================
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = e => {
    removePasswordTimeout();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  const handleFocus = e => {
    removePasswordTimeout();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  const handleChange = e => {
    removePasswordTimeout();
    onChange === null || onChange === void 0 ? void 0 : onChange(e);
  };
  const suffixNode = (hasFeedback || suffix) && /*#__PURE__*/react.createElement(react.Fragment, null, suffix, hasFeedback && feedbackIcon);
  // Allow clear
  let mergedAllowClear;
  if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null)
    };
  }
  return wrapSSR( /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    ref: (0,es_ref/* composeRef */.sQ)(ref, inputRef),
    prefixCls: prefixCls,
    autoComplete: input === null || input === void 0 ? void 0 : input.autoComplete
  }, rest, {
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: classnames_default()(className, rootClassName, compactItemClassnames),
    onChange: handleChange,
    addonAfter: addonAfter && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonAfter)),
    addonBefore: addonBefore && /*#__PURE__*/react.createElement(Compact/* NoCompactStyle */.BR, null, /*#__PURE__*/react.createElement(form_context/* NoFormStyle */.Ux, {
      override: true,
      status: true
    }, addonBefore)),
    classNames: Object.assign(Object.assign({}, classes), {
      input: classnames_default()({
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-lg`]: mergedSize === 'large',
        [`${prefixCls}-rtl`]: direction === 'rtl',
        [`${prefixCls}-borderless`]: !bordered
      }, !inputHasPrefixSuffix && getStatusClassNames(prefixCls, mergedStatus), classes === null || classes === void 0 ? void 0 : classes.input, hashId)
    }),
    classes: {
      affixWrapper: classnames_default()({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === 'small',
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === 'large',
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered
      }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus, hasFeedback), hashId),
      wrapper: classnames_default()({
        [`${prefixCls}-group-rtl`]: direction === 'rtl'
      }, hashId),
      group: classnames_default()({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === 'small',
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === 'large',
        [`${prefixCls}-group-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-group-wrapper-disabled`]: mergedDisabled
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    }
  })));
});
/* harmony default export */ var input_Input = (Input);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/EyeInvisibleOutlined.js + 1 modules
var EyeInvisibleOutlined = __webpack_require__(60971);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(23705);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(47740);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/Password.js
var Password_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const defaultIconRender = visible => visible ? /*#__PURE__*/react.createElement(EyeOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(EyeInvisibleOutlined/* default */.Z, null);
const ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};
const Password = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    visibilityToggle = true
  } = props;
  const visibilityControlled = typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined;
  const [visible, setVisible] = (0,react.useState)(() => visibilityControlled ? visibilityToggle.visible : false);
  const inputRef = (0,react.useRef)(null);
  react.useEffect(() => {
    if (visibilityControlled) {
      setVisible(visibilityToggle.visible);
    }
  }, [visibilityControlled, visibilityToggle]);
  // Remove Password value
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef);
  const onVisibleChange = () => {
    const {
      disabled
    } = props;
    if (disabled) {
      return;
    }
    if (visible) {
      removePasswordTimeout();
    }
    setVisible(prevState => {
      var _a;
      const newState = !prevState;
      if (typeof visibilityToggle === 'object') {
        (_a = visibilityToggle.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(visibilityToggle, newState);
      }
      return newState;
    });
  };
  const getIcon = prefixCls => {
    const {
      action = 'click',
      iconRender = defaultIconRender
    } = props;
    const iconTrigger = ActionMap[action] || '';
    const icon = iconRender(visible);
    const iconProps = {
      [iconTrigger]: onVisibleChange,
      className: `${prefixCls}-icon`,
      key: 'passwordIcon',
      onMouseDown: e => {
        // Prevent focused state lost
        // https://github.com/ant-design/ant-design/issues/15173
        e.preventDefault();
      },
      onMouseUp: e => {
        // Prevent caret position change
        // https://github.com/ant-design/ant-design/issues/23524
        e.preventDefault();
      }
    };
    return /*#__PURE__*/react.cloneElement( /*#__PURE__*/react.isValidElement(icon) ? icon : /*#__PURE__*/react.createElement("span", null, icon), iconProps);
  };
  const {
      className,
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      size
    } = props,
    restProps = Password_rest(props, ["className", "prefixCls", "inputPrefixCls", "size"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  const prefixCls = getPrefixCls('input-password', customizePrefixCls);
  const suffixIcon = visibilityToggle && getIcon(prefixCls);
  const inputClassName = classnames_default()(prefixCls, className, {
    [`${prefixCls}-${size}`]: !!size
  });
  const omittedProps = Object.assign(Object.assign({}, (0,omit/* default */.Z)(restProps, ['suffix', 'iconRender', 'visibilityToggle'])), {
    type: visible ? 'text' : 'password',
    className: inputClassName,
    prefixCls: inputPrefixCls,
    suffix: suffixIcon
  });
  if (size) {
    omittedProps.size = size;
  }
  return /*#__PURE__*/react.createElement(input_Input, Object.assign({
    ref: (0,es_ref/* composeRef */.sQ)(ref, inputRef)
  }, omittedProps));
});
if (false) {}
/* harmony default export */ var input_Password = (Password);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(72111);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(90016);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(43233);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/Search.js
var Search_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const Search = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      inputPrefixCls: customizeInputPrefixCls,
      className,
      size: customizeSize,
      suffix,
      enterButton = false,
      addonAfter,
      loading,
      disabled,
      onSearch: customOnSearch,
      onChange: customOnChange,
      onCompositionStart,
      onCompositionEnd
    } = props,
    restProps = Search_rest(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const composedRef = react.useRef(false);
  const prefixCls = getPrefixCls('input-search', customizePrefixCls);
  const inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  const {
    compactSize
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const size = (0,useSize/* default */.Z)(ctx => {
    var _a;
    return (_a = customizeSize !== null && customizeSize !== void 0 ? customizeSize : compactSize) !== null && _a !== void 0 ? _a : ctx;
  });
  const inputRef = react.useRef(null);
  const onChange = e => {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }
    if (customOnChange) {
      customOnChange(e);
    }
  };
  const onMouseDown = e => {
    var _a;
    if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
      e.preventDefault();
    }
  };
  const onSearch = e => {
    var _a, _b;
    if (customOnSearch) {
      customOnSearch((_b = (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.value, e);
    }
  };
  const onPressEnter = e => {
    if (composedRef.current || loading) {
      return;
    }
    onSearch(e);
  };
  const searchIcon = typeof enterButton === 'boolean' ? /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, null) : null;
  const btnClassName = `${prefixCls}-button`;
  let button;
  const enterButtonAsElement = enterButton || {};
  const isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;
  if (isAntdButton || enterButtonAsElement.type === 'button') {
    button = (0,reactNode/* cloneElement */.Tm)(enterButtonAsElement, Object.assign({
      onMouseDown,
      onClick: e => {
        var _a, _b;
        (_b = (_a = enterButtonAsElement === null || enterButtonAsElement === void 0 ? void 0 : enterButtonAsElement.props) === null || _a === void 0 ? void 0 : _a.onClick) === null || _b === void 0 ? void 0 : _b.call(_a, e);
        onSearch(e);
      },
      key: 'enterButton'
    }, isAntdButton ? {
      className: btnClassName,
      size
    } : {}));
  } else {
    button = /*#__PURE__*/react.createElement(es_button/* default */.ZP, {
      className: btnClassName,
      type: enterButton ? 'primary' : undefined,
      size: size,
      disabled: disabled,
      key: "enterButton",
      onMouseDown: onMouseDown,
      onClick: onSearch,
      loading: loading,
      icon: searchIcon
    }, enterButton);
  }
  if (addonAfter) {
    button = [button, (0,reactNode/* cloneElement */.Tm)(addonAfter, {
      key: 'addonAfter'
    })];
  }
  const cls = classnames_default()(prefixCls, {
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-${size}`]: !!size,
    [`${prefixCls}-with-button`]: !!enterButton
  }, className);
  const handleOnCompositionStart = e => {
    composedRef.current = true;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  const handleOnCompositionEnd = e => {
    composedRef.current = false;
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  return /*#__PURE__*/react.createElement(input_Input, Object.assign({
    ref: (0,es_ref/* composeRef */.sQ)(inputRef, ref),
    onPressEnter: onPressEnter
  }, restProps, {
    size: size,
    onCompositionStart: handleOnCompositionStart,
    onCompositionEnd: handleOnCompositionEnd,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix: suffix,
    onChange: onChange,
    className: cls,
    disabled: disabled
  }));
});
if (false) {}
/* harmony default export */ var input_Search = (Search);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-textarea@1.2.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-textarea/es/index.js + 3 modules
var rc_textarea_es = __webpack_require__(28298);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/TextArea.js
var TextArea_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};












const TextArea = /*#__PURE__*/(0,react.forwardRef)((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      bordered = true,
      size: customizeSize,
      disabled: customDisabled,
      status: customStatus,
      allowClear,
      showCount,
      classNames: classes
    } = _a,
    rest = TextArea_rest(_a, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "showCount", "classNames"]);
  const {
    getPrefixCls,
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  // ===================== Size =====================
  const mergedSize = (0,useSize/* default */.Z)(customizeSize);
  // ===================== Disabled =====================
  const disabled = react.useContext(DisabledContext/* default */.Z);
  const mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Status =====================
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = react.useContext(form_context/* FormItemInputContext */.aM);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  // ===================== Ref =====================
  const innerRef = react.useRef(null);
  react.useImperativeHandle(ref, () => {
    var _a;
    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: option => {
        var _a, _b;
        triggerFocus((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: () => {
        var _a;
        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  // Allow clear
  let mergedAllowClear;
  if (typeof allowClear === 'object' && (allowClear === null || allowClear === void 0 ? void 0 : allowClear.clearIcon)) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null)
    };
  }
  // ===================== Style =====================
  const [wrapSSR, hashId] = input_style(prefixCls);
  return wrapSSR( /*#__PURE__*/react.createElement(rc_textarea_es/* default */.Z, Object.assign({}, rest, {
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    classes: {
      affixWrapper: classnames_default()(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === 'rtl',
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === 'small',
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === 'large',
        [`${prefixCls}-textarea-show-count`]: showCount
      }, getStatusClassNames(`${prefixCls}-affix-wrapper`, mergedStatus), hashId)
    },
    classNames: Object.assign(Object.assign({}, classes), {
      textarea: classnames_default()({
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-sm`]: mergedSize === 'small',
        [`${prefixCls}-lg`]: mergedSize === 'large'
      }, getStatusClassNames(prefixCls, mergedStatus), hashId, classes === null || classes === void 0 ? void 0 : classes.textarea)
    }),
    prefixCls: prefixCls,
    suffix: hasFeedback && /*#__PURE__*/react.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    showCount: showCount,
    ref: innerRef
  })));
});
/* harmony default export */ var input_TextArea = (TextArea);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/index.js





const es_input_Input = input_Input;
if (false) {}
es_input_Input.Group = input_Group;
es_input_Input.Search = input_Search;
es_input_Input.TextArea = input_TextArea;
es_input_Input.Password = input_Password;
/* harmony default export */ var input = (es_input_Input);

/***/ }),

/***/ 61519:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

const LocaleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
/* harmony default export */ __webpack_exports__.Z = (LocaleContext);

/***/ }),

/***/ 39672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_locale_en_US; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/rc-pagination@3.5.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-pagination/es/locale/en_US.js
var en_US = __webpack_require__(91018);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-picker@3.8.2_dayjs@1.11.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-picker/es/locale/en_US.js
var locale_en_US = __webpack_require__(77466);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/time-picker/locale/en_US.js
var time_picker_locale_en_US = __webpack_require__(72461);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/date-picker/locale/en_US.js


// Merge into a locale object
const locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US/* default */.Z),
  timePickerLocale: Object.assign({}, time_picker_locale_en_US/* default */.Z)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ var date_picker_locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ var calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/en_US.js
/* eslint-disable no-template-curly-in-string */




const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: en_US/* default */.Z,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US/* default */.Z,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh'
  },
  ColorPicker: {
    presetEmpty: 'Empty'
  }
};
/* harmony default export */ var es_locale_en_US = (localeValues);

/***/ }),

/***/ 52918:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61519);
/* harmony import */ var _en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39672);



const useLocale = (componentName, defaultLocale) => {
  const fullLocale = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
  const getLocale = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return _en_US__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
/* harmony default export */ __webpack_exports__.Z = (useLocale);

/***/ }),

/***/ 26117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ es_message; }
});

// UNUSED EXPORTS: actDestroy, actWrapper

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(23190);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/React/render.js
var render = __webpack_require__(50269);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/index.js + 7 modules
var config_provider = __webpack_require__(20581);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(93763);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js + 1 modules
var ExclamationCircleFilled = __webpack_require__(47141);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js + 1 modules
var CloseCircleFilled = __webpack_require__(77214);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js + 1 modules
var CheckCircleFilled = __webpack_require__(73486);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/InfoCircleFilled.js + 1 modules
var InfoCircleFilled = __webpack_require__(93685);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-notification@5.0.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-notification/es/index.js + 3 modules
var es = __webpack_require__(6049);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.11.1_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/cssinjs/es/index.js + 22 modules
var cssinjs_es = __webpack_require__(78949);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/index.js
var style = __webpack_require__(64813);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(76734);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(70157);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/style/index.js



const genMessageStyle = token => {
  const {
    componentCls,
    iconCls,
    boxShadow,
    colorText,
    colorSuccess,
    colorError,
    colorWarning,
    colorInfo,
    fontSizeLG,
    motionEaseInOutCirc,
    motionDurationSlow,
    marginXS,
    paddingXS,
    borderRadiusLG,
    zIndexPopup,
    // Custom token
    contentPadding,
    contentBg
  } = token;
  const noticeCls = `${componentCls}-notice`;
  const messageMoveIn = new cssinjs_es/* Keyframes */.E4('MessageMoveIn', {
    '0%': {
      padding: 0,
      transform: 'translateY(-100%)',
      opacity: 0
    },
    '100%': {
      padding: paddingXS,
      transform: 'translateY(0)',
      opacity: 1
    }
  });
  const messageMoveOut = new cssinjs_es/* Keyframes */.E4('MessageMoveOut', {
    '0%': {
      maxHeight: token.height,
      padding: paddingXS,
      opacity: 1
    },
    '100%': {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  });
  const noticeStyle = {
    padding: paddingXS,
    textAlign: 'center',
    [`${componentCls}-custom-content > ${iconCls}`]: {
      verticalAlign: 'text-bottom',
      marginInlineEnd: marginXS,
      fontSize: fontSizeLG
    },
    [`${noticeCls}-content`]: {
      display: 'inline-block',
      padding: contentPadding,
      background: contentBg,
      borderRadius: borderRadiusLG,
      boxShadow,
      pointerEvents: 'all'
    },
    [`${componentCls}-success > ${iconCls}`]: {
      color: colorSuccess
    },
    [`${componentCls}-error > ${iconCls}`]: {
      color: colorError
    },
    [`${componentCls}-warning > ${iconCls}`]: {
      color: colorWarning
    },
    [`${componentCls}-info > ${iconCls},
      ${componentCls}-loading > ${iconCls}`]: {
      color: colorInfo
    }
  };
  return [
  // ============================ Holder ============================
  {
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      color: colorText,
      position: 'fixed',
      top: marginXS,
      width: '100%',
      pointerEvents: 'none',
      zIndex: zIndexPopup,
      [`${componentCls}-move-up`]: {
        animationFillMode: 'forwards'
      },
      [`
        ${componentCls}-move-up-appear,
        ${componentCls}-move-up-enter
      `]: {
        animationName: messageMoveIn,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`
        ${componentCls}-move-up-appear${componentCls}-move-up-appear-active,
        ${componentCls}-move-up-enter${componentCls}-move-up-enter-active
      `]: {
        animationPlayState: 'running'
      },
      [`${componentCls}-move-up-leave`]: {
        animationName: messageMoveOut,
        animationDuration: motionDurationSlow,
        animationPlayState: 'paused',
        animationTimingFunction: motionEaseInOutCirc
      },
      [`${componentCls}-move-up-leave${componentCls}-move-up-leave-active`]: {
        animationPlayState: 'running'
      },
      '&-rtl': {
        direction: 'rtl',
        span: {
          direction: 'rtl'
        }
      }
    })
  },
  // ============================ Notice ============================
  {
    [componentCls]: {
      [noticeCls]: Object.assign({}, noticeStyle)
    }
  },
  // ============================= Pure =============================
  {
    [`${componentCls}-notice-pure-panel`]: Object.assign(Object.assign({}, noticeStyle), {
      padding: 0,
      textAlign: 'start'
    })
  }];
};
// ============================== Export ==============================
/* harmony default export */ var message_style = ((0,genComponentStyleHook/* default */.Z)('Message', token => {
  // Gen-style functions here
  const combinedToken = (0,statistic/* merge */.TS)(token, {
    height: 150
  });
  return [genMessageStyle(combinedToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 10,
  contentBg: token.colorBgElevated,
  contentPadding: `${(token.controlHeightLG - token.fontSize * token.lineHeight) / 2}px ${token.paddingSM}px`
})));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(69624);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/PurePanel.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const TypeIcon = {
  info: /*#__PURE__*/react.createElement(InfoCircleFilled/* default */.Z, null),
  success: /*#__PURE__*/react.createElement(CheckCircleFilled/* default */.Z, null),
  error: /*#__PURE__*/react.createElement(CloseCircleFilled/* default */.Z, null),
  warning: /*#__PURE__*/react.createElement(ExclamationCircleFilled/* default */.Z, null),
  loading: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.Z, null)
};
function PureContent(_ref) {
  let {
    prefixCls,
    type,
    icon,
    children
  } = _ref;
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(`${prefixCls}-custom-content`, `${prefixCls}-${type}`)
  }, icon || TypeIcon[type], /*#__PURE__*/react.createElement("span", null, children));
}
/** @private Internal Component. Do not use in your production. */
function PurePanel(props) {
  const {
      prefixCls: staticPrefixCls,
      className,
      type,
      icon,
      content
    } = props,
    restProps = __rest(props, ["prefixCls", "className", "type", "icon", "content"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  return /*#__PURE__*/react.createElement(es/* Notice */.q, Object.assign({}, restProps, {
    prefixCls: prefixCls,
    className: classnames_default()(className, hashId, `${prefixCls}-notice-pure-panel`),
    eventKey: "pure",
    duration: null,
    content: /*#__PURE__*/react.createElement(PureContent, {
      prefixCls: prefixCls,
      type: type,
      icon: icon
    }, content)
  }));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(35014);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/util.js
function getMotion(prefixCls, transitionName) {
  return {
    motionName: transitionName !== null && transitionName !== void 0 ? transitionName : `${prefixCls}-move-up`
  };
}
/** Wrap message open with promise like function */
function wrapPromiseFn(openFn) {
  let closeFn;
  const closePromise = new Promise(resolve => {
    closeFn = openFn(() => {
      resolve(true);
    });
  });
  const result = () => {
    closeFn === null || closeFn === void 0 ? void 0 : closeFn();
  };
  result.then = (filled, rejected) => closePromise.then(filled, rejected);
  result.promise = closePromise;
  return result;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/useMessage.js
var useMessage_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DEFAULT_OFFSET = 8;
const DEFAULT_DURATION = 3;
const Holder = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    top,
    prefixCls: staticPrefixCls,
    getContainer: staticGetContainer,
    maxCount,
    duration = DEFAULT_DURATION,
    rtl,
    transitionName,
    onAllRemoved
  } = props;
  const {
    getPrefixCls,
    getPopupContainer
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = staticPrefixCls || getPrefixCls('message');
  const [, hashId] = message_style(prefixCls);
  // =============================== Style ===============================
  const getStyle = () => ({
    left: '50%',
    transform: 'translateX(-50%)',
    top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
  });
  const getClassName = () => classnames_default()(hashId, rtl ? `${prefixCls}-rtl` : '');
  // ============================== Motion ===============================
  const getNotificationMotion = () => getMotion(prefixCls, transitionName);
  // ============================ Close Icon =============================
  const mergedCloseIcon = /*#__PURE__*/react.createElement("span", {
    className: `${prefixCls}-close-x`
  }, /*#__PURE__*/react.createElement(CloseOutlined/* default */.Z, {
    className: `${prefixCls}-close-icon`
  }));
  // ============================== Origin ===============================
  const [api, holder] = (0,es/* useNotification */.l)({
    prefixCls,
    style: getStyle,
    className: getClassName,
    motion: getNotificationMotion,
    closable: false,
    closeIcon: mergedCloseIcon,
    duration,
    getContainer: () => (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body,
    maxCount,
    onAllRemoved
  });
  // ================================ Ref ================================
  react.useImperativeHandle(ref, () => Object.assign(Object.assign({}, api), {
    prefixCls,
    hashId
  }));
  return holder;
});
// ==============================================================================
// ==                                   Hook                                   ==
// ==============================================================================
let keyIndex = 0;
function useInternalMessage(messageConfig) {
  const holderRef = react.useRef(null);
  // ================================ API ================================
  const wrapAPI = react.useMemo(() => {
    // Wrap with notification content
    // >>> close
    const close = key => {
      var _a;
      (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
    };
    // >>> Open
    const open = config => {
      if (!holderRef.current) {
         false ? 0 : void 0;
        const fakeResult = () => {};
        fakeResult.then = () => {};
        return fakeResult;
      }
      const {
        open: originOpen,
        prefixCls,
        hashId
      } = holderRef.current;
      const noticePrefixCls = `${prefixCls}-notice`;
      const {
          content,
          icon,
          type,
          key,
          className,
          onClose
        } = config,
        restConfig = useMessage_rest(config, ["content", "icon", "type", "key", "className", "onClose"]);
      let mergedKey = key;
      if (mergedKey === undefined || mergedKey === null) {
        keyIndex += 1;
        mergedKey = `antd-message-${keyIndex}`;
      }
      return wrapPromiseFn(resolve => {
        originOpen(Object.assign(Object.assign({}, restConfig), {
          key: mergedKey,
          content: /*#__PURE__*/react.createElement(PureContent, {
            prefixCls: prefixCls,
            type: type,
            icon: icon
          }, content),
          placement: 'top',
          className: classnames_default()(type && `${noticePrefixCls}-${type}`, hashId, className),
          onClose: () => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
            resolve();
          }
        }));
        // Return close function
        return () => {
          close(mergedKey);
        };
      });
    };
    // >>> destroy
    const destroy = key => {
      var _a;
      if (key !== undefined) {
        close(key);
      } else {
        (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
      }
    };
    const clone = {
      open,
      destroy
    };
    const keys = ['info', 'success', 'warning', 'error', 'loading'];
    keys.forEach(type => {
      const typeOpen = (jointContent, duration, onClose) => {
        let config;
        if (jointContent && typeof jointContent === 'object' && 'content' in jointContent) {
          config = jointContent;
        } else {
          config = {
            content: jointContent
          };
        }
        // Params
        let mergedDuration;
        let mergedOnClose;
        if (typeof duration === 'function') {
          mergedOnClose = duration;
        } else {
          mergedDuration = duration;
          mergedOnClose = onClose;
        }
        const mergedConfig = Object.assign(Object.assign({
          onClose: mergedOnClose,
          duration: mergedDuration
        }, config), {
          type
        });
        return open(mergedConfig);
      };
      clone[type] = typeOpen;
    });
    return clone;
  }, []);
  // ============================== Return ===============================
  return [wrapAPI, /*#__PURE__*/react.createElement(Holder, Object.assign({
    key: "message-holder"
  }, messageConfig, {
    ref: holderRef
  }))];
}
function useMessage(messageConfig) {
  return useInternalMessage(messageConfig);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/index.js







let message = null;
let act = callback => callback();
let taskQueue = [];
let defaultGlobalConfig = {};
function getGlobalContext() {
  const {
    prefixCls: globalPrefixCls,
    getContainer: globalGetContainer,
    duration,
    rtl,
    maxCount,
    top
  } = defaultGlobalConfig;
  const mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : (0,config_provider/* globalConfig */.w6)().getPrefixCls('message');
  const mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
  return {
    prefixCls: mergedPrefixCls,
    container: mergedContainer,
    duration,
    rtl,
    maxCount,
    top
  };
}
const GlobalHolder = /*#__PURE__*/react.forwardRef((_, ref) => {
  const initializeMessageConfig = () => {
    const {
      prefixCls,
      container,
      maxCount,
      duration,
      rtl,
      top
    } = getGlobalContext();
    return {
      prefixCls,
      getContainer: () => container,
      maxCount,
      duration,
      rtl,
      top
    };
  };
  const [messageConfig, setMessageConfig] = react.useState(initializeMessageConfig);
  const [api, holder] = useInternalMessage(messageConfig);
  const global = (0,config_provider/* globalConfig */.w6)();
  const rootPrefixCls = global.getRootPrefixCls();
  const rootIconPrefixCls = global.getIconPrefixCls();
  const theme = global.getTheme();
  const sync = () => {
    setMessageConfig(initializeMessageConfig);
  };
  react.useEffect(sync, []);
  react.useImperativeHandle(ref, () => {
    const instance = Object.assign({}, api);
    Object.keys(instance).forEach(method => {
      instance[method] = function () {
        sync();
        return api[method].apply(api, arguments);
      };
    });
    return {
      instance,
      sync
    };
  });
  return /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    prefixCls: rootPrefixCls,
    iconPrefixCls: rootIconPrefixCls,
    theme: theme
  }, holder);
});
function flushNotice() {
  if (!message) {
    const holderFragment = document.createDocumentFragment();
    const newMessage = {
      fragment: holderFragment
    };
    message = newMessage;
    // Delay render to avoid sync issue
    act(() => {
      (0,render/* render */.s)( /*#__PURE__*/react.createElement(GlobalHolder, {
        ref: node => {
          const {
            instance,
            sync
          } = node || {};
          // React 18 test env will throw if call immediately in ref
          Promise.resolve().then(() => {
            if (!newMessage.instance && instance) {
              newMessage.instance = instance;
              newMessage.sync = sync;
              flushNotice();
            }
          });
        }
      }), holderFragment);
    });
    return;
  }
  // Notification not ready
  if (!message.instance) {
    return;
  }
  // >>> Execute task
  taskQueue.forEach(task => {
    const {
      type,
      skipped
    } = task;
    // Only `skipped` when user call notice but cancel it immediately
    // and instance not ready
    if (!skipped) {
      switch (type) {
        case 'open':
          {
            act(() => {
              const closeFn = message.instance.open(Object.assign(Object.assign({}, defaultGlobalConfig), task.config));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
            break;
          }
        case 'destroy':
          act(() => {
            message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
          });
          break;
        // Other type open
        default:
          {
            act(() => {
              var _message$instance;
              const closeFn = (_message$instance = message.instance)[type].apply(_message$instance, (0,toConsumableArray/* default */.Z)(task.args));
              closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
              task.setCloseFn(closeFn);
            });
          }
      }
    }
  });
  // Clean up
  taskQueue = [];
}
// ==============================================================================
// ==                                  Export                                  ==
// ==============================================================================
function setMessageGlobalConfig(config) {
  defaultGlobalConfig = Object.assign(Object.assign({}, defaultGlobalConfig), config);
  // Trigger sync for it
  act(() => {
    var _a;
    (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
  });
}
function message_open(config) {
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type: 'open',
      config,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function typeOpen(type, args) {
  // Warning if exist theme
  if (false) {}
  const result = wrapPromiseFn(resolve => {
    let closeFn;
    const task = {
      type,
      args,
      resolve,
      setCloseFn: fn => {
        closeFn = fn;
      }
    };
    taskQueue.push(task);
    return () => {
      if (closeFn) {
        act(() => {
          closeFn();
        });
      } else {
        task.skipped = true;
      }
    };
  });
  flushNotice();
  return result;
}
function destroy(key) {
  taskQueue.push({
    type: 'destroy',
    key
  });
  flushNotice();
}
const methods = ['success', 'info', 'warning', 'error', 'loading'];
const baseStaticMethods = {
  open: message_open,
  destroy,
  config: setMessageGlobalConfig,
  useMessage: useMessage,
  _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
};
const staticMethods = baseStaticMethods;
methods.forEach(type => {
  staticMethods[type] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return typeOpen(type, args);
  };
});
// ==============================================================================
// ==                                   Test                                   ==
// ==============================================================================
const noop = () => {};
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actWrapper = (/* unused pure expression or super */ null && (noop));
if (false) {}
/** @internal Only Work in test env */
// eslint-disable-next-line import/no-mutable-exports
let actDestroy = (/* unused pure expression or super */ null && (noop));
if (false) {}
/* harmony default export */ var es_message = (staticMethods);

/***/ })

}]);