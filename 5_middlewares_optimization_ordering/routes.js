/**
 * Created by lakhe on 12/29/17.
 */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const authorizeClient = (req, res, next) => {
    console.log(req.query.role);
    //checks if the authenticated client is actually authorized to access the route
    if(req.query.role && req.query.role==="admin") {
        next();
    } else {
        res.json({
            message: "You are not authorized to access the functionality"
        })
    }
};

//implement index route and send homepage content as response
router.get('/', (req, res, next) => {
    res.send("This is home page");
});
//checks for authentication and if authenticated, will pass the control to the next middleware if exists or to the route handler.
router.use((req, res, next) => {
    if(req.query.token && req.query.token==="1234567890") {
        next();
    } else {
        res.json({
            message: "Route not accessible"
        })
    }
});
router.route('/courses')
    .get((req, res) => {
        res.json({
            _id: 1,
            course_name: 'Node.js beginners guide',
            course_description: 'This course will cover all related to the Node.js'
        });
    })
    .post(jsonParser, authorizeClient, (req, res) => {
        console.log(req.body);
        res.json({
            message: "course saved successfully",
            data: {
                course_name: req.body.course_name,
                course_description: req.body.course_description
            }
        });
    });


router.post('/books', urlencodedParser, authorizeClient, (req, res) => {
        console.log(req.body);
        res.json({
            message: "book saved successfully",
            data: {
                book_name: req.body.book_name,
                book_description: req.body.book_description
            }
        });
    });

module.exports = router;