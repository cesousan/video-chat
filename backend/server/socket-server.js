const http = require('http');
const WebSocket = require('ws');
const keys = require('./config/keys');
const { verifyAccessToken } = require('./services/token');

module.exports = app => {
  // initialize simple http server
  const server = http.createServer();
  const path = '/api/chat';

  const verifyClient = async (info, done) => {
    const headers = info.req.headers;
    if(!keys.allowedClientOrigins.includes(headers.origin)) return done(false, 401, 'Unauthorized');

    // TESTING PURPOSES ONLY !!!
    // comment the line below or refresh the token manually after authenticating
    headers.authorization = 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MzAzNTM4MDAsImV4cCI6MTUzMDM1NzQwMCwic3ViIjoiNWIyYjZkMzRmNmY4OTUxNWVjODFlMWI2In0.SFJ1KKtMwRuZpo1c0uPHxj0ITggIaessisYr7X2v6hI';
    // *********************** //

    if(!headers.authorization) {
      return done(false, 401, 'Unauthorized');
    }
    // returns a user or false
    const verified = await verifyAccessToken(headers.authorization);
    // adding verified status / object to the request object.
    info.req.verified = verified;
    console.log(info.req.verified);
    return verified
      ? done(verified, 200)
      : done(false, 401, 'Invalid credentials');
  };

  server.on('request', app);

  // initialize the websocket server instance
  const wss = new WebSocket.Server({ server, path, verifyClient });

  wss.on('connection', (ws, request) => {
    console.log('about to launch websocket connection configuration');
    require('./services/ws/websocket')(ws, request);
  });

  return server;
}
