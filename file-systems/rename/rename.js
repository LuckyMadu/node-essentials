const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorsNew.json");

//move files
fs.rename("./assets/notes.md", "./storage/notes.md", (err) => {
  if (err) throw err;
});

setTimeout(() => {
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);
