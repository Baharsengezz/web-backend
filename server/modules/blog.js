function Blog(id, user, title, content ) {
  this.id = id;
  this.author = {
    'userID': user.id,
    'first': user.name.first,
    'last' : user.name.last,
    'fullName': user.name.first+ ' ' + user.name.last,
    'username': user.username,
    'email': user.email,
  };
  this.title = title;
  this.content = content;
}

Blog.prototype = {
    constructor: Blog
    , setAuthor: function (user) {
    	this.author = {
                        'userID': user.id,
                        'first': user.name.first,
                        'last' : user.name.last,
                        'fullName': user.name.first+ ' ' + user.name.last,
                        'username': user.username,
                        'email': user.email,
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
    }, setTitle: function (title) {
    	this.title = title;
    }, setContent: function (content) {
    	this.content = content;
    }, getID: function() {
        return this.id;
    }, getAuthor: function() {
        return this.author;
    }, getUserID: function() {
        return this.author['userID'];
    }, getFirstName: function() {
        return this.author['first'];
    }, getLastName: function() {
        return this.author['last'];
    }, getFullName: function() {
        return [this.author['first'],this.author['last']];
    }, getUserName: function() {
        return this.author['username'];
    }, getEmail: function() {
        return this.author['email'];
    }, getTitle: function() {
        return this.title;
    }, getContent: function() {
        return this.content;
    }, getJSON: function() {
        return JSON.stringify(Blog);
    }
}

module.exports = Blog;
