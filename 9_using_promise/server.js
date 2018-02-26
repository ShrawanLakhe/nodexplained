/**
 * Created by lakhe on 12/7/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');
const util = require('util');
const Promise = require('bluebird');
const fileSystem = Promise.promisifyAll(require('fs'));
const readFileAsyncSingle = Promise.promisify(require("fs").readFile);
const readFile1 = util.promisify(fs.readFile);

console.log('fileSystem promisified apis', fileSystem)

fileSystem.readFileAsync('./NTB_Nepal-Travel-Tips.pdf')
    .then((content) => {
        console.log('reading a file content ...')
        console.log(content)
    })


readFileAsyncSingle('./NTB_Nepal-Travel-Tips.pdf')
    .then((content) => {
        console.log('reading a file content of single promisified method ...')
        console.log(content)
    })


const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./NTB_Nepal-Travel-Tips.pdf', (err, data) => {
            if (err) {
                reject(err);
            } else{
                resolve(data);
            }
        });
    })
}

readFile()
    .then((result) => {
        console.log('========================== File content read success ==========================')
        console.log('result', result);
    })


readFile1('./NTB_Nepal-Travel-Tips.pdf')
    .then((result) => {
        console.log('========================== File content 1 read success ==========================')
        console.log('result', result);
    })


app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});