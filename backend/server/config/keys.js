switch (process.env.NODE_ENV) {
  case 'production' : {
    module.exports = require('./prod');
    break;
  }
  // case 'preprod' : {
  //   module.exports = require('./pre-prod');
  //   break;
  // }
  default: {
    module.exports = require('./dev');
  }
}
