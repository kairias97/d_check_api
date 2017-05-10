const express   = require('express');
const router    = express.Router({mergeParams: true});
let doctorRegistrationController = require('../controllers/doctorRegistrationsController');
router.route('/')
	.get(doctorRegistrationController.getAllDoctorRegistrations)
	.post(doctorRegistrationController.saveDoctorRegistration);
router.route('/:idRegDoctor/reject')
	.post(doctorRegistrationController.rejectDoctorRegistration);
router.route('/:idRegDoctor/accept')
	.post(doctorRegistrationController.acceptDoctorRegistration);
module.exports = router;