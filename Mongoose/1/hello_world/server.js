const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
   })


app.listen(7173, () => {
    console.log("Listening on port 7173")
})