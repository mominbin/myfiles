function route(pathName,handle){
	console.log("About to route a request for "+pathName);
	if(typeof handle[pathName]==='function'){
		return handle[pathName]();
	}else{
		console.log("No request handler found for "+pathName);
		return "404 Not Found!";
	}
}
exports.route=route;