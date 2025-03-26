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
// 抽象クラス: ピザストア
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    // テンプレートメソッド: ピザ注文の一般的なプロセスを定義
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        return pizza;
    };
    return PizzaStore;
}());
//ニューヨークファクトリー
var NewyorkPizzaStore = /** @class */ (function (_super) {
    __extends(NewyorkPizzaStore, _super);
    function NewyorkPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewyorkPizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new Pizza('Newyork Style Cheese Pizza', ['thin crust', 'cheese']);
        }
        else if (type === 'pepperoni') {
            return new Pizza('Newyork Style Pepperoni Pizza', ['thin crust', 'pepperoni', 'cheese']);
        }
        else {
            throw new Error('Unsupported pizza type');
        }
    };
    return NewyorkPizzaStore;
}(PizzaStore));
//シカゴファクトリー
var ChicagoPizzaStore = /** @class */ (function (_super) {
    __extends(ChicagoPizzaStore, _super);
    function ChicagoPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChicagoPizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new Pizza('Chicago Deep Dish Cheese Pizza', ['deep dish crust', 'cheese']);
        }
        else if (type === 'pepperoni') {
            return new Pizza('Chicago Deep Dish Pepperoni Pizza', ['deep dish crust', 'pepperoni', 'cheese']);
        }
        else {
            throw new Error('Unsupported pizza type');
        }
    };
    return ChicagoPizzaStore;
}(PizzaStore));
// 結果確認のためのコード
var nyStore = new NewyorkPizzaStore();
var chicagoStore = new ChicagoPizzaStore();
console.log("ニューヨークスタイルのチーズピザを注文します:");
console.log(nyStore.orderPizza('cheese'));
console.log(nyStore.orderPizza('pepperoni'));
console.log("\nシカゴスタイルのペパロニピザを注文します:");
console.log(chicagoStore.orderPizza('pepperoni'));
