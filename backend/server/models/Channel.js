const mongoose = require('mongoose');

const { Schema } = mongoose;

const channelSchema = new Schema({
  name: { type: String, unique: true },
  private : Boolean,
  between: Array
});

mongoos.model('channels', channelSchema);
