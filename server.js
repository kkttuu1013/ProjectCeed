const express = require('express');
const app = express();
const cool = require('cool-ascii-faces')
const PORT = process.env.PORT || 3000;

app.set('views', './views');
app.set("view engine", "ejs");
app.use( express.static( __dirname ) );

app.get('/',function(req, res){
    res.render("index");
});

app.get('/whatisea/', function(req, res){
    res.render("whatisea")
})

app.get('/free/', function(req, res){
    res.render("free")
})

app.get('/cool', (req, res)=> res.send(cool()));

app.get('/privacypolicy', function(req, res){
    res.render("privacypolicy")
})

app.get('/stream', function(req, res){
    res.render("stream");
})

app.get('/start', function(req, res){
    res.render("start");
})

app.get('/start/2', function(req,res){
    res.render("money");
})

app.get('/start/3', function(req,res){
    res.render("mt4");
})

app.get('/start/4', function(req,res){
    res.render("back");
})

app.use(function(err, req, res, next){
	res.status(500);
	res.end('my 500 error! : ' + err);
});

app.listen(PORT);