const express = require('express');
//express app
const app = express();
// register view engine
app.set('view engine', 'ejs');
//app.set('views','myviews'); //! default folder it will look at if this is not defined is  views/

//listen to requests

app.listen(3000);
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    const blogs = [{ title: "Getting Started", snippet: "Lorem ipsum dolor sit amet consectetur." },
        { title: "Installation", snippet: "Lorem ipsum dolor sit amet consectetur." },
        { title: "First Project", snippet: "Lorem ipsum dolor sit amet consectetur." }
    ];
    res.render('index', { title: 'Home', blogs })
})
app.get('/about', (req, res) => {

    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
})
app.get('/blogs/create', (req, res) => {
        res.render('create', { title: 'Create Blog' });
    })
    //redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' })

})

// use is fired at every req, but if req matches something before, say about, or index, then express wont reach executing use.
// we should place app.use at last