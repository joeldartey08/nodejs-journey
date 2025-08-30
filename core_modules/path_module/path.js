// to learn more visit nodejs website
let path = require("path");

let myPath = "C:/Users/XFIIXX INNOVATIONS/Desktop/nodejs/core_modules/path_module/path.js";

let dir_name = path.dirname(myPath);
let base_name = path.basename(myPath);
let ext_name = path.extname(myPath);
console.log(path.parse(myPath))