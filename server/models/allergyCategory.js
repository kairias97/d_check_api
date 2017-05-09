'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllAllergies = ()=> {
  return new Promise((resolve, reject)=> {
      db.categoria_alergia.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getAllergy = (idAlergia)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_alergia.find({id: idAlergia},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveAllergy = (alergia)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_alergia.insert(alergia,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateAllery = (alergia)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_alergia.update(alergia,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};