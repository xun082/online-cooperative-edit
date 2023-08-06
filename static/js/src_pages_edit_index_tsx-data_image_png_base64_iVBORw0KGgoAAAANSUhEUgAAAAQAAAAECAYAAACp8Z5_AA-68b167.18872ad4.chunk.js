"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["src_pages_edit_index_tsx-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AA-68b167"],{

/***/ 61365:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ edit; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-resizable-panels@0.0.54_react-dom@18.2.0_react@18.2.0/node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js
var react_resizable_panels_browser_esm = __webpack_require__(95387);
;// CONCATENATED MODULE: ./src/pages/edit/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--M846c","BottomRow":"BottomRow--JRMaz","bottomRow":"BottomRow--JRMaz"});
;// CONCATENATED MODULE: ./src/components/resize/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var resize_index_module = ({"root":"root--d9duq","ResizeHandleInner":"ResizeHandleInner--RW8VX","resizeHandleInner":"ResizeHandleInner--RW8VX","icon":"icon--pJNPK"});
;// CONCATENATED MODULE: ./src/components/resize/index.tsx



function ResizeHandle(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelResizeHandle */.OT, {
    className: resize_index_module.root
  }, /*#__PURE__*/react.createElement("div", {
    className: resize_index_module.ResizeHandleInner
  }, title ? title : /*#__PURE__*/react.createElement("svg", {
    className: resize_index_module.icon,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "currentColor",
    d: "M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
  }))));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/react-monaco-editor@0.53.0_@types+react@18.0.28_monaco-editor@0.39.0_react@18.2.0/node_modules/react-monaco-editor/lib/index.js + 3 modules
var lib = __webpack_require__(96397);
// EXTERNAL MODULE: ./node_modules/.pnpm/prettier@2.8.5/node_modules/prettier/standalone.js
var standalone = __webpack_require__(74134);
var standalone_default = /*#__PURE__*/__webpack_require__.n(standalone);
// EXTERNAL MODULE: ./node_modules/.pnpm/prettier@2.8.5/node_modules/prettier/parser-babel.js
var parser_babel = __webpack_require__(59686);
var parser_babel_default = /*#__PURE__*/__webpack_require__.n(parser_babel);
// EXTERNAL MODULE: ./node_modules/.pnpm/prettier@2.8.5/node_modules/prettier/parser-postcss.js
var parser_postcss = __webpack_require__(1977);
var parser_postcss_default = /*#__PURE__*/__webpack_require__.n(parser_postcss);
// EXTERNAL MODULE: ./node_modules/.pnpm/prettier@2.8.5/node_modules/prettier/parser-html.js
var parser_html = __webpack_require__(24079);
var parser_html_default = /*#__PURE__*/__webpack_require__.n(parser_html);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(86893);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/dropdown/index.js + 26 modules
var dropdown = __webpack_require__(94904);
;// CONCATENATED MODULE: ./src/components/editor/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var editor_index_module = ({"root":"root--V4YqJ","edit-header":"edit-header--AHlnk","editHeader":"edit-header--AHlnk","language":"language--lCVqj","control":"control--dHIsy","monaco-editor":"monaco-editor--lDwO2","monacoEditor":"monaco-editor--lDwO2"});
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(59194);
// EXTERNAL MODULE: ./src/store/modules/code.ts
var modules_code = __webpack_require__(33986);
;// CONCATENATED MODULE: ./src/utils/index.ts
function getPreviewUrl(props) {
  const {
    css,
    html,
    javascript
  } = props;
  const cssCode = encodeURIComponent(css);
  const htmlCode = encodeURIComponent(html);
  const javascriptCode = encodeURIComponent(javascript);
  const url = `
  data:text/html;charset=UTF-8,
<html>
  <head>
    <style>
      ${cssCode}
    </style>
  </head>
  <body>
    ${htmlCode}
    <script src="./console.js"></script>
    <script>
      ${javascriptCode}
    </script>
  </body>
</html>
`;
  return url;
}
function removeSemicolonAfterClosingTag(str) {
  const regex = /<\/\w+>\s*;/g;
  return str.replace(regex, match => match.replace(";", ""));
}
// EXTERNAL MODULE: ./src/common/constant.ts + 7 modules
var constant = __webpack_require__(82893);
;// CONCATENATED MODULE: ./src/components/editor/index.tsx













const Editor = props => {
  const {
    language,
    items
  } = props;
  const {
    code
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const [editTitle] = (0,react.useState)(() => {
    const res = constant/* EditorTitleObjects */.e8.find(value => value.tag === language);
    return res;
  });
  const dispatch = (0,store/* useAppDispatch */.TL)();

  // 代码实现自动格式化
  (0,react.useEffect)(() => {
    const handleKeyDown = async event => {
      if ((event.ctrlKey || event.metaKey) && event.key === "s") {
        event.preventDefault();
        try {
          const newCode = await standalone_default().format(code[language], {
            parser: language === "css" ? "css" : "babel",
            plugins: language === "css" ? [(parser_postcss_default()), (parser_html_default())] : [(parser_babel_default()), (parser_html_default())],
            printWidth: 80,
            tabWidth: 2
          });
          dispatch((0,modules_code/* changeCode */.h)({
            newCode: language === "html" ? removeSemicolonAfterClosingTag(newCode) : newCode,
            language
          }));
        } catch (error) {
          alert(`代码格式化失败:${error}`);
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [code]);
  const onChange = newCode => {
    dispatch((0,modules_code/* changeCode */.h)({
      newCode,
      language
    }));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: editor_index_module["root"]
  }, /*#__PURE__*/react.createElement("header", {
    className: editor_index_module["edit-header"]
  }, /*#__PURE__*/react.createElement("h2", {
    className: editor_index_module["language"]
  }, editTitle.svg, /*#__PURE__*/react.createElement("span", null, editTitle.title)), /*#__PURE__*/react.createElement("div", {
    className: editor_index_module["control"]
  }, /*#__PURE__*/react.createElement(dropdown/* default */.Z, {
    menu: {
      items
    }
  }, /*#__PURE__*/react.createElement(CaretDownOutlined/* default */.Z, {
    rev: undefined,
    style: {
      fontSize: "20px"
    }
  })))), /*#__PURE__*/react.createElement("div", {
    className: editor_index_module["monaco-editor"]
  }, /*#__PURE__*/react.createElement(lib/* default */.ZP, {
    language: language,
    height: "100vh",
    width: "100vw",
    theme: "vs-dark",
    value: code[language],
    options: {
      selectOnLineNumbers: true,
      folding: true
    },
    onChange: onChange,
    editorDidMount: editor => {
      if (language === "javascript") editor.focus();
    }
  })));
};
/* harmony default export */ var editor = (Editor);
;// CONCATENATED MODULE: ./src/components/resize-edit/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var resize_edit_index_module = ({"Panel":"Panel--i6rmW","panel":"Panel--i6rmW","PanelContent":"PanelContent--Wy0H6","panelContent":"PanelContent--Wy0H6"});
;// CONCATENATED MODULE: ./src/components/resize-edit/edit-menu.tsx

const Html = [{
  label: /*#__PURE__*/react.createElement("span", null, "\u6298\u53E0\u6240\u6709"),
  key: "0"
}, {
  label: /*#__PURE__*/react.createElement("span", null, "\u5C55\u5F00\u6240\u6709"),
  key: "1"
}];
const Css = [{
  label: /*#__PURE__*/react.createElement("span", null, "\u6298\u53E0\u6240\u6709"),
  key: "0"
}, {
  label: /*#__PURE__*/react.createElement("span", null, "\u5C55\u5F00\u6240\u6709"),
  key: "1"
}];
const JavaScript = [{
  label: /*#__PURE__*/react.createElement("span", null, "\u6298\u53E0\u6240\u6709"),
  key: "0"
}, {
  label: /*#__PURE__*/react.createElement("span", null, "\u5C55\u5F00\u6240\u6709"),
  key: "1"
}];
const editorLanguage = [{
  languages: "html",
  menu: Html,
  index: 1
}, {
  languages: "css",
  menu: Css,
  index: 2
}, {
  languages: "javascript",
  menu: JavaScript,
  index: 3
}];
/* harmony default export */ var edit_menu = (editorLanguage);
;// CONCATENATED MODULE: ./src/components/resize-edit/index.tsx






const ResizeEdit = () => {
  return /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, null, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelGroup */.eh, {
    autoSaveId: "example",
    direction: "horizontal"
  }, edit_menu && edit_menu.map(item => {
    return /*#__PURE__*/react.createElement(react.Fragment, {
      key: item.index
    }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
      className: resize_edit_index_module.Panel,
      collapsible: true,
      order: item.index
    }, /*#__PURE__*/react.createElement("div", {
      className: resize_edit_index_module.PanelContent
    }, /*#__PURE__*/react.createElement(editor, {
      language: item.languages,
      items: item.menu
    }))), item.index !== 3 ? /*#__PURE__*/react.createElement(ResizeHandle, null) : null);
  })));
};
/* harmony default export */ var resize_edit = (ResizeEdit);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(51910);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(6791);
;// CONCATENATED MODULE: ./src/components/resize-terminal/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var resize_terminal_index_module = ({"root":"root--t5xOv","Panel":"Panel--nzOfg","panel":"Panel--nzOfg","PanelContent":"PanelContent--wh2z7","panelContent":"PanelContent--wh2z7","console":"console--GnYmX","top":"top--mSgQV","bottom":"bottom--xh586","input":"input--oiYRX","middle":"middle--aHEgs"});
;// CONCATENATED MODULE: ./src/components/resize-terminal/index.tsx







const ResizeTerminal = () => {
  const {
    code
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const iframeRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {}, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ResizeHandle, {
    title: "\u9884\u89C8"
  }), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    collapsible: true,
    className: resize_terminal_index_module["root"]
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelGroup */.eh, {
    autoSaveId: "example",
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    className: resize_terminal_index_module.Panel,
    collapsible: true
  }, /*#__PURE__*/react.createElement("iframe", {
    src: getPreviewUrl(code),
    ref: iframeRef,
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/react.createElement(ResizeHandle, {
    title: "\u63A7\u5236\u53F0"
  }), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    className: resize_terminal_index_module.console,
    collapsible: true,
    defaultSize: 0
  }, /*#__PURE__*/react.createElement("div", {
    className: resize_terminal_index_module["top"]
  }, /*#__PURE__*/react.createElement(DeleteOutlined/* default */.Z, {
    rev: undefined
  })), /*#__PURE__*/react.createElement("div", {
    className: resize_terminal_index_module["middle"]
  }, /*#__PURE__*/react.createElement("iframe", {
    width: "100%",
    height: "100%"
  })), /*#__PURE__*/react.createElement("div", {
    className: resize_terminal_index_module["bottom"]
  }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
    rev: undefined
  }), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: resize_terminal_index_module["input"]
  }))))));
};
/* harmony default export */ var resize_terminal = (ResizeTerminal);
;// CONCATENATED MODULE: ./src/pages/edit/index.tsx





const Edit = () => {
  return /*#__PURE__*/react.createElement("div", {
    className: index_module["root"]
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module.BottomRow
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelGroup */.eh, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(resize_edit, null), /*#__PURE__*/react.createElement(resize_terminal, null))));
};
/* harmony default export */ var edit = (Edit);

/***/ }),

/***/ 94748:
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII=";

/***/ }),

/***/ 6161:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

/***/ }),

/***/ 51096:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";

/***/ })

}]);