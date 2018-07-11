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
exports.push([module.i, ".spinbtn,\r\n.bell,\r\n.cherry,\r\n.grape,\r\n.lemon,\r\n.question,\r\n.orange {\r\n    display: inline-block;\r\n    background: url(" + escape(__webpack_require__(/*! ./sprite.png */ "./src/sprite.png")) + ") no-repeat;\r\n    overflow: hidden;\r\n    text-indent: -9999px;\r\n    text-align: left;\r\n}\r\n\r\n.spinbtn {\r\n    background-position: -0px -0px;\r\n    width: 120px;\r\n    height: 53px;\r\n    grid-area: butt;\r\n    align-self: center;\r\n    justify-self: center;\r\n}\r\n\r\n.question {\r\n    background-position: -0px -53px;\r\n    width: 75px;\r\n    height: 79px;\r\n}\r\n\r\n.bell {\r\n    background-position: -0px -132px;\r\n    width: 70px;\r\n    height: 67px;\r\n}\r\n\r\n.cherry {\r\n    background-position: -0px -202px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.grape {\r\n    background-position: -0px -272px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.lemon {\r\n    background-position: -0px -342px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.orange {\r\n    background-position: -0px -412px;\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.spinbtn:disabled {\r\n    opacity: 0.5;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.slots {\r\n    display: grid;\r\n    grid-template-columns: 3fr 1fr 3fr;\r\n    grid-template-rows: 1fr 100px 1fr;\r\n    grid-template-areas:\r\n        \"app butt inp\"\r\n        \"app fr inp\"\r\n        \"app fr inp\"\r\n}\r\n@media screen and (max-width: 1050px) {\r\n    .slots {\r\n        grid-template-areas:\r\n            \"app app app\"\r\n            \"butt butt butt\"\r\n            \"inp inp inp\"\r\n    }\r\n}\r\n@media screen and (max-width: 600px) {\r\n    body .app-wrapper {\r\n        width: 320px;\r\n        height: 210px;\r\n        justify-self: center;\r\n    }\r\n    .spinbtn {\r\n        justify-self: center;\r\n        align-self: center;\r\n    }\r\n    .inputs {\r\n        justify-self: center;\r\n    }\r\n    body li {\r\n        width: 108px;\r\n        height: 62px;\r\n    }\r\n    body #app {\r\n        height: 182px;\r\n    }\r\n    li>div {\r\n        transform: scale(0.7);\r\n    }\r\n    body {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n.app-wrapper {\r\n    width: 600px;\r\n    height: 390px;\r\n    background: url(" + escape(__webpack_require__(/*! ./reelsBg.png */ "./src/reelsBg.png")) + ") no-repeat;\r\n    background-size: contain;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-area: app\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    height: 340px;\r\n    overflow: hidden;\r\n}\r\n\r\nul {\r\n    display: table;\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\nli>div {\r\n    background: #fff;\r\n    position: relative;\r\n}\r\n\r\nli {\r\n    width: 200px;\r\n    height: 113px;\r\n    flex: 0 0 111px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.reel li:last-child {\r\n\r\n}\r\n\r\n.inputs {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    grid-area: inp;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n.input {\r\n    width: 30%;\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n", ""]);

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

module.exports = __webpack_require__.p + "be11cc5a7b1b1b405bfcab85bdfde2a0.png";

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
        document.getElementById('spin').addEventListener('click', () => {
            //disable button after click , apply desiered result to end of reel and start animation
            document.getElementById('spin').setAttribute('disabled', 'true');
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

module.exports = __webpack_require__.p + "7e657e1ce6371f712ff2929dcc3458e5.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZVJlZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1aWxkUmVlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0c0NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZWxzQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9zbG90c0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83NTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUM7UUFDckIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMzRCx1RkFBdUY7WUFDdkYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6QixTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQzFCRCxnRjs7Ozs7Ozs7Ozs7O0FDQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3BpbmJ0bixcXHJcXG4uYmVsbCxcXHJcXG4uY2hlcnJ5LFxcclxcbi5ncmFwZSxcXHJcXG4ubGVtb24sXFxyXFxuLnF1ZXN0aW9uLFxcclxcbi5vcmFuZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9zcHJpdGUucG5nXCIpKSArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3BpbmJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTBweDtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUzcHg7XFxyXFxuICAgIGdyaWQtYXJlYTogYnV0dDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnF1ZXN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtNTNweDtcXHJcXG4gICAgd2lkdGg6IDc1cHg7XFxyXFxuICAgIGhlaWdodDogNzlweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0xMzJweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNjdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZXJyeSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTIwMnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JhcGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0yNzJweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlbW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMzQycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmFuZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC00MTJweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5idG46ZGlzYWJsZWQge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5zbG90cyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAzZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgIFxcXCJhcHAgYnV0dCBpbnBcXFwiXFxyXFxuICAgICAgICBcXFwiYXBwIGZyIGlucFxcXCJcXHJcXG4gICAgICAgIFxcXCJhcHAgZnIgaW5wXFxcIlxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcXHJcXG4gICAgLnNsb3RzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgICAgICAgXFxcImFwcCBhcHAgYXBwXFxcIlxcclxcbiAgICAgICAgICAgIFxcXCJidXR0IGJ1dHQgYnV0dFxcXCJcXHJcXG4gICAgICAgICAgICBcXFwiaW5wIGlucCBpbnBcXFwiXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgYm9keSAuYXBwLXdyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMTBweDtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5zcGluYnRuIHtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5pbnB1dHMge1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgYm9keSBsaSB7XFxyXFxuICAgICAgICB3aWR0aDogMTA4cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDYycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgYm9keSAjYXBwIHtcXHJcXG4gICAgICAgIGhlaWdodDogMTgycHg7XFxyXFxuICAgIH1cXHJcXG4gICAgbGk+ZGl2IHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYXBwLXdyYXBwZXIge1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGhlaWdodDogMzkwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9yZWVsc0JnLnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLWFyZWE6IGFwcFxcclxcbn1cXHJcXG5cXHJcXG4jYXBwIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAzNDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5saT5kaXYge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDExM3B4O1xcclxcbiAgICBmbGV4OiAwIDAgMTExcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4ucmVlbCBsaTpsYXN0LWNoaWxkIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBpbnA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVSZWVscyB7XHJcbiAgICBhbmltYXRlUmVlbHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9hbmltYXRlIHJlZWxzIGZyb20gc3RhcnQgdG8gdGhlIGVuZFxyXG4gICAgICAgIGNvbnN0IHJlZWxzOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVlbCcpO1xyXG4gICAgICAgIGNvbnN0IGFwcDogSFRNTEVsZW1lbnQgPSBjb25maWcuYXBwO1xyXG4gICAgICAgIGNvbnN0IGFwcEhlaWdodDogbnVtYmVyID0gYXBwLmNsaWVudEhlaWdodDtcclxuICAgICAgICAvL2xpc3RlbiBmb3IgYW50aW1hdGlvbiBzdG9wcywgdG8gZW5hYmxlIHNwaW4gYnV0dG9uXHJcbiAgICAgICAgcmVlbHNbcmVlbHMubGVuZ3RoIC0gMV0uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uZmlnLnNwaW5CdXR0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL2FuaW1hdGlvbiBnb2VzIGhlcmVcclxuICAgICAgICBbLi4ucmVlbHNdLmZvckVhY2goKGVsOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SGVpZ2h0OiBudW1iZXIgPSBlbC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vcmVzZXQgcG9zaXRpb24gdG8gc3RhcnRcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2l0aW9uOiBub25lOyB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoMCwgMH1weClcIik7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGB0cmFuc2l0aW9uOiBlYXNlLW91dCAkeyhlbGVtZW50SGVpZ2h0IC0gYXBwSGVpZ2h0KSAvIDEwMDB9czsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLSR7ZWxlbWVudEhlaWdodCAtIGFwcEhlaWdodH1weClgKVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBidWlsZFJlZWxzIHtcclxuICAgIG51bWJlck9mQXJyYXlzOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3RvcihudW1iZXJPZlJlZWxzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm51bWJlck9mQXJyYXlzID0gbnVtYmVyT2ZSZWVscztcclxuICAgIH1cclxuICAgIGJ1aWxkUmVlbCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvL2J1aWxkIGFycmF5IGZvciByZWVsc1xyXG4gICAgICAgIC8vYXJndW1lbnQgMCAtIG51bWJlciBvZiByZWVscyB0byBidWlsZFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZGcmFtZXMgPSAyMDtcclxuICAgICAgICBjb25zdCBmcmFtZXNJbmNyZW1lbnQgPSA1O1xyXG5cclxuICAgICAgICB3aGlsZSAoaSA8IHRoaXMubnVtYmVyT2ZBcnJheXMpIHtcclxuICAgICAgICAgICAgY29uZmlnLnJlZWxBcnJheVtpXSA9IHRoaXMuYnVpbGRSYW5kb21BcnJheShjb25maWcudmFsaWRTbG90SXRlbXMsIG51bWJlck9mRnJhbWVzKTtcclxuICAgICAgICAgICAgLy9hZGRpbmcgZnJhbWVzIHRvIG5leHQgcmVlbCB0byBtYWtlIGl0IHN0b3AgY29uc2lzdGVudGx5LCBvbmUgYnkgb25lLFxyXG4gICAgICAgICAgICAvL3doaWxlIGtlZXBpbmcgYWxtb3N0IHRoZSBzYW1lIGZyYW1lIHJhdGUgdG8gZWFjaCBvdGhlclxyXG4gICAgICAgICAgICBudW1iZXJPZkZyYW1lcyArPSBmcmFtZXNJbmNyZW1lbnQ7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnYXRoZXJIVE1MUmVlbCA9IChzb3VyY2U6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcclxuICAgICAgICAvL0J1aWxkIEhUTUwgZm9yIG9uZSByZWVsXHJcbiAgICAgICAgLy9hcmd1bWVudCAwIC0gcmFuZG9tIGFycmF5IHRvIGdldCBjbGFzcyBuYW1lcyBmb3IgaW1hZ2VzIGluIHNsb3RzXHJcbiAgICAgICAgLy9yZXR1cm5zIGh0bWwgdWwgbGlzdFxyXG4gICAgICAgIGxldCB0ZW1wU3RyaW5nOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNvdXJjZSkge1xyXG4gICAgICAgICAgICB0ZW1wU3RyaW5nICs9IGA8bGkgY2xhc3M9XCJzbG90XCI+PGRpdiBjbGFzcz1cInF1ZXN0aW9uICR7aXRlbX1cIj48L2Rpdj48L2xpPmBcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGA8dWwgY2xhc3M9XCJyZWVsXCI+JHt0ZW1wU3RyaW5nfTwvdWw+YFxyXG4gICAgfVxyXG4gICAgcmVuZGVyUmVlbCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgdGVtcEhUTUw6IHN0cmluZztcclxuICAgICAgICB0ZW1wSFRNTCA9IHRoaXMuZ2F0aGVySFRNTFJlZWwoY29uZmlnLnJlZWxBcnJheVswXSkgKyB0aGlzLmdhdGhlckhUTUxSZWVsKGNvbmZpZy5yZWVsQXJyYXlbMV0pICsgdGhpcy5nYXRoZXJIVE1MUmVlbChjb25maWcucmVlbEFycmF5WzJdKTtcclxuICAgICAgICBjb25zdCBhcHA6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSB0ZW1wSFRNTDtcclxuICAgIH1cclxuICAgIGJ1aWxkUmFuZG9tQXJyYXkgPSAoc291cmNlQXJyYXk6IHN0cmluZ1tdLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZ1tdID0+IHtcclxuICAgICAgICAvL2J1aWxkIGFycmF5IHdpdGggcmFuZG9tIGl0ZW1zIHVzaW5nIHZhbGlkU2xvdEl0ZW1zXHJcbiAgICAgICAgLy9hcmd1bWVudCAwIC0gYXJyYXkgd2hlcmUgZnJvbSB0byBnZXQgaXRlbXMgdG8gcmFuZG9taXplXHJcbiAgICAgICAgLy9hcmd1bWVudCAxIC0gcmFuZG9tIGFycmF5IGxlbmd0aFxyXG4gICAgICAgIC8vcmV0dW5zIG5ldyByYW5kb20gYXJyYXlcclxuICAgICAgICBsZXQgdGVtcEFycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChjb25maWcudmFsaWRTbG90SXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uZmlnLnZhbGlkU2xvdEl0ZW1zLmxlbmd0aCldKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxufSIsImludGVyZmFjZSBDb25maWcge1xyXG4gICAgdmFsaWRTbG90SXRlbXM6IHN0cmluZ1tdO1xyXG4gICAgbnVtYmVyT2ZSZWVsczogbnVtYmVyO1xyXG4gICAgc2xvdHNTaG93blBlclJlZWw6IG51bWJlcjtcclxuICAgIHJlZWxBcnJheTogc3RyaW5nW11bXTtcclxuICAgIGN1cnJlbnRJdGVtczogc3RyaW5nW107XHJcbiAgICBhcHA6IEhUTUxFbGVtZW50O1xyXG4gICAgc3BpbkJ1dHQ6IEhUTUxFbGVtZW50O1xyXG4gICAgaW5wdXRzOiBIVE1MQ29sbGVjdGlvbk9mPEVsZW1lbnQ+O1xyXG59XHJcblxyXG5leHBvcnQgbGV0IGNvbmZpZzogQ29uZmlnID0ge1xyXG4gICAgdmFsaWRTbG90SXRlbXMgOiBbJ2dyYXBlJywgJ2xlbW9uJywgJ29yYW5nZScsICdjaGVycnknLCAnYmVsbCddLFxyXG4gICAgbnVtYmVyT2ZSZWVscyA6IDAsXHJcbiAgICBzbG90c1Nob3duUGVyUmVlbCA6IDAsXHJcbiAgICByZWVsQXJyYXkgOiBbXSxcclxuICAgIGN1cnJlbnRJdGVtczogW10sXHJcbiAgICBhcHAgOiBudWxsLFxyXG4gICAgaW5wdXRzOiBudWxsLFxyXG4gICAgc3BpbkJ1dHQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluJyksXHJcbn1cclxuXHJcbiAgICAiLCJpbXBvcnQgeyBTbG90c0dhbWUgfSBmcm9tICcuL3Nsb3RzR2FtZSdcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHNsb3RzID0gbmV3IFNsb3RzR2FtZSgzLDMsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBidWlsZFJlZWxzIH0gZnJvbSAnLi9idWlsZFJlZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dHNDb250cm9sIHtcclxuICAgIHJlbmRlcklucHV0cyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcEhUTUwgPSAnJztcclxuICAgICAgICBjb25zdCBudW1iZXJPZklucHV0czogbnVtYmVyID0gY29uZmlnLm51bWJlck9mUmVlbHMgKiBjb25maWcuc2xvdHNTaG93blBlclJlZWw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZklucHV0czsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRlbXBIVE1MICs9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCI+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0cycpLmlubmVySFRNTCA9IHRlbXBIVE1MO1xyXG4gICAgICAgIGNvbmZpZy5pbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dCcpO1xyXG4gICAgfVxyXG4gICAgcmVhZEN1cnJlbnRTbG90cyA9ICgpID0+IHtcclxuICAgICAgICAvL3JldHVybnMgbmV3IGFycmF5IHdpdGggaXRlbXMgdGhhdCBjdXJyZW50bHkgc2hvd25cclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLm51bWJlck9mUmVlbHM7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbmZpZy5zbG90c1Nob3duUGVyUmVlbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2goY29uZmlnLnJlZWxBcnJheVtqXVtpXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRTbG90cyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvL3JlYWQgc2xvdHMgb24gYXBwIHN0YXJ0IGFuZCBzYXZlIHRvIGlucHV0c1xyXG4gICAgICAgIFsuLi5jb25maWcuaW5wdXRzXS5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgZWwudmFsdWUgPSBjb25maWcuY3VycmVudEl0ZW1zW2ldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRTbG90cyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvL3JlYWQgdmFsdWVzIGZyb20gYWxsIG5pbmUgaW5wdXRzIGFuZCBzYXZlIHRoZW0gdG8gdGhlIGVuZCBvZiBlYWNoIHJlZWxcclxuICAgICAgICBbLi4uY29uZmlnLmlucHV0c10uZm9yRWFjaCgoZWw6IGFueSwgaWR4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlkeCA8IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBjb25maWcucmVlbEFycmF5W2lkeF0ubGVuZ3RoIC0gMztcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5yZWVsQXJyYXlbaWR4XVtudW1dID0gZWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKDMgPD0gaWR4ICYmIGlkeCA8IDYpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGlkeCAtIDM7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gY29uZmlnLnJlZWxBcnJheVtpbmRleF0ubGVuZ3RoIC0gMjtcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5yZWVsQXJyYXlbaW5kZXhdW251bV0gPSBlbC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoNiA8PSBpZHggJiYgaWR4IDwgOSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaWR4IC0gNjtcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBjb25maWcucmVlbEFycmF5W2luZGV4XS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnJlZWxBcnJheVtpbmRleF1bbnVtXSA9IGVsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGJ1aWxkZXI6IGJ1aWxkUmVlbHMgPSBuZXcgYnVpbGRSZWVscyhjb25maWcubnVtYmVyT2ZSZWVscyk7XHJcbiAgICAgICAgYnVpbGRlci5yZW5kZXJSZWVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZTExY2M1YTdiMWIxYjQwNWJmY2FiODViZGZkZTJhMC5wbmdcIjsiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IGJ1aWxkUmVlbHMgfSBmcm9tICcuL2J1aWxkUmVlbHMnO1xyXG5pbXBvcnQgeyBJbnB1dHNDb250cm9sIH0gZnJvbSAnLi9pbnB1dHNDb250cm9sJztcclxuaW1wb3J0IHsgQW5pbWF0ZVJlZWxzIH0gZnJvbSAnLi9hbmltYXRlUmVlbCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3RzR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWVsczogbnVtYmVyLCB2aXNpYmxlU2xvdHNPblJlZWw6IG51bWJlciwgdGFyZ2V0OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbmZpZy5udW1iZXJPZlJlZWxzID0gcmVlbHM7XHJcbiAgICAgICAgY29uZmlnLnNsb3RzU2hvd25QZXJSZWVsID0gdmlzaWJsZVNsb3RzT25SZWVsO1xyXG4gICAgICAgIGNvbmZpZy5hcHAgPSB0YXJnZXQ7XHJcbiAgICAgICAgbGV0IElucHV0czogSW5wdXRzQ29udHJvbCA9IG5ldyBJbnB1dHNDb250cm9sO1xyXG4gICAgICAgIGxldCBidWlsZGVyOiBidWlsZFJlZWxzID0gbmV3IGJ1aWxkUmVlbHMoY29uZmlnLm51bWJlck9mUmVlbHMpO1xyXG4gICAgICAgIGxldCBhbmltYXRpb246IEFuaW1hdGVSZWVscyA9IG5ldyBBbmltYXRlUmVlbHM7XHJcbiAgICAgICAgSW5wdXRzLnJlbmRlcklucHV0cygpO1xyXG4gICAgICAgIGJ1aWxkZXIuYnVpbGRSZWVsKCk7XHJcbiAgICAgICAgY29uZmlnLmN1cnJlbnRJdGVtcyA9IElucHV0cy5yZWFkQ3VycmVudFNsb3RzKCk7XHJcbiAgICAgICAgYnVpbGRlci5yZW5kZXJSZWVsKCk7XHJcbiAgICAgICAgSW5wdXRzLmdldEN1cnJlbnRTbG90cygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vZGlzYWJsZSBidXR0b24gYWZ0ZXIgY2xpY2sgLCBhcHBseSBkZXNpZXJlZCByZXN1bHQgdG8gZW5kIG9mIHJlZWwgYW5kIHN0YXJ0IGFuaW1hdGlvblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BpbicpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICBJbnB1dHMuc2V0Q3VycmVudFNsb3RzKCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hbmltYXRlUmVlbHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlNjU3ZTFjZTYzNzFmNzEyZmYyOTI5ZGNjMzQ1OGU1LnBuZ1wiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=