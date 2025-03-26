"use strict";
var __extends = (this && this.__extends) || (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza = /** @class */ (function () {
    function Pizza(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing ".concat(this.name, " with ingredients: ").concat(this.ingredients.join(', ')));
    };
    Pizza.prototype.bake = function () {
        console.log("Baking ".concat(this.name));
    };
    return Pizza;
}());
var NewyorkIngredientFactory = /** @class */ (function () {
    function NewyorkIngredientFactory() {
    }
    NewyorkIngredientFactory.prototype.createDough = function () { return 'Thin Crust Dough'; }; //具体的実装
    NewyorkIngredientFactory.prototype.createSauce = function () { return 'Ketyap Sauce'; }; //具体的実装
    return NewyorkIngredientFactory;
}());
var ChicagoIngredientFactory = /** @class */ (function () {
    function ChicagoIngredientFactory() {
    }
    ChicagoIngredientFactory.prototype.createDough = function () { return 'Deep Dish Dough'; }; //具体的実装
    ChicagoIngredientFactory.prototype.createSauce = function () { return 'Tomato Sauce'; }; //具体的実装
    return ChicagoIngredientFactory;
}());
// カスタムピザクラス、ピザクラスだけでは特定の形にできない！
var CustomPizza = /** @class */ (function (_super) {
    __extends(CustomPizza, _super);
    function CustomPizza(name, ingredientFactory) {
        var _this = _super.call(this, name, []) || this;
        _this.ingredientFactory = ingredientFactory;
        return _this;
    }
    // 原材料ファクトリを使用した準備処理
    // override
    CustomPizza.prototype.prepare = function () {
        var dough = this.ingredientFactory.createDough();
        var sauce = this.ingredientFactory.createSauce();
        console.log("Preparing ".concat(this.name, " with ").concat(dough, " and ").concat(sauce));
    };
    return CustomPizza;
}(Pizza));
var nyFactory = new NewyorkIngredientFactory(); //Newyork専用の具材を持って
var nyPizza = new CustomPizza("Newyork スタイルピザ", nyFactory); //Newyorkスタイルピザーを制作することができる
nyPizza.prepare();
nyPizza.bake();
console.log(nyPizza);
var chicagoFactory = new ChicagoIngredientFactory(); //Chicago専用の具材を持って
var chicagoPizza = new CustomPizza("シカゴスタイルピザ", chicagoFactory); //Chicagoスタイルピザーを制作することができる
chicagoPizza.prepare();
chicagoPizza.bake();
console.log(chicagoPizza);
