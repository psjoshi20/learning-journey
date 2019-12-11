const http =require('http');//import http from 'http'
const express = require('express');//import express from 'express'
const logger = require('morgan');//import logger from 'morgan';
const bodyParser = require('body-parser');//import bodyParser from 'body-parser';

const hostname = '127.0.0.1'; 
const port = 3000;
const app = express();
// setup express app server 
const server = http.createServer(app); 
app.use(logger('dev'));

var userRouter =require('./servers/controllers/routes/user');
app.use('/users', userRouter);
routes(app);

// Log requests to the console.
// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the default API route.',
}));

server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });

module.exports = app;
 
//require('./server/routes')(app);