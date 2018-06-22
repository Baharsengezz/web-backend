//Still Developed

function Comment(id,user, blog, comment ) {
  this.id = id;
  this.author = {
    'first': user.name.firstname,
    'last' : user.name.lastname,
    'fullName': user.name.firstname + ' ' + user.name.lastname,
    'email': user.email,
  };
  this.blog = blog;
  this.comment = comment;
}

Comment.prototype = {
    constructor: Comment
    , setComment: function (user, blog, comment) {
        this.author = {
          'first': user.name.firstname,
          'last' : user.name.lastname,
          'fullName': user.name.firstname + ' ' + user.name.lastname,
          'email': user.email,
        };
        this.blog = blog;
        this.comment = comment;
    }, setAuthor: function (firstName, lastName,email) {
    	this.author = {
                        'first': firstName,
                        'last' : lastName,
                        'fullName': firstName + ' ' + lastName,
                        'email': email,
                      };
    }, setUserID: function (userID) {
    	this.author['userID'] = userID;
    }, setFirstName: function (firstName) {
        this.author['first'] = firstName;
    }, setLastName: function (lastName) {
        this.author['last'] = lastName;
    }, setFullName: function (firstName, lastName) {
        this.author['first'] = firstName;
        this.author['last'] = lastName;
        this.author['fullName'] = firstName + ' ' + lastName;
    }, setEmail: function (email) {
        this.author['email']  = email;
    }, setBlog: function (blog) {
        this.blog  = blog;
    }, setComment: function (comment) {
    	this.comment = comment;
    }, getID: function() {
        return this.id;
    }, getAuthor: function() {
        return this.author;
    }, getFirstName: function() {
        return this.author['first'];
    }, getLastName: function() {
        return this.author['last'];
    }, getFullName: function() {
        return [this.author['first'],this.author['last']];
    }, getEmail: function() {
        return this.author['email'];
    }, getBlog: function() {
        return this.blog;
    }, getComment: function() {
        return this.comment;
    }, getJSON: function() {
        return JSON.stringify(Comment);
    }
}

module.exports = Comment;