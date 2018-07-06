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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener("DOMContentLoaded", function () {
    const validSlotItems = ['grape', 'lemon', 'orange', 'cherry', 'bell'];
    const numberOfReels = 3;
    const slotsShownPerReel = 3;
    const spinButton = document.getElementById('spin');
    let inputs;
    let reelArray = [];
    let currentItems;
    const buildRandomArray = (sourceArray, length) => {
        //build array with random items using validSlotItems
        //argument 0 - array where from to get items to randomize
        //argument 1 - random array length
        //retuns new random array
        let tempArray = [];
        for (let i = 0; i < length; i++) {
            tempArray.push(validSlotItems[Math.floor(Math.random() * validSlotItems.length)]);
        }
        ;
        return tempArray;
    };
    const buildReel = (numberOfArrays) => {
        //build array for reels
        //argument 0 - number of reels to build
        let i = 0;
        let numberOfFrames = 20;
        const framesIncrement = 5;
        while (i < numberOfArrays) {
            reelArray[i] = buildRandomArray(validSlotItems, numberOfFrames);
            //adding frames to next reel to make it stop consistently, one by one,
            //while keeping almost the same frame rate to each other
            numberOfFrames += framesIncrement;
            i++;
        }
    };
    const animateReels = () => {
        //animate reels from start to the end
        const reels = document.getElementsByClassName('reel');
        const app = document.getElementById('app');
        const appHeight = app.clientHeight;
        //listen for antimation stops, to enable spin button
        reels[reels.length - 1].addEventListener('transitionend', () => {
            spinButton.removeAttribute('disabled');
        });
        //animation goes here
        [...reels].forEach((el) => {
            const elementHeight = el.clientHeight;
            //reset position to start
            el.setAttribute("style", "transition: none; transform: `translate(0, 0}px)");
            el.setAttribute("style", `transition: ease-out ${(elementHeight - appHeight) / 1000}s; transform: translate(0, -${elementHeight - appHeight}px)`);
        });
    };
    const readCurrentSlots = () => {
        //returns new array with items that currently shown
        let temp = [];
        for (let i = 0; i < numberOfReels; i++) {
            for (let j = 0; j < slotsShownPerReel; j++) {
                temp.push(reelArray[j][i]);
            }
        }
        console.log(temp);
        return temp;
    };
    const gatherHTMLReel = (source) => {
        //Build HTML for one reel
        //argument 0 - random array to get class names for images in slots
        //returns html ul list
        let tempString = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="question ${item}"></div></li>`;
        }
        return `<ul class="reel">${tempString}</ul>`;
    };
    const renderReel = () => {
        //Apply new HTML to DOM
        let tempHTML = gatherHTMLReel(reelArray[0]) + gatherHTMLReel(reelArray[1]) + gatherHTMLReel(reelArray[2]);
        const app = document.getElementById('app');
        app.innerHTML = tempHTML;
    };
    const getCurrentSlots = () => {
        //read slots on app start and save to inputs
        [...inputs].forEach((el, i) => {
            el.value = currentItems[i];
        });
    };
    const setCurrentSlots = () => {
        //read values from all nine inputs and save them to the end of each reel
        [...inputs].forEach((el, idx) => {
            if (idx < 3) {
                let num = reelArray[idx].length - 3;
                reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                let index = idx - 3;
                let num = reelArray[index].length - 2;
                reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                let index = idx - 6;
                let num = reelArray[index].length - 1;
                reelArray[index][num] = el.value;
            }
        });
        renderReel();
    };
    const renderInputs = () => {
        let tempHTML = '';
        const numberOfInputs = numberOfReels * slotsShownPerReel;
        for (let i = 0; i < numberOfInputs; i++) {
            tempHTML += `<input type="text" class="input">`;
        }
        document.getElementById('inputs').innerHTML = tempHTML;
        inputs = document.getElementsByClassName('input');
        console.log(inputs);
    };
    spinButton.addEventListener('click', () => {
        //disable button after click , apply desiered result to end of reel and start animation
        spinButton.setAttribute('disabled', 'true');
        setCurrentSlots();
        animateReels();
    });
    renderInputs();
    buildReel(numberOfReels);
    currentItems = readCurrentSlots();
    renderReel();
    getCurrentSlots();
});


/***/ }),

/***/ "./src/reelsBg.png":
/*!*************************!*\
  !*** ./src/reelsBg.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "237beca5729d833c33ce4f91d0f3a9b4.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZWxzQmcucG5nIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGUucG5nIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzUyOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FB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QTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGluYnRuLFxcbi5iZWxsLFxcbi5jaGVycnksXFxuLmdyYXBlLFxcbi5sZW1vbixcXG4ucXVlc3Rpb24sXFxuLm9yYW5nZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL3Nwcml0ZS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5zcGluYnRuIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDogNTNweDtcXG4gICAgZ3JpZC1hcmVhOiBidXR0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC01M3B4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA3OXB4O1xcbn1cXG5cXG4uYmVsbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTEzMnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA2N3B4O1xcbn1cXG5cXG4uY2hlcnJ5IHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTBweCAtMjAycHg7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5ncmFwZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTI3MnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4ubGVtb24ge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0zNDJweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLm9yYW5nZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0wcHggLTQxMnB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uc3BpbmJ0bjpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLnNsb3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImFwcCBidXR0IGlucFxcXCJcXG4gICAgICAgIFxcXCJhcHAgZnIgaW5wXFxcIlxcbiAgICAgICAgXFxcImFwcCBmciBpbnBcXFwiXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgICAuc2xvdHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgICAgICBcXFwiYXBwIGFwcCBhcHBcXFwiXFxuICAgICAgICAgICAgXFxcImJ1dHQgYnV0dCBidXR0XFxcIlxcbiAgICAgICAgICAgIFxcXCJpbnAgaW5wIGlucFxcXCJcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBib2R5IC5hcHAtd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIxMHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLnNwaW5idG4ge1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmlucHV0cyB7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgfVxcbiAgICBib2R5IGxpIHtcXG4gICAgICAgIHdpZHRoOiAxMDhweDtcXG4gICAgICAgIGhlaWdodDogNjJweDtcXG4gICAgfVxcbiAgICBib2R5ICNhcHAge1xcbiAgICAgICAgaGVpZ2h0OiAxODJweDtcXG4gICAgfVxcbiAgICBsaT5kaXYge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgICB9XFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxufVxcblxcbi5hcHAtd3JhcHBlciB7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAzOTBweDtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL3JlZWxzQmcucG5nXCIpKSArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogYXBwXFxufVxcblxcbiNhcHAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDM0MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG51bCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpPmRpdiB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxubGkge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTEzcHg7XFxuICAgIGZsZXg6IDAgMCAxMTFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5yZWVsIGxpOmxhc3QtY2hpbGQge1xcblxcbn1cXG5cXG4uaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBncmlkLWFyZWE6IGlucDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxufVxcblxcbi5pbnB1dCB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbGlkU2xvdEl0ZW1zOiBzdHJpbmdbXSA9IFsnZ3JhcGUnLCAnbGVtb24nLCAnb3JhbmdlJywgJ2NoZXJyeScsICdiZWxsJ107XG4gICAgY29uc3QgbnVtYmVyT2ZSZWVscyA9IDM7XG4gICAgY29uc3Qgc2xvdHNTaG93blBlclJlZWwgPSAzO1xuICAgIGNvbnN0IHNwaW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BpbicpO1xuICAgIGxldCBpbnB1dHM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD47XG4gICAgbGV0IHJlZWxBcnJheTogc3RyaW5nW11bXSA9IFtdO1xuICAgIGxldCBjdXJyZW50SXRlbXM6IHN0cmluZ1tdO1xuXG4gICAgY29uc3QgYnVpbGRSYW5kb21BcnJheSA9IChzb3VyY2VBcnJheTogc3RyaW5nW10sIGxlbmd0aDogbnVtYmVyKTogc3RyaW5nW10gPT4ge1xuICAgICAgICAvL2J1aWxkIGFycmF5IHdpdGggcmFuZG9tIGl0ZW1zIHVzaW5nIHZhbGlkU2xvdEl0ZW1zXG4gICAgICAgIC8vYXJndW1lbnQgMCAtIGFycmF5IHdoZXJlIGZyb20gdG8gZ2V0IGl0ZW1zIHRvIHJhbmRvbWl6ZVxuICAgICAgICAvL2FyZ3VtZW50IDEgLSByYW5kb20gYXJyYXkgbGVuZ3RoXG4gICAgICAgIC8vcmV0dW5zIG5ldyByYW5kb20gYXJyYXlcblxuICAgICAgICBsZXQgdGVtcEFycmF5OiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh2YWxpZFNsb3RJdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFNsb3RJdGVtcy5sZW5ndGgpXSlcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkUmVlbCA9IChudW1iZXJPZkFycmF5czogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgIC8vYnVpbGQgYXJyYXkgZm9yIHJlZWxzXG4gICAgICAgIC8vYXJndW1lbnQgMCAtIG51bWJlciBvZiByZWVscyB0byBidWlsZFxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBudW1iZXJPZkZyYW1lcyA9IDIwO1xuICAgICAgICBjb25zdCBmcmFtZXNJbmNyZW1lbnQgPSA1O1xuXG4gICAgICAgIHdoaWxlIChpIDwgbnVtYmVyT2ZBcnJheXMpIHtcbiAgICAgICAgICAgIHJlZWxBcnJheVtpXSA9IGJ1aWxkUmFuZG9tQXJyYXkodmFsaWRTbG90SXRlbXMsIG51bWJlck9mRnJhbWVzKTtcbiAgICAgICAgICAgIC8vYWRkaW5nIGZyYW1lcyB0byBuZXh0IHJlZWwgdG8gbWFrZSBpdCBzdG9wIGNvbnNpc3RlbnRseSwgb25lIGJ5IG9uZSxcbiAgICAgICAgICAgIC8vd2hpbGUga2VlcGluZyBhbG1vc3QgdGhlIHNhbWUgZnJhbWUgcmF0ZSB0byBlYWNoIG90aGVyXG4gICAgICAgICAgICBudW1iZXJPZkZyYW1lcyArPSBmcmFtZXNJbmNyZW1lbnQ7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRlUmVlbHMgPSAoKSA9PiB7XG4gICAgICAgIC8vYW5pbWF0ZSByZWVscyBmcm9tIHN0YXJ0IHRvIHRoZSBlbmRcbiAgICAgICAgY29uc3QgcmVlbHM6IEhUTUxDb2xsZWN0aW9uT2Y8RWxlbWVudD4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWVsJyk7XG4gICAgICAgIGNvbnN0IGFwcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIGNvbnN0IGFwcEhlaWdodDogbnVtYmVyID0gYXBwLmNsaWVudEhlaWdodDtcbiAgICAgICAgLy9saXN0ZW4gZm9yIGFudGltYXRpb24gc3RvcHMsIHRvIGVuYWJsZSBzcGluIGJ1dHRvblxuICAgICAgICByZWVsc1tyZWVscy5sZW5ndGggLSAxXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgc3BpbkJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICAvL2FuaW1hdGlvbiBnb2VzIGhlcmVcbiAgICAgICAgWy4uLnJlZWxzXS5mb3JFYWNoKChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRIZWlnaHQ6IG51bWJlciA9IGVsLmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgIC8vcmVzZXQgcG9zaXRpb24gdG8gc3RhcnRcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNpdGlvbjogbm9uZTsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKDAsIDB9cHgpXCIpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYHRyYW5zaXRpb246IGVhc2Utb3V0ICR7KGVsZW1lbnRIZWlnaHQgLSBhcHBIZWlnaHQpIC8gMTAwMH1zOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtJHtlbGVtZW50SGVpZ2h0IC0gYXBwSGVpZ2h0fXB4KWApXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVhZEN1cnJlbnRTbG90cyA9ICgpID0+IHtcbiAgICAgICAgLy9yZXR1cm5zIG5ldyBhcnJheSB3aXRoIGl0ZW1zIHRoYXQgY3VycmVudGx5IHNob3duXG4gICAgICAgIGxldCB0ZW1wID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZSZWVsczsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNsb3RzU2hvd25QZXJSZWVsOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wLnB1c2gocmVlbEFycmF5W2pdW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICBjb25zdCBnYXRoZXJIVE1MUmVlbCA9IChzb3VyY2U6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcbiAgICAgICAgLy9CdWlsZCBIVE1MIGZvciBvbmUgcmVlbFxuICAgICAgICAvL2FyZ3VtZW50IDAgLSByYW5kb20gYXJyYXkgdG8gZ2V0IGNsYXNzIG5hbWVzIGZvciBpbWFnZXMgaW4gc2xvdHNcbiAgICAgICAgLy9yZXR1cm5zIGh0bWwgdWwgbGlzdFxuICAgICAgICBsZXQgdGVtcFN0cmluZzogc3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc291cmNlKSB7XG4gICAgICAgICAgICB0ZW1wU3RyaW5nICs9IGA8bGkgY2xhc3M9XCJzbG90XCI+PGRpdiBjbGFzcz1cInF1ZXN0aW9uICR7aXRlbX1cIj48L2Rpdj48L2xpPmBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDx1bCBjbGFzcz1cInJlZWxcIj4ke3RlbXBTdHJpbmd9PC91bD5gXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyUmVlbCA9ICgpID0+IHtcbiAgICAgICAgLy9BcHBseSBuZXcgSFRNTCB0byBET01cbiAgICAgICAgbGV0IHRlbXBIVE1MOiBzdHJpbmcgPSBnYXRoZXJIVE1MUmVlbChyZWVsQXJyYXlbMF0pICsgZ2F0aGVySFRNTFJlZWwocmVlbEFycmF5WzFdKSArIGdhdGhlckhUTUxSZWVsKHJlZWxBcnJheVsyXSk7XG4gICAgICAgIGNvbnN0IGFwcDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gICAgICAgIGFwcC5pbm5lckhUTUwgPSB0ZW1wSFRNTDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50U2xvdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIC8vcmVhZCBzbG90cyBvbiBhcHAgc3RhcnQgYW5kIHNhdmUgdG8gaW5wdXRzXG4gICAgICAgIFsuLi5pbnB1dHNdLmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgZWwudmFsdWUgPSBjdXJyZW50SXRlbXNbaV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEN1cnJlbnRTbG90cyA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgLy9yZWFkIHZhbHVlcyBmcm9tIGFsbCBuaW5lIGlucHV0cyBhbmQgc2F2ZSB0aGVtIHRvIHRoZSBlbmQgb2YgZWFjaCByZWVsXG4gICAgICAgIFsuLi5pbnB1dHNdLmZvckVhY2goKGVsOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMykge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSByZWVsQXJyYXlbaWR4XS5sZW5ndGggLSAzO1xuICAgICAgICAgICAgICAgIHJlZWxBcnJheVtpZHhdW251bV0gPSBlbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgzIDw9IGlkeCAmJiBpZHggPCA2KSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaWR4IC0gMztcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gcmVlbEFycmF5W2luZGV4XS5sZW5ndGggLSAyO1xuICAgICAgICAgICAgICAgIHJlZWxBcnJheVtpbmRleF1bbnVtXSA9IGVsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKDYgPD0gaWR4ICYmIGlkeCA8IDkpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpZHggLSA2O1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSByZWVsQXJyYXlbaW5kZXhdLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgcmVlbEFycmF5W2luZGV4XVtudW1dID0gZWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZW5kZXJSZWVsKCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlcklucHV0cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRlbXBIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG51bWJlck9mSW5wdXRzID0gbnVtYmVyT2ZSZWVscyAqIHNsb3RzU2hvd25QZXJSZWVsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mSW5wdXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRlbXBIVE1MICs9IGA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0XCI+YDtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRzJykuaW5uZXJIVE1MID0gdGVtcEhUTUw7XG4gICAgICAgIGlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XG4gICAgfVxuXG4gICAgc3BpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9kaXNhYmxlIGJ1dHRvbiBhZnRlciBjbGljayAsIGFwcGx5IGRlc2llcmVkIHJlc3VsdCB0byBlbmQgb2YgcmVlbCBhbmQgc3RhcnQgYW5pbWF0aW9uXG4gICAgICAgIHNwaW5CdXR0b24uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgIHNldEN1cnJlbnRTbG90cygpO1xuICAgICAgICBhbmltYXRlUmVlbHMoKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcklucHV0cygpO1xuICAgIGJ1aWxkUmVlbChudW1iZXJPZlJlZWxzKTtcbiAgICBjdXJyZW50SXRlbXMgPSByZWFkQ3VycmVudFNsb3RzKCk7XG4gICAgcmVuZGVyUmVlbCgpO1xuICAgIGdldEN1cnJlbnRTbG90cygpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIyMzdiZWNhNTcyOWQ4MzNjMzNjZTRmOTFkMGYzYTliNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhM2Q0M2I2OWMyZjdhMTgwOTEzNDliOGM2YmI2NTI3NS5wbmdcIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9