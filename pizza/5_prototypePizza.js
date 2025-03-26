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
// プロトタイプ用抽象クラス ★ここがプロトタイプパターンの核★
var PrototypePizza = /** @class */ (function (_super) {
    __extends(PrototypePizza, _super);
    function PrototypePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PrototypePizza;
}(Pizza));
// シグネチャーピザクラス
var SignaturePizza = /** @class */ (function (_super) {
    __extends(SignaturePizza, _super);
    function SignaturePizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // クローンメソッドの実装
    SignaturePizza.prototype.clone = function () {
        return Object.create(this); // オブジェクトの深いコピーを生成
    };
    return SignaturePizza;
}(PrototypePizza));
var originalSignature = new SignaturePizza('Signature Deluxe', ['truffle oil', 'parmesan']);
var clonedSignature = originalSignature.clone();
// オリジナルの処理
console.log('== オリジナルピザ ==');
originalSignature.prepare();
originalSignature.bake();
// クローンの処理
console.log('\n== クローンピザ ==');
clonedSignature.prepare();
clonedSignature.bake();
