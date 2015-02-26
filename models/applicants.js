var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
	title: String
});

var Applicant = mongoose.model('Applicant', applicantSchema);


var applicant =  new Applicant({
	name: req.body.name,
	bio: req.body.bio,
	skills: req.body.skills,
	years: req.body.years,
	why: req.body.why
})

applicant.save()

// var movieInstance = new Movie({
// 	title: 'Star Wars'
// });

// movieInstance.save(function(err,result){
// 	console.log('err:', err);
// 	console.log('result:', result);
// });

module.exports = Applicant;