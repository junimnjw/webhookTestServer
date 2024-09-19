const express = require('express');
const app = express();

//JSON handle
app.use(express.json());

//github webhook endpoint 
app.post('/webhook', (req, res) => {

	const payload = req.body; //data from github via webhook
	console.log('Received webhook event:', payload);

	//handle the data from event
	res.status(200).send('Webhook received');
});

app.listen(9000, ()=>{
	console.log('webhook server running on port 9000');
});
