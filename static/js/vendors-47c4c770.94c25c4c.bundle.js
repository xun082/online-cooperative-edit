"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["vendors-47c4c770"],{

/***/ 98964:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_textarea_es; }
});

// UNUSED EXPORTS: ResizableTextArea

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(52319);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(88351);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(40749);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(11371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(13446);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(32731);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(22925);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-input@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-input/es/index.js + 2 modules
var es = __webpack_require__(40155);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-input@1.1.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-input/es/utils/commonUtils.js
var commonUtils = __webpack_require__(15358);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(28919);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.3.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-resize-observer/es/index.js + 4 modules
var rc_resize_observer_es = __webpack_require__(76957);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(7039);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/raf.js
var raf = __webpack_require__(29587);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@1.3.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-textarea/es/calculateNodeHeight.js
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */

var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing', 'word-break', 'white-space'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  }

  // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
    paddingSize = _calculateNodeStyling.paddingSize,
    borderSize = _calculateNodeStyling.borderSize,
    boxSizing = _calculateNodeStyling.boxSizing,
    sizingStyle = _calculateNodeStyling.sizingStyle;

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = undefined;
  var maxHeight = undefined;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height: height,
    overflowY: overflowY,
    resize: 'none'
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@1.3.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-textarea/es/ResizableTextArea.js






var _excluded = ["prefixCls", "onPressEnter", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"];







var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _ref = props,
    prefixCls = _ref.prefixCls,
    onPressEnter = _ref.onPressEnter,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    autoSize = _ref.autoSize,
    onResize = _ref.onResize,
    className = _ref.className,
    style = _ref.style,
    disabled = _ref.disabled,
    onChange = _ref.onChange,
    onInternalAutoSize = _ref.onInternalAutoSize,
    restProps = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  // =============================== Value ================================
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultValue, {
      value: value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : '';
      }
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };

  // ================================ Ref =================================
  var textareaRef = react.useRef();
  react.useImperativeHandle(ref, function () {
    return {
      textArea: textareaRef.current
    };
  });

  // ============================== AutoSize ==============================
  var _React$useMemo = react.useMemo(function () {
      if (autoSize && (0,esm_typeof/* default */.Z)(autoSize) === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }
      return [];
    }, [autoSize]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    minRows = _React$useMemo2[0],
    maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;

  // =============================== Scroll ===============================
  // https://github.com/ant-design/ant-design/issues/21870
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll() {
    try {
      // FF has bug with jump of scroll to top. We force back here.
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current,
          selectionStart = _textareaRef$current.selectionStart,
          selectionEnd = _textareaRef$current.selectionEnd,
          scrollTop = _textareaRef$current.scrollTop;

        // Fix Safari bug which not rollback when break line
        // This makes Chinese IME can't input. Do not fix this
        // const { value: tmpValue } = textareaRef.current;
        // textareaRef.current.value = '';
        // textareaRef.current.value = tmpValue;

        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  };

  // =============================== Resize ===============================
  var _React$useState = react.useState(RESIZE_STABLE),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    resizeState = _React$useState2[0],
    setResizeState = _React$useState2[1];
  var _React$useState3 = react.useState(),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    autoSizeStyle = _React$useState4[0],
    setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize() {
    setResizeState(RESIZE_START);
    if (false) {}
  };

  // Change to trigger resize measure
  (0,useLayoutEffect/* default */.Z)(function () {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);

      // Safari has bug that text will keep break line on text cut when it's prev is break line.
      // ZombieJ: This not often happen. So we just skip it.
      // const { selectionStart, selectionEnd, scrollTop } = textareaRef.current;
      // const { value: tmpValue } = textareaRef.current;
      // textareaRef.current.value = '';
      // textareaRef.current.value = tmpValue;

      // if (document.activeElement === textareaRef.current) {
      //   textareaRef.current.scrollTop = scrollTop;
      //   textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
      // }

      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
      fixFirefoxAutoScroll();
    }
  }, [resizeState]);

  // We lock resize trigger by raf to avoid Safari warning
  var resizeRafRef = react.useRef();
  var cleanRaf = function cleanRaf() {
    raf/* default */.Z.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize === null || onResize === void 0 ? void 0 : onResize(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = (0,raf/* default */.Z)(function () {
          startResize();
        });
      }
    }
  };
  react.useEffect(function () {
    return cleanRaf;
  }, []);

  // =============================== Render ===============================
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = 'hidden';
    mergedStyle.overflowX = 'hidden';
  }
  return /*#__PURE__*/react.createElement(rc_resize_observer_es/* default */.Z, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize)
  }, /*#__PURE__*/react.createElement("textarea", (0,esm_extends/* default */.Z)({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: classnames_default()(prefixCls, className, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-disabled"), disabled)),
    disabled: disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
/* harmony default export */ var es_ResizableTextArea = (ResizableTextArea);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@1.3.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-textarea/es/TextArea.js







var TextArea_excluded = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "classes", "showCount", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize"];






function fixEmojiLength(value, maxLength) {
  return (0,toConsumableArray/* default */.Z)(value || '').slice(0, maxLength).join('');
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  var newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ((0,toConsumableArray/* default */.Z)(preValue || '').length < triggerValue.length && (0,toConsumableArray/* default */.Z)(triggerValue || '').length > maxLength) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
var TextArea = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var _clsx;
  var defaultValue = _ref.defaultValue,
    customValue = _ref.value,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    allowClear = _ref.allowClear,
    maxLength = _ref.maxLength,
    onCompositionStart = _ref.onCompositionStart,
    onCompositionEnd = _ref.onCompositionEnd,
    suffix = _ref.suffix,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-textarea' : _ref$prefixCls,
    classes = _ref.classes,
    showCount = _ref.showCount,
    className = _ref.className,
    style = _ref.style,
    disabled = _ref.disabled,
    hidden = _ref.hidden,
    classNames = _ref.classNames,
    styles = _ref.styles,
    onResize = _ref.onResize,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, TextArea_excluded);
  var _useMergedState = (0,useMergedState/* default */.Z)(defaultValue, {
      value: customValue,
      defaultValue: defaultValue
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var resizableTextAreaRef = (0,react.useRef)(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    focused = _React$useState2[0],
    setFocused = _React$useState2[1];
  var _React$useState3 = react.useState(false),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    compositing = _React$useState4[0],
    setCompositing = _React$useState4[1];
  var oldCompositionValueRef = react.useRef();
  var oldSelectionStartRef = react.useRef(0);
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    textareaResized = _React$useState6[0],
    setTextareaResized = _React$useState6[1];
  var focus = function focus() {
    var _resizableTextAreaRef;
    (_resizableTextAreaRef = resizableTextAreaRef.current) === null || _resizableTextAreaRef === void 0 ? void 0 : _resizableTextAreaRef.textArea.focus();
  };
  (0,react.useImperativeHandle)(ref, function () {
    return {
      resizableTextArea: resizableTextAreaRef.current,
      focus: focus,
      blur: function blur() {
        var _resizableTextAreaRef2;
        (_resizableTextAreaRef2 = resizableTextAreaRef.current) === null || _resizableTextAreaRef2 === void 0 ? void 0 : _resizableTextAreaRef2.textArea.blur();
      }
    };
  });
  (0,react.useEffect)(function () {
    setFocused(function (prev) {
      return !disabled && prev;
    });
  }, [disabled]);

  // =========================== Value Update ===========================
  // Max length value
  var hasMaxLength = Number(maxLength) > 0;
  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    // 拼音输入前保存一份旧值
    oldCompositionValueRef.current = value;
    // 保存旧的光标位置
    oldSelectionStartRef.current = e.currentTarget.selectionStart;
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };
  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    setCompositing(false);
    var triggerValue = e.currentTarget.value;
    if (hasMaxLength) {
      var _oldCompositionValueR;
      var isCursorInEnd = oldSelectionStartRef.current >= maxLength + 1 || oldSelectionStartRef.current === ((_oldCompositionValueR = oldCompositionValueRef.current) === null || _oldCompositionValueR === void 0 ? void 0 : _oldCompositionValueR.length);
      triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.current, triggerValue, maxLength);
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      setValue(triggerValue);
      (0,commonUtils/* resolveOnChange */.rJ)(e.currentTarget, e, onChange, triggerValue);
    }
    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };
  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;
    if (!compositing && hasMaxLength) {
      // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      var isCursorInEnd = e.target.selectionStart >= maxLength + 1 || e.target.selectionStart === triggerValue.length || !e.target.selectionStart;
      triggerValue = setTriggerValue(isCursorInEnd, value, triggerValue, maxLength);
    }
    setValue(triggerValue);
    (0,commonUtils/* resolveOnChange */.rJ)(e.currentTarget, e, onChange, triggerValue);
  };
  var handleKeyDown = function handleKeyDown(e) {
    var onPressEnter = rest.onPressEnter,
      onKeyDown = rest.onKeyDown;
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  var handleFocus = function handleFocus(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function handleBlur(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };

  // ============================== Reset ===============================
  var handleReset = function handleReset(e) {
    var _resizableTextAreaRef3;
    setValue('');
    focus();
    (0,commonUtils/* resolveOnChange */.rJ)((_resizableTextAreaRef3 = resizableTextAreaRef.current) === null || _resizableTextAreaRef3 === void 0 ? void 0 : _resizableTextAreaRef3.textArea, e, onChange);
  };
  var val = (0,commonUtils/* fixControlledValue */.D7)(value);
  if (!compositing && hasMaxLength && (customValue === null || customValue === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  }
  var suffixNode = suffix;
  var dataCount;
  if (showCount) {
    var valueLength = (0,toConsumableArray/* default */.Z)(val).length;
    if ((0,esm_typeof/* default */.Z)(showCount) === 'object') {
      dataCount = showCount.formatter({
        value: val,
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }
    suffixNode = /*#__PURE__*/react.createElement(react.Fragment, null, suffixNode, /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(prefixCls, "-data-count"), classNames === null || classNames === void 0 ? void 0 : classNames.count),
      style: styles === null || styles === void 0 ? void 0 : styles.count
    }, dataCount));
  }
  var handleResize = function handleResize(size) {
    var _resizableTextAreaRef4;
    onResize === null || onResize === void 0 ? void 0 : onResize(size);
    if ((_resizableTextAreaRef4 = resizableTextAreaRef.current) !== null && _resizableTextAreaRef4 !== void 0 && _resizableTextAreaRef4.textArea.style.height) {
      setTextareaResized(true);
    }
  };
  var isPureTextArea = !rest.autoSize && !showCount && !allowClear;
  var textarea = /*#__PURE__*/react.createElement(es/* BaseInput */.Q, {
    value: val,
    allowClear: allowClear,
    handleReset: handleReset,
    suffix: suffixNode,
    prefixCls: prefixCls,
    classes: {
      affixWrapper: classnames_default()(classes === null || classes === void 0 ? void 0 : classes.affixWrapper, (_clsx = {}, (0,defineProperty/* default */.Z)(_clsx, "".concat(prefixCls, "-show-count"), showCount), (0,defineProperty/* default */.Z)(_clsx, "".concat(prefixCls, "-textarea-allow-clear"), allowClear), _clsx))
    },
    disabled: disabled,
    focused: focused,
    className: className,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), textareaResized && !isPureTextArea ? {
      height: 'auto'
    } : {}),
    dataAttrs: {
      affixWrapper: {
        'data-count': typeof dataCount === 'string' ? dataCount : undefined
      }
    },
    hidden: hidden,
    inputElement: /*#__PURE__*/react.createElement(es_ResizableTextArea, (0,esm_extends/* default */.Z)({}, rest, {
      onKeyDown: handleKeyDown,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onCompositionStart: onInternalCompositionStart,
      onCompositionEnd: onInternalCompositionEnd,
      className: classNames === null || classNames === void 0 ? void 0 : classNames.textarea,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, styles === null || styles === void 0 ? void 0 : styles.textarea), {}, {
        resize: style === null || style === void 0 ? void 0 : style.resize
      }),
      disabled: disabled,
      prefixCls: prefixCls,
      onResize: handleResize,
      ref: resizableTextAreaRef
    }))
  });
  return textarea;
});
/* harmony default export */ var es_TextArea = (TextArea);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-textarea@1.3.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-textarea/es/index.js


/* harmony default export */ var rc_textarea_es = (es_TextArea);

/***/ }),

/***/ 64152:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ TreeNode; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(52319);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(40749);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(32731);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(88351);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(92711);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(37678);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(28419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(18528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(61076);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(15064);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/contextTypes.js
var contextTypes = __webpack_require__(43482);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/Indent.js



var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    var _classNames;
    list.push( /*#__PURE__*/react.createElement("span", {
      key: i,
      className: classnames_default()(baseClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-start"), isStart[i]), (0,defineProperty/* default */.Z)(_classNames, "".concat(baseClassName, "-end"), isEnd[i]), _classNames))
    }));
  }
  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};
/* harmony default export */ var es_Indent = (/*#__PURE__*/react.memo(Indent));
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(82394);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/TreeNode.js









var _excluded = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];



// @ts-ignore



var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalTreeNode, _React$Component);
  var _super = (0,createSuper/* default */.Z)(InternalTreeNode);
  function InternalTreeNode() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, InternalTreeNode);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dragNodeHighlight: false
    };
    _this.selectHandle = void 0;
    _this.cacheIndent = void 0;
    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };
    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
        disableCheckbox = _this$props.disableCheckbox,
        checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props), targetChecked);
    };
    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: true
      });
      onNodeDragStart(e, (0,assertThisInitialized/* default */.Z)(_this));
      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {
        // empty
      }
    };
    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, (0,assertThisInitialized/* default */.Z)(_this));
    };
    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, (0,assertThisInitialized/* default */.Z)(_this));
    };
    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, (0,assertThisInitialized/* default */.Z)(_this));
    };
    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDragEnd(e, (0,assertThisInitialized/* default */.Z)(_this));
    };
    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      onNodeDrop(e, (0,assertThisInitialized/* default */.Z)(_this));
    };
    // Disabled item still can be switch
    _this.onExpand = function (e) {
      var _this$props2 = _this.props,
        loading = _this$props2.loading,
        onNodeExpand = _this$props2.context.onNodeExpand;
      if (loading) return;
      onNodeExpand(e, (0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
    };
    // Drag usage
    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };
    _this.getNodeState = function () {
      var expanded = _this.props.expanded;
      if (_this.isLeaf()) {
        return null;
      }
      return expanded ? ICON_OPEN : ICON_CLOSE;
    };
    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;
      var _ref = keyEntities[eventKey] || {},
        children = _ref.children;
      return !!(children || []).length;
    };
    _this.isLeaf = function () {
      var _this$props3 = _this.props,
        isLeaf = _this$props3.isLeaf,
        loaded = _this$props3.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.hasChildren();
      if (isLeaf === false) {
        return false;
      }
      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };
    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };
    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable;
      // Return false if tree or treeNode is not checkable
      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    };
    // Load data to avoid default expanded tree without data
    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
      var _this$props$context = _this.props.context,
        loadData = _this$props$context.loadData,
        onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) {
        return;
      }
      // read from state to avoid loadData at same time
      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad((0,treeUtil/* convertNodePropsToEventData */.F)(_this.props));
        }
      }
    };
    _this.isDraggable = function () {
      var _this$props4 = _this.props,
        data = _this$props4.data,
        draggable = _this$props4.context.draggable;
      return !!(draggable && (!draggable.nodeDraggable || draggable.nodeDraggable(data)));
    };
    // ==================== Render: Drag Handler ====================
    _this.renderDragHandler = function () {
      var _this$props$context2 = _this.props.context,
        draggable = _this$props$context2.draggable,
        prefixCls = _this$props$context2.prefixCls;
      return (draggable === null || draggable === void 0 ? void 0 : draggable.icon) ? /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-draggable-icon")
      }, draggable.icon) : null;
    };
    // ====================== Render: Switcher ======================
    _this.renderSwitcherIconDom = function (isLeaf) {
      var switcherIconFromProps = _this.props.switcherIcon;
      var switcherIconFromCtx = _this.props.context.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;
      // if switcherIconDom is null, no render switcher span
      if (typeof switcherIcon === 'function') {
        return switcherIcon((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, _this.props), {}, {
          isLeaf: isLeaf
        }));
      }
      return switcherIcon;
    };
    // Switcher
    _this.renderSwitcher = function () {
      var expanded = _this.props.expanded;
      var prefixCls = _this.props.context.prefixCls;
      if (_this.isLeaf()) {
        // if switcherIconDom is null, no render switcher span
        var _switcherIconDom = _this.renderSwitcherIconDom(true);
        return _switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, _switcherIconDom) : null;
      }
      var switcherCls = classnames_default()("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      var switcherIconDom = _this.renderSwitcherIconDom(false);
      return switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, switcherIconDom) : null;
    };
    // ====================== Render: Checkbox ======================
    // Checkbox
    _this.renderCheckbox = function () {
      var _this$props5 = _this.props,
        checked = _this$props5.checked,
        halfChecked = _this$props5.halfChecked,
        disableCheckbox = _this$props5.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;
      var disabled = _this.isDisabled();
      var checkable = _this.isCheckable();
      if (!checkable) return null;
      // [Legacy] Custom element should be separate with `checkable` in future
      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };
    // ==================== Render: Title + Icon ====================
    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    };
    // Icon + Title
    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props6 = _this.props,
        _this$props6$title = _this$props6.title,
        title = _this$props6$title === void 0 ? defaultTitle : _this$props6$title,
        selected = _this$props6.selected,
        icon = _this$props6.icon,
        loading = _this$props6.loading,
        data = _this$props6.data;
      var _this$props$context3 = _this.props.context,
        prefixCls = _this$props$context3.prefixCls,
        showIcon = _this$props$context3.showIcon,
        treeIcon = _this$props$context3.icon,
        loadData = _this$props$context3.loadData,
        titleRender = _this$props$context3.titleRender;
      var disabled = _this.isDisabled();
      var wrapClass = "".concat(prefixCls, "-node-content-wrapper");
      // Icon - Still show loading icon when loading without showIcon
      var $icon;
      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /*#__PURE__*/react.createElement("span", {
          className: classnames_default()("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      }
      // Title
      var titleNode;
      if (typeof title === 'function') {
        titleNode = title(data);
      } else if (titleRender) {
        titleNode = titleRender(data);
      } else {
        titleNode = title;
      }
      var $title = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, titleNode);
      return /*#__PURE__*/react.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames_default()("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected")),
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick
      }, $icon, $title, _this.renderDropIndicator());
    };
    // =================== Render: Drop Indicator ===================
    _this.renderDropIndicator = function () {
      var _this$props7 = _this.props,
        disabled = _this$props7.disabled,
        eventKey = _this$props7.eventKey;
      var _this$props$context4 = _this.props.context,
        draggable = _this$props$context4.draggable,
        dropLevelOffset = _this$props$context4.dropLevelOffset,
        dropPosition = _this$props$context4.dropPosition,
        prefixCls = _this$props$context4.prefixCls,
        indent = _this$props$context4.indent,
        dropIndicatorRender = _this$props$context4.dropIndicatorRender,
        dragOverNodeKey = _this$props$context4.dragOverNodeKey,
        direction = _this$props$context4.direction;
      var rootDraggable = !!draggable;
      // allowDrop is calculated in Tree.tsx, there is no need for calc it here
      var showIndicator = !disabled && rootDraggable && dragOverNodeKey === eventKey;
      // This is a hot fix which is already fixed in
      // https://github.com/react-component/tree/pull/743/files
      // But some case need break point so we hack on this
      // ref https://github.com/ant-design/ant-design/issues/43493
      var mergedIndent = indent !== null && indent !== void 0 ? indent : _this.cacheIndent;
      _this.cacheIndent = indent;
      return showIndicator ? dropIndicatorRender({
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        indent: mergedIndent,
        prefixCls: prefixCls,
        direction: direction
      }) : null;
    };
    return _this;
  }
  (0,createClass/* default */.Z)(InternalTreeNode, [{
    key: "componentDidMount",
    value:
    // Isomorphic needn't load data in server side
    function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable;
      // Ignore when selectable is undefined or null
      if (typeof selectable === 'boolean') {
        return selectable;
      }
      return treeSelectable;
    }
  }, {
    key: "render",
    value:
    // =========================== Render ===========================
    function render() {
      var _classNames;
      var _this$props8 = this.props,
        eventKey = _this$props8.eventKey,
        className = _this$props8.className,
        style = _this$props8.style,
        dragOver = _this$props8.dragOver,
        dragOverGapTop = _this$props8.dragOverGapTop,
        dragOverGapBottom = _this$props8.dragOverGapBottom,
        isLeaf = _this$props8.isLeaf,
        isStart = _this$props8.isStart,
        isEnd = _this$props8.isEnd,
        expanded = _this$props8.expanded,
        selected = _this$props8.selected,
        checked = _this$props8.checked,
        halfChecked = _this$props8.halfChecked,
        loading = _this$props8.loading,
        domRef = _this$props8.domRef,
        active = _this$props8.active,
        data = _this$props8.data,
        onMouseMove = _this$props8.onMouseMove,
        selectable = _this$props8.selectable,
        otherProps = (0,objectWithoutProperties/* default */.Z)(_this$props8, _excluded);
      var _this$props$context5 = this.props.context,
        prefixCls = _this$props$context5.prefixCls,
        filterTreeNode = _this$props$context5.filterTreeNode,
        keyEntities = _this$props$context5.keyEntities,
        dropContainerKey = _this$props$context5.dropContainerKey,
        dropTargetKey = _this$props$context5.dropTargetKey,
        draggingNodeKey = _this$props$context5.draggingNodeKey;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = (0,pickAttrs/* default */.Z)(otherProps, {
        aria: true,
        data: true
      });
      var _ref2 = keyEntities[eventKey] || {},
        level = _ref2.level;
      var isEndNode = isEnd[isEnd.length - 1];
      var mergedDraggable = this.isDraggable();
      var draggableWithoutDisabled = !disabled && mergedDraggable;
      var dragging = draggingNodeKey === eventKey;
      var ariaSelected = selectable !== undefined ? {
        'aria-selected': !!selectable
      } : undefined;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
        ref: domRef,
        className: classnames_default()(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-treenode-draggable"), mergedDraggable), (0,defineProperty/* default */.Z)(_classNames, "dragging", dragging), (0,defineProperty/* default */.Z)(_classNames, 'drop-target', dropTargetKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drop-container', dropContainerKey === eventKey), (0,defineProperty/* default */.Z)(_classNames, 'drag-over', !disabled && dragOver), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0,defineProperty/* default */.Z)(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0,defineProperty/* default */.Z)(_classNames, 'filter-node', filterTreeNode && filterTreeNode((0,treeUtil/* convertNodePropsToEventData */.F)(this.props))), _classNames)),
        style: style
        // Draggable config
        ,
        draggable: draggableWithoutDisabled,
        "aria-grabbed": dragging,
        onDragStart: draggableWithoutDisabled ? this.onDragStart : undefined
        // Drop config
        ,
        onDragEnter: mergedDraggable ? this.onDragEnter : undefined,
        onDragOver: mergedDraggable ? this.onDragOver : undefined,
        onDragLeave: mergedDraggable ? this.onDragLeave : undefined,
        onDrop: mergedDraggable ? this.onDrop : undefined,
        onDragEnd: mergedDraggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, ariaSelected, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement(es_Indent, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);
  return InternalTreeNode;
}(react.Component);
var ContextTreeNode = function ContextTreeNode(props) {
  return /*#__PURE__*/react.createElement(contextTypes/* TreeContext */.k.Consumer, null, function (context) {
    return /*#__PURE__*/react.createElement(InternalTreeNode, (0,esm_extends/* default */.Z)({}, props, {
      context: context
    }));
  });
};
ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.isTreeNode = 1;
/* harmony default export */ var TreeNode = (ContextTreeNode);

/***/ }),

/***/ 43482:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ TreeContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/***/ }),

/***/ 4653:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: function() { return /* reexport */ TreeNode/* default */.Z; },
  Z: function() { return /* binding */ rc_tree_es; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(52319);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(40749);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(11371);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(88351);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(22925);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(92711);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(37678);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(28419);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(18528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(61076);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(43218);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(27029);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(15064);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/contextTypes.js
var contextTypes = __webpack_require__(43482);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/util.js
var util = __webpack_require__(96068);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(82394);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__(24645);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(13446);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(32731);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(7039);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-virtual-list@3.10.4_react-dom@18.2.0_react@18.2.0/node_modules/rc-virtual-list/es/index.js + 16 modules
var es = __webpack_require__(18598);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-motion@2.7.3_react-dom@18.2.0_react@18.2.0/node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(13199);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/TreeNode.js + 1 modules
var TreeNode = __webpack_require__(64152);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/useUnmount.js


/**
 * Trigger only when component unmount
 */
function useUnmount(triggerStart, triggerEnd) {
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    firstMount = _React$useState2[0],
    setFirstMount = _React$useState2[1];
  react.useLayoutEffect(function () {
    if (firstMount) {
      triggerStart();
      return function () {
        triggerEnd();
      };
    }
  }, [firstMount]);
  react.useLayoutEffect(function () {
    setFirstMount(true);
    return function () {
      setFirstMount(false);
    };
  }, []);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/MotionTreeNode.js




var _excluded = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];








var MotionTreeNode = function MotionTreeNode(_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    motion = _ref.motion,
    motionNodes = _ref.motionNodes,
    motionType = _ref.motionType,
    onOriginMotionStart = _ref.onMotionStart,
    onOriginMotionEnd = _ref.onMotionEnd,
    active = _ref.active,
    treeNodeRequiredProps = _ref.treeNodeRequiredProps,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  var _React$useState = react.useState(true),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useContext = react.useContext(contextTypes/* TreeContext */.k),
    prefixCls = _React$useContext.prefixCls;
  // Calculate target visible here.
  // And apply in effect to make `leave` motion work.
  var targetVisible = motionNodes && motionType !== 'hide';
  (0,useLayoutEffect/* default */.Z)(function () {
    if (motionNodes) {
      if (targetVisible !== visible) {
        setVisible(targetVisible);
      }
    }
  }, [motionNodes]);
  var triggerMotionStart = function triggerMotionStart() {
    if (motionNodes) {
      onOriginMotionStart();
    }
  };
  // Should only trigger once
  var triggerMotionEndRef = react.useRef(false);
  var triggerMotionEnd = function triggerMotionEnd() {
    if (motionNodes && !triggerMotionEndRef.current) {
      triggerMotionEndRef.current = true;
      onOriginMotionEnd();
    }
  };
  // Effect if unmount
  useUnmount(triggerMotionStart, triggerMotionEnd);
  // Motion end event
  var onVisibleChanged = function onVisibleChanged(nextVisible) {
    if (targetVisible === nextVisible) {
      triggerMotionEnd();
    }
  };
  if (motionNodes) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
      ref: ref,
      visible: visible
    }, motion, {
      motionAppear: motionType === 'show',
      onVisibleChanged: onVisibleChanged
    }), function (_ref2, motionRef) {
      var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
      return /*#__PURE__*/react.createElement("div", {
        ref: motionRef,
        className: classnames_default()("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function (treeNode) {
        var restProps = (0,esm_extends/* default */.Z)({}, ((0,objectDestructuringEmpty/* default */.Z)(treeNode.data), treeNode.data)),
          title = treeNode.title,
          key = treeNode.key,
          isStart = treeNode.isStart,
          isEnd = treeNode.isEnd;
        delete restProps.children;
        var treeNodeProps = (0,treeUtil/* getTreeNodeProps */.H8)(key, treeNodeRequiredProps);
        return /*#__PURE__*/react.createElement(TreeNode/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
          title: title,
          active: active,
          data: treeNode.data,
          key: key,
          isStart: isStart,
          isEnd: isEnd
        }));
      }));
    });
  }
  return /*#__PURE__*/react.createElement(TreeNode/* default */.Z, (0,esm_extends/* default */.Z)({
    domRef: ref,
    className: className,
    style: style
  }, props, {
    active: active
  }));
};
MotionTreeNode.displayName = 'MotionTreeNode';
var RefMotionTreeNode = /*#__PURE__*/react.forwardRef(MotionTreeNode);
/* harmony default export */ var es_MotionTreeNode = (RefMotionTreeNode);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = new Map();
    shorter.forEach(function (key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function (key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function (data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function (data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function (data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/NodeList.js




var NodeList_excluded = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];
/**
 * Handle virtual list of the TreeNodes.
 */






var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop() {};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
/**
 * We only need get visible content items to play the animation.
 */
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return (0,treeUtil/* getKey */.km)(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }
  return path;
}
var NodeList = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    data = props.data,
    selectable = props.selectable,
    checkable = props.checkable,
    expandedKeys = props.expandedKeys,
    selectedKeys = props.selectedKeys,
    checkedKeys = props.checkedKeys,
    loadedKeys = props.loadedKeys,
    loadingKeys = props.loadingKeys,
    halfCheckedKeys = props.halfCheckedKeys,
    keyEntities = props.keyEntities,
    disabled = props.disabled,
    dragging = props.dragging,
    dragOverNodeKey = props.dragOverNodeKey,
    dropPosition = props.dropPosition,
    motion = props.motion,
    height = props.height,
    itemHeight = props.itemHeight,
    virtual = props.virtual,
    focusable = props.focusable,
    activeItem = props.activeItem,
    focused = props.focused,
    tabIndex = props.tabIndex,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onActiveChange = props.onActiveChange,
    onListChangeStart = props.onListChangeStart,
    onListChangeEnd = props.onListChangeEnd,
    domProps = (0,objectWithoutProperties/* default */.Z)(props, NodeList_excluded);
  // =============================== Ref ================================
  var listRef = react.useRef(null);
  var indentMeasurerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });
  // ============================== Motion ==============================
  var _React$useState = react.useState(expandedKeys),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevExpandedKeys = _React$useState2[0],
    setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = react.useState(data),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    prevData = _React$useState4[0],
    setPrevData = _React$useState4[1];
  var _React$useState5 = react.useState(data),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    transitionData = _React$useState6[0],
    setTransitionData = _React$useState6[1];
  var _React$useState7 = react.useState([]),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    transitionRange = _React$useState8[0],
    setTransitionRange = _React$useState8[1];
  var _React$useState9 = react.useState(null),
    _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
    motionType = _React$useState10[0],
    setMotionType = _React$useState10[1];
  // When motion end but data change, this will makes data back to previous one
  var dataRef = react.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }
  // Do animation if expanded keys changed
  // layoutEffect here to avoid blink of node removing
  (0,useLayoutEffect/* default */.Z)(function () {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function (_ref) {
          var key = _ref.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType('show');
      } else {
        var _keyIndex = data.findIndex(function (_ref2) {
          var key = _ref2.key;
          return key === diffExpanded.key;
        });
        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
        var _newTransitionData = data.slice();
        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType('hide');
      }
    } else if (prevData !== data) {
      // If whole data changed, we just refresh the list
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]);
  // We should clean up motion if is changed by dragging
  react.useEffect(function () {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    loadedKeys: loadedKeys,
    loadingKeys: loadingKeys,
    checkedKeys: checkedKeys,
    halfCheckedKeys: halfCheckedKeys,
    dragOverNodeKey: dragOverNodeKey,
    dropPosition: dropPosition,
    keyEntities: keyEntities
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, focused && activeItem && /*#__PURE__*/react.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    value: "",
    onChange: noop,
    "aria-label": "for screen reader"
  })), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden',
      border: 0,
      padding: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /*#__PURE__*/react.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, domProps, {
    data: mergedData,
    itemKey: itemKey,
    height: height,
    fullHeight: false,
    virtual: virtual,
    itemHeight: itemHeight,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    onVisibleChange: function onVisibleChange(originList, fullList) {
      var originSet = new Set(originList);
      var restList = fullList.filter(function (item) {
        return !originSet.has(item);
      });
      // Motion node is not render. Skip motion
      if (restList.some(function (item) {
        return itemKey(item) === MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function (treeNode) {
    var pos = treeNode.pos,
      restProps = (0,esm_extends/* default */.Z)({}, ((0,objectDestructuringEmpty/* default */.Z)(treeNode.data), treeNode.data)),
      title = treeNode.title,
      key = treeNode.key,
      isStart = treeNode.isStart,
      isEnd = treeNode.isEnd;
    var mergedKey = (0,treeUtil/* getKey */.km)(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = (0,treeUtil/* getTreeNodeProps */.H8)(mergedKey, treeNodeRequiredProps);
    return /*#__PURE__*/react.createElement(es_MotionTreeNode, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
      title: title,
      active: !!activeItem && key === activeItem.key,
      pos: pos,
      data: treeNode.data,
      isStart: isStart,
      isEnd: isEnd,
      motion: motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType: motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd: onMotionEnd,
      treeNodeRequiredProps: treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
});
NodeList.displayName = 'NodeList';
/* harmony default export */ var es_NodeList = (NodeList);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/utils/conductUtil.js

function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {},
    disabled = _ref.disabled,
    disableCheckbox = _ref.disableCheckbox,
    checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}
// Fill miss keys
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set();
  // Add checked keys top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children = entity.children,
        children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }
  // Add checked keys from bottom to top
  var visitedKeys = new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();
    _entities.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;
      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
// Remove useless key
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);
  // Remove checked keys from top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children2 = entity.children,
        children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }
  // Remove checked keys form bottom to top
  halfCheckedKeys = new Set();
  var visitedKeys = new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();
    _entities2.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;
      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }
      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }
  // We only handle exist keys
  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];
    if (!hasEntity) {
      warningMissKeys.push(key);
    }
    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0;
  // Convert entities by level for calculation
  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0,warning/* default */.ZP)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/DropIndicator.js

function DropIndicator(_ref) {
  var dropPosition = _ref.dropPosition,
    dropLevelOffset = _ref.dropLevelOffset,
    indent = _ref.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }
  return /*#__PURE__*/react.createElement("div", {
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/Tree.js










// TODO: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/treeview/treeview-2/treeview-2a.html
// Fully accessibility support












var MAX_RETRY_TIMES = 10;
var Tree = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Tree, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Tree);
  function Tree() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Tree);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _this.destroyed = false;
    _this.delayedDragEnterLogic = void 0;
    _this.loadingRetryTimes = {};
    _this.state = {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      dropContainerKey: null,
      dropLevelOffset: null,
      dropTargetPos: null,
      dropAllowed: true,
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: (0,treeUtil/* fillFieldNames */.w$)()
    };
    _this.dragStartMousePosition = null;
    _this.dragNode = void 0;
    _this.currentMouseOverDroppableNodeKey = null;
    _this.listRef = /*#__PURE__*/react.createRef();
    _this.onNodeDragStart = function (event, node) {
      var _this$state = _this.state,
        expandedKeys = _this$state.expandedKeys,
        keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = node.props.eventKey;
      _this.dragNode = node;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = (0,util/* arrDel */._5)(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: (0,util/* getDragChildrenKeys */.wA)(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener('dragend', _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props)
      });
    };
    /**
     * [Legacy] Select handler is smaller than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    _this.onNodeDragEnter = function (event, node) {
      var _this$state2 = _this.state,
        expandedKeys = _this$state2.expandedKeys,
        keyEntities = _this$state2.keyEntities,
        dragChildrenKeys = _this$state2.dragChildrenKeys,
        flattenNodes = _this$state2.flattenNodes,
        indent = _this$state2.indent;
      var _this$props = _this.props,
        onDragEnter = _this$props.onDragEnter,
        onExpand = _this$props.onExpand,
        allowDrop = _this$props.allowDrop,
        direction = _this$props.direction;
      var _node$props = node.props,
        pos = _node$props.pos,
        eventKey = _node$props.eventKey;
      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
        dragNode = _assertThisInitialize.dragNode;
      // record the key of node which is latest entered, used in dragleave event.
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!dragNode) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = (0,util/* calcDropPosition */.OM)(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition.dropPosition,
        dropLevelOffset = _calcDropPosition.dropLevelOffset,
        dropTargetKey = _calcDropPosition.dropTargetKey,
        dropContainerKey = _calcDropPosition.dropContainerKey,
        dropTargetPos = _calcDropPosition.dropTargetPos,
        dropAllowed = _calcDropPosition.dropAllowed,
        dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
      // don't allow drop inside its children
      dragChildrenKeys.indexOf(dropTargetKey) !== -1 ||
      // don't allow drop when drop is not allowed caculated by calcDropPosition
      !dropAllowed) {
        _this.resetDragState();
        return;
      }
      // Side effect for delay drag
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (dragNode.props.eventKey !== node.props.eventKey) {
        // hoist expand logic here
        // since if logic is on the bottom
        // it will be blocked by abstract dragover node check
        //   => if you dragenter from top, you mouse will still be consider as in the top node
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function () {
          if (_this.state.draggingNodeKey === null) return;
          var newExpandedKeys = (0,toConsumableArray/* default */.Z)(expandedKeys);
          var entity = keyEntities[node.props.eventKey];
          if (entity && (entity.children || []).length) {
            newExpandedKeys = (0,util/* arrAdd */.L0)(expandedKeys, node.props.eventKey);
          }
          if (!('expandedKeys' in _this.props)) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0 ? void 0 : onExpand(newExpandedKeys, {
            node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props),
            expanded: true,
            nativeEvent: event.nativeEvent
          });
        }, 800);
      }
      // Skip if drag node is self
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }
      // Update drag over node and drag state
      _this.setState({
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: dropTargetKey,
        dropContainerKey: dropContainerKey,
        dropTargetPos: dropTargetPos,
        dropAllowed: dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0 ? void 0 : onDragEnter({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props),
        expandedKeys: expandedKeys
      });
    };
    _this.onNodeDragOver = function (event, node) {
      var _this$state3 = _this.state,
        dragChildrenKeys = _this$state3.dragChildrenKeys,
        flattenNodes = _this$state3.flattenNodes,
        keyEntities = _this$state3.keyEntities,
        expandedKeys = _this$state3.expandedKeys,
        indent = _this$state3.indent;
      var _this$props2 = _this.props,
        onDragOver = _this$props2.onDragOver,
        allowDrop = _this$props2.allowDrop,
        direction = _this$props2.direction;
      var _assertThisInitialize2 = (0,assertThisInitialized/* default */.Z)(_this),
        dragNode = _assertThisInitialize2.dragNode;
      if (!dragNode) {
        return;
      }
      var _calcDropPosition2 = (0,util/* calcDropPosition */.OM)(event, dragNode, node, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition2.dropPosition,
        dropLevelOffset = _calcDropPosition2.dropLevelOffset,
        dropTargetKey = _calcDropPosition2.dropTargetKey,
        dropContainerKey = _calcDropPosition2.dropContainerKey,
        dropAllowed = _calcDropPosition2.dropAllowed,
        dropTargetPos = _calcDropPosition2.dropTargetPos,
        dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.indexOf(dropTargetKey) !== -1 || !dropAllowed) {
        // don't allow drop inside its children
        // don't allow drop when drop is not allowed caculated by calcDropPosition
        return;
      }
      // Update drag position
      if (dragNode.props.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition: dropPosition,
          dropLevelOffset: dropLevelOffset,
          dropTargetKey: dropTargetKey,
          dropContainerKey: dropContainerKey,
          dropTargetPos: dropTargetPos,
          dropAllowed: dropAllowed,
          dragOverNodeKey: dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props)
      });
    };
    _this.onNodeDragLeave = function (event, node) {
      // if it is outside the droppable area
      // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
      if (_this.currentMouseOverDroppableNodeKey === node.props.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0 ? void 0 : onDragLeave({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props)
      });
    };
    // since stopPropagation() is called in treeNode
    // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
    _this.onWindowDragEnd = function (event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
    _this.onNodeDragEnd = function (event, node) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(node.props)
      });
      _this.dragNode = null;
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    };
    _this.onNodeDrop = function (event, node) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$state4 = _this.state,
        dragChildrenKeys = _this$state4.dragChildrenKeys,
        dropPosition = _this$state4.dropPosition,
        dropTargetKey = _this$state4.dropTargetKey,
        dropTargetPos = _this$state4.dropTargetPos,
        dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) return;
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
        data: _this.state.keyEntities[dropTargetKey].node
      });
      var dropToChild = dragChildrenKeys.indexOf(dropTargetKey) !== -1;
      (0,warning/* default */.ZP)(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = (0,util/* posToArr */.yx)(dropTargetPos);
      var dropResult = {
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(abstractDropNodeProps),
        dragNode: _this.dragNode ? (0,treeUtil/* convertNodePropsToEventData */.F)(_this.dragNode.props) : null,
        dragNodesKeys: [_this.dragNode.props.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 ? void 0 : onDrop(dropResult);
      }
      _this.dragNode = null;
    };
    _this.cleanDragState = function () {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    };
    _this.triggerExpandActionExpand = function (e, treeNode) {
      var _this$state5 = _this.state,
        expandedKeys = _this$state5.expandedKeys,
        flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded,
        key = treeNode.key,
        isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function (nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = (0,treeUtil/* convertNodePropsToEventData */.F)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(key, _this.getTreeNodeRequiredProps())), {}, {
        data: node.data
      }));
      _this.setExpandedKeys(expanded ? (0,util/* arrDel */._5)(expandedKeys, key) : (0,util/* arrAdd */.L0)(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    };
    _this.onNodeClick = function (e, treeNode) {
      var _this$props3 = _this.props,
        onClick = _this$props3.onClick,
        expandAction = _this$props3.expandAction;
      if (expandAction === 'click') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 ? void 0 : onClick(e, treeNode);
    };
    _this.onNodeDoubleClick = function (e, treeNode) {
      var _this$props4 = _this.props,
        onDoubleClick = _this$props4.onDoubleClick,
        expandAction = _this$props4.expandAction;
      if (expandAction === 'doubleClick') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(e, treeNode);
    };
    _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state,
        keyEntities = _this$state6.keyEntities,
        fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props,
        onSelect = _this$props5.onSelect,
        multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;
      // Update selected keys
      if (!targetSelected) {
        selectedKeys = (0,util/* arrDel */._5)(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = (0,util/* arrAdd */.L0)(selectedKeys, key);
      }
      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (selectedKey) {
        var entity = keyEntities[selectedKey];
        if (!entity) return null;
        return entity.node;
      }).filter(function (node) {
        return node;
      });
      _this.setUncontrolledState({
        selectedKeys: selectedKeys
      });
      onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectedKeys, {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e.nativeEvent
      });
    };
    _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state7 = _this.state,
        keyEntities = _this$state7.keyEntities,
        oriCheckedKeys = _this$state7.checkedKeys,
        oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props,
        checkStrictly = _this$props6.checkStrictly,
        onCheck = _this$props6.onCheck;
      var key = treeNode.key;
      // Prepare trigger arguments
      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? (0,util/* arrAdd */.L0)(oriCheckedKeys, key) : (0,util/* arrDel */._5)(oriCheckedKeys, key);
        var halfCheckedKeys = (0,util/* arrDel */._5)(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (checkedKey) {
          return keyEntities[checkedKey];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });
        _this.setUncontrolledState({
          checkedKeys: checkedKeys
        });
      } else {
        // Always fill first
        var _conductCheck = conductCheck([].concat((0,toConsumableArray/* default */.Z)(oriCheckedKeys), [key]), true, keyEntities),
          _checkedKeys = _conductCheck.checkedKeys,
          _halfCheckedKeys = _conductCheck.halfCheckedKeys;
        // If remove, we do it again to correction
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = conductCheck(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;
        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function (checkedKey) {
          var entity = keyEntities[checkedKey];
          if (!entity) return;
          var node = entity.node,
            pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });
        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }
      onCheck === null || onCheck === void 0 ? void 0 : onCheck(checkedObj, eventObj);
    };
    _this.onNodeLoad = function (treeNode) {
      var key = treeNode.key;
      var loadPromise = new Promise(function (resolve, reject) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
            loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
            _ref$loadingKeys = _ref.loadingKeys,
            loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props,
            loadData = _this$props7.loadData,
            onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.indexOf(key) !== -1 || loadingKeys.indexOf(key) !== -1) {
            return null;
          }
          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = (0,util/* arrAdd */.L0)(currentLoadedKeys, key);
            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464
            onLoad === null || onLoad === void 0 ? void 0 : onLoad(newLoadedKeys, {
              event: 'load',
              node: treeNode
            });
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState(function (prevState) {
              return {
                loadingKeys: (0,util/* arrDel */._5)(prevState.loadingKeys, key)
              };
            });
            resolve();
          }).catch(function (e) {
            _this.setState(function (prevState) {
              return {
                loadingKeys: (0,util/* arrDel */._5)(prevState.loadingKeys, key)
              };
            });
            // If exceed max retry times, we give up retry
            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              (0,warning/* default */.ZP)(false, 'Retry for `loadData` many times but still failed. No more retry.');
              _this.setUncontrolledState({
                loadedKeys: (0,util/* arrAdd */.L0)(currentLoadedKeys, key)
              });
              resolve();
            }
            reject(e);
          });
          return {
            loadingKeys: (0,util/* arrAdd */.L0)(loadingKeys, key)
          };
        });
      });
      // Not care warning if we ignore this
      loadPromise.catch(function () {});
      return loadPromise;
    };
    _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        event: event,
        node: node
      });
    };
    _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        event: event,
        node: node
      });
    };
    _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    };
    _this.onFocus = function () {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 ? void 0 : onFocus.apply(void 0, args);
    };
    _this.onBlur = function () {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 ? void 0 : onBlur.apply(void 0, args);
    };
    _this.getTreeNodeRequiredProps = function () {
      var _this$state8 = _this.state,
        expandedKeys = _this$state8.expandedKeys,
        selectedKeys = _this$state8.selectedKeys,
        loadedKeys = _this$state8.loadedKeys,
        loadingKeys = _this$state8.loadingKeys,
        checkedKeys = _this$state8.checkedKeys,
        halfCheckedKeys = _this$state8.halfCheckedKeys,
        dragOverNodeKey = _this$state8.dragOverNodeKey,
        dropPosition = _this$state8.dropPosition,
        keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
      };
    };
    // =========================== Expanded ===========================
    /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */
    _this.setExpandedKeys = function (expandedKeys) {
      var _this$state9 = _this.state,
        treeData = _this$state9.treeData,
        fieldNames = _this$state9.fieldNames;
      var flattenNodes = (0,treeUtil/* flattenTreeData */.oH)(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState({
        expandedKeys: expandedKeys,
        flattenNodes: flattenNodes
      }, true);
    };
    _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state,
        listChanging = _this$state10.listChanging,
        fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props,
        onExpand = _this$props8.onExpand,
        loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];
      // Do nothing when motion is in progress
      if (listChanging) {
        return;
      }
      // Update selected keys
      var index = expandedKeys.indexOf(key);
      var targetExpanded = !expanded;
      (0,warning/* default */.ZP)(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');
      if (targetExpanded) {
        expandedKeys = (0,util/* arrAdd */.L0)(expandedKeys, key);
      } else {
        expandedKeys = (0,util/* arrDel */._5)(expandedKeys, key);
      }
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });
      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function () {
            // [Legacy] Refresh logic
            var newFlattenTreeData = (0,treeUtil/* flattenTreeData */.oH)(_this.state.treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function () {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = (0,util/* arrDel */._5)(currentExpandedKeys, key);
            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    };
    _this.onListChangeStart = function () {
      _this.setUncontrolledState({
        listChanging: true
      });
    };
    _this.onListChangeEnd = function () {
      setTimeout(function () {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    };
    // =========================== Keyboard ===========================
    _this.onActiveChange = function (newActiveKey) {
      var activeKey = _this.state.activeKey;
      var onActiveChange = _this.props.onActiveChange;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey
        });
      }
      onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(newActiveKey);
    };
    _this.getActiveItem = function () {
      var _this$state11 = _this.state,
        activeKey = _this$state11.activeKey,
        flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return flattenNodes.find(function (_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    };
    _this.offsetActiveKey = function (offset) {
      var _this$state12 = _this.state,
        flattenNodes = _this$state12.flattenNodes,
        activeKey = _this$state12.activeKey;
      var index = flattenNodes.findIndex(function (_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      });
      // Align with index
      if (index === -1 && offset < 0) {
        index = flattenNodes.length;
      }
      index = (index + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];
      if (item) {
        var key = item.key;
        _this.onActiveChange(key);
      } else {
        _this.onActiveChange(null);
      }
    };
    _this.onKeyDown = function (event) {
      var _this$state13 = _this.state,
        activeKey = _this$state13.activeKey,
        expandedKeys = _this$state13.expandedKeys,
        checkedKeys = _this$state13.checkedKeys,
        fieldNames = _this$state13.fieldNames;
      var _this$props9 = _this.props,
        onKeyDown = _this$props9.onKeyDown,
        checkable = _this$props9.checkable,
        selectable = _this$props9.selectable;
      // >>>>>>>>>> Direction
      switch (event.which) {
        case KeyCode/* default */.Z.UP:
          {
            _this.offsetActiveKey(-1);
            event.preventDefault();
            break;
          }
        case KeyCode/* default */.Z.DOWN:
          {
            _this.offsetActiveKey(1);
            event.preventDefault();
            break;
          }
      }
      // >>>>>>>>>> Expand & Selection
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = (0,treeUtil/* convertNodePropsToEventData */.F)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));
        switch (event.which) {
          // >>> Expand
          case KeyCode/* default */.Z.LEFT:
            {
              // Collapse if possible
              if (expandable && expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.parent) {
                _this.onActiveChange(activeItem.parent.key);
              }
              event.preventDefault();
              break;
            }
          case KeyCode/* default */.Z.RIGHT:
            {
              // Expand if possible
              if (expandable && !expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.children && activeItem.children.length) {
                _this.onActiveChange(activeItem.children[0].key);
              }
              event.preventDefault();
              break;
            }
          // Selection
          case KeyCode/* default */.Z.ENTER:
          case KeyCode/* default */.Z.SPACE:
            {
              if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
              } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                _this.onNodeSelect({}, eventNode);
              }
              break;
            }
        }
      }
      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    };
    /**
     * Only update the value which is not in props
     */
    _this.setUncontrolledState = function (state) {
      var atomic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function (name) {
          if (name in _this.props) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, newState), forceState));
        }
      }
    };
    _this.scrollTo = function (scroll) {
      _this.listRef.current.scrollTo(scroll);
    };
    return _this;
  }
  (0,createClass/* default */.Z)(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var activeKey = this.props.activeKey;
      if (activeKey !== undefined && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey: activeKey
        });
        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('dragend', this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;
      var _this$state14 = this.state,
        focused = _this$state14.focused,
        flattenNodes = _this$state14.flattenNodes,
        keyEntities = _this$state14.keyEntities,
        draggingNodeKey = _this$state14.draggingNodeKey,
        activeKey = _this$state14.activeKey,
        dropLevelOffset = _this$state14.dropLevelOffset,
        dropContainerKey = _this$state14.dropContainerKey,
        dropTargetKey = _this$state14.dropTargetKey,
        dropPosition = _this$state14.dropPosition,
        dragOverNodeKey = _this$state14.dragOverNodeKey,
        indent = _this$state14.indent;
      var _this$props10 = this.props,
        prefixCls = _this$props10.prefixCls,
        className = _this$props10.className,
        style = _this$props10.style,
        showLine = _this$props10.showLine,
        focusable = _this$props10.focusable,
        _this$props10$tabInde = _this$props10.tabIndex,
        tabIndex = _this$props10$tabInde === void 0 ? 0 : _this$props10$tabInde,
        selectable = _this$props10.selectable,
        showIcon = _this$props10.showIcon,
        icon = _this$props10.icon,
        switcherIcon = _this$props10.switcherIcon,
        draggable = _this$props10.draggable,
        checkable = _this$props10.checkable,
        checkStrictly = _this$props10.checkStrictly,
        disabled = _this$props10.disabled,
        motion = _this$props10.motion,
        loadData = _this$props10.loadData,
        filterTreeNode = _this$props10.filterTreeNode,
        height = _this$props10.height,
        itemHeight = _this$props10.itemHeight,
        virtual = _this$props10.virtual,
        titleRender = _this$props10.titleRender,
        dropIndicatorRender = _this$props10.dropIndicatorRender,
        onContextMenu = _this$props10.onContextMenu,
        onScroll = _this$props10.onScroll,
        direction = _this$props10.direction,
        rootClassName = _this$props10.rootClassName,
        rootStyle = _this$props10.rootStyle;
      var domProps = (0,pickAttrs/* default */.Z)(this.props, {
        aria: true,
        data: true
      });
      // It's better move to hooks but we just simply keep here
      var draggableConfig;
      if (draggable) {
        if ((0,esm_typeof/* default */.Z)(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      return /*#__PURE__*/react.createElement(contextTypes/* TreeContext */.k.Provider, {
        value: {
          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggableConfig,
          draggingNodeKey: draggingNodeKey,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          keyEntities: keyEntities,
          dropLevelOffset: dropLevelOffset,
          dropContainerKey: dropContainerKey,
          dropTargetKey: dropTargetKey,
          dropPosition: dropPosition,
          dragOverNodeKey: dragOverNodeKey,
          indent: indent,
          direction: direction,
          dropIndicatorRender: dropIndicatorRender,
          loadData: loadData,
          filterTreeNode: filterTreeNode,
          titleRender: titleRender,
          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      }, /*#__PURE__*/react.createElement("div", {
        role: "tree",
        className: classnames_default()(prefixCls, className, rootClassName, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-show-line"), showLine), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-focused"), focused), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active-focused"), activeKey !== null), _classNames)),
        style: rootStyle
      }, /*#__PURE__*/react.createElement(es_NodeList, (0,esm_extends/* default */.Z)({
        ref: this.listRef,
        prefixCls: prefixCls,
        style: style,
        data: flattenNodes,
        disabled: disabled,
        selectable: selectable,
        checkable: !!checkable,
        motion: motion,
        dragging: draggingNodeKey !== null,
        height: height,
        itemHeight: itemHeight,
        virtual: virtual,
        focusable: focusable,
        focused: focused,
        tabIndex: tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu: onContextMenu,
        onScroll: onScroll
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };
      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      }
      // ================== Tree Node ==================
      var treeData;
      // fieldNames
      var fieldNames = prevState.fieldNames;
      if (needSync('fieldNames')) {
        fieldNames = (0,treeUtil/* fillFieldNames */.w$)(props.fieldNames);
        newState.fieldNames = fieldNames;
      }
      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeData = props.treeData;
      } else if (needSync('children')) {
        (0,warning/* default */.ZP)(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
        treeData = (0,treeUtil/* convertTreeToData */.zn)(props.children);
      }
      // Save flatten nodes info and convert `treeData` into keyEntities
      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = (0,treeUtil/* convertDataToEntities */.I8)(treeData, {
          fieldNames: fieldNames
        });
        newState.keyEntities = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);
        // Warning if treeNode not provide key
        if (false) {}
      }
      var keyEntities = newState.keyEntities || prevState.keyEntities;
      // ================ expandedKeys =================
      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? (0,util/* conductExpandParent */.r7)(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = (0,objectSpread2/* default */.Z)({}, keyEntities);
        delete cloneKeyEntities[MOTION_KEY];
        newState.expandedKeys = Object.keys(cloneKeyEntities).map(function (key) {
          return cloneKeyEntities[key].key;
        });
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? (0,util/* conductExpandParent */.r7)(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }
      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      }
      // ================ flattenNodes =================
      if (treeData || newState.expandedKeys) {
        var flattenNodes = (0,treeUtil/* flattenTreeData */.oH)(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      }
      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = (0,util/* calcSelectedKeys */.BT)(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = (0,util/* calcSelectedKeys */.BT)(props.defaultSelectedKeys, props);
        }
      }
      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity;
        if (needSync('checkedKeys')) {
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
            _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
            checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
            _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
            halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = conductCheck(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }
      return newState;
    }
  }]);
  return Tree;
}(react.Component);
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
};
Tree.TreeNode = TreeNode/* default */.Z;
/* harmony default export */ var es_Tree = (Tree);
;// CONCATENATED MODULE: ./node_modules/.pnpm/rc-tree@5.7.9_react-dom@18.2.0_react@18.2.0/node_modules/rc-tree/es/index.js



/* harmony default export */ var rc_tree_es = (es_Tree);

/***/ }),

/***/ 96068:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BT: function() { return /* binding */ calcSelectedKeys; },
/* harmony export */   E6: function() { return /* binding */ parseCheckedKeys; },
/* harmony export */   L0: function() { return /* binding */ arrAdd; },
/* harmony export */   OM: function() { return /* binding */ calcDropPosition; },
/* harmony export */   _5: function() { return /* binding */ arrDel; },
/* harmony export */   r7: function() { return /* binding */ conductExpandParent; },
/* harmony export */   wA: function() { return /* binding */ getDragChildrenKeys; },
/* harmony export */   yx: function() { return /* binding */ posToArr; }
/* harmony export */ });
/* unused harmony exports isLastChild, isFirstChild, convertDataToTree */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22925);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11371);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27029);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64152);
/* harmony import */ var _utils_treeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82394);




var _excluded = (/* unused pure expression or super */ null && (["children"]));
/* eslint-disable no-lonely-if */
/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */




function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  // not contains self
  // self for left or right drag
  var dragChildrenKeys = [];
  var entity = keyEntities[dragNodeKey];
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
        children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}
// Only used when drag, not affect SSR.
function calcDropPosition(event, dragNode, targetNode, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX,
    clientY = event.clientY;
  var _event$target$getBoun = event.target.getBoundingClientRect(),
    top = _event$target$getBoun.top,
    height = _event$target$getBoun.height;
  // optional chain for testing
  var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;
  // find abstract drop node by horizontal offset
  var abstractDropNodeEntity = keyEntities[targetNode.props.eventKey];
  if (clientY < top + height / 2) {
    // first half, set abstract drop node to previous node
    var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = keyEntities[prevNodeKey];
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;
  // Only allow cross level drop when dragging on a non-expanded node
  if (!expandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNode.props.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNode.props.eventKey) {
    // first half of first node in first level
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && expandKeys.includes(dragOverNodeKey)) {
    // drop on expanded node
    // only allow drop inside
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      // | Node     | <- abstractDropNode
      // | -^-===== | <- mousePosition
      // 1. try drop after
      // 2. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      // | Node     | <- abstractDropNode
      // | ---==^== | <- mousePosition
      // whether it has children or doesn't has children
      // always
      // 1. try drop inside
      // 2. try drop after
      // 3. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    // | Node1 | <- abstractDropNode
    //      |  Node2  |
    // --^--|----=====| <- mousePosition
    // 1. try insert after Node1
    // 2. do not allow drop
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition: dropPosition,
    dropLevelOffset: dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey: dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed: dropAllowed
  };
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processor) {
  if (!treeData) return [];
  var _ref2 = processor || {},
    _ref2$processProps = _ref2.processProps,
    processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;
  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded);
    var childrenNodes = convertDataToTree(children, processor);
    return /*#__PURE__*/React.createElement(TreeNode, _extends({
      key: props.key
    }, processProps(props)), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }
  // Convert keys to object format
  var keyProps;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, '`checkedKeys` is not an array or an object');
    return null;
  }
  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
      node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(expandedKeys);
}

/***/ }),

/***/ 82394:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ convertNodePropsToEventData; },
/* harmony export */   H8: function() { return /* binding */ getTreeNodeProps; },
/* harmony export */   I8: function() { return /* binding */ convertDataToEntities; },
/* harmony export */   km: function() { return /* binding */ getKey; },
/* harmony export */   oH: function() { return /* binding */ flattenTreeData; },
/* harmony export */   w$: function() { return /* binding */ fillFieldNames; },
/* harmony export */   zn: function() { return /* binding */ convertTreeToData; }
/* harmony export */ });
/* unused harmony exports getPosition, isTreeNode, warningWithoutKey, traverseDataNodes */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11371);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22925);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88351);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32731);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21537);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36664);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27029);




var _excluded = ["children"];



function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    title = _ref.title,
    _title = _ref._title,
    key = _ref.key,
    children = _ref.children;
  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}
/**
 * Warning if TreeNode do not provides key
 */
function warningWithoutKey(treeData, fieldNames) {
  var keys = new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }
  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!isTreeNode(treeNode)) {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }
      var key = treeNode.key;
      var _treeNode$props = treeNode.props,
        children = _treeNode$props.children,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_treeNode$props, _excluded);
      var dataNode = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        key: key
      }, rest);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }
  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames),
    fieldTitles = _fillFieldNames._title,
    fieldKey = _fillFieldNames.key,
    fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode[fieldKey], pos);
      // Pick matched title in field title list
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }
      // Add FlattenDataNode into list
      var flattenNode = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, (0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(treeNode, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(fieldTitles), [fieldKey, fieldChildren]))), {}, {
        title: mergedTitle,
        key: mergedKey,
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);
      // Loop treeNode children
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */
function traverseDataNodes(dataNodes, callback,
// To avoid too many params, let use config instead of origin param
config) {
  var mergedConfig = {};
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};
  // Init config
  var _mergedConfig = mergedConfig,
    childrenPropName = _mergedConfig.childrenPropName,
    externalGetKey = _mergedConfig.externalGetKey,
    fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames),
    fieldKey = _fillFieldNames2.key,
    fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;
  // Get keys
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }
  // Process
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : '0';
    var connectNodes = node ? [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(pathNodes), [node]) : [];
    // Process node if is not root
    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(data);
    }
    // Process children node
    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    initWrapper = _ref2.initWrapper,
    processEntity = _ref2.processEntity,
    onProcessFinished = _ref2.onProcessFinished,
    externalGetKey = _ref2.externalGetKey,
    childrenPropName = _ref2.childrenPropName,
    fieldNames = _ref2.fieldNames;
  var /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
      index = item.index,
      pos = item.pos,
      key = item.key,
      parentPos = item.parentPos,
      level = item.level,
      nodes = item.nodes;
    var entity = {
      node: node,
      nodes: nodes,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;
    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName,
    fieldNames: fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys,
    selectedKeys = _ref3.selectedKeys,
    loadedKeys = _ref3.loadedKeys,
    loadingKeys = _ref3.loadingKeys,
    checkedKeys = _ref3.checkedKeys,
    halfCheckedKeys = _ref3.halfCheckedKeys,
    dragOverNodeKey = _ref3.dragOverNodeKey,
    dropPosition = _ref3.dropPosition,
    keyEntities = _ref3.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    loaded = props.loaded,
    loading = props.loading,
    halfChecked = props.halfChecked,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    pos = props.pos,
    active = props.active,
    eventKey = props.eventKey;
  var eventData = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active,
    key: eventKey
  });
  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }
  return eventData;
}

/***/ }),

/***/ 21537:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ toArray; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56237);


function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 2909:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ canUseDom; }
/* harmony export */ });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 37432:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ contains; }
/* harmony export */ });
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/***/ }),

/***/ 40206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hq: function() { return /* binding */ updateCSS; },
/* harmony export */   jL: function() { return /* binding */ removeCSS; }
/* harmony export */ });
/* unused harmony exports injectCSS, clearContainerCache */
/* harmony import */ var _canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2909);
/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37432);


var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(0,_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === 'prependQueue';
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function (node) {
        // Ignore style which not injected by rc-util with prepend
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        // Ignore style which priority less then new style
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !(0,_contains__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

/***/ }),

/***/ 68551:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ findDOMNode; }
/* harmony export */ });
/* unused harmony export isDOM */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10422);


function isDOM(node) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
  return node instanceof HTMLElement || node instanceof SVGElement;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (isDOM(node)) {
    return node;
  }
  if (node instanceof react__WEBPACK_IMPORTED_MODULE_0__.Component) {
    return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(node);
  }
  return null;
}

/***/ }),

/***/ 37751:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/* harmony default export */ __webpack_exports__.Z = (function (element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
});

/***/ }),

/***/ 4333:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ getShadowRoot; }
/* harmony export */ });
/* unused harmony export inShadow */
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

/***/ }),

/***/ 43218:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
/* harmony default export */ __webpack_exports__.Z = (KeyCode);

/***/ }),

/***/ 9699:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ render; },
/* harmony export */   v: function() { return /* binding */ unmount; }
/* harmony export */ });
/* unused harmony exports _r, _u */
/* harmony import */ var _babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99177);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42700);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11371);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88351);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10422);





// Let compiler not to search module usage
var fullClone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, /*#__PURE__*/ (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react_dom__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react_dom__WEBPACK_IMPORTED_MODULE_0__, 2))));
var version = fullClone.version,
  reactRender = fullClone.render,
  unmountComponentAtNode = fullClone.unmountComponentAtNode;
var createRoot;
try {
  var mainVersion = Number((version || '').split('.')[0]);
  if (mainVersion >= 18) {
    createRoot = fullClone.createRoot;
  }
} catch (e) {
  // Do nothing;
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = '__rc_react_root__';

// ========================== Render ==========================

function modernRender(node, container) {
  toggleWarning(true);
  var root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}
function legacyRender(node, container) {
  reactRender(node, container);
}

/** @private Test usage. Not work in prod */
function _r(node, container) {
  if (false) {}
}
function render(node, container) {
  if (createRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender(node, container);
}

// ========================= Unmount ==========================
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function () {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}

/** @private Test usage. Not work in prod */
function _u(container) {
  if (false) {}
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/(0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee2(container) {
    return (0,_babel_runtime_helpers_esm_regeneratorRuntime__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(createRoot !== undefined)) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 2:
          legacyUnmount(container);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}

/***/ }),

/***/ 61477:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ getTargetScrollBarSize; }
/* harmony export */ });
/* unused harmony export default */
/* eslint-disable no-param-reassign */

var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ }),

/***/ 44374:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useEvent; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

function useEvent(callback) {
  var fnRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  fnRef.current = callback;
  var memoFn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 9654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useId; }
/* harmony export */ });
/* unused harmony export resetUuid */
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13446);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88351);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);



function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({}, /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))));
  return fullClone.useId;
}
var uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
function useId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState('ssr-id'),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (!useOriginId) {
      var nextId = uuid;
      uuid += 1;
      setInnerId("rc_unique_".concat(nextId));
    }
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return reactNativeId || innerId;
}

/***/ }),

/***/ 7039:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ useLayoutUpdateEffect; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2909);



/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && (0,_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
/* harmony default export */ __webpack_exports__.Z = (useLayoutEffect);

/***/ }),

/***/ 20415:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useMemo; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

/***/ }),

/***/ 28919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useMergedState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13446);
/* harmony import */ var _useEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44374);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7039);
/* harmony import */ var _useState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37216);




/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0,_useState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0,_useEvent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(onChange);
  var _useState3 = (0,_useState__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([mergedValue]),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutUpdateEffect */ .o)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0,_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutUpdateEffect */ .o)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0,_useEvent__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ 37216:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ useSafeState; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13446);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);


/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),
    _React$useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/***/ }),

/***/ 72206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zX: function() { return /* reexport safe */ _hooks_useEvent__WEBPACK_IMPORTED_MODULE_0__.Z; }
/* harmony export */ });
/* harmony import */ var _hooks_useEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44374);
/* harmony import */ var _hooks_useMergedState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28919);
/* harmony import */ var _ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99869);
/* harmony import */ var _utils_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93329);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27029);







/***/ }),

/***/ 74704:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11371);
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27029);



/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    (0,_warning__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(a) === 'object' && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}
/* harmony default export */ __webpack_exports__.Z = (isEqual);

/***/ }),

/***/ 36664:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ omit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88351);

function omit(obj, fields) {
  var clone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ }),

/***/ 15064:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ pickAttrs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88351);

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ 29587:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
/* harmony default export */ __webpack_exports__.Z = (wrapperRaf);

/***/ }),

/***/ 99869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Yr: function() { return /* binding */ supportRef; },
/* harmony export */   mH: function() { return /* binding */ fillRef; },
/* harmony export */   sQ: function() { return /* binding */ composeRef; },
/* harmony export */   x1: function() { return /* binding */ useComposeRef; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11371);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56237);
/* harmony import */ var _hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20415);

/* eslint-disable no-param-reassign */



function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return (0,_hooks_useMemo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length !== next.length || prev.every(function (ref, i) {
      return ref !== next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0,react_is__WEBPACK_IMPORTED_MODULE_0__.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
/* eslint-enable */

/***/ }),

/***/ 96335:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ get; }
/* harmony export */ });
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}

/***/ }),

/***/ 93329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ merge; },
/* harmony export */   Z: function() { return /* binding */ set; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11371);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88351);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22925);
/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66958);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96335);





function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = (0,_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(entity);
  } else {
    clone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, entity);
  }

  // Delete prop if `removeIfUndefined` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !(0,_get__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;

/**
 * Merge objects which will create
 */
function merge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function (src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = (0,_get__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        // Only add not loop obj
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = (0,_get__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(clone, path);
          if (isArr) {
            // Array will always be override
            clone = set(clone, path, []);
          } else if (!originValue || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(originValue) !== 'object') {
            // Init container if not exist
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function (key) {
            internalMerge([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}

/***/ }),

/***/ 27029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kp: function() { return /* binding */ warning; }
/* harmony export */ });
/* unused harmony exports preMessage, note, resetWarned, call, warningOnce, noteOnce */
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function note(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
/* harmony default export */ __webpack_exports__.ZP = (warningOnce);
/* eslint-enable */

/***/ })

}]);