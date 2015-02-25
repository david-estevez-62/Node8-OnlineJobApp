var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	title: String
});

var Applicant = mongoose.model('Applicant', applicantSchema);

// var movieInstance = new Movie({
// 	title: 'Star Wars'
// });

// movieInstance.save(function(err,result){
// 	console.log('err:', err);
// 	console.log('result:', result);
// });

module.exports = Applicant;