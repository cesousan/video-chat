const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

require('./routes/auth-routes')(app);

require('./routes/protected-routes')(app);

module.exports = app;
