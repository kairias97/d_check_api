'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllDocumentCategories = ()=> {
  return new Promise((resolve, reject)=> {
      db.categoria_documento.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.getDocumentCategory = (idCatDoc)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_documento.find({id: idCatDoc},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveDocumentCategory = (catDocumento)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_documento.insert(catDocumento,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.updateDocumentCategory = (catDocumento)=> {
  return new Promise((resolve, reject)=> {
      db.categoria_documento.update(catDocumento,(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};