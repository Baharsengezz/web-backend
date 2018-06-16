
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var admin = require("firebase-admin");

// Firebase API Integration
var serviceAccount = require("path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kodevi-cd585.firebaseio.com"
});

//Body JsonParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', route);

require('./server/routers/mainRouter')(app);


app.listen(8000);