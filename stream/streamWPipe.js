const fs = require("fs");

const readFile = fs.createReadStream("./output.txt");
const writeFile = fs.createWriteStream("./6mb-examplefile-com.txt");


readFile.pipe(writeFile);