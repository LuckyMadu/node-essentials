const path = require("path");

//like console.log
const util = require("util");

const route = path.join(__dirname, "www", "files", "uploads");

console.log(route);

util.log(path.basename(__filename));
util.log("hello");
