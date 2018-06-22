const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  avatar: String
});

mongoose.model('users', userSchema);
