/**
 * Created by yan on 16-1-6.
 */
var request = require('request');
var base64 = require('./base64.js');

request = request.defaults({
  jar: true,
  agentOptions: {
    rejectUnauthorized: process.env.ONEAPM_LOGIN_URL === 'https://user.oneapm.com/account/login.do'
  }
});

/**
 * login
 *
 * @throw Error in case of wrong credetials
 */
var login = function () {

  function onLoginResponse(res) {
    if (res.statusCode === 302 && res.headers['location'].indexOf('login.do') === -1) {
      console.log('login success');
    } else {
      throw new Error('Login error');
    }
  }

  request
    .post(process.env.ONEAPM_LOGIN_URL)
    .form({
      encode: true,
      username: process.env.ONEAPM_USERNAME,
      strong: true,
      password: base64(process.env.ONEAPM_PASSWORD),
    })
    .on('response', onLoginResponse);
}

var errorHandler = function (err) {
  console.error(err);
}

login();

module.exports = function (req, res) {

  console.log('proxy - %s -%s', req.method, req.url);

  var proxyRequest = request({
    method: req.method,
    uri: req.url,
    baseUrl: process.env.ONEAPM_BASE_URL
  });

  proxyRequest.on('error', errorHandler);
  req.on('error', errorHandler);
  res.on('error', errorHandler);

  // magical chains of requests
  req.pipe(proxyRequest);
  proxyRequest.pipe(res);
}