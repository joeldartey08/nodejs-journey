/**
 * http modules enables use communicate with network
 * and enable us create a server...
 */

const http = require("http");

let server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.write("<h1>Homepage<h1>");
      response.write("<p>description</p>");
      break;
    case "/about":
      response.write("About Page");
      break;
    case "/contact":
      response.write("contact page");
      break;
    default:
      response.write("404 error page not found");
      break;
  }
  response.end();
});

server.on("connection", () => {
  console.log("new connection found");
});

//listening the server
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
