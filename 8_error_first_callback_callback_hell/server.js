/**
 * Created by lakhe on 12/7/17.
 */

const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    try {
        fs.readFile('./light-Travel-Tips.pdf', (err, data) => {
            console.log('============================================');
            console.log('For file name - light-Travel-Tips.pdf which doesn\'t exists in the specified in the folder')
            console.log('============================================');
            if (err) {
                console.log('err', err);
                throw err;
            } else{
                console.log('data', data);
                res.send(data);
            }
        });
    } catch (err) {
        // This will not catch the throw!
        console.error(err);
    }
});

checkFileExists((err) => {
    seeFilePermissions((err) => {
        readFile((err)=> {
            appendFile((err) => {
                readFile((err) => {
                    writeFile((err) => {
                        removeOriginalFile((err) =>{

                        })
                    })
                })
            })
        })

    })
})


app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});