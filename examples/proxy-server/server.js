/**
 * Created by yan on 16-1-6.
 */
var express = require('express');
var path = require('path');
var app = express();
var oneapmMiddleware = require('../../').middleware;
app.use(express.static(path.join(__dirname, 'static')))
app.use(oneapmMiddleware);
app.listen(8081);