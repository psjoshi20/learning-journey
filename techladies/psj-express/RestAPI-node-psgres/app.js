const http =require('http');//import http from 'http'
const express = require('express');//import express from 'express'
const logger = require('morgan');//import logger from 'morgan';
const bodyParser = require('body-parser');//import bodyParser from 'body-parser';
import routes from './server/routes'; 
// Set up the express app
const hostname = '127.0.0.1'; 
const port = 3000;
const app = express();
const server = http.createServer(app); 
routes(app);

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); });

module.exports = app;
 
