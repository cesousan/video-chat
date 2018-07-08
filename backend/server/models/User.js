const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  avatar: String,
  // the url from which the client is last logged in.
  clientOrigin: String
});

mongoose.model('users', userSchema);
