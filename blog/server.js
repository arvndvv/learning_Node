const http = require('http');
const fs = require('fs');
const _ = require('lodash');
const server = http.createServer((req, res) => {
    //lodash
    const num = _.random(0, 20);
    console.log(num);
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet(); // wont work,since we used _.once(), will run only once
    // console.log('request made');
    // console.log(req.url, req.method);
    //set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("helo,there");
    // res.end();
    res.setHeader("Content-Type", "text/html");
    //send html file
    let path = "./views/";

    switch (req.url) {
        case '/':
            path += "index.html";
            res.statusCode = 200; // status code ok
            break;
        case '/about':
            path += "about.html";
            res.statusCode = 200; // status code ok
            break;
        case '/about-me':

            res.statusCode = 301; // status code permanent redirect
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += "404.html";
            res.statusCode = 404; // status code  not found
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            //if we want to send only one data, we can directly send data through res.end
            res.end(data);

        }

    })


});
server.listen(2999, 'localhost', () => {
    console.log('listening for request on port 2999');
});


/*

? Status Codes
* 200 - ok
* 301 - Resource moved
* 404 - not found
* 500 - Internal server error
! Range
* 100 Range - Informational responses
* 200 Range - Success codes
* 300 Range - Codes for redirects
* 400 Range - User or client error codes
* 500 Range - Server error codes
*/