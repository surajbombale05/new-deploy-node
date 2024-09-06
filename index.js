const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send({message:"hello deploying nodejs project successful"});
});

app.listen(8000, (req, res) => {
    console.log('Server is running on port 8000');
});