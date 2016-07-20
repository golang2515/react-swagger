var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!');
});
