var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

app.get('/car', function(request,response){
    response.render('car');
});

app.get('/cat', function(request,response){
    response.render('cat');
});

app.get('/car/new', function(request,response){
    response.render('form');
});

app.listen(8000, function() {
console.log("listening on port 8000");
})