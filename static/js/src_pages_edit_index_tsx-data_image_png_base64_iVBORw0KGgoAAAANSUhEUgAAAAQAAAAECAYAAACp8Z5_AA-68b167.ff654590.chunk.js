"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["src_pages_edit_index_tsx-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AA-68b167"],{

/***/ 88740:
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
/* harmony default export */ var index_module = ({"root":"root--M846c","edit-nav":"edit-nav--VJxqT","editNav":"edit-nav--VJxqT","aside-button":"aside-button--Ebt8j","asideButton":"aside-button--Ebt8j","img":"img--OFPSU","edit-content":"edit-content--BP8oC","editContent":"edit-content--BP8oC","edit-header":"edit-header--b1uKG","editHeader":"edit-header--b1uKG"});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CloudDownloadOutlined.js + 1 modules
var CloudDownloadOutlined = __webpack_require__(88333);
;// CONCATENATED MODULE: ./src/pages/edit/component/file/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var file_index_module = ({"root":"root--jbOte","project-download":"project-download--grCOe","projectDownload":"project-download--grCOe","title":"title--fWnit","collapse":"collapse--I9xI6"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react-spring@9.7.2_@react-three+fiber@8.13.6_konva@9.2.0_react-dom@18.2.0_react-konva@18.2.10_owifqbawfcd4b3ieznrygewtkm/node_modules/react-spring/dist/react-spring.modern.mjs + 4 modules
var react_spring_modern = __webpack_require__(77723);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use-measure@2.1.1_react-dom@18.2.0_react@18.2.0/node_modules/react-use-measure/dist/web.js
var web = __webpack_require__(12322);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/tree/index.js + 10 modules
var tree = __webpack_require__(6290);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(86893);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileOutlined.js + 1 modules
var FileOutlined = __webpack_require__(31194);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FolderOutlined.js + 1 modules
var FolderOutlined = __webpack_require__(34618);
;// CONCATENATED MODULE: ./src/components/collapse/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var collapse_index_module = ({"root":"root--COfLa","heading":"heading--LUwlJ","header-control":"header-control--xl5Ta","headerControl":"header-control--xl5Ta","header-info":"header-info--imnHW","headerInfo":"header-info--imnHW","svg":"svg--dwXQz","content":"content--yank8","antd-tree":"antd-tree--xF1rm","antdTree":"antd-tree--xF1rm","tree-title":"tree-title--aj49B","treeTitle":"tree-title--aj49B","tree-title-edit":"tree-title-edit--_DZ1z","treeTitleEdit":"tree-title-edit--_DZ1z","file-edit-icon":"file-edit-icon--fRa_J","fileEditIcon":"file-edit-icon--fRa_J","ant-tree-title":"ant-tree-title","antTreeTitle":"ant-tree-title","ant-tree-node-content-wrapper":"ant-tree-node-content-wrapper","antTreeNodeContentWrapper":"ant-tree-node-content-wrapper","ant-tree-treenode-selected":"ant-tree-treenode-selected","antTreeTreenodeSelected":"ant-tree-treenode-selected"});
;// CONCATENATED MODULE: ./src/assets/images/addFile.svg
var addFile_namespaceObject = "data:image/svg+xml;base64,ICAgPHN2ZwogICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgIHdpZHRoPSIxZW0iCiAgICAgICAgICAgIGhlaWdodD0iMWVtIgogICAgICAgICAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgICAgICAgICAgIHZpZXdCb3g9IjAgMCAxNiAxNiIKICAgICAgICAgICAgc3R5bGU9ImNvbG9yOnJnYigyNDAsIDI0MCwgMjQwKSIKICAgICAgICAgID4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgICAgICAgICBkPSJtOS41IDEuMSAzLjQgMy41LjEuNHYyaC0xVjZIOFYySDN2MTFoNHYxSDIuNWwtLjUtLjV2LTEybC41LS41aDYuN2wuMy4xek05IDJ2M2gyLjlMOSAyem00IDE0aC0xdi0zSDl2LTFoM1Y5aDF2M2gzdjFoLTN2M3oiCiAgICAgICAgICAgICAgY2xpcFJ1bGU9ImV2ZW5vZGQiCiAgICAgICAgICAgID48L3BhdGg+CiAgICAgICAgICA8L3N2Zz4=";
;// CONCATENATED MODULE: ./src/assets/images/addFolder.svg
var addFolder_namespaceObject = "data:image/svg+xml;base64,ICAgPHN2ZwogICAgICAgICAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgICAgIHdpZHRoPSIxZW0iCiAgICAgICAgICAgIGhlaWdodD0iMWVtIgogICAgICAgICAgICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgICAgICAgICAgIHZpZXdCb3g9IjAgMCAxNiAxNiIKICAgICAgICAgICAgc3R5bGU9ImNvbG9yOnJnYigyNDAsIDI0MCwgMjQwKSIKICAgICAgICAgID4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICBmaWxsUnVsZT0iZXZlbm9kZCIKICAgICAgICAgICAgICBkPSJNMTQuNSAySDcuNzFsLS44NS0uODVMNi41MSAxaC01bC0uNS41djExbC41LjVIN3YtMUgxLjk5VjZoNC40OWwuMzUtLjE1Ljg2LS44NkgxNHYxLjVsLS4wMDEuNTFoMS4wMTFWMi41TDE0LjUgMnptLS41MSAyaC02LjVsLS4zNS4xNS0uODYuODZIMnYtM2g0LjI5bC44NS44NS4zNi4xNUgxNGwtLjAxLjk5ek0xMyAxNmgtMXYtM0g5di0xaDNWOWgxdjNoM3YxaC0zdjN6IgogICAgICAgICAgICAgIGNsaXBSdWxlPSJldmVub2RkIgogICAgICAgICAgICA+PC9wYXRoPgogICAgICAgICAgPC9zdmc+";
;// CONCATENATED MODULE: ./src/assets/images/editFile.svg
var editFile_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImNvbG9yOnJnYigyNDAsIDI0MCwgMjQwKSI+PHBhdGggZD0iTTEzLjIzIDFoLTEuNDZMMy41MiA5LjI1bC0uMTYuMjJMMSAxMy41OSAyLjQxIDE1bDQuMTItMi4zNi4yMi0uMTZMMTUgNC4yM1YyLjc3TDEzLjIzIDF6TTIuNDEgMTMuNTlsMS41MS0zIDEuNDUgMS40NS0yLjk2IDEuNTV6bTMuODMtMi4wNkw0LjQ3IDkuNzZsOC04IDEuNzcgMS43Ny04IDh6Ij48L3BhdGg+PC9zdmc+";
;// CONCATENATED MODULE: ./src/assets/images/deleteFile.svg
var deleteFile_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAxNiAxNiIgIHN0eWxlPSJjb2xvcjpyZ2IoMjQwLCAyNDAsIDI0MCkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDNoM3YxaC0xdjlsLTEgMUg0bC0xLTFWNEgyVjNoM1YyYTEgMSAwIDAgMSAxLTFoM2ExIDEgMCAwIDEgMSAxdjF6TTkgMkg2djFoM1Yyek00IDEzaDdWNEg0djl6bTItOEg1djdoMVY1em0xIDBoMXY3SDdWNXptMiAwaDF2N0g5VjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=";
// EXTERNAL MODULE: ./node_modules/.pnpm/@webcontainer+api@1.1.5/node_modules/@webcontainer/api/dist/index.js + 2 modules
var dist = __webpack_require__(76379);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.6.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/message/index.js + 21 modules
var message = __webpack_require__(33660);
// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(37705);
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
function uint8Array2string(u) {
  const utf8decoder = new TextDecoder();
  return utf8decoder.decode(u);
}
;// CONCATENATED MODULE: ./src/webContainer/index.ts




const WebContainerFileSystemTreeSavePoint = "Web_Container_File_System_Tree_Save_Point";
let webcontainerInstance;
const webcontainerInstancePromise = new Promise(resolve => {
  message/* default */.ZP.open({
    type: "loading",
    content: "Loading..."
  });
  window.addEventListener("load", async () => {
    webcontainerInstance = await dist/* WebContainer */.t.boot();
    await mountFileSystemTree();
    message/* default */.ZP.destroy();
    resolve(webcontainerInstance);
  });
});
function createDir(path) {
  return webcontainerInstance.fs.mkdir(path, {
    recursive: true
  });
}
function writeFile(path, content) {
  return webcontainerInstance.fs.writeFile(path, content);
}
function createFile(path) {
  return writeFile(path, "");
}
function rm(path) {
  return webcontainerInstance.fs.rm(path, {
    force: true,
    recursive: true
  });
}
async function readFile(path) {
  const u8 = await webcontainerInstance.fs.readFile(path);
  return uint8Array2string(u8);
}
async function renameFile(path, name) {
  const content = await readFile(path);
  await rm(path);
  const newPath = [...path.split("/").slice(0, -1), name].join("/");
  await writeFile(newPath, content);
}
async function readFileSystem() {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  const dirs = await webcontainerInstance.fs.readdir(path, {
    withFileTypes: true
  });
  return Promise.all(dirs.map(async item => ({
    key: (0,v4/* default */.Z)(),
    title: item.name,
    isLeaf: item.isFile(),
    children: item.isDirectory() ? await readFileSystem(`${path}/${item.name}`) : undefined
  })));
}
async function readAsFileSystemTree() {
  let path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  const dirs = await webcontainerInstance.fs.readdir(path, {
    withFileTypes: true
  });
  const arrayTree = await Promise.all(dirs.filter(item => !(item.isDirectory() && item.name === "node_modules")).map(async item => ({
    name: item.name,
    contents: item.isFile() ? await readFile(`${path}/${item.name}`) : undefined,
    directory: item.isDirectory() ? await readAsFileSystemTree(`${path}/${item.name}`) : undefined
  })));
  return arrayTree.reduce((tree, _ref) => {
    let {
      name,
      contents,
      directory
    } = _ref;
    return {
      ...tree,
      [name]: directory ? {
        directory
      } : {
        file: {
          contents
        }
      }
    };
  }, {});
}
async function saveFileSystemTree() {
  const tree = await readAsFileSystemTree();
  localStorage.setItem(WebContainerFileSystemTreeSavePoint, JSON.stringify(tree));
}
async function mountFileSystemTree() {
  const treeData = localStorage.getItem(WebContainerFileSystemTreeSavePoint);
  if (!treeData) return;
  const fileSystemTree = JSON.parse(treeData);
  await webcontainerInstance.mount(fileSystemTree);
}
window.addEventListener("beforeunload", async e => {
  e.preventDefault();
  await saveFileSystemTree();
});
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(59194);
// EXTERNAL MODULE: ./src/store/modules/code.ts
var code = __webpack_require__(33986);
;// CONCATENATED MODULE: ./src/components/collapse/index.tsx













const Collapse = () => {
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);
  const [treeData, setTreeData] = (0,react.useState)([]);
  const [selectedKey, setSelectedKey] = (0,react.useState)("");
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const [ref, bounds] = (0,web/* default */.Z)();
  const togglePanel = e => {
    e.preventDefault();
    console.log(e.target);
    setIsCollapsed(prevState => !prevState);
  };
  const panelContentAnimatedStyle = (0,react_spring_modern/* useSpring */.q_)({
    height: isCollapsed ? 0 : bounds.height
  });
  const toggleWrapperAnimatedStyle = (0,react_spring_modern/* useSpring */.q_)({
    transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)"
  });
  const syncFileSystemToUI = async () => {
    const rsp = await readFileSystem();
    setTreeData(rsp);
  };
  (0,react.useEffect)(() => {
    const sync = async () => {
      await webcontainerInstancePromise;
      syncFileSystemToUI();
    };
    sync();
  }, []);

  // 添加文件
  const addFileHandle = e => {
    e.stopPropagation();
    console.log(111);
  };

  // 添加文件夹
  const addFolderHandle = e => {
    e.stopPropagation();
    console.log(222);
  };
  const selectedNode = (0,react.useMemo)(() => findNodeByKey(selectedKey, treeData), [treeData, findNodeByKey, selectedKey]);
  console.log(treeData);
  (0,react.useEffect)(() => {
    if (selectedNode?.isLeaf) {
      const path = getNodePath(selectedNode.key, treeData);
      dispatch((0,code/* changePath */.Y)(path));
    } else {
      dispatch((0,code/* changePath */.Y)(""));
    }
  }, [selectedNode]);
  function findNodeByKey(key, data) {
    for (const node of data) {
      if (node?.key === key) return node;
      const rsp = findNodeByKey(key, node?.children ?? []);
      if (rsp) return rsp;
    }
    return null;
  }
  function getNodePath(key, data) {
    let path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    for (const node of data) {
      if (node?.key === key) return `${path}/${node.title}`;
      const rsp = getNodePath(key, node?.children ?? [], `${path}/${node.title}`);
      if (rsp.length) return rsp;
    }
    return "";
  }
  const generateTreeNodes = data => {
    return data.map(node => {
      const newNode = {
        title: renderTitle(node.title, node.isLeaf),
        key: node.key,
        isLeaf: node.isLeaf
      };
      if (node.children) {
        newNode.children = generateTreeNodes(node.children);
      }
      return newNode;
    });
  };
  const renderTitle = (title, isLeaf) => {
    return /*#__PURE__*/react.createElement("div", {
      className: collapse_index_module["tree-title"]
    }, /*#__PURE__*/react.createElement("span", null, title, " "), /*#__PURE__*/react.createElement("div", {
      className: collapse_index_module["tree-title-edit"]
    }, isLeaf === false && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: addFile_namespaceObject,
      alt: ""
    }), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: addFolder_namespaceObject,
      alt: ""
    })), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: editFile_namespaceObject,
      alt: ""
    }), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: deleteFile_namespaceObject,
      alt: ""
    })));
  };
  return /*#__PURE__*/react.createElement("div", {
    className: collapse_index_module.root,
    onClick: togglePanel
  }, /*#__PURE__*/react.createElement("div", {
    className: collapse_index_module.heading
  }, /*#__PURE__*/react.createElement("div", {
    className: collapse_index_module["header-info"]
  }, /*#__PURE__*/react.createElement(react_spring_modern/* animated */.q.div, {
    style: toggleWrapperAnimatedStyle
  }, /*#__PURE__*/react.createElement(CaretDownOutlined/* default */.Z, {
    rev: undefined
  })), /*#__PURE__*/react.createElement("span", null, "FILES")), /*#__PURE__*/react.createElement("div", {
    className: collapse_index_module["header-control"]
  }, /*#__PURE__*/react.createElement("img", {
    className: collapse_index_module["file-edit-icon"],
    src: addFile_namespaceObject,
    alt: "",
    onClick: addFileHandle
  }), /*#__PURE__*/react.createElement("img", {
    className: collapse_index_module["file-edit-icon"],
    src: addFolder_namespaceObject,
    alt: "",
    onClick: addFolderHandle
  }))), /*#__PURE__*/react.createElement(react_spring_modern/* animated */.q.div, {
    style: panelContentAnimatedStyle,
    className: collapse_index_module.content
  }, /*#__PURE__*/react.createElement("div", {
    onClick: e => e.stopPropagation(),
    ref: ref,
    className: collapse_index_module.contentInner
  }, /*#__PURE__*/react.createElement(tree/* default */.Z.DirectoryTree, {
    showIcon: true,
    icon: _ref => {
      let {
        isLeaf
      } = _ref;
      return isLeaf ? /*#__PURE__*/react.createElement(FileOutlined/* default */.Z, {
        rev: undefined
      }) : /*#__PURE__*/react.createElement(FolderOutlined/* default */.Z, {
        rev: undefined
      });
    },
    treeData: generateTreeNodes(treeData),
    selectedKeys: [selectedKey],
    onSelect: _ref2 => {
      let [key] = _ref2;
      setSelectedKey(key);
    },
    className: collapse_index_module["antd-tree"]
  }))));
};
/* harmony default export */ var collapse = (Collapse);
;// CONCATENATED MODULE: ./src/pages/edit/component/file/index.tsx




const File = () => {
  const [filePath, setFilePath] = (0,react.useState)("");
  console.log("🚀 ~ file: index.tsx:11 ~ File ~ filePath:", filePath);
  return /*#__PURE__*/react.createElement("div", {
    className: file_index_module["root"]
  }, /*#__PURE__*/react.createElement("div", {
    className: file_index_module["project-download"]
  }, /*#__PURE__*/react.createElement("h2", {
    className: file_index_module["title"]
  }, "PROJECT"), /*#__PURE__*/react.createElement(CloudDownloadOutlined/* default */.Z, {
    rev: undefined,
    style: {
      color: "#F0F0F0"
    }
  })), /*#__PURE__*/react.createElement(collapse, null));
};
/* harmony default export */ var file = (File);
;// CONCATENATED MODULE: ./src/pages/edit/component/search/index.tsx

const Search = () => {
  return /*#__PURE__*/react.createElement("div", null, "Search");
};
/* harmony default export */ var search = (Search);
;// CONCATENATED MODULE: ./src/pages/edit/component/setting/index.tsx

const Setting = () => {
  return /*#__PURE__*/react.createElement("div", null, "Search");
};
/* harmony default export */ var setting = (Setting);
;// CONCATENATED MODULE: ./src/pages/edit/component/port/index.tsx

const Port = () => {
  return /*#__PURE__*/react.createElement("div", null, "Search");
};
/* harmony default export */ var port = (Port);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SnippetsOutlined.js + 1 modules
var SnippetsOutlined = __webpack_require__(54146);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(72111);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/ApiOutlined.js + 1 modules
var ApiOutlined = __webpack_require__(63374);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.1.4_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(81979);
;// CONCATENATED MODULE: ./src/pages/edit/component/edit-aside/index.tsx


const editorAside = [{
  icon: /*#__PURE__*/react.createElement(SnippetsOutlined/* default */.Z, {
    rev: undefined
  }),
  label: "file"
}, {
  icon: /*#__PURE__*/react.createElement(SearchOutlined/* default */.Z, {
    rev: undefined
  }),
  label: "search"
}, {
  icon: /*#__PURE__*/react.createElement(ApiOutlined/* default */.Z, {
    rev: undefined
  }),
  label: "port"
}, {
  icon: /*#__PURE__*/react.createElement(SettingOutlined/* default */.Z, {
    rev: undefined
  }),
  label: "setting"
}];
;// CONCATENATED MODULE: ./src/pages/edit/component/resize-handle/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var resize_handle_index_module = ({"root":"root--RU6HY"});
;// CONCATENATED MODULE: ./src/pages/edit/component/resize-handle/index.tsx



const ResizeHandle = props => {
  const {
    direction = "horizontal"
  } = props;
  return /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelResizeHandle */.OT, {
    style: {
      height: direction === "horizontal" ? "100%" : "5px",
      width: direction === "vertical" ? "100%" : "5px"
    },
    className: resize_handle_index_module["root"]
  });
};
/* harmony default export */ var resize_handle = (ResizeHandle);
;// CONCATENATED MODULE: ./src/pages/edit/component/index.tsx







const components = {
  search: search,
  setting: setting,
  port: port,
  file: file
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.5.1_monaco-editor@0.39.0_react-dom@18.2.0_react@18.2.0/node_modules/@monaco-editor/react/dist/index.mjs + 10 modules
var react_dist = __webpack_require__(39277);
// EXTERNAL MODULE: include-loader!./node_modules/.pnpm/monaco-editor@0.39.0/node_modules/monaco-editor/esm/vs/editor/editor.main.js
var editor_main = __webpack_require__(35764);
;// CONCATENATED MODULE: ./src/components/editor/index.tsx




editor_main.languages.typescript.typescriptDefaults.setCompilerOptions({
  jsx: editor_main.languages.typescript.JsxEmit.React
});
react_dist/* loader */._m.config({
  monaco: editor_main
});
react_dist/* loader */._m.init().then( /* ... */);
function CodeEditor(_ref) {
  let {
    filePath
  } = _ref;
  const [content, setContent] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    async function readFile2content() {
      const fileContent = await readFile(filePath);
      setContent(fileContent);
    }
    if (filePath) {
      readFile2content();
    } else {
      setContent("");
    }
  }, [filePath]);
  const language = (0,react.useMemo)(() => {
    const stuff = filePath.split(".").pop() || "default";
    const languageMap = {
      js: "javascript",
      mjs: "javascript",
      css: "css",
      ts: "typescript",
      tsx: "typescript",
      html: "html",
      json: "json",
      default: "javascript"
    };
    return languageMap[stuff];
  }, [filePath]);
  return /*#__PURE__*/react.createElement(react_dist/* default */.ZP, {
    theme: "vs-dark",
    language: language,
    value: content,
    options: {
      minimap: {
        enabled: true
      },
      fontSize: 16,
      readOnly: !filePath
    },
    onChange: value => {
      if (filePath) {
        writeFile(filePath, value || "");
        setContent(value || "");
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm@5.2.1/node_modules/xterm/lib/xterm.js
var xterm = __webpack_require__(25967);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-fit@0.7.0_xterm@5.2.1/node_modules/xterm-addon-fit/lib/xterm-addon-fit.js
var xterm_addon_fit = __webpack_require__(59210);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-web-links@0.8.0_xterm@5.2.1/node_modules/xterm-addon-web-links/lib/xterm-addon-web-links.js
var xterm_addon_web_links = __webpack_require__(13777);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-webgl@0.15.0_xterm@5.2.1/node_modules/xterm-addon-webgl/lib/xterm-addon-webgl.js
var xterm_addon_webgl = __webpack_require__(34747);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm@5.2.1/node_modules/xterm/css/xterm.css
var css_xterm = __webpack_require__(50961);
;// CONCATENATED MODULE: ./src/components/terminal/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var terminal_index_module = ({"root":"root--Gsyf9","terminal":"terminal"});
;// CONCATENATED MODULE: ./src/components/terminal/index.tsx








let terminal;
const fitAddon = new xterm_addon_fit.FitAddon();
const webLinksAddon = new xterm_addon_web_links.WebLinksAddon();
const webglAddon = new xterm_addon_webgl.WebglAddon();
function TerminalPanel() {
  const terminalRef = (0,react.useRef)(null);
  (0,react.useLayoutEffect)(() => {
    async function init() {
      if (terminalRef.current && !terminal) {
        terminal = new xterm.Terminal({
          convertEol: true,
          cursorBlink: true,
          tabStopWidth: 2
        });
        terminal.loadAddon(fitAddon);
        terminal.loadAddon(webLinksAddon);
        terminal.loadAddon(webglAddon);
        terminal.open(terminalRef.current);
        const webcontainerInstance = await webcontainerInstancePromise;
        const shell = await webcontainerInstance.spawn("jsh", {
          terminal: {
            cols: terminal.cols,
            rows: terminal.rows
          }
        });
        const handleResize = () => {
          fitAddon.fit();
          shell.resize({
            cols: terminal.cols,
            rows: terminal.rows
          });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        shell.output.pipeTo(new WritableStream({
          write(data) {
            terminal.write(data);
          }
        }));
        const input = shell.input.getWriter();
        terminal.onData(data => {
          input.write(data);
        });
      }
    }
    init();
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: terminal_index_module["root"],
    ref: terminalRef
  });
}
;// CONCATENATED MODULE: ./src/pages/edit/index.tsx







const Edit = () => {
  const [activeIcon, setActiveIcon] = (0,react.useState)("file");
  const {
    path
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const handleIconClick = label => {
    setActiveIcon(label);
  };
  const Component = components[activeIcon];
  return /*#__PURE__*/react.createElement("main", {
    className: index_module["root"]
  }, /*#__PURE__*/react.createElement("nav", {
    className: index_module["edit-nav"]
  }, editorAside.map(_ref => {
    let {
      icon,
      label
    } = _ref;
    return /*#__PURE__*/react.createElement("div", {
      className: index_module["aside-button"],
      key: label,
      onClick: () => handleIconClick(label)
    }, /*#__PURE__*/react.cloneElement(icon, {
      style: {
        fontSize: "24px",
        color: activeIcon === label ? "#f0f0f0" : "#828388"
      }
    }));
  })), /*#__PURE__*/react.createElement("section", {
    className: index_module["edit-content"]
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelGroup */.eh, {
    direction: "horizontal"
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    style: {
      background: "#202327"
    },
    minSize: 1,
    defaultSize: 15
  }, /*#__PURE__*/react.createElement(Component, null)), /*#__PURE__*/react.createElement(resize_handle, null), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    minSize: 1,
    defaultSize: 50
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* PanelGroup */.eh, {
    direction: "vertical"
  }, /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    collapsible: true
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["edit-header"]
  }, "1"), /*#__PURE__*/react.createElement(CodeEditor, {
    filePath: path
  })), /*#__PURE__*/react.createElement(resize_handle, {
    direction: "vertical"
  }), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    defaultSize: 30,
    minSize: 2,
    style: {
      background: "#15181E"
    }
  }, /*#__PURE__*/react.createElement(TerminalPanel, null)))), /*#__PURE__*/react.createElement(resize_handle, null), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    minSize: 1,
    defaultSize: 35
  }, /*#__PURE__*/react.createElement("iframe", {
    width: "100%",
    height: "100%"
  })))));
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