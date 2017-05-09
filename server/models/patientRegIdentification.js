'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllPatientRegIdentifications = ()=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_paciente.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getPatientRegIdentification = (idIdentificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_paciente.find({id: idIdentificacionPaciente, id_registro_paciente: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteAllPatientRegIdentification = (idPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_paciente.destroy({id_registro_paciente: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.savePatientRegIdentification = (identificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_paciente.insert(identificacionPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updatePatientRegIdentification = (identificacionPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_paciente.update(identificacionPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
