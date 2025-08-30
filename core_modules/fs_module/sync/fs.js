const fs = require("fs");

//sychrononous file creation
fs.writeFileSync("text.txt", "hello world");// create the file and adds a content
fs.appendFileSync("text.txt", " - appended text");// append content to the file
const data = fs.readFileSync("text.txt","utf-8");// read the file content note by default it returns buffer unless you add a second para of utf-8 or use toString();'
fs.unlinkSync("text.txt");// delete the file

console.log(data);

