// Load external resources
const { prepareString } = require('./formatting');
const { showHelp } = require('./messaging');
const { getTimeData } = require("./lib/client");
const { version, name } = require("./package.json");

// Handle input
let result = '';
const args = process.argv.slice(2);
console.log("args are " + args);

if (args.includes('--help')) {
  showHelp();
}

// input goes to formatting.js then gets returned back here
console.log(args);
// map over arg-array calling PrepareString
result = args.map(inputArgs => prepareString(inputArgs));
console.log("result is " + result);

// just testing

// console.log(prepareString('kuala  lumpur'));
// console.log(prepareString('  puerto rico'));
// console.log(prepareString(' tokyo'));

console.log(result);
console.log("args are : " + result);
if (args.includes("--help")) {
  console.log(`
Thanks for using ${name} 🎉
version: ${version}

You need to provide at least two args your area (continent) and a valid city.

Use --options to see available args.
  `);
  process.exit();
}

if (args.includes("--option")) {
  getTimeData()
    .then(data => {
      return data.reduce((acc, curr) => {
        const [area, city] = curr.split("/");
        acc.push({ area, city });
        return acc;
      }, []);
    })
    .then(data => {
      data.forEach(entry => {
        console.log(entry);
      });
      process.exit();
    });
}
// see line 19, result is an array of two args
getTimeData(result[0], result[1]).then(data => {
  switch (args[2]) {
    case "--unix":
      return console.log(data["unixtime"]);
    case "--currentWeek":
      return console.log(data["week_number"]);
    case "--dayOfTheYear":
      return console.log(data["day_of_year"]);
    default:
      return console.log(data["datetime"]);
  }
  process.exit();
});