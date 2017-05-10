const express   = require('express');
const router    = express.Router({mergeParams: true});
let doctorRegistrationController = require('../controllers/doctorRegistrationsController');
router.route('/')
	.get(doctorRegistrationController.getAllDoctorRegistrations)
	.post(doctorRegistrationController.savePatientRegistration);
router.route('/:idRegDoctor/reject')
	.post(doctorRegistrationController.rejectPatientRegistration);
router.route('/:idRegDoctor/accept')
	.post(doctorRegistrationController.acceptPatientRegistration);
module.exports = router;