/**
 * Created by lakhe on 12/7/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./NTB_Nepal-Travel-Tips.pdf', (err, data) => {
        if (err) {
            throw err;
        } else{
            res.send(data);
        }
    });
});

app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});
