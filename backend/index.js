const mongoose = require('mongoose');
// mongoose models.
require('./server/models/User');

const token = require('./server/services/token');
const keys = require('./server/config/keys');

// custom services.
require('./server/services/passport');
require('./server/services/cache');

// mongoose make use of global promises.
mongoose.Promise = global.Promise;
// connection to db
mongoose.connect(keys.mongoURI);

// creates http server.
const app = require('./server/http-server');

// creates the websocket server.
const server = require('./server/socket-server')(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
