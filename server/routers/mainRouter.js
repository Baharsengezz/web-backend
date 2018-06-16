//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/mainController')

router.get('/', controller.index);
//post
router.post('/contact', controller.sentEmail);

module.exports = router;