const http = require("http");
const fs = require("fs");
const static_content = require("./static");

server = http.createServer(function (request, response) {
   // <<<<<<<<<>>>>>>>>>>>>>>>>>> build static.js to handle all the code below
   // static_content(request, response);

   response.writeHead(200, { "Content-type": "text/html" });
   console.log("Request ----------->", request.url);

   if (request.url === "/") {
      fs.readFile("views/index.html", "utf8", function (errors, contents) {
         // response.console.log(request)
         response.write(contents);
         response.end();
      });
   } else if (request.url === "/dojo.html") {
      fs.readFile("views/dojo.html", "utf8", function (errors, contents) {
         response.write(contents);
         response.end();
      });
   } else if (request.url === "/styles.css") {
      fs.readFile("./css/styles.css", "utf-8", function (errors, contents) {
         response.writeHead(200, { "Content-Type": "text/css" });
         response.write(contents);
         response.end();
      });
   } else if (request.url === "/index.js") {
      fs.readFile("./js/index.js", "utf-8", function (errors, contents) {
         response.writeHead(200, { "Content-Type": "text/js" });
         response.write(contents);
         response.end();
      });
   } else if (request.url === "/favicon.ico") {
      fs.readFile("./images/favicon.ico", function (errors, contents) {
         response.writeHead(200, { "Content-Type": "image/ico" });
         response.write(contents);
         response.end();
      });
   } else {
      response.writeHead(418);
      response.end("File not found!!!");
   }
});
server.listen(7070);
console.log("Running in localhost at port 7070");
