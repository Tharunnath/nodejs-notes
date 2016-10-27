var http = require("http");

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/plain"});
	response.end("hello hyd");
});
server.listen(8081,function(){
	console.log("server listening at port");
})