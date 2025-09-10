const https = require("https");
const fs = require("fs");

const writeStream = fs.createWriteStream("./apiData.json");

https
  .get("https://jsonplaceholder.typicode.com//comments", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      try {
        writeStream.write(data);
      } catch (error) {
        console.log(error);
      }
    });
  })
  .on("error", (err) => {
    console.log("fetching data fail", err);
  });
