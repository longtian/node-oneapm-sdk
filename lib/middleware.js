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

var onLoginResponse = function (res) {
  if (res.statusCode === 302 && res.headers['location'].indexOf('login.do') === -1) {
    console.log('login success');
  } else {
    console.error('login error');
  }
}

request
  .post(process.env.ONEAPM_LOGIN_URL)
  .form({
    encode: true,
    username: process.env.ONEAPM_USERNAME,
    strong: true,
    password: base64(process.env.ONEAPM_PASSWORD),
  }).on('response', onLoginResponse);

module.exports = function (req, res) {
  // TODO return login status

  console.log('proxy - %s -%s', req.method, req.url);
  var proxyRequest = request({
    method: req.method,
    uri: req.url,
    baseUrl: process.env.ONEAPM_BASE_URL
  });

  // magical chains of requests
  req.pipe(proxyRequest);
  proxyRequest.pipe(res);
}