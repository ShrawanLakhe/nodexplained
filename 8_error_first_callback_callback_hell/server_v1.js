/**
 * Created by lakhe on 12/7/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./NTB_Nepal-Travel-Tips.pdf', (err, data) => {
        console.log('============================================');
        console.log('For file name - NTB_Nepal-Travel-Tips.pdf which doesn\'t exists in the specified in the folder')
        console.log('============================================');
        if (err) {
            console.log('err', err);
            throw err;
        } else{
            console.log('data', data);
            res.send(data);
        }
    });

    // fs.readFile('./hello-Travel-Tips.pdf', (err, data) => {
    //     console.log('============================================');
    //     console.log('For file name - hello-Travel-Tips.pdf which doesn\'t exists in the specified in the folder')
    //     console.log('============================================');
    //     if (err) {
    //         console.log('err', err);
    //         throw err;
    //     } else{
    //         console.log('data', data);
    //         res.send(data);
    //     }
    // });
});

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});