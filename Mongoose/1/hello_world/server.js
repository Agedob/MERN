const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongo_connect_info = require('./mongoPass')
app.use(express.static(__dirname + '/static'));
mongoose.connect(mongo_connect_info, {useNewUrlParser: true});
app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs');

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);

app.get('/', function(req, res) {
    res.render("index");
})

app.post('/users', (req, res) => {
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