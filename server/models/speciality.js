'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllSpecialities = ()=> {
  return new Promise((resolve, reject)=> {
      db.especialidad.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getSpeciality = (idEspecialidad)=> {
  return new Promise((resolve, reject)=> {
      db.especialidad.find({id: idEspecialidad},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveSpeciality = (especialidad)=> {
  return new Promise((resolve, reject)=> {
      db.especialidad.insert(especialidad,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateSpeciality = (especialidad)=> {
  return new Promise((resolve, reject)=> {
      db.especialidad.update(especialidad,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};