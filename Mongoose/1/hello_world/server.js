const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongo_connect_info = require('./mongoPass')
mongoose.connect(mongo_connect_info, {useNewUrlParser: true});

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');


const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);


// get all the users and display them using ejs (does work if there are no users)
app.get('/', (req, res) => { 
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
    });


    // send parsed info to the db and create a new user
app.post('/users', function (req,res) {
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
      .then(newUserData => console.log('user created: ', newUserData))
      .catch(err => console.log(err));
        
    res.redirect('/');
    })

app.listen(7173, () => {
    console.log("Listening on port 7173")
})