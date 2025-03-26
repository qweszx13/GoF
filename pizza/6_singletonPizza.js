var OvenManager = /** @class */ (function () {
    function OvenManager() {
    }
    OvenManager.getInstance = function () {
        if (!OvenManager.instance) {
            OvenManager.instance = new OvenManager();
        }
        return OvenManager.instance;
    };
    OvenManager.prototype.bake = function (pizzaName) {
        console.log("Baking ".concat(pizzaName, " in the shared oven"));
    };
    return OvenManager;
}());
var oven = OvenManager.getInstance();
oven.bake('Cheese Pizza');
// シングルトンの使用例
console.log("1回目のオーブン取得:");
var oven1 = OvenManager.getInstance();
oven1.bake('チーズピザ');
console.log("\n2回目のオーブン取得:");
var oven2 = OvenManager.getInstance();
oven2.bake('ペパロニピザ');
console.log("\noven1 と oven2 が同じインスタンスかチェック:");
console.log(oven1 === oven2);
