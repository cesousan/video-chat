const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');

// use dotenv
dotenv.config({
  silent: true,
});

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

// creates express app.
const app = express();

// view engine
app.set('views', (path.join(__dirname, '/server/views')));
app.set('view engine', 'pug');

// create http server.
require('./server/http-server')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('combined'));

app.use(passport.initialize());

// get ports from env and store it in Express.
const PORT = normalizePort(process.env.PORT || 5000);
app.set('port', PORT);

// creates the websocket server.
const server = require('./server/socket-server')(app);
let availablePort = PORT;

// *** START SERVER ***
server.on('error', onError);
server.on('listening', onListening);

startServer(server, availablePort);
// ********************

// utility functions

/**
 * Simple logger function.
 */
const log = (message) => {
  process.stdout.write(`${message}\n`);
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Listen on provided port, on all network interfaces.
 */
function startServer(server, serverPort) {
  server.listen(serverPort);
}


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = `${
    typeof port === 'string' ? 'Pipe' : 'Port'
  } ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      if (availablePort - port < 10) {
        availablePort += 1;
        startServer(availablePort);
      } else {
        log(`${bind} is already in use`);
        process.exit(1);
      }
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = `${
    typeof addr === 'string' ? 'pipe' : 'port'
  } ${
    typeof addr === 'string' ? addr : addr.port
  }`;
  log(`Server is listening on ${bind}`);
  log(`Visit: http://localhost:${addr.port}`);
}
