const bodyParser = require("body-parser");
const express = require("express");
const path = require('path');

module.exports = function(app,config){

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({
        extended: true
    }));
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
		next();
	});


    app.use(express.static(__dirname + '/../public'));
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname + '/../public/index.html'))
    });


    const apiRoutes = require('./apiRoutes')(app);
    app.listen(config.port);

    console.log("server is running at " + config.port);
};