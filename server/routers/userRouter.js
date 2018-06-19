//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

//GET Functions
router.get('/add', controller.addUser);
router.get('/update', controller.updateUser);
router.get('/update/username', controller.updateUserName);
router.get('/update/password', controller.updatePassword);
router.get('/update/email', controller.updateEmail);
router.get('/update/name', controller.updateFullName);
router.get('/update/firstname', controller.updateFirstName);
router.get('/update/lastname', controller.updateLastName);


module.exports = router;