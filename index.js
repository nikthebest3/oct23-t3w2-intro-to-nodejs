require('dotenv').config();
// The above is the equivalent to the next two lines:

const pokemonPrinterFile = require("./pokemonPrinter");



console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("Terminal app is running!");

pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app finished!");
