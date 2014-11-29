function route(pathName,handle,response,request){
	console.log("About to route a request for "+pathName);
	if(typeof handle[pathName]==='function'){
		return handle[pathName](response,request);
	}else{

		console.log("No request handler found for "+pathName);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write('404 not found!');
		response.end();
	}
}
exports.route=route;