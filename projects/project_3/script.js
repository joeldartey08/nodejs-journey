/**
 * A application that uses event and fs module to read a file
 **/
const fs = require("fs");
const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

//register the event
eventEmitter.on("read-journal", (content)=>{
    fs.readFile(content, {encoding: "utf-8"}, (error,data)=>{
        if (!error) {
            console.log(data)
        } else {
            console.log("and error occurred while reading file");
        }
    })

})

module.exports = eventEmitter;