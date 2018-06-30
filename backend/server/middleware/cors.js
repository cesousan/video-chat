const Cors = require('cors');
const keys = require('../config/keys');

const whiteList = keys.allowedClientOrigins;
console.log(whiteList);
const options = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = Cors(options);
