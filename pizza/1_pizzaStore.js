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
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        if (type === 'cheese') {
            pizza = new Pizza('Cheese Pizza', ['cheese']);
        }
        else if (type === 'pepperoni') {
            pizza = new Pizza('Pepperoni Pizza', ['pepperoni', 'cheese']);
        }
        else if (type === 'potato') {
            pizza = new Pizza('Potato Pizza', ['Potato', 'cheese', 'mayo']);
        }
        else {
            console.log('Unsupported pizza type');
        }
        pizza.prepare();
        pizza.bake();
        return pizza;
    };
    return PizzaStore;
}());
var dongPizzaStore = new PizzaStore;
console.log(dongPizzaStore.orderPizza('cheese'));
console.log(dongPizzaStore.orderPizza('pepperoni'));
console.log(dongPizzaStore.orderPizza('potato'));
