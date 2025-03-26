class OvenManager {
  private static instance: OvenManager;

  private constructor() {}

  static getInstance(): OvenManager {
    if (!OvenManager.instance) {
      OvenManager.instance = new OvenManager();
    }
    return OvenManager.instance;
  }

  bake(pizzaName: string) {
    console.log(`Baking ${pizzaName} in the shared oven`);
  }
}

const oven = OvenManager.getInstance();
oven.bake('Cheese Pizza');

// シングルトンの使用例
console.log("1回目のオーブン取得:");
const oven1 = OvenManager.getInstance();
oven1.bake('チーズピザ');

console.log("\n2回目のオーブン取得:");
const oven2 = OvenManager.getInstance();
oven2.bake('ペパロニピザ');

console.log("\noven1 と oven2 が同じインスタンスかチェック:");
console.log(oven1 === oven2);
