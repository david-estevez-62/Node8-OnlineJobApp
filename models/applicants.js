var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	name: String,
	bio: String,
	skills: String,
	years: Number,
	why: String
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




// var mongoose = require('mongoose');

// var applicantSchema = mongoose.Schema({
//   name:   String,
//   bio:    String,
//   skills: String,
//   years:  int,
//   why:    String 
// });

// var Applicant = mongoose.model('Applicant', applicantSchema);




// // var movieInstance = new Movie({
// // 	title: 'Star Wars'
// // });

// // movieInstance.save(function(err,result){
// // 	console.log('err:', err);
// // 	console.log('result:', result);
// // });

// module.exports = Applicant;


