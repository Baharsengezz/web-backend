//Still Developed

const request = require('request');
var Blog = require('../modules/blog');
let User = require('../modules/users');

let firebase = require("firebase-admin");


/*------------------------------
addBlog :: Add a new blog on database
queries :: 
          - uname   : username   (required)
          - title   : blog title (required)
          - content : content    (required)
example :: localhost:8000/blog/add?uname={uname}&title={blog_title}&content={content}
--------------------------------*/
module.exports.addBlog = function (req,res){

    let userRef = firebase.database().ref().child('user');
    var publishDate = new Date();

    userRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

        snapshot.forEach(function(data) {

            let bloggerKey = firebase.database().ref().child('user').push().key;
             // A new Blogger
            let blogUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );

            let newBlog = new Blog(bloggerKey, blogUser ,req.query.title,req.query.content,publishDate)

          // Write the new blog simultaneously in the blog list.
          let commits = {};
          commits['/blog/'+ data.val().username + '/' + bloggerKey] = newBlog;
          firebase.database().ref().update(commits);
          return true;
        });

    });
    return true;
}

/*------------------------------
updateBlog :: Update existing blog on database
queries :: 
          - blogID  : blog unique ID (required)
          - uname   : username       (required)
          - title   : blog title     (required)
          - content : content        (required)
example :: localhost:8000/blog/update?blogID={blog_unique_id}&uname={username}&title={blog_title}&content={content}
--------------------------------*/
module.exports.updateBlog = function (req,res){

  let blogRef = firebase.database().ref().child('blog/'+ req.query.uname + '/');
  let userRef = firebase.database().ref().child('user');

  let updateDate = new Date();

  blogRef.orderByChild('title').equalTo(req.query.title).once("value").then( function(BlogSnapshot) {

      userRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(UserSnapshot) {

          UserSnapshot.forEach(function(data) {
                // New Blog Object for update
                let blogUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
              });

          });

//console.log(blogUser);


      BlogSnapshot.forEach(function(data) {
         // New Blog Object for update
        let updatingBlog = new Blog ( blogUser, data.val().title, data.val().content, updateDate );
        console.log(updatingBlog);
        // Updating blogUser
        updatingBlog.setBlog(updatingBlog);

        // Update the blogUser data simultaneously in the existing blogUser list.
        blogRef.child(data.key).update(updatingBlog);
      });

  });
  return true;
}

module.exports.updateAuthor = function (req,res){

  let blogRef = firebase.database().ref().child('blogUser');

  blogRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

      snapshot.forEach(function(data) {


      });

  });
  return true;
}



module.exports.deleteBlog = function (req,res){

  let blogRef = firebase.database().ref().child('blogUser');

  blogRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

      snapshot.forEach(function(data) {
        // Delete the blog data simultaneously in the existing blog list.
        blogRef.child(data.key).remove();
      });

  });
  return true;
}
