const fs = require("fs");
const readFile = "./user.json";

fs.readFile(readFile, { encoding: "utf-8" }, (error, data) => {
  if (!error) {
    let item = JSON.parse(data);

    item.skill.push("Git and GitHub");
    console.log(item);
    fs.writeFile(readFile, JSON.stringify(item,null,2), (err)=>{
        err ? console.log(err) : console.log("appended successfully") 
    })
  } else {
    console.log(error);
  }
});
