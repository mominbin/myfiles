function struct(key, value) { 
  this.key = key; 
  this.value = value;
}
function MapClass(){ 
 this.map = new Array(); 
 this.set=function(key, value) { 
    for (var i = 0; i < this.map.length; i++) 
    { 
   if ( this.map[i].key === key ) 
   { 
     this.map[i].value = value; 
     return; 
   } 
    }  
  this.map[this.map.length] = new struct(key, value); 
 },
  this.get=function(key) 
  { 
    for (var i = 0; i < this.map.length; i++) 
     { 
   if ( this.map[i].key === key ) 
    { 
     return this.map[i].value; 
   } 
    } 
    
    return null; 
  }, 
  this.removeKey=function(key) 
  { 
    var v; 
    for (var i = 0; i < this.map.length; i++) 
     { 
   v = this.map.pop(); 
   if ( v.key === key ) 
     continue; 
     
   this.map.unshift(v); 
    } 
  }, 
  this.getCount=function() { 
    return this.map.length; 
  }, 
  this.isEmpty=function() { 
    return this.map.length <= 0; 
  } 
} 
var c = new MapClass(); 
var d = new MapClass(); 
c.set("xx","yy"); 
d.set("xx","ddd"); 
alert(c.get("xx")); 
alert(d.get("xx"));