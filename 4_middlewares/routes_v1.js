/**
 * Created by lakhe on 12/29/17.
 */

const express = require('express');
const router = express.Router();

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
//checks if the authenticated client is actually authorized to access the route
router.use((req, res, next) => {
    if(req.query.role && req.query.role==="admin") {
        next();
    } else {
        res.json({
            message: "You are not authorized to access the functionality"
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
    .post((req, res) => {
        console.log(req.body);
        res.json({
            message: "course saved successfully",
            data: {
                course_name: req.body.course_name,
                course_description: req.body.course_description
            }
        });
    });

module.exports = router;