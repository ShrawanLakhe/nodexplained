/**
 * Created by lakhe on 12/7/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const fileName = "./tips.txt";

const onFulfilled = (result) => {
    const returnVal = `1 - The promise is resolved successfully for file ${fileName} with following result. \n ${result}`;
    console.log(returnVal);
    return returnVal;
};

const onRejected = (reason) => {
    const returnVal = `The promise is rejected with a reason stating issue with file operations for file ${fileName}. with following reason. \n ${reason}`;
    console.log(returnVal);
    return reason;
};


app.get('/', (req, res, next) => {
    res.send('Hello');
});

readFile(fileName)
    .then(onFulfilled, onRejected)
    .then((fulfillmentVal) => {
        console.log('2 - Promise fulfillment value ' + fulfillmentVal);
        return readFile('./NTB_Nepal-Travel-Tips.pdf')
    }, onRejected)
    .then((pdfContentValue) => {
        console.log('3 - new fulfillment value ', pdfContentValue);
    }, onRejected)
    .then((finalReturnValue) => {
        console.log('4 - final value ', finalReturnValue);
        throw new Error('Could not process further...');
    }, onRejected);


app.listen(3009, ()=>{
    console.log('server listening on port 3000');
});