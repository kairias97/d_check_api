'use strict';

let PatientRegistration = require('../models/patientRegistration');
let PatientRegistrationId = require('../models/patientRegIdentification');
let Patient = require('../models/patient');
let PatientId = require('../models/patientIdentification');
let MailHelper = require('../helpers/emailHelper');

exports.getAllPatientRegistrations = function(req, res, next){
	PatientRegistration.getAllPatientRegistrations()
		.then(result => {
    		return res.json({ patientRegistrations: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.savePatientRegistration = function(req, res, next){
	let patientSubmitted = req.body;
  let identifications = patientSubmitted.identificaciones.slice();
  let savedPatientReg = {};
  delete patientSubmitted.identificaciones;
	PatientRegistration.savePatientRegistration(patientSubmitted)
		.then(result => {
        delete result.clave;
        identifications.forEach(function(item, index){
          item.id_registro_paciente = result.id;
        });
    		PatientRegistrationId.savePatientRegIdentification(identifications)
          .then(resultArray => {
            result.identificaciones = resultArray;
            savedPatientReg = Object.assign({}, result);
            return MailHelper.sendEmail("mydchecksupp@gmail.com",
                "Nuevo paciente registrado", "Se ha recibido una nueva solicitud de registro de paciente en la plataforma.");
          })
          .then((info)=> {
            return res.json(savedPatientReg);
          })
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.rejectPatientRegistration = function(req, res, next){
	let patientRegId = req.params.idRegPatient;
  let deletedIds = [];
  let deletedPatient = {};
	PatientRegistrationId.deleteAllPatientRegIdentification(patientRegId)
		.then(result => {
        deletedIds = result;
        PatientRegistration.deletePatientRegistration(patientRegId)
          .then(erasedPatient => {
            deletedPatient = erasedPatient[0];
            delete deletedPatient.clave;
            deletedPatient.deletedIds = deletedIds;
            return res.json(deletedPatient);
          })
          .catch(err => {
            return next(err);
          });
  		})
  		.catch(err => {
    		return next(err);
  		});
};
exports.acceptPatientRegistration = function(req, res, next){
	let patientRegId = req.params.idRegPatient;
  let migratedIds = [];
  let migratedPatient = {};
  let acceptedPatient = {};
  let acceptedIds = [];

  PatientRegistrationId.deleteAllPatientRegIdentification(patientRegId)
    .then(result => {
        migratedIds = result.slice();
        migratedIds.forEach(function(item, index){
          delete item.id;
          delete item.id_registro_paciente;
        });
        return PatientRegistration.deletePatientRegistration(patientRegId);
      })
      .then(erasedPatient => {
        migratedPatient = Object.assign({}, erasedPatient[0]);
        delete migratedPatient.id;
        migratedPatient.activo = true;
        migratedPatient.en_linea = false;
        return Patient.savePatient(migratedPatient);
      })
      .then((activatedPatient)=> {
        console.log(activatedPatient);
        acceptedPatient = Object.assign({}, activatedPatient);
        delete acceptedPatient.clave;
        console.log(acceptedPatient);
        migratedIds.forEach(function(item, index){
          item.id_paciente = activatedPatient.id;
        });
        return PatientId.savePatientIdentification(migratedIds);
      })
      .then((activatedIds)=> {
        acceptedPatient.identificaciones = activatedIds;
        return res.json(acceptedPatient);
      })
      .catch(err => {
        return next(err);
      });
}