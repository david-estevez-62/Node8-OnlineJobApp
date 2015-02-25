var Applicant = require('../models/applicants.js');

var indexController = {
	index: function(req, res) {



		Applicant.find({}, function(err, results){
			console.log('err:', err);
			console.log('results:', results);


			res.render('index', {
				applicants: results
			});
		});


		
	}
};

module.exports = indexController;