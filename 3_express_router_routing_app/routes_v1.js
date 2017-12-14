/**
 * Created by lakhe on 12/12/17.
 */
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('This is home page')
});

router.get('/about-me', function (req, res) {
    res.send('This is About me page')
});

router.get('/portfolio', (req, res) => {
    res.send("This is my portfolio page");
});

router.get('/blogs', (req, res) => {
    res.send("This is blogs page");
});

router.post('/blogs', (req, res) => {
    res.send("posting data to the database");
});

router.put('/blogs', (req, res) => {
    res.send("updating blog infor");
});

router.patch('/blogs', (req, res) => {
    res.send("updating a piece of information having");
});

router.delete('/blogs/:blog_id', (req, res) => {
    res.send("Deleting blog article");
});

router.get('/course', function (req, res) {
    res.send('<h1>Creating a course articles</h1>')
});

module.exports = router;
