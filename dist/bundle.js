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
            _buildReels__WEBPACK_IMPORTED_MODULE_1__["buildReels"].prototype.renderReel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0ZVJlZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1aWxkUmVlbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0c0NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZWxzQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9zbG90c0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83NTI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFD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QWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzNELHVGQUF1RjtZQUN2RixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3pCLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDMUJELGdGOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGluYnRuLFxcclxcbi5iZWxsLFxcclxcbi5jaGVycnksXFxyXFxuLmdyYXBlLFxcclxcbi5sZW1vbixcXHJcXG4ucXVlc3Rpb24sXFxyXFxuLm9yYW5nZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL3Nwcml0ZS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5zcGluYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMHB4O1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogNTNweDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBidXR0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucXVlc3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC01M3B4O1xcclxcbiAgICB3aWR0aDogNzVweDtcXHJcXG4gICAgaGVpZ2h0OiA3OXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmVsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTEzMnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA2N3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlcnJ5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMjAycHg7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5ncmFwZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTI3MnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVtb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0zNDJweDtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yYW5nZSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTQxMnB4O1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3BpbmJ0bjpkaXNhYmxlZCB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsb3RzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDNmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAgICAgXFxcImFwcCBidXR0IGlucFxcXCJcXHJcXG4gICAgICAgIFxcXCJhcHAgZnIgaW5wXFxcIlxcclxcbiAgICAgICAgXFxcImFwcCBmciBpbnBcXFwiXFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcclxcbiAgICAuc2xvdHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICAgICAgICBcXFwiYXBwIGFwcCBhcHBcXFwiXFxyXFxuICAgICAgICAgICAgXFxcImJ1dHQgYnV0dCBidXR0XFxcIlxcclxcbiAgICAgICAgICAgIFxcXCJpbnAgaW5wIGlucFxcXCJcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBib2R5IC5hcHAtd3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNwaW5idG4ge1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmlucHV0cyB7XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5IGxpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDhweDtcXHJcXG4gICAgICAgIGhlaWdodDogNjJweDtcXHJcXG4gICAgfVxcclxcbiAgICBib2R5ICNhcHAge1xcclxcbiAgICAgICAgaGVpZ2h0OiAxODJweDtcXHJcXG4gICAgfVxcclxcbiAgICBsaT5kaXYge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcclxcbiAgICB9XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5hcHAtd3JhcHBlciB7XFxyXFxuICAgIHdpZHRoOiA2MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzOTBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL3JlZWxzQmcucG5nXCIpKSArIFwiKSBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdyaWQtYXJlYTogYXBwXFxyXFxufVxcclxcblxcclxcbiNhcHAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpPmRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMTEzcHg7XFxyXFxuICAgIGZsZXg6IDAgMCAxMTFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5yZWVsIGxpOmxhc3QtY2hpbGQge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBncmlkLWFyZWE6IGlucDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZVJlZWxzIHtcclxuICAgIGFuaW1hdGVSZWVscyA9ICgpID0+IHtcclxuICAgICAgICAvL2FuaW1hdGUgcmVlbHMgZnJvbSBzdGFydCB0byB0aGUgZW5kXHJcbiAgICAgICAgY29uc3QgcmVlbHM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWVsJyk7XHJcbiAgICAgICAgY29uc3QgYXBwOiBIVE1MRWxlbWVudCA9IGNvbmZpZy5hcHA7XHJcbiAgICAgICAgY29uc3QgYXBwSGVpZ2h0OiBudW1iZXIgPSBhcHAuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIC8vbGlzdGVuIGZvciBhbnRpbWF0aW9uIHN0b3BzLCB0byBlbmFibGUgc3BpbiBidXR0b25cclxuICAgICAgICByZWVsc1tyZWVscy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25maWcuc3BpbkJ1dHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vYW5pbWF0aW9uIGdvZXMgaGVyZVxyXG4gICAgICAgIFsuLi5yZWVsc10uZm9yRWFjaCgoZWw6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQ6IG51bWJlciA9IGVsLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgLy9yZXNldCBwb3NpdGlvbiB0byBzdGFydFxyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zaXRpb246IG5vbmU7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAwfXB4KVwiKTtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHRyYW5zaXRpb246IGVhc2Utb3V0ICR7KGVsZW1lbnRIZWlnaHQgLSBhcHBIZWlnaHQpIC8gMTAwMH1zOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtJHtlbGVtZW50SGVpZ2h0IC0gYXBwSGVpZ2h0fXB4KWApXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIGJ1aWxkUmVlbHMge1xyXG4gICAgbnVtYmVyT2ZBcnJheXM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKG51bWJlck9mUmVlbHM6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZBcnJheXMgPSBudW1iZXJPZlJlZWxzO1xyXG4gICAgfVxyXG4gICAgYnVpbGRSZWVsID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vYnVpbGQgYXJyYXkgZm9yIHJlZWxzXHJcbiAgICAgICAgLy9hcmd1bWVudCAwIC0gbnVtYmVyIG9mIHJlZWxzIHRvIGJ1aWxkXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxldCBudW1iZXJPZkZyYW1lcyA9IDIwO1xyXG4gICAgICAgIGNvbnN0IGZyYW1lc0luY3JlbWVudCA9IDU7XHJcblxyXG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5udW1iZXJPZkFycmF5cykge1xyXG4gICAgICAgICAgICBjb25maWcucmVlbEFycmF5W2ldID0gdGhpcy5idWlsZFJhbmRvbUFycmF5KGNvbmZpZy52YWxpZFNsb3RJdGVtcywgbnVtYmVyT2ZGcmFtZXMpO1xyXG4gICAgICAgICAgICAvL2FkZGluZyBmcmFtZXMgdG8gbmV4dCByZWVsIHRvIG1ha2UgaXQgc3RvcCBjb25zaXN0ZW50bHksIG9uZSBieSBvbmUsXHJcbiAgICAgICAgICAgIC8vd2hpbGUga2VlcGluZyBhbG1vc3QgdGhlIHNhbWUgZnJhbWUgcmF0ZSB0byBlYWNoIG90aGVyXHJcbiAgICAgICAgICAgIG51bWJlck9mRnJhbWVzICs9IGZyYW1lc0luY3JlbWVudDtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdhdGhlckhUTUxSZWVsID0gKHNvdXJjZTogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIC8vQnVpbGQgSFRNTCBmb3Igb25lIHJlZWxcclxuICAgICAgICAvL2FyZ3VtZW50IDAgLSByYW5kb20gYXJyYXkgdG8gZ2V0IGNsYXNzIG5hbWVzIGZvciBpbWFnZXMgaW4gc2xvdHNcclxuICAgICAgICAvL3JldHVybnMgaHRtbCB1bCBsaXN0XHJcbiAgICAgICAgbGV0IHRlbXBTdHJpbmc6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc291cmNlKSB7XHJcbiAgICAgICAgICAgIHRlbXBTdHJpbmcgKz0gYDxsaSBjbGFzcz1cInNsb3RcIj48ZGl2IGNsYXNzPVwicXVlc3Rpb24gJHtpdGVtfVwiPjwvZGl2PjwvbGk+YFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYDx1bCBjbGFzcz1cInJlZWxcIj4ke3RlbXBTdHJpbmd9PC91bD5gXHJcbiAgICB9XHJcbiAgICByZW5kZXJSZWVsID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wSFRNTDogc3RyaW5nO1xyXG4gICAgICAgIHRlbXBIVE1MID0gdGhpcy5nYXRoZXJIVE1MUmVlbChjb25maWcucmVlbEFycmF5WzBdKSArIHRoaXMuZ2F0aGVySFRNTFJlZWwoY29uZmlnLnJlZWxBcnJheVsxXSkgKyB0aGlzLmdhdGhlckhUTUxSZWVsKGNvbmZpZy5yZWVsQXJyYXlbMl0pO1xyXG4gICAgICAgIGNvbnN0IGFwcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbiAgICAgICAgYXBwLmlubmVySFRNTCA9IHRlbXBIVE1MO1xyXG4gICAgfVxyXG4gICAgYnVpbGRSYW5kb21BcnJheSA9IChzb3VyY2VBcnJheTogc3RyaW5nW10sIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nW10gPT4ge1xyXG4gICAgICAgIC8vYnVpbGQgYXJyYXkgd2l0aCByYW5kb20gaXRlbXMgdXNpbmcgdmFsaWRTbG90SXRlbXNcclxuICAgICAgICAvL2FyZ3VtZW50IDAgLSBhcnJheSB3aGVyZSBmcm9tIHRvIGdldCBpdGVtcyB0byByYW5kb21pemVcclxuICAgICAgICAvL2FyZ3VtZW50IDEgLSByYW5kb20gYXJyYXkgbGVuZ3RoXHJcbiAgICAgICAgLy9yZXR1bnMgbmV3IHJhbmRvbSBhcnJheVxyXG4gICAgICAgIGxldCB0ZW1wQXJyYXk6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKGNvbmZpZy52YWxpZFNsb3RJdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25maWcudmFsaWRTbG90SXRlbXMubGVuZ3RoKV0pXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW50ZXJmYWNlIENvbmZpZyB7XHJcbiAgICB2YWxpZFNsb3RJdGVtczogc3RyaW5nW107XHJcbiAgICBudW1iZXJPZlJlZWxzOiBudW1iZXI7XHJcbiAgICBzbG90c1Nob3duUGVyUmVlbDogbnVtYmVyO1xyXG4gICAgcmVlbEFycmF5OiBzdHJpbmdbXVtdO1xyXG4gICAgY3VycmVudEl0ZW1zOiBzdHJpbmdbXTtcclxuICAgIGFwcDogSFRNTEVsZW1lbnQ7XHJcbiAgICBzcGluQnV0dDogSFRNTEVsZW1lbnQ7XHJcbiAgICBpbnB1dHM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD47XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY29uZmlnOiBDb25maWcgPSB7XHJcbiAgICB2YWxpZFNsb3RJdGVtcyA6IFsnZ3JhcGUnLCAnbGVtb24nLCAnb3JhbmdlJywgJ2NoZXJyeScsICdiZWxsJ10sXHJcbiAgICBudW1iZXJPZlJlZWxzIDogMCxcclxuICAgIHNsb3RzU2hvd25QZXJSZWVsIDogMCxcclxuICAgIHJlZWxBcnJheSA6IFtdLFxyXG4gICAgY3VycmVudEl0ZW1zOiBbXSxcclxuICAgIGFwcCA6IG51bGwsXHJcbiAgICBpbnB1dHM6IG51bGwsXHJcbiAgICBzcGluQnV0dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW4nKSxcclxufVxyXG5cclxuICAgICIsImltcG9ydCB7IFNsb3RzR2FtZSB9IGZyb20gJy4vc2xvdHNHYW1lJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3Qgc2xvdHMgPSBuZXcgU2xvdHNHYW1lKDMsMywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxufSk7XHJcblxyXG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IGJ1aWxkUmVlbHMgfSBmcm9tICcuL2J1aWxkUmVlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0c0NvbnRyb2wge1xyXG4gICAgcmVuZGVySW5wdXRzID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wSFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IG51bWJlck9mSW5wdXRzOiBudW1iZXIgPSBjb25maWcubnVtYmVyT2ZSZWVscyAqIGNvbmZpZy5zbG90c1Nob3duUGVyUmVlbDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mSW5wdXRzOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcEhUTUwgKz0gYDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXRcIj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRzJykuaW5uZXJIVE1MID0gdGVtcEhUTUw7XHJcbiAgICAgICAgY29uZmlnLmlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0Jyk7XHJcbiAgICB9XHJcbiAgICByZWFkQ3VycmVudFNsb3RzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vcmV0dXJucyBuZXcgYXJyYXkgd2l0aCBpdGVtcyB0aGF0IGN1cnJlbnRseSBzaG93blxyXG4gICAgICAgIGxldCB0ZW1wID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcubnVtYmVyT2ZSZWVsczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29uZmlnLnNsb3RzU2hvd25QZXJSZWVsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRlbXAucHVzaChjb25maWcucmVlbEFycmF5W2pdW2ldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFNsb3RzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vcmVhZCBzbG90cyBvbiBhcHAgc3RhcnQgYW5kIHNhdmUgdG8gaW5wdXRzXHJcbiAgICAgICAgWy4uLmNvbmZpZy5pbnB1dHNdLmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBlbC52YWx1ZSA9IGNvbmZpZy5jdXJyZW50SXRlbXNbaV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudFNsb3RzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vcmVhZCB2YWx1ZXMgZnJvbSBhbGwgbmluZSBpbnB1dHMgYW5kIHNhdmUgdGhlbSB0byB0aGUgZW5kIG9mIGVhY2ggcmVlbFxyXG4gICAgICAgIFsuLi5jb25maWcuaW5wdXRzXS5mb3JFYWNoKChlbDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IGNvbmZpZy5yZWVsQXJyYXlbaWR4XS5sZW5ndGggLSAzO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnJlZWxBcnJheVtpZHhdW251bV0gPSBlbC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoMyA8PSBpZHggJiYgaWR4IDwgNikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaWR4IC0gMztcclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBjb25maWcucmVlbEFycmF5W2luZGV4XS5sZW5ndGggLSAyO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnJlZWxBcnJheVtpbmRleF1bbnVtXSA9IGVsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICg2IDw9IGlkeCAmJiBpZHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpZHggLSA2O1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IGNvbmZpZy5yZWVsQXJyYXlbaW5kZXhdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBjb25maWcucmVlbEFycmF5W2luZGV4XVtudW1dID0gZWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBidWlsZFJlZWxzLnByb3RvdHlwZS5yZW5kZXJSZWVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiZTExY2M1YTdiMWIxYjQwNWJmY2FiODViZGZkZTJhMC5wbmdcIjsiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XHJcbmltcG9ydCB7IGJ1aWxkUmVlbHMgfSBmcm9tICcuL2J1aWxkUmVlbHMnO1xyXG5pbXBvcnQgeyBJbnB1dHNDb250cm9sIH0gZnJvbSAnLi9pbnB1dHNDb250cm9sJztcclxuaW1wb3J0IHsgQW5pbWF0ZVJlZWxzIH0gZnJvbSAnLi9hbmltYXRlUmVlbCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3RzR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWVsczogbnVtYmVyLCB2aXNpYmxlU2xvdHNPblJlZWw6IG51bWJlciwgdGFyZ2V0OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbmZpZy5udW1iZXJPZlJlZWxzID0gcmVlbHM7XHJcbiAgICAgICAgY29uZmlnLnNsb3RzU2hvd25QZXJSZWVsID0gdmlzaWJsZVNsb3RzT25SZWVsO1xyXG4gICAgICAgIGNvbmZpZy5hcHAgPSB0YXJnZXQ7XHJcbiAgICAgICAgbGV0IElucHV0czogSW5wdXRzQ29udHJvbCA9IG5ldyBJbnB1dHNDb250cm9sO1xyXG4gICAgICAgIGxldCBidWlsZGVyOiBidWlsZFJlZWxzID0gbmV3IGJ1aWxkUmVlbHMoY29uZmlnLm51bWJlck9mUmVlbHMpO1xyXG4gICAgICAgIGxldCBhbmltYXRpb246IEFuaW1hdGVSZWVscyA9IG5ldyBBbmltYXRlUmVlbHM7XHJcbiAgICAgICAgSW5wdXRzLnJlbmRlcklucHV0cygpO1xyXG4gICAgICAgIGJ1aWxkZXIuYnVpbGRSZWVsKCk7XHJcbiAgICAgICAgY29uZmlnLmN1cnJlbnRJdGVtcyA9IElucHV0cy5yZWFkQ3VycmVudFNsb3RzKCk7XHJcbiAgICAgICAgYnVpbGRlci5yZW5kZXJSZWVsKCk7XHJcbiAgICAgICAgSW5wdXRzLmdldEN1cnJlbnRTbG90cygpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGluJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vZGlzYWJsZSBidXR0b24gYWZ0ZXIgY2xpY2sgLCBhcHBseSBkZXNpZXJlZCByZXN1bHQgdG8gZW5kIG9mIHJlZWwgYW5kIHN0YXJ0IGFuaW1hdGlvblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BpbicpLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICBJbnB1dHMuc2V0Q3VycmVudFNsb3RzKCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hbmltYXRlUmVlbHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdlNjU3ZTFjZTYzNzFmNzEyZmYyOTI5ZGNjMzQ1OGU1LnBuZ1wiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=