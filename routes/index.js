var express = require('express');
var router = express.Router();
var Class = require('../models/class');
/* GET home page. */
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes){
		if(err) {
			console.log(err);
			res.send(err);
		} else {
			res.render('index', {"classes": classes});
		}
	})
	res.render('index', { title: 'Express' });
});

module.exports = router;