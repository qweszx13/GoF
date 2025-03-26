"use strict";
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
// ビルダークラス：段階的なピザ作成を管理
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this.name = '';
        this.ingredients = [];
        this.size = 'medium';
    }
    // ピザ名設定メソッド
    PizzaBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    // 材料追加メソッド
    PizzaBuilder.prototype.addIngredient = function (ingredient) {
        this.ingredients.push(ingredient);
        return this;
    };
    // サイズ設定メソッド
    PizzaBuilder.prototype.setSize = function (size) {
        this.size = size;
        return this;
    };
    // 最終組み立てメソッド（ビルダーの核）
    PizzaBuilder.prototype.build = function () {
        return new Pizza("".concat(this.size, " ").concat(this.name), this.ingredients);
    };
    return PizzaBuilder;
}());
var customPizza = new PizzaBuilder()
    .setName('Custom Supreme')
    .addIngredient('pepperoni')
    .addIngredient('pepperoni')
    .addIngredient('pepperoni')
    .addIngredient('mushrooms')
    .setSize('large')
    .build();
customPizza.prepare();
customPizza.bake();
