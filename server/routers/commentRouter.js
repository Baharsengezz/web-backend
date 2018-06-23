//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/commentController');

//GET Functions
router.get('/add', controller.addComment);
router.get('/update', controller.updateComment);
router.get('/update/content', controller.updateComment);

//POST Functions


module.exports = router;