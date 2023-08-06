"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-6754b7c1"],{

/***/ 16285:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o2: function() { return /* binding */ isPresetColor; }
/* harmony export */ });
/* unused harmony exports PresetStatusColorTypes, isPresetStatusColor */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23190);
/* harmony import */ var _theme_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57653);


const inverseColors = _theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i.map(color => `${color}-inverse`);
const PresetStatusColorTypes = (/* unused pure expression or super */ null && (['success', 'processing', 'error', 'default', 'warning']));
/**
 * determine if the color keyword belongs to the `Ant Design` {@link PresetColors}.
 * @param color color to be judged
 * @param includeInverse whether to include reversed colors
 */
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (includeInverse) {
    return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(inverseColors), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i)).includes(color);
  }
  return _theme_interface__WEBPACK_IMPORTED_MODULE_0__/* .PresetColors */ .i.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}

/***/ }),

/***/ 45745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ useFlexGapSupport; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(34549);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/styleChecker.js


const canUseDocElement = () => (0,canUseDom/* default */.Z)() && window.document.documentElement;

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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/hooks/useFlexGapSupport.js


/* harmony default export */ var useFlexGapSupport = (() => {
  const [flexible, setFlexible] = react.useState(false);
  react.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);
  return flexible;
});

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

/***/ 79550:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getPlacements; }
/* harmony export */ });
/* unused harmony export getOverflowOptions */
/* harmony import */ var _style_placementArrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49543);

function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === 'object' ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case 'top':
    case 'bottom':
      baseOverflow.shiftX = arrowOffset.dropdownArrowOffset * 2 + arrowWidth;
      break;
    case 'left':
    case 'right':
      baseOverflow.shiftY = arrowOffset.dropdownArrowOffsetVertical * 2 + arrowWidth;
      break;
  }
  const mergedOverflow = Object.assign(Object.assign({}, baseOverflow), overflow);
  // Support auto shift
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
const PlacementAlignMap = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  leftTop: {
    points: ['tr', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  rightTop: {
    points: ['tl', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  rightBottom: {
    points: ['bl', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  },
  leftBottom: {
    points: ['br', 'bl']
  }
};
const ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ['bl', 'tc']
  },
  leftTop: {
    points: ['tr', 'cl']
  },
  topRight: {
    points: ['br', 'tc']
  },
  rightTop: {
    points: ['tl', 'cr']
  },
  bottomRight: {
    points: ['tr', 'bc']
  },
  rightBottom: {
    points: ['bl', 'cr']
  },
  bottomLeft: {
    points: ['tl', 'bc']
  },
  leftBottom: {
    points: ['br', 'cl']
  }
};
const DisableAutoArrowList = new Set(['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  Object.keys(PlacementAlignMap).forEach(key => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = Object.assign(Object.assign({}, template), {
      offset: [0, 0]
    });
    placementMap[key] = placementInfo;
    // Disable autoArrow since design is fixed position
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    // Static offset
    switch (key) {
      case 'top':
      case 'topLeft':
      case 'topRight':
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    // Dynamic offset
    const arrowOffset = (0,_style_placementArrow__WEBPACK_IMPORTED_MODULE_0__/* .getArrowOffset */ .fS)({
      contentRadius: borderRadius,
      limitVerticalRadius: true
    });
    if (arrowPointAtCenter) {
      switch (key) {
        case 'topLeft':
        case 'bottomLeft':
          placementInfo.offset[0] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case 'topRight':
        case 'bottomRight':
          placementInfo.offset[0] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
        case 'leftTop':
        case 'rightTop':
          placementInfo.offset[1] = -arrowOffset.dropdownArrowOffset - halfArrowWidth;
          break;
        case 'leftBottom':
        case 'rightBottom':
          placementInfo.offset[1] = arrowOffset.dropdownArrowOffset + halfArrowWidth;
          break;
      }
    }
    // Overflow
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    // VisibleFirst
    if (visibleFirst) {
      placementInfo.htmlRegion = 'visibleFirst';
    }
  });
  return placementMap;
}

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

/***/ 44254:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94701);

/* harmony default export */ __webpack_exports__.Z = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);

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

/***/ 94701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77466);
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72461);


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
  }, rc_picker_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z),
  timePickerLocale: Object.assign({}, _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__.Z = (locale);

/***/ }),

/***/ 94904:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_dropdown; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(6791);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-dropdown@4.1.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-dropdown/es/index.js + 4 modules
var es = __webpack_require__(474);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useEvent.js
var useEvent = __webpack_require__(47737);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(89174);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(47740);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/context.js
var config_provider_context = __webpack_require__(69624);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.11.1_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/cssinjs/es/index.js + 22 modules
var cssinjs_es = __webpack_require__(78949);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(28470);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMemo.js
var useMemo = __webpack_require__(7477);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/utils/set.js + 1 modules
var set = __webpack_require__(57124);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/form/validateMessagesContext.js

// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
/* harmony default export */ var validateMessagesContext = (/*#__PURE__*/(0,react.createContext)(undefined));
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/index.js + 1 modules
var es_locale = __webpack_require__(71608);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/context.js
var locale_context = __webpack_require__(61519);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/locale/en_US.js
var en_US = __webpack_require__(19109);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/internal.js + 2 modules
var internal = __webpack_require__(44438);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/themes/seed.js
var seed = __webpack_require__(23323);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js + 1 modules
var colors_es = __webpack_require__(44824);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/index.js
var dist_module = __webpack_require__(99590);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(34549);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js + 1 modules
var dynamicCSS = __webpack_require__(85223);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/DisabledContext.js

const DisabledContext = /*#__PURE__*/react.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = react.useContext(DisabledContext);
  return /*#__PURE__*/react.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
/* harmony default export */ var config_provider_DisabledContext = (DisabledContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(32071);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/config-provider/hooks/useConfig.js



function useConfig() {
  const componentDisabled = (0,react.useContext)(config_provider_DisabledContext);
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
  return (0,cssinjs_es/* useStyleRegister */.xy)({
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
  return globalIconPrefixCls || defaultIconPrefixCls;
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
    childNode = /*#__PURE__*/react.createElement(es_locale/* default */.ZP, {
      locale: locale,
      _ANT_MARK__: es_locale/* ANT_MARK */.sd
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
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0,cssinjs_es/* createTheme */.jG)(algorithm) : undefined;
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
    childNode = /*#__PURE__*/react.createElement(DisabledContextProvider, {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/PurePanel.js



/* istanbul ignore next */
function genPurePanel(Component, defaultPrefixCls, getDropdownCls, postProps) {
  return function PurePanel(props) {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = react.useRef(null);
    const [popupHeight, setPopupHeight] = react.useState(0);
    const [popupWidth, setPopupWidth] = react.useState(0);
    const [open, setOpen] = (0,useMergedState/* default */.Z)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = react.useContext(config_provider_context/* ConfigContext */.E_);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    react.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    return /*#__PURE__*/react.createElement(config_provider, {
      theme: {
        token: {
          motion: false
        }
      }
    }, /*#__PURE__*/react.createElement("div", {
      ref: holderRef,
      style: {
        paddingBottom: popupHeight,
        position: 'relative',
        minWidth: popupWidth
      }
    }, /*#__PURE__*/react.createElement(Component, Object.assign({}, mergedProps))));
  };
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/placements.js
var placements = __webpack_require__(79550);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(90016);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/menu/index.js + 17 modules
var es_menu = __webpack_require__(71782);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/menu/OverrideContext.js
var OverrideContext = __webpack_require__(85225);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(63286);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/motion/slide.js
var slide = __webpack_require__(7557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/motion/move.js
var move = __webpack_require__(61245);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/motion/zoom.js
var zoom = __webpack_require__(73803);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/placementArrow.js + 1 modules
var placementArrow = __webpack_require__(49543);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/genComponentStyleHook.js
var genComponentStyleHook = __webpack_require__(76734);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/theme/util/statistic.js
var statistic = __webpack_require__(70157);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/style/status.js
const genStatusStyle = token => {
  const {
    componentCls,
    menuCls,
    colorError,
    colorTextLightSolid
  } = token;
  const itemCls = `${menuCls}-item`;
  return {
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [`${menuCls} ${itemCls}`]: {
        [`&${itemCls}-danger:not(${itemCls}-disabled)`]: {
          color: colorError,
          '&:hover': {
            color: colorTextLightSolid,
            backgroundColor: colorError
          }
        }
      }
    }
  };
};
/* harmony default export */ var style_status = (genStatusStyle);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/style/index.js





// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    menuCls,
    zIndexPopup,
    dropdownArrowDistance,
    sizePopupArrow,
    antCls,
    iconCls,
    motionDurationMid,
    dropdownPaddingVertical,
    fontSize,
    dropdownEdgeChildPadding,
    colorTextDisabled,
    fontSizeIcon,
    controlPaddingHorizontal,
    colorBgElevated
  } = token;
  return [{
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      position: 'absolute',
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: zIndexPopup,
      display: 'block',
      // A placeholder out of dropdown visible range to avoid close when user moving
      '&::before': {
        position: 'absolute',
        insetBlock: -dropdownArrowDistance + sizePopupArrow / 2,
        // insetInlineStart: -7, // FIXME: Seems not work for hidden element
        zIndex: -9999,
        opacity: 0.0001,
        content: '""'
      },
      [`&-trigger${antCls}-btn`]: {
        [`& > ${iconCls}-down, & > ${antCls}-btn-icon > ${iconCls}-down`]: {
          fontSize: fontSizeIcon
        }
      },
      [`${componentCls}-wrap`]: {
        position: 'relative',
        [`${antCls}-btn > ${iconCls}-down`]: {
          fontSize: fontSizeIcon
        },
        [`${iconCls}-down::before`]: {
          transition: `transform ${motionDurationMid}`
        }
      },
      [`${componentCls}-wrap-open`]: {
        [`${iconCls}-down::before`]: {
          transform: `rotate(180deg)`
        }
      },
      [`
        &-hidden,
        &-menu-hidden,
        &-menu-submenu-hidden
      `]: {
        display: 'none'
      },
      // =============================================================
      // ==                         Motion                          ==
      // =============================================================
      // When position is not enough for dropdown, the placement will revert.
      // We will handle this with revert motion name.
      [`&${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-enter${antCls}-slide-down-enter-active${componentCls}-placement-bottomRight,
          &${antCls}-slide-down-appear${antCls}-slide-down-appear-active${componentCls}-placement-bottomRight`]: {
        animationName: slide/* slideUpIn */.fJ
      },
      [`&${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-top,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-top,
          &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-placement-topRight,
          &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-placement-topRight`]: {
        animationName: slide/* slideDownIn */.Qt
      },
      [`&${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomLeft,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottom,
          &${antCls}-slide-down-leave${antCls}-slide-down-leave-active${componentCls}-placement-bottomRight`]: {
        animationName: slide/* slideUpOut */.Uw
      },
      [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topLeft,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-top,
          &${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-placement-topRight`]: {
        animationName: slide/* slideDownOut */.ly
      }
    })
  },
  // =============================================================
  // ==                        Arrow style                      ==
  // =============================================================
  (0,placementArrow/* default */.ZP)(token, {
    colorBg: colorBgElevated,
    limitVerticalRadius: true,
    arrowPlacement: {
      top: true,
      bottom: true
    }
  }), {
    // =============================================================
    // ==                          Menu                           ==
    // =============================================================
    [`${componentCls} ${menuCls}`]: {
      position: 'relative',
      margin: 0
    },
    [`${menuCls}-submenu-popup`]: {
      position: 'absolute',
      zIndex: zIndexPopup,
      background: 'transparent',
      boxShadow: 'none',
      transformOrigin: '0 0',
      'ul, li': {
        listStyle: 'none',
        margin: 0
      }
    },
    [`${componentCls}, ${componentCls}-menu-submenu`]: {
      [menuCls]: Object.assign(Object.assign({
        padding: dropdownEdgeChildPadding,
        listStyleType: 'none',
        backgroundColor: colorBgElevated,
        backgroundClip: 'padding-box',
        borderRadius: token.borderRadiusLG,
        outline: 'none',
        boxShadow: token.boxShadowSecondary
      }, (0,style/* genFocusStyle */.Qy)(token)), {
        [`${menuCls}-item-group-title`]: {
          padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
          color: token.colorTextDescription,
          transition: `all ${motionDurationMid}`
        },
        // ======================= Item Content =======================
        [`${menuCls}-item`]: {
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        },
        [`${menuCls}-item-icon`]: {
          minWidth: fontSize,
          marginInlineEnd: token.marginXS,
          fontSize: token.fontSizeSM
        },
        [`${menuCls}-title-content`]: {
          flex: 'auto',
          '> a': {
            color: 'inherit',
            transition: `all ${motionDurationMid}`,
            '&:hover': {
              color: 'inherit'
            },
            '&::after': {
              position: 'absolute',
              inset: 0,
              content: '""'
            }
          }
        },
        // =========================== Item ===========================
        [`${menuCls}-item, ${menuCls}-submenu-title`]: Object.assign(Object.assign({
          clear: 'both',
          margin: 0,
          padding: `${dropdownPaddingVertical}px ${controlPaddingHorizontal}px`,
          color: token.colorText,
          fontWeight: 'normal',
          fontSize,
          lineHeight: token.lineHeight,
          cursor: 'pointer',
          transition: `all ${motionDurationMid}`,
          borderRadius: token.borderRadiusSM,
          [`&:hover, &-active`]: {
            backgroundColor: token.controlItemBgHover
          }
        }, (0,style/* genFocusStyle */.Qy)(token)), {
          '&-selected': {
            color: token.colorPrimary,
            backgroundColor: token.controlItemBgActive,
            '&:hover, &-active': {
              backgroundColor: token.controlItemBgActiveHover
            }
          },
          '&-disabled': {
            color: colorTextDisabled,
            cursor: 'not-allowed',
            '&:hover': {
              color: colorTextDisabled,
              backgroundColor: colorBgElevated,
              cursor: 'not-allowed'
            },
            a: {
              pointerEvents: 'none'
            }
          },
          '&-divider': {
            height: 1,
            margin: `${token.marginXXS}px 0`,
            overflow: 'hidden',
            lineHeight: 0,
            backgroundColor: token.colorSplit
          },
          [`${componentCls}-menu-submenu-expand-icon`]: {
            position: 'absolute',
            insetInlineEnd: token.paddingXS,
            [`${componentCls}-menu-submenu-arrow-icon`]: {
              marginInlineEnd: '0 !important',
              color: token.colorTextDescription,
              fontSize: fontSizeIcon,
              fontStyle: 'normal'
            }
          }
        }),
        [`${menuCls}-item-group-list`]: {
          margin: `0 ${token.marginXS}px`,
          padding: 0,
          listStyle: 'none'
        },
        [`${menuCls}-submenu-title`]: {
          paddingInlineEnd: controlPaddingHorizontal + token.fontSizeSM
        },
        [`${menuCls}-submenu-vertical`]: {
          position: 'relative'
        },
        [`${menuCls}-submenu${menuCls}-submenu-disabled ${componentCls}-menu-submenu-title`]: {
          [`&, ${componentCls}-menu-submenu-arrow-icon`]: {
            color: colorTextDisabled,
            backgroundColor: colorBgElevated,
            cursor: 'not-allowed'
          }
        },
        // https://github.com/ant-design/ant-design/issues/19264
        [`${menuCls}-submenu-selected ${componentCls}-menu-submenu-title`]: {
          color: token.colorPrimary
        }
      })
    }
  },
  // Follow code may reuse in other components
  [(0,slide/* initSlideMotion */.oN)(token, 'slide-up'), (0,slide/* initSlideMotion */.oN)(token, 'slide-down'), (0,move/* initMoveMotion */.Fm)(token, 'move-up'), (0,move/* initMoveMotion */.Fm)(token, 'move-down'), (0,zoom/* initZoomMotion */._y)(token, 'zoom-big')]];
};
// ============================== Export ==============================
/* harmony default export */ var dropdown_style = ((0,genComponentStyleHook/* default */.Z)('Dropdown', (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const {
    marginXXS,
    sizePopupArrow,
    controlHeight,
    fontSize,
    lineHeight,
    paddingXXS,
    componentCls,
    borderRadiusLG
  } = token;
  const dropdownPaddingVertical = (controlHeight - fontSize * lineHeight) / 2;
  const {
    dropdownArrowOffset
  } = (0,placementArrow/* getArrowOffset */.fS)({
    contentRadius: borderRadiusLG
  });
  const dropdownToken = (0,statistic/* merge */.TS)(token, {
    menuCls: `${componentCls}-menu`,
    rootPrefixCls,
    dropdownArrowDistance: sizePopupArrow / 2 + marginXXS,
    dropdownArrowOffset,
    dropdownPaddingVertical,
    dropdownEdgeChildPadding: paddingXXS
  });
  return [genBaseStyle(dropdownToken), style_status(dropdownToken)];
}, token => ({
  zIndexPopup: token.zIndexPopupBase + 50
})));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/dropdown.js
















const Placements = (/* unused pure expression or super */ null && (['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight', 'top', 'bottom']));
const Dropdown = props => {
  const {
    menu,
    arrow,
    prefixCls: customizePrefixCls,
    children,
    trigger,
    disabled,
    dropdownRender,
    getPopupContainer,
    overlayClassName,
    rootClassName,
    open,
    onOpenChange,
    // Deprecated
    visible,
    onVisibleChange,
    mouseEnterDelay = 0.15,
    mouseLeaveDelay = 0.1,
    autoAdjustOverflow = true,
    placement = '',
    overlay,
    transitionName
  } = props;
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  // Warning for deprecated usage
  if (false) {}
  const memoTransitionName = react.useMemo(() => {
    const rootPrefixCls = getPrefixCls();
    if (transitionName !== undefined) {
      return transitionName;
    }
    if (placement.includes('top')) {
      return `${rootPrefixCls}-slide-down`;
    }
    return `${rootPrefixCls}-slide-up`;
  }, [getPrefixCls, placement, transitionName]);
  const memoPlacement = react.useMemo(() => {
    if (!placement) {
      return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    }
    if (placement.includes('Center')) {
      const newPlacement = placement.slice(0, placement.indexOf('Center'));
       false ? 0 : void 0;
      return newPlacement;
    }
    return placement;
  }, [placement, direction]);
  if (false) {}
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const {
    token
  } = theme["default"].useToken();
  const child = react.Children.only(children);
  const dropdownTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()(`${prefixCls}-trigger`, {
      [`${prefixCls}-rtl`]: direction === 'rtl'
    }, child.props.className),
    disabled
  });
  const triggerActions = disabled ? [] : trigger;
  let alignPoint;
  if (triggerActions && triggerActions.includes('contextMenu')) {
    alignPoint = true;
  }
  // =========================== Open ============================
  const [mergedOpen, setOpen] = (0,useMergedState/* default */.Z)(false, {
    value: open !== null && open !== void 0 ? open : visible
  });
  const onInnerOpenChange = (0,useEvent/* default */.Z)(nextOpen => {
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(nextOpen);
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(nextOpen);
    setOpen(nextOpen);
  });
  // =========================== Overlay ============================
  const overlayClassNameCustomized = classnames_default()(overlayClassName, rootClassName, hashId, {
    [`${prefixCls}-rtl`]: direction === 'rtl'
  });
  const builtinPlacements = (0,placements/* default */.Z)({
    arrowPointAtCenter: typeof arrow === 'object' && arrow.pointAtCenter,
    autoAdjustOverflow,
    offset: token.marginXXS,
    arrowWidth: arrow ? token.sizePopupArrow : 0,
    borderRadius: token.borderRadius
  });
  const onMenuClick = react.useCallback(() => {
    setOpen(false);
  }, []);
  const renderOverlay = () => {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    let overlayNode;
    if (menu === null || menu === void 0 ? void 0 : menu.items) {
      overlayNode = /*#__PURE__*/react.createElement(es_menu/* default */.Z, Object.assign({}, menu));
    } else if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }
    if (dropdownRender) {
      overlayNode = dropdownRender(overlayNode);
    }
    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    return /*#__PURE__*/react.createElement(OverrideContext/* OverrideProvider */.J, {
      prefixCls: `${prefixCls}-menu`,
      expandIcon: /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-menu-submenu-arrow`
      }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
        className: `${prefixCls}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: false,
      onClick: onMenuClick,
      validator: _ref3 => {
        let {
          mode
        } = _ref3;
        // Warning if use other mode
         false ? 0 : void 0;
      }
    }, overlayNode);
  };
  // ============================ Render ============================
  return wrapSSR( /*#__PURE__*/react.createElement(es/* default */.Z, Object.assign({
    alignPoint: alignPoint
  }, (0,omit/* default */.Z)(props, ['rootClassName']), {
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    visible: mergedOpen,
    builtinPlacements: builtinPlacements,
    arrow: !!arrow,
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: memoTransitionName,
    trigger: triggerActions,
    overlay: renderOverlay,
    placement: memoPlacement,
    onVisibleChange: onInnerOpenChange
  }), dropdownTrigger));
};
function postPureProps(props) {
  return Object.assign(Object.assign({}, props), {
    align: {
      overflow: {
        adjustX: false,
        adjustY: false
      }
    }
  });
}
// We don't care debug panel
const PurePanel = genPurePanel(Dropdown, 'dropdown', prefixCls => prefixCls, postPureProps);
/* istanbul ignore next */
const WrapPurePanel = props => /*#__PURE__*/react.createElement(PurePanel, Object.assign({}, props), /*#__PURE__*/react.createElement("span", null));
Dropdown._InternalPanelDoNotUseOrYouWillBeFired = WrapPurePanel;
if (false) {}
/* harmony default export */ var dropdown = (Dropdown);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(11299);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(91211);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(86380);
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
/* harmony default export */ var wave_style = ((0,genComponentStyleHook/* default */.Z)('Wave', token => [genWaveStyle(token)]));
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
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
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
  } = (0,react.useContext)(config_provider_context/* ConfigContext */.E_);
  const containerRef = (0,react.useRef)(null);
  // ============================== Style ===============================
  const prefixCls = getPrefixCls('wave');
  const [, hashId] = wave_style(prefixCls);
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
  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, {
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/button-group.js
var button_group_rest = undefined && undefined.__rest || function (s, e) {
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
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      size,
      className
    } = props,
    others = button_group_rest(props, ["prefixCls", "size", "className"]);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/compact-item.js
var compact_item = __webpack_require__(85482);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/style/compact-item-vertical.js
var compact_item_vertical = __webpack_require__(38459);
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
      '&:not(:disabled)': Object.assign({}, (0,style/* genFocusStyle */.Qy)(token)),
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
  } = (0,react.useContext)(config_provider_context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const [wrapSSR, hashId] = button_style(prefixCls);
  const disabled = (0,react.useContext)(config_provider_DisabledContext);
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
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/button/index.js


/* harmony default export */ var es_button = (button_button);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(23146);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/dropdown-button.js
var dropdown_button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









const DropdownButton = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction
  } = react.useContext(config_provider_context/* ConfigContext */.E_);
  const {
      prefixCls: customizePrefixCls,
      type = 'default',
      danger,
      disabled,
      loading,
      onClick,
      htmlType,
      children,
      className,
      menu,
      arrow,
      autoFocus,
      overlay,
      trigger,
      align,
      open,
      onOpenChange,
      placement,
      getPopupContainer,
      href,
      icon = /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
      title,
      buttonsRender = buttons => buttons,
      mouseEnterDelay,
      mouseLeaveDelay,
      overlayClassName,
      overlayStyle,
      destroyPopupOnHide,
      dropdownRender
    } = props,
    restProps = dropdown_button_rest(props, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyPopupOnHide", "dropdownRender"]);
  const prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  const buttonPrefixCls = `${prefixCls}-button`;
  const [wrapSSR, hashId] = dropdown_style(prefixCls);
  const dropdownProps = {
    menu,
    arrow,
    autoFocus,
    align,
    disabled,
    trigger: disabled ? [] : trigger,
    onOpenChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    destroyPopupOnHide,
    dropdownRender
  };
  const {
    compactSize,
    compactItemClassnames
  } = (0,Compact/* useCompactItemContext */.ri)(prefixCls, direction);
  const classes = classnames_default()(buttonPrefixCls, compactItemClassnames, className, hashId);
  if ('overlay' in props) {
    dropdownProps.overlay = overlay;
  }
  if ('open' in props) {
    dropdownProps.open = open;
  }
  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }
  const leftButton = /*#__PURE__*/react.createElement(es_button, {
    type: type,
    danger: danger,
    disabled: disabled,
    loading: loading,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  const rightButton = /*#__PURE__*/react.createElement(es_button, {
    type: type,
    danger: danger,
    icon: icon
  });
  const [leftButtonToRender, rightButtonToRender] = buttonsRender([leftButton, rightButton]);
  return wrapSSR( /*#__PURE__*/react.createElement(space/* default */.Z.Compact, Object.assign({
    className: classes,
    size: compactSize,
    block: true
  }, restProps), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, Object.assign({}, dropdownProps), rightButtonToRender)));
};
DropdownButton.__ANT_BUTTON = true;
/* harmony default export */ var dropdown_button = (DropdownButton);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/index.js


const dropdown_Dropdown = dropdown;
dropdown_Dropdown.Button = dropdown_button;
/* harmony default export */ var es_dropdown = (dropdown_Dropdown);

/***/ }),

/***/ 51192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: function() { return /* binding */ SiderContext; }
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50959);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










const dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
const SiderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({});
const generateId = (() => {
  let i = 0;
  return function () {
    let prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return `${prefix}${i}`;
  };
})();
const Sider = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((_a, ref) => {
  var {
      prefixCls: customizePrefixCls,
      className,
      trigger,
      children,
      defaultCollapsed = false,
      theme = 'dark',
      style = {},
      collapsible = false,
      reverseArrow = false,
      width = 200,
      collapsedWidth = 80,
      zeroWidthTriggerStyle,
      breakpoint,
      onCollapse,
      onBreakpoint
    } = _a,
    props = __rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);
  const {
    siderHook
  } = useContext(LayoutContext);
  const [collapsed, setCollapsed] = useState('collapsed' in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = useState(false);
  useEffect(() => {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }
    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  };
  // ========================= Responsive =========================
  const responsiveHandlerRef = useRef();
  responsiveHandlerRef.current = mql => {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };
  useEffect(() => {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }
    let mql;
    if (typeof window !== 'undefined') {
      const {
        matchMedia
      } = window;
      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia(`(max-width: ${dimensionMaxMap[breakpoint]})`);
        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }
        responsiveHandler(mql);
      }
    }
    return () => {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, [breakpoint]); // in order to accept dynamic 'breakpoint' property, we need to add 'breakpoint' into dependency array.
  useEffect(() => {
    const uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };
  const {
    getPrefixCls
  } = useContext(ConfigContext);
  const renderSider = () => {
    const prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    const divProps = omit(props, ['collapsed']);
    const rawWidth = collapsed ? collapsedWidth : width;
    // use "px" as fallback unit for width
    const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
    // special trigger when collapsedWidth == 0
    const zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
      onClick: toggle,
      className: classNames(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? 'right' : 'left'}`),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/React.createElement(BarsOutlined, null)) : null;
    const iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/React.createElement(RightOutlined, null) : /*#__PURE__*/React.createElement(LeftOutlined, null),
      collapsed: reverseArrow ? /*#__PURE__*/React.createElement(LeftOutlined, null) : /*#__PURE__*/React.createElement(RightOutlined, null)
    };
    const status = collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = iconObj[status];
    const triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-trigger`,
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;
    const divStyle = Object.assign(Object.assign({}, style), {
      flex: `0 0 ${siderWidth}`,
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });
    const siderCls = classNames(prefixCls, `${prefixCls}-${theme}`, {
      [`${prefixCls}-collapsed`]: !!collapsed,
      [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
      [`${prefixCls}-below`]: !!below,
      [`${prefixCls}-zero-width`]: parseFloat(siderWidth) === 0
    }, className);
    return /*#__PURE__*/React.createElement("aside", Object.assign({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/React.createElement("div", {
      className: `${prefixCls}-children`
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };
  const contextValue = React.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return /*#__PURE__*/React.createElement(SiderContext.Provider, {
    value: contextValue
  }, renderSider());
})));
if (false) {}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Sider)));

/***/ })

}]);