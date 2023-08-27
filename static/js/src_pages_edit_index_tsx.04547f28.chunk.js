"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["src_pages_edit_index_tsx"],{

/***/ 8151:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ edit; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-resizable-panels@0.0.54_react-dom@18.2.0_react@18.2.0/node_modules/react-resizable-panels/dist/react-resizable-panels.browser.esm.js
var react_resizable_panels_browser_esm = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/.pnpm/@webcontainer+api@1.1.5/node_modules/@webcontainer/api/dist/index.js + 2 modules
var dist = __webpack_require__(6379);
// EXTERNAL MODULE: ./node_modules/.pnpm/uuid@9.0.0/node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(7705);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/spin/index.js + 1 modules
var spin = __webpack_require__(7342);
;// CONCATENATED MODULE: ./src/pages/edit/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--M846c","edit-nav":"edit-nav--VJxqT","editNav":"edit-nav--VJxqT","aside-button":"aside-button--Ebt8j","asideButton":"aside-button--Ebt8j","img":"img--OFPSU","edit-content":"edit-content--BP8oC","editContent":"edit-content--BP8oC","edit-header":"edit-header--b1uKG","editHeader":"edit-header--b1uKG"});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CloudDownloadOutlined.js + 1 modules
var CloudDownloadOutlined = __webpack_require__(5872);
;// CONCATENATED MODULE: ./src/pages/edit/component/file/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var file_index_module = ({"root":"root--jbOte","project-download":"project-download--grCOe","projectDownload":"project-download--grCOe","title":"title--fWnit","collapse":"collapse--I9xI6"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react-spring@9.7.2_@react-three+fiber@8.13.7_konva@9.2.0_react-dom@18.2.0_react-konva@18.2.10_z6dhzuqzkncrabtwroftzbckqq/node_modules/react-spring/dist/react-spring.modern.mjs + 4 modules
var react_spring_modern = __webpack_require__(777);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-use-measure@2.1.1_react-dom@18.2.0_react@18.2.0/node_modules/react-use-measure/dist/web.js
var web = __webpack_require__(2322);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/tree/index.js + 7 modules
var tree = __webpack_require__(527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CaretDownOutlined.js + 1 modules
var CaretDownOutlined = __webpack_require__(9429);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FileOutlined.js + 1 modules
var FileOutlined = __webpack_require__(9124);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/FolderOutlined.js + 1 modules
var FolderOutlined = __webpack_require__(6628);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/modal/index.js + 13 modules
var modal = __webpack_require__(9551);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.8.4_react-dom@18.2.0_react@18.2.0/node_modules/antd/es/input/index.js + 8 modules
var input = __webpack_require__(2198);
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(1656);
// EXTERNAL MODULE: ./src/store/modules/code.ts
var code = __webpack_require__(3776);
;// CONCATENATED MODULE: ./src/types/index.ts
/* eslint-disable no-unused-vars */

// export namespace WebContainerNP {
//   export enum ActionTypeEnum {
//     Create_File = "Create_File",
//     Create_Dir = "Create_Dir",

//     Del = "Del",

//     Rename = "Rename",
//   }

//   export enum TargetTypeEnum {
//     File,

//     Dir,

//     None,
//   }

//   export const menuOptionsMap = {
//     [TargetTypeEnum.File]: [
//       {
//         value: ActionTypeEnum.Del,
//         text: "删除文件",
//       },

//       {
//         value: ActionTypeEnum.Rename,
//         text: "重命名",
//       },
//     ],

//     [TargetTypeEnum.Dir]: [
//       {
//         value: ActionTypeEnum.Del,
//         text: "删除文件夹",
//       },

//       // {
//       //   value: ActionTypeEnum.Rename,
//       //   text: "重命名",
//       // },

//       {
//         value: ActionTypeEnum.Create_File,
//         text: "新建文件",
//       },

//       {
//         value: ActionTypeEnum.Create_Dir,
//         text: "新建文件夹",
//       },
//     ],

//     [TargetTypeEnum.None]: [
//       {
//         value: ActionTypeEnum.Create_File,
//         text: "新建文件",
//       },

//       {
//         value: ActionTypeEnum.Create_Dir,
//         text: "新建文件夹",
//       },
//     ],
//   };
// }
let ActionTypeEnum = /*#__PURE__*/function (ActionTypeEnum) {
  ActionTypeEnum["Create_File"] = "Create_File";
  ActionTypeEnum["Create_Dir"] = "Create_Dir";
  ActionTypeEnum["Create_Root_File"] = "Create_Root_File";
  ActionTypeEnum["Create_Root_Dir"] = "Create_Root_Dir";
  ActionTypeEnum["Del"] = "Del";
  ActionTypeEnum["Rename"] = "Rename";
  return ActionTypeEnum;
}({});
const ActionTypeEnumMap = new Map([[ActionTypeEnum.Rename, "重命名"], [ActionTypeEnum.Del, "删除文件"], [ActionTypeEnum.Create_Dir, "创建文件夹"], [ActionTypeEnum.Create_File, "创建文件"], [ActionTypeEnum.Create_Root_Dir, "创建根文件夹"], [ActionTypeEnum.Create_Root_File, "创建根文件"]]);
// EXTERNAL MODULE: ./src/utils/file.ts
var file = __webpack_require__(1897);
// EXTERNAL MODULE: ./src/utils/getLocalDirectory.ts
var getLocalDirectory = __webpack_require__(4920);
;// CONCATENATED MODULE: ./src/utils/webContainer.ts

const WebContainerFileSystemTreeSavePoint = "Web_Container_File_System_Tree_Save_Point";
function createDir(path, webcontainerInstance) {
  return webcontainerInstance?.fs.mkdir(path, {
    recursive: true
  });
}
function writeFile(path, content, webcontainerInstance) {
  return webcontainerInstance?.fs.writeFile(path, content, {
    encoding: 'utf-8'
  });
}
function createFile(path, webcontainerInstance) {
  return writeFile(path, "", webcontainerInstance);
}
async function writeDirByLocal(dir, webcontainerInstance) {
  if (dir.kind === 'file') {
    await writeFile(dir.path, dir.content ?? "", webcontainerInstance);
    return;
  }
  await createDir(dir.path, webcontainerInstance);
  for (const file of dir.children) {
    await writeDirByLocal(file, webcontainerInstance);
  }
}
function rm(path, webcontainerInstance) {
  return webcontainerInstance?.fs.rm(path, {
    force: true,
    recursive: true
  });
}
async function readFile(path, webcontainerInstance) {
  const u8 = await webcontainerInstance?.fs.readFile(path, 'utf-8');
  return u8;
}
async function renameFile(path, name, webcontainerInstance) {
  const content = await readFile(path, webcontainerInstance);
  await rm(path, webcontainerInstance);
  const newPath = [...path.split("/").slice(0, -1), name].join("/");
  await writeFile(newPath, content, webcontainerInstance);
}
async function readFileSystem(webcontainerInstance) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  const dirs = await webcontainerInstance?.fs.readdir(path, {
    withFileTypes: true
  });
  return Promise.all(dirs.map(async item => ({
    key: (0,v4/* default */.Z)(),
    title: item.name,
    isLeaf: item.isFile(),
    children: item.isDirectory() ? await readFileSystem(webcontainerInstance, `${path}/${item.name}`) : undefined
  })));
}
async function readAsFileSystemTree(webcontainerInstance) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
  const dirs = await webcontainerInstance?.fs.readdir(path, {
    withFileTypes: true
  });
  const arrayTree = await Promise.all(dirs.filter(item => !(item.isDirectory() && item.name === "node_modules")).map(async item => ({
    name: item.name,
    contents: item.isFile() ? await readFile(`${path}/${item.name}`, webcontainerInstance) : undefined,
    directory: item.isDirectory() ? await readAsFileSystemTree(webcontainerInstance, `${path}/${item.name}`) : undefined
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
async function saveFileSystemTree(webcontainerInstance) {
  const tree = webcontainerInstance && (await readAsFileSystemTree(webcontainerInstance));
  localStorage.setItem(WebContainerFileSystemTreeSavePoint, JSON.stringify(tree));
}
;// CONCATENATED MODULE: ./src/utils/index.ts



;// CONCATENATED MODULE: ./src/hooks/useMemoSelectedNode.tsx



function useMemoSelectedNode(treeData) {
  const {
    selectedKey
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const selectedNode = (0,react.useMemo)(() => (0,file/* findNodeByKey */.f1)(selectedKey, treeData), [treeData, file/* findNodeByKey */.f1, selectedKey]);
  return selectedNode;
}
;// CONCATENATED MODULE: ./src/context/tree-data.tsx

const TreeDataContext = /*#__PURE__*/(0,react.createContext)(undefined);
/* harmony default export */ var tree_data = (TreeDataContext);
;// CONCATENATED MODULE: ./src/context/webContainer.tsx

const WebContainerContext = /*#__PURE__*/(0,react.createContext)(null);
/* harmony default export */ var webContainer = (WebContainerContext);
;// CONCATENATED MODULE: ./src/components/file-modal/index.tsx









const FileEditorModal = () => {
  const {
    fileModalIsOpen,
    fileControlType,
    formatPath,
    selectedKey
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const {
    treeData,
    setTreeData
  } = (0,react.useContext)(tree_data);
  const webcontainerInstance = (0,react.useContext)(webContainer);
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const selectedNode = useMemoSelectedNode(treeData);

  // 保存文件
  const syncFileSystemToUI = async () => {
    const result = await readFileSystem(webcontainerInstance);
    setTreeData(result);
    saveFileSystemTree(webcontainerInstance);
  };
  const handleOk = async () => {
    const path = (0,file/* getNodePath */.F6)(selectedKey, treeData);
    if (fileControlType === ActionTypeEnum.Rename) {
      renameFile(path, formatPath, webcontainerInstance);
      selectedNode.title = formatPath;
      setTreeData(pre => [...pre]);
    }
    if (fileControlType === ActionTypeEnum.Del) {
      setTreeData(pre => pre.filter(item => item.key !== selectedKey));
      await rm(path, webcontainerInstance);
      syncFileSystemToUI();
    }
    if (fileControlType === ActionTypeEnum.Create_Root_Dir) {
      createDir(formatPath, webcontainerInstance);
      syncFileSystemToUI();
    }
    if (fileControlType === ActionTypeEnum.Create_Root_File) {
      createFile(formatPath, webcontainerInstance);
      syncFileSystemToUI();
    }
    if (fileControlType === ActionTypeEnum.Create_File) {
      createFile(`${path}/${formatPath}`, webcontainerInstance);
      syncFileSystemToUI();
    }
    if (fileControlType === ActionTypeEnum.Create_Dir) {
      createDir(`${path}/${formatPath}`, webcontainerInstance);
      syncFileSystemToUI();
    }
    dispatch((0,code/* changeFileModalStatus */.zk)({
      open: false
    }));
  };
  const handleCancel = () => {
    dispatch((0,code/* changeFileModalStatus */.zk)({
      open: false
    }));
  };
  const handleInputChange = event => {
    dispatch((0,code/* changeFormatPathValue */.$L)(event.target.value));
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: ActionTypeEnumMap.get(fileControlType),
    open: fileModalIsOpen,
    onOk: handleOk,
    onCancel: handleCancel
  }, fileControlType === ActionTypeEnum.Del ? /*#__PURE__*/react.createElement("div", null, formatPath) : /*#__PURE__*/react.createElement(input/* default */.Z, {
    placeholder: "Basic usage",
    value: formatPath,
    onChange: handleInputChange,
    bordered: false
  })));
};
/* harmony default export */ var file_modal = (FileEditorModal);
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
;// CONCATENATED MODULE: ./src/components/collapse/index.tsx


















const Collapse = () => {
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);
  const [treeData, setTreeData] = (0,react.useState)([]);
  const {
    selectedKey
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const webcontainerInstance = (0,react.useContext)(webContainer);
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const [ref, bounds] = (0,web/* default */.Z)();
  const togglePanel = e => {
    e.preventDefault();
    setIsCollapsed(prevState => !prevState);
  };
  const panelContentAnimatedStyle = (0,react_spring_modern/* useSpring */.q_)({
    height: isCollapsed ? 0 : bounds.height
  });
  const toggleWrapperAnimatedStyle = (0,react_spring_modern/* useSpring */.q_)({
    transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)"
  });
  const syncFileSystemToUI = async () => {
    const result = await readFileSystem(webcontainerInstance);
    setTreeData(result);
  };
  const selectedNode = useMemoSelectedNode(treeData);
  (0,react.useEffect)(() => {
    async function sync() {
      if (webcontainerInstance) syncFileSystemToUI();
    }
    sync();
  }, [webcontainerInstance]);
  (0,react.useEffect)(() => {
    if (selectedNode) {
      const path = (0,file/* getNodePath */.F6)(selectedNode.key, treeData);
      dispatch((0,code/* changePath */.YY)(path));
    } else {
      dispatch((0,code/* changePath */.YY)(""));
    }
  }, [selectedNode]);
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
    }, /*#__PURE__*/react.createElement("div", null, title, " "), /*#__PURE__*/react.createElement("div", {
      className: collapse_index_module["tree-title-edit"]
    }, isLeaf === false && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: addFile_namespaceObject,
      alt: "",
      onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
        open: true,
        type: ActionTypeEnum.Create_File
      }))
    }), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: addFolder_namespaceObject,
      alt: "",
      onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
        open: true,
        type: ActionTypeEnum.Create_Dir
      }))
    })), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: editFile_namespaceObject,
      alt: "",
      onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
        open: true,
        type: ActionTypeEnum.Rename
      }))
    }), /*#__PURE__*/react.createElement("img", {
      className: collapse_index_module["file-edit-icon"],
      src: deleteFile_namespaceObject,
      alt: "",
      onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
        open: true,
        type: ActionTypeEnum.Del
      }))
    })));
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
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
    onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
      open: true,
      type: ActionTypeEnum.Create_Root_File
    }))
  }), /*#__PURE__*/react.createElement("img", {
    className: collapse_index_module["file-edit-icon"],
    src: addFolder_namespaceObject,
    alt: "",
    onClick: () => dispatch((0,code/* changeFileModalStatus */.zk)({
      open: true,
      type: ActionTypeEnum.Create_Root_Dir
    }))
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
      dispatch((0,code/* changeSelectedKey */.mR)(key));
    },
    className: collapse_index_module["antd-tree"]
  })))), /*#__PURE__*/react.createElement(tree_data.Provider, {
    value: {
      treeData: treeData,
      setTreeData: setTreeData
    }
  }, /*#__PURE__*/react.createElement(file_modal, null)));
};
/* harmony default export */ var collapse = (Collapse);
;// CONCATENATED MODULE: ./src/pages/edit/component/file/index.tsx




const File = () => {
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
/* harmony default export */ var component_file = (File);
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SnippetsOutlined.js + 1 modules
var SnippetsOutlined = __webpack_require__(5829);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(1420);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/ApiOutlined.js + 1 modules
var ApiOutlined = __webpack_require__(4713);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(7821);
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
  file: component_file
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.5.2_monaco-editor@0.41.0_react-dom@18.2.0_react@18.2.0/node_modules/@monaco-editor/react/dist/index.mjs + 10 modules
var react_dist = __webpack_require__(9366);
;// CONCATENATED MODULE: ./src/components/editor/index.tsx




function CodeEditor(_ref) {
  let {
    filePath
  } = _ref;
  const [content, setContent] = (0,react.useState)("");
  const webcontainerInstance = (0,react.useContext)(webContainer);
  const monaco = (0,react_dist/* useMonaco */.Ik)();
  (0,react.useEffect)(() => {
    async function readFile2content() {
      const fileContent = await readFile(filePath, webcontainerInstance);
      setContent(fileContent);
    }
    if (filePath) {
      readFile2content();
    } else {
      setContent("");
    }
  }, [filePath]);
  (0,react.useEffect)(() => {
    if (monaco) {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        ...monaco.languages.typescript.typescriptDefaults.getCompilerOptions(),
        module: monaco.languages.typescript.ModuleKind.ESNext,
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        isolatedModules: true,
        allowJs: true,
        strict: true,
        skipLibCheck: true,
        jsx: monaco.languages.typescript.JsxEmit.React
      });
      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSuggestionDiagnostics: true
      });
      react_dist/* loader */._m.config({
        monaco
      });
      react_dist/* loader */._m.init().then( /* ... */);
    }
  }, [monaco]);
  const language = (0,react.useMemo)(() => {
    const stuff = (0,file/* getFileSuffix */.t5)(filePath) || "default";
    const languageMap = {
      js: "javascript",
      mjs: "javascript",
      css: "css",
      ts: "typescript",
      tsx: "typescript",
      html: "html",
      json: "json",
      md: "markdown",
      yaml: "yaml",
      prettierrc: "json",
      default: "json"
    };
    return languageMap[stuff];
  }, [filePath]);
  const handleEditorChange = value => {
    if (filePath) {
      writeFile(filePath, value || "", webcontainerInstance);
      setContent(value || "");
    }
  };
  return /*#__PURE__*/react.createElement(react_dist/* default */.ZP, {
    theme: "vs-dark",
    language: language,
    value: content,
    options: {
      minimap: {
        enabled: true
      },
      fontSize: 16,
      wordWrap: "on" // 是否换行
    },

    onChange: handleEditorChange
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm@5.2.1/node_modules/xterm/lib/xterm.js
var xterm = __webpack_require__(5967);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-fit@0.7.0_xterm@5.2.1/node_modules/xterm-addon-fit/lib/xterm-addon-fit.js
var xterm_addon_fit = __webpack_require__(9210);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-web-links@0.8.0_xterm@5.2.1/node_modules/xterm-addon-web-links/lib/xterm-addon-web-links.js
var xterm_addon_web_links = __webpack_require__(3777);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm-addon-webgl@0.15.0_xterm@5.2.1/node_modules/xterm-addon-webgl/lib/xterm-addon-webgl.js
var xterm_addon_webgl = __webpack_require__(4747);
// EXTERNAL MODULE: ./node_modules/.pnpm/xterm@5.2.1/node_modules/xterm/css/xterm.css
var css_xterm = __webpack_require__(6692);
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
  const webcontainerInstance = (0,react.useContext)(webContainer);
  (0,react.useEffect)(() => {
    async function init() {
      if (webcontainerInstance !== null) {
        if (terminalRef.current && !terminal) {
          terminal = new xterm.Terminal({
            fontFamily: '"Cascadia Code", Menlo, monospace',
            convertEol: true,
            cursorBlink: true,
            tabStopWidth: 2
          });
          terminal.loadAddon(fitAddon);
          terminal.loadAddon(webLinksAddon);
          terminal.loadAddon(webglAddon);
          terminal.open(terminalRef.current);
          const shell = await webcontainerInstance?.spawn("jsh", {
            terminal: {
              cols: terminal.cols,
              rows: terminal.rows
            }
          });
          window.addEventListener("resize", () => {
            fitAddon.fit();
            shell?.resize({
              cols: terminal.cols,
              rows: terminal.rows
            });
          });
          shell?.output.pipeTo(new WritableStream({
            write(data) {
              terminal.write(data);
            }
          }));
          const input = shell?.input.getWriter();
          terminal.onData(data => {
            input?.write(data);
          });
        }
      }
    }
    init();
  }, [webcontainerInstance]);
  return /*#__PURE__*/react.createElement("div", {
    className: terminal_index_module["root"],
    ref: terminalRef
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/UndoOutlined.js + 1 modules
var UndoOutlined = __webpack_require__(4592);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(963);
;// CONCATENATED MODULE: ./src/components/preview/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var preview_index_module = ({"root":"root--_etEZ","iframe-header":"iframe-header--OAift","iframeHeader":"iframe-header--OAift","iframe-refresh":"iframe-refresh--CpVmF","iframeRefresh":"iframe-refresh--CpVmF","iframe-router":"iframe-router--AFlFx","iframeRouter":"iframe-router--AFlFx","iframe-content":"iframe-content--vVwTO","iframeContent":"iframe-content--vVwTO"});
;// CONCATENATED MODULE: ./src/components/preview/index.tsx





// 将数据和其他逻辑拆分

const Preview = /*#__PURE__*/(0,react.memo)(function Preview(_ref) {
  let {
    data
  } = _ref;
  const {
    uuid,
    src
  } = data;
  const [iframeUrl, setIframeUrl] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    setIframeUrl(src);
  }, [src]);
  const handleInputChange = event => {
    setIframeUrl(event.target.value);
  };
  return /*#__PURE__*/react.createElement("main", {
    className: preview_index_module["root"]
  }, /*#__PURE__*/react.createElement("header", {
    className: preview_index_module["iframe-header"]
  }, /*#__PURE__*/react.createElement(UndoOutlined/* default */.Z, {
    rev: undefined,
    className: preview_index_module["iframe-refresh"]
  }), /*#__PURE__*/react.createElement(input/* default */.Z, {
    prefix: /*#__PURE__*/react.createElement(LockOutlined/* default */.Z, {
      className: "site-form-item-icon"
    }),
    type: "type",
    className: preview_index_module["iframe-router"],
    value: iframeUrl,
    onChange: handleInputChange
  })), /*#__PURE__*/react.createElement("iframe", {
    className: preview_index_module["iframe-content"],
    width: "100%",
    height: "100%",
    src: iframeUrl,
    key: uuid
  }), ";");
});
// EXTERNAL MODULE: ./src/store/modules/home.ts
var home = __webpack_require__(7429);
;// CONCATENATED MODULE: ./src/pages/edit/index.tsx














const Edit = () => {
  const [activeIcon, setActiveIcon] = (0,react.useState)("file");
  const [linkData, setLinkData] = (0,react.useState)(() => ({
    src: "",
    uuid: ""
  }));
  const {
    path
  } = (0,store/* useAppSelector */.CG)(state => state.code);
  const {
    previewSwitch
  } = (0,store/* useAppSelector */.CG)(state => state.home);
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const [webContainerInstance, setWebContainerInstance] = (0,react.useState)(null);
  (0,react.useLayoutEffect)(() => {
    const bootWebContainer = async () => {
      const instance = await dist/* WebContainer */.t.boot();
      const treeData = localStorage.getItem(WebContainerFileSystemTreeSavePoint);
      if (treeData) {
        const fileSystemTree = JSON.parse(treeData);
        await instance.mount(fileSystemTree);
      }
      if (getLocalDirectory/* curDirectory */.x2) {
        await writeDirByLocal(getLocalDirectory/* curDirectory */.x2, instance);
      }
      setWebContainerInstance(instance);
    };
    if (webContainerInstance) return;
    bootWebContainer();
  }, []);
  (0,react.useEffect)(() => {
    const handleBeforeUnload = event => {
      event.preventDefault();
      webContainerInstance && saveFileSystemTree(webContainerInstance);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [webContainerInstance]);
  (0,react.useEffect)(() => {
    if (webContainerInstance) {
      webContainerInstance.on("server-ready", (port, host) => {
        setLinkData({
          src: host,
          uuid: (0,v4/* default */.Z)()
        });
        dispatch((0,home/* changePreviewUrl */.HN)(host));
      });
    }
  }, [webContainerInstance]);
  const handleIconClick = label => {
    setActiveIcon(label);
  };
  const Component = components[activeIcon];
  return /*#__PURE__*/react.createElement(spin/* default */.Z, {
    spinning: webContainerInstance ? false : true
  }, /*#__PURE__*/react.createElement(webContainer.Provider, {
    value: webContainerInstance && webContainerInstance
  }, /*#__PURE__*/react.createElement("main", {
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
    defaultSize: previewSwitch === true ? 50 : 85
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
  }, /*#__PURE__*/react.createElement(TerminalPanel, null)))), previewSwitch === true ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(resize_handle, null), /*#__PURE__*/react.createElement(react_resizable_panels_browser_esm/* Panel */.s_, {
    minSize: 1,
    defaultSize: 35
  }, /*#__PURE__*/react.createElement(Preview, {
    data: linkData
  }))) : null)))));
};
/* harmony default export */ var edit = (Edit);

/***/ }),

/***/ 4920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cV: function() { return /* binding */ getDirectory; },
/* harmony export */   x2: function() { return /* binding */ curDirectory; }
/* harmony export */ });
/* unused harmony exports DirectoryKeySet, DirectoryMap, getFileContent, directoryDataFormatter, getDirectoryHandlerDeep */
const DirectoryKeySet = new Set(); // 预留对象，多文件夹加载可用
const DirectoryMap = new Map(); // 预留对象，多文件夹加载可用
let curDirectory = null; // 当前目录

const getDirectory = async id => {
  if (DirectoryKeySet.has(id)) {
    return DirectoryMap.get(id);
  }
  let DirectoryHandler;
  try {
    DirectoryHandler = await window.showDirectoryPicker({
      id,
      mode: "readwrite"
    });
  } catch (error) {
    DirectoryHandler = null;
  }
  if (DirectoryHandler !== null) {
    DirectoryKeySet.add(id);
    const directory = await getDirectoryHandlerDeep(DirectoryHandler);
    DirectoryMap.set(id, directory);
    curDirectory = directory;
    return directory;
  }
  return null;
};
const getFileContent = file => {
  return new Promise(resolve => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.readAsText(file, "utf-8");
  });
};
const directoryDataFormatter = async function (directoryHandler) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const obj = {
    handler: directoryHandler,
    name: directoryHandler.name,
    kind: directoryHandler.kind,
    path
  };
  if (directoryHandler.kind === "directory" && directoryHandler.name !== "node_modules" || directoryHandler.kind === "directory" && directoryHandler.name !== "node_modules") {
    obj.children = children;
  } else if (directoryHandler.kind === "file") {
    obj.content = (await getFileContent(await directoryHandler.getFile())) || "";
  }
  return obj;
};
const getDirectoryHandlerDeep = async function (directoryHandler) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  path = `${path}/${directoryHandler.name}`;
  if (directoryHandler.kind === "file") {
    return await directoryDataFormatter(directoryHandler, path);
  }
  const children = [];
  for await (const handler of directoryHandler.values()) {
    if (handler.kind === "directory" && handler.name === "node_modules" || handler.kind === "directory" && handler.name === ".git") {
      continue;
    }
    children.push(await getDirectoryHandlerDeep(handler, path));
  }
  return await directoryDataFormatter(directoryHandler, path, children);
};

/***/ })

}]);