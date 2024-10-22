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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n}\n\nnav {\n  min-width: 25%;\n  min-height: 100vh;\n  background-color: rgb(214, 214, 214);\n}\n\nbutton,\ninput {\n  font-family: inherit;\n  font-size: 100%;\n}\n\nbutton {\n  padding: 0.2rem;\n  border-radius: 10px;\n  border: 0.5px solid black;\n  background-color: rgba(25, 25, 245, 0.544);\n}\n\n#title {\n  text-align: center;\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n}\n\nh2 {\n  margin-bottom: 1rem;\n  padding-left: 0.5rem;\n}\n\n#newProject {\n  position: absolute;\n  top: 20%;\n  left: 8%;\n  border-radius: 10px;\n  padding: 1rem;\n  border: 1px solid black;\n}\n\n#projectTitle {\n  margin-bottom: 1rem;\n}\n\n#projectDisplay {\n  min-width: 100vh;\n  min-height: 100vh;\n}\n\n#taskForm {\n  position: absolute;\n  top: 15%;\n  left: 30%;\n  padding: 0.5rem;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n\n#taskInfo {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-bottom: 0.5rem;\n}\n\n#taskInfo label {\n  display: block;\n}\n\n#checkPriority {\n  margin-bottom: 0.5rem;\n}\n\n#checkPriority legend {\n  margin-bottom: 0.5rem;\n}\n\n.projectDiv {\n  display: flex;\n  gap: 3rem;\n  margin-bottom: 0.5rem;\n  justify-content: space-between;\n  padding: 0 0.5rem 0 0.5rem;\n}\n\n.projectAddBtn {\n  border: none;\n  background: none;\n}\n\n#newProjectBtn {\n  margin-bottom: 1rem;\n  margin-left: 0.5rem;\n}\n\n#projectHead {\n  margin-top: 1rem;\n  width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#taskDisplay {\n  min-width: 100vh;\n}\n\n.cardDiv {\n  margin-top: 0.5rem;\n  margin-left: 0.3rem;\n  min-width: 100vh;\n  padding: 0.3rem;\n  display: flex;\n  justify-content: space-between;\n  border: 0.1rem solid black;\n  border-radius: 10px;\n}\n\n.cardDiv div {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 20%;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\nwindow.onload = function () {\n  _project_js__WEBPACK_IMPORTED_MODULE_1__.project.displayProjectList(_project_js__WEBPACK_IMPORTED_MODULE_1__.project.listProjects());\n};\n\nconst newProjectBtn = document.querySelector(\"#newProjectBtn\");\nconst newProject = document.querySelector(\"#newProject\");\nconst cancelProject = document.querySelector(\"#cancelProject\");\nconst addProject = document.querySelector(\"#addProject\");\nconst cancelTask = document.querySelector(\"#cancelTask\");\nconst addTask = document.querySelector(\".addTask\");\n\nnewProjectBtn?.addEventListener(\"click\", () => newProject.show());\n\ncancelProject?.addEventListener(\"click\", () => _project_js__WEBPACK_IMPORTED_MODULE_1__.project.clearNewProject());\n\naddProject?.addEventListener(\"click\", (event) => {\n  event.preventDefault();\n  const projectTitle = document.querySelector(\"#projectTitle\");\n  _project_js__WEBPACK_IMPORTED_MODULE_1__.project.createProject(projectTitle?.value, []);\n  newProject?.close();\n  _project_js__WEBPACK_IMPORTED_MODULE_1__.project.clearNewProject();\n});\n\ncancelTask?.addEventListener(\"click\", () => _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDo.clearNewTask());\n\naddTask?.addEventListener(\"click\", (event) => {\n  const taskTitle = document.querySelector(\"#taskTitle\");\n  const taskDescription = document.querySelector(\"#taskDescription\");\n  const dueDate = document.querySelector(\"#date\");\n  const priority = document.querySelector(`input[name=priority]:checked`);\n  let indexP = _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDo.giveIndexProject(event);\n  _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDo.createTaskCard(\n    indexP,\n    taskTitle.value,\n    taskDescription.value,\n    dueDate.value,\n    priority?.value\n  );\n  _todo_js__WEBPACK_IMPORTED_MODULE_0__.toDo.clearNewTask();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst project = (function () {\n  const projectArray = getStorage();\n  const projectList = document.querySelector(\"#projectList\");\n  const head = document.querySelector(\"#head\");\n\n  function projects(title, todo) {\n    return {\n      title: title,\n      todo: todo,\n    };\n  }\n\n  const listProjects = () => projectArray;\n\n  //Create a new project on the nav\n  const createProject = (title, todo) => {\n    const newproject = projects(title, todo);\n    projectArray.push(newproject);\n    storeProject();\n    console.log(getStorage());\n    displayProjectList(projectArray);\n  };\n  //Display the project list in the nav\n  const displayProjectList = (array) => {\n    projectList?.replaceChildren();\n    array.forEach((project, index) => {\n      const projectDiv = document.createElement(\"div\");\n      const projectAdd = document.createElement(\"button\");\n      const projectRemove = document.createElement(\"button\");\n      projectDiv.className = \"projectDiv\";\n      projectDiv.id = `projectDiv${index}`;\n      projectAdd.textContent = project.title;\n      projectAdd.className = \"projectAddBtn\";\n      projectAdd.id = `projectAdd-${index}`;\n      projectAdd.addEventListener(\"click\", () => {\n        clearProjectDisplay();\n        _todo__WEBPACK_IMPORTED_MODULE_0__.toDo.clearTaskDisplay();\n        displayProject(project.title, index);\n        _todo__WEBPACK_IMPORTED_MODULE_0__.toDo.displayTaskCard(index);\n      });\n      projectRemove.textContent = \"Remove\";\n      projectRemove.className = \"projectRemoveBtn\";\n      projectRemove.id = `projectRemove-${index}`;\n      projectRemove.addEventListener(\"click\", removeProject);\n\n      projectDiv.appendChild(projectAdd);\n      projectDiv.appendChild(projectRemove);\n      projectList?.appendChild(projectDiv);\n    });\n  };\n\n  //remove a project in the nav\n  const removeProject = (event) => {\n    let index = parseInt(event.target.id.split(\"-\")[1]);\n    projectArray.splice(index, 1);\n    storeProject();\n    const projectDiv = document.querySelectorAll(\".projectDiv\");\n    projectDiv.forEach((div) => projectList?.removeChild(div));\n    clearProjectDisplay();\n    displayProjectList(projectArray);\n  };\n\n  //Display the project with is name and a button to add task with a form\n  const displayProject = (title, index) => {\n    const taskForm = document.querySelector(\"#taskForm\");\n    const projectHead = document.createElement(\"div\");\n    const projectName = document.createElement(\"h2\");\n    const newTask = document.createElement(\"button\");\n    projectHead.id = \"projectHead\";\n    projectName.id = \"projectName\";\n    projectName.textContent = title;\n    projectHead.appendChild(projectName);\n    newTask.textContent = \"New task\";\n    newTask.className = \"newTaskBtn\";\n    newTask.id = `newTaskBtn${index}`;\n    newTask.addEventListener(\"click\", () => {\n      const addTask = document.querySelector(\".addTask\");\n      addTask.id = `addtask-${index}`;\n      taskForm.show();\n    });\n    projectHead.appendChild(newTask);\n    head?.appendChild(projectHead);\n  };\n\n  //Clear and close the form use to create a new project\n  const clearNewProject = () => {\n    const projectTitle = document.querySelector(\"#projectTitle\");\n    const newProject = document.querySelector(\"#newProject\");\n    projectTitle.value = \"\";\n    newProject.close();\n  };\n\n  //Clear and change the name of the project when a new project is selected\n  const clearProjectDisplay = () => {\n    const projectHead = document.querySelector(\"#projectHead\");\n    if (!projectHead) {\n      return;\n    } else {\n      head?.removeChild(projectHead);\n      _todo__WEBPACK_IMPORTED_MODULE_0__.toDo.clearTaskDisplay();\n    }\n  };\n\n  function storeProject() {\n    localStorage.setItem(\"projects\", JSON.stringify(listProjects()));\n  }\n\n  function getStorage() {\n    let storage = JSON.parse(localStorage.getItem(\"projects\"));\n    if (!storage) {\n      return [];\n    } else {\n      return storage;\n    }\n  }\n  return {\n    listProjects,\n    createProject,\n    displayProjectList,\n    displayProject,\n    clearNewProject,\n    storeProject,\n    getStorage,\n  };\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDo: () => (/* binding */ toDo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n//const { isThisHour } = require(\"date-fns\");\n\n\n\nconst toDo = (function () {\n  const taskTitle = document.querySelector(\"#taskTitle\");\n  const taskDescription = document.querySelector(\"#taskDescription\");\n  const dueDate = document.querySelector(\"#date\");\n  const priorityLow = document.querySelector(\"#low\");\n  const priorityMedium = document.querySelector(\"#medium\");\n  const priorityHigh = document.querySelector(\"#high\");\n  const projectArray = _project__WEBPACK_IMPORTED_MODULE_0__.project.listProjects();\n  const taskDisplay = document.querySelector(\"#taskDisplay\");\n\n  function createToDo(title, description, dueDate, priority) {\n    return {\n      title: title,\n      description: description,\n      dueDate: dueDate,\n      priority: priority,\n    };\n  }\n\n  const giveIndexProject = (event) => {\n    let indexP = parseInt(event.target.id.split(\"-\")[1]);\n    return indexP;\n  };\n\n  const createTaskCard = (indexP, title, description, dueDate, priority) => {\n    const newTask = createToDo(title, description, dueDate, priority);\n    projectArray[indexP].todo.push(newTask);\n    _project__WEBPACK_IMPORTED_MODULE_0__.project.storeProject();\n    clearTaskDisplay();\n    displayTaskCard(indexP);\n  };\n\n  const displayTaskCard = (indexP) => {\n    projectArray[indexP].todo.forEach((task, indexT) => {\n      const cardDiv = document.createElement(\"div\");\n      cardDiv.className = \"cardDiv\";\n      cardDiv.id = `cardDiv-${indexT}`;\n      const titleDiv = document.createElement(\"div\");\n      const title = document.createElement(\"h3\");\n      title.textContent = task.title;\n      titleDiv.appendChild(title);\n      cardDiv.appendChild(titleDiv);\n      const descriptionDiv = document.createElement(\"div\");\n      const description = document.createElement(\"p\");\n      description.textContent = task.description;\n      descriptionDiv.appendChild(description);\n      cardDiv.appendChild(descriptionDiv);\n      const dateDiv = document.createElement(\"div\");\n      const date = document.createElement(\"p\");\n      date.textContent = task.dueDate;\n      dateDiv.appendChild(date);\n      cardDiv.appendChild(dateDiv);\n      const taskPriorityDiv = document.createElement(\"div\");\n      const taskPriority = document.createElement(\"p\");\n      taskPriority.textContent = task.priority;\n      if (task.priority === \"Low\") {\n        taskPriority.style.color = \"green\";\n      } else if (task.priority === \"Medium\") {\n        taskPriority.style.color = \"orange\";\n      } else {\n        taskPriority.style.color = \"red\";\n      }\n      console.log(task.priority);\n      taskPriorityDiv.appendChild(taskPriority);\n      cardDiv.appendChild(taskPriorityDiv);\n      const deleteTaskDiv = document.createElement(\"div\");\n      const deleteTask = document.createElement(\"button\");\n      deleteTask.textContent = \"Delete\";\n      deleteTask.className = \"deleteTask\";\n      deleteTask.id = `deleteTask-${indexT}`;\n      deleteTask.addEventListener(\"click\", (event) =>\n        removeTaskCard(event, indexP)\n      );\n      deleteTaskDiv.appendChild(deleteTask);\n      cardDiv.appendChild(deleteTaskDiv);\n      taskDisplay?.appendChild(cardDiv);\n    });\n  };\n\n  const removeTaskCard = (event, indexP) => {\n    let indexT = parseInt(event.target.id.split(\"-\")[1]);\n    projectArray[indexP].todo.splice(indexT, 1);\n    _project__WEBPACK_IMPORTED_MODULE_0__.project.storeProject();\n    clearTaskDisplay();\n    displayTaskCard(indexP);\n  };\n\n  const clearNewTask = () => {\n    const taskForm = document.querySelector(\"#taskForm\");\n    taskTitle.value = \"\";\n    taskDescription.value = \"\";\n    dueDate.value = \"\";\n    priorityLow.checked = false;\n    priorityMedium.checked = false;\n    priorityHigh.checked = false;\n    taskForm.close();\n  };\n\n  const clearTaskDisplay = () => {\n    const cardDiv = document.querySelector(\".cardDiv\");\n    if (!cardDiv) {\n      return;\n    } else {\n      taskDisplay?.replaceChildren();\n    }\n  };\n\n  return {\n    createToDo,\n    createTaskCard,\n    giveIndexProject,\n    clearTaskDisplay,\n    clearNewTask,\n    displayTaskCard,\n  };\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;