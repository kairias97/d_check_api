'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDoctorIdentifications = ()=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_doctor.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctorIdentification = (idIdentificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_doctor.find({id: idIdentificacionDoctor, id_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteDoctorIdentification = (idDoctor, idIdentificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_doctor.destroy({id: idIdentificacionDoctor, id_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDoctorIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_doctor.insert(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDoctorIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_doctor.update(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
