const express   = require('express');
const router    = express.Router({mergeParams: true});
let authController = require('../controllers/authController');
router.route('/')
	.post(authController.authPatient);

module.exports = router;