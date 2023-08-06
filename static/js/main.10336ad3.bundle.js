"use strict";
(self["webpackChunkedit"] = self["webpackChunkedit"] || []).push([["main"],{

/***/ 82893:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e8: function() { return /* reexport */ edit_title; },
  BV: function() { return /* reexport */ layout_switch; },
  YS: function() { return /* binding */ Template; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
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
/* harmony default export */ var edit_title = (EditorTitleObjects);
;// CONCATENATED MODULE: ./src/common/layout-switch.tsx

const LayoutSwitchObjects = [{
  value: "center",
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    className: "center"
  }, /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M24.1348 22.1323C24.1348 22.4195 23.902 22.6523 23.6148 22.6523L4.37477 22.6523C4.08758 22.6523 3.85476 22.4195 3.85476 22.1323L3.85477 10.6632L24.1348 10.6632L24.1348 22.1323Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M18.0427 5.29297L23.6148 5.29297C23.902 5.29297 24.1348 5.52578 24.1348 5.81297L24.1348 9.74831L18.0427 9.74831L18.0427 5.29297Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M10.9504 5.29297L17.0426 5.29297L17.0426 9.74831L10.9504 9.74831L10.9504 5.29297Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M3.8584 9.74792L3.8584 5.81292C3.8584 5.52574 4.09121 5.29292 4.3784 5.29292L9.95052 5.29292L9.95052 9.74792L3.8584 9.74792Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "normal",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.77539 9.66406V6.21094H9.95117V9.66406H4.77539ZM10.9512 9.66406V6.21094H17.043V9.66406H10.9512ZM18.043 9.66406H23.1348V6.21094H18.043V9.66406ZM4.77539 10.6641V21.625H23.1348V10.6641H4.77539ZM3.77539 5.73094C3.77539 5.44375 4.0082 5.21094 4.29539 5.21094H23.6148C23.902 5.21094 24.1348 5.44375 24.1348 5.73094V22.105C24.1348 22.3922 23.902 22.625 23.6148 22.625H4.29539C4.0082 22.625 3.77539 22.3922 3.77539 22.105V5.73094Z"
  }))
}, {
  value: "left",
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 28 29",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    className: "left"
  }, /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M23.5933 5.32031C23.8805 5.32031 24.1133 5.55312 24.1133 5.84031L24.1133 22.1597C24.1133 22.4469 23.8805 22.6797 23.5933 22.6797L10.7072 22.6797L10.7072 5.32031L23.5933 5.32031Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M3.8418 10.5L3.8418 5.83999C3.8418 5.55281 4.07461 5.31999 4.3618 5.31999L9.72656 5.31999L9.72656 10.5L3.8418 10.5Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M9.72656 22.6797L4.36224 22.6797C4.07506 22.6797 3.84224 22.4469 3.84224 22.1597L3.84224 17.5038L9.72656 17.5038L9.72656 22.6797Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M3.8418 16.5234L3.8418 11.4795L9.72656 11.4795L9.72656 16.5234L3.8418 16.5234Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "normal",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M23.1133 6.71094L23.1133 22.125L10.6113 22.125L10.6113 6.71094L23.1133 6.71094ZM9.61133 5.71094L10.6113 5.71094L23.5933 5.71094C23.8805 5.71094 24.1133 5.94375 24.1133 6.23094L24.1133 22.605C24.1133 22.8922 23.8805 23.125 23.5933 23.125L4.27391 23.125C3.98672 23.125 3.75391 22.8922 3.75391 22.605L3.75391 17.9102L3.74654 17.9102L3.74654 16.9102L3.75391 16.9102L3.75391 11.8867L3.74654 11.8867L3.74654 10.8867L3.75391 10.8867L3.75391 6.23094C3.75391 5.94375 3.98672 5.71094 4.27391 5.71094L9.61133 5.71094ZM4.75391 11.8867L4.75391 16.9102L9.61133 16.9102L9.61133 11.8867L4.75391 11.8867ZM9.61133 10.8867L4.75391 10.8867L4.75391 6.71094L9.61133 6.71094L9.61133 10.8867ZM4.75391 22.125L4.75391 17.9102L9.61133 17.9102L9.61133 22.125L4.75391 22.125Z"
  }))
}, {
  value: "right",
  svg: /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 28 29",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    stroke: "currentColor",
    className: "right"
  }, /*#__PURE__*/react.createElement("g", null, /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M4.3618 22.6797C4.07461 22.6797 3.8418 22.4469 3.8418 22.1597L3.8418 5.84031C3.8418 5.55313 4.07461 5.32031 4.3618 5.32031L17.2479 5.32031L17.2479 22.6797L4.3618 22.6797Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M24.1133 17.5L24.1133 22.16C24.1133 22.4472 23.8805 22.68 23.5933 22.68L18.2285 22.68L18.2285 17.5L24.1133 17.5Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M18.2285 5.32031H23.5928C23.88 5.32031 24.1128 5.55312 24.1128 5.84031V10.4962H18.2285V5.32031Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M24.1133 11.4766L24.1133 16.5205L18.2285 16.5205L18.2285 11.4766L24.1133 11.4766Z"
  })), /*#__PURE__*/react.createElement("path", {
    className: "normal",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.74609 22.125V6.71094H17.248L17.248 22.125H4.74609ZM18.248 23.125H17.248H4.26609C3.97891 23.125 3.74609 22.8922 3.74609 22.605V6.23094C3.74609 5.94375 3.97891 5.71094 4.26609 5.71094H23.5855C23.8727 5.71094 24.1055 5.94375 24.1055 6.23094V10.9258H24.1128V11.9258H24.1055V16.9492H24.1128V17.9492H24.1055V22.605C24.1055 22.8922 23.8727 23.125 23.5855 23.125H18.248ZM23.1055 16.9492V11.9258H18.248V16.9492H23.1055ZM18.248 17.9492H23.1055V22.125H18.248V17.9492ZM23.1055 6.71094V10.9258H18.248V6.71094H23.1055Z"
  }))
}];
/* harmony default export */ var layout_switch = (LayoutSwitchObjects);
;// CONCATENATED MODULE: ./src/assets/images/vue.png
var vue_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAA+VBMVEUAAABBuINBuINBuINBuYNBuINJuYhBt4NDuINBuINAuYNBuoUxUGFBvoM0Sl5BuINBuYNBuINAuINBuYNBuYRBuINDuIJAuIJCuoVAvYU0S15BuYRAuIJBuYI8uHxAuIM0Sl5BuYJAuIM0TV8zTVxGuYtAs4I0Sl40Sl9BuIRBuYNBt4M0TV42TWAyT2BAt4JCt4MyUWMzTWExTmI0S140TF80Sl9At4RCt4Q1UWBBuIM0SV40S19AsoE1S182YmY/p348inRAr4A8kXY2WGM8hXI+oHs9mHg5dW05cGs4aWk1VGI1UWFAqn8+nHo6fW86eG44bWo2XGRtwM6oAAAAOnRSTlMA+/np3akNiCVIwS8TD+7n07y0dm1iVzYeFLiXkmgR6+flyoY6C/vdysaedW9tRkA9KScapqGUeFlSDOFE0AAAAp1JREFUeNrs1l0vA0EUgOHTFkVXq6TxmSAE8Rmf4YyitEVbLf7/j+FCyrsxW93O3M1zO5tMMjlv9kgQBEEQBEEQBEEQBDZrGdhu3/y2fiYxUREftLczkJVhrSo9GtiUmE0DNaW8DK2kdIcLiicCW0Uc3ymNTcjQKkpPN7hiWWAZh7ddpYqkMKv0bOAID2DgTWlW0ihkFR74BLuR9EW7OOq8KmQXJJVxpZ6BQ+k7MNBTGpd0JnMKVc7hT4oRJ/CjqpBblJTm/5nipYFHpXmB0VKE7xS3bh0mSJWMwn0sxT8TvB8tQSonp3gtX46SEywLuE1xJxKJdpITLAiMmmIjnmI8wYbSnoxmZkCKp6exBJVymEAPKZ5fcAKdJEgbSu8GmOCLkwRpKjnF5ASnBDyk6DFBe4p1Y1GPJZgriBN5pZqhwXuY1xTtCZYmxJF9pa4B7GFI0Jlpe4r2BKfxAN5StCd4LA6Vbb8E+x42Jy4tDUyxbt3DPKXoP0GaKSlUWwZaHhKkK6UmJ7Bp28P8pmhPUMBPim3T14klmD0WD1bsKdaUVgU8pVit+0+Q8rbt7LP9OkZBGAiiMPyURJNCCBISLRJRsNAqnbBNwCai97+P6SSPxGaY2Wa+C2yzP7wZlBJkm0uYes8nWGygpOIU5xOsQPRSfAkTlK+zz5jgkxLMQFRTFCYoT7HvlRNkZZgaOMEHdF0pRVZAF6fI1hXUpeGPFPoy+oeiBOUpcoIWjklYkBxgogkLGkjIUyxgpQtzVh3MpPYJcooREuSDnW1hqU0CSXYw1VgnyK57Psat1dMEa5hLKUFz2fn3/imDLV5nJQxxivIE5essRyR7StBcHSdBXmd3xHM8jwm2iKikBM21t9sOUeU5nHPOOeecc845mS86+VVAN3822AAAAABJRU5ErkJggg==";
;// CONCATENATED MODULE: ./src/assets/images/react.png
var images_react_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/assets/images/node.png
var node_namespaceObject = "data:image/png;base64,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";
;// CONCATENATED MODULE: ./src/assets/images/go.png
var go_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAClFBMVEUAAABq1uP///8AAAD20qBr1+T+/v76+vpq2ORr1uRo0t5q1uJn0d1mz9v8/Pz19fXx8fFs3Ohr2OVix9LJyclPnqdOTk7u7+/n5+dr1+Xk5ORp1eFjyNRhxNBdu8VRoap9fn41aW9pampQUlIwSUw5OjkFBAT4+Phr2eZp1ODa29tly9fS0dLNzc1fwsxbs727u7tWrbe2traysrL21KGfn59Hj5hFi5OKioo9e4GBgIB7e3s6c3p3d3dwcXJjZGNfX19XV1grU1hATVAnSk1CR0c2RUYjQ0YpPD8lLC3z8/Ps7Ozp6elq2edlzdnU1NRdvchatb9Wr7lTrLZZrLVRpK6mpqagoaFKmKDz0Z/mxpeWlZWQkJCPj4/IroZAfYSDgoM7dnugjW40ZWphaGhZX2A1VFgwU1VISko7SEkvR0lhVUQlJSUbGxsVFRUSEhANDw/39/f19PVq2Obf399ev8nCwsJXsrxUqLKvsLCsra3uzp3rzJ2enZ1JlZ2ZmZlJkpmYmJiTk5ONjo7SuY1Ch42FhYVHfYO4on11dXVqbm86ZWsxYGQ7XmQwXGEzW1+Gdl4tVlp/b1ZTU1Q0UVMqT1NLUVI0T1I9T1FKT1BtYU85TU8xTE5pXU02TE1LTEwnRElVTUMvQUMpQUNBQUE3P0ApODoZMDQ/OTEVIiQKCgr39/jk5OXe3t7Pz8/ExMRbt8NYsLuzs7Onp6f306FNmqDt0J/ixZbfwZPcwJJLi5HMsYhBgYhDeH04cXitmXVEcXWmk3KmkXJycnJxcXJsbWw8Zms6ZWpdZGU2XmI5W19OV1l3a1ZvYlBKVVBZU0tdVUofPT8kPj5PSD0cOT0zMzMYLjAaKys0LiQyLiIoIx0dGhQWda9PAAAAAXRSTlMAQObYZgAABEZJREFUeNrt2PVz02AYwHH6pKkbNbp1LZV1wDYGDMaYAPMNd5krUya4u7u7u7u7u7v9M+RNr9Ck5Q6Ol8Ad7+eX3e3p3fttkjfJ1owgCIIgCIIgCIIgCIIguES/SqkU/SqcAQgJIAH/ToBcbzdNHz5QpecPMAUoRSFWdVRfRUjQKW2buTYzZf7swkXm8OSYPxEgi4lfunZLevqWquQBgdO+yTUFoRpg9Zq0yanCHSDrkDZiWKRWAqDpFdu90iTjfv0JOZOl8J00bsM4vAHq5RXRfiuEditX+69/LvMYcBl3x+AMsNXGAlfs67Dv45bVR4DPWCnDF9B/ezTwjd/jOwZy+75WEGhOKbYA5dbxEGhoKe0d0w/aQxC6jW1wBXTOhyAkmwze8YDFEFRBZ1wB+1tAMJOLvQfAiQ5AaMe2/PPQNkOGJ2Cig12gowW4Ru1pjcaq7TrQLoqgKE9v3jnYjSnAaQQY2khR9dOAy81uhHE7AAopxCPhnqMR/bEE0BkaaHuYYkScAI6uQ9C8Q3do1UCxjMDRbSCOAGXrcAAXxeoOHF3Yq2xIN7CgYUMqFccL6IDlCPRhAqrR93fXv+MFxLNHIAV6RjDzO5KRp3mn4CSWAP1OKaQyC4yUztoLHEkt0dywTwJmNJ/RwN0to2sUeC7CtLEwjFmgqUvmLOBYY0Bj66PjMLae+cDhobxtuA7TLoifBlIzxdjRk/sNc/p4nwRJABbX3tT2EHCN4glQuwG0XTyeAt79qGOCnJ2rtoaiJ7AEuCKr/G7F8t+6Ey7vB0G0Sve9dJhSJRBAl9lOhCugv1sKgRKLlcwVquir0IsS7gV8oPfDznJ8j+PirhBgxgqRqI0p7cCh99nzFAkpWuCIXj8T5xuR7HpiT+CQliyJEhleUV5vbcOzYv0SLElVA/C+E9IJFZHgp1/1VbWIPkD5rKJt5TUOYwsNSLSRcebw4Wrsb8WDdrqiNcCSTnKn2ZlfDaS+aWqOtqMzI2d/TvbSeTFj/sTfBXS78tonix2OivTsUgM6LYNXUN80LlCIkDHNW9PoJ/4AhNYbTg0aZFewbwFRy7Yt/Ex5RXycW5blv+nwBwTsaNmyW7nivNUHvzQ1fqq7kSsWX3pz2SpEgM/gzWIkN+/ihSmdxMjUOpOQAfeLxHxTPSECBmw4Lw6wzSZgwOO5vmXRCWCdrQsTMGDis05o8aKVuw6+XL1wCgoo2igTMIC+ufl22dNdie3zzRZjyYuVV/LKntsFuwgRa7tr5n5SgDj0otrr0JLKBSoB7gMcLR3AmI0elKM+9EG3B4EDTInAKJkDAJIe6FkgdMCEu8BIygfGXwmIWg+M+YXCBfBlHAXQuVIAQPN3AgavadHb5Vx3RqIblo3uwoIHyONrw6eHWFdlZSWzW1DYAIRuo0A/wsJo3kCgAB/ljwb/3z+rSQAJ+OkAgiAIgiAIgiAIgiAIguD4Cs+x1nK/2A/cAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/assets/images/add.svg
var add_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIuNTc0NCAxNkMzMi45MzExIDE2IDMzLjA2MDQgMTYuMDM3MSAzMy4xOTA3IDE2LjEwNjlDMzMuMzIxMSAxNi4xNzY2IDMzLjQyMzQgMTYuMjc4OSAzMy40OTMxIDE2LjQwOTNDMzMuNTYyOSAxNi41Mzk2IDMzLjYgMTYuNjY4OSAzMy42IDE3LjAyNTZWMzAuNEg0Ni45NzQ0QzQ3LjMzMTEgMzAuNCA0Ny40NjA0IDMwLjQzNzEgNDcuNTkwNyAzMC41MDY5QzQ3LjcyMTEgMzAuNTc2NiA0Ny44MjM0IDMwLjY3ODkgNDcuODkzMSAzMC44MDkzQzQ3Ljk2MjkgMzAuOTM5NiA0OCAzMS4wNjg5IDQ4IDMxLjQyNTZWMzIuNTc0NEM0OCAzMi45MzExIDQ3Ljk2MjkgMzMuMDYwNCA0Ny44OTMxIDMzLjE5MDdDNDcuODIzNCAzMy4zMjExIDQ3LjcyMTEgMzMuNDIzNCA0Ny41OTA3IDMzLjQ5MzFDNDcuNDYwNCAzMy41NjI5IDQ3LjMzMTEgMzMuNiA0Ni45NzQ0IDMzLjZIMzMuNTk5MkwzMy42IDQ2Ljk3NDRDMzMuNiA0Ny4zMzExIDMzLjU2MjkgNDcuNDYwNCAzMy40OTMxIDQ3LjU5MDdDMzMuNDIzNCA0Ny43MjExIDMzLjMyMTEgNDcuODIzNCAzMy4xOTA3IDQ3Ljg5MzFDMzMuMDYwNCA0Ny45NjI5IDMyLjkzMTEgNDggMzIuNTc0NCA0OEgzMS40MjU2QzMxLjA2ODkgNDggMzAuOTM5NiA0Ny45NjI5IDMwLjgwOTMgNDcuODkzMUMzMC42Nzg5IDQ3LjgyMzQgMzAuNTc2NiA0Ny43MjExIDMwLjUwNjkgNDcuNTkwN0MzMC40MzcxIDQ3LjQ2MDQgMzAuNCA0Ny4zMzExIDMwLjQgNDYuOTc0NEwzMC4zOTkyIDMzLjU5OTJMMTcuMDI1NiAzMy42QzE2LjY2ODkgMzMuNiAxNi41Mzk2IDMzLjU2MjkgMTYuNDA5MyAzMy40OTMxQzE2LjI3ODkgMzMuNDIzNCAxNi4xNzY2IDMzLjMyMTEgMTYuMTA2OSAzMy4xOTA3QzE2LjAzNzEgMzMuMDYwNCAxNiAzMi45MzExIDE2IDMyLjU3NDRWMzEuNDI1NkMxNiAzMS4wNjg5IDE2LjAzNzEgMzAuOTM5NiAxNi4xMDY5IDMwLjgwOTNDMTYuMTc2NiAzMC42Nzg5IDE2LjI3ODkgMzAuNTc2NiAxNi40MDkzIDMwLjUwNjlDMTYuNTM5NiAzMC40MzcxIDE2LjY2ODkgMzAuNCAxNy4wMjU2IDMwLjRMMzAuNCAzMC4zOTkyVjE3LjAyNTZDMzAuNCAxNi42Njg5IDMwLjQzNzEgMTYuNTM5NiAzMC41MDY5IDE2LjQwOTNDMzAuNTc2NiAxNi4yNzg5IDMwLjY3ODkgMTYuMTc2NiAzMC44MDkzIDE2LjEwNjlDMzAuOTM5NiAxNi4wMzcxIDMxLjA2ODkgMTYgMzEuNDI1NiAxNkgzMi41NzQ0WiIgZmlsbD0iIzQ0OTVGRiIvPgo8L3N2Zz4K";
;// CONCATENATED MODULE: ./src/common/constant.ts







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


/***/ }),

/***/ 44628:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js
var client = __webpack_require__(44478);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router-dom@6.14.1_react-dom@18.2.0_react@18.2.0/node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(10634);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-redux@8.1.1_@types+react-dom@18.0.10_@types+react@18.0.28_react-dom@18.2.0_react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(99388);
;// CONCATENATED MODULE: ./src/components/header/index.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ var index_module = ({"root":"root--tyOZZ","header-left":"header-left--VrKvt","headerLeft":"header-left--VrKvt","header-right":"header-right--is8Ue","headerRight":"header-right--is8Ue","layout-switch":"layout-switch--ZQoy6","layoutSwitch":"layout-switch--ZQoy6","svg":"svg--RMZmp","switch-control":"switch-control--OuzcN","switchControl":"switch-control--OuzcN","operation-control":"operation-control--uhKL4","operationControl":"operation-control--uhKL4"});
// EXTERNAL MODULE: ./src/common/constant.ts + 7 modules
var constant = __webpack_require__(82893);
// EXTERNAL MODULE: ./src/store/index.ts
var store = __webpack_require__(59194);
// EXTERNAL MODULE: ./src/store/modules/edit.ts
var edit = __webpack_require__(78780);
;// CONCATENATED MODULE: ./src/components/header/index.tsx





const Header = () => {
  const {
    layoutMode
  } = (0,store/* useAppSelector */.CG)(state => state.edit);
  const dispatch = (0,store/* useAppDispatch */.TL)();
  const [isShowSwitch, setIsShowSwitch] = (0,react.useState)(false);
  const layoutSwitchRef = (0,react.useRef)(null);
  const switchRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const handleClick = event => {
      if (switchRef.current?.contains(event.target)) return;else if (event.target === layoutSwitchRef.current) setIsShowSwitch(!isShowSwitch);else setIsShowSwitch(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isShowSwitch, layoutMode]);
  const layoutSwitchHandle = event => {
    const target = event.target;
    const className = target.classList.value;
    if (["center", "left", "right"].includes(className) && className !== layoutMode) {
      dispatch((0,edit/* switchLayoutMode */.V)(className));
    }
  };
  return /*#__PURE__*/react.createElement("header", {
    className: index_module.root
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["header-left"]
  }, "Moment"), /*#__PURE__*/react.createElement("div", {
    className: index_module["header-right"]
  }, /*#__PURE__*/react.createElement("div", {
    className: index_module["layout-switch"]
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 28 28",
    xmlns: "http://www.w3.org/2000/svg",
    className: index_module["svg"],
    fill: "none",
    stroke: "currentColor",
    ref: layoutSwitchRef
  }, /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M24.1348 22.1323C24.1348 22.4195 23.902 22.6523 23.6148 22.6523L4.37477 22.6523C4.08758 22.6523 3.85476 22.4195 3.85476 22.1323L3.85477 10.6632L24.1348 10.6632L24.1348 22.1323Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M18.0427 5.29297L23.6148 5.29297C23.902 5.29297 24.1348 5.52578 24.1348 5.81297L24.1348 9.74831L18.0427 9.74831L18.0427 5.29297Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M10.9504 5.29297L17.0426 5.29297L17.0426 9.74831L10.9504 9.74831L10.9504 5.29297Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "active",
    d: "M3.8584 9.74792L3.8584 5.81292C3.8584 5.52574 4.09121 5.29292 4.3784 5.29292L9.95052 5.29292L9.95052 9.74792L3.8584 9.74792Z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "normal",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.77539 9.66406V6.21094H9.95117V9.66406H4.77539ZM10.9512 9.66406V6.21094H17.043V9.66406H10.9512ZM18.043 9.66406H23.1348V6.21094H18.043V9.66406ZM4.77539 10.6641V21.625H23.1348V10.6641H4.77539ZM3.77539 5.73094C3.77539 5.44375 4.0082 5.21094 4.29539 5.21094H23.6148C23.902 5.21094 24.1348 5.44375 24.1348 5.73094V22.105C24.1348 22.3922 23.902 22.625 23.6148 22.625H4.29539C4.0082 22.625 3.77539 22.3922 3.77539 22.105V5.73094Z"
  })), isShowSwitch && /*#__PURE__*/react.createElement("div", {
    className: index_module["switch-control"],
    onClick: layoutSwitchHandle,
    ref: switchRef
  }, constant/* LayoutSwitchObjects */.BV && constant/* LayoutSwitchObjects */.BV.map(item => /*#__PURE__*/react.createElement(react.Fragment, {
    key: item.value
  }, item.svg)))), /*#__PURE__*/react.createElement("div", {
    className: index_module["operation-control"]
  }, "\u8FD0\u884C")));
};
/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.14.1_react@18.2.0/node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(28713);
;// CONCATENATED MODULE: ./src/router/index.tsx


const Home = /*#__PURE__*/(0,react.lazy)(() => __webpack_require__.e(/* import() */ "src_pages_home_index_tsx").then(__webpack_require__.bind(__webpack_require__, 12107)));
const Edit = /*#__PURE__*/(0,react.lazy)(() => Promise.all(/* import() */[__webpack_require__.e("vendors-6ef37c4b"), __webpack_require__.e("vendors-6754b7c1"), __webpack_require__.e("vendors-475d32aa"), __webpack_require__.e("vendors-6f90c29e"), __webpack_require__.e("vendors-fc7032e9"), __webpack_require__.e("vendors-086b29f6"), __webpack_require__.e("vendors-d6fb64da"), __webpack_require__.e("vendors-7f137093"), __webpack_require__.e("vendors-c0a54c56"), __webpack_require__.e("vendors-61418bc3"), __webpack_require__.e("vendors-a95a56ed"), __webpack_require__.e("vendors-d34a955d"), __webpack_require__.e("vendors-3e9e74b3"), __webpack_require__.e("vendors-3514b192"), __webpack_require__.e("vendors-3552b5dd"), __webpack_require__.e("vendors-8244a9f4"), __webpack_require__.e("vendors-5fee333d"), __webpack_require__.e("vendors-746f6d36"), __webpack_require__.e("vendors-02415980"), __webpack_require__.e("vendors-5814efaa"), __webpack_require__.e("vendors-5a79525e"), __webpack_require__.e("vendors-3036554e"), __webpack_require__.e("vendors-b4ef0959"), __webpack_require__.e("vendors-64ffe30e"), __webpack_require__.e("vendors-94c6499c"), __webpack_require__.e("vendors-6180703e"), __webpack_require__.e("vendors-7b1eb68b"), __webpack_require__.e("vendors-ece6210f"), __webpack_require__.e("vendors-22297f50"), __webpack_require__.e("vendors-0fa196e9"), __webpack_require__.e("vendors-1d24e601"), __webpack_require__.e("vendors-75d96dab"), __webpack_require__.e("vendors-de32e213"), __webpack_require__.e("vendors-7055801d"), __webpack_require__.e("vendors-d7cf0390"), __webpack_require__.e("vendors-9b08e26f"), __webpack_require__.e("vendors-5d8271ea"), __webpack_require__.e("vendors-2448660c"), __webpack_require__.e("vendors-48ee76d5"), __webpack_require__.e("vendors-2589f79c"), __webpack_require__.e("vendors-8196c363"), __webpack_require__.e("vendors-792b1082"), __webpack_require__.e("vendors-c1862374"), __webpack_require__.e("vendors-82a34db3"), __webpack_require__.e("vendors-5f7b4bb4"), __webpack_require__.e("vendors-134232b5"), __webpack_require__.e("vendors-8167d328"), __webpack_require__.e("vendors-17bae64e"), __webpack_require__.e("vendors-777f7aad"), __webpack_require__.e("vendors-15d71b68"), __webpack_require__.e("vendors-f471bb22"), __webpack_require__.e("vendors-3c4ed70e"), __webpack_require__.e("vendors-2de40c23"), __webpack_require__.e("vendors-6f87ab14"), __webpack_require__.e("vendors-93e8ad66"), __webpack_require__.e("vendors-8c50340c"), __webpack_require__.e("vendors-7789f186"), __webpack_require__.e("vendors-3eaac041"), __webpack_require__.e("vendors-3de3c236"), __webpack_require__.e("vendors-1a1421c5"), __webpack_require__.e("vendors-14e8cafa"), __webpack_require__.e("vendors-879bbece"), __webpack_require__.e("vendors-fb7002aa"), __webpack_require__.e("vendors-261b263f"), __webpack_require__.e("vendors-04d415ea"), __webpack_require__.e("vendors-9d096c34"), __webpack_require__.e("vendors-1168a4db"), __webpack_require__.e("vendors-b319be2a"), __webpack_require__.e("vendors-8cdd0eee"), __webpack_require__.e("vendors-f4f7d239"), __webpack_require__.e("vendors-0a1c08da"), __webpack_require__.e("vendors-2d6b43a1"), __webpack_require__.e("vendors-7834dda7"), __webpack_require__.e("vendors-a9035caa"), __webpack_require__.e("vendors-3d0dd390"), __webpack_require__.e("vendors-dd308ff9"), __webpack_require__.e("vendors-3a53ca05"), __webpack_require__.e("vendors-192ca9d9"), __webpack_require__.e("vendors-d49ba87b"), __webpack_require__.e("vendors-af305962"), __webpack_require__.e("vendors-5d59686c"), __webpack_require__.e("vendors-1b696f30"), __webpack_require__.e("vendors-50731c06"), __webpack_require__.e("vendors-8dc381f5"), __webpack_require__.e("vendors-232dd12b"), __webpack_require__.e("vendors-5d805775"), __webpack_require__.e("vendors-61f56485"), __webpack_require__.e("vendors-ee91294a"), __webpack_require__.e("vendors-9483fc4c"), __webpack_require__.e("vendors-8e452b37"), __webpack_require__.e("vendors-a60fc1b9"), __webpack_require__.e("vendors-3e7dddf7"), __webpack_require__.e("vendors-b34db5d0"), __webpack_require__.e("vendors-5dd066d2"), __webpack_require__.e("vendors-de26e408"), __webpack_require__.e("vendors-d6489853"), __webpack_require__.e("vendors-d07461da"), __webpack_require__.e("vendors-915e7c66"), __webpack_require__.e("vendors-8162d906"), __webpack_require__.e("vendors-be5e06f6"), __webpack_require__.e("vendors-e09463db"), __webpack_require__.e("vendors-80072107"), __webpack_require__.e("vendors-4c3bcec0"), __webpack_require__.e("vendors-9ebd23ae"), __webpack_require__.e("src_pages_edit_index_tsx-data_image_png_base64_iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5_AA-68b167")]).then(__webpack_require__.bind(__webpack_require__, 61365)));
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
  }, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(dist/* HashRouter */.UT, null, /*#__PURE__*/react.createElement(react.Suspense, {
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25298);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99388);
/* harmony import */ var _modules_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78780);
/* harmony import */ var _modules_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33986);




const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__/* .configureStore */ .xC)({
  reducer: {
    edit: _modules_edit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    code: _modules_code__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
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
/* harmony export */   h: function() { return /* binding */ changeCode; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25298);

const initialState = {
  code: {
    html: "",
    css: "",
    javascript: ""
  }
};
const codeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
  name: "code",
  initialState,
  reducers: {
    changeCode(state, action) {
      const {
        payload
      } = action;
      const {
        newCode,
        language
      } = payload;
      state.code[language] = newCode;
    }
  },
  extraReducers: () => {}
});
const {
  changeCode
} = codeSlice.actions;
/* harmony default export */ __webpack_exports__.Z = (codeSlice.reducer);

/***/ }),

/***/ 78780:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ switchLayoutMode; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25298);

const initialState = {
  layoutMode: "right"
};
const homeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__/* .createSlice */ .oM)({
  name: "edit",
  initialState,
  reducers: {
    switchLayoutMode(state, action) {
      const {
        payload
      } = action;
      state.layoutMode = payload;
    }
  },
  extraReducers: () => {}
});
const {
  switchLayoutMode
} = homeSlice.actions;
/* harmony default export */ __webpack_exports__.Z = (homeSlice.reducer);

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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  padding: 0;\r\n  margin: 0;\r\n  color: #ffffff;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__.Z = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-6ef37c4b","vendors-6754b7c1","vendors-475d32aa","vendors-6f90c29e","vendors-fc7032e9","vendors-086b29f6","vendors-d6fb64da","vendors-7f137093","vendors-c0a54c56","vendors-61418bc3","vendors-a95a56ed","vendors-d34a955d","vendors-3e9e74b3","vendors-3514b192","vendors-3552b5dd","vendors-8244a9f4","vendors-5fee333d","vendors-746f6d36","vendors-02415980","vendors-5814efaa","vendors-5a79525e","vendors-3036554e","vendors-b4ef0959","vendors-64ffe30e","vendors-94c6499c","vendors-6180703e","vendors-7b1eb68b","vendors-ece6210f","vendors-22297f50","vendors-0fa196e9","vendors-1d24e601","vendors-75d96dab","vendors-de32e213","vendors-7055801d","vendors-d7cf0390","vendors-9b08e26f","vendors-5d8271ea","vendors-2448660c","vendors-48ee76d5","vendors-2589f79c","vendors-8196c363","vendors-792b1082","vendors-c1862374","vendors-82a34db3","vendors-5f7b4bb4","vendors-134232b5","vendors-8167d328","vendors-17bae64e","vendors-777f7aad","vendors-15d71b68","vendors-f471bb22","vendors-3c4ed70e","vendors-2de40c23","vendors-6f87ab14","vendors-93e8ad66","vendors-8c50340c","vendors-7789f186","vendors-3eaac041","vendors-3de3c236","vendors-1a1421c5","vendors-14e8cafa","vendors-879bbece","vendors-fb7002aa","vendors-261b263f","vendors-04d415ea","vendors-9d096c34","vendors-1168a4db","vendors-b319be2a","vendors-8cdd0eee","vendors-f4f7d239","vendors-0a1c08da","vendors-2d6b43a1","vendors-7834dda7","vendors-a9035caa","vendors-3d0dd390","vendors-dd308ff9","vendors-3a53ca05","vendors-192ca9d9","vendors-d49ba87b","vendors-af305962","vendors-5d59686c","vendors-1b696f30","vendors-50731c06","vendors-8dc381f5","vendors-232dd12b","vendors-5d805775","vendors-61f56485","vendors-ee91294a","vendors-9483fc4c","vendors-8e452b37","vendors-a60fc1b9","vendors-3e7dddf7","vendors-b34db5d0","vendors-5dd066d2","vendors-de26e408","vendors-d6489853","vendors-d07461da","vendors-915e7c66","vendors-8162d906","vendors-be5e06f6","vendors-e09463db","vendors-80072107","vendors-4c3bcec0","vendors-9ebd23ae"], function() { return __webpack_exec__(44628); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);