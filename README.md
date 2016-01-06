# node-oneapm-sdk

> SDK for [oneapm.com](http://oneapm.com/) written in Node.js

## About

This is for development usage only. Please do not use it in production.

## Authentication

Provide the credentials as environment variables

`ONEAPM_USERNAME`

`OENAPM_PASSWORD`

You should protect your username and password.

## Express.js Middleware Usage

```js
var express = require('express');
var path = require('path');
var app = express();
var oneapmMiddleware = require('oneapm-sdk').middleware;
app.use(oneapmMiddleware);
app.listen(8080);
```

## LICENSE

MIT

> Do not do evil things with it, or your account may get banned.