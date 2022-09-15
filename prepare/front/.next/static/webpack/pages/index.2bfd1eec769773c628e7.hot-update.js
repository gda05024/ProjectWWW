webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yeni/ProjectWWW/prepare/front/components/UserProfile.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar UserProfile = function UserProfile(setIsLoggedIn) {\n  _s();\n\n  var onLogOut = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    setIsLoggedIn(false);\n  }, []);\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    actions: [__jsx(\"div\", {\n      key: \"twit\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 25\n      }\n    }, \"\\uC9F9\\uC9F9 \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 44\n      }\n    }), \" 0\"), __jsx(\"div\", {\n      key: \"following\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }\n    }, \"\\uD314\\uB85C\\uC789 \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 30\n      }\n    }), \" 0\"), __jsx(\"div\", {\n      key: \"following\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }\n    }, \"\\uC9F9\\uC9F9 \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 29\n      }\n    }), \" 0\")],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 25\n      }\n    }, \"ZC\"),\n    title: \"yeni\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 6\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onLogOut,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 6\n    }\n  }, \"\\uB85C\\uADF8\\uC544\\uC6C3\"));\n};\n\n_s(UserProfile, \"soEkKhOFJiBA5pEh4NHl5+aG1VY=\");\n\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dnZWRJbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsYUFBRCxFQUFtQjtFQUFBOztFQUN0QyxJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBSztJQUNqQ0YsYUFBYSxDQUFDLEtBQUQsQ0FBYjtFQUNBLENBRjJCLEVBRTFCLEVBRjBCLENBQTVCO0VBR0csT0FDSSxNQUFDLHlDQUFEO0lBQU0sT0FBTyxFQUFFLENBQUM7TUFBSyxHQUFHLEVBQUMsTUFBVDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLG9CQUFtQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQW5CLE9BQUQsRUFDbkI7TUFBSyxHQUFHLEVBQUMsV0FBVDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLDBCQUF5QjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQXpCLE9BRG1CLEVBRW5CO01BQUssR0FBRyxFQUFDLFdBQVQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxvQkFBd0I7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUF4QixPQUZtQixDQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FHSCxNQUFDLHlDQUFELENBQU0sSUFBTjtJQUFXLE1BQU0sRUFBRSxNQUFDLDJDQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsUUFBbkI7SUFBd0MsS0FBSyxFQUFDLE1BQTlDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFIRyxFQUlILE1BQUMsMkNBQUQ7SUFBUSxPQUFPLEVBQUVDLFFBQWpCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBSkcsQ0FESjtBQVVILENBZEQ7O0dBQU1GLFc7O0tBQUFBLFc7QUFnQlNBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIEF2YXRhcixCdXR0b24gfSBmcm9tICdhbnRkJztcbmNvbnN0IFVzZXJQcm9maWxlID0gKHNldElzTG9nZ2VkSW4pID0+IHtcblx0Y29uc3Qgb25Mb2dPdXQgPSB1c2VDYWxsYmFjaygoKT0+IHtcblx0XHRzZXRJc0xvZ2dlZEluKGZhbHNlKTtcblx0fSxbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgYWN0aW9ucz17WzxkaXYga2V5PVwidHdpdFwiPuynueynuSA8YnIgLz4gMDwvZGl2Pixcblx0XHRcdFx0PGRpdiBrZXk9XCJmb2xsb3dpbmdcIj7tjJTroZzsnokgPGJyIC8+IDA8L2Rpdj4sXG5cdFx0XHRcdDxkaXYga2V5PVwiZm9sbG93aW5nXCI+7Ke57Ke5IDxiciAvPiAwPC9kaXY+XX0+XG5cdFx0XHRcdFx0PENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+WkM8L0F2YXRhcj59IHRpdGxlPVwieWVuaVwiIC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZD5cblxuICAgIClcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})