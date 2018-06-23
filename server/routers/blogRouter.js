//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/blogController');

//GET Functions
router.get('/createBlog', controller.createBlog);
router.get('/updateBlog', controller.updateBlog);
router.get('/deleteBlog', controller.deleteBlog);
router.get('/setAuthor', controller.setAuthor);

module.exports = router;
