const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/javascript'});
  response.end('<h1>Hello World!</h1> <p>This is a node app</p>');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');