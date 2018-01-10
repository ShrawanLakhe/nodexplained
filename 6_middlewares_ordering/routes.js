/**
 * Created by lakhe on 12/29/17.
 */
const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
   console.log('3 - handling api routes')
    next();
});
router.use('/courses/:courseId', (req, res, next) => {
    console.log('4 - executing some mechanism for course detail api route.')
    next();
});

//implement index route and send homepage content as response
router.get('/', (req, res, next) => {
    res.send("This is home page");
});
router.route('/courses')
    .get((req, res) => {
        res.json({
            _id: 1
        });
    });
router.use((req, res, next) => {
    console.log('5 - middleware implemented only for /courses/:courseId route')
    next();
});
router.route('/courses/:courseId')
    .get((req, res) => {
        res.json({
            _id: req.params.courseId
        });
    });
router.param('courseId', (req, res, next, id) => {
    console.log('6 - this middleware will be implemented for only routes having courseId as parameter no matter where it is declared before handling the intended route')
    next();
});
router.use((req, res, next) => {
    console.log('7 - will not be called');
    next();
});
module.exports = router;