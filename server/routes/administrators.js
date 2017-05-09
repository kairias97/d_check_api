const express   = require('express');
const router    = express.Router({mergeParams: true});
let adminController = require('../controllers/administratorsController');
router.route('/')
	.get(adminController.getAllAdmin)
	.post(adminController.saveAdmin);
router.route('/login')
	.post(adminController.authAdmin);
router.route('/:adminId')
	.put(adminController.updateAdmin);
module.exports = router;