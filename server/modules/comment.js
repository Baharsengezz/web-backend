//Still Developed

function Comment(id,user, email, title, content ) {
  this.id = id;
  this.author = {
    'userID': userID,
    'first': firstName,
    'last' : lastName,
    'fullName': firstName + ' ' + lastName,
    'username': username,
    'email': email,
  };
  this.title = title;
  this.content = content;
}

Comment.prototype = {
    constructor: Comment
    , setAuthor: function (userID, firstName, lastName, username,email) {
    	this.author = {
                        'userID': userID,
                        'first': firstName,
                        'last' : lastName,
                        'fullName': firstName + ' ' + lastName,
                        'username': username,
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
    }
}