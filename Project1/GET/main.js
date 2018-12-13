var http = XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts";
var method = "GET";

http.open(method,url);

http.send();