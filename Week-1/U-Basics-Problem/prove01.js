//request all needed module to make the page work
const http = require('http');
const routes = require('./routes');

//function to run the server and have it register and respond to input.
const server = http.createServer(routes.handler);

//choosing the server listening port as 3000
server.listen(3000);