/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst logic_1 = __webpack_require__(/*! ./logic */ \"./src/logic.ts\");\nconst app = express_1.default();\napp.use(express_1.default.json());\napp.use(cors_1.default({ origin: \"*\" }));\nconst port = process.env.PORT || 5001;\n// Send the team information, incl bots\napp.get(\"/\", (req, res) => {\n    res.send(logic_1.team());\n});\n// Receive the first state, send the start signal\napp.post(\"/start\", (req, res) => {\n    res.send(logic_1.start(req.body));\n});\n// Send a command, recieve\napp.post(\"/command\", (req, res) => {\n    res.send(logic_1.command(req.body));\n});\napp.post(\"/end\", (req, res) => {\n    res.send(logic_1.end(req.body));\n});\n// Start the Express server\napp.listen(port, () => {\n    console.log(`Starting Battlesnake Server at http://0.0.0.0:${port}...`);\n});\n\n\n//# sourceURL=webpack://example-bot/./src/index.ts?");

/***/ }),

/***/ "./src/logic.ts":
/*!**********************!*\
  !*** ./src/logic.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.team = void 0;\nconst team = () => {\n    return {\n        name: \"Yoloboyz\",\n        bots: [\n            {\n                name: \"Chinaman\",\n                loadout: {\n                    primary: \"Knife\",\n                },\n            },\n            {\n                name: \"Apex-Twin\",\n                loadout: {\n                    primary: \"Knife\",\n                },\n            },\n            {\n                name: \"Coinslot\",\n                loadout: {\n                    primary: \"Knife\",\n                },\n            },\n        ],\n    };\n};\nexports.team = team;\n\n\n//# sourceURL=webpack://example-bot/./src/logic.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;