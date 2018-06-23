//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/blogController');

//GET Functions
router.get('/createBlog', controller.createBlog);


module.exports = router;
