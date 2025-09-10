/**
 * http modules enables use communicate with network
 * and enable us create a server...
 * 

ehat express does under the hood

const http = require('http');

function createApplication() {
  const app = (req, res) => {
    app.handle(req, res);
  };

  app.routes = [];

  app.get = (path, handler) => {
    app.routes.push({ method: 'GET', path, handler });
  };

  app.handle = (req, res) => {
    for (let route of app.routes) {
      if (route.method === req.method && route.path === req.url) {
        return route.handler(req, res);
      }
    }
    res.statusCode = 404;
    res.end('Not Found');
  };

  app.listen = (port, cb) => {
    const server = http.createServer(app);
    server.listen(port, cb);
  };

  return app;
}

// Usage
const app = createApplication();
app.get('/', (req, res) => res.end('Hello World!'));
app.get('/about', (req, res) => res.end('About Page'));
app.listen(3000);

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
