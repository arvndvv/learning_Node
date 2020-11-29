const express = require('express');
//express app
const app = express();

//listen to requests

app.listen(3000);
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})
app.get('/about', (req, res) => {

    res.sendFile('./views/about.html', { root: __dirname });
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})

// use is fired at every req, but if req matches something before, say about, or index, then express wont reach executing use.
// we should place app.use at last