class Pizza {
  constructor(public name: string, public ingredients: string[]) {}

  prepare() {
    console.log(`Preparing ${this.name} with ingredients: ${this.ingredients.join(', ')}`);
  }

  bake() {
    console.log(`Baking ${this.name}`);
  }
}

// プロトタイプ用抽象クラス ★ここがプロトタイプパターンの核★
abstract class PrototypePizza extends Pizza {
  abstract clone(): PrototypePizza;
}

// シグネチャーピザクラス
class SignaturePizza extends PrototypePizza {
  // クローンメソッドの実装
  clone(): SignaturePizza {
    return Object.create(this); // オブジェクトの深いコピーを生成
  }
}

const originalSignature = new SignaturePizza('Signature Deluxe', ['truffle oil', 'parmesan']);
const clonedSignature = originalSignature.clone();

// オリジナルの処理
console.log('== オリジナルピザ ==');
originalSignature.prepare();
originalSignature.bake();

// クローンの処理
console.log('\n== クローンピザ ==');
clonedSignature.prepare();
clonedSignature.bake();

export {}
