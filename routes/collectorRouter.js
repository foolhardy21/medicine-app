const router =require('express').Router()
const collectorSubmissionController=require('../controllers/collectorSubmissionController')
router.post('/',collectorSubmissionController.postCollectorData)

module.exports=router