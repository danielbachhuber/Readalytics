var app = require('express').createServer();
app.set('view engine', 'jade');
app.set('views', __dirname+'/views');

var jade = require('jade');

var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

console.log('Node started');

app.get('/bookmarklet/load/:url', function(req, res) {
	res.contentType('text/javascript');
 	res.render( 'bookmarklet.ejs', { layout: false, url: req.params.url });
});

app.get('/', function(req, res) {
	res.send('Hello world');
});

app.listen(3000);