//Still Developed

const request = require('request');
var Blog = require('../modules/blog');

let firebase = require("firebase-admin");

module.exports.createBlog = function (req,res){

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

module.exports.setAuthor = function (req,res){

  let blogRef = firebase.database().ref().child('blogUser');

  blogRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

      snapshot.forEach(function(data) {


      });

  });
  return true;
}

module.exports.updateBlog = function (req,res){

  let blogRef = firebase.database().ref().child('blogUser');

  blogRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

      snapshot.forEach(function(data) {
         // A new blogUser entry.
        let updatingBlogUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );

        // Updating blogUser
        updatingBlogUser.setAuthor(  );

        // Update the blogUser data simultaneously in the existing blogUser list.
        blogRef.child(data.key).update(updatingBlogUser);
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
