'use strict';

let Auth = require('../models/auth');

exports.authPatient = function(req, res, next){
	let credentials = req.body;
	Auth.authPatient(credentials)
		.then(result => {
			if(result.length == 0){
				res.status(403);
				return res.json({success: false, id_paciente: null});
			}
		
    		return res.json({id_paciente: result[0].id, success: true});
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.authDoctor= function(req, res, next){
	let credentials = req.body;
	Auth.authDoctor(credentials)
		.then(result => {
			if(result.length == 0){
				res.status(403);
				return res.json({success: false, id_doctor: null});
			}
    		return res.json({id_doctor: result[0].id, success: true});
  		})
  		.catch(err => {
    		return next(err);
  		});
};

