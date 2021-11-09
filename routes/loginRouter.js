const router = require('express').Router()
const loginController = require('../controllers/loginController')

router.post('/', loginController.verifyUser)
router.post('/user', loginController.getUserDetails)
router.post('/newuser', loginController.postUser)

router.post('/verifyAdmin', loginController.verifyAdmin)
router.post('/activeRequest',loginController.getActiveCollectionData)
router.post('/completeRequest',loginController.getCompleteCollectionData)
router.post('/getData',loginController.getData)
router.post('/rejectRequest',loginController.setRejectRequest)
router.post('/getCollectionRequest',loginController.getCollectionRequest)
router.post('/approveRequest',loginController.setApproveRequest)

module.exports = router