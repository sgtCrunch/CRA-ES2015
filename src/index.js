import {choice, remove} from "./helpers.js";
import fruits from "./foods.js";

const RANDOMFRUIT = choice(fruits);
console.log(`I'd like one ${RANDOMFRUIT}, please.`);
console.log(`Here you go: ${RANDOMFRUIT}`);
console.log("Delicious! May I have another?");
const fruitsLeft = remove(fruits, RANDOMFRUIT).length;

console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`);
