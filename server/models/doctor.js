'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDoctors = ()=> {
  return new Promise((resolve, reject)=> {
      db.doctor.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctor = (idDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.doctor.find({id: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.deleteDoctor = (idDoctor)=> {
  return new Promise((resolve, reject)=> {
      db.doctor.destroy({id: idDoctor},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDoctor = (doctor)=> {
  return new Promise((resolve, reject)=> {
      db.doctor.insert(doctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDoctor = (doctor)=> {
  return new Promise((resolve, reject)=> {
      db.doctor.update(doctor,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDoctorCount = (id_doctor)=> {
  return new Promise((resolve, reject)=> {
    db.getDoctorCount([id_doctor], (err, result)=> {
      if(err){
        return reject(err);
      }
      return resolve(result);
    });
  });
};
