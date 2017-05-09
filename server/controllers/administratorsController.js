'use strict';

let Admin = require('../models/admin');
exports.getAllAdmin = function(req, res, next){
	Admin.getAllAdmin()
		.then(result => {
			result.forEach(function(item, index){
				delete item.clave_usuario;
			});
    		return res.json({ administrators: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.authAdmin = function(req, res, next){
	let credentials = req.body;
	Admin.authAdmin(credentials)
		.then(result => {
			if(result.length == 0){
				res.status(403);
				return res.json({success: false});
			}
			delete result[0].clave_usuario;
			result[0].success = true;
    		return res.json(result[0]);
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.saveAdmin = function(req, res, next){
	let admin = req.body;
	Admin.saveAdmin(admin)
		.then(result => {
    		return res.json(result);
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.updateAdmin = function(req, res, next){
	let admin = req.body;
	admin.id = req.params.adminId;
	Admin.updateAdmin(admin)
		.then(result => {
    		return res.json(result);
  		})
  		.catch(err => {
    		return next(err);
  		});
}