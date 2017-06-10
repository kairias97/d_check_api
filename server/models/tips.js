'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllTips = ()=> {
  return new Promise((resolve, reject)=> {
      db.tips.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};