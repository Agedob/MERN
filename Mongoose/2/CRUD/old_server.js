var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/snakes_db');

var SnakeSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    desc: {type: String, required: true, minlength:10},
    veno: {type: Boolean, required: true}
   },{timestamps: true})

mongoose.model('Snake', SnakeSchema); 
var Snake = mongoose.model('Snake')
mongoose.Promise = global.Promise;


app.get('/', function(req, res) {
    Snake.find({},function(err,snakes){
        if(err){
            console.log(err),
            res.render('index',{'errors':err})
        }else{
            res.render('index',{'content':snakes})
        }
    })
})

app.get("/snake/:id", function (req, res){
    Snake.findOne({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            res.render('indy_snake',{'content':data});
        }
    })
});

app.get("/new", function(req,res){
    res.render('new_snake')
})

app.post("/proccess", function(req,res){
    var snake = new Snake(req.body);
    snake.save(function(err){
        if(err){
            res.render('new_snake', {errors: snake.errors})
        }
        else {
            console.log('worked')
            res.redirect('/');
        }
    });
})

app.get('/delete/:id', function(req,res){
    Snake.remove({_id:req.params.id}, function(err,data){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            console.log('deleted');
            res.redirect('/')
        }
    })
})

app.get('/edit/:id',function(req,res){
    res.render('update_snake', {content:req.params.id});
})

app.post('/update',function(req,res){
    Snake.findOne({_id:req.body.id},function(err,data){
        data.name = req.body.name;
        data.veno = req.body.veno;
        data.desc = req.body.desc;
        data.save(function(err){
        if(err){
            console.log(err)
            res.render('edit/'+req.body.id)
        }else{
            res.redirect('/')
        }
    })
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
