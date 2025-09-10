const http = require("http");

const data = [
  {
    name: "joel",
    age: 21,
  },
  {
    name: "Kwame",
    age: 18,
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>this is home page<h1>");
  } else if (req.url === "/get/api" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });

    res.write(JSON.stringify(data, null, 2));
  } else {
    res.write("404 page not found");
  }

  res.end();
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
