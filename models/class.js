var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
	title: String,
	description: String,
	instructor: String,
	lessons: [{
		lesson_number: Number,
		lesson_title: String,
		lesson_body: String
	}]
});

var Class = module.exports = mongoose.model('Class', classSchema);

//fetch all classes
module.exports.getClasses = function(callback, limit) {
	Class.find(callback).limit(limit);
};