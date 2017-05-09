'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllIdCategories = ()=> {
  return new Promise((resolve, reject)=> {
      db.categoria_identificacion.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getIdCategory = (idCatId)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_identificacion.find({id: idCatId},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveIdCategory = (catIdentificacion)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_identificacion.insert(catIdentificacion,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateIdCategory = (catIdentificacion)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_identificacion.update(catIdentificacion,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};