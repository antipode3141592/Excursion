//from https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
'use strict';

const express = require('express');
// var http = require('http');
var fs = require('fs');
var app = express();

// Constants
const PORT = 3000;
// const HOST = '0.0.0.0';

// let server = http.createServer(function (req, res) {
//   fs.readFile('./index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// });

// app.get('/', (req, res, next) => {
//     res.send(fs.readFile('./index.html', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//     }))
// });

app.use(express.static('public'));
app.use(express.static('resources'));


app.listen(PORT);
// app.listen(PORT, HOST);
console.log(`Running on http://localhost:${PORT}`);