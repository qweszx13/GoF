//３種類ピザを販売するピザ屋さん
var CheesePizza = /** @class */ (function () {
    function CheesePizza() {
    }
    CheesePizza.prototype.prepare = function () { console.log('チーズピザ準備'); };
    CheesePizza.prototype.bake = function () { console.log('200℃ 15分 ベイク'); };
    return CheesePizza;
}());
var PepperoniPizza = /** @class */ (function () {
    function PepperoniPizza() {
    }
    PepperoniPizza.prototype.prepare = function () { console.log('ペパーローにピザ準備'); };
    PepperoniPizza.prototype.bake = function () { console.log('200℃ 10分 ベイク'); };
    return PepperoniPizza;
}());
var GorgonzolaPizza = /** @class */ (function () {
    function GorgonzolaPizza() {
    }
    GorgonzolaPizza.prototype.prepare = function () { console.log('ゴルゴンゾーラピザ準備'); };
    GorgonzolaPizza.prototype.bake = function () { console.log('200℃ 12分 ベイク'); };
    return GorgonzolaPizza;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new CheesePizza();
        }
        else if (type === 'pepperoni') {
            pizza = new PepperoniPizza();
        }
        else if (type === 'gorgonzola') {
            pizza = new GorgonzolaPizza();
        }
        else {
            console.log('その商品は存在しません');
        }
        pizza.prepare();
        pizza.bake();
        console.log(type, 'pizza 完成！', '\n');
        return pizza;
    };
    return PizzaStore;
}());
var dongPizzaStore = new PizzaStore;
dongPizzaStore.orderPizza('cheese');
dongPizzaStore.orderPizza('pepperoni');
dongPizzaStore.orderPizza('gorgonzola');
