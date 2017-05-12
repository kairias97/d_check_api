'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllPatients = ()=> {
  return new Promise((resolve, reject)=> {
      db.paciente.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getPatient = (idPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.paciente.find({id: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deletePatient = (idPaciente)=> {
  return new Promise((resolve, reject)=> {
      db.paciente.destroy({id: idPaciente},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.savePatient = (paciente)=> {
  return new Promise((resolve, reject)=> {
      db.paciente.insert(paciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updatePatient = (paciente)=> {
  return new Promise((resolve, reject)=> {
      db.paciente.update(paciente,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};