var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.get("*", function(req,res){
	var user={
		language:req.headers['accept-language'],
		ip:req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
		software:req.headers['user-agent']
	}
	res.status(200).json(user);
})
app.listen(port, function(){
	console.log("Server is listening on "+port);
});