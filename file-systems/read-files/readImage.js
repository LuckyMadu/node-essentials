const fs = require("fs");

fs.readFileSync("./assets/alex.jpg", (err, img) => {
  if (err) {
    throw err;
    process.exit();
  }
  console.log(img);
});
