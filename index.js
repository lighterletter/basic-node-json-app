var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

//Connect to the API URL 
var request = http.get(
	'http://api.flickr.com/services/feeds/photos_public.gne?tags=apollo&tagmode=all&format=json&jsoncallback=?'
	, function(response){
var body = '';
  
  //Read the data: (from the response)
  response.on('data', function (chunk) {
    body += chunk; //add chunks of data to the body from the constant stream as they come in.
  });
  
  response.on('end',function(){
    
    // This will print out the json of the query to the browser
    res.end(body);
  });


  //Parse the data: read from string into program friendly way of interacting with it.
  //Print the data:
});


//If the site contains an error message you can forward that. 'on' 
//error we can chain an error handler onto the request itself: 
//' }).on('error',function(e){}' . Or like the following which was chosen for clarity.
//handles error on the request.
request.on('error', function(error){
           console.error(error.message);
});
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
