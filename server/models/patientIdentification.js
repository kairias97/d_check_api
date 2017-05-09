'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllPatientIdentifications = ()=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_paciente.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getPatientIdentification = (idIdentificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_paciente.find({id: idIdentificacionPaciente, id_paciente: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deletePatientIdentification = (idPaciente, idIdentificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_paciente.destroy({id: idIdentificacionPaciente, id_paciente: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.savePatientIdentification = (identificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_paciente.insert(identificacionPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updatePatientIdentification = (identificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_paciente.update(identificacionPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
