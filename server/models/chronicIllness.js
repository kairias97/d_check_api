'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllChronicIllnesses = ()=> {
  return new Promise((resolve, reject)=> {
      db.enfermedad_cronica.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getChronicIllness = (idEnfermedadCronica)=> {
  return new Promise((resolve, reject)=> {
      db.enfermedad_cronica.find({id: idEnfermedadCronica},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveChronicIllness = (enfermedadCronica)=> {
  return new Promise((resolve, reject)=> {
      db.enfermedad_cronica.insert(enfermedadCronica,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateChronicIllness = (enfermedadCronica)=> {
  return new Promise((resolve, reject)=> {
      db.enfermedad_cronica.update(enfermedadCronica,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};