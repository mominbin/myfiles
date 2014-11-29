function isEnable(){
console.log('javascript qout is enabled');
}

function toJson(){
	var tableTag=document.getElementById('enterprise_assets');
	var trlist=tableTag.getElementsByTagName('tr');
	var  asserts=[];
	for(var i=1;i<trlist.length;i++){
		var jo={};
		var inputlist=trlist[i].getElementsByTagName('input');
		for(var j=0;j<inputlist.length;j++){
			var name=inputlist[j].getAttribute('name');
			var value=inputlist[j].value;
			console.log(name+'-->'+value);
			jo[name]=value;
		}
		asserts.push(jo);
		console.log(JSON.stringify(jo));
	}
	console.log(asserts);
	return asserts;
	
}