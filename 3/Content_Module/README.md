# Content Module
As your apps get larger and your server is responsible for serving more files, your app.js will get more complex and harder to read. Instead of having so many if/else statements to serve different static file contents, we are going to create a module that will serve static contents automatically. Later, this type of task is automatically handled by a framework (which you'll learn in the next chapter). Spend up to 4 hours trying to finish this assignment and see how you can build your own module to do these things.  

Without your custom module, your app.js would look like below:

app.js
//http server
const http = require('http');
const fs   = require('fs');
//creating a server
server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  if(request.url === '/'){
    fs.readFile('views/index.html', 'utf8', function (errors, contents) {
      response.write(contents); 
      response.end();
    });
  } else if(request.url === '/dojo.html'){
    fs.readFile('views/dojo.html', 'utf8', function (errors, contents) {
      response.write(contents);
      response.end();
    });
  } else if(request.url === '/stylesheet/style.css'){
    fs.readFile('stylesheet/style.css', 'utf8', function (errors, contents) {
      response.write(contents);
      response.end();
    });
  } else {
      response.end('File not found!!!');
  }
});
server.listen(8000);
console.log("Running in localhost at port 8000");
After your change (or after you create your static.js in the modules folder), your app.js would look like the following:

// http server
const http = require('http');
const   fs = require('fs');
// the file below is the file you need to create for this assignment.
// NOTE!!!  The '.' in the filepath below just refers to the location of the current file, in this case
// the file is app.js.  Thus the path './static.js' just refers to a file called static.js
const static_contents = require('./static.js');
//
//creating a server
server = http.createServer(function (request, response){
  static_contents(request, response);  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");
BONUS: Make your static.js file as elegant as possible. We think with proper refactoring you could make this work for hundreds/thousands of files with just a few lines of code. Your code should work when we add new files in the views folders, or if we were to add new images (e.g. /images/car.jpg), new stylesheets (e.g. /stylesheets/others.css), etc. If the file the user is seeking is not there, it should also render an error message.

The goal of this assignment is for you to create your own first custom node module and for you to not rely so much on all the node modules out there (as it's just a library like this that other people wrote) but know how to create these node modules yourself if you wanted to.  Creating your own node modules would make your app.js simpler but also allow your app to be more modularized.  It's always better as the app is getting complicated to have your own codes do the things you need, rather than relying on 3rd party libraries someone else wrote (especially if their documentations are really poor).