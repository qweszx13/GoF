class Pizza {
  constructor(public name: string, public ingredients: string[]) {}

  prepare() {
    console.log(`Preparing ${this.name} with ingredients: ${this.ingredients.join(', ')}`);
  }

  bake() {
    console.log(`Baking ${this.name}`);
  }
}

// 原材料ファクトリのインターフェース
// Point - 何が来るかわからないけど形を定義しておきたい！
interface IngredientFactory {
  createDough(): string; //パン抽象メソッド
  createSauce(): string; //ソース抽象メソッド
}

class NewyorkIngredientFactory implements IngredientFactory {
  createDough() { return 'Thin Crust Dough'; } //具体的実装
  createSauce() { return 'Ketyap Sauce'; } //具体的実装
}

class ChicagoIngredientFactory implements IngredientFactory {
  createDough() { return 'Deep Dish Dough'; } //具体的実装
  createSauce() { return 'Tomato Sauce'; } //具体的実装
}

// カスタムピザクラス、ピザクラスだけでは特定の形にできない！
class CustomPizza extends Pizza {
  constructor(name: string, private ingredientFactory: IngredientFactory) {
    super(name, []);
  }
  // 原材料ファクトリを使用した準備処理
  // override
  prepare() {
    const dough = this.ingredientFactory.createDough();
    const sauce = this.ingredientFactory.createSauce();
    console.log(`Preparing ${this.name} with ${dough} and ${sauce}`);
  }
}

const nyFactory = new NewyorkIngredientFactory(); //Newyork専用の具材を持って
const nyPizza = new CustomPizza("Newyork スタイルピザ", nyFactory); //Newyorkスタイルピザーを制作することができる
nyPizza.prepare(); 
nyPizza.bake();
console.log(nyPizza);

const chicagoFactory = new ChicagoIngredientFactory(); //Chicago専用の具材を持って
const chicagoPizza = new CustomPizza("シカゴスタイルピザ", chicagoFactory); //Chicagoスタイルピザーを制作することができる
chicagoPizza.prepare(); 
chicagoPizza.bake();
console.log(chicagoPizza);

export {}
