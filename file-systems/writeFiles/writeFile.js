const fs = require("fs");

const md = `
#this is new file

we can write content.

*
*
*
`;

if (fs.existsSync("./assets/storage")) {
  console.log("already have");
} else {
  fs.mkdir("./assets/storage", (err) => {
    if (err) throw err;

    console.log("directory created");
  });

  fs.writeFile("./assets/storage/notes.md", md.trim(), (err) => {
    if (err) throw err;

    console.log("file saved");
  });
}
