'use strict';

let Patient = require('../models/patient');

exports.getPatientCount = function(req, res, next){
	let id_paciente = req.params.patientId;
	Patient.getPatientCount(id_paciente)
		.then((result)=>{
			return res.json(result[0]);
		})
		.catch((err)=> {
			next(err);
		})
};
exports.getPatientProfile = function(req, res, next){
	let id_paciente = req.params.patientId;
	Patient.getPatientProfile(id_paciente)
		.then((result)=>{
			return res.json(result[0]);
		})
		.catch((err)=> {
			next(err);
		});
};