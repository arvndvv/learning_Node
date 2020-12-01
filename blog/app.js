const express = require('express');
//morgan middleware
// const morgan = require('morgan')
const mongoose = require('mongoose');
const Blog = require("./models/blog")
    //express app
const app = express();
//connect to mongodb
const dbURI = 'mongodb+srv://betabrain:beta1234@blog.wo1vw.mongodb.net/blogtut?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("connected to db");
        //listen to requests

        app.listen(3000);
    })
    .catch((err) => console.log(err))
    // register view engine
app.set('view engine', 'ejs');
//app.set('views','myviews'); //! default folder it will look at if this is not defined is  views/

// to allow us to use external static files like styles.css, we need to provide permission
// for that we use an inbuilt express middleware
//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
    // anything inside public folder will be available
    // app.use(morgan('dev'));
    //routes
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    // res.redirect('/blogs');
    res.redirect('/blogs')
})
app.get('/about', (req, res) => {
        // res.sendFile('./views/about.html', { root: __dirname });
        res.render('about', { title: 'About' });
    })
    //blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        })
});

//taking post request data and sending it to  blog model
app.post('/blogs', (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => {
            console.log(err)
        })

})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
})


app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog: result, title: result.title })
        })
        .catch(err => {
            console.log(err)
        })
})
app.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {

            res.json({ redirect: '/blogs', msg: 'Blog Trashed!' })
        })
        .catch(err => {
            console.log(err);
        })
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