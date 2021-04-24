const http = require('http');
// Require the packedge to work with file sistem
const fs = require('fs');

// function rqListener(req, res) {
//
// }

// This variable has an http function to request and response datas, and it will be the one creating the server.
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // The following function closes the server, not to use since we want the server to be up and runnign
    // process.exit();
    // Constant to get the url being used.
    const url = req.url;

    // Constant to get the Method being used.
    const method = req.method;

    // Cheching different URL and method
    if (url == '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        // the retun is needed if we enter the if, so that it stops execution and does not run the part after the if
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // the on method helps us to listen to certain event, the data event runs when a new chunck is ready to be set. 
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            // console.log(parseBody);
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    // set a new header
    res.setHeader('Content-Type', 'text/html');
    //Write multiple line of response
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
    // nothing after the end() function can be .write, it will give a error. 
});

server.listen(3000);