const fs = require("fs");
let a = fs.readFileSync("./test.txt");
console.log(a.toString());
// let b = fs.writeFileSync();
console.log(fs.writeFileSync("./test.txt", 'Systum'));
