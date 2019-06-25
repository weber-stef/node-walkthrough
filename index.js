// load external ressourtces
const { showHelp } = require("./messaging")

// handle input
const args = process.argv.slice(2);
if (args.includes("--help")) {
  showHelp();


}
console.log(args);
