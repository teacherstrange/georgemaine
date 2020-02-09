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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/layout.js":
/*!**************************!*\
  !*** ./blocks/layout.js ***!
  \**************************/
/*! exports provided: Wrapper, CopySection, ContactNavigation, ContactList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopySection", function() { return CopySection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactNavigation", function() { return ContactNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactList", function() { return ContactList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  min-height: 100vh;
  padding: 60px 30px;

  @media only screen and (min-width: 414px) {
    padding: 50px;
  }

  @media only screen and (min-width: 600px) {
    padding: 90px 60px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 90px;
  }
`;
const CopySection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
  margin: 60px 0;
  max-width: 450px;

  @media only screen and (min-width: 768px) {
    max-width: 650px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 90px 0;
  }
`;
const ContactNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav`
  margin: 60px 0;

  @media only screen and (min-width: 1024px) {
    margin: 90px 0;
  }
`;
const ContactList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 20px;
  }

  li:last-of-type {
    margin: 0;
  }
`;

/***/ }),

/***/ "./blocks/logo.js":
/*!************************!*\
  !*** ./blocks/logo.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/georgemainelourens/Sites/georgemaine/blocks/logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "68",
  height: "32",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("path", {
  d: "M36 0h16v32H36zM56 20h12v12H56zM16 0c8.501 0 15.453 6.629 15.969 15H19.041a3.201 3.201 0 00-6.241 1 3.2 3.2 0 006.241 1H32v15H21v-.797A15.987 15.987 0 0116 32C7.163 32 0 24.837 0 16S7.163 0 16 0z",
  fill: "rgba(255, 193, 169, 1.00)",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}))));

/***/ }),

/***/ "./blocks/typograhy.js":
/*!*****************************!*\
  !*** ./blocks/typograhy.js ***!
  \*****************************/
/*! exports provided: Headline, Headline2, Caption, Link, DribbbleLink, TwitterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline", function() { return Headline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headline2", function() { return Headline2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caption", function() { return Caption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DribbbleLink", function() { return DribbbleLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterLink", function() { return TwitterLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Headline = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 32px;
  color: inherit;
  letter-spacing: -0.75px;
  line-height: 1.15;
  font-weight: 700;
  margin: 0 0 20px;
`;
const Headline2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: -0.5px;
  color: inherit;

  @media only screen and (min-width: 600px) {
    font-size: 26px;
    line-height: 1.3;
  }
`;
const Caption = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  color: var(--secondaryText);
  font-size: 19px;
  line-height: 1.5;
  margin: 0;

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-size: 19px;
  color: var(--primaryColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    color: var(--primaryColorHover);
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;
const DribbbleLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-size: 19px;
  color: var(--dribbbleColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    color: var(--dribbbleColorHover);
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;
const TwitterLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  font-size: 19px;
  color: var(--twitterColor);
  transition: all 0.15s ease;
  text-decoration: none;

  &:hover {
    color: var(--twitterColorHover);
  }

  @media only screen and (min-width: 600px) {
    font-size: 22px;
    line-height: 1.3;
  }
`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/layout */ "./blocks/layout.js");
/* harmony import */ var _blocks_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/logo */ "./blocks/logo.js");
/* harmony import */ var _blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/typograhy */ "./blocks/typograhy.js");
var _jsxFileName = "/Users/georgemainelourens/Sites/georgemaine/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_blocks_layout__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_blocks_logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx(_blocks_layout__WEBPACK_IMPORTED_MODULE_1__["CopySection"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Headline"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Hello, my name is Georgemaine\xA0Lourens"), __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Caption"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "I\u2019m currently designing financial products at", " ", __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "https://mollie.com",
    target: "blank",
    rel: "noopener norefererrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Mollie"), " ", "in Amsterdam. Previously I was a designer at", " ", __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "https://framer.com",
    target: "blank",
    rel: "noopener norefererrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Framer"), ", where I designed tools and resources for designers. My current areas of interest include well-crafted products, code, plants, and motion design.")), __jsx(_blocks_layout__WEBPACK_IMPORTED_MODULE_1__["ContactNavigation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_blocks_layout__WEBPACK_IMPORTED_MODULE_1__["ContactList"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Headline2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Get in touch")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: "mailto:georgemaine.lourens@gmail.com",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Email")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["DribbbleLink"], {
    href: "https://dribbble.com/georgemaine",
    target: "blank",
    rel: "noopener norefererrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Dribbble")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx(_blocks_typograhy__WEBPACK_IMPORTED_MODULE_3__["TwitterLink"], {
    href: "https://twitter.com/georgemaine",
    target: "blank",
    rel: "noopener norefererrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Twitter")))));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/georgemainelourens/Sites/georgemaine/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map