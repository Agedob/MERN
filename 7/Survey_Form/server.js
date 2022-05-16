var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
   })

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});

app.post('/users', function (req, res){
    // set the name property of session.  
    req.session.name = req.body.name;
    console.log(req.session.name);
    //code to add user to db goes here!
    // redirect the user back to the root route. 
    res.redirect('/');
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});



app.listen(7173, () => {
    console.log("Listening on port 7173")
})