import { ItemName } from "./Factory";
import ItemFactory from "./ItemFactory";

const factory = new ItemFactory()

const domOutput = document.querySelector("textarea");
const buttons = document.querySelectorAll("button");

console.log(domOutput);
console.log(buttons);

buttons.forEach(button => button.addEventListener("click", (event) => {
  const itemName = (event.target as HTMLElement).innerText

  const item = factory.create(itemName as ItemName)
  if(item) {
    domOutput.value += `\n${item.use()}`
  } else {
    domOutput.value += `\n${itemName}を使い切っちゃいました...`
  }

  domOutput.scrollTop = domOutput.scrollHeight;
}))