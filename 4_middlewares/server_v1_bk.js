const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use((req, res, next)=> {
	console.log(`${req.method} client request to ${req.originalUrl} from ip address ${req.ip} at ${new Date()}`)
	next();
});

// parse application/json
app.use(bodyParser.json());

//implement index route and send homepage content as response
app.get('/', (req, res, next) => {
	res.send("This is home page");
});
//implement course route and send json response rather than string
app.get('/courses', (req, res, next) => {
	res.json({
		_id: 1,
		course_name: 'Node.js beginners guide',
		course_description: 'This course will cover all related to the Node.js'
	});
});

//post course data
app.post('/courses', (req, res, next) => {
	res.json({
		message: "course saved successfully",
		data: {
			course_name: req.query.course_name,
			course_description: req.query.course_description
		}
	});
});

app.listen(port, ()=>{
	console.log(`server listening on port ${port}`);
});
