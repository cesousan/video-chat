const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
// use dotenv
dotenv.config();

// mongoose models.
require('./server/models/User');

const token = require('./server/services/token');
const cors = require('./server/middleware/cors');
const ensureSecure = require('./server/middleware/ensureSecure');
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

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('combined'));
app.use(passport.initialize());
app.use(cors);

// redirecting calls from HTTP to HTTPS
app.use(ensureSecure);

// get ports from env and store it in Express.
const PORT = normalizePort(process.env.PORT || 9000);
app.set('port', PORT);

const SECURE_PORT = normalizePort(process.env.SECURE_PORT || 9443);
app.set('securePort', SECURE_PORT);


// create http server.
const { HTTP } = require('./server/servers')(app);
let port = PORT;
// create https server.
const { HTTPS } = require('./server/servers')(app);

// creates the secured websocket server.
const server = require('./server/socket-server')(HTTPS);
let availablePort = SECURE_PORT;

// *** START SERVERS ***
// starts http server on port PORT
server.on('error', onError(server, port));
HTTP.on('listening', onListening(HTTP));
startServer(HTTP, port);

server.on('error', onError(server, availablePort));
server.on('listening', onListening(server));
// starts secured websocket server on port available.
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
function startServer(server,serverPort) {
  server.listen(serverPort);
}


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  return function (server, serverPort) {
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
        if (serverPort - port < 10) {
          serverPort += 1;
          startServer(server, serverPort);
        } else {
          log(`${bind} is already in use`);
          process.exit(1);
        }
        break;
      default:
        throw error;
    }
  }
}
/**
 * Event listener for HTTP server "listening" event.œ
 */
function onListening (server) {
  return () =>  {
    const addr = server.address();
    const bind = `${
      typeof addr === 'string' ? 'pipe' : 'port'
    } ${
      typeof addr === 'string' ? addr : addr.port
    }`;
    log(`Server is listening on ${bind}`);
    log(`Visit: ${
      server.requestCert !== undefined ? 'https' : 'http'
    }://${ process.env.DOMAIN || 'localhost' }:${addr.port}`);
  }
}

