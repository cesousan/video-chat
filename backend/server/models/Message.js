const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  channelName: String,
  content: Stream || Buffer || String,
  userId: String,
  time: Number
});

mongoose.model('messages', messageSchema);
