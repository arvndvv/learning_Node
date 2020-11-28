const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);
    //set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("helo,there");
    // res.end();
    res.setHeader("Content-Type", "text/html");
    res.write('<p>hi</p><h1>biggie</h1>')
    res.end();

});
server.listen(2999, 'localhost', () => {
    console.log('listening for request on port 2999');
});