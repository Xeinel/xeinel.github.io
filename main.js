import { quoteRandom } from "./quoteRandom.js";
const toto = quoteRandom();
document.getElementById("quote").innerHTML = toto[0];
document.getElementById("author").innerHTML = toto[1];