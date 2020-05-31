const fs = require("fs");

//const files = fs.readdirSync("./assets");

console.log("started reading files...");

fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
  console.log("complete");
});
