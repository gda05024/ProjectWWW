webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _templateObject,\n    _this = undefined,\n    _templateObject2,\n    _jsxFileName = \"/Users/yeni/ProjectWWW/prepare/front/components/LoginForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar FormWarpper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\npadding:10px;\\n\"])));\n_c = FormWarpper;\n\nvar LoginForm = function LoginForm(_ref) {\n  _s();\n\n  var setIsLoggedIn = _ref.setIsLoggedIn;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      id = _useState[0],\n      setId = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var onChangeId = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setId(e.target.value);\n  }, []);\n  var onChangePassword = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setPassword(e.target.value);\n  }, []);\n  var onsubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    console.log(id, password);\n    setIsLoggedIn(true);\n  }, [id, password]);\n  var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"margin-top: 10px\"])));\n  return __jsx(FormWarpper, {\n    onFinish: onsubmitForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"user-id\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 6\n    }\n  }, \"\\uC544\\uC774\\uB514\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 6\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    name: \"user-id\",\n    value: id,\n    onChange: onChangeId,\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 6\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"user-password\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }\n  }, \"\\uBE44\\uBC00\\uBC88\\uD638\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    name: \"user-password\",\n    type: password,\n    value: password,\n    onChange: onChangePassword,\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 6\n    }\n  })), __jsx(ButtonWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 6\n    }\n  }, \"\\uB85C\\uADF8\\uC778\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"/signup\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 6\n    }\n  }, __jsx(\"a\", {\n    href: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 27\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 38\n    }\n  }, \"\\uD68C\\uC6D0\\uAC00\\uC785\")))));\n};\n\n_s(LoginForm, \"EliVi2jqTP84h7QHpCw+RgFysPE=\");\n\n_c2 = LoginForm;\nLoginForm.propType = {\n  setIsLoggedIn: prop_types__WEBPACK_IMPORTED_MODULE_5__[\"checkPropTypes\"].func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"FormWarpper\");\n$RefreshReg$(_c2, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanM/MDM0OCJdLCJuYW1lcyI6WyJGb3JtV2FycHBlciIsInN0eWxlZCIsIkZvcm0iLCJMb2dpbkZvcm0iLCJzZXRJc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm9uQ2hhbmdlSWQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJvbnN1Ym1pdEZvcm0iLCJjb25zb2xlIiwibG9nIiwiQnV0dG9uV3JhcHBlciIsImRpdiIsInByb3BUeXBlIiwiY2hlY2tQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHlDQUFELENBQVQsZ0tBQWpCO0tBQU1GLFc7O0FBR04sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBcUI7RUFBQTs7RUFBQSxJQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1COztFQUN0QyxnQkFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUE1QjtFQUFBLElBQU9DLEVBQVA7RUFBQSxJQUFXQyxLQUFYOztFQUNBLGlCQUFnQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQXhDO0VBQUEsSUFBT0csUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFDQSxJQUFNQyxVQUFVLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3JDTCxLQUFLLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQUw7RUFDQSxDQUY2QixFQUU1QixFQUY0QixDQUE5QjtFQUdBLElBQU1DLGdCQUFnQixHQUFHSix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUMzQ0gsV0FBVyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFYO0VBQ0EsQ0FGbUMsRUFFbEMsRUFGa0MsQ0FBcEM7RUFJQSxJQUFNRSxZQUFZLEdBQUdMLHlEQUFXLENBQUMsWUFBSztJQUNyQ00sT0FBTyxDQUFDQyxHQUFSLENBQVlaLEVBQVosRUFBZ0JFLFFBQWhCO0lBQ0FKLGFBQWEsQ0FBQyxJQUFELENBQWI7RUFDQSxDQUgrQixFQUc5QixDQUFDRSxFQUFELEVBQUlFLFFBQUosQ0FIOEIsQ0FBaEM7RUFLQSxJQUFNVyxhQUFhLEdBQUdsQix5REFBTSxDQUFDbUIsR0FBVixpS0FBbkI7RUFDRyxPQUNELE1BQUMsV0FBRDtJQUFhLFFBQVEsRUFBRUosWUFBdkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQztJQUFPLE9BQU8sRUFBQyxTQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBREQsRUFFQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkQsRUFHQyxNQUFDLDBDQUFEO0lBQU8sSUFBSSxFQUFDLFNBQVo7SUFBc0IsS0FBSyxFQUFFVixFQUE3QjtJQUFpQyxRQUFRLEVBQUVJLFVBQTNDO0lBQXVELFFBQVEsTUFBL0Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhELENBREQsRUFNQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0M7SUFBTyxPQUFPLEVBQUMsZUFBZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURELEVBRUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZELEVBR0MsTUFBQywwQ0FBRDtJQUFPLElBQUksRUFBQyxlQUFaO0lBQTRCLElBQUksRUFBRUYsUUFBbEM7SUFBNEMsS0FBSyxFQUFFQSxRQUFuRDtJQUE2RCxRQUFRLEVBQUVPLGdCQUF2RTtJQUF5RixRQUFRLE1BQWpHO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRCxDQU5ELEVBWUMsTUFBQyxhQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDQyxNQUFDLDJDQUFEO0lBQVEsSUFBSSxFQUFDLFNBQWI7SUFBdUIsUUFBUSxFQUFDLFFBQWhDO0lBQXlDLE9BQU8sRUFBRSxLQUFsRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHdCQURELEVBRUMsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxTQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBcUI7SUFBRyxJQUFJLEVBQUMsRUFBUjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVcsTUFBQywyQ0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQUFYLENBQXJCLENBRkQsQ0FaRCxDQURDO0FBb0JILENBcENEOztHQUFNWixTOztNQUFBQSxTO0FBc0NOQSxTQUFTLENBQUNrQixRQUFWLEdBQW9CO0VBQ25CakIsYUFBYSxFQUFFa0IseURBQWMsQ0FBQ0MsSUFBZixDQUFvQkM7QUFEaEIsQ0FBcEI7QUFJZXJCLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY2hlY2tQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRm9ybVdhcnBwZXIgPSBzdHlsZWQoRm9ybSlgXG5wYWRkaW5nOjEwcHg7XG5gO1xuY29uc3QgTG9naW5Gb3JtID0gKHtzZXRJc0xvZ2dlZElufSkgPT4ge1xuXHRjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG5cdFx0c2V0SWQoZS50YXJnZXQudmFsdWUpO1xuXHR9LFtdKTtcblx0Y29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG5cdFx0c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuXHR9LFtdKTtcblxuXHRjb25zdCBvbnN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKT0+IHtcblx0XHRjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xuXHRcdHNldElzTG9nZ2VkSW4odHJ1ZSk7XG5cdH0sW2lkLHBhc3N3b3JkXSlcblxuXHRjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdiBgbWFyZ2luLXRvcDogMTBweGA7XG4gICAgcmV0dXJuIChcblx0XHRcdDxGb3JtV2FycHBlciBvbkZpbmlzaD17b25zdWJtaXRGb3JtfT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxici8+XG5cdFx0XHRcdFx0PElucHV0IG5hbWU9XCJ1c2VyLWlkXCIgdmFsdWU9e2lkfSBvbkNoYW5nZT17b25DaGFuZ2VJZH0gcmVxdWlyZWQgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cblx0XHRcdFx0XHQ8YnIvPlxuXHRcdFx0XHRcdDxJbnB1dCBuYW1lPVwidXNlci1wYXNzd29yZFwiIHR5cGU9e3Bhc3N3b3JkfSB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfSByZXF1aXJlZCAvPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8QnV0dG9uV3JhcHBlciA+XG5cdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17ZmFsc2V9PuuhnOq3uOyduDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGEgaHJlZj1cIlwiPjxCdXR0b24+7ZqM7JuQ6rCA7J6FPC9CdXR0b24+PC9hPjwvTGluaz5cblx0XHRcdFx0PC9CdXR0b25XcmFwcGVyPlxuXHRcdFx0PC9Gb3JtV2FycHBlcj5cbiAgICApXG5cbn07XG5cbkxvZ2luRm9ybS5wcm9wVHlwZT0ge1xuXHRzZXRJc0xvZ2dlZEluOiBjaGVja1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LoginForm.js\n");

/***/ })

})