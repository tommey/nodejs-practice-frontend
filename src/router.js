var koa = require('koa');
var superagent = require('superagent');
var fs = require('fs');
var path = require('path');
var Router = require('koa-router');

var router = Router();

router.get('/', function* (next) {
	var that = this;
	var list = yield new Promise(function(resolve, reject) {
		superagent.get('http://localhost:83/').end(function(err, data) {
	    		if (err) {
				return reject(err);
			}
			resolve(JSON.parse(data.text));
		});
	});
	console.log(list.users, list.products);
	yield this.render('main', list);
});

router.get('/legacy.html', function* (next) {
	this.set('Content-Type', 'text/html');
	this.body = fs.createReadStream(path.join(__dirname, '../legacy.html'));
});

module.exports = router;

