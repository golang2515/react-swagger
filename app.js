var express = require('express');
var app = express();

app.use(express.static('build'));
app.use("/css/*", express.static(__dirname + '/css'));

app.get('/*', function(req, res) {
	console.log(req)
	res.set('Content-Type', 'text/html');
    res.sendFile(__dirname + "/build/" + "index.html");
});
var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log('App listening on port ' + port + '!');
});
