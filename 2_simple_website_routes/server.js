const express = require('express');
const app = express();

// require('./route')(app);

app.use(express.static('public'))

app.get('/', (req, res) => {
   	res.send("This is homepage");
});

app.get('/about-me', (req, res) => {
	res.send("This is about me page");
});

// app.get('/contact-me', (req, res) => {
// 	res.send("This is contact me page");
// });

app.get('/blogs', (req, res) => {
	res.send("This is blogs page");
});

app.get('/portfolio', (req, res) => {
	res.send("This is my portfolio page");
});

app.post('/blogs', (req, res) => {
	res.send("posting data to the server...");
});

app.put('/blogs', (req, res) => {
	res.send("updating blogs data to the server...");
});

app.patch('/blogs', (req, res) => {
	res.send("patching blog's individual piece of information to the server...");
});

app.delete('/blogs', (req, res) => {
	res.send("deleting blog record from the database...");
});


app.get('/blogs/:blog_title', (req, res) => {
	console.log(req.params)
	res.send(`Fetching information for blog article with title ${req.params.blog_title}`);
});

app.get('/blogs/:blog_title/:country', (req, res) => {
	res.send(`World's tallest mountain ${req.params.blog_title} is situated at ${req.params.country} and is visited by thousands of ${req.query.visitor} tourists`);
});

app.get('/contact-me', (req, res) => {
	console.log(req.query);
	res.send(`This is contact me page. I live in  ${req.query.address}`);
});

// app.get('/*', (req, res) => {
// 	res.send("404 not found");
// });

app.listen(3000, ()=>{
	console.log('server listening on port 3000');
});
