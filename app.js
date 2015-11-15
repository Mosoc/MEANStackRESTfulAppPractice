var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');

//MongoDB Setting
mongoose.connect('mongodb://localhost/books')
var db = mongoose.connection;
app.get('/',function(req, res){
    res.send('Hola Mongo')
});


app.get('/api/genres', function(req, res){
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
});

app.listen(process.env.PORT, process.env.IP);
console.log('Runnung now...');


