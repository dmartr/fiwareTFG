var http = require('http');

exports.getContext = function(callback){

var payload = {
  "entities": [
    {
        "type": "Room",
        "isPattern": "false",
        "id": "Chocolate Room"
    }
    ]
};
var payloadString = JSON.stringify(payload);
  var headers = {
  'Content-Type': 'application/json', 
  'Accept': 'application/json',
  'Content-Length': payloadString.length
};

var options = {
  host: 'localhost',
    port: '8080',
    path: '/v1/queryContext',
    method: 'POST',
    headers: headers
};


var req = http.request(options, function(res) {
  res.setEncoding('utf-8');
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.on('data', function (data) {
    console.log(data);
  });

  res.on('end', function() {
    console.log("Reponse end");
  });
});

req.on('error', function(e) {
  console.log('Problem with request');
});

req.write(payloadString);
req.end();


};