const fs = require("fs");

fs.createReadStream("./README.md").on("data",(chunk)=>{
    fs.createWriteStream("./output.txt").write(chunk, (err)=>{
    err ? console.log(err) : console.log("stream creation sucessful")
})

})

//write stream chunk should be a Buffer
