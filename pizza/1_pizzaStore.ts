class Pizza {
  constructor(public name: string, public ingredients: string[]) {}

  prepare() {
    console.log(`Preparing ${this.name} with ingredients: ${this.ingredients.join(', ')}`);
  }

  bake() {
    console.log(`Baking ${this.name}`);
  }
}

class PizzaStore {
  orderPizza(type: string): Pizza {
    let pizza;
    if (type === 'cheese') {
      pizza = new Pizza('Cheese Pizza', ['cheese']);
    } else if (type === 'pepperoni') {
      pizza = new Pizza('Pepperoni Pizza', ['pepperoni', 'cheese']);
    } else if (type === 'potato') {
      pizza = new Pizza('Potato Pizza', ['Potato', 'cheese', 'mayo']);
    } else {
      console.log('Unsupported pizza type');
    }

    pizza.prepare();
    pizza.bake();
    return pizza;
  }
}

const dongPizzaStore = new PizzaStore;

console.log(dongPizzaStore.orderPizza('cheese'));
console.log(dongPizzaStore.orderPizza('pepperoni'));
console.log(dongPizzaStore.orderPizza('potato'));
