const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);
    //set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("helo,there");
    // res.end();
    res.setHeader("Content-Type", "text/html");
    //send html file

    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            //if we want to send only one data, we can directly send data through res.end
            res.end(data)
        }

    })


});
server.listen(2999, 'localhost', () => {
    console.log('listening for request on port 2999');
});