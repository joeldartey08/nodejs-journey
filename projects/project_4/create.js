//create a json file in an asyc way

const fs = require("fs");

const user = {
    name: "Joel Dartey",
    age: 21,
    skill: ["Reactjs, Typescript,Nodejs"]
}

const create = fs.writeFile("user.json", JSON.stringify(user, null, 2),(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("file created sucessfully");
    }
});

module.exports = fs;