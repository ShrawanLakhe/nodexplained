/**
 * Created by lakhe on 12/7/17.
 */

console.log('=============================================================================');
console.log('*********Asynchronous Callback Function*********');
console.log('=============================================================================');

const express = require('express');
const app = express();

console.log('1 - Showing the Asynchronous callback function code flow')

app.get('/', (req, res) => {
    const statementRes = "2 - This callback function will be executed only if the client requests for the index page/route.";
    console.log(statementRes)
    res.send(statementRes);
});

app.listen(3000, ()=>{
    console.log('3 - server listening on port 3000');
});

console.log('4 - Although this console.log statement is defined last in the code, this will actually gets printed before the callback function to any other function gets executed.');

