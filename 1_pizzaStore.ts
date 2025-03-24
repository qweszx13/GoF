//３種類ピザを販売するピザ屋さん
class CheesePizza {
  prepare() { console.log('チーズピザ準備') }
  bake() { console.log('200℃ 15分 ベイク') }
}

class PepperoniPizza {
  prepare() { console.log('ペパーローにピザ準備') }
  bake() { console.log('200℃ 10分 ベイク') }
}

class GorgonzolaPizza {
  prepare() { console.log('ゴルゴンゾーラピザ準備') }
  bake() { console.log('200℃ 12分 ベイク') }
}

class PizzaStore {
  orderPizza(type: string) {
    let pizza;
    if(type === 'cheese') {
      pizza = new CheesePizza();
    }else if(type === 'pepperoni') {
      pizza = new PepperoniPizza();
    }else if(type === 'gorgonzola') {
      pizza = new GorgonzolaPizza();
    }else {
      console.log('その商品は存在しません',);
    }
    pizza.prepare();
    pizza.bake();
    console.log(type, 'pizza 完成！', '\n');
    return pizza;
  }
}

const dongPizzaStore = new PizzaStore;

dongPizzaStore.orderPizza('cheese');
dongPizzaStore.orderPizza('pepperoni');
dongPizzaStore.orderPizza('gorgonzola');

/** 
 * 1. PizzaStore クラスがピザの種類を直接生成している
 * 2. ピザ生成ロジック、注文ロジックが一箇所にいる
 * 3. OCP(Open-Closed Principle) を守っていない
 *  →コードは拡張することはできるが、修正はなるべく少なくなる方が良い
 **/
