/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// todo
// 1. Select two elements (button, hint)
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");
// 2. Listen to a click 
button.addEventListener("click", () => {
  // 3. Change the DOM (add the class active)
  hint.classList.add("active");
});

const isNextToEmpty = (emptyTile, clickedTile) => {
  // some stuff here
  // get the xe/ye of empty and xc/yc clicked
  const emptyX = emptyTile.cellIndex; // x pos
  const emptyY = emptyTile.parentElement.rowIndex;

  const clickedX = clickedTile.cellIndex; // x pos
  const clickedY = clickedTile.parentElement.rowIndex; // row index should be used on a "row"
  // if (Math.abs(xe-xc) + Math.abs(ye-yc) == 1)
  // that's already a boolean!
  return (Math.abs(emptyX-clickedX) + Math.abs(emptyY-clickedY) === 1);
};

const swapTiles = (emptyTile, clickedTile) => {
  emptyTile.classList.remove("empty");
  clickedTile.classList.add("empty");
  emptyTile.innerText = clickedTile.innerText;
  clickedTile.innerText = "";
}

const doWeWin = (tiles) => {
  const winningCombi = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,";
  const actualCombi = [];
  tiles.forEach((tile) => {
    actualCombi.push(tile.innerText);
  });

  return winningCombi === actualCombi.join();
}

// Select all tiles
const tiles = document.querySelectorAll("td");
// nodelist iterate over the list
tiles.forEach((tile) => {
  // 1 listen for click on each of the tiles
  tile.addEventListener("click", (event) => {
    // 2 check if the empty tile is next to the clicked tile
    // create a function 
    // (name: isNextToEmpty, params: emptyTile, clickedTile, return: true/false)
    const emptyTile = document.querySelector(".empty");
    const clickedTile = event.currentTarget;
    if (isNextToEmpty(emptyTile, clickedTile)) {
      // 3 swap the tile
      swapTiles(emptyTile, clickedTile);
      // 4 when the list is ordered by asc display WIN
      if (doWeWin(tiles)) {
        alert("You won!");
      }
    }
  });
});
//

/***/ })

/******/ });
//# sourceMappingURL=main.js.map