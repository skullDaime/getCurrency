// JavaScript Document

const http = require('http');
let fs = require('fs');
//var express = require('express');
//var app = express();

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('index.html', null, function (error, data) {
  fs.
  }
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

//app.use(express.static('static/'));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
