angular.module('customFilter', []).filter("unique", function(){
 return function(data, propertyName){
   if(angular.isArray(data) && angular.isString(propertyName)){
     var result =[];
	 var temp = {};
	 for(int i=0;1<data.length;i++){
		 var value= data[i][propertyName];
		 if(angular.isUndefined(temp[value])){
			 temp[value]=true;
			 result.push(value);
		 }
	 }
	 console.log("customFilter result = " +result);
	 return result;
   }else{
     return data;
   }
 }
});