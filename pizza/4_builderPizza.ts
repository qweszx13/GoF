class Pizza {
  constructor(public name: string, public ingredients: string[]) {}

  prepare() {
    console.log(`Preparing ${this.name} with ingredients: ${this.ingredients.join(', ')}`);
  }

  bake() {
    console.log(`Baking ${this.name}`);
  }
}

type Size = "large"|"medium"
type Ingredient = "pepperoni"|"mushrooms"|"pineapple"

// ビルダークラス：段階的なピザ作成を管理
class PizzaBuilder {
  private name = '';
  private ingredients: Ingredient[] = [];
  private size:Size = 'medium';

  // ピザ名設定メソッド
  setName(name: string) {
    this.name = name;
    return this;
  }

  // 材料追加メソッド
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    return this;
  }

  // サイズ設定メソッド
  setSize(size: Size) {
    this.size = size;
    return this;
  }

   // 最終組み立てメソッド（ビルダーの核）
  build(): Pizza {
    return new Pizza(`${this.size} ${this.name}`, this.ingredients);
  }
}


const customPizza = new PizzaBuilder()
  .setName('Custom Supreme')
  .addIngredient('pepperoni')
  .addIngredient('pepperoni')
  .addIngredient('pepperoni')
  .addIngredient('mushrooms')
  .setSize('large')
  .build();

customPizza.prepare();
customPizza.bake();

export {}