function User(id,username, password, email, firstName, lastName) {
  this.id = id;
  this.name = {
    'first': firstName,
    'last' : lastName,
  };
  this.username = username;
  this.email = email;
  this.password = password;
  this.social = [];
}

User.prototype = {
    constructor: User
    , setFullName: function (firstName, lastName) {
    	this.name = {
					   'first': firstName,
					   'last' : lastName,
					};
    }, setFirstName: function (firstName) {
    	this.name['first'] = firstName;
    }, setLastName: function (lastName) {
    	this.name['last'] = lastName;
    }, setEmail: function (email) {
    	this.email = email;
    }, setPassword: function (password) {
    	this.password = password;
    }, setGithubAddress: function (githubAddress) {
    	this.social['github'] = githubAddress;
    }, setLinkedInAddress: function (linkedInAddress) {
    	this.social['linkedin'] = linkedInAddress;
    }, getID: function() {
        return this.id;
    }, getFullName: function() {
        return this.name;
    }, getFirstName: function() {
        return this.name['first'];
    }, getLastName: function() {
        return this.name['last'];
    }, getUsername: function() {
        return this.username;
    }, getEmail: function() {
        return this.email;
    }, getPassword_hr: function() {
        return this.password;
    }, getPassword_md5: function() {
        return this.password;
    }, getSocialMedia: function() {
        return this.social;
    }, getJSON: function() {
        return JSON.stringify(User);
    }
}