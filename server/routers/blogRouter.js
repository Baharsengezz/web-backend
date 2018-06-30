//Still Developed

var express = require('express');
var router = express.Router();

var controller = require('../controllers/blogController');

//GET Functions
router.get('/add', controller.addBlog);
router.get('/update', controller.updateBlog);
router.get('/delete', controller.deleteBlog);
router.get('/author', controller.updateAuthor);

module.exports = router;
