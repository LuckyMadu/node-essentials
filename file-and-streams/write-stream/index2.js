const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myfile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

readStream.on("data", (data) => {
  writeStream.write(data);
});

//same as above operation
//readStream.pipe(writeStream);
