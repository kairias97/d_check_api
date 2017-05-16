'use strict';

let Doctor = require('../models/doctor');

exports.getDoctorCount = function(req, res, next){
	let id_doctor = req.params.doctorId;
	Doctor.getDoctorCount(id_doctor)
		.then((result)=>{
			return res.json(result[0]);
		})
		.catch((err)=> {
			next(err);
		})
};