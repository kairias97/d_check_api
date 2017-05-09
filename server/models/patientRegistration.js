'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllPatientRegistrations = ()=> {
  return new Promise((resolve, reject)=> {
      db.registro_paciente.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getPatientRegistration = (idRegPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.registro_paciente.find({id: idRegPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deletePatientRegistration = (idRegPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.registro_paciente.destroy({id: idRegPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.savePatientRegistration = (registroPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.registro_paciente.insert(registroPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updatePatientRegistration = (registroPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.registro_paciente.update(registroPaciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
