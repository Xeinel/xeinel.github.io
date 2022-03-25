import { quoteRandom } from "./quoteRandom.js";
document.getElementById("quote").innerHTML = quoteRandom()[0];
document.getElementById("author").innerHTML = quoteRandom()[1];
console.log(quoteRandom());