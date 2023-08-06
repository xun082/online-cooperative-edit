"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["src_pages_home_index_tsx"],{

/***/ 12107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
;// CONCATENATED MODULE: ./src/pages/home/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--aosRk","sidebar":"sidebar--HcG7Y","new-code-snippet":"new-code-snippet--T2NzL","newCodeSnippet":"new-code-snippet--T2NzL","test":"test--I7e1l","content":"content--yO_6O","dialog":"dialog--v8AjO","module":"module--grcwf","module-header":"module-header--cVdub","moduleHeader":"module-header--cVdub","module-close":"module-close--JVJxl","moduleClose":"module-close--JVJxl","module-content":"module-content--mUD6p","moduleContent":"module-content--mUD6p","create-new-snippet-step":"create-new-snippet-step--Uf6JG","createNewSnippetStep":"create-new-snippet-step--Uf6JG","create-new-snippet-content":"create-new-snippet-content--zccnk","createNewSnippetContent":"create-new-snippet-content--zccnk","create-new-snippet-type":"create-new-snippet-type--u1uSz","createNewSnippetType":"create-new-snippet-type--u1uSz"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.1_react@18.2.0/node_modules/react-router/dist/index.js
var dist = __webpack_require__(28713);
;// CONCATENATED MODULE: ./src/components/template-card/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var template_card_index_module = ({"root":"root--NU6PW","image":"image--u53km"});
;// CONCATENATED MODULE: ./src/components/template-card/index.tsx



const TemplateCard = props => {
  const {
    src,
    alt
  } = props;
  const navigate = (0,dist/* useNavigate */.s0)();
  return /*#__PURE__*/react.createElement("div", {
    className: template_card_index_module["root"],
    onClick: () => navigate("/edit")
  }, /*#__PURE__*/react.createElement("img", {
    className: template_card_index_module["image"],
    src: src,
    alt: alt
  }), /*#__PURE__*/react.createElement("span", null, alt));
};
/* harmony default export */ var template_card = (TemplateCard);
// EXTERNAL MODULE: ./src/common/constant.ts + 7 modules
var constant = __webpack_require__(82893);
;// CONCATENATED MODULE: ./src/pages/home/index.tsx




const Home = () => {
  const [moduleShow, setModuleShow] = (0,react.useState)(false);
  const closeHandle = event => {
    // 点击的是内容区域，不关闭模态框
    if (event.target !== event.currentTarget) return;
    setModuleShow(false);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("section", {
    className: index_module.root
  }, /*#__PURE__*/react.createElement("aside", {
    className: index_module.sidebar
  }, /*#__PURE__*/react.createElement("button", {
    className: index_module["new-code-snippet"]
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => setModuleShow(!moduleShow)
  }, "\u65B0\u5EFA\u4EE3\u7801\u7247\u6BB5"))), /*#__PURE__*/react.createElement("main", {
    className: index_module.content
  }, "=")), moduleShow && /*#__PURE__*/react.createElement("div", {
    className: index_module["dialog"],
    onClick: closeHandle
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["module"]
  }, /*#__PURE__*/react.createElement("header", {
    className: index_module["module-header"]
  }, /*#__PURE__*/react.createElement("span", null, "\u9009\u62E9\u6A21\u677F"), /*#__PURE__*/react.createElement("span", {
    className: index_module["module-close"],
    onClick: () => setModuleShow(false)
  }, "\u5173\u95ED")), /*#__PURE__*/react.createElement("section", {
    className: index_module["module-content"]
  }, /*#__PURE__*/react.createElement("aside", {
    className: index_module["create-new-snippet-step"]
  }, "1"), /*#__PURE__*/react.createElement("main", {
    className: index_module["create-new-snippet-content"]
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["create-new-snippet-type"]
  }, constant/* Template */.YS && constant/* Template */.YS.map(value => /*#__PURE__*/react.createElement(template_card, {
    src: value.src,
    alt: value.alt,
    key: value.index
  }))))))));
};
/* harmony default export */ var home = (Home);

/***/ })

}]);