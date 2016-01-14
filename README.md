# oneapm-sdk

[![](https://img.shields.io/npm/v/oneapm-sdk.svg?style=flat-square)](https://www.npmjs.com/package/oneapm-sdk)
[![](https://npm.taobao.org/badge/v/oneapm-sdk.svg)](http://npm.taobao.org/package/oneapm-sdk)

[![NPM](https://nodei.co/npm/oneapm-sdk.png)](https://nodei.co/npm/oneapm-sdk/)

> SDK for [oneapm.com](http://oneapm.com/) written in Node.js

## About

This is for development usage only. Please do not use it in production.

## Authentication

Provide the credentials as environment variables

`ONEAPM_USERNAME` username/email

`ONEAPM_PASSWORD` password in plain text :see_no_evil: 

## Url

`ONEAPM_LOGIN_URL` default is https://user.oneapm.com/account/login.do

`ONEAPM_BASE_URL` default is https://cloud.oneapm.com/

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