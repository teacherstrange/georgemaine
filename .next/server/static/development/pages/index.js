module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.tsx":
/*!*************************************!*\
  !*** ./components/Button/index.tsx ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 500;
  justify-content: center;
  padding: 3px var(--spaceXXS);
  background: transparent;
  transition: opacity 0.15s;
  letter-spacing: -0.022em;
  border: none;
  margin: 0;
  outline: none;
  color: inherit;
  font-weight: 500;
  text-align: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

/***/ }),

/***/ "./components/Navigation/index.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.tsx ***!
  \*****************************************/
/*! exports provided: StickyNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNavigation", function() { return StickyNavigation; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./components/Navigation/style.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/georgemaine/Sites/georgemaine/components/Navigation/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // Declare Props

// Create Function
function StickyNavigation({
  list,
  onClick,
  active
}) {
  const convertedActive = active >= 1 && active <= 4 ? 1 : active === 5 ? 2 : active === 6 ? 3 : active;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_0__["StickyNav"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_0__["StickyNavList"], {
    whileHover: {
      backgroundColor: "#f7f7f7"
    },
    whileTap: {
      backgroundColor: "#e5e5e5"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, list.map((ListItem, index) => {
    return __jsx("li", {
      key: index,
      onClick: () => onClick(index === 2 ? 5 : index === 3 ? 6 : index),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        opacity: index != convertedActive && 0.6
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, ListItem));
  })));
}

/***/ }),

/***/ "./components/Navigation/style.tsx":
/*!*****************************************!*\
  !*** ./components/Navigation/style.tsx ***!
  \*****************************************/
/*! exports provided: StickyNav, StickyNavList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNav", function() { return StickyNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNavList", function() { return StickyNavList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


const StickyNav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav`
  max-width: 290px;
  margin: 60px auto 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;

  @media only screen and (max-width: 599px) {
    position: absolute;

    margin-top: 0;
    left: 0;
    right: 0;
    bottom: 36px;
  }
`;
const StickyNavList = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spaceXXS) var(--spaceXS);
  margin: 0;
  border-radius: var(--spaceL);
  background-color: #f2f2f2;
  transition: background-color 0.15s;
`;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default, useKeyPress, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyPress", function() { return useKeyPress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation/index.tsx");
var _jsxFileName = "/Users/georgemaine/Sites/georgemaine/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Pages = ["About me", "Mollie Mobile", "Mollie Event Video", "Mollie Checkout", "Mollie Apple Pay Video", "Icons", "Get in touch"];
const MenuItems = ["About me", "Work", "Icons", "Get in touch"];
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const pageIndex = wrap(0, Pages.length, page);

  function handleIndexChange(index) {
    setPage(index);
  }

  function paginate(direction) {
    setPage(page + direction);
  }

  const ArrowRightDown = useKeyPress("ArrowRight");
  const ArrowLeftDown = useKeyPress("ArrowLeft");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ArrowRightDown && paginate(1);
    ArrowLeftDown && paginate(-1);
  }, [ArrowRightDown, ArrowLeftDown]);
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["StickyNavigation"], {
    name: "Georgemaine Lourens",
    role: "Product Designer",
    list: MenuItems,
    button: "Get in touch",
    active: pageIndex,
    onClick: handleIndexChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(Slides, {
    active: pageIndex,
    list: Pages,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }));
});

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

function useKeyPress(targetKey, onPressDown = () => {}, onPressUp = () => {}) {
  // State for keeping track of whether key is pressed
  const {
    0: keyPressed,
    1: setKeyPressed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // If pressed key is our target key then set to true
    function downHandler({
      key
    }) {
      if (key === targetKey) {
        setKeyPressed(true);
        onPressDown();
      }
    } // If released key is our target key then set to false


    const upHandler = ({
      key
    }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        onPressUp();
      }
    }; // Add event listeners


    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler); // Remove event listeners on cleanup

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });
  return keyPressed;
}

function Slides({
  list,
  active
}) {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].ul, {
    style: {
      margin: 0,
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, list.map((listItem, index) => {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].li, {
      animate: {
        opacity: index === active ? 1 : 0,
        x: active === index ? `0vw` : index < active ? `-100vw` : index > active ? `calc(${index - active} * 100vw)` : `calc(${index} * 100vw)`,
        scale: index === active ? 1 : 0.8
      },
      key: index,
      transition: {
        type: "spring",
        damping: 74,
        stiffness: 120
      },
      style: {
        cursor: "grab",
        display: "inline-block",
        position: "fixed",
        top: 168,
        right: 0,
        left: 0,
        bottom: 0,
        textAlign: "center",
        background: "var(--red)"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, listItem));
  }));
}

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fafafa;
  color: #111;
`;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/georgemaine/Sites/georgemaine/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uL3N0eWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJTdGlja3lOYXZpZ2F0aW9uIiwibGlzdCIsIm9uQ2xpY2siLCJhY3RpdmUiLCJjb252ZXJ0ZWRBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJMaXN0SXRlbSIsImluZGV4Iiwib3BhY2l0eSIsIlN0aWNreU5hdiIsIm5hdiIsIlN0aWNreU5hdkxpc3QiLCJtb3Rpb24iLCJ1bCIsIlBhZ2VzIiwiTWVudUl0ZW1zIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VTdGF0ZSIsInBhZ2VJbmRleCIsIndyYXAiLCJsZW5ndGgiLCJoYW5kbGVJbmRleENoYW5nZSIsInBhZ2luYXRlIiwiZGlyZWN0aW9uIiwiQXJyb3dSaWdodERvd24iLCJ1c2VLZXlQcmVzcyIsIkFycm93TGVmdERvd24iLCJ1c2VFZmZlY3QiLCJtaW4iLCJtYXgiLCJ2IiwicmFuZ2VTaXplIiwidGFyZ2V0S2V5Iiwib25QcmVzc0Rvd24iLCJvblByZXNzVXAiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsImRvd25IYW5kbGVyIiwia2V5IiwidXBIYW5kbGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTbGlkZXMiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlzdEl0ZW0iLCJ4Iiwic2NhbGUiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsImN1cnNvciIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJXcmFwcGVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxNQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQ0E7Q0FHQTs7QUFVQTtBQUNPLFNBQVNDLGdCQUFULENBQTBCO0FBQUVDLE1BQUY7QUFBUUMsU0FBUjtBQUFp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QUFHLEVBQUVLLEtBYlA7QUFjRSxnQkFBVSxFQUFFO0FBQ1YyQyxZQUFJLEVBQUUsUUFESTtBQUVWQyxlQUFPLEVBQUUsRUFGQztBQUdWQyxpQkFBUyxFQUFFO0FBSEQsT0FkZDtBQW1CRSxXQUFLLEVBQUU7QUFDTEMsY0FBTSxFQUFFLE1BREg7QUFFTEMsZUFBTyxFQUFFLGNBRko7QUFHTEMsZ0JBQVEsRUFBRSxPQUhMO0FBSUxDLFdBQUcsRUFBRSxHQUpBO0FBS0xDLGFBQUssRUFBRSxDQUxGO0FBTUxDLFlBQUksRUFBRSxDQU5EO0FBT0xDLGNBQU0sRUFBRSxDQVBIO0FBUUxDLGlCQUFTLEVBQUUsUUFSTjtBQVNMQyxrQkFBVSxFQUFFO0FBVFAsT0FuQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQStCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtkLFFBQUwsQ0EvQkYsQ0FERjtBQW1DRCxHQXBDQSxDQU5ILENBREY7QUE4Q0Q7O0FBRU0sTUFBTWUsT0FBTyxHQUFHakUsd0RBQU0sQ0FBQ2tFLElBQUs7Ozs7Ozs7O0NBQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lQLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXdlaWdodDogNTAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4IHZhcigtLXNwYWNlWFhTKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMjJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuIiwiaW1wb3J0IHsgU3RpY2t5TmF2TGlzdCwgU3RpY2t5TmF2IH0gZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVjbGFyZSBQcm9wc1xuaW50ZXJmYWNlIFN0aWNreU5hdlByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIGxpc3Q6IHN0cmluZ1tdO1xuICBidXR0b246IHN0cmluZztcbiAgb25DbGljazogRnVuY3Rpb247XG4gIGFjdGl2ZTogbnVtYmVyO1xufVxuXG4vLyBDcmVhdGUgRnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBTdGlja3lOYXZpZ2F0aW9uKHsgbGlzdCwgb25DbGljaywgYWN0aXZlIH06IFN0aWNreU5hdlByb3BzKSB7XG4gIGNvbnN0IGNvbnZlcnRlZEFjdGl2ZSA9XG4gICAgYWN0aXZlID49IDEgJiYgYWN0aXZlIDw9IDRcbiAgICAgID8gMVxuICAgICAgOiBhY3RpdmUgPT09IDVcbiAgICAgID8gMlxuICAgICAgOiBhY3RpdmUgPT09IDZcbiAgICAgID8gM1xuICAgICAgOiBhY3RpdmU7XG5cbiAgcmV0dXJuIChcbiAgICA8U3RpY2t5TmF2PlxuICAgICAgPFN0aWNreU5hdkxpc3RcbiAgICAgICAgd2hpbGVIb3Zlcj17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y3ZjdmN1wiIH19XG4gICAgICAgIHdoaWxlVGFwPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZTVlNWU1XCIgfX1cbiAgICAgID5cbiAgICAgICAge2xpc3QubWFwKChMaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaW5kZXggPT09IDIgPyA1IDogaW5kZXggPT09IDMgPyA2IDogaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IG9wYWNpdHk6IGluZGV4ICE9IGNvbnZlcnRlZEFjdGl2ZSAmJiAwLjYgfX0+XG4gICAgICAgICAgICAgICAge0xpc3RJdGVtfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N0aWNreU5hdkxpc3Q+XG4gICAgPC9TdGlja3lOYXY+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IFN0aWNreU5hdiA9IHN0eWxlZC5uYXZgXG4gIG1heC13aWR0aDogMjkwcHg7XG4gIG1hcmdpbjogNjBweCBhdXRvIDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHotaW5kZXg6IDEwO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAzNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3RpY2t5TmF2TGlzdCA9IHN0eWxlZChtb3Rpb24udWwpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VYWFMpIHZhcigtLXNwYWNlWFMpO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXNwYWNlTCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG5gO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBTdGlja3lOYXZpZ2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuY29uc3QgUGFnZXMgPSBbXG4gIFwiQWJvdXQgbWVcIixcbiAgXCJNb2xsaWUgTW9iaWxlXCIsXG4gIFwiTW9sbGllIEV2ZW50IFZpZGVvXCIsXG4gIFwiTW9sbGllIENoZWNrb3V0XCIsXG4gIFwiTW9sbGllIEFwcGxlIFBheSBWaWRlb1wiLFxuICBcIkljb25zXCIsXG4gIFwiR2V0IGluIHRvdWNoXCIsXG5dO1xuY29uc3QgTWVudUl0ZW1zID0gW1wiQWJvdXQgbWVcIiwgXCJXb3JrXCIsIFwiSWNvbnNcIiwgXCJHZXQgaW4gdG91Y2hcIl07XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBwYWdlSW5kZXggPSB3cmFwKDAsIFBhZ2VzLmxlbmd0aCwgcGFnZSk7XG4gIGZ1bmN0aW9uIGhhbmRsZUluZGV4Q2hhbmdlKGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRQYWdlKGluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhZ2luYXRlKGRpcmVjdGlvbjogbnVtYmVyKSB7XG4gICAgc2V0UGFnZShwYWdlICsgZGlyZWN0aW9uKTtcbiAgfVxuICBjb25zdCBBcnJvd1JpZ2h0RG93biA9IHVzZUtleVByZXNzKFwiQXJyb3dSaWdodFwiKTtcbiAgY29uc3QgQXJyb3dMZWZ0RG93biA9IHVzZUtleVByZXNzKFwiQXJyb3dMZWZ0XCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFycm93UmlnaHREb3duICYmIHBhZ2luYXRlKDEpO1xuICAgIEFycm93TGVmdERvd24gJiYgcGFnaW5hdGUoLTEpO1xuICB9LCBbQXJyb3dSaWdodERvd24sIEFycm93TGVmdERvd25dKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxTdGlja3lOYXZpZ2F0aW9uXG4gICAgICAgIG5hbWU9XCJHZW9yZ2VtYWluZSBMb3VyZW5zXCJcbiAgICAgICAgcm9sZT1cIlByb2R1Y3QgRGVzaWduZXJcIlxuICAgICAgICBsaXN0PXtNZW51SXRlbXN9XG4gICAgICAgIGJ1dHRvbj1cIkdldCBpbiB0b3VjaFwiXG4gICAgICAgIGFjdGl2ZT17cGFnZUluZGV4fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVJbmRleENoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8U2xpZGVzIGFjdGl2ZT17cGFnZUluZGV4fSBsaXN0PXtQYWdlc30gLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgU2xpZGVzUHJvcHMge1xuICBsaXN0OiBzdHJpbmdbXTtcbiAgYWN0aXZlOiBudW1iZXI7XG59XG5cbmNvbnN0IHdyYXAgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCB2OiBudW1iZXIpID0+IHtcbiAgY29uc3QgcmFuZ2VTaXplID0gbWF4IC0gbWluO1xuICByZXR1cm4gKCgoKHYgLSBtaW4pICUgcmFuZ2VTaXplKSArIHJhbmdlU2l6ZSkgJSByYW5nZVNpemUpICsgbWluO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleVByZXNzKFxuICB0YXJnZXRLZXksXG4gIG9uUHJlc3NEb3duID0gKCkgPT4ge30sXG4gIG9uUHJlc3NVcCA9ICgpID0+IHt9XG4pIHtcbiAgLy8gU3RhdGUgZm9yIGtlZXBpbmcgdHJhY2sgb2Ygd2hldGhlciBrZXkgaXMgcHJlc3NlZFxuICBjb25zdCBba2V5UHJlc3NlZCwgc2V0S2V5UHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBJZiBwcmVzc2VkIGtleSBpcyBvdXIgdGFyZ2V0IGtleSB0aGVuIHNldCB0byB0cnVlXG4gICAgZnVuY3Rpb24gZG93bkhhbmRsZXIoeyBrZXkgfSkge1xuICAgICAgaWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG4gICAgICAgIHNldEtleVByZXNzZWQodHJ1ZSk7XG4gICAgICAgIG9uUHJlc3NEb3duKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgcmVsZWFzZWQga2V5IGlzIG91ciB0YXJnZXQga2V5IHRoZW4gc2V0IHRvIGZhbHNlXG4gICAgY29uc3QgdXBIYW5kbGVyID0gKHsga2V5IH0pID0+IHtcbiAgICAgIGlmIChrZXkgPT09IHRhcmdldEtleSkge1xuICAgICAgICBzZXRLZXlQcmVzc2VkKGZhbHNlKTtcbiAgICAgICAgb25QcmVzc1VwKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdXBIYW5kbGVyKTtcblxuICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZG93bkhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBrZXlQcmVzc2VkO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMoeyBsaXN0LCBhY3RpdmUgfTogU2xpZGVzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLnVsXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICBvcGFjaXR5OiBpbmRleCA9PT0gYWN0aXZlID8gMSA6IDAsXG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgYWN0aXZlID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgPyBgMHZ3YFxuICAgICAgICAgICAgICAgICAgOiBpbmRleCA8IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBgLTEwMHZ3YFxuICAgICAgICAgICAgICAgICAgOiBpbmRleCA+IGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgPyBgY2FsYygke2luZGV4IC0gYWN0aXZlfSAqIDEwMHZ3KWBcbiAgICAgICAgICAgICAgICAgIDogYGNhbGMoJHtpbmRleH0gKiAxMDB2dylgLFxuICAgICAgICAgICAgICBzY2FsZTogaW5kZXggPT09IGFjdGl2ZSA/IDEgOiAwLjgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgICAgZGFtcGluZzogNzQsXG4gICAgICAgICAgICAgIHN0aWZmbmVzczogMTIwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGN1cnNvcjogXCJncmFiXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgIHRvcDogMTY4LFxuICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwidmFyKC0tcmVkKVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aDE+e2xpc3RJdGVtfTwvaDE+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L21vdGlvbi51bD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubWFpbmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiAjMTExO1xuYDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==