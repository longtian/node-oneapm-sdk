/**
 * Created by yan on 16-1-6.
 */

if (!process.env.ONEAPM_USERNAME || !process.env.ONEAPM_PASSWORD) {
  throw new Error('Please provice OneAPM login credentials');
}

exports.middleware = require('./lib/middleware.js');