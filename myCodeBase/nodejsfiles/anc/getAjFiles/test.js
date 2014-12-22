//@author: mbmo
//@mail: mominbin@163.com
//@time: 2014年 12月 04日 星期四 13:55:15 CST
function createF(){
var fs=require('fs');
var util=require('util');
var context='hello world !\n';
var file='/home/mbmo/tt/templateTrade.java';
fs.exists(file,function(exist){
    if(!exist){
        fs.writeFile(file,context,function(){
        util.log(file+' be creating!');
        });
    }else{
        util.log('The file:'+file+' is exists');
    }
});
util.log('test2.java is open');
}
var path =require('path');
var file='/home/mbmo/gitrepositories/myfiles/myCodeBase/nodejsfiles/anc/getAjFiles/server.js';

