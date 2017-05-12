'use strict';

let DoctorRegistration = require('../models/doctorRegistration');
let DoctorRegistrationId = require('../models/doctorRegIdentification');
let Doctor = require('../models/doctor');
let DoctorId = require('../models/doctorIdentification');
let MailHelper = require('../helpers/emailHelper');

exports.getAllDoctorRegistrations = function(req, res, next){
	DoctorRegistration.getAllDoctorRegistrations()
		.then(result => {
    		return res.json({ doctorRegistrations: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.saveDoctorRegistration = function(req, res, next){
	let doctorSubmitted = req.body;
  let identifications = doctorSubmitted.identificaciones.slice();
  let savedDoctorReg = {};
  delete doctorSubmitted.identificaciones;
	DoctorRegistration.saveDoctorRegistration(doctorSubmitted)
		.then(result => {
        delete result.clave;
        identifications.forEach(function(item, index){
          item.id_registro_doctor = result.id;
        });
    		DoctorRegistrationId.saveDoctorRegIdentification(identifications)
          .then(resultArray => {
            result.identificaciones = resultArray;
            savedDoctorReg = result;
            return MailHelper.sendEmail("mydchecksupp@gmail.com",
                "Nuevo doctor registrado", "Se ha recibido una nueva solicitud de registro de doctor en la plataforma.");
          })
          .then((info)=> {
            return res.json(savedDoctorReg);
          })
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.rejectDoctorRegistration = function(req, res, next){
	let doctorRegId = req.params.idRegDoctor;
  let deletedIds = [];
  let deletedDoctor = {};
	DoctorRegistrationId.deleteAllDoctorRegIdentification(doctorRegId)
		.then(result => {
        deletedIds = result;
        DoctorRegistration.deleteDoctorRegistration(doctorRegId)
          .then(erasedDoctor => {
            deletedDoctor = erasedDoctor[0];
            delete deletedDoctor.clave;
            deletedDoctor.deletedIds = deletedIds;
            return res.json(deletedDoctor);
          })
          .catch(err => {
            return next(err);
          });
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.acceptDoctorRegistration = function(req, res, next){
	let doctorRegId = req.params.idRegDoctor;
  let migratedIds = [];
  let migratedDoctor = {};
  let acceptedDoctor = {};
  let acceptedIds = [];

  DoctorRegistrationId.deleteAllDoctorRegIdentification(doctorRegId)
    .then(result => {
        migratedIds = result.slice();
        migratedIds.forEach(function(item, index){
          delete item.id;
          delete item.id_registro_doctor;
        });
        return DoctorRegistration.deleteDoctorRegistration(doctorRegId);
      })
      .then(erasedDoctor => {
        migratedDoctor = Object.assign({}, erasedDoctor[0]);
        delete migratedDoctor.id;
        migratedDoctor.activo = true;
        migratedDoctor.en_linea = false;
        return Doctor.saveDoctor(migratedDoctor);
      })
      .then((activatedDoctor)=> {
        console.log(activatedDoctor);
        acceptedDoctor = Object.assign({}, activatedDoctor);
        delete acceptedDoctor.clave;
        console.log(acceptedDoctor);
        migratedIds.forEach(function(item, index){
          item.id_doctor = activatedDoctor.id;
        });
        return DoctorId.saveDoctorIdentification(migratedIds);
      })
      .then((activatedIds)=> {
        acceptedDoctor.identificaciones = activatedIds;
        return res.json(acceptedDoctor);
      })
      .catch(err => {
        return next(err);
      });
}