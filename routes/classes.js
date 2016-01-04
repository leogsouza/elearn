var express = require('express');
var router = express.Router();
var Class = require('../models/class');
/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('Get all classes');
	Class.getClasses(function(err, classes){
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			res.render('classes/index', {"classes": classes});
		}
	},3);
	
});

router.get('/:id/details', function(req, res, next) {
	
	Class.getClassById([req.params.id],function(err, className){

		if(err) {
			console.log(err);
			res.send(err);
		} else {
			console.log('Get class by id',className);
			res.render('classes/details', {"class": className});
		}
	});
	
});

module.exports = router;
