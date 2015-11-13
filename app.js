var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MongoDB Setting
mongoose.connect('mongodb://localhost/practice')
var db = mongoose.connection;
app.get('/',function(req, res){
    res.send('Hola Mongo')
});

app.listen(process.env.PORT, process.env.IP);
console.log('Runnung now...');