const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./routes');

app.use((req, res, next)=> {
	console.log(`${req.method} client request to ${req.originalUrl} from ip address ${req.ip} at ${new Date()}`)
	next();
});

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//apply the routes to our application
app.use('/', router);

app.listen(port, ()=>{
	console.log(`server listening on port ${port}`);
});
