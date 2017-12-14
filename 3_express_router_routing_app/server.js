const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
//apply the routes to our application
app.use('/', router);

app.listen(port, ()=>{
	console.log(`server listening on port ${port}`);
});
