/**
 * Created by yan on 16-1-6.
 */

if (!process.env.ONEAPM_USERNAME || !process.env.ONEAPM_PASSWORD) {
  throw new Error('Please provice OneAPM login credentials');
}

if (!process.env.ONEAPM_BASE_URL) {
  process.env.ONEAPM_BASE_URL = 'https://cloud.oneapm.com/';
}

if (!process.env.ONEAPM_LOGIN_URL) {
  process.env.ONEAPM_LOGIN_URL = 'https://user.oneapm.com/account/login.do';
}

exports.middleware = require('./lib/middleware.js');