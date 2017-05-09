'use strict';

let IdCategory = require('../models/idCategory');
exports.getAllIdCategories = function(req, res, next){
	IdCategory.getAllIdCategories()
		.then(result => {
    		return res.json({ identificationCategories: result });
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.getIdCategory = function(req, res, next){
	let credentials = req.params.idCategoryId;
	IdCategory.getIdCategory(credentials)
		.then(result => {
    		return res.json(result[0]);
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.saveIdCategory = function(req, res, next){
	let idCategory = req.body;
	IdCategory.saveIdCategory(idCategory)
		.then(result => {
    		return res.json(result);
  		})
  		.catch(err => {
    		return next(err);
  		});
}
exports.updateIdCategory = function(req, res, next){
	let idCategory = req.body;
	idCategory.id = req.params.idCategoryId;
	IdCategory.updateIdCategory(idCategory)
		.then(result => {
    		return res.json(result);
  		})
  		.catch(err => {
    		return next(err);
  		});
}