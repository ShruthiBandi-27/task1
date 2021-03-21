//1.create an instance of XMLHttpRequest
var request = new XMLHttpRequest();
//2.create or open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send the request
request.send();
//Load the response
request.onload = function(){
    var data =  JSON.parse(this.response);
    for(var i in data){
        console.log(data[i].name);
        
    }
}
