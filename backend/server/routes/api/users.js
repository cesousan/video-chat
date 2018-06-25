const users = require('express').Router();
const mongoose = require('mongoose');
const User = mongoose.model('users');

users.get('/', async (req, res, next) => {
  res.send(
    await User.find()
      .cache({
        key: req.user.id
      })
  );
});

users.get('/:userId', async (req, res, next) => {
  res.send(await User.findById(req.params.userId))
});

module.exports = users;
