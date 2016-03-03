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



	app.route('/')
		.get(isLoggedIn, function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

       app.get('/:query', function(req, res) {
        var date = req.params.query;
		res.setHeader('Content-Type', 'application/json');
		if(!isNaN(parseInt(date))){
			 res.send({"unix": parseInt(date), "natural": moment.unix(date).format("MMMM D, YYYY")});
		} else if (moment(date, "MMMM D, YYYY").isValid()){
			 res.send({"unix":parseInt(moment.unix(moment(date, "MMMM D, YYYY").unix()).format("X")), "natural": date});
		}
		else {
			res.send({"unix":null,"natural":null});
		}
		});
		



};
