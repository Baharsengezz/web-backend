var express = require('express');
var app = express();
var path = require('path');
var route = require('./server/routers/mainRouter');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './server/views'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', route);


app.listen(8000);