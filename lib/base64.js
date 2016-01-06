/**
 * Created by yan on 16-1-6.
 */
module.exports = function (str) {
  return (new Buffer(str)).toString('base64')
}