"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["src_pages_home_index_tsx"],{

/***/ 77270:
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
;// CONCATENATED MODULE: ./src/common/edit-title.tsx

const EditorTitleObjects = [{
  title: "HTML",
  tag: "html",
  index: 1,
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 15 15",
    style: {
      width: "17px",
      height: "17px",
      marginInlineEnd: "5px"
    }
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "#FF3C41",
    width: "15",
    height: "15",
    rx: "4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10.97 2.29a.563.563 0 0 0-.495-.29.572.572 0 0 0-.488.277l-5.905 9.86a.565.565 0 0 0-.007.574c.102.18.287.289.495.289a.572.572 0 0 0 .488-.277l5.905-9.86a.565.565 0 0 0 .007-.574",
    fill: "#28282B"
  }))
}, {
  title: "CSS",
  tag: "css",
  index: 2,
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 15 15",
    style: {
      width: "17px",
      height: "17px",
      marginInlineEnd: "5px"
    }
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "#0EBEFF",
    width: "15",
    height: "15",
    rx: "4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8 8.366l1.845 1.065a.507.507 0 0 0 .686-.181.507.507 0 0 0-.186-.685L8.5 7.5l1.845-1.065a.507.507 0 0 0 .186-.685.507.507 0 0 0-.686-.181L8 6.634v-2.13A.507.507 0 0 0 7.5 4c-.268 0-.5.225-.5.503v2.131L5.155 5.569a.507.507 0 0 0-.686.181.507.507 0 0 0 .186.685L6.5 7.5 4.655 8.565a.507.507 0 0 0-.186.685c.134.232.445.32.686.181L7 8.366v2.13c0 .271.224.504.5.504.268 0 .5-.225.5-.503V8.366z",
    fill: "#282828"
  }))
}, {
  title: "JavaScript",
  tag: "javascript",
  index: 3,
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 15 15",
    style: {
      width: "17px",
      height: "17px",
      marginInlineEnd: "5px"
    }
  }, /*#__PURE__*/react.createElement("rect", {
    fill: "#FCD000",
    width: "15",
    height: "15",
    rx: "4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M6.554 3.705c0 .267-.19.496-.452.543-1.2.217-2.12 1.61-2.12 3.275 0 1.665.92 3.057 2.12 3.274a.554.554 0 0 1-.205 1.087c-1.733-.322-3.022-2.175-3.022-4.361 0-2.187 1.289-4.04 3.022-4.362a.554.554 0 0 1 .657.544zm1.892 0c0-.347.316-.607.657-.544 1.733.322 3.022 2.175 3.022 4.362 0 2.186-1.289 4.04-3.022 4.361a.554.554 0 0 1-.205-1.087c1.2-.217 2.12-1.61 2.12-3.274 0-1.665-.92-3.058-2.12-3.275a.551.551 0 0 1-.452-.543z",
    fill: "#282828"
  }))
}];
/* harmony default export */ var edit_title = ((/* unused pure expression or super */ null && (EditorTitleObjects)));
;// CONCATENATED MODULE: ./src/assets/images/vue.png
var vue_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA+VBMVEUAAABBuINBuINBuINBuYNBuINJuYhBt4NDuINBuINAuYNBuoUxUGFBvoM0Sl5BuINBuYNBuINAuINBuYNBuYRBuINDuIJAuIJCuoVAvYU0S15BuYRAuIJBuYI8uHxAuIM0Sl5BuYJAuIM0TV8zTVxGuYtAs4I0Sl40Sl9BuIRBuYNBt4M0TV42TWAyT2BAt4JCt4MyUWMzTWExTmI0S140TF80Sl9At4RCt4Q1UWBBuIM0SV40S19AsoE1S182YmY/p348inRAr4A8kXY2WGM8hXI+oHs9mHg5dW05cGs4aWk1VGI1UWFAqn8+nHo6fW86eG44bWo2XGRtwM6oAAAAOnRSTlMA+/np3akNiCVIwS8TD+7n07y0dm1iVzYeFLiXkmgR6+flyoY6C/vdysaedW9tRkA9KScapqGUeFlSDOFE0AAAAp1JREFUeNrs1l0vA0EUgOHTFkVXq6TxmSAE8Rmf4YyitEVbLf7/j+FCyrsxW93O3M1zO5tMMjlv9kgQBEEQBEEQBEEQBDZrGdhu3/y2fiYxUREftLczkJVhrSo9GtiUmE0DNaW8DK2kdIcLiicCW0Uc3ymNTcjQKkpPN7hiWWAZh7ddpYqkMKv0bOAID2DgTWlW0ihkFR74BLuR9EW7OOq8KmQXJJVxpZ6BQ+k7MNBTGpd0JnMKVc7hT4oRJ/CjqpBblJTm/5nipYFHpXmB0VKE7xS3bh0mSJWMwn0sxT8TvB8tQSonp3gtX46SEywLuE1xJxKJdpITLAiMmmIjnmI8wYbSnoxmZkCKp6exBJVymEAPKZ5fcAKdJEgbSu8GmOCLkwRpKjnF5ASnBDyk6DFBe4p1Y1GPJZgriBN5pZqhwXuY1xTtCZYmxJF9pa4B7GFI0Jlpe4r2BKfxAN5StCd4LA6Vbb8E+x42Jy4tDUyxbt3DPKXoP0GaKSlUWwZaHhKkK6UmJ7Bp28P8pmhPUMBPim3T14klmD0WD1bsKdaUVgU8pVit+0+Q8rbt7LP9OkZBGAiiMPyURJNCCBISLRJRsNAqnbBNwCai97+P6SSPxGaY2Wa+C2yzP7wZlBJkm0uYes8nWGygpOIU5xOsQPRSfAkTlK+zz5jgkxLMQFRTFCYoT7HvlRNkZZgaOMEHdF0pRVZAF6fI1hXUpeGPFPoy+oeiBOUpcoIWjklYkBxgogkLGkjIUyxgpQtzVh3MpPYJcooREuSDnW1hqU0CSXYw1VgnyK57Psat1dMEa5hLKUFz2fn3/imDLV5nJQxxivIE5essRyR7StBcHSdBXmd3xHM8jwm2iKikBM21t9sOUeU5nHPOOeecc845mS86+VVAN3822AAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/assets/images/react.png
var images_react_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/assets/images/node.png
var node_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/assets/images/go.png
var go_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/assets/images/add.svg
var add_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIuNTc0NCAxNkMzMi45MzExIDE2IDMzLjA2MDQgMTYuMDM3MSAzMy4xOTA3IDE2LjEwNjlDMzMuMzIxMSAxNi4xNzY2IDMzLjQyMzQgMTYuMjc4OSAzMy40OTMxIDE2LjQwOTNDMzMuNTYyOSAxNi41Mzk2IDMzLjYgMTYuNjY4OSAzMy42IDE3LjAyNTZWMzAuNEg0Ni45NzQ0QzQ3LjMzMTEgMzAuNCA0Ny40NjA0IDMwLjQzNzEgNDcuNTkwNyAzMC41MDY5QzQ3LjcyMTEgMzAuNTc2NiA0Ny44MjM0IDMwLjY3ODkgNDcuODkzMSAzMC44MDkzQzQ3Ljk2MjkgMzAuOTM5NiA0OCAzMS4wNjg5IDQ4IDMxLjQyNTZWMzIuNTc0NEM0OCAzMi45MzExIDQ3Ljk2MjkgMzMuMDYwNCA0Ny44OTMxIDMzLjE5MDdDNDcuODIzNCAzMy4zMjExIDQ3LjcyMTEgMzMuNDIzNCA0Ny41OTA3IDMzLjQ5MzFDNDcuNDYwNCAzMy41NjI5IDQ3LjMzMTEgMzMuNiA0Ni45NzQ0IDMzLjZIMzMuNTk5MkwzMy42IDQ2Ljk3NDRDMzMuNiA0Ny4zMzExIDMzLjU2MjkgNDcuNDYwNCAzMy40OTMxIDQ3LjU5MDdDMzMuNDIzNCA0Ny43MjExIDMzLjMyMTEgNDcuODIzNCAzMy4xOTA3IDQ3Ljg5MzFDMzMuMDYwNCA0Ny45NjI5IDMyLjkzMTEgNDggMzIuNTc0NCA0OEgzMS40MjU2QzMxLjA2ODkgNDggMzAuOTM5NiA0Ny45NjI5IDMwLjgwOTMgNDcuODkzMUMzMC42Nzg5IDQ3LjgyMzQgMzAuNTc2NiA0Ny43MjExIDMwLjUwNjkgNDcuNTkwN0MzMC40MzcxIDQ3LjQ2MDQgMzAuNCA0Ny4zMzExIDMwLjQgNDYuOTc0NEwzMC4zOTkyIDMzLjU5OTJMMTcuMDI1NiAzMy42QzE2LjY2ODkgMzMuNiAxNi41Mzk2IDMzLjU2MjkgMTYuNDA5MyAzMy40OTMxQzE2LjI3ODkgMzMuNDIzNCAxNi4xNzY2IDMzLjMyMTEgMTYuMTA2OSAzMy4xOTA3QzE2LjAzNzEgMzMuMDYwNCAxNiAzMi45MzExIDE2IDMyLjU3NDRWMzEuNDI1NkMxNiAzMS4wNjg5IDE2LjAzNzEgMzAuOTM5NiAxNi4xMDY5IDMwLjgwOTNDMTYuMTc2NiAzMC42Nzg5IDE2LjI3ODkgMzAuNTc2NiAxNi40MDkzIDMwLjUwNjlDMTYuNTM5NiAzMC40MzcxIDE2LjY2ODkgMzAuNCAxNy4wMjU2IDMwLjRMMzAuNCAzMC4zOTkyVjE3LjAyNTZDMzAuNCAxNi42Njg5IDMwLjQzNzEgMTYuNTM5NiAzMC41MDY5IDE2LjQwOTNDMzAuNTc2NiAxNi4yNzg5IDMwLjY3ODkgMTYuMTc2NiAzMC44MDkzIDE2LjEwNjlDMzAuOTM5NiAxNi4wMzcxIDMxLjA2ODkgMTYgMzEuNDI1NiAxNkgzMi41NzQ0WiIgZmlsbD0iIzQ0OTVGRiIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/common/index.ts


// 模板





const Template = [{
  src: add_namespaceObject,
  alt: "新建空白文档",
  index: 1
}, {
  src: vue_namespaceObject,
  alt: "Vue",
  index: 2
}, {
  src: images_react_namespaceObject,
  alt: "React",
  index: 3
}, {
  src: node_namespaceObject,
  alt: "node",
  index: 4
}, {
  src: go_namespaceObject,
  alt: "go",
  index: 5
}];

const data = [{
  isFolder: true,
  name: "public",
  children: [{
    isFolder: false,
    name: "index.html"
  }]
}, {
  isFolder: true,
  name: "src",
  children: [{
    isFolder: true,
    name: "components",
    children: [{
      isFolder: true,
      name: "home",
      children: [{
        isFolder: false,
        name: "Home.js"
      }]
    }]
  }, {
    isFolder: false,
    name: "App.js"
  }]
}];
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
  }, Template && Template.map(value => /*#__PURE__*/react.createElement(template_card, {
    src: value.src,
    alt: value.alt,
    key: value.index
  }))))))));
};
/* harmony default export */ var home = (Home);

/***/ })

}]);