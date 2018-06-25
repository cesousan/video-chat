const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const token = require('./server/services/token');
const keys = require('./server/config/keys');

// mongoose models.
require('./server/models/User');

// custom services.
require('./server/services/passport');
require('./server/services/cache');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(passport.initialize());

require('./server/routes/auth-routes')(app);
require('./server/routes/protected-routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
