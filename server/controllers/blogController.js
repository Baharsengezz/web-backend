//Still Developed


var blog = require('../modules/blog.js');
var db = firebase.database();
var blogRef= db.child('blogs');

module.exports.addBlog = function (req,res){

	blogRef.set();
}