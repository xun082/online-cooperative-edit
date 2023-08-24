"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["main"],{

/***/ 55756:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(44478);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.15.0_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(34466);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.7_@types+react@18.2.20_react-dom@18.2.0_react-native@_ir757kqlw6czlbws2pzjt2qgsq/node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(48646);
;// CONCATENATED MODULE: ./src/components/header/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--tyOZZ","header-left":"header-left--VrKvt","headerLeft":"header-left--VrKvt","header-right":"header-right--is8Ue","headerRight":"header-right--is8Ue","login":"login--LDItZ"});
;// CONCATENATED MODULE: ./src/components/header/index.tsx


const Header = () => {
  return /*#__PURE__*/react.createElement("header", {
    className: index_module.root
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["header-left"]
  }, "Moment"), /*#__PURE__*/react.createElement("div", {
    className: index_module["header-right"]
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["login"]
  }, "\u767B\u5F55")));
};
/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(81656);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.15.0_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(4430);
;// CONCATENATED MODULE: ./src/router/index.tsx


const Home = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ "src_pages_home_index_tsx").then(__webpack_require__.bind(__webpack_require__, 77753)));
const Edit = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-e74d93d6"), __webpack_require__.e("vendors-cd0597eb"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-5de78aca"), __webpack_require__.e("vendors-b7b2b1d6"), __webpack_require__.e("vendors-b40a25ea"), __webpack_require__.e("vendors-ccd6c5d7"), __webpack_require__.e("vendors-9738eacb"), __webpack_require__.e("vendors-5a62b1df"), __webpack_require__.e("vendors-e61bdb27"), __webpack_require__.e("vendors-ba75db03"), __webpack_require__.e("vendors-4ced94fb"), __webpack_require__.e("vendors-a5ed5821"), __webpack_require__.e("vendors-9c7ffab4"), __webpack_require__.e("vendors-95877811"), __webpack_require__.e("vendors-1549583d"), __webpack_require__.e("vendors-da9fd9dc"), __webpack_require__.e("vendors-5d32fd03"), __webpack_require__.e("vendors-a85cb6ae"), __webpack_require__.e("vendors-fc509239"), __webpack_require__.e("vendors-73460f5e"), __webpack_require__.e("vendors-b6c13333"), __webpack_require__.e("vendors-ef3a5c7f"), __webpack_require__.e("vendors-cd700261"), __webpack_require__.e("vendors-e79dc056"), __webpack_require__.e("vendors-3e0f38bf"), __webpack_require__.e("vendors-d99f4572"), __webpack_require__.e("vendors-368790d8"), __webpack_require__.e("vendors-ae7d5aa0"), __webpack_require__.e("vendors-ec59e91d"), __webpack_require__.e("vendors-1bfb811a"), __webpack_require__.e("vendors-6db446cf"), __webpack_require__.e("vendors-cb7193af"), __webpack_require__.e("vendors-715a3b8f"), __webpack_require__.e("vendors-06fdea35"), __webpack_require__.e("vendors-7001ec42"), __webpack_require__.e("vendors-fe97e044"), __webpack_require__.e("vendors-b57f1964"), __webpack_require__.e("vendors-3b5ea4b6"), __webpack_require__.e("vendors-2447ffdc"), __webpack_require__.e("vendors-9b105835"), __webpack_require__.e("vendors-f0f55b6e"), __webpack_require__.e("vendors-f315c23d"), __webpack_require__.e("vendors-a0125ed2"), __webpack_require__.e("vendors-448d6272"), __webpack_require__.e("vendors-47d52b41"), __webpack_require__.e("vendors-f721481f"), __webpack_require__.e("vendors-e3950c1c"), __webpack_require__.e("vendors-895354f2"), __webpack_require__.e("vendors-3ae6908a"), __webpack_require__.e("vendors-70a5a7f4"), __webpack_require__.e("vendors-0cabaaf9"), __webpack_require__.e("vendors-30e3dbd1"), __webpack_require__.e("vendors-b2a563c8"), __webpack_require__.e("vendors-8b033358"), __webpack_require__.e("vendors-acb218f4"), __webpack_require__.e("vendors-47179a4d"), __webpack_require__.e("vendors-430670c2"), __webpack_require__.e("vendors-038bd9aa"), __webpack_require__.e("vendors-1e527f35"), __webpack_require__.e("vendors-ad38c252"), __webpack_require__.e("vendors-03916b97"), __webpack_require__.e("vendors-075f49fe"), __webpack_require__.e("vendors-de9c6e90"), __webpack_require__.e("vendors-b21f9708"), __webpack_require__.e("vendors-dc654834"), __webpack_require__.e("vendors-cd3dd8d1"), __webpack_require__.e("vendors-300f7c40"), __webpack_require__.e("vendors-a6884c26"), __webpack_require__.e("vendors-f7c8b42e"), __webpack_require__.e("vendors-26f07415"), __webpack_require__.e("vendors-98e77c49"), __webpack_require__.e("vendors-3742ad55"), __webpack_require__.e("vendors-93db0f2c"), __webpack_require__.e("vendors-381b041e"), __webpack_require__.e("vendors-df9cc3c4"), __webpack_require__.e("vendors-b681ebd8"), __webpack_require__.e("vendors-69e4b8b2"), __webpack_require__.e("vendors-87bf3211"), __webpack_require__.e("vendors-eaba0428"), __webpack_require__.e("vendors-1a5e034c"), __webpack_require__.e("vendors-d32b9835"), __webpack_require__.e("vendors-32f17a4e"), __webpack_require__.e("vendors-e2a95dbb"), __webpack_require__.e("vendors-e32a9e17"), __webpack_require__.e("vendors-daa0f32f"), __webpack_require__.e("vendors-427fae6d"), __webpack_require__.e("vendors-de94d2f0"), __webpack_require__.e("vendors-0b0d4d0d"), __webpack_require__.e("vendors-36c80399"), __webpack_require__.e("vendors-4470bc07"), __webpack_require__.e("vendors-304852f1"), __webpack_require__.e("vendors-226cce73"), __webpack_require__.e("vendors-4c0e5143"), __webpack_require__.e("vendors-e7710145"), __webpack_require__.e("vendors-4e404c3e"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-a2cf4820"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-b965f189"), __webpack_require__.e("vendors-39f4d2e5"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a"), __webpack_require__.e("src_pages_edit_index_tsx-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AA-68b167")]).then(__webpack_require__.bind(__webpack_require__, 77491)));
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
var injectStylesIntoStyleTag = __webpack_require__(53072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(32298);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(27976);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(85147);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(80566);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(89396);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.28_webpack@5.88.2/node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/index.css
var styles = __webpack_require__(21301);
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
  }, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(dist/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(react.Suspense, {
    fallback: /*#__PURE__*/react.createElement("div", null, "\u52A0\u8F7D\u4E2D")
  }, /*#__PURE__*/react.createElement(router, null))));
};
/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/index.tsx



const root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(src_App, null));

/***/ }),

/***/ 81656:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: function() { return /* binding */ useAppSelector; },
/* harmony export */   TL: function() { return /* binding */ useAppDispatch; },
/* harmony export */   h: function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18466);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48646);
/* harmony import */ var _modules_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33776);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__/* .configureStore */ .xC)({
  reducer: {
    code: _modules_code__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: "production" !== "production"
});
const useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9;

/***/ }),

/***/ 33776:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: function() { return /* binding */ changeFormatPathValue; },
/* harmony export */   YY: function() { return /* binding */ changePath; },
/* harmony export */   mR: function() { return /* binding */ changeSelectedKey; },
/* harmony export */   zk: function() { return /* binding */ changeFileModalStatus; }
/* harmony export */ });
/* unused harmony export changeTreeData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18466);
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81897);


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

/***/ 81897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F6: function() { return /* binding */ getNodePath; },
/* harmony export */   f1: function() { return /* binding */ findNodeByKey; },
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

/***/ }),

/***/ 21301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32916);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73282);
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
/******/ __webpack_require__.O(0, ["vendors-6ef37c4b","vendors-e74d93d6","vendors-cd0597eb","vendors-6575d636","vendors-5603c60f","vendors-5de78aca","vendors-b7b2b1d6","vendors-b40a25ea","vendors-ccd6c5d7","vendors-9738eacb","vendors-5a62b1df","vendors-e61bdb27","vendors-ba75db03","vendors-4ced94fb","vendors-a5ed5821","vendors-9c7ffab4","vendors-95877811","vendors-1549583d","vendors-da9fd9dc","vendors-5d32fd03","vendors-a85cb6ae","vendors-fc509239","vendors-73460f5e","vendors-b6c13333","vendors-ef3a5c7f","vendors-cd700261","vendors-e79dc056","vendors-3e0f38bf","vendors-d99f4572","vendors-368790d8","vendors-ae7d5aa0","vendors-ec59e91d","vendors-1bfb811a","vendors-6db446cf","vendors-cb7193af","vendors-715a3b8f","vendors-06fdea35","vendors-7001ec42","vendors-fe97e044","vendors-b57f1964","vendors-3b5ea4b6","vendors-2447ffdc","vendors-9b105835","vendors-f0f55b6e","vendors-f315c23d","vendors-a0125ed2","vendors-448d6272","vendors-47d52b41","vendors-f721481f","vendors-e3950c1c","vendors-895354f2","vendors-3ae6908a","vendors-70a5a7f4","vendors-0cabaaf9","vendors-30e3dbd1","vendors-b2a563c8","vendors-8b033358","vendors-acb218f4","vendors-47179a4d","vendors-430670c2","vendors-038bd9aa","vendors-1e527f35","vendors-ad38c252","vendors-03916b97","vendors-075f49fe","vendors-de9c6e90","vendors-b21f9708","vendors-dc654834","vendors-cd3dd8d1","vendors-300f7c40","vendors-a6884c26","vendors-f7c8b42e","vendors-26f07415","vendors-98e77c49","vendors-3742ad55","vendors-93db0f2c","vendors-381b041e","vendors-df9cc3c4","vendors-b681ebd8","vendors-69e4b8b2","vendors-87bf3211","vendors-eaba0428","vendors-1a5e034c","vendors-d32b9835","vendors-32f17a4e","vendors-e2a95dbb","vendors-e32a9e17","vendors-daa0f32f","vendors-427fae6d","vendors-de94d2f0","vendors-0b0d4d0d","vendors-36c80399","vendors-4470bc07","vendors-304852f1","vendors-226cce73","vendors-4c0e5143","vendors-e7710145","vendors-4e404c3e","vendors-529317a0","vendors-d07461da","vendors-acde0842","vendors-47c4c770","vendors-8162d906","vendors-7972c76f","vendors-a2cf4820","vendors-be5e06f6","vendors-e09463db","vendors-b965f189","vendors-39f4d2e5","vendors-4c3bcec0","vendors-9ebd23ae","vendors-3cf3293a"], function() { return __webpack_exec__(55756); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);