var app = require('express').createServer();
var jade = require('jade');

app.set('view engine', 'jade');
app.set('views', __dirname+'/views');

console.log('Node started');

app.get('/bookmarklet', function(req, res) {
 	res.render('bookmarklet.jade', { layout: false });
});

app.listen(3000);