const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const token = require('./server/services/token');
const keys = require('./server/config/keys');

require('./server/models/User');
require('./server/services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(passport.initialize());

require('./server/routes/auth-routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
