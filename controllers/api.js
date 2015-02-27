var Applicant = require('../models/applicants.js')

var apiController = {

  addApplicant: function(req, res){
      // 1. Store a reference to the submitted data
      var newApplicant = req.body;

      // 1.5. Do any validation here

      // 2. Create a new Beer instance from the data
      var applicant = new Beer(newApplicant);

      // 3. Save the new instance
      applicant.save(function(err, savedApplicant){
        // 4. Once the save is completed, send the response
        res.send(savedApplicant);
      });
  }

};

module.exports = apiController;