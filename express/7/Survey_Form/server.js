var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var result_data = [];

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
   })

app.post('/users', function (req, res){
    result_data.push(req.body)
    res.redirect('/result')
});

app.get('/result', (req, res) => {
    console.log(result_data);

    res.render("result", {user_input: result_data})
})


app.listen(7173, () => {
    console.log("Listening on port 7173")
})