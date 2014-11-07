var $ = require('jquery'),
libxmljs = require('libxmljs');
var fpath='/home/mbmo/gitrepositories/myfiles/myCodeBase';
fs.readFile(fpath,'utf-8',function(err,data){
	if(err) throw err;
	var doc=libxmljs.parseXmlString(data);
		console.log(doc);
		var create='';
		$(doc).find('class').each(function(){
			var  sql='create table '+$(this).attr('name')+' (';
			$(this).find("attribute").each(function(){
				sql+=$(this).attr('name')+' varchar('+$(this).attr('length')+'),';
			$(this).attr('name')
				
			});
			sql+='primary key('+$(this).attr('keyAttributes')+'))'
			create+=sql+';';
			console.log(sql);
		});
		console.log(create);
});