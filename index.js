const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

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

app.get('/privacypolicy', function(req, res){
    res.render("privacypolicy")
})

app.get('/stream', function(req, res){
    res.render("stream");
})

app.get('/start', function(req, res){
    res.render("start");
})

app.listen(PORT, () => console.log('Listening on ${ PORT }'));