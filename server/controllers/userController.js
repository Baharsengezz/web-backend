//Still Developed
const request= require('request');
const User = require('../modules/users');

let firebase = require("firebase-admin");

/*------------------------------
addUser :: Add a new user on database
queries :: 
          - uname : username   (required)
          - pass  : password   (required)
          - email : email	   (required)
          - first : first name (optional)
          - last : last name   (optional)

example :: localhost:8000/user/add?uname={username}&pass={00000}&email={email_address}&first={name}&last={surname}
--------------------------------- */
module.exports.addUser = function (req,res){

  // Get a key for a new user.
  let newUserKey = firebase.database().ref().child('user').push().key;

  // A new user entry.
  let newUser = new User( newUserKey, req.query.uname, req.query.pass, req.query.email, req.query.first, req.query.last );

  // Write the new user simultaneously in the user list.
  let commits = {};
  commits['/user/' + newUserKey] = newUser;
  firebase.database().ref().update(commits);
  return true;
}


/*------------------------------
updateUser :: Update existing user on database
queries :: 
          - uname : username   (required)
          - pass  : password   (required)
          - email : email	   (required)
          - first : first name (optional)
          - last : last name   (optional)

example :: localhost:8000/user/update?uname=kodevi&pass=00000&email=email@kodevi.org&first=Kod&last=Evi
---------------------------------*/
module.exports.updateUser = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setUser( req.query.uname, req.query.pass, req.query.email, req.query.first, req.query.last );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updateUserName :: Update username which existing user
queries :: 
          - uname : username     (required)
          - new   : new username (required)

example :: localhost:8000/user/update/username?uname={username}&new={new_username}
---------------------------------*/
module.exports.updateUserName = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setUsername( req.query.new );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updatePassword :: Update password which existing user
queries :: 
          - uname : username     (required)
          - new   : new password (required)

example :: localhost:8000/user/update/password?uname={username}&new={new_password}
---------------------------------*/
module.exports.updatePassword = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setPassword( req.query.new );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updateEmail :: Update email which existing user
queries :: 
          - uname : username     (required)
          - new   : new email (required)

example :: localhost:8000/user/update/email?uname={username}&new={new_email}
---------------------------------*/
module.exports.updateEmail = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setEmail( req.query.new );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updateFullName :: Update full name which existing user
queries :: 
          - uname : username       (required)
          - first : new first name (required)
          - last : new last name   (required)

example :: localhost:8000/user/update/name?uname={username}&first={new_firstname}&last={new_lastname}
---------------------------------*/
module.exports.updateFullName = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setFullName( req.query.first, req.query.last );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updateFirstName :: Update first name which existing user
queries :: 
          - uname : username       (required)
          - first : new first name (required)

example :: localhost:8000/user/update/firstname?uname={username}&first={new_firstname}
---------------------------------*/
module.exports.updateFirstName = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setFirstName( req.query.first );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
updateLastName :: Update last name which existing user
queries :: 
          - uname : username       (required)
          - last : new last name   (required)

example :: localhost:8000/user/update/lastname?uname={username}&last={new_lastname}
---------------------------------*/
module.exports.updateLastName = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

	    	 // A new user entry.
  			let updatingUser = new User( data.key, data.val().username, data.val().password, data.val().email, data.val().name.first, data.val().name.last );
  			
  			// Updating User
  			updatingUser.setLastName( req.query.last );

  			// Update the user data simultaneously in the existing user list.
			usersRef.child(data.key).update(updatingUser);
	    });

	});
	return true;
}

/*------------------------------
deleteUser :: Delete existing user
queries :: 
          - uname : username       (required)

example :: localhost:8000/user/delete?uname={username}
---------------------------------*/
module.exports.deleteUser = function (req,res){
  
	let usersRef = firebase.database().ref().child('user');
	usersRef.orderByChild('username').equalTo(req.query.uname).once("value").then( function(snapshot) {

	    snapshot.forEach(function(data) {

			// Delete the user data simultaneously in the existing user list.
			usersRef.child(data.key).remove();
	    });

	});
	return true;
}