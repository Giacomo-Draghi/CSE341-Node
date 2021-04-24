const http = require('http');
const routes = require('./routes');

// function rqListener(req, res) {
//
// }

console.log(routes.someText);

// This variable has an http function to request and response datas, and it will be the one creating the server.
const server = http.createServer(routes.handler);

// (req, res) => {
// console.log(req.url, req.method, req.headers);
// The following function closes the server, not to use since we want the server to be up and runnign
// process.exit();
// Constant to get the url being used.
// const url = req.url;

// Constant to get the Method being used.
// const method = req.method;
// });

server.listen(3000);