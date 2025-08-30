/**
 * async way of creating,deleting and updating file
 * 
 */
const { error } = require("console");
const fs = require("fs");

//used to create a file asychronously
const createFile = fs.writeFile("text.txt", "hello word!", (error)=>{
    if (error) {
        console.log("file creation error", error);
    }else{
        console.log("file creation succesfull");
    }

})

//used to add content to a file asychronously
fs.appendFile("text.txt", " Asychronous file creation methods we are learning now", (error)=>{
     if (error) {
        console.log("file creation error");
    }else{
        console.log("file appended succesfully");
    }
})

// used to return a file the callback function returns data or error, if data exist then error is null and vice-versa
fs.readFile("text.txt",{encoding: "utf-8"}, (error, data)=>{
    if (!error) {
        console.log(data)
        
    } else {
       console.log("cannot read data..") 
    }
})

//used to delete a file asychronously
fs.unlink("jab.js",(error)=>{
    if (!error) {
        console.log("jab.js was successfully deleted")
    }
})