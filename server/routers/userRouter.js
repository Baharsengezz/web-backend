//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

//GET Functions
router.get('/add', controller.addUser);
router.get('/update', controller.updateUser);


module.exports = router;