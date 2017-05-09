'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDoctorRegistrations = ()=> {
  return new Promise((resolve, reject)=> {
      db.registro_doctor.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctorRegistration = (idRegDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.registro_doctor.find({id: idRegDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteDoctorRegistration = (idRegDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.registro_doctor.destroy({id: idRegDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDoctorRegistration = (registroDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.registro_doctor.insert(registroDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDoctorRegistration = (registroDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.registro_doctor.update(registroDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
