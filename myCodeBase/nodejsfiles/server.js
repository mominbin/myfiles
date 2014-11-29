var http = require("http");
var url = require("url");

function start(route,handle) {

	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		//var postData='';
		console.log("Request for "+pathName+" received!");
		//request.setEncoding("utf8");
		// request.addListener('data', function(postDataChunk){
		// 	postData+=postDataChunk;
		// 	console.log("recived postDataChunk "+postDataChunk+".");
		// });
		// request.addListener('end',function(){
		route(pathName,handle,response,request);
		
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
exports.start = start;