var request = require('request');
var ejs = require('ejs')
const { response } = require('express');

class mainController{
    index(req, res){
        res.render('index');
    }
}

module.exports = mainController;