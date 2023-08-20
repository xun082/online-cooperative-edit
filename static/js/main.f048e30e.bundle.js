"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["main"],{

/***/ 44628:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(44478);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.1_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(10634);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.1_@types+react-dom@18.0.10_@types+react@18.0.28_react-dom@18.2.0_react-native_bzvwpjj6qcyjbdjubmk6ufrske/node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(86792);
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
var store = __webpack_require__(59194);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.1_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(28713);
;// CONCATENATED MODULE: ./src/router/index.tsx


const Home = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ "src_pages_home_index_tsx").then(__webpack_require__.bind(__webpack_require__, 77270)));
const Edit = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-2ddac450"), __webpack_require__.e("vendors-6575d636"), __webpack_require__.e("vendors-7e014675"), __webpack_require__.e("vendors-5603c60f"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-2846636f"), __webpack_require__.e("vendors-fb680737"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-529317a0"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-acde0842"), __webpack_require__.e("vendors-47c4c770"), __webpack_require__.e("vendors-e832d2e9"), __webpack_require__.e("vendors-d0ec3b80"), __webpack_require__.e("vendors-7972c76f"), __webpack_require__.e("vendors-1248785b"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-9c0586db"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("vendors-3cf3293a"), __webpack_require__.e("src_pages_edit_index_tsx-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AA-68b167")]).then(__webpack_require__.bind(__webpack_require__, 73680)));
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
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(79873);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(67152);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77044);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(21114);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(11542);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.1/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(70204);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.1/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_postcss@8.4.25_webpack@5.88.1/node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/index.css
var styles = __webpack_require__(60397);
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

/***/ 59194:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: function() { return /* binding */ useAppSelector; },
/* harmony export */   TL: function() { return /* binding */ useAppDispatch; },
/* harmony export */   h: function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25298);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86792);
/* harmony import */ var _modules_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33986);



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

/***/ 33986:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: function() { return /* binding */ changeFormatPathValue; },
/* harmony export */   YY: function() { return /* binding */ changePath; },
/* harmony export */   mR: function() { return /* binding */ changeSelectedKey; },
/* harmony export */   zk: function() { return /* binding */ changeFileModalStatus; }
/* harmony export */ });
/* unused harmony export changeTreeData */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25298);
/* harmony import */ var _utils_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56742);


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

/***/ 56742:
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

/***/ 60397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11063);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26143);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_1_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #ffffff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-6ef37c4b","vendors-6754b7c1","vendors-2ddac450","vendors-6575d636","vendors-7e014675","vendors-5603c60f","vendors-086b29f6","vendors-d6fb64da","vendors-7f137093","vendors-c0a54c56","vendors-61418bc3","vendors-a95a56ed","vendors-d34a955d","vendors-3e9e74b3","vendors-3514b192","vendors-3552b5dd","vendors-8244a9f4","vendors-5fee333d","vendors-746f6d36","vendors-02415980","vendors-5814efaa","vendors-5a79525e","vendors-3036554e","vendors-b4ef0959","vendors-64ffe30e","vendors-94c6499c","vendors-6180703e","vendors-7b1eb68b","vendors-ece6210f","vendors-22297f50","vendors-0fa196e9","vendors-1d24e601","vendors-75d96dab","vendors-de32e213","vendors-7055801d","vendors-d7cf0390","vendors-9b08e26f","vendors-5d8271ea","vendors-2448660c","vendors-48ee76d5","vendors-2589f79c","vendors-8196c363","vendors-792b1082","vendors-c1862374","vendors-82a34db3","vendors-5f7b4bb4","vendors-134232b5","vendors-8167d328","vendors-17bae64e","vendors-777f7aad","vendors-15d71b68","vendors-f471bb22","vendors-3c4ed70e","vendors-2de40c23","vendors-6f87ab14","vendors-93e8ad66","vendors-8c50340c","vendors-7789f186","vendors-3eaac041","vendors-3de3c236","vendors-1a1421c5","vendors-14e8cafa","vendors-879bbece","vendors-fb7002aa","vendors-261b263f","vendors-04d415ea","vendors-9d096c34","vendors-1168a4db","vendors-b319be2a","vendors-8cdd0eee","vendors-f4f7d239","vendors-0a1c08da","vendors-2d6b43a1","vendors-7834dda7","vendors-a9035caa","vendors-3d0dd390","vendors-dd308ff9","vendors-3a53ca05","vendors-192ca9d9","vendors-2846636f","vendors-fb680737","vendors-af305962","vendors-5d59686c","vendors-1b696f30","vendors-50731c06","vendors-8dc381f5","vendors-232dd12b","vendors-5d805775","vendors-61f56485","vendors-ee91294a","vendors-9483fc4c","vendors-8e452b37","vendors-a60fc1b9","vendors-529317a0","vendors-d07461da","vendors-acde0842","vendors-47c4c770","vendors-e832d2e9","vendors-d0ec3b80","vendors-7972c76f","vendors-1248785b","vendors-be5e06f6","vendors-e09463db","vendors-80072107","vendors-9c0586db","vendors-4c3bcec0","vendors-9ebd23ae","vendors-3cf3293a"], function() { return __webpack_exec__(44628); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);