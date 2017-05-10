'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDoctorRegIdentifications = ()=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctorRegIdentification = (idIdentificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.find({id: idIdentificacionDoctor, id_registro_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteAllDoctorRegIdentification = (idDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.destroy({id_registro_doctor: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDoctorRegIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.insert(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDoctorRegIdentification = (identificacionDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.identificacion_registro_doctor.update(identificacionDoctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};