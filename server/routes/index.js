'use strict';

var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

let jsonp = JSON.parse(fs.readFileSync(__dirname+'/../../package.json', 'utf8'));

let indexRoute = router.get('/',(req,res)=>{
	res.json({
		'name' : jsonp.name,
		'version':jsonp.version
	});
});

router.use('/administrators', require('./administrators'));
router.use('/identificationCategories', require('./idCategories'));
router.use('/patients-register', require('./patientRegistrations'));
router.use('/doctors-register', require('./doctorRegistrations'));
router.use('/auth-patient', require('./authPatient'));
router.use('/auth-doctor', require('./authDoctor'));
//router.use('/modules', auth, require('./modules'));


module.exports = {
  router: router,
	indexRoute : indexRoute
}