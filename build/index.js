/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Editor.tsx":
/*!************************!*\
  !*** ./src/Editor.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Editor: () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.ts */ "./src/helpers.ts");
/* harmony import */ var _Sidebar_tsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar.tsx */ "./src/Sidebar.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const Editor = ({
  attributes,
  setAttributes
}) => {
  const [showOutline, setShowOutline] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [show, setShow] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(!attributes.content);
  const blockAutoFocus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(true); // Don't focus on load
  // @ts-ignore no type on this
  const {
    getSelectedBlockClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store), []);
  // We hide stuff when this changes
  const currentBlock = getSelectedBlockClientId();
  const handleShowEditor = () => {
    if (show) return;
    blockAutoFocus.current = false;
    setShow(true);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!attributes.content) {
      setShowOutline(false);
      return;
    }
    blockAutoFocus.current = false;
    setShow(false);
  }, [currentBlock]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // Only show the editor outline if selected and content
    // exists when selected (avoids pop in)
    setShowOutline(!!attributes.content);
  }, [show]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Sidebar_tsx__WEBPACK_IMPORTED_MODULE_6__.Sidebar, {
      attributes: attributes,
      setAttributes: setAttributes
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        ref: node => {
          if (!show || !node || blockAutoFocus.current) return;
          blockAutoFocus.current = true;
          const el = node;
          requestAnimationFrame(() => {
            el.focus();
            (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_5__.placeCursorAtEnd)(el);
          });
        },
        style: {
          display: show ? "block" : "none",
          boxShadow: showOutline ? "0 0 0 5px var(--wp--preset--color--base, #ffffff), 0 0 0px 6px #1E1E1E" : undefined
        },
        value: attributes.content,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enter some text...", "fit-to-width"),
        onChange: content => setAttributes({
          content
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
          style: {
            cursor: show ? "default" : "text",
            "--ftw-margin": attributes.margin,
            "--ftw-line-height": attributes.lineHeight,
            "--ftw-max-font-size": attributes.maxFontSize
          }
        }),
        role: "button",
        tabIndex: 0,
        onClick: handleShowEditor,
        onKeyDown: event => {
          if (event.key !== "Enter") return;
          handleShowEditor();
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
          value: (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_5__.makeFitToWidth)(attributes.content || "")
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./src/Sidebar.tsx":
/*!*************************!*\
  !*** ./src/Sidebar.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Sidebar = ({
  attributes,
  setAttributes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("FTW Settings", "text-domain"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.LineHeightControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Line Height", "text-domain"),
          __next40pxDefaultSize: true,
          __unstableInputWidth: "100%",
          value: attributes.lineHeight,
          onChange: lineHeight => setAttributes({
            lineHeight: String(lineHeight)
          })
        })
      })
    })
  });
};

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"kevinbatdorf/fit-to-width","version":"0.1.0","title":"Fit To Width Text","category":"widgets","icon":"menu","description":"A text block where each line is automatically full width.","example":{},"attributes":{"content":{"type":"string","default":""},"margin":{"type":"string"},"lineHeight":{"type":"string","default":"1.1"},"maxFontSize":{"type":"string"}},"supports":{"html":false},"textdomain":"fit-to-width","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeFitToWidth: () => (/* binding */ makeFitToWidth),
/* harmony export */   placeCursorAtEnd: () => (/* binding */ placeCursorAtEnd)
/* harmony export */ });
const placeCursorAtEnd = el => {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  const sel = window.getSelection();
  if (!sel) return;
  sel.removeAllRanges();
  sel.addRange(range);
  el.scrollTop = el.scrollHeight;
};
const makeFitToWidth = content => content.split("<br>").map(line => `
		  <span class="ftw-fit-to-width">
            <span><span>${line}</span></span>
            <span aria-hidden="true" class="ftw-invisible">${line}</span>
          </span>`).join("");

/***/ }),

/***/ "./src/icon.tsx":
/*!**********************!*\
  !*** ./src/icon.tsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icon: () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  width: 24,
  height: 24,
  viewBox: "0 8.449999809265137 48.650001525878906 47",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
    children: "Fit to Width"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "#1e1e1e",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      transform: "translate(0, 0)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.45 28.90Q11.15 28.25 12.98 27.25Q14.80 26.25 14.90 26.25Q15.20 26.25 15.20 26.75Q15.20 27.25 14.20 28Q12.10 29.55 8.95 30.65Q10.25 35.60 10.25 41.15Q10.25 45.80 9.20 50.05Q8.60 52.45 7.33 53.95Q6.05 55.45 4.20 55.45Q2.60 55.45 2 54.05Q1.25 52.40 1.15 50.90Q1 48.55 1 43.25Q1 37.95 1.80 30.45Q0 29.15 0 27.28Q0 25.40 0.80 24.38Q1.60 23.35 2.80 23.05Q3.50 18.70 4.18 15.55Q4.85 12.40 6.25 10.43Q7.65 8.45 9.05 8.45Q10.65 8.45 10.65 12Q10.65 17.60 6.50 24.60Q7.55 26.10 8.45 28.90M4.95 31.40Q4.50 37.55 4.50 45.53Q4.50 53.50 5.35 53.50Q6.85 53.50 7.85 49.58Q8.85 45.65 8.85 40.78Q8.85 35.90 7.75 31Q6.25 31.40 4.95 31.40M5.70 23.90Q7.15 21.50 8.35 18.23Q9.55 14.95 9.55 12.75Q9.55 10.55 9.10 10.55Q8.30 10.55 7.38 14.20Q6.45 17.85 5.70 23.90M5.70 25.90L5.40 26.40L5.15 28.95Q5.80 29.15 6.33 29.15Q6.85 29.15 7.20 29.10Q6.55 27.15 5.70 25.90M2.60 24.30Q1.85 24.55 1.85 25.45Q1.85 26.35 2.25 27Q2.45 25.20 2.60 24.30ZM23.55 31.30Q19.60 39.70 16.88 39.70Q14.15 39.70 13.68 39.05Q13.20 38.40 13.20 34.75Q13.20 31.10 13.90 24.20Q11.40 23.70 11.25 22.15Q11.25 21.35 12.30 21.35Q13.35 21.35 14.15 21.75Q14.60 18.15 15.20 14.45Q15.35 13.50 16.15 12.65Q16.95 11.80 17.70 11.80Q18.35 11.80 18.35 13.85Q18.35 14.80 17.65 22.60Q19 22.35 20.63 21.60Q22.25 20.85 22.55 20.85Q23.45 20.85 23.45 21.40Q23.50 21.90 21.60 22.78Q19.70 23.65 17.50 24.10Q16.90 31.40 16.90 35.15Q16.90 37.15 17.50 37.15Q18.40 37.10 19.90 35.05Q21.40 33 22.88 29.73Q24.35 26.45 24.68 26.45Q25 26.45 25 26.85Q25 28.25 23.55 31.30ZM43.20 29.10Q45.30 29.10 47.10 27.30Q48 26.40 48.33 26.40Q48.65 26.40 48.65 26.90Q48.65 27.40 48 28.10Q45.35 31.05 41.35 31.05Q40.55 34.75 38.85 37.23Q37.15 39.70 34.55 39.70Q31.95 39.70 30.80 36.65Q28.75 39.70 26.55 39.70Q22.40 39.70 22.40 31.70Q22.40 26.15 23.50 24.15Q23.70 23.80 25.00 23.00Q26.30 22.20 26.80 22.20Q27.55 22.20 27.55 23.10Q27.45 25.45 26.15 28.65Q25.85 29.25 25.85 31.53Q25.85 33.80 26.38 35.53Q26.90 37.25 27.90 37.25Q28.90 37.25 30.35 34.85Q30.10 33.60 30.10 32.18Q30.10 30.75 30.40 29.13Q30.70 27.50 31.60 25.85Q32.50 24.20 33.75 24.20Q34.15 24.20 34.33 24.45Q34.50 24.70 34.50 25.65Q34.50 28.20 33.15 32Q33.35 34.20 34.18 35.73Q35 37.25 36 37.25Q37.45 37.25 38.45 35.38Q39.45 33.50 40 30.80Q38.15 30.30 37.15 28.90Q36.15 27.50 36.15 25.68Q36.15 23.85 37.03 22.53Q37.90 21.20 39.60 21.20Q41.90 21.20 41.90 26.15Q41.90 27.45 41.75 28.85Q42.50 29.10 43.20 29.10M39.25 23.10Q38.80 23.10 38.80 24.80Q38.80 26.50 40.35 27.95Q40.40 27.70 40.40 27.20Q40.40 23.10 39.25 23.10Z"
      })
    })
  })]
});

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Editor_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Editor.tsx */ "./src/Editor.tsx");
/* harmony import */ var _helpers_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.ts */ "./src/helpers.ts");
/* harmony import */ var _icon_tsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon.tsx */ "./src/icon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: _icon_tsx__WEBPACK_IMPORTED_MODULE_7__.icon,
  category: "text",
  edit: ({
    attributes,
    setAttributes
  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Editor_tsx__WEBPACK_IMPORTED_MODULE_5__.Editor, {
    attributes: attributes,
    setAttributes: setAttributes
  }),
  save: ({
    attributes
  }) => {
    if (!attributes.content) return null;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
        style: {
          "--ftw-margin": attributes.margin,
          "--ftw-line-height": attributes.lineHeight,
          "--ftw-max-font-size": attributes.maxFontSize
        }
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        value: (0,_helpers_ts__WEBPACK_IMPORTED_MODULE_6__.makeFitToWidth)(attributes.content)
      })
    });
  },
  example: {
    attributes: {
      lineHeight: "1.2",
      // translators: Line breaks are language specific. Check the block preview in the editor.
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("So, get away<br>Another way to feel what you didn't <br>want yourself to know<br>And let yourself go<br>You know you didn't lose your self-control<br>Let's start at the rainbow<br>Turn away<br>Another way to be <br>where you didn't want yourself to go<br>Let yourself go<br>Is that a compromise", "fit-to-width")
    }
  }
});

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfit_to_width"] = globalThis["webpackChunkfit_to_width"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map