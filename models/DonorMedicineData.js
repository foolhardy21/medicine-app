const mongoose = require('mongoose')

const DonorSubmissionDataSchema = mongoose.Schema({
    submission:[{
    medicineName:{
        type:String
    },
    weight:{
        type:Number
    },
    companyName:{
        type:String
    },
    quantity:{
        type:Number
    }}],
    submissionDate:{
        type:Date
    }
})

const DonorSubmissionData = mongoose.model("DonorSubmissionData",DonorSubmissionDataSchema)

module.exports = DonorSubmissionData