const http = require('http');


const server = http.createServer((req,res) => {
    console.log('request from browser to server');

    console.log(req);
    res.setHeader('Content-Type' , 'text/html');
    res.write(`<h1> Hello, Coders </h1>`);
    res.end();
});

// port number , host, callback func

server.listen(3000, 'localhost', () => {
    console.log('server is listening on port 3000');   
});
