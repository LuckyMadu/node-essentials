const fs = require("fs");

fs.renameSync("./storage", "./storage-renamed");

//to be empty folder
fs.readdirSync("./storage-renamed", (fileName) => {
  fs.unlinkSync(`./storage-renamed/${fileName}`);
});

//remove directory
fs.rmdir("./storage-renamed", (err) => {
  if (err) throw err;
});
