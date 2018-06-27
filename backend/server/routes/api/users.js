const users = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');

/**
* @summary find all users in database.
* @return { Array<User> } all users in the database.
*/
users.get('/', async (req, res, next) => {
  res.send(await User.find());
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
