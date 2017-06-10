'use strict';

let Tips = require('../models/tips');

exports.getAllTips = function(req, res, next){
	Tips.getAllTips()
		.then((result)=>{
			return res.json(result);
		})
		.catch((err)=> {
			next(err);
		});
};