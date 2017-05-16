const express   = require('express');
const router    = express.Router({mergeParams: true});
let doctorController = require('../controllers/doctorsController');
router.route('/:doctorId/count')
	.get(doctorController.getDoctorCount);
module.exports = router;