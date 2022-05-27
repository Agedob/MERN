const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const PRIVATE_KEY = process.env.PRIVATE_KEY
mongoose.connect(PRIVATE_KEY, {useNewUrlParser: true});
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/static/views');
app.set('view engine', 'ejs'); 
app.use(express.json())

const mongooseRouter = require('./routes/animal');

app.use('/animal', mongooseRouter)

app.use('*', (req,res) =>{
    res.status(200).render('index')
})

 app.listen(PORT, () => { ;
console.log(`Listening on ${PORT}`);
});