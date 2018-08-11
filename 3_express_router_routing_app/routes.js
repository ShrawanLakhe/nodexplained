/**
 * Created by lakhe on 12/12/17.
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is home page')
});

router.get('/about-me', (req, res) => {
    res.send('This is About me page')
});

router.get('/portfolio', (req, res) => {
    res.send("This is my portfolio page");
});

router.route('/blogs')
    .get((req, res) => {
        res.send("This is blogs page");
    })
    .post((req, res) => {
        res.send("posting data to the database");
    })
    .put((req, res) => {
        res.send("updating blog infor");
    })
    .patch((req, res) => {
        res.send("updating a piece of information having");
    })
    .delete((req, res) => {
        res.send("Deleting blog article");
    });

router.get('/course', (req, res) => {
    res.send('<h1>Creating a course articles</h1>')
});

module.exports = router;
