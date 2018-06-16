//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/userController');

//GET Functions
router.get('/', controller.index);

//POST Functions
router.post('/contact', controller.sentEmail);

module.exports = router;