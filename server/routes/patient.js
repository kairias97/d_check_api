const express   = require('express');
const router    = express.Router({mergeParams: true});
let patientController = require('../controllers/patientsController');
router.route('/:patientId/count')
	.get(patientController.getPatientCount);
router.route('/:patientId/profile')
	.get(patientController.getPatientProfile);
router.route('/:patientId/allergies')
	.get(patientController.getPatientAllergies);
router.route('/:patientId/chronicIllnesses')
	.get(patientController.getPatientIllnesses);
	router.route('/:patientId/virtualChecks')
	.get(patientController.getPatientVirtualChecks);
module.exports = router;