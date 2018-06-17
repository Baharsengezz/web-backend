
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var firebase = require("firebase-admin");

// Firebase API Integration
var serviceAccount = require("./serviceFirebaseKey.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://kodevi-cd585.firebaseio.com"
});

//Body JsonParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));


require('./server/routers/routerManager')(app);


app.listen(8000);