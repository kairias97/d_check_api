'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDoctorIdentifications = ()=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctorIdentification = (idIdentificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.find({id: idIdentificacionDoctor, id_registro_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteDoctorIdentification = (idDoctor, idIdentificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.destroy({id: idIdentificacionDoctor, id_registro_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDoctorIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.insert(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDoctorIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.update(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};