var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/client-app'));
app.use('/js', express.static(__dirname + '/client-app/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));


app.listen(7000, '0.0.0.0', function() {
	console.log("Listening to " + 7000);
})