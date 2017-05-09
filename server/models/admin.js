'use strict';
let connection = require('../../db_connection');
var db = connection.db;
exports.getAllAdmin = ()=> {
  return new Promise((resolve, reject)=> {
      db.administrador.find({},(err, result)=> {
        if(err){
          return reject(err);
        }
        return resolve(result);
      })
  });
};
exports.saveAdmin = (admin)=> {
	return new Promise((resolve, reject)=> {
		db.administrador.insert(admin, (err, result)=> {
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
};
exports.authAdmin = (admin)=> {
	return new Promise((resolve, reject)=> {
		db.administrador.where("usuario=$1 and clave_usuario=$2", [admin.usuario, admin.clave], (err, result)=> {
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
}
exports.updateAdmin = (admin)=> {
	return new Promise((resolve, reject)=> {
		db.administrador.update(admin, (err, result)=> {
			if(err){
				return reject(err);
			}
			return resolve(result);
		})
	});
};