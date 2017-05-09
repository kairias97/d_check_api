const express   = require('express');
const router    = express.Router({mergeParams: true});
let idCategoryController = require('../controllers/identificationCategoriesController');
router.route('/')
	.get(idCategoryController.getAllIdCategories)
	.post(idCategoryController.saveIdCategory);
router.route('/:idCategoryId')
	.get(idCategoryController.getIdCategory)
	.put(idCategoryController.updateIdCategory);
module.exports = router;