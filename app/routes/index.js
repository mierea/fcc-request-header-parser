'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var moment = require('moment');
module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
		//if (req.isAuthenticated()) {
			return next();
		//} else {
	//		res.redirect('/login');
		//}
	}

	var clickHandler = new ClickHandler();



	app.route('/api/whoami/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

      
		



};
