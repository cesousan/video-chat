const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const generateAccessToken = (userID, expiresIn = 3600) => {
  const secret = keys.tokenSecret;
  const token = jwt.sign({}, secret, {
    expiresIn,
    subject: userID.toString()
  });
  return token;
};

const verifyAccessToken = (bearerToken) => {
  // split token and get encoded part
  if(!bearerToken) return false;
  const token = bearerToken.startsWith('Bearer ')
    ? bearerToken.split(' ')[1]
    : null;
  if (!token) return false;

  return jwt.verify(token, keys.tokenSecret, async (err, decoded) => {
    if (err) {
      return false;
    } else {
      const user = await User.findById(decoded.sub).cache({
        id: decoded.sub
      });
      return user ? user : false;
    }
  });
}

module.exports = {
  generateAccessToken,
  verifyAccessToken
};
