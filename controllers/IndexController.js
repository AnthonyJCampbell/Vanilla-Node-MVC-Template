"use strict";
class IndexController {
	static index (req,res,next) {
		res.render('index', { title: 'Welcome to Index!'});
	}
}

module.exports = IndexController;