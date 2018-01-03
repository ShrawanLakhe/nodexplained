const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');
app.use((req, res, next) => {
	console.log('1 - initializing client request');
	next();
});
app.use((req, res, next)=> {
	console.log(`2 - ${req.method} client request to ${req.originalUrl} from ip address ${req.ip} at ${new Date()}`)
	next();
});
//apply the routes to our application
app.use('/', router);

app.listen(port, ()=>{
	console.log(`server listening on port ${port}`);
});
