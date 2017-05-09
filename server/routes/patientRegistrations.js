const express   = require('express');
const router    = express.Router({mergeParams: true});
let patientRegistrationController = require('../controllers/patientRegistrationsController');
router.route('/')
	.get(patientRegistrationController.getAllPatientRegistrations)
	.post(patientRegistrationController.savePatientRegistration);
router.route('/:idRegPatient/reject')
	.post(patientRegistrationController.rejectPatientRegistration);
router.route('/:idRegPatient/accept')
	.post(patientRegistrationController.acceptPatientRegistration);
module.exports = router;