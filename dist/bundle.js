/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinbtn,\n.bell,\n.cherry,\n.grape,\n.lemon,\n.question,\n.orange {\n    display: inline-block;\n    background: url(" + escape(__webpack_require__(/*! ./sprite.png */ "./src/sprite.png")) + ") no-repeat;\n    overflow: hidden;\n    text-indent: -9999px;\n    text-align: left;\n}\n\n.spinbtn {\n    background-position: -0px -0px;\n    width: 120px;\n    height: 53px;\n    grid-area: butt;\n    align-self: center;\n    justify-self: center;\n}\n\n.question {\n    background-position: -0px -53px;\n    width: 75px;\n    height: 79px;\n}\n\n.bell {\n    background-position: -0px -132px;\n    width: 70px;\n    height: 67px;\n}\n\n.cherry {\n    background-position: -0px -202px;\n    width: 70px;\n    height: 70px;\n}\n\n.grape {\n    background-position: -0px -272px;\n    width: 70px;\n    height: 70px;\n}\n\n.lemon {\n    background-position: -0px -342px;\n    width: 70px;\n    height: 70px;\n}\n\n.orange {\n    background-position: -0px -412px;\n    width: 70px;\n    height: 70px;\n}\n\n.spinbtn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n}\n\n.slots {\n    display: grid;\n    grid-template-columns: 3fr 1fr 3fr;\n    grid-template-rows: 1fr 100px 1fr;\n    grid-template-areas:\n        \"app butt inp\"\n        \"app fr inp\"\n        \"app fr inp\"\n}\n@media screen and (max-width: 1050px) {\n    .slots {\n        grid-template-areas:\n            \"app app app\"\n            \"butt butt butt\"\n            \"inp inp inp\"\n    }\n}\n@media screen and (max-width: 600px) {\n    body .app-wrapper {\n        width: 320px;\n        height: 210px;\n        justify-self: center;\n    }\n    .spinbtn {\n        justify-self: center;\n        align-self: center;\n    }\n    .inputs {\n        justify-self: center;\n    }\n    body li {\n        width: 108px;\n        height: 62px;\n    }\n    body #app {\n        height: 182px;\n    }\n    li>div {\n        transform: scale(0.7);\n    }\n    body {\n        margin: 0;\n    }\n}\n\n.app-wrapper {\n    width: 600px;\n    height: 390px;\n    background: url(" + escape(__webpack_require__(/*! ./reelsBg.png */ "./src/reelsBg.png")) + ") no-repeat;\n    background-size: contain;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    grid-area: app\n}\n\n#app {\n    display: flex;\n    height: 340px;\n    overflow: hidden;\n}\n\nul {\n    display: table;\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\nli>div {\n    background: #fff;\n    position: relative;\n}\n\nli {\n    width: 200px;\n    height: 113px;\n    flex: 0 0 111px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.reel li:last-child {\n\n}\n\n.inputs {\n    display: flex;\n    flex-wrap: wrap;\n    grid-area: inp;\n    justify-content: center;\n\n}\n\n.input {\n    width: 30%;\n    font-size: 24px;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/animateReel.ts":
/*!****************************!*\
  !*** ./src/animateReel.ts ***!
  \****************************/
/*! exports provided: AnimateReels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateReels", function() { return AnimateReels; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

class AnimateReels {
    constructor() {
        this.animateReels = () => {
            //animate reels from start to the end
            const reels = document.getElementsByClassName('reel');
            const app = _config__WEBPACK_IMPORTED_MODULE_0__["config"].app;
            const appHeight = app.clientHeight;
            //listen for antimation stops, to enable spin button
            reels[reels.length - 1].addEventListener('transitionend', () => {
                _config__WEBPACK_IMPORTED_MODULE_0__["config"].spinButt.removeAttribute('disabled');
            });
            //animation goes here
            [...reels].forEach((el) => {
                const elementHeight = el.clientHeight;
                //reset position to start
                el.setAttribute("style", "transition: none; transform: `translate(0, 0}px)");
                el.setAttribute("style", `transition: ease-out ${(elementHeight - appHeight) / 1000}s; transform: translate(0, -${elementHeight - appHeight}px)`);
            });
        };
    }
}


/***/ }),

/***/ "./src/buildReels.ts":
/*!***************************!*\
  !*** ./src/buildReels.ts ***!
  \***************************/
/*! exports provided: buildReels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildReels", function() { return buildReels; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");

class buildReels {
    constructor(numberOfReels) {
        this.buildReel = () => {
            //build array for reels
            //argument 0 - number of reels to build
            let i = 0;
            let numberOfFrames = 20;
            const framesIncrement = 5;
            while (i < this.numberOfArrays) {
                _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[i] = this.buildRandomArray(_config__WEBPACK_IMPORTED_MODULE_0__["config"].validSlotItems, numberOfFrames);
                //adding frames to next reel to make it stop consistently, one by one,
                //while keeping almost the same frame rate to each other
                numberOfFrames += framesIncrement;
                i++;
            }
        };
        this.gatherHTMLReel = (source) => {
            //Build HTML for one reel
            //argument 0 - random array to get class names for images in slots
            //returns html ul list
            let tempString = '';
            for (let item of source) {
                tempString += `<li class="slot"><div class="question ${item}"></div></li>`;
            }
            return `<ul class="reel">${tempString}</ul>`;
        };
        this.renderReel = () => {
            let tempHTML;
            tempHTML = this.gatherHTMLReel(_config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[0]) + this.gatherHTMLReel(_config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[1]) + this.gatherHTMLReel(_config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[2]);
            const app = document.getElementById('app');
            app.innerHTML = tempHTML;
        };
        this.buildRandomArray = (sourceArray, length) => {
            //build array with random items using validSlotItems
            //argument 0 - array where from to get items to randomize
            //argument 1 - random array length
            //retuns new random array
            let tempArray = [];
            for (let i = 0; i < length; i++) {
                tempArray.push(_config__WEBPACK_IMPORTED_MODULE_0__["config"].validSlotItems[Math.floor(Math.random() * _config__WEBPACK_IMPORTED_MODULE_0__["config"].validSlotItems.length)]);
            }
            ;
            return tempArray;
        };
        this.numberOfArrays = numberOfReels;
    }
}


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
let config = {
    validSlotItems: ['grape', 'lemon', 'orange', 'cherry', 'bell'],
    numberOfReels: 0,
    slotsShownPerReel: 0,
    reelArray: [],
    currentItems: [],
    app: null,
    inputs: null,
    spinButt: document.getElementById('spin'),
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slotsGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slotsGame */ "./src/slotsGame.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener("DOMContentLoaded", function () {
    const slots = new _slotsGame__WEBPACK_IMPORTED_MODULE_0__["SlotsGame"](3, 3, document.getElementById('app'));
});


/***/ }),

/***/ "./src/inputsControl.ts":
/*!******************************!*\
  !*** ./src/inputsControl.ts ***!
  \******************************/
/*! exports provided: InputsControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsControl", function() { return InputsControl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _buildReels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildReels */ "./src/buildReels.ts");


class InputsControl {
    constructor() {
        this.renderInputs = () => {
            let tempHTML = '';
            const numberOfInputs = _config__WEBPACK_IMPORTED_MODULE_0__["config"].numberOfReels * _config__WEBPACK_IMPORTED_MODULE_0__["config"].slotsShownPerReel;
            for (let i = 0; i < numberOfInputs; i++) {
                tempHTML += `<input type="text" class="input">`;
            }
            document.getElementById('inputs').innerHTML = tempHTML;
            _config__WEBPACK_IMPORTED_MODULE_0__["config"].inputs = document.getElementsByClassName('input');
        };
        this.readCurrentSlots = () => {
            //returns new array with items that currently shown
            let temp = [];
            for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__["config"].numberOfReels; i++) {
                for (let j = 0; j < _config__WEBPACK_IMPORTED_MODULE_0__["config"].slotsShownPerReel; j++) {
                    temp.push(_config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[j][i]);
                }
            }
            return temp;
        };
        this.getCurrentSlots = () => {
            //read slots on app start and save to inputs
            [..._config__WEBPACK_IMPORTED_MODULE_0__["config"].inputs].forEach((el, i) => {
                el.value = _config__WEBPACK_IMPORTED_MODULE_0__["config"].currentItems[i];
            });
        };
        this.setCurrentSlots = () => {
            //read values from all nine inputs and save them to the end of each reel
            [..._config__WEBPACK_IMPORTED_MODULE_0__["config"].inputs].forEach((el, idx) => {
                if (idx < 3) {
                    let num = _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[idx].length - 3;
                    _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[idx][num] = el.value;
                }
                if (3 <= idx && idx < 6) {
                    let index = idx - 3;
                    let num = _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[index].length - 2;
                    _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[index][num] = el.value;
                }
                if (6 <= idx && idx < 9) {
                    let index = idx - 6;
                    let num = _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[index].length - 1;
                    _config__WEBPACK_IMPORTED_MODULE_0__["config"].reelArray[index][num] = el.value;
                }
            });
            let builder = new _buildReels__WEBPACK_IMPORTED_MODULE_1__["buildReels"](_config__WEBPACK_IMPORTED_MODULE_0__["config"].numberOfReels);
            builder.renderReel();
        };
    }
}


/***/ }),

/***/ "./src/reelsBg.png":
/*!*************************!*\
  !*** ./src/reelsBg.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "237beca5729d833c33ce4f91d0f3a9b4.png";

/***/ }),

/***/ "./src/slotsGame.ts":
/*!**************************!*\
  !*** ./src/slotsGame.ts ***!
  \**************************/
/*! exports provided: SlotsGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotsGame", function() { return SlotsGame; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.ts");
/* harmony import */ var _buildReels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildReels */ "./src/buildReels.ts");
/* harmony import */ var _inputsControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputsControl */ "./src/inputsControl.ts");
/* harmony import */ var _animateReel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animateReel */ "./src/animateReel.ts");




class SlotsGame {
    constructor(reels, visibleSlotsOnReel, target) {
        _config__WEBPACK_IMPORTED_MODULE_0__["config"].numberOfReels = reels;
        _config__WEBPACK_IMPORTED_MODULE_0__["config"].slotsShownPerReel = visibleSlotsOnReel;
        _config__WEBPACK_IMPORTED_MODULE_0__["config"].app = target;
        let Inputs = new _inputsControl__WEBPACK_IMPORTED_MODULE_2__["InputsControl"];
        let builder = new _buildReels__WEBPACK_IMPORTED_MODULE_1__["buildReels"](_config__WEBPACK_IMPORTED_MODULE_0__["config"].numberOfReels);
        let animation = new _animateReel__WEBPACK_IMPORTED_MODULE_3__["AnimateReels"];
        Inputs.renderInputs();
        builder.buildReel();
        _config__WEBPACK_IMPORTED_MODULE_0__["config"].currentItems = Inputs.readCurrentSlots();
        builder.renderReel();
        Inputs.getCurrentSlots();
        _config__WEBPACK_IMPORTED_MODULE_0__["config"].spinButt.addEventListener('click', () => {
            //disable button after click , apply desiered result to end of reel and start animation
            _config__WEBPACK_IMPORTED_MODULE_0__["config"].spinButt.setAttribute('disabled', 'true');
            Inputs.setCurrentSlots();
            animation.animateReels();
        });
    }
}


/***/ }),

/***/ "./src/sprite.png":
/*!************************!*\
  !*** ./src/sprite.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a3d43b69c2f7a18091349b8c6bb65275.png";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZVJlZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1aWxkUmVlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0c0NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZWxzQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9zbG90c0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83NTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFD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LENBQUM7UUFDekIsOENBQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMzQyx1RkFBdUY7WUFDdkYsOENBQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDekIsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7QUMxQkQsZ0Y7Ozs7Ozs7Ozs7OztBQ0NBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNwaW5idG4sXFxuLmJlbGwsXFxuLmNoZXJyeSxcXG4uZ3JhcGUsXFxuLmxlbW9uLFxcbi5xdWVzdGlvbixcXG4ub3JhbmdlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vc3ByaXRlLnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnNwaW5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0wcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OiA1M3B4O1xcbiAgICBncmlkLWFyZWE6IGJ1dHQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5xdWVzdGlvbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTUzcHg7XFxuICAgIHdpZHRoOiA3NXB4O1xcbiAgICBoZWlnaHQ6IDc5cHg7XFxufVxcblxcbi5iZWxsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMTMycHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDY3cHg7XFxufVxcblxcbi5jaGVycnkge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0yMDJweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmdyYXBlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMjcycHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTM0MnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ub3JhbmdlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtNDEycHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5zcGluYnRuOmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2xvdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMDBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiYXBwIGJ1dHQgaW5wXFxcIlxcbiAgICAgICAgXFxcImFwcCBmciBpbnBcXFwiXFxuICAgICAgICBcXFwiYXBwIGZyIGlucFxcXCJcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAgIC5zbG90cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJhcHAgYXBwIGFwcFxcXCJcXG4gICAgICAgICAgICBcXFwiYnV0dCBidXR0IGJ1dHRcXFwiXFxuICAgICAgICAgICAgXFxcImlucCBpbnAgaW5wXFxcIlxcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkgLmFwcC13cmFwcGVyIHtcXG4gICAgICAgIHdpZHRoOiAzMjBweDtcXG4gICAgICAgIGhlaWdodDogMjEwcHg7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuc3BpbmJ0biB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAuaW5wdXRzIHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICAgIGJvZHkgbGkge1xcbiAgICAgICAgd2lkdGg6IDEwOHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xcbiAgICB9XFxuICAgIGJvZHkgI2FwcCB7XFxuICAgICAgICBoZWlnaHQ6IDE4MnB4O1xcbiAgICB9XFxuICAgIGxpPmRpdiB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIH1cXG4gICAgYm9keSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XFxuXFxuLmFwcC13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDM5MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vcmVlbHNCZy5wbmdcIikpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBhcHBcXG59XFxuXFxuI2FwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbnVsIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGk+ZGl2IHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMTNweDtcXG4gICAgZmxleDogMCAwIDExMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnJlZWwgbGk6bGFzdC1jaGlsZCB7XFxuXFxufVxcblxcbi5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdyaWQtYXJlYTogaW5wO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmlucHV0IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIEFuaW1hdGVSZWVscyB7XG4gICAgYW5pbWF0ZVJlZWxzID0gKCkgPT4ge1xuICAgICAgICAvL2FuaW1hdGUgcmVlbHMgZnJvbSBzdGFydCB0byB0aGUgZW5kXG4gICAgICAgIGNvbnN0IHJlZWxzOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVlbCcpO1xuICAgICAgICBjb25zdCBhcHA6IEhUTUxFbGVtZW50ID0gY29uZmlnLmFwcDtcbiAgICAgICAgY29uc3QgYXBwSGVpZ2h0OiBudW1iZXIgPSBhcHAuY2xpZW50SGVpZ2h0O1xuICAgICAgICAvL2xpc3RlbiBmb3IgYW50aW1hdGlvbiBzdG9wcywgdG8gZW5hYmxlIHNwaW4gYnV0dG9uXG4gICAgICAgIHJlZWxzW3JlZWxzLmxlbmd0aCAtIDFdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25maWcuc3BpbkJ1dHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy9hbmltYXRpb24gZ29lcyBoZXJlXG4gICAgICAgIFsuLi5yZWVsc10uZm9yRWFjaCgoZWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SGVpZ2h0OiBudW1iZXIgPSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgICAvL3Jlc2V0IHBvc2l0aW9uIHRvIHN0YXJ0XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zaXRpb246IG5vbmU7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAwfXB4KVwiKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGB0cmFuc2l0aW9uOiBlYXNlLW91dCAkeyhlbGVtZW50SGVpZ2h0IC0gYXBwSGVpZ2h0KSAvIDEwMDB9czsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLSR7ZWxlbWVudEhlaWdodCAtIGFwcEhlaWdodH1weClgKVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZydcblxuXG5leHBvcnQgY2xhc3MgYnVpbGRSZWVscyB7XG4gICAgbnVtYmVyT2ZBcnJheXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlZWxzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkFycmF5cyA9IG51bWJlck9mUmVlbHM7XG4gICAgfVxuICAgIGJ1aWxkUmVlbCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgLy9idWlsZCBhcnJheSBmb3IgcmVlbHNcbiAgICAgICAgLy9hcmd1bWVudCAwIC0gbnVtYmVyIG9mIHJlZWxzIHRvIGJ1aWxkXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IG51bWJlck9mRnJhbWVzID0gMjA7XG4gICAgICAgIGNvbnN0IGZyYW1lc0luY3JlbWVudCA9IDU7XG5cbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLm51bWJlck9mQXJyYXlzKSB7XG4gICAgICAgICAgICBjb25maWcucmVlbEFycmF5W2ldID0gdGhpcy5idWlsZFJhbmRvbUFycmF5KGNvbmZpZy52YWxpZFNsb3RJdGVtcywgbnVtYmVyT2ZGcmFtZXMpO1xuICAgICAgICAgICAgLy9hZGRpbmcgZnJhbWVzIHRvIG5leHQgcmVlbCB0byBtYWtlIGl0IHN0b3AgY29uc2lzdGVudGx5LCBvbmUgYnkgb25lLFxuICAgICAgICAgICAgLy93aGlsZSBrZWVwaW5nIGFsbW9zdCB0aGUgc2FtZSBmcmFtZSByYXRlIHRvIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIG51bWJlck9mRnJhbWVzICs9IGZyYW1lc0luY3JlbWVudDtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBnYXRoZXJIVE1MUmVlbCA9IChzb3VyY2U6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcbiAgICAgICAgLy9CdWlsZCBIVE1MIGZvciBvbmUgcmVlbFxuICAgICAgICAvL2FyZ3VtZW50IDAgLSByYW5kb20gYXJyYXkgdG8gZ2V0IGNsYXNzIG5hbWVzIGZvciBpbWFnZXMgaW4gc2xvdHNcbiAgICAgICAgLy9yZXR1cm5zIGh0bWwgdWwgbGlzdFxuICAgICAgICBsZXQgdGVtcFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc291cmNlKSB7XG4gICAgICAgICAgICB0ZW1wU3RyaW5nICs9IGA8bGkgY2xhc3M9XCJzbG90XCI+PGRpdiBjbGFzcz1cInF1ZXN0aW9uICR7aXRlbX1cIj48L2Rpdj48L2xpPmBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDx1bCBjbGFzcz1cInJlZWxcIj4ke3RlbXBTdHJpbmd9PC91bD5gXG4gICAgfVxuICAgIHJlbmRlclJlZWwgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGxldCB0ZW1wSFRNTDogc3RyaW5nO1xuICAgICAgICB0ZW1wSFRNTCA9IHRoaXMuZ2F0aGVySFRNTFJlZWwoY29uZmlnLnJlZWxBcnJheVswXSkgKyB0aGlzLmdhdGhlckhUTUxSZWVsKGNvbmZpZy5yZWVsQXJyYXlbMV0pICsgdGhpcy5nYXRoZXJIVE1MUmVlbChjb25maWcucmVlbEFycmF5WzJdKTtcbiAgICAgICAgY29uc3QgYXBwOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgICAgICAgYXBwLmlubmVySFRNTCA9IHRlbXBIVE1MO1xuICAgIH1cbiAgICBidWlsZFJhbmRvbUFycmF5ID0gKHNvdXJjZUFycmF5OiBzdHJpbmdbXSwgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmdbXSA9PiB7XG4gICAgICAgIC8vYnVpbGQgYXJyYXkgd2l0aCByYW5kb20gaXRlbXMgdXNpbmcgdmFsaWRTbG90SXRlbXNcbiAgICAgICAgLy9hcmd1bWVudCAwIC0gYXJyYXkgd2hlcmUgZnJvbSB0byBnZXQgaXRlbXMgdG8gcmFuZG9taXplXG4gICAgICAgIC8vYXJndW1lbnQgMSAtIHJhbmRvbSBhcnJheSBsZW5ndGhcbiAgICAgICAgLy9yZXR1bnMgbmV3IHJhbmRvbSBhcnJheVxuICAgICAgICBsZXQgdGVtcEFycmF5OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChjb25maWcudmFsaWRTbG90SXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uZmlnLnZhbGlkU2xvdEl0ZW1zLmxlbmd0aCldKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XG4gICAgfVxuICAgIFxufSIsImludGVyZmFjZSBDb25maWcge1xuICAgIHZhbGlkU2xvdEl0ZW1zOiBzdHJpbmdbXTtcbiAgICBudW1iZXJPZlJlZWxzOiBudW1iZXI7XG4gICAgc2xvdHNTaG93blBlclJlZWw6IG51bWJlcjtcbiAgICByZWVsQXJyYXk6IHN0cmluZ1tdW107XG4gICAgY3VycmVudEl0ZW1zOiBzdHJpbmdbXTtcbiAgICBhcHA6IEhUTUxFbGVtZW50O1xuICAgIHNwaW5CdXR0OiBIVE1MRWxlbWVudDtcbiAgICBpbnB1dHM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD47XG59XG5cbmV4cG9ydCBsZXQgY29uZmlnOiBDb25maWcgPSB7XG4gICAgdmFsaWRTbG90SXRlbXMgOiBbJ2dyYXBlJywgJ2xlbW9uJywgJ29yYW5nZScsICdjaGVycnknLCAnYmVsbCddLFxuICAgIG51bWJlck9mUmVlbHMgOiAwLFxuICAgIHNsb3RzU2hvd25QZXJSZWVsIDogMCxcbiAgICByZWVsQXJyYXkgOiBbXSxcbiAgICBjdXJyZW50SXRlbXM6IFtdLFxuICAgIGFwcCA6IG51bGwsXG4gICAgaW5wdXRzOiBudWxsLFxuICAgIHNwaW5CdXR0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BpbicpLFxufVxuXG4gICAgIiwiaW1wb3J0IHsgU2xvdHNHYW1lIH0gZnJvbSAnLi9zbG90c0dhbWUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc2xvdHMgPSBuZXcgU2xvdHNHYW1lKDMsMywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbn0pO1xuXG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBidWlsZFJlZWxzIH0gZnJvbSAnLi9idWlsZFJlZWxzJztcblxuZXhwb3J0IGNsYXNzIElucHV0c0NvbnRyb2wge1xuICAgIHJlbmRlcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRlbXBIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSW5wdXRzOiBudW1iZXIgPSBjb25maWcubnVtYmVyT2ZSZWVscyAqIGNvbmZpZy5zbG90c1Nob3duUGVyUmVlbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZklucHV0czsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wSFRNTCArPSBgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dFwiPmA7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0cycpLmlubmVySFRNTCA9IHRlbXBIVE1MO1xuICAgICAgICBjb25maWcuaW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5wdXQnKTtcbiAgICB9XG4gICAgcmVhZEN1cnJlbnRTbG90cyA9ICgpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIG5ldyBhcnJheSB3aXRoIGl0ZW1zIHRoYXQgY3VycmVudGx5IHNob3duXG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLm51bWJlck9mUmVlbHM7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb25maWcuc2xvdHNTaG93blBlclJlZWw7IGorKykge1xuICAgICAgICAgICAgICAgIHRlbXAucHVzaChjb25maWcucmVlbEFycmF5W2pdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wO1xuICAgIH1cbiAgICBnZXRDdXJyZW50U2xvdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIC8vcmVhZCBzbG90cyBvbiBhcHAgc3RhcnQgYW5kIHNhdmUgdG8gaW5wdXRzXG4gICAgICAgIFsuLi5jb25maWcuaW5wdXRzXS5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGVsLnZhbHVlID0gY29uZmlnLmN1cnJlbnRJdGVtc1tpXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudFNsb3RzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICAvL3JlYWQgdmFsdWVzIGZyb20gYWxsIG5pbmUgaW5wdXRzIGFuZCBzYXZlIHRoZW0gdG8gdGhlIGVuZCBvZiBlYWNoIHJlZWxcbiAgICAgICAgWy4uLmNvbmZpZy5pbnB1dHNdLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMykge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBjb25maWcucmVlbEFycmF5W2lkeF0ubGVuZ3RoIC0gMztcbiAgICAgICAgICAgICAgICBjb25maWcucmVlbEFycmF5W2lkeF1bbnVtXSA9IGVsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDMgPD0gaWR4ICYmIGlkeCA8IDYpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpZHggLSAzO1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBjb25maWcucmVlbEFycmF5W2luZGV4XS5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIGNvbmZpZy5yZWVsQXJyYXlbaW5kZXhdW251bV0gPSBlbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICg2IDw9IGlkeCAmJiBpZHggPCA5KSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaWR4IC0gNjtcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gY29uZmlnLnJlZWxBcnJheVtpbmRleF0ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICBjb25maWcucmVlbEFycmF5W2luZGV4XVtudW1dID0gZWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYnVpbGRlcjogYnVpbGRSZWVscyA9IG5ldyBidWlsZFJlZWxzKGNvbmZpZy5udW1iZXJPZlJlZWxzKTtcbiAgICAgICAgYnVpbGRlci5yZW5kZXJSZWVsKCk7XG4gICAgfVxuXG4gICAgXG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjM3YmVjYTU3MjlkODMzYzMzY2U0ZjkxZDBmM2E5YjQucG5nXCI7IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgYnVpbGRSZWVscyB9IGZyb20gJy4vYnVpbGRSZWVscyc7XG5pbXBvcnQgeyBJbnB1dHNDb250cm9sIH0gZnJvbSAnLi9pbnB1dHNDb250cm9sJztcbmltcG9ydCB7IEFuaW1hdGVSZWVscyB9IGZyb20gJy4vYW5pbWF0ZVJlZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBTbG90c0dhbWUge1xuICAgIGNvbnN0cnVjdG9yKHJlZWxzOiBudW1iZXIsIHZpc2libGVTbG90c09uUmVlbDogbnVtYmVyLCB0YXJnZXQ6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbmZpZy5udW1iZXJPZlJlZWxzID0gcmVlbHM7XG4gICAgICAgIGNvbmZpZy5zbG90c1Nob3duUGVyUmVlbCA9IHZpc2libGVTbG90c09uUmVlbDtcbiAgICAgICAgY29uZmlnLmFwcCA9IHRhcmdldDtcbiAgICAgICAgbGV0IElucHV0czogSW5wdXRzQ29udHJvbCA9IG5ldyBJbnB1dHNDb250cm9sO1xuICAgICAgICBsZXQgYnVpbGRlcjogYnVpbGRSZWVscyA9IG5ldyBidWlsZFJlZWxzKGNvbmZpZy5udW1iZXJPZlJlZWxzKTtcbiAgICAgICAgbGV0IGFuaW1hdGlvbjogQW5pbWF0ZVJlZWxzID0gbmV3IEFuaW1hdGVSZWVscztcbiAgICAgICAgSW5wdXRzLnJlbmRlcklucHV0cygpO1xuICAgICAgICBidWlsZGVyLmJ1aWxkUmVlbCgpO1xuICAgICAgICBjb25maWcuY3VycmVudEl0ZW1zID0gSW5wdXRzLnJlYWRDdXJyZW50U2xvdHMoKTtcbiAgICAgICAgYnVpbGRlci5yZW5kZXJSZWVsKCk7XG4gICAgICAgIElucHV0cy5nZXRDdXJyZW50U2xvdHMoKTtcbiAgICAgICAgY29uZmlnLnNwaW5CdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy9kaXNhYmxlIGJ1dHRvbiBhZnRlciBjbGljayAsIGFwcGx5IGRlc2llcmVkIHJlc3VsdCB0byBlbmQgb2YgcmVlbCBhbmQgc3RhcnQgYW5pbWF0aW9uXG4gICAgICAgICAgICBjb25maWcuc3BpbkJ1dHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICBJbnB1dHMuc2V0Q3VycmVudFNsb3RzKCk7XG4gICAgICAgICAgICBhbmltYXRpb24uYW5pbWF0ZVJlZWxzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhM2Q0M2I2OWMyZjdhMTgwOTEzNDliOGM2YmI2NTI3NS5wbmdcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9