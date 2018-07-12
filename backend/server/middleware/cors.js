const Cors = require('cors');
const keys = require('../config/keys');

module.exports = (req, res, next) => {
  const whiteList = keys.allowedClientOrigins;
  const options = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        // console.log(`origin ${origin} is accepted`);
        callback(null, true)
      } else {
        // console.log(`origin ${origin} is rejected`);
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

  corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

  Cors(options);

}
