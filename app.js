var express = require('express');
var bodyParser = require('body-parser');


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/applicants')

var indexController = require('./controllers/index.js');


var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

// // displays a list of applicants
app.get('/applicant', function(req, res){
	res.render('applicant')
});

app.post('/submitapplication', function(req, res){
	res.render('applicant', req.body)
});

// // creates and applicant
// app.post('/addApplicant', function(req, res){
// 	// Here is where you need to get the data
// 	// from the post body and store it in the database
// 	console.log('Name: ' +req.body.name);
// 	res.send('Success!');

// });

// app.post('/remApplicant', function(req, res){
// 	// Here is where you need to get the data
// 	// from the post body and store it in the database
// 	console.log('Name: ' +req.body.name);
// 	res.send('Success!');

// });


var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});