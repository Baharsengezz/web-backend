var path = require('path');
var sender = require('./sender');
var bodyParser = require('body-parser');

module.exports.index = function (req, res) {
    res.render('index')
}

//post
module.exports.contactPost = function (req, res){
    console.log(req.body)
    res.render('contact')
}

module.exports.sentEmail = function (req, res){
    var alanlar = req.body;
    console.log(alanlar);
    sender.send(req,res);
    res.render('contact');
}