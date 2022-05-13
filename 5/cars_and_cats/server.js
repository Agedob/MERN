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

app.get('/cat/*', function(request,response){
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    const img_name = request.url.split('/').pop()
    
    response.render('details', { users: users_array, name: img_name })
});


app.listen(8000, function() {
console.log("listening on port 8000");
})

