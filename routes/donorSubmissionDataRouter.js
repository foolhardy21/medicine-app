const router = require('express').Router()
const donorSubmissionDataController = require('../controllers/donorSubmissionDataController')

router.post('/', donorSubmissionDataController.postDonorSubmissionData)

module.exports = router