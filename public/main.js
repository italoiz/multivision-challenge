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

/***/ "./src/cache.ts":
/*!**********************!*\
  !*** ./src/cache.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _Cache_data, _Cache_rootKey, _Cache_timeLife;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Cache = void 0;\nconst MINUTES_IN_MS = 1000 * 60;\nclass Cache {\n    constructor(defaultValue) {\n        this.defaultValue = defaultValue;\n        /**\n         * Cached data.\n         */\n        _Cache_data.set(this, new Map([]));\n        /**\n         * Root key of cache.\n         */\n        _Cache_rootKey.set(this, '_root');\n        /**\n         * Time life of cached data. when 0 (zero) it's expired.\n         */\n        _Cache_timeLife.set(this, 0);\n    }\n    get() {\n        return __classPrivateFieldGet(this, _Cache_data, \"f\").get(__classPrivateFieldGet(this, _Cache_rootKey, \"f\")) || this.defaultValue;\n    }\n    set(newValue) {\n        __classPrivateFieldGet(this, _Cache_data, \"f\").set(__classPrivateFieldGet(this, _Cache_rootKey, \"f\"), newValue);\n        __classPrivateFieldSet(this, _Cache_timeLife, Date.now() + (MINUTES_IN_MS * 30), \"f\");\n    }\n    isExpired() {\n        const now = Date.now();\n        return now > __classPrivateFieldGet(this, _Cache_timeLife, \"f\");\n    }\n}\nexports.Cache = Cache;\n_Cache_data = new WeakMap(), _Cache_rootKey = new WeakMap(), _Cache_timeLife = new WeakMap();\n\n\n//# sourceURL=webpack://multivision-challenge/./src/cache.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst letter_1 = __webpack_require__(/*! ./letter */ \"./src/letter.ts\");\nwindow.onload = function () {\n    new letter_1.Letter().get().then(content => {\n        console.log({ content });\n        document.body.innerHTML = `<pre>${JSON.stringify(content, null, 2)}</pre>`;\n    });\n};\n\n\n//# sourceURL=webpack://multivision-challenge/./src/index.ts?");

/***/ }),

/***/ "./src/letter.ts":
/*!***********************!*\
  !*** ./src/letter.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar _Letter_instances, _Letter_users, _Letter_setupUsers, _Letter_parseUser, _Letter_parsePost, _Letter_groupByUsers;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Letter = void 0;\nconst cache_1 = __webpack_require__(/*! ./cache */ \"./src/cache.ts\");\nclass Letter {\n    constructor() {\n        _Letter_instances.add(this);\n        _Letter_users.set(this, new cache_1.Cache(new Map([])));\n    }\n    get() {\n        return __awaiter(this, void 0, void 0, function* () {\n            yield __classPrivateFieldGet(this, _Letter_instances, \"m\", _Letter_setupUsers).call(this);\n            return fetch(\"https://jsonplaceholder.typicode.com/posts\")\n                .then((res) => res.json())\n                .then(__classPrivateFieldGet(this, _Letter_instances, \"m\", _Letter_groupByUsers).bind(this));\n        });\n    }\n}\nexports.Letter = Letter;\n_Letter_users = new WeakMap(), _Letter_instances = new WeakSet(), _Letter_setupUsers = function _Letter_setupUsers() {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (__classPrivateFieldGet(this, _Letter_users, \"f\").isExpired()) {\n            const users = yield fetch(\"https://jsonplaceholder.typicode.com/users\")\n                .then((res) => res.json())\n                .then(users => {\n                const map = new Map([]);\n                users.forEach((user) => {\n                    map.set(user.id, __classPrivateFieldGet(this, _Letter_instances, \"m\", _Letter_parseUser).call(this, user));\n                });\n                return map;\n            });\n            __classPrivateFieldGet(this, _Letter_users, \"f\").set(users);\n        }\n    });\n}, _Letter_parseUser = function _Letter_parseUser(user) {\n    const { id, name, username, email, phone, website, company } = user;\n    const { street, suite, city, zipcode } = user.address;\n    const address = `${street}, ${suite} - ${zipcode} ${city}`;\n    return {\n        id,\n        name,\n        username,\n        email,\n        phone,\n        website,\n        address,\n        company: company.name,\n        posts: [],\n    };\n}, _Letter_parsePost = function _Letter_parsePost(post) {\n    const { id, title, body } = post;\n    return { id, title, body };\n}, _Letter_groupByUsers = function _Letter_groupByUsers(posts) {\n    const users = __classPrivateFieldGet(this, _Letter_users, \"f\").get();\n    const groupedPosts = posts\n        .reduce((map, post) => {\n        const user = map.get(post.userId);\n        const posts = [...user.posts, __classPrivateFieldGet(this, _Letter_instances, \"m\", _Letter_parsePost).call(this, post)];\n        map.set(post.userId, Object.assign(Object.assign({}, user), { posts }));\n        return map;\n    }, users);\n    return Array.from(groupedPosts.values());\n};\n\n\n//# sourceURL=webpack://multivision-challenge/./src/letter.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;