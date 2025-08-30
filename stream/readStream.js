const fs = require("fs");

//to read a stream and this returns an emitter which is used to
const readFile = fs.createReadStream("./README.md"); // it accept two parameter the other one is optional {encoding : "utf-8"}

let content = [];

readFile.on("data", (chunk) => {
  content.push(chunk);
});

readFile.on("end", () => {
  let actual = Buffer.concat(content).toString();
  console.log(JSON.parse(actual));
});
