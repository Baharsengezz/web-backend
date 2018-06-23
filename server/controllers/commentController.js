//Still Developed
var Comment = require('../modules/comment');

/*------------------------------
addComment :: Add a new comment on database
queries :: 
          - blog    : blogID    (required)
          - uname   : username  (required)
          - content : content   (required)
example :: localhost:8000/comment/add?blog={blogID}&uname={username}&content={content}
--------------------------------- */
module.exports.addComment = function(req,res){

    // Get a key for a new comment.
  let newCommentKey = firebase.database().ref().child('comment').push().key;
 
  // Get database referances
  let usersRef = firebase.database().ref().child('user');
  let blogRef  = firebase.database().ref().child('blog');

  // Select user from database
  usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {
    
    snapshot.forEach(function(data) {

        // Create User Object from database
        let author = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
            
    });
  
    // A new comment entry.
    let newComment = new Comment( newCommentKey, author, req.query.blog, req.query.content );

    // Write the new comment simultaneously in the comment list.
    let commits = {};
    commits['/comment/'+ author.username +'/'+ blog.id +'/' + newCommentKey] = newComment;
    firebase.database().ref().update(commits);
    return true;
  });

}

/*------------------------------
updateComment :: Update existing comment on database
queries :: 
          - uname   : username  (required)
          - comment : commentID (required)
          - content : content   (required)

example :: localhost:8000/comment/update?uname={username}&comment={commentID}&content={content}
---------------------------------*/
module.exports.updateComment = function (req,res){
  
    // Get database referances
    let usersRef = firebase.database().ref().child('user');
    let commentRef  = firebase.database().ref().child('comment');


    commentRef.orderByChild('id').equalTo(req.query.comment).once("value").then( function(snapshot) {

        snapshot.forEach(function(data) {

            const commentKey= data.key
            const username = data.val().author.username;
            const content = data.val().content;
        });

        usersRef.orderByChild('username').equalTo(username).once("value").then( function(snapshot) {

            snapshot.forEach(function(data) {
    
               	 // A new user entry.
                let author = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
           
            });
    
        });

        // Create an object from Comment
        let updatingComment = new Comment(data.key,author, req.blog, content );
      
        // Updating content of Comment
        updatingComment.setComment(req.query.content);

        // Update the user data simultaneously in the existing user list.
        let commits = {};
        commits['/comment/'+ author.username +'/'+ req.blog +'/' + commentKey] = updatingComment;
        firebase.database().ref().update(commits);
        return true;
    });   
}

/*------------------------------
updateAuthor :: Update author info for existing comment on database
queries :: 
          - uname   : username  (required)
          - comment : commentID (required)
          - content : content   (required)

example :: localhost:8000/comment/update?uname={username}&comment={commentID}&content={content}
---------------------------------*/
module.exports.updateAuthor = function (req,res){
  
    // Get database referances
    let usersRef = firebase.database().ref().child('user');
    let commentRef  = firebase.database().ref().child('comment');


    commentRef.orderByChild('id').equalTo(req.query.comment).once("value").then( function(snapshot) {

        snapshot.forEach(function(data) {

            const commentKey= data.key
            const username = data.val().author.username;
            const content = data.val().content;
        });

        usersRef.orderByChild('username').equalTo(username).once("value").then( function(snapshot) {

            snapshot.forEach(function(data) {
    
               	 // A new user entry.
                let author = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
           
            });
    
        });

        // Create an object from Comment
        let updatingComment = new Comment(data.key, author, req.blog, content );
      
        // Updating content of Comment
        updatingComment.setAuthor(req.query.content);

        // Update the user data simultaneously in the existing user list.
        let commits = {};
        commits['/comment/'+ author.username +'/'+ req.blog +'/' + commentKey] = updatingComment;
        firebase.database().ref().update(commits);
        return true;
    });   
}


/*------------------------------
deleteComment :: Delete existing comment
queries :: 
          - comment : commentID (required)

example :: localhost:8000/comment/delete?comment={commentID}
---------------------------------*/
module.exports.deleteComment = function (req,res){
  
	let commentRef = firebase.database().ref().child('comment');
	commentRef.orderByChild('id').equalTo(req.query.comment).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

			// Delete the comment data simultaneously in the existing comment list.
			  commentRef.child(data.key).remove();
	    });

	});
	return true;
}
