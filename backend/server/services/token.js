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

const verifyAccessToken = (bearerToken, done) => {
  // split token and get encoded part
  if(!bearerToken) return done(false);
  const token = bearerToken.startsWith('bearer ')
    ? bearerToken.split(' ')[1]
    : null;
  if (!token) return done(false, 401, 'Invalid token');

  jwt.verify(token, keys.tokenSecret, async (err, decoded) => {
    if (err) {
      return done(false, 401, 'Unauthorized');
    } else {
      const user = await User.findById(decoded.sub).cache({
        id: decoded.sub
      });
      console.log('************')
      console.log(user);
      return done(user ? true : false);
    }

  })

}

module.exports = {
  generateAccessToken,
  verifyAccessToken
};
