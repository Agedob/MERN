var express = require('express');
var app = express();

app.get('/', function(request, response) {
    console.log(app);
    
  })

app.listen(8000, function() {
console.log("listening on port 8000");
})