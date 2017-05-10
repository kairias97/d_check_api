'use strict';
let connection = require('../../db_connection');
var db = connection.db;

exports.authPatient = (user)=> {
	return new Promise((resolve, reject)=> {
		db.paciente.where("correo=$1 and clave=$2", [user.usuario, user.clave], (err, result)=> {
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
};
exports.authDoctor = (user)=> {
	return new Promise((resolve, reject)=> {
		db.doctor.where("correo=$1 and clave=$2", [user.usuario, user.clave], (err, result)=> {
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
};