const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } 

    else if (request.url === '/styles.css'){
        fs.readFile('./css/styles.css', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  
            response.write(contents);  
            response.end(); 
        });
    }

    else if (request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }

    else if (request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf-8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  
            response.write(contents);  
            response.end(); 
        });
    }

    else if (request.url === '/car.png'){
        // there is no utf-8 !
        fs.readFile('./images/car.png', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  
            response.write(contents);
            response.end(); 
        });
    }

    else if (request.url === '/cat.png'){
        // there is no utf-8 !
        fs.readFile('./images/cat.png', function(errors, contents){
            response.writeHead(200, {'Content-Type': 'image/png'});  
            response.write(contents);
            response.end(); 
        });
    }

    else {
        response.writeHead(418);
        response.end('File not found!!!');
    }
});

server.listen(7070);
console.log("Running in localhost at port 7070");
