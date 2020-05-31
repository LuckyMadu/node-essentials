const fs = require("fs");

// const text = fs.readFileSync("./assets/Readme.md", "UTF-8");

fs.readFileSync("./assets/Readme.md", "UTF-8", (err, text) => {
  if (err) {
    throw err;
  }
  console.log(text);
});
