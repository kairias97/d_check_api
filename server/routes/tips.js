const express   = require('express');
const router    = express.Router({mergeParams: true});
let tipController = require('../controllers/tipsController');
router.route('/')
	.get(tipController.getAllTips);
module.exports = router;