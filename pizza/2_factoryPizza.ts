class Pizza {
  constructor(public name: string, public ingredients: string[]) {}

  prepare() {
    console.log(`準備： ${this.name} - 材料: ${this.ingredients.join(', ')}`);
  }

  bake() {
    console.log(`焼きます！ - ${this.name}`);
  }
}

// 抽象クラス: ピザストア(設計図)
abstract class PizzaStore {
  // ファクトリメソッド: ピザの生成をサブクラスに任せる
  abstract createPizza(type: string): Pizza;

  // テンプレートメソッド: ピザ注文の一般的なプロセスを定義
  orderPizza(type: string): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    return pizza;
  }
}

//ニューヨークファクトリー
class NewyorkPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new Pizza('Newyork Style Cheese Pizza', ['thin crust', 'cheese']);
    } else if (type === 'pepperoni') {
      return new Pizza('Newyork Style Pepperoni Pizza', ['thin crust', 'pepperoni', 'cheese']);
    } else {
      throw new Error('Unsupported pizza type');
    }
  }
}

//シカゴファクトリー
class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    if (type === 'cheese') {
      return new Pizza('Chicago Deep Dish Cheese Pizza', ['deep dish crust', 'cheese']);
    } else if (type === 'pepperoni') {
      return new Pizza('Chicago Deep Dish Pepperoni Pizza', ['deep dish crust', 'pepperoni', 'cheese']);
    } else {
      throw new Error('Unsupported pizza type');
    }
  }
}

// 結果確認のためのコード
const nyStore = new NewyorkPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

console.log("ニューヨークスタイルのチーズピザを注文します:");
console.log(nyStore.orderPizza('cheese'));
console.log(nyStore.orderPizza('pepperoni'));

console.log("\nシカゴスタイルのペパロニピザを注文します:");
console.log(chicagoStore.orderPizza('pepperoni'));

export {}
