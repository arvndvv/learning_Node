const Blog = require("../models/blog");
const moment = require('moment');
//blog_index, blog_details, blog_create_get,blog_create_post,blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All Blogs', blogs: result, moment: moment })
        })
        .catch((err) => {
            console.log(err)
        })
}
const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            const formatedTime = moment(result.createdAt).calendar();
            console.log(formatedTime)
            res.render('blogs/details', { blog: result, title: result.title, formatedTime })
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Blog Not Found' })
        })
}
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create Blog' });
}
const blog_create_post = (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => {
            console.log(err)
        })
}
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs', msg: 'Blog Trashed!' })
        })
        .catch(err => {
            console.log(err);
        })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}