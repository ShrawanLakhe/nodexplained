const express = require('express');
const app = express();
const port = 3000;

// app.use((req, res, next)=> {
// 	const used = process.memoryUsage();
// 	for (let key in used) {
// 		console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
// 	}
// 	console.log(`client request to ${req.originalUrl} from ip address ${req.ip} at ${new Date()}`)
// 	// next();
// });


app.use((req,res,next) => {
	const onTimeout = () => {
		if(!res.headersSent){
			res.json({
				error: 'request timed out'
			});
		}
	};
	const to = setTimeout(onTimeout, 3000);
	res.once('end', () => {
		clearTimeout(to);  // if the response is sent before timeout occurs
	});
	next();
});

//implement index route and send homepage content as response
app.get('/', (req, res, next) => {
	// res.send("This is home page");
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
