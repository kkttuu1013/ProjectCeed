const express = require('express');
const app = express();

app.get('/',function(req, res){
    res.send('Hello Wolrd');
});

app.listen(8080);