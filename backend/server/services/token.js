const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const generateAccessToken = (userID, expiresIn = 3600) => {
  const secret = keys.tokenSecret;
  const token = jwt.sign({}, secret, {
    expiresIn,
    subject: userID.toString()
  });
  return token;
};

module.exports = {
  generateAccessToken
};
