"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["main"],{

/***/ 5756:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(4478);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.15.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4466);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(8646);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SwitcherOutlined.js + 1 modules
var SwitcherOutlined = __webpack_require__(3106);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LeftSquareOutlined.js + 1 modules
var LeftSquareOutlined = __webpack_require__(3647);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/RightSquareOutlined.js + 1 modules
var RightSquareOutlined = __webpack_require__(7175);
;// CONCATENATED MODULE: ./src/components/header/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--tyOZZ","header-left":"header-left--VrKvt","headerLeft":"header-left--VrKvt","header-right":"header-right--is8Ue","headerRight":"header-right--is8Ue","preview-control":"preview-control--8jBcO","previewControl":"preview-control--8jBcO","open-new-tab":"open-new-tab--MvDWy","openNewTab":"open-new-tab--MvDWy","login":"login--LDItZ"});
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(1656);
// EXTERNAL MODULE: ./src/store/modules/home.ts
var home = __webpack_require__(7429);
;// CONCATENATED MODULE: ./src/components/header/index.tsx





const Header = () => {
  const {
    previewSwitch,
    previewUrl
  } = (0,store/* useAppSelector */.CG)(state => state.home);
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const previewSwitchHandle = () => {
    dispatch((0,home/* changePreviewSwitch */.wP)(!previewSwitch));
  };
  const openNewTab = () => {
    dispatch((0,home/* changePreviewSwitch */.wP)(true));
    window.open(previewUrl, "_blank");
  };
  return /*#__PURE__*/react.createElement("header", {
    className: index_module.root
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["header-left"]
  }, "Moment"), /*#__PURE__*/react.createElement("div", {
    className: index_module["header-right"]
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["open-new-tab"],
    onClick: openNewTab
  }, /*#__PURE__*/react.createElement(SwitcherOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("span", null, "Open in New Tab")), /*#__PURE__*/react.createElement("div", {
    className: index_module["preview-control"],
    onClick: previewSwitchHandle
  }, previewSwitch ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(LeftSquareOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("span", null, "open")) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(RightSquareOutlined/* default */.Z, null), /*#__PURE__*/react.createElement("span", null, "close"))), /*#__PURE__*/react.createElement("div", {
    className: index_module["login"]
  }, "\u767B\u5F55")));
};
/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(4430);
;// CONCATENATED MODULE: ./src/router/index.tsx


const Home = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ "src_pages_home_index_tsx").then(__webpack_require__.bind(__webpack_require__, 7753)));
const Edit = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a"), __webpack_require__.e("src_pages_edit_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, 8151)));
const RouterConfig = () => {
  return (0,react_router_dist/* useRoutes */.V$)([{
    path: "/",
    element: /*#__PURE__*/react.createElement(Home, null)
  }, {
    path: "/edit",
    element: /*#__PURE__*/react.createElement(Edit, null)
  }]);
};
/* harmony default export */ var router = (RouterConfig);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(2298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(9396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/index.css
var styles = __webpack_require__(2302);
;// CONCATENATED MODULE: ./src/assets/styles/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ var assets_styles = (styles/* default */.Z && styles/* default */.Z.locals ? styles/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/App.tsx







const App = () => {
  return /*#__PURE__*/react.createElement(es/* Provider */.zt, {
    store: store/* store */.h
  }, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", null, "\u52A0\u8F7D\u4E2D")
  }, /*#__PURE__*/react.createElement(router, null))));
};
/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/index.tsx



const root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(src_App, null));

/***/ }),

/***/ 1656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: function() { return /* binding */ useAppSelector; },
/* harmony export */   TL: function() { return /* binding */ useAppDispatch; },
/* harmony export */   h: function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8466);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8646);
/* harmony import */ var _modules_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3776);
/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7429);




const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .configureStore */ .xC)({
  reducer: {
    code: _modules_code__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,
    home: _modules_home__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: "production" !== "production"
});
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9;

/***/ }),

/***/ 3776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: function() { return /* binding */ changeFormatPathValue; },
/* harmony export */   YY: function() { return /* binding */ changePath; },
/* harmony export */   mR: function() { return /* binding */ changeSelectedKey; },
/* harmony export */   zk: function() { return /* binding */ changeFileModalStatus; }
/* harmony export */ });
/* unused harmony export changeTreeData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8466);
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1897);


const initialState = {
  path: "",
  formatPath: "",
  fileModalIsOpen: false,
  fileControlType: undefined,
  treeData: [],
  selectedKey: ""
};
const codeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
  name: "code",
  initialState,
  reducers: {
    changePath(state, action) {
      const {
        payload
      } = action;
      state.path = payload;
      state.formatPath = (0,_utils_file__WEBPACK_IMPORTED_MODULE_1__/* .routerFormat */ .tK)(payload);
    },
    changeFormatPathValue(state, action) {
      const {
        payload
      } = action;
      state.formatPath = payload;
    },
    changeFileModalStatus(state, action) {
      const {
        payload: {
          open,
          type
        }
      } = action;
      state.fileModalIsOpen = open;
      state.fileControlType = type;
    },
    changeTreeData(state, action) {
      const {
        payload: {
          treeData,
          key,
          path
        }
      } = action;
      console.log(treeData);
      const newData = [...treeData];
      console.log(newData === treeData);
      if (key) {
        const selectedNode = (0,_utils_file__WEBPACK_IMPORTED_MODULE_1__/* .findNodeByKey */ .f1)(key, newData);
        selectedNode.title = path;
      }
      state.treeData = newData;
    },
    changeSelectedKey(state, action) {
      const {
        payload
      } = action;
      state.selectedKey = payload;
    }
  },
  extraReducers: () => {}
});
const {
  changePath,
  changeFileModalStatus,
  changeTreeData,
  changeFormatPathValue,
  changeSelectedKey
} = codeSlice.actions;
/* harmony default export */ __webpack_exports__.ZP = (codeSlice.reducer);

/***/ }),

/***/ 7429:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HN: function() { return /* binding */ changePreviewUrl; },
/* harmony export */   wP: function() { return /* binding */ changePreviewSwitch; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8466);

const initialState = {
  previewSwitch: true,
  previewUrl: "https://github.com/xun082"
};
const codeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
  name: "home",
  initialState,
  reducers: {
    changePreviewSwitch(state, action) {
      const {
        payload
      } = action;
      state.previewSwitch = payload;
    },
    changePreviewUrl(state, action) {
      const {
        payload
      } = action;
      state.previewUrl = payload;
    }
  },
  extraReducers: () => {}
});
const {
  changePreviewSwitch,
  changePreviewUrl
} = codeSlice.actions;
/* harmony default export */ __webpack_exports__.ZP = (codeSlice.reducer);

/***/ }),

/***/ 1897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F6: function() { return /* binding */ getNodePath; },
/* harmony export */   f1: function() { return /* binding */ findNodeByKey; },
/* harmony export */   t5: function() { return /* binding */ getFileSuffix; },
/* harmony export */   tK: function() { return /* binding */ routerFormat; }
/* harmony export */ });
const getNodePath = function (key, data) {
  let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  for (const node of data) {
    if (node?.key === key) return `${path}/${node.title}`;
    const rsp = getNodePath(key, node?.children ?? [], `${path}/${node.title}`);
    if (rsp.length) return rsp;
  }
  return "";
};
const findNodeByKey = (key, data) => {
  for (const node of data) {
    if (node?.key === key) return node;
    const rsp = findNodeByKey(key, node?.children ?? []);
    if (rsp) return rsp;
  }
  return null;
};
const routerFormat = path => {
  const pathArray = path.split("/");
  const newPath = pathArray[pathArray.length - 1];
  return newPath;
};
const getFileSuffix = fileName => {
  return fileName.slice(fileName.lastIndexOf(".") + 1);
};

/***/ }),

/***/ 2302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2916);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3282);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #ffffff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-6ef37c4b","vendors-e74d93d6","vendors-cd0597eb","vendors-6575d636","vendors-5603c60f","vendors-5de78aca","vendors-acde0842","vendors-47c4c770","vendors-8162d906","vendors-7972c76f","vendors-a2cf4820","vendors-be5e06f6","vendors-e09463db","vendors-b965f189","vendors-39f4d2e5","vendors-4c3bcec0","vendors-9ebd23ae","vendors-3cf3293a"], function() { return __webpack_exec__(5756); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);