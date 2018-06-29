const users = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { verifyAccessToken } = require('../../services/token');



/**
* @summary find all users in database.
* @return { Array<User> } all users in the database.
*/
users.get('/', async (req, res, next) => {
  res.send(await User.find());
});

users.get('/info', async (req, res, next) => {
  const token = req.headers.authorization;
  if(token) {
    const verified = await verifyAccessToken(token);
    verified
      ? res.status(200).send({status: 'data', user: verified})
      : res.status(401).send({status: 'error', message: 'Authentication failed'});
  } else {
    res.status(401).send({status: 'error', message: 'Token is mendatory'});
  }
});

/**
* @summary find a specific user in database by its mongoose id,
* and cache the result.
* @param { string } userId the mongoose id of the user.
*/
users.get('/:userId', async (req, res, next) => {
  res.send(
    await User.findById(req.params.userId)
      .cache({
        key: req.params.userId
      })
    );
});

module.exports = users;
