const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileText = "";

console.log("Type somrthing...");
readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters`);
  fileText += data;
});

readStream.once("data", (data) => {
  console.log(data);
  console.log(`Total I read ${fileText.length - 1} characters`);
});

readStream.on("end", (data) => {
  console.log("finished");
});
