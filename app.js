//npm install --save express http url ws.
// server side js in node 

const express = require('express'); // framework for server side script 
const http = require('http');
const app = express();

app.use(express.static('public'));

const server = http.createServer(app);
server.listen(8080, ()=>{
    console.log('app listening on port 8080');
    console.log('just making a change');
});

