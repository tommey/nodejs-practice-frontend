var koa = require('koa');
var handlebars = require('koa-handlebars');
var Router = require('koa-router');
var config = require('../config');
var router = require('./router');

var app = koa();

app.use(function* (next) {
        var start = new Date();
        console.log('Request', this.method, this.path, start);
        yield next;
        console.log('Request processed in', (new Date()).getTime() - start.getTime(), 'ms');
});

app.use(handlebars({
	defaultLayout: 'main.hbs',
	layoutsDir: 'src/layouts',
	viewsDir: 'src/views'
}));

app.use(router.routes());

module.exports = app;

