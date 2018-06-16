//Still Developed


var comment = require('../modules/comment.js');
var db = firebase.database();
var commentRef= db.child('comments');

module.exports.addComment = function (req,res){

	commentRef.set();
}