const express   = require('express');
const router    = express.Router({mergeParams: true});
let patientController = require('../controllers/patientsController');
router.route('/:patientId/count')
	.get(patientController.getPatientCount);
module.exports = router;