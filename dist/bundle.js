/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factoryMethod/Bow.ts":
/*!**********************************!*\
  !*** ./src/factoryMethod/Bow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return "ズバッ";
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/factoryMethod/Factory.ts":
/*!**************************************!*\
  !*** ./src/factoryMethod/Factory.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        var creatable = this.isCreatable(name);
        if (creatable) {
            var item = this.createItem(name);
            this.postProcessItem(name);
            return item;
        }
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factoryMethod/Shield.ts":
/*!*************************************!*\
  !*** ./src/factoryMethod/Shield.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return "ガキン~";
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/factoryMethod/Sword.ts":
/*!************************************!*\
  !*** ./src/factoryMethod/Sword.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return "雷の呼吸１の方霹靂一戦！";
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


/***/ }),

/***/ "./src/factoryMethod/itemFactory.ts":
/*!******************************************!*\
  !*** ./src/factoryMethod/itemFactory.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/factoryMethod/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/factoryMethod/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/factoryMethod/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/factoryMethod/Sword.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () { return this._maxCount; },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this.maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable)
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.respository = new Map();
        _this.respository.set("sword", new ItemCount(3));
        _this.respository.set("shield", new ItemCount(5));
        _this.respository.set("bow", new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreatable = function (name) {
        var ItemCount = this.respository.get(name);
        return ItemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        var result = null;
        if (name === "sword")
            result = new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        else if (name === "shield")
            result = new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        else if (name === "bow")
            result = new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
        return result;
    };
    ItemFactory.prototype.postProcessItem = function (name) {
        var itemCount = this.respository.get(name);
        itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/factoryMethod/index.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemFactory */ "./src/factoryMethod/itemFactory.ts");

//Factory使用
var factory = new _itemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
console.log(domOutput);
console.log(buttons);
buttons.forEach(function (button) { return button.addEventListener("click", function (event) {
    var itemName = event.target.innerText;
    var item = factory.create(itemName);
    if (item) {
        domOutput.value += "\n".concat(item.use());
    }
    else {
        domOutput.value += "\n".concat(itemName, "\u3092\u4F7F\u3044\u5207\u3063\u3061\u3083\u3044\u307E\u3057\u305F...");
    }
    domOutput.scrollTop = domOutput.scrollHeight;
}); });

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1NBQU0sQ0FBQztRQUNOLFNBQVMsQ0FBQyxLQUFLLElBQUksWUFBSyxRQUFRLDBFQUFnQjtJQUNsRCxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQy9DLENBQUMsQ0FBQyxFQVh3QixDQVd4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29mLy4vc3JjL2ZhY3RvcnlNZXRob2QvQm93LnRzIiwid2VicGFjazovL2dvZi8uL3NyYy9mYWN0b3J5TWV0aG9kL0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ29mLy4vc3JjL2ZhY3RvcnlNZXRob2QvU2hpZWxkLnRzIiwid2VicGFjazovL2dvZi8uL3NyYy9mYWN0b3J5TWV0aG9kL1N3b3JkLnRzIiwid2VicGFjazovL2dvZi8uL3NyYy9mYWN0b3J5TWV0aG9kL2l0ZW1GYWN0b3J5LnRzIiwid2VicGFjazovL2dvZi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2Yvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvZi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvZi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvZi8uL3NyYy9mYWN0b3J5TWV0aG9kL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm93IGltcGxlbWVudHMgSXRlbSB7XG4gIHVzZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIuOCuuODkOODg1wiXG4gIH1cbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCB0eXBlIEl0ZW1OYW1lID0gXCJzd29yZFwifFwic2hpZWxkXCJ8XCJib3dcIlxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBGYWN0b3J5IHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGlzQ3JlYXRhYmxlKG5hbWU6IEl0ZW1OYW1lKTogYm9vbGVhblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlSXRlbShuYW1lOiBJdGVtTmFtZSk6IEl0ZW1cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvc3RQcm9jZXNzSXRlbShuYW1lOiBJdGVtTmFtZSk6IHZvaWRcbiBcbiAgY3JlYXRlKG5hbWU6IEl0ZW1OYW1lKTogSXRlbSB7XG4gICAgY29uc3QgY3JlYXRhYmxlID0gdGhpcy5pc0NyZWF0YWJsZShuYW1lKTtcbiAgICBpZihjcmVhdGFibGUpe1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbShuYW1lKTtcbiAgICAgIHRoaXMucG9zdFByb2Nlc3NJdGVtKG5hbWUpO1xuICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaWVsZCBpbXBsZW1lbnRzIEl0ZW0ge1xuICB1c2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCLjgqzjgq3jg7N+XCJcbiAgfVxufSIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dvcmQgaW1wbGVtZW50cyBJdGVtIHtcbiAgdXNlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwi6Zu344Gu5ZG85ZC477yR44Gu5pa56Zy56Z2C5LiA5oim77yBXCJcbiAgfVxufSIsImltcG9ydCBCb3cgZnJvbSBcIi4vQm93XCI7XG5pbXBvcnQgRmFjdG9yeSwgeyBJdGVtTmFtZSB9IGZyb20gXCIuL0ZhY3RvcnlcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuaW1wb3J0IFNoaWVsZCBmcm9tIFwiLi9TaGllbGRcIjtcbmltcG9ydCBTd29yZCBmcm9tIFwiLi9Td29yZFwiO1xuXG5jbGFzcyBJdGVtQ291bnQge1xuICBwcml2YXRlIF9jdXJyZW50Q291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX21heENvdW50OiBudW1iZXIpIHt9XG5cbiAgZ2V0IG1heENvdW50KCkgeyByZXR1cm4gdGhpcy5fbWF4Q291bnQgfVxuICBcbiAgaXNDcmVhdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDb3VudCA8IHRoaXMubWF4Q291bnRcbiAgfVxuXG4gIGluY3JlYXNlQ291bnQoKTogdm9pZCB7XG4gICAgaWYodGhpcy5pc0NyZWF0YWJsZSkgdGhpcy5fY3VycmVudENvdW50Kys7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUZhY3RvcnkgZXh0ZW5kcyBGYWN0b3J5e1xuICBwcm90ZWN0ZWQgaXNDcmVhdGFibGUobmFtZTogSXRlbU5hbWUpOiBib29sZWFuIHtcbiAgICBjb25zdCBJdGVtQ291bnQgPSB0aGlzLnJlc3Bvc2l0b3J5LmdldChuYW1lKTtcbiAgICByZXR1cm4gSXRlbUNvdW50LmlzQ3JlYXRhYmxlKCk7XG4gIH1cbiAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtIHtcbiAgICBsZXQgcmVzdWx0OiBJdGVtID0gbnVsbFxuICAgIFxuICAgIGlmKG5hbWUgPT09IFwic3dvcmRcIikgcmVzdWx0ID0gbmV3IFN3b3JkKCk7XG4gICAgZWxzZSBpZihuYW1lID09PSBcInNoaWVsZFwiKSByZXN1bHQgPSBuZXcgU2hpZWxkKCk7XG4gICAgZWxzZSBpZihuYW1lID09PSBcImJvd1wiKSByZXN1bHQgPSBuZXcgQm93KCk7XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgcHJvdGVjdGVkIHBvc3RQcm9jZXNzSXRlbShuYW1lOiBJdGVtTmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW1Db3VudCA9IHRoaXMucmVzcG9zaXRvcnkuZ2V0KG5hbWUpO1xuICAgIGl0ZW1Db3VudC5pbmNyZWFzZUNvdW50KCk7XG4gIH1cbiAgcHJpdmF0ZSByZXNwb3NpdG9yeSA9IG5ldyBNYXA8SXRlbU5hbWUsIEl0ZW1Db3VudD4oKVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMucmVzcG9zaXRvcnkuc2V0KFwic3dvcmRcIiwgbmV3IEl0ZW1Db3VudCgzKSk7XG4gICAgdGhpcy5yZXNwb3NpdG9yeS5zZXQoXCJzaGllbGRcIiwgbmV3IEl0ZW1Db3VudCg1KSk7XG4gICAgdGhpcy5yZXNwb3NpdG9yeS5zZXQoXCJib3dcIiwgbmV3IEl0ZW1Db3VudCgyKSk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEl0ZW1OYW1lIH0gZnJvbSBcIi4vRmFjdG9yeVwiO1xuaW1wb3J0IEl0ZW1GYWN0b3J5IGZyb20gXCIuL2l0ZW1GYWN0b3J5XCI7XG5cbi8vRmFjdG9yeeS9v+eUqFxuY29uc3QgZmFjdG9yeSA9IG5ldyBJdGVtRmFjdG9yeSgpXG5cbmNvbnN0IGRvbU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG5jb25zb2xlLmxvZyhkb21PdXRwdXQpO1xuY29uc29sZS5sb2coYnV0dG9ucyk7XG5cbmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgaXRlbU5hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5pbm5lclRleHRcblxuICBjb25zdCBpdGVtID0gZmFjdG9yeS5jcmVhdGUoaXRlbU5hbWUgYXMgSXRlbU5hbWUpXG4gIGlmKGl0ZW0pIHtcbiAgICBkb21PdXRwdXQudmFsdWUgKz0gYFxcbiR7aXRlbS51c2UoKX1gXG4gIH0gZWxzZSB7XG4gICAgZG9tT3V0cHV0LnZhbHVlICs9IGBcXG4ke2l0ZW1OYW1lfeOCkuS9v+OBhOWIh+OBo+OBoeOCg+OBhOOBvuOBl+OBny4uLmBcbiAgfVxuXG4gIGRvbU91dHB1dC5zY3JvbGxUb3AgPSBkb21PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xufSkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9