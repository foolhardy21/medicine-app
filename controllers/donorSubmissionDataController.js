const DonorData = require("../models/DonorMedicineData")

exports.postDonorSubmissionData = async function(req,res){

    console.log('in controller',req.body)
        const donorData = req.body
        const submissionDate = new Date(Date.now())

        const data = new DonorData({
            submission:donorData,
            submissionDate
        })
        data.save(function(err, result) {
            if(err) {
                console.error(err)
            } else {
                res.send(result)
            }
        })
    
}